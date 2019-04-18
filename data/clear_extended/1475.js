/*! ORA_OCOM.JS - BUILD: 5th September 2018 v1.82 */
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
var ora_local = "ora_code_ocom.js";
var ora_global = "ora_code.js";
var TRUSTeLevel = s_getConsentLevel();
var ora_path = "/us/assets/metrics/";
var isTest = (location.host.indexOf("-stage") != -1 || location.host.indexOf("-content") != -1 || location.host.indexOf("localhost") != -1 || location.host.indexOf(".us.oracle.com") != -1 || location.host.indexOf("127.0.0.1") != -1 || location.host.indexOf("-dev") != -1 || location.host.indexOf("www-sites") != -1);
var ora_root = (isTest) ? "://www-portal-stage.oracle.com" : "://www.oracleimg.com";
var host_type = (window.location.protocol.toLowerCase().indexOf("https") != -1) ? "https" : "http";
var enable_tracking = true;
if (TRUSTeLevel == -1 || TRUSTeLevel == 0) {
    if (navigator.doNotTrack == 1 || window.doNotTrack == 1 || navigator.msDoNotTrack == 1) {
        enable_tracking = false;
    }
    /*! Site Catalyst Tag */
}
if (TRUSTeLevel != 1 && enable_tracking) {
    document.write("<script type='text/javascript' src='" + host_type + ora_root + ora_path + ora_local + "'><\/script>");
    document.write("<script type='text/javascript' src='" + host_type + ora_root + ora_path + ora_global + "'><\/script>");
}

function s_getConsentLevel() {
    var cStatus = new Array(-1, "NoTRUSTe");
    try {
        cStatus[0] = oracle.truste.api.getConsentDecision().consentDecision;
        cStatus[1] = oracle.truste.api.getConsentDecision().source;
    } catch (err) {
        cStatus[0] = -1;
    }
    if (cStatus[0] == -1) {
        try {
            cStatus[0] = (truste.cma.callApi("getConsent", "oracle.com", null, null, "advertising").consent == "approved") ? 3 : -1;
            cStatus[1] = truste.cma.callApi("getConsentDecision", "oracle.com").source;
            if (cStatus[0] == -1) {
                cStatus[0] = (truste.cma.callApi("getConsent", "oracle.com", null, null, "functional").consent == "approved") ? 2 : -1;
                cStatus[1] = truste.cma.callApi("getConsentDecision", "oracle.com").source;
            }
            if (cStatus[0] == -1) {
                cStatus[0] = 1;
            }
            if (cStatus[1] == "implied") {
                cStatus[0] = 0;
            }
        } catch (err) {
            cStatus[0] = -1;
        }
    }
    if (cStatus[0] == -1) {
        try {
            cStatus[0] = truste.cma.callApi("getConsentDecision", "oracle.com").consentDecision;
            cStatus[1] = truste.cma.callApi("getConsentDecision", "oracle.com").source;
        } catch (err) {
            cStatus[0] = -1;
        }
    }
    return cStatus[0];
}