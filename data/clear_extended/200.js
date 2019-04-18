GHebayContent = ebayContent = window.ebayContent || {};
ebayContent["GlobalHeaderWeb/GHJavascriptContent"] = {
    msg_loading: "Please wait",
    signinURL: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn"></a>',
    errL10n: "Sorry, this feature is currently not supported on this page",
    roverurl: '<a href="http://rover.ebay.com"></a>',
    switchToMobile: "Switch to mobile site",
    close: "Close",
    dismiss: "Dismiss"
};
GHJSLoaded = 1;
(function(c) {
    if ("undefined" !== typeof c && ("undefined" === typeof GH || !GH)) {
        var d = "https:" == document.location.protocol ? !0 : !1;
        GH = {
            componentID: "#gh",
            CompConstructors: {},
            jQ: c,
            userRecog: !1,
            userAuth: !1,
            cacheAC: {},
            alerts: {},
            acPrevCatID: 0,
            build: "114rcb",
            isSelectOptionsBoxShown: !1,
            vCJar: null,
            L10N: ebayContent["GlobalHeaderWeb/GHJavascriptContent"],
            sec: d,
            isDefined: function(a) {
                return "undefined" !== typeof window[a]
            },
            userFN: "",
            userID: "",
            ghEBActive_id: "gh-eb-active",
            ghEBAlerts_id: "#gh-eb-Alerts",
            ghAC_id: "#gh-ac",
            currentTime: ~~((new Date).getTime() /
                6E4),
            userAgent: navigator.userAgent,
            GHlocalStorage: "undefined" !== typeof localStorage && null !== localStorage ? localStorage : 0,
            oldRaptor: "undefined" !== typeof ejo && "undefined" !== typeof ejo.dom,
            pi: "http" + (d ? "s://securepics" : "://p") + ".ebaystatic.com/aw/pics/",
            oldDT: "BackCompat" == document.compatMode,
            isIE: /msie/.test(navigator.userAgent.toLowerCase()),
            isIE8: window.attachEvent && !window.addEventListener,
            docMode: document.documentMode || 0,
            undefinedStr: "undefined",
            functionStr: "function",
            fnetEnabled: !0,
            disablePDS: !1,
            isMweb: !1,
            Events: {
                eventsList: {},
                publish: function(a, b) {
                    this.eventsList[a] && !(1 > this.eventsList[a].length) && this.eventsList[a].forEach(function(a) {
                        a(b || {})
                    })
                },
                subscribe: function(a, b) {
                    this.eventsList[a] || (this.eventsList[a] = []);
                    this.eventsList[a].push(b)
                }
            },
            init: function() {
                var a, b;
                c.extend(ebayContent, GHebayContent);
                GH.C = GH.isDefined("GH_config") ? GH_config : {};
                GH.GHSW = GH.GHSW || {};
                GH.isIE8 || (delete GH_config, delete GHjQ, delete GHJSLoaded, delete GHebayContent);
                for (b in GH.CompConstructors) try {
                    a = GH[b] = new GH.CompConstructors[b],
                        "function" === typeof a.execute_immediately && a.execute_immediately()
                } catch (d) {
                    "undefined" !== typeof console && console.log("GH " + b + " const: " + d)
                }
                c(window).on("load.gh", function() {
                    "function" == typeof window.requestAnimationFrame ? window.requestAnimationFrame(GH.windowLoad) : GH.windowLoad()
                });
                setTimeout("GH.windowLoad()", 2E4);
                var e = function(a) {
                        if (document.addEventListener || "load" === a.type || "complete" === document.readyState) document.addEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.detachEvent("onreadystatechange",
                            e), f()
                    },
                    f = function() {
                        for (b in GH.CompConstructors)
                            if (GH[b] && "function" === typeof GH[b].init) try {
                                GH[b].init()
                            } catch (a) {
                                "undefined" !== typeof console && console.log("GH " + b + " init: " + a)
                            }
                        if ("complete" === document.readyState || "interactive" === document.readyState) GH.windowLoad(), GH.Util.cTImg(GH.ghiIMP + 98)
                    };
                "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(f) : document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent("onreadystatechange",
                    e)
            },
            windowLoad: function() {
                var a;
                if (!GH.windowLoaded)
                    for (objName in GH.windowLoaded = !0, GH.CompConstructors) try {
                        a = GH[objName], "function" === typeof a.execute_at_windowload && a.execute_at_windowload()
                    } catch (b) {
                        "undefined" !== typeof console && console.log("GH " + objName + " ex on load: " + b)
                    }
            },
            add: function(a, b) {
                GH.CompConstructors[a] = b;
                GHebayContent = ebayContent
            }
        }
    }
})("undefined" !== typeof GHjQ ? GHjQ : jQuery);
(function(c) {
    GH.add("Util", function() {
        var k, o, r = GH.L10N,
            t = GH.GHSW,
            s = GH.isDefined,
            u = GH.sec,
            q = {},
            p;
        c.browser || (p = navigator.userAgent.toLowerCase(), p = /(chrome)[ \/]([\w.]+)/.exec(p) || /(webkit)[ \/]([\w.]+)/.exec(p) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(p) || /(msie) ([\w.]+)/.exec(p) || 0 > p.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(p) || [], q[p[1] || ""] = !0, q.version = p[2] || "0", q.chrome ? q.webkit = !0 : q.webkit && (q.safari = !0), c.browser = q);
        return {
            sec: u,
            geo: !1,
            getPageID: function() {
                return GH.C.pageId
            },
            getSiteID: function() {
                return GH.C.siteId
            },
            getPrevCategoryID: function() {
                return GH.acPrevCatID
            },
            isGeo: function() {
                return "object" === typeof GH.Geo
            },
            isQAPool: function() {
                return void 0 !== GH.C.qapool
            },
            factorEnabled: function(a) {
                return GH.GHSW[a]
            },
            getHTTPSURL: function(a) {
                GH.Util.factorEnabled("ENABLE_HTTPS") && (a = a.replace(/^http:/, "https:"));
                return a
            },
            init: function() {
                c(window).on("load.gh", function() {
                    k.execute_on_windowload()
                });
                if (2046732 == o || 2045573 == o || 2334524 == o) {
                    var a = c(GH.SearchBox.formID + " input[name=LH_TitleDesc]"),
                        b = window.location.href,
                        d = c("#gh-as-a"),
                        g, f, h;
                    a.length || 0 <= b.indexOf("LH_TitleDesc=1") && c(GH.SearchBox.formID).append('<input type="hidden" name="LH_TitleDesc" value="1"/>');
                    0 < d.length && (g = d.attr("href"), c(GH.SearchBox.formID + ' input[type="hidden"],' + GH.SearchBox.formID + ' input[type="text"],' + GH.SearchBox.formID + " input:checked,select" + GH.CategorySelect.controlID).each(function() {
                        f = c(this);
                        "_trksid" != f.attr("name") && (h = f.attr("name") + "=" + encodeURIComponent(f.val()), g = 0 > g.indexOf("?") ? g + ("?" + h) : g + ("&" +
                            h))
                    }), d.attr("href", g))
                }
                t.raptor || k.initLegacyVJO();
                GH.isIE && (GH.oldDT && 6 > GH.docMode) && c(GH.componentID).addClass("gh-oldDT");
                c("#gh-shop, #gh-eb-u, .gh-eb-li,.gh-dd").bind("focusout", function() {
                    setTimeout("if(!GH.jQ(document.activeElement).parents('#" + this.id + "').length) GH.Util.hideOverlays(1); ", 500)
                });
                c(".gh-survey").click(k.surveyClicked);
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || (c("#glbfooter").addClass("gf-nosvg"), c("#gh").addClass("gh-nosvg"))
            },
            getBundle: function(a) {
                return ebayContent["GlobalHeaderWeb/" + a] || 0
            },
            mergeContent: function(a, b) {
                for (var d, c = [], f = 0, h = /\$\{([A-Za-z0-9_\.]+)\}/g, a = a || ""; d = h.exec(a);) c.push(a.substring(f, d.index)), d = b[d[1]], c.push(void 0 !== d ? d : ""), f = h.lastIndex;
                c.push(a.substring(f));
                return c.join("")
            },
            browser: c.browser,
            whichBrowser: function() {
                var a = navigator.userAgent,
                    b, d = a.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (/trident/i.test(d[1])) return "IE";
                if ("Chrome" === d[1] && (b = a.match(/\b(OPR|Edge)\/(\d+)/),
                        null != b)) return b.slice(1, 2).replace("OPR", "Opera");
                d = d[2] ? [d[1], d[2]] : [navigator.appName, navigator.appVersion, "-?"];
                null != (b = a.match(/version\/(\d+)/i)) && d.splice(1, 1, b[1]);
                return d[0]
            },
            surveyClicked: function(a) {
                var b = document,
                    d = b.getElementById("gh-svyForm"),
                    a = c(a.currentTarget);
                d || (c("body").append('<form id=gh-svyForm action="#" method=post target=eBaySurvey class="gh-none g-hdn"><input name=domContent value=""></form>'), d = b.getElementById("gh-svyForm"));
                if (d && a) return window.open("", "eBaySurvey",
                    "location=0,menubar=0,status=0,resizable=1,scrollbars=1,top=" + Math.round((screen.height - 800) / 2) + ",left=" + Math.round((screen.width - 800) / 2) + ",width=800,height=800"), a.attr("target", "eBaySurvey"), c(d).attr("action", a.attr("href")), b.location && "https:" != b.location.protocol ? (d.elements[0].value = encodeURIComponent("<html>" + b.getElementsByTagName("html")[0].innerHTML + "</html>"), d.submit(), !1) : !0
            },
            execute_on_windowload: function() {
                "static" === c(".gh-acc-exp-div").css("position") && k.cTImg(GH.ghiIMP + "92%26gh1g%3D" +
                    encodeURIComponent(document.location.href) + "%26gh2g%3D " + encodeURIComponent(navigator.userAgent))
            },
            execute_immediately: function() {
                k = this;
                k.initPluggins();
                k.initCookie();
                o = s("_GlobalNavHeaderSrcPageId") ? GH.C.pageId = _GlobalNavHeaderSrcPageId : _GlobalNavHeaderSrcPageId = GH.C.pageId;
                ~~o || (GH.C.pageId = o = k.computePageId(), typeof o != GH.undefinedStr && (_GlobalNavHeaderSrcPageId = o));
                GH.ghiIMP = "/roverimp/0/0/9?imp=2046301&trknvp=cp%3D" + o + "%26ghi%3D"
            },
            eZ: function(a) {
                return !a ? a : a.replace(/&/g, "&amp;").replace(/</g,
                    "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
            },
            ajxC: function(a, b, d, g) {
                1 == c(a + " .gh-o-l").length && (c(a).html("<div class=gh-o-err><span class=gh-o-errb>" + (g || r.errL10n) + "</span></div>"), b = d);
                b && (c(a).data("ghi", b), k.cTImg(GH.ghiIMP + b))
            },
            addSignin: function(a) {
                return a.replace(/\#URL\#/, k.getHref(r.signinURL) + "&ru=" + k.addRU())
            },
            showOverlay: function(a) {
                a = c(a);
                GH.Util.hideOverlays();
                a.gshow();
                a.data("ghi") && k.cTImg(GH.ghiIMP + a.data("ghi"))
            },
            openOverlay: function(a) {
                GH.Util.hideOverlays();
                a.attr("aria-expanded", "true");
                c("#" + a.attr("aria-controls")).show();
                a.data("ghi") && k.cTImg(GH.ghiIMP + a.data("ghi"))
            },
            closeOverlay: function(a) {
                a.each(function() {
                    var a = c(this);
                    a.attr("aria-expanded", "false");
                    c("#" + a.attr("aria-controls")).hide()
                })
            },
            toggleOverlay: function(a) {
                var b = c("#" + a.attr("aria-controls"));
                GH.Util[b.is(":hidden") ? "openOverlay" : "closeOverlay"](a)
            },
            hideOverlays: function(a) {
                GH.Greeting && GH.Greeting.hideUserOverlay();
                GH.Util.closeOverlay(c("#gh-ug, #gf-fbtn, .gh-dd .gh-control," + (GH.ShopByCat || {}).controlID));
                GH.alerts && "function" == typeof GH.alerts.closeOverlay && GH.alerts.closeOverlay(c("#gh-eb-Alerts"), !1);
                c("#gh-shop, .gh-eb-active").removeClass("gh-shop-active gh-eb-active");
                GH.isSelectOptionsBoxShown && !a && c(GH.CategorySelect.controlID).blur();
                if (28 > (GH.userAgent.match(/Chrome\/([0-9]+)/) || [0, 28])[1] && !/Macintosh/.test(GH.userAgent)) c(GH.CategorySelect.controlID).ghide(), setTimeout(function() {
                    c(GH.CategorySelect.controlID).gshow()
                }, 10);
                GH.Geo && GH.Geo.hideMsgOverlay()
            },
            createEBO: function(a,
                b) {
                var d = "#gh-eb-" + a,
                    g = c(d + " .gh-eb-li-a").outerWidth() - 8;
                GH.Util.hideOverlays();
                c(d).append("<div id=gh-eb-" + a + "-o class='gh-eb-o'" + (b ? " aria-busy=true aria-live=polite" : "") + " style='" + (180 < g ? "min-width:" + g + "px" : "") + "' aria-hidden=false><div class=gh-o-l>" + r.msg_loading + "</div></div>")
            },
            createOverlay: function(a, b, d) {
                var g = "#gh-eb-" + a,
                    f = c(g + " .gh-eb-li-a").outerWidth() - 8;
                GH.Util.hideOverlays();
                c(g).append("<div id=gh-eb-" + a + "-o class='gh-eb-o'" + (b ? " aria-busy=true aria-live=polite" : "") + " style='" +
                    (180 < f ? "min-width:" + f + "px" : "") + "'><div class=gh-o-l " + (d ? "tabindex=0" : "") + " >" + GH.L10N.msg_loading + "</div></div>");
                d && c("#gh-eb-" + a + "-o .gh-o-l").focus()
            },
            getHref: function(a) {
                return c(a).attr("href")
            },
            redirect: function(a) {
                document.location = a
            },
            getSecURL: function(a, b, d) {
                var c = "^";
                d && (c = "");
                d = RegExp(c + "http:");
                GH.sec && (a = a.replace(d, "https:"), b && (b = RegExp(c + "https://ir."), c = RegExp(c + "https://pics."), a = a.replace(b, "https://secureir."), a = a.replace(c, "https://securepics.")));
                return a
            },
            addPrefixPoolURL: function(a) {
                var b =
                    GH.GHSW.pool ? GH.GHSW.pool : null,
                    d = c.isArray(a),
                    g = "string" === typeof a,
                    f = [0, 31, 215, 248],
                    h = GH.siteSpecific.maprules.regex,
                    f = GH.siteSpecific.maprules["function" == typeof f.indexOf && -1 >= f.indexOf(parseInt(GH.C.siteId)) && b && "qa" == b ? "paradise" : b];
                if ("undefined" !== typeof JSON && b && h && f) {
                    if (d || g) a = {
                        d: a
                    };
                    a = JSON.parse(JSON.stringify(a).replace(h, f));
                    if (d || g) a = a.d
                }
                return a
            },
            cTId: function(a) {
                return (o ? "p" + o + "." : "") + "m570" + (a ? ".l" + a : "")
            },
            cTImg: function(a) {
                c("body").append('<img src="' + GH.Util.getRoverUrl() + a + (0 < a.indexOf("?") ?
                    "&" : "?") + (new Date).getTime() + '" width=1 height=1 border=0 alt="">')
            },
            externalLinkTracking: function(a) {
                var b = c(a.target).attr("href");
                c.getScript(GH.Util.getRoverUrl() + "/roverclk/0/0/9?trknvp=sid%3Dp" + o + "." + c(a.target).attr("_exsp"), function() {
                    document.location = b
                });
                a.preventDefault();
                GH.Util.clrTimer(GH.clickTimer);
                GH.clickTimer = setTimeout("document.location = '" + b + "'", 500)
            },
            getRoverUrl: function() {
                return (GH.Util.getSecURL(GH.Util.getHref(r.roverurl)) || "").replace(/\/+$/, "")
            },
            isTouchDevice: function() {
                return "ontouchstart" in
                    document.documentElement
            },
            clrTimer: function(a) {
                clearTimeout(a)
            },
            getCurrentTime: function() {
                return ~~((new Date).getTime() / 1E3)
            },
            addRU: function() {
                var a = document.location.href;
                return 0 < a.indexOf("SignOutConfirm") ? "" : encodeURIComponent(a)
            },
            base64decode: function(a) {
                var b = "",
                    d, c, f, h, l, j = 0,
                    n = a.length;
                if (/[^A-Za-z0-9\+\/\=\*]/g.exec(a)) return "";
                for (; j < n;) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(j++)), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(j++)),
                    h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(j++)), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=*".indexOf(a.charAt(j++)), d = d << 2 | c >> 4, c = (c & 15) << 4 | h >> 2, f = (h & 3) << 6 | l, b += String.fromCharCode(d), 64 <= h || (b += String.fromCharCode(c)), 64 <= l || (b += String.fromCharCode(f));
                return b
            },
            computePageId: function() {
                var a = 0;
                try {
                    var b = c('*[_sp^="p"]').filter(":first");
                    if (b) {
                        var d = b.attr("_sp");
                        if (void 0 !== d) {
                            var g = d.match(/p[\d]+/);
                            g && 0 < g.length && (a = g[0].substring(1))
                        }
                    }
                } catch (f) {}
                return a
            },
            tabHidden: function(a) {
                var b = {},
                    d = function() {
                        var a = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var b = 0; b < a.length; b++)
                            if (a[b] + "Hidden" in document) return a[b] + "Hidden";
                        return null
                    },
                    g = function() {
                        var a;
                        a = (a = d()) ? document[a] : !1;
                        a ? b.hidden() : b.visible()
                    },
                    f = d(),
                    b = c.extend(b, a);
                f && (a = f.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(a, g))
            },
            loadScript: function(a) {
                var b, c, g, f = document.createElement("iframe");
                b = (new Date).getTime();
                a = a + "&_=" + b;
                (f.frameElement || f).style.cssText =
                    "width: 0; height: 0; border: 0";
                b = document.getElementsByTagName("script");
                b = b[b.length - 1];
                b.parentNode.insertBefore(f, b);
                try {
                    c = f.contentWindow.document
                } catch (h) {
                    g = document.domain, f.src = "javascript:var d=document.open();d.domain='" + g + "';void(0);", c = f.contentWindow.document
                }
                c.open()._l = function() {
                    var b = this.createElement("script");
                    g && (this.domain = g);
                    b.id = "js-iframe-async";
                    b.src = a;
                    this.body.appendChild(b)
                };
                c.write('<body onload="document._l();">');
                c.close()
            },
            initCookie: function() {
                var a = GH,
                    b = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "/",
                        escapedValue: !0
                    },
                    c = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "/",
                        bUseExp: !0,
                        startDelim: "b"
                    },
                    g = {
                        COOKIELET_DELIMITER: "^",
                        NAME_VALUE_DELIMITER: "=",
                        escapedValue: !0,
                        startDelim: "^"
                    },
                    f = {
                        reg: ["dp1", "reg"],
                        recent_vi: ["ebay", "lvmn"],
                        ebaysignin: ["ebay", "sin"],
                        p: ["dp1", "p"],
                        etfc: ["dp1", "etfc"],
                        keepmesignin: ["dp1", "kms"],
                        ItemList: ["ebay", "wl"],
                        BackToList: ["s", "BIBO_BACK_TO_LIST"]
                    },
                    h = {
                        r: b,
                        dp1: c,
                        npii: c,
                        ebay: g,
                        reg: g,
                        apcCookies: g,
                        ds2: {
                            COOKIELET_DELIMITER: "^",
                            NAME_VALUE_DELIMITER: "/"
                        }
                    },
                    l = -1 < document.domain.indexOf(".ebay.") ? document.domain.substring(document.domain.indexOf(".ebay.")) : ".ebay.com";
                a.vCJar = {
                    readCookie: function(a, n) {
                        var b = this.readCookieObj(a, n).value;
                        return b ? decodeURIComponent(b) : ""
                    },
                    createDefaultCookieBean: function(a, n) {
                        var b = {};
                        b.name = a;
                        b.cookieletname = n;
                        b.value = "";
                        b.maxage = 0;
                        b.rawcookievalue = "";
                        b.mode = "";
                        return b
                    },
                    readCookieObj: function(a, n) {
                        var b = this.createDefaultCookieBean(a, n);
                        this.update();
                        this.checkConversionMap(b);
                        b.rawcookievalue = this.aCookies[b.name];
                        !b.name || !b.rawcookievalue ? b.value = "" : b.cookieletname ? this.readCookieletInternal(b) : this.readCookieInternal(b);
                        var e = n && n.match(/guid$/),
                            c = "undefined" != typeof b ? b : "";
                        c && (e && 32 < b.value.length) && (b.value = b.value.substring(0, 32));
                        return c
                    },
                    checkConversionMap: function(a) {
                        var b = f[a.name];
                        b && (a.mode = this.getMode(a.name), a.name = b[0], a.cookieletname = b[1])
                    },
                    readCookieInternal: function(a) {
                        a.value = a.rawcookievalue;
                        return a
                    },
                    readCookieletInternal: function(a) {
                        var b = this.getCookielet(a.name, a.cookieletname, a.rawcookievalue),
                            c = this.getFormat(a.name);
                        b && c.bUseExp && (c = b, b = b.substring(0, b.length - 8), 8 < c.length && (a.maxage = c.substring(c.length - 8)));
                        a.value = b;
                        "10" == a.mode && (a.value = a.rawcookievalue);
                        return a
                    },
                    readMultiLineCookie: function(a, b) {
                        if (!a || !b) return "";
                        var c, e = "",
                            m = f[a];
                        m && (c = this.readCookieObj(m[0], m[1]).value || "");
                        c && (e = this.getCookielet(a, b, c) || "");
                        return "undefined" != typeof e ? e : ""
                    },
                    writeCookie: function(a, b, c) {
                        var e = f[a];
                        e ? this.writeCookielet(e[0], e[1], b, c) : (e = this.getFormat(a), b && e.escapedValue && (b = encodeURIComponent(b)),
                            this.writeRawCookie(a, b, c))
                    },
                    writeRawCookie: function(a, b, c) {
                        if (a && void 0 !== b && (isNaN(b) && 4E3 > b.length || 4E3 > (b + "").length)) {
                            "number" == typeof c && (c = this.getExpDate(c));
                            var e = c ? new Date(c) : new Date(this.getExpDate(730)),
                                m = this.getFormat(a);
                            document.cookie && (document.cookie = a + "=" + (b || "") + (c || m.bUseExp ? "; expires=" + e.toGMTString() : "") + "; domain=" + l + "; path=/")
                        }
                    },
                    writeCookieEx: function(a, b, c) {
                        this.writeCookie(a, b, this.getExpDate(c))
                    },
                    writeCookielet: function(a, b, c, e, m) {
                        a && b && (this.update(), this.getFormat(a).bUseExp &&
                            c && ("number" == typeof e && (e = this.getExpDate(e)), e = e ? new Date(e) : new Date(this.getExpDate(730)), e = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()), e = Math.floor(e / 1E3), c += parseInt(e, 10).toString(16)), b = this.createCookieValue(a, b, c), this.writeRawCookie(a, b, m))
                    },
                    writeMultiLineCookie: function(a, b, c, e, m) {
                        this.update();
                        if (b = this.createCookieValue(a, b, c))(a = f[a]) && this.writeCookielet(a[0], a[1], b, e, m)
                    },
                    getBitFlagOldVersion: function(a, b) {
                        var c = parseInt(a,
                                10),
                            e = c.toString(2);
                        return "1" == (c ? e.charAt(e.length - b - 1) : "") ? 1 : 0
                    },
                    setBitFlagOldVersion: function(a, b, c) {
                        var e = "",
                            m;
                        (a = parseInt(a + "", 10)) && (e = a.toString(2));
                        a = e.length;
                        if (a < b) {
                            m = b - a;
                            for (a = 0; a <= m; a++) e = "0" + e
                        }
                        b = e.length - b - 1;
                        return parseInt(e.substring(0, b) + c + e.substring(b + 1), 2)
                    },
                    getBitFlag: function(a, b) {
                        if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                            var c = b % 4,
                                e = a.length - (Math.floor(b / 4) + 1),
                                e = parseInt(a.substring(e, e + 1), 16),
                                c = 1 << c;
                            return (e & c) == c ? 1 : 0
                        }
                        return this.getBitFlagOldVersion(a, b)
                    },
                    setBitFlag: function(a,
                        b, c) {
                        if (null != a && 0 < a.length && "#" == a.charAt(0)) {
                            var e = a.length,
                                m = b % 4,
                                b = Math.floor(b / 4) + 1;
                            if (e <= b) {
                                if (1 != c) return a;
                                for (var d = b - e + 1, a = a.substring(1, e); 0 < d;) a = "0" + a, d--;
                                a = "#" + a;
                                e = a.length
                            }
                            b = e - b;
                            d = parseInt(a.substring(b, b + 1), 16);
                            m = 1 << m;
                            d = 1 == c ? d | m : d & ~m;
                            return a = a.substring(0, b) + d.toString(16) + a.substring(b + 1, e)
                        }
                        return 31 < b ? a : this.setBitFlagOldVersion(a, b, c)
                    },
                    createCookieValue: function(a, b, c) {
                        var e = f[a],
                            d = this.getFormat(a),
                            g = this.getMode(a),
                            a = e && ("00" == g || "01" == g) ? this.readCookieObj(e[0], e[1]).value || "" :
                            this.aCookies[a] || "";
                        if (d) {
                            a = this.getCookieletArray(a, d);
                            a[b] = c;
                            var b = "",
                                h;
                            for (h in a) a.hasOwnProperty(h) && (b += h + d.NAME_VALUE_DELIMITER + a[h] + d.COOKIELET_DELIMITER);
                            b && d.startDelim && (b = d.startDelim + b);
                            a = b;
                            d.escapedValue && (a = encodeURIComponent(a))
                        }
                        return a
                    },
                    update: function() {
                        var a = document.cookie.split("; ");
                        this.aCookies = {};
                        for (var b = /^"(.*)"$/, c = 0; c < a.length; c++) {
                            var e = a[c].split("="),
                                d = this.getFormat(e[0]),
                                f = e[1];
                            (d = d.startDelim) && (f && 0 === f.indexOf(d)) && (e[1] = f.substring(d.length, f.length));
                            e[1] &&
                                e[1].match(b) && (e[1] = e[1].substring(1, e[1].length - 1));
                            this.aCookies[e[0]] = e[1]
                        }
                    },
                    getCookielet: function(a, b, c) {
                        a = this.getFormat(a);
                        return this.getCookieletArray(c, a)[b] || ""
                    },
                    getFormat: function(a) {
                        return h[a] || b
                    },
                    getCookieletArray: function(a, b) {
                        var c = [],
                            e = a || "";
                        b.escapedValue && (e = decodeURIComponent(e));
                        for (var e = e.split(b.COOKIELET_DELIMITER), d = 0; d < e.length; d++) {
                            var f = e[d].indexOf(b.NAME_VALUE_DELIMITER);
                            0 < f && (c[e[d].substring(0, f)] = e[d].substring(f + 1))
                        }
                        return c
                    },
                    getExpDate: function(a) {
                        var b;
                        "number" ==
                        typeof a && 0 <= a && (b = new Date, b.setTime(b.getTime() + 864E5 * a), b = b.toGMTString());
                        return b
                    },
                    getMode: function(a) {
                        var b = this.readCookieObj("ebay", "cv").value,
                            c;
                        if (!(a in f)) return null;
                        if (!b) return "";
                        if (0 === b) return "00";
                        if (b && "0" != b) {
                            if (-1 != b.indexOf("."))
                                for (var e = b.split("."), b = 0; b < e.length; b++) c = parseInt(e[b], 16).toString(2) + c;
                            else c = parseInt(b, 16).toString(2);
                            var b = 0,
                                e = c.length,
                                d, g;
                            for (g in f) {
                                d = e - 2 * (b + 1);
                                d = c.substring(d, d + 2).toString(10);
                                d = !d ? "00" : d;
                                if (a == g) return 1 == d.length ? "0" + d : d;
                                b++
                            }
                        }
                        return null
                    },
                    getMulti: function(a, b, c) {
                        var d = "",
                            f;
                        for (f = 0; f < c; f++) d = this.getBitFlag(a, b + f) + d;
                        return parseInt(d, 2)
                    },
                    setMulti: function(a, b, c, d) {
                        var f = 0,
                            g, d = d.toString(2).substring(0, c);
                        g = d.length;
                        if (g < c) {
                            c -= g;
                            for (f = 0; f < c; f++) d = "0" + d;
                            g += c
                        }
                        for (f = 0; f < g; f++) a = this.setBitFlag(a, b + f, d.substring(g - f - 1, g - f));
                        return a
                    },
                    setJsCookie: function() {
                        this.writeCookielet("ebay", "js", "1")
                    }
                }
            },
            initLegacyVJO: function() {
                if (GH.oldDT && !s("noStandardCSS")) {
                    var a = "ebay",
                        b = "forums. chatboards answercenter http://vi. http://ivi. events.".split(" "),
                        d = !1;
                    for (i = 0; i < b.length; i++)
                        if (-1 < document.domain.indexOf(b[i])) {
                            d = !0;
                            break
                        } if (s("nodefaultcss") || d) a += "-nodefault";
                    if (GH.Util.browser.mozilla || GH.Util.browser.webkit || GH.isIE && d) a += "-ns";
                    a = (k.sec ? "https://secureinclude" : "http://include") + ".ebaystatic.com/css/v/us/legacy/" + a + ".css";
                    c.getCSS(a)
                }
            },
            initPluggins: function() {
                c.getCSS = function(a, b) {
                    document.getElementsByTagName("head")[0].appendChild(jQuery(document.createElement("link")).attr({
                        href: a,
                        media: b || "screen",
                        type: "text/css",
                        rel: "stylesheet"
                    })[0])
                };
                c.cachedScript = function(a) {
                    return c.ajax({
                        dataType: "script",
                        cache: !0,
                        url: a
                    })
                };
                c.fn.scrollLock = function(a) {
                    if (c.isFunction(c.fn.on)) return c(this).on("DOMMouseScroll." + a + " mousewheel." + a, function(a) {
                        var d = c(this),
                            g = this.scrollTop,
                            f = this.scrollHeight,
                            h = d.height(),
                            l = "DOMMouseScroll" == a.type ? -40 * a.originalEvent.detail : a.originalEvent.wheelDelta,
                            j = 0 < l,
                            n = function() {
                                a.stopPropagation();
                                a.preventDefault();
                                return a.returnValue = !1
                            };
                        if (!j && -l > f - h - g) return d.scrollTop(f), n();
                        if (j && l > g) return d.scrollTop(0), n()
                    })
                };
                c.fn.scrollRelease = function(a) {
                    return c(this).off("DOMMouseScroll." + a + " mousewheel." + a)
                };
                c.fn.ghide = function() {
                    return this.attr("aria-hidden", "true").hide()
                };
                c.fn.gshow = function() {
                    return this.attr("aria-hidden", "false").show()
                };
                c.fn.ghidden = function() {
                    return this.attr("aria-hidden", "true").css("visibility", "hidden")
                };
                c.fn.gvisible = function() {
                    return this.attr("aria-hidden", "false").css("visibility", "visible")
                };
                c.fn.gtoggle = function() {
                    c(this)[this.is(":hidden") ? "gshow" : "ghide"]()
                };
                c.fn.ghellipsis = function(a) {
                    a =
                        c.extend({
                            row: 1,
                            onlyFullWords: !1,
                            "char": "...",
                            callback: function() {}
                        }, a);
                    this.each(function() {
                        var b = c(this),
                            d = b.text(),
                            g = b.height();
                        if (!b.hasClass("ghellip")) {
                            b.addClass("ghellip");
                            b.text("a");
                            var f = parseFloat(b.css("lineHeight"), 10),
                                h = b.height(),
                                f = (f > h ? f - h : 0) * (a.row - 1) + h * a.row;
                            if (!(g <= f)) {
                                for (var g = 1, h = 0, l = d.length; g < l;) h = Math.ceil((g + l) / 2), b.text(d.slice(0, h) + a["char"]), b.height() <= f ? g = h : l = h - 1;
                                d = d.slice(0, g);
                                a.onlyFullWords && (d = d.replace(/[\u00AD\w\uac00-\ud7af]+$/, ""));
                                d += a["char"]
                            }
                            b.text(d);
                            a.callback.call(this)
                        }
                    });
                    return this
                };
                c.fn.hoverIntent = function(a, b) {
                    var d, g, f, h, l = function(a) {
                            d = a.pageX;
                            g = a.pageY
                        },
                        j = {
                            sensitivity: 15,
                            interval: 100,
                            timeout: 150
                        },
                        n = function(a, b) {
                            b.hoverIntent_t = GH.Util.clrTimer(b.hoverIntent_t);
                            if (Math.abs(f - d) + Math.abs(h - g) < j.sensitivity) return c(b).unbind("mousemove", l), b.hoverIntent_s = 1, j.over.apply(b, [a]);
                            f = d;
                            h = g;
                            b.hoverIntent_t = setTimeout(function() {
                                n(a, b)
                            }, j.interval)
                        },
                        k = function(a) {
                            var b = jQuery.extend({}, a),
                                d = this;
                            d.hoverIntent_t && (d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t));
                            "mouseover" == a.type ? (f = b.pageX, h = b.pageY, c(d).bind("mousemove", l), 1 != d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                                n(b, d)
                            }, j.interval))) : (c(d).unbind("mousemove", l), 1 == d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                                d.hoverIntent_t = GH.Util.clrTimer(d.hoverIntent_t);
                                d.hoverIntent_s = 0;
                                j.out.apply(d, [b])
                            }, j.timeout)))
                        },
                        j = c.extend(j, b ? {
                            over: a,
                            out: b
                        } : a);
                    return this.bind("mouseover", k).bind("mouseout", k).bind("focusin", function(a) {
                        var b = jQuery.extend({}, a),
                            c = this;
                        j.addFocus && setTimeout(function() {
                            j.over.apply(c,
                                [b])
                        }, 50)
                    })
                }
            }
        }
    })
})(GH.jQ);
GH.siteSpecific = {
    maprules: {
        regex: /ebay\.(\w{1,3})/g,
        qa: "qa.ebay.com",
        paradise: "$1.paradise.qa.ebay.com",
        latest: "latest.ebay.$1",
        greatest: "greatest.ebay.$1",
        sandbox: "sandbox.ebay.$1",
        xstage: "xstage.ebay.$1"
    },
    rtmFtrMap: {
        s: "main",
        e: "qa."
    }
};
(function(a) {
    GH.add("Doodle", function() {
        return {
            init: function() {
                var b, c, d, e = a("#gh-ti");
                0 < a("#gh-doodleS").length && (b = a(window).width(), c = a("body").hasClass("sz980"), d = a("body").hasClass("sz1200"), GH.C.largeDoodle && (d && 1400 < b || c && 1200 < b || !c && !d && 1200 < b) ? (a(GH.componentID).prepend('<b id=gh-doodleL style="display:block"><a _sp=m570.l2920 href="' + a("#gh-doodleS").attr("href") + '"><img src="' + GH.C.largeDoodle + '" border=0 alt="' + (a("#gh-hsi").attr("alt") || "") + '"></a></b>'), GH.Util.cTImg(GH.ghiIMP + 19), e.remove()) :
                    e.removeClass("gh-hdn"))
            }
        }
    })
})(GH.jQ);
(function(b) {
    GH.add("TopBar", function() {
        var d = !1;
        return {
            addCSSShadow: function() {
                b("#gh-gb").addClass("gh-gb-shadow")
            },
            removeCSSShadow: function() {
                d && b("#gh-gb").removeClass("gh-gb-shadow")
            },
            init: function() {
                var e = document.body.style,
                    f = window.getComputedStyle,
                    c;
                b(GH.componentID).removeClass("gh-pre-js");
                var a = GH.GHSW,
                    a = "undefined" !== typeof a && ("true" === a.DWEB_WHITE_SEARCH || "true" === a.DWEB_GREY_SEARCH);
                f && (e && !a) && (d = !0, c = f(document.body), e.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAKCAYAAAB10jRKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBJREFUeNpEyqERADAIBMGbbwSH+qhA/6URXMyqBUhFBLIP6ip0ezk2zExqC58nwACVZwX67tO41gAAAABJRU5ErkJggg==')," +
                    (c.backgroundImage || ""), document.body.style.backgroundRepeat = "repeat-x," + (c.backgroundRepeat || ""), document.body.style.backgroundPosition = "0 30px," + (c.backgroundPosition || ""));
                b("body").prepend("<div id=gh-gb class=" + (a ? "gh-sch-prom" : "") + " tabindex='-1' " + (!c && !a || b("body.RTMPushdown").length ? "class='gh-gb-shadow'" : "") + "></div>")
            }
        }
    })
})(GH.jQ);
(function(c) {
    GH.add("Flex", function() {
        var d;
        return {
            execute_immediately: function() {
                d = this;
                d.execute_on_load_or_resize()
            },
            execute_on_load_or_resize: function() {
                var e = c("body"),
                    f = c(window);
                f.unbind("resize.gh", d.execute_on_load_or_resize);
                c(".gh-w").removeClass("gh-flex");
                e.removeClass("gh-1199 gh-979 gh-939 gh-899 gh-799 gh-699 gh-599 gh-479 gh-flex");
                e.addClass(function() {
                    var b = c(".gh-w").width(),
                        a = "";
                    1200 > b && (a += "gh-1199");
                    980 > b && (a += " gh-979");
                    940 > b && (a += " gh-939");
                    900 > b && (a += " gh-899");
                    800 > b && (a +=
                        " gh-799");
                    700 > b && (a += " gh-699");
                    600 > b && (a += " gh-599");
                    480 > b && (a += " gh-479");
                    return a
                });
                c(document).width() - f.width() <= (GH.isIE ? 20 : 0) && e.addClass("gh-flex");
                setTimeout(function() {
                    f.on("resize.gh", d.execute_on_load_or_resize)
                }, 60)
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("FooterBuyerProtection", function() {
        return {
            init: function() {
                a("#gf-bp").addClass("gf-bp-bg")
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/FooterJavascriptContent"] = {
    mftrLinkURL: '<a href="http://www.m.ebay.com"></a>',
    mftrLinkURLUnified: '<a href="http://www.ebay.com"></a>'
};
(function(a) {
    GH.add("Accessibility", function() {
        return {
            init: function() {
                var c = a("h1:not(#gh-l-h1):first"),
                    e = a("[name=mainContent]"),
                    f = a("#mainContent");
                a("#gh-hdn-stm").click(function() {
                    GH.Util.cTImg(GH.ghiIMP + 93)
                });
                !e.length && !f.length && (c.length ? c.before("<a tabindex='-1' id='mainContent'></a>") : a("#gh-hdn-stm").parent().remove());
                a(".gh-acc-exp-a").click(function() {
                    var b = a(this).closest("li"),
                        d = b.closest("li").attr("data-imp");
                    GH.Dropdown.activate(b, d);
                    a(this).trigger("click.hideLink").closest("li").find(".gh-submenu a:first").focus();
                    return !1
                });
                a(GH.componentID).delegate(".gh-submenu,.gh-sublayer, .gh-eb-o, #gh-sbc-o", "keydown", function(b) {
                    if (27 == b.keyCode) return a(".gh-control[aria-controls='" + this.id + "']").focus(), GH.Util.hideOverlays(), !1
                }).delegate("a.gh-acc-a2", "focus", function() {
                    GH.Util.hideOverlays()
                });
                a(document).on("mouseup.gh touchend.gh", function(b) {
                    var d = !1,
                        c = a("#gh-eb-u,.gh-dd,.gh-layer,#gh-shop");
                    !c.is(b.target) && 0 === c.has(b.target).length && (d = !0);
                    d && GH.Util.hideOverlays(!0)
                });
                a("#gh-eb-Alerts , #gh-shop,#gh-eb-u ").on("keydown",
                    ".gh-control",
                    function(b) {
                        if (13 == b.keyCode || 32 === b.keyCode) a(this).trigger("click", !0), b.preventDefault()
                    })
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("Footer", function() {
        var b, e = GH.GHSW;
        return {
            init: function() {
                b = this;
                document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || a("#glbfooter").addClass("gf-nosvg");
                e.sandbox && a(GH.componentID).prepend('<img style="position:absolute;top:32px;left:40px" src="' + GH.pi + 'globalHeader/imgSandbox.png">');
                a("#gf-BIG a[_exsp]").bind("click", GH.Util.externalLinkTracking);
                !e.hideMobile && (GH.userAgent.match(/android.*mobile|bntv|blackberry|bb10|webos|iemobile|silk|cloud9|iphone/i) &&
                    !GH.userAgent.match(/kindle|Nexus 7|NOOK|BNTV/i)) && a.cachedScript(GH.Util.getSecURL("http://ir.ebaystatic.com/f/logwisyb5e5yddn4zmlg5mnhbab.js", !0));
                e.telDE && (a("#gh-eb-contact a").appendTo("body").attr("id", "gh-ctab").removeClass("gh-eb-li-a"), a("#gh-eb-contact").remove());
                a(".gf-flags-wpr").removeClass("gh-hvr");
                a("#gf-f-trans").remove();
                a("#gf-fbtn").bind("click mouseover", function(a) {
                    b.showFlagsOverlay(a)
                });
                a("#gf-f").mouseover(function(a) {
                    b.showFlagsOverlay(a)
                });
                a("#gf-fbtn, #gf-f").mouseout(function() {
                    GH.flagTimeoutId =
                        setTimeout(GH.Util.hideOverlays, 300)
                });
                a("#gf-fbtn-arr").addClass("gh-sprRetina");
                a("#gf-f").bind("keydown", function(c) {
                    var f = c.keyCode ? c.keyCode : c.charCode,
                        d = a("#gf-f a").get(),
                        b = c.target;
                    if (27 == f || 9 == f && b == d[d.length - 1] || 9 == f && c.shiftKey && b == d[0]) a("#gf-fbtn").focus(), GH.Util.closeOverlay(a("#gf-fbtn"))
                });
                0 < navigator.userAgent.indexOf("Trident/4.0") && a.getScript(GH.Util.getSecURL(GH.urls.ie8_js))
            },
            showFlagsOverlay: function(c) {
                var b = a("#gf-f"),
                    d = "click" == c.type;
                GH.Util.clrTimer(GH.flagTimeoutId);
                a("#gf-BIG").mouseenter();
                d && b.is(":visible") ? GH.Util.hideOverlays() : (GH.Util.openOverlay(a("#gf-fbtn")), d && a("#gf-f a").get(0).focus());
                c.preventDefault()
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("Logo", function() {
        return {
            init: function() {
                !GH.GHSW.raptor && GH.oldDT && GH.isIE && (window.performance && 10 > ~~GH.Util.browser.version) && a("#gh-la").css("position", "static");
                a("#gh-l-h1").length && 1 < a("h1").length && a("#gh-la").unwrap()
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("ShopByCat", function() {
        var b, f = function() {
                return 0 < a("#gh-sbc-o li").length
            },
            m;
        return {
            controlID: "#gh-shop-a",
            init: function() {
                b = this;
                b.assignControlClickHandler("#gh-shop");
                a(window).on("load.gh", function() {
                    window.setTimeout(function() {
                        f() || a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o")
                    }, 1)
                });
                a("#gh-shop").hoverIntent({
                    over: function() {},
                    out: function() {
                        GH.Util.closeOverlay(a(b.controlID));
                        a("#gh-shop").removeClass("gh-shop-active")
                    },
                    sensitivity: 30,
                    interval: 100,
                    timeout: 150
                });
                a("#gh-shop").bind("focusout", function(i) {
                    100 < Date.now() - m && !(0 < a(i.target).closest("#gh-shop").length) && f() && (GH.Util.toggleOverlay(a(b.controlID)), a("#gh-shop").toggleClass("gh-shop-active"))
                })
            },
            assignControlClickHandler: function(i) {
                a(i).click(function(i, g) {
                    m = Date.now();
                    (!f() || a("#gh-sbc-o").is(":hidden")) && GH.Util.hideOverlays();
                    0 < a(i.target).closest("#gh-sbc-o").length || (f() ? (GH.Util.toggleOverlay(a(b.controlID)), a("#gh-shop").toggleClass("gh-shop-active"), a("#gh-sbc-o").is(":hidden") || (GH.Util.cTImg(GH.ghiIMP +
                        34), setTimeout(function() {
                        a("#gh-sbc-o a:first").focus()
                    }, 100), g && a("#gh-sbc-o a:first").focus())) : (a("#gh-sbc-o").append(b.buildOverlayHTML()).addClass("gh-o"), GH.Util.cTImg(GH.ghiIMP + 34), GH.Util.openOverlay(a(b.controlID)), a("#gh-shop").addClass("gh-shop-active"), setTimeout(function() {
                        a("#gh-sbc-o a:first").focus()
                    }, 100), g && a("#gh-sbc-o a:first").focus()), i.preventDefault())
                })
            },
            buildOverlayHTML: function() {
                var a = ['<table id="gh-sbc"><tbody><tr>'],
                    b = 0,
                    g, f = [];
                GH.getShopByCatData && (g = GH.getShopByCatData(),
                    f = GH.Util.addPrefixPoolURL(g.data), g = g.itemsPerColumn || 3);
                for (var n = 0, m = f.length; n < m; n++) {
                    var k = f[n],
                        c = k.parent,
                        h = c.id,
                        j = c.title || "",
                        d = c.url || "javascript:;",
                        l = c.txt,
                        e = c.sp ? "_sp=" + c.sp : "",
                        o = c.id ? "id=" + c.id : "";
                    0 < d.indexOf("/sch/allcategories/all-categories") || 0 < d.indexOf("immo.ebay.be/fr/") || (d = GH.Util.getHTTPSURL(d));
                    if (h && ("gh-shop-col-link" == h || "gh-shop-see-all" == h || "gh-shop-by-brand" == h || "gh-shop-by-interest" == h)) a.push('<h3 class="gh-sbc-parent"><a title="' + j + '" href="' + d + '" ' + e + " " + o + ">" + l + '<i class="gh-sbc-h3i gh-sprRetina"></i></a></h3>');
                    else {
                        0 == b % g && (h = "</td><td>", 0 == b && (h = "<td>"), a.push(h));
                        a.push('<h3 class="gh-sbc-parent">' + (c.url ? '<a title="' + j + '" href="' + d + '" ' + e + " " + o + ">" + l + '<i class="gh-sbc-h3i gh-sprRetina"></i></a>' : l) + "</h3>");
                        c = (k = k.children) ? k.length : 0;
                        if (0 < c) {
                            a.push("<ul>");
                            for (j = 0; j < c; j++) e = k[j], d = e.url, l = e.txt, e = e.sp ? "_sp=" + e.sp : "", 0 < d.indexOf("/sch/allcategories/all-categories") || 0 < d.indexOf("immo.ebay.be/fr/") || (d = GH.Util.getHTTPSURL(d)), a.push('<li><a class="scnd" href="' + d + '" ' + e + ">" + l + "</a></li>");
                            a.push("</ul>")
                        }
                        b++
                    }
                }
                a.push("</td></tr></table>");
                return a.join("")
            }
        }
    })
})(GH.jQ);
GH.getShopByCatData = function() {
    return {
        data: [{
            parent: {
                sp: "m570.l3410",
                url: "https://www.ebay.com/b/Collectibles-Art/bn_7000259855",
                txt: "Collectibles &amp; art"
            },
            children: [{
                sp: "m570.l3638",
                url: "https://www.ebay.com/b/Collectibles/1/bn_1858810",
                txt: "Collectibles"
            }, {
                sp: "m570.l3636",
                url: "https://www.ebay.com/b/Antiques/20081/bn_1851017",
                txt: "Antiques"
            }, {
                sp: "m570.l3639",
                url: "https://www.ebay.com/b/Sports-Memorabilia-Fan-Shop-Sports-Cards/64482/bn_1857919",
                txt: "Sports memorabilia"
            }, {
                sp: "m570.l45104",
                url: "https://www.ebay.com/b/Art/550/bn_1853728",
                txt: "Art"
            }]
        }, {
            parent: {
                title: "Your shopping destination for the best selection and value in electronics and accessories",
                sp: "m570.l3413",
                url: "https://www.ebay.com/b/Electronics/bn_7000259124",
                txt: "Electronics"
            },
            children: [{
                sp: "m570.l3653",
                url: "https://www.ebay.com/b/Computers-Tablets-Network-Hardware/58058/bn_1865247",
                txt: "Computers &amp; tablets"
            }, {
                sp: "m570.l3654",
                url: "https://www.ebay.com/b/Cameras-Photo/625/bn_1865546",
                txt: "Cameras &amp; photo"
            }, {
                sp: "m570.l3655",
                url: "https://www.ebay.com/b/TV-Video-Home-Audio-Electronics/32852/bn_1648392",
                txt: "TV, audio &amp; surveillance"
            }, {
                sp: "m570.l3652",
                url: "https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441",
                txt: "Cell phones &amp; accessories"
            }]
        }, {
            parent: {
                title: "Your new destination for Clothing, Shoes &amp; Accessories on eBay",
                sp: "m570.l3409",
                url: "https://www.ebay.com/b/Fashion/bn_7000259856",
                txt: "Fashion"
            },
            children: [{
                sp: "m570.l3632",
                url: "https://www.ebay.com/b/Womens-Clothing/15724/bn_661783",
                txt: "Women"
            }, {
                sp: "m570.l3633",
                url: "https://www.ebay.com/b/Mens-Clothing/1059/bn_696958",
                txt: "Men"
            }, {
                sp: "m570.l3634",
                url: "https://www.ebay.com/b/Jewelry-Watches/281/bn_1865273",
                txt: "Jewelry &amp; watches"
            }, {
                sp: "m570.l3635",
                url: "https://www.ebay.com/b/Shoes/bn_7000259122",
                txt: "Shoes"
            }]
        }, {
            parent: {
                sp: "m570.l3412",
                url: "https://www.ebay.com/b/Home-Garden/11700/bn_1853126",
                txt: "Home &amp; garden"
            },
            children: [{
                sp: "m570.l3646",
                url: "https://www.ebay.com/b/Yard-Garden-Outdoor-Living-Items/159912/bn_1853607",
                txt: "Yard, garden &amp; outdoor"
            }, {
                sp: "m570.l3647",
                url: "https://www.ebay.com/b/Art-Craft-Supplies/14339/bn_1851051",
                txt: "Crafts"
            }, {
                sp: "m570.l4131",
                url: "https://www.ebay.com/b/Home-Improvement/159907/bn_1851980",
                txt: "Home improvement"
            }, {
                sp: "m570.l3773",
                url: "https://www.ebay.com/b/Pet-Supplies/1281/bn_1853597",
                txt: "Pet supplies"
            }]
        }, {
            parent: {
                title: "Buy and sell auto parts and accessories",
                sp: "m570.l45093",
                url: "https://www.ebay.com/rpp/geo-parts-accessories-motors",
                txt: "Auto Parts & Accessories"
            },
            children: [{
                sp: "m570.l45094",
                url: "https://www.ebay.com/b/Car-GPS-Units/156955/bn_887051",
                txt: "GPS & Security Devices"
            }, {
                sp: "m570.l45095",
                url: "https://www.ebay.com/b/Car-Radar-Laser-Detectors/14935/bn_887006",
                txt: "Radar & Laser Detectors"
            }, {
                sp: "m570.l45096",
                url: "https://www.ebay.com/b/Automotive-Care-Detailing/179448/bn_1880904",
                txt: "Care & Detailing"
            }, {
                sp: "m570.l45097",
                url: "https://www.ebay.com/b/Scooter-Parts-Accessories/84149/bn_16582008",
                txt: "Scooter Parts & Accessories"
            }]
        }, {
            parent: {
                title: "",
                sp: "m570.l3772",
                url: "https://www.ebay.com/b/Musical-Instruments-Gear/619/bn_1865601",
                txt: "Musical instruments &amp; gear"
            },
            children: [{
                sp: "m570.l6384",
                url: "https://www.ebay.com/b/Guitars-Basses/3858/bn_1865236",
                txt: "Guitar"
            }, {
                sp: "m570.l6385",
                url: "https://www.ebay.com/b/Pro-Audio-Equipment/180014/bn_1865231",
                txt: "Pro audio equipment"
            }, {
                sp: "m570.l6386",
                url: "https://www.ebay.com/b/String-Instruments/180016/bn_1865268",
                txt: "String"
            }, {
                sp: "m570.l6387",
                url: "https://www.ebay.com/b/Stage-Lighting-Effects/12922/bn_1855494",
                txt: "Stage lighting &amp; effects"
            }]
        }, {
            parent: {
                sp: "m570.l3414",
                url: "https://www.ebay.com/b/Sporting-Goods/888/bn_1865031",
                txt: "Sporting goods"
            },
            children: [{
                sp: "m570.l3648",
                url: "https://www.ebay.com/b/Outdoor-Sports/159043/bn_1855398",
                txt: "Outdoor sports"
            }, {
                sp: "m570.l4135",
                url: "https://www.ebay.com/b/Team-Sports/159049/bn_1865097",
                txt: "Team sports"
            }, {
                sp: "m570.l3650",
                url: "https://www.ebay.com/b/Fitness-Running-Yoga-Equipment/15273/bn_1855426",
                txt: "Exercise &amp; fitness"
            }, {
                sp: "m570.l3651",
                url: "https://www.ebay.com/b/Golf-Equipment/1513/bn_1849088",
                txt: "Golf"
            }]
        }, {
            parent: {
                sp: "m570.l3645",
                url: "https://www.ebay.com/b/Toys-Hobbies/220/bn_1865497",
                txt: "Toys &amp; hobbies"
            },
            children: [{
                sp: "m570.l3415",
                url: "https://www.ebay.com/b/RC-Model-Vehicles-Toys-Control-Line/2562/bn_1851704",
                txt: "Radio control"
            }, {
                sp: "m570.l3284",
                url: "https://www.ebay.com/b/Diecast-Toy-Vehicles/222/bn_1850842",
                txt: "Kids toys"
            }, {
                sp: "m570.l1615",
                url: "https://www.ebay.com/b/Action-Figures/246/bn_1648288",
                txt: "Action figures"
            }, {
                sp: "m570.l4186",
                url: "https://www.ebay.com/b/Dolls-Teddy-Bears/237/bn_1865477",
                txt: "Dolls &amp; bears"
            }]
        }, {
            parent: {
                sp: "m570.l3416",
                url: "https://www.ebay.com/v/allcategories",
                txt: "Other categories"
            },
            children: [{
                sp: "m570.l3275",
                url: "https://www.ebay.com/b/Video-Games-Consoles/1249/bn_1850232",
                txt: "Video games &amp; consoles"
            }, {
                sp: "m570.l3420",
                url: "https://www.ebay.com/b/Beauty/bn_7000259123",
                txt: "Health &amp; beauty"
            }, {
                sp: "m570.l3644",
                url: "https://www.ebay.com/b/Baby/2984/bn_1854104",
                txt: "Baby"
            }, {
                sp: "m570.l3768",
                url: "https://www.ebay.com/b/Business-Industrial/12576/bn_1853744",
                txt: "Business &amp; industrial"
            }]
        }, {
            parent: {
                id: "gh-shop-see-all",
                sp: "m570.l3601",
                url: "https://www.ebay.com/v/allcategories",
                txt: "See all categories"
            },
            children: []
        }]
    }
};
(function(a) {
    GH.add("SearchBox", function() {
        var b;
        return {
            controlID: "#gh-ac",
            formID: "#gh-f",
            btnID: "#gh-btn",
            outerBoxID: "#gh-ac-box",
            innerBoxID: "#gh-ac-box2",
            setFocus: function() {
                a(b.controlID).focus()
            },
            init: function() {
                b = this;
                0 === a(b.formID + " input[name='_from']").length && a(b.formID).append("<input type=hidden name='_from' value='R40'>");
                a(b.formID + "input[name=_trksid]").val(GH.Util.cTId("1313"));
                GH.isIE && (8 > GH.docMode || 7 == GH.Util.browser.version) && a(GH.ghAC_id).bind("keyup", function() {
                    20 < a(this).attr("value").length &&
                        (a(GH.ghAC_id).css("width", a(GH.ghAC_id + "-box2").width() - 25 + "px"), a(this).unbind("keyup"))
                });
                a(b.controlID).focus(function() {
                    a(GH.ghAC_id + "-box").addClass("gh-ac-box-focus");
                    a(GH.componentID).addClass("gh-sch-focus");
                    GH.Util.hideOverlays()
                }).blur(function() {
                    a(GH.ghAC_id + "-box").removeClass("gh-ac-box-focus");
                    a(GH.componentID).removeClass("gh-sch-focus")
                });
                a(b.formID).bind("submit", function() {
                    a(b.formID + " input[type=hidden][name=_sacat]").val(0);
                    GH.Util.cTImg(GH.ghiIMP + "31")
                })
            }
        }
    })
})(GH.jQ);
(function(a) {
    GH.add("CategorySelect", function() {
        var b;
        return {
            controlID: "#gh-cat",
            init: function() {
                var c = this;
                b = this;
                a(b.controlID).length && (a(b.controlID).bind("blur", function() {
                        GH.acPrevCatID = a(b.controlID).val();
                        GH.isSelectOptionsBoxShown = !1
                    }), a(b.controlID).on("click keypress", function(a) {
                        if (13 == a.which || "click" == a.type) GH.isSelectOptionsBoxShown = !0;
                        c.selectCat()
                    }), a(b.controlID).focus(function() {
                        a("#gh-cat-box").addClass("gh-cat-box-focus")
                    }).blur(function() {
                        a("#gh-cat-box").removeClass("gh-cat-box-focus")
                    }),
                    1 < a(b.controlID + " option").length || (c.buildCatSelect(), (~~GH.C.catId || ~~GH.C.selectedCatId || GH.userAgent.match(/iPad/i)) && a(GH.SearchBox.formID).mouseenter()))
            },
            selectCat: function() {
                document.getElementById("gh-cat");
                GH.Events.publish("stores", {
                    formID: "gh-f",
                    dropDownID: "gh-cat"
                });
                GH.Events.subscribe("stores", function(a) {
                    return a
                })
            },
            buildCatSelect: function() {
                var c, f, d, g = [],
                    e = b.controlID,
                    h = GH.C.selectedCatId || GH.C.catId || 0;
                if (typeof GH.getCategories == GH.functionStr) {
                    c = GH.getCategories();
                    f = c.length;
                    if (4340 ==
                        GH.C.pageId || 2047675 == GH.C.pageId) h = 0;
                    if (2 > a(e + " option").length) {
                        for (d = 0; d < f; d++) g.push("<option value='" + c[d].i + "'" + (c[d].i == h ? " selected" : "") + ">" + c[d].v + "</option>");
                        a(e).html(a(e).html() + g.join(""))
                    }
                    GH.isIE && 8 > GH.docMode && a(e).css("position", "static");
                    GH.acPrevCatID = a(e).val()
                }
            }
        }
    })
})(GH.jQ);
GH.getCategories = function() {
    return [{
        i: 20081,
        v: "Antiques"
    }, {
        i: 550,
        v: "Art"
    }, {
        i: 2984,
        v: "Baby"
    }, {
        i: 267,
        v: "Books"
    }, {
        i: 12576,
        v: "Business & Industrial"
    }, {
        i: 625,
        v: "Cameras & Photo"
    }, {
        i: 15032,
        v: "Cell Phones & Accessories"
    }, {
        i: 11450,
        v: "Clothing, Shoes & Accessories"
    }, {
        i: 11116,
        v: "Coins & Paper Money"
    }, {
        i: 1,
        v: "Collectibles"
    }, {
        i: 58058,
        v: "Computers/Tablets & Networking"
    }, {
        i: 293,
        v: "Consumer Electronics"
    }, {
        i: 14339,
        v: "Crafts"
    }, {
        i: 237,
        v: "Dolls & Bears"
    }, {
        i: 11232,
        v: "DVDs & Movies"
    }, {
        i: 6E3,
        v: "eBay Motors"
    }, {
        i: 45100,
        v: "Entertainment Memorabilia"
    }, {
        i: 172008,
        v: "Gift Cards & Coupons"
    }, {
        i: 26395,
        v: "Health & Beauty"
    }, {
        i: 11700,
        v: "Home & Garden"
    }, {
        i: 281,
        v: "Jewelry & Watches"
    }, {
        i: 11233,
        v: "Music"
    }, {
        i: 619,
        v: "Musical Instruments & Gear"
    }, {
        i: 1281,
        v: "Pet Supplies"
    }, {
        i: 870,
        v: "Pottery & Glass"
    }, {
        i: 10542,
        v: "Real Estate"
    }, {
        i: 316,
        v: "Specialty Services"
    }, {
        i: 888,
        v: "Sporting Goods"
    }, {
        i: 64482,
        v: "Sports Mem, Cards & Fan Shop"
    }, {
        i: 260,
        v: "Stamps"
    }, {
        i: 1305,
        v: "Tickets & Experiences"
    }, {
        i: 220,
        v: "Toys & Hobbies"
    }, {
        i: 3252,
        v: "Travel"
    }, {
        i: 1249,
        v: "Video Games & Consoles"
    }, {
        i: 99,
        v: "Everything Else"
    }]
};
ebayContent["GlobalHeaderWeb/GreetingsJavascriptContent"] = {
    greetingDefault: 'Hi! <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l1524">Sign in</a>\u00a0<span>or <a href="https://reg.ebay.com/reg/PartialReg?ru=ru2" _sp="m570.l2621">register</a></span>',
    greetingRecognized: 'Hi <b>${username}</b> (<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2620">Sign in</a>)',
    greetingAuthenticated: "Hi <b>${username}</b>!",
    greetingOverlaySignout: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;lgout=1" _sp="m570.l2622">Sign out</a>',
    profile_mycollections: '<a href="http://www.ebay.com/cln/_mycollections">My Collections</a>',
    profile_accountsettings: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbay&amp;CurrentPage=MyeBayMyAccounts">Account settings</a>',
    profile_myworld: '<a href="https://www.ebay.com/usr/@@">@#@</a>',
    profile_feedback: '<a title="Feedback score" href="https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&amp;userid=@@"></a>',
    profile_loginUserL10n: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru">Sign in</a> to see your user information',
    profile_userAltTxt: "Profile picture - ",
    profile_memberAltTxt: "User ID",
    profile_feedbackscore: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand&amp;ghud=1"></a>',
    profile_feedbackscore_new: '<a href="http://gha.ebay.com/nproxy/notification/v1/getMinProfile"></a>',
    feedbackTitle: "Feedback Score ${feedback}"
};
ebayContent["GlobalHeaderWeb/HiddenFromL10NTeamContent"] = {};
(function(a) {
    GH.add("Greeting", function() {
        var m = a.extend(GH.Util.getBundle("GreetingsJavascriptContent"), GH.Util.getBundle("HiddenFromL10NTeamContent")),
            n = GH.undefinedStr;
        return {
            init: function() {
                var f = this,
                    b, e, c = m.greetingDefault,
                    d, g, j, i, h = GH.vCJar,
                    c = c.replace("<span", '<span id="gh-ug-flex"');
                b = decodeURIComponent(GH.C.id || escape(GH.Util.base64decode(h.readCookie("dp1", "u1p"))));
                e = GH.C.fn || h.readCookieObj("dp1", "u1f").value;
                try {
                    e = decodeURIComponent(e)
                } catch (k) {
                    e = decodeURIComponent(unescape(e))
                }
                e = e.replace(/\+/g,
                    " ");
                typeof e !== n && 0 <= e.indexOf("?") && (e = null);
                !(0 === GH.C.sin && GH.C.id) && (typeof b !== n && "" !== b && 0 > b.indexOf("@@__@@__@@")) && (c = m.greetingRecognized, GH.userRecog = !0, GH.userID = b, GH.userFN = e, GH.C.cgi || GH.C["static"] ? (d = h.readCookie("dp1", "pcid")) ? (g = j = decodeURIComponent(h.readCookie("cid")), i = g.indexOf("#"), -1 === i && 8 < g.length || (-1 !== i && (j = g.substring(i + 1, g.length)), j === d && (a(window).on("load.gh", function() {
                        h.writeCookie("cid", g, 365)
                    }), GH.userAuth = !0))) : GH.userAuth = !0 : 1 === GH.C.sin && (GH.userAuth = !0), GH.userAuth &&
                    (c = m.greetingAuthenticated), !GH.userAuth && ("function" === typeof h.getBitFlag && 1 == h.getBitFlag(h.readCookie("dp1", "pbf"), 98)) && (GH.userRecog = !1, c = m.greetingDefault), b = 77 == GH.C.siteId ? b || e : e || b, 13 < b.length && (b = b.substring(0, 12) + "..."), c = GH.Util.mergeContent(c, {
                        username: GH.Util.eZ(b)
                    }));
                c = c.replace(/ru=ru2/g, "ru=" + GH.Util.addRU()).replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU());
                GH.userAuth ? (a("#gh-eb-u").html('<button id=gh-ug class="gh-ua gh-control" aria-expanded=false aria-controls=gh-eb-u-o role=button>' +
                    c + '<b class="gh-eb-arw gh-sprRetina"></b></button>'), a("#gh-ug").click(function(c, b) {
                    var d;
                    d = a("#gh-eb-u").data("mo");
                    var e = a("#gh-eb-u").data("t"),
                        g = (new Date).getTime();
                    a("#gh-eb-u").removeData("mo");
                    if (d || !(e && 400 > g - e))
                        if (c.preventDefault(), a("#gh-eb-u-o").length) f[a("#gh-eb-u-o").is(":hidden") ? "showUserOverlay" : "hideUserOverlay"](b);
                        else GH.Util.createOverlay("u", 0, b), a("#gh-eb-u-o").data("ghi", 41), GH.Util.openOverlay(a("#gh-ug")), a("#gh-eb-u").addClass("gh-eb-active"), GH.alerts.collectData &&
                            GH.Util.cTImg(GH.ghiIMP + 79), d = GH.Util.getSecURL(GH.Util.getHref(GH.GHSW.newprofile || GH.GHSW.desktop_new_profile_service ? m.profile_feedbackscore_new : m.profile_feedbackscore)), a.ajax(d, {
                                dataType: "jsonp",
                                jsonpCallback: "GH_alertData",
                                timeout: 4E3,
                                success: function(a) {
                                    f.buildGreetingOverlay(a, !1, b)
                                },
                                error: function() {
                                    f.buildGreetingOverlay({}, !0, b)
                                }
                            })
                }), a("#gh-eb-u").hoverIntent({
                    over: function() {
                        a("#gh-eb-u-o").is(":visible") || (a("#gh-eb-u").data({
                            mo: 1,
                            t: (new Date).getTime()
                        }), a("#gh-ug").click())
                    },
                    out: function() {
                        f.hideUserOverlay()
                    },
                    timeout: "500"
                })) : a("#gh-eb-u").html("<span id=gh-ug class=gh-ug-guest>" + c + "</span>");
                a("#gh-topl").show()
            },
            showUserOverlay: function(f) {
                var b = a("#gh-eb-u-o").data("ghi");
                GH.Util.hideOverlays();
                GH.Util.openOverlay(a("#gh-ug"));
                a("#gh-eb-u").addClass("gh-eb-active");
                f && a("#gh-up a").focus();
                b && GH.Util.cTImg(GH.ghiIMP + b)
            },
            hideUserOverlay: function() {
                GH.Util.closeOverlay(a("#gh-ug"));
                a("#gh-eb-u").removeClass("gh-eb-active")
            },
            buildGreetingOverlay: function(f, b, e) {
                var c = GH.Util.getBundle("GreetingsJavascriptContent"),
                    d, g = a("#gh-eb-u-o"),
                    j = 12,
                    i, h, k = GH.userID,
                    l = GH.userFN;
                typeof f === n && GH.userAuth && (f = {});
                typeof f === n && !b ? (d = "<div class=gh-o-err><span class=gh-o-errb>" + c.profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()) + "</span></div>", g.data("ghi", 40), g.html(d)) : (i = f.r || 0, a.each([10, 50, 100, 500, 1E3, 5E3, 1E4, 25E3, 5E4, 1E5, 5E5, 1E6], function(a, b) {
                        if (i < b) return j = a, !1
                    }), d = f.p ? f.p.replace(/http:.*pics\//, GH.pi) : GH.pi + "social/profile_avatar_60x60.png", h = 77 == GH.C.siteId ? k || l : l || k, d = "<ul id=gh-uu><li id=gh-up><a _sp=m570.l3331 href='" +
                    GH.Util.getHref(c.profile_myworld).replace("@@", k) + "'><img id=gh-upi src='" + d + "' alt='" + c.profile_userAltTxt + h + "'></a></li>", d += "<li id=gh-un>" + (f.u || l || "&nbsp;") + "</li><li id=gh-ui>", l = c.profile_myworld.replace('@@"', k + '"_sp=m570.l3332 id="gh-uid"'), l = l.replace("@#@", "<i class=gh-ar-hdn>" + c.profile_memberAltTxt + "</i> " + k), d += l + (!b && GH.userAuth && "undefined" !== typeof f.r ? " (" + c.profile_feedback.replace('@@"', '"_sp=m570.l3333') + ")" : "") + "</li>", d += "<li id=gh-uac>" + c.profile_accountsettings.replace("href=",
                        "_sp=m570.l3399 href=") + "</li><li id=gh-uo>" + (GH.userAuth ? c.greetingOverlaySignout : c.greetingRecognized.replace(/.*(<a.*a>).*/, "$1").replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU())) + "</li></ul>", g.data("ghi", b ? 41 : 39), b && g.addClass("gh-eb-o-err"), g.html(d), e && setTimeout(function() {
                        a("#gh-up a:first").focus()
                    }, 50), d = a("#gh-uu a[_sp='m570.l3333']").html("<span class='gh-ar-hdn'>" + GH.Util.mergeContent(c.feedbackTitle, {
                        feedback: ""
                    }) + "</span>" + i + (0 < j ? "<i id=gh-ur style='background-position:" + -[-3, 16, 35, 54,
                        73, 92, 113, 135, 157, 179, 201, 224
                    ][j - 1] + "px " + (7 > j ? "-1px; margin:0 -4px 0 -2px;" : "-2px;") + "' />" : "")).attr("title", GH.Util.mergeContent(c.feedbackTitle, {
                        feedback: i
                    })), d.attr("href", d.attr("href") + k));
                GH.Util.cTImg(GH.ghiIMP + g.data("ghi"))
            }
        }
    })
})(GH.jQ);
(function(b) {
    GH.add("Dropdown", function() {
        var g, h = GH.ghEBActive_id;
        return {
            init: function() {
                g = this;
                b("#gh-eb").length && b(".gh-dd").each(function() {
                    var c = this,
                        a = b(c),
                        d = a.find(".gh-submenu"),
                        e = a.find(".gh-control");
                    a.attr("id");
                    var f = a.attr("data-imp"),
                        j, k = a.position().left,
                        l = b("#gh-eb").outerWidth() + 10;
                    a.removeClass("gh-hvr");
                    GH.Util.isTouchDevice() && !a.hasClass("gh-dd-click") ? a.bind("click", function(i) {
                        i.preventDefault();
                        if (d.is(":visible")) {
                            if (i = b(i.target).attr("href")) a.removeClass(h), GH.Util.closeOverlay(e),
                                document.location = i
                        } else g.activate(c, f)
                    }) : a.hoverIntent({
                        over: function() {
                            b(".gh-479").length || g.activate(c, f)
                        },
                        out: function() {
                            a.removeClass(h);
                            GH.Util.closeOverlay(e)
                        },
                        timeout: 150,
                        addFocus: !1
                    });
                    a.hasClass("gh-dd-click") && a.click(function() {
                        var b = a.find(".gh-submenu");
                        b.is(":hidden") || "hidden" == b.css("visibility") ? (g.activate(c, f), d.find("a").focus()) : (a.removeClass(h), GH.Util.closeOverlay(e))
                    });
                    a.closest("#gh-eb").length && (j = d.outerWidth(), k + j > l && d.css({
                        right: "0px",
                        left: "auto"
                    }))
                })
            },
            activate: function(c,
                a) {
                var d = b(c).find(".gh-submenu"),
                    e = b(c).find(".gh-control"),
                    f;
                if (d.is(":hidden") || "hidden" == d.css("visibility")) GH.Util.openOverlay(e), (f = d.parents("li").get(0).id) && e.trigger(f + "-opened");
                b(c).addClass(h);
                "undefined" !== typeof a && GH.Util.cTImg(GH.ghiIMP + a)
            }
        }
    })
})(GH.jQ);
(function(f) {
    GH.add("Coupon", function() {
        var d = GH.Util.getBundle("CouponJavascriptContent"),
            a = GH.Util,
            g = "<a _sp=m570.l2735 href='" + a.getHref(d.CL10N) + "'>",
            h = "<a _sp=m570.l2634 href='" + a.getHref(d.BL10N) + "'>",
            i = "<a _sp=m570.l2634 href='" + a.getHref(d.BOL10N) + "'>",
            j = "<a _sp=m570.l2734 href='" + a.getHref(d.JL10N) + "'>";
        return {
            init: function() {
                var c = GH.C.userMsgConfig,
                    b, e, a;
                GH.userAuth && c && (e = "string" == typeof c ? c : c[0], "undefined" !== typeof d[e] && (b = d[e].replace(/-C-/, g).replace(/-B-/, h).replace(/-J-/, j).replace(/-O-/,
                    i).replace(/-A-/, "</a>").replace(/\[/g, "<").replace(/\]/g, ">"), c[1] && (b = b.replace(/51/, c[1])), c[2] && (b = b.replace(/52/, c[2])), 18 == e && (b = b.replace(/'>Join/, GH.Util.addRU() + "'>Join")), b && (0 < e && 16 > e ? a = "cpn" : a = "bucks", f("#gh-eb-sub-li-cpn").addClass("gh-" + a).append("<b class=gh-spr id=gh-" + a + "-ttl></b>" + b + "</li>"))))
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/CouponJavascriptContent"] = {
    "0": "",
    1: "",
    2: "Your -C- coupon -A- expires in less than an hour",
    3: "Your -C-51% off coupon-A- expires in less than an hour",
    4: "Your -C-51 off coupon-A- expires in less than an hour",
    5: "Your -C-coupon-A- expires in 51 hours",
    6: "Your -C-51% off coupon-A- expires in 52 hours",
    7: "Your -C-51 off coupon-A- expires in 52 hours",
    8: "Your -C-coupon-A- expires soon",
    9: "Your -C-51% off coupon-A- expires soon",
    10: "Your -C-51 off coupon-A- expires soon",
    11: "You have -C-51 coupons-A-",
    12: "You have a -C-coupon-A-",
    13: "You have a -C-51% off coupon-A-",
    14: "You have a -C-51 off coupon-A-",
    15: "You have -C-coupons-A- available",
    16: "You have earned $51 -B- eBay Bucks-A- as of 51",
    17: "Sign in to see your <b>eBay Bucks</b>",
    18: "Earn up to $51 in eBay Bucks! -J-Join now-A-",
    19: "You'll get your -B- eBay Bucks-A- on 51",
    20: "See eBay Bucks -O-Bonus offers-A-",
    21: "Earn up to $51 in -B-eBay Bucks-A-!",
    22: "Spend your -B-eBay Bucks-A- now!",
    23: "Spend your -B-51-A- in eBay Bucks now!",
    24: "Only 51 days left to spend your -B-Bucks-A-!",
    25: "Only 1 day left to spend your -B-Bucks-A-!",
    26: "Hurry! Your -B-Bucks-A- expire in 51 hours!",
    27: "Hurry! Your -B-Bucks-A- expire in 1 hour!",
    28: "Your -B-Bucks-A- expire in less than an hour!",
    29: "Earn more eBay Bucks with a -O- bonus-A-",
    30: "Shop now to earn -B-eBay Bucks-A-!",
    31: "$51 in eBay Bucks. See -O- Bonus offers-A-",
    32: "You've earned $51 in -B-eBay Bucks-A-!",
    BL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&amp;CurrentPage=Rewards&amp;sspagename=ebaybucksheader"></a>',
    BOL10N: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&amp;CurrentPage=Rewards&amp;sspagename=ebaybucksheader#b_offer"></a>',
    JL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?RewardsIntEnroll&amp;CTASignup=false&amp;ExtLanding=false&amp;ssPageName=ebaybucksheader"></a>',
    CL10N: '<a href="https://my.ebay.com/ws/eBayISAPI.dll?MyeBay&amp;CurrentPage=MyeBayIncentives&amp;gbh=1"></a>'
};
ebayContent["GlobalHeaderWeb/NotificationsJavascriptContent"] = {
    zeroAlertsL10n: "You're all caught up!",
    loginAlertL10n: 'Please <a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881">sign-in</a> to view notifications.',
    errorAlertL10n: "Notifications are not available at this time",
    alertHeader: "Notifications",
    dataURL: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?GetGHNotificationsCommand"></a>',
    clickURL: '<a href="http://my.ebay.com/ws/eBayISAPI.dll?SetGHNotificationsReadTSCommand"></a>',
    one: "You have ${itemcount} new notification",
    many: "You have ${itemcount} new notifications",
    zero: "Notification",
    timer: "Item ends in ${timeleft}",
    second: "second",
    seconds: "seconds",
    hours: "hours",
    hour: "hour",
    minute: "minute",
    minutes: "minutes",
    removeNotif: "Remove Notification",
    countDownDay: "d",
    countDownHour: "h",
    countDownMinute: "m",
    countDownSecond: "s",
    countDownEnded: "Ended",
    survey: "Are notifications helpful to you?",
    proxyURL: '<a href="http://gha.ebay.com"></a>',
    latestproxyURL: '<a href="http://www.gha.pp.stratus.ebay.com"></a>'
};
ebayContent["GlobalHeaderWeb/SYMBAnJavascriptContent"] = {
    1: "${itemcount} items need to be paid now",
    3: "${itemcount} items need to be shipped",
    6: "You received ${itemcount} messages",
    7: "${itemcount} items have been shipped",
    loginAlertL10n: '<a href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;ru=ru" _sp="m570.l2881">Please <span>sign-in</span> to view notifications.</a>'
};

function GHalertConf() {
    var d = function(a) {
            return "undefined" !== typeof this[a]
        }("localStorage") && null !== localStorage ? localStorage : 0,
        b = GH.Util,
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        c = GH.Util.getBundle("SYMBAnJavascriptContent"),
        e = {
            pollingFrequency: {
                defaultPolling: GH.userRecog && !GH.userAuth ? 60 : 30,
                aggressivePolling: 10,
                zeroNotifPolling: 180,
                nonActivePolling: -1
            },
            activeFlag: !0,
            bidFlag: !1,
            zeroFlag: !1,
            secListenActivity: 90,
            secWaitActivity: 90,
            waitTimer: "",
            listenUserActivityTimer: "",
            intervalRefreshData: 4,
            countPolling: 0
        },
        c = c.loginAlertL10n || a.loginAlertL10n,
        c = {
            loginUserL10n: GH.Util.getBundle("GreetingsJavascriptContent").profile_loginUserL10n.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()),
            zeroAlertsL10n: "undefined" !== typeof a.zeroAlertsL10n ? a.zeroAlertsL10n : "",
            loginAlertL10n: "undefined" !== typeof c ? c.replace(/&amp;ru=ru/g, "&ru=" + GH.Util.addRU()) : "",
            errorAlertL10n: "undefined" !== typeof a.errorAlertL10n ? a.errorAlertL10n : "",
            removeNotif: void 0 !== a.removeNotif ? a.removeNotif : "",
            survey: a.survey,
            one: a.one,
            many: a.many,
            zero: a.zero,
            timer: a.timer,
            minutes: a.minutes,
            minute: a.minute,
            seconds: a.seconds,
            second: a.second,
            hours: a.hours,
            hour: a.hour
        },
        f = {
            d: a.countDownDay,
            h: a.countDownHour,
            m: a.countDownMinute,
            s: a.countDownSecond,
            e: a.countDownEnded
        },
        b = {
            alertDataURL: b.getSecURL(b.getHref(a.dataURL)),
            alertClickURL: b.getSecURL(b.getHref(a.clickURL)),
            alertL10nURL: b.getSecURL(GH.GH_NOTIF_TMPL_LINK, !0)
        };
    return {
        newalertsasync: 1,
        design: "1",
        lastMinuteNotif: 0,
        secLastMinuteNotif: 300,
        secCountDown: 300,
        groupType: {},
        group: 1,
        minRenderHorizontal: 3,
        fixPDSTimeout: 1,
        polling: e,
        enableLocalStorage: 1,
        undefinedStr: "undefined",
        GHlocalStorage: d,
        messageAlertL10N: c,
        tlf: f,
        alertURL: b,
        refreshAllDataFlag: 0
    }
};
GH.GHN_SURVEY_HTML = "";
GH.GH_NOTIF_TMPL_LINK = "https://ir.ebaystatic.com/rs/v/3t4uoe3epa3mnh3ayt1j1pos2y1.js";

function GHalertServiceConf() {
    var b = GH.Util,
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        a = GH.Util.getBundle("NotificationsJavascriptContent"),
        c = GH.Util,
        f = {
            3: "en-GB",
            77: "de-DE",
            23: "fr-FR",
            123: "nl-BE",
            212: "pl-PL",
            146: "nl-NL",
            201: "zh-HK",
            16: "de-DE",
            193: "de-DE",
            203: "en-IN",
            71: "fr-FR",
            186: "es-ES",
            101: "it-IT",
            2: "en-CA",
            210: "fr-CA",
            15: "en-AU",
            215: "ru-RU",
            22: "ru-RU",
            107: "ru-RU",
            12: "es-CO",
            28: "es-CO",
            44: "es-CO",
            46: "es-CO",
            51: "es-CO",
            60: "es-CO",
            61: "es-CO",
            63: "es-CO",
            85: "es-CO",
            91: "es-CO",
            136: "es-CO",
            150: "es-CO",
            158: "es-CO",
            160: "es-CO",
            214: "es-CO",
            225: "es-CO",
            252: "es-CO",
            248: "es-CO",
            31: "pt-BR",
            213: "pt-BR"
        },
        d = GH.C.siteId,
        e = "";
    "qa" === GH.GHSW.pool || "dev" === GH.GHSW.pool ? a = c.getSecURL(c.getHref(a.proxyURL)) : "latest" === GH.GHSW.pool ? (a = c.getSecURL(c.getHref(a.latestproxyURL)), a = a.replace("latest.", "")) : a = c.getSecURL(c.getHref(a.proxyURL));
    b = {
        alertDataURL: b.getSecURL(a + "/nproxy/notification/v1/getNotification?GH"),
        alertClickURL: b.getSecURL(a + "/nproxy/notification/v1/setNotification?GH"),
        alertL10nURL: b.getSecURL("undefined" !==
            typeof GHN_TMPL_CONF ? GHN_TMPL_CONF : GH.GH_NOTIF_TMPL_LINK, !0)
    };
    void 0 !== GH.C.lng && "en-US" !== GH.C.lng ? e = "&lang=" + GH.C.lng : void 0 !== d && void 0 !== f[d] && (e = "&lang=" + f[d]);
    b.alertDataURL += e;
    return {
        alertURL: b,
        ajaxProperties: {
            dataType: "jsonp",
            jsonp: !1,
            jsonpCallback: "GH_alertData",
            cache: !1,
            timeout: 2500
        },
        ajaxUpdateProperties: {
            dataType: "jsonp",
            jsonp: !1,
            jsonpCallback: "GH_alertData",
            cache: !1,
            timeout: 1500
        },
        retryAjaxUpdate: 3,
        backendDomain: a,
        group: 1,
        tracking: {
            OUTBID: 34,
            BIDITEM: 35,
            WATCHITM: 36,
            SHOPCARTITM: 37,
            ITMWON: 38,
            ITMSOLD: 39,
            COCMPLT: 40,
            ITMSHPD: 41,
            BESTOFR: 42,
            BODECLND: 43,
            CNTROFFR: 44,
            BOACCPTD: 45,
            COACCPTED: 46,
            CODECLND: 47,
            OFREXPIRED: 48,
            OFRDCLNDACPT: 49,
            OFRRETRACTED: 50,
            MSGM2MMSGHDR: 51,
            1: 52,
            3: 53,
            6: 54,
            7: 55,
            UCI: 56
        },
        trackingUserType: {
            CNTROFFR: {
                B: 101,
                S: 102
            },
            COACCPTED: {
                B: 103,
                S: 104
            },
            CODECLND: {
                B: 105,
                S: 106
            }
        },
        STATUS: {
            NEW: 1,
            READ: 2,
            DELETED: 4,
            1: "NEW",
            2: "READ",
            4: "DELETED"
        },
        countdownType: {},
        secCountDown: 900,
        refreshAllDataFlag: 0,
        updateNewItemHTML: 1,
        enablePagination: 1,
        percentPagination: 20,
        maxLoadOldNotificaiton: 4,
        NOTIFTYPE: {
            notif: "NOTIFICATION",
            msg: "REMINDER"
        }
    }
};
(function(g) {
    var h = [],
        d = {
            ITMWON: "1",
            COCMPLT: "3",
            MSGM2MMSGHDR: "6",
            ITMSHPD: "7"
        },
        e = 0,
        c = {},
        f = 0;
    totalCurrentTypeCount = 0;
    GH.alertsGroup = {
        init: function(a) {
            e = a.group;
            h = GH.Util.getBundle("SYMBAnJavascriptContent");
            this.resetGroupItems()
        },
        getTotalCurrentTypeCount: function() {
            return totalCurrentTypeCount
        },
        setTotalCurrentTypeCount: function(a) {
            totalCurrentTypeCount = a
        },
        getTotalTypeCount: function() {
            return f
        },
        getGroup: function() {
            return e
        },
        setGroup: function(a) {
            e = a
        },
        deleteGroupItem: function(a) {
            a = d[a.mdnsName];
            totalCurrentTypeCount -=
                c[a].count;
            c[a] = {
                count: 0,
                total: 0,
                notificationId: void 0,
                isShown: !1,
                isDeleted: !0,
                shouldGroup: !1
            }
        },
        getGroupNotif: function() {
            return c
        },
        getGroupId: function(a) {
            return d[a]
        },
        getCount: function(a) {
            return c[d[a]].count
        },
        getTotal: function(a) {
            return c[d[a]].total
        },
        shouldRemoveItem: function(a) {
            var b;
            if (!e) return !1;
            b = d[a.mdnsName];
            if (void 0 === b) return !1;
            if (c[b].isDeleted) return !0;
            c[b].count++;
            totalCurrentTypeCount++;
            if (!c[b].shouldGroup) return !1;
            if (c[b].isShown) return !0;
            c[b].isShown = !0;
            c[b].notificationId = a.notificationId;
            a.ghGroup = "" + b;
            return !1
        },
        getContent: function(a) {
            var b = h[this.getGroupId(a)],
                a = this.getTotal(a);
            return GH.Util.mergeContent(b, {
                itemcount: "<span class='ghn-o-g-num'>" + a + "</span>"
            })
        },
        isItemGroup: function(a) {
            if (!e || void 0 === a) return !1;
            a = d[a];
            return void 0 === a ? !1 : c[a].shouldGroup
        },
        filterGroup: function(a) {
            return g.grep(a, function(a) {
                return void 0 !== d[a.mdnsName]
            })
        },
        resetGroupItems: function() {
            g.each(d, function(a, b) {
                c["" + b] = {
                    count: 0,
                    total: 0,
                    notificationId: void 0,
                    isShown: !1,
                    isDeleted: !1,
                    shouldGroup: !1
                }
            });
            totalCurrentTypeCount = f = 0
        },
        updateGroupItem: function(a) {
            var b = d[a.mdnsName];
            c[b].total += a.totalCountByEvent;
            f += c[b].total;
            3 <= c[b].total && (c[b].shouldGroup = !0)
        },
        setGroupItems: function(a) {
            if (e && void 0 !== a) {
                var b = this,
                    a = b.filterGroup(a);
                this.resetGroupItems();
                g.each(a, function(a, c) {
                    b.updateGroupItem(c)
                })
            }
        }
    }
})(GH.jQ);

function GHalertObjData(d, H) {
    var e = H.Conf,
        C = function(a) {
            return (void 0 !== a || void 0 !== a.errorMessage) && void 0 !== a.errorMessage && void 0 !== a.errorMessage.error ? a.errorMessage.error : !1
        },
        Q = e.ajaxUpdateProperties,
        n = {},
        v = GH.alertsGroup,
        k = e.alertURL,
        A = void 0,
        l = e.undefinedStr,
        x = e.STATUS,
        R = e.NOTIFTYPE,
        y = H.Util,
        D = 0,
        S = e.tracking,
        g = {},
        T = e.countdownType,
        E = -1,
        s = "",
        h = void 0,
        o = !1,
        I = !1,
        J = -1,
        F = function(a) {
            return a.notificationType !== R.notif || typeof S[p(a)] === l ? !1 : !0
        },
        K = function(a) {
            return x[a.status] == x.NEW || a.popup ?
                !0 : !1
        },
        t = function(a) {
            var b = 0,
                c = function(a) {
                    var a = C(a),
                        c = !1;
                    !1 !== a && (d.each(a, function(a, b) {
                        if ("RETRY" === b.actionToTake) return c = !0, !1
                    }), c && (b++, f()))
                },
                j = function() {
                    b++;
                    f()
                },
                u = d.extend(Q, {
                    success: c,
                    error: j
                }),
                f = function() {
                    b < e.retryAjaxUpdate && d.ajax(a, u)
                };
            return {
                put: f,
                successCB: c,
                errorCB: j
            }
        },
        r, z = !1,
        L = function(a, b) {
            z = !1;
            h = void 0;
            o = !1;
            d(a).off("scroll.ghn-pagination");
            d(a + " li.ghn-o-l").remove();
            void 0 !== b && b(d(a + " li").length)
        };
    r = {
        getIsLoading: function() {
            return z
        },
        getOldNotification: function(a, b, c, j,
            u, f) {
            z || (z = !0, ajaxProperties = d.extend(e.ajaxProperties, {
                success: function(q) {
                    var i = 0;
                    !1 !== C(q) ? L(b, f) : (D++, q.notifications = d.grep(q.notifications, function(a) {
                        return !GH.alertsGroup.shouldRemoveItem(a)
                    }), i = q.notifications.length, c ? j(q, c) : (q.notifications = d.grep(q.notifications, function(a) {
                        return !F(a) ? !1 : !0
                    }), a = a.concat(q.notifications)), h = void 0 !== q.next ? e.backendDomain + q.next : void 0, D >= e.maxLoadOldNotificaiton && (h = void 0, d(b).off("scroll.ghn-pagination"), o = !1), setTimeout(function() {
                        z = !1;
                        (void 0 !== GH.alerts.getData() &&
                            6 >= GH.alerts.getData().length || 0 === i) && void 0 !== h ? r.getOldNotification(a, b, c, j, u, f) : void 0 !== u && u(a)
                    }, 500))
                },
                error: function() {
                    L(b, f)
                }
            }), d.ajax(k.alertDataURL + M(h), ajaxProperties))
        }
    };
    var M = function(a, b) {
            var c = a.split("?");
            return b ? c[1] : "&" + c[1]
        },
        N = function(a, b) {
            var c;
            if (void 0 === a.notifications)
                if (void 0 === a.errorMessage && void 0 !== a.d) a.notifications = a.d;
                else return;
            GH.alertsGroup.setGroupItems(a.eventInformation);
            A = a.badgeCount;
            c = a.notifications;
            if (0 == c.length || 0 == a.total) return c;
            s = a.latestNotificationTime.value;
            E = (new Date(a.latestNotificationTime.value)).getTime() / 1E3;
            currentNumberItems = c.length - A;
            void 0 !== a.next && (h = e.backendDomain + a.next);
            return d.grep(c, function(a) {
                return !F(a) || GH.alertsGroup.shouldRemoveItem(a) || typeof b[a.i] !== l ? !1 : !0
            })
        },
        p = function(a) {
            return "" + a.mdnsName
        },
        O = function(a) {
            if (void 0 !== a.e && !isNaN(a.e) && null !== a.e) return a.e;
            try {
                if (a.e = (new Date(a.subject.listing.scheduledEndDate.value)).getTime() / 1E3, isNaN(a.e) || null === a.e) return
            } catch (b) {
                return
            }
            return a.e
        },
        B = function(a) {
            return "MSGM2MMSGHDR" ===
                p(a) ? a.subject.message.messageId : "undefined" !== typeof a.subject.listing ? a.subject.listing.listingId : ""
        },
        G = function(a) {
            return x[a.status]
        },
        P = function(a, b) {
            return "http" + (a ? "s" : "") + "://" + (a & !GH.C.qapool ? "secureimg" : "i") + ".ebayimg." + (GH.C.qapool ? "qa.ebay." : "") + "com/images/i/" + b + "-0-0/s-l67/p.jpg"
        };
    v.init(e);
    return {
        PUTWrapper: t,
        getBucket: function() {
            return g
        },
        resetBucket: function() {
            g = {}
        },
        isZeroFlag: function(a) {
            return 0 === (void 0 === a.notifications ? a.d.length : a.notifications.length) ? !0 : !1
        },
        convertItemType: function(a) {
            var b = !1,
                c;
            typeof a.d !== l ? (c = a.d, b = !0) : c = a;
            return b ? (a.d = c, a) : c
        },
        processNotifData: function(a, b, c) {
            b = N(a, c);
            void 0 !== a.groupCurrentCount && GH.alertsGroup.setTotalCurrentTypeCount(a.groupCurrentCount);
            return b
        },
        getItemKey: p,
        getItemKeyName: function(a) {
            return "" + a.name
        },
        getItemId: B,
        getItemCreatedTime: function(a) {
            if (void 0 !== a.ct) return a.ct;
            try {
                a.ct = (new Date(a.creationDate.value)).getTime()
            } catch (b) {
                return
            }
            return a.ct
        },
        getItemEndTime: O,
        getItemGroup: function(a) {
            return GH.alertsGroup.getGroupId(a.mdnsName)
        },
        getItemStatus: G,
        isGroup: function(a) {
            return v.isItemGroup(a.mdnsName)
        },
        setItemStatus: function(a, b) {
            a.status = x["" + b];
            return a
        },
        getUniqueId: function(a) {
            return a.notificationId
        },
        sortData: function(a) {
            return a
        },
        addPrToData: function(a) {
            return a
        },
        isNewOrPopUp: K,
        isZeroData: function(a) {
            return 0 === (void 0 === a.notifications ? a.d.length : a.notifications.length) ? !0 : !1
        },
        isNewDataValid: function(a) {
            if ("undefined" !== typeof a) return a = void 0 === a.notifications ? a.d : a.notifications, typeof a === l || "object" !== typeof a ? !1 : !0
        },
        updateBucket: function(a) {
            var b;
            void 0 !== a.g && (b = "" + a.g, typeof g[b] === l ? g[b] = {
                c: 1,
                n: 0,
                t: a.ct
            } : (g[b].c++, g[b].t < a.ct && (g[b].t = a.ct)), K(a) && (g[b].n = 1))
        },
        verifyNewData: function(a, b, c, j) {
            var u = !1;
            A = b.badgeCount;
            void 0 !== b.latestNotificationTime && (s = b.latestNotificationTime.value, E = (new Date(b.latestNotificationTime.value)).getTime() / 1E3);
            b = b.notifications;
            b = d.grep(b, function(b) {
                return !F(b) ? (a = d.grep(a, function(a) {
                    if (a.notificationId != b.notificationId) return !0;
                    u = !0;
                    return !1
                }), !1) : typeof c[b.notificationId] !== l ? !1 : !0
            });
            u && j();
            return b
        },
        isDuplicate: function(a, b, c) {
            if (c && void 0 !== c) {
                if (a.notificationId == b.notificationId) return !0
            } else if (a.notificationId == b.notificationId && a.popup == b.popup && p(a) == p(b) && G(a) == G(b)) return !0;
            return !1
        },
        decreseBucket: function(a) {
            void 0 !== a.g && g["" + a.g].c--
        },
        createOverlyHtml: function(a, b, c) {
            var j, d = a.length,
                f, e = y.getCurrentTime(),
                i = "";
            for (f = 0; f < d; f++) j = !1, GH.alertsGroup.isItemGroup(a[f].mdnsName) ? (j = !0, i += b(a[f], 1, e, 1)) : i += b(a[f], 0, e), c(a[f], j);
            return i
        },
        setTmplL10N: function(a) {
            n = a
        },
        getParamMap: function(a,
            b, c) {
            var j = !1,
                d = GH.Util.isTouchDevice(),
                f = "",
                h = "&transactionId",
                c = p(a),
                i = c + "l",
                g = c + "lp",
                w = "",
                s = "ghn-cd",
                k = "MSGM2MMSGHDR" === p(a) ? !0 : !1,
                o, m;
            m = "";
            m = "https:" == document.location.protocol ? !0 : !1;
            var t, r, c = v.isItemGroup(a.mdnsName);
            void 0 !== a.subject.listing && (t = a.subject.listing);
            typeof b === l && (b = y.getCurrentTime());
            k || "" === B(a) ? (o = a.notificationURL, k && (r = a.subject.message, "undefined" === typeof r.listingId ? j = !0 : o = P(m, r.listingId))) : o = P(m, B(a));
            void 0 !== a.buyerNotification && null !== a.buyerNotification && (a.buyerNotification ?
                (void 0 !== n[i + "_B"] && (i += "_B"), void 0 !== n[g + "_B"] && (g += "_B")) : (void 0 !== n[i + "_S"] && (i += "_S"), void 0 !== n[g + "_S"] && (g += "_S")));
            typeof T[p(a)] !== l && !c && (m = O(a), void 0 !== m && (w = y.getTimeDiff(m, b), w === y.tlf.e ? (m = y.tlf.e, w = "<div class='ghn-cd-div'><span  class='" + (s + " ghn-cd-end") + "'>" + m + "</span></div>") : (b = "<span class='ghn-acc-txt'>" + e.messageAlertL10N.timer + "</span>", m = "<span class='ghn-cd-sub0' aria-hidden='true'>" + w.t0 + "</span><span class='ghn-acc-txt ghn-cd-sub1'>" + w.t1 + "</span>", w = "<div class='ghn-cd-div'>" +
                GH.Util.mergeContent(b, {
                    timeleft: "<span  class='" + s + "'>" + m + "</span>"
                }) + "</div>")));
            "ITMSHPD" === p(a) && (h = "&transId");
            c ? (f = v.getContent(a.mdnsName), i = v.getGroupId(a.mdnsName)) : typeof a.content !== l && (f = a.content.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
            return {
                "#L10N_t#": typeof a.shortTitle.content !== l ? a.shortTitle.content.toUpperCase().replace(/</g, "&lt;").replace(/>/g, "&gt;") : "",
                "#LINK#": n[i] || n.iLink,
                "#LINKP#": n[g] || n.iLink,
                "#L10N_s#": f,
                "#L10N_d#": "",
                "#L10N_a#": "",
                "#iLink#": n.iLink,
                "#IC#": "",
                "#TOUCH#": d ?
                    "ghn-touch" : "",
                "#UI#": void 0 !== a.group ? "ghn_" + a.group : "",
                "#TRID#": void 0 !== t && typeof t.transactionId !== l ? h + "=" + a.subject.listing.transactionId : "",
                "#GROUPID#": c ? v.getGroupId(a.mdnsName) : "",
                "#TYPE#": k ? "ghn_msg" : "",
                ghn_msg: j ? "ghn_msg ghn_avt" : "ghn_msg",
                "#NEW#": x[a.status] == x.NEW ? "ghn-new" : "",
                "#ITEMID#": B(a),
                "#UID#": a.notificationId,
                "#DIFF#": w,
                "#NUM#": c ? v.getTotal(a.mdnsName) : "",
                "#imgsrc#": "#src#' alt='",
                "#src#": o,
                "ghn-i": k ? "'ghn-i ghn-i-m'" : "ghn-i",
                "#MSGID#": k ? r.messageId : ""
            }
        },
        isSYMBAnError: C,
        getTotalNumNotifs: function() {
            return A
        },
        getServiceName: function() {
            return "proxy"
        },
        isShowTimeDiff: function() {
            return !1
        },
        isTransactionNotValid: function() {
            return !1
        },
        sendUpdateViewItem: function(a) {
            t(k.alertClickURL + "&op=1&ts=" + s).put();
            a.badgeCount = 0
        },
        sendDeleteItems: function(a, b) {
            var c = void 0;
            d.each(a, function(a, d) {
                !1 !== d ? t(k.alertClickURL + "&op=3&n=" + d + "&ts=" + s).put() : (c = void 0 === c ? a : c + "," + a, d <= J && J--);
                b[a] = d
            });
            void 0 !== c && t(k.alertClickURL + "&op=0&i=" + c + "&ts=" + s).put();
            return b
        },
        conf: e,
        getLastUpdateTimeStamp: function() {
            return E
        },
        sendSetItemNew: function(a) {
            t(k.alertClickURL +
                ("&op=2&ts=" + s + "&i=" + a.notificationId)).put()
        },
        setPopup: function(a, b) {
            a.popup = b;
            return a
        },
        setPopupShow: function(a) {
            a.popup = !1;
            return a
        },
        clickPopUp: function(a, b) {
            b()
        },
        isPopUp: function(a) {
            return a.popup ? !0 : !1
        },
        isBidFlag: function(a) {
            return "BIDITEM" === p(a) ? !0 : !1
        },
        addNewData: function(a, b, c) {
            void 0 !== c && c ? a.push(b) : a.unshift(b)
        },
        handleNewNotif: function(a, b) {
            d.isArray(b) && (b.length = 0);
            D = 0;
            return N(a, {})
        },
        addScrollEvent: function(a, b) {
            e.enablePagination && void 0 !== h && (o = !0, d(a).on("scroll.ghn-pagination", function() {
                var c =
                    d(a),
                    j = c[0].scrollHeight - c.scrollTop() - c.height(),
                    c = Math.floor(100 * (j / c[0].scrollHeight));
                r.getIsLoading() || (void 0 === h ? (d(a).off("scroll.ghn-pagination"), o = !1) : (c <= e.percentPagination || I) && r.getOldNotification(void 0, a, !0, b))
            }))
        },
        getNextURL: function(a) {
            return void 0 === h ? h : a ? h.replace(e.backendDomain, "") : h
        },
        setNextURL: function(a) {
            h = a
        },
        getIsScrollEventAdded: function() {
            return o
        },
        getNexParamsFromURL: M,
        loadMoreNotifs: function(a, b, c, d, e) {
            void 0 !== h ? r.getOldNotification(a, b, !1, c, d, e) : d()
        },
        isHandleNotifNeedUpdated: function() {
            return !0
        },
        setForceScrolling: function(a) {
            I = a
        }
    }
};

function GH_alertData() {}

function GHalertObj(f, Ua, Va) {
    var c = f.jQ,
        O = Va(Ua, c),
        g = GHalertObjData(c, O),
        qa = g.isNewDataValid,
        Fa = g.setNextURL,
        G = g.getNextURL,
        Wa = g.getItemKey,
        x = g.getUniqueId,
        Ga = g.getItemId,
        Ha = g.getItemEndTime,
        Xa = g.isDuplicate,
        ra = g.setItemStatus,
        sa = g.isNewOrPopUp,
        P = g.loadMoreNotifs,
        Ya = g.getItemKeyName,
        Q, B, t, Ia, j = null,
        ca = "",
        da = "",
        C = null,
        R = null,
        Ja = null,
        H = 0,
        Za = O.Const,
        l = g.conf,
        $a = l.GHlocalStorage,
        m = l.undefinedStr,
        n = O.Util,
        p = O.Tracking(l, g),
        ab = O.Storage,
        bb = Za.TITLE,
        ta = l.newalertsasync,
        ea = l.design,
        u = {
            size: 115,
            startPosition: c("#gh").outerHeight(),
            position: c("#gh").outerHeight(),
            count: 0
        },
        S = l.lastMinuteNotif,
        cb = l.countdownType,
        Ka = l.secCountDown,
        T = l.STATUS,
        z = l.messageAlertL10N,
        db = void 0 !== l.tlf.e ? l.tlf : void 0,
        fa = {
            2: f.Util.addSignin(z.loginAlertL10n),
            4: z.zeroAlertsL10n,
            6: z.errorAlertL10n,
            3: z.errorAlertL10n
        },
        I = l.alertURL,
        ua = "0",
        ga = l.refreshAllDataFlag,
        d = l.polling,
        va = d.secWaitActivity,
        ha = {},
        e = null,
        U = [],
        k = null,
        wa = null,
        V = 0,
        r = {},
        ia = {},
        w = !1,
        xa = !1,
        W = !1,
        ja = null,
        s = null,
        D = {},
        J = {},
        La, q = 0,
        X = -1,
        K = -1,
        ya = !1,
        Y = !1,
        ka = !1,
        eb = void 0 !== z.survey ? z.survey : "",
        Ma = f.GHN_SURVEY_HTML ?
        f.Util.addPrefixPoolURL(f.GHN_SURVEY_HTML.replace("#DESIGN#", "2" === ea ? "Priority" : "Recency").replace("#SVTXT#", eb)) : "",
        E = !~~(100 * Math.random()),
        Na = typeof JSON === m ? 0 : l.enableLocalStorage,
        i = $a && n.isLocalStorageSupported && Na ? ab : null,
        Z = !1,
        A = function(a) {
            typeof a !== m ? ha = setTimeout(L, 1E3 * a) : (a = 30, ya || (a = la(), 0 <= a && (ha = setTimeout(L, 1E3 * a))))
        },
        L = function() {
            var a = 103;
            if (w)
                if (Ja()) A(3);
                else {
                    E && (d.zeroFlag ? a = 104 : d.activeFlag ? d.bidFlag && (a = 102) : a = 101, f.userAuth && (a += 10), f.Util.cTImg(f.ghiIMP + a));
                    d.countPolling++;
                    if (0 === d.countPolling % d.intervalRefreshData || ga)
                        if (void 0 === ga || ga) X = -1, ua = "1";
                    a = c.extend(l.ajaxProperties, {
                        success: function(a) {
                            X = g.getLastUpdateTimeStamp();
                            K = n.getCurrentTime();
                            if ("undefined" === typeof a || qa(a)) "undefined" !== typeof a && ("1" === ua ? (M(a), ga || (ua = "0")) : !1 === g.isSYMBAnError(a) && Oa(a)), A()
                        }
                    });
                    c.ajax(I.alertDataURL + "&up=1&ts=" + X, a)
                }
            else A()
        },
        la = function() {
            var a = 30,
                b = typeof d !== m ? d.pollingFrequency : 0;
            b && (a = d.activeFlag ? d.bidFlag ? b.aggressivePolling : d.zeroFlag ? b.zeroNotifPolling : b.defaultPolling :
                b.nonActivePolling);
            return a
        },
        v = function(a, b) {
            var c = 30,
                h;
            i && (a ? (h = K - i.timestamp, c = la(), 0 > h || 0 > K || (0 > c && (c = 0), i.timestamp = K + c), b ? i.setDataLocalStorage(s, e, !0) : i.setDataLocalStorage(s, e, !1)) : i.setDataLocalStorage(s, e, !0))
        },
        ma = function() {
            c(document).one("mousemove.ghn keydown.ghn", function() {
                clearTimeout(d.listenUserActivityTimer);
                clearTimeout(d.waitTimer);
                d.waitTimer = setTimeout(ma, 1E3 * va);
                d.activeFlag || (E && f.Util.cTImg(f.ghiIMP + 86), clearTimeout(ha), L());
                d.activeFlag = !0
            });
            d.listenUserActivityTimer = setTimeout(function() {
                d.activeFlag = !1;
                E && f.Util.cTImg(f.ghiIMP + 85)
            }, 1E3 * d.secListenActivity)
        },
        Pa = function() {
            var a;
            q = 0;
            g.resetBucket();
            for (a in r) typeof r[a] !== m && clearInterval(r[a].id);
            for (a in ia) clearInterval(ia[a]);
            d.waitTimer = setTimeout(ma, 1E3 * va)
        },
        na = function() {
            null !== e && (c.each(e, function(a) {
                sa(e[a]) && (e[a] = ra(e[a], T.READ))
            }), 0 < q && g.sendUpdateViewItem(s), v(!1), q = 0, $(q))
        },
        za = function(a) {
            var b;
            b = n.getCurrentTime();
            var c;
            typeof cb[Wa(a)] !== m && (b = Ha(a) - b, c = 1E3 * (b - Ka), b >= Ka ? setTimeout(function() {
                F(function() {
                    Qa(a)
                })
            }, c) : F(function() {
                Qa(a)
            }))
        },
        Ra = function(a) {
            var b = "data-id",
                o = x(a),
                a = Ga(a);
            C() && (o != a && (b = "data-uid"), c(B + " li[" + b + "=" + o + "] .ghn-cd").addClass("ghn-lm ghn-cd-end").text(n.tlf.e))
        },
        Qa = function(a) {
            var b = x(a),
                o = Ga(a),
                h = Ha(a);
            typeof r["" + b] !== m && (clearInterval(r["" + b].id), delete r["" + b]);
            n.getTimeDiff(h) == n.tlf.e ? Ra(a) : (g.isBidFlag(a) && (d.bidFlag = !0), r["" + b] = {
                id: setInterval(function() {
                    var f = n.getTimeDiff(h),
                        e = "data-id",
                        i = "ghn-lm";
                    C() && (b != o && (e = "data-uid"), f == n.tlf.e ? c(B + " li[" + e + "=" + b + "] .ghn-cd").addClass(i + " ghn-cd-end").text(f) :
                        c(B + " li[" + e + "=" + b + "] .ghn-cd").addClass(i).find(".ghn-cd-sub0").text(f.t0).end().find(".ghn-cd-sub1").text(f.t1));
                    if (f == n.tlf.e)
                        if (Ra(a), clearInterval(r["" + b].id), delete r["" + b], c.isEmptyObject(r)) d.bidFlag = !1;
                        else
                            for (e in d.bidFlag = !1, r)
                                if (g.isBidFlag(r[e].item)) {
                                    d.bidFlag = !0;
                                    break
                                }
                }, 1E3),
                item: a
            })
        },
        Aa = function(a) {
            "true" !== f.GHSW.NEWALERT_POPUPOFF && g.isPopUp(a) && (c(ca + da).length ? setTimeout(function() {
                Aa(a)
            }, 3E3) : (a = g.setPopupShow(a), F(function() {
                var b = a,
                    o = aa(b, 2),
                    o = c("<div class='ghn-pop-wrap'>" +
                        o + "</div>"),
                    h = "#ghn-pop-" + x(b),
                    e = !1,
                    d = !1;
                f.Util.cTImg(f.ghiIMP + 54 + "&_trkparms=" + p.rowTrack("gh1g", b));
                0 < c(h).length && c(h).parent().hide("slow").remove();
                c(ca + da).length ? N() : (c(o).appendTo("body"), c.fn.ghellipsis && c(h + " .ghn-desc-o").ghellipsis({
                    row: 2
                }), c(o).css({
                    top: u.position + "px"
                }).animate({
                    right: "0px"
                }, function() {
                    c(ca + da).length && N()
                }), c(h + " img.ghn-i").each(function(a, b) {
                    n.createImage(b)
                }), b = ra(b, T.NEW), Z || (g.sendSetItemNew(b), Z = !0), c(h + " .ghn-pop-rmv").on("click", function(a) {
                    N(h);
                    f.Util.cTImg(f.ghiIMP +
                        55 + "&_trkparms=" + p.rowTrack("gh1g", b));
                    a.stopPropagation();
                    return !1
                }), c(h + " a.ghn-a-itm").click(function(a) {
                    var o = c(this).attr("href");
                    a.preventDefault();
                    g.clickPopUp(b, function() {
                        f.Util.redirect(o)
                    });
                    setTimeout(function() {
                        f.Util.redirect(o)
                    }, 2E3);
                    f.Util.redirect(o)
                }), c(h).hoverIntent({
                    over: function() {
                        e = !0
                    },
                    out: function() {
                        e = !1;
                        d && N(h)
                    },
                    sensitivity: 1,
                    interval: 150
                }), setTimeout(function() {
                    e || (N(h), f.Util.cTImg(f.ghiIMP + 56 + "&_trkparms=" + p.rowTrack("gh1g", b)));
                    d = !0
                }, 7E3), u.count++, u.position += u.size)
            })))
        },
        N = function(a) {
            typeof a === m ? (c(".ghn-pop-wrap").remove(), u.count = 0, u.position = u.startPosition) : c(a).stop(!0, !0).fadeOut("slow", function() {
                c(this).parent().remove();
                u.count--;
                0 === u.count && (u.position = u.startPosition)
            })
        },
        $ = function(a) {
            var b = z.many,
                o = ("" + a).length;
            c(Q + " i.ghn-num").remove();
            a ? (c(Q + " " + j.ebAClass).append("<i aria-hidden='true' " + (newNotifFlag ? "class='ghn-new ghn-num'" : "class=' ghn-num'") + " id=gh-eb-Alerts-n" + o + ">" + (99 < a ? "99+" : a) + "</i>"), 1 == a && (b = z.one), b = f.Util.mergeContent(b, {
                    itemcount: a
                })) :
                (o = 0, b = z.zero);
            c("#gh-Alerts-i").text(b);
            c(Q).removeClass(" gh-eb-Alerts-tab-0 gh-eb-Alerts-tab-1 gh-eb-Alerts-tab-2 gh-eb-Alerts-tab-3").addClass(" gh-eb-Alerts-tab-" + o)
        },
        oa = function(a, b) {
            c.each(e, function(a, b) {
                p.addTotalByTrackId(b, g.isGroup(b));
                sa(b) && q++;
                za(b);
                Aa(e[a])
            });
            v(!0, !0);
            C() && (!R() && b) && y()
        },
        M = function(a) {
            Y = Z = !1;
            Pa();
            void 0 !== a && void 0 !== a.currentTimeDiff && n.setCurrentTimeDiff(a.currentTimeDiff);
            s = a;
            Fa(void 0);
            q = 0;
            xa = !0;
            if (typeof a === m || void 0 !== a.errorMessage) void 0 !== a && (void 0 !== a.errorMessage &&
                void 0 !== a.errorMessage.error[0]) && (La = a.errorMessage.error[0].errorId), w = !1;
            else if (d.zeroFlag = g.isZeroFlag(a), e = g.processNotifData(a, e, J), e.length <= H && l.group && "function" === typeof P && void 0 !== G(!0) ? Y = !0 : oa(S, !0), v(!0, !0), w = !0, a = g.getTotalNumNotifs(), void 0 !== a && (q = a), newNotifFlag = q, C() && !R() && y(), !p.dataloadSojDropped && (a = "%26gh1g%3dT" + e.length, a += ".N" + q, a += p.getSojItemsStr())) p.dataloadSojDropped = 1, 0.1 >= Math.random() && f.Util.cTImg(f.ghiIMP + 1 + a);
            $(q)
        },
        aa = function(a, b, c, h) {
            var e, d, b = [k.tmpl_i, k.tmpl_g,
                    k.tmpl_p
                ][b],
                b = !h && g.isShowTimeDiff(a) ? b.replace("#H#", k.s0h) : b.replace("#H#", ""),
                b = h ? b.replace("#BMI#", "<div class='ghn-bmi'></div>") : b.replace("#BMI#", ""),
                b = b.replace("#rmv#", z.removeNotif);
            d = g.getParamMap(a, c, h);
            for (e in d) {
                c = d[e];
                typeof c === m && (c = "");
                if ("#LINK#" == e || "#LINKP#" == e) "#LINK#" == e && (!h && typeof k.iLink !== m && g.isTransactionNotValid(a)) && (c = c.replace(/.*(_trksid=.*)/, k.iLink + "&$1")), c += "&_trkparms=" + p.rowTrack("gh1g", a, h);
                b = "#ITEMID#" == e || "#DIFF#" == e || "#UID#" == e ? b.replace(RegExp(e, "g"),
                    c) : b.replace(e, c)
            }
            b = b.replace("=m570", "=p" + f.C.pageId + ".m570");
            "1" === ea && (b = b.replace("#P#", ""));
            return b
        },
        Ba = function(a, b) {
            var o, h, d, i = "",
                l = c.isArray(a) ? !1 : !0,
                m = "%26",
                j = !1,
                k = c(t + " li").length;
            s = a;
            if (l) {
                if (!qa(a)) return;
                a = g.convertItemType(a);
                a = g.verifyNewData(e, a, J, function() {})
            }
            Z = !1;
            h = a.length;
            for (o = 0; o < h; o++) d = !1, newItem = a[o], l && c.each(e, function(a, b) {
                if (d = Xa(b, newItem, !0)) return !1
            }), d || (g.isPopUp(newItem) && (newItem = g.setPopupShow(newItem), g.sendSetItemNew(newItem)), l && g.addNewData(e, newItem, !0),
                !1 !== b && (za(a[o]), i = f.alertsGroup.isItemGroup(newItem.mdnsName) ? i + aa(newItem, 1, void 0, 1) : i + aa(newItem, 0), k++, void 0 === p.notifIdSojDropped[x(newItem)] && (j = !0, m += p.rowTrack("ghn" + k + "r", newItem, !1) + "%26", p.notifIdSojDropped[x(newItem)] = 1)));
            v(!0, !0);
            !1 !== b && (0 < i.length && (c(t).append(i), c.fn.ghellipsis && c(B).is(":visible") && c(".ghn-desc-o").ghellipsis({
                row: 2
            }), j && (f.Util.cTImg(f.ghiIMP + 5 + m), p.overlayLastIdxSojDropped = k)), c(".ghn-i").each(function(a, b) {
                n.createImage(b)
            }))
        },
        y = function(a) {
            var b = "",
                o = "%26",
                h = 0,
                d = B,
                b = 0,
                i = j.overlayTemplate;
            typeof e === m || !1 === w ? 30016 === La ? ba(d, 2) : ba(d, 3) : (b = g.createOverlyHtml(e, aa, function(a, b) {
                h++;
                o += p.rowTrack("ghn" + h + "r", a, b) + "%26";
                p.notifIdSojDropped[x(a)] = 1
            }), a && e.length < H && (b += "<li class='ghn-o-l'><div class='gh-o-l'></div></li>"), 0 >= b.length ? ba(d, 4) : (b = i.replace("#TEXT#", b).replace("#SURVEY#", Ma), c(d).html(b), U.length && Ba(U), c.fn.ghellipsis && c(d).is(":visible") && c(".ghn-desc-o").ghellipsis({
                    row: 2
                }), b = c(t + " li").length, a = b >= H ? j.overlayHeight : b * j.itemHeight, c.fn.scrollLock &&
                c(t).css("height", a + "px").scrollLock("ghn"), c(Ia + " .gh-survey").click(f.Util.surveyClicked), c(".ghn-i").each(function(a, b) {
                    n.createImage(b)
                }), c(t).on("scroll.ghn_soj", function() {
                    f.Util.cTImg(f.ghiIMP + 53 + "%26gh1g%3DTR" + c(t + " li.ghn-li-itm").length);
                    c(t).off("scroll.ghn_soj")
                }), "function" === typeof g.addScrollEvent && g.addScrollEvent(t, Ba), c(d).data("ghi", 5 + o), p.overlaySojDropped || (p.overlaySojDropped = 1, f.Util.cTImg(f.ghiIMP + c(d).data("ghi")))))
        },
        pa = function(a) {
            a <= H && 0 < a && (a *= j.itemHeight, c(t).animate({
                height: a +
                    "px"
            }))
        },
        Oa = function(a, b) {
            var f = !1,
                h, i = !1;
            h = !1;
            var j, k;
            Y = !1;
            s = a;
            if (b || g.isHandleNotifNeedUpdated(a))
                if (Pa(), qa(a))
                    if (g.isZeroData(a) ? (h = !0, b ? v(!1) : v(!0, !1), d.zeroFlag = !0) : d.zeroFlag = !1, a = g.convertItemType(a), b || (Fa(a.next), U = [], void 0 !== G() && (g.getIsScrollEventAdded() || g.addScrollEvent())), void 0 !== g.handleNewNotif && (a = g.handleNewNotif(a, e)), h) C() && !R() && y();
                    else {
                        e = a;
                        e.length <= H && l.group && "function" === typeof P ? P(a, t, void 0, function(a) {
                            void 0 !== a && (e = a);
                            oa(S, !0);
                            void 0 === G(!0) ? void 0 !== s.next && delete s.next :
                                s.next = G(!0);
                            v(!0, !0)
                        }, pa) : (oa(S, !0), v(!0, !0));
                        Z = !1;
                        j = a.length;
                        for (h = 0; h < j; h++) k = e[h], typeof r["" + x(a[h])] !== m && (1 == S && typeof b === m) && clearInterval(r["" + x(a[h])].id), za(e[h]), Aa(e[h]), sa(k) && (i = f = !0, q++), g.updateBucket(k);
                        i && (e = g.addPrToData(e), "2" == ea && (e = g.sortData(e)));
                        C() && !R() && y();
                        b ? v(!1) : v(!0, !0);
                        c(".ghn-i").each(function(a, b) {
                            n.createImage(b)
                        });
                        f && (newNotifFlag = !0);
                        f = g.getTotalNumNotifs();
                        void 0 !== f && (q = f);
                        $(q)
                    }
        },
        Ca = function(a) {
            void 0 === n.tlf && (n.tlf = k.tlf);
            a()
        },
        F = function(a) {
            k ? (void 0 ===
                n.tlf && (n.tlf = k.tlf), a()) : typeof GH_NOTIFICATION_TMPL !== m ? (k = f.Util.addPrefixPoolURL(GH_NOTIFICATION_TMPL), Ca(a)) : wa ? setTimeout(function() {
                F(a)
            }, 999 + ~~(999 * Math.random())) : (wa = 1, c.ajax(I.alertL10nURL, {
                dataType: "jsonp",
                cache: !0,
                jsonp: !1,
                jsonpCallback: "GH_alertTemplate",
                timeout: 4E3,
                success: function(b) {
                    k = f.Util.addPrefixPoolURL(b);
                    g.setTmplL10N(k);
                    Ca(a)
                }
            }))
        },
        ba = function(a, b, e) {
            var h = e,
                g = j.errorTemplate;
            typeof e === m && (e = fa[b], h = g.replace("#TEXT#", e), 2 === b && (h = h.replace("ghn-errb", "ghn-errb ghn-errb-a")));
            c(a).data("ghi", b);
            p.overlaySojDropped || (p.overlaySojDropped = 1, f.Util.cTImg(f.ghiIMP + c(a).data("ghi")));
            h = h.replace("#SURVEY#", Ma);
            c(a).html(h);
            a = c("#ghn-err a");
            a.length ? a.click(function(a) {
                a.stopPropagation()
            }) : c("#ghn-err").attr("tabindex", 0)
        },
        Ea = function(a, b) {
            xa = !1;
            V = 0;
            W = !1;
            b && void 0 !== b && (w = !1, e = null);
            Da(!1, function() {
                $(q);
                y();
                na()
            }, function() {
                var b = B;
                a && ba(b, 6)
            })
        },
        Da = function(a, b, d) {
            var h, i = !1,
                j = function() {
                    W = !0;
                    V = 0;
                    ja = null;
                    typeof d !== m && d()
                },
                k = function(a, b) {
                    W = !1;
                    void 0 !== a && void 0 !== a.ProxyTime &&
                        (a.currentTimeDiff = n.getCurrentTime() - ~~(a.ProxyTime / 1E3));
                    X = g.getLastUpdateTimeStamp();
                    K = n.getCurrentTime();
                    M(a);
                    V = 0;
                    ja = null;
                    b()
                };
            null === ja && (null === e && !w && !xa && !W ? V ? setTimeout(function() {
                Da(a, b)
            }, 999 + ~~(999 * Math.random())) : (V = 1, E && f.Util.cTImg(f.ghiIMP + 81), a ? (window.GH_alertDataNB = function(a) {
                k(a, b);
                i = !0
            }, f.Util.loadScript(I.alertDataURL + "&nb=1"), setTimeout(function() {
                window.GH_alertDataNB = function() {};
                i || j()
            }, 2500)) : (h = c.extend(l.ajaxProperties, {
                    success: function(a) {
                        k(a, b)
                    },
                    error: function() {
                        j()
                    }
                }),
                ja = c.ajax(I.alertDataURL, h))) : W ? typeof d !== m && d() : b())
        },
        Sa = function(a) {
            c.isEmptyObject(D) || (J = g.sendDeleteItems(D, J, e), D = {});
            typeof a !== m && a()
        },
        Ta = function() {
            null === j && (j = this);
            n.tlf = db;
            ca = j.ebLiClass;
            da = j.ebLiActiveClass;
            C = j.doOverlayExist;
            Ja = j.isOverlayOpen;
            R = j.isError;
            H = j.maxItems;
            Q = j.ghEBAlerts_id;
            B = j.overlay_o;
            t = j.itemContainerId;
            Ia = j.surverDivId
        };
    return {
        setDesign: function(a) {
            ea = a
        },
        totalNumNotifs: q,
        getData: function() {
            return e
        },
        setData: function(a) {
            e = a
        },
        setOldData: function(a) {
            U = a
        },
        getOldData: function() {
            return U
        },
        triggerCountdown: ia,
        getTriggerCountdown: function(a) {
            return ia[a]
        },
        isInit: w,
        newNotifFlag: !1,
        setIsInit: function(a) {
            w = a
        },
        getIsInit: function() {
            return w
        },
        getL10N: F,
        setL10N: function(a) {
            k = a
        },
        handleL10N: Ca,
        insertHTMLTemplate: aa,
        itemTemplate: 0,
        popupTemplate: 2,
        itemGroupTemplate: 1,
        L10N: k,
        setL10Nrequested: function(a) {
            wa = a
        },
        getL10NTemplate: function() {
            return k
        },
        getTotalNumNotifs: function() {
            return q
        },
        handleNewNotifItem: Oa,
        handleOldNotifItem: Ba,
        getIsBusyloadMoreNotifs: function() {
            return ka
        },
        getAlreadyRemovedItems: function() {
            return J
        },
        setAlreadyRemovedItems: function(a) {
            J = a
        },
        getRemovedItems: function() {
            return D
        },
        setErrorCode: function(a) {
            fa = a
        },
        getErrorCode: function() {
            return fa
        },
        setAlertURL: function(a) {
            I = a
        },
        getAlertURL: function() {
            return I
        },
        getObjData: function() {
            return g
        },
        getConf: function() {
            return l
        },
        setConf: function(a) {
            l = a
        },
        getRawData: function() {
            return s
        },
        setCollectData: function() {
            E = !0
        },
        collectData: E,
        popUpPosition: u,
        isTabHidden: ya,
        removedItems: D,
        polling: d,
        enableLocalStorage: Na,
        lastUpdateTimeStamp: X,
        undefinedStr: m,
        storage: i,
        conf: l,
        setOverlayHeight: pa,
        clickconfirmButton: function(a, b, g) {
            var d;
            c.each(e, function() {
                if (x(this) == b) return d = this, !1
            });
            typeof d !== m && (D[b] = !1, typeof g !== m && (D[b] = Ya(d), f.alertsGroup.deleteGroupItem(d)), e = c.grep(e, function(a) {
                return typeof D[x(a)] !== m ? !1 : !0
            }), f.Util.cTImg(f.ghiIMP + 115 + "&_trkparms=" + p.rowTrack("gh1g", d)), v(!1), a())
        },
        clickItem: function(a, b) {
            var d = null;
            c.each(e, function() {
                if (x(this) == a) return d = this, !0
            });
            d && (void 0 != T.CLICKED && g.getItemStatus(d) != T.CLICKED) && (d = ra(d, T.CLICKED), v(!1));
            Sa(function() {
                f.Util.redirect(b)
            })
        },
        processNotifData: M,
        visibleTab: function() {
            var a;
            a = la();
            var b;
            ya = !1;
            c(document).unbind(".ghn");
            clearTimeout(d.listenUserActivityTimer);
            clearTimeout(d.waitTimer);
            d.waitTimer = setTimeout(ma, 1E3 * va);
            clearTimeout(ha);
            d.activeFlag ? (null === i ? (0 > a && (a = 0), a = K + a - n.getCurrentTime()) : a = i.timestamp - n.getCurrentTime(), 0 < a ? (i && (b = i.getValue("updatedTimestamp"), b > i.updatedTimestamp && (i.data = i.getValue(), M(i.data), i.updatedTimestamp = b)), A(a)) : L()) : L();
            d.activeFlag = !0
        },
        removePopUp: N,
        removeItem: Sa,
        getDataAndShowOverlay: function() {
            var a =
                function(a) {
                    void 0 !== a && (e = a);
                    oa(S, !0);
                    void 0 === G(!0) ? void 0 !== s.next && delete s.next : s.next = G(!0);
                    ka = !1;
                    v(!0, !0)
                };
            w && !k ? F(function() {
                $(q);
                Y ? (y(!0), ka = !0, P(e, t, void 0, a, pa)) : y();
                na()
            }) : !w && k ? Ea(!0) : !w && !k ? F(function() {
                Ea(!0)
            }) : (Y ? (y(!0), ka = !0, P(e, t, void 0, a, pa)) : y(), na())
        },
        getAlertData: L,
        scheduleNextAlertPoll: A,
        createUserListener: ma,
        init: function() {
            var a = function(a) {
                Da(a, function() {
                    A()
                }, function() {
                    i && i.data ? M(i.data) : C() && y();
                    A()
                })
            };
            j = this;
            Ta();
            GH_SetGHNotifs = function() {};
            c(Q + " .gh-eb-li-a").bind("click.ghn",
                function(a) {
                    f.Util.cTImg(f.ghiIMP + (c(B).is(":hidden") ? 87 : 88));
                    a.preventDefault()
                });
            j.addShowEventOnOverlay();
            if (f.userRecog) {
                typeof i !== m && i && i.init(g.getServiceName());
                if (null === i)
                    if (ta) a(!0);
                    else c(window).on("load.gh", function() {
                        a(!1)
                    });
                else {
                    var b = i.timestamp - n.getCurrentTime();
                    if (0 >= b)
                        if (ta) a(!0);
                        else c(window).on("load.gh", function() {
                            a(!1)
                        });
                    else {
                        E && f.Util.cTImg(f.ghiIMP + 80);
                        M(i.data);
                        var d = n.getCurrentTime();
                        if (ta) {
                            var e = n.getCurrentTime() - d,
                                b = b - e;
                            A(b)
                        } else c(window).on("load.gh", function() {
                            var a =
                                n.getCurrentTime() - d;
                            b -= a;
                            A(b)
                        })
                    }
                }
                j.addEvent()
            }
        },
        initData: Ta,
        addError: ba,
        retryInitData: Ea,
        afterViewItem: na,
        updateNotifOverlay: y,
        getPollingSec: la,
        errorCode: fa,
        notificationText: bb
    }
};

function GHalertBase() {
    var r = null,
        n = null,
        w = GH.Util.getBundle("NotificationsJavascriptContent"),
        t = GHalertObj,
        q = function(l, h) {
            if (null === r) {
                var k = function(a) {
                        return "undefined" !== typeof this[a]
                    }("localStorage") && null !== localStorage ? localStorage : 0,
                    o = GHalertConf(),
                    o = h.extend(o, GHalertServiceConf()),
                    p, n = 0,
                    q = function() {
                        return ~~((new Date).getTime() / 1E3) - n
                    },
                    u = function() {
                        var a = h(this.e);
                        a.css("display", "block");
                        (this.width < this.height || a.hasClass("ghn-i-m") && this.width > this.height) && a.addClass("ghn-i-n")
                    },
                    s;
                var v = window.sessionStorage;
                try {
                    v.setItem("gh_testKey", "1"), v.removeItem("gh_testKey"), s = !0
                } catch (t) {
                    s = !1
                }
                p = {
                    tlf: null,
                    getTimeDiff: function(a, c) {
                        var b, i = p.tlf,
                            j = {},
                            m = "",
                            f = "",
                            e = "",
                            f = "",
                            d, g = o.messageAlertL10N;
                        "undefined" === typeof c && (c = q());
                        b = a - c;
                        if (0 >= b) return i.e;
                        m = Math.floor(b / 86400);
                        d = Math.floor(b % 60);
                        b %= 86400;
                        e = Math.floor(b / 3600);
                        b = Math.floor(b % 3600 / 60);
                        0 < m ? m = m + i.d + (0 < e ? " " + e + i.h : "") : 0 < e ? (m = e + i.h + (0 < b ? " " + b + i.m : ""), f = g.hours, 1 === e && (f = g.hour), f = e + " " + f, 0 < b && (e = g.minutes, 1 === b && (e = g.minute), f =
                            f + " " + b + " " + e)) : 0 < b ? (m = b + i.m + (0 < d ? " " + d + i.s : ""), f = g.minutes, 1 === b && (f = g.minute), f = b + " " + f, 0 < d && (e = g.seconds, 1 === d && (e = g.second), f = f + " " + d + " " + e)) : (m = d + i.s, f = g.seconds, 1 === d && (f = g.second), f = d + " " + f);
                        j.t0 = m;
                        j.t1 = f;
                        return j
                    },
                    sizeCheck: u,
                    sort: function(a, c, b, i) {
                        a = 0 === b ? a - c : c - a;
                        return 0 !== a ? a : i()
                    },
                    setCurrentTimeDiff: function(a) {
                        n = a
                    },
                    createImage: function(a) {
                        var c = new Image;
                        c.e = a;
                        c.onload = u;
                        c.src = h(a).attr("src")
                    },
                    isLocalStorageSupported: s,
                    getCurrentTime: q
                };
                r = {
                    Const: {
                        TITLE: w.alertHeader
                    },
                    Conf: o,
                    Util: p,
                    Tracking: function(a,
                        c) {
                        var b = {},
                            i = a.tracking,
                            j = a.trackingUserType;
                        h.each(i, function(c, a) {
                            b["" + a] = {}
                        });
                        h.each(j, function(c, a) {
                            b["" + a.B] = {};
                            b["" + a.S] = {}
                        });
                        return {
                            totalByType: {},
                            totalNewByType: {},
                            lookup: i,
                            dataloadSojDropped: 0,
                            overlaySojDropped: 0,
                            notifIdSojDropped: {},
                            addTotalByTrackId: function(a, f) {
                                var e;
                                e = c.getItemKey(a);
                                var d = i[e],
                                    g = a.buyerNotification;
                                !f && (void 0 !== g && void 0 !== j[e]) && (g && void 0 !== j[e].B ? d = j[e].B : !g && void 0 !== j[e].S && (d = j[e].S));
                                f && (e = c.getItemGroup(a), d = i[e]);
                                void 0 !== d && (b[d].d = ~~b[d].d + 1, c.isNewOrPopUp(a) &&
                                    (b[d].n = ~~b[d].n + 1))
                            },
                            getSojItemsStr: function() {
                                var a = "";
                                h.each(b, function(c, b) {
                                    var d = b.d,
                                        g = b.n;
                                    if (d || g) a += "%26ghn" + c + "r%3d";
                                    a += g ? "N" + g + "." : "";
                                    a += d ? "T" + d : ""
                                });
                                return a
                            },
                            rowTrack: function(a, b, e) {
                                var d = c.getItemKey(b),
                                    g = c.getItemGroup(b),
                                    h;
                                void 0 !== j && void 0 !== b.buyerNotification && (e || void 0 !== j[d] && (h = b.buyerNotification ? j[d].B : j[d].S));
                                void 0 === h && (h = i[e ? g : d || g]);
                                return a + "%3DI" + c.getItemId(b) + ".N" + h + ".S" + c.getItemStatus(b)
                            }
                        }
                    },
                    Storage: {
                        timestamp: -1,
                        updatedTimestamp: -1,
                        data: null,
                        key: "ghn_data",
                        lData: {},
                        lKey: "ghn_ldata",
                        userID: l,
                        refreshLocalStorage: 30,
                        removeLocalStorage: function() {
                            k.removeItem(this.key)
                        },
                        setDataLocalStorage: function(a, c, b) {
                            try {
                                h.isArray(c) && (void 0 !== a.d ? a.d = c : a.notifications = c, c = a), c.timestamp = this.timestamp, c.userID = this.userID, b && (this.updatedTimestamp = p.getCurrentTime()), c.updatedTimestamp = this.updatedTimestamp, c.groupCurrentCount = GH.alertsGroup.getTotalCurrentTypeCount(), k.setItem(this.key, JSON.stringify(c)), this.data = c, this.timestamp = c.timestamp
                            } catch (i) {}
                        },
                        init: function(a) {
                            var c;
                            this.key = this.key + "_" + a;
                            this.lKey = this.lKey + "_" + a;
                            if (null !== k.getItem(this.key) && (a = JSON.parse(k.getItem(this.key)), a.userID == l && (this.timestamp = a.timestamp, this.data = a, this.updatedTimestamp = a.updatedTimestamp, null !== k.getItem(this.lKey) && (c = JSON.parse(k.getItem(this.lKey)), c.userID == l)))) {
                                var b = p.getCurrentTime();
                                h.each(c.d, function(a) {
                                    b > c.d[a] && delete c.d[a]
                                });
                                this.lData = c.d;
                                this.setlDataLocalStorage()
                            }
                        },
                        setlDataLocalStorage: function() {
                            h.isEmptyObject(this.lData) ? k.removeItem(this.lKey) : k.setItem(this.lKey,
                                JSON.stringify({
                                    userID: l,
                                    d: this.lData
                                }))
                        },
                        getValue: function(a, c) {
                            var b;
                            typeof c === o.undefinedStr && (c = this.key);
                            if (null !== k.getItem(c)) return b = JSON.parse(k.getItem(c)), typeof b[a] !== o.undefinedStr ? b[a] : b
                        }
                    }
                }
            }
            return r
        },
        x = {
            getCore: q,
            getAlertObj: function(l, h) {
                null === n && (n = t(l, h, q));
                return n
            }
        };
    return {
        require: function(l, h) {
            var k = x["get" + l];
            if ("function" === typeof k) return k.apply(this, h)
        }
    }
};

function GHalertDesktop(k, g, h, b) {
    var c = k(b).require("AlertObj", [g, h]),
        j = g.ghEBActive_id,
        k = "." + j,
        i = b("#gh-eb-Alerts"),
        l = !1,
        m = 0;
    onRemoveNotiifcation = function(a, e) {
        var d, f, n;
        if (c.getIsBusyloadMoreNotifs() && 10 >= m) return m++, setTimeout(function() {
            onRemoveNotiifcation(a, e)
        }, 200), a.stopPropagation(), a.preventDefault(), !1;
        d = b("li[data-uid=" + e + "] .ghn-pop-rmv");
        f = b(d).closest("li");
        if ("none" === b(d).find("i").css("display")) return a.stopPropagation(), a.preventDefault(), f.find("a.ghn-a-itm").trigger(a.type),
            !1;
        if (f.find(".ghn-confirm").length) b(d).closest("li").find(".ghn-a-itm").addClass("disable").end().find(".ghn-desc").hide().end().find(".ghn-confirm").show();
        else {
            var e = f.attr("data-uid") || li.attr("data-id"),
                h = f.attr("data-groupid");
            a.preventDefault();
            c.clickconfirmButton(function() {
                var a;
                b(d).is(":focus") && (a = f.next(), a.length ? a.children(":first").focus() : (a = f.prev(), a.length ? a.children(":first").focus() : i.find("a:first").focus()), c.removeItem());
                c.removeItem();
                f.slideUp(function() {
                    b(this).remove();
                    var a = g.alerts.getObjData(),
                        e, d;
                    d = 0;
                    e = b("#ghn-ul li.ghn-li-itm:not([data-groupid])").length;
                    d = g.alertsGroup.getTotalCurrentTypeCount();
                    d = e + d;
                    a.getNextURL();
                    void 0 !== a.getNextURL() && (e = a.getNextURL(), e = e.replace(a.getNexParamsFromURL(e, !0), "offset=" + d + "&limit=20"), a.setNextURL(e), 10 === b("#ghn-ul li.ghn-li-itm").length && (a.setForceScrolling(!0), b("#ghn-ul").trigger("scroll.ghn-pagination"), a.setForceScrolling(!1)));
                    b("#ghn-ul li").length || c.addError("#gh-eb-Alerts-o", 4)
                });
                n = b("#ghn-ul li").length;
                setTimeout(function() {
                    c.setOverlayHeight(n -
                        1)
                }, 100)
            }, e, h);
            a.stopPropagation()
        }
        return !1
    };
    addEventOnOverlay = function() {
        i.delegate("input, .ghn-pop-rmv", "mousedown", function(a) {
            a.stopPropagation();
            a.preventDefault();
            return !1
        });
        i.delegate(" .ghn-pop-rmv", "click touchend mouseenter mouseleave", function(a) {
            var c = b(this).closest("li").attr("data-uid");
            "click" === a.type || "touchend" === a.type ? (m = 0, onRemoveNotiifcation(a, c)) : "mouseenter" === a.type ? b(this).parent().find(".ghn-rmv-popover").show() : b(this).parent().find(".ghn-rmv-popover").hide()
        });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm",
            "touchmove",
            function() {
                l = !0
            });
        i.delegate("#gh-eb-Alerts-o a.ghn-a-itm", "click touchend", function(a) {
            var e = b(this).parent(),
                d = e.attr("data-uid"),
                f = e.attr("data-id");
            void 0 === d && (d = f);
            a.preventDefault();
            if (b(this).hasClass("disable") || l) return l = !1;
            b(this).attr("href", b(this).attr("href") + ".R" + (b("#ghn-ul li.ghn-li-itm").index(e) + 1 || -1) + ".TR" + b("#ghn-ul li.ghn-li-itm").length);
            a = b(this).attr("href");
            c.clickItem(d, a);
            return !1
        })
    };
    addTabEvent = function() {
        g.Util.tabHidden({
            hidden: function() {
                c.isTabHidden = !0
            },
            visible: function() {
                c.visibleTab()
            }
        })
    };
    addEvent = function() {
        addEventOnOverlay();
        addTabEvent()
    };
    var h = {
            addEvent: addEvent
        },
        o = function(a, c) {
            25 < c ? b("#gh-eb-Alerts .gh-control").focus() : setTimeout(function() {
                var d = b("#gh-eb-Alerts-o a:first"),
                    f = b("#ghn-err");
                d.length ? d.focus() : f.length ? b("#ghn-err").focus() : (c++, o(a, c))
            }, a)
        };
    return b.extend(c, {
        addShowEventOnOverlay: function() {
            var a = b("#gh-eb-Alerts");
            b("#gh-eb-Alerts").removeClass("gh-hvr");
            a.hoverIntent({
                over: function() {
                    b("#gh-eb-Alerts .gh-eb-li-a").unbind("click.preventEB_Click");
                    setTimeout(function() {
                        c.preventEB_Click("#gh-eb-Alerts", a)
                    }, 300);
                    c.removePopUp();
                    c.openOverlay(a, "#gh-eb-Alerts-o")
                },
                out: function() {
                    c.removeItem();
                    c.closeOverlay(a)
                }
            });
            c.preventEB_Click("#gh-eb-Alerts", a)
        },
        openOverlay: function(a, e, d) {
            var f = b(e);
            c.doOverlayExist() ? (g.userRecog && (c.isError() && (c.isProcessData && !c.isInit ? c.retryInitData() : c.updateNotifOverlay()), c.afterViewItem()), b(e).is(":hidden") && c.showOverlay()) : (c.createEBO(d), f.data("ghi", 5), g.userRecog ? c.getDataAndShowOverlay() : (typeof c.storage !==
                c.undefinedStr && c.storage && c.storage.removeLocalStorage(), d = "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>".replace("#TEXT#", c.errorCode[2]), d = d.replace("ghn-errb", "ghn-errb ghn-errb-a"), c.addError(e, 2, d)), c.showOverlay());
            b.fn.ghellipsis && b(e).is(":visible") && b(".ghn-desc-o").ghellipsis({
                row: 2
            });
            a.addClass(j)
        },
        closeOverlay: function(a, c) {
            a.removeClass(j);
            g.Util.closeOverlay(b("#gh-eb-Alerts .ghn-b"));
            (void 0 === c || c) && b("#gh-eb-Alerts li[data-id]").removeClass("ghn-new")
        },
        isError: function() {
            return 0 ===
                b("#ghn-err").length ? !1 : !0
        },
        doOverlayExist: function() {
            return 0 === b("#gh-eb-Alerts-o").length || 0 === b("#gh-eb-Alerts-o").children().length ? !1 : !0
        },
        isOverlayOpen: function() {
            return b("#gh-eb-Alerts-o").is(":visible") ? !0 : !1
        },
        dom: h,
        createEBO: function(a) {
            var c = b("#gh-eb-Alerts .gh-sublayer .ghn-b").outerWidth() - 8;
            b("#gh-eb-Alerts-o").length && b("#gh-eb-Alerts-o").remove();
            g.Util.hideOverlays();
            b("#gh-eb-Alerts .gh-sublayer").append("<div id=gh-eb-Alerts-o class='gh-eb-o' style='" + (180 < c ? "min-width:" + c + "px" :
                "") + "'><div class=gh-o-l " + (a ? "tabindex=0" : "") + " >" + g.L10N.msg_loading + "</div></div>");
            a && b("#gh-eb-Alerts-o .gh-o-l").focus()
        },
        preventEB_Click: function(a) {
            var e = b(a);
            b(a + " .gh-eb-li-a").bind("click.preventEB_Click", function(d, f) {
                var h = !0,
                    i = 0;
                d.preventDefault();
                c.doOverlayExist() ? "none" === b(a + "-o").css("display") ? (c.showOverlay(), b(a).addClass("gh-eb-active")) : (b(a).removeClass("gh-eb-active"), g.Util.closeOverlay(b(a + " .ghn-b")), h = !1) : (c.openOverlay(e, "#gh-eb-Alerts-o", f), i = 200);
                f && h && o(i, 0)
            })
        },
        showOverlay: function() {
            g.Util.openOverlay(b("#gh-eb-Alerts .ghn-b"))
        },
        overlayTemplate: "<ul id='ghn-ul'>#TEXT#</ul>#SURVEY#",
        errorTemplate: "<div id='ghn-err'><span class='ghn-errb'>#TEXT#</span></div>",
        overlayHeight: 635,
        maxItems: 6,
        itemHeight: 106,
        ghEBAlerts_id: "#gh-eb-Alerts",
        overlay_o: "#gh-eb-Alerts-o",
        itemContainerId: "#ghn-ul",
        surverDivId: "#ghn-f",
        addEvent: h.addEvent,
        ebAClass: ".gh-eb-li-a",
        ebLiClass: ".gh-eb-li",
        ebLiActiveClass: k,
        ebLiActiveClassName: j
    })
};
(function(b) {
    GH.add("Notifications", function() {
        return {
            init: function() {
                var a = GHalertDesktop(GHalertBase, GH, GH.userID, b);
                a.init();
                GH.alerts = a
            }
        }
    })
})(GH.jQ);
(function(d) {
    GH.add("Cart", function() {
        var c = GH.vCJar,
            a = GH.C.ct,
            e = d("#gh-cart a"),
            f = GH.Util.getBundle("Cart");
        return {
            init: function() {
                var b = this;
                GH.resetCart = function(a) {
                    b.appendCart(~~a)
                };
                c && !GH.disablePDS && (a instanceof Array && (a = a[2] || 0), GH.C.cgi || GH.C["static"] || 203 == GH.C.siteId || typeof oDoc !== GH.undefinedStr ? (a = ~~c.readCookie("dp1", "cq"), b.appendCart(a), 203 == GH.C.siteId && b.appendCart(~~(/^(\d+):?/.exec(c.readCookie("dp1", "exc")) || [0, 0])[1] || a)) : typeof a != GH.undefinedStr && (b.appendCart(~~a), c.writeCookielet("dp1",
                    "cq", ~~a)))
            },
            appendCart: function(b) {
                if (e.length) {
                    d("#gh-cart-n").remove();
                    var a = f[0 == b ? "zero" : 1 == b ? "one" : "many"];
                    a && (a = GH.Util.mergeContent(a, {
                        itemcount: b
                    }), e.attr({
                        title: a,
                        alt: a
                    }));
                    0 < b && d("#gh-cart a").attr("id", "gh-cart-" + (99 < b ? 3 : 9 < b ? 2 : 1)).append("<i id=gh-cart-n aria-hidden=true>" + (99 < b ? "99+" : b) + "</i>")
                }
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/Cart"] = {
    one: "Your shopping cart contains ${itemcount} item",
    many: "Your shopping cart contains ${itemcount} items",
    zero: "Your shopping cart is empty"
};
ebayContent["GlobalHeaderWeb/AutocompleteJavascriptContent"] = {
    acNoSuggestions: "No suggestions",
    acHideSuggestions: "Hide eBay suggestions",
    acShowSuggestions: "Show suggestions",
    acPopularProducts: "Popular Products",
    acSuggCategory: "${suggestion} <u>\u2013</u> <i>${category}</i>",
    acCatalog: '<a href="http://www.ebay.com/ctg/?_pid=#P#&amp;_trksid="></a>',
    acAllCategories: "All Categories",
    acViewAllSaved: '<a href="/myb/SavedSearches">View All Saved<em>&gt;</em></a>',
    acSuggCategoryIn: "${suggestion} <u>in</u> <i>${category}</i>",
    acSuggCategorySaved: "${suggestion} <u>in</u> <i>${category}</i><em>|</em> <span>Saved</span>",
    acSuggSaved: "${suggestion} <span>Saved</span>",
    acSuggCategoryRecent: "${suggestion} <u>in</u> <i>${category}</i><em>|</em> <span>Recent</span>",
    acSuggRecent: "${suggestion} <span>Recent</span>",
    acSuggCategoryInAria: "${suggestion} in ${category}",
    acViewAllSavedAria: "View All Saved",
    acSuggRecentAria: "${suggestion} Recent",
    acSuggSavedAria: "${suggestion} Saved"
};
(function(a) {
    GH.add("SearchBox_AutoComplete", function() {
        var d;
        return {
            acDisabledClass: "gh-acHidden",
            init: function(g) {
                var e = GH.vCJar,
                    h = GH.Util.getBundle("AutocompleteJavascriptContent");
                d = this;
                !g && e && 1 == e.getBitFlag(e.readCookie("dp1", "pbf"), 29) ? (a(GH.ghAC_id).after("<a id=ghAC-show class='gh-spr icas' title='" + h.acShowSuggestions + "' href='#'></a>"), a(GH.componentID).addClass(d.acDisabledClass), a(GH.ghAC_id).attr({
                        autocomplete: "on",
                        "aria-haspopup": "false"
                    }).removeAttr("autocapitalize autocorrect spellcheck"),
                    a("#ghAC-show").bind("click", function(b) {
                        var f, c = GH.vCJar;
                        b.preventDefault();
                        c && (b = c.readCookie("dp1", "pbf"), c.writeCookielet("dp1", "pbf", c.setBitFlag(b, 29, 0)));
                        a(GH.componentID).removeClass(d.acDisabledClass);
                        GH.Util.cTImg("/roverclk/0/0/9?trknvp=sid%3D" + GH.Util.cTId("1315"));
                        GH.SearchBox_AutoComplete.init(!0);
                        a("#ghAC-show").remove();
                        a(GH.ghAC_id).mouseenter();
                        f = function() {
                            typeof a(GH.ghAC_id).autocomplete == GH.functionStr ? a(GH.ghAC_id).autocomplete("search").focus() : setTimeout(f, 300)
                        };
                        setTimeout(f,
                            300)
                    })) : a(GH.ghAC_id).bind("mouseenter focusin keydown", function() {
                    a(GH.ghAC_id).unbind("mouseenter focusin keydown");
                    var b = GH.urls.autocomplete_js;
                    GH.sec && (b = b.replace(/^http:\/\/ir./, "https://secureir."));
                    a.ajax(b, {
                        dataType: "jsonp",
                        cache: !0,
                        jsonp: !1,
                        error: function(a) {
                            200 != a.status && GH.Util.cTImg(GH.ghiIMP + 30)
                        }
                    })
                })
            }
        }
    })
})(GH.jQ);
(function(b) {
    GH.add("TMX", function() {
        var a;
        return {
            execute_immediately: function() {
                a = this;
                a.tmxEnabled = !0;
                if (GH.C.tmx) {
                    var c = function() {
                        GH.userAuth && a.tmxEnabled && (b("body").append('<iframe src="' + GH.C.tmx + '" style="display:none;"></iframe>'), a.tmxEnabled = !1, 0.1 >= Math.random() && GH.Util.cTImg(GH.ghiIMP + 142))
                    };
                    b(document).on("gh_tmx_stop", function() {
                        a.tmxEnabled = !1;
                        b(window).off("load.ght")
                    });
                    b(document).on("gh_tmx_load", function() {
                        a.tmxEnabled = !0;
                        c()
                    });
                    b(window).on("load.ght", function() {
                        c()
                    })
                }
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/PersonalizationJavascriptContent"] = {
    bullseye_url: '<a href="http://gha.ebay.com/nproxy/notification/v1/bullseye"></a>'
};
(function(b) {
    GH.add("PERSONALIZATION", function() {
        return {
            execute_immediately: function() {
                GH.disablePDS = !0;
                var d = GH.Util.getBundle("PersonalizationJavascriptContent"),
                    c = GH.Util.getSecURL(GH.Util.getHref(d.bullseye_url));
                if (b && b.ajax) b(window).on("load.gh", function() {
                    window.setTimeout(function() {
                        b.ajax(c, {
                            dataType: "jsonp",
                            jsonpCallback: "GH_personalizedData"
                        })
                    }, 1)
                });
                else window.addEventListener("load", function() {
                    window.setTimeout(function() {
                            var a = document.createElement("script");
                            a.src = c;
                            a.async = !0;
                            document.body.appendChild(a)
                        },
                        1)
                });
                window.GH_personalizedData = function(a) {
                    a && a.shopping_cart_size && 0 < a.shopping_cart_size && GH.resetCart(a.shopping_cart_size)
                }
            }
        }
    })
})(GH.jQ);
GH.getWidgetDeliveryPlatform = function() {
    return {
        base_path: "/gh",
        new_buyer_acquistion: "/useracquisition"
    }
};
(function() {
    GH.add("WIDGET_DELIVERY_PLATFORM", function() {
        function a() {
            if (b) {
                var a = document.createElement("script");
                a.src = b;
                a.async = !0;
                document.body.appendChild(a)
            }
        }
        var b = GH.urls.widget_delivery_platform && GH.Util.getSecURL(GH.urls.widget_delivery_platform);
        return {
            execute_immediately: function() {
                window.addEventListener("load", function() {
                    b && ("requestIdleCallback" in window ? window.requestIdleCallback(a) : "requestAnimationFrame" in window ? window.requestAnimationFrame(a) : a())
                })
            }
        }
    })
})(GH.jQ);
(function(j) {
    GH.add("ScreenDetail", function() {
        var c;
        return {
            init: function() {
                c = this;
                c.getScreenDetail(c.getConfig())
            },
            getConfig: function() {
                var a = document.getElementById("gh-screen"),
                    a = null != a ? c.getJSON(a.innerHTML) : {},
                    d = {};
                j.extend(d, {
                    currentResValue: {
                        maxWidth: -1,
                        minWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    },
                    resRange: [{
                        minWidth: -1,
                        maxWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    }, {
                        minWidth: 0,
                        maxWidth: 1024,
                        name: "RES_1024",
                        value: 1,
                        id: 1,
                        integer: 1
                    }, {
                        minWidth: 1025,
                        maxWidth: 1152,
                        name: "RES_1152",
                        value: 2,
                        id: 2,
                        integer: 2
                    }, {
                        minWidth: 1153,
                        maxWidth: 1280,
                        name: "RES_1280",
                        value: 3,
                        id: 3,
                        integer: 3
                    }, {
                        minWidth: 1281,
                        maxWidth: 1366,
                        name: "RES_1366",
                        value: 4,
                        id: 4,
                        integer: 4
                    }, {
                        minWidth: 1367,
                        maxWidth: 1440,
                        name: "RES_1440",
                        value: 5,
                        id: 5,
                        integer: 5
                    }, {
                        minWidth: 1441,
                        maxWidth: 1680,
                        name: "RES_1680",
                        value: 6,
                        id: 6,
                        integer: 6
                    }, {
                        minWidth: 1681,
                        maxWidth: 2147483647,
                        name: "RES_MAX",
                        value: 7,
                        id: 7,
                        integer: 7
                    }],
                    resBits: [85, 86, 87],
                    cookieName: "dp1",
                    cookieletName: "pbf",
                    currentViewportValue: {
                        maxWidth: -1,
                        minWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    },
                    viewportBits: [69, 70, 71],
                    viewportRange: [{
                        minWidth: -1,
                        maxWidth: -1,
                        name: "DEFAULT",
                        value: 0,
                        id: 0,
                        integer: 0
                    }, {
                        minWidth: 0,
                        maxWidth: 1020,
                        name: "VIEWPORT_1",
                        value: 1,
                        id: 1,
                        integer: 1
                    }, {
                        minWidth: 1021,
                        maxWidth: 1024,
                        name: "VIEWPORT_2",
                        value: 2,
                        id: 2,
                        integer: 2
                    }, {
                        minWidth: 1025,
                        maxWidth: 1148,
                        name: "VIEWPORT_3",
                        value: 3,
                        id: 3,
                        integer: 3
                    }, {
                        minWidth: 1149,
                        maxWidth: 1152,
                        name: "VIEWPORT_4",
                        value: 4,
                        id: 4,
                        integer: 4
                    }, {
                        minWidth: 1153,
                        maxWidth: 1276,
                        name: "VIEWPORT_5",
                        value: 5,
                        id: 5,
                        integer: 5
                    }, {
                        minWidth: 1277,
                        maxWidth: 1280,
                        name: "VIEWPORT_6",
                        value: 6,
                        id: 6,
                        integer: 6
                    }, {
                        minWidth: 1281,
                        maxWidth: 2147483647,
                        name: "VIEWPORT_7",
                        value: 7,
                        id: 7,
                        integer: 7
                    }]
                }, a);
                return d
            },
            getScreenDetail: function(a) {
                c.screenResolution(a.currentResValue, a.resRange, a.resBits, a.cookieName, a.cookieletName);
                c.browserViewPort(a.currentViewportValue, a.viewportRange, a.viewportBits, a.cookieName, a.cookieletName)
            },
            screenResolution: function(a, d, i, e, f) {
                var b = 0,
                    g = screen.width;
                0 < g && (b = c.getRangeValue(g, d));
                a && (b !== a.id && i) && c.setCookie(b, i, e, f)
            },
            browserViewPort: function(a, d, i, e, f) {
                var b,
                    g = screen.width,
                    h = 0;
                document && document.documentElement && (b = parseInt(document.documentElement.clientWidth), 0 < b && (b += c.scrollBarWidth(), b > g && (b = g), h = c.getRangeValue(b, d, e, f)));
                a && (h != a.id && i) && c.setCookie(h, i, e, f)
            },
            getRangeValue: function(a, d) {
                var c = 0;
                if (d)
                    for (var e = d.length - 1; 0 <= e; e--)
                        if (a >= d[e].minWidth && a <= d[e].maxWidth) {
                            c = d[e].id;
                            break
                        } return c
            },
            scrollBarWidth: function() {
                return GH && GH.Util && GH.Util.browser && GH.Util.browser.msie && 9 > GH.Util.browser.version ? 21 : 17
            },
            setCookie: function(a, d, c, e) {
                var f, b,
                    g;
                if (GH && GH.vCJar) {
                    f = GH.vCJar;
                    b = f.readCookie(c, e);
                    b = b.match(/(#)?([0-9a-f]*)/i);
                    b = "#".concat(b[1] ? b[2] : parseInt(b[2] ? b[2] : "0", 10).toString(16));
                    g = d.length;
                    for (var h = 0; h < g; h++, a >>= 1) b = f.setBitFlag(b, d[h], a & 1);
                    f.writeCookielet(c, e, b)
                }
            },
            getJSON: function(a) {
                try {
                    return JSON.parse(a)
                } catch (c) {
                    return {}
                }
            }
        }
    })
})(GH.jQ);
ebayContent["GlobalHeaderWeb/BackToTopJavascriptContent"] = {
    arrowImage: '<img title="Scroll to top" src="http://ir.ebaystatic.com/pictures/aw/pics/globalheader/btt.png" alt="Scroll to top" border="0" height="76" width="33" _id="gh-bti"/>'
};
(function(c) {
    GH.add("BackToTop", function() {
        var a, e = GH.Util.getBundle("BackToTopJavascriptContent");
        return {
            bttWindow: GH.jQ(window),
            init: function() {
                a = this;
                GH.jQ(".sp-tp").remove();
                a.bttWindow.on("scroll.gh", a.rerun)
            },
            rerun: function() {
                a.bttWindow.off("scroll.gh", a.rerun);
                window.setTimeout(function() {
                        var b = a.bttWindow.scrollTop(),
                            d = 350 < b;
                        if (void 0 !== GH.previousTopPosition && GH.previousTopPosition === b) {
                            if (!GH.$ghbt) {
                                GH.$ghbt = GH.jQ("<button/>").attr({
                                    id: "gh-bt",
                                    "class": "gh-hide-if-nocss"
                                });
                                var f = c(GH.Util.getSecURL(e.arrowImage,
                                    !0, !0)).attr("id", "gh-bti");
                                GH.$ghbt.append(f);
                                GH.jQ("body").append(GH.$ghbt);
                                GH.$ghbt.click(function(a) {
                                    a.preventDefault();
                                    GH.jQ("body,html").animate({
                                        scrollTop: 0
                                    }, /iPad/i.test(GH.userAgent) ? 0 : 150, function() {
                                        c("#gh-gb").focus()
                                    });
                                    GH.Util.cTImg(GH.ghiIMP + 43)
                                })
                            }
                            GH.$ghbt.animate({
                                right: d ? -1 : -1 * GH.$ghbt.outerWidth()
                            }, d ? 500 : 50, function() {
                                if (b === a.bttWindow.scrollTop()) a.bttWindow.on("scroll.gh", a.rerun);
                                else GH.previousTopPosition = a.bttWindow.scrollTop(), a.rerun()
                            })
                        } else GH.previousTopPosition = b, a.rerun()
                    },
                    100)
            }
        }
    })
})(GH.jQ);