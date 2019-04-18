var GidgitsJS;
! function(l) {
    var e = function() {
        function e() {
            this.registry = [], this.zones = [], this.zones = [], this.activateZone(document.documentElement)
        }
        return e.prototype.appendStyles = function(i, e) {
            if (-1 === e.styledElements.indexOf(i.name)) {
                var a = e.styleTag,
                    n = l.utils.platform();
                i.styles.forEach(function(e) {
                    if ("string" == typeof e) a.appendChild(document.createTextNode(i.selector + " " + e));
                    else if ((!e.includePlatform || -1 < e.includePlatform.indexOf(n)) && (!e.excludePlatform || e.excludePlatform.indexOf(n) < 0) && (!e.nightmode || e.nightmode && l.utils.isNative())) {
                        var t = i.selector + " ";
                        e.global && (t = ""), e.nightmode && (t = "body.theme-dark "), e.breakpoint && a.appendChild(document.createTextNode("@media " + e.breakpoint + " {")), e.rules.forEach(function(e) {
                            a.appendChild(document.createTextNode(t + e))
                        }), e.breakpoint && a.appendChild(document.createTextNode("}"))
                    }
                }), e.styledElements.push(i.name)
            }
        }, e.prototype.bootstrapWidgit = function(t, e) {
            var i = this;
            if (t.enabled) {
                var a = this.getWidgitElements(t, e.root),
                    n = a.filter(function(e) {
                        return !e.hasAttribute("gidgit-status")
                    });
                0 < n.length && a.length === n.length && this.appendStyles(t, e), n.map(function(e) {
                    i.initElement(e, t)
                })
            }
        }, e.prototype.getWidgitElements = function(e, t) {
            var i = t.querySelectorAll(e.selector);
            return 0 < i.length ? Array.prototype.slice.call(i) : []
        }, e.prototype.initElement = function(i, t) {
            i.setAttribute("gidgit-status", "bootstrapping");
            try {
                t.construct(i, function(e, t) {
                    t || !e ? (i.style.display = "none", i.dataset.error = t) : e instanceof Node ? (i.innerHTML = "", i.appendChild(e)) : i.innerHTML = e, i.setAttribute("gidgit-status", "loaded")
                })
            } catch (e) {
                console && console.log("GidgitsJS: " + t.name + " failed to construct")
            }
        }, e.prototype.activateZone = function(e) {
            var t = e.querySelector("#gidgitStyles");
            if (!t) {
                (t = document.createElement("style")).type = "text/css", t.id = "gidgitStyles";
                var i = e.querySelector("head") || e.querySelector("body");
                i ? i.appendChild(t) : e.appendChild(t)
            }
            var a = {
                root: e,
                styledElements: [],
                styleTag: t
            };
            this.zones.push(a)
        }, e.prototype.deactivateZone = function(e) {
            for (var t = this.zones.length, i = 0; i < t; i++) this.zones[i].root === e && delete this.zones[i]
        }, e.prototype.refresh = function(i) {
            var a = this;
            this.registry.forEach(function(t) {
                a.zones.forEach(function(e) {
                    i && i !== e.root || a.bootstrapWidgit(t, e)
                })
            })
        }, e.prototype.registerWidgit = function(t) {
            var i = this;
            0 === this.registry.filter(function(e) {
                return e.selector === t.selector
            }).length && (this.registry.push(t), this.zones.forEach(function(e) {
                i.bootstrapWidgit(t, e)
            }))
        }, e
    }();
    if (l.Main = e, l.utils = {
            jsonp: function(e, t, i) {
                var a = !(window[t] = function(e) {
                        try {
                            delete window[t]
                        } catch (e) {}
                        window[t] = null, i(e)
                    }),
                    n = document.createElement("script");
                n.src = e, n.async = !0, n.onload = function() {
                    a || (a = !0, n.onload = null, n && n.parentNode && n.parentNode.removeChild(n))
                }, document.getElementsByTagName("head")[0].appendChild(n)
            },
            isMobile: function() {
                return !!window.hasOwnProperty("siteInfo")
            },
            isNative: function() {
                return !!window.hasOwnProperty("GD")
            },
            isNightMode: function() {
                return document.body.classList.contains("theme-dark")
            },
            platform: function() {
                return l.utils.isNative() && window.hasOwnProperty("GD") ? window.GD.platform : l.utils.isMobile() ? "mobileweb" : "desktop"
            },
            convertNodeListToArray: function(e) {
                return 0 < e.length ? Array.prototype.slice.call(e) : []
            },
            convertHTMLCollectionToArray: function(e) {
                return 0 < e.length ? Array.prototype.slice.call(e) : []
            },
            legacy: {
                onRightRail: function(e) {
                    var t = !1;
                    return document.getElementsByClassName("secondary").length && document.getElementsByClassName("secondary")[0].contains(e) && (t = !0), t
                }
            }
        }, l.refresh = function(e) {
            l.instance.refresh(e)
        }, l.registerWidgit = function(e) {
            l.instance.registerWidgit(e)
        }, l.activateZone = function(e) {
            l.instance.activateZone(e)
        }, l.deactivateZone = function(e) {
            l.instance.deactivateZone(e)
        }, !l.instance)
        if (l.instance = new e, "function" == typeof window.Event) window.dispatchEvent(new Event("gidgits-ready"));
        else {
            var t = document.createEvent("CustomEvent");
            t.initCustomEvent("gidgits-ready", !0, !1, {}), window.dispatchEvent(t)
        }
}(GidgitsJS || (GidgitsJS = {})), GidgitsJS.registerWidgit({
    name: "contentpackage",
    selector: "[gidgit-contentpackage]",
    enabled: !0,
    styles: [{
        rules: [".story-line-container{font-family: Unify Sans !important; text-align: left;}", ".story-line-title-bar{background-color: #eee; border-left: 4px solid #009bff; font-weight: bold; padding: 6px 12px;}", ".story-line-list-decorator{color: #009bff; font-size: 12px; text-transform: uppercase;}", ".story-line-list-title{font-size: 16px; color: #404040; font-weight: 600;}", ".story-line-content{border: solid 1px #e6e6e6; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; flex-flow: column nowrap; padding: 12px;}", ".story-line-links{flex-basis: auto; order: 2; width: 100%;}", ".story-line-promo-image{flex-basis: auto; flex-shrink: 0; margin: -12px -12px 0 -12px; order: 1;}", ".story-line-promo-image img, .story-line-promo-image picture{width: 100%;}", ".story-line-singleton {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; margin-bottom: 12px;}", ".story-line-link-wrapper{margin-right: 33px;}", ".story-line-story{box-shadow: none !important; color: #404040 !important; display: inline !important; font-family: Unify Sans !important; font-size: 14px !important; line-height: 1.20 !important; text-shadow: none !important;}", ".story-line-story:hover {box-shadow: inset 0 -1px #fff, inset 0 -3px #009bff !important; text-shadow:  0.063em 0.063em #fff, -0.063em 0.063em #fff, 0.125em 0 #fff, -0.125em 0 #fff !important;}", "svg{display: block; fill: #404040; flex-shrink: 0; height: 16px; margin: 4px 5px 0 0; width: 16px;}"]
    }, {
        breakpoint: "all and (min-width: 768px)",
        rules: [".story-line-content{flex-flow: row nowrap;}", ".story-line-links{flex-basis: auto; order: 1; width: 66%;}", ".story-line-promo-image{flex-basis: auto; order: 2; margin: 0; width: 33%;}"]
    }, {
        nightmode: !0,
        rules: [".story-line-title-bar{background-color: #000;}", ".story-line-content{border: solid 1px #000}", ".story-line-story{color:#fff !important;}", ".story-line-list-title{color:#fff;}", "svg{fill: #fff;}"]
    }, {
        includePlatform: ["android", "ios", "android-embed", "ios-embed"],
        rules: [".story-line-container{padding: 0 1.5625rem;}"]
    }],
    construct: function(e, t) {
        var i = e.dataset.assetId,
            a = e.dataset.sitecode,
            n = document.createElement("DIV");
        n.classList.add("content-package-wrap");
        var l = "gidgits",
            d = "https://api.gannett-cdn.com/content-service/content/contentpackage/embed/" + i + "?apiKey=57646bc6bca4811fea0000011378af619f284d8f5119e496a0a016a9&site-code=" + a + "&callback=" + l;
        GidgitsJS.utils.jsonp(d, l, function(e) {
            n.innerHTML = e.HTML
        }), t(n)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-balance-of-power-header",
    selector: "[gidgit-elections-BOP-header]",
    enabled: !0,
    styles: ["{width:100%}", ".wrapper{padding: 20px 15px 15px 15px; position: relative;}", ".title{text-transform: capitalize; font-size: 16px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333;}", ".subtitle{font-family: Helvetica; font-size: 11px; line-height: 1.6; color: #999; margin-top: 5px;}"],
    construct: function(e, t) {
        var i = document.createElement("div");
        i.classList.add("wrapper");
        var a = document.createElement("div");
        a.classList.add("title"), a.innerHTML = "2016 NATIONAL ELECTIONS OUTLOOK", i.appendChild(a);
        var n = document.createElement("div");
        n.classList.add("subtitle"), n.innerHTML = "via Rothenberg & Gonzales", i.appendChild(n), t(i)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-balance-of-power",
    selector: "[gidgit-elections-BOP]",
    enabled: !0,
    styles: ["{width:100%}", ".wrapper{padding: 20px 15px 20px 15px; position: relative;}", ".headerwrap { display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".title{ flex: 0 1 50%; text-transform: capitalize; text-align: left; font-size: 16px; font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333;}", ".attribution{font-weight:bold;}", ".subtitle{font-family: Helvetica; font-size: 11px; line-height: 1.6; color: #999; margin-top: 5px; margin-bottom: 20px; text-align:left}", ".linkwrap { flex: 0 1 50%; text-align:right; }", ".full-outlook-link{ font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #009bff; }", ".flex-container{display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".result-bar{height: 20px; margin-right: 1px;}", ".no-dem{background-color: #1a649c;}", ".safe-dem{background-color: #1a649c;}", ".favored-dem{background-color: #2c95d1;}", ".lean-dem{background-color: #ccedfc;}", ".tossup{background-color: #d8c797;}", ".lean-rep{background-color: #f0a3a3;}", ".favored-rep{background-color: #e65563;}", ".safe-rep{background-color: #b83939;}", ".no-rep{background-color: #b83939;}", ".triangle-down{border-top: 5px solid #d1d1d1; border-left: 5px solid transparent; border-right: 5px solid transparent; display: inline-block; margin-bottom: 2px;}", ".triangle-up{border-bottom: 5px solid #d1d1d1; border-left: 5px solid transparent; border-right: 5px solid transparent; display: inline-block; margin-bottom: 6px; margin-top: 2px;}", ".triangle-container{text-align: center; line-height: 5px;}", ".democrat{text-align: left; color: #1a649c;}", ".republican{text-align: right;  color: #b71c1c;}", ".tossup-label{text-align: center; color: #555;}", ".label{font-size: 13px; font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; line-height: 18px;}", ".number{font-size: 18px;}", ".footnote{text-align: left; font-family: Helvetica; font-size: 11px; line-height: 1.4; color: #999999; margin-top: 15px;}", ".hide{visibility: hidden;}", {
        nightmode: !0,
        rules: [".title{text-transform: capitalize; font-size: 16px; font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color:#fff;}", ".tossup-label{text-align: center; color: #d8c797;}", ".footnote{font-family: Helvetica; font-size: 11px; line-height: 1.4; color: #b2b2b2; margin-top: 15px;}"]
    }],
    construct: function(e, t) {
        var i = GidgitsJS.utils.isMobile(),
            a = GidgitsJS.utils.isNative(),
            n = GidgitsJS.utils.platform(),
            l = document.createElement("div");
        l.classList.add("wrapper");
        var d = [{
                label: "no-dem",
                count: parseInt(e.dataset.noElectionDem)
            }, {
                label: "safe-dem",
                count: parseInt(e.dataset.safeDem)
            }, {
                label: "favored-dem",
                count: parseInt(e.dataset.favoredDem)
            }, {
                label: "lean-dem",
                count: parseInt(e.dataset.leanDem)
            }, {
                label: "tossup",
                count: parseInt(e.dataset.tossup)
            }, {
                label: "lean-rep",
                count: parseInt(e.dataset.leanRep)
            }, {
                label: "favored-rep",
                count: parseInt(e.dataset.favoredRep)
            }, {
                label: "safe-rep",
                count: parseInt(e.dataset.safeRep)
            }, {
                label: "no-rep",
                count: parseInt(e.dataset.noElectionRep)
            }],
            o = parseInt(e.dataset.totalDem),
            s = parseInt(e.dataset.totalRep),
            r = parseInt(e.dataset.total),
            p = document.createElement("div");
        p.classList.add("headerwrap");
        var c = !1;
        "desktop" === n && e.parentElement.classList.contains("js-oembed") && (c = !0), i && e.parentElement.parentElement.classList.contains("oembed") && (c = !0), ("android-oembed" === n || "ios-oembed" === n || a) && (c = !0);
        var m = document.createElement("div");
        m.classList.add("title"), m.innerHTML = e.dataset.position + " Race Ratings", p.appendChild(m);
        var u = document.createElement("div");
        if (u.classList.add("subtitle"), c) {
            var g = new Date(e.dataset.updated),
                h = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][g.getMonth()] + " " + g.getDate() + ", " + g.getFullYear();
            u.innerHTML = '<span class="attribution">via Rothenberg & Gonzales | </span> updated ' + h
        }
        var f = document.createElement("div");
        f.classList.add("linkwrap");
        var b = document.createElement("a");
        b.classList.add("full-outlook-link"), b.innerHTML = "View Outlook";
        var x = "https://elections16." + location.host.split(".").slice(-2).join(".") + "/outlook/" + e.dataset.position;
        a && (x = "https://elections16.usatoday.com/outlook/" + e.dataset.position), b.href = x, f.appendChild(b), p.appendChild(f), l.appendChild(p), l.appendChild(u);
        var v = document.createElement("div");
        v.classList.add("triangle-container");
        var y = document.createElement("div");
        y.classList.add("triangle-down"), v.appendChild(y), l.appendChild(v);
        var w = document.createElement("div");
        w.classList.add("flex-container");
        for (var L = 0; L < d.length; L++) {
            var k = d[L];
            if (0 !== k.count) {
                var E = document.createElement("div");
                E.style.flexBasis = (k.count / r * 100).toFixed(2) + "%", E.classList.add(k.label), E.classList.add("result-bar"), w.appendChild(E)
            }
        }
        l.appendChild(w);
        var T = document.createElement("div");
        T.classList.add("triangle-container");
        var C = document.createElement("div");
        C.classList.add("triangle-up"), T.appendChild(C), l.appendChild(T);
        var M = document.createElement("div");
        M.classList.add("flex-container");
        var S = document.createElement("div");
        S.classList.add("label"), S.classList.add("democrat"), S.style.flexBasis = Math.floor(o / r * 100) + "%", S.innerHTML += "<div class=number>" + o + "</div> Total D", M.appendChild(S);
        var H = document.createElement("div");
        H.classList.add("label"), H.classList.add("tossup-label"), H.style.flexBasis = Math.floor(d[4].count / r * 100) + "%", H.innerHTML += "<div class=number>" + d[4].count + "</div> Tossup", M.appendChild(H);
        var z = document.createElement("div");
        if (z.classList.add("label"), z.classList.add("republican"), z.style.flexBasis = Math.floor(s / r * 100) + "%", z.innerHTML += "<div class=number>" + s + "</div> Total R", M.appendChild(z), l.appendChild(M), "senate" === e.dataset.position) z.innerHTML += "*", S.innerHTML += "*", (F = document.createElement("div")).innerHTML = "* The number of total seats includes those whose seats are not up for re-election", F.classList.add("footnote"), l.appendChild(F);
        else if ("presidential" === e.dataset.position || "president" === e.dataset.position) {
            var F;
            z.innerHTML += "*", S.innerHTML += "*", (F = document.createElement("div")).innerHTML = "* Total reflects Electoral Votes", F.classList.add("footnote"), l.appendChild(F)
        }
        "governor" === e.dataset.position && (y.classList.add("hide"), C.classList.add("hide")), t(l)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-gen-balance-of-power",
    selector: "[gidgit-gen-elections-BOP]",
    enabled: !0,
    styles: ["{width:100%}", ".wrapper{padding: 20px 15px 20px 15px; position: relative;}", ".headerwrap { display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".title{ flex: 0 1 50%; text-transform: uppercase; text-align: left; font-size: 16px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333;}", ".attribution{font-weight:bold;}", ".subtitle{font-family: Helvetica, sans-serif; font-size: 12px; line-height: 1.6; color: #999; margin-top: 5px; margin-bottom: 20px; text-align:left}", ".linkwrap { flex: 0 1 50%; text-align:right; }", ".full-outlook-link{ font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #009bff; text-decoration: none;}", ".bop-container{white-space: nowrap; background-color: #e6e6e6; height: 20px;}", ".result-bar{height: 20px; display: inline-block; border-right: 0.5px solid #fff; box-sizing: border-box; transition: width 1s; }", ".current-dem{background: -webkit-repeating-linear-gradient(45deg, #1a649c, #1a649c 2px, #1e3162 4px); background: -moz-repeating-linear-gradient(45deg, #1a649c, #1a649c 2px, #1e3162 4px); background: -o-repeating-linear-gradient(45deg, #1a649c, #1a649c 2px, #1e3162 4px); background: repeating-linear-gradient(45deg, #1a649c, #1a649c 2px, #1e3162 4px); background-color: #1a649c; float: left}", ".won-dem{background-color: #1a649c; float: left;}", ".current-rep{background: -webkit-repeating-linear-gradient(45deg, #b83939, #b83939 2px, #8e2e2e 4px); background: -moz-repeating-linear-gradient(45deg, #b83939, #b83939 2px, #8e2e2e 4px); background: -o-repeating-linear-gradient(45deg, #b83939, #b83939 2px, #8e2e2e 4px); background: repeating-linear-gradient(45deg, #b83939, #b83939 2px, #8e2e2e 4px); background-color: #b83939; float: right;}", ".won-rep{background-color: #b83939; float: right;}", ".current-ind{background: -webkit-repeating-linear-gradient(45deg, #65388c, #65388c 2px, #291748 4px); background: -moz-repeating-linear-gradient(45deg, #65388c, #65388c 2px, #291748 4px); background: -o-repeating-linear-gradient(45deg, #65388c, #65388c 2px, #291748 4px); background: repeating-linear-gradient(45deg, #65388c, #65388c 2px, #291748 4px); background-color: #65388c; float: left;}", ".won-ind{background-color: #65388c; float: left;}", ".triangle-down{border-top: 5px solid #d1d1d1; border-left: 5px solid transparent; border-right: 5px solid transparent; display: inline-block; margin-bottom: 2px;}", ".triangle-up{border-bottom: 5px solid #d1d1d1; border-left: 5px solid transparent; border-right: 5px solid transparent; display: inline-block; margin-bottom: 3px; margin-top: 2px;}", ".triangle-container{text-align: center; line-height: 5px;}", ".democrat{text-align: left; color: #1a649c;}", ".republican{text-align: right;  color: #b71c1c;}", ".control{text-align: center;font-family: Helvetica, sans-serif; font-size: 12px; font-weight: bold; color: #666666; text-transform: uppercase; width: 33.3%; display: inline-block; vertical-align: top;}", ".label{font-size: 13px; font-family:'Futura Today DemiBold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; line-height: 18px; width: 33.3%; display: inline-block; vertical-align: top;}", ".number{font-size: 18px;}", ".footnote{text-align: left; font-family: Helvetica, sans-serif; font-size: 11px; line-height: 1.4; color: #999999; margin-top: 15px;}", ".hide{ display: none; }", ".checkmark{height: 12px; width: 12px; display: inline-block; position: relative; top: 1px; background-image: url(https://ssl.gannett-cdn.com/appservices/elections-2016/optimized/icon-checkmark-winner.svg); background-size: contain;}", ".popular-votes{font-family: Helvetica, sans-serif; font-size: 12px; color: #666666;}", {
        nightmode: !0,
        rules: [".title{text-transform: capitalize; font-size: 16px; font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color:#fff;}", ".footnote{font-family: Helvetica, sans-serif; font-size: 11px; line-height: 1.4; color: #b2b2b2; margin-top: 15px;}"]
    }, {
        includePlatform: ["mobileweb"],
        rules: [".wrapper{padding: 0;}", ".control{font-size: 11px;}", ".full-outlook-link{font-size: 13px; letter-spacing: 0.6px;}", ".subtitle{margin-bottom: 15px;}", ".the-line{width: calc(100% + 40px); margin-left: -20px;  border-top: 1px solid #ccc;}", ".the-line:first-of-type{margin-bottom: 15px; margin-top: -1px;}", ".the-line:last-of-type{margin-top: 15px}"]
    }, {
        breakpoint: "all and (max-width: 250px)",
        rules: [".control-text{display: none;}"]
    }],
    construct: function(i, e) {
        var t = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            p = function(e) {
                return t[e.getMonth()] + ". " + e.getDate() + ", " + (2016 < e.getFullYear() ? e.getFullYear() : "") + " at " + ((e.getHours() % 12 == 0 ? 12 : e.getHours() % 12) + ":" + (10 <= e.getMinutes() ? e.getMinutes() : "0" + e.getMinutes()) + " ") + " " + (11 < e.getHours() ? " p.m." : " a.m.")
            },
            a = (GidgitsJS.utils.isMobile(), GidgitsJS.utils.isNative(), GidgitsJS.utils.platform()),
            n = document.createElement("div");
        n.classList.add("wrapper");
        var l = document.createElement("div");
        l.classList.add("the-line"), "mobileweb" === a && n.appendChild(l);
        var d = [{
                label: "current-dem",
                count: parseInt(i.dataset.demCurrent)
            }, {
                label: "won-dem",
                count: parseInt(i.dataset.demWon)
            }, {
                label: "current-ind",
                count: parseInt(i.dataset.indCurrent)
            }, {
                label: "won-ind",
                count: parseInt(i.dataset.indWon)
            }, {
                label: "current-rep",
                count: parseInt(i.dataset.repCurrent)
            }, {
                label: "won-rep",
                count: parseInt(i.dataset.repWon)
            }],
            o = parseInt(i.dataset.totalDem),
            s = parseInt(i.dataset.totalRep),
            c = parseInt(i.dataset.available),
            r = parseInt(i.dataset.control),
            m = parseInt(i.dataset.popDem),
            u = parseInt(i.dataset.popRep),
            g = document.createElement("div");
        g.classList.add("headerwrap");
        var h = document.createElement("div");
        h.classList.add("title"), h.innerHTML = "" + i.dataset.position, g.appendChild(h);
        var f = document.createElement("div");
        f.classList.add("subtitle");
        var b = new Date(i.dataset.updated);
        f.innerHTML = "Updated " + p(b), isNaN(b.getMinutes()) && (f.style.visibility = "hidden");
        var x = document.createElement("div");
        x.classList.add("linkwrap");
        var v = document.createElement("a");
        v.classList.add("full-outlook-link"), v.innerHTML = "View Full Results";
        location.host.split(".").slice(-2).join(".");
        var y = "https://www.usatoday.com/data/elections/2016/results/" + ("president" === i.dataset.position.toLowerCase() ? "presidential" : i.dataset.position.toLowerCase());
        v.href = y, x.appendChild(v), g.appendChild(x), n.appendChild(g), n.appendChild(f);
        var w = document.createElement("div");
        w.classList.add("triangle-container");
        var L = document.createElement("div");
        L.classList.add("triangle-down"), w.appendChild(L), n.appendChild(w);
        var k = document.createElement("div");
        k.classList.add("bop-container");
        for (var E = 0; E < d.length; E++) {
            var T = d[E],
                C = document.createElement("div");
            C.style.width = 0 === T.count ? "0" : (T.count / c * 100).toFixed(2) + "%", C.classList.add(T.label), C.classList.add("result-bar"), C.classList.toggle("hide", 0 === T.count), k.appendChild(C)
        }
        n.appendChild(k);
        var M = document.createElement("div");
        M.classList.add("triangle-container");
        var S = document.createElement("div");
        S.classList.add("triangle-up"), M.appendChild(S), n.appendChild(M);
        var H = document.createElement("div");
        H.classList.add("checkmark");
        var z = document.createElement("div"),
            F = document.createElement("div");
        F.classList.add("label"), F.classList.add("democrat"), F.innerHTML += "<div class=number>" + o + "</div>", "president" === i.dataset.position ? F.innerHTML += "Clinton" : F.innerHTML += "Democratic", "True" === i.dataset.democraticWin && (F.appendChild(H), H.style.left = "5px"), z.appendChild(F);
        var D = document.createElement("div");
        D.classList.add("control"), "president" === i.dataset.position ? D.innerHTML += r + ' <span class="control-text">to win</span>' : D.innerHTML += r + ' <span class="control-text">for control</span>', z.appendChild(D);
        var J = document.createElement("div");
        if (J.classList.add("label"), J.classList.add("republican"), J.innerHTML += "<div class=number>" + s + "</div>", "True" === i.dataset.republicanWin && (J.appendChild(H), H.style.right = "5px"), "president" === i.dataset.position ? J.innerHTML += "Trump" : J.innerHTML += "Republican", z.appendChild(J), n.appendChild(z), "senate" === i.dataset.position) {
            J.innerHTML += "*", F.innerHTML += "*";
            var A = document.createElement("div");
            A.innerHTML = "* Includes seats not up for re-election", A.classList.add("footnote"), n.appendChild(A)
        }
        if ("president" === i.dataset.position && (J.innerHTML += '<div class="popular-votes">' + u.toLocaleString() + " votes</div>", F.innerHTML += '<div class="popular-votes">' + m.toLocaleString() + " votes</div>"), "governor" === i.dataset.position && (L.classList.add("hide"), S.classList.add("hide"), D.classList.add("hide")), "mobileweb" === a) {
            var G = document.createElement("div");
            G.classList.add("the-line"), n.appendChild(G)
        }
        var N = function() {
            var e = "election_gen_bop_" + i.dataset.position[0],
                t = "https://sslapi.gannett-cdn.com/elections/v1/2016-election/results/" + i.dataset.position[0] + "/balance?apiKey=57646bc6bca4811fea000001fef4bf8cb66b4acd6b369f4edec7ee85&callback=" + e;
            GidgitsJS.utils.jsonp(t, e, function(e) {
                var t = new Date(e.lastUpdated);
                if (f.innerHTML = "Updated " + p(t), isNaN(t.getMinutes()) ? f.style.visibility = "hidden" : f.style.visibility = "visible", e.balance && 1 < e.balance.length)
                    for (var i = 0; i < e.balance.length; i++) {
                        var a = e.balance[i],
                            n = void 0,
                            l = void 0;
                        if ("D" === a.party ? (n = F, l = k.querySelector("div.won-dem")) : "R" === a.party ? (n = J, l = k.querySelector("div.won-rep")) : "I" === a.party && (l = k.querySelector("div.won-ind")), n) {
                            var d = n.querySelector("div.number");
                            d && (d.innerHTML = a.total);
                            var o = n.querySelector("div.popular-votes");
                            o && (o.innerHTML = parseInt(a.votes).toLocaleString());
                            var s = n.querySelector("div.checkmark");
                            a.winner && !s ? "R" === a.party ? (n.insertBefore(H, n.lastChild), H.style.right = "5px") : "D" === a.party && (n.appendChild(H), H.style.left = "5px") : !a.winner && s && n.removeChild(s)
                        }
                        if (l) {
                            var r = -1 < a.won ? a.won : a.total;
                            l.style.width = 0 === r ? "0" : (r / c * 100).toFixed(2) + "%", l.classList.toggle("hide", 0 === r)
                        }
                    }
            })
        };
        N(), setInterval(N, 6e4), e(n)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-key-races",
    selector: "[gidgit-elections-key-races]",
    enabled: !0,
    styles: ["{width:100%; text-align: left;}", ".wrapper{padding: 20px 15px 20px 15px; position: relative;}", ".flex { display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".title{flex: 0 1 50%; font-size: 18px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333; text-transform: uppercase}", ".linkwrap { flex: 0 1 50%; text-align:right; }", ".state-container{flex: 1 1 33%; padding: 10px 15px 10px 15px; border-right: 1px solid #ccc;}", ".state-container:first-child{padding-left: 0;}", ".state-container:last-child{padding-right: 0; border-right: none;}", ".col-1{display: inline-block; width: 50%;}", ".col-2{display: inline-block; width: 50%; text-align: right; whitespace: no-wrap;}", ".state-initials{font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; color: #333;}", ".reporting{font-family: Helvetica, sans-serif; font-size: 12px; font-style: italic; color: #999;}", ".candidate-names{font-family: Helvetica, sans-serif; font-size: 14px; color: #666;}", ".candidate-percentage{font-family: Helvetica, sans-serif; font-size: 14px; font-weight: bold;}", ".republican{color: #b83939;}", ".democrat{color: #1a649c;}", ".mobile-link{font-family: Hevetica, sans-serif; font-size: 13px; color: #009bff; text-decoration: none; letter-spacing: 0.6px;}", ".checkmark{height: 12px; width: 12px; display: inline-block; position: relative; left: 5px; top: 1px; background-image: url(https://ssl.gannett-cdn.com/appservices/elections-2016/optimized/icon-checkmark-winner.svg); background-size: contain;}", {
        includePlatform: ["mobileweb", "ios", "ios-oembed", "android", "android-oembed", "native", "local"],
        rules: [".key-states{flex-flow: column nowrap;}", ".state-container{flex: 0 1 25%; padding: 10px 0 15px 0; border-right: none; border-bottom: 1px solid #ccc;}", ".state-container:last-child{ border-bottom: none;}", ".col-1{display: inline-block; width: 33%;}", ".col-2{display: inline-block; width: 25%; text-align: right; whitespace: no-wrap;}", ".col-3{display: inline-block; width: 40%; text-align: right;}"]
    }, {
        includePlatform: ["mobileweb"],
        rules: [".wrapper{padding: 0;}", ".state-initials{line-height: 2;}", ".state-container{padding-top: 15px, padding-bottom: 10px;}", ".the-line{width: calc(100% + 40px); margin-left: -20px;  border-top: 1px solid #ccc;}", ".the-line:first-of-type{margin-bottom: 15px; margin-top: -1px;}"]
    }, {
        includePlatform: ["desktop"],
        rules: [".title {margin-bottom: 10px;}", ".state-initials {color: #333 ;-webkit-transition: all .20s ease-in-out, padding 1ms; transition: all .20s ease-in-out, padding 1ms;}", ".state-container:hover > .state-initials {color: #009bff;}", ".state-container{cursor: pointer; padding: 0;}", ".state-link{display: block; flex: 1 1 33%; padding: 0px 15px 0px 15px; border-right: 1px solid #ccc;}", ".state-link:first-child{padding-left: 0;}", ".state-link:last-child{padding-right: 0; border-right: none;}"]
    }],
    construct: function(e, t) {
        GidgitsJS.utils.isMobile(), GidgitsJS.utils.isNative();
        var i = GidgitsJS.utils.platform(),
            a = document.createElement("div");
        a.classList.add("wrapper");
        var n = document.createElement("div");
        n.classList.add("the-line"), "mobileweb" === i && a.appendChild(n);
        var l = document.createElement("div");
        "mobileweb" !== i && l.classList.add("flex");
        var d = document.createElement("div");
        d.classList.add("title"), d.innerHTML = "key states", l.appendChild(d), document.createElement("div").classList.add("linkwrap");
        var o = location.host.split(".").slice(-2).join(".");
        a.appendChild(l);
        var s = document.createElement("div");
        s.classList.add("flex"), s.classList.add("key-states");
        for (var r = e.children, p = 5 < r.length ? 5 : r.length, c = 0; c < p; c++) {
            var m = r[c],
                u = parseFloat(m.dataset.reporting),
                g = m.dataset.state,
                h = m.dataset.fullstate,
                f = m.dataset.elect,
                b = m.children,
                x = document.createElement("a");
            "desktop" === i && (x.href = "https://elections16." + o + "/results/" + h.toLowerCase() + "/president", x.classList.add("state-link"));
            var v = document.createElement("div");
            v.classList.add("state-container");
            var y = document.createElement("div");
            y.classList.add("col-1"), y.classList.add("state-initials"), y.innerHTML = g + "&nbsp;(" + f + ")";
            var w = document.createElement("div");
            if (w.classList.add("col-2"), w.classList.add("reporting"), w.innerHTML = 0 < u && u < 100 ? u.toFixed(1) + "% rpt" : Math.floor(u) + "% rpt", v.appendChild(y), v.appendChild(w), "desktop" !== i) {
                var L = document.createElement("div");
                L.classList.add("col-3");
                var k = document.createElement("a");
                k.classList.add("mobile-link"), k.innerHTML = "Full Results", k.href = "https://www.usatoday.com/data/elections/2016/results/presidential/" + g, L.appendChild(k), v.appendChild(L)
            }
            for (var E = 0; E < b.length; E++) {
                var T = b[E],
                    C = document.createElement("div"),
                    M = T.dataset.name,
                    S = document.createElement("div"),
                    H = "X" === T.dataset.winner;
                if (S.innerHTML = M, H) {
                    var z = document.createElement("div");
                    z.classList.add("checkmark"), S.appendChild(z)
                }
                S.classList.add("col-1"), S.classList.add("candidate-names");
                var F = Math.floor(parseFloat(T.dataset.percentage)),
                    D = document.createElement("div");
                if (D.classList.add("col-2"), D.classList.add("candidate-percentage"), D.innerHTML = F + "%", "Clinton" === M ? D.classList.add("democrat") : "Trump" === M && D.classList.add("republican"), C.appendChild(S), C.appendChild(D), "desktop" !== i) {
                    var J = document.createElement("div");
                    J.classList.add("col-3"), C.appendChild(J)
                }
                v.appendChild(C)
            }
            "desktop" === i ? (x.appendChild(v), s.appendChild(x)) : s.appendChild(v)
        }
        a.appendChild(s);
        var A = document.createElement("div");
        A.classList.add("the-line"), "mobileweb" === i && a.appendChild(A), t(a)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-local-races",
    selector: "[gidgit-elections-local-races]",
    enabled: !0,
    styles: ["{width:100%}", ".wrapper{padding: 20px 15px 20px 15px; position: relative; text-align: left;}", ".header-footer-wrap { display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".title{ flex: 1 1 50%; text-transform: uppercase; text-align: left; font-size: 16px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333;}", ".attribution{font-weight:bold;}", ".subtitle{font-family: Helvetica; font-size: 12px; line-height: 1.6; color: #999; margin-top: 5px; margin-bottom: 20px; text-align:left}", ".linkwrap { flex: 0 1 50%; text-align:right; }", ".full-outlook-link{ font-size: 14px; font-family: Helvetica, Arial, sans-serif; color: #009bff; }", ".candidate-info{width: 31%; border-right: solid 2px #e6e6e6; display: inline-block; padding-bottom: 8px;}", ".row:first-child > .candidate-info{padding-top: 10px;}", ".row:last-child > .candidate-info{padding-bottom: 10px;}", ".candidate-name{font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-size: 13px; color: #333; whitespace: nowrap;}", ".vote-count{font-family: Helvetica; font-size: 13px; color: #666666;}", ".info{border-bottom: solid 1px #eaeaea; padding-bottom: 10px; margin-bottom: 8px;}", ".stats{width: 68%; display:inline-block; line-height: 25px;}", ".res-bar{height: 25px; display: inline-block;}", ".R{background-color: #b83939;}", ".D{background-color: #1a649c;}", ".I{background-color: #65388c;}", ".percent{display: inline-block; vertical-align: top; margin-left: 5px; font-family: Helvetica, sans-serif; font-weight: bold; font-size: 14px; color: #666;}", ".incumbent{text-align:left; flex-basis: 50%; font-family: Helvetica; font-size: 12px; color: #999;}", ".report{text-align: right; flex-basis: 100%; font-family: Helvetica; font-size: 12px; color: #999; font-style: italic;}", ".winner-box{background-color: #39b881; display: inline-block; color: #fff; font-family: Helvetica, Arial, sans-serif; font-size: 11px; font-weight: bold; margin-left: 4px; padding: 2px; border-radius: 3px; height: 12px; min-width: 12px}", ".white-checkmark{background-image: url(https://ssl.gannett-cdn.com/appservices/elections-2016/optimized/icon-checkmark-white.svg); display: inline-block; width: 12px; height: 12px; background-size: contain; background-repeat: no-repeat; background-origin: content-box; position: relative; top: 1px;}", ".EV{margin-left: 2px; display: inline-block; height: 12px; line-height: 12px; vertical-align: top; padding-top: 1px;}", {
        includePlatform: ["mobileweb", "ios", "ios-oembed", "android", "android-oembed", "local"],
        rules: [".winner-box{display: inline;}", ".white-checkmark{position: relative; top: 3px;}"]
    }, {
        includePlatform: ["mobileweb"],
        rules: ["{line-height: normal;}", ".wrapper{padding: 0;}", ".info{padding-bottom: 15px;}", ".subtitle{margin-bottom: 15px;}", ".full-outlook-link{font-size: 13px; letter-spacing: 0.6px;}", ".the-line{width: calc(100% + 40px); margin-left: -20px;  border-top: 1px solid #ccc;}", ".the-line:first-of-type{margin-bottom: 15px; margin-top: -1px;}", ".the-line:last-of-type{margin-top: 15px}", ".candidate-info{width: 44%;}", ".stats{width: 55%; whitespace: nowrap;}", ".EV{position:relative; top: 2px;}", ".white-checkmark{width:9px; height: 9px; top: 2px;}", ".winner-box{font-size: 9px; bottom: 2px; position: relative;}"]
    }],
    construct: function(i, e) {
        var t = GidgitsJS.utils.isMobile(),
            a = GidgitsJS.utils.isNative(),
            n = GidgitsJS.utils.platform(),
            l = document.createElement("div");
        l.classList.add("wrapper");
        var d = document.createElement("div");
        d.classList.add("the-line"), "mobileweb" === n && l.appendChild(d);
        var o = i.dataset.state.toUpperCase(),
            s = parseFloat(i.dataset.reporting),
            E = i.dataset.position,
            r = i.dataset.district,
            p = parseInt(i.dataset.district),
            T = i.dataset.raceid,
            c = "",
            m = !1,
            u = !1;
        ("Governor" !== E && "House" !== E && "Senate" !== E && "President" !== E && (m = !0), "desktop" === n && i.parentElement.classList.contains("js-oembed") && (u = !0), t && i.parentElement.parentElement.classList.contains("oembed") && (u = !0), ("android-oembed" === n || "ios-oembed" === n || a) && (u = !0), isNaN(p)) ? "" !== r && (c = r): c = 1 === (F = p % 10) ? 11 === p ? p + "th" : p + "st" : 2 === F ? p + "nd" : 3 === F ? p + "rd" : p + "th";
        var g = i.children,
            h = document.createElement("div");
        h.classList.add("header-footer-wrap");
        var f = document.createElement("div");
        if (f.classList.add("title"), f.innerHTML = o + ": " + c + " " + E + " " + (isNaN(p) ? "" : "District"), h.appendChild(f), !m) {
            var b = document.createElement("div");
            b.classList.add("linkwrap");
            var x = document.createElement("a");
            x.classList.add("full-outlook-link"), x.innerHTML = "View Full Results";
            location.host.split(".").slice(-2).join(".");
            var v = "https://www.usatoday.com/data/elections/2016/results/" + ("president" === i.dataset.position.toLowerCase() ? "presidential" : i.dataset.position.toLowerCase()) + "/" + o.toLowerCase();
            x.href = v, b.appendChild(x), h.appendChild(b)
        }
        var C = document.createElement("div");
        C.classList.add("subtitle");
        var y = new Date(i.dataset.updated),
            M = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            S = "";
        S = 10 <= y.getMinutes() ? M[y.getMonth()] + ". " + y.getDate() + ", " + (y.getFullYear() <= 2016 ? "" : y.getFullYear()) + " at " + (y.getHours() % 12 == 0 ? 12 : y.getHours() % 12) + ":" + y.getMinutes() : M[y.getMonth()] + ". " + y.getDate() + ", " + (y.getFullYear() <= 2016 ? "" : y.getFullYear()) + " at " + (y.getHours() % 12 == 0 ? 12 : y.getHours() % 12) + ":0" + y.getMinutes(), isNaN(y.getMinutes()) && (C.style.visibility = "hidden"), 11 < y.getHours() ? S += " p.m." : S += " a.m.", C.innerHTML = "Updated " + S, l.appendChild(h), l.appendChild(C);
        var w = !1,
            H = document.createElement("div");
        H.classList.add("info");
        for (var L = 0, k = u ? g.length : 2, z = 0; z < k; z++) {
            (F = g[z]).dataset.electWon;
            var F, D = F.dataset.party,
                J = F.dataset.name,
                A = parseInt(F.dataset.votes),
                G = parseFloat(F.dataset.percentage),
                N = F.dataset.incumbent,
                I = "X" === F.dataset.winner,
                B = document.createElement("div");
            B.classList.add("row");
            var W = document.createElement("div");
            W.classList.add("candidate-info");
            var R = document.createElement("div");
            if (R.classList.add("candidate-name"), R.innerHTML = J + " (" + D + ")", "True" === N && (w = !0, R.innerHTML += "*"), I) {
                var P = document.createElement("div");
                P.classList.add("winner-box");
                var O = document.createElement("div");
                if (O.classList.add("white-checkmark"), P.appendChild(O), "President" === E) {
                    var U = F.dataset.electWon;
                    P.innerHTML += '<div class="EV">' + U + " EV</div>"
                }
                R.appendChild(P)
            }
            var _ = document.createElement("div");
            _.innerHTML = A.toLocaleString() + " votes", _.classList.add("vote-count"), W.appendChild(R), W.appendChild(_);
            var j = document.createElement("div");
            j.classList.add("stats");
            var q = document.createElement("div");
            "D" === D || "R" === D ? q.classList.add(D) : q.classList.add("I"), q.classList.add("res-bar"), 0 === z ? (0 < G && (q.style.width = "70%"), L = G) : q.style.width = G / L * 70 + "%";
            var V = document.createElement("div");
            V.classList.add("percent"), V.innerHTML = G.toFixed(1) + "%", j.appendChild(q), j.appendChild(V), B.appendChild(W), B.appendChild(j), H.appendChild(B)
        }
        l.appendChild(H);
        var Y = document.createElement("div");
        Y.classList.add("header-footer-wrap");
        var K = document.createElement("div");
        if (K.classList.add("report"), K.innerHTML = 0 < s && s < 100 ? s.toFixed(1) + "% rpt" : Math.floor(s) + "% rpt", w) {
            var Z = document.createElement("div");
            Z.classList.add("incumbent"), Z.innerHTML = "* Incumbent", K.style.flexBasis = "50%", Y.appendChild(Z)
        }
        Y.appendChild(K), l.appendChild(Y);
        var X = document.createElement("div");
        X.classList.add("the-line"), "mobileweb" === n && l.appendChild(X);
        var $ = function() {
            var e = "election_local_races_" + i.dataset.position[0],
                t = "";
            t = "House" === E ? "https://sslapi.gannett-cdn.com/elections/v1/2016-election/results/" + i.dataset.position[0] + "/" + o + "/" + p + "?apiKey=57646bc6bca4811fea000001fef4bf8cb66b4acd6b369f4edec7ee85&callback=" + e : "https://sslapi.gannett-cdn.com/elections/v1/2016-election/results/" + i.dataset.position[0] + "/" + o + "?apiKey=57646bc6bca4811fea000001fef4bf8cb66b4acd6b369f4edec7ee85&callback=" + e, GidgitsJS.utils.jsonp(t, e, function(e) {
                var t = new Date(e.lastUpdated);
                S = 10 <= t.getMinutes() ? M[t.getMonth()] + ". " + t.getDate() + ", " + (t.getFullYear() <= 2016 ? "" : t.getFullYear()) + " at " + (t.getHours() % 12 == 0 ? 12 : t.getHours() % 12) + ":" + t.getMinutes() : M[t.getMonth()] + ". " + t.getDate() + ", " + (t.getFullYear() <= 2016 ? "" : t.getFullYear()) + " at " + (t.getHours() % 12 == 0 ? 12 : t.getHours() % 12) + ":0" + t.getMinutes(), 11 < t.getHours() ? S += " p.m." : S += " a.m.", C.innerHTML = "Updated " + S;
                var i = e.races[0];
                if ("" !== T)
                    for (var a = 0; a < e.races.length; a++)
                        if (e.races[a].raceId = T) {
                            i = e.races[a];
                            break
                        } var n = i.reportingUnits[0],
                    l = (n.precinctsReportingPct, n.fullState, n.stateName, n.candidates),
                    d = H.children,
                    o = 0;
                for (a = 0; a < d.length; a++) {
                    var s = d[a],
                        r = s.querySelector("div.candidate-info"),
                        p = s.querySelector("div.stats"),
                        c = r.querySelector("div.candidate-name"),
                        m = r.querySelector("div.vote-count"),
                        u = p.querySelector("div.res-bar"),
                        g = p.querySelector("div.percent");
                    if (("House" === E || "Senate" === E || "Governor" === E || "President" === E) && 2 === a) break;
                    var h = l[a].electWon,
                        f = l[a].party,
                        b = l[a].last,
                        x = "X" === l[a].winner,
                        v = l[a].voteCount,
                        y = l[a].percentage,
                        w = l[a].incumbent;
                    if (c.innerHTML = b + "&nbsp" + f + ("True" === w ? "*" : ""), m.innerHTML = parseInt(v).toLocaleString() + " votes", u.classList.remove("R"), u.classList.remove("D"), u.classList.add(f), g.innerHTML = y.toFixed(1) + "%", 0 === a && (o = y), u.style.width = y / o * 70 + "%", x) {
                        var L = document.createElement("div");
                        L.classList.add("winner-box");
                        var k = document.createElement("div");
                        k.classList.add("white-checkmark"), L.appendChild(k), "President" === E && (L.innerHTML += '<div class="EV">' + h + " EV</div>"), c.appendChild(L)
                    }
                }
            })
        };
        $(), setInterval($, 6e4), e(l)
    }
}), GidgitsJS.registerWidgit({
    name: "elections-state-outlook",
    selector: "[gidgit-elections-state-outlook]",
    enabled: !0,
    styles: ["{width:100%; text-align: left;}", ".headerwrap { display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;}", ".title{flex: 0 1 50%; font-size: 18px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; color: #333; text-transform: uppercase}", ".attribution{font-weight:bold;}", ".linkwrap { flex: 0 1 50%; text-align:right; }", ".subtitle{font-family: Helvetica; font-size: 11px; line-height: 1.6; color: #999; margin-top: 5px;}", ".wrapper{padding: 20px 15px 20px 15px; position: relative; text-align: left}", ".box {border:solid 1px #e8e8e8; margin-top: 45px; padding: 20px 10px 15px 10px;}", ".line {position: absolute; width: 100%; margin-top: -3.5px; height: 7px; border-radius: 2px; background-color: #d1d1d1;}", ".line-graph {position: relative; margin-bottom: 10px;}", ".label-container {display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; font-size: 20px; font-family:'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal;}", ".ball {width: 12px; height: 12px; border-radius: 50%; margin-left: -6px; margin-top:-6px; background-color: #d1d1d1;}", ".start {position: absolute; left: 0%;}", ".mid {position: absolute; left: 50%;}", ".end {position: absolute; left: 100%;}", ".slider-ball {width: 14px; height: 14px; border-radius: 50%; margin-top: -7px; margin-left: -7px; position: absolute;}", ".label-box{font-size: 16px; font-family:'Futura Today Bold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-weight: normal; text-transform: uppercase; position: absolute; padding: 6px 10px 6px 10px; margin-top: -54px; white-space: nowrap}", ".triangle{position: absolute; border-top:10px solid transparent; border-left: 10px solid transparent;border-right: 10px solid transparent; margin-top: -20px; margin-left: -10px; width: 0; height: 0;}", ".dem {background-color: #1a649c; color: #fff;}", ".rep {background-color: #b83939; color: #fff;}", ".tossup {background-color: #d8c797; color: #fff;}", ".dem-label {color: #1a649c; flex-basis: 33%;}", ".rep-label {color: #b83939; flex-basis: 33%; text-align: right;}", ".tossup-label {color: #555555; flex-basis: 33%; text-align: center; margin-top: 28px;}", ".border-dem{border-top: 8px solid #1a649c;}", ".border-rep{border-top: 8px solid #b83939;;}", ".border-tossup{border-top: 8px solid #d8c797;}", ".stroke-dem{border: 1px solid #165280;}", ".stroke-rep{border:  1px solid #862727}", ".stroke-tossup{border: 1px solid #B4A478;}"],
    construct: function(e, t) {
        GidgitsJS.utils.isMobile();
        var i = GidgitsJS.utils.isNative(),
            a = (GidgitsJS.utils.platform(), document.createElement("div"));
        a.classList.add("wrapper");
        var n = e.dataset.rating,
            l = e.dataset.position,
            d = parseInt(e.dataset.placement),
            o = new Date(e.dataset.updated),
            s = e.dataset.stateFull,
            r = e.dataset.district,
            p = (e.dataset.state, document.createElement("div"));
        p.classList.add("title");
        var c = document.createElement("div");
        c.classList.add("headerwrap"), p.innerHTML = s + " " + l + " ", "house" === l && (p.innerHTML += "District #" + r + " "), p.innerHTML += "Race Rating", c.appendChild(p);
        var m = document.createElement("div");
        m.classList.add("linkwrap");
        var u = document.createElement("a");
        u.classList.add("full-outlook-link"), u.innerHTML = "View Outlook";
        var g = "https://elections16." + location.host.split(".").slice(-2).join(".") + "/outlook/" + s;
        i && (g = "https://elections16.usatoday.com/outlook/" + s), u.href = g, m.appendChild(u), c.appendChild(m), a.appendChild(c);
        var h = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][o.getMonth()] + " " + o.getDate() + ", " + o.getFullYear(),
            f = document.createElement("div");
        f.classList.add("subtitle"), f.innerHTML = '<span class="attribution">via Rothenberg & Gonzales | </span> updated ' + h, a.appendChild(f);
        var b = document.createElement("div");
        b.classList.add("box"), a.appendChild(b);
        var x = document.createElement("div");
        x.classList.add("line-graph"), b.appendChild(x);
        var v = document.createElement("div");
        v.classList.add("line"), x.appendChild(v);
        var y = document.createElement("div");
        y.classList.add("ball"), y.classList.add("start"), x.appendChild(y);
        var w = document.createElement("div");
        w.classList.add("ball"), w.classList.add("mid"), x.appendChild(w);
        var L = document.createElement("div");
        L.classList.add("ball"), L.classList.add("end"), x.appendChild(L);
        var k = document.createElement("div");
        k.classList.add("slider-ball"), k.classList.add("slider"), x.appendChild(k);
        var E = document.createElement("div");
        E.classList.add("triangle"), x.appendChild(E);
        var T = document.createElement("div");
        T.classList.add("label-box"), T.innerHTML = n, x.appendChild(T);
        var C = 12.5 * d / 100;
        T.style.left = 100 * C + "%", E.style.left = 100 * C + "%", k.style.left = 100 * C + "%", 0 < n.toLowerCase().indexOf("democrat") ? (T.classList.add("dem"), E.classList.add("border-dem"), k.classList.add("dem"), k.classList.add("stroke-dem")) : 0 < n.toLowerCase().indexOf("republican") ? (T.classList.add("rep"), E.classList.add("border-rep"), k.classList.add("rep"), k.classList.add("stroke-rep")) : (T.classList.add("tossup"), E.classList.add("border-tossup"), k.classList.add("tossup"), k.classList.add("stroke-tossup"));
        var M = document.createElement("div");
        M.classList.add("label-container"), b.appendChild(M);
        var S = document.createElement("div");
        S.classList.add("dem-label"), S.innerHTML = '<div><img src="https://ssl.gannett-cdn.com/appservices/elections-2016/optimized/icon-d-donkey.svg" class= "donkey"></img></div>Safe Democratic', M.appendChild(S);
        var H = document.createElement("div");
        H.classList.add("tossup-label"), H.innerHTML = "Tossup", M.appendChild(H);
        var z = document.createElement("div");
        z.classList.add("rep-label"), z.innerHTML = '<div><img src="https://ssl.gannett-cdn.com/appservices/elections-2016/optimized/icon-r-elephant.svg" class= "elephant"></div>Safe Republican', M.appendChild(z), t(a);
        var F = T.offsetWidth,
            D = v.offsetWidth;
        T.style.marginLeft = (1 - C) * D < .5 * F ? "-" + (F - (1 - C) * D - 11) + "px" : C * D < .5 * F ? "-" + (C * D + 10) + "px" : "-" + .5 * F + "px"
    }
}), GidgitsJS.registerWidgit({
    name: "election sample",
    selector: "[gidgit-elect]",
    enabled: !1,
    styles: ["h2 { border-bottom: 1px solid #333; }", ".party-R { color: #732c30; }", ".party-D { color: #235468; }", ".collapse { display: none; }"],
    construct: function(e, t) {
        var i = "election_" + e.dataset.state,
            a = "http://api.gannett-cdn.com/v1/2016-primary/results/p/" + e.dataset.state + "/summary?callback=" + i;
        GidgitsJS.utils.jsonp(a, i, function(e) {
            var n = document.createElement("div");
            e.races.map(function(a) {
                a.reportingUnits.map(function(e) {
                    var i = document.createElement("ol"),
                        t = document.createElement("h2");
                    t.classList.add("party-" + a.party), t.innerText = e.stateName + " " + ("R" === a.party ? "GOP" : "DEM"), t.onclick = function(e) {
                        i.classList.toggle("collapse")
                    }, n.appendChild(t), n.appendChild(i), e.candidates.map(function(e) {
                        var t = document.createElement("li");
                        t.innerText = (e.first || "") + " " + e.last + " " + e.votePct + "%", i.appendChild(t)
                    })
                })
            }), t(n)
        })
    }
}), GidgitsJS.registerWidgit({
    name: "olympics-medals",
    selector: "[gidgit-olympics-medals]",
    enabled: !0,
    styles: ["a{text-decoration:none;}", ".medals a{text-decoration:none}", "{background: rgba(255, 255, 255, 0); margin: 0 auto !important; width: 100%; display: block; padding-left: 0px; position: relative; text-align: left; }", ".medals{ padding:30px 20px 30px 20px; }", ".medals.mobile { padding-top: 30px; padding-right:15px; padding-bottom:30px; padding-left:15px; }", ".medals.rail { padding: 30px 0 30px 0; }", ".medal-item{ list-style-type:none; }", ".medal-count-title{height: 16px; font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; font weight: bold; color: #333333; display: inline-block; text-transform: uppercase; -webkit-font-smoothing: antialiased; }", ".mobile .medal-count-title {margin: 0; width: 50%; }", ".medal-key-map{ display: inline-block; float:right; margin-right:20px; }", ".mobile .medal-key-map {display:none}", ".native-phone .medal-key-map { display:none; }", ".medal-text{ margin-right: 5px; }", ".medal-expanded{ display:none; padding-right:6px; }", ".gold-res:hover, .silver-res:hover, .bronze-res:hover { cursor:pointer; }", ".gold-res:hover .medal-expanded, .silver-res:hover .medal-expanded, .bronze-res:hover .medal-expanded { display:inline; }", ".bar-res{ color: #ffffff; font-family: Helvetica, sans-serif; font-size: 11px; font-weight: normal; line-height: 2; width:95%;}", ".mobile .bar-res {margin: 0;}", ".gold-res{height: 25px; background-color: #c98910; display: inline-block; text-align: right; margin-right: 1px; min-width: 17px;}", ".silver-res{height: 25px; background-color: #a8a8a8; display: inline-block; text-align: right; margin: 0px 1px 0px 0px; min-width: 17px;}", ".bronze-res{height: 25px; background-color: #875132; display: inline-block; text-align: right; margin-right: 1px; min-width: 17px;}", ".flag{ border: 1px solid #e6e6e6; width: 48px; display:inline-block; margin-right: 20px}", ".mobile .flag {margin: 0;}", ".list-element{height: 31.5px; margin-bottom: 10px; }", ".country-name { position: relative; display:inline-block; vertical-align:middle; }", ".mobile .country-name { height:30.5px; margin-top:-15px; padding-right: 5px; padding-left:10px;}", ".full-medal-button{background-color: #ffffff; border: solid 1px #e6e6e6; border-radius: 3px; position: absolute; color: #009bff; font-family: Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.5px; padding: 0 10px 0 10px; text-align: center; right: 20px; top: 18px; height: 35px; text-decoration:none; -webkit-transition: all 0.25s ease; transition: all 0.25s ease; }", ".full-medal-button:hover { background-color: #f9f9f9; border: solid 1px #dddddd; box-shadow: 0 5px 10px 0 rgba(0,0,0,.06); }", ".full-medal-button:active { background-color: #f9f9f9; border: solid 1px #dddddd; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 4px 4px 0 rgba(0, 0, 0, 0.06); }", ".mobile .full-medal-button {width: 100%; display: block; position:relative; right: 0;}", ".total-medals{ border-left: 1px solid #cccccc; font-family: 'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; font-weight: normal; color: #333333; margin-left: 10px; display:inline-block; padding-left:10px; vertical-align:middle; -webkit-font-smoothing: antialiased; }", ".mobile .total-medals { height:30.5px; margin-top:-15px; margin-left: 5px; }", ".country{display:inline-block; width: 100%; font-family: 'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; color: #333333; margin-top:20px; -webkit-font-smoothing: antialiased; }", ".mobile.country-1{margin-top: 13px; }", ".mobile .country-2{margin-top: 12px; }", ".mobile .country-3{margin-top: 12px; }", ".key{ width: 16px; height: 16px; display:inline-block; margin-left:10px; }", ".key.gold { background:url(https://ssl.gannett-cdn.com/appservices/olympics-2016/optimized/icon-medal-gold.svg) no-repeat center top; background-size: contain; }", ".key.silver { background:url(https://ssl.gannett-cdn.com/appservices/olympics-2016/optimized/icon-medal-silver.svg); background-size: contain; }", ".key.bronze { background:url(https://ssl.gannett-cdn.com/appservices/olympics-2016/optimized/icon-medal-bronze.svg) no-repeat center top; background-size: contain; }"],
    construct: function(e, G) {
        var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            N = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), GidgitsJS.utils.isMobile()),
            I = GidgitsJS.utils.isNative(),
            i = GidgitsJS.utils.legacy.onRightRail(e),
            B = !1;
        t < 325 && (B = !0);
        var W = "";
        (N || I) && (W = "mobile");
        var R = "";
        B && (R = "mobile");
        var P = "";
        i && (P = "rail");
        var a = "gidgits_medals";
        GidgitsJS.utils.jsonp("https://sslapi.gannett-cdn.com/olympics/page/v1/universal/olympics/-countries-/2016/medals?sortby=n_Total,n_Gold,n_Silver,n_Bronze&rankby=n_Total&order=desc&count=3&collapse&apiKey=57646bc6bca4811fea00000115d6672d10b84542787bde179c43df0c&callback=gidgits_medals", a, function(e) {
            var t = e.page,
                i = document.createElement("div");
            i.classList.add("medals"), W && i.classList.add(W), R && i.classList.add(R), P && i.classList.add(P);
            var a = "https://rio16." + location.host.split(".").slice(-2).join(".") + "/olympics-rio-2016/medals";
            I && (a = "https://rio16.usatoday.com/olympics-rio-2016/medals"), B && (a = "");
            var n = document.createElement("div");
            n.classList.add("medal-count-title"), n.innerText = "Medal Count", i.appendChild(n);
            var l = document.createElement("a");
            l.href = a;
            var d = document.createElement("button");
            d.classList.add("full-medal-button"), d.innerText = "Full Medal Count", l.appendChild(d);
            var o = document.createElement("div");
            o.classList.add("medal-key-map");
            var s = document.createElement("div");
            s.classList.add("key"), s.classList.add("gold");
            var r = document.createElement("div");
            r.classList.add("key"), r.classList.add("silver");
            var p = document.createElement("div");
            p.classList.add("key"), p.classList.add("bronze"), o.appendChild(s), o.appendChild(r), o.appendChild(p), N && I && B || i.appendChild(l);
            for (var c = 0, m = 0; m < t.length; m++) {
                var u = document.createElement("li");
                u.classList.add("medal-item");
                t[m].rank;
                var g = t[m].country,
                    h = t[m].total;
                0 === m && (c = h);
                var f = t[m].gold,
                    b = t[m].silver,
                    x = t[m].bronze,
                    v = document.createElement("div");
                v.classList.add("country");
                var y = "country-" + (m + 1);
                v.classList.add(y);
                var w = document.createElement("div");
                w.classList.add("list-element");
                var L = document.createElement("img"),
                    k = "http://www.gannett-cdn.com/appservices/olympics-2016/world-flags/" + g.replace(" ", "_").toLowerCase() + ".png";
                L.src = k, L.classList.add("flag"), w.appendChild(L);
                var E = document.createElement("div");
                E.classList.add("country-name"), E.innerText = g, w.appendChild(E);
                var T = document.createElement("div");
                T.classList.add("total-medals"), T.innerHTML = h, w.appendChild(T), v.appendChild(w);
                var C = document.createElement("div");
                if (C.classList.add("bar-res"), 0 < f) {
                    var M = Math.floor(f / c * 98),
                        S = document.createElement("div");
                    S.classList.add("gold-res"), S.style.width = M + "%", (F = document.createElement("span")).classList.add("medal-text"), F.innerText = f, (D = document.createElement("span")).classList.add("medal-expanded"), D.innerText = "gold", S.appendChild(F), S.appendChild(D), C.appendChild(S)
                }
                if (0 < b) {
                    var H = Math.floor(b / c * 98),
                        z = document.createElement("div");
                    z.classList.add("silver-res"), z.style.width = H + "%", (F = document.createElement("span")).classList.add("medal-text"), F.innerText = b, (D = document.createElement("span")).classList.add("medal-expanded"), D.innerText = "silver", z.appendChild(F), z.appendChild(D), C.appendChild(z)
                }
                if (0 < x) {
                    var F, D, J = Math.floor(x / c * 98),
                        A = document.createElement("div");
                    A.classList.add("bronze-res"), A.style.width = J + "%", (F = document.createElement("span")).classList.add("medal-text"), F.innerText = x, (D = document.createElement("span")).classList.add("medal-expanded"), D.innerText = "bronze", A.appendChild(F), A.appendChild(D), C.appendChild(A)
                }
                v.appendChild(C), u.appendChild(v), i.appendChild(u)
            }
            N || I || B ? i.appendChild(l) : i.appendChild(o), G(i)
        })
    }
}), GidgitsJS.registerWidgit({
    name: "olympics-schedule",
    selector: "[gidgit-olympics-schedule]",
    enabled: !0,
    styles: ["a{text-decoration:none;}", "div.myBox a{text-decoration:none}", "{ text-align: left; width: 100%; }", "div.myBox { padding:30px 20px 30px 20px; position:relative;}", "div.myBox.mobile { padding-left: 15px; padding-right: 15px}", "div.mobileHeading, div.heading { font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; color: #333333; padding-bottom: 30px; -webkit-font-smoothing: antialiased; }", ".native-phone div.mobileHeading, div.heading {padding-bottom:10px}", "div.mobileHeading {padding-bottom: 12px;}", ".mobile div.heading { padding-bottom: 10px }", "div.event { border-bottom: solid 1px #e6e6e6; display:flex; margin: 0 0 6px 0; padding:0 0 10px 0; position: relative; }", "span.olympics-grey { color: #999999; display: inline-flex; flex:0 1 20%; font-family: helvetica, sans-serif; font-size: 13px; line-height: 1.69; }", "span.medal-round { color: #999999;  font-family: helvetica; font-size: 12px; width:72px; }", ".mobile span.medal-round { margin-top:10px; }", "div.date { border-bottom: solid 1px #e6e6e6; color: #333333; font-size: 13px; font-family: 'Futura Today Demibold', 'Futura Today Demi', 'Futura Today Screen', Helvetica, sans-serif; margin: 0 0 9px 0; padding: 0 0 10px 0; -webkit-font-smoothing: antialiased; }", "div.sport { border-bottom: solid 1px #e6e6e6; color: #eb1e00; font-size: 13px; font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif;margin: 0 0 9px 0; padding: 0 0 10px 0; text-transform:uppercase; -webkit-font-smoothing: antialiased; }", ".native-phone div.sport { margin: 0 0 6px 0; padding: 0 0 6px 0;}", ".mobile div.sport { text-transform: uppercase; }", "span.events { display:inline-flex; flex: 1 20 60%; font-family: helvetica; font-size: 14px; color: #333333; margin-left:30px; max-width:326px; }", ".mobile span.events { flex: 1 20 75%; }", "div.medals { display:inline-flex; flex: 1 1 20%; margin-left:15px; }", ".mobile div.medals { margin-top:-10px; }", ".mobile .repeatEvent div.medals { margin-top:-7px; }", ".fullScheduleButton {background-color: #ffffff; border: solid 1px #e6e6e6; border-radius: 3px;  position: absolute; color: #009bff; font-family: Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.5px; padding: 0 10px 0 10px; text-align: center; right: 20px; top: 18px; height: 35px; -webkit-transition: all 0.25s ease; transition: all 0.25s ease;}", ".fullScheduleButton.mobile { bottom:0; width: 100%; top: inherit; display:block;position:relative;right:0;}", ".fullScheduleButton:hover { background-color: #f9f9f9; border: solid 1px #dddddd; box-shadow: 0 5px 10px 0 rgba(0,0,0,.06); }", ".fullScheduleButton:active { background-color: #f9f9f9; border: solid 1px #dddddd; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 4px 4px 0 rgba(0, 0, 0, 0.06); }", ".mobile .lastEvent { border: none }", ".native-phone .fullScheduleButton {top:0;}", ".native-phone div.event {margin: 0 0 6px 0; padding: 0 0 6px 0;}"],
    construct: function(P, O) {
        var e = P.dataset.urlid;
        if (null != e && "" !== e) {
            encodeURIComponent(":");
            var t = "gidgits_" + e,
                i = "https://sslapi.gannett-cdn.com/olympics/page/v1/universal/olympics/" + e + "/2016/schedule/-dates-?filter=d_DateStartUTC%3Enow&sortby=d_DateStartUTC&extract=phaseStatus:Upcoming=3&apiKey=57646bc6bca4811fea00000115d6672d10b84542787bde179c43df0c&callback=" + t;
            GidgitsJS.utils.jsonp(i, t, function(e) {
                var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    i = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), e.page),
                    a = Object.keys(i),
                    n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    d = P.dataset.heading,
                    o = GidgitsJS.utils.isMobile(),
                    s = GidgitsJS.utils.isNative(),
                    r = !1;
                t < 325 && (r = !0);
                var p = "";
                p = "Schedule & Results" === d ? (!0, "schedule") : d;
                var c = "https://rio16." + location.host.split(".").slice(-2).join(".") + "/olympics-rio-2016/schedule-results";
                s && (c = "https://rio16.usatoday.com/olympics-rio-2016/schedule-results"), r && (c = "");
                var m = document.createElement("div");
                m.classList.add("myBox"), o && m.classList.add("mobile"), r && !o && (m.classList.add("mobile"), m.classList.add("native-phone"));
                var u = document.createElement("a");
                u.href = c;
                var g = document.createElement("button");
                g.classList.add("fullScheduleButton"), g.innerText = "Full Schedule", (o || s || r) && g.classList.add("mobile"), u.appendChild(g);
                var h = document.createElement("div");
                h.classList.add("heading"), h.innerText = p.toUpperCase(), o && s && r || m.appendChild(u), m.appendChild(h);
                for (var f = -1, b = "", x = 1, v = 0; v < a.length; v++)
                    for (var y = i[a[v]], w = 0; w < y.length; w++) {
                        var L = new Date(y[w].startUTC + -72e5).toUTCString(),
                            k = L.split(" ");
                        L = k[3] + "-08-" + k[1] + "T" + k[4] + "-04:00";
                        var E = new Date(L),
                            T = E.toString().split(" "),
                            C = new Date("August 1, 2016 00:00:01"),
                            M = Math.ceil((E.getTime() - C.getTime()) / 864e5);
                        if (M !== f) {
                            f = M;
                            var S = l[E.getDay()],
                                H = n[E.getMonth()],
                                z = document.createElement("div");
                            z.classList.add("date"), z.innerText = S + " " + H + ", " + f, m.appendChild(z)
                        }
                        var F = document.createElement("div"),
                            D = y[w].sport;
                        if (b !== D) {
                            var J = document.createElement("div");
                            J.classList.add("sport"), J.innerText = D, m.appendChild(J), b = D
                        } else F.classList.add("repeatEvent");
                        F.classList.add("event"), 3 === x && F.classList.add("lastEvent");
                        var A = document.createElement("span");
                        A.classList.add("olympics-grey");
                        var G = "";
                        if (T && 4 < T.length) {
                            var N = T[4].toString().split(":");
                            if (12 < parseInt(T[4])) G += parseInt(N[0]) - 12 + ":" + N[1] + " PM ";
                            else 12 === parseInt(T[4]) ? G += N[0] + ":" + N[1] + " PM " : 0 === parseInt(T[4]) ? G += "12:" + N[1] + " AM " : G += parseInt(N[0]) + ":" + N[1] + " AM ";
                            G += "ET"
                        }
                        A.innerText = G, F.appendChild(A);
                        var I = document.createElement("span");
                        if (I.classList.add("events"), I.innerText = y[w].eventName, F.appendChild(I), y[w].medalRound) {
                            var B = document.createElement("div");
                            B.classList.add("medals");
                            var W = document.createElement("img");
                            W.setAttribute("src", "https://ssl.gannett-cdn.com/appservices/olympics-2016/medal-round-indicator.svg"), W.setAttribute("width", "30"), W.setAttribute("height", "30.6");
                            var R = document.createElement("span");
                            R.classList.add("medal-round"), R.innerText = "Medal Round", B.appendChild(R), B.appendChild(W), F.appendChild(B)
                        }
                        m.appendChild(F), (o || s || r) && m.appendChild(u), x += 1
                    }
                O(m)
            })
        } else {
            var a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                n = (Math.max(document.documentElement.clientHeight, window.innerHeight || 0), ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]),
                l = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                d = P.getElementsByTagName("li"),
                o = GidgitsJS.utils.convertNodeListToArray(d),
                s = P.dataset.heading,
                r = !1,
                p = GidgitsJS.utils.isMobile(),
                c = GidgitsJS.utils.isNative(),
                m = !1;
            a < 325 && (m = !0);
            var u = "";
            u = "Schedule & Results" === s ? (r = !0, "schedule") : s;
            var g = "https://rio16." + location.host.split(".").slice(-2).join(".") + "/olympics-rio-2016/schedule-results";
            c && (g = "https://rio16.usatoday.com/olympics-rio-2016/schedule-results"), m && (g = "");
            var h = document.createElement("div");
            h.classList.add("myBox"), p && h.classList.add("mobile"), m && !p && (h.classList.add("mobile"), h.classList.add("native-phone"));
            var f = document.createElement("a");
            f.href = g;
            var b = document.createElement("button");
            b.classList.add("fullScheduleButton"), b.innerText = "Full Schedule", (p || c || m) && b.classList.add("mobile"), f.appendChild(b), p && c && m || h.appendChild(f);
            var x = document.createElement("div");
            x.classList.add("heading"), x.innerText = u.toUpperCase(), h.appendChild(x);
            for (var v = -1, y = 0; y < o.length && "" !== o[y].innerHTML; y++) {
                var w = o[y].dataset.date,
                    L = w.split(" "),
                    k = L[2].toString();
                k = k.slice(0, 3) + ":" + k.slice(3), w = L[0] + "T" + L[1] + k;
                var E = new Date(w),
                    T = E.toString().split(" "),
                    C = new Date("August 1, 2016 00:00:01"),
                    M = Math.ceil((E.getTime() - C.getTime()) / 864e5);
                if (M !== v) {
                    v = M;
                    var S = l[E.getDay()],
                        H = n[E.getMonth()],
                        z = document.createElement("div");
                    z.classList.add("date"), z.innerText = S + " " + H + ", " + v, h.appendChild(z)
                }
                var F = document.createElement("div");
                if (r && (0 === y || 0 < y && o[y].dataset.sport !== o[y - 1].dataset.sport)) {
                    var D = document.createElement("div");
                    D.classList.add("sport"), D.innerText = o[y].dataset.sport, h.appendChild(D)
                } else F.classList.add("repeatEvent");
                F.classList.add("event"), y === o.length - 1 && F.classList.add("lastEvent");
                var J = document.createElement("span");
                J.classList.add("olympics-grey");
                var A = "";
                if (T && 4 < T.length) {
                    var G = T[4].toString().split(":");
                    if (12 < parseInt(T[4])) A += parseInt(G[0]) - 12 + ":" + G[1] + " PM ";
                    else 12 === parseInt(T[4]) ? A += G[0] + ":" + G[1] + " PM " : 0 === parseInt(T[4]) ? A += "12:" + G[1] + " AM " : A += parseInt(G[0]) + ":" + G[1] + " AM "
                }
                var N = document.createElement("span");
                N.classList.add("est");
                N.innerHTML = " ET", J.innerText = A, J.appendChild(N), F.appendChild(J);
                var I = document.createElement("span");
                if (I.classList.add("events"), I.innerText = o[y].innerHTML, F.appendChild(I), "true" === o[y].dataset.medalround) {
                    var B = document.createElement("div");
                    B.classList.add("medals");
                    var W = document.createElement("img");
                    W.setAttribute("src", "https://ssl.gannett-cdn.com/appservices/olympics-2016/medal-round-indicator.svg"), W.setAttribute("width", "30"), W.setAttribute("height", "30.6");
                    var R = document.createElement("span");
                    R.classList.add("medal-round"), R.innerText = "Medal Round", B.appendChild(R), B.appendChild(W), F.appendChild(B)
                }
                h.appendChild(F)
            }(p || c || m) && h.appendChild(f), O(h)
        }
    }
}), GidgitsJS.registerWidgit({
    name: "olympics-schedule-module",
    selector: "[gidgit-olympics-schedule-module]",
    enabled: !0,
    styles: ["{ text-align: left; width: 100%; }", ".myBox { padding:30px 20px; position:relative;}", ".heading { font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif; font-weight: bold; font-size: 16px; color: #333333; padding-bottom: 30px; }", ".mobile .heading { font-size: 14px; padding-bottom: 10px; }", ".event { width: 100%; border-top: solid 1px #e6e6e6; position: relative; padding: 7px 0; box-sizing: border-box;}", ".mobile .event { display: block; font-size: 12px; line-height: 16px; }", ".participant { width: 100%; margin: 0 0 6px 0; padding-left: 105px; height: 16px; position: relative; box-sizing: border-box; color: #333333; }", ".mobile .participant { padding-left: 0; }", ".participant:last-child { margin-bottom: 16px; }", ".olympics-grey { color: #999999; display: inline-block; min-width: 105px; font-family: helvetica, sans-serif; font-size: 13px; line-height: 22px; }", ".mobile .olympics-grey { font-size: 11px; line-height: 16px; }", ".olympics-grey.final { font-weight: bold; }", ".olympics-grey.final:before { content: ''; display: inline-block; background: transparent url(https://ssl.gannett-cdn.com/appservices/olympics-2016/optimized/icon-check.svg) no-repeat 0 50%; background-size: contain; height: 22px; width: 12px; line-height: 0; vertical-align: middle; margin-right: 8px; }", ".medal-round { color: #999999;  font-family: helvetica, sans-serif; font-size: 12px; line-height: 38px; vertical-align: top; }", ".mobile .medal-round { font-size: 11px; line-height: 32px;}", ".medal-round-img { position: relative; right: -4px; }", ".date { color: #eb1e00; font-weight: bold; font-size: 13px; font-family: Futura Today, 'Futura Today Screen', Helvetica, sans-serif; }", ".sport-wrap { border-bottom: solid 1px #e6e6e6; }", ".mobile .sport-wrap.last { border-bottom: none; }", ".sport { color: #eb1e00; font-weight: bold; font-size: 13px; font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif; text-transform: uppercase; height: 38px; line-height: 38px;}", ".mobile .sport { font-size: 11px; height: 28px; line-height: 28px;}", ".events { display:inline-block; font-family: helvetica, sans-serif; font-size: 14px; line-height: 22px; color: #333333; margin-right: 120px;}", ".mobile .events { display: block; margin-right: 0; line-height: 16px; font-size: 12px;}", ".rank { font-family: helvetica, sans-serif; font-size: 13px; color: #999999; line-height: 16px; margin-left:18px; vertical-align: top; }", ".mobile .rank { font-size: 11px; }", ".team { font-family: 'Futura Today DemiBold', 'Futura Today Screen', Helvetica, sans-serif; font-size: 13px; font-weight: bolder; line-height: 16px; margin-left:10px; vertical-align: top; }", ".mobile .team { font-size: 12px; }", ".score { font-family: 'Futura Today Bold', 'Futura Today Screen', Helvetica, sans-serif; font-size: 16px; font-weight: bold; float: right; line-height: 16px; vertical-align: top; }", ".mobile .score { font-size: 16px; }", ".flag { vertical-align: top; }", ".winnerArrow { width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right:7px solid #eb1e00; position: absolute; right: -20px; top: 3px;}", ".medals { position: absolute; top: 0; right: 0; }", ".medal { height: 24px; width: 24px; border-radius: 50%; color: #ffffff; vertical-align: middle; text-align: center; display: inline-block; }", ".bronze { background-color: #965a38; }", ".silver { background-color: #a8a8a8; }", ".gold { background-color: #c98910; }", ".letter { display: inline-block; font-size: 11px; line-height: 10px; }", ".fullScheduleButton {background-color: #ffffff; border: solid 1px #e6e6e6; border-radius: 2px;  position: absolute; color: #009bff; font-family: helvetica, sans-serif; font-size: 13px; font-weight: normal; letter-spacing: 0.5px; text-align: center; right: 3%; top: 18px; width: 127px; height: 35px;}", ".mobile .fullScheduleButton {position: relative; width: 100%; right: 0; top: 0; margin-top: 10px;}"],
    construct: function(e, t) {
        var i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            n = e.getElementsByClassName("olympics-schedule-events"),
            l = GidgitsJS.utils.convertNodeListToArray(n),
            d = e.dataset.heading,
            o = !1,
            s = GidgitsJS.utils.isMobile();
        "Schedule & Results" === d && (o = !0);
        var r = document.createElement("div");
        r.classList.add("myBox"), s && r.classList.add("mobile");
        var p = "https://rio16." + location.host.split(".").slice(-2).join(".") + "/olympics-rio-2016/schedule-results",
            c = document.createElement("a");
        c.href = p;
        var m = document.createElement("button");
        m.classList.add("fullScheduleButton"), m.innerText = "Full Schedule", c.appendChild(m);
        var u = document.createElement("div");
        u.classList.add("heading"), u.innerText = d.toUpperCase(), r.appendChild(u);
        for (var g = -1, h = !0, f = 0; f < l.length && "" !== l[f].innerHTML; f++) {
            var b = document.createElement("div");
            b.classList.add("sport-wrap"), f + 1 === l.length && b.classList.add("last"), r.appendChild(b);
            var x = l[f].dataset.date,
                v = document.createElement("div");
            if (v.classList.add("event"), x.includes("2016")) {
                var y = x.split(" "),
                    w = y[2].toString();
                w = w.slice(0, 3) + ":" + w.slice(3), x = y[0] + "T" + y[1] + w;
                var L = new Date(x),
                    k = L.toString().split(" "),
                    E = new Date("August 1, 2016 00:00:00"),
                    T = Math.ceil((L.getTime() - E.getTime()) / 864e5);
                if (T !== g) {
                    g = T;
                    L.getDay(), L.getMonth()
                }
                if (o)(S = document.createElement("div")).classList.add("sport"), S.innerText = l[f].dataset.sport, b.appendChild(S);
                (H = document.createElement("span")).classList.add("olympics-grey");
                var C = "";
                if (k && 4 < k.length) {
                    var M = k[4].toString().split(":");
                    if (12 < parseInt(k[4])) C += parseInt(M[0]) - 12 + ":" + M[1] + " PM";
                    else 12 === parseInt(k[4]) ? C += M[0] + ":" + M[1] + " PM" : 0 === parseInt(k[4]) ? C += "12:" + M[1] + " AM" : C += parseInt(M[0]) + ":" + M[1] + " AM"
                }
                H.innerText = C, v.appendChild(H)
            } else {
                var S, H;
                if (o)(S = document.createElement("div")).classList.add("sport"), S.innerText = l[f].dataset.sport, b.appendChild(S);
                (H = document.createElement("span")).classList.add("olympics-grey"), "Upcoming" !== x && H.classList.add("final"), H.innerText = x, v.appendChild(H)
            }
            var z = document.createElement("span");
            if (z.classList.add("events"), z.innerText = l[f].innerHTML, v.appendChild(z), "true" === l[f].dataset.medalicon) {
                var F = document.createElement("div");
                F.classList.add("medals");
                var D = document.createElement("img");
                D.setAttribute("src", "https://ssl.gannett-cdn.com/appservices/olympics-2016/medal-round-indicator.svg"), D.setAttribute("width", "30"), D.setAttribute("height", "30.6"), D.classList.add("medal-round-img");
                var J = document.createElement("span");
                J.classList.add("medal-round"), J.innerText = "Medal Round", F.appendChild(J), F.appendChild(D), v.appendChild(F)
            }
            if (b.appendChild(v), h) {
                h = !1;
                for (var A = e.getElementsByClassName("innerLi-module"), G = GidgitsJS.utils.convertNodeListToArray(A), N = 0; N < G.length; N++) {
                    var I = G[N];
                    if (I.dataset.country) {
                        var B = document.createElement("div");
                        B.classList.add("participant");
                        var W = document.createElement("img"),
                            R = "https://ssl.gannett-cdn.com/appservices/olympics-2016/world-flags/" + I.dataset.country.replace(/\s/g, "_").toLowerCase() + ".png";
                        W.setAttribute("src", R), W.setAttribute("width", "24"), W.setAttribute("height", "15.8"), W.classList.add("flag"), B.appendChild(W);
                        var P = I.innerHTML.trim().match(/^(\d+)\s(.*?)\s(\d+)$/) || ["", "", ""],
                            O = P[1] || "",
                            U = P[2] || "",
                            _ = P[3] || "",
                            j = document.createElement("span");
                        j.classList.add("rank"), j.innerText = O, B.appendChild(j);
                        var q = document.createElement("span");
                        q.classList.add("team"), q.innerText = U, B.appendChild(q);
                        var V = document.createElement("span");
                        V.classList.add("score"), V.innerText = _, B.appendChild(V);
                        var Y = I.dataset.medal;
                        if ("gold" === Y) {
                            var K = document.createElement("div");
                            K.classList.add("medal"), K.classList.add("gold"), (X = document.createElement("span")).classList.add("letter"), X.innerHTML = "G", K.appendChild(X), B.appendChild(K)
                        } else if ("silver" === Y) {
                            var Z = document.createElement("div");
                            Z.classList.add("medal"), Z.classList.add("silver"), (X = document.createElement("span")).classList.add("letter"), X.innerHTML = "S", Z.appendChild(X), B.appendChild(Z)
                        } else if ("bronze" === Y) {
                            var X, $ = document.createElement("div");
                            $.classList.add("medal"), $.classList.add("bronze"), (X = document.createElement("span")).classList.add("letter"), X.innerHTML = "B", $.appendChild(X), B.appendChild($)
                        }
                        if ("true" === I.dataset.winner && "" === Y) {
                            var Q = document.createElement("span");
                            Q.classList.add("winnerArrow"), B.appendChild(Q)
                        }
                        b.appendChild(B)
                    }
                }
            }
        }
        r.appendChild(c), t(r)
    }
}), GidgitsJS.registerWidgit({
    name: "spike",
    selector: "[gidgit-spike]",
    enabled: !1,
    styles: [".gidgit-desktop{ background: #fff; border-top: 2px solid #f2f2f2; border-bottom: 1px solid #e1e1e1; display: block; }", ".gidgit-spike-anchor { display: block; clear: both; }", ".gidgit-spike-thumbnail{ float: left; padding: 14px; }", ".gidgit-spike-thumbnail img { max-width: 78px; max-height: 60px; display: block; width: 60px; height: 60px; }", "p.gidgit-spike-title { font-size: 75%; color: #009BFF; margin: 0 14px; padding-top: 12px; font-weight:normal; line-height: 120%; text-align: left; }", "p.gidgit-spike-desc { font-size: 100%; color: #666; font-weight: normal; margin: 0 14px 14px 14px; font-family: 'Futura Today Light',Helvetica, Arial; text-align: left; line-height: 120%; }", ".gidgit-mobile { padding: 15px 0px 15px 0px; text-align: left; width: calc(100vw - 40px); margin: 0 auto; }", ".gidgit-spike-desc-mobile { font-family: Futura Today Demi, helvetica; text-decoration: initial; }", ".gidgit-mobile-sibling { padding: 15px 0px 15px 0px; border-width: 1px 0 0 0; border-color: #e5e5e5; border-style: solid; }", ".gidgit-moble-first-sibling { padding: 20px 0px 15px 0px; border: none; }", ".gidgit-moble-last-sibling { padding: 15px 0px 20px 0px; }"],
    construct: function(e, t) {
        var i = "";
        if (e.dataset.thumb && !GidgitsJS.utils.isMobile()) i += '<div class="gidgit-desktop">', i += '<div class="gidgit-spike-thumbnail"><img src="' + e.dataset.thumb + '"></div>', i += '<p class="gidgit-spike-title">' + e.dataset.provider_name.toUpperCase() + "</p>", i += '<p class="gidgit-spike-desc">' + e.dataset.title + "</p>", i += '<div style="clear: both;"></div></div>';
        else if (GidgitsJS.utils.isMobile()) {
            e.className += "mobileSpike";
            var a = null != e.parentElement && null != e.parentElement.parentElement && null != e.parentElement.parentElement.previousElementSibling && null != e.parentElement.parentElement.previousElementSibling.children[0] && null != e.parentElement.parentElement.previousElementSibling.children[0].children[0] && e.parentElement.parentElement.previousElementSibling.children[0].children[0].hasAttribute("gidgit-spike"),
                n = null != e.parentElement && null != e.parentElement.parentElement && null != e.parentElement.parentElement.nextElementSibling && null != e.parentElement.parentElement.nextElementSibling.children[0] && null != e.parentElement.parentElement.nextElementSibling.children[0].children[0] && e.parentElement.parentElement.nextElementSibling.children[0].children[0].hasAttribute("gidgit-spike");
            i += a && n ? '<div class="gidgit-mobile gidgit-mobile-sibling">' : a && !n ? '<div class=" gidgit-mobile gidgit-mobile-sibling gidgit-moble-last-sibling">' : !a && n ? '<div class="gidgit-mobile gidgit-mobile-sibling gidgit-moble-first-sibling">' : '<div class="gidgit-mobile">', i += '<span class="gidgit-spike-desc-mobile ">' + e.dataset.title + "</span>", i += '</div">'
        }
        t(i)
    }
}), GidgitsJS.registerWidgit({
    name: "UW embed",
    selector: "[gidgit-generic-uw]",
    enabled: !0,
    styles: [{
        global: !0,
        includePlatform: ["ios", "ios-oembed", "android", "android-oembed"],
        rules: [".asset{padding: 0; margin:0;}", "iframe{display: block; margin: auto;}"]
    }],
    construct: function(e, t) {
        var i, a = e.attributes,
            n = e.getAttribute("module");
        if (window.ga_data) {
            i = document.createElement(n);
            for (var l = 0; l < a.length; l++) {
                var d = a[l].name;
                "module-path" === a[l].name && (d = "util-module-path"), i.setAttribute(d, a[l].value)
            }
            i.setAttribute("mode", "embed"), i.setAttribute("iframe", "false"), GidgitsJS.utils.isNightMode() && i.classList.add("nightmode"), "DIV" === e.nodeName ? t(i) : (e.parentNode.insertBefore(i, e), e.parentNode.removeChild(e)), window.Gallium && window.Gallium.loadDynamicModules()
        } else {
            var o = e.getAttribute("domain"),
                s = "",
                r = e.hasAttribute("staging");
            s = GidgitsJS.utils.isNative() ? "https://" + (o ? o.replace("uw-media", "www") : "www.usatoday.com") : window.location.toString();
            var p = o ? "https://" + o + "/embed/" + n : "https://uw-media.usatoday.com/embed/" + n;
            r && (p = p.replace("uw-media", "origin-staging-uw-media"));
            var c = ["gidgit-generic-uw", "gidgit-status", "module", "marginheight", "marginwidth", "scrolling", "frameborder", "height", "width", "ratio", "staging"],
                m = "";
            GidgitsJS.utils.isMobile() && e.setAttribute("width", "100%");
            for (l = 0; l < a.length; l++) - 1 === c.indexOf(a[l].name) && (m += ("" === m ? "?" : "&") + a[l].name + "=" + a[l].value);
            if (GidgitsJS.utils.isNightMode() && (m += ("" === m ? "?" : "&") + "class=nightmode"), m += ("" === m ? "?" : "&") + "origin=" + encodeURIComponent(s) + "&iframe=true&no_ads=true", "DIV" === e.nodeName) {
                var u = document.createElement("iframe");
                u.src = p + m, u.width = e.getAttribute("width"), u.height = e.getAttribute("height"), u.marginHeight = "0", u.marginWidth = "0", u.frameBorder = "0", u.scrolling = "no", e.parentNode.insertBefore(u, e), e.parentNode.removeChild(e)
            } else e.setAttribute("src", p + m)
        }
    }
});