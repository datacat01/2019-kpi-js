! function(e) {
    var n = {};

    function r(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = n, r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: t
        })
    }, r.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(n, "a", n), n
    }, r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, r.p = "", r(r.s = 2)
}([function(e, n, r) {
    "use strict";
    r.r(n);
    var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = function() {
            var e = function() {};
            try {
                return Object.defineProperty(e, "a", {
                    get: function() {
                        return 1
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), 1 === e.a && e.prototype instanceof Object
            } catch (e) {
                return !1
            }
        }(),
        i = !a && !Object.prototype.__defineGetter__,
        o = Object.prototype.hasOwnProperty,
        s = a ? Object.defineProperty : function(e, n, r) {
            "get" in r && e.__defineGetter__ ? e.__defineGetter__(n, r.get) : (!o.call(e, n) || "value" in r) && (e[n] = r.value)
        },
        l = Array.prototype.indexOf || function(e) {
            var n = this;
            if (!n.length) return -1;
            for (var r = arguments[1] || 0, t = n.length; r < t; r++)
                if (n[r] === e) return r;
            return -1
        },
        c = Object.create || function(e, n) {
            var r;

            function t() {}
            for (var a in t.prototype = e, r = new t, n) o.call(n, a) && s(r, a, n[a]);
            return r
        },
        u = Array.prototype.slice,
        g = Array.prototype.concat,
        m = Array.prototype.push,
        d = Array.prototype.join,
        f = Array.prototype.shift,
        h = Function.prototype.bind || function(e) {
            var n = this,
                r = u.call(arguments, 1);
            return n.length,
                function() {
                    return n.apply(e, g.call(r, u.call(arguments)))
                }
        },
        y = c(null),
        v = Math.random();

    function p(e) {
        for (var n in e)(e instanceof p || o.call(e, n)) && s(this, n, {
            value: e[n],
            enumerable: !0,
            writable: !0,
            configurable: !0
        })
    }

    function b() {
        s(this, "length", {
            writable: !0,
            value: 0
        }), arguments.length && m.apply(this, u.call(arguments))
    }

    function w() {
        if (y.disableRegExpRestore) return function() {};
        for (var e = {
                lastMatch: RegExp.lastMatch || "",
                leftContext: RegExp.leftContext,
                multiline: RegExp.multiline,
                input: RegExp.input
            }, n = !1, r = 1; r <= 9; r++) n = (e["$" + r] = RegExp["$" + r]) || n;
        return function() {
            var r = /[.?*+^$[\]\\(){}|-]/g,
                t = e.lastMatch.replace(r, "\\$&"),
                a = "";
            if (n)
                for (var i = 1; i <= 9; i++) {
                    var o = e["$" + i];
                    o ? (o = o.replace(r, "\\$&"), a += t.substring(0, t.indexOf(o)) + "(", t = o + ")" + t.substring(t.indexOf(o) + o.length)) : (a += "(", t = ")" + t)
                }
            a = (a += t).replace(/((^|[^\\])((\\\\)*\\[()])+|[^()])+/g, function(e) {
                return "[\\s\\S]{" + e.replace(/\\(.)/g, "$1").length + "}"
            });
            var s = new RegExp(a, e.multiline ? "gm" : "g");
            s.lastIndex = e.leftContext.length, s.exec(e.input)
        }
    }

    function M(e) {
        if (null === e) throw new TypeError("Cannot convert null or undefined to object");
        return "object" === (void 0 === e ? "undefined" : t(e)) ? e : Object(e)
    }

    function E(e) {
        return "number" == typeof e ? e : Number(e)
    }

    function F(e) {
        var n = function(e) {
            var n = E(e);
            return isNaN(n) ? 0 : 0 === n || -0 === n || n === 1 / 0 || n === -1 / 0 ? n : n < 0 ? -1 * Math.floor(Math.abs(n)) : Math.floor(Math.abs(n))
        }(e);
        return n <= 0 ? 0 : n === 1 / 0 ? Math.pow(2, 53) - 1 : Math.min(n, Math.pow(2, 53) - 1)
    }

    function x(e) {
        return o.call(e, "__getInternalProperties") ? e.__getInternalProperties(v) : c(null)
    }
    p.prototype = c(null), b.prototype = c(null);
    var D = "(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})",
        z = RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i"),
        S = RegExp("^(?!x).*?-(" + D + ")-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
        k = RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b", "i"),
        j = RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+", "ig"),
        N = void 0;
    var L = {
        tags: {
            "art-lojban": "jbo",
            "i-ami": "ami",
            "i-bnn": "bnn",
            "i-hak": "hak",
            "i-klingon": "tlh",
            "i-lux": "lb",
            "i-navajo": "nv",
            "i-pwn": "pwn",
            "i-tao": "tao",
            "i-tay": "tay",
            "i-tsu": "tsu",
            "no-bok": "nb",
            "no-nyn": "nn",
            "sgn-BE-FR": "sfb",
            "sgn-BE-NL": "vgt",
            "sgn-CH-DE": "sgg",
            "zh-guoyu": "cmn",
            "zh-hakka": "hak",
            "zh-min-nan": "nan",
            "zh-xiang": "hsn",
            "sgn-BR": "bzs",
            "sgn-CO": "csn",
            "sgn-DE": "gsg",
            "sgn-DK": "dsl",
            "sgn-ES": "ssp",
            "sgn-FR": "fsl",
            "sgn-GB": "bfi",
            "sgn-GR": "gss",
            "sgn-IE": "isg",
            "sgn-IT": "ise",
            "sgn-JP": "jsl",
            "sgn-MX": "mfs",
            "sgn-NI": "ncs",
            "sgn-NL": "dse",
            "sgn-NO": "nsl",
            "sgn-PT": "psr",
            "sgn-SE": "swl",
            "sgn-US": "ase",
            "sgn-ZA": "sfs",
            "zh-cmn": "cmn",
            "zh-cmn-Hans": "cmn-Hans",
            "zh-cmn-Hant": "cmn-Hant",
            "zh-gan": "gan",
            "zh-wuu": "wuu",
            "zh-yue": "yue"
        },
        subtags: {
            BU: "MM",
            DD: "DE",
            FX: "FR",
            TP: "TL",
            YD: "YE",
            ZR: "CD",
            heploc: "alalc97",
            in: "id",
            iw: "he",
            ji: "yi",
            jw: "jv",
            mo: "ro",
            ayx: "nun",
            bjd: "drl",
            ccq: "rki",
            cjr: "mom",
            cka: "cmr",
            cmk: "xch",
            drh: "khk",
            drw: "prs",
            gav: "dev",
            hrr: "jal",
            ibi: "opa",
            kgh: "kml",
            lcq: "ppr",
            mst: "mry",
            myt: "mry",
            sca: "hle",
            tie: "ras",
            tkk: "twm",
            tlw: "weo",
            tnf: "prs",
            ybd: "rki",
            yma: "lrr"
        },
        extLang: {
            aao: ["aao", "ar"],
            abh: ["abh", "ar"],
            abv: ["abv", "ar"],
            acm: ["acm", "ar"],
            acq: ["acq", "ar"],
            acw: ["acw", "ar"],
            acx: ["acx", "ar"],
            acy: ["acy", "ar"],
            adf: ["adf", "ar"],
            ads: ["ads", "sgn"],
            aeb: ["aeb", "ar"],
            aec: ["aec", "ar"],
            aed: ["aed", "sgn"],
            aen: ["aen", "sgn"],
            afb: ["afb", "ar"],
            afg: ["afg", "sgn"],
            ajp: ["ajp", "ar"],
            apc: ["apc", "ar"],
            apd: ["apd", "ar"],
            arb: ["arb", "ar"],
            arq: ["arq", "ar"],
            ars: ["ars", "ar"],
            ary: ["ary", "ar"],
            arz: ["arz", "ar"],
            ase: ["ase", "sgn"],
            asf: ["asf", "sgn"],
            asp: ["asp", "sgn"],
            asq: ["asq", "sgn"],
            asw: ["asw", "sgn"],
            auz: ["auz", "ar"],
            avl: ["avl", "ar"],
            ayh: ["ayh", "ar"],
            ayl: ["ayl", "ar"],
            ayn: ["ayn", "ar"],
            ayp: ["ayp", "ar"],
            bbz: ["bbz", "ar"],
            bfi: ["bfi", "sgn"],
            bfk: ["bfk", "sgn"],
            bjn: ["bjn", "ms"],
            bog: ["bog", "sgn"],
            bqn: ["bqn", "sgn"],
            bqy: ["bqy", "sgn"],
            btj: ["btj", "ms"],
            bve: ["bve", "ms"],
            bvl: ["bvl", "sgn"],
            bvu: ["bvu", "ms"],
            bzs: ["bzs", "sgn"],
            cdo: ["cdo", "zh"],
            cds: ["cds", "sgn"],
            cjy: ["cjy", "zh"],
            cmn: ["cmn", "zh"],
            coa: ["coa", "ms"],
            cpx: ["cpx", "zh"],
            csc: ["csc", "sgn"],
            csd: ["csd", "sgn"],
            cse: ["cse", "sgn"],
            csf: ["csf", "sgn"],
            csg: ["csg", "sgn"],
            csl: ["csl", "sgn"],
            csn: ["csn", "sgn"],
            csq: ["csq", "sgn"],
            csr: ["csr", "sgn"],
            czh: ["czh", "zh"],
            czo: ["czo", "zh"],
            doq: ["doq", "sgn"],
            dse: ["dse", "sgn"],
            dsl: ["dsl", "sgn"],
            dup: ["dup", "ms"],
            ecs: ["ecs", "sgn"],
            esl: ["esl", "sgn"],
            esn: ["esn", "sgn"],
            eso: ["eso", "sgn"],
            eth: ["eth", "sgn"],
            fcs: ["fcs", "sgn"],
            fse: ["fse", "sgn"],
            fsl: ["fsl", "sgn"],
            fss: ["fss", "sgn"],
            gan: ["gan", "zh"],
            gds: ["gds", "sgn"],
            gom: ["gom", "kok"],
            gse: ["gse", "sgn"],
            gsg: ["gsg", "sgn"],
            gsm: ["gsm", "sgn"],
            gss: ["gss", "sgn"],
            gus: ["gus", "sgn"],
            hab: ["hab", "sgn"],
            haf: ["haf", "sgn"],
            hak: ["hak", "zh"],
            hds: ["hds", "sgn"],
            hji: ["hji", "ms"],
            hks: ["hks", "sgn"],
            hos: ["hos", "sgn"],
            hps: ["hps", "sgn"],
            hsh: ["hsh", "sgn"],
            hsl: ["hsl", "sgn"],
            hsn: ["hsn", "zh"],
            icl: ["icl", "sgn"],
            ils: ["ils", "sgn"],
            inl: ["inl", "sgn"],
            ins: ["ins", "sgn"],
            ise: ["ise", "sgn"],
            isg: ["isg", "sgn"],
            isr: ["isr", "sgn"],
            jak: ["jak", "ms"],
            jax: ["jax", "ms"],
            jcs: ["jcs", "sgn"],
            jhs: ["jhs", "sgn"],
            jls: ["jls", "sgn"],
            jos: ["jos", "sgn"],
            jsl: ["jsl", "sgn"],
            jus: ["jus", "sgn"],
            kgi: ["kgi", "sgn"],
            knn: ["knn", "kok"],
            kvb: ["kvb", "ms"],
            kvk: ["kvk", "sgn"],
            kvr: ["kvr", "ms"],
            kxd: ["kxd", "ms"],
            lbs: ["lbs", "sgn"],
            lce: ["lce", "ms"],
            lcf: ["lcf", "ms"],
            liw: ["liw", "ms"],
            lls: ["lls", "sgn"],
            lsg: ["lsg", "sgn"],
            lsl: ["lsl", "sgn"],
            lso: ["lso", "sgn"],
            lsp: ["lsp", "sgn"],
            lst: ["lst", "sgn"],
            lsy: ["lsy", "sgn"],
            ltg: ["ltg", "lv"],
            lvs: ["lvs", "lv"],
            lzh: ["lzh", "zh"],
            max: ["max", "ms"],
            mdl: ["mdl", "sgn"],
            meo: ["meo", "ms"],
            mfa: ["mfa", "ms"],
            mfb: ["mfb", "ms"],
            mfs: ["mfs", "sgn"],
            min: ["min", "ms"],
            mnp: ["mnp", "zh"],
            mqg: ["mqg", "ms"],
            mre: ["mre", "sgn"],
            msd: ["msd", "sgn"],
            msi: ["msi", "ms"],
            msr: ["msr", "sgn"],
            mui: ["mui", "ms"],
            mzc: ["mzc", "sgn"],
            mzg: ["mzg", "sgn"],
            mzy: ["mzy", "sgn"],
            nan: ["nan", "zh"],
            nbs: ["nbs", "sgn"],
            ncs: ["ncs", "sgn"],
            nsi: ["nsi", "sgn"],
            nsl: ["nsl", "sgn"],
            nsp: ["nsp", "sgn"],
            nsr: ["nsr", "sgn"],
            nzs: ["nzs", "sgn"],
            okl: ["okl", "sgn"],
            orn: ["orn", "ms"],
            ors: ["ors", "ms"],
            pel: ["pel", "ms"],
            pga: ["pga", "ar"],
            pks: ["pks", "sgn"],
            prl: ["prl", "sgn"],
            prz: ["prz", "sgn"],
            psc: ["psc", "sgn"],
            psd: ["psd", "sgn"],
            pse: ["pse", "ms"],
            psg: ["psg", "sgn"],
            psl: ["psl", "sgn"],
            pso: ["pso", "sgn"],
            psp: ["psp", "sgn"],
            psr: ["psr", "sgn"],
            pys: ["pys", "sgn"],
            rms: ["rms", "sgn"],
            rsi: ["rsi", "sgn"],
            rsl: ["rsl", "sgn"],
            sdl: ["sdl", "sgn"],
            sfb: ["sfb", "sgn"],
            sfs: ["sfs", "sgn"],
            sgg: ["sgg", "sgn"],
            sgx: ["sgx", "sgn"],
            shu: ["shu", "ar"],
            slf: ["slf", "sgn"],
            sls: ["sls", "sgn"],
            sqk: ["sqk", "sgn"],
            sqs: ["sqs", "sgn"],
            ssh: ["ssh", "ar"],
            ssp: ["ssp", "sgn"],
            ssr: ["ssr", "sgn"],
            svk: ["svk", "sgn"],
            swc: ["swc", "sw"],
            swh: ["swh", "sw"],
            swl: ["swl", "sgn"],
            syy: ["syy", "sgn"],
            tmw: ["tmw", "ms"],
            tse: ["tse", "sgn"],
            tsm: ["tsm", "sgn"],
            tsq: ["tsq", "sgn"],
            tss: ["tss", "sgn"],
            tsy: ["tsy", "sgn"],
            tza: ["tza", "sgn"],
            ugn: ["ugn", "sgn"],
            ugy: ["ugy", "sgn"],
            ukl: ["ukl", "sgn"],
            uks: ["uks", "sgn"],
            urk: ["urk", "ms"],
            uzn: ["uzn", "uz"],
            uzs: ["uzs", "uz"],
            vgt: ["vgt", "sgn"],
            vkk: ["vkk", "ms"],
            vkt: ["vkt", "ms"],
            vsi: ["vsi", "sgn"],
            vsl: ["vsl", "sgn"],
            vsv: ["vsv", "sgn"],
            wuu: ["wuu", "zh"],
            xki: ["xki", "sgn"],
            xml: ["xml", "sgn"],
            xmm: ["xmm", "ms"],
            xms: ["xms", "sgn"],
            yds: ["yds", "sgn"],
            ysl: ["ysl", "sgn"],
            yue: ["yue", "zh"],
            zib: ["zib", "sgn"],
            zlm: ["zlm", "ms"],
            zmi: ["zmi", "ms"],
            zsl: ["zsl", "sgn"],
            zsm: ["zsm", "ms"]
        }
    };

    function P(e) {
        for (var n = e.length; n--;) {
            var r = e.charAt(n);
            r >= "a" && r <= "z" && (e = e.slice(0, n) + r.toUpperCase() + e.slice(n + 1))
        }
        return e
    }

    function O(e) {
        return !!z.test(e) && (!S.test(e) && !k.test(e))
    }

    function T(e) {
        for (var n = void 0, r = void 0, t = 1, a = (r = (e = e.toLowerCase()).split("-")).length; t < a; t++)
            if (2 === r[t].length) r[t] = r[t].toUpperCase();
            else if (4 === r[t].length) r[t] = r[t].charAt(0).toUpperCase() + r[t].slice(1);
        else if (1 === r[t].length && "x" !== r[t]) break;
        (n = (e = d.call(r, "-")).match(j)) && n.length > 1 && (n.sort(), e = e.replace(RegExp("(?:" + j.source + ")+", "i"), d.call(n, ""))), o.call(L.tags, e) && (e = L.tags[e]);
        for (var i = 1, s = (r = e.split("-")).length; i < s; i++) o.call(L.subtags, r[i]) ? r[i] = L.subtags[r[i]] : o.call(L.extLang, r[i]) && (r[i] = L.extLang[r[i]][0], 1 === i && L.extLang[r[1]][1] === r[0] && (r = u.call(r, i++), s -= 1));
        return d.call(r, "-")
    }
    var A = /^[A-Z]{3}$/;
    var R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        _ = /-u(?:-[0-9a-z]{2,8})+/gi;

    function I(e) {
        if (void 0 === e) return new b;
        for (var n = new b, r = M(e = "string" == typeof e ? [e] : e), t = F(r.length), a = 0; a < t;) {
            var i = String(a);
            if (i in r) {
                var o = r[i];
                if (null === o || "string" != typeof o && "object" !== (void 0 === o ? "undefined" : R(o))) throw new TypeError("String or Object type expected");
                var s = String(o);
                if (!O(s)) throw new RangeError("'" + s + "' is not a structurally valid language tag");
                s = T(s), -1 === l.call(n, s) && m.call(n, s)
            }
            a++
        }
        return n
    }

    function C(e, n) {
        for (var r = n; r;) {
            if (l.call(e, r) > -1) return r;
            var t = r.lastIndexOf("-");
            if (t < 0) return;
            t >= 2 && "-" === r.charAt(t - 2) && (t -= 2), r = r.substring(0, t)
        }
    }

    function q(e, n) {
        for (var r = 0, t = n.length, a = void 0, i = void 0, o = void 0; r < t && !a;) i = n[r], a = C(e, o = String(i).replace(_, "")), r++;
        var s = new p;
        if (void 0 !== a) {
            if (s["[[locale]]"] = a, String(i) !== String(o)) {
                var l = i.match(_)[0],
                    c = i.indexOf("-u-");
                s["[[extension]]"] = l, s["[[extensionIndex]]"] = c
            }
        } else s["[[locale]]"] = N;
        return s
    }

    function G(e, n, r, t, a) {
        if (0 === e.length) throw new ReferenceError("No locale data has been provided for this object yet.");
        var i = void 0,
            s = (i = "lookup" === r["[[localeMatcher]]"] ? q(e, n) : function(e, n) {
                return q(e, n)
            }(e, n))["[[locale]]"],
            c = void 0,
            u = void 0;
        o.call(i, "[[extension]]") && (u = (c = function(e) {
            var n = e.length;
            if (0 === n) return [];
            for (var r = [], t = !0, a = 3, i = a, o = a; a < n;) {
                if (45 === e.codePointAt(a)) {
                    if (a - i == 2) {
                        if (i - o > 1) {
                            var s = e.substring(o, i - 1);
                            r.push(s)
                        }
                        var l = e.substring(i, a);
                        r.push(l), o = a + 1, t = !1
                    } else if (!0 === t) {
                        var c = e.substring(i, a);
                        r.push(c), o = a + 1
                    }
                    i = a + 1
                }
                a += 1
            }
            if (n - i == 2) {
                if (i - o > 1) {
                    var u = e.substring(o, i - 1);
                    r.push(u)
                }
                o = i
            }
            var g = e.substring(o, n);
            return r.push(g), r
        }(i["[[extension]]"])).length);
        var g = new p;
        g["[[dataLocale]]"] = s;
        for (var m = "-u", d = 0, f = t.length; d < f;) {
            var h = t[d],
                y = a[s][h],
                v = y[0],
                b = "",
                w = l;
            if (void 0 !== c) {
                var M = w.call(c, h);
                if (-1 !== M)
                    if (M + 1 < u && c[M + 1].length > 2) {
                        var E = c[M + 1]; - 1 !== w.call(y, E) && (b = "-" + h + "-" + (v = E))
                    } else {
                        -1 !== w(y, "true") && (v = "true")
                    }
            }
            if (o.call(r, "[[" + h + "]]")) {
                var F = r["[[" + h + "]]"]; - 1 !== w.call(y, F) && F !== v && (v = F, b = "")
            }
            g["[[" + h + "]]"] = v, m += b, d++
        }
        if (m.length > 2) {
            var x = s.indexOf("-x-");
            if (-1 === x) s += m;
            else s = s.substring(0, x) + m + s.substring(x);
            s = T(s)
        }
        return g["[[locale]]"] = s, g
    }

    function B(e, n) {
        for (var r = n.length, t = new b, a = 0; a < r;) {
            var i = n[a];
            void 0 !== C(e, String(i).replace(_, "")) && m.call(t, i), a++
        }
        return u.call(t)
    }

    function H(e, n, r) {
        var t = void 0,
            a = void 0;
        if (void 0 !== r && void 0 !== (t = (r = new p(M(r))).localeMatcher) && "lookup" !== (t = String(t)) && "best fit" !== t) throw new RangeError('matcher should be "lookup" or "best fit"');
        for (var i in a = void 0 === t || "best fit" === t ? function(e, n) {
                return B(e, n)
            }(e, n) : B(e, n)) o.call(a, i) && s(a, i, {
            writable: !1,
            configurable: !1,
            value: a[i]
        });
        return s(a, "length", {
            writable: !1,
            configurable: !1,
            value: a.length
        }), a
    }

    function J(e, n, r, t, a) {
        var i = e[n];
        if (void 0 !== i) {
            if (i = "boolean" === r ? Boolean(i) : "string" === r ? String(i) : i, void 0 !== t && -1 === l.call(t, i)) throw new RangeError("'" + i + "' is not an allowed value for `" + n + "`");
            return i
        }
        return a
    }

    function Z(e, n, r, t, a) {
        var i = e[n];
        if (void 0 !== i) {
            if (i = Number(i), isNaN(i) || i < r || i > t) throw new RangeError("Value is not a number or outside accepted range");
            return Math.floor(i)
        }
        return a
    }
    var $ = {};
    Object.defineProperty($, "getCanonicalLocales", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            for (var n = I(e), r = [], t = n.length, a = 0; a < t;) r[a] = n[a], a++;
            return r
        }
    });
    var U, K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function Y(e, n, r) {
        return n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r, e
    }
    var W = (Y(U = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0,
        SYP: 0,
        MMK: 0,
        KPW: 0,
        YER: 0,
        UZS: 0,
        TZS: 0,
        STD: 0,
        SOS: 0,
        SLL: 0,
        RSD: 0,
        PKR: 0,
        MUR: 0,
        MRO: 0,
        MNT: 0,
        MGA: 0,
        LBP: 0,
        LAK: 0,
        IRR: 0
    }, "IQD", 0), Y(U, "IDR", 0), Y(U, "GYD", 0), Y(U, "COP", 0), Y(U, "AMD", 0), Y(U, "ALL", 0), Y(U, "AFN", 0), U);

    function X() {
        var e = null !== this && "object" === K(this) && x(this);
        if (!e || !e["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var n = h.call(function(e) {
                return ee(this, Number(e))
            }, this);
            e["[[boundFormat]]"] = n
        }
        return e["[[boundFormat]]"]
    }

    function V(e, n) {
        var r = x(e);
        return o.call(r, "[[minimumSignificantDigits]]") && o.call(r, "[[maximumSignificantDigits]]") ? function(e, n, r) {
            var t = r,
                a = void 0,
                i = void 0;
            if (0 === e) a = d.call(Array(t + 1), "0"), i = 0;
            else {
                i = function(e) {
                    if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                    var n = Math.round(Math.log(e) * Math.LOG10E);
                    return n - (Number("1e" + n) > e)
                }(Math.abs(e));
                var o = Math.round(Math.exp(Math.abs(i - t + 1) * Math.LN10));
                a = String(Math.round(i - t + 1 < 0 ? e * o : e / o))
            }
            if (i >= t) return a + d.call(Array(i - t + 1 + 1), "0");
            if (i === t - 1) return a;
            i >= 0 ? a = a.slice(0, i + 1) + "." + a.slice(i + 1) : i < 0 && (a = "0." + d.call(Array(1 - (i + 1)), "0") + a);
            if (a.indexOf(".") >= 0 && r > n) {
                for (var s = r - n; s > 0 && "0" === a.charAt(a.length - 1);) a = a.slice(0, -1), s--;
                "." === a.charAt(a.length - 1) && (a = a.slice(0, -1))
            }
            return a
        }(n, r["[[minimumSignificantDigits]]"], r["[[maximumSignificantDigits]]"]) : function(e, n, r, t) {
            var a = t,
                i = Math.pow(10, a) * e,
                o = 0 === i ? "0" : i.toFixed(0),
                s = void 0,
                l = (s = o.indexOf("e")) > -1 ? o.slice(s + 1) : 0;
            l && (o = o.slice(0, s).replace(".", ""), o += d.call(Array(l - (o.length - 1) + 1), "0"));
            var c = void 0;
            if (0 !== a) {
                var u = o.length;
                if (u <= a) {
                    var g = d.call(Array(a + 1 - u + 1), "0");
                    o = g + o, u = a + 1
                }
                var m = o.substring(0, u - a),
                    f = o.substring(u - a, o.length);
                o = m + "." + f, c = m.length
            } else c = o.length;
            var h = t - r;
            for (; h > 0 && "0" === o.slice(-1);) o = o.slice(0, -1), h--;
            "." === o.slice(-1) && (o = o.slice(0, -1));
            if (c < n) {
                var y = d.call(Array(n - c + 1), "0");
                o = y + o
            }
            return o
        }(n, r["[[minimumIntegerDigits]]"], r["[[minimumFractionDigits]]"], r["[[maximumFractionDigits]]"])
    }

    function Q(e, n) {
        var r = x(e),
            t = r["[[dataLocale]]"],
            a = r["[[numberingSystem]]"],
            i = y.NumberFormat["[[localeData]]"][t],
            o = i.symbols[a] || i.symbols.latn,
            s = void 0;
        !isNaN(n) && n < 0 ? (n = -n, s = r["[[negativePattern]]"]) : s = r["[[positivePattern]]"];
        for (var l = new b, c = s.indexOf("{", 0), u = 0, g = 0, d = s.length; c > -1 && c < d;) {
            if (-1 === (u = s.indexOf("}", c))) throw new Error;
            if (c > g) {
                var h = s.substring(g, c);
                m.call(l, {
                    "[[type]]": "literal",
                    "[[value]]": h
                })
            }
            var v = s.substring(c + 1, u);
            if ("number" === v)
                if (isNaN(n)) {
                    var p = o.nan;
                    m.call(l, {
                        "[[type]]": "nan",
                        "[[value]]": p
                    })
                } else if (isFinite(n)) {
                "percent" === r["[[style]]"] && (n *= 100);
                var w = V(e, n);
                ne[a] ? function() {
                    var e = ne[a];
                    w = String(w).replace(/\d/g, function(n) {
                        return e[n]
                    })
                }() : w = String(w);
                var M = void 0,
                    E = void 0,
                    F = w.indexOf(".", 0);
                if (F > 0 ? (M = w.substring(0, F), E = w.substring(F + 1, F.length)) : (M = w, E = void 0), !0 === r["[[useGrouping]]"]) {
                    var D = "currency" === r["[[style]]"] ? o.currencyGroup : o.group,
                        z = [],
                        S = i.patterns.primaryGroupSize || 3,
                        k = i.patterns.secondaryGroupSize || S;
                    if (M.length > S) {
                        var j = M.length - S,
                            N = j % k,
                            L = M.slice(0, N);
                        for (L.length && m.call(z, L); N < j;) m.call(z, M.slice(N, N + k)), N += k;
                        m.call(z, M.slice(j))
                    } else m.call(z, M);
                    if (0 === z.length) throw new Error;
                    for (; z.length;) {
                        var P = f.call(z);
                        m.call(l, {
                            "[[type]]": "integer",
                            "[[value]]": P
                        }), z.length && m.call(l, {
                            "[[type]]": "group",
                            "[[value]]": D
                        })
                    }
                } else m.call(l, {
                    "[[type]]": "integer",
                    "[[value]]": M
                });
                if (void 0 !== E) {
                    var O = "currency" === r["[[style]]"] ? o.currencyDecimal : o.decimal;
                    m.call(l, {
                        "[[type]]": "decimal",
                        "[[value]]": O
                    }), m.call(l, {
                        "[[type]]": "fraction",
                        "[[value]]": E
                    })
                }
            } else {
                var T = o.infinity;
                m.call(l, {
                    "[[type]]": "infinity",
                    "[[value]]": T
                })
            } else if ("plusSign" === v) {
                var A = o.plusSign;
                m.call(l, {
                    "[[type]]": "plusSign",
                    "[[value]]": A
                })
            } else if ("minusSign" === v) {
                var R = o.minusSign;
                m.call(l, {
                    "[[type]]": "minusSign",
                    "[[value]]": R
                })
            } else if ("percentSign" === v && "percent" === r["[[style]]"]) {
                var _ = o.percentSign;
                m.call(l, {
                    "[[type]]": "literal",
                    "[[value]]": _
                })
            } else if ("currency" === v && "currency" === r["[[style]]"]) {
                var I = r["[[currency]]"],
                    C = void 0;
                "code" === r["[[currencyDisplay]]"] ? C = I : "symbol" === r["[[currencyDisplay]]"] ? C = i.currencies[I] || I : "name" === r["[[currencyDisplay]]"] && (C = I), m.call(l, {
                    "[[type]]": "currency",
                    "[[value]]": C
                })
            } else {
                var q = s.substring(c, u);
                m.call(l, {
                    "[[type]]": "literal",
                    "[[value]]": q
                })
            }
            g = u + 1, c = s.indexOf("{", g)
        }
        if (g < d) {
            var G = s.substring(g, d);
            m.call(l, {
                "[[type]]": "literal",
                "[[value]]": G
            })
        }
        for (var B = 0; B < l.length - 1; B++)
            if ("integer" === l[B]["[[type]]"] && "currency" === l[B + 1]["[[type]]"] && /^[A-Z]/.test(l[B + 1]["[[value]]"]) || "currency" === l[B]["[[type]]"] && /[A-Z]$/.test(l[B]["[[value]]"]) && "integer" === l[B + 1]["[[type]]"]) {
                for (var H = new b, J = 0; J < l.length; J++) m.call(H, l[J]), J === B && m.call(H, {
                    "[[type]]": "literal",
                    "[[value]]": " "
                });
                l = H;
                break
            } return l
    }

    function ee(e, n) {
        for (var r = Q(e, n), t = "", a = 0; r.length > a; a++) {
            t += r[a]["[[value]]"]
        }
        return t
    }
    s($, "NumberFormat", {
        configurable: !0,
        writable: !0,
        value: function() {
            var e = arguments[0],
                n = arguments[1];
            return this && this !== $ ? function(e, n, r) {
                var t = x(e),
                    a = w();
                if (!0 === t["[[initializedIntlObject]]"]) throw new TypeError("`this` object has already been initialized as an Intl object");
                s(e, "__getInternalProperties", {
                    value: function() {
                        if (arguments[0] === v) return t
                    }
                }), t["[[initializedIntlObject]]"] = !0;
                var o = I(n);
                r = void 0 === r ? {} : M(r);
                var l = new p,
                    c = J(r, "localeMatcher", "string", new b("lookup", "best fit"), "best fit");
                l["[[localeMatcher]]"] = c;
                var u = y.NumberFormat["[[localeData]]"],
                    g = G(y.NumberFormat["[[availableLocales]]"], o, l, y.NumberFormat["[[relevantExtensionKeys]]"], u);
                t["[[locale]]"] = g["[[locale]]"], t["[[numberingSystem]]"] = g["[[nu]]"], t["[[dataLocale]]"] = g["[[dataLocale]]"];
                var m = g["[[dataLocale]]"],
                    d = J(r, "style", "string", new b("decimal", "percent", "currency"), "decimal");
                t["[[style]]"] = d;
                var f, h = J(r, "currency", "string");
                if (void 0 !== h && (f = P(String(h)), !1 === A.test(f))) throw new RangeError("'" + h + "' is not a valid currency code");
                if ("currency" === d && void 0 === h) throw new TypeError("Currency code is required when style is currency");
                var E = void 0;
                "currency" === d && (h = h.toUpperCase(), t["[[currency]]"] = h, E = function(e) {
                    return void 0 !== W[e] ? W[e] : 2
                }(h));
                var F = J(r, "currencyDisplay", "string", new b("code", "symbol", "name"), "symbol");
                "currency" === d && (t["[[currencyDisplay]]"] = F),
                    function(e, n, r) {
                        var t = Z(n, "minimumIntegerDigits", 1, 21, 1),
                            a = Z(n, "minimumFractionDigits", 0, 20, r),
                            i = Z(n, "maximumFractionDigits", a, 20),
                            o = n.minimumSignificantDigits,
                            s = n.maximumSignificantDigits;
                        e["[[minimumIntegerDigits]]"] = t, e["[[minimumFractionDigits]]"] = a, e["[[maximumFractionDigits]]"] = i, (void 0 !== o || void 0 !== s) && (o = Z(n, "minimumSignificantDigits", 1, 21, 1), s = Z(n, "maximumSignificantDigits", o, 21, 21), e["[[minimumSignificantDigits]]"] = o, e["[[maximumSignificantDigits]]"] = s)
                    }(t, r, "currency" === d ? E : 0), void 0 === t["[[maximumFractionDigits]]"] && (t["[[maximumFractionDigits]]"] = "currency" === d ? Math.max(t["[[minimumFractionDigits]]"], E) : "percent" === d ? Math.max(t["[[minimumFractionDigits]]"], 0) : Math.max(t["[[minimumFractionDigits]]"], 3));
                var D = J(r, "useGrouping", "boolean", void 0, !0);
                t["[[useGrouping]]"] = D;
                var z = u[m].patterns[d];
                return t["[[positivePattern]]"] = z.positivePattern, t["[[negativePattern]]"] = z.negativePattern, t["[[boundFormat]]"] = void 0, t["[[initializedNumberFormat]]"] = !0, i && (e.format = X.call(e)), a(), e
            }(M(this), e, n) : new $.NumberFormat(e, n)
        }
    }), s($.NumberFormat, "prototype", {
        writable: !1
    }), y.NumberFormat = {
        "[[availableLocales]]": [],
        "[[relevantExtensionKeys]]": ["nu"],
        "[[localeData]]": {}
    }, s($.NumberFormat, "supportedLocalesOf", {
        configurable: !0,
        writable: !0,
        value: h.call(function(e) {
            if (!o.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
            var n = w(),
                r = arguments[1],
                t = this["[[availableLocales]]"],
                a = I(e);
            return n(), H(t, a, r)
        }, y.NumberFormat)
    }), s($.NumberFormat.prototype, "format", {
        configurable: !0,
        get: X
    }), Object.defineProperty($.NumberFormat.prototype, "formatToParts", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                n = null !== this && "object" === K(this) && x(this);
            if (!n || !n["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.");
            return function(e, n) {
                for (var r = Q(e, n), t = [], a = 0, i = 0; r.length > i; i++) {
                    var o = r[i],
                        s = {};
                    s.type = o["[[type]]"], s.value = o["[[value]]"], t[a] = s, a += 1
                }
                return t
            }(this, Number(e))
        }
    });
    var ne = {
        arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
        arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
        bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
        beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
        deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
        fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
        gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
        guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
        hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
        khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
        knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
        laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
        latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
        mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
        mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
        mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
        orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
        tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
        telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
        thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
        tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
    };

    function re(e, n, r) {
        return n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = r, e
    }
    s($.NumberFormat.prototype, "resolvedOptions", {
        configurable: !0,
        writable: !0,
        value: function() {
            var e = void 0,
                n = new p,
                r = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                t = null !== this && "object" === K(this) && x(this);
            if (!t || !t["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
            for (var a = 0, i = r.length; a < i; a++) o.call(t, e = "[[" + r[a] + "]]") && (n[r[a]] = {
                value: t[e],
                writable: !0,
                configurable: !0,
                enumerable: !0
            });
            return c({}, n)
        }
    });
    var te = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ie = /[rqQASjJgwWIQq]/,
        oe = ["era", "year", "month", "day", "weekday", "quarter"],
        se = ["hour", "minute", "second", "hour12", "timeZoneName"];

    function le(e) {
        for (var n = 0; n < se.length; n += 1)
            if (e.hasOwnProperty(se[n])) return !1;
        return !0
    }

    function ce(e) {
        for (var n = 0; n < oe.length; n += 1)
            if (e.hasOwnProperty(oe[n])) return !1;
        return !0
    }

    function ue(e, n) {
        for (var r = {
                _: {}
            }, t = 0; t < oe.length; t += 1) e[oe[t]] && (r[oe[t]] = e[oe[t]]), e._[oe[t]] && (r._[oe[t]] = e._[oe[t]]);
        for (var a = 0; a < se.length; a += 1) n[se[a]] && (r[se[a]] = n[se[a]]), n._[se[a]] && (r._[se[a]] = n._[se[a]]);
        return r
    }

    function ge(e) {
        return e.pattern12 = e.extendedPattern.replace(/'([^']*)'/g, function(e, n) {
            return n || "'"
        }), e.pattern = e.pattern12.replace("{ampm}", "").replace(ae, ""), e
    }

    function me(e, n) {
        switch (e.charAt(0)) {
            case "G":
                return n.era = ["short", "short", "short", "long", "narrow"][e.length - 1], "{era}";
            case "y":
            case "Y":
            case "u":
            case "U":
            case "r":
                return n.year = 2 === e.length ? "2-digit" : "numeric", "{year}";
            case "Q":
            case "q":
                return n.quarter = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], "{quarter}";
            case "M":
            case "L":
                return n.month = ["numeric", "2-digit", "short", "long", "narrow"][e.length - 1], "{month}";
            case "w":
                return n.week = 2 === e.length ? "2-digit" : "numeric", "{weekday}";
            case "W":
                return n.week = "numeric", "{weekday}";
            case "d":
                return n.day = 2 === e.length ? "2-digit" : "numeric", "{day}";
            case "D":
            case "F":
            case "g":
                return n.day = "numeric", "{day}";
            case "E":
                return n.weekday = ["short", "short", "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "e":
                return n.weekday = ["numeric", "2-digit", "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "c":
                return n.weekday = ["numeric", void 0, "short", "long", "narrow", "short"][e.length - 1], "{weekday}";
            case "a":
            case "b":
            case "B":
                return n.hour12 = !0, "{ampm}";
            case "h":
            case "H":
                return n.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
            case "k":
            case "K":
                return n.hour12 = !0, n.hour = 2 === e.length ? "2-digit" : "numeric", "{hour}";
            case "m":
                return n.minute = 2 === e.length ? "2-digit" : "numeric", "{minute}";
            case "s":
                return n.second = 2 === e.length ? "2-digit" : "numeric", "{second}";
            case "S":
            case "A":
                return n.second = "numeric", "{second}";
            case "z":
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                return n.timeZoneName = e.length < 4 ? "short" : "long", "{timeZoneName}"
        }
    }

    function de(e, n) {
        if (!ie.test(n)) {
            var r = {
                originalPattern: n,
                standaloneDays: /c/.test(n),
                standaloneMonths: /L/.test(n),
                _: {}
            };
            return r.extendedPattern = n.replace(te, function(e) {
                return me(e, r._)
            }), e.replace(te, function(e) {
                return me(e, r)
            }), ge(r)
        }
    }
    var fe = {
        second: {
            numeric: "s",
            "2-digit": "ss"
        },
        minute: {
            numeric: "m",
            "2-digit": "mm"
        },
        year: {
            numeric: "y",
            "2-digit": "yy"
        },
        day: {
            numeric: "d",
            "2-digit": "dd"
        },
        month: {
            numeric: "L",
            "2-digit": "LL",
            narrow: "LLLLL",
            short: "LLL",
            long: "LLLL"
        },
        weekday: {
            narrow: "ccccc",
            short: "ccc",
            long: "cccc"
        }
    };

    function he(e, n) {
        var r;
        if (fe[e] && fe[e][n]) return re(r = {
            originalPattern: fe[e][n],
            _: re({}, e, n),
            extendedPattern: "{" + e + "}"
        }, e, n), re(r, "pattern12", "{" + e + "}"), re(r, "pattern", "{" + e + "}"), re(r, "standaloneDays", /c/.test(fe[e][n])), re(r, "standaloneMonths", /L/.test(fe[e][n])), r
    }
    var ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        ve = c(null, {
            narrow: {},
            short: {},
            long: {}
        });

    function pe(e, n, r, t, a) {
        var i = e[n] && e[n][r] ? e[n][r] : e.gregory[r],
            s = {
                narrow: ["short", "long"],
                short: ["long", "narrow"],
                long: ["short", "narrow"]
            },
            l = o.call(i, t) ? i[t] : o.call(i, s[t][0]) ? i[s[t][0]] : i[s[t][1]];
        return null !== a ? l[a] : l
    }

    function be() {
        var e = arguments[0],
            n = arguments[1];
        return this && this !== $ ? function(e, n, r) {
            var t = x(e),
                a = w();
            if (!0 === t["[[initializedIntlObject]]"]) throw new TypeError("`this` object has already been initialized as an Intl object");
            s(e, "__getInternalProperties", {
                value: function() {
                    if (arguments[0] === v) return t
                }
            }), t["[[initializedIntlObject]]"] = !0;
            var u = I(n);
            r = function(e, n, r) {
                if (void 0 === e) e = null;
                else {
                    var t = M(e);
                    for (var a in e = new p, t) e[a] = t[a]
                }
                e = c(e);
                var i = !0;
                "date" !== n && "any" !== n || void 0 === e.weekday && void 0 === e.year && void 0 === e.month && void 0 === e.day || (i = !1);
                "time" !== n && "any" !== n || void 0 === e.hour && void 0 === e.minute && void 0 === e.second || (i = !1);
                !i || "date" !== r && "all" !== r || (e.year = e.month = e.day = "numeric");
                !i || "time" !== r && "all" !== r || (e.hour = e.minute = e.second = "numeric");
                return e
            }(r, "any", "date");
            var g = new p,
                m = J(r, "localeMatcher", "string", new b("lookup", "best fit"), "best fit");
            g["[[localeMatcher]]"] = m;
            var d = y.DateTimeFormat,
                f = d["[[localeData]]"],
                h = G(d["[[availableLocales]]"], u, g, d["[[relevantExtensionKeys]]"], f);
            t["[[locale]]"] = h["[[locale]]"], t["[[calendar]]"] = h["[[ca]]"], t["[[numberingSystem]]"] = h["[[nu]]"], t["[[dataLocale]]"] = h["[[dataLocale]]"];
            var E = h["[[dataLocale]]"],
                F = r.timeZone;
            if (void 0 !== F && "UTC" !== (F = P(F))) throw new RangeError("timeZone is not supported.");
            for (var D in t["[[timeZone]]"] = F, g = new p, we)
                if (o.call(we, D)) {
                    var z = J(r, D, "string", we[D]);
                    g["[[" + D + "]]"] = z
                } var S = void 0,
                k = f[E],
                j = function(e) {
                    if ("[object Array]" === Object.prototype.toString.call(e)) return e;
                    return function(e) {
                        var n = e.availableFormats,
                            r = e.timeFormats,
                            t = e.dateFormats,
                            a = [],
                            i = void 0,
                            o = void 0,
                            s = void 0,
                            l = void 0,
                            c = void 0,
                            u = [],
                            g = [];
                        for (i in n) n.hasOwnProperty(i) && (s = de(i, o = n[i])) && (a.push(s), le(s) ? g.push(s) : ce(s) && u.push(s));
                        for (i in r) r.hasOwnProperty(i) && (s = de(i, o = r[i])) && (a.push(s), u.push(s));
                        for (i in t) t.hasOwnProperty(i) && (s = de(i, o = t[i])) && (a.push(s), g.push(s));
                        for (l = 0; l < u.length; l += 1)
                            for (c = 0; c < g.length; c += 1) o = "long" === g[c].month ? g[c].weekday ? e.full : e.long : "short" === g[c].month ? e.medium : e.short, (s = ue(g[c], u[l])).originalPattern = o, s.extendedPattern = o.replace("{0}", u[l].extendedPattern).replace("{1}", g[c].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, ""), a.push(ge(s));
                        return a
                    }(e)
                }(k.formats);
            if (m = J(r, "formatMatcher", "string", new b("basic", "best fit"), "best fit"), k.formats = j, "basic" === m) S = function(e, n) {
                var r = -1 / 0,
                    t = void 0,
                    a = 0,
                    i = n.length;
                for (; a < i;) {
                    var s = n[a],
                        c = 0;
                    for (var u in we)
                        if (o.call(we, u)) {
                            var g = e["[[" + u + "]]"],
                                m = o.call(s, u) ? s[u] : void 0;
                            if (void 0 === g && void 0 !== m) c -= 20;
                            else if (void 0 !== g && void 0 === m) c -= 120;
                            else {
                                var d = ["2-digit", "numeric", "narrow", "short", "long"],
                                    f = l.call(d, g),
                                    h = l.call(d, m),
                                    y = Math.max(Math.min(h - f, 2), -2);
                                2 === y ? c -= 6 : 1 === y ? c -= 3 : -1 === y ? c -= 6 : -2 === y && (c -= 8)
                            }
                        } c > r && (r = c, t = s), a++
                }
                return t
            }(g, j);
            else {
                var N = J(r, "hour12", "boolean");
                g.hour12 = void 0 === N ? k.hour12 : N, S = function(e, n) {
                    var r = [];
                    for (var t in we) o.call(we, t) && void 0 !== e["[[" + t + "]]"] && r.push(t);
                    if (1 === r.length) {
                        var a = he(r[0], e["[[" + r[0] + "]]"]);
                        if (a) return a
                    }
                    var i = -1 / 0,
                        s = void 0,
                        c = 0,
                        u = n.length;
                    for (; c < u;) {
                        var g = n[c],
                            m = 0;
                        for (var d in we)
                            if (o.call(we, d)) {
                                var f = e["[[" + d + "]]"],
                                    h = o.call(g, d) ? g[d] : void 0;
                                if (f !== h && (m -= 2), void 0 === f && void 0 !== h) m -= 20;
                                else if (void 0 !== f && void 0 === h) m -= 120;
                                else {
                                    var y = ["2-digit", "numeric", "narrow", "short", "long"],
                                        v = l.call(y, f),
                                        p = l.call(y, h),
                                        b = Math.max(Math.min(p - v, 2), -2);
                                    p <= 1 && v >= 2 || p >= 2 && v <= 1 ? b > 0 ? m -= 6 : b < 0 && (m -= 8) : b > 1 ? m -= 3 : b < -1 && (m -= 6)
                                }
                            } g._.hour12 !== e.hour12 && (m -= 1), m > i && (i = m, s = g), c++
                    }
                    return s
                }(g, j)
            }
            for (var L in we)
                if (o.call(we, L) && (o.call(S, L) || o.call(S._, L))) {
                    var O = S[L];
                    O = S._ && o.call(S._, L) ? S._[L] : O, t["[[" + L + "]]"] = O
                } var T = void 0,
                A = J(r, "hour12", "boolean");
            if (t["[[hour]]"])
                if (A = void 0 === A ? k.hour12 : A, t["[[hour12]]"] = A, !0 === A) {
                    var R = k.hourNo0;
                    t["[[hourNo0]]"] = R, T = S.pattern12
                } else T = S.pattern;
            else T = S.pattern;
            t["[[pattern]]"] = T, t["[[boundFormat]]"] = void 0, t["[[initializedDateTimeFormat]]"] = !0, t["[[standaloneDays]]"] = !!S.standaloneDays, t["[[standaloneMonths]]"] = !!S.standaloneMonths, i && (e.format = Me.call(e));
            return a(), e
        }(M(this), e, n) : new $.DateTimeFormat(e, n)
    }
    s($, "DateTimeFormat", {
        configurable: !0,
        writable: !0,
        value: be
    }), s(be, "prototype", {
        writable: !1
    });
    var we = {
        weekday: ["narrow", "short", "long"],
        era: ["narrow", "short", "long"],
        year: ["2-digit", "numeric"],
        month: ["2-digit", "numeric", "narrow", "short", "long"],
        day: ["2-digit", "numeric"],
        hour: ["2-digit", "numeric"],
        minute: ["2-digit", "numeric"],
        second: ["2-digit", "numeric"],
        timeZoneName: ["short", "long"]
    };

    function Me() {
        var e = null !== this && "object" === ye(this) && x(this);
        if (!e || !e["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
        if (void 0 === e["[[boundFormat]]"]) {
            var n = h.call(function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                return function(e, n) {
                    for (var r = Ee(e, n), t = "", a = 0; r.length > a; a++) {
                        var i = r[a];
                        t += i.value
                    }
                    return t
                }(this, void 0 === e ? Date.now() : E(e))
            }, this);
            e["[[boundFormat]]"] = n
        }
        return e["[[boundFormat]]"]
    }

    function Ee(e, n) {
        if (!isFinite(n)) throw new RangeError("Invalid valid date passed to format");
        var r = e.__getInternalProperties(v);
        w();
        for (var t, a, i, o, s = r["[[locale]]"], l = new $.NumberFormat([s], {
                useGrouping: !1
            }), c = new $.NumberFormat([s], {
                minimumIntegerDigits: 2,
                useGrouping: !1
            }), u = (t = n, r["[[calendar]]"], a = r["[[timeZone]]"], new p({
                "[[weekday]]": (i = new Date(t))[(o = "get" + (a || "")) + "Day"](),
                "[[era]]": +(i[o + "FullYear"]() >= 0),
                "[[year]]": i[o + "FullYear"](),
                "[[month]]": i[o + "Month"](),
                "[[day]]": i[o + "Date"](),
                "[[hour]]": i[o + "Hours"](),
                "[[minute]]": i[o + "Minutes"](),
                "[[second]]": i[o + "Seconds"](),
                "[[inDST]]": !1
            })), g = r["[[pattern]]"], d = new b, f = 0, h = g.indexOf("{"), M = 0, E = r["[[dataLocale]]"], F = y.DateTimeFormat["[[localeData]]"][E].calendars, x = r["[[calendar]]"]; - 1 !== h;) {
            var D = void 0;
            if (-1 === (M = g.indexOf("}", h))) throw new Error("Unclosed pattern");
            h > f && m.call(d, {
                type: "literal",
                value: g.substring(f, h)
            });
            var z = g.substring(h + 1, M);
            if (we.hasOwnProperty(z)) {
                var S = r["[[" + z + "]]"],
                    k = u["[[" + z + "]]"];
                if ("year" === z && k <= 0 ? k = 1 - k : "month" === z ? k++ : "hour" === z && !0 === r["[[hour12]]"] && 0 === (k %= 12) && !0 === r["[[hourNo0]]"] && (k = 12), "numeric" === S) D = ee(l, k);
                else if ("2-digit" === S)(D = ee(c, k)).length > 2 && (D = D.slice(-2));
                else if (S in ve) switch (z) {
                    case "month":
                        D = pe(F, x, r["[[standaloneMonths]]"] ? "months-standalone" : "months", S, u["[[" + z + "]]"]);
                        break;
                    case "weekday":
                        try {
                            D = pe(F, x, r["[[standaloneDays]]"] ? "days-standalone" : "days", S, u["[[" + z + "]]"])
                        } catch (e) {
                            throw new Error("Could not find weekday data for locale " + s)
                        }
                        break;
                    case "timeZoneName":
                        D = "";
                        break;
                    case "era":
                        try {
                            D = pe(F, x, "eras", S, u["[[" + z + "]]"])
                        } catch (e) {
                            throw new Error("Could not find era data for locale " + s)
                        }
                        break;
                    default:
                        D = u["[[" + z + "]]"]
                }
                m.call(d, {
                    type: z,
                    value: D
                })
            } else if ("ampm" === z) {
                D = pe(F, x, "dayPeriods", u["[[hour]]"] > 11 ? "pm" : "am", null), m.call(d, {
                    type: "dayPeriod",
                    value: D
                })
            } else m.call(d, {
                type: "literal",
                value: g.substring(h, M + 1)
            });
            f = M + 1, h = g.indexOf("{", f)
        }
        return M < g.length - 1 && m.call(d, {
            type: "literal",
            value: g.substr(M + 1)
        }), d
    }
    y.DateTimeFormat = {
            "[[availableLocales]]": [],
            "[[relevantExtensionKeys]]": ["ca", "nu"],
            "[[localeData]]": {}
        }, s($.DateTimeFormat, "supportedLocalesOf", {
            configurable: !0,
            writable: !0,
            value: h.call(function(e) {
                if (!o.call(this, "[[availableLocales]]")) throw new TypeError("supportedLocalesOf() is not a constructor");
                var n = w(),
                    r = arguments[1],
                    t = this["[[availableLocales]]"],
                    a = I(e);
                return n(), H(t, a, r)
            }, y.NumberFormat)
        }), s($.DateTimeFormat.prototype, "format", {
            configurable: !0,
            get: Me
        }), Object.defineProperty($.DateTimeFormat.prototype, "formatToParts", {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                    n = null !== this && "object" === ye(this) && x(this);
                if (!n || !n["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.");
                return function(e, n) {
                    for (var r = Ee(e, n), t = [], a = 0; r.length > a; a++) {
                        var i = r[a];
                        t.push({
                            type: i.type,
                            value: i.value
                        })
                    }
                    return t
                }(this, void 0 === e ? Date.now() : E(e))
            }
        }), s($.DateTimeFormat.prototype, "resolvedOptions", {
            writable: !0,
            configurable: !0,
            value: function() {
                var e = void 0,
                    n = new p,
                    r = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                    t = null !== this && "object" === ye(this) && x(this);
                if (!t || !t["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
                for (var a = 0, i = r.length; a < i; a++) o.call(t, e = "[[" + r[a] + "]]") && (n[r[a]] = {
                    value: t[e],
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
                return c({}, n)
            }
        }),
        /**
         * @license Copyright 2013 Andy Earnshaw, MIT License
         *
         * Implements the ECMAScript Internationalization API in ES5-compatible environments,
         * following the ECMA-402 specification as closely as possible
         *
         * ECMA-402: http://ecma-international.org/ecma-402/1.0/
         *
         * CLDR format locale data should be provided using IntlPolyfill.__addLocaleData().
         */
        s($, "__addLocaleData", {
            value: function(e) {
                if (!O(e.locale)) throw new Error('Invalid language tag "' + e.locale + '" when calling __addLocaleData("' + e.locale + '", ...) to register new locale data.');
                ! function(e, n) {
                    if (!e.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                    var r = void 0,
                        t = [n],
                        a = n.split("-");
                    a.length > 2 && 4 === a[1].length && m.call(t, a[0] + "-" + a[2]);
                    for (; r = f.call(t);) m.call(y.NumberFormat["[[availableLocales]]"], r), y.NumberFormat["[[localeData]]"][r] = e.number, e.date && (e.date.nu = e.number.nu, m.call(y.DateTimeFormat["[[availableLocales]]"], r), y.DateTimeFormat["[[localeData]]"][r] = e.date);
                    void 0 === N && function(e) {
                        N = e
                    }(n)
                }(e, e.locale)
            }
        }), s($, "__disableRegExpRestore", {
            value: function() {
                y.disableRegExpRestore = !0
            }
        });
    n.default = $
}, function(e) {
    e.exports = {
        locale: "en-GB",
        date: {
            ca: ["gregory"],
            hourNo0: !0,
            hour12: !1,
            formats: {
                short: "{1}, {0}",
                medium: "{1}, {0}",
                full: "{1} 'at' {0}",
                long: "{1}, {0}",
                availableFormats: {
                    EEEE: "cccc",
                    MMMMd: "d MMMM",
                    E: "ccc",
                    LLLLy: "MMMM y",
                    EEEEMMddyy: "EEEE, dd/MM/yy",
                    LLLy: "MMM y",
                    EMMddyyyy: "EEE, dd/MM/yyyy",
                    yMMMMd: "d MMMM y",
                    yMd: "dd/MM/y",
                    MMddyy: "dd/MM/yy",
                    MMMd: "d MMM",
                    EEEEMMMMdy: "EEEE, d MMMM y",
                    Md: "dd/MM",
                    MMddyyyy: "dd/MM/yyyy",
                    EMMddyy: "EEE, dd/MM/yy",
                    EEEEMMMd: "EEEE d MMM",
                    yMMMd: "d MMM y",
                    EMd: "EEE dd/MM",
                    hm: "HH:mm",
                    yMMMdhm: "d MMM y, HH:mm",
                    EMdhm: "EEE dd/MM, HH:mm",
                    yMMMMdhm: "d MMMM y, HH:mm",
                    yMdhm: "dd/MM/y, HH:mm",
                    hms: "h:mm:ss a"
                },
                dateFormats: {},
                timeFormats: {}
            },
            calendars: {
                gregory: {
                    months: {
                        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    "months-standalone": {
                        short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    days: {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    "days-standalone": {
                        narrow: ["S", "M", "T", "W", "T", "F", "S"],
                        short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    },
                    eras: {
                        narrow: ["B", "A", "BCE", "CE"],
                        short: ["BC", "AD", "BCE", "CE"],
                        long: ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
                    },
                    dayPeriods: {
                        am: "am",
                        pm: "pm"
                    }
                }
            }
        },
        number: {
            nu: ["latn"],
            patterns: {
                decimal: {
                    positivePattern: "{number}",
                    negativePattern: "{minusSign}{number}"
                },
                currency: {
                    positivePattern: "{currency}{number}",
                    negativePattern: "{minusSign}{currency}{number}"
                },
                percent: {
                    positivePattern: "{number}{percentSign}",
                    negativePattern: "{minusSign}{number}{percentSign}"
                }
            },
            symbols: {
                latn: {
                    decimal: ".",
                    group: ",",
                    nan: "NaN",
                    plusSign: "+",
                    minusSign: "-",
                    percentSign: "%",
                    infinity: "∞",
                    currencyDecimal: ".",
                    currencyGroup: ","
                }
            },
            currencies: {
                AUD: "A$",
                BRL: "R$ ",
                CAD: "CA$",
                CNY: "CN¥",
                EUR: "€",
                GBP: "£",
                HKD: "HK$",
                ILS: "₪",
                INR: "₹",
                JPY: "JP¥",
                KRW: "₩",
                MXN: "MX$",
                NZD: "NZ$",
                PEN: "PEN ",
                TWD: "NT$",
                USD: "US$",
                VND: "₫",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF"
            }
        }
    }
}, function(e, n, r) {
    var t = "undefined" != typeof global ? global : window;
    t.IntlPolyfill || (t.Intl = t.IntlPolyfill = r(0).default), [].concat(r(1)).forEach(function(e) {
        t.IntlPolyfill.__addLocaleData(e)
    })
}]);