var CopterConnect = function() {
    function d(e) {
        var t, n, r, o, i, a, c, s, p, u, d, l, m, f, h, y = "",
            C = "",
            _ = e.navigator;
        return _.userAgent && (C = (y = _.userAgent || "").toLowerCase()), n = y, r = C, o = _.appName, i = _.appVersion, (a = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/7\.))\/?\s*((\d+)(?:\.\d+)*)/i) || []) ? (s = a[1].toLowerCase(), p = a[2], "msie" === s ? s = "ie" : "trident" === s ? (s = "ie", p = (c = /\brv[ :]+((\d+)(?:\.\d+)*)/g.exec(n) || ["", "", ""])[1]) : "chrome" === s && null !== (c = n.match(/\b(OPR|Edge)\/((\d+)(?:\.\d+)*)/)) ? (s = (s = c[1].toLowerCase()).replace("opr", "opera"), p = c[2]) : null !== (c = r.match(/version\/((\d+)(?:\.\d+)*)/)) && (p = c[1])) : (s = o.toLowerCase(), (p = i || null) && null !== (c = p.match(/^((\d+)(?:\.\d+)*)/)) && (p = c[0])), {
            browser: (t = {
                browser: s,
                version: p
            }).browser,
            version: t.version,
            majorVersion: parseInt(t.version.replace(/\..+$/, "")),
            isMacintosh: (h = C, -1 !== h.indexOf("macintosh")),
            macOSXVersion: (m = C, f = m.match(/mac os x (\d+)[_.](\d+)+/), f ? parseInt(f[2]) : -1),
            isFullScreen: (l = e, l.outerWidth === l.screen.width && l.outerHeight === l.screen.height),
            isMobile: (d = y, !!d.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Silk/i)),
            isBot: (u = y, !!u.match(/GomezAgent/i))
        }
    }
    var l = [
        ["property", "PHXTHES"],
        ["property", "PHXSPPR"],
        ["property", "SAOMOHH"],
        ["property", "JOSE-DT"],
        ["property", "OAKHIHH"],
        ["property", "ONTO-DT"],
        ["property", "RLSC-DT"],
        ["property", "SBAMCDT"],
        ["property", "SDGO-DT"],
        ["property", "SFOFHHH"],
        ["property", "SFOSFHH"],
        ["property", "SJCCCQQ"],
        ["property", "RLDU-DT"],
        ["property", "WASDNES"],
        ["property", "EYWCMWA"],
        ["property", "EYWRRWA"],
        ["property", "MIAAHHH"],
        ["property", "ORLBCWA"],
        ["property", "ORLDWHH"],
        ["property", "ORLHHHH"],
        ["property", "ATLAAHH"],
        ["property", "HNLHVHH"],
        ["property", "KOAHWHH"],
        ["property", "CHICHHH"],
        ["property", "CHIOHHH"],
        ["property", "MSYAHHH"],
        ["property", "MSYNHHH"],
        ["property", "BOSLHHH"],
        ["property", "MKCWEES"],
        ["property", "EWRSHHH"],
        ["property", "PRNNJES"],
        ["property", "LASCHDT"],
        ["property", "NYCNHHH"],
        ["property", "SJNHIHH"],
        ["property", "AUSLKES"],
        ["property", "SLCCCHH"],
        ["property", "DCAAEDT"],
        ["property", "MCLMHHH"],
        ["property", "CTAC-DT"],
        ["property", "SEAAHHH"],
        ["property", "SPCC-DT"]
    ];
    "string" == typeof l && (l = [].concat([
        ["property", "CTYHOCN"],
        ["property", "PHXTHES"],
        ["property", "PHXSPPR"],
        ["property", "SAOMOHH"],
        ["property", "JOSE-DT"],
        ["property", "OAKHIHH"],
        ["property", "ONTO-DT"],
        ["property", "RLSC-DT"],
        ["property", "SBAMCDT"],
        ["property", "SDGO-DT"],
        ["property", "SFOFHHH"],
        ["property", "SFOSFHH"],
        ["property", "SJCCCQQ"],
        ["property", "RLDU-DT"],
        ["property", "WASDNES"],
        ["property", "EYWCMWA"],
        ["property", "EYWRRWA"],
        ["property", "MIAAHHH"],
        ["property", "ORLBCWA"],
        ["property", "ORLDWHH"],
        ["property", "ORLHHHH"],
        ["property", "ATLAAHH"],
        ["property", "HNLHVHH"],
        ["property", "KOAHWHH"],
        ["property", "CHICHHH"],
        ["property", "CHIOHHH"],
        ["property", "MSYAHHH"],
        ["property", "MSYNHHH"],
        ["property", "BOSLHHH"],
        ["property", "MKCWEES"],
        ["property", "EWRSHHH"],
        ["property", "PRNNJES"],
        ["property", "LASCHDT"],
        ["property", "NYCNHHH"],
        ["property", "SJNHIHH"],
        ["property", "AUSLKES"],
        ["property", "SLCCCHH"],
        ["property", "DCAAEDT"],
        ["property", "MCLMHHH"],
        ["property", "CTAC-DT"],
        ["property", "SEAAHHH"],
        ["property", "SPCC-DT"]
    ]));
    var m, f = d(window),
        n = {
            or: function(e, t) {
                for (var n = 0, r = 0; r < e.length; r++) h(e[r], t) && n++;
                return 0 < n
            },
            and: function(e, t) {
                for (var n = 0, r = 0; r < e.length; r++) h(e[r], t) && n++;
                return n == e.length
            },
            property: function(e, t) {
                return e == t.property_id
            },
            "browser-name": function(e) {
                return e == f.browser
            },
            "browser-major-version": function(e) {
                var t = (e + "").match(/(=|<|>)?(\d+)/),
                    n = parseInt(t[2]);
                return ">" == t[1] ? n < f.majorVersion : "<" == t[1] ? n > f.majorVersion : n == f.majorVersion
            },
            partner: function(e) {
                return e == m
            }
        };

    function h(e, t) {
        return !(!e[0] || !n[e[0]]) && n[e[0]].call(null, e.slice(1), t)
    }

    function c(e, t, n, r) {
        var o = "api_version=" + t + "&api_key=" + encodeURIComponent(e) + "&impression_id=" + encodeURIComponent(n) + "&referrer_hostname=" + encodeURIComponent(window.location.hostname) + "&referral_method=connector";
        for (var i in r) o += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(r[i].toString());
        return o
    }

    function y(e, t, n, r, o, i) {
        var a = n + "?" + c(e, t, r, i);
        return o && (0 === a.indexOf("//") && (a = location.protocol + a), o += 0 <= o.indexOf("?") ? "&" : "?", a = o += "redirect_url=" + encodeURIComponent(a)), a
    }

    function C() {
        window.console && window.console.warn.apply(window.console, Array.prototype.slice.call(arguments))
    }

    function a(e) {
        this.message = e, this.name = "ConnectorException"
    }

    function p(e, t, n) {
        if (!e) throw new Error("cookie name is mandatory");
        n = n || {}, null === t && (t = "", n.expires = -1);
        var r, o = "";
        n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (r = new Date).setTime(r.getTime() + 24 * n.expires * 60 * 60 * 1e3) : r = n.expires, o = "; expires=" + r.toUTCString());
        var i = n.path ? "; path=" + n.path : "",
            a = n.domain && ".localhost" !== n.domain ? "; domain=" + n.domain : "",
            c = n.secure ? "; secure" : "";
        document.cookie = [encodeURIComponent(e), "=", encodeURIComponent(t), o, i, a, c].join("")
    }

    function u(e) {
        for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            var r = t[n].split("="),
                o = r.shift().replace(/^\s+/, ""),
                i = r.join("=");
            if (o == e) {
                try {
                    return decodeURIComponent(i)
                } catch (e) {}
                return null
            }
        }
        return null
    }

    function _(e, t) {
        p(e, null, t)
    }

    function g(e, t, n, r) {
        r && 0 !== r.length || (r = document.domain.split(".").slice(-2).join(".")), p("CopterConnect", [e, t, n].join("|"), {
            domain: "." + r,
            path: "/"
        })
    }

    function s() {
        return u("CopterConnect")
    }

    function w(e) {
        if (e) _("CopterConnect", {
            domain: e,
            path: "/"
        });
        else
            for (var t = document.domain.split("."); t.length;) w("." + t.join(".")), t.shift()
    }

    function E() {
        var e = s();
        return e ? e.split("|")[0] : null
    }

    function v() {
        var e = s();
        return e ? e.split("|")[1] : null
    }

    function b() {
        var e = s();
        return e ? e.split("|")[2] : null
    }

    function D(e, t) {
        var n = e.split("."),
            r = t.split(".");

        function o(e) {
            for (var t = 0; t < e.length; ++t)
                if (!/^\d+$/.test(e[t])) return !1;
            return !0
        }
        if (!o(n) || !o(r)) return NaN;
        for (var i = 0; i < n.length; ++i) {
            if (r.length === i) return 1;
            if (n[i] !== r[i]) return parseInt(n[i]) > parseInt(r[i]) ? 1 : -1
        }
        return n.length !== r.length ? -1 : 0
    }

    function T() {
        var e = window.top,
            t = window.self;
        return e !== t && "string" == typeof e.document.location.toString() ? e : t
    }

    function A() {
        var e = T();
        return {
            left: (e.screenLeft || e.screenX || 0) + 15,
            top: (e.screenTop || e.screenY || 0) + 50,
            width: (e.innerWidth || 1020) - 30,
            height: (e.innerHeight || 630) - 30
        }
    }

    function R(e) {
        return [e.type, e.canBubble, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget]
    }

    function x(e) {
        var t, n = A(),
            r = {
                left: n.left,
                top: n.top,
                width: n.width,
                height: n.height,
                toolbar: 1,
                menubar: 1,
                resizable: 1,
                location: 1,
                scrollbars: 1
            },
            o = [];
        if (e)
            for (t in e) r[t] = e[t];
        for (t in r) void 0 !== r[t] && o.push(t + "=" + r[t]);
        return o.join(",")
    }
    a.prototype = new Error;
    var e = true;
    "string" == typeof e && (e = !0);
    var k = e;

    function H() {
        return !T().document.hasFocus()
    }

    function P(e) {
        var t = T();
        try {
            e.blur(), e.opener.window.focus(), t.self.window.focus(), t.focus()
        } catch (e) {}
    }

    function S(t, n, e) {
        var r = A(),
            o = x({
                left: 0,
                top: -999999999,
                menubar: 0
            });
        return e ? T().open(t, n, o) : (setTimeout(function() {
            var e = T().open("about:blank", n, o);
            try {
                e.moveTo(r.left, r.top - 10)
            } catch (e) {}
            setTimeout(function() {
                e && !e.closed && (e.location = t)
            }, 0)
        }, 0), setTimeout(function() {
            T().open("", "_self", ""), T().focus()
        }, 0), !1)
    }

    function I(e, t, n) {
        var r = x(),
            o = T().open(e, t, r);
        if (o && !n) try {
            P(o), T().open("", T().name, "")
        } catch (e) {}
        return o
    }

    function L(e, t, n, r) {
        var o = x({
                left: void 0,
                top: void 0
            }),
            i = T().open(t, n, o);
        if (i && !r) {
            try {
                P(i)
            } catch (e) {}
            setTimeout(function() {
                try {
                    P(i)
                } catch (e) {}
                H() && i && e && e({
                    closeReason: "rk_could_not_pop_under",
                    countImpression: !1
                })
            }, 1e3)
        }
        return i
    }

    function U(e, t, n) {
        var r = x({
                top: A().top - 10,
                toolbar: 0
            }),
            o = T().open(e, t, r);
        if (o && !n) try {
            o.blur(), o.open("about:blank").close()
        } catch (e) {}
        return o
    }

    function O(e, t, n) {
        var r = x(),
            o = T().open(e, t, r);
        if (o && !n) try {
            T().open("", T().name, "")
        } catch (e) {}
        return o
    }
    var N = function(e, t, n) {
            var r = x();
            return n || T().open("javascript:void window.focus()", "_self", ""), T().open(e, t, r)
        },
        M = function(e, t, n, r) {
            var o, i;
            if ((u("CopterConnectTab") || r) && (o = T().open("", n, ""))) {
                i = !1;
                try {
                    (e || "about:blank" === o.location.href) && (i = !0)
                } catch (e) {}
                if (i) return o.close(), _("CopterConnectTab"), o
            }
            if (o) o.location = t;
            else {
                var a, c = t || "data:text/html,<script>window.close();<\/script>",
                    s = document.createElement("a");
                s.target = n, s.href = c, document.body.appendChild(s), (a = document.createEvent("MouseEvents")).initMouseEvent.apply(a, R({
                    type: "click",
                    canBubble: !0,
                    cancelable: !0,
                    view: window,
                    detail: 0,
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    ctrlKey: !0,
                    altKey: !1,
                    shiftKey: !1,
                    metaKey: !0,
                    button: 0,
                    relatedTarget: null
                })), s.dispatchEvent(a), s.parentNode.removeChild(s), T().open("", n, ""), p("CopterConnectTab", "true")
            }
            return o
        };

    function j(e, t, n, r) {
        var o = !1,
            i = !1;
        switch (e.browser) {
            case "chrome":
                30 <= e.majorVersion && e.majorVersion < 41 && t && (i = e.majorVersion < 34 ? M.bind(null, !0) : M.bind(null, !1));
                break;
            case "firefox":
                i = 65 <= e.majorVersion ? S : U;
                break;
            case "ie":
                11 === e.majorVersion ? i = k ? function(e, t, n, r, o) {
                    var i = A(),
                        a = x({
                            left: i.left - 10,
                            top: i.top - 100
                        }),
                        c = T().open(e ? "" : n, r, a);
                    if (c && !o) {
                        e && (c.location = n);
                        try {
                            document.focus()
                        } catch (e) {}
                        H() && P(c), H() && setTimeout(function() {
                            try {
                                document.focus()
                            } catch (e) {}
                            H() && c && P(c), H() && c && t({
                                closeReason: "rk_could_not_pop_under",
                                countImpression: !1
                            })
                        }, 1e3)
                    }
                    return c
                }.bind(null, !n, r) : function(e, t, n, r, o) {
                    var i = A(),
                        a = x({
                            left: i.left - 10,
                            top: i.top - 100
                        }),
                        c = T().open(e ? "" : n, r, a);
                    if (c && !o) {
                        e && (c.location = n);
                        try {
                            document.focus(), H() && P(c)
                        } catch (e) {}
                        H() && c && t({
                            closeReason: "rk_could_not_pop_under",
                            countImpression: !1
                        })
                    }
                    return c
                }.bind(null, !n, r) : 10 <= e.majorVersion && (i = L.bind(null, null));
                break;
            case "edge":
                13 <= e.majorVersion && (i = L.bind(null, r));
                break;
            case "safari":
                i = 10 <= e.majorVersion ? O : 0 <= D(e.version, "6") && D(e.version, "6.1.1") < 0 ? N : I, o = !0
        }
        return !(10 <= e.macOSXVersion && e.isFullScreen && !o) && i
    }

    function K(e, t, n, r, o) {
        var i;
        r && (i = n.concat("/close/", r, "?api_key=", e, "&api_version=", t), o && "object" == typeof o && (i += "&count_impression=" + !!o.countImpression, o.closeReason && (i += "&close_reason=" + encodeURIComponent(o.closeReason))), V(i))
    }

    function V(e) {
        (new Image).src = e
    }

    function B() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" == e ? t : 3 & t | 8).toString(16)
        }).toUpperCase()
    }
    var o = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    function i(e) {
        var t, n, r = {};
        for (t in e)(n = e[t]) && 0 !== n.length && (r[t] = n);
        return r
    }

    function F(e, t) {
        var n, r, o;
        for (n in e = i(e)) {
            if (!(r = t.properties[n])) throw new a(n + " is not a permitted option");
            o = W(n, e[n], r, e), "array" === r.type && (o = o.join("|")), e[n] = o
        }
        return Z(e), delete e.domain, delete e.window_name, delete e.window_url, delete e.redirect_utility_path, delete e.allow_tab_under, e
    }

    function W(e, t, n, r) {
        var o, i;
        return Y(e, n, r), t = G(e, t, n, r), o = e, i = n, t && i.deprecated && C(o + " is DEPRECATED. " + i.deprecatedMessage), z(e, t, n), $(e, t, n), t
    }

    function Y(e, t, n) {
        var r;
        if (t.dependencies)
            for ("string" == typeof t.dependencies && (t.dependencies = [t.dependencies]), r = 0; r < t.dependencies.length; r++)
                if (!n[t.dependencies[r]]) throw new a(e + " depends on missing option " + t.dependencies[r])
    }

    function G(e, t, n, r) {
        switch (n.type) {
            case "string":
                X(e, t, n);
                break;
            case "number":
                q(e, t, n);
                break;
            case "integer":
                J(e, t, n);
                break;
            case "array":
                t = Q(e, t, n, r)
        }
        return t
    }

    function X(e, t, n) {
        if (t.length < n.minLength) throw new a(n.description || e + " must not contain fewer than " + n.minLength + " characters");
        if (t.length > n.maxLength) throw new a(n.description || e + " must not exceed " + n.maxLength + " characters")
    }

    function q(e, t, n) {
        if (isNaN(t)) throw new a(n.description || e + " must be a numeric value");
        if (n.minimum && parseFloat(t) < parseFloat(n.minimum)) throw new a(n.description || e + " cannot be less than " + n.minimum);
        if (n.maximum && parseFloat(t) > parseFloat(n.maximum)) throw new a(n.description || e + " cannot be greater than " + n.maximum)
    }

    function J(e, t, n) {
        if (q(e, t, n), Math.ceil(t) !== Math.floor(t)) throw new a(n.description || e + " must be an integer")
    }

    function Q(e, t, n, r) {
        var o;
        for (ee(t) || (t = t.toString().split("|")), o = 0; o < t.length; o++) t[o] = W(e, t[o], n.items, r);
        return t
    }

    function z(e, t, n) {
        if (n.enum && !r(n.enum, t)) throw new a(n.description || '"' + t + '" is an invalid ' + e + " value. Accepted values: " + n.enum.join(", "))
    }

    function $(e, t, n) {
        var r = n.pattern || null;
        if ("date" === n.format && (r = o), r && !r.test(t)) throw new a(n.description || e + " failed regexp test")
    }

    function Z(e) {
        var t, n, r, o = ["price", "star"];
        if (e.check_in && e.check_out) {
            var i = new Date(e.check_in.replace(/-/g, "/"));
            if (new Date(e.check_out.replace(/-/g, "/")) <= i) throw new a("Invalid check_out date. Must occur after check_in date.")
        }
        for (t = 0; t < o.length; t++)
            if (n = e[o[t] + "_from"], r = e[o[t] + "_to"], n && r && parseFloat(r) < parseFloat(n)) throw new a(o[t] + "_to cannot be less than " + o[t] + "_from")
    }

    function r(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n] === t) return !0;
        return !1
    }

    function ee(e) {
        return 0 <= e.constructor.toString().indexOf("Array")
    }
    var te, ne, re = {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    maxLength: "64"
                },
                state: {
                    type: "string",
                    minLength: "2",
                    maxLength: "2",
                    description: "State must be a 2-character code."
                },
                country: {
                    type: "string",
                    maxLength: "2",
                    description: "Country must be a 2-character code (ISO 3166-1 alpha-2)"
                },
                lat: {
                    type: "number",
                    minimum: "-90",
                    maximum: "90",
                    dependencies: "lng"
                },
                lng: {
                    type: "number",
                    minimum: "-180",
                    maximum: "180",
                    dependencies: "lat"
                },
                property_id: {
                    type: "string",
                    maxLength: "64"
                },
                property_url: {
                    type: "string",
                    description: "A url back to the desired property booking page on the hotel brand's website. This should include dates and other search criteria as required.",
                    dependencies: ["property_id"]
                },
                displayed_lowest_nightly_rate: {
                    type: "integer",
                    minimum: "0",
                    dependencies: ["property_id", "displayed_lowest_nightly_rate_room_type", "currency"]
                },
                displayed_lowest_nightly_rate_room_type: {
                    type: "string",
                    enum: ["suite", "king", "queen", "standard", "single/twin", "double", "other"],
                    dependencies: ["property_id", "displayed_lowest_nightly_rate"]
                },
                check_in: {
                    type: "string",
                    format: "date",
                    description: "Check-in must be in format yyyy-mm-dd",
                    dependencies: ["check_out", "rooms", "guests"]
                },
                check_out: {
                    type: "string",
                    format: "date",
                    description: "Check-out must be in format yyyy-mm-dd",
                    dependencies: ["check_in", "rooms", "guests"]
                },
                rooms: {
                    type: "integer",
                    minimum: "1",
                    maximum: "4"
                },
                guests: {
                    type: "integer",
                    minimum: "1",
                    maximum: "16"
                },
                price_from: {
                    type: "integer",
                    minimum: "0",
                    dependencies: ["price_to", "currency"]
                },
                price_to: {
                    type: "integer",
                    minimum: "0",
                    dependencies: ["price_from", "currency"]
                },
                star_from: {
                    type: "integer",
                    minimum: "1",
                    maximum: "5",
                    dependencies: "star_from"
                },
                star_to: {
                    type: "integer",
                    minimum: "1",
                    maximum: "5",
                    dependencies: "star_to"
                },
                brand: {
                    type: "array",
                    items: {
                        type: "string"
                    },
                    description: "An array of brand IDs indicating the brands in which the user is interested. For single brands a string can be provided instead of an array. A pipe-delimited string is also acceptable instead of an array."
                },
                amenities: {
                    type: "array",
                    items: {
                        type: "string",
                        enum: ["INT", "PETS", "PKG", "FIT", "POOL", "BUSIN", "REST"]
                    },
                    description: "An array of amenity IDs. For single amenities a string can be provided instead of an array. A pipe-delimited string is also acceptable instead of an array."
                },
                currency: {
                    type: "string",
                    minLength: "3",
                    maxLength: "3",
                    description: "Currency must be a 3-character code (ISO 4217). If invalid or not supplied, currency is determined by the default currency of the Room Key TLD (see tld)."
                },
                language: {
                    type: "string",
                    minLength: "2",
                    maxLength: "2",
                    description: "Language must be a 2-character code (ISO 639-1)."
                },
                source_page: {
                    type: "string",
                    maxLength: "256"
                },
                visitor_type: {
                    type: "string",
                    maxLength: "128"
                },
                custom_data: {
                    type: "string",
                    maxLength: "128"
                },
                logo_url: {
                    type: "string",
                    description: "A URL to the hotel brand's logo."
                },
                domain: {
                    type: "string",
                    description: "The root domain of the page that is opening the pop-under. Used for setting cookie. Acceptable values 'hotelbrand.com', 'hotelbrand.co.uk'. Bad values: 'www.hotelbrand.com', 'www.hotelbrand.co.uk'. If omitted, assumes that domain is top-level and second-level elements. Therefore by default .com domains will set the cookie correctly but .co.uk domains will not and must be specified using this option."
                },
                window_name: {
                    type: "string",
                    description: "A name given to the pop-under window. The name should only contain alphanumeric characters. If omitted, this name is allocated automatically. This should only be used where windows are being opened and closed across different domains."
                },
                tld: {
                    type: "string",
                    description: "The desired top level domain of the Room Key pop-under. Must match one of those enumerated. Defaults to 'com' if not supplied. [Deprecated as of version 1.0.20. Use 'locale' instead].",
                    enum: ["com", "uk", "au", "nz", "ca"]
                },
                locale: {
                    type: "string",
                    description: "A locale string. This will determine the country-version of the Room Key site and the currency displayed in the interstitial experience. If the 'currency' option is set, this will override the currency associated with the locale. Examples: en-US, en-GB, en_US, en_GB. Unrecognised locale strings will default to 'en-US'.",
                    maxLength: "10"
                },
                window_url: {
                    type: "string",
                    format: "url",
                    description: "By default, the URL loaded into the pop-under window is that of the Room Key interstitial. However it may be desirable to open a different URL in the window which then subsequently redirects to the Room Key interstitial URL. This URL could be used to more reliably record metrics. If a window_url value is provided, it will have a querystring parameter of redirect_url appended to it.",
                    deprecated: !0,
                    deprecatedMessage: "Use redirect_utility_path instead"
                },
                redirect_utility_path: {
                    type: "string",
                    description: "By default, the URL loaded into the pop-under window is that of the Room Key interstitial. However making the URL match origin better supports pop-undering. This argument is the pathname to a web page, ie: /utility/redirect.html, within same origin, ie: same protocol://host:port than current partner url, that will pull connector-redirect.js and it is used to build the opening URL. Upon load, connector-redirect.js, will pull and navigate to Room Key interstitial URL from redirect_url query string param."
                },
                allow_tab_under: {
                    type: "string",
                    description: "If set to 'true', browsers that do not support a pop-under but do support a tab-under e.g. Chrome v30+, will open a tab-under. Note that unlike pop-unders, tab-unders cannot be closed using CopterConnect.unload."
                }
            }
        },
        t = window.document;
    window.name = window.name || "win-" + Math.floor(1e6 * Math.random());
    var oe = null,
        ie = "1.5.1";

    function ae(e, t) {
        if (null === s()) return !1;
        var n;
        "string" == typeof t ? t = {
            windowName: n = t
        } : n = t.windowName ? t.windowName : b();
        var r, o = !1,
            i = E(),
            a = v();
        return n && (oe && oe.closed && (oe = null), oe || (r = j(d(window), !0)) && (oe = r.call(this, "about:blank", n, !0)), oe && (oe && !oe.closed && oe.close(), oe = null, w(), K(a, ie, e, i, t), o = !0)), o
    }
    return {
        _connectorVersion: "1.65.15",
        _baseUrl: "https://www.roomkey.com/referrals",
        _apiVersion: ie,
        _datePattern: o,
        schema: re,
        load: function(e, t) {
            if (function(e, t) {
                    if (m = e, f.isMobile || f.isBot) return !0;
                    try {
                        document.cookie = "cookietest=1";
                        var n = -1 != document.cookie.indexOf("cookietest=");
                        if (document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", !n || !navigator.cookieEnabled) return !0
                    } catch (e) {
                        return !0
                    }
                    return h(["or"].concat(l), t)
                }(e, t = t || {})) return !1;
            ne = F(t, re);
            var n, r, o, i, a, c = t.domain,
                s = t.allow_tab_under && "true" === t.allow_tab_under,
                p = E() || B(),
                u = (t.window_name && 0 < t.window_name.length ? t.window_name : p).replace(/[\W_]/g, "");
            return o = t.redirect_utility_path, i = t.window_url, a = window.location, o && (i && C("redirect_utility_path takes precedence over window_url"), i = a.protocol + "//", i += a.hostname, a.port && (i += ":" + a.port), 0 !== o.indexOf("/") && (i += "/"), i += o), te = i, oe && oe.closed && (oe = void 0), !(!oe && !(n = j(d(window), !!s, !!te, ae.bind(null, this._baseUrl)))) && (r = y(e, ie, this._baseUrl, p, te, ne), g(p, e, u, c), oe ? oe.location = r : oe = n.call(this, r, u, !1), oe && oe.closed && (oe = void 0), !!oe)
        },
        unload: function(e) {
            var t = (e = e || {}).closeReason;
            if (t) {
                if (15 < t.length) throw new a("The closeReason option must be 15 characters or fewer");
                if (0 === t.indexOf("rk_")) throw new a("The closeReason option cannot start with reserved rk_ prefix")
            }
            return ae(this._baseUrl, e)
        },
        _trackClose: function(e, t, n) {
            C("CopterConnect._trackClose is DEPRECATED"), K(t, this._apiVersion, this._baseUrl, e, n)
        },
        _createTrackingPixel: function(e) {
            C("CopterConnect._createTrackingPixel is DEPRECATED"), V(e)
        },
        _documentCreateElement: function() {
            return C("CopterConnect._documentCreateElement is DEPRECATED"), t.createElement.apply(t, arguments)
        },
        _documentCreateEvent: function() {
            return C("CopterConnect._documentCreateEvent is DEPRECATED"), t.createEvent.apply(t, arguments)
        },
        _documentGetElementsByTagName: function() {
            return C("CopterConnect._documentGetElementsByTagName is DEPRECATED"), t.getElementsByTagName.apply(t, arguments)
        },
        _buildUrl: function(e, t, n) {
            return C("CopterConnect._buildUrl is DEPRECATED"), y(e, this._apiVersion, this._baseUrl, n, te, F(t))
        },
        _buildQueryString: function(e, t, n) {
            return C("CopterConnect._buildQueryString is DEPRECATED"), c(e, this._apiVersion, n, F(t))
        },
        _tabUnderOverrideArgs: function(e) {
            return C("CopterConnect._tabUnderOverrideArgs is DEPRECATED"), e
        },
        _tabUnderMouseEventArgs: function(e) {
            C("CopterConnect._tabUnderMouseEventArgs is DEPRECATED"), R(e)
        },
        _uuid: function() {
            return C("CopterConnect._uuid is DEPRECATED"), B()
        },
        _cookie: function(e, t, n) {
            if (C("CopterConnect._cookie is DEPRECATED"), e = e || "CopterConnect", void 0 === t) return u(e);
            p(e, t, n)
        },
        _setCookie: function(e, t, n, r) {
            C("CopterConnect._setCookie is DEPRECATED"), g(e, t, n, r)
        },
        _removeCookie: function() {
            C("CopterConnect._removeCookie is DEPRECATED"), w()
        },
        _getCookie: function() {
            return C("CopterConnect._getCookie is DEPRECATED"), s()
        },
        _getCookieImpressionId: function() {
            return C("CopterConnect._getCookieImpressionId is DEPRECATED"), E()
        },
        _getCookieApiKey: function() {
            return C("CopterConnect._getCookieApiKey is DEPRECATED"), v()
        },
        _getCookieWindowName: function() {
            return C("CopterConnect._getCookieWindowName is DEPRECATED"), b()
        },
        _trim: function(e) {
            return C("CopterConnect._trim is DEPRECATED"), e.trim()
        },
        _getOpen: function(e, t, n, r) {
            return C("CopterConnect._getOpen is DEPRECATED"), j(e, t, n, r)
        },
        _getEnv: function(e) {
            return C("CopterConnect._getEnv is DEPRECATED"), d(e)
        },
        _connectorException: function(e) {
            return C("CopterConnect._connectorException is DEPRECATED"), new a(e)
        },
        _nonEmptyOptions: function(e) {
            return C("CopterConnect._nonEmptyOptions is DEPRECATED"), i(e)
        },
        _validateApiKey: function(e) {
            return C("CopterConnect._validateOption is DEPRECATED"),
                function(e) {
                    if (!e) throw new a("Missing API key");
                    if (0 === e.length) throw new a("API key is an empty string")
                }(e)
        },
        _validateOption: function(e, t, n) {
            return C("CopterConnect._validateOption is DEPRECATED"), W(e, t, n, ne)
        },
        _validateDependencies: function(e, t) {
            return C("CopterConnect._validateDependencies is DEPRECATED"), Y(e, t, ne)
        },
        _validateTypes: function(e, t, n) {
            return C("CopterConnect._validateTypes is DEPRECATED"), G(e, t, n)
        },
        _validateString: function(e, t, n) {
            C("CopterConnect._validateString is DEPRECATED"), X(e, t, n)
        },
        _validateNumber: function(e, t, n) {
            C("CopterConnect._validateNumber is DEPRECATED"), q(e, t, n)
        },
        _validateInteger: function(e, t, n) {
            C("CopterConnect._validateInteger is DEPRECATED"), J(e, t, n)
        },
        _validateArray: function(e, t, n) {
            return C("CopterConnect._validateArray is DEPRECATED"), Q(e, t, n)
        },
        _validateEnums: function(e, t, n) {
            C("CopterConnect._validateEnums is DEPRECATED"), z(e, t, n)
        },
        _validatePatternAndFormat: function(e, t, n) {
            C("CopterConnect._validatePatternAndFormat is DEPRECATED"), $(e, t, n)
        },
        _validateRanges: function(e) {
            C("CopterConnect._validateRanges is DEPRECATED"), Z(e)
        },
        _inArray: function(e, t) {
            return C("CopterConnect._inArray is DEPRECATED"), r(e, t)
        },
        _isArray: function(e) {
            return C("CopterConnect._isArray is DEPRECATED"), ee(e)
        }
    }
}();