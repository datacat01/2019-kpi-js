/* luminateExtend.js | Version: 1.8.1 (18-OCT-2016) */ ! function(a) {
    var b = function(b) {
            return b && a.inArray(b, ["es_US", "en_CA", "fr_CA", "en_GB", "en_AU"]) < 0 && (b = "en_US"), b
        },
        c = function(a) {
            return a && (a = b(a), luminateExtend.sessionVars.set("locale", a)), a
        },
        d = function(a, b) {
            return (a ? luminateExtend.global.path.secure + "S" : luminateExtend.global.path.nonsecure) + "PageServer" + (luminateExtend.global.routingId && "" !== luminateExtend.global.routingId ? ";" + luminateExtend.global.routingId : "") + "?pagename=luminateExtend_server&pgwrap=n" + (b ? "&" + b : "")
        },
        e = function(b, c) {
            if (b.responseFilter && b.responseFilter.array && b.responseFilter.filter && luminateExtend.utils.stringToObj(b.responseFilter.array, c)) {
                var e, f, d = b.responseFilter.filter.split("==")[0].split("!=")[0].replace(/^\s+|\s+$/g, "");
                if (b.responseFilter.filter.indexOf("!=") !== -1 ? (e = "nequal", f = b.responseFilter.filter.split("!=")[1]) : b.responseFilter.filter.indexOf("==") !== -1 && (e = "equal", f = b.responseFilter.filter.split("==")[1]), e && f) {
                    f = f.replace(/^\s+|\s+$/g, "");
                    var g = [],
                        h = !1;
                    if (a.each(luminateExtend.utils.ensureArray(luminateExtend.utils.stringToObj(b.responseFilter.array, c)), function() {
                            "nequal" === e && this[d] === f || "equal" === e && this[d] !== f ? h = !0 : g.push(this)
                        }), h) {
                        var i = b.responseFilter.array.split(".");
                        a.each(c, function(b, d) {
                            b === i[0] && a.each(d, function(d, e) {
                                d === i[1] && (2 === i.length ? c[b][d] = g : a.each(e, function(e, f) {
                                    e === i[2] && (3 === i.length ? c[b][d][e] = g : a.each(f, function(a, f) {
                                        a === i[3] && 4 === i.length && (c[b][d][e][a] = g)
                                    }))
                                }))
                            })
                        })
                    }
                }
            }
            var j = a.noop;
            b.callback && ("function" == typeof b.callback ? j = b.callback : b.callback.error && c.errorResponse ? j = b.callback.error : b.callback.success && !c.errorResponse && (j = b.callback.success));
            var k = b.data.indexOf("&method=login") !== -1 && b.data.indexOf("&method=loginTest") === -1,
                l = b.data.indexOf("&method=logout") !== -1;
            if (k || l) {
                var m = function() {
                        j(c)
                    },
                    n = {
                        callback: m,
                        useCache: !1,
                        useHTTPS: b.useHTTPS
                    };
                k && c.loginResponse && c.loginResponse.nonce && (n.nonce = "NONCE_TOKEN=" + c.loginResponse.nonce), luminateExtend.api.getAuth(n)
            } else j(c)
        };
    window.luminateExtend = function(a) {
        luminateExtend.init(a || {})
    }, luminateExtend.library = {
        version: "1.7.1"
    }, luminateExtend.global = {
        update: function(b, d) {
            b && (b.length ? d && ("locale" === b && (d = c(d)), luminateExtend.global[b] = d) : (b.locale && (b.locale = c(b.locale)), luminateExtend.global = a.extend(luminateExtend.global, b)))
        }
    }, luminateExtend.init = function(c) {
        var d = a.extend({
            apiCommon: {},
            auth: {
                type: "auth"
            },
            path: {}
        }, c || {});
        if (d.locale && (d.locale = b(d.locale)), d.supportsCORS = !1, window.XMLHttpRequest) {
            var e = new XMLHttpRequest;
            "withCredentials" in e && (d.supportsCORS = !0)
        }
        return luminateExtend.global = a.extend(luminateExtend.global, d), luminateExtend
    }, luminateExtend.api = function(a) {
        luminateExtend.api.request(a || {})
    }, luminateExtend.api.bind = function(b) {
        return b = b || "form.luminateApi", a(b).length > 0 && a(b).each(function() {
            "form" === this.nodeName.toLowerCase() && a(this).bind("submit", function(b) {
                b.cancelBubble = !0, b.returnValue = !1, b.stopPropagation && (b.stopPropagation(), b.preventDefault()), a(this).attr("id") || a(this).attr("id", "luminateApi-" + (new Date).getTime());
                var g, c = a(this).attr("action"),
                    d = c.split("?"),
                    e = a(this).data("luminateapi"),
                    f = d[0].indexOf("/site/") !== -1 ? d[0].split("/site/")[1] : d[0],
                    h = a(this).attr("enctype"),
                    i = d.length > 1 ? d[1] : "",
                    j = "#" + a(this).attr("id"),
                    k = !1,
                    l = !1;
                e && (e.callback && (g = luminateExtend.utils.stringToObj(e.callback)), e.requiresAuth && "true" === e.requiresAuth && (k = !0), (0 === c.indexOf("https:") || "https:" === window.location.protocol && c.indexOf("http") === -1) && (l = !0)), luminateExtend.api.request({
                    api: f,
                    callback: g,
                    contentType: h,
                    data: i,
                    form: j,
                    requiresAuth: k,
                    useHTTPS: l
                })
            })
        }), luminateExtend
    }, luminateExtend.api.getAuth = function(b) {
        var c = a.extend({
            useCache: !0,
            useHTTPS: !1
        }, b || {});
        if (luminateExtend.api.getAuthLoad)
            if (luminateExtend.api.getAuthLoad = !1, c.useCache && luminateExtend.global.auth.type && luminateExtend.global.auth.token) luminateExtend.api.getAuthLoad = !0, c.callback && c.callback();
            else {
                var e = function(a) {
                    luminateExtend.global.update(a), luminateExtend.api.getAuthLoad = !0, c.callback && c.callback()
                };
                luminateExtend.global.supportsCORS ? a.ajax({
                    url: (c.useHTTPS ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) + "CRConsAPI",
                    data: "luminateExtend=" + luminateExtend.library.version + (c.nonce && "" !== c.nonce ? "&" + c.nonce : "") + "&api_key=" + luminateExtend.global.apiKey + "&method=getLoginUrl&response_format=json&v=1.0",
                    xhrFields: {
                        withCredentials: !0
                    },
                    dataType: "json",
                    success: function(a) {
                        var b = a.getLoginUrlResponse,
                            c = b.url,
                            d = b.routing_id,
                            f = b.JSESSIONID;
                        d || c.indexOf("CRConsAPI;jsessionid=") === -1 || (d = c.split("CRConsAPI;jsessionid=")[1].split("?")[0]), e({
                            auth: {
                                type: "auth",
                                token: b.token
                            },
                            routingId: d ? "jsessionid=" + d : "",
                            sessionCookie: f ? "JSESSIONID=" + f : ""
                        })
                    }
                }) : a.ajax({
                    url: d(c.useHTTPS, "action=getAuth&callback=?"),
                    dataType: "jsonp",
                    success: e
                })
            }
        else {
            var f = function() {
                luminateExtend.api.getAuth(c)
            };
            setTimeout(f, 1e3)
        }
    }, luminateExtend.api.getAuthLoad = !0;
    var f = function(b) {
        var c = a.extend({
                contentType: "application/x-www-form-urlencoded",
                data: "",
                requiresAuth: !1,
                useHTTPS: null
            }, b || {}),
            f = ["addressbook", "advocacy", "connect", "cons", "content", "datasync", "donation", "email", "group", "orgevent", "recurring", "survey", "teamraiser"];
        if (a.inArray(c.api.toLowerCase(), f) >= 0 && (c.api = "CR" + c.api.charAt(0).toUpperCase() + c.api.slice(1).toLowerCase() + "API", c.api = c.api.replace("Addressbook", "AddressBook").replace("Datasync", "DataSync").replace("Orgevent", "OrgEvent")), luminateExtend.global.path.nonsecure && luminateExtend.global.path.secure && luminateExtend.global.apiKey && c.api) {
            "multipart/form-data" === c.contentType.split(";")[0] ? c.contentType = "multipart/form-data" : c.contentType = "application/x-www-form-urlencoded", c.contentType += "; charset=UTF-8", c.data = "luminateExtend=" + luminateExtend.library.version + ("" === c.data ? "" : "&" + c.data), c.form && a(c.form).length > 0 && (c.data += "&" + a(c.form).eq(0).serialize()), c.data.indexOf("&api_key=") === -1 && (c.data += "&api_key=" + luminateExtend.global.apiKey), luminateExtend.global.apiCommon.centerId && c.data.indexOf("&center_id=") === -1 && (c.data += "&center_id=" + luminateExtend.global.apiCommon.centerId), luminateExtend.global.apiCommon.categoryId && c.data.indexOf("&list_category_id=") === -1 && (c.data += "&list_category_id=" + luminateExtend.global.apiCommon.categoryId), c.data.indexOf("&response_format=xml") !== -1 ? c.data = c.data.replace(/&response_format=xml/g, "&response_format=json") : c.data.indexOf("&response_format=") === -1 && (c.data += "&response_format=json"), luminateExtend.global.apiCommon.source && c.data.indexOf("&source=") === -1 && (c.data += "&source=" + luminateExtend.global.apiCommon.source), luminateExtend.global.apiCommon.subSource && c.data.indexOf("&sub_source=") === -1 && (c.data += "&sub_source=" + luminateExtend.global.apiCommon.subSource), c.data.indexOf("&suppress_response_codes=") === -1 && (c.data += "&suppress_response_codes=true"), luminateExtend.global.locale && c.data.indexOf("&s_locale=") === -1 && (c.data += "&s_locale=" + luminateExtend.global.locale), c.data.indexOf("&v=") === -1 && (c.data += "&v=1.0");
            var g = "http://",
                h = luminateExtend.global.path.nonsecure.split("http://")[1];
            "CRDonationAPI" === c.api || "CRTeamraiserAPI" === c.api || "CRConnectAPI" !== c.api && ("https:" === window.location.protocol && null == c.useHTTPS || 1 == c.useHTTPS) ? c.useHTTPS = !0 : c.useHTTPS = !1, c.useHTTPS && (g = "https://", h = luminateExtend.global.path.secure.split("https://")[1]), g += h + c.api;
            var i = !1,
                j = !1,
                k = !1;
            window.location.protocol === g.split("//")[0] && document.domain === h.split("/")[0] ? (i = !0, j = !0) : luminateExtend.global.supportsCORS ? j = !0 : "postMessage" in window && (k = !0);
            var l;
            j ? l = function() {
                luminateExtend.global.routingId && "" !== luminateExtend.global.routingId && (g += ";" + luminateExtend.global.routingId), c.requiresAuth && c.data.indexOf("&" + luminateExtend.global.auth.type + "=") === -1 && (c.data += "&" + luminateExtend.global.auth.type + "=" + luminateExtend.global.auth.token), luminateExtend.global.sessionCookie && "" !== luminateExtend.global.sessionCookie && (c.data += "&" + luminateExtend.global.sessionCookie), c.data += "&ts=" + (new Date).getTime(), a.ajax({
                    url: g,
                    data: c.data,
                    xhrFields: {
                        withCredentials: !0
                    },
                    contentType: c.contentType,
                    dataType: "json",
                    type: "POST",
                    success: function(a) {
                        e(c, a)
                    }
                })
            } : k && (l = function() {
                var b = (new Date).getTime(),
                    f = "luminateApiPostMessage" + b,
                    h = d(c.useHTTPS, "action=postMessage");
                luminateExtend.global.routingId && "" !== luminateExtend.global.routingId && (g += ";" + luminateExtend.global.routingId), c.requiresAuth && c.data.indexOf("&" + luminateExtend.global.auth.type + "=") === -1 && (c.data += "&" + luminateExtend.global.auth.type + "=" + luminateExtend.global.auth.token), luminateExtend.global.sessionCookie && "" !== luminateExtend.global.sessionCookie && (c.data += "&" + luminateExtend.global.sessionCookie), c.data += "&ts=" + b, luminateExtend.api.request.postMessageEventHandler || (luminateExtend.api.request.postMessageEventHandler = {}, luminateExtend.api.request.postMessageEventHandler.handler = function(b) {
                    if (luminateExtend.global.path.nonsecure.indexOf(b.origin) !== -1 || luminateExtend.global.path.secure.indexOf(b.origin) !== -1) {
                        var c = a.parseJSON(b.data),
                            d = c.postMessageFrameId,
                            e = a.parseJSON(decodeURIComponent(c.response));
                        luminateExtend.api.request.postMessageEventHandler[d] && luminateExtend.api.request.postMessageEventHandler[d](d, e)
                    }
                }, "undefined" != typeof window.addEventListener ? window.addEventListener("message", luminateExtend.api.request.postMessageEventHandler.handler, !1) : "undefined" != typeof window.attachEvent && window.attachEvent("onmessage", luminateExtend.api.request.postMessageEventHandler.handler)), luminateExtend.api.request.postMessageEventHandler[f] = function(b, d) {
                    e(c, d), a("#" + b).remove(), delete luminateExtend.api.request.postMessageEventHandler[b]
                }, a("body").append('<iframe style="position: absolute; top: 0; left: -999em;" name="' + f + '" id="' + f + '"></iframe>'), a("#" + f).bind("load", function() {
                    var b = '{"postMessageFrameId": "' + a(this).attr("id") + '", "requestUrl": "' + g + '", "requestContentType": "' + c.contentType + '", "requestData": "' + c.data + '"}',
                        d = g.split("/site/")[0].split("/admin/")[0];
                    document.getElementById(a(this).attr("id")).contentWindow.postMessage(b, d)
                }), a("#" + f).attr("src", h)
            }), c.requiresAuth || !j && !i && !luminateExtend.global.sessionCookie ? luminateExtend.api.getAuth({
                callback: l,
                useHTTPS: c.useHTTPS
            }) : l()
        }
    };
    luminateExtend.api.request = function(b) {
        if (a.isArray(b)) {
            b.reverse();
            var c = [];
            a.each(b, function(d) {
                var e = a.extend({
                    async: !0
                }, this);
                if (e.async || d === b.length - 1) c.push(e);
                else {
                    var g = b[d + 1];
                    if (g.callback && "function" != typeof g.callback) {
                        var h = g.callback.success || a.noop;
                        g.callback.success = function(a) {
                            h(a), f(e)
                        }
                    } else {
                        var g = b[d + 1],
                            i = g.callback || a.noop;
                        g.callback = {
                            success: function(a) {
                                i(a), f(e)
                            },
                            error: function(a) {
                                i(a)
                            }
                        }
                    }
                }
            }), c.reverse(), a.each(c, function() {
                f(this)
            })
        } else f(b)
    }, luminateExtend.sessionVars = {
        set: function(a, b, c) {
            var d = {};
            c && (d.callback = c), a && (d.data = "s_" + a + "=" + (b || ""), luminateExtend.utils.ping(d))
        }
    }, luminateExtend.tags = function(a, b) {
        luminateExtend.tags.parse(a, b)
    }, luminateExtend.tags.parse = function(b, c) {
        luminateExtend.widgets ? luminateExtend.widgets(b, c) : (b = b && "all" !== b ? luminateExtend.utils.ensureArray(b) : ["cons"], c = c || "body", a.each(b, function(b, d) {
            if ("cons" === d) {
                var e = a(c).find(document.getElementsByTagName("luminate:cons"));
                if (e.length > 0) {
                    var f = function(b) {
                        e.each(function() {
                            b.getConsResponse ? a(this).replaceWith(luminateExtend.utils.stringToObj(a(this).attr("field"), b.getConsResponse)) : a(this).remove()
                        })
                    };
                    luminateExtend.api.request({
                        api: "cons",
                        callback: f,
                        data: "method=getUser",
                        requiresAuth: !0
                    })
                }
            }
        }))
    }, luminateExtend.utils = {
        ensureArray: function(b) {
            return a.isArray(b) ? b : b ? [b] : []
        },
        stringToObj: function(a, b) {
            var c = b || window;
            if (a)
                for (var d = a.split("."), e = 0; e < d.length; e++) {
                    if (e < d.length - 1 && !c[d[e]]) return {};
                    c = c[d[e]]
                }
            return c
        },
        ping: function(b) {
            var c = a.extend({
                    data: null
                }, b || {}),
                d = "luminatePing" + (new Date).getTime();
            a("body").append('<img style="position: absolute; left: -999em; top: 0;" id="' + d + '" />'), a("#" + d).bind("load", function() {
                a(this).remove(), c.callback && c.callback()
            }), a("#" + d).attr("src", ("https:" === window.location.protocol ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) + "EstablishSession" + (luminateExtend.global.routingId && "" !== luminateExtend.global.routingId ? ";" + luminateExtend.global.routingId : "") + "?" + (null == c.data ? "" : c.data + "&") + "NEXTURL=" + encodeURIComponent(("https:" === window.location.protocol ? luminateExtend.global.path.secure : luminateExtend.global.path.nonsecure) + "PixelServer"))
        },
        simpleDateFormat: function(c, d, e) {
            if (e = e || luminateExtend.global.locale, e = b(e), d = d || (a.inArray(e, ["en_CA", "fr_CA", "en_GB", "en_AU"]) >= 0 ? "d/M/yy" : "M/d/yy"), c = c || new Date, !(c instanceof Date)) {
                var f = c.split("T")[0].split("-"),
                    g = c.split("T").length > 1 ? c.split("T")[1].split(".")[0].split("Z")[0].split("-")[0].split(":") : ["00", "00", "00"];
                c = new Date(f[0], f[1] - 1, f[2], g[0], g[1], g[2])
            }
            var h = function(a) {
                    return a = "" + a, 0 === a.indexOf("0") && "0" !== a ? a.substring(1) : a
                },
                i = function(a) {
                    return a = Number(a), isNaN(a) ? "00" : (a < 10 ? "0" : "") + a
                },
                j = {
                    month: i(c.getMonth() + 1),
                    date: i(c.getDate()),
                    year: i(c.getFullYear()),
                    day: c.getDay(),
                    hour24: c.getHours(),
                    hour12: c.getHours(),
                    minutes: i(c.getMinutes()),
                    ampm: "AM"
                };
            j.hour24 > 11 && (j.ampm = "PM"), j.hour24 = i(j.hour24), 0 === j.hour12 && (j.hour12 = 12), j.hour12 > 12 && (j.hour12 = j.hour12 - 12), j.hour12 = i(j.hour12);
            var k, l = function(a) {
                var b = a.replace(/yy+(?=y)/g, "yy").replace(/MMM+(?=M)/g, "MMM").replace(/d+(?=d)/g, "d").replace(/EEE+(?=E)/g, "EEE").replace(/a+(?=a)/g, "").replace(/k+(?=k)/g, "k").replace(/h+(?=h)/g, "h").replace(/m+(?=m)/g, "m"),
                    c = b.replace(/yyy/g, j.year).replace(/yy/g, j.year.substring(2)).replace(/y/g, j.year).replace(/dd/g, j.date).replace(/d/g, h(j.date)),
                    d = function(a, b, c) {
                        for (var d = 1; d < a.length; d++)
                            if (!isNaN(a[d].substring(0, 1))) {
                                var e = a[d].substring(0, 2);
                                a[d] = a[d].substring(2), isNaN(e.substring(1)) && (a[d] = e.substring(1) + a[d], e = e.substring(0, 1)), e = Number(e), e > 23 && (e = 23);
                                var f = "+" === c ? e : 0 - e;
                                "kk" === b || "k" === b ? (f = Number(j.hour24) + f, f > 24 ? f -= 24 : f < 0 && (f += 24)) : (f = Number(j.hour12) + f, f > 24 ? f -= 24 : f < 0 && (f += 24), f > 12 && (f -= 12)), f = "" + f, "kk" !== b && "hh" !== b || (f = i(f)), ("h" === b && 0 === f || "hh" === b && "00" === f) && (f = "12"), a[d] = f + a[d]
                            } return a.join("")
                    };
                c.indexOf("k+") !== -1 && (c = d(c.split("kk+"), "kk", "+"), c = d(c.split("k+"), "k", "+")), c.indexOf("k-") !== -1 && (c = d(c.split("kk-"), "kk", "-"), c = d(c.split("k-"), "k", "-")), c = c.replace(/kk/g, j.hour24).replace(/k/g, h(j.hour24)), c.indexOf("h+") !== -1 && (c = d(c.split("hh+"), "hh", "+"), c = d(c.split("h+"), "h", "+")), c.indexOf("h-") !== -1 && (c = d(c.split("hh-"), "hh", "-"), c = d(c.split("h-"), "h", "-")), c = c.replace(/hh/g, j.hour12 < 12 && j.hour12.indexOf && 0 !== j.hour12.indexOf("0") ? "0" + j.hour12 : j.hour12).replace(/h/g, h(j.hour12)), c = c.replace(/mm/g, j.minutes).replace(/m/g, h(j.minutes)), c = c.replace(/a/g, "A");
                var f = ["January", "February", "march", "april", "may", "June", "July", "august", "September", "October", "November", "December"];
                "es_US" === e && (f = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]), "fr_CA" === e && (f = ["janvier", "f&#233;vrier", "mars", "avril", "mai", "juin", "juillet", "ao&#251;t", "septembre", "octobre", "novembre", "d&#233;cembre"]), c = c.replace(/MMMM/g, f[Number(j.month) - 1]).replace(/MMM/g, f[Number(j.month) - 1].substring(0, 3)).replace(/MM/g, j.month).replace(/M/g, h(j.month)).replace(/march/g, "March").replace(/may/g, "May").replace(/Mayo/g, "mayo");
                var g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                return "es_US" === e && (g = ["domingo", "lunes", "martes", "mi&eacute;rcoles", "jueves", "viernes", "s&aacute;bado"]), "fr_CA" === e && (g = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]), c = c.replace(/EEEE/g, g[j.day]).replace(/EEE/g, g[j.day].substring(0, 3)).replace(/EE/g, g[j.day].substring(0, 3)).replace(/E/g, g[j.day].substring(0, 3)), c = c.replace(/A/g, j.ampm).replace(/april/g, "April").replace(/august/g, "August")
            };
            if (d.indexOf("'") !== -1) {
                var m = d.replace(/\'+(?=\')/g, "''").split("''");
                if (1 === m.length) {
                    m = d.split("'");
                    for (var n = 0; n < m.length; n++) n % 2 === 0 && (m[n] = l(m[n]));
                    return m.join("")
                }
                for (var n = 0; n < m.length; n++) {
                    for (var o = m[n].split("'"), p = 0; p < o.length; p++) p % 2 === 0 && (o[p] = l(o[p]));
                    m[n] = o.join("")
                }
                return m.join("'")
            }
            return k = l(d)
        }
    }
}("undefined" == typeof jQuery && "function" == typeof Zepto ? Zepto : jQuery);