/*
 switch_ranking.js 1.0.0
 Copyright (c) 2013 Rakuten.Inc
 Date : 2013-10-24 9:59:43
*/
(function() {
    jQuery.noConflict();
    var b = jQuery;
    b.RJS_Helpers && !navigator.userAgent.match(/MSIE 6/) && new function() {
        var a = this;
        b.extend(a, {
            settings: {
                ajaxtimer: [3, "Range", "1,99"],
                ajaxurl: ["", "Str", "^http(s?)+(:\\/\\/[a-zA-Z0-9_\\-\\.]+)(\\.rakuten\\.co\\.jp\\/)+([a-zA-Z0-9_&=\\?\\-\\.\\/#]+)"],
                enhancedrankingurl: ["", "Str", "^http(s?)+(:\\/\\/[a-zA-Z0-9_\\/\\-\\.]+)(\\.js)$"],
                normalrankingurl: ["", "Str", "^http(s?)+(:\\/\\/[a-zA-Z0-9_\\/\\-\\.]+)(\\.js)$"]
            },
            eobj: {
                config: b("#addRankingContentConfig")
            },
            status: {
                isTimeout: !1
            },
            initialize: function() {
                a.loadSettings() && a.createReady()
            },
            loadSettings: function() {
                a.settings = b.RJS_Helpers.readAttr(a.eobj.config, a.settings);
                if ("" == a.settings.ajaxurl || 512 < a.settings.ajaxurl.length || "" == a.settings.enhancedrankingurl || 512 < a.settings.enhancedrankingurl.length || "" == a.settings.normalrankingurl || 512 < a.settings.normalrankingurl.length) return !1;
                a.settings.ajaxtimer *= 1E3;
                return !0
            },
            createReady: function() {
                function c(a) {
                    var b = document.createElement("script");
                    b.src = a;
                    b.async = "async";
                    b.defer =
                        "defer";
                    a = document.getElementsByTagName("script")[0];
                    a.parentNode.insertBefore(b, a)
                }
                setTimeout(function() {
                    a.status.isTimeout = !0
                }, a.settings.ajaxtimer);
                b.ajax({
                    url: a.settings.ajaxurl,
                    cache: !1,
                    dataType: "jsonp",
                    data: null,
                    scriptCharset: "euc-jp",
                    timeout: a.settings.ajaxtimer,
                    success: function(b) {
                        a.status.isTimeout ? c(a.settings.normalrankingurl) : 0 == b.num ? c(a.settings.enhancedrankingurl) : c(a.settings.normalrankingurl)
                    },
                    error: function() {
                        c(a.settings.normalrankingurl)
                    }
                })
            }
        });
        a.initialize()
    }
})();