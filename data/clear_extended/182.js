"use strict";
! function() {
    var e = window.location.host.replace(/^.*?([\w\d\-]+\.[\w\d\:]+)\r?$/, "$1"),
        o = "//accounts.",
        t = ["wsj.com", "marketwatch.com", "barrons.com"],
        a = e.indexOf(":");
    a > -1 && (e = e.substr(0, a));
    var n = e,
        s = {
            ssoSecondaryIframes: {},
            generateSsoIframes: function(e, o, a) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n].trim(),
                        r = "iframe-rp-" + s + "-" + (new Date).getTime(),
                        i = this.createIframe(r, s, o, a);
                    this.ssoSecondaryIframes[r] = this.onIframeCompleted.bind(this), e.appendChild(i)
                }
            },
            generateRestoreIframe: function(o, t) {
                var a = e,
                    n = "iframe-rp-" + a + "-" + (new Date).getTime(),
                    s = this.createIframe(n, a, "monitor", t);
                this.ssoSecondaryIframes[n] = this.onIframeCompleted.bind(this), o.appendChild(s)
            },
            createIframe: function(t, a, n, s) {
                var r = a.split(".")[0];
                "marketwatch" === r && (r = "mw");
                var i = document.createElement("iframe");
                i.setAttribute("id", t);
                var d = window.location.protocol + o + a,
                    m = d + "/assets/secondary-rp-sync.html?iframe_id=" + encodeURIComponent(t),
                    c = "",
                    l = "https://accounts.dowjones.com".replace("dowjones.com", a);
                if ("logout" == n) {
                    var g = d + "/auth/slo-done?iframe_id=" + encodeURIComponent(t);
                    c = e === a ? g : l + "/auth/sso/logout?url=" + encodeURIComponent(m)
                } else if ("login" == n) {
                    var w = d + "/auth/sso-done?iframe_id=" + encodeURIComponent(t);
                    c = e === a ? w : l + "/auth/silent-login?target=" + encodeURIComponent(m)
                } else c = d + "/auth/sso-restore?djcs_session=" + s + "&iframe_id=" + encodeURIComponent(t);
                return i.setAttribute("src", c), i.setAttribute("style", "width:0;height:0;border:none"), i
            },
            onIframeCompleted: function(e) {
                delete this.ssoSecondaryIframes[e], document.getElementsByTagName("body")[0].removeChild(document.getElementById(e))
            },
            clearIframes: function() {
                for (var e in this.ssoSecondaryIframes) this.ssoSecondaryIframes[e](e)
            }
        },
        r = {
            getCookie: function(e, o) {
                var t = (o || document.cookie).match(RegExp("(?:^|;\\s*)" + e.replace(/([.*+?\^${}()|\[\]\/\\])/g, "\\$1") + "=([^;]*)"));
                return t ? t[1] : null
            },
            deleteCookie: function(e, o) {
                o.cookie = e + "=; Domain=." + n + "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }
        },
        i = (document.getElementsByTagName("body")[0], r.getCookie("run-sso")),
        d = r.getCookie("run-slo"),
        m = r.getCookie("djcs_route");
    if (i && m) r.deleteCookie("run-sso", document), s.generateSsoIframes(document.getElementsByTagName("body")[0], "login", m);
    else if (d && m) r.deleteCookie("run-slo", document), s.generateSsoIframes(document.getElementsByTagName("body")[0], "logout", m);
    else if (void 0 !== window.localStorage) {
        var c = window.localStorage.getItem("session"),
            l = window.localStorage.getItem("routeid"),
            g = window.localStorage.getItem("ts");
        if (c && l && g)
            if (parseInt(g) + 1728e5 < Date.now()) window.localStorage.removeItem("session"), window.localStorage.removeItem("routeid"), window.localStorage.removeItem("ts"), r.deleteCookie("restored-sso", document);
            else {
                var w = c + "&routeid=" + l + "&ts=" + g + "&routeid-mismatch=" + (m && m === l ? "false" : "true");
                null == r.getCookie("restored-sso") && s.generateRestoreIframe(document.getElementsByTagName("body")[0], w)
            }
    }

    function u(o) {
        if (!(o.origin.indexOf(e) < 0 && o.origin.indexOf("dowjones.com") < 0) && "string" == typeof o.data && "DJSSO" === o.data.substr(0, 5)) try {
            var t = o.data.split("|")[2],
                a = JSON.parse(t);
            switch (a.name) {
                case "iframe-done":
                    void 0 !== window.localStorage && ("sso-done" === a.data.action ? a.data.session && 0 == a.data.session.indexOf("M") && (window.localStorage.setItem("session", a.data.session), window.localStorage.setItem("routeid", r.getCookie("djcs_route")), window.localStorage.setItem("ts", Date.now())) : "slo-done" === a.data.action && (window.localStorage.removeItem("session"), window.localStorage.removeItem("routeid"), window.localStorage.removeItem("ts"), r.deleteCookie("restored-sso", document))), s.onIframeCompleted.call(s, a.data.frameId);
                    var i = r.getCookie("restored-sso");
                    i && "true" === i && (document.cookie = "restored-sso=done; Domain=." + n + "; Path=/", window.location.reload())
            }
        } catch (e) {
            console.error("event data not JSON", o)
        }
    }
    window.postMessage && (window.addEventListener ? window.addEventListener("message", u, !1) : window.attachEvent && window.attachEvent("onmessage", u))
}();