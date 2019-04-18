var thisEdition;
Reuters.utils.getEdition = function() {
    var a = void 0 === $("body").attr("class") ? "BETAUS" : $("body").attr("class"),
        b = 0 < a.length ? !0 : !1,
        c = "BETAUS" === a.split(" ")[0] ? !1 : !0;
    thisEdition = b && c ? a.split(" ")[0] : "US";
    "" == thisEdition && (thisEdition = -1 < window.location.href.indexOf("uk.reuters") ? "UK" : -1 < window.location.href.indexOf("in.reuters") ? "IN" : -1 < window.location.href.indexOf("cn.reuters") ? "BETACN" : -1 < window.location.href.indexOf("jp.reuters") ? "BETAJP" : -1 < window.location.href.indexOf("de.reuters") ? "BETADE" : -1 < window.location.href.indexOf("ar.reuters") ?
        "BETAAR" : -1 < window.location.href.indexOf("lta.reuters") ? "BETALTA" : "US");
    return thisEdition
};
Reuters.utils.isLoggedIn = function() {
    var a = 1,
        b = Cookies.get("customerId"),
        c = Cookies.get("edition"),
        d = null !== b,
        b = "@" !== b;
    if (-1 < window.location.host.indexOf("us") || -1 < window.location.host.indexOf("www")) a = 1;
    else if (-1 < window.location.host.indexOf("uk")) a = 2;
    else if (-1 < window.location.host.indexOf("in")) a = 9;
    else if (-1 < window.location.host.indexOf("cn") || -1 < window.location.host.indexOf("betacn")) a = 10;
    else if (-1 < window.location.host.indexOf("jp") || -1 < window.location.host.indexOf("betajp")) a = 4;
    return d && b &&
        a == c
};
Reuters.utils.USHeaderToolsLoggedInHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/Reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank"   onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.UKHeaderToolsLoggedInHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/ReutersUK" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/ReutersUK" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.INHeaderToolsLoggedInHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/ReutersIndia" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/india.reuters" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETACNHeaderToolsLoggedInHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"#" onclick\x3d"weChatDiv_show(\'followUsWeChatBox\')" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"wechat_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-wechat"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETAJPHeaderToolsLoggedInHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters_co_jp" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/Reuters.co.jp" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.USHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/Reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank"   onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.UKHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/ReutersUK" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/ReutersUK" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.INHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/ReutersIndia" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/india.reuters" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETACNHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"#" onclick\x3d"weChatDiv_show(\'followUsWeChatBox\')"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"wechat_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-wechat"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETAJPHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters_co_jp" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/Reuters.co.jp" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.linkedin.com/company/10256858/" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"linkedin_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-linkedin"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETADEHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters_de" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/ReutersDeutschland" target\x3d"_blank" onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETAARHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/Reuters" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.BETALTAHeaderToolsLoggedOutHTML = function() {
    return '\x3cul class\x3d"horizontal-list"\x3e\x3cli class\x3d"util-social"\x3e\x3ca href\x3d"https://twitter.com/ReutersLatam" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"twitter_follow"}); \x3e\x3cdiv  class\x3d"follow-header-button follow-header-twitter"\x3e\x3c/div\x3e\x3c/a\x3e\x3ca href\x3d"https://www.facebook.com/ReutersLatam" target\x3d"_blank"  onmousedown\x3ddataLayer.push({"event":"click-event","category":"navigation","action":"social","label":"facebook_follow"}); \x3e\x3cdiv class\x3d"follow-header-button follow-header-facebook"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e'
};
Reuters.utils.logout = function() {
    location.href = null === Reuters.info || "undefined" === typeof Reuters.info ? "https://commerce.us.reuters.com/login/pages/login/logout.do?go\x3d" + encodeURIComponent(location.href) : "BETACN" === thisEdition ? "https://commerce.cn.reuters.com/login/pages/login/logout.do?go\x3d" + encodeURIComponent(location.href) : "BETAJP" === thisEdition ? "https://commerce.jp.reuters.com/login/pages/login/logout.do?go\x3d" + encodeURIComponent(location.href) : "https://commerce." + thisEdition + ".reuters.com/login/pages/login/logout.do?go\x3d" +
        encodeURIComponent(location.href)
};
Reuters.utils.loadUtilities = function() {
    var a = Reuters.utils,
        b = thisEdition.toUpperCase(),
        c = $("#utilities");
    a.isLoggedIn() ? c.html(a[b + "HeaderToolsLoggedInHTML"]()) : c.html(a[b + "HeaderToolsLoggedOutHTML"]())
};
Reuters.utils.getEdition();
Reuters.utils.loadUtilities();