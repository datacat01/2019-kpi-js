self.System = self.System || (() => {
    const e = {},
        t = {},
        n = e => e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js"),
        s = {
            register(o, i) {
                const r = n(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                    a = {},
                    c = i((e, t) => t ? a[e] = t : Object.assign(a, e), s);
                e[r] = Promise.all(o.map((e, t) => s.import(n(e)).then(c.setters[t]))).then(() => (c.execute(), a)).catch(e => {
                    throw e.message = `evaluating module ${r}: ${e.message}`, e
                }), t[r] && (t[r](e[r]), delete t[r])
            },
            import: n => e[n] || (e[n] = new Promise((e, s) => {
                const o = setTimeout(() => {
                    s(new Error(`could not resolve ${n}`))
                }, 1e4);
                t[n] = (t => {
                    clearTimeout(o), e(t)
                })
            }))
        };
    return s
})(), System.register(["./frameworks.js"], function(e, t) {
    "use strict";
    var n, s, o, i, r, a, c, l, u, d, m, f, g, p, h, j, v, b, L, y, E, w, T, k, A, M, S, x, H, C, q, I, _, $, R, N, D, B, P, F, O, U, z, V, W, K, J, G, X, Q, Y, Z, ee, te, ne, se, oe, ie, re, ae, ce, le, ue, de, me, fe, ge, pe, he, je, ve, be, Le, ye, Ee, we, Te, ke, Ae, Me, Se, xe, He, Ce, qe, Ie, _e, $e, Re, Ne, De, Be, Pe, Fe, Oe, Ue, ze, Ve, We, Ke, Je, Ge, Xe, Qe, Ye, Ze, et, tt, nt, st, ot, it, rt, at, ct, lt, ut, dt, mt, ft, gt, pt, ht, jt, vt, bt, Lt, yt, Et, wt, Tt, kt, At, Mt, St;
    return {
        setters: [function(e) {
            n = e.y, s = e.e, o = e.l, i = e.a, r = e.b, a = e.c, c = e.t, l = e.q, u = e.f, d = e.m, m = e.k, f = e.z, g = e.A, p = e.p, h = e.B, j = e.o, v = e.h, b = e.C, L = e.i, y = e.D, E = e.E, w = e.F, T = e.j, k = e.r, A = e.G, M = e.H, S = e.I, x = e.J, H = e.K, C = e.L, q = e.x, I = e.M, _ = e.N, $ = e.g, R = e.O, N = e.P, D = e.Q, B = e.R, P = e.S, F = e.T, O = e.U, U = e.V, z = e.u, V = e.n, W = e.W, K = e.X, J = e.Y, G = e.Z, X = e._, Q = e.$, Y = e.a0, Z = e.a1, ee = e.a2, te = e.a3, ne = e.a4, se = e.a5, oe = e.a6, ie = e.a7, re = e.a8, ae = e.a9, ce = e.aa, le = e.ab, ue = e.ac, de = e.ad, me = e.ae, fe = e.af, ge = e.ag, pe = e.ah, he = e.ai, je = e.aj, ve = e.ak, be = e.al, Le = e.am, ye = e.an, Ee = e.ao, we = e.ap, Te = e.d, ke = e.aq, e.ar, Ae = e.as, Me = e.at, Se = e.au, xe = e.av, He = e.aw, Ce = e.ax, qe = e.ay, Ie = e.az, _e = e.aA, $e = e.aB, Re = e.aC, Ne = e.aD, De = e.aE, Be = e.aF, Pe = e.aG, Fe = e.aH, Oe = e.aI, Ue = e.aJ, ze = e.aK, Ve = e.aL, We = e.aM, Ke = e.aN, Je = e.aO, Ge = e.aP, Xe = e.aQ, Qe = e.aR, Ye = e.aS, Ze = e.aT, et = e.aU, tt = e.aV, nt = e.aW, st = e.aX, ot = e.aY, it = e.aZ, rt = e.a_, at = e.s, ct = e.a$, lt = e.b0, ut = e.b1, dt = e.b2, mt = e.b3, ft = e.b4, gt = e.b5, pt = e.b6, ht = e.b7, jt = e.b8, vt = e.b9, bt = e.ba, Lt = e.bb, yt = e.bc, Et = e.bd, wt = e.be, Tt = e.bf, kt = e.bg, At = e.bh, Mt = e.bi, St = e.bj
        }],
        execute: function() {
            var e = -1 / 0,
                t = 1 / 0,
                xt = -.005,
                Ht = -.005,
                Ct = -.01,
                qt = 1,
                It = .9,
                _t = .8,
                $t = .7,
                Rt = .6;

            function Nt(e) {
                return e.toUpperCase() === e
            }

            function Dt(t, n, s, o) {
                for (var i = t.length, r = n.length, a = t.toLowerCase(), c = n.toLowerCase(), l = function(e) {
                        for (var t, n = e.length, s = new Array(n), o = "/", i = 0; i < n; i++) {
                            var r = e[i];
                            "/" === o ? s[i] = It : "-" === o || "_" === o || " " === o ? s[i] = _t : "." === o ? s[i] = Rt : (t = o).toLowerCase() === t && Nt(r) ? s[i] = $t : s[i] = 0, o = r
                        }
                        return s
                    }(n), u = 0; u < i; u++) {
                    s[u] = new Array(r), o[u] = new Array(r);
                    for (var d = e, m = u === i - 1 ? Ht : Ct, f = 0; f < r; f++)
                        if (a[u] === c[f]) {
                            var g = e;
                            u ? f && (g = Math.max(o[u - 1][f - 1] + l[f], s[u - 1][f - 1] + qt)) : g = f * xt + l[f], s[u][f] = g, o[u][f] = d = Math.max(g, d + m)
                        } else s[u][f] = e, o[u][f] = d += m
                }
            }
            var Bt = {
                SCORE_MIN: e,
                SCORE_MAX: t,
                SCORE_GAP_LEADING: xt,
                SCORE_GAP_TRAILING: Ht,
                SCORE_GAP_INNER: Ct,
                SCORE_MATCH_CONSECUTIVE: qt,
                SCORE_MATCH_SLASH: It,
                SCORE_MATCH_WORD: _t,
                SCORE_MATCH_CAPITAL: $t,
                SCORE_MATCH_DOT: Rt,
                score: function(n, s) {
                    var o = n.length,
                        i = s.length;
                    if (!o || !i) return e;
                    if (o === i) return t;
                    if (i > 1024) return e;
                    var r = new Array(o),
                        a = new Array(o);
                    return Dt(n, s, r, a), a[o - 1][i - 1]
                },
                positions: function(t, n) {
                    var s = t.length,
                        o = n.length,
                        i = new Array(s);
                    if (!s || !o) return i;
                    if (s === o) {
                        for (var r = 0; r < s; r++) i[r] = r;
                        return i
                    }
                    if (o > 1024) return i;
                    var a = new Array(s),
                        c = new Array(s);
                    Dt(t, n, a, c);
                    for (var l = !1, u = (r = s - 1, o - 1); r >= 0; r--)
                        for (; u >= 0; u--)
                            if (a[r][u] !== e && (l || a[r][u] === c[r][u])) {
                                l = r && u && c[r][u] === a[r - 1][u - 1] + qt, i[r] = u--;
                                break
                            } return i
                },
                hasMatch: function(e, t) {
                    e = e.toLowerCase(), t = t.toLowerCase();
                    for (var n = e.length, s = 0, o = 0; s < n; s += 1)
                        if (0 === (o = t.indexOf(e[s], o) + 1)) return !1;
                    return !0
                }
            };
            Bt.SCORE_MIN, Bt.SCORE_MAX, Bt.SCORE_GAP_LEADING, Bt.SCORE_GAP_TRAILING, Bt.SCORE_GAP_INNER, Bt.SCORE_MATCH_CONSECUTIVE, Bt.SCORE_MATCH_SLASH, Bt.SCORE_MATCH_WORD, Bt.SCORE_MATCH_CAPITAL, Bt.SCORE_MATCH_DOT, Bt.score, Bt.positions, Bt.hasMatch;
            const Pt = Bt.hasMatch,
                Ft = (e, t, n) => {
                    if (!Pt(e, t)) return -1 / 0;
                    const s = Bt.score(e, t);
                    return s < n ? -1 / 0 : s
                },
                Ot = (e, t, n) => {
                    e.innerHTML = "";
                    let s = 0;
                    for (const o of Bt.positions(t, n)) {
                        "" !== n.slice(s, o) && e.appendChild(document.createTextNode(n.slice(s, o))), s = o + 1;
                        const t = document.createElement("mark");
                        t.textContent = n[o], e.appendChild(t)
                    }
                    e.appendChild(document.createTextNode(n.slice(s)))
                },
                Ut = new WeakMap,
                zt = new WeakMap,
                Vt = new WeakMap,
                Wt = e => {
                    if (!Vt.has(e) && e instanceof HTMLElement) {
                        const t = (e.getAttribute("data-value") || e.textContent || "").trim();
                        return Vt.set(e, t), t
                    }
                    return Vt.get(e) || ""
                };
            class Kt extends HTMLElement {
                connectedCallback() {
                    const e = this.querySelector("ul");
                    if (!e) return;
                    const t = new Set(e.querySelectorAll("li")),
                        n = this.querySelector("input");
                    n instanceof HTMLInputElement && n.addEventListener("input", () => {
                        this.value = n.value
                    });
                    const s = new MutationObserver(e => {
                        let n = !1;
                        for (const s of e)
                            if ("childList" === s.type && s.addedNodes.length)
                                for (const e of s.addedNodes)
                                    if (!t.has(e)) {
                                        const s = Wt(e);
                                        n = n || Pt(this.value, s), t.add(e)
                                    } n && this.sort()
                    });
                    s.observe(e, {
                        childList: !0
                    });
                    const o = {
                        handler: s,
                        items: t,
                        lazyItems: new Map,
                        timer: null
                    };
                    zt.set(this, o)
                }
                disconnectedCallback() {
                    const e = zt.get(this);
                    e && (e.handler.disconnect(), zt.delete(this))
                }
                addLazyItems(e, t) {
                    const n = zt.get(this);
                    if (!n) return;
                    const s = n.lazyItems,
                        o = this.value;
                    let i = !1;
                    for (const r of e) s.set(r, t), i = i || o && Pt(o, r);
                    i && this.sort()
                }
                sort() {
                    const e = Ut.get(this);
                    e && (e.aborted = !0);
                    const t = {
                        aborted: !1
                    };
                    Ut.set(this, t);
                    const s = this.threshold,
                        o = this.mark,
                        i = this.limit,
                        r = this.value,
                        a = zt.get(this);
                    if (!a) return;
                    if (!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                            cancelable: !0,
                            detail: r
                        }))) return;
                    const c = a.items,
                        l = a.lazyItems,
                        u = this.hasAttribute("data-mark"),
                        d = this.querySelector("ul");
                    if (!d) return;
                    const m = [];
                    if (r) {
                        for (const e of c) {
                            const t = Wt(e),
                                n = Ft(r, t, s);
                            n !== -1 / 0 && m.push({
                                item: e,
                                score: n
                            })
                        }
                        for (const e of l) {
                            var f = n(e, 2);
                            const t = f[0],
                                o = f[1],
                                i = Ft(r, t, s);
                            i !== -1 / 0 && m.push({
                                text: t,
                                render: o,
                                score: i
                            })
                        }
                        m.sort((e, t) => t.score - e.score).splice(i)
                    } else {
                        let e = m.length;
                        for (const t of c) {
                            if (e >= i) break;
                            m.push({
                                item: t,
                                score: 1
                            }), e += 1
                        }
                        for (const t of l) {
                            var g = n(t, 2);
                            const s = g[0],
                                o = g[1];
                            if (e >= i) break;
                            m.push({
                                text: s,
                                render: o,
                                score: 1
                            }), e += 1
                        }
                    }
                    requestAnimationFrame(() => {
                        if (t.aborted) return;
                        d.innerHTML = "";
                        let e = 0;
                        const n = () => {
                            if (t.aborted) return;
                            const s = Math.min(m.length, e + 100),
                                i = document.createDocumentFragment();
                            for (let t = e; t < s; t += 1) {
                                const e = m[t];
                                let n = null;
                                if (e.render && e.text) {
                                    const t = e.render,
                                        s = e.text;
                                    n = t(s), c.add(n), Vt.set(n, s), l.delete(s)
                                } else e.item && (n = e.item);
                                n instanceof HTMLElement && (u && Ot(o && n.querySelector(o) || n, u ? r : "", Wt(n)), i.appendChild(n))
                            }
                            if (e = s, d.appendChild(i), s < m.length) requestAnimationFrame(n);
                            else {
                                d.hidden = 0 === m.length;
                                const e = this.querySelector("[data-fuzzy-list-empty]");
                                e && (e.hidden = m.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                    detail: m.length
                                }))
                            }
                        };
                        n()
                    })
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(e) {
                    this.setAttribute("value", e)
                }
                get mark() {
                    return this.getAttribute("data-mark") || ""
                }
                set mark(e) {
                    e ? this.setAttribute("data-mark", !0 === e ? "" : e) : this.removeAttribute("data-mark")
                }
                get threshold() {
                    return Number(this.getAttribute("data-threshold") || 0)
                }
                set threshold(e) {
                    Number.isNaN(e) || this.setAttribute("data-threshold", String(e))
                }
                get limit() {
                    return Number(this.getAttribute("data-limit") || 1 / 0)
                }
                set limit(e) {
                    Number.isNaN(e) || this.setAttribute("data-limit", String(e))
                }
                static get observedAttributes() {
                    return ["value", "data-mark", "data-threshold", "data-limit"]
                }
                attributeChangedCallback(e, t, n) {
                    if (t === n) return;
                    const s = zt.get(this);
                    s && (s.timer && clearTimeout(s.timer), s.timer = setTimeout(() => this.sort(), 100))
                }
            }

            function Jt(e) {
                const t = s(e, 'input[type="radio"]', HTMLInputElement),
                    n = t.hasAttribute("data-already-member"),
                    i = o(e, "form");
                if (i.classList.toggle("is-member", n), i.classList.toggle("is-not-member", !n), t.hasAttribute("data-member-type")) {
                    const e = t.getAttribute("data-member-type");
                    if (e) {
                        const t = s(i, 'input[type="hidden"][name="member_type"]', HTMLInputElement);
                        t && (t.value = e)
                    }
                }
            }

            function Gt() {
                s(document, ".js-workflow-submit", HTMLButtonElement).disabled = !document.querySelector(".js-workflow-option:checked") || !document.querySelector(".js-repository-id:checked")
            }

            function Xt() {
                const e = l(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
                    t = l(document, "select.js-advanced-search-prefix", HTMLSelectElement),
                    n = l(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
                    o = [...Yt(e), ...Yt(t), ...Yt(n)],
                    i = o.reduce((e, t) => (t.value && t.type && e[t.type]++, e), {
                        Repositories: 0,
                        Users: 0,
                        Code: 0,
                        Issues: 0
                    }),
                    r = o.reduce((e, t) => `${e} ${function(e){let t=e.prefix,n=e.value;return""===t?"":n?`${t}${n}`:""}(t)}`.trim(), ""),
                    a = s(document, ".js-advanced-search-input", HTMLInputElement).value;
                s(document, ".js-type-value", HTMLInputElement).value = function(e) {
                    let t = 0,
                        n = "Repositories";
                    for (const s in e) e[s] > t && (t = e[s], n = s);
                    return n
                }(i), s(document, ".js-search-query", HTMLInputElement).value = `${a} ${r}`.trim();
                const c = s(document, ".js-advanced-query");
                c.innerHTML = "", c.textContent = r;
                const u = document.createElement("span");
                u.textContent = a.trim(), c.prepend(u, " ")
            }

            function Qt(e) {
                return -1 !== e.search(/\s/g) ? `"${e}"` : e
            }

            function Yt(e) {
                return e.map(e => {
                    const t = e.value.trim(),
                        n = u(e, "data-search-prefix"),
                        s = e.getAttribute("data-search-type");
                    return "" === n ? {
                        prefix: n,
                        value: t,
                        type: s
                    } : -1 !== t.search(/,/g) && "location" !== n ? t.split(/,/).map(e => ({
                        prefix: n,
                        value: Qt(e.trim()),
                        type: s
                    })) : {
                        prefix: n,
                        value: Qt(t),
                        type: s
                    }
                }).reduce((e, t) => e.concat(t), [])
            }

            function Zt(e) {
                return a(e instanceof HTMLElement, "null.js:14"), e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length
            }

            function en(e) {
                a(e instanceof HTMLElement, "null.js:30");
                const t = e.querySelector("input.js-no-repositories-radio"),
                    n = e.querySelector("input.js-all-repositories-radio");
                return a(n instanceof HTMLInputElement, "null.js:33"), t instanceof HTMLInputElement && t.checked || n.checked || function(e) {
                    return Zt(e) > 0
                }(e)
            }

            function tn() {
                return document.querySelector(".js-apps-install-select-repositories-container")
            }

            function nn() {
                const e = tn();
                return e && e.querySelector(".js-filterable-field")
            }

            function sn(e) {
                return function() {
                    const t = e.querySelector("button.js-integrations-install-form-submit");
                    a(t instanceof HTMLButtonElement, "null.js:51"), t.disabled = !en(e);
                    const n = e.querySelector(".flash");
                    n && n.classList.toggle("d-none", ! function(e) {
                        const t = +e.getAttribute("data-max-repos");
                        if (t) return Zt(e) >= t
                    }(e))
                }
            }

            function on() {
                let e = 0;
                0 !== document.querySelectorAll(".js-integrations-install-repo-picked:not(.d-none)").length && (e = document.querySelectorAll(".js-repository-picker-result:not(.d-none)").length);
                let t = "";
                if (e > 0) {
                    t = `Selected ${e} ${e>1?"repositories":"repository"}`
                }
                const n = document.querySelector(".js-integration-total-repos");
                a(n instanceof HTMLElement, "null.js:78"), n.textContent = t
            }
            window.customElements.get("fuzzy-list") || (window.FuzzyListElement = Kt, window.customElements.define("fuzzy-list", Kt)), i(".js-account-membership", function(e) {
                const t = s(e, ".select-menu-item.selected", HTMLElement);
                t && Jt(t)
            }), r("selectmenu:selected", ".js-account-membership .select-menu-item", function(e) {
                Jt(e.currentTarget)
            }), r("change", ".js-npm-workflows .js-welcome-first-time-contributor", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:11");
                const n = t.form;
                a(n instanceof HTMLFormElement, "null.js:14"), c(n, "secret_value", HTMLTextAreaElement).required = t.checked
            }), i(".js-npm-workflows", Gt), r("change", ".js-workflow-option", Gt), r("change", ".js-npm-workflows", Gt), d(".js-advanced-search-prefix", function() {
                Xt()
            }), r("change", ".js-advanced-search-prefix", Xt), m(".js-advanced-search-input", function(e) {
                const t = o(e, ".js-advanced-search-label");
                t.classList.add("focus"), e.addEventListener("blur", () => t.classList.remove("focus"), {
                    once: !0
                })
            }), i(".js-advanced-search-input", function() {
                Xt()
            });
            let rn = new f;

            function an(e, t) {
                const n = e.querySelector(".js-app-logo-with-bgcolor");
                n && (n.style.backgroundColor = `#${t}`)
            }

            function cn(e, t) {
                const n = e.nextElementSibling;
                if (n) return a(n instanceof HTMLElement, "null.js:8"), n.classList.contains(t) ? n : cn(n, t)
            }
            i(".js-integrations-install-form", function(e) {
                const t = tn();
                if (!t) return;
                const n = t.querySelector(".js-navigation-container");
                async function o(e) {
                    try {
                        const s = nn();
                        let o = s && s.getAttribute("data-alternate-search-url");
                        a(o, "null.js:126");
                        const r = Array.prototype.slice.call(document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field")).map(function(e) {
                            return a(e instanceof HTMLInputElement, "null.js:131"), e.value
                        });
                        o += ~o.indexOf("?") ? "&" : "?", o += `q=${encodeURIComponent(e)}`, rn.abort(), rn = new f;
                        const c = p(o, {
                            signal: rn.signal
                        });
                        let l;
                        try {
                            l = await c
                        } catch (t) {
                            if (t instanceof h) return;
                            throw t
                        }
                        const u = g(document, l.trim());
                        for (const e of u.querySelectorAll(".js-navigation-item")) {
                            const t = e.getAttribute("data-autocomplete-value");
                            r.includes(t) && e.remove()
                        }
                        for (; n.firstChild;) n.removeChild(n.firstChild);
                        n.append(u)
                    } finally {
                        const e = tn();
                        e && e.classList.remove("is-loading"), i = null
                    }
                }
                a(n, "null.js:87"), e.addEventListener("change", sn(e)), r("selectmenu:selected", ".js-apps-install-select-repositories-container", function(t) {
                    t.target.classList.add("d-none");
                    const n = e.querySelector(".js-integrations-install-repo-picked"),
                        i = t.target.querySelector(".js-repository-picker-result");
                    a(i instanceof HTMLElement, "null.js:100");
                    const r = g(document, i.outerHTML.trim()).querySelector(".js-repository-picker-result");
                    a(r instanceof HTMLElement, "null.js:104"), r.classList.remove("d-none"), a(n, "null.js:107"), n.insertBefore(r, n.firstChild), s(document, ".js-min-repository-error").classList.add("d-none"), on(), sn(e).call(), o("")
                });
                let i = null;
                r("filterable:change", ".js-apps-install-select-repositories-container", function(e) {
                    if (i) return;
                    i = e;
                    const t = tn();
                    t && t.classList.add("is-loading"), n.classList.contains("filterable-active") ? setTimeout(function() {
                        const e = nn();
                        if (e instanceof HTMLInputElement) {
                            o(e.value.trim())
                        }
                    }, 1e3) : (t && t.classList.remove("is-loading"), i = null)
                }), r("click", ".js-repository-picker-remove", function(t) {
                    const n = t.target.closest(".js-repository-picker-result");
                    a(n instanceof HTMLElement, "null.js:210");
                    const i = t.target.closest("svg.js-repository-picker-remove");
                    if (i) {
                        const e = i.getAttribute("data-repo-id");
                        if (e) {
                            const t = tn(),
                                n = t && t.querySelector(`.js-navigation-item[data-repo-id="${e}"]`);
                            n && (n.classList.remove("selected"), n.classList.remove("d-none"))
                        }
                    }
                    if (n.remove(), 0 === s(document, ".js-integrations-install-repo-picked").children.length) {
                        const e = Array.from(document.querySelectorAll(".js-min-repository-error"));
                        for (const t of e) t.classList.remove("d-none")
                    }
                    return on(), o(""), sn(e).call()
                }), r("click", ".js-apps-install-select-repositories-container .js-menu-target", function() {
                    return s(document, ".js-select-repositories-radio", HTMLInputElement).checked = !0, sn(e).call()
                }), r("click", ".js-no-repositories-radio", function() {
                    s(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), on()
                }), r("click", ".js-all-repositories-radio", function() {
                    s(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"), on()
                }), r("click", ".js-select-repositories-radio", function() {
                    s(document, ".js-integrations-install-repo-picked").classList.remove("d-none"), on()
                })
            }), r("submit", ".js-integrations-install-form", function(e) {
                const t = e.target.querySelector(".js-all-repositories-radio");
                if (t instanceof HTMLInputElement)
                    if (t.checked) {
                        const t = Array.from(e.target.querySelectorAll('input[name="repository_ids[]"]'));
                        for (const e of t) e.remove()
                    } else {
                        const e = tn();
                        if (!e) return;
                        const t = e.querySelector(".js-navigation-container");
                        for (a(t instanceof HTMLElement, "null.js:287"); t.firstChild;) t.removeChild(t.firstChild)
                    }
            }), j(".js-app-bgcolor-form", async function(e, t) {
                const n = e.querySelector(".js-app-bgcolor-save-notice");
                if (!n) return;
                let s;
                try {
                    s = await t.html()
                } catch (o) {
                    n.classList.remove("visible")
                }
                s && (n.classList.add("visible"), setTimeout(() => n.classList.remove("visible"), 1500))
            }), d(".js-app-bgcolor-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:46");
                const n = o(t, "form", HTMLFormElement),
                    s = t.value.replace(/^#/, "");
                if (s.length < 1) return t.classList.remove("text-red"), void an(n, t.defaultValue);
                t.checkValidity() ? (t.classList.remove("text-red"), an(n, s), n.classList.contains("js-app-bgcolor-form") && b(() => (function(e, t) {
                    t.checkValidity() && v(e)
                })(n, t), 400)()) : (t.classList.add("text-red"), an(n, t.defaultValue))
            }), r("click", ".js-banner .js-next", function(e) {
                const t = o(e.currentTarget, ".js-banner"),
                    n = s(t, ".js-dismiss"),
                    i = s(t, ".js-next", HTMLButtonElement),
                    r = s(t, ".js-page.d-block"),
                    c = cn(r, "js-page");
                a(c, "null.js:43"), r.classList.remove("d-block"), r.classList.add("d-none"), c.classList.remove("d-none"), c.classList.add("d-block"), cn(c, "js-page") || (i.classList.add("d-none"), n.classList.remove("d-none"))
            }), i(".js-banner", function(e) {
                const t = s(e, ".js-dismiss");
                if (e.querySelectorAll(".js-page").length > 0) {
                    const n = s(e, ".js-next", HTMLButtonElement),
                        o = s(e, ".js-page.d-block", HTMLDivElement);
                    o && !cn(o, "js-page") ? t.classList.remove("d-none") : n.classList.remove("d-none")
                } else t.classList.remove("d-none")
            }), r("deprecatedAjaxSend", "[data-remote]", function(e) {
                e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
            }), r("deprecatedAjaxComplete", "[data-remote]", function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            }), j("form.js-ajax-pagination, .js-ajax-pagination form", async function(e, t) {
                const n = o(e, ".js-ajax-pagination");
                let s;
                try {
                    s = await t.html()
                } catch (i) {
                    if (i.response && 404 === i.response.status) return void n.remove();
                    throw i
                }
                n.replaceWith(s.html), L(e, "page:loaded")
            });
            const ln = new WeakMap;

            function un(e, t) {
                t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                const n = t.querySelector("p.note");
                if (n) {
                    const e = ln.get(n);
                    e && (n.innerHTML = e)
                }
                const s = t.querySelector("dd.error");
                s && s.remove();
                const o = t.querySelector("dd.warning");
                o && o.remove()
            }

            function dn(e) {
                const t = e.closest("form");
                if (!t) return;
                const n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }
            i("auto-check", function(e) {
                const t = s(e, "input", HTMLInputElement),
                    n = o(t, "dl.form-group"),
                    i = t.form;
                a(i, "null.js:16");
                const r = n.querySelector("p.note");
                r && ln.set(r, r.innerHTML), e.addEventListener("loadstart", () => {
                    un(t, n), n.classList.add("is-loading"), t.classList.add("is-autocheck-loading"), y(i)
                }), e.addEventListener("loadend", () => {
                    n.classList.remove("is-loading"), t.classList.remove("is-autocheck-loading")
                }), t.addEventListener("autocheck:success", e => {
                    a(e instanceof CustomEvent, "null.js:35"), t.classList.add("is-autocheck-successful"), n.classList.add("successed"), y(i);
                    const s = e.detail.message;
                    if (s)
                        if (r) r.innerHTML = s;
                        else {
                            const e = document.createElement("dd");
                            e.classList.add("warning"), e.innerHTML = s, n.append(e), n.classList.add("warn")
                        }
                }), t.addEventListener("autocheck:error", e => {
                    if (a(e instanceof CustomEvent, "null.js:56"), t.classList.add("is-autocheck-errored"), n.classList.add("errored"), y(i), r) r.innerHTML = e.detail.message || "Something went wrong";
                    else {
                        const t = e.detail.message || "Something went wrong",
                            s = document.createElement("dd");
                        s.classList.add("error"), s.innerHTML = t, n.append(s)
                    }
                }), t.addEventListener("input", () => {
                    t.value || un(t, n)
                })
            }), i("auto-complete", function(e) {
                e.addEventListener("loadstart", () => e.classList.add("is-auto-complete-loading")), e.addEventListener("loadend", () => e.classList.remove("is-auto-complete-loading"))
            }), i("auto-complete", {
                constructor: AutocompleteElement,
                initialize: dn
            }), r("change", "auto-complete", function(e) {
                a(e.currentTarget instanceof AutocompleteElement, "null.js:18"), dn(e.currentTarget)
            });
            const mn = new E;
            async function fn(e) {
                const t = e.form;
                a(t, "null.js:34"), t.classList.add("is-sending");
                try {
                    const e = w(t),
                        n = `${t.action}&${e}`.replace(/[?&]/, "?"),
                        s = await mn.push(p(n)),
                        o = t.getAttribute("data-results-container"),
                        i = o ? document.getElementById(o) : null;
                    i && (i.innerHTML = s), T(null, "", `?${e}`)
                } finally {
                    t.classList.remove("is-sending")
                }
            }

            function gn(e) {
                e.preventDefault(), e.stopPropagation()
            }

            function pn(e) {
                const t = e.querySelector(".js-clipboard-clippy-icon"),
                    n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"), e.classList.toggle("tooltipped"), e.classList.toggle("tooltipped-s"), t && t.classList.toggle("d-none"), n && n.classList.toggle("d-none")
            }

            function hn(e, t) {
                const n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }

            function jn(e) {
                const t = e.currentTarget;
                t instanceof Element && hn(t, !1)
            }
            m(".js-autosearch-field", e => {
                const t = e;
                a(t instanceof HTMLInputElement, "null.js:54"), k(t, fn), t.addEventListener("blur", () => A(t, fn), {
                    once: !0
                })
            }), m("input[data-autoselect]", async function(e) {
                a(e instanceof HTMLInputElement, "null.js:10"), await M(), e.select()
            }), r("change", "form[data-autosubmit]", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLFormElement, "null.js:20"), v(t)
            }), r("change", "input[data-autosubmit]", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:25");
                const n = t.form;
                a(n, "null.js:27"), v(n)
            }), S({
                features: x
            }), i("a.btn.disabled", {
                subscribe: e => H(e, "click", gn)
            }), (async () => {
                await C;
                const e = function(e) {
                        try {
                            return JSON.parse(window.localStorage.getItem(e))
                        } catch (t) {
                            return {}
                        }
                    }("bundle-urls") || {},
                    t = function() {
                        const e = {};
                        for (const t of document.getElementsByTagName("script")) {
                            const n = t.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/);
                            n && (e[`${n[1]}.js`] = t.src)
                        }
                        for (const t of document.getElementsByTagName("link")) {
                            const n = t.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/);
                            n && (e[`${n[1]}.css`] = t.href)
                        }
                        return e
                    }();
                ! function(e, t) {
                    try {
                        window.localStorage.setItem(e, JSON.stringify(t))
                    } catch (n) {}
                }("bundle-urls", t);
                const n = Object.keys(t).filter(n => {
                    const s = t[n];
                    return e[n] !== s
                });
                n.length && S({
                    downloadedBundles: n
                })
            })(), r("click", ".js-clipboard-copy", function(e) {
                let t = e.currentTarget;
                pn(t), setTimeout(pn, 2e3, t)
            }), j(".js-new-comment-form", async function(e, t) {
                let n;
                ! function(e) {
                    const t = e.querySelector(".js-comment-form-error");
                    t && (t.style.display = "none")
                }(e);
                try {
                    n = await t.json()
                } catch (i) {
                    ! function(e, t) {
                        let n = "You can't comment at this time";
                        if (t.response && 422 === t.response.status) {
                            const e = t.response.json;
                            e.errors && (n += ` — your comment ${e.errors.join(", ")}`)
                        }
                        n += ". ";
                        const s = e.querySelector(".js-comment-form-error");
                        s && (s.style.display = "block", s.classList.remove("d-none"), s.textContent = n)
                    }(e, i)
                }
                if (!n) return;
                e.reset();
                for (const r of l(e, ".js-resettable-field", HTMLInputElement)) q(r, r.getAttribute("data-reset-value") || "");
                const s = e.querySelector(".js-write-tab");
                s && s.click();
                const o = n.json.updateContent;
                for (const r in o) {
                    const e = o[r],
                        t = document.querySelector(r);
                    t ? I(t, e) : console.warn(`couldn't find ${r} for immediate update`)
                }
            }), i(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    a(e.form, "null.js:29");
                    const t = s(e.form, ".js-comment-field"),
                        n = e.querySelector(".js-form-action-text"),
                        o = n || e,
                        i = o.textContent;
                    let r = !1;

                    function c(t) {
                        const n = t.currentTarget;
                        a(n instanceof HTMLTextAreaElement, "null.js:38");
                        const s = n.value.trim();
                        s !== r && (r = s, o.textContent = s ? u(e, "data-comment-text") : i)
                    }
                    return {
                        add() {
                            t.addEventListener("input", c), t.addEventListener("change", c)
                        },
                        remove() {
                            t.removeEventListener("input", c), t.removeEventListener("change", c)
                        }
                    }
                }
            }), m(".js-comment-field", function(e) {
                hn(e, !0), e.addEventListener("blur", jn, {
                    once: !0
                })
            });
            const vn = /^(>[^\n]\n|\s*\n)*\s*(\+1|-1|:\+1*|:-1*)\s*$/m;

            function bn(e) {
                const t = e.target;
                a(t instanceof HTMLTextAreaElement, "null.js:27");
                const n = t.value,
                    s = o(t, ".js-reaction-suggestion");
                if (s)
                    if (vn.test(n)) {
                        s.classList.remove("hide-reaction-suggestion"), s.classList.add("reaction-suggestion");
                        const e = u(s, "data-reaction-markup");
                        s.setAttribute("data-reaction-suggestion-message", e)
                    } else Ln(s)
            }

            function Ln(e) {
                e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
            }
            r("focusout", "#new_comment_field", function(e) {
                const t = e.currentTarget;
                Ln(o(t, ".js-reaction-suggestion"))
            }), r("focusin", "#new_comment_field", function(e) {
                bn(e)
            }), _("keyup", "#new_comment_field", function(e) {
                bn(e)
            }), r("menu:activate", ".js-select-menu", function(e) {
                e.currentTarget.classList.add("is-dirty")
            }), r("menu:deactivate", ".js-select-menu", function(e) {
                e.currentTarget.classList.remove("is-dirty")
            });
            const yn = {
                OS: "Meta",
                Win: "Meta",
                Windows: "Meta",
                Scroll: "ScrollLock",
                SpaceBar: " ",
                Left: "ArrowLeft",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Up: "ArrowUp",
                Del: "Delete",
                Esc: "Escape"
            };
            const En = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key");
            if (En) {
                let e = e => En.get.apply(e);
                /Macintosh.*Safari/.test(navigator.userAgent) && (e = (e => {
                    return function(e, t) {
                        return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e
                    }(En.get.apply(e), e.shiftKey)
                })), Object.defineProperty(KeyboardEvent.prototype, "key", {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                        return t = e(this), yn[t] || t;
                        var t
                    }
                })
            }
            class FilterableInputElement extends HTMLElement {
                connectedCallback() {
                    const e = this.input;
                    e && (e.setAttribute("autocomplete", "off"), e.setAttribute("spellcheck", "false"), this.debounceInputChange = b(this.fetchResults.bind(this), 300), this.boundFetchResults = this.fetchResults.bind(this), e.addEventListener("focus", this.boundFetchResults), e.addEventListener("change", this.boundFetchResults), e.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const e = this.input;
                    e && (e.removeEventListener("focus", this.boundFetchResults), e.removeEventListener("change", this.boundFetchResults), e.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const e = this.querySelector("input");
                    return e instanceof HTMLInputElement ? e : null
                }
                get resultsContainer() {
                    return document.getElementById(this.getAttribute("aria-owns") || "")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get name() {
                    return this.getAttribute("name") || "q"
                }
                set name(e) {
                    this.setAttribute("name", e)
                }
                async fetchResults() {
                    if (!this.input) return;
                    const e = this.input.value.trim();
                    if (this.currentQuery === e) return;
                    this.currentQuery = e;
                    const t = this.src;
                    if (!t) return;
                    const n = this.resultsContainer;
                    if (!n) return;
                    const s = new URL(t, window.location.origin),
                        o = new URLSearchParams(s.search);
                    o.append(this.name, e), s.search = o.toString(), this.dispatchEvent(new CustomEvent("loadstart")), this.setAttribute("loading", "");
                    try {
                        const e = await $(document, s);
                        this.dispatchEvent(new CustomEvent("load")), n.innerHTML = "", n.append(e)
                    } catch (i) {
                        this.dispatchEvent(new CustomEvent("error"))
                    }
                    this.removeAttribute("loading"), this.dispatchEvent(new CustomEvent("loadend"))
                }
            }

            function wn(e, t) {
                return !!e && e.length >= t
            }

            function Tn(e) {
                return !!e && /\d/.test(e)
            }

            function kn(e) {
                return !!e && /[a-z]/.test(e)
            }

            function An(e) {
                return null == e.getAttribute("data-pjax-preserve-scroll") && 0
            }

            function Mn(e) {
                let t = e;
                for (; t;) {
                    const e = t.getAttribute("data-pjax");
                    if (e && "true" !== e) return document.querySelector(e);
                    t = t.parentElement && t.parentElement.closest("[data-pjax]")
                }
                return e.closest("[data-pjax-container]")
            }
            window.customElements.get("filterable-input") || (window.FilterableInputElement = FilterableInputElement, window.customElements.define("filterable-input", FilterableInputElement)), i("details-menu filterable-input", {
                constructor: FilterableInputElement,
                initialize(e) {
                    const t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t) return;
                    let n;
                    e.addEventListener("load", () => {
                        n = document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? document.activeElement.id : null
                    }), e.addEventListener("loadend", () => {
                        if (n) {
                            const s = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                            s ? s.focus() : e.input && e.input.focus()
                        }
                    })
                }
            }), j(".js-immediate-updates", async function(e, t) {
                let n;
                try {
                    n = (await t.json()).json.updateContent
                } catch (s) {
                    s.response.json && (n = s.response.json.updateContent)
                }
                if (n)
                    for (const o in n) {
                        const e = n[o],
                            t = document.querySelector(o);
                        t && I(t, e)
                    }
            }), j(".js-notice-dismiss", async function(e, t) {
                await t.text(), o(e, ".js-notice").remove()
            }), i("password-strength", function(e) {
                const t = s(e, "input", HTMLInputElement),
                    n = Number(e.getAttribute("data-minimum-character-count")),
                    o = Number(e.getAttribute("data-passphrase-length")),
                    i = e.querySelector("p.note") || e.querySelector(".form-control-note");
                t.addEventListener("keyup", () => {
                    i && function(e, t, n, o) {
                        const i = s(e, "span.js-more-than-n-chars"),
                            r = s(e, "span.js-min-chars"),
                            a = s(e, "span.js-number-requirement"),
                            c = s(e, "span.js-letter-requirement");
                        if (function(e) {
                                for (const t of e) t.classList.remove("text-green", "text-red")
                            }([i, r, a, c]), wn(t, o)) i.classList.add("text-green");
                        else if (function(e, t) {
                                return wn(e, t) && Tn(e) && kn(e)
                            }(t, n)) r.classList.add("text-green"), a.classList.add("text-green"), c.classList.add("text-green");
                        else {
                            const e = wn(t, n) ? "text-green" : "text-red",
                                s = Tn(t) ? "text-green" : "text-red",
                                o = kn(t) ? "text-green" : "text-red";
                            i.classList.add("text-red"), r.classList.add(e), a.classList.add(s), c.classList.add(o)
                        }
                    }(i, t.value, n, o)
                })
            }), r("click", ".js-permalink-shortcut", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLAnchorElement, "null.js:16");
                try {
                    T(null, "", t.href + window.location.hash)
                } catch (n) {
                    window.location = t.href + window.location.hash
                }
                e.preventDefault()
            }), r("click", "[data-pjax] a, a[data-pjax]", function(e) {
                a(e instanceof MouseEvent, "null.js:54");
                const t = e.currentTarget;
                if (t instanceof HTMLAnchorElement) {
                    if (null != t.getAttribute("data-skip-pjax")) return;
                    if (null != t.getAttribute("data-remote")) return;
                    const n = Mn(t);
                    n && R(e, {
                        container: n,
                        scrollTo: An(t)
                    })
                }
            }), r("submit", "form[data-pjax]", function(e) {
                a(e instanceof Event, "null.js:75");
                const t = e.target,
                    n = Mn(t);
                n && N(e, {
                    container: n,
                    scrollTo: An(t)
                })
            }), r("change", "select[data-pjax]", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLSelectElement, "null.js:88");
                const n = Mn(t);
                n && D({
                    url: t.value,
                    container: n
                })
            }), async function() {
                await B;
                const e = document.getElementById("js-pjax-loader-bar");
                if (!e) return;
                const t = e.firstElementChild;
                if (!(t instanceof HTMLElement)) return;
                let n = 0,
                    s = null,
                    o = null;

                function i(e) {
                    0 === e && (null == o && (o = getComputedStyle(t).transition), t.style.transition = "none"), n = e, t.style.width = `${n}%`, 0 === e && (t.clientWidth, t.style.transition = o || "")
                }

                function r() {
                    0 === n && (n = 12), i(Math.min(n + 3, 95)), s = setTimeout(r, 500)
                }
                document.addEventListener("pjax:start", function() {
                    i(0), e.classList.add("is-loading"), s = setTimeout(r, 0)
                }), document.addEventListener("pjax:end", function() {
                    s && clearTimeout(s), i(100), e.classList.remove("is-loading")
                }), document.addEventListener("pjax:timeout", function(e) {
                    e.preventDefault()
                })
            }();
            let Sn = null;
            const xn = "last_pjax_request",
                Hn = "pjax_start",
                Cn = "pjax_end";

            function qn(e, t) {
                return e.split("/", 3).join("/") === t.split("/", 3).join("/")
            }
            window.performance.getEntriesByName && (document.addEventListener("pjax:start", function(e) {
                e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(Hn), Sn = e.detail.url)
            }), document.addEventListener("pjax:end", async function() {
                if (await M(), !window.performance.getEntriesByName(Hn).length) return;
                window.performance.mark(Cn), window.performance.measure(xn, Hn, Cn);
                const e = window.performance.getEntriesByName(xn).pop(),
                    t = e ? e.duration : null;
                t && (Sn && S({
                    requestUrl: Sn,
                    pjaxDuration: Math.round(t)
                }), window.performance.clearMarks(Hn), window.performance.clearMarks(Cn), window.performance.clearMeasures(xn))
            })), document.addEventListener("pjax:click", function(e) {
                if (window.onbeforeunload) return e.preventDefault()
            }), r("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
                a(e.currentTarget instanceof HTMLAnchorElement, "null.js:25");
                const t = e.currentTarget.pathname;
                qn(t, location.pathname) ? function(e) {
                    const t = e.split("/")[3];
                    return -1 !== ["projects", "releases", "tags", "wiki", "community"].indexOf(t) && qn(e, location.pathname)
                }(t) && e.preventDefault() : e.preventDefault()
            }), r("pjax:click", ".js-comment-body", function(e) {
                const t = e.target;
                t instanceof HTMLAnchorElement && "files" === t.pathname.split("/")[3] && e.preventDefault()
            });
            const In = {};

            function _n(e) {
                const t = e.target;
                if (a(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement, "null.js:18"), (e.ctrlKey || e.metaKey) && "Enter" === e.key) {
                    const n = t.form;
                    a(n instanceof HTMLFormElement, "null.js:22");
                    const s = n.querySelector("input[type=submit], button[type=submit]");
                    if (e.shiftKey) {
                        const e = n.querySelector(".js-quick-submit-alternative");
                        (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && !e.disabled && v(n, e)
                    } else(s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && s.disabled || v(n);
                    e.preventDefault()
                }
            }

            function $n(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
                return n.some(function(t) {
                    return e.classList.contains(t)
                })
            }

            function Rn(e) {
                if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error;
                for (var t = e.parentNode.children, n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return 0
            }

            function Nn(e) {
                return "DIV" === e.nodeName && e.classList.contains("highlight")
            }(async () => {
                await B, In[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]"))
            })(), document.addEventListener("pjax:beforeReplace", function(e) {
                a(e instanceof CustomEvent, "null.js:14");
                const t = e.detail.contents;
                for (let n = 0; n < t.length; n++) {
                    const e = t[n];
                    if (e)
                        if ("pjax-head" === e.id) In[document.location.pathname] = Array.from(e.children), t[n] = null;
                        else if ("js-flash-container" === e.id) {
                        const s = document.querySelector("#js-flash-container");
                        s && s.replaceWith(e), t[n] = null
                    }
                }
            }), document.addEventListener("pjax:end", function() {
                const e = In[document.location.pathname];
                if (!e) return;
                const t = document.head;
                a(t, "null.js:35");
                for (const n of document.querySelectorAll("head [data-pjax-transient]")) n.remove();
                for (const n of e) n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && t.append(n) : (n.setAttribute("data-pjax-transient", ""), t.append(n))
            }), _("keydown", ".js-quick-submit", function(e) {
                _n(e)
            });
            var Dn = 0;

            function Bn(e) {
                return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            var Pn = {
                INPUT: function(e) {
                    return e instanceof HTMLInputElement && e.checked ? "[x] " : "[ ] "
                },
                CODE: function(e) {
                    var t = e.textContent;
                    return e.parentNode && "PRE" === e.parentNode.nodeName ? (e.textContent = "```\n".concat(t.replace(/\n+$/, ""), "\n```"), e) : t.indexOf("`") >= 0 ? "`` ".concat(t, " ``") : "`".concat(t, "`")
                },
                PRE: function(e) {
                    var t = e.parentNode;
                    if (t instanceof HTMLElement && Nn(t)) {
                        var n = t.className.match(/highlight-source-(\S+)/),
                            s = n ? n[1] : "",
                            o = e.textContent.replace(/\n+$/, "");
                        e.textContent = "```".concat(s, "\n").concat(o, "\n```"), e.append("\n\n")
                    }
                    return e
                },
                STRONG: function(e) {
                    return "**".concat(e.textContent, "**")
                },
                EM: function(e) {
                    return "_".concat(e.textContent, "_")
                },
                BLOCKQUOTE: function(e) {
                    var t = e.textContent.trim().replace(/^/gm, "> "),
                        n = document.createElement("pre");
                    return n.textContent = "".concat(t, "\n\n"), n
                },
                A: function(e) {
                    var t = e.textContent,
                        n = e.getAttribute("href");
                    return $n(e, "user-mention", "team-mention") ? t : $n(e, "issue-link") && /^#\d+$/.test(t) ? t : /^https?:/.test(t) && t === n ? t : n ? "[".concat(t, "](").concat(n, ")") : t
                },
                IMG: function(e) {
                    var t = e.getAttribute("alt") || "";
                    if (t && $n(e, "emoji")) return t;
                    var n = e.getAttribute("src");
                    if (!n) throw new Error;
                    var s = e.hasAttribute("width") ? ' width="'.concat(Bn(e.getAttribute("width") || ""), '"') : "",
                        o = e.hasAttribute("height") ? ' height="'.concat(Bn(e.getAttribute("height") || ""), '"') : "";
                    return s || o ? '<img alt="'.concat(Bn(t), '"').concat(s).concat(o, ' src="').concat(Bn(n), '">') : "![".concat(t, "](").concat(n, ")")
                },
                LI: function(e) {
                    var t = e.parentNode;
                    if (!t) throw new Error;
                    var n, s, o, i = "";
                    if (s = (n = e).childNodes[0], o = n.childNodes[1], !(s && n.childNodes.length < 3) || ("OL" !== s.nodeName && "UL" !== s.nodeName || o && (o.nodeType !== Node.TEXT_NODE || o.textContent.trim())))
                        if ("OL" === t.nodeName)
                            if (Dn > 0 && !t.previousSibling) {
                                var r = Rn(e) + Dn + 1;
                                i = "".concat(r, "\\. ")
                            } else i = "".concat(Rn(e) + 1, ". ");
                    else i = "* ";
                    var a = i.replace(/\S/g, " "),
                        c = e.textContent.trim().replace(/^/gm, a),
                        l = document.createElement("pre");
                    return l.textContent = c.replace(a, i), l
                },
                OL: function(e) {
                    var t = document.createElement("li");
                    return t.appendChild(document.createElement("br")), e.append(t), e
                },
                H1: function(e) {
                    var t = parseInt(e.nodeName.slice(1));
                    return e.prepend("".concat(Array(t + 1).join("#"), " ")), e
                },
                UL: function(e) {
                    return e
                }
            };
            Pn.UL = Pn.OL;
            for (var Fn = 2; Fn <= 6; ++Fn) Pn["H".concat(Fn)] = Pn.H1;

            function On(e, t) {
                for (var n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                        return e.nodeName in Pn && ! function(e) {
                            return e instanceof HTMLAnchorElement && 1 === e.childNodes.length && e.childNodes[0] instanceof HTMLImageElement && e.childNodes[0].src === e.href
                        }(e) && (function(e) {
                            return "IMG" === e.nodeName || null != e.firstChild
                        }(e) || function(e) {
                            return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type
                        }(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }), s = [], o = n.nextNode(); o;) o instanceof HTMLElement && s.push(o), o = n.nextNode();
                s.reverse();
                for (var i = 0; i < s.length; i++) t(o = s[i], Pn[o.nodeName](o))
            }
            var Un = new WeakMap,
                zn = 0,
                Vn = /\bEdge\//.test(navigator.userAgent);

            function Wn(e) {
                for (var t = e; t = t.parentElement;)
                    if (Un.has(t)) return t
            }

            function Kn(e) {
                var t, n = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var i, r = e.querySelectorAll("textarea")[Symbol.iterator](); !(n = (i = r.next()).done); n = !0) {
                        var a = i.value;
                        if (a instanceof HTMLTextAreaElement && !((t = a).offsetWidth <= 0 && t.offsetHeight <= 0)) return a
                    }
                } catch (c) {
                    s = !0, o = c
                } finally {
                    try {
                        n || null == r.return || r.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }

            function Jn(e) {
                if (! function(e) {
                        return e.defaultPrevented || "r" !== e.key || e.metaKey || e.altKey || e.shiftKey || e.ctrlKey || e.target instanceof HTMLElement && (t = e.target, n = t.nodeName.toLowerCase(), s = (t.getAttribute("type") || "").toLowerCase(), "select" === n || "textarea" === n || "input" === n && "submit" !== s && "reset" !== s || t.isContentEditable);
                        var t, n, s
                    }(e)) {
                    var t, n = window.getSelection();
                    try {
                        t = n.getRangeAt(0)
                    } catch (s) {
                        return
                    }
                    Gn(n.toString(), t) && e.preventDefault()
                }
            }

            function Gn(e, t) {
                var n = function(e, t, n) {
                    var s = e.trim();
                    if (!s) return;
                    var o = t.startContainer;
                    if (!o) return;
                    o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode);
                    if (!(o instanceof Element)) return;
                    var i = Wn(o);
                    if (!i) return;
                    var r = i.getAttribute("data-quote-markdown");
                    if (null != r && !Vn) try {
                        s = function(e) {
                            var t = document.body;
                            if (!t) return "";
                            var n = document.createElement("div");
                            n.appendChild(e), n.style.cssText = "position:absolute;left:-9999px;", t.appendChild(n);
                            var s = "";
                            try {
                                var o = window.getSelection(),
                                    i = document.createRange();
                                i.selectNodeContents(n), o.removeAllRanges(), o.addRange(i), s = o.toString(), o.removeAllRanges(), i.detach()
                            } finally {
                                t.removeChild(n)
                            }
                            return s
                        }(function(e, t, n) {
                            var s = e.startContainer;
                            if (!(s && s.parentNode && s.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                            var o = s.parentNode,
                                i = e.cloneContents();
                            if (t) {
                                var r = i.querySelector(t);
                                r && (i = document.createDocumentFragment()).appendChild(r)
                            }
                            Dn = 0;
                            var a = o.closest("li"),
                                c = o.closest("pre");
                            if (c) {
                                var l = document.createElement("pre");
                                l.appendChild(i);
                                var u = l;
                                if (!n) {
                                    var d = c.parentNode;
                                    if (d instanceof HTMLElement && Nn(d)) {
                                        var m = document.createElement("div");
                                        m.className = d.className, m.appendChild(u), u = m
                                    }
                                }(i = document.createDocumentFragment()).appendChild(u)
                            } else if (a && a.parentNode && ("OL" === a.parentNode.nodeName && (Dn = Rn(a)), !i.querySelector("li"))) {
                                var f = document.createElement("li");
                                if (!a.parentNode) throw new Error;
                                var g = document.createElement(a.parentNode.nodeName);
                                f.appendChild(i), g.appendChild(f), (i = document.createDocumentFragment()).appendChild(g)
                            }
                            return On(i, function(e, t) {
                                return e.replaceWith(t)
                            }), i
                        }(t, r, n)).replace(/^\n+/, "").replace(/\s+$/, "")
                    } catch (a) {
                        setTimeout(function() {
                            throw a
                        })
                    }
                    return {
                        selectionText: s,
                        container: i
                    }
                }(e, t, !1);
                if (!n) return !1;
                var s = n.container,
                    o = n.selectionText;
                if (!s.dispatchEvent(new CustomEvent("quote-selection", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            range: t,
                            selectionText: o
                        }
                    }))) return !0;
                var i = Kn(s);
                return !!i && (function(e, t) {
                    var n = "> ".concat(e.replace(/\n/g, "\n> "), "\n\n");
                    t.value && (n = "".concat(t.value, "\n\n").concat(n));
                    t.value = n, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus(), t.selectionStart = t.value.length, t.scrollTop = t.scrollHeight
                }(o, i), !0)
            }
            let Xn, Qn;

            function Yn(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        s = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var r, a = e[Symbol.iterator](); !(s = (r = a.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                    } catch (c) {
                        o = !0, i = c
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            i(".js-quote-selection-container", {
                subscribe: function(e) {
                    return function(e) {
                        var t = 0 === zn;
                        zn += Un.has(e) ? 0 : 1, Un.set(e, 1), t && document.addEventListener("keydown", Jn)
                    }(e), {
                        unsubscribe: function() {
                            ! function(e) {
                                zn -= Un.has(e) ? 1 : 0, Un.delete(e), zn || document.removeEventListener("keydown", Jn)
                            }(e)
                        }
                    }
                }
            }), r("click", ".js-comment-quote-reply", function(e) {
                let t = e.currentTarget;
                const n = o(t, ".js-comment"),
                    i = s(n, ".js-comment-body");
                if (Qn && "Range" === Qn.type && i.contains(Qn.anchorNode)) Gn(Qn.text, Qn.range);
                else {
                    const e = window.getSelection();
                    e.removeAllRanges(), e.selectAllChildren(i), Gn(e.toString(), e.getRangeAt(0))
                }
            }), document.addEventListener("selectionchange", b(function() {
                const e = window.getSelection();
                let t;
                try {
                    t = e.getRangeAt(0)
                } catch (n) {
                    return void(Xn = null)
                }
                Xn = {
                    type: e.type,
                    anchorNode: e.anchorNode,
                    text: e.toString(),
                    range: t
                }
            }, 100)), document.addEventListener("toggle", function(e) {
                const t = e.target;
                if (!(t instanceof Element && t.hasAttribute("open"))) return;
                Qn = Xn;
                const n = t.querySelector(".js-comment-quote-reply.d-none");
                if (!n) return;
                const s = Wn(t);
                s && (s.querySelector(".js-inline-comment-form-container") || Kn(s)) && n.classList.remove("d-none")
            }, {
                capture: !0
            }), j("form[data-replace-remote-form]", async function(e, t) {
                e.classList.remove("is-error"), e.classList.add("is-loading");
                try {
                    const s = await t.html();
                    (e.closest("[data-replace-remote-form-target]") || e).replaceWith(s.html)
                } catch (n) {
                    e.classList.remove("is-loading"), e.classList.add("is-error")
                }
            });
            var Zn = null;

            function es(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.selector,
                    s = void 0 === n ? ".js-session-resumable" : n,
                    o = t.keyPrefix,
                    i = "".concat(void 0 === o ? "session-resume:" : o).concat(e),
                    r = [],
                    a = !0,
                    c = !1,
                    l = void 0;
                try {
                    for (var u, d = document.querySelectorAll(s)[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                        var m = u.value;
                        (m instanceof HTMLInputElement || m instanceof HTMLTextAreaElement) && r.push(m)
                    }
                } catch (g) {
                    c = !0, l = g
                } finally {
                    try {
                        a || null == d.return || d.return()
                    } finally {
                        if (c) throw l
                    }
                }
                var f = r.filter(function(e) {
                    return function(e) {
                        return e.id && e.value !== e.defaultValue && e.form !== Zn
                    }(e)
                }).map(function(e) {
                    return [e.id, e.value]
                });
                if (f.length) try {
                    sessionStorage.setItem(i, JSON.stringify(f))
                } catch (p) {}
            }

            function ts(e) {
                var t, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).keyPrefix,
                    s = "".concat(void 0 === n ? "session-resume:" : n).concat(e);
                try {
                    t = sessionStorage.getItem(s)
                } catch (p) {}
                if (t) {
                    try {
                        sessionStorage.removeItem(s)
                    } catch (p) {}
                    var o = [],
                        i = !0,
                        r = !1,
                        a = void 0;
                    try {
                        for (var c, l = JSON.parse(t)[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                            var u = Yn(c.value, 2),
                                d = u[0],
                                m = u[1],
                                f = new CustomEvent("session:resume", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    detail: {
                                        targetId: d,
                                        targetValue: m
                                    }
                                });
                            if (document.dispatchEvent(f)) {
                                var g = document.getElementById(d);
                                g && (g instanceof HTMLInputElement || g instanceof HTMLTextAreaElement) && g.value === g.defaultValue && (g.value = m, o.push(g))
                            }
                        }
                    } catch (h) {
                        r = !0, a = h
                    } finally {
                        try {
                            i || null == l.return || l.return()
                        } finally {
                            if (r) throw a
                        }
                    }
                    setTimeout(function() {
                        for (var e = 0; e < o.length; e++) {
                            o[e].dispatchEvent(new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                    }, 0)
                }
            }

            function ns(e) {
                const t = e || window.location,
                    n = document.head && document.head.querySelector("meta[name=session-resume-id]");
                return n instanceof HTMLMetaElement && n.content || t.pathname
            }
            window.addEventListener("submit", function(e) {
                Zn = e.target, setTimeout(function() {
                    e.defaultPrevented && (Zn = null)
                }, 0)
            }, {
                capture: !0
            }), window.addEventListener("pageshow", function() {
                ts(ns())
            }), window.addEventListener("pjax:end", function() {
                ts(ns())
            }), window.addEventListener("pagehide", function() {
                es(ns(), {
                    selector: ".js-session-resumable"
                })
            }), window.addEventListener("pjax:beforeReplace", function(e) {
                const t = e.detail.previousState,
                    n = t ? t.url : null;
                if (n) es(ns(new URL(n, window.location.origin)), {
                    selector: ".js-session-resumable"
                });
                else {
                    const e = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                    setTimeout(function() {
                        throw e
                    })
                }
            }), i("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: function(e) {
                    var t = null,
                        n = !1,
                        s = void 0,
                        o = void 0,
                        i = void 0;

                    function r(t) {
                        if (s !== t.clientX || o !== t.clientY) {
                            var a = e.style.height;
                            i && i !== a && (n = !0, e.style.maxHeight = "", e.removeEventListener("mousemove", r)), i = a
                        }
                        s = t.clientX, o = t.clientY
                    }
                    var a = e.ownerDocument,
                        c = a.documentElement;

                    function l() {
                        if (!(n || e.value === t || e.offsetWidth <= 0 && e.offsetHeight <= 0)) {
                            var s = function() {
                                    for (var t = 0, n = e; n !== a.body && null !== n;) t += n.offsetTop || 0, n = n.offsetParent;
                                    var s = t - a.defaultView.pageYOffset;
                                    return {
                                        top: s,
                                        bottom: c.clientHeight - (s + e.offsetHeight)
                                    }
                                }(),
                                o = s.top,
                                r = s.bottom;
                            if (!(o < 0 || r < 0)) {
                                var l = Number(getComputedStyle(e).height.replace(/px/, "")) + r;
                                e.style.maxHeight = l - 100 + "px";
                                var u = e.parentElement;
                                if (u instanceof HTMLElement) {
                                    var d = u.style.height;
                                    u.style.height = getComputedStyle(u).height, e.style.height = "auto", e.style.height = e.scrollHeight + "px", u.style.height = d, i = e.style.height
                                }
                                t = e.value
                            }
                        }
                    }

                    function u() {
                        n = !1, e.style.height = "", e.style.maxHeight = ""
                    }
                    e.addEventListener("mousemove", r), e.addEventListener("input", l), e.addEventListener("change", l);
                    var d = e.form;
                    return d && d.addEventListener("reset", u), e.value && l(), {
                        unsubscribe: function() {
                            e.removeEventListener("mousemove", r), e.removeEventListener("input", l), e.removeEventListener("change", l), d && d.removeEventListener("reset", u)
                        }
                    }
                }
            }), j(".js-social-form", async function(e, t) {
                const n = await t.json(),
                    s = o(e, ".js-social-container");
                for (const o of s.querySelectorAll(".js-social-count")) o.textContent = n.json.count
            });
            const ss = new Map,
                os = (e, ...t) => new is(e, t, "html");
            class is {
                constructor(e, t, n, s = ys) {
                    this.strings = e, this.values = t, this.type = n, this.partCallback = s
                }
                getHTML() {
                    const e = this.strings.length - 1;
                    let t = "",
                        n = !0;
                    for (let s = 0; s < e; s++) {
                        const e = this.strings[s];
                        t += e;
                        const o = ds(e);
                        t += (n = o > -1 ? o < e.length : n) ? cs : as
                    }
                    return t += this.strings[e]
                }
                getTemplateElement() {
                    const e = document.createElement("template");
                    return e.innerHTML = this.getHTML(), e
                }
            }

            function rs(e, t, n = function(e) {
                let t = ss.get(e.type);
                void 0 === t && (t = new Map, ss.set(e.type, t));
                let n = t.get(e.strings);
                return void 0 === n && (n = new gs(e, e.getTemplateElement()), t.set(e.strings, n)), n
            }) {
                const s = n(e);
                let o = t.__templateInstance;
                if (void 0 !== o && o.template === s && o._partCallback === e.partCallback) return void o.update(e.values);
                o = new Es(s, e.partCallback, n), t.__templateInstance = o;
                const i = o._clone();
                o.update(e.values), ws(t, t.firstChild), t.appendChild(i)
            }
            const as = `{{lit-${String(Math.random()).slice(2)}}}`,
                cs = `\x3c!--${as}--\x3e`,
                ls = new RegExp(`${as}|${cs}`),
                us = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;

            function ds(e) {
                const t = e.lastIndexOf(">");
                return e.indexOf("<", t + 1) > -1 ? e.length : t
            }
            class ms {
                constructor(e, t, n, s, o) {
                    this.type = e, this.index = t, this.name = n, this.rawName = s, this.strings = o
                }
            }
            const fs = e => -1 !== e.index;
            class gs {
                constructor(e, t) {
                    this.parts = [], this.element = t;
                    const n = this.element.content,
                        s = document.createTreeWalker(n, 133, null, !1);
                    let o = -1,
                        i = 0;
                    const r = [];
                    let a, c;
                    for (; s.nextNode();) {
                        o++, a = c;
                        const t = c = s.currentNode;
                        if (1 === t.nodeType) {
                            if (!t.hasAttributes()) continue;
                            const n = t.attributes;
                            let s = 0;
                            for (let e = 0; e < n.length; e++) n[e].value.indexOf(as) >= 0 && s++;
                            for (; s-- > 0;) {
                                const s = e.strings[i],
                                    r = us.exec(s)[1],
                                    a = n.getNamedItem(r),
                                    c = a.value.split(ls);
                                this.parts.push(new ms("attribute", o, a.name, r, c)), t.removeAttribute(a.name), i += c.length - 1
                            }
                        } else if (3 === t.nodeType) {
                            const e = t.nodeValue;
                            if (e.indexOf(as) < 0) continue;
                            const n = t.parentNode,
                                s = e.split(ls),
                                a = s.length - 1;
                            i += a;
                            for (let i = 0; i < a; i++) n.insertBefore("" === s[i] ? document.createComment("") : document.createTextNode(s[i]), t), this.parts.push(new ms("node", o++));
                            n.insertBefore("" === s[a] ? document.createComment("") : document.createTextNode(s[a]), t), r.push(t)
                        } else if (8 === t.nodeType && t.nodeValue === as) {
                            const e = t.parentNode,
                                n = t.previousSibling;
                            null === n || n !== a || n.nodeType !== Node.TEXT_NODE ? e.insertBefore(document.createComment(""), t) : o--, this.parts.push(new ms("node", o++)), r.push(t), null === t.nextSibling ? e.insertBefore(document.createComment(""), t) : o--, c = a, i++
                        }
                    }
                    for (const l of r) l.parentNode.removeChild(l)
                }
            }
            const ps = (e, t) => hs(t) ? (t = t(e), js) : null === t ? void 0 : t,
                hs = e => "function" == typeof e && !0 === e.__litDirective,
                js = {},
                vs = e => null === e || !("object" == typeof e || "function" == typeof e);
            class bs {
                constructor(e, t, n, s) {
                    this.instance = e, this.element = t, this.name = n, this.strings = s, this.size = s.length - 1, this._previousValues = []
                }
                _interpolate(e, t) {
                    const n = this.strings,
                        s = n.length - 1;
                    let o = "";
                    for (let i = 0; i < s; i++) {
                        o += n[i];
                        const s = ps(this, e[t + i]);
                        if (s && s !== js && (Array.isArray(s) || "string" != typeof s && s[Symbol.iterator]))
                            for (const e of s) o += e;
                        else o += s
                    }
                    return o + n[s]
                }
                _equalToPreviousValues(e, t) {
                    for (let n = t; n < t + this.size; n++)
                        if (this._previousValues[n] !== e[n] || !vs(e[n])) return !1;
                    return !0
                }
                setValue(e, t) {
                    if (this._equalToPreviousValues(e, t)) return;
                    const n = this.strings;
                    let s;
                    2 === n.length && "" === n[0] && "" === n[1] ? (s = ps(this, e[t]), Array.isArray(s) && (s = s.join(""))) : s = this._interpolate(e, t), s !== js && this.element.setAttribute(this.name, s), this._previousValues = e
                }
            }
            class Ls {
                constructor(e, t, n) {
                    this.instance = e, this.startNode = t, this.endNode = n, this._previousValue = void 0
                }
                setValue(e) {
                    if ((e = ps(this, e)) !== js)
                        if (vs(e)) {
                            if (e === this._previousValue) return;
                            this._setText(e)
                        } else e instanceof is ? this._setTemplateResult(e) : Array.isArray(e) || e[Symbol.iterator] ? this._setIterable(e) : e instanceof Node ? this._setNode(e) : void 0 !== e.then ? this._setPromise(e) : this._setText(e)
                }
                _insert(e) {
                    this.endNode.parentNode.insertBefore(e, this.endNode)
                }
                _setNode(e) {
                    this._previousValue !== e && (this.clear(), this._insert(e), this._previousValue = e)
                }
                _setText(e) {
                    const t = this.startNode.nextSibling;
                    e = void 0 === e ? "" : e, t === this.endNode.previousSibling && t.nodeType === Node.TEXT_NODE ? t.textContent = e : this._setNode(document.createTextNode(e)), this._previousValue = e
                }
                _setTemplateResult(e) {
                    const t = this.instance._getTemplate(e);
                    let n;
                    this._previousValue && this._previousValue.template === t ? n = this._previousValue : (n = new Es(t, this.instance._partCallback, this.instance._getTemplate), this._setNode(n._clone()), this._previousValue = n), n.update(e.values)
                }
                _setIterable(e) {
                    Array.isArray(this._previousValue) || (this.clear(), this._previousValue = []);
                    const t = this._previousValue;
                    let n = 0;
                    for (const s of e) {
                        let e = t[n];
                        if (void 0 === e) {
                            let s = this.startNode;
                            if (n > 0) {
                                s = t[n - 1].endNode = document.createTextNode(""), this._insert(s)
                            }
                            e = new Ls(this.instance, s, this.endNode), t.push(e)
                        }
                        e.setValue(s), n++
                    }
                    if (0 === n) this.clear(), this._previousValue = void 0;
                    else if (n < t.length) {
                        const e = t[n - 1];
                        t.length = n, this.clear(e.endNode.previousSibling), e.endNode = this.endNode
                    }
                }
                _setPromise(e) {
                    this._previousValue = e, e.then(t => {
                        this._previousValue === e && this.setValue(t)
                    })
                }
                clear(e = this.startNode) {
                    ws(this.startNode.parentNode, e.nextSibling, this.endNode)
                }
            }
            const ys = (e, t, n) => {
                if ("attribute" === t.type) return new bs(e, n, t.name, t.strings);
                if ("node" === t.type) return new Ls(e, n, n.nextSibling);
                throw new Error(`Unknown part type ${t.type}`)
            };
            class Es {
                constructor(e, t, n) {
                    this._parts = [], this.template = e, this._partCallback = t, this._getTemplate = n
                }
                update(e) {
                    let t = 0;
                    for (const n of this._parts) n ? void 0 === n.size ? (n.setValue(e[t]), t++) : (n.setValue(e, t), t += n.size) : t++
                }
                _clone() {
                    const e = this.template.element.content.cloneNode(!0),
                        t = this.template.parts;
                    if (t.length > 0) {
                        const n = document.createTreeWalker(e, 133, null, !1);
                        let s = -1;
                        for (let e = 0; e < t.length; e++) {
                            const o = t[e],
                                i = fs(o);
                            if (i)
                                for (; s < o.index;) s++, n.nextNode();
                            this._parts.push(i ? this._partCallback(this, o, n.currentNode) : void 0)
                        }
                    }
                    return e
                }
            }
            const ws = (e, t, n = null) => {
                let s = t;
                for (; s !== n;) {
                    const t = s.nextSibling;
                    e.removeChild(s), s = t
                }
            };

            function Ts(e, t) {
                e.addEventListener("compositionstart", qs), e.addEventListener("compositionend", qs), e.addEventListener("keydown", Ss), t.addEventListener("click", xs)
            }

            function ks(e, t) {
                e.removeAttribute("aria-activedescendant"), e.removeEventListener("compositionstart", qs), e.removeEventListener("compositionend", qs), e.removeEventListener("keydown", Ss), t.removeEventListener("click", xs)
            }
            var As = !1,
                Ms = !!navigator.userAgent.match(/Macintosh/);

            function Ss(e) {
                if (!(e.shiftKey || e.metaKey || e.altKey)) {
                    var t = e.currentTarget;
                    if ((t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && !As) {
                        var n = document.getElementById(t.getAttribute("aria-owns") || "");
                        if (n) switch (e.key) {
                            case "Enter":
                            case "Tab":
                                (function(e, t) {
                                    var n = t.querySelector('[aria-selected="true"]');
                                    return !(!n || "true" !== n.getAttribute("aria-disabled") && (n.click(), 0))
                                })(0, n) && e.preventDefault();
                                break;
                            case "Escape":
                                Cs(n);
                                break;
                            case "ArrowDown":
                                Hs(t, n, 1), e.preventDefault();
                                break;
                            case "ArrowUp":
                                Hs(t, n, -1), e.preventDefault();
                                break;
                            case "n":
                                Ms && e.ctrlKey && (Hs(t, n, 1), e.preventDefault());
                                break;
                            case "p":
                                Ms && e.ctrlKey && (Hs(t, n, -1), e.preventDefault())
                        }
                    }
                }
            }

            function xs(e) {
                if (e.target instanceof Element) {
                    var t = e.target.closest('[role="option"]');
                    t && "true" !== t.getAttribute("aria-disabled") && function(e) {
                        e.dispatchEvent(new CustomEvent("combobox-commit", {
                            bubbles: !0
                        }))
                    }(t)
                }
            }

            function Hs(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    s = t.querySelector('[aria-selected="true"]'),
                    o = Array.from(t.querySelectorAll('[role="option"]')),
                    i = o.indexOf(s),
                    r = 1 === n ? 0 : o.length - 1;
                if (s && i >= 0) {
                    var a = i + n;
                    a >= 0 && a < o.length && (r = a)
                }
                var c = o[r];
                if (c)
                    for (var l = 0; l < o.length; l++) {
                        var u = o[l];
                        c === u ? (e.setAttribute("aria-activedescendant", c.id), c.setAttribute("aria-selected", "true")) : u.setAttribute("aria-selected", "false")
                    }
            }

            function Cs(e) {
                var t = e.querySelector('[aria-selected="true"]');
                t && t.setAttribute("aria-selected", "false")
            }

            function qs(e) {
                var t = e.currentTarget;
                if (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) {
                    As = "compositionstart" === e.type;
                    var n = document.getElementById(t.getAttribute("aria-owns") || "");
                    n && Cs(n)
                }
            }

            function Is(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd;
                const n = P(e, t),
                    o = s(n, ".text-field-mirror-marker"),
                    i = n.getBoundingClientRect(),
                    r = o.getBoundingClientRect();
                return setTimeout(() => {
                    n.remove()
                }, 5e3), {
                    top: r.top - i.top,
                    left: r.left - i.left
                }
            }
            const _s = new WeakMap,
                $s = {};
            class Rs {
                constructor(e) {
                    this.setupHandler = this.setup.bind(this), this.teardownHandler = this.teardown.bind(this), this.textarea = e.input, this.types = e.types, this.suggester = e.suggester, this.suggestions = document.createElement("div"), this.suggestionsLoadedHandler = this.onSuggestionsLoaded.bind(this), this.deactivateHandler = this.deactivate.bind(this), this.pasteHandler = this.onPaste.bind(this), this.inputHandler = this.onInput.bind(this), this.escapeHandler = this.onEscapeKeydown.bind(this), this.commitHandler = this.onComboboxCommit.bind(this)
                }
                setup() {
                    const e = this.textarea.form;
                    a(e, "null.js:104"), e.addEventListener("reset", this.deactivateHandler), this.textarea.addEventListener("paste", this.pasteHandler), this.textarea.addEventListener("input", this.inputHandler), this.textarea.addEventListener("keydown", this.escapeHandler), this.suggester.addEventListener("combobox-commit", this.commitHandler), this.textarea.addEventListener("focusout:delay", this.teardownHandler), this.loadSuggestions()
                }
                teardown() {
                    this.deactivate();
                    const e = this.textarea.form;
                    a(e, "null.js:120"), e.removeEventListener("reset", this.deactivateHandler), this.textarea.removeEventListener("paste", this.pasteHandler), this.textarea.removeEventListener("input", this.inputHandler), this.textarea.removeEventListener("keydown", this.escapeHandler), this.suggester.removeEventListener("combobox-commit", this.commitHandler), this.textarea.removeEventListener("focusout:delay", this.teardownHandler), this.suggestionsLoadedHandler = function() {}
                }
                onPaste() {
                    this.deactivate(), this.justPasted = !0
                }
                onInput() {
                    this.justPasted ? this.justPasted = !1 : this.checkQuery()
                }
                onEscapeKeydown(e) {
                    this.suggester.hidden || "Escape" === e.key && (this.deactivate(), e.stopImmediatePropagation(), e.preventDefault())
                }
                _getDataValue(e) {
                    return this.currentSearch && this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e) : e.getAttribute("data-value")
                }
                _findIndexOfPick(e, t) {
                    let n = 1;
                    for (const s of e) {
                        if (this._getDataValue(s) === t) return n;
                        n++
                    }
                    return -1
                }
                onComboboxCommit(e) {
                    let t = e.target;
                    if (a(t instanceof HTMLElement, "null.js:177"), !t.hasAttribute("data-value")) return;
                    const n = this._getDataValue(t);
                    if (!n) return;
                    const s = this.currentSearch;
                    if (!s) return;
                    let o = this.textarea.value.substring(0, s.endIndex);
                    const i = this.textarea.value.substring(s.endIndex);
                    o = o.replace(s.type.match, s.type.replace.replace("$value", n)), this.textarea.value = o + i, this.deactivate(), this.textarea.focus(), this.textarea.selectionStart = o.length, this.textarea.selectionEnd = o.length
                }
                mentionData() {
                    const e = this.suggestions.querySelector("[data-mentions-json]");
                    if (!e) return;
                    let t = _s.get(e);
                    if (!t) {
                        const n = u(e, "data-mentions-json");
                        t = JSON.parse(n), _s.set(e, t)
                    }
                    return t
                }
                async checkQuery() {
                    const e = this.searchQuery();
                    if (e) {
                        const t = "mention" === e.type.typeid ? this.mentionData() : null;
                        if (this.currentSearch && this.currentSearch === e.query) return;
                        return this.currentSearch = e, void(await this.search(t) ? this.activate(e.startIndex) : this.deactivate())
                    }
                    this.currentSearch = null, this.deactivate()
                }
                renderResults(e, t) {
                    const n = e => {
                        const t = "user" === e.type ? e.login : e.name,
                            n = "user" === e.type ? e.name : e.description,
                            s = `${t} ${n}`;
                        return os `
        <li
          role="option"
          id="suggester-${e.id}-${e.type}-${t}"
          data-value="${t}"
          data-text="${s}"
          data-mentionable-type="${e.type}"
          data-mentionable-id="${e.id}">
          <span>${t}</span>
          <small>${n}</small>
        </li>`
                    };
                    rs((e => os `${e.map(n)}`)(t), e)
                }
                activate(e) {
                    if (this.textarea !== document.activeElement) return;
                    const t = Is(this.textarea, e + 1),
                        n = t.top,
                        s = t.left;
                    if (this.suggester.style.top = `${n}px`, this.suggester.style.left = `${s}px`, !this.suggester.hidden) return;
                    this.suggester.hidden = !1;
                    const o = this.suggester.querySelector("ul");
                    a(o, "null.js:282");
                    const i = o.id || `suggester-${Math.floor(1e5*Math.random()).toString()}`;
                    o.id = i, this.textarea.setAttribute("aria-owns", i), this.textarea.setAttribute("role", "combobox"), Ts(this.textarea, this.suggester)
                }
                deactivate() {
                    if (this.suggester.hidden) return;
                    this.suggester.hidden = !0;
                    const e = this.suggester.querySelector(".suggestions");
                    e && (e.style.display = "none"), this.textarea.removeAttribute("role"), ks(this.textarea, this.suggester)
                }
                async search(e) {
                    if (!this.currentSearch) return !1;
                    const t = this.currentSearch,
                        n = t.type,
                        s = t.query,
                        o = await n.search(this.suggestions, s, e),
                        i = o.element,
                        r = o.results;
                    if ((r && Array.isArray(r) ? r.length : r) > 0 && i) {
                        const t = i.cloneNode(!0);
                        return e && Array.isArray(r) && this.renderResults(t, r), this.suggester.innerHTML = "", this.suggester.appendChild(t), t.id = this.textarea.getAttribute("aria-owns") || "", t.style.display = "block", Hs(this.textarea, this.suggester), !0
                    }
                    return !1
                }
                searchQuery() {
                    const e = this.textarea.selectionEnd,
                        t = this.textarea.value.substring(0, e);
                    for (const n in this.types) {
                        const s = this.types[n],
                            o = t.match(s.match);
                        if (o) return s.normalizeMatch ? s.normalizeMatch(s, e, o) : this.normalizeMatch(s, e, o)
                    }
                }
                normalizeMatch(e, t, n) {
                    const s = n[2];
                    return {
                        type: e,
                        text: s,
                        query: n[3],
                        startIndex: t - s.length,
                        endIndex: t
                    }
                }
                async loadSuggestions() {
                    if (this.suggestions.hasChildNodes()) return;
                    const e = this.suggester.getAttribute("data-url");
                    if (!e) return;
                    const t = $s[e] || ($s[e] = p(e)),
                        n = await t;
                    this.suggestionsLoadedHandler(n)
                }
                onSuggestionsLoaded(e) {
                    const t = g(document, e);
                    this.suggestions.appendChild(t), document.activeElement === this.textarea && (this.currentSearch = null, this.checkQuery())
                }
            }

            function Ns(e, t, n) {
                const s = n[3],
                    o = n[4];
                return {
                    type: e,
                    text: s,
                    query: o,
                    startIndex: t - o.length,
                    endIndex: t
                }
            }
            const Ds = {
                    mention: {
                        typeid: "mention",
                        match: /(^|\s|\()(@([a-z0-9\-_\/]*))$/i,
                        replace: "$1@$value ",
                        search(e, t, n) {
                            const s = Ws(t),
                                o = e.querySelector("ul.mention-suggestions");
                            let i;
                            return i = n ? F(n, t, {
                                limit: 5,
                                score: (e, t, n) => {
                                    const o = s.score(e),
                                        i = n.score;
                                    return "number" == typeof i ? o * i : o
                                },
                                text: e => e.login ? `${e.login} ${e.name}`.trim().toLowerCase() : `${e.name} ${e.description}`.trim().toLowerCase()
                            }) : O(o, t, {
                                limit: 5,
                                text: Fs,
                                score: (e, t, n) => {
                                    const o = s.score(e);
                                    a(n, "null.js:95");
                                    const i = n.getAttribute("data-mentionable-score");
                                    return null !== i ? o * parseFloat(i) : o
                                }
                            }), Promise.resolve({
                                element: o,
                                results: i
                            })
                        }
                    },
                    auditLogUser: {
                        typeid: "auditLogUser",
                        match: /(^|\s)((-?actor:|-?user:)([a-z0-9\-+_]*))$/i,
                        replace: "$1$3$value ",
                        search(e, t) {
                            const n = e.querySelector("ul.user-suggestions"),
                                s = O(n, t, {
                                    limit: 5
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch: Ns
                    },
                    auditLogOrg: {
                        typeid: "auditLogOrg",
                        match: /(^|\s)((-?org:)([a-z0-9\-+_]*))$/i,
                        replace: "$1$3$value ",
                        search(e, t) {
                            const n = e.querySelector("ul.org-suggestions"),
                                s = O(n, t, {
                                    limit: 5
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch: Ns
                    },
                    auditLogAction: {
                        typeid: "auditLogAction",
                        match: /(^|\s)((-?action:)([a-z0-9.\-+_]*))$/i,
                        replace: "$1$3$value ",
                        search(e, t) {
                            const n = e.querySelector("ul.action-suggestions"),
                                s = O(n, t, {
                                    limit: 5
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch: Ns
                    },
                    auditLogRepo: {
                        typeid: "auditLogRepo",
                        match: /(^|\s)((-?repo:)([a-z0-9\/\-+_]*))$/i,
                        replace: "$1$3$value ",
                        search(e, t) {
                            const n = e.querySelector("ul.repo-suggestions"),
                                s = O(n, t, {
                                    limit: 5
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch: Ns
                    },
                    auditLogCountry: {
                        typeid: "auditLogCountry",
                        match: /(^|\s)((-?country:)([a-z0-9\-+_]*))$/i,
                        replace: "$1$3$value ",
                        search(e, t) {
                            const n = e.querySelector("ul.country-suggestions"),
                                s = O(n, t, {
                                    limit: 5
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch: Ns
                    },
                    emoji: {
                        typeid: "emoji",
                        match: /(^|\s|\()(:([a-z0-9\-+_]*))$/i,
                        replace: "$1$value ",
                        getValue(e) {
                            if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                            const t = e.firstElementChild;
                            return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                        },
                        search(e, t) {
                            const n = e.querySelector("ul.emoji-suggestions"),
                                s = ` ${t.toLowerCase().replace(/_/g," ")}`,
                                o = O(n, s, {
                                    limit: 5,
                                    text: Ps,
                                    score: Us
                                });
                            return Promise.resolve({
                                element: n,
                                results: o
                            })
                        }
                    },
                    search: {
                        typeid: "search",
                        match: /(^|\s)([a-z-]*)$/i,
                        replace: "$1$value",
                        getValue: e => e.getAttribute("data-value"),
                        search(e, t) {
                            const n = e.querySelector("ul.search-suggestions"),
                                s = O(n, t, {
                                    limit: 10,
                                    text: e => e.getAttribute("data-text") || "",
                                    score: Os
                                });
                            return Promise.resolve({
                                element: n,
                                results: s
                            })
                        },
                        normalizeMatch(e, t, n) {
                            const s = n[2];
                            return {
                                type: e,
                                text: s,
                                query: s,
                                startIndex: t - s.length,
                                endIndex: t
                            }
                        }
                    },
                    hashed: {
                        typeid: "issue",
                        match: /(^|\s|\()(#([a-z0-9\-_\/]*))$/i,
                        replace: "$1#$value ",
                        search(e, t) {
                            let n;
                            const s = e.querySelector("ul.hashed-suggestions"),
                                o = /^\d+$/.test(t) ? (n = new RegExp(`\\b${t}`), function(e) {
                                    return function(e, t) {
                                        const n = e.search(t);
                                        return n > -1 ? 1e3 - n : 0
                                    }(e, n)
                                }) : Ws(t).score,
                                i = O(s, t, {
                                    limit: 5,
                                    text: Fs,
                                    score: o
                                });
                            return Promise.resolve({
                                element: s,
                                results: i
                            })
                        }
                    }
                },
                Bs = {};

            function Ps(e) {
                const t = e.getAttribute("data-emoji-name") || "";
                return Bs[t] = ` ${Fs(e).replace(/_/g," ")}`, t
            }

            function Fs(e) {
                return (e.getAttribute("data-text") || "").trim().toLowerCase()
            }

            function Os(e, t) {
                const n = e.indexOf(t);
                return -1 === n ? 0 : 1 / (n + 1)
            }

            function Us(e, t) {
                const n = Bs[e].indexOf(t);
                return n > -1 ? 1e3 - n : 0
            }

            function zs(e, t, n) {
                let s = n;
                const o = [];
                for (let i = 1; i < t.length; i += 1) {
                    if (-1 === (s = e.indexOf(t[i], s))) return;
                    o.push(s++)
                }
                return o
            }

            function Vs() {
                return 2
            }

            function Ws(e) {
                let t;
                if (e) {
                    const n = e.toLowerCase().split("");
                    t = function(t) {
                        if (!t) return 0;
                        const s = function(e, t) {
                            let n, s, o, i;
                            const r = function(e, t) {
                                let n = 0;
                                const s = [];
                                for (;
                                    (n = e.indexOf(t, n)) > -1;) s.push(n++);
                                return s
                            }(e, t[0]);
                            if (0 !== r.length) {
                                if (1 === t.length) return [r[0], 1, []];
                                for (i = null, s = 0, o = r.length; s < o; s++) {
                                    const o = r[s];
                                    if (!(n = zs(e, t, o + 1))) continue;
                                    const a = n[n.length - 1] - o;
                                    (!i || a < i[1]) && (i = [o, a, n])
                                }
                                return i
                            }
                        }(t, n);
                        if (!s) return 0;
                        let o = e.length / s[1];
                        return o /= s[0] / 2 + 1
                    }
                } else t = Vs;
                return {
                    score: t
                }
            }

            function Ks(e) {
                let t = e.match(/`{3,}/g);
                return t || (t = function(e) {
                    return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "")
                }(e).match(/`/g)), null != t && t.length % 2
            }
            r("focusin:delay", ".js-suggester-field", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement, "null.js:418");
                const n = o(t, ".js-suggester-container"),
                    i = s(n, ".js-suggester");
                new Rs({
                    input: t,
                    suggester: i,
                    types: Ds,
                    disable: Ks
                }).setup()
            }), r("click", 'tab-container [role="tab"]', function(e) {
                const t = e.currentTarget,
                    n = o(t, "tab-container").querySelector(".js-filterable-field");
                if (n) {
                    const e = t.getAttribute("data-filter-placeholder");
                    e && n.setAttribute("placeholder", e), n.focus()
                }
            });
            class Js {
                constructor(e) {
                    this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.tagTemplate = e.tagTemplate, a(this.input.form, "null.js:62"), this.form = this.input.form, this.autoComplete = e.autoComplete
                }
                setup() {
                    this.container.addEventListener("click", e => {
                        const t = e.target;
                        a(t instanceof HTMLElement, "null.js:71"), t.matches(".js-remove") ? this.removeTag(e) : this.onFocus()
                    }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete.addEventListener("change", () => {
                        this.selectTag(this.autoComplete.value)
                    })
                }
                onFocus() {
                    this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
                }
                onBlur() {
                    this.inputWrap.classList.remove("focus"), this.autoComplete.open || this.onSubmit()
                }
                onSubmit() {
                    this.input.value && (this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                onKeyDown(e) {
                    switch (U(e)) {
                        case "Backspace":
                            this.onBackspace();
                            break;
                        case "Enter":
                        case "Tab":
                            this.taggifyValueWhenSuggesterHidden(e);
                            break;
                        case ",":
                        case " ":
                            this.taggifyValue(e)
                    }
                }
                taggifyValueWhenSuggesterHidden(e) {
                    !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value))
                }
                taggifyValue(e) {
                    this.input.value && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                selectTag(e) {
                    const t = this.normalizeTag(e),
                        n = this.selectedTags();
                    t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", L(this.form, "tags:changed"))
                }
                removeTag(e) {
                    const t = e.target;
                    a(t instanceof HTMLElement, "null.js:161"), e.preventDefault(), o(t, ".js-tag-input-tag").remove(), L(this.form, "tags:changed")
                }
                templateTag(e) {
                    const t = this.tagTemplate.cloneNode(!0);
                    return s(t, "input", HTMLInputElement).value = e, s(t, ".js-placeholder-tag-name").replaceWith(e), t.classList.remove("d-none", "js-template"), t
                }
                normalizeTag(e) {
                    return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
                }
                onBackspace() {
                    if (!this.input.value) {
                        const e = this.selections.querySelector("li:last-child .js-remove");
                        e && e.click()
                    }
                }
                selectedTags() {
                    const e = l(this.selections, "input", HTMLInputElement);
                    return Array.from(e).map(e => e.value).filter(e => e.length > 0)
                }
            }
            async function Gs(e) {
                const t = e.currentTarget;
                if (a(t instanceof HTMLElement, "null.js:11"), (n = t).getAttribute("data-hovercard-url") && n.closest("[data-team-hovercards-enabled]")) return void t.classList.remove("tooltipped");
                var n;
                const s = t.getAttribute("data-url");
                if (!s) return;
                const o = z(s),
                    i = u(t, "data-id"),
                    r = document.querySelectorAll(`.js-team-mention[data-id='${i}']`);
                for (const a of r) a.removeAttribute("data-url");
                try {
                    const e = await o;
                    0 === e.total ? e.members.push("This team has no members") : e.total > e.members.length && e.members.push(`${e.total-e.members.length} more`), Xs(r, function(e) {
                        if ("ListFormat" in Intl) {
                            const t = new Intl.ListFormat;
                            return t.format(e)
                        }
                        if (0 === e.length) return "";
                        if (1 === e.length) return e[0];
                        if (2 === e.length) return e.join(" and "); {
                            const t = e[e.length - 1];
                            return e.slice(0, -1).concat(`and ${t}`).join(", ")
                        }
                    }(e.members))
                } catch (c) {
                    const e = c.response ? c.response.status : 500;
                    Xs(r, u(t, 404 === e ? "data-permission-text" : "data-error-text"))
                }
            }

            function Xs(e, t) {
                for (const n of e) n.setAttribute("aria-label", t), n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline")
            }
            i(".js-tag-input-container", {
                constructor: HTMLElement,
                initialize(e) {
                    new Js({
                        container: e,
                        inputWrap: s(e, ".js-tag-input-wrapper"),
                        input: s(e, 'input[type="text"], input:not([type])', HTMLInputElement),
                        selections: s(e, ".js-tag-input-selected-tags"),
                        tagTemplate: s(e, ".js-template"),
                        autoComplete: s(e, "auto-complete", AutocompleteElement)
                    }).setup()
                }
            }), i(".js-team-mention", function(e) {
                e.addEventListener("mouseenter", Gs)
            });
            let Qs = 0;

            function Ys(e) {
                return e.classList.remove("js-unread-item", "unread-item")
            }

            function Zs() {
                if (document.querySelector(":target")) return;
                const e = W(location.hash).toLowerCase(),
                    t = K(document, `user-content-${e}`);
                t && t.scrollIntoView()
            }

            function eo(e) {
                a(e.target instanceof Element, "null.js:26"), e.target.classList.remove("will-transition-once")
            }
            V(".js-unread-item", function(e) {
                Ys(e)
            }), i(".js-unread-item", {
                add() {
                    Qs++
                },
                remove() {
                    0 === --Qs && function() {
                        if (!document.hasFocus()) return;
                        const e = document.querySelector(".js-timeline-marker-form");
                        e && e instanceof HTMLFormElement && v(e)
                    }()
                }
            }), r("socket:message", ".js-discussion", function(e) {
                if (e.currentTarget === e.target)
                    for (const t of document.querySelectorAll(".js-unread-item")) Ys(t)
            }), window.addEventListener("hashchange", Zs), document.addEventListener("pjax:success", Zs), async function() {
                await B, Zs()
            }(), r("click", "a[href]", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
                    e.defaultPrevented || Zs()
                })
            }), i(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e => H(e, "transitionend", eo)
            });
            const to = new E;
            async function no(e) {
                const t = e.getAttribute("data-item-name") || "items",
                    n = parseInt(e.getAttribute("data-item-minimum")) || 0,
                    s = parseInt(e.getAttribute("data-item-count")) || 0,
                    o = Math.max(n, parseInt(e.value) || 0),
                    i = o > 300,
                    r = document.querySelector(".js-purchase-button");
                r instanceof HTMLButtonElement && (r.disabled = 0 === o || i);
                const a = document.querySelector(".js-downgrade-button");
                a instanceof HTMLButtonElement && (a.disabled = o === s);
                const c = new URL(u(e, "data-url"), window.location.origin),
                    l = new URLSearchParams(c.search.slice(1));
                l.append(t, o.toString()), document.querySelector(".js-transform-user") && l.append("transform_user", "1"), c.search = l.toString();
                const d = await to.push(z(c)),
                    m = document.querySelector(".js-contact-us");
                m && m.classList.toggle("d-none", !i);
                const f = document.querySelector(".js-payment-summary");
                f && f.classList.toggle("d-none", i);
                const g = document.querySelector(".js-billing-section");
                g && g.classList.toggle("has-removed-contents", d.free);
                const p = document.querySelector(".js-upgrade-info");
                p && p.classList.toggle("d-none", o <= 0);
                const h = document.querySelector(".js-downgrade-info");
                h && h.classList.toggle("d-none", o >= 0);
                const j = document.querySelector(".js-extra-seats-line-item");
                j && j.classList.toggle("d-none", d.no_additional_seats);
                const v = d.selectors;
                for (const u in v)
                    for (const e of document.querySelectorAll(u)) e.textContent = v[u];
                T(J(), "", d.url)
            }
            i(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    G(e) && no(e), k(e, function() {
                        no(e)
                    })
                }
            }), i(".js-addon-downgrade-field", {
                constructor: HTMLInputElement,
                add(e) {
                    G(e) && no(e), e.addEventListener("change", function() {
                        no(e)
                    })
                }
            }), i(".js-repo-health", function(e) {
                const t = o(e, "form", HTMLFormElement),
                    n = s(t, ".js-comment-field", HTMLTextAreaElement),
                    i = s(t, ".js-repo-name", HTMLInputElement);

                function r() {
                    !async function(e, t, n) {
                        const o = s(document, ".js-repo-health-check", HTMLFormElement);
                        s(o, ".js-repo-health-name", HTMLInputElement).value = n, e.classList.remove("d-none"), e.classList.add("is-loading"), t.setCustomValidity("checking"), L(t, "change");
                        const i = await $(document, o.action, {
                                method: "POST",
                                body: new FormData(o)
                            }),
                            r = s(e, ".js-repo-health-results");
                        r.innerHTML = "", r.appendChild(i), e.classList.remove("is-loading"), t.setCustomValidity(""), L(t, "change")
                    }(e, n, i.value)
                }
                "hidden" === i.type ? n.addEventListener("focus", r) : i.addEventListener("change", r)
            });
            let so = null;
            const oo = 300,
                io = [".", ".", "."];
            let ro = 0;
            const ao = new WeakMap;

            function co() {
                const e = s(document, ".js-audit-log-export-status");
                return ao.set(e, e.textContent), so = setInterval(function() {
                    const t = io.slice(0, ro).join("");
                    e.textContent = `Exporting${t}`, ro >= 3 ? ro = 0 : ro += 1
                }, oo), s(document, ".js-audit-log-export-button").classList.add("disabled")
            }

            function lo() {
                s(document, ".js-audit-log-export-button").classList.remove("disabled");
                const e = s(document, ".js-audit-log-export-status");
                e.textContent = ao.get(e) || "", null !== so && clearInterval(so), ro = 0
            }

            function uo() {
                lo(), X()
            }
            j(".js-audit-log-export-form", async function(e, t) {
                let n;
                co();
                try {
                    n = await t.json()
                } catch (i) {
                    return void uo()
                }
                const s = n.json;
                try {
                    await Q(s.job_url)
                } catch (i) {
                    return void uo()
                }
                var o;
                o = s.export_url, lo(), window.location = o
            }), r("combobox-commit", ".audit-search-form .js-suggester", function(e) {
                const t = o(e.currentTarget, "form", HTMLFormElement);
                v(t)
            });
            const mo = new E;

            function fo(e) {
                const t = document.querySelector(".js-membership-tabs");
                if (t) {
                    const n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }

            function go() {
                return s(document, ".js-business-saml-provider-settings-form", HTMLFormElement)
            }

            function po() {
                return go().querySelector(".js-business-saml-form-inputs")
            }

            function ho(e) {
                e && e.classList.remove("d-none")
            }

            function jo() {
                return "1" === s(document, ".js-business-saml-currently-enabled", HTMLInputElement).value && !s(document, ".js-business-enable-saml", HTMLInputElement).checked
            }

            function vo() {
                return s(document, ".is-submit-button-value", HTMLInputElement)
            }

            function bo() {
                go().submit()
            }

            function Lo() {
                const e = document.querySelector(".js-business-enable-saml");
                e && e instanceof HTMLInputElement && (e.checked = !0, ho(po()))
            }

            function yo() {
                const e = "0" === s(document, ".js-business-two-factor-currently-enabled", HTMLInputElement).value;
                return s(document, ".js-business-enable-two-factor", HTMLInputElement).checked && e
            }
            if (r("change", ".js-bulk-actions-toggle", function(e) {
                    const t = e.currentTarget,
                        n = o(t, ".js-bulk-actions-container");
                    L(n, "bulk-actions:update")
                }), r("bulk-actions:update", ".js-bulk-actions-container", b(async function(e) {
                    const t = e.target,
                        n = s(t, ".js-bulk-actions"),
                        i = !!t.querySelector(".js-bulk-actions-toggle:checked"),
                        r = await mo.push(p(function(e) {
                            const t = Array.from(e.querySelectorAll(".js-bulk-actions-toggle:checked")).map(e => u(o(e, ".js-bulk-actions-item"), "data-bulk-actions-id")).sort(),
                                n = `${u(e,"data-bulk-actions-parameter")}[]`,
                                s = new URL(u(e, "data-bulk-actions-url"), window.location.origin),
                                i = new URLSearchParams(s.search.slice(1));
                            for (const o of t) i.append(n, o);
                            return s.search = i.toString(), s.toString()
                        }(t)));
                    i ? (fo(t), n.innerHTML = r) : (n.innerHTML = r, fo(t))
                }, 100)), r("change", ".js-select-initial-admins", function(e) {
                    if (e.target !== e.currentTarget) return;
                    const t = e.target;
                    a(t instanceof AutocompleteElement, "null.js:14");
                    const n = o(t, "form");
                    t.value && (! function(e, t) {
                        const n = s(e, ".js-business-admin-login-list", HTMLInputElement);
                        n.value = `${n.value} ${t}`;
                        const o = s(e, ".js-initial-admins", HTMLTableElement),
                            i = s(e, ".js-admin-template-row", HTMLTableRowElement).cloneNode(!0);
                        i.setAttribute("data-value", t), s(i, ".js-admin-login", HTMLElement).textContent = t, o.appendChild(i), i.classList.remove("d-none"), o.classList.remove("d-none")
                    }(n, t.value), t.value = "")
                }), r("click", ".js-deselect-admin", function(e) {
                    let t = e.target;
                    ! function(e, t) {
                        const n = o(t, "tr"),
                            i = n.getAttribute("data-value"),
                            r = s(e, ".js-business-admin-login-list", HTMLInputElement);
                        null != i && (r.value = r.value.replace(i, ""));
                        n.remove()
                    }(o(t, "form"), t)
                }), r("click", ".js-preview-sign-in-message", function(e) {
                    const t = s(document, "#custom_messages_sign_in_message", HTMLTextAreaElement).value;
                    s(document, "#sign_in_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    a(n instanceof HTMLButtonElement, "null.js:69"), a(n.form, "null.js:70"), n.form.submit()
                }), r("click", ".js-preview-sign-out-message", function(e) {
                    const t = s(document, "#custom_messages_sign_out_message", HTMLTextAreaElement).value;
                    s(document, "#sign_out_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    a(n instanceof HTMLButtonElement, "null.js:79"), a(n.form, "null.js:80"), n.form.submit()
                }), r("click", ".js-preview-auth-provider-name", function(e) {
                    const t = s(document, "#custom_messages_auth_provider_name", HTMLInputElement).value;
                    s(document, "#auth_provider_name", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    a(n instanceof HTMLButtonElement, "null.js:89"), a(n.form, "null.js:90"), v(n.form)
                }), r("click", ".js-preview-suspended-message", function(e) {
                    const t = s(document, "#custom_messages_suspended_message", HTMLTextAreaElement).value;
                    s(document, "#suspended_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    a(n instanceof HTMLButtonElement && n.form, "null.js:99"), n.form.submit()
                }), r("click", ".js-admin-settings-policy-input", function(e) {
                    let t = e.currentTarget;
                    a(t instanceof HTMLInputElement, "null.js:104"), a(t.form instanceof HTMLFormElement, "null.js:105"), v(t.form)
                }), r("click", ".js-admin-settings-select", function(e) {
                    let t = e.currentTarget;
                    const n = s(t, ".js-value"),
                        i = o(t, "form", HTMLFormElement);
                    s(i, ".js-item-value", HTMLInputElement).value = n.textContent, v(i)
                }), r("click", ".js-business-enable-saml", function(e) {
                    var t;
                    a(e.currentTarget instanceof HTMLInputElement, "null.js:185"), e.currentTarget.checked ? ho(po()) : (t = po()) && t.classList.add("d-none")
                }), r("click", ".js-business-saml-submit", function(e) {
                    e.preventDefault(), a(e.currentTarget instanceof HTMLButtonElement, "null.js:202"), Z(e.currentTarget), v(go())
                }), r("submit", ".js-business-saml-provider-settings-form", function(e) {
                    e.preventDefault(), "test_settings" === vo().name ? bo() : "save_settings" === vo().name && (jo() ? async function() {
                        (await Y({
                            content: s(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                        })).addEventListener("dialog:remove", Lo)
                    }(): bo())
                }), r("click", ".js-business-two-factor-submit-button", function(e) {
                    yo() || e.preventDefault()
                }), top !== window) {
                alert("For security reasons, framing is not allowed.");
                try {
                    top.location.replace(document.location)
                } catch (Nd) {}
            }
            const Eo = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
                wo = /Macintosh.*Safari/.test(navigator.userAgent);
            let To, ko = !1;

            function Ao() {
                To = document.activeElement, document.body && (Eo || wo) && document.body.classList.toggle("intent-mouse", ko)
            }

            function Mo(e) {
                return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength")) : e.maxLength
            }

            function So(e) {
                const t = Mo(e);
                ! function(e, t, n) {
                    const o = n.closest(".js-characters-remaining-container");
                    if (!o) return;
                    const i = s(o, ".js-characters-remaining"),
                        r = String(i.getAttribute("data-suffix")),
                        a = t - ee(e);
                    a <= 20 ? (i.textContent = `${a} ${r}`, i.classList.toggle("text-red", a <= 5), i.hidden = !1) : i.hidden = !0
                }(e.value, t, e)
            }

            function xo(e) {
                const t = e.querySelectorAll(".js-characters-remaining-container");
                for (const n of t) {
                    So(s(n, ".js-characters-remaining-field", HTMLInputElement))
                }
            }
            document.addEventListener("mousedown", function() {
                ko = !0, To === document.activeElement && Ao()
            }, {
                capture: !0
            }), document.addEventListener("keydown", function() {
                ko = !1
            }, {
                capture: !0
            }), document.addEventListener("focusin", Ao, {
                capture: !0
            }), m(".js-characters-remaining-field", function(e) {
                function t() {
                    So(e)
                }
                a(e instanceof HTMLInputElement, "null.js:59"), t(), e.addEventListener("input", t), e.addEventListener("blur", () => {
                    e.removeEventListener("input", t)
                }, {
                    once: !0
                })
            });
            const Ho = {}.hasOwnProperty,
                Co = [].slice;

            function qo(e) {
                if (console && console.warn) return console.warn(e)
            }
            const Io = {
                host: "collector.githubapp.com",
                type: "page_view",
                dimensions: {},
                measures: {},
                context: {},
                actor: {},
                image: new Image,
                performance: {},
                expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
                recordPageView() {
                    return this.applyMetaTags(), null != this.app && (null == this.host ? (qo("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
                },
                setHost(e) {
                    this.host = e
                },
                setApp(e) {
                    this.app = e
                },
                setDimensions(e) {
                    this.dimensions = e
                },
                addDimensions(e) {
                    let t;
                    null == this.dimensions && (this.dimensions = {});
                    const n = [];
                    for (t in e) {
                        if (!Ho.call(e, t)) continue;
                        const s = e[t];
                        n.push(this.dimensions[t] = s)
                    }
                    return n
                },
                setMeasures(e) {
                    this.measures = e
                },
                addMeasures(e) {
                    let t;
                    null == this.measures && (this.measures = {});
                    const n = [];
                    for (t in e) {
                        if (!Ho.call(e, t)) continue;
                        const s = e[t];
                        n.push(this.measures[t] = s)
                    }
                    return n
                },
                setContext(e) {
                    this.context = e
                },
                addContext(e) {
                    let t;
                    null == this.context && (this.context = {});
                    const n = [];
                    for (t in e) {
                        if (!Ho.call(e, t)) continue;
                        const s = e[t];
                        n.push(this.context[t] = s)
                    }
                    return n
                },
                setActor(e) {
                    this.actor = e
                },
                push(e) {
                    return this.applyCall(e)
                },
                enablePerformance() {
                    this.performance = this._performanceTiming()
                },
                _recordSrc(e, t, n, s) {
                    return `//${this.host}/${this.app}/${e}?${this._queryString(t,n,s)}`
                },
                _src() {
                    return `//${this.host}/${this.app}/${this.type}?${this._queryString()}`
                },
                _queryString(e, t, n) {
                    let s, o;
                    const i = function() {
                        const e = this._params(),
                            t = [];
                        for (s in e) o = e[s], t.push(`dimensions[${s}]=${o}`);
                        return t
                    }.call(this);
                    return i.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))), i.push(this._encodeObject("measures", this._merge(this.measures, t))), null != this.performance && i.push(this._encodeObject("measures", {
                        performance_timing: this.performance
                    })), i.push(this._encodeObject("context", this._merge(this.context, n))), i.push(this._actor()), i.push(this._encodeObject("dimensions", {
                        cid: this._clientId()
                    })), i.join("&")
                },
                _clearPerformance() {
                    this.performance = null
                },
                _performanceTiming() {
                    let e, t, n;
                    if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
                    const s = {},
                        o = this.expectedPerformanceTimingKeys;
                    for (e = 0, t = o.length; e < t; e++) {
                        const t = o[e];
                        s[t] = null != (n = window.performance.timing[t]) ? n : 0
                    }
                    const i = [],
                        r = s.navigationStart;
                    for (const a in s) {
                        const e = s[a],
                            t = 0 === e ? null : e - r;
                        i.push(t)
                    }
                    return `1-${i.join("-")}`
                },
                _params() {
                    return {
                        page: this._encode(this._page()),
                        title: this._encode(this._title()),
                        referrer: this._encode(this._referrer()),
                        user_agent: this._encode(this._agent()),
                        screen_resolution: this._encode(this._screenResolution()),
                        pixel_ratio: this._encode(this._pixelRatio()),
                        browser_resolution: this._encode(this._browserResolution()),
                        tz_seconds: this._encode(this._tzSeconds()),
                        timestamp: (new Date).getTime()
                    }
                },
                _page() {
                    try {
                        const t = document.querySelector("meta[name=octolytics-location]");
                        return t instanceof HTMLMetaElement ? document.location.origin + t.content : document.location.href
                    } catch (e) {}
                },
                _title() {
                    try {
                        return document.title
                    } catch (e) {}
                },
                _referrer() {
                    let e;
                    e = "";
                    try {
                        e = window.top.document.referrer
                    } catch (t) {
                        if (window.parent) try {
                            e = window.parent.document.referrer
                        } catch (t) {}
                    }
                    return "" === e && (e = document.referrer), e
                },
                _agent() {
                    try {
                        return navigator.userAgent
                    } catch (e) {}
                },
                _screenResolution() {
                    try {
                        return `${screen.width}x${screen.height}`
                    } catch (e) {
                        return "unknown"
                    }
                },
                _pixelRatio: () => window.devicePixelRatio,
                _browserResolution() {
                    let e, t;
                    try {
                        return t = 0, e = 0, "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), `${t}x${e}`
                    } catch (n) {
                        return "unknown"
                    }
                },
                _tzSeconds() {
                    try {
                        return -60 * (new Date).getTimezoneOffset()
                    } catch (e) {
                        return ""
                    }
                },
                _merge() {
                    let e, t, n;
                    for (var s = arguments.length, o = new Array(s), i = 0; i < s; i++) o[i] = arguments[i];
                    const r = 1 <= o.length ? Co.call(o, 0) : [],
                        a = {};
                    for (e = 0, n = r.length; e < n; e++) {
                        const n = r[e];
                        for (t in n) {
                            const e = n[t];
                            a[t] = e
                        }
                    }
                    return a
                },
                _encodeObject(e, t) {
                    let n, s, o;
                    const i = [];
                    if (null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t))
                        for (n = 0, s = t.length; n < s; n++) {
                            const s = t[n];
                            i.push(this._encodeObject(`${e}[]`, s))
                        } else if (t === Object(t))
                            for (o in t) i.push(this._encodeObject(`${e}[${o}]`, t[o]));
                        else i.push(`${e}=${this._encode(t)}`);
                    return i.join("&")
                },
                _actor() {
                    let e, t, n;
                    const s = [],
                        o = this.actor;
                    for (t in o) {
                        const i = o[t],
                            r = `dimensions[actor_${t}]`;
                        if (i.join)
                            for (e = 0, n = i.length; e < n; e++) {
                                const t = i[e];
                                s.push(`${r}[]=${this._encode(t)}`)
                            } else s.push(`${r}=${this._encode(i)}`)
                    }
                    return s.join("&")
                },
                _getCookie(e) {
                    let t, n;
                    const s = [],
                        o = document.cookie.split(";");
                    for (t = 0, n = o.length; t < n; t++) {
                        const n = o[t].trim().split("=");
                        if (n.length < 2) continue;
                        const i = n[0],
                            r = n[1];
                        i === e && s.push({
                            key: i,
                            value: r
                        })
                    }
                    return s
                },
                _clientId() {
                    let e;
                    return "" === (e = this._getClientId()) && (e = this._setClientId()), e
                },
                _getClientId() {
                    let e, t, n;
                    const s = this._getCookie("_octo"),
                        o = [];
                    for (t = 0, n = s.length; t < n; t++) {
                        const n = s[t].value.split(".");
                        if ("GH1" === n.shift() && n.length > 1) {
                            const t = n.shift().split("-");
                            1 === t.length && (t[1] = "1"), t[0] *= 1, t[1] *= 1, e = n.join("."), o.push([t, e])
                        }
                    }
                    return e = "", o.length > 0 && (e = o.sort().reverse()[0][1]), e
                },
                _setClientId() {
                    const e = (new Date).getTime(),
                        t = `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(e/1e3)}`,
                        n = `GH1.1.${t}`,
                        s = new Date(e + 63072e6).toUTCString(),
                        o = document.domain;
                    if (null == o) throw new Error("Unable to get document domain");
                    const i = `.${o.split(".").reverse().slice(0,2).reverse().join(".")}`;
                    return document.cookie = `_octo=${n}; expires=${s}; path=/; domain=${i}`, t
                },
                _encode: e => null != e ? window.encodeURIComponent(e) : "",
                applyQueuedCalls(e) {
                    let t, n;
                    const s = [];
                    for (t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        s.push(this.applyCall(n))
                    }
                    return s
                },
                applyCall(e) {
                    const t = e[0],
                        n = e.slice(1);
                    return this[t] ? this[t](...n) : qo(`${t} is not a valid method`)
                },
                applyMetaTags() {
                    const e = this.loadMetaTags();
                    return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
                },
                loadMetaTags() {
                    let e, t;
                    const n = {
                            dimensions: {},
                            measures: {},
                            context: {},
                            actor: {}
                        },
                        s = document.getElementsByTagName("meta");
                    for (e = 0, t = s.length; e < t; e++) {
                        const t = s[e];
                        if (t.name && t.content) {
                            const e = t.name.match(this.octolyticsMetaTagName);
                            if (e) switch (e[1]) {
                                case "host":
                                    n.host = t.content;
                                    break;
                                case "app-id":
                                case "app":
                                    n.app = t.content;
                                    break;
                                case "dimension":
                                    this._addField(n.dimensions, e[2], t);
                                    break;
                                case "measure":
                                    this._addField(n.measures, e[2], t);
                                    break;
                                case "context":
                                    this._addField(n.context, e[2], t);
                                    break;
                                case "actor":
                                    this._addField(n.actor, e[2], t)
                            }
                        }
                    }
                    return n
                },
                _addField(e, t, n) {
                    n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content
                },
                _objectIsEmpty(e) {
                    let t;
                    for (t in e)
                        if (Ho.call(e, t)) return !1;
                    return !0
                },
                octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
            };
            if (window._octo) {
                if (window._octo.slice) {
                    const e = window._octo.slice(0);
                    window._octo = Io, window._octo.applyQueuedCalls(e)
                }
            } else window._octo = Io;

            function _o(e) {
                const t = u(e, "data-fieldname");
                return document.querySelectorAll(`span[data-fieldname="${t}"]`)
            }

            function $o(e, t) {
                if (e.value)
                    for (const n of t) n.textContent = e.value
            }

            function Ro(e, t) {
                return e.length < t.length ? -1 : e.length > t.length ? 1 : e.localeCompare(t)
            }

            function No(e, t) {
                const n = e.getBoundingClientRect();
                return (t.getBoundingClientRect().width - n.width) / 2
            }

            function Do(e, t) {
                const s = e.querySelector("svg");
                if (!s) return;
                const o = s.querySelector(".js-highlight-blob"),
                    i = Math.floor(e.clientWidth),
                    r = Math.max(i, 250),
                    c = r,
                    l = s.querySelector(".js-highlight-label-top"),
                    u = s.querySelector(".js-highlight-label-bottom"),
                    d = s.querySelector(".js-highlight-label-right"),
                    m = s.querySelector(".js-highlight-label-left"),
                    f = s.querySelector(".js-highlight-percent-top"),
                    g = s.querySelector(".js-highlight-percent-bottom"),
                    p = s.querySelector(".js-highlight-percent-right"),
                    h = s.querySelector(".js-highlight-percent-left"),
                    j = s.querySelector(".js-highlight-x-axis"),
                    v = s.querySelector(".js-highlight-y-axis"),
                    b = s.querySelector(".js-highlight-top-ellipse"),
                    L = s.querySelector(".js-highlight-right-ellipse"),
                    y = s.querySelector(".js-highlight-bottom-ellipse"),
                    E = s.querySelector(".js-highlight-left-ellipse"),
                    w = e.querySelector(".js-activity-overview-graph-spinner"),
                    T = s.querySelector("g");
                a(T, "null.js:72"), a(o, "null.js:73"), a(l, "null.js:74"), a(u, "null.js:75"), a(d, "null.js:76"), a(m, "null.js:77"), a(f, "null.js:78"), a(g, "null.js:79"), a(p, "null.js:80"), a(h, "null.js:81"), a(j, "null.js:82"), a(v, "null.js:83"), a(b, "null.js:84"), a(L, "null.js:85"), a(y, "null.js:86"), a(E, "null.js:87"), a(w, "null.js:88"), T.removeAttribute("transform"), s.classList.remove("d-none"), s.classList.add("d-block"), w.classList.remove("d-block"), w.classList.add("d-none"), l.innerHTML = "", d.innerHTML = "", u.innerHTML = "", m.innerHTML = "", f.innerHTML = "&nbsp;", p.innerHTML = "&nbsp;", g.innerHTML = "&nbsp;", h.innerHTML = "&nbsp;";
                const k = Object.keys(t.percentages).sort(Ro),
                    A = k.slice(0, 2).sort(),
                    M = n(A, 2),
                    S = M[0],
                    x = M[1],
                    H = k.slice(2, 4).sort(),
                    C = n(H, 2),
                    q = C[0],
                    I = C[1],
                    _ = t.percentages[q],
                    $ = t.percentages[x],
                    R = t.percentages[I],
                    N = t.percentages[S];
                let D = null;
                const B = (e, n) => {
                        const s = t.percentages[e];
                        if (s > 0) return D = n, `${s}%`
                    },
                    P = B(q, f);
                P && (f.textContent = P);
                const F = B(x, p);
                F && (p.textContent = F);
                const O = B(I, g);
                O && (g.textContent = O);
                const U = B(S, h);
                U && (h.textContent = U);
                const z = r / 2,
                    V = r / 2;
                l.appendChild(document.createTextNode(q)), l.setAttribute("dx", z.toString()), u.appendChild(document.createTextNode(I)), u.setAttribute("dx", V.toString()), f.setAttribute("dx", z.toString()), g.setAttribute("dx", V.toString());
                const W = l.getBoundingClientRect().height;
                let K = 0;
                D && (K = D.getBoundingClientRect().height);
                let J = c / 2 + W / 4,
                    G = c / 2 + W / 4;
                N > 0 && (J = J + K / 2 + 2.5), $ > 0 && (G = G + K / 2 + 2.5), m.appendChild(document.createTextNode(S)), m.setAttribute("dy", J.toString()), d.appendChild(document.createTextNode(x)), d.setAttribute("dy", G.toString());
                const X = J - W,
                    Q = G - W;
                h.setAttribute("dy", X.toString()), p.setAttribute("dy", Q.toString());
                let Y = _ / 100,
                    Z = R / 100,
                    ee = N / 100,
                    te = $ / 100;
                const ne = Math.max(Y, Z, ee, te),
                    se = e => {
                        return 1 * e / ne + 0
                    };
                Y = se(Y), Z = se(Z), ee = se(ee), te = se(te);
                const oe = function(e) {
                        let t = 0;
                        for (const n of e) {
                            const e = n.getBoundingClientRect();
                            e.width > t && (t = e.width)
                        }
                        return t
                    }([m, d, l, u]) + 10,
                    ie = Math.max(oe, W),
                    re = r / 2,
                    ae = c / 2,
                    ce = re,
                    le = ie,
                    ue = re,
                    de = c - ie,
                    me = ie,
                    fe = ae,
                    ge = r - ie,
                    pe = ae,
                    he = re - me,
                    je = ae - le;
                let ve = le + (1 - Y) * je,
                    be = Math.max(de - (1 - Z) * je, ae),
                    Le = me + (1 - ee) * he,
                    ye = ge - (1 - te) * he;
                j.setAttribute("x1", me.toString()), j.setAttribute("y1", ae.toString()), j.setAttribute("x2", ge.toString()), j.setAttribute("y2", ae.toString()), v.setAttribute("x1", re.toString()), v.setAttribute("y1", le.toString()), v.setAttribute("x2", re.toString()), v.setAttribute("y2", de.toString()), ve + 4 < ae && (ve += 4), be - 4 > ae && (be -= 4), Le + 4 < re && (Le += 4), ye - 4 > re && (ye -= 4);
                const Ee = le - 10,
                    we = ge + 10;
                let Te = de + 10 + 8;
                R > 0 && (Te += K);
                const ke = me - 12;
                l.setAttribute("dy", Ee.toString()), d.setAttribute("dx", we.toString()), u.setAttribute("dy", Te.toString()), m.setAttribute("dx", ke.toString());
                const Ae = ke - No(h, m),
                    Me = we + No(p, d);
                h.setAttribute("dx", Ae.toString()), p.setAttribute("dx", Me.toString());
                const Se = Ee - W,
                    xe = Te - W;
                f.setAttribute("dy", Se.toString()), g.setAttribute("dy", xe.toString());
                0 === _ ? b.classList.add("d-none") : (b.setAttribute("cx", ce.toString()), b.setAttribute("cy", (ve - 2).toString())), 0 === $ ? L.classList.add("d-none") : (L.setAttribute("cx", (ye + 2).toString()), L.setAttribute("cy", pe.toString())), 0 === R ? y.classList.add("d-none") : (y.setAttribute("cx", ue.toString()), y.setAttribute("cy", (be + 2).toString())), 0 === N ? E.classList.add("d-none") : (E.setAttribute("cx", (Le - 2).toString()), E.setAttribute("cy", fe.toString()));
                const He = T.getBoundingClientRect(),
                    Ce = s.getBoundingClientRect(),
                    qe = 0 - (He.top - Ce.top),
                    Ie = 0 - (He.left - Ce.left);
                T.setAttribute("transform", `translate(${Ie}, ${qe})`);
                const _e = Math.ceil(He.width),
                    $e = Math.ceil(He.height);
                s.setAttribute("width", _e.toString()), s.setAttribute("height", $e.toString());
                const Re = `M${ce},${ve} ${[[ye,pe],[ue,be],[Le,fe]].map(e=>`L${e[0]},${e[1]}`).join(" ")} z`;
                _ + $ + R + N !== 0 && o.setAttribute("d", Re)
            }
            document.addEventListener("keydown", e => {
                if ("Escape" !== e.key) return;
                if (e.target !== document.body) return;
                const t = document.querySelector(".js-targetable-comment:target");
                t && te(t, () => {
                    window.location.hash = "", window.history.replaceState(null, null, window.location.pathname + window.location.search)
                })
            }), document.addEventListener("click", e => {
                const t = document.querySelector(".js-targetable-comment:target");
                t && e.target instanceof HTMLElement && (t.contains(e.target) || te(t, () => {
                    window.location.hash = "", window.history.replaceState(null, null, window.location.pathname + window.location.search)
                }))
            }), m(".js-template-form-input", function(e) {
                a(e instanceof HTMLInputElement, "null.js:28");
                const t = _o(e);

                function n() {
                    $o(e, t)
                }

                function s(e) {
                    for (const n of t) n.classList.toggle("CommunityTemplate-highlight--focus", e)
                }
                s(!0), e.addEventListener("input", n), e.addEventListener("blur", function t() {
                    s(!1), e.removeEventListener("input", n), e.removeEventListener("blur", t)
                })
            }), r("click", ".js-template-highlight", function(e) {
                (function(e) {
                    const t = u(e, "data-fieldname");
                    return s(document, `input[data-fieldname="${t}"]`, HTMLInputElement)
                })(e.currentTarget).focus()
            }), i(".js-templates", function() {
                for (const e of l(document, ".js-template-form-input", HTMLInputElement)) {
                    $o(e, _o(e))
                }
            }), i(".js-resume-contribute-pull-request-form", function(e) {
                a(e instanceof HTMLFormElement, "null.js:8"), v(e)
            }), i(".js-activity-overview-graph-container", function(e) {
                const t = u(e, "data-percentages"),
                    n = {
                        percentages: JSON.parse(t)
                    };
                if (Do(e, n), "true" === e.getAttribute("data-responsive-graph")) {
                    const t = ne(Do.bind(null, e, n), 100);
                    return {
                        add() {
                            window.addEventListener("resize", t)
                        },
                        remove() {
                            window.removeEventListener("resize", t)
                        }
                    }
                }
            }), r("submit", "form.js-post-recovery-token", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLFormElement, "null.js:41"), e.preventDefault(), async function(e) {
                    const t = s(document, ".js-delegated-account-recovery-submit", HTMLButtonElement),
                        n = s(document, ".js-create-recovery-token-form", HTMLFormElement);
                    e.classList.remove("failed"), e.classList.add("loading"), t.disabled = !0;
                    try {
                        const s = await se(n),
                            i = await s.json();
                        oe(e, {
                            token: i.token,
                            state: i.state_url
                        }), e.submit()
                    } catch (o) {
                        e.classList.remove("loading"), e.classList.add("failed"), t.disabled = !1
                    }
                }(t)
            }), i("form.js-recovery-provider-auto-redirect", {
                constructor: HTMLFormElement,
                initialize: function(e) {
                    e.submit()
                }
            }), r("click", ".js-sub-dependencies", async function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:9");
                const n = t,
                    s = n.getAttribute("data-loaded"),
                    o = n.querySelector(".js-expanded"),
                    i = n.querySelector(".js-collapsed"),
                    r = n.closest(".js-details-container");
                if (o && o.classList.toggle("d-none"), i && i.classList.toggle("d-none"), r && r.classList.toggle("bg-gray-light"), !s) {
                    n.setAttribute("data-loaded", "true");
                    const e = u(n, "data-sub-dependency-url"),
                        t = n.closest(".js-dependency"),
                        s = await $(document, e);
                    t && t.after(s)
                }
            });
            let Bo = null;

            function Po(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:27"), t.hasAttribute("open") ? (Bo && Bo !== t && Bo.removeAttribute("open"), Bo = t) : t === Bo && (Bo = null)
            }
            async function Fo(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:45");
                const n = t,
                    s = t.hasAttribute("open");
                L(n, s ? "menu:activate" : "menu:deactivate"), await M(), L(n, s ? "menu:activated" : "menu:deactivated")
            }

            function Oo(e) {
                let t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = o(t, "details"),
                    i = u(n, "data-deferred-details-content-url");
                n.removeAttribute("data-deferred-details-content-url"), s(n, "include-fragment", IncludeFragmentElement).src = i
            }
            async function Uo(e) {
                const t = e.getAttribute("data-url");
                if (await async function(e) {
                        const t = e;
                        if (!t) return !1;
                        try {
                            const e = await z(t);
                            return e.has_gravatar
                        } catch (n) {
                            return !1
                        }
                    }(t)) {
                    const t = e.getAttribute("data-gravatar-text");
                    null != t && (e.textContent = t)
                }
            }

            function zo(e) {
                const t = e.ownerDocument;
                e.scrollIntoView(), t.defaultView.scrollBy(0, -Vo(t))
            }

            function Vo(e) {
                ae();
                const t = e.querySelectorAll(".js-sticky-offset-scroll"),
                    n = e.querySelectorAll(".js-position-sticky");
                return Math.max(0, ...Array.from(t).map(e => {
                    const t = e.getBoundingClientRect(),
                        n = t.top,
                        s = t.height;
                    return 0 === n ? s : 0
                })) + Math.max(0, ...Array.from(n).map(e => {
                    const t = e.getBoundingClientRect(),
                        n = t.top,
                        s = t.height,
                        o = parseInt(getComputedStyle(e).top);
                    if (!e.parentElement) return 0;
                    const i = e.parentElement.getBoundingClientRect().top;
                    return n === o && i < 0 ? s : 0
                }))
            }

            function Wo(e) {
                const t = Ko();
                if (!t) return;
                Jo(e, t);
                const n = function(e, t) {
                    const n = function(e, t) {
                        const n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
                        if (!n) return;
                        const s = n[1],
                            o = e.querySelector(`a[name='${s}']`);
                        if (!o) return;
                        const i = o.nextElementSibling;
                        if (i && !i.querySelector(".js-diff-load-container")) return;
                        return i
                    }(e, t);
                    if (n) return n;
                    return function(e, t) {
                        const n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
                        if (!n) return;
                        const s = n[1],
                            o = e.querySelector(`#diff-with-comment-${s}`);
                        if (!o) return;
                        return o.closest(".js-file")
                    }(e, t)
                }(e, t);
                n && (zo(n), Xo(n))
            }

            function Ko() {
                return window.location.hash.slice(1)
            }

            function Jo(e, t) {
                const n = K(e.ownerDocument, t);
                n && e.contains(n) && zo(n)
            }

            function Go(e) {
                let t = e.currentTarget;
                a(t instanceof Element, "null.js:146"), s(t, ".js-diff-progressive-spinner").classList.add("d-none"), s(t, ".js-diff-progressive-retry").classList.remove("d-none")
            }

            function Xo(e) {
                const t = s(e, ".js-diff-entry-loader", IncludeFragmentElement),
                    n = s(e, ".js-diff-placeholder", Element),
                    o = s(e, "button.js-diff-load", HTMLButtonElement),
                    i = s(e, ".js-button-text");
                n.setAttribute("fill", "url('#animated-diff-gradient')"), i.textContent = o.getAttribute("data-disable-with") || "", o.disabled = !0;
                const r = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
                return t.src = r.toString(), t.data
            }

            function Qo(e) {
                const t = e.currentTarget;
                a(t instanceof Element, "null.js:179"), s(t, ".js-diff-load-button-container").classList.add("d-none"), s(t, ".js-diff-load-retry").classList.remove("d-none")
            }

            function Yo(e) {
                let t = e.currentTarget;
                a(t instanceof IncludeFragmentElement, "null.js:196"), t.setAttribute("data-url", t.src), t.removeAttribute("src")
            }

            function Zo(e) {
                e.src = e.getAttribute("data-url") || "", e.removeAttribute("data-url")
            }

            function ei(e) {
                var t;
                t = e, s(document, ".js-file-filter-text", HTMLElement).classList.toggle("text-blue", t),
                    function(e) {
                        const t = document.querySelector(".js-reset-filters"),
                            n = document.querySelector(".js-commits-filtered");
                        null == t || n || (t.hidden = !e)
                    }(e),
                    function() {
                        const e = si(),
                            t = ai();
                        for (const o of e)
                            if (t) {
                                const e = "0" === u(o, "data-non-deleted-files-count");
                                o.disabled = e
                            } else o.disabled = !1;
                        const n = document.querySelector(".js-deleted-files-container"),
                            s = oi();
                        if (s && n) {
                            const t = function(e) {
                                const t = e.find(e => e.checked && "0" !== u(e, "data-deleted-files-count"));
                                return Boolean(t)
                            }(e);
                            n.classList.toggle("text-gray", !t), s.disabled = !t
                        }
                    }(),
                    function() {
                        const e = ri(),
                            t = s(document, ".js-file-filter-select-all-container", HTMLElement),
                            n = u(t, e ? "data-select-all-markup" : "data-all-selected-markup");
                        t.textContent = n, t.classList.toggle("text-gray", !e), t.classList.toggle("text-blue", e)
                    }(),
                    function() {
                        const e = document.querySelector(".js-deleted-files-container");
                        if (e) {
                            const t = ai() ? "data-show-deleted-markup" : "data-hide-deleted-markup",
                                n = u(e, t);
                            e.textContent = n
                        }
                    }(),
                    function() {
                        const e = l(document, ".js-file-type-count");
                        for (const t of e) {
                            const e = ai() ? "data-non-deleted-file-count-markup" : "data-all-file-count-markup",
                                n = u(t, e);
                            t.textContent = n
                        }
                    }(), ce(e, ni())
            }

            function ti(e) {
                ! function() {
                    const e = oi(),
                        t = ni(),
                        n = l(document, ".js-file");
                    for (const s of n) {
                        const n = s.getAttribute("data-file-type");
                        if (n) {
                            const e = t.includes(n);
                            ci(s, e)
                        }
                        if (e && e.checked) {
                            const e = "true" === s.getAttribute("data-file-deleted");
                            e && ci(s, !e)
                        }
                    }
                }(), ei(e)
            }

            function ni() {
                return si().filter(e => e.checked).map(e => e.value)
            }

            function si() {
                return l(document, ".js-diff-file-type-option", HTMLInputElement)
            }

            function oi() {
                const e = document.querySelector(".js-deleted-files-toggle");
                if (e instanceof HTMLInputElement) return e
            }

            function ii() {
                return ri() || ai()
            }

            function ri() {
                return ni().length !== si().length
            }

            function ai() {
                const e = oi();
                return !!e && e.checked
            }

            function ci(e, t) {
                const n = o(e, ".js-file.js-details-container");
                n.classList.toggle("open", t), n.classList.toggle("Details--on", t)
            }

            function li(e) {
                const t = si();
                for (const n of t) n.checked = e
            }

            function ui() {
                Vo(document) && function(e) {
                    const t = re(e);
                    t && zo(t)
                }(document)
            }
            document.addEventListener("keydown", function(e) {
                !e.defaultPrevented && "Escape" === e.key && Bo && Bo.removeAttribute("open")
            }), i(".js-dropdown-details", {
                subscribe: e => H(e, "toggle", Po)
            }), i("details.js-select-menu", {
                subscribe: e => H(e, "toggle", Fo)
            }), r("menu:deactivate", "details.js-select-menu", function(e) {
                e.currentTarget.hasAttribute("open") && e.currentTarget.removeAttribute("open")
            }), i("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e => {
                    const t = s(e, "summary");
                    return H(t, "mouseenter", Oo)
                }
            }), i("[data-deferred-details-content-url]", {
                subscribe: e => H(e, "toggle", Oo)
            }), r("click", "[data-toggle-for]", function(e) {
                const t = e.currentTarget.getAttribute("data-toggle-for") || "",
                    n = document.getElementById(t);
                n && (n.hasAttribute("open") ? n.removeAttribute("open") : n.setAttribute("open", "open"))
            }), i("details.select-menu details-menu include-fragment", function(e) {
                const t = e.closest("details");
                t && (e.addEventListener("loadstart", function() {
                    t.classList.add("is-loading"), t.classList.remove("has-error")
                }), e.addEventListener("error", function() {
                    t.classList.add("has-error")
                }), e.addEventListener("loadend", function() {
                    t.classList.remove("is-loading");
                    const e = t.querySelector(".js-filterable-field");
                    e && L(e, "filterable:change")
                }))
            }), i("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = o(e, "details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "", L(e, "filterable:change"))
                    })
                }
            }), i("details details-menu filterable-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = o(e, "details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "")
                    })
                }
            }), ie(function(e) {
                let t = e.target;
                if (!t || t.closest("summary")) return;
                let n = t.parentElement;
                for (; n;)(n = n.closest("details")) && (n.hasAttribute("open") || n.setAttribute("open", ""), n = n.parentElement)
            }), i("form details-menu", e => {
                const t = o(e, "form");
                t.addEventListener("reset", () => {
                    setTimeout(() => (function(e) {
                        const t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                        for (const n of t) L(n, "change")
                    })(t), 0)
                })
            }), r("click", ".js-anon-download-zip-link", function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-get-repo-modal"),
                    i = s(n, ".js-modal-downloading");
                n.classList.add("is-downloading"), i.hidden = !1
            }), r("toggle", ".js-anon-get-repo-select-menu", function(e) {
                const t = e.target;
                s(t, ".js-modal-downloading").hidden = t.hasAttribute("open")
            }, {
                capture: !0
            }), i(".js-detect-gravatar", function(e) {
                Uo(e)
            }), i(".js-diff-progressive-container", function(e) {
                Wo(e);
                const t = e.querySelector(".js-diff-progressive-loader");
                t && (t.addEventListener("load", function() {
                    Wo(e)
                }), t.addEventListener("error", Yo), t.addEventListener("error", Go))
            }), r("click", ".js-diff-progressive-retry .js-retry-button", function(e) {
                const t = o(e.currentTarget, ".js-diff-progressive-loader", IncludeFragmentElement);
                ! function(e) {
                    s(e, ".js-diff-progressive-spinner").classList.remove("d-none"), s(e, ".js-diff-progressive-retry").classList.add("d-none")
                }(t), Zo(t)
            }), i(".js-diff-load-container", function(e) {
                const t = e.querySelector(".js-diff-entry-loader");
                t && (t.addEventListener("load", function() {
                    o(e, ".js-file").classList.remove("hide-file-notes-toggle");
                    const t = Ko();
                    t && Jo(e, t)
                }), t.addEventListener("error", Yo), t.addEventListener("error", Qo))
            }), r("click", ".js-diff-load", function(e) {
                if (e.target.classList.contains("js-ignore-this")) return;
                Xo(o(e.currentTarget, ".js-diff-load-container"))
            }), r("click", ".js-diff-load-retry .js-retry-button", function(e) {
                const t = o(e.currentTarget, ".js-diff-entry-loader", IncludeFragmentElement);
                ! function(e) {
                    s(e, ".js-diff-load-button-container").classList.remove("d-none"), s(e, ".js-diff-load-retry").classList.add("d-none")
                }(t), Zo(t)
            }), r("click", ".js-rendered, .js-source", function(e) {
                const t = e.currentTarget;
                t.classList.contains("selected") ? e.preventDefault() : (function(e) {
                    const t = o(e, ".js-file-header"),
                        n = e.classList.contains("js-rendered"),
                        s = e.classList.contains("js-source"),
                        i = u(t, "data-short-path"),
                        r = u(t, "data-anchor"),
                        a = new URL(window.location.href, window.location.origin),
                        c = new URLSearchParams(a.search.slice(1));
                    a.hash = r, n ? c.set("short_path", i) : s && c.delete("short_path");
                    a.search = c.toString(), T(null, "", a.toString())
                }(t), function(e) {
                    for (const t of document.querySelectorAll(".js-rendered, .js-source")) t.classList.remove("selected"), t.removeAttribute("aria-current");
                    e.classList.add("selected"), e.setAttribute("aria-current", "true")
                }(t))
            }), j(".js-prose-diff-toggle-form", async function(e, t) {
                const n = o(e, ".js-details-container"),
                    i = s(n, ".js-file-content"),
                    r = await t.html();
                for (; i.lastChild;) i.removeChild(i.lastChild);
                i.append(r.html), n.classList.toggle("display-rich-diff"), n.classList.toggle("show-inline-notes")
            }), r("change", ".js-diff-style-toggle input", function(e) {
                const t = o(e.target, ".js-diff-settings");
                for (const n of l(t, ".js-diff-style-toggle label")) n.classList.toggle("selected")
            }), r("click", ".js-toc-retry", function(e) {
                const t = o(e.target, ".select-menu"),
                    n = s(t, "include-fragment"),
                    i = u(n, "src");
                n.setAttribute("src", ""), n.setAttribute("src", i)
            }), r("change", ".js-diff-file-type-option", function() {
                ti(ii())
            }), r("click", ".js-file-filter-select-all", function() {
                ri() && (li(!0), ti(ii()))
            }), r("change", ".js-deleted-files-toggle", function() {
                ti(ii())
            }), i(".js-file-filter", function() {
                ii() ? ei(!0) : ce(!1, ni())
            }), r("click", ".js-file-header .js-details-target", function(e) {
                let t = e.currentTarget;
                if (!document.querySelector(".js-file-filter")) return;
                const n = o(t, ".js-details-container"),
                    s = le(n),
                    i = oi();
                let r = !1;
                i && (r = ue(n, i)), (s || r) && ei(ii())
            }), ie(ui), r("click", 'a[href^="#"]', function(e) {
                e.currentTarget instanceof HTMLAnchorElement && setTimeout(ui, 0)
            });
            class di {
                constructor(e) {
                    this.name = e.getAttribute("data-theme-name") || "", this.slug = e.getAttribute("data-theme-slug") || "", this.gem = e.getAttribute("data-theme-gem") || "", this.selected = e.classList.contains("selected"), this.baseHref = e.getAttribute("href") || ""
                }
            }
            class mi {
                constructor() {
                    this.pagePreview = s(document, "#page-preview"), this.contextLoader = s(document, ".theme-picker-spinner"), this.fullPicker = s(document, ".theme-picker-thumbs"), this.miniPicker = s(document, ".theme-picker-controls"), this.scrollBackwardsLink = s(document, ".theme-toggle-full-left", HTMLButtonElement), this.scrollForwardsLink = s(document, ".theme-toggle-full-right", HTMLButtonElement), this.themeLinksContainer = s(this.fullPicker, ".js-theme-selector"), this.themeLinks = l(this.themeLinksContainer, ".theme-selector-thumbnail"), this.themes = this.themeLinks.map(e => {
                        const t = new di(e);
                        return t.selected && (this.selectedTheme = t), t
                    }), this.scrolledPage = 0, this.selectedTheme = this.selectedTheme || this.themes[0], this.pagePreview.addEventListener("load", () => this.onPagePreviewLoad()), this.scrollBackwardsLink.addEventListener("click", () => this.scrollThemeLinksContainer(-1)), this.scrollForwardsLink.addEventListener("click", () => this.scrollThemeLinksContainer(1)), s(document, ".theme-picker-prev").addEventListener("click", e => this.onThemeNavPrevClick(e)), s(document, ".theme-picker-next").addEventListener("click", e => this.onThemeNavNextClick(e));
                    for (const t of this.themeLinks) t.addEventListener("click", e => this.onThemeLinkClick(e));
                    s(document, ".theme-picker-view-toggle").addEventListener("click", e => this.onHideClick(e));
                    const e = document.querySelector("#page-edit");
                    e && e.addEventListener("click", e => this.onEditClick(e)), s(document, "#page-publish").addEventListener("click", e => this.onPublishClick(e)), this.theme(this.selectedTheme), this.updateScrollLinks()
                }
                onPagePreviewLoad() {
                    this.contextLoader.classList.remove("visible")
                }
                onThemeNavPrevClick(e) {
                    this.theme(this.prevTheme()), e.preventDefault()
                }
                onThemeNavNextClick(e) {
                    this.theme(this.nextTheme()), e.preventDefault()
                }
                onThemeLinkClick(e) {
                    this.theme(this.themeForLink(e.currentTarget)), e.preventDefault()
                }
                onHideClick(e) {
                    let t = e.currentTarget;
                    a(t instanceof HTMLElement, "null.js:98"), this.fullPicker.classList.toggle("d-none"), this.miniPicker.classList.toggle("d-none"), this.scrollToTheme(this.theme(), !1), t.classList.toggle("open")
                }
                onEditClick(e) {
                    v(s(document, "#page-edit-form", HTMLFormElement)), e.preventDefault()
                }
                onPublishClick(e) {
                    const t = s(document, "#page-publish-form", HTMLFormElement),
                        n = this.theme();
                    n && (s(document, 'input[name="page[theme_slug]"]', HTMLInputElement).value = n.slug), v(t), e.preventDefault()
                }
                scrollThemeLinksContainer(e) {
                    this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks()
                }
                updateScrollLinks() {
                    const e = 0 === this.scrolledPage;
                    this.scrollBackwardsLink.disabled = e, this.scrollBackwardsLink.classList.toggle("disabled", e), this.scrollForwardsLink.disabled = !e, this.scrollForwardsLink.classList.toggle("disabled", !e)
                }
                selectedThemeIndex() {
                    return this.themes.indexOf(this.selectedTheme)
                }
                prevTheme() {
                    let e = (this.selectedThemeIndex() - 1) % this.themes.length;
                    return e < 0 && (e += this.themes.length), this.themes[e]
                }
                nextTheme() {
                    return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
                }
                themeForLink(e) {
                    return this.themes[this.themeLinks.indexOf(e)]
                }
                linkForTheme(e) {
                    return this.themeLinks[this.themes.indexOf(e)]
                }
                scrollToTheme(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
                    let n = 0;
                    if (this.scrolledPage > 0) {
                        const e = this.linkForTheme(this.themes[6 * this.scrolledPage]);
                        n = e.offsetLeft
                    }
                    const s = this.themeLinksContainer,
                        o = n - s.scrollLeft;
                    if (t && 0 !== o) {
                        const e = 150;
                        i = (t => {
                            if (t < 0) return;
                            const i = s.scrollLeft;
                            return s.scrollLeft = Math[n - i > 0 ? "min" : "max"](i + o * (t / e), n), i !== s.scrollLeft && void 0
                        }), new Promise(e => {
                            let t = performance.now();
                            ! function n() {
                                window.requestAnimationFrame(s => {
                                    !1 !== i(s - t) ? (t = s, n()) : e()
                                })
                            }()
                        })
                    } else s.scrollLeft = n;
                    var i
                }
                theme(e) {
                    if (!e) return this.selectedTheme;
                    this.selectedTheme = e, this.showPreviewFor(e);
                    for (const t of this.themeLinks) t.classList.remove("selected");
                    this.linkForTheme(e).classList.add("selected"), this.scrollToTheme(e), s(this.miniPicker, ".js-theme-name").textContent = e.name
                }
                showPreviewFor(e) {
                    if (this.contextLoader.classList.add("visible"), e.gem) this.pagePreview.setAttribute("src", e.baseHref);
                    else {
                        const t = s(this.fullPicker, "form", HTMLFormElement);
                        s(document, 'input[name="theme_slug"]', HTMLInputElement).value = e.slug, v(t)
                    }
                }
            }

            function fi() {
                const e = document.querySelector(".js-get-repo-modal");
                if (e) {
                    e.classList.remove("is-downloading");
                    for (const t of e.querySelectorAll(".js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio")) t.classList.remove("d-block"), t.classList.add("d-none")
                }
            }

            function gi(e) {
                const t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1]
            }

            function pi() {
                return function() {
                    const e = gi("meta[name=analytics-location]");
                    return e instanceof HTMLMetaElement ? e.content : window.location.pathname
                }() + function() {
                    let e = "";
                    gi("meta[name=analytics-location-query-strip]") || (e = window.location.search);
                    const t = gi("meta[name=analytics-location-params]");
                    t instanceof HTMLMetaElement && (e += (e ? "&" : "?") + t.content);
                    for (const n of l(document, "meta[name=analytics-param-rename]", HTMLMetaElement)) {
                        const t = n.content.split(":", 2);
                        e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`, "g"), `$1${t[1]}$2`)
                    }
                    return e
                }()
            }

            function hi() {
                const e = `${window.location.protocol}//${window.location.host}${pi()}`;
                fe(e), ge(gi("meta[name=analytics-location]") ? "(masked)" : document.title);
                const t = gi("meta[name=analytics-ec-payload]");
                t instanceof HTMLMetaElement && ji(t.content);
                const n = pe("ga-deferred");
                n && (ji(n), he("ga-deferred"));
                for (const s of l(document, "meta.js-ga-set", HTMLMetaElement)) je(s.name, s.content)
            }

            function ji(e) {
                if (e)
                    for (const t of JSON.parse(e)) window.ga.apply(null, t)
            }

            function vi() {
                for (const e of document.querySelectorAll("meta[name=analytics-virtual-pageview]")) e instanceof HTMLMetaElement && ve(e.content, {
                    title: ""
                });
                ve()
            }

            function bi(e) {
                const t = e.trim().split(/\s*,\s*/),
                    s = n(t, 4),
                    o = s[0],
                    i = s[1],
                    r = s[2],
                    a = s[3],
                    c = {
                        category: o,
                        action: i,
                        label: r
                    };
                return a && (c.value = Number(a)), c
            }
            i("#theme-picker-wrap", function() {
                new mi
            }), r("click", ".email-hidden-toggle", function(e) {
                const t = e.currentTarget.nextElementSibling;
                a(t instanceof HTMLElement, "null.js:11"), t.style.display = "", t.classList.toggle("expanded"), e.preventDefault()
            }), r("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-git-clone-help-container"),
                    i = t.getAttribute("data-url") || "";
                if (s(n, ".js-git-clone-help-field", HTMLInputElement).value = i, t.matches(".js-git-protocol-clone-url"))
                    for (const s of n.querySelectorAll(".js-git-clone-help-text")) s.textContent = i;
                const r = n.querySelector(".js-clone-url-button.selected");
                r && r.classList.remove("selected"), o(t, ".js-clone-url-button").classList.add("selected")
            }), r("click", ".js-get-repo", function(e) {
                const t = u(e.currentTarget, "data-open-app");
                ! function(e, t) {
                    let n;
                    switch (e.classList.add("is-downloading"), t) {
                        case "mac":
                            n = e.querySelector(".js-modal-download-mac");
                            break;
                        case "windows":
                            n = e.querySelector(".js-modal-download-windows");
                            break;
                        case "xcode":
                            n = e.querySelector(".js-modal-download-xcode");
                            break;
                        case "visual-studio":
                            n = e.querySelector(".js-modal-download-visual-studio")
                    }
                    n && (n.classList.remove("d-none"), n.classList.add("d-block"))
                }(o(e.currentTarget, ".js-get-repo-modal"), t)
            }), r("toggle", ".js-get-repo-select-menu", fi, {
                capture: !0
            }), r("click", ".js-get-repo-modal-download-back", fi), me("octolyticsPlugin", function(e) {
                const t = e.get("sendHitTask");
                e.set("sendHitTask", function(e) {
                    t(e), "event" === e.get("hitType") && null != window._octo && de(`//${window._octo.host}/collect`, e.get("hitPayload"), "application/x-www-form-urlencoded")
                })
            });
            const Li = document.querySelector("meta[name=google-analytics]");
            Li instanceof HTMLMetaElement && (be(Li.content, "auto"), Le("octolyticsPlugin"), Le("ec"), hi()), async function() {
                await B, vi()
            }(), document.addEventListener("pjax:complete", () => {
                setTimeout(() => {
                    hi(), vi()
                }, 20)
            }, !1), i("[data-ga-load]", function(e) {
                const t = bi(e.getAttribute("data-ga-load") || "");
                t.interactive = !1, ye(t)
            }), i("meta[name=analytics-event]", {
                constructor: HTMLMetaElement,
                initialize(e) {
                    const t = bi(e.content);
                    t.interactive = !1, ye(t)
                }
            }), r("click", "[data-ga-click]", function(e) {
                ji(e.currentTarget.getAttribute("data-ga-ec"));
                const t = bi(e.currentTarget.getAttribute("data-ga-click") || "");
                ye(t)
            }, {
                capture: !0
            }), r("click", "[data-ga-deferred]", function(e) {
                Ee("ga-deferred", e.currentTarget.getAttribute("data-ga-deferred") || "")
            }, {
                capture: !0
            }), r("change", "[data-ga-change]", function(e) {
                ji(e.currentTarget.getAttribute("data-ga-ec"));
                const t = bi(e.currentTarget.getAttribute("data-ga-change") || "");
                ye(t)
            }, {
                capture: !0
            }), r("click", ".js-skip-to-content", function(e) {
                const t = document.getElementById("start-of-content");
                if (t) {
                    const e = t.nextElementSibling;
                    e instanceof HTMLElement && (e.setAttribute("tabindex", "-1"), e.focus())
                }
                e.preventDefault()
            });
            const yi = "ontouchstart" in document;
            for (const n of document.querySelectorAll(".HeaderMenu-details")) n.addEventListener("toggle", wi), yi || (n.addEventListener("mouseover", Ti), n.addEventListener("mouseleave", Ti));
            let Ei = !1;

            function wi(e) {
                if (!Ei) {
                    Ei = !0;
                    for (const t of document.querySelectorAll(".HeaderMenu-details")) t !== e.currentTarget && t.removeAttribute("open");
                    setTimeout(() => Ei = !1)
                }
            }

            function Ti(e) {
                const t = e.currentTarget;
                t instanceof HTMLElement && window.innerWidth > 1012 && ("mouseover" === e.type ? e.target instanceof Node && e.relatedTarget instanceof Node && t.contains(e.target) && !t.contains(e.relatedTarget) && t.setAttribute("open", "") : t.removeAttribute("open"))
            }
            r("click", ".js-video-play, .js-video-close", function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.classList.contains("js-video-play"),
                    i = o(t, ".js-video-container"),
                    r = s(i, ".js-video-iframe", HTMLIFrameElement),
                    a = document.querySelector(".js-video-bg");
                n ? r.src = r.getAttribute("data-src") || "" : r.removeAttribute("src"), i.classList.toggle("is-expanded", n), null != a && a.classList.toggle("is-expanded", n),
                    function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        const n = e.getBoundingClientRect(),
                            s = n.top - t,
                            o = n.bottom - window.innerHeight + t;
                        s < 0 ? window.scrollBy(0, s) : o > 0 && window.scrollBy(0, o)
                    }(r, 20)
            });
            const ki = document.querySelector(".js-hovercard-content"),
                Ai = {};
            let Mi, Si, xi, Hi = 0;
            const Ci = 12,
                qi = 24,
                Ii = qi - 7,
                _i = 16,
                $i = 100,
                Ri = 250;

            function Ni(e) {
                return "Popover-message--" + e
            }

            function Di() {
                ki && (ki.style.display = "none", ki.children[0].innerHTML = "", Si = null, Mi = null)
            }

            function Bi(e) {
                a(ki, "null.js:110");
                const t = ki.getBoundingClientRect(),
                    n = t.width,
                    s = t.height,
                    o = function(e) {
                        const t = e.getClientRects();
                        let n = t[0];
                        for (const s of t)
                            if (s.left < Hi && s.right > Hi) {
                                n = s;
                                break
                            } return n
                    }(e),
                    i = o.left,
                    r = o.top,
                    c = o.height,
                    l = o.width,
                    u = r > s;
                if (e.classList.contains("js-hovercard-left")) {
                    const e = r + c / 2;
                    return {
                        containerTop: u ? e - s + Ii + _i / 2 : e - Ii - _i / 2,
                        containerLeft: i - n - Ci,
                        contentClassSuffix: u ? "right-bottom" : "right-top"
                    }
                } {
                    const e = window.innerWidth - i > n,
                        t = i + l / 2;
                    return {
                        containerTop: u ? r - s - Ci : r + c + Ci,
                        containerLeft: e ? t - qi : t - n + qi,
                        contentClassSuffix: u ? e ? "bottom-left" : "bottom-right" : e ? "top-left" : "top-right"
                    }
                }
            }

            function Pi(e, t) {
                if (!ki) return;
                const n = ki.children[0];
                n.innerHTML = "";
                const s = document.createElement("div");
                for (const o of e.children) s.appendChild(o.cloneNode(!0));
                n.appendChild(s),
                    function(e, t) {
                        if (!ki) return;
                        ki.style.visibility = "hidden", ki.style.display = "block", t.classList.remove(Ni("bottom-left"), Ni("bottom-right"), Ni("right-top"), Ni("right-bottom"), Ni("top-left"), Ni("top-right"));
                        const n = Bi(e),
                            s = n.containerTop,
                            o = n.containerLeft,
                            i = n.contentClassSuffix;
                        t.classList.add(Ni(i)), ki.style.top = `${s+window.pageYOffset}px`, ki.style.left = `${o+window.pageXOffset}px`,
                            function(e, t) {
                                const n = e.getAttribute("data-hovercard-z-index-override");
                                t.style.zIndex = n || "100"
                            }(e, ki), ki.style.visibility = ""
                    }(t, n),
                    function(e) {
                        setTimeout(() => {
                            if (document.body && document.body.contains(e)) {
                                const t = e.querySelector("[data-hovercard-tracking]");
                                if (t) {
                                    const e = t.getAttribute("data-hovercard-tracking");
                                    if (e) {
                                        const t = {
                                            event_type: "user-hovercard-load"
                                        };
                                        t.dimensions = JSON.parse(e), we(t)
                                    }
                                }
                                const n = e.querySelector("[data-hydro-view]");
                                n && Te(n)
                            }
                        }, 500)
                    }(s), ki.style.display = "block"
            }

            function Fi(e) {
                const t = e.getAttribute("data-hovercard-url");
                if (t) {
                    const n = function(e) {
                        const t = e.closest("[data-hovercard-subject-tag]");
                        if (t) return t.getAttribute("data-hovercard-subject-tag");
                        const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                        return n ? n.getAttribute("content") : void 0
                    }(e);
                    if (n) {
                        const e = new URL(t, window.location.origin),
                            s = new URLSearchParams(e.search.slice(1));
                        return s.append("subject", n), s.append("current_path", window.location.pathname + window.location.search), e.search = s.toString(), e.toString()
                    }
                    return t
                }
                return ""
            }
            async function Oi(e, t) {
                const n = e.currentTarget;
                if (e instanceof MouseEvent && (Hi = e.clientX), a(n instanceof Element, "null.js:281"), Mi === n) return;
                if (n.closest(".js-hovercard-content")) return;
                if (! function(e) {
                        const t = e.getAttribute("data-hovercard-type");
                        return "pull_request" === t || "issue" === t ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : "team" === t ? !!e.closest("[data-team-hovercards-enabled]") : "repository" === t ? !!e.closest("[data-repository-hovercards-enabled]") : "commit" === t ? !!e.closest("[data-commit-hovercards-enabled]") : "project" !== t || !!e.closest("[data-project-hovercards-enabled]")
                    }(n)) return;
                Di(), Mi = n, Si = document.activeElement;
                const s = Fi(n);
                let o;
                try {
                    const e = new Promise(e => setTimeout(e, t, 0));
                    o = await async function(e) {
                        return Ai[e] || (Ai[e] = $(document, e)), Ai[e]
                    }(s), await e
                } catch (i) {
                    if (i.response && 404 === i.response.status) {
                        const e = "Hovercard is unavailable";
                        return n.setAttribute("aria-label", e), void n.classList.add("tooltipped", "tooltipped-ne")
                    }
                    if (i.response && 410 === i.response.status) {
                        const e = await i.response.clone().json();
                        return n.setAttribute("aria-label", e.message), void n.classList.add("tooltipped", "tooltipped-ne")
                    }
                    if (/X-HTML-Safe/.test(i.message)) return;
                    throw i
                }
                n === Mi && (Pi(o, n), e instanceof KeyboardEvent && ki && ki.focus())
            }

            function Ui(e) {
                Oi(e, Ri)
            }

            function zi(e) {
                if (Mi) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        const t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
                    } else e instanceof KeyboardEvent && Si && Si.focus();
                    Di()
                }
            }

            function Vi(e) {
                const t = Mi;
                xi = setTimeout(() => {
                    Mi === t && zi(e)
                }, $i)
            }

            function Wi(e) {
                switch (a(e instanceof KeyboardEvent, "null.js:370"), e.key) {
                    case "Escape":
                        zi(e)
                }
            }

            function Ki() {
                xi && clearTimeout(xi)
            }

            function Ji() {
                return s(document, "input.js-edit-integration-setup-url", HTMLInputElement)
            }

            function Gi(e) {
                e && ((function() {
                    const e = o(Ji(), ".form-group");
                    return s(e, ".js-setup-url-hint")
                }()).textContent = e)
            }

            function Xi() {
                const e = document.getElementById("js-update-integration-permissions");
                e && e.removeAttribute("disabled")
            }

            function Qi() {
                return function() {
                    const e = l(document, '[id^=integration_permission_]:checked:not([data-permission="none"])', HTMLInputElement);
                    return Array.from(e, e => e.getAttribute("data-resource"))
                }().map(e => (function(e) {
                    if (e) return l(document, `.js-integration-hook-event[data-resource~="${e}"]:checked`, HTMLInputElement)
                })(e)).reduce((e, t) => e.concat(t, []), [])
            }

            function Yi() {
                const e = s(document, ".js-content-references input", HTMLInputElement),
                    t = s(document, ".js-content-references template", HTMLTemplateElement),
                    n = s(document, ".js-content-references-domain-list"),
                    i = e.value;
                if (!i) return;
                const r = t.content.cloneNode(!0);
                s(r, "input", HTMLInputElement).value = i, s(r, ".js-content-references-domain-url").textContent = i, e.value = "", n.appendChild(r), o(n, ".Box").hidden = !1, Xi()
            }
            ki && (i("[data-hovercard-url]", {
                subscribe: e => H(e, "mouseover", Ui)
            }), i("[data-hovercard-url]", {
                subscribe: e => H(e, "mouseleave", Vi)
            }), i("[data-hovercard-url]", {
                subscribe: e => H(e, "keyup", Wi)
            }), i("[data-hovercard-url]", {
                remove(e) {
                    Mi === e && Di()
                }
            }), i(".js-hovercard-content", {
                subscribe: e => H(e, "mouseover", Ki)
            }), i(".js-hovercard-content", {
                subscribe: e => H(e, "mouseleave", zi)
            }), i(".js-hovercard-content", {
                subscribe: e => H(e, "keyup", Wi)
            }), r("menu:activated", ".js-select-menu", Di), window.addEventListener("statechange", Di)), i(".js-scrollnav-listener", function(e) {
                window.addEventListener("scroll", function() {
                    ! function(e) {
                        const t = s(e, ".js-scrollnav").getBoundingClientRect().height;
                        for (const n of e.querySelectorAll(".js-section")) {
                            const s = n.getBoundingClientRect(),
                                o = t >= s.top,
                                i = t <= s.top + s.height;
                            if (o && i) {
                                const t = e.querySelector(`.js-scrollnav-item[href="#${n.id}"]`);
                                if (t && !t.classList.contains("selected")) {
                                    for (const t of e.querySelectorAll(".js-scrollnav-item")) t.classList.remove("selected");
                                    t.classList.add("selected")
                                }
                            }
                        }
                    }(e)
                }, {
                    passive: !0
                })
            }), r("change", ".js-edit-integration-request-oauth-on-install", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:28");
                const n = Ji();
                if (t.checked) {
                    n.hidden = !0, Gi(n.getAttribute("data-hint-same-as-callback-url") || "")
                } else {
                    n.hidden = !1, n.value = n.getAttribute("data-setup-url") || "", Gi(n.getAttribute("data-hint-setup-url") || "")
                }
            }), r("change", ".js-integration-permissions-selector [id^=integration_permission_]", function(e) {
                let t = e.currentTarget;
                const n = t.getAttribute("data-permission"),
                    i = t.getAttribute("data-resource") || "",
                    r = l(document, `.js-integration-hook-event[data-resource~="${i}"]`, HTMLInputElement),
                    a = l(document, ".js-integration-single-file-resource", HTMLInputElement),
                    c = l(document, `.js-dropdown-container[data-resource~="${i}"]`);
                if (Xi(), "none" !== n) {
                    const e = l(document, `.js-integration-hook-event-permission-error[data-resource~='${i}']`);
                    for (const t of e) t.classList.add("d-none");
                    const n = l(document, ".js-integration-single-file-permission-error");
                    for (const t of n) t.classList.add("d-none");
                    for (const t of r) t.readOnly = !1;
                    for (const t of a) t.readOnly = !1;
                    o(t, ".js-list-group-item").classList.remove("disabled");
                    for (const t of c) t.classList.remove("d-none")
                } else {
                    for (const e of r) u = e, Qi().includes(u) || (e.readOnly = !0, e.checked = !1, o(e, ".js-dropdown-container").classList.add("anim-fade-in", "d-none"));
                    if (o(t, ".js-list-group-item").classList.add("disabled"), "single_file" === i)
                        for (const e of a) e.readOnly = !0, e.value = "";
                    else "content_references" === i && (s(document, `.js-dropdown-container[data-resource~='${i}']`).classList.add("anim-fade-in", "d-none"), "none" === n && (s(document, ".js-content-references-domain-list").innerHTML = ""))
                }
                var u
            }), r("change", ".js-integration-permissions-selector [name^=integration]", Xi), r("click", ".js-integration-permissions-selector .js-integration-hook-event", function(e) {
                const t = e.currentTarget;
                if (a(t instanceof HTMLInputElement, "null.js:175"), t.readOnly) {
                    const n = o(t, ".js-send-events");
                    s(n, ".js-integration-hook-event-permission-error").classList.remove("d-none"), e.preventDefault()
                }
            }), r("click", ".js-integration-permissions-selector .js-integration-single-file-resource", function(e) {
                const t = e.currentTarget;
                if (a(t instanceof HTMLInputElement, "null.js:188"), t.readOnly) {
                    const n = o(t, ".js-single-file");
                    s(n, ".js-integration-single-file-permission-error").classList.remove("d-none"), e.preventDefault()
                }
            }), _("keydown", ".js-content-references input", function(e) {
                "Enter" === e.key && (e.preventDefault(), Yi())
            }), r("click", ".js-content-references .js-domain-add", Yi), r("click", ".js-content-references .js-close", function(e) {
                const t = o(e.target, "li"),
                    n = t.parentElement;
                n && (n.removeChild(t), 0 === l(n, "li").length && (o(n, ".Box").hidden = !0), Xi())
            }), j(".js-issue-boost-form", async function(e, t) {
                const n = s(e, ".js-issue-boost-error");
                let i;
                n.hidden = !0;
                try {
                    i = await t.html()
                } catch (r) {
                    return void(n.hidden = !1)
                }
                o(e, ".js-issue-boost-container").replaceWith(i.html)
            });
            let Zi = null;
            async function er(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:12");
                const n = t.getAttribute("data-url");
                if (!n) return;
                const s = t.getAttribute("data-id") || "",
                    o = t.textContent,
                    i = document.querySelectorAll(`.js-issue-link[data-id='${s}']`);
                for (const a of i) a.removeAttribute("data-url");
                try {
                    tr(i, `${o}, ${(await z(n)).title}`)
                } catch (r) {
                    const e = (null != r.response ? r.response.status : void 0) || 500;
                    tr(i, (() => {
                        switch (e) {
                            case 404:
                                return t.getAttribute("data-permission-text");
                            default:
                                return t.getAttribute("data-error-text")
                        }
                    })() || "")
                }
            }

            function tr(e, t) {
                for (const s of e)(n = s).getAttribute("data-hovercard-url") && n.closest("[data-issue-and-pr-hovercards-enabled]") || s.classList.add("tooltipped", "tooltipped-ne"), s.setAttribute("aria-label", t);
                var n
            }

            function nr(e) {
                const t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(function(e) {
                    return String(e).toLowerCase().replace(/[^0-9a-f]/g, "")
                }(e));
                if (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }
            r("click", ".js-issue-boost-button", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:30"), e.preventDefault();
                const n = t.form;
                if (a(n, "null.js:33"), Zi) {
                    clearTimeout(Zi);
                    const e = parseInt(t.value, 10);
                    let s = e;
                    s = e < 0 ? e - 1 : e + 1;
                    const o = parseInt(u(n, "data-min"), 10),
                        i = parseInt(u(n, "data-max"), 10);
                    s < o && (s = o), s > i && (s = i), t.value = s.toString()
                }
                Zi = setTimeout(() => {
                    Zi = null, v(n, t)
                }, 400)
            }), i(".js-issue-link", {
                subscribe: e => H(e, "mouseenter", er)
            });
            var sr = ke(function(e, t) {
                var n, s;
                n = function() {
                    var e = null,
                        t = {};
                    i("monochrome", null, [
                        [0, 0],
                        [100, 0]
                    ]), i("red", [-26, 18], [
                        [20, 100],
                        [30, 92],
                        [40, 89],
                        [50, 85],
                        [60, 78],
                        [70, 70],
                        [80, 60],
                        [90, 55],
                        [100, 50]
                    ]), i("orange", [19, 46], [
                        [20, 100],
                        [30, 93],
                        [40, 88],
                        [50, 86],
                        [60, 85],
                        [70, 70],
                        [100, 70]
                    ]), i("yellow", [47, 62], [
                        [25, 100],
                        [40, 94],
                        [50, 89],
                        [60, 86],
                        [70, 84],
                        [80, 82],
                        [90, 80],
                        [100, 75]
                    ]), i("green", [63, 178], [
                        [30, 100],
                        [40, 90],
                        [50, 85],
                        [60, 81],
                        [70, 74],
                        [80, 64],
                        [90, 50],
                        [100, 40]
                    ]), i("blue", [179, 257], [
                        [20, 100],
                        [30, 86],
                        [40, 80],
                        [50, 74],
                        [60, 60],
                        [70, 52],
                        [80, 44],
                        [90, 39],
                        [100, 35]
                    ]), i("purple", [258, 282], [
                        [20, 100],
                        [30, 87],
                        [40, 79],
                        [50, 70],
                        [60, 65],
                        [70, 59],
                        [80, 52],
                        [90, 45],
                        [100, 42]
                    ]), i("pink", [283, 334], [
                        [20, 100],
                        [30, 90],
                        [40, 86],
                        [60, 84],
                        [80, 80],
                        [90, 75],
                        [100, 73]
                    ]);
                    var n = function(i) {
                        if (void 0 !== (i = i || {}).seed && null !== i.seed && i.seed === parseInt(i.seed, 10)) e = i.seed;
                        else if ("string" == typeof i.seed) e = function(e) {
                            for (var t = 0, n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++) t += e.charCodeAt(n);
                            return t
                        }(i.seed);
                        else {
                            if (void 0 !== i.seed && null !== i.seed) throw new TypeError("The seed value must be an integer or string");
                            e = null
                        }
                        var c, l;
                        if (null !== i.count && void 0 !== i.count) {
                            var u = i.count,
                                d = [];
                            for (i.count = null; u > d.length;) e && i.seed && (i.seed += 1), d.push(n(i));
                            return i.count = u, d
                        }
                        return function(e, t) {
                            switch (t.format) {
                                case "hsvArray":
                                    return e;
                                case "hslArray":
                                    return a(e);
                                case "hsl":
                                    var n = a(e);
                                    return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                                case "hsla":
                                    var s = a(e),
                                        o = t.alpha || Math.random();
                                    return "hsla(" + s[0] + ", " + s[1] + "%, " + s[2] + "%, " + o + ")";
                                case "rgbArray":
                                    return r(e);
                                case "rgb":
                                    var i = r(e);
                                    return "rgb(" + i.join(", ") + ")";
                                case "rgba":
                                    var c = r(e),
                                        o = t.alpha || Math.random();
                                    return "rgba(" + c.join(", ") + ", " + o + ")";
                                default:
                                    return function(e) {
                                        var t = r(e);

                                        function n(e) {
                                            var t = e.toString(16);
                                            return 1 == t.length ? "0" + t : t
                                        }
                                        return "#" + n(t[0]) + n(t[1]) + n(t[2])
                                    }(e)
                            }
                        }([c = function(e) {
                            var n = o(function(e) {
                                if ("number" == typeof parseInt(e)) {
                                    var n = parseInt(e);
                                    if (n < 360 && n > 0) return [n, n]
                                }
                                if ("string" == typeof e)
                                    if (t[e]) {
                                        var s = t[e];
                                        if (s.hueRange) return s.hueRange
                                    } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                                    var o = function(e) {
                                        e = 3 === (e = e.replace(/^#/, "")).length ? e.replace(/(.)/g, "$1$1") : e;
                                        var t = parseInt(e.substr(0, 2), 16) / 255,
                                            n = parseInt(e.substr(2, 2), 16) / 255,
                                            s = parseInt(e.substr(4, 2), 16) / 255,
                                            o = Math.max(t, n, s),
                                            i = o - Math.min(t, n, s),
                                            r = o ? i / o : 0;
                                        switch (o) {
                                            case t:
                                                return [(n - s) / i % 6 * 60 || 0, r, o];
                                            case n:
                                                return [60 * ((s - t) / i + 2) || 0, r, o];
                                            case s:
                                                return [60 * ((t - n) / i + 4) || 0, r, o]
                                        }
                                    }(e)[0];
                                    return [o, o]
                                }
                                return [0, 360]
                            }(e.hue));
                            n < 0 && (n = 360 + n);
                            return n
                        }(i), l = function(e, t) {
                            if ("monochrome" === t.hue) return 0;
                            if ("random" === t.luminosity) return o([0, 100]);
                            var n = function(e) {
                                    return s(e).saturationRange
                                }(e),
                                i = n[0],
                                r = n[1];
                            switch (t.luminosity) {
                                case "bright":
                                    i = 55;
                                    break;
                                case "dark":
                                    i = r - 10;
                                    break;
                                case "light":
                                    r = 55
                            }
                            return o([i, r])
                        }(c, i), function(e, t, n) {
                            var i = function(e, t) {
                                    for (var n = s(e).lowerBounds, o = 0; o < n.length - 1; o++) {
                                        var i = n[o][0],
                                            r = n[o][1],
                                            a = n[o + 1][0],
                                            c = n[o + 1][1];
                                        if (t >= i && t <= a) {
                                            var l = (c - r) / (a - i),
                                                u = r - l * i;
                                            return l * t + u
                                        }
                                    }
                                    return 0
                                }(e, t),
                                r = 100;
                            switch (n.luminosity) {
                                case "dark":
                                    r = i + 20;
                                    break;
                                case "light":
                                    i = (r + i) / 2;
                                    break;
                                case "random":
                                    i = 0, r = 100
                            }
                            return o([i, r])
                        }(c, l, i)], i)
                    };

                    function s(e) {
                        for (var n in e >= 334 && e <= 360 && (e -= 360), t) {
                            var s = t[n];
                            if (s.hueRange && e >= s.hueRange[0] && e <= s.hueRange[1]) return t[n]
                        }
                        return "Color not found"
                    }

                    function o(t) {
                        if (null === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
                        var n = t[1] || 1,
                            s = t[0] || 0,
                            o = (e = (9301 * e + 49297) % 233280) / 233280;
                        return Math.floor(s + o * (n - s))
                    }

                    function i(e, n, s) {
                        var o = s[0][0],
                            i = s[s.length - 1][0],
                            r = s[s.length - 1][1],
                            a = s[0][1];
                        t[e] = {
                            hueRange: n,
                            lowerBounds: s,
                            saturationRange: [o, i],
                            brightnessRange: [r, a]
                        }
                    }

                    function r(e) {
                        var t = e[0];
                        0 === t && (t = 1), 360 === t && (t = 359), t /= 360;
                        var n = e[1] / 100,
                            s = e[2] / 100,
                            o = Math.floor(6 * t),
                            i = 6 * t - o,
                            r = s * (1 - n),
                            a = s * (1 - i * n),
                            c = s * (1 - (1 - i) * n),
                            l = 256,
                            u = 256,
                            d = 256;
                        switch (o) {
                            case 0:
                                l = s, u = c, d = r;
                                break;
                            case 1:
                                l = a, u = s, d = r;
                                break;
                            case 2:
                                l = r, u = s, d = c;
                                break;
                            case 3:
                                l = r, u = a, d = s;
                                break;
                            case 4:
                                l = c, u = r, d = s;
                                break;
                            case 5:
                                l = s, u = r, d = a
                        }
                        return [Math.floor(255 * l), Math.floor(255 * u), Math.floor(255 * d)]
                    }

                    function a(e) {
                        var t = e[0],
                            n = e[1] / 100,
                            s = e[2] / 100,
                            o = (2 - n) * s;
                        return [t, Math.round(n * s / (o < 1 ? o : 2 - o) * 1e4) / 100, o / 2 * 100]
                    }
                    return n
                }, s = n(), e && e.exports && (t = e.exports = s), t.randomColor = s
            });
            sr.randomColor;

            function or(e, t) {
                const n = function(e) {
                    const t = nr(e);
                    if (t) return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
                }(t);
                null != n && (n < 150 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark")))
            }

            function ir(e, t) {
                let n = t;
                "#" !== n.charAt(0) && (n = `#${n}`), e.style.backgroundColor = n;
                const s = e.querySelector(".js-new-label-color-icon");
                s && or(s, t)
            }

            function rr(e, t) {
                e.blur();
                const n = o(e, "form");
                s(n, ".js-new-label-color-input", HTMLInputElement).value = t, ir(s(n, ".js-new-label-color", HTMLButtonElement), t)
            }

            function ar(e) {
                const t = Array.from(e.querySelectorAll(".js-navigation-item")).filter(e => "" === e.style.display);
                if (t.length > 2) return;
                if (!t.every(e => e.classList.contains("js-label-options"))) return;
                const n = t.filter(e => e.classList.contains("js-add-label-button"))[0];
                if (n) {
                    for (const t of e.querySelectorAll('[aria-selected="true"]')) t.setAttribute("aria-selected", "false");
                    n.setAttribute("aria-selected", "true")
                }
            }

            function cr(e, t, n) {
                const s = t.querySelector(e);
                s && (n ? function(e, t) {
                    o(e, ".js-label-error-container").classList.add("errored"), e.textContent = t, e.classList.remove("d-none")
                }(s, n[0]) : function(e) {
                    o(e, ".js-label-error-container").classList.remove("errored"), e.classList.add("d-none")
                }(s))
            }

            function lr(e, t) {
                cr(".js-label-name-error", e, t.name), cr(".js-label-description-error", e, t.description), cr(".js-label-color-error", e, t.color)
            }

            function ur(e) {
                cr(".js-label-name-error", e, null), cr(".js-label-description-error", e, null), cr(".js-label-color-error", e, null)
            }
            async function dr(e) {
                const t = e.closest(".js-label-preview-container");
                if (!t) return;
                const n = o(e, ".js-label-form", HTMLFormElement),
                    i = n.querySelector(".js-new-label-error"),
                    r = n.getAttribute("data-label-id"),
                    a = s(t, ".js-label-preview", HTMLElement),
                    c = function(e, t) {
                        let n = s(e, ".js-new-label-name-input", HTMLInputElement).value.trim();
                        return n.length < 1 && (n = u(t, "data-default-name")), n
                    }(n, a),
                    l = function(e) {
                        const t = s(e, ".js-new-label-color-input", HTMLInputElement);
                        return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
                    }(n),
                    d = function(e) {
                        let t = null;
                        const n = e.querySelector(".js-new-label-description-input");
                        return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t
                    }(n),
                    m = function(e, t, n, s, o) {
                        const i = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                            r = new URLSearchParams(i.search.slice(1));
                        return r.append("color", n), s && r.append("description", s), o && r.append("id", o), i.search = r.toString(), i.toString()
                    }(u(a, "data-url-template"), c, l, d, r);
                if (t.hasAttribute("data-last-preview-url")) {
                    if (m === u(t, "data-last-preview-url")) return
                }
                let f;
                try {
                    f = await $(document, m)
                } catch (g) {
                    const e = await g.response.json();
                    return lr(n, e), void(i && (i.textContent = e.message, i.hidden = !1))
                }
                i && (i.textContent = "", i.hidden = !0), ur(n), a.innerHTML = "", a.appendChild(f), t.setAttribute("data-last-preview-url", m)
            }

            function mr(e, t) {
                o(e, ".js-details-container").classList.toggle("is-empty", t)
            }

            function fr(e) {
                const t = s(document, ".js-labels-count"),
                    n = Ae(t.textContent) + e;
                t.textContent = Me(n);
                const o = s(document, ".js-labels-label");
                return Se(n, o), n
            }
            d(".js-label-filter-field", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:254");
                const n = o(t, ".js-select-menu").querySelector(".js-new-label-name");
                if (!n) return;
                const s = t.value.trim();
                n.textContent = s
            }), r("filterable:change", ".js-filterable-issue-labels", function(e) {
                a(e instanceof CustomEvent, "null.js:267");
                const t = o(e.target, ".js-issue-labels-menu-content"),
                    n = t.querySelector(".js-new-label-modal, .js-add-label-button");
                if (!n) return;
                const s = e.detail.inputField.value.trim().toLowerCase(),
                    i = Array.from(t.querySelectorAll(".js-navigation-item")).filter(e => "" === e.style.display);
                let r = s.length > 0;
                if (r)
                    for (const o of i) {
                        const e = o.querySelector('input[type="checkbox"][name="issue[labels][]"]');
                        if (e) {
                            if (e.getAttribute("data-label-name").toLowerCase() === s) {
                                r = !1;
                                break
                            }
                        }
                    }
                n.classList.toggle("d-none", !r), ar(t)
            }), r("navigation:focus", ".js-label-options", function(e) {
                const t = e.target.closest(".js-filterable-issue-labels");
                t instanceof HTMLElement && ar(t)
            }), m(".js-new-label-color-input", function(e) {
                const t = o(e, "form"),
                    n = s(t, ".js-new-label-swatches");
                n.hidden = !1, e.addEventListener("blur", function() {
                    n.hidden = !0
                }, {
                    once: !0
                })
            }), d(".js-new-label-color-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:327");
                let n = t.value.trim();
                if (!(n.length < 1))
                    if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                        t.classList.remove("text-red");
                        const e = o(t, "form");
                        ir(s(e, ".js-new-label-color", HTMLButtonElement), n)
                    } else t.classList.add("text-red")
            }), _("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:351");
                let n = t.value.trim();
                if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                    const e = o(t, "form");
                    ir(s(e, ".js-new-label-color", HTMLButtonElement), n)
                }
                L(t, "change", !1), ur(o(t, "form", HTMLFormElement))
            }), _("keyup", ".js-new-label-description-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:372");
                const n = t.form;
                a(n, "null.js:374"), ur(n)
            }), _("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:380");
                const n = t.form;
                a(n, "null.js:382"), ur(n)
            }), _("keydown", ".js-label-filter-field", function(e) {
                if ("Enter" !== e.key) return;
                const t = s(document, ".js-issue-labels-menu-content").querySelector('.js-label-options[aria-selected="true"]');
                t && t.click()
            }), r("click", ".js-new-label-color", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:403"), rr(t, sr()), dr(t)
            }), r("mousedown", ".js-new-label-color-swatch", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:411"), rr(t, u(t, "data-color")), dr(t), o(t, ".js-new-label-swatches").hidden = !0
            }), r("toggle", ".js-new-label-modal", function(e) {
                e.target.hasAttribute("open") && function(e) {
                    const t = e.querySelector(".js-new-label-name-input");
                    if (!t) return;
                    a(t instanceof HTMLInputElement, "null.js:437");
                    const n = s(e, ".js-new-label-color-input", HTMLInputElement);
                    let o = sr();
                    if (n.value.length > 0)
                        for (; n.value === o;) o = sr();
                    n.value = o;
                    const i = s(e, ".js-new-label-color", HTMLButtonElement);
                    ir(i, o);
                    const r = s(document, ".js-new-label-name").textContent;
                    q(t, r), So(t), dr(i)
                }(e.target)
            }, {
                capture: !0
            }), j(".js-new-label-modal-form", async function(e, t) {
                const n = s(e, ".js-new-label-error");
                let o;
                try {
                    o = await t.html()
                } catch (r) {
                    const e = r.response.json;
                    n.textContent = e.message, n.hidden = !1
                }
                if (!o) return;
                n.hidden = !0, xe(s(document, ".js-issue-labels-menu-content")), s(document, ".js-new-label-modal").removeAttribute("open"), s(document, ".js-filterable-issue-labels").prepend(o.html);
                const i = s(document, ".js-label-filter-field", HTMLInputElement);
                i.value = i.defaultValue, i.focus()
            }), r("click", ".js-edit-label-cancel", function(e) {
                const t = o(e.target, "form", HTMLFormElement);
                ur(t), t.reset();
                const n = s(t, ".js-new-label-color-input", HTMLInputElement),
                    i = n.value;
                s(t, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = i, xo(t), dr(n);
                const r = e.currentTarget.closest(".js-labels-list-item");
                if (r) {
                    s(r, ".js-update-label", HTMLElement).classList.add("d-none");
                    const e = r.querySelector(".js-label-preview");
                    if (e) {
                        e.classList.add("d-none"), s(r, ".js-label-link", HTMLElement).classList.remove("d-none")
                    }
                    const t = r.querySelectorAll(".js-hide-on-label-edit.d-none");
                    for (const n of t) n.classList.remove("d-none")
                }
            }), j(".js-update-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (s) {
                    return void lr(e, s.response.json)
                }
                ur(e), o(e, ".js-labels-list-item").replaceWith(n.html)
            }), j(".js-create-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (i) {
                    return void lr(e, i.response.json)
                }
                e.reset(), ur(e), s(document, ".js-label-list").prepend(n.html), fr(1), mr(e, !1), rr(s(e, ".js-new-label-color", HTMLButtonElement), sr()), dr(s(e, ".js-new-label-name-input", HTMLInputElement)), xo(e);
                const o = e.closest(".js-details-container");
                o instanceof HTMLElement && He(o)
            }), r("click", ".js-details-target-new-label", function() {
                const e = s(document, ".js-create-label");
                s(e, ".js-new-label-name-input", HTMLInputElement).focus()
            }), r("click", ".js-edit-label", function(e) {
                const t = o(e.currentTarget, ".js-labels-list-item"),
                    n = s(t, ".js-update-label", HTMLElement);
                n.classList.remove("d-none"), s(n, ".js-new-label-name-input", HTMLInputElement).focus();
                const i = t.querySelector(".js-label-preview");
                if (i) {
                    i.classList.remove("d-none"), s(t, ".js-label-link", HTMLElement).classList.add("d-none")
                }
                const r = l(t, ".js-hide-on-label-edit", HTMLElement);
                for (const s of r) s.classList.add("d-none")
            }), j(".js-delete-label", async function(e, t) {
                const n = o(e, ".js-labels-list-item");
                s(n, ".js-label-delete-spinner").hidden = !1, await t.text(), mr(e, 0 === fr(-1)), n.remove()
            });
            const gr = b(function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:230"), dr(t)
            }, 500);

            function pr(e) {
                e instanceof HTMLFormElement ? v(e) : jr(e)
            }

            function hr(e) {
                let t = e.currentTarget;
                a(t instanceof Element, "null.js:21");
                const n = t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form");
                a(n, "null.js:23"), pr(n)
            }
            async function jr(e, t) {
                const s = function(e) {
                    const t = o(e, "form", HTMLFormElement),
                        s = qe(t),
                        i = new FormData;
                    for (const o of s) {
                        var r = n(o, 2);
                        const s = r[0],
                            a = r[1];
                        e.contains(vr(t, s, a)) && i.append(s, a)
                    }
                    return i
                }(e);
                t && s.append(t.name, t.value);
                let i = e.getAttribute("data-authenticity-token");
                if (null == i) {
                    const t = o(e, "form", HTMLFormElement).elements.namedItem("authenticity_token");
                    t instanceof HTMLInputElement && (i = t.value)
                }
                a(i, "null.js:109"), s.append("authenticity_token", i);
                const r = u(e, "data-url"),
                    c = await p(r, {
                        method: "post",
                        body: s
                    });
                ! function(e, t) {
                    e.replaceWith(g(document, t))
                }(o(e, ".js-discussion-sidebar-item"), c)
            }

            function vr(e, t, n) {
                for (const s of e.elements)
                    if ((s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLButtonElement) && s.name === t && s.value === n) return s
            }

            function br(e) {
                s(document, ".js-jump-to-suggestions-container").classList.remove("d-none"), e.classList.add("jump-to-dropdown-visible"), s(document, ".js-jump-to").setAttribute("aria-expanded", "true")
            }

            function Lr() {
                s(document, ".js-jump-to-suggestions-container").classList.add("d-none"), s(document, ".js-jump-to-field").classList.remove("jump-to-dropdown-visible"), s(document, ".js-jump-to").setAttribute("aria-expanded", "false"), $e("menu-deactivation")
            }

            function yr(e) {
                const t = e.form;
                a(t, "null.js:40");
                const n = s(document, ".js-jump-to-suggestions-results-container"),
                    o = e.value.trim(),
                    i = !(!e.form || !e.form.getAttribute("data-scope-type")),
                    r = s(n, ".js-jump-to-scoped-search"),
                    c = s(n, ".js-jump-to-global-search");
                if (r.classList.toggle("d-none", !o || !i), c.classList.toggle("d-none", !o), o && i) {
                    const e = u(t, "action"),
                        s = kr(r, o, Re(e, o, i), !0);
                    n.replaceChild(s, r)
                }
                if (o) {
                    const e = u(t, "data-unscoped-search-url"),
                        s = kr(c, o, Re(e, o, !1), !1);
                    n.replaceChild(s, c)
                }
            }

            function Er(e, t, n) {
                const o = e.form;
                a(o, "null.js:82");
                const i = Ar(".js-jump-to-suggestions-template-container"),
                    r = document.createDocumentFragment();
                n.length < 1 && !t ? function() {
                    if (!Ne(document, "user-login")) return;
                    const e = Ar(".js-jump-to-no-results-template-container").cloneNode(!0);
                    e.classList.remove("d-none"), wr(e)
                }() : (n.forEach((e, n) => {
                    r.appendChild(function(e, t, n, o) {
                        const i = e.cloneNode(!0);
                        i.id = `jump-to-suggestion-${t.type.toLowerCase()}-${t.databaseId}`;
                        const r = s(i, ".js-jump-to-suggestion-path", HTMLAnchorElement);
                        r.href = t.path, r.setAttribute("data-target-type", t.type), r.setAttribute("data-target-id", `${t.databaseId}`), r.setAttribute("data-client-rank", `${o}`), r.setAttribute("data-server-rank", `${t.rank}`);
                        const a = s(i, ".js-jump-to-suggestion-name");
                        switch (a.textContent = t.name, a.setAttribute("aria-label", t.name), De(a, n.replace(/\s/g, "")), t.type) {
                            case "Team":
                                {
                                    const e = s(i, ".js-jump-to-suggestion-avatar", HTMLImageElement);e.alt = t.name,
                                    e.src = t.avatarUrl ? t.avatarUrl : "",
                                    e.classList.remove("d-none");
                                    break
                                }
                            case "Project":
                                Tr(i, ".js-jump-to-octicon-project");
                                break;
                            case "Repository":
                                Tr(i, ".js-jump-to-octicon-repo")
                        }
                        return s(i, ".js-jump-to-badge-jump").classList.remove("d-none"), i
                    }(i, e, t, n))
                }), wr(r))
            }

            function wr(e) {
                const t = s(document, ".js-jump-to-suggestions-results-container");
                for (const n of l(t, ".js-jump-to-suggestion")) a(n.parentNode, "null.js:125"), n.parentNode.removeChild(n);
                t.appendChild(e)
            }

            function Tr(e, t) {
                const n = s(e, ".js-jump-to-octicon"),
                    o = s(n, t, SVGElement);
                n.classList.remove("d-none"), o.classList.remove("d-none")
            }

            function kr(e, t, n, o) {
                const i = e.cloneNode(!0);
                i.id = `jump-to-suggestion-search-${o?"scoped":"global"}`;
                const r = s(i, ".js-jump-to-suggestion-path", HTMLAnchorElement);
                r.href = n, r.setAttribute("data-target-type", "Search");
                const a = s(i, ".js-jump-to-suggestion-name");
                a.textContent = t, a.setAttribute("aria-label", t), Tr(i, ".js-jump-to-octicon-search");
                const c = s(i, ".js-jump-to-badge-search");
                return c.classList.remove("d-none"), o ? s(c, ".js-jump-to-badge-search-text-default").classList.remove("d-none") : s(c, ".js-jump-to-badge-search-text-global").classList.remove("d-none"), i
            }

            function Ar(e) {
                const t = s(document, ".js-jump-to-suggestions-container"),
                    n = s(t, e).firstElementChild;
                return a(n instanceof HTMLElement, "null.js:218"), n
            }

            function Mr(e) {
                return !!(e ? e.closest(".js-jump-to-field") : document.querySelector(".js-jump-to-field"))
            }

            function Sr(e, t) {
                const n = e.value.trim(),
                    s = Be(Pe(n, t, window.location.pathname)),
                    o = s.slice(0, 7);
                Fe({
                    measures: {
                        result_count: s.length,
                        display_count: o.length,
                        filter_count: t.length - s.length
                    },
                    context: {
                        query: n,
                        display_set: o.map(e => [e.type, e.databaseId])
                    }
                }), Er(e, n, o), $e("menu-activation") || $e("query")
            }
            let xr, Hr;
            async function Cr(e) {
                const t = function(e) {
                        const t = u(e, "data-jump-to-suggestions-path");
                        return window.location.origin + t
                    }(e),
                    n = Ve();
                try {
                    const e = await z(We(t, {
                        method: "POST",
                        body: n
                    }));
                    return Ke(e)
                } catch (s) {
                    if (s.response && 422 === s.response.status) return [];
                    throw s
                }
            }
            async function qr(e) {
                const t = e;
                a(t instanceof HTMLInputElement, "null.js:78"),
                    function(e) {
                        e.classList.add("js-navigation-enable"), e.classList.add("jump-to-field-active")
                    }(t), br(t), xr || (xr = Cr(t)), yr(t), Ir(t), Sr(t, await xr)
            }

            function Ir(e) {
                const t = e.value.trim(),
                    n = s(document, ".js-jump-to-suggestions-results-container");
                t ? Xe(n) : Qe(n)
            }
            r("suggester:complete", ".js-new-label-name-input", gr), d(".js-new-label-name-input", gr), d(".js-new-label-description-input", gr), d(".js-new-label-color-input", gr), _("keypress", ".js-new-label-name-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:639");
                const n = parseInt(t.getAttribute("data-maxlength"));
                ee(t.value) >= n && e.preventDefault()
            }), r("click", ".js-issues-label-select-menu-item", function(e) {
                a(e instanceof MouseEvent, "null.js:649"), e.altKey && (e.preventDefault(), e.stopPropagation(), window.location = u(e.currentTarget, "data-excluded-url"))
            }), _("keydown", ".js-issues-label-select-menu-item", function(e) {
                if (a(e instanceof KeyboardEvent, "null.js:659"), "Enter" !== e.key) return;
                if (!e.altKey) return;
                const t = e.currentTarget;
                e.preventDefault(), e.stopPropagation(), t instanceof HTMLAnchorElement && (window.location = u(t, "data-excluded-url"))
            }), ie(function(e) {
                let t = e.newURL;
                const n = t.match(/\/issues#issue\/(\d+)$/);
                if (n) {
                    const e = n[1];
                    window.location = t.replace(/\/?#issue\/.+/, `/${e}`)
                }
            }), ie(function(e) {
                let t = e.newURL;
                const n = t.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
                if (n) {
                    const e = n[1],
                        s = n[2];
                    window.location = t.replace(/\/?#issue\/.+/, `/${e}#issuecomment-${s}`)
                }
            }), i(".js-issue-row .js-issues-list-check:checked", {
                add(e) {
                    o(e, ".js-issue-row").classList.add("selected")
                },
                remove(e) {
                    o(e, ".js-issue-row").classList.remove("selected")
                }
            }), r("navigation:keydown", ".js-issue-row", function(e) {
                a(e instanceof CustomEvent, "null.js:28"), "x" === e.detail.hotkey && (! function(e) {
                    const t = e.querySelector(".js-issues-list-check");
                    t instanceof HTMLInputElement && q(t, !t.checked)
                }(e.currentTarget), e.preventDefault(), e.stopPropagation())
            }), m("#js-issues-search", function(e) {
                a(e instanceof HTMLInputElement, "null.js:40"), e.value = e.value
            }), r("details-menu-select", ".js-saved-reply-container button", function(e) {
                const t = s(e.target, ".js-saved-reply-body"),
                    n = t.textContent.trim(),
                    i = o(e.currentTarget, ".js-previewable-comment-form"),
                    r = s(i, "textarea.js-comment-field", HTMLTextAreaElement);
                Ce(r, n), setTimeout(() => r.focus(), 0), s(i, "input.js-saved-reply-id", HTMLInputElement).value = t.getAttribute("data-saved-reply-id") || ""
            }), _("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
                if ("Control+." === U(e)) {
                    a(e.target instanceof HTMLElement, "null.js:26");
                    const t = o(e.target, ".js-previewable-comment-form");
                    s(t, ".js-saved-reply-container").setAttribute("open", ""), e.preventDefault(), ye({
                        category: "Markdown Toolbar",
                        action: "shortcut",
                        label: "saved reply"
                    })
                }
            }), _("keydown", ".js-saved-reply-filter-input", function(e) {
                if (/^Control\+[1-9]$/.test(U(e))) {
                    a(e.target instanceof HTMLElement, "null.js:41");
                    const t = o(e.target, ".js-saved-reply-container").querySelectorAll('[role="menuitem"]'),
                        n = Number(e.key),
                        s = t[n - 1];
                    s && (s.click(), e.preventDefault(), ye({
                        category: "Saved Replies",
                        action: "shortcut",
                        label: `saved reply number ${n}`
                    }))
                }
            }), r("selectmenu:selected", ".js-discussion-sidebar-item", function(e) {
                const t = s(e.currentTarget, ".js-issue-sidebar-form"),
                    n = e.target,
                    i = o(n, ".js-select-menu"),
                    r = i.hasAttribute("data-multiple");
                if (n.hasAttribute("data-clear-assignees")) {
                    const e = l(i, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement);
                    for (const t of e) t.disabled = !1, t.checked = !1;
                    pr(t)
                } else if (r) {
                    const e = Number(i.getAttribute("data-max-options"));
                    if (e) {
                        const t = i.querySelectorAll('input[type="checkbox"]:checked').length;
                        s(i, ".js-max-warning").classList.toggle("d-none", t <= e)
                    }
                    i.addEventListener("menu:deactivate", hr, {
                        once: !0
                    })
                } else pr(t)
            }), j(".js-issue-sidebar-form", async function(e, t) {
                const n = await t.html();
                a(e.parentNode instanceof HTMLElement, "null.js:62"), o(e, ".js-discussion-sidebar-item").replaceWith(n.html)
            }), r("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:69"), jr(o(t, ".js-issue-sidebar-form"), {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), r("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:79"), jr(o(t, ".js-issue-sidebar-form"), {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), j(".js-pages-preview-toggle-form", async function(e, t) {
                const n = await t.json();
                s(e, "button.btn").textContent = n.json.new_button_value
            }), r("change", ".js-project-menu-checkbox", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:123");
                const n = o(t, ".js-project-menu-container");
                for (const s of l(n, ".js-project-menu-checkbox", HTMLInputElement)) s !== t && s.name === t.name && (s.checked = t.checked, o(s, ".select-menu-item").classList.toggle("selected", s.checked))
            }), r("click", ".js-prompt-dismiss", function(e) {
                o(e.currentTarget, ".js-prompt").remove()
            }), r("change", ".js-issues-list-check", function() {
                const e = !!document.querySelector(".js-issues-list-check:checked");
                s(document, "#js-issues-toolbar").classList.toggle("triage-mode", e)
            }), r("change", ".js-issues-list-check", function() {
                const e = l(document, ".js-issues-list-check:checked", HTMLInputElement).map(e => [e.name, e.value]),
                    t = document.querySelectorAll("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu");
                for (const n of t) Ie(n, e), n.classList.add("js-load-contents")
            }), r("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item", async function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-menu-container"),
                    i = n.hasAttribute("data-submits-hash"),
                    r = o(t, "form"),
                    a = t.classList.contains("selected"),
                    c = u(t, "data-name"),
                    l = u(t, "data-value"),
                    d = document.createElement("input");
                d.setAttribute("type", "hidden"), i ? (d.setAttribute("name", `${c}[${l}]`), d.setAttribute("value", a ? "1" : "0")) : (d.setAttribute("name", c), d.setAttribute("value", a ? l : "")), s(r, ".js-issues-triage-fields").appendChild(d), r.classList.add("will-submit"), await M(), _e(n)
            }), r("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container", async function(e) {
                const t = e.currentTarget,
                    n = t.querySelector("form.will-submit");
                if (!(n instanceof HTMLFormElement)) return;
                t.classList.add("is-loading");
                const s = n.action,
                    o = n.method;
                try {
                    const e = await z(s, {
                        method: o,
                        body: new FormData(n)
                    });
                    await Q(e.job.url, {
                        headers: {
                            accept: "application/json"
                        }
                    }), a(t instanceof HTMLElement, "null.js:81"), _e(t), location.reload()
                } catch (i) {
                    t.classList.add("has-error")
                }
                n.classList.remove("will-submit"), e.preventDefault()
            }), j(".js-undo-issue-event-form", async (e, t) => {
                await t.text();
                const n = u(e, "action");
                e.remove();
                const s = document.querySelectorAll(`.js-undo-issue-event-form[action="${n}"]`);
                for (let o = 0; o < s.length; o++) s[o].remove()
            }), i(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    try {
                        Oe(window.location.pathname)
                    } catch (Nd) {
                        Ue(new ze(Nd))
                    }
                    k(e, async function() {
                        yr(e), Ir(e), Sr(e, await xr)
                    }), document.activeElement && document.activeElement === e && qr(e)
                }
            }), m(".js-jump-to-field", qr), r("navigation:keydown", ".js-site-search-form", function(e) {
                a(e instanceof CustomEvent, "null.js:94");
                const t = e.currentTarget.querySelector('.js-navigation-item[aria-selected="true"]');
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (t) Je(s(t, ".js-jump-to-suggestion-path", HTMLElement));
                        else {
                            const t = e.currentTarget;
                            a(t instanceof HTMLFormElement, "null.js:102"), v(t)
                        }
                        break;
                    case "Escape":
                        s(e.currentTarget, ".js-jump-to-field", HTMLInputElement).blur(), Lr()
                }
            }), r("navigation:focus", ".js-site-search-form", function(e) {
                const t = s(document, ".js-jump-to-field", HTMLInputElement),
                    n = e.target.id;
                t.setAttribute("aria-activedescendant", n)
            }), r("focusout", ".js-jump-to", function() {
                const e = s(document, ".js-jump-to-field", HTMLInputElement);
                Hr = setTimeout(() => {
                    ! function(e) {
                        e.classList.remove("js-navigation-enable"), e.classList.remove("jump-to-field-active")
                    }(e), Lr()
                }, 200)
            }), r("focusin", ".js-jump-to", function() {
                clearTimeout(Hr), br(s(document, ".js-jump-to-field", HTMLInputElement))
            }), r("click", ".js-jump-to-suggestion-path", function(e) {
                const t = e.currentTarget;
                if (a(t instanceof HTMLAnchorElement, "null.js:142"), "Search" === t.getAttribute("data-target-type")) {
                    const e = s(document, ".js-jump-to-field", HTMLInputElement);
                    t.href = Ge(e.value.trim(), t.href)
                }
                Je(t)
            }), r("submit", ".js-site-search-form", function(e) {
                if (!Mr()) return;
                const t = e.target;
                t.getAttribute("data-scoped-search-url") && Fe({
                    scope_type: t.getAttribute("data-scope-type"),
                    scope_id: t.getAttribute("data-scope-id")
                }), $e("search")
            });
            let _r = 0,
                $r = null;
            const Rr = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

            function Nr(e) {
                ! function(e) {
                    let t = document.getElementById("konami-overlay");
                    t || ((t = document.createElement("div")).id = "konami-overlay", t.classList.add("konami-overlay"), document && document.body && document.body.appendChild(t));
                    if (!t) return;
                    t.style.background = `rgba(0,0,0,${e+.24})`;
                    const n = 50 * (1 + e),
                        s = (e, t) => e + Math.round(Math.random() * (t - e));
                    for (let o = 0; o < n; o++) {
                        const e = s(0, window.innerHeight),
                            n = s(0, window.innerWidth),
                            o = document.createElement("div");
                        o.classList.add("dot"), o.textContent = `${s(0,1)}`, o.style.fontSize = `${s(1,8)}px`, o.style.color = `rgba(255,255,255,${Math.random()})`, o.style.top = `${e}px`, o.style.left = `${n}px`;
                        const i = s(0, 300);
                        setTimeout(() => t && t.prepend(o), i), setTimeout(() => o.parentNode && o.parentNode.removeChild(o), i + s(100, 500))
                    }
                }((_r = e) / Rr.length);
                const t = l(document, ".js-konami-key");
                for (const i of t) i.classList.remove("active"), i.classList.remove("inactive"), i.classList.remove("complete"), i.classList.remove("down");
                const n = t.slice(0, _r),
                    s = t.slice(_r, _r + 1),
                    o = t.slice(_r + 2);
                for (const i of n) i.classList.add("complete");
                for (const i of s) i.classList.add("active");
                for (const i of o) i.classList.add("inactive")
            }

            function Dr(e) {
                if (!(e.target instanceof Node && Ye(e.target) || _r >= Rr.length || (Rr.includes(U(e)) && (e.preventDefault(), e.stopPropagation()), U(e) !== Rr[_r]))) {
                    const e = document.querySelectorAll(".js-konami-key")[_r];
                    e && e.classList.add("down")
                }
            }

            function Br(e) {
                if (!(e.target instanceof Node && Ye(e.target) || _r >= Rr.length)) {
                    if (U(e) === Rr[_r]) Nr(_r + 1), _r === Rr.length - 1 && function() {
                        const e = document.querySelector(".js-konami-success");
                        e && e.removeAttribute("hidden")
                    }(), _r === Rr.length && function() {
                        const e = document.querySelector(".js-konami-form");
                        a(e instanceof HTMLFormElement, "null.js:145"), v(e)
                    }();
                    else {
                        if (!Rr.includes(U(e))) return;
                        Nr(0)
                    }
                    e.preventDefault(), e.stopPropagation()
                }
            }

            function Pr() {
                $r = null, document.removeEventListener("keydown", Dr), document.removeEventListener("keyup", Br);
                const e = document.getElementById("konami-overlay");
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function Fr(e) {
                const t = e.currentTarget,
                    n = s(t, ".js-milestone-edit-cancel"),
                    o = n.getAttribute("data-confirm-changes");
                o && (Ze(t) ? n.setAttribute("data-confirm", o) : n.removeAttribute("data-confirm"))
            }

            function Or(e, t) {
                r("click", `${e} .js-sortable-button`, function(n) {
                    let s = n.currentTarget;
                    a(s instanceof HTMLElement, "null.js:11");
                    const i = o(s, e),
                        r = s.getAttribute("data-direction"),
                        c = i.parentElement;
                    a(c, "null.js:15");
                    const l = Array.from(c.children).indexOf(i);
                    "up" === r && i.previousElementSibling ? i.previousElementSibling.insertAdjacentElement("beforebegin", i) : "down" === r && i.nextElementSibling && i.nextElementSibling.insertAdjacentElement("afterend", i);
                    const u = Array.from(c.children).indexOf(i);
                    s.focus(), t({
                        oldIndex: l,
                        newIndex: u,
                        item: i
                    })
                })
            }
            r("click", ".js-konami", async function(e) {
                if (e.preventDefault(), $r) return;
                Nr(5), document.addEventListener("keydown", Dr), document.addEventListener("keyup", Br);
                const t = `/site/konami?return_to=${e.target.getAttribute("data-return-to")||""}`;
                $r = await Y({
                    content: $(document, t),
                    dialogClass: "kb-konami-dialog container-xl"
                }), Nr(_r), $r.addEventListener("dialog:remove", Pr, {
                    once: !0
                })
            }), r("click", ".js-details-target-new-label", function(e) {
                let t = e.target;
                a(t instanceof HTMLElement, "null.js:10");
                const n = cn(t, "Popover");
                if (n) {
                    const e = s(n, "form", HTMLFormElement);
                    v(e)
                }
            }), i("link[rel=prefetch-viewed]", {
                initialize() {
                    requestIdleCallback(() => {
                        fetch(location.href, {
                            method: "HEAD",
                            credentials: "same-origin",
                            headers: {
                                Purpose: "prefetch-viewed"
                            }
                        })
                    })
                }
            }), r("click", ".js-manage-requests-tabs-item", function(e) {
                let t = e.currentTarget;
                const n = o(t, ".js-manage-memberships-container");
                s(n, ".js-manage-invitations-tabs-item").classList.remove("selected"), t.classList.add("selected");
                const i = s(n, ".js-manage-invitations-list"),
                    r = s(n, ".js-manage-requests-list");
                i.classList.add("d-none"), r.classList.remove("d-none")
            }), r("click", ".js-manage-invitations-tabs-item", function(e) {
                let t = e.currentTarget;
                const n = o(t, ".js-manage-memberships-container");
                s(n, ".js-manage-requests-tabs-item").classList.remove("selected"), t.classList.add("selected");
                const i = s(n, ".js-manage-requests-list"),
                    r = s(n, ".js-manage-invitations-list");
                i.classList.add("d-none"), r.classList.remove("d-none")
            }), r("change", ".js-milestone-edit-form", Fr), r("click", ".js-milestone-edit-form", Fr);
            const Ur = new WeakMap;
            r("socket:message", ".js-milestone-issues", async function(e) {
                a(e instanceof CustomEvent, "null.js:34");
                const t = e.currentTarget,
                    n = e.detail.data,
                    o = s(t, ".js-milestone-issues-container");
                if ("1" === o.getAttribute("data-is-sorting")) return void o.removeAttribute("data-is-sorting");
                await nt();
                const i = document.querySelector(".js-client-uid");
                i instanceof HTMLInputElement && i.value === n.client_uid || async function(e) {
                    if (et(e)) return;
                    const t = u(e, "data-url"),
                        n = await $(document, t);
                    tt(document, () => {
                        e.replaceWith(n)
                    })
                }(t)
            }), j(".js-milestone-sort-form", async function(e, t) {
                const n = (await t.json()).json,
                    o = s(e, ".js-milestone-reorder-feedback");
                o.textContent = "", n.error ? s(e, ".js-milestone-changed").classList.remove("d-none") : (s(e, ".js-timestamp", HTMLInputElement).value = n.updated_at, o.textContent = o.getAttribute("data-success-text") || "")
            });
            const zr = b(function(e) {
                const t = e.newIndex,
                    n = e.item,
                    i = o(n, ".js-milestone-issues-container"),
                    r = n.getAttribute("data-id") || "",
                    a = function(e, t) {
                        return e.querySelectorAll(".js-draggable-issue")[t]
                    }(i, t - 1),
                    c = a && a.getAttribute("data-id"),
                    l = o(i, ".js-milestone-sort-form", HTMLFormElement);
                s(l, ".js-item-id", HTMLInputElement).value = r, s(l, ".js-prev-id", HTMLInputElement).value = c || "", ye({
                    category: "Milestone",
                    action: "reorder",
                    label: "string" == typeof e.trackingLabel ? e.trackingLabel : "drag-and-drop"
                }), i.setAttribute("data-is-sorting", "1"), v(l)
            }, 200);

            function Vr(e, t) {
                zr({
                    item: t,
                    newIndex: Array.from(e.querySelectorAll(".js-draggable-issue")).indexOf(t),
                    trackingLabel: "keyboard-shortcut"
                }), st(o(t, ".js-navigation-container"), t)
            }

            function Wr(e) {
                const t = o(e, ".js-org-insights-hero-container");
                for (const n of t.querySelectorAll("[role=tab]")) n.setAttribute("aria-selected", (n === e).toString());
                for (const n of t.querySelectorAll("[role=tabpanel]")) n.hidden = e.id !== n.getAttribute("aria-labelledby");
                for (const n of l(document, ".js-org-insights-period-selector-link", HTMLAnchorElement)) n.hash = e.hash
            }

            function Kr() {
                const e = document.querySelector(".js-org-reinstate-forms"),
                    t = document.querySelectorAll(".js-org-reinstate-option:checked");
                if (!e || 1 !== t.length) return;
                const n = u(t[0], "data-form"),
                    s = e.getElementsByClassName("js-togglable-form");
                for (const i of s) i.classList.add("d-none");
                const o = document.getElementById(n);
                a(o, "null.js:42"), o.classList.remove("d-none")
            }
            async function Jr(e, t, n, o) {
                const i = u(e, "data-url"),
                    r = new URL(i, window.location.origin),
                    a = new URLSearchParams(r.search.slice(1));
                a.append("member", t), a.append("action_type", n), o && a.append("return_to", o), r.search = a.toString(), Gr(!0), s(document, ".js-add-team-member-form").hidden = !0;
                const c = await $(document, r);
                Gr(!1), e.innerHTML = "", e.appendChild(c)
            }

            function Gr(e) {
                s(document, ".js-add-members-loading-state").hidden = !e, s(document, ".js-add-members-modal-content").hidden = e
            }

            function Xr() {
                s(document, ".js-save-member-privileges-button-container").classList.toggle("member-privilege-radios-preserved", Qr() && Yr() && Zr())
            }

            function Qr() {
                return "" === s(document, ".js-customize-member-privileges-default-repository-permission-radio:checked", HTMLInputElement).value
            }

            function Yr() {
                return "0" === s(document, ".js-customize-member-privileges-repository-creation-radio:checked", HTMLInputElement).value
            }

            function Zr() {
                return "secret" === s(document, ".js-customize-member-privileges-team-privacy-radio:checked", HTMLInputElement).value
            }

            function ea() {
                return s(document, ".js-saml-provider-settings-form", HTMLFormElement)
            }

            function ta() {
                return ea().querySelector(".js-saml-form-inputs")
            }

            function na() {
                return s(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement)
            }

            function sa(e) {
                e && e.classList.remove("d-none")
            }

            function oa() {
                return "1" === s(document, ".js-org-saml-currently-enabled", HTMLInputElement).value && !s(document, ".js-org-enable-saml", HTMLInputElement).checked
            }

            function ia() {
                return s(document, ".is-submit-button-value", HTMLInputElement)
            }

            function ra() {
                return s(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === na().value && !("1" === s(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === s(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value
            }

            function aa() {
                ea().submit()
            }

            function ca() {
                const e = document.querySelector(".js-org-enable-saml");
                e && e instanceof HTMLInputElement && (e.checked = !0, sa(ta()))
            }

            function la(e, t) {
                s(e, ".js-add-child-team-loading-state").hidden = !t, s(e, ".js-add-child-team-modal-content").hidden = t
            }

            function ua(e) {
                const t = s(e, ".js-inline-comment-form-container");
                t.classList.add("open"), s(t, ".js-write-tab").click(), s(t, ".js-comment-field").focus()
            }

            function da(e) {
                e.reset();
                const t = o(e, ".js-inline-comment-form-container");
                t.classList.remove("open"), L(t, "inlinecomment:collapse")
            }

            function ma(e) {
                const t = e.closest(".js-teams-write-a-post");
                return t ? function(e) {
                    const t = s(e, ".js-team-discussions-post-compose");
                    t.classList.contains("d-none") || (t.classList.add("d-none"), s(e, ".js-post-placeholder").classList.remove("d-none"), e.classList.remove("active")), s(e, ".js-comment-form-error").classList.add("d-none")
                }(t) : e.closest(".js-teams-reply-to-post") ? function(e) {
                    a(e instanceof HTMLFormElement, "null.js:35"), da(e)
                }(e) : void 0
            }

            function fa(e) {
                const t = e.closest(".js-teams-reply-to-post"),
                    n = t && t.querySelector(".js-comment-form-error");
                n && n.classList.add("d-none")
            }

            function ga(e, t) {
                e.textContent = (parseInt(e.textContent) + t).toString()
            }

            function pa(e, t) {
                e.classList.add("d-none"), a(e.parentElement, "null.js:215"), s(e.parentElement, t).classList.remove("d-none")
            }
            Or(".js-draggable-issue", zr), r("navigation:keydown", ".js-draggable-issues-container .js-draggable-issue", function(e) {
                a(e instanceof CustomEvent, "null.js:111");
                const t = e.currentTarget,
                    n = o(t, ".js-draggable-issues-container");
                if ("J" === e.detail.hotkey) {
                    const s = t.nextElementSibling;
                    s && (s.after(t), Vr(n, t), e.preventDefault(), e.stopPropagation())
                } else if ("K" === e.detail.hotkey) {
                    const s = t.previousElementSibling;
                    s && (s.before(t), Vr(n, t), e.preventDefault(), e.stopPropagation())
                }
            }), i(".js-draggable-issues-container", {
                add: function(e) {
                    if (Ur.has(e)) return;
                    const t = ot.create(e, {
                        animation: 150,
                        item: ".js-draggable-issue",
                        handle: ".js-drag-handle",
                        onUpdate: zr,
                        chosenClass: "is-dragging"
                    });
                    Ur.set(e, t)
                },
                remove: function(e) {
                    const t = Ur.get(e);
                    t && t.destroy()
                }
            }), r("submit", ".js-mobile-preference-form", e => {
                s(e.currentTarget, ".js-mobile-preference-anchor-field", HTMLInputElement).value = window.location.hash.substr(1)
            }), i("#js-oauth-authorize-btn", e => {
                !async function(e) {
                    await it(document), await new Promise(e => setTimeout(e, 1e3)), a(e instanceof HTMLButtonElement, "null.js:9"), e.disabled = !1
                }(e)
            }), async function() {
                await C, window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"])
            }(), document.addEventListener("pjax:complete", function() {
                window._octo.push(["recordPageView"])
            }), r("change", ".js-two-factor-needs-enforced", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:36"), s(document, ".js-confirm-2fa-modal").classList.toggle("d-none", !t.checked), s(document, ".js-2fa-save-button").classList.toggle("d-none", t.checked)
            }), i(".js-two-factor-enforcement-poller", function(e) {
                e.addEventListener("load", function() {
                    window.location.reload()
                })
            }), r("click", ".js-org-insights-hero-container [role=tab]", e => {
                let t = e.currentTarget;
                t instanceof HTMLAnchorElement && Wr(t)
            }), ie(() => {
                const e = document.querySelector(".js-org-insights-hero-container");
                if (!e) return;
                const t = e.querySelector(`[href='${document.location.hash||"#insights-prs"}']`);
                t instanceof HTMLAnchorElement && Wr(t)
            }), r("click", ".js-invitations-team-suggestions-view-all", async function(e) {
                const t = e.currentTarget,
                    n = u(t, "data-url"),
                    i = l(document, ".js-invitation-toggle-team:checked", HTMLInputElement).map(e => e.value),
                    r = await $(document, n),
                    a = o(t, "ul");
                a.innerHTML = "", a.appendChild(r);
                for (const o of i) s(a, `.js-invitation-toggle-team[value="${o}"]`, HTMLInputElement).checked = !0
            }), r("change", ".js-org-reinstate-option", Kr), i(".js-org-reinstate-forms", Kr), r("click", ".js-membership-tab", function(e) {
                const t = u(e.currentTarget, "data-membership"),
                    n = s(document, ".js-member-filter-field", HTMLInputElement),
                    o = n.value,
                    i = new RegExp("membership:[a-z-]+"),
                    r = o.toString().trim().replace(i, "");
                n.value = `${r} ${t}`.replace(/\s\s/, " "), n.focus(), rt(n), s(document, ".js-membership-tabs").classList.remove("selected"), e.currentTarget.classList.add("selected")
            }), r("click", ".js-member-search-filter", function(e) {
                e.preventDefault();
                const t = u(e.currentTarget, "data-filter"),
                    n = o(e.currentTarget, "[data-filter-on]"),
                    i = u(n, "data-filter-on"),
                    r = s(document, ".js-member-filter-field", HTMLInputElement),
                    a = r.value,
                    c = new RegExp(`${i}:[a-z]+`),
                    l = a.toString().trim().replace(c, "");
                r.value = `${l} ${t}`.replace(/\s\s/, " "), r.focus(), rt(r)
            }), r("submit", ".js-needs-interstitial .js-approve-membership-request", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLFormElement, "null.js:57");
                const n = u(s(t, "[data-member-name]"), "data-member-name"),
                    i = u(t, "data-action-type"),
                    r = o(t, ".js-add-members-container");
                e.preventDefault(), Jr(r, n, i, null)
            }), r("submit", ".js-needs-interstitial.js-add-team-member-form", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLFormElement, "null.js:69");
                const n = c(t, "member");
                if (!n.value) return;
                const o = u(t, "data-action-type"),
                    i = s(document, ".js-add-members-container");
                e.preventDefault();
                const r = t.getAttribute("data-return-to");
                Jr(i, n.value, o, r)
            }), i("#add-team-member", function(e) {
                const t = s(e, "details-dialog"),
                    n = t.innerHTML;
                e.addEventListener("toggle", function(e) {
                    let s = e.currentTarget;
                    a(s instanceof HTMLElement, "null.js:112"), s.hasAttribute("open") || (t.innerHTML = n)
                })
            }), j(".js-add-org-member-form", async function(e, t) {
                const n = s(document, ".js-member-list");
                e.classList.add("is-sending");
                const o = document.querySelector(".flash-messages");
                let i;
                o && o.remove();
                try {
                    i = await t.json()
                } catch (c) {
                    if (!c.response && !c.response.json) return;
                    return void n.insertAdjacentHTML("beforebegin", c.response.json.message_html)
                }
                e.classList.remove("is-sending"), s(e, "auto-complete", AutocompleteElement).value = "";
                const r = s(g(document, i.json.list_item_html), "*"),
                    a = r.getAttribute("data-login");
                if (a)
                    for (const s of n.children)
                        if (s.getAttribute("data-login") === a) {
                            s.remove();
                            break
                        } n.prepend(r)
            }), r("change", ".js-customize-member-privileges-default-repository-permission-radio", function() {
                s(document, ".js-migrate-ability-list-item-default-repository-permission").classList.toggle("migrate-ability-not-possible", Qr()), Xr()
            }), r("change", ".js-customize-member-privileges-repository-creation-radio", function() {
                const e = document.querySelector(".js-migrate-ability-list-item-members-can-create-repositories");
                e instanceof HTMLElement && (e.classList.toggle("migrate-ability-not-possible", Yr()), Xr())
            }), r("change", ".js-customize-member-privileges-team-privacy-radio", function() {
                s(document, ".js-migrate-ability-list-item-team-privacy").classList.toggle("migrate-ability-not-possible", Zr()), Xr()
            }), i(".js-save-member-privileges-button-container", Xr), r("click", ".js-org-signup-duration-change", e => {
                a(e instanceof MouseEvent, "null.js:13");
                const t = e.currentTarget,
                    n = s(document, ".js-plan-choice:checked", HTMLInputElement),
                    o = s(document, "#js-pjax-container"),
                    i = new URLSearchParams;
                i.append("plan_duration", u(t, "data-plan-duration")), i.append("plan", n.value);
                const r = s(document, ".js-new-organization-name", HTMLInputElement);
                r.value && i.append("login", r.value);
                const c = s(document, ".js-new-organization-billing-email", HTMLInputElement);
                c.value && i.append("billing_email", c.value), document.querySelector(".js-transform-user") && i.append("transform_user", "1");
                const l = e.currentTarget;
                a(l instanceof HTMLAnchorElement, "null.js:29"), l.search = `?${i.toString()}`, R(e, {
                    scrollTo: !1,
                    container: o
                })
            }), r("autocheck:success", ".js-new-organization-name", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:40");
                const n = o(t, "dd").querySelector(".js-field-hint-name");
                n && (n.textContent = t.value)
            }), d(".js-company-name-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:53");
                const n = t.form;
                a(n, "null.js:56");
                const o = n.querySelector(".js-company-name-text");
                if (!o) return;
                const i = s(n, ".js-corp-tos-link"),
                    r = n.querySelector(".js-tos-link");
                r && (r.classList.add("d-none"), r.setAttribute("aria-hidden", "true")), i.classList.remove("d-none"), i.setAttribute("aria-hidden", "false"), o.textContent = ` on behalf of your company, ${t.value}`
            }), i(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form;
                    a(t, "null.js:86");
                    const n = s(t, ".js-company-name-input", HTMLInputElement),
                        o = s(document, ".js-company-name-text"),
                        i = s(document, ".js-corp-tos-link"),
                        r = s(document, ".js-tos-link");
                    e.getAttribute("data-optional") && n.removeAttribute("required"), q(n, ""), r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false"), i.classList.add("d-none"), i.setAttribute("aria-hidden", "true"), o.textContent = ""
                }
            }), i(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form;
                    a(t, "null.js:113");
                    const n = s(t, ".js-company-name-input");
                    n.setAttribute("required", "required"), L(n, "change")
                }
            }), i(".js-plan-choice", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;
                    t.addEventListener("change", function() {
                        const e = document.querySelector(".js-new-business-section");
                        e && t.checked && (e.classList.add("has-removed-contents"), s(document, ".js-company-owned", HTMLInputElement).disabled = !1)
                    })
                }
            }), i(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;

                    function n() {
                        if (t.checked && t.form) {
                            const e = s(t.form, ".js-company-owned", HTMLInputElement);
                            q(e, !0), document.querySelectorAll(".js-new-business-section").length > 0 && (e.disabled = !0)
                        }
                    }
                    t.addEventListener("change", n), n()
                }
            }), j(".js-org-list-item .js-org-remove-item", async function(e, t) {
                o(e, ".js-org-list-item").classList.add("d-none");
                try {
                    await t.text()
                } catch (Nd) {
                    o(e, ".js-org-list-item").classList.remove("d-none");
                    const n = e.getAttribute("data-error-message");
                    if (n) return void alert(n)
                }
                o(e, ".js-org-list-item").remove()
            }), r("click", ".js-plan-choice", e => {
                const t = document.querySelector(".SignUpContinueActions"),
                    n = e.target.value;
                null != t && t.classList.remove("has-removed-contents");
                const s = !(n && "business_plus" === n);
                for (const o of l(document, ".js-enterprise-choice", HTMLInputElement)) o.disabled = s
            }), r("click", ".js-enterprise-choice", e => {
                const t = document.querySelector(".js-enterprise-plan-seat-selection"),
                    n = document.querySelector(".js-billing-section"),
                    s = document.querySelector(".SignUpContinueActions"),
                    o = document.querySelector(".js-enterprise-contact"),
                    i = e.target.value,
                    r = [n, s, t];
                for (const a of r) null != a && a.classList.toggle("has-removed-contents", "cloud" !== i);
                o && o.classList.toggle("has-removed-contents", "cloud" === i)
            }), j(".js-select-repo-permission", async function(e, t) {
                e.classList.remove("was-successful"), e.classList.add("is-loading");
                const n = await t.json();
                e.classList.remove("is-loading"), e.classList.add("was-successful");
                const s = e.closest(".js-org-repo");
                if (s) {
                    const e = n.json;
                    s.classList.toggle("with-higher-access", e.members_with_higher_access)
                }
            }), j(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", async function(e, t) {
                ! function(e) {
                    for (const n in e.selectors) {
                        const t = e.selectors[n],
                            s = document.querySelector(n);
                        t && s && (s.textContent = t)
                    }
                    const t = 100 === e.filled_seats_percent;
                    s(document, ".js-live-update-seats-percent").style.width = `${e.filled_seats_percent}%`, s(document, ".js-need-more-seats").classList.toggle("d-none", !t), s(document, ".js-add-org-member-form").classList.toggle("d-none", t)
                }((await t.json()).json)
            }), r("click", ".js-org-enable-saml", function(e) {
                var t;
                a(e.currentTarget instanceof HTMLInputElement, "null.js:113"), e.currentTarget.checked ? sa(ta()) : (t = ta()) && t.classList.add("d-none")
            }), r("click", ".js-saml-submit", function(e) {
                e.preventDefault(), a(e.currentTarget instanceof HTMLButtonElement, "null.js:130"), Z(e.currentTarget), v(ea())
            }), r("click", ".js-org-saml-confirm-enforce-button", function() {
                na().value = "true", v(ea())
            }), r("submit", ".js-saml-provider-settings-form", function(e) {
                e.preventDefault(), "test_settings" === ia().name ? aa() : "save_settings" === ia().name && (oa() ? async function() {
                    (await Y({
                        content: s(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                    })).addEventListener("dialog:remove", ca)
                }(): ra() ? Y({
                    content: s(document, "#enforce-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                }) : aa())
            }), r("click", ".js-team-remove-user", function(e) {
                e.preventDefault();
                for (const t of document.querySelectorAll(".js-team-add-user-form")) t.classList.remove("d-none");
                s(document, ".js-team-add-user-name").focus(), o(e.currentTarget, "li").remove()
            }), r("click", ".js-team-add-user-button", function(e) {
                e.preventDefault(), async function(e) {
                    const t = o(e, ".js-team-add-user-form"),
                        n = s(t, ".js-team-add-user-name", HTMLInputElement),
                        i = n.value;
                    n.value = "";
                    const r = s(document, ".js-team-user-logins");
                    for (const s of r.querySelectorAll("li"))
                        if (s.getAttribute("data-login") === i) return;
                    if (!(await at("low"))) return;
                    const a = new URL(t.getAttribute("data-template-url") || "", window.location.origin),
                        c = new URLSearchParams(a.search.slice(1));
                    c.append("member", i), a.search = c.toString(), n.focus();
                    const u = await $(document, a);
                    r.appendChild(u);
                    for (const s of l(document, ".js-login-field", HTMLInputElement)) s.disabled = !1;
                    t.classList.add("d-none")
                }(e.currentTarget)
            }), r("click", ".js-rename-owners-team-next-btn", function() {
                const e = s(document, ".js-rename-owners-team-about-content");
                e.hidden = !e.hidden;
                const t = s(document, ".js-rename-owners-team-rename-form");
                t.hidden = !t.hidden
            }), r("change", ".js-add-child-team-completer", async function(e) {
                if (e.target !== e.currentTarget) return;
                const t = e.currentTarget;
                if (a(t instanceof AutocompleteElement, "null.js:17"), !t.value) return;
                const n = o(t, ".js-add-team-container");
                la(n, !0);
                const i = o(t, ".js-add-child-team-form"),
                    r = u(i, "data-change-parent-summary-path"),
                    c = await $(document, r);
                s(i, ".js-add-team-search").hidden = !0, s(i, ".js-add-team-warning").append(c), la(n, !1)
            }), r("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger", async function(e) {
                const t = o(e.target, ".js-expandable-team-breadcrumbs");
                t.classList.add("is-loading");
                try {
                    await ct(t)
                } catch (Nd) {}
                t.classList.remove("is-loading")
            }), r("click", ".js-toggle-inline-comment-form", function(e) {
                ua(o(e.currentTarget, ".js-line-comments"))
            }), r("quote-selection", ".js-line-comments", function(e) {
                ua(e.currentTarget)
            }), _("keydown", ".js-inline-comment-form-container form .js-comment-field", function(e) {
                const t = e.target;
                if (a(t instanceof HTMLTextAreaElement, "null.js:37"), !t.classList.contains("js-navigation-enable") && "Escape" === e.key && 0 === t.value.length) {
                    da(o(t, "form", HTMLFormElement)), e.preventDefault()
                }
            }), r("click", ".js-hide-inline-comment-form", function(e) {
                const t = o(e.currentTarget, "form", HTMLFormElement);
                !Ze(t) || confirm(u(e.target, "data-confirm-cancel-text")) ? da(t) : e.preventDefault()
            }), r("click", ".js-team-discussions-team-description-toggle", function() {
                s(document, ".js-team-discussions-team-description").classList.toggle("d-none"), s(document, ".js-team-discussions-team-description-form").classList.toggle("d-none")
            }), r("click", ".js-team-discussions-post-toggle", function(e) {
                const t = o(e.target, ".js-teams-write-a-post");
                t.classList.contains("active") || (t.classList.add("active"), s(t, ".js-team-discussions-post-compose").classList.remove("d-none"), s(t, ".js-post-placeholder").classList.add("d-none"), s(t, ".js-title-field").focus())
            }), r("click", ".js-hide-post-form", function(e) {
                const t = o(e.target, ".js-new-comment-form", HTMLFormElement);
                !Ze(t) || confirm(u(e.target, "data-confirm-cancel-text")) ? ma(e.target) : e.preventDefault()
            }), r("click", ".js-hide-inline-comment-form", function(e) {
                fa(e.target)
            }), j(".js-new-comment-form", async function(e, t) {
                await t.text(), ma(e), fa(e)
            }), j(".js-team-discussions-team-description-form", async function(e, t) {
                try {
                    await t.text()
                } catch (Nd) {}
                const n = s(document, ".js-team-discussions-team-description"),
                    o = s(n, ".description"),
                    i = s(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement);
                n.classList.toggle("d-none"), e.classList.toggle("d-none"), i.value.trim() ? (o.textContent = i.value, i.defaultValue = i.value) : (o.textContent = "This team has no description", i.defaultValue = "")
            }), j(".js-comment-pin", async function(e, t) {
                const n = s(e, "button[type=submit]");
                n.blur(), await t.text();
                const i = s(e, 'input[name="team_discussion[pinned]"]', HTMLInputElement),
                    r = document.querySelector("#pinned_posts_counter"),
                    a = u(n, "aria-label"),
                    c = u(n, "data-alternate-aria-label");
                n.setAttribute("data-alternate-aria-label", a), n.setAttribute("aria-label", c), n.classList.toggle("pinned");
                const l = n.classList.contains("pinned");
                if (r) {
                    ga(r, l ? 1 : -1);
                    const t = o(r, ".js-pinned-post-tab");
                    if (!l && t.classList.contains("selected")) {
                        const t = o(e, ".js-comment-delete-container");
                        (d = t).addEventListener("transitionend", function(e) {
                            "opacity" === e.propertyName && d.remove()
                        }, {
                            once: !0
                        }), d.classList.add("fade-out")
                    }
                }
                var d;
                i.value = l ? "0" : "1"
            }), j(".js-comment-delete", async function(e, t) {
                await t.text();
                const n = e.closest(".discussion-post"),
                    s = n && n.querySelector(".js-comment-pin button[type=submit]");
                if (s && s.classList.contains("pinned")) {
                    const e = document.querySelector("#pinned_posts_counter");
                    e && ga(e, -1)
                }
            }), r("quote-selection", ".js-discussion-post", function(e) {
                const t = s(e.target, ".js-inline-comment-form-container");
                t.classList.add("open"), s(t, ".js-write-tab").click(), s(t, ".js-comment-field").focus()
            }), j(".js-comment-subscribe", async function(e, t) {
                await t.text(), pa(e, ".js-comment-unsubscribe")
            }), j(".js-comment-unsubscribe", async function(e, t) {
                await t.text(), pa(e, ".js-comment-subscribe")
            }), j(".js-discussion-post-update", async function(e, t) {
                const n = e.closest(".js-comment");
                if (!n) return;
                const s = n.querySelector(".js-comment-title");
                if (!s) return;
                const o = await t.json();
                s.textContent = o.json.title
            }), async function() {
                await C;
                const e = document.querySelector(".js-show-discussion .js-mark-notification-form");
                e instanceof HTMLFormElement && v(e)
            }();
            let ha = !1;

            function ja(e) {
                s(document, ".js-selected-external-groups-container").hidden = e
            }

            function va(e) {
                const t = o(e, "form", HTMLFormElement),
                    n = t.querySelector(".js-selected-team-id"),
                    i = n instanceof HTMLInputElement && n.value,
                    r = s(t, ".js-team-privacy-closed"),
                    a = s(t, ".js-team-privacy-secret"),
                    c = s(r, "input", HTMLInputElement),
                    l = s(a, "input", HTMLInputElement);
                a.classList.toggle("text-gray", !!i), l.disabled = !!i, i && (c.checked = !0)
            }

            function ba(e, t) {
                const n = e.value;
                e.value = t.textContent, t.textContent = n
            }
            r("click", ".js-open-child-team", function(e) {
                if (ha) return;
                ha = !0;
                const t = e.currentTarget.getAttribute("data-parent-team-slug");
                if (!t) return;
                const n = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`),
                    s = o(e.currentTarget, ".js-team-row");
                if (s.classList.contains("is-open")) e.currentTarget.setAttribute("aria-expanded", "false"),
                    function(e, t) {
                        (function e(t) {
                            for (const n of t) {
                                const t = u(n, "data-team-slug"),
                                    s = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`);
                                e(s), n.classList.remove("is-open"), n.classList.add("d-none")
                            }
                        })(t), e.classList.remove("is-open"), ha = !1
                    }(s, n);
                else {
                    e.currentTarget.setAttribute("aria-expanded", "true"), async function(e, t, n) {
                        if (t.length) {
                            for (const e of t) e.classList.remove("d-none");
                            e.classList.add("is-open"), ha = !1
                        } else {
                            const t = await $(document, n);
                            e.after(t), e.classList.add("is-open"), ha = !1
                        }
                    }(s, n, u(e.currentTarget, "data-child-team-url"))
                }
            }), r("click", ".js-show-more-child-teams", async function(e) {
                if (ha) return;
                ha = !0;
                const t = e.currentTarget,
                    n = o(t, ".js-team-row"),
                    s = u(t, "data-child-team-url"),
                    i = n.parentNode,
                    r = await $(document, s);
                n.before(r), i && i.removeChild(n), ha = !1
            }), d(".js-team-ldap-group-field", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:11"), o(t, ".form-group").classList.remove("errored")
            }), r("change", ".js-import-ldap-group-completer", function(e) {
                if (e.target !== e.currentTarget) return;
                const t = e.target;
                a(t instanceof AutocompleteElement, "null.js:19");
                const n = o(t, ".js-ldap-group-adder"),
                    i = s(t, ".js-team-ldap-group-field", HTMLInputElement),
                    r = s(n, ".js-team-ldap-dn-field", HTMLInputElement);
                if (r.value = "", t.value) {
                    const e = JSON.parse(t.value),
                        n = e.dn,
                        s = e.cn;
                    i.value = s, r.value = n
                }
            }), j(".js-ldap-group-adder", async function(e, t, n) {
                n.headers.set("X-Context", "import");
                const i = o(e, ".js-ldap-import-groups-container");
                let r;
                try {
                    r = await t.html()
                } catch (Nd) {
                    return void(Nd.response && s(e, ".form-group").classList.add("errored"))
                }
                const a = document.querySelector(".js-import-form-actions");
                i.classList.remove("is-empty"), s(i, ".js-ldap-imported-groups").prepend(r.html), e.reset(), s(e, ".js-team-ldap-group-field").focus(), a && a.classList.remove("d-none")
            }), r("submit", ".js-team-remove-group", function(e) {
                o(e.currentTarget, ".js-team").classList.add("is-removing"), s(document, ".js-team-ldap-group-field").focus()
            }), j(".js-team-remove-group", async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    return void o(e, ".js-team").classList.remove("is-removing")
                }
                o(e, ".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || (s(document, ".js-ldap-import-groups-container").classList.add("is-empty"), s(document, ".js-import-form-actions").classList.add("d-none"))
            }), r("click", ".js-edit-team", function(e) {
                const t = o(e.currentTarget, ".js-team");
                t.classList.contains("is-removing") || (t.classList.add("is-editing"), s(t, ".js-team-name-field").focus())
            }), r("click", ".js-cancel-team-edit", function(e) {
                const t = o(e.currentTarget, ".js-team"),
                    n = s(t, ".js-team-form", HTMLFormElement);
                t.classList.remove("is-editing"), n.reset()
            }), j(".js-team-form", async function(e, t, n) {
                n.headers.set("X-Context", "import");
                const s = await t.html();
                o(e, ".js-team").replaceWith(s.html)
            }), r("details-menu-selected", ".js-team-external-group-menu", function(e) {
                let t = e.target;
                const n = u(t, "data-id"),
                    o = u(t, "data-name"),
                    i = u(t, "data-description"),
                    r = s(document, ".js-team-external-group-template", HTMLTemplateElement),
                    a = document.importNode(r.content, !0);
                s(a, ".js-external-group-hidden-name", HTMLInputElement).name = `team[external_groups][${n}][name]`, s(a, ".js-external-group-hidden-description", HTMLInputElement).name = `team[external_groups][${n}][description]`, s(a, ".js-external-group-hidden-name", HTMLInputElement).value = o, s(a, ".js-external-group-hidden-description", HTMLInputElement).value = i, s(a, ".js-external-group-name").textContent = o, s(a, ".js-external-group-desc").textContent = i;
                const c = s(document, ".js-selected-external-groups");
                (function(e, t) {
                    return null != t.querySelector(`input[name="team[external_groups][${e}][name]"]`)
                })(n, c) || (c.append(a), ja(!1))
            }), r("click", ".js-remove-external-group", function(e) {
                o(e.target, ".js-external-group-container").remove(), 0 === s(document, ".js-selected-external-groups").childElementCount && ja(!0)
            }), r("click", ".js-team-search-filter", function(e) {
                e.preventDefault();
                const t = u(e.currentTarget, "data-filter"),
                    n = o(e.currentTarget, "[data-filter-on]"),
                    i = u(n, "data-filter-on"),
                    r = s(document, ".js-team-search-field", HTMLInputElement),
                    a = new RegExp(`${i}:[a-z]+`),
                    c = r.value.trim().replace(a, "");
                r.value = `${c} ${t}`.replace(/\s\s/, " "), r.focus(), rt(r)
            }), i(".js-select-team-menu", function(e) {
                va(e)
            }), r("details-menu-selected", ".js-select-team-menu", function(e) {
                let t = e.target,
                    n = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:44"), s(n, ".js-selected-team-id", HTMLInputElement).value = t.value, s(n, ".js-already-selected-team-name", HTMLInputElement).value = u(t, "data-team-name"), va(n)
            }), r("click", ".js-create-team-button", function(e) {
                const t = o(e.currentTarget, "form"),
                    n = t.querySelector(".js-already-selected-team-name");
                if (!(n instanceof HTMLInputElement)) return;
                const i = t.querySelector(".js-original-team-visibility"),
                    r = t.querySelector(".js-team-privacy-secret");
                if (!r) return;
                const a = s(r, "input", HTMLInputElement),
                    c = function(e) {
                        return e.value !== e.getAttribute("data-original-team-name")
                    }(n),
                    l = function(e, t) {
                        return null != e && t.checked && !["", "SECRET"].includes(e.getAttribute("data-original-team-visibility"))
                    }(i, a);
                if (c || l) {
                    e.preventDefault();
                    const s = u(t, "data-important-changes-summary-url"),
                        o = new URL(s, window.location.origin),
                        i = new URLSearchParams(o.search.slice(1));
                    i.append("parent_team", n.value), l && i.append("visibility_changed", l.toString()), c && i.append("parent_changed", c.toString()), o.search = i.toString(), Y({
                        content: $(document, o),
                        dialogClass: "p-3"
                    })
                }
            }), r("click", ".js-confirm-edit-team", function() {
                s(document, ".js-org-team-form", HTMLFormElement).submit()
            }), r("change", ".js-team-project-completer", function(e) {
                if (e.target !== e.currentTarget) return;
                const t = e.currentTarget;
                a(t instanceof AutocompleteElement, "null.js:11");
                const n = o(e.currentTarget, "form", HTMLFormElement),
                    i = c(n, "project_id"),
                    r = s(n, ".js-team-project-complete-field", HTMLInputElement);
                if (t.value) {
                    const e = JSON.parse(t.value),
                        n = e.name,
                        s = e.id;
                    i.value = s, r.value = n
                } else i.value = ""
            }), i(".js-org-transform-poller", function(e) {
                const t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", function() {
                    window.location.href = t
                })
            }), r("click", "#load-readme", function(e) {
                const t = s(document, "#gollum-editor-body", HTMLTextAreaElement),
                    n = s(document, "#editor-body-buffer"),
                    o = s(document, "#undo-load-readme"),
                    i = n.textContent,
                    r = u(e.currentTarget, "data-readme-name");
                ba(t, n), a(e.currentTarget instanceof HTMLButtonElement, "null.js:16"), e.currentTarget.disabled = !0, e.currentTarget.textContent = `${r} loaded`, o.classList.remove("d-none"), t.addEventListener("input", function e() {
                    t.value !== i && (o.classList.add("d-none"), t.removeEventListener("input", e))
                })
            }), r("click", "#undo-load-readme", function(e) {
                ba(s(document, "#gollum-editor-body", HTMLTextAreaElement), s(document, "#editor-body-buffer"));
                const t = s(document, "#load-readme", HTMLButtonElement),
                    n = u(t, "data-readme-name");
                t.disabled = !1, t.textContent = `Load ${n}`, e.currentTarget.classList.add("d-none")
            });
            let La = !1;

            function ya(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }

            function Ea(e) {
                let t = e.blobRange,
                    n = e.anchorPrefix;
                if (0 !== document.querySelectorAll(".js-file-line").length && (function() {
                        for (const e of document.querySelectorAll(".js-file-line.highlighted")) e.classList.remove("highlighted");
                        for (const e of document.querySelectorAll(".js-file-line .highlighted")) {
                            const t = o(e, ".js-file-line");
                            e.replaceWith(...e.childNodes), t.normalize()
                        }
                    }(), t))
                    if (null === t.start.column || null === t.end.column)
                        for (const s of lt(t)) {
                            const e = ya(n, s);
                            e && e.classList.add("highlighted")
                        } else if (t.start.line === t.end.line && null != t.start.column && null != t.end.column) {
                            const e = ut(document, t, {
                                getLineElement: e => ya(n, e)
                            });
                            if (e) {
                                const t = document.createElement("span");
                                t.classList.add("highlighted"), dt(e, t)
                            }
                        }
            }

            function wa() {
                const e = mt(window.location.hash);
                Ea(e),
                    function() {
                        const e = document.querySelector(".js-file-line-actions");
                        if (!e) return;
                        const t = document.querySelectorAll(".js-file-line.highlighted"),
                            n = t[0];
                        if (n) {
                            ! function(e) {
                                const t = [];
                                for (const s of e) t.push(s.textContent);
                                const n = document.getElementById("js-copy-lines");
                                if (n instanceof ClipboardCopyElement) {
                                    n.textContent = `Copy ${ft(e.length,"line")}`, n.value = t.join("\n");
                                    const s = `Blob, copyLines, numLines:${e.length.toString()}`;
                                    n.setAttribute("data-ga-click", s)
                                }
                            }(t),
                            function(e) {
                                const t = document.getElementById("js-view-git-blame");
                                if (!t) return;
                                t.setAttribute("data-ga-click", `Blob, viewGitBlame, numLines:${e.toString()}`)
                            }(t.length);
                            const s = function(e) {
                                const t = document.querySelector(".js-permalink-shortcut");
                                if (t instanceof HTMLAnchorElement) {
                                    const n = `${t.href}${window.location.hash}`,
                                        s = document.getElementById("js-copy-permalink");
                                    if (s instanceof ClipboardCopyElement) {
                                        s.value = n;
                                        const t = `Blob, copyPermalink, numLines:${e.toString()}`;
                                        s.setAttribute("data-ga-click", t)
                                    }
                                    return n
                                }
                            }(t.length);
                            s && function(e, t) {
                                const n = document.getElementById("js-new-issue");
                                if (n instanceof HTMLAnchorElement) {
                                    if (!n.href) return;
                                    const s = new URL(n.href, window.location.origin),
                                        o = new URLSearchParams(s.search.slice(1));
                                    o.set("permalink", e), s.search = o.toString(), n.href = s.toString(), n.setAttribute("data-ga-click", `Blob, newIssue, numLines:${t.toString()}`)
                                }
                            }(s, t.length), e.style.top = `${n.offsetTop-2}px`, e.classList.remove("d-none")
                        } else e.classList.add("d-none")
                    }();
                const t = e.blobRange,
                    n = e.anchorPrefix,
                    s = t && ya(n, t.start.line);
                if (!La && s) {
                    s.scrollIntoView(), o(s, ".blob-wrapper, .js-blob-wrapper").scrollLeft = 0
                }
                La = !1
            }

            function Ta(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-original-text");
                n && (t.textContent = "Copied!", setTimeout(() => {
                    t.textContent = n
                }, 2e3))
            }

            function ka(e) {
                const t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                if (null != t && 6 === t.length) return t;
                const n = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                return null != n && 6 === n.length ? n : null
            }

            function Aa(e) {
                ht(e), zo(e)
            }
            async function Ma(e, t) {
                let n;
                if (t) {
                    const s = "R" === t.slice(-1) ? "data-right-range" : "data-left-range",
                        o = e.getAttribute(s) || "";
                    n = t + parseInt(o.split("-")[0], 10)
                } else n = e.hash.slice(1);
                const s = u(e, "data-url"),
                    i = new URL(s, window.location.origin),
                    r = new URLSearchParams(i.search.slice(1));
                r.append("anchor", n), i.search = r.toString();
                const a = await $(document, i),
                    c = o(e, ".js-expandable-line"),
                    l = function(e, t) {
                        const n = e.nextElementSibling;
                        return n instanceof HTMLElement && n.matches(t) ? n : null
                    }(c, ".file-diff-line");
                l ? te(l, () => {
                    c.replaceWith(a)
                }) : c.replaceWith(a)
            }

            function Sa(e, t, n, s) {
                const o = parseInt(n, 10),
                    i = parseInt(s, 10);
                return l(e, ".js-expand", HTMLAnchorElement).filter(e => {
                    const n = "R" === t ? "data-right-range" : "data-left-range",
                        s = (e.getAttribute(n) || "").split("-"),
                        r = parseInt(s[0], 10),
                        a = parseInt(s[1], 10);
                    return r <= o && o <= a || (o <= r && a <= i || r <= i && i <= a)
                })
            }

            function xa(e, t) {
                const n = e.nextElementSibling;
                return n && n.matches(t) ? n : null
            }

            function Ha(e) {
                const t = e.querySelector(".js-toggle-file-notes");
                t instanceof HTMLInputElement && q(t, !0)
            }

            function Ca() {
                for (const e of document.querySelectorAll(".file .js-inline-comments-container")) {
                    const t = e.querySelectorAll(".js-comments-holder > *").length > 0,
                        n = e.querySelector(".js-inline-comment-form-container"),
                        s = !!n && n.classList.contains("open");
                    t || s || e.remove()
                }
            }

            function qa(e) {
                const t = s(document, e).firstElementChild;
                a(t, "null.js:202");
                const n = t.cloneNode(!0),
                    o = n.querySelector("textarea");
                return o instanceof HTMLTextAreaElement && (o.value = ""), n
            }

            function Ia(e, t) {
                const n = ["type", "path", "position", "line", "side", "original-line"];
                for (const s of n) {
                    const n = e.elements.namedItem(s);
                    if (n instanceof HTMLInputElement) {
                        const e = t.getAttribute(`data-${s}`) || "";
                        n.value = e
                    }
                }
                const o = t.getAttribute("data-position") || "",
                    i = t.getAttribute("data-anchor") || "",
                    r = s(e, ".js-comment-field"),
                    a = r.id.replace(/^r\d+ /, "").replace("${anchor}", i).replace("${position}", o);
                for (const s of e.querySelectorAll(`[for="${r.id}"]`)) s.setAttribute("for", a);
                r.id = a
            }

            function _a(e) {
                return Math.floor(e / 2)
            }

            function $a(e, t) {
                const n = e.parentElement;
                if (!n) return;
                const s = n.children;
                let o;
                if (4 === s.length)
                    for (let i = 0, r = s.length; i < r; i++) {
                        s[i] === e && (o = _a(i))
                    }
                for (let i = 0, r = s.length; i < r; i++) {
                    const e = s[i];
                    null != o && _a(i) !== o || e.classList.toggle("is-hovered", t)
                }
            }
            ie(function() {
                if (document.querySelector(".js-file-line-container")) {
                    setTimeout(wa, 0);
                    const e = window.location.hash;
                    for (const t of document.querySelectorAll(".js-update-url-with-hash"))
                        if (t instanceof HTMLAnchorElement) t.hash = e;
                        else if (t instanceof HTMLFormElement) {
                        const n = new URL(t.action, window.location.origin);
                        n.hash = e, t.action = n.toString()
                    }
                }
            }), r("click", "#js-copy-permalink", Ta), r("click", "#js-copy-lines", Ta), r("click", ".js-line-number", function(e) {
                a(e instanceof MouseEvent, "expected click event to be MouseEvent -- null.js:207");
                const t = mt(e.currentTarget.id),
                    n = t.blobRange;
                a(n, "expected line number clicks to match range -- null.js:212");
                const s = gt(window.location.hash);
                s && e.shiftKey && (t.blobRange = {
                        start: s.start,
                        end: n.end
                    }),
                    function(e) {
                        const t = window.scrollY;
                        La = !0, e(), window.scrollTo(0, t)
                    }(() => {
                        window.location.hash = pt(t)
                    })
            }), r("submit", ".js-jump-to-line-form", function(e) {
                const t = s(e.currentTarget, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(e => parseInt(e, 10)).filter(e => e > 0).sort((e, t) => e - t);
                t.length && (window.location.hash = `L${t.join("-L")}`), e.preventDefault()
            }), d(".js-csv-filter-field", function(e) {
                a(e.target instanceof HTMLInputElement, "null.js:7");
                const t = e.target.value.toLowerCase();
                for (const n of document.querySelectorAll(".js-csv-data tbody tr")) n.hidden = !!t && !n.textContent.toLowerCase().includes(t)
            }), r("navigation:keydown", ".js-commits-list-item", function(e) {
                a(e instanceof CustomEvent, "null.js:9"), "c" === e.detail.hotkey && s(e.target, ".js-navigation-open").click()
            }), ie(function() {
                const e = function(e) {
                    if (!e) return;
                    const t = ka(e);
                    if (!t) return;
                    const n = t[1],
                        s = t[2],
                        o = t[3],
                        i = t[5];
                    return {
                        anchor: n,
                        side: s,
                        line: o,
                        lastLine: i,
                        hashFragment: n + s + o,
                        partialHashFragment: n + s
                    }
                }(window.location.hash);
                e && (K(document, e.hashFragment) && !e.lastLine || async function e(t, n) {
                    const s = t.anchor,
                        o = t.side,
                        i = t.line,
                        r = t.lastLine,
                        a = t.hashFragment,
                        c = t.partialHashFragment;
                    const l = K(document, s);
                    if (!l) return;
                    const u = l.nextElementSibling;
                    if (!u) return;
                    const d = Sa(u, o, i, r);
                    if (!d.length) {
                        const e = K(document, a);
                        if (e) return void Aa(e);
                        const t = u.querySelector(".js-diff-load-container");
                        if (!t) return;
                        try {
                            await Xo(t);
                            const e = K(document, a);
                            e instanceof HTMLElement && Aa(e)
                        } catch (Nd) {
                            Aa(u)
                        }
                        return
                    }
                    await
                    function(e, t) {
                        return Promise.all(e.map(e => Ma(e, t)))
                    }(d, c);
                    const m = K(document, a);
                    const f = Sa(u, o, i, r);
                    f.length ? e(t, n) : m ? Aa(m) : n < 1 && e(t, n + 1)
                }(e, 0))
            }), r("click", ".js-expand", function(e) {
                e.preventDefault(), a(e.currentTarget instanceof HTMLAnchorElement, "null.js:123"), Ma(e.currentTarget, null)
            }), r("click", ".js-add-single-line-comment", function(e) {
                const t = e.currentTarget;
                a(t instanceof Element, "null.js:18"), Ha(o(t, ".file"));
                const n = function(e) {
                    const t = o(e, "tr"),
                        n = xa(t, ".js-inline-comments-container");
                    if (n instanceof Element) {
                        const e = s(t, "button.js-add-line-comment"),
                            o = Array.from(n.querySelectorAll(".js-inline-comment-form")).pop();
                        return o instanceof HTMLFormElement && Ia(o, e), n
                    }
                }(t) || function(e) {
                    const t = o(e, "tr"),
                        n = qa("#js-inline-comments-single-container-template"),
                        s = n.querySelector(".js-inline-comment-form");
                    s instanceof HTMLFormElement && Ia(s, e);
                    return t.after(n), n
                }(t);
                ua(Array.from(n.querySelectorAll(".js-line-comments")).pop())
            }), r("click", ".js-add-split-line-comment", function(e) {
                const t = e.currentTarget;
                Ha(o(t, ".file"));
                const n = o(t, "tr"),
                    s = "addition" === t.getAttribute("data-type") ? "js-addition" : "js-deletion",
                    i = function(e, t, n) {
                        const s = e.querySelector(`.js-line-comments.${t}`);
                        if (s) {
                            const e = Array.from(s.querySelectorAll(".js-inline-comment-form")).pop();
                            return a(e instanceof HTMLFormElement, "null.js:234"), Ia(e, n), s
                        }
                        const o = qa("#js-inline-comments-split-form-container-template");
                        o.classList.add(t);
                        const i = o.querySelector(".js-inline-comment-form");
                        i instanceof HTMLFormElement && Ia(i, n);
                        const r = e.querySelectorAll(`.${t}`);
                        r[r.length - 1].after(o);
                        for (const a of r) a.remove();
                        return o
                    }(function(e) {
                        let t = xa(e, ".js-inline-comments-container");
                        return t || (t = qa("#js-inline-comments-split-container-template"), e.after(t), t)
                    }(n), s, t);
                ua(Array.from(i.querySelectorAll(".js-line-comments")).pop())
            }), j(".js-inline-comment-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (l) {
                    if (l.response) {
                        let t;
                        try {
                            t = l.response.json
                        } catch (u) {}
                        if (t) return void
                        function(e, t) {
                            const n = s(e, ".js-comment-form-error");
                            let o;
                            o = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors : "There was an error posting your comment.";
                            n.textContent = o, n.style.display = "block", n.classList.remove("d-none")
                        }(e, t)
                    }
                    throw l
                }
                const o = n.json,
                    i = o.inline_comment,
                    r = e.closest(".js-line-comments");
                i && (a(r, "null.js:105"), s(r, ".js-comments-holder").append(g(document, i)));
                const c = o.inline_comment_thread;
                c && (a(r, "null.js:112"), r.replaceWith(g(document, c))), da(e)
            }), document.addEventListener("session:resume", function(e) {
                a(e instanceof CustomEvent, "null.js:170"),
                    function(e) {
                        const t = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [],
                            s = n(t, 2),
                            o = s[0],
                            i = s[1];
                        if (!o) return;
                        const r = document.querySelector(`.js-inline-comment-form input[name='in_reply_to'][value='${i}']`);
                        if (!r) return;
                        const a = r.closest(".js-line-comments");
                        a && ua(a)
                    }(e.detail.targetId),
                    function(e) {
                        const t = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [],
                            s = n(t, 2),
                            o = s[0],
                            i = s[1];
                        if (!o) return;
                        const r = document.querySelector(`.js-add-line-comment[data-anchor='${o}'][data-position='${i}']`);
                        r && r.click()
                    }(e.detail.targetId)
            }), i(".js-comment", {
                remove: Ca
            }), document.addEventListener("inlinecomment:collapse", () => {
                Ca()
            }), i(".diff-table", function(e) {
                let t = null;

                function n(e) {
                    a(e instanceof MouseEvent, "null.js:43"), t && $a(t, !1), t = null
                }

                function s(e) {
                    a(e instanceof MouseEvent, "null.js:51"), t && $a(t, !1), e.target instanceof HTMLElement && (t = e.target.closest("td.blob-code")) && $a(t, !0)
                }
                return {
                    add: function() {
                        e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", n), e.addEventListener("mouseover", s)
                    },
                    remove: function() {
                        e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", n), e.removeEventListener("mouseover", s)
                    }
                }
            });
            class Ra {
                constructor(e, t, n) {
                    this.diffId = e, this.side = t, this.lineNumber = n, this.element = K(document, this.anchor())
                }
                anchor() {
                    return `${this.diffId}${this.anchorSuffix()}`
                }
                anchorSuffix() {
                    return `${this.side}${this.lineNumber}`
                }
                is(e) {
                    return this.diffId === e.diffId && this.side === e.side && this.lineNumber === e.lineNumber
                }
            }
            class Na {
                constructor(e, t, n, s, o) {
                    this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this.diffId = e, this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor=${e}]`), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new Ra(e, t, n), this.end = new Ra(e, s, o), this.parse()
                }
                anchor() {
                    const e = [];
                    return e.push(this.start.anchor()), this.start.is(this.end) || e.push(this.end.anchorSuffix()), e.join("-")
                }
                parse() {
                    if (!this.diffTable) return;
                    let e = this.diffTable.querySelectorAll(".js-linkable-line-number");
                    e = this.unify(e), e = this.filterInRange(e), this.elements = this.expandRelatedElements(e), this.isParsed = !0
                }
                unify(e) {
                    if (!this.isSplit) return Array.from(e);
                    const t = [];
                    let n = [],
                        s = [];
                    for (const o of e) o.classList.contains("blob-num-addition") ? n.push(o) : o.classList.contains("blob-num-deletion") ? s.push(o) : (t.push(...s, ...n, o), n = [], s = []);
                    return t.push(...s, ...n), t
                }
                filterInRange(e) {
                    if (!this.start.element || !this.end.element) return [];
                    let t = e.indexOf(this.start.element),
                        n = e.indexOf(this.end.element);
                    if (t > n) {
                        var s = [n, t];
                        t = s[0], n = s[1];
                        const e = [this.end, this.start],
                            o = e[0],
                            i = e[1];
                        this.start = o, this.end = i
                    }
                    return e.slice(t, n + 1)
                }
                expandRelatedElements(e) {
                    const t = this.isSplit;
                    return e.reduce(function(e, n) {
                        const s = n.parentElement,
                            o = n.classList.contains("blob-num-deletion") || n.classList.contains("blob-num-addition");
                        if (!s) return e;
                        if (t && o) return Array.from(s.children).indexOf(n) < 2 ? e.add(s.children[0]).add(s.children[1]) : e.add(s.children[2]).add(s.children[3]);
                        for (const t of Array.from(s.children)) e.add(t);
                        return e
                    }, new Set)
                }
            }
            let Da = null;

            function Ba() {
                return document.body && document.body.classList.contains("diff-range-highlighting")
            }

            function Pa() {
                if (Da) {
                    for (const e of Da.elements) e.classList.remove("selected-line");
                    Da = null
                }
                const e = ka(window.location.hash);
                if (!e) return;
                const t = e[1],
                    n = e[2],
                    s = e[3],
                    o = Ba() && e[4] || n,
                    i = Ba() && e[5] || s;
                Da = new Na(t, n, +s, o, +i);
                for (const r of Da.elements) r.classList.add("selected-line")
            }

            function Fa() {
                const e = document.body;
                a(e, "null.js:9");
                const t = document.querySelector("meta[name=diff-view]"),
                    n = t && t instanceof HTMLMetaElement ? t.content : "",
                    s = document.querySelector(".js-file-diff-split"),
                    o = document.querySelector(".CommunityTemplate-header"),
                    i = !!("split" === n && s || document.querySelector(".wants-full-width-container"));
                e.classList.toggle("full-width", i);
                const r = !!o;
                e.classList.toggle("full-width-p0", r)
            }

            function Oa(e) {
                const t = e.parentElement;
                a(t, "null.js:19");
                const n = t.querySelectorAll("td.js-line-comments").length,
                    s = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
                t.classList.toggle("is-collapsed", s > 0 && n === s)
            }

            function Ua(e) {
                const t = l(document, ".js-hook-event-checkbox", HTMLInputElement);
                for (const n of t) n.checked = n.matches(e)
            }
            r("click", ".js-linkable-line-number", function(e) {
                let t = e.currentTarget.id;
                if (e instanceof MouseEvent && e.shiftKey && Ba()) {
                    const e = ka(t);
                    if (!e) return;
                    const n = e[1],
                        s = e[2],
                        o = e[3];
                    if (Da && Da.diffId === n) {
                        t = new Na(n, Da.start.side, Da.start.lineNumber, s, +o).anchor()
                    }
                }
                window.history.replaceState(null, null, `#${t}`), Pa(), e.preventDefault()
            }), ie(Pa), i(".blob-expanded", Pa), i(".js-diff-progressive-loader", function(e) {
                e.addEventListener("load", Pa)
            }), i(".js-diff-entry-loader", function(e) {
                e.addEventListener("load", Pa)
            }), r("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
                e.preventDefault();
                const t = e.target.closest(".js-rich-diff");
                a(t, "null.js:9"), t.classList.remove("collapsed")
            }), r("click", ".js-show-rich-diff", function(e) {
                const t = e.currentTarget.closest(".js-warn-no-visible-changes");
                if (!t) return;
                t.classList.add("d-none");
                const n = t.parentElement;
                a(n, "null.js:21");
                const s = n.querySelector(".js-no-rich-changes");
                s && s.classList.remove("d-none")
            }), i("meta[name=diff-view]", {
                add: Fa,
                remove: Fa
            }), i(".js-file-diff-split", {
                add: Fa,
                remove: Fa
            }), i(".js-compare-tab.selected", {
                add: Fa,
                remove: Fa
            }), i(".wants-full-width-container", {
                add: Fa,
                remove: Fa
            }), i(".CommunityTemplate-header", {
                add: Fa,
                remove: Fa
            }), r("change", ".js-toggle-file-notes", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:15"), o(t, ".file").classList.toggle("show-inline-notes", t.checked)
            }), r("click", ".js-toggle-all-file-notes", function(e) {
                const t = l(document, ".js-toggle-file-notes", HTMLInputElement),
                    n = t.some(e => e.checked);
                for (const s of t) q(s, !n);
                e.preventDefault()
            }), i(".js-inline-comments-container", function(e) {
                let t;
                const n = e.closest(".file");
                if (n) {
                    return {
                        add: t = function() {
                            const e = null != n.querySelector(".js-inline-comments-container");
                            n.classList.toggle("has-inline-notes", e)
                        },
                        remove: t
                    }
                }
            }), i("td.js-line-comments.is-collapsed", {
                add: Oa,
                remove: Oa
            }), i(".js-hook-url-field", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        const t = e.form;
                        let n;
                        a(t, "null.js:19");
                        try {
                            n = new URL(e.value)
                        } catch (Nd) {}
                        const o = t.querySelector(".js-invalid-url-notice");
                        o && (o.hidden = !!("" === e.value || n && /^https?:/.test(n.protocol)));
                        const i = t.querySelector(".js-insecure-url-notice");
                        i && n && e.value && (i.hidden = /^https:$/.test(n.protocol)), s(t, ".js-ssl-hook-fields").hidden = !(n && "https:" === n.protocol)
                    }
                    k(e, t), t()
                }
            }), r("change", ".js-hook-event-choice", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:54");
                const n = t.checked && "custom" === t.value,
                    o = t.closest(".js-hook-events-field");
                if (o && o.classList.toggle("is-custom", n), t.checked)
                    if (n) {
                        s(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1
                    } else "push" === t.value ? Ua('[value="push"]') : "all" === t.value && Ua(".js-hook-wildcard-event")
            }), r("details:toggled", ".js-hook-secret", function(e) {
                const t = e.currentTarget,
                    n = s(t, "input[type=password]", HTMLInputElement);
                t.classList.contains("open") && n.focus()
            }), r("click", ".js-hook-deliveries-pagination-button", async function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:86"), t.disabled = !0;
                const n = t.parentElement;
                a(n, "null.js:89");
                const s = u(t, "data-url");
                n.before(await $(document, s)), n.remove()
            }), j(".js-redeliver-hook-form", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (c) {
                    return a(e.parentElement, "null.js:103"), void e.classList.add("failed")
                }
                const o = e.getAttribute("data-delivery-guid") || "",
                    i = s(document, `.js-hook-delivery-container[data-delivery-guid="${o}"]`),
                    r = i.parentElement;
                a(r, "null.js:111"), i.replaceWith(n.html), s(r, "poll-include-fragment").addEventListener("load", function() {
                    const e = s(r, ".js-hook-delivery-container"),
                        t = s(r, ".js-item-status"),
                        n = e.getAttribute("data-status-class");
                    t.classList.remove("success", "pending", "failure"), n && t.classList.add(n);
                    const o = r.querySelector(".js-item-status-tooltip"),
                        i = e.getAttribute("data-status-message");
                    o && i && o.setAttribute("aria-label", i)
                })
            }), j(".js-test-hook-form", async function(e, t) {
                const n = s(document, ".js-test-hook-message");
                n.classList.remove("error", "success");
                try {
                    await t.text()
                } catch (o) {
                    n.classList.add("error");
                    const e = s(n, ".js-test-hook-message-errors");
                    if (null != o.response) {
                        const t = await o.response.json();
                        e.textContent = t.errors
                    } else e.textContent = e.getAttribute("data-network-error-message") || "";
                    return
                }
                n.classList.add("success")
            }), r("click", ".js-hook-enforcement-select .js-navigation-item", function(e) {
                const t = e.currentTarget,
                    i = s(e.currentTarget, ".js-value"),
                    r = o(t, "form", HTMLFormElement),
                    a = s(r, ".js-enforcement-value", HTMLInputElement),
                    c = i.textContent.split("_"),
                    l = n(c, 2),
                    u = l[0],
                    d = l[1];
                a.value = u;
                const m = r.querySelector(".js-final-value");
                m instanceof HTMLInputElement && (m.value = d ? "false" : "true"), v(r)
            }), j(".js-toggler-container .js-set-approval-state", async function(e, t) {
                const n = o(e, ".js-toggler-container");
                n.classList.add("loading");
                const s = await t.json();
                "approved" === s.json.approval_state ? n.classList.add("on") : "denied" === s.json.approval_state && (n.classList.add("revoked"), n.classList.remove("on")), n.classList.remove("loading")
            }), j(".js-request-access-approval-form", async function(e, t) {
                await t.text();
                const n = u(e, "data-container-id");
                s(document, `#${n}`).classList.add("on")
            }), m(".js-email-notice-trigger", function(e) {
                const t = l(document, ".js-email-notice");
                for (const n of t) n.classList.add("notice-highlight");
                e.addEventListener("blur", function() {
                    for (const e of t) e.classList.remove("notice-highlight")
                })
            }), i(".js-plan-choice:checked", {
                add(e) {
                    const t = e.closest(".plan-row");
                    t && t.classList.add("selected")
                },
                remove(e) {
                    const t = e.closest(".plan-row");
                    t && t.classList.remove("selected")
                }
            }), i(".js-setup-organization:checked", {
                add() {
                    const e = s(document, ".js-choose-plan-submit");
                    e.getAttribute("data-default-text") || e.setAttribute("data-default-text", e.textContent), e.textContent = e.getAttribute("data-org-text") || ""
                },
                remove() {
                    const e = s(document, ".js-choose-plan-submit");
                    e.textContent = e.getAttribute("data-default-text") || ""
                }
            });
            const za = new WeakMap;

            function Va(e) {
                let t = e.target;
                a(t instanceof HTMLElement, "null.js:65");
                const n = o(t, "form");
                if (t.closest("input[type=text]") && !za.get(n)) {
                    const e = s(n, ".js-signup-source", HTMLInputElement);
                    ye({
                        category: "Signup",
                        action: "Attempt",
                        label: e.value
                    }), za.set(n, !0)
                }
            }
            let Wa;
            i(".js-signup-form", {
                subscribe: e => H(e, "input", Va)
            }), i(".js-octocaptcha-parent", function(e) {
                const t = s(e, ".js-octocaptcha-spinner"),
                    n = s(e, ".js-octocaptcha-success"),
                    o = s(e, ".js-octocaptcha-token", HTMLInputElement),
                    i = s(e, ".js-octocaptcha-form-submit", HTMLButtonElement),
                    r = s(e, ".js-octocaptcha-frame-container"),
                    a = s(e, ".js-octocaptcha-frame"),
                    c = o.getAttribute("data-octocaptcha-url");
                let l = "true" === e.getAttribute("data-redirect-after-solved"),
                    u = !1;
                const d = () => {
                        u || (u = !0, t.classList.add("d-none"), n.classList.remove("d-none"), i.disabled = !1, l && i.click())
                    },
                    m = () => {
                        if (u) return;
                        const t = document.createElement("input");
                        t.type = "hidden", t.id = "error_loading_captcha", t.name = "error_loading_captcha", t.value = "1", l = !1, e.appendChild(t), d()
                    };
                setTimeout(m, 2e4), a.addEventListener("error", m), window.addEventListener("message", e => {
                    if (e.origin !== c) return;
                    const n = e.data && e.data.event;
                    "captcha-loaded" === n ? u || (u = !0, t.classList.add("d-none"), r.classList.remove("v-hidden", "zero-height")) : "captcha-complete" === n ? (o.value = e.data.sessionToken, i.disabled = !1, l && i.click()) : "captcha-suppressed" === n && d()
                })
            }), i(".js-other-field:checked", {
                add(e) {
                    const t = o(e, ".js-answer");
                    s(t, ".js-specify-field", HTMLInputElement).hidden = !1
                },
                remove(e) {
                    const t = o(e, ".js-answer");
                    s(t, ".js-specify-field", HTMLInputElement).hidden = !0
                }
            }), i(".js-allow-multiple:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = parseInt(e.getAttribute("data-max-choices")),
                        n = o(e, ".question"),
                        s = l(n, ".js-allow-multiple", HTMLInputElement);
                    if (s.filter(e => !0 === e.checked).length >= t)
                        for (const o of s) !1 === o.checked && (o.disabled = !0)
                },
                remove(e) {
                    const t = o(e, ".question");
                    for (const n of l(t, ".js-allow-multiple", HTMLInputElement)) n.disabled = !1
                }
            });
            let Ka = null;

            function Ja(e) {
                const t = e.item,
                    n = e.oldIndex,
                    s = t.parentNode;
                a(s instanceof HTMLElement, "null.js:17"), Ka = s.children[n + 1]
            }
            async function Ga(e) {
                const t = e.oldIndex,
                    n = e.newIndex,
                    i = e.item;
                if (t === n) return;
                const r = o(i, ".js-pinned-issues-reorder-form", HTMLFormElement),
                    c = o(r, ".js-pinned-issues-reorder-container"),
                    l = s(c, ".js-pinned-issues-spinner");
                l.style.display = "inline-block", Wa.option("disabled", !0);
                try {
                    await p(r.action, {
                        method: r.method,
                        body: new FormData(r)
                    }), l.style.display = "none", Wa.option("disabled", !1)
                } catch (Nd) {
                    const t = i.parentNode;
                    a(t, "null.js:44"), Ka ? t.insertBefore(i, Ka) : t.appendChild(i)
                }
            }
            i(".js-pinned-issues-reorder-list", function(e) {
                Wa = ot.create(e, {
                    animation: 150,
                    item: ".js-pinned-issue-list-item",
                    handle: ".js-pinned-issue-reorder",
                    onUpdate: Ga,
                    onStart: Ja,
                    chosenClass: "is-dragging"
                })
            }), r("submit", ".js-pinned-issues-reorder-form", function(e) {
                e.preventDefault()
            }), Or(".js-pinned-issue-list-item", Ga), i("body.js-print-popup", () => {
                window.print(), setTimeout(window.close, 1e3)
            }), r("click", ".js-new-user-contrib-example", async function(e) {
                const t = s(document, ".js-calendar-graph");
                if (t.classList.contains("sample-graph")) return;
                t.classList.add("sample-graph");
                const n = u(e.currentTarget, "data-url");
                let o;
                try {
                    o = await p(n)
                } catch (Nd) {
                    return void t.classList.remove("sample-graph")
                }
                const i = document.createElement("div");
                i.innerHTML = o;
                const r = t.querySelector(".js-calendar-graph-svg");
                a(r, "null.js:32"), r.replaceWith(i.children[0])
            });
            let Xa = null;

            function Qa() {
                const e = s(document, ".js-calendar-graph"),
                    t = u(e, "data-url");
                return new URL(t, window.location.origin)
            }

            function Ya(e) {
                const t = e.target;
                a(t instanceof Element, "null.js:56"), t.matches("rect.day") && (Za(), function(e) {
                    const t = document.body;
                    a(t, "null.js:89");
                    const n = u(e, "data-date"),
                        s = function(e, t) {
                            const n = `${ec[t.getUTCMonth()].slice(0,3)} ${t.getUTCDate()}, ${t.getUTCFullYear()}`,
                                s = 0 === e ? "No" : Me(e),
                                o = document.createElement("div");
                            o.classList.add("svg-tip", "svg-tip-one-line"), o.style.pointerEvents = "none";
                            const i = document.createElement("strong");
                            return i.textContent = `${s} ${ft(e,"contribution")}`, o.append(i, ` on ${n}`), o
                        }(parseInt(e.getAttribute("data-count")), lc(n));
                    t.appendChild(s);
                    const o = e.getBoundingClientRect(),
                        i = o.left + window.pageXOffset - s.offsetWidth / 2 + o.width / 2,
                        r = o.bottom + window.pageYOffset - s.offsetHeight - 2 * o.height;
                    s.style.top = `${r}px`, s.style.left = `${i}px`
                }(t))
            }

            function Za() {
                const e = document.querySelector(".svg-tip");
                e && e.remove()
            }
            i(".js-calendar-graph-svg", function(e) {
                const t = o(e, ".js-calendar-graph");
                t.addEventListener("mouseover", Ya), t.addEventListener("mouseout", Za);
                let n = t.getAttribute("data-from");
                n && (n = Xa = lc(n));
                let s = t.getAttribute("data-to");
                s && (s = lc(s))
            }), r("click", ".js-calendar-graph rect.day", function(e) {
                a(e instanceof MouseEvent, "null.js:39");
                const t = e.currentTarget;
                a(t instanceof Element, "null.js:41");
                const s = o(t, ".js-calendar-graph"),
                    i = u(s, "data-org"),
                    r = u(t, "data-date");
                t.classList.contains("active") ? mc(dc()) : function(e, t, s) {
                    let o, i;
                    if (Xa && t) {
                        const t = Xa.getTime(),
                            s = 26784e5,
                            c = t - s,
                            l = t + s;
                        var r = e > Xa ? [Xa, e] : [e, Xa],
                            a = n(r, 2);
                        o = a[0], i = a[1], o = new Date(Math.max(o.getTime(), c)), i = new Date(Math.min(i.getTime(), l)), Xa = null
                    } else Xa = i = o = e;
                    oc(o, i);
                    const c = Qa(),
                        l = nc(c.search.slice(1), {
                            from: o,
                            to: i,
                            org: s
                        });
                    l.append("tab", "overview"), c.search = l.toString(), tc(c.toString())
                }(lc(r), e.shiftKey, i)
            });
            const ec = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            async function tc(e) {
                const t = document.getElementById("js-contribution-activity");
                if (!t) return;
                t.classList.add("loading");
                const n = await $(document, e);
                t.classList.remove("loading"), t.innerHTML = "", t.append(n)
            }

            function nc(e, t) {
                const n = new URLSearchParams(e);
                n.delete("from"), n.delete("to"), n.delete("org");
                let s = t.fromStr;
                t.from && (s = cc(t.from)), s && n.append("from", s);
                let o = t.toStr;
                t.to && (o = cc(t.to)), o && n.append("to", o);
                const i = t.org;
                return i && n.append("org", i), n
            }
            async function sc(e, t, n) {
                const o = s(document, ".js-calendar-graph"),
                    i = u(o, "data-graph-url"),
                    r = new URL(i, window.location.origin),
                    a = nc(r.search.slice(1), {
                        from: e,
                        to: t,
                        org: n
                    });
                r.search = a.toString();
                const c = await $(document, r.toString());
                s(document, ".js-yearly-contributions").replaceWith(c)
            }

            function oc(e, t) {
                const n = s(document, ".js-calendar-graph"),
                    o = n.querySelectorAll("rect.day");
                for (const s of o) s.classList.remove("active");
                if (n.classList.remove("days-selected"), e || t) {
                    n.classList.add("days-selected");
                    for (const e of o) i(e) && e.classList.add("active")
                }

                function i(n) {
                    const s = lc(n.getAttribute("data-date") || "").getTime();
                    return e && t ? e.getTime() <= s && s <= t.getTime() : e ? s === e.getTime() : void 0
                }
            }

            function ic() {
                const e = s(document, ".js-calendar-graph").querySelectorAll("rect.active"),
                    t = e[0],
                    n = e[e.length - 1],
                    o = t && u(t, "data-date"),
                    i = n && u(n, "data-date");
                if (o && i) return {
                    first: o,
                    last: i
                }
            }

            function rc() {
                const e = ic() || function() {
                    const e = new URLSearchParams(window.location.search.slice(1)),
                        t = e.get("from"),
                        n = e.get("to");
                    if (t && n) return {
                        first: t,
                        last: n
                    }
                }() || function() {
                    const e = new URL(dc(), window.location.origin),
                        t = new URLSearchParams(e.search.slice(1)),
                        n = t.get("from"),
                        s = t.get("to");
                    if (n && s) return {
                        first: n,
                        last: s
                    }
                }();
                return a(e, "null.js:257"), e
            }

            function ac(e) {
                return `0${e}`.slice(-2)
            }

            function cc(e) {
                return `${e.getUTCFullYear()}-${ac(e.getUTCMonth()+1)}-${ac(e.getUTCDate())}`
            }

            function lc(e) {
                const t = e.split("-").map(e => parseInt(e, 10)),
                    s = n(t, 3),
                    o = s[0],
                    i = s[1],
                    r = s[2];
                return new Date(Date.UTC(o, i - 1, r))
            }
            async function uc(e) {
                const t = ic(),
                    n = function() {
                        const e = s(document, ".js-calendar-graph");
                        return {
                            first: u(e, "data-from"),
                            last: u(e, "data-to")
                        }
                    }(),
                    o = new Date(n.first),
                    i = new Date(n.last);
                if (await sc(o, i, e), t) {
                    oc(new Date(t.first), new Date(t.last))
                }
            }

            function dc() {
                return s(document, ".js-profile-timeline-year-list .js-year-link.selected", HTMLAnchorElement).href || ""
            }

            function mc(e) {
                const t = new URL(e, window.location.origin).search,
                    n = new URLSearchParams(t.slice(1)),
                    s = n.get("org"),
                    o = n.get("from"),
                    i = n.get("to");
                a(o && i, "null.js:413");
                const r = new Date(o),
                    c = new Date(i);
                sc(r, c, s);
                const l = new Qa,
                    u = nc(l.search.slice(1), {
                        from: r,
                        to: c,
                        org: s
                    });
                u.append("tab", "overview"), l.search = u.toString(), tc(l.toString())
            }

            function fc(e) {
                const t = e.closest(".js-details-container");
                t && t.classList.add("open");
                const n = e.getBoundingClientRect(),
                    s = window.scrollY + n.top - 62 - 10;
                window.scrollTo(0, s)
            }

            function gc(e) {
                s(document, ".js-profile-editable-area").hidden = e, s(document, ".js-profile-editable-form").hidden = !e, s(document, ".js-profile-editable-error").textContent = ""
            }
            r("click", ".js-org-filter-link", function(e) {
                    e.stopPropagation(), e.preventDefault();
                    const t = e.currentTarget;
                    a(t instanceof HTMLAnchorElement, "null.js:341");
                    const n = o(t, ".js-org-filter-links-container").querySelector(".js-org-filter-link.selected"),
                        s = new URL(t.href, window.location.origin),
                        i = new URLSearchParams(s.search.slice(1)),
                        r = i.get("org"),
                        c = rc(),
                        l = new Date(c.first),
                        u = new Date(c.last);
                    n && n.classList.remove("selected"), t !== n && t.classList.add("selected"), uc(r);
                    const d = Qa(),
                        m = {
                            org: r,
                            from: null,
                            to: null
                        };
                    i.has("from") && (m.from = l), i.has("to") && (m.to = u);
                    const f = nc(d.search.slice(1), m);
                    d.search = f.toString(), tc(d.toString()), async function(e, t) {
                        const n = document.getElementById("year-list-container");
                        if (!n) return;
                        t.append("year_list", "1"), e.search = t.toString();
                        const s = await $(document, e.toString());
                        n.innerHTML = "", n.append(s)
                    }(d, f), jt(null, "", d.toString())
                }), r("click", ".js-year-link", function(e) {
                    e.stopPropagation(), e.preventDefault();
                    const t = e.currentTarget;
                    a(t instanceof HTMLAnchorElement, "null.js:387");
                    const n = o(t, "ul");
                    s(n, ".js-year-link.selected").classList.remove("selected"), t.classList.add("selected"), mc(t.href), jt(null, "", t.href)
                }),
                function() {
                    const e = window.location.hash;
                    if (!e || e.indexOf("#event-") < 0) return;
                    const t = e.slice(1, e.length),
                        n = document.getElementById(t);
                    n && fc(n)
                }(), window.addEventListener("hashchange", function(e) {
                    const t = e.newURL || window.location.href,
                        n = t.slice(t.indexOf("#") + 1, t.length),
                        s = document.getElementById(n);
                    s && (e.stopPropagation(), fc(s))
                }), j(".js-show-more-timeline-form", async function(e, t) {
                    await t.text();
                    const n = document.querySelector(".js-show-more-timeline-form");
                    if (n) {
                        const t = u(n, "data-year"),
                            o = s(document, ".js-year-link.selected"),
                            i = s(document, `#year-link-${t}`);
                        if (o.classList.remove("selected"), i.classList.add("selected"), t !== e.getAttribute("data-year")) {
                            const e = u(n, "data-from"),
                                t = new Date(e),
                                s = u(n, "data-to");
                            sc(t, new Date(s), n.getAttribute("data-org"))
                        }
                    }
                    document.title = e.getAttribute("data-title") || "", jt(null, "", e.getAttribute("data-url") || "")
                });
            let pc = null;
            r("click", ".js-profile-editable-edit-button", function() {
                ! function() {
                    const e = s(document, ".js-user-profile-bio").textContent;
                    "string" == typeof e && (s(document, ".js-user-profile-bio-edit", HTMLTextAreaElement).value = e)
                }(), gc(!0)
            }), r("click", ".js-profile-editable-cancel", function() {
                gc(!1)
            }), r("change", ".js-profile-editable-pro-badge", function(e) {
                a(e.target instanceof HTMLInputElement, "null.js:39"), pc = {
                    preference: e.target.checked
                }
            }), j(".js-profile-editable-form", async (e, t) => {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    if (422 === o.response.status) {
                        s(document, ".js-profile-editable-error").textContent = o.response.json.message
                    }
                    return
                }
                if (function(e) {
                        s(document, ".js-profile-editable-area").replaceWith(e)
                    }(n.html), gc(!1), pc) {
                    s(document, ".js-pro-badge").classList.toggle("d-none", !pc.preference)
                }
            });
            const hc = new WeakMap,
                jc = 100;
            async function vc(e, t) {
                if (t) {
                    if ((hc.get(e) || 0) > jc) return
                }
                const n = e.querySelector(".js-more-pinnable-items-button");
                if (!n) return;
                if (a(n instanceof HTMLButtonElement, "null.js:45"), n.textContent = u(n, "data-disable-with"), n.disabled = !0, t) {
                    const t = hc.get(e) || 0;
                    hc.set(e, t + 1)
                }
                const s = u(n, "data-url"),
                    o = await $(document, s);
                n.replaceWith(o),
                    function(e) {
                        const t = e.querySelector(".js-pinned-items-filter");
                        t && L(t, "filterable:change")
                    }(e)
            }
            async function bc(e) {
                let t = e.currentTarget;
                const n = s(t, ".js-pinned-items-selection-list");
                await M();
                const i = l(n, "input[type=checkbox]", HTMLInputElement),
                    r = i.filter(e => e.checked).length,
                    a = parseInt(n.getAttribute("data-max-repo-count"), 10);
                for (const s of i) s.disabled = r === a && !s.checked;
                ! function(e, t, n) {
                    const o = s(e, ".js-remaining-pinned-items-count"),
                        i = u(o, "data-remaining-label"),
                        r = n - t;
                    o.textContent = `${r} ${i}`, o.classList.toggle("text-red", r < 1)
                }(o(n, ".js-pinned-items-selection-form", HTMLFormElement), r, a)
            }

            function Lc(e) {
                const t = s(e, ".js-pinnable-item");
                return {
                    name: t.textContent.toLowerCase().trim(),
                    isPinned: s(e, 'input[type="checkbox"]', HTMLInputElement).checked,
                    element: e,
                    isRepository: t.classList.contains("js-pinnable-repo"),
                    isGist: t.classList.contains("js-pinnable-gist")
                }
            }

            function yc(e, t, n) {
                if (e.isPinned) return !0;
                const s = !t || e.name.indexOf(t) > -1,
                    o = e.isRepository && n.includeRepositories,
                    i = e.isGist && n.includeGists;
                return s && (o || i)
            }

            function Ec(e) {
                const t = e.target;
                a(t instanceof Element, "null.js:189");
                const n = o(t, ".js-pinned-items-selection-form");
                let i = null;
                t.classList.contains("js-pinned-items-search") ? a((i = t) instanceof HTMLInputElement, "null.js:195") : i = s(n, ".js-pinned-items-search", HTMLInputElement);
                const r = i.value.toLowerCase().trim(),
                    c = function(e) {
                        if (! function(e) {
                                return !!e.querySelector(".js-pinned-items-type-filter")
                            }(e)) return {
                            includeRepositories: !0,
                            includeGists: !0
                        };
                        const t = l(e, ".js-pinned-items-type-filter:checked", HTMLInputElement),
                            n = t.map(e => e.value),
                            s = n.indexOf("repository") > -1,
                            o = n.indexOf("gist") > -1;
                        for (const i of t) i.disabled = s !== o;
                        return {
                            includeRepositories: s,
                            includeGists: o
                        }
                    }(n);
                let u = !1;
                const d = Array.from(n.querySelectorAll(".js-pinned-items-selection"));
                for (const s of d) {
                    const e = Lc(s),
                        t = yc(e, r, c);
                    t && (u = !0), e.element.hidden = !t
                }
                s(n, ".js-no-repos-message").hidden = u
            }
            let wc;
            i(".js-more-pinnable-items-button", function(e) {
                const t = o(e, ".js-pinned-items-selection-form");
                (function(e) {
                    const t = e.querySelector(".js-pinned-items-filter");
                    return !!t && (document.activeElement === t || (a(t instanceof HTMLInputElement, "null.js:79"), t.defaultValue.trim().length > 0))
                })(t) && vc(t, !0)
            }), r("click", ".js-more-pinnable-items-button", function(e) {
                const t = e.target;
                vc(o(t, ".js-pinned-items-selection-form"), !1)
            }), _("keydown", ".js-pinned-items-search", function(e) {
                a(e instanceof KeyboardEvent, "null.js:220"), "Enter" === U(e) && e.preventDefault()
            }), m(".js-pinned-items-search", function(e) {
                vc(o(e, ".js-pinned-items-selection-form"), !0)
            }), d(".js-pinned-items-search", Ec), r("change", ".js-pinned-items-filter", Ec), r("search", ".js-pinned-items-search", Ec), r("change", ".js-pinned-items-selection-form", bc), r("reset", ".js-pinned-items-selection-form", bc);
            let Tc = null;

            function kc(e) {
                const t = e.item,
                    n = e.oldIndex,
                    s = t.parentNode;
                a(s instanceof HTMLElement, "null.js:17"), Tc = s.children[n + 1]
            }
            async function Ac(e) {
                const t = e.oldIndex,
                    n = e.newIndex,
                    i = e.item;
                if (t === n) return;
                const r = o(i, ".js-pinned-items-reorder-form", HTMLFormElement),
                    c = o(r, ".js-pinned-items-reorder-container"),
                    l = s(c, ".js-pinned-items-spinner"),
                    u = s(c, ".js-pinned-items-reorder-message");
                u.textContent = "", l.style.display = "inline-block", wc.option("disabled", !0);
                try {
                    await p(r.action, {
                        method: r.method,
                        body: new FormData(r)
                    }), u.textContent = u.getAttribute("data-success-text") || "", l.style.display = "none", wc.option("disabled", !1)
                } catch (Nd) {
                    u.textContent = u.getAttribute("data-error-text") || "";
                    const t = i.parentNode;
                    a(t, "null.js:49"), Tc ? t.insertBefore(i, Tc) : t.appendChild(i)
                }
            }
            i(".js-pinned-items-reorder-list", function(e) {
                wc = ot.create(e, {
                    animation: 150,
                    item: ".js-pinned-item-list-item",
                    handle: ".js-pinned-item-reorder",
                    onUpdate: Ac,
                    onStart: kc,
                    chosenClass: "is-dragging"
                })
            }), r("submit", ".js-pinned-items-reorder-form", function(e) {
                e.preventDefault()
            }), Or(".js-pinned-item-list-item", Ac), i(".js-user-profile-sticky-fields.is-stuck", function() {
                const e = s(document, ".js-user-profile-sticky-bar");
                return {
                    add() {
                        e.classList.add("is-stuck")
                    },
                    remove() {
                        e.classList.remove("is-stuck")
                    }
                }
            }), i(".js-user-profile-follow-button.is-stuck", function() {
                const e = s(document, ".js-user-profile-sticky-bar");
                return {
                    add() {
                        e.classList.add("is-follow-stuck")
                    },
                    remove() {
                        e.classList.remove("is-follow-stuck")
                    }
                }
            }), i(".js-user-profile-following-toggle .js-toggler-container.on", function() {
                return {
                    add() {
                        const e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                        e && e.classList.add("on")
                    },
                    remove() {
                        const e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                        e && e.classList.remove("on")
                    }
                }
            }), i(".js-user-profile-following-mini-toggle .js-toggler-container.on", function() {
                const e = s(document, ".js-user-profile-following-toggle .js-toggler-container");
                return {
                    add() {
                        e.classList.add("on")
                    },
                    remove() {
                        e.classList.remove("on")
                    }
                }
            });
            const Mc = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
                Sc = document.querySelector("meta[name=expected-hostname]");
            if (Mc instanceof HTMLMetaElement && Sc instanceof HTMLMetaElement && vt(document)) {
                const e = {
                        url: window.location.href,
                        expectedHostname: Sc.content,
                        documentHostname: document.location.hostname,
                        proxyPayload: Mc.content
                    },
                    t = new Error,
                    n = {};
                n.$__ = btoa(JSON.stringify(e)), Ue(t, n)
            }

            function xc(e, t, n) {
                const s = Array.from(e.querySelectorAll('[role="menuitem"]'));
                let o = s.indexOf(t),
                    i = s.indexOf(n);
                if (-1 === o) throw new Error("Couldn't find startIndex in container");
                if (-1 === i) throw new Error("Couldn't find endItem in container");
                if (Hc(e), s[i].classList.add("is-last-in-range"), o > i) {
                    var r = [i, o];
                    o = r[0], i = r[1]
                }
                for (const a of s.slice(o, i + 1)) a.classList.add("is-range-selected")
            }

            function Hc(e) {
                for (const t of e.querySelectorAll('[role="menuitem"]')) t.classList.remove("is-range-selected", "is-last-in-range")
            }
            let Cc;

            function qc(e) {
                const t = document.querySelector("head .js-site-favicon");
                t instanceof HTMLLinkElement && (null == Cc && (Cc = t.href), t.href = e)
            }
            r("details-menu-select", ".js-pull-base-branch-item", function(e) {
                e.preventDefault();
                const t = s(document, ".js-change-base-template", HTMLTemplateElement).content.cloneNode(!0);
                s(t, ".js-pull-change-base-branch-field", HTMLInputElement).value = e.currentTarget.getAttribute("data-branch") || "", Y({
                    content: t
                })
            }), i(".js-diffbar-commits-menu .js-diffbar-commits-list", {
                subscribe: function(e) {
                    let t = !1;

                    function n(e) {
                        t = e.shiftKey, e.shiftKey && e.preventDefault()
                    }

                    function i(e) {
                        if (!t) return;
                        e.preventDefault();
                        const n = e.target,
                            i = e.currentTarget;
                        if (a(n instanceof Element, "null.js:84"), a(i instanceof Element, "null.js:85"), n.classList.contains("is-range-selected")) {
                            e.stopPropagation();
                            const t = i.querySelectorAll(".is-range-selected"),
                                n = t[0],
                                o = t[t.length - 1],
                                r = u(i, "data-range-url"),
                                a = n.getAttribute("data-parent-commit"),
                                c = u(o, "data-commit"),
                                l = a && c ? `${a}..${c}` : c,
                                d = r.replace("$range", l);
                            D({
                                url: d,
                                container: s(document, "#js-repo-pjax-container")
                            })
                        } else e.stopImmediatePropagation(), async function(e, t) {
                            function n(n) {
                                a(n.target instanceof Element, "null.js:42"), xc(e, t, o(n.target, '[role="menuitem"]'))
                            }
                            xc(e, t, t), e.addEventListener("mouseover", n), await new Promise(e => window.addEventListener("keyup", e, {
                                once: !0
                            })), e.removeEventListener("mouseover", n), Hc(e)
                        }(i, n)
                    }
                    return e.addEventListener("click", n, {
                        capture: !0
                    }), e.addEventListener("details-menu-select", i), {
                        unsubscribe: () => {
                            e.removeEventListener("click", n, {
                                capture: !0
                            }), e.removeEventListener("details-menu-select", i)
                        }
                    }
                }
            }), r("toggle", ".js-diffbar-commits-menu", function(e) {
                const t = e.currentTarget;
                if (!t.hasAttribute("open")) return;
                const n = t.querySelector(".in-range");
                n && n.focus()
            }, {
                capture: !0
            }), r("click", ".js-compare-tab", function(e) {
                for (const n of document.querySelectorAll(".js-compare-tab.selected")) n.classList.remove("selected");
                e.currentTarget.classList.add("selected");
                for (const n of document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")) n.classList.add("d-none");
                a(e.currentTarget instanceof HTMLAnchorElement, "null.js:21");
                const t = e.currentTarget.hash;
                s(document, t).classList.remove("d-none"), e.preventDefault()
            }), ie(function(e) {
                let t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = t.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
                n && n instanceof HTMLElement && !G(n) && s(document, `.js-compare-tab[href="#${n.id}"]`).click()
            }), r("click", ".js-toggle-range-editor-cross-repo", function() {
                s(document, ".js-range-editor").classList.toggle("is-cross-repo")
            }), r("pjax:click", ".js-range-editor", function(e) {
                const t = document.querySelector(".js-compare-pr");
                if (t && t.classList.contains("open")) {
                    a(e instanceof CustomEvent, "null.js:53");
                    const t = e.detail.options,
                        n = new URL(t.url, window.location.origin);
                    n.search.match(/expand=1/) || (n.search += `${n.search?"&":""}expand=1`, t.url = n.toString())
                }
            }), i(".js-compare-pr.open", {
                add() {
                    const e = document.body;
                    a(e, "null.js:66"), e.classList.add("is-pr-composer-expanded")
                },
                remove() {
                    const e = document.body;
                    a(e, "null.js:71"), e.classList.remove("is-pr-composer-expanded")
                }
            }), r("change", ".js-collab-checkbox", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:9");
                const n = t.form;
                a(n, "null.js:11");
                for (const s of n.querySelectorAll(".errored")) s.classList.remove("errored");
                const i = o(t, ".js-collab-option"),
                    r = s(i, ".js-status-indicator");
                r.classList.remove("status-indicator-success", "status-indicator-failed"), r.classList.add("status-indicator-loading")
            }), j(".js-collab-form", async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    for (const t of e.querySelectorAll(".status-indicator-loading")) {
                        t.classList.remove("status-indicator-loading"), t.classList.add("status-indicator-failed");
                        const e = o(t, ".js-collab-option");
                        e.classList.add("errored");
                        const n = s(e, ".js-collab-checkbox", HTMLInputElement);
                        n.checked = !n.checked
                    }
                    for (const t of e.querySelectorAll(".status-indicator-success")) t.classList.remove("status-indicator-success");
                    return
                }
                for (const s of e.querySelectorAll(".errored")) s.classList.remove("errored");
                for (const s of e.querySelectorAll(".status-indicator-loading")) s.classList.remove("status-indicator-loading"), s.classList.add("status-indicator-success")
            }), r("details-menu-selected", ".js-button-menu", function(e) {
                const t = s(e.currentTarget, "button[data-menu-button]"),
                    n = s(e.target, "span[data-menu-button-text]").textContent;
                t.textContent = n, t.focus()
            }), i(".js-timeline-item > .discussion-item.discussion-commits", {
                constructor: HTMLElement,
                add(e) {
                    if (e.querySelector(".discussion-item-header")) return;
                    const t = e.closest(".js-timeline-item");
                    if (!(t instanceof HTMLElement)) return;
                    const n = t.previousElementSibling;
                    n instanceof HTMLElement && n.querySelector(".discussion-item.discussion-commits") && function(e, t) {
                        const n = s(e, ".timeline-commits"),
                            o = t.querySelectorAll(".timeline-commits > .commit");
                        for (const s of o) n.appendChild(s);
                        t.remove()
                    }(n, t)
                }
            }), i("[data-favicon-override]", {
                add(e) {
                    const t = u(e, "data-favicon-override");
                    setTimeout(() => qc(t))
                },
                remove() {
                    null != Cc && qc(Cc)
                }
            }), r("click", ".js-file-header .js-details-target", function(e) {
                if (!(e instanceof MouseEvent && e.altKey && e.currentTarget instanceof HTMLElement)) {
                    const t = o(e.currentTarget, ".js-file");
                    return void(t.getBoundingClientRect().top < 0 && zo(t))
                }
                const t = e.currentTarget,
                    n = o(t, ".js-details-container");
                n.addEventListener("details:toggled", function(e) {
                    a(e instanceof CustomEvent, "null.js:30");
                    const t = e.detail.open;
                    te(n, () => {
                            for (const e of document.querySelectorAll(".js-file.js-details-container")) e !== n && (e.classList.toggle("open", t), e.classList.toggle("Details--on", t))
                        }),
                        function(e) {
                            if (!document.querySelector(".js-file-filter")) return;
                            li(e);
                            const t = oi();
                            t && (t.checked = !e), ei(ii())
                        }(t)
                }, {
                    once: !0
                })
            }), ie(() => {
                const e = window.location.hash.slice(1);
                if (!e) return;
                const t = document.getElementsByName(e)[0];
                if (!t) return;
                const n = t.nextElementSibling;
                n && n.matches(".js-file.js-details-container") && (n.classList.add("open"), n.classList.add("Details--on"))
            }), i(".js-file-header-dropdown", {
                subscribe: e => H(e, "toggle", function(e) {
                    let t = e.currentTarget;
                    a(t instanceof HTMLElement, "null.js:66");
                    const n = t,
                        s = n.hasAttribute("open"),
                        i = o(n, ".js-file");
                    a(i instanceof HTMLElement, "null.js:70"), i.classList.toggle("has-open-dropdown", s)
                })
            }), r("click", ".js-fork-cleanup-select-item", function(e) {
                let t = e.currentTarget;
                const n = o(t, ".js-fork-cleanup-select-menu");
                for (const s of l(n, ".js-fork-cleanup-select-item")) s.classList.remove("selected");
                t.classList.add("selected");
                const i = o(n, ".js-fork-cleanup-button-group"),
                    r = t.getAttribute("data-toggles-button");
                "branch" === r ? (s(i, ".js-fork-cleanup-branch-button").classList.remove("d-none"), s(i, ".js-fork-cleanup-fork-button").classList.add("d-none")) : "fork" === r && (s(i, ".js-fork-cleanup-branch-button").classList.add("d-none"), s(i, ".js-fork-cleanup-fork-button").classList.remove("d-none"))
            }), r("details:toggled", ".js-pull-merging", function(e) {
                let t = e.currentTarget;
                const n = l(t, ".js-merge-pull-request"),
                    s = n.some(G);
                for (const o of n) o.classList.toggle("is-dirty", s)
            }), r("click", ".js-merge-box-try-again", async function(e) {
                let t = e.currentTarget;
                const n = s(o(t, ".js-pull-merging"), ".js-tryable-again", HTMLFormElement);
                L(n, "submit")
            }), document.addEventListener("session:resume", function(e) {
                a(e instanceof CustomEvent, "null.js:32");
                const t = document.getElementById(e.detail.targetId);
                if (t) {
                    const e = t.closest(".js-merge-pull-request");
                    if (e) {
                        const t = e.closest(".js-details-container");
                        t && t.classList.add("open")
                    }
                }
            }), r("change", ".js-merge-method", function(e) {
                let t = e.currentTarget;
                const n = o(t, ".js-merge-pr");
                a(t instanceof HTMLInputElement, "null.js:45"), n.classList.toggle("is-merging", "merge" === t.value), n.classList.toggle("is-squashing", "squash" === t.value), n.classList.toggle("is-rebasing", "rebase" === t.value);
                const s = l(n, ".js-merge-pull-request .js-merge-commit-button", HTMLButtonElement);
                for (const o of s) o.type = t.value === o.value ? "submit" : "button";
                const i = o(n, ".js-pull-merging");
                let r = i.getAttribute("data-url") || "";
                r = r.replace(/merge_type=(\w+)/, `merge_type=${t.value}`), i.setAttribute("data-url", r)
            }), r("change", ".js-merge-button-toggle", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:62");
                const n = o(t, ".js-merge-pr"),
                    s = !t.checked;
                for (const o of l(n, ".js-merge-commit-button", HTMLButtonElement)) o.disabled = s
            }), r("navigation:open", ".js-merge-method-menu .js-navigation-item", function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-merge-pr"),
                    i = s(n, ".js-merge-title", HTMLInputElement),
                    r = s(n, ".js-merge-message", HTMLTextAreaElement);
                i.defaultValue === i.value && (i.defaultValue = t.getAttribute("data-input-title-value") || ""), r.defaultValue === r.value && (r.defaultValue = t.getAttribute("data-input-message-value") || "")
            }), r("details:toggled", ".js-merge-pr", function(e) {
                const t = e.currentTarget.querySelector(".js-merge-message");
                t && L(t, "change")
            }), r("click", ".js-pull-merging a[href]", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:94"), ko && t.blur()
            });
            let Ic = !1;

            function _c() {
                const e = document.querySelectorAll(".pull-request-ref-restore");
                for (let t = 0; t < e.length; t++) e[t].classList.toggle("last", t === e.length - 1)
            }

            function $c() {
                const e = null != document.querySelector("#js-pull-restorable"),
                    t = document.querySelector(".js-pull-discussion-timeline");
                t && t.classList.toggle("is-pull-restorable", e)
            }
            document.addEventListener("keydown", function(e) {
                "Alt" === e.key && (Ic = !0)
            }), document.addEventListener("keyup", function(e) {
                "Alt" === e.key && (Ic = !1)
            }), r("click", ".js-toggle-outdated-comments", function(e) {
                if (!((e instanceof MouseEvent && e.altKey || Ic) && e.currentTarget instanceof HTMLElement)) return;
                const t = e.currentTarget,
                    n = o(t, "details");

                function s() {
                    const e = n.hasAttribute("open");
                    for (const n of document.querySelectorAll(".js-toggle-outdated-comments"))
                        if (n !== t) {
                            o(n, "details").toggleAttribute("open", e)
                        }
                }
                setTimeout(() => {
                    te(t, s)
                })
            }), i(".pull-request-ref-restore", {
                add: _c,
                remove: _c
            }), i("#js-pull-restorable", {
                add: $c,
                remove: $c
            }), document.addEventListener("pjax:end", function() {
                for (const e of document.querySelectorAll(".js-pull-refresh-on-pjax")) L(e, "socket:message", {})
            }), i(".js-updating-pull-request-commits-count", {
                add(e) {
                    const t = e.textContent,
                        n = l(document, ".js-updateable-pull-request-commits-count");
                    for (const s of n) s.textContent = t
                }
            });
            const Rc = "```suggestion",
                Nc = "```",
                Dc = new RegExp(`${Rc}(?:.*)\n`, "i"),
                Bc = new RegExp(`${Nc}(\n|$)`);

            function Pc(e, t) {
                const n = e.slice(0, t).split("\n");
                return e.split("\n")[n.length - 1]
            }

            function Fc(e) {
                const t = /^(\s+)/.exec(e);
                return t && t[0] || ""
            }

            function Oc(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                const s = t.substring(n, t.length),
                    o = e.exec(s);
                return o ? o.index + n : -1
            }

            function Uc(e, t) {
                const n = [];
                let s = 0,
                    o = -1;
                for (;
                    (o = Oc(Dc, e, s)) > -1;) {
                    s = o + Rc.length;
                    const t = Oc(Bc, e, s);
                    if (-1 === t) return !1;
                    s = t + Nc.length, n.push([o, t])
                }
                return n.some(e => t > e[0] && t < e[1])
            }

            function zc(e, t) {
                const n = function(e) {
                        let t = `${Rc}\n`;
                        return t += `${e}\n`, t += Nc
                    }(e),
                    s = t.selectionStart,
                    o = t.value,
                    i = Oc(/\n/, o, s),
                    r = "" === o.trim(),
                    a = Pc(o, s),
                    c = "" === a.trim(),
                    l = `\n${Nc}`.length;
                let u = o,
                    d = 0;
                if (r) d = (u = n).length - l;
                else if (-1 === i) d = c ? (u = o + n).length - l : (u = [o, n].join("\n")).length - l;
                else if (c) {
                    const e = s - Fc(a).length,
                        t = o.substring(0, e),
                        r = o.substring(i, o.length);
                    d = (u = [t, n, r].join("")).length - r.length - l
                } else if (Uc(o, s)) {
                    const e = Oc(/```/, o, s) + 3,
                        t = o.substring(0, e),
                        i = o.substring(e, o.length);
                    d = (u = [t, "\n", n, i].join("")).length - i.length - l
                } else {
                    const e = o.substring(0, i),
                        t = o.substring(i, o.length);
                    d = (u = [e, "\n", n, t].join("")).length - t.length - l
                }
                q(t, u), t.focus(), t.setSelectionRange(d, d)
            }
            const Vc = ".js-add-to-batch-enabled",
                Wc = ".js-unchanged-suggestion",
                Kc = ".js-closed-pull",
                Jc = ".js-viewing-subset-changes",
                Gc = ".js-validation-on-left-blob",
                Xc = ".js-validation-on-right-blob",
                Qc = ".js-outdated-comment",
                Yc = ".js-resolved-thread",
                Zc = ".js-pending-review";

            function el(e) {
                const t = function(e) {
                    const t = e.closest(".js-inline-comments-container");
                    if (!t) return;
                    const n = e.closest(".js-line-comments.line-comments");
                    let o = null;
                    n && (o = n.classList.contains("js-addition") ? "right" : "left");
                    const i = t.previousElementSibling;
                    a(i, "null.js:44");
                    let r = [];
                    if ("TR" === i.tagName) r = Array.from(i.children);
                    else {
                        const e = i.querySelectorAll("tr"),
                            t = Array.from(e).pop();
                        r = Array.from(t.children)
                    }
                    const c = r.filter(e => {
                            const t = e.classList;
                            return !t.contains("blob-code-marker-cell") && (t.contains("code-review") || t.contains("blob-code"))
                        }),
                        l = "right" === o ? c.pop() : c.shift();
                    if (l) return s(l, ".blob-code-inner").textContent
                }(e);
                if (null != t) {
                    const n = o(e, ".js-suggested-changes-container");
                    zc(t, s(n, ".js-comment-field", HTMLTextAreaElement))
                }
            }

            function tl(e, t) {
                const n = document.querySelectorAll(".js-apply-suggestion-button"),
                    i = s(e, ".js-disabled-apply-suggestion-button");
                for (const s of n) {
                    const e = i.cloneNode(!0);
                    sl(e, t), o(s, "details").replaceWith(e)
                }
            }

            function nl(e) {
                const t = document.querySelector(".js-batched-suggested-changes-container");
                t && t.classList.add("d-none");
                for (const n of l(document, ".js-apply-single-suggestion", HTMLInputElement)) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of l(document, ".js-batched-suggested-changes-add", HTMLInputElement)) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of document.querySelectorAll(".js-batched-suggested-changes-remove")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".pending-batched-suggestion-label")) n.classList.add("d-none")
            }

            function sl(e, t) {
                e.setAttribute("aria-label", t), e.classList.remove("d-none")
            }

            function ol(e, t) {
                const n = s(document, ".js-suggested-changes-inline-validation-template").cloneNode(!0);
                n.classList.remove("js-suggested-changes-inline-validation-template"), s(n, ".js-suggested-changes-inline-error-message").textContent = e.trim();
                const o = t.parentNode;
                a(o, "null.js:135"), o.insertBefore(n, t.nextSibling)
            }

            function il() {
                const e = document.querySelector(".js-batched-suggested-changes-container");
                e && setTimeout(() => (function(e) {
                    const t = o(e, ".js-review-state-classes").querySelectorAll("[data-pending-batched-suggestion]").length;
                    for (const s of document.querySelectorAll(".js-pending-batched-suggested-changes-count")) s.textContent = String(t);
                    const n = s(document, ".js-reenable-add-to-batch").textContent;
                    for (const s of document.querySelectorAll("[data-batched-suggestion-reenable-sibling]")) s.removeAttribute("data-batched-suggestion-reenable-sibling"), s.removeAttribute("disabled"), s.setAttribute("aria-label", n);
                    if (t > 0) {
                        e.hidden = !1;
                        const t = s(e, ".js-batched-suggested-changes-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", () => t.classList.remove("anim-pulse-in"), {
                            once: !0
                        });
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) {
                            const t = o(e, ".js-suggested-change-form-container");
                            if ("true" === t.getAttribute("data-pending-batched-suggestion") || "true" === t.getAttribute("data-comment-pending") || "true" === t.getAttribute("data-outdated-comment") ? e.classList.add("d-none") : e.classList.remove("d-none"), "true" === e.getAttribute("data-batched-suggestion-disabled-by-sibling")) {
                                e.removeAttribute("data-batched-suggestion-disabled-by-sibling"), e.setAttribute("disabled", "disabled");
                                const t = s(document, ".js-one-suggestion-per-line").textContent;
                                e.setAttribute("aria-label", t)
                            }
                        }
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) "true" === o(e, ".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) {
                            const t = o(e, ".js-suggested-change-form-container"),
                                n = "true" === t.getAttribute("data-comment-pending"),
                                i = "true" === t.getAttribute("data-outdated-comment"),
                                r = "true" === t.getAttribute("data-resolved-comment"),
                                a = o(e, ".js-inline-comments-container"),
                                c = "left" === s(a, 'input[name="side"]', HTMLInputElement).value;
                            n || i || r || c ? e.classList.add("d-none") : e.classList.remove("d-none")
                        }
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) "true" === o(e, ".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none")
                    } else {
                        e.hidden = !0;
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) e.classList.add("d-none")
                    }
                })(e))
            }

            function rl(e, t) {
                const n = s(e, "input[name=commit_title]", HTMLInputElement),
                    o = s(e, "textarea[name=commit_message]", HTMLTextAreaElement);
                let i = n.value.trim();
                "" === i && (i = n.defaultValue);
                const r = o.value.trim();
                "" !== r && (i = `${i}\n\n${r}\n`), n.disabled = !0, o.disabled = !0;
                const a = document.createElement("input");
                a.setAttribute("type", "hidden"), a.setAttribute("name", "message"), a.value = i, e.appendChild(a);
                const c = document.createElement("input");
                c.setAttribute("type", "hidden"), c.setAttribute("name", "changes"), c.value = JSON.stringify(t), e.appendChild(c)
            }

            function al(e) {
                const t = e.target;
                a(t instanceof HTMLElement, "null.js:32");
                const n = u(t, "data-reaction-label"),
                    i = o(t, ".js-add-reaction-popover"),
                    r = s(i, ".js-reaction-description");
                r.hasAttribute("data-default-text") || r.setAttribute("data-default-text", r.textContent), r.textContent = n
            }

            function cl(e) {
                a(e.target instanceof HTMLElement, "null.js:46");
                const t = o(e.target, ".js-add-reaction-popover"),
                    n = s(t, ".js-reaction-description"),
                    i = n.getAttribute("data-default-text");
                i && (n.textContent = i)
            }

            function ll(e, t) {
                e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
            }

            function ul(e) {
                const t = e.querySelector("iframe");
                return t instanceof HTMLIFrameElement ? t.contentWindow : null
            }
            r("click", ".js-suggested-change-toolbar-item", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && !t.disabled && el(t)
            }), r("click", ".js-refresh-after-suggestion", function() {
                window.location.reload()
            }), i(".js-inline-comments-container", {
                add(e) {
                    const t = e.querySelector('input[name="side"]'),
                        n = document.querySelector(".js-suggested-changes-subset-files"),
                        o = t instanceof HTMLInputElement && "left" === t.value;
                    if (!n && !o) return;
                    const i = l(e, ".js-suggested-change-toolbar-item", HTMLButtonElement),
                        r = s(document, n ? Jc : Gc).textContent.trim();
                    for (const s of i) s.disabled = !0, s.setAttribute("aria-label", r)
                }
            }), i(".js-preview-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = s(document, Xc).textContent,
                        i = s(document, Gc).textContent,
                        r = o(e, ".js-suggested-changes-blob");
                    if ("" !== t.getAttribute("data-thread-side")) {
                        if ("left" === t.getAttribute("data-thread-side")) return ol(i, r), e.remove()
                    } else {
                        const t = o(e, ".js-inline-comment-form"),
                            n = s(t, 'input[name="side"]', HTMLInputElement);
                        if (!t || !n) return e.remove();
                        if (t && "left" === n.value) return ol(i, r), e.remove()
                    }
                    const c = e.previousElementSibling;
                    a(c, "null.js:202");
                    const l = c.querySelector(".js-blob-code-deletion"),
                        u = c.querySelectorAll(".js-blob-code-addition");
                    return l && 0 !== u.length ? l.textContent === Array.from(u).map(e => e.textContent).join("\n") ? (ol(n, r), e.remove()) : void e.remove() : void 0
                }
            }), i(".js-comment-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = t.querySelector(".js-suggested-changes-template");
                    if (!(n instanceof HTMLTemplateElement)) return e.remove();
                    const i = n.content.cloneNode(!0),
                        r = s(i, ".js-disabled-apply-suggestion-button");
                    let a;
                    try {
                        a = s(i, ".js-batched-suggested-changes-add")
                    } catch (v) {
                        if ("QueryError" !== v.name) throw v
                    }
                    if (l(document, ".js-suggested-changes-files-tab").length) {
                        const e = s(document, Vc).textContent;
                        a && (a.removeAttribute("disabled"), a.setAttribute("aria-label", e))
                    }
                    const c = s(document, ".js-pull-header-details"),
                        u = c && "true" === c.getAttribute("data-pull-is-open"),
                        d = e.closest(".js-resolvable-timeline-thread-container"),
                        m = "true" === n.getAttribute("data-comment-pending");
                    if (d && "true" === d.getAttribute("data-resolved")) {
                        const t = s(document, Yc).textContent,
                            n = i.querySelector("details");
                        return n && n.remove(), sl(r, t), a && (a.setAttribute("disabled", "disabled"), a.setAttribute("aria-label", t)), e.replaceWith(i)
                    }
                    if (!u) {
                        const t = s(document, Kc).textContent;
                        return sl(r, t), a && (a.setAttribute("disabled", "disabled"), a.setAttribute("aria-label", t)), e.replaceWith(i)
                    }
                    if (m) {
                        const t = s(document, Zc).textContent;
                        return s(i, "details").remove(), sl(r, t), a && (a.setAttribute("disabled", "disabled"), a.setAttribute("aria-label", t)), e.replaceWith(i)
                    }
                    const f = "left" === o(e, ".js-suggested-changes-contents").getAttribute("data-thread-side"),
                        g = document.querySelector(".js-suggested-changes-subset-files"),
                        p = "true" === n.getAttribute("data-outdated-comment");
                    if (f || g || p) {
                        let t;
                        return g ? t = s(document, Jc).textContent : f ? t = s(document, Gc).textContent : p && (t = s(document, Qc).textContent), s(i, "details").remove(), sl(r, t), a && (a.setAttribute("disabled", "disabled"), a.setAttribute("aria-label", t)), e.replaceWith(i)
                    }
                    const h = s(i, ".js-single-suggested-change-form"),
                        j = e.closest(".js-suggested-changes-blob");
                    if (j) {
                        const e = j.querySelector(".js-blob-code-deletion"),
                            t = j.querySelectorAll(".js-blob-code-addition");
                        if (!e) return;
                        const n = e.textContent,
                            o = Array.from(t).map(e => e.textContent);
                        if (o.length > 0 && n === o.join("\n")) {
                            const e = s(document, Wc).textContent;
                            s(i, "details").remove(), sl(r, e), a && (a.setAttribute("disabled", "disabled"), a.setAttribute("aria-label", e))
                        } else
                            for (const s of o) {
                                const e = document.createElement("input");
                                e.setAttribute("type", "hidden"), e.setAttribute("name", "value[]"), e.value = s, h.appendChild(e)
                            }
                    }
                    e.replaceWith(i)
                }
            }), i(".js-pull-header-details", {
                add(e) {
                    const t = "true" === e.getAttribute("data-pull-is-open"),
                        n = document.querySelector(".js-suggested-changes-template");
                    if (t || !(n instanceof HTMLTemplateElement)) return;
                    const o = n.content,
                        i = s(document, Kc).textContent;
                    tl(o, i), nl(i)
                }
            }), i(".js-suggested-changes-subset-files", {
                add() {
                    const e = document.querySelector(".js-suggested-changes-template");
                    if (!(e instanceof HTMLTemplateElement)) return;
                    const t = e.content,
                        n = s(document, Jc).textContent;
                    tl(t, n), nl(n)
                }
            }), r("click", ".js-apply-suggestion-button", async function(e) {
                const t = e.currentTarget.parentElement;
                if (t) {
                    const e = s(t, ".js-suggestion-commit-title");
                    setTimeout(() => e.focus(), 1)
                }
            }), r("click", ".js-dismiss-suggested-change-onboarding-notice", async function(e) {
                const t = u(e.currentTarget, "data-url"),
                    n = new FormData;
                n.append("notice", "suggested_changes_onboarding_prompt"), await p(We(t, {
                    method: "post",
                    body: n
                }));
                const s = document.querySelectorAll(".js-suggested-change-onboarding-notice");
                for (const o of s) o.remove()
            }), _("keypress", ".js-comment-field", function(e) {
                if ("Enter" === e.key) {
                    const t = e.target;
                    a(t instanceof HTMLTextAreaElement, "null.js:426"),
                        function(e) {
                            const t = e.selectionStart;
                            if (!Uc(e.value, t)) return !1;
                            const n = e.value,
                                s = Pc(n, t);
                            if (null === s) return !1;
                            const o = `\n${Fc(s)}`,
                                i = n.substr(0, t) + o + n.substr(t);
                            q(e, i);
                            const r = t + o.length;
                            return e.setSelectionRange(r, r), !0
                        }(t) && e.preventDefault()
                }
            }), _("keypress", ".js-suggestion-commit-message", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLTextAreaElement, "null.js:435"), "Enter" === e.key && t.setAttribute("rows", "3")
            }), r("click", ".js-batched-suggested-changes-add", function(e) {
                const t = o(e.target, ".js-suggested-change-form-container");
                if ("true" === t.getAttribute("data-comment-pending") || "true" === t.getAttribute("data-outdated-comment") || "true" === e.target.getAttribute("data-batched-suggestion-disabled-by-sibling")) return;
                t.setAttribute("data-pending-batched-suggestion", "true");
                const n = o(e.target, ".js-inline-comments-container");
                for (const s of n.querySelectorAll(".js-batched-suggested-changes-add")) s.setAttribute("data-batched-suggestion-disabled-by-sibling", "true");
                e.target.removeAttribute("data-batched-suggestion-disabled-by-sibling"), il()
            }), r("click", ".js-batched-suggested-changes-remove", function(e) {
                o(e.currentTarget, ".js-suggested-change-form-container").removeAttribute("data-pending-batched-suggestion");
                const t = o(e.currentTarget, ".js-inline-comments-container");
                for (const n of t.querySelectorAll(".js-batched-suggested-changes-add")) n.setAttribute("data-batched-suggestion-reenable-sibling", "true");
                il()
            }), r("click", ".js-focus-commit-suggestions-form-button", function(e) {
                e.preventDefault(), window.location = "#clear-commit-suggestions", window.location = "#commit-suggestions"
            }), r("click", ".js-dismiss-batched-suggested-changes-onboarding-notice", async function(e) {
                const t = u(e.currentTarget, "data-url"),
                    n = new FormData;
                n.append("notice", "batched_suggested_changes_onboarding_prompt"), await p(We(t, {
                    method: "post",
                    body: n
                }));
                for (const s of document.querySelectorAll(".js-batched-suggested-change-onboarding-notice")) s.remove()
            }), r("click", ".js-single-suggested-change-form .js-suggested-changes-submit", function(e) {
                try {
                    const t = e.currentTarget,
                        n = o(t, ".js-single-suggested-change-form", HTMLFormElement),
                        i = l(n, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
                    rl(n, [{
                        commentId: s(n, "input[name=comment_id]", HTMLInputElement).value,
                        path: s(n, "input[name=path]", HTMLInputElement).value,
                        suggestion: i
                    }])
                } catch (Nd) {
                    Ue(Nd)
                }
            }), j(".js-single-suggested-change-form", async function(e, t) {
                const n = o(e, ".js-suggested-change-form-container"),
                    i = o(e, "details"),
                    r = s(n, ".js-suggestion-applied"),
                    a = o(e, ".js-suggested-changes-contents"),
                    c = s(a, ".js-error-message-placeholder");
                try {
                    await t.json(), r.classList.remove("d-none"), s(n, ".js-batched-suggested-changes-add").classList.add("d-none"), i.remove(), window.location.reload()
                } catch (l) {
                    if ("QueryError" !== l.name) {
                        const t = l.response.json && l.response.json.error,
                            r = s(c, ".js-error-message");
                        c.hidden = !1, r.textContent = t, n.prepend(c);
                        const a = o(e, ".js-suggested-change-form-container");
                        s(a, ".js-batched-suggested-changes-add").classList.add("d-none"), i.remove()
                    }
                }
            }), r("click", ".js-suggestion-batch-submit", function(e) {
                const t = o(e.currentTarget, ".js-batched-suggested-changes-form", HTMLFormElement),
                    n = [];
                try {
                    for (const e of document.querySelectorAll("[data-pending-batched-suggestion]")) {
                        const t = s(e, ".js-single-suggested-change-form", HTMLFormElement),
                            o = l(t, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
                        n.push({
                            commentId: s(t, "input[name=comment_id]", HTMLInputElement).value,
                            path: s(t, "input[name=path]", HTMLInputElement).value,
                            suggestion: o
                        })
                    }
                    rl(t, n)
                } catch (Nd) {
                    Ue(Nd)
                }
            }), j(".js-batched-suggested-changes-form", async function(e, t) {
                try {
                    await t.json(), o(e, ".js-batched-suggested-changes-container", HTMLElement).hidden = !0, window.location.reload()
                } catch (n) {
                    const t = n.response.json && n.response.json.error,
                        i = o(e, ".js-batched-suggested-changes-container"),
                        r = s(i, ".js-error-message-container");
                    s(r, ".js-error-message").textContent = t, r.hidden = !1
                }
            }), i(".js-files-tab-stale", {
                add() {
                    const e = document.querySelector(".js-batched-suggested-changes-container");
                    e && setTimeout(() => {
                        e.hidden = !0
                    })
                }
            }), j(".js-pick-reaction", async function(e, t) {
                const n = await t.json(),
                    i = e.closest(".js-menu-container");
                i instanceof HTMLElement && _e(i);
                const r = o(e, ".js-comment"),
                    a = s(r, ".js-reactions-container"),
                    c = s(r, ".js-comment-header-reaction-button"),
                    l = g(document, n.json.reactions_container.trim()),
                    u = g(document, n.json.comment_header_reaction_button.trim());
                a.replaceWith(l), c.replaceWith(u), r.classList.remove("is-reacting")
            }), r("toggle", ".js-reaction-popover-container", function(e) {
                const t = e.currentTarget.hasAttribute("open");
                for (const n of e.target.querySelectorAll(".js-reaction-option-item")) t ? (n.addEventListener("mouseenter", al), n.addEventListener("mouseleave", cl)) : (n.removeEventListener("mouseenter", al), n.removeEventListener("mouseleave", cl));
                o(e.target, ".js-comment").classList.toggle("is-reacting", t)
            }, {
                capture: !0
            });
            const dl = "render-editor",
                ml = "show-code",
                fl = ".js-render-editor-actions",
                gl = {
                    ACQUIRE: "actions:lock:acquire",
                    RELEASE: "actions:lock:release"
                };
            class pl {
                constructor(e) {
                    this._initialized = !1, this._visual = e
                }
                static init() {
                    if (pl.initialized) throw Error("Invariant: pjax not supported");
                    pl.initialized = !0;
                    const e = new pl({
                        send: e => (function(e) {
                            const t = ul(s(document, ".js-render-target"));
                            a(t, "null.js:28"), ll(t, e)
                        })({
                            type: e
                        })
                    });
                    r(bt.Message, fl, t => {
                        a(t instanceof CustomEvent, "null.js:49"), e.handleMessage(t.detail.type)
                    }), r(bt.AfterReady, fl, () => {
                        e.init()
                    }), r("tab:change", ".js-file-editor-nav", t => {
                        a(t instanceof CustomEvent, "null.js:60"), e.tabChange(t.detail.name)
                    })
                }
                init() {
                    this._initialized || (this._initialized = !0, this._handToVisual())
                }
                tabChange(e) {
                    switch (e) {
                        case dl:
                            return void this._handToVisual();
                        case ml:
                            return this._visual.send(gl.ACQUIRE), void
                            function() {
                                const e = s(document, ".js-render-editor-lock");
                                setTimeout(() => {
                                    e.style.opacity = "1"
                                }, 50)
                            }()
                    }
                }
                _handToVisual() {
                    hl(!0), this._visual.send(gl.RELEASE)
                }
                handleMessage(e) {
                    switch (e) {
                        case gl.RELEASE:
                            hl(!1)
                    }
                }
            }

            function hl(e) {
                const t = s(document, ".js-render-editor-lock");
                t.hidden = !e, e && (t.style.opacity = "0");
                const n = s(document, ".js-code-editor"),
                    o = Lt(n);
                a(o, "null.js:115"), o.editor.setOption("readOnly", !!e && "nocursor")
            }
            pl.initialized = !1, i(fl, pl.init);
            const jl = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
                vl = new WeakMap,
                bl = yt(() => {
                    S({
                        incrementKey: "LAUNCH_EDITOR_RENDER_SUCCEED"
                    })
                });

            function Ll(e) {
                if (null == e) return;
                const t = vl.get(e);
                null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
            }

            function yl(e, t) {
                if (null != e) {
                    if (Tl(e)) {
                        let e;
                        switch (t) {
                            case "timeout:hello":
                                e = "LAUNCH_EDITOR_RENDER_TIMEOUT_HELLO";
                                break;
                            case "timeout:load":
                                e = "LAUNCH_EDITOR_RENDER_TIMEOUT_LOAD";
                                break;
                            default:
                                e = "LAUNCH_EDITOR_RENDER_FAIL"
                        }
                        S({
                            incrementKey: e
                        })
                    }
                    return e.classList.remove(...jl), e.classList.add("is-render-failed"), Ll(e)
                }
            }

            function El() {
                return !0
            }

            function wl(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : El;
                return function() {
                    if (G(e) && !e.classList.contains("is-render-ready") && !e.classList.contains("is-render-failed") && !e.classList.contains("is-render-failed-fatally") && (!n || n())) return yl(e, t)
                }
            }

            function Tl(e) {
                return "launch_flow_file" === e.getAttribute("data-type")
            }
            i(".js-render-target", {
                constructor: HTMLElement,
                initialize: function(e) {
                    const t = vl.get(e);
                    null != t && t.load || (Ll(e), function(e) {
                        if (vl.get(e)) return;
                        let t = 10,
                            n = 45;
                        Tl(e) && (t = 15, n = 50);
                        const s = {
                            load: null,
                            hello: null,
                            helloTimer: null,
                            loadTimer: null
                        };
                        s.load = Date.now(), s.helloTimer = setTimeout(wl(e, "timeout:hello", function() {
                            return !s.hello
                        }), 1e3 * t), s.loadTimer = setTimeout(wl(e, "timeout:load"), 1e3 * n), vl.set(e, s)
                    }(e), e.classList.add("is-render-automatic"), e.classList.add("is-render-requested"))
                }
            }), window.addEventListener("message", function(e) {
                const t = e.data;
                if (!t) return;
                const n = function(e) {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return
                    }
                }(t) || t;
                if ("string" != typeof n.type && "render" !== n.type) return;
                const s = n.type;
                if ("string" != typeof n.identity) return;
                const o = n.identity;
                if ("string" != typeof n.body) return;
                const i = n.body,
                    r = function(e) {
                        return Array.from(document.querySelectorAll(".js-render-target")).filter(t => !e || t.getAttribute("data-identity") === e)[0]
                    }(o);
                r && e.origin === r.getAttribute("data-host") && function(e, t, n, s, o) {
                    switch (s) {
                        case "hello":
                            {
                                const t = vl.get(e) || {
                                    untimed: !0
                                };t.hello = Date.now();
                                const n = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "ack",
                                            ack: !0
                                        }
                                    },
                                    s = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "branding",
                                            branding: !1
                                        }
                                    },
                                    o = ul(e);
                                if (ll(o, n), ll(o, s), e.classList.contains("is-local") && o && "function" == typeof o.postMessage) {
                                    const t = o,
                                        n = e.closest(".js-code-editor"),
                                        s = n instanceof HTMLElement ? Lt(n) : null,
                                        i = e.getAttribute("data-data");
                                    if (s) {
                                        let e = null;
                                        const n = (n, o) => {
                                            if (function(e) {
                                                    return e && "setValue" === e.origin
                                                }(o)) return;
                                            const i = s.code();
                                            i !== e && (e = i, ll(t, {
                                                type: "render:data",
                                                body: i
                                            }))
                                        };
                                        s.editor.on("change", n), n()
                                    } else i && ll(t, {
                                        type: "render:data",
                                        body: i
                                    })
                                }
                            }
                            break;
                        case "error":
                            return yl(e, s);
                        case "error:fatal":
                            return yl(e, s), e.classList.add("is-render-failed-fatal");
                        case "error:invalid":
                            return yl(e, s), e.classList.add("is-render-failed-invalid");
                        case "loading":
                            return e.classList.remove(...jl), e.classList.add("is-render-loading");
                        case "loaded":
                            return e.classList.remove(...jl), e.classList.add("is-render-loaded");
                        case "ready":
                            e.classList.remove(...jl), e.classList.add("is-render-ready"), o && "number" == typeof o.height && (e.style.height = `${o.height}px`), Tl(e) && bl(), L(e, bt.AfterReady, {
                                container: e,
                                payload: o
                            });
                            break;
                        case "resize":
                            o && "number" == typeof o.height && (e.style.height = `${o.height}px`);
                            break;
                        case "data":
                            L(e, "edit:visual", o);
                            break;
                        default:
                            L(e, bt.Message, {
                                type: t,
                                body: s,
                                payload: o
                            })
                    }
                }(r, s, 0, i, null != n.payload ? n.payload : void 0)
            });
            let kl = null;
            const Al = new E;

            function Ml(e) {
                const t = e.form;
                a(t, "null.js:43");
                const n = o(t, ".js-branches"),
                    i = n.querySelectorAll(".js-branches-subnav .js-subnav-item"),
                    r = n.querySelector(".js-branches-subnav .js-subnav-item.selected"),
                    c = s(n, ".js-branches-subnav .js-branches-all"),
                    l = t.getAttribute("data-results-container");
                kl || (kl = r);
                const d = e.value.trim().length > 0,
                    m = function(e) {
                        const t = e.form;
                        if (a(t, "null.js:24"), e.value.trim()) {
                            const n = new URL(t.action, window.location.origin),
                                s = new URLSearchParams(n.search.slice(1)),
                                o = t.elements.namedItem("utf8");
                            return o instanceof HTMLInputElement && s.append("utf8", o.value), s.append("query", e.value), n.search = s.toString(), n.toString()
                        }
                        return u(t, "data-reset-url")
                    }(e);

                function f() {
                    n.classList.remove("is-loading")
                }
                Al.push($(document, m)).then(function(e) {
                    T(null, "", m);
                    const t = l ? document.getElementById(l) : null;
                    t && (t.innerHTML = "", t.appendChild(e))
                }).then(f, f), n.classList.toggle("is-search-mode", d), n.classList.add("is-loading");
                for (const s of i) s.classList.remove("selected");
                d ? c.classList.add("selected") : kl && (kl.classList.add("selected"), kl = null)
            }
            i(".js-branch-search-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    k(e, Ml)
                },
                subscribe: e => H(e, "keyup", function(t) {
                    a(t instanceof KeyboardEvent, "null.js:104"), "Escape" === U(t) && (! function(e) {
                        const t = e.value.trim();
                        e.value = "", t && Ml(e)
                    }(e), e.blur())
                })
            }), r("submit", ".js-branch-search", e => e.preventDefault()), r("click", ".js-clear-branch-search", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:119"), a(t.form, "null.js:120");
                const n = s(t.form, ".js-branch-search-field", HTMLInputElement);
                n.focus(), n.value = "", L(n, "input")
            }), j(".js-branch-destroy, .js-branch-restore", async function(e, t) {
                s(e, "button[type=submit]").blur();
                const n = function(e) {
                    const t = o(e, ".js-branch-row").getAttribute("data-branch-name"),
                        n = o(e, ".js-branches").querySelectorAll(".js-branch-row");
                    return Array.from(n).filter(e => e.getAttribute("data-branch-name") === t)
                }(e);
                for (const s of n) {
                    const e = s.querySelector(".js-branch-delete-target"),
                        t = s.querySelector(".js-loading-spinner");
                    t && (t.hidden = !1), e && (e.hidden = !0)
                }
                let i = !1;
                try {
                    await t.text()
                } catch (r) {
                    i = !0, location.reload()
                } finally {
                    for (const e of n) {
                        const t = e.querySelector(".js-branch-delete-target"),
                            n = e.querySelector(".js-loading-spinner");
                        t && (t.hidden = !1), n && (n.hidden = !0)
                    }
                }
                if (!i) {
                    const t = e.classList.contains("js-branch-destroy");
                    for (const e of n) e.classList.toggle("Details--on", t)
                }
            }), r("change", ".js-repository-import-owner-container input", function(e) {
                let t = e.currentTarget;
                const n = t.getAttribute("data-upsell") || "",
                    o = t.getAttribute("data-billing-url") || "";
                s(document, ".js-repository-import-billing-url", HTMLAnchorElement).href = o, s(document, ".js-repository-import-upsell").classList.toggle("d-none", "false" === n), s(document, ".js-repository-import-no-upsell").classList.toggle("d-none", "true" === n)
            }), r("socket:message", ".repository-import", function(e) {
                a(e instanceof CustomEvent, "null.js:21");
                const t = e.detail.data;
                t.redirect_to && (document.location.href = t.redirect_to, e.stopImmediatePropagation())
            }), r("change", "input.js-repository-import-lfs-opt", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:30");
                const n = parseInt(t.getAttribute("data-percent-used")),
                    i = o(t, ".js-repository-import-lfs-container"),
                    r = t.getAttribute("data-used") || "";
                s(i, ".js-repository-import-lfs-warn").classList.toggle("d-none", !(n > 100)), s(i, ".js-usage-bar").classList.toggle("exceeded", n >= 100), s(i, ".js-usage-bar").setAttribute("aria-label", `${n}%`), s(i, ".js-repository-import-lfs-progress").style.width = `${n}%`, s(i, "span.js-usage-text").textContent = r
            }), j(".js-repository-import-author-form", async function(e, t) {
                const n = await t.html();
                o(e, ".js-repository-import-author").replaceWith(n.html)
            }), r("click", ".js-repository-import-projects-cancel-button", function() {
                const e = s(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
                v(e)
            });
            let Sl = !1;

            function xl() {
                return "false" === s(document, ".js-privacy-toggle:checked", HTMLInputElement).value
            }

            function Hl() {
                const e = s(document, ".js-repo-name");
                L(e, "change");
                const t = s(document, '.js-owner-container [aria-checked="true"]'),
                    n = s(document, ".js-privacy-toggle[value=false]", HTMLInputElement),
                    o = s(document, ".js-privacy-toggle[value=true]", HTMLInputElement);
                Sl || ("private" === t.getAttribute("data-default") ? (n.checked = !0, L(n, "change")) : (o.checked = !0, L(o, "change"))), "false" === t.getAttribute("data-org-allow-public-repos") ? (o.disabled = !0, !0 === o.checked && (n.checked = !0, L(n, "change"))) : o.disabled = !1,
                    function(e) {
                        for (const s of document.querySelectorAll(".js-with-permission-fields")) s.hidden = !e;
                        for (const s of document.querySelectorAll(".js-without-permission-fields")) s.hidden = e;
                        const t = document.querySelector(".errored"),
                            n = document.querySelector("dl.warn");
                        t && (t.hidden = !e);
                        n && (n.hidden = !e)
                    }("yes" === t.getAttribute("data-permission")),
                    function() {
                        const e = document.querySelector("#js-upgrade-container");
                        if (!e) return;
                        const t = s(document, "#js-payment-methods-form");
                        e.firstElementChild && t.appendChild(e.firstElementChild);
                        const n = s(document, "input[name=owner]:checked", HTMLInputElement).value,
                            o = t.querySelector(`.js-upgrade[data-login="${n}"]`);
                        o && e.appendChild(o)
                    }(), Cl();
                const i = document.querySelector(".js-quick-install-container");
                if (i) {
                    const e = s(i, ".js-quick-install-divider");
                    e.hidden = !0;
                    const t = s(document, "input[name=owner]:checked", HTMLInputElement).parentElement;
                    if (t) {
                        const n = t.querySelector(".js-quick-install-list-template");
                        if (n instanceof HTMLTemplateElement) {
                            const t = s(i, ".js-account-apps");
                            t.innerHTML = "", t.append(n.content.cloneNode(!0)), n.children.length > 0 && (e.hidden = !1)
                        }
                    }
                }
            }

            function Cl(e) {
                const t = document.querySelector("#js-upgrade-container");
                if (!t) return;
                const n = t.querySelector(".js-billing-section"),
                    s = t.querySelector(".js-confirm-upgrade-checkbox");
                let o = e ? e.target : null;
                o || (o = document.querySelector(".js-privacy-toggle:checked")), a(o instanceof HTMLInputElement, "null.js:94"), "false" === o.value ? (t.hidden = !1, n && n.classList.remove("has-removed-contents"), s && (a(s instanceof HTMLInputElement, "null.js:100"), s.checked = !0)) : (t.hidden = !0, n && n.classList.add("has-removed-contents"), s && (a(s instanceof HTMLInputElement, "null.js:107"), s.checked = !1)), ql()
            }

            function ql() {
                const e = s(document, "#new_repository");
                let t = s(e, ".js-repo-name").classList.contains("is-autocheck-successful");
                xl() && (t = t && function() {
                    const e = document.querySelector("#js-upgrade-container");
                    if (!e) return !0;
                    if (e.querySelector(".js-ofac-sanction-notice")) return !1;
                    const t = e.querySelector(".js-confirm-upgrade-checkbox");
                    if (t instanceof HTMLInputElement && !t.checked) return !1;
                    const n = e.querySelector(".js-zuora-billing-info");
                    if (n && n.classList.contains("d-none")) return !1;
                    return !0
                }()), s(e, "button[type=submit]", HTMLButtonElement).disabled = !t
            }
            i("#js-upgrade-container .js-zuora-billing-info:not(.d-none)", ql), i(".page-new-repo", function() {
                Sl = xl();
                const e = document.querySelector("#js-upgrade-container");
                e && (e.hidden = !0), Hl();
                const t = document.querySelector(".js-owner-select");
                t && t.focus()
            }), r("click", ".js-reponame-suggestion", function(e) {
                const t = s(document, ".js-repo-name", HTMLInputElement);
                t.value = e.currentTarget.textContent, L(t, "input", !1)
            }), r("click", ".js-privacy-toggle", function() {
                Sl = !0
            }), r("change", ".js-privacy-toggle", Cl), r("details-menu-selected", ".js-owner-container", Hl), r("change", "#js-upgrade-container input", ql), d("#js-upgrade-container input", ql), r("autocheck:send", ".js-repo-name-auto-check", function(e) {
                a(e instanceof CustomEvent, "null.js:202");
                const t = e.currentTarget.form;
                a(t, "null.js:205");
                const n = s(t, "input[name=owner]:checked", HTMLInputElement).value;
                e.detail.body.append("owner", n)
            }), r("autocheck:complete", "#repository_name", function() {
                ql()
            }), i(".js-pulse-contribution-data", e => {
                !async function(e) {
                    const t = e.getAttribute("data-pulse-diffstat-summary-url");
                    let n;
                    try {
                        t && function(e, t) {
                            t.innerHTML = "", t.appendChild(e)
                        }(n = await async function(e) {
                            return $(document, e)
                        }(t), e)
                    } catch (o) {
                        const t = s(e, ".js-blankslate-loading"),
                            n = s(e, ".js-blankslate-error");
                        t.classList.add("d-none"), n.classList.remove("d-none")
                    }
                }(e)
            }), _("keydown", ".js-tree-finder-field", e => {
                "Escape" === e.key && (e.preventDefault(), history.back())
            });

            function Il(e, t) {
                if (Mr(e)) return;
                const n = s(document, ".js-site-search-form", HTMLFormElement);
                let o, i;
                s(document, ".js-site-search").classList.toggle("scoped-search", t), t ? (o = u(n, "data-scoped-search-url"), i = u(e, "data-scoped-placeholder")) : (o = u(n, "data-unscoped-search-url"), i = u(e, "data-unscoped-placeholder")), n.setAttribute("action", o), e.setAttribute("placeholder", i)
            }

            function _l(e) {
                a(e.currentTarget instanceof Element, "null.js:19");
                const t = e.currentTarget.querySelector(".js-search-result-feedback");
                t && t.classList.add("show")
            }

            function $l(e) {
                a(e.currentTarget instanceof Element, "null.js:29");
                const t = e.currentTarget.querySelector(".js-search-result-feedback");
                t && t.classList.remove("show")
            }

            function Rl(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:41"), t.classList.add("text-gray-dark"), t.classList.remove("link-gray");
                const n = o(t, ".js-search-result-feedback");
                for (const s of l(n, ".js-search-rating", HTMLButtonElement)) s.disabled = !0;
                s(n, ".js-search-feedback-form").classList.add("show")
            }

            function Nl(e) {
                const t = e.value.slice(0, e.selectionEnd),
                    n = e.value.slice(e.selectionEnd),
                    s = 0 === e.value.trim().length,
                    o = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/);
                return s || o
            }
            async function Dl(e) {
                const t = e.getAttribute("data-contents-url"),
                    n = Et("SEARCH_SUGGESTIONS");
                if (!t) return;
                const o = s(document, ".js-search-suggester"),
                    i = e.value.slice(0, e.selectionEnd).match(/\S*$/),
                    r = i ? i[0] : "",
                    c = new URL(t, window.location.origin),
                    l = new URLSearchParams;
                l.append("query", r), c.search = l.toString();
                const u = await p(c.toString());
                if ("" === u.trim()) return void Bl();
                o.innerHTML = u, n && o.classList.remove("d-none"), Qe(s(o, ".js-navigation-container"));
                const d = s(o, ".js-search-suggester-helper"),
                    m = e.value.match(/(^|\s)[^\s:]+$/),
                    f = d.parentElement;
                a(f instanceof HTMLElement, "null.js:52"), m && (d.textContent = e.value), f.classList.toggle("d-none", n && !m)
            }

            function Bl() {
                s(document, ".js-search-suggester").classList.add("d-none")
            }

            function Pl(e) {
                const t = e.target,
                    n = o(t, ".js-navigation-item"),
                    i = s(document, ".js-search-suggester-field", HTMLInputElement),
                    r = s(document, ".js-search-suggester"),
                    a = n.getAttribute("data-value") || "",
                    c = i.value.slice(0, i.selectionEnd).replace(/\S+$/, ""),
                    l = i.value.slice(i.selectionEnd);
                r.classList.contains("d-none") ? v(s(document, "#search_form", HTMLFormElement)) : (e.preventDefault(), i.value = c + a + l, Nl(i) ? Dl(i) : Bl())
            }

            function Fl() {
                const e = document.body;
                a(e, "null.js:13"), e.classList.add("is-sending"), e.classList.remove("is-sent", "is-not-sent")
            }

            function Ol() {
                const e = document.body;
                a(e, "null.js:21"), e.classList.add("is-sent"), e.classList.remove("is-sending")
            }

            function Ul(e) {
                const t = document.body;
                a(t, "null.js:29"), e && (s(document, ".js-sms-error").textContent = e), t.classList.add("is-not-sent"), t.classList.remove("is-sending")
            }

            function zl(e) {
                const t = document.querySelector(".js-stale-session-flash");
                t && (t.classList.toggle("is-signed-in", "true" === e), t.classList.toggle("is-signed-out", "false" === e), t.hidden = !1, window.addEventListener("popstate", function(e) {
                    e.state && null != e.state.container && location.reload()
                }), document.addEventListener("submit", function(e) {
                    e.preventDefault()
                }))
            }
            let Vl;
            if (i(".js-tree-finder", e => {
                    e instanceof HTMLElement && ((async e => {
                        if (!(e instanceof FuzzyListElement)) return;
                        const t = u(e, "data-url"),
                            n = s(e, ".js-tree-browser-result-template", HTMLTemplateElement),
                            o = (await z(t)).paths;
                        e.addLazyItems(o, e => {
                            const t = n.content.cloneNode(!0).firstElementChild;
                            a(t, "null.js:27");
                            const o = s(t, ".js-tree-finder-path", HTMLAnchorElement),
                                i = new URL(o.href, window.location.origin);
                            return i.pathname = `${i.pathname}/${encodeURI(e)}`, o.href = String(i), o.textContent = e, t
                        }), e.sort()
                    })(e), e.addEventListener("fuzzy-list-will-sort", () => {
                        xe(e)
                    }), e.addEventListener("fuzzy-list-sorted", () => {
                        const t = e.querySelector(".js-navigation-item");
                        t instanceof HTMLElement && Xe(e, t)
                    }))
                }), i(".js-codesearch-nav", function(e) {
                    const t = e.querySelector(".selected");
                    if (!t) return;
                    const n = t.offsetLeft,
                        s = t.offsetWidth,
                        o = n + s,
                        i = window.innerWidth;
                    (o - e.scrollLeft > i || o < e.scrollLeft) && (e.scrollLeft = n - i / 2 + s / 2)
                }), i(".js-codesearch-count", function(e) {
                    const t = e.getAttribute("data-search-type");
                    for (const n of document.querySelectorAll(".js-codesearch-deferred-count"))
                        if (t && n.getAttribute("data-search-type") === t) {
                            const t = e.cloneNode(!0);
                            t.classList.remove("js-codesearch-count"), n.replaceWith(t)
                        }
                }), _("keyup", ".js-site-search-field", function(e) {
                    const t = e.target;
                    a(t instanceof HTMLInputElement, "null.js:34");
                    const n = 0 === t.value.length;
                    n && "Backspace" === e.key && t.classList.contains("is-clearable") && Il(t, !1), n && "Escape" === e.key && Il(t, !0), t.classList.toggle("is-clearable", n)
                }), m(".js-site-search-focus", function(e) {
                    const t = o(e, ".js-chromeless-input-container");
                    t.classList.add("focus"), e.addEventListener("blur", function n() {
                        t.classList.remove("focus"), a(e instanceof HTMLInputElement, "null.js:53"), 0 === e.value.length && e.classList.contains("js-site-search-field") && Il(e, !0), e.removeEventListener("blur", n)
                    })
                }), r("submit", ".js-site-search-form", function(e) {
                    s(e.target, ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type") || ""
                }), i(".issue-list-item", {
                    subscribe: e => H(e, "mouseover", _l)
                }), i(".issue-list-item", {
                    subscribe: e => H(e, "mouseleave", $l)
                }), i(".js-search-rating", {
                    subscribe: e => H(e, "click", Rl)
                }), i(".js-search-suggester-field", {
                    constructor: HTMLInputElement,
                    initialize(e) {
                        Dl(e), k(e, function() {
                            Nl(e) ? Dl(e) : Bl()
                        })
                    }
                }), r("focusin", ".js-search-suggester-field", function(e) {
                    const t = e.currentTarget;
                    a(t instanceof HTMLInputElement, "null.js:78"), Nl(t) ? Dl(t) : Bl()
                }), r("focusout", ".js-search-suggester-field", function() {
                    Bl()
                }), r("mousedown", ".js-search-suggester", Pl), r("navigation:keydown", ".js-search-suggester", function(e) {
                    a(e instanceof CustomEvent, "null.js:109");
                    const t = e.currentTarget.querySelector('.js-search-suggester .js-navigation-item[aria-selected="true"]');
                    switch (e.detail.hotkey) {
                        case "Enter":
                            t ? Pl(e) : v(s(document, "#search_form", HTMLFormElement));
                            break;
                        case "Tab":
                            t && Pl(e);
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Escape":
                            Bl()
                    }
                }), r("click", ".js-segmented-nav-button", function(e) {
                    e.preventDefault();
                    const t = e.currentTarget,
                        n = u(t, "data-selected-tab"),
                        i = o(t, ".js-segmented-nav"),
                        r = i.parentElement;
                    a(r, "null.js:14");
                    for (const s of l(i, ".js-segmented-nav-button")) s.classList.remove("selected");
                    t.classList.add("selected");
                    for (const s of l(r, ".js-selected-nav-tab")) s.parentElement === r && s.classList.remove("active");
                    s(document, `.${n}`).classList.add("active")
                }), j(".js-send-auth-code", async (e, t) => {
                    let n;
                    Fl();
                    try {
                        n = await t.text()
                    } catch (s) {
                        Ul(s.response.text)
                    }
                    n && Ol()
                }), r("click", ".js-send-two-factor-code", async function(e) {
                    const t = e.currentTarget;
                    a(t instanceof HTMLButtonElement, "null.js:56");
                    const n = t.form;
                    a(n, "null.js:58");
                    const o = `${s(n,".js-country-code-select",HTMLSelectElement).value} ${s(n,".js-sms-number",HTMLInputElement).value}`;
                    Fl();
                    let i = t.getAttribute("data-authenticity-token");
                    null == i && (i = c(n, "authenticity_token").value);
                    const r = new FormData;
                    r.append("number", o), r.append("authenticity_token", i);
                    try {
                        const e = u(t, "data-url");
                        await wt(e, {
                            method: "post",
                            body: r
                        }), Ol();
                        for (const t of n.querySelectorAll(".js-2fa-enable"))(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) && (t.disabled = !1);
                        s(n, ".js-2fa-otp").focus()
                    } catch (l) {
                        if (l.response) {
                            Ul(await l.response.text())
                        }
                        for (const e of n.querySelectorAll(".js-2fa-enable"))(e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && (e.disabled = !0)
                    }
                }), r("click", ".js-enable-enable-two-factor-auth-button", function() {
                    const e = s(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
                    e.disabled = !1, e.removeAttribute("aria-label"), e.classList.remove("tooltipped")
                }), i(".js-two-factor-sms-fallback-button", function(e) {
                    e.addEventListener("toggle", function(e) {
                        const t = e.currentTarget;
                        a(t instanceof Element, "null.js:113");
                        for (const n of t.querySelectorAll(".flash")) n.hidden = !0;
                        s(t, ".js-configure-sms-fallback").hidden = !1, s(t, ".js-verify-sms-fallback").hidden = !0
                    })
                }), j(".js-two-factor-set-sms-fallback", async (e, t) => {
                    let n;
                    try {
                        n = await t.text()
                    } catch (o) {
                        const t = s(e, ".js-configure-sms-fallback"),
                            n = s(e, ".js-verify-sms-fallback"),
                            i = t.hidden ? n : t,
                            r = s(i, ".flash");
                        switch (o.response.status) {
                            case 422:
                            case 429:
                                r.textContent = o.response.text, r.hidden = !1
                        }
                    }
                    if (n) switch (n.status) {
                        case 200:
                        case 201:
                            window.location.reload();
                            break;
                        case 202:
                            s(e, ".js-configure-sms-fallback").hidden = !0, s(e, ".js-verify-sms-fallback").hidden = !1, s(e, ".js-fallback-otp").focus()
                    }
                }), "function" == typeof BroadcastChannel) try {
                (Vl = new BroadcastChannel("stale-session")).onmessage = (e => {
                    "string" == typeof e.data && zl(e.data)
                })
            } catch (Dd) {}
            if (!Vl) {
                let e = !1;
                Vl = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    }
                }, window.addEventListener("storage", function(t) {
                    if (!e && t.storageArea === window.localStorage && "logged-in" === t.key) try {
                        "true" !== t.newValue && "false" !== t.newValue || zl(t.newValue)
                    } finally {
                        window.localStorage.removeItem(t.key)
                    }
                })
            }
            const Wl = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (Wl) {
                const e = Wl.getAttribute("data-signedin");
                Vl.postMessage(e)
            }
            document.addEventListener("pjax:end", function() {
                const e = document.querySelector('meta[name="selected-link"]'),
                    t = e && e.getAttribute("value");
                if (t)
                    for (const n of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        const e = (n.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        n.classList.toggle("selected", e)
                    }
            }), i(".js-contact-javascript-flag", {
                constructor: HTMLInputElement,
                add(e) {
                    e.value = "true"
                }
            }), r("socket:message", ".js-notification-indicator", function(e) {
                a(e instanceof CustomEvent, "null.js:10");
                const t = e.currentTarget,
                    n = e.detail.data;
                t.setAttribute("aria-label", n.aria_label), t.setAttribute("data-ga-click", n.ga_click), t.querySelector("span").setAttribute("class", n.span_class)
            });
            let Kl, Jl = !1;
            async function Gl() {
                if (Jl) return;
                Jl = !0;
                const e = `/site/keyboard_shortcuts?url=${window.location.pathname}`;
                (await Y({
                    content: $(document, e),
                    dialogClass: "kb-shortcut-dialog container-xl"
                })).addEventListener("dialog:remove", function() {
                    Jl = !1
                }, {
                    once: !0
                })
            }
            r("click", ".js-keyboard-shortcuts", Gl), document.addEventListener("keydown", e => {
                e.target instanceof Node && Ye(e.target) || "?" === U(e) && Gl()
            }), i(".js-site-status-container", {
                initialize(e) {
                    !async function(e) {
                        const t = Ne(document, "site-status-api-url"),
                            n = await window.fetch(t),
                            o = await n.json(),
                            i = o.status.indicator;
                        if ("none" !== i && e instanceof HTMLElement) {
                            s(e, ".js-site-status-message").textContent = o.status.description, s(e, ".js-site-status-time").setAttribute("datetime", o.page.updated_at);
                            const t = "minor" === i ? "flash-warn" : "flash-error";
                            s(e, ".flash").classList.add(t), e.hidden = !1
                        }
                    }(e)
                }
            }), m(".js-skip-password-autofill", e => {
                a(e instanceof HTMLInputElement, "null.js:9"), e.type = "password"
            }), async function() {
                Et("SERVICE_WORKER") && navigator.serviceWorker && (Kl = await navigator.serviceWorker.register("/service-worker.js"))
            }(), r("click", ".js-subscribe-to-web-push", async function(e) {
                if (!window.PushManager) return;
                e.preventDefault();
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:27"), a(t.form, "null.js:28");
                const n = s(t.form, "[name=authenticity_token]", HTMLInputElement).value,
                    o = await fetch("/web-push/public-key", {
                        credentials: "same-origin"
                    }),
                    i = (await o.json()).vapid_public_key,
                    r = new Uint8Array(i),
                    c = (await Kl.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: r
                    })).toJSON(),
                    l = new FormData;
                l.append("authenticity_token", n), l.append("endpoint", c.endpoint), l.append("p256dh", c.keys.p256dh), l.append("auth", c.keys.auth), await fetch("/web-push-subscription", {
                    method: "POST",
                    body: l,
                    credentials: "same-origin"
                })
            });
            const Xl = {},
                Ql = {};
            let Yl = null,
                Zl = 0,
                eu = 0,
                tu = null;
            const nu = 1e3,
                su = 1008,
                ou = 1011,
                iu = 1013,
                ru = 1012;

            function au() {
                const e = document.head && document.head.querySelector("link[rel=web-socket]");
                if (!e) return;
                a(e instanceof HTMLLinkElement, "Link must be of type HTMLLinkElement -- null.js:53");
                try {
                    Yl = new WebSocket(e.href, void 0)
                } catch (n) {
                    if (Yl = null, n.name && "SecurityError" !== n.name) throw new Error(`error opening WebSocket: ${n.message} (${n.name})`);
                    return null
                }
                const t = setTimeout(function() {
                    window.removeEventListener("online", cu), Yl && Yl.close(), Yl = null
                }, 4e3);
                Yl.addEventListener("open", function() {
                    clearTimeout(t), Zl += 1, eu = 0;
                    for (const e in Xl) Yl && Yl.send(`subscribe:${e}`)
                }), Yl.addEventListener("message", function(e) {
                    a(e instanceof MessageEvent, "null.js:84");
                    const t = JSON.parse(String(e.data)),
                        n = t[0],
                        s = t[1];
                    if (!n || !s) return;
                    const o = Ql[n] || [];
                    for (const i of o) L(i, "socket:message", {
                        data: s,
                        name: n
                    })
                })
            }

            function cu(e) {
                if (!1 === navigator.onLine) return;
                if (Zl >= 5 || e.code === su || e.code === ou) return window.removeEventListener("online", cu), Yl && Yl.close(nu, "give-up-reconnects"), void(Yl = null);
                eu += 1;
                let t = null;
                if (e.code === iu || e.code === ru) t = 5e3;
                else {
                    const e = 5 * Math.random();
                    t = 1e3 * Math.pow(2, eu) * e
                }
                tu && clearTimeout(tu), tu = setTimeout(au, t)
            }

            function lu(e) {
                const t = e.getAttribute("data-channel");
                return t ? t.split(/\s+/) : []
            }

            function uu(e, t, n) {
                const s = e.getBoundingClientRect().height,
                    o = t.getBoundingClientRect(),
                    i = n.getBoundingClientRect();
                let r = i.top;
                r + o.height + 10 >= s && (r = Math.max(s - o.height - 10, 0));
                let a = i.right;
                null != n.closest(".js-build-status-to-the-left") && (a = Math.max(i.left - o.width - 10, 0)), t.style.top = `${r}px`, t.style.left = `${a}px`, t.style.right = "auto"
            }
            async function du(e) {
                const t = e.querySelector(".js-dropdown-details"),
                    n = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(n instanceof HTMLElement)) return;
                const o = s(n, ".js-status-loader"),
                    i = s(n, ".js-status-loading"),
                    r = s(n, ".js-status-error"),
                    a = u(o, "data-contents-url");
                let c;
                i.classList.remove("d-none"), r.classList.add("d-none");
                try {
                    await nt(), c = await $(document, a)
                } catch (l) {
                    i.classList.add("d-none"), r.classList.remove("d-none")
                }
                if (c) {
                    o.replaceWith(c), s(n, ".js-details-container").classList.add("open");
                    const e = document.body;
                    e && t && n.classList.contains("js-append-menu-to-body") && uu(e, n, t)
                }
            }

            function mu(e) {
                let t = e.currentTarget;
                a(t instanceof Element, "null.js:120"), du(t)
            }
            async function fu(e) {
                e.preventDefault();
                const t = e.currentTarget;
                a(t instanceof HTMLElement, "null.js:15"), await at(u(t, "data-sudo-required")) && (t.removeAttribute("data-sudo-required"), t instanceof HTMLFormElement ? v(t) : t.click())
            }
            window.WebSocket && (i(".js-socket-channel[data-channel]", {
                add: function(e) {
                    if (Yl || au(), Yl)
                        for (const t of lu(e)) Yl.readyState !== WebSocket.OPEN || Xl[t] || Yl.send(`subscribe:${t}`), Xl[t] = !0, null == Ql[t] && (Ql[t] = []), Ql[t].push(e)
                },
                remove: function(e) {
                    for (const t of lu(e)) {
                        const n = Ql[t];
                        if (n) {
                            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                        }
                    }
                }
            }), window.addEventListener("online", cu), window.addEventListener("offline", function() {
                Yl && Yl.close(nu, "navigator-offline")
            })), d(".js-sponsorship-amount", b(async function(e) {
                s(document, ".js-sponsorship-submit", HTMLInputElement).disabled = !0;
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:16");
                const n = parseInt(t.value, 10).toFixed(),
                    o = u(t, "data-url"),
                    i = new URL(o, window.location.origin),
                    r = new URLSearchParams(i.search.slice(1));
                r.set("amount", n), i.search = r.toString();
                const c = await $(document, i),
                    l = s(document, ".js-sponsorship-preview");
                l.innerHTML = "", l.appendChild(c)
            }, 300)), i("form.js-auto-replay-enforced-sso-request", {
                constructor: HTMLFormElement,
                initialize(e) {
                    v(e)
                }
            }), r("toggle", ".js-build-status .js-dropdown-details", function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-status-dropdown-menu");
                if (!n) return;

                function o() {
                    t.hasAttribute("open") || r()
                }

                function i(e) {
                    n.contains(e.target) || r()
                }

                function r() {
                    t.removeAttribute("open"), n.classList.add("d-none"), t.appendChild(n), t.removeEventListener("toggle", o), window.removeEventListener("scroll", i)
                }
                t.addEventListener("toggle", o), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", i, {
                    capture: !0,
                    passive: !0
                }), n.classList.remove("d-none"), s(n, ".js-details-container").classList.add("open");
                const a = document.body;
                a && n.classList.contains("js-append-menu-to-body") && (a.appendChild(n), uu(a, n, t))
            }, {
                capture: !0
            }), r("click", ".js-status-retry", e => {
                du(e.currentTarget)
            }), i(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", mu, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", mu)
                }
            }), r("submit", "form[data-sudo-required]", fu), r("click", "button[data-sudo-required]", fu);
            const gu = {};

            function pu(e, t) {
                const n = function(e, t) {
                    let n, s, o, i = !1,
                        r = !1,
                        a = !1;
                    return {
                        install: function() {
                            e.addEventListener("paste", l), e.addEventListener("input", u), e.addEventListener("keydown", m)
                        },
                        uninstall: function() {
                            e.removeEventListener("paste", l), e.removeEventListener("input", u), e.removeEventListener("keydown", m), c(!0)
                        }
                    };

                    function c() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!t && !r) return;
                        e.removeAttribute("role");
                        const n = hu(e);
                        n && (ks(e, n), n.removeEventListener("combobox-commit", f), n.hidden = !0, r = !1)
                    }

                    function l() {
                        i = !0, c()
                    }

                    function u() {
                        i ? i = !1 : d()
                    }
                    async function d() {
                        const i = function() {
                            const n = e.selectionEnd,
                                s = e.value.substring(0, n).match(t.matchRegExp);
                            if (s) return function(e, t) {
                                const n = e - t[2].length,
                                    s = e;
                                return {
                                    query: t[3],
                                    startIndex: n,
                                    endIndex: s
                                }
                            }(n, s)
                        }();
                        if (i) {
                            if (n && n === i.query) return;
                            if (n = i, a) return;
                            s || await async function() {
                                const i = e.getAttribute(t.urlAttribute);
                                if (!i) throw new Error("Require URL");
                                let r = gu[i];
                                if (!r) {
                                    try {
                                        a = !0;
                                        const e = new Request(i);
                                        !0 === t.fetchJson && e.headers.set("accept", "application/json"), r = await wt(e)
                                    } finally {
                                        a = !1
                                    }
                                    gu[i] = r
                                }
                                if (!0 === t.fetchJson) o = await r.clone().json(), s = document.createElement("div");
                                else {
                                    const e = await r.clone().text(),
                                        t = g(document, e).children[0];
                                    s = t
                                }
                                document.activeElement === e && (n = null, d())
                            }();
                            const l = await async function() {
                                if (!n) return !1;
                                if (!s) return !1;
                                let i;
                                if (!0 === t.fetchJson) {
                                    if (null == o) return !1;
                                    i = t.search(n.query, s, o)
                                } else i = t.search(n.query, s);
                                if (!i) return !1;
                                if (i > 0) {
                                    const n = (!0 === t.fetchJson ? s.children[0] : s).cloneNode(!0);
                                    n.hidden = !0;
                                    const o = hu(e);
                                    return n.id || (n.id = `suggester-${Math.floor(1e5*Math.random()).toString()}`), e.setAttribute("aria-owns", n.id), o ? o.replaceWith(n) : e.after(n), !0
                                }
                                return !1
                            }();
                            n && l ? function(t) {
                                if (e !== document.activeElement) return;
                                const n = Is(e, t + 1),
                                    s = n.top,
                                    o = n.left,
                                    i = hu(e);
                                if (!i) return;
                                r = !0, i.hidden = !1, i.style.top = `${s}px`, i.style.left = `${o}px`, e.setAttribute("role", "combobox"), Ts(e, i), i.addEventListener("combobox-commit", f), Hs(e, i)
                            }(n.startIndex) : c()
                        } else n = null, c()
                    }

                    function m(e) {
                        "Escape" === e.key && (c(!0), e.stopImmediatePropagation(), e.preventDefault())
                    }

                    function f(s) {
                        let o = s.target;
                        const i = o;
                        if (!(i instanceof HTMLElement)) return;
                        const r = t.getValue ? t.getValue(i) : function(e) {
                            return e.getAttribute("data-value")
                        }(i);
                        if (!r) return;
                        if (!n) return;
                        let a = e.value.substring(0, n.endIndex);
                        const l = e.value.substring(n.endIndex);
                        a = a.replace(t.matchRegExp, t.replacePattern.replace("$value", r)), e.value = a + l, c(), e.focus(), e.selectionStart = a.length, e.selectionEnd = a.length
                    }
                }(e, t);
                return e.addEventListener("focus", n.install), e.addEventListener("focusout:delay", n.uninstall), document.activeElement === e && n.install(), {
                    unsubscribe: () => {
                        e.removeEventListener("focus", n.install), e.removeEventListener("focusout:delay", n.uninstall)
                    }
                }
            }

            function hu(e) {
                return document.getElementById(e.getAttribute("aria-owns") || "")
            }
            const ju = {
                urlAttribute: "data-suggest-emoji",
                matchRegExp: /(^|\s|\()(:([a-z0-9\-+_]*))$/i,
                replacePattern: "$1$value ",
                getValue(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    const t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                },
                search(e, t) {
                    const n = t.querySelector("ul");
                    if (!n) return 0;
                    const s = ` ${e.toLowerCase().replace(/_/g," ")}`;
                    return O(n, s, {
                        limit: 5,
                        text: bu,
                        score: Lu
                    })
                }
            };
            i("[data-suggest-emoji]", {
                subscribe: e => e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement ? pu(e, ju) : {
                    unsubscribe() {}
                }
            });
            const vu = {};

            function bu(e) {
                const t = e.getAttribute("data-emoji-name") || "";
                return vu[t] = ` ${function(e){return(e.getAttribute("data-text")||"").trim().toLowerCase()}(e).replace(/_/g," ")}`, t
            }

            function Lu(e, t) {
                const n = vu[e].indexOf(t);
                return n > -1 ? 1e3 - n : 0
            }
            const yu = {
                fetchJson: !0,
                urlAttribute: "data-suggest-issue",
                matchRegExp: /(^|\s|\()(#([a-z0-9\-_\/]*))$/i,
                replacePattern: "$1#$value ",
                search(e, t, n) {
                    const s = new RegExp(`\\b${e}`),
                        o = /^\d+$/.test(e) ? e => (function(e, t) {
                            const n = e.search(t);
                            return n > -1 ? 1e3 - n : 0
                        })(e, s) : t => Tt(t, e),
                        i = F(n, e, {
                            limit: 5,
                            text: e => `${e.number} ${e.title.trim().toLowerCase()}`,
                            score: o
                        });
                    return function(e, t) {
                        const n = e => os `
      <li role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
        <small>#${e.number}</small> ${e.title}
      </li>`;
                        rs((e => os `
    <div class="suggester-container">
      <div class="suggester">
        <ul role="listbox" class="suggestions">
          ${e.map(n)}
        </ul>
      </div>
    </div>`)(e), t)
                    }(i, t), i.length
                }
            };
            i("[data-suggest-issue]", {
                subscribe: e => e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement ? pu(e, yu) : {
                    unsubscribe() {}
                }
            });
            const Eu = {
                fetchJson: !0,
                urlAttribute: "data-suggest-mention",
                matchRegExp: /(^|\s|\()(@([a-z0-9\-_\/]*))$/i,
                replacePattern: "$1@$value ",
                search(e, t, n) {
                    const s = F(n, e, {
                        limit: 5,
                        score: t => Tt(t, e),
                        text: e => e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase()
                    });
                    return function(e, t) {
                        const n = e => {
                            const t = "user" === e.type ? e.login : e.name,
                                n = "user" === e.type ? e.name : e.description;
                            return os `
      <li
        role="option"
        id="suggester-${e.id}-${e.type}-${t}"
        data-value="${t}">
        <span>${t}</span>
        <small>${n}</small>
      </li>`
                        };
                        rs((e => os `
    <div class="suggester-container">
      <div class="suggester">
        <ul role="listbox" class="suggestions">
          ${e.map(n)}
        </ul>
      </div>
    </div>`)(e), t)
                    }(s, t), s.length
                }
            };

            function wu(e, t) {
                const n = o(e, ".js-survey-question-form"),
                    i = s(n, "input.js-survey-other-text", HTMLInputElement);
                n.classList.toggle("is-other-selected", t), i.hidden = !t, t ? (i.required = !0, i.focus()) : i.required = !1, L(i, "change")
            }
            i("[data-suggest-mention]", {
                subscribe: e => e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement ? pu(e, Eu) : {
                    unsubscribe() {}
                }
            }), r("change", "select.js-survey-select", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLSelectElement, "null.js:24"), wu(t, t.options[t.selectedIndex].classList.contains("js-survey-option-other"))
            }), r("change", "input.js-survey-radio", function(e) {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:30"), wu(t, t.classList.contains("js-survey-radio-other"))
            }), i(".js-tagsearch-popover", {
                constructor: HTMLElement,
                subscribe(e) {
                    const t = s(document, ".js-file-line-container, .js-code-block-container"),
                        n = s(e, ".js-tagsearch-popover-content"),
                        o = new WeakMap,
                        i = new WeakMap;
                    let r;
                    async function c(n) {
                        const s = function(e, t, n) {
                            let s, o;
                            if (document.caretPositionFromPoint) {
                                const e = document.caretPositionFromPoint(t, n);
                                e && (s = e.offsetNode, o = e.offset)
                            } else if (document.caretRangeFromPoint) {
                                const e = document.caretRangeFromPoint(t, n);
                                e && (s = e.startContainer, o = e.startOffset)
                            }
                            if (!s || "number" != typeof o) return;
                            const i = s.textContent;
                            if (!i) return null;
                            const r = function(e, t, n) {
                                let s;
                                for (; s = t.exec(e);) {
                                    const e = s.index + s[0].length;
                                    if (s.index < n && n < e) return [s[0], s.index, e]
                                }
                                return null
                            }(i, e, o);
                            if (!r) return null;
                            const a = document.createRange();
                            return a.setStart(s, r[1]), a.setEnd(s, r[2]), a
                        }(/\w+[!?]?/g, n.clientX, n.clientY);
                        if (!s) return;
                        const r = s.commonAncestorContainer.parentElement;
                        a(r, "null.js:23");
                        for (const e of r.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(e)) return;
                        const c = s.toString();
                        if (!c || c.match(/\n|\s|[();&.=",]/)) return;
                        let d = i.get(r);
                        if (d || (d = new Set, i.set(r, d)), d.has(c)) return;
                        d.add(c);
                        let m = u(e, "data-tagsearch-lang");
                        if ("HTML+ERB" === m) {
                            if (!r.closest(".pl-sre")) return;
                            m = "Ruby"
                        }
                        if (t.classList.contains("js-code-block-container") && !(m = function(e) {
                                const t = e.closest(".highlight");
                                if (t)
                                    for (const n of t.classList) switch (n) {
                                        case "highlight-source-go":
                                            return "Go";
                                        case "highlight-source-js":
                                            return "JavaScript";
                                        case "highlight-source-python":
                                            return "Python";
                                        case "highlight-source-ruby":
                                            return "Ruby";
                                        case "highlight-source-ts":
                                            return "TypeScript"
                                    }
                                return null
                            }(r))) return;
                        const f = await async function(e, t, n) {
                            const s = u(e, "data-tagsearch-url"),
                                o = u(e, "data-tagsearch-path"),
                                i = u(e, "data-tagsearch-ref"),
                                r = new URL(s, window.location.origin),
                                a = new URLSearchParams;
                            a.set("q", t), a.set("context", o), a.set("ref", i), a.set("lang", n), r.search = a.toString();
                            const c = await p(r);
                            return /js-tagsearch-no-definitions/.test(c) ? "" : c
                        }(e, c, m);
                        if (!f) return;
                        const g = document.createElement("span");
                        g.classList.add("pl-token"), g.addEventListener("click", l), o.set(g, f), s.surroundContents(g)
                    }

                    function l(t) {
                        if (t.altKey || t.ctrlKey || t.metaKey) return;
                        const s = t.currentTarget;
                        a(s instanceof HTMLElement, "null.js:72"), s === r ? m() : (function(e) {
                            r && r.classList.remove("active");
                            (r = e).classList.add("active"), n.innerHTML = o.get(e) || "", d(e);
                            const t = e.closest(".js-file-line");
                            t && function(e) {
                                const t = e.id.replace(/^LC/, ""),
                                    s = n.querySelector(".js-tagsearch-looking-at-def"),
                                    o = n.querySelector(".js-tagsearch-defined-on");
                                if (!t || !s || !o) return;
                                u(s, "data-row") === t && (s.hidden = !1, o.hidden = !0)
                            }(t)
                        }(s), function() {
                            if (!e.hidden) return;
                            e.hidden = !1, document.addEventListener("click", g), document.addEventListener("keyup", h), window.addEventListener("resize", f, {
                                passive: !0
                            })
                        }()), t.preventDefault()
                    }

                    function d(t) {
                        const n = t.getClientRects()[0];
                        e.style.position = "absolute", e.style.top = `${window.scrollY+n.bottom+7}px`, e.style.left = `${window.scrollX+n.left}px`
                    }

                    function m() {
                        e.hidden || (e.hidden = !0, r && r.classList.remove("active"), r = null, document.removeEventListener("click", g), document.removeEventListener("keyup", h), window.removeEventListener("resize", f))
                    }

                    function f() {
                        r instanceof HTMLElement && d(r)
                    }

                    function g(t) {
                        const n = t.target;
                        n instanceof Node && (a(r, "null.js:149"), e.contains(n) || r.contains(n) || m())
                    }

                    function h(e) {
                        switch (e.key) {
                            case "Escape":
                                m()
                        }
                    }
                    return t.addEventListener("mousemove", c), {
                        unsubscribe() {
                            t.removeEventListener("mousemove", c)
                        }
                    }
                }
            });
            const Tu = new E,
                ku = null;
            const Au = b(async function() {
                const e = s(document, ".js-quick-pull-new-branch-name", HTMLInputElement),
                    t = e.value,
                    n = e.getAttribute("data-generated-branch");
                if (null == n) throw new Error("Missing attribute `data-generated-branch`");
                const o = s(document, ".js-quick-pull-normalization-info"),
                    i = e.getAttribute("data-check-authenticity-token") || "",
                    r = new FormData;
                r.append("ref", t), r.append("authenticity_token", i);
                const a = u(e, "data-check-url"),
                    c = z(a, {
                        method: "post",
                        body: r
                    }),
                    l = await Tu.push(c);
                try {
                    ! function(i) {
                        if (t !== e.value) return;
                        const r = i.normalized_ref;
                        o.innerHTML = null == i.message_html ? "" : i.message_html, r || (s(o, "code").textContent = n), ku && (ku.value = r)
                    }(l)
                } catch (Nd) {
                    t === e.value && ku && (ku.value = t)
                }
            }, 200);

            function Mu() {
                return document.querySelectorAll(".js-template-editor").length > 0
            }

            function Su(e) {
                e.classList.toggle("section-focus")
            }

            function xu() {
                return document.querySelectorAll(".js-template-form.is-loading").length > 0 ? "loading" : document.querySelectorAll(".js-template-form.is-errored").length > 0 ? "error" : "ok"
            }

            function Hu() {
                const e = s(document, ".js-commit-templates-form", HTMLFormElement),
                    t = s(e, ".js-blob-submit", HTMLButtonElement),
                    n = s(document, ".js-template-commit-form-error-message"),
                    o = s(document, ".js-template-commit-form-loading-message");
                switch (xu()) {
                    case "loading":
                        n.classList.add("d-none"), o.classList.remove("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
                        break;
                    case "error":
                        n.classList.remove("d-none"), o.classList.add("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
                        break;
                    default:
                        n.classList.add("d-none"), o.classList.add("d-none"), e.removeAttribute("disabled"), t.removeAttribute("disabled")
                }
            }
            async function Cu(e) {
                e.classList.add("is-loading"), Hu();
                const t = s(e, '[name="filename"]', HTMLInputElement).value,
                    i = {};
                for (const o of l(document, ".js-template-form", HTMLFormElement)) {
                    const e = s(o, '[name="filename"]', HTMLInputElement).value;
                    i[e] = {};
                    for (const t of qe(o)) {
                        var r = n(t, 2);
                        const s = r[0],
                            o = r[1];
                        i[e][s] = o
                    }
                }
                const a = new FormData(e);
                a.append("current", t), a.append("templates", JSON.stringify(i));
                const c = await z(e.action, {
                        method: "POST",
                        body: a
                    }),
                    u = g(document, c.html);
                o(e, ".js-template-preview").replaceWith(u);
                const d = s(document, ".js-hidden-template-fields");
                let m = d.querySelector(`[data-filename="${c.filename}"]`);
                m instanceof HTMLInputElement ? m.value = c.markdown : ((m = document.createElement("input")).type = "hidden", m.name = `templates[][${c.filename}]`, m.setAttribute("data-filename", c.filename), m.value = c.markdown, d.append(m)), e.classList.remove("is-loading"), Hu()
            }

            function qu() {
                for (const e of l(document, ".js-template-form", HTMLFormElement)) Cu(e)
            }

            function Iu(e) {
                if (function(e) {
                        let t;
                        try {
                            t = new URL(e.url)
                        } catch (n) {
                            return !0
                        }
                        return t.host !== window.location.host
                    }(e) || function(e) {
                        return /[?&]_pjax=/.test(e.url)
                    }(e)) return;
                const t = function() {
                    const e = document.querySelector(".js-timeline-marker");
                    return null != e ? e.getAttribute("data-last-modified") : null
                }();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }

            function _u(e) {
                ! function(e) {
                    const t = e.closest("details, .js-details-container");
                    if (!t) return;
                    a(t instanceof HTMLElement, "null.js:79"), "DETAILS" === t.nodeName ? t.setAttribute("open", "open") : kt(t) || He(t)
                }(e);
                const t = e.querySelector(`[href='#${e.id}']`);
                t && t.click()
            }

            function $u() {
                return window.location.hash.slice(1)
            }
            i(".js-custom-fields-drag-container", e => {
                ot.create(e, {
                    draggable: ".js-custom-field-draggable",
                    handle: ".js-draggable-box-icon"
                })
            }), i(".js-template-form .js-issue-labels", {
                add(e) {
                    const t = e.closest(".js-issue-template-labels-container");
                    if (!t) return;
                    const n = s(t, ".js-issue-template-labels", HTMLInputElement);
                    n.value = "";
                    for (const s of e.children) {
                        const e = s.getAttribute("data-name");
                        e && !n.value.includes(e) && ("" === n.value ? n.value = e : n.value = `${n.value}, ${e}`)
                    }
                }
            }), i(".js-template-form .js-issue-assignees", {
                add(e) {
                    const t = e.closest(".js-issue-template-assignees-container");
                    a(t instanceof HTMLElement, "null.js:106");
                    const n = s(t, ".js-issue-template-assignees", HTMLInputElement);
                    n.value = "";
                    for (const s of e.children) {
                        const e = s.querySelector("span");
                        if (e) {
                            const t = e.getAttribute("data-assignee-name");
                            t && !n.value.includes(t) && ("" === n.value ? n.value = t : n.value = `${n.value}, ${t}`)
                        }
                    }
                }
            }), r("change", ".js-quick-pull-choice-option", function(e) {
                if (!Mu()) return;
                const t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:134"), s(document, ".js-commit-branch-name").classList.toggle("d-none", "quick-pull" !== t.value), s(document, ".js-quick-pull-new-branch-name").toggleAttribute("required", "quick-pull" === t.value)
            }), d(".js-quick-pull-new-branch-name", function(e) {
                if (!Mu()) return;
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:148");
                const n = t.value;
                s(document, ".js-quick-pull-target-branch", HTMLInputElement).value = n, n.length && Au()
            }), d(".js-synced-template-input", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:159");
                const n = t.getAttribute("data-sync");
                if (!n) return;
                const i = o(t, ".js-sync-container"),
                    r = l(i, `[data-sync-with="${n}"]`),
                    c = t.value;
                if ("" !== c.trim()) {
                    for (const e of r) e.textContent = t.value;
                    if ("name" === n) {
                        s(i, ".js-sync-filename", HTMLInputElement).value = `${c.replace(/[^\w]/g,"-")}.md`.toLowerCase()
                    }
                } else
                    for (const s of r) {
                        const e = s.getAttribute("data-sync-blank");
                        e && (s.innerHTML = `<span class="text-gray">${e}</span>`)
                    }
            }), r("submit", ".js-template-form", function(e) {
                e.preventDefault();
                const t = e.currentTarget;
                a(t instanceof HTMLFormElement, "null.js:299"), Cu(t)
            }), r("click", ".js-toggle-template-commit", function() {
                const e = s(document, ".js-template-commit-pane");
                e.classList.toggle("d-none"), e.classList.contains("d-none") || qu()
            }), r("submit", ".js-commit-templates-form", function(e) {
                "ok" !== xu() && e.preventDefault(), Hu()
            }), r("click", ".js-refresh-template-content", async function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-template-form"),
                    i = s(n, ".js-template-content-preview");
                i.innerHTML = '<span class="text-gray">Loading preview...</span>';
                const r = s(n, ".js-template-content-textarea", HTMLTextAreaElement).value,
                    a = t.getAttribute("data-markdown-preview-url"),
                    c = t.getAttribute("data-markdown-preview-token");
                if (!a || !c) return;
                const l = new FormData;
                l.append("markdown", r), l.append("authenticity_token", c);
                const u = await p(a, {
                    method: "POST",
                    body: l
                });
                i.innerHTML = u
            }), r("click", ".js-custom-template-toggle", e => {
                const t = e.target,
                    n = o(t, ".js-template-preview"),
                    i = !n.classList.contains("expand-preview");
                if (function() {
                        const e = document.querySelectorAll(".js-template-preview");
                        for (const t of e) t.classList.remove("expand-preview")
                    }(), i) n.classList.add("expand-preview"), n.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                else {
                    Cu(s(n, ".js-template-form", HTMLFormElement))
                }
            }), r("click", ".js-remove-template-button", function(e) {
                const t = o(e.target, ".js-template-preview"),
                    n = u(t, "data-filename"),
                    i = s(document, ".js-hidden-template-fields"),
                    r = s(document, ".js-toggle-template-commit"),
                    a = i.querySelector(`[data-filename="${n}"]`);
                a && a.remove(), r.removeAttribute("disabled"), t.remove(), qu()
            }), r("click", ".js-append-custom-field-option", function(e) {
                const t = e.target,
                    n = t.getAttribute("data-source");
                if (!n) return;
                const o = s(document, `#${n}`);
                t.insertAdjacentHTML("beforebegin", o.innerHTML)
            }), r("click", ".js-remove-custom-field-option", function(e) {
                o(e.target, ".js-custom-field-option").remove()
            }), r("click", ".js-edit-custom-field", e => {
                Su(o(e.target, ".js-custom-field-editor"))
            }), r("click", ".js-edit-custom-field-header", function(e) {
                o(e.target, ".js-custom-field-header").classList.toggle("section-focus"), s(document, ".js-toggle-template-commit").removeAttribute("disabled")
            }), r("click", ".js-remove-custom-field", function(e) {
                o(e.target, ".js-custom-field-editor").remove()
            }), r("details-menu-selected", ".js-add-template", function(e) {
                let t = e.target;
                const n = s(document, ".js-templates-container"),
                    o = s(document, ".js-toggle-template-commit"),
                    i = t.getAttribute("data-source");
                if (!i) return;
                o.removeAttribute("disabled");
                const r = s(document, `#${i}`);
                n.insertAdjacentHTML("beforeend", r.innerHTML)
            }), r("click", ".js-add-custom-field-button", function(e) {
                const t = e.currentTarget,
                    n = o(t, ".js-template-preview"),
                    i = t.getAttribute("data-source");
                if (!i) return;
                const r = s(document, `#${i}`),
                    a = g(document, r.innerHTML).firstElementChild;
                a instanceof HTMLElement && (Su(a), s(n, ".js-custom-fields-container").insertAdjacentElement("beforeend", a))
            }), i(".js-discussion", function() {
                let e;

                function t() {
                    e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                }
                t(), document.addEventListener("pjax:end", t), i(".js-timeline-item", t => {
                    e.has(t) || function(e) {
                        const t = document.querySelector(".js-global-screen-reader-notice");
                        t && (t.textContent = "", t.textContent = function(e) {
                            return (e.innerText || "").trim()
                        }(e))
                    }(t)
                })
            }), j(".js-needs-timeline-marker-header", function(e, t, n) {
                Iu(n)
            }), r("deprecatedAjaxSend", "[data-remote]", function(e) {
                a(e instanceof CustomEvent, "null.js:51"), Iu(e.detail.request)
            }), ie(function(e) {
                let t = e.target;
                const n = $u();
                n && !t && async function(e) {
                    const t = document.getElementById("js-timeline-progressive-loader");
                    if (!t) return;
                    const n = t.getAttribute("data-timeline-item-src");
                    if (!n) return;
                    const s = new URL(n, window.location.origin),
                        o = new URLSearchParams(s.search.slice(1));
                    let i;
                    o.append("anchor", e), s.search = o.toString();
                    try {
                        i = await $(document, s)
                    } catch (l) {
                        return
                    }
                    const r = i.querySelector(".js-timeline-item");
                    if (!r) return;
                    const a = r.getAttribute("data-gid");
                    if (!a) return;
                    const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                    if (c) {
                        c.replaceWith(r);
                        const t = document.getElementById(e);
                        t && _u(t)
                    } else {
                        const t = document.getElementById("js-progressive-timeline-item-container");
                        t && t.replaceWith(i);
                        const n = document.getElementById(e);
                        n && _u(n)
                    }
                }(n)
            }), i(".js-timeline-progressive-focus-container", function(e) {
                const t = $u();
                if (!t) return;
                const n = document.getElementById(t);
                n && e.contains(n) && _u(n)
            });
            const Ru = "navigationStart";

            function Nu() {
                const e = {};
                e.crossBrowserLoadEvent = Date.now();
                const t = window.performance && window.performance.timing;
                if (t)
                    for (const s in t) {
                        const n = t[s];
                        "number" == typeof n && (e[s] = n)
                    } else {
                        const t = function() {
                            const e = pe(Ru);
                            if (e) return parseInt(e, 10)
                        }();
                        null != t && (e.simulatedNavigationStart = t)
                    }
                const n = function() {
                    if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) {
                        const e = window.performance.getEntriesByType("paint");
                        if (e.length) {
                            const t = e.find(e => "first-paint" === e.name);
                            if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6)
                        }
                    }
                }();
                return null != n && (e.chromeFirstPaintTime = n), e
            }

            function Du(e) {
                const t = o(e, ".js-topic-save-notice-container"),
                    n = s(t, ".js-repo-topics-save-notice");
                n.classList.remove("d-none"), n.classList.add("d-inline-block", "anim-fade-in"), setTimeout(() => {
                    n.classList.remove("d-inline-block"), n.classList.add("d-none")
                }, 1900)
            }

            function Bu(e) {
                const t = s(e, ".js-topic-suggestions-box");
                t.querySelector(".js-topic-suggestion") || t.remove()
            }
            async function Pu(e) {
                const t = e.querySelector(".js-topic-suggestions-container");
                if (!t) return;
                const n = u(t, "data-url"),
                    s = await $(document, n);
                t.innerHTML = "", t.appendChild(s)
            }

            function Fu() {}

            function Ou(e) {
                return s(e, '[role="tablist"] [role="tab"][aria-selected="true"]')
            }

            function Uu(e) {
                const t = l(e, '[role="tablist"] [role="tab"]'),
                    n = Ou(e);
                return l(e, '[role="tabpanel"]', HTMLElement)[Array.from(t).indexOf(n)]
            }

            function zu(e) {
                const t = e.querySelector(".js-emoji-picker-filter"),
                    n = s(e, ".js-emoji-picker-filter-tab-button"),
                    o = s(e, ".js-emoji-picker-all-emoji");
                t && (a(t instanceof HTMLInputElement, "null.js:86"), t.value = ""), o.setAttribute("value", ""), n.hidden = !0
            }

            function Vu(e) {
                e.classList.add("selected-emoji")
            }

            function Wu(e) {
                if (!(e.target instanceof HTMLElement)) return;
                const t = e.target.closest(".js-emoji-picker");
                if (t && (a(t instanceof HTMLElement, "null.js:267"), !t.hidden)) switch (e.key) {
                    case "ArrowRight":
                    case "ArrowLeft":
                    case "ArrowUp":
                    case "ArrowDown":
                        e.preventDefault(),
                            function(e, t) {
                                const n = Uu(e),
                                    s = Array.from(n.querySelectorAll(".js-emoji-button")),
                                    o = n.querySelector(".selected-emoji.js-emoji-button"),
                                    i = function(e) {
                                        let t, n = 0;
                                        const s = e[0].getBoundingClientRect().top;
                                        for (const o of e) {
                                            if (s < (t = o.getBoundingClientRect()).top) break;
                                            n += 1
                                        }
                                        return n
                                    }(s),
                                    r = function(e, t) {
                                        const n = [
                                            []
                                        ];
                                        let s = 0;
                                        for (let o = 0; o < e.length; o++) o > 0 && o % t == 0 && (s += 1, n.push([])), n[s].push(e[o]);
                                        return n
                                    }(s, i);
                                let a = 0,
                                    c = 0;
                                if (o) {
                                    const e = function(e, t) {
                                        let n, s, o = 0,
                                            i = 0;
                                        for (let r = 0; r < e.length; r++) {
                                            if ((s = (n = e[r]).indexOf(t)) > -1) {
                                                i = s;
                                                break
                                            }
                                            o += 1
                                        }
                                        return {
                                            row: o,
                                            col: i
                                        }
                                    }(r, o);
                                    switch (a = e.row, c = e.col, o.classList.remove("selected-emoji"), t) {
                                        case "ArrowRight":
                                            c += 1;
                                            break;
                                        case "ArrowDown":
                                            a += 1;
                                            break;
                                        case "ArrowLeft":
                                            c -= 1;
                                            break;
                                        case "ArrowUp":
                                            a -= 1
                                    }
                                }
                                const l = r.length - 1,
                                    u = c > r[l].length - 1,
                                    d = a === l;
                                a < 0 ? (a = l, u && (a -= 1)) : (a > l || d && u && "ArrowDown" === t) && (a = 0);
                                const m = r[a].length - 1;
                                c < 0 ? c = m : c > m && (c = 0);
                                const f = r[a][c];
                                Vu(f), f.focus()
                            }(t, e.key)
                }
            }

            function Ku(e) {
                e.hidden = !0, document.removeEventListener("keydown", Wu)
            }

            function Ju(e) {
                document.addEventListener("click", t => {
                    if (t.target instanceof HTMLElement) {
                        t.target.closest(".js-emoji-picker") !== e && Ku(e)
                    }
                });
                const t = s(e, ".js-emoji-picker-all-emoji"),
                    n = s(e, ".js-emoji-picker-no-results"),
                    i = s(e, ".js-emoji-picker-results-header");
                t.addEventListener("fuzzy-list-sorted", e => {
                    if (!(e instanceof CustomEvent)) return;
                    const s = Number(e.detail) > 0;
                    n.hidden = s, t.hidden = !s, i.hidden = !s
                });
                const r = e.querySelector(".js-emoji-picker-filter");
                r && (a(r instanceof HTMLInputElement, "null.js:333"), r.addEventListener("input", () => (function(e) {
                    const t = o(e, ".js-emoji-picker"),
                        n = Ou(t),
                        i = s(t, ".js-emoji-picker-filter-tab-button", HTMLButtonElement);
                    if (s(t, ".js-emoji-picker-all-emoji").setAttribute("value", e.value), n.classList.contains("js-emoji-picker-filter-tab-button") || n.classList.add("emoji-picker-prior-selected-tab-button"), e.value) i.hidden = !1, "true" === i.getAttribute("aria-selected") || (i.click(), e.focus());
                    else {
                        i.hidden = !0;
                        const e = t.querySelector(".emoji-picker-prior-selected-tab-button");
                        e instanceof HTMLButtonElement && e.click()
                    }
                })(r)))
            }

            function Gu(e) {
                return s(e, ".js-user-status-details").hasAttribute("open")
            }

            function Xu(e) {
                const t = e.querySelector(".js-emoji-picker");
                t && (! function(e) {
                    const t = s(e, ".js-original-emoji-category"),
                        n = s(e, ".js-original-emoji-category-tab", HTMLElement),
                        o = Ou(e),
                        i = Uu(e),
                        r = e.querySelector(".js-originally-selected-emoji");
                    if (r) {
                        const t = e.querySelector(".selected-emoji");
                        t && t.classList.remove("selected-emoji"), r.classList.add("selected-emoji")
                    }
                    o.removeAttribute("aria-selected"), t.setAttribute("aria-selected", "true"), i.hidden = !0, n.hidden = !1
                }(t), zu(t), Ku(t))
            }

            function Qu(e) {
                const t = s(e, ".js-user-status-original-emoji"),
                    n = s(e, ".js-user-status-custom-emoji"),
                    o = s(e, ".js-user-status-no-emoji-icon");
                n.innerHTML = t.innerHTML, o.hidden = n.hasChildNodes()
            }

            function Yu(e, t) {
                Qu(e),
                    function(e, t) {
                        const n = e.querySelector(".js-user-status-emoji-picker");
                        if (!(n instanceof IncludeFragmentElement)) return;
                        let s = u(n, "data-url");
                        if (t) {
                            s = new URL(s, window.location.origin);
                            const e = new URLSearchParams(s.search.slice(1));
                            e.append("show_picker", "1"), s.search = e.toString()
                        }
                        n.setAttribute("src", s.toString())
                    }(e, t),
                    function(e) {
                        const t = e.querySelector(".js-user-status-org-picker");
                        if (!(t instanceof IncludeFragmentElement)) return;
                        const n = u(t, "data-url");
                        t.src = n.toString()
                    }(e)
            }

            function Zu(e) {
                const t = s(e, ".js-user-status-suggestions"),
                    n = s(e, ".js-user-status-message-field", HTMLInputElement).value.trim().length > 0;
                t.classList.toggle("collapsed", n), t.setAttribute("aria-expanded", n.toString())
            }

            function ed(e, t) {
                Gu(e) ? function(e) {
                    const t = s(e, ".js-user-status-message-field", HTMLInputElement);
                    Qu(e), Xu(e), t.value = t.defaultValue, xo(e)
                }(e) : Yu(e, t), od(e)
            }

            function td(e, t) {
                s(e, ".js-user-status-custom-emoji").innerHTML = t.innerHTML, s(e, ".js-user-status-no-emoji-icon").hidden = !0
            }

            function nd(e, t) {
                s(e, ".js-user-status-emoji-field", HTMLInputElement).value = t.value
            }

            function sd(e, t) {
                if ("Escape" === U(t)) {
                    const t = e.closest(".js-user-status-container");
                    if (!t) return;
                    e.value = e.defaultValue, ed(t, !1)
                }
            }

            function od(e) {
                const t = s(e, ".js-user-status-submit", HTMLButtonElement),
                    n = s(e, ".js-clear-user-status-button", HTMLButtonElement),
                    o = s(e, ".js-user-status-message-field", HTMLInputElement),
                    i = o.value.trim();
                let r = !1,
                    a = !1;
                var c;
                Mo(c = o) - ee(c.value) < 0 && (r = !0), i.length < 1 && (r = !0, n.classList.contains("js-user-status-exists") || (a = !0)), t.disabled = r, n.disabled = a
            }

            function id(e) {
                return o(e, ".js-user-status-container")
            }

            function rd(e, t) {
                if (Gu(e)) return;
                const n = e.querySelectorAll(".js-toggle-user-status-edit.Details-content--closed");
                for (const s of n) s.classList.toggle("text-blue", t), s.classList.toggle("link-gray-dark", !t)
            }

            function ad(e) {
                if (!(e.target instanceof Element)) return;
                rd(o(e.target, ".js-user-status-container"), !0)
            }

            function cd(e) {
                if (!(e.target instanceof Element)) return;
                rd(o(e.target, ".js-user-status-container"), !1)
            }

            function ld(e) {
                let t = e.currentTarget;
                a(t instanceof Element, "null.js:39"), Ze(t) ? function(e) {
                    const t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                    window.onbeforeunload = function(e) {
                        return e.returnValue = t, t
                    }
                }(t) : ud()
            }

            function ud() {
                window.onbeforeunload = null
            }

            function dd(e) {
                let t = e.currentTarget;
                a(t instanceof Element, "null.js:63"), t.hasAttribute("open") || ud()
            }

            function md(e) {
                const t = e.currentTarget;
                if (a(t instanceof Element, "null.js:73"), !t.closest("details[open]")) return;
                let n = !0;
                const s = l(t, "form[data-warn-unsaved-changes]", HTMLFormElement);
                for (const o of s)
                    if (Ze(o)) {
                        const e = u(o, "data-warn-unsaved-changes");
                        n = confirm(e);
                        break
                    } n || e.preventDefault()
            }
            window.performance || window.performance.timing || window.addEventListener("pagehide", function() {
                Ee(Ru, Date.now().toString())
            }), async function() {
                await C, await new Promise(e => setTimeout(e));
                const e = function() {
                    const e = [],
                        t = window.performance;
                    if (t && t.getEntriesByType)
                        for (const n of t.getEntriesByType("resource")) {
                            const t = {};
                            e.push(t);
                            for (const e in n) {
                                const s = n[e];
                                "number" != typeof s && "string" != typeof s || (t[e] = s)
                            }
                        }
                    return e
                }();
                e.length && S({
                    resourceTimings: e
                });
                const t = function() {
                    const e = [],
                        t = window.performance;
                    if (t && t.getEntriesByType)
                        for (const s of t.getEntriesByType("navigation")) {
                            const t = {};
                            e.push(t);
                            for (const e in s) {
                                const n = s[e];
                                "number" != typeof n && "string" != typeof n || (t[e] = n)
                            }
                        }
                    const n = Nu();
                    return n && 0 === e.length && e.push({
                        name: location.href,
                        entryType: "navigation",
                        startTime: 0,
                        duration: n.loadEventEnd - n.navigationStart,
                        initiatorType: "navigation",
                        nextHopProtocol: "http/1.1",
                        type: "navigate",
                        redirectStart: n.redirectStart,
                        redirectEnd: n.redirectEnd,
                        fetchStart: n.fetchStart,
                        domainLookupStart: n.domainLookupStart,
                        domainLookupEnd: n.domainLookupEnd,
                        connectStart: n.connectStart,
                        connectEnd: n.connectEnd,
                        secureConnectionStart: n.secureConnectionStart,
                        requestStart: n.requestStart,
                        responseStart: n.responseStart,
                        responseEnd: n.responseEnd,
                        unloadEventStart: n.unloadEventStart,
                        unloadEventEnd: n.unloadEventEnd,
                        domInteractive: n.domInteractive,
                        domContentLoadedEventStart: n.domContentLoadedEventStart,
                        domContentLoadedEventEnd: n.domContentLoadedEventEnd,
                        domComplete: n.domComplete,
                        loadEventStart: n.loadEventStart,
                        loadEventEnd: n.loadEventEnd
                    }), e
                }();
                t.length && S({
                    navigationTimings: t
                })
            }(), r("click", ".js-toggler-container .js-toggler-target", function(e) {
                if (a(e instanceof MouseEvent, "null.js:41"), a(e.currentTarget, "null.js:42"), 0 !== e.button) return;
                const t = e.currentTarget.closest(".js-toggler-container"),
                    n = e.currentTarget.closest(".js-toggler-container-secondary");
                t.classList.toggle("on"), n && n.classList.toggle("on")
            }), j(".js-toggler-container", async (e, t) => {
                e.classList.remove("success", "error"), e.classList.add("loading");
                try {
                    await t.text(), e.classList.add("success")
                } catch (n) {
                    e.classList.add("error")
                } finally {
                    e.classList.remove("loading")
                }
            }), j(".js-accept-topic-form", async function(e, t) {
                await t.html();
                const n = o(e, ".js-topic-form-area"),
                    i = o(e, ".js-topic-suggestion"),
                    r = s(n, ".js-template"),
                    a = s(n, ".js-tag-input-selected-tags"),
                    c = r.cloneNode(!0),
                    l = s(i, 'input[name="input[name]"]', HTMLInputElement).value;
                s(c, "input", HTMLInputElement).value = l, s(c, ".js-placeholder-tag-name").replaceWith(l), c.classList.remove("d-none", "js-template"), a.appendChild(c), i.remove(), Pu(n), Bu(n), Du(e)
            }), r("click", ".js-repo-topics-form-done", function() {
                !async function() {
                    const e = s(document, ".js-topics-list-container"),
                        t = u(e, "data-url"),
                        n = await $(document, t);
                    e.innerHTML = "", e.appendChild(n)
                }()
            }), j(".js-decline-topic-form", async function(e, t) {
                await t.html(), Du(e);
                const n = o(e, ".js-topic-form-area");
                o(e, ".js-topic-suggestion").remove(), Pu(n), Bu(n)
            }), j(".js-repo-topics-edit-form", async function(e, t) {
                const n = o(e, ".js-topic-form-area");
                n.classList.remove("errored"), s(n, ".js-topic-error").textContent = "";
                for (const s of n.querySelectorAll(".js-tag-input-tag.invalid-topic")) s.classList.remove("invalid-topic");
                try {
                    await t.json(), Du(e), Pu(n)
                } catch (i) {
                    const t = i.response.json;
                    if (t.message && (n.classList.add("errored"), s(n, ".js-topic-error").textContent = t.message), t.invalidTopics) {
                        const n = l(e, ".js-topic-input", HTMLInputElement);
                        for (const e of t.invalidTopics)
                            for (const t of n)
                                if (t.value === e) {
                                    o(t, ".js-tag-input-tag").classList.add("invalid-topic")
                                }
                    }
                }
            }), r("tags:changed", ".js-repo-topics-edit-form", function(e) {
                let t = e.target;
                a(t instanceof HTMLFormElement, "null.js:139"), v(t)
            }), r("click", ".js-reveal-hidden-topics", function(e) {
                const t = e.target,
                    n = o(t, ".js-hidden-topics-container").querySelector(".js-hidden-topics");
                n && (n.classList.remove("d-none"), t.remove())
            }), i(".js-touch-events", {
                add(e) {
                    e.addEventListener("click", Fu)
                },
                remove(e) {
                    e.removeEventListener("click", Fu)
                }
            }), r("click", ".js-hide-content-attachment", function(e) {
                e.preventDefault(),
                    function(e) {
                        const t = o(e, ".js-content-attachment"),
                            n = u(o(e, "[data-unfurl-hide-url]"), "data-unfurl-hide-url"),
                            s = u(o(e, "[data-unfurl-authenticity-token]"), "data-unfurl-authenticity-token"),
                            i = u(e, "data-id"),
                            r = new XMLHttpRequest;
                        r.onload = function() {
                            r.status >= 200 && r.status < 300 && t.remove()
                        }, r.open("POST", n);
                        const a = new FormData;
                        a.append("id", i), a.append("authenticity_token", s), r.send(a)
                    }(e.currentTarget)
            }), i(".js-content-attachment .max--md", function(e) {
                const t = s(e, ".markdown-body");
                var n;
                (t.clientHeight < 188 || "" === (n = t).textContent.trim() && 1 === n.querySelectorAll("img").length) && (e.classList.remove("max--md"), s(e, ".Details-content--closed").hidden = !0, s(e, ".Details-content--open").hidden = !0)
            }), requestIdleCallback(() => {
                const e = At();
                if (e) {
                    const t = "https:" === location.protocol ? "secure" : "";
                    document.cookie = `tz=${encodeURIComponent(e)}; path=/; ${t}`
                }
            }), r("click", ".js-user-status-expire-button", function(e) {
                const t = e.currentTarget,
                    n = id(t);
                a(t instanceof HTMLButtonElement, "null.js:303"),
                    function(e, t) {
                        const n = s(e, ".js-user-status-expiration-interval-selected"),
                            o = s(e, ".js-user-status-expire-drop-down"),
                            i = s(e, ".js-user-status-expiration-date-input", HTMLInputElement);
                        n.textContent = t.title, i.value = t.value, o.removeAttribute("open")
                    }(n, t)
            }), r("click", ".js-toggle-user-status-edit", function(e) {
                ed(id(e.currentTarget), !!e.target.closest(".js-toggle-user-status-emoji-picker"))
            }), r("click", ".js-toggle-user-status-emoji-picker", function(e) {
                const t = id(e.currentTarget).querySelector(".js-emoji-picker");
                t && t.hidden && setTimeout(() => (function(e) {
                    const t = e.querySelector(".js-emoji-picker-filter"),
                        n = !e.hidden;
                    e.hidden = n, n ? (t && (a(t instanceof HTMLInputElement, "null.js:291"), t.value = ""), document.removeEventListener("keydown", Wu)) : (t && (a(t instanceof HTMLInputElement, "null.js:297"), t.focus()), document.addEventListener("keydown", Wu))
                })(t), 50)
            }), r("click", ".js-emoji-button", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:326"),
                    function(e) {
                        const t = o(e, ".js-user-status-container"),
                            n = s(t, ".js-emoji-picker");
                        nd(t, e),
                            function(e) {
                                const t = e.querySelector(".selected-emoji");
                                t && t.classList.remove("selected-emoji")
                            }(t), Vu(e), td(t, e), od(t), Ku(n)
                    }(t)
            }), r("click", ".js-user-status-emoji-tab", function(e) {
                ! function(e) {
                    const t = o(e, ".js-emoji-picker"),
                        n = t.querySelector(".js-emoji-picker-filter");
                    zu(t), !t.hidden && n && (a(n instanceof HTMLInputElement, "null.js:101"), n.focus())
                }(e.currentTarget)
            }), m(".js-user-status-message-field", function(e) {
                Zu(id(e))
            }), _("keyup", ".js-user-status-message-field", e => {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:343"), sd(t, e)
            }), _("keyup", ".js-emoji-picker-filter", e => {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:349"), sd(t, e)
            }), r("click", ".js-clear-user-status-button", function(e) {
                const t = e.currentTarget;
                ! function(e) {
                    e.hidden = !0, s(e, ".js-user-status-emoji-field", HTMLInputElement).value = "", s(e, ".js-user-status-no-emoji-icon").hidden = !1, s(e, ".js-user-status-custom-emoji").innerHTML = "";
                    const t = s(e, ".js-user-status-message-field", HTMLInputElement);
                    t.value = "", t.classList.contains("js-characters-remaining-field") && So(t);
                    const n = e.querySelector(".selected-emoji.js-emoji-button");
                    n && n.classList.remove("selected-emoji"), s(e, ".js-user-status-limited-availability-checkbox", HTMLInputElement).checked = !1;
                    const o = e.querySelector(".js-user-status-expiration-date-input");
                    o && o instanceof HTMLInputElement && (o.value = ""), od(e), Zu(e);
                    const i = s(e, ".js-user-status-form", HTMLFormElement);
                    v(i)
                }(o(t, ".js-user-status-container"))
            }), r("click", ".js-predefined-user-status", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:362"),
                    function(e) {
                        const t = o(e, ".js-user-status-container"),
                            n = s(e, ".js-predefined-user-status-emoji"),
                            i = s(e, ".js-predefined-user-status-message"),
                            r = s(t, ".js-user-status-message-field", HTMLInputElement);
                        r.value = i.textContent.trim(), td(t, n), nd(t, e), od(t), Zu(t), r.classList.contains("js-characters-remaining-field") && So(r)
                    }(t)
            }), d(".js-user-status-message-field", function(e) {
                const t = e.target;
                a(t instanceof HTMLElement, "null.js:369");
                const n = o(t, ".js-user-status-form");
                od(n), Zu(n)
            }), r("click", ".js-user-status-org-button", function(e) {
                const t = e.currentTarget;
                a(t instanceof HTMLButtonElement, "null.js:378"),
                    function(e) {
                        const t = o(e, ".js-user-status-container"),
                            n = s(t, ".js-user-status-org-id-field", HTMLInputElement),
                            i = s(t, ".js-user-status-org-details"),
                            r = s(t, ".js-user-status-selected-org"),
                            a = s(e, ".js-user-status-org-display"),
                            c = s(t, ".js-user-status-org-message"),
                            l = e.value,
                            d = "" !== l,
                            m = s(t, ".js-suggester"),
                            f = t.querySelector(".js-user-status-org-button.selected");
                        let g = "";
                        f && f.classList.remove("selected"), e.classList.add("selected"), n.value = l, r.innerHTML = "";
                        const p = a.cloneNode(!0);
                        if (p.hidden = !1, r.appendChild(p), i.removeAttribute("open"), d) {
                            const t = u(c, "data-prefix"),
                                n = u(c, "data-suffix"),
                                s = u(e, "data-org");
                            c.textContent = `${t}${s}${n}`, c.hidden = !1;
                            const o = new URL(u(m, "data-org-url"), window.location.origin),
                                i = new URLSearchParams(o.search.slice(1));
                            i.append("global_id", l), o.search = i.toString(), g = o.toString()
                        } else c.textContent = u(c, "data-none"), c.hidden = !0, g = u(m, "data-no-org-url");
                        m.setAttribute("data-url", g)
                    }(t)
            }), r("change", ".js-user-status-limited-availability-checkbox", function(e) {
                const t = e.target;
                a(t instanceof HTMLInputElement, "null.js:385");
                const n = o(t, ".js-user-status-form"),
                    i = t.checked,
                    r = u(t, "data-default-message"),
                    c = s(n, ".js-user-status-message-field", HTMLInputElement);
                i && c.value.length < 1 ? c.value = r : i || c.value !== r || (c.value = ""), od(n), Zu(n)
            }), j(".js-user-status-form", async function(e, t) {
                const n = s(e, ".js-user-status-form-group");
                let i;
                n.classList.remove("errored");
                try {
                    i = await t.html()
                } catch (l) {
                    return void n.classList.add("errored")
                }
                const r = o(e, ".js-user-status-container"),
                    a = i.html.querySelector(".js-user-status-container");
                r.replaceWith(i.html);
                const c = document.querySelectorAll(".js-user-status-container");
                for (const s of c)
                    if (a !== s) {
                        const e = s.closest(".js-user-status-context");
                        if (e) {
                            const t = u(e, "data-url"),
                                n = await $(document, t);
                            s.replaceWith(n)
                        }
                    }
            }), i(".js-toggle-user-status-edit", function(e) {
                e.addEventListener("mouseenter", ad), e.addEventListener("mouseleave", cd)
            }), i(".js-emoji-picker", e => {
                a(e instanceof HTMLElement, "null.js:75"), Ju(e)
            }), i("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", ld), e.addEventListener("change", ld), e.addEventListener("submit", ud);
                    const t = e.closest("details-dialog");
                    t && (o(t, "details").addEventListener("toggle", dd), t.addEventListener("details-dialog-close", md))
                },
                remove(e) {
                    e.removeEventListener("input", ld), e.removeEventListener("change", ld), e.removeEventListener("submit", ud);
                    const t = e.closest("details-dialog");
                    t && (o(t, "details").removeEventListener("toggle", dd), t.removeEventListener("details-dialog-close", md), ud())
                }
            });
            const fd = "related-issues-hidden";
            let gd;
            async function pd(e) {
                const t = e.value;
                if (gd = t, !t) return [];
                ! function(e) {
                    const t = s(document, ".js-related-issues-spinner");
                    "true" === e.getAttribute("data-user-has-opted-in") && (t.hidden = !1)
                }(e);
                const n = u(e, "data-related-issues-path"),
                    o = await z(We(n, {
                        method: "POST",
                        body: Ed(t, e.getAttribute("data-repository-id"))
                    }));
                return wd(), a(o.data, "null.js:148"), o.data.errors ? [] : o.data.repository.relatedIssues.nodes
            }

            function hd(e, t) {
                if (0 === t.length) return wd(), jd(), s(document, ".js-related-issues-suggestions-results-wrapper").hidden = !0, void
                function() {
                    const e = document.querySelector(".js-related-issues-beta-notice");
                    if (e) {
                        const t = document.querySelector("#first-time-contributor");
                        t && (t.style.top = "25%");
                        const n = document.querySelector("#prior-contributor");
                        n && (n.style.top = "25%"), e.classList.add("d-none")
                    }
                }();
                s(document, ".js-number-of-related-issues", HTMLInputElement).value = `${t.length}`,
                    function(e) {
                        const t = s(document, ".js-related-issues-suggestions-results-container");
                        t.innerHTML = "", t.appendChild(e),
                            function() {
                                if (pe(fd)) return;
                                yd(!0), vd(!0), s(document, ".js-related-issues-results-display").setAttribute("open", "")
                            }(), s(document, ".js-related-issues-suggestions-results-wrapper").hidden = !1
                    }(function(e, t) {
                        const n = s(document, ".js-related-issues-suggestions-template", HTMLTemplateElement),
                            o = document.createDocumentFragment();
                        for (let s = 0; s < t.length; s++) {
                            const i = Td(n, t[s], Mt(t, e.value, s));
                            o.appendChild(i)
                        }
                        return o
                    }(e, t)),
                    function() {
                        const e = document.querySelector(".js-related-issues-beta-notice");
                        if (e) {
                            const t = document.querySelector("#first-time-contributor");
                            t && (t.style.top = "70%");
                            const n = document.querySelector("#prior-contributor");
                            n && (n.style.top = "70%"), e.classList.remove("d-none")
                        }
                    }()
            }

            function jd() {
                yd(!1), vd(!1), s(document, ".js-related-issues-results-display").removeAttribute("open")
            }

            function vd() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                const t = s(document, ".js-related-issues-found-message"),
                    n = s(document, ".js-related-issues-feedback-message");
                void 0 !== e ? (t.hidden = !e, n.hidden = !e) : (t.hidden = !t.hidden, n.hidden = !n.hidden)
            }
            i(".js-related-issues-search", {
                constructor: HTMLInputElement,
                add(e) {
                    pe(fd) && jd(), k(e, async () => {
                        hd(e, await pd(e))
                    }, {
                        wait: 500
                    }), r("change", ".js-related-issues-search", async () => {
                        e.value !== gd && hd(e, await pd(e))
                    })
                }
            }), r("submit", "form#new_issue", e => {
                e.defaultPrevented || he(fd)
            }), r("click", ".js-toggle-related-results", () => {
                yd(), vd(), s(document, ".js-related-issues-results-display").hasAttribute("open") ? Ee(fd, "true") : (he(fd), window.localStorage.removeItem(fd))
            }), r("navigation:keydown", ".js-issue-title-input-container", function(e) {
                a(e instanceof CustomEvent, "null.js:96");
                const t = document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]'),
                    n = s(document, ".js-related-issues-results-display").hasAttribute("open");
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (!t) {
                            const t = o(e.currentTarget, "form", HTMLFormElement);
                            t.querySelector("input[type=submit], button[type=submit]").disabled || v(t)
                        }
                        break;
                    case "Escape":
                        n && s(document, ".js-hide-related-results").click()
                }
            }), _("keydown", ".js-related-issues-search", function(e) {
                document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]') || _n(e)
            });
            let bd, Ld = !1;

            function yd() {
                let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                e = void 0 === t ? !s(document, ".js-related-issues-results-display").hasAttribute("open") : !!t, !Ld && e ? (Qe(s(document, ".js-related-issues-suggestions-results-container")), s(document, ".js-related-issues-search").classList.add("js-navigation-enable")) : (St(s(document, ".js-related-issues-suggestions-results-container")), s(document, ".js-related-issues-search").classList.remove("js-navigation-enable"))
            }

            function Ed(e, t) {
                a(t, "null.js:313");
                const n = new FormData;
                return n.append("variables[query]", e), n.append("variables[repository_id]", t), n
            }

            function wd() {
                const e = document.querySelector(".js-related-issues-spinner");
                e && (e.hidden = !0)
            }

            function Td(e, t, n) {
                const o = e.content.cloneNode(!0);
                "OPEN" === t.state ? kd(o, ".js-related-issues-octicon-issue-opened") : kd(o, ".js-related-issues-octicon-issue-closed");
                const i = s(o, ".js-related-issue-suggestion-link", HTMLAnchorElement);
                if (i.href = t.url, i.setAttribute("data-hydro-client-context", JSON.stringify(n)), s(o, ".js-related-issue-suggestion-title", HTMLElement).textContent = t.title, s(o, ".js-related-issue-number", HTMLElement).textContent = `#${t.number}`, s(o, ".js-related-issue-opened-at", HTMLElement).setAttribute("datetime", t.createdAt), t.author) {
                    const e = s(o, ".js-related-issue-author", HTMLElement);
                    e.textContent = `${t.author.login}`, e.hidden = !1
                }
                return s(o, ".js-related-issue-updated-at", HTMLElement).setAttribute("datetime", t.updatedAt), s(o, ".js-related-issue-suggestion-comment-count").textContent = t.comments.totalCount, o
            }

            function kd(e, t) {
                const n = s(e, ".js-related-issue-octicon"),
                    o = s(n, t, SVGElement);
                n.classList.remove("d-none"), o.classList.remove("d-none")
            }

            function Ad(e, t, n) {
                const s = e[n];
                let o = {
                    position_in_list: n,
                    number_of_similar_issues: e.length,
                    title_length: t.length
                };
                return s.repository.isPrivate || (o = Object.assign({}, o, {
                    title_string_at_time_of_click: t,
                    id_of_clicked_result: s.databaseId,
                    results_shown_at_time_of_click: e.map(e => e.databaseId)
                })), o
            }
            async function Md(e) {
                const t = e.value;
                if (bd = t, !t) return [];
                xd(),
                    function() {
                        const e = s(document, ".js-similar-issues-spinner");
                        e && (e.hidden = !1)
                    }();
                const n = u(e, "data-similar-issues-path"),
                    o = await z(We(n, {
                        method: "POST",
                        body: Id(t, e.getAttribute("data-repository-id"))
                    }));
                return _d(), a(o.data, "null.js:149"), o.data.errors ? [] : o.data.repository.relatedIssues.nodes
            }

            function Sd(e, t) {
                if (0 === t.length) return Hd(), void xd();
                s(document, ".js-number-of-similar-issues", HTMLInputElement).value = `${t.length}`,
                    function(e) {
                        const t = s(document, ".js-similar-issues-suggestions-results-container");
                        t.innerHTML = "", t.appendChild(e)
                    }(function(e, t) {
                        const n = s(document, ".js-similar-issues-suggestions-template", HTMLTemplateElement),
                            o = document.createDocumentFragment();
                        for (let s = 0; s < t.length; s++) {
                            const i = $d(n, t[s], Ad(t, e.value, s));
                            o.appendChild(i)
                        }
                        return o
                    }(e, t)),
                    function(e) {
                        const t = s(document, ".js-show-similar-issues", HTMLButtonElement);
                        s(t, ".js-show-similar-issues-count").innerHTML = `${e.length}`, t.hidden = !1
                    }(t)
            }

            function xd() {
                const e = s(document, ".js-show-similar-issues", HTMLButtonElement);
                s(e, ".js-show-similar-issues-count").innerHTML = "", e.hidden = !0
            }

            function Hd() {
                _d(), s(document, ".js-similar-issues-suggestions-results-wrapper").hidden = !0
            }
            r("compositionstart", ".js-related-issues-search", () => {
                yd(!1), Ld = !0
            }), r("compositionend", ".js-related-issues-search", () => {
                Ld = !1, yd()
            }), j(".js-repository-advisory-title-update", async function(e, t) {
                o(e, ".js-details-container").classList.remove("open");
                const n = (await t.json()).json;
                document.title = n.page_title;
                for (const s of e.elements)(s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) && (s.defaultValue = s.value)
            }), j(".js-repository-advisory-update", async function(e) {
                o(e, ".previewable-edit").classList.remove("is-comment-editing");
                for (const t of e.elements)(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && (t.defaultValue = t.value)
            }), i(".js-similar-issues-search", {
                constructor: HTMLInputElement,
                add(e) {
                    k(e, async () => {
                        Sd(e, await Md(e))
                    }, {
                        wait: 500
                    })
                }
            }), r("change", ".js-similar-issues-search", async e => {
                let t = e.currentTarget;
                a(t instanceof HTMLInputElement, "null.js:66"), t.value !== bd && Sd(t, await Md(t))
            }), r("click", ".js-show-similar-issues", () => {
                s(document, ".js-similar-issues-suggestions-results-wrapper").hasAttribute("hidden") ? s(document, ".js-similar-issues-suggestions-results-wrapper").hidden = !1 : Hd()
            }), r("click", ".js-hide-similar-issues", () => {
                Hd()
            }), r("navigation:keydown", ".js-issue-title-input-container", function(e) {
                a(e instanceof CustomEvent, "null.js:90");
                const t = document.querySelector(".js-similar-issues-suggestions-results-wrapper");
                if (!t) return;
                const n = document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]'),
                    i = t.hasAttribute("hidden");
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (!n) {
                            const t = o(e.currentTarget, "form", HTMLFormElement);
                            t.querySelector("input[type=submit], button[type=submit]").disabled || v(t)
                        }
                        break;
                    case "Escape":
                        i && s(document, ".js-hide-similar-issues").click()
                }
            }), _("keydown", ".js-similar-issues-search", function(e) {
                document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]') || _n(e)
            });
            let Cd = !1;

            function qd() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                const t = document.querySelector(".js-similar-issues-suggestions-results-wrapper");
                if (!t) return;
                let n;
                n = void 0 === e ? !t.hasAttribute("hidden") : !!e, !Cd && n ? (Qe(s(document, ".js-similar-issues-suggestions-results-container")), s(document, ".js-similar-issues-search").classList.add("js-navigation-enable")) : (St(s(document, ".js-similar-issues-suggestions-results-container")), s(document, ".js-similar-issues-search").classList.remove("js-navigation-enable"))
            }

            function Id(e, t) {
                a(t, "null.js:259");
                const n = new FormData;
                return n.append("variables[query]", e), n.append("variables[repository_id]", t), n
            }

            function _d() {
                const e = document.querySelector(".js-similar-issues-spinner");
                e && (e.hidden = !0)
            }

            function $d(e, t, n) {
                const o = e.content.cloneNode(!0);
                "OPEN" === t.state ? Rd(o, ".js-similar-issues-octicon-issue-opened") : Rd(o, ".js-similar-issues-octicon-issue-closed");
                const i = s(o, ".js-similar-issue-suggestion-link", HTMLAnchorElement);
                if (i.href = t.url, i.setAttribute("data-hydro-client-context", JSON.stringify(n)), s(o, ".js-similar-issue-suggestion-title", HTMLElement).textContent = t.title, s(o, ".js-similar-issue-number", HTMLElement).textContent = `#${t.number}`, s(o, ".js-similar-issue-opened-at", HTMLElement).setAttribute("datetime", t.createdAt), t.author) {
                    const e = s(o, ".js-similar-issue-author", HTMLElement);
                    e.textContent = `${t.author.login}`, e.hidden = !1
                }
                return s(o, ".js-similar-issue-updated-at", HTMLElement).setAttribute("datetime", t.updatedAt), s(o, ".js-similar-issue-suggestion-comment-count").textContent = t.comments.totalCount, o
            }

            function Rd(e, t) {
                const n = s(e, ".js-similar-issue-octicon");
                s(n, t, SVGElement).removeAttribute("hidden")
            }
            r("compositionstart", ".js-similar-issues-search", () => {
                qd(!1), Cd = !0
            }), r("compositionend", ".js-similar-issues-search", () => {
                Cd = !1, qd()
            })
        }
    }
});
//# sourceMappingURL=github-bootstrap-5167d3d0.js.map