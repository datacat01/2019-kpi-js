var adsLo, atwIntl = 0;
try {
    adsLo = top.location.href
} catch (e) {}
if (!adsLo || null == adsLo) try {
    adsLo = window.location.href
} catch (e) {}
var adsUACH, adsUAC = (adsLo = adsLo || "").search(/atwUAC=/i),
    adsUACD = adsLo.search(/atwUACD=/i),
    atwInfo = 0; - 1 < adsLo.search(/atwInfo=/i) && (atwInfo = 1);
var atwHBR, atwHB = [],
    pbjs = pbjs || {};

function atwHeaderBid() {
    var e = document,
        t = "",
        a = 970,
        d = atwPreBid.mns,
        i = d.length;
    if (atwPreBid.file) {
        var s = e.createElement("script");
        s.type = "text/javascript", s.src = atwPreBid.file;
        try {
            var n = e.getElementsByTagName("head")[0];
            n.insertBefore(s, n.firstChild)
        } catch (e) {
            return 0
        }
    }
    atwPreBid.resizePortrait ? po = "1" : po = adsRePo;
    try {
        e && e.documentElement && (a = e.documentElement.clientWidth)
    } catch (e) {}
    for (var o = 0; o < i; o++) {
        atwHB[o] = {}, atwHB[o].code = d[o].mn;
        try {
            if (d[o].width && (t = d[o].width.toString().toLowerCase()), "rr" == t) atwHB[o].sizes = [
                [300, 250],
                [300, 600],
                [300, 1050]
            ];
            else if ("lb" == t) "1" != po || 970 <= a ? atwHB[o].sizes = [
                [728, 90],
                [948, 250],
                [950, 252],
                [940, 230],
                [101, 1],
                [970, 66],
                [970, 90],
                [970, 250]
            ] : atwHB[o].sizes = [
                [728, 90],
                [948, 250],
                [950, 252],
                [940, 230],
                [101, 1]
            ];
            else if ("mm" == t) atwHB[o].sizes = [
                [300, 250],
                [320, 480],
                [320, 50]
            ];
            else if (t) atwHB[o].sizes = [], atwHB[o].sizes[0] = [], atwHB[o].sizes[0][0] = parseInt(t), atwHB[o].sizes[0][1] = parseInt(d[o].height);
            else if (d[o].sizes) {
                atwHB[o].sizes = [];
                var r = d[o].sizes.length;
                for (j = 0; j < r; j++) atwHB[o].sizes[j] = [], atwHB[o].sizes[j][0] = parseInt(d[o].sizes[j][0]), atwHB[o].sizes[j][1] = parseInt(d[o].sizes[j][1])
            }
        } catch (e) {}
    }
    pbjs.que.push(function() {
        try {
            for (var e, t = atwHB.length, a = 0; a < t; a++)
                if ((e = atwHB[a]).bids || (e.bids = []), e.code = String(e.code), pbjs.acPIDsByCode && e.code in pbjs.acPIDsByCode && (pbjs.mpnwid && (e.bids = e.bids.concat({
                        bidder: "onedisplay",
                        params: {
                            network: pbjs.mpnwid,
                            placement: pbjs.acPIDsByCode[e.code],
                            alias: e.code
                        }
                    })), pbjs.acBidsByCode && e.code in pbjs.acBidsByCode && (e.bids = e.bids.concat(pbjs.acBidsByCode[e.code])), pbjs.acBidsBySize && e.sizes)) {
                    "object" != typeof e.sizes[0] && (e.sizes = [e.sizes]);
                    var d = String(e.sizes);
                    d in pbjs.acBidsBySize && (e.bids = e.bids.concat(pbjs.acBidsBySize[d]));
                    var i = e.sizes.length;
                    if (1 < i)
                        for (var s = 0; s < i; s++)(d = String(e.sizes[s])) in pbjs.acBidsBySize && (e.bids = e.bids.concat(pbjs.acBidsBySize[d]))
                }
        } catch (e) {}
    }), pbjs.que.push(function() {
        try {
            pbjs.addAdUnits(atwHB), pbjs.requestBids({
                timeout: pbjs.acTimeout,
                bidsBackHandler: atwHBBidComplete
            })
        } catch (e) {}
    });
    setTimeout(atwHBBidComplete, 1500, "timeout")
}

function atwHBLoaded(e) {
    var t, a = adsDivs.length;
    for (t = 0; t < a; t++)
        if (adsDivs[t].mn == e) return t;
    return -1
}

function atwHBDivsLoaded(e) {
    var t, a = atwHB.length;
    for (t = 0; t < a; t++)
        if (atwHB[t].code == e) return t;
    return -1
}

function atwHBRefreshBids(e) {
    pbjs.que.push(function() {
        pbjs.requestBids({
            adUnitCodes: e,
            timeout: pbjs.acRefreshTimeout,
            bidsBackHandler: function(e) {}
        })
    })
}

function atwHBPixel(e) {
    document.createElement("img").setAttribute("src", e + ";cb=" + (new Date).getTime())
}

function atwHBBidComplete(e) {
    new Date;
    var t, a, d = atwHB.length;
    for (atwHBR = "c", a = 0; a < d; a++) try {
        0 <= (t = atwHBLoaded(atwHB[a].code)) && 0 == adsDivs[t].adLoaded && (!adsSyncDelay || 1 == adsDivs.length || adsLoadSync ? adsDivs[t].LoadAd() : (adsDivs[t].delayed = 1, adsSyncTime || (adsSyncTime = setTimeout(adsLoadedSync, adsSyncDelay))))
    } catch (e) {}
}

function atwPreBidCheck(e) {
    for (var t = atwHB.length, a = 0; a < t; a++)
        if (atwHB[a].code == e) return !0;
    return !1
}

function adsLoadUAC() {
    var e, t;
    if (0 < adsUAC ? t = adsLo.substring(adsUAC + 7, adsLo.length).replace(/&.*$/, "").split(/\||;/) : 0 < adsUACD && (t = adsLo.substring(adsUACD + 8, adsLo.length).replace(/&.*$/, "").split(/\||;/)), adsUACH = t[1] && "s" == t[1] ? "//s.aolcdn.com/ads/" : "//scdn.uc.atwola.com/ads/", e = unescape(t[0]), /^[A-Za-z]+$/.test(unescape(e)))
        if (0 < adsUACD) {
            var a = document.createElement("script");
            a.src = adsUACH + e + ".js", document.body.appendChild(a)
        } else 0 < adsUAC && document.write('<script type="text/javascript" src="' + adsUACH + e + '.js"></scr', "ipt>")
}
if (pbjs.que = pbjs.que || [], (0 < adsUAC || 0 < adsUACD) && !window.adsUACH) adsLoadUAC();
else {
    window.atwPreBid && window.atwPreBid.mns && atwHeaderBid(), window.atwUAC = window.atwUAC || {}, atwUAC.adsInfo = atwUAC.adsInfo || {};
    var adsUK, adsEAN, adsMNS, adsSz, adsIE, adsCA, adsNt = "",
        adsPl = "",
        adsLMN = new Array,
        adsTacOK = 1,
        adsEANArr = {},
        adsAlias = 1,
        adsHt = "",
        adsATOth = "",
        adsTp = "J",
        adsD = new Date,
        aolAdFdBkStr = "",
        adsAddOn = 1,
        adsAJAXAddOn = 0,
        adsVal = "",
        adsCp = 0,
        adsExcV = "",
        adsLNm = 0,
        adsKV = "",
        adsFileless = 0,
        adsUA = navigator.userAgent.toLowerCase(),
        adsIELT10 = 0,
        adsTile = 1,
        adsPage = "",
        adsDivs = [],
        adsCF = [],
        adsCW = [],
        adsCH = [],
        adsCAd = [],
        adsScr = adsD.getTime() % 1e9,
        adsRRDevil = "",
        adsRRCalled = "",
        adsDev = void 0 !== window.onorientationchange ? "1" : "0",
        atwLoaded = 0,
        atwReset = 0,
        atwAdBlock = 0;

    function atwVisCh() {
        document[atwUAC.hidden] ? atwUAC.browsHid = 1 : atwUAC.browsHid = 0
    }

    function atwGetVisiblePct(e) {
        var t = e.offsetHeight,
            a = e.getBoundingClientRect(),
            d = a.right - a.left,
            i = a.bottom - a.top,
            s = 0 <= a.top && Math.min(window.innerHeight, a.bottom) - a.top,
            n = 0 <= a.left && Math.min(window.innerWidth, a.right) - a.left;
        return s = s || a.bottom, n = n || a.right, s < 0 || n < 0 || 0 === t ? 0 : 0 === i || 0 === d ? 0 : 100 * n * s / (d * i)
    }

    function adsReloadServer(e, t) {
        try {
            var a = document.getElementById(e.ifr);
            if (e.rMN && 0 == atwUAC.browsHid && 1 == atwUAC.focus && 1 != a.mouseIn && 50 <= atwGetVisiblePct(e)) {
                var d = e.adURL;
                if (d) {
                    var s = adsDevilAd.ad[e.adNum + 1].width,
                        n = adsDevilAd.ad[e.adNum + 1].height;
                    if ((970 <= parseInt(s) || 600 <= parseInt(n)) && (e.rMN = e.rMNL), 1 != e.rTimes && e.origMN || (e.origMN = e.mn), e.mn = e.rMN, e.rMN)
                        if (t) {
                            var o = [],
                                r = atwHB.length;
                            if (o[0] = e.rMN, 1 == e.rTimes)
                                if (atwHB[r] = {}, atwHB[r].code = e.rMN, e.keepSize) atwHB[r].sizes = {}, atwHB[r].sizes[0] = {}, atwHB[r].sizes[0][0] = parseInt(s), atwHB[r].sizes[0][1] = parseInt(n);
                                else {
                                    var l, c = e.sz.split(",");
                                    atwHB[r].sizes[m] = [];
                                    for (var m = 0; m < c.length; m++) l = c[m].split("x"), atwHB[r].sizes[m] = [], atwHB[i].sizes[m][0] = parseInt(l[0]), atwHB[i].sizes[m][1] = parseInt(l[1]);
                                    atwHB[r].sizes = e.sz.split(",")
                                } atwHBRefreshBids(o)
                        } else d = d.replace(/alias=(.*?);/, "alias=" + e.rMN + ";").replace(/kvmn=(.*?);/, "kvmn=" + e.rMN + ";kvorigmn=" + e.origMN + ";"), e.keepSize && "N" != e.keepSize && "n" != e.keepSize && adsDevilAd.ad[e.adNum + 1] && s && n && (-1 != d.indexOf("allowedSizes=") ? d = d.replace(/allowedSizes=.*?;/, "size=" + s + "x" + n + ";") : -1 == d.indexOf("size=") && (d = d.replace(/\/0\/-1\//, "/0/-1/size=" + s + "x" + n + ";")), e.w = s, e.h = n), e.rTimes++, e.adURL = d, e.col = 0, e.LoadAd()
                }
            }
            e.rMN && e.rTimes <= e.rMax && !t && (e.timeout = setTimeout(function() {
                adsReloadServer(e)
            }, e.rTime), atwPreBidCheck(e.mn) && (e.timeoutHB = setTimeout(function() {
                adsReloadServer(e, "hb")
            }, e.rTime - 3e3)))
        } catch (e) {}
    }

    function adsRotateMult(e, t, a, d) {
        var i = adsGetObj(e);
        i && (adsRotateTime ? i.rTime = 1e3 * parseInt(adsRotateTime) : t && (i.rTime = 1e3 * parseInt(t)), a && (i.rMax = parseInt(a)), d && (i.keepSize = 1), i.rTimes || (i.rTimes = 1), i.rotate = 1, i.timeout && (clearTimeout(i.timeout), i.rTimes <= i.rMax && (i.timeout = setTimeout(function() {
            adsReloadServer(i)
        }, i.rTime), atwPreBidCheck(i.mn) && (i.timeoutHB = setTimeout(function() {
            adsReloadServer(i, "hb")
        }, i.rTime - 3e3)))))
    }

    function adsDisableSandbox() {
        atwUAC.sandbox = 0
    }

    function adsEnableSandbox() {
        atwUAC.sandbox = 1
    }
    adsEAN = 1 == atwIntl ? (adsNt = "1065.1", adsPl = "2590140", adsUK = 1, 0) : (adsNt = "5113.1", adsPl = "221794", adsUK = "us", 1), (-1 < adsUA.indexOf("mobile") || /android|iphone|ipad|playbook|hp-tablet|kindle|silk|webos|blackberry|opera mini/i.test(navigator.appVersion)) && (adsDev = "1"), atwUAC.browsHid = 0, atwUAC.rSetup = 0, atwUAC.focus = 1;
    var adsFilelessFlag = "";

    function adsDisableFileless(e) {
        adsFilelessFlag = e
    }

    function adSetMOAT(e) {
        if (e && "0" != e && 0 == atwIntl) {
            var t = document,
                a = t.createElement("script"),
                d = t.getElementsByTagName("head")[0];
            a.src = "//s.aolcdn.com/ads/moatuac.js", d.appendChild(a)
        }
    }
    var adsLoadSync = 0,
        adsSyncTime = "",
        adsSyncDelay = 0,
        adsRePo = "0";

    function adsResizePortrait(e) {
        adsRePo = e
    }

    function adSetSpaceId(e) {
        e && (atwUAC.spaceid = e)
    }

    function adSetSyncDelay(e) {
        adsSyncDelay = e ? parseInt(e) : 200
    }

    function adsLoadedSync() {
        for (var e, t = adsDivs.length, a = 0; a < t; a++) 1 != (e = adsGetObj(adsDivs[a])).textAd && 1 != e.iframe && e.delayed && e.LoadAd();
        adsLoadSync = 1
    }

    function atwInfoFn() {
        try {
            for (var e, t, a, d, i, s, n, o, r, l, c, m, p, h, u, w = "", f = "</td><td>", v = '<style>table,.tableClass{border:solid 1px;}</style><table class="tableClass" width="100%" border=1><tr align="left"><th>Ad #</th><th>Magic Number</th><th>Orig Width</th><th>Orig Ht</th><th>Dyn Size</th><th>Actual Width</th><th>Actual Ht</th><th>AdId</th><th>MNUM</th><th>Format</th><th>SeqId</th><th>timeStamp</th><th>Devil Flag</th><th>Ad Call Type</th><th>Parms Sent</th><th>Div Name</th><th>InView</th><th>Rotate Time</th><th>Rotate Max</th><th>Keep Size</th></tr>', g = 1; g < adsTile; g++) c = l = r = o = n = s = i = d = a = t = e = "n/a", dn = "n/a", iv = "n/a", rT = "n/a", rM = "n/a", rK = "n/a", atwUAC.adsInfo[g] && ((p = atwUAC.adsInfo[g]).sz && (t = p.sz), p.ttype && (r = p.ttype), p.other && (o = p.other), adsDevilAd.ad[g] && ((m = adsDevilAd.ad[g]).adId && (a = m.adId), m.mnum && (d = m.mnum), m.aolFormat && (i = m.aolFormat), m.seqId && (s = m.seqId), m.timeStamp && (n = m.timeStamp), m.width && (l = m.width), m.height && (c = m.height), m.aolDevilFlag && "undefined" != m.aolDevilFlag && (e = m.aolDevilFlag), m.rTime && (rT = parseInt(m.rTime) / 1e3), m.rMax && (rM = m.rMax), m.keepSize && (rK = m.keepSize)), dn = atwUAC.adsInfo[g].dv, iv = atwUAC.adsInfo[g].inV, v += "<tr><td>" + g + f + p.mn + f + p.origW + f + p.origH + f + t + f + l + f + c + f + a + f + d + f + i + f + s + f + n + f + e + f + r + f + o + f + dn + f + iv + f + rT + f + rM + f + rK + "</td></tr>");
            v += '</table><div align="left">';
            for (g = 1; g < adsTile; g++) u = h = "", atwUAC.adsInfo[g] && (w = (p = atwUAC.adsInfo[g]).url.replace(/addyn/, "adiframe"), adsDevilAd.ad[g] && ((m = adsDevilAd.ad[g]).adId && (h = m.adId.split("|")[0]), u = m.bId, h && u && (w = w.replace(/;grp=/, ";adid=" + h + ";bnid=" + u + ";grp="))), v += "URL for Ad " + g + " " + w + ' <a href="' + w + '" target=_blank>Click to View Ad</a><P>');
            v += "</div>", window.open("", "atwInfoWin", "resizable=yes,status=no,toolbar=no,location=no,menubar=no,status=no,titlebar=no,scrollbar=yes").document.write(v)
        } catch (e) {}
    }
    var atwSizeMsgFn, atwSizeMsgCount = 0;

    function atwSizeMsg(e) {
        var t, a, d = 0,
            i = 0,
            s = 0;
        if (e || (10 < atwSizeMsgCount ? clearInterval(atwSizeMsgFn) : (atwSizeMsgCount++, d = 1)), e || 1 == d) {
            try {
                document && document.documentElement && (i = document.documentElement.clientWidth, s = document.documentElement.clientHeight)
            } catch (e) {}
            a = "aolResize;width=" + i + ";height=" + s + ";counter=" + atwSizeMsgCount, e && (a += ";reorient");
            for (var n = 0; n < adsTile; n++)(t = document.getElementById("adsF" + n)) && 1200 == t.width && 800 == t.height && (t = t.contentWindow).postMessage(a, "*")
        }
    }

    function adsTacFn() {
        if (atwLoaded = 1, "1" == adsDev && (atwSizeMsgFn = setInterval(atwSizeMsg, 1e3)), atwInfo && (x = setTimeout("atwInfoFn()", 3e3)), 1 == adsTacOK)
            if ("noCall" == atwUAC.gdprRet && "called" != atwUAC.tacFn) atwUAC.tacFn = "call";
            else {
                atwUAC.tacFn = "called";
                var e, t, a = document;
                if ((e = a.createElement("iframe")).setAttribute("itemscope", ""), e.setAttribute("itemtype", "https://schema.org/WPAdBlock"), e.style.display = "none", e.id = "adTacFr", e.name = e.id, e.style.width = "0px", e.style.height = "0px", t = "&atwIntl=", t += 1 == atwIntl ? "1" : "0", adsATOth) t += "&" + adsATOth.replace(/;/g, "&"); - 1 != atwUAC.gdprRet.toString().indexOf("noC") || "0" != atwUAC.gdpr && "1" != atwUAC.gdpr || (t += "&gdpr=" + atwUAC.gdpr, atwUAC.gdprC && null != atwUAC.gdprC && (t += "&gdprC=" + atwUAC.gdprC)), e.src = "//cdn.at.atwola.com/_media/uac/tcode3.html#" + t, a.body.appendChild(e)
            }
    }

    function adsDisableTacoda(e) {
        (!e || e && -1 == e.indexOf("rtb")) && (adsTacOK = 0)
    }

    function atwGDPRDelay(e) {
        clearTimeout(atwUAC.GDPRTimeout), e && -1 < e.indexOf("timeout") && "noCall" == atwUAC.gdprRet && (atwUAC.gdprRet = "noCallTimeout"), 1 == adsTacOK && "call" == atwUAC.tacFn && adsTacFn();
        var t, a = adsDivs.length,
            d = ""; - 1 != atwUAC.gdprRet.toString().indexOf("noC") || "0" != atwUAC.gdpr && "1" != atwUAC.gdpr || (d += "gdpr=" + atwUAC.gdpr + ";", atwUAC.gdpr && "0" != atwUAC.gdpr && null != atwUAC.gdprC && (d += "euconsent=" + atwUAC.gdprC + ";"));
        for (var i = 0; i < a; i++) 1 != (t = adsGetObj(adsDivs[i])).adLoaded && (0, t.adURL = t.adURL.replace(/noperf=1;/, "noperf=1;" + d), t.LoadAd())
    }

    function atwGDPR() {
        atwUAC.gdprRet = "noCall";
        try {
            window.__cmp ? (atwUAC.GDPRTimeout = setTimeout(function() {
                atwGDPRDelay("timeout")
            }, 500), window.__cmp("getConsentData", null, function(e, t) {
                atwUAC.gdprRet = t ? (atwUAC.gdpr = e.gdprApplies ? "1" : "0", atwUAC.gdprC = e.consentData, "success") : "noCMPFail", atwGDPRDelay()
            })) : (atwUAC.gdprRet = "noCMP", atwGDPRDelay())
        } catch (e) {
            atwUAC.gdprRet = "noCMPCatch", atwGDPRDelay()
        }
    }

    function adUACInit() {
        var e = window;
        atwGDPR();
        try {
            document.readyState && "complete" == document.readyState ? adsTacFn() : (e.addEventListener ? e.addEventListener("load", adsTacFn, !1) : e.attachEvent && e.attachEvent("onload", adsTacFn), setTimeout(function() {
                atwLoaded = 1
            }, 4e3))
        } catch (e) {}
        try {
            e.addEventListener ? e.addEventListener("orientationchange", function() {
                atwSizeMsg("1")
            }, !1) : e.attachEvent && e.attachEvent("onorientationchange", function() {
                atwSizeMsg("1")
            })
        } catch (e) {}
        var t, a = adsLo.search(/atwcrpr=/i),
            d = adsLo.toLowerCase();
        if (adsIE = "Microsoft Internet Explorer" == navigator.appName || -1 < adsUA.indexOf("trident/")) {
            var i = document.documentMode;
            i && i <= 9 && (adsIELT10 = 1)
        }
        if (0 < a) {
            adsCA = adsLo.substr(a + 8).split(/\||;/), adsCp = 1;
            for (var s = adsCA.length, n = 0, o = 0; n < s; n += 4, o++) adsCF[o] = adsCA[n], adsCW[o] = adsCA[n + 1], adsCH[o] = adsCA[n + 2], adsCAd[o] = adsCA[n + 3]
        }
        if (adsMNS = /(\?|&)atwmn=(.*?)(&|$)/.test(d) ? RegExp.$2.split(/\||;/) : "", /^[0-9A-Za-z,-.]+$/.test(unescape(adsMNS)) || (adsMNS = ""), adsKV = /(\?|&)atwkv=(.*?)(&|$)/.test(d) ? escape(RegExp.$2) : "", /^[0-9A-Za-z,;=-_]+$/.test(unescape(adsKV)) || (adsKV = ""), adsKV) {
            var r, l = unescape(adsKV).split(";"),
                c = "";
            for (n = 0; n < l.length; n++) 2 == (r = l[n].split("=")).length && (0 != r[0].indexOf("kv") && (c += "kv"), c += encodeURIComponent(r[0]) + "=" + encodeURIComponent(r[1]) + ";");
            adsKV = c
        }
        adsKV && ";" != adsKV[adsKV.length - 1] && (adsKV += ";"), adsExcV = /(\?|&)atwexc=(.*?)(&|$)/.test(d) ? RegExp.$2 : "", (t = /(\?|&)atwip=(.*?)(&|$)/.test(d) ? RegExp.$2 : "") && /^[0-9\.]+$/.test(unescape(t)) && (adsATOth += "ip=" + t + ";"), adsSZ = /(\?|&)atwsz=(.*?)(&|$)/.test(d) ? RegExp.$2.split(/\||;/) : "", /^[0-9A-Za-z,]+$/.test(unescape(adsSZ)) || (adsSZ = ""), adsFileless = /(\?|&)atwfileless=(.*?)(&|$)/.test(d) ? 1 : 0, adsRotateTime = /(\?|&)atwrotatetime=(.*?)(&|$)/.test(d) ? RegExp.$2 : "", atwUAC.sandbox = /(\?|&)atwsandbox=(.*?)(&|$)/.test(d) ? RegExp.$2 : ""
    }

    function adsCkCol(e, t, a) {
        try {
            var d = document.getElementById(e.divName),
                i = t.getElementById("adDiv").innerHTML,
                s = 0;
            "timeout" == a && i.indexOf("aolAdId") < 0 && (s = 1);
            var n = -1 != i.indexOf("AOL - HTML - Blank HTML Ad") || -1 != i.indexOf("ATCollapse.gif");
            if (1 == adsEAN && !s && !n) {
                var o = e.parentNode;
                e.comment = 1, e.ean && 2 != e.ean && !("61" == e.w && "21" == e.h || "290" == e.w && "18" == e.h || "386" == e.w && "280" == e.h) && (e.ean = 2, (!o.keepSize || o.rTimes <= 1) && adsWriteEAN(o, e, i))
            }
            return d && d.col && (s || n || (e.width = e.w, e.height = e.h, e.style.display = "inline", e.style.visibility = "visible")), n ? (e.style.width = "0px", e.style.height = "0px", d.width = 0, d.height = 0, e.style.display = "none", adsDevilObj(e.divName, "1", "1", e, t, "1"), !0) : (1 == d.rotate && 1 != d.rCalled && adsGetRotate(d, i), s || 1 == e.textAd || !d || d.dynSz || adsDevilObj(e.divName, e.w, e.h, e, t, "0"), !1)
        } catch (e) {
            return !1
        }
    }

    function adsGetRotate(e, t) {
        var a, d = 1,
            i = "";
        if (i = /RefreshSmall=(.*?)(\n)/i.test(t) ? RegExp.$1 : "", a = /RefreshLarge=(.*?)(\n)/i.test(t) ? RegExp.$1 : "", i || (i = /RefreshMN=("|')(.*?)("|')/i.test(t) ? RegExp.$2 : ""), i) {
            var s = /RefreshExclusive=(.*?)(\n)/i.test(t) ? RegExp.$1 : "",
                n = /RefreshReserved=(.*?)(\n)/i.test(t) ? RegExp.$1 : "",
                o = /var MP=(.*?)(\n)/i.test(t) ? RegExp.$1 : "",
                r = /AdTypePriority=(.*?)(\n)/i.test(t) ? parseInt(RegExp.$1) : "";
            ("N" == s && "N" == o && 493 <= r || "N" == n && "N" == o && 200 <= r && r < 493) && (d = 0), e.rCalled = 1
        } else if (!/RefreshSmall=/i.test(t)) setTimeout(function() {
            adsGetRotate(e, t)
        }, 500);
        d && i && (e.rMN = i, a && (e.rMNL = a), e.rTime || (e.rTime = /RefreshTime=(.*?)(\n)/i.test(t) ? 1e3 * parseInt(RegExp.$1) : 3e4), e.rTime || (e.rTime = 3e4), e.rMax || (e.rMax = /RefreshMax=(.*?)(\n)/i.test(t) ? parseInt(RegExp.$1) : "5"), e.keepSize || (e.keepSize = /RefreshKeepSize=(.*?)(\n)/i.test(t) ? RegExp.$1 : ""), e.timeout ? (clearTimeout(e.timeout), e.rTimes <= e.rMax && (e.timeout = setTimeout(function() {
            adsReloadServer(e)
        }, e.rTime), atwPreBidCheck(e.mn) && (e.timeoutHB = setTimeout(function() {
            adsReloadServer(e, "hb")
        }, e.rTime - 3e3)))) : (e.timeout = setTimeout(function() {
            adsReloadServer(e)
        }, e.rTime), atwPreBidCheck(e.mn) && (e.timeoutHB = setTimeout(function() {
            adsReloadServer(e, "hb")
        }, e.rTime - 3e3))), 0 == atwUAC.rSetup && (atwUAC.rSetup = 1, window.addEventListener && (window.addEventListener("focus", function() {
            atwUAC.focus = 1
        }, !1), window.addEventListener("blur", function() {
            atwUAC.focus = 0
        }, !1)), void 0 !== document.hidden ? (atwUAC.hidden = "hidden", atwUAC.visCh = "visibilitychange") : void 0 !== document.msHidden ? (atwUAC.hidden = "msHidden", atwUAC.visCh = "msvisibilitychange") : void 0 !== document.webkitHidden && (atwUAC.hidden = "webkitHidden", atwUAC.visCh = "webkitvisibilitychange"), void 0 !== document[atwUAC.hidden] && document.addEventListener && document.addEventListener(atwUAC.visCh, atwVisCh, !1)))
    }

    function atwDisplayText(e, t, a) {
        var d = adsGetObj(e).getElementsByTagName("iframe")[0],
            i = d.contentWindow.document;
        t = t ? parseInt(t) : 2, t *= 1e3 / (a = a ? parseInt(a) : 100), i.readyState && "complete" == i.readyState || d.textAdDelay > t ? (d.textAdDelay = 0, adsDoOnL(d, i, "1")) : (d.textAdDelay++, setTimeout(function() {
            return atwDisplayText(e)
        }, a))
    }

    function adsDoOnL(e, t, a) {
        if (e && (0 == e.textAdDelay || a) && !adsCkCol(e, t) && e.divName) {
            var d, i, s = t.getElementById("adDiv").innerHTML,
                n = s.indexOf("\x3c!--"),
                o = "top:0;right:0;";
            if (0 < n) {
                var r, l, c, m = s.substr(n, s.length),
                    p = [];
                for (l = /aolTXT(.*?)[1-9]=["'](.*?)["']/gi; u = l.exec(m);) p.push(u[1]), p.push(u[2]);
                c = p.length;
                for (var h = 0; h < c; h += 2) p[h + 1] && ("js" == p[h] || "JS" == p[h] ? ((r = document.createElement("script")).type = "text/javascript", r.src = p[h + 1], document.body.appendChild(r)) : "imp" != p[h] && "IMP" != p[h] || ((r = document.createElement("img")).src = p[h + 1]))
            }
            if (s.indexOf("TextVendor") < 0 && s.indexOf("TextCustom") < 0) {
                if (0 < n) {
                    m = s.substr(n, s.length);
                    var u, w = document.getElementById(e.divName);
                    if (u = e.contentWindow.adComRedirect) adSetupDiv(e.w, e.h, u, e.divName, e.src, "text", e.mn, "0", "0", "0", e.fileless), adsDivs[adsDivs.length - 1].LoadAd();
                    else {
                        var f = "",
                            v = 0;
                        m = m.replace(/\<img src=(.*?)width=\"1px\" height=\"1px\"(.*?)>/gi, ""), 1 == adsEAN && (e.ean && !("61" == e.w && "21" == e.h || "290" == e.w && "18" == e.h || "386" == e.w && "280" == e.h) && (f += '<div style="position:relative;">', v = 1), f += m, v && (adsEANArr[e.divName] && (o = adsEANArr[e.divName]), f += '<a style="position:absolute;' + o + 'z-index:4999;" href="http://adinfo.aol.com/" target="_blank">', f += '<img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;margin:0px;width:19px;height:15px;vertical-align:top;" border=0 alt="AdChoices">', f += "</a></div>"), m = f), w.innerHTML = m, adsDevilObj(e.divName, e.w, e.h, e, t, "0")
                    }
                }
            } else i = /aolsize=[ ]?["']([\d]*?)\|([\d]*)["']/i.test(s) ? (d = unescape(RegExp.$1), unescape(RegExp.$2)) : (d = e.w, e.h), -1 < s.indexOf("TextCustom") && (e.style.width = d + "px", e.style.height = i + "px", e.style.display = "block", e.style.visibility = "visible"), adsDevilObj(e.divName, d, i, e, t, "1")
        }
    }

    function adSetNetId(e) {
        "517" == e && (e = "1065.1"), adsNt = e, 1 == atwIntl && "1065.1" != e && (adsAlias = adsUK = 0)
    }

    function adSetPlId(e) {
        adsPl = e
    }

    function adSetHtNm(e) {
        var t = location.protocol;
        "/" == (adsHt = /^https?/i.test(e) ? e : /^\/\//.test(e) ? t + e : t + "//" + e).charAt(adsHt.length - 1) && (adsHt = adsHt.substring(0, adsHt.length - 1))
    }

    function adSetHtNmAT(e) {
        var t = location.protocol;
        "/" == (adsHt = /^https?/i.test(e) ? e : /^\/\//.test(e) ? t + e : t + "//" + e).charAt(adsHt.length - 1) && (adsHt = adsHt.substring(0, adsHt.length - 1))
    }

    function adSetOthAT(e, t) {
        if (adsUACH && 0 < adsUACD) var a = setTimeout(adsATWDelay, 3e3, arguments.callee.name, arguments);
        else if (t && (adsATOth = ""), e) {
            ";" != e.charAt(e.length - 1) && (e += ";");
            var d, s, o, r = (a = e.split(";")).length;
            for (i = 0; i < r - 1; i++) "=" != a[i].charAt(a[i].length - 1) && (d = a[i].indexOf("="), s = a[i].substring(0, d), o = a[i].substring(d + 1, a[i].length), "kvrefd" == s && 0 < o.indexOf("ncid=") && (n = e.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/), adsATOth += "kvncid=" + RegExp.$1 + ";"), adsATOth += encodeURIComponent(s) + "=" + encodeURIComponent(o) + ";")
        } else "" == e && (adsATOth = "")
    }

    function adSetAddOn(e) {
        2 != adsAddOn && (adsAddOn = parseInt(e))
    }

    function adSetAJAXAddOn(e) {
        adsAJAXAddOn = e
    }

    function adSetType(e) {
        "" == e && (e = "J"), adsTp = e.toUpperCase()
    }

    function adSetAdURL(e) {
        "fileless" == e ? adsFileless = 1 : 1 == adsFileless && (e = "fileless"), adsPage = e
    }

    function adsResetPg() {
        adsTile = 1, adsDivs = [], adsD = new Date, adsScr = adsD.getTime() % 1e9, atwReset = adsAddOn = 1, adsRRDevil = adsATOth = "", aol_devil_flag = ""
    }

    function adsReloadAll() {
        adsD = new Date;
        for (var e = adsDivs.length, t = 0; t < e; t++) adsReloadAd(adsDivs[t], "", "all")
    }

    function adsReloadAd(e, t, a) {
        "all" != a && (adsD = new Date);
        var d = adsGetObj(e),
            i = d.adURL,
            s = adsD.getTime() % 1e9,
            n = 0;
        try {
            if (d.rTimes && d.rTimes > d.rMax && (n = 1), i && !n) {
                t && (i = i.replace(/alias=(.*?);/, "alias=" + t + ";").replace(/kvmn=(.*?);/, "kvmn=" + t + ";"));
                var o = i.indexOf(";grp="),
                    r = "";
                r = (r = -1 == o ? i.replace(/ /, "") + " " : i.substring(0, o + 5) + s).replace(/kvgrp=[0-9]*;/, "kvgrp=" + s + ";"), d.adURL = r, d.LoadAd(), d.rTimes && d.rTimes++, d.timeout && (clearTimeout(d.timeout), d.timeout = setTimeout(function() {
                    adsReloadServer(d)
                }, d.rTime), atwPreBidCheck(dv.mn) && (dv.timeoutHB = setTimeout(function() {
                    adsReloadServer(dv, "hb")
                }, dv.rTime - 3e3)))
            }
        } catch (e) {}
    }

    function adsReloadIframe(e, t, a) {
        var d, i = "",
            s = "",
            n = !1;
        try {
            if ((i = 1 == adsIntl ? (d = "all" != a && -1 == e.indexOf("adsF") ? "adsF" + e : e, document.getElementById(d)) : document.getElementById(e)) && ("all" != a && (adsD = new Date), s = i.src)) {
                t && adsUK && (s = s.replace(/alias=(.*?);/, "alias=" + t + ";").replace(/kvmn=(.*?);/, "kvmn=" + t + ";"));
                var o = adsD.getTime() % 1e9,
                    r = s.indexOf(";grp="),
                    l = "";
                l = (l = -1 == r ? s.replace(/ /, "") + " " : s.substring(0, r + 5) + o).replace(/kvgrp=[0-9]*;/, "kvgrp=" + o + ";"), i.src = l, n = !0
            }
        } catch (e) {}
        if (1 == adsIntl) return n
    }

    function adSetNoAlias() {
        adsUK || (adsAlias = 0)
    }

    function adSetAlias(e) {
        adsUK || (adsAlias = e)
    }

    function adsGetAdURL(e) {
        return e.frameElement.parentNode.adURL
    }

    function adsDevilObj(e, t, a, d, i, s) {
        var n = document.getElementById(e),
            o = n.adNum + 1,
            r = "";
        try {
            r = i.getElementById("adDiv").innerHTML
        } catch (e) {}
        if (!r) try {
            r = (d.contentDocument || d.contentWindow.document).body.innerHTML
        } catch (e) {}
        var l, c = /mnum=(.*?)\//i.test(r) ? RegExp.$1 : "",
            m = /aolAdId=("|')(.*?)("|')/i.test(r) ? RegExp.$2 : "|",
            p = /zMoatBannerID=(.*?)(\n)/i.test(r) ? RegExp.$1 : "",
            h = /aolFormat=("|')(.*?)("|')/i.test(r) ? RegExp.$2 : "",
            u = /GoldenFormat=("|')(.*?)("|')/i.test(r) ? RegExp.$2 : "",
            w = /aolGUID=("|')(.*?)("|')/i.test(r) ? RegExp.$2 : "",
            f = d.textAd ? "1" : "0";
        l = w.split("|"), d.mn && (aolAdFdBkStr += d.mn + "|" + t + "|" + a + "|" + m + "|" + c + ";"), "|" == m && (m = ""), d.setAttribute("banId", m);
        try {
            window.adsDevilAd = window.adsDevilAd || {}, window.adsDevilAd.ad = window.adsDevilAd.ad || [], adsDevilAd.ad[o] = {
                divName: d.divName,
                mn: d.mn,
                adId: m,
                aolFormat: h,
                goldenFormat: u,
                width: t,
                height: a,
                mnum: c,
                sz: d.sz,
                textAd: f,
                seqId: l[1],
                bId: p,
                timeStamp: l[0]
            }, n.rotate && (adsDevilAd.ad[o].rTime = n.rTime, adsDevilAd.ad[o].rMax = n.rMax, adsDevilAd.ad[o].keepSize = n.keepSize)
        } catch (e) {}
        try {
            if (adsDevilAd.ad[o].aolDevilFlag = top.aol_devil_flag, !adsRRDevil && ("300x250,300x600,300x1050" == d.sz && "1050" != a && (adsRRDevil = "n"), top.aol_devil_flag || "300x250,300x600,300x1050" == d.sz && "1050" == a)) {
                adsRRDevil = "y";
                var v, g, A = adsDivs.length;
                for (r = 0; r < A; r++) v = atwAdBlock ? "atwFrame" + r : "atwAdFrame" + r, (g = document.getElementById(v)) && g.inV && "D" == g.inV && (g.style.width = "0px", g.style.height = "0px", g.style.display = "none")
            }
        } catch (e) {}
        try {
            window.adsDevilAd.hasOwnProperty("resized") && adsDevilAd.resized(e, t, a), window.adsDevilAd.hasOwnProperty("adinfo") && adsDevilAd.adinfo(o, e, t, a), window.adsDevilAd.hasOwnProperty("adinfo2") && adsDevilAd.adinfo2(o, e, t, a), window.adsDevilAd.hasOwnProperty("moat") && adsDevilAd.moat(o, e, t, a, f), window.atwUAC.hasOwnProperty("adLoaded") && atwUAC.adLoaded(o, adsDevilAd.ad[o]), "300" == t && (adsDevilAd.RRWidth = t, adsDevilAd.RRHeight = a)
        } catch (e) {}
    }
    adUACInit();
    var adsWait = 0,
        adsWaitNo = 0;

    function adsDisableWait() {
        adsWaitNo = 1
    }

    function adsLoadWait(t, a) {
        var e = "",
            d = "";
        try {
            e = t.contentWindow.document.body.scrollWidth, d = t.contentWindow.document.body.scrollHeight, e && d && 1 < e && 1 < d && (a.w != e || a.h != d) ? (zz = adsFindSize(a, e, d), e = zz[0], d = zz[1], t.width = e, t.height = d, t.className = "uac_" + e + "x" + d, 1 == adsEAN && document.getElementById(t.id + "EAN") && adsMoveEAN(e, t.id)) : adsWait++ < 20 && setTimeout(function() {
                adsLoadWait(t, a)
            }, 200)
        } catch (e) {
            adsWait++ < 20 && setTimeout(function() {
                adsLoadWait(t, a)
            }, 200)
        }
    }

    function adsFindSize(e, t, a) {
        var d, i, s, n = e.sz.split(","),
            o = n.length,
            r = 100,
            l = 0;
        for (s = 0; s < o; s++) d = n[s].split("x"), (i = Math.abs(d[0] - t) + Math.abs(d[1] - a)) < r && (r = i, l = s);
        return n[l].split("x")
    }

    function adSetMobile(e, t) {
        e && (atwUAC.adsMM = e), "noscroll" == t && (atwUAC.noscroll = 1)
    }

    function adsRMIFOnL(e, t, a) {
        var d = e.frameElement,
            i = d.parentNode,
            s = "",
            n = "",
            o = 0,
            r = 0,
            l = 0,
            c = "";
        try {
            c = t.getElementById("adDiv").innerHTML
        } catch (e) {}
        if (!c) try {
            c = (d.contentDocument || d.contentWindow.document).body.innerHTML
        } catch (e) {}
        if (/GoldenFormat=["']MobileMoments["']/i.test(c)) n = window.innerWidth < 550 && window.innerWidth < window.innerHeight && "1" == i.mm ? (s = window.innerWidth, parseInt(16 / 9 * s)) : (s = "300", "533");
        else {
            if (/ACE_AR(.*?)possible_size(.*?)[,}]/i.test(c) ? r = 1 : /ACE_AR(.*?)Size(.*?)['"](.*?)['"]/i.test(c) && 0 < unescape(RegExp.$3).indexOf(",") && (r = 1), /aolSize=[ ]?["']([\d]*?)\|([\d]*)["']/i.test(c) && 1 < unescape(RegExp.$2)) l = 1, s = unescape(RegExp.$1), n = unescape(RegExp.$2), "6" == s && "2" == n && (s = "300", n = "250");
            else if (/ACE_AR(.*?)Size(.*?)[,}]/i.test(c) && !r) {
                l = 1;
                var m = unescape(RegExp.$2).replace(/[^\d\+]/g, "");
                s = parseInt(m.substring(0, 3), 10), n = parseInt(m.substring(3, m.length), 10)
            } else if ("timeout" != a) try {
                s = d.contentWindow.document.body.scrollWidth, n = d.contentWindow.document.body.scrollHeight, (s < 1 || n < 1 || i.w == s && i.h == n) && !r && i.sz && !adsWaitNo && setTimeout(function() {
                    adsLoadWait(d, i)
                }, 100)
            } catch (e) {
                setTimeout(function() {
                    adsLoadWait(d, i)
                }, 100)
            }
            s && n && 1 < s && 1 < n && (i.w != s || i.h != n) && i.sz && (zz = adsFindSize(i, s, n), s = zz[0], n = zz[1])
        }!r && s && n && 1 < s && 1 < n && (i.w != s || i.h != n) && (o = 1, d.width = s, d.height = n), !r && 1 != l || "timeout" != a || (d.comment = 1), 1 != l && "timeout" == a || adsDevilObj(i.divName, s, n, d, t, o), s && n && d && (d.className = "uac_" + s + "x" + n), 1 == adsEAN && i.w != s && document.getElementById(d.id + "EAN") && adsMoveEAN(s, d.id)
    }

    function adsMoveEAN(e, t) {
        var a, d = document.documentElement.clientWidth;
        a = d < e ? d : e, document.getElementById(t + "EAN").style.width = a + "px", document.getElementById(t + "EANA").style.right = "0px", "728" < e && "1" == adsDev && (document.getElementById(t + "EAN").style.width = "100%", document.getElementById(t + "EAN").style.maxWidth = "970px", document.getElementById(t + "EAN").style.margin = "2px auto")
    }

    function adsDisableEAN(e) {
        adsEAN = "0" == e && 1 != atwIntl ? 1 : 0
    }

    function adsSetEAN(e, t) {
        "br" == t ? adsEANArr[e] = "right:0;" : "tl" == t ? adsEANArr[e] = "top:0;left:0;" : "bl" == t ? adsEANArr[e] = "left:0;" : "tr" == t && (adsEANArr[e] = "top:0;right:0;")
    }

    function adsWriteEAN(e, t, a) {
        var d = 0,
            i = t.w,
            s = "right:0px;";
        if (t.textAd && (0 < a.indexOf("TextVendor") || 0 < a.indexOf("TextCustom")) && (d = 1, t.divName && (i = document.getElementById(t.divName).offsetWidth)), !t.textAd || 1 == d) {
            var n, o = document.createElement("div");
            o.style.width = i + "px", o.style.height = "15px", o.style.top = "0px", o.style.left = "0px", o.style.margin = "0 auto", o.id = t.id + "EAN", o.style.position = "relative", adsEANArr[e.divName] && (s = adsEANArr[e.divName]), 1 != d ? (n = t.w < 234 || "560" == t.w && "35" == t.h ? '<a id="' + t.id + 'EANA" style="position:absolute;left:' + (t.w - 19) + 'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>' : '<a id="' + t.id + 'EANA" style="position:absolute;' + s + 'z-index:4999;margin:0 auto;width:77px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>', "560" == t.w && "35" == t.h && (o.style.position = "absolute", o.style.width = "auto"), o.innerHTML = n, e.appendChild(o)) : (n = '<a id="' + t.id + 'EANAT" style="position:absolute;' + s + 'z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>', o.innerHTML = n, e.insertBefore(o, e.firstChild))
        }
    }

    function adsRmChildren(e) {
        for (; 0 < e.childNodes.length;) {
            var t = e.childNodes[0],
                a = t.id;
            a && (-1 == a.toString().indexOf("atwFrame") && -1 == a.toString().indexOf("atwAdFrame") || (t.src = "about:blank"), t.i = ""), 0 < t.childNodes.length && adsRmChildren(t), e.removeChild(t)
        }
    }

    function adsClrDiv() {
        adsRmChildren(this)
    }

    function adsClrAd(e) {
        adsRmChildren(adsGetObj(e))
    }

    function adsGetObj(e) {
        return "object" != typeof e ? document.getElementById(e) : e
    }

    function adsFilelessFn(e, t) {
        if (atwPreBidCheck(e.mn)) try {
            var a = atwHBDivsLoaded(e.mn);
            if (0 <= a) {
                var d = "",
                    i = pbjs.getAdserverTargetingForAdUnitCode(String(atwHB[a].code)),
                    s = i.hb_adid,
                    n = pbjs.getBidResponses()[String(atwHB[a].code)].bids;
                if (s && n)
                    for (var o = n.length, r = {}, l = 0; l < o; l++)
                        if ((r = n[l]).adId == s) {
                            if (!r.ttl || (new Date).getTime() - r.requestTimestamp < 1e3 * r.ttl) {
                                for (var c in i) d += "kv" + c + "=" + escape(i[c]) + ";";
                                t = t.replace(/kvmn=/, d + "kvmn=")
                            }
                            break
                        }
            }
        } catch (e) {}
        var m = e.contentWindow ? e.contentWindow : e.contentDocument.document ? e.contentDocument.document : e.contentDocument;
        m.document.open();
        var p = '<html lang="en"><head><title>Aol Advertisement</title>\n';
        if (p += '<script type="text/javascript">\n', p += "function adsPageOnL(){adsLoaded=1;adFr=window.frameElement;\n", p += " if (adFr){if (adFr.textAd!=1){if (parent&&parent.adsCkCol){var collapse=parent.adsCkCol(adFr,document);\n", p += " if (!collapse&&adFr.divName){var parDiv=parent.document.getElementById(adFr.divName);\n", p += " if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document)}}}}else{parent.adsDoOnL(adFr,document)}}}\n", p += "function adsPageTimeout(){var adFr=window.frameElement;\n", p += " if (!adsLoaded&&adFr&&adFr.comment!=1&&adFr.textAd!=1&&adFr.divName&&parent&&parent.adsCkCol){\n", p += ' var collapse=parent.adsCkCol(adFr,document,"timeout");\n', p += " if (!collapse){var parDiv=parent.document.getElementById(adFr.divName);\n", p += ' if (parDiv&&(parDiv.dynSz==1)&&parent.adsRMIFOnL){parent.adsRMIFOnL(window,document,"timeout");\n', p += " var z=setTimeout(function(){adsPageTimeout()},500)\n", p += "}}}\n", p += "if (adFr&&adFr.textAd==1&&!adsLoaded&&adFr.comment!=1&&adFr.divName&&parent&&parent.adsDoOnL){parent.adsDoOnL(adFr,document)}}\n", p += "<\/script></head>\n", p += '<body onload=\'setTimeout("adsPageOnL()",10)\' style="overflow: visible; border:0; background-color: transparent;">\n', p += '<div id="adDiv" style="overflow: visible; border:0;">\n', p += '<script type="text/javascript">\n', p += "var inDapIF=true,inFIF=true,adsLoaded=0;\n", p += "var zz=setTimeout(function(){adsPageTimeout()},2000)\n", p += "<\/script>\n", p += "<script type='text/javascript' src='" + t + "'><\/script>", p += "</div></body></html>", m.document.write(p), window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), adsIELT10) setTimeout(function() {
            m.document.close()
        }, 1e3);
        else m.document.close()
    }

    function adSetAdBlock() {
        atwAdBlock = 1
    }

    function atwIsAdFrame(e) {
        var t = !1;
        return e && "IFRAME" === e.tagName && e.id && (-1 < e.id.indexOf("atwAdFrame") || -1 < e.id.indexOf("atwFrame") || -1 < e.id.indexOf("adsF")) && (t = e.id), t
    }

    function atwFocusPrev() {
        try {
            atwUAC.focused = document.activeElement, atwUAC.focusPlaceholder = document.createElement("span"), atwUAC.focusPlaceholder.id = "uacFocusPlaceholder", atwUAC.focusPlaceholder.tabIndex = -1, document.body.insertBefore(atwUAC.focusPlaceholder, document.body.firstChild), window.addEventListener && (window.addEventListener("focusin", function(e) {
                "IFRAME" !== e.target.tagName && (atwUAC.focused = e.target)
            }), window.addEventListener("blur", function(e) {
                setTimeout(function() {
                    atwUAC.frameFocus = atwIsAdFrame(document.activeElement), atwUAC.frameFocus || e.target === window || atwUAC.focused === document.activeElement || (atwUAC.focused = null), atwUAC.frameFocus && 1 != document.getElementById(atwUAC.frameFocus).mouseIn && (atwUAC.focused && atwUAC.focused !== window && atwUAC.focused !== document.body ? atwUAC.focused.focus() : (atwUAC.focusPlaceholder.focus(), window.focus()))
                }, 0)
            }, !0))
        } catch (e) {}
    }

    function adsLoadAd() {
        if ("noCall" != atwUAC.gdprRet) {
            this.ClearAd(), this.adLoaded = 1;
            var e = document.createElement("iframe");
            if (e.setAttribute("itemscope", ""), e.setAttribute("itemtype", "https://schema.org/WPAdBlock"), e.setAttribute("tabindex", "-1"), e.textAd = this.textAd, e.textAdDelay = this.textAdDelay, 1 == this.textAd || this.col ? (e.style.visibility = "hidden", "0" == adSetInV && (e.style.display = "none"), e.width = 0, e.height = 0) : (e.width = this.w, e.height = this.h), e.title = "Ad", e.marginWidth = 0, e.marginHeight = 0, e.setAttribute("allowtransparency", "true"), e.frameBorder = 0, e.scrolling = "no", e.w = this.w, e.h = this.h, e.mn = this.mn, e.divName = this.divName, e.sz = this.sz, e.inV = this.vis, e.adNum = this.adNum, e.comment = 0, e.ean = adsEAN, e.fileless = this.fileless, e.mm = this.mm, e.adPage = this.adPage, e.mouseIn = 0, e.addEventListener && (e.addEventListener("mousemove", function() {
                    e.mouseIn = 1
                }, !1), e.addEventListener("mouseover", function() {
                    e.mouseIn = 1
                }, !1), e.addEventListener("mouseout", function() {
                    e.mouseIn = 0
                }, !1)), atwUAC.sandbox && e.setAttribute("sandbox", "allow-forms allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"), 1 == adsTile && atwFocusPrev(), this.appendChild(e), this.iframe)
                if (e.id = "adsF" + this.adNum, e.name = e.id, 1 == adsEAN && adsWriteEAN(this, e, ""), "0" == e.inV) window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), e.src = this.adURL;
                else {
                    this.adURL = this.adURL.replace(/kvmn=/, "kvvis=1;kvmn="), e.adURL = this.adURL, e.url = this.adURL;
                    setTimeout(function() {
                        adsDelaySonar(e, adsSonarT)
                    }, 100)
                }
            else {
                if (1 == adsEAN) try {
                    this.keepSize && 1 < this.rTimes && adsWriteEAN(this, e, "")
                } catch (e) {}
                if (e.id = atwAdBlock ? "atwFrame" + this.adNum : "atwAdFrame" + this.adNum, e.name = e.id, document.domain != location.hostname && -1 == this.adPage.indexOf("#") && (this.adPage = this.adPage + "#" + document.domain), this.adPage || 1 == this.fileless)
                    if (e.mm && 1 != atwUAC.noscroll && window.innerWidth < 550 && window.innerWidth < window.innerHeight) e.adURL = this.adURL, window.addEventListener("scroll", function() {
                        atwScrollCall(e)
                    }, !1);
                    else if ("0" == e.inV) 1 == this.fileless ? adsFilelessFn(e, this.adURL) : (window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), e.src = this.adPage);
                else {
                    e.url = this.adPage, this.adURL = this.adURL.replace(/kvmn=/, "kvvis=1;kvmn="), e.adURL = this.adURL;
                    setTimeout(function() {
                        adsDelaySonar(e, adsSonarT)
                    }, 100)
                }
            }
            this.ifr = e.id
        }
    }

    function atwScrollCall(e) {
        1 != atwUAC.scrolled && (atwUAC.scrolled = 1, e.adURL = e.adURL.replace(/kvmn=/, "kvvis=1;kvmn="), 1 == e.fileless ? adsFilelessFn(e, e.adURL) : (window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), e.src = e.adPage))
    }

    function adsDelaySonar(e, t) {
        !atwLoaded || 0 != atwReset && "" == adsRRDevil ? setTimeout(function() {
            adsDelaySonar(e, t)
        }, 100) : t ? setTimeout(function() {
            adsDelaySonar(e, 0)
        }, t) : "D" == e.inV && "n" != adsRRDevil && adsRRCalled ? "" == adsRRDevil && setTimeout(function() {
            adsDelaySonar(e, t)
        }, 100) : adsSonar(e, function() {}, {
            visibility: adsSonarV
        }) ? 1 == e.fileless ? adsFilelessFn(e, e.adURL) : (window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), e.src = e.url) : adsSonar(e, function() {
            this.scrollin = !1, "D" == e.inV && "n" != adsRRDevil && adsRRCalled || (1 == e.fileless ? adsFilelessFn(e, e.adURL) : (window.atwUAC.hasOwnProperty("adStarted") && atwUAC.adStarted(e.adNum + 1, e.divName, e.w, e.h), e.src = e.url))
        }, {
            visibility: adsSonarV
        })
    }

    function adsShowDiv(e) {
        adsGetObj(e).style.display = "block"
    }

    function adsHideDiv(e) {
        adsGetObj(e).style.display = "none"
    }

    function adSetupDiv(e, t, a, d, i, s, n, o, r, l, c, m) {
        var p, h, u = 0;
        if (p = atwAdBlock ? "atwDiv" : "adsDiv", p += adsDivs.length, "textd" == s && (s = "text", u = 1), d && "" != d ? h = adsGetObj(d) : (document.write("<div id='" + p + "'></div>"), h = document.getElementById(p), d = p, "text" != s && (h.style.fontSize = "0px")), "object" == typeof d) try {
            "" == d.id ? (h.divName = p, h.id = p) : h.divName = d.id
        } catch (e) {} else h.divName = d;
        h.LoadAd = adsLoadAd, h.adLoaded = 0, h.ClearAd = adsClrDiv, h.mn = n, h.origMN = "", h.textAd = "text" == s ? 1 : 0, h.dynSz = s && "text" != s && "iframe" != s ? 1 : 0, h.sz = o || 0, h.w = e, h.h = t, h.adURL = a, h.adPage = i, h.adNum = adsDivs.length, h.col = r, h.vis = l, h.delayed = 0, h.mm = m, h.textAdDelay = u ? 1 : 0, h.iframe = "iframe" == s ? 1 : 0, h.fileless = 1 == c ? 1 : 0, h.rTimes = 1, adsDivs[adsDivs.length] = h
    }

    function atwLR(e, t) {
        return e << t | e >>> 32 - t
    }

    function atwGB(e) {
        for (var t = [], a = 0, d = 0; d < e.length; d++) {
            var i = e.charCodeAt(d);
            t[a++] = i < 128 ? i : (t[a++] = i < 2048 ? i >> 6 | 192 : (55296 == (64512 & i) && d + 1 < e.length && 56320 == (64512 & e.charCodeAt(d + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++d)), t[a++] = i >> 18 | 240, t[a++] = i >> 12 & 63 | 128) : t[a++] = i >> 12 | 224, i >> 6 & 63 | 128), 63 & i | 128)
        }
        return t
    }

    function atwUTF(e) {
        for (var t = atwGB(e), a = "", d = 0; d < t.length; d++) a += String.fromCharCode(t[d]);
        return a
    }

    function atwSHA1(e) {
        for (var t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], a = (e = atwUTF(e)).length, d = (e += String.fromCharCode(128)).length / 4 + 2, i = Math.ceil(32 * d / 512), s = new Array(i), n = 0; n < i; n++) {
            var o = 64 * n;
            s[n] = new Array(16);
            for (var r = 0; r < 16; r++) {
                var l = o + 4 * r;
                s[n][r] = 0, e.length >= l + 1 && (s[n][r] = e.charCodeAt(l) << 24 | e.charCodeAt(l + 1) << 16 | e.charCodeAt(l + 2) << 8 | e.charCodeAt(l + 3))
            }
        }
        s[i - 1][14] = a >>> 29, s[i - 1][15] = a << 3;
        for (n = 0; n < s.length; n++) {
            var c = new Array(80);
            for (r = 0; r < 16; r++) c[r] = s[n][r];
            for (r = 16; r < c.length; r++) c[r] = atwLR(c[r - 3] ^ c[r - 8] ^ c[r - 14] ^ c[r - 16], 1);
            var m = t[0],
                p = t[1],
                h = t[2],
                u = t[3],
                w = t[4];
            for (r = 0; r < 80; r++) {
                var f, v;
                v = r <= 19 ? (f = p & h | ~p & u, 1518500249) : 19 < r && r <= 39 ? (f = p ^ h ^ u, 1859775393) : 39 < r && r <= 59 ? (f = p & h | p & u | h & u, 2400959708) : (f = p ^ h ^ u, 3395469782);
                var g = atwLR(m, 5) + f + w + v + c[r];
                w = u, u = h, h = atwLR(p, 30), p = m, m = g
            }
            t[0] = t[0] + m >>> 0, t[1] = t[1] + p >>> 0, t[2] = t[2] + h >>> 0, t[3] = t[3] + u >>> 0, t[4] = t[4] + w >>> 0
        }
        for (n = 0; n < t.length; n++) {
            var A = ("00000000" + t[n].toString(16)).substr(-8);
            t[n] = A
        }
        return t[0] + t[1] + t[2] + t[3] + t[4]
    }

    function atwCutURL(e) {
        var t, a, d = "";
        try {
            a = document.referrer
        } catch (e) {}
        return -1 < e.indexOf("ncid=") ? (e.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/), d += "kvncid=" + escape(RegExp.$1) + ";") : a && -1 < a.indexOf("ncid=") && (a.match(/(?:.*?)[&#?]ncid=(.*?)(?:[&#\/]|$)/), d += "kvncid=" + escape(RegExp.$1) + ";"), e.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/), 150 < (t = RegExp.$1).length && (t = t.substr(0, 150)), d += "kvpg=" + (t = escape(t.replace(/\/$/, ""))) + ";", 1 != atwIntl && a && (a.match(/(?:https?\:){0,1}\/\/(.*?)(?:[?#]|$)/), 150 < (t = RegExp.$1).length && (t = t.substr(0, 150)), d += "kvrefd=" + (t = escape(t.replace(/\/$/, ""))) + ";"), d = d.replace(/\//g, "%2F")
    }

    function adsGetValues() {
        var e, t, a, d, i, s = "",
            n = "",
            o = window.location;
        t = /(\?|&)atw[Nn][Tt]=(.*?)(&|$)/.test(adsLo) ? RegExp.$2 : "", /^[0-9.]+$/.test(unescape(t)) || (t = ""), t && ("5113.1" == (adsNt = t) ? adsHt = "//at.atwola.com" : "1065.1" == t ? adsHt = "//uk.at.atwola.com" : 1 == atwIntl && (adsAlias = adsUK = 0)), d = o.hostname, i = decodeURIComponent(d + o.pathname), 48 < d.length && (d = atwSHA1(d)), "/" == i.charAt(i.length - 1) && (i = i.substring(0, i.length - 1)), a = "kvdom=" + d + ";kvpage=" + (i = atwSHA1(i)) + ";", e = atwCutURL(adsLo.toLowerCase());
        try {
            /(^|;)?UNAUTHID=(.*?)[.](.*?)[.]/i.test(document.cookie) && (s = "kvui=" + unescape(RegExp.$3) + ";")
        } catch (e) {}
        try {
            /(^|;)?BX=(.*?)(;|$)/i.test(document.cookie) && (n = "kvbxcookie=" + unescape(RegExp.$2) + ";")
        } catch (e) {}
        return e + s + n + a
    }! function(l, c, m) {
        "use strict";

        function p(e, t) {
            var a;
            return function() {
                a || (a = l.setTimeout(function() {
                    a = m, e.call(this)
                }, t))
            }
        }

        function e(e, t, a) {
            "object" == typeof t ? a = t : "function" == typeof t && (a ? a.scrollin = t : a = {
                scrollin: t
            });
            var d, i, s = a.parent;
            if (!s) {
                for (var n, o = e;
                    (o = o.parentNode) && 1 === o.nodeType;)
                    if (d = o, i = "overflow", "auto" === (n = l.getComputedStyle ? l.getComputedStyle(d).getPropertyValue(i) : d.currentStyle ? d.currentStyle[i] : void 0) || "scroll" === n) {
                        s = o;
                        break
                    } s = s || l
            }
            if (a.parent = s === l ? f : s, a.scrollin || a.scrollout) {
                a.elem = e, v.push(a), u();
                var r = a.delay || 13;
                s.sonarBound || (s.addEventListener ? (s.addEventListener("scroll", p(u, r), !1), s.addEventListener("resize", p(u, r), !1)) : l.attachEvent && (s.attachEvent("onscroll", p(u, r)), s.attachEvent("onresize", p(u, r))), s.sonarBound = !0)
            }
            return h(e, a.distance, a.visibility, a.parent)
        }

        function h(e, t, a, d) {
            w || (w = c.body), a || (a = 0), t === m && (t = 0);
            var i = e,
                s = 0,
                n = w.offsetHeight,
                o = d.clientHeight || 0,
                r = d === f ? w.scrollTop || f.scrollTop : d.scrollTop,
                l = e.offsetHeight || 0;
            if (!e.sonarElemTop || e.sonarBodyHeight !== n) {
                for (; i !== d && i.offsetParent;) s += i.offsetTop, i = i.offsetParent;
                e.sonarElemTop = s, e.sonarBodyHeight = n
            }
            return e.sonarElemTop + l - a * l > r - t && e.sonarElemTop + a * l < r + o + t
        }

        function u() {
            var e, t, a;
            for (e in v) v.hasOwnProperty(e) && (((t = v[e]).scrollin || t.scrollout) && ((a = h(t.elem, t.distance, t.visibility, t.parent)) !== t.detected && (a ? t.scrollin && t.scrollin.call(t, t.elem) : t.scrollout && t.scrollout.call(t, t.elem), t.detected = a)))
        }
        var w, f = c.documentElement,
            v = [];
        e.poll = u, l.adsSonar = e, l.adsSonarClear = function() {
            v = []
        }
    }(window, document);
    var adSetInV = "0",
        adsSonarT = 0,
        adsSonarV = 0;

    function adSetInView(e, t, a) {
        e && (adSetInV = e), t && (adsSonarV = parseFloat(t)), a && (adsSonarT = parseInt(a))
    }

    function adsATWDelay(e, t) {
        switch (adsUACH = "", e) {
            case "htmlAdWH":
                htmlAdWH(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7]);
                break;
            case "adSetOthAT":
                adSetOthAT(t[0])
        }
    }

    function adsDisableGUID() {}

    function adSetAddOnPl() {}

    function adSetTarget() {}

    function adSetSN() {}

    function adSetCo() {}

    function adSendTerms() {}

    function adSetOthDclk(e) {}

    function adSetDelay() {}

    function adSetSticky() {}

    function adSetIgnoreFlash() {}

    function htmlAdWHDyn(e, t, a, d, i, s) {
        htmlAdWH(e, "", "", a, d, i, s, t.toString())
    }

    function htmlAdWH(e, t, a, d, i, s, n, o) {
        if (adsUACH && 0 < adsUACD) setTimeout(adsATWDelay, 3e3, arguments.callee.name, arguments);
        else {
            if (!e) return 0;
            e = e.toString();
            var r, l, c = document,
                m = "",
                p = 0,
                h = 0,
                u = 0,
                w = 0,
                f = 0,
                v = (window, location.protocol + "//"),
                g = t,
                A = a,
                C = o || "",
                y = 970,
                x = "text",
                b = "";
            v.indexOf("http") < 0 && (v = "http://"), adsVal || (adsVal = adsGetValues()), d && (0 < (d = d.toLowerCase()).indexOf("c") && (u = 1, d = d.substr(0, d.length - 1)), "textd" == d ? (x += "d", d = "text") : "filelesstext" == d ? (d = "text", adsFileless = 1) : "filelessajax" == d ? (d = "ajax", adsFileless = 1) : "filelesstextd" == d && (d = "text", x += "d", adsFileless = 1)), "fileless" == d && (adsFileless = 1), "F" != adsTp && "ajax" != d && "f" != d && "fileless" != d || (w = 1);
            try {
                document && document.documentElement && (y = document.documentElement.clientWidth)
            } catch (e) {}
            if (o) {
                if (t = (l = o.split(",")[0].split("x"))[0], a = l[1], w && (n = "r"), "1" == adsRePo && y < 970 && "text" != d) {
                    var S, T, D, R = "";
                    D = (S = o.split(",")).length;
                    for (var U = 0; U < D; U++) T = S[U].split("x"), parseInt(T[0]) < 970 && (R += S[U] + ",");
                    if ("" == R) return 0;
                    o = R.substring(0, R.length - 1)
                }
            } else o = "";
            if (adsSZ) {
                var E, L = adsSZ.length;
                for (U = 0; U < L; U += 2)
                    if (adsTile == adsSZ[U + 1]) {
                        t = (E = adsSZ[U].split("x"))[0], a = E[1];
                        break
                    }
            }
            if ("RR" == t || "rr" == t) t = 300, a = 250, w && (n = "r"), o = "300x250,300x600,300x1050", f = 1, "0" == adSetInV && (adsRRCalled = "1");
            else if ("LB" == t || "lb" == t) t = 728, a = 90, w && (n = "r"), o = "728x90,948x250,950x252,940x230,101x1", ("1" != adsRePo || 970 <= y) && (o += ",970x66,970x90,970x250");
            else if ("MM" == t || "mm" == t) t = 300, a = 250, w && (n = "r"), o = "300x250,320x480,320x50";
            else if (970 <= t && y < 970 && "1" == adsRePo && "text" != d) return 0;
            if (adsCp) {
                var N = adsCF.length;
                for (U = 0; U < N; U++)
                    if (/^http[s]{0,1}:\/(\/ibw\.aol\.com\/|\/ibw\-qai\.aol\.com\/|\/sales\.oath\.com\/|\/sales\-qa\.oath\.com\/)(.*?)/.test(adsCF[U]) && /^[0-9A-Za-z\/.:_\-]+$/.test(unescape(adsCF[U])) || /^\d+$/.test(unescape(adsCF[U]))) {
                        if (o)
                            for (var B, I = o.split(","), F = I.length, z = 0; z < F; z++) B = I[z].split("x"), adsCW[U] == B[0] && adsCH[U] == B[1] && (h = 1);
                        if (h || adsCW[U] == t && adsCH[U] == a || adsCAd[U] == adsTile) {
                            if (/^\d+$/.test(adsCF[U])) {
                                var H = /(\?|&)atwcrprqa=(.*?)(&|$)/.test(adsLo.toLowerCase()) ? "-qa" : "";
                                adsCF[U] = "https://sales" + H + ".oath.com/store-creative-api/v2/preview/creative/" + adsCF[U] + "/index"
                            }
                            r = "I" == adsTp || "iframe" == d ? adsCF[U] + ".html" : adsCF[U] + ".js", adsCW[U] = 0, p = 1;
                            break
                        }
                    }
            }
            if (adsMNS) {
                var O, k = adsMNS.length,
                    M = t + "x" + a,
                    P = 0,
                    j = 0;
                for (U = 0; U < k; U += 2) {
                    if (P = 0 < (O = adsMNS[U + 1]).indexOf("a") ? (O = O.replace("a", ""), 1) : 0, -1 < O.indexOf("only") ? (O = O.replace("only", ""), only = 1) : only = 0, o)
                        for (var $ = o.split(","), W = $.length, V = 0; V < W; V++) O == $[V] && (j = 1);
                    1 == j || adsTile == O || M == O || "RRxRR" == O && 1 == f ? (e = adsMNS[U], P || (adsMNS[U + 1] = ""), only && (adsMNS[U + 1] = "only")) : only && (e = "0")
                }
            }
            if ("0" == e) return adsTile++, 0;
            if (0 == p) {
                var G = "",
                    K = "";
                o && !f ? K = "allowedSizes=" + o + ";" : "r" != n && (K = "size=" + t + "x" + a + ";"), K += "noperf=1;", "ajax" == d && !adsAJAXAddOn || 2 == adsAddOn ? (K += "noaddonpl=y;", adsAddOn = 2) : 1 == adsTile ? 1 == adsAddOn ? adsAddOn = 2 : K += "noaddonpl=y;" : 1 != adsAddOn ? K += "noaddonpl=y;" : adsAddOn = 2, "blank" == adsExcV && (m = "artexc=all;"), -1 != atwUAC.gdprRet.toString().indexOf("noC") || "0" != atwUAC.gdpr && "1" != atwUAC.gdpr || (b = "gdpr=" + atwUAC.gdpr + ";", atwUAC.gdpr && "0" != atwUAC.gdpr && null != atwUAC.gdprC && (b += "euconsent=" + atwUAC.gdprC + ";")), atwUAC.spaceid ? G = "spaceid=" + atwUAC.spaceid + ";" : (window.rapidConfig && window.rapidConfig.spaceid && (G = window.rapidConfig.spaceid), "" != G && (G = "spaceid=" + (atwUAC.spaceid = G) + ";")), G += b + adsATOth.toLowerCase() + adsVal + adsKV + "kvmn=" + e + ";kvgrp=" + adsScr + ";extmirroring=0;kvtile=" + adsTile + ";target=_blank;aduho=" + -1 * adsD.getTimezoneOffset() + ";", 0 != atwIntl && 1 != adsUK || (K += m), 1 != atwIntl || adsAlias || (adsPl = e), r = adsHt || (0 == atwIntl ? v + "at.atwola.com" : v + "uk.at.atwola.com"), r += "/addyn/3.0/" + adsNt + "/" + adsPl + "/0/-1/", r += K += G + "grp=" + adsScr, 0 != atwIntl && 1 != adsAlias || (r = r.replace(/noperf=1;/, "noperf=1;alias=" + e + ";"))
            }
            if ("return" == d) return adsTile++, r;
            "text" != d && "ajax" != d && "f" != d && "iframe" != d && "fileless" != d && adsTp && (d = adsTp);
            if (d ? d : d = adsTp, atwUAC.adsInfo[adsTile] = {
                    mn: e,
                    url: r,
                    origW: g,
                    origH: A,
                    sz: C,
                    other: adsATOth,
                    ttype: d,
                    dv: i,
                    inV: adSetInV
                }, adsFileless = adsFilelessFlag && "text" != adsFilelessFlag || "ajax" != d && "f" != d && "fileless" != d && "F" != adsTp ? "text" != adsFilelessFlag && "text" == d ? 1 : 0 : 1, ("text" == d || w) && (s && "" != s || (s = adsPage), "fileless" != adsPage && "fileless" != d || (adsFileless = 1), "" == s && 1 != adsFileless && (adsTp = "J", w = d = "")), "text" == d) adSetupDiv(t, a, r, i, s, x, e, o, u, adSetInV, adsFileless), adsDivs[adsDivs.length - 1].LoadAd();
            else if ("iframe" == d) adSetupDiv(t, a, r.replace(/addyn\/3.0/, "adiframe/3.0"), i, s, "iframe", e, o, u, adSetInV, "0"), adsDivs[adsDivs.length - 1].LoadAd();
            else if ("F" == adsTp || "f" == d || "fileless" == d || "ajax" == d) adSetupDiv(t, a, r, i, s, n, e, o, u, adSetInV, adsFileless, atwUAC.adsMM), atwPreBidCheck(e) ? atwHBR && (!adsSyncDelay || 1 == adsDivs.length || adsLoadSync ? adsDivs[adsDivs.length - 1].LoadAd() : (adsDivs[adsDivs.length - 1].delayed = 1, adsSyncTime || (adsSyncTime = setTimeout(adsLoadedSync, adsSyncDelay)))) : !adsSyncDelay || 1 == adsDivs.length || adsLoadSync ? adsDivs[adsDivs.length - 1].LoadAd() : (adsDivs[adsDivs.length - 1].delayed = 1, adsSyncTime || (adsSyncTime = setTimeout(adsLoadedSync, adsSyncDelay)));
            else if ("J" != adsTp) {
                if (0 == atwIntl) {
                    c.write("<iframe title='Ad' name='adsF" + adsLNm + "' id='adsF" + adsLNm + "' src='" + r.replace(/addyn\/3.0/, "adiframe/3.0") + "' width='" + t + "' height='" + a + "'  scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>");
                    var _ = document.getElementById("adsF" + adsLNm);
                    _ && (_.setAttribute("itemscope", ""), _.setAttribute("itemtype", "https://schema.org/WPAdBlock")), 1 == adsEAN && (t < 234 ? c.write('<BR><a id="adsF' + adsLNm + 'EANA" style="position:absolute;left:' + (t - 19) + 'px;z-index:4999;margin:0 auto;width:19px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoicesi.png" style="border:none;width:19px;height:15px;vertical-align:top" alt="AdChoices"></a>') : c.write('<BR><a id="adsF' + adsLNm + 'EANA" style="position:absolute;left:' + (t - 77) + 'px;z-index:4999;margin:0 auto;width:77px;height:15px" href="http://adinfo.aol.com/" target="_blank"><img src="//o.aolcdn.com/ads/adchoices.png" style="border:none;width:77px;height:15px;vertical-align:top" alt="AdChoices"></a>'))
                } else {
                    G = r.replace(/addyn\/3.0/, "adiframe/3.0");
                    c.write("<iframe title='Ad' name='adsF" + e + "' id='adsF" + e + "' src='" + G + "' width='" + t + "' height='" + a + "' scrolling=no frameborder=0 marginheight=0 marginwidth=0></iframe>"), adsLMN[adsLNm] = "adsF" + e + "|" + G
                }
                adsLNm++
            } else if ("J" == adsTp)
                if (null == i) c.write("<script type='text/javascript' src='" + r + "'><\/script>");
                else {
                    -1 == (r = r.replace(/allowedSizes=.*?;/, "size=" + t + "x" + a + ";")).indexOf("size=") && (r = r.replace(/\/0\/-1\//, "/0/-1/size=" + t + "x" + a + ";"));
                    var q = adsGetObj(i),
                        Z = c.createElement("img"),
                        J = document.createElement("a");
                    J.href = r.replace(/addyn/, "adlink"), J.target = "_blank", Z.src = r.replace(/addyn/, "adserv"), Z.alt = "Ad", Z.height = a, Z.width = t, J.appendChild(Z), q.appendChild(J)
                } adsTile++, atwUAC.adsMM = ""
        }
    }
}