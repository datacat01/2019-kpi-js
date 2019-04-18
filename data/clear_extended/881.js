jQuery(document).ready(function(a) {
    var i = a.cookie("affwp_ref"),
        e = (a.cookie("affwp_ref_visit_id"), a.cookie("affwp_campaign"), AFFWP.referral_credit_last);
    if (1 === AFFWP.debug) {
        function f(a) {
            var i = new RegExp(a + "=([^;]+)").exec(document.cookie);
            return null != i && unescape(i[1])
        }
        var n = ["background: transparent", "border-bottom: 2px solid #E34F43", "color: black", "display: block", "line-height: 18px", "text-align: left", "margin: 4px", "font-weight: bold"].join(";");
        console.affwp = function() {
            Array.prototype.unshift.call(arguments, "%c * AffiliateWP: ", n + " *"), console.log.apply(console, arguments)
        }, console.affwp("The following data is provided from AffiliateWP debug mode. To disable this information, please deactivate debug mode in AffiliateWP."), console.affwp("Available debug data: \n" + JSON.stringify(Object({
            ajax_url: affwp_scripts.ajaxurl.length ? JSON.stringify(affwp_scripts.ajaxurl) : "unavailable",
            ref: JSON.stringify(AFFWP.referral_var ? AFFWP.referral_var : f("affwp_ref")),
            visit_cookie: f("affwp_ref_visit_id") ? JSON.stringify(f("affwp_ref_visit_id")) : "unavailable",
            credit_last: AFFWP.referral_credit_last ? JSON.stringify(AFFWP.referral_credit_last) : "unavailable",
            campaign: JSON.stringify(s().campaign ? s().campaign : f("affwp_campaign")),
            currency: affwp_debug_vars.currency.length ? JSON.stringify(affwp_debug_vars.currency) : "unavailable",
            version: affwp_debug_vars.version.length ? JSON.stringify(affwp_debug_vars.version) : "unavailable"
        }))), console.affwp("Integrations\n" + JSON.stringify(Object("undefined" != typeof affwp_debug_vars && affwp_debug_vars.integrations)))
    }
    if ("1" == e || !i) {
        var r = s()[AFFWP.referral_var],
            o = s().campaign;
        if (void 0 === r || a.isFunction(r)) {
            var t = window.location.pathname.split("/");
            a.each(t, function(a, i) {
                AFFWP.referral_var == i && (r = t[a + 1])
            })
        }
        a.isFunction(r) || (void 0 === r || a.isNumeric(r) ? r && !i ? l(r, o) : "1" == e && r && i && r !== i && (a.removeCookie("affwp_ref"), l(r, o)) : a.ajax({
            type: "POST",
            data: {
                action: "affwp_get_affiliate_id",
                affiliate: r
            },
            url: affwp_scripts.ajaxurl,
            success: function(f) {
                "1" == f.data.success && ("1" == e && i && i != f.data.affiliate_id && a.removeCookie("affwp_ref"), ("1" == e && i && i != f.data.affiliate_id || !i) && l(f.data.affiliate_id, o))
            }
        }).fail(function(a) {
            window.console && window.console.log && console.log(a)
        }))
    }

    function l(i, e) {
        c("affwp_ref", i), a.ajax({
            type: "POST",
            data: {
                action: "affwp_track_visit",
                affiliate: i,
                campaign: e,
                url: document.URL,
                referrer: document.referrer
            },
            url: affwp_scripts.ajaxurl,
            success: function(a) {
                c("affwp_ref_visit_id", a), c("affwp_campaign", e)
            }
        }).fail(function(a) {
            window.console && window.console.log && console.log(a)
        })
    }

    function c(i, e) {
        "cookie_domain" in AFFWP ? a.cookie(i, e, {
            expires: AFFWP.expiration,
            path: "/",
            domain: AFFWP.cookie_domain
        }) : a.cookie(i, e, {
            expires: AFFWP.expiration,
            path: "/"
        })
    }

    function s() {
        for (var a, i = [], e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), f = 0; f < e.length; f++) {
            a = e[f].split("="), i.push(a[0]);
            var n = void 0 === a[1] ? 0 : 1,
                r = a[n].indexOf("#");
            a[n] = a[n].substring(0, -1 != r ? r : a[n].length), i[a[0]] = a[n]
        }
        return i
    }
});