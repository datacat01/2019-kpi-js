try {
    oracle.truste.api.getConsentDecision().consentDecision;
    oracle.truste.api.getConsentDecision().source;
} catch (err) {
    var oracle = oracle || {};
    oracle.truste = {};
    oracle.truste.api = {};
    (function() {
        var trusteCookieName = "notice_preferences";
        var trusteStorageItemName = "truste.eu.cookie.notice_preferences";
        this.getCookieName = function() {
            return trusteCookieName;
        };
        this.getStorageItemName = function() {
            return trusteStorageItemName;
        };
    }).apply(oracle.truste);
    (function() {
        var trusteCommon = oracle.truste;

        function getCookie(cookieKey) {
            var name = cookieKey + "=";
            var cookieArray = document.cookie.split(";");
            for (var i = 0; i < cookieArray.length; i++) {
                var c = cookieArray[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return null;
        }

        function getLocalStorageItem(storageKey) {
            if (typeof(Storage) !== "undefined") {
                return localStorage.getItem(storageKey);
            }
            return null;
        }

        function getTRUSTeLocalStorageValue(storageKey) {
            var value = getLocalStorageItem(storageKey);
            if (value != null) {
                var obj = JSON.parse(value);
                return obj.value;
            }
            return null;
        }
        this.getConsentCode = function() {
            var value = getTRUSTeLocalStorageValue(trusteCommon.getStorageItemName()) || getCookie(trusteCommon.getCookieName());
            if (value == null) {
                return -1;
            } else {
                return parseInt(value) + 1;
            }
        };
        this.getConsentDecision = function() {
            var value = this.getConsentCode();
            if (value == -1) {
                var text = '{"consentDecision": 0, "source": "implied"}';
                return JSON.parse(text);
            } else {
                var text = '{"consentDecision": ' + parseInt(value) + ', "source": "asserted"}';
                return JSON.parse(text);
            }
        };
    }).apply(oracle.truste.api);
}
var TRUSTeLevel = s_setConsentLevel(0);

function s_setConsentLevel(cLevel) {
    try {
        cLevel = truste.cma.callApi("getConsentDecision", "oracle.com").consentDecision;
    } catch (err) {
        cLevel = s_getCookieData("notice_preferences").split(":")[0];
        if (cLevel == "") {
            cLevel = 0;
        } else {
            cLevel = ++cLevel;
        }
    }
    return cLevel;
}

function s_getCookieData(label) {
    var labelLen = label.length;
    var cLen = document.cookie.length;
    var i = 0;
    var cEnd;
    while (i < cLen) {
        var j = i + labelLen;
        if (document.cookie.substring(i, j) == label) {
            cEnd = document.cookie.indexOf(";", j);
            if (cEnd == -1) {
                cEnd = document.cookie.length;
            }
            j++;
            return decodeURIComponent(document.cookie.substring(j, cEnd).replace("+", "%20"));
        }
        i++;
    }
    return "";
}
/*! Script to check Do Not Track settings in the browser */
var enable_tracking = true;
if (TRUSTeLevel == -1 || TRUSTeLevel == 0) {
    if (navigator.doNotTrack == 1 || window.doNotTrack == 1 || navigator.msDoNotTrack == 1) {
        enable_tracking = false;
    }
} else {
    if (TRUSTeLevel == 1) {
        enable_tracking = false;
    }
}
if (enable_tracking) {
    var s_account = "sunmysqldev";
    var sun_dynamicAccountSelection = true;
    var sun_dynamicAccountList = "sunmysql=mysql.com;sunmysql=mysql.de;sunmysql=mysql.fr;sunmysql=mysql.it;sunmysqldev=.";
    var s_siteid = "mysql:";
    if (typeof s_pageType == "undefined") {
        var s_pageName = window.location.host + window.location.pathname;
        s_pageName = s_pageName.replace(/www.mysql.com/, "");
        s_pageName = s_pageName.replace(/www.mysql./, "");
        s_pageName = s_pageName.replace(/.mysql.com/, ":");
        s_pageName = s_pageName.replace(/mysql.com/, "");
    }
    var sun_ssl = (window.location.protocol.toLowerCase().indexOf("https") != -1);
    if (sun_ssl == true) {
        var fullURL = "https://www.mysql.com/common/js/metrics/metrics_group1.js";
    } else {
        var fullURL = "http://www.mysql.com/common/js/metrics/metrics_group1.js";
    }
    document.write('<script type="text/javascript" src="' + fullURL + '"><\/script>');
    var mysql_host = location.hostname;
    if (mysql_host == "dev.mysql.com") {
        var mysql_url = window.location.pathname.toLowerCase();
        var mysql_split = mysql_url.split("/");
    }

    function s_postPlugins(s) {
        if (mysql_host == "dev.mysql.com") {
            if (mysql_split[1] == "doc") {
                s.prop31 = s.pageName;
                s.pageName = s.channel + " (site section)";
            }
        }
        if (mysql_host == "lists.mysql.com") {
            s.prop31 = s.pageName;
            s.pageName = s.channel + " (site section)";
        }
    }
}