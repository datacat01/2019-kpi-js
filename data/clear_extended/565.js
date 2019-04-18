var _ntes_nacc;
var _ntes_nvid = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
var _ntes_nvtm = 0;
var _ntes_nvfi = 0;
var _ntes_nvsf = 1;
var _ntes_nstm = 0;
var _ntes_nurl = "";
var _ntes_ntit = "";
var _ntes_nref = "";
var _ntes_nres = "";
var _ntes_nlag = "";
var _ntes_nscd = "";
var _ntes_nlmf = 0;
var _ntes_flsh = "";
var _ntes_nssn = "";
var _ntes_surv = 0;

function _ntes_void() {}
var _ntes_domain_array = ["163.com", "188.com", "netease.com", "126.com", "126.net", "nease.net", "yeah.net", "gz2010.cn", "co188.com", "warcraftchina.com", "youdao.com", "leihuo.net", "gzapg2010.cn", "126.am", "lofter.com", "lede.com", "diablo3.cc", "starcraft2.com.cn", "battlenet.com.cn", "wowchina.com", "hearthstone.com.cn", "heroesofthestorm.com.cn", "bobo.com", "yixin.im", "kaola.com", "diablo3.com.cn", "tottenhamhotspur.com", "temai163.com", "16163.com", "iaafbeijing2015.com", "playoverwatch.cn", "lmlc.com", "blizzard.cn", "yunyanzx.com", "immortalconquest.com", "onmyojigame.com", "onmyojigame.jp", "blizzardtv.cn", "knivesout.jp", "knives-out.com", "fortcraft.com", "onmyojiarena.jp", "rulesofsurvivalgame.com", "onmyojiarena.tw", "onmyojiarena.us", "creative-destruction.com", "onmyojiarena.com", "leihuo.net.cn", "legend-risingempire.com", "legend-risingempire.jp", "hhtcex.com", "creative-destructionbbs.com", "letsplayuno.com", "legend-risingempire.tw", "kingofhunters.com", "identityv.jp", "cyberhunter.game", "arthome163.com", "magesupremegame.com", "stormarenagame.com", "roverrage.com", "stickfightmobile.com", "lifeafter.tw", "lifeafter.game", "lifeafter.jp", "hellothreekingdoms.com", "sywmsg.com", "cardboardclashgame.com", "worldslg.com", "cdgame.com", "marvelsuperwar.com", "marvelsuperwar.tw", "superwar.tw", "crusadersoflight.com", "mumuglobal.com", "huajia.im", "huajia.org.cn", "cofmobile.com", "playdisorder.com", "neteasegames.com", "samgukcg.com", "supermechachampions.com", "supermechachampions.tw", "unknown-future.jp"];
var _non_ntes_domain_array = ["163.letv.com"];
var _ntes_cdmn = ntes_get_domain();
var _non_ntes_cdmn = non_ntes_get_domain();
var _ntes_src_addr = "//analytics.163.com";
var _ntes_cookie_enabled = null;
var _ntes_localstorage_enabled = null;
var _ntes_page_data = {
    initTime: window.performance && window.performance.timing ? window.performance.timing.connectStart : +new Date(),
    getRunTime: function() {
        return Math.round((+new Date() - this.initTime) / 1000)
    },
    maxScroll: 0,
    maxClick: 0,
    actionTime: 0,
    fireAction: function() {
        var a = _ntes_page_data;
        if (!a._actStart) {
            a._actStart = +new Date()
        }
        a._actTimer && window.clearTimeout(a._actTimer);
        a._actTimer = window.setTimeout(a.actStop, 20000)
    },
    actStop: function() {
        var a = _ntes_page_data;
        a.actionTime += (+new Date() - a._actStart - 20000);
        a._actStart = 0
    },
    getActionTime: function() {
        var a = this;
        if (a._actStart) {
            return Math.round((a.actionTime + +new Date() - a._actStart) / 1000)
        } else {
            return Math.round(a.actionTime / 1000)
        }
    }
};

function ntes_set_uid(b) {
    var a = "_ntes_nnid";
    if (_ntes_cookie_enabled) {
        ntes_set_cookie_long(a, b)
    } else {
        if (_ntes_localstorage_enabled) {
            window.localStorage.setItem(a, b)
        }
    }
}

function ntes_get_uid() {
    var b = "_ntes_nnid";
    var a = null;
    if (_ntes_cookie_enabled) {
        a = ntes_get_cookie(b);
        a = a === -1 ? null : a
    } else {
        if (_ntes_localstorage_enabled) {
            a = window.localStorage.getItem(b)
        }
    }
    return a
}

function neteaseTracker(m, a, n, l) {
    if (is_spider()) {
        return
    }
    var f = l || _ntes_nacc;
    _ntes_nurl = escape(a || document.location);
    _ntes_ntit = escape(n || document.title);
    _ntes_nref = m === true ? "" : escape(m || document.referrer);
    _ntes_flsh = ntes_get_flashver();
    var b = (new Date()).getTime();
    if (_ntes_cookie_enabled == null) {
        document.cookie = "__ntes__test__cookies=" + b;
        _ntes_cookie_enabled = (ntes_get_cookie("__ntes__test__cookies") == b) ? true : false;
        document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
    }
    if (_ntes_localstorage_enabled === null) {
        try {
            window.localStorage.setItem("_ntes_localstorage_enabled", "true");
            window.localStorage.removeItem("_ntes_localstorage_enabled");
            _ntes_localstorage_enabled = true
        } catch (e) {
            _ntes_localstorage_enabled = false
        }
    }
    if (f == "undefined" || !f) {
        return
    }
    if (_ntes_nurl.indexOf("http") != 0) {
        return
    }
    var d = 0;
    for (var g = 0; g < _ntes_domain_array.length; g++) {
        if (_ntes_cdmn == "." + _ntes_domain_array[g]) {
            d = 1;
            break
        }
    }
    if (d == 0) {
        for (g = 0; g < _non_ntes_domain_array.length; g++) {
            if (_non_ntes_cdmn == "." + _non_ntes_domain_array[g]) {
                d = 1;
                _ntes_cdmn = _non_ntes_cdmn;
                break
            }
        }
    }
    if (d == 1) {
        var h = ntes_get_uid();
        if (!h) {
            if (_ntes_cookie_enabled || _ntes_localstorage_enabled) {
                _ntes_nvid = fetch_visitor_hash();
                _ntes_nvfi = 1;
                ntes_set_uid(_ntes_nvid + "," + (new Date).getTime())
            }
        } else {
            var p = h.indexOf(",");
            var q = h.indexOf("|");
            var j = false;
            if (q == -1) {
                q = h.length
            }
            _ntes_nvid = h.substr(0, p);
            _ntes_surv = h.substr(p + 1, q - p - 1);
            if (_ntes_surv == 0) {
                _ntes_surv = (new Date).getTime();
                j = true
            }
            if (!_ntes_nvid) {
                _ntes_nvid = fetch_visitor_hash();
                j = true
            }
            if (j) {
                ntes_set_uid(_ntes_nvid + "," + _ntes_surv)
            }
            if (_ntes_surv != 0 && (b - _ntes_surv) > 365 * 86400 * 1000) {
                _ntes_surv = 0;
                ntes_set_uid(_ntes_nvid + "," + (new Date).getTime())
            }
        }

        function c(r, i) {
            var t = ntes_get_cookie(r),
                s = ntes_get_cookie(i);
            return t == -1 ? s == -1 ? "" : s : t
        }
        _ntes_nssn = c("P_INFO", "P_OINFO");
        _ntes_nssn = _ntes_nssn ? _ntes_nssn.substr(0, _ntes_nssn.indexOf("|")) : "";
        _ntes_nstm = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var o = ["_nacc=", f, "&_nvid=", _ntes_nvid, "&_nvtm=", _ntes_nvtm, "&_nvsf=", _ntes_nvsf, "&_nvfi=", _ntes_nvfi, "&_nlag=", _ntes_nlag, "&_nlmf=", _ntes_nlmf, "&_nres=", _ntes_nres, "&_nscd=", _ntes_nscd, "&_nstm=", _ntes_nstm, "&_nurl=", _ntes_nurl, "&_ntit=", _ntes_ntit, "&_nref=", _ntes_nref, "&_nfla=", _ntes_flsh, "&_nssn=", _ntes_nssn, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        _ntes_nvsf = 0;
        _ntes_sendInfo("base", _ntes_src_addr + "/ntes?" + o, neteaseTracker.callback);
        neteaseTracker.callback = null;
        if (1) {
            var k = /(?:iPhone|iPad|iPod|Android|Adr |Windows Phone)/i;
            if (_ntes_nacc != "analytics" && _ntes_nacc != "research" && _ntes_nacc != "siteinfo" && _ntes_nurl.indexOf("https") != 0 && !k.test(navigator.userAgent)) {
                ntes_survey_popup()
            }
        }
    }
}

function neteaseClickTracker(p, m, b, o, k) {
    if (!p) {
        return
    }
    if (is_spider()) {
        return
    }
    var a = p;
    if (a.nodeType === 1 || a.nodeType === 9) {
        a = [p]
    }
    var e = a.length,
        g = 0,
        f, q, j;
    if (!e) {
        return
    }
    var d = function(i) {
            var r = _ntes_fixEvent(i || window.event),
                n = this;
            if (this.clickTrackeState == 2) {
                return
            }
            if (this.clickTrackeState == 1) {
                r.preventDefault();
                r.stopPropagation();
                return
            }
            this.clickTrackeState = 1;
            window.setTimeout(function() {
                n.clickTrackeState = 2
            }, 500);
            neteaseTracker.callback = function() {
                var s = n.getAttribute("href");
                if (s) {
                    window.location.href = s
                }
                window.setTimeout(function() {
                    n.clickTrackeState = 0
                }, 500)
            };
            neteaseTracker(m, b, o, k);
            window.setTimeout(function() {
                if (neteaseTracker.callback) {
                    neteaseTracker.callback()
                }
            }, 1500);
            r.preventDefault()
        },
        h = function() {
            neteaseTracker(m, b, o, k)
        };
    var l = document.getElementsByTagName("head")[0],
        c;
    if (l) {
        c = (l.getElementsByTagName("base")[0] || {}).target
    }
    for (; g < e; g++) {
        f = a[g];
        q = f.tagName.toLowerCase();
        if (q == "a") {
            j = f.getAttribute("target") || c;
            if (!j || j == "_self") {
                _ntes_bindEvent(f, "click", d);
                continue
            }
        }
        _ntes_bindEvent(f, "click", h)
    }
}

function ntes_survey_popup() {
    if (_ntes_surv == 0) {
        var a = (Math.round(Math.random() * 255)).toString(16);
        a = a.length == 1 ? "0" + a : a;
        if (typeof(_ntes_nvid) == "undefined" || _ntes_nvid.length != 32 || _ntes_nvid.substr(30, 2) != a) {
            return
        }
        var b = "//research.163.com/survey/";
        b = b + "?_nacc=" + _ntes_nacc + "&_nvid=" + _ntes_nvid;
        window.open(b, "", "width=680, height=450, top=100, left=120, scrollbars=yes");
        ntes_set_uid(_ntes_nvid + "," + (new Date).getTime())
    }
}

function ntes_get_navigation_info() {
    _ntes_nres = "-";
    _ntes_nscd = "-";
    _ntes_nlag = "-";
    var c = window.self,
        b = window.screen,
        a = window.navigator;
    if (c.screen) {
        _ntes_nres = b.width + "x" + b.height;
        _ntes_nscd = b.colorDepth + "-bit"
    } else {
        if (c.java) {
            var e = java.awt.Toolkit.getDefaultToolkit();
            var f = e.getScreenSize();
            _ntes_nres = f.width + "x" + f.height
        }
    }
    if (a.language) {
        _ntes_nlag = a.language.toLowerCase()
    } else {
        if (a.browserLanguage) {
            _ntes_nlag = a.browserLanguage.toLowerCase()
        }
    }
    var g = new Date(document.lastModified);
    _ntes_nlmf = g.getTime() / 1000
}

function fetch_visitor_hash() {
    var c = new Date();
    var b = document.body.clientWidth + ":" + document.body.clientHeight;
    var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
    return ntes_hex_md5(a)
}

function ntes_get_domain() {
    var f = document.domain;
    var d = f.split(".");
    var c = d.length;
    var e = /^\d+$/g;
    if (e.test(d[c - 1])) {
        return f
    }
    if (d.length < 3) {
        return "." + f
    }
    var g = ["com", "net", "org", "gov", "co"];
    var b, a = false;
    for (b = 0; b < g.length; b++) {
        if (d[c - 2] == g[b]) {
            a = true
        }
    }
    if (!a) {
        return "." + d[c - 2] + "." + d[c - 1]
    } else {
        return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
    }
}

function non_ntes_get_domain() {
    var e = document.domain;
    var d = e.split(".");
    var c = d.length;
    pattern = /^\d+$/g;
    if (pattern.test(d[c - 1])) {
        return e
    }
    if (d.length < 4) {
        return "." + e
    }
    var f = ["com", "net", "org", "gov", "co"];
    var b, a = false;
    for (b = 0; b < f.length; b++) {
        if (d[c - 2] == f[b]) {
            a = true
        }
    }
    if (!a) {
        return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
    } else {
        return "." + d[c - 4] + "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
    }
}

function ntes_set_cookie_long(a, c) {
    var b = new Date();
    b.setTime(b.getTime() + 1000 * 60 * 60 * 24 * 365 * 100);
    document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + _ntes_cdmn
}

function ntes_set_cookie(a, c) {
    var b = new Date();
    b.setTime(b.getTime() + 0);
    document.cookie = a + "=" + c + "; path=/; domain=" + _ntes_cdmn
}

function ntes_set_cookie_new(b, d, a) {
    if (!a || a == "") {
        a = 1000 * 60 * 60 * 24 * 365 * 1
    }
    var c = new Date();
    c.setTime(c.getTime() + a);
    document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + _ntes_cdmn
}

function ntes_get_cookie(c) {
    var a = document.cookie;
    var d = c + "=";
    var g = a.length;
    var b = 0;
    while (b < g) {
        var e = b + d.length;
        if (a.substring(b, e) == d) {
            var f = a.indexOf(";", e);
            if (f == -1) {
                f = g
            }
            return unescape(a.substring(e, f))
        }
        b = a.indexOf(" ", b) + 1;
        if (b == 0) {
            break
        }
    }
    return -1
}

function ntes_get_flashver() {
    var f = "",
        n = navigator;
    if (n.plugins && n.plugins.length) {
        for (var ii = 0; ii < n.plugins.length; ii++) {
            if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                f = n.plugins[ii].description.split("Shockwave Flash")[1];
                break
            }
        }
    } else {
        if (window.ActiveXObject) {
            for (var ii = 10; ii >= 2; ii--) {
                try {
                    var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                    if (fl) {
                        f = ii + ".0";
                        break
                    }
                } catch (e) {}
            }
        }
    }
    return f
}
var _ntes_hexcase = 0;
var _ntes_chrsz = 8;

function ntes_hex_md5(a) {
    return binl2hex(ntes_core_md5(str2binl(a), a.length * _ntes_chrsz))
}

function ntes_core_md5(p, k) {
    p[k >> 5] |= 128 << ((k) % 32);
    p[(((k + 64) >>> 9) << 4) + 14] = k;
    var o = 1732584193;
    var n = -271733879;
    var m = -1732584194;
    var l = 271733878;
    for (var g = 0; g < p.length; g += 16) {
        var j = o;
        var h = n;
        var f = m;
        var e = l;
        o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
        l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
        m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
        n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
        o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
        l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
        m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
        n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
        o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
        l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
        m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
        n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
        o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
        l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
        m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
        n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
        o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
        l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
        m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
        n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
        o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
        l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
        m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
        n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
        o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
        l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
        m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
        n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
        o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
        l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
        m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
        n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
        o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
        l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
        m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
        n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
        o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
        l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
        m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
        n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
        o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
        l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
        m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
        n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
        o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
        l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
        m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
        n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
        o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
        l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
        m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
        n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
        o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
        l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
        m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
        n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
        o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
        l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
        m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
        n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
        o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
        l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
        m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
        n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
        o = safe_add(o, j);
        n = safe_add(n, h);
        m = safe_add(m, f);
        l = safe_add(l, e)
    }
    return Array(o, n, m, l)
}

function md5_cmn(h, e, d, c, g, f) {
    return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
}

function md5_ff(g, f, k, j, e, i, h) {
    return md5_cmn((f & k) | ((~f) & j), g, f, e, i, h)
}

function md5_gg(g, f, k, j, e, i, h) {
    return md5_cmn((f & j) | (k & (~j)), g, f, e, i, h)
}

function md5_hh(g, f, k, j, e, i, h) {
    return md5_cmn(f ^ k ^ j, g, f, e, i, h)
}

function md5_ii(g, f, k, j, e, i, h) {
    return md5_cmn(k ^ (f | (~j)), g, f, e, i, h)
}

function safe_add(a, d) {
    var c = (a & 65535) + (d & 65535);
    var b = (a >> 16) + (d >> 16) + (c >> 16);
    return (b << 16) | (c & 65535)
}

function bit_rol(a, b) {
    return (a << b) | (a >>> (32 - b))
}

function str2binl(d) {
    var c = new Array();
    var a = (1 << _ntes_chrsz) - 1;
    for (var b = 0; b < d.length * _ntes_chrsz; b += _ntes_chrsz) {
        c[b >> 5] |= (d.charCodeAt(b / _ntes_chrsz) & a) << (b % 32)
    }
    return c
}

function binl2hex(c) {
    var b = _ntes_hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var d = "";
    for (var a = 0; a < c.length * 4; a++) {
        d += b.charAt((c[a >> 2] >> ((a % 4) * 8 + 4)) & 15) + b.charAt((c[a >> 2] >> ((a % 4) * 8)) & 15)
    }
    return d
}

function str_to_ent(e) {
    var a = "";
    var d;
    for (d = 0; d < e.length; d++) {
        var f = e.charCodeAt(d);
        var b = "";
        if (f > 255) {
            while (f >= 1) {
                b = "0123456789".charAt(f % 10) + b;
                f = f / 10
            }
            if (b == "") {
                b = "0"
            }
            b = "#" + b;
            b = "&" + b;
            b = b + ";";
            a += b
        } else {
            a += e.charAt(d)
        }
    }
    return a
}

function ntes_page_click_stat(k) {
    var m = this.tagName.toLowerCase(),
        o = _ntes_fixEvent(k || window.event),
        i = "",
        q = "",
        g;
    switch (m) {
        case "a":
        case "area":
            i = this.getAttribute("href", 2) || this.nodeName;
            q = this.innerText || this.textContent || this.title || this.alt || this.name || "";
            if (m == "a" && !q) {
                g = this.getElementsByTagName("img");
                if (g[0]) {
                    q = g[0].title || g[0].alt || ""
                }
            }
            break;
        case "button":
        case "input":
            i = this.nodeName;
            q = this.value || this.title || this.name || "";
            break;
        default:
            return
    }
    var r = escape(i),
        f = escape(q),
        d = escape(document.URL),
        j = document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth,
        c = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        a = document.documentElement.scrollTop || document.body.scrollTop || 0,
        b = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight,
        l = _ntes_page_data.getRunTime(),
        s = Math.round(o.pageX),
        p = Math.round(o.pageY);
    var n = ["_nacc=", _ntes_nacc, "&_npurl=", d, "&_nah=", r, "&_nat=", f, "&_ncw=", j, "&_nch=", b, "&_nsl=", c, "&_nst=", a, "&_nmx=", s, "&_nmy=", p, "&_nct=", l, "&_end"].join("");
    _ntes_page_data.maxClick++;
    _ntes_sendInfo("pst", _ntes_src_addr + "/ntes_p?" + n)
}

function ntes_page_unload_stat(i) {
    var d = escape(document.URL),
        g = document.compatMode === "CSS1Compat" ? document.documentElement.clientWidth : document.body.clientWidth,
        f = document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        a = document.documentElement.scrollTop || document.body.scrollTop || 0,
        b = document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight,
        j = _ntes_page_data.getRunTime(),
        c = Math.max(_ntes_page_data.maxScroll, a),
        k = _ntes_page_data.maxClick,
        h = _ntes_page_data.getActionTime(),
        l = ["_nacc=", _ntes_nacc, "&_npurl=", d, "&_ncw=", g, "&_nch=", b, "&_nsl=", f, "&_nst=", a, "&_nct=", j, "&_msl=", c, "&_mcn=", k, "&_nit=", h, "&_end"].join("");
    _ntes_sendInfo("puld", _ntes_src_addr + "/ntes_u?" + l)
}

function neteaseClickStat(c) {
    if (typeof(_ntes_nacc) == "undefined" || !_ntes_nacc) {
        return
    }
    if (is_spider()) {
        return
    }
    var o = Math.random(),
        g = Math.abs(c || 30);
    o = parseInt(o * g);
    if (o != 0) {
        return
    }
    var h = document.getElementsByTagName("a"),
        f = h.length,
        j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(h[j], "click", ntes_page_click_stat)
    }
    var l = document.getElementsByTagName("button");
    f = l.length;
    j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(l[j], "click", ntes_page_click_stat)
    }
    var k = document.getElementsByTagName("input");
    f = k.length;
    j = 0;
    for (; j < f; j++) {
        if (k[j].type == "button" || k[j].type == "submit" || k[j].type == "img") {
            _ntes_bindEvent(k[j], "click", ntes_page_click_stat)
        }
    }
    var b = document.getElementsByTagName("area");
    f = b.length;
    j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(b[j], "click", ntes_page_click_stat)
    }
    var e;
    _ntes_bindEvent(window, "scroll", e = function() {
        _ntes_page_data.maxScroll = Math.max(_ntes_page_data.maxScroll, document.documentElement.scrollTop || document.body.scrollTop);
        _ntes_page_data.fireAction()
    });
    e();
    var m = document.getElementsByTagName("a");
    f = m.length;
    j = 0;
    for (; j < f; j++) {
        if (m[j].href.indexOf("javascript:") >= 0) {
            _ntes_bindEvent(m[j], "click", function(n) {
                _ntes_fixEvent(n || window.event).preventDefault();
                var i = (this.href).split("javascript:")[1] || "",
                    a;
                if (i) {
                    a = new Function(i);
                    return a.call(this)
                }
            })
        }
    }
    _ntes_bindEvent(window, "beforeunload", ntes_page_unload_stat);
    var d = window.navigator.userAgent.toLowerCase();
    if (!/compatible/.test(d) && /firefox/.test(d)) {
        _ntes_bindEvent(window, "unload", ntes_page_unload_stat)
    }
    _ntes_bindEvent(document, "mousemove", _ntes_page_data.fireAction);
    _ntes_bindEvent(document, "mousedown", _ntes_page_data.fireAction);
    _ntes_bindEvent(document, "keypress", _ntes_page_data.fireAction)
}

function _ntes_bindEvent(d, a, c) {
    if (d.addEventListener) {
        d.addEventListener(a, c, false)
    } else {
        if (d.attachEvent) {
            d.attachEvent("on" + a, function() {
                return c.apply(d, arguments)
            })
        } else {
            var b = d["on" + a] || function() {};
            d["on" + a] = function() {
                b.apply(d, arguments);
                c.apply(d, arguments)
            }
        }
    }
}

function _ntes_fixEvent(f) {
    var c = {},
        g = "altKey ctrlKey shiftKey keyCode button clientX clientY offsetX offsetY pageX pageY target relatedTarget srcElement fromElement toElement".split(" ");
    for (var b = g.length, h; b;) {
        h = g[--b];
        c[h] = f[h]
    }
    c.orgEvent = f;
    c.target = f.target || f.srcElement || document;
    if (c.target.nodeType === 3) {
        c.target = c.target.parentNode
    }
    if (!c.relatedTarget && c.fromElement) {
        c.relatedTarget = c.fromElement === c.target ? c.toElement : c.fromElement
    }
    if (c.pageX == null && c.clientX != null) {
        var d = document.documentElement,
            a = document.body;
        c.pageX = c.clientX + (d && d.scrollLeft || a && a.scrollLeft || 0) - (d && d.clientLeft || a && a.clientLeft || 0);
        c.pageY = c.clientY + (d && d.scrollTop || a && a.scrollTop || 0) - (d && d.clientTop || a && a.clientTop || 0);
        d = a = null
    }
    c.preventDefault = f.preventDefault ? function() {
        f.preventDefault()
    } : function() {
        f.returnValue = false
    };
    c.stopPropagation = f.stopPropagation ? function() {
        f.stopPropagation()
    } : function() {
        f.cancelBubble = true
    };
    return c
}

function _ntes_sendInfo(c, b, f) {
    var e = c + "_" + (+new Date()) + parseInt(Math.random() * 100),
        a, d = f || _ntes_void;
    a = window[e] = new Image();
    a.onload = function() {
        window[e] = null;
        d()
    };
    a.onerror = function() {
        window[e] = null;
        d()
    };
    a.src = b;
    a = null
}

function recordAction(f, a, b, d, c) {
    var e = "";
    e += "s=" + _ntes_nacc;
    e += "&u=" + _ntes_nvid;
    e += "&a=" + escape(f);
    e += "&v=" + escape(a);
    e += "&n=" + escape(b);
    e += "&p1=" + d;
    if (c != undefined) {
        e += "&p2=" + c
    }
    e += "&r=" + _ntes_nurl;
    e += "&_nxkey=" + (Number(new Date()) + "" + Math.random()).substring(6, 20) + "&_end1";
    _ntes_sendInfo("log", _ntes_src_addr + "/ntesv?" + e)
}

function neteaseClickStatForArea(l, e, c) {
    if (typeof(_ntes_nacc) == "undefined" || !_ntes_nacc || (l || {}).nodeType != 1) {
        return
    }
    var d = Math.random(),
        g = Math.abs(c || 30);
    d = parseInt(d * g);
    if (d != 0) {
        return
    }
    var m = e || document.URL,
        b = function(i) {
            ntes_area_click_stat.call(this, i, l, m)
        };
    var h = l.getElementsByTagName("a"),
        f = h.length,
        j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(h[j], "click", b)
    }
    var o = l.getElementsByTagName("button");
    f = o.length;
    j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(o[j], "click", b)
    }
    var k = l.getElementsByTagName("input");
    f = k.length;
    j = 0;
    for (; j < f; j++) {
        if (k[j].type == "button" || k[j].type == "submit" || k[j].type == "img") {
            _ntes_bindEvent(k[j], "click", b)
        }
    }
    var a = l.getElementsByTagName("area");
    f = a.length;
    j = 0;
    for (; j < f; j++) {
        _ntes_bindEvent(a[j], "click", b)
    }
}

function ntes_area_click_stat(v, k, b) {
    var f = this.tagName.toLowerCase(),
        q = _ntes_fixEvent(v || window.event),
        u = "",
        o = "",
        x;
    switch (f) {
        case "a":
        case "area":
            u = this.getAttribute("href", 2) || this.nodeName;
            o = this.innerText || this.textContent || this.title || this.alt || this.name || "";
            if (f == "a" && !o) {
                x = this.getElementsByTagName("img");
                if (x[0]) {
                    o = x[0].title || x[0].alt || ""
                }
            }
            break;
        case "button":
        case "input":
            u = this.nodeName;
            o = this.value || this.title || this.name || "";
            break;
        default:
            return
    }
    var a = ntes_area_click_tools.getOffset(k);
    var s = ntes_area_click_tools.getSize(k);
    var j = escape(u),
        c = escape(o),
        i = escape(b),
        d = s.width,
        m = s.height,
        w = k.scrollLeft || 0,
        r = k.scrollTop || 0,
        g = _ntes_page_data.getRunTime(),
        p = Math.round(q.pageX) - a.x + w,
        n = Math.round(q.pageY) - a.y + r;
    var l = ["_nacc=", _ntes_nacc, "&_npurl=", i, "&_nah=", j, "&_nat=", c, "&_ncw=", d, "&_nch=", m, "&_nsl=", w, "&_nst=", r, "&_nmx=", p, "&_nmy=", n, "&_nct=", g, "&_end"].join("");
    _ntes_sendInfo("pst", _ntes_src_addr + "/ntes_p?" + l)
}

function is_spider() {
    return /baiduspider/gi.test(window.navigator.userAgent)
}
var ntes_area_click_tools = {
    getOffset: function(d) {
        if (this.boxModel === undefined) {
            var a = document.createElement("div");
            a.style.width = a.style.paddingLeft = "1px";
            document.body.appendChild(a);
            this.boxModel = a.offsetWidth === 2;
            document.body.removeChild(a).style.display = "none";
            a = null
        }
        var f = d.getBoundingClientRect(),
            j = d.ownerDocument,
            g = j.body,
            b = j.documentElement,
            e = b.clientTop || g.clientTop || 0,
            h = b.clientLeft || g.clientLeft || 0,
            i = f.top + (self.pageYOffset || this.boxModel && b.scrollTop || g.scrollTop) - e,
            c = f.left + (self.pageXOffset || this.boxModel && b.scrollLeft || g.scrollLeft) - h;
        return {
            x: c,
            y: i
        }
    },
    swapForSize: function(c, e) {
        var d = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        };
        var a = {};
        for (var b in options) {
            a[b] = c.style[b];
            c.style[b] = options[b]
        }
        e.call(c);
        for (var b in options) {
            c.style[b] = a[b]
        }
    },
    getSize: function(b) {
        var a, c = function() {
            a = {
                width: b.offsetWidth,
                height: b.offsetHeight
            }
        };
        if (b.offsetWidth !== 0) {
            c()
        } else {
            this.swapForSize(b, c)
        }
        a.width = Math.max(0, Math.round(a.width));
        a.height = Math.max(0, Math.round(a.height));
        return a
    }
};