webpackJsonp([0], [function(e, t, n) {
    "use strict";
    var a = {};
    a.helpers = {
        serviceStatus: {},
        getOffsetTop: function(e) {
            var t = 0;
            if (e.offsetParent)
                do {
                    t += e.offsetTop, e = e.offsetParent
                } while (e);
            return t >= 0 ? t : 0
        },
        elementInViewport: function(e, t, n) {
            for (var a = e.offsetTop, i = e.offsetHeight, r = n ? 50 : 0; e.offsetParent;) a += (e = e.offsetParent).offsetTop;
            return t ? a >= window.pageYOffset && a + i <= window.pageYOffset + window.innerHeight - r : a < window.pageYOffset + window.innerHeight && a + i > window.pageYOffset + 50
        },
        isMobile: function() {
            return "ontouchstart" in document.documentElement
        },
        konsole: function() {
            if (-1 != location.search.indexOf("console=true")) {
                var e = Array.prototype.slice.call(arguments),
                    t = e.splice(0, 1)[0];
                console[t].apply(console, e)
            }
        },
        konsoleBanner: function() {
            if (-1 != location.search.indexOf("debugBanner=true")) {
                var e = Array.prototype.slice.call(arguments),
                    t = e.splice(0, 1)[0];
                console[t].apply(console, e)
            }
        },
        ajx: function(e, t, n) {
            return new Promise(function(a, i) {
                var r = function(e, t) {
                        var n = t || "Erro ao carregar o arquivo.";
                        console.info(n), i(e)
                    },
                    o = "undefined" != typeof XDomainRequest ? new XDomainRequest : new XMLHttpRequest;
                o.open(e, t, !0), o.onreadystatechange = function() {
                    if (4 == o.readyState)
                        if (o.status && o.status >= 200 && o.status < 400) {
                            var e = !0;
                            o.responseText.length > 0 && (e = JSON.parse(JSON.stringify(o.responseText))), a(e)
                        } else r(o, "Requisição finalizada com status: " + o.status)
                }, o.onerror = function() {
                    r(o)
                }, o.send(n)
            })
        },
        jsonp: function(e, t) {
            if (!e.Promise) throw "Promise not available. Use a polyfill! http://promisesaplus.com/implementations";
            return function(n, a, i) {
                return new Promise(function(r, o) {
                    var s = a || "jsonp",
                        c = i || "jsonp_callback_" + Math.round(1e5 * Math.random()),
                        l = document.createElement("script");
                    l.src = n + (n.indexOf("?") >= 0 ? "&" : "?") + s + "=" + c, l.onerror = o, t.appendChild(l);
                    var u = void 0,
                        d = c.split("."),
                        p = window.setTimeout(function() {
                            e[u] = function() {}, o()
                        }, 15e3),
                        m = function(n) {
                            window.clearTimeout(p), r(n), e[u] = null, delete e[u], t.removeChild(l)
                        };
                    d.reduce(function(e, t, n) {
                        return u = u || t, e[t] = n < d.length - 1 ? {} : m
                    }, e)
                })
            }
        }(window, document.body),
        setCookie: function(e, t, n) {
            var a = new Date;
            a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
            var i = "expires=" + a.toGMTString();
            document.cookie = e + "=" + escape(t) + "; " + i + "; path=/;domain=.uol.com.br"
        },
        getCookie: function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                for (var i = n[a];
                    " " == i.charAt(0);) i = i.substring(1);
                if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
            }
            return !1
        },
        removeCookie: function(e) {
            document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=.uol.com.br"
        },
        metrics: function(e, t) {
            var n = a.helpers.serviceStatus || {};
            if (!(!("loadMetrics" in n) || n.loadMetrics)) return !0;
            var i = ["action", "category", "area", "label", "position"];
            if (window.universal_variable && window.universal_variable.hasOwnProperty("aud") && ["abTest2", "abTest3"].forEach(function(t) {
                    window.universal_variable.aud.hasOwnProperty(t) && (i.push(t), e[t] = window.universal_variable.aud[t])
                }), !e) return console.error("metrics: esperado objeto"), !1;
            var r = "countClick";
            return t && (r = "count" + (t = t.replace(/^count/, "")).charAt(0).toUpperCase() + t.slice(1)),
                function(e, t) {
                    try {
                        var n = !1;
                        if (e.action && e.category && e.area && e.label && e.position && (n = !0), window.location.search.match(/debugGA=true/) || !n) {
                            for (var a in console.group(n ? "\n\n[GA CLICK - " + t.toUpperCase() + "]" : "GA DATA INCOMPLETE"), i) {
                                var r = i[a];
                                e[r] && console.log("[%s]: %s", r, e[r])
                            }
                            return console.groupEnd(), !1
                        }
                        window.hasOwnProperty("UOLPD") ? window.UOLPD.hasOwnProperty("Audience2") ? window.UOLPD.Audience2.hasOwnProperty(t) ? n && window.UOLPD.Audience2[t](e) : console.error("metrics: window.UOLPD.Audience2." + t + "() is not defined") : console.error("metrics: UOLPD.Audience2() is not defined") : console.error("metrics: UOLPD is not defined")
                    } catch (e) {
                        console.error("metrics: ocorreu um erro ao tentar executar a função", e)
                    }
                    return !0
                }(e, r)
        },
        insertMetrics: function(e, t) {
            var n = a.helpers.serviceStatus || {},
                i = !("metrics" in n) || n.metrics;
            if (e && i) {
                var r = ["category", "area", "label", "position"],
                    o = function(e, t) {
                        var n = t ? JSON.parse(JSON.stringify(t)) : {};
                        return r.forEach(function(t) {
                            var a = e.getAttribute("data-" + t) || "";
                            a.length && (n[t] = a)
                        }), n
                    },
                    s = o(e),
                    c = function(e) {
                        e.preventDefault();
                        var t = e.currentTarget;
                        if (t.getAttribute("href")) {
                            var n = t.getAttribute("href"),
                                i = t.getAttribute("data-nofollow") || !1,
                                r = o(t, s),
                                c = t.getAttribute("data-action") || !1;
                            r.action = c || n, a.helpers.metrics(r) && !i && window.location.assign(n)
                        }
                    };
                Array.prototype.slice.call(e.querySelectorAll("a[href], a.gameData_link")).forEach(function(e) {
                    t ? (e.removeEventListener("click", c, !1), e.removeEventListener("click", c, !0)) : e.addEventListener("click", c, !0)
                })
            }
        },
        overlay: {
            bodyTop: 0,
            display: function(e, t) {
                var n = this,
                    i = document.documentElement.scrollTop || document.body.scrollTop;
                if (document.querySelector("body").classList[e ? "add" : "remove"]("overlay"), e) this.bodyTop = i, document.body.style.top = "-" + i + "px", this.metrics.open && (a.helpers.metrics(this.metrics.open), this.metrics.open = null), a.helpers.refresh.pause();
                else {
                    if (document.documentElement.scrollTop = document.body.scrollTop = this.bodyTop, Array.prototype.slice.call(document.querySelectorAll(".aboveOverlay")).forEach(function(e) {
                            e.classList.add("hide")
                        }), this.metrics.close) {
                        var r = Object.assign({}, this.metrics.close);
                        t && r.labelOver && (r.label = r.labelOver), a.helpers.metrics(r), this.metrics.close = null
                    }
                    a.helpers.refresh.start()
                }
                var o = document.querySelectorAll(".modal");
                Array.prototype.slice.call(o).forEach(function(t) {
                    var a = window.getComputedStyle(t),
                        i = a.getPropertyValue("top") ? a.getPropertyValue("top").replace(/(\d+).*/, "$1") : 0;
                    t.style.top = e ? n.bodyTop + parseInt(i, 10) + "px" : ""
                });
                var s = document.querySelector("body > span.over");
                s && s[e ? "addEventListener" : "removeEventListener"]("click", function() {
                    this.hide(!0)
                }.bind(this))
            },
            show: function() {
                this.display(!0)
            },
            hide: function(e) {
                this.display(!1, e)
            },
            metrics: {}
        },
        refresh: {
            timer: null,
            timeToReload: window.TIME_TO_RELOAD ? parseInt(window.TIME_TO_RELOAD) : 4.1667 * 60 * 1e3,
            init: function() {
                a.helpers.refresh.start(), a.helpers.addToPublic({
                    refresh: {
                        pause: a.helpers.refresh.pause,
                        start: a.helpers.refresh.start
                    }
                }), a.helpers.addToPublic({
                    uolads: a.helpers.uolads
                })
            },
            pause: function() {
                clearTimeout(a.helpers.refresh.timer), a.helpers.refresh.timer = null
            },
            start: function() {
                null === a.helpers.refresh.timer && (a.helpers.refresh.timer = setTimeout(function() {
                    window.navigator.userAgent.match(/msie|rv:/) ? window.history.go(0) : window.location.reload()
                }, a.helpers.refresh.timeToReload))
            }
        },
        basepath: function(e) {
            var t = location.pathname;
            return "/" == t ? e : (t = t.replace(/^(.+)?\/[^.]+\..+$/, "$1"), t = t.replace(/\/preview\/camaleao(\/)?.*/, ""), t = t.replace(/\/$/, ""), t + e)
        },
        passiveEvents: function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (e) {}
            return e
        },
        slug: function(e) {
            for (var t = "ãàáäâèéëêìíïîòóöôõùúüûñç ·/_,:;", n = 0, a = t.length; n < a; n++) e = e.toLowerCase().replace(new RegExp(t.charAt(n), "g"), "aaaaaeeeeiiiiooooouuuunc-------".charAt(n));
            return e = e.replace(/\s+/g, "").replace(/[d,D]'[o,O]/, "doO").replace(/[d,D]'[a,A]/, "Da")
        },
        uolads: {
            list: [],
            add: function(e) {
                return !!(e && a.helpers.uolads.list.indexOf(e) < 0) && (a.helpers.uolads.list.push(e), !0)
            }
        },
        addToPublic: function(e) {
            for (var t in e) window.homeUOL.public[t] = e[t]
        },
        getParameter: function(e) {
            var t = null,
                n = [];
            return location.search.substr(1).split("&").forEach(function(a) {
                (n = a.split("="))[0] === e && (t = decodeURIComponent(n[1]))
            }), t
        },
        trataTags: function(e, t) {
            var n = t ? "" : "&lt;",
                a = t ? "" : "&gt;";
            return ("string" == typeof e.toLowerCase() ? e : "").replace(/</g, n).replace(/>/g, a)
        }
    }, window.homeUOL = window.homeUOL || {}, window.homeUOL.public = window.homeUOL.public || {}, window.metricsGA = a.helpers.metrics, e.exports = a
}, , , , , , , , , function(e, t) {
    e.exports = {
        photo: "foto",
        player: "video",
        comments: "comentários",
        subScreamer: "submanchete",
        screamer: "manchete",
        scarehead: "super foto",
        carousel: "rotativo"
    }
}, function(e, t, n) {
    var a = {
        "./back-to-top/actions": 18,
        "./banner/actions": 26,
        "./carnival/actions": 27,
        "./counter/actions": 30,
        "./elections/actions": 31,
        "./email-modal/actions": 33,
        "./email/actions": 35,
        "./live/actions": 13,
        "./mock/actions": 38,
        "./popular/actions": 39,
        "./report/actions": 40,
        "./section/actions": 41,
        "./services/actions": 43,
        "./smartbanner/actions": 45,
        "./survey/actions": 46,
        "./tailtarget/actions": 48,
        "./teaser/actions": 50,
        "./thematic/actions": 51,
        "./to-hide-block/actions": 52,
        "./widget/actions": 54
    };

    function i(e) {
        return n(r(e))
    }

    function r(e) {
        var t = a[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    i.keys = function() {
        return Object.keys(a)
    }, i.resolve = r, e.exports = i, i.id = 10
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(18),
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "backToTopRender",
                value: function() {
                    var e = new i("back-to-top"),
                        t = new i("icons").render({
                            icon: "nav_up",
                            ariaName: "voltar ao topo"
                        });
                    return e.render(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return new Promise(function(t) {
                        var n = document.querySelector("body");
                        if (!n.querySelector(".backToTop")) {
                            var a = e.backToTopRender();
                            n.insertAdjacentHTML("beforeend", a)
                        }
                        new r, t()
                    })
                }
            }]), e
        }();
    e.exports = new o
}, , function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = "home-placar-futebol-";
    location.search.match(/qa/) && (r = "qa-" + r), n(28);
    var o = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.data = t, t.key && (this.instance = document.querySelector("[data-key='" + t.key + "']"), "match" != this.data.type && i.helpers.insertMetrics(this.instance), this.accordion(), this.games = {}, this.scoreRealTime())
        }
        return a(e, [{
            key: "setHeight",
            value: function() {
                var e = this.instance.querySelector(".toggleButton"),
                    t = e ? e.offsetHeight : 0;
                if ("match" == this.data.type || this.data.hasOwnProperty("isToday") && "worldcup" == this.data.section) return !1;
                var n = 0,
                    a = this.instance.querySelectorAll(".accordionItem"),
                    i = this.instance.classList.contains("collapsed") ? 3 : a.length;
                Array.prototype.slice.call(a).forEach(function(e, t) {
                    if (t >= i) return !1;
                    n += e.offsetHeight
                }), n += t + 6, this.instance.style.height = n + "px", this.instance.style.maxHeight = "none"
            }
        }, {
            key: "switchAccordion",
            value: function(e) {
                var t = this;
                e.preventDefault(), this.data.isCollapsed = !this.data.isCollapsed, n(36).render(this.data).then(function() {
                    t.setHeight()
                })
            }
        }, {
            key: "accordion",
            value: function() {
                if (this.instance) {
                    this.setHeight();
                    var e = this.instance.querySelector(".toggleButton");
                    e && e.addEventListener("click", this.switchAccordion.bind(this), !1)
                }
            }
        }, {
            key: "isPenaltis",
            value: function(e) {
                return "2" === e.penaltis || "3" === e.penaltis
            }
        }, {
            key: "isStarted",
            value: function(e) {
                return "2" === e.partida || "3" === e.partida
            }
        }, {
            key: "itsOver",
            value: function(e) {
                return "3" === e.partida
            }
        }, {
            key: "scoreRealTime",
            value: function() {
                Array.prototype.slice.call(this.instance.querySelectorAll(".gameData")).forEach(this.registerGame.bind(this))
            }
        }, {
            key: "getGameDom",
            value: function(e) {
                return this.games[r + e]
            }
        }, {
            key: "registerGame",
            value: function(e) {
                var t = e.getAttribute("data-channel");
                if (!t) return !1;
                t = r + t, this.games[t] = {
                    $module: this.instance,
                    $game: e,
                    update: {
                        "saldo-gols": e.querySelectorAll(".team_score"),
                        "saldo-penaltis": e.querySelectorAll(".team_penaltis")
                    },
                    data: void 0
                }, window.liveCache && window.liveCache[t] && this.message(window.liveCache[t]), window.usocket && window.usocket.config({
                    domain: "rthome.uol.com",
                    forcePolling: !1,
                    pollingDelay: 1e4
                }), window.usocket && window.usocket.connect(t).on("message", this.message.bind(this))
            }
        }, {
            key: "message",
            value: function(e) {
                var t = e.channelName;
                if (void 0 === t) return !1;
                window.liveCache = window.liveCache || {}, window.liveCache[t] = e;
                var n = this.games[e.channelName],
                    a = this.isPenaltis(e.status);
                if (JSON.stringify(n.data) === JSON.stringify(e)) return !1;
                if (!1 === this.isStarted(e.status)) return !n.$game.classList.contains("nao-iniciado") && n.$game.classList.add("nao-iniciado"), !1;
                ["ao-vivo", "nao-iniciado", "encerrado"].forEach(function(e) {
                    n.$game.classList.contains(e) && n.$game.classList.remove(e)
                }), this.itsOver(e.status) && !n.$game.classList.contains("encerrado") && n.$game.classList.add("encerrado"), this.isStarted(e.status) && !n.$game.classList.contains("ao-vivo") && n.$game.classList.add("ao-vivo"), n.$game.classList.contains("nao-iniciado") && n.$game.classList.remove("nao-iniciado"), n.data = e, this.updateLink(n), this.update(n), !0 === a ? (!n.$game.classList.contains("penaltis") && n.$game.classList.add("penaltis"), this.updatePenaltis(n)) : n.$game.classList.contains("penaltis") && n.$game.classList.remove("penaltis"), this.setHeight()
            }
        }, {
            key: "update",
            value: function(e) {
                var t = e.data.equipes,
                    n = e.update["saldo-gols"];
                n[0].innerHTML = t.e1["saldo-gols"], n[1].innerHTML = t.e2["saldo-gols"]
            }
        }, {
            key: "updatePenaltis",
            value: function(e) {
                var t = e.data.equipes,
                    n = e.update["saldo-penaltis"];
                n[0].innerHTML = t.e1["saldo-penaltis"], n[1].innerHTML = t.e2["saldo-penaltis"]
            }
        }, {
            key: "updateLink",
            value: function(e) {
                var t = e.$game.querySelector(".gameData_link");
                if (t) {
                    var n = e.$game.querySelector(".status-pos");
                    e.data["url-pos-jogo"] && this.itsOver(e.data.status) ? (t.setAttribute("href", e.data["url-pos-jogo"]), n && (n.innerHTML = "Pós-Jogo")) : e.data.url && (t.setAttribute("href", e.data.url), n && (n.innerHTML = "Encerrado"))
                }
            }
        }]), e
    }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(1),
        o = n(40),
        s = n(2),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "reportRender",
                value: function() {
                    var e = new r("report"),
                        t = new r("icons").render({
                            icon: "report",
                            areaName: "Botão de comunicar erro"
                        });
                    return e.render({
                        icon: t
                    })
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(i, r) {
                        void 0 === (void 0 === e ? "undefined" : a(e)) && r();
                        var c = {
                            className: e.type + " card card_gutter",
                            "data-key": e.key,
                            key: e.key
                        };
                        s.render(n.reportRender(), "article", c).then(function() {
                            t && new o, i()
                        }).catch(function(e) {
                            r(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(52),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "render",
                value: function(e, t) {
                    return new Promise(function(n, a) {
                        var c = "";
                        e || a(), e.opened = void 0 === e.opened || e.opened;
                        var l = {};
                        l.section = e.section, l.opened = e.opened, c += new i("to-hide-block").render(l);
                        var u = l.opened ? "" : "closeBlock",
                            d = {
                                className: e.type + " " + u,
                                key: e.key
                            };
                        r.render(c, "", d).then(function() {
                            window.lazyload && window.lazyload.update();
                            var a = s.helpers.serviceStatus || {},
                                i = "virtualDom" in a ? a.virtualDom : null;
                            (t || !1 === i) && new o(e), n()
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, , function(e, t, n) {
    var a = {
        "./back-to-top/scripts": 11,
        "./banner/scripts": 124,
        "./carnival/scripts": 148,
        "./counter/scripts": 150,
        "./elections/scripts": 151,
        "./email-modal/scripts": 32,
        "./email/scripts": 34,
        "./live/scripts": 36,
        "./mock/scripts": 37,
        "./popular/scripts": 152,
        "./report/scripts": 14,
        "./section/scripts": 153,
        "./services/scripts": 42,
        "./smartbanner/scripts": 44,
        "./survey/scripts": 156,
        "./tailtarget/scripts": 47,
        "./teaser/scripts": 49,
        "./thematic/scripts": 159,
        "./to-hide-block/scripts": 15,
        "./widget/scripts": 53
    };

    function i(e) {
        return n(r(e))
    }

    function r(e) {
        var t = a[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    i.keys = function() {
        return Object.keys(a)
    }, i.resolve = r, e.exports = i, i.id = 17
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.instance = document.querySelector(".backToTop"), this.instance && (this.settings = {
                    min: 1200,
                    show: !1
                }, this.scrollToTop())
            }
            return a(e, [{
                key: "scrollToTop",
                value: function() {
                    var e = this;
                    this.instance.addEventListener("click", function() {
                        i.helpers.metrics({
                            action: "clique",
                            category: "interacao",
                            area: "back-to-top",
                            label: "back-to-top",
                            position: "flutuante"
                        });
                        try {
                            window.scroll({
                                top: 0,
                                behavior: "smooth"
                            })
                        } catch (e) {
                            window.scroll(0, 0)
                        }
                    }), window.addEventListener("scroll", function() {
                        e.settings.show = window.scrollY >= e.settings.min, e.instance.setAttribute("data-show", e.settings.show)
                    })
                }
            }]), e
        }();
    e.exports = r
}, , , , , , , , function(e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.instance && "lista-ecommerce-area" !== t.section && !a.helpers.getParameter("woutBanner") && (a.helpers.uolads.add(t.section) ? (a.helpers.konsoleBanner("log", "%c [BANNER] [ADD] id: " + t.section + " adicionado na lista e liberado para uolads.push()", "color: yellow"), window.uolads && window.uolads.push({
            id: t.section
        })) : a.helpers.konsoleBanner("log", "%c [BANNER] [BLOCKED] id: " + t.section + " já estava adicionado na lista", "color: red"))
    }
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    var i = n(0);
    n(28);
    var r = n(149);
    e.exports = function e(t) {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.instance) {
            var n = function(e, t) {
                    return "-" == (e = (e = "number" == typeof(e = e ? parseFloat(e) : "") ? e : "-").toString()) || "null" == e ? "-" : "0.00" != e && e ? e.replace(".", ",") : "0"
                },
                o = function(e, t) {
                    for (var n = e.length; n--;)
                        if (e[n] == t) return e.splice(n, 1), !0;
                    return !1
                },
                s = function(e, t) {
                    for (var n = e.length; n--;)
                        if (e[n].id == t) return n;
                    return -1
                },
                c = function() {
                    v.shift();
                    var e = v[0];
                    h("removendo item da fila de callback"), "object" == (void 0 === e ? "undefined" : a(e)) ? (h("chamando próximo callback"), g.placarCarnaval.callback()) : h("sem mais callback")
                };
            console.log("antes Utils helpers"), i.helpers.insertMetrics(this.instance), !i.helpers.getParameter("woutBanner") && t.stamp && window.uolads && window.uolads.push({
                id: t.stamp
            });
            var l, u, d, p = !0,
                m = !1,
                f = {
                    domain: "rtevent.uol.com",
                    forcePolling: !1,
                    pollingDelay: 1e3
                },
                h = !0 === /debug=true/.test(location.search) ? function() {
                    var e = new Date,
                        t = e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
                    console.log.apply ? console.log.apply(console, [t].concat(Array.prototype.slice.call(arguments, 0))) : console.dir(arguments)
                } : function() {},
                v = [],
                g = window.homeUOL = window.homeUOL || {};
            g.placarCarnaval = {
                id_escola_atual: null,
                first_run: !0,
                classificacao: null,
                notas: null,
                escolas: [],
                quesito_atual: "",
                fim_quesito: !1,
                init: function(e) {
                    h("init placar"), window.usocket.config(f), l = e.getElementById("placar-carnaval"), u = l.className, p = "true" == l.getAttribute("data-notas"), d = "true" == l.getAttribute("data-websocket"), this.classificacao = e.getElementById("classificacao"), this.quesito = e.getElementById("quesito"), this.notas = e.getElementById("notas"), this.grade_notas = e.getElementById("grade-notas"), !0 === d && function e() {
                        h("conectando no webservice");
                        var t = window.usocket.connect("carnaval-2019-home");
                        t.on("error", function(n) {
                            h("errro!!!!"), t.close(), setTimeout(e, 5e3)
                        }), t.on("message", function(e) {
                            h("onmessage event", e), g.placarCarnaval.callback(e)
                        })
                    }()
                },
                callback: function(e) {
                    if ("object" == (void 0 === e ? "undefined" : a(e))) {
                        if (h("callback do request"), v.push(e), v.length > 1) return h("adicionado à fila"), !1
                    } else h("próximo"), e = v[0];
                    var t = this;
                    m = e.ultimoQuesito, this.escreveClassificacao(e.classificacao);
                    var n = function(e) {
                        for (var t, n = [], a = e.length, i = 0; i < a; i++) t = e[i], n.push({
                            id: t[0],
                            nome: t[1],
                            descartes: t[2] || [],
                            notas: t[3],
                            quesito: t[4]
                        });
                        return n
                    }(e.notas);
                    h("escolas_recebidas ", n.length);
                    var i = function() {
                        for (var e = n.length, a = (t.quesito_atual || n[0].quesito, 0); a < e - 1; a++)
                            if (n[a].quesito != n[a + 1].quesito) {
                                var i = n[a + 1].quesito;
                                if (a + 1 == e - 1) return n.pop(), !1;
                                if (a + 1 == e - 2) return n.pop(), n.pop(), n.push({
                                    id: "proximoquesito",
                                    muda_quesito: !0,
                                    quesito: i
                                }), !0;
                                if (a + 1 == e - 3) return n.pop(), n.pop(), n.pop(), n.push({
                                    id: "proximoquesito",
                                    muda_quesito: !0,
                                    quesito: i
                                }), !0;
                                if (a < 3) {
                                    for (var r = a; r-- > 1;) n.shift();
                                    break
                                }
                            } return n.length > 3 && (!0 !== m ? n.pop() : !0 === m && n.length > 5 && n.pop()), !1
                    }();
                    1 == this.fim_quesito && 0 == i && (this.escolas = []), this.fim_quesito = i, this.concatenaEscolas(n), 1 == p ? (this.quesito.innerHTML = this.quesito_atual || e.quesito, this.escreveNotasEscolas(), l.className = u) : l.className = u + " sem-notas", this.first_run = !1
                },
                concatenaEscolas: function(e) {
                    this.escolas.length;
                    for (var t, n = this.escolas, a = e.length, i = 0, r = n.length ? n[n.length - 1].id : "", o = !1; i < a;) {
                        t = e[i];
                        var c = s(n, t.id);
                        if (c > -1) n[c] = t, o = !0;
                        else {
                            if (0 == o && "" != r && t.id != r) {
                                i++;
                                continue
                            }
                            o = !0, this.escolas.push(t)
                        }
                        i++
                    }
                },
                escreveNotasEscolas: function() {
                    var e = "<table>",
                        t = this.escolas,
                        n = !1;
                    for (var a in t) {
                        var i = t[a],
                            r = this.montaNotasEscola(i);
                        e += r.html, r.tem_notas && (n = !0)
                    }
                    e += "</table>", this.grade_notas.innerHTML = e, this.notas = this.grade_notas.getElementsByTagName("table")[0];
                    var o = t.length,
                        s = [];
                    if (o > 3) {
                        for (; o > 3;) s.push(function() {
                            t.length > 3 && g.placarCarnaval.aplicaEfeitoTroca(s), t.shift()
                        }), o -= 1;
                        var l = s.shift();
                        "function" == typeof l && l()
                    } else {
                        var u = n ? 1 : 0;
                        !0 === m && 3 == t.length && (u = 2);
                        var d = this.notas.getElementsByTagName("tr")[u];
                        d.className = "atual", self.id_escola_atual = d.getAttribute("data-escola"), c()
                    }
                },
                montaNotasEscola: function(e) {
                    if (e.muda_quesito) return {
                        html: '<td class="proximo-quesito" colspan="' + (this.escolas[0].notas.length + 1) + '">Próximo quesito: <span>' + e.quesito + "</span></td>",
                        tem_notas: !1
                    };
                    var t = e.notas,
                        a = function(e) {
                            var t = [];
                            for (var n in e) t.push(e[n]);
                            return t
                        }(e.descartes),
                        i = '<td class="nome-escola escola">' + e.nome + "</td>",
                        r = !1;
                    for (var s in t)
                        if (!isNaN(t[s])) {
                            var c = t[s],
                                l = o(a, c) && null != c;
                            c && (r = !0), i += '<td class="pontos nota' + (l ? " nota-descartada" : "") + '"' + (l ? ' title="Nota descartada"' : "") + ">" + n(c) + "</td>"
                        } return {
                        html: '<tr data-escola="' + e.id + '">' + i + "</tr>",
                        tem_notas: r
                    }
                },
                aplicaEfeitoTroca: function(e) {
                    var t = this,
                        n = this.notas,
                        a = r(n),
                        i = (n.getElementsByTagName("tbody")[0], n.getElementsByTagName("tr") || []);
                    i[1] && (i[1].className = "");
                    var o = i[i.length - 1].offsetHeight + 10;
                    return a.animate({
                        top: o / -1
                    }, {
                        duration: 500,
                        easing: "linear",
                        complete: function() {
                            var n = r(t.notas);
                            n.find("tr").eq(0).remove(), n.css({
                                top: 0
                            });
                            var a = n.find("tr");
                            a.eq(1).addClass("atual cor2"), t.quesito_atual = a.get(0).getAttribute("data-quesito"), t.id_escola_atual = a.get(1).getAttribute("data-escola");
                            var i = e.shift();
                            "function" == typeof i ? setTimeout(i, 500) : c()
                        }
                    }), !1
                },
                escreveClassificacao: function(e) {
                    return e.length > 0 && (this.classificacao.innerHTML = '                    <ul class="table">                        <li class="item">                        <span class="posicao cor2">' + e[0][1] + 'º</span>                        <span class="escola">' + e[0][2] + '</span>                        <span class="pontos">' + n(e[0][3]) + '</span>                        </li>                        <li class="item">                        <span class="posicao cor2">' + e[1][1] + 'º</span>                        <span class="escola">' + e[1][2] + '</span>                        <span class="pontos">' + n(e[1][3]) + '</span>                        </li>                        <li class="item">                        <span class="posicao cor2">' + e[2][1] + 'º</span>                        <span class="escola">' + e[2][2] + '</span>                        <span class="pontos">' + n(e[2][3]) + "</span>                        </li>                    </ul>                    "), ""
                }
            }, console.log("antes init"), g.placarCarnaval.init(document)
        }
    }
}, , , function(e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function e(t) {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.data = t, this.instance = document.querySelector("[data-key='" + t.key + "']"), this.counterMain = document.getElementById("counterMain"), this.instance && this.counterMain) {
            a.helpers.insertMetrics(this.instance);
            var n = this.data.metrics.position || "coluna-4";
            this.counterMain.addEventListener("click", function() {
                var e = "https://copadomundo.uol.com.br/tabela-da-copa/calendario/";
                a.helpers.metrics({
                    action: e,
                    category: "bloco-editorial-topo",
                    area: "topo",
                    label: "abrir-contador-copa",
                    position: n
                }) && (window.location = e)
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.data = t, t.key && (this.instance = document.querySelector("[data-key='" + t.key + "']"))
    }
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(33),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "IconRender",
                value: function(e) {
                    var t = new i("icons"),
                        n = e || {};
                    return t.render(n)
                }
            }, {
                key: "login",
                value: function() {
                    var e = new i("email-modal"),
                        t = {};
                    return t.type = this.data.type, t.icon = this.IconRender({
                        icon: "email_Outline",
                        ariaName: "UOL Mail"
                    }), this.data.notification && (t.count = this.data.notification.count, t.user = this.data.notification.name, t.isLogged = this.data.notification.auth.isLogged, t.messagePrefix = this.data.notification.messagePrefix || !1, t.moreThan = this.data.notification.moreThan || !1, t.plural = this.data.notification.plural, t.inbox = this.data.notification.inbox, t.logout = this.data.notification.logout, t.load = !0), e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        var c = "";
                        n.data = e, c += n.login();
                        var l = {
                            className: "" + e.type,
                            key: e.key,
                            "data-category": "header",
                            "data-area": "header",
                            "data-position": "coluna-unica"
                        };
                        r.render(c, "div", l).then(function() {
                            var n = s.helpers.serviceStatus || {},
                                i = "virtualDom" in n ? n.virtualDom : null;
                            (t || !1 === i) && new o(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = i.helpers.serviceStatus,
        o = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.data = t, this.timeout = null, this.timer = 6e3, t.key && (this.instance = document.querySelector("[data-key='" + t.key + "']"), i.helpers.konsole("log", ":: EMAIL INIT ::"), window.hevents.on("widgetProfileNotification", function(e) {
                    n.applyNotification(e)
                }))
            }
            return a(e, [{
                key: "handleData",
                value: function(e) {
                    if (e.moreThan = "", e.auth = e.auth || {
                            isLogged: !1
                        }, e.auth.emails && e.auth.emails.domain.length && "uol.com.br" === e.auth.emails.domain[0] || (e.auth.isLogged = !1), !e.auth.isLogged) return e;
                    if (e.auth.namPerson) {
                        e.name = e.auth.namPerson.split(" ")[0].toLowerCase(), e.name = e.name.length > 12 ? e.name.slice(0, 10) + "..." : e.name
                    }
                    return e.count = e.auth.emails.counter, e.logout = "https://acesso.uol.com.br/logout.html?dest=REDIR|" + window.location.href.replace(/&/g, "%26"), e.inbox = e.auth.emails.url || "https://email.uol.com.br/", "number" != typeof e.count && (e.count = 0), 0 === e.count ? (e.hasEmail = "no-email", e.messagePrefix = "você não tem novos e-mails") : e.count > 99 && (e.moreThan = "more-than-100", e.count = "+99"), e.count > 1 && (e.plural = !0), e
                }
            }, {
                key: "notificationSuccess",
                value: function(e) {
                    var t = this;
                    e = this.handleData(e), this.data.notification = e, n(32).render(this.data).then(function() {
                        var n = t.instance.querySelector(".email-modal_notification");
                        n && e.auth && (!e.auth.isLogged || e.auth.emails && e.auth.emails.counter && 0 !== e.auth.emails.counter ? n.classList.add("show") : n && n.classList.contains("show") && n.classList.remove("show")), t.setMetrics || (i.helpers.insertMetrics(t.instance), t.setMetrics = !0)
                    })
                }
            }, {
                key: "applyNotification",
                value: function(e) {
                    this.clearTimeout(), r && r.hasOwnProperty("widgetNotificacao") && !0 === r.widgetNotificacao ? this.notificationSuccess(e) : i.helpers.konsole("info", "[EMAIL NOTIFY]: disabled")
                }
            }, {
                key: "clearTimeout",
                value: function() {
                    this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(35),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "IconRender",
                value: function(e) {
                    var t = new i("icons"),
                        n = e || {};
                    return t.render(n)
                }
            }, {
                key: "login",
                value: function() {
                    var e = new i("login"),
                        t = {
                            placeHolderUser: "Usuário",
                            placeHolderPassword: "Senha"
                        };
                    t.type = this.data.type, t.logo = this.IconRender({
                        icon: "mail_logo",
                        ariaName: "Email UOL"
                    });
                    var n = s.helpers.serviceStatus.widgetProfile && !("load" in this.data),
                        a = s.helpers.getCookie("widget-notificacao");
                    return n && a && (t.load = !0), this.data.notification && (t.count = this.data.notification.count, t.user = this.data.notification.name, t.isLogged = this.data.notification.auth.isLogged, t.messagePrefix = this.data.notification.messagePrefix || !1, t.moreThan = this.data.notification.moreThan || !1, t.plural = this.data.notification.plural, t.inbox = this.data.notification.inbox, t.logout = this.data.notification.logout), e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        var c = "";
                        n.data = e, c += n.login();
                        var l = {
                            className: "" + e.type,
                            key: e.key,
                            "data-category": "header",
                            "data-area": "header",
                            "data-position": "coluna-unica"
                        };
                        r.render(c, "article", l).then(function() {
                            var n = s.helpers.serviceStatus || {},
                                i = "virtualDom" in n ? n.virtualDom : null;
                            (t || !1 === i) && new o(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = i.helpers.serviceStatus,
        o = function() {
            function e(t) {
                var n = this;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.data = t, this.timeout = null, this.timer = 6e3, t.key && (this.instance = document.querySelector("[data-key='" + t.key + "']"), this.binds(), i.helpers.konsole("log", ":: EMAIL INIT ::"), i.helpers.insertMetrics(this.instance), window.hevents.on("widgetProfileNotification", function(e) {
                        n.applyNotification(e)
                    }), !1 !== this.data.load))
                    if ("widgetProfile" in window && window.widgetProfile.Settings) {
                        var a = window.widgetProfile.Settings.getAuth() || {};
                        this.applyNotification(a)
                    } else this.timeout = window.setTimeout(function() {
                        i.helpers.konsole("log", "Email exibido deslogado por demora/falta de resposta do widgetProfile"), n.applyNotification({})
                    }, this.timer)
            }
            return a(e, [{
                key: "binds",
                value: function() {
                    var e = this.instance.querySelector("form.email_form");
                    e.querySelector(".email_form_send").addEventListener("click", function(t) {
                        t.preventDefault(), i.helpers.metrics({
                            action: e.getAttribute("action"),
                            category: "header",
                            area: "header",
                            label: "email-entrar",
                            position: "coluna-unica"
                        }), e.submit()
                    })
                }
            }, {
                key: "handleData",
                value: function(e) {
                    if (e.moreThan = "", e.auth = e.auth || {
                            isLogged: !1
                        }, e.auth.emails && e.auth.emails.domain.length && "uol.com.br" === e.auth.emails.domain[0] || (e.auth.isLogged = !1), !e.auth.isLogged) return e;
                    if (e.auth.namPerson) {
                        e.name = e.auth.namPerson.split(" ")[0].toLowerCase(), e.name = e.name.length > 13 ? e.name.slice(0, 11) + "..." : e.name
                    }
                    return e.count = e.auth.emails.counter, e.logout = "https://acesso.uol.com.br/logout.html?dest=REDIR|" + window.location.href.replace(/&/g, "%26"), e.inbox = e.auth.emails.url || "https://email.uol.com.br/", "number" != typeof e.count && (e.count = 0), 0 === e.count ? (e.hasEmail = "no-email", e.messagePrefix = "você não tem novos emails") : e.count > 99 && (e.moreThan = "more-than-100", e.count = "+99"), e.count > 1 && (e.plural = !0), e
                }
            }, {
                key: "notificationSuccess",
                value: function(e) {
                    e = this.handleData(e), this.data.notification = e, !1 !== this.data.load && (this.data.load = !1), n(34).render(this.data)
                }
            }, {
                key: "applyNotification",
                value: function(e) {
                    this.clearTimeout(), r && r.hasOwnProperty("widgetNotificacao") && !0 === r.widgetNotificacao ? this.notificationSuccess(e) : i.helpers.konsole("info", "[EMAIL NOTIFY]: disabled")
                }
            }, {
                key: "clearTimeout",
                value: function() {
                    this.timeout && (window.clearTimeout(this.timeout), this.timeout = null)
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(1),
        o = n(13),
        s = n(2),
        c = n(9),
        l = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "IconRender",
                value: function(e) {
                    var t = new r("icons");
                    if (!("icons" in e) || "object" !== a(e.icons) || e.icons.length < 1) return !1;
                    var n = e.icons;
                    e.icons = "", n.forEach(function(n) {
                        if (n.length) {
                            var a = {
                                icon: n,
                                ariaName: n in c ? c[n] : ""
                            };
                            e.icons += t.render(a)
                        }
                    })
                }
            }, {
                key: "liveComponent",
                value: function(e) {
                    var t = this,
                        n = new r("label"),
                        a = new r("score"),
                        i = new r("icons"),
                        o = new r("realtime"),
                        s = i.render({
                            icon: "close",
                            ariaName: "versus",
                            styles: "iconVs"
                        }),
                        c = i.render({
                            icon: "badge",
                            ariaName: "Sem brasão",
                            styles: "team_logo__home noBadge"
                        }),
                        l = i.render({
                            icon: "badge",
                            ariaName: "Sem brasão",
                            styles: "team_logo__away noBadge"
                        }),
                        u = "",
                        d = "";
                    return this.data.collections.forEach(function(i) {
                        i.header = "", i.section = t.data.section;
                        var r = function() {
                            return t.isWorldcupScore ? i.section : "accordionItem" + (i.header.length ? " hasLabel" : "")
                        };
                        "soccer" == i.type ? (i.label = "placar", i.vs = s, i.init = e, i.isToday = t.data.isToday, "worldcup" == i.section && (i.worldcup = !0, i.label = ""), "worldcup" == t.data.section && (i.teamHome.logo = "https://conteudo.jsuol.com.br/c/_template/v2/media.svg?path=static/v2&icon=worldcup/" + i.teamHome.initials.toLowerCase() + "&asImage=true", i.teamAway.logo = "https://conteudo.jsuol.com.br/c/_template/v2/media.svg?path=static/v2&icon=worldcup/" + i.teamAway.initials.toLowerCase() + "&asImage=true"), "" == i.teamHome.logo && (i.noBadge1 = !0, i.badgeDefault1 = c), "" == i.teamAway.logo && (i.noBadge2 = !0, i.badgeDefault2 = l), d != i.label && (i.header = n.render(i)), i.clsName = r(), t.data.collections.length <= 1 && (i.clsName += " eq0"), u += a.render(i)) : (i.label = i.kicker || "ao vivo", t.IconRender(i), d != i.label && (i.header = n.render(i)), i.clsName = r(), u += o.render(i)), d = i.label
                    }), u
                }
            }, {
                key: "toggleButton",
                value: function() {
                    var e = new r("togglebutton"),
                        t = {
                            classButton: "toggleButton"
                        };
                    return t.buttonText = this.data.isCollapsed ? "fechar" : "carregar todos", t.isCollapsed = this.data.isCollapsed || !1, e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e, n.isWorldcupScore = e.hasOwnProperty("isToday") && "worldcup" == e.section;
                        var c = "",
                            l = n.data.isCollapsed ? "expanded" : "collapsed";
                        if (n.data.collections)
                            if (c += n.liveComponent(t), n.isWorldcupScore) {
                                var u = void 0,
                                    d = void 0,
                                    p = void 0,
                                    m = void 0,
                                    f = new r("label"),
                                    h = new r("bottom-link");
                                l = " matches-of", d = "label-worldcup ", n.data.isToday ? u = n.data.collections.length > 1 ? "Jogos do Dia" : "Jogo do Dia" : (d += "next-matches", m = "14/07" == (p = n.data.date.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, "$3/$2")) ? "Sab" : "15/07" == p ? "Dom" : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"][new Date(n.data.date.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, "$1-$2-$3T00:00:00")).getUTCDay()], u = (n.data.collections.length > 1 ? "Próximos Jogos" : "Próximo Jogo") + " <small>" + p + " (" + m + ")</small>"), c = f.render({
                                    labelClass: d || "",
                                    link: "https://esporte.uol.com.br/futebol/copa-do-mundo/tabela-da-copa/calendario/",
                                    label: u,
                                    metrics: {
                                        label: "abrir-jogos-do-dia",
                                        position: "coluna-3"
                                    }
                                }) + c + h.render({
                                    text: "Tabela Completa",
                                    link: "https://esporte.uol.com.br/futebol/copa-do-mundo/tabela-da-copa/",
                                    metrics: {
                                        label: "abrir-tabela-copa",
                                        position: "coluna-3"
                                    }
                                })
                            } else n.data.collections.length > 3 ? (l = l.concat(" hasButton"), c += n.toggleButton()) : l = "scoreItems" + (1 === n.data.collections.length ? "" : n.data.collections.length);
                        var v = {
                            className: e.type + " " + e.section + " " + l + " card card_gutter",
                            "data-key": e.key,
                            key: e.key,
                            "aria-expanded": e.isCollapsed,
                            "data-category": e.metrics.category,
                            "data-area": e.metrics.area,
                            "data-position": e.metrics.position
                        };
                        s.render(c, "article", v).then(function() {
                            t && new o(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new l
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(38),
        s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "image",
                value: function() {
                    var e = new i("image"),
                        t = this.data.image || {};
                    return t && (t.type = this.data.type), e.render(t)
                }
            }, {
                key: "meta",
                value: function() {
                    var e = new i("meta"),
                        t = {
                            advertisingLabel: !1,
                            meta: "componente de teste"
                        };
                    return t.type = this.data.type, t.section = this.data.section, e.render(t)
                }
            }, {
                key: "article",
                value: function() {
                    var e = new i("article"),
                        t = {
                            icons: "",
                            iconPlayer: "",
                            iconPhoto: ""
                        };
                    t.type = this.data.type, t.image = this.image(), t.title = "componente de teste", t.lead = this.data.lead, t.section = this.data.section || !1;
                    var n = {
                        items: t
                    };
                    return e.render(n)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        var s = "";
                        n.data = e, e || i(), s += n.meta(), s += n.article();
                        var c = {
                            className: e.type + " card",
                            key: e.key
                        };
                        r.render(s, "article", c).then(function() {
                            t && new o(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new s
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.data = t, this.count = 0, this.foo()
        }
        return a(e, [{
            key: "foo",
            value: function() {
                var e = this.data,
                    t = this.count,
                    a = n(37);
                document.querySelector("[data-key='" + e.key + "'] h3").addEventListener("click", function() {
                    e.lead = "Componente teste " + t++, a.render(e)
                })
            }
        }]), e
    }();
    e.exports = i
}, function(e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.instance && a.helpers.insertMetrics(this.instance)
    }
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = n(1),
        o = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), t.key && (document.querySelector("body").insertAdjacentHTML("beforeend", this.modalRender()), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.button = this.instance.querySelector(".report_button"), this.modal = document.querySelector(".modal_report"), this.modalForm = this.modal.querySelector(".modalForm"), this.modalContainer = this.modal.querySelector(".modal_container"), this.descriptionHeader = this.modal.querySelector(".modalHeader .modalDescription"), this.descriptionEnviar = this.modal.querySelector(".modal_container > .modalDescription"), this.inputs = this.inputs(), this.inputs.forEach(function(e) {
                    var t = e.textarea ? "textarea" : "input";
                    n[e.id] = n.modalForm.querySelector(t + '[name="' + e.id + '"]')
                }), this.emailWasSent = !1, this.report())
            }
            return a(e, [{
                key: "setModalHeight",
                value: function(e) {
                    if (e && "blur" === e.type && e.relatedTarget) {
                        var t = this.modalForm.querySelectorAll("input, textarea");
                        if (-1 != Array.prototype.slice.call(t).indexOf(e.relatedTarget)) return !1
                    }
                    var n = window.innerHeight,
                        a = this.modal.getBoundingClientRect(),
                        i = n - (a.top && a.top > 0 ? a.top : 40) + "px";
                    this.modalContainer.style.maxHeight = i
                }
            }, {
                key: "inputs",
                value: function() {
                    return [{
                        id: "name",
                        name: "Nome",
                        input: !0,
                        inputType: "text"
                    }, {
                        id: "email",
                        name: "Email",
                        input: !0,
                        inputType: "email"
                    }, {
                        id: "description",
                        name: "Descrição do erro",
                        textarea: !0
                    }]
                }
            }, {
                key: "modalRender",
                value: function() {
                    var e = new r("modal"),
                        t = new r("modal-header"),
                        n = new r("modal-description"),
                        a = new r("modal-form"),
                        i = new r("icons"),
                        o = {
                            text: "Comunique à Redação erros de português, informação ou técnicos encontrados nesta página:",
                            subTitle: "Home page do UOL Mobile"
                        },
                        s = {};
                    s.icon = i.render({
                        icon: "report"
                    }), s.title = "comunicar erro", s.modalDescription = n.render(o);
                    var c = {};
                    c.items = this.inputs(), c.text = "Obs: O link e o título da página que você está são enviados automaticamente ao UOL.", c.submit = !0;
                    var l = {
                            text: "O UOL agradece sua colaboração. Sua mensagem será analisada pela Redação e os erros confirmados serão corrigidos.",
                            title: "Enviado com sucesso<br/> para a Redação",
                            hide: !0,
                            buttonExit: !0
                        },
                        u = {
                            type: "report"
                        };
                    return u.buttonClose = i.render({
                        icon: "close"
                    }), u.modalDescription = n.render(l), u.modalHeader = t.render(s), u.modalForm = a.render(c), u.hide = !0, u.scroll = !0, e.render(u)
                }
            }, {
                key: "display",
                value: function(e, t) {
                    this[t ? "removeClass" : "addClass"](e, "hide")
                }
            }, {
                key: "addClass",
                value: function(e, t) {
                    e && !e.classList.contains(t) && e.classList.add(t)
                }
            }, {
                key: "removeClass",
                value: function(e, t) {
                    e && e.classList.contains(t) && e.classList.remove(t)
                }
            }, {
                key: "resetForm",
                value: function() {
                    var e = this;
                    this.removeClass(this.modalForm, "animateOut"), this.removeClass(this.descriptionHeader, "animateOut"), this.removeClass(this.descriptionEnviar, "animate"), this.display(this.modalForm, !0), this.display(this.descriptionHeader, !0), this.display(this.descriptionEnviar, !1), this.inputs.forEach(function(t) {
                        var n = e[t.id].parentNode;
                        n.querySelector(".modalForm_error__text").innerHTML = "", e.removeClass(n, "modalForm_error"), e[t.id].value = ""
                    }), this.emailWasSent = !1
                }
            }, {
                key: "postForm",
                value: function(e) {
                    var t = this;
                    JSON.parse(e).success && (this.emailWasSent = !0, i.helpers.overlay.metrics.close = {
                        action: "clique",
                        category: "modal-comunicar-erro",
                        area: "modal-comunicar-erro",
                        label: "fechar-clique-fora-sucesso",
                        position: "coluna-unica"
                    }, this.addClass(this.modalForm, "animateOut"), this.addClass(this.descriptionHeader, "animateOut"), this.addClass(this.descriptionEnviar, "animate"), setTimeout(function() {
                        t.display(t.modalForm, !1), t.display(t.descriptionHeader, !1), t.display(t.descriptionEnviar, !0)
                    }, 300))
                }
            }, {
                key: "validateForm",
                value: function() {
                    var e = this,
                        t = !0;
                    return this.inputs.forEach(function(n) {
                        var a = n.id,
                            i = e[a].value,
                            r = e[a].parentNode,
                            o = r.querySelector(".modalForm_error__text");
                        r.className = "modalForm_listItem";
                        var s = void 0,
                            c = "";
                        switch (a) {
                            case "name":
                                s = i.length < 4, c = "campo obrigatório (mínimo 4 caracteres)";
                                break;
                            case "email":
                                s = null == new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/).exec(i), c = "email inválido";
                                break;
                            case "description":
                                s = i.length < 10, c = "campo obrigatório (mínimo 10 caracteres)"
                        }
                        s && (t = !1, r.className += " modalForm_error", o.innerHTML = c)
                    }), t
                }
            }, {
                key: "closeModal",
                value: function(e) {
                    var t = this.emailWasSent ? "-sucesso" : "",
                        n = "modal";
                    e && e.classList.contains("modal_button") && (n = "botao"), i.helpers.overlay.metrics.close = {
                        action: "clique",
                        category: "modal-comunicar-erro",
                        area: "modal-comunicar-erro",
                        label: "fechar-" + n + t,
                        position: "coluna-unica"
                    }, i.helpers.overlay.hide(), this.resetForm(), this.modalContainer.style.maxHeight = "none"
                }
            }, {
                key: "openModal",
                value: function() {
                    this.resetForm(), i.helpers.overlay.metrics.open = {
                        action: "clique",
                        category: "footer",
                        area: "rodape",
                        label: "comunicar-erro-abrir",
                        position: "coluna-unica"
                    }, i.helpers.overlay.metrics.close = {
                        action: "clique",
                        category: "modal-comunicar-erro",
                        area: "modal-comunicar-erro",
                        label: "fechar-clique-fora",
                        position: "coluna-unica"
                    }, this.display(this.modal, !0), i.helpers.overlay.show(), this.setModalHeight()
                }
            }, {
                key: "handleStr",
                value: function(e) {
                    return encodeURIComponent(e.replace(/"/g, '"').replace(/`/g, "'"))
                }
            }, {
                key: "report",
                value: function() {
                    var e = this;
                    this.button.addEventListener("click", this.openModal.bind(this));
                    var t = this.modalForm.querySelectorAll("input, textarea");
                    Array.prototype.slice.call(t).forEach(function(t) {
                        t.addEventListener("focus", e.setModalHeight.bind(e))
                    }), window.addEventListener("resize", function() {
                        e.modal && !e.modal.classList.contains("hide") && e.setModalHeight()
                    }, !1);
                    var n = this.modal.querySelectorAll(".button_close");
                    Array.prototype.slice.call(n).forEach(function(t) {
                        t.addEventListener("click", function() {
                            e.closeModal(t)
                        })
                    }), this.modal.querySelector(".modal_SubmitButton").addEventListener("click", function(t) {
                        if (t.preventDefault(), e.validateForm()) {
                            var n = "";
                            n = i.helpers.getParameter("reportWebmaster") ? 999 : 5;
                            var a = "link=https://www.uol.com.br/&nome=" + e.handleStr(e.name.value) + "&email=" + e.email.value + "&mensagem=" + e.handleStr(e.description.value) + "&estacao=" + n + "&flash=Não&cookies=0";
                            i.helpers.ajx("POST", "//services.uol.com/see/", a).then(e.postForm.bind(e)), i.helpers.metrics({
                                action: "clique",
                                category: "modal-comunicar-erro",
                                area: "modal-comunicar-erro",
                                label: "enviar",
                                position: "coluna-unica"
                            })
                        }
                    })
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = n(0);
    e.exports = function e(t) {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.instance && (a.helpers.insertMetrics(this.instance), !a.helpers.getParameter("woutBanner") && t.stamp && window.uolads && window.uolads.push({
            id: t.stamp
        }))
    }
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(43),
        o = n(2),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "render",
                value: function(e, t) {
                    return new Promise(function(n, a) {
                        e || a();
                        var c = new i("currency"),
                            l = new i("weather"),
                            u = "",
                            d = "",
                            p = {},
                            m = "currency" in e && 0 != e.currency;
                        if (m) {
                            var f = e.currency.variation,
                                h = /.*dolarWebmaster=(up|down|stable).*/;
                            window.location.search.match(h) && (f = window.location.search.replace(h, "$1")), p.variation = f, p.quote = e.currency.quote, p.metrics = e.metrics, u += c.render(p)
                        } else d += " services_currencyDown";
                        var v = {},
                            g = "weather" in e && 0 != e.weather;
                        g ? (e.weather.city ? v = e.weather : v.loading = !0, u += l.render(v)) : d += " services_weatherDown";
                        var y = {
                            className: e.type + " card " + d,
                            key: e.key
                        };
                        m || g ? o.render(u, "ul", y).then(function() {
                            var a = s.helpers.serviceStatus || {},
                                i = "virtualDom" in a ? a.virtualDom : null;
                            (t || !1 === i) && new r(e), n()
                        }).catch(function(e) {
                            a(e)
                        }) : n()
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(1),
        o = n(154),
        s = n(155),
        c = new r("suggest-search"),
        l = new r("icons"),
        u = n(0),
        d = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var a = t && "key" in t && document.querySelector('[data-key="' + t.key + '"]');
                if (a && (this.weatherStr = "uolTemp_city", this.city_default = {
                        normalizado: "saopaulo",
                        nome: "São Paulo",
                        uf: "SP"
                    }, this.add_storage = !1, this.geolocation = !0, this.suggestContainer = null, this.data = t, this.instance = a, this.currencyContainer = a.querySelector(".currency"), u.helpers.insertMetrics(this.currencyContainer), this.weatherContainer = a.querySelector(".weather"), this.weatherContainer)) {
                    var i = function() {
                        if (this.binds(), this.geolocation) localStorage.removeItem(this.weatherStr);
                        else if (localStorage.getItem(this.weatherStr) && "null" != localStorage.getItem(this.weatherStr)) {
                            var e = localStorage.getItem(this.weatherStr);
                            this.city_default = JSON.parse(e)
                        } else this.saveCity();
                        this.weatherContainer.classList.contains("loading") && this.getCityData()
                    }.bind(this);
                    this.geolocation ? (this.geolocation = new s, this.geolocation.init().then(function(e) {
                        var t = n.geolocFormat(e);
                        n.city_default = t, u.helpers.konsole("log", "GEOLOC init", t), i()
                    }).catch(function() {
                        i()
                    })) : i()
                }
            }
            return i(e, [{
                key: "makeSuggest",
                value: function(e) {
                    var t = this;
                    return !!e && new o(e, {
                        source: "https://search.uol.com.br/?format=jsonp&jsonp=%callback&size=%max&fields=municipio-normalizado,municipio,uf,id&repository=city&cd=%query",
                        cache: !0,
                        max_results: 4,
                        charset: "iso-8859-1",
                        input: e.q,
                        queryURL: function(e) {
                            return o.normalizeString(e, !1).replace(/ /g, "+AND+")
                        },
                        data: function(e) {
                            return e.docs
                        },
                        item: function(e) {
                            return e.municipio
                        },
                        markup: function(e) {
                            return '<li data-normalizado="' + e["municipio-normalizado"] + '" data-nome="' + e.municipio + '" data-uf="' + e.uf.toLowerCase() + '">' + e.municipio + " <span>" + e.uf + "</span></li>"
                        },
                        errorMarkup: function() {
                            return '<li class="error">' + l.render({
                                ariaName: "Serviço indisponível",
                                icon: "alert"
                            }) + " Serviço indisponível no momento. <br/>Tente novamente mais tarde</li>"
                        },
                        sort: function(e) {
                            return e.sort(function(e, t) {
                                return e["municipio-normalizado"].length < t["municipio-normalizado"].length ? -1 : 1
                            })
                        },
                        onSelect: function(e) {
                            var n = e.getAttribute("data-nome"),
                                a = e.getAttribute("data-uf");
                            t.city_default.nome === n && t.city_default.uf === a || (t.setCity(n, a), t.add_storage = !0, t.getCityData()), u.helpers.metrics({
                                action: "clique",
                                category: "modal",
                                area: "modal-previsao",
                                label: "selecionar-cidade-previsao-tempo",
                                position: "coluna-unica"
                            }), t.closeSuggest()
                        }
                    })
                }
            }, {
                key: "cleanSuggest",
                value: function() {
                    var e = document.querySelector('input[name="q"]');
                    if (e.value.length > 0) {
                        e.value = "";
                        var t = Object.assign({}, u.helpers.overlay.metrics.close || {});
                        t.label = "limpar-campo-texto", u.helpers.metrics(t)
                    } else this.closeSuggest(!0)
                }
            }, {
                key: "closeSuggest",
                value: function(e, t) {
                    e || (u.helpers.overlay.metrics.close = null), u.helpers.overlay.hide(t)
                }
            }, {
                key: "suggestAct",
                value: function() {
                    var e = this,
                        t = this.suggestContainer.querySelector(".icons");
                    t && t.addEventListener("click", function() {
                        e.cleanSuggest(!0)
                    })
                }
            }, {
                key: "suggestOpen",
                value: function(e) {
                    if (this.suggestContainer) this.suggestContainer.classList.remove("hide");
                    else {
                        var t = {
                                label: "<p>PREVISÃO DO TEMPO</p>",
                                placeholder: "Busque cidades no Brasil",
                                form: {
                                    name: "suggestSearch_form__weather",
                                    submit: "return false;"
                                },
                                icon: l.render({
                                    ariaName: "fechar busca previsão do tempo",
                                    icon: "close"
                                })
                            },
                            n = c.render(t);
                        document.querySelector("body").insertAdjacentHTML("beforeend", n), this.suggestContainer = document.querySelector(".suggestSearch"), this.suggestAct();
                        var a = document[t.form.name];
                        this.makeSuggest(a)
                    }
                    var i = this.suggestContainer.querySelector("#suggest-input");
                    i.value = "", i.focus();
                    var r = e.target || e.srcElement;
                    u.helpers.overlay.metrics.open = {
                        action: "clique",
                        category: "header",
                        label: r === this.weatherContainer.querySelector(".icons_arrow_down") ? "trocar-previsao-tempo-icone" : "trocar-previsao-tempo",
                        area: "header",
                        position: "coluna-unica"
                    }, u.helpers.overlay.metrics.close = {
                        action: "clique",
                        category: "modal",
                        label: "fechar-previsao-tempo",
                        labelOver: "fechar-fora-previsao-tempo",
                        area: "modal-previsao",
                        position: "coluna-unica"
                    }, u.helpers.overlay.show()
                }
            }, {
                key: "hideContent",
                value: function() {
                    var e = this.instance;
                    e && (e.classList.contains("services_currencyDown") ? e.remove() : (e.classList.add("services_weatherDown"), this.weatherContainer && this.weatherContainer.remove()))
                }
            }, {
                key: "remove_accents",
                value: function(e) {
                    for (var t = "Áãàáäâèéëêìíïîòóöôõùúüûñç·/_,:;", n = 0, a = t.length; n < a; n++) e = e.replace(new RegExp(t.charAt(n), "g"), "Aaaaaaeeeeiiiiooooouuuunc------".charAt(n));
                    return e = e.replace(/\s+/g, "").replace(/[d,D]'[o,O]/, "doO").replace(/[d,D]'[a,A]/, "Da")
                }
            }, {
                key: "getTitle",
                value: function(e) {
                    var t = e.replace("-n", ""),
                        n = {
                            cc: "Céu claro",
                            ch: "Chuvoso",
                            tr: "Trovoadas",
                            pi: "Pancadas isoladas",
                            cv: "Chuvisco",
                            nb: "Nublado",
                            ge: "Geada",
                            ne: "Neve",
                            nv: "Névoa",
                            en: "Encoberto",
                            nc: "Nublado com chuva",
                            pc: "Pancadas de chuva",
                            pn: "Poucas nuvens"
                        };
                    return t in n ? n[t] : ""
                }
            }, {
                key: "activeIcon",
                value: function(e) {
                    var t = e.toLowerCase(),
                        n = {
                            tr: "ch",
                            "tr-n": "ch-n"
                        };
                    return t in n ? n[t] : t
                }
            }, {
                key: "getIcon",
                value: function(e) {
                    return e && e.label && (e.label = this.activeIcon(e.label), e.icon = l.render({
                        ariaName: this.getTitle(e.label),
                        icon: "weather-" + e.label
                    }), e.status = this.getTitle(e.label)), e
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this,
                        a = screen.width,
                        i = a < 370 ? 14 : a < 380 ? 22 : 0;
                    e.weather.city && i && e.weather.city.length > i && (e.weather.city = e.weather.city.substring(0, i - 3) + "..."), n(42).render(e).then(function() {
                        t.weatherContainer.classList.remove("loading")
                    })
                }
            }, {
                key: "normalize",
                value: function(e) {
                    return {
                        state: e[0],
                        city: e[1],
                        min: e[2],
                        max: e[3],
                        label: e[4],
                        button: l.render({
                            ariaName: "buscar cidade previsão do tempo",
                            icon: "arrow_down"
                        })
                    }
                }
            }, {
                key: "geolocFormat",
                value: function(e) {
                    return {
                        normalizado: this.remove_accents(e.city),
                        nome: e.city,
                        uf: e.state
                    }
                }
            }, {
                key: "getCityData",
                value: function() {
                    this.getDataFromCity({
                        name: this.city_default.normalizado,
                        uf: this.city_default.uf.toUpperCase()
                    })
                }
            }, {
                key: "getDataFromCity",
                value: function(e) {
                    var t = this,
                        n = "https://geoip.home.uol.com/states/" + e.uf.toLowerCase() + "/" + e.name.toLowerCase() + ".js",
                        i = !1,
                        r = !0;
                    window.location.search.match(/weatherWebmaster=?/) && "saopaulo" === e.name.toLowerCase() && (n = n + "?sigla=" + (window.location.search.replace(/.*weatherWebmaster=?([^\&$]*)/, "$1") || "nb"));
                    u.helpers.jsonp(n, "jsonp", "Weather.callback").then(function(e) {
                        if (!r) return !1;
                        if (i = !0, "object" !== (void 0 === e ? "undefined" : a(e)) || 6 !== e.length) return t.hideContent(), !1;
                        for (var n = 0; n < e.length; n++)
                            if (void 0 === e[n] || null === e[n] || "" === e[n]) return t.hideContent(), !1;
                        var o = t.setData(e);
                        t.render(o)
                    }).catch(function() {
                        i = !0, t.hideContent()
                    }), setTimeout(function() {
                        i || (r = !1, t.hideContent())
                    }, 15e3)
                }
            }, {
                key: "setCity",
                value: function(e, t) {
                    return this.city_default = {
                        normalizado: this.remove_accents(e),
                        nome: e,
                        uf: t
                    }
                }
            }, {
                key: "setData",
                value: function(e) {
                    var t = this.normalize(e);
                    return t = this.getIcon(t), this.add_storage && (this.setCity(t.city, t.state), this.geolocation ? this.geolocation.change(t.state, t.city) : this.saveCity()), this.data.weather = t, this.data
                }
            }, {
                key: "saveCity",
                value: function() {
                    localStorage.setItem(this.weatherStr, JSON.stringify(this.city_default))
                }
            }, {
                key: "check",
                value: function() {
                    return new Promise(function(e) {
                        e()
                    })
                }
            }, {
                key: "binds",
                value: function() {
                    var e = this;
                    this.weatherContainer.addEventListener("click", function(t) {
                        e.check().then(function() {
                            e.suggestOpen(t)
                        }).catch(function(e) {
                            u.helpers.konsole("error", "Weather Check:", e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = d
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(45),
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, o) {
                        var s = document.querySelector("#smart-banner");
                        s && e || o(), n.data = e;
                        var c, l = new i("icons"),
                            u = new i("smartbanner"),
                            d = e.platformData || {};
                        d.metrics = e.metrics || {}, d.iconSee = l.render({
                            icon: "arrow_right",
                            ariaName: "Veja o aplicativo na loja"
                        }), d.iconClose = l.render({
                            icon: "close",
                            ariaName: "Fechar"
                        }), c = u.render(d), s.innerHTML = c, s.classList.remove(e.show ? "smartbanner_smartSlideOut" : "smartbanner_smartSlideIn"), s.classList.add(e.show ? "smartbanner_smartSlideIn" : "smartbanner_smartSlideOut"), s = null, t && new r(e), a()
                    })
                }
            }]), e
        }();
    e.exports = new o
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = function() {
            function e(t) {
                var n = this;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.instance = document.querySelector("#smart-banner"), this.instance) {
                    if (this.start(t), this.detectStorage(), this.detectDevice(), !this.platform) return !1;
                    this.data.platformData = this.data.platforms[this.platform], this.data.platformData.price && this.data.platformData.developer && (this.data.platformData.storename = this.storeName[this.platform]), t.metrics.category = t.metrics.category + "-" + i.helpers.slug(this.data.platformData.appname), this.loadStorage(), this.widget.render(t, !1).then(function() {
                        n.bind();
                        var e = n.instance.querySelector(".smartbanner_container");
                        i.helpers.insertMetrics(e)
                    })
                }
            }
            return a(e, [{
                key: "bind",
                value: function() {
                    var e = this;
                    this.instance.querySelector(".close").addEventListener("click", function(t) {
                        t.preventDefault(), e.close()
                    })
                }
            }, {
                key: "close",
                value: function() {
                    var e = this.data.metrics;
                    if (e.action = "clique", e.label = "fechar", i.helpers.metrics(e)) {
                        var t = new Date;
                        t.setDate(t.getDate() + this.showAgain), this.control[this.data.platformData.appname] = t.getTime(), this.saveStorage(), this.data.show = !1, this.widget.render(this.data, !1)
                    }
                }
            }, {
                key: "detectDevice",
                value: function(e) {
                    var t = e || navigator.userAgent;
                    null != t.match(/Windows Phone/i) && null !== t.match(/Touch/i) ? this.platform = "windows" : null != t.match(/iPhone|iPod|iPad/i) && null != t.match(/Safari/i) ? (this.iDevice = t.match(/iPad/) ? "tablet" : "phone", this.platform = "ios") : null != t.match(/Android/i) ? this.platform = "android" : this.platform = !1
                }
            }, {
                key: "detectStorage",
                value: function() {
                    this.storageEnabled = !0;
                    try {
                        localStorage.setItem("storageDetection", "true"), localStorage.removeItem("storageDetection")
                    } catch (e) {
                        this.storageEnabled = !1
                    }
                }
            }, {
                key: "loadStorage",
                value: function() {
                    this.storageEnabled && localStorage.getItem("sb-control") && (this.data.show = JSON.parse(localStorage.getItem("sb-control"))[this.data.platformData.appname] <= (new Date).getTime())
                }
            }, {
                key: "saveStorage",
                value: function() {
                    this.storageEnabled && localStorage.setItem("sb-control", JSON.stringify(this.control))
                }
            }, {
                key: "start",
                value: function(e) {
                    this.data = e, this.data.show = !0, this.widget = n(44), this.storeName = {
                        ios: " - Na App Store",
                        android: " - Na Google Play Store",
                        windows: " - Na Windows Store"
                    }, this.control = {}, this.platform = null, this.showAgain = 15
                }
            }]), e
        }();
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(0),
        o = function() {
            function e(t) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.data = t, this.instance = document.querySelector('[data-key="' + t.key + '"]'), this.structure = {}, this.id_item, this.selectedVoted = !1, this.scrollBBB, this.init(), window["resultCaptcha" + t.key] = function() {
                    n.display(n.instance.querySelector(".survey_content__button"), !1), r.helpers.overlay.metrics.close = null, n.closeModal();
                    var e = window.grecaptcha.getResponse();
                    r.helpers.metrics({
                        action: "clique",
                        category: "bloco-editorial-bbb",
                        area: "bbb",
                        label: "enquete-captcha-confirmar",
                        position: "coluna-unica"
                    }), n.survey_vote(n.data["poll-id"], n.id_item, e)
                }
            }
            return a(e, [{
                key: "display",
                value: function(e, t) {
                    e && e.classList && (t ? (e.classList.contains("hide") && e.classList.remove("hide"), e.classList.add("show")) : (e.classList.contains("show") && e.classList.remove("show"), e.classList.add("hide")))
                }
            }, {
                key: "survey_vote",
                value: function(e, t, n) {
                    var a = this,
                        i = n ? "&g-recaptcha-response=" + n : "";
                    r.helpers.jsonp(location.protocol + "//enquete.uol.com.br/vote?format=jsonp&id=" + e + "&answers=" + t + i).then(function(e) {
                        a.survey_general(e, !0)
                    }).catch(function(e) {
                        return e
                    })
                }
            }, {
                key: "closeModal",
                value: function(e) {
                    document.querySelector(".modal_survey") && document.querySelector(".modal_survey").classList.add("hide"), e && (r.helpers.overlay.metrics.close = {
                        action: "clique",
                        category: "bloco-editorial-bbb",
                        area: "bbb",
                        label: "enquete-captcha-fechar-modal",
                        position: "coluna-unica"
                    }), r.helpers.overlay.hide()
                }
            }, {
                key: "bindClose",
                value: function() {
                    var e = this,
                        t = document.querySelector(".modal_survey .button_close");
                    t && t.addEventListener("click", function() {
                        e.closeModal(!0)
                    })
                }
            }, {
                key: "openModal",
                value: function() {
                    if (!this.instance.querySelector(".survey_content__button").getAttribute("disabled")) {
                        this.scrollBBB = window.scrollY;
                        var e = document.querySelector(".modal_survey");
                        e || (document.querySelector("body").insertAdjacentHTML("beforeend", this.modalRender(this.data.key)), this.bindClose(), e = document.querySelector(".modal_survey")),
                            function t() {
                                window.setTimeout(function() {
                                    var n = document.querySelector('iframe[src^="https://www.google.com/recaptcha"][title]'),
                                        a = n && n.parentNode && n.parentNode.parentNode || !1;
                                    a ? a.className = "aboveOverlay surveyModal_captchaShow" : e && !e.classList.contains("hide") && t()
                                }, 900)
                            }(), e.classList.remove("hide"), r.helpers.overlay.metrics.close = {
                                action: "clique",
                                category: "bloco-editorial-bbb",
                                area: "bbb",
                                label: "enquete-captcha-clique-fora",
                                position: "coluna-unica"
                            }, r.helpers.overlay.show()
                    }
                }
            }, {
                key: "modalRender",
                value: function(e) {
                    var t = new i("icons"),
                        n = new i("modal"),
                        a = new i("modal-header"),
                        r = new i("modal-description"),
                        o = {};
                    o.text = '<form name="captcha">\n                                            <div id="boxCaptcha" class="g-recaptcha" data-sitekey="6LcwbTMUAAAAAH5Due3X8Kpq0QUZBwHYIIeE1bxU" data-callback="resultCaptcha' + e + '"></div>\n                                       </form>';
                    var s = {
                        title: "Confirme o seu voto"
                    };
                    s.modalDescription = r.render(o);
                    var c = {
                        type: "survey"
                    };
                    return c.buttonClose = t.render({
                        icon: "close"
                    }), c.modalHeader = a.render(s), c.hide = !0, n.render(c)
                }
            }, {
                key: "survey_prevote",
                value: function() {
                    r.helpers.metrics({
                        action: "clique",
                        category: "bloco-editorial-bbb",
                        area: "bbb",
                        label: "enquete-voto",
                        position: "coluna-unica"
                    }), this.structure.status && "disabled" !== this.structure.status && (this.structure.security.match(/(re)?captcha/) ? this.openModal() : this.survey_vote(this.data["poll-id"], this.id_item))
                }
            }, {
                key: "survey_view",
                value: function(e) {
                    var t = this;
                    "status" in this.structure && this.structure.status ? this.survey_prevote() : r.helpers.jsonp(location.protocol + "//enquete.uol.com.br/view?format=jsonp&id=" + e).then(function(e) {
                        if (t.structure.status = e && e.status && e.status.toLowerCase() || !1, t.structure.security = "recaptcha", "disabled" !== t.structure.status && t.structure.security.match(/(re)?captcha/)) {
                            var n = document.createElement("script");
                            n.setAttribute("src", "https://www.google.com/recaptcha/api.js"), document.head.appendChild(n)
                        }
                        t.survey_prevote()
                    }).catch(function(e) {
                        return e
                    })
                }
            }, {
                key: "survey_result",
                value: function(e) {
                    var t = this;
                    r.helpers.jsonp(location.protocol + "//enquete.uol.com.br/results?format=jsonp&id=" + e).then(function(e) {
                        t.survey_general(e), r.helpers.metrics({
                            action: "clique",
                            category: "bloco-editorial-bbb",
                            area: "bbb",
                            label: "enquete-resultado",
                            position: "coluna-unica"
                        })
                    }).catch(function(e) {
                        return e
                    })
                }
            }, {
                key: "survey_general",
                value: function(e, t) {
                    if (e && "answers" in e) {
                        var n = {};
                        e.answers.forEach(function(e) {
                            var t = e.id;
                            n[t] = e
                        });
                        var a = this.instance.querySelector(".survey_contentList");
                        Array.prototype.slice.call(a.querySelectorAll("li")).forEach(function(e) {
                            var t = e.getAttribute("data-id");
                            n[t] && (e.querySelector(".survey_contentList__resultText").innerHTML = n[t].percent.toString().replace(/\./, ",") + "%")
                        }), a.classList.add("survey_contentList__resultPercent"), this.instance.querySelector(".survey_content__resultText span").innerHTML = e.votes.toLocaleString("pt-BR"), this.display(this.instance.querySelector(".survey_content__resultButton"), !1), this.display(this.instance.querySelector(".survey_content__resultText"), !0), t && (this.display(this.instance.querySelector(".survey_content__button"), !1), this.display(this.instance.querySelector(".survey_content__textFinalized"), !0), this.selectedVoted = !0, "undefined" != this.scrollBBB && window.scrollTo(0, this.scrollBBB))
                    }
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.instance.querySelector(".survey_content__resultButton").addEventListener("click", function() {
                        e.survey_result(e.data["poll-id"])
                    }), this.instance.querySelector(".survey_content__button").addEventListener("click", function() {
                        e.survey_view(e.data["poll-id"])
                    }), Array.prototype.slice.call(this.instance.querySelectorAll(".survey_contentList li")).forEach(function(t) {
                        t.addEventListener("click", function(t) {
                            var n = t.currentTarget,
                                a = n.getAttribute("data-id"),
                                i = "survey_contentList__btnCheck";
                            a && !e.selectedVoted && (e.id_item = a, Array.prototype.slice.call(e.instance.querySelectorAll("." + i)).forEach(function(e) {
                                e.classList.remove(i)
                            }), n.classList.add(i), e.instance.querySelector(".survey_content__button").removeAttribute("disabled"))
                        })
                    })
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(48),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "thematicTitle",
                value: function() {
                    var e = new i("thematic-title"),
                        t = {};
                    return t.title = this.data.title || !1, t.section = this.data.section || !1, t.iconTitle = "", e.render(t)
                }
            }, {
                key: "seeLater",
                value: function() {
                    var e = new i("see-later"),
                        t = {};
                    return t.showSeeLater = s.helpers.serviceStatus.seeLater, e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, c) {
                        e || c(), n.data = e;
                        var l = "",
                            u = "loading";
                        if (l += n.thematicTitle(), e.tailtargetData) {
                            e.metrics && e.tailtargetData.articleList && e.tailtargetData.articleList.forEach(function(t, n) {
                                if (t.metrics = JSON.parse(JSON.stringify(e.metrics)) || {}, t.metrics.label && t.kicker) {
                                    var a = s.helpers.slug(t.kicker);
                                    t.metrics.label = "chamada-tt-" + a
                                }
                                t.metrics.position && (t.metrics.position = t.metrics.position + "-" + (n + 1))
                            }), u = "";
                            var d = new i("article-list");
                            e.tailtargetData.articleList.forEach(function(e) {
                                e.seeLater = this.seeLater()
                            }, n), l += d.render(e.tailtargetData)
                        }
                        var p = {
                            className: e.type + " card card_gutter " + u,
                            key: e.key
                        };
                        r.render(l, "", p).then(function() {
                            t && new o(e);
                            var n = document.querySelector("[data-key='" + e.key + "']");
                            s.helpers.insertMetrics(n), window.lazyload && window.lazyload.update(), window.seeLater && window.seeLater.update(), a()
                        }).catch(function(e) {
                            c(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(0),
        o = function() {
            function e(t) {
                var a = this;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.instance = document.querySelector('[data-key="' + t.key + '"]'), this.instance) {
                    var i = n(47);
                    this.data = t, this.widgetItems = 4, this.limitChars = 75, this.tagInterests = {
                        educacao: {
                            interest: "55",
                            tag: "16614",
                            chapeu: "Educação"
                        },
                        carros: {
                            interest: "CA6824",
                            tag: "13014",
                            chapeu: "Carros"
                        },
                        tecnologia: {
                            interest: "CA7239",
                            tag: "13703",
                            chapeu: "Tecnologia"
                        },
                        economia: {
                            interest: "CA7248",
                            tag: "22373",
                            chapeu: "Economia"
                        },
                        "ciencia-e-saude": {
                            interest: "13",
                            tag: "76752",
                            chapeu: "Ciência e Saúde"
                        }
                    }, this.newsTailtarget().then(function(e) {
                        t.tailtargetData = e, i.render(t, !1)
                    }).catch(function() {
                        a.instance.remove()
                    })
                }
            }
            return a(e, [{
                key: "newsTailtarget",
                value: function() {
                    var e = this;
                    for (var t in this.priority = [], this.userInterest = [], this.exceptTags = [], this.intLabels = {}, this.tagLabels = [], this.tagInterests)
                        if (this.tagInterests.hasOwnProperty(t)) {
                            var n = this.tagInterests[t].interest,
                                a = this.tagInterests[t].tag;
                            this.priority.push(a), this.tagLabels.push(t), this.intLabels[a] = this.tagInterests[t], window.TTUser && 1 == window.TTUser.hasInterest(n) ? this.userInterest.push(a) : this.exceptTags.push(a)
                        } var i = r.helpers.basepath("/camaleao/api/tt-widget-noticias.json?v=" + (window.cacheId || "v1.0"));
                    return new Promise(function(t, n) {
                        r.helpers.ajx("GET", i).then(function(a) {
                            if (a.length) {
                                try {
                                    a = JSON.parse(a)
                                } catch (e) {
                                    n()
                                }
                                var i = e.interestedNews(a);
                                if (!i || i.length < e.widgetItems) return !1;
                                t({
                                    articleList: i
                                })
                            } else n()
                        })
                    })
                }
            }, {
                key: "image",
                value: function(e) {
                    return new i("image").render(e)
                }
            }, {
                key: "interestedNews",
                value: function(e) {
                    var t = this,
                        n = [],
                        a = function(t) {
                            return e[t] && e[t].length && e[t].shift()
                        },
                        i = function(e) {
                            for (; o.length < t.widgetItems && e.length;)
                                for (var i = function(i) {
                                        if (o.length >= t.widgetItems) return "break";
                                        var s = e[i],
                                            c = a(s);
                                        ! function e() {
                                            c && -1 !== n.indexOf(c.id) && (c = a(s), e())
                                        }(), c ? (c.kicker = t.intLabels[s].chapeu || "", c.title = c.titulo, c.section = t.data.section, c.imagemTail = {
                                            src: c.imagem,
                                            alt: c["imagem-credito"],
                                            credit: c["imagem-credito"],
                                            type: "tailtarget"
                                        }, c.image = t.image(c.imagemTail), delete c.titulo, delete c.repository, delete c.imagem, delete c["imagem-credito"], delete c.imagemTail, -1 != t.userInterest.indexOf(s) && (c.hasInterest = !0), o.push(c), n.push(c.id)) : (e.splice(i, 1), i--), r = i
                                    }, r = 0; r < e.length; r++) {
                                    if ("break" === i(r)) break
                                }
                        },
                        r = [this.userInterest, this.exceptTags],
                        o = [];
                    for (var s in r) {
                        if (o.length === this.widgetItems) break;
                        i(r[s])
                    }
                    for (var c = 0; c < o.length; ++c) o[c].title.length > this.limitChars && o[c].imagem && (o[c].title = o[c].title.slice(0, this.limitChars - 1) + "…");
                    return o
                }
            }]), e
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        a = !0,
                        i = !1,
                        r = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); a = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            !a && s.return && s.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var o = n(1),
        s = n(2),
        c = n(9),
        l = n(50),
        u = n(0),
        d = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return r(e, [{
                key: "image",
                value: function(e, t) {
                    var n = new o("image");
                    if (e.type = this.data.type, e.init = t, "" != e.src && /_\d+x\d+/.test(e.src)) {
                        var a = e.src.match(/_(\d+)x(\d+)/),
                            r = i(a, 3),
                            s = r[0],
                            c = r[1],
                            l = r[2];
                        s && c != l ? (e.aspectRatio = "retangular", "420" == l && (e.aspectRatio += " vertical")) : "match" == e.type && (e.aspectRatio = "square")
                    }
                    return n.render(e)
                }
            }, {
                key: "IconRender",
                value: function(e) {
                    var t = new o("icons");
                    if ("icons" in e && "object" === a(e.icons) && !(e.icons.length < 1)) {
                        var n = e.icons;
                        e.icons = "", e.highlightIcons = "", e.cornerIcons = "", n.forEach(function(n) {
                            if (n.length) {
                                var a = {
                                    icon: n,
                                    ariaName: n in c ? c[n] : ""
                                };
                                "comments" == n ? "commentsCount" in e && (a.label = e.commentsCount, e.section && (a.styles = "color_" + e.section + " fill_" + e.section), e.comments = t.render(a)) : "photo" != n && "player" != n || (a.styles = e.styleIcon || "", e.specialIcons && e.specialIcons.includes(n) ? (a.styles += " highlightIcon", e.highlightIcons += t.render(a)) : e.imageIcon ? (a.styles += " cornerIcon", e.cornerIcons += t.render(a)) : e.icons += t.render(a))
                            }
                        })
                    }
                }
            }, {
                key: "seeLater",
                value: function() {
                    var e = new o("see-later"),
                        t = {};
                    return t.showSeeLater = u.helpers.serviceStatus.seeLater, e.render(t)
                }
            }, {
                key: "meta",
                value: function() {
                    var e = new o("meta"),
                        t = !1,
                        n = new o("icons");
                    return this.data.collections || "match" == this.data.type || ((t = {}).advertisingLabel = this.data.advertising && this.data.advertising.content || !1, t.meta = this.data.kicker || !1, t.type = this.data.type, t.section = this.data.section, t.seeLater = this.seeLater(), "tab" == this.data.type && (t.meta = n.render({
                        icon: "tab",
                        ariaName: "ícone do TAB"
                    }))), e.render(t)
                }
            }, {
                key: "article",
                value: function(e) {
                    var t = this,
                        n = new o("article"),
                        a = new o("meta"),
                        i = this.data,
                        r = {};
                    if (r.typeAria = i.type in c ? c[i.type] : "", r.metrics = this.data.metrics || {}, r.rotative = "carousel" == i.type, "scarehead" != i.type && "carousel" != i.type && "screamer" != i.type && "tab" != i.type && "match" != i.type || (r.bigtop = !0, r.borderTitle = !0), i.collections && i.collections.length > 0) "match" != i.type && i.collections.forEach(function(e, n) {
                        e.metrics = JSON.parse(JSON.stringify(t.data.metrics)), e.metrics.position = t.data.metrics.position + "-" + (n + 1)
                    }), r.items = i.collections, "carousel" == i.type && (r.highlight = 1 == i.collections.length, r.items[0].checked = !0);
                    else {
                        var s = {};
                        s.title = i.title || !1, s.link = i.link || !1, s.lead = i.lead || !1, s.image = i.image || !1, s.icons = i.icons || [], s.commentsCount = i.commentsCount || !1, r.items = [s]
                    }
                    return r.items.forEach(function(t, n) {
                        if (t.index = n, t.key = i.key || !1, t.type = i.type, t.section = i.section || !1, t.image = t.image || {
                                src: ""
                            }, t.icons = t.icons || [], t.imageIcon = !1, t.imageTitle = !1, t.specialIcons = [], r.bigtop && t.image.src.length && ("credit" in t.image && t.image.credit.length && (t.credit = t.image.credit), t.textOverlay = !("screamer" == t.type && 0 == t.icons.length), "screamer" == t.type ? t.imageIcon = !0 : "match" == t.type ? (t.imageTitle = !0, t.borderTitle = !1) : t.imageTitle = !0), "tab" == i.type && (t.section = "prime"), this.IconRender(t), t.image = this.image(t.image, e), t.kicker) {
                            var s = {
                                meta: t.kicker,
                                section: t.section,
                                seeLater: this.seeLater()
                            };
                            t.meta = a.render(s)
                        }
                        if ("match" == t.type) {
                            if ("worldcup" == i.section) {
                                t.worldcup = !0;
                                ["teamHome", "teamAway"].forEach(function(e) {
                                    t[e].logo = "https://conteudo.jsuol.com.br/c/_template/v2/media.svg?path=static/v2&icon=worldcup/" + t[e].initials.toLowerCase() + "&asImage=true"
                                })
                            }
                            /.*_\d+x420.*/.test(t.image) && (t.vertical = "vertical");
                            var c = new o("match"),
                                l = new o("icons");
                            t.match = c.render(Object.assign({}, t, {
                                section: i.section,
                                vs: l.render({
                                    icon: "close"
                                }),
                                pos: "pos-jogo" == t.status
                            })), t.metrics = {}
                        }
                    }, this), n.render(r)
                }
            }, {
                key: "related",
                value: function() {
                    var e = new o("related");
                    if (!("related" in this.data && this.data.related.length > 0)) return "";
                    this.data.related.forEach(function(e) {
                        if (e.section = this.data.section, !e.metrics) {
                            var t = this.data.metrics.label || "chamada";
                            t = t.match(/manchete/) ? t.replace(/(manchete)(.*)/, "$1-relacionada$2") : t + "-relacionada", e.metrics = {
                                label: t
                            }
                        }
                        this.IconRender(e)
                    }, this);
                    var t = {};
                    return t.type = this.data.type, t.section = this.data.section, t.related = this.data.related.length > 0 || !1, t.item_related = this.data.related || !1, e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i();
                        var r = "";
                        n.data = e, r += n.meta(), r += n.article(t), r += n.related();
                        var o = {
                            className: e.type + " card " + e.section,
                            key: e.key,
                            "data-category": n.data.metrics.category || "",
                            "data-area": n.data.metrics.area || "",
                            "data-label": n.data.metrics.label || "",
                            "data-position": n.data.metrics.position || ""
                        };
                        s.render(r, "article", o).then(function() {
                            var n = u.helpers.serviceStatus || {},
                                i = "virtualDom" in n ? n.virtualDom : null;
                            (t || !1 === i) && new l(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new d
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(157),
        o = n(0),
        s = n(13),
        c = [],
        l = function() {
            function e(t) {
                var n = this;
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.instance = document.querySelector("[data-key='" + t.key + "']"), this.instance && (this.data = t, o.helpers.insertMetrics(this.instance), "preference" in t && "tailtarget" in t && this.tailtarget(), "match" == t.type && new s(t), t.key && "carousel" == t.type)) {
                    this.carouselNative();
                    var a = this.instance.querySelector(".slider"),
                        i = this.instance.querySelectorAll(".slider_indicator__dot"),
                        c = !1,
                        l = !1;
                    if (a) {
                        var u = a.querySelectorAll(".slider_content__item"),
                            d = 0,
                            p = function() {
                                !0 === n.carouselNative() && (l = !1, a.querySelector(".slider_content__item[aria-hidden=true]") && (d = Number(document.querySelector(".slider_content__item[aria-hidden=true]").getAttribute("data-index"))));
                                o.helpers.elementInViewport(n.instance, !0, !1) ? l ? n.rotative.opts.transition && c && (c = !1, n.rotative.transition()) : (l = !0, n.rotative = new r(i, ".slider", {
                                    currentIndex: d,
                                    pagination: ".slider_indicator",
                                    paginationClickable: !0,
                                    zoom: !1,
                                    loop: !1,
                                    section: n.data.section,
                                    lazyLoading: !0,
                                    transition: {
                                        duration: 3500
                                    },
                                    metrics: n.data.metrics
                                }, u, a)) : n.rotative && (c = !0, n.rotative.breakTransition())
                            };
                        window.addEventListener("touchmove", p, !0), window.addEventListener("scroll", p, !0), window.addEventListener("carouselNative", p, !0), p()
                    }
                }
                return this
            }
            return i(e, [{
                key: "tailtarget",
                value: function() {
                    var e = location.host.indexOf("preview.intranet") >= 0 && location.pathname.indexOf("chamada-tailtarget.htm") >= 0,
                        t = e ? this.data.key + 1 : this.data.key;
                    if (window.TTUser.hasInterest(this.data.preference) || e) {
                        var a = this.data.tailtarget;
                        a.key = t, a.section = this.data.section, a.timestamp = this.data.timestamp, a.type = this.data.type, a.preference = this.data.preference, this.data.metrics && (a.metrics = this.data.metrics), a.image && (a.image.loaded = !0), n(49).render(a)
                    }
                }
            }, {
                key: "carouselNative",
                value: function() {
                    var e = this.instance.querySelector(".slider .slider_content"),
                        t = this.instance.querySelector(".slider_indicator"),
                        n = e.querySelectorAll(".slider_content__item");
                    if (c.length && this.data.metrics && "topo" == this.data.metrics.area) {
                        this.rotative = this.rotative && this.rotative.destroy();
                        try {
                            var a = c.pop();
                            switch (a.pos) {
                                case "center":
                                case "meio":
                                    a.pos = Math.ceil(n.length / 2) + 1;
                                    break;
                                case "last":
                                case "ultimo":
                                    a.pos = n.length;
                                    break;
                                case "first":
                                case "primeiro":
                                    a.pos = 1;
                                    break;
                                default:
                                    a.pos = a.pos
                            }
                            var i = this.instance.querySelector(".slider_indicator__dot:not(.active)").cloneNode(!1),
                                r = e.querySelector(".slider_content__item").cloneNode(!0);
                            r.classList.add("publicity-inserted"), r.setAttribute("aria-hidden", "false"), r.querySelector("a") ? r.querySelector("a").href = a.data.link : console.log("selector-a-not-found"), r.querySelector("h2") ? r.querySelector("h2").innerText = a.data.texto : console.log("selector-h2-not-found"), r.querySelector("img") ? r.querySelector("img").src = a.data.imagemMobile : console.log("selector-img-not-found"), r.querySelector("img") ? r.querySelector("img").setAttribute("data-src", a.data.imagemMobile) : console.log("selector-img-not-found"), r.querySelector("img") ? r.querySelector("img").alt = a.data.credito : console.log("selector-img-not-found"), r.querySelector("img") ? r.querySelector("img").title = a.data.credito : console.log("selector-img-not-found"), r.querySelector(".article_credits") ? " " == a.data.credito || "" == a.data.credito ? r.querySelector("a").removeChild(r.querySelector("a").querySelector(".article_credits")) : r.querySelector(".article_credits").innerText = a.data.credito : console.log("selector-credits-not-found"), [r.querySelector(".meta")].forEach(function(e) {
                                e.parentNode.removeChild(e)
                            });
                            var o = this.instance.querySelectorAll(".slider_indicator__dot")[a.pos - 1] || null,
                                s = e.querySelectorAll(".slider_content__item")[a.pos - 1] || null,
                                l = document.createElement("div"),
                                u = document.createElement("div");
                            return l.className = "native-brand", l.innerHTML = 'Oferecido por <a href="' + a.data.link + '"><img src="' + a.data.selo + '" /></a>', u.className = "native-label", u.innerHTML = "Conteúdo de marca", u.className && r.querySelector(".article_title").prepend(u), r.appendChild(l), null == o ? (t.appendChild(i), e.appendChild(r)) : (t.insertBefore(i, o), e.insertBefore(r, s)), Array.prototype.slice.call(this.instance.querySelectorAll(".slider_indicator__dot")).forEach(function(e, t) {
                                e.setAttribute("data-index", t), e.setAttribute("aria-label", "item " + t)
                            }), Array.prototype.slice.call(this.instance.querySelectorAll(".slider_content__item")).forEach(function(e, t) {
                                e.setAttribute("data-index", t)
                            }), !0
                        } catch (e) {
                            return console.error("carousel native:", e), !1
                        }
                    }
                    return !1
                }
            }]), e
        }();
    void 0 === window.insertBannerRotativoTopo && (window.insertBannerRotativoTopo = function(e, t) {
        var n = ["link", "texto", "imagemMobile"],
            i = !0;
        for (var r in n) {
            if (!t || !t[n[r]] || "string" != a(t[n[r]]).toLowerCase()) return void(i = !1);
            t[n[r]] = o.helpers.trataTags(t[n[r]], !0)
        }
        i && (c.push({
            pos: e,
            data: t
        }), window.dispatchEvent(new Event("carouselNative"))), window.insertBannerRotativoTopo = function() {}
    }, window.uolads && window.uolads.push({
        id: "banner-300x250-4"
    })), e.exports = l
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(0),
        o = n(1),
        s = {},
        c = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var n = document.querySelector("[data-key='" + t.key + "']");
                r.helpers.insertMetrics(n), "uolMyBusiness" == t.type && document.querySelector(".searchTitle_submit") && this.searchMeuNegocio(), t.key && t.key.match(/lista-thematic/) && (window.addEventListener("bannerLista", this.bannerLista, !0), this.bannerLista())
            }
            return i(e, [{
                key: "searchMeuNegocio",
                value: function() {
                    document.querySelector(".searchTitle_submit").addEventListener("click", function(e) {
                        e.preventDefault();
                        var t = document.querySelector(".searchTitle_search").value.toLowerCase().replace(/[ ́`^~"'?]/g, "").replace(/[áàâãä]/g, "a").replace(/[éèêẽë]/g, "e").replace(/[íìîĩï]/g, "i").replace(/[óòôõö]/g, "o").replace(/[úùûũü]/g, "u").replace(/[ç]/g, "c");
                        if ("" === t || void 0 === t || "undefined" === t) return window.alert("Por favor, digite uma extensão válida."), !1;
                        r.helpers.metrics({
                            action: "clique",
                            category: "bloco-editorial-uol-meu-negocio",
                            area: "busca",
                            label: r.helpers.slug(t),
                            position: "topo-modulo"
                        }) && window.location.assign("https://meunegocio.uol.com.br/registro-de-dominio/busca?campaign=4b8f02d28d55aa4c4ae0685fbfa3151b3d8612ad&domain=" + t + "&extension=.com.br")
                    })
                }
            }, {
                key: "bannerLista",
                value: function() {
                    var e = document.querySelector("[data-key$=lista-thematic]");
                    if (s.titulo && e) {
                        var t = new o("article-list"),
                            n = (new o("image"), {
                                articleList: []
                            }),
                            a = {};
                        s.imagem && (a.image = '<figure class="placeholder placeholder_thematic" alt="' + s.credito + '" title="" style="background-image: url(' + s.imagem + '); background-size: cover; background-position: center center;"></figure>'), a.section = "thematic", a.title = s.titulo, a.link = s.href, a.publicity = !0, a.publicityClass = "publicity-inserted", n.section = "thematic", n.articleList.push(a), e.insertAdjacentHTML("beforeend", t.render(n)), s = {}
                    }
                }
            }]), e
        }();
    void 0 === window.insertBannerListaTopo && (window.insertBannerListaTopo = function(e) {
        var t = ["href", "titulo", "imagem"],
            n = !0;
        for (var i in t) {
            if (!e || !e[t[i]] || "string" != a(e[t[i]]).toLowerCase()) return void(n = !1);
            e[t[i]] = r.helpers.trataTags(e[t[i]], !0)
        }
        n && (s = e), window.dispatchEvent(new Event("bannerLista")), window.insertBannerListaTopo = function() {}
    }), e.exports = c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(0),
        r = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.data = t, this.instance = document.querySelector('[data-key="' + t.key + '"]'), this.data.storageItem = "modulo" + t.section.toUpperCase();
                var a = !0,
                    r = localStorage.getItem(this.data.storageItem);
                if (null !== r ? (a = "true" === r) === this.data.opened ? a = !1 : (this.data.opened = a, a = !0) : (localStorage.setItem(this.data.storageItem, !0), this.data.opened = !0), a) {
                    var o = n(15),
                        s = i.helpers.serviceStatus || {},
                        c = "virtualDom" in s ? s.virtualDom : null;
                    o.render(this.data), c && this.toHide()
                } else this.toHide()
            }
            return a(e, [{
                key: "toHide",
                value: function() {
                    var e = this,
                        t = this.data.storageItem || !0;
                    this.instance.querySelector(".toHideBlock_clickButtom").addEventListener("click", function() {
                        var a = e.data.opened;
                        e.data.opened = !e.data.opened, t && localStorage.setItem(t, e.data.opened), i.helpers.metrics({
                            action: "clique",
                            category: "bloco-editorial-bbb",
                            area: "bbb",
                            label: (a ? "fechar" : "abrir") + "-bloco",
                            position: "topo-modulo"
                        }), n(15).render(e.data)
                    })
                }
            }]), e
        }();
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(54),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "handleIcon",
                value: function(e, t) {
                    if ("icons" in e && e.icons.length > 0 && !e.iconRender) switch (t) {
                        case "horoscope":
                            var n = new i("icons");
                            e.iconRender = n.render({
                                icon: "sign_" + e.icons[0],
                                ariaName: e.title
                            });
                            break;
                        case "teams":
                            e.classImg = e.icons[0]
                    }
                }
            }, {
                key: "seeLater",
                value: function() {
                    var e = new i("see-later"),
                        t = {};
                    return t.showSeeLater = s.helpers.serviceStatus.seeLater, e.render(t)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, c) {
                        var l = "";
                        if (e || c(), e.isOpen) {
                            if (e.selectedItem = e.selectedItem || {}, n.handleIcon(e.selectedItem, e.type), e.articleList) {
                                var u = new i("article-list");
                                e.articleList.forEach(function(t, a) {
                                    t.metrics = {
                                        category: e.metrics.category,
                                        area: e.metrics.area,
                                        label: "chamada",
                                        position: "coluna-" + (a + 1)
                                    }, t.seeLater = n.seeLater()
                                }, n), e.selectedItem.articleList = u.render(e)
                            }
                            var d = new i(e.type),
                                p = new i("togglebutton"),
                                m = {
                                    classButton: "toggleButton color_" + e.section,
                                    isCollapsed: !0
                                };
                            switch (e.type) {
                                case "teams":
                                    "6" === e.selectedItem.id && (e.selectedItem.buttonTicket = {
                                        link: "http://www.fieltorcedor.com.br",
                                        metrics: {
                                            label: "compre-fiel-torcedor"
                                        }
                                    }), m.buttonText = "trocar de time", e.selectedItem.button = p.render(m), l += d.render(e.selectedItem);
                                    break;
                                case "novel":
                                    m.buttonText = "trocar de novela", e.selectedItem.button = p.render(m), e.selectedItem.section = e.section, e.selectedItem.title.length >= 28 && (e.selectedItem.resumedTitle = e.selectedItem.title.substring(0, 25) + "..."), l += d.render(e.selectedItem);
                                    break;
                                case "horoscope":
                                    m.buttonText = "trocar de signo", e.selectedItem.button = p.render(m), e.selectedItem.seeLater = n.seeLater(), e.selectedItem.metrics = e.metrics, l += d.render(e.selectedItem), setTimeout(function() {
                                        window.seeLater && window.seeLater.update()
                                    }, 3e3)
                            }
                        } else {
                            var f = {};
                            f.title = e.title, f.section = e.section, f.type = e.type;
                            var h = new i("thematic-title").render(f),
                                v = {};
                            v.type = e.type, v.section = e.section, v.collections = e.collections, v.templateHeader = h, v.init = t, v.metrics = e.metrics || {}, v.collections.forEach(function(e, t) {
                                e.label = "selecionar-" + s.helpers.slug(e.title), e.position = "item-" + (t + 1), "horoscope" == v.type || "teams" == v.type ? n.handleIcon(e, v.type) : "novel" == v.type && e.title.length >= 34 && (e.resumedTitle = e.title.substring(0, 31) + "...")
                            });
                            var g = new i("custom-widget");
                            l += g.render(v)
                        }
                        var y = e.metrics || {},
                            b = {
                                className: e.type + " animate card_gutter",
                                key: e.key,
                                "data-category": y.category,
                                "data-area": y.area
                            };
                        r.render(l, "", b).then(function() {
                            window.setTimeout(function() {
                                b.className = e.type + " card_gutter", r.render(l, "", b).then(function() {
                                    window.lazyload && window.lazyload.update(), window.seeLater && window.seeLater.update();
                                    var n = s.helpers.serviceStatus || {},
                                        i = "virtualDom" in n ? n.virtualDom : null;
                                    if ((t && !0 === i || !1 === i) && new o(e), !0 === i) {
                                        var r = document.querySelector('[data-key="' + e.key + '"]');
                                        s.helpers.insertMetrics(r)
                                    }
                                    a()
                                })
                            }, 300)
                        }).catch(function(e) {
                            c(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(0),
        o = function() {
            function e(t) {
                if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.instance = document.querySelector('[data-key="' + t.key + '"]'), this.instance) {
                    this.data = t, this.widget = n(53), this.data.selectedItem = {}, this.binds(), this.widgetOpenDefault();
                    var a = r.helpers.serviceStatus || {};
                    !1 === ("virtualDom" in a ? a.virtualDom : null) && r.helpers.insertMetrics(this.instance)
                }
            }
            return a(e, [{
                key: "binds",
                value: function() {
                    var e = this;
                    this.items = this.instance.querySelectorAll(".customWidget_" + this.data.type + "__item"), Array.prototype.slice.call(this.items).forEach(function(t) {
                        t.addEventListener("click", function(t) {
                            t.preventDefault(), e.data.isAutomatic = !1, e.selectItem(t.currentTarget)
                        })
                    })
                }
            }, {
                key: "selectItem",
                value: function(e) {
                    var t = Array.prototype.indexOf.call(this.items, e);
                    if (t < 0) return this.errorDefault();
                    switch (this.data.selectedItem = this.data.collections[t], this.data.type) {
                        case "teams":
                            this.selectTeams();
                            break;
                        case "novel":
                            this.selectNovel();
                            break;
                        case "horoscope":
                            this.selectHoroscope()
                    }
                }
            }, {
                key: "selectTeams",
                value: function() {
                    var e = this,
                        t = this.data.selectedItem.id,
                        n = this.data.selectedItem.tags;
                    r.helpers.setCookie("meuTime", t, 360);
                    var a = "https://taghome.uol.com/?sort=created:desc&format=jsonp&size=3&charset=utf-8&fields=titulo,imagem,imagem-credito,url-uol,id,repository&tags-id=" + n + "&repository=news&publisher=publicadoruol&portal=uol&",
                        i = window.location.search.match(/futebolWebmaster/) ? "mock" : null;
                    r.helpers.jsonp(a, null, i).then(function(n) {
                        if (!n.docs) return e.errorDefault();
                        var a = e.getNews(n.docs);
                        e.data.articleList = a, e.widgetResultCalendarTeams(t).then(function(t) {
                            e.data.isOpen = !0, e.data.selectedItem.calendar = t, e.widget.render(e.data).then(function() {
                                e.buttonReset()
                            })
                        })
                    }).catch(function() {
                        return e.errorDefault()
                    })
                }
            }, {
                key: "selectNovel",
                value: function() {
                    var t = this,
                        n = this.data.selectedItem,
                        a = e.tagNumber(n.tags),
                        i = e.tagNumber(n.summaryTags);
                    if (!a || !i) return this.errorDefault();
                    localStorage.setItem("widgetNovela", n.title);
                    var o = n.isNews ? 2 : 20,
                        s = n.isNews ? "news" : "card",
                        c = n.isNews ? a : i,
                        l = function(e, t, n) {
                            return "https://taghome.uol.com/?sort=created:desc&format=jsonp&size=" + n + "&charset=utf-8&fields=titulo,imagem,imagem-credito,url-uol,id,repository,descricao&tags-id=" + e + "&repository=" + t + "&publisher=publicadoruol&portal=uol&"
                        },
                        u = l(c, s, o),
                        d = window.location.search.match(/novelaWebmaster/) ? "mock" : null,
                        p = [],
                        m = function(t, n, a, i) {
                            var r = n || [],
                                o = e.calcDate(6),
                                s = 0;
                            return t.reverse(), t.forEach(function(e) {
                                var t = e.titulo,
                                    n = e["url-uol"],
                                    c = e.descricao,
                                    l = /([0-9]{2}\/[0-9]{2}\/[0-9]{4})/.exec(c)[0];
                                if (l && o.indexOf(l.toString()) > -1) {
                                    s++;
                                    var u = /(\()([a-zA-Z]+.)(\))/.exec(c)[2],
                                        d = /([0-9]{2}\/[0-9]{2})/.exec(c)[0];
                                    if (i) {
                                        var p = l.replace(/\//g, ".");
                                        n = i + "?abre=" + p
                                    }
                                    s <= a && r.push({
                                        title: t,
                                        link: n,
                                        image: !1,
                                        news: !!u && {
                                            dateText: u,
                                            dateNumeric: d
                                        }
                                    })
                                }
                            }), r
                        };
                    r.helpers.jsonp(u, null, d).then(function(e) {
                        if (!e.docs) return t.errorDefault();
                        if (n.isNews) {
                            p = t.getNews(e.docs, p);
                            var o = l(i, "card", 20);
                            r.helpers.jsonp(o, null, d).then(function(e) {
                                e.docs && (p = m(e.docs, p, 1, n.link)), t.renderWidgetNovel(p)
                            }).catch(function() {
                                return t.errorDefault()
                            })
                        } else if ((p = m(e.docs, p, 3, n.link)).length > 0) t.renderWidgetNovel(p);
                        else {
                            var s = l(a, "news", 3);
                            r.helpers.jsonp(s, null, d).then(function(e) {
                                e.docs && (p = t.getNews(e.docs, p), t.renderWidgetNovel(p))
                            }).catch(function() {
                                return t.errorDefault()
                            })
                        }
                    }).catch(function() {
                        return t.errorDefault()
                    })
                }
            }, {
                key: "selectHoroscope",
                value: function() {
                    var t = this,
                        n = this.data.selectedItem.id,
                        a = window.cacheId || "v1.0";
                    r.helpers.setCookie("meuSigno", n, 360);
                    var i = r.helpers.basepath("/camaleao/api/horoscope.json?id=" + n + "&v=" + a);
                    r.helpers.ajx("GET", i).then(function(n) {
                        var a = JSON.parse(n);
                        if (!a.text) return t.errorDefault();
                        t.data.isOpen = !0, t.data.selectedItem.textHoroscope = e.limitedText(a.text, 146), t.widget.render(t.data).then(function() {
                            t.buttonReset()
                        }).catch(function() {
                            return t.errorDefault()
                        })
                    })
                }
            }, {
                key: "renderWidgetNovel",
                value: function(e) {
                    var t = this;
                    this.data.isOpen = !0, this.data.articleList = e, this.widget.render(this.data).then(function() {
                        t.buttonReset()
                    })
                }
            }, {
                key: "widgetResultCalendarTeams",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        var a = window.cacheId || "v1.0",
                            i = "";
                        window.location.search.match(/futebolWebmaster/) && (i = "&mock&cenario=" + (window.location.search.match(/cenario=/) ? window.location.search.replace(/.*cenario=(\d).*/, "$1") : 1));
                        var o = r.helpers.basepath("/camaleao/api/agenda-futebol.json?id=" + e + "&v=" + a + i);
                        r.helpers.ajx("GET", o).then(function(e) {
                            var a = JSON.parse(e),
                                i = {};
                            if (a.erro) return t.errorDefault();
                            i.anterior = {}, a.resultado && (i.anterior.time1 = a.resultado.time1.sigla ? a.resultado.time1.sigla : "-", i.anterior.time1gol = a.resultado.time1.gols ? a.resultado.time1.gols : "-", i.anterior.time2 = a.resultado.time2.sigla ? a.resultado.time2.sigla : "-", i.anterior.time2gol = a.resultado.time2.gols ? a.resultado.time2.gols : "-", i.anterior.date = a.resultado.data ? /(.+),/.exec(a.resultado.data)[1] : "não definido"), a.agenda && (i.proximo = {}, a.resultado && (i.anterior.time1 = a.resultado.time1.sigla ? a.resultado.time1.sigla : "-", i.anterior.time1gol = a.resultado.time1.gols ? a.resultado.time1.gols : "-", i.anterior.time2 = a.resultado.time2.sigla ? a.resultado.time2.sigla : "-", i.anterior.time2gol = a.resultado.time2.gols ? a.resultado.time2.gols : "-", i.anterior.date = a.resultado.data ? /(.+),/.exec(a.resultado.data)[1] : "não definido"), a.agenda && (i.proximo.time1 = a.agenda.time1.sigla ? a.agenda.time1.sigla : "--", i.proximo.time2 = a.agenda.time2.sigla ? a.agenda.time2.sigla : "--", i.proximo.date = a.agenda.data ? /(.+),/.exec(a.agenda.data)[1] : "não definido"), n(i))
                        }).catch(function() {
                            return t.errorDefault()
                        })
                    })
                }
            }, {
                key: "getNews",
                value: function(e, t) {
                    var n = t || [];
                    return e.forEach(function(e) {
                        var t = e.titulo,
                            a = e["url-uol"],
                            r = e.imagem,
                            o = !1;
                        r && (o = new i("image").render({
                            type: "customWidget",
                            src: r.replace(/_(\d+x\d+)\./, "_300x300.")
                        }));
                        n.push({
                            title: t,
                            image: o,
                            link: a
                        })
                    }), n
                }
            }, {
                key: "buttonReset",
                value: function() {
                    var e = this,
                        t = this.instance.querySelector(".toggleButton");
                    t && t.addEventListener("click", function() {
                        switch (setTimeout(function() {
                            e.data.isOpen = !1, e.data.selectedItem = {}, e.widget.render(e.data, !0)
                        }, 250), e.data.type) {
                            case "novel":
                                localStorage.removeItem("widgetNovela");
                                break;
                            case "teams":
                                r.helpers.removeCookie("meuTime");
                                break;
                            case "horoscope":
                                r.helpers.removeCookie("meuSigno")
                        }
                        r.helpers.metrics({
                            action: "clique",
                            category: e.data.metrics.category,
                            area: e.data.metrics.area,
                            label: "mudar-item-selecionado",
                            position: "titulo"
                        })
                    })
                }
            }, {
                key: "errorDefault",
                value: function() {
                    return this.data.selectedItem && !this.data.isAutomatic && (window.location = this.data.selectedItem.link), !1
                }
            }, {
                key: "widgetOpenDefault",
                value: function() {
                    var e = this,
                        t = void 0,
                        n = this.instance.querySelectorAll(".customWidget_" + this.data.type + "__item"),
                        a = "data-id";
                    "novel" == this.data.type && (t = localStorage.getItem("widgetNovela"), a = "data-name"), "teams" == this.data.type && (t = r.helpers.getCookie("meuTime")), "horoscope" == this.data.type && (t = r.helpers.getCookie("meuSigno")), t && n.length && Array.prototype.slice.call(n).forEach(function(n) {
                        n.querySelector("a").getAttribute(a) == t && (e.data.isAutomatic = !0, setTimeout(function() {
                            e.selectItem(n)
                        }, 1100))
                    })
                }
            }], [{
                key: "tagNumber",
                value: function(e) {
                    var t = [];
                    return e.split(";").forEach(function(e) {
                        t.push(e.replace(/.*\[(\d+)\]/, "$1"))
                    }), t.join("+AND+").replace(/\+AND\+\s?$/, "")
                }
            }, {
                key: "limitedText",
                value: function(e, t) {
                    if (e.length > t) {
                        t--;
                        var n = "";
                        for (n = e.substr(t - 1, 1);
                            " " != n && t > 0;) t--, n = e.substr(t - 1, 1);
                        e = "," == (n = e.substr(t - 2, 1)) || ";" == n || ":" == n ? e.substr(0, t - 2) + "..." : "." == n || "?" == n || "!" == n ? e.substr(0, t - 1) : e.substr(0, t - 1) + "..."
                    }
                    return e
                }
            }, {
                key: "calcDate",
                value: function(e) {
                    for (var t = new Date, n = [], a = void 0, i = void 0, r = 0; r < e; r++) {
                        var o = new Date(t.getTime() + 24 * r * 60 * 60 * 1e3);
                        i = 1 == (o.getMonth() + 1).toString().length ? "0" + (o.getMonth() + 1) : o.getMonth() + 1, a = 1 == o.getDate().toString().length ? "0" + o.getDate() : o.getDate(), n.push(a + "/" + i + "/" + o.getFullYear())
                    }
                    return n
                }
            }]), e
        }();
    e.exports = o
}, , function(e, t, n) {
    "use strict";
    var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }(),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(57));

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    n(58);
    var o = n(59),
        s = n(60),
        c = n(0);
    n(61), n(62), n(63);
    var l = n(64);
    n(65), n(66), n(67), n(68);
    var u = c.helpers.basepath("/camaleao/assets/mobile2017/svg/sprites-home-mobile-v" + s.spritesVersion.mobile + ".svg"),
        d = c.helpers.basepath("/camaleao/api/home.json"),
        p = window.innerHeight,
        m = 0,
        f = 0,
        h = void 0,
        v = {
            arr: []
        },
        g = ["widget", "tailtarget"];
    if (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) {
        if (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) {
            var y = document.createElement("style");
            y.type = "text/css";
            var b = ".placeholder_image:not(.placeholder_image__carousel)[src]{ transition: none !important}";
            y.styleSheet ? y.styleSheet.cssText = b : y.appendChild(document.createTextNode(b)), document.getElementsByTagName("head")[0].appendChild(y)
        } else {
            var _ = document.createElement("style");
            _.type = "text/css";
            var w = "img:not([src]) {visibility: hidden;}@-moz-document url-prefix() {img:-moz-loading {visibility: hidden;}}";
            _.styleSheet ? _.styleSheet.cssText = w : _.appendChild(document.createTextNode(w)), document.getElementsByTagName("head")[0].appendChild(_)
        }(new(function() {
            function e() {
                r(this, e)
            }
            return a(e, [{
                key: "renderCards",
                value: function() {
                    var e = this;
                    if (m < h.length) {
                        var t = o[h[m].type];
                        if (t) try {
                            var a = n(17)("./" + t + "/scripts"),
                                r = !1; - 1 !== g.indexOf(t) && (v.arr.push(m), v[h[m].section] = {}, v[h[m].section].position = m, v[h[m].section].module = t), "banner" === t && null !== location.search.match(/pAsy/) ? (v.arr.push(m), r = !0) : (a && document.getElementById("timeline").clientHeight < p || f < 6) && (r = !0, f++), a && a.render(h[m], r).then(function() {
                                c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ") ✓", "color: green"), r && c.helpers.konsole("log", "%c Disparada action do módulo " + h[m].type + " (" + t + ") ✓", "color: green"), m++, e.renderCards()
                            }).catch(function(n) {
                                c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ")\n " + n, "color: red"), m++, e.renderCards()
                            })
                        } catch (e) {
                            c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ")\n " + e + "\n Ocorreu algum erro na hora de renderizar o módulo " + h[f].type + " (" + t + ")", "color: red"), m++, this.renderCards()
                        } else m++, this.renderCards();
                        (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) && setTimeout(function() {
                            f < h.length ? window.lazyload && window.lazyload.update() : window.lazyload && window.lazyload.loadAll()
                        }, 300)
                    } else window.lazyload = new i.default({
                        elements_selector: "img"
                    }), (navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) && window.lazyload && window.lazyload.loadAll(), window.seeLater && window.seeLater.update()
                }
            }, {
                key: "initActionCard",
                value: function() {
                    var e = o[h[f].type];
                    if ("section" === e && -1 !== Object.keys(v).indexOf(h[f].section)) try {
                        var t = n(10)("./" + v[h[f].section].module + "/actions");
                        t && new t(h[v[h[f].section].position]), c.helpers.konsole("log", "%c Disparada action do módulo  " + h[v[h[f].section].position].type + " (" + v[h[f].section].module + ") ✓", "color: green")
                    } catch (e) {
                        c.helpers.konsole("log", "%c " + e + "\n O módulo " + h[v[h[f].section].position].type + " (" + v[h[f].section].module + ") não tem action", "color: #ffbb00")
                    }
                    if (e && -1 === v.arr.indexOf(f)) try {
                        var a = n(10)("./" + e + "/actions");
                        a && new a(h[f]), c.helpers.konsole("log", "%c Disparada action do módulo  " + h[f].type + " (" + e + ") ✓", "color: green")
                    } catch (t) {
                        c.helpers.konsole("log", "%c " + t + "\n O módulo " + h[f].type + " (" + e + ") não tem action", "color: #ffbb00")
                    }
                    var i = h[++f] ? document.querySelector('[data-key="' + h[f].key + '"]') : null;
                    i && i.getBoundingClientRect().top < 1.5 * p && this.initActionCard()
                }
            }, {
                key: "getCardsOnScroll",
                value: function() {
                    var e = this;
                    window.addEventListener("scroll", function() {
                        if (f < h.length) {
                            var t = (document.getElementById("timeline").clientHeight || 0) - p,
                                n = document.querySelector('[data-key="' + h[f].key + '"]');
                            t < window.scrollY && m < h.length || (h[f] && n && n.getBoundingClientRect().top < 1.5 * p ? e.initActionCard() : void 0 == n && f++)
                        }
                    })
                }
            }, {
                key: "getSprite",
                value: function() {
                    c.helpers.ajx("GET", u).then(function(e) {
                        var t = document.createElement("div");
                        t.id = "icons", t.innerHTML = e, t.style.display = "none", document.body.appendChild(t)
                    })
                }
            }, {
                key: "getJson",
                value: function() {
                    var e = this;
                    c.helpers.ajx("GET", d + "?" + window.homeUOL.queryString.replace("debug=true", "")).then(function(t) {
                        var a = JSON.parse(t);
                        if (h = a.feed ? a.feed : a, a.serviceStatus && c && (c.helpers.serviceStatus = a.serviceStatus), e.renderCards(), e.getBackToTop(), navigator.userAgent.toLowerCase().indexOf("iphone") >= 0 || navigator.userAgent.toLowerCase().indexOf("ipad") >= 0) {
                            var r = new i.default({
                                elements_selector: "img",
                                threshold: 300,
                                throttle: 150,
                                data_src: "src",
                                data_srcset: "srcset",
                                class_loading: "loading_img",
                                class_loaded: "loaded",
                                class_error: "error",
                                class_initial: "initial"
                            });
                            window.lazyload = r, window.lazyload.loadAll()
                        }
                        n(55), e.getCardsOnScroll()
                    })
                }
            }, {
                key: "getMenu",
                value: function() {
                    c.helpers.ajx("GET", c.helpers.basepath("/camaleao/api/menu-mobile.json") + "?" + window.homeUOL.queryString).then(function(e) {
                        window.menu = JSON.parse(e), window.moveVitrineDebug = [], window.moveVitrine && (window.moveVitrine = window.moveVitrine.split(";"), window.moveVitrine.length > 0 && (window.moveVitrineDebug = window.moveVitrine)), l.binds()
                    }).catch(function() {
                        l.binds()
                    })
                }
            }, {
                key: "getBackToTop",
                value: function() {
                    n(11).render()
                }
            }, {
                key: "getReport",
                value: function() {
                    n(14).render({}, !0)
                }
            }, {
                key: "refreshStart",
                value: function() {
                    c.helpers.refresh.init()
                }
            }, {
                key: "init",
                value: function() {
                    this.getJson(), this.getSprite(), this.getMenu(), this.refreshStart(), window.hevents.emit("ready"), window.uolads && window.uolads.push({
                        id: "banner-320x50-3-area"
                    }), window.uolads && window.uolads.push({
                        id: "banner-320x50-1-area"
                    })
                }
            }]), e
        }())).init()
    } else {
        (new(function() {
            function e() {
                r(this, e)
            }
            return a(e, [{
                key: "renderCards",
                value: function() {
                    var e = this;
                    if (m < h.length) {
                        var t = o[h[m].type];
                        if (t) try {
                            var a = n(17)("./" + t + "/scripts"),
                                i = !1; - 1 !== g.indexOf(t) && (v.arr.push(m), v[h[m].section] = {}, v[h[m].section].position = m, v[h[m].section].module = t), "banner" === t && null !== location.search.match(/pAsy/) ? (v.arr.push(m), i = !0) : (a && document.getElementById("timeline").clientHeight < p || f < 6) && (i = !0, f++), a && a.render(h[m], i).then(function() {
                                c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ") ✓", "color: green"), i && c.helpers.konsole("log", "%c Disparada action do módulo " + h[m].type + " (" + t + ") ✓", "color: green"), m++, e.renderCards()
                            }).catch(function(n) {
                                c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ")\n " + n, "color: red"), m++, e.renderCards()
                            })
                        } catch (e) {
                            c.helpers.konsole("log", "%c Módulo " + h[m].type + " (" + t + ")\n " + e + "\n Ocorreu algum erro na hora de renderizar o módulo " + h[f].type + " (" + t + ")", "color: red"), m++, this.renderCards()
                        } else m++, this.renderCards()
                    } else {
                        if (window.LazyLoad)(new window.LazyLoad).update();
                        window.seeLater && window.seeLater.update()
                    }
                }
            }, {
                key: "initActionCard",
                value: function() {
                    var e = o[h[f].type];
                    if ("section" === e && -1 !== Object.keys(v).indexOf(h[f].section)) try {
                        var t = n(10)("./" + v[h[f].section].module + "/actions");
                        t && new t(h[v[h[f].section].position]), c.helpers.konsole("log", "%c Disparada action do módulo  " + h[v[h[f].section].position].type + " (" + v[h[f].section].module + ") ✓", "color: green")
                    } catch (e) {
                        c.helpers.konsole("log", "%c " + e + "\n O módulo " + h[v[h[f].section].position].type + " (" + v[h[f].section].module + ") não tem action", "color: #ffbb00")
                    }
                    if (e && -1 === v.arr.indexOf(f)) try {
                        var a = n(10)("./" + e + "/actions");
                        a && new a(h[f]), c.helpers.konsole("log", "%c Disparada action do módulo  " + h[f].type + " (" + e + ") ✓", "color: green")
                    } catch (t) {
                        c.helpers.konsole("log", "%c " + t + "\n O módulo " + h[f].type + " (" + e + ") não tem action", "color: #ffbb00")
                    }
                    var i = h[++f] ? document.querySelector('[data-key="' + h[f].key + '"]') : null;
                    i && i.getBoundingClientRect().top < 1.5 * p && this.initActionCard()
                }
            }, {
                key: "getCardsOnScroll",
                value: function() {
                    var e = this;
                    window.addEventListener("scroll", function() {
                        if (f < h.length) {
                            var t = (document.getElementById("timeline").clientHeight || 0) - p,
                                n = document.querySelector('[data-key="' + h[f].key + '"]');
                            t < window.scrollY && m < h.length || (h[f] && n && n.getBoundingClientRect().top < 1.5 * p ? e.initActionCard() : void 0 == n && f++)
                        }
                    })
                }
            }, {
                key: "getSprite",
                value: function() {
                    c.helpers.ajx("GET", u).then(function(e) {
                        var t = document.createElement("div");
                        t.id = "icons", t.innerHTML = e, t.style.display = "none", document.body.appendChild(t)
                    })
                }
            }, {
                key: "getJson",
                value: function() {
                    var e = this;
                    c.helpers.ajx("GET", d + "?" + window.homeUOL.queryString).then(function(t) {
                        var a = JSON.parse(t);
                        h = a.feed ? a.feed : a, a.serviceStatus && c && (c.helpers.serviceStatus = a.serviceStatus), e.renderCards(), e.getBackToTop(), window.lazyload = new window.LazyLoadOld, window.Lazyload = window.lazyload, n(55), e.getCardsOnScroll()
                    })
                }
            }, {
                key: "getMenu",
                value: function() {
                    c.helpers.ajx("GET", c.helpers.basepath("/camaleao/api/menu-mobile.json") + "?" + window.homeUOL.queryString).then(function(e) {
                        window.menu = JSON.parse(e), window.moveVitrineDebug = [], window.moveVitrine && (window.moveVitrine = window.moveVitrine.split(";"), window.moveVitrine.length > 0 && (window.moveVitrineDebug = window.moveVitrine)), l.binds()
                    }).catch(function() {
                        l.binds()
                    })
                }
            }, {
                key: "getBackToTop",
                value: function() {
                    n(11).render()
                }
            }, {
                key: "getReport",
                value: function() {
                    n(14).render({}, !0)
                }
            }, {
                key: "refreshStart",
                value: function() {
                    c.helpers.refresh.init()
                }
            }, {
                key: "init",
                value: function() {
                    this.getJson(), this.getSprite(), this.getMenu(), this.refreshStart(), window.hevents.emit("ready"), window.uolads && window.uolads.push({
                        id: "banner-320x50-3-area"
                    }), window.uolads && window.uolads.push({
                        id: "banner-320x50-1-area"
                    })
                }
            }]), e
        }())).init()
    }
}, , , function(e, t) {
    e.exports = {
        email: "email",
        "email-modal": "email-modal",
        advertising: "banner",
        carousel: "teaser",
        counter: "counter",
        match: "teaser",
        headline: "teaser",
        horoscope: "widget",
        live: "live",
        mock: "mock",
        novel: "widget",
        podcast: "thematic",
        popular: "popular",
        scarehead: "teaser",
        section: "section",
        screamer: "teaser",
        services: "services",
        smartbanner: "smartbanner",
        softnews: "thematic",
        subScreamer: "teaser",
        tailtarget: "tailtarget",
        teams: "widget",
        thematic: "thematic",
        tab: "teaser",
        survey: "survey",
        uolMyBusiness: "thematic",
        uolSecurity: "thematic",
        uolDiet: "thematic",
        "to-hide-block": "to-hide-block",
        report: "report",
        elections: "elections",
        carnival: "carnival"
    }
}, function(e, t) {
    e.exports = {
        name: "home-uol",
        version: "1.0.0",
        scripts: {
            start: "npm-run-all -p watch:sass watch:js",
            build: "npm-run-all build:sass & npm run build:js",
            "build:js": "webpack --config ./webpack.dev.config.js",
            "build:sass": "npm run build:sass-pwa & npm run build:sass-all & npm run build:css-prefix",
            "build:sass-pwa": "node-sass --output-style compressed mobile/structure/scss/main.pwa.scss ../assets/mobile2017/css/min.pwa.css",
            "build:sass-all": "node-sass --output-style compressed mobile/structure/scss/main.scss ../assets/mobile2017/css/min.css",
            "build:css-prefix": "npm run prefix-pwa & npm run prefix-all",
            e2e: "npm-run-all e2e-test e2e-report --continue-on-error",
            "e2e-debug": "node --inspect node_modules/nightwatch/bin/nightwatch",
            "e2e-report": "node test/create-html-report.js",
            "e2e-test": "nightwatch -e chrome --config ./test/nightwatch.conf.js",
            "e2e-ui": "nightwatch -e chrome --config ./test/nightwatch.conf.ui.js",
            "watch:js": "webpack --config ./webpack.dev.config.js --watch",
            "watch:sass": "npm-run-all -p build:sass watch:sass-pwa watch:sass-all prefix-pwa prefix-all",
            "watch:sass-pwa": "node-sass --source-map true --output-style compressed mobile/structure/scss/main.pwa.scss ../assets/mobile2017/css/min.pwa.css --watch",
            "watch:sass-all": "node-sass --source-map true --output-style compressed mobile/structure/scss/main.scss ../assets/mobile2017/css/min.css --watch",
            "prefix-pwa": "set BROWSERSLIST_ENV=mobile && postcss --use autoprefixer -o ../assets/mobile2017/css/min.pwa.css ../assets/mobile2017/css/min.pwa.css",
            "prefix-all": "set BROWSERSLIST_ENV=mobile && postcss --use autoprefixer -o ../assets/mobile2017/css/min.css ../assets/mobile2017/css/min.css",
            sprite: "node spriteSvg.js",
            "build-web": "set BROWSERSLIST_ENV=web && webpack --config ./build/web/webpack.prod.conf.js",
            "watch-web": "npm run build-web -- --watch",
            "watch-mobile": "npm-run-all -p watch:sass watch:js"
        },
        devDependencies: {
            autoprefixer: "^7.2.6",
            "babel-cli": "^6.26.0",
            "babel-core": "^6.26.3",
            "babel-loader": "^7.1.2",
            "babel-preset-es2015": "^6.24.1",
            "babili-webpack-plugin": "^0.1.1",
            child_process: "^1.0.2",
            chromedriver: "^2.41.0",
            "css-loader": "^1.0.0",
            cucumber: "^4.2.1",
            "cucumber-pretty": "^1.4.4",
            "es6-template-string-loader": "^2.0.0",
            eslint: "^4.9.0",
            "eslint-loader": "^1.9.0",
            "extract-text-webpack-plugin": "^3.0.2",
            fs: "0.0.1-security",
            geckodriver: "^1.12.1",
            "mini-css-extract-plugin": "^0.4.1",
            mkdirp: "^0.5.1",
            nightwatch: "^0.9.21",
            "nightwatch-cucumber": "^9.1.2",
            "node-sass": "^4.9.3",
            nodemon: "^1.18.4",
            "npm-run-all": "^4.1.3",
            path: "^0.12.7",
            postcss: "^6.0.13",
            "postcss-cli": "^4.1.1",
            "postcss-loader": "^3.0.0",
            "postcss-sorting": "^4.0.1",
            "prepend-file": "^1.3.1",
            "prompt-sync": "^4.1.5",
            "sass-loader": "^7.1.0",
            "selenium-server": "^3.14.0",
            "style-loader": "^0.22.1",
            "stylelint-config-standard": "^17.0.0",
            svgstore: "^2.0.2",
            "uglifyjs-webpack-plugin": "^1.1.6",
            webpack: "^3.5.6",
            "webpack-bundle-analyzer": "^2.11.1",
            "webpack-notifier": "^1.5.0",
            "wrapper-webpack-plugin": "^1.0.0"
        },
        dependencies: {
            "cucumber-html-reporter": "^4.0.3",
            g: "^2.0.1",
            jquery: "^3.3.1",
            mustache: "^2.3.0",
            usocket: "git+https://stash.uol.intranet/scm/~dmkoga/usocket",
            "vanilla-lazyload": "^11.0.3",
            "virtual-dom": "git+https://stash.uol.intranet/scm/~llaraujo/virtual-dom.git"
        },
        spritesVersion: {
            mobile: 15,
            branch: "DCHPTUG-3030",
            times: 7
        },
        browserslist: {
            web: ["> 1%", "ie 10"],
            mobile: ["last 2 Android versions", "last 2 ChromeAndroid versions", "last 2 FirefoxAndroid versions", "last 6 iOS versions", "last 2 Samsung versions"]
        },
        stylelint: {
            extends: "stylelint-config-standard",
            rules: {
                indentation: 4
            }
        }
    }
}, , function(e, t, n) {
    "use strict";
    var a = n(0),
        i = !1,
        r = {
            binds: function() {
                var e = document.querySelector(".UHeader__side__menu"),
                    t = document.querySelector(".UHeader__menu__brand"),
                    n = document.querySelector(".UHeader__menu__nav__item__email");
                a.helpers.insertMetrics(t), a.helpers.insertMetrics(n), e.addEventListener("click", function() {
                    i ? (e.classList.remove("open"), i = !1) : (e.classList.add("open"), i = !0)
                }, !1)
            },
            init: function() {
                r.binds()
            }
        };
    window.onHomeReady(function() {
        document.querySelector(".UHeader__area__container") && r.init()
    }), e.exports = r
}, function(e, t, n) {
    "use strict";
    var a = n(0).helpers.getOffsetTop,
        i = void 0,
        r = void 0,
        o = void 0,
        s = void 0,
        c = void 0,
        l = 0,
        u = !1,
        d = null,
        p = void 0,
        m = {
            onScrollEvent: function(e) {
                if (e && !document.querySelector(".UHeader__side__menu__container").classList.contains("UHeader__side__menu__container__opened")) {
                    var t = r.scrollTop || i.scrollTop;
                    if (t > s) {
                        o.classList.add("UHeader__fixed"), o.classList.remove("UHeader__nonfixed");
                        l >= t + 10 ? o.classList.add("UHeader__fixed__open") : l <= t - 10 && o.classList.remove("UHeader__fixed__open")
                    } else o.classList.remove("UHeader__fixed"), o.classList.remove("UHeader__fixed__open"), o.classList.add("UHeader__nonfixed");
                    l = t
                }
            },
            startScrollListener: function() {
                null === d && (u = !1, d = setInterval(function() {
                    !0 === u && (m.stopScrollListener(), setTimeout(function() {
                        m.onScrollEvent(p), m.startScrollListener()
                    }, 100))
                }, 200))
            },
            stopScrollListener: function() {
                clearInterval(d), d = null
            },
            init: function() {
                i = document.body, r = document.documentElement, o = document.querySelector(".UHeader"), c = o.offsetHeight;
                var e = function(e) {
                    var t = document.querySelector(".UHeader__area__container");
                    s = o && t ? c + a(t) : 0, p = e, u = !0
                };
                window.addEventListener("touchmove", e, !0), window.addEventListener("scroll", e, !0), m.startScrollListener()
            }
        };
    window.onHomeReady(function() {
        document.querySelector(".UHeader__area__container") && m.init()
    }), e.exports = m
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = a.helpers.getOffsetTop,
        r = void 0,
        o = void 0,
        s = void 0,
        c = void 0,
        l = void 0,
        u = [],
        d = [],
        p = !1,
        m = document.querySelector(".UHeader__side__menu__channels"),
        f = document.querySelector(".UHeader__side__menu__subitems"),
        h = document.querySelector(".UHeader__side__menu__container__scroll");

    function v(e, t, n) {
        a.helpers.metrics({
            action: "clique",
            category: "menu",
            area: e,
            label: t,
            position: n || "coluna-unica"
        })
    }
    var g = {
        resize: function() {
            var e = document.querySelector(".smartbanner_container") && document.querySelector(".smartbanner_container").offsetHeight || 0,
                t = i(c) + c.offsetHeight - o,
                n = 4,
                a = e / n;
            var r = setInterval(function() {
                t -= a, void 0 !== l && (l.style.top = t + "px"), s.style.top = t + "px", n--, g.calculateContainer(), n <= 0 && clearInterval(r)
            }, 10)
        },
        calculateContainer: function() {
            f.style.height = h.offsetHeight + "px", m.style.height = h.offsetHeight + "px";
            var e = window.document.querySelector(".UHeader__side__menu__container__opened"),
                t = window.document.querySelector(".smartbanner_container") && 0 == window.document.querySelector(".smartbanner_container").offsetHeight;
            e && t && (window.document.querySelector(".UHeader__side__menu__container").style.top = "106px", window.document.querySelector(".UHeader__lightbox").style.top = "106px")
        },
        openMenu: function() {
            p = !0;
            var e = document.body,
                t = document.getElementById("UHeaderArea"),
                n = document.querySelector(".UHeader__side__menu__channels"),
                r = document.querySelector(".UHeader__side__menu__container__scroll"),
                u = document.querySelector(".smartbanner_container .close");
            if (r.classList.add("channel"), o = document.documentElement.scrollTop || document.body.scrollTop, document.body.style.top = "-" + o + "px", (l = document.createElement("div")).setAttribute("tabindex", "0"), e.insertBefore(l, e.firstChild), e.querySelector("#app").setAttribute("aria-hidden", !0), l.classList.add("UHeader__lightbox"), s.classList.add("UHeader__side__menu__container__opened"), e.classList.add("UHeader__fixed__body"), t.classList.contains("UHeader__nonfixed")) {
                var d = i(c) + c.offsetHeight - o + "px";
                l.style.top = d, s.style.top = d
            } else l.style.top = "", s.style.top = "";
            n.style.height = r.offsetHeight + "px", n.scrollTop = 0, l.addEventListener("click", function() {
                v("header", "menu-header-fechar-fora"), g.closeMenu()
            }), document.querySelector(".UHeader__side__menu").classList.add("open"), u && u.addEventListener("touchend", g.resize), a.helpers.refresh.pause();
            var m = document.querySelector(".widgetNotify-wrapper .widgetUOLAvatarProduct");
            m && m.classList.contains("opened") && (m.classList.remove("opened"), m.classList.add("closed"))
        },
        closeMenu: function() {
            if (p = !1, clearTimeout(r), void 0 !== l) {
                var e = document.body;
                l.classList.add("UHeader__lightbox__closing"), s.classList.remove("UHeader__side__menu__container__opened"), e.classList.remove("UHeader__fixed__body"), document.documentElement.scrollTop = e.scrollTop = o, e.querySelector("#app").setAttribute("aria-hidden", !1), r = setTimeout(function() {
                    void 0 !== l && (e.removeChild(l), l = void 0), document.querySelector(".UHeader__side__menu").classList.remove("open")
                }, 250)
            }
            a.helpers.refresh.start()
        },
        onClickMenu: function(e) {
            e.stopPropagation();
            var t = e.currentTarget;
            !1 === p ? (v("header", "menu-header-abrir"), g.openMenu(), l.setAttribute("aria-modal", !0), t.setAttribute("aria-label", "fechar menu")) : !0 === p && (v("header", "menu-header-fechar"), g.closeMenu(), t.setAttribute("aria-label", "abrir menu"))
        },
        onEscPress: function(e) {
            !0 === p && 27 === e.keyCode && g.closeMenu()
        },
        vitrineListClean: function() {
            for (var e = 0; e < u.length; e++) void 0 !== u[e] && (document.querySelector(".UHeader__side__menu__container__sub").removeChild(u[e]), u[e] = void 0);
            u = []
        },
        onClickSideMenu: function() {
            var e = this,
                t = document.querySelector(".UHeader__side__menu__container__scroll"),
                n = void 0;
            e.parentElement.classList.value.match(/UHeader__side__menu__nav__sub__list/) ? n = document.querySelector(".UHeader__side__menu__subitems") : e.parentElement.classList.value.match(/UHeader__side__menu__subitems/) && (n = document.querySelector(".UHeader__side__menu__channels")), n.style.height = t.offsetHeight + "px", n.classList.add("fade__click"), e.classList.add("fade__click");
            var i = void 0,
                r = void 0,
                o = void 0,
                c = void 0;
            null !== e.querySelector("a") && (i = e.querySelector("a"), r = i.getAttribute("data-area") || "menu", o = i.getAttribute("data-label") || "", c = i.getAttribute("data-position") || "coluna-unica"), setTimeout(function() {
                if (n.scrollTop = 0, t.classList.value.match(/channel/)) {
                    for (var i = e.getAttribute("data-channel"), l = "", p = e.getAttribute("data-section"), m = ".UHeader__side__menu__container__sub__title", f = 0; f < window.menu.canais.length; f++)
                        if (window.menu.canais[f].id === i) {
                            l = r, s.querySelector(m).className = s.querySelector(m).className.replace(/area-[a-z0-9\-]*/g, "").trim();
                            var h = "";
                            1 == window.menu.canais[f].possuiLink && (h = window.menu.canais[f].linkMobile ? window.menu.canais[f].linkMobile : window.menu.canais[f].link), "assine" == window.menu.canais[f].titulo.toLowerCase() && (h = "https://clicklogger.rm.uol.com.br/?prd=11&grp=src:13;chn:0;cpg:linkfixo_menu;creative:assine-planosdeassinatura&msr=Cliques%20de%20Origem:1&oper=11&redir=https://assine.uol.com.br/"), s.querySelector(m).classList.add("area-" + p), s.querySelector(m).innerHTML = '<div class="UHeader__side__menu__nav__sub__title"><a class="cor2" name="menu-header" data-area="' + l + '" data-label="menu-header-abrir-estacao" data-position="coluna-unica" ' + (1 == window.menu.canais[f].possuiLink ? 'href="' + h + '"' : "") + ">" + window.menu.canais[f].titulo + "</a></div>";
                            var y = window.menu.canais[f].subitens;
                            if (y.length > 0) {
                                var b = s.querySelector(".UHeader__side__menu__nav__sub__list.UHeader__side__menu__nav__sub__block");
                                b.innerHTML = "";
                                for (var _ = 0; _ < y.length; _++) {
                                    var w = y[_].linkMobile ? y[_].linkMobile : y[_].link;
                                    b.innerHTML += '<li class="UHeader__side__menu__nav__sub__item" role="presentation"><a name="menu-sub" role="menuitem"data-area="' + l + '" data-label="menu-topo-nivel-2" data-position="item-' + (_ + 1) + '" href="' + w + '">' + y[_].titulo + "</a></li>"
                                }
                            }
                            g.vitrineListClean();
                            for (var k = void 0, x = 0; x < window.menu.canais[f].vitrines.length; x++) {
                                var T = window.menu.canais[f].vitrines[x].id,
                                    S = null;
                                k = document.createElement("div"), u.push(k), u[x].classList.add("UHeader__side__menu__nav__vitrine"), -1 === d.indexOf(T) && -1 === moveVitrineDebug.indexOf(T) || (S = document.querySelector(".UHeader__side__menu__nav__sub__block"), u[x].classList.add("UHeader__side__menu__nav__vitrine__moved")), document.querySelector(".UHeader__side__menu__container__sub").insertBefore(u[x], S), u[x].setAttribute("data-id", T), u[x].innerHTML += '<strong class="UHeader__side__menu__nav__vitrine__title">' + window.menu.canais[f].vitrines[x].titulo + "</strong>";
                                var L = void 0;
                                if ((L = document.createElement("ul")).classList.add("UHeader__side__menu__nav__vitrine__list"), u[x].insertBefore(L, null), "vitrine-assine-uol" === T) L.innerHTML += '<strong class="UHeader__side__menu__nav__vitrine__contact__number"><a name="menu-sub-vitrine" data-area="assine" data-label="menu-topo-nivel-2-vitrine" data-position="item-1" href="tel:40036118"><span class="UHeader__side__menu__nav__vitrine__contact__number__capitals">4003-6118</span><span class="UHeader__side__menu__nav__vitrine__contact__title">capitais</span></a></strong>', L.innerHTML += '<strong class="UHeader__side__menu__nav__vitrine__contact__number"><a name="menu-sub-vitrine" data-area="assine" data-label="menu-topo-nivel-2-vitrine" data-position="item-2" href="tel:08007033000"><span class="UHeader__side__menu__nav__vitrine__contact__number__others">0800 703 3000</span><span class="UHeader__side__menu__nav__vitrine__contact__title">demais localidades</span></a></strong>';
                                else
                                    for (var C = 0; C < window.menu.vitrines[T].itens.length; C++) {
                                        var O = "",
                                            E = "";
                                        "vitrine-esporte-times" === T && (O = "-times", E = "-s");
                                        var q = !1;
                                        "vitrine-mulher-horoscopo" == window.menu.vitrines[T].id && (q = "peixes" == (q = "aquario" == (q = "capricornio" == (q = "sagitario" == (q = "escorpiao" == (q = "virgem" == (q = "leao" == (q = "gemeos" == (q = "touro" == (q = window.menu.vitrines[T].itens[C].slug) ? "taurus" : q) ? "gemini" : q) ? "leo" : q) ? "virgo" : q) ? "scorpio" : q) ? "sagittarius" : q) ? "capricorn" : q) ? "aquarius" : q) ? "pisces" : q);
                                        var A = window.menu.vitrines[T].itens[C].linkMobile ? window.menu.vitrines[T].itens[C].linkMobile : window.menu.vitrines[T].itens[C].link,
                                            H = window.menu.vitrines[T].itens[C].titulo;
                                        L.innerHTML += '<li class=" UHeader__side__menu__nav__vitrine__item"><a name="menu-sub-vitrine" title="' + H + '" data-area="' + l + '" data-label="menu-topo-nivel-2-vitrine" data-position="item-' + (C + 1) + '" href="' + A + '">' + (q ? '<i class="UHeader__side__menu__nav__vitrine__item__image icons icons_' + q + '"> <svg> <use xlink:href="#sign_' + q + '" /> </svg> </i>' : '<i class="UHeader__side__menu__nav__vitrine__item__image sprite-geral' + O + " vitrine-" + window.menu.vitrines[T].itens[C].slug + E + '"></i>') + '<span class="UHeader__side__menu__nav__vitrine__item__label">' + window.menu.vitrines[T].itens[C].titulo + "</span></a></li>"
                                    }
                            }
                            break
                        } a.helpers.insertMetrics(document.querySelector(".UHeader__side__menu__subitems")), v(r, o, c), t.classList.remove("channel"), t.querySelector(".UHeader__side__menu__subitems").setAttribute("aria-expanded", !0)
                } else v("header", "menu-header-nav-esquerda"), t.classList.add("channel"), t.querySelector(".UHeader__side__menu__subitems").setAttribute("aria-expanded", !1);
                setTimeout(function() {
                    n.classList.remove("fade__click"), e.classList.remove("fade__click")
                }, 350)
            }, 350)
        },
        binds: function() {
            if (document.querySelector(".UHeader__area__container")) {
                var e = document.querySelector(".UHeader__side__menu"),
                    t = document.querySelector(".UHeader__side__menu__container__back"),
                    n = document.querySelectorAll(".UHeader__side__menu__channels a");
                s = document.querySelector(".UHeader__side__menu__container"), c = document.querySelector(".UHeader__area__container"), e && e.addEventListener("click", g.onClickMenu), t && t.addEventListener("click", g.onClickSideMenu);
                for (var i = 0; i < n.length; i++) n[i].setAttribute("data-position", "item-" + (i + 1)), "" === n[i].href && (n[i].parentElement.addEventListener("click", g.onClickSideMenu), n[i].setAttribute("aria-haspopup", !0));
                a.helpers.insertMetrics(document.querySelector(".UHeader__side__menu__channels")), document.addEventListener("keyup", g.onEscPress), window.addEventListener("resize", g.calculateContainer), document.querySelector(".UHeader__menu__nav__container").addEventListener("click", g.closeMenu)
            }
        }
    };
    e.exports = g
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        i = document.querySelector("#footer_webVersion");
    i && i.addEventListener("click", function(e) {
        e.preventDefault(), e.stopPropagation(), a.helpers.setCookie("x-user-agent-class", "WEB", 4), location.reload()
    }, !1)
}, , , , , function(e, t, n) {
    var a = {
        "./mobile/components/article-list/view.tpl": 71,
        "./mobile/components/article/view.tpl": 72,
        "./mobile/components/back-to-top/view.tpl": 73,
        "./mobile/components/banner/view.tpl": 74,
        "./mobile/components/bottom-link/view.tpl": 75,
        "./mobile/components/carnival/view.tpl": 76,
        "./mobile/components/counter/view.tpl": 77,
        "./mobile/components/currency/view.tpl": 78,
        "./mobile/components/custom-widget/view.tpl": 79,
        "./mobile/components/email-modal/view.tpl": 80,
        "./mobile/components/horoscope/view.tpl": 81,
        "./mobile/components/icons/view.tpl": 82,
        "./mobile/components/image/view.tpl": 83,
        "./mobile/components/label/view.tpl": 84,
        "./mobile/components/login/view.tpl": 85,
        "./mobile/components/match/view.tpl": 86,
        "./mobile/components/meta/view.tpl": 87,
        "./mobile/components/modal-description/view.tpl": 88,
        "./mobile/components/modal-form/view.tpl": 89,
        "./mobile/components/modal-header/view.tpl": 90,
        "./mobile/components/modal/view.tpl": 91,
        "./mobile/components/novel/view.tpl": 92,
        "./mobile/components/ordered-list/view.tpl": 93,
        "./mobile/components/realtime/view.tpl": 94,
        "./mobile/components/related/view.tpl": 95,
        "./mobile/components/report/view.tpl": 96,
        "./mobile/components/score/view.tpl": 97,
        "./mobile/components/search-title/view.tpl": 98,
        "./mobile/components/section-title/view.tpl": 99,
        "./mobile/components/see-later/view.tpl": 100,
        "./mobile/components/smartbanner/view.tpl": 101,
        "./mobile/components/suggest-search/view.tpl": 102,
        "./mobile/components/survey/view.tpl": 103,
        "./mobile/components/teams/view.tpl": 104,
        "./mobile/components/thematic-title/view.tpl": 105,
        "./mobile/components/to-hide-block/view.tpl": 106,
        "./mobile/components/togglebutton/view.tpl": 107,
        "./mobile/components/weather/view.tpl": 108,
        "./mobile/resources/footer/view.tpl": 109,
        "./mobile/resources/header/view.tpl": 110,
        "./mobile/resources/logo/view.tpl": 111,
        "./mobile/resources/page/view.tpl": 112,
        "./web/components/black-bar/view.tpl": 113,
        "./web/components/currency/view.tpl": 114,
        "./web/components/email-modal/view.tpl": 115,
        "./web/components/email/view.tpl": 116,
        "./web/components/icons/view.tpl": 117,
        "./web/components/logo/view.tpl": 118,
        "./web/components/menu/view.tpl": 119,
        "./web/components/middle-bar/view.tpl": 120,
        "./web/components/search/view.tpl": 121,
        "./web/components/suggest-search/view.tpl": 122,
        "./web/components/weather/view.tpl": 123
    };

    function i(e) {
        return n(r(e))
    }

    function r(e) {
        var t = a[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t
    }
    i.keys = function() {
        return Object.keys(a)
    }, i.resolve = r, e.exports = i, i.id = 70
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#articleList}}\n<article class="articleList{{^image}} articleList_noImg{{/image}}">\n    <a data-uol-see-later="url" {{#publicityClass}} class="{{ publicityClass }}" {{/publicityClass}} href="{{ link }}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>\n        {{#image}}\n            {{^imageIcon}}\n                {{{ image }}}\n            {{/imageIcon}}\n            {{#imageIcon}}\n            <div class="articleList_imageWrapper {{#cornerIcons}}articleList_textOverlay{{/cornerIcons}}">\n                {{{ image }}}\n                {{{ cornerIcons }}}\n            </div>\n            {{/imageIcon}}\n        {{/image}}\n        {{#news}}\n        <p class="articleList_date">\n            <span class="articleList_date__text color_{{ section }}">{{ dateText }}</span>\n            <span class="articleList_date__numeric">{{ dateNumeric }}</span>\n        </p>\n        {{/news}}\n        {{#publicity}}\n            <span class="marca">Conteúdo de marca</span>\n        {{/publicity}}\n        {{^publicity}}\n            {{#kicker}}\n                <h3 class="articleList_title color_{{ section }}">{{ kicker }}</h3>\n            {{/kicker}}\n        {{/publicity}}\n        <p data-uol-see-later="title" class="articleList_text">{{ title }}{{{ icons }}}{{{ comments }}}</p>\n\n        {{{ seeLater }}}\n    </a>\n</article>\n{{/articleList}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#rotative}}\n<div class="{{#highlight}}highlight{{/highlight}}{{^highlight}}slider{{/highlight}}">\n    <ul class="slider_content">\n{{/rotative}}\n\n{{#items}}\n    {{#rotative}}\n        <li class="slider_content__item" data-index="{{ index }}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}"{{/metrics}}>\n            {{{ meta }}}\n    {{/rotative}}\n\n    {{#link}}\n        <a data-uol-see-later="url" href="{{ link }}" class="{{ type }}_article {{ type }}_article__{{ section }} {{ vertical }} article"{{#metrics}} data-position="{{ position }}"{{/metrics}}>\n            {{#bigtop}}\n            <div class="article_imageWrapper {{#textOverlay}}article_textOverlay{{/textOverlay}}">\n            {{/bigtop}}\n            {{{image}}}\n            {{#bigtop}}\n                {{#imageTitle}}\n                    {{#match}}\n                        <div class="match-container">\n                        {{{ match }}}\n                    {{/match}}\n                    <h2 data-uol-see-later="title" class="article_title article_title__{{ section }}{{#bigtop}}{{#borderTitle}} borderColor_{{ section }}{{/borderTitle}}{{/bigtop}}">\n                    {{ title }}{{^imageIcon}}{{{ icons }}}{{/imageIcon}}{{{ comments }}}\n                    </h2>\n                    {{#match}}\n                        </div>\n                    {{/match}}\n                {{/imageTitle}}\n                {{{ cornerIcons }}}{{{ highlightIcons }}}\n            </div>\n            {{/bigtop}}\n\n            {{^match}}\n            {{#credit}}\n            <span class="article_credits">{{ credit }}</span>\n            {{/credit}}\n            {{/match}}\n\n            {{^imageTitle}}\n            <h2 data-uol-see-later="title" class="article_title article_title__{{ section }}">\n              {{ title }}{{^imageIcon}}{{{ icons }}}{{/imageIcon}}{{{ comments }}}\n            </h2>\n            {{/imageTitle}}\n            {{#lead}}\n            <p class="article_subtitle {{^credit}} article_subtitle__notCredits {{/credit}}">{{ lead }}</p>\n            {{/lead}}\n        </a>\n    {{/link}}\n\n    {{#rotative}}\n    </li>\n    {{/rotative}}\n{{/items}}\n\n{{#rotative}}\n    </ul>\n    {{^highlight}}\n    <nav class="slider_indicator">\n        {{#items}}\n        <label class="slider_indicator__dot navigation_option__{{ section }}{{#checked}} active borderColor_{{ section }}{{/checked}}" aria-label="item {{ index }}" data-index="{{ index }}"></label>\n        {{/items}}\n    </nav>\n    {{/highlight}}\n</div>\n{{/rotative}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<button class="backToTop" data-show="false">\n    {{{ . }}}\n</button>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#section}}\n    <div class="banner{{#class}} {{ class }}{{/class}}" id="{{ section }}"></div>\n{{/section}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<a class="bottom-link" href="{{link}}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>{{text}}</a>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <div class="module modulo placar placar-carnaval" id="placar-carnaval" data-notas="true" data-websocket="true">\n          <div class="escolas">\n              <div class="header border2-top">  \n                  <a class="titulo" href="{{link}}" data-label="titulo-placar-carnaval">\n                      <span class="titulo-apuracao cor2">\n                          Apuração {{canvass}}  \n                      </span>  \n                      <span class="titulo-aovivo">\n                          <span class="live">ao vivo</span>\n                          <span class="icon-dot"></span>\n                      </span>\n                  </a>\n\n                  <div class="selo-patrocinado tm-ads" id="selo-120x35-area-2">\n                      <script>\n                          window.uolads && uolads.push({\n                              id: \'selo-120x35-area-2\'\n                          });\n                      <\/script>\n                  </div>\n              </div>\n              <div class="classificacao" id="classificacao">\n                  <ul class="table">\n                      <li class="item">\n                          <span class="posicao cor2">1&ordm;</span>\n                          <span class="escola"></span>\n                          <span class="pontos">-</span>\n                      </li>\n                      <li class="item">\n                          <span class="posicao cor2">2&ordm;</span>\n                          <span class="escola"></span>\n                          <span class="pontos">-</span>\n                      </li>\n                      <li class="item">\n                          <span class="posicao cor2">3&ordm;</span>\n                          <span class="escola"></span>\n                          <span class="pontos">-</span>\n                      </li>\n                  </ul>\n              </div>\n          </div>\n       \n          <div class="notas" style="">\n            \n              <div class="header">\n                  <span class="titulo-quesito">quesito</span>\n                  <span class="titulo" id="quesito">BATERIA</span>\n              </div>\n\n              <div class="notas-lista" id="notas">\n                  <div class="grade-tabela" id="grade-notas">\n                      <span class="loading"></span>\n                  </div>\n              </div>\n\n                <div style="">\n                  <div class="btn"> \n                    <a style="width:100%;" href="{{link}}" data-label="botao-placar-carnaval"  class="btn-placar-completo corw bg2 border6-bottom">\n                      Apuração completa\n                    </a>\n                </div>\n              </div>\n          </div>\n    </div>\n    {{#stamp}}<div class="stamp stamp_hide1">{{{stamp}}}</div>{{/stamp}}\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div id="modCounter">\n    <div class="loading-animation"></div>\n    <div id="counterMain">\n        <p class="modCounter-title"><span class="icon-uol"><em>{{{ uol }}}</em> MUNDIAL 2018</span></p>\n        <p id="cupCounter">\n            {{^tomorrow}}\n                <span class="cupCounter-text">Faltam</span>\n                <span id="counter">{{ diffDay }}</span>\n                <span class="cupCounter-text">dias</span>\n            {{/tomorrow}}\n            {{#tomorrow}}\n                <span class="aDay">Falta <em>1</em> dia</span>\n                <span class="tomorrow">É amanhã!</span>\n            {{/tomorrow}}\n        </p>\n    </div>\n    <div id="publicity">\n        <p>Patrocínio</p>\n        <div id="banner-80x25-area" class="tm-ads"><script>window.uolads && uolads.push({ id: \'banner-80x25-area\' });<\/script></div>\n    </div>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<li class="currency" aria-label="Cotação do dólar {{quote}} reais, ir à página de economia" tabindex="0" role="button"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>\n    <a href="http://economia.uol.com.br/cotacoes/cambio/dolar-comercial-estados-unidos/" aria-hidden="true">\n        <span class="currency_label">Dólar</span><span class="currency_quote currency_quote__{{variation}}">R$ {{quote}}</span>\n    </a>\n</li>\n{{/.}}\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<section class="card widget_{{ type }}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}"{{/metrics}}>\n    {{{ templateHeader }}}\n    <div class="customWidget_center">\n        <ul class="customWidget customWidget_{{ type }}">\n        {{#collections}}\n            <li class="customWidget_{{ type }}__item">\n                <a href="{{ link }}"{{#id}} data-id="{{ id }}"{{/id}}{{#title}} data-name="{{ title }}" title="{{ title }}{{/title}}" data-action="clique" data-label="{{ label }}" data-position="{{ position }}" data-nofollow="true">\n                    {{#image.src}}\n                        <img {{#init}}data-{{/init}}src="{{ image.src }}" alt="{{ title }}" class="customWidget_img borderColor_{{ section }}" />\n                    {{/image.src}}\n                    {{#iconRender}}\n                        {{{ iconRender }}}\n                    {{/iconRender}}\n                    {{#classImg}}\n                    <span class="customWidget_{{ type }}__spriteImg customWidget_{{ type }}__{{ classImg }}"></span>\n                    {{/classImg}}\n                    <span class="customWidget_{{ type }}__title">{{#resumedTitle}}{{ resumedTitle }}{{/resumedTitle}}{{^resumedTitle}}{{ title }}{{/resumedTitle}}</span>\n                </a>\n            </li>\n        {{/collections}}\n        </ul>\n    </div>\n</section>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="{{type}}_notification">\n{{#load}}\n    {{^isLogged}}\n    <a href="https://email.uol.com.br/" class="{{type}}_notification__not-logged" data-action="clique" data-label="email-instrucao"><strong>UOL Mail:</strong> faça seu login pela cartinha acima</a>\n    {{/isLogged}}\n    {{#isLogged}}\n        {{#count}}\n        <a href="{{inbox}}" class="{{type}}_notification_link" aria-label="{{ user }}, {{#messagePrefix}}{{.}}{{/messagePrefix}}{{^messagePrefix}}você tem {{ count }} novo{{#plural}}s{{/plural}} email{{#plural}}s{{/plural}}{{/messagePrefix}}" data-label="email-checkin-logado" tabindex="0" aria-hidden="false">\n            {{{ icon }}}\n            <span class="{{type}}_notification_user" aria-hidden="true">{{user}}, </span>\n            <span class="{{type}}_notification_msg" aria-hidden="true">\n                você tem <strong class=\'{{type}}_notification_count {{#moreThan}}{{.}}{{/moreThan}}\'>{{count}}</strong>\n                novo{{#plural}}s{{/plural}} email{{#plural}}s{{/plural}}\n            </span>\n        </a>\n        <a href="{{logout}}" class="{{type}}_notification_logout" aria-hidden="false" aria-label="deslogar do email" data-action="clique" data-label="email-sair">sair</a>\n        {{/count}}\n    {{/isLogged}}\n{{/load}}\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<section class="horoscope card card_widget">\n    <h2 class="thematicTitle thematicTitle_horoscope">\n        {{#link}}<a href="{{ link }}" class="thematicTitle_link" data-label="titulo-item-selecionado" data-position="titulo">{{/link}}\n        {{#icons}}\n            <span class=\'thematicTitle_moduleHoroscope\'>\n                {{{ iconRender }}}\n            </span>\n        {{/icons}}\n        <span class="thematicTitle_text">{{ title }}</span>\n        {{#link}}</a>{{/link}}\n    </h2>\n\n    <a data-uol-see-later="url" href="{{ link }}" class="horoscope_link" data-category="{{ metrics.category }}" data-area="{{ metrics.area }}" data-label="chamada-horoscopo" data-position="coluna-unica">\n        {{{ seeLater }}}\n        <div data-uol-see-later="title" class="horoscope_text">\n            {{ textHoroscope }}\n        </div>\n        <span class="horoscope_buttonRead">Continuar lendo</a>\n    </a>\n\n    {{{ button }}}\n</section>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <i class="icons icons_{{ icon }} {{ styles }}" {{#ariaName}} aria-label="{{ ariaName }}" role="button" tabindex="0"{{/ariaName}}>\n        {{#inline}}\n            {{{ inline }}}\n        {{/inline}}\n        {{^inline}}\n            {{#image.src}}\n            <img src="{{ image.src }}" width="{{ image.width }}" height="{{ image.height }}" alt="" />\n            {{/image.src}}\n            {{^image.src}}\n            <svg><use xlink:href="#{{icon}}" /></svg>\n            {{/image.src}}\n        {{/inline}}\n        {{#label}}<span class=\'icons_label\'>{{label}}</span>{{/label}}\n    </i>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#src}}\n    <figure class="placeholder placeholder_{{ type }} {{ aspectRatio }}">\n        <img {{^loaded}}data-{{/loaded}}src="{{ src }}" data-uol-see-later="image" class="placeholder_image placeholder_image__{{ type }}" alt="{{ alt }}" title="{{ credit }}" aria-label="{{ alt }}" tabindex="0" onerror="this.remove()">\n    </figure>\n{{/src}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n{{#link}}\n<a href="{{link}}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>\n    <span class="label {{ labelClass }}" aria-hidden="true">{{{ label }}}</span>\n</a>\n{{/link}}\n{{^link}}\n<label class="label {{ labelClass }}" tabindex="-1" aria-hidden="true">{{{ label }}}</label>\n{{/link}}\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <div class="{{ type }}_login {{#isLogged}}hide{{/isLogged}} {{#load}}loading{{/load}}">\n        <div class="{{ type }}_newAccount">\n            <a href="https://email.uol.com.br/" aria-hidden="false" aria-label="UOL Email" data-label="email-uolmail">\n            {{{ logo }}}\n            </a>\n            <a href="http://clicklogger.rm.uol.com.br/?prd=11&grp=src:13;chn:0;cpg:link_fixo_homeUOL_email_uol;&msr=Visualizacao:1&oper=11&redir=https://cadastro.uol.com.br/indexb.html?promo=PROMOEMAIL11GB&sg=300015590&skin=cadastrounificado/uol/pf&eos=yes&sa=web&skinPath=assine-uol-conteudo#newAccount" aria-hidden="false" aria-label="Ainda não tem email? Crie o seu" class="{{ type }}_newAccount__link" data-label="email-criar-email">\n                Ainda não tem? <span aria-hidden="true">Crie o seu</span>\n            </a>\n        </div>\n        {{* START Form email *}}\n        <form action="https://acesso.uol.com.br/login.html" method="post" autocomplete="off" name="formEmail" class="{{ type }}_form" role="search" novalidate>\n            <input type="text" maxlength="255" name="user" id="user" autocomplete="off" class="{{ type }}_form_user" placeholder="{{ placeHolderUser }}" aria-label="{{ placeHolderUser }}">\n            <input type="password" maxlength="255" name="pass" id="pass" autocomplete="off" class="{{ type }}_form_password" placeholder="{{ placeHolderPassword }}" aria-label="{{ placeHolderPassword }}">\n            <input type="hidden" name="skin" value="webmail">\n            <input type="hidden" name="dest" value="WEBMAIL">\n            <input type="hidden" name="userconcat" value="">\n\n            <button class="{{ type }}_form_send" type="submit" aria-label="acessar email">entrar</button>\n        </form>\n        {{* END Form email *}}\n    </div>\n    <div class="{{ type }}_notification {{#isLogged}}show{{/isLogged}}">\n        <a href="https://email.uol.com.br/" aria-hidden="false" aria-label="UOL Email" data-label="email-uolmail">\n            {{{ logo }}}\n        </a>\n        <a href="{{ inbox }}" class="{{ type }}_notification_link" aria-label="{{ user }}, {{#messagePrefix}}{{.}}{{/messagePrefix}}{{^messagePrefix}}você tem {{ count }} novo{{#plural}}s{{/plural}} email{{#plural}}s{{/plural}}{{/messagePrefix}}" data-label="email-checkin" tabindex="0" aria-hidden="false">\n            <div class="{{ type }}_notification_inbox">\n                <strong class="{{ type }}_notification_user" aria-hidden="true">{{ user }},</strong>\n                {{#messagePrefix}}\n                    <p class="{{ type }}_notification_msg" aria-hidden="true">\n                        {{.}}</p>\n                {{/messagePrefix}}\n                {{^messagePrefix}}\n                    <p class="{{ type }}_notification_msg" aria-hidden="true">\n                        você tem <strong class=\'{{ type }}_notification_count {{#moreThan}}{{.}}{{/moreThan}}\'>{{ count }}</strong>\n                        novo{{#plural}}s{{/plural}} email{{#plural}}s{{/plural}}\n                    </p>\n                {{/messagePrefix}}\n            </div>\n        </a>\n        <a href="{{ logout }}" class="{{ type }}_notification_logout" aria-hidden="false" aria-label="deslogar do email" data-label="email-sair"> sair </a>\n    </div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="match-wrapper">\n    <div class="match-score nao-iniciado gameData {{#teamHome.penaltis}}{{#teamAway.penaltis}} penaltis{{/teamAway.penaltis}}{{/teamHome.penaltis}}" data-channel="{{ gameId }}" aria-label="Placar {{ teamHome.name }} versus {{ teamAway.name }} {{ competition }}, Ir para página do jogo">\n        {{{ vs }}}\n\n        {{#pos}}\n            <span class="status status-pos pos-editorial">Pós-Jogo</span>\n        {{/pos}}\n        {{^pos}}\n            <span class="status status-live">Ao vivo</span>\n            <span class="status status-pos">Encerrado</span>\n            <span class="status status-pre">{{ time }}</span>\n        {{/pos}}\n\n        <div class="clearfix">\n            <div class="team team-home">\n                <img class="team-flag" alt="{{ teamHome.name }}" width="35" height="35" src="{{ teamHome.logo }}">\n                <span class="team-score saldo-gols team_score" data-json="e1">&nbsp;</span>\n            </div>\n            <div class="team team-away">\n                <img class="team-flag" alt="{{ teamAway.name }}" width="35" height="35" src="{{ teamAway.logo }}">\n                <span class="team-score saldo-gols team_score" data-json="e2">&nbsp;</span>\n            </div>\n        </div>\n        {{^worldcup}}\n        <span class="penalt-score">\n            <span class="team_penaltis saldo-penaltis e1">&nbsp;</span> Pênaltis\n            <span class="team_penaltis saldo-penaltis e2">&nbsp;</span>\n        </span>\n        {{/worldcup}}\n        {{#worldcup}}\n        <span class="penalt-score">\n            (<span class="team_penaltis saldo-penaltis e1">&nbsp;</span>) Pênaltis\n            (<span class="team_penaltis saldo-penaltis e2">&nbsp;</span>)\n        </span>\n        {{/worldcup}}\n        <div class="placar-bg" {{#worldcup}} style="background-image:linear-gradient(104deg, {{ teamHome.color }}, {{ teamAway.color }})"{{/worldcup}}></div>\n    </div>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    {{#meta}}\n    <div class="meta">\n        {{#advertisingLabel}}\n        <div class="publicity">CONTEÚDO PUBLICITÁRIO</div>\n        {{{ seeLater }}}\n\n        {{/advertisingLabel}}\n        {{^advertisingLabel}}\n        <h3 tabindex="0" aria-label="assunto da matéria" class="meta_kicker color_{{ section }}">{{{ meta }}}</h3>\n        <span tabindex="0" aria-label="postado há" class="meta_time">{{ timeAgo }}</span>\n\n        {{{ seeLater }}}\n\n        {{/advertisingLabel}}\n     </div>\n    {{/meta}}\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="modalDescription {{#hide}}hide{{/hide}}">\n    {{#title}}<h2 class="modalDescription_title">{{{ title }}}</h2>{{/title}}\n    {{#text}}<p class="modalDescription_text">{{{ text }}}</p>{{/text}}\n    {{#subTitle}}<h4 class="modalDescription_subTitle">{{{ subTitle }}}</h4>{{/subTitle}}\n    {{#buttonExit}}<button class="modal_button button_close">fechar</button>{{/buttonExit}}\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="modalForm">\n    <form name="formReport" >\n        <ul class="modalForm_list">\n            {{#items}}\n            <li class="modalForm_listItem {{#error}}modalForm_error{{/error}}">\n                <label {{#id}}for="{{ id }}"{{/id}} class="modalForm_list__name">{{{ name }}}</label>\n                {{#input}}\n                    <input type="{{ inputType }}" name="{{ id }}" autocomplete="{{#autocomplete}}{{ id }}{{/autocomplete}}{{^autocomplete}}off{{/autocomplete}}" class="modalForm_list__input"  />\n                {{/input}}\n                {{#textarea}}\n                    <textarea class="modalForm_list__textarea" name="{{ id }}"></textarea>\n                {{/textarea}}\n                <span class="modalForm_error__text">{{ error }}</span>\n            </li>\n            {{/items}}\n        </ul>\n        {{#text}}<span class="modalForm_text">{{ text }}</span>{{/text}}\n        {{#submit}}<button type="submit" class="modal_button modal_SubmitButton">Enviar</button>{{/submit}}\n    </form>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="modalHeader">\n    <h2 class="modalHeader_title">{{{ icon }}} {{{ title }}}</h2>\n\n    {{{ modalDescription }}}\n</div>\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="modal aboveOverlay modal_{{ type }} {{#hide}}hide{{/hide}}">\n    <div class="modal_container {{#scroll}}modal_scroll{{/scroll}}">\n        <span class="modal_exit button_close">{{{ buttonClose }}}</span>\n        {{{ modalHeader }}}\n\n        {{{ modalForm }}}\n\n        {{{ modalDescription }}}\n    </div>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<section class="novel card card_widget">\n    <h2 class="thematicTitle thematicTitle_novel">\n    {{#link}}<a href="{{ link }}" class="thematicTitle_link" data-label="titulo-item-selecionado" data-position="titulo">{{/link}}\n        <img {{#init}}data-{{/init}}src=\'{{ image.src }}\' alt=\'{{ title }}\' class=\'novel_img borderColor_{{ section }}\' />\n        <span class="thematicTitle_text">{{#resumedTitle}}{{ resumedTitle }}{{/resumedTitle}}{{^resumedTitle}}{{ title }}{{/resumedTitle}}</span>\n    {{#link}}</a>{{/link}}\n    </h2>\n\n    {{{ articleList }}}\n\n    {{^articleList}}\n        <p class="novel_errorMessage">Desculpe. Não há capítulos nem notícias desta novela</p>\n    {{/articleList}}\n\n    {{{ button }}}\n</section>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<ol class="orderedList">\n    {{#popularItens}}\n    <li class="orderedList_item" data-uol-see-later="item">\n      {{{ seeLater }}}\n      <a data-uol-see-later="url" href="{{ link }}" class="orderedList_item__link"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>\n          {{ title }}{{{ icons }}}{{{ comments }}}\n      </a>\n    </li>\n    {{/popularItens}}\n</ol>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <section class="{{ clsName }}" tabindex="0" aria-label="Ao vivo {{ title }}">\n        {{{ header }}}\n        <a href="{{ link }}" data-label="chamada-ao-vivo"{{#position}} data-position="{{ position }}"{{/position}}>\n            <h2 class="rtwTitle" data-state="active">{{ title }}{{{ icons }}}</h2>\n        </a>\n    </section>\n{{/.}}\n\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#related}}\n<ul class="related">\n  {{#item_related}}\n    <li>\n\t   <a href="{{ link }}" class="borderColor_{{ section }} related_title"{{#metrics}} data-label="{{ label }}" {{#position}} data-position="{{ position }}"{{/position}}{{/metrics}}>{{ title }}{{{ icons }}}{{{ comments }}}</a>\n\t</li>\n  {{/item_related}}\n</ul>\n{{/related}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<button class="report_button" ariaName="comunicar erro">{{{ icon }}} comunicar erro</button>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<section\n    class="gameData nao-iniciado {{ clsName }}{{#teamHome.penaltis}}{{#teamAway.penaltis}} penaltis{{/teamAway.penaltis}}{{/teamHome.penaltis}}"\n    aria-label="Placar {{ teamHome.name }} versus {{ teamAway.name }} {{ competition }}, Ir para página do jogo"\n    {{#worldcup}}\n        {{#isToday}}\n            data-channel="{{ gameId }}"\n        {{/isToday}}\n        style="background-image: linear-gradient(108deg, {{ teamHome.color }}, {{ teamAway.color }});"\n    {{/worldcup}}\n    {{^worldcup}}\n        data-channel="{{ gameId }}"\n    {{/worldcup}}\n    tabindex="0"\n>\n\n    {{{ header }}}\n    <a {{#link}}href="{{ link }}"{{/link}} class="gameData_link" aria-hidden="true" data-label="chamada-placar-futebol"{{#position}} data-position="{{ position }}"{{/position}}>\n\n        {{#worldcup}}\n        <span class="gameData_penaltis hide">\n            <span class="gameData_penaltis__title">\n                (<span class="team_penaltis team_penaltis__home">{{ teamHome.penaltis }}</span>) Pênaltis (<span class="team_penaltis team_penaltis__away">{{ teamAway.penaltis }}</span>)\n            </span>\n        </span>\n        {{/worldcup}}\n        {{^worldcup}}\n        <span class="gameData_penaltis hide">\n            <span class="team_penaltis team_penaltis__home">{{ teamHome.penaltis }}</span>\n            <span class="gameData_penaltis__title">Pênaltis</span>\n            <span class="team_penaltis team_penaltis__away">{{ teamAway.penaltis }}</span>\n        </span>\n        {{/worldcup}}\n\n        <div class="team" aria-hidden="true">\n            <span class="team_score team_score__home">{{ teamHome.goals }}</span>\n            {{#noBadge1}}{{{ badgeDefault1 }}}{{/noBadge1}}\n            {{^noBadge1}}<img class="team_logo__home" width="23" height="23" {{#init}}data-{{/init}}src="{{ teamHome.logo }}" alt="{{ teamHome.name }}">{{/noBadge1}}\n            <abbr title="{{ teamHome.name }}" class="team_abbr__home">{{ teamHome.initials }}</abbr>\n        </div>\n        <div class="teamVs" aria-hidden="true">{{{ vs }}}</div>\n        <div class="team" aria-hidden="true">\n            <span class="team_score team_score__away">{{ teamAway.goals }}</span>\n            {{#noBadge2}}{{{ badgeDefault2 }}}{{/noBadge2}}\n            {{^noBadge2}}<img class="team_logo__away" width="23" height="23" {{#init}}data-{{/init}}src="{{ teamAway.logo }}" alt="{{ teamAway.name }}">{{/noBadge2}}\n            <abbr title="{{ teamAway.name }}" class="team_abbr__away">{{ teamAway.initials }}</abbr>\n        </div>\n\n        {{#competition}}\n        <span class="championship">{{ competition }}</span>\n        {{/competition}}\n\n        {{#worldcup}}\n        <span class="status status-live">Ao vivo</span>\n        <span class="status status-pos">Encerrado</span>\n        <span class="status status-pre">{{ time }}</span>\n        {{/worldcup}}\n    </a>\n</section>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="searchTitle {{ type }}">\n    <input aria-label="{{ placeholder }}" type="search" class="searchTitle_search {{#textInput}} searchTitle_placeholderFixed__search {{/textInput}}" placeholder="{{ placeholder }}" >\n    <button class="searchTitle_submit"{{#ariaName}} aria-label="{{ ariaName }}"{{/ariaName}}>{{{ icone }}}</button>\n    <span class="searchTitle_placeholderFixed">{{ textInput }}</span>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    {{#link}}<a href="{{ link }}">{{/link}}\n        <h2 class="sectionTitle borderColor_{{ section }} {{classIcon}}">\n            {{{ titleImg }}}\n        </h2>\n    {{#link}}</a>{{/link}}\n    {{#stamp}}<div class="stamp stamp_hide1">{{{stamp}}}</div>{{/stamp}}\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<span class="uol-see-later" data-service="{{ showSeeLater }}"></span>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <div class="smartbanner_container"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-position="{{ position }}"{{/metrics}}>\n        <span class="close">{{{ iconClose }}}</span>\n        {{#storeUrl}}<a href="{{ storeUrl }}" data-label="imagem-app">{{/storeUrl}}\n            <img alt="logo" class="logo imagem-app" data-src="{{ iconUrl }}">\n        {{#storeUrl}}</a>{{/storeUrl}}\n        <div class="info">\n            {{#storeUrl}}<a class="descricao-app" data-label="descricao-app" href="{{ storeUrl }}">{{/storeUrl}}{{^storeUrl}}<span class="descricao-app">{{/storeUrl}}\n                <strong>{{ appname }}</strong>\n                {{#developer}}<span>{{ developer }}</span>{{/developer}}\n                <span>{{ price }}{{{ storename }}}</span>\n            {{#storeUrl}}</a>{{/storeUrl}}{{^storeUrl}}</span>{{/storeUrl}}\n        </div>\n\n        {{#price}}\n            <a href="{{ storeUrl }}" class="view ver-app" data-label="ver-app">\n                <span>VER {{{ iconSee }}}</span>\n            </a>\n        {{/price}}\n    </div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<div class="suggestSearch aboveOverlay">\n    {{{ label }}}\n    <div class="suggestSearch_form">\n        <form name="{{form.name}}" {{#form.submit}} onsubmit="{{form.submit}}"{{/form.submit}}{{#form.method}} method="{{form.method}}"{{/form.method}}{{#form.action}} action="{{form.action}}"{{/form.action}} autocomplete="off" role="search">\n            {{{ icon }}}\n            <input autocomplete="off" name="q" value="" type="text" class="suggestSearch_input" id="suggest-input" placeholder="{{placeholder}}" aria-label="{{placeholder}}" />\n        </form>\n    </div>\n</div>\n{{/.}}\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n{{{ dataThematicTitle }}}\n<div class="survey_content">\n    <ul class="survey_contentList survey_contentList__{{ collections.length }}{{ collections.size }}">\n        {{#collections}}\n            <li class="survey_contentList__item" data-id="{{ entry-id }}">\n                {{#image.src}}\n                    <img class="survey_contentList__img" {{#init}}data-{{/init}}src="{{ image.src }}" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" title="" alt="{{ image.credit }}" />\n                {{/image.src}}\n\n                <p class="survey_contentList__name">{{ title }}</p>\n                <span class="survey_contentList__resultText"></span>\n            </li>\n        {{/collections}}\n    </ul>\n\n    <button class="survey_content__button" disabled="true" >votar</button>\n    <a class="survey_content__resultButton show">ver resultado parcial</a>\n    <span class="survey_content__textFinalized hide">voto registrado!</span>\n    <p class="survey_content__resultText hide">Total de votos: <span><span></p>\n</div>\n<div class="survey_footer">\n    A votação do UOL não possui caráter científico ou qualquer influência sobre o resultado do programa da TV Globo\n</div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<section class="teams card card_widget">\n  <h2 class="thematicTitle thematicTitle_teams">\n    <span class="thematicTitle_prev">\n      <p class="thematicTitle_prev__title">Anterior</p>\n      <p class="thematicTitle_prev__play">\n        {{#calendar.anterior.time1}} {{ calendar.anterior.time1 }} {{/calendar.anterior.time1}}\n        {{^calendar.anterior.time1}} - {{/calendar.anterior.time1}}\n\n        {{#calendar.anterior.time1gol}}<span class="thematicTitle_prev__resultado"> {{ calendar.anterior.time1gol }} </span>{{/calendar.anterior.time1gol}}\n        {{^calendar.anterior.time1gol}} - {{/calendar.anterior.time1gol}}\n        <span class="thematicTitle_prev__separator">x</span>\n        {{#calendar.anterior.time2gol}}<span class="thematicTitle_prev__resultado"> {{ calendar.anterior.time2gol }} </span>{{/calendar.anterior.time2gol}}\n        {{^calendar.anterior.time1}} - {{/calendar.anterior.time1}}\n\n        {{#calendar.anterior.time2}} {{ calendar.anterior.time2 }} {{/calendar.anterior.time2}}\n        {{^calendar.anterior.time2}} - {{/calendar.anterior.time2}}\n      </p>\n      <p class="thematicTitle_prev__date">\n        {{#calendar.anterior.date}} {{ calendar.anterior.date }} {{/calendar.anterior.date}}\n        {{^calendar.anterior.date}} Não definido {{/calendar.anterior.date}}\n      </p>\n    </span>\n    <span class="thematicTitle_next">\n      <p class="thematicTitle_next__title">Próximo</p>\n      <p class="thematicTitle_next__play">\n        {{#calendar.proximo.time1}} {{ calendar.proximo.time1 }} {{/calendar.proximo.time1}}\n        {{^calendar.proximo.time1}} -- {{/calendar.proximo.time1}}\n        <span class="thematicTitle_next__separator">x</span>\n        {{#calendar.proximo.time2}} {{ calendar.proximo.time2 }} {{/calendar.proximo.time2}}\n        {{^calendar.proximo.time2}} -- {{/calendar.proximo.time2}}\n      </p>\n      <p class="thematicTitle_next__date">\n      {{#calendar.proximo.date}} {{ calendar.proximo.date }} {{/calendar.proximo.date}}\n      {{^calendar.proximo.date}} Não definido {{/calendar.proximo.date}}\n      </p>\n    </span>\n\n    {{#link}}<a href="{{ link }}" class="thematicTitle_link" data-label="titulo-item-selecionado" data-position="titulo">{{/link}}\n        <span class="thematicTitle_moduleTeams thematicTitle_moduleTeams__{{ classImg }}"></span>\n        <span class="thematicTitle_text">{{ title }}</span>\n    {{#link}}</a>{{/link}}\n\n    {{#buttonTicket}}\n        <a href="{{ buttonTicket.link }}" class="thematicTitle_buttonTicket thematicTitle_buttonTicket__{{ classImg }}" data-label="{{ buttonTicket.metrics.label }}" data-position="titulo">comprar ingressos</a>\n    {{/buttonTicket}}\n  </h2>\n\n  {{{ articleList }}}\n\n  {{{ button }}}\n</section>\n\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#title}}\n    {{#link}}<a href="{{ link }}"{{#metrics}} data-category="{{ category }}" data-area="{{ area }}" data-label="{{ label }}" data-position="{{ position }}"{{/metrics}}>{{/link}}\n    <h2 class="thematicTitle thematicTitle_{{ section }} {{#iconTitle}} thematicTitle_icon {{/iconTitle}}">\n        {{#iconTitle}}\n            {{{ iconTitle }}}\n        {{/iconTitle}}\n        <span class="thematicTitle_text {{{ className }}}">{{{ title }}}</span>\n    </h2>\n    {{#link}}</a>{{/link}}\n\n    {{#search}}\n        {{{ search }}}\n    {{/search}}\n{{/title}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<div class="toHideBlock">\n    <span class="toHideBlock_text top">Esconder notícias do {{ section }}</span>\n\n    <button class="toHideBlock_button toHideBlock_{{ section }}{{#opened}} minus{{/opened}}" aria-label="{{#opened}}Esconder{{/opened}}Exibir{{^opened}}{{/opened}} notícias do {{ section }}">\n        <span class="background_{{ section }} toHideBlock_icon"></span>\n    </button>\n    <a class="toHideBlock_clickButtom"></a>\n    <span class="toHideBlock_text bottom">Exibir notícias do {{ section }}</span>\n</div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<button aria-expanded="{{isCollapsed}}" class="{{classButton}}">{{buttonText}}</button>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<li class="weather {{#loading}}loading{{/loading}}">\n    {{^loading}}\n    <span class="weather_icon" title="{{status}}" aria-hidden="true">\n        {{{ icon }}}\n    </span>\n    <div class="weather_temperature" role="button" aria-label="Previsão do tempo {{city}} {{status}}, Mínima {{min}} e máxima {{max}}graus" tabindex="0">\n        <span class="weather_city" title="{{city}}{{#state}}, {{state}}{{/state}}">{{city}}</span>\n        <div class="weather_status">\n            <span class="weather_status__max">{{max}}&ordm;C</span>\n            <span class="weather_status__min">{{min}}&ordm;C</span>\n        </div>\n    </div>\n    <div class="weather_moreOptions">\n        {{{ button }}}\n    </div>\n    {{/loading}}\n</li>\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<footer id="footer" class="{{#velocity}}footerHidden{{/velocity}}">\n    <p id="footer_copyright">© UOL 1996-{{ year }}</p>\n    <a href="" id="footer_webVersion">VERSÃO WEB</a>\n</footer>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<header class="UHeader__area__container">\n  <div class="UHeader UHeader__nonfixed" id="UHeaderArea">\n\n    {{* START header *}}\n    <div class="UHeader__container UHeader__menu">\n\n        {{* START botão header/menu *}}\n        <button class="UHeader__side__menu" aria-label="abrir menu">\n            <span class="UHeader__side__menu__label">MENU</span>\n            <div class="UHeader__ico-close busca-fechar" aria-hidden="true">{{{ iconClose }}}</div>\n        </button>\n        {{* END botão header/menu *}}\n\n        {{* START header/logo *}}\n        <div class="UHeader__menu__brand">\n            <a\n                class="UHeader__ico-uol icon-uol"\n                name="header"\n                href="https://www.uol.com.br/"\n                data-category="barra-home-uol"\n                data-area="barra-home-uol"\n                data-label="logo-uol"\n                data-position="coluna-unica"\n            >\n                {{{ iconLogo }}} {{{ iconLogoTextoUol }}}\n            </a>\n        </div>\n        {{* END header/logo *}}\n\n        {{* START header/email&widget *}}\n        <ul class="UHeader__menu__nav__container">\n            {{#widgetProfile}}\n                <li class="UHeader__menu__nav__item__login" id="profile-avatar"></li>\n            {{/widgetProfile}}\n            <li class="UHeader__menu__nav__item__email">\n                <a\n                    href="https://email.uol.com.br/"\n                    class="UHeader__menu__nav__item__email_container"\n                    data-category="barra-home-uol"\n                    data-action="clique"\n                    data-label="email-checkin-deslogado"\n                    data-area="barra-home-uol"\n                    data-position="coluna-unica"\n                >\n                    <svg class="UHeader__menu__nav__item__email_container__iconSvgMail" role="button" aria-label="email">\n                        <use xlink:href="#email_Outline" />\n                    </svg>\n                </a>\n            </li>\n        </ul>\n        {{* END header/email&widget *}}\n    </div>\n\n    <div class="UHeader__side__menu__container">\n      <div class="UHeader__side__menu__container__scroll">\n\n        {{* START menu/canais *}}\n        <div class="UHeader__side__menu__channels" data-category="menu">\n          <ul class="UHeader__side__menu__nav__sub__list area-padrao" role="menubar">\n            {{#menuCanais}}\n            <li class="UHeader__side__menu__nav__sub__item{{#mais}} UHeader__side__menu__icon__mais{{/mais}}" data-channel="{{id}}" data-section="{{area}}" role="presentation">\n                <a name="menu" data-area="{{ slug }}"{{#hasSubitens}} data-label="menu-header-nav-direita"{{/hasSubitens}}{{^hasSubitens}} data-label="menu-topo-nivel-1" href="{{ link }}"{{/hasSubitens}} title="{{ titulo }}" role="menuitem">{{ titulo }}</a>\n            </li>\n            {{/menuCanais}}\n          </ul>\n        </div>\n        {{* END menu/canais *}}\n\n        {{* START menu/subitens *}}\n        <div class="UHeader__side__menu__subitems" data-category="menu">\n          <a class="UHeader__side__menu__container__back" aria-label="voltar ao menu principal" role="button" tabindex="0">\n            {{{ iconArrowLeft }}} Outros canais UOL\n          </a>\n\n          <div class="UHeader__side__menu__container__sub__title">\n            <div class="UHeader__side__menu__nav__sub__title UHeader__color5"></div>\n          </div>\n\n          <div class="UHeader__side__menu__container__sub">\n            <ul class="UHeader__side__menu__nav__sub__list UHeader__side__menu__nav__sub__block" role="menubar">\n              <li class="UHeader__side__menu__nav__sub__item" role="presentation"></li>\n            </ul>\n          </div>\n        {{* END menu/subitens *}}\n\n        </div>\n      </div>\n    </div>\n  {{* END header *}}\n  </div>\n</header>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<svg id="header_logo" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid slice">\n    <title>uol_logo</title>\n    <image width="56" height="56" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF85JREFUeNrMWwmUVNWZ/t5ea3f13g3ddLN3C0grqDi4gAsS3IhL1HFORJO4xCRCljGZjGOIUWOCUcdEnURFTWZcj4LigiHSqCgGEVCRHRpoel+qq2uvt8x/7321NCIHjcnM8/zcqupXr+53v3+/Vwl/n2uWK1NJGkiaj3BvqytrSJaRbPoyJyJ9ic+aT3KhO4bYB+NqNIytUVEVUvkY8MqQZQmSTD8ssZ+WsWlXCp0DJjbuTvLRBfs4yWPu6/87gD9tqAo9eLB3QX/GusllCqdN8WLmZAMzjzHgN2Q4Bb8kyzIUjURVoGoq4NCHtgLJkWETto5eE29+FMFTa/rQ3peBC3IRSfgfCpABe3swtvC9wfhNSdsOFfkUfH1OMc6Z7kFJkOZsO3Bo8hIxxJiSJZmDUxkwXSVwYnTobwwcoNB3aCqWBMdi7BKje/vxuxe68e6HMQZuMcm9/xCAd0yomvVc1+DSDwaTnLFvnleJ688vJlQppNIWMpYNDk0iEIoKRVb5qKkaNA5OhaxKUHQxMhIdR0zFtulfAmozkEoGqjeJNz4I45b72xHtMVvnlRVd/afOgZa/C0DGmuYxb/196+DC9qSJyWMDuPs79agrsRCNJZDKmDAJHHukLBM4AqYTKF3VoWk0ajQaOjGnk5oqXCSupTZsiSFzOPNMpx2mAUxnpQxkI4U4/fl7t3XiL6s7QCDvbfJ7Ft/e2nVUaqsczU13NVU2BLzWqw+1Ds5vS5i4bM4I3Pu9BgTVFCKRJBIpExnTBsMnMXVUhI3pugbDo8MgYIbXA81D4vVD8/mJHT8Uw0sADGJTo1Gjkb6r0QLp9ByNGa3D2dU1CxefV4NgaR0e+fOuGaTtc6+oKln5VjgW/psBPtBc3uwznHfv2TnY0Bo3sejKMfjRZVVIRKKIDCYQj2eQztgw2cozm1LI1lyAGgfJwBnQPQaB83BwsofAEUCJRkk3SDwEymBICJhKIgtRGKGCWdtM4oTmctQ2jMP9L35SXW7IC75WWbJyTTjW+YUB/mJCZbOqYvWSHYOhvTETv76pCV87tRhDA1EMheMcXCpN4Ig525EEQFpeWZW5CjKbYywysCobiS2Zs+aFZPg4OLqJwBBlGgHVPKS2pLek2rQ69JrUWJG4ylqWBYtATj6mCg0N9fjN8i2eCX798nnloZVvhqOdnxvg4nFVzeVBZfVj+yKhTyIpXHxGDa45pxSDvRFEBhKIRQU4Mj1aY5qEzFSK1EthYYBEEV5TyTJKE5do4jITFxR7LykEhuyU9NMdNfe1B45i8PcS2TTzro5lEtA0pkyqQ31dNX7z0hbPsUHf5Qsmj1u54kBX51ED/I8x1SGfobzwbn+iYVV3FCcdW4q7vz0GfR0DxFwS8ShTS0cwx5/CwImnsUDOhINiYF1wMgPLALHXTA1VXbDFATCgxCAZHxuJYvqcjZr7GbFOoCWmJQwkOaBJjSPRP2Tj5fX7PWdUV8z44eyTnl764fbkoVjkwwGkCS6NO07zio4IivwqltwwBt0HehHuiyE2lEYy7YDMzlVNcPfOVhgsNqfoNf2MlaB7SNJJB6mkhWTCQiKRRjqVhkm02zRJx7a5G5fIncqSh0JKgKSYFqWEFqeUFqacmC4lVQ6R3ZZB9VeRmpdAIhbNVA9uXTQd/vpivLjrQLOWNpceFYO/bBq1kFKqhY+29qKLvOMt3xiDGi2BSDjBJ8pUkrFmu0GGvDs9hOIafaBQoFYocDORHZGhUAwgIJTRsPgGWagzWOyz+fIy9WMAmUeRiTlJIjuVyEYJsMxFFzyQO2W/xZIHlvbYmRgtagbjx1Thtmc+QrPHaLz7srmDv1u3ed1nAvyfU6aGVMV5YVc07nm5YxCN9T7cOLeYbC5Oq8/iHDHjFKRetniATKpDSgeK28SAjH3dJg72megasNDZn0EHpV3tPSnUlGgUxCnumcyWTK5ujsOMWMRBPnmWJkikmgRMBhNFBGu6x7EzlAjYPEY6mSSBjKK22oeDXRb+9Ne9uGJs3YxFc2b+12/f2ZhTVbUQYEnQe0/SjIUYOHbdOI85lShSxGRWHXOXLVz4vh4L2zsz2NaeRmuPie6IdcSwE/SpaGoI4KQpJZh7yggcO6UKtj8DzUzB8aTJ7HwkJrc7SfZwu2NAHRIbtEBcA1Q+dcdiLPZh0YIGPPPyLizbuit0eUXJPfTHqz+VyXxy7UUNre3te9/YtQ9LtnWgplTF49+tRmQow23OMgVAFnhjKRtrdySx6uMEeoesvynbLwpouHTOKFz3L5MxZnQ5OU8fJQFF5JQojCg+mqHO1dkyE7DSYbK9MDLJIbLvCMkAM3byUx78aEkr1rb0YNWCC6AVF48ef+cfWoc5mWgmc+tQPIZ3eof4+4tP9iOeyJDNOTw3ZOQxYMs2xHDzk3146t3o3wyOXRHyyI88vxsnXrQcF1zzElrW7EAm2kfz7qP0thd2up9UmuZkJzlQbsPEqkX2bdka5b4qOa0MLplTifZ4En/euodUN3PTMBXd8cMFoa6ujgVWJoVNZG/smj5W56GA4it3KO/vTeHR1RHE085nTrYx6OFjnVeHXxFr15s2haTEeKTrnY3dmH/9Slxx/ljcefPJKC0t4sGfhRKumg4voVxHRQBp+gykTXZ8wpRi1Nb4sGznfsyZPH6+W2YJgJZtLUgRexuIvTg5gTHVKkIemRh0uFo+/EYEb386xGBayMdBTQgYqPXqwjsW6L5TMLKrjwDuiKawkbIgJp91PfnSbrzScgAP/Hwmzj1rrAj6suuBHYePYAUz5b3cLslDs3Tx7JkVWPrcPlixeMPOf7t21vg7ft/CAaaSiQvNRAxbB8WPTq7VQaxjiGLYPS+HyYFkcj/OmPlKdTFOLfOjhFIxi36QKarJfzgPpvDKflakKziRvjejPIgUfbiZctllbX3oTWY+9Z1BirdXLlqNKy7Yh9/94nQe+B0KJUxNJbd4ZlkT6w6wEGRSiJo+uZgAAqv2tGFeRdlV9JgWmZCGLDMzyzYz2BdL84fXV6gYSti444WBYeAurS3B/c11uGhkCKWU/bMa1aZfs5CPjcxKcsLAO2J03JF/Rn8zKPv5p4oi3DN9HK5rrEWFRz88my/uwfnXvIKB/gh5zLQILeQUeJJAz5IpvBBWLk3j/Pw723rDsBPJ+Tt/em1Itm1rlpVMkCOx0BpL8RsqihQ8/uYQ9vUKm6n3GbhrSi0urSuDj7UamLrIIrl2uKoIXcwyKAK5AJx9bxeKI1SfLQJbgFMri3HXCRNw6ejqw4Jc+34XLvzmawhTku+Qn7CZmAIsi4/MIiUCWlctfMD7XcxJJVlfaJZMQbc5k6KgSSsSM3l+gpYtSaz5RNhcY5EXt0wagYaglyfTfKkkaZg4OcP/DEDIgx3GdJZR+m0PMXrJ6Cr8+sSJh2Xz4+39uGrRX8izEhmJODlVmnOaQLLUyrLdXwdOPq5EPNPknzertmWezt7Ylp172Hu7BJPHlfiwcOII6FzXXWCO46ZNbhLK+wwSD/pO1g6drO05w2wQTo5s/n0GTOJ9Ge7ouH3V+XT8atpYPLD9INZT5TLMy27oxsiZz+Xej6wwMH1SEeafWYkZBExkdA52DMbI+7OMxz5ddiyrgUBy1NkrlhQ/dM3YKl7AUhlAnoySMUXJSY49ScrByIJzXBvkjDm5Nckx6OTU1OGaw4CarN7jry3O5o+OqcWkYv8Rw8pBSv+WU3C/+pYtuPOh3RgMp/jDo8RqmqeCFjFoM4D2sC96CdQN4yrhU2WRDLPCU1bE0vMZ2/k0iM2cM+vaYsFC5Zkc3gTKMe3aINyqgn2BLViKTOW/93ZjCzFxtNcTKzqwfkuET8VP8zVFXhlSmTcSnR5yLoaKHgrIZ1QGUUavWX9FMKYKJnlpQ+ppI6eiXMWGhQTnsCGiEHWWdd5koocx9Tdtm6dVB+Np/HZHJyUGmc+dFW3dKxakKRSAKSbLMtb8DVknw9STZ/Wy6GvyUVZcBlyvlQVX6HCcvM0VxsTDgbSzTEoieNMvYHc0iYd2dfNk49DL75HIdPJPCmgKbj9+PDqpxnztYC829kWGLWr2CXJ2Xp9EkrkHt1EOmp18DqQrcsFrDqrwsQXqCefw4JxDbDBrf9sicfxme+enwM1o8uOxH48nqaNKJF+fRzNUiiXT+EpdOe45qRFXj6spWD/HtX2Hl5zci22hrCJ77RhK8TSIqyjPyCVe9/Haj2eB+VFyM3bpMIJh78UCOAUiADpoi2fw8J7eYcAqi1Xc9a0a3HnjKExsLEXjpBp8Y37psHue3dvJn2GSYzq7ugRfHSn+vp1sdyid4l0DviSsYN0bFQWpAJhA0oLoULP/2Epwsalad1xhgLNgXZCuPQ4H50DCIarr5FsdzCxY9yBRwNykUV7c/51RmNFcjEDIQJDSO395NX5yQyNG1Xhy9+0i1sOpNDJMC0j6Cux2czcFe0rCZUXVw7JNiTX90PHjfThjahG/YRMxyloJkltn54G5QF1wbFSAgtfu/VKe2UN1tRDkM20DGEjny65ZVBXccU0Dyit88PgNeAM6jR54ikJQAyNx87cmD2Px/Z5BJCmOp0jNP44kMK7cEOAHwoJBUs9NCk2rixLekfTHs6aV8BtWtfdz++P9FgecQQ6OgxCiZmtrQqFBtC0YMOUQtS3El2OPXrAJMdvPXqdPKsZ3zq+FxprEhk6j6KVqVARrRgCyUYFzz5iI4kA+09kZiSFBlcFWUst+qla+0hTEaeOCBC7DglCLLOvaJoWY6iJ6a6s8uHR2FWopQ9gfS5AuJ1wGszZYyKJQUwZOlQQw1QWnSHkWD7XJXDCh777itkZEgu/Bt+fV8b0LsUHDxKBS0EvvWdvQoHjsR1FxEeaeOjL3vd20SIzBd3qEFz2nsQiNNX7yohlmM60yxbnNbJXYVVvl5dtaCy+p4++fb20XW1/cToWa5lgjYdsH2dc6gdLoXo3FHv5agJSzdnnINs8HVA8OZIRq+gwZiy6o471THm95eSB6ogyYzHqjklhii2LyjOMq897UtNARS2JdXxRnUzVR7NNwTG2Q92PpO2tkWqkWxefBcbQyLM6wjZDLzqpBbaUHWwYiWN8TFgwW2CADqRWA1FwWOYMuQJmz6oI8lD9arDe6h3Lvv3piGSqKdZH6seYu0wO+DSxzxRelikj+LPrbiOqiYSHhmf198OsyrjspxDdXS6hAMIwgfL7SFpmq3taMLLeymWw7kBT7CsTifYum8Afcu2UP4hkrr6KfskHJBZeXbEjhtpjNAwrStHaKs1n2yoMq5kwNiWQ9m8+629uCNfaJmasyWQp2QlMoB/AAZT6bwwlc2VyEoEchW9WwoyeD+qB3E8PGw0R3ZGhZvd+Htu4MT8vYxsnM5jJcd+l4cuMmlhBI1o5XKJthfU9Vdtvycl7U7Oey2M2Vs39zmVQKkoSN4XzMvXB6cUHVkc2I3IyJ3LzEWuXkMOCY3HGwwtzO5MMBSwymVBuYPynIbdfjD6IjYqJK87Tkumqd4cH7RpHX2rY/ToFXGDjLOf91QROmTCjB290DWLq7g/RadUXho6pqfN9Bc0fxmm18ktA9Gi2CRqA1Web2yb0tAdjrFtY+UquZE30iZnKNFJFSliwCxorZNEmKj7aVgpmO08sokMyrN1PN759Syjd6dGLPGypBW9sQpKR1Xw7gN9/8oLVMQsv2fYM40G1zFmVygcWU//3xl6ehOKjj4Z0H8XLHABTD44rBXTj3eiSabvC9QL6Ty4BqGgwCbhBQBpaNHgJrEMB2twdz3Gi2XSbzrWxx8kKA4wKWhdB9rJQj1jKpGNLxATjxPqoaunMArzsxhJqQzrfqAsEAuhMqBruiLde+tXF4XzRtphZPC/qx8r0+7sGYirEdlbpyDS8+dA6BNPCzD3ZiRVsf3/pSdAKpM4B5kAKoDoPEw7atCaiHxEvgvPQ8Jqx9mL2a6igMKGzLjTlO0V9RZGbfTD1tvk9gE4kZyjmTsSGkhvrgkDy7si33jLEUu9li+vxeBMorsOK9NkzwaIs/tbt0e2tXyxiv3vLosu30eHcjklXZmTQmj/bjxYfP5SBvXb8Nf9h2gMDpeRaJUR6Qs4wyFkk8LlAOksRPQAtz6ckN9D1ywSo7lMDqahckY5LVl3ZGInAOgUuSVlLG09GDa2/fiuffHuDfrwqomFjtgz/oRbA4QOpZhg0ftz/2x478QYVh22dNPuNqZTCFJ1876G5OsqMdpCbpJKaM9mLTa/+MKY3leOijPfj+Wx8iRh6Nb2jS5BVXNJ0dONBydmiQunvYSOwZ5KiY5FsOdB/FQN2guKkTSAKrqCJoslaglZbFFhwB/PijLnz9lu3Y+GEM5brYUmmu9cEXIHBFAfjLqvDg67vDiY7BxZ+5P/jz1s7Weo++eMnSjbSAXh54efxhzZ1UAsWGhTVPzcf1V07C6gPdOPeFt7CitZMltAWicFG4l3W9bkECoBTERL+PwHuZa6e/GRLf3JVUUaLBYZsrOiLkTx58ej++9pMd8EZk/Hhida5DfvkJFQiVUkJeUkalk46WdXsXvRmOth5xf3BfMt1SbUvz+zJS9anTy0UfkscsJ9erPnPmSMw8vgIbtvbimU37saG7HzWULFT7DL6fjsKGlPvacd8PUebxSrdIq751fgWZuyyYYwDJI/KDC5SiGaoPr7zbh5sf/Bibt0Rw44RqzKdy6N3+KMW9OKbVB/HdeRMQKC2HWlSOW/60ftnKTft+crTnZELkEDa+/vi8hsmjZFhx0VaUPZQyeby8CcUP8BD4p1bswa8e3Y4DnXEO8pKxI3DOyHL4uY+yuNi8a2dxMQng5Rv2IkbG+PqS8fD4VN6xZh0DhSjc02bi1bV9eGltJ3TTwXkjSnBaVQheis0e0orr1+1EN+XNT3x7OmZPG0NzCmLpqu2t/7707eMOd+TrSAeBmkNBY/Xm5+aFAnISFnkyh3k5r8FPQDiKIjpnVJJINNlX3+rA02S7r64VLnwsGf7J5UUYSyVPha6gnioD1hZkh4Xu292NNZQ7/vqGBgT8Gjr7LXywI4oN2yJo7yV7p1RrRlkA00qD5KTIQZHNeWl8hTz4Q9sPYsaECjz707mQdS9eWrcnfP19q2Z/1inFI550InucVVkfWP3M3TMQkE2YmTQ/maSyxqym8bY9bxHyIxDk2kk9h2IW3tk0gHc292PL7iiNA0dsFLEOXi2BZwsxwqvh2CIfz5J0sn8GigH0keNiNeP1724llVbw+p0XUa5chKff+AQ/+MPbX3WPYX6xo1wMZKje98JzvzyBmGQqRpmFQiA1cZbFltlendsFdex8E5R7MJnbHnM2azf154pC1qZ8ePlBrFo/gEXjKjm4rIUr/ISGLEILPd9L4FjY/+H6HbyCf+QHc3BmczUeWL4p/KvnPrz6SOA+z1m15mPHF69+8rapoSKVKi22CSLbPHNnWY9DE7LYWTOmtE6+9yL21em1ZRdUuqLlNUj54lW378L+9jQWEshan2iXMK+rsazHBcji6L1bD+D1g31Ycu0pmDY2iNue+CD8xpau2UdzePbznDYkj6y98J+Lxs86cYIfFsVHcYhOEs1hAsl3mxiXcraxJLwn3yfgx7FEdiLxIG4jGrXx8ye68NetCcyuDGJ2RQABnssqPM1jGemDOzuwrmcQXz9zNAJULaxe175sa1/86qM9Q/pFzosuvOa8ylsXzC0LBQxwkAKMqN8ct8ktjkm6TXwCaXOP6nCAlimOhLB9NyvjYPOuFJ5dG8Hm3SlMDfn4blYVObPlB/uxj4J8RUBHuSOHm3yeRc/3hB/7R5z4bWiq99x68elFC+ZOD+T3/7gmStwUs31JUcSK/IypKgdtw42XwmwtS3zXpHH9ziReWh/D1rY0aqg6OKe8ODzK0O6zbPveoz1C+WWe2W6YWKffelazb8GZUylt8sj5xhK3vYL9CQef2rMovNiGz182xwlclLIXG8cHfeGzyoq+MLAv+1A6K7EXnN3su6qpVm+ePMpAZUgRbfPPaN8zkN1hEx/vT+G9HUkuHlkO13m0ZaeFAssfae9b9v/t1H0h2PmlAWXqhBFaczRpNzeO1EOsI8BAfrJfFLut3SY7lvJ3/V8K2PW/AgwAlWM1XVfOJ5YAAAAASUVORK5CYII=" />\n</svg>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(t) {
            return function(t) {
                return '#!vm;utf-8\n\n##\n## Definindo ambiente da Home\n########################################\n\n## Type default da home\n#set($type = "homemobile")\n\n## Cappra\n## Valores disponíveis para o teste expTailTargetReorder (true|false|"sorteio")\n## onde "sorteio" apenas cria o cookie e quando estiver true, sorteia e exibe o template reordenado\n#set($cappra = {\n  "expTailTargetReorder": true\n})\n\n## Repassando valor do teste para o GA se tiver o cookie setado e o teste esteja habilitado para a troca de templates (valor true)\n#if($request.getParameter("_uolabCTD006") && $cappra.containsKey("expTailTargetReorder") && $cappra.expTailTargetReorder.equals(true))\n  #set($abTest2 = "expCTD0006bDVrDDe002")\n  #set($cappra.ctd0006 = $request.getParameter("_uolabCTD006"))\n  #if($cappra.ctd0006.matches("padrao-.*"))\n    #set($cappra.ctd0006 = $cappra.ctd0006.replaceAll("padrao","publico"))\n    #set($abTest2 = "expCTD0006bDVrDDe001")\n  #end\n#end\n\n## Não carrega a barra do topo e banners topo/footer caso for preview de módulo ou horizontal\n## por esse motivo é utilizada a variável que contem o path para o preview\n#if($homeUOL.path.preview.module)\n    #set($type = "homemobilepreview")\n#end\n\n## Chamada da estrutura de dados da home do UOL\n#set($homeUOLContentType = {\n  "type": $type\n})\n\n#parse("$!{homeUOL.path.macros-dev}homeUOLContentParser.vm")\n\n#set($editorialModules = $homeUOLContentData.feed)\n#set($serviceStatus = $homeUOLContentData.serviceStatus)\n\n##\n<!DOCTYPE html>\n<html lang="pt-br">\n    <head>\n        <meta charset="utf-8" />\n        <title>$!{homeUOL.header.title}</title>\n\n        <meta name="description" content="$!{homeUOL.header.description}">\n        <script>\n            // Definir o cookie WEB para tablet samsung SM-P601 e em todos os tablets usando firefox\n            if( navigator.userAgent.toString().indexOf(\'SM-P601\') != -1 || navigator.userAgent.toString().match(/Mozilla/.*Tablet;.*Firefox/)) {\n                document.cookie = \'x-user-agent-class=WEB; expires=; path=/;domain=.uol.com.br\';\n                document.cookie = \'forced-user-agent=1; expires=; path=/;domain=.uol.com.br\';\n                window.location.reload();\n            } else if( navigator.userAgent.toString().match(\'Opera/d{0,1}.d{0,3}(.*)(; Opera)(.*)(Presto/)\') == null ) {\n                // UA de test\n                var marrakeshCookie = new RegExp( \'.*?x-user-agent-class=(.*?)(;.*?$|$)\', \'g\' );\n                if ( unescape( document.cookie.replace( marrakeshCookie, \'$1\' ) ) === \'SMART\' ) {\n                    // se for iPad setado como SMART\n                    if( navigator.userAgent.toString().match(\'iPad\') != null ){\n                        // possível tratamento de erro técnico: limpa cookie para voltar para a versão WEB\n                        document.cookie = \'x-user-agent-class=; expires=; path=/;domain=.uol.com.br\';\n                        window.location.reload();\n                    }\n                // Se foi clicado no botão "Acessar versão celular" no template de WEB\n                } else if ( unescape( document.cookie.replace( marrakeshCookie, \'$1\' ) ) === \'WEB\' ) {\n                    // seta o cookie para MOBILE\n                    document.cookie = \'x-user-agent-class=SMART; expires=; path=/;domain=.uol.com.br\';\n                }\n            } else {\n                // Caso seja Opera, define versão SMART\n                document.cookie = \'x-user-agent-class=SMART; expires=; path=/;domain=.uol.com.br\';\n                window.location.reload();\n            }\n        <\/script>\n\n        #* dns-prefetch, prefetch, preconnect, prerender e fetch *#\n        #foreach($dns in $homeUOL.header.dns)\n            #if($dns && $dns.containsKey("url") && !$dns.url.equals(""))\n                #if($dns["preconnect"])\n                    <link rel="preconnect" href="$!{dns.url}" crossorigin />\n                #end\n                #if($dns["dns-prefetch"])\n                    <link rel="dns-prefetch" href="$!{dns.url}" />\n                #end\n                #if($dns["preload"])\n                    <link rel="preload" href="$!{dns.url}" as="script"/>\n                #end\n                #if($dns["fetch"])\n                    <link rel="preload" href="$!{dns.url}" as="fetch"/>\n                #end\n            #end\n        #end\n\n        #* preload font *#\n        #foreach($font in $homeUOL.header.fonts)\n            <link href=\'$font\' rel=\'preload\' as=\'font\' type="font/woff2" crossorigin="anonymous" />\n        #end\n\n        #*\n        #if($!{homeUOL.data.service-status.virtualDom.equals(true)})\n            <link rel="preload" as="script" href="$!{homeUOL.path.assets.js}stvd.js?$!{homeUOL.queryString}">\n            <link rel="preload" as="script" href="$!{homeUOL.path.assets.js}bdvd.js?$!{homeUOL.queryString}">\n        #else\n            <link rel="preload" as="script" href="$!{homeUOL.path.assets.js}stvl.js?$!{homeUOL.queryString}">\n            <link rel="preload" as="script" href="$!{homeUOL.path.assets.js}bdvl.js?$!{homeUOL.queryString}">\n        #end\n        *#\n\n        #* Configurações de Web App *#\n        <link rel="manifest" href="https://$!{homeUOL.path.domain}/manifest.json?$!{homeUOL.queryString}" />\n\n        #* Favicons e App Icons *#\n        #foreach($icon in $homeUOL.header.icons)\n            #if($icon && $icon.containsKey("rel") && $icon.containsKey("href") && !$icon.rel.equals("") && !$icon.href.equals(""))\n                <link rel="$!{icon.rel}" href="$!{icon.href}" #if($icon.type)type="$!{icon.type}"#{end} #if($icon.sizes)sizes="$!{icon.sizes}"#{end} />\n            #end\n        #end\n\n        #* Metatags *#\n        #foreach($metatag in $homeUOL.header.metatags)\n            #if($metatag && $metatag.containsKey("name") && $metatag.containsKey("content") && !$metatag.name.equals("") && !$metatag.content.equals(""))\n                <meta name="$!{metatag.name}" content="$!{metatag.content}" />\n            #end\n        #end\n\n        #* Open Graph *#\n        #foreach($og in $homeUOL.header.og)\n            #if($og && $og.containsKey("property") && $og.containsKey("content") && !$og.property.equals("") && !$og.content.equals(""))\n                <meta property="$!{og.property}" content="$!{og.content}" />\n            #end\n        #end\n\n        #* PREVIEW: Itens específicos *#\n        #if($!{homeUOL.env.equals("preview")})\n            <link rel="stylesheet" type="text/css" href="$!{homeUOL.path.base}preview/camaleao/style-mobile.css?$!{homeUOL.queryString}">\n            <script>\n              document.documentElement.className += (window.self == window.top ? " top" : " framed");\n            <\/script>\n        #end\n\n        #* Reload da página *#\n        ##<meta http-equiv="refresh" content="18000" />\n        <noscript>\n          <meta http-equiv="refresh" content="250" />\n        </noscript>\n        #if($homeUOL.header.pwa)\n             #* CSS para o PWA *#\n            <style>\n                #parse("$!{homeUOL.path.assets.inline.css}min.pwa.css")\n            </style>\n        #else\n          #* CSS blocante *#\n          <link rel="stylesheet" media="all" href="$!{homeUOL.path.assets.css}min.pwa.css?$!{homeUOL.queryString}">\n          <link rel="stylesheet" media="all" href="$!{homeUOL.path.assets.css}min.css?$!{homeUOL.queryString}">\n        #end\n\n        #* JS inline *#\n        <script id="inline-head" type="text/javascript">\n            // tempo para atualizar a home, via JS\n            var TIME_TO_RELOAD = 4.1667 * 60 * 1000;\n\n            var Config = {};\n            Config.Conteudo = {};\n\n            Config.serverDate     = new Date(\'$date.format("yyyy/MM/dd HH:mm:00", $date)\');\n            Config.plataforma     = \'mobile\';\n            Config.subplataforma  = \'smart\';\n            Config.path           = \'\';\n            Config.versao         = \'v1\';\n            Config.estacao        = \'Home UOL\';\n            Config.estacaoId      = \'home-uol\';\n            Config.canal          = \'\';\n            Config.gerencia       = \'noticias\';\n            Config.Conteudo.media = \'\';\n            Config.LP = {\n              \'id\':                        \'51eed576aff54be8b1311d90735f36a6\',\n              \'size\':                      2,\n              \'affiliatedDocumentReferer\': \'http://m.uol.com.br/\'\n            };\n\n            window.cacheId = \'$!{cache}\';\n\n            window.homeUOL = window.homeUOL || {};\n            window.homeUOL.queryString = "$!{homeUOL.queryString}";\n\n            ## Adiciona variáveis de publicidade\n            (function(){\n                window.universal_variable = window.universal_variable || {};\n                window.universal_variable.dfp = window.universal_variable.dfp || {};\n                window.uolads     = window.uolads || [];\n            })();\n\n            ## Chartbeat\n            #if($!{homeUOL.data.service-status.loadChartbeat.equals(true)})\n                var _sf_async_config = _sf_async_config || {};\n                /** CONFIGURATION START **/\n                _sf_async_config.uid = 61085; // ACCOUNT NUMBER\n                _sf_async_config.domain = \'uol.com.br\'; // DOMAIN\n                _sf_async_config.flickerControl = false;\n                _sf_async_config.useCanonical = true;\n                /** CONFIGURATION END **/\n                var _sf_startpt = (new Date()).getTime();\n            #end\n\n            ## Tailtarget\n            ## Verifica se usuário tem interesse no conteúdo de\n\n            #parse("$!{homeUOL.path.assets.inline.base}libs/tailtarget/tailtarget.js")\n\n            ## Se tiver parâmetro de mock para Tailtarget\n            #if($request.getParameter("mockTT"))\n                window.tts = {};\n                TTUser.hasInterest = function(what){\n                    ## console.log(what, what in window.tts && window.tts[what] && window.tts[what] === \'true\')\n                    return what in window.tts && window.tts[what] === \'true\';\n                }\n\n                #set($mockParams = $request.getQueryString().toString())\n                ## Para cada parâmetro na queryString\n                #foreach($param in $mockParams.split("&"))\n                    ## Verifica se inicia com tt-\n                    #if($param.matches("tt-.*"))\n                        #set($ttCookie = $param.replaceAll("tt-([^=]*)=?.*","$1"))\n                        #set($ttCookieValue = $param.replaceAll(".*=",""))\n                        #if(!$ttCookie.isEmpty())\n                            window.tts[\'$!{ttCookie}\'] = \'$!{ttCookieValue}\'\n                        #end\n                    #end\n                #end\n\n                ## remove cookie durante o teste\n                #if($request.getParameter("removeCookie"))\n                    window.removeCookie = function(name, domain) {\n                        document.cookie = name + \'=;expires=Thu, 01 Jan 1970 00:00:01 GMT\' + \'; path=/; \'+(domain ? \'domain=\'+domain : \'\');\n                    }\n\n                    #if($request.getParameter("_uolabCTD006") && $request.getParameter("_uolabCTD006").equals("out"))\n                    window.removeCookie(\'_grandabcfunilTestTT\', location.host)\n                    #end\n                    window.removeCookie(\'_uolabCTD006\', location.host)\n                #end\n            #end\n\n            window.universal_variable = window.universal_variable || {};\n            window.universal_variable.aud = window.universal_variable.aud || [];\n            window.universal_variable.aud.abTest = window.universal_variable.aud.abTest || "";\n\n            ## Repassando valor do teste para o GA se tiver o cookie setado e o teste esteja habilitado para a troca de templates (valor true)\n            #if($abTest2 && $cappra.containsKey("ctd0006"))\n                window.universal_variable.aud.abTest2 = \'$!{abTest2}\';\n                window.universal_variable.aud.abTest3 = \'$!{cappra.ctd0006}\';\n            #end\n\n            var interestsId = {\n              \'CA6824\' : \'carros\',\n              \'CA7357\' : \'receitas\',\n              \'55\' : \'educacao\',\n              \'CA7239\' : \'tecnologia\',\n              \'CA7248\' : \'economia\',\n              \'13\' : \'ciencia-e-saude\'\n            };\n            var ownInterests = \'\';\n\n            for(var interest in interestsId){\n              if( TTUser.hasInterest(interest) == true ) {\n                ## console.log(\'tem interesse em \'+interestsId[interest]);\n                ownInterests += (ownInterests !== \'\' ? \',\':\'\') + interestsId[interest];\n              }\n            }\n            ## ordenando alfabeticamente os interesses dos usuários\n            window.universal_variable.aud.abTest = ownInterests.split(\',\').sort().join(\',\');\n\n            if(window.universal_variable.aud.abTest === \'\')  {\n              window.universal_variable.aud.abTest = \'sem cluster\';\n            }\n\n            #if($abTest2 && $cappra.containsKey(\'ctd0006\'))\n                document.addEventListener("readystatechange", function(event) {\n                    if (event.target.readyState !== "complete") {\n                        return;\n                    }\n                    var time = 0\n                    if (window.performance) {\n                        let performance = window.performance;\n                        let performanceEntries = performance.getEntriesByType(\'paint\');\n                        performanceEntries.forEach( (performanceEntry, i, entries) => {\n                            if (performanceEntry.name == \'first-paint\') {\n                                time = performanceEntry.startTime;\n                            }\n                        });\n                    }\n\n                    UOLPD.Audience2.countEvent({\n                        abTest2: "$!{abTest2}",\n                        abTest3: "$!{cappra.ctd0006}",\n                        category: "ctd0006-first-paint",\n                        action: "first-paint",\n                        label: "first-paint",\n                        firstPaint: parseInt(time)\n                    });\n                }, false);\n            #end\n        <\/script>\n\n        ## Chartbeat\n        #if($!{homeUOL.data.service-status.loadChartbeat.equals(true)})\n            <script async src="//static.chartbeat.com/js/chartbeat_mab.js"><\/script>\n        #end\n\n        ## Metrics\n        #if($!{homeUOL.data.service-status.loadMetrics.equals(true)})\n            <script async src="https://me.jsuol.com.br/aud/uolhome.js"><\/script>\n        #end\n\n        #if($!{homeUOL.data.service-status.woutBanner.equals(false)})\n            #if ($!{request.getParameter(\'bannerTopo\')})\n                <script async src="//www.googletagservices.com/tag/js/gpt.js"><\/script>\n                \x3c!-- TailTarget --\x3e\n                <script async src="//tm.jsuol.com.br/modules/external/tailtarget/profiles.js"><\/script>\n                <script async src="//tm.jsuol.com.br/modules/external/tailtarget/t3m/TT-10162-1/CT-10.js"><\/script>\n                \x3c!-- Tag Manager --\x3e\n                <script async src="//tm.jsuol.com.br/uoltm.js?id=chygcf&v=50"><\/script>\n            #end\n        #end\n\n    </head>\n    <body>\n        #set($modules = $_json.open("$!{homeUOL.path.structure}config/modules.json"))\n\n        ## Sem virtualDom, devemos printar todos os módulos em velocity\n        ##if(!$serviceStatus.virtualDom)\n            #set($firstPaint = $editorialModules.size())\n            #if ($!{request.getParameter(\'contentJS\')})\n                #set($firstPaint = 0)\n            #end\n        ##end\n\n        ## Ativando Chrome Alerts e service workers\n        #if($serviceStatus.chromeAlerts)\n            #set($uol-notifications-channel = "conteudo.uol")\n            #if($homeUOL.env.equals("production"))\n                #set($uol-notifications-channel = "www.uol.com.br")\n            #end\n            <span class="uol-notifications-widget" style="display:none" auto-subscribe="true" themes="geral" channel-name="$!{uol-notifications-channel}"></span>\n        #end\n\n        ## Não carrega a barra do topo e banners topo/footer caso for preview de módulo ou horizontal\n        ## por esse motivo é utilizada a variável que contem o path para o preview\n        #if($homeUOL.path.preview.module.equals(false))\n            #if($!{homeUOL.data.service-status.woutBanner.equals(false)})\n                <div class="banner banner_header" id="banner-320x50-3-area"></div>\n            #end\n            #parse("$!{homeUOL.path.modules}/smartbanner/smartbanner.vm")\n            #parse("$!{homeUOL.path.resources}header/controller.vm")\n        #end\n\n        #set($count = 0)\n\n        #set($showSeeLater = false)\n\n        <div id="app">\n            <main id="timeline" role="main">\n                #foreach($data in $editorialModules)\n                    #if($count < $firstPaint)\n                          #if($modules.containsKey($data.type) && !$data.type.equals("smartbanner"))\n                              #set($module = $modules[$data.type])\n                              #parse("$!{homeUOL.path.modules}' + e + "/" + e + '.vm")\n                              #set($count = $math.add($count, 1))\n                          #end\n                      #else\n                          #break\n                      #end\n                #end\n            </main>\n        </div>\n\n        ## Se não for preview, adiciona footer e banner\n        #if($homeUOL.path.preview.module.equals(false))\n            #set($footer = {})\n            #set($footer.year = ' + date.format("yyyy", $date.getSystemTime()) + ')\n            $_mustache.render("$!{homeUOL.path.resources}footer/view.tpl", $footer)\n\n            ## Banner Flutuante\n            #if($!{homeUOL.data.service-status.woutBanner.equals(false)})\n                <div class="banner banner_footer" id="banner-320x50-1-area"></div>\n            #end\n        #end\n\n        <div id="banner-300x250-4"></div>\n\n        ## Elemento overlay\n        <span class="over"></span>\n\n        #if ($!{request.getParameter(\'wbTest1\')})\n            <script src="$!{homeUOL.path.assets.js}test1/first.bundle.js?$!{homeUOL.queryString}" #if ($!{request.getParameter(\'wbTestAsyncFirst\')}) async#end><\/script>\n            <script src="$!{homeUOL.path.assets.js}test1/second.bundle.js?$!{homeUOL.queryString}" #if ($!{request.getParameter(\'wbTestAsyncSecond\')}) async#end><\/script>\n            <script src="$!{homeUOL.path.assets.js}test1/app.bundle.js?$!{homeUOL.queryString}" #if ($!{request.getParameter(\'wbTestAsyncApp\')}) async#end><\/script>\n\n        #else\n            <script src="$!{homeUOL.path.assets.js}stvd.js?$!{homeUOL.queryString}"><\/script>\n            <script src="$!{homeUOL.path.assets.js}bdvd.js?$!{homeUOL.queryString}" async><\/script>\n        #end\n\n        #*\n        #if($!{homeUOL.data.service-status.virtualDom.equals(true)})\n            <script src="$!{homeUOL.path.assets.js}stvd.js?$!{homeUOL.queryString}"><\/script>\n            <script src="$!{homeUOL.path.assets.js}bdvd.js?$!{homeUOL.queryString}" async><\/script>\n        #else\n            <script src="$!{homeUOL.path.assets.js}stvl.js?$!{homeUOL.queryString}"><\/script>\n            <script src="$!{homeUOL.path.assets.js}bdvl.js?$!{homeUOL.queryString}" async><\/script>\n        #end\n        *#\n\n\n        #if($!{homeUOL.data.service-status.woutBanner.equals(false)})\n            #if (!$!{request.getParameter(\'bannerTopo\')})\n                <script async src="//www.googletagservices.com/tag/js/gpt.js"><\/script>\n                \x3c!-- TailTarget --\x3e\n                <script async src="//tm.jsuol.com.br/modules/external/tailtarget/profiles.js"><\/script>\n                <script async src="//tm.jsuol.com.br/modules/external/tailtarget/t3m/TT-10162-1/CT-10.js"><\/script>\n                \x3c!-- Tag Manager --\x3e\n                <script async src="//tm.jsuol.com.br/uoltm.js?id=chygcf&v=50"><\/script>\n            #end\n        #end\n\n\n        #if($homeUOL.header.pwa)\n            #* CSS blocante com defer *#\n            <link rel="stylesheet" media="all" href="$!{homeUOL.path.assets.css}min.css?$!{homeUOL.queryString}">\n        #end\n\n        <script id="inline-footer" type="text/javascript">\n\n            ## Chartbeat\n            #if($!{homeUOL.data.service-status.loadChartbeat.equals(true)})\n                  var _sf_async_config = _sf_async_config || {};\n                  /** CONFIGURATION START **/\n                  _sf_async_config.sections = \'Total UOL Conteúdo,UOL - Home\';\n                  _sf_async_config.authors = \'UOL\';\n                  _sf_async_config.autoDetect = false;\n\n                  /** CONFIGURATION END **/\n                  (function() {\n                    function loadChartbeat() {\n                        window._sf_endpt = (new Date()).getTime();\n                        var e = document.createElement(\'script\');\n                        e.setAttribute(\'language\', \'javascript\');\n                        e.setAttribute(\'type\', \'text/javascript\');\n\n                        e.setAttribute(\'src\', \'//static.chartbeat.com/js/chartbeat_video.js\');\n                        document.body.appendChild(e);\n                    }\n                    var oldonload = window.onload;\n                    window.onload = (typeof window.onload != \'function\') ?\n                        loadChartbeat : function() {\n                            oldonload();\n                            loadChartbeat();\n                        };\n                    })();\n            #end\n\n            #if($!{homeUOL.data.service-status.loadHotjar.equals(true)})\n                /** Hotjar Tracking Code for https://www.uol.com.br/ **/\n                (function(h,o,t,j,a,r) {\n                    h.hj = h.hj || function() {\n                        (h.hj.q = h.hj.q || []).push(arguments);\n                    }\n                    h._hjSettings = {hjid: 569021, hjsv: 5};\n                    a = o.getElementsByTagName(\'head\')[0];\n                    r = o.createElement(\'script\');\n                    r.async = 1;\n                    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;\n                    a.appendChild(r);\n                })(window, document, \'//static.hotjar.com/c/hotjar-\',\'.js?sv=\');\n            #end\n        <\/script>\n        <script async src="https://abtest.conteudo.uol/h/abc.js"><\/script>\n        #if($!{homeUOL.env.equals("preview")})\n            <script>\n                window.LazyloadPreview = function(){\n                    window.lazyload && window.lazyload.update()\n                    window.Lazyload && window.Lazyload.update()\n                }\n                setTimeout(window.LazyloadPreview, 1000)\n                setTimeout(window.LazyloadPreview, 2000)\n                setTimeout(window.LazyloadPreview, 3000)\n            <\/script>\n        #end\n    </body>\n</html>\n'
            }.call(t, t)
        }
    }).call(t, n(16)(e))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<div class="HU_blackBar" data-category="{{metrics.category}}" data-area="{{metrics.area}}" data-position="{{metrics.position}}">\n    <div class="HU_blackBar_barUpper">\n\n        <div class="HU_blackBar_container HU_l_centralize">\n\n            \x3c!-- Itens da esquerda (Produtos) --\x3e\n            <ul class="HU_l_listHorizontal HU_blackBar_listProducts">\n                {{#listProducts}}\n                    <li class="HU_blackBar_listProducts__product">\n                        <a href="{{productLink}}" class="HU_blackBar_listProducts__product__link" data-label="{{metrics.label}}">{{product}}</a>\n                    </li>\n                {{/listProducts}}\n            </ul>\n\n            \x3c!-- Data atual --\x3e\n            {{#dateNow}}\n                <div class="HU_blackBar_dateNow">\n                    <span class="HU_blackBar_dateNow__label">{{dateNow}}</span>\n                </div>\n            {{/dateNow}}\n\n            \x3c!-- Itens da direita (e-Mail, Widget e Sac) --\x3e\n            <ul class="HU_l_listHorizontal HU_blackBar_listServices">\n                {{#email}}\n                <li class="HU_blackBar_listServices__service">\n                    <a href="{{link}}" class="HU_blackBar_listServices__service__email">\n                        <svg class="HU_blackBar_listServices__service__email__iconSvgMail" role="button" aria-label="email">\n                            <use xlink:href="{{icon}}" />\n                        </svg>\n                        <span class="HU_blackBar_listServices__service__email__count"></span>\n                        <span class="HU_blackBar_listServices__service__email__label">{{label}}</span>\n                    </a>\n                </li>\n                {{/email}}\n                {{#widgetProfileStatus}}\n                    <li class="HU_blackBar_listServices__service">\n                        <div id="profile-avatar" class="HU_blackBar_listServices__service__widgetProfile"></div>\n                    </li>\n                {{/widgetProfileStatus}}\n                {{#sac}}\n                <li class="HU_blackBar_listServices__service">\n                    <a href="{{link}}" class="HU_blackBar_listServices__service__sac" data-label="{{metrics.label}}">{{label}}</a>\n                </li>\n                {{/sac}}\n            </ul>\n\n        </div>\n\n    </div>\n</div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#rendered}}\n    <div class="HU_middleBar__container__center__currency">\n        <ul class="HU_currency">\n            {{#currencies}}\n                {{#topo}}\n                    <li class="HU_currency__item" aria-label="Cotação do {{nome}}: {{data.valor}} reais, ir à página de economia" tabindex="0" role="button">\n                        <a href="{{url}}" aria-hidden="true"{{#metrics}}{{#category}} data-category="{{ category }}"{{/category}}{{#area}} data-area="{{ area }}"{{/area}}{{#label}} data-label="{{ label }}"{{/label}}{{#position}} data-position="{{ position }}"{{/position}}{{/metrics}}>\n                            <span class="HU_currency__label">{{nome}}</span><span class="HU_currency__quote HU_currency__quote-{{data.classe}}">{{data.valor}}</span>\n                        </a>\n                    </li>\n                {{/topo}}\n            {{/currencies}}\n        </ul>\n    </div>\n{{/rendered}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return "{{#loading}}\n    <div class=\"HU_middleBar__container__center__email\">\n        <div class='HU_l_loading'></div>\n    </div>\n{{/loading}}\n{{^loading}}\n    <div class='HU_email-modal' data-category='{{metrics.category}}' data-area='{{metrics.area}}' data-position='{{metrics.position}}'>\n        <div class='HU_email-modal__boxEmail'>\n                {{#infor}}\n                    <a class='HU_email-modal__boxEmail__infor' href='{{url}}' data-label='{{metrics.label}}' data-action='{{metrics.action}}'>\n                        {{#svg}}\n                            <svg class='HU_email-modal__boxEmail__infor__icon' role='{{attrRole}}' aria-label='{{attrAriaLabel}}'>\n                                <use xlink:href='#{{icon}}' />\n                            </svg>\n                        {{/svg}}\n                        <span class='HU_email-modal__boxEmail__infor__{{^isLogged}}label{{/isLogged}}{{#isLogged}}user{{/isLogged}}'>\n                            {{^isLogged}}\n                                {{label}}\n                            {{/isLogged}}\n                            {{#isLogged}}\n                                <span class='HU_email-modal__boxEmail__infor__user__name'>{{userName}}</span>, {{{ userNotification }}}\n                            {{/isLogged}}\n                        </span>\n                    </a>\n                {{/infor}}\n                {{#isLogged}}\n                    {{#logout}}\n                        <a class='HU_email-modal__boxEmail__logout' href='{{url}}' data-label='{{metrics.label}}' data-action='{{metrics.action}}'>{{label}}</a>\n                    {{/logout}}\n                {{/isLogged}}\n            </div>\n            {{^isLogged}}\n                {{#signIt}}\n                    <a class='HU_email-modal__signIt' href='{{url}}' data-label='{{metrics.label}}'>\n                        {{text}} <span class='HU_email-modal__signIt__bold'>{{text2}}</span>\n                    </a>\n                {{/signIt}}\n            {{/isLogged}}\n    </div>\n{{/loading}}\n"
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return "\x3c!-- Form e-mail --\x3e\n{{#loading}}\n    <div class=\"HU_middleBar__container__center__email\">\n        <div class='HU_l_loading'></div>\n    </div>\n{{/loading}}\n{{^loading}}\n    <div class='HU_email' data-category='{{metrics.category}}' data-area='{{metrics.area}}' data-position='{{metrics.position}}'>        \n        {{#isLogged}}\n            <div class='HU_email__boxEmail'>\n            {{#infor}}\n                <a class='HU_email__boxEmail__infor' href='{{url}}' data-label='{{metrics.label}}' data-action='{{metrics.action}}'>\n                {{#svg}}\n                    <svg class='HU_email__boxEmail__infor__icon' role='{{attrRole}}' aria-label='{{attrAriaLabel}}'>\n                        <use xlink:href='#{{icon}}' />\n                    </svg>\n                {{/svg}}\n                    <span class='HU_email__boxEmail__infor__{{^isLogged}}label{{/isLogged}}{{#isLogged}}user{{/isLogged}}'>\n                    {{#isLogged}}\n                        <span class='HU_email__boxEmail__infor__user__name'>{{userName}}</span>, {{{ userNotification }}}\n                    {{/isLogged}}\n                    </span>\n                </a>\n            {{/infor}}\n            {{#logout}}\n                <a class='HU_email__boxEmail__logout' href='{{url}}' data-label='{{metrics.label}}' data-action='{{metrics.action}}'>{{label}}</a>\n            {{/logout}}\n            </div>\n        {{/isLogged}}\n        \n        {{^isLogged}}\n            {{#signIt}}\n                <form novalidate=\"novalidate\" method=\"post\" action=\"{{action}}\" name=\"formEmail\" class=\"HU_email__signIt\">\n                    <div class=\"HU_email__signIt__contentForm\">\n                        <input type=\"email\" id=\"usuario\" class=\"HU_email__signIt__contentForm__user\" name=\"user\" placeholder=\"{{placeholder.email}}\" title=\"{{title.email}}\">\n                        <input type=\"password\" id=\"senha\" class=\"HU_email__signIt__contentForm__password\" name=\"pass\" placeholder=\"{{placeholder.password}}\" title=\"{{title.password}}\">\n\n                        {{#infor}}\n                            <a class='HU_email__signIt__contentForm__button' href='{{url}}' data-label='{{metrics.label}}' data-action='{{metrics.action}}' title=\"Acessar email\">\n                                {{#svg}}\n                                    <svg class='HU_email__signIt__contentForm__button__icon' role='{{attrRole}}' aria-label='{{attrAriaLabel}}'>\n                                        <use xlink:href='#{{icon}}' />\n                                    </svg>\n                                {{/svg}}\n                                <span class='HU_email__signIt__contentForm__button__{{^isLogged}}label{{/isLogged}}{{#isLogged}}user{{/isLogged}}'>\n                                    {{^isLogged}}\n                                        {{label}}\n                                    {{/isLogged}}\n                                </span>\n                            </a>\n                        {{/infor}}\n                    </div>\n                    <a href='{{url}}' name=\"email-criar-email\" data-label='{{metrics.label}}' title=\"{{text}} {{text2}}\" class=\"HU_email__signIt__text\">\n                    {{text}} <span class='HU_email__signIt__text__bold'>{{text2}}</span>\n                    </a>\n                </form>\n            {{/signIt}}\n        {{/isLogged}}\n    </div>\n{{/loading}}\n"
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n    <i class="icons icons_{{ icon }} {{ styles }}" {{#ariaName}} aria-label="{{ ariaName }}" role="button" tabindex="0"{{/ariaName}}>\n        {{#inline}}\n            {{{ inline }}}\n        {{/inline}}\n        {{^inline}}\n            {{#image.src}}\n            <img src="{{ image.src }}" width="{{ image.width }}" height="{{ image.height }}" alt="" />\n            {{/image.src}}\n            {{^image.src}}\n            <svg><use xlink:href="#{{icon}}" /></svg>\n            {{/image.src}}\n        {{/inline}}\n        {{#label}}<span class=\'icons_label\'>{{label}}</span>{{/label}}\n    </i>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<h1 class="HU_logo">\n    <a href="{{url}}" title="{{title}}" data-label="{{metrics.label}}">\n        <img src="{{image}}" width="{{width}}" height="{{height}}" alt="{{title}}">\n        {{title}}\n    </a>\n</h1>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<nav class="HU_menu menu-uol module" id="menuHorizontal" data-module="menuHorizontal">\n    <ul class="HU_menu__primary HU_l_centralize">\n    {{#canais}}\n        {{#exibir}}\n        <li class="HU_menu__item HU_canal__{{area}} HU_area__{{color}}" data-category="{{category}}" data-area="{{area}}">\n            <a{{#possuiLink}} href="{{link}}"{{/possuiLink}} data-menu="{{id}}" data-label="{{label}}" data-position="item-{{index}}" class="HU_menu__link{{#mais}} HU_icon__mais{{/mais}}"><span class="HU_menu__title">{{titulo}}</span></a>\n            {{{ submenu }}}\n        </li>\n        {{/exibir}}\n    {{/canais}}\n    </ul>\n</nav>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<div class="HU_middleBar" data-category="header" data-area="header" data-position="coluna-unica">\n    <div class="HU_middleBar__container HU_l_centralize">\n\n        <div class="HU_middleBar__container__col HU_middleBar__container__left">\n            {{#components}}\n                {{#left}}\n                    {{{ markup }}}\n                {{/left}}\n            {{/components}}\n        </div>\n\n        <div class="HU_middleBar__container__col HU_middleBar__container__center">\n            {{#components}}\n                {{#center}}\n                    {{{ markup }}}\n                {{/center}}\n            {{/components}}\n        </div>\n\n        <div class="HU_middleBar__container__col HU_middleBar__container__right">\n            {{#components}}\n                {{#right}}\n                    {{{ markup }}}\n                {{/right}}\n            {{/components}}\n        </div>\n\n    </div>\n  </div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#.}}\n<div class="HU_search">\n    <div class="searchContainer">\n        <svg class="HU_l_icons HU_l_icon-magnifier">\n            <use xlink:href="#HU-magnifier" />\n        </svg>\n\n        <input type="button" value="BUSCAR">\n    </div>\n</div>\n{{/.}}\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '<div class="suggestContent">\n    {{{label}}}\n    <form action="{{url.action}}" method="get" name="{{name}}" id="{{name}}" class="{{name}} suggest-form" autocomplete="off" data-empty-url="{{url.empty}}">\n        <input type="text" name="q" placeholder="{{placeholder}}" autocomplete="off">\n\n        {{#icon.close}}\n        <i class="HU_l_icons HU_l_icon-{{icon.close}}">\n            <svg>\n                <use xlink:href="#HU-{{icon.close}}" />\n            </svg>\n        </i>\n        {{/icon.close}}\n    </form>\n</div>\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return function(e) {
            return '{{#rendered}}\n    {{#loading}}\n        <div class="HU_middleBar__container__center__weather">\n            <div class="HU_weather HU_l_loading">\n                <div class="weather"></div>\n                <div class="weather_moreOptions">\n                    <i class="icons icons_HU-arrow-down " title="Buscar cidade previsão do tempo" aria-label="buscar cidade previsão do tempo" role="button" tabindex="0">\n                        <svg>\n                            <use xlink:href="#HU-arrow-down"></use>\n                        </svg>\n                    </i>\n                </div>\n            </div>\n        </div>\n    {{/loading}}\n    {{^loading}}\n     <a href="{{url}}" name="previsao-tempo" title="Previsão do tempo em {{cityComplete}}: {{status}}, máxima {{max}} e mínima {{min}} graus" data-category="header" data-area="header" data-label="abrir-previsao-tempo" data-position="coluna-unica">\n        <span class="weather_icon" aria-hidden="true">\n            {{{ icon }}}\n        </span>\n        <div class="weather_temperature" role="button" tabindex="0">\n            <span class="weather_city">{{city}}</span>\n            <div class="weather_status">\n                <span class="weather_status__max">{{max}}&ordm;C</span>\n                <span class="weather_status__min">{{min}}&ordm;C</span>\n            </div>\n        </div>\n    </a>\n    {{/loading}}\n{{/rendered}}\n\n\n'
        }.call(e, e)
    }
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(26),
        s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "banner",
                value: function() {
                    var e = new i("banner"),
                        t = {};
                    return t.class = this.data.class, "advertising" == this.data.type ? t.section = this.data.section : t.section = "", e.render(t)
                }
            }, {
                key: "render",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n, a) {
                        e || a(), t.data = e;
                        var i = "";
                        i += t.banner();
                        var s = {
                            className: e.type + " card card_withoutBg",
                            key: e.key
                        };
                        r.render(i, "div", s).then(function() {
                            new o(e), n()
                        }).catch(function(e) {
                            a(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new s
}, , , , , , , , , , , , , , , , , , function(e, t) {}, , , , , , function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(0),
        s = n(27),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "placar",
                value: function() {
                    var e = new i("carnival");
                    return e.render(this.data)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e;
                        var c = "";
                        c += n.placar();
                        var l = {
                            className: e.type + " card card_withoutBg " + e.section,
                            key: e.key,
                            "data-category": e.metrics.category,
                            "data-area": e.metrics.area,
                            "data-position": e.metrics.position
                        };
                        r.render(c, "div", l).then(function() {
                            var n = o.helpers.serviceStatus || {},
                                i = "virtualDom" in n ? n.virtualDom : null;
                            (t || !1 === i) && new s(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(r, o) {
            var s, c, l = void 0 === o ? "undefined" : i(o),
                u = r.location,
                d = r.document,
                p = d.documentElement,
                m = r.jQuery,
                f = r.$,
                h = {},
                v = [],
                g = "2.0.3",
                y = v.concat,
                b = v.push,
                _ = v.slice,
                w = v.indexOf,
                k = h.toString,
                x = h.hasOwnProperty,
                T = g.trim,
                S = function e(t, n) {
                    return new e.fn.init(t, n, s)
                },
                L = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                C = /\S+/g,
                O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                q = /^-ms-/,
                A = /-([\da-z])/gi,
                H = function(e, t) {
                    return t.toUpperCase()
                },
                N = function e() {
                    d.removeEventListener("DOMContentLoaded", e, !1), r.removeEventListener("load", e, !1), S.ready()
                };

            function j(e) {
                var t = e.length,
                    n = S.type(e);
                return !S.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)))
            }
            S.fn = S.prototype = {
                    jquery: g,
                    constructor: S,
                    init: function(e, t, n) {
                        var a, i;
                        if (!e) return this;
                        if ("string" == typeof e) {
                            if (!(a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : O.exec(e)) || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (a[1]) {
                                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : d, !0)), E.test(a[1]) && S.isPlainObject(t))
                                    for (a in t) S.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                                return this
                            }
                            return (i = d.getElementById(a[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = d, this.selector = e, this
                        }
                        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? n.ready(e) : (e.selector !== o && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this))
                    },
                    selector: "",
                    length: 0,
                    toArray: function() {
                        return _.call(this)
                    },
                    get: function(e) {
                        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                    },
                    pushStack: function(e) {
                        var t = S.merge(this.constructor(), e);
                        return t.prevObject = this, t.context = this.context, t
                    },
                    each: function(e, t) {
                        return S.each(this, e, t)
                    },
                    ready: function(e) {
                        return S.ready.promise().done(e), this
                    },
                    slice: function() {
                        return this.pushStack(_.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (0 > e ? t : 0);
                        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                    },
                    map: function(e) {
                        return this.pushStack(S.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: b,
                    sort: [].sort,
                    splice: [].splice
                }, S.fn.init.prototype = S.fn, S.extend = S.fn.extend = function() {
                    var e, t, n, a, r, s, c = arguments[0] || {},
                        l = 1,
                        u = arguments.length,
                        d = !1;
                    for ("boolean" == typeof c && (d = c, c = arguments[1] || {}, l = 2), "object" == (void 0 === c ? "undefined" : i(c)) || S.isFunction(c) || (c = {}), u === l && (c = this, --l); u > l; l++)
                        if (null != (e = arguments[l]))
                            for (t in e) n = c[t], c !== (a = e[t]) && (d && a && (S.isPlainObject(a) || (r = S.isArray(a))) ? (r ? (r = !1, s = n && S.isArray(n) ? n : []) : s = n && S.isPlainObject(n) ? n : {}, c[t] = S.extend(d, s, a)) : a !== o && (c[t] = a));
                    return c
                }, S.extend({
                    expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
                    noConflict: function(e) {
                        return r.$ === S && (r.$ = f), e && r.jQuery === S && (r.jQuery = m), S
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? S.readyWait++ : S.ready(!0)
                    },
                    ready: function(e) {
                        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0, !0 !== e && --S.readyWait > 0 || (c.resolveWith(d, [S]), S.fn.trigger && S(d).trigger("ready").off("ready")))
                    },
                    isFunction: function(e) {
                        return "function" === S.type(e)
                    },
                    isArray: Array.isArray,
                    isWindow: function(e) {
                        return null != e && e === e.window
                    },
                    isNumeric: function(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    },
                    type: function(e) {
                        return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : i(e)) || "function" == typeof e ? h[k.call(e)] || "object" : void 0 === e ? "undefined" : i(e)
                    },
                    isPlainObject: function(e) {
                        if ("object" !== S.type(e) || e.nodeType || S.isWindow(e)) return !1;
                        try {
                            if (e.constructor && !x.call(e.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (e) {
                            return !1
                        }
                        return !0
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    error: function(e) {
                        throw Error(e)
                    },
                    parseHTML: function(e, t, n) {
                        if (!e || "string" != typeof e) return null;
                        "boolean" == typeof t && (n = t, t = !1), t = t || d;
                        var a = E.exec(e),
                            i = !n && [];
                        return a ? [t.createElement(a[1])] : (a = S.buildFragment([e], t, i), i && S(i).remove(), S.merge([], a.childNodes))
                    },
                    parseJSON: JSON.parse,
                    parseXML: function(e) {
                        var t;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {
                            t = o
                        }
                        return (!t || t.getElementsByTagName("parsererror").length) && S.error("Invalid XML: " + e), t
                    },
                    noop: function() {},
                    globalEval: function(e) {
                        var t, n = eval;
                        (e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = d.createElement("script")).text = e, d.head.appendChild(t).parentNode.removeChild(t)) : n(e))
                    },
                    camelCase: function(e) {
                        return e.replace(q, "ms-").replace(A, H)
                    },
                    nodeName: function(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    },
                    each: function(e, t, n) {
                        var a = 0,
                            i = e.length,
                            r = j(e);
                        if (n) {
                            if (r)
                                for (; i > a && !1 !== t.apply(e[a], n); a++);
                            else
                                for (a in e)
                                    if (!1 === t.apply(e[a], n)) break
                        } else if (r)
                            for (; i > a && !1 !== t.call(e[a], a, e[a]); a++);
                        else
                            for (a in e)
                                if (!1 === t.call(e[a], a, e[a])) break;
                        return e
                    },
                    trim: function(e) {
                        return null == e ? "" : T.call(e)
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (j(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : b.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : w.call(t, e, n)
                    },
                    merge: function(e, t) {
                        var n = t.length,
                            a = e.length,
                            i = 0;
                        if ("number" == typeof n)
                            for (; n > i; i++) e[a++] = t[i];
                        else
                            for (; t[i] !== o;) e[a++] = t[i++];
                        return e.length = a, e
                    },
                    grep: function(e, t, n) {
                        var a = [],
                            i = 0,
                            r = e.length;
                        for (n = !!n; r > i; i++) n !== !!t(e[i], i) && a.push(e[i]);
                        return a
                    },
                    map: function(e, t, n) {
                        var a, i = 0,
                            r = e.length,
                            o = [];
                        if (j(e))
                            for (; r > i; i++) null != (a = t(e[i], i, n)) && (o[o.length] = a);
                        else
                            for (i in e) null != (a = t(e[i], i, n)) && (o[o.length] = a);
                        return y.apply([], o)
                    },
                    guid: 1,
                    proxy: function(e, t) {
                        var n, a, i;
                        return "string" == typeof t && (n = e[t], t = e, e = n), S.isFunction(e) ? (a = _.call(arguments, 2), (i = function() {
                            return e.apply(t || this, a.concat(_.call(arguments)))
                        }).guid = e.guid = e.guid || S.guid++, i) : o
                    },
                    access: function(e, t, n, a, i, r, s) {
                        var c = 0,
                            l = e.length,
                            u = null == n;
                        if ("object" === S.type(n))
                            for (c in i = !0, n) S.access(e, t, c, n[c], !0, r, s);
                        else if (a !== o && (i = !0, S.isFunction(a) || (s = !0), u && (s ? (t.call(e, a), t = null) : (u = t, t = function(e, t, n) {
                                return u.call(S(e), n)
                            })), t))
                            for (; l > c; c++) t(e[c], n, s ? a : a.call(e[c], c, t(e[c], n)));
                        return i ? e : u ? t.call(e) : l ? t(e[0], n) : r
                    },
                    now: Date.now,
                    swap: function(e, t, n, a) {
                        var i, r, o = {};
                        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                        for (r in i = n.apply(e, a || []), t) e.style[r] = o[r];
                        return i
                    }
                }), S.ready.promise = function(e) {
                    return c || (c = S.Deferred(), "complete" === d.readyState ? setTimeout(S.ready) : (d.addEventListener("DOMContentLoaded", N, !1), r.addEventListener("load", N, !1))), c.promise(e)
                }, S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                    h["[object " + t + "]"] = t.toLowerCase()
                }), s = S(d),
                function(e, t) {
                    var n, a, r, o, s, c, l, u, d, p, m, f, h, v, g, y, b, _ = "sizzle" + -new Date,
                        w = e.document,
                        k = 0,
                        x = 0,
                        T = se(),
                        L = se(),
                        C = se(),
                        O = !1,
                        E = function(e, t) {
                            return e === t ? (O = !0, 0) : 0
                        },
                        q = "undefined",
                        A = 1 << 31,
                        H = {}.hasOwnProperty,
                        N = [],
                        j = N.pop,
                        U = N.push,
                        D = N.push,
                        P = N.slice,
                        M = N.indexOf || function(e) {
                            for (var t = 0, n = this.length; n > t; t++)
                                if (this[t] === e) return t;
                            return -1
                        },
                        I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        B = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        $ = R.replace("w", "w#"),
                        F = "\\[" + B + "*(" + R + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + B + "*\\]",
                        z = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + F.replace(3, 8) + ")*)|.*)\\)|)",
                        W = RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
                        J = RegExp("^" + B + "*," + B + "*"),
                        V = RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
                        Y = RegExp(B + "*[+~]"),
                        X = RegExp("=" + B + "*([^\\]'\"]*)" + B + "*\\]", "g"),
                        G = RegExp(z),
                        K = RegExp("^" + $ + "$"),
                        Q = {
                            ID: RegExp("^#(" + R + ")"),
                            CLASS: RegExp("^\\.(" + R + ")"),
                            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                            ATTR: RegExp("^" + F),
                            PSEUDO: RegExp("^" + z),
                            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                            bool: RegExp("^(?:" + I + ")$", "i"),
                            needsContext: RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Z = /^[^{]+\{\s*\[native \w/,
                        ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        te = /^(?:input|select|textarea|button)$/i,
                        ne = /^h\d$/i,
                        ae = /'|\\/g,
                        ie = RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
                        re = function(e, t, n) {
                            var a = "0x" + t - 65536;
                            return a != a || n ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                        };
                    try {
                        D.apply(N = P.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType
                    } catch (e) {
                        D = {
                            apply: N.length ? function(e, t) {
                                U.apply(e, P.call(t))
                            } : function(e, t) {
                                for (var n = e.length, a = 0; e[n++] = t[a++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function oe(e, t, n, i) {
                        var r, o, s, c, l, u, d, f, g, y;
                        if ((t ? t.ownerDocument || t : w) !== m && p(t), t = t || m, n = n || [], !e || "string" != typeof e) return n;
                        if (1 !== (c = t.nodeType) && 9 !== c) return [];
                        if (h && !i) {
                            if (r = ee.exec(e))
                                if (s = r[1]) {
                                    if (9 === c) {
                                        if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                                        if (o.id === s) return n.push(o), n
                                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && b(t, o) && o.id === s) return n.push(o), n
                                } else {
                                    if (r[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                                    if ((s = r[3]) && a.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(s)), n
                                } if (a.qsa && (!v || !v.test(e))) {
                                if (f = d = _, g = t, y = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                                    for (u = ve(e), (d = t.getAttribute("id")) ? f = d.replace(ae, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + ge(u[l]);
                                    g = Y.test(e) && t.parentNode || t, y = u.join(",")
                                }
                                if (y) try {
                                    return D.apply(n, g.querySelectorAll(y)), n
                                } catch (e) {} finally {
                                    d || t.removeAttribute("id")
                                }
                            }
                        }
                        return Te(e.replace(W, "$1"), t, n, i)
                    }

                    function se() {
                        var e = [];
                        return function t(n, a) {
                            return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = a
                        }
                    }

                    function ce(e) {
                        return e[_] = !0, e
                    }

                    function le(e) {
                        var t = m.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function ue(e, t) {
                        for (var n = e.split("|"), a = e.length; a--;) o.attrHandle[n[a]] = t
                    }

                    function de(e, t) {
                        var n = t && e,
                            a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
                        if (a) return a;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function pe(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function me(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function fe(e) {
                        return ce(function(t) {
                            return t = +t, ce(function(n, a) {
                                for (var i, r = e([], n.length, t), o = r.length; o--;) n[i = r[o]] && (n[i] = !(a[i] = n[i]))
                            })
                        })
                    }
                    for (n in c = oe.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return !!t && "HTML" !== t.nodeName
                        }, a = oe.support = {}, p = oe.setDocument = function(e) {
                            var t = e ? e.ownerDocument || e : w,
                                n = t.defaultView;
                            return t !== m && 9 === t.nodeType && t.documentElement ? (m = t, f = t.documentElement, h = !c(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                                p()
                            }), a.attributes = le(function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            }), a.getElementsByTagName = le(function(e) {
                                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                            }), a.getElementsByClassName = le(function(e) {
                                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                            }), a.getById = le(function(e) {
                                return f.appendChild(e).id = _, !t.getElementsByName || !t.getElementsByName(_).length
                            }), a.getById ? (o.find.ID = function(e, t) {
                                if (i(t.getElementById) !== q && h) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : []
                                }
                            }, o.filter.ID = function(e) {
                                var t = e.replace(ie, re);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete o.find.ID, o.filter.ID = function(e) {
                                var t = e.replace(ie, re);
                                return function(e) {
                                    var n = i(e.getAttributeNode) !== q && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), o.find.TAG = a.getElementsByTagName ? function(e, t) {
                                return i(t.getElementsByTagName) !== q ? t.getElementsByTagName(e) : void 0
                            } : function(e, t) {
                                var n, a = [],
                                    i = 0,
                                    r = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = r[i++];) 1 === n.nodeType && a.push(n);
                                    return a
                                }
                                return r
                            }, o.find.CLASS = a.getElementsByClassName && function(e, t) {
                                return i(t.getElementsByClassName) !== q && h ? t.getElementsByClassName(e) : void 0
                            }, g = [], v = [], (a.qsa = Z.test(t.querySelectorAll)) && (le(function(e) {
                                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || v.push("\\[" + B + "*(?:value|" + I + ")"), e.querySelectorAll(":checked").length || v.push(":checked")
                            }), le(function(e) {
                                var n = t.createElement("input");
                                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && v.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            })), (a.matchesSelector = Z.test(y = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
                                a.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", z)
                            }), v = v.length && RegExp(v.join("|")), g = g.length && RegExp(g.join("|")), b = Z.test(f.contains) || f.compareDocumentPosition ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    a = t && t.parentNode;
                                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, E = f.compareDocumentPosition ? function(e, n) {
                                if (e === n) return O = !0, 0;
                                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                                return i ? 1 & i || !a.sortDetached && n.compareDocumentPosition(e) === i ? e === t || b(w, e) ? -1 : n === t || b(w, n) ? 1 : d ? M.call(d, e) - M.call(d, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                            } : function(e, n) {
                                var a, i = 0,
                                    r = e.parentNode,
                                    o = n.parentNode,
                                    s = [e],
                                    c = [n];
                                if (e === n) return O = !0, 0;
                                if (!r || !o) return e === t ? -1 : n === t ? 1 : r ? -1 : o ? 1 : d ? M.call(d, e) - M.call(d, n) : 0;
                                if (r === o) return de(e, n);
                                for (a = e; a = a.parentNode;) s.unshift(a);
                                for (a = n; a = a.parentNode;) c.unshift(a);
                                for (; s[i] === c[i];) i++;
                                return i ? de(s[i], c[i]) : s[i] === w ? -1 : c[i] === w ? 1 : 0
                            }, t) : m
                        }, oe.matches = function(e, t) {
                            return oe(e, null, null, t)
                        }, oe.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== m && p(e), t = t.replace(X, "='$1']"), !(!a.matchesSelector || !h || g && g.test(t) || v && v.test(t))) try {
                                var n = y.call(e, t);
                                if (n || a.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                            } catch (e) {}
                            return oe(t, m, null, [e]).length > 0
                        }, oe.contains = function(e, t) {
                            return (e.ownerDocument || e) !== m && p(e), b(e, t)
                        }, oe.attr = function(e, t) {
                            (e.ownerDocument || e) !== m && p(e);
                            var n = o.attrHandle[t.toLowerCase()],
                                i = n && H.call(o.attrHandle, t.toLowerCase()) ? n(e, t, !h) : void 0;
                            return void 0 === i ? a.attributes || !h ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
                        }, oe.error = function(e) {
                            throw Error("Syntax error, unrecognized expression: " + e)
                        }, oe.uniqueSort = function(e) {
                            var t, n = [],
                                i = 0,
                                r = 0;
                            if (O = !a.detectDuplicates, d = !a.sortStable && e.slice(0), e.sort(E), O) {
                                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                                for (; i--;) e.splice(n[i], 1)
                            }
                            return e
                        }, s = oe.getText = function(e) {
                            var t, n = "",
                                a = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                                } else if (3 === i || 4 === i) return e.nodeValue
                            } else
                                for (; t = e[a]; a++) n += s(t);
                            return n
                        }, (o = oe.selectors = {
                            cacheLength: 50,
                            createPseudo: ce,
                            match: Q,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(ie, re), e[3] = (e[4] || e[5] || "").replace(ie, re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[5] && e[2];
                                    return Q.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && G.test(n) && (t = ve(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(ie, re).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = T[e + " "];
                                    return t || (t = RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && T(e, function(e) {
                                        return t.test("string" == typeof e.className && e.className || i(e.getAttribute) !== q && e.getAttribute("class") || "")
                                    })
                                },
                                ATTR: function(e, t, n) {
                                    return function(a) {
                                        var i = oe.attr(a, e);
                                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, a, i) {
                                    var r = "nth" !== e.slice(0, 3),
                                        o = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === a && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, c) {
                                        var l, u, d, p, m, f, h = r !== o ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            g = s && t.nodeName.toLowerCase(),
                                            y = !c && !s;
                                        if (v) {
                                            if (r) {
                                                for (; h;) {
                                                    for (d = t; d = d[h];)
                                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                                    f = h = "only" === e && !f && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (f = [o ? v.firstChild : v.lastChild], o && y) {
                                                for (m = (l = (u = v[_] || (v[_] = {}))[e] || [])[0] === k && l[1], p = l[0] === k && l[2], d = m && v.childNodes[m]; d = ++m && d && d[h] || (p = m = 0) || f.pop();)
                                                    if (1 === d.nodeType && ++p && d === t) {
                                                        u[e] = [k, m, p];
                                                        break
                                                    }
                                            } else if (y && (l = (t[_] || (t[_] = {}))[e]) && l[0] === k) p = l[1];
                                            else
                                                for (;
                                                    (d = ++m && d && d[h] || (p = m = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++p || (y && ((d[_] || (d[_] = {}))[e] = [k, p]), d !== t)););
                                            return (p -= i) === a || 0 == p % a && p / a >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, a = o.pseudos[e] || o.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                                    return a[_] ? a(t) : a.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                                        for (var i, r = a(e, t), o = r.length; o--;) e[i = M.call(e, r[o])] = !(n[i] = r[o])
                                    }) : function(e) {
                                        return a(e, 0, n)
                                    }) : a
                                }
                            },
                            pseudos: {
                                not: ce(function(e) {
                                    var t = [],
                                        n = [],
                                        a = l(e.replace(W, "$1"));
                                    return a[_] ? ce(function(e, t, n, i) {
                                        for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                                    }) : function(e, i, r) {
                                        return t[0] = e, a(t, null, r, n), !n.pop()
                                    }
                                }),
                                has: ce(function(e) {
                                    return function(t) {
                                        return oe(e, t).length > 0
                                    }
                                }),
                                contains: ce(function(e) {
                                    return function(t) {
                                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                                    }
                                }),
                                lang: ce(function(e) {
                                    return K.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(ie, re).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === f
                                },
                                focus: function(e) {
                                    return e === m.activeElement && (!m.hasFocus || m.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return !1 === e.disabled
                                },
                                disabled: function(e) {
                                    return !0 === e.disabled
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !o.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return ne.test(e.nodeName)
                                },
                                input: function(e) {
                                    return te.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                                },
                                first: fe(function() {
                                    return [0]
                                }),
                                last: fe(function(e, t) {
                                    return [t - 1]
                                }),
                                eq: fe(function(e, t, n) {
                                    return [0 > n ? n + t : n]
                                }),
                                even: fe(function(e, t) {
                                    for (var n = 0; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                odd: fe(function(e, t) {
                                    for (var n = 1; t > n; n += 2) e.push(n);
                                    return e
                                }),
                                lt: fe(function(e, t, n) {
                                    for (var a = 0 > n ? n + t : n; --a >= 0;) e.push(a);
                                    return e
                                }),
                                gt: fe(function(e, t, n) {
                                    for (var a = 0 > n ? n + t : n; t > ++a;) e.push(a);
                                    return e
                                })
                            }
                        }).pseudos.nth = o.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) o.pseudos[n] = pe(n);
                    for (n in {
                            submit: !0,
                            reset: !0
                        }) o.pseudos[n] = me(n);

                    function he() {}

                    function ve(e, t) {
                        var n, a, i, r, s, c, l, u = L[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, c = [], l = o.preFilter; s;) {
                            for (r in (!n || (a = J.exec(s))) && (a && (s = s.slice(a[0].length) || s), c.push(i = [])), n = !1, (a = V.exec(s)) && (n = a.shift(), i.push({
                                    value: n,
                                    type: a[0].replace(W, " ")
                                }), s = s.slice(n.length)), o.filter) !(a = Q[r].exec(s)) || l[r] && !(a = l[r](a)) || (n = a.shift(), i.push({
                                value: n,
                                type: r,
                                matches: a
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? oe.error(e) : L(e, c).slice(0)
                    }

                    function ge(e) {
                        for (var t = 0, n = e.length, a = ""; n > t; t++) a += e[t].value;
                        return a
                    }

                    function ye(e, t, n) {
                        var a = t.dir,
                            i = n && "parentNode" === a,
                            o = x++;
                        return t.first ? function(t, n, r) {
                            for (; t = t[a];)
                                if (1 === t.nodeType || i) return e(t, n, r)
                        } : function(t, n, s) {
                            var c, l, u, d = k + " " + o;
                            if (s) {
                                for (; t = t[a];)
                                    if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                            } else
                                for (; t = t[a];)
                                    if (1 === t.nodeType || i)
                                        if ((l = (u = t[_] || (t[_] = {}))[a]) && l[0] === d) {
                                            if (!0 === (c = l[1]) || c === r) return !0 === c
                                        } else if ((l = u[a] = [d])[1] = e(t, n, s) || r, !0 === l[1]) return !0
                        }
                    }

                    function be(e) {
                        return e.length > 1 ? function(t, n, a) {
                            for (var i = e.length; i--;)
                                if (!e[i](t, n, a)) return !1;
                            return !0
                        } : e[0]
                    }

                    function _e(e, t, n, a, i) {
                        for (var r, o = [], s = 0, c = e.length, l = null != t; c > s; s++)(r = e[s]) && (!n || n(r, a, i)) && (o.push(r), l && t.push(s));
                        return o
                    }

                    function we(e, t, n, a, i, r) {
                        return a && !a[_] && (a = we(a)), i && !i[_] && (i = we(i, r)), ce(function(r, o, s, c) {
                            var l, u, d, p = [],
                                m = [],
                                f = o.length,
                                h = r || function(e, t, n) {
                                    for (var a = 0, i = t.length; i > a; a++) oe(e, t[a], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                v = !e || !r && t ? h : _e(h, p, e, s, c),
                                g = n ? i || (r ? e : f || a) ? [] : o : v;
                            if (n && n(v, g, s, c), a)
                                for (l = _e(g, m), a(l, [], s, c), u = l.length; u--;)(d = l[u]) && (g[m[u]] = !(v[m[u]] = d));
                            if (r) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], u = g.length; u--;)(d = g[u]) && l.push(v[u] = d);
                                        i(null, g = [], l, c)
                                    }
                                    for (u = g.length; u--;)(d = g[u]) && (l = i ? M.call(r, d) : p[u]) > -1 && (r[l] = !(o[l] = d))
                                }
                            } else g = _e(g === o ? g.splice(f, g.length) : g), i ? i(null, o, g, c) : D.apply(o, g)
                        })
                    }

                    function ke(e) {
                        for (var t, n, a, i = e.length, r = o.relative[e[0].type], s = r || o.relative[" "], c = r ? 1 : 0, l = ye(function(e) {
                                return e === t
                            }, s, !0), d = ye(function(e) {
                                return M.call(t, e) > -1
                            }, s, !0), p = [function(e, n, a) {
                                return !r && (a || n !== u) || ((t = n).nodeType ? l(e, n, a) : d(e, n, a))
                            }]; i > c; c++)
                            if (n = o.relative[e[c].type]) p = [ye(be(p), n)];
                            else {
                                if ((n = o.filter[e[c].type].apply(null, e[c].matches))[_]) {
                                    for (a = ++c; i > a && !o.relative[e[a].type]; a++);
                                    return we(c > 1 && be(p), c > 1 && ge(e.slice(0, c - 1).concat({
                                        value: " " === e[c - 2].type ? "*" : ""
                                    })).replace(W, "$1"), n, a > c && ke(e.slice(c, a)), i > a && ke(e = e.slice(a)), i > a && ge(e))
                                }
                                p.push(n)
                            } return be(p)
                    }

                    function xe(e, t) {
                        var n = 0,
                            a = t.length > 0,
                            i = e.length > 0,
                            s = function(s, c, l, d, p) {
                                var f, h, v, g = [],
                                    y = 0,
                                    b = "0",
                                    _ = s && [],
                                    w = null != p,
                                    x = u,
                                    T = s || i && o.find.TAG("*", p && c.parentNode || c),
                                    S = k += null == x ? 1 : Math.random() || .1;
                                for (w && (u = c !== m && c, r = n); null != (f = T[b]); b++) {
                                    if (i && f) {
                                        for (h = 0; v = e[h++];)
                                            if (v(f, c, l)) {
                                                d.push(f);
                                                break
                                            } w && (k = S, r = ++n)
                                    }
                                    a && ((f = !v && f) && y--, s && _.push(f))
                                }
                                if (y += b, a && b !== y) {
                                    for (h = 0; v = t[h++];) v(_, g, c, l);
                                    if (s) {
                                        if (y > 0)
                                            for (; b--;) _[b] || g[b] || (g[b] = j.call(d));
                                        g = _e(g)
                                    }
                                    D.apply(d, g), w && !s && g.length > 0 && y + t.length > 1 && oe.uniqueSort(d)
                                }
                                return w && (k = S, u = x), _
                            };
                        return a ? ce(s) : s
                    }

                    function Te(e, t, n, i) {
                        var r, s, c, u, d, p = ve(e);
                        if (!i && 1 === p.length) {
                            if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = s[0]).type && a.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                                if (!(t = (o.find.ID(c.matches[0].replace(ie, re), t) || [])[0])) return n;
                                e = e.slice(s.shift().value.length)
                            }
                            for (r = Q.needsContext.test(e) ? 0 : s.length; r-- && (c = s[r], !o.relative[u = c.type]);)
                                if ((d = o.find[u]) && (i = d(c.matches[0].replace(ie, re), Y.test(s[0].type) && t.parentNode || t))) {
                                    if (s.splice(r, 1), !(e = i.length && ge(s))) return D.apply(n, i), n;
                                    break
                                }
                        }
                        return l(e, p)(i, t, !h, n, Y.test(e)), n
                    }
                    he.prototype = o.filters = o.pseudos, o.setFilters = new he, l = oe.compile = function(e, t) {
                        var n, a = [],
                            i = [],
                            r = C[e + " "];
                        if (!r) {
                            for (t || (t = ve(e)), n = t.length; n--;)(r = ke(t[n]))[_] ? a.push(r) : i.push(r);
                            r = C(e, xe(i, a))
                        }
                        return r
                    }, a.sortStable = _.split("").sort(E).join("") === _, a.detectDuplicates = O, p(), a.sortDetached = le(function(e) {
                        return 1 & e.compareDocumentPosition(m.createElement("div"))
                    }), le(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || ue("type|href|height|width", function(e, t, n) {
                        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), a.attributes && le(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || ue("value", function(e, t, n) {
                        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                    }), le(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || ue(I, function(e, t, n) {
                        var a;
                        return n ? void 0 : (a = e.getAttributeNode(t)) && a.specified ? a.value : !0 === e[t] ? t.toLowerCase() : null
                    }), S.find = oe, S.expr = oe.selectors, S.expr[":"] = S.expr.pseudos, S.unique = oe.uniqueSort, S.text = oe.getText, S.isXMLDoc = oe.isXML, S.contains = oe.contains
                }(r);
            var U = {};
            S.Callbacks = function(e) {
                var t, n, a, i, r, s, c = [],
                    l = !(e = "string" == typeof e ? U[e] || function(e) {
                        var t = U[e] = {};
                        return S.each(e.match(C) || [], function(e, n) {
                            t[n] = !0
                        }), t
                    }(e) : S.extend({}, e)).once && [],
                    u = function o(u) {
                        for (t = e.memory && u, n = !0, s = i || 0, i = 0, r = c.length, a = !0; c && r > s; s++)
                            if (!1 === c[s].apply(u[0], u[1]) && e.stopOnFalse) {
                                t = !1;
                                break
                            } a = !1, c && (l ? l.length && o(l.shift()) : t ? c = [] : d.disable())
                    },
                    d = {
                        add: function() {
                            if (c) {
                                var n = c.length;
                                (function t(n) {
                                    S.each(n, function(n, a) {
                                        var i = S.type(a);
                                        "function" === i ? e.unique && d.has(a) || c.push(a) : a && a.length && "string" !== i && t(a)
                                    })
                                })(arguments), a ? r = c.length : t && (i = n, u(t))
                            }
                            return this
                        },
                        remove: function() {
                            return c && S.each(arguments, function(e, t) {
                                for (var n;
                                    (n = S.inArray(t, c, n)) > -1;) c.splice(n, 1), a && (r >= n && r--, s >= n && s--)
                            }), this
                        },
                        has: function(e) {
                            return e ? S.inArray(e, c) > -1 : !(!c || !c.length)
                        },
                        empty: function() {
                            return c = [], r = 0, this
                        },
                        disable: function() {
                            return c = l = t = o, this
                        },
                        disabled: function() {
                            return !c
                        },
                        lock: function() {
                            return l = o, t || d.disable(), this
                        },
                        locked: function() {
                            return !l
                        },
                        fireWith: function(e, t) {
                            return !c || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], a ? l.push(t) : u(t)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, S.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", S.Callbacks("memory")]
                        ],
                        n = "pending",
                        a = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return S.Deferred(function(n) {
                                    S.each(t, function(t, r) {
                                        var o = r[0],
                                            s = S.isFunction(e[t]) && e[t];
                                        i[r[1]](function() {
                                            var e = s && s.apply(this, arguments);
                                            e && S.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === a ? n.promise() : this, s ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, a) : a
                            }
                        },
                        i = {};
                    return a.pipe = a.then, S.each(t, function(e, r) {
                        var o = r[2],
                            s = r[3];
                        a[r[1]] = o.add, s && o.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function() {
                            return i[r[0] + "With"](this === i ? a : this, arguments), this
                        }, i[r[0] + "With"] = o.fireWith
                    }), a.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t, n, a, i = 0,
                        r = _.call(arguments),
                        o = r.length,
                        s = 1 !== o || e && S.isFunction(e.promise) ? o : 0,
                        c = 1 === s ? e : S.Deferred(),
                        l = function(e, n, a) {
                            return function(i) {
                                n[e] = this, a[e] = arguments.length > 1 ? _.call(arguments) : i, a === t ? c.notifyWith(n, a) : --s || c.resolveWith(n, a)
                            }
                        };
                    if (o > 1)
                        for (t = Array(o), n = Array(o), a = Array(o); o > i; i++) r[i] && S.isFunction(r[i].promise) ? r[i].promise().done(l(i, a, r)).fail(c.reject).progress(l(i, n, t)) : --s;
                    return s || c.resolveWith(a, r), c.promise()
                }
            }), S.support = function(e) {
                var t = d.createElement("input"),
                    n = d.createDocumentFragment(),
                    a = d.createElement("div"),
                    i = d.createElement("select"),
                    o = i.appendChild(d.createElement("option"));
                return t.type ? (t.type = "checkbox", e.checkOn = "" !== t.value, e.optSelected = o.selected, e.reliableMarginRight = !0, e.boxSizingReliable = !0, e.pixelPosition = !1, t.checked = !0, e.noCloneChecked = t.cloneNode(!0).checked, i.disabled = !0, e.optDisabled = !o.disabled, (t = d.createElement("input")).value = "t", t.type = "radio", e.radioValue = "t" === t.value, t.setAttribute("checked", "t"), t.setAttribute("name", "t"), n.appendChild(t), e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, e.focusinBubbles = "onfocusin" in r, a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === a.style.backgroundClip, S(function() {
                    var t, n, i = d.getElementsByTagName("body")[0];
                    i && ((t = d.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(t).appendChild(a), a.innerHTML = "", a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", S.swap(i, null != i.style.zoom ? {
                        zoom: 1
                    } : {}, function() {
                        e.boxSizing = 4 === a.offsetWidth
                    }), r.getComputedStyle && (e.pixelPosition = "1%" !== (r.getComputedStyle(a, null) || {}).top, e.boxSizingReliable = "4px" === (r.getComputedStyle(a, null) || {
                        width: "4px"
                    }).width, (n = a.appendChild(d.createElement("div"))).style.cssText = a.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", n.style.marginRight = n.style.width = "0", a.style.width = "1px", e.reliableMarginRight = !parseFloat((r.getComputedStyle(n, null) || {}).marginRight)), i.removeChild(t))
                }), e) : e
            }({});
            var D, P, M = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                I = /([A-Z])/g;

            function B() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function() {
                        return {}
                    }
                }), this.expando = S.expando + Math.random()
            }

            function R(e, t, n) {
                var a;
                if (n === o && 1 === e.nodeType)
                    if (a = "data-" + t.replace(I, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(a))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : M.test(n) ? JSON.parse(n) : n)
                        } catch (e) {}
                        D.set(e, t, n)
                    } else n = o;
                return n
            }
            B.uid = 1, B.accepts = function(e) {
                return !e.nodeType || (1 === e.nodeType || 9 === e.nodeType)
            }, B.prototype = {
                key: function(e) {
                    if (!B.accepts(e)) return 0;
                    var t = {},
                        n = e[this.expando];
                    if (!n) {
                        n = B.uid++;
                        try {
                            t[this.expando] = {
                                value: n
                            }, Object.defineProperties(e, t)
                        } catch (a) {
                            t[this.expando] = n, S.extend(e, t)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                },
                set: function(e, t, n) {
                    var a, i = this.key(e),
                        r = this.cache[i];
                    if ("string" == typeof t) r[t] = n;
                    else if (S.isEmptyObject(r)) S.extend(this.cache[i], t);
                    else
                        for (a in t) r[a] = t[a];
                    return r
                },
                get: function(e, t) {
                    var n = this.cache[this.key(e)];
                    return t === o ? n : n[t]
                },
                access: function(e, t, n) {
                    var a;
                    return t === o || t && "string" == typeof t && n === o ? (a = this.get(e, t)) !== o ? a : this.get(e, S.camelCase(t)) : (this.set(e, t, n), n !== o ? n : t)
                },
                remove: function(e, t) {
                    var n, a, i, r = this.key(e),
                        s = this.cache[r];
                    if (t === o) this.cache[r] = {};
                    else {
                        S.isArray(t) ? a = t.concat(t.map(S.camelCase)) : (i = S.camelCase(t), t in s ? a = [t, i] : a = (a = i) in s ? [a] : a.match(C) || []), n = a.length;
                        for (; n--;) delete s[a[n]]
                    }
                },
                hasData: function(e) {
                    return !S.isEmptyObject(this.cache[e[this.expando]] || {})
                },
                discard: function(e) {
                    e[this.expando] && delete this.cache[e[this.expando]]
                }
            }, D = new B, P = new B, S.extend({
                acceptData: B.accepts,
                hasData: function(e) {
                    return D.hasData(e) || P.hasData(e)
                },
                data: function(e, t, n) {
                    return D.access(e, t, n)
                },
                removeData: function(e, t) {
                    D.remove(e, t)
                },
                _data: function(e, t, n) {
                    return P.access(e, t, n)
                },
                _removeData: function(e, t) {
                    P.remove(e, t)
                }
            }), S.fn.extend({
                data: function(e, t) {
                    var n, a, r = this[0],
                        s = 0,
                        c = null;
                    if (e === o) {
                        if (this.length && (c = D.get(r), 1 === r.nodeType && !P.get(r, "hasDataAttrs"))) {
                            for (n = r.attributes; n.length > s; s++) 0 === (a = n[s].name).indexOf("data-") && (a = S.camelCase(a.slice(5)), R(r, a, c[a]));
                            P.set(r, "hasDataAttrs", !0)
                        }
                        return c
                    }
                    return "object" == (void 0 === e ? "undefined" : i(e)) ? this.each(function() {
                        D.set(this, e)
                    }) : S.access(this, function(t) {
                        var n, a = S.camelCase(e);
                        if (r && t === o) {
                            if ((n = D.get(r, e)) !== o) return n;
                            if ((n = D.get(r, a)) !== o) return n;
                            if ((n = R(r, a, o)) !== o) return n
                        } else this.each(function() {
                            var n = D.get(this, a);
                            D.set(this, a, t), -1 !== e.indexOf("-") && n !== o && D.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        D.remove(this, e)
                    })
                }
            }), S.extend({
                queue: function(e, t, n) {
                    var a;
                    return e ? (t = (t || "fx") + "queue", a = P.get(e, t), n && (!a || S.isArray(n) ? a = P.access(e, t, S.makeArray(n)) : a.push(n)), a || []) : o
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = S.queue(e, t),
                        a = n.length,
                        i = n.shift(),
                        r = S._queueHooks(e, t);
                    "inprogress" === i && (i = n.shift(), a--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, function() {
                        S.dequeue(e, t)
                    }, r)), !a && r && r.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return P.get(e, n) || P.access(e, n, {
                        empty: S.Callbacks("once memory").add(function() {
                            P.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), S.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? S.queue(this[0], e) : t === o ? this : this.each(function() {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        S.dequeue(this, e)
                    })
                },
                delay: function(e, t) {
                    return e = S.fx && S.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, n) {
                        var a = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(a)
                        }
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, a = 1,
                        i = S.Deferred(),
                        r = this,
                        s = this.length,
                        c = function() {
                            --a || i.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = o), e = e || "fx"; s--;)(n = P.get(r[s], e + "queueHooks")) && n.empty && (a++, n.empty.add(c));
                    return c(), i.promise(t)
                }
            });
            var $, F = /[\t\r\n\f]/g,
                z = /\r/g,
                W = /^(?:input|select|textarea|button)$/i;
            S.fn.extend({
                attr: function(e, t) {
                    return S.access(this, S.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        S.removeAttr(this, e)
                    })
                },
                prop: function(e, t) {
                    return S.access(this, S.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[S.propFix[e] || e]
                    })
                },
                addClass: function(e) {
                    var t, n, a, i, r, o = 0,
                        s = this.length,
                        c = "string" == typeof e && e;
                    if (S.isFunction(e)) return this.each(function(t) {
                        S(this).addClass(e.call(this, t, this.className))
                    });
                    if (c)
                        for (t = (e || "").match(C) || []; s > o; o++)
                            if (a = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(F, " ") : " ")) {
                                for (r = 0; i = t[r++];) 0 > a.indexOf(" " + i + " ") && (a += i + " ");
                                n.className = S.trim(a)
                            } return this
                },
                removeClass: function(e) {
                    var t, n, a, i, r, o = 0,
                        s = this.length,
                        c = 0 === arguments.length || "string" == typeof e && e;
                    if (S.isFunction(e)) return this.each(function(t) {
                        S(this).removeClass(e.call(this, t, this.className))
                    });
                    if (c)
                        for (t = (e || "").match(C) || []; s > o; o++)
                            if (a = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(F, " ") : "")) {
                                for (r = 0; i = t[r++];)
                                    for (; a.indexOf(" " + i + " ") >= 0;) a = a.replace(" " + i + " ", " ");
                                n.className = e ? S.trim(a) : ""
                            } return this
                },
                toggleClass: function(e, t) {
                    var n = void 0 === e ? "undefined" : i(e);
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : S.isFunction(e) ? this.each(function(n) {
                        S(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n)
                            for (var t, a = 0, i = S(this), r = e.match(C) || []; t = r[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else(n === l || "boolean" === n) && (this.className && P.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : P.get(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, a = this.length; a > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(F, " ").indexOf(t) >= 0) return !0;
                    return !1
                },
                val: function(e) {
                    var t, n, a, i = this[0];
                    return arguments.length ? (a = S.isFunction(e), this.each(function(n) {
                        var i;
                        1 === this.nodeType && (null == (i = a ? e.call(this, n, S(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : S.isArray(i) && (i = S.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })), (t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== o || (this.value = i))
                    })) : i ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== o ? n : "string" == typeof(n = i.value) ? n.replace(z, "") : null == n ? "" : n : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = e.attributes.value;
                            return !t || t.specified ? e.value : e.text
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, a = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, o = r ? null : [], s = r ? i + 1 : a.length, c = 0 > i ? s : r ? i : 0; s > c; c++)
                                if (!(!(n = a[c]).selected && c !== i || (S.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && S.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = S(n).val(), r) return t;
                                    o.push(t)
                                } return o
                        },
                        set: function(e, t) {
                            for (var n, a, i = e.options, r = S.makeArray(t), o = i.length; o--;)((a = i[o]).selected = S.inArray(S(a).val(), r) >= 0) && (n = !0);
                            return n || (e.selectedIndex = -1), r
                        }
                    }
                },
                attr: function(e, t, n) {
                    var a, r, s = e.nodeType;
                    if (e && 3 !== s && 8 !== s && 2 !== s) return i(e.getAttribute) === l ? S.prop(e, t, n) : (1 === s && S.isXMLDoc(e) || (t = t.toLowerCase(), a = S.attrHooks[t] || (S.expr.match.bool.test(t) ? $ : void 0)), n === o ? a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? o : r : null !== n ? a && "set" in a && (r = a.set(e, n, t)) !== o ? r : (e.setAttribute(t, n + ""), n) : (S.removeAttr(e, t), o))
                },
                removeAttr: function(e, t) {
                    var n, a, i = 0,
                        r = t && t.match(C);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++];) a = S.propFix[n] || n, S.expr.match.bool.test(n) && (e[a] = !1), e.removeAttribute(n)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!S.support.radioValue && "radio" === t && S.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                },
                prop: function(e, t, n) {
                    var a, i, r = e.nodeType;
                    if (e && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !S.isXMLDoc(e)) && (t = S.propFix[t] || t, i = S.propHooks[t]), n !== o ? i && "set" in i && (a = i.set(e, n, t)) !== o ? a : e[t] = n : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            return e.hasAttribute("tabindex") || W.test(e.nodeName) || e.href ? e.tabIndex : -1
                        }
                    }
                }
            }), $ = {
                set: function(e, t, n) {
                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = S.expr.attrHandle[t] || S.find.attr;
                S.expr.attrHandle[t] = function(e, t, a) {
                    var i = S.expr.attrHandle[t],
                        r = a ? o : (S.expr.attrHandle[t] = o) != n(e, t, a) ? t.toLowerCase() : null;
                    return S.expr.attrHandle[t] = i, r
                }
            }), S.support.optSelected || (S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                S.propFix[this.toLowerCase()] = this
            }), S.each(["radio", "checkbox"], function() {
                S.valHooks[this] = {
                    set: function(e, t) {
                        return S.isArray(t) ? e.checked = S.inArray(S(e).val(), t) >= 0 : o
                    }
                }, S.support.checkOn || (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var J = /^key/,
                V = /^(?:mouse|contextmenu)|click/,
                Y = /^(?:focusinfocus|focusoutblur)$/,
                X = /^([^.]*)(?:\.(.+)|)$/;

            function G() {
                return !0
            }

            function K() {
                return !1
            }

            function Q() {
                try {
                    return d.activeElement
                } catch (e) {}
            }
            S.event = {
                global: {},
                add: function(e, t, n, a, r) {
                    var s, c, u, d, p, m, f, h, v, g, y, b = P.get(e);
                    if (b) {
                        for (n.handler && (n = (s = n).handler, r = s.selector), n.guid || (n.guid = S.guid++), (d = b.events) || (d = b.events = {}), (c = b.handle) || ((c = b.handle = function(e) {
                                return (void 0 === S ? "undefined" : i(S)) === l || e && S.event.triggered === e.type ? o : S.event.dispatch.apply(c.elem, arguments)
                            }).elem = e), p = (t = (t || "").match(C) || [""]).length; p--;) v = y = (u = X.exec(t[p]) || [])[1], g = (u[2] || "").split(".").sort(), v && (f = S.event.special[v] || {}, v = (r ? f.delegateType : f.bindType) || v, f = S.event.special[v] || {}, m = S.extend({
                            type: v,
                            origType: y,
                            data: a,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: g.join(".")
                        }, s), (h = d[v]) || ((h = d[v] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, a, g, c) || e.addEventListener && e.addEventListener(v, c, !1)), f.add && (f.add.call(e, m), m.handler.guid || (m.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, m) : h.push(m), S.event.global[v] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, a, i) {
                    var r, o, s, c, l, u, d, p, m, f, h, v = P.hasData(e) && P.get(e);
                    if (v && (c = v.events)) {
                        for (l = (t = (t || "").match(C) || [""]).length; l--;)
                            if (m = h = (s = X.exec(t[l]) || [])[1], f = (s[2] || "").split(".").sort(), m) {
                                for (d = S.event.special[m] || {}, p = c[m = (a ? d.delegateType : d.bindType) || m] || [], s = s[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = p.length; r--;) u = p[r], !i && h !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || a && a !== u.selector && ("**" !== a || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
                                o && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, v.handle) || S.removeEvent(e, m, v.handle), delete c[m])
                            } else
                                for (m in c) S.event.remove(e, m + t[l], n, a, !0);
                        S.isEmptyObject(c) && (delete v.handle, P.remove(e, "events"))
                    }
                },
                trigger: function(e, t, n, a) {
                    var s, c, l, u, p, m, f, h = [n || d],
                        v = x.call(e, "type") ? e.type : e,
                        g = x.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (c = l = n = n || d, 3 !== n.nodeType && 8 !== n.nodeType && !Y.test(v + S.event.triggered) && (v.indexOf(".") >= 0 && (v = (g = v.split(".")).shift(), g.sort()), p = 0 > v.indexOf(":") && "on" + v, (e = e[S.expando] ? e : new S.Event(v, "object" == (void 0 === e ? "undefined" : i(e)) && e)).isTrigger = a ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = o, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), f = S.event.special[v] || {}, a || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                        if (!a && !f.noBubble && !S.isWindow(n)) {
                            for (u = f.delegateType || v, Y.test(u + v) || (c = c.parentNode); c; c = c.parentNode) h.push(c), l = c;
                            l === (n.ownerDocument || d) && h.push(l.defaultView || l.parentWindow || r)
                        }
                        for (s = 0;
                            (c = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? u : f.bindType || v, (m = (P.get(c, "events") || {})[e.type] && P.get(c, "handle")) && m.apply(c, t), (m = p && c[p]) && S.acceptData(c) && m.apply && !1 === m.apply(c, t) && e.preventDefault();
                        return e.type = v, a || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !S.acceptData(n) || p && S.isFunction(n[v]) && !S.isWindow(n) && ((l = n[p]) && (n[p] = null), S.event.triggered = v, n[v](), S.event.triggered = o, l && (n[p] = l)), e.result
                    }
                },
                dispatch: function(e) {
                    e = S.event.fix(e);
                    var t, n, a, i, r, s = [],
                        c = _.call(arguments),
                        l = (P.get(this, "events") || {})[e.type] || [],
                        u = S.event.special[e.type] || {};
                    if (c[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (s = S.event.handlers.call(this, e, l), t = 0;
                            (i = s[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = i.elem, n = 0;
                                (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, (a = ((S.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, c)) !== o && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, a, i, r, s = [],
                        c = t.delegateCount,
                        l = e.target;
                    if (c && l.nodeType && (!e.button || "click" !== e.type))
                        for (; l !== this; l = l.parentNode || this)
                            if (!0 !== l.disabled || "click" !== e.type) {
                                for (a = [], n = 0; c > n; n++) a[i = (r = t[n]).selector + " "] === o && (a[i] = r.needsContext ? S(i, this).index(l) >= 0 : S.find(i, this, null, [l]).length), a[i] && a.push(r);
                                a.length && s.push({
                                    elem: l,
                                    handlers: a
                                })
                            } return t.length > c && s.push({
                        elem: this,
                        handlers: t.slice(c)
                    }), s
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, a, i, r = t.button;
                        return null == e.pageX && null != t.clientX && (a = (n = e.target.ownerDocument || d).documentElement, i = n.body, e.pageX = t.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)), e.which || r === o || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                    }
                },
                fix: function(e) {
                    if (e[S.expando]) return e;
                    var t, n, a, i = e.type,
                        r = e,
                        o = this.fixHooks[i];
                    for (o || (this.fixHooks[i] = o = V.test(i) ? this.mouseHooks : J.test(i) ? this.keyHooks : {}), a = o.props ? this.props.concat(o.props) : this.props, e = new S.Event(r), t = a.length; t--;) e[n = a[t]] = r[n];
                    return e.target || (e.target = d), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, r) : e
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            return this !== Q() && this.focus ? (this.focus(), !1) : o
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === Q() && this.blur ? (this.blur(), !1) : o
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            return "checkbox" === this.type && this.click && S.nodeName(this, "input") ? (this.click(), !1) : o
                        },
                        _default: function(e) {
                            return S.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== o && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, a) {
                    var i = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    a ? S.event.trigger(i, null, t) : S.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, S.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            }, S.Event = function(e, t) {
                return this instanceof S.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? G : K) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), this[S.expando] = !0, o) : new S.Event(e, t)
            }, S.Event.prototype = {
                isDefaultPrevented: K,
                isPropagationStopped: K,
                isImmediatePropagationStopped: K,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = G, e && e.preventDefault && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = G, e && e.stopPropagation && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = G, this.stopPropagation()
                }
            }, S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                S.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, a = e.relatedTarget,
                            i = e.handleObj;
                        return (!a || a !== this && !S.contains(this, a)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), S.support.focusinBubbles || S.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    a = function(e) {
                        S.event.simulate(t, e.target, S.event.fix(e), !0)
                    };
                S.event.special[t] = {
                    setup: function() {
                        0 == n++ && d.addEventListener(e, a, !0)
                    },
                    teardown: function() {
                        0 == --n && d.removeEventListener(e, a, !0)
                    }
                }
            }), S.fn.extend({
                on: function(e, t, n, a, r) {
                    var s, c;
                    if ("object" == (void 0 === e ? "undefined" : i(e))) {
                        for (c in "string" != typeof t && (n = n || t, t = o), e) this.on(c, t, n, e[c], r);
                        return this
                    }
                    if (null == n && null == a ? (a = t, n = t = o) : null == a && ("string" == typeof t ? (a = n, n = o) : (a = n, n = t, t = o)), !1 === a) a = K;
                    else if (!a) return this;
                    return 1 === r && (s = a, (a = function(e) {
                        return S().off(e), s.apply(this, arguments)
                    }).guid = s.guid || (s.guid = S.guid++)), this.each(function() {
                        S.event.add(this, e, a, n, t)
                    })
                },
                one: function(e, t, n, a) {
                    return this.on(e, t, n, a, 1)
                },
                off: function(e, t, n) {
                    var a, r;
                    if (e && e.preventDefault && e.handleObj) return a = e.handleObj, S(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                    if ("object" == (void 0 === e ? "undefined" : i(e))) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return (!1 === t || "function" == typeof t) && (n = t, t = o), !1 === n && (n = K), this.each(function() {
                        S.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        S.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? S.event.trigger(e, t, n, !0) : o
                }
            });
            var Z = /^.[^:#\[\.,]*$/,
                ee = /^(?:parents|prev(?:Until|All))/,
                te = S.expr.match.needsContext,
                ne = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function ae(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }

            function ie(e, t, n) {
                if (S.isFunction(t)) return S.grep(e, function(e, a) {
                    return !!t.call(e, a, e) !== n
                });
                if (t.nodeType) return S.grep(e, function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (Z.test(t)) return S.filter(t, e, n);
                    t = S.filter(t, e)
                }
                return S.grep(e, function(e) {
                    return w.call(t, e) >= 0 !== n
                })
            }
            S.fn.extend({
                find: function(e) {
                    var t, n = [],
                        a = this,
                        i = a.length;
                    if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                        for (t = 0; i > t; t++)
                            if (S.contains(a[t], this)) return !0
                    }));
                    for (t = 0; i > t; t++) S.find(e, a[t], n);
                    return (n = this.pushStack(i > 1 ? S.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
                },
                has: function(e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; n > e; e++)
                            if (S.contains(this, t[e])) return !0
                    })
                },
                not: function(e) {
                    return this.pushStack(ie(this, e || [], !0))
                },
                filter: function(e) {
                    return this.pushStack(ie(this, e || [], !1))
                },
                is: function(e) {
                    return !!ie(this, "string" == typeof e && te.test(e) ? S(e) : e || [], !1).length
                },
                closest: function(e, t) {
                    for (var n, a = 0, i = this.length, r = [], o = te.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; i > a; a++)
                        for (n = this[a]; n && n !== t; n = n.parentNode)
                            if (11 > n.nodeType && (o ? o.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                n = r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? S.unique(r) : r)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? w.call(S(e), this[0]) : w.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    var n = "string" == typeof e ? S(e, t) : S.makeArray(e && e.nodeType ? [e] : e),
                        a = S.merge(this.get(), n);
                    return this.pushStack(S.unique(a))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), S.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return S.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return S.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return ae(e, "nextSibling")
                },
                prev: function(e) {
                    return ae(e, "previousSibling")
                },
                nextAll: function(e) {
                    return S.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return S.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return S.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return S.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return S.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return S.sibling(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || S.merge([], e.childNodes)
                }
            }, function(e, t) {
                S.fn[e] = function(n, a) {
                    var i = S.map(this, t, n);
                    return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = S.filter(a, i)), this.length > 1 && (ne[e] || S.unique(i), ee.test(e) && i.reverse()), this.pushStack(i)
                }
            }), S.extend({
                filter: function(e, t, n) {
                    var a = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? S.find.matchesSelector(a, e) ? [a] : [] : S.find.matches(e, S.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                },
                dir: function(e, t, n) {
                    for (var a = [], i = n !== o;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (i && S(e).is(n)) break;
                            a.push(e)
                        } return a
                },
                sibling: function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                }
            });
            var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                oe = /<([\w:]+)/,
                se = /<|&#?\w+;/,
                ce = /<(?:script|style|link)/i,
                le = /^(?:checkbox|radio)$/i,
                ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
                de = /^$|\/(?:java|ecma)script/i,
                pe = /^true\/(.*)/,
                me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                fe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function he(e, t) {
                return S.nodeName(e, "table") && S.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function ve(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function ge(e) {
                var t = pe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function ye(e, t) {
                for (var n = e.length, a = 0; n > a; a++) P.set(e[a], "globalEval", !t || P.get(t[a], "globalEval"))
            }

            function be(e, t) {
                var n, a, i, r, o, s, c, l;
                if (1 === t.nodeType) {
                    if (P.hasData(e) && (r = P.access(e), o = P.set(t, r), l = r.events))
                        for (i in delete o.handle, o.events = {}, l)
                            for (n = 0, a = l[i].length; a > n; n++) S.event.add(t, i, l[i][n]);
                    D.hasData(e) && (s = D.access(e), c = S.extend({}, s), D.set(t, c))
                }
            }

            function _e(e, t) {
                var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return t === o || t && S.nodeName(e, t) ? S.merge([e], n) : n
            }

            function we(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && le.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
            fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td, S.fn.extend({
                text: function(e) {
                    return S.access(this, function(e) {
                        return e === o ? S.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || he(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = he(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, a = e ? S.filter(e, this) : this, i = 0; null != (n = a[i]); i++) t || 1 !== n.nodeType || S.cleanData(_e(n)), n.parentNode && (t && S.contains(n.ownerDocument, n) && ye(_e(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(_e(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return S.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return S.access(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            a = this.length;
                        if (e === o && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !ce.test(e) && !fe[(oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(re, "<$1></$2>");
                            try {
                                for (; a > n; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(_e(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = S.map(this, function(e) {
                            return [e.nextSibling, e.parentNode]
                        }),
                        t = 0;
                    return this.domManip(arguments, function(n) {
                        var a = e[t++],
                            i = e[t++];
                        i && (a && a.parentNode !== i && (a = this.nextSibling), S(this).remove(), i.insertBefore(n, a))
                    }, !0), t ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t, n) {
                    e = y.apply([], e);
                    var a, i, r, o, s, c, l = 0,
                        u = this.length,
                        d = this,
                        p = u - 1,
                        m = e[0],
                        f = S.isFunction(m);
                    if (f || !(1 >= u || "string" != typeof m || S.support.checkClone) && ue.test(m)) return this.each(function(a) {
                        var i = d.eq(a);
                        f && (e[0] = m.call(this, a, i.html())), i.domManip(e, t, n)
                    });
                    if (u && (i = (a = S.buildFragment(e, this[0].ownerDocument, !1, !n && this)).firstChild, 1 === a.childNodes.length && (a = i), i)) {
                        for (o = (r = S.map(_e(a, "script"), ve)).length; u > l; l++) s = a, l !== p && (s = S.clone(s, !0, !0), o && S.merge(r, _e(s, "script"))), t.call(this[l], s, l);
                        if (o)
                            for (c = r[r.length - 1].ownerDocument, S.map(r, ge), l = 0; o > l; l++) s = r[l], de.test(s.type || "") && !P.access(s, "globalEval") && S.contains(c, s) && (s.src ? S._evalUrl(s.src) : S.globalEval(s.textContent.replace(me, "")))
                    }
                    return this
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                S.fn[e] = function(e) {
                    for (var n, a = [], i = S(e), r = i.length - 1, o = 0; r >= o; o++) n = o === r ? this : this.clone(!0), S(i[o])[t](n), b.apply(a, n.get());
                    return this.pushStack(a)
                }
            }), S.extend({
                clone: function(e, t, n) {
                    var a, i, r, o, s = e.cloneNode(!0),
                        c = S.contains(e.ownerDocument, e);
                    if (!(S.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                        for (o = _e(s), a = 0, i = (r = _e(e)).length; i > a; a++) we(r[a], o[a]);
                    if (t)
                        if (n)
                            for (r = r || _e(e), o = o || _e(s), a = 0, i = r.length; i > a; a++) be(r[a], o[a]);
                        else be(e, s);
                    return (o = _e(s, "script")).length > 0 && ye(o, !c && _e(e, "script")), s
                },
                buildFragment: function(e, t, n, a) {
                    for (var i, r, o, s, c, l, u = 0, d = e.length, p = t.createDocumentFragment(), m = []; d > u; u++)
                        if ((i = e[u]) || 0 === i)
                            if ("object" === S.type(i)) S.merge(m, i.nodeType ? [i] : i);
                            else if (se.test(i)) {
                        for (r = r || p.appendChild(t.createElement("div")), o = (oe.exec(i) || ["", ""])[1].toLowerCase(), s = fe[o] || fe._default, r.innerHTML = s[1] + i.replace(re, "<$1></$2>") + s[2], l = s[0]; l--;) r = r.lastChild;
                        S.merge(m, r.childNodes), (r = p.firstChild).textContent = ""
                    } else m.push(t.createTextNode(i));
                    for (p.textContent = "", u = 0; i = m[u++];)
                        if ((!a || -1 === S.inArray(i, a)) && (c = S.contains(i.ownerDocument, i), r = _e(p.appendChild(i), "script"), c && ye(r), n))
                            for (l = 0; i = r[l++];) de.test(i.type || "") && n.push(i);
                    return p
                },
                cleanData: function(e) {
                    for (var t, n, a, i, r, s, c = S.event.special, l = 0;
                        (n = e[l]) !== o; l++) {
                        if (B.accepts(n) && ((r = n[P.expando]) && (t = P.cache[r]))) {
                            if ((a = Object.keys(t.events || {})).length)
                                for (s = 0;
                                    (i = a[s]) !== o; s++) c[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                            P.cache[r] && delete P.cache[r]
                        }
                        delete D.cache[n[D.expando]]
                    }
                },
                _evalUrl: function(e) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    })
                }
            }), S.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return S.isFunction(e) ? this.each(function(t) {
                        S(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this)
                },
                wrapInner: function(e) {
                    return S.isFunction(e) ? this.each(function(t) {
                        S(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = S(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = S.isFunction(e);
                    return this.each(function(n) {
                        S(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
                    }).end()
                }
            });
            var ke, xe, Te = /^(none|table(?!-c[ea]).+)/,
                Se = /^margin/,
                Le = RegExp("^(" + L + ")(.*)$", "i"),
                Ce = RegExp("^(" + L + ")(?!px)[a-z%]+$", "i"),
                Oe = RegExp("^([+-])=(" + L + ")", "i"),
                Ee = {
                    BODY: "block"
                },
                qe = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ae = {
                    letterSpacing: 0,
                    fontWeight: 400
                },
                He = ["Top", "Right", "Bottom", "Left"],
                Ne = ["Webkit", "O", "Moz", "ms"];

            function je(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), a = t, i = Ne.length; i--;)
                    if ((t = Ne[i] + n) in e) return t;
                return a
            }

            function Ue(e, t) {
                return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
            }

            function De(e) {
                return r.getComputedStyle(e, null)
            }

            function Pe(e, t) {
                for (var n, a, i, r = [], o = 0, s = e.length; s > o; o++)(a = e[o]).style && (r[o] = P.get(a, "olddisplay"), n = a.style.display, t ? (r[o] || "none" !== n || (a.style.display = ""), "" === a.style.display && Ue(a) && (r[o] = P.access(a, "olddisplay", Re(a.nodeName)))) : r[o] || (i = Ue(a), (n && "none" !== n || !i) && P.set(a, "olddisplay", i ? n : S.css(a, "display"))));
                for (o = 0; s > o; o++)(a = e[o]).style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? r[o] || "" : "none"));
                return e
            }

            function Me(e, t, n) {
                var a = Le.exec(t);
                return a ? Math.max(0, a[1] - (n || 0)) + (a[2] || "px") : t
            }

            function Ie(e, t, n, a, i) {
                for (var r = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += S.css(e, n + He[r], !0, i)), a ? ("content" === n && (o -= S.css(e, "padding" + He[r], !0, i)), "margin" !== n && (o -= S.css(e, "border" + He[r] + "Width", !0, i))) : (o += S.css(e, "padding" + He[r], !0, i), "padding" !== n && (o += S.css(e, "border" + He[r] + "Width", !0, i)));
                return o
            }

            function Be(e, t, n) {
                var a = !0,
                    i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    r = De(e),
                    o = S.support.boxSizing && "border-box" === S.css(e, "boxSizing", !1, r);
                if (0 >= i || null == i) {
                    if ((0 > (i = ke(e, t, r)) || null == i) && (i = e.style[t]), Ce.test(i)) return i;
                    a = o && (S.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + Ie(e, t, n || (o ? "border" : "content"), a, r) + "px"
            }

            function Re(e) {
                var t = d,
                    n = Ee[e];
                return n || ("none" !== (n = $e(e, t)) && n || ((t = ((xe = (xe || S("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || xe[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = $e(e, t), xe.detach()), Ee[e] = n), n
            }

            function $e(e, t) {
                var n = S(t.createElement(e)).appendTo(t.body),
                    a = S.css(n[0], "display");
                return n.remove(), a
            }
            S.fn.extend({
                css: function(e, t) {
                    return S.access(this, function(e, t, n) {
                        var a, i, r = {},
                            s = 0;
                        if (S.isArray(t)) {
                            for (a = De(e), i = t.length; i > s; s++) r[t[s]] = S.css(e, t[s], !1, a);
                            return r
                        }
                        return n !== o ? S.style(e, t, n) : S.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return Pe(this, !0)
                },
                hide: function() {
                    return Pe(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Ue(this) ? S(this).show() : S(this).hide()
                    })
                }
            }), S.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = ke(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, a) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, s, c, l = S.camelCase(t),
                            u = e.style;
                        return t = S.cssProps[l] || (S.cssProps[l] = je(u, l)), c = S.cssHooks[t] || S.cssHooks[l], n === o ? c && "get" in c && (r = c.get(e, !1, a)) !== o ? r : u[t] : ("string" === (s = void 0 === n ? "undefined" : i(n)) && (r = Oe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(S.css(e, t)), s = "number"), null == n || "number" === s && isNaN(n) || ("number" !== s || S.cssNumber[l] || (n += "px"), S.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), c && "set" in c && (n = c.set(e, n, a)) === o || (u[t] = n)), o)
                    }
                },
                css: function(e, t, n, a) {
                    var i, r, s, c = S.camelCase(t);
                    return t = S.cssProps[c] || (S.cssProps[c] = je(e.style, c)), (s = S.cssHooks[t] || S.cssHooks[c]) && "get" in s && (i = s.get(e, !0, n)), i === o && (i = ke(e, t, a)), "normal" === i && t in Ae && (i = Ae[t]), "" === n || n ? (r = parseFloat(i), !0 === n || S.isNumeric(r) ? r || 0 : i) : i
                }
            }), ke = function(e, t, n) {
                var a, i, r, s = n || De(e),
                    c = s ? s.getPropertyValue(t) || s[t] : o,
                    l = e.style;
                return s && ("" !== c || S.contains(e.ownerDocument, e) || (c = S.style(e, t)), Ce.test(c) && Se.test(t) && (a = l.width, i = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = s.width, l.width = a, l.minWidth = i, l.maxWidth = r)), c
            }, S.each(["height", "width"], function(e, t) {
                S.cssHooks[t] = {
                    get: function(e, n, a) {
                        return n ? 0 === e.offsetWidth && Te.test(S.css(e, "display")) ? S.swap(e, qe, function() {
                            return Be(e, t, a)
                        }) : Be(e, t, a) : o
                    },
                    set: function(e, n, a) {
                        var i = a && De(e);
                        return Me(0, n, a ? Ie(e, t, a, S.support.boxSizing && "border-box" === S.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), S(function() {
                S.support.reliableMarginRight || (S.cssHooks.marginRight = {
                    get: function(e, t) {
                        return t ? S.swap(e, {
                            display: "inline-block"
                        }, ke, [e, "marginRight"]) : o
                    }
                }), !S.support.pixelPosition && S.fn.position && S.each(["top", "left"], function(e, t) {
                    S.cssHooks[t] = {
                        get: function(e, n) {
                            return n ? (n = ke(e, t), Ce.test(n) ? S(e).position()[t] + "px" : n) : o
                        }
                    }
                })
            }), S.expr && S.expr.filters && (S.expr.filters.hidden = function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight
            }, S.expr.filters.visible = function(e) {
                return !S.expr.filters.hidden(e)
            }), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                S.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++) i[e + He[a] + t] = r[a] || r[a - 2] || r[0];
                        return i
                    }
                }, Se.test(e) || (S.cssHooks[e + t].set = Me)
            });
            var Fe = /%20/g,
                ze = /\[\]$/,
                We = /\r?\n/g,
                Je = /^(?:submit|button|image|reset|file)$/i,
                Ve = /^(?:input|select|textarea|keygen)/i;

            function Ye(e, t, n, a) {
                var r;
                if (S.isArray(t)) S.each(t, function(t, r) {
                    n || ze.test(e) ? a(e, r) : Ye(e + "[" + ("object" == (void 0 === r ? "undefined" : i(r)) ? t : "") + "]", r, n, a)
                });
                else if (n || "object" !== S.type(t)) a(e, t);
                else
                    for (r in t) Ye(e + "[" + r + "]", t[r], n, a)
            }
            S.fn.extend({
                serialize: function() {
                    return S.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = S.prop(this, "elements");
                        return e ? S.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && Ve.test(this.nodeName) && !Je.test(e) && (this.checked || !le.test(e))
                    }).map(function(e, t) {
                        var n = S(this).val();
                        return null == n ? null : S.isArray(n) ? S.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(We, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(We, "\r\n")
                        }
                    }).get()
                }
            }), S.param = function(e, t) {
                var n, a = [],
                    i = function(e, t) {
                        t = S.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (t === o && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Ye(n, e[n], t, i);
                return a.join("&").replace(Fe, "+")
            }, S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                S.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), S.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, a) {
                    return this.on(t, e, n, a)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var Xe, Ge, Ke = S.now(),
                Qe = /\?/,
                Ze = /#.*$/,
                et = /([?&])_=[^&]*/,
                tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                nt = /^(?:GET|HEAD)$/,
                at = /^\/\//,
                it = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                rt = S.fn.load,
                ot = {},
                st = {},
                ct = "*/".concat("*");
            try {
                Ge = u.href
            } catch (e) {
                (Ge = d.createElement("a")).href = "", Ge = Ge.href
            }

            function lt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var a, i = 0,
                        r = t.toLowerCase().match(C) || [];
                    if (S.isFunction(n))
                        for (; a = r[i++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
                }
            }

            function ut(e, t, n, a) {
                var i = {},
                    r = e === st;

                function s(c) {
                    var l;
                    return i[c] = !0, S.each(e[c] || [], function(e, c) {
                        var u = c(t, n, a);
                        return "string" != typeof u || r || i[u] ? r ? !(l = u) : o : (t.dataTypes.unshift(u), s(u), !1)
                    }), l
                }
                return s(t.dataTypes[0]) || !i["*"] && s("*")
            }

            function dt(e, t) {
                var n, a, i = S.ajaxSettings.flatOptions || {};
                for (n in t) t[n] !== o && ((i[n] ? e : a || (a = {}))[n] = t[n]);
                return a && S.extend(!0, e, a), e
            }
            Xe = it.exec(Ge.toLowerCase()) || [], S.fn.load = function(e, t, n) {
                if ("string" != typeof e && rt) return rt.apply(this, arguments);
                var a, r, s, c = this,
                    l = e.indexOf(" ");
                return l >= 0 && (a = e.slice(l), e = e.slice(0, l)), S.isFunction(t) ? (n = t, t = o) : t && "object" == (void 0 === t ? "undefined" : i(t)) && (r = "POST"), c.length > 0 && S.ajax({
                    url: e,
                    type: r,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    s = arguments, c.html(a ? S("<div>").append(S.parseHTML(e)).find(a) : e)
                }).complete(n && function(e, t) {
                    c.each(n, s || [e.responseText, t, e])
                }), this
            }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                S.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ge,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xe[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": ct,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /xml/,
                        html: /html/,
                        json: /json/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": S.parseJSON,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? dt(dt(e, S.ajaxSettings), t) : dt(S.ajaxSettings, e)
                },
                ajaxPrefilter: lt(ot),
                ajaxTransport: lt(st),
                ajax: function(e, t) {
                    "object" == (void 0 === e ? "undefined" : i(e)) && (t = e, e = o), t = t || {};
                    var n, a, r, s, c, l, u, d, p = S.ajaxSetup({}, t),
                        m = p.context || p,
                        f = p.context && (m.nodeType || m.jquery) ? S(m) : S.event,
                        h = S.Deferred(),
                        v = S.Callbacks("once memory"),
                        g = p.statusCode || {},
                        y = {},
                        b = {},
                        _ = 0,
                        w = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === _) {
                                    if (!s)
                                        for (s = {}; t = tt.exec(r);) s[t[1].toLowerCase()] = t[2];
                                    t = s[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === _ ? r : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return _ || (e = b[n] = b[n] || e, y[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return _ || (p.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (2 > _)
                                        for (t in e) g[t] = [g[t], e[t]];
                                    else k.always(e[k.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || w;
                                return n && n.abort(t), x(0, t), this
                            }
                        };
                    if (h.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || Ge) + "").replace(Ze, "").replace(at, Xe[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = S.trim(p.dataType || "*").toLowerCase().match(C) || [""], null == p.crossDomain && (l = it.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Xe[1] && l[2] === Xe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Xe[3] || ("http:" === Xe[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = S.param(p.data, p.traditional)), ut(ot, p, t, k), 2 === _) return k;
                    for (d in (u = p.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !nt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Qe.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = et.test(a) ? a.replace(et, "$1_=" + Ke++) : a + (Qe.test(a) ? "&" : "?") + "_=" + Ke++)), p.ifModified && (S.lastModified[a] && k.setRequestHeader("If-Modified-Since", S.lastModified[a]), S.etag[a] && k.setRequestHeader("If-None-Match", S.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ct + "; q=0.01" : "") : p.accepts["*"]), p.headers) k.setRequestHeader(d, p.headers[d]);
                    if (p.beforeSend && (!1 === p.beforeSend.call(m, k, p) || 2 === _)) return k.abort();
                    for (d in w = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) k[d](p[d]);
                    if (n = ut(st, p, t, k)) {
                        k.readyState = 1, u && f.trigger("ajaxSend", [k, p]), p.async && p.timeout > 0 && (c = setTimeout(function() {
                            k.abort("timeout")
                        }, p.timeout));
                        try {
                            _ = 1, n.send(y, x)
                        } catch (e) {
                            if (!(2 > _)) throw e;
                            x(-1, e)
                        }
                    } else x(-1, "No Transport");

                    function x(e, t, i, s) {
                        var l, d, y, b, w, x = t;
                        2 !== _ && (_ = 2, c && clearTimeout(c), n = o, r = s || "", k.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, i && (b = function(e, t, n) {
                            var a, i, r, s, c = e.contents,
                                l = e.dataTypes;
                            for (;
                                "*" === l[0];) l.shift(), a === o && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (a)
                                for (i in c)
                                    if (c[i] && c[i].test(a)) {
                                        l.unshift(i);
                                        break
                                    } if (l[0] in n) r = l[0];
                            else {
                                for (i in n) {
                                    if (!l[0] || e.converters[i + " " + l[0]]) {
                                        r = i;
                                        break
                                    }
                                    s || (s = i)
                                }
                                r = r || s
                            }
                            return r ? (r !== l[0] && l.unshift(r), n[r]) : o
                        }(p, k, i)), b = function(e, t, n, a) {
                            var i, r, o, s, c, l = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
                            r = u.shift();
                            for (; r;)
                                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !c && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = u.shift())
                                    if ("*" === r) r = c;
                                    else if ("*" !== c && c !== r) {
                                if (!(o = l[c + " " + r] || l["* " + r]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === r && (o = l[c + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === o ? o = l[i] : !0 !== l[i] && (r = s[0], u.unshift(s[1]));
                                            break
                                        } if (!0 !== o)
                                    if (o && e.throws) t = o(t);
                                    else try {
                                        t = o(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: o ? e : "No conversion from " + c + " to " + r
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(p, b, k, l), l ? (p.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (S.lastModified[a] = w), (w = k.getResponseHeader("etag")) && (S.etag[a] = w)), 204 === e || "HEAD" === p.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = b.state, d = b.data, l = !(y = b.error))) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (t || x) + "", l ? h.resolveWith(m, [d, x, k]) : h.rejectWith(m, [k, x, y]), k.statusCode(g), g = o, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [k, p, l ? d : y]), v.fireWith(m, [k, x]), u && (f.trigger("ajaxComplete", [k, p]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(e, t, n) {
                    return S.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return S.get(e, o, t, "script")
                }
            }), S.each(["get", "post"], function(e, t) {
                S[t] = function(e, n, a, i) {
                    return S.isFunction(n) && (i = i || a, a = n, n = o), S.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: a
                    })
                }
            }), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return S.globalEval(e), e
                    }
                }
            }), S.ajaxPrefilter("script", function(e) {
                e.cache === o && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), S.ajaxTransport("script", function(e) {
                var t, n;
                if (e.crossDomain) return {
                    send: function(a, i) {
                        t = S("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                        }), d.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            });
            var pt = [],
                mt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = pt.pop() || S.expando + "_" + Ke++;
                    return this[e] = !0, e
                }
            }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
                var a, i, s, c = !1 !== e.jsonp && (mt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && mt.test(e.data) && "data");
                return c || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, c ? e[c] = e[c].replace(mt, "$1" + a) : !1 !== e.jsonp && (e.url += (Qe.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                    return s || S.error(a + " was not called"), s[0]
                }, e.dataTypes[0] = "json", i = r[a], r[a] = function() {
                    s = arguments
                }, n.always(function() {
                    r[a] = i, e[a] && (e.jsonpCallback = t.jsonpCallback, pt.push(a)), s && S.isFunction(i) && i(s[0]), s = i = o
                }), "script") : o
            }), S.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest
                } catch (e) {}
            };
            var ft = S.ajaxSettings.xhr(),
                ht = {
                    0: 200,
                    1223: 204
                },
                vt = 0,
                gt = {};
            r.ActiveXObject && S(r).on("unload", function() {
                for (var e in gt) gt[e]();
                gt = o
            }), S.support.cors = !!ft && "withCredentials" in ft, S.support.ajax = ft = !!ft, S.ajaxTransport(function(e) {
                var t;
                return S.support.cors || ft && !e.crossDomain ? {
                    send: function(n, a) {
                        var i, r, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (i in e.xhrFields) s[i] = e.xhrFields[i];
                        for (i in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) s.setRequestHeader(i, n[i]);
                        t = function(e) {
                            return function() {
                                t && (delete gt[r], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? a(s.status || 404, s.statusText) : a(ht[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                    text: s.responseText
                                } : o, s.getAllResponseHeaders()))
                            }
                        }, s.onload = t(), s.onerror = t("error"), t = gt[r = vt++] = t("abort"), s.send(e.hasContent && e.data || null)
                    },
                    abort: function() {
                        t && t()
                    }
                } : o
            });
            var yt, bt, _t = /^(?:toggle|show|hide)$/,
                wt = RegExp("^(?:([+-])=|)(" + L + ")([a-z%]*)$", "i"),
                kt = /queueHooks$/,
                xt = [function(e, t, n) {
                    var a, i, r, s, c, l, u = this,
                        d = {},
                        p = e.style,
                        m = e.nodeType && Ue(e),
                        f = P.get(e, "fxshow");
                    for (a in n.queue || (null == (c = S._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, l = c.empty.fire, c.empty.fire = function() {
                            c.unqueued || l()
                        }), c.unqueued++, u.always(function() {
                            u.always(function() {
                                c.unqueued--, S.queue(e, "fx").length || c.empty.fire()
                            })
                        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === S.css(e, "display") && "none" === S.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function() {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), t)
                        if (i = t[a], _t.exec(i)) {
                            if (delete t[a], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                                if ("show" !== i || !f || f[a] === o) continue;
                                m = !0
                            }
                            d[a] = f && f[a] || S.style(e, a)
                        } if (!S.isEmptyObject(d))
                        for (a in f ? "hidden" in f && (m = f.hidden) : f = P.access(e, "fxshow", {}), r && (f.hidden = !m), m ? S(e).show() : u.done(function() {
                                S(e).hide()
                            }), u.done(function() {
                                var t;
                                for (t in P.remove(e, "fxshow"), d) S.style(e, t, d[t])
                            }), d) s = Lt(m ? f[a] : 0, a, u), a in f || (f[a] = s.start, m && (s.end = s.start, s.start = "width" === a || "height" === a ? 1 : 0))
                }],
                Tt = {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            a = n.cur(),
                            i = wt.exec(t),
                            r = i && i[3] || (S.cssNumber[e] ? "" : "px"),
                            o = (S.cssNumber[e] || "px" !== r && +a) && wt.exec(S.css(n.elem, e)),
                            s = 1,
                            c = 20;
                        if (o && o[3] !== r) {
                            r = r || o[3], i = i || [], o = +a || 1;
                            do {
                                o /= s = s || ".5", S.style(n.elem, e, o + r)
                            } while (s !== (s = n.cur() / a) && 1 !== s && --c)
                        }
                        return i && (o = n.start = +o || +a || 0, n.unit = r, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };

            function St() {
                return setTimeout(function() {
                    yt = o
                }), yt = S.now()
            }

            function Lt(e, t, n) {
                for (var a, i = (Tt[t] || []).concat(Tt["*"]), r = 0, o = i.length; o > r; r++)
                    if (a = i[r].call(n, t, e)) return a
            }

            function Ct(e, t, n) {
                var a, i, r = 0,
                    o = xt.length,
                    s = S.Deferred().always(function() {
                        delete c.elem
                    }),
                    c = function() {
                        if (i) return !1;
                        for (var t = yt || St(), n = Math.max(0, l.startTime + l.duration - t), a = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(a);
                        return s.notifyWith(e, [l, a, n]), 1 > a && o ? n : (s.resolveWith(e, [l]), !1)
                    },
                    l = s.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: yt || St(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var a = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                            return l.tweens.push(a), a
                        },
                        stop: function(t) {
                            var n = 0,
                                a = t ? l.tweens.length : 0;
                            if (i) return this;
                            for (i = !0; a > n; n++) l.tweens[n].run(1);
                            return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
                        }
                    }),
                    u = l.props;
                for (function(e, t) {
                        var n, a, i, r, o;
                        for (n in e)
                            if (a = S.camelCase(n), i = t[a], r = e[n], S.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== a && (e[a] = r, delete e[n]), (o = S.cssHooks[a]) && "expand" in o)
                                for (n in r = o.expand(r), delete e[a], r) n in e || (e[n] = r[n], t[n] = i);
                            else t[a] = i
                    }(u, l.opts.specialEasing); o > r; r++)
                    if (a = xt[r].call(l, e, u, l.opts)) return a;
                return S.map(u, Lt, l), S.isFunction(l.opts.start) && l.opts.start.call(e, l), S.fx.timer(S.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function Ot(e, t, n, a, i) {
                return new Ot.prototype.init(e, t, n, a, i)
            }

            function Et(e, t) {
                var n, a = {
                        height: e
                    },
                    i = 0;
                for (t = t ? 1 : 0; 4 > i; i += 2 - t) a["margin" + (n = He[i])] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a
            }

            function qt(e) {
                return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
            }
            S.Animation = S.extend(Ct, {
                tweener: function(e, t) {
                    S.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, a = 0, i = e.length; i > a; a++) n = e[a], Tt[n] = Tt[n] || [], Tt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? xt.unshift(e) : xt.push(e)
                }
            }), S.Tween = Ot, Ot.prototype = {
                constructor: Ot,
                init: function(e, t, n, a, i, r) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (S.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Ot.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Ot.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Ot.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ot.propHooks._default.set(this), this
                }
            }, Ot.prototype.init.prototype = Ot.prototype, Ot.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                    },
                    set: function(e) {
                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[S.cssProps[e.prop]] || S.cssHooks[e.prop]) ? S.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, Ot.propHooks.scrollTop = Ot.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, S.each(["toggle", "show", "hide"], function(e, t) {
                var n = S.fn[t];
                S.fn[t] = function(e, a, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Et(t, !0), e, a, i)
                }
            }), S.fn.extend({
                fadeTo: function(e, t, n, a) {
                    return this.filter(Ue).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, a)
                },
                animate: function(e, t, n, a) {
                    var i = S.isEmptyObject(e),
                        r = S.speed(t, n, a),
                        o = function() {
                            var t = Ct(this, S.extend({}, e), r);
                            (i || P.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, i || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
                },
                stop: function(e, t, n) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = o), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            r = S.timers,
                            o = P.get(this);
                        if (i) o[i] && o[i].stop && a(o[i]);
                        else
                            for (i in o) o[i] && o[i].stop && kt.test(i) && a(o[i]);
                        for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                        (t || !n) && S.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = P.get(this),
                            a = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            r = S.timers,
                            o = a ? a.length : 0;
                        for (n.finish = !0, S.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; o > t; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), S.each({
                slideDown: Et("show"),
                slideUp: Et("hide"),
                slideToggle: Et("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                S.fn[e] = function(e, n, a) {
                    return this.animate(t, e, n, a)
                }
            }), S.speed = function(e, t, n) {
                var a = e && "object" == (void 0 === e ? "undefined" : i(e)) ? S.extend({}, e) : {
                    complete: n || !n && t || S.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !S.isFunction(t) && t
                };
                return a.duration = S.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in S.fx.speeds ? S.fx.speeds[a.duration] : S.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                    S.isFunction(a.old) && a.old.call(this), a.queue && S.dequeue(this, a.queue)
                }, a
            }, S.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, S.timers = [], S.fx = Ot.prototype.init, S.fx.tick = function() {
                var e, t = S.timers,
                    n = 0;
                for (yt = S.now(); t.length > n; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || S.fx.stop(), yt = o
            }, S.fx.timer = function(e) {
                e() && S.timers.push(e) && S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function() {
                bt || (bt = setInterval(S.fx.tick, S.fx.interval))
            }, S.fx.stop = function() {
                clearInterval(bt), bt = null
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fx.step = {}, S.expr && S.expr.filters && (S.expr.filters.animated = function(e) {
                return S.grep(S.timers, function(t) {
                    return e === t.elem
                }).length
            }), S.fn.offset = function(e) {
                if (arguments.length) return e === o ? this : this.each(function(t) {
                    S.offset.setOffset(this, e, t)
                });
                var t, n, a = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = a && a.ownerDocument;
                return s ? (t = s.documentElement, S.contains(t, a) ? (i(a.getBoundingClientRect) !== l && (r = a.getBoundingClientRect()), n = qt(s), {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r) : void 0
            }, S.offset = {
                setOffset: function(e, t, n) {
                    var a, i, r, o, s, c, l = S.css(e, "position"),
                        u = S(e),
                        d = {};
                    "static" === l && (e.style.position = "relative"), s = u.offset(), r = S.css(e, "top"), c = S.css(e, "left"), ("absolute" === l || "fixed" === l) && (r + c).indexOf("auto") > -1 ? (o = (a = u.position()).top, i = a.left) : (o = parseFloat(r) || 0, i = parseFloat(c) || 0), S.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + o), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : u.css(d)
                }
            }, S.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            a = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === S.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (a = e.offset()), a.top += S.css(e[0], "borderTopWidth", !0), a.left += S.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - a.top - S.css(n, "marginTop", !0),
                            left: t.left - a.left - S.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || p; e && !S.nodeName(e, "html") && "static" === S.css(e, "position");) e = e.offsetParent;
                        return e || p
                    })
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function(a) {
                    return S.access(this, function(e, a, i) {
                        var s = qt(e);
                        return i === o ? s ? s[t] : e[a] : (s ? s.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[a] = i, o)
                    }, e, a, arguments.length, null)
                }
            }), S.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                S.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, a) {
                    S.fn[a] = function(a, i) {
                        var r = arguments.length && (n || "boolean" != typeof a),
                            s = n || (!0 === a || !0 === i ? "margin" : "border");
                        return S.access(this, function(t, n, a) {
                            var i;
                            return S.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : a === o ? S.css(t, n, s) : S.style(t, n, a, s)
                        }, t, r ? a : o, r, null)
                    }
                })
            }), S.fn.size = function() {
                return this.length
            }, S.fn.andSelf = S.fn.addBack, "object" == i(e) && e && "object" == i(e.exports) ? e.exports = S : n(29) && (a = function() {
                return S
            }.apply(t, [])) !== o && (e.exports = a), "object" == (void 0 === r ? "undefined" : i(r)) && "object" == i(r.document) && (r.jQuery = r.$ = S)
        }(window)
    }).call(t, n(16)(e))
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(30),
        s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "counter",
                value: function(e) {
                    var t = new i("counter"),
                        n = new i("bottom-link"),
                        a = new i("icons").render({
                            icon: "uol"
                        }),
                        r = !1;
                    1 == e && (r = !0);
                    var o = t.render({
                            uol: a,
                            diffDay: e,
                            tomorrow: r
                        }),
                        s = !1;
                    return "coluna-3" != this.data.metrics.position && (s = {
                        text: "Tabela da Copa",
                        link: "https://esporte.uol.com.br/futebol/copa-do-mundo/tabela-da-copa/",
                        metrics: {
                            category: this.data.metrics.category,
                            area: this.data.metrics.area,
                            label: this.data.metrics.label + "-botao",
                            position: this.data.metrics.position
                        }
                    }), o += n.render(s)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e;
                        var s = "";
                        s += n.counter(n.data.diffDay);
                        var c = {
                            className: e.type + " card card_gutter",
                            key: e.key
                        };
                        r.render(s, "div", c).then(function() {
                            t && new o(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new s
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(31),
        r = n(2),
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, o) {
                        e || o(), n.data = e;
                        var s = {
                            className: "card",
                            key: e.key,
                            id: "HPE18-container",
                            candidatos: e.candidates,
                            status: e.status,
                            archived: !0,
                            turno: e.round,
                            js: !0
                        };
                        r.render(' <div id="HPE18"></div>  ', "article", s).then(function() {
                            t && new i(e), a()
                        }).catch(function(e) {
                            o(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new o
}, function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(1),
        o = n(2),
        s = n(0),
        c = n(39),
        l = n(9),
        u = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "iconRender",
                value: function(e) {
                    var t = new r("icons"),
                        n = "";
                    if ("icons" in e && "object" === a(e.icons) && !(e.icons.length < 1)) return e.icons.forEach(function(a) {
                        if (a.length) {
                            var i = {
                                icon: a,
                                ariaName: a in l ? l[a] : "",
                                styles: "color_prime fill_prime"
                            };
                            "comments" == a ? "commentsCount" in e && (i.label = e.commentsCount, e.section && (i.styles = "color_" + e.section + " fill_" + e.section), n += t.render(i)) : "photo" != a && "player" != a || (i.styles = e.styleIcon || "", n += t.render(i))
                        }
                    }), n
                }
            }, {
                key: "orderedList",
                value: function() {
                    var e = this,
                        t = new r("ordered-list"),
                        n = new r("see-later"),
                        a = {};
                    a.popularItens = this.data.collections;
                    var i = this.data.metrics.position || "item";
                    return a.popularItens.forEach(function(t, a) {
                        t.metrics = JSON.parse(JSON.stringify(e.data.metrics)), t.metrics.position = i + "-" + (a + 1);
                        var r = {};
                        r.showSeeLater = s.helpers.serviceStatus.seeLater, t.icons = e.iconRender(t), t.seeLater = n.render(r)
                    }), t.render(a)
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e;
                        var r = "";
                        r += n.orderedList();
                        var s = {
                            className: e.type + " card",
                            "data-key": e.key,
                            key: e.key
                        };
                        o.render(r, "article", s).then(function() {
                            t && new c(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new u
}, function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(0),
        s = n(41),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "sectionTitle",
                value: function() {
                    var e = new i("section-title"),
                        t = new i("icons"),
                        n = {},
                        a = document.querySelector("#icons svg symbol#brand-" + this.data.titleImg);
                    return n.section = this.data.section, n.link = this.data.link, n.stamp = this.banner(), n.worldcup = "worldcup" == this.data.section, this.data.titleImg && null != a ? (n.titleImg = t.render({
                        icon: "brand-" + this.data.titleImg,
                        ariaName: this.data.titleImg
                    }), n.classIcon = "sectionTitle_icon") : n.titleImg = '<span class="sectionTitle_text">' + this.data.kicker + "</span>", n.worldcup && (n.stamp = '<div class="banner" id="selo-120x35-copa-mobile"></div>', window.uolads && uolads.push({
                        id: "selo-120x35-copa-mobile"
                    })), e.render(n)
                }
            }, {
                key: "banner",
                value: function() {
                    return !!this.data.stamp && new i("banner").render({
                        section: this.data.stamp
                    })
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e;
                        var c = "";
                        c += n.sectionTitle();
                        var l = {
                            className: e.type + " card card_withoutBg " + e.section,
                            key: e.key,
                            "data-category": e.metrics.category,
                            "data-area": e.metrics.area,
                            "data-label": e.metrics.label,
                            "data-position": e.metrics.position
                        };
                        r.render(c, "div", l).then(function() {
                            var n = o.helpers.serviceStatus || {},
                                i = "virtualDom" in n ? n.virtualDom : null;
                            (t || !1 === i) && new s(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, , , function(e, t, n) {
    "use strict";
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }
        return function(t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t
        }
    }();
    var i = n(1),
        r = n(2),
        o = n(46),
        s = n(0),
        c = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return a(e, [{
                key: "render",
                value: function(e, t) {
                    return new Promise(function(n, a) {
                        var c = "";
                        e || a(), e.collections && e.collections.sort(function(e, t) {
                            return e.index - t.index
                        }), e.init = t;
                        var l = new i("thematic-title"),
                            u = {};
                        u.title = e.title || !1, u.section = e.section || !1, u.iconTitle = "", c += l.render(u), c += new i("survey").render(e);
                        var d = {
                            className: e.type + " card",
                            key: e.key
                        };
                        r.render(c, "", d).then(function() {
                            window.lazyload && window.lazyload.update();
                            var a = s.helpers.serviceStatus || {},
                                i = "virtualDom" in a ? a.virtualDom : null;
                            (t || !1 === i) && new o(e), n()
                        })
                    })
                }
            }]), e
        }();
    e.exports = new c
}, , , function(e, t, n) {
    "use strict";
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n), a && e(t, a), t
            }
        }();
    var r = n(1),
        o = n(2),
        s = new r("icons"),
        c = n(9),
        l = n(51),
        u = n(0),
        d = "banner-native-home-area-mobile",
        p = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "image",
                value: function(e) {
                    var t = new r("image");
                    return e.type = this.data.type, t.render(e)
                }
            }, {
                key: "IconRender",
                value: function(e) {
                    var t = new r("icons"),
                        n = {
                            cornerIcons: "",
                            icons: "",
                            comments: ""
                        };
                    return !("icons" in e) || "object" !== a(e.icons) || e.icons.length < 1 ? n : (e.icons.forEach(function(a) {
                        if (a.length) {
                            var i = {
                                icon: a,
                                ariaName: a in c ? c[a] : ""
                            };
                            "comments" == a ? "commentsCount" in e && (i.label = e.commentsCount, e.section && (i.styles = "color_" + e.section + " fill_" + e.section), n.comments += t.render(i)) : "photo" != a && "player" != a || (e.imageIcon ? (i.styles += " cornerIcon", n.cornerIcons += t.render(i)) : n.icons += t.render(i))
                        }
                    }), n)
                }
            }, {
                key: "thematicTitle",
                value: function() {
                    var e = new r("thematic-title"),
                        t = {};
                    if ("uolMyBusiness" == this.data.type || "uolSecurity" == this.data.type || "uolDiet" == this.data.type) {
                        if (t.uolLogo = {
                                icon: "uol_logo",
                                ariaName: "Logo do UOL"
                            }, t.uolText = {
                                icon: "uol",
                                ariaName: "UOL"
                            }, t.link = this.data.link || !1, "uolMyBusiness" == this.data.type) {
                            var n = new r("search-title"),
                                a = new r("icons"),
                                i = {};
                            i.icone = a.render({
                                icon: "search_magnifier"
                            }), i.placeholder = "buscar domínio", i.type = "myBusiness", i.textInput = "www.", i.ariaName = i.placeholder, t.search = n.render(i)
                        }
                        t.metrics = {}, t.metrics.label = "cabecalho-bloco", t.metrics.position = "topo-modulo", t.title = s.render(t.uolLogo) + s.render(t.uolText) + '<span class="title_' + this.data.type + '">' + this.data.title + "</span>" || !1, t.className = "thematicTitle_productUOL"
                    } else t.title = this.data.title || !1;
                    return t.section = this.data.section || !1, t.iconTitle = "", e.render(t)
                }
            }, {
                key: "seeLater",
                value: function() {
                    var e = new r("see-later"),
                        t = {};
                    return t.showSeeLater = u.helpers.serviceStatus.seeLater, e.render(t)
                }
            }, {
                key: "articleList",
                value: function() {
                    var e = new r("article-list"),
                        t = {};
                    return t.articleList = this.data.collections || [], t.articleList.forEach(function(e, t) {
                        e.section = this.data.section, e.imageIcon = this.data.imageIcon || !1;
                        var n = this.IconRender(e);
                        if (e.icons = n.icons, e.comments = n.comments, e.cornerIcons = n.cornerIcons, e.image = !!e.image && this.image(e.image), e.metrics = JSON.parse(JSON.stringify(this.data.metrics)) || {}, e.metrics.position) {
                            var a = e.metrics.position;
                            a.match(/^2colunas$/) && (a = "coluna-" + (t % 2 == 0 ? "4" : "5")), e.metrics.position = a + (a.match(/^(item|chamada|lista|6-chamadas)$/) ? "-" + (t + 1) : "")
                        }
                        e.seeLater = this.seeLater()
                    }, this), t.section = this.data.section || !1, this.data.collections ? e.render(t) : ""
                }
            }, {
                key: "hasNative",
                value: function(e) {
                    return !!e.key.match(/-lista(-thematic)?$/)
                }
            }, {
                key: "native",
                value: function() {
                    return new r("banner").render({
                        key: d,
                        section: d
                    })
                }
            }, {
                key: "render",
                value: function(e, t) {
                    var n = this;
                    return new Promise(function(a, i) {
                        e || i(), n.data = e;
                        var r = "",
                            s = "" + e.type;
                        r += n.thematicTitle(), r += n.articleList(), 1 == n.hasNative(n.data) && (r += n.native(), window.uolads && window.uolads.push({
                            id: d
                        }));
                        var c = {
                            className: s + " card card_gutter",
                            key: e.key,
                            "data-category": e.metrics.category,
                            "data-area": e.metrics.area,
                            "data-position": e.metrics.position
                        };
                        o.render(r, "section", c).then(function() {
                            t && new l(e), a()
                        }).catch(function(e) {
                            i(e)
                        })
                    })
                }
            }]), e
        }();
    e.exports = new p
}], [56]);