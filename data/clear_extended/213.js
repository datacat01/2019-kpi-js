if ("undefined" == typeof Reuters || null == Reuters) Reuters = {};
Reuters.namespace = function() {
    var a = arguments,
        c = null,
        d, b, e;
    for (d = 0; d < a.length; d += 1)
        for (e = ("" + a[d]).split("."), c = Reuters, b = "Reuters" == e[0] ? 1 : 0; b < e.length; b += 1) c[e[b]] = c[e[b]] || {}, c = c[e[b]];
    return c
};
Reuters.namespace("utils");
Reuters.namespace("info");
Reuters.utils.loadScript = function(a, c) {
    var d = document.getElementById(a),
        b = document.getElementsByTagName("head")[0];
    null != d && b.removeChild && b.removeChild(d);
    document.createElement && (d = document.createElement("script"), d.id = a, d.setAttribute("type", "text/javascript"), d.setAttribute("src", Reuters.utils.convertStaticUrl(c)), d.setAttribute("charset", "UTF-8"));
    b.appendChild(d)
};
Reuters.utils.getQueryStringParameter = function(a, c) {
    var d = a.split("?"),
        b = "",
        e = "";
    if (1 < d.length)
        for (b = d[1], d = b.split("\x26"), b = 0; b < d.length; b++) {
            var f = d[b].split("\x3d");
            f[0] == c && (e = f[1])
        }
    return e
};
Reuters.utils.replaceQueryStringParam = function(a, c, d) {
    var b = a.split("?"),
        e = a = "";
    a = "";
    if (1 < b.length) {
        a = b[0];
        for (var e = b[1], b = e.split("\x26"), e = !1, f = 0; f < b.length; f++) {
            var g = b[f].split("\x3d");
            g[0] == c && (g[1] = d, e = !0);
            a = 0 == f ? a + "?" : a + "\x26";
            a += g[0] + "\x3d" + g[1]
        }
        e || (a += "\x26" + c + "\x3d" + d)
    } else a = b[0], a = a + "?" + c + "\x3d" + d;
    return a
};
Reuters.utils.convertStaticUrl = function(a) {
    try {
        if (!parallelMediaHosts || null === parallelMediaHosts || "undefined" === typeof parallelMediaHosts) return a;
        var c = parallelMediaHosts;
        if (0 == a.indexOf("/resources") && c instanceof Array && 0 < c.length) {
            var d = a.lastIndexOf("/"),
                b = a.toLowerCase().substring(d + 1),
                e = b.lastIndexOf(".");
            0 < e && (b = b.substring(0, e));
            var f = b.lastIndexOf("-min");
            0 < f && (b = b.substring(0, f));
            var g = b.charCodeAt(b.length - 1) % c.length;
            return "//" + c[g] + a
        }
    } catch (h) {
        console.debug("convert static url error ! " +
            h), console.debug(a), console.debug(typeof a)
    }
    return a
};
Reuters.utils.localStorageSupportFlag = !0;
Reuters.utils.checkLocalStorageSupport = function() {
    if (JSON && localStorage) try {
        return localStorage.setItem("test", 1), localStorage.removeItem("test"), !0
    } catch (a) {}
    return !1
};
Reuters.utils.setToLocalStorage = function(a, c) {
    if (JSON && localStorage && Reuters.utils.localStorageSupportFlag) {
        var d = JSON.stringify(c);
        localStorage.setItem(a, d)
    }
};
Reuters.utils.getFromLocalStorage = function(a) {
    var c = "";
    JSON && localStorage && Reuters.utils.localStorageSupportFlag && (c = localStorage.getItem(a), null !== c && (c = JSON.parse(c)));
    return c
};
Reuters.utils.removeFromLocalStorage = function(a) {
    localStorage && Reuters.utils.localStorageSupportFlag && localStorage.removeItem(a)
};
Reuters.utils.clearLocalStorage = function() {
    localStorage && Reuters.utils.localStorageSupportFlag && localStorage.clear()
};
Reuters.utils.localStorageSupportFlag = Reuters.utils.checkLocalStorageSupport();
var agt = navigator.userAgent.toLowerCase(),
    is_ie = -1 != agt.indexOf("msie") && -1 == agt.indexOf("opera"),
    trackingEnabledModuleIds = [];

function addImpression(a) {}

function removeImpression() {}

function setModuleImpressionTracking() {}

function wtModTracking() {}

function setModuleTrackingOnClick() {}
Reuters.utils.addLoadEvent = function(a, c) {
    if ("function" != typeof a) try {
        console.debug("function called addLoadEvent with a non-function param")
    } catch (d) {} else {
        var b = window.onload;
        window.onload = "function" != typeof window.onload ? void 0 !== c ? function() {
            a.call(c)
        } : a : function() {
            b();
            void 0 !== c ? a.call(c) : a()
        }
    }
};
Reuters.utils.addLoadEvent(setModuleTrackingOnClick);

function getMetaTags() {
    var a = [],
        c;
    document.all ? c = document.all.tags("meta") : document.documentElement && (c = document.getElementsByTagName("meta"));
    for (i = 0; i < c.length; i++) {
        var d = c[i].getAttribute("name"),
            b = c[i].getAttribute("content");
        a[d] = b
    }
    return a
}
$(document).ready(function() {
    $("#moreTopicsLink").click(function() {
        $("#moreRelatedTopics0, #moreRelatedTopics1").toggle()
    });
    $("ul.edition-list li a").click(function(a) {
        a = Cookies.get("lastVisited");
        null != a && void 0 != a && Cookies.remove("lastVisited");
        Cookies.set("lastVisited", $(this).attr("href").replace(/^(https?|ftp):\/\//, "").replace("//", ""), {
            domain: "reuters.com"
        });
        console.log($(this).attr("href"))
    })
});
(function() {
    window.revop_wtfpc = Cookies.get("WT_FPC");
    window.registeredCookieValue = Cookies.get("ruus");
    window.u = null == window.revop_wtfpc ? ";U\x3dNC;" : ";U\x3d" + window.revop_wtfpc + ";";
    window.srnd = Cookies.get("srnd_keyword");
    window.srnd_sequence = Cookies.get("srnd_sequence");
    null != window.srnd && "" != window.srnd && (window.srnd = "srnd\x3d" + window.srnd + ";srnd_sequence\x3d" + window.srnd_sequence + ";");
    if (null != window.registeredCookieValue && "undefined" != window.registeredCookieValue && "" != window.registeredCookieValue) {
        var a =
            document.createElement("META");
        a.name = "WT.z_registered";
        a.content = window.encodeURIComponent(registeredCookieValue);
        document.getElementsByTagName("head")[0].appendChild(a)
    }
})();