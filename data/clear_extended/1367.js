function tv_getQueryStrings() {
    for (var e = {}, t = location.search.slice(1).split("&"), n = function(e) {
            return decodeURIComponent(e.replace(/\+/g, " "))
        }, o = 0; o < t.length; ++o) {
        var r = t[o].split("=");
        1 < r.length && (e[n(r[0])] = n(r[1]))
    }
    return e
}

function tv_getCountryFromDataLayer() {
    var e = "DE";
    return "undefined" != typeof dataLayer && dataLayer.forEach(function(t) {
        void 0 !== t && void 0 !== t.country && (e = t.country)
    }), e
}

function tv_getCountry() {
    var e = tv_getQueryStrings(),
        t = e["force-country"];
    return void 0 === t && (t = e.country), void 0 === t ? tv_getCountryFromDataLayer() : t
}

function tv_setCookie(e, t, n, o) {
    "use strict";
    var r = new Date;
    r.setDate(r.getDate() + n), r = r.toUTCString(), o = void 0 === o ? window.location.hostname : o, "localhost" !== o && (o = "." + o), document.cookie = e + "=" + encodeURIComponent(t) + "; path=/; domain=" + o + "; expires=" + r
}

function tv_getLanguage() {
    var e = tv_getQueryStrings(),
        t = e.language;
    if (void 0 === t) {
        var n = window.location.pathname.match(/^\/([a-z]{2}|zhcn|zhtw|en-us|fr-ca|es-mx|pt-br)\//i);
        null !== n && n.length >= 2 && (t = n[1].toLowerCase(), "zhcn" === t ? t = "cn" : "zhtw" === t ? t = "tw" : 5 === t.length && (t = t.substring(0, 2)))
    }
    return void 0 === t && (t = "en"), t
}

function tv_updateGeoPreference() {
    var e = tv_getCountry().toLowerCase(),
        t = tv_getLanguage().toLowerCase(),
        n = tv_getCookie("geo-preference");
    if (null === n || void 0 === n) tv_setCookie("geo-preference", t + "-" + e, 365, window.location.hostname);
    else {
        var o = n.match(/([a-z]{2})-([a-z]{2})/i);
        if (null !== o && o.length >= 3) {
            var r = o[1].toLowerCase(),
                i = o[2].toLowerCase();
            t !== r && tv_setCookie("geo-preference", t + "-" + i, 365, window.location.hostname)
        }
    }
}

function tv_getCookie(e) {
    if (void 0 === e || null === e || 0 === e.length || 0 === document.cookie.length) return null;
    e += "=";
    for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
        for (var o = t[n];
            " " == o.charAt(0);) o = o.substring(1);
        if (0 == o.indexOf(e)) return o.substring(e.length, o.length)
    }
    return null
}

function tv_setPhoneNumber(e, t, n) {
    "use strict";
    if (void 0 !== e && 0 !== e.length) {
        var o = document.getElementById(e);
        if (null !== o) {
            void 0 === t && (t = tv_getCountry()), void 0 === n && (n = tv_getLanguage());
            var r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                if (r.readyState == XMLHttpRequest.DONE)
                    if (200 == r.status) {
                        var e = JSON.parse(this.responseText);
                        o.innerHTML = e.phoneNumber
                    } else o.innerHTML = "+49 (0) 7161 606 92 50"
            }, r.open("GET", "https://www.teamviewer.com/api/phonenumber/json/" + t + "/" + n, !0), r.send()
        }
    }
}

function tv_setGeoPreference(e, t) {
    "use strict";
    e.preventDefault();
    var n, o, r, i, a = document.getElementById("wd-js-language-selector"),
        s = document.getElementById("wd-js-country-selector");
    return a && (n = a.value.split("==="), o = n[0], r = n[1], i = s ? s.value : t, tv_setCookie("geo-preference", o + "-" + i, 365, window.location.hostname), window.location.assign(r)), !1
}

function tv_setPid() {
    "use strict";
    var e = tv_getQueryStrings(),
        t = e.pid,
        n = e.opid;
    void 0 !== n && (t = e.opid), void 0 !== t && 0 !== t.length && (0 === t.indexOf("salesforce", 0) ? tv_setCookie("pid", t, 1) : 0 === t.indexOf("update", 0) ? tv_setCookie("pid", t, 14) : tv_setCookie("pid", t, 365))
}

function tv_setCampid() {
    "use strict";
    var e = tv_getQueryStrings(),
        t = e.campid;
    void 0 !== t && 0 !== t.length && tv_setCookie("campid", decodeURI(t), 365)
}
jQuery(document).ready(function(e) {
    function t(t) {
        var n, o, r, i, a = 0,
            s = 0,
            u = [],
            c = 0;
        e(t).each(function() {
            if (o = e(this), o.css("height", "auto"), r = o.height(), c = o.offset().top, s != c) u.length = 0, s = c, a = r, o.height(a), u.push(o);
            else if (u.push(o), n = u.length, a < r)
                for (a = r, i = 0; i < n; i++) u[i].height(a);
            else o.height(a)
        })
    }
    tv_updateGeoPreference(), jQuery("span.tooltip").tooltipster(), jQuery("span.tooltip").mouseover(function() {
            var e = jQuery(this).parent().text();
            ga("send", "event", "tooltip_single-use", "tooltip_click", e, 1)
        }), jQuery(".mobilecontainer .header").click(function() {
            jQueryheader = jQuery(this), jQuerycontent = jQueryheader.next(), jQuerycontent.slideToggle(500, function() {
                jQueryheader.html(function() {
                    return jQuerycontent.is(":visible") ? "<span>Less Details <i class='fa fa-chevron-up'></i></span>" : "<span>More Details <i class='fa fa-chevron-down'></i></span>"
                })
            })
        }),
        function() {
            "ES" === tv_getCountry() && e(".hideTooltip").hide()
        }();
    var n = e(".scrollsmooth").find("a"),
        o = e("a.scrollsmooth");
    e.merge(n, o).click(function() {
            var t = e("#Top_bar"),
                n = t.outerHeight();
            "top: 0px;" !== t.attr("style") && (n -= 30), e("html, body").animate({
                scrollTop: parseInt(e(e(this).attr("href")).offset().top - n)
            }, 500)
        }),
        function() {
            var t;
            e('div[id^="vidyard-"]').each(function() {
                t = e(this).attr("id").slice(8), e('<script type="text/javascript" id="vidyard_embed_code_' + t + '" src="//play.vidyard.com/' + t + '.js?v=3.1.1&type=lightbox"><\/script>').appendTo(document.body), e(this).children(":first").attr("onclick", "fn_vidyard_" + t + "()")
            })
        }(),
        function() {
            function t(e) {
                if (n(e)) {
                    var t = !o(e);
                    return t || i(e, "This field is required."), t
                }
                return !0
            }

            function n(e) {
                return "boolean" == typeof e.required && e.required || "string" == typeof e.required
            }

            function o(e) {
                return !e.value
            }

            function r(t) {
                if (!t.value) return !0;
                var n = e(t).data("type") || t.getAttribute("type");
                return "function" != typeof c[n] || c[n](t)
            }

            function i(t, n) {
                e(t).data("errorMessage", n)
            }

            function a(t) {
                return e(t).data("errorMessage") || t.title
            }

            function s(t) {
                var n = e(t),
                    o = n.siblings(".error");
                o.length || (o = e('<span class="error" style="color: #ff0000;"></span>').insertAfter(n)), o.text(a(t))
            }

            function u(t) {
                e(t).siblings(".error").remove()
            }
            document.forms.register && (document.forms.register.noValidate = !0), e("form").on("submit", function(n) {
                var o, i, a, c = this.elements,
                    d = {};
                for (a = 0, l = c.length; a < l; a++) o = t(c[a]) && r(c[a]), o ? u(c[a]) : s(c[a]), d[c[a].id] = o;
                for (var f in d) {
                    if (!d[f]) {
                        i = !1;
                        break
                    }
                    i = !0
                }
                i || n.preventDefault(), 1 == i && e(".wd-simple-modal").fadeIn("slow")
            });
            var c = {
                    email: function(t) {
                        var n = !0,
                            o = /\b[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,6}\b/.test(t.value),
                            r = e("#email").val().length <= 64;
                        return o || (n = o, message = "Please enter a valid email"), r || (n = r, message = "Too many charakters"), n || i(t, message), n
                    },
                    text: function(t) {
                        var n, o = !0,
                            r = /^[\w'\-,.][^0-9_!¡\?÷\?¿\/\\\+=@#§\$%\ˆ\&\*\(\)\{\}\|~\<\>;:\[\]]{2,}$/.test(t.value),
                            a = e("#vorname, #name").val().length <= 64;
                        return r || (o = r, n = "This is not a valid input."), a || (o = a, n = "Too many charakters"), o || i(t, n), o
                    }
                },
                d = e(".wd-simple-modal");
            d && d.click(function() {
                d.fadeOut("slow")
            })
        }(), e(window).on("load", function() {
            t(".wd-js-sameHeight")
        }), e(window).resize(function() {
            t(".wd-js-sameHeight")
        }),
        function() {
            var t = function() {
                var e = {};
                return document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function() {
                    var t = function(e) {
                        return decodeURIComponent(e.split("+").join(" "))
                    };
                    e[t(arguments[1])] = t(arguments[2])
                }), e
            }();
            if (!t.preview) {
                delete t.s, delete t.pid, delete t.gclid, delete t.fbclid, delete t.utm_medium, delete t.utm_source, delete t.utm_campaign, delete t.utm_content, delete t.utm_term, "undefined" != typeof pricing_params && "" !== pricing_params.coupon && "" === coupon_code && (t.coupon = pricing_params.coupon);
                var n = jQuery.param(t);
                n && (n = "?" + n);
                var o = function(t, n) {
                    var t = e(t),
                        o = t.attr("href"); - 1 !== o.indexOf("?") && (n = n.replace("?", "&")), t.attr("href", o + n)
                };
                e("body").find('a[href^="/"]').each(function() {
                    o(this, n)
                }), e("body").find('a[href^="https://www.teamviewer.com"]').each(function() {
                    o(this, n)
                })
            }
        }(), window.onload = function() {
            e(".wpml-ls-current-language > a").removeAttr("href")
        }, e("#CopyWebChat").click(function(t) {
            t.preventDefault(), e("#webChatCode").select(), document.execCommand("copy")
        })
}), jQuery(window).on("load", function() {
    jQuery("#cta-purchasenowpricebatch .pilot .coupon-desc").length && jQuery("#cta-purchasenowpricebatch").css("margin-top", "130px")
}), jQuery(document).ready(function(e) {
    "use strict";
    tv_setPid(), tv_setCampid()
});