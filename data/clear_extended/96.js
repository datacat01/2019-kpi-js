self.System = self.System || (() => {
    const e = {},
        t = {},
        n = e => e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js"),
        o = {
            register(r, i) {
                const s = n(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                    a = {},
                    c = i((e, t) => t ? a[e] = t : Object.assign(a, e), o);
                e[s] = Promise.all(r.map((e, t) => o.import(n(e)).then(c.setters[t]))).then(() => (c.execute(), a)).catch(e => {
                    throw e.message = `evaluating module ${s}: ${e.message}`, e
                }), t[s] && (t[s](e[s]), delete t[s])
            },
            import: n => e[n] || (e[n] = new Promise((e, o) => {
                const r = setTimeout(() => {
                    o(new Error(`could not resolve ${n}`))
                }, 1e4);
                t[n] = (t => {
                    clearTimeout(r), e(t)
                })
            }))
        };
    return o
})(), System.register([], function(e, t) {
    "use strict";
    return {
        execute: function() {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function n(e, n) {
                return !n || "object" !== t(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : n
            }

            function o(e) {
                var t = "function" == typeof Map ? new Map : void 0;
                return (o = function(e) {
                    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                    var n;
                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, o)
                    }

                    function o() {
                        return r(e, arguments, s(this).constructor)
                    }
                    return o.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: o,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), i(o, e)
                })(e)
            }

            function r(e, t, n) {
                return (r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }() ? Reflect.construct : function(e, t, n) {
                    var o = [null];
                    o.push.apply(o, t);
                    var r = new(Function.bind.apply(e, o));
                    return n && i(r, n.prototype), r
                }).apply(null, arguments)
            }

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            e({
                a: fe,
                b: ke,
                d: function(e) {
                    const t = e.getAttribute("data-hydro-view"),
                        n = e.getAttribute("data-hydro-view-hmac");
                    We({
                        hydroEventPayload: t,
                        hydroEventHmac: n
                    })
                },
                e: l,
                f: f,
                g: j,
                h: wt,
                i: xe,
                j: at,
                k: Ke,
                l: c,
                m: function(e, t) {
                    function n(e) {
                        e.currentTarget.removeEventListener("input", t), e.currentTarget.removeEventListener("blur", n)
                    }
                    Ke(e, function(e) {
                        e.addEventListener("input", t), e.addEventListener("blur", n)
                    })
                },
                n: function(e, t) {
                    const n = {
                        id: kt++,
                        selector: e,
                        in: t,
                        out: null,
                        elements: [],
                        checkPending: !1,
                        scrollHandler() {
                            ! function(e) {
                                if (!document.hasFocus()) return;
                                if (window.scrollY === xt) return;
                                if (xt = window.scrollY, e.checkPending) return;
                                e.checkPending = !0, window.requestAnimationFrame(() => {
                                    e.checkPending = !1, St(e)
                                })
                            }(n)
                        }
                    };
                    fe(e, {
                        add(e) {
                            !async function(e, t) {
                                t.elements.push(e), 1 === t.elements.length && (window.addEventListener("scroll", t.scrollHandler, {
                                    capture: !0,
                                    passive: !0
                                }), await Lt(document), St(t))
                            }(e, n)
                        },
                        remove(e) {
                            ! function(e, t) {
                                const n = t.elements.indexOf(e); - 1 !== n && t.elements.splice(n, 1);
                                0 === t.elements.length && window.removeEventListener("scroll", t.scrollHandler, {
                                    capture: !0,
                                    passive: !0
                                })
                            }(e, n)
                        }
                    })
                },
                o: Dt,
                p: L,
                q: u,
                r: Ft,
                s: async function(e) {
                    const t = (n = e, "low" === n || "medium" === n || "high" === n || "two_factor" === n ? n : null);
                    var n;
                    return x(t, "null.js:94"), await Ut(`/sessions/in_sudo.json?requested_access_level=${t}`) || await async function() {
                        if (en) return !1;
                        en = !0;
                        let e = !1;
                        const t = await async function() {
                            const e = document.body;
                            x(e, "null.js:24");
                            const t = l(document, "link[rel=sudo-modal]", HTMLLinkElement),
                                n = document.querySelector(".js-sudo-prompt");
                            if (n instanceof HTMLTemplateElement) return n;
                            if (t) {
                                const n = await j(document, function(e) {
                                    const t = new URL(e, window.location.origin),
                                        n = new URLSearchParams(t.search.slice(1));
                                    return n.set("webauthn-support", Jt()), t.search = n.toString(), t.toString()
                                }(t.href));
                                return e.appendChild(n), l(document, ".js-sudo-prompt", HTMLTemplateElement)
                            }
                            throw new Error("couldn't load sudo prompt")
                        }(), n = await Zt({
                            content: t.content.cloneNode(!0)
                        });
                        return Dt(".js-sudo-form", async function(t, n) {
                            try {
                                await n.text()
                            } catch (o) {
                                if (!o.response) throw o;
                                let e;
                                switch (o.response.status) {
                                    case 401:
                                        e = "Incorrect password.";
                                        break;
                                    case 429:
                                        e = "Too many password attempts. Please wait and try again later.";
                                        break;
                                    default:
                                        e = "Failed to receive a response. Please try again later."
                                }
                                return l(t, ".js-sudo-error").textContent = e, l(t, ".js-sudo-error").hidden = !1, void(l(t, ".js-sudo-password", HTMLInputElement).value = "")
                            }
                            e = !0, c(t, "details").removeAttribute("open")
                        }), await new Promise(e => {
                            n.addEventListener("dialog:remove", function() {
                                en = !1, e()
                            }, {
                                once: !0
                            })
                        }), e
                    }()
                },
                t: d,
                u: Ut,
                v: function(e, t, n) {
                    return new Promise(function(o, r) {
                        window.u2f.register(e, t, n, function(e) {
                            e.registrationData ? o(e) : r(new nn("Device registration failed", on(e)))
                        })
                    })
                },
                w: function() {
                    return Yt() && Gt()
                },
                x: yt,
                y: dt,
                A: g,
                C: function(e, t) {
                    let n;
                    return function() {
                        for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                        clearTimeout(n), n = setTimeout(() => {
                            clearTimeout(n), e(...r)
                        }, t)
                    }
                },
                D: $r,
                F: Tt,
                G: Bt,
                H: Ur,
                I: We,
                K: Gr,
                M: async function(e, t) {
                    const n = oi.get(e);
                    n && n.abort();
                    return ii(e, t)
                },
                N: Je,
                O: function(e, t) {
                    const n = e.currentTarget;
                    if (x(n instanceof HTMLAnchorElement, "null.js:78"), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                    if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;
                    if (n.href.indexOf("#") > -1 && ss(n) === ss(location)) return;
                    if (e.defaultPrevented) return;
                    const o = {
                        url: n.href,
                        container: null,
                        target: n
                    };
                    Object.assign(o, t), Ki(n, "pjax:click", {
                        options: o,
                        relatedEvent: e
                    }) && (Qi(o), e.preventDefault(), Ki(n, "pjax:clicked", {
                        options: o
                    }))
                },
                P: function(e, t) {
                    const n = e.currentTarget;
                    x(n instanceof HTMLFormElement, "null.js:128");
                    const o = {
                        type: (n.method || "GET").toUpperCase(),
                        url: n.action,
                        container: null,
                        target: n
                    };
                    if (Object.assign(o, t), "GET" === o.type) {
                        if (n.querySelector("input[type=file]")) return;
                        x("string" == typeof o.url, "null.js:144");
                        const e = is(o.url);
                        e.search += (e.search ? "&" : "") + Tt(n), o.url = e.toString()
                    } else o.data = new FormData(n);
                    Qi(o), e.preventDefault()
                },
                Q: Ji,
                S: function(e, t) {
                    const n = e.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let o = bs.get(e);
                    if (o && o.parentElement === e.parentElement) o.innerHTML = "";
                    else {
                        o = document.createElement("div"), bs.set(e, o);
                        const t = window.getComputedStyle(e),
                            r = gs.slice(0);
                        "textarea" === n ? r.push("white-space:pre-wrap;") : r.push("white-space:nowrap;");
                        for (let e = 0, n = vs.length; e < n; e++) {
                            const n = vs[e];
                            r.push(`${n}:${t.getPropertyValue(n)};`)
                        }
                        o.style.cssText = r.join(" ")
                    }
                    const r = document.createElement("span");
                    let i, s;
                    if (r.style.cssText = "position: absolute;", r.className = "text-field-mirror-marker", r.innerHTML = "&nbsp;", "number" == typeof t) {
                        let n = e.value.substring(0, t);
                        n && (i = document.createTextNode(n)), (n = e.value.substring(t)) && (s = document.createTextNode(n))
                    } else {
                        const t = e.value;
                        t && (i = document.createTextNode(t))
                    }
                    i && o.appendChild(i);
                    o.appendChild(r), s && o.appendChild(s);
                    o.parentElement || (x(e.parentElement, "textField must have a parentElement to mirror -- null.js:108"), e.parentElement.insertBefore(o, e));
                    return o.scrollTop = e.scrollTop, o.scrollLeft = e.scrollLeft, o
                },
                T: Es,
                U: Si,
                V: _r,
                W: Fi,
                X: $i,
                Y: hs,
                Z: xs,
                _: Pr,
                $: k,
                a0: Zt,
                a1: vt,
                a2: function(e) {
                    const t = e.split("‍");
                    let n = 0;
                    for (const o of t) {
                        const e = Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length;
                        n += e
                    }
                    return n / t.length
                },
                a3: ti,
                a4: function(e, t) {
                    let n, o = 0;
                    return function() {
                        for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                        const a = Date.now() - o;
                        a < t ? (clearTimeout(n), n = setTimeout(() => {
                            o = Date.now(), e(...i)
                        }, t - a)) : (o = Date.now(), e(...i))
                    }
                },
                a5: function(e) {
                    return T(e.action, {
                        method: e.method,
                        body: new FormData(e)
                    })
                },
                a6: function(e, t) {
                    for (const n in t) {
                        const o = t[n],
                            r = e.elements.namedItem(n);
                        r instanceof HTMLInputElement ? r.value = o : r instanceof HTMLTextAreaElement && (r.value = o)
                    }
                },
                a7: Is,
                a8: Ni,
                a9: function() {
                    Ns()
                },
                aa: function(e, t) {
                    const n = l(document, ".js-file-filter"),
                        o = new URL(window.location.href, window.location.origin);
                    if (!e) return o.search = "", at(tt(), "", o.toString());
                    const r = l(n, ".js-file-filter-form", HTMLFormElement),
                        i = new FormData(r),
                        s = t.filter(e => !i.getAll("file-filters[]").includes(e));
                    for (const c of s) i.append("file-filters[]", c);
                    const a = new URLSearchParams(i);
                    a.has("file-filters[]") && "" !== a.toString() || a.set("file-filters[]", "");
                    o.search = a.toString(), at(tt(), "", o.toString())
                },
                ab: function(e) {
                    const t = f(e, "data-file-type"),
                        n = Ws("data-file-type", t),
                        o = u(document, ".js-diff-file-type-option", HTMLInputElement).find(e => e.value === t);
                    if (!o) return !1;
                    const r = o.checked !== n.length > 0;
                    r && (o.checked = n.length > 0);
                    return r
                },
                ac: function(e, t) {
                    const n = "true" === f(e, "data-file-deleted");
                    let o = !1;
                    if (n) {
                        const e = Ws("data-file-deleted", "true");
                        (o = t.checked !== (0 === e.length)) && (t.checked = 0 === e.length)
                    }
                    return o
                },
                ad: De,
                ae: function(e, t) {
                    const n = window[window.GoogleAnalyticsObject || "ga"];
                    "function" == typeof n && n("provide", e, t)
                },
                af: function(e) {
                    window.ga("set", {
                        location: e
                    })
                },
                ag: function(e) {
                    window.ga("set", {
                        title: e
                    })
                },
                ah: function(e) {
                    try {
                        return sessionStorage.getItem(e)
                    } catch (t) {
                        return
                    }
                },
                ai: function(e) {
                    try {
                        sessionStorage.removeItem(e)
                    } catch (t) {}
                },
                aj: function(e, t) {
                    window.ga("set", e, t)
                },
                ak: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t.page = e, window.ga("send", "pageview", t)
                },
                al: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    window.ga("create", e, t, n), window.ga("set", "transport", "sendBeacon" in window.navigator ? "beacon" : "xhr")
                },
                am: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.ga(() => {
                        window.ga("require", e, t)
                    })
                },
                an: function(e) {
                    void 0 === e.interactive && (e.interactive = !0);
                    window.ga("send", "event", e.category, e.action, e.label, e.value, {
                        nonInteraction: !e.interactive
                    })
                },
                ao: function(e, t) {
                    try {
                        sessionStorage.setItem(e, t)
                    } catch (n) {}
                },
                ap: da,
                aq: rn,
                as: function(e) {
                    let t = e;
                    "string" == typeof t && (t = t.replace(/,/g, ""));
                    return parseFloat(t)
                },
                at: function(e) {
                    return `${e}`.replace(/(^|[^\w.])(\d{4,})/g, (e, t, n) => t + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,"))
                },
                au: Fa,
                av: _a,
                aw: Va,
                ax: Ms,
                az: function(e, t) {
                    ic.set(e, t)
                },
                aA: Ka,
                aB: wc,
                aC: function(e, t, n) {
                    const o = new URL(e, window.location.origin),
                        r = new URLSearchParams(o.search.slice(1));
                    r.set("q", t), n && r.set("unscoped_q", t);
                    const i = new URLSearchParams(window.location.search).get("type");
                    i && r.set("type", i);
                    return o.search = r.toString(), o.toString()
                },
                aD: Ae,
                aE: Li,
                aF: function(e) {
                    const t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || dc(),
                        n = kc(t),
                        o = xc(t);
                    return e.map(e => ({
                        suggestion: e,
                        score: jc(e.pageKey, n, o)
                    })).sort((e, t) => t.score - e.score).map(e => e.suggestion)
                },
                aG: function(e, t, n) {
                    const o = e.replace(/\s/g, ""),
                        r = t.filter(e => e.path !== n);
                    if (!o) return r;
                    return Es(r, o, {
                        text: e => e.name
                    })
                },
                aH: yc,
                aI: function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic();
                    if (!t) return;
                    const n = e.match(Ac);
                    if (n) return void Cc(mc(n[1], n[2]), t);
                    let o, r;
                    for (let i = 0, s = Mc.length; i < s; i++) {
                        const n = dt(Mc[i], 2),
                            r = n[0],
                            s = n[1];
                        if (o = e.match(s)) {
                            let e, n;
                            switch (r) {
                                case "organization":
                                    e = o[1], n = o[2];
                                    break;
                                case "repository":
                                    e = `${o[1]}/${o[2]}`, n = o[3]
                            }
                            return x(e, "null.js:62"), x(n, "null.js:63"), void Cc(hc(e, n), t)
                        }
                    }
                    for (let i = 0, s = Sc.length; i < s; i++)
                        if (r = e.match(Sc[i])) return void Cc(pc(r[1], r[2]), t)
                },
                aJ: cn,
                aL: function() {
                    const e = new FormData;
                    for (const t of Object.keys(dc())) e.append("variables[pageViews][]", t);
                    return e
                },
                aM: function(e, t) {
                    const n = new URL(e, window.location.origin),
                        o = t ? Object.assign({}, t) : {},
                        r = n.hash.match(/^#csrf-token=([A-Za-z0-9+\/=]+)$/);
                    if (!r) throw new TypeError("Expected csrfRequest(url) to have an associated #csrf-token");
                    n.hash = "";
                    const i = n.toString();
                    o.mode = "same-origin";
                    const s = new Request(i, o);
                    return s.headers.append("Scoped-CSRF-Token", r[1]), s
                },
                aN: function(e) {
                    if (e.data.errors) return [];
                    const t = e.data.suggestions.nodes;
                    let n = 1;
                    for (const o of t) o.rank = n++, o.pageKey = fc(o), "Team" === o.type && (o.name = `@${o.name}`);
                    return t
                },
                aO: function(e) {
                    const t = f(e, "data-target-type");
                    if ("Search" === t) {
                        const e = l(document, ".js-site-search-form", HTMLFormElement),
                            t = e.getAttribute("data-scope-type");
                        t && yc({
                            dimensions: {
                                scope_id: parseInt(e.getAttribute("data-scope-id")),
                                scope_type: t
                            }
                        }), wc("search")
                    } else yc({
                        dimensions: {
                            target_id: parseInt(e.getAttribute("data-target-id")),
                            target_type: t
                        },
                        measures: {
                            client_rank: parseInt(e.getAttribute("data-client-rank")),
                            server_rank: parseInt(e.getAttribute("data-server-rank"))
                        }
                    }), wc("click")
                },
                aP: function(e, t) {
                    const n = new URL(t, window.location.origin),
                        o = new URLSearchParams(n.search.slice(1));
                    o.get("q") && o.set("q", e);
                    o.get("unscoped_q") && o.set("unscoped_q", e);
                    return n.search = o.toString(), n.toString()
                },
                aQ: Ma,
                aR: xa,
                aS: Et,
                aT: Qr,
                aU: Jr,
                aV: ei,
                aW: rc,
                aX: Ca,
                aZ: Lt,
                a_: function(e) {
                    const t = Ot.get(e);
                    t && t.listener.call(null, e)
                },
                a$: ri,
                b0: function*(e) {
                    const t = e.end.line;
                    let n = e.start.line;
                    for (; n <= t;) yield n++
                },
                b1: function(e, t, n) {
                    const o = dt(Nc(t.start, !0, n), 2),
                        r = o[0],
                        i = o[1],
                        s = dt(Nc(t.end, !1, n), 2),
                        a = s[0],
                        c = s[1];
                    if (!r || !a) return;
                    let l = i,
                        u = c; - 1 === l && (l = 0); - 1 === u && (u = a.childNodes.length);
                    const d = e.createRange();
                    return d.setStart(r, l), d.setEnd(a, u), d
                },
                b2: function(e, t) {
                    t.appendChild(e.extractContents()), e.insertNode(t)
                },
                b3: function(e) {
                    const t = qc(e),
                        n = function(e) {
                            const t = e.match(/(file-.+?-)L\d+?/i);
                            return t ? t[1] : ""
                        }(e);
                    return {
                        blobRange: t,
                        anchorPrefix: n
                    }
                },
                b4: function(e, t) {
                    return t + (e > 1 || 0 === e ? "s" : "")
                },
                b5: qc,
                b6: function(e) {
                    let t = e.anchorPrefix,
                        n = e.blobRange;
                    return n ? `#${t}${Oc(n)}` : "#"
                },
                b7: za,
                b8: st,
                b9: Se,
                bb: function(e) {
                    return Xc.get(e)
                },
                bc: function(e) {
                    let t = !1;
                    return function() {
                        t || (t = !0, e(...arguments))
                    }
                },
                bd: vc,
                be: T,
                bf: yi,
                bg: function(e) {
                    const t = e.getAttribute("data-details-container") || ".js-details-container",
                        n = c(e, t).classList;
                    return n.contains("Details--on") || n.contains("open")
                },
                bh: Xr,
                bi: function(e, t, n) {
                    const o = e[n];
                    let r = {
                        position_in_list: n,
                        number_of_related_issues: e.length,
                        title_length: t.length
                    };
                    o.repository.isPrivate || (r = Object.assign({}, r, {
                        title_string_at_time_of_click: t,
                        id_of_clicked_result: o.databaseId,
                        results_shown_at_time_of_click: e.map(e => e.databaseId)
                    }));
                    return r
                },
                bj: Aa,
                bk: Rr,
                bl: function() {
                    throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
                },
                bm: function(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                },
                bn: async function(e) {
                    return Xc.get(e) || Vc(await (t = e, n = "codeEditor:ready", new Promise(e => {
                        t.addEventListener(n, e, {
                            once: !0
                        })
                    })));
                    var t, n
                },
                bo: function(e) {
                    return e && e.default || e
                },
                br: function(e) {
                    const t = e.getBoundingClientRect();
                    return {
                        top: t.top + window.pageYOffset,
                        left: t.left + window.pageXOffset
                    }
                },
                bs: hu,
                bt: function(e, t) {
                    const n = hu(e),
                        o = [];
                    for (const r of e) o.push(gu(r, t, n));
                    return Promise.all(o)
                },
                bu: function(e, t) {
                    return null != Tu(e)[t]
                },
                bv: al,
                bw: Su,
                bx: _u,
                by: Mu,
                bz: Cu,
                bA: function(e) {
                    ! function(e) {
                        if (document.activeElement !== e) return !1;
                        const t = e.value.slice(0, e.selectionEnd),
                            n = e.value.slice(e.selectionEnd),
                            o = 0 === e.value.trim().length;
                        if (Iu.test(t)) return !1;
                        const r = Hu.test(t) && Du.test(n);
                        return o || r
                    }(e) ? Pu(): function(e) {
                        const t = document.querySelector(".js-card-filter-suggester");
                        if (t instanceof HTMLElement) {
                            t.classList.add("js-active-navigation-container"), t.classList.remove("d-none");
                            const n = e.value.slice(0, e.selectionEnd),
                                o = (n.match(Ou) || [])[0],
                                r = l(t, ".js-card-filter-suggester-helper-container"),
                                i = l(r, ".js-card-filter-suggester-helper");
                            qu.test(e.value) ? (i.textContent = e.value, r.classList.remove("d-none")) : r.classList.add("d-none");
                            const s = l(t, ".js-card-filter-suggestions-header");
                            let a = !1;
                            for (const e of t.querySelectorAll(".js-card-filter-suggestion")) {
                                const t = e.getAttribute("data-value");
                                t && t.startsWith(o) ? (e.classList.remove("d-none"), a = !0) : (e.classList.add("d-none"), e.setAttribute("aria-selected", "false"))
                            }
                            s.classList.toggle("d-none", !a)
                        }
                    }(e)
                },
                bB: Pu,
                bC: function(e) {
                    const t = l(document, ".js-card-filter-input", HTMLInputElement),
                        n = t.value;
                    let o = e,
                        r = !0;
                    n.indexOf(o) >= 0 ? (r = !1, o = n.replace(o, "")) : n.length && (o = `${n.trim()} ${o}`);
                    t.value = o,
                        function(e, t) {
                            for (const n of document.querySelectorAll(".js-card-filter[data-card-filter]")) n.getAttribute("data-card-filter") === t && n.setAttribute("aria-pressed", e.toString())
                        }(r, e), Cu()
                },
                bD: Ht,
                bE: tt,
                bF: Oc,
                bG: function(e, t) {
                    const n = Rc(e.startContainer, e.startOffset, t),
                        o = Rc(e.endContainer, e.endOffset, t);
                    if (!n || !o) return;
                    return Object.freeze({
                        start: n,
                        end: o
                    })
                },
                bH: Ti,
                bI: function(e, t) {
                    const n = function() {
                        const n = [];
                        for (let o = 0, r = e.length; o < r; o++) {
                            const r = e[o],
                                i = yi(r, t);
                            i && n.push([r, i])
                        }
                        return n
                    }();
                    n.sort(Ei);
                    const o = [];
                    for (let r = 0, i = n.length; r < i; r++) {
                        const e = n[r];
                        o.push(e[0])
                    }
                    return o
                },
                bJ: Bi,
                bK: Ga,
                bL: Kc,
                bM: ma,
                bN: ha,
                bO: fa,
                bP: pa,
                bQ: Ci,
                bR: function(e, t) {
                    jt && jt.remove(e, t)
                },
                bS: Di,
                bT: Ss,
                bU: Wt,
                bV: dc,
                bW: Lc,
                bX: Ec,
                bY: function() {
                    const e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), o.forEach(function(t) {
                                ut(e, t, n[t])
                            })
                        }
                        return e
                    }({}, bc);
                    e.context && e.context.display_set && (e.context.display_set = [...e.context.display_set]);
                    e.dimensions && e.dimensions.display_set && (e.dimensions.display_set = [...e.dimensions.display_set]);
                    return e
                },
                bZ: fc,
                b_: mc,
                b$: pc,
                c0: hc
            });
            var a = function(e) {
                function t(e) {
                    var o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (o = n(this, s(t).call(this, e))).name = "QueryError", o.framesToPop = 1, o
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t)
                }(t, o(Error)), t
            }();

            function c(e, t, n) {
                var o = n || HTMLElement,
                    r = e.closest(t);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(t))
            }

            function l(e, t, n) {
                var o = n || HTMLElement,
                    r = e.querySelector(t);
                if (r instanceof o) return r;
                throw new a("Element not found: <".concat(o.name, "> ").concat(t))
            }

            function u(e, t, n) {
                var o = n || HTMLElement,
                    r = [],
                    i = !0,
                    s = !1,
                    a = void 0;
                try {
                    for (var c, l = e.querySelectorAll(t)[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
                        var u = c.value;
                        u instanceof o && r.push(u)
                    }
                } catch (d) {
                    s = !0, a = d
                } finally {
                    try {
                        i || null == l.return || l.return()
                    } finally {
                        if (s) throw a
                    }
                }
                return r
            }

            function d(e, t, n) {
                var o = n || HTMLInputElement,
                    r = e.elements.namedItem(t);
                if (r instanceof o) return r;
                throw new a("Element not found by name: <".concat(o.name, "> ").concat(t))
            }

            function f(e, t) {
                var n = e.getAttribute(t);
                if (null != n) return n;
                throw new a("Attribute not found on element: ".concat(t))
            }

            function m(e) {
                const t = e.querySelector("meta[name=html-safe-nonce]");
                if (null == t || !(t instanceof HTMLMetaElement)) throw new Error("could not find html-safe-nonce on document");
                const n = t.content;
                if (n) return n;
                throw new Error("could not find html-safe-nonce on document")
            }
            class p extends Error {
                constructor(e, t) {
                    super(`${e} for HTTP ${t.status}`), this.response = t
                }
            }

            function h(e, t) {
                const n = t.headers.get("content-type") || "";
                if (!n.startsWith("text/html")) throw new p(`expected response with text/html, but was ${n}`, t);
                const o = t.headers.get("x-html-safe");
                if (!o) throw new p("missing X-HTML-Safe nonce", t);
                if (o !== e) throw new p("response X-HTML-Safe nonce did not match", t)
            }

            function g(e, t) {
                const n = e.createElement("template");
                return n.innerHTML = t, e.importNode(n.content, !0)
            }
            class v extends Error {
                constructor(e) {
                    super(), this.response = e, this.framesToPop = 1
                }
            }
            e("z", window.AbortController || class {
                constructor() {
                    this.signal = {
                        aborted: !1
                    }
                }
                abort() {
                    this.signal.aborted = !0
                }
            });
            const b = e("B", window.AbortError || class extends Error {});

            function w(e, t) {
                if (e.status >= 200 && e.status < 300) return e; {
                    const n = e.statusText ? ` ${e.statusText}` : "";
                    throw t.message = `HTTP ${e.status}${n}`, t
                }
            }

            function y(e, t) {
                const n = t ? Object.assign({}, t) : {};
                n.credentials || (n.credentials = "same-origin");
                const o = new Request(e, n);
                if (o.headers.append("X-Requested-With", "XMLHttpRequest"), /#csrf-token=/.test(o.url)) throw new TypeError("URL with encoded CSRF token was passed to fetch() without using the csrfRequest(url) helper");
                return o
            }
            async function E(e, t) {
                const n = await self.fetch(e);
                if (t && t.aborted) throw new b("The operation was aborted");
                return n
            }
            async function T(e, t) {
                const n = y(e, t),
                    o = await E(n, t && t.signal);
                return w(o, new v(o)), o
            }
            async function L(e, t) {
                const n = y(e, t),
                    o = await E(n, t && t.signal);
                return w(o, new v(o)), o.text()
            }
            async function j(e, t, n) {
                const o = y(t, n),
                    r = await E(o, n && n.signal);
                return w(r, new v(r)), h(m(e), r), g(e, await r.text())
            }

            function k(e, t) {
                return new Promise(function(n, o) {
                    ! function r(i) {
                        T(e, t).then(function(e) {
                            switch (e.status) {
                                case 200:
                                    n(e);
                                    break;
                                case 202:
                                    setTimeout(() => r(1.5 * i), i);
                                    break;
                                default:
                                    o(new v(e))
                            }
                        }, o)
                    }(1e3)
                })
            }
            var x = function(e, t, n, o, r, i, s, a) {
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, o, r, i, s, a],
                            u = 0;
                        (c = new Error(t.replace(/%s/g, function() {
                            return l[u++]
                        }))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            };

            function A() {
                if (!(this instanceof A)) return new A;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            e("c", x);
            var S = window.document.documentElement,
                M = S.matches || S.webkitMatchesSelector || S.mozMatchesSelector || S.oMatchesSelector || S.msMatchesSelector;
            A.prototype.matchesSelector = function(e, t) {
                return M.call(e, t)
            }, A.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            }, A.prototype.indexes = [];
            var _ = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            A.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var t;
                    if (t = e.match(_)) return t[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var C = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            A.prototype.indexes.push({
                name: "CLASS",
                selector: function(e) {
                    var t;
                    if (t = e.match(C)) return t[0].slice(1)
                },
                element: function(e) {
                    var t = e.className;
                    if (t) {
                        if ("string" == typeof t) return t.split(/\s/);
                        if ("object" == typeof t && "baseVal" in t) return t.baseVal.split(/\s/)
                    }
                }
            });
            var I, H = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            A.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(H)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }), A.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, I = "function" == typeof window.Map ? window.Map : function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                }, e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                }, e
            }();
            var D = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function q(e, t) {
                var n, o, r, i, s, a, c = (e = e.slice(0).concat(e.default)).length,
                    l = t,
                    u = [];
                do {
                    if (D.exec(""), (r = D.exec(l)) && (l = r[3], r[2] || !l))
                        for (n = 0; n < c; n++)
                            if (s = (a = e[n]).selector(r[1])) {
                                for (o = u.length, i = !1; o--;)
                                    if (u[o].index === a && u[o].key === s) {
                                        i = !0;
                                        break
                                    } i || u.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                } while (r);
                return u
            }

            function O(e, t) {
                var n, o, r;
                for (n = 0, o = e.length; n < o; n++)
                    if (r = e[n], t.isPrototypeOf(r)) return r
            }

            function P(e, t) {
                return e.id - t.id
            }
            A.prototype.logDefaultIndexUsed = function() {}, A.prototype.add = function(e, t) {
                var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                    d = this.selectors;
                if ("string" == typeof e) {
                    for (n = {
                            id: this.uid++,
                            selector: e,
                            data: t
                        }, c = q(this.indexes, e), o = 0; o < c.length; o++) i = (l = c[o]).key, (s = O(u, r = l.index)) || ((s = Object.create(r)).map = new I, u.push(s)), r === this.indexes.default && this.logDefaultIndexUsed(n), (a = s.map.get(i)) || (a = [], s.map.set(i, a)), a.push(n);
                    this.size++, d.push(e)
                }
            }, A.prototype.remove = function(e, t) {
                if ("string" == typeof e) {
                    var n, o, r, i, s, a, c, l, u = this.activeIndexes,
                        d = {},
                        f = 1 === arguments.length;
                    for (n = q(this.indexes, e), r = 0; r < n.length; r++)
                        for (o = n[r], i = u.length; i--;)
                            if (a = u[i], o.index.isPrototypeOf(a)) {
                                if (c = a.map.get(o.key))
                                    for (s = c.length; s--;)(l = c[s]).selector !== e || !f && l.data !== t || (c.splice(s, 1), d[l.id] = !0);
                                break
                            } this.size -= Object.keys(d).length
                }
            }, A.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, n, o, r, i, s, a, c, l = {},
                    u = [],
                    d = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, o = d.length; t < o; t++)
                    for (i = d[t], n = 0, r = (s = this.matches(i)).length; n < r; n++) l[(c = s[n]).id] ? a = l[c.id] : (a = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = a, u.push(a)), a.elements.push(i);
                return u.sort(P)
            }, A.prototype.matches = function(e) {
                if (!e) return [];
                var t, n, o, r, i, s, a, c, l, u, d, f = this.activeIndexes,
                    m = {},
                    p = [];
                for (t = 0, r = f.length; t < r; t++)
                    if (c = (a = f[t]).element(e))
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = a.map.get(c[n]))
                                for (o = 0, s = l.length; o < s; o++) !m[d = (u = l[o]).id] && this.matchesSelector(e, u.selector) && (m[d] = !0, p.push(u));
                return p.sort(P)
            };
            var R = null,
                N = null,
                $ = [];

            function F(e, t) {
                var n = [];

                function o() {
                    var e = n;
                    n = [], t(e)
                }
                return function() {
                    for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                    n.push(r), 1 === n.length && B(e, o)
                }
            }

            function B(e, t) {
                N || (N = new MutationObserver(U)), R || (R = e.createElement("div"), N.observe(R, {
                    attributes: !0
                })), $.push(t), R.setAttribute("data-twiddle", "" + Date.now())
            }

            function U() {
                var e = $;
                $ = [];
                for (var t = 0; t < e.length; t++) try {
                    e[t]()
                } catch (n) {
                    setTimeout(function() {
                        throw n
                    }, 0)
                }
            }
            var W = new WeakMap,
                X = new WeakMap,
                V = new WeakMap,
                z = new WeakMap;

            function Y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = o[0],
                        i = o[1],
                        s = o[2];
                    r === ee ? (G(s, i), K(s, i)) : r === te ? J(s, i) : r === ne && Q(e.observers, i)
                }
            }

            function G(e, t) {
                if (t instanceof e.elementConstructor) {
                    var n = W.get(t);
                    if (n || (n = [], W.set(t, n)), -1 === n.indexOf(e.id)) {
                        var o = void 0;
                        if (e.initialize && (o = e.initialize.call(void 0, t)), o) {
                            var r = X.get(t);
                            r || (r = {}, X.set(t, r)), r["" + e.id] = o
                        }
                        n.push(e.id)
                    }
                }
            }

            function K(e, t) {
                if (t instanceof e.elementConstructor) {
                    var n = z.get(t);
                    if (n || (n = [], z.set(t, n)), -1 === n.indexOf(e.id)) {
                        e.elements.push(t);
                        var o = X.get(t),
                            r = o ? o["" + e.id] : null;
                        if (r && r.add && r.add.call(void 0, t), e.subscribe) {
                            var i = e.subscribe.call(void 0, t);
                            if (i) {
                                var s = V.get(t);
                                s || (s = {}, V.set(t, s)), s["" + e.id] = i
                            }
                        }
                        e.add && e.add.call(void 0, t), n.push(e.id)
                    }
                }
            }

            function J(e, t) {
                if (t instanceof e.elementConstructor) {
                    var n = z.get(t);
                    if (n) {
                        var o = e.elements.indexOf(t);
                        if (-1 !== o && e.elements.splice(o, 1), -1 !== (o = n.indexOf(e.id))) {
                            var r = X.get(t),
                                i = r ? r["" + e.id] : null;
                            if (i && i.remove && i.remove.call(void 0, t), e.subscribe) {
                                var s = V.get(t),
                                    a = s ? s["" + e.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            e.remove && e.remove.call(void 0, t), n.splice(o, 1)
                        }
                        0 === n.length && z.delete(t)
                    }
                }
            }

            function Q(e, t) {
                var n = z.get(t);
                if (n) {
                    for (var o = n.slice(0), r = 0; r < o.length; r++) {
                        var i = e[o[r]];
                        if (i) {
                            var s = i.elements.indexOf(t); - 1 !== s && i.elements.splice(s, 1);
                            var a = X.get(t),
                                c = a ? a["" + i.id] : null;
                            c && c.remove && c.remove.call(void 0, t);
                            var l = V.get(t),
                                u = l ? l["" + i.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), i.remove && i.remove.call(void 0, t)
                        }
                    }
                    z.delete(t)
                }
            }
            var Z = null;
            var ee = 1,
                te = 2,
                ne = 3;

            function oe(e, t, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    "childList" === r.type ? (re(e, t, r.addedNodes), ie(e, t, r.removedNodes)) : "attributes" === r.type && se(e, t, r.target)
                }(function(e) {
                    if (null === Z) {
                        var t = e.createElement("div"),
                            n = e.createElement("div"),
                            o = e.createElement("div");
                        t.appendChild(n), n.appendChild(o), t.innerHTML = "", Z = o.parentNode !== n
                    }
                    return Z
                })(e.ownerDocument) && function(e, t) {
                    for (var n = 0; n < e.observers.length; n++) {
                        var o = e.observers[n];
                        if (o)
                            for (var r = o.elements, i = 0; i < r.length; i++) {
                                var s = r[i];
                                s.parentNode || t.push([ne, s])
                            }
                    }
                }(e, t)
            }

            function re(e, t, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if ("matches" in r)
                        for (var i = e.selectorSet.matches(r), s = 0; s < i.length; s++) {
                            var a = i[s].data;
                            t.push([ee, r, a])
                        }
                    if ("querySelectorAll" in r)
                        for (var c = e.selectorSet.queryAll(r), l = 0; l < c.length; l++)
                            for (var u = c[l], d = u.data, f = u.elements, m = 0; m < f.length; m++) t.push([ee, f[m], d])
                }
            }

            function ie(e, t, n) {
                for (var o = 0; o < n.length; o++) {
                    var r = n[o];
                    if ("querySelectorAll" in r) {
                        t.push([ne, r]);
                        for (var i = r.querySelectorAll("*"), s = 0; s < i.length; s++) t.push([ne, i[s]])
                    }
                }
            }

            function se(e, t, n) {
                if ("matches" in n)
                    for (var o = e.selectorSet.matches(n), r = 0; r < o.length; r++) {
                        var i = o[r].data;
                        t.push([ee, n, i])
                    }
                if ("querySelectorAll" in n) {
                    var s = z.get(n);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var c = e.observers[s[a]];
                            c && (e.selectorSet.matchesSelector(n, c.selector) || t.push([te, n, c]))
                        }
                }
            }
            var ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                ce = 0;

            function le(e) {
                var t, n, o;
                this.rootNode = 9 === e.nodeType ? e.documentElement : e, this.ownerDocument = 9 === e.nodeType ? e : e.ownerDocument, this.observers = [], this.selectorSet = new A, this.mutationObserver = new MutationObserver(function(e, t) {
                    var n = [];
                    oe(e, n, t), Y(e, n)
                }.bind(this, this)), this._scheduleAddRootNodes = F(this.ownerDocument, function(e) {
                    var t = [];
                    re(e, t, [e.rootNode]), Y(e, t)
                }.bind(this, this)), this._handleThrottledChangedTargets = F(this.ownerDocument, function(e, t) {
                    var n = [];
                    (function(e, t, n) {
                        for (var o = 0; o < n.length; o++)
                            for (var r = n[o], i = r.form ? r.form.elements : e.rootNode.querySelectorAll("input"), s = 0; s < i.length; s++) se(e, t, i[s])
                    })(e, n, t), Y(e, n)
                }.bind(this, this)), this.rootNode.addEventListener("change", function(e, t) {
                    e._handleThrottledChangedTargets(t.target)
                }.bind(this, this), !1), t = this.ownerDocument, n = function(e) {
                    e.mutationObserver.observe(e.rootNode, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    }), e._scheduleAddRootNodes()
                }.bind(this, this), "interactive" === (o = t.readyState) || "complete" === o ? B(t, n) : t.addEventListener("DOMContentLoaded", B(t, n))
            }
            le.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, le.prototype.observe = function(e, t) {
                var n = void 0;
                "function" == typeof t ? n = {
                    selector: e,
                    initialize: t
                } : "object" === (void 0 === t ? "undefined" : ae(t)) ? (n = t).selector = e : n = e;
                var o = this,
                    r = {
                        id: ce++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : Element,
                        abort: function() {
                            o._abortObserving(r)
                        }
                    };
                return this.selectorSet.add(r.selector, r), this.observers[r.id] = r, this._scheduleAddRootNodes(), r
            }, le.prototype._abortObserving = function(e) {
                for (var t = e.elements, n = 0; n < t.length; n++) J(e, t[n]);
                this.selectorSet.remove(e.selector, e), delete this.observers[e.id]
            }, le.prototype.triggerObservers = function(e) {
                var t = [];
                ! function(e, t, n) {
                    if ("querySelectorAll" in n) {
                        se(e, t, n);
                        for (var o = n.querySelectorAll("*"), r = 0; r < o.length; r++) se(e, t, o[r])
                    }
                }(this, t, e), Y(this, t)
            };
            var ue = void 0;

            function de() {
                return ue || (ue = new le(window.document)), ue
            }

            function fe() {
                var e;
                return (e = de()).observe.apply(e, arguments)
            }
            var me = {},
                pe = {},
                he = new WeakMap,
                ge = new WeakMap,
                ve = new WeakMap,
                be = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function we(e, t, n) {
                var o = e[t];
                return e[t] = function() {
                    return n.apply(e, arguments), o.apply(e, arguments)
                }, e
            }

            function ye() {
                he.set(this, !0)
            }

            function Ee() {
                he.set(this, !0), ge.set(this, !0)
            }

            function Te() {
                return ve.get(this) || null
            }

            function Le(e, t) {
                be && Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: t || be.get
                })
            }

            function je(e) {
                var t = (1 === e.eventPhase ? pe : me)[e.type];
                if (t) {
                    var n = function(e, t, n) {
                        var o = [],
                            r = t;
                        do {
                            if (1 !== r.nodeType) break;
                            var i = e.matches(r);
                            if (i.length) {
                                var s = {
                                    node: r,
                                    observers: i
                                };
                                n ? o.unshift(s) : o.push(s)
                            }
                        } while (r = r.parentElement);
                        return o
                    }(t, e.target, 1 === e.eventPhase);
                    if (n.length) {
                        we(e, "stopPropagation", ye), we(e, "stopImmediatePropagation", Ee), Le(e, Te);
                        for (var o = 0, r = n.length; o < r && !he.get(e); o++) {
                            var i = n[o];
                            ve.set(e, i.node);
                            for (var s = 0, a = i.observers.length; s < a && !ge.get(e); s++) i.observers[s].data.call(i.node, e)
                        }
                        ve.delete(e), Le(e)
                    }
                }
            }

            function ke(e, t, n) {
                var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
                    r = o ? pe : me,
                    i = r[e];
                i || (i = new A, r[e] = i, document.addEventListener(e, je, o)), i.add(t, n)
            }

            function xe(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }

            function Ae(e, t) {
                const n = e.head;
                if (!n) return "";
                for (const o of n.getElementsByTagName("meta"))
                    if (o.name === t) return o.content;
                return ""
            }

            function Se(e) {
                const t = Ae(e, "expected-hostname");
                return !!t && t.replace(/\.$/, "").split(".").slice(-2).join(".") !== e.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
            }
            const Me = e("R", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(e => {
                    document.addEventListener("DOMContentLoaded", () => {
                        e()
                    })
                })),
                _e = e("L", "complete" === document.readyState ? Promise.resolve() : new Promise(e => {
                    window.addEventListener("load", e)
                })),
                Ce = [],
                Ie = "text/plain",
                He = ["application/x-www-form-urlencoded", "multipart/form-data", Ie];

            function De(e, t, n) {
                Oe && navigator.sendBeacon && function(e) {
                    const t = e.split(";")[0];
                    return He.indexOf(t) > -1
                }(n) ? navigator.sendBeacon(e, new Blob([t], {
                    type: n
                })) : Re(e, t, n)
            }
            let qe, Oe = !1;
            "sendBeacon" in window.navigator ? Oe = !0 : navigator.sendBeacon = function(e, t) {
                return t instanceof Blob ? (function(e) {
                    const t = new FileReader,
                        n = new Promise(function(e, n) {
                            t.onload = (() => {
                                "string" == typeof t.result ? e(t.result) : n(new Error("readAsText yielded non-string result"))
                            }), t.onerror = (() => {
                                n(t.error)
                            })
                        });
                    return t.readAsText(e), n
                }(t).then(function(n) {
                    const o = "string" == typeof t.type && "" !== t.type ? t.type : Ie;
                    Re(e, n, o)
                }), !0) : (Re(e, t, Ie), !0)
            };
            let Pe = !1;

            function Re(e, t, n) {
                const o = {
                    url: String(e),
                    data: t,
                    type: n
                };
                if (Pe) {
                    const e = Fe() || [];
                    e.push(o), Be(e)
                } else Ce.push(o), qe && clearTimeout(qe), qe = setTimeout(function() {
                    Ne(Ce), Ce.length = 0
                }, 20);
                return !0
            }

            function Ne(e) {
                for (const n of e) {
                    const e = new XMLHttpRequest;
                    try {
                        e.open("POST", n.url, !0), e.setRequestHeader("Content-Type", n.type), e.send(n.data)
                    } catch (t) {}
                }
            }
            window.addEventListener("beforeunload", function(e) {
                setTimeout(function() {
                    e.defaultPrevented || (Pe = !0, qe && clearTimeout(qe), Ce.length > 0 && Be(Ce))
                })
            }), async function() {
                await Me;
                const e = Fe();
                e && (Ne(e), function() {
                    try {
                        sessionStorage.removeItem($e)
                    } catch (e) {}
                }())
            }();
            const $e = "send-beacon-queue";

            function Fe() {
                let e;
                try {
                    e = sessionStorage.getItem($e)
                } catch (t) {}
                if (e) return JSON.parse(e)
            }

            function Be(e) {
                const t = JSON.stringify(e);
                try {
                    sessionStorage.setItem($e, t)
                } catch (n) {}
            }
            let Ue = [];

            function We(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                void 0 === e.timestamp && (e.timestamp = (new Date).getTime()), Ue.push(e), t ? Ve() : async function() {
                    await _e, null == Xe && (Xe = requestIdleCallback(Ve))
                }()
            }
            let Xe = null;

            function Ve() {
                if (Xe = null, Se(document)) return;
                const e = Ae(document, "browser-stats-url");
                e && (De(e, JSON.stringify({
                    stats: Ue
                }), "text/plain"), Ue = [])
            }
            ke("click", "[data-hydro-click]", function(e) {
                const t = e.currentTarget;
                We({
                    hydroEventPayload: t.getAttribute("data-hydro-click"),
                    hydroEventHmac: t.getAttribute("data-hydro-click-hmac"),
                    hydroClientContext: t.getAttribute("data-hydro-client-context")
                }, !0)
            });
            let ze = !1;
            const Ye = new A;

            function Ge(e) {
                const t = e.target;
                if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of Ye.matches(t)) n.data.call(null, t)
            }

            function Ke(e, t) {
                ze || (ze = !0, document.addEventListener("focus", Ge, !0)), Ye.add(e, t), document.activeElement && document.activeElement.matches(e) && t(document.activeElement)
            }

            function Je(e, t, n) {
                function o(t) {
                    t.currentTarget.removeEventListener(e, n), t.currentTarget.removeEventListener("blur", o)
                }
                Ke(t, function(t) {
                    t.addEventListener(e, n), t.addEventListener("blur", o)
                })
            }
            const Qe = [];
            let Ze, et = 0;

            function tt() {
                return Ze
            }

            function nt() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (e) {
                    return 0
                }
            }

            function ot() {
                return nt() - 1 + et
            }

            function rt(e) {
                Ze = e;
                const t = location.href;
                Qe[ot()] = {
                    url: t,
                    state: Ze
                }, Qe.length = nt(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function it() {
                return (new Date).getTime()
            }

            function st(e, t, n) {
                et = 0;
                const o = Object.assign({}, {
                    _id: it()
                }, e);
                history.pushState(o, t, n), rt(o)
            }

            function at(e, t, n) {
                const o = Object.assign({}, {
                    _id: tt()._id
                }, e);
                history.replaceState(o, t, n), rt(o)
            }

            function ct(e) {
                this.wrapped = e
            }

            function lt(e) {
                var t, n;

                function o(t, n) {
                    try {
                        var i = e[t](n),
                            s = i.value,
                            a = s instanceof ct;
                        Promise.resolve(a ? s.wrapped : s).then(function(e) {
                            a ? o("next", e) : r(i.done ? "return" : "normal", e)
                        }, function(e) {
                            o("throw", e)
                        })
                    } catch (c) {
                        r("throw", c)
                    }
                }

                function r(e, r) {
                    switch (e) {
                        case "return":
                            t.resolve({
                                value: r,
                                done: !0
                            });
                            break;
                        case "throw":
                            t.reject(r);
                            break;
                        default:
                            t.resolve({
                                value: r,
                                done: !1
                            })
                    }(t = t.next) ? o(t.key, t.arg): n = null
                }
                this._invoke = function(e, r) {
                    return new Promise(function(i, s) {
                        var a = {
                            key: e,
                            arg: r,
                            resolve: i,
                            reject: s,
                            next: null
                        };
                        n ? n = n.next = a : (t = n = a, o(e, r))
                    })
                }, "function" != typeof e.return && (this.return = void 0)
            }

            function ut(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            Ze = function() {
                const e = {
                    _id: (new Date).getTime()
                };
                return rt(e), e
            }(), window.addEventListener("popstate", function(e) {
                if (!e.state || !e.state._id) return;
                e.state._id < tt()._id ? et-- : et++, rt(e.state)
            }, !0), window.addEventListener("hashchange", function() {
                if (nt() > Qe.length) {
                    const e = {
                        _id: it()
                    };
                    history.replaceState(e, "", location.href), rt(e)
                }
            }, !0), "function" == typeof Symbol && Symbol.asyncIterator && (lt.prototype[Symbol.asyncIterator] = function() {
                return this
            }), lt.prototype.next = function(e) {
                return this._invoke("next", e)
            }, lt.prototype.throw = function(e) {
                return this._invoke("throw", e)
            }, lt.prototype.return = function(e) {
                return this._invoke("return", e)
            };

            function dt(e, t) {
                return ft(e) || function(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }(e, t) || mt()
            }

            function ft(e) {
                if (Array.isArray(e)) return e
            }

            function mt() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
            var pt;
            pt = "function" == typeof FormData && "entries" in FormData.prototype ? function(e) {
                return Array.from(new FormData(e).entries())
            } : function(e) {
                for (var t = [], n = e.elements, o = 0; o < n.length; o++) {
                    var r = n[o],
                        i = r.tagName.toUpperCase();
                    if ("SELECT" === i || "TEXTAREA" === i || "INPUT" === i) {
                        var s = r.type,
                            a = r.name;
                        if (a && !r.disabled && "submit" !== s && "reset" !== s && "button" !== s && ("radio" !== s && "checkbox" !== s || r.checked))
                            if ("SELECT" === i)
                                for (var c = r.getElementsByTagName("option"), l = 0; l < c.length; l++) {
                                    var u = c[l];
                                    u.selected && t.push([a, u.value])
                                } else "file" === s ? (console.warn("form-data-entries could not serialize <input type=file>", r), t.push([a, ""])) : t.push([a, r.value])
                    }
                }
                return t
            };
            var ht = e("ay", pt);

            function gt(e) {
                const t = e.querySelector("input.is-submit-button-value");
                return t instanceof HTMLInputElement ? t : null
            }

            function vt(e) {
                const t = e.closest("form");
                if (!(t instanceof HTMLFormElement)) return;
                let n = gt(t);
                if (e.name) {
                    const o = e.matches("input[type=submit]") ? "Submit" : "",
                        r = e.value || o;
                    n || ((n = document.createElement("input")).type = "hidden", n.classList.add("is-submit-button-value"), t.prepend(n)), n.name = e.name, n.value = r
                } else n && n.remove()
            }

            function bt(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function wt(e, t) {
                t && vt(t), bt(e, "submit", !0) && e.submit()
            }

            function yt(e, t) {
                if ("boolean" == typeof t) {
                    if (!(e instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                    e.checked = t
                } else {
                    if ("checkbox" === e.type) throw new TypeError("checkbox can't be set to string value");
                    e.value = t
                }
                bt(e, "change", !1)
            }

            function Et(e) {
                if (!(e instanceof HTMLElement)) return !1;
                const t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
            }

            function Tt(e) {
                const t = new URLSearchParams;
                for (const o of ht(e)) {
                    var n = dt(o, 2);
                    const e = n[0],
                        r = n[1];
                    t.append(e, r)
                }
                return t.toString()
            }

            function Lt(e) {
                return new Promise(function(t) {
                    function n() {
                        e.hasFocus() && (t(), e.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n), window.removeEventListener("blur", n))
                    }
                    e.addEventListener("visibilitychange", n), window.addEventListener("focus", n), window.addEventListener("blur", n), n()
                })
            }
            let jt, kt = 0,
                xt = -1;

            function At(e) {
                const t = e.getBoundingClientRect(),
                    n = window.innerHeight,
                    o = window.innerWidth;
                if (0 === t.height) return !1;
                if (t.height < n) return t.top >= 0 && t.left >= 0 && t.bottom <= n && t.right <= o; {
                    const e = Math.ceil(n / 2);
                    return t.top >= 0 && t.top + e < n
                }
            }

            function St(e) {
                for (const t of e.elements) At(t) ? e.in.call(t, t, e) : e.out && e.out.call(t, t, e)
            }
            class Mt extends Error {
                constructor(e, t) {
                    super(e), this.response = t
                }
            }

            function _t() {
                let e, t;
                const n = new Promise(function(n, o) {
                    e = n, t = o
                });
                return x("function" == typeof e, "null.js:40"), x("function" == typeof t, "null.js:41"), [n, e, t]
            }
            const Ct = [],
                It = [];

            function Ht(e) {
                Ct.push(e)
            }

            function Dt(e, t) {
                jt || (jt = new A, document.addEventListener("submit", qt)), jt.add(e, t)
            }

            function qt(e) {
                if (!(e.target instanceof HTMLFormElement)) return;
                const t = e.target,
                    n = jt && jt.matches(t);
                if (!n || 0 === n.length) return;
                const o = function(e) {
                        const t = {
                            method: e.method || "GET",
                            url: e.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === t.method.toUpperCase()) {
                            const n = function(e) {
                                const t = new URLSearchParams;
                                for (const o of ht(e)) {
                                    var n = dt(o, 2);
                                    const e = n[0],
                                        r = n[1];
                                    t.append(e, r)
                                }
                                return t.toString()
                            }(e);
                            n && (t.url += (~t.url.indexOf("?") ? "&" : "?") + n)
                        } else t.body = new FormData(e);
                        return t
                    }(t),
                    r = dt(_t(), 3),
                    i = r[0],
                    s = r[1],
                    a = r[2];
                e.preventDefault(), async function(e, t, n, o) {
                    let r = !1;
                    for (const i of e) {
                        const e = _t(),
                            s = dt(e, 2),
                            a = s[0],
                            c = s[1],
                            l = () => (r = !0, c(), o),
                            u = {
                                text: l,
                                json: () => (n.headers.set("Accept", "application/json"), l()),
                                html: () => (n.headers.set("Accept", "text/html"), l())
                            };
                        await Promise.race([a, i.data.call(null, t, u, n)])
                    }
                    return r
                }(n, t, o, i).then(async e => {
                    if (e) {
                        for (const e of It) await e(t);
                        (async function(e) {
                            const t = await window.fetch(e.url, {
                                    method: e.method,
                                    body: null !== e.body ? e.body : void 0,
                                    headers: e.headers,
                                    credentials: "same-origin"
                                }),
                                n = {
                                    url: t.url,
                                    status: t.status,
                                    statusText: t.statusText,
                                    headers: t.headers,
                                    text: "",
                                    get json() {
                                        const e = JSON.parse(this.text);
                                        return delete this.json, this.json = e, this.json
                                    },
                                    get html() {
                                        h(m(document), this);
                                        const e = function(e, t) {
                                            const n = e.createElement("template");
                                            return n.innerHTML = t, e.importNode(n.content, !0)
                                        }(document, this.text);
                                        return delete this.html, this.html = e, this.html
                                    }
                                },
                                o = await t.text();
                            if (n.text = o, n.status < 300) return n;
                            throw new Mt("request failed", n)
                        })(o).then(s, a).catch(() => {}).then(() => {
                            for (const e of Ct) e(t)
                        })
                    } else t.submit()
                }, e => {
                    t.submit(), setTimeout(() => {
                        throw e
                    })
                })
            }
            const Ot = new WeakMap;

            function Pt(e) {
                const t = Ot.get(e);
                x(t, "null.js:24"), null != t.timer && clearTimeout(t.timer), t.timer = setTimeout(() => {
                    null != t.timer && (t.timer = null), t.inputed = !1, t.listener.call(null, e)
                }, t.wait)
            }

            function Rt(e) {
                const t = Ot.get(e.currentTarget);
                x(t, "null.js:36"), t.keypressed = !0, null != t.timer && clearTimeout(t.timer)
            }

            function Nt(e) {
                const t = Ot.get(e.currentTarget);
                x(t, "null.js:45"), x(e.currentTarget instanceof HTMLInputElement || e.currentTarget instanceof HTMLTextAreaElement, "null.js:46"), t.keypressed = !1, t.inputed && Pt(e.currentTarget)
            }

            function $t(e) {
                const t = Ot.get(e.currentTarget);
                x(t, "null.js:55"), x(e.currentTarget instanceof HTMLInputElement || e.currentTarget instanceof HTMLTextAreaElement, "null.js:56"), t.inputed = !0, t.keypressed || Pt(e.currentTarget)
            }

            function Ft(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Ot.set(e, {
                    keypressed: !1,
                    inputed: !1,
                    timer: void 0,
                    listener: t,
                    wait: null != n.wait ? n.wait : 100
                }), e.addEventListener("keydown", Rt), e.addEventListener("keyup", Nt), e.addEventListener("input", $t)
            }

            function Bt(e, t) {
                e.removeEventListener("keydown", Rt), e.removeEventListener("keyup", Nt), e.removeEventListener("input", $t);
                const n = Ot.get(e);
                n && (null != n.timer && n.listener === t && clearTimeout(n.timer), Ot.delete(e))
            }
            async function Ut(e, t) {
                const n = y(e, t);
                n.headers.set("Accept", "application/json");
                const o = await self.fetch(n);
                return w(o, new v(o)), o.json()
            }

            function Wt(e) {
                const t = atob(e),
                    n = new ArrayBuffer(t.length),
                    o = new Uint8Array(n);
                for (let r = 0; r < t.length; r++) o[r] = t.charCodeAt(r);
                return n
            }

            function Xt(e) {
                const t = new Uint8Array(e);
                let n = "";
                for (const o of t) n += String.fromCharCode(o);
                return btoa(n)
            }

            function Vt(e) {
                const t = "==".slice(0, (4 - e.length % 4) % 4);
                return e.replace(/-/g, "+").replace(/_/g, "/") + t
            }

            function zt() {
                const e = navigator.credentials;
                if ("undefined" != typeof CredentialsContainer && e instanceof CredentialsContainer) return e
            }

            function Yt() {
                return "true" === Ae(document, "u2f-enabled")
            }

            function Gt() {
                return !!window.u2f
            }

            function Kt() {
                const e = zt();
                return !!e && "function" == typeof e.get && "function" == typeof PublicKeyCredential && "function" == typeof AuthenticatorResponse && "function" == typeof AuthenticatorAssertionResponse && "function" == typeof AuthenticatorAttestationResponse
            }

            function Jt() {
                return Kt() ? "supported" : "unsupported"
            }

            function Qt() {
                return "true" === Ae(document, "webauthn-auth-enabled") && Kt()
            }
            async function Zt(e) {
                const t = l(document, "#site-details-dialog", HTMLTemplateElement).content.cloneNode(!0),
                    n = l(t, "details"),
                    o = l(n, "details-dialog"),
                    r = l(n, ".js-details-dialog-spinner");
                e.dialogClass && o.classList.add(...e.dialogClass.split(" ")), x(document.body, "null.js:21"), document.body.append(t);
                const i = await e.content;
                return r.remove(), o.prepend(i), n.addEventListener("toggle", () => {
                    n.hasAttribute("open") || (xe(o, "dialog:remove"), n.remove())
                }), o
            }
            let en = !1;
            ! function() {
                var e = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0;
                if (!("u2f" in window) && e) {
                    var t, n = window.u2f = {};
                    n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd", n.MessageTypes = {
                        U2F_REGISTER_REQUEST: "u2f_register_request",
                        U2F_REGISTER_RESPONSE: "u2f_register_response",
                        U2F_SIGN_REQUEST: "u2f_sign_request",
                        U2F_SIGN_RESPONSE: "u2f_sign_response",
                        U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
                        U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
                    }, n.ErrorCodes = {
                        OK: 0,
                        OTHER_ERROR: 1,
                        BAD_REQUEST: 2,
                        CONFIGURATION_UNSUPPORTED: 3,
                        DEVICE_INELIGIBLE: 4,
                        TIMEOUT: 5
                    }, n.U2fRequest, n.U2fResponse, n.Error, n.Transport, n.Transports, n.SignRequest, n.SignResponse, n.RegisterRequest, n.RegisterResponse, n.RegisteredKey, n.GetJsApiVersionResponse, n.getMessagePort = function(e) {
                        if ("undefined" != typeof chrome && chrome.runtime) {
                            var t = {
                                type: n.MessageTypes.U2F_SIGN_REQUEST,
                                signRequests: []
                            };
                            chrome.runtime.sendMessage(n.EXTENSION_ID, t, function() {
                                chrome.runtime.lastError ? n.getIframePort_(e) : n.getChromeRuntimePort_(e)
                            })
                        } else n.isAndroidChrome_() ? n.getAuthenticatorPort_(e) : n.isIosChrome_() ? n.getIosPort_(e) : n.getIframePort_(e)
                    }, n.isAndroidChrome_ = function() {
                        var e = navigator.userAgent;
                        return -1 != e.indexOf("Chrome") && -1 != e.indexOf("Android")
                    }, n.isIosChrome_ = function() {
                        return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1
                    }, n.getChromeRuntimePort_ = function(e) {
                        var t = chrome.runtime.connect(n.EXTENSION_ID, {
                            includeTlsChannelId: !0
                        });
                        setTimeout(function() {
                            e(new n.WrappedChromeRuntimePort_(t))
                        }, 0)
                    }, n.getAuthenticatorPort_ = function(e) {
                        setTimeout(function() {
                            e(new n.WrappedAuthenticatorPort_)
                        }, 0)
                    }, n.getIosPort_ = function(e) {
                        setTimeout(function() {
                            e(new n.WrappedIosPort_)
                        }, 0)
                    }, n.WrappedChromeRuntimePort_ = function(e) {
                        this.port_ = e
                    }, n.formatSignRequest_ = function(e, o, r, i, s) {
                        if (void 0 === t || t < 1.1) {
                            for (var a = [], c = 0; c < r.length; c++) a[c] = {
                                version: r[c].version,
                                challenge: o,
                                keyHandle: r[c].keyHandle,
                                appId: e
                            };
                            return {
                                type: n.MessageTypes.U2F_SIGN_REQUEST,
                                signRequests: a,
                                timeoutSeconds: i,
                                requestId: s
                            }
                        }
                        return {
                            type: n.MessageTypes.U2F_SIGN_REQUEST,
                            appId: e,
                            challenge: o,
                            registeredKeys: r,
                            timeoutSeconds: i,
                            requestId: s
                        }
                    }, n.formatRegisterRequest_ = function(e, o, r, i, s) {
                        if (void 0 === t || t < 1.1) {
                            for (var a = 0; a < r.length; a++) r[a].appId = e;
                            var c = [];
                            for (a = 0; a < o.length; a++) c[a] = {
                                version: o[a].version,
                                challenge: r[0],
                                keyHandle: o[a].keyHandle,
                                appId: e
                            };
                            return {
                                type: n.MessageTypes.U2F_REGISTER_REQUEST,
                                signRequests: c,
                                registerRequests: r,
                                timeoutSeconds: i,
                                requestId: s
                            }
                        }
                        return {
                            type: n.MessageTypes.U2F_REGISTER_REQUEST,
                            appId: e,
                            registerRequests: r,
                            registeredKeys: o,
                            timeoutSeconds: i,
                            requestId: s
                        }
                    }, n.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
                        this.port_.postMessage(e)
                    }, n.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
                        var n = e.toLowerCase();
                        "message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(e) {
                            t({
                                data: e
                            })
                        }) : console.error("WrappedChromeRuntimePort only supports onMessage")
                    }, n.WrappedAuthenticatorPort_ = function() {
                        this.requestId_ = -1, this.requestObject_ = null
                    }, n.WrappedAuthenticatorPort_.prototype.postMessage = function(e) {
                        var t = n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
                        document.location = t
                    }, n.WrappedAuthenticatorPort_.prototype.getPortType = function() {
                        return "WrappedAuthenticatorPort_"
                    }, n.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) {
                        if ("message" == e.toLowerCase()) {
                            window.addEventListener("message", this.onRequestUpdate_.bind(this, t), !1)
                        } else console.error("WrappedAuthenticatorPort only supports message")
                    }, n.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) {
                        var n = JSON.parse(t.data),
                            o = (n.intentURL, n.errorCode, null);
                        n.hasOwnProperty("data") && (o = JSON.parse(n.data)), e({
                            data: o
                        })
                    }, n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE", n.WrappedIosPort_ = function() {}, n.WrappedIosPort_.prototype.postMessage = function(e) {
                        var t = JSON.stringify(e),
                            n = "u2f://auth?" + encodeURI(t);
                        location.replace(n)
                    }, n.WrappedIosPort_.prototype.getPortType = function() {
                        return "WrappedIosPort_"
                    }, n.WrappedIosPort_.prototype.addEventListener = function(e, t) {
                        "message" !== e.toLowerCase() && console.error("WrappedIosPort only supports message")
                    }, n.getIframePort_ = function(e) {
                        var t = "chrome-extension://" + n.EXTENSION_ID,
                            o = document.createElement("iframe");
                        o.src = t + "/u2f-comms.html", o.setAttribute("style", "display:none"), document.body.appendChild(o);
                        var r = new MessageChannel,
                            i = function(t) {
                                "ready" == t.data ? (r.port1.removeEventListener("message", i), e(r.port1)) : console.error('First event on iframe port was not "ready"')
                            };
                        r.port1.addEventListener("message", i), r.port1.start(), o.addEventListener("load", function() {
                            o.contentWindow.postMessage("init", t, [r.port2])
                        })
                    }, n.EXTENSION_TIMEOUT_SEC = 30, n.port_ = null, n.waitingForPort_ = [], n.reqCounter_ = 0, n.callbackMap_ = {}, n.getPortSingleton_ = function(e) {
                        n.port_ ? e(n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort(function(e) {
                            for (n.port_ = e, n.port_.addEventListener("message", n.responseHandler_); n.waitingForPort_.length;) n.waitingForPort_.shift()(n.port_)
                        }), n.waitingForPort_.push(e))
                    }, n.responseHandler_ = function(e) {
                        var t = e.data,
                            o = t.requestId;
                        if (o && n.callbackMap_[o]) {
                            var r = n.callbackMap_[o];
                            delete n.callbackMap_[o], r(t.responseData)
                        } else console.error("Unknown or missing requestId in response.")
                    }, n.sign = function(e, o, r, i, s) {
                        void 0 === t ? n.getApiVersion(function(a) {
                            t = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", t), n.sendSignRequest(e, o, r, i, s)
                        }) : n.sendSignRequest(e, o, r, i, s)
                    }, n.sendSignRequest = function(e, t, o, r, i) {
                        n.getPortSingleton_(function(s) {
                            var a = ++n.reqCounter_;
                            n.callbackMap_[a] = r;
                            var c = void 0 !== i ? i : n.EXTENSION_TIMEOUT_SEC,
                                l = n.formatSignRequest_(e, t, o, c, a);
                            s.postMessage(l)
                        })
                    }, n.register = function(e, o, r, i, s) {
                        void 0 === t ? n.getApiVersion(function(a) {
                            t = void 0 === a.js_api_version ? 0 : a.js_api_version, console.log("Extension JS API Version: ", t), n.sendRegisterRequest(e, o, r, i, s)
                        }) : n.sendRegisterRequest(e, o, r, i, s)
                    }, n.sendRegisterRequest = function(e, t, o, r, i) {
                        n.getPortSingleton_(function(s) {
                            var a = ++n.reqCounter_;
                            n.callbackMap_[a] = r;
                            var c = void 0 !== i ? i : n.EXTENSION_TIMEOUT_SEC,
                                l = n.formatRegisterRequest_(e, o, t, c, a);
                            s.postMessage(l)
                        })
                    }, n.getApiVersion = function(e, t) {
                        n.getPortSingleton_(function(o) {
                            if (o.getPortType) {
                                var r;
                                switch (o.getPortType()) {
                                    case "WrappedIosPort_":
                                    case "WrappedAuthenticatorPort_":
                                        r = 1.1;
                                        break;
                                    default:
                                        r = 0
                                }
                                e({
                                    js_api_version: r
                                })
                            } else {
                                var i = ++n.reqCounter_;
                                n.callbackMap_[i] = e;
                                var s = {
                                    type: n.MessageTypes.U2F_GET_API_VERSION_REQUEST,
                                    timeoutSeconds: void 0 !== t ? t : n.EXTENSION_TIMEOUT_SEC,
                                    requestId: i
                                };
                                o.postMessage(s)
                            }
                        })
                    }
                }
            }();
            const tn = 1;
            class nn extends Error {
                constructor(e, t) {
                    super(e), this.code = t
                }
            }

            function on(e) {
                return void 0 === e.errorCode || 0 === e.errorCode ? tn : e.errorCode
            }
            if ("undefined" == typeof window);
            window.requestIdleCallback = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout(function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }, 1)
            }, window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            };
            e("ar", "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});

            function rn(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            rn(function(e, t) {
                ! function() {
                    var t = window,
                        n = document;

                    function o() {
                        if (!("scrollBehavior" in n.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                            var e, o = t.HTMLElement || t.Element,
                                r = 468,
                                i = (e = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0),
                                s = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: o.prototype.scroll || c,
                                    scrollIntoView: o.prototype.scrollIntoView
                                },
                                a = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
                            t.scroll = t.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, n.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : s.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                            }, t.scrollBy = function() {
                                void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, n.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                            }, o.prototype.scroll = o.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== l(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");
                                        s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, o.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, o.prototype.scrollIntoView = function() {
                                if (!0 !== l(arguments[0])) {
                                    var e = function(e) {
                                            var t;
                                            do {
                                                t = (e = e.parentNode) === n.body
                                            } while (!1 === t && !1 === f(e));
                                            return t = null, e
                                        }(this),
                                        o = e.getBoundingClientRect(),
                                        r = this.getBoundingClientRect();
                                    e !== n.body ? (p.call(this, e, e.scrollLeft + r.left - o.left, e.scrollTop + r.top - o.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: r.left,
                                        top: r.top,
                                        behavior: "smooth"
                                    })
                                } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function c(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function l(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function u(e, t) {
                            return "Y" === t ? e.clientHeight + i < e.scrollHeight : "X" === t ? e.clientWidth + i < e.scrollWidth : void 0
                        }

                        function d(e, n) {
                            var o = t.getComputedStyle(e, null)["overflow" + n];
                            return "auto" === o || "scroll" === o
                        }

                        function f(e) {
                            var t = u(e, "Y") && d(e, "Y"),
                                n = u(e, "X") && d(e, "X");
                            return t || n
                        }

                        function m(e) {
                            var n, o, i, s, c = (a() - e.startTime) / r;
                            s = c = c > 1 ? 1 : c, n = .5 * (1 - Math.cos(Math.PI * s)), o = e.startX + (e.x - e.startX) * n, i = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, o, i), o === e.x && i === e.y || t.requestAnimationFrame(m.bind(t, e))
                        }

                        function p(e, o, r) {
                            var i, l, u, d, f = a();
                            e === n.body ? (i = t, l = t.scrollX || t.pageXOffset, u = t.scrollY || t.pageYOffset, d = s.scroll) : (i = e, l = e.scrollLeft, u = e.scrollTop, d = c), m({
                                scrollable: i,
                                method: d,
                                startTime: f,
                                startX: l,
                                startY: u,
                                x: o,
                                y: r
                            })
                        }
                    }
                    e.exports = {
                        polyfill: o
                    }
                }()
            }).polyfill;
            window.getSelection && ! function() {
                const e = document.createElement("div");
                return e.style.cssText = "-ms-user-select: element; user-select: contain;", "element" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("user-select")
            }() && document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".user-select-contain");
                if (!t) return;
                const n = window.getSelection();
                if (!n.rangeCount) return;
                const o = n.getRangeAt(0).commonAncestorContainer;
                t.contains(o) || n.selectAllChildren(t)
            }), window.Element && !Element.prototype.toggleAttribute && (Element.prototype.toggleAttribute = function(e, t) {
                var n = !!t,
                    o = 2 === arguments.length && !t;
                return null !== this.getAttribute(e) ? !!n || (this.removeAttribute(e), !1) : !o && (this.setAttribute(e, ""), !0)
            });
            let sn = 0;

            function an(e) {
                const t = e.body || {},
                    n = new Error("ReportingObserverError");
                ln({
                    bucket: "github-js-reports",
                    error: {
                        columnNumber: t.columnNumber,
                        fileName: "" === t.sourceFile ? n.fileName : t.sourceFile,
                        lineNumber: t.lineNumber,
                        message: t.message || n.message,
                        name: t.id,
                        stack: n.stack
                    },
                    url: e.url
                })
            }

            function cn(e) {
                ln(dn(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
            }

            function ln(e) {
                const t = Ae(document, "browser-errors-url");
                t && (sn++, window.fetch(t, {
                    method: "post",
                    body: JSON.stringify(e)
                }).catch(function() {}))
            }
            const un = (new Date).getTime();

            function dn(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e) {
                    let o;
                    if (e.stack) {
                        const t = e.framesToPop;
                        o = function(e, t) {
                            let n = e.split("\n");
                            n.length >= 2 && fn.test(n[0]) && mn.test(n[1]) && n.shift();
                            null != t && (n = n.slice(t));
                            return n.join("\n")
                        }(e.stack, t)
                    } else {
                        let t = e.fileName,
                            r = e.lineNumber,
                            i = e.columnNumber;
                        null == t && (t = String(n.filename)), null == r && (r = n.lineno || 0), null == i && (i = n.colno || 0), o = `${t}:${r}:${i}`
                    }
                    t = {
                        message: e.message,
                        name: e.name,
                        stack: o,
                        toString: e.toString()
                    }
                }
                return Object.assign({
                    error: t,
                    filename: "",
                    lineno: 0,
                    colno: 0,
                    url: window.location.href,
                    readyState: document.readyState,
                    referrer: document.referrer,
                    timeSinceLoad: Math.round((new Date).getTime() - un),
                    user: pn()
                }, n)
            }
            const fn = /^\S/,
                mn = /^\s+at /;

            function pn() {
                const e = Ae(document, "user-login");
                if (e) return e;
                const t = window._octo && window._octo._clientId();
                return t ? `anonymous-${t}` : null
            }
            let hn = !1;

            function gn() {
                return !hn && sn < 10 && "function" == typeof Blob && "undefined" != typeof customElements && "undefined" != typeof Intl && "undefined" != typeof MutationObserver && !Se(document)
            }
            window.addEventListener("pageshow", () => {
                    hn = !1
                }), window.addEventListener("pagehide", () => {
                    hn = !0
                }), window.addEventListener("error", function(e) {
                    gn() && ln(function(e) {
                        const t = e.message,
                            n = e.filename,
                            o = e.lineno,
                            r = e.colno;
                        return dn(e.error, {
                            message: t,
                            filename: n,
                            lineno: o,
                            colno: r
                        })
                    }(e))
                }), window.addEventListener("unhandledrejection", function(e) {
                    gn() && e.promise && e.promise.catch(e => {
                        const t = {};
                        if (e && e.response instanceof Response) {
                            if (/^HTTP (401|403|405|429|502)/.test(e.message)) return;
                            t.dataRemoteUrl = e.response.url
                        }
                        cn(e, t)
                    })
                }), "#b00m" === window.location.hash && setTimeout(() => {
                    throw new Error("b00m")
                }),
                function() {
                    const e = window.ReportingObserver;
                    e && new e(e => {
                        for (const t of e) an(t)
                    }, {
                        buffered: !0
                    }).observe()
                }();
            const vn = new WeakMap;

            function bn(e, t) {
                setTimeout(function() {
                    t.dispatchEvent(new Event(e))
                }, 0)
            }

            function wn(e) {
                return yn(e).then(function(t) {
                    const n = e.parentNode;
                    n && (e.insertAdjacentHTML("afterend", t), n.removeChild(e))
                }, function() {
                    e.classList.add("is-error")
                })
            }

            function yn(e) {
                const t = e.src;
                let n = vn.get(e);
                return n && n.src === t ? n.data : (n = t ? e.load() : Promise.reject(new Error("missing src")), vn.set(e, {
                    src: t,
                    data: n
                }), n)
            }
            class En extends HTMLElement {
                constructor() {
                    super()
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    const e = this.getAttribute("src");
                    if (e) {
                        const t = this.ownerDocument.createElement("a");
                        return t.href = e, t.href
                    }
                    return ""
                }
                set src(e) {
                    e ? this.setAttribute("src", e) : this.removeAttribute("src")
                }
                get data() {
                    return yn(this)
                }
                attributeChangedCallback(e) {
                    "src" === e && this._attached && wn(this)
                }
                connectedCallback() {
                    this._attached = !0, this.src && wn(this)
                }
                disconnectedCallback() {
                    this._attached = !1
                }
                request() {
                    const e = this.src;
                    if (!e) throw new Error("missing src");
                    return new Request(e, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: "text/html"
                        }
                    })
                }
                load() {
                    return Promise.resolve().then(() => (bn("loadstart", this), this.fetch(this.request()))).then(e => {
                        if (200 !== e.status) throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);
                        const t = e.headers.get("Content-Type");
                        if (!t || !t.match(/^text\/html/)) throw new Error(`Failed to load resource: expected text/html but was ${t}`);
                        return e
                    }).then(e => e.text()).then(e => (bn("load", this), bn("loadend", this), e), e => {
                        throw bn("error", this), bn("loadend", this), e
                    })
                }
                fetch(e) {
                    return fetch(e)
                }
            }
            window.customElements.get("include-fragment") || (window.IncludeFragmentElement = En, window.customElements.define("include-fragment", En));
            const Tn = new WeakMap;

            function Ln(e, t) {
                const n = new XMLHttpRequest;
                return n.open("GET", t, !0), n.setRequestHeader("Accept", "text/html; fragment"),
                    function(e, t) {
                        const n = Tn.get(e);
                        n && n.abort();
                        Tn.set(e, t);
                        const o = () => Tn.delete(e),
                            r = function(e) {
                                return new Promise((t, n) => {
                                    e.onload = function() {
                                        e.status >= 200 && e.status < 300 ? t(e.responseText) : n(new Error(e.responseText))
                                    }, e.onerror = n, e.send()
                                })
                            }(t);
                        return r.then(o, o), r
                    }(e, n)
            }
            var jn = !1,
                kn = !!navigator.userAgent.match(/Macintosh/);

            function xn(e) {
                if (!(e.shiftKey || e.metaKey || e.altKey)) {
                    var t = e.currentTarget;
                    if ((t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) && !jn) {
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
                                Mn(n);
                                break;
                            case "ArrowDown":
                                Sn(t, n, 1), e.preventDefault();
                                break;
                            case "ArrowUp":
                                Sn(t, n, -1), e.preventDefault();
                                break;
                            case "n":
                                kn && e.ctrlKey && (Sn(t, n, 1), e.preventDefault());
                                break;
                            case "p":
                                kn && e.ctrlKey && (Sn(t, n, -1), e.preventDefault())
                        }
                    }
                }
            }

            function An(e) {
                if (e.target instanceof Element) {
                    var t = e.target.closest('[role="option"]');
                    t && "true" !== t.getAttribute("aria-disabled") && function(e) {
                        e.dispatchEvent(new CustomEvent("combobox-commit", {
                            bubbles: !0
                        }))
                    }(t)
                }
            }

            function Sn(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    o = t.querySelector('[aria-selected="true"]'),
                    r = Array.from(t.querySelectorAll('[role="option"]')),
                    i = r.indexOf(o),
                    s = 1 === n ? 0 : r.length - 1;
                if (o && i >= 0) {
                    var a = i + n;
                    a >= 0 && a < r.length && (s = a)
                }
                var c = r[s];
                if (c)
                    for (var l = 0; l < r.length; l++) {
                        var u = r[l];
                        c === u ? (e.setAttribute("aria-activedescendant", c.id), c.setAttribute("aria-selected", "true")) : u.setAttribute("aria-selected", "false")
                    }
            }

            function Mn(e) {
                var t = e.querySelector('[aria-selected="true"]');
                t && t.setAttribute("aria-selected", "false")
            }

            function _n(e) {
                var t = e.currentTarget;
                if (t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) {
                    jn = "compositionstart" === e.type;
                    var n = document.getElementById(t.getAttribute("aria-owns") || "");
                    n && Mn(n)
                }
            }
            class Cn {
                constructor(e, t, n) {
                    this.container = e, this.input = t, this.results = n, this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.mouseDown = !1, this.onInputChange = function(e, t) {
                            let n;
                            return function() {
                                for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                                clearTimeout(n), n = setTimeout(() => {
                                    clearTimeout(n), e(...r)
                                }, t)
                            }
                        }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit),
                        function(e, t) {
                            e.addEventListener("compositionstart", _n), e.addEventListener("compositionend", _n), e.addEventListener("keydown", xn), t.addEventListener("click", An)
                        }(this.input, this.results)
                }
                destroy() {
                    var e, t;
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit), e = this.input, t = this.results, e.removeAttribute("aria-activedescendant"), e.removeEventListener("compositionstart", _n), e.removeEventListener("compositionend", _n), e.removeEventListener("keydown", xn), t.removeEventListener("click", An)
                }
                sibling(e) {
                    const t = Array.from(this.results.querySelectorAll('[role="option"]')),
                        n = this.results.querySelector('[aria-selected="true"]'),
                        o = t.indexOf(n),
                        r = e ? t[o + 1] : t[o - 1],
                        i = e ? t[0] : t[t.length - 1];
                    return r || i
                }
                select(e) {
                    for (const t of this.results.querySelectorAll('[aria-selected="true"]')) t.removeAttribute("aria-selected");
                    e.setAttribute("aria-selected", "true"), this.input.setAttribute("aria-activedescendant", e.id),
                        function(e, t) {
                            (function(e, t) {
                                const n = e.scrollTop,
                                    o = n + e.clientHeight,
                                    r = t.offsetTop,
                                    i = r + t.clientHeight;
                                return r >= n && i <= o
                            })(e, t) || (e.scrollTop = t.offsetTop)
                        }(this.results, e)
                }
                onKeydown(e) {
                    "Escape" === e.key && this.container.open && (this.container.open = !1, e.stopPropagation(), e.preventDefault())
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    this.mouseDown || (this.container.open = !1)
                }
                onCommit(e) {
                    const t = e.target;
                    if (!(t instanceof HTMLElement)) return;
                    if (this.container.open = !1, t instanceof HTMLAnchorElement) return;
                    const n = t.getAttribute("data-autocomplete-value") || t.textContent;
                    this.container.value = n
                }
                onResultsMouseDown() {
                    this.mouseDown = !0, this.results.addEventListener("mouseup", () => this.mouseDown = !1, {
                        once: !0
                    })
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let e = 0;
                    for (const t of this.results.querySelectorAll('[role="option"]:not([id])')) t.id = `${this.results.id}-option-${e++}`
                }
                fetchResults() {
                    const e = this.input.value.trim();
                    if (!e) return void(this.container.open = !1);
                    const t = this.container.src;
                    if (!t) return;
                    const n = new URL(t, window.location.href),
                        o = new URLSearchParams(n.search.slice(1));
                    o.append("q", e), n.search = o.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), Ln(this.input, n.toString()).then(e => {
                        this.results.innerHTML = e, this.identifyOptions();
                        const t = !!this.results.querySelector('[role="option"]');
                        this.container.open = t, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }).catch(() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })
                }
                open() {
                    this.results.hidden && (this.results.hidden = !1, this.container.setAttribute("aria-expanded", "true"), this.container.dispatchEvent(new CustomEvent("toggle", {
                        detail: {
                            input: this.input,
                            results: this.results
                        }
                    })))
                }
                close() {
                    this.results.hidden || (this.results.hidden = !0, this.input.removeAttribute("aria-activedescendant"), this.container.setAttribute("aria-expanded", "false"), this.container.dispatchEvent(new CustomEvent("toggle", {
                        detail: {
                            input: this.input,
                            results: this.results
                        }
                    })))
                }
            }
            const In = new WeakMap;
            class Hn extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const e = this.getAttribute("aria-owns");
                    if (!e) return;
                    const t = this.querySelector("input"),
                        n = document.getElementById(e);
                    t instanceof HTMLInputElement && n && (t.setAttribute("aria-owns", e), In.set(this, new Cn(this, t, n)), this.setAttribute("role", "combobox"), this.setAttribute("aria-haspopup", "listbox"), this.setAttribute("aria-expanded", "false"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-controls", e), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const e = In.get(this);
                    e && (e.destroy(), In.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(e) {
                    this.setAttribute("value", e)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(e) {
                    e ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(e, t, n) {
                    if (t === n) return;
                    const o = In.get(this);
                    if (o) switch (e) {
                        case "open":
                            null === n ? o.close() : o.open();
                            break;
                        case "value":
                            null !== n && (o.input.value = n), this.dispatchEvent(new CustomEvent("change", {
                                bubbles: !0
                            }))
                    }
                }
            }
            window.customElements.get("auto-complete") || (window.AutocompleteElement = Hn, window.customElements.define("auto-complete", Hn));
            class DetailsMenuElement extends HTMLElement {
                constructor() {
                    super()
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(e) {
                    e ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                connectedCallback() {
                    this.setAttribute("role", "menu");
                    const e = this.parentElement;
                    if (!e) return;
                    const t = e.querySelector("summary");
                    t && t.setAttribute("aria-haspopup", "menu"), e.addEventListener("click", Fn), e.addEventListener("change", Fn), e.addEventListener("keydown", Bn), e.addEventListener("toggle", qn, {
                        once: !0
                    }), e.addEventListener("toggle", Pn), this.preload && e.addEventListener("mouseover", qn, {
                        once: !0
                    });
                    const n = [On(e)];
                    Dn.set(this, {
                        details: e,
                        subscriptions: n,
                        loaded: !1
                    })
                }
                disconnectedCallback() {
                    const e = Dn.get(this);
                    if (!e) return;
                    Dn.delete(this);
                    const t = e.details,
                        n = e.subscriptions;
                    for (const o of n) o.unsubscribe();
                    t.removeEventListener("click", Fn), t.removeEventListener("change", Fn), t.removeEventListener("keydown", Bn), t.removeEventListener("toggle", qn, {
                        once: !0
                    }), t.removeEventListener("toggle", Pn), t.removeEventListener("mouseover", qn, {
                        once: !0
                    })
                }
            }
            const Dn = new WeakMap;

            function qn(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-menu");
                if (!n) return;
                const o = n.getAttribute("src");
                if (!o) return;
                const r = Dn.get(n);
                if (!r) return;
                if (r.loaded) return;
                r.loaded = !0;
                const i = n.querySelector("include-fragment");
                i && !i.hasAttribute("src") && (i.addEventListener("loadend", () => Rn(t)), i.setAttribute("src", o))
            }

            function On(e) {
                let t = !1;
                const n = () => t = !0,
                    o = () => t = !1,
                    r = () => {
                        Rn(e), e.hasAttribute("open") && !t && function(e) {
                            const t = document.activeElement;
                            if (t && Un(t) && e.contains(t)) return;
                            const n = Nn(e, !0);
                            n && n.focus()
                        }(e)
                    };
                return e.addEventListener("mousedown", n), e.addEventListener("keydown", o), e.addEventListener("toggle", r), {
                    unsubscribe: () => {
                        e.removeEventListener("mousedown", n), e.removeEventListener("keydown", o), e.removeEventListener("toggle", r)
                    }
                }
            }

            function Pn(e) {
                const t = e.currentTarget;
                if (t instanceof Element && t.hasAttribute("open"))
                    for (const n of document.querySelectorAll("details[open] > details-menu")) {
                        const e = n.closest("details");
                        e && e !== t && !e.contains(t) && e.removeAttribute("open")
                    }
            }

            function Rn(e) {
                if (!e.hasAttribute("open")) return;
                const t = e.querySelector("[autofocus]");
                t && t.focus()
            }

            function Nn(e, t) {
                const n = Array.from(e.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    o = document.activeElement,
                    r = n.indexOf(o),
                    i = t ? n[r + 1] : n[r - 1],
                    s = t ? n[0] : n[n.length - 1];
                return i || s
            }
            const $n = navigator.userAgent.match(/Macintosh/);

            function Fn(e) {
                const t = e.target;
                if (!(t instanceof Element)) return;
                const n = e.currentTarget;
                if (!(n instanceof Element)) return;
                if (t.closest("details") !== n) return;
                const o = "change" === e.type ? t.closest('[role="menuitemradio"], [role="menuitemcheckbox"]') : t.closest('[role="menuitem"], [role="menuitemradio"]');
                o && function(e, t) {
                    if (e.hasAttribute("disabled") || "true" === e.getAttribute("aria-disabled")) return;
                    if (!e.dispatchEvent(new CustomEvent("details-menu-select", {
                            bubbles: !0,
                            cancelable: !0
                        }))) return;
                    (function(e, t) {
                        const n = t.querySelector("[data-menu-button]");
                        if (!n) return;
                        const o = function(e) {
                            if (!e) return null;
                            const t = e.hasAttribute("data-menu-button-text") ? e : e.querySelector("[data-menu-button-text]");
                            return t ? t.getAttribute("data-menu-button-text") || t.textContent : null
                        }(e);
                        if (o) n.textContent = o;
                        else {
                            const t = function(e) {
                                if (!e) return null;
                                const t = e.hasAttribute("data-menu-button-contents") ? e : e.querySelector("[data-menu-button-contents]");
                                return t ? t.innerHTML : null
                            }(e);
                            t && (n.innerHTML = t)
                        }
                    })(e, t),
                    function(e, t) {
                        for (const n of t.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                            const t = n.querySelector('input[type="radio"], input[type="checkbox"]');
                            n.setAttribute("aria-checked", (t instanceof HTMLInputElement ? t.checked : n === e).toString())
                        }
                    }(e, t), "menuitemcheckbox" !== e.getAttribute("role") && Wn(t);
                    e.dispatchEvent(new CustomEvent("details-menu-selected", {
                        bubbles: !0
                    }))
                }(o, n)
            }

            function Bn(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = e.target instanceof Element && "SUMMARY" === e.target.tagName;
                if (!t.querySelector("details[open]")) switch (e.key) {
                    case "Escape":
                        Wn(t), e.preventDefault(), e.stopPropagation();
                        break;
                    case "ArrowDown":
                        {
                            n && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const o = Nn(t, !0);o && o.focus(),
                            e.preventDefault()
                        }
                        break;
                    case "ArrowUp":
                        {
                            n && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const o = Nn(t, !1);o && o.focus(),
                            e.preventDefault()
                        }
                        break;
                    case "n":
                        if ($n && e.ctrlKey) {
                            const n = Nn(t, !0);
                            n && n.focus(), e.preventDefault()
                        }
                        break;
                    case "p":
                        if ($n && e.ctrlKey) {
                            const n = Nn(t, !1);
                            n && n.focus(), e.preventDefault()
                        }
                        break;
                    case " ":
                    case "Enter":
                        {
                            const n = document.activeElement;n && Un(n) && n.closest("details") === t && (e.preventDefault(), e.stopPropagation(), n.click())
                        }
                }
            }

            function Un(e) {
                const t = e.getAttribute("role");
                return "menuitem" === t || "menuitemcheckbox" === t || "menuitemradio" === t
            }

            function Wn(e) {
                e.removeAttribute("open");
                const t = e.querySelector("summary");
                t && t.focus()
            }
            window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define("details-menu", DetailsMenuElement));
            class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }
                connectedCallback() {
                    if (null === this.image && ! function() {
                            const e = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                                t = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                                n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                                o = /\bFreeBSD\b/.test(navigator.userAgent),
                                r = /\bLinux\b/.test(navigator.userAgent);
                            return !(e || t || n || r || o)
                        }()) {
                        this.textContent = "";
                        const e = function(e) {
                            const t = document.createElement("img");
                            return t.className = "emoji", t.alt = e.getAttribute("alias") || "", t.height = 20, t.width = 20, t
                        }(this);
                        e.src = this.getAttribute("fallback-src") || "", this.appendChild(e)
                    }
                }
            }
            window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement, window.customElements.define("g-emoji", GEmojiElement));
            const Xn = document.createElement("template");

            function Vn(e) {
                const t = e.currentTarget;
                if (t.dragStartX && t.dragStartY) {
                    const n = Math.min(Math.max(0, t.box.offsetLeft + e.pageX - t.dragStartX), t.image.width - t.box.offsetWidth),
                        o = Math.min(Math.max(0, t.box.offsetTop + e.pageY - t.dragStartY), t.image.height - t.box.offsetHeight);
                    t.box.style.left = `${n}px`, t.box.style.top = `${o}px`, Qn(t, {
                        x: n,
                        y: o,
                        width: t.box.offsetWidth,
                        height: t.box.offsetHeight
                    })
                }
                t.dragStartX = e.pageX, t.dragStartY = e.pageY
            }

            function zn(e) {
                const t = e.target.closest("image-crop"),
                    n = t.getBoundingClientRect();
                Gn(t, e.pageX - t.startX - n.left - window.pageXOffset, e.pageY - t.startY - n.top - window.pageYOffset)
            }

            function Yn(e) {
                const t = e.currentTarget.closest("image-crop");
                if (e.target.hasAttribute("data-direction")) {
                    const n = e.target.getAttribute("data-direction");
                    t.addEventListener("mousemove", zn), ["nw", "se"].indexOf(n) >= 0 && t.classList.add("nwse"), ["ne", "sw"].indexOf(n) >= 0 && t.classList.add("nesw"), t.startX = t.box.offsetLeft + (["se", "ne"].indexOf(n) >= 0 ? 0 : t.box.offsetWidth), t.startY = t.box.offsetTop + (["se", "sw"].indexOf(n) >= 0 ? 0 : t.box.offsetHeight), zn(e)
                } else t.addEventListener("mousemove", Vn)
            }

            function Gn(e, t, n) {
                let o = Math.max(Math.abs(t), Math.abs(n), e.minWidth);
                o = Math.min(o, n > 0 ? e.image.height - e.startY : e.startY, t > 0 ? e.image.width - e.startX : e.startX);
                const r = Math.round(Math.max(0, t > 0 ? e.startX : e.startX - o)),
                    i = Math.round(Math.max(0, n > 0 ? e.startY : e.startY - o));
                e.box.style.left = `${r}px`, e.box.style.top = `${i}px`, e.box.style.width = `${o}px`, e.box.style.height = `${o}px`, Qn(e, {
                    x: r,
                    y: i,
                    width: o,
                    height: o
                })
            }

            function Kn(e) {
                const t = e.currentTarget.closest("image-crop");
                t.loaded = !0;
                const n = e.target,
                    o = Math.round(n.clientWidth > n.clientHeight ? n.clientHeight : n.clientWidth);
                t.startX = (n.clientWidth - o) / 2, t.startY = (n.clientHeight - o) / 2, Gn(t, o, o)
            }

            function Jn(e) {
                const t = e.currentTarget;
                t.dragStartX = t.dragStartY = null, t.classList.remove("nwse", "nesw"), t.removeEventListener("mousemove", zn), t.removeEventListener("mousemove", Vn)
            }

            function Qn(e, t) {
                const n = e.image.naturalWidth / e.image.width;
                for (const o in t) {
                    const r = Math.round(t[o] * n);
                    t[o] = r;
                    const i = e.querySelector(`[data-image-crop-input='${o}']`);
                    i && (i.value = r)
                }
                e.dispatchEvent(new CustomEvent("image-crop-change", {
                    bubbles: !0,
                    detail: t
                }))
            }
            Xn.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
            class ImageCropElement extends HTMLElement {
                constructor() {
                    super(), this.startX = null, this.startY = null, this.minWidth = 10
                }
                connectedCallback() {
                    this.constructed || (this.constructed = !0, this.appendChild(document.importNode(Xn.content, !0)), this.image = this.querySelector("img"), this.box = this.querySelector("[data-crop-box]"), this.image.addEventListener("load", Kn), this.addEventListener("mouseleave", Jn), this.addEventListener("mouseup", Jn), this.box.addEventListener("mousedown", Yn), this.src && (this.image.src = this.src))
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(e) {
                    e ? this.setAttribute("src", e) : this.removeAttribute("src")
                }
                get loaded() {
                    return this.hasAttribute("loaded")
                }
                set loaded(e) {
                    e ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }
                attributeChangedCallback(e, t, n) {
                    "src" === e && (this.loaded = !1, this.image && (this.image.src = n))
                }
            }

            function Zn(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement, window.customElements.define("image-crop", ImageCropElement));
            const eo = new WeakMap;
            class MarkdownButtonElement extends HTMLElement {
                constructor() {
                    super();
                    const e = () => {
                        const e = eo.get(this);
                        e && co(this, e)
                    };
                    var t;
                    this.addEventListener("keydown", (t = e, function(e) {
                        " " !== e.key && "Enter" !== e.key || (e.preventDefault(), t(e))
                    })), this.addEventListener("click", e)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                click() {
                    const e = eo.get(this);
                    e && co(this, e)
                }
            }
            class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "### "
                    })
                }
            }
            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define("md-header", MarkdownHeaderButtonElement));
            class MarkdownBoldButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "**",
                        suffix: "**",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "b")
                }
            }
            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define("md-bold", MarkdownBoldButtonElement));
            class MarkdownItalicButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "_",
                        suffix: "_",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "i")
                }
            }
            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define("md-italic", MarkdownItalicButtonElement));
            class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "> ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define("md-quote", MarkdownQuoteButtonElement));
            class MarkdownCodeButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "`",
                        suffix: "`",
                        blockPrefix: "```",
                        blockSuffix: "```"
                    })
                }
            }
            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define("md-code", MarkdownCodeButtonElement));
            class MarkdownLinkButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "[",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "k")
                }
            }
            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define("md-link", MarkdownLinkButtonElement));
            class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "- ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));
            class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "1. ",
                        multiline: !0,
                        orderedList: !0
                    })
                }
            }
            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));
            class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "- [ ] ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "L")
                }
            }
            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define("md-task-list", MarkdownTaskListButtonElement));
            class MarkdownMentionButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "@",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define("md-mention", MarkdownMentionButtonElement));
            class MarkdownRefButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), eo.set(this, {
                        prefix: "#",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define("md-ref", MarkdownRefButtonElement));
            const to = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
            class MarkdownToolbarElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const e = function(e, t) {
                        if (t.metaKey && "Meta" === to || t.ctrlKey && "Control" === to) {
                            const n = e.querySelector(`[hotkey="${t.key}"]`);
                            n && (n.click(), t.preventDefault())
                        }
                    }.bind(null, this);
                    this.field && (this.field.addEventListener("keydown", e), no.set(this, e))
                }
                disconnectedCallback() {
                    const e = no.get(this);
                    e && this.field && (this.field.removeEventListener("keydown", e), no.delete(this))
                }
                get field() {
                    const e = this.getAttribute("for");
                    if (!e) return;
                    const t = document.getElementById(e);
                    return t instanceof HTMLTextAreaElement ? t : null
                }
            }
            const no = new WeakMap;

            function oo(e) {
                return e.trim().split("\n").length > 1
            }

            function ro(e, t) {
                return Array(t + 1).join(e)
            }
            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
            let io = null;

            function so(e, t) {
                const n = e.value.slice(e.selectionStart, e.selectionEnd);
                let o;
                o = t.orderedList ? function(e) {
                        const t = /^\d+\.\s+/;
                        let n, o, r = e.value.slice(e.selectionStart, e.selectionEnd),
                            i = r.split("\n");
                        if (i.every(e => t.test(e))) i = i.map(e => e.replace(t, "")), r = i.join("\n");
                        else {
                            i = function() {
                                let e, t, n;
                                const o = [];
                                for (n = e = 0, t = i.length; e < t; n = ++e) {
                                    const e = i[n];
                                    o.push(`${n+1}. ${e}`)
                                }
                                return o
                            }(), r = i.join("\n");
                            const t = ao(e),
                                s = t.newlinesToAppend,
                                a = t.newlinesToPrepend;
                            o = e.selectionStart + s.length, n = o + r.length, r = s + r + a
                        }
                        return {
                            text: r,
                            selectionStart: o,
                            selectionEnd: n
                        }
                    }(e) : t.multiline && oo(n) ? function(e, t) {
                        const n = t.prefix,
                            o = t.suffix,
                            r = t.surroundWithNewlines;
                        let i = e.value.slice(e.selectionStart, e.selectionEnd),
                            s = e.selectionStart,
                            a = e.selectionEnd;
                        const c = i.split("\n");
                        if (c.every(e => e.startsWith(n) && e.endsWith(o))) i = c.map(e => e.slice(n.length, e.length - o.length)).join("\n"), a = s + i.length;
                        else if (i = c.map(e => n + e + o).join("\n"), r) {
                            const t = ao(e),
                                n = t.newlinesToAppend,
                                o = t.newlinesToPrepend;
                            s += n.length, a = s + i.length, i = n + i + o
                        }
                        return {
                            text: i,
                            selectionStart: s,
                            selectionEnd: a
                        }
                    }(e, t) : function(e, t) {
                        let n, o;
                        const r = t.prefix,
                            i = t.suffix,
                            s = t.blockPrefix,
                            a = t.blockSuffix,
                            c = t.replaceNext,
                            l = t.prefixSpace,
                            u = t.scanFor,
                            d = t.surroundWithNewlines,
                            f = e.selectionStart,
                            m = e.selectionEnd;
                        let p = e.value.slice(e.selectionStart, e.selectionEnd),
                            h = oo(p) && s.length > 0 ? `${s}\n` : r,
                            g = oo(p) && a.length > 0 ? `\n${a}` : i;
                        if (l) {
                            const t = e.value[e.selectionStart - 1];
                            0 === e.selectionStart || null == t || t.match(/\s/) || (h = ` ${h}`)
                        }
                        p = function(e, t, n) {
                            if (e.selectionStart === e.selectionEnd) e.selectionStart = function(e, t) {
                                let n = t;
                                for (; e[n] && null != e[n - 1] && !e[n - 1].match(/\s/);) n--;
                                return n
                            }(e.value, e.selectionStart), e.selectionEnd = function(e, t) {
                                let n = t;
                                for (; e[n] && !e[n].match(/\s/);) n++;
                                return n
                            }(e.value, e.selectionEnd);
                            else {
                                const o = e.selectionStart - t.length,
                                    r = e.selectionEnd + n.length,
                                    i = e.value.slice(o, e.selectionStart) === t,
                                    s = e.value.slice(e.selectionEnd, r) === n;
                                i && s && (e.selectionStart = o, e.selectionEnd = r)
                            }
                            return e.value.slice(e.selectionStart, e.selectionEnd)
                        }(e, h, g);
                        let v = e.selectionStart,
                            b = e.selectionEnd;
                        const w = c.length > 0 && g.indexOf(c) > -1 && p.length > 0;
                        if (d) {
                            const t = ao(e);
                            n = t.newlinesToAppend, o = t.newlinesToPrepend, h = n + r, g += o
                        }
                        if (p.startsWith(h) && p.endsWith(g)) {
                            const e = p.slice(h.length, p.length - g.length);
                            if (f === m) {
                                let t = f - h.length;
                                t = Math.max(t, v), t = Math.min(t, v + e.length), v = b = t
                            } else b = v + e.length;
                            return {
                                text: e,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                        if (w) {
                            if (u.length > 0 && p.match(u)) {
                                g = g.replace(c, p);
                                const e = h + g;
                                return v = b = v + h.length, {
                                    text: e,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            } {
                                const e = h + p + g;
                                return v = v + h.length + p.length + g.indexOf(c), b = v + c.length, {
                                    text: e,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            }
                        } {
                            let e = h + p + g;
                            v = f + h.length, b = m + h.length;
                            const n = p.match(/^\s*|\s*$/g);
                            if (t.trimFirst && n) {
                                const t = n[0] || "",
                                    o = n[1] || "";
                                e = t + h + p.trim() + g + o, v += t.length, b -= o.length
                            }
                            return {
                                text: e,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                    }(e, t),
                    function(e, t) {
                        let n = t.text,
                            o = t.selectionStart,
                            r = t.selectionEnd;
                        const i = e.selectionStart,
                            s = e.value.slice(0, i),
                            a = e.value.slice(e.selectionEnd);
                        if (null === io || !0 === io) {
                            e.contentEditable = "true";
                            try {
                                io = document.execCommand("insertText", !1, n)
                            } catch (c) {
                                io = !1
                            }
                            e.contentEditable = "false"
                        }
                        if (io && !e.value.slice(0, e.selectionStart).endsWith(n) && (io = !1), !io) {
                            try {
                                document.execCommand("ms-beginUndoUnit")
                            } catch (l) {}
                            e.value = s + n + a;
                            try {
                                document.execCommand("ms-endUndoUnit")
                            } catch (l) {}
                            e.dispatchEvent(new CustomEvent("input", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                        null != o && null != r ? e.setSelectionRange(o, r) : e.setSelectionRange(i, e.selectionEnd)
                    }(e, o)
            }

            function ao(e) {
                const t = e.value.slice(0, e.selectionStart),
                    n = e.value.slice(e.selectionEnd),
                    o = t.match(/\n*$/),
                    r = n.match(/^\n*/),
                    i = o ? o[0].length : 0,
                    s = r ? r[0].length : 0;
                let a, c;
                return t.match(/\S/) && i < 2 && (a = ro("\n", 2 - i)), n.match(/\S/) && s < 2 && (c = ro("\n", 2 - s)), null == a && (a = ""), null == c && (c = ""), {
                    newlinesToAppend: a,
                    newlinesToPrepend: c
                }
            }

            function co(e, t) {
                const n = e.closest("markdown-toolbar");
                if (!(n instanceof MarkdownToolbarElement)) return;
                const o = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                o = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), o.forEach(function(t) {
                                Zn(e, t, n[t])
                            })
                        }
                        return e
                    }({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        trimFirst: !1
                    }, t),
                    r = n.field;
                r && (r.focus(), so(r, o))
            }
            class TabContainerElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("keydown", e => {
                        const t = e.target;
                        if (!(t instanceof HTMLElement)) return;
                        if ("tab" !== t.getAttribute("role") && !t.closest('[role="tablist"]')) return;
                        const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
                            o = n.indexOf(n.find(e => e.matches('[aria-selected="true"]')));
                        if ("ArrowRight" === e.code) {
                            let e = o + 1;
                            e >= n.length && (e = 0), this.selectTab(e)
                        } else if ("ArrowLeft" === e.code) {
                            let e = o - 1;
                            e < 0 && (e = n.length - 1), this.selectTab(e)
                        } else "Home" === e.code ? (this.selectTab(0), e.preventDefault()) : "End" === e.code && (this.selectTab(n.length - 1), e.preventDefault())
                    }), this.addEventListener("click", e => {
                        const t = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                        if (!(e.target instanceof Element)) return;
                        const n = e.target.closest('[role="tab"]');
                        if (!n || !n.closest('[role="tablist"]')) return;
                        const o = t.indexOf(n);
                        this.selectTab(o)
                    })
                }
                selectTab(e) {
                    const t = this.querySelectorAll('[role="tablist"] [role="tab"]'),
                        n = this.querySelectorAll('[role="tabpanel"]');
                    for (const i of t) i.setAttribute("aria-selected", "false"), i.setAttribute("tabindex", "-1");
                    for (const i of n) i.hidden = !0, i.setAttribute("tabindex", "0");
                    const o = t[e],
                        r = n[e];
                    o.setAttribute("aria-selected", "true"), o.removeAttribute("tabindex"), o.focus(), r.hidden = !1, this.dispatchEvent(new CustomEvent("tab-container-change", {
                        bubbles: !0,
                        detail: {
                            relatedTarget: r
                        }
                    }))
                }
            }
            window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement, window.customElements.define("tab-container", TabContainerElement));
            const lo = new WeakMap;
            let uo = null;

            function fo(e, t) {
                return e.closest("task-lists") === t.closest("task-lists")
            }

            function mo(e) {
                if (e.currentTarget !== e.target) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".contains-task-list");
                if (!n) return;
                if (t.classList.add("is-ghost"), e.dataTransfer && e.dataTransfer.setData("text/plain", t.textContent.trim()), !t.parentElement) return;
                const o = Array.from(t.parentElement.children),
                    r = o.indexOf(t),
                    i = lo.get(t);
                i && i.sortStarted(n), uo = {
                    didDrop: !1,
                    dragging: t,
                    dropzone: t,
                    sourceList: n,
                    sourceSibling: o[r + 1] || null,
                    sourceIndex: r
                }
            }

            function po(e) {
                if (!uo) return;
                const t = e.currentTarget;
                t instanceof Element && (fo(uo.dragging, t) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), uo.dropzone !== t && (uo.dragging.classList.add("is-dragging"), uo.dropzone = t, ! function(e, t) {
                    if (e.parentNode === t.parentNode) {
                        let n = e;
                        for (; n;) {
                            if (n === t) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }(uo.dragging, t) ? t.after(uo.dragging) : t.before(uo.dragging))) : e.stopPropagation())
            }

            function ho(e) {
                if (!uo) return;
                e.preventDefault(), e.stopPropagation();
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                if (uo.didDrop = !0, !uo.dragging.parentElement) return;
                let n = Array.from(uo.dragging.parentElement.children).indexOf(uo.dragging);
                const o = t.closest(".contains-task-list");
                if (!o) return;
                if (uo.sourceIndex === n && uo.sourceList === o) return;
                uo.sourceList === o && uo.sourceIndex < n && n++;
                const r = {
                        list: uo.sourceList,
                        index: uo.sourceIndex
                    },
                    i = {
                        list: o,
                        index: n
                    },
                    s = lo.get(uo.dragging);
                s && s.sortFinished({
                    src: r,
                    dst: i
                })
            }

            function go() {
                uo && (uo.dragging.classList.remove("is-dragging"), uo.dragging.classList.remove("is-ghost"), uo.didDrop || uo.sourceList.insertBefore(uo.dragging, uo.sourceSibling), uo = null)
            }

            function vo(e) {
                if (!uo) return;
                const t = e.currentTarget;
                t instanceof Element && (fo(uo.dragging, t) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move")) : e.stopPropagation())
            }
            const bo = new WeakMap;
            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", e => {
                        const t = e.target;
                        t instanceof HTMLInputElement && t.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: jo(t),
                                checked: t.checked
                            }
                        }))
                    }), bo.set(this, new MutationObserver(Ao.bind(null, this)))
                }
                connectedCallback() {
                    const e = bo.get(this);
                    e && e.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), Ao(this)
                }
                disconnectedCallback() {
                    const e = bo.get(this);
                    e && e.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(e) {
                    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(e) {
                    e ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(e, t, n) {
                    if (t !== n) switch (e) {
                        case "disabled":
                            So(this)
                    }
                }
            }
            const wo = document.createElement("template");
            wo.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="15" version="1.1" viewBox="0 0 16 15">\n      <path d="M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"></path>\n    </svg>\n  </span>';
            const yo = new WeakMap;

            function Eo(e) {
                if (yo.get(e)) return;
                yo.set(e, !0);
                const t = e.closest("task-lists");
                if (!(t instanceof TaskListsElement)) return;
                if (t.querySelectorAll(".task-list-item").length <= 1) return;
                const n = wo.content.cloneNode(!0),
                    o = n.querySelector(".handle");
                if (e.prepend(n), !o) throw new Error("handle not found");
                o.addEventListener("mouseenter", Ho), o.addEventListener("mouseleave", Do),
                    function(e, t, n) {
                        lo.set(e, {
                            sortStarted: t,
                            sortFinished: n
                        }), e.addEventListener("dragstart", mo), e.addEventListener("dragenter", po), e.addEventListener("dragend", go), e.addEventListener("drop", ho), e.addEventListener("dragover", vo)
                    }(e, Co, Io), e.addEventListener("mouseenter", To), e.addEventListener("mouseleave", Lo)
            }

            function To(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && t.classList.add("hovered")
            }

            function Lo(e) {
                const t = e.currentTarget;
                t instanceof Element && t.classList.remove("hovered")
            }

            function jo(e) {
                const t = ko(e);
                if (!t) throw new Error(".contains-task-list not found");
                const n = Array.from(t.children).indexOf(e.closest(".task-list-item"));
                return [Mo(t), n]
            }

            function ko(e) {
                const t = e.parentElement;
                return t ? t.closest(".contains-task-list") : null
            }

            function xo(e) {
                return ko(e) === function e(t) {
                    const n = ko(t);
                    return n ? e(n) || n : null
                }(e)
            }

            function Ao(e) {
                const t = e.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of t) xo(n) && Eo(n);
                So(e)
            }

            function So(e) {
                for (const t of e.querySelectorAll(".task-list-item")) t.classList.toggle("enabled", !e.disabled);
                for (const t of e.querySelectorAll(".task-list-item-checkbox")) t instanceof HTMLInputElement && (t.disabled = e.disabled)
            }

            function Mo(e) {
                const t = e.closest("task-lists");
                if (!t) throw new Error("parent not found");
                return Array.from(t.querySelectorAll("ol, ul")).indexOf(e)
            }
            const _o = new WeakMap;

            function Co(e) {
                const t = e.closest("task-lists");
                if (!t) throw new Error("parent not found");
                _o.set(t, Array.from(t.querySelectorAll("ol, ul")))
            }

            function Io(e) {
                let t = e.src,
                    n = e.dst;
                const o = t.list.closest("task-lists");
                if (!o) return;
                const r = _o.get(o);
                r && (_o.delete(o), o.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(t.list), t.index],
                        dst: [r.indexOf(n.list), n.index]
                    }
                })))
            }

            function Ho(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".task-list-item");
                if (!n) return;
                const o = n.closest("task-lists");
                o instanceof TaskListsElement && o.sortable && !o.disabled && n.setAttribute("draggable", "true")
            }

            function Do(e) {
                if (uo) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement));
            const qo = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                Oo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function Po(e) {
                return `0${e}`.slice(-2)
            }

            function Ro(e, t) {
                const n = e.getDay(),
                    o = e.getDate(),
                    r = e.getMonth(),
                    i = e.getFullYear(),
                    s = e.getHours(),
                    a = e.getMinutes(),
                    c = e.getSeconds();
                return t.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, function(t) {
                    let l;
                    switch (t[1]) {
                        case "%":
                            return "%";
                        case "a":
                            return qo[n].slice(0, 3);
                        case "A":
                            return qo[n];
                        case "b":
                            return Oo[r].slice(0, 3);
                        case "B":
                            return Oo[r];
                        case "c":
                            return e.toString();
                        case "d":
                            return Po(o);
                        case "e":
                            return String(o);
                        case "H":
                            return Po(s);
                        case "I":
                            return Po(Ro(e, "%l"));
                        case "l":
                            return 0 === s || 12 === s ? String(12) : String((s + 12) % 12);
                        case "m":
                            return Po(r + 1);
                        case "M":
                            return Po(a);
                        case "p":
                            return s > 11 ? "PM" : "AM";
                        case "P":
                            return s > 11 ? "pm" : "am";
                        case "S":
                            return Po(c);
                        case "w":
                            return String(n);
                        case "y":
                            return Po(i % 100);
                        case "Y":
                            return String(i);
                        case "Z":
                            return (l = e.toString().match(/\((\w+)\)$/)) ? l[1] : "";
                        case "z":
                            return (l = e.toString().match(/\w([+-]\d\d\d\d) /)) ? l[1] : ""
                    }
                    return ""
                })
            }

            function No(e) {
                let t;
                return function() {
                    if (t) return t;
                    if ("Intl" in window) try {
                        return t = new Intl.DateTimeFormat(void 0, e)
                    } catch (n) {
                        if (!(n instanceof RangeError)) throw n
                    }
                }
            }
            let $o = null;
            const Fo = No({
                day: "numeric",
                month: "short"
            });

            function Bo() {
                if (null !== $o) return $o;
                const e = Fo();
                if (e) {
                    const t = e.format(new Date(0));
                    return $o = !!t.match(/^\d/)
                }
                return !1
            }
            let Uo = null;
            const Wo = No({
                day: "numeric",
                month: "short",
                year: "numeric"
            });
            class ExtendedTimeElement extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "hour", "minute", "month", "second", "title", "weekday", "year"]
                }
                attributeChangedCallback(e, t, n) {
                    if ("datetime" === e) {
                        const e = Date.parse(n);
                        this._date = isNaN(e) ? null : new Date(e)
                    }
                    const o = this.getFormattedTitle();
                    o && !this.hasAttribute("title") && this.setAttribute("title", o);
                    const r = this.getFormattedDate();
                    r && (this.textContent = r)
                }
                getFormattedTitle() {
                    const e = this._date;
                    if (!e) return;
                    const t = Xo();
                    if (t) return t.format(e);
                    try {
                        return e.toLocaleString()
                    } catch (n) {
                        if (n instanceof RangeError) return e.toString();
                        throw n
                    }
                }
                getFormattedDate() {}
            }
            const Xo = No({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }),
                Vo = new WeakMap;
            class LocalTimeElement extends ExtendedTimeElement {
                attributeChangedCallback(e, t, n) {
                    "hour" !== e && "minute" !== e && "second" !== e && "time-zone-name" !== e || Vo.delete(this), super.attributeChangedCallback(e, t, n)
                }
                getFormattedDate() {
                    const e = this._date;
                    if (e) return `${function(e,t){const n={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let o=Bo()?"weekday day month year":"weekday month day, year";for(const r in n){const t=n[r][e.getAttribute(r)];o=o.replace(r,t||"")}return o=o.replace(/(\s,)|(,\s$)/,""),Ro(t,o).replace(/\s+/," ").trim()}(this,e)||""} ${function(e,t){const n={},o=e.getAttribute("hour");"numeric"!==o&&"2-digit"!==o||(n.hour=o);const r=e.getAttribute("minute");"numeric"!==r&&"2-digit"!==r||(n.minute=r);const i=e.getAttribute("second");"numeric"!==i&&"2-digit"!==i||(n.second=i);const s=e.getAttribute("time-zone-name");"short"!==s&&"long"!==s||(n.timeZoneName=s);if(0===Object.keys(n).length)return;let a=Vo.get(e);a||(a=No(n),Vo.set(e,a));const c=a();if(c)return c.format(t);{const e=n.second?"%H:%M:%S":"%H:%M";return Ro(t,e)}}(this,e)||""}`.trim()
                }
            }
            window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement, window.customElements.define("local-time", LocalTimeElement));
            class zo {
                constructor(e) {
                    this.date = e
                }
                toString() {
                    const e = this.timeElapsed();
                    if (e) return e; {
                        const e = this.timeAhead();
                        return e || `on ${this.formatDate()}`
                    }
                }
                timeElapsed() {
                    const e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24);
                    return e >= 0 && r < 30 ? this.timeAgoFromMs(e) : null
                }
                timeAhead() {
                    const e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24);
                    return e >= 0 && r < 30 ? this.timeUntil() : null
                }
                timeAgo() {
                    const e = (new Date).getTime() - this.date.getTime();
                    return this.timeAgoFromMs(e)
                }
                timeAgoFromMs(e) {
                    const t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24),
                        i = Math.round(r / 30),
                        s = Math.round(i / 12);
                    return e < 0 ? "just now" : t < 10 ? "just now" : t < 45 ? `${t} seconds ago` : t < 90 ? "a minute ago" : n < 45 ? `${n} minutes ago` : n < 90 ? "an hour ago" : o < 24 ? `${o} hours ago` : o < 36 ? "a day ago" : r < 30 ? `${r} days ago` : r < 45 ? "a month ago" : i < 12 ? `${i} months ago` : i < 18 ? "a year ago" : `${s} years ago`
                }
                microTimeAgo() {
                    const e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24),
                        i = Math.round(r / 30),
                        s = Math.round(i / 12);
                    return n < 1 ? "1m" : n < 60 ? `${n}m` : o < 24 ? `${o}h` : r < 365 ? `${r}d` : `${s}y`
                }
                timeUntil() {
                    const e = this.date.getTime() - (new Date).getTime();
                    return this.timeUntilFromMs(e)
                }
                timeUntilFromMs(e) {
                    const t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24),
                        i = Math.round(r / 30),
                        s = Math.round(i / 12);
                    return i >= 18 ? `${s} years from now` : i >= 12 ? "a year from now" : r >= 45 ? `${i} months from now` : r >= 30 ? "a month from now" : o >= 36 ? `${r} days from now` : o >= 24 ? "a day from now" : n >= 90 ? `${o} hours from now` : n >= 45 ? "an hour from now" : t >= 90 ? `${n} minutes from now` : t >= 45 ? "a minute from now" : t >= 10 ? `${t} seconds from now` : "just now"
                }
                microTimeUntil() {
                    const e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        o = Math.round(n / 60),
                        r = Math.round(o / 24),
                        i = Math.round(r / 30),
                        s = Math.round(i / 12);
                    return r >= 365 ? `${s}y` : o >= 24 ? `${r}d` : n >= 60 ? `${o}h` : n > 1 ? `${n}m` : "1m"
                }
                formatDate() {
                    let e = Bo() ? "%e %b" : "%b %e";
                    var t;
                    return t = this.date, (new Date).getUTCFullYear() !== t.getUTCFullYear() && (e += function() {
                        if (null !== Uo) return Uo;
                        const e = Wo();
                        if (e) {
                            const t = e.format(new Date(0));
                            return Uo = !!t.match(/\d,/)
                        }
                        return !0
                    }() ? ", %Y" : " %Y"), Ro(this.date, e)
                }
                formatTime() {
                    const e = Yo();
                    return e ? e.format(this.date) : Ro(this.date, "%l:%M%P")
                }
            }
            const Yo = No({
                hour: "numeric",
                minute: "2-digit"
            });
            class RelativeTimeElement extends ExtendedTimeElement {
                getFormattedDate() {
                    if (this._date) return new zo(this._date).toString()
                }
                connectedCallback() {
                    Go.push(this), Ko || (Jo(), Ko = setInterval(Jo, 6e4))
                }
                disconnectedCallback() {
                    const e = Go.indexOf(this); - 1 !== e && Go.splice(e, 1), Go.length || Ko && (clearInterval(Ko), Ko = null)
                }
            }
            const Go = [];
            let Ko;

            function Jo() {
                let e, t, n;
                for (t = 0, n = Go.length; t < n; t++)(e = Go[t]).textContent = e.getFormattedDate() || ""
            }
            window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define("relative-time", RelativeTimeElement));
            class TimeAgoElement extends RelativeTimeElement {
                getFormattedDate() {
                    const e = this.getAttribute("format");
                    if (this._date) return "micro" === e ? new zo(this._date).microTimeAgo() : new zo(this._date).timeAgo()
                }
            }
            window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement, window.customElements.define("time-ago", TimeAgoElement));
            class TimeUntilElement extends RelativeTimeElement {
                getFormattedDate() {
                    const e = this.getAttribute("format");
                    if (this._date) return "micro" === e ? new zo(this._date).microTimeUntil() : new zo(this._date).timeUntil()
                }
            }

            function Qo(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e.textContent);
                const t = getSelection();
                if (null == t) return Promise.reject(new Error);
                t.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(e), t.addRange(n), document.execCommand("copy"), t.removeAllRanges(), Promise.resolve()
            }

            function Zo(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e);
                const t = document.body;
                if (!t) return Promise.reject(new Error);
                const n = function(e) {
                    const t = document.createElement("pre");
                    return t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t
                }(e);
                return t.appendChild(n), Qo(n), t.removeChild(n), Promise.resolve()
            }

            function er(e) {
                const t = e.getAttribute("for"),
                    n = e.getAttribute("value");

                function o() {
                    e.dispatchEvent(new CustomEvent("clipboard-copy", {
                        bubbles: !0
                    }))
                }
                if (n) Zo(n).then(o);
                else if (t) {
                    const n = e.ownerDocument.getElementById(t);
                    n && (r = n, r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement ? "hidden" === r.type ? Zo(r.value) : function(e) {
                        if ("clipboard" in navigator) return navigator.clipboard.writeText(e.value);
                        e.select(), document.execCommand("copy");
                        const t = getSelection();
                        return null != t && t.removeAllRanges(), Promise.resolve()
                    }(r) : r instanceof HTMLAnchorElement && r.hasAttribute("href") ? Zo(r.href) : Qo(r)).then(o)
                }
                var r
            }

            function tr(e) {
                const t = e.currentTarget;
                t instanceof HTMLElement && er(t)
            }

            function nr(e) {
                if (" " === e.key || "Enter" === e.key) {
                    const t = e.currentTarget;
                    t instanceof HTMLElement && (e.preventDefault(), er(t))
                }
            }

            function or(e) {
                e.currentTarget.addEventListener("keydown", nr)
            }

            function rr(e) {
                e.currentTarget.removeEventListener("keydown", nr)
            }
            window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement, window.customElements.define("time-until", TimeUntilElement));
            class ir extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("click", tr), this.addEventListener("focus", or), this.addEventListener("blur", rr)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(e) {
                    this.setAttribute("value", e)
                }
            }
            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ir, window.customElements.define("clipboard-copy", ir));
            const sr = "data-close-dialog",
                ar = `[${sr}]`;

            function cr(e) {
                let t = e.querySelector("[autofocus]");
                t || (t = e, e.setAttribute("tabindex", "-1")), t.focus()
            }

            function lr(e) {
                const t = e.currentTarget;
                t instanceof Element && ("Escape" === e.key || "Esc" === e.key ? (pr(t, !1), e.stopPropagation()) : "Tab" === e.key && function(e) {
                    if (!(e.currentTarget instanceof Element)) return;
                    const t = e.currentTarget.querySelector("details-dialog");
                    if (!t) return;
                    e.preventDefault();
                    const n = Array.from(t.querySelectorAll("*")).filter(ur);
                    if (0 === n.length) return;
                    const o = e.shiftKey ? -1 : 1,
                        r = n.filter(e => e.matches(":focus"))[0];
                    let i = 0;
                    if (r) {
                        const e = n.indexOf(r);
                        if (-1 !== e) {
                            const t = e + o;
                            t >= 0 && (i = t % n.length)
                        }
                    }
                    n[i].focus()
                }(e))
            }

            function ur(e) {
                return e.tabIndex >= 0 && !e.disabled && !e.hidden && (!e.type || "hidden" !== e.type) && !e.closest("[hidden]")
            }

            function dr(e) {
                const t = e.querySelector("details-dialog");
                return !(t instanceof vr) || t.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function fr(e) {
                if (!(e.currentTarget instanceof Element)) return;
                const t = e.currentTarget.closest("details[open]");
                t && (dr(t) || (e.preventDefault(), e.stopPropagation()))
            }

            function mr(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-dialog");
                if (n instanceof vr)
                    if (t.hasAttribute("open")) document.activeElement && gr.set(n, {
                        details: t,
                        activeElement: document.activeElement
                    }), cr(n), t.addEventListener("keydown", lr);
                    else {
                        for (const t of n.querySelectorAll("form")) t instanceof HTMLFormElement && t.reset();
                        const e = function(e, t) {
                            const n = gr.get(t);
                            return n && n.activeElement instanceof HTMLElement ? n.activeElement : e.querySelector("summary")
                        }(t, n);
                        e && e.focus(), t.removeEventListener("keydown", lr)
                    }
            }

            function pr(e, t) {
                t !== e.hasAttribute("open") && (t ? e.setAttribute("open", "") : dr(e) && e.removeAttribute("open"))
            }

            function hr(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-dialog");
                if (!(n instanceof vr)) return;
                const o = n.querySelector("include-fragment:not([src])");
                if (!o) return;
                const r = n.src;
                null !== r && (o.addEventListener("loadend", () => {
                    t.hasAttribute("open") && cr(n)
                }), o.setAttribute("src", r))
            }
            const gr = new WeakMap;
            class vr extends HTMLElement {
                static get CLOSE_ATTR() {
                    return sr
                }
                static get CLOSE_SELECTOR() {
                    return ar
                }
                constructor() {
                    super(), gr.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", function(e) {
                        let t = e.target;
                        if (!(t instanceof Element)) return;
                        const n = t.closest("details");
                        n && t.closest(ar) && pr(n, !1)
                    })
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(e) {
                    e ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog");
                    const e = gr.get(this);
                    if (!e) return;
                    const t = this.parentElement;
                    if (!t) return;
                    const n = t.querySelector("summary");
                    n && (n.setAttribute("aria-haspopup", "dialog"), n.addEventListener("click", fr, {
                        capture: !0
                    })), t.addEventListener("toggle", mr), e.details = t
                }
                disconnectedCallback() {
                    const e = gr.get(this);
                    if (!e) return;
                    const t = e.details;
                    if (!t) return;
                    t.removeEventListener("toggle", mr);
                    const n = t.querySelector("summary");
                    n && n.removeEventListener("click", fr, {
                        capture: !0
                    }), e.details = null
                }
                toggle(e) {
                    const t = gr.get(this);
                    if (!t) return;
                    const n = t.details;
                    n && pr(n, e)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const e = this.parentElement;
                    e && gr.get(this) && (this.src ? e.addEventListener("toggle", hr, {
                        once: !0
                    }) : e.removeEventListener("toggle", hr), this.src && this.preload ? e.addEventListener("mouseover", hr, {
                        once: !0
                    }) : e.removeEventListener("mouseover", hr))
                }
            }

            function br(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            window.customElements.get("details-dialog") || (window.DetailsDialogElement = vr, window.customElements.define("details-dialog", vr));
            class wr extends Error {
                constructor(e, t, n) {
                    super(), br(this, "statusCode", void 0), br(this, "responseText", void 0), br(this, "contentType", void 0), this.statusCode = e, this.responseText = t, this.contentType = n
                }
            }
            const yr = new WeakMap,
                Er = new WeakMap;
            class AutoCheckElement extends HTMLElement {
                constructor() {
                    super(), br(this, "boundCheck", void 0), br(this, "input", void 0), this.boundCheck = function(e, t) {
                        let n;
                        return function() {
                            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i];
                            const s = this;
                            clearTimeout(n), n = setTimeout(function() {
                                clearTimeout(n), e.apply(s, r)
                            }, t)
                        }
                    }(this.check.bind(this), 300)
                }
                connectedCallback() {
                    const e = this.querySelector("input");
                    e instanceof HTMLInputElement && (this.input = e, this.input.addEventListener("change", this.boundCheck), this.input.addEventListener("input", this.boundCheck), this.input.autocomplete = "off", this.input.spellcheck = !1)
                }
                disconnectedCallback() {
                    this.input && (this.input.removeEventListener("change", this.boundCheck), this.input.removeEventListener("input", this.boundCheck), this.input.setCustomValidity(""))
                }
                get src() {
                    const e = this.getAttribute("src");
                    if (!e) return "";
                    const t = this.ownerDocument.createElement("a");
                    return t.href = e, t.href
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get csrf() {
                    return this.getAttribute("csrf") || ""
                }
                set csrf(e) {
                    this.setAttribute("csrf", e)
                }
                get required() {
                    return this.hasAttribute("required")
                }
                set required(e) {
                    this.input.required = e, e ? this.setAttribute("required", "") : this.removeAttribute("required")
                }
                check() {
                    if (!this.src) throw new Error("missing src");
                    if (!this.csrf) throw new Error("missing csrf");
                    const e = new FormData;
                    e.append("authenticity_token", this.csrf), e.append("value", this.input.value);
                    const t = e.entries ? [...e.entries()].sort().toString() : null;
                    if (t && t === Er.get(this.input)) return;
                    if (Er.set(this.input, t), this.input.dispatchEvent(new CustomEvent("autocheck:send", {
                            detail: {
                                body: e
                            },
                            bubbles: !0
                        })), !this.input.value.trim()) return void this.input.dispatchEvent(new CustomEvent("autocheck:complete", {
                        bubbles: !0
                    }));
                    const n = () => {
                        this.dispatchEvent(new CustomEvent("loadend")), this.input.dispatchEvent(new CustomEvent("autocheck:complete", {
                            bubbles: !0
                        }))
                    };
                    this.required && this.input.setCustomValidity("Verifying…"), this.dispatchEvent(new CustomEvent("loadstart")),
                        function(e, t, n) {
                            const o = yr.get(e);
                            o && o.abort();
                            const r = () => yr.delete(e),
                                i = new XMLHttpRequest;
                            yr.set(e, i), i.open("POST", n, !0), i.setRequestHeader("Accept", "text/html; fragment");
                            const s = function(e, t) {
                                return new Promise((n, o) => {
                                    e.onload = function() {
                                        e.status >= 200 && e.status < 300 ? n(e.responseText) : o(new wr(e.status, e.responseText, e.getResponseHeader("Content-Type")))
                                    }, e.onerror = function() {
                                        o(new wr(e.status, e.responseText, e.getResponseHeader("Content-Type")))
                                    }, e.send(t)
                                })
                            }(i, t);
                            return s.then(r, r), s
                        }(this.input, e, this.src).then(e => {
                            this.dispatchEvent(new CustomEvent("load"));
                            const t = e ? e.trim() : null;
                            this.required && this.input.setCustomValidity(""), this.input.dispatchEvent(new CustomEvent("autocheck:success", {
                                detail: {
                                    message: t
                                },
                                bubbles: !0
                            }))
                        }).catch(e => {
                            this.required && this.input.setCustomValidity(Tr(e) || "Something went wrong"), this.dispatchEvent(new CustomEvent("error")), this.input.dispatchEvent(new CustomEvent("autocheck:error", {
                                detail: {
                                    message: Tr(e)
                                },
                                bubbles: !0
                            }))
                        }).then(n, n)
                }
            }

            function Tr(e) {
                if (422 === e.statusCode && e.responseText && e.contentType.includes("text/html; fragment")) return e.responseText
            }

            function Lr(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function jr(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function kr(e, t, n) {
                return t && jr(e.prototype, t), n && jr(e, n), e
            }

            function xr(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement, window.customElements.define("auto-check", AutoCheckElement)), document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest("a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]");
                if (!t) return;
                const n = t.getAttribute("data-confirm");
                n && (t instanceof HTMLInputElement && t.hasAttribute("data-confirm-checked") && !t.checked || confirm(n) || (e.stopImmediatePropagation(), e.preventDefault()))
            }, !0);
            var Ar = function() {
                function e(t) {
                    Lr(this, e), xr(this, "parent", void 0), xr(this, "children", []), this.parent = t
                }
                return kr(e, [{
                    key: "delete",
                    value: function(e) {
                        var t = this.children.indexOf(e);
                        return -1 !== t && (this.children = this.children.slice(0, t).concat(this.children.slice(t + 1)), 0 === this.children.length && this.parent.delete(this), !0)
                    }
                }, {
                    key: "add",
                    value: function(e) {
                        return this.children.push(e), this
                    }
                }]), e
            }();

            function Sr(e) {
                if (!(e instanceof HTMLElement)) return !1;
                var t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || e.isContentEditable
            }

            function Mr(e) {
                Sr(e) ? e.focus() : (e instanceof HTMLAnchorElement && e.href || "BUTTON" === e.tagName || "SUMMARY" === e.tagName || function(e) {
                    if (!(e instanceof HTMLElement)) return !1;
                    var t = e.nodeName.toLowerCase(),
                        n = (e.getAttribute("type") || "").toLowerCase();
                    return "input" === t && ("checkbox" === n || "radio" === n)
                }(e)) && e.click()
            }

            function _r(e) {
                return "".concat(e.ctrlKey ? "Control+" : "").concat(e.altKey ? "Alt+" : "").concat(e.metaKey ? "Meta+" : "").concat(e.key)
            }
            var Cr = new(function() {
                    function e(t) {
                        Lr(this, e), xr(this, "parent", null), xr(this, "children", {}), this.parent = t || null
                    }
                    return kr(e, [{
                        key: "get",
                        value: function(e) {
                            return this.children[e]
                        }
                    }, {
                        key: "insert",
                        value: function(t) {
                            for (var n = this, o = 0; o < t.length; o += 1) {
                                var r = t[o],
                                    i = n.get(r);
                                if (o === t.length - 1) return i instanceof e && (n.delete(i), i = null), i || (i = new Ar(n), n.children[r] = i), i;
                                i instanceof Ar && (i = null), i || (i = new e(n), n.children[r] = i), n = i
                            }
                            return n
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            for (var t in this.children) {
                                if (this.children[t] === e) {
                                    var n = delete this.children[t];
                                    return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this), n
                                }
                            }
                            return !1
                        }
                    }]), e
                }()),
                Ir = new WeakMap,
                Hr = Cr,
                Dr = null;

            function qr() {
                Dr = null, Hr = Cr
            }

            function Or(e) {
                if (!(e.target instanceof Node && Sr(e.target))) {
                    null != Dr && clearTimeout(Dr), Dr = setTimeout(qr, 1500);
                    var t = Hr.get(_r(e));
                    if (t) return Hr = t, t instanceof Ar ? (Mr(t.children[t.children.length - 1]), e.preventDefault(), void qr()) : void 0;
                    qr()
                }
            }
            fe("[data-hotkey]", {
                add(e) {
                    ! function(e, t) {
                        0 === Object.keys(Cr.children).length && document.addEventListener("keydown", Or);
                        var n = (t || e.getAttribute("data-hotkey") || "").split(",").map(function(e) {
                            return e.split(" ")
                        }).map(function(t) {
                            return Cr.insert(t).add(e)
                        });
                        Ir.set(e, n)
                    }(e)
                },
                remove(e) {
                    ! function(e) {
                        var t = Ir.get(e);
                        if (t && t.length) {
                            var n = !0,
                                o = !1,
                                r = void 0;
                            try {
                                for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                                    var a = i.value;
                                    a && a.delete(e)
                                }
                            } catch (c) {
                                o = !0, r = c
                            } finally {
                                try {
                                    n || null == s.return || s.return()
                                } finally {
                                    if (o) throw r
                                }
                            }
                        }
                        0 === Object.keys(Cr.children).length && document.removeEventListener("keydown", Or)
                    }(e)
                }
            }), IncludeFragmentElement.prototype.fetch = T;
            class PollIncludeFragmentElement extends IncludeFragmentElement {
                async fetch(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    const n = await super.fetch(e);
                    return 202 === n.status ? (await new Promise(e => setTimeout(e, t)), this.fetch(e, 1.5 * t)) : n
                }
            }

            function Pr() {
                const e = document.getElementById("ajax-error-message");
                e && e.classList.add("visible")
            }

            function Rr() {
                const e = document.getElementById("ajax-error-message");
                e && e.classList.remove("visible")
            }
            window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = PollIncludeFragmentElement, window.customElements.define("poll-include-fragment", PollIncludeFragmentElement)), ke("deprecatedAjaxError", "[data-remote]", function(e) {
                x(e instanceof CustomEvent, "null.js:25");
                const t = e.detail,
                    n = t.error,
                    o = t.text;
                e.currentTarget === e.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (Pr(), e.stopImmediatePropagation()) : setTimeout(function() {
                    e.defaultPrevented || Pr()
                }, 0))
            }), ke("deprecatedAjaxSend", "[data-remote]", function() {
                Rr()
            }), ke("click", ".js-ajax-error-dismiss", function() {
                Rr()
            }), Ke(["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]"].join(","), e => {
                x(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, "null.js:19");
                let t = e.checkValidity();

                function n() {
                    const n = e.checkValidity();
                    n !== t && e.form && $r(e.form), t = n
                }
                e.addEventListener("input", n), e.addEventListener("blur", function t() {
                    e.removeEventListener("input", n), e.removeEventListener("blur", t)
                })
            });
            const Nr = new WeakMap;

            function $r(e) {
                const t = e.checkValidity();
                for (const n of u(e, "button[data-disable-invalid]", HTMLButtonElement)) n.disabled = !t
            }

            function Fr() {}
            fe("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form;
                    t && (! function(e) {
                        Nr.get(e) || (e.addEventListener("change", () => $r(e)), Nr.set(e, !0))
                    }(t), e.disabled = !t.checkValidity())
                }
            }), fe("input[data-required-change], textarea[data-required-change]", function(e) {
                x(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, "null.js:66");
                const t = "radio" === e.type && e.form ? d(e.form, e.name, RadioNodeList).value : null;

                function n(n) {
                    const o = e.form;
                    if (n && "radio" === e.type && o && t)
                        for (const r of d(o, e.name, RadioNodeList)) r.setCustomValidity(e.value === t ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (t || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", n), e.addEventListener("change", n), n(), e.form && $r(e.form)
            }), document.addEventListener("reset", function(e) {
                if (e.target instanceof HTMLFormElement) {
                    const t = e.target;
                    setTimeout(() => $r(t))
                }
            });
            class Br {
                constructor() {
                    this.previousReceiver = {
                        resolve: Fr,
                        reject: Fr
                    }
                }
                push(e) {
                    return this.previousReceiver.resolve = this.previousReceiver.reject = Fr, new Promise((t, n) => {
                        const o = {
                            resolve: t,
                            reject: n
                        };
                        this.previousReceiver = o, e.then(function() {
                            o.resolve.apply(this, arguments)
                        }, function() {
                            o.reject.apply(this, arguments)
                        })
                    })
                }
            }

            function Ur() {
                return Promise.resolve()
            }

            function Wr() {
                return new Promise(window.requestAnimationFrame)
            }

            function Xr() {
                if ("Intl" in window) try {
                    return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
                } catch (e) {
                    if (!(e instanceof RangeError)) throw e
                }
            }

            function Vr(e, t) {
                return !!(e && t in e && (n = e[t], "function" == typeof n && n.toString().match(/native code/)));
                var n
            }
            e("E", Br);
            const zr = {
                beacon: Vr(window.navigator, "sendBeacon"),
                customElements: Vr(window.customElements, "define"),
                highResolutionTime: Vr(window.performance, "now"),
                stringEndsWith: Vr(String.prototype, "endsWith"),
                stringStartsWith: Vr(String.prototype, "startsWith"),
                timezone: !!Xr(),
                userTimingEntries: Vr(window.performance, "getEntries"),
                userTimingMark: Vr(window.performance, "mark")
            };
            e("J", zr);
            class Yr {
                constructor(e) {
                    this.closed = !1, this.unsubscribe = (() => {
                        e(), this.closed = !0
                    })
                }
            }

            function Gr(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return e.addEventListener(t, n, o), new Yr(() => {
                    e.removeEventListener(t, n, o)
                })
            }

            function Kr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        o = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); o = !0);
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function Jr(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return Qr(e) || function(e, t) {
                    const n = e.ownerDocument.activeElement;
                    if (!n) return !1;
                    if (t && n === e) return !1;
                    return Et(n) && e === n || e.contains(n)
                }(e, t) || function(e) {
                    return e.matches(":active")
                }(e) || function(e) {
                    return !(!e.closest(".is-dirty") && !e.querySelector(".is-dirty"))
                }(e)
            }

            function Qr(e) {
                for (const t of e.querySelectorAll("input, textarea"))
                    if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && Zr(t)) return !0;
                return !1
            }

            function Zr(e) {
                if (e instanceof HTMLInputElement && ("checkbox" === e.type || "radio" === e.type)) {
                    if (e.checked !== e.defaultChecked) return !0
                } else if (e.value !== e.defaultValue) return !0;
                return !1
            }

            function ei(e, t) {
                return ti(function(e) {
                    if (e.activeElement !== e.body) return e.activeElement;
                    var t = e.querySelectorAll(":hover"),
                        n = t.length;
                    if (n) return t[n - 1]
                }(e), t)
            }

            function ti(e, t) {
                var n = e;
                if (!n) return Promise.resolve(t());
                var o = n.ownerDocument.documentElement;
                var r = function(e) {
                    for (var t = []; e;) {
                        var n = e.getBoundingClientRect(),
                            o = n.top,
                            r = n.left;
                        t.push({
                            element: e,
                            top: o,
                            left: r
                        }), e = e.parentElement
                    }
                    return t
                }(n);
                return Promise.resolve(t()).then(function(e) {
                    var t = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            if (o.contains(n.element)) return n
                        }
                    }(r);
                    if (t) {
                        n = t.element;
                        var i = t.top,
                            s = t.left,
                            a = n.getBoundingClientRect(),
                            c = a.top,
                            l = a.left;
                        ! function(e, t, n) {
                            var o = e.ownerDocument,
                                r = o.defaultView;

                            function i(e) {
                                return e.offsetParent ? {
                                    top: e.scrollTop,
                                    left: e.scrollLeft
                                } : {
                                    top: r.pageYOffset,
                                    left: r.pageXOffset
                                }
                            }

                            function s(e, t, n) {
                                if (0 === t && 0 === n) return [0, 0];
                                var s = i(e),
                                    a = s.top + n,
                                    c = s.left + t;
                                e === o || e === r || e === o.documentElement || e === o.body ? o.defaultView.scrollTo(c, a) : (e.scrollTop = a, e.scrollLeft = c);
                                var l = i(e);
                                return [l.left - s.left, l.top - s.top]
                            }

                            function a(e) {
                                var t = e;
                                if (t.offsetParent && t !== o.body) {
                                    for (; t !== o.body;) {
                                        if (!t.parentElement) return;
                                        t = t.parentElement;
                                        var n = r.getComputedStyle(t),
                                            i = n.position,
                                            s = n.overflowY,
                                            a = n.overflowX;
                                        if ("fixed" === i || "auto" === s || "auto" === a || "scroll" === s || "scroll" === a) break
                                    }
                                    return t
                                }
                            }
                            var c = a(e),
                                l = 0,
                                u = 0;
                            for (; c;) {
                                var d = s(c, t - l, n - u);
                                if (l += d[0], u += d[1], l === t && u === n) break;
                                c = a(c)
                            }
                        }(n, l - s, c - i)
                    }
                    return e
                })
            }

            function ni(e, t) {
                return new Promise((n, o) => {
                    e.onload = (() => {
                        200 === e.status ? n(e.responseText) : o(new Error(`XMLHttpRequest ${e.statusText}`))
                    }), e.onerror = o, e.send(t || null)
                })
            }
            fe(".js-check-all-container", {
                subscribe: function(e) {
                    var t = !1,
                        n = null;

                    function o(e, t, n, o) {
                        t instanceof HTMLInputElement && (t.indeterminate = o, t.checked !== n && (t.checked = n, setTimeout(function() {
                            var n = new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !1,
                                detail: {
                                    relatedTarget: e
                                }
                            });
                            t.dispatchEvent(n)
                        })))
                    }

                    function r(r) {
                        var i = r.target;
                        i instanceof Element && (i.hasAttribute("data-check-all") ? function(t) {
                            if (t instanceof CustomEvent && t.detail) {
                                var r = t.detail.relatedTarget;
                                if (r && r.hasAttribute("data-check-all-item")) return
                            }
                            var i = t.target;
                            if (i instanceof HTMLInputElement) {
                                n = null;
                                var a = !0,
                                    c = !1,
                                    l = void 0;
                                try {
                                    for (var u, d = e.querySelectorAll("[data-check-all-item]")[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                                        var f = u.value;
                                        o(i, f, i.checked, !1)
                                    }
                                } catch (m) {
                                    c = !0, l = m
                                } finally {
                                    try {
                                        a || null == d.return || d.return()
                                    } finally {
                                        if (c) throw l
                                    }
                                }
                                s()
                            }
                        }(r) : i.hasAttribute("data-check-all-item") && function(r) {
                            if (r instanceof CustomEvent && r.detail) {
                                var i = r.detail.relatedTarget;
                                if (i && (i.hasAttribute("data-check-all") || i.hasAttribute("data-check-all-item"))) return
                            }
                            var a = r.target;
                            if (a instanceof HTMLInputElement) {
                                var c = e.querySelector("[data-check-all]");
                                if (c) {
                                    var l = Array.from(e.querySelectorAll("[data-check-all-item]"));
                                    if (t && n) {
                                        var u = [l.indexOf(n), l.indexOf(a)].sort(),
                                            d = Kr(u, 2),
                                            f = d[0],
                                            m = d[1],
                                            p = !0,
                                            h = !1,
                                            g = void 0;
                                        try {
                                            for (var v, b = l.slice(f, +m + 1 || 9e9)[Symbol.iterator](); !(p = (v = b.next()).done); p = !0) {
                                                var w = v.value;
                                                o(a, w, a.checked, !1)
                                            }
                                        } catch (T) {
                                            h = !0, g = T
                                        } finally {
                                            try {
                                                p || null == b.return || b.return()
                                            } finally {
                                                if (h) throw g
                                            }
                                        }
                                    }
                                    t = !1, n = a;
                                    var y = l.length,
                                        E = l.filter(function(e) {
                                            return e instanceof HTMLInputElement && e.checked
                                        }).length;
                                    o(a, c, E === y, y > E && E > 0), s()
                                }
                            }
                        }(r))
                    }

                    function i(e) {
                        e.target instanceof Element && e.target.hasAttribute("data-check-all-item") && (t = e.shiftKey)
                    }

                    function s() {
                        var t = e.querySelector("[data-check-all-count]");
                        if (t) {
                            var n = e.querySelectorAll("[data-check-all-item]:checked").length;
                            t.textContent = n.toString()
                        }
                    }
                    return e.addEventListener("mousedown", i), e.addEventListener("change", r), {
                        unsubscribe: function() {
                            e.removeEventListener("mousedown", i), e.removeEventListener("change", r)
                        }
                    }
                }
            });
            const oi = new WeakMap;
            async function ri(e) {
                if (oi.get(e)) return;
                const t = new XMLHttpRequest,
                    n = f(e, "data-url"),
                    o = e.hasAttribute("data-retain-focus");
                t.open("GET", n), t.setRequestHeader("Accept", "text/html"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), oi.set(e, t);
                try {
                    const n = await ni(t);
                    if (Jr(e, o)) throw new Error("element had interactions");
                    return ii(e, n, o)
                } catch (r) {
                    "XMLHttpRequest abort" !== r.message && console.warn("Failed to update content", e, r)
                } finally {
                    oi.delete(e)
                }
            }

            function ii(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return ei(document, () => {
                    const o = g(document, t.trim()),
                        r = n && e === e.ownerDocument.activeElement ? o.querySelector("*") : null;
                    for (const t of e.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const e = f(t, "data-updatable-content-scroll-position-id");
                        si.set(e, t.scrollTop)
                    }
                    e.replaceWith(o), r && r.focus()
                })
            }
            const si = new Map;

            function ai(e) {
                const t = c(e, ".js-previewable-comment-form"),
                    n = e.classList.contains("js-preview-tab");
                if (n) {
                    const e = l(t, ".js-write-bucket");
                    l(t, ".js-preview-body").style.minHeight = `${e.clientHeight}px`
                }
                t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
                const o = l(t, ".tabnav-tab.selected");
                o.setAttribute("aria-selected", "false"), o.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
                const r = l(t, ".js-write-tab");
                return n ? r.setAttribute("data-hotkey", "Control+P,Meta+P") : r.removeAttribute("data-hotkey"), t
            }
            fe(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(e) {
                    const t = e.getAttribute("data-updatable-content-scroll-position-id");
                    if (!t) return;
                    const n = si.get(t);
                    null != n && (e.scrollTop = n)
                }
            }), ke("click", ".js-comment-edit-button", function(e) {
                const t = c(e.currentTarget, ".js-comment");
                t.classList.add("is-comment-editing"), l(t, ".js-write-tab").click();
                const n = l(t, ".js-comment-field");
                x(n instanceof HTMLTextAreaElement, "null.js:18"), n.focus(), xe(n, "change");
                const o = e.currentTarget.closest(".js-dropdown-details");
                o && o.removeAttribute("open")
            }), ke("click", ".js-comment-hide-button", function(e) {
                const t = c(e.currentTarget, ".js-comment").querySelector(".js-minimize-comment");
                t && t.classList.remove("d-none");
                const n = e.currentTarget.closest(".js-dropdown-details");
                n && n.removeAttribute("open")
            }), ke("click", ".js-comment-hide-minimize-form", function(e) {
                c(e.currentTarget, ".js-minimize-comment").classList.add("d-none")
            }), ke("click", ".js-comment-cancel-button", function(e) {
                const t = c(e.currentTarget, "form", HTMLFormElement),
                    n = f(e.currentTarget, "data-confirm-text");
                if (Qr(t) && !confirm(n)) return !1;
                for (const r of t.querySelectorAll("input, textarea")) x(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement, "null.js:57"), r.value = r.defaultValue;
                const o = e.currentTarget.closest(".js-comment");
                o && o.classList.remove("is-comment-editing")
            }), Dt(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", function(e, t, n) {
                const o = c(e, ".js-comment");
                o.classList.add("is-comment-loading");
                const r = o.getAttribute("data-body-version");
                r && n.headers.set("X-Body-Version", r)
            }), Dt(".js-comment .js-comment-update", async function(e, t) {
                let n;
                const o = c(e, ".js-comment");
                try {
                    n = await t.json()
                } catch (u) {
                    if (422 !== u.response.status) throw u; {
                        const e = JSON.parse(u.response.text);
                        if (e.errors) {
                            const t = o.querySelector(".js-comment-update-error");
                            return void(t && (t.textContent = `There was an error posting your comment: ${e.errors.join(", ")}`, t.style.display = "block"))
                        }
                    }
                }
                if (!n) return;
                const r = n.json,
                    i = o.querySelector(".js-comment-body");
                i && r.body && (i.innerHTML = r.body);
                const s = o.querySelector(".js-comment-update-error");
                s && (s.style.display = "none"), o.setAttribute("data-body-version", r.newBodyVersion);
                const a = o.querySelector(".js-body-version");
                a instanceof HTMLInputElement && (a.value = r.newBodyVersion);
                for (const c of o.querySelectorAll("input, textarea")) x(c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement, "null.js:122"), c.defaultValue = c.value;
                o.classList.remove("is-comment-stale", "is-comment-editing");
                const l = o.querySelector(".js-comment-edit-history");
                if (l) {
                    const e = await j(document, r.editUrl);
                    l.innerHTML = "", l.append(e)
                }
            }), Dt(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", async function(e, t) {
                const n = c(e, ".js-comment");
                try {
                    await t.text()
                } catch (o) {
                    if (422 !== o.response.status) throw o; {
                        let e;
                        try {
                            e = JSON.parse(o.response.text)
                        } catch (r) {}
                        e && e.stale && n.classList.add("is-comment-stale")
                    }
                }
                n.classList.remove("is-comment-loading")
            }), Dt(".js-comment-delete", async function(e, t) {
                await t.json();
                let n = e.closest(".js-comment-delete-container");
                n || (n = e.closest(".js-comment-container") || e.closest(".js-line-comments")) && 1 !== n.querySelectorAll(".js-comment").length && (n = c(e, ".js-comment")), x(n, "null.js:176"), n.remove()
            }), Dt(".js-issue-update", async function(e, t) {
                const n = c(e, ".js-details-container");
                n.classList.remove("open");
                const o = (await t.json()).json;
                if (null != o.issue_title) {
                    l(n, ".js-issue-title").textContent = o.issue_title;
                    const e = n.closest(".js-issues-results");
                    if (e) {
                        const t = e.querySelector(".js-merge-pull-request textarea");
                        t instanceof HTMLTextAreaElement && t.value === t.defaultValue && (t.value = t.defaultValue = o.issue_title)
                    }
                }
                document.title = o.page_title;
                for (const r of e.elements)(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement) && (r.defaultValue = r.value)
            }), Dt(".js-comment-minimize", async function(e, t) {
                await t.json();
                const n = c(e, ".js-comment").querySelector(".js-minimize-comment");
                n && n.classList.add("d-none");
                const o = c(e, ".unminimized-comment");
                o.classList.add("d-none"), o.classList.remove("js-comment");
                const r = c(e, ".js-minimizable-comment-group").querySelector(".minimized-comment");
                r && r.classList.remove("d-none"), r && r.classList.add("js-comment")
            }), Dt(".js-comment-unminimize", async function(e, t) {
                await t.json();
                const n = c(e, ".js-minimizable-comment-group"),
                    o = n.querySelector(".unminimized-comment");
                o && o.classList.remove("d-none"), o && o.classList.add("js-comment");
                const r = n.querySelector(".minimized-comment");
                r && r.classList.add("d-none"), r && r.classList.remove("js-comment")
            }), ke("click", ".js-write-tab", function(e) {
                const t = e.currentTarget,
                    n = ai(t);
                setTimeout(() => {
                    l(n, ".js-comment-field").focus()
                });
                const o = c(t, ".js-previewable-comment-form").querySelector("markdown-toolbar");
                null != o && o.classList.remove("d-none")
            }), ke("click", ".js-preview-tab", function(e) {
                const t = e.currentTarget,
                    n = ai(t);
                setTimeout(() => {
                    fi(n)
                });
                const o = c(t, ".js-previewable-comment-form").querySelector("markdown-toolbar");
                null != o && o.classList.add("d-none"), e.stopPropagation(), e.preventDefault()
            }), ke("preview:render", ".js-previewable-comment-form", function(e) {
                const t = ai(l(e.target, ".js-preview-tab"));
                setTimeout(() => {
                    fi(t)
                })
            });
            const ci = new Br,
                li = new WeakMap;
            let ui = !1;
            async function di(e, t, n, o, r) {
                const i = {};
                i.text = t, i.authenticity_token = function(e) {
                    const t = e.getAttribute("data-preview-authenticity-token"),
                        n = c(e, "form", HTMLFormElement).elements.namedItem("authenticity_token");
                    return null != t ? t : n instanceof HTMLInputElement ? n.value : void 0
                }(e), o && (i.path = o), n && (i.original_line = n), r && (i.line_number = r);
                const s = {
                    url: f(e, "data-preview-url"),
                    data: i
                };
                xe(e, "preview:setup", s);
                const a = JSON.stringify(s),
                    l = dt(li.get(e) || [], 2),
                    u = l[0],
                    d = l[1];
                if (u === a) return d;
                ui = !1;
                const m = ci.push(function(e) {
                    const t = new FormData;
                    for (const n in e.data) null !== e.data[n] && t.append(n, e.data[n]);
                    return L(e.url, {
                        method: "post",
                        body: t
                    })
                }(s));
                li.set(e, [a, m]);
                const p = await m;
                return ui = !0, p
            }
            async function fi(e) {
                const t = l(e, ".js-comment-field", HTMLTextAreaElement),
                    n = l(e, ".comment-body"),
                    o = e.querySelector(".js-original-line"),
                    r = e.querySelector(".js-path"),
                    i = e.querySelector(".js-line-number"),
                    s = o instanceof HTMLInputElement ? o.value : null,
                    a = r instanceof HTMLInputElement ? r.value : null,
                    c = i instanceof HTMLInputElement ? i.value : null;
                ui || (n.innerHTML = "<p>Loading preview&hellip;</p>");
                try {
                    const o = await di(e, t.value, s, a, c);
                    n.innerHTML = o || "<p>Nothing to preview</p>"
                } catch (u) {
                    n.innerHTML = "<p>Error rendering preview</p>"
                }
            }
            fe(".js-preview-tab", function(e) {
                let t, n, o, r, i;
                e.addEventListener("mouseenter", () => {
                    !async function() {
                        if (!t) {
                            t = c(e, ".js-previewable-comment-form"), n = l(t, ".js-comment-field", HTMLTextAreaElement);
                            const s = t.querySelector(".js-original-line"),
                                a = t.querySelector(".js-path"),
                                u = t.querySelector(".js-line-number");
                            o = s instanceof HTMLInputElement ? s.value : null, r = a instanceof HTMLInputElement ? a.value : null, i = u instanceof HTMLInputElement ? u.value : null
                        }
                        try {
                            await di(t, n.value, o, r, i)
                        } catch (s) {}
                    }()
                })
            }), Je("keydown", ".js-comment-field", function(e) {
                const t = e.target;
                if (x(t instanceof HTMLTextAreaElement, "null.js:238"), (e.ctrlKey || e.metaKey) && "P" === e.key) {
                    const n = c(t, ".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (t.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1
                    })), e.preventDefault(), e.stopImmediatePropagation())
                }
            });
            const mi = new WeakMap,
                pi = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");

            function hi(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }

            function gi(e) {
                for (const t of e.querySelectorAll(pi)) {
                    const n = mi.get(t);
                    null != n && (x(t instanceof HTMLInputElement || t instanceof HTMLButtonElement, "null.js:56"), hi(t, n), t.hasAttribute("data-disable-invalid") && !e.checkValidity() || (t.disabled = !1), mi.delete(t))
                }
            }
            ke("submit", "form", function(e) {
                for (const n of e.currentTarget.querySelectorAll(pi)) {
                    x(n instanceof HTMLInputElement || n instanceof HTMLButtonElement, "null.js:40"), mi.set(n, (t = n) instanceof HTMLInputElement ? t.value || "Submit" : t.innerHTML || "");
                    const e = n.getAttribute("data-disable-with");
                    e && hi(n, e), n.disabled = !0
                }
                var t
            }, {
                capture: !0
            }), ke("deprecatedAjaxComplete", "form", function(e) {
                let t = e.currentTarget,
                    n = e.target;
                x(t instanceof HTMLFormElement, "null.js:70"), t === n && gi(t)
            }), Ht(gi);
            const vi = new WeakMap;

            function bi(e) {
                return vi.has(e)
            }

            function wi(e, t, n) {
                const o = n.limit,
                    r = l(e, "template", HTMLTemplateElement),
                    i = {};
                for (const l of u(e, "input[type=hidden]", HTMLInputElement)) i[`${l.name}${l.value}`] = l;
                let s = r.nextElementSibling;
                for (; s;) {
                    const e = s;
                    s = e.nextElementSibling, e.classList.contains("selected") || e.classList.contains("select-menu-divider") ? e.classList.add("d-none") : e.remove()
                }
                const a = vi.get(e);
                x(null != a, "null.js:69");
                let c = 0,
                    d = document.createDocumentFragment();
                const f = e.querySelector(".js-divider-suggestions"),
                    m = e.querySelector(".js-divider-rest");

                function p(e) {
                    const n = !(null != o && c >= o) && function(e) {
                        return `${e.login} ${e.name}`.toLowerCase().trim()
                    }(e).indexOf(t) >= 0;
                    if (n || e.selected) {
                        const t = function(e, t, n) {
                            if (null != e.element) return e.element;
                            const o = t.content.cloneNode(!0),
                                r = l(o, "input[type=checkbox]", HTMLInputElement);
                            e.type && (r.name = `reviewer_${e.type}_ids[]`);
                            r.value = e.id;
                            const i = `${r.name}${e.id}`;
                            let s = e.selected;
                            n[i] && (s = !0, n[i].remove(), delete n[i]);
                            const a = l(o, ".js-navigation-item");
                            s && (a.classList.add("selected"), r.checked = !0);
                            e.disabled && a.classList.add("disabled");
                            const c = o.querySelector(".js-username");
                            c && (c.textContent = e.login);
                            const u = o.querySelector(".js-description");
                            u && (u.textContent = e.name);
                            const d = o.querySelector(".js-extended-description");
                            d && (e.description ? d.textContent = e.description : d.remove());
                            return l(o, ".js-avatar", HTMLImageElement).src = e.avatar, e.element = a, e.element
                        }(e, r, i);
                        t.classList.toggle("d-none", !n), n && c++, d.appendChild(t)
                    }
                }
                if (f && a.suggestions) {
                    for (const e of a.suggestions) p(e);
                    d.childNodes.length && (f.after(d), f.classList.toggle("d-none", 0 === c), d = document.createDocumentFragment())
                }
                const h = c;
                for (const l of a.users) p(l);
                return e.append(d), m && m.classList.toggle("d-none", c === h || 0 === h), c
            }

            function yi(e, t) {
                let n = ji(e, t);
                if (n && -1 === t.indexOf("/")) {
                    n += ji(e.substring(e.lastIndexOf("/") + 1), t)
                }
                return n
            }

            function Ei(e, t) {
                const n = e[0],
                    o = t[0],
                    r = e[1],
                    i = t[1];
                return r > i ? -1 : r < i ? 1 : n < o ? -1 : n > o ? 1 : 0
            }

            function Ti(e) {
                const t = e.toLowerCase().split("");
                let n = "";
                for (let o = 0; o < t.length; o++) {
                    const e = t[o].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                    n += 0 === o ? `(.*)(${e})` : `([^${e}]*?)(${e})`
                }
                return new RegExp(`${n}(.*?)$`, "i")
            }

            function Li(e, t, n) {
                if (t) {
                    const o = e.innerHTML.trim().match(n || Ti(t));
                    if (!o) return;
                    let r = !1;
                    const i = [];
                    for (let e = 1; e < o.length; ++e) {
                        const t = o[e];
                        t && (e % 2 == 0 ? r || (i.push("<mark>"), r = !0) : r && (i.push("</mark>"), r = !1), i.push(t))
                    }
                    e.innerHTML = i.join("")
                } else {
                    const t = e.innerHTML.trim(),
                        n = t.replace(/<\/?mark>/g, "");
                    t !== n && (e.innerHTML = n)
                }
            }

            function ji(e, t) {
                let n = e;
                if (n === t) return 1;
                const o = n.length;
                let r = 0,
                    i = 0;
                for (let l = 0; l < t.length; l++) {
                    const e = t[l],
                        s = n.indexOf(e.toLowerCase()),
                        a = n.indexOf(e.toUpperCase()),
                        c = Math.min(s, a),
                        u = c > -1 ? c : Math.max(s, a);
                    if (-1 === u) return 0;
                    r += .1, n[u] === e && (r += .1), 0 === u && (r += .8, 0 === l && (i = 1)), " " === n.charAt(u - 1) && (r += .8), n = n.substring(u + 1, o)
                }
                const s = t.length,
                    a = r / s;
                let c = (a * (s / o) + a) / 2;
                return i && c + .1 < 1 && (c += .1), c
            }
            const ki = new WeakMap,
                xi = new WeakMap,
                Ai = new WeakMap;

            function Si(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return 0;
                const o = t.toLowerCase(),
                    r = null != n.text ? n.text : _i,
                    i = n.limit,
                    s = n.score;
                let a = ki.get(e);
                const c = e.querySelector('input[type="radio"]:checked'),
                    l = Array.from(e.children);
                a || (a = Array.from(e.children), ki.set(e, a));
                for (const h of l) e.removeChild(h), h.style.display = "";
                const u = document.createDocumentFragment();
                let d = 0,
                    f = 0;
                if (o) {
                    const e = Array.from(a);
                    for (const n of e) {
                        null == xi.get(n) && xi.set(n, r(n));
                        const e = s ? s(xi.get(n) || "", o, n) : yi(xi.get(n) || "", o);
                        Ai.set(n, String(e))
                    }
                    e.sort(Mi);
                    const t = Ti(o);
                    for (const r of e)(null == i || d < i) && parseFloat(Ai.get(r)) > 0 && (f++, !0 === n.mark && (Li(r), Li(r, o, t)), u.appendChild(r)), d++
                } else
                    for (const h of a)(null == i || d < i) && (f++, !0 === n.mark && Li(h), u.appendChild(h)), d++;
                let m = !1;
                if (c instanceof HTMLInputElement)
                    for (const h of u.querySelectorAll('input[type="radio"]:checked')) h instanceof HTMLInputElement && h.value !== c.value && (h.checked = !1, m = !0);
                e.appendChild(u), c && m && c.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const p = e.querySelectorAll(".js-divider");
                for (const h of p) h.classList.toggle("d-none", Boolean(o && o.trim().length > 0));
                return f
            }

            function Mi(e, t) {
                const n = parseFloat(Ai.get(e)),
                    o = parseFloat(Ai.get(t)),
                    r = xi.get(e) || "",
                    i = xi.get(t) || "";
                return n > o ? -1 : n < o ? 1 : r < i ? -1 : r > i ? 1 : 0
            }

            function _i(e) {
                if (e.hasAttribute("data-filter-value")) {
                    return (e.getAttribute("data-filter-value") || "").toLowerCase().trim()
                }
                return e.textContent.toLowerCase().trim()
            }

            function Ci(e, t) {
                let n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return;
                const r = t.toLowerCase(),
                    i = null != o.text ? o.text : Ii,
                    s = o.limit;
                !0 === o.mark ? n = Hi : "function" == typeof o.mark && (n = o.mark);
                let a = 0;
                for (const c of e.children) 0 === i(c).indexOf(r) ? null != s && a >= s ? (c.style.display = "none", c.hidden = !0) : (a++, c.style.display = "", c.hidden = !1, n && (n(c), n(c, r))) : (c.style.display = "none", c.hidden = !0);
                return a
            }

            function Ii(e) {
                return e.textContent.toLowerCase().trim()
            }

            function Hi(e, t) {
                const n = e.innerHTML;
                if (t) {
                    const o = new RegExp(t, "i");
                    e.innerHTML = n.replace(o, "<mark>$&</mark>")
                } else {
                    const t = n.replace(/<\/?mark>/g, "");
                    n !== t && (e.innerHTML = t)
                }
            }

            function Di(e, t) {
                let n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!e) return;
                const r = t.toLowerCase(),
                    i = null != o.text ? o.text : qi,
                    s = o.limit,
                    a = Array.from(e.children).filter(e => !e.classList.contains("select-menu-no-results"));
                !0 === o.mark ? n = Oi : "function" == typeof o.mark && (n = o.mark);
                let c = 0;
                for (const l of a) - 1 !== i(l).indexOf(r) ? null != s && c >= s ? (l.style.display = "none", l.hidden = !0) : (c++, l.style.display = "", l.hidden = !1, n && (n(l), n(l, r))) : (l.style.display = "none", l.hidden = !0);
                return c
            }

            function qi(e) {
                return e.textContent.toLowerCase().trim()
            }

            function Oi(e, t) {
                const n = e.innerHTML;
                if (t) {
                    const o = new RegExp(t, "i");
                    e.innerHTML = n.replace(o, "<mark>$&</mark>")
                } else {
                    const t = n.replace(/<\/?mark>/g, "");
                    n !== t && (e.innerHTML = t)
                }
            }

            function Pi(e, t) {
                const n = e.hasAttribute("data-filterable-highlight"),
                    o = parseInt(e.getAttribute("data-filterable-limit"), 10) || null;
                let r = 0;
                switch (e.getAttribute("data-filterable-type")) {
                    case "fuzzy":
                        r = Si(e, t, {
                            mark: n,
                            limit: o
                        });
                        break;
                    case "substring":
                        r = Di(e, t, {
                            mark: n,
                            limit: o
                        });
                        break;
                    case "substring-memory":
                        r = wi(e, t, {
                            limit: o
                        });
                        break;
                    default:
                        r = Ci(e, t, {
                            mark: n,
                            limit: o
                        })
                }! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    const n = e.closest(".js-select-menu, details-menu");
                    if (!n) return;
                    const o = function(e) {
                        let t = e.querySelector("[data-filterable-notice]");
                        return t || ((t = document.createElement("div")).classList.add("sr-only"), t.setAttribute("data-filterable-notice", ""), t.setAttribute("aria-live", "polite"), e.append(t), t)
                    }(n);
                    o.textContent = "", o.textContent = `${t} results found.`
                }(e, r), e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === r)
            }
            fe(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    let t = e.value;
                    async function n(e) {
                        t !== e.value && (t = e.value, await Ur(), xe(e, "filterable:change"))
                    }
                    async function o() {
                        t = e.value, await Ur(), xe(e, "filterable:change")
                    }
                    return {
                        add(e) {
                            e.addEventListener("focus", o), Ft(e, n), document.activeElement === e && o()
                        },
                        remove(e) {
                            e.removeEventListener("focus", o), Bt(e, n)
                        }
                    }
                }
            }), ke("filterable:change", ".js-filterable-field", function(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLInputElement, "null.js:85");
                const n = t.value.trim().toLowerCase(),
                    o = document.querySelectorAll(`[data-filterable-for=${t.id}]`);
                for (const r of o) {
                    if ("substring-memory" === r.getAttribute("data-filterable-type") && !bi(r)) continue;
                    Pi(r, n);
                    const e = new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    });
                    r.dispatchEvent(e)
                }
            }), document.addEventListener("selectmenu:data", function(e) {
                x(e instanceof CustomEvent, "null.js:160");
                const t = e.target,
                    n = e.detail;
                x(t instanceof HTMLElement, "null.js:162");
                const o = t.querySelector('[data-filterable-type="substring-memory"]');
                if (o) {
                    ! function(e, t) {
                        vi.set(e, t)
                    }(o, n.data);
                    const e = t.querySelector(".js-filterable-field");
                    e && e === document.activeElement && xe(e, "filterable:change")
                }
            }), ke("click", ".js-flash-close", function(e) {
                const t = e.currentTarget.closest(".flash-messages"),
                    n = e.currentTarget.closest(".flash");
                x(n, "null.js:24"), n.remove(), t && !t.querySelector(".flash") && t.remove()
            });
            const Ri = new WeakMap;

            function Ni(e) {
                return $i(e, Fi(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.hash))
            }

            function $i(e, t) {
                if ("" !== t) return e.getElementById(t) || e.getElementsByName(t)[0]
            }

            function Fi(e) {
                try {
                    return decodeURIComponent(e.slice(1))
                } catch (t) {
                    return ""
                }
            }

            function Bi(e) {
                const t = [];
                let n = e;
                for (; n && (t.push(Ui(n)), 9 !== n.nodeType && !n.id);) n = n.parentNode;
                return t.reverse().join(" > ")
            }

            function Ui(e) {
                if (e === window) return "window";
                const t = [e.nodeName.toLowerCase()],
                    n = e.id;
                if (n && t.push(`#${n}`), "function" == typeof e.getAttribute && e.getAttribute("class")) {
                    const n = (e.getAttribute("class") || "").trim().split(/\s+/).join(".");
                    n && t.push(`.${n}`)
                }
                return t.join("")
            }
            document.addEventListener("focus", function(e) {
                const t = e.target;
                Ri.get(t) || (xe(t, "focusin:delay"), Ri.set(t, !0))
            }, {
                capture: !0
            }), document.addEventListener("blur", function(e) {
                setTimeout(function() {
                    const t = e.target;
                    t !== document.activeElement && (xe(t, "focusout:delay"), Ri.delete(e.target))
                }, 200)
            }, {
                capture: !0
            });
            const Wi = new WeakMap;

            function Xi(e, t) {
                const n = function(e, t) {
                    const n = u(e, "link[rel=pjax-prefetch]", HTMLLinkElement);
                    for (const o of n)
                        if (o.href === t) return o
                }(e, t);
                if (n) {
                    const e = Wi.get(n);
                    return n.remove(), Wi.delete(n), e
                }
            }
            const Vi = {
                    container: null,
                    timeout: 650,
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0
                },
                zi = 20;
            let Yi;
            const Gi = new Br;

            function Ki(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }

            function Ji(e) {
                Qi({
                    url: e.url,
                    container: e.container
                })
            }

            function Qi(e) {
                const t = {
                    url: "",
                    container: null
                };
                Object.assign(t, Vi, e), x("string" == typeof t.url, "null.js:179"), t.requestUrl = t.url;
                const n = is(t.url),
                    o = n.hash,
                    r = t.container;
                x(r, "null.js:185");
                const i = as(r);
                "GET" === t.type && (n.search += `${n.search?"&":""}_pjax=${encodeURIComponent(i)}`, t.url = n.toString()), Yi || at(Yi = {
                    id: os(),
                    url: window.location.href,
                    title: document.title,
                    container: i,
                    fragment: t.fragment,
                    timeout: t.timeout
                }, Yi.title, Yi.url), Ji.options = t, x("string" == typeof t.requestUrl, "null.js:327");
                let s = Xi(r, t.requestUrl);
                var a, c;
                s || (x(t.url, "null.js:330"), s = T(t.url, {
                    method: t.type,
                    body: t.data,
                    headers: {
                        Accept: "text/html",
                        "X-PJAX": "true",
                        "X-PJAX-Container": i
                    }
                }), "GET" === t.type && "number" == typeof t.timeout && t.timeout > 0 && (s = Promise.race([s, new Promise((e, n) => {
                    setTimeout(() => {
                        Ki(r, "pjax:timeout") && n(new Error("timeout"))
                    }, t.timeout)
                })]))), !0 === t.push && !0 !== t.replace && (a = Yi.id, c = rs(r), ds[a] = c, ms.push(a), ps(fs, 0), ps(ms, zi), x("string" == typeof t.requestUrl, "null.js:358"), st(null, "", t.requestUrl)), Ki(r, "pjax:start", {
                    url: t.url
                }), Ki(r, "pjax:send"), Gi.push(s).then(async function(e) {
                        const n = Yi,
                            s = function() {
                                for (const e of document.getElementsByTagName("meta")) {
                                    const t = e.getAttribute("http-equiv");
                                    if (t && "X-PJAX-VERSION" === t.toUpperCase()) return e.content
                                }
                            }(),
                            a = e.headers.get("X-PJAX-Version"),
                            c = function(e, t, n) {
                                x("string" == typeof n.requestUrl, "null.js:615");
                                const o = {
                                        url: us(t, n.requestUrl),
                                        title: ""
                                    },
                                    r = /<html/i.test(e);
                                if ("text/html" !== (t.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                                let i, s;
                                if (r) {
                                    const t = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                        n = e.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                                    i = t ? Array.from(g(document, t[0]).childNodes) : [], s = n ? Array.from(g(document, n[0]).childNodes) : []
                                } else i = s = Array.from(g(document, e).childNodes);
                                if (0 === s.length) return o;
                                const a = cs(i, "title", HTMLTitleElement);
                                let c;
                                if (o.title = a.length > 0 ? a[a.length - 1].textContent : "", n.fragment) {
                                    if ("body" === n.fragment) c = s;
                                    else {
                                        const e = cs(s, n.fragment, Element);
                                        c = e.length > 0 ? [e[0]] : []
                                    }
                                    if (c.length && ("body" === n.fragment ? o.contents = c : o.contents = c.reduce((e, t) => e.concat(Array.from(t.childNodes)), []), !o.title)) {
                                        const e = c[0];
                                        e instanceof Element && (o.title = e.getAttribute("title") || e.getAttribute("data-title") || "")
                                    }
                                } else r || (o.contents = s);
                                if (o.contents) {
                                    o.contents = o.contents.filter(function(e) {
                                        return !(e instanceof Element && e.matches("title"))
                                    });
                                    for (const t of o.contents)
                                        if (t instanceof Element)
                                            for (const e of t.querySelectorAll("title")) e.remove();
                                    const e = cs(o.contents, "script[src]", HTMLScriptElement);
                                    for (const t of e) t.remove();
                                    o.scripts = e, x(o.contents, "null.js:707"), o.contents = o.contents.filter(t => -1 === e.indexOf(t))
                                }
                                return o.title && (o.title = o.title.trim()), o
                            }(await e.text(), e, t),
                            l = c.contents,
                            d = is(c.url);
                        if (o && (d.hash = o, c.url = d.href), s && a && s !== a) return void Zi(c.url);
                        if (!l) return void Zi(c.url);
                        Yi = {
                            id: null != t.id ? t.id : os(),
                            url: c.url,
                            title: c.title,
                            container: i,
                            fragment: t.fragment,
                            timeout: t.timeout
                        }, !0 !== t.push && !0 !== t.replace || at(Yi, c.title, c.url);
                        const f = document.activeElement,
                            m = null != t.container && t.container.contains(f);
                        if (f && m) try {
                            f.blur()
                        } catch (v) {}
                        c.title && (document.title = c.title), Ki(r, "pjax:beforeReplace", {
                            contents: l,
                            state: Yi,
                            previousState: n
                        }), ls(r, l);
                        const p = u(r, "input[autofocus], textarea[autofocus]").pop();
                        p && document.activeElement !== p && p.focus(),
                            function(e) {
                                if (!e) return;
                                const t = u(document, "script[src]", HTMLScriptElement);
                                for (const n of e) {
                                    const e = n.src;
                                    if (t.some(t => t.src === e)) return;
                                    const o = document.createElement("script"),
                                        r = n.getAttribute("type");
                                    r && (o.type = r), o.src = e, document.head && document.head.appendChild(o)
                                }
                            }(c.scripts);
                        let h = t.scrollTo;
                        if (o) {
                            const e = Ni(document, o);
                            e && (h = e.getBoundingClientRect().top + window.pageYOffset)
                        }
                        "number" == typeof h && window.scrollTo(window.pageXOffset, h), Ki(r, "pjax:success"), Ki(r, "pjax:complete"), Ki(r, "pjax:end")
                    },
                    function(e) {
                        let n = t.requestUrl;
                        x("string" == typeof n, "null.js:199"), e.response && (n = us(e.response, n));
                        const o = Ki(r, "pjax:error");
                        "GET" === t.type && o && Zi(n), Ki(r, "pjax:complete"), Ki(r, "pjax:end")
                    })
            }

            function Zi(e) {
                x(Yi, "null.js:409"), at(null, "", Yi.url), window.location.replace(e)
            }
            let es = !0;
            const ts = window.location.href,
                ns = window.history.state;

            function os() {
                return (new Date).getTime()
            }

            function rs(e) {
                const t = e.cloneNode(!0);
                return [as(e), Array.from(t.childNodes)]
            }

            function is(e) {
                const t = document.createElement("a");
                return t.href = e, t
            }

            function ss(e) {
                return e.href.replace(/#.*/, "")
            }

            function as(e) {
                if (e.id) return `#${e.id}`;
                throw new Error("pjax container has no id")
            }

            function cs(e, t, n) {
                let o = [];
                for (const r of e) r instanceof Element && (r instanceof n && r.matches(t) && o.push(r), o = o.concat(u(r, t, n)));
                return o
            }

            function ls(e, t) {
                e.innerHTML = "";
                for (const n of t) null != n && e.appendChild(n)
            }

            function us(e, t) {
                const n = e.headers.get("X-PJAX-URL");
                return n ? ((o = is(n)).search = o.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), o.href.replace(/\?($|#)/, "$1")) : t;
                var o
            }
            ns && ns.container && (Yi = ns), "state" in window.history && (es = !1);
            const ds = {},
                fs = [],
                ms = [];

            function ps(e, t) {
                for (; e.length > t;) delete ds[e.shift()]
            }

            function hs() {
                return Yi
            }
            window.addEventListener("popstate", function(e) {
                es || Gi.push(Promise.resolve(new Response));
                const t = Yi,
                    n = e.state;
                let o;
                if (n && n.container) {
                    if (es && ts === n.url) return;
                    if (t) {
                        if (t.id === n.id) return;
                        o = t.id < n.id ? "forward" : "back"
                    }
                    const e = ds[n.id] || [],
                        r = document.querySelector(e[0] || n.container),
                        i = e[1];
                    if (r) {
                        t && function(e, t, n) {
                            let o, r;
                            ds[t] = n, "forward" === e ? (o = ms, r = fs) : (o = fs, r = ms), o.push(t);
                            const i = r.pop();
                            i && delete ds[i], ps(o, zi)
                        }(o, t.id, rs(r)), Ki(r, "pjax:popstate", {
                            state: n,
                            direction: o
                        });
                        const e = {
                            id: n.id,
                            url: n.url,
                            container: r,
                            push: !1,
                            fragment: n.fragment || "",
                            timeout: n.timeout || 0,
                            scrollTo: !1
                        };
                        i ? (Ki(r, "pjax:start"), Yi = n, n.title && (document.title = n.title), Ki(r, "pjax:beforeReplace", {
                            contents: i,
                            state: n,
                            previousState: t
                        }), ls(r, i), Ki(r, "pjax:end")) : Qi(e), r.offsetHeight
                    } else Zi(location.href)
                }
                es = !1
            }), fe(".has-removed-contents", function() {
                let e;
                return {
                    add(t) {
                        e = Array.from(t.childNodes);
                        for (const o of e) t.removeChild(o);
                        const n = t.closest("form");
                        n && xe(n, "change")
                    },
                    remove(t) {
                        for (const o of e) t.appendChild(o);
                        const n = t.closest("form");
                        n && xe(n, "change")
                    }
                }
            });
            const gs = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                vs = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                bs = new WeakMap;
            const ws = new WeakMap,
                ys = new WeakMap;

            function Es(e, t, n) {
                const o = t.toLowerCase(),
                    r = n.text,
                    i = n.score;
                let s = e;
                if (o) {
                    s = [];
                    for (const t of e) {
                        null == ws.get(t) && ws.set(t, r(t));
                        const e = i ? i(ws.get(t) || "", o, t) : yi(ws.get(t) || "", o);
                        ys.set(t, e), e > 0 && s.push(t)
                    }
                    s.sort(Ts)
                }
                return null != n.limit ? s.slice(0, n.limit) : s
            }

            function Ts(e, t) {
                const n = parseFloat(ys.get(e)),
                    o = parseFloat(ys.get(t)),
                    r = ws.get(e) || "",
                    i = ws.get(t) || "";
                return n > o ? -1 : n < o ? 1 : r < i ? -1 : r > i ? 1 : 0
            }
            let Ls = 0;
            const js = /^\(\d+\)\s+/;

            function ks() {
                const e = Ls ? `(${Ls}) ` : "";
                document.title.match(js) ? document.title = document.title.replace(js, e) : document.title = `${e}${document.title}`
            }

            function xs(e) {
                return ! function(e) {
                    return e.offsetWidth <= 0 && e.offsetHeight <= 0
                }(e)
            }

            function As(e) {
                return e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                }))
            }

            function Ss(e, t, n) {
                let o = e.value.substring(0, e.selectionEnd),
                    r = e.value.substring(e.selectionEnd);
                o = o.replace(t, n), r = r.replace(t, n), e.value = o + r, e.selectionStart = o.length, e.selectionEnd = o.length, As(e)
            }

            function Ms(e, t) {
                const n = e.selectionEnd,
                    o = e.value.substring(0, n),
                    r = e.value.substring(n),
                    i = "" === e.value || o.match(/\n$/) ? "" : "\n";
                e.value = o + i + t + r, e.selectionStart = n + t.length, e.selectionEnd = n + t.length, As(e), e.focus()
            }
            fe(".js-unread-item", {
                add() {
                    Ls++, ks()
                },
                remove() {
                    Ls--, ks()
                }
            });
            const _s = [];
            let Cs = 0;

            function Is(e) {
                !async function() {
                    _s.push(e), await Me,
                        function() {
                            const e = Cs;
                            Cs = _s.length, Hs(_s.slice(e), null, window.location.href)
                        }()
                }()
            }

            function Hs(e, t, n) {
                const o = window.location.hash.slice(1),
                    r = {
                        oldURL: t,
                        newURL: n,
                        target: o && document.getElementById(o)
                    };
                for (const i of e) i.call(null, r)
            }
            Is.clear = (() => {
                _s.length = Cs = 0
            });
            let Ds = window.location.href;
            window.addEventListener("popstate", function() {
                Ds = window.location.href
            }), window.addEventListener("hashchange", function(e) {
                const t = window.location.href;
                try {
                    Hs(_s, e.oldURL || Ds, t)
                } finally {
                    Ds = t
                }
            });
            let qs = null;
            document.addEventListener("pjax:start", function() {
                qs = window.location.href
            }), document.addEventListener("pjax:end", function() {
                Hs(_s, qs, window.location.href)
            });
            let Os = !1;
            const Ps = [];

            function Rs() {
                Ps.length ? Os || (window.addEventListener("resize", Ns, {
                    passive: !0
                }), document.addEventListener("scroll", Ns, {
                    passive: !0
                }), Os = !0) : (window.removeEventListener("resize", Ns, {
                    passive: !0
                }), document.removeEventListener("scroll", Ns, {
                    passive: !0
                }), Os = !1)
            }

            function Ns() {
                for (const e of Ps)
                    if (e.element.offsetHeight > 0) {
                        const t = e.element,
                            n = e.placeholder,
                            o = e.top,
                            r = t.getBoundingClientRect();
                        if (n) {
                            const i = n.getBoundingClientRect();
                            t.classList.contains("is-stuck") ? i.top > parseInt(o) ? Fs(e) : Bs(e) : r.top <= parseInt(o) && $s(e)
                        } else r.top <= parseInt(o) ? $s(e) : Fs(e)
                    }
            }

            function $s(e) {
                let t = e.element,
                    n = e.placeholder,
                    o = e.top;
                if (n) {
                    const e = t.getBoundingClientRect();
                    t.style.top = o.toString(), t.style.left = `${e.left}px`, t.style.width = `${e.width}px`, t.style.marginTop = "0", t.style.position = "fixed", n.style.display = "block"
                }
                t.classList.add("is-stuck")
            }

            function Fs(e) {
                let t = e.element,
                    n = e.placeholder;
                n && (t.style.position = "static", t.style.marginTop = n.style.marginTop, n.style.display = "none"), t.classList.remove("is-stuck")
            }

            function Bs(e) {
                let t = e.element,
                    n = e.placeholder,
                    o = e.offsetParent,
                    r = e.top;
                if (n) {
                    const e = t.getBoundingClientRect(),
                        i = n.getBoundingClientRect();
                    if (t.style.left = `${i.left}px`, t.style.width = `${i.width}px`, o) {
                        const n = o.getBoundingClientRect();
                        n.bottom < e.height + parseInt(r) && (t.style.top = `${n.bottom-e.height}px`)
                    }
                }
            }

            function Us(e) {
                if (function(e) {
                        const t = window.getComputedStyle(e).position;
                        return /sticky/.test(t)
                    }(e)) return null;
                const t = e.previousElementSibling;
                if (t && t.classList.contains("is-placeholder")) return x(t instanceof HTMLElement, "previousElement must be an HTMLElement -- null.js:127"), t;
                const n = document.createElement("div");
                return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(e).height, n.className = e.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), x(e.parentNode, "Element must be inserted into the dom -- null.js:140"), e.parentNode.insertBefore(n, e)
            }

            function Ws(e, t) {
                return u(document, ".js-details-container.open.Details--on").filter(n => n.getAttribute(e) === t)
            }
            fe(".js-sticky", {
                constructor: HTMLElement,
                add(e) {
                    ! function(e) {
                        const t = Us(e),
                            n = window.getComputedStyle(e).position;
                        e.style.position = "static";
                        const o = e.offsetParent;
                        e.style.position = "fixed";
                        const r = window.getComputedStyle(e).top,
                            i = {
                                element: e,
                                placeholder: t,
                                offsetParent: o,
                                top: "auto" === r ? 0 : r
                            };
                        e.style.position = n, Ps.push(i)
                    }(e), Ns(), Rs()
                },
                remove(e) {
                    ! function(e) {
                        const t = Ps.map(e => e.element).indexOf(e);
                        Ps.splice(t, 1)
                    }(e), Rs()
                }
            });
            class Xs {
                constructor(e) {
                    this.files = Array.from(e), this.percentages = this.files.map(() => 0), this.size = this.files.length, this.total = this.files.reduce((e, t) => e + t.size, 0), this.uploaded = 0
                }
                percent() {
                    const e = this.files.map((e, t) => e.size * this.percentages[t] / 100).reduce((e, t) => e + t);
                    return Math.round(e / this.total * 100)
                }
                progress(e, t) {
                    const n = this.files.indexOf(e);
                    this.percentages[n] = t
                }
                completed() {
                    this.uploaded += 1
                }
                isFinished() {
                    return this.uploaded === this.files.length
                }
            }
            const Vs = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

            function zs(e, t) {
                e.classList.remove(...Vs), e.classList.add(t)
            }
            const Ys = new class {
                constructor() {
                    this.uploads = [], this.busy = !1
                }
                upload(e) {
                    this.uploads.push(e), this.process()
                }
                process() {
                    if (this.busy || 0 === this.uploads.length) return;
                    const e = this.uploads.shift();
                    this.busy = !0;
                    const t = new XMLHttpRequest;
                    t.open("POST", e.to, !0);
                    for (const o in e.header) t.setRequestHeader(o, e.header[o]);
                    t.onloadstart = function() {
                        e.start()
                    }, t.onload = (() => {
                        204 === t.status ? e.complete({}) : 201 === t.status ? e.complete(JSON.parse(t.responseText)) : e.error({
                            status: t.status,
                            body: t.responseText
                        }), this.busy = !1, this.process()
                    }), t.onerror = (() => {
                        e.error({
                            status: 0,
                            body: ""
                        }), this.busy = !1, this.uploads = []
                    }), t.upload.onprogress = function(t) {
                        if (t.lengthComputable) {
                            const n = Math.round(t.loaded / t.total * 100);
                            e.progress(n)
                        }
                    };
                    const n = new FormData;
                    e.sameOrigin && n.append("authenticity_token", e.csrf);
                    for (const o in e.form) n.append(o, e.form[o]);
                    n.append("file", e.file), t.send(n)
                }
            };
            async function Gs(e, t) {
                for (const o of e.files) {
                    const r = Ks(o, t),
                        i = [];
                    if (!xe(t, "upload:setup", {
                            batch: e,
                            file: o,
                            policyRequest: r.options,
                            preprocess: i
                        })) return;
                    try {
                        await Promise.all(i);
                        const s = await Ut(r.url, r.options);
                        Ys.upload(Js(e, o, s, t))
                    } catch (n) {
                        if (xe(t, "upload:invalid", {
                                batch: e,
                                file: o,
                                error: n
                            }), n.response) {
                            const e = await n.response.text();
                            zs(t, Zs({
                                status: n.response.status,
                                body: e
                            }, o))
                        } else {
                            zs(t, Zs({
                                status: 0,
                                body: ""
                            }))
                        }
                    }
                }
            }

            function Ks(e, t) {
                const n = f(t, "data-upload-policy-url"),
                    o = t.getAttribute("data-upload-repository-id");
                let r = t.getAttribute("data-upload-policy-authenticity-token");
                null == r && (r = Qs(t));
                const i = new FormData;
                return i.append("name", e.name), i.append("size", String(e.size)), i.append("content_type", e.type), i.append("authenticity_token", r), o && i.append("repository_id", o), e._path && i.append("directory", String(e._path)), {
                    url: n,
                    options: {
                        method: "post",
                        body: i,
                        headers: {}
                    }
                }
            }

            function Js(e, t, n, o) {
                let r = n.upload_authenticity_token;
                null == r && (r = Qs(o));
                let i = n.asset_upload_authenticity_token;
                return null == i && (i = Qs(o)), {
                    file: t,
                    to: n.upload_url,
                    form: n.form,
                    header: n.header,
                    sameOrigin: n.same_origin,
                    csrf: r,
                    start() {
                        zs(o, "is-uploading"), xe(o, "upload:start", {
                            batch: e,
                            file: t,
                            policy: n
                        })
                    },
                    progress(n) {
                        e.progress(t, n), xe(o, "upload:progress", {
                            batch: e,
                            file: t,
                            percent: n
                        })
                    },
                    complete(r) {
                        if (e.completed(), r && r.href && (n.asset || (n.asset = {}), n.asset.href = r.href), n.asset_upload_url && n.asset_upload_url.length > 0) {
                            const e = new FormData;
                            e.append("authenticity_token", i), Ut(n.asset_upload_url, {
                                method: "put",
                                body: e
                            })
                        }
                        xe(o, "upload:complete", {
                            batch: e,
                            file: t,
                            policy: n,
                            result: r
                        }), zs(o, "is-default")
                    },
                    error(r) {
                        xe(o, "upload:error", {
                            batch: e,
                            file: t,
                            policy: n
                        });
                        const i = Zs(r);
                        zs(o, i)
                    }
                }
            }

            function Qs(e) {
                return d(c(e, "form", HTMLFormElement), "authenticity_token").value
            }

            function Zs(e, t) {
                if (400 === e.status) return "is-bad-file";
                if (422 !== e.status) return "is-failed";
                const n = JSON.parse(e.body);
                if (!n || !n.errors) return "is-failed";
                for (const o of n.errors) switch (o.field) {
                    case "size":
                        {
                            const e = t ? t.size : null;
                            return null != e && 0 === parseInt(e) ? "is-empty" : "is-too-big"
                        }
                    case "file_count":
                        return "is-too-many";
                    case "width":
                    case "height":
                        return "is-bad-dimensions";
                    case "name":
                        return "already_exists" === o.code ? "is-duplicate-filename" : "is-bad-file";
                    case "content_type":
                        return "is-bad-file";
                    case "uploader_id":
                        return "is-bad-permissions";
                    case "repository_id":
                        return "is-repository-required";
                    case "format":
                        return "is-bad-format"
                }
                return "is-failed"
            }

            function ea(e, t) {
                return t && e.getFilesAndDirectories ? async function(e) {
                    return ta(await async function e(t, n) {
                        if (n.getFilesAndDirectories) {
                            const t = await n.getFilesAndDirectories(),
                                o = na(t).map(t => e(n.path, t));
                            return Promise.all(o)
                        }
                        return n._path = t, Promise.resolve(n)
                    }("", e))
                }(e): t && function(e) {
                    return e.items && Array.from(e.items).some(e => {
                        const t = e.webkitGetAsEntry && e.webkitGetAsEntry();
                        return t && t.isDirectory
                    })
                }(e) ? async function(e) {
                    const t = na(Array.from(e.items).map(e => e.webkitGetAsEntry())).map(e => (async function e(t, n) {
                        if (n.isDirectory) {
                            const t = await (o = n, new Promise(function(e, t) {
                                    o.createReader().readEntries(e, t)
                                })),
                                r = na(t).map(t => e(n.fullPath, t));
                            return Promise.all(r)
                        } {
                            const e = await
                            function(e) {
                                return new Promise(function(t, n) {
                                    e.file(t, n)
                                })
                            }(n);
                            return e._path = t, e
                        }
                        var o
                    })("", e));
                    return ta(await Promise.all(t))
                }(e): Promise.resolve(na(Array.from(e.files)))
            }

            function ta(e) {
                return e.reduce((e, t) => e.concat(Array.isArray(t) ? ta(t) : t), [])
            }

            function na(e) {
                return Array.from(e).filter(e => ! function(e) {
                    return e.name.startsWith(".")
                }(e))
            }
            class FileAttachmentElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("dragenter", aa), this.addEventListener("dragover", aa), this.addEventListener("dragleave", ca), this.addEventListener("drop", la), this.addEventListener("paste", ua)
                }
                connectedCallback() {}
                get directory() {
                    return this.hasAttribute("directory")
                }
                set directory(e) {
                    e ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }
                upload(e) {
                    oa(e, this)
                }
            }

            function oa(e, t) {
                Gs(new Xs(e), t)
            }

            function ra(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function ia(e) {
                switch (e) {
                    case "image/gif":
                        return "image.gif";
                    case "image/png":
                        return "image.png";
                    case "image/jpeg":
                        return "image.jpg"
                }
            }
            window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define("file-attachment", FileAttachmentElement));
            let sa = null;

            function aa(e) {
                const t = e.currentTarget;
                x(t instanceof Element, "null.js:77"), sa && clearTimeout(sa), sa = setTimeout(() => t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                n && ra(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function ca(e) {
                e.dataTransfer && (e.dataTransfer.dropEffect = "none"), x(e.currentTarget instanceof Element, "null.js:100"), e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
            }

            function la(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                t.classList.remove("dragover");
                const n = e.dataTransfer;
                n && ra(n) && (!async function(e, t) {
                    const n = await ea(t, e.hasAttribute("directory"));
                    n.length ? !xe(e, "upload:drop:setup", {
                        upload: oa.bind(null, n),
                        files: n
                    }) || oa(n, e) : zs(e, "is-hidden-file")
                }(t, n), e.stopPropagation(), e.preventDefault())
            }

            function ua(e) {
                if (!e.clipboardData) return;
                if (!e.clipboardData.items) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = Array.from(e.clipboardData.items).map(e => [e, ia(e.type)]).filter(e => e[1]).shift();
                if (!n) return;
                const o = dt(n, 1)[0].getAsFile();
                o && (oa([o], t), e.preventDefault())
            }

            function da(e) {
                if (!window._octo) return;
                const t = Math.floor((new Date).getTime() / 1e3);
                e.timestamp = t;
                if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
                    De(l(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content, JSON.stringify(e), "text/plain")
                }
            }

            function fa(e) {
                let t = e;
                const n = t.ownerDocument;
                if (!n) return;
                if (!t.offsetParent) return;
                const o = n.defaultView.HTMLElement;
                if (t !== n.body) {
                    for (; t !== n.body;) {
                        if (!(t.parentElement instanceof o)) return;
                        t = t.parentElement;
                        const e = getComputedStyle(t),
                            n = e.position,
                            r = e.overflowY,
                            i = e.overflowX;
                        if ("fixed" === n || "auto" === r || "auto" === i || "scroll" === r || "scroll" === i) break
                    }
                    return t instanceof Document ? null : t
                }
            }

            function ma(e, t) {
                let n = t;
                const o = e.ownerDocument;
                if (!o) return;
                if (!o.body) return;
                const r = o.documentElement;
                if (!r) return;
                if (e === r) return;
                const i = pa(e, n);
                if (!i) return;
                const s = (n = i._container) === o.documentElement ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    a = i.top - s.top,
                    c = i.left - s.left,
                    l = n.clientHeight,
                    u = n.clientWidth;
                return {
                    top: a,
                    left: c,
                    bottom: l - (a + e.offsetHeight),
                    right: u - (c + e.offsetWidth),
                    height: l,
                    width: u
                }
            }

            function pa(e, t) {
                let n = e;
                const o = n.ownerDocument;
                if (!o) return;
                const r = o.documentElement;
                if (!r) return;
                const i = o.body;
                if (!i) return;
                const s = o.defaultView.HTMLElement;
                let a = 0,
                    c = 0;
                const l = n.offsetHeight,
                    u = n.offsetWidth;
                for (; n !== o.body && n !== t;) {
                    if (a += n.offsetTop || 0, c += n.offsetLeft || 0, !(n.offsetParent instanceof s)) return;
                    n = n.offsetParent
                }
                let d, f, m;
                if (t && t !== o && t !== o.defaultView && t !== o.documentElement && t !== o.body) {
                    if (!(t instanceof s)) return;
                    m = t, d = t.scrollHeight, f = t.scrollWidth
                } else m = r, d = function(e, t) {
                    return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, t.clientHeight)
                }(i, r), f = function(e, t) {
                    return Math.max(e.scrollWidth, t.scrollWidth, e.offsetWidth, t.offsetWidth, t.clientWidth)
                }(i, r);
                return {
                    top: a,
                    left: c,
                    bottom: d - (a + l),
                    right: f - (c + u),
                    _container: m
                }
            }

            function ha(e, t) {
                let n = e;
                const o = t || {},
                    r = e.ownerDocument;
                n !== r && n !== r.defaultView && n !== r.documentElement && n !== r.body || (n = r);
                const i = r.defaultView.Document,
                    s = r.defaultView.HTMLElement;
                if (null == o.top && null == o.left)
                    if (o.target) {
                        const e = pa(o.target, n);
                        null != e && (o.top = e.top, o.left = e.left)
                    } else if (n instanceof s) {
                    const e = pa(n, n.offsetParent);
                    n = n.offsetParent, null != e && (o.top = e.top, o.left = e.left)
                }
                if (n instanceof i || n === r.body) {
                    const e = null != o.top ? o.top : r.defaultView.pageYOffset,
                        t = null != o.left ? o.left : r.defaultView.pageXOffset;
                    r.defaultView.scrollTo(t, e)
                } else x(n instanceof s, "container is not HTMLElement -- null.js:56"), null != o.top && (n.scrollTop = o.top), null != o.left && (n.scrollLeft = o.left)
            }! function() {
                var e = function(e) {
                    this.w = e || []
                };
                e.prototype.set = function(e) {
                    this.w[e] = !0
                }, e.prototype.encode = function() {
                    for (var e = [], t = 0; t < this.w.length; t++) this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
                    for (t = 0; t < e.length; t++) e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
                    return e.join("") + "~"
                };
                var t = new e;

                function n(e) {
                    t.set(e)
                }
                var o = function(t, n) {
                        var o = new e(i(t));
                        o.set(n), t.set(st, o.w)
                    },
                    r = function(n) {
                        n = i(n), n = new e(n);
                        for (var o = t.w.slice(), r = 0; r < n.w.length; r++) o[r] = o[r] || n.w[r];
                        return new e(o).encode()
                    },
                    i = function(e) {
                        return e = e.get(st), a(e) || (e = []), e
                    },
                    s = function(e) {
                        return "function" == typeof e
                    },
                    a = function(e) {
                        return "[object Array]" == Object.prototype.toString.call(Object(e))
                    },
                    c = function(e) {
                        return null != e && -1 < (e.constructor + "").indexOf("String")
                    },
                    l = function(e, t) {
                        return 0 == e.indexOf(t)
                    },
                    u = function(e) {
                        return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
                    },
                    d = function(e) {
                        var t = L.createElement("img");
                        return t.width = 1, t.height = 1, t.src = e, t
                    },
                    f = function() {},
                    m = function(e) {
                        return encodeURIComponent instanceof Function ? encodeURIComponent(e) : (n(28), e)
                    },
                    p = function(e, t, o, r) {
                        try {
                            e.addEventListener ? e.addEventListener(t, o, !!r) : e.attachEvent && e.attachEvent("on" + t, o)
                        } catch (i) {
                            n(27)
                        }
                    },
                    h = /^[\w\-:\/.?=&%!]+$/,
                    g = function(e, t, n, o) {
                        e && (n ? (o = "", t && h.test(t) && (o = ' id="' + t + '"'), h.test(e) && L.write("<script" + o + ' src="' + e + '"><\/script>')) : ((n = L.createElement("script")).type = "text/javascript", n.async = !0, n.src = e, o && (n.onload = o), t && (n.id = t), (e = L.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e)))
                    },
                    v = function() {
                        return "https:" == L.location.protocol
                    },
                    b = function(e, t) {
                        return (e = e.match("(?:&|#|\\?)" + m(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == e.length ? e[1] : ""
                    },
                    w = function() {
                        var e = "" + L.location.hostname;
                        return 0 == e.indexOf("www.") ? e.substring(4) : e
                    },
                    y = function(e, t) {
                        if (1 == t.length && null != t[0] && "object" == typeof t[0]) return t[0];
                        for (var n = {}, o = Math.min(e.length + 1, t.length), r = 0; r < o; r++) {
                            if ("object" == typeof t[r]) {
                                for (var i in t[r]) t[r].hasOwnProperty(i) && (n[i] = t[r][i]);
                                break
                            }
                            r < e.length && (n[e[r]] = t[r])
                        }
                        return n
                    },
                    E = function() {
                        this.keys = [], this.values = {}, this.m = {}
                    };
                E.prototype.set = function(e, t, n) {
                    this.keys.push(e), n ? this.m[":" + e] = t : this.values[":" + e] = t
                }, E.prototype.get = function(e) {
                    return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e]
                }, E.prototype.map = function(e) {
                    for (var t = 0; t < this.keys.length; t++) {
                        var n = this.keys[t],
                            o = this.get(n);
                        o && e(n, o)
                    }
                };
                var T = window,
                    L = document,
                    j = window,
                    k = function(e) {
                        var t = j._gaUserPrefs;
                        if (t && t.ioo && t.ioo() || e && !0 === j["ga-disable-" + e]) return !0;
                        try {
                            var n = j.external;
                            if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return !0
                        } catch (o) {}
                        return !1
                    },
                    x = function(e) {
                        var t = [],
                            n = L.cookie.split(";");
                        e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
                        for (var o = 0; o < n.length; o++) {
                            var r = n[o].match(e);
                            r && t.push(r[1])
                        }
                        return t
                    },
                    A = function(e, t, o, r, i, s) {
                        if (!(i = !k(i) && !(_.test(L.location.hostname) || "/" == o && M.test(r)))) return !1;
                        if (t && 1200 < t.length && (t = t.substring(0, 1200), n(24)), o = e + "=" + t + "; path=" + o + "; ", s && (o += "expires=" + new Date((new Date).getTime() + s).toGMTString() + "; "), r && "none" != r && (o += "domain=" + r + ";"), r = L.cookie, L.cookie = o, !(r = r != L.cookie)) e: {
                            for (e = x(e), r = 0; r < e.length; r++)
                                if (t == e[r]) {
                                    r = !0;
                                    break e
                                } r = !1
                        }
                        return r
                    },
                    S = function(e) {
                        return m(e).replace(/\(/g, "%28").replace(/\)/g, "%29")
                    },
                    M = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
                    _ = /(^|\.)doubleclick\.net$/i,
                    C = function() {
                        return (de || v() ? "https:" : "http:") + "//www.google-analytics.com"
                    },
                    I = function(e) {
                        this.name = "len", this.message = e + "-8192"
                    },
                    H = function(e, t, n) {
                        if (n = n || f, 2036 >= t.length) D(e, t, n);
                        else {
                            if (!(8192 >= t.length)) throw P("len", t.length), new I(t.length);
                            O(e, t, n) || q(e, t, n) || D(e, t, n)
                        }
                    },
                    D = function(e, t, n) {
                        var o = d(e + "?" + t);
                        o.onload = o.onerror = function() {
                            o.onload = null, o.onerror = null, n()
                        }
                    },
                    q = function(e, t, n) {
                        var o = T.XMLHttpRequest;
                        if (!o) return !1;
                        var r = new o;
                        return "withCredentials" in r && (r.open("POST", e, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                            4 == r.readyState && (n(), r = null)
                        }, r.send(t), !0)
                    },
                    O = function(e, t, n) {
                        return !!T.navigator.sendBeacon && (!!T.navigator.sendBeacon(e, t) && (n(), !0))
                    },
                    P = function(e, t, n) {
                        1 <= 100 * Math.random() || k("?") || (e = ["t=error", "_e=" + e, "_v=j48", "sr=1"], t && e.push("_f=" + t), n && e.push("_m=" + m(n.substring(0, 100))), e.push("aip=1"), e.push("z=" + G()), D(C() + "/collect", e.join("&"), f))
                    },
                    R = function(e) {
                        var t = T.gaData = T.gaData || {};
                        return t[e] = t[e] || {}
                    },
                    N = function() {
                        this.M = []
                    };

                function $(e) {
                    if (100 != e.get(Ot) && Jn(te(e, Lt)) % 1e4 >= 100 * ne(e, Ot)) throw "abort"
                }

                function F(e) {
                    if (k(te(e, xt))) throw "abort"
                }

                function B() {
                    var e = L.location.protocol;
                    if ("http:" != e && "https:" != e) throw "abort"
                }

                function U(e) {
                    try {
                        T.navigator.sendBeacon ? n(42) : T.XMLHttpRequest && "withCredentials" in new T.XMLHttpRequest && n(40)
                    } catch (o) {}
                    e.set(it, r(e), !0), e.set(ye, ne(e, ye) + 1);
                    var t = [];
                    Z.map(function(n, o) {
                        o.F && (null != (n = e.get(n)) && n != o.defaultValue && ("boolean" == typeof n && (n *= 1), t.push(o.F + "=" + m("" + n))))
                    }), t.push("z=" + K()), e.set(ve, t.join("&"), !0)
                }

                function W(e) {
                    var t = te(e, Nt) || C() + "/collect",
                        n = te(e, we);
                    if (!n && e.get(be) && (n = "beacon"), n) {
                        var o = te(e, ve),
                            r = (r = e.get(ge)) || f;
                        "image" == n ? D(t, o, r) : "xhr" == n && q(t, o, r) || "beacon" == n && O(t, o, r) || H(t, o, r)
                    } else H(t, te(e, ve), e.get(ge));
                    t = e.get(xt), n = (t = R(t)).hitcount, t.hitcount = n ? n + 1 : 1, t = e.get(xt), delete R(t).pending_experiments, e.set(ge, f, !0)
                }

                function X(e) {
                    var t;
                    (T.gaData = T.gaData || {}).expId && e.set(Ke, (T.gaData = T.gaData || {}).expId), (T.gaData = T.gaData || {}).expVar && e.set(Je, (T.gaData = T.gaData || {}).expVar);
                    var n = e.get(xt);
                    if (n = R(n).pending_experiments) {
                        var o = [];
                        for (t in n) n.hasOwnProperty(t) && n[t] && o.push(encodeURIComponent(t) + "." + encodeURIComponent(n[t]));
                        t = o.join("!")
                    } else t = void 0;
                    t && e.set(Qe, t, !0)
                }

                function V() {
                    if (T.navigator && "preview" == T.navigator.loadPurpose) throw "abort"
                }

                function z(e) {
                    var t = T.gaDevIds;
                    a(t) && 0 != t.length && e.set("&did", t.join(","), !0)
                }

                function Y(e) {
                    if (!e.get(xt)) throw "abort"
                }
                N.prototype.add = function(e) {
                    this.M.push(e)
                }, N.prototype.D = function(e) {
                    try {
                        for (var t = 0; t < this.M.length; t++) {
                            var n = e.get(this.M[t]);
                            n && s(n) && n.call(T, e)
                        }
                    } catch (o) {}(t = e.get(ge)) != f && s(t) && (e.set(ge, f, !0), setTimeout(t, 10))
                };
                var G = function() {
                        return Math.round(2147483647 * Math.random())
                    },
                    K = function() {
                        try {
                            var e = new Uint32Array(1);
                            return T.crypto.getRandomValues(e), 2147483647 & e[0]
                        } catch (t) {
                            return G()
                        }
                    };

                function J(e) {
                    var t = ne(e, nt);
                    if (500 <= t && n(15), "transaction" != (o = te(e, he)) && "item" != o) {
                        var o = ne(e, rt),
                            r = (new Date).getTime(),
                            i = ne(e, ot);
                        if (0 == i && e.set(ot, r), 0 < (i = Math.round(2 * (r - i) / 1e3)) && (o = Math.min(o + i, 20), e.set(ot, r)), 0 >= o) throw "abort";
                        e.set(rt, --o)
                    }
                    e.set(nt, ++t)
                }
                var Q = function() {
                        this.data = new E
                    },
                    Z = new E,
                    ee = [];
                Q.prototype.get = function(e) {
                    var t = ie(e),
                        n = this.data.get(e);
                    return t && null == n && (n = s(t.defaultValue) ? t.defaultValue() : t.defaultValue), t && t.Z ? t.Z(this, e, n) : n
                };
                var te = function(e, t) {
                        return null == (e = e.get(t)) ? "" : "" + e
                    },
                    ne = function(e, t) {
                        return null == (e = e.get(t)) || "" === e ? 0 : 1 * e
                    };
                Q.prototype.set = function(e, t, n) {
                    if (e)
                        if ("object" == typeof e)
                            for (var o in e) e.hasOwnProperty(o) && oe(this, o, e[o], n);
                        else oe(this, e, t, n)
                };
                var oe = function(e, t, n, o) {
                        if (null != n) switch (t) {
                            case xt:
                                xn.test(n)
                        }
                        var r = ie(t);
                        r && r.o ? r.o(e, t, n, o) : e.data.set(t, n, o)
                    },
                    re = function(e, t, n, o, r) {
                        this.name = e, this.F = t, this.Z = o, this.o = r, this.defaultValue = n
                    },
                    ie = function(e) {
                        var t = Z.get(e);
                        if (!t)
                            for (var n = 0; n < ee.length; n++) {
                                var o = ee[n],
                                    r = o[0].exec(e);
                                if (r) {
                                    t = o[1](r), Z.set(t.name, t);
                                    break
                                }
                            }
                        return t
                    },
                    se = function(e, t, n, o, r) {
                        return e = new re(e, t, n, o, r), Z.set(e.name, e), e.name
                    },
                    ae = function(e, t) {
                        ee.push([new RegExp("^" + e + "$"), t])
                    },
                    ce = function(e, t, n) {
                        return se(e, t, n, void 0, le)
                    },
                    le = function() {},
                    ue = c(window.GoogleAnalyticsObject) && u(window.GoogleAnalyticsObject) || "ga",
                    de = !1,
                    fe = ce("apiVersion", "v"),
                    me = ce("clientVersion", "_v");
                se("anonymizeIp", "aip");
                var pe = se("adSenseId", "a"),
                    he = se("hitType", "t"),
                    ge = se("hitCallback"),
                    ve = se("hitPayload");
                se("nonInteraction", "ni"), se("currencyCode", "cu"), se("dataSource", "ds");
                var be = se("useBeacon", void 0, !1),
                    we = se("transport");
                se("sessionControl", "sc", ""), se("sessionGroup", "sg"), se("queueTime", "qt");
                var ye = se("_s", "_s");
                se("screenName", "cd");
                var Ee = se("location", "dl", ""),
                    Te = se("referrer", "dr"),
                    Le = se("page", "dp", "");
                se("hostname", "dh");
                var je = se("language", "ul"),
                    ke = se("encoding", "de");
                se("title", "dt", function() {
                    return L.title || void 0
                }), ae("contentGroup([0-9]+)", function(e) {
                    return new re(e[0], "cg" + e[1])
                });
                var xe = se("screenColors", "sd"),
                    Ae = se("screenResolution", "sr"),
                    Se = se("viewportSize", "vp"),
                    Me = se("javaEnabled", "je"),
                    _e = se("flashVersion", "fl");
                se("campaignId", "ci"), se("campaignName", "cn"), se("campaignSource", "cs"), se("campaignMedium", "cm"), se("campaignKeyword", "ck"), se("campaignContent", "cc");
                var Ce = se("eventCategory", "ec"),
                    Ie = se("eventAction", "ea"),
                    He = se("eventLabel", "el"),
                    De = se("eventValue", "ev"),
                    qe = se("socialNetwork", "sn"),
                    Oe = se("socialAction", "sa"),
                    Pe = se("socialTarget", "st"),
                    Re = se("l1", "plt"),
                    Ne = se("l2", "pdt"),
                    $e = se("l3", "dns"),
                    Fe = se("l4", "rrt"),
                    Be = se("l5", "srt"),
                    Ue = se("l6", "tcp"),
                    We = se("l7", "dit"),
                    Xe = se("l8", "clt"),
                    Ve = se("timingCategory", "utc"),
                    ze = se("timingVar", "utv"),
                    Ye = se("timingLabel", "utl"),
                    Ge = se("timingValue", "utt");
                se("appName", "an"), se("appVersion", "av", ""), se("appId", "aid", ""), se("appInstallerId", "aiid", ""), se("exDescription", "exd"), se("exFatal", "exf");
                var Ke = se("expId", "xid"),
                    Je = se("expVar", "xvar"),
                    Qe = se("exp", "exp"),
                    Ze = se("_utma", "_utma"),
                    et = se("_utmz", "_utmz"),
                    tt = se("_utmht", "_utmht"),
                    nt = se("_hc", void 0, 0),
                    ot = se("_ti", void 0, 0),
                    rt = se("_to", void 0, 20);
                ae("dimension([0-9]+)", function(e) {
                    return new re(e[0], "cd" + e[1])
                }), ae("metric([0-9]+)", function(e) {
                    return new re(e[0], "cm" + e[1])
                }), se("linkerParam", void 0, void 0, function(e) {
                    var t = ln(e = e.get(Lt), 0);
                    return "_ga=1." + m(t + "." + e)
                }, le);
                var it = se("usage", "_u"),
                    st = se("_um");
                se("forceSSL", void 0, void 0, function() {
                    return de
                }, function(e, t, o) {
                    n(34), de = !!o
                });
                var at = se("_j1", "jid");
                ae("\\&(.*)", function(e) {
                    var t = new re(e[0], e[1]),
                        n = function(e) {
                            var t;
                            return Z.map(function(n, o) {
                                o.F == e && (t = o)
                            }), t && t.name
                        }(e[0].substring(1));
                    return n && (t.Z = function(e) {
                        return e.get(n)
                    }, t.o = function(e, t, o, r) {
                        e.set(n, o, r)
                    }, t.F = void 0), t
                });
                var ct = ce("_oot"),
                    lt = se("previewTask"),
                    ut = se("checkProtocolTask"),
                    dt = se("validationTask"),
                    ft = se("checkStorageTask"),
                    mt = se("historyImportTask"),
                    pt = se("samplerTask"),
                    ht = se("_rlt"),
                    gt = se("buildHitTask"),
                    vt = se("sendHitTask"),
                    bt = se("ceTask"),
                    wt = se("devIdTask"),
                    yt = se("timingTask"),
                    Et = se("displayFeaturesTask"),
                    Tt = ce("name"),
                    Lt = ce("clientId", "cid"),
                    jt = ce("clientIdTime"),
                    kt = se("userId", "uid"),
                    xt = ce("trackingId", "tid"),
                    At = ce("cookieName", void 0, "_ga"),
                    St = ce("cookieDomain"),
                    Mt = ce("cookiePath", void 0, "/"),
                    _t = ce("cookieExpires", void 0, 63072e3),
                    Ct = ce("legacyCookieDomain"),
                    It = ce("legacyHistoryImport", void 0, !0),
                    Ht = ce("storage", void 0, "cookie"),
                    Dt = ce("allowLinker", void 0, !1),
                    qt = ce("allowAnchor", void 0, !0),
                    Ot = ce("sampleRate", "sf", 100),
                    Pt = ce("siteSpeedSampleRate", void 0, 1),
                    Rt = ce("alwaysSendReferrer", void 0, !1),
                    Nt = se("transportUrl"),
                    $t = se("_r", "_r");

                function Ft(e, t, o, r) {
                    t[e] = function() {
                        try {
                            return r && n(r), o.apply(this, arguments)
                        } catch (t) {
                            throw P("exc", e, t && t.name), t
                        }
                    }
                }
                var Bt = function(e, t, n) {
                        this.V = e, this.fa = t, this.$ = !1, this.oa = n, this.ea = 1
                    },
                    Ut = function(e, t) {
                        var n;
                        if (e.fa && e.$) return 0;
                        if (e.$ = !0, t) {
                            if (e.oa && ne(t, e.oa)) return ne(t, e.oa);
                            if (0 == t.get(Pt)) return 0
                        }
                        return 0 == e.V ? 0 : (void 0 === n && (n = K()), 0 == n % e.V ? Math.floor(n / e.V) % e.ea + 1 : 0)
                    };
                var Wt = function(e) {
                        var t = {};
                        if (Xt(t) || Vt(t)) {
                            var n = t[Re];
                            null == n || 1 / 0 == n || isNaN(n) || (0 < n ? (zt(t, $e), zt(t, Ue), zt(t, Be), zt(t, Ne), zt(t, Fe), zt(t, We), zt(t, Xe), e(t)) : p(T, "load", function() {
                                Wt(e)
                            }, !1))
                        }
                    },
                    Xt = function(e) {
                        var t;
                        if (!(t = (t = T.performance || T.webkitPerformance) && t.timing)) return !1;
                        var n = t.navigationStart;
                        return 0 != n && (e[Re] = t.loadEventStart - n, e[$e] = t.domainLookupEnd - t.domainLookupStart, e[Ue] = t.connectEnd - t.connectStart, e[Be] = t.responseStart - t.requestStart, e[Ne] = t.responseEnd - t.responseStart, e[Fe] = t.fetchStart - n, e[We] = t.domInteractive - n, e[Xe] = t.domContentLoadedEventStart - n, !0)
                    },
                    Vt = function(e) {
                        if (T.top != T) return !1;
                        var t = T.external,
                            n = t && t.onloadT;
                        return t && !t.isValidLoadTime && (n = void 0), 2147483648 < n && (n = void 0), 0 < n && t.setPageReadyTime(), null != n && (e[Re] = n, !0)
                    },
                    zt = function(e, t) {
                        var n = e[t];
                        (isNaN(n) || 1 / 0 == n || 0 > n) && (e[t] = void 0)
                    },
                    Yt = function(e) {
                        return function(t) {
                            if ("pageview" == t.get(he) && !e.I) {
                                e.I = !0;
                                var n = function(e) {
                                    var t = Math.min(ne(e, Pt), 100);
                                    return !(Jn(te(e, Lt)) % 100 >= t)
                                }(t);
                                t = 0 < b(t.get(Ee), "gclid").length, (n || t) && Wt(function(t) {
                                    e.send(n ? "timing" : "adtiming", t)
                                })
                            }
                        }
                    },
                    Gt = !1,
                    Kt = function(e) {
                        if ("cookie" == te(e, Ht)) {
                            var t = te(e, At),
                                o = Zt(e),
                                r = nn(te(e, Mt)),
                                i = tn(te(e, St)),
                                s = 1e3 * ne(e, _t),
                                a = te(e, xt);
                            if ("auto" != i) A(t, o, r, i, a, s) && (Gt = !0);
                            else {
                                var c;
                                if (n(32), o = [], 4 != (i = w().split(".")).length || (c = i[i.length - 1], parseInt(c, 10) != c)) {
                                    for (c = i.length - 2; 0 <= c; c--) o.push(i.slice(c).join("."));
                                    o.push("none"), c = o
                                } else c = ["none"];
                                for (var l = 0; l < c.length; l++)
                                    if (i = c[l], e.data.set(St, i), o = Zt(e), A(t, o, r, i, a, s)) return void(Gt = !0);
                                e.data.set(St, "auto")
                            }
                        }
                    },
                    Jt = function(e) {
                        if ("cookie" == te(e, Ht) && !Gt && (Kt(e), !Gt)) throw "abort"
                    },
                    Qt = function(e) {
                        if (e.get(It)) {
                            var t = te(e, St),
                                o = te(e, Ct) || w(),
                                r = rn("__utma", o, t);
                            r && (n(19), e.set(tt, (new Date).getTime(), !0), e.set(Ze, r.R), (t = rn("__utmz", o, t)) && r.hash == t.hash && e.set(et, t.R))
                        }
                    },
                    Zt = function(e) {
                        var t = S(te(e, Lt)),
                            n = tn(te(e, St)).split(".").length;
                        return 1 < (e = on(te(e, Mt))) && (n += "-" + e), ["GA1", n, t].join(".")
                    },
                    en = function(e, t, n) {
                        for (var o, r = [], i = [], s = 0; s < e.length; s++) {
                            var a = e[s];
                            a.H[n] == t ? r.push(a) : null == o || a.H[n] < o ? (i = [a], o = a.H[n]) : a.H[n] == o && i.push(a)
                        }
                        return 0 < r.length ? r : i
                    },
                    tn = function(e) {
                        return 0 == e.indexOf(".") ? e.substr(1) : e
                    },
                    nn = function(e) {
                        return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)), 0 != e.indexOf("/") && (e = "/" + e), e) : "/"
                    },
                    on = function(e) {
                        return "/" == (e = nn(e)) ? 1 : e.split("/").length
                    };

                function rn(e, t, n) {
                    "none" == t && (t = "");
                    var o = [],
                        r = x(e);
                    e = "__utma" == e ? 6 : 2;
                    for (var i = 0; i < r.length; i++) {
                        var s = ("" + r[i]).split(".");
                        s.length >= e && o.push({
                            hash: s[0],
                            R: r[i],
                            O: s
                        })
                    }
                    if (0 != o.length) return 1 == o.length ? o[0] : sn(t, o) || sn(n, o) || sn(null, o) || o[0]
                }

                function sn(e, t) {
                    var n;
                    null == e ? n = e = 1 : (n = Jn(e), e = Jn(l(e, ".") ? e.substring(1) : "." + e));
                    for (var o = 0; o < t.length; o++)
                        if (t[o].hash == n || t[o].hash == e) return t[o]
                }
                var an = new RegExp(/^https?:\/\/([^\/:]+)/),
                    cn = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

                function ln(e, t) {
                    var n = new Date,
                        o = T.navigator,
                        r = o.plugins || [];
                    for (e = [e, o.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t], t = 0; t < r.length; ++t) e.push(r[t].description);
                    return Jn(e.join("."))
                }
                var un = function(e) {
                    n(48), this.target = e, this.T = !1
                };
                un.prototype.ca = function(e, t) {
                    if (e.tagName) {
                        if ("a" == e.tagName.toLowerCase()) return void(e.href && (e.href = dn(this, e.href, t)));
                        if ("form" == e.tagName.toLowerCase()) return fn(this, e)
                    }
                    if ("string" == typeof e) return dn(this, e, t)
                };
                var dn = function(e, t, n) {
                        (r = cn.exec(t)) && 3 <= r.length && (t = r[1] + (r[3] ? r[2] + r[3] : "")), e = e.target.get("linkerParam");
                        var o = t.indexOf("?"),
                            r = t.indexOf("#");
                        return n ? t += (-1 == r ? "#" : "&") + e : (n = -1 == o ? "?" : "&", t = -1 == r ? t + (n + e) : t.substring(0, r) + n + e + t.substring(r)), t.replace(/&+_ga=/, "&_ga=")
                    },
                    fn = function(e, t) {
                        if (t && t.action) {
                            var n = e.target.get("linkerParam").split("=")[1];
                            if ("get" == t.method.toLowerCase()) {
                                e = t.childNodes || [];
                                for (var o = 0; o < e.length; o++)
                                    if ("_ga" == e[o].name) return void e[o].setAttribute("value", n);
                                (e = L.createElement("input")).setAttribute("type", "hidden"), e.setAttribute("name", "_ga"), e.setAttribute("value", n), t.appendChild(e)
                            } else "post" == t.method.toLowerCase() && (t.action = dn(e, t.action))
                        }
                    };

                function mn(e, t) {
                    if (t == L.location.hostname) return !1;
                    for (var n = 0; n < e.length; n++)
                        if (e[n] instanceof RegExp) {
                            if (e[n].test(t)) return !0
                        } else if (0 <= t.indexOf(e[n])) return !0;
                    return !1
                }
                un.prototype.S = function(e, t, o) {
                    function r(o) {
                        try {
                            var r;
                            o = o || T.event;
                            e: {
                                var s = o.target || o.srcElement;
                                for (o = 100; s && 0 < o;) {
                                    if (s.href && s.nodeName.match(/^a(?:rea)?$/i)) {
                                        r = s;
                                        break e
                                    }
                                    s = s.parentNode, o--
                                }
                                r = {}
                            }("http:" == r.protocol || "https:" == r.protocol) && mn(e, r.hostname || "") && r.href && (r.href = dn(i, r.href, t))
                        } catch (a) {
                            n(26)
                        }
                    }
                    var i = this;
                    this.T || (this.T = !0, p(L, "mousedown", r, !1), p(L, "keyup", r, !1)), o && p(L, "submit", function(t) {
                        if ((t = (t = t || T.event).target || t.srcElement) && t.action) {
                            var n = t.action.match(an);
                            n && mn(e, n[1]) && fn(i, t)
                        }
                    })
                };
                var pn, hn = /^(GTM|OPT)-[A-Z0-9]+$/,
                    gn = /;_gaexp=[^;]*/g,
                    vn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
                    bn = function(e, t, o) {
                        this.U = at, this.aa = t, (t = o) || (t = (t = te(e, Tt)) && "t0" != t ? Tn.test(t) ? "_gat_" + S(te(e, xt)) : "_gat_" + S(t) : "_gat"), this.Y = t, Ut(new Bt(10), e) && (n(30), this.pa = !0)
                    },
                    wn = function(e, t) {
                        t.get(e.U) || ("1" == x(e.Y)[0] ? t.set(e.U, "", !0) : t.set(e.U, "" + G(), !0))
                    },
                    yn = function(e, t) {
                        if (t.get(e.U)) {
                            var n = 6e5;
                            e.pa && (n /= 10), A(e.Y, "1", t.get(Mt), t.get(St), t.get(xt), n)
                        }
                    },
                    En = function(e, t) {
                        if (t.get(e.U)) {
                            var n = new E,
                                o = function(e) {
                                    ie(e).F && n.set(ie(e).F, t.get(e))
                                };
                            o(fe), o(me), o(xt), o(Lt), o(kt), o(e.U), n.set(ie(it).F, r(t));
                            var i = e.aa;
                            n.map(function(e, t) {
                                i += m(e) + "=", i += m("" + t) + "&"
                            }), i += "z=" + G(), d(i), t.set(e.U, "", !0)
                        }
                    },
                    Tn = /^gtm\d+$/,
                    Ln = function(e, t) {
                        var n;
                        (e = e.b).get("dcLoaded") || (o(e, 29), (t = t || {})[At] && (n = S(t[At])), function(e, t) {
                            var n = t.get(gt);
                            t.set(gt, function(t) {
                                wn(e, t);
                                var o = n(t);
                                return yn(e, t), o
                            });
                            var o = t.get(vt);
                            t.set(vt, function(t) {
                                var n = o(t);
                                return En(e, t), n
                            })
                        }(t = new bn(e, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), e), e.set("dcLoaded", !0))
                    },
                    jn = function(e) {
                        if (!e.get("dcLoaded") && "cookie" == e.get(Ht)) {
                            o(e, 51);
                            var t = new bn(e);
                            wn(t, e), yn(t, e), e.get(t.U) && (e.set($t, 1, !0), e.set(Nt, C() + "/r/collect", !0))
                        }
                    },
                    kn = function(e) {
                        return e ? (1 * e).toFixed(3) : "0"
                    },
                    xn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
                    An = function(e) {
                        function t(e, t) {
                            i.b.data.set(e, t)
                        }

                        function o(e, n) {
                            t(e, n), i.filters.add(e)
                        }

                        function r(e, t, o) {
                            Ut(new Bt(1e4, !0, t), i.b) && (e = x(e)) && 0 < e.length && n(o)
                        }
                        var i = this;
                        this.b = new Q, this.filters = new N, t(Tt, e[Tt]), t(xt, u(e[xt])), t(At, e[At]), t(St, e[St] || w()), t(Mt, e[Mt]), t(_t, e[_t]), t(Ct, e[Ct]), t(It, e[It]), t(Dt, e[Dt]), t(qt, e[qt]), t(Ot, e[Ot]), t(Pt, e[Pt]), t(Rt, e[Rt]), t(Ht, e[Ht]), t(kt, e[kt]), t(jt, e[jt]), t(fe, 1), t(me, "j48"), o(ct, F), o(lt, V), o(ut, B), o(dt, Y), o(ft, Jt), o(mt, Qt), o(pt, $), o(ht, J), o(bt, X), o(wt, z), o(Et, jn), o(gt, U), o(vt, W), o(yt, Yt(this)), Sn(this.b, e[Lt]), Mn(this.b), this.b.set(pe, function() {
                                var e = T.gaGlobal = T.gaGlobal || {};
                                return e.hid = e.hid || G()
                            }()),
                            function(e, t, n) {
                                if (!pn) {
                                    var o;
                                    o = L.location.hash;
                                    var r = T.name,
                                        i = /^#?gaso=([^&]*)/;
                                    (r = (o = (o = o && o.match(i) || r && r.match(i)) ? o[1] : x("GASO")[0] || "") && o.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (A("GASO", "" + o, n, t, e, 0), window._udo || (window._udo = t), window._utcp || (window._utcp = n), e = r[1], g("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&" : "") + G(), "_gasojs")), pn = !0
                                }
                            }(this.b.get(xt), this.b.get(St), this.b.get(Mt)), this.ra = new Bt(1e4, !0, "gaexp10"), r("_gid", "gacookie11", 41), r("_gaid", "gacookie12", 44)
                    },
                    Sn = function(e, t) {
                        if ("cookie" == te(e, Ht)) {
                            var o;
                            Gt = !1;
                            e: {
                                var r = x(te(e, At));
                                if (r && !(1 > r.length)) {
                                    o = [];
                                    for (var i = 0; i < r.length; i++) {
                                        var s, a = (s = r[i].split(".")).shift();
                                        ("GA1" == a || "1" == a) && 1 < s.length ? (1 == (a = s.shift().split("-")).length && (a[1] = "1"), a[0] *= 1, a[1] *= 1, s = {
                                            H: a,
                                            s: s.join(".")
                                        }) : s = void 0, s && o.push(s)
                                    }
                                    if (1 == o.length) {
                                        n(13), o = o[0].s;
                                        break e
                                    }
                                    if (0 != o.length) {
                                        if (n(14), r = tn(te(e, St)).split(".").length, 1 == (o = en(o, r, 0)).length) {
                                            o = o[0].s;
                                            break e
                                        }
                                        r = on(te(e, Mt)), o = (o = en(o, r, 1))[0] && o[0].s;
                                        break e
                                    }
                                    n(12)
                                }
                                o = void 0
                            }
                            o || (o = te(e, St), null != (o = rn("__utma", r = te(e, Ct) || w(), o)) ? (n(10), o = o.O[1] + "." + o.O[2]) : o = void 0), o && (e.data.set(Lt, o), Gt = !0)
                        }
                        if (o = e.get(qt), (i = b(L.location[o ? "href" : "search"], "_ga")) && (e.get(Dt) ? -1 == (o = i.indexOf(".")) ? n(22) : (r = i.substring(o + 1), "1" != i.substring(0, o) ? n(22) : -1 == (o = r.indexOf(".")) ? n(22) : (i = r.substring(0, o)) != ln(o = r.substring(o + 1), 0) && i != ln(o, -1) && i != ln(o, -2) ? n(23) : (n(11), e.data.set(Lt, o))) : n(21)), t && (n(9), e.data.set(Lt, m(t))), !e.get(Lt))
                            if (t = (t = T.gaGlobal && T.gaGlobal.vid) && -1 != t.search(/^(?:utma\.)?\d+\.\d+$/) ? t : void 0) n(17), e.data.set(Lt, t);
                            else {
                                for (n(8), o = (t = T.navigator.userAgent + (L.cookie ? L.cookie : "") + (L.referrer ? L.referrer : "")).length, r = T.history.length; 0 < r;) t += r-- ^ o++;
                                e.data.set(Lt, [G() ^ 2147483647 & Jn(t), Math.round((new Date).getTime() / 1e3)].join("."))
                            } Kt(e)
                    },
                    Mn = function(e) {
                        var t = T.navigator,
                            o = T.screen,
                            r = L.location;
                        if (e.set(Te, function(e) {
                                var t = L.referrer;
                                if (/^https?:\/\//i.test(t)) {
                                    if (e) return t;
                                    e = "//" + L.location.hostname;
                                    var n = t.indexOf(e);
                                    if (!(5 != n && 6 != n || "/" != (e = t.charAt(n + e.length)) && "?" != e && "" != e && ":" != e)) return;
                                    return t
                                }
                            }(e.get(Rt))), r) {
                            var i = r.pathname || "";
                            "/" != i.charAt(0) && (n(31), i = "/" + i), e.set(Ee, r.protocol + "//" + r.hostname + i + r.search)
                        }
                        o && e.set(Ae, o.width + "x" + o.height), o && e.set(xe, o.colorDepth + "-bit");
                        o = L.documentElement;
                        var s = (i = L.body) && i.clientWidth && i.clientHeight,
                            a = [];
                        if (o && o.clientWidth && o.clientHeight && ("CSS1Compat" === L.compatMode || !s) ? a = [o.clientWidth, o.clientHeight] : s && (a = [i.clientWidth, i.clientHeight]), o = 0 >= a[0] || 0 >= a[1] ? "" : a.join("x"), e.set(Se, o), e.set(_e, function() {
                                var e, t, n;
                                if ((n = (n = T.navigator) ? n.plugins : null) && n.length)
                                    for (var o = 0; o < n.length && !t; o++) {
                                        var r = n[o]; - 1 < r.name.indexOf("Shockwave Flash") && (t = r.description)
                                    }
                                if (!t) try {
                                    t = (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version")
                                } catch (s) {}
                                if (!t) try {
                                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), t = "WIN 6,0,21,0", e.AllowScriptAccess = "always", t = e.GetVariable("$version")
                                } catch (s) {}
                                if (!t) try {
                                    t = (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                                } catch (s) {}
                                return t && (e = t.match(/[\d]+/g)) && 3 <= e.length && (t = e[0] + "." + e[1] + " r" + e[2]), t || void 0
                            }()), e.set(ke, L.characterSet || L.charset), e.set(Me, t && "function" == typeof t.javaEnabled && t.javaEnabled() || !1), e.set(je, (t && (t.language || t.browserLanguage) || "").toLowerCase()), r && e.get(qt) && (t = L.location.hash)) {
                            for (t = t.split(/[?&#]+/), r = [], o = 0; o < t.length; ++o)(l(t[o], "utm_id") || l(t[o], "utm_campaign") || l(t[o], "utm_source") || l(t[o], "utm_medium") || l(t[o], "utm_term") || l(t[o], "utm_content") || l(t[o], "gclid") || l(t[o], "dclid") || l(t[o], "gclsrc")) && r.push(t[o]);
                            0 < r.length && (t = "#" + r.join("&"), e.set(Ee, e.get(Ee) + t))
                        }
                    };
                An.prototype.get = function(e) {
                    return this.b.get(e)
                }, An.prototype.set = function(e, t) {
                    this.b.set(e, t)
                };
                var _n = {
                    pageview: [Le],
                    event: [Ce, Ie, He, De],
                    social: [qe, Oe, Pe],
                    timing: [Ve, ze, Ge, Ye]
                };
                An.prototype.send = function(e) {
                    var t, o;
                    1 > arguments.length || ("string" == typeof arguments[0] ? (t = arguments[0], o = [].slice.call(arguments, 1)) : (t = arguments[0] && arguments[0][he], o = arguments), t && ((o = y(_n[t] || [], o))[he] = t, this.b.set(o, void 0, !0), this.filters.D(this.b), this.b.data.m = {}, Ut(this.ra, this.b) && function(e) {
                        var t = T.performance;
                        if (t && t.getEntriesByName) {
                            n(35);
                            var o = "https://www.google-analytics.com/analytics.js?wpid=" + e;
                            g(o, void 0, void 0, function() {
                                try {
                                    var r = 1,
                                        i = t.getEntriesByName("https://www.google-analytics.com/analytics.js");
                                    i && 0 != i.length || (i = t.getEntriesByName("http://www.google-analytics.com/analytics.js"), r = 0);
                                    var s = t.getEntriesByName(o);
                                    if (i && 1 == i.length && s && 1 == s.length) {
                                        n(37);
                                        var a = i[0],
                                            c = s[0],
                                            l = {
                                                tid: e,
                                                ad: kn(a.duration),
                                                bd: kn(c.duration),
                                                ar: kn(a.responseEnd - a.requestStart),
                                                br: kn(c.responseEnd - c.requestStart),
                                                an: kn(a.domainLookupEnd - a.domainLookupStart),
                                                bn: kn(c.domainLookupEnd - c.domainLookupStart),
                                                ac: kn(a.connectEnd - a.connectStart),
                                                bc: kn(c.connectEnd - c.connectStart),
                                                as: r
                                            };
                                        for (var u in (r = []).push("_v=j48"), r.push("id=10"), l) l.hasOwnProperty(u) && r.push(u + "=" + m(l[u]));
                                        r.push("z=" + G()), D("https://www.google-analytics.com/u/d", r.join("&"), f)
                                    }
                                } catch (d) {}
                            })
                        }
                    }(this.b.get(xt))))
                }, An.prototype.ma = function(e, t) {
                    var n = this;
                    $n(e, n, t) || (Bn(e, function() {
                        $n(e, n, t)
                    }), Fn(String(n.get(Tt)), e, void 0, t, !0))
                };
                var Cn, In, Hn, Dn, qn = function(e) {
                        return "prerender" != L.visibilityState && (e(), !0)
                    },
                    On = function(e) {
                        if (!qn(e)) {
                            n(16);
                            var t = !1,
                                o = function() {
                                    if (!t && qn(e)) {
                                        t = !0;
                                        var n = o,
                                            r = L;
                                        r.removeEventListener ? r.removeEventListener("visibilitychange", n, !1) : r.detachEvent && r.detachEvent("onvisibilitychange", n)
                                    }
                                };
                            p(L, "visibilitychange", o)
                        }
                    },
                    Pn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
                    Rn = function(e) {
                        if (s(e[0])) this.u = e[0];
                        else {
                            var t = Pn.exec(e[0]);
                            if (null != t && 4 == t.length && (this.c = t[1] || "t0", this.K = t[2] || "", this.C = t[3], this.a = [].slice.call(e, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (c(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), t = e[1], e = e[2], !this.C) throw "abort";
                            if (this.i && (!c(t) || "" == t)) throw "abort";
                            if (this.g && (!c(t) || "" == t || !s(e))) throw "abort";
                            if (Nn(this.c) || Nn(this.K)) throw "abort";
                            if (this.g && "t0" != this.c) throw "abort"
                        }
                    };

                function Nn(e) {
                    return 0 <= e.indexOf(".") || 0 <= e.indexOf(":")
                }
                Cn = new E, Hn = new E, Dn = new E, In = {
                    ec: 45,
                    ecommerce: 46,
                    linkid: 47
                };
                var $n = function(e, t, n) {
                        t == zn || t.get(Tt);
                        var o = Cn.get(e);
                        return !!s(o) && (t.plugins_ = t.plugins_ || new E, !!t.plugins_.get(e) || (t.plugins_.set(e, new o(t, n || {})), !0))
                    },
                    Fn = function(e, t, o, r, i) {
                        if (!s(Cn.get(t)) && !Hn.get(t)) {
                            if (In.hasOwnProperty(t) && n(In[t]), hn.test(t)) {
                                if (n(52), !(e = zn.j(e))) return !0;
                                r = {
                                    id: t,
                                    B: (o = r || {}).dataLayer || "dataLayer",
                                    ia: !!e.get("anonymizeIp"),
                                    na: i,
                                    G: !1
                                }, e.get("&gtm") == t && (r.G = !0);
                                var a = String(e.get("name"));
                                "t0" != a && (r.target = a), k(String(e.get("trackingId"))) || (r.ja = String(e.get(Lt)), r.ka = Number(e.get(jt)), o = o.palindrome ? vn : gn, o = (o = L.cookie.replace(/^|(; +)/g, ";").match(o)) ? o.sort().join("").substring(1) : void 0, r.la = o, r.qa = b(e.b.get(Ee) || "", "gclid")), e = r.B, o = (new Date).getTime(), T[e] = T[e] || [], o = {
                                    "gtm.start": o
                                }, i || (o.event = "gtm.js"), T[e].push(o), o = function(e) {
                                    function t(e, t) {
                                        t && (n += "&" + e + "=" + m(t))
                                    }
                                    var n = "https://www.google-analytics.com/gtm/js?id=" + m(e.id);
                                    return "dataLayer" != e.B && t("l", e.B), t("t", e.target), t("cid", e.ja), t("cidt", e.ka), t("gac", e.la), t("aip", e.ia), e.na && t("m", "sync"), t("cycle", e.G), e.qa && t("gclid", e.qa), n
                                }(r)
                            }!o && In.hasOwnProperty(t) ? (n(39), o = t + ".js") : n(43), o && (o && 0 <= o.indexOf("/") || (o = (de || v() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + o), e = (r = Xn(o)).protocol, o = L.location.protocol, ("https:" == e || e == o || "http:" == e && "http:" == o) && Wn(r) && (g(r.url, void 0, i), Hn.set(t, !0)))
                        }
                    },
                    Bn = function(e, t) {
                        var n = Dn.get(e) || [];
                        n.push(t), Dn.set(e, n)
                    },
                    Un = function(e, t) {
                        Cn.set(e, t), t = Dn.get(e) || [];
                        for (var n = 0; n < t.length; n++) t[n]();
                        Dn.set(e, [])
                    },
                    Wn = function(e) {
                        var t = Xn(L.location.href);
                        return !!l(e.url, "https://www.google-analytics.com/gtm/js?id=") || !(e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) && (e.host == t.host && e.port == t.port || (t = "http:" == e.protocol ? 80 : 443, !("www.google-analytics.com" != e.host || (e.port || t) != t || !l(e.path, "/plugins/"))))
                    },
                    Xn = function(e) {
                        function t(e) {
                            var t = (e.hostname || "").split(":")[0].toLowerCase(),
                                n = (e.protocol || "").toLowerCase();
                            n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                            return e = e.pathname || "", l(e, "/") || (e = "/" + e), [t, "" + n, e]
                        }
                        var n = L.createElement("a");
                        n.href = L.location.href;
                        var o = (n.protocol || "").toLowerCase(),
                            r = t(n),
                            i = n.search || "",
                            s = o + "//" + r[0] + (r[1] ? ":" + r[1] : "");
                        return l(e, "//") ? e = o + e : l(e, "/") ? e = s + e : !e || l(e, "?") ? e = s + r[2] + (e || i) : 0 > e.split("/")[0].indexOf(":") && (e = s + r[2].substring(0, r[2].lastIndexOf("/")) + "/" + e), n.href = e, o = t(n), {
                            protocol: (n.protocol || "").toLowerCase(),
                            host: o[0],
                            port: o[1],
                            path: o[2],
                            query: n.search || "",
                            url: e || ""
                        }
                    },
                    Vn = {
                        ga: function() {
                            Vn.f = []
                        }
                    };
                Vn.ga(), Vn.D = function(e) {
                    var t = Vn.J.apply(Vn, arguments);
                    t = Vn.f.concat(t);
                    for (Vn.f = []; 0 < t.length && !Vn.v(t[0]) && (t.shift(), !(0 < Vn.f.length)););
                    Vn.f = Vn.f.concat(t)
                }, Vn.J = function(e) {
                    for (var t = [], n = 0; n < arguments.length; n++) try {
                        var o = new Rn(arguments[n]);
                        o.g ? Un(o.a[0], o.a[1]) : (o.i && (o.ha = Fn(o.c, o.a[0], o.X, o.W)), t.push(o))
                    } catch (r) {}
                    return t
                }, Vn.v = function(e) {
                    try {
                        if (e.u) e.u.call(T, zn.j("t0"));
                        else {
                            var t = e.c == ue ? zn : zn.j(e.c);
                            if (e.A) "t0" != e.c || zn.create.apply(zn, e.a);
                            else if (e.ba) zn.remove(e.c);
                            else if (t)
                                if (e.i) {
                                    if (e.ha && (e.ha = Fn(e.c, e.a[0], e.X, e.W)), !$n(e.a[0], t, e.W)) return !0
                                } else if (e.K) {
                                var n = e.C,
                                    o = e.a,
                                    r = t.plugins_.get(e.K);
                                r[n].apply(r, o)
                            } else t[e.C].apply(t, e.a)
                        }
                    } catch (i) {}
                };
                var zn = function(e) {
                    n(1), Vn.D.apply(Vn, [arguments])
                };
                zn.h = {}, zn.P = [], zn.L = 0, zn.answer = 42;
                var Yn = [xt, St, Tt];
                zn.create = function(e) {
                    var t = y(Yn, [].slice.call(arguments));
                    t[Tt] || (t[Tt] = "t0");
                    var n = "" + t[Tt];
                    return zn.h[n] ? zn.h[n] : (t = new An(t), zn.h[n] = t, zn.P.push(t), t)
                }, zn.remove = function(e) {
                    for (var t = 0; t < zn.P.length; t++)
                        if (zn.P[t].get(Tt) == e) {
                            zn.P.splice(t, 1), zn.h[e] = null;
                            break
                        }
                }, zn.j = function(e) {
                    return zn.h[e]
                }, zn.getAll = function() {
                    return zn.P.slice(0)
                }, zn.N = function() {
                    "ga" != ue && n(49);
                    var e = T[ue];
                    if (!e || 42 != e.answer) {
                        if (zn.L = e && e.l, zn.loaded = !0, Ft("create", t = T[ue] = zn, t.create), Ft("remove", t, t.remove), Ft("getByName", t, t.j, 5), Ft("getAll", t, t.getAll, 6), Ft("get", t = An.prototype, t.get, 7), Ft("set", t, t.set, 4), Ft("send", t, t.send), Ft("requireSync", t, t.ma), Ft("get", t = Q.prototype, t.get), Ft("set", t, t.set), !v() && !de) {
                            e: {
                                for (var t = L.getElementsByTagName("script"), o = 0; o < t.length && 100 > o; o++) {
                                    var r = t[o].src;
                                    if (r && 0 == r.indexOf("https://www.google-analytics.com/analytics")) {
                                        n(33), t = !0;
                                        break e
                                    }
                                }
                                t = !1
                            }
                            t && (de = !0)
                        }
                        v() || de || !Ut(new Bt(1e4)) || (n(36), de = !0), (T.gaplugins = T.gaplugins || {}).Linker = un, t = un.prototype, Un("linker", un), Ft("decorate", t, t.ca, 20), Ft("autoLink", t, t.S, 25), Un("displayfeatures", Ln), Un("adfeatures", Ln), e = e && e.q, a(e) ? Vn.D.apply(zn, e) : n(50)
                    }
                }, zn.da = function() {
                    for (var e = zn.getAll(), t = 0; t < e.length; t++) e[t].get(Tt)
                };
                var Gn = zn.N,
                    Kn = T[ue];

                function Jn(e) {
                    var t, n, o = 1;
                    if (e)
                        for (o = 0, n = e.length - 1; 0 <= n; n--) o = 0 != (t = 266338304 & (o = (o << 6 & 268435455) + (t = e.charCodeAt(n)) + (t << 14))) ? o ^ t >> 21 : o;
                    return o
                }
                Kn && Kn.r ? Gn() : On(Gn), On(function() {
                    Vn.D(["provide", "render", f])
                })
            }(window),
            function() {
                var e = window,
                    t = "push",
                    n = "length",
                    o = "prototype",
                    r = function(e) {
                        if (e.get && e.set) {
                            this.clear();
                            var t = e.get("buildHitTask");
                            e.set("buildHitTask", d(this, t)), e.set("_rlt", f(this, e.get("_rlt")))
                        }
                    },
                    i = {
                        action: "pa",
                        promoAction: "promoa",
                        id: "ti",
                        affiliation: "ta",
                        revenue: "tr",
                        tax: "tt",
                        shipping: "ts",
                        coupon: "tcc",
                        step: "cos",
                        label: "col",
                        option: "col",
                        options: "col",
                        list: "pal",
                        listSource: "pls"
                    },
                    s = {
                        id: "id",
                        name: "nm",
                        brand: "br",
                        category: "ca",
                        variant: "va",
                        position: "ps",
                        price: "pr",
                        quantity: "qt",
                        coupon: "cc",
                        "dimension(\\d+)": "cd",
                        "metric(\\d+)": "cm"
                    },
                    a = {
                        id: "id",
                        name: "nm",
                        creative: "cr",
                        position: "ps"
                    },
                    c = function(e, t) {
                        this.name = e, this.source = t, this.e = []
                    },
                    l = "detail checkout checkout_option click add remove purchase refund".split(" ");
                r[o].clear = function() {
                    this.b = void 0, this.f = [], this.a = [], this.g = [], this.d = void 0
                }, r[o].h = function(e, t) {
                    var n = t || {};
                    "promo_click" == e ? n.promoAction = "click" : n.action = e, this.b = m(n)
                }, r[o].j = function(e) {
                    (e = m(e)) && this.f[t](e)
                }, r[o].i = function(e) {
                    var o = m(e);
                    if (o) {
                        var r, i = e.list || "";
                        e = e.listSource || "";
                        for (var s = 0; s < this.a[n]; s++)
                            if (this.a[s].name == i) {
                                r = this.a[s];
                                break
                            } r || (r = new c(i, e), this.a[t](r)), r.e[t](o)
                    }
                }, r[o].c = function(e) {
                    (e = m(e)) && this.g[t](e)
                };
                var u = function(e, t, r) {
                    if ("[object Array]" == Object[o].toString.call(Object(e)))
                        for (var i = 0; i < e[n]; i++) t.call(r, e[i])
                };
                r[o].data = function(e) {
                    if (e && e.ecommerce) {
                        (e = e.ecommerce).promoView && u(e.promoView.promotions, this.c, this), e.promoClick && (this.h("promo_click", e.promoClick.actionField), u(e.promoClick.promotions, this.c, this));
                        for (var t = 0; t < l[n]; t++) {
                            var o = e[l[t]];
                            if (o) {
                                this.h(l[t], o.actionField), u(o.products, this.j, this);
                                break
                            }
                        }
                        u(e.impressions, this.i, this), e.currencyCode && (this.d = e.currencyCode)
                    }
                };
                var d = function(e, t) {
                        return function(o) {
                            var r, c, l;
                            for (e.b && p(i, e.b, o, "&"), r = 0; r < e.f[n]; r++) c = "&pr" + (r + 1), p(s, e.f[r], o, c);
                            for (r = 0; r < e.a[n]; r++) {
                                c = "&il" + (r + 1), (l = e.a[r]).name && o.set(c + "nm", l.name, !0), l.source && o.set(c + "ls", l.source, !0);
                                for (var u = 0; u < l.e[n]; u++) p(s, l.e[u], o, c + "pi" + (u + 1))
                            }
                            for (r = 0; r < e.g[n]; r++) c = "&promo" + (r + 1), p(a, e.g[r], o, c);
                            return e.d && o.set("&cu", e.d, !0), e.clear(), t(o)
                        }
                    },
                    f = function(e, t) {
                        return function(n) {
                            var o = e.b && e.b.action;
                            if ("purchase" != o && "refund" != o) return t(n)
                        }
                    },
                    m = function(e) {
                        var t = 0,
                            n = {};
                        if (e && "object" == typeof e)
                            for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o], t++);
                        return t ? n : void 0
                    },
                    p = function(e, t, n, o) {
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                for (var i in e)
                                    if (e.hasOwnProperty(i)) {
                                        var s = r.match("^" + i + "$");
                                        s && n.set(o + e[i] + s.slice(1).join(""), t[r], !0)
                                    }
                    };
                ! function() {
                    e.gaplugins = e.gaplugins || {}, e.gaplugins.EC = r, r[o].setAction = r[o].h, r[o].addProduct = r[o].j, r[o].addImpression = r[o].i, r[o].addPromo = r[o].c, r[o].clear = r[o].clear, r[o].data = r[o].data;
                    var n = e.GoogleAnalyticsObject || "ga";
                    e[n] = e[n] || function() {
                        (e[n].q = e[n].q || [])[t](arguments)
                    }, e[n]("provide", "ec", r)
                }()
            }(), window.ga || (window.ga = function() {
                window.ga.q.push(arguments)
            }, window.ga.q = []), ke("click", "[data-octo-click]", function(e) {
                if (!window._octo) return;
                const t = e.currentTarget,
                    n = t.getAttribute("data-octo-click") || "",
                    o = {};
                o.event_type = n;
                const r = {},
                    i = {},
                    s = {};
                let a = [];
                t.hasAttribute("data-octo-dimensions") && (a = (t.getAttribute("data-octo-dimensions") || "").split(","));
                const c = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
                for (const l of c)
                    if (l instanceof HTMLMetaElement)
                        if (l.name.startsWith("octolytics-dimension-")) {
                            r[l.name.replace(/^octolytics-dimension-/, "")] = l.content
                        } else if (l.name.startsWith("octolytics-measure-")) {
                    i[l.name.replace(/^octolytics-measure-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-context-")) {
                    s[l.name.replace(/^octolytics-context-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-actor-")) {
                    r[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                } else if (l.name.startsWith("octolytics-")) {
                    o[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                }
                if (t.hasAttribute("data-ga-click")) {
                    const e = (t.getAttribute("data-ga-click") || "").split(",").map(e => e.trim());
                    r.category = e[0], r.action = e[1]
                }
                for (const l of a) {
                    const e = l.split(":");
                    r[e.shift()] = e.join(":")
                }
                o.dimensions = r, o.measures = i, o.context = s, da(o)
            });
            const ga = navigator.userAgent.match(/Macintosh/),
                va = ga ? "metaKey" : "ctrlKey",
                ba = ga ? "Meta" : "Control";
            let wa = !1,
                ya = {
                    x: 0,
                    y: 0
                };

            function Ea(e) {
                e instanceof MouseEvent && (ya.x === e.clientX && ya.y === e.clientY || (wa = !1), ya = {
                    x: e.clientX,
                    y: e.clientY
                })
            }

            function Ta(e) {
                if (wa) return;
                const t = e.currentTarget,
                    n = e.target;
                if (!(n instanceof Element && t instanceof HTMLElement && t.closest(".js-active-navigation-container"))) return;
                const o = n.closest(".js-navigation-item");
                o && qa(o, t)
            }
            fe(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: e => Gr(e, "mouseover", Ea)
            }), fe(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: e => Gr(e, "mouseover", Ta)
            });
            let La = 0;

            function ja(e) {
                if (e.target !== document.body && e.target instanceof HTMLElement && !e.target.classList.contains("js-navigation-enable")) return;
                wa = !0;
                const t = Oa();
                let n;
                if (t) {
                    n = xe(t.querySelector('.js-navigation-item[aria-selected="true"]') || t, "navigation:keydown", {
                        hotkey: _r(e),
                        originalEvent: e,
                        originalTarget: e.target
                    })
                }
                n || e.preventDefault()
            }

            function ka(e) {
                xe(e.currentTarget, "navigation:open", {
                    modifierKey: e.modifierKey || e.altKey || e.ctrlKey || e.metaKey,
                    shiftKey: e.shiftKey
                }) || e.preventDefault()
            }

            function xa(e) {
                const t = Oa();
                e !== t && (t && Aa(t), e.classList.add("js-active-navigation-container"))
            }

            function Aa(e) {
                e.classList.remove("js-active-navigation-container")
            }
            fe(".js-active-navigation-container", {
                add() {
                    1 === ++La && document.addEventListener("keydown", ja)
                },
                remove() {
                    0 === --La && document.removeEventListener("keydown", ja)
                }
            }), ke("navigation:keydown", ".js-active-navigation-container", function(e) {
                x(e instanceof CustomEvent, "null.js:233");
                const t = e.currentTarget,
                    n = e.detail.originalTarget.matches("input, textarea"),
                    o = e.target;
                if (o.classList.contains("js-navigation-item"))
                    if (n) {
                        if (ga) switch (_r(e.detail.originalEvent)) {
                            case "Control+n":
                                Ha(o, t);
                                break;
                            case "Control+p":
                                Ia(o, t)
                        }
                        switch (_r(e.detail.originalEvent)) {
                            case "ArrowUp":
                                Ia(o, t);
                                break;
                            case "ArrowDown":
                                Ha(o, t);
                                break;
                            case "Enter":
                            case `${ba}+Enter`:
                                Da(o, e.detail.originalEvent[va])
                        }
                    } else {
                        if (ga) switch (_r(e.detail.originalEvent)) {
                            case "Control+n":
                                Ha(o, t);
                                break;
                            case "Control+p":
                                Ia(o, t);
                                break;
                            case "Alt+v":
                                ! function(e, t) {
                                    const n = Pa(t);
                                    let o = n.indexOf(e);
                                    const r = fa(e);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o - 1]) && (s = ma(i, r)) && s.top >= 0;) o--;
                                    if (i) {
                                        const e = qa(i, t);
                                        if (e) return;
                                        Na(r, i)
                                    }
                                }(o, t);
                                break;
                            case "Control+v":
                                ! function(e, t) {
                                    const n = Pa(t);
                                    let o = n.indexOf(e);
                                    const r = fa(e);
                                    if (null == r) return;
                                    let i, s;
                                    for (;
                                        (i = n[o + 1]) && (s = ma(i, r)) && s.bottom >= 0;) o++;
                                    if (i) {
                                        const e = qa(i, t);
                                        if (e) return;
                                        Na(r, i)
                                    }
                                }(o, t)
                        }
                        switch (_r(e.detail.originalEvent)) {
                            case "j":
                            case "J":
                                Ha(o, t);
                                break;
                            case "k":
                            case "K":
                                Ia(o, t);
                                break;
                            case "o":
                            case "Enter":
                            case `${ba}+Enter`:
                                Da(o, e.detail[va])
                        }
                    }
                else {
                    const o = Pa(t)[0];
                    if (o)
                        if (n) {
                            if (ga) switch (_r(e.detail.originalEvent)) {
                                case "Control+n":
                                    qa(o, t)
                            }
                            switch (_r(e.detail.originalEvent)) {
                                case "ArrowDown":
                                    qa(o, t)
                            }
                        } else {
                            if (ga) switch (_r(e.detail.originalEvent)) {
                                case "Control+n":
                                case "Control+v":
                                    qa(o, t)
                            }
                            switch (_r(e.detail.originalEvent)) {
                                case "j":
                                    qa(o, t)
                            }
                        }
                }
                if (n) {
                    if (ga) switch (_r(e.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                            e.preventDefault()
                    }
                    switch (_r(e.detail.originalEvent)) {
                        case "ArrowUp":
                        case "ArrowDown":
                            e.preventDefault();
                            break;
                        case "Enter":
                            e.preventDefault()
                    }
                } else {
                    if (ga) switch (_r(e.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                        case "Control+v":
                        case "Alt+v":
                            e.preventDefault()
                    }
                    switch (_r(e.detail.originalEvent)) {
                        case "j":
                        case "k":
                            e.preventDefault();
                            break;
                        case "o":
                        case "Enter":
                        case `${va}+Enter`:
                            e.preventDefault()
                    }
                }
            }), ke("click", ".js-active-navigation-container .js-navigation-item", function(e) {
                x(e instanceof MouseEvent, "null.js:389"), ka(e)
            }), ke("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", function(e) {
                x(e instanceof CustomEvent, "null.js:395");
                const t = e.currentTarget.classList.contains("js-navigation-open") ? e.currentTarget : e.currentTarget.querySelector(".js-navigation-open");
                if (t) {
                    if (e.detail.modifierKey) window.open(t.href, "_blank"), window.focus();
                    else {
                        t.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })) && t.click()
                    }
                    e.preventDefault()
                } else ka(e)
            });
            const Sa = [];

            function Ma(e, t) {
                t || (t = e);
                const n = Pa(e)[0],
                    o = t.closest(".js-navigation-item") || n;
                if (xa(e), o instanceof HTMLElement) {
                    if (qa(o, e)) return;
                    const t = fa(o);
                    x(t, "null.js:496"), $a(t, o)
                }
            }

            function _a(e) {
                const t = e.querySelectorAll(".js-navigation-item[aria-selected]");
                for (const n of t) n.classList.remove("navigation-focus"), n.setAttribute("aria-selected", "false")
            }

            function Ca(e, t) {
                _a(e), Ma(e, t)
            }

            function Ia(e, t) {
                const n = Pa(t),
                    o = n.indexOf(e),
                    r = n[o - 1];
                if (r) {
                    if (qa(r, t)) return;
                    const e = fa(r);
                    x(e, "null.js:544"), "page" === Ra(t) ? Na(e, r) : $a(e, r)
                }
            }

            function Ha(e, t) {
                const n = Pa(t),
                    o = n.indexOf(e),
                    r = n[o + 1];
                if (r) {
                    if (qa(r, t)) return;
                    const e = fa(r);
                    x(e, "null.js:571"), "page" === Ra(t) ? Na(e, r) : $a(e, r)
                }
            }

            function Da(e) {
                xe(e, "navigation:keyopen", {
                    modifierKey: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                })
            }

            function qa(e, t) {
                return !xe(e, "navigation:focus") || (_a(t), e.classList.add("navigation-focus"), e.setAttribute("aria-selected", "true"), !1)
            }

            function Oa() {
                return document.querySelector(".js-active-navigation-container")
            }

            function Pa(e) {
                return Array.from(e.querySelectorAll(".js-navigation-item")).filter(xs)
            }

            function Ra(e) {
                return e.getAttribute("data-navigation-scroll") || "item"
            }

            function Na(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "smooth";
                const o = ma(t, e);
                o && (o.bottom <= 0 ? t.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : o.top <= 0 && t.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }

            function $a(e, t) {
                const n = pa(t, e),
                    o = ma(t, e);
                if (null != n && null != o)
                    if (o.bottom <= 0 && document.body) {
                        ha(e, {
                            top: (null != e.offsetParent ? e.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                        })
                    } else o.top <= 0 && ha(e, {
                        top: n.top
                    })
            }

            function Fa(e, t) {
                const n = 1 === e ? "data-singular-string" : "data-plural-string",
                    o = t.getAttribute(n);
                null != o && (t.textContent = o)
            }
            const Ba = "ontransitionend" in window;

            function Ua(e, t) {
                if (!Ba) return void t();
                const n = Array.from(e.querySelectorAll(".js-transitionable"));
                e.classList.add("js-transitionable") && n.push(e);
                for (const o of n) {
                    const e = Wa(o);
                    o.addEventListener("transitionend", () => {
                        o.style.display = "", o.style.visibility = "", e && Xa(o, function() {
                            o.style.height = ""
                        })
                    }, {
                        once: !0
                    }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", e && Xa(o, function() {
                        o.style.height = getComputedStyle(o).height
                    }), o.offsetHeight
                }
                t();
                for (const o of n)
                    if (Wa(o)) {
                        const e = getComputedStyle(o).height;
                        o.style.boxSizing = "", o.style.height = "0px" === e ? `${o.scrollHeight}px` : "0px"
                    }
            }

            function Wa(e) {
                return "height" === getComputedStyle(e).transitionProperty
            }

            function Xa(e, t) {
                e.style.transition = "none", t(), e.offsetHeight, e.style.transition = ""
            }

            function Va(e) {
                const t = e.getAttribute("data-details-container") || ".js-details-container",
                    n = c(e, t);
                Ua(n, () => {
                    n.classList.toggle("open"), n.classList.toggle("Details--on"), e.setAttribute("aria-expanded", n.classList.contains("Details--on").toString()), Promise.resolve().then(() => {
                        ! function(e) {
                            const t = e.querySelectorAll("input[autofocus], textarea[autofocus]"),
                                n = t[t.length - 1];
                            n && document.activeElement !== n && n.focus()
                        }(n),
                        function(e) {
                            e.classList.contains("tooltipped") && (e.classList.remove("tooltipped"), e.addEventListener("mouseleave", () => {
                                e.classList.add("tooltipped"), e.blur()
                            }, {
                                once: !0
                            }))
                        }(e),
                        function(e) {
                            const t = e.closest(".js-edit-repository-meta");
                            t instanceof HTMLFormElement && t.reset()
                        }(e);
                        const t = new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: n.classList.contains("Details--on")
                            }
                        });
                        n.dispatchEvent(t)
                    })
                })
            }

            function za(e) {
                let t = !1,
                    n = e.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (t = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !t), n.classList.toggle("Details--on", !t), t = !1), n = n.parentElement
            }
            ke("click", ".js-details-target", function(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLElement, "null.js:131"), Va(t), e.preventDefault()
            }), Is(function(e) {
                let t = e.target;
                t && za(t)
            });
            let Ya = null;

            function Ga(e) {
                Ya && Ka(Ya), xe(e, "menu:activate") && (document.addEventListener("keydown", Qa), document.addEventListener("click", Ja), Ya = e, Ua(e, () => {
                    e.classList.add("active");
                    const t = e.querySelector(".js-menu-content [tabindex]");
                    t && t.focus();
                    const n = e.querySelector(".js-menu-target");
                    n && (n.setAttribute("aria-expanded", "true"), n.hasAttribute("data-no-toggle") || n.classList.add("selected"))
                }), xe(e, "menu:activated"))
            }

            function Ka(e) {
                xe(e, "menu:deactivate") && (document.removeEventListener("keydown", Qa), document.removeEventListener("click", Ja), Ya = null, Ua(e, () => {
                    e.classList.remove("active");
                    const t = e.querySelector(".js-menu-content");
                    t && t.setAttribute("aria-expanded", "false");
                    const n = e.querySelector(".js-menu-target");
                    n && (n.setAttribute("aria-expanded", "false"), n.hasAttribute("data-no-toggle") || n.classList.remove("selected"))
                }), xe(e, "menu:deactivated"))
            }

            function Ja(e) {
                if (!Ya) return;
                const t = e.target;
                x(t instanceof Element, "null.js:111");
                const n = t.closest("#facebox, .facebox-overlay, details[open], details-dialog"),
                    o = !!n && !n.contains(Ya);
                Ya.contains(t) || o || (e.preventDefault(), Ka(Ya))
            }

            function Qa(e) {
                if (!Ya) return;
                const t = document.activeElement;
                t && "Escape" === e.key && (Ya.contains(t) && t.blur(), e.preventDefault(), Ka(Ya))
            }

            function Za(e) {
                const t = document.querySelector(".sso-modal");
                t && (t.classList.remove("success", "error"), e ? t.classList.add("success") : t.classList.add("error"))
            }
            async function ec() {
                const e = l(document, "link[rel=sso-modal]", HTMLLinkElement),
                    t = await Zt({
                        content: j(document, e.href),
                        dialogClass: "sso-modal"
                    });
                let n = null;
                var o;
                if (window.external.ssoComplete = function(e) {
                        e.error ? Za(n = !1) : (Za(n = !0), function(e) {
                            const t = document.querySelector("meta[name=sso-expires-around]");
                            t && t.setAttribute("content", e)
                        }(e.expiresAround), window.focus()), window.external.ssoComplete = null
                    }, await (o = t, new Promise(e => {
                        o.addEventListener("dialog:remove", e, {
                            once: !0
                        })
                    })), !n) throw new Error("sso prompt canceled")
            }
            async function tc() {
                const e = document.querySelector("link[rel=sso-session]"),
                    t = document.querySelector("meta[name=sso-expires-around]");
                if (!(e instanceof HTMLLinkElement)) return !0;
                if (! function(e) {
                        if (!(e instanceof HTMLMetaElement)) return !0;
                        const t = parseInt(e.content);
                        return (new Date).getTime() / 1e3 > t
                    }(t)) return !0;
                const n = e.href,
                    o = await T(n, {
                        headers: {
                            Accept: "application/json"
                        }
                    });
                return await o.json()
            }
            ke("click", ".js-menu-container", function(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLElement, "null.js:157"), e.target.closest(".js-menu-target") instanceof HTMLElement ? (e.preventDefault(), t === Ya ? Ka(t) : Ga(t)) : e.target.closest(".js-menu-content") || t === Ya && (e.preventDefault(), Ka(t))
            }), ke("click", ".js-menu-container .js-menu-close", function(e) {
                const t = e.currentTarget.closest(".js-menu-container");
                x(t instanceof HTMLElement, "expected container to be .js-menu-container -- null.js:184"), Ka(t), e.preventDefault()
            }), fe(".js-menu-container.active", {
                add() {
                    const e = document.body;
                    x(e, "null.js:193"), e.classList.add("menu-active")
                },
                remove() {
                    const e = document.body;
                    x(e, "null.js:198"), e.classList.remove("menu-active")
                }
            }), fe(".js-sso-modal-complete", function(e) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const t = e.getAttribute("data-error"),
                        n = e.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: t,
                        expiresAround: n
                    }), window.close()
                } else {
                    const t = e.getAttribute("data-fallback-url");
                    window.location = t
                }
            });
            let nc = null;

            function oc() {
                nc = null
            }
            async function rc() {
                await tc() || (nc || (nc = ec().then(oc).catch(oc)), await nc)
            }
            const ic = new WeakMap;
            async function sc(e) {
                const t = e.currentTarget;
                x(t instanceof Element, "null.js:40"), t.classList.remove("js-load-contents"), t.classList.add("is-loading"), t.classList.remove("has-error");
                const n = f(t, "data-contents-url"),
                    o = new URL(n, window.location.origin),
                    r = ic.get(t);
                if (r) {
                    const e = new URLSearchParams(o.search.slice(1));
                    for (const t of r) e.append(t[0], t[1]);
                    o.search = e.toString()
                }
                const i = t.querySelector(".js-select-menu-deferred-content");
                let s;
                try {
                    await rc(), s = i ? await L(o) : await Ut(o)
                } catch (a) {
                    return void t.classList.add("has-error")
                } finally {
                    t.classList.remove("is-loading")
                }
                i ? i.innerHTML = s : xe(t, "selectmenu:data", {
                    data: s
                }), (t.classList.contains("active") || t.hasAttribute("open")) && xe(t, "selectmenu:load")
            }
            fe(".js-select-menu.js-load-contents", {
                add(e) {
                    e.addEventListener("mouseenter", sc), e.addEventListener("menu:activate", sc)
                },
                remove(e) {
                    e.removeEventListener("mouseenter", sc), e.removeEventListener("menu:activate", sc)
                }
            });
            class ac extends Error {
                constructor(e) {
                    super(e), this.name = "JumpToParseError"
                }
            }
            e("aK", class extends Error {
                constructor(e) {
                    super(e.message), this.name = "JumpToPageViewError", this.stack = e.stack, this.message
                }
            });
            const cc = /^(team|repository|project):[^\/]+\/[^\/]+(\/([^\/]+))?$/,
                lc = "jump_to:page_views";

            function uc(e, t) {
                t.setItem(lc, JSON.stringify(e))
            }

            function dc(e) {
                if (!e) return {};
                const t = e.getItem(lc);
                if (!t) return {};
                let n;
                try {
                    n = JSON.parse(t)
                } catch (r) {
                    return cn(new ac("Failed to parse jump-to localStorage contents")), uc({}, e), {}
                }
                const o = {};
                for (const i in n)
                    if (i.match(cc)) o[i] = n[i];
                    else {
                        cn(new ac("Invalid jump-to pageview map key from localStorage"))
                    } return o
            }

            function fc(e) {
                let t;
                switch (e.type) {
                    case "Project":
                        x(e.owner, "null.js:10"), x(null !== e.number && void 0 !== e.number, "null.js:11"), t = hc(e.owner.name, `${e.number}`);
                        break;
                    case "Repository":
                        t = pc(...e.name.split("/"));
                        break;
                    case "Team":
                        t = mc(...e.name.split("/"));
                        break;
                    default:
                        throw new Error(`Invalid Suggestion type: ${e.type}`)
                }
                return t
            }

            function mc(e, t) {
                return `team:${e}/${t}`
            }

            function pc(e, t) {
                return `repository:${e}/${t}`
            }

            function hc(e, t) {
                return `project:${e}/${t}`
            }
            let gc;

            function vc(e) {
                return gc || (gc = Ae(document, "enabled-features").split(",")), -1 !== gc.indexOf(e)
            }
            let bc = {};

            function wc(e) {
                const t = parseInt(Ae(document, "octolytics-actor-id"));
                if (!t) return !1;
                bc.dimensions = bc.dimensions || {}, bc.dimensions.actor_id = t;
                let n = bc.dimensions && bc.dimensions.session_id;
                return ("menu-activation" !== e || !n) && (!("menu-activation" !== e && !n) && ("menu-activation" === e && yc({
                    dimensions: {
                        session_id: n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            const t = 16 * Math.random() | 0,
                                n = "x" === e ? t : 3 & t | 8;
                            return n.toString(16)
                        })
                    }
                }), bc.event_type = `jump-to-${e}`, x(n, "null.js:76"), function(e) {
                    vc("JUMP_TO_LOGGING") && console.log(JSON.stringify(e));
                    da(e)
                }(bc), "menu-deactivation" !== e && "click" !== e && "search" !== e || Ec(), !0))
            }

            function yc(e) {
                e.context && (bc.context = Object.assign(bc.context || {}, e.context), bc.dimensions = Object.assign(bc.dimensions || {}, e.context)), e.dimensions && (bc.dimensions = Object.assign(bc.dimensions || {}, e.dimensions)), e.measures && (bc.measures = Object.assign(bc.measures || {}, e.measures))
            }

            function Ec() {
                bc = {}
            }
            const Tc = {
                frequency: .6,
                recency: .4
            };

            function Lc(e) {
                const t = kc(e),
                    n = xc(e);
                return Object.keys(e).map(e => ({
                    pageKey: e,
                    score: jc(e, t, n)
                })).sort((e, t) => t.score - e.score).map(e => e.pageKey)
            }

            function jc(e, t, n) {
                const o = t.get(e) || 0,
                    r = n.get(e) || 0;
                return o * Tc.frequency + r * Tc.recency
            }

            function kc(e) {
                const t = [...Object.keys(e)].reduce((t, n) => t + e[n].visitCount, 0);
                return new Map(Object.keys(e).map(n => [n, e[n].visitCount / t]))
            }

            function xc(e) {
                const t = [...Object.keys(e)].sort((t, n) => e[t].lastVisitedAt - e[n].lastVisitedAt),
                    n = t.length;
                return new Map(t.map((e, t) => [e, (t + 1) / n]))
            }
            const Ac = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                Sc = [/^\/([^\/]+)\/([^\/]+)\/?$/, /^\/([^\/]+)\/([^\/]+)\/blob/, /^\/([^\/]+)\/([^\/]+)\/tree/, /^\/([^\/]+)\/([^\/]+)\/issues/, /^\/([^\/]+)\/([^\/]+)\/pulls?/, /^\/([^\/]+)\/([^\/]+)\/pulse/],
                Mc = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^\/]+)\/([^\/]+)\/projects\/([0-9-]+)/]
                ],
                _c = 100;

            function Cc(e, t) {
                const n = dc(t),
                    o = Math.floor(Date.now() / 1e3),
                    r = n[e] || {
                        lastVisitedAt: o,
                        visitCount: 0
                    };
                var i;
                r.visitCount += 1, r.lastVisitedAt = o, n[e] = r, uc((i = n, Object.keys(i).length <= _c ? i : Lc(i).slice(0, _c / 2).reduce((e, t) => (e[t] = i[t], e), {})), t)
            }
            const Ic = () => {
                const e = "test-storage-availability";
                try {
                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), window.localStorage
                } catch (t) {
                    return null
                }
            };

            function Hc(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement, "null.js:36");
                const n = parseInt(t.getAttribute("data-input-max-length"), 10),
                    o = parseInt(t.getAttribute("data-warning-length"), 10) || 5,
                    r = t.value.replace(/(\r\n|\n|\r)/g, "\r\n");
                let i = n - r.length;
                if (i <= 0) {
                    let e = r.substr(0, n);
                    e.endsWith("\r") ? (e = e.substr(0, n - 1), i = 1) : i = 0, t.value = e
                }
                const s = f(t, "data-warning-text"),
                    a = l(c(t, ".js-length-limited-input-container"), ".js-length-limited-input-warning");
                i <= o ? (a.textContent = s.replace(new RegExp("{{remaining}}", "g"), `${i}`), a.classList.remove("d-none")) : (a.textContent = "", a.classList.add("d-none"))
            }
            fe(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", Hc), e.addEventListener("change", Hc)
                },
                remove(e) {
                    e.removeEventListener("input", Hc), e.removeEventListener("change", Hc)
                }
            });
            var Dc = rn(function(e) {
                var t;
                t = function() {
                    if ("undefined" == typeof window || !window.document) return function() {
                        throw new Error("Sortable.js requires a window with a document")
                    };
                    var e, t, n, o, r, i, s, a, c, l, u, d, f, m, p, h, g, v, b, w, y, E, T = {},
                        L = /\s+/g,
                        j = /left|right|inline/,
                        k = "Sortable" + (new Date).getTime(),
                        x = window,
                        A = x.document,
                        S = x.parseInt,
                        M = x.setTimeout,
                        _ = x.jQuery || x.Zepto,
                        C = x.Polymer,
                        I = !1,
                        H = "draggable" in A.createElement("div"),
                        D = !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((E = A.createElement("x")).style.cssText = "pointer-events:auto", "auto" === E.style.pointerEvents),
                        q = !1,
                        O = Math.abs,
                        P = Math.min,
                        R = [],
                        N = [],
                        $ = function() {
                            return !1
                        },
                        F = ie(function(e, t, n) {
                            if (n && t.scroll) {
                                var o, r, i, s, a, d, f = n[k],
                                    m = t.scrollSensitivity,
                                    p = t.scrollSpeed,
                                    h = e.clientX,
                                    g = e.clientY,
                                    v = window.innerWidth,
                                    b = window.innerHeight;
                                if (l !== n && (c = t.scroll, l = n, u = t.scrollFn, !0 === c)) {
                                    c = n;
                                    do {
                                        if (c.offsetWidth < c.scrollWidth || c.offsetHeight < c.scrollHeight) break
                                    } while (c = c.parentNode)
                                }
                                c && (o = c, r = c.getBoundingClientRect(), i = (O(r.right - h) <= m) - (O(r.left - h) <= m), s = (O(r.bottom - g) <= m) - (O(r.top - g) <= m)), i || s || (s = (b - g <= m) - (g <= m), ((i = (v - h <= m) - (h <= m)) || s) && (o = x)), T.vx === i && T.vy === s && T.el === o || (T.el = o, T.vx = i, T.vy = s, clearInterval(T.pid), o && (T.pid = setInterval(function() {
                                    if (d = s ? s * p : 0, a = i ? i * p : 0, "function" == typeof u) return u.call(f, a, d, e);
                                    o === x ? x.scrollTo(x.pageXOffset + a, x.pageYOffset + d) : (o.scrollTop += d, o.scrollLeft += a)
                                }, 24)))
                            }
                        }, 30),
                        B = function(e) {
                            function t(e, t) {
                                return null != e && !0 !== e || null != (e = n.name) ? "function" == typeof e ? e : function(n, o) {
                                    var r = o.options.group.name;
                                    return t ? e : e && (e.join ? e.indexOf(r) > -1 : r == e)
                                } : $
                            }
                            var n = {},
                                o = e.group;
                            o && "object" == typeof o || (o = {
                                name: o
                            }), n.name = o.name, n.checkPull = t(o.pull, !0), n.checkPut = t(o.put), n.revertClone = o.revertClone, e.group = n
                        };
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                I = {
                                    capture: !1,
                                    passive: !1
                                }
                            }
                        }))
                    } catch (le) {}

                    function U(e, t) {
                        if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(e);
                        this.el = e, this.options = t = se({}, t), e[k] = this;
                        var n = {
                            group: null,
                            sort: !0,
                            disabled: !1,
                            store: null,
                            handle: null,
                            scroll: !0,
                            scrollSensitivity: 30,
                            scrollSpeed: 10,
                            draggable: /[uo]l/i.test(e.nodeName) ? "li" : ">*",
                            ghostClass: "sortable-ghost",
                            chosenClass: "sortable-chosen",
                            dragClass: "sortable-drag",
                            ignore: "a, img",
                            filter: null,
                            preventOnFilter: !0,
                            animation: 0,
                            setData: function(e, t) {
                                e.setData("Text", t.textContent)
                            },
                            dropBubble: !1,
                            dragoverBubble: !1,
                            dataIdAttr: "data-id",
                            delay: 0,
                            forceFallback: !1,
                            fallbackClass: "sortable-fallback",
                            fallbackOnBody: !1,
                            fallbackTolerance: 0,
                            fallbackOffset: {
                                x: 0,
                                y: 0
                            },
                            supportPointer: !1 !== U.supportPointer
                        };
                        for (var o in n) !(o in t) && (t[o] = n[o]);
                        for (var r in B(t), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
                        this.nativeDraggable = !t.forceFallback && H, z(e, "mousedown", this._onTapStart), z(e, "touchstart", this._onTapStart), t.supportPointer && z(e, "pointerdown", this._onTapStart), this.nativeDraggable && (z(e, "dragover", this), z(e, "dragenter", this)), N.push(this._onDragOver), t.store && this.sort(t.store.get(this))
                    }

                    function W(t, n) {
                        "clone" !== t.lastPullMode && (n = !0), r && r.state !== n && (K(r, "display", n ? "none" : ""), n || r.state && (t.options.group.revertClone ? (i.insertBefore(r, s), t._animate(e, r)) : i.insertBefore(r, e)), r.state = n)
                    }

                    function X(e, t, n) {
                        if (e) {
                            n = n || A;
                            do {
                                if (">*" === t && e.parentNode === n || re(e, t)) return e
                            } while (e = V(e))
                        }
                        return null
                    }

                    function V(e) {
                        var t = e.host;
                        return t && t.nodeType ? t : e.parentNode
                    }

                    function z(e, t, n) {
                        e.addEventListener(t, n, I)
                    }

                    function Y(e, t, n) {
                        e.removeEventListener(t, n, I)
                    }

                    function G(e, t, n) {
                        if (e)
                            if (e.classList) e.classList[n ? "add" : "remove"](t);
                            else {
                                var o = (" " + e.className + " ").replace(L, " ").replace(" " + t + " ", " ");
                                e.className = (o + (n ? " " + t : "")).replace(L, " ")
                            }
                    }

                    function K(e, t, n) {
                        var o = e && e.style;
                        if (o) {
                            if (void 0 === n) return A.defaultView && A.defaultView.getComputedStyle ? n = A.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
                            t in o || (t = "-webkit-" + t), o[t] = n + ("string" == typeof n ? "" : "px")
                        }
                    }

                    function J(e, t, n) {
                        if (e) {
                            var o = e.getElementsByTagName(t),
                                r = 0,
                                i = o.length;
                            if (n)
                                for (; r < i; r++) n(o[r], r);
                            return o
                        }
                        return []
                    }

                    function Q(e, t, n, o, i, s, a, c) {
                        e = e || t[k];
                        var l = A.createEvent("Event"),
                            u = e.options,
                            d = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                        l.initEvent(n, !0, !0), l.to = i || t, l.from = s || t, l.item = o || t, l.clone = r, l.oldIndex = a, l.newIndex = c, t.dispatchEvent(l), u[d] && u[d].call(e, l)
                    }

                    function Z(e, t, n, o, r, i, s, a) {
                        var c, l, u = e[k],
                            d = u.options.onMove;
                        return (c = A.createEvent("Event")).initEvent("move", !0, !0), c.to = t, c.from = e, c.dragged = n, c.draggedRect = o, c.related = r || t, c.relatedRect = i || t.getBoundingClientRect(), c.willInsertAfter = a, e.dispatchEvent(c), d && (l = d.call(u, c, s)), l
                    }

                    function ee(e) {
                        e.draggable = !1
                    }

                    function te() {
                        q = !1
                    }

                    function ne(e) {
                        for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--;) o += t.charCodeAt(n);
                        return o.toString(36)
                    }

                    function oe(e, t) {
                        var n = 0;
                        if (!e || !e.parentNode) return -1;
                        for (; e && (e = e.previousElementSibling);) "TEMPLATE" === e.nodeName.toUpperCase() || ">*" !== t && !re(e, t) || n++;
                        return n
                    }

                    function re(e, t) {
                        if (e) {
                            var n = (t = t.split(".")).shift().toUpperCase(),
                                o = new RegExp("\\s(" + t.join("|") + ")(?=\\s)", "g");
                            return !("" !== n && e.nodeName.toUpperCase() != n || t.length && ((" " + e.className + " ").match(o) || []).length != t.length)
                        }
                        return !1
                    }

                    function ie(e, t) {
                        var n, o;
                        return function() {
                            void 0 === n && (n = arguments, o = this, M(function() {
                                1 === n.length ? e.call(o, n[0]) : e.apply(o, n), n = void 0
                            }, t))
                        }
                    }

                    function se(e, t) {
                        if (e && t)
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    }

                    function ae(e) {
                        return M(e, 0)
                    }

                    function ce(e) {
                        return clearTimeout(e)
                    }
                    return U.prototype = {
                        constructor: U,
                        _onTapStart: function(t) {
                            var n, o = this,
                                r = this.el,
                                i = this.options,
                                s = i.preventOnFilter,
                                c = t.type,
                                l = t.touches && t.touches[0],
                                u = (l || t).target,
                                d = t.target.shadowRoot && t.path && t.path[0] || u,
                                f = i.filter;
                            if (function(e) {
                                    R.length = 0;
                                    var t = e.getElementsByTagName("input"),
                                        n = t.length;
                                    for (; n--;) {
                                        var o = t[n];
                                        o.checked && R.push(o)
                                    }
                                }(r), !e && !(/mousedown|pointerdown/.test(c) && 0 !== t.button || i.disabled) && !d.isContentEditable && (u = X(u, i.draggable, r)) && a !== u) {
                                if (n = oe(u, i.draggable), "function" == typeof f) {
                                    if (f.call(this, t, u, this)) return Q(o, d, "filter", u, r, r, n), void(s && t.preventDefault())
                                } else if (f && (f = f.split(",").some(function(e) {
                                        if (e = X(d, e.trim(), r)) return Q(o, e, "filter", u, r, r, n), !0
                                    }))) return void(s && t.preventDefault());
                                i.handle && !X(d, i.handle, r) || this._prepareDragStart(t, l, u, n)
                            }
                        },
                        _prepareDragStart: function(o, r, c, l) {
                            var u, d = this,
                                f = d.el,
                                m = d.options,
                                h = f.ownerDocument;
                            c && !e && c.parentNode === f && (b = o, i = f, e = c, m.handleReplacedDragElement && (t = c.getAttribute("id")), n = e.parentNode, s = e.nextSibling, a = c, g = m.group, p = l, this._lastX = (r || o).clientX, this._lastY = (r || o).clientY, e.style["will-change"] = "all", u = function() {
                                d._disableDelayedDrag(), e.draggable = d.nativeDraggable, G(e, m.chosenClass, !0), d._triggerDragStart(o, r), Q(d, i, "choose", e, i, i, p)
                            }, m.ignore.split(",").forEach(function(t) {
                                J(e, t.trim(), ee)
                            }), z(h, "mouseup", d._onDrop), z(h, "touchend", d._onDrop), z(h, "touchcancel", d._onDrop), z(h, "selectstart", d), m.supportPointer && z(h, "pointercancel", d._onDrop), m.delay ? (z(h, "mouseup", d._disableDelayedDrag), z(h, "touchend", d._disableDelayedDrag), z(h, "touchcancel", d._disableDelayedDrag), z(h, "mousemove", d._disableDelayedDrag), z(h, "touchmove", d._disableDelayedDrag), m.supportPointer && z(h, "pointermove", d._disableDelayedDrag), d._dragStartTimer = M(u, m.delay)) : u())
                        },
                        _disableDelayedDrag: function() {
                            var e = this.el.ownerDocument;
                            clearTimeout(this._dragStartTimer), Y(e, "mouseup", this._disableDelayedDrag), Y(e, "touchend", this._disableDelayedDrag), Y(e, "touchcancel", this._disableDelayedDrag), Y(e, "mousemove", this._disableDelayedDrag), Y(e, "touchmove", this._disableDelayedDrag), Y(e, "pointermove", this._disableDelayedDrag)
                        },
                        _triggerDragStart: function(t, n) {
                            (n = n || ("touch" == t.pointerType ? t : null)) ? (b = {
                                target: e,
                                clientX: n.clientX,
                                clientY: n.clientY
                            }, this._onDragStart(b, "touch")) : this.nativeDraggable ? (z(e, "dragend", this), z(i, "dragstart", this._onDragStart)) : this._onDragStart(b, !0);
                            try {
                                A.selection ? ae(function() {
                                    A.selection.empty()
                                }) : window.getSelection().removeAllRanges()
                            } catch (le) {}
                        },
                        _dragStarted: function() {
                            if (i && e) {
                                var t = this.options;
                                G(e, t.ghostClass, !0), G(e, t.dragClass, !1), U.active = this, Q(this, i, "start", e, i, i, p)
                            } else this._nulling()
                        },
                        _emulateDragOver: function() {
                            if (w) {
                                if (this._lastX === w.clientX && this._lastY === w.clientY) return;
                                this._lastX = w.clientX, this._lastY = w.clientY, D || K(o, "display", "none");
                                var e = A.elementFromPoint(w.clientX, w.clientY),
                                    t = e,
                                    n = N.length;
                                if (e && e.shadowRoot && (t = e = e.shadowRoot.elementFromPoint(w.clientX, w.clientY)), t)
                                    do {
                                        if (t[k]) {
                                            for (; n--;) N[n]({
                                                clientX: w.clientX,
                                                clientY: w.clientY,
                                                target: e,
                                                rootEl: t
                                            });
                                            break
                                        }
                                        e = t
                                    } while (t = t.parentNode);
                                D || K(o, "display", "")
                            }
                        },
                        _onTouchMove: function(e) {
                            if (b) {
                                var t = this.options,
                                    n = t.fallbackTolerance,
                                    r = t.fallbackOffset,
                                    i = e.touches ? e.touches[0] : e,
                                    s = i.clientX - b.clientX + r.x,
                                    a = i.clientY - b.clientY + r.y,
                                    c = e.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                                if (!U.active) {
                                    if (n && P(O(i.clientX - this._lastX), O(i.clientY - this._lastY)) < n) return;
                                    this._dragStarted()
                                }
                                this._appendGhost(), y = !0, w = i, K(o, "webkitTransform", c), K(o, "mozTransform", c), K(o, "msTransform", c), K(o, "transform", c), e.preventDefault()
                            }
                        },
                        _appendGhost: function() {
                            if (!o) {
                                var t, n = e.getBoundingClientRect(),
                                    r = K(e),
                                    s = this.options;
                                G(o = e.cloneNode(!0), s.ghostClass, !1), G(o, s.fallbackClass, !0), G(o, s.dragClass, !0), K(o, "top", n.top - S(r.marginTop, 10)), K(o, "left", n.left - S(r.marginLeft, 10)), K(o, "width", n.width), K(o, "height", n.height), K(o, "opacity", "0.8"), K(o, "position", "fixed"), K(o, "zIndex", "100000"), K(o, "pointerEvents", "none"), s.fallbackOnBody && A.body.appendChild(o) || i.appendChild(o), t = o.getBoundingClientRect(), K(o, "width", 2 * n.width - t.width), K(o, "height", 2 * n.height - t.height)
                            }
                        },
                        _onDragStart: function(t, n) {
                            var o = t.dataTransfer,
                                r = this.options;
                            this._offUpEvents(), g.checkPull(this, this, e, t), G(e, r.dragClass, !0), n ? ("touch" === n ? (z(A, "touchmove", this._onTouchMove), z(A, "touchend", this._onDrop), z(A, "touchcancel", this._onDrop), r.supportPointer && (z(A, "pointermove", this._onTouchMove), z(A, "pointerup", this._onDrop))) : (z(A, "mousemove", this._onTouchMove), z(A, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (o && (o.effectAllowed = "move", r.setData && r.setData.call(this, o, e)), z(A, "drop", this), this._dragStartId = ae(this._dragStarted))
                        },
                        _onDragOver: function(a) {
                            var c, l, u, p, h = this.el,
                                b = this.options,
                                w = b.group,
                                E = U.active,
                                T = g === w,
                                L = !1,
                                x = b.sort;
                            if (void 0 !== a.preventDefault && (a.preventDefault(), !b.dragoverBubble && a.stopPropagation()), !e.animated && (y = !0, b.handleReplacedDragElement && !e.parentNode && t && G(e = A.getElementById(t) || e, this.options.ghostClass, !0), E && !b.disabled && (T ? x || (p = !i.contains(e)) : v === this || (E.lastPullMode = g.checkPull(this, E, e, a)) && w.checkPut(this, E, e, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
                                if (F(a, b, this.el), q) return;
                                if (c = X(a.target, b.draggable, h), l = e.getBoundingClientRect(), v !== this && (v = this, L = !0), p) return W(E, !0), n = i, void(r || s ? i.insertBefore(e, r || s) : x || i.appendChild(e));
                                if (0 === h.children.length || h.children[0] === o || h === a.target && function(e, t) {
                                        var n = e.lastElementChild.getBoundingClientRect();
                                        return t.clientY - (n.top + n.height) > 5 || t.clientX - (n.left + n.width) > 5
                                    }(h, a)) {
                                    if (0 !== h.children.length && h.children[0] !== o && h === a.target && (c = h.lastElementChild), c) {
                                        if (c.animated) return;
                                        u = c.getBoundingClientRect()
                                    }
                                    W(E, T), !1 !== Z(i, h, e, l, c, u, a) && (e.contains(h) || (h.appendChild(e), n = h), this._animate(l, e), c && this._animate(u, c))
                                } else if (c && !c.animated && c !== e && void 0 !== c.parentNode[k]) {
                                    d !== c && (d = c, f = K(c), m = K(c.parentNode));
                                    var S = (u = c.getBoundingClientRect()).right - u.left,
                                        _ = u.bottom - u.top,
                                        C = j.test(f.cssFloat + f.display) || "flex" == m.display && 0 === m["flex-direction"].indexOf("row"),
                                        I = c.offsetWidth > e.offsetWidth,
                                        H = c.offsetHeight > e.offsetHeight,
                                        D = (C ? (a.clientX - u.left) / S : (a.clientY - u.top) / _) > .5,
                                        O = c.nextElementSibling,
                                        P = !1;
                                    if (C) {
                                        var R = e.offsetTop,
                                            N = c.offsetTop;
                                        P = R === N ? c.previousElementSibling === e && !I || D && I : c.previousElementSibling === e || e.previousElementSibling === c ? (a.clientY - u.top) / _ > .5 : N > R
                                    } else L || (P = O !== e && !H || D && H);
                                    var $ = Z(i, h, e, l, c, u, a, P);
                                    !1 !== $ && (1 !== $ && -1 !== $ || (P = 1 === $), q = !0, M(te, 30), W(E, T), e.contains(h) || (P && !O ? h.appendChild(e) : c.parentNode.insertBefore(e, P ? O : c)), n = e.parentNode, this._animate(l, e), this._animate(u, c))
                                }
                            }
                        },
                        _animate: function(e, t) {
                            var n = this.options.animation;
                            if (n) {
                                var o = t.getBoundingClientRect();
                                1 === e.nodeType && (e = e.getBoundingClientRect()), K(t, "transition", "none"), K(t, "transform", "translate3d(" + (e.left - o.left) + "px," + (e.top - o.top) + "px,0)"), t.offsetWidth, K(t, "transition", "all " + n + "ms"), K(t, "transform", "translate3d(0,0,0)"), clearTimeout(t.animated), t.animated = M(function() {
                                    K(t, "transition", ""), K(t, "transform", ""), t.animated = !1
                                }, n)
                            }
                        },
                        _offUpEvents: function() {
                            var e = this.el.ownerDocument;
                            Y(A, "touchmove", this._onTouchMove), Y(A, "pointermove", this._onTouchMove), Y(e, "mouseup", this._onDrop), Y(e, "touchend", this._onDrop), Y(e, "pointerup", this._onDrop), Y(e, "touchcancel", this._onDrop), Y(e, "pointercancel", this._onDrop), Y(e, "selectstart", this)
                        },
                        _onDrop: function(t) {
                            var a = this.el,
                                c = this.options;
                            clearInterval(this._loopId), clearInterval(T.pid), clearTimeout(this._dragStartTimer), ce(this._cloneId), ce(this._dragStartId), Y(A, "mouseover", this), Y(A, "mousemove", this._onTouchMove), this.nativeDraggable && (Y(A, "drop", this), Y(a, "dragstart", this._onDragStart)), this._offUpEvents(), t && (y && (t.preventDefault(), !c.dropBubble && t.stopPropagation()), o && o.parentNode && o.parentNode.removeChild(o), i !== n && "clone" === U.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r), e && (this.nativeDraggable && Y(e, "dragend", this), ee(e), e.style["will-change"] = "", G(e, this.options.ghostClass, !1), G(e, this.options.chosenClass, !1), Q(this, i, "unchoose", e, n, i, p), i !== n ? (h = oe(e, c.draggable)) >= 0 && (Q(null, n, "add", e, n, i, p, h), Q(this, i, "remove", e, n, i, p, h), Q(null, n, "sort", e, n, i, p, h), Q(this, i, "sort", e, n, i, p, h)) : e.nextSibling !== s && (h = oe(e, c.draggable)) >= 0 && (Q(this, i, "update", e, n, i, p, h), Q(this, i, "sort", e, n, i, p, h)), U.active && (null != h && -1 !== h || (h = p), Q(this, i, "end", e, n, i, p, h), this.save()))), this._nulling()
                        },
                        _nulling: function() {
                            i = e = n = o = s = r = a = c = l = b = w = y = h = d = f = v = g = U.active = null, R.forEach(function(e) {
                                e.checked = !0
                            }), R.length = 0
                        },
                        handleEvent: function(t) {
                            switch (t.type) {
                                case "drop":
                                case "dragend":
                                    this._onDrop(t);
                                    break;
                                case "dragover":
                                case "dragenter":
                                    e && (this._onDragOver(t), function(e) {
                                        e.dataTransfer && (e.dataTransfer.dropEffect = "move");
                                        e.preventDefault()
                                    }(t));
                                    break;
                                case "mouseover":
                                    this._onDrop(t);
                                    break;
                                case "selectstart":
                                    t.preventDefault()
                            }
                        },
                        toArray: function() {
                            for (var e, t = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) X(e = n[o], i.draggable, this.el) && t.push(e.getAttribute(i.dataIdAttr) || ne(e));
                            return t
                        },
                        sort: function(e) {
                            var t = {},
                                n = this.el;
                            this.toArray().forEach(function(e, o) {
                                var r = n.children[o];
                                X(r, this.options.draggable, n) && (t[e] = r)
                            }, this), e.forEach(function(e) {
                                t[e] && (n.removeChild(t[e]), n.appendChild(t[e]))
                            })
                        },
                        save: function() {
                            var e = this.options.store;
                            e && e.set(this)
                        },
                        closest: function(e, t) {
                            return X(e, t || this.options.draggable, this.el)
                        },
                        option: function(e, t) {
                            var n = this.options;
                            if (void 0 === t) return n[e];
                            n[e] = t, "group" === e && B(n)
                        },
                        destroy: function() {
                            var e = this.el;
                            e[k] = null, Y(e, "mousedown", this._onTapStart), Y(e, "touchstart", this._onTapStart), Y(e, "pointerdown", this._onTapStart), this.nativeDraggable && (Y(e, "dragover", this), Y(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
                                e.removeAttribute("draggable")
                            }), N.splice(N.indexOf(this._onDragOver), 1), this._onDrop(), this.el = e = null
                        }
                    }, z(A, "touchmove", function(e) {
                        U.active && e.preventDefault()
                    }), U.utils = {
                        on: z,
                        off: Y,
                        css: K,
                        find: J,
                        is: function(e, t) {
                            return !!X(e, t, e)
                        },
                        extend: se,
                        throttle: ie,
                        closest: X,
                        toggleClass: G,
                        clone: function(e) {
                            return C && C.dom ? C.dom(e).cloneNode(!0) : _ ? _(e).clone(!0)[0] : e.cloneNode(!0)
                        },
                        index: oe,
                        nextTick: ae,
                        cancelNextTick: ce
                    }, U.create = function(e, t) {
                        return new U(e, t)
                    }, U.version = "1.7.0", U
                }, e.exports = t()
            });

            function qc(e) {
                const t = e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (t) {
                    if (1 === t.length) {
                        const e = Pc(t[0]);
                        if (!e) return;
                        return Object.freeze({
                            start: e,
                            end: e
                        })
                    }
                    if (2 === t.length) {
                        const e = Pc(t[0]),
                            n = Pc(t[1]);
                        if (!e || !n) return;
                        return Fc(Object.freeze({
                            start: e,
                            end: n
                        }))
                    }
                } else;
            }

            function Oc(e) {
                const t = Fc(e),
                    n = t.start,
                    o = t.end;
                return null != n.column && null != o.column ? `L${n.line}C${n.column}-L${o.line}C${o.column}` : n.line === o.line ? `L${n.line}` : `L${n.line}-L${o.line}`
            }

            function Pc(e) {
                const t = e.match(/L(\d+)/),
                    n = e.match(/C(\d+)/);
                return t ? Object.freeze({
                    line: parseInt(t[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }

            function Rc(e, t, n) {
                let o = n.getLineElement,
                    r = n.getLineNumber;
                const i = o(e);
                if (!i) return;
                const s = r(i);
                if (null == s || s < 1) return;
                let a = 1 + t;
                for (const c of $c(i)) {
                    if (c === e) break;
                    a += c.textContent.length
                }
                return Object.freeze({
                    line: s,
                    column: a
                })
            }

            function Nc(e, t, n) {
                const o = [null, 0],
                    r = (0, n.getLineElement)(e.line);
                if (!r) return o;
                if (null == e.column) return [r, -1];
                let i = e.column - 1;
                const s = Array.from($c(r));
                for (let a = 0; a < s.length; a++) {
                    const e = s[a],
                        n = s[a + 1],
                        o = e.textContent.length;
                    if (i - o == 0) return t && n ? [n, 0] : [e, i];
                    if (i - o < 0) return [e, i];
                    i -= o
                }
                return o
            }

            function* $c(e) {
                const t = [e];
                for (; t.length;) {
                    const e = t.shift();
                    3 === e.nodeType ? yield e: t.unshift(...e.childNodes)
                }
            }

            function Fc(e) {
                const t = [e.start, e.end];
                return t.sort(Bc), t[0] === e.start && t[1] === e.end ? e : Object.freeze({
                    start: t[0],
                    end: t[1]
                })
            }

            function Bc(e, t) {
                return e.line === t.line && e.column === t.column ? 0 : e.line === t.line && "number" == typeof e.column && "number" == typeof t.column ? e.column - t.column : e.line - t.line
            }
            e("aY", Dc);
            let Uc = null;

            function Wc() {
                const e = document.querySelector(".js-reviews-container");
                e && setTimeout(() => (function(e) {
                    const t = c(e, ".js-review-state-classes"),
                        n = t.querySelectorAll(".js-pending-review-comment").length,
                        o = l(document, ".js-review-changes");
                    t.classList.toggle("is-review-pending", n > 0);
                    for (const r of document.querySelectorAll(".js-pending-review-comment-count")) r.textContent = String(n);
                    for (const r of document.querySelectorAll(".js-pending-comment-count-type")) Fa(n, r);
                    if (n > 0) {
                        o.textContent = o.getAttribute("data-pending-message") || "";
                        const t = l(e, ".js-reviews-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", () => t.classList.remove("anim-pulse-in"), {
                            once: !0
                        })
                    } else o.textContent = o.getAttribute("data-message") || ""
                })(e))
            }
            ke("pjax:click", ".js-pjax-capture-input", function() {
                Uc = function(e) {
                    const t = e.createElement("textarea");
                    return t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", x(e.body, "null.js:18"), e.body.appendChild(t), t.focus(), () => (t.blur(), t.remove(), t.value)
                }(document)
            }), ke("pjax:end", "#js-repo-pjax-container", function() {
                if (Uc) {
                    const e = Uc(),
                        t = document.querySelector(".js-pjax-restore-captured-input");
                    t instanceof HTMLInputElement && e && yt(t, e), Uc = null
                }
            }), ke("pjax:click", ".js-pjax-history-navigate", function(e) {
                x(e instanceof CustomEvent, "null.js:14"), e.currentTarget.href === function() {
                    const e = Qe[ot() - 1];
                    if (e) return e.url
                }() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : e.currentTarget.href === function() {
                    const e = Qe[ot() + 1];
                    if (e) return e.url
                }() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
            }), fe("link[rel=pjax-prefetch]", {
                constructor: HTMLLinkElement,
                initialize(e) {
                    ! function(e, t) {
                        Wi.set(e, t), t.catch(() => {})
                    }(e, function(e, t) {
                        const n = e.closest("[data-pjax-container]");
                        if (!n) throw new Error(`no pjax container for ${Bi(e)}`);
                        const o = as(n),
                            r = is(e.href);
                        return r.search += `${r.search?"&":""}_pjax=${encodeURIComponent(o)}`, T(r.href, {
                            headers: Object.assign({
                                Accept: "text/html",
                                "X-PJAX": "true",
                                "X-PJAX-Container": o
                            }, t && t.headers)
                        })
                    }(e, {
                        headers: {
                            Purpose: "prefetch"
                        }
                    }))
                }
            }), Dt(".js-inline-comment-form", async function(e, t) {
                await t.text(), Wc()
            }), Dt(".js-pending-review-comment .js-comment-delete", async function(e, t) {
                await t.text(), Wc()
            }), Dt(".js-resolvable-timeline-thread-form", async function(e, t) {
                try {
                    const o = await t.html();
                    c(e, ".js-resolvable-timeline-thread-container").replaceWith(o.html)
                } catch (n) {
                    Pr()
                }
            }), ke("click", ".js-resolvable-thread-toggler", function(e) {
                const t = c(e.target, ".js-resolvable-timeline-thread-container");
                c(e.target, ".js-resolvable-thread-toggler-container").classList.toggle("border-bottom"), l(t, ".js-resolvable-thread-contents").classList.toggle("d-none");
                for (const n of t.querySelectorAll(".js-resolvable-thread-toggler")) n.classList.toggle("d-none")
            });
            const Xc = new WeakMap;

            function Vc(e) {
                x(e instanceof CustomEvent, "null.js:18");
                const t = e.detail.editor;
                return Xc.set(e.target, t), t
            }
            ke("codeEditor:ready", ".js-code-editor", Vc);
            const zc = e("ba", {
                    Message: "render:hook:message",
                    AfterReady: "render:hook:afterready"
                }),
                Yc = "history:replace",
                Gc = /^\/([^\/]+)\/([^\/]+)\/actions(?:\/workflow-runs\/([^\/?]+))?/;

            function Kc(e, t) {
                const n = function(e) {
                    const t = Gc.exec(e);
                    x(null != t, "expected to be on actions page -- null.js:72");
                    const n = dt(t, 4),
                        o = n[1],
                        r = n[2],
                        i = n[3];
                    return {
                        owner: o,
                        name: r,
                        runID: i
                    }
                }(e);
                return function(e) {
                    let t = e.name,
                        n = e.owner,
                        o = e.runID;
                    return `/${n}/${t}/actions${o?`/workflow-runs/${o}`:""}`
                }({
                    owner: n.owner,
                    name: n.name,
                    runID: t.urlParams.runID
                })
            }
            async function Jc(e) {
                const t = e.form;
                x(t instanceof HTMLFormElement, "null.js:14"), l(t, "#release_draft", HTMLInputElement).value = "1", Zc(e, "saving");
                try {
                    const o = await Ut(t.action, {
                        method: t.method,
                        body: new FormData(t)
                    });
                    return Zc(e, "saved"), setTimeout(Zc, 5e3, e, "default"), xe(t, "release:saved", {
                        release: o
                    }), o
                } catch (n) {
                    throw Zc(e, "failed"), n
                }
            }

            function Qc(e) {
                x(e instanceof HTMLInputElement, "null.js:45");
                const t = l(c(e, ".js-releases-marketplace-publish-container"), ".js-releases-marketplace-publish-preview");
                e.checked ? t.classList.remove("d-none") : t.classList.add("d-none")
            }

            function Zc(e, t) {
                for (const n of e.querySelectorAll(".js-save-draft-button-state")) n.hidden = n.getAttribute("data-state") !== t;
                e.disabled = "saving" === t
            }

            function el(e) {
                const t = document.querySelector(".js-release-target-wrapper");
                if (null != t) {
                    switch (e) {
                        case "valid":
                            t.classList.add("d-none");
                            break;
                        case "loading":
                            break;
                        default:
                            t.classList.remove("d-none")
                    }
                    for (const t of document.querySelectorAll(".js-tag-status-message")) t.hidden = t.getAttribute("data-state") !== e
                }
            }
            ke(zc.Message, ".js-actions-page", e => {
                switch (x(e instanceof CustomEvent, "null.js:37"), e.detail.body) {
                    case Yc:
                        return void
                        function(e) {
                            const t = new URL(window.location.href, window.location.origin);
                            switch (e.page) {
                                case "actions":
                                    ! function(e, t) {
                                        at({}, "", Kc(e.pathname, t))
                                    }(t, e);
                                    break;
                                default:
                                    throw Error(`unknown page history update '${e.page}'`)
                            }
                        }(e.detail.payload)
                }
            }), ke("click", ".js-toggle-lang-stats", function() {
                const e = l(document, ".js-stats-switcher-viewport"),
                    t = 0 !== e.scrollTop ? "is-revealing-overview" : "is-revealing-lang-stats";
                e.classList.toggle(t)
            }), ke("change", ".js-releases-marketplace-publish-field", function(e) {
                Qc(e.currentTarget)
            }), fe(".js-releases-marketplace-publish-field", function(e) {
                Qc(e)
            }), ke("click", ".js-save-draft", function(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLButtonElement, "null.js:61"), Jc(t), e.preventDefault()
            }), ke("click", ".js-timeline-tags-expander", function(e) {
                c(e.currentTarget, ".js-timeline-tags").classList.remove("is-collapsed")
            }), ke("release:saved", ".js-release-form", function(e) {
                x(e instanceof CustomEvent, "null.js:82");
                const t = e.detail.release,
                    n = e.currentTarget,
                    o = n.getAttribute("data-repo-url"),
                    r = t.update_url || ol("tag", o, t.tag_name);
                if (n.setAttribute("action", r), t.update_authenticity_token) {
                    n.querySelector("input[name=authenticity_token]").value = t.update_authenticity_token
                }
                const i = t.edit_url || ol("edit", o, t.tag_name);
                at(hs(), document.title, i);
                const s = document.querySelector("#delete_release_confirm form");
                if (s) {
                    const e = t.delete_url || ol("tag", o, t.tag_name);
                    if (s.setAttribute("action", e), t.delete_authenticity_token) {
                        l(s, "input[name=authenticity_token]", HTMLInputElement).value = t.delete_authenticity_token
                    }
                }
                const a = n.querySelector("#release_id");
                if (!a.value) {
                    a.value = t.id;
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "_method", e.value = "put", n.appendChild(e)
                }
            }), ke("click", ".js-publish-release", function() {
                l(document, "#release_draft", HTMLInputElement).value = "0"
            });
            const tl = new WeakMap;
            async function nl(e) {
                if (!e.value) return;
                if (e.value === tl.get(e)) return;
                el("loading"), tl.set(e, e.value);
                const t = f(e, "data-url"),
                    n = new URL(t, window.location.origin),
                    o = new URLSearchParams(n.search.slice(1));
                o.append("tag_name", e.value), n.search = o.toString();
                try {
                    const t = await Ut(n);
                    "duplicate" === t.status && parseInt(e.getAttribute("data-existing-id")) === parseInt(t.release_id) ? el("valid") : (l(document, ".js-release-tag .js-edit-release-link").setAttribute("href", t.url), el(t.status))
                } catch (r) {
                    el("invalid")
                }
            }

            function ol(e, t, n) {
                return `${t}/releases/${e}/${n}`
            }

            function rl(e) {
                const t = c(e, "form", HTMLFormElement).querySelector(".js-previewable-comment-form");
                if (!t) return;
                let n = t.getAttribute("data-base-preview-url");
                n || (n = String(t.getAttribute("data-preview-url")), t.setAttribute("data-base-preview-url", n));
                const o = u(e, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
                    r = new URL(n, window.location.origin),
                    i = new URLSearchParams(r.search.slice(1));
                for (const s of o) s.value && i.append(s.name, s.value);
                r.search = i.toString(), t.setAttribute("data-preview-url", r.toString())
            }

            function il(e) {
                const t = e.currentTarget.querySelector("input.js-filterable-field");
                t && (t.focus(), xe(t, "filterable:change"))
            }

            function sl(e) {
                const t = c(e.currentTarget, ".js-select-menu").querySelector(".js-navigation-container"),
                    n = e.currentTarget;
                t && n instanceof HTMLElement && Ca(t, n)
            }

            function al(e) {
                if (e.querySelector(".js-task-list-field"))
                    for (const t of u(e, "task-lists", TaskListsElement)) t.disabled = !1
            }

            function cl(e, t, n) {
                const o = l(e, ".js-comment-update", HTMLFormElement);
                ! function(e) {
                    for (const t of u(e, "task-lists", TaskListsElement)) t.disabled = !0
                }(e);
                const r = o.elements.namedItem("task_list_track");
                r && r.remove();
                const i = o.elements.namedItem("task_list_operation");
                i && i.remove();
                const s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", t), o.appendChild(s);
                const a = document.createElement("input");
                if (a.setAttribute("type", "hidden"), a.setAttribute("name", "task_list_operation"), a.setAttribute("value", JSON.stringify(n)), o.appendChild(a), !o.elements.namedItem("task_list_key")) {
                    const e = f(l(o, ".js-task-list-field"), "name").split("[")[0],
                        t = document.createElement("input");
                    t.setAttribute("type", "hidden"), t.setAttribute("name", "task_list_key"), t.setAttribute("value", e), o.appendChild(t)
                }
                e.classList.remove("is-comment-stale"), wt(o)
            }
            fe("input.js-release-tag-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    nl(e), e.addEventListener("blur", function() {
                        nl(e)
                    })
                }
            }), ke("change", ".js-release-tag", function(e) {
                rl(e.currentTarget)
            }), fe(".js-release-form .js-previewable-comment-form", function(e) {
                rl(l(c(e, "form"), ".js-release-tag"))
            }), ke("deprecatedAjaxSuccess", ".js-select-menu:not([data-multiple])", function(e) {
                x(e.currentTarget instanceof HTMLElement, "null.js:20"), Ka(e.currentTarget)
            }), ke("deprecatedAjaxSend", ".js-select-menu:not([data-multiple])", function(e) {
                e.currentTarget.classList.add("is-loading")
            }), ke("deprecatedAjaxComplete", ".js-select-menu", function(e) {
                e.currentTarget.classList.remove("is-loading")
            }), ke("deprecatedAjaxError", ".js-select-menu", function(e) {
                e.currentTarget.classList.add("has-error")
            }), ke("menu:deactivate", ".js-select-menu", function(e) {
                e.currentTarget.classList.remove("is-loading", "has-error")
            }), ke("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item", function(e) {
                const t = e.currentTarget;
                if (!xe(t, "selectmenu:select")) return;
                const n = c(t, ".js-select-menu"),
                    o = n.querySelector(".js-navigation-item.selected");
                o && o.classList.remove("selected"), t.classList.add("selected"), t.classList.remove("indeterminate");
                for (const r of u(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)) yt(r, !0);
                xe(t, "selectmenu:selected"), n.classList.contains("is-loading") || Ka(n)
            }), ke("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item", function(e) {
                const t = e.currentTarget;
                if (!xe(t, "selectmenu:select")) return;
                const n = t.classList.contains("selected");
                t.classList.toggle("selected"), t.classList.remove("indeterminate");
                for (const o of u(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)) yt(o, !n);
                xe(t, "selectmenu:selected")
            }), ke("selectmenu:select", ".js-select-menu .js-navigation-item.disabled", function(e) {
                e.preventDefault()
            }), ke("selectmenu:selected", ".js-select-menu .js-navigation-item", function(e) {
                const t = e.currentTarget,
                    n = c(t, ".js-select-menu"),
                    o = t.querySelector(".js-select-button-text");
                if (o) {
                    const e = n.querySelector(".js-select-button");
                    e && (e.innerHTML = o.innerHTML)
                }
                const r = t.querySelector(".js-select-menu-item-gravatar");
                if (r) {
                    const e = n.querySelector(".js-select-button-gravatar");
                    e && (e.innerHTML = r.innerHTML)
                }
            }), ke("selectmenu:change", ".js-select-menu .select-menu-list", function(e) {
                const t = e.currentTarget,
                    n = Array.from(t.querySelectorAll(".js-navigation-item"));
                for (const r of n) r.classList.remove("last-visible");
                const o = n.filter(xs).pop();
                if (o && o.classList.add("last-visible"), !t.hasAttribute("data-filterable-for")) {
                    const n = e.target.classList.contains("filterable-empty");
                    t.classList.toggle("filterable-empty", n)
                }
            }), fe("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    c(e, ".select-menu-list").classList.add("filterable-empty")
                },
                remove(e) {
                    c(e, ".select-menu-list").classList.remove("filterable-empty")
                }
            }), ke("menu:activated", ".js-select-menu", il), ke("selectmenu:load", ".js-select-menu", il), ke("menu:deactivate", ".js-select-menu", function(e) {
                let t = e.currentTarget;
                const n = t.querySelector("input.js-filterable-field");
                n instanceof HTMLInputElement && (n.value = "", xe(n, "filterable:change"));
                for (const i of t.querySelectorAll(".js-navigation-item.selected")) {
                    const e = i.querySelector("input[type=radio], input[type=checkbox]");
                    e && (x(e instanceof HTMLInputElement, "null.js:37"), i.classList.toggle("selected", e.checked))
                }
                const o = document.activeElement;
                if (o && t.contains(o)) try {
                    o.blur()
                } catch (r) {}
            }), ke("menu:activate", ".js-select-menu", function(e) {
                const t = e.currentTarget.querySelector(".js-menu-target");
                t && t.classList.add("selected");
                const n = e.currentTarget.querySelector(".js-navigation-container");
                n && function(e) {
                    const t = Oa();
                    t && Sa.push(t), xa(e)
                }(n)
            }), ke("menu:deactivate", ".js-select-menu", function(e) {
                const t = e.currentTarget.querySelector(".js-menu-target");
                t && t.classList.remove("selected");
                const n = e.currentTarget.querySelector(".js-navigation-container");
                n && function(e) {
                    Aa(e), _a(e);
                    const t = Sa.pop();
                    t && xa(t)
                }(n)
            }), ke("filterable:change", ".js-select-menu .select-menu-list", sl), ke("selectmenu:tabchange", ".js-select-menu .select-menu-list", sl), ke("filterable:change", ".js-select-menu .select-menu-list, details-menu .select-menu-list", function(e) {
                x(e instanceof CustomEvent, "null.js:22");
                const t = e.currentTarget,
                    n = t.querySelector(".js-new-item-form");
                n && function(e, t, n) {
                    const o = n.length > 0 && ! function(e, t) {
                        for (const n of e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text")) {
                            const e = n.textContent.toLowerCase().trim();
                            if (e === t.toLowerCase()) return !0
                        }
                        return !1
                    }(e, n);
                    if (e.classList.toggle("is-showing-new-item-form", o), !o) return;
                    l(t, ".js-new-item-name").textContent = n;
                    const r = t.querySelector(".js-new-item-value");
                    (r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && (r.value = n)
                }(t, n, e.detail.inputField.value), xe(e.target, "selectmenu:change")
            }), ke("click", ".js-smoothscroll-anchor", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) return;
                const n = Ni(document, t.hash);
                n && (n.scrollIntoView({
                    behavior: "smooth"
                }), e.preventDefault())
            }), fe(".js-task-list-container .js-task-list-field", function(e) {
                al(c(e, ".js-task-list-container"))
            }), ke("task-lists-move", "task-lists", function(e) {
                x(e instanceof CustomEvent, "null.js:68");
                const t = e.detail,
                    n = t.src,
                    o = t.dst;
                cl(c(e.currentTarget, ".js-task-list-container"), "reordered", {
                    operation: "move",
                    src: n,
                    dst: o
                })
            }), ke("task-lists-check", "task-lists", function(e) {
                x(e instanceof CustomEvent, "null.js:75");
                const t = e.detail,
                    n = t.position,
                    o = t.checked;
                cl(c(e.currentTarget, ".js-task-list-container"), `checked:${o?1:0}`, {
                    operation: "check",
                    position: n,
                    checked: o
                })
            }), Dt(".js-task-list-container .js-comment-update", async function(e, t) {
                const n = c(e, ".js-task-list-container"),
                    o = e.elements.namedItem("task_list_track");
                o && o.remove();
                const r = e.elements.namedItem("task_list_operation");
                let i;
                r && r.remove();
                try {
                    i = await t.json()
                } catch (s) {
                    let e;
                    try {
                        e = JSON.parse(s.response.text)
                    } catch (a) {}
                    if (e && e.stale) {
                        const t = e.updated_markdown,
                            o = e.updated_html,
                            r = e.version;
                        if (t && o && r) {
                            const e = l(n, ".js-comment-body"),
                                i = l(n, ".js-body-version"),
                                s = l(n, ".js-task-list-field", HTMLTextAreaElement);
                            e.innerHTML = o, s.value = t, n.setAttribute("data-body-version", r), i instanceof HTMLInputElement && (i.value = r)
                        }
                    } else window.location.reload()
                }
                i && (r && i.json.source && (l(n, ".js-task-list-field", HTMLTextAreaElement).value = i.json.source), al(n))
            });
            const ll = 3e4;
            class ul extends Error {
                constructor(e) {
                    super(e), this.name = "LoginRequestDataError"
                }
            }

            function dl() {
                for (const t of document.querySelectorAll(".js-u2f-error")) t.hidden = !0;
                const e = document.querySelector(".js-u2f-login-waiting");
                null != e && (e.hidden = !1)
            }

            function fl(e, t) {
                ! function(e) {
                    const t = document.querySelector(e);
                    null != t && (t.hidden = !1);
                    const n = document.querySelector(".js-u2f-login-waiting");
                    null != n && (n.hidden = !0)
                }(t), console.error(e)
            }
            class ml {
                constructor() {
                    this.form = l(document, ".js-u2f-auth-form", HTMLFormElement), this.responseField = l(this.form, ".js-u2f-auth-response", HTMLInputElement);
                    const e = this.form.getAttribute("data-app-id"),
                        t = this.form.getAttribute("data-challenge"),
                        n = this.form.getAttribute("data-sign-requests");
                    if (null == e || null == t || null == n) throw new ul("Missing data needed for security key request.");
                    this.appId = e, this.challenge = t;
                    try {
                        this.signRequests = JSON.parse(n)
                    } catch (o) {
                        throw new ul("Invalid data for security key request.")
                    }
                }
                credentialRequestOptions() {
                    const e = this.signRequests.map(e => ({
                        id: Wt(Vt(e.keyHandle)),
                        type: "public-key"
                    }));
                    return {
                        publicKey: {
                            timeout: ll,
                            challenge: Wt(Vt(this.challenge)),
                            allowCredentials: e,
                            extensions: {
                                appid: this.appId
                            }
                        }
                    }
                }
                submit(e) {
                    this.responseField.value = JSON.stringify(e), xe(this.form, "submit") && this.form.submit()
                }
            }
            const pl = ".js-u2f-auth-error",
                hl = {
                    DOMException: ".js-u2f-auth-error",
                    InvalidStateError: ".js-u2f-auth-not-registered-error",
                    NotAllowedError: ".js-u2f-auth-timeout"
                },
                gl = {
                    4: ".js-u2f-auth-not-registered-error",
                    5: ".js-u2f-auth-timeout"
                };
            async function vl() {
                try {
                    const r = new ml;
                    dl();
                    const i = await (e = r.appId, t = r.challenge, n = r.signRequests, new Promise(function(o, r) {
                        window.u2f.sign(e, t, n, function(e) {
                            e.keyHandle ? o(e) : r(new nn("Signing request failed", on(e)))
                        })
                    }));
                    r.submit(i)
                } catch (o) {
                    fl(o, gl[o.code] || pl)
                }
                var e, t, n
            }
            async function bl() {
                try {
                    const t = new ml;
                    dl();
                    const n = zt();
                    x(n, "waitForWebauthnDevice() requires webauthn support -- null.js:154");
                    const o = await n.get(t.credentialRequestOptions());
                    t.submit(function(e) {
                        return {
                            id: Xt(e.rawId),
                            response: {
                                authenticatorData: Xt(e.response.authenticatorData),
                                clientDataJSON: Xt(e.response.clientDataJSON),
                                signature: Xt(e.response.signature),
                                userHandle: Xt(e.response.userHandle)
                            }
                        }
                    }(o))
                } catch (e) {
                    fl(e, hl[e.name] || pl)
                }
            }

            function wl() {
                Qt() ? bl() : vl()
            }
            fe(".js-webauthn-support", {
                constructor: HTMLInputElement,
                add(e) {
                    yt(e, Jt())
                }
            }), ke("click", ".js-u2f-auth-retry", function() {
                wl()
            }), fe(".js-u2f-auth-form-body", function(e) {
                const t = Yt() && Gt() || Qt();
                e.classList.toggle("unavailable", !t), t && wl()
            }), ke("socket:message", ".js-updatable-content", function(e) {
                x(e instanceof CustomEvent, "null.js:17");
                const t = e.detail.data || {},
                    n = t.gid,
                    o = t.wait;
                let r;
                if (n && e.target.getAttribute("data-gid") === n ? r = e.target : n ? r = e.target.querySelector(`[data-url][data-gid="${n}"]`) : e.currentTarget === e.target && (r = e.target), !(r instanceof HTMLElement)) return;
                const i = ri.bind(null, r);
                null == o ? i() : setTimeout(i, o)
            }), ke("upload:setup", ".js-upload-avatar-image", function(e) {
                x(e instanceof CustomEvent, "null.js:9");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-alambic-organization"),
                    o = e.currentTarget.getAttribute("data-alambic-owner-type"),
                    r = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.body.append("organization_id", n), o && t.body.append("owner_type", o), r && t.body.append("owner_id", r)
            }), ke("upload:complete", ".js-upload-avatar-image", function(e) {
                x(e instanceof CustomEvent, "null.js:26");
                const t = `/settings/avatars/${e.detail.result.id}`;
                Zt({
                    content: j(document, t)
                })
            });
            const yl = 2303741511,
                El = 4;
            class Tl {
                static fromFile(e) {
                    return new Promise(function(t, n) {
                        const o = new FileReader;
                        o.onload = function() {
                            x(o.result instanceof ArrayBuffer, "null.js:38"), t(new Tl(o.result))
                        }, o.onerror = function() {
                            n(o.error)
                        }, o.readAsArrayBuffer(e)
                    })
                }
                constructor(e) {
                    this.dataview = new DataView(e), this.pos = 0
                }
                advance(e) {
                    this.pos += e
                }
                readInt(e) {
                    const t = this,
                        n = function() {
                            switch (e) {
                                case 1:
                                    return t.dataview.getUint8(t.pos);
                                case 2:
                                    return t.dataview.getUint16(t.pos);
                                case 4:
                                    return t.dataview.getUint32(t.pos);
                                default:
                                    throw new Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(e), n
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(e) {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
                    return t.join("")
                }
                scan(e) {
                    if (this.readLong() !== yl) throw new Error("invalid PNG");
                    for (this.advance(4);;) {
                        const t = this.readLong(),
                            n = this.readString(4),
                            o = this.pos + t + El;
                        if (!1 === e.call(this, n, t) || "IEND" === n) break;
                        this.pos = o
                    }
                }
            }
            const Ll = .0254;

            function jl(e, t) {
                const n = e.value.substring(0, e.selectionStart),
                    o = e.value.substring(e.selectionEnd),
                    r = 0 === n.length || n.match(/\n$/) ? "" : "\n",
                    i = n + r + t;
                e.value = i + o, e.selectionStart = i.length, e.selectionEnd = e.selectionStart, e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), e.focus()
            }

            function kl(e) {
                const t = e.dataTransfer;
                if (!t) return;
                if (function(e) {
                        return Array.from(e.types).indexOf("Files") >= 0
                    }(t)) return;
                if (!Ml(t)) return;
                const n = _l(t);
                if (!n.some(Il)) return;
                e.stopPropagation(), e.preventDefault();
                const o = e.currentTarget;
                o instanceof HTMLTextAreaElement && jl(o, n.map(Sl).join(""))
            }

            function xl(e) {
                const t = e.dataTransfer;
                t && (t.dropEffect = "link")
            }

            function Al(e) {
                const t = e.clipboardData;
                if (!t || !Ml(t)) return;
                const n = _l(t);
                if (!n.some(Il)) return;
                e.stopPropagation(), e.preventDefault();
                const o = e.currentTarget;
                o instanceof HTMLTextAreaElement && jl(o, n.map(Sl).join(""))
            }

            function Sl(e) {
                return Il(e) ? `\n![](${e})\n` : e
            }

            function Ml(e) {
                return Array.from(e.types).indexOf("text/uri-list") >= 0
            }

            function _l(e) {
                return (e.getData("text/uri-list") || "").split("\r\n")
            }
            const Cl = /\.(gif|png|jpe?g)$/i;

            function Il(e) {
                return Cl.test(e)
            }

            function Hl(e) {
                const t = e.dataTransfer;
                if (!t) return;
                if (function(e) {
                        return Array.from(e.types).indexOf("Files") >= 0
                    }(t)) return;
                const n = Rl(t);
                if (!n) return;
                e.stopPropagation(), e.preventDefault();
                const o = e.currentTarget;
                o instanceof HTMLTextAreaElement && jl(o, Pl(n))
            }

            function Dl(e) {
                const t = e.dataTransfer;
                t && (t.dropEffect = "copy")
            }

            function ql(e) {
                if (!e.clipboardData) return;
                const t = Rl(e.clipboardData);
                if (!t) return;
                e.stopPropagation(), e.preventDefault();
                const n = e.currentTarget;
                n instanceof HTMLTextAreaElement && jl(n, Pl(t))
            }

            function Ol(e) {
                return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
            }

            function Pl(e) {
                const t = Array.from(e.querySelectorAll("tr")),
                    n = (o = t.shift(), Array.from(o.querySelectorAll("td, th")).map(Ol));
                var o;
                const r = n.map(() => "--");
                return `\n${`${n.join(" | ")}\n${r.join(" | ")}\n`}${t.map(e=>Array.from(e.querySelectorAll("td")).map(Ol).join(" | ")).join("\n")}\n\n`
            }

            function Rl(e) {
                if (-1 === Array.from(e.types).indexOf("text/html")) return;
                const t = e.getData("text/html");
                if (!/<table/i.test(t)) return;
                const n = function(e) {
                    const t = document.createElement("div");
                    return t.innerHTML = e, t.querySelector("table")
                }(t);
                return n && !n.closest(".js-comment") ? /\b(js|blob|diff)-./.test(n.className) ? null : n : void 0
            }

            function Nl(e) {
                const t = e.clipboardData;
                if (!t || ! function(e) {
                        return Array.from(e.types).indexOf("text/x-gfm") >= 0
                    }(t)) return;
                const n = e.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const o = t.getData("text/x-gfm");
                o && (e.stopPropagation(), e.preventDefault(), jl(n, o))
            }

            function $l(e) {
                return `${Fl(e)?"!":""}[Uploading ${e.name}…]()`
            }

            function Fl(e) {
                return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1
            }
            fe(".js-paste-markdown", {
                subscribe: function(e) {
                    return function(e) {
                            e.addEventListener("dragover", Dl), e.addEventListener("drop", Hl), e.addEventListener("paste", ql)
                        }(e),
                        function(e) {
                            e.addEventListener("dragover", xl), e.addEventListener("drop", kl), e.addEventListener("paste", Al)
                        }(e),
                        function(e) {
                            e.addEventListener("paste", Nl)
                        }(e), {
                            unsubscribe: () => {
                                ! function(e) {
                                    e.removeEventListener("dragover", Dl), e.removeEventListener("drop", Hl), e.removeEventListener("paste", ql)
                                }(e),
                                function(e) {
                                    e.removeEventListener("dragover", xl), e.removeEventListener("drop", kl), e.removeEventListener("paste", Al)
                                }(e),
                                function(e) {
                                    e.removeEventListener("paste", Nl)
                                }(e)
                            }
                        }
                }
            });
            const Bl = 144;

            function Ul(e) {
                return l(c(e, "form", HTMLFormElement), "#release_id", HTMLInputElement).value
            }
            ke("upload:setup", ".js-upload-markdown-image", function(e) {
                x(e instanceof CustomEvent, "null.js:52");
                const t = l(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
                t.setCustomValidity("uploading"), Ms(t, `${$l(e.detail.file)}\n`)
            }), ke("upload:complete", ".js-upload-markdown-image", async function(e) {
                x(e instanceof CustomEvent, "null.js:59");
                const t = e.detail,
                    n = l(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                    o = $l(t.file);

                function r(e) {
                    let r = `[${t.file.name}](${t.policy.asset.href})`;
                    if (Fl(t.file)) {
                        const n = function(e) {
                                return e.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
                            }(t.file.name).replace(/\.[^.]+$/, "").replace(/\./g, " "),
                            o = t.policy.asset.href;
                        if (e && e.ppi === Bl) {
                            r = `<img width="${Math.round(e.width/2)}" alt="${n}" src="${o}">`
                        } else r = `![${n}](${o})`
                    }
                    n.setCustomValidity(""), Ss(n, o, r)
                }
                try {
                    r(await async function(e) {
                        if ("image/png" !== e.type) return null;
                        const t = e.slice(0, 10240, e.type),
                            n = await Tl.fromFile(t),
                            o = {
                                width: 0,
                                height: 0,
                                ppi: 1
                            };
                        return n.scan(function(e) {
                            switch (e) {
                                case "IHDR":
                                    return o.width = this.readLong(), o.height = this.readLong(), !0;
                                case "pHYs":
                                    {
                                        const e = this.readLong(),
                                            t = this.readLong();
                                        let n;
                                        return 1 === this.readChar() && (n = Ll),
                                        n && (o.ppi = Math.round((e + t) / 2 * n)),
                                        !1
                                    }
                                case "IDAT":
                                    return !1
                            }
                            return !0
                        }), o
                    }(t.file))
                } catch (i) {
                    r(), setTimeout(function() {
                        throw i
                    })
                }
            }), ke("upload:error", ".js-upload-markdown-image", function(e) {
                x(e instanceof CustomEvent, "null.js:95");
                const t = l(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                    n = $l(e.detail.file);
                t.setCustomValidity(""), Ss(t, n, "")
            }), ke("upload:invalid", ".js-upload-markdown-image", function(e) {
                x(e instanceof CustomEvent, "null.js:103");
                const t = l(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                    n = $l(e.detail.file);
                t.setCustomValidity(""), Ss(t, n, "")
            }), ke("upload:setup", ".js-upload-marketplace-listing-screenshot", function(e) {
                x(e instanceof CustomEvent, "null.js:9");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-marketplace-listing-id");
                n && t.body.append("marketplace_listing_id", n)
            }), ke("upload:complete", ".js-upload-marketplace-listing-screenshot", async function(e) {
                const t = f(e.currentTarget, "data-screenshots-url"),
                    n = l(document, ".js-marketplace-listing-screenshots-container"),
                    o = await j(document, t);
                n.innerHTML = "", n.appendChild(o)
            }), ke("upload:setup", ".js-upload-marketplace-listing-hero-card-background", function(e) {
                x(e instanceof CustomEvent, "null.js:8");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-marketplace-listing-id");
                n && t.body.append("marketplace_listing_id", n)
            }), ke("upload:complete", ".js-upload-marketplace-listing-hero-card-background", function(e) {
                x(e instanceof CustomEvent, "null.js:19");
                const t = e.detail,
                    n = t.policy;
                l(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = n.asset.id || t.result.id;
                const o = l(document, ".js-hero-listing-container"),
                    r = n.asset.href || t.result.href;
                o.style.backgroundImage = `url(${r})`
            }), ke("click", ".js-release-remove-file", function(e) {
                const t = c(e.currentTarget, ".js-release-file");
                t.classList.add("delete"), l(t, "input.destroy", HTMLInputElement).value = "true"
            }), ke("click", ".js-release-undo-remove-file", function(e) {
                const t = c(e.currentTarget, ".js-release-file");
                t.classList.remove("delete"), l(t, "input.destroy", HTMLInputElement).value = ""
            });
            let Wl = null;

            function Xl(e, t) {
                const n = t.body;
                x(n instanceof FormData, "null.js:49"), n.append("release_id", Ul(e));
                const o = u(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement);
                if (o.length) {
                    const e = o.map(e => e.value);
                    n.append("deletion_candidates", e.join(","))
                }
            }
            ke("release:saved", ".js-release-form", function(e) {
                const t = e.currentTarget;
                Wl = null;
                let n = !1;
                for (const r of t.querySelectorAll(".js-releases-field .js-release-file")) r.classList.contains("delete") ? r.remove() : r.classList.contains("js-template") || (n = !0);
                const o = l(t, ".js-releases-field");
                o.classList.toggle("not-populated", !n), o.classList.toggle("is-populated", n)
            }), ke("upload:setup", ".js-upload-release-file", function(e) {
                x(e instanceof CustomEvent, "null.js:60");
                const t = e.detail,
                    n = t.policyRequest,
                    o = t.preprocess,
                    r = e.currentTarget;
                if (Ul(r)) return void Xl(r, n);
                if (!Wl) {
                    const e = l(document, ".js-save-draft", HTMLButtonElement);
                    Wl = Jc(e)
                }
                const i = Xl.bind(null, r, n);
                o.push(Wl.then(i))
            }), ke("upload:start", ".js-upload-release-file", function(e) {
                x(e instanceof CustomEvent, "null.js:83");
                const t = e.detail.policy;
                l(e.currentTarget, ".js-upload-meter").classList.remove("d-none");
                const n = t.asset.replaced_asset;
                if (n)
                    for (const o of u(document, ".js-releases-field .js-release-file .id", HTMLInputElement)) Number(o.value) === n && c(o, ".js-release-file").remove()
            }), ke("upload:complete", ".js-upload-release-file", function(e) {
                x(e instanceof CustomEvent, "null.js:101");
                const t = e.detail,
                    n = t.policy,
                    o = l(document, ".js-releases-field"),
                    r = l(o, ".js-template").cloneNode(!0);
                r.classList.remove("d-none", "js-template"), l(r, "input.id", HTMLInputElement).value = n.asset.id || t.result.id;
                const i = n.asset.name || n.asset.href.split("/").pop();
                for (const a of r.querySelectorAll(".js-release-asset-filename")) a instanceof HTMLInputElement ? a.value = i : a.textContent = i;
                const s = n.asset.size ? `(${(n.asset.size/1048576).toFixed(2)} MB)` : "";
                l(r, ".js-release-asset-filesize").textContent = s, o.appendChild(r), o.classList.remove("not-populated"), o.classList.add("is-populated"), l(e.currentTarget, ".js-upload-meter").classList.add("d-none")
            }), ke("upload:progress", ".js-upload-release-file", function(e) {
                x(e instanceof CustomEvent, "null.js:136"), l(e.currentTarget, ".js-upload-meter").style.width = `${e.detail.percent}%`
            }), ke("click", ".js-upload-repository-image-button", function() {
                l(document, ".js-repository-image-file-input", HTMLInputElement).click()
            }), ke("upload:setup", ".js-upload-repository-image", function(e) {
                x(e instanceof CustomEvent, "null.js:13"), l(document, ".js-remove-repository-image-button").hidden = !0;
                const t = e.detail.policyRequest,
                    n = f(e.currentTarget, "data-repository-id");
                t.body.append("repository_id", n)
            }), ke("upload:complete", ".js-upload-repository-image", function(e) {
                x(e instanceof CustomEvent, "null.js:25");
                const t = e.detail,
                    n = t.policy,
                    o = n.asset.id || t.result.id,
                    r = n.asset.href || t.result.href;
                l(document, ".js-repository-image-id", HTMLInputElement).value = o, l(document, ".js-remove-repository-image-button").hidden = !1, l(document, ".js-repository-image-container").style.backgroundImage = `url(${r})`
            });
            let Vl = null;
            const zl = new WeakMap;

            function Yl(e) {
                e.classList.remove("is-progress-bar");
                const t = c(e, ".js-upload-manifest-file-container");
                l(t, ".js-upload-progress").classList.remove("active"), l(t, ".js-upload-meter-text .js-upload-meter-filename").textContent = ""
            }

            function Gl(e) {
                return e._path ? `${e._path}/${e.name}` : e.name
            }

            function Kl(e) {
                Yl(e.currentTarget)
            }

            function Jl(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function Ql(e, t) {
                Gs(new Xs(e), t)
            }

            function Zl(e) {
                switch (e) {
                    case "image/gif":
                        return "image.gif";
                    case "image/png":
                        return "image.png";
                    case "image/jpeg":
                        return "image.jpg"
                }
            }

            function eu(e) {
                const t = e.dataTransfer;
                t && Jl(t) && e.preventDefault()
            }

            function tu(e) {
                const t = e.dataTransfer;
                t && Jl(t) && e.preventDefault()
            }
            ke("upload:drop:setup", ".js-upload-manifest-file", function(e) {
                x(e instanceof CustomEvent, "null.js:54");
                const t = e.detail.files,
                    n = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
                t.length > n && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
            }), ke("upload:drop:setup", ".js-upload-manifest-tree-view", function(e) {
                x(e instanceof CustomEvent, "null.js:64"), e.preventDefault();
                const t = e.detail.upload,
                    n = l(document, "#js-repo-pjax-container");
                n.addEventListener("pjax:success", () => {
                    t(l(n, ".js-upload-manifest-file"))
                }, {
                    once: !0
                }), Ji({
                    url: f(e.currentTarget, "data-drop-url"),
                    container: n
                })
            }), ke("upload:setup", ".js-upload-manifest-file", async function(e) {
                x(e instanceof CustomEvent, "null.js:84");
                const t = e.detail,
                    n = t.policyRequest,
                    o = t.preprocess,
                    r = e.currentTarget;

                function i() {
                    n.body.append("upload_manifest_id", zl.get(r))
                }
                if (function(e, t) {
                        const n = l(c(e, ".js-upload-manifest-file-container"), ".js-upload-progress");
                        n.classList.add("active"), e.classList.add("is-progress-bar");
                        const o = l(n, ".js-upload-meter-text");
                        l(o, ".js-upload-meter-range-start").textContent = String(t.batch.uploaded + 1), l(o, ".js-upload-meter-range-end").textContent = String(t.batch.size)
                    }(r, e.detail), zl.get(r)) return void i();
                if (Vl) return void o.push(Vl.then(i));
                const s = c(r, ".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form");
                Vl = Ut(s.action, {
                    method: s.method,
                    body: new FormData(s)
                });
                const a = dt(function() {
                        let e, t;
                        const n = new Promise((n, o) => {
                            e = n, t = o
                        });
                        return x(e, "null.js:140"), x(t, "null.js:141"), [n, e, t]
                    }(), 2),
                    u = a[0],
                    d = a[1];
                o.push(u.then(i));
                const f = await Vl,
                    m = l(document, ".js-manifest-commit-form", HTMLFormElement).elements.namedItem("manifest_id");
                x(m instanceof HTMLInputElement, "null.js:123"), m.value = f.upload_manifest.id, zl.set(r, f.upload_manifest.id), Vl = null, d()
            }), ke("upload:start", ".js-upload-manifest-file", function(e) {
                x(e instanceof CustomEvent, "null.js:154");
                const t = e.detail,
                    n = l(c(e.currentTarget, ".js-upload-manifest-file-container"), ".js-upload-progress"),
                    o = l(n, ".js-upload-meter-text");
                l(o, ".js-upload-meter-range-start").textContent = t.batch.uploaded + 1, l(o, ".js-upload-meter-filename").textContent = Gl(t.file)
            }), ke("upload:complete", ".js-upload-manifest-file", function(e) {
                x(e instanceof CustomEvent, "null.js:169");
                const t = e.detail,
                    n = l(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
                l(n, ".name").textContent = Gl(t.file);
                const o = t.policy.asset.id || t.result.id,
                    r = l(n, ".js-remove-manifest-file-form", HTMLFormElement).elements.namedItem("file_id");
                x(r instanceof HTMLInputElement, "null.js:185"), r.value = o;
                const i = l(document, ".js-manifest-file-list");
                i.classList.remove("d-none"), e.currentTarget.classList.add("is-file-list"), l(document, ".js-upload-progress").classList.add("is-file-list"), l(i, ".js-manifest-file-list-root").appendChild(n), t.batch.isFinished() && Yl(e.currentTarget)
            }), ke("upload:progress", ".js-upload-manifest-file", function(e) {
                x(e instanceof CustomEvent, "null.js:204");
                const t = e.detail;
                l(c(e.currentTarget, ".js-upload-manifest-file-container"), ".js-upload-meter").style.width = `${t.batch.percent()}%`
            }), ke("upload:error", ".js-upload-manifest-file", Kl), ke("upload:invalid", ".js-upload-manifest-file", Kl), Dt(".js-remove-manifest-file-form", async function(e, t) {
                await t.html();
                const n = c(e, ".js-manifest-file-list-root");
                if (c(e, ".js-manifest-file-entry").remove(), !n.hasChildNodes()) {
                    c(n, ".js-manifest-file-list").classList.add("d-none"), l(document, ".js-upload-manifest-file").classList.remove("is-file-list"), l(document, ".js-upload-progress").classList.remove("is-file-list")
                }
            }), fe(".js-manifest-ready-check", {
                initialize(e) {
                    !async function(e) {
                        const t = f(e, "data-redirect-url");
                        try {
                            await k(f(e, "data-poll-url")), window.location = t
                        } catch (n) {
                            l(document, ".js-manifest-ready-check").classList.add("d-none"), l(document, ".js-manifest-ready-check-failed").classList.remove("d-none")
                        }
                    }(e)
                }
            }), ke("upload:setup", ".js-upload-enterprise-installation-user-accounts-upload", function(e) {
                x(e instanceof CustomEvent, "null.js:8");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-business-id");
                n && t.body.append("business_id", n);
                const o = e.currentTarget.getAttribute("data-enterprise-installation-id");
                o && t.body.append("enterprise_installation_id", o)
            }), ke("upload:complete", ".js-upload-enterprise-installation-user-accounts-upload", function(e) {
                x(e instanceof CustomEvent, "null.js:24");
                const t = e.detail,
                    n = t.policy,
                    o = l(e.currentTarget, ".js-enterprise-installation-user-accounts-upload-id", HTMLInputElement);
                o.value = n.asset.id || t.result.id;
                const r = l(e.currentTarget, ".js-enterprise-installation-id", HTMLInputElement),
                    i = e.currentTarget.getAttribute("data-enterprise-installation-id");
                i && (r.value = i);
                const s = o.form;
                s && s.submit()
            });
            let nu = null;

            function ou(e) {
                if (du) return;
                const t = e.currentTarget;
                x(t instanceof Element, "null.js:71"), nu && clearTimeout(nu), nu = setTimeout(() => t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                n && Jl(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function ru(e) {
                e.dataTransfer && (e.dataTransfer.dropEffect = "none"), x(e.currentTarget instanceof Element, "null.js:94"), e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
            }

            function iu(e) {
                e.target instanceof Element && e.target.classList.contains("js-document-dropzone") && (x(e.currentTarget instanceof Element, "null.js:105"), e.currentTarget.classList.remove("dragover"))
            }

            function su(e) {
                const t = document.body;
                x(t, "null.js:130");
                const n = e.currentTarget;
                x(n instanceof Element, "null.js:133"), n.classList.remove("dragover"), t.classList.remove("dragover");
                const o = e.dataTransfer;
                o && Jl(o) && (!async function(e, t) {
                    const n = await ea(t, e.hasAttribute("data-directory-upload"));
                    n.length ? !xe(e, "upload:drop:setup", {
                        upload: Ql.bind(null, n),
                        files: n
                    }) || Ql(n, e) : zs(e, "is-hidden-file")
                }(n, o), e.stopPropagation(), e.preventDefault())
            }

            function au(e) {
                if (!e.clipboardData) return;
                if (!e.clipboardData.items) return;
                const t = Array.from(e.clipboardData.items).map(e => [e, Zl(e.type)]).filter(e => e[1]).shift();
                if (!t) return;
                const n = dt(t, 1)[0].getAsFile();
                x(e.currentTarget instanceof HTMLElement, "null.js:173"), x(n, "null.js:174"), Ql([n], e.currentTarget), e.preventDefault()
            }

            function cu(e) {
                const t = e.target;
                t instanceof HTMLInputElement && t.classList.contains("js-manual-file-chooser") && (e.currentTarget instanceof FileAttachmentElement ? e.currentTarget.upload(t.files) : (x(e.currentTarget instanceof Element, "null.js:194"), Ql(t.files, e.currentTarget)), t.value = "")
            }

            function lu(e) {
                let t, n = e.currentTarget;
                x(n instanceof HTMLElement, "null.js:207"), zs(t = n.classList.contains("js-uploadable-container") ? n : l(n, ".js-uploadable-container, file-attachment"), "is-default")
            }
            let uu = 0,
                du = !1;

            function fu() {
                du = !0
            }

            function mu() {
                du = !1
            }
            var pu;
            fe(".js-document-dropzone", {
                add(e) {
                    const t = document.body;
                    x(t, "null.js:234"), t.addEventListener("dragstart", fu), t.addEventListener("dragend", mu), t.addEventListener("dragenter", ou), t.addEventListener("dragover", ou), t.addEventListener("dragleave", iu), e.addEventListener("drop", su)
                },
                remove(e) {
                    const t = document.body;
                    x(t, "null.js:245"), t.removeEventListener("dragstart", fu), t.removeEventListener("dragend", mu), t.removeEventListener("dragenter", ou), t.removeEventListener("dragover", ou), t.removeEventListener("dragleave", iu), e.removeEventListener("drop", su)
                }
            }), fe(".js-uploadable-container, file-attachment", {
                add(e) {
                    0 == uu++ && (document.addEventListener("drop", eu), document.addEventListener("dragover", tu)), e.addEventListener("change", cu);
                    const t = e.closest("form");
                    t && t.addEventListener("reset", lu)
                },
                remove(e) {
                    0 == --uu && (document.removeEventListener("drop", eu), document.removeEventListener("dragover", tu)), e.removeEventListener("change", cu);
                    const t = e.closest("form");
                    t && t.removeEventListener("reset", lu)
                }
            }), fe(".js-uploadable-container", {
                add(e) {
                    e.addEventListener("dragenter", ou), e.addEventListener("dragover", ou), e.addEventListener("dragleave", ru), e.addEventListener("drop", su), e.addEventListener("paste", au)
                },
                remove(e) {
                    e.removeEventListener("dragenter", ou), e.removeEventListener("dragover", ou), e.removeEventListener("dragleave", ru), e.removeEventListener("drop", su), e.removeEventListener("paste", au)
                }
            }), ke("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
                const t = e.currentTarget;
                x(t instanceof HTMLButtonElement || t instanceof HTMLInputElement, "null.js:160"), t.form && !e.defaultPrevented && vt(t)
            }), Dt("form[data-remote]", function(e, t, n) {
                "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json"), xe(e, "deprecatedAjaxSend", {
                    request: n
                }), t.text().catch(e => {
                    if (e.response) return e.response;
                    throw e
                }).then(t => {
                    t.status < 300 ? xe(e, "deprecatedAjaxSuccess") : xe(e, "deprecatedAjaxError", {
                        error: t.statusText,
                        status: t.status,
                        text: t.text
                    })
                }, t => {
                    xe(e, "deprecatedAjaxError", {
                        error: t.message,
                        status: 0,
                        text: null
                    })
                }).then(() => {
                    xe(e, "deprecatedAjaxComplete")
                })
            }), ke("deprecatedAjaxComplete", "form", function(e) {
                let t = e.currentTarget;
                x(t instanceof HTMLFormElement, "null.js:171");
                const n = gt(t);
                n && n.remove()
            }), Ht(e => {
                const t = gt(e);
                t && t.remove()
            }), pu = rc, It.push(pu);
            e("bp", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]), e("bq", ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);

            function hu(e) {
                const t = new WeakMap;
                for (const n of e) t.set(n, n.getBoundingClientRect());
                return t
            }
            async function gu(e, t, n) {
                const o = t.get(e),
                    r = n.get(e);
                x(o && r, "Must have old and new positions for the element to animate -- null.js:25");
                const i = o.left - r.left,
                    s = o.top - r.top;
                0 === i && 0 === s || (await Wr(), e.style.transform = `translateZ(0) translate(${i}px, ${s}px)`, e.style.transition = "transform 0s", await Wr(), e.style.transform = "", e.style.transition = "transform 500ms", await new Promise(t => e.addEventListener("transitionend", t, {
                    once: !0
                })), e.style.transition = "")
            }
            const vu = ["assignee", "author", "is", "label", "repo", "review", "state", "status", "type"],
                bu = ["assignee", "label"],
                wu = /[^\s:]+:("(?:\\"|.)*?"|[^\s]*)|[^\s]+/g;

            function yu(e, t) {
                let n = e[t];
                return n || (n = {
                    tokenFilters: [],
                    matchIfMissing: !1
                }, e[t] = n), n
            }

            function Eu(e, t, n) {
                const o = e.tokenFilters.find(e => e.token === t);
                o ? o.negated = n : e.tokenFilters.push({
                    token: t,
                    negated: n
                }), e.matchIfMissing = !1
            }

            function Tu(e) {
                const t = e.match(wu) || [],
                    n = {};
                for (const o of t) {
                    const e = vu.find(e => o.match(new RegExp(`^-?${e}:.*`)));
                    if (e) {
                        const t = o.replace(new RegExp(`^-?${e}:\\s*"?(.*?)"?\\s*$`), "$1").replace(/\\(")/g, "$1");
                        if (t.length > 0) {
                            Eu(yu(n, e), t, o.startsWith("-"))
                        }
                    } else {
                        const e = bu.find(e => o === `no:${e}`);
                        if (e) yu(n, e).matchIfMissing = !0;
                        else if (o.length > 0) {
                            Eu(yu(n, "title"), o, !1)
                        }
                    }
                }
                return n
            }
            let Lu, ju;

            function ku() {
                return l(document, ".js-card-filter-input", HTMLInputElement).value.trim().toLowerCase()
            }

            function xu(e, t) {
                for (const o in t) {
                    const r = e.getAttribute(`data-card-${o}`) || "";
                    let i = [];
                    "" !== r.trim() && (i = JSON.parse(r));
                    const s = t[o];
                    if (s.matchIfMissing) {
                        if (i.length > 0) return !1
                    } else
                        for (const e of s.tokenFilters)
                            if ("title" === o) {
                                if (!Au(e.token, i)) return !1
                            } else {
                                const t = (n = e.token, -1 !== i.indexOf(n));
                                if (e.negated) {
                                    if (t && i.length > 0) return !1
                                } else if (!t) return !1
                            }
                }
                var n;
                return !0
            }

            function Au(e, t) {
                return t.some(t => t.startsWith(e))
            }

            function Su() {
                const e = ku();
                for (const t of document.querySelectorAll(".js-project-columns-container .js-project-column")) {
                    const n = l(t, ".js-filtered-column-card-count");
                    if (e.length > 0) {
                        const e = t.querySelectorAll(".js-project-column-card:not(.d-none)").length;
                        n.textContent = `${e.toString()} result${1!==e?"s":""}`
                    }
                    n.classList.toggle("d-none", 0 === e.length)
                }
            }

            function Mu(e) {
                const t = function() {
                    const e = ku();
                    return ju !== e && (ju = e, Lu = Tu(e)), Lu
                }();
                let n = xu(e, t);
                if (!n)
                    for (const o of e.querySelectorAll(".js-issue-note, .js-issue-note-reference"))
                        if (n = xu(o, t)) break;
                e.classList.toggle("d-none", !n)
            }

            function _u() {
                const e = l(document, ".js-card-filter-input", HTMLInputElement),
                    t = ku();
                l(document, ".js-card-filter-clear").classList.toggle("d-none", 0 === t.length),
                    function(e, t) {
                        const n = new URL(window.location.href, window.location.origin),
                            o = new URLSearchParams(n.search.slice(1));
                        "" === t ? o.delete(e) : o.set(e, t), n.search = o.toString(), at(tt(), document.title, n.toString())
                    }(e.name, t),
                    function(e, t) {
                        for (const n of document.querySelectorAll(".js-project-fullscreen-link")) {
                            const o = new URL(n.getAttribute("href") || "", window.location.origin),
                                r = new URLSearchParams(o.search.slice(1));
                            "" === t ? r.delete(e) : r.set(e, t), o.search = r.toString(), n.setAttribute("href", o.toString())
                        }
                    }(e.name, t)
            }

            function Cu() {
                for (const e of document.querySelectorAll(".js-project-columns-container .js-project-column-card")) Mu(e);
                Su(), _u()
            }
            const Iu = /:"[^"]*"?$/,
                Hu = /(^|\s+)[^\s:]+$/,
                Du = /^(\s|$)/;
            const qu = /(^|\s)[^\s:]+$/,
                Ou = /\S*$/;

            function Pu() {
                const e = document.querySelector(".js-card-filter-suggester");
                e instanceof HTMLElement && (e.classList.remove("js-active-navigation-container"), e.classList.add("d-none"))
            }
        }
    }
});
//# sourceMappingURL=frameworks-9658b35e.js.map