! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
    }
}(function() {
    return function o(r, s, l) {
        function u(i, t) {
            if (!s[i]) {
                if (!r[i]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(i, !0);
                    if (d) return d(i, !0);
                    var n = new Error("Cannot find module '" + i + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var a = s[i] = {
                    exports: {}
                };
                r[i][0].call(a.exports, function(t) {
                    var e = r[i][1][t];
                    return u(e || t)
                }, a, a.exports, o, r, s, l)
            }
            return s[i].exports
        }
        for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
        return u
    }({
        1: [function(t, e, i) {}, {}],
        2: [function(t, e, i) {
            var o = t(6);

            function n(t) {
                if (t) {
                    var e = [0, 0, 0],
                        i = 1,
                        n = t.match(/^#([a-fA-F0-9]{3})$/i);
                    if (n) {
                        n = n[1];
                        for (var a = 0; a < e.length; a++) e[a] = parseInt(n[a] + n[a], 16)
                    } else if (n = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                        n = n[1];
                        for (a = 0; a < e.length; a++) e[a] = parseInt(n.slice(2 * a, 2 * a + 2), 16)
                    } else if (n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = parseInt(n[a + 1]);
                        i = parseFloat(n[4])
                    } else if (n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(n[a + 1]));
                        i = parseFloat(n[4])
                    } else if (n = t.match(/(\w+)/)) {
                        if ("transparent" == n[1]) return [0, 0, 0, 0];
                        if (!(e = o[n[1]])) return
                    }
                    for (a = 0; a < e.length; a++) e[a] = d(e[a], 0, 255);
                    return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function a(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function d(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function c(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            e.exports = {
                getRgba: n,
                getHsla: a,
                getRgb: function(t) {
                    var e = n(t);
                    return e && e.slice(0, 3)
                },
                getHsl: function(t) {
                    var e = a(t);
                    return e && e.slice(0, 3)
                },
                getHwb: r,
                getAlpha: function(t) {
                    var e = n(t); {
                        if (e) return e[3];
                        if (e = a(t)) return e[3];
                        if (e = r(t)) return e[3]
                    }
                },
                hexString: function(t) {
                    return "#" + c(t[0]) + c(t[1]) + c(t[2])
                },
                rgbString: function(t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                    return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                },
                rgbaString: s,
                percentString: function(t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                    var i = Math.round(t[0] / 255 * 100),
                        n = Math.round(t[1] / 255 * 100),
                        a = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + a + "%)"
                },
                percentaString: l,
                hslString: function(t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                    return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                },
                hslaString: u,
                hwbString: function(t, e) {
                    void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                    return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                },
                keyword: function(t) {
                    return h[t.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in o) h[o[f]] = f
        }, {
            6: 6
        }],
        3: [function(t, e, i) {
            var d = t(5),
                n = t(2),
                r = function(t) {
                    return t instanceof r ? t : this instanceof r ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = n.getRgba(t)) ? this.setValues("rgb", e) : (e = n.getHsla(t)) ? this.setValues("hsl", e) : (e = n.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new r(t);
                    var e
                };
            r.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return i < e ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var i = this,
                        n = t,
                        a = void 0 === e ? .5 : e,
                        o = 2 * a - 1,
                        r = i.alpha() - n.alpha(),
                        s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                        l = 1 - s;
                    return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, i = new r,
                        n = this.values,
                        a = i.values;
                    for (var o in n) n.hasOwnProperty(o) && (t = n[o], "[object Array]" === (e = {}.toString.call(t)) ? a[o] = t.slice(0) : "[object Number]" === e && (a[o] = t));
                    return i
                }
            }, r.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, r.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, r.prototype.getValues = function(t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, r.prototype.setValues = function(t, e) {
                var i, n, a = this.values,
                    o = this.spaces,
                    r = this.maxes,
                    s = 1;
                if (this.valid = !0, "alpha" === t) s = e;
                else if (e.length) a[t] = e.slice(0, t.length), s = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
                    s = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var l = o[t];
                    for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
                    s = e.alpha
                }
                if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) n = Math.max(0, Math.min(r[t][i], a[t][i])), a[t][i] = Math.round(n);
                for (var u in o) u !== t && (a[u] = d[t][u](a[t]));
                return !0
            }, r.prototype.setSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, r.prototype.setChannel = function(t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : (i === n[e] || (n[e] = i, this.setValues(t, n)), this)
            }, "undefined" != typeof window && (window.Color = r), e.exports = r
        }, {
            2: 2,
            5: 5
        }],
        4: [function(t, e, i) {
            function a(t) {
                var e, i, n = t[0] / 255,
                    a = t[1] / 255,
                    o = t[2] / 255,
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            }

            function n(t) {
                var e, i, n = t[0],
                    a = t[1],
                    o = t[2],
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
            }

            function o(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return [a(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, n))), 100 * (n = 1 - 1 / 255 * Math.max(e, Math.max(i, n)))]
            }

            function s(t) {
                var e, i = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255;
                return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
            }

            function l(t) {
                return C[JSON.stringify(t)]
            }

            function u(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255;
                return [100 * (.4124 * (e = .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = .04045 < i ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = .04045 < n ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function d(t) {
                var e = u(t),
                    i = e[0],
                    n = e[1],
                    a = e[2];
                return n /= 100, a /= 108.883, i = .008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = .008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
            }

            function c(t) {
                var e, i, n, a, o, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                for (var u = 0; u < 3; u++)(n = r + 1 / 3 * -(u - 1)) < 0 && n++, 1 < n && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
                return a
            }

            function h(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    r = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * o),
                    l = 255 * n * (1 - i * (1 - o));
                n *= 255;
                switch (a) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s]
                }
            }

            function f(t) {
                var e, i, n, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (1 < u && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
                    default:
                    case 6:
                    case 0:
                        r = i, g = a, b = s;
                        break;
                    case 1:
                        r = a, g = i, b = s;
                        break;
                    case 2:
                        r = s, g = i, b = a;
                        break;
                    case 3:
                        r = s, g = a, b = i;
                        break;
                    case 4:
                        r = a, g = s, b = i;
                        break;
                    case 5:
                        r = i, g = s, b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
            }

            function m(t) {
                var e, i, n, a = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100;
                return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = .0031308 < (e = 3.2406 * a + -1.5372 * o + -.4986 * r) ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = .0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = .0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return i /= 100, n /= 108.883, e = .008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = .008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = .008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function x(t) {
                var e, i, n, a, o = t[0],
                    r = t[1],
                    s = t[2];
                return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
            }

            function y(t) {
                var e, i = t[0],
                    n = t[1],
                    a = t[2];
                return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
            }

            function k(t) {
                return m(x(t))
            }

            function w(t) {
                var e, i = t[0],
                    n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
            }

            function M(t) {
                return S[t]
            }
            e.exports = {
                rgb2hsl: a,
                rgb2hsv: n,
                rgb2hwb: o,
                rgb2cmyk: s,
                rgb2keyword: l,
                rgb2xyz: u,
                rgb2lab: d,
                rgb2lch: function(t) {
                    return y(d(t))
                },
                hsl2rgb: c,
                hsl2hsv: function(t) {
                    var e = t[0],
                        i = t[1] / 100,
                        n = t[2] / 100;
                    if (0 === n) return [0, 0, 0];
                    return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
                },
                hsl2hwb: function(t) {
                    return o(c(t))
                },
                hsl2cmyk: function(t) {
                    return s(c(t))
                },
                hsl2keyword: function(t) {
                    return l(c(t))
                },
                hsv2rgb: h,
                hsv2hsl: function(t) {
                    var e, i, n = t[0],
                        a = t[1] / 100,
                        o = t[2] / 100;
                    return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                },
                hsv2hwb: function(t) {
                    return o(h(t))
                },
                hsv2cmyk: function(t) {
                    return s(h(t))
                },
                hsv2keyword: function(t) {
                    return l(h(t))
                },
                hwb2rgb: f,
                hwb2hsl: function(t) {
                    return a(f(t))
                },
                hwb2hsv: function(t) {
                    return n(f(t))
                },
                hwb2cmyk: function(t) {
                    return s(f(t))
                },
                hwb2keyword: function(t) {
                    return l(f(t))
                },
                cmyk2rgb: p,
                cmyk2hsl: function(t) {
                    return a(p(t))
                },
                cmyk2hsv: function(t) {
                    return n(p(t))
                },
                cmyk2hwb: function(t) {
                    return o(p(t))
                },
                cmyk2keyword: function(t) {
                    return l(p(t))
                },
                keyword2rgb: M,
                keyword2hsl: function(t) {
                    return a(M(t))
                },
                keyword2hsv: function(t) {
                    return n(M(t))
                },
                keyword2hwb: function(t) {
                    return o(M(t))
                },
                keyword2cmyk: function(t) {
                    return s(M(t))
                },
                keyword2lab: function(t) {
                    return d(M(t))
                },
                keyword2xyz: function(t) {
                    return u(M(t))
                },
                xyz2rgb: m,
                xyz2lab: v,
                xyz2lch: function(t) {
                    return y(v(t))
                },
                lab2xyz: x,
                lab2rgb: k,
                lab2lch: y,
                lch2lab: w,
                lch2xyz: function(t) {
                    return x(w(t))
                },
                lch2rgb: function(t) {
                    return k(w(t))
                }
            };
            var S = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                C = {};
            for (var _ in S) C[JSON.stringify(S[_])] = _
        }, {}],
        5: [function(t, e, i) {
            var a = t(4),
                o = function() {
                    return new u
                };
            for (var n in a) {
                o[n + "Raw"] = function(e) {
                    return function(t) {
                        return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t)
                    }
                }(n);
                var r = /(\w+)2(\w+)/.exec(n),
                    s = r[1],
                    l = r[2];
                (o[s] = o[s] || {})[l] = o[n] = function(n) {
                    return function(t) {
                        "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                        var e = a[n](t);
                        if ("string" == typeof e || void 0 === e) return e;
                        for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                        return e
                    }
                }(n)
            }
            var u = function() {
                this.convs = {}
            };
            u.prototype.routeSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, u.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, u.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        n = this.convs[i];
                    e = o[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(e) {
                u.prototype[e] = function(t) {
                    return this.routeSpace(e, arguments)
                }
            }), e.exports = o
        }, {
            4: 4
        }],
        6: [function(t, e, i) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}],
        7: [function(t, e, i) {
            var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.platform = t(48), t(31)(n), t(22)(n), t(23)(n), t(24)(n), t(30)(n), t(33)(n), t(32)(n), t(35)(n), t(54)(n), t(52)(n), t(53)(n), t(55)(n), t(56)(n), t(57)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var a = [];
            a.push(t(49)(n), t(50)(n), t(51)(n)), n.plugins.register(a), n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            8: 8,
            9: 9
        }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Bar = function(t, e) {
                    return e.type = "bar", new i(t, e)
                }
            }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Bubble = function(t, e) {
                    return e.type = "bubble", new i(t, e)
                }
            }
        }, {}],
        10: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Doughnut = function(t, e) {
                    return e.type = "doughnut", new i(t, e)
                }
            }
        }, {}],
        11: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Line = function(t, e) {
                    return e.type = "line", new i(t, e)
                }
            }
        }, {}],
        12: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.PolarArea = function(t, e) {
                    return e.type = "polarArea", new i(t, e)
                }
            }
        }, {}],
        13: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Radar = function(t, e) {
                    return e.type = "radar", new i(t, e)
                }
            }
        }, {}],
        14: [function(t, e, i) {
            "use strict";
            e.exports = function(i) {
                i.Scatter = function(t, e) {
                    return e.type = "scatter", new i(t, e)
                }
            }
        }, {}],
        15: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                p = t(45);
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var i = "";
                            return 0 < t.length && (t[0].yLabel ? i = t[0].yLabel : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        },
                        label: function(t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), e.exports = function(e) {
                e.controllers.bar = e.DatasetController.extend({
                    dataElementType: a.Rectangle,
                    initialize: function() {
                        var t;
                        e.DatasetController.prototype.initialize.apply(this, arguments), (t = this.getMeta()).stack = this.getDataset().stack, t.bar = !0
                    },
                    update: function(t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.chart,
                            o = n.getMeta(),
                            r = n.getDataset(),
                            s = t.custom || {},
                            l = a.options.elements.rectangle;
                        t._xScale = n.getScaleForId(o.xAxisID), t._yScale = n.getScaleForId(o.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: r.label,
                            label: a.data.labels[e],
                            borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                            backgroundColor: s.backgroundColor ? s.backgroundColor : p.valueAtIndexOrDefault(r.backgroundColor, e, l.backgroundColor),
                            borderColor: s.borderColor ? s.borderColor : p.valueAtIndexOrDefault(r.borderColor, e, l.borderColor),
                            borderWidth: s.borderWidth ? s.borderWidth : p.valueAtIndexOrDefault(r.borderWidth, e, l.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    },
                    updateElementGeometry: function(t, e, i) {
                        var n = this,
                            a = t._model,
                            o = n.getValueScale(),
                            r = o.getBasePixel(),
                            s = o.isHorizontal(),
                            l = n._ruler || n.getRuler(),
                            u = n.calculateBarValuePixels(n.index, e),
                            d = n.calculateBarIndexPixels(n.index, e, l);
                        a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    getStackCount: function(t) {
                        var e, i, n = this.chart,
                            a = this.getIndexScale().options.stacked,
                            o = void 0 === t ? n.data.datasets.length : t + 1,
                            r = [];
                        for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                        return r.length
                    },
                    getStackIndex: function(t) {
                        return this.getStackCount(t) - 1
                    },
                    getRuler: function() {
                        var t, e, i = this.getIndexScale(),
                            n = this.getStackCount(),
                            a = this.index,
                            o = [],
                            r = i.isHorizontal(),
                            s = r ? i.left : i.top,
                            l = s + (r ? i.width : i.height);
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) o.push(i.getPixelForValue(null, t, a));
                        return {
                            pixels: o,
                            start: s,
                            end: l,
                            stackCount: n,
                            scale: i
                        }
                    },
                    calculateBarValuePixels: function(t, e) {
                        var i, n, a, o, r, s, l = this.chart,
                            u = this.getMeta(),
                            d = this.getValueScale(),
                            c = l.data.datasets,
                            h = d.getRightValue(c[t].data[e]),
                            f = d.options.stacked,
                            g = u.stack,
                            p = 0;
                        if (f || void 0 === f && void 0 !== g)
                            for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || 0 <= h && 0 < a) && (p += a));
                        return o = d.getPixelForValue(p), {
                            size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
                            base: o,
                            head: r,
                            center: r + s / 2
                        }
                    },
                    calculateBarIndexPixels: function(t, e, i) {
                        var n, a, o, r, s, l = i.scale.options,
                            u = this.getStackIndex(t),
                            d = i.pixels,
                            c = d[e],
                            h = d.length,
                            f = i.start,
                            g = i.end;
                        return 1 === h ? (n = f < c ? c - f : g - c, a = c < g ? g - c : c - f) : (0 < e && (n = (c - d[e - 1]) / 2, e === h - 1 && (a = n)), e < h - 1 && (a = (d[e + 1] - c) / 2, 0 === e && (n = a))), s = (r = ((o = n * l.categoryPercentage) + a * l.categoryPercentage) / i.stackCount) * l.barPercentage, c -= o, c += r * u, {
                            size: s = Math.min(p.valueOrDefault(l.barThickness, s), p.valueOrDefault(l.maxBarThickness, 1 / 0)),
                            base: c += (r - s) / 2,
                            head: c + s,
                            center: c + s / 2
                        }
                    },
                    draw: function() {
                        var t = this.chart,
                            e = this.getValueScale(),
                            i = this.getMeta().data,
                            n = this.getDataset(),
                            a = i.length,
                            o = 0;
                        for (p.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(n.data[o])) || i[o].draw();
                        p.canvas.unclipArea(t.ctx)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : p.valueAtIndexOrDefault(e.hoverBackgroundColor, i, p.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : p.valueAtIndexOrDefault(e.hoverBorderColor, i, p.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : p.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model,
                            o = this.chart.options.elements.rectangle;
                        a.backgroundColor = n.backgroundColor ? n.backgroundColor : p.valueAtIndexOrDefault(e.backgroundColor, i, o.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : p.valueAtIndexOrDefault(e.borderColor, i, o.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : p.valueAtIndexOrDefault(e.borderWidth, i, o.borderWidth)
                    }
                }), e.controllers.horizontalBar = e.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        16: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                g = t(45);
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: a.Point,
                    update: function(i) {
                        var n = this,
                            t = n.getMeta().data;
                        g.each(t, function(t, e) {
                            n.updateElement(t, e, i)
                        })
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.getMeta(),
                            o = t.custom || {},
                            r = n.getScaleForId(a.xAxisID),
                            s = n.getScaleForId(a.yAxisID),
                            l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e],
                            d = n.index,
                            c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: i ? 0 : l.radius,
                            skip: o.skip || isNaN(c) || isNaN(h),
                            x: c,
                            y: h
                        }, t.pivot()
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options;
                        e.backgroundColor = g.valueOrDefault(i.hoverBackgroundColor, g.getHoverColor(i.backgroundColor)), e.borderColor = g.valueOrDefault(i.hoverBorderColor, g.getHoverColor(i.borderColor)), e.borderWidth = g.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                    },
                    removeHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options;
                        e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius
                    },
                    _resolveElementOptions: function(t, e) {
                        var i, n, a, o = this.chart,
                            r = o.data.datasets[this.index],
                            s = t.custom || {},
                            l = o.options.elements.point,
                            u = g.options.resolve,
                            d = r.data[e],
                            c = {},
                            h = {
                                chart: o,
                                dataIndex: e,
                                dataset: r,
                                datasetIndex: this.index
                            },
                            f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (i = 0, n = f.length; i < n; ++i) c[a = f[i]] = u([s[a], r[a], l[a]], h, e);
                        return c.radius = u([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e), c
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        17: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                A = t(45);
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(l) {
                            var u = l.data;
                            return u.labels.length && u.datasets.length ? u.labels.map(function(t, e) {
                                var i = l.getDatasetMeta(0),
                                    n = u.datasets[0],
                                    a = i.data[e],
                                    o = a && a.custom || {},
                                    r = A.valueAtIndexOrDefault,
                                    s = l.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, e, s.backgroundColor),
                                    strokeStyle: o.borderColor ? o.borderColor : r(n.borderColor, e, s.borderColor),
                                    lineWidth: o.borderWidth ? o.borderWidth : r(n.borderWidth, e, s.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var i = e.labels[t.index],
                                n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return A.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            }), n._set("pie", A.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), e.exports = function(e) {
                e.controllers.doughnut = e.controllers.pie = e.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: A.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function(i) {
                        var n = this,
                            t = n.chart,
                            e = t.chartArea,
                            a = t.options,
                            o = a.elements.arc,
                            r = e.right - e.left - o.borderWidth,
                            s = e.bottom - e.top - o.borderWidth,
                            l = Math.min(r, s),
                            u = {
                                x: 0,
                                y: 0
                            },
                            d = n.getMeta(),
                            c = a.cutoutPercentage,
                            h = a.circumference;
                        if (h < 2 * Math.PI) {
                            var f = a.rotation % (2 * Math.PI),
                                g = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + h,
                                p = Math.cos(f),
                                m = Math.sin(f),
                                v = Math.cos(g),
                                b = Math.sin(g),
                                x = f <= 0 && 0 <= g || f <= 2 * Math.PI && 2 * Math.PI <= g,
                                y = f <= .5 * Math.PI && .5 * Math.PI <= g || f <= 2.5 * Math.PI && 2.5 * Math.PI <= g,
                                k = f <= -Math.PI && -Math.PI <= g || f <= Math.PI && Math.PI <= g,
                                w = f <= .5 * -Math.PI && .5 * -Math.PI <= g || f <= 1.5 * Math.PI && 1.5 * Math.PI <= g,
                                M = c / 100,
                                S = k ? -1 : Math.min(p * (p < 0 ? 1 : M), v * (v < 0 ? 1 : M)),
                                C = w ? -1 : Math.min(m * (m < 0 ? 1 : M), b * (b < 0 ? 1 : M)),
                                _ = x ? 1 : Math.max(p * (0 < p ? 1 : M), v * (0 < v ? 1 : M)),
                                D = y ? 1 : Math.max(m * (0 < m ? 1 : M), b * (0 < b ? 1 : M)),
                                I = .5 * (_ - S),
                                P = .5 * (D - C);
                            l = Math.min(r / I, s / P), u = {
                                x: -.5 * (_ + S),
                                y: -.5 * (D + C)
                            }
                        }
                        t.borderWidth = n.getMaxBorderWidth(d.data), t.outerRadius = Math.max((l - t.borderWidth) / 2, 0), t.innerRadius = Math.max(c ? t.outerRadius / 100 * c : 0, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), t.offsetX = u.x * t.outerRadius, t.offsetY = u.y * t.outerRadius, d.total = n.calculateTotal(), n.outerRadius = t.outerRadius - t.radiusLength * n.getRingIndex(n.index), n.innerRadius = Math.max(n.outerRadius - t.radiusLength, 0), A.each(d.data, function(t, e) {
                            n.updateElement(t, e, i)
                        })
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.chart,
                            o = a.chartArea,
                            r = a.options,
                            s = r.animation,
                            l = (o.left + o.right) / 2,
                            u = (o.top + o.bottom) / 2,
                            d = r.rotation,
                            c = r.rotation,
                            h = n.getDataset(),
                            f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                            g = i && s.animateScale ? 0 : n.innerRadius,
                            p = i && s.animateScale ? 0 : n.outerRadius,
                            m = A.valueAtIndexOrDefault;
                        A.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                x: l + a.offsetX,
                                y: u + a.offsetY,
                                startAngle: d,
                                endAngle: c,
                                circumference: f,
                                outerRadius: p,
                                innerRadius: g,
                                label: m(h.label, e, a.data.labels[e])
                            }
                        });
                        var v = t._model;
                        this.removeHoverStyle(t), i && s.animateRotate || (v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle, v.endAngle = v.startAngle + v.circumference), t.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var i, n = this.getDataset(),
                            t = this.getMeta(),
                            a = 0;
                        return A.each(t.data, function(t, e) {
                            i = n.data[e], isNaN(i) || t.hidden || (a += Math.abs(i))
                        }), a
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) n = (n = n < (e = t[r]._model ? t[r]._model.borderWidth : 0) ? e : n) < (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) ? i : n;
                        return n
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        18: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                g = t(45);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), e.exports = function(t) {
                function f(t, e) {
                    return g.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    update: function(t) {
                        var e, i, n, a = this,
                            o = a.getMeta(),
                            r = o.dataset,
                            s = o.data || [],
                            l = a.chart.options,
                            u = l.elements.line,
                            d = a.getScaleForId(o.yAxisID),
                            c = a.getDataset(),
                            h = f(c, l);
                        for (h && (n = r.custom || {}, void 0 !== c.tension && void 0 === c.lineTension && (c.lineTension = c.tension), r._scale = d, r._datasetIndex = a.index, r._children = s, r._model = {
                                spanGaps: c.spanGaps ? c.spanGaps : l.spanGaps,
                                tension: n.tension ? n.tension : g.valueOrDefault(c.lineTension, u.tension),
                                backgroundColor: n.backgroundColor ? n.backgroundColor : c.backgroundColor || u.backgroundColor,
                                borderWidth: n.borderWidth ? n.borderWidth : c.borderWidth || u.borderWidth,
                                borderColor: n.borderColor ? n.borderColor : c.borderColor || u.borderColor,
                                borderCapStyle: n.borderCapStyle ? n.borderCapStyle : c.borderCapStyle || u.borderCapStyle,
                                borderDash: n.borderDash ? n.borderDash : c.borderDash || u.borderDash,
                                borderDashOffset: n.borderDashOffset ? n.borderDashOffset : c.borderDashOffset || u.borderDashOffset,
                                borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : c.borderJoinStyle || u.borderJoinStyle,
                                fill: n.fill ? n.fill : void 0 !== c.fill ? c.fill : u.fill,
                                steppedLine: n.steppedLine ? n.steppedLine : g.valueOrDefault(c.steppedLine, u.stepped),
                                cubicInterpolationMode: n.cubicInterpolationMode ? n.cubicInterpolationMode : g.valueOrDefault(c.cubicInterpolationMode, u.cubicInterpolationMode)
                            }, r.pivot()), e = 0, i = s.length; e < i; ++e) a.updateElement(s[e], e, t);
                        for (h && 0 !== r._model.tension && a.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var i = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = g.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    },
                    getPointBorderColor: function(t, e) {
                        var i = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = g.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    },
                    getPointBorderWidth: function(t, e) {
                        var i = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || g.isArray(n.pointBorderWidth) ? i = g.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i
                    },
                    updateElement: function(t, e, i) {
                        var n, a, o = this,
                            r = o.getMeta(),
                            s = t.custom || {},
                            l = o.getDataset(),
                            u = o.index,
                            d = l.data[e],
                            c = o.getScaleForId(r.yAxisID),
                            h = o.getScaleForId(r.xAxisID),
                            f = o.chart.options.elements.point;
                        void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius), void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius), n = h.getPixelForValue("object" == typeof d ? d : NaN, e, u), a = i ? c.getBasePixel() : o.calculatePointY(d, e, u), t._xScale = h, t._yScale = c, t._datasetIndex = u, t._index = e, t._model = {
                            x: n,
                            y: a,
                            skip: s.skip || isNaN(n) || isNaN(a),
                            radius: s.radius || g.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
                            pointStyle: s.pointStyle || g.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
                            backgroundColor: o.getPointBackgroundColor(t, e),
                            borderColor: o.getPointBorderColor(t, e),
                            borderWidth: o.getPointBorderWidth(t, e),
                            tension: r.dataset._model ? r.dataset._model.tension : 0,
                            steppedLine: !!r.dataset._model && r.dataset._model.steppedLine,
                            hitRadius: s.hitRadius || g.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, i) {
                        var n, a, o, r = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            u = 0,
                            d = 0;
                        if (l.options.stacked) {
                            for (n = 0; n < i; n++)
                                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                                    var c = Number(l.getRightValue(a.data[e]));
                                    c < 0 ? d += c || 0 : u += c || 0
                                } var h = Number(l.getRightValue(t));
                            return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        var t, e, i, n, a = this.getMeta(),
                            o = this.chart.chartArea,
                            r = a.data || [];

                        function s(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        if (a.dataset._model.spanGaps && (r = r.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === a.dataset._model.cubicInterpolationMode) g.splineCurveMonotone(r);
                        else
                            for (t = 0, e = r.length; t < e; ++t) i = r[t]._model, n = g.splineCurve(g.previousItem(r, t)._model, i, g.nextItem(r, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = r.length; t < e; ++t)(i = r[t]._model).controlPointPreviousX = s(i.controlPointPreviousX, o.left, o.right), i.controlPointPreviousY = s(i.controlPointPreviousY, o.top, o.bottom), i.controlPointNextX = s(i.controlPointNextX, o.left, o.right), i.controlPointNextY = s(i.controlPointNextY, o.top, o.bottom)
                    },
                    draw: function() {
                        var t = this.chart,
                            e = this.getMeta(),
                            i = e.data || [],
                            n = t.chartArea,
                            a = i.length,
                            o = 0;
                        for (g.canvas.clipArea(t.ctx, n), f(this.getDataset(), t.options) && e.dataset.draw(), g.canvas.unclipArea(t.ctx); o < a; ++o) i[o].draw(n)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.radius = n.hoverRadius || g.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || g.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, g.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || g.valueAtIndexOrDefault(e.pointHoverBorderColor, i, g.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || g.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            i = e.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            a = t.custom || {},
                            o = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), o.radius = a.radius || g.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), o.backgroundColor = e.getPointBackgroundColor(t, n), o.borderColor = e.getPointBorderColor(t, n), o.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        19: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                k = t(45);
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(s) {
                            var l = s.data;
                            return l.labels.length && l.datasets.length ? l.labels.map(function(t, e) {
                                var i = s.getDatasetMeta(0),
                                    n = l.datasets[0],
                                    a = i.data[e].custom || {},
                                    o = k.valueAtIndexOrDefault,
                                    r = s.options.elements.arc;
                                return {
                                    text: t,
                                    fillStyle: a.backgroundColor ? a.backgroundColor : o(n.backgroundColor, e, r.backgroundColor),
                                    strokeStyle: a.borderColor ? a.borderColor : o(n.borderColor, e, r.borderColor),
                                    lineWidth: a.borderWidth ? a.borderWidth : o(n.borderWidth, e, r.borderWidth),
                                    hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                    index: e
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function(e) {
                e.controllers.polarArea = e.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: k.noop,
                    update: function(i) {
                        var n = this,
                            t = n.chart,
                            e = t.chartArea,
                            a = n.getMeta(),
                            o = t.options,
                            r = o.elements.arc,
                            s = Math.min(e.right - e.left, e.bottom - e.top);
                        t.outerRadius = Math.max((s - r.borderWidth / 2) / 2, 0), t.innerRadius = Math.max(o.cutoutPercentage ? t.outerRadius / 100 * o.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), n.outerRadius = t.outerRadius - t.radiusLength * n.index, n.innerRadius = n.outerRadius - t.radiusLength, a.count = n.countVisibleElements(), k.each(a.data, function(t, e) {
                            n.updateElement(t, e, i)
                        })
                    },
                    updateElement: function(t, e, i) {
                        for (var n = this, a = n.chart, o = n.getDataset(), r = a.options, s = r.animation, l = a.scale, u = a.data.labels, d = n.calculateCircumference(o.data[e]), c = l.xCenter, h = l.yCenter, f = 0, g = n.getMeta(), p = 0; p < e; ++p) isNaN(o.data[p]) || g.data[p].hidden || ++f;
                        var m = r.startAngle,
                            v = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                            b = m + d * f,
                            x = b + (t.hidden ? 0 : d),
                            y = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]);
                        k.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: l,
                            _model: {
                                x: c,
                                y: h,
                                innerRadius: 0,
                                outerRadius: i ? y : v,
                                startAngle: i && s.animateRotate ? m : b,
                                endAngle: i && s.animateRotate ? m : x,
                                label: k.valueAtIndexOrDefault(u, e, u[e])
                            }
                        }), n.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(t) {
                        e.DatasetController.prototype.removeHoverStyle.call(this, t, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var i = this.getDataset(),
                            t = this.getMeta(),
                            n = 0;
                        return k.each(t.data, function(t, e) {
                            isNaN(i.data[e]) || t.hidden || n++
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return 0 < e && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        20: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(40),
                u = t(45);
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), e.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    linkScales: u.noop,
                    update: function(i) {
                        var n = this,
                            t = n.getMeta(),
                            e = t.dataset,
                            a = t.data,
                            o = e.custom || {},
                            r = n.getDataset(),
                            s = n.chart.options.elements.line,
                            l = n.chart.scale;
                        void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension), u.extend(t.dataset, {
                            _datasetIndex: n.index,
                            _scale: l,
                            _children: a,
                            _loop: !0,
                            _model: {
                                tension: o.tension ? o.tension : u.valueOrDefault(r.lineTension, s.tension),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.backgroundColor || s.backgroundColor,
                                borderWidth: o.borderWidth ? o.borderWidth : r.borderWidth || s.borderWidth,
                                borderColor: o.borderColor ? o.borderColor : r.borderColor || s.borderColor,
                                fill: o.fill ? o.fill : void 0 !== r.fill ? r.fill : s.fill,
                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : r.borderCapStyle || s.borderCapStyle,
                                borderDash: o.borderDash ? o.borderDash : r.borderDash || s.borderDash,
                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : r.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : r.borderJoinStyle || s.borderJoinStyle
                            }
                        }), t.dataset.pivot(), u.each(a, function(t, e) {
                            n.updateElement(t, e, i)
                        }, n), n.updateBezierControlPoints()
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = t.custom || {},
                            o = n.getDataset(),
                            r = n.chart.scale,
                            s = n.chart.options.elements.point,
                            l = r.getPointPositionForValue(e, o.data[e]);
                        void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius), void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius), u.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: r,
                            _model: {
                                x: i ? r.xCenter : l.x,
                                y: i ? r.yCenter : l.y,
                                tension: a.tension ? a.tension : u.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension),
                                radius: a.radius ? a.radius : u.valueAtIndexOrDefault(o.pointRadius, e, s.radius),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : u.valueAtIndexOrDefault(o.pointBackgroundColor, e, s.backgroundColor),
                                borderColor: a.borderColor ? a.borderColor : u.valueAtIndexOrDefault(o.pointBorderColor, e, s.borderColor),
                                borderWidth: a.borderWidth ? a.borderWidth : u.valueAtIndexOrDefault(o.pointBorderWidth, e, s.borderWidth),
                                pointStyle: a.pointStyle ? a.pointStyle : u.valueAtIndexOrDefault(o.pointStyle, e, s.pointStyle),
                                hitRadius: a.hitRadius ? a.hitRadius : u.valueAtIndexOrDefault(o.pointHitRadius, e, s.hitRadius)
                            }
                        }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var a = this.chart.chartArea,
                            o = this.getMeta();
                        u.each(o.data, function(t, e) {
                            var i = t._model,
                                n = u.splineCurve(u.previousItem(o.data, e, !0)._model, i, u.nextItem(o.data, e, !0)._model, i.tension);
                            i.controlPointPreviousX = Math.max(Math.min(n.previous.x, a.right), a.left), i.controlPointPreviousY = Math.max(Math.min(n.previous.y, a.bottom), a.top), i.controlPointNextX = Math.max(Math.min(n.next.x, a.right), a.left), i.controlPointNextY = Math.max(Math.min(n.next.y, a.bottom), a.top), t.pivot()
                        })
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model;
                        a.radius = i.hoverRadius ? i.hoverRadius : u.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, u.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : u.valueAtIndexOrDefault(e.pointHoverBorderColor, n, u.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : u.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model,
                            o = this.chart.options.elements.point;
                        a.radius = i.radius ? i.radius : u.valueAtIndexOrDefault(e.pointRadius, n, o.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : u.valueAtIndexOrDefault(e.pointBackgroundColor, n, o.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : u.valueAtIndexOrDefault(e.pointBorderColor, n, o.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : u.valueAtIndexOrDefault(e.pointBorderWidth, n, o.borderWidth)
                    }
                })
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        21: [function(t, e, i) {
            "use strict";
            t(25)._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function(t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {
            25: 25
        }],
        22: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(26),
                o = t(45);
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), e.exports = function(t) {
                t.Animation = a.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, i, n) {
                        var a, o, r = this.animations;
                        for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                            if (r[a].chart === t) return void(r[a] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(e) {
                        var t = o.findIndex(this.animations, function(t) {
                            return t.chart === e
                        }); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            i = 0;
                        1 < t.dropFrames && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                        var n = Date.now();
                        t.dropFrames += (n - e) / t.frameDuration, 0 < t.animations.length && t.requestAnimationFrame()
                    },
                    advance: function(t) {
                        for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        23: [function(t, e, i) {
            "use strict";
            var d = t(25),
                c = t(45),
                a = t(28),
                h = t(48);
            e.exports = function(u) {
                var l = u.plugins;

                function s(t) {
                    return "top" === t || "bottom" === t
                }
                u.types = {}, u.instances = {}, u.controllers = {}, c.extend(u.prototype, {
                    construct: function(t, e) {
                        var i, n, a = this;
                        (n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || [], n.labels = n.labels || [], i.options = c.configMerge(d.global, d[i.type], i.options || {}), e = i;
                        var o = h.acquireContext(t, e),
                            r = o && o.canvas,
                            s = r && r.height,
                            l = r && r.width;
                        a.id = c.uid(), a.ctx = o, a.canvas = r, a.config = e, a.width = l, a.height = s, a.aspectRatio = s ? l / s : null, a.options = e.options, a._bufferedRender = !1, (a.chart = a).controller = a, u.instances[a.id] = a, Object.defineProperty(a, "data", {
                            get: function() {
                                return a.config.data
                            },
                            set: function(t) {
                                a.config.data = t
                            }
                        }), o && r && (a.initialize(), a.update())
                    },
                    initialize: function() {
                        var t = this;
                        return l.notify(t, "beforeInit"), c.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), l.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return c.canvas.clear(this), this
                    },
                    stop: function() {
                        return u.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var e = this,
                            i = e.options,
                            n = e.canvas,
                            a = i.maintainAspectRatio && e.aspectRatio || null,
                            o = Math.max(0, Math.floor(c.getMaximumWidth(n))),
                            r = Math.max(0, Math.floor(a ? o / a : c.getMaximumHeight(n)));
                        if ((e.width !== o || e.height !== r) && (n.width = e.width = o, n.height = e.height = r, n.style.width = o + "px", n.style.height = r + "px", c.retinaScale(e, i.devicePixelRatio), !t)) {
                            var s = {
                                width: o,
                                height: r
                            };
                            l.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update(e.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        c.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), c.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildScales: function() {
                        var o = this,
                            t = o.options,
                            r = o.scales = {},
                            e = [];
                        t.scales && (e = e.concat((t.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (t.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), t.scale && e.push({
                            options: t.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), c.each(e, function(t) {
                            var e = t.options,
                                i = c.valueOrDefault(e.type, t.dtype),
                                n = u.scaleService.getScaleConstructor(i);
                            if (n) {
                                s(e.position) !== s(t.dposition) && (e.position = t.dposition);
                                var a = new n({
                                    id: e.id,
                                    options: e,
                                    ctx: o.ctx,
                                    chart: o
                                });
                                (r[a.id] = a).mergeTicksOptions(), t.isDefault && (o.scale = a)
                            }
                        }), u.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var o = this,
                            r = [],
                            s = [];
                        return c.each(o.data.datasets, function(t, e) {
                            var i = o.getDatasetMeta(e),
                                n = t.type || o.config.type;
                            if (i.type && i.type !== n && (o.destroyDatasetMeta(e), i = o.getDatasetMeta(e)), i.type = n, r.push(i.type), i.controller) i.controller.updateIndex(e);
                            else {
                                var a = u.controllers[i.type];
                                if (void 0 === a) throw new Error('"' + i.type + '" is not a chart type.');
                                i.controller = new a(o, e), s.push(i.controller)
                            }
                        }, o), s
                    },
                    resetElements: function() {
                        var i = this;
                        c.each(i.data.datasets, function(t, e) {
                            i.getDatasetMeta(e).controller.reset()
                        }, i)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var e, i, n = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), (i = (e = n).options).scale ? e.scale.options = i.scale : i.scales && i.scales.xAxes.concat(i.scales.yAxes).forEach(function(t) {
                                e.scales[t.id].options = t
                            }), e.tooltip._options = i.tooltips, !1 !== l.notify(n, "beforeUpdate")) {
                            n.tooltip._data = n.data;
                            var a = n.buildOrUpdateControllers();
                            c.each(n.data.datasets, function(t, e) {
                                n.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, n), n.updateLayout(), c.each(a, function(t) {
                                t.reset()
                            }), n.updateDatasets(), n.tooltip.initialize(), n.lastActive = [], l.notify(n, "afterUpdate"), n._bufferedRender ? n._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : n.render(t)
                        }
                    },
                    updateLayout: function() {
                        !1 !== l.notify(this, "beforeLayout") && (u.layoutService.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
                    },
                    updateDatasets: function() {
                        if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            l.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var e = this.getDatasetMeta(t),
                            i = {
                                meta: e,
                                index: t
                            };
                        !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]))
                    },
                    render: function(t) {
                        var e = this;
                        t && "object" == typeof t || (t = {
                            duration: t,
                            lazy: arguments[1]
                        });
                        var i = t.duration,
                            n = t.lazy;
                        if (!1 !== l.notify(e, "beforeRender")) {
                            var a = e.options.animation,
                                o = function(t) {
                                    l.notify(e, "afterRender"), c.callback(a && a.onComplete, [t], e)
                                };
                            if (a && (void 0 !== i && 0 !== i || void 0 === i && 0 !== a.duration)) {
                                var r = new u.Animation({
                                    numSteps: (i || a.duration) / 16.66,
                                    easing: t.easing || a.easing,
                                    render: function(t, e) {
                                        var i = c.easing.effects[e.easing],
                                            n = e.currentStep,
                                            a = n / e.numSteps;
                                        t.draw(i(a), a, n)
                                    },
                                    onAnimationProgress: a.onProgress,
                                    onAnimationComplete: o
                                });
                                u.animationService.addAnimation(e, r, i, n)
                            } else e.draw(), o(new u.Animation({
                                numSteps: 0,
                                chart: e
                            }));
                            return e
                        }
                    },
                    draw: function(t) {
                        var e = this;
                        e.clear(), c.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (c.each(e.boxes, function(t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]))
                    },
                    transition: function(t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    drawDatasets: function(t) {
                        var e = this;
                        if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            l.notify(e, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, e) {
                        var i = this.getDatasetMeta(t),
                            n = {
                                meta: i,
                                index: t,
                                easingValue: e
                            };
                        !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]))
                    },
                    _drawTooltip: function(t) {
                        var e = this.tooltip,
                            i = {
                                tooltip: e,
                                easingValue: t
                            };
                        !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]))
                    },
                    getElementAtEvent: function(t) {
                        return a.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return a.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return a.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, i) {
                        var n = a.modes[e];
                        return "function" == typeof n ? n(this, t, i) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return a.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var i = e._meta[this.id];
                        return i || (i = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    },
                    destroy: function() {
                        var t, e, i = this,
                            n = i.canvas;
                        for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                        n && (i.unbindEvents(), c.canvas.clear(i), h.releaseContext(i.ctx), i.canvas = null, i.ctx = null), l.notify(i, "destroy"), delete u.instances[i.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var t = this;
                        t.tooltip = new u.Tooltip({
                            _chart: t,
                            _chartInstance: t,
                            _data: t.data,
                            _options: t.options.tooltips
                        }, t)
                    },
                    bindEvents: function() {
                        var e = this,
                            i = e._listeners = {},
                            n = function() {
                                e.eventHandler.apply(e, arguments)
                            };
                        c.each(e.options.events, function(t) {
                            h.addEventListener(e, t, n), i[t] = n
                        }), e.options.responsive && (n = function() {
                            e.resize()
                        }, h.addEventListener(e, "resize", n), i.resize = n)
                    },
                    unbindEvents: function() {
                        var i = this,
                            t = i._listeners;
                        t && (delete i._listeners, c.each(t, function(t, e) {
                            h.removeEventListener(i, e, t)
                        }))
                    },
                    updateHoverStyle: function(t, e, i) {
                        var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
                    },
                    eventHandler: function(t) {
                        var e = this,
                            i = e.tooltip;
                        if (!1 !== l.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            n |= i && i.handleEvent(t), l.notify(e, "afterEvent", [t]);
                            var a = e._bufferedRequest;
                            return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    },
                    handleEvent: function(t) {
                        var e, i = this,
                            n = i.options || {},
                            a = n.hover;
                        return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, a.mode, a), c.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1), i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0), e = !c.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                    }
                }), u.Controller = u
            }
        }, {
            25: 25,
            28: 28,
            45: 45,
            48: 48
        }],
        24: [function(t, e, i) {
            "use strict";
            var s = t(45);
            e.exports = function(t) {
                var o = ["push", "pop", "shift", "splice", "unshift"];

                function r(e, t) {
                    var i = e._chartjs;
                    if (i) {
                        var n = i.listeners,
                            a = n.indexOf(t); - 1 !== a && n.splice(a, 1), 0 < n.length || (o.forEach(function(t) {
                            delete e[t]
                        }), delete e._chartjs)
                    }
                }
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, s.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this.getMeta(),
                            e = this.getDataset();
                        null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && r(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, i = this.getMeta(),
                            n = this.getDataset().data || [],
                            a = i.data;
                        for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var a, t, e = this,
                            i = e.getDataset(),
                            n = i.data || (i.data = []);
                        e._data !== n && (e._data && r(e._data, e), t = e, (a = n)._chartjs ? a._chartjs.listeners.push(t) : (Object.defineProperty(a, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {
                                listeners: [t]
                            }
                        }), o.forEach(function(t) {
                            var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                n = a[t];
                            Object.defineProperty(a, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function() {
                                    var e = Array.prototype.slice.call(arguments),
                                        t = n.apply(this, e);
                                    return s.each(a._chartjs.listeners, function(t) {
                                        "function" == typeof t[i] && t[i].apply(t, e)
                                    }), t
                                }
                            })
                        })), e._data = n), e.resyncElements()
                    },
                    update: s.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            a = t.custom || {},
                            o = s.valueAtIndexOrDefault,
                            r = t._model;
                        r.backgroundColor = a.backgroundColor ? a.backgroundColor : o(i.backgroundColor, n, e.backgroundColor), r.borderColor = a.borderColor ? a.borderColor : o(i.borderColor, n, e.borderColor), r.borderWidth = a.borderWidth ? a.borderWidth : o(i.borderWidth, n, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = s.valueAtIndexOrDefault,
                            o = s.getHoverColor,
                            r = t._model;
                        r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : a(e.hoverBackgroundColor, i, o(r.backgroundColor)), r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : a(e.hoverBorderColor, i, o(r.borderColor)), r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : a(e.hoverBorderWidth, i, r.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            i = t.data.length,
                            n = e.length;
                        n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i)
                    },
                    insertElements: function(t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = s.inherits
            }
        }, {
            45: 45
        }],
        25: [function(t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = {
                _set: function(t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {
            45: 45
        }],
        26: [function(t, e, i) {
            "use strict";
            var g = t(3),
                n = t(45);
            var a = function(t) {
                n.extend(this, t), this.initialize.apply(this, arguments)
            };
            n.extend(a.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = n.clone(t._model)), t._start = {}, t
                },
                transition: function(t) {
                    var e = this,
                        i = e._model,
                        n = e._start,
                        a = e._view;
                    return i && 1 !== t ? (a || (a = e._view = {}), n || (n = e._start = {}), function(t, e, i, n) {
                        var a, o, r, s, l, u, d, c, h, f = Object.keys(i);
                        for (a = 0, o = f.length; a < o; ++a)
                            if (u = i[r = f[a]], e.hasOwnProperty(r) || (e[r] = u), (s = e[r]) !== u && "_" !== r[0]) {
                                if (t.hasOwnProperty(r) || (t[r] = s), (d = typeof u) == typeof(l = t[r]))
                                    if ("string" === d) {
                                        if ((c = g(l)).valid && (h = g(u)).valid) {
                                            e[r] = h.mix(c, n).rgbString();
                                            continue
                                        }
                                    } else if ("number" === d && isFinite(l) && isFinite(u)) {
                                    e[r] = l + (u - l) * n;
                                    continue
                                }
                                e[r] = u
                            }
                    }(n, a, i, t)) : (e._view = i, e._start = null), e
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return n.isNumber(this._model.x) && n.isNumber(this._model.y)
                }
            }), a.extend = n.inherits, e.exports = a
        }, {
            3: 3,
            45: 45
        }],
        27: [function(t, e, i) {
            "use strict";
            var n = t(3),
                a = t(25),
                g = t(45);
            e.exports = function(l) {
                function d(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function c(t) {
                    return null != t && "none" !== t
                }

                function e(t, e, i) {
                    var n = document.defaultView,
                        a = t.parentNode,
                        o = n.getComputedStyle(t)[e],
                        r = n.getComputedStyle(a)[e],
                        s = c(o),
                        l = c(r),
                        u = Number.POSITIVE_INFINITY;
                    return s || l ? Math.min(s ? d(o, t, i) : u, l ? d(r, a, i) : u) : "none"
                }
                g.configMerge = function() {
                    return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(t, e, i, n) {
                            var a = e[t] || {},
                                o = i[t];
                            "scales" === t ? e[t] = g.scaleMerge(a, o) : "scale" === t ? e[t] = g.merge(a, [l.scaleService.getScaleDefaults(o.type), o]) : g._merger(t, e, i, n)
                        }
                    })
                }, g.scaleMerge = function() {
                    return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(t, e, i, n) {
                            if ("xAxes" === t || "yAxes" === t) {
                                var a, o, r, s = i[t].length;
                                for (e[t] || (e[t] = []), a = 0; a < s; ++a) r = i[t][a], o = g.valueOrDefault(r.type, "xAxes" === t ? "category" : "linear"), a >= e[t].length && e[t].push({}), !e[t][a].type || r.type && r.type !== e[t][a].type ? g.merge(e[t][a], [l.scaleService.getScaleDefaults(o), r]) : g.merge(e[t][a], r)
                            } else g._merger(t, e, i, n)
                        }
                    })
                }, g.where = function(t, e) {
                    if (g.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return g.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, g.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                    return t.findIndex(e, i)
                } : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, g.findNextWhere = function(t, e, i) {
                    g.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, g.findPreviousWhere = function(t, e, i) {
                    g.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; 0 <= n; n--) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, g.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, g.almostEquals = function(t, e, i) {
                    return Math.abs(t - e) < i
                }, g.almostWhole = function(t, e) {
                    var i = Math.round(t);
                    return i - e < t && t < i + e
                }, g.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, g.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, g.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1
                }, g.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    return Math.log(t) / Math.LN10
                }, g.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, g.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, g.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        a = Math.sqrt(i * i + n * n),
                        o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: a
                    }
                }, g.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, g.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, g.splineCurve = function(t, e, i, n) {
                    var a = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = n * (u = isNaN(u) ? 0 : u),
                        h = n * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: o.x - c * (r.x - a.x),
                            y: o.y - c * (r.y - a.y)
                        },
                        next: {
                            x: o.x + h * (r.x - a.x),
                            y: o.y + h * (r.y - a.y)
                        }
                    }
                }, g.EPSILON = Number.EPSILON || 1e-14, g.splineCurveMonotone = function(t) {
                    var e, i, n, a, o, r, s, l, u, d = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        c = d.length;
                    for (e = 0; e < c; ++e)
                        if (!(n = d[e]).model.skip) {
                            if (i = 0 < e ? d[e - 1] : null, (a = e < c - 1 ? d[e + 1] : null) && !a.model.skip) {
                                var h = a.model.x - n.model.x;
                                n.deltaK = 0 !== h ? (a.model.y - n.model.y) / h : 0
                            }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                        } for (e = 0; e < c - 1; ++e) n = d[e], a = d[e + 1], n.model.skip || a.model.skip || (g.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (o = n.mK / n.deltaK, r = a.mK / n.deltaK, (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || (s = 3 / Math.sqrt(l), n.mK = o * s * n.deltaK, a.mK = r * s * n.deltaK)));
                    for (e = 0; e < c; ++e)(n = d[e]).model.skip || (i = 0 < e ? d[e - 1] : null, a = e < c - 1 ? d[e + 1] : null, i && !i.model.skip && (u = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - u, n.model.controlPointPreviousY = n.model.y - u * n.mK), a && !a.model.skip && (u = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + u, n.model.controlPointNextY = n.model.y + u * n.mK))
                }, g.nextItem = function(t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, g.previousItem = function(t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, g.niceNum = function(t, e) {
                    var i = Math.floor(g.log10(t)),
                        n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, g.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, g.getRelativePosition = function(t, e) {
                    var i, n, a = t.originalEvent || t,
                        o = t.currentTarget || t.srcElement,
                        r = o.getBoundingClientRect(),
                        s = a.touches;
                    s && 0 < s.length ? (i = s[0].clientX, n = s[0].clientY) : (i = a.clientX, n = a.clientY);
                    var l = parseFloat(g.getStyle(o, "padding-left")),
                        u = parseFloat(g.getStyle(o, "padding-top")),
                        d = parseFloat(g.getStyle(o, "padding-right")),
                        c = parseFloat(g.getStyle(o, "padding-bottom")),
                        h = r.right - r.left - l - d,
                        f = r.bottom - r.top - u - c;
                    return {
                        x: i = Math.round((i - r.left - l) / h * o.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - r.top - u) / f * o.height / e.currentDevicePixelRatio)
                    }
                }, g.getConstraintWidth = function(t) {
                    return e(t, "max-width", "clientWidth")
                }, g.getConstraintHeight = function(t) {
                    return e(t, "max-height", "clientHeight")
                }, g.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var i = parseInt(g.getStyle(e, "padding-left"), 10),
                        n = parseInt(g.getStyle(e, "padding-right"), 10),
                        a = e.clientWidth - i - n,
                        o = g.getConstraintWidth(t);
                    return isNaN(o) ? a : Math.min(a, o)
                }, g.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var i = parseInt(g.getStyle(e, "padding-top"), 10),
                        n = parseInt(g.getStyle(e, "padding-bottom"), 10),
                        a = e.clientHeight - i - n,
                        o = g.getConstraintHeight(t);
                    return isNaN(o) ? a : Math.min(a, o)
                }, g.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, g.retinaScale = function(t, e) {
                    var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas,
                            a = t.height,
                            o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height = a + "px", n.style.width = o + "px"
                    }
                }, g.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                }, g.longestText = function(e, t, i, n) {
                    var a = (n = n || {}).data = n.data || {},
                        o = n.garbageCollect = n.garbageCollect || [];
                    n.font !== t && (a = n.data = {}, o = n.garbageCollect = [], n.font = t), e.font = t;
                    var r = 0;
                    g.each(i, function(t) {
                        null != t && !0 !== g.isArray(t) ? r = g.measureText(e, a, o, r, t) : g.isArray(t) && g.each(t, function(t) {
                            null == t || g.isArray(t) || (r = g.measureText(e, a, o, r, t))
                        })
                    });
                    var s = o.length / 2;
                    if (s > i.length) {
                        for (var l = 0; l < s; l++) delete a[o[l]];
                        o.splice(0, s)
                    }
                    return r
                }, g.measureText = function(t, e, i, n, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, i.push(a)), n < o && (n = o), n
                }, g.numberOfLabelLines = function(t) {
                    var e = 1;
                    return g.each(t, function(t) {
                        g.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, g.color = n ? function(t) {
                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t)
                } : function(t) {
                    return t
                }, g.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : g.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {
            25: 25,
            3: 3,
            45: 45
        }],
        28: [function(t, e, i) {
            "use strict";
            var n = t(45);

            function s(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : n.getRelativePosition(t, e)
            }

            function l(t, e) {
                var i, n, a, o, r;
                for (n = 0, o = t.data.datasets.length; n < o; ++n)
                    if (t.isDatasetVisible(n))
                        for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                            var s = i.data[a];
                            s._view.skip || e(s)
                        }
            }

            function u(t, e) {
                var i = [];
                return l(t, function(t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function d(t, n, a, o) {
                var r = Number.POSITIVE_INFINITY,
                    s = [];
                return l(t, function(t) {
                    if (!a || t.inRange(n.x, n.y)) {
                        var e = t.getCenterPoint(),
                            i = o(n, e);
                        i < r ? (s = [t], r = i) : i === r && s.push(t)
                    }
                }), s
            }

            function c(t) {
                var a = -1 !== t.indexOf("x"),
                    o = -1 !== t.indexOf("y");
                return function(t, e) {
                    var i = a ? Math.abs(t.x - e.x) : 0,
                        n = o ? Math.abs(t.y - e.y) : 0;
                    return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))
                }
            }

            function a(n, t, e) {
                var i = s(t, n);
                e.axis = e.axis || "x";
                var a = c(e.axis),
                    o = e.intersect ? u(n, i) : d(n, i, !1, a),
                    r = [];
                return o.length ? (n.data.datasets.forEach(function(t, e) {
                    if (n.isDatasetVisible(e)) {
                        var i = n.getDatasetMeta(e).data[o[0]._index];
                        i && !i._view.skip && r.push(i)
                    }
                }), r) : []
            }
            e.exports = {
                modes: {
                    single: function(t, e) {
                        var i = s(e, t),
                            n = [];
                        return l(t, function(t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        }), n.slice(0, 1)
                    },
                    label: a,
                    index: a,
                    dataset: function(t, e, i) {
                        var n = s(e, t);
                        i.axis = i.axis || "xy";
                        var a = c(i.axis),
                            o = i.intersect ? u(t, n) : d(t, n, !1, a);
                        return 0 < o.length && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o
                    },
                    "x-axis": function(t, e) {
                        return a(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        return u(t, s(e, t))
                    },
                    nearest: function(t, e, i) {
                        var n = s(e, t);
                        i.axis = i.axis || "xy";
                        var a = c(i.axis),
                            o = d(t, n, i.intersect, a);
                        return 1 < o.length && o.sort(function(t, e) {
                            var i = t.getArea() - e.getArea();
                            return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                        }), o.slice(0, 1)
                    },
                    x: function(t, e, i) {
                        var n = s(e, t),
                            a = [],
                            o = !1;
                        return l(t, function(t) {
                            t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                        }), i.intersect && !o && (a = []), a
                    },
                    y: function(t, e, i) {
                        var n = s(e, t),
                            a = [],
                            o = !1;
                        return l(t, function(t) {
                            t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0)
                        }), i.intersect && !o && (a = []), a
                    }
                }
            }
        }, {
            45: 45
        }],
        29: [function(t, e, i) {
            "use strict";
            t(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), e.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t
            }
        }, {
            25: 25
        }],
        30: [function(t, e, i) {
            "use strict";
            var V = t(45);
            e.exports = function(t) {
                function W(t, e) {
                    return V.where(t, function(t) {
                        return t.position === e
                    })
                }

                function N(t, a) {
                    t.forEach(function(t, e) {
                        return t._tmpIndex_ = e, t
                    }), t.sort(function(t, e) {
                        var i = a ? e : t,
                            n = a ? t : e;
                        return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight
                    }), t.forEach(function(t) {
                        delete t._tmpIndex_
                    })
                }
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                    },
                    configure: function(t, e, i) {
                        for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
                    },
                    update: function(e, i, t) {
                        if (e) {
                            var n = e.options.layout || {},
                                a = V.options.toPadding(n.padding),
                                o = a.left,
                                r = a.right,
                                s = a.top,
                                l = a.bottom,
                                u = W(e.boxes, "left"),
                                d = W(e.boxes, "right"),
                                c = W(e.boxes, "top"),
                                h = W(e.boxes, "bottom"),
                                f = W(e.boxes, "chartArea");
                            N(u, !0), N(d, !1), N(c, !0), N(h, !1);
                            var g = i - o - r,
                                p = t - s - l,
                                m = p / 2,
                                v = (i - g / 2) / (u.length + d.length),
                                b = (t - m) / (c.length + h.length),
                                x = g,
                                y = p,
                                k = [];
                            V.each(u.concat(d, c, h), function(t) {
                                var e, i = t.isHorizontal();
                                i ? (e = t.update(t.fullWidth ? g : x, b), y -= e.height) : (e = t.update(v, m), x -= e.width), k.push({
                                    horizontal: i,
                                    minSize: e,
                                    box: t
                                })
                            });
                            var w = 0,
                                M = 0,
                                S = 0,
                                C = 0;
                            V.each(c.concat(h), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    w = Math.max(w, e.left), M = Math.max(M, e.right)
                                }
                            }), V.each(u.concat(d), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    S = Math.max(S, e.top), C = Math.max(C, e.bottom)
                                }
                            });
                            var _ = o,
                                D = r,
                                I = s,
                                P = l;
                            V.each(u.concat(d), z), V.each(u, function(t) {
                                _ += t.width
                            }), V.each(d, function(t) {
                                D += t.width
                            }), V.each(c.concat(h), z), V.each(c, function(t) {
                                I += t.height
                            }), V.each(h, function(t) {
                                P += t.height
                            }), V.each(u.concat(d), function(e) {
                                var t = V.findNextWhere(k, function(t) {
                                        return t.box === e
                                    }),
                                    i = {
                                        left: 0,
                                        right: 0,
                                        top: I,
                                        bottom: P
                                    };
                                t && e.update(t.minSize.width, y, i)
                            }), _ = o, D = r, I = s, P = l, V.each(u, function(t) {
                                _ += t.width
                            }), V.each(d, function(t) {
                                D += t.width
                            }), V.each(c, function(t) {
                                I += t.height
                            }), V.each(h, function(t) {
                                P += t.height
                            });
                            var A = Math.max(w - _, 0);
                            _ += A, D += Math.max(M - D, 0);
                            var T = Math.max(S - I, 0);
                            I += T, P += Math.max(C - P, 0);
                            var F = t - I - P,
                                O = i - _ - D;
                            O === x && F === y || (V.each(u, function(t) {
                                t.height = F
                            }), V.each(d, function(t) {
                                t.height = F
                            }), V.each(c, function(t) {
                                t.fullWidth || (t.width = O)
                            }), V.each(h, function(t) {
                                t.fullWidth || (t.width = O)
                            }), y = F, x = O);
                            var R = o + A,
                                L = s + T;
                            V.each(u.concat(c), B), R += x, L += y, V.each(d, B), V.each(h, B), e.chartArea = {
                                left: _,
                                top: I,
                                right: _ + x,
                                bottom: I + y
                            }, V.each(f, function(t) {
                                t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(x, y)
                            })
                        }

                        function z(e) {
                            var t = V.findNextWhere(k, function(t) {
                                return t.box === e
                            });
                            if (t)
                                if (e.isHorizontal()) {
                                    var i = {
                                        left: Math.max(_, w),
                                        right: Math.max(D, M),
                                        top: 0,
                                        bottom: 0
                                    };
                                    e.update(e.fullWidth ? g : x, p / 2, i)
                                } else e.update(t.minSize.width, y)
                        }

                        function B(t) {
                            t.isHorizontal() ? (t.left = t.fullWidth ? o : _, t.right = t.fullWidth ? i - r : _ + x, t.top = L, t.bottom = L + t.height, L = t.bottom) : (t.left = R, t.right = R + t.width, t.top = I, t.bottom = I + y, R = t.right)
                        }
                    }
                }
            }
        }, {
            45: 45
        }],
        31: [function(t, e, i) {
            "use strict";
            var r = t(25),
                n = t(26),
                s = t(45);
            r._set("global", {
                plugins: {}
            }), e.exports = function(t) {
                t.plugins = {
                    _plugins: [],
                    _cacheId: 0,
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }), this._cacheId++
                    },
                    unregister: function(t) {
                        var i = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                        }), this._cacheId++
                    },
                    clear: function() {
                        this._plugins = [], this._cacheId++
                    },
                    count: function() {
                        return this._plugins.length
                    },
                    getAll: function() {
                        return this._plugins
                    },
                    notify: function(t, e, i) {
                        var n, a, o, r, s, l = this.descriptors(t),
                            u = l.length;
                        for (n = 0; n < u; ++n)
                            if ("function" == typeof(s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                        return !0
                    },
                    descriptors: function(t) {
                        var e = t._plugins || (t._plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var n = [],
                            a = [],
                            i = t && t.config || {},
                            o = i.options && i.options.plugins || {};
                        return this._plugins.concat(i.plugins || []).forEach(function(t) {
                            if (-1 === n.indexOf(t)) {
                                var e = t.id,
                                    i = o[e];
                                !1 !== i && (!0 === i && (i = s.clone(r.global.plugins[e])), n.push(t), a.push({
                                    plugin: t,
                                    options: i || {}
                                }))
                            }
                        }), e.descriptors = a, e.id = this._cacheId, a
                    }
                }, t.pluginService = t.plugins, t.PluginBase = n.extend({})
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        32: [function(t, e, i) {
            "use strict";
            var y = t(25),
                n = t(26),
                E = t(45),
                a = t(34);

            function S(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                return n
            }

            function H(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }
            y._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: a.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function(t) {
                function k(t, e, i) {
                    return E.isArray(e) ? E.longestText(t, i, e) : t.measureText(e).width
                }

                function w(t) {
                    var e = E.valueOrDefault,
                        i = y.global,
                        n = e(t.fontSize, i.defaultFontSize),
                        a = e(t.fontStyle, i.defaultFontStyle),
                        o = e(t.fontFamily, i.defaultFontFamily);
                    return {
                        size: n,
                        style: a,
                        family: o,
                        font: E.fontString(n, a, o)
                    }
                }

                function M(t) {
                    return E.options.toLineHeight(E.valueOrDefault(t.lineHeight, 1.2), E.valueOrDefault(t.fontSize, y.global.defaultFontSize))
                }
                t.Scale = n.extend({
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {
                                display: !1
                            }), !1 === t.major && (t.major = {
                                display: !1
                            }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function() {
                        E.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, i) {
                        var n, a, o, r, s, l, u = this;
                        for (u.beforeUpdate(), u.maxWidth = t, u.maxHeight = e, u.margins = E.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), o = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), n = 0, a = (u.ticks = o).length; n < a; ++n) r = o[n], (l = s[n]) ? l.label = r : s.push(l = {
                            label: r,
                            major: !1
                        });
                        return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
                    },
                    afterUpdate: function() {
                        E.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        E.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        E.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        E.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: E.noop,
                    afterDataLimits: function() {
                        E.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        E.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: E.noop,
                    afterBuildTicks: function() {
                        E.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        E.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        E.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        E.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t = this,
                            e = t.ctx,
                            i = t.options.ticks,
                            n = S(t._ticks),
                            a = w(i);
                        e.font = a.font;
                        var o = i.minRotation || 0;
                        if (n.length && t.options.display && t.isHorizontal())
                            for (var r, s = E.longestText(e, a.font, n, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u < l && o < i.maxRotation;) {
                                var d = E.toRadians(o);
                                if (r = Math.cos(d), Math.sin(d) * s > t.maxHeight) {
                                    o--;
                                    break
                                }
                                o++, l = r * s
                            }
                        t.labelRotation = o
                    },
                    afterCalculateTickRotation: function() {
                        E.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        E.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            e = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            i = S(t._ticks),
                            n = t.options,
                            a = n.ticks,
                            o = n.scaleLabel,
                            r = n.gridLines,
                            s = n.display,
                            l = t.isHorizontal(),
                            u = w(a),
                            d = n.gridLines.tickMarkLength;
                        if (e.width = l ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : s && r.drawTicks ? d : 0, e.height = l ? s && r.drawTicks ? d : 0 : t.maxHeight, o.display && s) {
                            var c = M(o) + E.options.toPadding(o.padding).height;
                            l ? e.height += c : e.width += c
                        }
                        if (a.display && s) {
                            var h = E.longestText(t.ctx, u.font, i, t.longestTextCache),
                                f = E.numberOfLabelLines(i),
                                g = .5 * u.size,
                                p = t.options.ticks.padding;
                            if (l) {
                                t.longestLabelWidth = h;
                                var m = E.toRadians(t.labelRotation),
                                    v = Math.cos(m),
                                    b = Math.sin(m) * h + u.size * f + g * (f - 1) + g;
                                e.height = Math.min(t.maxHeight, e.height + b + p), t.ctx.font = u.font;
                                var x = k(t.ctx, i[0], u.font),
                                    y = k(t.ctx, i[i.length - 1], u.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === n.position ? v * x + 3 : v * g + 3, t.paddingRight = "bottom" === n.position ? v * g + 3 : v * y + 3) : (t.paddingLeft = x / 2 + 3, t.paddingRight = y / 2 + 3)
                            } else a.mirror ? h = 0 : h += p + g, e.width = Math.min(t.maxWidth, e.width + h), t.paddingTop = u.size / 2, t.paddingBottom = u.size / 2
                        }
                        t.handleMargins(), t.width = e.width, t.height = e.height
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function() {
                        E.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (E.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: E.noop,
                    getPixelForValue: E.noop,
                    getValueForPixel: E.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            i = e.options.offset;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                a = n * t + e.paddingLeft;
                            i && (a += n / 2);
                            var o = e.left + Math.round(a);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        var r = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (r / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                n = e.left + Math.round(i);
                            return n += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this.min,
                            e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0
                    },
                    _autoSkip: function(t) {
                        var e, i, n, a, o = this,
                            r = o.isHorizontal(),
                            s = o.options.ticks.minor,
                            l = t.length,
                            u = E.toRadians(o.labelRotation),
                            d = Math.cos(u),
                            c = o.longestLabelWidth * d,
                            h = [];
                        for (s.maxTicksLimit && (a = s.maxTicksLimit), r && (e = !1, (c + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((c + s.autoSkipPadding) * l / (o.width - (o.paddingLeft + o.paddingRight)))), a && a < l && (e = Math.max(e, Math.floor(l / a)))), i = 0; i < l; i++) n = t[i], (1 < e && 0 < i % e || i % e == 0 && l <= i + e) && i !== l - 1 && delete n.label, h.push(n);
                        return h
                    },
                    draw: function(C) {
                        var _ = this,
                            D = _.options;
                        if (D.display) {
                            var a = _.ctx,
                                I = y.global,
                                P = D.ticks.minor,
                                t = D.ticks.major || P,
                                A = D.gridLines,
                                e = D.scaleLabel,
                                T = 0 !== _.labelRotation,
                                F = _.isHorizontal(),
                                O = P.autoSkip ? _._autoSkip(_.getTicks()) : _.getTicks(),
                                o = E.valueOrDefault(P.fontColor, I.defaultFontColor),
                                r = w(P),
                                s = E.valueOrDefault(t.fontColor, I.defaultFontColor),
                                l = w(t),
                                R = A.drawTicks ? A.tickMarkLength : 0,
                                i = E.valueOrDefault(e.fontColor, I.defaultFontColor),
                                n = w(e),
                                u = E.options.toPadding(e.padding),
                                L = E.toRadians(_.labelRotation),
                                z = [],
                                B = "right" === D.position ? _.left : _.right - R,
                                W = "right" === D.position ? _.left + R : _.right,
                                N = "bottom" === D.position ? _.top : _.bottom - R,
                                V = "bottom" === D.position ? _.top + R : _.bottom;
                            if (E.each(O, function(t, e) {
                                    if (!E.isNullOrUndef(t.label)) {
                                        var i, n, a, o, r, s, l, u, d, c, h, f, g, p, m = t.label;
                                        e === _.zeroLineIndex && D.offset === A.offsetGridLines ? (i = A.zeroLineWidth, n = A.zeroLineColor, a = A.zeroLineBorderDash, o = A.zeroLineBorderDashOffset) : (i = E.valueAtIndexOrDefault(A.lineWidth, e), n = E.valueAtIndexOrDefault(A.color, e), a = E.valueOrDefault(A.borderDash, I.borderDash), o = E.valueOrDefault(A.borderDashOffset, I.borderDashOffset));
                                        var v = "middle",
                                            b = "middle",
                                            x = P.padding;
                                        if (F) {
                                            var y = R + x;
                                            "bottom" === D.position ? (b = T ? "middle" : "top", v = T ? "right" : "center", p = _.top + y) : (b = T ? "middle" : "bottom", v = T ? "left" : "center", p = _.bottom - y);
                                            var k = H(_, e, A.offsetGridLines && 1 < O.length);
                                            k < _.left && (n = "rgba(0,0,0,0)"), k += E.aliasPixel(i), g = _.getPixelForTick(e) + P.labelOffset, r = l = d = h = k, s = N, u = V, c = C.top, f = C.bottom
                                        } else {
                                            var w, M = "left" === D.position;
                                            P.mirror ? (v = M ? "left" : "right", w = x) : (v = M ? "right" : "left", w = R + x), g = M ? _.right - w : _.left + w;
                                            var S = H(_, e, A.offsetGridLines && 1 < O.length);
                                            S < _.top && (n = "rgba(0,0,0,0)"), S += E.aliasPixel(i), p = _.getPixelForTick(e) + P.labelOffset, r = B, l = W, d = C.left, h = C.right, s = u = c = f = S
                                        }
                                        z.push({
                                            tx1: r,
                                            ty1: s,
                                            tx2: l,
                                            ty2: u,
                                            x1: d,
                                            y1: c,
                                            x2: h,
                                            y2: f,
                                            labelX: g,
                                            labelY: p,
                                            glWidth: i,
                                            glColor: n,
                                            glBorderDash: a,
                                            glBorderDashOffset: o,
                                            rotation: -1 * L,
                                            label: m,
                                            major: t.major,
                                            textBaseline: b,
                                            textAlign: v
                                        })
                                    }
                                }), E.each(z, function(t) {
                                    if (A.display && (a.save(), a.lineWidth = t.glWidth, a.strokeStyle = t.glColor, a.setLineDash && (a.setLineDash(t.glBorderDash), a.lineDashOffset = t.glBorderDashOffset), a.beginPath(), A.drawTicks && (a.moveTo(t.tx1, t.ty1), a.lineTo(t.tx2, t.ty2)), A.drawOnChartArea && (a.moveTo(t.x1, t.y1), a.lineTo(t.x2, t.y2)), a.stroke(), a.restore()), P.display) {
                                        a.save(), a.translate(t.labelX, t.labelY), a.rotate(t.rotation), a.font = t.major ? l.font : r.font, a.fillStyle = t.major ? s : o, a.textBaseline = t.textBaseline, a.textAlign = t.textAlign;
                                        var e = t.label;
                                        if (E.isArray(e))
                                            for (var i = 0, n = 0; i < e.length; ++i) a.fillText("" + e[i], 0, n), n += 1.5 * r.size;
                                        else a.fillText(e, 0, 0);
                                        a.restore()
                                    }
                                }), e.display) {
                                var d, c, h = 0,
                                    f = M(e) / 2;
                                if (F) d = _.left + (_.right - _.left) / 2, c = "bottom" === D.position ? _.bottom - f - u.bottom : _.top + f + u.top;
                                else {
                                    var g = "left" === D.position;
                                    d = g ? _.left + f + u.top : _.right - f - u.top, c = _.top + (_.bottom - _.top) / 2, h = g ? -.5 * Math.PI : .5 * Math.PI
                                }
                                a.save(), a.translate(d, c), a.rotate(h), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = i, a.font = n.font, a.fillText(e.labelString, 0, 0), a.restore()
                            }
                            if (A.drawBorder) {
                                a.lineWidth = E.valueAtIndexOrDefault(A.lineWidth, 0), a.strokeStyle = E.valueAtIndexOrDefault(A.color, 0);
                                var p = _.left,
                                    m = _.right,
                                    v = _.top,
                                    b = _.bottom,
                                    x = E.aliasPixel(a.lineWidth);
                                F ? (v = b = "top" === D.position ? _.bottom : _.top, v += x, b += x) : (p = m = "left" === D.position ? _.right : _.left, p += x, m += x), a.beginPath(), a.moveTo(p, v), a.lineTo(m, b), a.stroke()
                            }
                        }
                    }
                })
            }
        }, {
            25: 25,
            26: 26,
            34: 34,
            45: 45
        }],
        33: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(45);
            e.exports = function(i) {
                i.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, e, i) {
                        this.constructors[t] = e, this.defaults[t] = a.clone(i)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(t) {
                        return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function(t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
                    },
                    addScalesToLayout: function(e) {
                        a.each(e.scales, function(t) {
                            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, i.layoutService.addBox(e, t)
                        })
                    }
                }
            }
        }, {
            25: 25,
            45: 45
        }],
        34: [function(t, e, i) {
            "use strict";
            var d = t(45);
            e.exports = {
                generators: {
                    linear: function(t, e) {
                        var i, n = [];
                        if (t.stepSize && 0 < t.stepSize) i = t.stepSize;
                        else {
                            var a = d.niceNum(e.max - e.min, !1);
                            i = d.niceNum(a / (t.maxTicks - 1), !0)
                        }
                        var o = Math.floor(e.min / i) * i,
                            r = Math.ceil(e.max / i) * i;
                        t.min && t.max && t.stepSize && d.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (o = t.min, r = t.max);
                        var s = (r - o) / i;
                        s = d.almostEquals(s, Math.round(s), i / 1e3) ? Math.round(s) : Math.ceil(s), n.push(void 0 !== t.min ? t.min : o);
                        for (var l = 1; l < s; ++l) n.push(o + l * i);
                        return n.push(void 0 !== t.max ? t.max : r), n
                    },
                    logarithmic: function(t, e) {
                        var i, n, a = [],
                            o = d.valueOrDefault,
                            r = o(t.min, Math.pow(10, Math.floor(d.log10(e.min)))),
                            s = Math.floor(d.log10(e.max)),
                            l = Math.ceil(e.max / Math.pow(10, s));
                        for (0 === r ? (i = Math.floor(d.log10(e.minNotZero)), n = Math.floor(e.minNotZero / Math.pow(10, i)), a.push(r), r = n * Math.pow(10, i)) : (i = Math.floor(d.log10(r)), n = Math.floor(r / Math.pow(10, i))); a.push(r), 10 === ++n && (n = 1, ++i), r = n * Math.pow(10, i), i < s || i === s && n < l;);
                        var u = o(t.max, r);
                        return a.push(u), a
                    }
                },
                formatters: {
                    values: function(t) {
                        return d.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, i) {
                        var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                        1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
                        var a = d.log10(Math.abs(n)),
                            o = "";
                        if (0 !== t) {
                            var r = -1 * Math.floor(a);
                            r = Math.max(Math.min(r, 20), 0), o = t.toFixed(r)
                        } else o = "0";
                        return o
                    },
                    logarithmic: function(t, e, i) {
                        var n = t / Math.pow(10, Math.floor(d.log10(t)));
                        return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {
            45: 45
        }],
        35: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(26),
                L = t(45);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: L.noop,
                        title: function(t, e) {
                            var i = "",
                                n = e.labels,
                                a = n ? n.length : 0;
                            if (0 < t.length) {
                                var o = t[0];
                                o.xLabel ? i = o.xLabel : 0 < a && o.index < a && (i = n[o.index])
                            }
                            return i
                        },
                        afterTitle: L.noop,
                        beforeBody: L.noop,
                        beforeLabel: L.noop,
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), i += t.yLabel
                        },
                        labelColor: function(t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: i.borderColor,
                                backgroundColor: i.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: L.noop,
                        afterBody: L.noop,
                        beforeFooter: L.noop,
                        footer: L.noop,
                        afterFooter: L.noop
                    }
                }
            }), e.exports = function(O) {
                function h(t, e) {
                    var i = L.color(t);
                    return i.alpha(e * i.alpha()).rgbaString()
                }

                function r(t, e) {
                    return e && (L.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function R(t) {
                    var e = n.global,
                        i = L.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }
                O.Tooltip = a.extend({
                    initialize: function() {
                        this._model = R(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            i = t.title.apply(this, arguments),
                            n = t.afterTitle.apply(this, arguments),
                            a = [];
                        return a = r(a = r(a = r(a, e), i), n)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return L.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, i) {
                        var n = this,
                            a = n._options.callbacks,
                            o = [];
                        return L.each(t, function(t) {
                            var e = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            r(e.before, a.beforeLabel.call(n, t, i)), r(e.lines, a.label.call(n, t, i)), r(e.after, a.afterLabel.call(n, t, i)), o.push(e)
                        }), o
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return L.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            i = t.footer.apply(this, arguments),
                            n = t.afterFooter.apply(this, arguments),
                            a = [];
                        return a = r(a = r(a = r(a, e), i), n)
                    },
                    update: function(t) {
                        var e, i, n, a, o, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y = this,
                            k = y._options,
                            w = y._model,
                            M = y._model = R(k),
                            S = y._active,
                            C = y._data,
                            _ = {
                                xAlign: w.xAlign,
                                yAlign: w.yAlign
                            },
                            D = {
                                x: w.x,
                                y: w.y
                            },
                            I = {
                                width: w.width,
                                height: w.height
                            },
                            P = {
                                x: w.caretX,
                                y: w.caretY
                            };
                        if (S.length) {
                            M.opacity = 1;
                            var A = [],
                                T = [];
                            P = O.Tooltip.positioners[k.position].call(y, S, y._eventPosition);
                            var F = [];
                            for (e = 0, i = S.length; e < i; ++e) F.push((p = S[e], v = m = void 0, m = p._xScale, v = p._yScale || p._scale, b = p._index, x = p._datasetIndex, {
                                xLabel: m ? m.getLabelForIndex(b, x) : "",
                                yLabel: v ? v.getLabelForIndex(b, x) : "",
                                index: b,
                                datasetIndex: x,
                                x: p._model.x,
                                y: p._model.y
                            }));
                            k.filter && (F = F.filter(function(t) {
                                return k.filter(t, C)
                            })), k.itemSort && (F = F.sort(function(t, e) {
                                return k.itemSort(t, e, C)
                            })), L.each(F, function(t) {
                                A.push(k.callbacks.labelColor.call(y, t, y._chart)), T.push(k.callbacks.labelTextColor.call(y, t, y._chart))
                            }), M.title = y.getTitle(F, C), M.beforeBody = y.getBeforeBody(F, C), M.body = y.getBody(F, C), M.afterBody = y.getAfterBody(F, C), M.footer = y.getFooter(F, C), M.x = Math.round(P.x), M.y = Math.round(P.y), M.caretPadding = k.caretPadding, M.labelColors = A, M.labelTextColors = T, M.dataPoints = F, _ = function(t, e) {
                                var i, n, a, o, r, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    d = "center",
                                    c = "center";
                                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                                var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === c ? (i = function(t) {
                                    return t <= h
                                }, n = function(t) {
                                    return h < t
                                }) : (i = function(t) {
                                    return t <= e.width / 2
                                }, n = function(t) {
                                    return t >= l.width - e.width / 2
                                }), a = function(t) {
                                    return t + e.width > l.width
                                }, o = function(t) {
                                    return t - e.width < 0
                                }, r = function(t) {
                                    return t <= f ? "top" : "bottom"
                                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                                var g = t._options;
                                return {
                                    xAlign: g.xAlign ? g.xAlign : d,
                                    yAlign: g.yAlign ? g.yAlign : c
                                }
                            }(this, I = function(t, e) {
                                var i = t._chart.ctx,
                                    n = 2 * e.yPadding,
                                    a = 0,
                                    o = e.body,
                                    r = o.reduce(function(t, e) {
                                        return t + e.before.length + e.lines.length + e.after.length
                                    }, 0);
                                r += e.beforeBody.length + e.afterBody.length;
                                var s = e.title.length,
                                    l = e.footer.length,
                                    u = e.titleFontSize,
                                    d = e.bodyFontSize,
                                    c = e.footerFontSize;
                                n += s * u, n += s ? (s - 1) * e.titleSpacing : 0, n += s ? e.titleMarginBottom : 0, n += r * d, n += r ? (r - 1) * e.bodySpacing : 0, n += l ? e.footerMarginTop : 0, n += l * c, n += l ? (l - 1) * e.footerSpacing : 0;
                                var h = 0,
                                    f = function(t) {
                                        a = Math.max(a, i.measureText(t).width + h)
                                    };
                                return i.font = L.fontString(u, e._titleFontStyle, e._titleFontFamily), L.each(e.title, f), i.font = L.fontString(d, e._bodyFontStyle, e._bodyFontFamily), L.each(e.beforeBody.concat(e.afterBody), f), h = e.displayColors ? d + 2 : 0, L.each(o, function(t) {
                                    L.each(t.before, f), L.each(t.lines, f), L.each(t.after, f)
                                }), h = 0, i.font = L.fontString(c, e._footerFontStyle, e._footerFontFamily), L.each(e.footer, f), {
                                    width: a += 2 * e.xPadding,
                                    height: n
                                }
                            }(this, M)), a = I, o = _, r = (n = M).x, s = n.y, l = n.caretSize, u = n.caretPadding, d = n.cornerRadius, c = o.xAlign, h = o.yAlign, f = l + u, g = d + u, "right" === c ? r -= a.width : "center" === c && (r -= a.width / 2), "top" === h ? s += f : s -= "bottom" === h ? a.height + f : a.height / 2, "center" === h ? "left" === c ? r += f : "right" === c && (r -= f) : "left" === c ? r -= g : "right" === c && (r += g), D = {
                                x: r,
                                y: s
                            }
                        } else M.opacity = 0;
                        return M.xAlign = _.xAlign, M.yAlign = _.yAlign, M.x = D.x, M.y = D.y, M.width = I.width, M.height = I.height, M.caretX = P.x, M.caretY = P.y, y._model = M, t && k.custom && k.custom.call(y, M), y
                    },
                    drawCaret: function(t, e) {
                        var i = this._chart.ctx,
                            n = this._view,
                            a = this.getCaretPosition(t, e, n);
                        i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
                    },
                    getCaretPosition: function(t, e, i) {
                        var n, a, o, r, s, l, u = i.caretSize,
                            d = i.cornerRadius,
                            c = i.xAlign,
                            h = i.yAlign,
                            f = t.x,
                            g = t.y,
                            p = e.width,
                            m = e.height;
                        if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);
                        else if (n = "left" === c ? (a = f + d + u) - u : "right" === c ? (a = f + p - d - u) - u : (a = f + p / 2) - u, o = a + u, "top" === h) s = (r = g) - u, l = r;
                        else {
                            s = (r = g + m) + u, l = r;
                            var v = o;
                            o = n, n = v
                        }
                        return {
                            x1: n,
                            x2: a,
                            x3: o,
                            y1: r,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, e, i, n) {
                        var a = e.title;
                        if (a.length) {
                            i.textAlign = e._titleAlign, i.textBaseline = "top";
                            var o, r, s = e.titleFontSize,
                                l = e.titleSpacing;
                            for (i.fillStyle = h(e.titleFontColor, n), i.font = L.fontString(s, e._titleFontStyle, e._titleFontFamily), o = 0, r = a.length; o < r; ++o) i.fillText(a[o], t.x, t.y), t.y += s + l, o + 1 === a.length && (t.y += e.titleMarginBottom - l)
                        }
                    },
                    drawBody: function(n, a, o, r) {
                        var s = a.bodyFontSize,
                            e = a.bodySpacing,
                            t = a.body;
                        o.textAlign = a._bodyAlign, o.textBaseline = "top", o.font = L.fontString(s, a._bodyFontStyle, a._bodyFontFamily);
                        var i = 0,
                            l = function(t) {
                                o.fillText(t, n.x + i, n.y), n.y += s + e
                            };
                        o.fillStyle = h(a.bodyFontColor, r), L.each(a.beforeBody, l);
                        var u = a.displayColors;
                        i = u ? s + 2 : 0, L.each(t, function(t, e) {
                            var i = h(a.labelTextColors[e], r);
                            o.fillStyle = i, L.each(t.before, l), L.each(t.lines, function(t) {
                                u && (o.fillStyle = h(a.legendColorBackground, r), o.fillRect(n.x, n.y, s, s), o.lineWidth = 1, o.strokeStyle = h(a.labelColors[e].borderColor, r), o.strokeRect(n.x, n.y, s, s), o.fillStyle = h(a.labelColors[e].backgroundColor, r), o.fillRect(n.x + 1, n.y + 1, s - 2, s - 2), o.fillStyle = i), l(t)
                            }), L.each(t.after, l)
                        }), i = 0, L.each(a.afterBody, l), n.y -= e
                    },
                    drawFooter: function(e, i, n, t) {
                        var a = i.footer;
                        a.length && (e.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = h(i.footerFontColor, t), n.font = L.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), L.each(a, function(t) {
                            n.fillText(t, e.x, e.y), e.y += i.footerFontSize + i.footerSpacing
                        }))
                    },
                    drawBackground: function(t, e, i, n, a) {
                        i.fillStyle = h(e.backgroundColor, a), i.strokeStyle = h(e.borderColor, a), i.lineWidth = e.borderWidth;
                        var o = e.xAlign,
                            r = e.yAlign,
                            s = t.x,
                            l = t.y,
                            u = n.width,
                            d = n.height,
                            c = e.cornerRadius;
                        i.beginPath(), i.moveTo(s + c, l), "top" === r && this.drawCaret(t, n), i.lineTo(s + u - c, l), i.quadraticCurveTo(s + u, l, s + u, l + c), "center" === r && "right" === o && this.drawCaret(t, n), i.lineTo(s + u, l + d - c), i.quadraticCurveTo(s + u, l + d, s + u - c, l + d), "bottom" === r && this.drawCaret(t, n), i.lineTo(s + c, l + d), i.quadraticCurveTo(s, l + d, s, l + d - c), "center" === r && "left" === o && this.drawCaret(t, n), i.lineTo(s, l + c), i.quadraticCurveTo(s, l, s + c, l), i.closePath(), i.fill(), 0 < e.borderWidth && i.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var i = {
                                    width: e.width,
                                    height: e.height
                                },
                                n = {
                                    x: e.x,
                                    y: e.y
                                },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e._options,
                            n = !1;
                        if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), !(n = !L.arrayEquals(e._active, e._lastActive))) return !1;
                        if (e._lastActive = e._active, i.enabled || i.custom) {
                            e._eventPosition = {
                                x: t.x,
                                y: t.y
                            };
                            var a = e._model;
                            e.update(!0), e.pivot(), n |= a.x !== e._model.x || a.y !== e._model.y
                        }
                        return n
                    }
                }), O.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, i, n = 0,
                            a = 0,
                            o = 0;
                        for (e = 0, i = t.length; e < i; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var s = r.tooltipPosition();
                                n += s.x, a += s.y, ++o
                            }
                        }
                        return {
                            x: Math.round(n / o),
                            y: Math.round(a / o)
                        }
                    },
                    nearest: function(t, e) {
                        var i, n, a, o = e.x,
                            r = e.y,
                            s = Number.POSITIVE_INFINITY;
                        for (i = 0, n = t.length; i < n; ++i) {
                            var l = t[i];
                            if (l && l.hasValue()) {
                                var u = l.getCenterPoint(),
                                    d = L.distanceBetweenPoints(e, u);
                                d < s && (s = d, a = l)
                            }
                        }
                        if (a) {
                            var c = a.tooltipPosition();
                            o = c.x, r = c.y
                        }
                        return {
                            x: o,
                            y: r
                        }
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        36: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(26),
                d = t(45);
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), e.exports = a.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = d.getAngleFromPoint(i, {
                                x: t,
                                y: e
                            }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) s += 2 * Math.PI;
                        for (; s < a;) a -= 2 * Math.PI;
                        for (; a < r;) a += 2 * Math.PI;
                        var l = r <= a && a <= s,
                            u = o >= i.innerRadius && o <= i.outerRadius;
                        return l && u
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        37: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(26),
                d = t(45),
                c = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: c.defaultColor,
                        borderWidth: 3,
                        borderColor: c.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = a.extend({
                draw: function() {
                    var t, e, i, n, a = this._view,
                        o = this._chart.ctx,
                        r = a.spanGaps,
                        s = this._children.slice(),
                        l = c.elements.line,
                        u = -1;
                    for (this._loop && s.length && s.push(s[0]), o.save(), o.lineCap = a.borderCapStyle || l.borderCapStyle, o.setLineDash && o.setLineDash(a.borderDash || l.borderDash), o.lineDashOffset = a.borderDashOffset || l.borderDashOffset, o.lineJoin = a.borderJoinStyle || l.borderJoinStyle, o.lineWidth = a.borderWidth || l.borderWidth, o.strokeStyle = a.borderColor || c.defaultColor, o.beginPath(), u = -1, t = 0; t < s.length; ++t) e = s[t], i = d.previousItem(s, t), n = e._view, 0 === t ? n.skip || (o.moveTo(n.x, n.y), u = t) : (i = -1 === u ? i : s[u], n.skip || (u !== t - 1 && !r || -1 === u ? o.moveTo(n.x, n.y) : d.canvas.lineTo(o, i._view, e._view), u = t));
                    o.stroke(), o.restore()
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        38: [function(t, e, i) {
            "use strict";
            var d = t(25),
                n = t(26),
                c = t(45),
                h = d.global.defaultColor;

            function a(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
            }
            d._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: h,
                        borderColor: h,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = n.extend({
                inRange: function(t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                },
                inLabelRange: a,
                inXRange: a,
                inYRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                },
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view,
                        i = this._model,
                        n = this._chart.ctx,
                        a = e.pointStyle,
                        o = e.radius,
                        r = e.x,
                        s = e.y,
                        l = c.color,
                        u = 0;
                    e.skip || (n.strokeStyle = e.borderColor || h, n.lineWidth = c.valueOrDefault(e.borderWidth, d.global.elements.point.borderWidth), n.fillStyle = e.backgroundColor || h, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? u = (r - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? u = (i.x - r) / (i.x - t.right) : i.y < t.top ? u = (s - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (u = (i.y - s) / (i.y - t.bottom)), u = Math.round(100 * u) / 100, n.strokeStyle = l(n.strokeStyle).alpha(u).rgbString(), n.fillStyle = l(n.fillStyle).alpha(u).rgbString()), c.canvas.drawPoint(n, a, o, r, s))
                }
            })
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        39: [function(t, e, i) {
            "use strict";
            var n = t(25),
                a = t(26);

            function l(t) {
                return void 0 !== t._view.width
            }

            function o(t) {
                var e, i, n, a, o = t._view;
                if (l(t)) {
                    var r = o.width / 2;
                    e = o.x - r, i = o.x + r, n = Math.min(o.y, o.base), a = Math.max(o.y, o.base)
                } else {
                    var s = o.height / 2;
                    e = Math.min(o.x, o.base), i = Math.max(o.x, o.base), n = o.y - s, a = o.y + s
                }
                return {
                    left: e,
                    top: n,
                    right: i,
                    bottom: a
                }
            }
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), e.exports = a.extend({
                draw: function() {
                    var t, e, i, n, a, o, r, s = this._chart.ctx,
                        l = this._view,
                        u = l.borderWidth;
                    if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = t < e ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, a = 1, o = (i = l.y) < (n = l.base) ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
                        var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                            c = (u = d < u ? d : u) / 2,
                            h = t + ("left" !== r ? c * a : 0),
                            f = e + ("right" !== r ? -c * a : 0),
                            g = i + ("top" !== r ? c * o : 0),
                            p = n + ("bottom" !== r ? -c * o : 0);
                        h !== f && (i = g, n = p), g !== p && (t = h, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [
                            [t, n],
                            [t, i],
                            [e, i],
                            [e, n]
                        ],
                        v = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function b(t) {
                        return m[(v + t) % 4]
                    } - 1 === v && (v = 0);
                    var x = b(0);
                    s.moveTo(x[0], x[1]);
                    for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
                    s.fill(), u && s.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var i = !1;
                    if (this._view) {
                        var n = o(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                    }
                    return i
                },
                inLabelRange: function(t, e) {
                    if (!this._view) return !1;
                    var i = o(this);
                    return l(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                },
                inXRange: function(t) {
                    var e = o(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function(t) {
                    var e = o(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function() {
                    var t, e, i = this._view;
                    return l(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        }, {
            25: 25,
            26: 26
        }],
        40: [function(t, e, i) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {
            36: 36,
            37: 37,
            38: 38,
            39: 39
        }],
        41: [function(t, e, i) {
            "use strict";
            var n = t(42);
            i = e.exports = {
                clear: function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function(t, e, i, n, a, o) {
                    if (o) {
                        var r = Math.min(o, n / 2),
                            s = Math.min(o, a / 2);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i)
                    } else t.rect(e, i, n, a)
                },
                drawPoint: function(t, e, i, n, a) {
                    var o, r, s, l, u, d;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (e) {
                                default:
                                    t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                                    break;
                                case "triangle":
                                    t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
                                    break;
                                case "rect":
                                    d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                                    break;
                                case "rectRounded":
                                    var c = i / Math.SQRT2,
                                        h = n - c,
                                        f = a - c,
                                        g = Math.SQRT2 * i;
                                    t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
                                    break;
                                case "rectRot":
                                    d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
                                    break;
                                case "cross":
                                    t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                                    break;
                                case "crossRot":
                                    t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                                    break;
                                case "star":
                                    t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                                    break;
                                case "line":
                                    t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                                    break;
                                case "dash":
                                    t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
                },
                clipArea: function(t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function(t) {
                    t.restore()
                },
                lineTo: function(t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            };
            n.clear = i.clear, n.drawRoundedRectangle = function(t) {
                t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
            }
        }, {
            42: 42
        }],
        42: [function(t, e, i) {
            "use strict";
            var n, d = {
                noop: function() {},
                uid: (n = 0, function() {
                    return n++
                }),
                isNullOrUndef: function(t) {
                    return null == t
                },
                isArray: Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function(t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, i) {
                    return d.valueOrDefault(d.isArray(t) ? t[e] : t, i)
                },
                callback: function(t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                },
                each: function(t, e, i, n) {
                    var a, o, r;
                    if (d.isArray(t))
                        if (o = t.length, n)
                            for (a = o - 1; 0 <= a; a--) e.call(i, t[a], a);
                        else
                            for (a = 0; a < o; a++) e.call(i, t[a], a);
                    else if (d.isObject(t))
                        for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) e.call(i, t[r[a]], r[a])
                },
                arrayEquals: function(t, e) {
                    var i, n, a, o;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i)
                        if (a = t[i], o = e[i], a instanceof Array && o instanceof Array) {
                            if (!d.arrayEquals(a, o)) return !1
                        } else if (a !== o) return !1;
                    return !0
                },
                clone: function(t) {
                    if (d.isArray(t)) return t.map(d.clone);
                    if (d.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = d.clone(t[i[a]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, i, n) {
                    var a = e[t],
                        o = i[t];
                    d.isObject(a) && d.isObject(o) ? d.merge(a, o, n) : e[t] = d.clone(o)
                },
                _mergerIf: function(t, e, i) {
                    var n = e[t],
                        a = i[t];
                    d.isObject(n) && d.isObject(a) ? d.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = d.clone(a))
                },
                merge: function(t, e, i) {
                    var n, a, o, r, s, l = d.isArray(e) ? e : [e],
                        u = l.length;
                    if (!d.isObject(t)) return t;
                    for (n = (i = i || {}).merger || d._merger, a = 0; a < u; ++a)
                        if (e = l[a], d.isObject(e))
                            for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) n(o[s], t, e, i);
                    return t
                },
                mergeIf: function(t, e) {
                    return d.merge(t, e, {
                        merger: d._mergerIf
                    })
                },
                extend: function(i) {
                    for (var t = function(t, e) {
                            i[e] = t
                        }, e = 1, n = arguments.length; e < n; ++e) d.each(arguments[e], t);
                    return i
                },
                inherits: function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        n = function() {
                            this.constructor = i
                        };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = d.inherits, t && d.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            (e.exports = d).callCallback = d.callback, d.indexOf = function(t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, d.getValueOrDefault = d.valueOrDefault, d.getValueAtIndexOrDefault = d.valueAtIndexOrDefault
        }, {}],
        43: [function(t, e, i) {
            "use strict";
            var n = t(42),
                a = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        return t * t * (2.70158 * t - 1.70158)
                    },
                    easeOutBack: function(t) {
                        return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - a.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                    }
                };
            e.exports = {
                effects: a
            }, n.easingEffects = a
        }, {
            42: 42
        }],
        44: [function(t, e, i) {
            "use strict";
            var r = t(42);
            e.exports = {
                toLineHeight: function(t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, i, n, a;
                    return r.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, n = +t.bottom || 0, a = +t.left || 0) : e = i = n = a = +t || 0, {
                        top: e,
                        right: i,
                        bottom: n,
                        left: a,
                        height: e + n,
                        width: a + i
                    }
                },
                resolve: function(t, e, i) {
                    var n, a, o;
                    for (n = 0, a = t.length; n < a; ++n)
                        if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && r.isArray(o) && (o = o[i]), void 0 !== o)) return o
                }
            }
        }, {
            42: 42
        }],
        45: [function(t, e, i) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {
            41: 41,
            42: 42,
            43: 43,
            44: 44
        }],
        46: [function(t, e, i) {
            e.exports = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}],
        47: [function(t, e, i) {
            "use strict";
            var f = t(45),
                g = "$chartjs",
                p = "chartjs-",
                m = p + "render-monitor",
                v = p + "render-animation",
                b = ["animationstart", "webkitAnimationStart"],
                s = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function l(t, e) {
                var i = f.getStyle(t, e),
                    n = i && i.match(/^(\d+)(\.\d+)?px$/);
                return n ? Number(n[1]) : void 0
            }
            var n = !! function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {}
                return t
            }() && {
                passive: !0
            };

            function x(t, e, i) {
                t.addEventListener(e, i, n)
            }

            function r(t, e, i) {
                t.removeEventListener(e, i, n)
            }

            function y(t, e, i, n, a) {
                return {
                    type: t,
                    chart: e,
                    native: a || null,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== n ? n : null
                }
            }

            function a(e, t, i) {
                var n, a, o, r, s, l, u, d, c = e[g] || (e[g] = {}),
                    h = c.resizer = function(t) {
                        var e = document.createElement("div"),
                            i = p + "size-monitor",
                            n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                        var a = e.childNodes[0],
                            o = e.childNodes[1];
                        e._reset = function() {
                            a.scrollLeft = 1e6, a.scrollTop = 1e6, o.scrollLeft = 1e6, o.scrollTop = 1e6
                        };
                        var r = function() {
                            e._reset(), t()
                        };
                        return x(a, "scroll", r.bind(a, "expand")), x(o, "scroll", r.bind(o, "shrink")), e
                    }((o = !(n = function() {
                        if (c.resizer) return t(y("resize", i))
                    }), r = [], function() {
                        r = Array.prototype.slice.call(arguments), a = a || this, o || (o = !0, f.requestAnimFrame.call(window, function() {
                            o = !1, n.apply(a, r)
                        }))
                    }));
                l = function() {
                    if (c.resizer) {
                        var t = e.parentNode;
                        t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset()
                    }
                }, u = (s = e)[g] || (s[g] = {}), d = u.renderProxy = function(t) {
                    t.animationName === v && l()
                }, f.each(b, function(t) {
                    x(s, t, d)
                }), u.reflow = !!s.offsetParent, s.classList.add(m)
            }

            function o(t) {
                var e, i, n, a = t[g] || {},
                    o = a.resizer;
                delete a.resizer, i = (e = t)[g] || {}, (n = i.renderProxy) && (f.each(b, function(t) {
                    r(e, t, n)
                }), delete i.renderProxy), e.classList.remove(m), o && o.parentNode && o.parentNode.removeChild(o)
            }
            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + v + "{" + n + "}@keyframes " + v + "{" + n + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (e = "/* Chart.js */\n" + e, (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                },
                acquireContext: function(t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function(t, e) {
                        var i = t.style,
                            n = t.getAttribute("height"),
                            a = t.getAttribute("width");
                        if (t[g] = {
                                initial: {
                                    height: n,
                                    width: a,
                                    style: {
                                        display: i.display,
                                        height: i.height,
                                        width: i.width
                                    }
                                }
                            }, i.display = i.display || "block", null === a || "" === a) {
                            var o = l(t, "width");
                            void 0 !== o && (t.width = o)
                        }
                        if (null === n || "" === n)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var r = l(t, "height");
                                void 0 !== o && (t.height = r)
                            }
                    }(t, e), i) : null
                },
                releaseContext: function(t) {
                    var i = t.canvas;
                    if (i[g]) {
                        var n = i[g].initial;
                        ["height", "width"].forEach(function(t) {
                            var e = n[t];
                            f.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e)
                        }), f.each(n.style || {}, function(t, e) {
                            i.style[e] = t
                        }), i.width = i.width, delete i[g]
                    }
                },
                addEventListener: function(o, t, r) {
                    var e = o.canvas;
                    if ("resize" !== t) {
                        var i = r[g] || (r[g] = {});
                        x(e, t, (i.proxies || (i.proxies = {}))[o.id + "_" + t] = function(t) {
                            var e, i, n, a;
                            r((i = o, n = s[(e = t).type] || e.type, a = f.getRelativePosition(e, i), y(n, i, a.x, a.y, e)))
                        })
                    } else a(e, r, o)
                },
                removeEventListener: function(t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var a = ((i[g] || {}).proxies || {})[t.id + "_" + e];
                        a && r(n, e, a)
                    } else o(n)
                }
            }, f.addEvent = x, f.removeEvent = r
        }, {
            45: 45
        }],
        48: [function(t, e, i) {
            "use strict";
            var n = t(45),
                a = t(46),
                o = t(47),
                r = o._enabled ? o : a;
            e.exports = n.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, r)
        }, {
            45: 45,
            46: 46,
            47: 47
        }],
        49: [function(t, e, i) {
            "use strict";
            var u = t(25),
                m = t(40),
                d = t(45);
            u._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            }), e.exports = function() {
                var h = {
                    dataset: function(t) {
                        var e = t.fill,
                            i = t.chart,
                            n = i.getDatasetMeta(e),
                            a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                            o = a.length || 0;
                        return o ? function(t, e) {
                            return e < o && a[e]._view || null
                        } : null
                    },
                    boundary: function(t) {
                        var e = t.boundary,
                            i = e ? e.x : null,
                            n = e ? e.y : null;
                        return function(t) {
                            return {
                                x: null === i ? t.x : i,
                                y: null === n ? t.y : n
                            }
                        }
                    }
                };

                function f(t, e, i) {
                    var n, a = t._model || {},
                        o = a.fill;
                    if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
                    if (!0 === o) return "origin";
                    if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || i <= n) && n;
                    switch (o) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return o;
                        default:
                            return !1
                    }
                }

                function g(t) {
                    var e, i = t.el._model || {},
                        n = t.el._scale || {},
                        a = t.fill,
                        o = null;
                    if (isFinite(a)) return null;
                    if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
                        if (void 0 !== o.x && void 0 !== o.y) return o;
                        if ("number" == typeof o && isFinite(o)) return {
                            x: (e = n.isHorizontal()) ? o : null,
                            y: e ? null : o
                        }
                    }
                    return null
                }

                function p(t, e, i) {
                    var n, a = t[e].fill,
                        o = [e];
                    if (!i) return a;
                    for (; !1 !== a && -1 === o.indexOf(a);) {
                        if (!isFinite(a)) return a;
                        if (!(n = t[a])) return !1;
                        if (n.visible) return a;
                        o.push(a), a = n.fill
                    }
                    return !1
                }

                function x(t) {
                    return t && !t.skip
                }

                function y(t, e, i, n, a) {
                    var o;
                    if (n && a) {
                        for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) d.canvas.lineTo(t, e[o - 1], e[o]);
                        for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; 0 < o; --o) d.canvas.lineTo(t, i[o], i[o - 1], !0)
                    }
                }
                return {
                    id: "filler",
                    afterDatasetsUpdate: function(t, e) {
                        var i, n, a, o, r, s, l, u = (t.data.datasets || []).length,
                            d = e.propagate,
                            c = [];
                        for (n = 0; n < u; ++n) o = null, (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof m.Line && (o = {
                            visible: t.isDatasetVisible(n),
                            fill: f(a, n, u),
                            chart: t,
                            el: a
                        }), i.$filler = o, c.push(o);
                        for (n = 0; n < u; ++n)(o = c[n]) && (o.fill = p(c, n, d), o.boundary = g(o), o.mapper = (l = void 0, s = (r = o).fill, !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), h[l](r))))
                    },
                    beforeDatasetDraw: function(t, e) {
                        var i = e.meta.$filler;
                        if (i) {
                            var n = t.ctx,
                                a = i.el,
                                o = a._view,
                                r = a._children || [],
                                s = i.mapper,
                                l = o.backgroundColor || u.global.defaultColor;
                            s && l && r.length && (d.canvas.clipArea(n, t.chartArea), function(t, e, i, n, a, o) {
                                var r, s, l, u, d, c, h, f = e.length,
                                    g = n.spanGaps,
                                    p = [],
                                    m = [],
                                    v = 0,
                                    b = 0;
                                for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r) d = i(u = e[l = r % f]._view, l, n), c = x(u), h = x(d), c && h ? (v = p.push(u), b = m.push(d)) : v && b && (g ? (c && p.push(u), h && m.push(d)) : (y(t, p, m, v, b), v = b = 0, p = [], m = []));
                                y(t, p, m, v, b), t.closePath(), t.fillStyle = a, t.fill()
                            }(n, r, s, o, l, a._loop), d.canvas.unclipArea(n))
                        }
                    }
                }
            }
        }, {
            25: 25,
            40: 40,
            45: 45
        }],
        50: [function(t, e, i) {
            "use strict";
            var D = t(25),
                r = t(26),
                I = t(45);
            D._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var i = e.datasetIndex,
                            n = this.chart,
                            a = n.getDatasetMeta(i);
                        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(i) {
                            var t = i.data;
                            return I.isArray(t.datasets) ? t.datasets.map(function(t, e) {
                                return {
                                    text: t.label,
                                    fillStyle: I.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                    hidden: !i.isDatasetVisible(e),
                                    lineCap: t.borderCapStyle,
                                    lineDash: t.borderDash,
                                    lineDashOffset: t.borderDashOffset,
                                    lineJoin: t.borderJoinStyle,
                                    lineWidth: t.borderWidth,
                                    strokeStyle: t.borderColor,
                                    pointStyle: t.pointStyle,
                                    datasetIndex: e
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            }), e.exports = function(n) {
                var a = n.layoutService,
                    t = I.noop;

                function _(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }

                function o(t, e) {
                    var i = new n.Legend({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    a.configure(t, i, e), a.addBox(t, i), t.legend = i
                }
                return n.Legend = r.extend({
                    initialize: function(t) {
                        I.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: t,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: t,
                    beforeSetDimensions: t,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: t,
                    beforeBuildLabels: t,
                    buildLabels: function() {
                        var e = this,
                            i = e.options.labels || {},
                            t = I.callback(i.generateLabels, [e.chart], e) || [];
                        i.filter && (t = t.filter(function(t) {
                            return i.filter(t, e.chart.data)
                        })), e.options.reverse && t.reverse(), e.legendItems = t
                    },
                    afterBuildLabels: t,
                    beforeFit: t,
                    fit: function() {
                        var n = this,
                            t = n.options,
                            a = t.labels,
                            e = t.display,
                            o = n.ctx,
                            i = D.global,
                            r = I.valueOrDefault,
                            s = r(a.fontSize, i.defaultFontSize),
                            l = r(a.fontStyle, i.defaultFontStyle),
                            u = r(a.fontFamily, i.defaultFontFamily),
                            d = I.fontString(s, l, u),
                            c = n.legendHitBoxes = [],
                            h = n.minSize,
                            f = n.isHorizontal();
                        if (f ? (h.width = n.maxWidth, h.height = e ? 10 : 0) : (h.width = e ? 10 : 0, h.height = n.maxHeight), e)
                            if (o.font = d, f) {
                                var g = n.lineWidths = [0],
                                    p = n.legendItems.length ? s + a.padding : 0;
                                o.textAlign = "left", o.textBaseline = "top", I.each(n.legendItems, function(t, e) {
                                    var i = _(a, s) + s / 2 + o.measureText(t.text).width;
                                    g[g.length - 1] + i + a.padding >= n.width && (p += s + a.padding, g[g.length] = n.left), c[e] = {
                                        left: 0,
                                        top: 0,
                                        width: i,
                                        height: s
                                    }, g[g.length - 1] += i + a.padding
                                }), h.height += p
                            } else {
                                var m = a.padding,
                                    v = n.columnWidths = [],
                                    b = a.padding,
                                    x = 0,
                                    y = 0,
                                    k = s + m;
                                I.each(n.legendItems, function(t, e) {
                                    var i = _(a, s) + s / 2 + o.measureText(t.text).width;
                                    y + k > h.height && (b += x + a.padding, v.push(x), y = x = 0), x = Math.max(x, i), y += k, c[e] = {
                                        left: 0,
                                        top: 0,
                                        width: i,
                                        height: s
                                    }
                                }), b += x, v.push(x), h.width += b
                            } n.width = h.width, n.height = h.height
                    },
                    afterFit: t,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var c = this,
                            h = c.options,
                            f = h.labels,
                            g = D.global,
                            p = g.elements.line,
                            m = c.width,
                            v = c.lineWidths;
                        if (h.display) {
                            var b, x = c.ctx,
                                y = I.valueOrDefault,
                                t = y(f.fontColor, g.defaultFontColor),
                                k = y(f.fontSize, g.defaultFontSize),
                                e = y(f.fontStyle, g.defaultFontStyle),
                                i = y(f.fontFamily, g.defaultFontFamily),
                                n = I.fontString(k, e, i);
                            x.textAlign = "left", x.textBaseline = "middle", x.lineWidth = .5, x.strokeStyle = t, x.fillStyle = t, x.font = n;
                            var w = _(f, k),
                                M = c.legendHitBoxes,
                                S = c.isHorizontal();
                            b = S ? {
                                x: c.left + (m - v[0]) / 2,
                                y: c.top + f.padding,
                                line: 0
                            } : {
                                x: c.left + f.padding,
                                y: c.top + f.padding,
                                line: 0
                            };
                            var C = k + f.padding;
                            I.each(c.legendItems, function(t, e) {
                                var i, n, a, o, r, s = x.measureText(t.text).width,
                                    l = w + k / 2 + s,
                                    u = b.x,
                                    d = b.y;
                                S ? m <= u + l && (d = b.y += C, b.line++, u = b.x = c.left + (m - v[b.line]) / 2) : d + C > c.bottom && (u = b.x = u + c.columnWidths[b.line] + f.padding, d = b.y = c.top + f.padding, b.line++),
                                    function(t, e, i) {
                                        if (!(isNaN(w) || w <= 0)) {
                                            x.save(), x.fillStyle = y(i.fillStyle, g.defaultColor), x.lineCap = y(i.lineCap, p.borderCapStyle), x.lineDashOffset = y(i.lineDashOffset, p.borderDashOffset), x.lineJoin = y(i.lineJoin, p.borderJoinStyle), x.lineWidth = y(i.lineWidth, p.borderWidth), x.strokeStyle = y(i.strokeStyle, g.defaultColor);
                                            var n = 0 === y(i.lineWidth, p.borderWidth);
                                            if (x.setLineDash && x.setLineDash(y(i.lineDash, p.borderDash)), h.labels && h.labels.usePointStyle) {
                                                var a = k * Math.SQRT2 / 2,
                                                    o = a / Math.SQRT2,
                                                    r = t + o,
                                                    s = e + o;
                                                I.canvas.drawPoint(x, i.pointStyle, a, r, s)
                                            } else n || x.strokeRect(t, e, w, k), x.fillRect(t, e, w, k);
                                            x.restore()
                                        }
                                    }(u, d, t), M[e].left = u, M[e].top = d, i = t, n = s, o = w + (a = k / 2) + u, r = d + a, x.fillText(i.text, o, r), i.hidden && (x.beginPath(), x.lineWidth = 2, x.moveTo(o, r), x.lineTo(o + n, r), x.stroke()), S ? b.x += l + f.padding : b.y += C
                            })
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e.options,
                            n = "mouseup" === t.type ? "click" : t.type,
                            a = !1;
                        if ("mousemove" === n) {
                            if (!i.onHover) return
                        } else {
                            if ("click" !== n) return;
                            if (!i.onClick) return
                        }
                        var o = t.x,
                            r = t.y;
                        if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                            for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                var u = s[l];
                                if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                    if ("click" === n) {
                                        i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                    if ("mousemove" === n) {
                                        i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                }
                            }
                        return a
                    }
                }), {
                    id: "legend",
                    beforeInit: function(t) {
                        var e = t.options.legend;
                        e && o(t, e)
                    },
                    beforeUpdate: function(t) {
                        var e = t.options.legend,
                            i = t.legend;
                        e ? (I.mergeIf(e, D.global.legend), i ? (a.configure(t, i, e), i.options = e) : o(t, e)) : i && (a.removeBox(t, i), delete t.legend)
                    },
                    afterEvent: function(t, e) {
                        var i = t.legend;
                        i && i.handleEvent(e)
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        51: [function(t, e, i) {
            "use strict";
            var w = t(25),
                r = t(26),
                M = t(45);
            w._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            }), e.exports = function(n) {
                var a = n.layoutService,
                    t = M.noop;

                function o(t, e) {
                    var i = new n.Title({
                        ctx: t.ctx,
                        options: e,
                        chart: t
                    });
                    a.configure(t, i, e), a.addBox(t, i), t.titleBlock = i
                }
                return n.Title = r.extend({
                    initialize: function(t) {
                        M.extend(this, t), this.legendHitBoxes = []
                    },
                    beforeUpdate: t,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: t,
                    beforeSetDimensions: t,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: t,
                    beforeBuildLabels: t,
                    buildLabels: t,
                    afterBuildLabels: t,
                    beforeFit: t,
                    fit: function() {
                        var t = this,
                            e = M.valueOrDefault,
                            i = t.options,
                            n = i.display,
                            a = e(i.fontSize, w.global.defaultFontSize),
                            o = t.minSize,
                            r = M.isArray(i.text) ? i.text.length : 1,
                            s = M.options.toLineHeight(i.lineHeight, a),
                            l = n ? r * s + 2 * i.padding : 0;
                        t.isHorizontal() ? (o.width = t.maxWidth, o.height = l) : (o.width = l, o.height = t.maxHeight), t.width = o.width, t.height = o.height
                    },
                    afterFit: t,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var t = this,
                            e = t.ctx,
                            i = M.valueOrDefault,
                            n = t.options,
                            a = w.global;
                        if (n.display) {
                            var o, r, s, l = i(n.fontSize, a.defaultFontSize),
                                u = i(n.fontStyle, a.defaultFontStyle),
                                d = i(n.fontFamily, a.defaultFontFamily),
                                c = M.fontString(l, u, d),
                                h = M.options.toLineHeight(n.lineHeight, l),
                                f = h / 2 + n.padding,
                                g = 0,
                                p = t.top,
                                m = t.left,
                                v = t.bottom,
                                b = t.right;
                            e.fillStyle = i(n.fontColor, a.defaultFontColor), e.font = c, t.isHorizontal() ? (r = m + (b - m) / 2, s = p + f, o = b - m) : (r = "left" === n.position ? m + f : b - f, s = p + (v - p) / 2, o = v - p, g = Math.PI * ("left" === n.position ? -.5 : .5)), e.save(), e.translate(r, s), e.rotate(g), e.textAlign = "center", e.textBaseline = "middle";
                            var x = n.text;
                            if (M.isArray(x))
                                for (var y = 0, k = 0; k < x.length; ++k) e.fillText(x[k], 0, y, o), y += h;
                            else e.fillText(x, 0, 0, o);
                            e.restore()
                        }
                    }
                }), {
                    id: "title",
                    beforeInit: function(t) {
                        var e = t.options.title;
                        e && o(t, e)
                    },
                    beforeUpdate: function(t) {
                        var e = t.options.title,
                            i = t.titleBlock;
                        e ? (M.mergeIf(e, w.global.title), i ? (a.configure(t, i, e), i.options = e) : o(t, e)) : i && (n.layoutService.removeBox(t, i), delete t.titleBlock)
                    }
                }
            }
        }, {
            25: 25,
            26: 26,
            45: 45
        }],
        52: [function(t, e, i) {
            "use strict";
            e.exports = function(t) {
                var e = t.Scale.extend({
                    getLabels: function() {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function() {
                        var t, e = this,
                            i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    },
                    buildTicks: function() {
                        var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        var i = this,
                            n = i.chart.data,
                            a = i.isHorizontal();
                        return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                    },
                    getPixelForValue: function(t, e) {
                        var i, n = this,
                            a = n.options.offset,
                            o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                        if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                            t = i || t;
                            var r = n.getLabels().indexOf(t);
                            e = -1 !== r ? r : e
                        }
                        if (n.isHorizontal()) {
                            var s = n.width / o,
                                l = s * (e - n.minIndex);
                            return a && (l += s / 2), n.left + Math.round(l)
                        }
                        var u = n.height / o,
                            d = u * (e - n.minIndex);
                        return a && (d += u / 2), n.top + Math.round(d)
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            i = e.options.offset,
                            n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            a = e.isHorizontal(),
                            o = (a ? e.width : e.height) / n;
                        return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", e, {
                    position: "bottom"
                })
            }
        }, {}],
        53: [function(t, e, i) {
            "use strict";
            var n = t(25),
                c = t(45),
                a = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: a.formatters.linear
                        }
                    },
                    i = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            var r = this,
                                s = r.options,
                                l = r.chart,
                                t = l.data.datasets,
                                e = r.isHorizontal();

                            function u(t) {
                                return e ? t.xAxisID === r.id : t.yAxisID === r.id
                            }
                            r.min = null, r.max = null;
                            var n = s.stacked;
                            if (void 0 === n && c.each(t, function(t, e) {
                                    if (!n) {
                                        var i = l.getDatasetMeta(e);
                                        l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (n = !0)
                                    }
                                }), s.stacked || n) {
                                var d = {};
                                c.each(t, function(t, e) {
                                    var n = l.getDatasetMeta(e),
                                        i = [n.type, void 0 === s.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                                    void 0 === d[i] && (d[i] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var a = d[i].positiveValues,
                                        o = d[i].negativeValues;
                                    l.isDatasetVisible(e) && u(n) && c.each(t.data, function(t, e) {
                                        var i = +r.getRightValue(t);
                                        isNaN(i) || n.data[e].hidden || (a[e] = a[e] || 0, o[e] = o[e] || 0, s.relativePoints ? a[e] = 100 : i < 0 ? o[e] += i : a[e] += i)
                                    })
                                }), c.each(d, function(t) {
                                    var e = t.positiveValues.concat(t.negativeValues),
                                        i = c.min(e),
                                        n = c.max(e);
                                    r.min = null === r.min ? i : Math.min(r.min, i), r.max = null === r.max ? n : Math.max(r.max, n)
                                })
                            } else c.each(t, function(t, e) {
                                var n = l.getDatasetMeta(e);
                                l.isDatasetVisible(e) && u(n) && c.each(t.data, function(t, e) {
                                    var i = +r.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || (null === r.min ? r.min = i : i < r.min && (r.min = i), null === r.max ? r.max = i : i > r.max && (r.max = i))
                                })
                            });
                            r.min = isFinite(r.min) && !isNaN(r.min) ? r.min : 0, r.max = isFinite(r.max) && !isNaN(r.max) ? r.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t, e = this.options.ticks;
                            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var i = c.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e, i = this,
                                n = i.start,
                                a = +i.getRightValue(t),
                                o = i.end - n;
                            return e = i.isHorizontal() ? i.left + i.width / o * (a - n) : i.bottom - i.height / o * (a - n), Math.round(e)
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal(),
                                n = i ? e.width : e.height,
                                a = (i ? t - e.left : e.bottom - t) / n;
                            return e.start + (e.end - e.start) * a
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", i, e)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        54: [function(t, e, i) {
            "use strict";
            var r = t(45),
                o = t(34);
            e.exports = function(e) {
                var t = r.noop;
                e.LinearScaleBase = e.Scale.extend({
                    getRightValue: function(t) {
                        return "string" == typeof t ? +t : e.Scale.prototype.getRightValue.call(this, t)
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var i = r.sign(t.min),
                                n = r.sign(t.max);
                            i < 0 && n < 0 ? t.max = 0 : 0 < i && 0 < n && (t.min = 0)
                        }
                        var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                            o = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), a !== o && t.min >= t.max && (a ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: t,
                    handleDirectionalChanges: t,
                    buildTicks: function() {
                        var t = this,
                            e = t.options.ticks,
                            i = t.getTickLimit(),
                            n = {
                                maxTicks: i = Math.max(2, i),
                                min: e.min,
                                max: e.max,
                                stepSize: r.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            a = t.ticks = o.generators.linear(n, t);
                        t.handleDirectionalChanges(), t.max = r.max(a), t.min = r.min(a), e.reverse ? (a.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        t.ticksAsNumbers = t.ticks.slice(), t.zeroLineIndex = t.ticks.indexOf(0), e.Scale.prototype.convertTicksToLabels.call(t)
                    }
                })
            }
        }, {
            34: 34,
            45: 45
        }],
        55: [function(t, e, i) {
            "use strict";
            var c = t(45),
                a = t(34);
            e.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: a.formatters.logarithmic
                        }
                    },
                    i = t.Scale.extend({
                        determineDataLimits: function() {
                            var r = this,
                                s = r.options,
                                t = s.ticks,
                                l = r.chart,
                                e = l.data.datasets,
                                i = c.valueOrDefault,
                                n = r.isHorizontal();

                            function u(t) {
                                return n ? t.xAxisID === r.id : t.yAxisID === r.id
                            }
                            r.min = null, r.max = null, r.minNotZero = null;
                            var a = s.stacked;
                            if (void 0 === a && c.each(e, function(t, e) {
                                    if (!a) {
                                        var i = l.getDatasetMeta(e);
                                        l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (a = !0)
                                    }
                                }), s.stacked || a) {
                                var d = {};
                                c.each(e, function(t, e) {
                                    var a = l.getDatasetMeta(e),
                                        o = [a.type, void 0 === s.stacked && void 0 === a.stack ? e : "", a.stack].join(".");
                                    l.isDatasetVisible(e) && u(a) && (void 0 === d[o] && (d[o] = []), c.each(t.data, function(t, e) {
                                        var i = d[o],
                                            n = +r.getRightValue(t);
                                        isNaN(n) || a.data[e].hidden || (i[e] = i[e] || 0, s.relativePoints ? i[e] = 100 : i[e] += n)
                                    }))
                                }), c.each(d, function(t) {
                                    var e = c.min(t),
                                        i = c.max(t);
                                    r.min = null === r.min ? e : Math.min(r.min, e), r.max = null === r.max ? i : Math.max(r.max, i)
                                })
                            } else c.each(e, function(t, e) {
                                var n = l.getDatasetMeta(e);
                                l.isDatasetVisible(e) && u(n) && c.each(t.data, function(t, e) {
                                    var i = +r.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || (null === r.min ? r.min = i : i < r.min && (r.min = i), null === r.max ? r.max = i : i > r.max && (r.max = i), 0 !== i && (null === r.minNotZero || i < r.minNotZero) && (r.minNotZero = i))
                                })
                            });
                            r.min = i(t.min, r.min), r.max = i(t.max, r.max), r.min === r.max && (0 !== r.min && null !== r.min ? (r.min = Math.pow(10, Math.floor(c.log10(r.min)) - 1), r.max = Math.pow(10, Math.floor(c.log10(r.max)) + 1)) : (r.min = 1, r.max = 10))
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                i = {
                                    min: e.min,
                                    max: e.max
                                },
                                n = t.ticks = a.generators.logarithmic(i, t);
                            t.isHorizontal() || n.reverse(), t.max = c.max(n), t.min = c.min(n), e.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        getPixelForValue: function(t) {
                            var e, i, n, a = this,
                                o = a.start,
                                r = +a.getRightValue(t),
                                s = a.options.ticks;
                            return a.isHorizontal() ? (n = c.log10(a.end) - c.log10(o), 0 === r ? i = a.left : (e = a.width, i = a.left + e / n * (c.log10(r) - c.log10(o)))) : (e = a.height, 0 !== o || s.reverse ? 0 === a.end && s.reverse ? (n = c.log10(a.start) - c.log10(a.minNotZero), i = r === a.end ? a.top : r === a.minNotZero ? a.top + .02 * e : a.top + .02 * e + .98 * e / n * (c.log10(r) - c.log10(a.minNotZero))) : 0 === r ? i = s.reverse ? a.top : a.bottom : (n = c.log10(a.end) - c.log10(o), e = a.height, i = a.bottom - e / n * (c.log10(r) - c.log10(o))) : (n = c.log10(a.end) - c.log10(a.minNotZero), i = r === o ? a.bottom : r === a.minNotZero ? a.bottom - .02 * e : a.bottom - .02 * e - .98 * e / n * (c.log10(r) - c.log10(a.minNotZero)))), i
                        },
                        getValueForPixel: function(t) {
                            var e, i, n = this,
                                a = c.log10(n.end) - c.log10(n.start);
                            return n.isHorizontal() ? (i = n.width, e = n.start * Math.pow(10, (t - n.left) * a / i)) : (i = n.height, e = Math.pow(10, (n.bottom - t) * a / i) / n.start), e
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", i, e)
            }
        }, {
            34: 34,
            45: 45
        }],
        56: [function(t, e, i) {
            "use strict";
            var n = t(25),
                w = t(45),
                a = t(34);
            e.exports = function(e) {
                var b = n.global,
                    t = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: a.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    };

                function x(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function y(t) {
                    var e = t.options.pointLabels,
                        i = w.valueOrDefault(e.fontSize, b.defaultFontSize),
                        n = w.valueOrDefault(e.fontStyle, b.defaultFontStyle),
                        a = w.valueOrDefault(e.fontFamily, b.defaultFontFamily);
                    return {
                        size: i,
                        style: n,
                        family: a,
                        font: w.fontString(i, n, a)
                    }
                }

                function m(t, e, i, n, a) {
                    return t === n || t === a ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || a < t ? {
                        start: e - i - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + i + 5
                    }
                }

                function k(t, e, i, n) {
                    if (w.isArray(e))
                        for (var a = i.y, o = 1.5 * n, r = 0; r < e.length; ++r) t.fillText(e[r], i.x, a), a += o;
                    else t.fillText(e, i.x, i.y)
                }

                function s(t) {
                    return w.isNumber(t) ? t : 0
                }
                var i = e.LinearScaleBase.extend({
                    setDimensions: function() {
                        var t = this,
                            e = t.options,
                            i = e.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var n = w.min([t.height, t.width]),
                            a = w.valueOrDefault(i.fontSize, b.defaultFontSize);
                        t.drawingArea = e.display ? n / 2 - (a / 2 + i.backdropPaddingY) : n / 2
                    },
                    determineDataLimits: function() {
                        var a = this,
                            i = a.chart,
                            o = Number.POSITIVE_INFINITY,
                            r = Number.NEGATIVE_INFINITY;
                        w.each(i.data.datasets, function(t, e) {
                            if (i.isDatasetVisible(e)) {
                                var n = i.getDatasetMeta(e);
                                w.each(t.data, function(t, e) {
                                    var i = +a.getRightValue(t);
                                    isNaN(i) || n.data[e].hidden || (o = Math.min(i, o), r = Math.max(i, r))
                                })
                            }
                        }), a.min = o === Number.POSITIVE_INFINITY ? 0 : o, a.max = r === Number.NEGATIVE_INFINITY ? 0 : r, a.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var t = this.options.ticks,
                            e = w.valueOrDefault(t.fontSize, b.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)))
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        e.LinearScaleBase.prototype.convertTicksToLabels.call(t), t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var t, e;
                        this.options.pointLabels.display ? function(t) {
                            var e, i, n, a = y(t),
                                o = Math.min(t.height / 2, t.width / 2),
                                r = {
                                    r: t.width,
                                    l: 0,
                                    t: t.height,
                                    b: 0
                                },
                                s = {};
                            t.ctx.font = a.font, t._pointLabelSizes = [];
                            var l, u, d, c = x(t);
                            for (e = 0; e < c; e++) {
                                n = t.getPointPosition(e, o), l = t.ctx, u = a.size, d = t.pointLabels[e] || "", i = w.isArray(d) ? {
                                    w: w.longestText(l, l.font, d),
                                    h: d.length * u + 1.5 * (d.length - 1) * u
                                } : {
                                    w: l.measureText(d).width,
                                    h: u
                                }, t._pointLabelSizes[e] = i;
                                var h = t.getIndexAngle(e),
                                    f = w.toDegrees(h) % 360,
                                    g = m(f, n.x, i.w, 0, 180),
                                    p = m(f, n.y, i.h, 90, 270);
                                g.start < r.l && (r.l = g.start, s.l = h), g.end > r.r && (r.r = g.end, s.r = h), p.start < r.t && (r.t = p.start, s.t = h), p.end > r.b && (r.b = p.end, s.b = h)
                            }
                            t.setReductions(o, r, s)
                        }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    },
                    setReductions: function(t, e, i) {
                        var n = e.l / Math.sin(i.l),
                            a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            o = -e.t / Math.cos(i.t),
                            r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = s(n), a = s(a), o = s(o), r = s(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r)
                    },
                    setCenterPoint: function(t, e, i, n) {
                        var a = this,
                            o = a.width - e - a.drawingArea,
                            r = t + a.drawingArea,
                            s = i + a.drawingArea,
                            l = a.height - n - a.drawingArea;
                        a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                    },
                    getIndexAngle: function(t) {
                        return t * (2 * Math.PI / x(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (null === t) return 0;
                        var i = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                    },
                    getPointPosition: function(t, e) {
                        var i = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(i) * e) + this.xCenter,
                            y: Math.round(Math.sin(i) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function() {
                        var t = this.min,
                            e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0)
                    },
                    draw: function() {
                        var o = this,
                            t = o.options,
                            r = t.gridLines,
                            s = t.ticks,
                            l = w.valueOrDefault;
                        if (t.display) {
                            var u = o.ctx,
                                d = this.getIndexAngle(0),
                                c = l(s.fontSize, b.defaultFontSize),
                                e = l(s.fontStyle, b.defaultFontStyle),
                                i = l(s.fontFamily, b.defaultFontFamily),
                                h = w.fontString(c, e, i);
                            w.each(o.ticks, function(t, e) {
                                if (0 < e || s.reverse) {
                                    var i = o.getDistanceFromCenterForValue(o.ticksAsNumbers[e]);
                                    if (r.display && 0 !== e && function(t, e, i, n) {
                                            var a = t.ctx;
                                            if (a.strokeStyle = w.valueAtIndexOrDefault(e.color, n - 1), a.lineWidth = w.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                            else {
                                                var o = x(t);
                                                if (0 === o) return;
                                                a.beginPath();
                                                var r = t.getPointPosition(0, i);
                                                a.moveTo(r.x, r.y);
                                                for (var s = 1; s < o; s++) r = t.getPointPosition(s, i), a.lineTo(r.x, r.y);
                                                a.closePath(), a.stroke()
                                            }
                                        }(o, r, i, e), s.display) {
                                        var n = l(s.fontColor, b.defaultFontColor);
                                        if (u.font = h, u.save(), u.translate(o.xCenter, o.yCenter), u.rotate(d), s.showLabelBackdrop) {
                                            var a = u.measureText(t).width;
                                            u.fillStyle = s.backdropColor, u.fillRect(-a / 2 - s.backdropPaddingX, -i - c / 2 - s.backdropPaddingY, a + 2 * s.backdropPaddingX, c + 2 * s.backdropPaddingY)
                                        }
                                        u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = n, u.fillText(t, 0, -i), u.restore()
                                    }
                                }
                            }), (t.angleLines.display || t.pointLabels.display) && function(t) {
                                var e = t.ctx,
                                    i = w.valueOrDefault,
                                    n = t.options,
                                    a = n.angleLines,
                                    o = n.pointLabels;
                                e.lineWidth = a.lineWidth, e.strokeStyle = a.color;
                                var r, s, l, u, d = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max),
                                    c = y(t);
                                e.textBaseline = "top";
                                for (var h = x(t) - 1; 0 <= h; h--) {
                                    if (a.display) {
                                        var f = t.getPointPosition(h, d);
                                        e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(f.x, f.y), e.stroke(), e.closePath()
                                    }
                                    if (o.display) {
                                        var g = t.getPointPosition(h, d + 5),
                                            p = i(o.fontColor, b.defaultFontColor);
                                        e.font = c.font, e.fillStyle = p;
                                        var m = t.getIndexAngle(h),
                                            v = w.toDegrees(m);
                                        e.textAlign = 0 === (u = v) || 180 === u ? "center" : u < 180 ? "left" : "right", r = v, s = t._pointLabelSizes[h], l = g, 90 === r || 270 === r ? l.y -= s.h / 2 : (270 < r || r < 90) && (l.y -= s.h), k(e, t.pointLabels[h] || "", g, c.size)
                                    }
                                }
                            }(o)
                        }
                    }
                });
                e.scaleService.registerScaleType("radialLinear", i, t)
            }
        }, {
            25: 25,
            34: 34,
            45: 45
        }],
        57: [function(t, e, i) {
            "use strict";
            var x = t(1);
            x = "function" == typeof x ? x : window.moment;
            var r = t(25),
                m = t(45),
                g = Number.MIN_SAFE_INTEGER || -9007199254740991,
                p = Number.MAX_SAFE_INTEGER || 9007199254740991,
                y = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                k = Object.keys(y);

            function v(t, e) {
                return t - e
            }

            function b(t) {
                var e, i, n, a = {},
                    o = [];
                for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
                return o
            }

            function w(t, e, i, n) {
                var a = function(t, e, i) {
                        for (var n, a, o, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                            if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
                                lo: null,
                                hi: o
                            };
                            if (o[e] < i) r = n + 1;
                            else {
                                if (!(a[e] > i)) return {
                                    lo: a,
                                    hi: o
                                };
                                s = n - 1
                            }
                        }
                        return {
                            lo: o,
                            hi: null
                        }
                    }(t, e, i),
                    o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                    r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                    s = r[e] - o[e],
                    l = s ? (i - o[e]) / s : 0,
                    u = (r[n] - o[n]) * l;
                return o[n] + u
            }

            function s(t, e) {
                var i = e.parser,
                    n = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof n ? x(t, n) : (t instanceof x || (t = x(t)), t.isValid() ? t : "function" == typeof n ? n(t) : t)
            }

            function M(t, e) {
                if (m.isNullOrUndef(t)) return null;
                var i = e.options.time,
                    n = s(e.getRightValue(t), i);
                return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
            }

            function S(t) {
                for (var e = k.indexOf(t) + 1, i = k.length; e < i; ++e)
                    if (y[k[e]].common) return k[e]
            }

            function C(t, e, i, n) {
                var a, o = n.time,
                    r = o.unit || function(t, e, i, n) {
                        var a, o, r, s = k.length;
                        for (a = k.indexOf(t); a < s - 1; ++a)
                            if (r = (o = y[k[a]]).steps ? o.steps[o.steps.length - 1] : p, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return k[a];
                        return k[s - 1]
                    }(o.minUnit, t, e, i),
                    s = S(r),
                    l = m.valueOrDefault(o.stepSize, o.unitStepSize),
                    u = "week" === r && o.isoWeekday,
                    d = n.ticks.major.enabled,
                    c = y[r],
                    h = x(t),
                    f = x(e),
                    g = [];
                for (l || (l = function(t, e, i, n) {
                        var a, o, r, s = e - t,
                            l = y[i],
                            u = l.size,
                            d = l.steps;
                        if (!d) return Math.ceil(s / ((n || 1) * u));
                        for (a = 0, o = d.length; a < o && (r = d[a], !(Math.ceil(s / (u * r)) <= n)); ++a);
                        return r
                    }(t, e, r, i)), u && (h = h.isoWeekday(u), f = f.isoWeekday(u)), h = h.startOf(u ? "day" : r), (f = f.startOf(u ? "day" : r)) < e && f.add(1, r), a = x(h), d && s && !u && !o.round && (a.startOf(s), a.add(~~((h - a) / (c.size * l)) * l, r)); a < f; a.add(l, r)) g.push(+a);
                return g.push(+a), g
            }
            e.exports = function(e) {
                var t = e.Scale.extend({
                    initialize: function() {
                        if (!x) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), e.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var t = this.options;
                        return t.time && t.time.format, e.Scale.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function(t) {
                        return t && void 0 !== t.t && (t = t.t), e.Scale.prototype.getRightValue.call(this, t)
                    },
                    determineDataLimits: function() {
                        var t, e, i, n, a, o, r = this,
                            s = r.chart,
                            l = r.options.time,
                            u = p,
                            d = g,
                            c = [],
                            h = [],
                            f = [];
                        for (t = 0, i = s.data.labels.length; t < i; ++t) f.push(M(s.data.labels[t], r));
                        for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                            if (s.isDatasetVisible(t))
                                if (a = s.data.datasets[t].data, m.isObject(a[0]))
                                    for (h[t] = [], e = 0, n = a.length; e < n; ++e) o = M(a[e], r), c.push(o), h[t][e] = o;
                                else c.push.apply(c, f), h[t] = f.slice(0);
                        else h[t] = [];
                        f.length && (f = b(f).sort(v), u = Math.min(u, f[0]), d = Math.max(d, f[f.length - 1])), c.length && (c = b(c).sort(v), u = Math.min(u, c[0]), d = Math.max(d, c[c.length - 1])), u = M(l.min, r) || u, d = M(l.max, r) || d, u = u === p ? +x().startOf("day") : u, d = d === g ? +x().endOf("day") + 1 : d, r.min = Math.min(u, d), r.max = Math.max(u + 1, d), r._horizontal = r.isHorizontal(), r._table = [], r._timestamps = {
                            data: c,
                            datasets: h,
                            labels: f
                        }
                    },
                    buildTicks: function() {
                        var t, e, i, n, a, o, r, s, l, u, d, c, h = this,
                            f = h.min,
                            g = h.max,
                            p = h.options,
                            m = p.time,
                            v = [],
                            b = [];
                        switch (p.ticks.source) {
                            case "data":
                                v = h._timestamps.data;
                                break;
                            case "labels":
                                v = h._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                v = C(f, g, h.getLabelCapacity(f), p)
                        }
                        for ("ticks" === p.bounds && v.length && (f = v[0], g = v[v.length - 1]), f = M(m.min, h) || f, g = M(m.max, h) || g, t = 0, e = v.length; t < e; ++t) f <= (i = v[t]) && i <= g && b.push(i);
                        return h.min = f, h.max = g, h._unit = m.unit || function(t, e, i, n) {
                                var a, o, r = x.duration(x(n).diff(x(i)));
                                for (a = k.length - 1; a >= k.indexOf(e); a--)
                                    if (o = k[a], y[o].common && r.as(o) >= t.length) return o;
                                return k[e ? k.indexOf(e) : 0]
                            }(b, m.minUnit, h.min, h.max), h._majorUnit = S(h._unit), h._table = function(t, e, i, n) {
                                if ("linear" === n || !t.length) return [{
                                    time: e,
                                    pos: 0
                                }, {
                                    time: i,
                                    pos: 1
                                }];
                                var a, o, r, s, l, u = [],
                                    d = [e];
                                for (a = 0, o = t.length; a < o; ++a) e < (s = t[a]) && s < i && d.push(s);
                                for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                                    time: s,
                                    pos: a / (o - 1)
                                });
                                return u
                            }(h._timestamps.data, f, g, p.distribution), h._offsets = (n = h._table, a = b, o = f, r = g, c = d = 0, (s = p).offset && a.length && (s.time.min || (l = 1 < a.length ? a[1] : r, u = a[0], d = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2), s.time.max || (l = a[a.length - 1], u = 1 < a.length ? a[a.length - 2] : o, c = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2)), {
                                left: d,
                                right: c
                            }),
                            function(t, e) {
                                var i, n, a, o, r = [];
                                for (i = 0, n = t.length; i < n; ++i) a = t[i], o = !!e && a === +x(a).startOf(e), r.push({
                                    value: a,
                                    major: o
                                });
                                return r
                            }(b, h._majorUnit)
                    },
                    getLabelForIndex: function(t, e) {
                        var i = this.chart.data,
                            n = this.options.time,
                            a = i.labels && t < i.labels.length ? i.labels[t] : "",
                            o = i.datasets[e].data[t];
                        return m.isObject(o) && (a = this.getRightValue(o)), n.tooltipFormat && (a = s(a, n).format(n.tooltipFormat)), a
                    },
                    tickFormatFunction: function(t, e, i, n) {
                        var a = this.options,
                            o = t.valueOf(),
                            r = a.time.displayFormats,
                            s = r[this._unit],
                            l = this._majorUnit,
                            u = r[l],
                            d = t.clone().startOf(l).valueOf(),
                            c = a.ticks.major,
                            h = c.enabled && l && u && o === d,
                            f = t.format(n || (h ? u : s)),
                            g = h ? c : a.ticks.minor,
                            p = m.valueOrDefault(g.callback, g.userCallback);
                        return p ? p(f, e, i) : f
                    },
                    convertTicksToLabels: function(t) {
                        var e, i, n = [];
                        for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(x(t[e].value), e, t));
                        return n
                    },
                    getPixelForOffset: function(t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = w(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
                    },
                    getPixelForValue: function(t, e, i) {
                        var n = null;
                        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = M(t, this)), null !== n) return this.getPixelForOffset(n)
                    },
                    getPixelForTick: function(t) {
                        var e = this.getTicks();
                        return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            o = w(e._table, "pos", a, "time");
                        return x(o)
                    },
                    getLabelWidth: function(t) {
                        var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            n = m.toRadians(e.maxRotation),
                            a = Math.cos(n),
                            o = Math.sin(n);
                        return i * a + m.valueOrDefault(e.fontSize, r.global.defaultFontSize) * o
                    },
                    getLabelCapacity: function(t) {
                        var e = this,
                            i = e.options.time.displayFormats.millisecond,
                            n = e.tickFormatFunction(x(t), 0, [], i),
                            a = e.getLabelWidth(n),
                            o = e.isHorizontal() ? e.width : e.height;
                        return Math.floor(o / a)
                    }
                });
                e.scaleService.registerScaleType("time", t, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        }, {
            1: 1,
            25: 25,
            45: 45
        }]
    }, {}, [7])(7)
});