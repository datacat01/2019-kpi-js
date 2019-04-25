! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, o), a.l = !0, a.exports
    }
    o.m = e, o.c = t, o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) o.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 4)
}([function(e, t) {
    var o = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(","),
        n = function() {
            var e = new Map;
            return document.cookie.split(";").forEach(function(t) {
                e.set.apply(e, t.split("=").map(function(e) {
                    return e.trim()
                }))
            }), e
        },
        a = function(e) {
            return !0 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? "_uolab" + e : "_grandabc" + e
        },
        r = function(e, t) {
            return e + t
        },
        i = function(e, t) {
            return e.sum += t, e.arr.push(e.sum), e
        },
        s = function(e, t) {
            if (100 != e.reduce(r, 0)) throw new Error("[grand-abc] soma dos ranges diferente de 100");
            e = e.reduce(i, {
                arr: [],
                sum: 0
            }).arr;
            for (var n = Math.ceil(Math.ceil(1e4 * Math.random()) / 100), a = {}, s = 0; s < e.length; s++)
                if (n <= e[s]) {
                    a.range = s, a.value = t[s] || o[s];
                    break
                } return a
        },
        c = function(e) {
            window._uolablogs instanceof Array && window._uolablogs.push(e)
        };
    e.exports = function(e) {
        window._uolabtests = {}, window._uolablogs = [];
        for (var t = 0; t < e.length; t++) {
            var o = e[t],
                r = a(o.cookieName, o.sendToBackend),
                i = n();
            if (!0 !== o.forceRemoveCookie)
                if (!0 !== i.has(r))
                    if (o.startTest && new Date(o.startTest).getTime() > (new Date).getTime()) c("[".concat(o.cookieName, ":").concat(t, "] teste não inicializado"));
                    else if (new Date(o.stopTest).getTime() < (new Date).getTime()) c("[".concat(o.cookieName, ":").concat(t, "] teste finalizado"));
            else if (!1 !== o.domainMatch.test(location.hostname))
                if (!1 !== o.pathMatch.test(location.pathname))
                    if ("function" != typeof o.condition || !1 !== o.condition({
                            test: o,
                            userCookies: i
                        })) {
                        var u = s(o.testRanges, o.testValues);
                        document.cookie = [r + "=" + u.value, "expires=" + new Date(o.cookieExpires).toUTCString(), "domain=" + location.hostname, "path=" + o.cookiePath].join("; "), window._uolabtests[o.cookieName] = u.value, c("[".concat(o.cookieName, ":").concat(t, "] teste ativo encontrado, valor sorteado para o usuário: ").concat(u.value))
                    } else c("[".concat(o.cookieName, ":").concat(t, "] condição não passou"));
            else c("[".concat(o.cookieName, ":").concat(t, "] pathname não bate com configuração"));
            else c("[".concat(o.cookieName, ":").concat(t, "] hostname não bate com configuração"));
            else c("[".concat(o.cookieName, ":").concat(t, "] usuário já participa do teste")), window._uolabtests[o.cookieName] = i.get(r);
            else c("[".concat(o.cookieName, ":").concat(t, "] removendo cookie")), l = r, p = o.cookiePath, document.cookie = [l + "=", "expires=Thu, 01 Jan 1970 00:00:00 UTC", "domain=" + location.hostname, "path=" + p].join("; ")
        }
        var l, p
    }
}, , , , function(e, t, o) {
    o(0)(o(5))
}, function(e, t, o) {
    var n = o(6);
    e.exports = [{
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-universa", "publico-universa"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.universa && 0 == t.esporte
        },
        cookieName: "CTD006",
        startTest: "2019-03-15T17:30:00.000Z",
        stopTest: "2019-03-23T02:59:59.000Z",
        cookieExpires: "2019-03-23T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-entretenimento", "publico-entretenimento"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.entretenimento && 0 == t.esporte && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-15T17:30:00.000Z",
        stopTest: "2019-03-23T02:59:59.000Z",
        cookieExpires: "2019-03-23T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-noticias", "publico-noticias"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.noticias && 0 == t.entretenimento && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-15T17:30:00.000Z",
        stopTest: "2019-03-23T02:59:59.000Z",
        cookieExpires: "2019-03-23T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-universa", "publico-universa"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.universa && 0 == t.esporte
        },
        cookieName: "CTD006",
        startTest: "2019-03-23T03:00:00.000Z",
        stopTest: "2019-03-30T02:59:59.000Z",
        cookieExpires: "2019-03-30T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-entretenimento", "publico-entretenimento"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.entretenimento && 0 == t.esporte && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-23T03:00:00.000Z",
        stopTest: "2019-03-30T02:59:59.000Z",
        cookieExpires: "2019-03-30T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-noticias", "publico-noticias"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.noticias && 0 == t.entretenimento && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-23T03:00:00.000Z",
        stopTest: "2019-03-30T02:59:59.000Z",
        cookieExpires: "2019-03-30T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-universa", "publico-universa"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.universa && 0 == t.esporte
        },
        cookieName: "CTD006",
        startTest: "2019-03-30T03:00:00.000Z",
        stopTest: "2019-04-06T02:59:59.000Z",
        cookieExpires: "2019-04-06T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-entretenimento", "publico-entretenimento"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.entretenimento && 0 == t.esporte && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-30T03:00:00.000Z",
        stopTest: "2019-04-06T02:59:59.000Z",
        cookieExpires: "2019-04-06T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-noticias", "publico-noticias"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.noticias && 0 == t.entretenimento && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-03-30T03:00:00.000Z",
        stopTest: "2019-04-06T02:59:59.000Z",
        cookieExpires: "2019-04-06T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-universa", "publico-universa"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.universa && 0 == t.esporte
        },
        cookieName: "CTD006",
        startTest: "2019-04-06T03:00:00.000Z",
        stopTest: "2019-04-13T02:59:59.000Z",
        cookieExpires: "2019-04-13T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-entretenimento", "publico-entretenimento"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.entretenimento && 0 == t.esporte && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-04-06T03:00:00.000Z",
        stopTest: "2019-04-13T02:59:59.000Z",
        cookieExpires: "2019-04-13T02:59:59.000Z"
    }, {
        domainMatch: /^(www|home)\.uol\.com\.br$/,
        pathMatch: /.*/,
        cookiePath: "/",
        testRanges: [50, 50],
        testValues: ["padrao-noticias", "publico-noticias"],
        condition: function(e) {
            var t = n.abTest006_GetUserCluster(e.userInterests);
            return 1 == t.noticias && 0 == t.entretenimento && 0 == t.universa
        },
        cookieName: "CTD006",
        startTest: "2019-04-06T03:00:00.000Z",
        stopTest: "2019-04-13T02:59:59.000Z",
        cookieExpires: "2019-04-13T02:59:59.000Z"
    }]
}, function(e, t) {
    function o(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var o = [],
                n = !0,
                a = !1,
                r = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (o.push(i.value), !t || o.length !== t); n = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (a) throw r
                }
            }
            return o
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    t.abTest006_GetUserCluster = function() {
        var e = new Map([
                ["CA7245", "esporte"],
                ["MS11", "entretenimento"],
                ["18", "noticias"],
                ["50", "noticias"],
                ["46", "noticias"],
                ["CA10033", "universa"],
                ["CA7242", "universa"],
                ["CA9990", "universa"],
                ["CA9991", "universa"]
            ]),
            t = {
                esporte: !1,
                entretenimento: !1,
                noticias: !1,
                universa: !1
            },
            n = !0,
            a = !1,
            r = void 0;
        try {
            for (var i, s = e.entries()[Symbol.iterator](); !(n = (i = s.next()).done); n = !0) {
                var c = o(i.value, 2),
                    u = c[0],
                    l = c[1];
                1 == TTUser.hasInterest(u) && (t[l] = !0)
            }
        } catch (e) {
            a = !0, r = e
        } finally {
            try {
                n || null == s.return || s.return()
            } finally {
                if (a) throw r
            }
        }
        return t
    }
}]);