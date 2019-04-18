var goo_pc_detail = {},
    PageSetting = {
        page: "top",
        optionView: {
            conditionView: null,
            settingView: null
        },
        popUpAreaArr: ["#searchTool", "#searchList", "#loginId", "#logout", "#design"],
        initSettingViewEvent: function() {},
        initSettingItemState: function() {},
        clickLogFunc: function(e) {}
    },
    SEARCHURL = "//search.goo.ne.jp/sgt_search.jsp",
    cookieDomain = ".goo.ne.jp",
    cookiePath = "/",
    cookieExpires = 1095,
    ieValue = "UTF-8",
    oeValue = "UTF-8",
    searchDomain = "https://search.goo.ne.jp/",
    greenSearchDomain = "https://green.search.goo.ne.jp/",
    g_sbd = "goo001",
    SEARCHSTATE_WHITELIST = ["IME", "OWI", "SGT", "NAV", "HISW", "JP", "GPS", "DIS", "IMR", "OCRS", "HIS", "SPU", "TSZ", "NKW", "DC", "OCR"],
    isGreen = -1 != window.location.href.search("green"),
    cookieSSDefArr = {
        DC: "10",
        DIS: "1",
        OCR: "0",
        IME: "1",
        SGT: "1",
        HIS: "1",
        HISW: "0",
        OWI: "0",
        TSZ: "",
        CLR: "",
        OCRS: "",
        IMR: "",
        GPS: "1"
    },
    cookieDefState = "HISW%3D1%26DC%3D10%26DIS%3D1%26OCR%3D0%26IME%3D0%26SGT%3D1%26HIS%3D1%26OWI%3D0%26TSZ%3D%26OCRS%3D%26IMR%3D%26GPS%3D1%26SPU%3D1",
    useHg2aKeyArr = ["DC", "DIS", "OCR", "IME", "SGT", "HIS", "OWI", "TSZ", "CLR", "GPS"],
    sgtMaxNum = 10;
SearchDetails = {}, SearchDetails.FROM_VALUE_TOOL_DETAIL = "form_adv", SearchDetails.FROM_VALUE_TOOL_SETTING = "form_setting", SearchDetails.BTN_PLUS_IMG_TAG = "<i></i>", SearchDetails.CLOCK_IMG_TAG = '<img src="' + cdn_server + '/img/clock.png" alt="" title="">', SearchDetails.froms = {
    searchBox: {
        clickId: "pchead-suggest-5",
        fromId: "gootop"
    },
    headerSB: {
        clickId: "s_b_header_tap_web"
    },
    footerSB: {
        clickId: "s_b_footer_tap_web"
    },
    searchSgt: {
        clickId: "pchead-suggest-1",
        fromId: "suggest_top"
    },
    searchPls: {
        clickId: "pchead-suggest-2"
    },
    searchFlt: {
        clickId: "tool_rtf_web",
        fromId: "tool_web"
    },
    searchHis: {
        clickId: click_id_prefix + "head-history-",
        fromId: "history_top"
    },
    searchHot: {
        clickId: click_id_prefix + "head-latest-",
        fromId: "suggest_top_newkw"
    },
    searchTlBtm: {
        clickId: "searchbtm_rtf_web",
        fromId: "tool_web"
    },
    searchBoxBtm: {
        clickId: "s_b_btm_web",
        fromId: "s_b_btm_web"
    },
    searchBtnAdvDefault: {
        clickId: "s_b_adv_default_web",
        fromId: "s_b_adv_default_web"
    },
    searchBtnAdvSave: {
        clickId: "s_b_adv_save_web",
        fromId: "s_b_adv_save_web"
    },
    bsearchBtnAdvImage: {
        clickId: "s_b_adv_image",
        fromId: "s_b_adv_image"
    },
    bsearchBtnAdvMovie: {
        clickId: "s_b_adv_movie",
        fromId: "s_b_adv_movie"
    },
    imageResult: {
        clickId: "result_image",
        fromId: "result_image"
    },
    imagePrev: {
        clickId: "prev_web",
        fromId: "prev_web"
    },
    imageNext: {
        clickId: "next_web",
        fromId: "next_web"
    },
    imageDetailSlidePlay: {
        clickId: "image_detail_slide_play",
        fromId: "image_detail_slide_play"
    },
    imageDetailSlidePause: {
        clickId: "image_detail_slide_pause",
        fromId: "image_detail_slide_pause"
    },
    imageDetailSlideCount: {
        clickId: "image_detail_slide_count",
        fromId: "image_detail_slide_count"
    },
    imageDetailBack: {
        clickId: "image_detail_back",
        fromId: "image_detail_back"
    },
    imageDetailPrev: {
        clickId: "image_detail_prev",
        fromId: "image_detail_prev"
    },
    imageDetailNext: {
        clickId: "image_detail_next",
        fromId: "image_detail_next"
    },
    imageDetailOriginalPage: {
        clickId: "image_detail_original_page",
        fromId: "image_detail_original_page"
    }
}, SearchDetails.createSearchUrl = function(e, a, r, i, c) {
    return e + "?MT=" + i + "&mode=" + r + "&sbd=" + a + "&IE=" + ieValue + "&OE=" + oeValue + "&from=" + c
}, SearchDetails.blogSearchUrl = function(e, a) {
    return SearchDetails.createSearchUrl(searchDomain + "web.jsp", g_sbd, 0, e, a)
}, SearchDetails.greenSearchUrl = function(e, a) {
    return SearchDetails.createSearchUrl(greenSearchDomain + "search", g_sbd, 0, e, a)
}, SearchDetails.webSearchUrl = function(e, a) {
    return SearchDetails.createSearchUrl(searchDomain + "web.jsp", g_sbd, 0, e, a)
}, SearchDetails.topUrl = function(e, a) {
    return SearchDetails.createSearchUrl(isGreen ? greenSearchDomain : searchDomain, g_sbd, 0, e, a)
}, SearchDetails.optionUrl = function(e, a) {
    return SearchDetails.createSearchUrl(searchDomain, g_sbd, 0, e, a)
}, SearchDetails.imageDetailUrl = function(e, a) {
    return SearchDetails.createSearchUrl(searchDomain + "imageDetail", g_sbd, 0, e, a)
}, SearchDetails.searchUrl = function(e, a) {
    return isGreen ? SearchDetails.greenSearchUrl(e, a) + PT : SearchDetails.webSearchUrl(e, a) + PT
}, SearchDetails.optionSearchUrl = function(e, a, r) {
    var i = searchDomain + "/web.jsp",
        c = greenSearchDomain + "/search";
    return SearchDetails.createSearchUrl(isGreen ? c : i, g_sbd, e, a, r)
}, SearchDetails.searchUrlTag = function(e, a, r, i) {
    return '<a href="' + SearchDetails.searchUrl(e, a) + '" >' + SearchDetails.escapeHtml(i) + "</a>"
}, SearchDetails.searchHisUrlTag = function(e, a, r, i) {
    return '<a href="' + SearchDetails.searchUrl(e, a) + '" data-cid="' + r + '" >' + SearchDetails.escapeHtml(i) + "</a>"
}, SearchDetails.searchUrlClockTag = function(e, a, r, i, c) {
    var t = SearchDetails.searchUrl(e, a),
        l = '<a href="' + t + '" data-cid="' + r + '">';
    return l += c, l += i, l += "</a>"
}, SearchDetails.searchPlsTag = function() {
    return '<a href="javascript:void(0)">' + SearchDetails.BTN_PLUS_IMG_TAG + "</a>"
}, SearchDetails.value = function(e) {
    var a = $(e);
    if (!a) return "";
    var r = a.val();
    return r || ""
}, SearchDetails.searchUrlFilter = function(e, a) {
    var r, i = SearchDetails.searchUrl(e, a),
        r = SearchDetails.value("#searchTf");
    return i = i + "&TF=" + r + "&JP=" + SearchDetails.value("#searchJp") + "&BO=" + SearchDetails.value("#searchBo") + "&GPS=" + SearchDetails.value("#searchGps")
}, SearchDetails.cdnPath = function(e) {
    return "/cdn/v0/" + e
}, SearchDetails.escapeHtml = function(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}, SearchDetails.unescapeHtml = function(e) {
    return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#0*39;/g, "'")
};
var searchEvent = {
        closeEdittingView: function(e) {
            return !1
        }
    },
    goo_pc_setting = {
        mousedown_e: "mousedown"
    };