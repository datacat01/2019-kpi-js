if ("undefined" == typeof Reuters || null == Reuters) Reuters = {};
Reuters.namespace = function() {
    var a = arguments,
        d = null,
        b, c, e;
    for (b = 0; b < a.length; b += 1)
        for (e = ("" + a[b]).split("."), d = Reuters, c = "Reuters" == e[0] ? 1 : 0; c < e.length; c += 1) d[e[c]] = d[e[c]] || {}, d = d[e[c]];
    return d
};
Reuters.namespace("utils");
Reuters.utils.newsOrStockSearchText = "";
Reuters.utils.addLoadEvent = function(a, d) {
    if ("function" != typeof a) try {
        console.debug("function called addLoadEvent with a non-function param")
    } catch (b) {} else {
        var c = window.onload;
        window.onload = "function" != typeof window.onload ? void 0 !== d ? function() {
            a.call(d)
        } : a : function() {
            c();
            void 0 !== d ? a.call(d) : a()
        }
    }
};
Reuters.utils.enableSearchBox = function(a, d, b) {
    var c = document.getElementById(a),
        e = "",
        f, g = "",
        h = null == document.getElementById("searchBar") ? "#999;" : "#666;";
    c && ($("body").hasClass("BETACN") ? c.placeholder = "\u68c0\u7d22\u8def\u900f\u7f51\u7ad9" : $("body").hasClass("BETAJP") ? c.placeholder = "\u30ed\u30a4\u30bf\u30fc.co.jp\u3067\u691c\u7d22" : $("body").hasClass("BETADE") ? c.placeholder = "Suche bei Reuters" : $("body").hasClass("BETALTA") ? c.placeholder = "Buscar Reuters" : c.placeholder = "Search Reuters", c.focus(), c.value ==
        d && (c.style.cssText = "color: " + h), c.onfocus = function() {
            c.value == d && (c.style.cssText = "color: #fff;")
        }, c.onkeyup = function(b) {
            if ("searchfield" == a)
                if (b || (b = window.event), !b || 40 !== b.keyCode && 38 != b.keyCode)
                    if ("" != c.value) {
                        b = null === Reuters.info || "undefined" === typeof Reuters.info ? "us" : Reuters.utils.getRealEdition(Reuters.info.edition, "us");
                        if ("cn" == b || "betacn" == b || "jp" == b || "betajp" == b) return !0;
                        b = "//search." + b + ".reuters.com/query/suggestion.do?q\x3d" + encodeURIComponent(c.value) + "\x26site\x3d" + b + "\x26resultsPerPage\x3d5\x26callback\x3dReuters.utils.storeSuggestedSearchNewsResults";
                        Reuters.utils.loadScript("suggestedSearchJSON", b);
                        g = c.value;
                        e = ""
                    } else "" != c.value || 48 != b.keyCode && 8 != b.keyCode || (c.placeholder = "Search Reuters", document.getElementById("suggestedSearch") && (document.getElementById("suggestedSearch").innerHTML = ""), e = "");
            else b = 40 === b.keyCode ? 1 : -1, document.getElementById("suggestedSearchResults") && ("" == e ? (f = e = "sugg0", $("#" + e).addClass("selected")) : (e = $("#suggestedSearchResults").find(".selected").attr("id"), f = "sugg" + (parseInt(e.substr(4)) + b)), $("#" + e).removeClass("selected"),
                document.getElementById(f) ? ($("#" + f).addClass("selected"), c.value = document.getElementById(f).getAttribute("suggSearch"), e = f) : (e = "", c.value = g))
        }, b && (c.onkeypress = function(a) {
            a || (a = window.event);
            if (a && (13 === a.keyCode || 13 === a.which || 13 === a.charCode)) return "undefined" != typeof b && b(), !1
        }))
};
Reuters.utils.storeSuggestedSearchNewsResults = function(a) {
    Reuters.utils.suggestedSearchResults = a;
    var d = "US" == a.edition ? "www" : a.edition.toLowerCase();
    a = a.queryString;
    var b = a.indexOf(".");
    a = 0 < b ? a.substring(0, b) : a;
    d = "//" + d + ".reuters.com/do/marketDataAjax?type\x3dsearch\x26searchType\x3dsymbol\x26search\x3d" + encodeURIComponent(a) + "\x26callback\x3dReuters.utils.storeSuggestedSearchSymbolResults";
    Reuters.utils.loadScript("suggestedSearchSymbolJSON", d)
};
Reuters.utils.storeSuggestedSearchSymbolResults = function(a) {
    Reuters.utils.suggestedSearchResults.quoteSearchResult = a;
    a = document.getElementById("searchfield").value;
    if (0 >= Reuters.utils.suggestedSearchResults.quoteSearchResult.length) a = "//" + (null === Reuters.info || "undefined" === typeof Reuters.info ? "www" : Reuters.utils.getRealEdition(Reuters.info.edition, "www")) + ".reuters.com/do/marketDataAjax?type\x3dsearch\x26searchType\x3dname\x26search\x3d" + encodeURIComponent(a) + "\x26callback\x3dReuters.utils.storeSuggestedSearchNameResults",
        Reuters.utils.loadScript("suggestedSearchNameJSON", a);
    else {
        for (var d = [], b = 0; b < Reuters.utils.suggestedSearchResults.quoteSearchResult.length; b++) 0 === Reuters.utils.suggestedSearchResults.quoteSearchResult[b].ric.toLowerCase().lastIndexOf(a.toLowerCase(), 0) && d.push(Reuters.utils.suggestedSearchResults.quoteSearchResult[b]);
        Reuters.utils.suggestedSearchResults.quoteSearchResult = d;
        Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)
    }
};
Reuters.utils.storeSuggestedSearchNameResults = function(a) {
    Reuters.utils.suggestedSearchResults.quoteSearchResult = a;
    Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)
};
Reuters.utils.loadSuggestedSearch = function(a) {
    function d() {
        var a = document.getElementById("searchBar"),
            b = document.createElement("div");
        b.id = "suggestedSearch";
        var c = document.createElement("div");
        c.id = "suggestedSearchResults";
        b.appendChild(c);
        null == document.getElementById("masthead") ? a.appendChild(b) : a.append(b)
    }

    function b(a, b) {
        var c = document.createElement("div");
        c.id = a;
        if (b) {
            var d = document.createElement("h5");
            d.innerHTML = b;
            c.appendChild(d)
        }
        return c
    }

    function c(b) {
        var c = b.search(RegExp(a.queryString,
                "i")),
            d = c + a.queryString.length;
        return -1 == c ? b : b.substr(0, c) + "\x3cspan class\x3d'query'\x3e" + b.substr(c, a.queryString.length) + "\x3c/span\x3e" + b.substr(d)
    }
    document.getElementById("suggestedSearch") || d();
    (function() {
        var d = document.createElement("div"),
            f = 0;
        if (document.getElementById("suggestedSearchResults")) var g = document.getElementById("suggestedSearchResults");
        else g = document.createElement("div"), g.id = "suggestedSearchResults", document.getElementById("suggestedSearch").appendChild(g);
        var h = "//" + (null ===
            Reuters.info || "undefined" === typeof Reuters.info ? "www" : null === Reuters.info.edition || "undefined" === typeof Reuters.info.edition ? "www" : Reuters.utils.getRealEdition(Reuters.info.edition, "www")) + ".reuters.com";
        if (1 <= a.newsSearchResult.length) {
            var l = b("newsResults", ""),
                k = document.createElement("ul");
            k.id = "newsResultsList";
            l.appendChild(k);
            for (i = 0; i < a.newsSearchResult.length; i++) result = a.newsSearchResult[i], li = document.createElement("li"), li.id = "sugg" + f, li.setAttribute("suggSearch", result.queryString), li.innerHTML =
                '\x3ca href\x3d"' + h + "/search/news?blob\x3d" + result.queryString + '" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"search","label":$(this).attr("href")});\x3e' + c(result.queryString) + "\x3c/a\x3e", k.appendChild(li), f++;
            d.appendChild(l)
        }
        if (1 <= a.quoteSearchResult.length) {
            l = b("search-company-results", "");
            k = document.createElement("ul");
            k.id = "search-company-list";
            l.appendChild(k);
            for (i = 0; i < a.quoteSearchResult.length && 5 > i; i++) result = a.quoteSearchResult[i], tr = document.createElement("li"),
                tr.innerHTML = '\x3ca href\x3d"' + h + "/finance/stocks/overview?symbol\x3d" + result.ric + '"\x3e\x3cdiv class\x3d"ric"\x3e' + c(result.ric) + '\x3c/div\x3e\x3cdiv class\x3d"exchange"\x3e' + result.exchange + "\x3c/div\x3e\x3c/a\x3e", tr.id = "sugg" + f, tr.setAttribute("suggSearch", result.ric), k.appendChild(tr), f++;
            stockLink = document.createElement("div");
            stockLink.id = "search-company";
            stockLink.innerHTML = '\x3ca href\x3d"' + h + "/finance/stocks/lookup?search\x3d" + a.orignalqueryString.replace(/ /g, "+") + '\x26searchType\x3dany\x26sortBy\x3d\x26dateRange\x3d\x26comSortBy\x3dmarketcap"\x3eMore Stocks Results\x3c/a\x3e';
            l.appendChild(stockLink);
            d.appendChild(l)
        }
        g.innerHTML = d.innerHTML
    })()
};
Reuters.utils.loadScript = function(a, d) {
    var b = document.getElementById(a),
        c = document.getElementsByTagName("head")[0];
    null != b && c.removeChild && c.removeChild(b);
    document.createElement && (b = document.createElement("script"), b.id = a, b.setAttribute("type", "text/javascript"), b.setAttribute("src", Reuters.utils.convertStaticUrl(d)), b.setAttribute("charset", "UTF-8"));
    c.appendChild(b)
};
Reuters.utils.convertStaticUrl = function(a) {
    try {
        if (!parallelMediaHosts || null === parallelMediaHosts || "undefined" === typeof parallelMediaHosts) return a;
        var d = parallelMediaHosts;
        if (0 == a.indexOf("/resources") && d instanceof Array && 0 < d.length) {
            var b = a.lastIndexOf("/"),
                c = a.toLowerCase().substring(b + 1),
                e = c.lastIndexOf(".");
            0 < e && (c = c.substring(0, e));
            var f = c.lastIndexOf("-min");
            0 < f && (c = c.substring(0, f));
            var g = c.charCodeAt(c.length - 1) % d.length;
            return "//" + d[g] + a
        }
    } catch (h) {
        console.debug("convert static url error ! " +
            h), console.debug(a), console.debug(typeof a)
    }
    return a
};
Reuters.utils.addLoadEvent(function() {
    Reuters.utils.enableSearchBox("searchfield", Reuters.utils.newsOrStockSearchText)
});
Reuters.namespace("lang");
Reuters.lang.isEmpty = function(a) {
    return null === a || "undefined" === typeof a || "string" == typeof a && 0 >= a.length
};
Reuters.lang.isNotEmpty = function(a) {
    return !Reuters.lang.isEmpty(a)
};
Reuters.namespace("lang.Arrays");
Reuters.lang.Arrays.remove = function(a, d) {
    if (Reuters.lang.isNotEmpty(a) && Reuters.lang.isNotEmpty(d))
        for (var b = 0; b < a.length; b++)
            if (a[b] == d) return a.splice(b, 1), b
};
trace = function() {
    try {
        console.debug.apply(console, arguments)
    } catch (a) {
        try {
            console.debug = function() {
                for (var a = 0; a < arguments.length; a++) console.log(arguments[a])
            }, console.debug.apply(console, arguments)
        } catch (d) {}
    }
};
Reuters.utils.submitSearch = function() {
    if (0 == arguments.length) var a = document.getElementById("searchfield"),
        d = Reuters.utils.newsOrStockSearchText;
    else a = document.getElementById(arguments[0]), d = arguments[1];
    a = a.value;
    return "" == a || a == d ? !1 : !0
};
Reuters.utils.submitSearchNews = function() {
    var a = document.getElementById("newsSearchField").value;
    return "" == a || "Keyword" == a ? !1 : !0
};
Reuters.utils.submitSearchStocks = function() {
    var a = document.getElementById("stockSearchField").value;
    return "" == a || "Symbol" == a ? !1 : !0
};
Reuters.utils.submitSearchMedia = function() {
    var a = document.getElementById("multimediaSearchfield").value;
    return "" == a || "Search Multimedia" == a ? !1 : !0
};
Reuters.utils.submitSearchVideo = function() {
    var a = document.getElementById("videoSearchField").value;
    return "" == a || "Search Videos" == a ? !1 : !0
};
Reuters.utils.getRealEdition = function(a, d) {
    var b = a.toLowerCase();
    0 <= b.search(/betaus/i) ? b = d : 0 <= b.search(/betacn/i) ? b = "cn" : 0 <= b.search(/betajp/i) && (b = "jp");
    return b
};