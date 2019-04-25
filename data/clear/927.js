define("classes/CampaignTracking/TrafficMonitorAbstract/Controller", ["abstracts/Controller", "lodash"], function(r, s) {
    return r.extend({
        urlPattern: "",
        initialize: function() {
            this.parent(), this.hash = location.hash.replace("#", ""), this.search = location.search.replace("?", ""), this.referrer = document.referrer ? document.referrer.split("/")[2] : "", this.hasDataInUrl() && (this.alreadyHasStoredCookie() || this.store())
        },
        hasDataInUrl: function() {
            return this.urlPattern.test(this.hash) || this.urlPattern.test(this.search)
        },
        alreadyHasStoredCookie: function() {
            return !!this.model.alreadyHasStoredCookie()
        },
        store: function() {},
        processArgs: function(r) {
            var t, e = {};
            return t = r.split("&"), $.forEach(t, function(r) {
                if (r) {
                    var t = r.split("=");
                    e[t[0]] = t[1]
                }
            }), e
        },
        storeArgs: function(r, t) {
            var e, a;
            e = s.merge(this.processArgs(this.hash), this.processArgs(this.search)), $.forEach(this.defaultParameters, $.proxy(function(r) {
                e[r] = e[r] || "";
                var t = e[r];
                this.model.addParameter(r + "=" + t)
            }, this)), this.model.addParameter(r + "=" + document.referrer), a = location.protocol + "//" + location.host + location.pathname, this.model.addParameter(t + "=" + a)
        }
    })
});
define("models/CampaignTracking/UtmModel", ["abstracts/Model", "datasources/CookieDataSource"], function(t, e) {
    return t.extend({
        _singleton: !0,
        cookieName: "uTrack",
        data: {
            storedUtmValue: "",
            utmParameters: {}
        },
        initialize: function() {
            this.parent(), this.dataSource = e.getInstance(), this.set("storedUtmValue", this.dataSource.get(this.cookieName))
        },
        setCookieFromCollection: function() {
            var t;
            $.isEmptyObject(this.get("utmParameters")) || (t = this.createCookieStr(), this.setCookie(t), this.set("storedUtmValue", t))
        },
        createCookieStr: function() {
            var t = this.get("utmParameters"),
                a = [];
            return $.forEach(t, function(t, e) {
                a.push(e + "=" + t)
            }), a.join("&")
        },
        setCookie: function(t) {
            this.dataSource.set(this.cookieName, t, {
                expires: 90,
                path: "/",
                domain: "video.ibm.com"
            })
        },
        alreadyHasStoredCookie: function() {
            return !!this.dataSource.get(this.cookieName)
        },
        addParameter: function(t) {
            var e = t.split("="),
                a = e[0];
            this.data.utmParameters[a] = e[1] || ""
        }
    })
});
define("models/CampaignTracking/UtmSessionModel", ["models/CampaignTracking/UtmModel"], function(e) {
    return e.extend({
        cookieName: "uSessionTrack",
        setCookie: function(e) {
            this.dataSource.set(this.cookieName, e, {
                path: "/",
                domain: "video.ibm.com"
            })
        }
    })
});
define("classes/CampaignTracking/Utm/Controller", ["classes/CampaignTracking/TrafficMonitorAbstract/Controller", "models/CampaignTracking/UtmModel"], function(e, r) {
    return e.extend({
        urlPattern: /utm_/,
        defaultParameters: ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
        initialize: function() {
            this.setModel(), this.parent(), this.hasDataInUrl() || !this.isOrganic() || this.model.alreadyHasStoredCookie() || this.store({
                isOrganic: !0
            }), this.hasDataInUrl() || !this.isReferral() || this.model.alreadyHasStoredCookie() || this.store({
                isReferral: !0
            }), this.model.alreadyHasStoredCookie() || this.hasDataInUrl() || this.store({
                isDirect: !0
            })
        },
        setModel: function() {
            this.model = r.getInstance()
        },
        store: function(e) {
            var r = e && e.isReferral,
                t = e && e.isDirect,
                i = e && e.isOrganic;
            this.storeArgs("utm_referer", "utm_request_uri"), t ? this.storeDirectArgs() : i ? this.storeOrganicArgs() : r && this.storeReferralArgs(), this.model.setCookieFromCollection()
        },
        isOrganic: function() {
            var e = !1;
            return this.referrer && -1 < this.referrer.search(/www\.google|aol\.com|ask\.com|baidu\.cn|baidu\.co\.th|baidu\.com|bing\.com|duckduckgo\.com|yahoo\.co\.jp|yahoo\.com|yandex\.by|yandex\.com|yandex\.com\.tr|yandex\.kz|yandex\.ru|yandex\.ua/) && (e = !0), e
        },
        isReferral: function() {
            var e = this.referrer,
                r = !0;
            return (!e || -1 < e.indexOf("video.ibm.com") || -1 < e.indexOf("ustream.tv") || -1 < e.indexOf("ustream-adm.in")) && (r = !1), r
        },
        storeOrganicArgs: function() {
            this.referrer && this.model.addParameter("utm_source=" + this.referrer), this.model.addParameter("utm_medium=organic")
        },
        storeReferralArgs: function() {
            this.referrer && this.model.addParameter("utm_source=" + this.referrer), this.model.addParameter("utm_medium=referral")
        },
        storeDirectArgs: function() {
            this.model.addParameter("utm_source=direct"), this.model.addParameter("utm_medium=direct")
        }
    })
});
define("classes/CampaignTracking/UtmSession/Controller", ["classes/CampaignTracking/Utm/Controller", "models/CampaignTracking/UtmSessionModel"], function(n, e) {
    return n.extend({
        initialize: function() {
            this.parent(), this.hasDataInUrl() && this.store()
        },
        setModel: function() {
            this.model = e.getInstance()
        }
    })
});
define("classes/CampaignTracking/Controller", ["abstracts/Controller", "classes/CampaignTracking/Utm/Controller", "classes/CampaignTracking/UtmSession/Controller", "storage"], function(i, o, e, n) {
    return i.extend({
        initialize: function() {
            this.parent();
            var i = $.cookie("cmapi_cookie_privacy");
            i && -1 !== i.indexOf("required") ? ($.cookie("uTrack", null, {
                domain: "video.ibm.com",
                path: "/"
            }), $.cookie("uSessionTrack", null, {
                domain: "video.ibm.com",
                path: "/"
            })) : (new o, new e), $.cookie("itmTracking", null, {
                domain: "video.ibm.com",
                path: "/"
            }), $.cookie("itmSessionTracking", null, {
                domain: "video.ibm.com",
                path: "/"
            }), n.remove("local.storedUrls"), n.remove("local.recentlyWatched")
        }
    })
});