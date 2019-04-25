if (void 0 === Mozilla) var Mozilla = {};
! function() {
    "use strict";
    var a = {},
        t = {},
        n = 0;
    a.COOKIE_CODE_ID = "mozilla-notification-banner", a.COOKIE_EXPIRATION_DAYS = 21, a.COOKIE_INTERACTION_VALUE = "interacted", a.getCookie = function() {
        return Mozilla.Cookies.getItem(a.COOKIE_CODE_ID)
    }, a.cookieExpiresDate = function(e) {
        var n = e || new Date;
        return n.setTime(n.getTime() + 24 * a.COOKIE_EXPIRATION_DAYS * 60 * 60 * 1e3), n.toUTCString()
    }, a.setCookie = function(e) {
        Mozilla.Cookies.setItem(a.COOKIE_CODE_ID, e, a.cookieExpiresDate(), "/")
    }, a.doRedirect = function(e) {
        window.location.href = e
    }, a.trackGAClose = function() {
        window.dataLayer.push({
            "data-banner-name": t.name,
            "data-banner-dismissal": "1",
            eAction: "banner dismissal",
            eLabel: t.gaCloseLabel,
            event: "in-page-interaction"
        })
    }, a.close = function() {
        var e = document.querySelector(".notification-banner"),
            n = e.querySelector(".notification-banner-close"),
            t = e.querySelector(".notification-banner-confirm");
        e && (n.removeEventListener("click", a.close, !1), t.removeEventListener("click", a.confirm, !1), document.body.removeChild(e), a.setCookie(a.COOKIE_INTERACTION_VALUE), a.trackGAClose())
    }, a.trackGAConfirm = function() {
        window.dataLayer.push({
            "data-banner-name": t.name,
            "data-banner-click": "1",
            eAction: t.gaConfirmAction,
            eLabel: t.gaConfirmLabel,
            event: "in-page-interaction"
        })
    }, a.confirm = function(e) {
        "function" == typeof t.confirmClick ? (e.preventDefault(), t.confirmClick.call(e.target), a.setCookie(a.COOKIE_INTERACTION_VALUE), a.trackGAConfirm()) : e.metaKey || e.ctrlKey ? (a.setCookie(a.COOKIE_INTERACTION_VALUE), a.trackGAConfirm()) : (e.preventDefault(), a.setCookie(a.COOKIE_INTERACTION_VALUE), a.trackGAConfirm(), a.doRedirect(e.target))
    }, a.bind = function() {
        var e = document.querySelector(".notification-banner .notification-banner-confirm"),
            n = document.querySelector(".notification-banner .notification-banner-close");
        e.addEventListener("click", a.confirm, !1), n.addEventListener("click", a.close, !1)
    }, a.create = function(e) {
        var n = document.createDocumentFragment(),
            t = document.createElement("div"),
            i = document.createElement("div"),
            o = document.createElement("div"),
            a = document.createElement("h2"),
            r = document.createElement("p"),
            c = document.createElement("a"),
            l = document.createElement("button");
        return t.className = "notification-banner", i.className = "content", o.className = "notification-content-container", a.innerHTML = e.heading, r.innerHTML = e.message, c.className = "notification-banner-confirm", c.id = "notification-banner-confirm", c.href = e.url, c.innerHTML = e.confirm, l.className = "notification-banner-close", l.innerHTML = e.close, n.appendChild(t), t.appendChild(i), i.appendChild(o), o.appendChild(a), o.appendChild(r), o.appendChild(c), i.appendChild(l), n
    }, a.trackGAShow = function(e) {
        var n = {
            "data-banner-name": e.name,
            "data-banner-impression": "1",
            event: "non-interaction"
        };
        e.experimentVariant && e.experimentName && (n["data-ex-variant"] = e.experimentVariant, n["data-ex-experiment"] = e.experimentName, n["data-ex-present"] = "true"), window.dataLayer.push(n)
    }, a.show = function(e) {
        var n = a.create(e);
        n && (document.body.insertBefore(n, document.body.firstChild), a.bind(), a.setCookie(e.id), a.trackGAShow(e))
    }, a.validateOptions = function(e) {
        return "string" == typeof e.name && "string" == typeof e.id && "string" == typeof e.heading && "string" == typeof e.message && "string" == typeof e.confirm && "string" == typeof e.gaConfirmAction && "string" == typeof e.gaConfirmLabel && "string" == typeof e.url && "string" == typeof e.close && "string" == typeof e.gaCloseLabel
    }, a.getSampleRate = function() {
        return n
    }, a.setSampleRate = function(e) {
        n = e && "boolean" != typeof e ? isNaN(e) ? 0 : Math.min(Math.max(parseFloat(e), 0), 1) : 0
    }, a.withinSampleRate = function() {
        return !n || Math.random() <= n
    }, a.getOptions = function(e) {
        var n = a.getCookie(),
            t = Math.floor(Math.random() * e.length),
            i = null;
        if (n) {
            for (var o in e)
                if (e[o].id === n) {
                    i = e[o];
                    break
                }
        } else a.withinSampleRate() && (i = e[t]);
        return i
    }, a.cutsTheMustard = function() {
        return "querySelector" in document && "querySelectorAll" in document && "addEventListener" in window && "createDocumentFragment" in document
    }, a.init = function(e) {
        if (a.cutsTheMustard() && "object" == typeof e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            if (!a.validateOptions(t)) return;
            "undefined" != typeof Mozilla.Cookies && Mozilla.Cookies.enabled() && a.getCookie() !== a.COOKIE_INTERACTION_VALUE && a.show(t)
        }
    }, window.Mozilla.NotificationBanner = a
}(), $(function() {
    "use strict";
    var n = window.Mozilla.Client,
        e = window.Mozilla.Utils;
    if (void 0 !== e && void 0 !== n) {
        var t = {
            id: "fx-out-of-date-banner",
            name: "fx-out-of-date",
            heading: e.trans("global-fx-out-of-date-banner-heading"),
            message: e.trans("global-fx-out-of-date-banner-message"),
            confirm: e.trans("global-fx-out-of-date-banner-confirm"),
            url: "/firefox/download/thanks/",
            close: e.trans("global-close"),
            gaConfirmAction: "Update Firefox",
            gaConfirmLabel: "Firefox for Desktop",
            gaCloseLabel: "Close"
        };
        Mozilla.NotificationBanner.COOKIE_CODE_ID = "moz-notification-fx-out-of-date", n.isFirefoxDesktop && n.getFirefoxDetails(function(e) {
            n.isFirefoxOutOfDate(e.version, 2) && "release" === e.channel && "undefined" != typeof Mozilla.Cookies && Mozilla.Cookies.enabled() && Mozilla.NotificationBanner.init(t)
        })
    }
});