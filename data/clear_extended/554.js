 /*!
  * Name: ibm.com v18 production file
  * Release: 137.0.0
  * Built: 2019-04-09 3:40:32 AM
  * Owner: Michael Santelia, Vlad Saling
  * Copyright (c) 2019 IBM Corporation
  * Description: Official file for production use
  */
 ! function(e, t) {
     "object" == typeof exports && exports && "string" != typeof exports.nodeName ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e.Mustache = {}, t(e.Mustache))
 }(this, function(b) {
     var t = Object.prototype.toString,
         m = Array.isArray || function(e) {
             return "[object Array]" === t.call(e)
         };

     function c(e) {
         return "function" == typeof e
     }

     function E(e) {
         return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
     }

     function a(e, t) {
         return null != e && "object" == typeof e && t in e
     }
     var r = RegExp.prototype.test;
     var i = /\S/;

     function U(e) {
         return t = i, n = e, !r.call(t, n);
         var t, n
     }
     var n = {
         "&": "&amp;",
         "<": "&lt;",
         ">": "&gt;",
         '"': "&quot;",
         "'": "&#39;",
         "/": "&#x2F;",
         "`": "&#x60;",
         "=": "&#x3D;"
     };
     var T = /\s*/,
         j = /\s+/,
         S = /\s*=/,
         V = /\s*\}/,
         C = /#|\^|\/|>|\{|&|=|!/;

     function A(e) {
         this.string = e, this.tail = e, this.pos = 0
     }

     function o(e, t) {
         this.view = e, this.cache = {
             ".": this.view
         }, this.parent = t
     }

     function e() {
         this.cache = {}
     }
     A.prototype.eos = function() {
         return "" === this.tail
     }, A.prototype.scan = function(e) {
         var t = this.tail.match(e);
         if (!t || 0 !== t.index) return "";
         var n = t[0];
         return this.tail = this.tail.substring(n.length), this.pos += n.length, n
     }, A.prototype.scanUntil = function(e) {
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
     }, o.prototype.push = function(e) {
         return new o(e, this)
     }, o.prototype.lookup = function(e) {
         var t, n = this.cache;
         if (n.hasOwnProperty(e)) t = n[e];
         else {
             for (var r, i, o = this, s = !1; o;) {
                 if (0 < e.indexOf("."))
                     for (t = o.view, r = e.split("."), i = 0; null != t && i < r.length;) i === r.length - 1 && (s = a(t, r[i])), t = t[r[i++]];
                 else t = o.view[e], s = a(o.view, e);
                 if (s) break;
                 o = o.parent
             }
             n[e] = t
         }
         return c(t) && (t = t.call(this.view)), t
     }, e.prototype.clearCache = function() {
         this.cache = {}
     }, e.prototype.parse = function(e, t) {
         var n = this.cache,
             r = n[e];
         return null == r && (r = n[e] = function(e, t) {
             if (!e) return [];
             var n, r, i, o = [],
                 s = [],
                 a = [],
                 u = !1,
                 c = !1;

             function p() {
                 if (u && !c)
                     for (; a.length;) delete s[a.pop()];
                 else a = [];
                 c = u = !1
             }

             function l(e) {
                 if ("string" == typeof e && (e = e.split(j, 2)), !m(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                 n = new RegExp(E(e[0]) + "\\s*"), r = new RegExp("\\s*" + E(e[1])), i = new RegExp("\\s*" + E("}" + e[1]))
             }
             l(t || b.tags);
             for (var h, f, d, v, g, w, y = new A(e); !y.eos();) {
                 if (h = y.pos, d = y.scanUntil(n))
                     for (var x = 0, k = d.length; x < k; ++x) U(v = d.charAt(x)) ? a.push(s.length) : c = !0, s.push(["text", v, h, h + 1]), h += 1, "\n" === v && p();
                 if (!y.scan(n)) break;
                 if (u = !0, f = y.scan(C) || "name", y.scan(T), "=" === f ? (d = y.scanUntil(S), y.scan(S), y.scanUntil(r)) : "{" === f ? (d = y.scanUntil(i), y.scan(V), y.scanUntil(r), f = "&") : d = y.scanUntil(r), !y.scan(r)) throw new Error("Unclosed tag at " + y.pos);
                 if (g = [f, d, h, y.pos], s.push(g), "#" === f || "^" === f) o.push(g);
                 else if ("/" === f) {
                     if (!(w = o.pop())) throw new Error('Unopened section "' + d + '" at ' + h);
                     if (w[1] !== d) throw new Error('Unclosed section "' + w[1] + '" at ' + h)
                 } else "name" === f || "{" === f || "&" === f ? c = !0 : "=" === f && l(d)
             }
             if (w = o.pop()) throw new Error('Unclosed section "' + w[1] + '" at ' + y.pos);
             return function(e) {
                 for (var t, n = [], r = n, i = [], o = 0, s = e.length; o < s; ++o) switch ((t = e[o])[0]) {
                     case "#":
                     case "^":
                         r.push(t), i.push(t), r = t[4] = [];
                         break;
                     case "/":
                         i.pop()[5] = t[2], r = 0 < i.length ? i[i.length - 1][4] : n;
                         break;
                     default:
                         r.push(t)
                 }
                 return n
             }(function(e) {
                 for (var t, n, r = [], i = 0, o = e.length; i < o; ++i)(t = e[i]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
                 return r
             }(s))
         }(e, t)), r
     }, e.prototype.render = function(e, t, n) {
         var r = this.parse(e),
             i = t instanceof o ? t : new o(t);
         return this.renderTokens(r, i, n, e)
     }, e.prototype.renderTokens = function(e, t, n, r) {
         for (var i, o, s, a = "", u = 0, c = e.length; u < c; ++u) s = void 0, "#" === (o = (i = e[u])[0]) ? s = this.renderSection(i, t, n, r) : "^" === o ? s = this.renderInverted(i, t, n, r) : ">" === o ? s = this.renderPartial(i, t, n, r) : "&" === o ? s = this.unescapedValue(i, t) : "name" === o ? s = this.escapedValue(i, t) : "text" === o && (s = this.rawValue(i)), void 0 !== s && (a += s);
         return a
     }, e.prototype.renderSection = function(e, t, n, r) {
         var i = this,
             o = "",
             s = t.lookup(e[1]);
         if (s) {
             if (m(s))
                 for (var a = 0, u = s.length; a < u; ++a) o += this.renderTokens(e[4], t.push(s[a]), n, r);
             else if ("object" == typeof s || "string" == typeof s || "number" == typeof s) o += this.renderTokens(e[4], t.push(s), n, r);
             else if (c(s)) {
                 if ("string" != typeof r) throw new Error("Cannot use higher-order sections without the original template");
                 null != (s = s.call(t.view, r.slice(e[3], e[5]), function(e) {
                     return i.render(e, t, n)
                 })) && (o += s)
             } else o += this.renderTokens(e[4], t, n, r);
             return o
         }
     }, e.prototype.renderInverted = function(e, t, n, r) {
         var i = t.lookup(e[1]);
         if (!i || m(i) && 0 === i.length) return this.renderTokens(e[4], t, n, r)
     }, e.prototype.renderPartial = function(e, t, n) {
         if (n) {
             var r = c(n) ? n(e[1]) : n[e[1]];
             return null != r ? this.renderTokens(this.parse(r), t, n, r) : void 0
         }
     }, e.prototype.unescapedValue = function(e, t) {
         var n = t.lookup(e[1]);
         if (null != n) return n
     }, e.prototype.escapedValue = function(e, t) {
         var n = t.lookup(e[1]);
         if (null != n) return b.escape(n)
     }, e.prototype.rawValue = function(e) {
         return e[1]
     }, b.name = "mustache.js", b.version = "2.2.1", b.tags = ["{{", "}}"];
     var s = new e;
     b.clearCache = function() {
         return s.clearCache()
     }, b.parse = function(e, t) {
         return s.parse(e, t)
     }, b.render = function(e, t, n) {
         if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (m(r = e) ? "array" : typeof r) + '" was given as the first argument for mustache#render(template, view, partials)');
         var r;
         return s.render(e, t, n)
     }, b.to_html = function(e, t, n, r) {
         var i = b.render(e, t, n);
         if (!c(r)) return i;
         r(i)
     }, b.escape = function(e) {
         return String(e).replace(/[&<>"'`=\/]/g, function(e) {
             return n[e]
         })
     }, b.Scanner = A, b.Context = o, b.Writer = e
 });