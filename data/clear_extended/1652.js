function wpss_get_ckf(e) {
    var t = document.cookie.split(";");
    for (var s in t)
        if (t.hasOwnProperty(s))
            if (-1 != t[s].indexOf(e + "=")) return decodeURIComponent(t[s].split("=")[1]);
    return ""
}

function wpss_set_ckf(e, t, s, n, i, _) {
    var c = new Date;
    c.setTime(c.getTime()), s && (s = 1e3 * s * 60 * 60 * 24);
    var r = new Date(c.getTime() + s);
    document.cookie = e + "=" + escape(t) + (s ? ";expires=" + r.toGMTString() : "") + (n ? ";path=" + n : "") + (i ? ";domain=" + i : "") + (_ ? ";secure" : "")
}

function wpss_init_ckf() {
    var e = wpss_get_ckf("JCS_INENREF"),
        t = wpss_get_ckf("JCS_INENTIM"),
        s = new Date,
        n = s.getTime(),
        i = document.referrer;
    e || wpss_set_ckf("JCS_INENREF", i, 1 / 24, "/"), t || wpss_set_ckf("JCS_INENTIM", n, 1 / 24, "/");
    var h = window.history.length;
    var p = navigator.plugins.length;
    var q = "N:" + p.toString();
    var u = "";
    for (var j = 0; j < p; j++) {
        var k = j + 1;
        u += "[" + k + "][" + navigator.plugins[j].name + "] ";
    }
    var d = q + " | " + window.btoa(u);
    wpss_set_ckf("_wpss_h_", h, 1 / 24, "/");
    wpss_set_ckf("_wpss_p_", d, 1 / 24, "/");
}
wpss_init_ckf();
jQuery(document).ready(function($) {
    var f = "form[method='post']";
    $(f).submit(function() {
        $("<input>").attr("type", "hidden").attr("name", "WP55T3S7XJS2").attr("value", "7H5W8K53HX").appendTo(f);
        return true;
    })
});