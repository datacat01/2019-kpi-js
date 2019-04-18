! function(e, t) {
    "use strict";

    function n() {
        var e = A.splice(0, A.length);
        for (Qe = 0; e.length;) e.shift().call(null, e.shift())
    }

    function r(e, t) {
        for (var n = 0, r = e.length; n < r; n++) h(e[n], t)
    }

    function l(e) {
        for (var t, n = 0, r = e.length; n < r; n++) t = e[n], V(t, le[a(t)])
    }

    function o(e) {
        return function(t) {
            Ue(t) && (h(t, e), oe.length && r(t.querySelectorAll(oe), e))
        }
    }

    function a(e) {
        var t = xe.call(e, "is"),
            n = e.nodeName.toUpperCase(),
            r = ie.call(re, t ? ee + t.toUpperCase() : J + n);
        return t && -1 < r && !i(n, t) ? -1 : r
    }

    function i(e, t) {
        return -1 < oe.indexOf(e + '[is="' + t + '"]')
    }

    function u(e) {
        var t = e.currentTarget,
            n = e.attrChange,
            r = e.attrName,
            l = e.target,
            o = e[K] || 2,
            a = e[Q] || 3;
        tt && (!l || l === t) && t[x] && "style" !== r && (e.prevValue !== e.newValue || "" === e.newValue && (n === o || n === a)) && t[x](r, n === o ? null : e.prevValue, n === a ? null : e.newValue)
    }

    function c(e) {
        var t = o(e);
        return function(e) {
            A.push(t, e.target), Qe && clearTimeout(Qe), Qe = setTimeout(n, 1)
        }
    }

    function s(e) {
        et && (et = !1, e.currentTarget.removeEventListener(Y, s)), oe.length && r((e.target || b).querySelectorAll(oe), e.detail === _ ? _ : R), Ie && p()
    }

    function m(e, t) {
        var n = this;
        je.call(n, e, t), w.call(n, {
            target: n
        })
    }

    function f(e, t) {
        Se(e, t), D ? D.observe(e, Ke) : (Je && (e.setAttribute = m, e[P] = N(e), e[U]($, w)), e[U](W, u)), e[G] && tt && (e.created = !0, e[G](), e.created = !1)
    }

    function p() {
        for (var e, t = 0, n = Re.length; t < n; t++) e = Re[t], ae.contains(e) || (n--, Re.splice(t--, 1), h(e, _))
    }

    function d(e) {
        throw new Error("A " + e + " type is already registered")
    }

    function h(e, t) {
        var n, r = a(e); - 1 < r && (F(e, le[r]), r = 0, t !== R || e[R] ? t === _ && !e[_] && (e[R] = !1, e[_] = !0, r = 1) : (e[_] = !1, e[R] = !0, r = 1, Ie && ie.call(Re, e) < 0 && Re.push(e)), r && (n = e[t + k]) && n.call(e))
    }

    function T() {}

    function E(e, t, n) {
        var r = n && n[q] || "",
            l = t.prototype,
            o = De(l),
            a = t.observedAttributes || fe,
            i = {
                prototype: o
            };
        Pe(o, G, {
            value: function() {
                if (Ce) Ce = !1;
                else if (!this[Le]) {
                    this[Le] = !0, new t(this), l[G] && l[G].call(this);
                    var e = Ae[Oe.get(t)];
                    (!ve || e.create.length > 1) && H(this)
                }
            }
        }), Pe(o, x, {
            value: function(e) {
                -1 < ie.call(a, e) && l[x].apply(this, arguments)
            }
        }), l[B] && Pe(o, Z, {
            value: l[B]
        }), l[j] && Pe(o, z, {
            value: l[j]
        }), r && (i[q] = r), e = e.toUpperCase(), Ae[e] = {
            constructor: t,
            create: r ? [r, Ne(e)] : [e]
        }, Oe.set(t, e), b[I](e.toLowerCase(), i), v(e), we[e].r()
    }

    function M(e) {
        var t = Ae[e.toUpperCase()];
        return t && t.constructor
    }

    function L(e) {
        return "string" == typeof e ? e : e && e.is || ""
    }

    function H(e) {
        for (var t, n = e[x], r = n ? e.attributes : fe, l = r.length; l--;) t = r[l], n.call(e, t.name || t.nodeName, null, t.value || t.nodeValue)
    }

    function v(e) {
        return e = e.toUpperCase(), e in we || (we[e] = {}, we[e].p = new ye(function(t) {
            we[e].r = t
        })), we[e].p
    }

    function g() {
        He && delete e.customElements, me(e, "customElements", {
            configurable: !0,
            value: new T
        }), me(e, "CustomElementRegistry", {
            configurable: !0,
            value: T
        });
        for (var t = function(t) {
                var n = e[t];
                if (n) {
                    e[t] = function(e) {
                        var t, r;
                        return e || (e = this), e[Le] || (Ce = !0, t = Ae[Oe.get(e.constructor)], r = ve && 1 === t.create.length, e = r ? Reflect.construct(n, fe, t.constructor) : b.createElement.apply(b, t.create), e[Le] = !0, Ce = !1, r || H(e)), e
                    }, e[t].prototype = n.prototype;
                    try {
                        n.prototype.constructor = e[t]
                    } catch (r) {
                        Me = !0, me(n, Le, {
                            value: e[t]
                        })
                    }
                }
            }, n = C.get(/^HTML[A-Z]*[a-z]/), r = n.length; r--; t(n[r]));
        b.createElement = function(e, t) {
            var n = L(t);
            return n ? ze.call(this, e, Ne(n)) : ze.call(this, e)
        }, We || ($e = !0, b[I](""))
    }
    var b = e.document,
        y = e.Object,
        C = function(e) {
            var t, n, r, l, o = /^[A-Z]+[a-z]/,
                a = function(e) {
                    var t, n = [];
                    for (t in u) e.test(t) && n.push(t);
                    return n
                },
                i = function(e, t) {
                    t = t.toLowerCase(), t in u || (u[e] = (u[e] || []).concat(t), u[t] = u[t.toUpperCase()] = e)
                },
                u = (y.create || y)(null),
                c = {};
            for (n in e)
                for (l in e[n])
                    for (r = e[n][l], u[l] = r, t = 0; t < r.length; t++) u[r[t].toLowerCase()] = u[r[t].toUpperCase()] = l;
            return c.get = function(e) {
                return "string" == typeof e ? u[e] || (o.test(e) ? [] : "") : a(e)
            }, c.set = function(e, t) {
                return o.test(e) ? i(e, t) : i(t, e), c
            }, c
        }({
            collections: {
                HTMLAllCollection: ["all"],
                HTMLCollection: ["forms"],
                HTMLFormControlsCollection: ["elements"],
                HTMLOptionsCollection: ["options"]
            },
            elements: {
                Element: ["element"],
                HTMLAnchorElement: ["a"],
                HTMLAppletElement: ["applet"],
                HTMLAreaElement: ["area"],
                HTMLAttachmentElement: ["attachment"],
                HTMLAudioElement: ["audio"],
                HTMLBRElement: ["br"],
                HTMLBaseElement: ["base"],
                HTMLBodyElement: ["body"],
                HTMLButtonElement: ["button"],
                HTMLCanvasElement: ["canvas"],
                HTMLContentElement: ["content"],
                HTMLDListElement: ["dl"],
                HTMLDataElement: ["data"],
                HTMLDataListElement: ["datalist"],
                HTMLDetailsElement: ["details"],
                HTMLDialogElement: ["dialog"],
                HTMLDirectoryElement: ["dir"],
                HTMLDivElement: ["div"],
                HTMLDocument: ["document"],
                HTMLElement: ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
                HTMLEmbedElement: ["embed"],
                HTMLFieldSetElement: ["fieldset"],
                HTMLFontElement: ["font"],
                HTMLFormElement: ["form"],
                HTMLFrameElement: ["frame"],
                HTMLFrameSetElement: ["frameset"],
                HTMLHRElement: ["hr"],
                HTMLHeadElement: ["head"],
                HTMLHeadingElement: ["h1", "h2", "h3", "h4", "h5", "h6"],
                HTMLHtmlElement: ["html"],
                HTMLIFrameElement: ["iframe"],
                HTMLImageElement: ["img"],
                HTMLInputElement: ["input"],
                HTMLKeygenElement: ["keygen"],
                HTMLLIElement: ["li"],
                HTMLLabelElement: ["label"],
                HTMLLegendElement: ["legend"],
                HTMLLinkElement: ["link"],
                HTMLMapElement: ["map"],
                HTMLMarqueeElement: ["marquee"],
                HTMLMediaElement: ["media"],
                HTMLMenuElement: ["menu"],
                HTMLMenuItemElement: ["menuitem"],
                HTMLMetaElement: ["meta"],
                HTMLMeterElement: ["meter"],
                HTMLModElement: ["del", "ins"],
                HTMLOListElement: ["ol"],
                HTMLObjectElement: ["object"],
                HTMLOptGroupElement: ["optgroup"],
                HTMLOptionElement: ["option"],
                HTMLOutputElement: ["output"],
                HTMLParagraphElement: ["p"],
                HTMLParamElement: ["param"],
                HTMLPictureElement: ["picture"],
                HTMLPreElement: ["pre"],
                HTMLProgressElement: ["progress"],
                HTMLQuoteElement: ["blockquote", "q", "quote"],
                HTMLScriptElement: ["script"],
                HTMLSelectElement: ["select"],
                HTMLShadowElement: ["shadow"],
                HTMLSlotElement: ["slot"],
                HTMLSourceElement: ["source"],
                HTMLSpanElement: ["span"],
                HTMLStyleElement: ["style"],
                HTMLTableCaptionElement: ["caption"],
                HTMLTableCellElement: ["td", "th"],
                HTMLTableColElement: ["col", "colgroup"],
                HTMLTableElement: ["table"],
                HTMLTableRowElement: ["tr"],
                HTMLTableSectionElement: ["thead", "tbody", "tfoot"],
                HTMLTemplateElement: ["template"],
                HTMLTextAreaElement: ["textarea"],
                HTMLTimeElement: ["time"],
                HTMLTitleElement: ["title"],
                HTMLTrackElement: ["track"],
                HTMLUListElement: ["ul"],
                HTMLUnknownElement: ["unknown", "vhgroupv", "vkeygen"],
                HTMLVideoElement: ["video"]
            },
            nodes: {
                Attr: ["node"],
                Audio: ["audio"],
                CDATASection: ["node"],
                CharacterData: ["node"],
                Comment: ["#comment"],
                Document: ["#document"],
                DocumentFragment: ["#document-fragment"],
                DocumentType: ["node"],
                HTMLDocument: ["#document"],
                Image: ["img"],
                Option: ["option"],
                ProcessingInstruction: ["node"],
                ShadowRoot: ["#shadow-root"],
                Text: ["#text"],
                XMLDocument: ["xml"]
            }
        });
    t || (t = "auto");
    var A, w, O, N, D, S, F, V, I = "registerElement",
        P = "__" + I + (1e5 * e.Math.random() >> 0),
        U = "addEventListener",
        R = "attached",
        k = "Callback",
        _ = "detached",
        q = "extends",
        x = "attributeChanged" + k,
        Z = R + k,
        B = "connected" + k,
        j = "disconnected" + k,
        G = "created" + k,
        z = _ + k,
        K = "ADDITION",
        X = "MODIFICATION",
        Q = "REMOVAL",
        W = "DOMAttrModified",
        Y = "DOMContentLoaded",
        $ = "DOMSubtreeModified",
        J = "<",
        ee = "=",
        te = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
        ne = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
        re = [],
        le = [],
        oe = "",
        ae = b.documentElement,
        ie = re.indexOf || function(e) {
            for (var t = this.length; t-- && this[t] !== e;);
            return t
        },
        ue = y.prototype,
        ce = ue.hasOwnProperty,
        se = ue.isPrototypeOf,
        me = y.defineProperty,
        fe = [],
        pe = y.getOwnPropertyDescriptor,
        de = y.getOwnPropertyNames,
        he = y.getPrototypeOf,
        Te = y.setPrototypeOf,
        Ee = !!y.__proto__,
        Me = !1,
        Le = "__dreCEv1",
        He = e.customElements,
        ve = "force" !== t && !!(He && He.define && He.get && He.whenDefined),
        ge = y.create || y,
        be = e.Map || function() {
            var e, t = [],
                n = [];
            return {
                get: function(e) {
                    return n[ie.call(t, e)]
                },
                set: function(r, l) {
                    e = ie.call(t, r), e < 0 ? n[t.push(r) - 1] = l : n[e] = l
                }
            }
        },
        ye = e.Promise || function(e) {
            function t(e) {
                for (r = !0; n.length;) n.shift()(e)
            }
            var n = [],
                r = !1,
                l = {
                    "catch": function() {
                        return l
                    },
                    then: function(e) {
                        return n.push(e), r && setTimeout(t, 1), l
                    }
                };
            return e(t), l
        },
        Ce = !1,
        Ae = ge(null),
        we = ge(null),
        Oe = new be,
        Ne = String,
        De = y.create || function lt(e) {
            return e ? (lt.prototype = e, new lt) : this
        },
        Se = Te || (Ee ? function(e, t) {
            return e.__proto__ = t, e
        } : de && pe ? function() {
            function e(e, t) {
                for (var n, r = de(t), l = 0, o = r.length; l < o; l++) n = r[l], ce.call(e, n) || me(e, n, pe(t, n))
            }
            return function(t, n) {
                do e(t, n); while ((n = he(n)) && !se.call(n, t));
                return t
            }
        }() : function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }),
        Fe = e.MutationObserver || e.WebKitMutationObserver,
        Ve = (e.HTMLElement || e.Element || e.Node).prototype,
        Ie = !se.call(Ve, ae),
        Pe = Ie ? function(e, t, n) {
            return e[t] = n.value, e
        } : me,
        Ue = Ie ? function(e) {
            return 1 === e.nodeType
        } : function(e) {
            return se.call(Ve, e)
        },
        Re = Ie && [],
        ke = Ve.attachShadow,
        _e = Ve.cloneNode,
        qe = Ve.dispatchEvent,
        xe = Ve.getAttribute,
        Ze = Ve.hasAttribute,
        Be = Ve.removeAttribute,
        je = Ve.setAttribute,
        Ge = b.createElement,
        ze = Ge,
        Ke = Fe && {
            attributes: !0,
            characterData: !0,
            attributeOldValue: !0
        },
        Xe = Fe || function(e) {
            Je = !1, ae.removeEventListener(W, Xe)
        },
        Qe = 0,
        We = I in b,
        Ye = !0,
        $e = !1,
        Je = !0,
        et = !0,
        tt = !0;
    if (We || (Te || Ee ? (F = function(e, t) {
            se.call(t, e) || f(e, t)
        }, V = f) : (F = function(e, t) {
            e[P] || (e[P] = y(!0), f(e, t))
        }, V = F), Ie ? (Je = !1, function() {
            var e = pe(Ve, U),
                t = e.value,
                n = function(e) {
                    var t = new CustomEvent(W, {
                        bubbles: !0
                    });
                    t.attrName = e, t.prevValue = xe.call(this, e), t.newValue = null, t[Q] = t.attrChange = 2, Be.call(this, e), qe.call(this, t)
                },
                r = function(e, t) {
                    var n = Ze.call(this, e),
                        r = n && xe.call(this, e),
                        l = new CustomEvent(W, {
                            bubbles: !0
                        });
                    je.call(this, e, t), l.attrName = e, l.prevValue = n ? r : null, l.newValue = t, n ? l[X] = l.attrChange = 1 : l[K] = l.attrChange = 0, qe.call(this, l)
                },
                l = function(e) {
                    var t, n = e.currentTarget,
                        r = n[P],
                        l = e.propertyName;
                    r.hasOwnProperty(l) && (r = r[l], t = new CustomEvent(W, {
                        bubbles: !0
                    }), t.attrName = r.name, t.prevValue = r.value || null, t.newValue = r.value = n[l] || null, null == t.prevValue ? t[K] = t.attrChange = 0 : t[X] = t.attrChange = 1, qe.call(n, t))
                };
            e.value = function(e, o, a) {
                e === W && this[x] && this.setAttribute !== r && (this[P] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = r, this.removeAttribute = n, t.call(this, "propertychange", l)), t.call(this, e, o, a)
            }, me(Ve, U, e)
        }()) : Fe || (ae[U](W, Xe), ae.setAttribute(P, 1), ae.removeAttribute(P), Je && (w = function(e) {
            var t, n, r, l = this;
            if (l === e.target) {
                t = l[P], l[P] = n = N(l);
                for (r in n) {
                    if (!(r in t)) return O(0, l, r, t[r], n[r], K);
                    if (n[r] !== t[r]) return O(1, l, r, t[r], n[r], X)
                }
                for (r in t)
                    if (!(r in n)) return O(2, l, r, t[r], n[r], Q)
            }
        }, O = function(e, t, n, r, l, o) {
            var a = {
                attrChange: e,
                currentTarget: t,
                attrName: n,
                prevValue: r,
                newValue: l
            };
            a[o] = e, u(a)
        }, N = function(e) {
            for (var t, n, r = {}, l = e.attributes, o = 0, a = l.length; o < a; o++) t = l[o], n = t.name, "setAttribute" !== n && (r[n] = t.value);
            return r
        })), b[I] = function(e, t) {
            if (n = e.toUpperCase(), Ye && (Ye = !1, Fe ? (D = function(e, t) {
                    function n(e, t) {
                        for (var n = 0, r = e.length; n < r; t(e[n++]));
                    }
                    return new Fe(function(r) {
                        for (var l, o, a, i = 0, u = r.length; i < u; i++) l = r[i], "childList" === l.type ? (n(l.addedNodes, e), n(l.removedNodes, t)) : (o = l.target, tt && o[x] && "style" !== l.attributeName && (a = xe.call(o, l.attributeName), a !== l.oldValue && o[x](l.attributeName, l.oldValue, a)))
                    })
                }(o(R), o(_)), S = function(e) {
                    return D.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), e
                }, S(b), ke && (Ve.attachShadow = function() {
                    return S(ke.apply(this, arguments))
                })) : (A = [], b[U]("DOMNodeInserted", c(R)), b[U]("DOMNodeRemoved", c(_))), b[U](Y, s), b[U]("readystatechange", s), Ve.cloneNode = function(e) {
                    var t = _e.call(this, !!e),
                        n = a(t);
                    return -1 < n && V(t, le[n]), e && oe.length && l(t.querySelectorAll(oe)), t
                }), $e) return $e = !1;
            if (-2 < ie.call(re, ee + n) + ie.call(re, J + n) && d(e), !te.test(n) || -1 < ie.call(ne, n)) throw new Error("The type " + e + " is invalid");
            var n, i, u = function() {
                    return f ? b.createElement(p, n) : b.createElement(p)
                },
                m = t || ue,
                f = ce.call(m, q),
                p = f ? t[q].toUpperCase() : n;
            return f && -1 < ie.call(re, J + p) && d(p), i = re.push((f ? ee : J) + n) - 1, oe = oe.concat(oe.length ? "," : "", f ? p + '[is="' + e.toLowerCase() + '"]' : p), u.prototype = le[i] = ce.call(m, "prototype") ? m.prototype : De(Ve), oe.length && r(b.querySelectorAll(oe), R), u
        }, b.createElement = ze = function(e, t) {
            var n = L(t),
                r = n ? Ge.call(b, e, Ne(n)) : Ge.call(b, e),
                l = "" + e,
                o = ie.call(re, (n ? ee : J) + (n || l).toUpperCase()),
                a = -1 < o;
            return n && (r.setAttribute("is", n = n.toLowerCase()), a && (a = i(l.toUpperCase(), n))), tt = !b.createElement.innerHTMLHelper, a && V(r, le[o]), r
        }), T.prototype = {
            constructor: T,
            define: ve ? function(e, t, n) {
                if (n) E(e, t, n);
                else {
                    var r = e.toUpperCase();
                    Ae[r] = {
                        constructor: t,
                        create: [r]
                    }, Oe.set(t, r), He.define(e, t)
                }
            } : E,
            get: ve ? function(e) {
                return He.get(e) || M(e)
            } : M,
            whenDefined: ve ? function(e) {
                return ye.race([He.whenDefined(e), v(e)])
            } : v
        }, He && "force" !== t) try {
        ! function(t, n, r) {
            if (n[q] = "a", t.prototype = De(HTMLAnchorElement.prototype), t.prototype.constructor = t, e.customElements.define(r, t, n), xe.call(b.createElement("a", {
                    is: r
                }), "is") !== r || ve && xe.call(new t, "is") !== r) throw n
        }(function ot() {
            return Reflect.construct(HTMLAnchorElement, [], ot)
        }, {}, "document-register-element-a")
    } catch (nt) {
        g()
    } else g();
    try {
        Ge.call(b, "a", "a")
    } catch (rt) {
        Ne = function(e) {
            return {
                is: e
            }
        }
    }
}(window);
! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n() : "function" == typeof define && define.amd ? define(n) : n()
}(0, function() {
    "use strict";

    function e(e) {
        var n = this.constructor;
        return this.then(function(t) {
            return n.resolve(e()).then(function() {
                return t
            })
        }, function(t) {
            return n.resolve(e()).then(function() {
                return n.reject(t)
            })
        })
    }

    function n() {}

    function t(e) {
        if (!(this instanceof t)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
    }

    function o(e, n) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, t._immediateFn(function() {
            var t = 1 === e._state ? n.onFulfilled : n.onRejected;
            if (null !== t) {
                var o;
                try {
                    o = t(e._value)
                } catch (f) {
                    return void i(n.promise, f)
                }
                r(n.promise, o)
            } else(1 === e._state ? r : i)(n.promise, e._value)
        })) : e._deferreds.push(n)
    }

    function r(e, n) {
        try {
            if (n === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (n && ("object" == typeof n || "function" == typeof n)) {
                var o = n.then;
                if (n instanceof t) return e._state = 3, e._value = n, void f(e);
                if ("function" == typeof o) return void u(function(e, n) {
                    return function() {
                        e.apply(n, arguments)
                    }
                }(o, n), e)
            }
            e._state = 1, e._value = n, f(e)
        } catch (r) {
            i(e, r)
        }
    }

    function i(e, n) {
        e._state = 2, e._value = n, f(e)
    }

    function f(e) {
        2 === e._state && 0 === e._deferreds.length && t._immediateFn(function() {
            e._handled || t._unhandledRejectionFn(e._value)
        });
        for (var n = 0, r = e._deferreds.length; r > n; n++) o(e, e._deferreds[n]);
        e._deferreds = null
    }

    function u(e, n) {
        var t = !1;
        try {
            e(function(e) {
                t || (t = !0, r(n, e))
            }, function(e) {
                t || (t = !0, i(n, e))
            })
        } catch (o) {
            if (t) return;
            t = !0, i(n, o)
        }
    }
    var c = setTimeout;
    t.prototype["catch"] = function(e) {
        return this.then(null, e)
    }, t.prototype.then = function(e, t) {
        var r = new this.constructor(n);
        return o(this, new function(e, n, t) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof n ? n : null, this.promise = t
        }(e, t, r)), r
    }, t.prototype["finally"] = e, t.all = function(e) {
        return new t(function(n, t) {
            function o(e, f) {
                try {
                    if (f && ("object" == typeof f || "function" == typeof f)) {
                        var u = f.then;
                        if ("function" == typeof u) return void u.call(f, function(n) {
                            o(e, n)
                        }, t)
                    }
                    r[e] = f, 0 == --i && n(r)
                } catch (c) {
                    t(c)
                }
            }
            if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return n([]);
            for (var i = r.length, f = 0; r.length > f; f++) o(f, r[f])
        })
    }, t.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === t ? e : new t(function(n) {
            n(e)
        })
    }, t.reject = function(e) {
        return new t(function(n, t) {
            t(e)
        })
    }, t.race = function(e) {
        return new t(function(n, t) {
            for (var o = 0, r = e.length; r > o; o++) e[o].then(n, t)
        })
    }, t._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        c(e, 0)
    }, t._unhandledRejectionFn = function(e) {
        void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var l = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw Error("unable to locate global object")
    }();
    "Promise" in l ? l.Promise.prototype["finally"] || (l.Promise.prototype["finally"] = e) : l.Promise = t
});
! function() {
    "use strict";
    window.wpAd = window.wpAd || {};
    var i = function() {
            var i = !1;
            return function(o) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (i = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), i
        },
        o = function() {
            var i = !1;
            return function(o) {
                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (i = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), i
        },
        a = i(),
        e = o();
    wpAd.browserInfo = {
        isMobile: a,
        isTablet: e && !a,
        isDesktop: !e
    }
}();
! function() {
    "use strict";
    window.wpAd = window.wpAd || {}, wpAd.dfpNode = wpAd.browserInfo.isMobile ? "/701/mob.wp." : "/701/wpni.", wpAd.inventory = wpAd.inventory || {}, wpAd.hb_timeout = 700, wpAd.loadingBuffer = wpAd.browserInfo.isMobile ? {
        init: 800,
        refresh: 100
    } : {
        init: 200,
        refresh: 200
    }, window.TWP && TWP.Tools && TWP.Tools.logger && (wpAd.logger = new TWP.Tools.logger("zeus_log"))
}();
! function() {
    window.wpAd = window.wpAd || {};
    var e = {
        addInlineCss: function(e) {
            var t = document.createElement("style");
            return t.type = "text/css", t.media = "screen", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
        },
        setTargeting: function(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t.setTargeting(n, e[n])
        },
        setCategoryExclusion: function(e, t) {
            for (var n in e) e.hasOwnProperty(n) && t.setCategoryExclusion(e[n])
        },
        createTrackingPixelHTML: function(e) {
            if (!e) return "";
            var t = encodeURI(e),
                n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        },
        createTrackingPixeliFrame: function(e) {
            if (!e) return "";
            var t = encodeURI(e);
            return '<iframe src="' + t + '" scrolling="no" frameborder="0" width="1" height="1"></iframe>'
        },
        ajaxRequest: function(e, t, n) {
            return new Promise(function(r, i) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function() {
                    4 === o.readyState && 200 === o.status && r(JSON.parse(o.response))
                }, o.ontimeout = function() {
                    i(o.statusText)
                }, o.open(e, t), o.withCredentials = !0, o.setRequestHeader("Content-type", "text/plain"), o.timeout = wpAd.hb_timeout, n ? o.send(n) : o.send()
            })
        },
        areCookiesAvailable: function() {
            var e = "test",
                t = !1;
            try {
                localStorage.setItem(e, e), localStorage.removeItem(e), t = !0
            } catch (n) {
                t = !1
            }
            return t
        },
        isNumWithin: function(e, t, n) {
            return e >= t && e <= n
        },
        getRandomNumber: function(e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        },
        isInteger: function(e) {
            return "function" == typeof Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        },
        getCookie: function(e) {
            var t = "" + document.cookie,
                n = "" + e + "=",
                r = null,
                i = 0,
                o = 0;
            return t.length > 0 && (i = t.indexOf(n), i !== -1 && (i += n.length, o = t.indexOf(";", i), o === -1 && (o = t.length), r = unescape(t.substring(i, o)))), r
        },
        setCookie: function(e, t, n, r, i, o) {
            document.cookie = e + "=" + escape(t) + (n ? "; expires=" + n : "") + (r ? "; path=" + r : "") + (i ? "; domain=" + i : "") + (o ? "; secure" : "")
        }
    };
    wpAd.utils = e
}();
! function() {
    "use strict";

    function e(e) {
        var t = {},
            o = {
                de: function(e) {
                    var t = wpAd.utils.getCookie("de");
                    t && void 0 === wpAd.params.gdpr_consent && (t = unescape(t).split(":"), t.length && (e.de = t))
                },
                spon_con: function(e) {
                    var t = [],
                        o = n("spon_con", {
                            type: "variable"
                        }),
                        a = wp_meta_data.tags_for_paywall_subs;
                    if (o && t.push(o), a && "subscriber-only" === a) {
                        if (wpAd.browserInfo.isDesktop === !0)
                            for (var i = document.getElementsByTagName("wp-ad"), r = 0, s = i.length; r < s; r++) i[r].setAttribute("data-size", '[[1,1],[2,1],[300,250],[620,250],[728,90],"fluid",[970,250]]');
                        t.push("post_suite")
                    }
                    e.spon_con = t
                },
                wp_pvid: function(e) {
                    e.wp_pvid = window.wp_pvid
                },
                wp_tag: function(e) {
                    var t, o = [],
                        a = wp_meta_data.tags;
                    if (a && a.length)
                        for (t = 0; t < a.length; t++) a[t] && o.push(a[t].toString().replace(/\s/g, "").toLowerCase());
                    o.length && (e.wp_tag = o)
                },
                tid: function(e) {
                    var t = n("tid", {
                        type: "variable"
                    });
                    t && (e.tid = t)
                },
                tidr: function(e) {
                    var t = n("tidr", {
                        type: "variable"
                    });
                    t && (e.tidr = t)
                },
                mag: function(e) {
                    var t = document.querySelector("meta[name='magnet']");
                    t && (e.mag = t.content)
                },
                sub: function(e) {
                    var t = wpAd.utils.getCookie("wapo_actmgmt");
                    if (e.sub = [], t)
                        for (var o = t.split("|"), a = e.sub, n = 0; n < o.length; n++) {
                            var i = o[n].split(":");
                            if ("omniture" === i[0]) {
                                var r = i[1].split(",");
                                switch (r[1]) {
                                    case "ALLACCESS":
                                        a[0] = 1;
                                        break;
                                    case "WEBONLY":
                                        a[0] = 2;
                                        break;
                                    case "NATIONAL":
                                        a[0] = 9;
                                        break;
                                    default:
                                        a[0] = 0
                                }
                                switch (r[3]) {
                                    case "DIGITAL":
                                        a[1] = 3;
                                        break;
                                    case "PARTNER":
                                        a[1] = 4;
                                        break;
                                    case "DSI":
                                        a[1] = 5;
                                        break;
                                    case "DEVICE":
                                        a[1] = 6;
                                        break;
                                    default:
                                        a[1] = 0
                                }
                                switch (r[4]) {
                                    case "ASSOCIATE":
                                        a[2] = 7;
                                        break;
                                    case "SUBSCRIBER":
                                        a[2] = 8;
                                        break;
                                    default:
                                        a[2] = 0
                                }
                            }
                        } else e.sub.push("no")
                },
                swgt: function(e) {
                    var t = wpAd.utils.getCookie("wapo_actmgmt"),
                        o = wpAd.utils.getCookie("wp_variant"),
                        a = [];
                    if (t)
                        for (var n = t.split("|"), i = 0; i < n.length; i++) {
                            var r = n[i].split(":");
                            if ("omniture" === r[0]) {
                                var s = r[1].split(","),
                                    c = Number(s[2]),
                                    p = Number(s[0]),
                                    d = [0, 31, 70, 71, 90, 131, 132, 133, 134, 135, 136, 137, 138, 139, 141, 142, 143, 144, 145, 146, 147, 148, 149, 220, 221, 355, 358, 359, 366, 368, 388, 397, 398, 422, 425, 428, 431, 435, 436, 439, 441, 443, 445, 447, 503, 504, 508, 517, 518, 533, 570, 590, 600, 612, 613, 614, 631, 712, 714, 1008, 1013, 1017, 1026, 1028, 1039, 1040, 1041, 1042, 1043, 1044, 1049, 1056, 1057, 1064, 1065, 1066, 1074],
                                    u = [356, 362, 363, 426, 438, 1023, 1024, 1025, 1045, 1067];
                                "DSI" === s[3] ? a.push("sub_1") : "ASSOCIATE" === s[3] || "PARTNER" === s[3] || d.includes(c) ? a.push("sub_2") : u.includes(c) ? a.push("sub_3") : ("NATIONAL" === s[1] || "BASIC" === s[1]) && p < 182 ? a.push("sub_4") : ("NATIONAL" === s[1] || "BASIC" === s[1]) && p > 182 ? a.push("sub_5") : ("ALLACCESS" === s[1] || "PREMIUM" === s[1]) && p < 182 ? a.push("sub_6") : ("ALLACCESS" === s[1] || "PREMIUM" === s[1]) && p > 182 ? a.push("sub_7") : a.push("no")
                            }
                            "NOADS" === r[0] && ("1" === r[1] ? e.premium_test = r[1] : e.premium_test = null)
                        } else if (a.push("na"), o) {
                            var l = o.split(":");
                            for (i = 1; i < l.length;) a += "_" + l[i], i++
                        } wpAd.params.adMeasurement === !0 && (e.premium_test = "1"), e.swgt = a
                },
                WPATC: function(e) {
                    var t = wpAd.utils.getCookie("WPATC");
                    if (t) {
                        var o, a;
                        for (t = unescape(t).split(":"), o = t.length; o--;) a = t[o].split("="), e[a[0]] ? e[a[0]].push(a[1]) : e[a[0]] = [a[1]]
                    }
                },
                wp_ref: function(e) {
                    var t = [],
                        o = document.referrer || "";
                    /facebook\.com|digg\.com|reddit\.com|myspace\.com|newstrust\.net|twitter\.com|delicious\.com|stumbleupon\.com|linkedin\.com|instagram\.com|tumblr\.com/i.test(o) && t.push("social"), /google\.com|bing\.com|yahoo\.com|duckduckgo\.com|search\.aol\.com/i.test(o) && t.push("search"), /notify\.co/i.test(o) && t.push("fbnotify"), location.search.match("wpisrc=") && t.push("email"), document.referrer || t.push("blank"), t.length && (e.wp_ref = t)
                },
                embed_domain: function(e) {
                    var t = window.location != window.parent.location ? document.referrer : document.location.href,
                        o = t.match(/:\/\/(www[0-9]?\.)?(.[^\/:]+)/i);
                    if (o.length > 2) {
                        var a = o[2],
                            n = a;
                        if (null != a) {
                            var i = a.split(".").reverse();
                            null != i && i.length > 1 && (n = i[1] + "." + i[0], a.toLowerCase().indexOf(".co.uk") != -1 && i.length > 2 && (n = i[2] + "." + n))
                        }
                        e.embed_domain = n
                    }
                },
                article_id: function(e, t) {
                    e.page_id && (t.articleid = [e.page_id])
                },
                ca: function(e, t) {
                    var o, a, n = [];
                    if (window.wpAd.utils.areCookiesAvailable()) {
                        if (o = localStorage.getItem("targeting_aux_map"), a = localStorage.getItem("usersegmentsAdops"), o) {
                            o = o.split(",");
                            for (var i = 0; i < o.length; i++) n.push(o[i].toString().toLowerCase())
                        }
                        if (a) {
                            a = JSON.parse(a);
                            for (var r in a) 1 === a[r] && n.push(r)
                        }
                    }
                    if (e && e.clavis && e.clavis.auxiliaries && e.clavis.auxiliaries.length)
                        for (var s = 0; s < e.clavis.auxiliaries.length; s++) n.push(e.clavis.auxiliaries[s].toString().toLowerCase());
                    n.length && (t.ca = n)
                },
                ct: function(e, t) {
                    e && e.clavis && e.clavis.ct && e.clavis.ct.length && (t.ct = e.clavis.ct)
                },
                poe: function(e, t) {
                    var o = "washpost_poe",
                        a = new Date,
                        n = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
                        i = new Date(n.getTime() + 864e5).toUTCString();
                    "true" === wpAd.utils.getCookie(o) ? t.poe = ["no"] : "homepage" !== e.commercialNode && "washingtonpost.com" !== e.commercialNode ? (wpAd.utils.setCookie(o, "true", i, "/"), t.poe = ["yes"]) : t.poe = ["no"]
                },
                wpnode: function(e, t) {
                    t.wpnode = e.commercialNode
                },
                page: function(e, t) {
                    var o = e.contentType;
                    t.page = o ? o.toString().toLowerCase() : ""
                },
                pageId: function(e, t) {
                    e.page_id && (t.pageId = e.page_id)
                },
                wp_pub_date: function(e, t) {
                    if (e.meta_date) {
                        var o = e.meta_date,
                            a = Math.floor((new Date).getTime() / 1e3),
                            n = a - 172800;
                        o > n ? t.wp_pub_date = ["yes"] : t.wp_pub_date = ["no"]
                    }
                },
                author: function(e, t) {
                    if (e.author) {
                        var o, a = "string" == typeof e.author || e.author instanceof String ? e.author.split("; ") : e.author,
                            n = [],
                            i = a.length;
                        if (i)
                            for (o = 0; o < i; o++) a[o] && n.push(a[o].replace(/[^\w\s]/gi, "").replace(/\s/g, "_").toLowerCase());
                        t.author = n
                    }
                },
                exclusions: function(e) {
                    var t, o = [],
                        a = wpAd.exclusionsKeyWords,
                        n = "MediaGallery" === e.contentType,
                        s = "VideoStory" === e.contentType;
                    if ((n || s) && o.push("media"), (/washingtonpost\.com|homepage|personalpost|obituaries|weather|jobs\/search/.test(e.commercialNode) || s) && o.push("intrusive"), "front" !== e.contentType) {
                        var c = r(e);
                        for (t in a) i(a[t], c) && o.push(t)
                    }
                    return o
                },
                setKruxAttr: function(e) {
                    e.ksg = window.Krux && window.Krux.segments || [], e.kuid = window.Krux && window.Krux.user || []
                },
                setFBText: function(e) {
                    e.adv = wpAd.browserInfo.isMobile && navigator.userAgent.match(/(FBAV|FBAN|FBIOS|FBRV|FB4A)/) ? ["fb_test", "sra"] : ["no_test", "sra"]
                },
                setEmailSpon: function(e) {
                    var t = n("wpisrc", {
                        type: "variable"
                    });
                    e.email_spon = t ? t + ",1" : null
                },
                setGDPR: function(e) {
                    void 0 !== wpAd.params.gdpr_consent && (e.wp_gdpr = wpAd.params.gdpr_consent ? "consent" : "non_consent")
                }
            };
        return o.de(t), o.spon_con(t), o.sub(t), o.swgt(t), o.WPATC(t), o.wp_ref(t), o.embed_domain(t), o.wp_pvid(t), o.wp_tag(t), o.tid(t), o.tidr(t), o.mag(t), o.setKruxAttr(t), o.setFBText(t), o.setEmailSpon(t), o.setGDPR(t), e && (o.ca(e, t), o.ct(e, t), o.poe(e, t), o.wpnode(e, t), o.article_id(e, t), o.page(e, t), o.pageId(e, t), o.wp_pub_date(e, t), o.author(e, t)), {
            targeting: t,
            categoryExclusions: e ? o.exclusions(e) : []
        }
    }

    function t(e) {
        var t = function(e) {
                if (e.hasOwnProperty("sizeOnCondition")) {
                    var t = e.sizeOnCondition;
                    if (t.hasOwnProperty("windowWidth") && window.innerWidth >= t.windowWidth)
                        if (e.size.length && !Array.isArray(e.size[0])) {
                            var o = [];
                            o.push(e.size), o.push(t.size), e.size = o
                        } else e.size.push(t.size)
                }
            },
            o = function(e) {
                if (wpAd.meta_data) {
                    var t = "zeus";
                    wp_pb && "DCL" === wp_pb.zeusDefer && (t += "_defer"), wpAd.params && wpAd.params.onTest && (t += "_" + wpAd.params.onTest), e.keyvalues.pos && (t += "_" + e.keyvalues.pos), e.keyvalues.ctr = [t]
                }
            },
            a = function(e) {
                var t = [],
                    o = n("test_ads", {
                        type: "variable"
                    });
                o && t.push("test_" + o), t.length && (e.kw = t)
            };
        return t(e), o(e), a(e.keyvalues), {
            targeting: e.keyvalues ? e.keyvalues : [],
            categoryExclusions: e.categoryExclusions ? e.categoryExclusions : []
        }
    }

    function o() {
        function e() {
            var e = document.createElement("script");
            e.type = "text/javascript", e.async = !0;
            var t, o = (t = location.href.match(/\bkxsrc=([^&]+)/)) && decodeURIComponent(t[1]);
            e.src = /^https?:\/\/([a-z0-9_\-.]+\.)?krxd\.net(:\d{1,5})?\//i.test(o) ? o : "disable" === o ? "" : ("https:" === location.protocol ? "https:" : "http:") + "//cdn.krxd.net/controltag?confid=IbWIJ0xh";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a)
        }

        function t(e) {
            var t, o = "kx" + e;
            return window.wpAd.utils.areCookiesAvailable() ? window.localStorage[o] || "" : navigator.cookieEnabled ? (t = document.cookie.match(o + "=([^;]*)"), t && unescape(t[1]) || "") : ""
        }

        function o() {
            window.Krux || (window.Krux = function() {
                Krux.q.push(arguments)
            }, window.Krux.q = []), e(), Krux.user = t("user"), Krux.segments = t("segs") ? t("segs").split(",") : []
        }
        return {
            init: o
        }
    }

    function a() {
        var e = {},
            t = {
                article: "article",
                audiostory: "audio",
                blogfront: "blog",
                blogstory: "blog",
                front: "front",
                graphicstory: "graphic",
                mediagallery: "photo",
                gallery: "photo",
                videostory: "video"
            },
            o = function(e) {
                return e ? "string" == typeof e ? e : e[0] : ""
            },
            a = function(e) {
                var a = o(e.contentType);
                return a && t[a.toLowerCase()] || ""
            },
            n = function(e) {
                return o(e.contentName)
            },
            i = window.commercialNode || "politics";
        return i = i.replace(/\s/g, "").replace(/^\/*|\/*$/g, "").replace(/[^0-9a-zA-Z_.\-\/]/g, ""), e = window.wp_meta_data ? window.wp_meta_data : {}, e.contentType = a(e), wpAd.params.dcnode ? e.commercialNode = window.wpAd.params.dcnode : e.isHomepage ? e.commercialNode = wpAd.browserInfo.isMobile ? "homepage" : i : "blog" === e.contentType ? e.commercialNode = i + "/" + e.contentType + "/" + n(e) : "front" === e.contentType && e.contentName && e.contentName.length ? e.commercialNode = i + "/" + n(e) + "/" + e.contentType : !e.contentType && e.contentName && e.contentName.length ? e.commercialNode = i + "/" + n(e) : e.contentType && "article" !== e.contentType ? e.commercialNode = i + "/" + e.contentType : e.commercialNode = i, e
    }

    function n(e, t) {
        var o = document.location.href || document.referrer,
            a = t && "object" == typeof t ? t : null,
            n = null !== a && "variable" === a.type ? new RegExp("[\\?&;]" + e + "=([^&#?]*)") : new RegExp(e),
            i = n.exec(o);
        return null === i ? null : i[i.length - 1]
    }

    function i(e, t, o) {
        o = o || !1, e = e instanceof Array ? e : [e];
        var a = [],
            n = o ? "" : "(|s|es|ed|ing|er)",
            i = e.length;
        if (i && t) {
            for (; i--;) a.push(e[i] + n);
            return a = "\\b" + a.join("\\b|\\b") + "\\b", new RegExp(a, "i").test(t)
        }
        return !1
    }

    function r(e) {
        var t = "";
        return e.keywords && e.keywords.length && (t += e.keywords.join(",")), e.clavis && e.clavis.keywords && e.clavis.keywords.length && (t += e.clavis.keywords.join(",")), t
    }

    function s(e) {
        e.noAds = !(!n("no_ads") && navigator.userAgent.indexOf("facebookexternalhit") == -1 && navigator.userAgent.indexOf("Facebot") == -1), e.demoAds = n("demoAds", {
            type: "variable"
        }), e.isHeaderBidOn = n("headerbid", {
            type: "variable"
        }), e.isDisableRefresh = n("refresh_ads", {
            type: "variable"
        }), e.dcnode = n("dcnode", {
            type: "variable"
        }), e.tmt_dev = n("tmt_dev", {
            type: "variable"
        }), e.enable_tmt = n("enable_tmt", {
            type: "variable"
        });
        var t = n("_", {
            type: "variable"
        });
        t && t.indexOf("is_ad_measure") >= 0 ? (e.adMeasurement = !0, console.log("--Zeus Debug-- Testing No Ad - Ad Measurement Mode via URL")) : e.adMeasurement = !1
    }

    function c(e) {
        var t;
        window.wpAd.utils.areCookiesAvailable() && (t = localStorage.getItem("rplampr"));
        var o = wpAd.utils.getCookie("rplampr"),
            a = wpAd.utils.getCookie("wp_gdpr");
        if (o && t) {
            var n = t.split("|")[1],
                i = o.split("|")[1];
            n === i && (o = t)
        }
        if (e.adMeasurement) e.isHeaderBidOn = "off", window.document.body.classList.add("ad-measurement-only");
        else try {
            var r = wpAd.utils.getCookie("wapo_actmgmt").match(/(^|\|)(NOADS:1)(\||$)/);
            if (r && r.length > 1) {
                var s = r[2].split(":")[1];
                "1" === s && (e.isHeaderBidOn = "off", window.document.body.classList.add("ad-measurement-only"))
            }
        } catch (c) {
            console.log("--Zeus DEBUG-- : AFC Off.")
        }
        if (o) {
            if (o.indexOf("Premium") > -1) return void(e.noAds = !0);
            o = o.split("|"), o.length && o[0].indexOf("0") > -1 && (e.onTest = o[0].replace(/0/g, ""))
        }
        a && (a = a.split("|"), a.length && "1" === a[0] && (e.gdpr_consent = !1, a[1] && "1" === a[1] && (e.gdpr_consent = !0)))
    }

    function p() {
        var e = window.wpAd.params || {};
        s(e), c(e), window.wpAd.params = e
    }

    function d() {
        if (p(), !window.wpAd.params.noAds) {
            if (void 0 === wpAd.params.gdpr_consent || "on" === wpAd.params.isHeaderBidOn) {
                var n = new o;
                n.init()
            }
            wpAd.meta_data = a(), wpAd.keyValueGenerator = {
                keyvaluesForPage: e,
                getKeyValuesForSlot: t
            }
        }
    }
    window.wpAd = window.wpAd || {}, d(), wpAd.keyValueReinitial = d
}(window);
! function() {
    "use strict";
    window.zeus_hb = window.zeus_hb || {}, wpAd = wpAd || {}, wpAd.hbPartner = wpAd.hbPartner || {}, window.zeus_hb.fetchBids = function(e, t, n, r) {
        return wpAd.utils.ajaxRequest(e, t, n).then(function(e) {
            r(e)
        })["catch"](function(e) {
            console.log("--Zeus DEBUG-- : zeus hb ajax timeout: ", e.message)
        })
    }, window.zeus_hb.renderAd = function(e, t) {
        if (e && wpAd.hbPartner[t.hbPartner] && wpAd.hbPartner[t.hbPartner].getCreative) {
            var n = wpAd.hbPartner[t.hbPartner].getCreative(t);
            e.open(), e.write(n), e.close()
        }
    }
}();
! function() {
    "use strict";
    var e = wpAd.logger || window.console;
    window.oxhbjs = window.oxhbjs || {};
    var n = {},
        o = function(e) {
            var n = 1e3 * e;
            return n <= 5e3 ? Math.round(n / 10) : n > 5e3 && n <= 2e4 ? 5 * Math.round(n / 50) : n > 2e4 && n < 1e5 ? 50 * Math.round(n / 500) : n >= 1e5 ? 1e4 : 0
        },
        t = function(e, t) {
            if (e.ads.count)
                for (var a = e.ads.ad, i = 0; i < a.length; i++) {
                    var r = a[i];
                    if (r.html && r.pub_rev) {
                        var s = {},
                            d = r.creative[0],
                            u = o(Math.round(parseInt(r.pub_rev, 10) / 1e3 * 1e3) / 1e3),
                            h = r.adunitid,
                            c = t[h].id;
                        s.oxb = d.width + "x" + d.height + "_" + u, s.oxb_bid_id = c, t[h].setTargeting(s);
                        var w = r.html;
                        e.ads.pixels && (w += wpAd.utils.createTrackingPixeliFrame(e.ads.pixels)), n[c] = w
                    }
                }
        };
    window.oxhbjs.getBids = function(n) {
        var o = "//u.openx.net/w/1.0/arj",
            a = {};
        a.auid = [], a.aus = [], a.ph = "13efd075-f2e8-4a3c-bbe1-af728a89a00b", a.bc = "hb_dyn_wapo", a.be = "1", a.ch = "UTF-8", a.ju = encodeURIComponent(window.location.href), a.res = window.screen.width + "x" + window.screen.height + "x" + window.screen.colorDepth, a.tz = (new Date).getTimezoneOffset(), a.nocache = (new Date).valueOf();
        for (var i = 0; i < n.attrs.length; i++) {
            var r = n.attrs[i];
            a.auid.push(r.oxAdUnitId), a.aus.push(r.sizes)
        }
        a.aus = a.aus.join("|");
        var s = Object.keys(a),
            d = [];
        for (i = 0; i < s.length; i++) {
            var u = a[s[i]];
            Array.isArray(u) && (u = u.join(",")), u = s[i] + "=" + u, d.push(u)
        }
        return o += "?" + d.join("&"), wpAd.utils.ajaxRequest("GET", o, null).then(function(e) {
            t(e, n.slots)
        })["catch"](function(n) {
            e.log("--Zeus DEBUG-- :oxhb ajax timeout: ", n.message)
        })
    }, window.oxhbjs.showAd = function(e, o, t) {
        if (o && t) {
            var a = t.document,
                i = o.oxb_bid_id[0];
            a.open(), a.write(n[i]), a.close()
        }
    }
}();
! function() {
    "use strict";
    var t = wpAd.logger || window.console;
    window.pbjs = window.pbjs || {};
    var e = {},
        n = function(t, n) {
            if (t.tags && t.tags.length)
                for (var a = 0; a < t.tags.length; a++) {
                    var i = t.tags[a].ads;
                    if (!t.tags[a].nobid && i && i.length) {
                        var s = i[0];
                        if (s.content_source && s.ad_type && s.cpm) {
                            var o = s[s.content_source][s.ad_type],
                                r = {};
                            r.hb_size_appnexus = o.width + "x" + o.height;
                            var d = Math.round(100 * (s.cpm + 1e-5)) / 100;
                            r.hb_pb_appnexus = JSON.stringify(d), r.hb_adid_appnexus = t.tags[a].auction_id, s.deal_id && (r.hb_deal_appnexus = s.deal_id), n.ads[a].setTargeting(r);
                            for (var c = o.content, u = s[s.content_source].trackers[0].impression_urls, p = 0; p < u.length; p++) c += wpAd.utils.createTrackingPixelHTML(u[p]);
                            e[t.tags[a].auction_id] = c
                        }
                    }
                }
        };
    window.pbjs.fetchBids = function(e, a) {
        return wpAd.utils.ajaxRequest("POST", "//ib.adnxs.com/ut/v3/prebid", e).then(function(t) {
            n(t, a)
        })["catch"](function(e) {
            t.log("--Zeus DEBUG-- : prebid ajax timeout: ", e.message)
        })
    }, window.pbjs.renderAd = function(t, n) {
        if (t && n) {
            var a = e[n];
            t.open(), t.write(a), t.close()
        }
    }
}();
! function() {
    "use strict";

    function t(t) {
        if (t.seatbid && t.seatbid.length)
            for (var r = 0; r < t.seatbid.length; r++) {
                var e = t.seatbid[r];
                if (e.bid && e.bid.length) {
                    var n = e.bid[0],
                        a = {};
                    a.hb_size = n.w + "x" + n.h;
                    var s = Math.round(100 * (n.price + 1e-5)) / 100;
                    a.hb_pb = s.toFixed(3), a.trx_bidder = "trustx";
                    var o = e.seat + "_" + Date.now();
                    a.hb_adid_trustx = o, d[n.auid].setTargeting(a), i[o] = n.adm
                }
            }
    }

    function r(t) {
        for (var r = [], e = 0; e < t.length; e++)
            if (t[e].getSize.length) {
                var i = t[e].id;
                if (wpAd.hbConfig && wpAd.hbConfig[i] && wpAd.hbConfig[i].trustx) {
                    var n = wpAd.hbConfig[i].trustx;
                    d[n] = t[e], r.push(n)
                }
            } return r
    }
    var e = wpAd.logger || window.console;
    wpAd.hbPartner = wpAd.hbPartner || {}, wpAd.hbPartner.trustx = wpAd.hbPartner.trustx || {}, wpAd.params = wpAd.params || {}, window.zeus_hb = window.zeus_hb || {};
    var d = {},
        i = {};
    wpAd.hbPartner.trustx.fetchBids = function(e) {
        var d = {},
            i = "//sofia.trustx.org/hb",
            n = r(e);
        if (n.length) {
            d.u = encodeURIComponent(window.location.href), d.auids = encodeURIComponent(n.join(",")), d.gdpr_applies = wpAd.params.gdpr_consent ? "1" : "0", d.wtimeout = wpAd.hb_timeout;
            for (var a = Object.keys(d), s = [], o = 0; o < a.length; o++) {
                var h = d[a[o]];
                Array.isArray(h) && (h = h.join(",")), h = a[o] + "=" + h, s.push(h)
            }
            i += "?" + s.join("&"), window.zeus_hb.fetchBids("GET", i, null, t)
        }
    }, wpAd.hbPartner.trustx.getCreative = function(t) {
        var r = null;
        return t.hb_adid_trustx && i[t.hb_adid_trustx] && (e.log("--Zeus DEBUG-- : creative " + t.hb_adid_trustx + " rendered"), r = i[t.hb_adid_trustx], delete i[t.hb_adid_trustx]), r
    }
}();
! function() {
    "use strict";

    function loadScript(i) {
        var t, n, o, e = i.length,
            a = window.document,
            s = a && (a.head || a.getElementsByTagName("head")[0]);
        for (n = 0; n < e; n++) t = i[n], o = document.createElement("script"), o.type = "text/javascript", o.async = !0, o.src = t, s.appendChild(o)
    }

    function loadGPTScript() {
        loadScript(["//www.googletagservices.com/tag/js/gpt.js"])
    }

    function initWithHB() {
        enableProgrammaticScripts = !0;
        var i = ["//c.amazon-adsystem.com/aax2/apstag.js", "//js-sec.indexww.com/ht/htw-wapo.js", "//cdn.adsafeprotected.com/iasPET.1.js", "//z.moatads.com/washpostprebidheader710741008563/yi.js", "//static.criteo.net/js/ld/publishertag.standalone.js"];
        initA9(), initIAS(), initOpenx(), initApnx(), initCriteo(), loadScript(i), loadGPTScript(), setTimeout(function() {
            wpAd.hb_timeout = 1e3
        }, 2e3)
    }

    function loadMalwareBlocker() {
        var i = "//scripts.webcontentassessor.com/scripts/9d57e7ee386d4862ec551bf24731dadcab8a37c6f6580c8428470f6489c29264";
        wpAd.params.tmt_dev && (i = "//scripts.dev.themediafilter.com/scripts/9d57e7ee386d4862ec551bf24731dadcab8a37c6f6580c8428470f6489c29264"), loadScript([i])
    }

    function init() {
        (wpAd.params.enable_tmt || "b" === wpAd.params.onTest) && loadMalwareBlocker(), void 0 === wpAd.params.gdpr_consent ? "off" === wpAd.params.isHeaderBidOn ? loadGPTScript() : initWithHB() : wpAd.params.gdpr_consent && "on" === wpAd.params.isHeaderBidOn ? initWithHB() : loadGPTScript()
    }

    function initA9() {
        function i(i, n) {
            window[t]._Q.push([i, n])
        }
        var t = "apstag";
        if (!window[t]) {
            window[t] = {
                init: function() {
                    i("i", arguments)
                },
                fetchBids: function() {
                    i("f", arguments)
                },
                setDisplayBids: function() {},
                _Q: []
            };
            var n = "washingtonpost.com" === window.commercialNode ? "" : window.commercialNode;
            n = n.split("/")[0], window[t].init({
                pubID: "3041",
                adServer: "googletag",
                videoAdServer: "DFP",
                bidTimeout: wpAd.hb_timeout,
                params: {
                    si_section: n
                }
            })
        }
    }

    function initIAS() {
        var i = "__iasPET";
        window[i] || (window[i] = {
            pubId: "8221",
            queue: [],
            iasDataHandler: function() {
                window.__iasPET.setTargetingForGPT()
            }
        })
    }

    function initOpenx() {
        window.oxhbjs = window.oxhbjs || {}, window.oxhbjs.getBids = window.oxhbjs.getBids || function(i) {
            i && console.log("no oxhbjs initialized")
        }
    }

    function initApnx() {
        window.pbjs = window.pbjs || {}, window.pbjs.fetchBids = window.pbjs.fetchBids || function(i, t, n) {
            t === !1 && n()
        }
    }

    function initCriteo() {
        if (window.wpAd.utils.areCookiesAvailable()) {
            var fastBid = localStorage.getItem("criteo_fast_bid_standalone");
            fastBid && eval(fastBid)
        }
        window.Criteo = window.Criteo || {}, window.Criteo.events = window.Criteo.events || []
    }

    function IASOps(i) {
        return new Promise(function(t) {
            if (window.__iasPET && i.length) {
                var n = setTimeout(function() {
                    t("IAS timeout")
                }, 1e3);
                window.__iasPET.queue.push({
                    adSlots: i,
                    timeout: wpAd.hb_timeout,
                    dataHandler: function() {
                        window.__iasPET.iasDataHandler(), clearTimeout(n), t("IAS done")
                    }
                })
            } else t("No IAS setting")
        })
    }

    function IASDataTransform(i) {
        var t = i.getSize,
            n = t.indexOf("fluid");
        return t = n > -1 ? t[n] = [1, 8] : t, {
            adSlotId: i.id,
            size: t,
            adUnitPath: i.getSlot
        }
    }

    function A9Ops(i) {
        return new Promise(function(t) {
            window.apstag && i.ids.length ? window.apstag.fetchBids({
                slots: i.attrs,
                timeout: wpAd.hb_timeout
            }, function() {
                googletag.cmd.push(function() {
                    apstag.setDisplayBids(i.ids), t(i.ids)
                })
            }) : t("No A9 Slots found.")
        })
    }

    function a9DataTransform(i, t) {
        i.attrs.push({
            slotID: t.id,
            sizes: t.getSize,
            slotName: t.getSlot + "/" + t.id
        }), i.ids.push(t.id)
    }

    function apnxOps(i) {
        return new Promise(function(t) {
            i.tags.length ? window.pbjs.fetchBids(JSON.stringify({
                tags: i.tags
            }), i).then(t("prebid set bids")) : t("No prebid slot for bids")
        })
    }

    function apnxDataTransform(i, t) {
        var n = [],
            o = t.getSize;
        if (o.length && wpAd.hbConfig && wpAd.hbConfig[t.id] && wpAd.hbConfig[t.id].apnx) {
            for (var e = 0; e < o.length; e++) "fluid" !== o[e] && n.push({
                width: o[e][0],
                height: o[e][1]
            });
            i.tags.push({
                adTypes: ["banner", "video"],
                id: wpAd.hbConfig[t.id].apnx,
                prebid: !0,
                sizes: n,
                primary_size: n[0]
            }), i.ads.push(t)
        }
    }

    function openXOps(i) {
        return new Promise(function(t) {
            i.attrs.length ? window.oxhbjs.getBids(i).then(t("openx set bids")) : t("No openx bids")
        })
    }

    function openXDataTransform(i, t) {
        if (wpAd.hbConfig && wpAd.hbConfig[t.id] && wpAd.hbConfig[t.id].openx) {
            for (var n = [], o = t.getSize, e = 0; e < o.length; e++) "fluid" !== o[e] && n.push(o[e][0] + "x" + o[e][1]);
            i.attrs.push({
                sizes: n.join(","),
                oxAdUnitId: wpAd.hbConfig[t.id].openx
            }), i.slots[wpAd.hbConfig[t.id].openx] = t
        }
    }

    function criteoOps(i) {
        return new Promise(function(t) {
            i.units.length && window.Criteo.SetLineItemRanges && window.Criteo.RequestBids ? window.Criteo.events.push(function() {
                window.Criteo.SetLineItemRanges("0..5:0.01;5..20:0.05;20..50:0.50;50..100:1"), window.Criteo.RequestBids({
                    placements: i.units
                }, function() {
                    window.Criteo.SetDFPKeyValueTargeting(), t(i.units)
                }, wpAd.hb_timeout)
            }) : t("no slots for criteo bidding")
        })
    }

    function criteoDataTransform(i, t) {
        if (wpAd.hbConfig && wpAd.hbConfig[t.id] && wpAd.hbConfig[t.id].criteo) {
            var n = [],
                o = t.getSize,
                e = wpAd.hbConfig[t.id].criteo;
            e = Array.isArray(e) ? e : [e];
            for (var a = 0; a < o.length; a++) "fluid" !== o[a] && n.push(o[a][0] + "x" + o[a][1]);
            for (a = 0; a < e.length; a++) i.units.push({
                slotid: t.id,
                zoneid: e[a]
            });
            i.slots.push(t)
        }
    }

    function moatOps() {
        return new Promise(function(i) {
            window.moatPrebidApi && "function" == typeof window.moatPrebidApi.slotDataAvailable && window.moatPrebidApi.slotDataAvailable() ? (window.moatPrebidApi.setMoatTargetingForAllSlots(), i("Moat done")) : i("No moat api available")
        })
    }

    function DFPOps(i) {
        if (i.length) {
            var t = window.headertag && window.headertag.apiReady ? window.headertag : googletag;
            t.pubads().refresh(i, {
                changeCorrelator: !1
            })
        }
    }
    if (!(window.wpAd && window.wpAd.params && window.wpAd.params.noAds)) {
        var console = wpAd.logger || window.console,
            enableProgrammaticScripts = !1;
        wpAd.exeProgrammticProcess = function(i) {
            if (i.length) {
                var t, n = [],
                    o = [],
                    e = {
                        attrs: [],
                        ids: []
                    },
                    a = {
                        attrs: [],
                        slots: {}
                    },
                    s = {
                        tags: [],
                        ads: []
                    },
                    d = {
                        units: [],
                        slots: []
                    };
                i.forEach(function(i) {
                    t = i.childElementCount ? i.getGPTSlot() : i.buildGPT(), n.push(t), googletag.display(i.id), i.getSize.length && (window.__iasPET && o.push(IASDataTransform(i)), window.apstag && a9DataTransform(e, i), window.oxhbjs && openXDataTransform(a, i), window.pbjs && apnxDataTransform(s, i), window.Criteo && criteoDataTransform(d, i))
                }), enableProgrammaticScripts ? Promise.all([IASOps(o), moatOps(n), A9Ops(e), openXOps(a), apnxOps(s), criteoOps(d)]).then(function() {
                    DFPOps(n)
                }) : DFPOps(n)
            }
        }, init()
    }
}();
! function() {
    "use strict";

    function e(e) {
        var t = e.getBoundingClientRect();
        if (t.width > 0 || t.height > 0 && "hidden" != e.style.visibility) {
            var n = e.childElementCount ? wpAd.loadingBuffer.refresh : wpAd.loadingBuffer.init,
                i = window.innerHeight || document.documentElement.clientHeight;
            return t.top >= 0 - n && t.top <= i + n
        }
        return !1
    }

    function t() {
        var t = wpAd.availabeAds ? wpAd.availabeAds.sraAds : null;
        if (t)
            for (var n in t)
                if (t.hasOwnProperty(n) && t[n]) {
                    var i = t[n],
                        o = !1;
                    for (var a in i)
                        if (e(i[a])) {
                            o = !0;
                            break
                        } o && (wpAd.exeProgrammticProcess(i), t[n] = void 0)
                }
    }

    function n() {
        var t = wpAd.availabeAds ? wpAd.availabeAds.async : null;
        if (t && Object.keys(t).length > 0) {
            var n = [];
            for (var i in t) {
                var o = t[i];
                o && e(o) && (n.push(o), t[i] = void 0)
            }
            n.length && wpAd.exeProgrammticProcess(n)
        }
    }

    function i() {
        document.hasFocus() && (t(), n())
    }

    function o() {
        setInterval(i, 50)
    }

    function a(e) {
        function t(e, t) {
            var n = e / (t / 15),
                i = setInterval(function() {
                    window.scrollY < e ? window.scrollBy(0, n) : clearInterval(i)
                }, 15)
        }
        var n = document.getElementById(e),
            i = document.createElement("P"),
            o = document.createElement("SPAN");
        i.id = "fullpage_keepRead", i.style.cssText = "display: block;  position: relative;  text-align: right; font: normal 20px FranklinITCProLight, sans-serif;  font-weight: bold;color: black;text-decoration: none;cursor:pointer; width:100%;", i.innerHTML = "Keep Reading", o.style.cssText = "width: 10px; height: 10px; border-right: 5px solid black; border-top: 5px solid black; transform: rotate(135deg); display: inline-block; margin-left:5px;", i.appendChild(o), i.addEventListener("click", function() {
            var e = n.offsetTop + n.getBoundingClientRect().height;
            t(e, 1e3)
        }), n.insertBefore(i, n.firstChild)
    }

    function s(e) {
        (e.id.indexOf("bigbox") > -1 || e.id.indexOf("inline") > -1) && e.clientHeight > 250 && e.isRefresh && (l.log("--Zeus DEBUG-- : " + e.id + " refresh disabled"), e.setAttribute("data-refresh", "off"))
    }

    function r(e, t) {
        var n = e.slot,
            i = n.getSlotElementId(),
            o = document.getElementById(i);
        if (s(o), o.isRefresh) {
            l.log("--Zeus DEBUG-- : " + i + " is on the viewport. Refreshing in: " + t);
            var a = n.getTargeting("ctr");
            a[0] && a[0].indexOf("refresh") === -1 && (a[0] += "_refresh", a.push("refresh"), n.setTargeting("ctr", a)), setTimeout(function() {
                wpAd.availabeAds.async[i] = o
            }, t)
        }
    }

    function d() {
        var e = (new Date).getTime();
        window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad(), googletag.pubads().enableSingleRequest(), wpAd.params.gdpr_consent === !0 && (l.log("--Zeus DEBUG-- : consent mode, setting personalized ads on the ad call."), googletag.pubads().setRequestNonPersonalizedAds(0)), wpAd.params.gdpr_consent === !1 && (l.log("--Zeus DEBUG-- : no consent mode, setting non-personalized ads on the ad call."), googletag.pubads().setRequestNonPersonalizedAds(1)), googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                var n = t.slot.getSlotElementId(),
                    i = document.getElementById(n),
                    o = (new Date).getTime();
                l.log("--Zeus DEBUG-- : " + n + " rendered at " + (o - e) + "ms after the script loaded."), i && t.size && (i.style.width = t.size[0] > 1 ? t.size[0] + "px" : null, i.style.minHeight = t.size[1] ? null : "250px"), t.size && 600 === t.size[1] && "slug_mob_bigbox" == n && a(n)
            });
            var t = wpAd.params.onTest && wpAd.refreshAdsConfig[wpAd.params.onTest] ? wpAd.refreshAdsConfig[wpAd.params.onTest] : wpAd.refreshAdsConfig["default"];
            if (t.enable) {
                var n = parseInt(t.frequency, 10);
                n = isNaN(n) ? 6e4 : 1e3 * n, googletag.pubads().addEventListener("impressionViewable", function(i) {
                    if (t.cap) {
                        var o = (new Date).getTime();
                        if ((o - e) / 1e3 > t.cap) return
                    }
                    r(i, n)
                })
            }
            if (wpAd.keyValueGenerator.keyvaluesForPage) {
                var i = wpAd.keyValueGenerator.keyvaluesForPage(wpAd.meta_data);
                wpAd.utils.setTargeting(i.targeting, googletag.pubads()), wpAd.utils.setCategoryExclusion(i.categoryExclusions, googletag.pubads())
            }
            googletag.enableServices(), o()
        })
    }
    window.wpAd = window.wpAd || {};
    var l = wpAd.logger || window.console;
    window.wpAd && window.wpAd.urlParam && window.wpAd.urlParam.noAds || d()
}();
! function() {
    "use strict";

    function t() {
        return window.Reflect ? Reflect.construct(HTMLElement, [], this.constructor) : HTMLElement.call(this) || this
    }

    function e(t) {
        return r(t), t.getSlot ? (wpAd.availabeAds = wpAd.availabeAds ? wpAd.availabeAds : {
            sraAds: {},
            async: {}
        }, void(a(t) || (wpAd.availabeAds.async[t.id] = t))) : void d.log("--Zeus DEBUG-- Couldn't render the closed spot: " + t.id)
    }

    function r(t) {
        if (!wpAd.keyValueGenerator) return void d.warn("--Zeus DEBUG-- Couldn't find keyvalues for the " + t.id);
        var e = t.id.replace(/^slug_/gm, ""),
            r = e.replace(/_(\d+)/gm, "_*"),
            o = {},
            n = {};
        if (wpAd.inventory.hasOwnProperty(e)) o = wpAd.inventory[e];
        else {
            if (!wpAd.inventory.hasOwnProperty(r)) return d.warn("--Zeus DEBUG-- Couldn't find configuration for the " + e), void(t.style.cssText = "display:none");
            o = wpAd.inventory[r]
        }
        return i(e, t) ? (o = JSON.parse(JSON.stringify(o)), o.keyvalues ? o.keyvalues.pos || (o.keyvalues.pos = e) : (o.keyvalues = {}, o.keyvalues.pos = e), n = wpAd.keyValueGenerator.getKeyValuesForSlot(o), t.setAttribute("data-slot", wpAd.meta_data.commercialNode), t.setAttribute("data-json", JSON.stringify(n)), t.setAttribute("data-size", JSON.stringify(o.size)), void(s(o) && t.setAttribute("data-refresh", o.refresh.status))) : (d.warn("--Zeus DEBUG-- Ad spot is closed: " + t.id), void(t.style.cssText = "display:none"))
    }

    function s(t) {
        return void 0 !== t.refresh && !wpAd.params.isDisableRefresh && t.refresh.exception && t.refresh.exception.indexOf(wpAd.meta_data.commercialNode) < 0
    }

    function i(t, e) {
        if (o(t, e)) return !0;
        if (wpAd.posOnCommericalNode) {
            var r, s, i, n = wpAd.posOnCommericalNode[wpAd.meta_data.commercialNode];
            if (n) {
                var a = n.pos[t];
                return void 0 === a || (a && a.start && a.end ? (r = new Date, s = new Date(a.start), i = new Date(a.end), r >= s && r <= i) : a && a.start ? (r = new Date, s = new Date(a.start), r >= s) : a === !0)
            }
            return !0
        }
        return !0
    }

    function o(t, e) {
        if (wpAd.params.demoAds) {
            var r, s = wpAd.params.demoAds.split(";");
            for (r in s)
                if (s[r] === t) return !0;
            return e.style.cssText = "display:none", !1
        }
        return !1
    }

    function n(t) {
        var e = "";
        e = "width:" + t.getAttribute("width") + "px; margin:auto;", t.style.cssText += e, t.setAttribute("aria-hidden", "true")
    }

    function a(t) {
        if (wpAd.sraBundles)
            for (var e in wpAd.sraBundles)
                if (wpAd.sraBundles.hasOwnProperty(e) && wpAd.sraBundles[e].indexOf(t.id) > -1) return wpAd.availabeAds.sraAds[e] ? wpAd.availabeAds.sraAds[e].indexOf(t) < 0 && wpAd.availabeAds.sraAds[e].push(t) : wpAd.availabeAds.sraAds[e] = [t], !0;
        return !1
    }
    if (!(window.wpAd && window.wpAd.params && window.wpAd.params.noAds)) {
        var d = wpAd.logger || window.console;
        window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [], t.prototype = Object.create(HTMLElement.prototype, {
            getSlot: {
                get: function() {
                    return !!this.getAttribute("data-slot") && wpAd.dfpNode + this.getAttribute("data-slot")
                }
            },
            getSize: {
                get: function() {
                    var t = this.getAttribute("data-size");
                    if (t && t.length) return JSON.parse(t)
                }
            },
            GPTSlot: {
                get: function() {
                    return !!this.getSlot && (this.getSize && this.getSize.length ? googletag.defineSlot(this.getSlot, this.getSize, this.id) : googletag.defineOutOfPageSlot(this.getSlot, this.id))
                }
            },
            isManualRender: {
                get: function() {
                    return "true" === this.getAttribute("data-manual-render")
                }
            },
            targeting: {
                get: function() {
                    var t = this.getAttribute("data-json");
                    return !!t && JSON.parse(t).targeting
                }
            },
            categoryExclusions: {
                get: function() {
                    var t = this.getAttribute("data-json");
                    return !!t && JSON.parse(t).categoryExclusions
                }
            },
            isRefresh: {
                get: function() {
                    return "on" === this.getAttribute("data-refresh")
                }
            }
        }), t.prototype.constructor = t, Object.setPrototypeOf(t, HTMLElement), t.prototype.buildGPT = function() {
            var t = this.GPTSlot;
            return t ? (this.targeting && wpAd.utils.setTargeting(this.targeting, t), this.categoryExclusions && wpAd.utils.setCategoryExclusion(this.categoryExclusions, t), t.setCollapseEmptyDiv(!0, !0), t.addService(googletag.pubads()), t) : null
        }, t.prototype.getGPTSlot = function() {
            for (var t = googletag.pubads().getSlots(), e = 0; e < t.length; e++)
                if (t[e].getSlotElementId() === this.id) return t[e];
            return null
        }, t.prototype.render = function() {
            return this.getSlot ? void wpAd.exeProgrammticProcess([this]) : void d.warn("--Zeus DEBUG-- Couldn't render the closed spot: " + this.id)
        }, t.prototype.reRender = function() {
            var t = this;
            googletag.cmd.push(function() {
                d.log("--Zeus DEBUG-- re-render " + t.id);
                var e = t.getGPTSlot();
                e && (googletag.destroySlots([e]), r(t), t.render())
            })
        }, t.prototype.connectedCallback = function() {
            n(this), e(this)
        }, t.prototype.disconnectedCallback = function() {
            d.log("--Zeus DEBUG-- Found removed element " + this.id);
            var t = this;
            googletag.cmd.push(function() {
                var e = t.getGPTSlot();
                e && (googletag.destroySlots([e]), d.log("--Zeus DEBUG-- Destory slots" + e.id))
            })
        }, t.prototype.attributeChangedCallback = function(t, e, r) {
            if ("data-refresh" === t && "off" === e && "on" === r && !wpAd.availabeAds.async[this.id]) {
                var s = this.getGPTSlot();
                if (s) {
                    var i = s.getTargeting("ctr");
                    i[1] && i[1].indexOf("refresh") === -1 && (i[1] += "_refresh", i.push("refresh"), s.setTargeting("ctr", i))
                }
                wpAd.availabeAds.async[this.id] = this
            }
        }, t.prototype.setTargeting = function(t) {
            if (t && "[object Object]" == Object.prototype.toString.call(t)) {
                var e = this.targeting || {},
                    r = this.getGPTSlot();
                for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s], r && r.setTargeting(s, t[s]));
                this.setAttribute("data-json", JSON.stringify({
                    targeting: e
                }))
            }
        }, window.customElements.define("wp-ad", t)
    }
}();
! function(e) {
    "use strict";

    function n() {
        var n = e.getElementById("article-body"),
            o = e.getElementById("slug_fixedBottom");
        o ? o.reRender() : t(), n && i(n)
    }

    function t() {
        if (wpAd.browserInfo && wpAd.browserInfo.isMobile) {
            var n = e.createElement("div"),
                t = e.createElement("WP-AD");
            t.id = "slug_fixedBottom", n.style.cssText = "position: fixed; bottom:0; left:0; width:100%; background-color:#eee; text-align:center; z-index:5; padding-top:1px;", n.appendChild(t), e.body.appendChild(n)
        }
    }

    function i(e) {
        var n, t, i, r, l, s = Array.prototype.slice.call(e.querySelectorAll("article>p")),
            u = wpAd.browserInfo.isMobile ? c.mobile : c.desktop,
            f = u.adSpacing["default"],
            g = u.defaultPos,
            m = "",
            w = s.length - 1,
            b = 0,
            A = 0,
            C = 0;
        for (p = 0, wpAd.params.onTest && u.adSpacing[wpAd.params.onTest] && (f = u.adSpacing[wpAd.params.onTest]), n = 0; n < w; n++) i = s[n], t = s.slice(n + 1, w), l = i.textContent.length, l && (b++, A += l), a(i) && b >= f.minParaCount && C < f.totalAdCount && A >= (C ? f.minCharCount : f.firstAdOnChar) && (m = C ? g + "_" + (C + 1) : g, r = d(m), o(t) && (i = s[w], n = w), i.nextElementSibling ? i.parentNode.insertBefore(r, i.nextElementSibling) : i.parentNode.appendChild(r), C++, b = 0, A = 0)
    }

    function o(e) {
        return e.reduce(function(e, n, t, i) {
            return e >= 400 ? (i.splice(0), e) : e += n.textContent.length
        }, 0) < 400
    }

    function a(e) {
        return !(!e.innerHTML.trim() || !e.offsetHeight || ":" === e.textContent.slice(-1) || s(e)) && r(e)
    }

    function r(e) {
        var n = e.nextElementSibling,
            t = 0,
            i = l(e);
        if (c.spacingTags.indexOf(n.tagName) > -1 && (t = l(n), p = t > p ? t : p), p) {
            if (i - c.bufferSpace < p) return !1;
            p = 0
        }
        for (n = n.nextElementSibling; n && n.offsetTop - i < c.bufferSpace;) {
            if (c.spacingTags.indexOf(n.tagName) > -1) return !1;
            n = n.nextElementSibling
        }
        return !0
    }

    function d(n) {
        var t = e.createElement("WP-AD");
        return t.id = "slug_" + n, t.className = "wp-inline-bb pb-centered-bb", t.style.cssText += "margin:15px auto;", t
    }

    function l(e) {
        return e.offsetTop + e.getBoundingClientRect().height
    }

    function s(e) {
        return c.skipClassList.some(function(n) {
            return n === e.className
        })
    }
    if (window.wpAd = window.wpAd || {}, !(window.wpAd && window.wpAd.params && window.wpAd.params.noAds || window.wpAd.disableInlineAds)) {
        var p, u = {
                mobile: {
                    defaultPos: "mob_bigbox",
                    adSpacing: {
                        "default": {
                            firstAdOnChar: 750,
                            minCharCount: 750,
                            minParaCount: 3,
                            totalAdCount: 4
                        }
                    }
                },
                desktop: {
                    defaultPos: "inline_bb",
                    adSpacing: {
                        "default": {
                            firstAdOnChar: 1e3,
                            minCharCount: 1e3,
                            minParaCount: 3,
                            totalAdCount: 4
                        }
                    }
                },
                bufferSpace: 100,
                spacingTags: "DIV,IFRAME,TABLE,BLOCKQUOTE",
                skipClassList: ["interstitial-link", "pb-f-page-newsletter-inLine", "inline-content", "voraciously-recipe-ingredient", "voraciously-recipe-step", "voraciously-recipe-nutrition"]
            },
            c = wpAd.inlineAdsConfig ? wpAd.inlineAdsConfig : u;
        "loading" !== e.readyState ? n() : e.addEventListener("DOMContentLoaded", n, !1)
    }
}(document);