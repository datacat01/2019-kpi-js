webpackJsonp([2], {
    0: function(e, t, n) {
        function r(e, t) {
            Array.prototype.forEach.call(e, t)
        }

        function i() {
            r(document.querySelectorAll(".coververse__document-cover, .coververse__device-image-img"), function(e) {
                e.getAttribute("data-src") && (e.setAttribute("style", "background-image: url(" + e.getAttribute("data-src") + ")"), e.removeAttribute("data-src"))
            })
        }

        function o(e) {
            return e.preventDefault(), e.target.classList.contains("secondary-navigation-scroll--publishers") ? void _.animateScroll(document.querySelector(".value-propositions").offsetTop - A) : (0 === window.scrollY && _.animateScroll(document.querySelector(".secondary-navigation").offsetTop - A), r(document.querySelectorAll(".coververse__main--active"), function(e) {
                e.classList.remove("coververse__main--active")
            }), void r(document.querySelectorAll(e.target.hash.replace("#", ".")), function(e) {
                e.classList.add("coververse__main--active")
            }))
        }

        function a(e) {
            e.addEventListener("click", o)
        }

        function s(e) {
            var t = !!e.target.hash && window.location.pathname === e.target.pathname,
                n = !e.metaKey && !e.shiftKey && !e.ctrlKey,
                r = e.target && "_blank" === e.target.target;
            return n && !t && !r
        }

        function u(e) {
            function t() {
                s(e) && (window.location = e.target.href)
            }
            var n = e.target.dataset.track.split(" ");
            s(e) && e.preventDefault(), Promise.all(n.map(function(e) {
                return O({
                    type: e
                })
            })).then(t, t)
        }

        function c(e) {
            e.addEventListener("click", u)
        }

        function l() {
            document.body.addEventListener("click", function(e) {
                var t = document.querySelector(".secondary-navigation__sub-nav-container--active");
                t && !e.target.matches(".js-secondary-navigation__link") && t.classList.remove("secondary-navigation__sub-nav-container--active")
            }), r(document.querySelectorAll("[data-track]"), c), r(document.querySelectorAll(".js-secondary-navigation__link"), function(e) {
                e.addEventListener("click", function(t) {
                    i();
                    var n = e.querySelector(".secondary-navigation__sub-nav-container"),
                        r = document.querySelector(".secondary-navigation__sub-nav-container--active");
                    return r && r.classList.remove("secondary-navigation__sub-nav-container--active"), setTimeout(w, 1e3), n ? void n.classList.add("secondary-navigation__sub-nav-container--active") : void o(t)
                })
            }), r(document.querySelectorAll(".secondary-navigation__sub-nav-link"), a);
            var e = document.querySelector(".js-hero__next-section-link");
            e && e.addEventListener("click", function(e) {
                e.preventDefault(), _.animateScroll(document.querySelector("#local-navigation").offsetTop - A)
            })
        }

        function f(e) {
            var t = e.getBoundingClientRect();
            return t.width > 0 && t.height > 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) && t.bottom >= 0
        }

        function d(e) {
            var t = e.href && e.href.match(/[\/]([^\/]+)[\/]docs[\/]([^\/]+)$/),
                n = e.style.backgroundImage.match(/[\/]([0-9]+-[0-9a-z]+)[\/]/);
            return t && n && {
                username: t[1],
                docname: t[2],
                documentId: n[1]
            }
        }

        function p(e) {
            var t = e.href && e.href.match(/[\/]s[\/](\d+)/);
            return t && t[1]
        }

        function g() {
            var e = document.querySelectorAll(".coververse__main--active .coververse__document-cover");
            return Array.prototype.slice.call(e).filter(f).reduce(function(e, t) {
                var n = d(t);
                return n ? e.concat(n) : e
            }, [])
        }

        function h() {
            var e = document.querySelectorAll('#storyBannerWidgetApp a[href*="/s/"]');
            return Array.prototype.slice.call(e).filter(f).reduce(function(e, t) {
                var n = p(t);
                return "string" == typeof n ? e.concat(n) : e
            }, [])
        }

        function m(e) {
            var t = e.filter(function(e) {
                return I.indexOf(e.documentId) < 0
            }).map(function(e) {
                return {
                    type: "document_impression",
                    doc_id: e.documentId,
                    doc_creator: e.username,
                    doc_name: e.docname,
                    ad_id: null,
                    page: 1,
                    stream_origin: ["0", "anon_landing_page", "unknown"],
                    stream_ranking: 1
                }
            });
            P(t), Array.prototype.push.apply(I, t.map(function(e) {
                return e.doc_id
            }))
        }

        function v(e) {
            var t = e.filter(function(e) {
                return N.indexOf(e) < 0
            }).map(function(e) {
                return {
                    type: "story_impression",
                    story_id: e
                }
            });
            P(t), Array.prototype.push.apply(N, t.map(function(e) {
                return e.story_id
            }))
        }

        function y(e) {
            P({
                type: "document_click",
                doc_id: e.documentId,
                doc_creator: e.username,
                doc_name: e.docname,
                ad_id: null,
                ad_token: null,
                stream_origin: ["0", "anon_landing_page", "unknown"],
                stream_ranking: 1
            })
        }

        function b(e) {
            P({
                type: "story_click",
                story_id: e
            })
        }

        function w() {
            F || (F = T(function() {
                F = null, m(g()), v(h())
            }))
        }

        function C() {
            window.addEventListener("load", w, !1), window.addEventListener("scroll", w, !1), window.addEventListener("resize", w, !1), document.querySelector(".coververse").addEventListener("click", function(e) {
                var t = d(e.target);
                t && y(t)
            }, !0), r(document.querySelectorAll('#storyBannerWidgetApp a[href*="/s/"]'), function(e) {
                e.addEventListener("click", function(e) {
                    var t = p(e.currentTarget);
                    t && b(t)
                })
            })
        }
        var _ = n(291),
            x = n(36).initMixpanel,
            k = n(36).initMonitor,
            S = n(36).initWebsite,
            E = {
                pingbackHost: window.CONFIG_OPTIONS.hosts.pingback,
                fetch: window.fetch,
                logger: console
            },
            O = k(E),
            P = S(E);
        x(window.CONFIG_OPTIONS.tracking.mixpanel);
        var A = 52,
            T = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout(function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }, 1)
            },
            I = [],
            N = [],
            F = null;
        ! function() {
            _.init({
                speed: 1e3,
                easing: "easeInOutCubic"
            }), l(), C(), O({
                type: "anonlanding.impression"
            }), setTimeout(i, 2e3)
        }()
    },
    36: function(e, t, n) {
        ! function(e, r) {
            r(t, n(75), n(70), n(79))
        }(this, function(e, t, n, r) {
            "use strict";

            function i(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (u) {
                    i = !0, o = u
                } finally {
                    try {
                        r || null == s["return"] || s["return"]()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }

            function o(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return i(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function a(e) {
                return function(t) {
                    if (!t || Array.isArray(t) && 0 === t.length) return Promise.resolve();
                    var n = Array.isArray(t) ? t : [t],
                        r = n.map(function(e) {
                            return Object.assign({
                                version: "1.0.0"
                            }, e)
                        }),
                        i = {
                            type: "monitor",
                            version: "2.2.0",
                            origin: S,
                            data: r
                        };
                    return E(i, e)
                }
            }

            function s(e) {
                return function(t, n, r) {
                    if (!t || Array.isArray(t) && 0 === t.length) return Promise.resolve();
                    var i = Object.assign({}, n, {
                            browser_size: "".concat(window.innerWidth, "x").concat(window.innerWidth),
                            events: Array.isArray(t) ? t : [t]
                        }),
                        o = {
                            type: "website",
                            version: "2.2.0",
                            origin: S,
                            data: {
                                username: document.cookie.replace(/(?:(?:^|.*;\s*)site.model.username\s*=\s*([^;]*).*$)|^.*$/, "$1") || null,
                                ui_language: document.documentElement && document.documentElement.lang || null,
                                location: window.location.href.toString(),
                                referrer: r || document.referrer || null,
                                version: "2.2.2",
                                contexts: [i]
                            }
                        };
                    return E(o, e)
                }
            }

            function u(e, t, n, r) {
                var i = document.createElement("script");
                i.id = e, i.async = !0, i.src = t, i.onload = function() {
                    n && n()
                }, i.onerror = function() {
                    r && r(new Error("Failed to load script ".concat(t)))
                }, document.head && document.head.appendChild(i)
            }

            function c() {
                var e = window.mixpanel || [];
                if (!e.__SV) {
                    try {
                        var t, n, r, i = window.location,
                            o = i.hash;
                        t = function(e, t) {
                            return n = e.match(new RegExp(t + "=([^&]*)")), n ? n[1] : null
                        }, o && t(o, "state") && (r = JSON.parse(decodeURIComponent(t(o, "state"))), "mpeditor" === r.action && (window.sessionStorage.setItem("_mpcehash", o), history.replaceState(r.desiredHash || "", document.title, i.pathname + i.search)))
                    } catch (a) {}
                    var s, c, l = "mixpanel";
                    window[l] = e, e._i = [], e.init = function(t, n, r) {
                        function i(e, t) {
                            var n = t.split(".");
                            2 === n.length && (e = e[n[0]], t = n[1]), e[t] = function() {
                                e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                            }
                        }
                        var o = e;
                        for ("undefined" != typeof r ? o = e[r] = [] : r = l, o.people = o.people || [], o.toString = function(e) {
                                var t = l;
                                return r !== l && (t += "." + r), e || (t += " (stub)"), t
                            }, o.people.toString = function() {
                                return o.toString(1) + ".people (stub)"
                            }, s = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "), c = 0; c < s.length; c++) i(o, s[c]);
                        e._i.push([t, n, r])
                    }, e.__SV = 1.2;
                    var f;
                    f = "undefined" != typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === document.location.protocol && O.match(/^\/\//) ? "https:" + O : O, u("mixpanel", f)
                }
                return window.mixpanel
            }

            function l(e, t, n, i) {
                var o = r.parse(t),
                    a = n.reduce(function(e, t) {
                        return e[t] = o[t] || null, e
                    }, {});
                if (n.some(function(e) {
                        return a[e]
                    })) a[i] = Date.now(), e.register(a);
                else {
                    var s = parseInt(e.get_property(i), 10) || 0,
                        u = 6048e5,
                        c = Date.now() - s > u;
                    c && (e.unregister(i), Object.keys(a).forEach(function(t) {
                        return e.unregister(t)
                    }))
                }
            }

            function f(e) {
                var t = ["issuu_product", "issuu_subproduct", "issuu_context", "issuu_cta"],
                    n = r.parse(e);
                return t.reduce(function(e, t) {
                    return e[t] = n[t] || null, e
                }, {})
            }

            function d(e) {
                return window.ga || (u("google-analytics", "https://www.google-analytics.com/analytics.js"), window.ga = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                    (window.ga.q = window.ga.q || []).push(t)
                }, window.ga.l = +new Date, window.ga("create", {
                    trackingId: e,
                    cookieDomain: "auto"
                })), window.ga
            }

            function p(e) {
                return window.__qc || (window._qevents = [], u("quantcast", "https://secure.quantserve.com/quant.js")),
                    function() {
                        window.__qc && (window.__qc.qpixelsent = []), window._qevents.push({
                            qacct: e
                        })
                    }
            }

            function g(e, t) {
                return t.noPlanInfo ? Promise.resolve() : x && !t.forcePlanCheck ? x : x = n.fetchData("/res/licensing/".concat(e, "/publisher_plan")).then(function(e) {
                    return "ok" === e.rsp.stat ? Promise.resolve(e.rsp._content) : Promise.reject(e.rsp._content)
                }).then(function(e) {
                    return e.plan
                })["catch"](function(e) {
                    return _.error("could not get user license, %o", e), "free"
                })
            }

            function h(e) {
                if ("undefined" != typeof document) {
                    var t = new RegExp("(?:(?:^|.*;\\s*)".concat(e, "\\s*\\=\\s*([^;]*).*$)|^.*$"));
                    return document.cookie.replace(t, "$1")
                }
                return ""
            }

            function m(e) {
                var t = h("site.model.username"),
                    n = h("site.model.token");
                return t && n ? g(t, e).then(function(e) {
                    return {
                        username: t,
                        current_plan: e
                    }
                }) : Promise.resolve({})
            }

            function v(e) {
                if (k && window.mixpanel) return k;
                var t = new Promise(function(t) {
                        return c().init(e, {
                            loaded: t
                        })
                    }).then(function() {
                        l(window.mixpanel, window.location.search, ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], "utm_timestamp"), l(window.mixpanel, window.location.search, ["embed_id", "embed_domain", "embed_context", "embed_cta"], "embed_timestamp")
                    }),
                    n = function(e) {
                        return new Promise(function(t) {
                            return setTimeout(t, e)
                        })
                    };
                return k = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return Promise.all([m(i), Promise.race([t, n(500)])]).then(function(t) {
                        var i = o(t, 1),
                            a = i[0],
                            s = Object.assign({}, a, r, f(window.location.search)),
                            u = window.mixpanel.track(e, s);
                        return u ? _.info('tracking "'.concat(u.event, '" with payload %o'), u.properties) : _.info('(deffered) tracking "'.concat(e, '" with payload %o'), s), n(500)
                    })["catch"](function(e) {
                        _.error("error while attempting to track, %o", e)
                    })
                }, k.__native = window.mixpanel, k
            }

            function y(e) {
                return window.fbq ? window.fbq : (window.fbq = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; e > n; n++) t[n] = arguments[n];
                    if (window.fbq.callMethod) {
                        var r;
                        (r = window.fbq).callMethod.apply(r, t)
                    } else window.fbq.queue.push(t)
                }, window._fbq || (window._fbq = window.fbq), window.fbq.push = window.fbq, window.fbq.loaded = !0, window.fbq.version = "2.0", window.fbq.queue = [], u("facebook-pixel", "https://connect.facebook.net/en_US/fbevents.js"), window.fbq("init", e), _.info("facebook tracker initialized"), window.fbq)
            }

            function b(e, t) {
                return function(n, r) {
                    var i = new Image(1, 1);
                    _.info("tracking Adwords Conversion (id: ".concat(e, " label: ").concat(t, ") with ").concat(n, " ").concat(r)), i.src = "https://www.googleadservices.com/pagead/conversion/".concat(e, "/?value=").concat(n, "&currency_code=").concat(r, "&label=").concat(t, "&guid=ON&script=0")
                }
            }
            t = t && t.hasOwnProperty("default") ? t["default"] : t;
            var w = "issuu-libs-tracking-micro",
                C = "3.9.3",
                _ = {
                    error: t("".concat(w, ":").concat(C, ":error")),
                    info: t("".concat(w, ":").concat(C, ":info"))
                };
            _.info.log = console.log.bind(console);
            var x, k, S = "".concat(w, "-v").concat(C),
                E = function(e, t) {
                    var n = t.pingbackHost || "pingback.tissuu.com",
                        r = t.pingbackUrl || "//".concat(n, "/ping"),
                        i = t.logger || _,
                        o = t.fetch || window.fetch;
                    return o(r, {
                        method: "post",
                        credentials: "include",
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "text/plain;charset=UTF-8"
                        },
                        body: JSON.stringify(e)
                    }).then(function() {
                        return i.info("pingback sent with payload %o", e)
                    })["catch"](function(t) {
                        return i.error("".concat(e.type, " pingback failed:"), t)
                    })
                },
                O = "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
            e.initWebsite = s, e.initMonitor = a, e.initGoogleAnalytics = d, e.initQuantcast = p, e.initMixpanel = v, e.initFacebookPixel = y, e.initAdwordsConversion = b, Object.defineProperty(e, "__esModule", {
                value: !0
            })
        })
    },
    70: function(e, t, n) {
        (function(e) {
            ! function(e, r) {
                r(t, n(71))
            }(this, function(t, n) {
                "use strict";

                function r(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }

                function i(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e,
                        i = t.noCache,
                        o = r(t, []);
                    return i && (n = "".concat(e).concat(-1 !== e.indexOf("?") ? "&" : "?", "_=").concat(Date.now()), o = Object.assign({}, o, {
                        headers: Object.assign({}, o.headers, {
                            "Cache-Control": "no-cache"
                        })
                    })), y(n, o)
                }

                function o(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "undefined" != typeof document && (t = document.cookie.replace(/(?:(?:^|.*;\s*)CSRF-TOKEN\s*=\s*([^;]*).*$)|^.*$/, "$1")), n && n.req && (t = n.req.cookies["CSRF-TOKEN"]), y(e, Object.assign({}, n, {
                        method: n && n.method ? n.method : "POST",
                        headers: Object.assign({
                            "X-Csrf-Token": t
                        }, n.headers)
                    }))
                }
                n = n && n.hasOwnProperty("default") ? n["default"] : n;
                var a = "issuu-libs-request",
                    s = "1.7.0",
                    u = {
                        error: n("".concat(a, ":").concat(s, ":error")),
                        info: n("".concat(a, ":").concat(s, ":info"))
                    };
                u.info.log = console.log.bind(console);
                var c;
                try {
                    c = "production" === e.env.NODE_ENV
                } catch (l) {
                    c = !0
                }
                var f = function(e) {
                        return Object.keys(e).reduce(function(t, n) {
                            return t + "".concat(n, "=").concat(e[n], "; ")
                        }, "").slice(0, -2)
                    },
                    d = function(e) {
                        return Object.keys(e).map(function(t) {
                            return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
                        }).join("&")
                    },
                    p = "ERROR_REQUEST",
                    g = "ERROR_AUTH",
                    h = "ERROR_API",
                    m = "ERROR_NOT_FOUND",
                    v = "ERROR_JSON_DECODE",
                    y = function(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = Date.now();
                        if (n.fetch) t = n.fetch;
                        else {
                            if ("undefined" == typeof fetch) throw new Error('No usable fetch function found. Use a polyfill or provide it as "fetch" option');
                            t = fetch
                        }
                        var i = Object.assign({
                                credentials: "same-origin",
                                timeout: c ? 4e3 : void 0
                            }, n, {
                                body: JSON.stringify(n.body),
                                req: void 0
                            }),
                            o = n.cookies || {};
                        n.req && (o = Object.assign({}, o, {
                            "site.model.username": n.req.cookies["site.model.username"],
                            "site.model.token": n.req.cookies["site.model.token"]
                        })), i = Object.assign({}, i, {
                            headers: Object.assign({
                                Cookie: f(o)
                            }, n.headers)
                        });
                        var a = i.method || "GET",
                            s = e;
                        return n.body && "GET" === a && (s = "".concat(e.split("?")[0], "?").concat(d(n.body || {})), i.body = void 0), t(s, i)["catch"](function(e) {
                            return u.error("".concat(a, " ").concat(s, " ").concat(p, " ").concat(e.message)), Promise.reject({
                                type: p,
                                url: s,
                                options: n,
                                nativeError: e
                            })
                        }).then(function(e) {
                            return e.text().then(function(e) {
                                return i.textResponse ? e || "" : e ? JSON.parse(e) : {}
                            })["catch"](function(e) {
                                return u.error("".concat(a, " ").concat(s, " ").concat(v, " ").concat(e.message)), Promise.reject({
                                    type: v,
                                    url: s,
                                    nativeError: e
                                })
                            }).then(function(t) {
                                var n = Date.now() - r;
                                if (!e.ok) {
                                    var i;
                                    i = 403 === e.status ? g : 404 === e.status ? m : h, u.error("".concat(a, " ").concat(s, " ").concat(i, " ").concat(e.status, ": ").concat(e.statusText, ", response: %o"), t);
                                    var o = "string" == typeof t ? {
                                        payload: t
                                    } : t;
                                    return Promise.reject(Object.assign({}, o, {
                                        type: i,
                                        url: s
                                    }))
                                }
                                return u.info("".concat(a, " ").concat(s, " ").concat(e.status, " ").concat(n, "ms")), t
                            })
                        })
                    };
                t.ERROR_REQUEST = p, t.ERROR_AUTH = g, t.ERROR_API = h, t.ERROR_NOT_FOUND = m, t.ERROR_JSON_DECODE = v, t.makeRequest = y, t.fetchData = i, t.doAction = o, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            })
        }).call(t, n(31))
    },
    71: function(e, t, n) {
        (function(r) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o() {
                return "undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs) ? !0 : "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }

            function a(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
                    var n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    var r = 0,
                        i = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (r++, "%c" === e && (i = r))
                    }), t.splice(i, 0, n)
                }
            }

            function s() {
                var e;
                return "object" === ("undefined" == typeof console ? "undefined" : i(console)) && console.log && (e = console).log.apply(e, arguments)
            }

            function u(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (n) {}
            }

            function c() {
                var e;
                try {
                    e = t.storage.getItem("debug")
                } catch (n) {}
                return !e && "undefined" != typeof r && "env" in r && (e = r.env.DEBUG), e
            }

            function l() {
                try {
                    return localStorage
                } catch (e) {}
            }
            t.log = s, t.formatArgs = a, t.save = u, t.load = c, t.useColors = o, t.storage = l(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(72)(t);
            var f = e.exports.formatters;
            f.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
        }).call(t, n(31))
    },
    72: function(e, t, n) {
        "use strict";

        function r(e) {
            function t(e) {
                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }

            function r(e) {
                function n() {
                    if (n.enabled) {
                        for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                        var o = n,
                            s = Number(new Date),
                            u = s - (a || s);
                        o.diff = u, o.prev = a, o.curr = s, a = s, t[0] = r.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                        var c = 0;
                        t[0] = t[0].replace(/%([a-zA-Z%])/g, function(e, n) {
                            if ("%%" === e) return e;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var a = t[c];
                                e = i.call(o, a), t.splice(c, 1), c--
                            }
                            return e
                        }), r.formatArgs.call(o, t);
                        var l = o.log || r.log;
                        l.apply(o, t)
                    }
                }
                var a;
                return n.namespace = e, n.enabled = r.enabled(e), n.useColors = r.useColors(), n.color = t(e), n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), n
            }

            function i() {
                var e = r.instances.indexOf(this);
                return -1 !== e ? (r.instances.splice(e, 1), !0) : !1
            }

            function o(e, t) {
                return r(this.namespace + ("undefined" == typeof t ? ":" : t) + e)
            }

            function a(e) {
                r.save(e), r.names = [], r.skips = [];
                var t, n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                for (t = 0; i > t; t++) n[t] && (e = n[t].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    var o = r.instances[t];
                    o.enabled = r.enabled(o.namespace)
                }
            }

            function s() {
                r.enable("")
            }

            function u(e) {
                if ("*" === e[e.length - 1]) return !0;
                var t, n;
                for (t = 0, n = r.skips.length; n > t; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; n > t; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }

            function c(e) {
                return e instanceof Error ? e.stack || e.message : e
            }
            return r.debug = r, r["default"] = r, r.coerce = c, r.disable = s, r.enable = a, r.enabled = u, r.humanize = n(73), Object.keys(e).forEach(function(t) {
                r[t] = e[t]
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
        }
        e.exports = r
    },
    73: function(e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * f;
                        case "weeks":
                        case "week":
                        case "w":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return void 0
                    }
                }
            }
        }

        function r(e) {
            var t = Math.abs(e);
            return t >= c ? Math.round(e / c) + "d" : t >= u ? Math.round(e / u) + "h" : t >= s ? Math.round(e / s) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function i(e) {
            var t = Math.abs(e);
            return t >= c ? o(e, t, c, "day") : t >= u ? o(e, t, u, "hour") : t >= s ? o(e, t, s, "minute") : t >= a ? o(e, t, a, "second") : e + " ms"
        }

        function o(e, t, n, r) {
            var i = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (i ? "s" : "")
        }
        var a = 1e3,
            s = 60 * a,
            u = 60 * s,
            c = 24 * u,
            l = 7 * c,
            f = 365.25 * c;
        e.exports = function(e, t) {
            t = t || {};
            var o = typeof e;
            if ("string" === o && e.length > 0) return n(e);
            if ("number" === o && isNaN(e) === !1) return t["long"] ? i(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    75: function(e, t, n) {
        (function(r) {
            "use strict";

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o() {
                return "undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs) ? !0 : "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }

            function a(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
                    var n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    var r = 0,
                        i = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(e) {
                        "%%" !== e && (r++, "%c" === e && (i = r))
                    }), t.splice(i, 0, n)
                }
            }

            function s() {
                var e;
                return "object" === ("undefined" == typeof console ? "undefined" : i(console)) && console.log && (e = console).log.apply(e, arguments)
            }

            function u(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (n) {}
            }

            function c() {
                var e;
                try {
                    e = t.storage.getItem("debug")
                } catch (n) {}
                return !e && "undefined" != typeof r && "env" in r && (e = r.env.DEBUG), e
            }

            function l() {
                try {
                    return localStorage
                } catch (e) {}
            }
            t.log = s, t.formatArgs = a, t.save = u, t.load = c, t.useColors = o, t.storage = l(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(76)(t);
            var f = e.exports.formatters;
            f.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
        }).call(t, n(31))
    },
    76: function(e, t, n) {
        "use strict";

        function r(e) {
            function t(e) {
                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }

            function r(e) {
                function n() {
                    if (n.enabled) {
                        for (var e = arguments.length, t = new Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                        var o = n,
                            s = Number(new Date),
                            u = s - (a || s);
                        o.diff = u, o.prev = a, o.curr = s, a = s, t[0] = r.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                        var c = 0;
                        t[0] = t[0].replace(/%([a-zA-Z%])/g, function(e, n) {
                            if ("%%" === e) return e;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var a = t[c];
                                e = i.call(o, a), t.splice(c, 1), c--
                            }
                            return e
                        }), r.formatArgs.call(o, t);
                        var l = o.log || r.log;
                        l.apply(o, t)
                    }
                }
                var a;
                return n.namespace = e, n.enabled = r.enabled(e), n.useColors = r.useColors(), n.color = t(e), n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), n
            }

            function i() {
                var e = r.instances.indexOf(this);
                return -1 !== e ? (r.instances.splice(e, 1), !0) : !1
            }

            function o(e, t) {
                return r(this.namespace + ("undefined" == typeof t ? ":" : t) + e)
            }

            function a(e) {
                r.save(e), r.names = [], r.skips = [];
                var t, n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                for (t = 0; i > t; t++) n[t] && (e = n[t].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    var o = r.instances[t];
                    o.enabled = r.enabled(o.namespace)
                }
            }

            function s() {
                r.enable("")
            }

            function u(e) {
                if ("*" === e[e.length - 1]) return !0;
                var t, n;
                for (t = 0, n = r.skips.length; n > t; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; n > t; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }

            function c(e) {
                return e instanceof Error ? e.stack || e.message : e
            }
            return r.debug = r, r["default"] = r, r.coerce = c, r.disable = s, r.enable = a, r.enabled = u, r.humanize = n(77), Object.keys(e).forEach(function(t) {
                r[t] = e[t]
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
        }
        e.exports = r
    },
    77: function(e, t) {
        function n(e) {
            if (e = String(e), !(e.length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]),
                        r = (t[2] || "ms").toLowerCase();
                    switch (r) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return n * f;
                        case "weeks":
                        case "week":
                        case "w":
                            return n * l;
                        case "days":
                        case "day":
                        case "d":
                            return n * c;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return n * u;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return n * s;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return n * a;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return n;
                        default:
                            return void 0
                    }
                }
            }
        }

        function r(e) {
            var t = Math.abs(e);
            return t >= c ? Math.round(e / c) + "d" : t >= u ? Math.round(e / u) + "h" : t >= s ? Math.round(e / s) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms"
        }

        function i(e) {
            var t = Math.abs(e);
            return t >= c ? o(e, t, c, "day") : t >= u ? o(e, t, u, "hour") : t >= s ? o(e, t, s, "minute") : t >= a ? o(e, t, a, "second") : e + " ms"
        }

        function o(e, t, n, r) {
            var i = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (i ? "s" : "")
        }
        var a = 1e3,
            s = 60 * a,
            u = 60 * s,
            c = 24 * u,
            l = 7 * c,
            f = 365.25 * c;
        e.exports = function(e, t) {
            t = t || {};
            var o = typeof e;
            if ("string" === o && e.length > 0) return n(e);
            if ("number" === o && isNaN(e) === !1) return t["long"] ? i(e) : r(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    },
    79: function(e, t) {
        "use strict";

        function n(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }

        function r(e) {
            for (var t, r = /([^=?&]+)=?([^&]*)/g, i = {}; t = r.exec(e); i[n(t[1])] = n(t[2]));
            return i
        }

        function i(e, t) {
            t = t || "";
            var n = [];
            "string" != typeof t && (t = "?");
            for (var r in e) o.call(e, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
            return n.length ? t + n.join("&") : ""
        }
        var o = Object.prototype.hasOwnProperty;
        t.stringify = i, t.parse = r
    },
    291: function(e, t, n) {
        var r, i, o;
        (function(n) {
            /*! smooth-scroll v10.1.0 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
            ! function(n, a) {
                i = [], r = a(n), o = "function" == typeof r ? r.apply(t, i) : r, !(void 0 !== o && (e.exports = o))
            }("undefined" != typeof n ? n : this.window || this.global, function(e) {
                "use strict";
                var t, n, r, i, o, a, s, u = {},
                    c = "querySelector" in document && "addEventListener" in e,
                    l = {
                        selector: "[data-scroll]",
                        selectorHeader: null,
                        speed: 500,
                        easing: "easeInOutCubic",
                        offset: 0,
                        callback: function() {}
                    },
                    f = function() {
                        var e = {},
                            t = !1,
                            n = 0,
                            r = arguments.length;
                        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);
                        for (var i = function(n) {
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t && "[object Object]" === Object.prototype.toString.call(n[r]) ? e[r] = f(!0, e[r], n[r]) : e[r] = n[r])
                            }; r > n; n++) {
                            var o = arguments[n];
                            i(o)
                        }
                        return e
                    },
                    d = function(e) {
                        return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
                    },
                    p = function(e, t) {
                        var n, r, i = t.charAt(0),
                            o = "classList" in document.documentElement;
                        for ("[" === i && (t = t.substr(1, t.length - 2), n = t.split("="), n.length > 1 && (r = !0, n[1] = n[1].replace(/"/g, "").replace(/'/g, ""))); e && e !== document && 1 === e.nodeType; e = e.parentNode) {
                            if ("." === i)
                                if (o) {
                                    if (e.classList.contains(t.substr(1))) return e
                                } else if (new RegExp("(^|\\s)" + t.substr(1) + "(\\s|$)").test(e.className)) return e;
                            if ("#" === i && e.id === t.substr(1)) return e;
                            if ("[" === i && e.hasAttribute(n[0])) {
                                if (!r) return e;
                                if (e.getAttribute(n[0]) === n[1]) return e
                            }
                            if (e.tagName.toLowerCase() === t) return e
                        }
                        return null
                    },
                    g = function(e) {
                        "#" === e.charAt(0) && (e = e.substr(1));
                        for (var t, n = String(e), r = n.length, i = -1, o = "", a = n.charCodeAt(0); ++i < r;) {
                            if (t = n.charCodeAt(i), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                            o += t >= 1 && 31 >= t || 127 == t || 0 === i && t >= 48 && 57 >= t || 1 === i && t >= 48 && 57 >= t && 45 === a ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(i) : "\\" + n.charAt(i)
                        }
                        return "#" + o
                    },
                    h = function(e, t) {
                        var n;
                        return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
                    },
                    m = function(e, t, n) {
                        var r = 0;
                        if (e.offsetParent)
                            do r += e.offsetTop, e = e.offsetParent; while (e);
                        return r = Math.max(r - t - n, 0), Math.min(r, y() - v())
                    },
                    v = function() {
                        return Math.max(document.documentElement.clientHeight, e.innerHeight || 0)
                    },
                    y = function() {
                        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                    },
                    b = function(e) {
                        return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
                    },
                    w = function(e) {
                        return e ? d(e) + e.offsetTop : 0
                    },
                    C = function(t, n, r) {
                        r || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, n))
                    };
                u.animateScroll = function(n, r, a) {
                    var u = b(r ? r.getAttribute("data-options") : null),
                        c = f(t || l, a || {}, u),
                        d = "[object Number]" === Object.prototype.toString.call(n),
                        p = d || !n.tagName ? null : n;
                    if (d || p) {
                        var g = e.pageYOffset;
                        c.selectorHeader && !i && (i = document.querySelector(c.selectorHeader)), o || (o = w(i));
                        var v, _, x = d ? n : m(p, o, parseInt(c.offset, 10)),
                            k = x - g,
                            S = y(),
                            E = 0,
                            O = function(t, i, o) {
                                var a = e.pageYOffset;
                                (t == i || a == i || e.innerHeight + a >= S) && (clearInterval(o), C(n, i, d), c.callback(n, r))
                            },
                            P = function() {
                                E += 16, v = E / parseInt(c.speed, 10), v = v > 1 ? 1 : v, _ = g + k * h(c.easing, v), e.scrollTo(0, Math.floor(_)), O(_, x, s)
                            },
                            A = function() {
                                clearInterval(s), s = setInterval(P, 16)
                            };
                        0 === e.pageYOffset && e.scrollTo(0, 0), A()
                    }
                };
                var _ = function(t) {
                        e.location.hash, n && (n.id = n.getAttribute("data-scroll-id"), u.animateScroll(n, r), n = null, r = null)
                    },
                    x = function(i) {
                        if (0 === i.button && !i.metaKey && !i.ctrlKey && (r = p(i.target, t.selector), r && "a" === r.tagName.toLowerCase() && r.hostname === e.location.hostname && r.pathname === e.location.pathname && /#/.test(r.href))) {
                            var o = g(r.hash);
                            if ("#" === o) {
                                i.preventDefault(), n = document.body;
                                var a = n.id ? n.id : "smooth-scroll-top";
                                return n.setAttribute("data-scroll-id", a), n.id = "", void(e.location.hash.substring(1) === a ? _() : e.location.hash = a)
                            }
                            n = document.querySelector(o), n && (n.setAttribute("data-scroll-id", n.id), n.id = "", r.hash === e.location.hash && (i.preventDefault(), _()))
                        }
                    },
                    k = function(e) {
                        a || (a = setTimeout(function() {
                            a = null, o = w(i)
                        }, 66))
                    };
                return u.destroy = function() {
                    t && (document.removeEventListener("click", x, !1), e.removeEventListener("resize", k, !1), t = null, n = null, r = null, i = null, o = null, a = null, s = null)
                }, u.init = function(n) {
                    c && (u.destroy(), t = f(l, n || {}), i = t.selectorHeader ? document.querySelector(t.selectorHeader) : null, o = w(i), document.addEventListener("click", x, !1), e.addEventListener("hashchange", _, !1), i && e.addEventListener("resize", k, !1))
                }, u
            })
        }).call(t, function() {
            return this
        }())
    }
});
//# sourceMappingURL=http://sentry.issuu.com:81/issuu-landing-page/_/_/_/../../../sourcemap/331/anonymous/index.js.map