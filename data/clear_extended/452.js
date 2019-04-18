/*
 sbmt.js v1.0.1.1
 Copyright (c) 2018 Rakuten.Inc
 Date : 2018-04-06 10:55:02
*/
(function(g) {
    if ("undefined" !== typeof g) {
        var r;
        window.searchplat = window.searchplat || {};
        searchplat.suggest = searchplat.suggest || {};
        r = searchplat.suggest;
        var c, m = 0,
            t = function() {
                this.enable = !1;
                this.logLevel = 4
            },
            n = {
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4
            },
            h = t.prototype;
        h.setEnable = function(a) {
            this.enable = !!a
        };
        h.setLogLevel = function(a) {
            this.logLevel = a && "undefined" !== typeof n[a] ? n[a] : this.logLevel
        };
        h.debug = function(a) {
            this.log(a, "DEBUG")
        };
        h.info = function(a) {
            this.log(a, "INFO")
        };
        h.warn = function(a) {
            this.log(a, "WARN")
        };
        h.error = function(a) {
            this.log(a, "ERROR")
        };
        h.log = function(a, c) {
            var d = c;
            "undefined" === typeof d && (d = n.DEBUG);
            d && "undefined" === typeof n[d] || n[d] < this.logLevel || this.enable && ("undefined" !== typeof console && "function" === typeof console.log) && console.log(a)
        };
        var a, u;
        unescape(String.fromCharCode("0x3000"));
        unescape(String.fromCharCode("0x00A0"));
        unescape(String.fromCharCode("0x3000"));
        unescape(String.fromCharCode("0x00A0"));
        var l = 0;
        a = {
            sParam: {
                sq: "",
                gu: "",
                rid: "",
                sid: "",
                su: "search",
                cl: "",
                ccl: "",
                si: "",
                sfi: -1,
                ss: "",
                sgl: "",
                swgl: "",
                cnl: "",
                asl: "",
                ssl: "",
                sst: -1,
                sn: -1,
                sw: "",
                ge: "",
                op: "",
                ex: "",
                cex: "",
                ab: "",
                abt: "",
                pgl: "",
                pageId: "",
                pgn: "",
                assc: "",
                ref: "",
                fp: ""
            },
            optionList: {},
            ajaxType: "jsonp",
            suggestApiUrl: "https://api.suggest.search.rakuten.co.jp",
            ajaxSubmitLogTimeout: 1E3,
            ratInitWait: 1E3,
            getTimeStamp: function() {
                var a = new Date;
                return a.getFullYear().toString() + ("0" + (a.getMonth() + 1)).slice(-2) + ("0" + a.getDate()).slice(-2) + ("00" + a.getHours()).slice(-2) + ("00" + a.getMinutes()).slice(-2) + ("00" + a.getMilliseconds()).slice(-3)
            },
            deleteSsrCookie: function() {
                var a = document.location.href;
                if (!a) return !0;
                a.match(/http(s|):\/\/[^/$#?]+.rakuten.co.jp\//) ? (u = !0, document.cookie = "ss_r=;domain=.rakuten.co.jp;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT") : rsbmit.rslog.warn("do not delete cookie:domain is not same")
            },
            getSsrV: function(b, c) {
                return b && c ? b + "_" + c + "_" + a.getTimeStamp() : ""
            },
            setSsrCookie: function(a) {
                var f = new Date;
                u ? (f.setMinutes(f.getMinutes() + 1), document.cookie = "ss_r=" + a + ";domain=.rakuten.co.jp;path=/;expires=" + f.toUTCString()) :
                    c.rslog.warn("do not set cookie: domain is not same")
            },
            checkForSend: function() {
                return !a.sParam.cl || !a.sParam.sid || !a.sParam.rid || !a.suggestApiUrl || "undefined" === typeof a.sParam.sst || !a.sParam.pgn ? (c.rslog.debug("parameter check error: cl:" + a.sParam.cl + " sid:" + a.sParam.sid + " rid:" + a.sParam.rid + " suggestApiUrl:" + a.suggestApiUrl + " sst:" + a.sParam.sst + " pgn:" + a.sParam.pgn), !1) : -1 == a.suggestApiUrl.indexOf("api.suggest.search.rakuten.co.jp") ? (c.rslog.warn("api url is invalid:" + a.suggestApiUrl), !1) : !0
            },
            send: function() {
                var b =
                    "",
                    f = (new Date).getTime();
                c.rslog.info("_send start ");
                c.rslog.info((f - m) / 1E3);
                if (!a.checkForSend()) return !0;
                try {
                    var d = a.getSsrV(a.sParam.sid, a.sParam.rid);
                    a.setSsrCookie(d);
                    b = a.createUrl();
                    c.rslog.debug("url:" + b);
                    setTimeout(function() {
                        return !0
                    }, 1E3);
                    var q = (new Date).getTime();
                    c.rslog.info("_send ajax start ");
                    c.rslog.info((q - f) / 1E3);
                    c.rslog.info((q - m) / 1E3);
                    g.ajax({
                        url: b,
                        timeout: a.ajaxSubmitLogTimeout,
                        async: !1,
                        dataType: a.ajaxType,
                        scriptCharset: "urf-8",
                        jsonp: "cb",
                        success: function() {
                            var a = (new Date).getTime();
                            c.rslog.info("_send ajax end ");
                            c.rslog.info((a - q) / 1E3);
                            c.rslog.info((a - m) / 1E3)
                        }
                    })
                } catch (e) {
                    c.rslog.warn(e)
                }
                return !0
            },
            createUrl: function() {
                var b = "",
                    c = "",
                    d = "",
                    b = a.suggestApiUrl + "/submit?sid=" + a.sParam.sid + "&cl=" + a.sParam.cl + "&rid=" + a.sParam.rid + "&q=" + encodeURIComponent(a.sParam.sq) + "&pgl=" + a.sParam.pgl + "&assc=" + a.sParam.assc + "&pgid=" + a.sParam.pageId + "&pgn=" + encodeURIComponent(a.sParam.pgn) + "&ab=" + encodeURIComponent(a.sParam.ab) + "&abt=" + encodeURIComponent(a.sParam.abt) + "&sst=" + a.sParam.sst + "&op=" + encodeURIComponent(a.sParam.op) +
                    "&sn=" + a.sParam.sn + "&sfi=" + a.sParam.sfi + "&si=" + encodeURIComponent(a.sParam.si) + "&ss=" + encodeURIComponent(a.sParam.ss) + "&su=" + a.sParam.su + "&sw=" + a.sParam.sw + "&fp=" + encodeURIComponent(a.sParam.fp) + "&ex=" + encodeURIComponent(a.sParam.ex) + "&ge=" + a.sParam.ge + "&gu=" + a.sParam.gu + "&ccl=" + a.sParam.ccl + "&cex=" + encodeURIComponent(a.sParam.cex),
                    c = "&sgl=" + encodeURIComponent(a.sParam.sgl) + "&swgl=" + encodeURIComponent(a.sParam.swgl) + "&cnl=" + encodeURIComponent(a.sParam.cnl) + "&asl=" + encodeURIComponent(a.sParam.asl) +
                    "&ssl=" + encodeURIComponent(a.sParam.ssl),
                    d = "&ref=" + a.sParam.ref;
                8E3 >= b.length + c.length + d.length ? b = b + c + d : 8E3 >= b.length + d.length && (b += d);
                return b
            },
            getSi: function(a) {
                var c;
                a.isSuggestUse() ? "undefined" !== typeof a.lastSuggestQuery ? c = a.lastSuggestQuery : "" !== a.respInput && (c = a.respInput.toLowerCase()) : c = a.lastInput;
                return c
            },
            setSubmitParamSuggestCommon: function(b) {
                a.suggestApiUrl = b.baseUrl;
                a.sParam.sq = b.input.val().replace(b.spaceRegExp, "");
                a.sParam.sid = b.suggestId;
                a.sParam.cl = b.config.attr(b.configCollection);
                a.sParam.rid = b.sggstReqid;
                a.sParam.sn = b.sggstSelectNum;
                a.sParam.ss = b.usingChar;
                a.sParam.su = b.isSuggestUse() ? 1 : 0;
                a.sParam.sw = b.submitWay;
                a.sParam.fp = b.form.serialize() || "";
                a.sParam.op = a.getOption(b)
            },
            getOption: function(b) {
                return (b = b.config.attr("id")) && a.optionList[b] ? a.optionList[b] : ""
            },
            setSubmitParamsNp: function(b) {
                var f = 0;
                try {
                    a.setSubmitParamSuggestCommon(b);
                    a.sParam.si = a.getSi(b);
                    a.sParam.su && (f = 1);
                    var d;
                    "undefined" !== typeof b.genreSelectBox && "function" === typeof b.genreSelectBox.val && (d = b.genreSelectBox.val(),
                        "undefined" !== typeof b.genreHidden && (a.sParam.gu = b.genreHidden.val(), f = 2));
                    a.sParam.sst = f;
                    a.sParam.ex = b.exParam || "";
                    for (var g = a.sParam.ex.split("&"), b = 0, e = g.length; b < e; b++) {
                        var i = g[b].split("=");
                        "ge" === i[0] && 2 == i.length && (d = i[1])
                    }
                    a.sParam.ge = d
                } catch (p) {
                    return c.rslog.warn("fail setSubmitParamNp"), c.rslog.warn(p), !1
                }
                return !0
            },
            setSubmitParamsPlugin: function(b, f) {
                var d = 0,
                    g = (new Date).getTime();
                c.rslog.info("startSetSubmitParamPlugin");
                try {
                    a.setSubmitParamSuggestCommon(b);
                    a.sParam.si = a.getSi(b);
                    a.sParam.su &&
                        (d = 1);
                    for (var e = 0; e < f.length; e++)
                        if ("swg" == f[e].pluginName) {
                            var i = f[e],
                                p;
                            "undefined" !== typeof i.genreHidden && (a.sParam.gu = i.genreHidden.val(), d = 2);
                            a.sParam.ex = i.exParam || b.exParam || "";
                            p = "undefined" === typeof i.gbUse || 1 == i.gbUse ? i.genreSelectBox.val() : "";
                            for (var k = a.sParam.ex.split("&"), s = 0, l = k.length; s < l; s++) {
                                var h = k[s].split("=");
                                "ge" === h[0] && 2 == h.length && (p = h[1])
                            }
                            a.sParam.ge = p
                        } else if ("cnavi" == f[e].pluginName) {
                        var j = f[e];
                        a.sParam.ccl = j.cnaviCollection ? j.cnaviCollection : a.sParam.cl;
                        a.sParam.cex = j.exParam;
                        j.isCNaviUsed && (d = 3, a.sParam.sq = "", a.sParam.sfi = 1)
                    } else if ("asuraku" == f[e].pluginName) {
                        var m = f[e];
                        m.isAsurakuUsed && (d = 4, a.sParam.sq = m.asurakuText, a.sParam.sfi = 1)
                    } else if ("sgstSs" == f[e].pluginName) {
                        var $supersale = f[e];
                        $supersale.isSupersaleUsed && (d = 5, a.sParam.sq = $supersale.superSaleText, a.sParam.sfi = 1)
                    }
                    a.sParam.sst = d;
                    var n = (new Date).getTime();
                    c.rslog.info((n - g) / 1E3)
                } catch (r) {
                    return c.rslog.warn("fail setSubmitParamPlugin"), c.rslog.warn(r), !1
                }
                return !0
            },
            getSggstListNp: function(b) {
                try {
                    if ("undefined" !==
                        typeof b.selectDiv) {
                        var f = b.selectDiv.attr("data-sgst-idx");
                        if (f) {
                            var d = f.split("_");
                            a.sParam.sfi = d[1]
                        }
                    } else b.isSuggestUse() || (a.sParam.sfi = 0);
                    var q = [],
                        e = 0,
                        i = [];
                    b.suggest.children(":visible").find(".sggstKeyword").each(function(b, c) {
                        if (g(c).text())
                            if ("undefined" !== typeof g(c).children("span").attr("key")) {
                                e++;
                                var d = g(c).attr("data-sgst-idx");
                                f && d == f && (a.sParam.sfi = e);
                                i.push('"' + g(c).children("span").attr("key") + '"')
                            } else q.push('"' + g(c).text() + '"')
                    });
                    a.sParam.swgl = i.join(",");
                    1 == a.sParam.sst && a.sParam.sfi >
                        e && (a.sParam.sfi -= e);
                    a.sParam.sgl = q.join(",")
                } catch (p) {
                    return c.rslog.warn("fail getSggstListNp"), c.rslog.warn(p), !1
                }
                return !0
            },
            getSggstListPlugin: function(b) {
                var f = (new Date).getTime();
                c.rslog.info("start getSggstListPlugin");
                try {
                    if ("undefined" !== typeof b.selectDiv) {
                        var d = b.selectDiv.attr("data-sgst-idx");
                        if (d) {
                            var q = d.split("_");
                            a.sParam.sfi = q[1]
                        }
                    } else b.isSuggestUse() || (a.sParam.sfi = 0);
                    var e = b.suggest.children(":visible"),
                        i = [];
                    e.filter(".sggstRow").each(function(a, b) {
                        i.push('"' + g(b).text() + '"')
                    });
                    a.sParam.sgl = i.join(",");
                    var p = [];
                    e.filter(".swgRow").find(".swgWordRow").each(function(a, b) {
                        p.push('"' + g(b).attr("key") + '"')
                    });
                    a.sParam.swgl = p.join(",");
                    var b = [],
                        k = e.filter(".cnaviRow").find(".cnaviLink");
                    k.attr("href") && b.push('"' + k.attr("href") + '"');
                    a.sParam.cnl = b.join(",");
                    var k = [],
                        h = e.filter(".asurakuRow").find(".asurakuLink");
                    h.attr("href") && k.push('"' + h.attr("href") + '"');
                    a.sParam.asl = k.join(",");
                    var h = [],
                        j = e.filter(".sgstSsRow").find(".supersaleLink");
                    j.attr("href") && h.push('"' + j.attr("href") +
                        '"');
                    a.sParam.ssl = h.join(",")
                } catch (l) {
                    return c.rslog.warn("fail getSggstListPlugin"), c.rslog.warn(l), !1
                }
                e = (new Date).getTime();
                c.rslog.info((e - f) / 1E3);
                c.rslog.info("end getSggstListPlugin");
                return !0
            }
        };
        var h = function() {
                r.rsbmt = this
            },
            j = h.prototype;
        j.init = function() {
            var b = this;
            b.setRatInitWait();
            setTimeout(function() {
                b.setPageInfo();
                l = 1;
                c.rslog.debug("get page info");
                a.deleteSsrCookie();
                l = 2;
                c.rslog.debug("delete cookie")
            }, a.ratInitWait)
        };
        j.setRatInitWait = function(b) {
            b && (b = parseInt(b), a.ratInitWait = !isNaN(b) && 1 <= b && 3E4 >= b ? b : a.ratInitWait)
        };
        j.sendSubmitLog = function(b, f, d) {
            m = (new Date).getTime();
            c.rslog.info("send start:" + l);
            if (3 <= l) return c.rslog.debug("already started:" + l), !0;
            l = 3;
            var g = (new Date).getTime();
            c.rslog.info("end start");
            c.rslog.info((g - m) / 1E3);
            if (!b || "function" !== typeof b) return c.rslog.error("setParamFunc is not function:" + typeof b), !0;
            var e = (new Date).getTime();
            c.rslog.info("end check setParamFunc");
            c.rslog.info((e - g) / 1E3);
            try {
                if (!b(f, d)) return c.rslog.error("fail setParamFunc"),
                    !0;
                var i = (new Date).getTime();
                c.rslog.info("end setParamFunc");
                c.rslog.info((i - e) / 1E3);
                c.rslog.info((i - m) / 1E3);
                a.sParam.pgn || self.setPageInfo();
                var h = (new Date).getTime();
                c.rslog.info("end setPageInfor re-try");
                c.rslog.info((h - i) / 1E3);
                a.send();
                var k = (new Date).getTime();
                c.rslog.info("end send");
                c.rslog.info((k - h) / 1E3);
                c.rslog.info((k - m) / 1E3);
                l = 100;
                c.rslog.info("send end:" + l)
            } catch (j) {
                l = 90, c.rslog.error(j), c.rslog.error("send failure:" + l)
            }
            return !0
        };
        j.setParamNp = function(b) {
            return a.setSubmitParamsNp(b) &&
                a.getSggstListNp(b)
        };
        j.setParamPlugin = function(b, c) {
            return a.setSubmitParamsPlugin(b, c) && a.getSggstListPlugin(b, c)
        };
        j.setPageInfo = function() {
            try {
                var b = g("#ratPageLayout");
                a.sParam.pgl = b && b.val() ? b.val() : "";
                var f = g("#ratAdobeSiteSection");
                a.sParam.assc = f && f.val() ? f.val() : "";
                var d = g("#ratPageName");
                a.sParam.pgn = d && d.val() ? d.val() : "";
                var h = g("#ratAbTest");
                a.sParam.ab = h && h.val() ? h.val() : "";
                var e = g("#ratTestTargeting");
                a.sParam.abt = e && e.val() ? e.val() : "";
                var i = g("#ratAccountId") ? g("#ratAccountId").val() :
                    "",
                    j = g("#ratServiceId") ? g("#ratServiceId").val() : "";
                if (g("#RAT") && g("#RAT").val()) try {
                    if ("undefined" !== typeof JSON) {
                        var k = JSON.parse(g("#RAT").val());
                        a.sParam.ab = k.abtest ? k.abtest : "";
                        a.sParam.abt = k.abtest_target ? JSON.stringify(k.abtest_target) : "";
                        a.sParam.pgl = k.pgl || "";
                        a.sParam.pgn = k.pgn || "";
                        a.sParam.assc = k.assc || "";
                        i = k.acc || i;
                        j = k.aid || j
                    }
                } catch (l) {
                    c.rslog.error("json parse error #RAT"), c.rslog.error(l)
                }
                i && j && (a.sParam.pageId = i + "_" + j);
                try {
                    a.sParam.abt && JSON.parse(a.sParam.abt)
                } catch (m) {
                    a.sParam.abt =
                        "", c.rslog.error("json parse error #RAT"), c.rslog.error(m)
                }
                a.sParam.ref = encodeURIComponent(document.referrer);
                if (!a.sParam.pgn) {
                    var n = (document.location.href || "").match(/https?:\/\/[^\/$#?]+(\/[^$#?]+)?/);
                    n && (a.sParam.pgn = n[1] || "top")
                }
                "1" === i && ("1" === j && "undefined" !== typeof document.getElementById("sc_betaInfo")) && (e = a.sParam.abt ? JSON.parse(a.sParam.abt) : {}, e.ichiba_top = document.getElementById("sc_betaInfo").value, a.sParam.abt = JSON.stringify(e))
            } catch (r) {
                c.rslog.error(r)
            }
        };
        j.getSsrCookieVal = function(b) {
            return b ?
                a.getSsrV(b.sid, b.rid) : ""
        };
        j.setOption = function(b) {
            a.optionList = b
        };
        j.getProgress = function() {
            return l
        };
        c = new h;
        c.rslog = new t;
        g(function() {
            c.init()
        })
    }
})(window.jQuery);