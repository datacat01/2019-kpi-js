! function t(n, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var o = e();
        for (var r in o)("object" == typeof exports ? exports : n)[r] = o[r]
    }
}(this, function() {
    return function(e) {
        var o = {};

        function r(t) {
            if (o[t]) return o[t].exports;
            var n = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
        }
        return r.m = e, r.c = o, r.d = function(t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(n, t) {
            if (1 & t && (n = r(n)), 8 & t) return n;
            if (4 & t && "object" == typeof n && n && n.__esModule) return n;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & t && "string" != typeof n)
                for (var o in n) r.d(e, o, function(t) {
                    return n[t]
                }.bind(null, o));
            return e
        }, r.n = function(n) {
            var t = n && n.__esModule ? function t() {
                return n.default
            } : function t() {
                return n
            };
            return r.d(t, "a", t), t
        }, r.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "", r(r.s = 796)
    }({
        1: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = e(5),
                p = e.n(o),
                r = function() {
                    if ("string" == typeof self.origin && ~self.origin.indexOf("://")) return self.origin;
                    var t = document.location,
                        n = t.protocol,
                        e = t.host,
                        o;
                    return "".concat(n, "//").concat(e)
                },
                a = e(2);
            e.d(n, "send", function() {
                return l
            }), e.d(n, "on", function() {
                return d
            }), e.d(n, "off", function() {
                return y
            }), e.d(n, "once", function() {
                return m
            }), e.d(n, "onRequest", function() {
                return b
            }), e.d(n, "request", function() {
                return v
            });
            var i = "sqs",
                c = {};

            function u(n) {
                return Object.freeze(n), Object.getOwnPropertyNames(n).forEach(function(t) {
                    !n.hasOwnProperty(t) || null === n[t] || "object" !== p()(n[t]) && "function" != typeof n[t] || Object.isFrozen(n[t]) || u(n[t])
                }), n
            }

            function f(t) {
                return t.origin === r() && ("object" === p()(t.data) && (t.data.namespace === i && "string" == typeof t.data.key))
            }

            function s(t, n, e) {
                var o;
                c[t] && c[t].filter(function(t) {
                    return !e || t.signature === e
                }).forEach(function(t) {
                    t.callback.apply(null, [n])
                })
            }

            function l(t, n, e) {
                try {
                    var o = {
                        namespace: i,
                        key: t,
                        payload: n,
                        signature: e
                    };
                    window.postMessage(o, r())
                } catch (t) {
                    console.error(t)
                }
            }

            function d(t, n, e) {
                void 0 === c[t] && (c[t] = []), c[t].push({
                    callback: n,
                    signature: e
                })
            }

            function y(t, n) {
                c[t] = c[t].filter(function(t) {
                    return t.callback !== n
                })
            }

            function m(o, n) {
                return new Promise(function(e) {
                    var t;
                    d(o, function t(n) {
                        y(o, t), e(n)
                    }, n)
                })
            }

            function b(n, t, e) {
                d("".concat(n, "-request"), function() {
                    t().then(function(t) {
                        l("".concat(n, "-response"), t, e)
                    })
                }, e)
            }

            function v(t, n) {
                var e = m("".concat(t, "-response"), n).then(function(t) {
                    return t
                });
                return l("".concat(t, "-request"), n), e
            }

            function g(t, n) {
                var o = [],
                    e = function t(n) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        o.push({
                            object: n,
                            path: e
                        })
                    };
                for (e(t); 0 < o.length;)
                    for (var r = o.pop(), a = r.object, i = r.path, c, u = Object.keys(a), f = 0; f < u.length; f++) {
                        var s = u[f],
                            l = a[s],
                            d = "" === i ? s : "".concat(i, ".").concat(s);
                        "object" === p()(l) ? e(l, d) : a[s] = n(l, d)
                    }
                return t
            }

            function h(t) {
                var n;
                return u(g(t, function(t, n) {
                    return n
                }))
            }
            h(a.a), window.addEventListener("message", function(t) {
                if (f(t)) {
                    var n = t.data,
                        e, o, r;
                    s(n.key, n.payload, n.signature)
                }
            })
        },
        2: function(t, n, e) {
            "use strict";
            var o = {
                    ready: !0,
                    currency: {
                        active: !0,
                        changed: !0,
                        showOverlay: !0
                    },
                    language: {
                        active: !0,
                        changed: !0,
                        showOverlay: !0
                    },
                    nationality: {
                        isVATApplicable: !0,
                        isInEU: !0
                    }
                },
                r = {
                    linkClick: !0,
                    loadImages: !0,
                    resize: !0,
                    componentInitialized: !0
                },
                a = {
                    fetchLogoWall: !0,
                    getTemplate: !0,
                    getCustomerExample: !0
                },
                i, c, u, f, s = {
                    heroHomeNov18: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    featuredCustomers: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    featureTextGallery: {
                        startAutoplay: !0,
                        stopAutoplay: !0
                    },
                    header: {
                        setDarkBackground: !0,
                        setLightBackground: !0,
                        disableSticky: !0,
                        enableSticky: !0
                    }
                },
                l = n.a = {
                    i18n: o,
                    page: r,
                    taxonomy: a,
                    components: s
                }
        },
        3: function(t, n) {
            function e(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.exports = e
        },
        5: function(n, t) {
            function e(t) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function t(n) {
                    return typeof n
                } : function t(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(t)
            }

            function o(t) {
                return "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? n.exports = o = function t(n) {
                    return e(n)
                } : n.exports = o = function t(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : e(n)
                }, o(t)
            }
            n.exports = o
        },
        796: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = e(3),
                r = e.n(o),
                a = e(92),
                i = e(1),
                c = e(2),
                u = function t(n) {
                    r()(this, t);
                    var e = {
                        href: n.getAttribute("href"),
                        text: n.textContent,
                        type: n.classList.contains("button") ? "button" : "link"
                    };
                    n.dataset.identifier && (e.identifier = n.dataset.identifier), n.dataset.section && (e.section = n.dataset.section), n.addEventListener("click", function() {
                        i.send(c.a.page.linkClick, e)
                    })
                };
            Object(a.b)(u, "link")
        },
        92: function(t, n, e) {
            "use strict";
            e.d(n, "b", function() {
                return o
            }), e.d(n, "a", function() {
                return r
            }), e.d(n, "c", function() {
                return i
            });
            var c = e(1),
                u = e(2),
                p, y;

            function o(t, o, n) {
                try {
                    if (void 0 === n) {
                        var e, r = Array.from(document.querySelectorAll("[data-component-id]")).filter(function(t) {
                            var n = "" === t.dataset.componentId,
                                e = t.dataset.componentName === o;
                            return n && e
                        });
                        if (r.length <= 0) throw Error("No uninitialized component containers found.");
                        n = r.pop()
                    }
                    var a = window.componentId();
                    n.dataset.componentId = a;
                    var i = new t(n, a);
                    return c.send(u.a.page.componentInitialized, {
                        id: a
                    }), i
                } catch (t) {
                    console.error("Unable to initialize component.", t)
                }
            }

            function r(t) {
                return t.dataset.componentId
            }

            function a(t) {
                return t.dataset.componentName
            }

            function i(t) {
                var n = t.template,
                    e = t.content,
                    o = t.parentElement;
                if (o) {
                    if (!p) {
                        var r = document.getElementById("cdn-lark");
                        p = r ? r.dataset.src.split("assets")[0] : "/"
                    }
                    if (!y) {
                        var a = window.__templateVersion;
                        y = a ? "?".concat(a) : "?"
                    }
                    var i = document.createElement("div"),
                        c, u;
                    if (i.innerHTML = n(e), "/" !== p) Array.from(i.getElementsByTagName("link")).forEach(function(t) {
                        var n, e = t.getAttribute("href").split("styles")[1],
                            o = "".concat(p, "assets/styles").concat(e);
                        t.setAttribute("href", o)
                    });
                    Array.from(i.getElementsByTagName("squarespace:script")).forEach(function(t) {
                        var n = t.getAttribute("src"),
                            e = "".concat(p, "scripts/").concat(n).concat(y),
                            o = document.createElement("script");
                        o.setAttribute("src", e), t.parentElement.appendChild(o), t.parentElement.removeChild(t)
                    });
                    var f = Array.from(i.children),
                        s = f.find(function(t) {
                            return void 0 !== t.dataset.componentId
                        }),
                        l = f.find(function(t) {
                            return "LINK" === t.tagName
                        }),
                        d = f.find(function(t) {
                            return "SCRIPT" === t.tagName
                        });
                    return l.addEventListener("load", function() {
                        o.appendChild(s), o.appendChild(d)
                    }), o.appendChild(l), s
                }
            }
        }
    })
});