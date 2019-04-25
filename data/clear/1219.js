var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
var ua = "";

if (userAgent.indexOf("msie") > -1) {
    ua = "ie";
} else if (userAgent.indexOf("firefox") > -1) {
    ua = "ff";
} else if (userAgent.indexOf("opera") > -1) {
    ua = "opera";
} else if (userAgent.indexOf("chrome") > -1) {
    ua = "chrome";
} else if (userAgent.indexOf("safari") > -1) {
    ua = "safari";
} else {
    ua = "unknown";
}

function escapeHtml(str) {
    str = str.replace(/&/g, "&amp;");
    str = str.replace(/"/g, "&quot;");
    str = str.replace(/'/g, "&#039;");
    str = str.replace(/</g, "&lt;");
    str = str.replace(/>/g, "&gt;");
    return str;
}

if (ua == "safari") {
    var ref;
    if (parent.frames.length > 0) ref = parent.document.referrer;
    else ref = document.referrer;
    ref = escapeHtml(ref);
    var img_src = "https://track.affiliate-b.com/start_1.php?" + "ref=" + ref + "&adv=e669V";
    var saf_src = "https://track.affiliate-b.com/saf.php?a=e669V";
    setTimeout(document.write('<img src="' + saf_src + '" width="1" height="1" boder="0" style="display:none;">'), 0);
    setTimeout(document.write('<img src="' + img_src + '" width="1" height="1" boder="0" style="display:none;">'), 0);

    var img_src_tafb = "https://t.afi-b.com/start_1.php?" + "ref=" + ref + "&adv=e669V";
    var saf_src_tafb = "https://t.afi-b.com/saf.php?a=e669V";
    setTimeout(document.write('<img src="' + saf_src_tafb + '" width="1" height="1" boder="0" style="display:none;">'), 0);
    setTimeout(document.write('<img src="' + img_src_tafb + '" width="1" height="1" boder="0" style="display:none;">'), 0);
} else {
    var ref;
    if (parent.frames.length > 0) ref = parent.document.referrer;
    else ref = document.referrer;
    ref = escapeHtml(ref);
    var img_src = "https://track.affiliate-b.com/start_1.php?" + "ref=" + ref + "&adv=e669V";
    var img_src_tafb = "https://track.affiliate-b.com/start_1.php?" + "ref=" + ref + "&adv=e669V";
    if (ua == "ie" || ua == "ff") {
        document.write('<img src="' + img_src + '" width="1" height="1" boder="0" style="display:none;">');
        document.write('<img src="' + img_src_tafb + '" width="1" height="1" boder="0" style="display:none;">');
    } else {
        setTimeout(document.write('<img src="' + img_src + '" width="1" height="1" boder="0" style="display:none;">'), 0);
        setTimeout(document.write('<img src="' + img_src_tafb + '" width="1" height="1" boder="0" style="display:none;">'), 0);
    }
}