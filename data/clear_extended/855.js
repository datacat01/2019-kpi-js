function CreateCookie(e, o, t) {
    var i = this;
    i.name = e, i.day = o, i.domain = t, i.path = "/", i.data = {}, i.existed = !1;
    var a = getCookieValue(e, document.cookie);
    if ("" == a) {
        if ("top" != PageSetting.page || e != gooSearch.HG2A) return;
        document.cookie = "searchstate=" + cookieDefState + ";domain=" + t, a = "searchstate=" + cookieDefState + ";domain=" + t
    }
    a = decodeURIComponent(a), i.existed = !0;
    var s = a.split("&");
    gooSearch.cookieSetArr[e] = [], cookieEach(s, function(o, t) {
        if (t = t.split("="), i.data[t[0]] = t[1], useHg2aKeyArr && $.inArray(t[0], useHg2aKeyArr) >= 0) {
            var a = "view" + t[0];
            gooSearch.cookieSetArr[e][a] = t[1]
        }
    })
}

function getCookieValue(e, o) {
    for (var t = o.split(";"), i = 0; i < t.length; i++) {
        var a = t[i].replace(/^[\s]+|[\s]+$/g, ""),
            s = a.indexOf("=");
        if (-1 != s) {
            var r = a.substring(0, s),
                n = a.substring(s + 1, a.length);
            if (r == e) return n
        }
    }
    return ""
}

function cookieEach(e, o) {
    if (e.length)
        for (var t = 0, i = e.length; t < i; t++) o.call(e[t], t, e[t]);
    else
        for (var a in e) o.call(e[a], a, e[a])
}
var common = {
    userAgent: "",
    ieVersion: null,
    actGlobalSet: 0,
    funcActCloseSetWin: function() {
        (common.actGlobalSet > 0 || gooSearch.actSuggest > 0 || gooSearch.actGlobalList > 0) && (gooSearch.actSuggest = 0, gooSearch.actGlobalList = 0, gooSearch.actCloseSetWindowDetail(), gooSearch.actCloseSetWindow())
    }
};
common.setIEVersion = function() {};
var gooSearch = {
    dom: {
        headerMargin: ".srcBx-inputSearch",
        menu: "#menu",
        headerForm: ".srcBx-mainInput",
        input: "input",
        ancer: "a",
        activeClass: "act",
        historyList: ".srcBx-history-list",
        historyListDom: ".srcBx-history-list > ul > li",
        historyItems: ".srcBx-history-list > li",
        historyListPlusDom: ".srcBx-history-list > li > div > span.plus",
        historyListValDom: ".srcBx-history-list > li > div > a",
        suggestListId: ".srcBx-suggest-list",
        suggestDomId: ".srcBx-autocomplete",
        suggestListAreaDom: ".srcBx-autocomplete > ul",
        suggestListDom: ".srcBx-autocomplete > ul > li",
        suggestListLineDom: ".srcBx-autocomplete > ul > li > div",
        hottrendsCaption: ".srcBx-hottrends-caption",
        historyCaption: ".srcBx-history-caption",
        historyClose: "#historyClose",
        historyListLine: ".srcBx-history-list > li > div",
        searchToolActBtn: ".srcBx-adSearchCondiBtn",
        mainSearchBtnTop: ".srcBx-btn-search input",
        searchBoxParent: "srcBx-parent"
    },
    baseVal: "",
    isTouch: "ontouchstart" in window,
    isComposition: !1,
    isDispHistories: !1,
    sgtApiCall: !1,
    modeState: "",
    SGT_MODE: "sgt",
    HIS_MODE: "his",
    HOT_MODE: "hot",
    NONE_MODE: "",
    HIS_MAX: 6,
    HOT_MAX: 4,
    hislen: 0,
    hotlen: 0,
    HIS_OFF_LABEL: "閉じる",
    changeZindexAreaArr: {
        ".btnSearch": "10",
        "#searchList": "30",
        "#design": "30",
        ".login": "11"
    },
    urlParams: [],
    inputNewStr: "",
    searchstateCookie: "",
    goopropertyCookie: "",
    HG2A: "searchstate",
    HW2A: "searchh",
    HW2A2: "searchh2",
    GOOPROPERTY: "gooproperty",
    cookieSetArr: [],
    DOMAIN_GOO: ".goo.ne.jp",
    actSuggest: 0,
    actSuggestNum: 0,
    suggestPos: 0,
    actGlobalList: 0,
    keyCode: {
        TAB_KEY: 9,
        ENTER_KEY: 13,
        SHIFT_KEY: 16,
        CTRL_KEY: 17,
        ALT_KEY: 18,
        L_WIN_KEY: 91,
        R_WIN_KEY: 92,
        L_ARROW_KEY: 37,
        R_ARROW_KEY: 39,
        TOP_ARROW_KEY: 38,
        DOWN_ARROW_KEY: 40
    }
};
gooSearch.init = function() {
    var e = this;
    common.setIEVersion(), mousedown_e = e.setmousedown_e(), $(e.dom.headerForm).val() && $(".srcBx-sb-clear-btn").show(), -1 != navigator.userAgent.indexOf("Firefox") ? ($(document).on("compositionstart", e.dom.headerForm, function(o) {
        e.isComposition = !0
    }), $(document).on("compositionend", e.dom.headerForm, function(o) {
        e.isComposition = !1, e.baseVal = $(e.dom.headerForm).val(), e.changeModeState(e.baseVal), e.renderSuggest()
    })) : e.isComposition = !1, gooSearch.createEmptySuggestList(), gooSearch.searchFormClickArea(), gooSearch.initOptionView(), $(".srcBx-gSetBtn").on("click", gooSearch.showConditionView), $("#sgSgtOff").on("click", gooSearch.clSuggestOffBtn), $(".srcBx-history-delBtn").on("click", gooSearch.clHistoryDelBtnId), $(".srcBx-sb-clear-btn").on("click", gooSearch.clSb_clear_btn), $(gooSearch.dom.headerForm).on("focus", gooSearch.clExec), $(".srcBx-inputSearch").find("input[type=text]").on("focus", gooSearch.fcsInputSearch), $(gooSearch.dom.headerForm).keydown(gooSearch.kdMainInputText), $(document).on("click", ".srcBx-autocomplete > ul > li > div > span.plus", gooSearch.clSuggestListPlusDom), $(document).on("click", gooSearch.dom.historyListPlusDom, gooSearch.clHistoryListPlusDom), $(document).on("click", gooSearch.dom.mainSearchBtnTop, gooSearch.clMainSearchBtnTop), $(".srcBx-overLay").on("click", gooSearch.clOverlay), $(document).on("ready load resize", function() {
        searchTopInputFocus.setFoucus()
    }), searchTopInputFocus.setFoucusEvt(), $(document).on("mousedown", function(e) {
        gooSearch.setDispBlockArea(), common.funcActCloseSetWin(), gooSearch.hideSuggestFrame()
    }), $(gooSearch.dom.headerForm).on("mousedown", function(e) {
        e.stopPropagation()
    }), $(gooSearch.dom.suggestDomId).on("mousedown", function(e) {
        e.stopPropagation()
    })
}, gooSearch.hideSuggest = function() {
    for (var e = this, o = 0; o < sgtMaxNum; o++) {
        var t = e.dom.suggestListDom + " > div";
        $($(t)[o]).css({
            display: "none"
        })
    }
}, gooSearch.createEmptySuggestList = function() {
    var e = this,
        o = $(this.dom.suggestListAreaDom);
    $(this.dom.suggestListDom).remove();
    for (var t = 0; t < sgtMaxNum; t++) {
        var i = $('<li><div style="position: relative;"></div></li>');
        o.append(i)
    }
    e.hideSuggest()
}, gooSearch.initSearchWord = function() {
    var e = this;
    $(this.dom.suggestListLineDom).css({
        background: ""
    }), $(this.dom.headerForm).val(e.baseVal)
}, gooSearch.clOverlay = function(e) {
    console.log("clOverlay"), e.preventDefault(), $(".srcBx-overLay").css("display", "none"), $("#conditionView").css("display", "none")
}, gooSearch.changeModeState = function(e) {
    var o = this;
    return e && "1" == o.searchstateCookie.get("SGT") ? void(o.modeState = o.SGT_MODE) : "1" == o.searchstateCookie.get("HIS") && SearchDetails.histories.length > 0 ? void(o.modeState = o.HIS_MODE) : void(o.modeState = o.HOT_MODE)
}, gooSearch.renderSuggest = function() {
    if (!searchTopInputFocus.isFirst || "none" != $(".srcBx-autocomplete").css("display")) {
        var e = this;
        e.suggestPos = 0;
        var o = $(e.dom.headerForm).val(),
            t = e.modeState;
        if (o && t == e.SGT_MODE && !e.isComposition) return e.initSuggest(), void e.actSuggestApi(o);
        e.isDispHistories || t != e.HIS_MODE && t != e.HOT_MODE || (e.initSuggest(), e.actHistories())
    }
}, gooSearch.actSearchBoxFuncLink = function(e, o) {
    var t = this;
    if (!t.inputNewStr) return location.href = SearchDetails.topUrl("", ""), !1;
    var i = encodeURIComponent(t.inputNewStr);
    return location.href = SearchDetails.searchUrl(i, e), !1
}, gooSearch.actSearchBoxFunc = function() {
    var e = this;
    common.funcActCloseSetWin(), e.inputNewStr = $(e.dom.headerForm).val();
    var o = SearchDetails.froms.searchBox.fromId,
        t = SearchDetails.froms.searchBox.clickId,
        i = e.suggestPos;
    i > 0 && (e.modeState == e.SGT_MODE ? (o = SearchDetails.froms.searchSgt.fromId, t = SearchDetails.froms.searchSgt.clickId) : 1 <= i && i <= e.hislen ? (o = SearchDetails.froms.searchHis.fromId, t = SearchDetails.froms.searchHis.clickId) : (o = SearchDetails.froms.searchHot.fromId, t = SearchDetails.froms.searchHot.clickId)), e.actSearchBoxFuncLink(o, t)
}, gooSearch.sgtCursorMoveUp = function() {
    var e = this;
    if (0 != e.actSuggestNum) {
        if (0 == --e.suggestPos) return void e.initSearchWord();
        e.suggestPos < 0 && (e.suggestPos = e.actSuggestNum);
        var o = e.suggestPos - 1,
            t = $(".srcBx-autocomplete > ul > li > div > a").eq(o).text();
        e.changeSearchWord(o, t)
    }
}, gooSearch.hisCursorMoveUp = function() {
    var e = this;
    if (null == e.suggestPos && (e.suggestPos = 0), 0 == --e.suggestPos) return void e.initSearchWord();
    e.suggestPos < 0 && (e.suggestPos = e.hislen + e.hotlen), e.hisUpdateInputText()
}, gooSearch.sgtCursorMoveDown = function() {
    var e = this;
    if (0 != e.actSuggestNum) {
        if (e.actSuggestNum <= e.suggestPos) return e.suggestPos = 0, void e.initSearchWord();
        null == e.suggestPos && (e.suggestPos = 0), e.suggestPos++;
        var o = e.suggestPos - 1,
            t = $(".srcBx-autocomplete > ul > li > div > a").eq(o).text();
        e.changeSearchWord(o, t)
    }
}, gooSearch.hisCursorMoveDown = function() {
    if (this.hislen + this.hotlen <= this.suggestPos) return this.suggestPos = 0, void this.initSearchWord();
    null == this.suggestPos && (this.suggestPos = 0), this.suggestPos++, this.hisUpdateInputText()
}, gooSearch.changeSearchWord = function(e, o) {
    var t = this;
    $(t.dom.headerForm).val(o), t.highlightCursor(t.dom.suggestListLineDom, e)
}, gooSearch.highlightCursor = function(e, o) {
    this.clearCursor(), $(e).eq(o).css({
        background: "#F0F0F0"
    })
}, gooSearch.hisUpdateInputText = function() {
    var e = this,
        o = this.suggestPos;
    if (0 != o)
        if (1 <= o && o <= e.hislen) {
            var t = e.dom.historyListLine,
                i = $(t + " > a").eq(o - 1).text();
            $(e.dom.headerForm).val(i), e.highlightCursor(t, o - 1)
        } else {
            var a = o - e.hislen - 1,
                t = e.dom.suggestListLineDom,
                i = $(t + " > a").eq(a).text();
            $(e.dom.headerForm).val(i), e.highlightCursor(t, a)
        }
}, gooSearch.hisCursorMoveDown = function() {
    var e = this;
    if (e.hislen + e.hotlen <= e.suggestPos) return e.suggestPos = 0, void e.initSearchWord();
    null == e.suggestPos && (e.suggestPos = 0), e.suggestPos++, e.hisUpdateInputText()
}, gooSearch.clearCursor = function() {
    $(".srcBx-autocomplete > ul > li > div").css({
        background: ""
    }), $(".srcBx-history-list > li > div").css({
        background: ""
    })
}, gooSearch.deleteHisData = function() {
    var e = this;
    deleteCookie(e.HW2A, e.DOMAIN_GOO), deleteCookie(e.HW2A, null), e.cookieSetArr[e.HW2A] = [], deleteCookie(e.HW2A2, e.DOMAIN_GOO), deleteCookie(e.HW2A2, null), e.cookieSetArr[e.HW2A2] = [], SearchDetails.histories = []
}, gooSearch.initSuggest = function() {
    var e = this;
    e.actSuggestNum = 0, e.inputNewStr = "", e.isDispHistories = !1, $(e.dom.historyCaption).css({
        display: "none"
    }), $(gooSearch.dom.historyClose).css({
        display: "none"
    }), $(gooSearch.dom.hottrendsCaption).css({
        display: "none"
    }), $(e.dom.historyItems).remove()
}, gooSearch.actSearchArea = function() {
    var e = this;
    setTimeout(function() {
        "search" == PageSetting.page && gooSearch.goToTopFunc(10), e.actOpenSetWindow(), e.actSuggest = 1
    }, 100)
}, gooSearch.showSuggestFrame = function() {
    var e = this;
    $(e.dom.suggestDomId).css({
        display: "block"
    })
}, gooSearch.hideSuggestFrame = function() {
    var e = this;
    $(e.dom.suggestDomId).css({
        display: "none"
    })
}, gooSearch.actOpenSetWindow = function() {
    var e = this;
    for (var o in e.changeZindexAreaArr) $(o).css({
        "z-index": e.changeZindexAreaArr[o]
    })
}, gooSearch.goToTopFunc = function(e) {
    $("body,html").animate({
        scrollTop: 0
    }, e)
}, gooSearch.actHistories = function() {
    var e = this;
    $("#sgSgtOff").text(e.HIS_OFF_LABEL), e.hislen = e.appendHistories(), e.hotlen = e.appendHottrends(e.hislen), e.isDispHistories = !0, gooSearch.showSuggestFrame()
}, gooSearch.appendHottrends = function(e) {
    var o = this,
        t = SearchDetails.hottrends;
    if (!t || 0 == t.length) return 0;
    var i = ($(o.dom.suggestListId), t.length);
    i > o.HOT_MAX && (i = o.HOT_MAX), i = o.HOT_MAX + o.HIS_MAX - e;
    for (var a = SearchDetails.froms.searchHot.fromId, s = SearchDetails.froms.searchHot.clickId, r = 0; r < sgtMaxNum; r++) {
        var n = $($(o.dom.suggestListDom + " > div")[r]);
        if (r < i) {
            var c = SearchDetails.searchUrlTag(encodeURIComponent(t[r]), a, s, t[r]);
            n.html(c + '<span class="plus">plus</span>'), n.css({
                display: "block"
            })
        } else n.css({
            display: "none"
        })
    }
    return $(gooSearch.dom.hottrendsCaption).css({
        display: "block"
    }), i
}, gooSearch.appendHistories = function() {
    var e = this,
        o = SearchDetails.histories;
    if (e.modeState == e.HOT_MODE) return 0;
    if (!o || 0 == o.length) return 0;
    $(e.dom.historyListDom).remove();
    var t = $(e.dom.historyList),
        i = o.length;
    i > e.HIS_MAX && (i = e.HIS_MAX);
    var a = SearchDetails.froms.searchHis.fromId,
        s = SearchDetails.froms.searchHis.clickId;
    if ($(e.dom.historyCaption).css({
            display: "block"
        }), 0 == i) return 0;
    for (var o = SearchDetails.histories, t = $(e.dom.historyList), a = SearchDetails.froms.searchHis.fromId, s = SearchDetails.froms.searchHis.clickId, r = 0; r < i; r++) {
        var n = SearchDetails.searchUrlClockTag(encodeURIComponent(o[r]), a, s, o[r], SearchDetails.CLOCK_IMG_TAG),
            c = '<li><div style="position: relative;">';
        c += n, c += '<span class="plus">plus</span></div></li>', t.append(c)
    }
    return i
}, gooSearch.actSuggestApi = function(e) {
    var o = this,
        t = e.replace(/\u3000/g, " ");
    if (t) {
        o.sgtApiCall && o.sgtApiCall.abort();
        var i = encodeURIComponent(t),
            a = SEARCHURL + "?MT=" + i + "&CL=suggest_search&IE=UTF-8";
        o.sgtApiCall = $.ajax({
            type: "GET",
            url: a,
            scriptCharset: "utf-8",
            dataType: "jsonp",
            jsonpCallback: "sgtLoadJsonp"
        }).done(function(e, t) {
            if ($("#sgSgtOff").text("閉じる"), o.modeState != o.SGT_MODE || !e.items) return o.sgtApiCall = !1, void(e.items || gooSearch.hideSuggestFrame());
            $(".srcBx-autocomplete > ul");
            o.actSuggestNum = e.items.length, o.actSuggestNum > sgtMaxNum && (o.actSuggestNum = sgtMaxNum), gooSearch.showSuggestFrame();
            for (var i = 0; i < sgtMaxNum; i++) {
                var a = $($(".srcBx-autocomplete > ul > li > div")[i]);
                if (i < o.actSuggestNum) {
                    var s = SearchDetails.searchUrlTag(e.items[i].urlWord, SearchDetails.froms.searchSgt.fromId, SearchDetails.froms.searchSgt.clickId, e.items[i].dispWord);
                    a.css({
                        display: "block"
                    }), a.html(s + '<span class="plus">plus</span>')
                } else a.css({
                    display: "none"
                })
            }
            o.sgtApiCall = !1
        }).fail(function(e) {
            o.sgtApiCall = !1
        }).always(function(e) {
            o.sgtApiCall = !1
        })
    }
}, gooSearch.searchstateCookie = new CreateCookie(gooSearch.HG2A, cookieExpires, cookieDomain), gooSearch.goopropertyCookie = new CreateCookie(gooSearch.GOOPROPERTY, cookieExpires, cookieDomain), CreateCookie.prototype.timeCfcnt = 864e5, CreateCookie.prototype.set = function(e, o) {
    var t = this;
    t.data[e] = o;
    var i = "";
    if (cookieEach(t.data, function(e, o) {
            "" != i && (i += "&"), $.inArray(e, SEARCHSTATE_WHITELIST) >= 0 && (i += e + "=" + o)
        }), i = t.name + "=" + encodeURIComponent(i), t.day || 0 == t.day) {
        var a = new Date;
        a.setTime(a.getTime() + t.day * t.timeCfcnt), i += "; expires=" + a.toGMTString()
    }
    t.path && (i += "; path=" + t.path), t.domain && (i += "; domain=" + t.domain), document.cookie = i
}, CreateCookie.prototype.get = function(e) {
    var o = this;
    return !!o.data[e] && o.data[e]
}, deleteCookie = function(e, o) {
    e += "=", dTime = new Date, dTime.setTime(0), null != o && (o = " domain=" + o), document.cookie = e + ";expires=" + dTime.toGMTString() + "; path=" + cookiePath + ";" + o
}, gooSearch.exec = function() {
    var e = this;
    e.clearCursor(), common.funcActCloseSetWin(), e.initSuggest(), e.actSearchArea(), e.changeModeState($(e.dom.headerForm).val()), e.renderSuggest()
}, gooSearch.searchFormClickArea = function() {
    var e = this;
    $(e.dom.headerMargin + " " + e.dom.input).click(function(e) {
        e.stopPropagation()
    }), $(e.dom.headerForm).focus(function() {
        $(gooSearch.dom.headerMargin).addClass(gooSearch.dom.activeClass)
    }), $(e.dom.headerForm).blur(function() {
        $(gooSearch.dom.headerMargin).removeClass(gooSearch.dom.activeClass)
    })
}, gooSearch.fcsInputSearch = function() {
    function e(e) {
        e.val() ? e.parent(".srcBx-parent").find(".srcBx-sb-clear-btn").show() : e.parent(".srcBx-parent").find(".srcBx-sb-clear-btn").hide()
    }
    var o;
    o = this;
    var t = $(this);
    o.checkTxtValSet = setInterval(function() {
        e(t)
    }, 20), $(o).blur(function() {
        clearInterval(void 0)
    })
}, gooSearch.setmousedown_e = function() {
    var e = this;
    e.baseVal = $(e.dom.headerForm).val(), e.isTouch && (mousedown_e = "touchstart")
}, gooSearch.clExec = function() {
    gooSearch.exec()
}, gooSearch.kdMainInputText = function(e) {
    if (e.keyCode == gooSearch.keyCode.SHIFT_KEY || e.keyCode == gooSearch.keyCode.CTRL_KEY || e.keyCode == gooSearch.keyCode.ALT_KEY || e.keyCode == gooSearch.keyCode.TAB_KEY || e.keyCode == gooSearch.keyCode.L_WIN_KEY || e.keyCode == gooSearch.keyCode.R_WIN_KEY || e.keyCode == gooSearch.keyCode.L_ARROW_KEY || e.keyCode == gooSearch.keyCode.R_ARROW_KEY) return !0;
    if (e.keyCode == gooSearch.keyCode.ENTER_KEY) return gooSearch.actSearchBoxFunc(), !1;
    var o = gooSearch.modeState;
    return e.keyCode == gooSearch.keyCode.TOP_ARROW_KEY ? (o == gooSearch.SGT_MODE ? gooSearch.sgtCursorMoveUp() : gooSearch.hisCursorMoveUp(), !1) : e.keyCode == gooSearch.keyCode.DOWN_ARROW_KEY ? (o == gooSearch.SGT_MODE ? gooSearch.sgtCursorMoveDown() : gooSearch.hisCursorMoveDown(), !1) : (gooSearch.clearCursor(), setTimeout(function() {
        var e = gooSearch;
        e.baseVal = $(e.dom.headerForm).val(), e.changeModeState(e.baseVal), e.renderSuggest()
    }, 20), !0)
}, gooSearch.clSb_clear_btn = function() {
    var e = this;
    $(this).parent(gooSearch.mainInputClass).find("input[type=text]").val("").focus().trigger(goo_pc_setting.mousedown_e), e.baseVal = "", e.isDispHistories = !1, gooSearch.renderSuggest()
}, gooSearch.clHistoryDelBtnId = function() {
    var e = gooSearch;
    e.isDispHistories = !1, e.deleteHisData(), e.renderSuggest()
}, gooSearch.initOptionView = function() {
    var e = this;
    $("#optionView").on("click", function(e) {
        e.stopPropagation()
    }), e.initConditionView(), e.initSettingView()
}, gooSearch.initSettingView = function() {
    var e = $("#optionView");
    e[0] && (PageSetting.optionView.settingView || (SettingView.init(e.find("#settingView")), PageSetting.optionView.settingView = SettingView, PageSetting.initSettingViewEvent()), PageSetting.initSettingItemState())
}, gooSearch.initConditionView = function() {
    var e = this,
        o = $("#optionView");
    if (o[0]) {
        PageSetting.optionView.conditionView || (ConditionView.init(o.find("#conditionView")), PageSetting.optionView.conditionView = ConditionView, e.initConditionViewEvent());
        var t = $(e.dom.headerForm).val();
        $("#adInputSearch").val(t)
    }
}, gooSearch.initConditionViewEvent = function() {
    var e = this;
    $("#adSearchCondiBtn").on("click", function(o) {
        var t = encodeURIComponent($("#adInputSearch").val()),
            i = encodeURIComponent($("#adAddword").val()),
            a = encodeURIComponent($("#adRemoveWord").val()),
            s = $("#adSearchTF").val(),
            r = $("#adSearchJP").val(),
            n = $("#adSearchBO").val(),
            c = encodeURIComponent($("#adSearchDomain").val()),
            h = $("#adSearchDS").val(),
            g = $("#adSearchFT").val(),
            u = $("#adSearchFTH").val(),
            l = "";
        e.urlParams.PT && (l += "&PT=" + e.urlParams.PT), e.urlParams.IE && (l += "&IE=" + e.urlParams.IE), e.urlParams.OE && (l += "&OE=" + e.urlParams.OE);
        var d = SearchDetails.optionSearchUrl(0, t, SearchDetails.FROM_VALUE_TOOL_DETAIL) + "&AT=" + i + "&ET=" + a + "&TF=" + s + "&JP=" + r + "&BO=" + n + "&Domain=" + c + "&DS=" + h + "&FT=" + g + "&FTH=" + u + l;
        return location.href = d, !1
    }), $("#searchCondiBtn").on("click", function(e) {
        var o = this,
            t = $("#adInputSearch").val();
        o.inputNewStr = t;
        var i = "";
        o.inputNewStr ? (o.inputNewStr = encodeURIComponent(o.inputNewStr), i = SearchDetails.searchUrlFilter(o.inputNewStr, SearchDetails.froms.searchFlt.fromId)) : i = SearchDetails.topUrl("", "");
        var a = "";
        if ($("#adAddword").val()) {
            a = "&AT=" + encodeURIComponent($("#adAddword").val())
        }
        return location.href = i + a, !1
    }), $("#conditionView form").has(gooSearch.dom.searchToolActBtn).on("keydown", function(e) {
        if (e.keyCode == gooSearch.keyCode.ENTER_KEY) return !1
    })
};
var ConditionView = {
    base: null,
    init: function(e) {
        var o = this;
        o.base = e, o.base.on("click", function(e) {
            e.stopPropagation()
        }), o.base.find(".srcBx-close-view").on("click", function(e) {
            e.preventDefault(), $(".srcBx-overLay").css("display", "none"), o.hide()
        })
    },
    show: function() {
        this.base.show()
    },
    hide: function() {
        this.base.hide()
    }
};
gooSearch.showConditionView = function(e) {
    $(".srcBx-overLay").css("display", "block"), gooSearch.hideSuggestFrame(), e && (e.preventDefault(), e.stopPropagation()), gooSearch.initConditionView(), PageSetting.optionView.conditionView && (ConditionView.show(), searchEvent.closeEdittingView(PageSetting.optionView.settingView))
}, gooSearch.initConditionView = function() {
    var e = this,
        o = $("#optionView");
    if (o[0]) {
        PageSetting.optionView.conditionView || (ConditionView.init(o.find("#conditionView")), PageSetting.optionView.conditionView = ConditionView, e.initConditionViewEvent());
        var t = $(e.dom.headerForm).val();
        $("#adInputSearch").val(t)
    }
}, gooSearch.closeAllWindow = function() {
    var e = this;
    e.actSuggest = 0, e.actCloseSetWindow(), e.actCloseSetWindowDetail(), gooSearch.hideSuggestFrame()
}, gooSearch.actCloseSetWindowDetail = function() {
    common.actGlobalSet = 0
}, gooSearch.setDispBlockArea = function(e) {
    for (var o = 0, t = PageSetting.popUpAreaArr.length; o < t; o++) $(PageSetting.popUpAreaArr[o]).css({
        display: ""
    });
    e && $(e).css({
        display: "block"
    })
}, gooSearch.actCloseSetWindow = function() {
    this.setDispBlockArea("")
}, gooSearch.clSuggestOffBtn = function() {
    gooSearch.closeAllWindow()
}, gooSearch.clMainSearchBtnTop = function(e) {
    return gooSearch.actSearchBoxFunc(), !1
}, gooSearch.clSuggestListPlusDom = function() {
    var e = gooSearch;
    PageSetting.clickLogFunc(SearchDetails.froms.searchPls.clickId), $(e.dom.headerForm).stop().blur();
    var o = $(".srcBx-autocomplete > ul > li > div > span.plus").index(this),
        t = $(".srcBx-autocomplete > ul > li > div > a").eq(o).text();
    $(e.dom.headerForm).val(t + " "), $(e.dom.headerForm).focus()
}, gooSearch.clHistoryListPlusDom = function() {
    var e = gooSearch;
    PageSetting.clickLogFunc(SearchDetails.froms.searchPls.clickId), $(e.dom.headerForm).stop().blur();
    var o = $(e.dom.historyListPlusDom).index(this),
        t = $(e.dom.historyListValDom).eq(o).text();
    $(e.dom.headerForm).val(t + " "), e.actSearchArea(), $(e.dom.headerForm).focus()
};
var SettingView = {
        base: null,
        init: function(e) {
            var o = this;
            o.base = e, o.base.on("click", function(e) {
                e.stopPropagation()
            }), o.base.find(".srcBx-close-view").on("click", function(e) {
                e.preventDefault(), $(".srcBx-overLay").css("display", "none"), o.hide()
            })
        },
        show: function() {
            this.base.show()
        },
        hide: function() {
            this.base.hide()
        }
    },
    searchTopInputFocus = {
        isFirst: !0,
        init: function() {
            $(gooSearch.dom.headerForm).focus()
        },
        inputClFirst: function() {
            $(gooSearch.dom.headerForm).on("click keypress keyup chenge", function() {
                gooSearch.showSuggestFrame(), $(gooSearch.dom.headerForm).off("click keypress keyup chenge"), searchTopInputFocus.isFirst = !1, $(this).focus()
            })
        },
        setFoucusEvt: function() {
            this.inputClFirst()
        },
        setFoucus: function() {}
    };
$(function() {
    gooSearch.init()
});