! function(o, m, e) {
    var s = [],
        t = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                s.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                s.push({
                    name: null,
                    fn: e
                })
            }
        },
        l = function() {};
    l.prototype = t, l = new l;
    var c = [];
    var f = m.documentElement,
        p = "svg" === f.nodeName.toLowerCase();
    p || function(e, i) {
        var r, s, t = e.html5 || {},
            a = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            n = "_html5shiv",
            o = 0,
            c = {};

        function u(e, t) {
            var n = e.createElement("p"),
                o = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", o.insertBefore(n.lastChild, o.firstChild)
        }

        function m() {
            var e = h.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function f(e) {
            var t = c[e[n]];
            return t || (t = {}, o++, e[n] = o, c[o] = t), t
        }

        function d(e, t, n) {
            return t || (t = i), s ? t.createElement(e) : (n || (n = f(t)), !(o = n.cache[e] ? n.cache[e].cloneNode() : l.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || a.test(e) || o.tagUrn ? o : n.frag.appendChild(o));
            var o
        }

        function p(e) {
            e || (e = i);
            var t, n, o = f(e);
            return !h.shivCSS || r || o.hasCSS || (o.hasCSS = !!u(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), s || (t = e, (n = o).cache || (n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag()), t.createElement = function(e) {
                return h.shivMethods ? d(e, t, n) : n.createElem(e)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-:]+/g, function(e) {
                return n.createElem(e), n.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(h, n.frag)), e
        }! function() {
            try {
                var e = i.createElement("a");
                e.innerHTML = "<xyz></xyz>", r = "hidden" in e, s = 1 == e.childNodes.length || function() {
                    i.createElement("a");
                    var e = i.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                s = r = !0
            }
        }();
        var h = {
            elements: t.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== t.shivCSS,
            supportsUnknownElements: s,
            shivMethods: !1 !== t.shivMethods,
            type: "default",
            shivDocument: p,
            createElement: d,
            createDocumentFragment: function(e, t) {
                if (e || (e = i), s) return e.createDocumentFragment();
                for (var n = (t = t || f(e)).frag.cloneNode(), o = 0, r = m(), a = r.length; o < a; o++) n.createElement(r[o]);
                return n
            },
            addElements: function(e, t) {
                var n = h.elements;
                "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), h.elements = n + " " + e, p(t)
            }
        };
        e.html5 = h, p(i);
        var v, g = /^$|\b(?:all|print)\b/,
            y = "html5shiv",
            E = !(s || (v = i.documentElement, void 0 === i.namespaces || void 0 === i.parentWindow || void 0 === v.applyElement || void 0 === v.removeNode || void 0 === e.attachEvent));

        function b(e) {
            for (var t, n = e.attributes, o = n.length, r = e.ownerDocument.createElement(y + ":" + e.nodeName); o--;)(t = n[o]).specified && r.setAttribute(t.nodeName, t.nodeValue);
            return r.style.cssText = e.style.cssText, r
        }

        function T(s) {
            var l, c, e = f(s),
                t = s.namespaces,
                n = s.parentWindow;
            if (!E || s.printShived) return s;

            function d() {
                clearTimeout(e._removeSheetTimer), l && l.removeNode(!0), l = null
            }
            return void 0 === t[y] && t.add(y), n.attachEvent("onbeforeprint", function() {
                d();
                for (var e, t, n, o = s.styleSheets, r = [], a = o.length, i = Array(a); a--;) i[a] = o[a];
                for (; n = i.pop();)
                    if (!n.disabled && g.test(n.media)) {
                        try {
                            t = (e = n.imports).length
                        } catch (e) {
                            t = 0
                        }
                        for (a = 0; a < t; a++) i.push(e[a]);
                        try {
                            r.push(n.cssText)
                        } catch (e) {}
                    } r = function(e) {
                    for (var t, n = e.split("{"), o = n.length, r = RegExp("(^|[\\s,>+~])(" + m().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), a = "$1" + y + "\\:$2"; o--;)(t = n[o] = n[o].split("}"))[t.length - 1] = t[t.length - 1].replace(r, a), n[o] = t.join("}");
                    return n.join("{")
                }(r.reverse().join("")), c = function(e) {
                    for (var t, n = e.getElementsByTagName("*"), o = n.length, r = RegExp("^(?:" + m().join("|") + ")$", "i"), a = []; o--;) t = n[o], r.test(t.nodeName) && a.push(t.applyElement(b(t)));
                    return a
                }(s), l = u(s, r)
            }), n.attachEvent("onafterprint", function() {
                ! function(e) {
                    for (var t = e.length; t--;) e[t].removeNode()
                }(c), clearTimeout(e._removeSheetTimer), e._removeSheetTimer = setTimeout(d, 500)
            }), s.printShived = !0, s
        }
        h.type += " print", (h.shivPrint = T)(i), "object" == typeof module && module.exports && (module.exports = h)
    }(void 0 !== o ? o : this, m), l.addTest("mutationobserver", !!o.MutationObserver || !!o.WebKitMutationObserver);
    var n = t._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];

    function h() {
        return "function" != typeof m.createElement ? m.createElement(arguments[0]) : p ? m.createElementNS.call(m, "http://www.w3.org/2000/svg", arguments[0]) : m.createElement.apply(m, arguments)
    }
    t._prefixes = n;
    var r = t.testStyles = function(e, t, n, o) {
        var r, a, i, s, l, c = "modernizr",
            d = h("div"),
            u = ((l = m.body) || ((l = h(p ? "svg" : "body")).fake = !0), l);
        if (parseInt(n, 10))
            for (; n--;)(i = h("div")).id = o ? o[n] : c + (n + 1), d.appendChild(i);
        return (r = h("style")).type = "text/css", r.id = "s" + c, (u.fake ? u : d).appendChild(r), u.appendChild(d), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(m.createTextNode(e)), d.id = c, u.fake && (u.style.background = "", u.style.overflow = "hidden", s = f.style.overflow, f.style.overflow = "hidden", f.appendChild(u)), a = t(d, e), u.fake ? (u.parentNode.removeChild(u), f.style.overflow = s, f.offsetHeight) : d.parentNode.removeChild(d), !!a
    };
    l.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in o || o.DocumentTouch && m instanceof DocumentTouch) t = !0;
        else {
            var e = ["@media (", n.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            r(e, function(e) {
                t = 9 === e.offsetTop
            })
        }
        return t
    }), l.addTest("svg", !!m.createElementNS && !!m.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
    var a = h("input"),
        i = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        d = {};
    l.input = function(e) {
            for (var t = 0, n = e.length; t < n; t++) d[e[t]] = !!(e[t] in a);
            return d.list && (d.list = !(!h("datalist") || !o.HTMLDataListElement)), d
        }(i), l.addTest("csspointerevents", function() {
            var e = h("a").style;
            return e.cssText = "pointer-events:auto", "auto" === e.pointerEvents
        }),
        function() {
            var e, t, n, o, r, a;
            for (var i in s)
                if (s.hasOwnProperty(i)) {
                    if (e = [], (t = s[i]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                    for (o = "function" == typeof t.fn ? t.fn() : t.fn, r = 0; r < e.length; r++) 1 === (a = e[r].split(".")).length ? l[a[0]] = o : (!l[a[0]] || l[a[0]] instanceof Boolean || (l[a[0]] = new Boolean(l[a[0]])), l[a[0]][a[1]] = o), c.push((o ? "" : "no-") + a.join("-"))
                }
        }(),
        function(e) {
            var t = f.className,
                n = l._config.classPrefix || "";
            if (p && (t = t.baseVal), l._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(o, "$1" + n + "js$2")
            }
            l._config.enableClasses && (t += " " + n + e.join(" " + n), p ? f.className.baseVal = t : f.className = t)
        }(c), delete t.addTest, delete t.addAsyncTest;
    for (var u = 0; u < l._q.length; u++) l._q[u]();
    o.Modernizr = l
}(window, document);