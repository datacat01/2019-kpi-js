function getCookie(d) {
    var b = d + "=";
    var a = document.cookie.split(";");
    for (var e = 0; e < a.length; e++) {
        var f = a[e];
        while (f.charAt(0) == " ") {
            f = f.substring(1)
        }
        if (f.indexOf(b) == 0) {
            return f.substring(b.length, f.length)
        } else {
            return ""
        }
    }
}

function readCookie(b) {
    var a;
    return (a = new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)").exec(document.cookie)) ? (a[1]) : null
}

function getMetaS6() {
    var c = "";
    var b = document.querySelector("meta[id='metaS6']");
    if (b) {
        var a = b.hasAttribute("content");
        if (a) {
            c = document.querySelector("meta[id='metaS6']").getAttribute("content");
            return c
        }
    } else {
        return c
    }
}

function getRegistrationStatus() {
    var c = "";
    var b = document.querySelector("meta[id='customEvents']");
    if (b) {
        var a = b.hasAttribute("content");
        if (a) {
            c = document.querySelector("meta[id='customEvents']").getAttribute("content");
            return c
        }
    } else {
        return c
    }
}
var tax1 = null,
    tax2 = null,
    tax3 = null;

function parseTaxonomy(d, c, a) {
    var b = ((d && d.match(/\//)) ? d.split("/") : "");
    var f = ((c && c.match(/\//)) ? c.split("/") : "");
    var e = ((a && a.match(/\//)) ? a.split("/") : "");
    if (b) {
        tax1 = b.pop();
        if (f && f[0] != b[0]) {
            tax2 = f.pop()
        }
        if (e && e[0] != b[0] && e[0] != f[0]) {
            if (tax2) {
                tax3 = e.pop()
            } else {
                tax2 = e.pop()
            }
        }
    } else {
        if (f) {
            tax1 = f.pop();
            if (e && f[0] != e[0]) {
                tax2 = e.pop()
            }
        } else {
            if (e) {
                tax1 = e.pop()
            }
        }
    }
    if (tax1 || tax2 || tax3) {
        return {
            tax1: tax1,
            tax2: tax2,
            tax3: tax3
        }
    }
    return null
}

function getHier3FromTaxonomy() {
    var c = AARP.MetaInfo.dcSubject1,
        b = AARP.MetaInfo.dcSubject2,
        a = AARP.MetaInfo.dcSubject3,
        e = parseTaxonomy(c, b, a);
    if (e) {
        tax1 = e.tax1;
        tax2 = e.tax2;
        tax3 = e.tax3
    }
    var d = [];
    if (tax1) {
        d.push(tax1)
    }
    if (tax2) {
        d.push(tax2)
    }
    if (tax3) {
        d.push(tax3)
    }
    if (d.length > 0) {
        return d
    }
    return null
}

function deEncode(a) {
    a = a.replace(/%20/g, "+").replace(/%27/g, "'").replace(/%22/g, '"').replace(/%26/g, "&").replace(/%40/g, "@").replace(/%23/g, "#").replace(/%24/g, "$").replace(/%25/g, "%").replace(/%21/g, "!").replace(/%3F/g, "?").replace(/%2B/g, "[plus]");
    return a
}

function getPageInfo() {
    var C = window.location,
        o = C.href,
        A = C.hostname,
        ab = C.hostname.split(".").shift(),
        B = C.protocol,
        ah = C.origin,
        l = C.host,
        P = C.pathname,
        U = document.title,
        r = "",
        an = "",
        N = "",
        G = "",
        J = "";
    if (AARP.MetaInfo && AARP.MetaInfo.siteProperty.length > 0) {
        r = AARP.MetaInfo.siteProperty
    }
    if (r == "Classic") {
        an = AARP.Ads.house;
        N = AARP.Ads.pageid;
        G = AARP.Ads.pgtype;
        J = AARP.MetaInfo.source;
        if (!J) {
            J = "null"
        } else {
            if (J.length == 1) {
                J = "aarporg"
            }
        }
    } else {
        if (r == "Everywhere") {
            var M = AARP.Everywhere.AdInfo;
            an = AARP.Everywhere.AdInfo.house;
            N = AARP.Everywhere.AdInfo.pageid;
            G = AARP.Everywhere.pgtype;
            J = AARP.MetaInfo.source
        } else {
            if (r == "Travel") {
                an = AARP.Ads.house;
                N = AARP.Ads.pageid;
                G = AARP.Ads.pgtype;
                J = AARP.MetaInfo.source;
                if ((J.length > 0 && J == "aarp_org") || J.length == 1) {
                    J = "travel2"
                }
            } else {
                r = "Vendor";
                AARP.MetaInfo.siteProperty = "Vendor";
                an = "Commercial";
                G = "vendorPage";
                J = "null"
            }
        }
    }
    var v = "",
        u = "",
        O = "",
        K = "",
        V = "",
        ai = "",
        s = "",
        a = "",
        ao = "",
        E = "",
        g = "",
        j = "",
        af = "",
        ae = [],
        I = "",
        T, Z = [],
        z = false,
        L = o.split("?", 2),
        X = "",
        ac = "",
        y = "",
        aa = "",
        q = "",
        h = "",
        e = "",
        c = "",
        k = false,
        W = "",
        Y = "",
        n = "",
        m = "",
        S = "",
        D = "",
        H = "",
        p = "",
        b = [],
        R = getRegistrationStatus();
    if (r != "Vendor") {
        b = getHier3FromTaxonomy()
    }
    if (L.length > 1 && L !== "") {
        V = L[1]
    }
    var ag = L[0].split("/");
    var am = ag.shift();
    am = ag.shift().split(":");
    am = "";
    if (ag.length > 0) {
        am = ag.pop()
    }
    ag.shift();
    I = am.substring(0, am.length);
    af = "/" + ag.join("/");
    if (af == "/") {
        af = ""
    } else {
        ae = af.substring(1, af.length).split("/")
    }
    if (ae.length >= 3 && ae[0] == "content") {
        var t = "";
        for (var ak = 3; ak < ae.length; ak++) {
            if (ae[ak] != "home") {
                Z.push(ae[ak]);
                t = ae[ak]
            }
        }
        if (t != "articles") {
            var d = I.split(".");
            if (d.length > 0 && d[0] != "home") {
                Z.push(d[0])
            }
        }
        T = "/" + Z.join("/")
    } else {
        T = af;
        Z = ae
    }
    z = (!I || I.length === 0 || I.split(".")[0] == "index" || Z.length === 0 || T.length === 1);
    if (J) {
        J = J.replace(/[_-]/g, "")
    } else {
        if (ab != "www") {
            J = ab
        }
    }
    D = getMetaS6();
    if (D) {
        H = D
    } else {
        if (!o.match(/\/\/refresh|\/\/www|\/\/local|-d.aarp|-s.aarp|-qa.aarp/)) {
            H = ab
        } else {
            H = ""
        }
    }
    X = ab + ":" + af + (I ? "/" + I : "");
    if (ae[0] == "online-community" || ae[0] == "online_community") {
        ac = "type:community"
    } else {
        if (z && G != "vendorPage") {
            ac = "type:landingPage"
        } else {
            if (N.match(/404/)) {
                ac = "type:404-MissingPage"
            } else {
                if (G == "vendorPage") {
                    aa = "type:VendorPage";
                    ac = ""
                } else {
                    ac = ""
                }
            }
        }
        if (G.match(/article/)) {
            ac = "type:article"
        }
    }
    W = W;
    Y = Y;
    v = (ae[0]) ? ae[0] : "";
    u = (ae[1]) ? ae[1] : "";
    O = (ae[2]) ? ae[2] : "";
    K = (ae[3]) ? ae[3] : "";
    if (ab == "search") {
        var aj = document.getElementsByClassName("zeroResults");
        if (aj.length) {
            s = "0"
        } else {
            s = document.getElementsByClassName("pagination range total").innerhtml
        }
        ai = readCookie("GlobalSearchTerm");
        try {
            a = o.split("https://search.aarp.org/everywhere")[1].split("/_/")[0]
        } catch (al) {}
        if (a) {
            try {
                a = a.replace("/", "|")
            } catch (al) {}
        }
    } else {
        ai = ""
    }
    if (ab == "games") {
        y = "gamer"
    }
    if (G != "vendorPage") {
        aa = G
    }
    if (l == "www.aarp.org" && !ae[0]) {
        ac = v = u = O = K = y = "homepage"
    }
    ao = an;
    if (V && V.length > 0) {
        V = V.substring(0)
    } else {
        V = ""
    }
    E = V;
    g = U;
    if (E.length > 0) {
        j = N + "/?" + V
    } else {
        j = N
    }
    af = af.toLowerCase();
    var Q = l + af;
    q = af;
    af = af.substring(1);
    var F = ae.slice(0);
    F.unshift(l);
    if (F.length > 0 && r != "Classic" && r != "Travel") {
        F.pop()
    }
    if (F.length >= 1) {
        h = F[0];
        k = true
    }
    if (F.length >= 2) {
        e = F[1]
    }
    if (F.length >= 3) {
        c = F[2]
    }
    switch (h) {
        case "www.aarp.org":
            if (e && e.length < 1) {
                h = "homepage";
                k = false
            } else {
                switch (e) {
                    case "community":
                        h = "community";
                        break;
                    case "health":
                    case "money":
                    case "leisure":
                    case "makeadifference":
                    case "family":
                    case "families":
                        h = "editorial";
                        break;
                    case "aarp":
                        switch (c) {
                            case "live_and_learn":
                                h = "editorial";
                                break;
                            case "about_aarp":
                            case "help":
                            case "human_resources":
                            case "presscenter":
                                h = "professional";
                                break
                        }
                        break;
                    case "research":
                        switch (c) {
                            case "ppi":
                                h = "professional";
                                break
                        }
                        break;
                    case "nrta":
                        h = "professional";
                        break;
                    case "about_aarp":
                        switch (c) {
                            case "nrta":
                            case "aarp_foundation":
                            default:
                                h = "professional";
                                break
                        }
                        break
                }
            }
            break;
        case "games.aarp.org":
        case "www.uclick.com":
            h = "games";
            break;
        case "www.aarpmagazine.org":
        case "www.segundajuventud.org":
        case "bulletin.aarp.org":
            h = "editorial";
            break;
        case "products.aarp.org":
        case "www.aarphealthcare.com":
        case "www.aarpfinancial.com":
        case "www.aarpfunds.com":
            h = "commercial";
            break
    }
    Y = n = h;
    if (k) {
        if (e && e.length > 0) {
            n = h + ":" + e;
            if (c && c.length > 0) {
                m = h + ":" + e + ":" + c
            } else {
                n = h + ":" + e;
                m = h + ":" + e
            }
        } else {
            n = h;
            m = h
        }
    } else {
        n = h;
        m = h
    }
    if (n.length == 0 && m.length == 0 && G == "vendorPage") {
        n = l;
        m = l
    }
    var ad = "";
    var w = getCookie("aarp_seg");
    if (w) {
        w = w.split("LIFE_STAGE_SEGMENT=")[1];
        try {
            w = w.split("&")[0]
        } catch (al) {}
        switch (w) {
            case "1":
                ad = "sgma";
                break;
            case "2":
                ad = "sgmb";
                break;
            case "3":
                ad = "sgmc";
                break;
            case "4":
                ad = "sgmd";
                break;
            case "5":
                ad = "sgme";
                break;
            case "6":
                ad = "sgmf";
                break;
            case "7":
                ad = "sgmg";
                break;
            case "8":
                ad = "sgmh";
                break;
            default:
                ad = ""
        }
    }
    S = ad;
    if (b && b[0]) {
        p = b[0];
        if (b[1]) {
            p += "|" + b[1]
        }
        if (b[2]) {
            p += "|" + b[2]
        }
    } else {
        p = ""
    }
    if (P.match("/MSS/join/application")) {
        u = "joinrenew";
        aa = "MSS";
        v = "vendor";
        J = "aarp_org"
    }
    var x = {
        queryString: V,
        file: I,
        path: af,
        pathc: ae,
        dirIndex: z,
        pathEffective: T,
        pathcEffective: Z,
        pageName: X,
        sections: ac,
        taxonomyA: v,
        taxonomyB: u,
        topic: O,
        subtopic: K,
        internalSearchTerm: ai,
        noOfInternalSearchResults: s,
        internalSearchRefinement: a,
        e9VisitorType: y,
        cmsPageType: aa,
        adverstingAcceptance: ao,
        parameterString: E,
        pageTitle: g,
        PGID: j,
        hier2: q,
        hier3: p,
        channel: Y,
        server: W,
        hierarchy2Levels: n,
        hierarchy3Levels: m,
        lifeStageSegment: S,
        subDomain: ab,
        vendor: H,
        DFPSourceName: J,
        registrationStatus: R
    };
    return x
}
if (typeof AARP == "undefined" || AARP === null) {
    AARP = {}
}
AARP.pageInfo = getPageInfo();