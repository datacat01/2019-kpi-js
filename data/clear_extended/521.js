! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 26)
}([function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "h", function() {
        return c
    }), n.d(t, "createElement", function() {
        return c
    }), n.d(t, "cloneElement", function() {
        return l
    }), n.d(t, "Component", function() {
        return I
    }), n.d(t, "render", function() {
        return z
    }), n.d(t, "rerender", function() {
        return d
    }), n.d(t, "options", function() {
        return o
    });
    var r = function() {},
        o = {},
        i = [],
        a = [];

    function c(e, t) {
        var n, c, u, s, l = a;
        for (s = arguments.length; s-- > 2;) i.push(arguments[s]);
        for (t && null != t.children && (i.length || i.push(t.children), delete t.children); i.length;)
            if ((c = i.pop()) && void 0 !== c.pop)
                for (s = c.length; s--;) i.push(c[s]);
            else "boolean" == typeof c && (c = null), (u = "function" != typeof e) && (null == c ? c = "" : "number" == typeof c ? c = String(c) : "string" != typeof c && (u = !1)), u && n ? l[l.length - 1] += c : l === a ? l = [c] : l.push(c), n = u;
        var f = new r;
        return f.nodeName = e, f.children = l, f.attributes = null == t ? void 0 : t, f.key = null == t ? void 0 : t.key, void 0 !== o.vnode && o.vnode(f), f
    }

    function u(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    var s = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

    function l(e, t) {
        return c(e.nodeName, u(u({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
    }
    var f = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        h = [];

    function p(e) {
        !e._dirty && (e._dirty = !0) && 1 == h.push(e) && (o.debounceRendering || s)(d)
    }

    function d() {
        var e, t = h;
        for (h = []; e = t.pop();) e._dirty && M(e)
    }

    function v(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function b(e) {
        var t = u({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n)
            for (var r in n) void 0 === t[r] && (t[r] = n[r]);
        return t
    }

    function m(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function y(e, t, n, r, o) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) n && n(null), r && r(e);
        else if ("class" !== t || o)
            if ("style" === t) {
                if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) {
                    if ("string" != typeof n)
                        for (var i in n) i in r || (e.style[i] = "");
                    for (var i in r) e.style[i] = "number" == typeof r[i] && !1 === f.test(i) ? r[i] + "px" : r[i]
                }
            } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
            var a = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), r ? n || e.addEventListener(t, g, a) : e.removeEventListener(t, g, a), (e._listeners || (e._listeners = {}))[t] = r
        } else if ("list" !== t && "type" !== t && !o && t in e) {
            try {
                e[t] = null == r ? "" : r
            } catch (e) {}
            null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t)
        } else {
            var c = o && t !== (t = t.replace(/^xlink:?/, ""));
            null == r || !1 === r ? c ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (c ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r))
        } else e.className = r || ""
    }

    function g(e) {
        return this._listeners[e.type](o.event && o.event(e) || e)
    }
    var O = [],
        _ = 0,
        w = !1,
        j = !1;

    function k() {
        for (var e; e = O.pop();) o.afterMount && o.afterMount(e), e.componentDidMount && e.componentDidMount()
    }

    function x(e, t, n, r, o, i) {
        _++ || (w = null != o && void 0 !== o.ownerSVGElement, j = null != e && !("__preactattr_" in e));
        var a = C(e, t, n, r, i);
        return o && a.parentNode !== o && o.appendChild(a), --_ || (j = !1, i || k()), a
    }

    function C(e, t, n, r, o) {
        var i = e,
            a = w;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || o) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), N(e, !0))), i.__preactattr_ = !0, i;
        var c, u, s = t.nodeName;
        if ("function" == typeof s) return function(e, t, n, r) {
            var o = e && e._component,
                i = o,
                a = e,
                c = o && e._componentConstructor === t.nodeName,
                u = c,
                s = b(t);
            for (; o && !u && (o = o._parentComponent);) u = o.constructor === t.nodeName;
            o && u && (!r || o._component) ? (T(o, s, 3, n, r), e = o.base) : (i && !c && (E(i), e = a = null), o = B(t.nodeName, s, n), e && !o.nextBase && (o.nextBase = e, a = null), T(o, s, 1, n, r), e = o.base, a && e !== a && (a._component = null, N(a, !1)));
            return e
        }(e, t, n, r);
        if (w = "svg" === s || "foreignObject" !== s && w, s = String(s), (!e || !v(e, s)) && (c = s, (u = w ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c)).normalizedNodeName = c, i = u, e)) {
            for (; e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e), N(e, !0)
        }
        var l = i.firstChild,
            f = i.__preactattr_,
            h = t.children;
        if (null == f) {
            f = i.__preactattr_ = {};
            for (var p = i.attributes, d = p.length; d--;) f[p[d].name] = p[d].value
        }
        return !j && h && 1 === h.length && "string" == typeof h[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != h[0] && (l.nodeValue = h[0]) : (h && h.length || null != l) && function(e, t, n, r, o) {
                var i, a, c, u, s, l = e.childNodes,
                    f = [],
                    h = {},
                    p = 0,
                    d = 0,
                    b = l.length,
                    y = 0,
                    g = t ? t.length : 0;
                if (0 !== b)
                    for (var O = 0; O < b; O++) {
                        var _ = l[O],
                            w = _.__preactattr_,
                            j = g && w ? _._component ? _._component.__key : w.key : null;
                        null != j ? (p++, h[j] = _) : (w || (void 0 !== _.splitText ? !o || _.nodeValue.trim() : o)) && (f[y++] = _)
                    }
                if (0 !== g)
                    for (var O = 0; O < g; O++) {
                        u = t[O], s = null;
                        var j = u.key;
                        if (null != j) p && void 0 !== h[j] && (s = h[j], h[j] = void 0, p--);
                        else if (d < y)
                            for (i = d; i < y; i++)
                                if (void 0 !== f[i] && (k = a = f[i], P = o, "string" == typeof(x = u) || "number" == typeof x ? void 0 !== k.splitText : "string" == typeof x.nodeName ? !k._componentConstructor && v(k, x.nodeName) : P || k._componentConstructor === x.nodeName)) {
                                    s = a, f[i] = void 0, i === y - 1 && y--, i === d && d++;
                                    break
                                } s = C(s, u, n, r), c = l[O], s && s !== e && s !== c && (null == c ? e.appendChild(s) : s === c.nextSibling ? m(c) : e.insertBefore(s, c))
                    }
                var k, x, P;
                if (p)
                    for (var O in h) void 0 !== h[O] && N(h[O], !1);
                for (; d <= y;) void 0 !== (s = f[y--]) && N(s, !1)
            }(i, h, n, r, j || null != f.dangerouslySetInnerHTML),
            function(e, t, n) {
                var r;
                for (r in n) t && null != t[r] || null == n[r] || y(e, r, n[r], n[r] = void 0, w);
                for (r in t) "children" === r || "innerHTML" === r || r in n && t[r] === ("value" === r || "checked" === r ? e[r] : n[r]) || y(e, r, n[r], n[r] = t[r], w)
            }(i, t.attributes, f), w = a, i
    }

    function N(e, t) {
        var n = e._component;
        n ? E(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || m(e), P(e))
    }

    function P(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            N(e, !0), e = t
        }
    }
    var S = [];

    function B(e, t, n) {
        var r, o = S.length;
        for (e.prototype && e.prototype.render ? (r = new e(t, n), I.call(r, t, n)) : ((r = new I(t, n)).constructor = e, r.render = L); o--;)
            if (S[o].constructor === e) return r.nextBase = S[o].nextBase, S.splice(o, 1), r;
        return r
    }

    function L(e, t, n) {
        return this.constructor(e, n)
    }

    function T(e, t, n, r, i) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = r), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === o.syncComponentUpdates && e.base ? p(e) : M(e, 1, i)), e.__ref && e.__ref(e))
    }

    function M(e, t, n, r) {
        if (!e._disable) {
            var i, a, c, s = e.props,
                l = e.state,
                f = e.context,
                h = e.prevProps || s,
                p = e.prevState || l,
                d = e.prevContext || f,
                v = e.base,
                m = e.nextBase,
                y = v || m,
                g = e._component,
                w = !1,
                j = d;
            if (e.constructor.getDerivedStateFromProps && (l = u(u({}, l), e.constructor.getDerivedStateFromProps(s, l)), e.state = l), v && (e.props = h, e.state = p, e.context = d, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, l, f) ? w = !0 : e.componentWillUpdate && e.componentWillUpdate(s, l, f), e.props = s, e.state = l, e.context = f), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !w) {
                i = e.render(s, l, f), e.getChildContext && (f = u(u({}, f), e.getChildContext())), v && e.getSnapshotBeforeUpdate && (j = e.getSnapshotBeforeUpdate(h, p));
                var C, P, S = i && i.nodeName;
                if ("function" == typeof S) {
                    var L = b(i);
                    (a = g) && a.constructor === S && L.key == a.__key ? T(a, L, 1, f, !1) : (C = a, e._component = a = B(S, L, f), a.nextBase = a.nextBase || m, a._parentComponent = e, T(a, L, 0, f, !1), M(a, 1, n, !0)), P = a.base
                } else c = y, (C = g) && (c = e._component = null), (y || 1 === t) && (c && (c._component = null), P = x(c, i, f, n || !v, y && y.parentNode, !0));
                if (y && P !== y && a !== g) {
                    var I = y.parentNode;
                    I && P !== I && (I.replaceChild(P, y), C || (y._component = null, N(y, !1)))
                }
                if (C && E(C), e.base = P, P && !r) {
                    for (var z = e, F = e; F = F._parentComponent;)(z = F).base = P;
                    P._component = z, P._componentConstructor = z.constructor
                }
            }
            for (!v || n ? O.unshift(e) : w || (e.componentDidUpdate && e.componentDidUpdate(h, p, j), o.afterUpdate && o.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            _ || r || k()
        }
    }

    function E(e) {
        o.beforeUnmount && o.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? E(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, m(t), S.push(e), P(t)), e.__ref && e.__ref(null)
    }

    function I(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
    }

    function z(e, t, n) {
        return x(n, e, {}, !1, t, !1)
    }
    u(I.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = u(u({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), p(this)
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), M(this, 2)
        },
        render: function() {}
    });
    var F = {
        h: c,
        createElement: c,
        cloneElement: l,
        Component: I,
        render: z,
        rerender: d,
        options: o
    };
    t.default = F
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        moreNav: "moreNav__1ShAb",
        visible: "visible__2mRGs",
        section: "section__1MiZw",
        sectionTitle: "sectionTitle__2XZFa",
        communitySection: "communitySection__2jNzS",
        sectionItems: "sectionItems__1tEqP",
        link: "link__HCunz",
        sectionLinksSection: "sectionLinksSection__2PxjQ",
        otherLinksSection: "otherLinksSection__3Q5VU",
        footerSection: "footerSection__2ydsr",
        copyright: "copyright__1Ooxv",
        destinationsSection: "destinationsSection__oGK0H",
        destinationItem: "destinationItem__sw0jG",
        destinationLink: "destinationLink__3BrxC",
        bfnLogo: "bfnLogo__82I0_",
        bfreviewsLogo: "bfreviewsLogo__1TXcx",
        tastyLogo: "tastyLogo__2XBtV",
        goodfulLogo: "goodfulLogo__3nZNd",
        asisLogo: "asisLogo__ZFs3D",
        menuToggle: "menuToggle__GGVU-",
        pageOverlay: "pageOverlay__38sHJ",
        bodyWithMoreNav: "bodyWithMoreNav__2lFOz"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        logoContainer: "logoContainer__3fSgq",
        newsLogoContainer: "newsLogoContainer__x7FfB",
        microBrandContainer: "microBrandContainer__3nh2f",
        microBrandLink: "microBrandLink__3wbkF",
        microBrandDelimiter: "microBrandDelimiter__3CXeP",
        "delimiter-nifty": "delimiter-nifty__1lC-M",
        "delimiter-bringme": "delimiter-bringme__2lBJE",
        "delimiter-goodful": "delimiter-goodful__1Mi7S",
        "delimiter-asis": "delimiter-asis__24bsL",
        bfo: "bfo__MfRqr",
        secondary: "secondary__1eyya",
        news: "news__3bAiS",
        newsTagline: "newsTagline__ZLyPI",
        bringme: "bringme__3Fhih",
        goodful: "goodful__3Gave",
        nifty: "nifty__1veSO",
        asis: "asis__1g-BP"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        userMenu: "userMenu__USWPM",
        userAvatar: "userAvatar__pBPSq",
        userOptions: "userOptions__3HNoB",
        userOptionsProfile: "userOptionsProfile__1_Evm",
        userProfileName: "userProfileName__1exvg",
        userProfileNameText: "userProfileNameText__f7uq9",
        userProfileView: "userProfileView__ZIaj0",
        userProfileLink: "userProfileLink__3vxSs",
        userOptionsLinks: "userOptionsLinks__1QTHu",
        settingsLink: "settingsLink__24BMd"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        wrapper: "wrapper__DtNG9",
        topicNav: "topicNav__WFzIs",
        topicNavItem: "topicNavItem__i53qs",
        link: "link__1aeEz",
        mdHide: "mdHide__24xVL",
        downCaret: "downCaret__2AXUI"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        search: "search__1B6FB",
        searchLink: "searchLink__3OXhS",
        searchIcon: "searchIcon__z-gd4",
        searchInputContainer: "searchInputContainer__3QaXp",
        searchInput: "searchInput__2f09w"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        header: "header__3OBcH",
        wrapper: "wrapper__36hPD"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        container: "container__Wkw-E",
        title: "title__qkYfH",
        items: "items__EE0Lf",
        item: "item__1Bg9C",
        cta: "cta__1wCm_"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        destinationNavContainer: "destinationNavContainer__eVhyq",
        destinationNav: "destinationNav__1qfPP",
        destinationNavItem: "destinationNavItem__2iBxl",
        link: "link__1pvR_"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        badgeBar: "badgeBar__1SKBc",
        badgeBarWithOffset: "badgeBarWithOffset__39sFf",
        badgeBarItem: "badgeBarItem__3ujdt",
        bounce: "bounce__3Y-pE",
        trendingBadge: "trendingBadge__nWA79"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        flyout: "flyout__2gQze",
        flyoutInner: "flyoutInner__18rbM",
        arrow: "arrow__23JFg"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        mainNavContainer: "mainNavContainer__1m7kD",
        mainNav: "mainNav__VimfQ",
        stickyMainNav: "stickyMainNav__3x18O"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        container: "container__1NFBD",
        select: "select__3CYXv"
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(21))
}, function(e, t, n) {
    var r = n(22)("jsonp");
    e.exports = function(e, t, n) {
        "function" == typeof t && (n = t, t = {});
        t || (t = {});
        var a, c, u = t.prefix || "__jp",
            s = t.name || u + o++,
            l = t.param || "callback",
            f = null != t.timeout ? t.timeout : 6e4,
            h = encodeURIComponent,
            p = document.getElementsByTagName("script")[0] || document.head;
        f && (c = setTimeout(function() {
            d(), n && n(new Error("Timeout"))
        }, f));

        function d() {
            a.parentNode && a.parentNode.removeChild(a), window[s] = i, c && clearTimeout(c)
        }
        return window[s] = function(e) {
                r("jsonp got", e), d(), n && n(null, e)
            }, e = (e += (~e.indexOf("?") ? "&" : "?") + l + "=" + h(s)).replace("?&", "?"), r('jsonp req "%s"', e), (a = document.createElement("script")).src = e, p.parentNode.insertBefore(a, p),
            function() {
                window[s] && d()
            }
    };
    var o = 0;

    function i() {}
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        text: "text__XYCjV",
        link: "link__357dN",
        linkCta: "linkCta__NNr1e",
        mainNavContainer: "mainNavContainer__2l6Vz",
        bfoLogo: "bfoLogo__1KJMe",
        menuToggle: "menuToggle__2EiBQ",
        topicNavWrapper: "topicNavWrapper__2NeIp",
        searchIcon: "searchIcon__1Ebx7",
        moreNav: "moreNav__2sbYE"
    }
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        text: "text__1dl8A",
        link: "link__2d6hQ",
        linkCta: "linkCta__2WKTn",
        mainNavContainer: "mainNavContainer__3mRKb",
        bfoLogo: "bfoLogo__198yR",
        menuToggle: "menuToggle__3tmWj",
        topicNavWrapper: "topicNavWrapper__1oERL",
        searchIcon: "searchIcon__1dTDa",
        moreNav: "moreNav__3FbPP"
    }
}, function(e, t, n) {
    e.exports = function(e) {
        "use strict";
        ! function() {
            function e(e) {
                this.value = e
            }

            function t(t) {
                var n, r;

                function o(n, r) {
                    try {
                        var a = t[n](r),
                            c = a.value;
                        c instanceof e ? Promise.resolve(c.value).then(function(e) {
                            o("next", e)
                        }, function(e) {
                            o("throw", e)
                        }) : i(a.done ? "return" : "normal", a.value)
                    } catch (e) {
                        i("throw", e)
                    }
                }

                function i(e, t) {
                    switch (e) {
                        case "return":
                            n.resolve({
                                value: t,
                                done: !0
                            });
                            break;
                        case "throw":
                            n.reject(t);
                            break;
                        default:
                            n.resolve({
                                value: t,
                                done: !1
                            })
                    }(n = n.next) ? o(n.key, n.arg): r = null
                }
                this._invoke = function(e, t) {
                    return new Promise(function(i, a) {
                        var c = {
                            key: e,
                            arg: t,
                            resolve: i,
                            reject: a,
                            next: null
                        };
                        r ? r = r.next = c : (n = r = c, o(e, t))
                    })
                }, "function" != typeof t.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
                return this
            }), t.prototype.next = function(e) {
                return this._invoke("next", e)
            }, t.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, t.prototype.return = function(e) {
                return this._invoke("return", e)
            }
        }();
        var t = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            n = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            },
            r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            },
            o = function(o) {
                function a() {
                    return t(this, a), r(this, o.apply(this, arguments))
                }
                return n(a, o), a.prototype.componentDidUpdate = function(e) {
                    for (var t in e)
                        if (e[t] !== this.props[t]) return setTimeout(this.renderLayer)
                }, a.prototype.componentDidMount = function() {
                    this.isMounted = !0, this.renderLayer = this.renderLayer.bind(this), this.renderLayer()
                }, a.prototype.componentWillUnmount = function() {
                    this.renderLayer(!1), this.isMounted = !1, this.remote && this.remote.parentNode.removeChild(this.remote)
                }, a.prototype.findNode = function(e) {
                    return "string" == typeof e ? document.querySelector(e) : e
                }, a.prototype.renderLayer = function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.isMounted && (this.props.into !== this.intoPointer && (this.intoPointer = this.props.into, this.into && this.remote && (this.remote = e.render(e.h(i, null), this.into, this.remote)), this.into = this.findNode(this.props.into)), this.remote = e.render(e.h(i, {
                        context: this.context
                    }, t && this.props.children || null), this.into, this.remote))
                }, a.prototype.render = function() {
                    return null
                }, a
            }(e.Component),
            i = function(e) {
                function o() {
                    return t(this, o), r(this, e.apply(this, arguments))
                }
                return n(o, e), o.prototype.getChildContext = function() {
                    return this.props.context
                }, o.prototype.render = function(e) {
                    var t = e.children;
                    return t && t[0] || null
                }, o
            }(e.Component);
        return o
    }(n(0))
}, function(e, t, n) {
    e.exports = {
        breakpointMedium: "500px",
        breakpointLarge: "790px",
        breakpointSticky: "500px",
        skipNav: "skipNav__261Yu"
    }
}, , function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    (function(r) {
        function o() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
        }(t = e.exports = n(24)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            var o = 0,
                i = 0;
            e[0].replace(/%[a-zA-Z%]/g, function(e) {
                "%%" !== e && (o++, "%c" === e && (i = o))
            }), e.splice(i, 0, r)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = o, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(o())
    }).call(this, n(23))
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var u, s = [],
        l = !1,
        f = -1;

    function h() {
        l && u && (l = !1, u.length ? s = u.concat(s) : f = -1, s.length && p())
    }

    function p() {
        if (!l) {
            var e = c(h);
            l = !0;
            for (var t = s.length; t;) {
                for (u = s, s = []; ++f < t;) u && u[f].run();
                f = -1, t = s.length
            }
            u = null, l = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new d(e, t)), 1 !== s.length || l || c(p)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    var r;

    function o(e) {
        function n() {
            if (n.enabled) {
                var e = n,
                    o = +new Date,
                    i = o - (r || o);
                e.diff = i, e.prev = r, e.curr = o, r = o;
                for (var a = new Array(arguments.length), c = 0; c < a.length; c++) a[c] = arguments[c];
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                var u = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                    if ("%%" === n) return n;
                    u++;
                    var o = t.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[u];
                        n = o.call(e, i), a.splice(u, 1), u--
                    }
                    return n
                }), t.formatArgs.call(e, a), (n.log || t.log || console.log.bind(console)).apply(e, a)
            }
        }
        return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = function(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }(e), "function" == typeof t.init && t.init(n), n
    }(t = e.exports = o.debug = o.default = o).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        t.save(e), t.names = [], t.skips = [];
        for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, o = 0; o < r; o++) n[o] && ("-" === (e = n[o].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }, t.enabled = function(e) {
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(25), t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        i = 24 * o,
        a = 365.25 * i;

    function c(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var u, s = typeof e;
        if ("string" === s && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var c = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return c * a;
                case "days":
                case "day":
                case "d":
                    return c * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return c * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return c * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return c * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return c;
                default:
                    return
            }
        }(e);
        if ("number" === s && !1 === isNaN(e)) return t.long ? c(u = e, i, "day") || c(u, o, "hour") || c(u, r, "minute") || c(u, n, "second") || u + " ms" : function(e) {
            if (e >= i) return Math.round(e / i) + "d";
            if (e >= o) return Math.round(e / o) + "h";
            if (e >= r) return Math.round(e / r) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    var o = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        },
        i = n(14),
        a = "object" == typeof self && self && self.Object === Object && self,
        c = i.a || a || Function("return this")(),
        u = function() {
            return c.Date.now()
        },
        s = c.Symbol,
        l = Object.prototype,
        f = l.hasOwnProperty,
        h = l.toString,
        p = s ? s.toStringTag : void 0;
    var d = function(e) {
            var t = f.call(e, p),
                n = e[p];
            try {
                e[p] = void 0;
                var r = !0
            } catch (e) {}
            var o = h.call(e);
            return r && (t ? e[p] = n : delete e[p]), o
        },
        v = Object.prototype.toString;
    var b = function(e) {
            return v.call(e)
        },
        m = "[object Null]",
        y = "[object Undefined]",
        g = s ? s.toStringTag : void 0;
    var O = function(e) {
        return null == e ? void 0 === e ? y : m : g && g in Object(e) ? d(e) : b(e)
    };
    var _ = function(e) {
            return null != e && "object" == typeof e
        },
        w = "[object Symbol]";
    var j = function(e) {
            return "symbol" == typeof e || _(e) && O(e) == w
        },
        k = NaN,
        x = /^\s+|\s+$/g,
        C = /^[-+]0x[0-9a-f]+$/i,
        N = /^0b[01]+$/i,
        P = /^0o[0-7]+$/i,
        S = parseInt;
    var B = function(e) {
            if ("number" == typeof e) return e;
            if (j(e)) return k;
            if (o(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(x, "");
            var n = N.test(e);
            return n || P.test(e) ? S(e.slice(2), n ? 2 : 8) : C.test(e) ? k : +e
        },
        L = "Expected a function",
        T = Math.max,
        M = Math.min;
    var E = function(e, t, n) {
            var r, i, a, c, s, l, f = 0,
                h = !1,
                p = !1,
                d = !0;
            if ("function" != typeof e) throw new TypeError(L);

            function v(t) {
                var n = r,
                    o = i;
                return r = i = void 0, f = t, c = e.apply(o, n)
            }

            function b(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || p && e - f >= a
            }

            function m() {
                var e = u();
                if (b(e)) return y(e);
                s = setTimeout(m, function(e) {
                    var n = t - (e - l);
                    return p ? M(n, a - (e - f)) : n
                }(e))
            }

            function y(e) {
                return s = void 0, d && r ? v(e) : (r = i = void 0, c)
            }

            function g() {
                var e = u(),
                    n = b(e);
                if (r = arguments, i = this, l = e, n) {
                    if (void 0 === s) return function(e) {
                        return f = e, s = setTimeout(m, t), h ? v(e) : c
                    }(l);
                    if (p) return s = setTimeout(m, t), v(l)
                }
                return void 0 === s && (s = setTimeout(m, t)), c
            }
            return t = B(t) || 0, o(n) && (h = !!n.leading, a = (p = "maxWait" in n) ? T(B(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), g.cancel = function() {
                void 0 !== s && clearTimeout(s), f = 0, r = l = i = s = void 0
            }, g.flush = function() {
                return void 0 === s ? c : y(u())
            }, g
        },
        I = "Expected a function";
    var z = function(e, t, n) {
        var r = !0,
            i = !0;
        if ("function" != typeof e) throw new TypeError(I);
        return o(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), E(e, t, {
            leading: r,
            maxWait: t,
            trailing: i
        })
    };

    function F(e, t) {
        var n = e.match(t);
        return n && n.length ? n[0] : null
    }

    function A() {
        return "prod" === window.BZFD.Config.env ? "buzzfeed.com" : window.location.hostname
    }
    var D = {
            getBuzzfeedSubdomainOrWildcard: function(e) {
                var t = F(e, "(dev|stage|www).(buzzfeed|buzzfeednews).(com|io)$");
                return t || F(e, ".?[a-z]+.[a-z]+$")
            },
            get: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = e + "=", r = document.cookie.split(";"), o = 0; o < r.length; o++) {
                    for (var i = r[o];
                        " " === i.charAt(0);) i = i.substring(1, i.length);
                    if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
                }
                return t
            },
            set: function(e) {
                var t = e.name,
                    n = e.value,
                    r = e.days,
                    o = e.domain;
                o = o || A();
                var i = "";
                if (r) {
                    var a = new Date;
                    a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), i = "; expires=" + a.toGMTString()
                }
                return document.cookie = t + "=" + n + i + "; path=/; domain=" + o
            },
            remove: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A();
                return this.set({
                    name: e,
                    value: "",
                    days: -1,
                    domain: t
                })
            }
        },
        U = "function" == typeof fetch ? fetch : function(e, t) {
            return t = t || {}, new Promise(function(n, r) {
                var o = new XMLHttpRequest;
                for (var i in o.open(t.method || "get", e), t.headers) o.setRequestHeader(i, t.headers[i]);

                function a() {
                    var e, t = [],
                        n = [],
                        r = {};
                    return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm, function(o, i, a) {
                        t.push(i = i.toLowerCase()), n.push([i, a]), e = r[i], r[i] = e ? e + "," + a : a
                    }), {
                        ok: 1 == (o.status / 200 | 0),
                        status: o.status,
                        statusText: o.statusText,
                        url: o.responseURL,
                        clone: a,
                        text: function() {
                            return Promise.resolve(o.responseText)
                        },
                        json: function() {
                            return Promise.resolve(o.responseText).then(JSON.parse)
                        },
                        xml: function() {
                            return Promise.resolve(o.responseXML)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([o.response]))
                        },
                        headers: {
                            keys: function() {
                                return t
                            },
                            entries: function() {
                                return n
                            },
                            get: function(e) {
                                return r[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase() in r
                            }
                        }
                    }
                }
                o.withCredentials = "include" == t.credentials, o.onload = function() {
                    n(a())
                }, o.onerror = r, o.send(t.body)
            })
        };
    Array.isArray;
    var R = "[object AsyncFunction]",
        H = "[object Function]",
        W = "[object GeneratorFunction]",
        V = "[object Proxy]";
    var $, q = function(e) {
            if (!o(e)) return !1;
            var t = O(e);
            return t == H || t == W || t == R || t == V
        },
        Z = c["__core-js_shared__"],
        G = ($ = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + $ : "";
    var X = function(e) {
            return !!G && G in e
        },
        K = Function.prototype.toString;
    var J = function(e) {
            if (null != e) {
                try {
                    return K.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        Q = /^\[object .+?Constructor\]$/,
        Y = Function.prototype,
        ee = Object.prototype,
        te = Y.toString,
        ne = ee.hasOwnProperty,
        re = RegExp("^" + te.call(ne).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var oe = function(e) {
        return !(!o(e) || X(e)) && (q(e) ? re : Q).test(J(e))
    };
    var ie = function(e, t) {
        return null == e ? void 0 : e[t]
    };
    var ae = function(e, t) {
            var n = ie(e, t);
            return oe(n) ? n : void 0
        },
        ce = ae(Object, "create");
    var ue = function() {
        this.__data__ = ce ? ce(null) : {}, this.size = 0
    };
    var se = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        },
        le = "__lodash_hash_undefined__",
        fe = Object.prototype.hasOwnProperty;
    var he = function(e) {
            var t = this.__data__;
            if (ce) {
                var n = t[e];
                return n === le ? void 0 : n
            }
            return fe.call(t, e) ? t[e] : void 0
        },
        pe = Object.prototype.hasOwnProperty;
    var de = function(e) {
            var t = this.__data__;
            return ce ? void 0 !== t[e] : pe.call(t, e)
        },
        ve = "__lodash_hash_undefined__";
    var be = function(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = ce && void 0 === t ? ve : t, this
    };

    function me(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    me.prototype.clear = ue, me.prototype.delete = se, me.prototype.get = he, me.prototype.has = de, me.prototype.set = be;
    var ye = me;
    var ge = function() {
        this.__data__ = [], this.size = 0
    };
    var Oe = function(e, t) {
        return e === t || e != e && t != t
    };
    var _e = function(e, t) {
            for (var n = e.length; n--;)
                if (Oe(e[n][0], t)) return n;
            return -1
        },
        we = Array.prototype.splice;
    var je = function(e) {
        var t = this.__data__,
            n = _e(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : we.call(t, n, 1), --this.size, 0))
    };
    var ke = function(e) {
        var t = this.__data__,
            n = _e(t, e);
        return n < 0 ? void 0 : t[n][1]
    };
    var xe = function(e) {
        return _e(this.__data__, e) > -1
    };
    var Ce = function(e, t) {
        var n = this.__data__,
            r = _e(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };

    function Ne(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Ne.prototype.clear = ge, Ne.prototype.delete = je, Ne.prototype.get = ke, Ne.prototype.has = xe, Ne.prototype.set = Ce;
    var Pe = Ne,
        Se = ae(c, "Map");
    var Be = function() {
        this.size = 0, this.__data__ = {
            hash: new ye,
            map: new(Se || Pe),
            string: new ye
        }
    };
    var Le = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    };
    var Te = function(e, t) {
        var n = e.__data__;
        return Le(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    };
    var Me = function(e) {
        var t = Te(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    };
    var Ee = function(e) {
        return Te(this, e).get(e)
    };
    var Ie = function(e) {
        return Te(this, e).has(e)
    };
    var ze = function(e, t) {
        var n = Te(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };

    function Fe(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    Fe.prototype.clear = Be, Fe.prototype.delete = Me, Fe.prototype.get = Ee, Fe.prototype.has = Ie, Fe.prototype.set = ze;
    var Ae = Fe,
        De = "Expected a function";

    function Ue(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(De);
        var n = function() {
            var r = arguments,
                o = t ? t.apply(this, r) : r[0],
                i = n.cache;
            if (i.has(o)) return i.get(o);
            var a = e.apply(this, r);
            return n.cache = i.set(o, a) || i, a
        };
        return n.cache = new(Ue.Cache || Ae), n
    }
    Ue.Cache = Ae;
    var Re = Ue,
        He = 500;
    var We = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ve = /\\(\\)?/g;
    ! function(e) {
        var t = Re(e, function(e) {
                return n.size === He && n.clear(), e
            }),
            n = t.cache
    }(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(We, function(e, n, r, o) {
            t.push(r ? o.replace(Ve, "$1") : n || e)
        }), t
    });
    var $e = s ? s.prototype : void 0;
    $e && $e.toString;
    var qe = "track/website/instrumentation";
    var Ze = ["samplingRate"];
    n(15);

    function Ge(e) {
        var t = [];
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                null !== r && "" !== r && void 0 !== r && t.push(n + "=" + r)
            } return t.join("&")
    }

    function Xe(e) {
        return new Promise(function(t, n) {
            setTimeout(function() {
                return n({
                    type: "timeout",
                    msg: e + "ms timeout exceeded"
                })
            }, e)
        })
    }

    function Ke(e) {
        var t = e.url;
        return function(e) {
            return function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if ("function" == typeof window.bfa) {
                    Ze.some(function(e) {
                        return n.hasOwnProperty(e)
                    }) && (r = n, n = {});
                    var o = r,
                        i = o.samplingRate,
                        a = o.platform,
                        c = {
                            data: {
                                target: e,
                                value: t,
                                tags: n
                            }
                        };
                    a && (c.data.platform = r.platform), i && (i > 1 ? "dev" === window.BZFD.Config.env && console.error("Your sampling rate is above 100%.") : Object.assign(c, {
                        opts: {
                            samplingRate: i
                        }
                    })), window.bfa(qe, c)
                } else void 0 !== window.raven && window.raven.captureException(new Error("Instrumentation tracking issue: BFA is not available"))
            }("xhr", e.type || "error", {
                url: t,
                status: e.status || 0
            }), Promise.reject(e)
        }
    }

    function Je(e) {
        return e.ok ? Promise.resolve(e) : Promise.reject({
            type: "error",
            status: e.status,
            statusText: e.statusText
        })
    }

    function Qe(e) {
        return e.json()
    }

    function Ye(e) {
        return e.text()
    }

    function et(e) {
        if ("dev" !== BZFD.Config.env) return e;
        var t = e.indexOf("?") > -1 ? "&" : "?";
        return e + t + "eca385331012a621bc93fcda0a953a97"
    }
    var tt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.data,
                r = t.type,
                o = void 0 === r ? "json" : r,
                i = t.params,
                a = void 0 === i ? {} : i,
                c = t.skipAuth,
                u = void 0 !== c && c,
                s = t.raw,
                l = void 0 !== s && s,
                f = t.timeout;
            if (!e) return Promise.reject("URL parameter is required");
            if (!n) return Promise.reject("Can not send POST request without data");
            u && (e = et(e));
            var h = void 0,
                p = Object.assign({
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded"
                    },
                    credentials: "same-origin"
                }, a);
            switch (p.method = "POST", p.body = l ? n : Ge(n), o) {
                case "json":
                    h = U(e, p).then(Je).then(Qe);
                    break;
                case "text":
                    h = U(e, p).then(Je).then(Ye);
                    break;
                default:
                    h = Promise.reject("Unsupported type " + o)
            }
            return (f ? Promise.race([Xe(f), h]) : h).catch(Ke({
                url: e
            }))
        },
        nt = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && c.return && c.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        rt = function() {
            return BZFD.Config.bfwInfoCookie
        },
        ot = {
            general_admin: [4, 0],
            bento_suggest_all: [116, 1],
            bento_suggest_edition: [115, 2],
            bento_user: [115, 3],
            freelance_contributors: [129, 1]
        },
        it = {
            isLoggedIn: function() {
                return !!D.get(rt())
            },
            signout: function() {
                return tt("/buzzfeed/_admin_user", {
                    data: {
                        action: "logout"
                    },
                    params: {
                        headers: {
                            "x-requested-with": "XMLHttpRequest",
                            "content-type": "application/x-www-form-urlencoded"
                        }
                    }
                }).then(function() {
                    D.remove(rt())
                })
            },
            getUserInfo: function() {
                var e = decodeURIComponent(D.get(rt(), {})),
                    t = {};
                return e.split("&").forEach(function(e) {
                    var n = e.split("=");
                    t[n[0]] = decodeURIComponent(n[1])
                }), t
            },
            isAdmin: function() {
                var e = this.getUserInfo();
                return !!(e.p_admin || e.p_editor_admin || e.p_developer_admin || e.p_partner_admin)
            },
            userCan: function(e) {
                var t = this.getUserInfo().permission_key;
                if (!t) return !1;
                var n = nt(ot[e], 2),
                    r = n[0],
                    o = n[1],
                    i = t.substr(t.length - (r + 1), 1);
                return (parseInt(i, 16) & 1 << o) > 0
            }
        },
        at = n(7),
        ct = n.n(at),
        ut = n(1),
        st = n.n(ut),
        lt = n(13),
        ft = n.n(lt);
    var ht = {
        register: function(e) {
            console.warn("Consumer used without a Provider")
        },
        unregister: function(e) {},
        val: function(e) {}
    };

    function pt(e) {
        var t = e.children;
        return {
            child: 1 === t.length ? t[0] : null,
            children: t
        }
    }
    var dt, vt = (dt = function(e, t) {
        return (dt = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        dt(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });

    function bt(e) {
        return pt(e).child || "render" in e && e.render
    }
    var mt = 1073741823,
        yt = function() {
            return mt
        },
        gt = 0;

    function Ot(e, t) {
        var n = "_preactContextProvider-" + gt++;
        return {
            Provider: function(e) {
                function o(n) {
                    var r = e.call(this, n) || this;
                    return r._emitter = function(e, t) {
                        var n = [],
                            r = e,
                            o = function(e) {
                                return 0 | t(r, e)
                            };
                        return {
                            register: function(e) {
                                n.push(e), e(r, o(r))
                            },
                            unregister: function(e) {
                                n = n.filter(function(t) {
                                    return t !== e
                                })
                            },
                            val: function(e) {
                                if (void 0 === e || e == r) return r;
                                var t = o(e);
                                return r = e, n.forEach(function(n) {
                                    return n(e, t)
                                }), r
                            }
                        }
                    }(n.value, t || yt), r
                }
                return vt(o, e), o.prototype.getChildContext = function() {
                    var e;
                    return (e = {})[n] = this._emitter, e
                }, o.prototype.componentDidUpdate = function() {
                    this._emitter.val(this.props.value)
                }, o.prototype.render = function() {
                    var e = pt(this.props),
                        t = e.child,
                        n = e.children;
                    return t || Object(r.h)("span", null, n)
                }, o
            }(r.Component),
            Consumer: function(t) {
                function r(n, r) {
                    var o = t.call(this, n, r) || this;
                    return o._updateContext = function(e, t) {
                        var n = o.props.unstable_observedBits,
                            r = null == n ? mt : n;
                        0 != ((r |= 0) & t) && o.setState({
                            value: e
                        })
                    }, o.state = {
                        value: o._getEmitter().val() || e
                    }, o
                }
                return vt(r, t), r.prototype.componentDidMount = function() {
                    this._getEmitter().register(this._updateContext)
                }, r.prototype.shouldComponentUpdate = function(e, t) {
                    return this.state.value !== t.value || bt(this.props) !== bt(e)
                }, r.prototype.componentWillUnmount = function() {
                    this._getEmitter().unregister(this._updateContext)
                }, r.prototype.componentDidUpdate = function(e, t, r) {
                    var o = r[n];
                    o !== this.context[n] && ((o || ht).unregister(this._updateContext), this.componentDidMount())
                }, r.prototype.render = function() {
                    var e = "render" in this.props && this.props.render,
                        t = bt(this.props);
                    if (e && e !== t && console.warn("Both children and a render function are defined. Children will be used"), "function" == typeof t) return t(this.state.value);
                    console.warn("Consumer is expecting a function as one and only child but didn't find any")
                }, r.prototype._getEmitter = function() {
                    return this.context[n] || ht
                }, r
            }(r.Component)
        }
    }
    var _t = Ot,
        wt = _t({}),
        jt = _t({}),
        kt = _t("light"),
        xt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var Ct = [{
            code: "us",
            name: "US"
        }, {
            code: "uk",
            name: "UK"
        }, {
            code: "au",
            name: "Australia"
        }, {
            code: "br",
            name: "Brasil"
        }, {
            code: "ca",
            name: "Canada"
        }, {
            code: "de",
            name: "Deutschland"
        }, {
            code: "in",
            name: "India"
        }, {
            code: "ja-jp",
            name: "Japan"
        }, {
            code: "mx",
            name: "Mexico"
        }],
        Nt = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.state = {
                    edition: "us"
                }, n.handleSelectChange = n.handleSelectChange.bind(n), n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r["Component"]), xt(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        edition: D.get("country", "us")
                    })
                }
            }, {
                key: "handleSelectChange",
                value: function(e) {
                    D.set({
                        name: "country",
                        value: e.target.value,
                        domain: "dev" === window.BZFD.Config.env ? "buzzfeed.io" : "buzzfeed.com",
                        days: 180
                    }), window.location = "/"
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this,
                        o = t.edition;
                    return Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("div", {
                            className: ft.a.container
                        }, Object(r.h)("label", {
                            for: "js-header-edition-select"
                        }, e.edition), Object(r.h)("select", {
                            id: "js-header-edition-select",
                            className: ft.a.select,
                            value: o,
                            onChange: n.handleSelectChange
                        }, Ct.map(function(e) {
                            var t = e.code,
                                n = e.name;
                            return Object(r.h)("option", {
                                "data-bfa": "@a:Main-Nav;@d:" + n + ";",
                                value: t
                            }, n)
                        })))
                    })
                }
            }]), t
        }();
    var Pt = function(e) {
            var t = e.id,
                n = e.children,
                o = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["id", "children"]);
            return Object(r.h)("svg", o, n, Object(r.h)("use", {
                xlinkHref: "#" + t
            }))
        },
        St = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Bt = {
            id: "bfo-logo",
            width: 853.3,
            height: 150.1
        },
        Lt = function(e) {
            return Object(r.h)(Pt, St({
                id: Bt.id,
                viewBox: "0 0 " + Bt.width + " " + Bt.height
            }, e))
        },
        Tt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Mt = {
            width: 48,
            height: 18,
            id: "asis-logo"
        },
        Et = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Tt({}, Mt, {
                viewBox: "0 0 " + Mt.width + " " + Mt.height
            }, t))
        },
        It = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var zt = {
            width: 92,
            height: 18,
            id: "bf-reviews-logo"
        },
        Ft = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, It({}, zt, {
                viewBox: "0 0 " + zt.width + " " + zt.height
            }, t))
        },
        At = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Dt = {
            width: 95,
            height: 18,
            id: "bfn-logo"
        },
        Ut = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, At({}, Dt, {
                viewBox: "0 0 " + Dt.width + " " + Dt.height
            }, t))
        },
        Rt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Ht = {
            width: 48,
            height: 18,
            id: "goodful-logo"
        },
        Wt = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Rt({}, Ht, {
                viewBox: "0 0 " + Ht.width + " " + Ht.height
            }, t))
        },
        Vt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var $t = {
            width: 32,
            height: 18,
            id: "tasty-logo"
        },
        qt = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Vt({}, $t, {
                viewBox: "0 0 " + $t.width + " " + $t.height
            }, t))
        };
    var Zt = function(e) {
            var t = e.destinationName,
                n = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["destinationName"]);
            switch (t) {
                case "bfo":
                    return Object(r.h)(Lt, n);
                case "asis":
                    return Object(r.h)(Et, n);
                case "bfreviews":
                    return Object(r.h)(Ft, n);
                case "bfn":
                    return Object(r.h)(Ut, n);
                case "goodful":
                    return Object(r.h)(Wt, n);
                case "tasty":
                    return Object(r.h)(qt, n)
            }
            return null
        },
        Gt = function(e) {
            var t = e.label,
                n = e.location;
            window.bfa("track/raw/ga", {
                data: {
                    category: "Nav:" + n,
                    action: "click",
                    label: t
                }
            })
        },
        Xt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Kt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var Jt = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r["Component"]), Kt(t, [{
                key: "clickHandler",
                value: function(e) {
                    var t = e.onClick,
                        n = e.label,
                        r = e.location;
                    return function(e) {
                        return Gt({
                            label: n,
                            location: r
                        }), t(e)
                    }
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this,
                        n = e.href,
                        o = e.children,
                        i = e.label,
                        a = e.location,
                        c = e.onClick,
                        u = void 0 === c ? function() {} : c,
                        s = function(e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(e, ["href", "children", "label", "location", "onClick"]);
                    return Object(r.h)(jt.Consumer, null, function(e) {
                        var c = n.match(/^https?:/) ? n : "" + e.bf_url + n;
                        return Object(r.h)("a", Xt({
                            href: c,
                            onClick: t.clickHandler({
                                onClick: u,
                                label: i,
                                location: a
                            })
                        }, s), o)
                    })
                }
            }]), t
        }(),
        Qt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Yt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var en = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r["Component"]), Yt(t, [{
                key: "clickHandler",
                value: function(e) {
                    var t = e.onClick,
                        n = e.label,
                        r = e.location;
                    return function(e) {
                        return Gt({
                            label: n,
                            location: r
                        }), t(e)
                    }
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e.onClick,
                        n = e.children,
                        o = e.label,
                        i = e.location,
                        a = function(e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(e, ["onClick", "children", "label", "location"]);
                    return Object(r.h)("button", Qt({
                        onClick: this.clickHandler({
                            onClick: t,
                            label: o,
                            location: i
                        }),
                        type: "button"
                    }, a), n)
                }
            }]), t
        }(),
        tn = n(4),
        nn = n(16),
        rn = n.n(nn),
        on = n(17),
        an = n.n(on),
        cn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        un = {
            light: an.a,
            purple: rn.a
        },
        sn = function(e) {
            return function(t) {
                return Object(r.h)(kt.Consumer, null, function(n) {
                    return Object(r.h)(e, cn({
                        theme: un[n]
                    }, t))
                })
            }
        },
        ln = {
            bfo: {
                displayName: "BuzzFeed"
            },
            bfn: {
                displayName: "BuzzFeed News"
            },
            bfreviews: {
                displayName: "BuzzFeed Reviews"
            },
            tasty: {
                displayName: "BuzzFeed Tasty"
            },
            goodful: {
                displayName: "BuzzFeed Goodful"
            },
            asis: {
                displayName: "BuzzFeed As Is"
            }
        },
        fn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        hn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function pn(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function dn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function vn(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var bn, mn, yn = function() {
            return !!window.matchMedia("(min-width:" + tn.breakpointSticky + ")").matches
        },
        gn = function(e) {
            return "js-destination-item-" + e + "-more"
        },
        On = sn(function(e) {
            function t() {
                pn(this, t);
                var e = dn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.onClick = e.onClick.bind(e), e
            }
            return vn(t, r["Component"]), hn(t, [{
                key: "onClick",
                value: function(e) {
                    e.currentTarget.blur(), this.props.onClick(e)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e.children,
                        n = e.theme,
                        o = function(e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(e, ["children", "theme"]);
                    return Object(r.h)(en, fn({}, o, {
                        className: st.a.menuToggle + " " + n.menuToggle,
                        onClick: this.onClick,
                        "aria-controls": "js-more-nav",
                        location: "hamburger"
                    }), Object(r.h)("i", null, t))
                }
            }]), t
        }()),
        _n = function(e) {
            function t() {
                pn(this, t);
                var e = dn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.onKeyDown = e.onKeyDown.bind(e), e
            }
            return vn(t, r["Component"]), hn(t, [{
                key: "onKeyDown",
                value: function(e) {
                    27 === e.keyCode && this.props.onHide(e)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    yn() && document.body.classList.add(st.a.bodyWithMoreNav), window.addEventListener("keydown", this.onKeyDown, !0)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.body.classList.remove(st.a.bodyWithMoreNav), window.removeEventListener("keydown", this.onKeyDown, !0)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = e.top,
                        n = e.onHide;
                    return yn() ? Object(r.h)("div", {
                        className: st.a.pageOverlay,
                        style: "top:" + t + "px",
                        onMouseDown: n,
                        role: "presentation"
                    }) : null
                }
            }]), t
        }(),
        wn = sn(function(e) {
            var t = e.name,
                n = e.url,
                o = e.label,
                i = e.theme;
            return Object(r.h)("li", null, Object(r.h)(Jt, {
                href: n,
                className: st.a.link + " " + i.link,
                label: o || t,
                location: "moreMenu"
            }, t))
        }),
        jn = sn(function(e) {
            function t() {
                return pn(this, t), dn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return vn(t, r["Component"]), hn(t, [{
                key: "componentDidUpdate",
                value: function() {
                    if (this.props.isVisible && yn()) {
                        var e = this.container.getBoundingClientRect().top;
                        this.container.style.maxHeight = document.documentElement.clientHeight - e + "px"
                    }
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this,
                        n = e.navItems,
                        o = n.sections,
                        i = void 0 === o ? [] : o,
                        a = n.about,
                        c = void 0 === a ? [] : a,
                        u = n.footer,
                        s = void 0 === u ? [] : u,
                        l = n.destinations,
                        f = void 0 === l ? [] : l,
                        h = e.theme,
                        p = e.edition,
                        d = void 0 === p ? "us" : p,
                        v = e.isVisible,
                        b = void 0 !== v && v,
                        m = e.isUserLoggedIn,
                        y = void 0 !== m && m;
                    return Object(r.h)("section", {
                        className: st.a.moreNav + " " + h.moreNav + " " + (b ? st.a.visible : ""),
                        id: "js-more-nav",
                        ref: function(e) {
                            return t.container = e
                        }
                    }, !y && Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("div", {
                            className: st.a.section + " " + st.a.communitySection + " " + h.text
                        }, Object(r.h)(jt.Consumer, null, function(t) {
                            return Object(r.h)(Jt, {
                                href: t.community_url,
                                className: st.a.link + " " + h.linkCta,
                                location: "moreMenu",
                                label: "login"
                            }, e.log_in)
                        }), " ", e.or, " ", Object(r.h)(Jt, {
                            href: "/signup",
                            className: st.a.link + " " + h.linkCta,
                            location: "moreMenu",
                            label: "signup"
                        }, e.sign_up), " ", e.to_post)
                    }), Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("nav", {
                            className: st.a.section + " " + st.a.sectionLinksSection,
                            "aria-label": e.browse_sections
                        }, Object(r.h)("h2", {
                            className: st.a.sectionTitle + " " + h.text
                        }, e.browse_sections), Object(r.h)("ul", {
                            className: st.a.sectionItems
                        }, i.map(wn)))
                    }), Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("nav", {
                            className: st.a.section,
                            "aria-label": e.about
                        }, Object(r.h)("h2", {
                            className: st.a.sectionTitle + " " + h.text
                        }, e.about), Object(r.h)("ul", {
                            className: st.a.sectionItems
                        }, c.map(wn)))
                    }), Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("nav", {
                            className: st.a.section + " " + st.a.otherLinksSection,
                            "aria-label": e.useful_information
                        }, Object(r.h)("ul", {
                            className: st.a.sectionItems
                        }, s.map(wn)))
                    }), Object(r.h)("div", {
                        className: st.a.section + " " + st.a.footerSection
                    }, Object(r.h)(Nt, {
                        edition: d
                    }), Object(r.h)("div", {
                        className: st.a.copyright + " " + h.text
                    }, "© ", (new Date).getFullYear(), " BuzzFeed, Inc")), Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("nav", {
                            className: st.a.section + " " + st.a.destinationsSection,
                            "aria-label": e.more_buzzfeed_brands
                        }, Object(r.h)("ul", {
                            className: st.a.sectionItems
                        }, f.map(function(e) {
                            var t = e.url,
                                n = e.name,
                                o = e.description,
                                i = e.label;
                            return Object(r.h)("li", {
                                className: st.a.destinationItem
                            }, Object(r.h)(Jt, {
                                className: st.a.destinationLink,
                                href: t,
                                location: "moreMenu",
                                label: i || n
                            }, Object(r.h)("i", {
                                className: st.a[n + "Logo"]
                            }, Object(r.h)(Zt, {
                                destinationName: n,
                                role: "img",
                                "aria-labelledby": gn(n)
                            }, Object(r.h)("title", {
                                id: gn(n)
                            }, ln[n].displayName, " main page"))), Object(r.h)("span", null, o)))
                        })))
                    }))
                }
            }]), t
        }()),
        kn = n(9),
        xn = n.n(kn),
        Cn = function(e) {
            return "js-destination-item-" + e + "-main"
        },
        Nn = function(e) {
            var t = e.destinations;
            return Object(r.h)(wt.Consumer, null, function(e) {
                return Object(r.h)("div", {
                    className: xn.a.destinationNavContainer
                }, Object(r.h)("nav", {
                    className: at.wrapper,
                    "aria-label": e.more_buzzfeed_brands
                }, Object(r.h)("ul", {
                    className: xn.a.destinationNav
                }, t.map(function(e) {
                    var t = e.url,
                        n = e.name,
                        o = e.label;
                    return Object(r.h)("li", {
                        className: xn.a.destinationNavItem
                    }, Object(r.h)(Jt, {
                        href: t,
                        className: xn.a.link,
                        label: o || n,
                        location: "brandBar"
                    }, Object(r.h)(Zt, {
                        destinationName: n,
                        role: "img",
                        "aria-labelledby": Cn(n)
                    }, Object(r.h)("title", {
                        id: Cn(n)
                    }, ln[n].displayName, " main page"))))
                }))))
            })
        },
        Pn = n(11),
        Sn = n.n(Pn),
        Bn = n(18),
        Ln = n.n(Bn),
        Tn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        Mn = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function En(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function In(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function zn(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function Fn(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    var An = function(e) {
            var t = e.children,
                n = Fn(e, ["children"]);
            return Object(r.h)("div", n, t)
        },
        Dn = function(e) {
            function t() {
                return En(this, t), In(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return zn(t, r["Component"]), Mn(t, [{
                key: "shouldComponentUpdate",
                value: function() {
                    return !1
                }
            }, {
                key: "render",
                value: function() {
                    return Object(r.h)("div", {
                        className: "js-main-nav-flyout"
                    })
                }
            }]), t
        }(),
        Un = (mn = bn = function(e) {
            function t() {
                En(this, t);
                var e = In(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    hovered: !1,
                    enabled: !0,
                    showFallback: !0,
                    impressionTracked: !1
                }, e.onMouseEnter = e.onMouseEnter.bind(e), e.onMouseLeave = e.onMouseLeave.bind(e), e.onTouchStart = e.onTouchStart.bind(e), e
            }
            return zn(t, r["Component"]), Mn(t, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        showFallback: !1
                    })
                }
            }, {
                key: "getOffset",
                value: function() {
                    var e = this.toggle.getBoundingClientRect(),
                        t = e.width,
                        n = (e.x || e.left) + t / 2 - this.props.width / 2,
                        r = !0;
                    return n + this.props.width > document.body.clientWidth && (r = !1, n = document.body.clientWidth - this.props.width), n < 0 && (r = !1, n = 0), {
                        leftOffset: n,
                        isCentered: r
                    }
                }
            }, {
                key: "onMouseEnter",
                value: function() {
                    this.toggleFlyout({
                        forceVisible: !0
                    })
                }
            }, {
                key: "onMouseLeave",
                value: function() {
                    this.toggleFlyout({
                        forceVisible: !1
                    })
                }
            }, {
                key: "onTouchStart",
                value: function(e) {
                    this.props.enabled() && (e.preventDefault(), this.toggleFlyout({
                        delay: 0
                    }))
                }
            }, {
                key: "toggleFlyout",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.forceVisible,
                        r = void 0 === n ? !this.state.hovered : n,
                        o = t.delay,
                        i = void 0 === o ? 300 : o;
                    if (r) {
                        clearTimeout(this.willHideFlyout), this.state.impressionTracked || function(e) {
                            var t = e.label,
                                n = e.location;
                            window.bfa("track/raw/ga", {
                                data: {
                                    category: "Nav:" + n,
                                    action: "impression",
                                    label: t
                                }
                            })
                        }({
                            label: this.props.label,
                            location: this.props.location
                        });
                        var a = this.getOffset(),
                            c = a.leftOffset,
                            u = a.isCentered;
                        this.setState(Tn({}, this.state, {
                            hovered: !0,
                            leftOffset: c,
                            enabled: this.props.enabled(),
                            showArrow: u
                        }))
                    } else this.willHideFlyout = setTimeout(function() {
                        return e.setState(Tn({}, e.state, {
                            hovered: !1,
                            impressionTracked: !0
                        }))
                    }, i)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this,
                        o = e.children,
                        i = e.width,
                        a = void 0 === i ? 200 : i,
                        c = Fn(e, ["children", "width"]),
                        u = o.filter(function(e) {
                            return e.nodeName === An
                        }),
                        s = o.filter(function(e) {
                            return e.nodeName !== An
                        }),
                        l = {
                            width: a + "px"
                        };
                    t.leftOffset && (l.left = t.leftOffset);
                    var f = Object(r.h)("div", {
                        className: Sn.a.flyoutInner,
                        style: l,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, t.showArrow && Object(r.h)("span", {
                        className: Sn.a.arrow
                    }), s);
                    return Object(r.h)("div", Tn({
                        className: Sn.a.flyout,
                        onTouchStart: this.onTouchStart,
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }, c), Object(r.h)("div", {
                        ref: function(e) {
                            return n.toggle = e
                        }
                    }, u), t.showFallback && Object(r.h)("div", {
                        style: "display: none"
                    }, f), t.enabled && t.hovered && Object(r.h)(Ln.a, {
                        into: ".js-main-nav-flyout"
                    }, f))
                }
            }]), t
        }(), bn.defaultProps = {
            enabled: function() {
                return !0
            }
        }, mn),
        Rn = n(5),
        Hn = n.n(Rn),
        Wn = n(8),
        Vn = n.n(Wn),
        $n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var qn = {
            id: "caret-icon",
            width: 38,
            height: 38
        },
        Zn = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, $n({
                id: qn.id,
                viewBox: "0 0 " + qn.width + " " + qn.height
            }, t))
        },
        Gn = Math.floor(6 * Math.random()),
        Xn = function(e) {
            var t = e.title,
                n = e.items,
                o = e.cta,
                i = e.location;
            return Object(r.h)("div", {
                className: Vn.a.container
            }, Object(r.h)("h3", {
                className: Vn.a.title
            }, t), Object(r.h)("div", {
                className: Vn.a.items
            }, n.map(function(e) {
                var t = Array.isArray(e.img) ? e.img[Gn] : e.img;
                return Object(r.h)(Jt, {
                    href: e.url,
                    location: i,
                    label: e.label,
                    className: Vn.a.item
                }, Object(r.h)("figure", null, Object(r.h)(jt.Consumer, null, function(n) {
                    return Object(r.h)("img", {
                        alt: e.title,
                        src: n.image_service_url + "/" + t + "?output-format=auto&output-quality=auto&downsize=*:80"
                    })
                }), Object(r.h)("figcaption", null, e.title)))
            })), o ? Object(r.h)(Jt, {
                className: Vn.a.cta,
                href: o.url,
                location: i,
                label: o.label
            }, o.title, Object(r.h)(Zn, {
                width: 16,
                height: 16,
                "aria-hidden": !0
            })) : "")
        },
        Kn = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function Jn(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }

    function Qn() {
        return !!window.matchMedia("(min-width:" + tn.breakpointLarge + ")").matches
    }
    var Yn = sn(function(e) {
            var t = e.theme,
                n = e.flyout,
                o = void 0 === n ? null : n,
                i = Jn(e, ["theme", "flyout"]);
            return o ? Object(r.h)(Un, {
                width: 420,
                enabled: Qn,
                location: "topicBar",
                label: i.label
            }, Object(r.h)(An, null, Object(r.h)(Jt, Kn({
                location: "topicBar",
                className: Hn.a.link + " " + t.link
            }, i), i.emoji, " ", i.children, Object(r.h)(Zn, {
                className: Hn.a.downCaret,
                "aria-hidden": !0
            }))), Object(r.h)(Xn, Kn({
                location: i.label
            }, o))) : Object(r.h)(Jt, Kn({
                location: "topicBar",
                className: Hn.a.link + " " + t.link + " " + (i.mobileOnly ? Hn.a.mdHide : "")
            }, i))
        }),
        er = sn(function(e) {
            var t = e.theme,
                n = e.topics,
                o = "news" === e.brand ? [{
                    url: "/",
                    name: "BuzzFeed"
                }].concat(n) : n;
            return Object(r.h)(wt.Consumer, null, function(e) {
                return Object(r.h)("nav", {
                    className: t.topicNavWrapper + " " + Hn.a.wrapper,
                    "aria-label": e.trending_topics
                }, Object(r.h)("ul", {
                    className: Hn.a.topicNav
                }, o.map(function(e) {
                    var t = e.url,
                        n = e.name,
                        o = e.label,
                        i = Jn(e, ["url", "name", "label"]);
                    return Object(r.h)("li", {
                        className: Hn.a.topicNavItem
                    }, Object(r.h)(Yn, Kn({
                        href: t,
                        label: o || n
                    }, i), n))
                })))
            })
        }),
        tr = n(6),
        nr = n.n(tr),
        rr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var or = {
            id: "search-icon",
            width: 38,
            height: 38
        },
        ir = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, rr({
                id: or.id,
                viewBox: "0 0 " + or.width + " " + or.height
            }, t))
        },
        ar = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        cr = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function ur(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function sr(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function lr(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var fr = function(e) {
            function t() {
                return ur(this, t), sr(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return lr(t, r["Component"]), cr(t, [{
                key: "componentDidMount",
                value: function() {
                    this.input.focus()
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this,
                        n = e.onBlur;
                    return Object(r.h)("form", {
                        className: nr.a.searchInputContainer,
                        role: "search",
                        action: "/search"
                    }, Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("input", {
                            className: nr.a.searchInput,
                            type: "search",
                            name: "q",
                            placeholder: e.search,
                            autocomplete: "off",
                            onBlur: n,
                            ref: function(e) {
                                return t.input = e
                            },
                            "data-bfa": "@a:search;@d:input;"
                        })
                    }), Object(r.h)(ir, {
                        className: nr.a.searchIcon
                    }))
                }
            }]), t
        }(),
        hr = sn(function(e) {
            function t() {
                ur(this, t);
                var e = sr(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.state = {
                    inputVisible: !1
                }, e.onClick = e.onClick.bind(e), e.onSearchInputBlur = e.onSearchInputBlur.bind(e), e
            }
            return lr(t, r["Component"]), cr(t, [{
                key: "onClick",
                value: function(e) {
                    window.matchMedia("(min-width:" + tn.breakpointMedium + ")").matches && (e.preventDefault(), this.setState(ar({}, this.state, {
                        inputVisible: !0
                    })))
                }
            }, {
                key: "onSearchInputBlur",
                value: function() {
                    this.setState(ar({}, this.state, {
                        inputVisible: !1
                    }))
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = e.theme;
                    return Object(r.h)("div", {
                        className: nr.a.search
                    }, t.inputVisible ? Object(r.h)(fr, {
                        onBlur: this.onSearchInputBlur
                    }) : Object(r.h)(Jt, {
                        className: nr.a.searchLink,
                        href: "/search",
                        onClick: this.onClick,
                        location: "search"
                    }, Object(r.h)(ir, {
                        className: nr.a.searchIcon + " " + n.searchIcon
                    }, Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("title", null, e.search)
                    }))))
                }
            }]), t
        }()),
        pr = n(2),
        dr = n.n(pr),
        vr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var br = {
            width: 1748,
            height: 888,
            id: "bringme-brand-logo"
        },
        mr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, vr({
                id: br.id,
                viewBox: "100 100 " + br.width + " " + br.height
            }, t))
        },
        yr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var gr = {
            width: 372.55,
            height: 131.34,
            id: "goodful-brand-logo"
        },
        Or = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, yr({}, gr, {
                viewBox: "0 0 " + gr.width + " " + gr.height
            }, t))
        },
        _r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var wr = {
            width: 805,
            height: 334,
            id: "nifty-brand-logo"
        },
        jr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, _r({
                id: wr.id,
                viewBox: "0 0 " + wr.width + " " + wr.height
            }, t))
        },
        kr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var xr = {
            width: 210,
            height: 50,
            id: "asis-brand-logo"
        },
        Cr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, kr({}, xr, {
                viewBox: "0 0 " + xr.width + " " + xr.height
            }, t))
        },
        Nr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function Pr(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    }
    var Sr = {
            width: 1217,
            height: 150,
            id: "bfn-brand-logo"
        },
        Br = {
            width: 495,
            height: 116,
            id: "bfn-tagline"
        },
        Lr = function(e) {
            var t = Pr(e, []);
            return Object(r.h)(Pt, Nr({
                id: Sr.id,
                viewBox: "0 0 " + Sr.width + " " + Sr.height
            }, t))
        },
        Tr = function(e) {
            var t = Pr(e, []);
            return Object(r.h)(Pt, Nr({
                id: Br.id,
                viewBox: "0 0 " + Br.width + " " + Br.height
            }, t))
        };
    var Mr = function(e) {
            var t = e.brandName,
                n = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["brandName"]);
            switch (t) {
                case "bringme":
                    return Object(r.h)(mr, n);
                case "goodful":
                    return Object(r.h)(Or, n);
                case "nifty":
                    return Object(r.h)(jr, n);
                case "asis":
                    return Object(r.h)(Cr, n)
            }
            return null
        },
        Er = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Ir = "js-bfo-logo-title",
        zr = "js-bfn-logo-title",
        Fr = "js-microbrand-logo-title",
        Ar = sn(function(e) {
            var t = e.brand,
                n = e.theme,
                o = "delimiter-" + t;
            return Object(r.h)(jt.Consumer, null, function(e) {
                return Object(r.h)("div", {
                    className: dr.a.microBrandContainer
                }, Object(r.h)(Jt, {
                    className: dr.a.microBrandLink,
                    href: e.brand_urls[t],
                    label: t,
                    location: "logo"
                }, Object(r.h)(Mr, {
                    className: dr.a[t],
                    brandName: t,
                    role: "img",
                    "aria-labelledby": Fr
                }, Object(r.h)("title", {
                    id: Fr
                }, "BuzzFeed ", t, " Feed"))), Object(r.h)("span", {
                    className: dr.a.microBrandDelimiter + " " + dr.a[o]
                }, "on"), Object(r.h)(Jt, {
                    href: e.bf_url,
                    className: dr.a.logoContainer,
                    label: "bfo",
                    location: "logo"
                }, Object(r.h)(Lt, {
                    className: dr.a.bfo + " " + dr.a.secondary + " " + n.bfoLogo,
                    role: "img",
                    "aria-labelledby": Ir
                }, Object(r.h)("title", {
                    id: Ir
                }, "BuzzFeed Homepage"))))
            })
        }),
        Dr = function(e) {
            return Object(r.h)("div", {
                className: dr.a.newsLogoContainer
            }, Object(r.h)(Lr, Er({
                className: dr.a.news
            }, e, {
                role: "img",
                "aria-labelledby": zr
            }), Object(r.h)("title", {
                id: zr
            }, "BuzzFeed News Homepage")), Object(r.h)(Tr, {
                className: dr.a.newsTagline,
                "aria-hidden": !0
            }))
        },
        Ur = sn(function(e) {
            var t = e.brand,
                n = e.theme,
                o = e.edition,
                i = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["brand", "theme", "edition"]);
            return "news" === t ? Object(r.h)(jt.Consumer, null, function(e) {
                var n = e.brand_urls,
                    a = "us" === o ? n[t] : n[t + "_alt"];
                return Object(r.h)(Jt, {
                    href: a,
                    className: dr.a.logoContainer,
                    label: "bfnews",
                    location: "logo"
                }, Object(r.h)(Dr, Er({
                    className: dr.a[t]
                }, i)))
            }) : "bfo" === t ? Object(r.h)(jt.Consumer, null, function(e) {
                var o = e.brand_urls;
                return Object(r.h)(Jt, {
                    href: o[t],
                    className: dr.a.logoContainer,
                    label: "buzzfeed",
                    location: "logo"
                }, Object(r.h)(Lt, Er({
                    className: dr.a[t] + " " + n.bfoLogo,
                    role: "img",
                    "aria-labelledby": Ir
                }, i), Object(r.h)("title", {
                    id: Ir
                }, "BuzzFeed Homepage")))
            }) : Object(r.h)(Ar, {
                brand: t
            })
        }),
        Rr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Hr = {
            id: "hamburger",
            width: 16,
            height: 12
        },
        Wr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Rr({
                id: Hr.id,
                viewBox: "0 0 " + Hr.width + " " + Hr.height
            }, t))
        },
        Vr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var $r = {
            id: "close-icon",
            width: 38,
            height: 38
        },
        qr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Vr({
                id: $r.id,
                viewBox: "0 0 " + $r.width + " " + $r.height
            }, t))
        },
        Zr = n(10),
        Gr = n.n(Zr),
        Xr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Kr = {
            width: 1024,
            height: 1024,
            id: "cute-badge"
        },
        Jr = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Xr({
                id: Kr.id,
                viewBox: "0 0 " + Kr.width + " " + Kr.height
            }, t))
        },
        Qr = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Yr = {
            width: 1024,
            height: 1024,
            id: "lol-badge"
        },
        eo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Qr({
                id: Yr.id,
                viewBox: "0 0 " + Yr.width + " " + Yr.height
            }, t))
        },
        to = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var no = {
            width: 512,
            height: 512,
            id: "trending-badge"
        },
        ro = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, to({
                id: no.id,
                viewBox: "0 0 " + no.width + " " + no.height
            }, t))
        },
        oo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var io = {
            width: 1024,
            height: 1024,
            id: "omg-badge"
        },
        ao = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, oo({
                id: io.id,
                viewBox: "0 0 " + io.width + " " + io.height
            }, t))
        },
        co = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var uo = {
            width: 200,
            height: 200,
            id: "wtf-badge"
        },
        so = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, co({
                id: uo.id,
                viewBox: "0 0 " + uo.width + " " + uo.height
            }, t))
        },
        lo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var fo = {
            width: 1024,
            height: 1024,
            id: "meudeus-badge"
        },
        ho = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, lo({
                id: fo.id,
                viewBox: "0 0 " + fo.width + " " + fo.height
            }, t))
        },
        po = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var vo = {
            width: 1024,
            height: 1024,
            id: "hahaha-badge"
        },
        bo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, po({
                id: vo.id,
                viewBox: "0 0 " + vo.width + " " + vo.height
            }, t))
        },
        mo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var yo = {
            width: 1024,
            height: 1024,
            id: "fofo-badge"
        },
        go = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, mo({
                id: yo.id,
                viewBox: "0 0 " + yo.width + " " + yo.height
            }, t))
        },
        Oo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var _o = {
            width: 1024,
            height: 1024,
            id: "jajaja-badge"
        },
        wo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Oo({
                id: _o.id,
                viewBox: "0 0 " + _o.width + " " + _o.height
            }, t))
        },
        jo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var ko = {
            width: 200,
            height: 200,
            id: "kawaii-badge"
        },
        xo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, jo({
                id: ko.id,
                viewBox: "0 0 " + ko.width + " " + ko.height
            }, t))
        },
        Co = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var No = {
            width: 512,
            height: 512,
            id: "madremia-badge"
        },
        Po = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Co({
                id: No.id,
                viewBox: "0 0 " + No.width + " " + No.height
            }, t))
        },
        So = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Bo = {
            width: 1024,
            height: 1024,
            id: "lindo-badge"
        },
        Lo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, So({
                id: Bo.id,
                viewBox: "0 0 " + Bo.width + " " + Bo.height
            }, t))
        },
        To = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Mo = {
            width: 512,
            height: 512,
            id: "oooh-badge"
        },
        Eo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, To({
                id: Mo.id,
                viewBox: "0 0 " + Mo.width + " " + Mo.height
            }, t))
        },
        Io = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var zo = {
            width: 200,
            height: 200,
            id: "win-badge"
        },
        Fo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Io({
                id: zo.id,
                viewBox: "0 0 " + zo.width + " " + zo.height
            }, t))
        };
    var Ao = function(e) {
            var t = e.badgeName,
                n = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["badgeName"]);
            switch (t) {
                case "cute":
                    return Object(r.h)(Jr, n);
                case "lol":
                    return Object(r.h)(eo, n);
                case "omg":
                    return Object(r.h)(ao, n);
                case "wtf":
                    return Object(r.h)(so, n);
                case "trending":
                    return Object(r.h)(ro, n);
                case "meudeus":
                    return Object(r.h)(ho, n);
                case "hahaha":
                    return Object(r.h)(bo, n);
                case "fofo":
                    return Object(r.h)(go, n);
                case "jajaja":
                    return Object(r.h)(wo, n);
                case "kawaii":
                    return Object(r.h)(xo, n);
                case "madremia":
                    return Object(r.h)(Po, n);
                case "lindo":
                    return Object(r.h)(Lo, n);
                case "oooh":
                    return Object(r.h)(Eo, n);
                case "win":
                    return Object(r.h)(Fo, n)
            }
            return null
        },
        Do = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Uo = {
            trending: {
                className: Gr.a.trendingBadge
            }
        },
        Ro = function(e) {
            return "$js-badge-feed-title-" + e
        },
        Ho = function(e) {
            var t = e.name,
                n = e.label,
                o = e.url;
            return Object(r.h)("li", {
                className: Gr.a.badgeBarItem
            }, Object(r.h)(Jt, {
                href: o,
                label: n || t,
                location: "badgeBar"
            }, Object(r.h)(Ao, Do({
                badgeName: t,
                role: "img",
                "aria-labelledby": Ro(t)
            }, Uo[t]), Object(r.h)("title", {
                id: Ro(t)
            }, "BuzzFeed ", t, " Badge Feed"))))
        },
        Wo = function(e) {
            var t = e.badges,
                n = e.withOffset,
                o = void 0 !== n && n;
            return Object(r.h)(wt.Consumer, null, function(e) {
                return Object(r.h)("ul", {
                    className: Gr.a.badgeBar + " " + (o ? Gr.a.badgeBarWithOffset : ""),
                    "aria-label": e.buzzfeed_badges
                }, [].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                }(t)).reverse().map(Ho))
            })
        },
        Vo = n(3),
        $o = n.n(Vo),
        qo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Zo = {
            id: "settings-icon",
            width: 512,
            height: 512
        },
        Go = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, qo({}, Zo, {
                viewBox: "0 0 " + Zo.width + " " + Zo.height
            }, t), Object(r.h)(wt.Consumer, null, function(e) {
                return Object(r.h)("title", null, e.settings)
            }))
        },
        Xo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var Ko = {
            id: "default-user-icon",
            width: 512,
            height: 512
        },
        Jo = function(e) {
            var t = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }(e, []);
            return Object(r.h)(Pt, Xo({
                id: Ko.id,
                viewBox: "0 0 " + Ko.width + " " + Ko.height
            }, t))
        },
        Qo = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Yo = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var ei = function(e) {
            var t = e.image,
                n = e.username,
                o = function(e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return n
                }(e, ["image", "username"]);
            return t ? Object(r.h)(jt.Consumer, null, function(e) {
                return Object(r.h)("img", Yo({
                    className: $o.a.userAvatar,
                    src: e.image_service_url + t,
                    alt: n
                }, o))
            }) : Object(r.h)(Jo, Yo({
                className: $o.a.userAvatar
            }, o))
        },
        ti = function(e) {
            var t = e.image,
                n = e.displayName,
                o = e.username,
                i = e.isCommunityUser,
                a = e.onLogoutClicked,
                c = function(e) {
                    return i ? e.community_url : e.cms_url
                },
                u = function(e) {
                    return i ? e.dashbird_community_url : e.dashbird_url
                };
            return Object(r.h)(jt.Consumer, null, function(e) {
                return Object(r.h)("div", null, Object(r.h)("div", {
                    className: $o.a.userOptionsProfile
                }, Object(r.h)(Jt, {
                    className: $o.a.userProfileLink,
                    href: c(e),
                    location: "userMenu",
                    label: "profile"
                }, Object(r.h)(ei, {
                    image: t,
                    username: o
                }), Object(r.h)("p", {
                    className: $o.a.userProfileName
                }, Object(r.h)("span", {
                    className: $o.a.userProfileNameText
                }, n), Object(r.h)(wt.Consumer, null, function(e) {
                    return Object(r.h)("span", {
                        className: $o.a.userProfileView
                    }, e.view_profile)
                }))), Object(r.h)(Jt, {
                    className: $o.a.settingsLink,
                    href: e.settings_path,
                    location: "userMenu",
                    label: "settings"
                }, Object(r.h)(Go, null))), Object(r.h)(wt.Consumer, null, function(t) {
                    return Object(r.h)("ul", {
                        className: $o.a.userOptionsLinks
                    }, Object(r.h)("li", null, Object(r.h)(Jt, {
                        href: c(e) + e.new_post_path,
                        location: "userMenu",
                        label: "new post"
                    }, t.new_post)), Object(r.h)("li", null, Object(r.h)(Jt, {
                        href: c(e),
                        location: "userMenu",
                        label: "drafts"
                    }, t.my_drafts)), Object(r.h)("li", null, Object(r.h)(Jt, {
                        href: u(e),
                        location: "userMenu",
                        label: "dashboard"
                    }, t.dashboard)), Object(r.h)("li", null, Object(r.h)(en, {
                        onClick: a,
                        location: "userMenu",
                        label: "logout"
                    }, t.logout)))
                }))
            })
        },
        ni = function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r["Component"]), Qo(t, [{
                key: "render",
                value: function(e) {
                    var t = e.userInfo,
                        n = e.onLogoutClicked;
                    return Object(r.h)("div", {
                        className: $o.a.userMenu
                    }, Object(r.h)(Un, {
                        width: 255,
                        location: "topicBar",
                        label: "user"
                    }, Object(r.h)(An, null, Object(r.h)(ei, {
                        image: t.image,
                        username: t.username,
                        onTouchStart: this.onTouchStart
                    })), Object(r.h)(ti, Yo({}, t, {
                        onLogoutClicked: n
                    }))))
                }
            }]), t
        }(),
        ri = n(12),
        oi = n.n(ri),
        ii = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        ai = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var ci = sn(function(e) {
            function t() {
                return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r["Component"]), ai(t, [{
                key: "render",
                value: function(e) {
                    var t = e.navItems,
                        n = e.brand,
                        o = e.edition,
                        i = e.theme,
                        a = e.userInfo,
                        c = e.showBadges,
                        u = e.showMoreNav,
                        s = e.isSticking,
                        l = e.onNavToggleClicked,
                        f = e.onLogoutClicked,
                        h = function(e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(e, ["navItems", "brand", "edition", "theme", "userInfo", "showBadges", "showMoreNav", "isSticking", "onNavToggleClicked", "onLogoutClicked"]),
                        p = t.topics,
                        d = void 0 === p ? [] : p,
                        v = t.badges,
                        b = void 0 === v ? [] : v,
                        m = t.destinations,
                        y = void 0 === m ? [] : m;
                    return Object(r.h)("div", {
                        className: oi.a.mainNavContainer + " " + i.mainNavContainer + " " + (s ? oi.a.stickyMainNav : "")
                    }, Object(r.h)("div", {
                        className: at.wrapper
                    }, Object(r.h)(wt.Consumer, null, function(e) {
                        return Object(r.h)("div", {
                            className: oi.a.mainNav
                        }, Object(r.h)(On, {
                            onClick: l,
                            "aria-expanded": String(u),
                            "aria-label": e.hamburger
                        }, u ? Object(r.h)(qr, {
                            width: 22,
                            height: 22,
                            "aria-hidden": !0
                        }) : Object(r.h)(Wr, {
                            width: 16,
                            height: 12,
                            "aria-hidden": !0
                        })), Object(r.h)(Ur, {
                            brand: n,
                            edition: o
                        }), Object(r.h)(hr, null), a && Object(r.h)(ni, {
                            userInfo: a,
                            onLogoutClicked: f
                        }), Object(r.h)(er, {
                            topics: d,
                            brand: n
                        }), c && Object(r.h)(Wo, {
                            badges: b,
                            withOffset: !s && y.length > 0
                        }))
                    }), Object(r.h)(jn, ii({
                        navItems: t,
                        isVisible: u,
                        isUserLoggedIn: !!a
                    }, h))), Object(r.h)(Dn, null))
                }
            }]), t
        }()),
        ui = n(19),
        si = n.n(ui),
        li = function() {
            return Object(r.h)(wt.Consumer, null, function(e) {
                return Object(r.h)("a", {
                    href: "#buzz-content",
                    class: si.a.skipNav
                }, e.skip_to_content)
            })
        },
        fi = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        hi = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();

    function pi() {
        if (!it.isLoggedIn()) return null;
        var e = it.getUserInfo();
        return {
            displayName: e.display_name,
            image: e.image,
            username: e.username,
            isCommunityUser: !it.userCan("general_admin") && !it.userCan("freelance_contributors")
        }
    }
    var di = function(e) {
        function t() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return e.state = {
                showMoreNav: !1,
                isSticking: !1,
                userInfo: null
            }, e.toggleMoreNav = e.toggleMoreNav.bind(e), e.onLogout = e.onLogout.bind(e), e.onScroll = z(e.onScroll.bind(e), 50), e
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, r["Component"]), hi(t, [{
            key: "overlayTopOffset",
            value: function() {
                var e = this.stickyContainer.clientHeight,
                    t = this.stickyContainer.getBoundingClientRect().y;
                return this.state.isSticking ? e : e + t
            }
        }, {
            key: "toggleMoreNav",
            value: function(e) {
                var t = e.forceVisible,
                    n = void 0 === t ? !this.state.showMoreNav : t;
                this.setState(fi({}, this.state, {
                    showMoreNav: n
                }))
            }
        }, {
            key: "onLogout",
            value: function() {
                it.signout().then(function() {
                    return window.location.reload()
                })
            }
        }, {
            key: "onScroll",
            value: function() {
                var e = this.stickyContainer.getBoundingClientRect().top <= 0;
                this.state.isSticking !== e && this.setState(fi({}, this.state, {
                    isSticking: e
                }))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.setState(fi({}, this.state, {
                    userInfo: pi()
                })), window.matchMedia("(min-width:" + tn.breakpointSticky + ")").matches && (window.addEventListener("scroll", this.onScroll), this.stickyContainer.style.height = this.stickyContainer.clientHeight + "px", this.onScroll())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                window.removeEventListener("scroll", this.onScroll)
            }
        }, {
            key: "render",
            value: function(e, t) {
                var n = this,
                    o = e.navItems,
                    i = e.config,
                    a = e.i18n,
                    c = e.theme,
                    u = function(e, t) {
                        var n = {};
                        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["navItems", "config", "i18n", "theme"]),
                    s = o.destinations,
                    l = void 0 === s ? [] : s;
                return Object(r.h)(wt.Provider, {
                    value: a
                }, Object(r.h)(jt.Provider, {
                    value: i
                }, Object(r.h)(kt.Provider, {
                    value: c
                }, Object(r.h)("header", {
                    className: ct.a.header
                }, Object(r.h)(li, null), Object(r.h)(Nn, {
                    destinations: l
                }), Object(r.h)("div", {
                    className: "js-sticky-container",
                    ref: function(e) {
                        return n.stickyContainer = e
                    }
                }, Object(r.h)(ci, fi({
                    navItems: o,
                    userInfo: t.userInfo,
                    showMoreNav: t.showMoreNav,
                    isSticking: t.isSticking,
                    onNavToggleClicked: this.toggleMoreNav,
                    onLogoutClicked: this.onLogout
                }, u))), t.showMoreNav && Object(r.h)(_n, {
                    top: this.overlayTopOffset(),
                    onHide: this.toggleMoreNav
                })))))
            }
        }]), t
    }();
    var vi = document.querySelector("#js-header-container");
    Object(r.render)(Object(r.h)(di, window.BZFD.__HEADER_STATE__), vi, vi.firstElementChild), delete window.BZFD.__HEADER_STATE__
}]);
//# sourceMappingURL=app.faf61df520d0306dab8a.js.map