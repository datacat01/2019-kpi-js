(function() {
    var o = [].indexOf || function(o) {
        for (var t = 0, n = this.length; n > t; t++)
            if (t in this && this[t] === o) return t;
        return -1
    };
    window.hubspot = window.hubspot || {};
    window.hubspot.nav = window.hubspot.nav || {};
    window.hubspot.nav.promise = {
        accepted: !1,
        failed: !1,
        handlers: [],
        failHandlers: [],
        done: function(o) {
            this.accepted ? o() : this.handlers.push(o)
        },
        then: function(o) {
            this.done(o);
            return this
        },
        fail: function(o) {
            this.failed ? o() : this.failHandlers.push(o)
        },
        accept: function() {
            var o;
            if (!this.accepted) {
                this.accepted = !0;
                o = this.handlers.length;
                for (; o--;) this.handlers[o]()
            }
        },
        resolve: function() {
            this.accept()
        },
        reject: function(o) {
            var t;
            if (!this.accepted && !this.rejected) {
                this.rejected = !0;
                t = this.failHandlers.length;
                for (; t--;) this.failHandlers[t](o)
            }
        },
        isRejected: function() {
            return this.rejected
        }
    };
    window.navWaitForJquery = function(o, t) {
        var n;
        null == t && (t = 0);
        if (null != window.jQuery) return o();
        if (t >= 10) return window.reportNavigationError("Can't render the nav. Timeout waiting for jQuery.");
        n = 50 * (t + 1) * Math.pow(1.2, t);
        return setTimeout(function() {
            window.navWaitForJquery(o, t + 1)
        }, n)
    };
    window.navAsyncContentCallback = function(o, t) {
        null == t && (t = 0);
        return window.navWaitForJquery(function() {
            jQuery(function() {
                var t, n, e, a, i, r, s, l, d, c, p;
                window.futurejQuery = window.futurejQuery || function() {};
                try {
                    l = jQuery("#hs-nav-v3.placeholder-nav");
                    if (o.indexOf('data-navigation-version="unified-navigation-ui"') > -1) {
                        if (window.hubspot.portal && window.hubspot.portal.id) try {
                            window.localStorage["NAVIGATION_V4_PLACEHOLDER_" + window.hubspot.portal.id] = !0
                        } catch (u) {}
                        l.attr("id", "hs-nav-v4").prepend(o);
                        return
                    }
                    try {
                        window.localStorage["NAVIGATION_V4_PLACEHOLDER_" + window.hubspot.portal.id] && window.localStorage.removeItem("NAVIGATION_V4_PLACEHOLDER_" + window.hubspot.portal.id)
                    } catch (u) {}
                    if ("academy.hubspot.com" === window.location.hostname || function() {
                            try {
                                return window.localStorage && window.localStorage.FORCE_ACADEMY_CHECK
                            } catch (o) {}
                        }()) {
                        r = jQuery(".main-nav");
                        if (r.length > 1)
                            for (a = c = 1, p = r.length - 1; p >= 1 ? p >= c : c >= p; a = p >= 1 ? ++c : --c) jQuery(r[a]).parents("#hs-nav-v3").remove()
                    }
                    e = jQuery("#hs-nav-v3:not(.placeholder-nav)");
                    d = jQuery("div.hs3-public-header");
                    s = function() {
                        var o, t, e, a;
                        e = ["no-bottom-margin"];
                        a = [];
                        for (o = 0, t = e.length; t > o; o++) {
                            n = e[o];
                            l.hasClass(n) ? a.push(n) : a.push("")
                        }
                        return a
                    }();
                    t = o.indexOf('class="') + 7;
                    o = o.slice(0, t) + ("external-nav " + s.join(" ") + " ") + o.slice(t);
                    if (e.length && l.length) {
                        l.remove();
                        i = function(o, t) {
                            var n, e;
                            e = jQuery().add(o).add(t);
                            n = 1 === e.index(o);
                            return n
                        };
                        d.length && i(d, e) && e.after(d)
                    } else l.replaceWith(o);
                    window.hubspot && window.hubspot.nav && window.hubspot.nav.init && window.hubspot.nav.init()
                } catch (h) {
                    window.hubspot.nav.promise.reject();
                    reportNavigationError("Error loading the placeholder nav!", h)
                }
                window.hubspot.nav.promise.accept()
            })
        })
    };
    window.reportNavigationError = function(o, t) {
        if (void 0 !== window.console && console.error) {
            console.error(o);
            void 0 !== t && console.error(t)
        }
        null != window.newrelic && null != window.newrelic.addPageAction && newrelic.addPageAction("navigationError", {
            message: o
        })
    };
    window.addNavHTMLAndScript = function() {
        var t, n, e, a, i, r, s, l, d, c, p, u, h;
        t = "app.hubspot.com";
        n = "static.hsappstatic.net";
        e = "app.hubspot.com";
        a = "https:";
        i = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
        if (window.location.hostname.indexOf("hubspotqa") >= 0 || window.location.hostname.indexOf("getsidekickqa") >= 0 || "qa" === ("undefined" != typeof hubspot && null !== hubspot && null != (p = hubspot.server) ? p.env : void 0)) {
            c = "local" === window.NAVIGATION_ENV || function() {
                try {
                    return window.localStorage && "local" === window.localStorage.NAVIGATION_ENV
                } catch (o) {}
            }();
            d = "local" === window.NAVIGATION_ASSET_ENV || function() {
                try {
                    return window.localStorage && "local" === window.localStorage.NAVIGATION_ASSET_ENV
                } catch (o) {}
            }();
            e = "app.hubspotqa.com";
            if (c) {
                t = "local.hubspotqa.com";
                a = window.location.protocol
            } else t = "app.hubspotqa.com";
            if (c || d) {
                n = "local.hubspotqa.com";
                e = "local.hubspotqa.com"
            }
        }
        try {
            if (null != (u = window.localStorage) ? u.NAVIGATION_PROD_LOCAL : void 0) {
                t = "local.hubspot.com";
                n = "local.hubspot.com";
                e = "local.hubspot.com"
            }
        } catch (w) {}
        r = function() {
            var o, t, r, s, l;
            o = document.createElement("link");
            o.type = "text/css";
            o.rel = "stylesheet";
            o.href = a + "//" + n + "/navigation-ui/static-2.217/sass/bundle.css";
            i.appendChild(o);
            try {
                t = null != (s = window.hubspot) && null != (l = s.portal) ? l.id : void 0;
                !t && window.hubspot.PortalIdParser && window.hubspot.PortalIdParser.get({
                    preserveGlobalId: !0
                }) && (t = window.hubspot.PortalIdParser.get({
                    preserveGlobalId: !0
                }));
                if (window.localStorage["NAVIGATION_V4_PLACEHOLDER_" + t]) {
                    o = document.createElement("link");
                    o.type = "text/css";
                    o.rel = "stylesheet";
                    o.href = a + "//" + e + "/unified-nav/bundle.css";
                    i.appendChild(o);
                    window.hubspot.navigation || (window.hubspot.navigation = {});
                    window.hubspot.navigation.loadedV4Style = !0;
                    r = document.getElementById("hs-nav-v3");
                    r && r.classList.add("nav-v4-placeholder")
                }
            } catch (d) {}
        };
        l = function() {
            var o;
            o = document.createElement("script");
            o.type = "text/javascript";
            o.src = a + "//" + n + "/navigation-ui/static-2.217/js/navigation.js";
            o.async = !0;
            o.onerror = function() {
                return window.reportNavigationError("Error loading the nav script!")
            };
            return i.appendChild(o)
        };
        s = function() {
            var n, e, r, s, l, d, c, p, u, h, w, b, m, f, g, v, y, E, A;
            if (window.hubspot.portal && window.hubspot.portal.id && function() {
                    try {
                        return window.localStorage && window.localStorage["NAVIGATION_V4_PLACEHOLDER_" + window.hubspot.portal.id]
                    } catch (o) {}
                }()) {
                h = document.createElement("style");
                u = document.createTextNode(".main-nav { border-top: 3px solid #ff7a59 !important; height: 60px; background: #2E3F50 !important; box-shadow: none !important; }");
                h.appendChild(u);
                i.appendChild(h)
            }
            m = "";
            p = [];
            p.push("fallbackViewName=public_signed_out");
            window.hubspot && (window.hubspot.PortalIdParser && hubspot.PortalIdParser.get({
                preserveGlobalId: !0
            }) ? p.push("portalId=" + hubspot.PortalIdParser.get({
                preserveGlobalId: !0
            })) : window.hubspot.portal && window.hubspot.portal.id && p.push("portalId=" + window.hubspot.portal.id));
            c = [];
            "undefined" != typeof hubspot && null !== hubspot && null != hubspot.navigation && null != hubspot.navigation.options && (c = hubspot.navigation.options);
            null != ("undefined" != typeof hubspot && null !== hubspot && null != (v = hubspot.zorse) ? v.supressed : void 0) && c.push("suppress-help-widget");
            null != ("undefined" != typeof hubspot && null !== hubspot ? hubspot.fireAlarmDisabled : void 0) && c.push("disable-fire-alarm");
            c.length > 0 && p.push("options=" + JSON.stringify(c));
            if ("undefined" != typeof hubspot && null !== hubspot && null != (y = hubspot.navigation) ? y.mode : void 0)("undefined" != typeof hubspot && null !== hubspot && null != (E = hubspot.navigation) ? E.mode : void 0) && p.push("mode=" + hubspot.navigation.mode);
            else {
                n = ["academy.hubspot.com", "ideas.hubspot.com", "hubspot.uservoice.com", "forums.hubspot.com", "help.hubspot.com", "knowledge.hubspot.com", "hubspot.com", "www.hubspot.com", "offers.hubspot.com", "blog.hubspot.com"];
                A = window.location.host, e = o.call(n, A) >= 0 ? "MOST_RECENT" : window.location.pathname.match(/^\/((contacts\/\d+\/settings)|(contacts\/\d+\/import))|(settings)|(integrations)|(notifications)|(analytics)/) ? "MOST_RECENT" : window.location.pathname.match(/^\/sales/) ? "SALES" : window.location.pathname.match(/^\/tally/) ? "SERVICES" : window.location.pathname.match(/^\/developer/) ? "DEVELOPMENT" : window.location.pathname.match(/^\/((partners\/\d+\/clients)|(\d+\/providers\/)|(partner-inbound-success-training)|(partner\/\d+\/*)|(partner-benchmark\/\d+)|(partner-resources)|(partner-capacity))/) ? "ADAPTIVE" : (window.location.pathname.match(/^\/(marketing|lead-flows|leadin)/), "MARKETING");
                p.push("mode=" + e)
            }
            s = "en";
            g = window.location.host + window.location.pathname;
            d = {
                de: ["hubspot.de", "www.hubspot.de", "hubspotqa.de", "www.hubspotqa.de", "local.hubspot.de", "local.hubspotqa.de", "marketing.grader.com/de", "marketing.graderqa.com/de", "local.grader.com/de", "local.graderqa.com/de"],
                ja: ["hubspot.jp", "www.hubspot.jp", "hubspotqa.jp", "local.hubspotqa.jp", "local.hubspot.jp", "marketing.grader.com/ja", "marketing.graderqa.com/ja", "local.grader.com/ja", "local.graderqa.com/ja"],
                es: ["hubspot.es", "www.hubspot.es", "hubspotqa.es", "www.hubspotqa.es", "local.hubspot.es", "local.hubspotqa.es", "marketing.grader.com/es", "marketing.graderqa.com/es", "local.grader.com/es", "local.graderqa.com/es"],
                pt: ["br.hubspot.com", "www.br.hubspot.com", "br.hubspotqa.com", "local.hubspotqa.br", "local.hubspot.br", "marketing.grader.com/pt", "marketing.graderqa.com/pt", "local.grader.com/pt", "local.graderqa.com/pt"],
                fr: ["hubspot.fr", "www.hubspot.fr", "www.hubspotqa.fr", "local.hubspotqa.fr", "local.hubspot.fr"]
            };
            for (l in d)
                for (b in d[l]) {
                    w = d[l][b];
                    0 === g.indexOf(w) && (s = l)
                }
            p.push("fallbackViewLang=" + s);
            p.length > 0 && (m += p.join("&"));
            r = a + "//" + t + "/nav/render?" + m;
            f = new XMLHttpRequest;
            f.open("GET", r, !0);
            f.onreadystatechange = function() {
                return 4 === this.readyState ? this.status >= 200 && this.status < 400 ? window.navAsyncContentCallback(this.responseText) : window.reportNavigationError("Error loading the nav JSON API!") : void 0
            };
            f.withCredentials = !0;
            f.send();
            return f = null
        };
        null != (h = window.performance) && "function" == typeof h.mark && h.mark("start_loading_nav_assets");
        "function" == typeof console.timeStamp && console.timeStamp("start_loading_nav_assets");
        r();
        l();
        return s()
    };
    window.addNavHTMLAndScript(0)
}).call(this);