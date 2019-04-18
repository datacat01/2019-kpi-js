(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(t, e, n) {
            t.exports = n(1062)()
        },
        1055: function(t, e, n) {
            var r;
            ! function(i, o) {
                "use strict";
                var s = "model",
                    a = "name",
                    u = "type",
                    c = "vendor",
                    l = "version",
                    d = "mobile",
                    f = "tablet",
                    p = {
                        extend: function(t, e) {
                            var n = {};
                            for (var r in t) e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r];
                            return n
                        },
                        has: function(t, e) {
                            return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase())
                        },
                        lowerize: function(t) {
                            return t.toLowerCase()
                        },
                        major: function(t) {
                            return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                        },
                        trim: function(t) {
                            return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                        }
                    },
                    h = {
                        rgx: function(t, e) {
                            for (var n, r, i, o, s, a, u = 0; u < e.length && !s;) {
                                var c = e[u],
                                    l = e[u + 1];
                                for (n = r = 0; n < c.length && !s;)
                                    if (s = c[n++].exec(t))
                                        for (i = 0; i < l.length; i++) a = s[++r], "object" == typeof(o = l[i]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, a) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = a ? a.replace(o[1], o[2]) : void 0 : this[o[0]] = a ? o[1].call(this, a, o[2]) : void 0 : 4 == o.length && (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : void 0) : this[o] = a || void 0;
                                u += 2
                            }
                        },
                        str: function(t, e) {
                            for (var n in e)
                                if ("object" == typeof e[n] && e[n].length > 0) {
                                    for (var r = 0; r < e[n].length; r++)
                                        if (p.has(e[n][r], t)) return "?" === n ? void 0 : n
                                } else if (p.has(e[n], t)) return "?" === n ? void 0 : n;
                            return t
                        }
                    },
                    g = {
                        browser: {
                            oldsafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            }
                        },
                        device: {
                            amazon: {
                                model: {
                                    "Fire Phone": ["SD", "KF"]
                                }
                            },
                            sprint: {
                                model: {
                                    "Evo Shift 4G": "7373KT"
                                },
                                vendor: {
                                    HTC: "APA",
                                    Sprint: "Sprint"
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2000: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    m = {
                        browser: [
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                            [a, l],
                            [/(opios)[\/\s]+([\w\.]+)/i],
                            [
                                [a, "Opera Mini"], l
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [a, "Opera"], l
                            ],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],
                            [a, l],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [a, "IE"], l
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [a, l],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [a, "Yandex"], l
                            ],
                            [/(puffin)\/([\w\.]+)/i],
                            [
                                [a, "Puffin"], l
                            ],
                            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [
                                [a, "UCBrowser"], l
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [a, /_/g, " "], l
                            ],
                            [/(micromessenger)\/([\w\.]+)/i],
                            [
                                [a, "WeChat"], l
                            ],
                            [/(QQ)\/([\d\.]+)/i],
                            [a, l],
                            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                            [a, l],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [l, [a, "MIUI Browser"]],
                            [/;fbav\/([\w\.]+);/i],
                            [l, [a, "Facebook"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [l, [a, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [a, /(.+)/, "$1 WebView"], l
                            ],
                            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                            [
                                [a, /(.+(?:g|us))(.+)/, "$1 $2"], l
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                            [l, [a, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [a, l],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [a, "Dolphin"], l
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [a, "Chrome"], l
                            ],
                            [/(coast)\/([\w\.]+)/i],
                            [
                                [a, "Opera Coast"], l
                            ],
                            [/fxios\/([\w\.-]+)/i],
                            [l, [a, "Firefox"]],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [l, [a, "Mobile Safari"]],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [l, a],
                            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                [a, "GSA"], l
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [a, [l, h.str, g.browser.oldsafari.version]],
                            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                            [a, l],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [a, "Netscape"], l
                            ],
                            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [a, l]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                ["architecture", "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                ["architecture", p.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                ["architecture", "ia32"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                ["architecture", "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                ["architecture", /ower/, "", p.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                ["architecture", "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                            [
                                ["architecture", p.lowerize]
                            ]
                        ],
                        device: [
                            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                            [s, c, [u, f]],
                            [/applecoremedia\/[\w\.]+ \((ipad)/],
                            [s, [c, "Apple"],
                                [u, f]
                            ],
                            [/(apple\s{0,1}tv)/i],
                            [
                                [s, "Apple TV"],
                                [c, "Apple"]
                            ],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                            [c, s, [u, f]],
                            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                            [s, [c, "Amazon"],
                                [u, f]
                            ],
                            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                            [
                                [s, h.str, g.device.amazon.model],
                                [c, "Amazon"],
                                [u, d]
                            ],
                            [/\((ip[honed|\s\w*]+);.+(apple)/i],
                            [s, c, [u, d]],
                            [/\((ip[honed|\s\w*]+);/i],
                            [s, [c, "Apple"],
                                [u, d]
                            ],
                            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                            [c, s, [u, d]],
                            [/\(bb10;\s(\w+)/i],
                            [s, [c, "BlackBerry"],
                                [u, d]
                            ],
                            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                            [s, [c, "Asus"],
                                [u, f]
                            ],
                            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                            [
                                [c, "Sony"],
                                [s, "Xperia Tablet"],
                                [u, f]
                            ],
                            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                            [s, [c, "Sony"],
                                [u, d]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                            [c, s, [u, "console"]],
                            [/android.+;\s(shield)\sbuild/i],
                            [s, [c, "Nvidia"],
                                [u, "console"]
                            ],
                            [/(playstation\s[34portablevi]+)/i],
                            [s, [c, "Sony"],
                                [u, "console"]
                            ],
                            [/(sprint\s(\w+))/i],
                            [
                                [c, h.str, g.device.sprint.vendor],
                                [s, h.str, g.device.sprint.model],
                                [u, d]
                            ],
                            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                            [c, s, [u, f]],
                            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                            [c, [s, /_/g, " "],
                                [u, d]
                            ],
                            [/(nexus\s9)/i],
                            [s, [c, "HTC"],
                                [u, f]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                            [s, [c, "Huawei"],
                                [u, d]
                            ],
                            [/(microsoft);\s(lumia[\s\w]+)/i],
                            [c, s, [u, d]],
                            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                            [s, [c, "Microsoft"],
                                [u, "console"]
                            ],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [s, /\./g, " "],
                                [c, "Microsoft"],
                                [u, d]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                            [s, [c, "Motorola"],
                                [u, d]
                            ],
                            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [s, [c, "Motorola"],
                                [u, f]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [c, p.trim],
                                [s, p.trim],
                                [u, "smarttv"]
                            ],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [s, /^/, "SmartTV"],
                                [c, "Samsung"],
                                [u, "smarttv"]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [s, [c, "Sharp"],
                                [u, "smarttv"]
                            ],
                            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                            [
                                [c, "Samsung"], s, [u, f]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [c, [u, "smarttv"], s],
                            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                            [
                                [c, "Samsung"], s, [u, d]
                            ],
                            [/sie-(\w+)*/i],
                            [s, [c, "Siemens"],
                                [u, d]
                            ],
                            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                            [
                                [c, "Nokia"], s, [u, d]
                            ],
                            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                            [s, [c, "Acer"],
                                [u, f]
                            ],
                            [/android.+([vl]k\-?\d{3})\s+build/i],
                            [s, [c, "LG"],
                                [u, f]
                            ],
                            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                            [
                                [c, "LG"], s, [u, f]
                            ],
                            [/(lg) netcast\.tv/i],
                            [c, s, [u, "smarttv"]],
                            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                            [s, [c, "LG"],
                                [u, d]
                            ],
                            [/android.+(ideatab[a-z0-9\-\s]+)/i],
                            [s, [c, "Lenovo"],
                                [u, f]
                            ],
                            [/linux;.+((jolla));/i],
                            [c, s, [u, d]],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [c, s, [u, "wearable"]],
                            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [c, s, [u, d]],
                            [/crkey/i],
                            [
                                [s, "Chromecast"],
                                [c, "Google"]
                            ],
                            [/android.+;\s(glass)\s\d/i],
                            [s, [c, "Google"],
                                [u, "wearable"]
                            ],
                            [/android.+;\s(pixel c)\s/i],
                            [s, [c, "Google"],
                                [u, f]
                            ],
                            [/android.+;\s(pixel xl|pixel)\s/i],
                            [s, [c, "Google"],
                                [u, d]
                            ],
                            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],
                            [
                                [s, /_/g, " "],
                                [c, "Xiaomi"],
                                [u, d]
                            ],
                            [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],
                            [
                                [s, /_/g, " "],
                                [c, "Xiaomi"],
                                [u, f]
                            ],
                            [/android.+;\s(m[1-5]\snote)\sbuild/i],
                            [s, [c, "Meizu"],
                                [u, f]
                            ],
                            [/android.+a000(1)\s+build/i],
                            [s, [c, "OnePlus"],
                                [u, d]
                            ],
                            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                            [s, [c, "RCA"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
                            [s, [c, "Dell"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                            [s, [c, "Verizon"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                            [
                                [c, "Barnes & Noble"], s, [u, f]
                            ],
                            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                            [s, [c, "NuVision"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
                            [
                                [c, "ZTE"], s, [u, f]
                            ],
                            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                            [s, [c, "Swiss"],
                                [u, d]
                            ],
                            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                            [s, [c, "Swiss"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                            [s, [c, "Zeki"],
                                [u, f]
                            ],
                            [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],
                            [
                                [c, "Dragon Touch"], s, [u, f]
                            ],
                            [/android.+[;\/]\s*(NS-?.+)\s+build/i],
                            [s, [c, "Insignia"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
                            [s, [c, "NextBook"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                            [
                                [c, "Voice"], s, [u, d]
                            ],
                            [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
                            [
                                [c, "LvTel"], s, [u, d]
                            ],
                            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                            [s, [c, "Envizen"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
                            [c, s, [u, f]],
                            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                            [s, [c, "MachSpeed"],
                                [u, f]
                            ],
                            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                            [c, s, [u, f]],
                            [/android.+[;\/]\s*TU_(1491)\s+build/i],
                            [s, [c, "Rotor"],
                                [u, f]
                            ],
                            [/android.+(KS(.+))\s+build/i],
                            [s, [c, "Amazon"],
                                [u, f]
                            ],
                            [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
                            [c, s, [u, f]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [u, p.lowerize], c, s
                            ],
                            [/(android.+)[;\/].+build/i],
                            [s, [c, "Generic"]]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [l, [a, "EdgeHTML"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [a, l],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [l, a]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [a, l],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                            [a, [l, h.str, g.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [a, "Windows"],
                                [l, h.str, g.os.windows.version]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [a, "BlackBerry"], l
                            ],
                            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                            [a, l],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [a, "Symbian"], l
                            ],
                            [/\((series40);/i],
                            [a],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [a, "Firefox OS"], l
                            ],
                            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                            [a, l],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [a, "Chromium OS"], l
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [a, "Solaris"], l
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [a, l],
                            [/(haiku)\s(\w+)/i],
                            [a, l],
                            [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                            [
                                [l, /_/g, "."],
                                [a, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                            [
                                [a, "Mac OS"],
                                [l, /_/g, "."]
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                            [a, l]
                        ]
                    },
                    b = function(t, e) {
                        if ("object" == typeof t && (e = t, t = void 0), !(this instanceof b)) return new b(t, e).getResult();
                        var n = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                            r = e ? p.extend(m, e) : m;
                        return this.getBrowser = function() {
                            var t = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(t, n, r.browser), t.major = p.major(t.version), t
                        }, this.getCPU = function() {
                            var t = {
                                architecture: void 0
                            };
                            return h.rgx.call(t, n, r.cpu), t
                        }, this.getDevice = function() {
                            var t = {
                                vendor: void 0,
                                model: void 0,
                                type: void 0
                            };
                            return h.rgx.call(t, n, r.device), t
                        }, this.getEngine = function() {
                            var t = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(t, n, r.engine), t
                        }, this.getOS = function() {
                            var t = {
                                name: void 0,
                                version: void 0
                            };
                            return h.rgx.call(t, n, r.os), t
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(t) {
                            return n = t, this
                        }, this
                    };
                b.VERSION = "0.7.17", b.BROWSER = {
                    NAME: a,
                    MAJOR: "major",
                    VERSION: l
                }, b.CPU = {
                    ARCHITECTURE: "architecture"
                }, b.DEVICE = {
                    MODEL: s,
                    VENDOR: c,
                    TYPE: u,
                    CONSOLE: "console",
                    MOBILE: d,
                    SMARTTV: "smarttv",
                    TABLET: f,
                    WEARABLE: "wearable",
                    EMBEDDED: "embedded"
                }, b.ENGINE = {
                    NAME: a,
                    VERSION: l
                }, b.OS = {
                    NAME: a,
                    VERSION: l
                }, void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = b), e.UAParser = b) : n(1056) ? void 0 === (r = function() {
                    return b
                }.call(e, n, e, t)) || (t.exports = r) : i && (i.UAParser = b);
                var v = i && (i.jQuery || i.Zepto);
                if (void 0 !== v) {
                    var y = new b;
                    v.ua = y.getResult(), v.ua.get = function() {
                        return y.getUA()
                    }, v.ua.set = function(t) {
                        y.setUA(t);
                        var e = y.getResult();
                        for (var n in e) v.ua[n] = e[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        1056: function(t, e) {
            (function(e) {
                t.exports = e
            }).call(this, {})
        },
        1062: function(t, e, n) {
            "use strict";
            var r = n(1063);

            function i() {}

            function o() {}
            o.resetWarningCache = i, t.exports = function() {
                function t(t, e, n, i, o, s) {
                    if (s !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return n.PropTypes = n, n
            }
        },
        1063: function(t, e, n) {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        179: function(t, e, n) {
            var r;
            /*!
              Copyright (c) 2017 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            /*!
              Copyright (c) 2017 Jed Watson.
              Licensed under the MIT License (MIT), see
              http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var r = arguments[e];
                        if (r) {
                            var o = typeof r;
                            if ("string" === o || "number" === o) t.push(r);
                            else if (Array.isArray(r) && r.length) {
                                var s = i.apply(null, r);
                                s && t.push(s)
                            } else if ("object" === o)
                                for (var a in r) n.call(r, a) && r[a] && t.push(a)
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (i.default = i, t.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(e, [])) || (t.exports = r)
            }()
        },
        20: function(t, e, n) {
            (function(t) {
                var e, n, r, i, o, s;
                t && (t.templateSettings = {
                    escape: /\{\{(?![&])(.+?)\}\}/g,
                    interpolate: /\{\{&(.+?)\}\}/g,
                    evaluate: /\{\[(?![&])(.+?)\]\}/g
                }), $(function() {
                    try {
                        Scribd.ie && $(document.body).addClass("ie ie" + Scribd.ie)
                    } catch (t) {}
                    return $("body").on("keydown mousedown", Scribd.check_focus)
                });
                try {
                    null != (r = Scribd.deparam(location.search.slice(1))).noanimate && (s = ["-webkit-transition", "-moz-transition", "-ms-transition", "transition"].map(function(t) {
                        return t + ": none !important"
                    }), n = "* { " + s.join("; ") + " }", (o = document.createElement("style")).type = "text/css", null != o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n)), document.head.appendChild(o), $.fx.off = !0, Scribd.noanimate = !0)
                } catch (t) {}
                Scribd.jsblock = $.Deferred(), Scribd.using_keyboard = !1, Scribd.check_focus = function(t) {
                    return Scribd.using_keyboard || "keydown" !== t.type || 9 !== t.which && 9 !== t.keyCode ? Scribd.using_keyboard && "mousedown" === t.type ? ($("body").removeClass("keyboard_focus"), Scribd.using_keyboard = !1) : void 0 : ($("body").addClass("keyboard_focus"), Scribd.using_keyboard = !0)
                }, Scribd.initFBElement = function(t) {
                    return window.FB ? FB.XFBML.parse(t) : setTimeout(function() {
                        return Scribd.initFBElement(t)
                    }, 300)
                }, Scribd.truncate = function(t, e) {
                    return null == e && (e = 60), t.replace(new RegExp("^(.{" + (e - 3) + "})[\\s\\S]*$"), function(t, e) {
                        return e.replace(/\s+$/, "") + "..."
                    })
                }, Scribd.logging_enabled = (null != (i = Scribd.config) ? i.js_logging_enabled : void 0) || window.location.hash.match(/log/i), Scribd.ensure_reload_on_back_button = function() {
                    return -1 !== window.location.hash.indexOf("rel") && (window.location.hash = window.location.hash.replace("rel", ""), window.location.reload()), window.location.hash = window.location.hash + "rel"
                }, Scribd.log = function(t, e, n) {
                    var r;
                    if (null == n && (n = "log"), Scribd.logging_enabled && (null != (r = window.console) ? r[n] : void 0) && (console[n](t), e)) return console[n](e)
                }, Scribd.log_perceived_page_load_time = function(t, e) {
                    var n, r, i, o, s;
                    if (null == e && (e = {}), s = e.time || +new Date, n = e.action || "Metrics", o = "perceived_load_time:" + (Scribd.named_current_user() ? "logged_in" : "logged_out"), i = e.prefix ? e.prefix + ":" + o : o, window.performance && window.performance.timing) return r = s - window.performance.timing.fetchStart, $(document.body).track({
                        category: t,
                        action: n,
                        label: i,
                        params: {
                            elapsed_time: r
                        },
                        interactive: !1
                    })
                }, Scribd.log_error = function(t, e) {
                    return Scribd.log(t, e, "error")
                }, Scribd.has_flash = function() {
                    try {
                        if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
                    } catch (t) {
                        if (t, void 0 !== navigator.mimeTypes["application/x-shockwave-flash"]) return !0
                    }
                    return !1
                }, Scribd.with_login = function(t, e) {
                    return "function" == typeof t && (e = t, t = {}), Scribd.logged_in ? "function" == typeof e ? e() : void 0 : Scribd.SignIn.open($.extend({
                        initial_view: "login"
                    }, t))
                }, Scribd.after_login = function(t, e) {
                    return "function" == typeof t && (e = t, t = {}), Scribd.with_login($.extend({
                        next_url: $.Deferred().done(e)
                    }, t), e)
                }, Scribd.parse_parameters = function(t) {
                    var e, n, r, i, o, s, a, u, c;
                    for ("#" !== (e = t.charAt(0)) && "?" !== e || (t = t.substr(1)), o = {}, n = 0, i = (a = t.split("&")).length; n < i; n++) "" !== (s = a[n]) && (r = (u = s.split("="))[0], c = u[1], o[decodeURIComponent(r).replace(/\+/g, " ")] = null == c || decodeURIComponent(c).replace(/\+/g, " "));
                    return o
                }, Scribd.add_url_parameter = function(t, e, n) {
                    var r, i, o;
                    return r = "", (i = t.indexOf("#")) >= 0 && (r = t.substr(i), t = t.substr(0, i)), o = new RegExp("&?" + e + "=[^&]*", "g"), (t = t.replace(o, "")).indexOf("?") >= 0 ? /[?]$/.test(t) ? t += e + "=" + n : t += "&" + e + "=" + n : t += "?" + e + "=" + n, t + r
                }, Scribd.add_url_parameters = function(t, e) {
                    var n;
                    for (n in e) e[n], t = Scribd.add_url_parameter(t, n, e[n]);
                    return t
                }, Scribd.with_local_storage = function() {
                    var t;
                    return t = function() {
                            var t;
                            t = window.sessionStorage;
                            try {
                                return t.setItem("test", "1"), t.removeItem("test"), !0
                            } catch (t) {
                                return t, !1
                            }
                        },
                        function(e) {
                            if (t()) return e(window.localStorage)
                        }
                }(), Scribd.with_named_current_user = function(t) {
                    return "function" == typeof t ? t(Scribd.named_current_user()) : void 0
                }, Scribd.set_named_current_user = function(t) {
                    return Scribd.current_user = t
                }, Scribd.named_current_user = function() {
                    if (Scribd.current_user && !Scribd.current_user.anonymous) return Scribd.current_user
                }, Scribd.with_anonymous_current_user = function(t) {
                    var e;
                    if (e = Scribd.anonymous_current_user()) return "function" == typeof t ? t(e) : void 0
                }, Scribd.anonymous_current_user = function() {
                    if (Scribd.current_user && Scribd.current_user.anonymous) return Scribd.current_user
                }, Scribd.named_current_user_sync = Scribd.named_current_user, Scribd.anonymous_current_user_sync = Scribd.anonymous_current_user, Scribd.UrlFor = {
                    document: function(t) {
                        return "/doc/" + t
                    }
                }, Scribd.CSRF = {
                    get_csrf_params: function() {
                        return this.ensure_token_initialized(), this.csrf_params
                    },
                    get_csrf_name: function() {
                        return this.ensure_token_initialized(), this.param
                    },
                    get_csrf_value: function() {
                        return this.ensure_token_initialized(), this.token
                    },
                    get_csrf_debug: function() {
                        return this.debug_str
                    },
                    with_token: function(t) {
                        return null == t && (t = {}), "string" === $.type(t) ? t + "&" + $.param(this.get_csrf_params()) : $.extend(t, this.get_csrf_params())
                    },
                    ensure_token_initialized: function() {
                        var t;
                        if (!this.token_initialized) return this.debug_str = "", this.param = $("meta[name=csrf-param]").attr("content"), this.token = $("meta[name=csrf-token]").attr("content"), this.token || (this.debug_str += "1"), this.token || (t = {
                            href: window.location.href
                        }, $.ajax({
                            type: "POST",
                            url: Scribd.config.csrf_token_url + "?" + $.param(t),
                            async: !1,
                            cache: !1,
                            skip_csrf: !0,
                            success: function(t) {
                                return function(e, n) {
                                    return e.csrf_token ? (t.token = e.csrf_token, t.debug_str += "3") : t.debug_str += "-2-" + encodeURIComponent(JSON.stringify(e)) + "-" + n + "-" + window.location.href + "-"
                                }
                            }(this),
                            error: function(t) {
                                return function(e, n, r) {
                                    return t.debug_str += "-4-" + e.status + "-" + encodeURIComponent(n) + "-" + encodeURIComponent(r) + "-" + window.location.href + "-"
                                }
                            }(this)
                        })), this.token || (this.debug_str += "5"), this.csrf_params = {}, null != this.param && null != this.token && (this.csrf_params[this.param] = this.token), this.token_initialized = !0
                    }
                }, $.ajaxPrefilter(function(t, e, n) {
                    var r, i, o;
                    return n.setRequestHeader("X-Tried-CSRF", "1"), o = !1, t.crossDomain && t.url.match(/^https?:\/\/[^.]+.scribd.com\//) && (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.xhrFields = {
                        withCredentials: !0
                    }, o = !0), t.crossDomain && !o || !t.type || "get" === t.type.toLowerCase() || e.skip_csrf ? (i = "", t.crossDomain && (i += "1"), t.type || (i += "2"), t.type && "get" === t.type.toLowerCase() && (i += "3"), e.skip_csrf && (i += "4"), n.setRequestHeader("X-CSRF-Failed", i)) : (r = Scribd.CSRF.get_csrf_value()) ? n.setRequestHeader("X-CSRF-Token", r) : (n.setRequestHeader("X-CSRF-Failed", "5"), n.setRequestHeader("X-CSRF-Debug", Scribd.CSRF.get_csrf_debug()))
                }), Scribd.JSONCookie = function() {
                    function e(e, n) {
                        var r;
                        this.name = e, this.jar = n || new CookieJar({
                            path: "/",
                            expires: ""
                        }), "string" == typeof(r = this.jar.get(name) || {}) && (r = JSON.parse(r)), this.store = t.clone(r)
                    }
                    return e.prototype.set = function(t, e) {
                        return this.store[t] = e
                    }, e.prototype.unset = function(t) {
                        return delete this.store[t]
                    }, e.prototype.get = function(t) {
                        return this.store[t]
                    }, e.prototype.save = function() {
                        return this.jar.put(this.name, JSON.stringify(this.store))
                    }, e
                }(), $.easing.ease_in_out_cubic = function(t, e, n, r, i) {
                    return (e /= i / 2) < 1 ? r / 2 * e * e * e + n : r / 2 * ((e -= 2) * e * e + 2) + n
                }, $.fn.tap = function(t) {
                    return t.call(this, this), this
                }, $.fn.absolutize = function() {
                    return this.each(function() {
                        var t, e, n, r, i, o;
                        return "absolute" === (t = jQuery(this)).css("position") ? t : (i = (r = t.position()).top, n = r.left, o = t[0].clientWidth, e = t[0].clientHeight, t._originalLeft = n - parseFloat(t.css("left") || 0), t._originalTop = i - parseFloat(t.css("top") || 0), t._originalWidth = t.css("width"), t._originalHeight = t.css("height"), t.css("position", "absolute"), t.css("top", i + "px"), t.css("left", n + "px"), t.css("width", o + "px"), t.css("height", e + "px"), t)
                    })
                }, $.fn.viewportOffset = function(t) {
                    var e, n;
                    if (e = $(this).offset(), n = $.fn.viewportOffset.win, e) return {
                        left: e.left - n.scrollLeft(),
                        top: e.top - n.scrollTop()
                    }
                }, $.fn.viewportOffset.win = $(window), $.fn.has_expandable_text = function(t) {
                    return this.on("click", ".truncated_more, .truncated_less", function(e) {
                        var n;
                        return n = $(e.currentTarget).closest(".truncated_text").find(".truncated_short").toggle().end().find(".truncated_long").toggle(), "function" == typeof t ? t(n) : void 0
                    }), this
                }, $.fn.event_promise = function(t) {
                    var e;
                    return e = $.Deferred(), this.one(t, function() {
                        return e.resolve()
                    }), e
                }, $.easing.smoothstep = function(t) {
                    return t * t * t * (t * (6 * t - 15) + 10)
                }, $.fn.dispatch = function(t, e, n) {
                    return "click" === t && (t = "click contextmenu"), this.on(t, function(r) {
                        var i, o, s, a;
                        for (a in s = $(r.target), e)
                            if (o = e[a], 0 !== (i = s.closest("." + a)).length) {
                                if (i.hasClass("disabled")) return !1;
                                if (i.data("track") || i.data("track", a), i.track({
                                        action: t.split(" ")[0]
                                    }), i.trigger("scribd:track_rats_ga"), "contextmenu" === r.type) return;
                                if ("continue" !== (null != o ? o.call(n, i, r) : void 0)) return !1
                            } return null
                    }), this
                }, $.fn.restrict_money = function() {
                    var t, e, n;
                    return n = /\d/, t = /\./, e = /^\d*(\.\d{0,2})?/, this.keypress(function(e) {
                        var r, i;
                        if (e.keyCode >= 32) {
                            if (r = String.fromCharCode(e.keyCode), i = $(this).val().match(t), "." === r) {
                                if (i) return !1
                            } else if (!r.match(n)) return !1;
                            return !0
                        }
                    }), this.change(function(t) {
                        var n, r, i;
                        if (r = null != (i = (n = $(this)).val().match(e)) ? i[0] : void 0, n.val() !== r) return n.val(r)
                    }), this
                }, $.fn.focusable_children = function(t) {
                    var e, n, r, i, o;
                    for (null == t && (t = {}), e = [], n = 0, r = (o = ["a", "button", ":input", "[tabindex]"]).length; n < r; n++) i = o[n], e.push(i + ":not(.visually_hidden):not(.skip_focus):visible");
                    return e = e.join(","), t.no_memo ? this.find(e) : (null == this.memo && (this.memo = {}), this.memo.focusable_children ? this.memo.focusable_children : this.memo.focusable_children = this.find(e))
                }, $.fn.trap_focus_in_children = function(t) {
                    var e, n, r, i, o;
                    return null == t && (t = {}), o = !1, e = $(this), (i = e.focusable_children(t)).off("focusout.trap_focus_in_children keyup.trap_focus_in_children"), e.on("keydown.trap_focus_in_children", function(t) {
                        return o = t.shiftKey, !0
                    }), r = function() {
                        if (o) return i.last().focus(), o = !1
                    }, n = function() {
                        if (!o) return i.first().focus(), o = !1
                    }, e.hasClass("lightbox") && e.one("focusout.trap_focus_in_children", function(t) {
                        if ($(t.target).hasClass("lightbox")) return r()
                    }), i.first().on("focusout.trap_focus_in_children", r), i.last().on("focusout.trap_focus_in_children", n)
                }, $.fn.flash = function(t, e) {
                    var n, r, i;
                    return r = t || "#FFFF9C", n = e || 1500, this.data("original_bg") || this.data("original_bg", this.css("background-color")), i = this.data("original_bg"), this.stop(!1, !0).css("backgroundColor", r).animate({
                        backgroundColor: i
                    }, n)
                }, $.fn.placeholder_text = function(t) {
                    var e, n, r, i;
                    for (this, n = function(e) {
                            var n;
                            if (e = $(e), n = t || e.data("default_text"), !e.val() || e.val() === n) return e.val(n).addClass("inactive")
                        }, r = 0, i = this.length; r < i; r++) n(e = this[r]);
                    return this.on("focus", function(n) {
                        var r;
                        return e = $(this), r = t || e.data("default_text"), e.val() === r && e.is(".inactive") && e.val(""), e.removeClass("inactive"), "function" == typeof on_focus ? on_focus(e) : void 0
                    }), this.on("blur", function() {
                        if (!(e = $(this)).val()) return e.val(t || e.data("default_text")).addClass("inactive")
                    }), this
                }, $.fn.select_on_focus = function() {
                    return this.on("focus", function() {
                        return $(this).select(), this.onmouseup = function(t) {
                            return function() {
                                return t.onmouseup = null, !1
                            }
                        }(this), !1
                    })
                }, $.fn.input_character_countdown = function(t) {
                    var e, n;
                    return e = $(this), n = e.prop("maxlength"), e.on("input propertychange", function(e) {
                        var r;
                        return r = $(e.target), "function" == typeof t ? t({
                            current_character_count: r.val().length,
                            max_character_count: n,
                            remaining: n - r.val().length
                        }) : void 0
                    })
                }, $.fn.parallax_background = function(t, e, r) {
                    var i, o, s;
                    if (null == t && (t = 390), null == e && (e = 150), null == r && (r = !1), r) return i = this, s = $(window), i.on_scroll && s.off(i.on_scroll), o = function() {
                        var r, o, a;
                        return a = s.scrollTop(), o = Math.min(1, a / t), r = Math.floor(e * o), (n = {})[Modernizr.prefixed("Transform")] = "translate3d(0," + r + "px, 0)", i.css(n)
                    }, i.on_scroll = o, o(), s.on("resize scroll", o)
                }, Scribd.vertically_center = function(t) {
                    var e, n, r, i, o, s, a, u;
                    for (a = [], r = 0, i = (s = t.find(".centered")).length; r < i; r++) e = s[r], o = (e = $(e)).closest(".content_layer").height(), n = e.outerHeight(), u = Math.floor((o - n) / 2), a.push(e.css("marginTop", u + "px"));
                    return a
                }, Scribd.fully_visible = function(t) {
                    var e, n;
                    return e = t.getBoundingClientRect(), n = {
                        top: 0,
                        left: 0,
                        bottom: window.innerHeight,
                        right: window.innerWidth
                    }, e.top >= n.top && e.left >= n.left && e.bottom <= n.bottom && e.right <= n.right
                }, Scribd.partially_visible = function(t) {
                    var e, n, r, i, o, s, a;
                    return i = t.getBoundingClientRect(), a = {
                        top: 0,
                        left: 0,
                        bottom: window.innerHeight,
                        right: window.innerWidth
                    }, s = i.top >= a.top && i.top <= a.bottom, e = i.bottom >= a.top && i.bottom <= a.bottom, r = s || e, n = i.left >= a.left && i.left <= a.right, o = i.right >= a.left && i.right <= a.right, r && (n || o)
                }, Scribd.visible_in_carousel = function(t) {
                    var e, n, r, i, o, s, a, u;
                    return s = t.getBoundingClientRect(), (n = $(t).parents(".carousel")) ? !!Scribd.partially_visible(n[0]) && (r = n[0].getBoundingClientRect(), u = s.top >= r.top && s.top <= r.bottom, e = s.bottom >= r.top && s.bottom <= r.bottom, o = u || e, i = s.left >= r.left && s.left <= r.right, a = s.right >= r.left && s.right <= r.right, o && (i || a)) : Scribd.partially_visible(t)
                }, $.fn.scrolled_into_viewport = function(e, n) {
                    var r, i, o, s, a;
                    return null == n && (n = {}), r = this, o = n.event_namespace || "", a = n.visibility_check || Scribd.fully_visible, i = function(t) {
                        var n, r, i, o;
                        for (o = [], r = 0, i = t.length; r < i; r++) n = t[r], a(n) ? o.push(e(n)) : o.push(void 0);
                        return o
                    }, s = t.throttle(function() {
                        return i(r)
                    }), i(r), $(window).on("scroll.scrolled_into_viewport." + o, s)
                }, $.fn.center_in_parent = function() {
                    var e;
                    return (e = function(t) {
                        return function() {
                            var e, n, r, i, o, s, a, u;
                            for (a = [], r = 0, i = (s = t.find(".centered")).length; r < i; r++) e = s[r], o = (e = $(e)).parent().height(), n = e.outerHeight(), 0 !== o && 0 !== n && (u = Math.floor((o - n) / 2), a.push(e.css("marginTop", u + "px")));
                            return a
                        }
                    }(this))(), this.on("scribd:center", e), $(window).on("resize", t.debounce(e, 100)), this
                }, window.jkstrp = function(t, e) {
                    return $(function() {
                        return t()
                    })
                }, Scribd.escape_regexp = function(t) {
                    return String(t).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
                }, Scribd.escape_html = function(t) {
                    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }, Scribd.strip_html = function(t) {
                    var e;
                    return (e = document.createElement("div")).innerHTML = t, e.textContent || e.innerText
                }, Scribd.get_referrer_and_keywords = function(t) {
                    var e, n, r, i;
                    return null == t && (t = document.referrer), i = t.split("/")[2] || "none", e = null, r = function() {
                        switch (i) {
                            case "www.google.com":
                            case "www.bing.com":
                                return "q";
                            case "search.yahoo.com":
                                return "p"
                        }
                    }(), (n = t.match(new RegExp("[^w]" + r + "=([^&]*)"))) && (e = n[1]), [i, e]
                }, Scribd.template = t.memoize(function(e) {
                    var n;
                    return n = null,
                        function(r) {
                            var i;
                            if (null == n) {
                                if (!(i = $("#tpl_" + e).html())) throw "Failed to find template named #tpl_" + e;
                                n = t.template(i)
                            }
                            return n(r)
                        }
                }), Scribd.Promise = e = "undefined" != typeof jQuery && null !== jQuery ? jQuery.Deferred : void 0, Scribd.load_image = function(t) {
                    var n, r;
                    return r = new e, (n = new Image).onload = function() {
                        return r.resolve(this)
                    }, n.onerror = function() {
                        return r.reject(this)
                    }, n.src = t, r
                }, Scribd.nway_test_pick_choice = function(e) {
                    var n, r, i, o, s;
                    if (r = t.pairs(e), o = t.sortBy(r, function(t) {
                            return t[0]
                        }), !t.isEmpty(o)) {
                        for (s = t.reduce(o, function(t, e) {
                                return e[1].weight + t
                            }, 0), n = t.random(0, s - 1), i = null; n >= 0;) n -= (i = o.shift())[1].weight;
                        if (i) return {
                            id: i[0],
                            name: i[1].name,
                            weight: i[1].weight
                        }
                    }
                }, Scribd.nway_test_force_group = function(t, e, n) {
                    var r, i, o, s, a, u, c, l;
                    if (null == n && (n = "nwt"), l = "undefined" != typeof Scribd && null !== Scribd && null != (u = Scribd.NwayTestsWithWeights) ? u[t] : void 0) {
                        for (s in (a = (o = new CookieJar({
                                path: "/",
                                expires: 63072e3
                            })).get(n)) || (a = {}), c = l.choices)
                            if ((r = c[s]).name === e) {
                                if (i = parseInt(s, 10), a["nw" + l.id] === i) return;
                                return a["nw" + l.id] = i, o.put(n, a), $rat("nway_assignments", {
                                    test: {
                                        id: l.id,
                                        name: t,
                                        choices: l.choices
                                    },
                                    choice: {
                                        id: i,
                                        name: r.name,
                                        weight: r.weight
                                    }
                                }), $rat.root().flushEvents(), void $(document.body).track({
                                    category: "NwayAssignments",
                                    action: t,
                                    label: r.name,
                                    interactive: !1
                                })
                            } return console.warn("tried to force test " + t + ", but couldn't find choice " + e)
                    }
                    console.warn("trying to force test " + t + ", but it doesn't exist")
                }, Scribd.nway_test_choice_value = function(t, e, n) {
                    var i, o, s, a, u, c, l, d, f;
                    if (null == e && (e = "nwt"), null == n && (n = !1), (r = Scribd.deparam(location.search.slice(1))).nway_test_name === t && null != r.nway_test_value) return isNaN(r.nway_test_value) ? r.nway_test_value : Number(r.nway_test_value);
                    if (f = "undefined" != typeof Scribd && null !== Scribd && null != (c = Scribd.NwayTestsWithWeights) ? c[t] : void 0) {
                        if ((a = (s = new CookieJar({
                                path: "/",
                                expires: 63072e3
                            })).get(e)) || (a = {}), (u = a["nw" + f.id]) && !n) {
                            if (o = f.choices[u], Scribd.jsblock.done(function() {
                                    return $(document.body).track({
                                        category: "NwayRead",
                                        action: t,
                                        label: (null != o ? o.name : void 0) || "unknown",
                                        interactive: !1
                                    })
                                }), !o) return;
                            return o.name
                        }
                        if (i = null != u ? {
                                id: u.toString(),
                                name: null != (l = f.choices[u]) ? l.name : void 0,
                                weight: null != (d = f.choices[u]) ? d.weight : void 0
                            } : Scribd.nway_test_pick_choice(f.choices)) return a["nw" + f.id] = parseInt(i.id), s.put(e, a), Scribd.jsblock.done(function() {
                            return $rat("nway_assignments", {
                                test: {
                                    id: f.id,
                                    name: t,
                                    choices: f.choices
                                },
                                choice: i
                            }), $rat.root().flushEvents(), $(document.body).track({
                                category: "NwayAssignments",
                                action: t,
                                label: i.name
                            })
                        }), i.name
                    }
                }, Scribd.default_free_trial_days = function() {
                    return 30
                }, Scribd.trial_cta = function(t, e) {
                    switch (null == t && (t = Scribd.default_free_trial_days()), null == e && (e = I18n.t("helpers.trial.start_your_free_trial")), t) {
                        case 360:
                            return I18n.t("helpers.trial.start_your_free_year");
                        case 60:
                            return I18n.t("helpers.trial.start_your_free_two_months");
                        case 30:
                            return I18n.t("helpers.trial.start_your_free_month");
                        case 14:
                            return I18n.t("helpers.trial.start_your_free_14_days");
                        case 7:
                            return I18n.t("helpers.trial.start_your_free_week");
                        default:
                            return e
                    }
                }, Scribd.trial_duration_text = function(t) {
                    switch (null == t && (t = Scribd.default_free_trial_days()), t) {
                        case 360:
                            return I18n.t("helpers.trial.one_year");
                        case 60:
                            return I18n.t("helpers.trial.two_months");
                        case 30:
                            return I18n.t("helpers.trial.one_month");
                        case 14:
                            return I18n.t("helpers.trial.two_weeks");
                        case 7:
                            return I18n.t("helpers.trial.one_week");
                        case 1:
                            return I18n.t("helpers.trial.trial_days_day", {
                                trial_days: t
                            });
                        default:
                            return I18n.t("helpers.trial.trial_days_days", {
                                trial_days: t
                            })
                    }
                }, Scribd.ssi_failure = function() {
                    return Scribd.tracker.send({
                        category: "ssi_errors",
                        action: "error_url",
                        label: window.location.href,
                        interactive: !1
                    })
                }, Scribd.support_passive_scroll = function() {
                    var t, e;
                    e = !1;
                    try {
                        t = Object.defineProperty({}, "passive", {
                            get: function() {
                                return e = !0
                            }
                        }), window.addEventListener("test", null, t)
                    } catch (t) {}
                    return e
                }, Date.utcEpoch = function() {
                    return Math.floor(Date.utcNow() / 1e3)
                }, Date.utcNow = function() {
                    var t;
                    return (t = new Date).getTime() + 6e4 * t.getTimezoneOffset()
                }, window.Date.now || (window.Date.now = function() {
                    return (new Date).getTime()
                }), String.prototype.capitalize = function() {
                    return this.charAt(0).toUpperCase() + this.slice(1)
                }, Scribd.Set = function() {
                    function t(t, e) {
                        this.elements = t, this.eq_fn = e, this.elements = this.elements || []
                    }
                    return t.prototype.push = function(t) {
                        return this.included(t) || this.elements.push(t), this
                    }, t.prototype.count = function() {
                        return this.elements.length
                    }, t.prototype.included = function(t) {
                        return this.index(t) > -1
                    }, t.prototype.index = function(t) {
                        var e, n, r, i, o;
                        for (n = r = 0, i = (o = this.elements).length; r < i; n = ++r)
                            if (e = o[n], this.eq_fn(t, e)) return n;
                        return -1
                    }, t.prototype.toggle = function(t) {
                        return this.included(t) ? this.elements.splice(this.index(t), 1) : this.push(t), this
                    }, t
                }(), Scribd.init = function(t) {
                    var e, n, r, i, o;
                    if (arguments.length > 0) {
                        for (i = arguments.length, o = null, r = 0; r < i;) {
                            if (0 === arguments[r].length) throw "Cannot initialize an empty string";
                            n = o ? o[arguments[r]] : window[arguments[r]], e = o || window, n || (n = e[arguments[r]] = {}), o = n, r++
                        }
                        return n
                    }
                }
            }).call(this, n(4))
        },
        32: function(t, e, n) {
            n(20), Scribd.facebook_login_status = jQuery.Deferred(), window.fbAsyncInit = function() {
                return Scribd.with_named_current_user(function() {
                    return Scribd.facebook = new Scribd.Facebook, Scribd.Facebook.loaded.resolve()
                })
            }, Scribd.Facebook = function() {
                function t() {
                    this.cookie = new Scribd.JSONCookie("session_metadata"), this.connect(), $(document).trigger("facebook:initialized")
                }
                return t.loaded = $.Deferred(), t.setup = function() {
                    var t;
                    if (!Scribd.facebook_disabled) return (t = document.createElement("script")).type = "text/javascript", t.src = document.location.protocol + "//connect.facebook.net/en_US/sdk.js", t.async = !0, document.getElementById("fb-root").appendChild(t)
                }, t.prototype.get_config = function(t) {
                    var e, n;
                    return "undefined" != typeof Scribd && null !== Scribd && null != (e = Scribd.config) && null != (n = e.facebook) ? n[t] : void 0
                }, t.prototype.login = function(t) {
                    var e;
                    return e = function(e) {
                        return function(n) {
                            return (null != n ? n.authResponse : void 0) ? (e.session = n.authResponse, Scribd.with_named_current_user(function() {
                                var t;
                                return (t = Scribd.set_named_current_user(Scribd.named_current_user() || {})).is_facebook_user = !0, t.facebook_user_id = e.session.userID
                            }), null != t ? t.apply(null, arguments) : void 0) : (e.session = null, "function" == typeof t ? t(null) : void 0)
                        }
                    }(this), FB.login(e, {
                        scope: this.get_config("permissions")
                    })
                }, t.prototype.login_and_link = function(t) {
                    return this.login(function(e) {
                        return e ? $.ajax(Scribd.facebook.link_url, {
                            type: "post",
                            success: function() {
                                return "function" == typeof t ? t(!0, e) : void 0
                            },
                            error: function() {
                                return "function" == typeof t ? t(!1, e) : void 0
                            }
                        }) : "function" == typeof t ? t(!1) : void 0
                    })
                }, t.prototype.with_account = function(t, e) {
                    return null == e && (e = !1), Scribd.with_named_current_user(function() {
                        if (Scribd.named_current_user().is_facebook_user) return FB.getLoginStatus(function(n) {
                            return n.authResponse.userID.toString() === Scribd.named_current_user().facebook_user_id.toString() ? "function" == typeof t ? t() : void 0 : e ? FB.logout(function(n) {
                                return function() {
                                    return FB.login(function() {
                                        return n.with_account(t, e)
                                    })
                                }
                            }(this)) : void 0
                        })
                    })
                }, t.prototype.with_permission = function(t, e) {
                    return this.check_permission(t).then(e, function(t) {
                        return function() {
                            return t.login(e)
                        }
                    }(this))
                }, t.prototype.check_permission = function(t) {
                    var e;
                    return e = jQuery.Deferred(), FB.api("/me?fields=permissions", "get", function(n) {
                        var r, i;
                        return "granted" === (null != (i = function() {
                            var e, i, o, s;
                            for (s = [], e = 0, i = (o = n.permissions.data).length; e < i; e++)(r = o[e]).permission === t && s.push(r);
                            return s
                        }()[0]) ? i.status : void 0) ? e.resolve(n) : e.reject(n)
                    }), e
                }, t.prototype.connect = function() {
                    return FB.init({
                        appId: this.get_config("app_id"),
                        status: !1,
                        cookie: !0,
                        xfbml: !1,
                        oauth: !0,
                        version: "v2.1"
                    }), this.get_session(function(t) {
                        return function() {
                            return t.instant = new Scribd.Facebook.InstantPersonalize(t)
                        }
                    }(this))
                }, t.prototype.get_session = function(t) {
                    var e;
                    if (this.session = null, !("" + this.cookie.get("active_facebook_session") == "false" && (e = this.cookie.get("last_facebook_ping")) && (Scribd.facebook_login_status.reject(), +new Date - e < 36e5))) return FB.getLoginStatus(function(e) {
                        return function(n) {
                            return "connected" === n.status ? (e.session = n.authResponse, "function" == typeof t && t(), Scribd.facebook_login_status.resolve(n.status)) : (e.cookie.set("active_facebook_session", "false"), e.cookie.set("last_facebook_ping", +new Date), e.cookie.save(), Scribd.facebook_login_status.reject(n.status))
                        }
                    }(this))
                }, t
            }(), Scribd.Facebook.InstantPersonalize = function() {
                function t(t) {
                    this.facebook = null != t ? t : Scribd.facebook, this.cookie = this.facebook.cookie, this.try_remember_id()
                }
                return t.context = "newhome", t.prototype.try_remember_id = function() {
                    if (this.facebook.session) return this.cookie.set("last_facebook_uid", this.facebook.session.userID), this.cookie.save()
                }, t
            }()
        },
        320: function(t, e, n) {
            (function(t) {
                var e = [].slice,
                    n = {}.hasOwnProperty;
                Scribd.Tracker = function() {
                    function r(t) {
                        this.container = $(t), this.setup_events()
                    }
                    return r.prototype.setup_events = function() {
                        return Scribd.logging_enabled && $(document).on("scribd:rats_event", function(t, e, n) {
                            return null == e && (e = ""), null == n && (n = {}), $.extend({}, n).label = e
                        }), this.container.on("scribd:track", function(t) {
                            return function(e, n) {
                                var r;
                                return null == n && (n = {}), e.stopPropagation(), (r = $(e.target)).data("scribd_tracked", !0), t.send(t.element_data(r, e, n))
                            }
                        }(this)), this.container.on("scribd:track_rats_ga", function(t) {
                            return function(e) {
                                var n;
                                return n = $(e.target), t.send_rats.apply(t, t.element_rats(n, e))
                            }
                        }(this)), this.container.on("scribd:track_rats", function(t) {
                            return function(e, n, r) {
                                var i;
                                return null == n && (n = ""), null == r && (r = {}), i = $(e.target), t.track_rats(i, n, r)
                            }
                        }(this)), this.container.on("ajax:send", "form[data-track]", function(t) {
                            return function(e) {
                                var n, r;
                                return n = $(e.currentTarget), (r = t.element_data(n, e)).action = "submit", t.send(r)
                            }
                        }(this)), this.container.on("click contextmenu", "[data-track]", function(t) {
                            return function(e) {
                                var n, r;
                                if (!$(e.currentTarget).data("scribd_tracked") && !$(e.currentTarget).is("form[data-track]") && ("" !== (r = $(e.currentTarget)).data("track") && t.send(t.element_data(r, e)), t.send_rats.apply(t, t.element_rats(r, e)), !e.metaKey && (n = $(e.target).closest("a")).length && n.attr("href") && !n.data("remote") && "contextmenu" !== e.type && !n.attr("target") && "#" !== n.attr("href").charAt(0))) return setTimeout(function() {
                                    return window.location = n.attr("href")
                                }, 100), e.stopPropagation()
                            }
                        }(this))
                    }, r.prototype.element_rats = function(t, n) {
                        var r, i, o, s, a, u, c, l;
                        return (o = [t.data("track_rats_value") || {}].concat(e.call(function() {
                            var e, n, r, i;
                            for (i = [], e = 0, n = (r = t.parents("[data-track_rats_value]")).length; e < n; e++) l = r[e], i.push($(l).data("track_rats_value") || {});
                            return i
                        }()))).reverse(), u = $.extend.apply($, [{}].concat(e.call(o))), a = t.closest("[data-track_rats]").data("track_rats"), t.data("override_rats_name") && (a = t.data("override_rats_name")), $.isEmptyObject(u) ? [] : ("contextmenu" === (null != n ? n.type : void 0) && (u.event_name = "contextmenu"), a || (i = (c = this.element_data(t, n)).category, r = c.action, (s = c.label) && "" !== s || (s = t.closest("[data-track]").data("track")), a = i + (r ? "_" + r : "") + (s ? "_" + s : "")), [a, u])
                    }, r.prototype.element_data = function(e, n, r) {
                        var i, o, s, a, u, c;
                        return null == r && (r = {}), i = $(e), a = (u = this.namespace(i))[0], s = u[1], "scribd:track" === (o = {
                            action: r.action || (null != n ? n.type : void 0),
                            category: r.category || a,
                            label: r.label || "",
                            value: Scribd.named_current_user_sync() ? 1 : 0,
                            interactive: null == (c = r.interactive) || c
                        }).action && console.info("scribd_tracker: got event 'scribd:track', did you forget to set a track_category or action?"), i.data("track") && (o.label = i.data("track")), null != r.params && (o.params = r.params), s.length && o.label ? o.label = s + ":" + o.label : s.length && (o.label = s), i.data("track_params") && (o.params = null != r.params ? t.extend(r.params, i.data("track_params")) : i.data("track_params")), t.isString(o.params) && (o.params = {
                            action: o.params
                        }), o
                    }, r.prototype.namespace = function(t) {
                        var e;
                        return null == t && (t = this.container), [(e = this.location_data(t)).shift(), e.join(":")]
                    }, r.prototype.location_data = function(e) {
                        var n, r, i;
                        return null == e && (e = this.container), i = function() {
                            var i, o, s, a;
                            for (a = [], i = 0, o = (s = e.parents("[data-track_category]")).length; i < o; i++) r = s[i], n = $(r), t.isEmpty(n.data("track_category")) || a.push(n.data("track_category"));
                            return a
                        }(), i = t.flatten(i), i = t.compact(i), e.data("track_category") && i.unshift(e.data("track_category")), i.reverse()
                    }, r.prototype.send = function(t) {
                        var e, r, i, o, s, a, u, c, l;
                        if (e = t.action, r = t.category, a = t.label, l = t.value, o = t.interactive, t.params && ((i = function() {
                                var e, r;
                                for (s in r = [], e = t.params) n.call(e, s) && (c = e[s], r.push(s + ":" + c));
                                return r
                            }()).length && (a += " " + i.join(", ")), a = a.trim()), !r) return console.error("scribd_tracker: no category provided");
                        new Scribd.RatsTracker("ga_" + r, {}, {
                            flush: !1
                        }).send({
                            action: e,
                            label: a
                        }), Scribd.logging_enabled && console.log("%cGoogle Analytics: Log Standard Event", "background: darkblue; color: white; display: block; padding: 5px;", r, {
                            action: e,
                            label: a,
                            value: l,
                            interactive: o
                        });
                        try {
                            if (_gaq.push(["_trackEvent", r, e, a, l, o]), ga("send", "event", r, e, a, l, o), null != (u = Scribd.named_current_user_sync()) ? u.pmp_subscriber : void 0) return ga("pmp_users.send", "event", r, e, a, l, o)
                        } catch (t) {
                            return t, Scribd.log("couldn't log last event with GA")
                        }
                    }, r.prototype.send_rats = function(t, e) {
                        if (t && e) return $rat(t, e), $rat.root().flushEvents()
                    }, r.prototype.track_rats = function(e, n, r) {
                        var i, o, s, a;
                        for (o in null == r && (r = {}), i = {
                                location: s = this.location_data(e),
                                page: s.shift()
                            }) a = i[o], t.isEmpty(a) || null == r[o] && (r[o] = a);
                        return $rat(n, r), $rat.root().flushEvents()
                    }, r
                }(), Scribd.RatsTracker = function() {
                    function e(t, e, n) {
                        this.category = t, this.default_data = null != e ? e : {}, this.opts = null != n ? n : {}
                    }
                    return e.type = "rats_tracker", e.prototype.send = function(e, n) {
                        if (null == n && (n = this.category), "string" != typeof e) return $rat(n, t.extend(this.default_data, e)), !1 !== this.opts.flush ? $rat.root().flushEvents() : void 0
                    }, e
                }(), Scribd._split_ga_category = function(t) {
                    var e, n;
                    return n = "", (e = t.match(/^(.*):(.+)$/)) && (n = e[2] + "_", t = e[1]), [t, n]
                }, Scribd.track_rat_ga_event = function(t, e, n) {
                    return "function" == typeof $rat && $rat(t + "." + e, n), "undefined" != typeof $rat && null !== $rat ? $rat.root().flushEvents() : void 0
                }, Scribd.track_event = function(t, e, n, r, i) {
                    return console.info("scribd_tracking: track_event has been deprecated", arguments), Scribd.tracker || (Scribd.tracker = new Scribd.Tracker(document)), Scribd.tracker.send({
                        category: t,
                        action: e,
                        label: n,
                        value: r,
                        interactive: i
                    })
                }, window.trackEvent = Scribd.track_event, Scribd.is_tracker = function(t) {
                    return "function" == typeof t && t.is_tracker
                }, Scribd.make_tracker = function(t, e) {
                    return null == e && (e = {}), console.info("scribd_tracking: 'make_tracker' is deprecated", arguments),
                        function() {
                            return console.info("scribd_tracking: 'make_tracker' is deprecated", arguments)
                        }
                }, $.fn.delegate_tracking = function(t, e) {
                    return console.info("delegate_tracking has been deprecated", arguments)
                }, $.fn.track = function(t) {
                    return this.trigger("scribd:track", [t])
                }, $.fn.track_rats = function(t, e) {
                    return this.trigger("scribd:track_rats", [t, e])
                }, $.fn.track_js_performance = t.once(function(e, n) {
                    var r;
                    return null == n && (n = ""), r = function() {
                        var t, r, i, o, s, a, u, c, l, d, f, p, h, g, m, b, v;
                        if (window.performance && (v = {
                                Chrome: 65,
                                Firefox: 58,
                                Safari: 11,
                                IE: 11,
                                Edge: 16,
                                "Mobile Safari": 10
                            }, t = new UAParser(navigator.userAgent).getBrowser(), parseInt(t.major) >= v[t.name])) return g = (f = performance.timing).requestStart, r = f.connectEnd, m = f.responseEnd, a = f.domLoading, s = f.domInteractive, o = f.domComplete, u = a - (b = "IE" === t.name ? r : g), i = {
                            bot: Scribd.is_bot,
                            dom_loading_starts: u,
                            dom_loading_to_complete: o - a,
                            dom_loading_to_interactive: s - a,
                            logged_in: Scribd.logged_in,
                            page: e,
                            request_finished: m - b,
                            browser_name: t.name,
                            browser_version: t.major
                        }, n && (i.bucket = n), "Chrome" === t.name && (l = Math.floor(null != (p = performance.getEntriesByName("first-paint")[0]) ? p.startTime : void 0), c = Math.floor(null != (h = performance.getEntriesByName("first-contentful-paint")[0]) ? h.startTime : void 0), l && (i.dom_loading_to_first_paint = l - u), c && (i.dom_loading_to_first_contentful_paint = c - u), (d = performance.getEntriesByType("navigation")[0]) && (i.dom_loading_time_to_first_byte = d.responseStart - d.requestStart)), $rat("js_performance", i)
                    }, t.defer(function() {
                        return "complete" === document.readyState ? r() : window.addEventListener("load", r)
                    })
                })
            }).call(this, n(4))
        },
        337: function(t, e) {
            ! function(t) {
                t.parseQuery = function(e) {
                    var n = {
                            query: window.location.search || ""
                        },
                        r = {};
                    return "string" == typeof e && (e = {
                        query: e
                    }), t.extend(n, t.parseQuery, e), n.query = n.query.replace(/^\?/, ""), n.query.length > 0 && t.each(n.query.split(n.separator), function(t, e) {
                        var i = e.split("="),
                            o = n.decode(i.shift(), null).toString(),
                            s = n.decode(i.length ? i.join("=") : null, o);
                        (n.array_keys.test ? n.array_keys.test(o) : n.array_keys(o)) ? (r[o] = r[o] || [], r[o].push(s)) : r[o] = s
                    }), r
                }, t.parseQuery.decode = t.parseQuery.default_decode = function(t) {
                    return decodeURIComponent((t || "").replace(/\+/g, " "))
                }, t.parseQuery.array_keys = function() {
                    return !1
                }, t.parseQuery.separator = "&"
            }(window.jQuery || window.Zepto)
        },
        338: function(t, e, n) {
            var r, i = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            n(20), r = function() {
                function t(e) {
                    this._clear_enter_timeout = i(this._clear_enter_timeout, this), this._clear_fade_timeout = i(this._clear_fade_timeout, this), this._clear_leave_timeout = i(this._clear_leave_timeout, this), this.opts = $.extend({}, this.default_opts, e), this.open = !1, t.disable_hide = "true" === Scribd.parse_parameters(window.location.search).disable_hover_hide
                }
                return t.prototype.default_opts = {
                    timeout: 1e3,
                    enter_timeout: 150,
                    fade_timeout: 400,
                    show: function() {},
                    hide: function() {},
                    after_fade: function() {}
                }, t.prototype.enter = function() {
                    if (!this.enter_timeout) return this._clear_leave_timeout(), this._clear_fade_timeout(), this.enter_timeout = window.setTimeout(function(t) {
                        return function() {
                            var e;
                            return delete t.enter_timeout, t.open || "function" == typeof(e = t.opts).show && e.show(), t.open = !0
                        }
                    }(this), this.opts.enter_timeout)
                }, t.prototype.leave = function() {
                    if (!this.leave_timeout) return this._clear_enter_timeout(), this.leave_timeout = window.setTimeout(function(t) {
                        return function() {
                            return delete t.leave_timeout, t.hide()
                        }
                    }(this), this.opts.timeout)
                }, t.prototype.hide = function() {
                    var e;
                    if (!t.disable_hide) return this._clear_enter_timeout(), this._clear_leave_timeout(), this.open && "function" == typeof(e = this.opts).hide && e.hide(), this.open = !1, this.hiding = !0, this.fade_timeout = window.setTimeout(function(t) {
                        return function() {
                            var e;
                            return "function" == typeof(e = t.opts).after_fade && e.after_fade(), t.hiding = !1
                        }
                    }(this), this.opts.fade_timeout)
                }, t.prototype.show = function() {
                    var t;
                    return "function" == typeof(t = this.opts).show ? t.show() : void 0
                }, t.prototype._clear_leave_timeout = function() {
                    if (this.leave_timeout) return window.clearTimeout(this.leave_timeout), delete this.leave_timeout
                }, t.prototype._clear_fade_timeout = function() {
                    if (this.fade_timeout) return window.clearTimeout(this.fade_timeout), delete this.fade_timeout
                }, t.prototype._clear_enter_timeout = function() {
                    if (this.enter_timeout) return window.clearTimeout(this.enter_timeout), delete this.enter_timeout
                }, t
            }(), Scribd.HoverManager = r
        },
        339: function(t, e) {
            Scribd.send_pingback = function(t) {
                var e, n, r;
                if (r = t.join(""), "undefined" == typeof navigator || null === navigator || null == (n = navigator.userAgent) || !n.match(/Google (Web|Instant) Preview/)) return e = {}, document.referrer && (e.referer = document.referrer), $.ajax({
                    type: "POST",
                    url: r,
                    data: e,
                    skip_csrf: !0
                })
            }
        },
        342: function(t, e) {
            var n = "2",
                r = function() {
                    function t(t, e) {
                        return Math.floor(Math.random() * (e - t + 1)) + t
                    }
                    Array.prototype.map || (Array.prototype.map = function(t, e) {
                        var n, r, i;
                        if (null == this) throw new TypeError(" this is null or not defined");
                        var o = Object(this),
                            s = o.length >>> 0;
                        if ("function" != typeof t) throw new TypeError(t + " is not a function");
                        for (e && (n = e), r = new Array(s), i = 0; i < s;) {
                            var a, u;
                            i in o && (a = o[i], u = t.call(n, a, i, o), r[i] = u), i++
                        }
                        return r
                    });
                    var e = {
                        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        encode: function(t) {
                            var n, r, i, o, s, a, u, c = "",
                                l = 0;
                            for (t = e._utf8_encode(t); l < t.length;) o = (n = t.charCodeAt(l++)) >> 2, s = (3 & n) << 4 | (r = t.charCodeAt(l++)) >> 4, a = (15 & r) << 2 | (i = t.charCodeAt(l++)) >> 6, u = 63 & i, isNaN(r) ? a = u = 64 : isNaN(i) && (u = 64), c = c + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(a) + this._keyStr.charAt(u);
                            return c
                        },
                        _utf8_encode: function(t) {
                            t = t.replace(/\r\n/g, "\n");
                            for (var e = "", n = 0; n < t.length; n++) {
                                var r = t.charCodeAt(n);
                                r < 128 ? e += String.fromCharCode(r) : r > 127 && r < 2048 ? (e += String.fromCharCode(r >> 6 | 192), e += String.fromCharCode(63 & r | 128)) : (e += String.fromCharCode(r >> 12 | 224), e += String.fromCharCode(r >> 6 & 63 | 128), e += String.fromCharCode(63 & r | 128))
                            }
                            return e
                        }
                    };

                    function r(t, e) {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.onreadystatechange = function() {
                            4 == n.readyState && 200 == n.status && e(JSON.parse(n.responseText))
                        }, n.send()
                    }

                    function i() {
                        return (new Date).getTime() / 1e3
                    }

                    function o(t) {
                        var n = [];
                        for (var r in t)
                            if (t.hasOwnProperty(r)) {
                                var i = t[r];
                                void 0 === i && (i = null), i = e.encode(JSON.stringify(i)), n.push(r + "=" + encodeURIComponent(i))
                            } return n.join("&")
                    }

                    function s(t, e, n) {
                        t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, n)
                    }

                    function a(t, e, n) {
                        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && t.detachEvent("on" + e, n)
                    }

                    function u(t, e) {
                        this.hosts = t, this.es = [], this.vs = [], this.ts = [], this.otherData = e, this._flushTimeoutId = null, this.lastPing = null, this.numPings = 0, this.dhost = this._randHost() + n + "/"
                    }

                    function c(t, e) {
                        function n(n, r) {
                            if ("js_performance" === n) return t.logPerformanceEvent(n, r);
                            e && (n = e + "." + n), t.logEvent(n, r)
                        }
                        return n.logEvent = n, n.parent = t, n.root = function() {
                            return t.root()
                        }, n.disable = function() {
                            t.disable()
                        }, n.disabled = function() {
                            return t.disabled()
                        }, n.s = function(t) {
                            return c(n, t)
                        }, n.o = function(t, e, r, i, o) {
                            if (i = i || -1, o = o || 1e3, !n.disabled()) {
                                var u = !1;
                                u = !0;
                                s(t, e, function s(c) {
                                    c || (c = window.event), r instanceof Function ? n.logEvent(r.call(this, c)) : n.logEvent(r), a(t, e, s), (-1 == (i -= 1) || i > 0) && setTimeout(function() {
                                        u || (u = !0)
                                    }, o)
                                })
                            }
                        }, n
                    }
                    return u.prototype.start = function() {
                            var t = this;

                            function e() {
                                u._unloaded || (u._unloaded = !0, t.lps && (t.lps.parentElement.removeChild(t.lps), delete t.lps, t.lps = null), t.logEvent("dom.window.beforeunload"), t.flushEvents(!0))
                            }
                            u._unloaded = !1, this._getVid(), s(window, "load", function() {
                                t.docLoaded = !0
                            }), this.unloadf = e, s(window, "beforeunload", e), s(window, "unload", e)
                        }, u.prototype._getVid = function(t, e, n, s) {
                            if (!this.disabled()) {
                                var a = s || this.dhost + "getvid.json?callback=?&" + o({
                                        l: location.href,
                                        r: document.referrer || document.referer || null,
                                        ea: this.otherData,
                                        ubtc: this._getUBTC()
                                    }),
                                    u = this;
                                n = n || 0, e = (e || 9) - 1, r(a, function(r) {
                                    if ("success" == r.status) {
                                        if (u.vid = r.vid, u.lastFlushed = i(), u._setupPing(), u.logTimeoutLen = r.logTimeoutLen, u._onGetVid) {
                                            for (var o = 0; o < u._onGetVid.length; o++) u._onGetVid[o](u.vid);
                                            delete u._onGetVid
                                        }
                                        t && t(u.vid)
                                    } else n < e ? setTimeout(function() {
                                        u._getVid(t, e, n + 1, a)
                                    }, 1e3 * Math.pow(2, n)) : u.disable()
                                })
                            }
                        }, u.prototype._setupPing = function() {
                            if (!this.disabled() && !this._pingSetup) {
                                this._pingSetup = !0;
                                var t = this;
                                s(document, "mousemove", function e() {
                                    t.lastPing = i(), t.numPings += 1, t._pingSetup = !1, t._startFlushTimeout(), a(document, "mousemove", e), setTimeout(function() {
                                        t._setupPing()
                                    }, 1e3)
                                })
                            }
                        }, u.prototype._resetBuffers = function() {
                            this.es = [], this.ts = [], this.vs = [], this.lastFlushed = this.lastPing, this.lastPing = null, this.numPings = 0, this._clearFlushTimeout()
                        }, u.prototype._getUBTC = function() {
                            return null != $.parseQuery ? this._ubtc = this._ubtc || $.parseQuery(document.cookie.replace(/; */g, "&")).scribd_ubtc : this._ubtc = this._ubtc || document.cookie.replace(/; */g, "&").parseQuery().scribd_ubtc, this._ubtc
                        }, u.prototype.flushEvents = function(e, n) {
                            var r = this;
                            if (!this.disabled())
                                if (this.vid) {
                                    var s = this.es.join(" | "),
                                        a = this.vs.map(function(t) {
                                            return JSON.stringify(t)
                                        }).join(" | ");
                                    "function" == typeof Scribd.log && Scribd.log("%cRats: Flush Events (send)", "background: lightblue; color: darkblue; display: block; padding: 5px;", s || "empty", a || "ping");
                                    var u = o({
                                        es: this.es,
                                        ts: this.ts,
                                        vs: this.vs,
                                        n: i(),
                                        lp: this.lastPing,
                                        np: this.numPings,
                                        ubtc: this._getUBTC()
                                    });
                                    this._resetBuffers();
                                    r = this;
                                    if (e) {
                                        var c = new Image;
                                        c.src = this.dhost + this.vid + "/de.png?rand=" + t(0, 1e5) + "&" + u, document.body.appendChild(c)
                                    } else this._flushRawEvents(this.dhost + this.vid + "/de.json?callback=?&" + u, n)
                                } else this.flushQueued || (this.flushQueued = !0, this.withVid(function() {
                                    r.flushEvents()
                                }))
                        }, u.prototype._flushRawEvents = function(t, e, n, i) {
                            if (!this.disabled()) {
                                i = i || 0, n = (n || 9) - 1, r(t, function(t) {
                                    e && e()
                                })
                            }
                        }, u.prototype.logPerformanceEvent = function(t, e) {
                            if (null != window.Scribd && Scribd.logging_enabled && (console.log("%cRats: Log Performance Event (send)", "background: lightgreen; color: darkgreen; display: block; padding: 5px;", t, e), $(document.body).trigger("scribd:rats_event", [t, e])), !this.disabled()) {
                                var n = o({
                                        ts: i(),
                                        v: e,
                                        ubtc: this._getUBTC()
                                    }),
                                    r = function() {
                                        this._flushRawEvents(this.dhost + this.vid + "/pt.json?callback=?&" + n)
                                    }.bind(this);
                                this.vid ? r() : this.withVid(r)
                            }
                        }, u.prototype.logEvent = function(t, e) {
                            if (null != window.Scribd && Scribd.logging_enabled && (console.log("%cRats: Log Standard Event (queue)", "background: green; color: white; display: block; padding: 5px;", t, e), $(document.body).trigger("scribd:rats_event", [t, e])), !this.disabled()) {
                                var n = i();
                                this.lastPing = n, e = e || null, this.es.push(t), this.vs.push(e), this.ts.push(n), this._startFlushTimeout()
                            }
                        }, u.prototype.l = u.prototype.logEvent, u.prototype._startFlushTimeout = function() {
                            if (!this.disabled())
                                if (this.es.length >= 10) {
                                    var t = this;
                                    this.flushEvents(!1, function() {
                                        t._setupPing()
                                    })
                                } else if (null === this._flushTimeoutId && this.logTimeoutLen) {
                                t = this;
                                this._flushTimeoutId = window.setTimeout(function() {
                                    t.flushEvents(!1, function() {
                                        t._setupPing()
                                    })
                                }, this._getTimeoutLen())
                            }
                        }, u.prototype._getTimeoutLen = function() {
                            return this.logTimeoutLen - 1e3 * (i() - this.lastFlushed)
                        }, u.prototype._clearFlushTimeout = function() {
                            null !== this._flushTimeoutId && (window.clearTimeout(this._flushTimeoutId), this._flushTimeoutId = null)
                        }, u.prototype._randHost = function(e) {
                            return e = e || "", this.hosts[t(0, this.hosts.length - 1)] + e
                        }, u.prototype.disable = function() {
                            this._disabled = !0, this.unloadf && (a(window, "beforeunload", this.unloadf), a(window, "unload", this.unloadf))
                        }, u.prototype.disabled = function() {
                            return this._disabled
                        }, u.prototype.root = function() {
                            return this
                        }, u.prototype.withVid = function(t) {
                            if (this.vid) return t(this.vid);
                            (this._onGetVid = this._onGetVid || []).push(t)
                        },
                        function(t, e, n) {
                            var r = new u(t, e);
                            return n ? r.disable() : r.start(), c(r)
                        }
                }();
            window.ratInit = r
        },
        343: function(t, e, n) {
            (function(e) {
                t.exports = e.UAParser = n(1055)
            }).call(this, n(540))
        },
        344: function(t, e) {
            $.fn.lazyimages = function() {
                var t, e, n, r, i, o, s, a;
                for (e = 0, i = (s = this.find("[data-lazysrc]")).length; e < i; e++) n = s[e], (n = $(n)).attr("src", n.data("lazysrc")), n.removeAttr("data-lazysrc");
                for (r = 0, o = (a = this.find("[data-lazybg]")).length; r < o; r++) t = a[r], (t = $(t)).css("background-image", "url('" + t.data("lazybg") + "')"), t.removeAttr("data-lazybg");
                return this
            }
        },
        345: function(t, e) {
            $(function() {
                return $(document).on("submit", "form", function(t) {
                    var e, n, r, i, o, s;
                    if (!(i = $(t.currentTarget)).closest(".auto__base_component").length && (e = i.find(".flat_btn:not(.no_spinner)")).length) {
                        for (r = function() {
                                var n, r, i;
                                for (i = [], n = 0, r = e.length; n < r; n++) t = e[n], i.push($(t));
                                return i
                            }(), o = 0, s = r.length; o < s; o++)(n = r[o]).addClass("loading"), n.prop("disabled", !0);
                        return i.on("ajax:complete.submit_loading", function() {
                            var t, e;
                            for (t = 0, e = r.length; t < e; t++)(n = r[t]).removeClass("loading"), n.prop("disabled", !1);
                            return i.off("ajax:complete.submit_loading")
                        })
                    }
                })
            }), $.fn.fancy_select = function() {
                var t, e, n, r, i, o, s, a;
                if (!this.length) return this;
                if ((a = (o = (n = this.first()).find("a")).filter(".selected")).length || (a = o.first()), !o.length) throw "no options found";
                return (s = $("<button class='fancy_select has_ticks'> <span class='fancy_select_label'></span> <span class='sprite white_tri_up'></span> <span class='sprite white_tri_down'></span> </button>")).find(".fancy_select_label").html(a.html()), r = $("<div class='fancy_select_menu'></div>"), t = !0, i = function() {
                    var e;
                    return s.addClass("open"), e = s.offset(), r.appendTo(document.body).css({
                        left: e.left + "px",
                        top: e.top + s.height() + "px"
                    }).stop(!0), t && (r.height() > 300 && $("<div class='fancy_menu_inner'></div>").append(r.children()).appendTo(r), t = !1), r.hide().slideDown("fast")
                }, e = function() {
                    return s.removeClass("open"), r.stop(!0).slideUp("fast", function() {
                        return r.detach()
                    })
                }, o.addClass("fancy_option").appendTo(r), s.on("click", function(t) {
                    return s.is(".open") ? e() : i(), !1
                }), r.on("click", ".fancy_option", function(t) {
                    return e(), n.trigger("scribd:fancy_select", [t.currentTarget])
                }), n.hide().after(s), $(document.body).click(function(t) {
                    if (s.is(".open") && !$(t.target).closest(r).length) return e()
                }), this
            }
        },
        346: function(t, e, n) {
            var r;
            r = function() {
                function t(t) {
                    var e, n;
                    this.options = $.extend({
                        expires: 3600,
                        path: "/",
                        domain: Scribd.config.session_domain,
                        secure: ""
                    }, t), "" !== this.options.expires && (n = +new Date, e = new Date(n + 1e3 * this.options.expires), this.options.expires = "; expires=" + e.toGMTString()), "" !== this.options.path && (this.options.path = "; path=" + escape(this.options.path)), "" !== this.options.domain && (this.options.domain = "; domain=" + escape(this.options.domain)), this.options.secure ? this.options.secure = "; secure" : this.options.secure = ""
                }
                return t.prototype.append_string = "__CJ_", t.prototype.put = function(t, e) {
                    var n;
                    switch (t = this.append_string + t, typeof e) {
                        case "undefined":
                        case "function":
                        case "unknown":
                            return !1;
                        case "boolean":
                        case "string":
                        case "number":
                            e = e.toString()
                    }
                    n = t + " = " + escape(JSON.stringify(e));
                    try {
                        return document.cookie = n + this.options.expires + this.options.path + this.options.domain + this.options.secure, !0
                    } catch (t) {
                        return t, !1
                    }
                }, t.prototype.remove = function(t) {
                    var e, n, r;
                    r = +new Date, n = "; expires=" + new Date(r - 36e5).toGMTString();
                    try {
                        return e = this.append_string + t + "=" + n + this.options.path + this.options.domain + this.options.secure, document.cookie = e, !0
                    } catch (t) {
                        return t, !1
                    }
                }, t.prototype.get = function(t) {
                    var e;
                    if (t = this.append_string + t, e = document.cookie.match(t + "=(.*?)(;|$)")) return JSON.parse(unescape(e[1]))
                }, t.prototype.get_keys = function() {
                    var t, e, n, r, i, o;
                    for (r = [], n = new RegExp("^" + this.append_string), t = 0, i = (o = document.cookie.match(/[^=; ]+(?=\=)/g)).length; t < i; t++)(e = o[t]).match(n) && r.push(e);
                    return r
                }, t.prototype.empty = function() {
                    var t, e, n, r, i;
                    for (i = [], t = 0, n = (r = this.get_keys()).length; t < n; t++) e = r[t], i.push(this.remove(e));
                    return i
                }, t
            }(), t.exports && (t.exports = r), "undefined" != typeof window && (window.CookieJar = r)
        },
        347: function(t, e) {
            ! function(t) {
                var e, n, r, i = {},
                    o = document,
                    s = window,
                    a = o.documentElement,
                    u = t.expando;

                function c() {
                    var r, u = t(),
                        c = 0;
                    if (t.each(i, function(t, e) {
                            var n = e.data.selector,
                                r = e.$element;
                            u = u.add(n ? r.find(n) : r)
                        }), r = u.length)
                        for (e = e || function() {
                                var e, n, r = {
                                    height: s.innerHeight,
                                    width: s.innerWidth
                                };
                                return r.height || !(e = o.compatMode) && t.support.boxModel || (r = {
                                    height: (n = "CSS1Compat" === e ? a : o.body).clientHeight,
                                    width: n.clientWidth
                                }), r
                            }(), n = n || {
                                top: s.pageYOffset || a.scrollTop || o.body.scrollTop,
                                left: s.pageXOffset || a.scrollLeft || o.body.scrollLeft
                            }; c < r; c++)
                            if (t.contains(a, u[c])) {
                                var l, d, f, p = t(u[c]),
                                    h = {
                                        height: p.height(),
                                        width: p.width()
                                    },
                                    g = p.offset(),
                                    m = p.data("inview");
                                if (!n || !e) return;
                                g.top + h.height > n.top && g.top < n.top + e.height && g.left + h.width > n.left && g.left < n.left + e.width ? (f = (l = n.left > g.left ? "right" : n.left + e.width < g.left + h.width ? "left" : "both") + "-" + (d = n.top > g.top ? "bottom" : n.top + e.height < g.top + h.height ? "top" : "both"), m && m === f || p.data("inview", f).trigger("inview", [!0, l, d])) : m && p.data("inview", !1).trigger("inview", [!1]).trigger("out_of_view")
                            }
                }
                t.event.special.inview = {
                    add: function(e) {
                        i[e.guid + "-" + this[u]] = {
                            data: e,
                            $element: t(this)
                        }, r || t.isEmptyObject(i) || (r = setInterval(c, 250))
                    },
                    remove: function(e) {
                        try {
                            delete i[e.guid + "-" + this[u]]
                        } catch (t) {}
                        t.isEmptyObject(i) && (clearInterval(r), r = null)
                    },
                    run: function() {
                        c()
                    }
                }, t(s).bind("scroll resize", function() {
                    e = n = null
                }), !a.addEventListener && a.attachEvent && a.attachEvent("onfocusin", function() {
                    n = null
                })
            }(jQuery)
        },
        348: function(t, e, n) {},
        349: function(t, e, n) {},
        350: function(t, e, n) {},
        351: function(t, e, n) {},
        352: function(t, e, n) {},
        361: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };
            var i = {
                    type: "logger",
                    log: function(t) {
                        this.output("log", t)
                    },
                    warn: function(t) {
                        this.output("warn", t)
                    },
                    error: function(t) {
                        this.output("error", t)
                    },
                    output: function(t, e) {
                        var n;
                        console && console[t] && (n = console)[t].apply(n, function(t) {
                            if (Array.isArray(t)) {
                                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                                return n
                            }
                            return Array.from(t)
                        }(e))
                    }
                },
                o = new(function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.init(e, n)
                    }
                    return t.prototype.init = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.prefix = e.prefix || "i18next:", this.logger = t || i, this.options = e, this.debug = e.debug
                    }, t.prototype.setDebug = function(t) {
                        this.debug = t
                    }, t.prototype.log = function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this.forward(e, "log", "", !0)
                    }, t.prototype.warn = function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this.forward(e, "warn", "", !0)
                    }, t.prototype.error = function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this.forward(e, "error", "")
                    }, t.prototype.deprecate = function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                    }, t.prototype.forward = function(t, e, n, r) {
                        return r && !this.debug ? null : ("string" == typeof t[0] && (t[0] = "" + n + this.prefix + " " + t[0]), this.logger[e](t))
                    }, t.prototype.create = function(e) {
                        return new t(this.logger, r({
                            prefix: this.prefix + ":" + e + ":"
                        }, this.options))
                    }, t
                }());
            var s = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.observers = {}
                }
                return t.prototype.on = function(t, e) {
                    var n = this;
                    return t.split(" ").forEach(function(t) {
                        n.observers[t] = n.observers[t] || [], n.observers[t].push(e)
                    }), this
                }, t.prototype.off = function(t, e) {
                    var n = this;
                    this.observers[t] && this.observers[t].forEach(function() {
                        if (e) {
                            var r = n.observers[t].indexOf(e);
                            r > -1 && n.observers[t].splice(r, 1)
                        } else delete n.observers[t]
                    })
                }, t.prototype.emit = function(t) {
                    for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    this.observers[t] && [].concat(this.observers[t]).forEach(function(t) {
                        t.apply(void 0, n)
                    });
                    this.observers["*"] && [].concat(this.observers["*"]).forEach(function(e) {
                        e.apply(e, [t].concat(n))
                    })
                }, t
            }();

            function a(t) {
                return null == t ? "" : "" + t
            }

            function u(t, e, n) {
                function r(t) {
                    return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
                }

                function i() {
                    return !t || "string" == typeof t
                }
                for (var o = "string" != typeof e ? [].concat(e) : e.split("."); o.length > 1;) {
                    if (i()) return {};
                    var s = r(o.shift());
                    !t[s] && n && (t[s] = new n), t = t[s]
                }
                return i() ? {} : {
                    obj: t,
                    k: r(o.shift())
                }
            }

            function c(t, e, n) {
                var r = u(t, e, Object);
                r.obj[r.k] = n
            }

            function l(t, e) {
                var n = u(t, e),
                    r = n.obj,
                    i = n.k;
                if (r) return r[i]
            }

            function d(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var f = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function p(t) {
                return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function(t) {
                    return f[t]
                }) : t
            }
            var h = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            };

            function g(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }
            var m = function(t) {
                    function e(n) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var i = function(t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, t.call(this));
                        return i.data = n || {}, i.options = r, void 0 === i.options.keySeparator && (i.options.keySeparator = "."), i
                    }
                    return g(e, t), e.prototype.addNamespaces = function(t) {
                        this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                    }, e.prototype.removeNamespaces = function(t) {
                        var e = this.options.ns.indexOf(t);
                        e > -1 && this.options.ns.splice(e, 1)
                    }, e.prototype.getResource = function(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                            o = [t, e];
                        return n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (o = t.split(".")), l(this.data, o)
                    }, e.prototype.addResource = function(t, e, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                silent: !1
                            },
                            o = this.options.keySeparator;
                        void 0 === o && (o = ".");
                        var s = [t, e];
                        n && (s = s.concat(o ? n.split(o) : n)), t.indexOf(".") > -1 && (r = e, e = (s = t.split("."))[1]), this.addNamespaces(e), c(this.data, s, r), i.silent || this.emit("added", t, e, n, r)
                    }, e.prototype.addResources = function(t, e, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            silent: !1
                        };
                        for (var i in n) "string" == typeof n[i] && this.addResource(t, e, i, n[i], {
                            silent: !0
                        });
                        r.silent || this.emit("added", t, e, n)
                    }, e.prototype.addResourceBundle = function(t, e, n, r, i) {
                        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                silent: !1
                            },
                            s = [t, e];
                        t.indexOf(".") > -1 && (r = n, n = e, e = (s = t.split("."))[1]), this.addNamespaces(e);
                        var a = l(this.data, s) || {};
                        r ? function t(e, n, r) {
                            for (var i in n) i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof n[i] || n[i] instanceof String ? r && (e[i] = n[i]) : t(e[i], n[i], r) : e[i] = n[i];
                            return e
                        }(a, n, i) : a = h({}, a, n), c(this.data, s, a), o.silent || this.emit("added", t, e, n)
                    }, e.prototype.removeResourceBundle = function(t, e) {
                        this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                    }, e.prototype.hasResourceBundle = function(t, e) {
                        return void 0 !== this.getResource(t, e)
                    }, e.prototype.getResourceBundle = function(t, e) {
                        return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? h({}, this.getResource(t, e)) : this.getResource(t, e)
                    }, e.prototype.getDataByLanguage = function(t) {
                        return this.data[t]
                    }, e.prototype.toJSON = function() {
                        return this.data
                    }, e
                }(s),
                b = {
                    processors: {},
                    addPostProcessor: function(t) {
                        this.processors[t.name] = t
                    },
                    handle: function(t, e, n, r, i) {
                        var o = this;
                        return t.forEach(function(t) {
                            o.processors[t] && (e = o.processors[t].process(e, n, r, i))
                        }), e
                    }
                },
                v = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };

            function _(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }
            var w = function(t) {
                function e(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this));
                    return function(t, e, n) {
                        t.forEach(function(t) {
                            e[t] && (n[t] = e[t])
                        })
                    }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat"], n, i), i.options = r, void 0 === i.options.keySeparator && (i.options.keySeparator = "."), i.logger = o.create("translator"), i
                }
                return _(e, t), e.prototype.changeLanguage = function(t) {
                    t && (this.language = t)
                }, e.prototype.exists = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            interpolation: {}
                        },
                        n = this.resolve(t, e);
                    return n && void 0 !== n.res
                }, e.prototype.extractFromKey = function(t, e) {
                    var n = e.nsSeparator || this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                        i = e.ns || this.options.defaultNS;
                    if (n && t.indexOf(n) > -1) {
                        var o = t.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(o[0]) > -1) && (i = o.shift()), t = o.join(r)
                    }
                    return "string" == typeof i && (i = [i]), {
                        key: t,
                        namespaces: i
                    }
                }, e.prototype.translate = function(t, e) {
                    var n = this;
                    if ("object" !== (void 0 === e ? "undefined" : y(e)) && this.options.overloadTranslationOptionHandler && (e = this.options.overloadTranslationOptionHandler(arguments)), e || (e = {}), void 0 === t || null === t || "" === t) return "";
                    "number" == typeof t && (t = String(t)), "string" == typeof t && (t = [t]);
                    var r = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                        i = this.extractFromKey(t[t.length - 1], e),
                        o = i.key,
                        s = i.namespaces,
                        a = s[s.length - 1],
                        u = e.lng || this.language,
                        c = e.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (u && "cimode" === u.toLowerCase()) {
                        if (c) {
                            var l = e.nsSeparator || this.options.nsSeparator;
                            return a + l + o
                        }
                        return o
                    }
                    var d = this.resolve(t, e),
                        f = d && d.res,
                        p = d && d.usedKey || o,
                        h = Object.prototype.toString.apply(f),
                        g = void 0 !== e.joinArrays ? e.joinArrays : this.options.joinArrays;
                    if (f && ("string" != typeof f && "boolean" != typeof f && "number" != typeof f) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) < 0 && (!g || "[object Array]" !== h)) {
                        if (!e.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, f, e) : "key '" + o + " (" + this.language + ")' returned an object instead of string.";
                        if (r) {
                            var m = "[object Array]" === h ? [] : {};
                            for (var b in f)
                                if (Object.prototype.hasOwnProperty.call(f, b)) {
                                    var _ = "" + p + r + b;
                                    m[b] = this.translate(_, v({}, e, {
                                        joinArrays: !1,
                                        ns: s
                                    })), m[b] === _ && (m[b] = f[b])
                                } f = m
                        }
                    } else if (g && "[object Array]" === h)(f = f.join(g)) && (f = this.extendTranslation(f, t, e));
                    else {
                        var w = !1,
                            k = !1;
                        if (!this.isValidLookup(f) && void 0 !== e.defaultValue) {
                            if (w = !0, void 0 !== e.count) {
                                var S = this.pluralResolver.getSuffix(u, e.count);
                                f = e["defaultValue" + S]
                            }
                            f || (f = e.defaultValue)
                        }
                        this.isValidLookup(f) || (k = !0, f = o);
                        var x = e.defaultValue && e.defaultValue !== f && this.options.updateMissing;
                        if (k || w || x) {
                            this.logger.log(x ? "updateKey" : "missingKey", u, a, o, x ? e.defaultValue : f);
                            var O = [],
                                E = this.languageUtils.getFallbackCodes(this.options.fallbackLng, e.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && E && E[0])
                                for (var T = 0; T < E.length; T++) O.push(E[T]);
                            else "all" === this.options.saveMissingTo ? O = this.languageUtils.toResolveHierarchy(e.lng || this.language) : O.push(e.lng || this.language);
                            var C = function(t, r) {
                                n.options.missingKeyHandler ? n.options.missingKeyHandler(t, a, r, x ? e.defaultValue : f, x, e) : n.backendConnector && n.backendConnector.saveMissing && n.backendConnector.saveMissing(t, a, r, x ? e.defaultValue : f, x, e), n.emit("missingKey", t, a, r, f)
                            };
                            if (this.options.saveMissing) {
                                var j = void 0 !== e.count && "string" != typeof e.count;
                                this.options.saveMissingPlurals && j ? O.forEach(function(t) {
                                    n.pluralResolver.getPluralFormsOfKey(t, o).forEach(function(e) {
                                        return C([t], e)
                                    })
                                }) : C(O, o)
                            }
                        }
                        f = this.extendTranslation(f, t, e, d), k && f === o && this.options.appendNamespaceToMissingKey && (f = a + ":" + o), k && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(f))
                    }
                    return f
                }, e.prototype.extendTranslation = function(t, e, n, r) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, n, r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(v({}, n, {
                            interpolation: v({}, this.options.interpolation, n.interpolation)
                        }));
                        var o = n.replace && "string" != typeof n.replace ? n.replace : n;
                        this.options.interpolation.defaultVariables && (o = v({}, this.options.interpolation.defaultVariables, o)), t = this.interpolator.interpolate(t, o, n.lng || this.language), !1 !== n.nest && (t = this.interpolator.nest(t, function() {
                            return i.translate.apply(i, arguments)
                        }, n)), n.interpolation && this.interpolator.reset()
                    }
                    var s = n.postProcess || this.options.postProcess,
                        a = "string" == typeof s ? [s] : s;
                    return void 0 !== t && null !== t && a && a.length && !1 !== n.applyPostProcessor && (t = b.handle(a, t, e, n, this)), t
                }, e.prototype.resolve = function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = void 0,
                        i = void 0,
                        o = void 0,
                        s = void 0;
                    return "string" == typeof t && (t = [t]), t.forEach(function(t) {
                        if (!e.isValidLookup(r)) {
                            var a = e.extractFromKey(t, n),
                                u = a.key;
                            i = u;
                            var c = a.namespaces;
                            e.options.fallbackNS && (c = c.concat(e.options.fallbackNS));
                            var l = void 0 !== n.count && "string" != typeof n.count,
                                d = void 0 !== n.context && "string" == typeof n.context && "" !== n.context,
                                f = n.lngs ? n.lngs : e.languageUtils.toResolveHierarchy(n.lng || e.language);
                            c.forEach(function(t) {
                                e.isValidLookup(r) || (s = t, f.forEach(function(i) {
                                    if (!e.isValidLookup(r)) {
                                        o = i;
                                        var s = u,
                                            a = [s];
                                        if (e.i18nFormat && e.i18nFormat.addLookupKeys) e.i18nFormat.addLookupKeys(a, u, i, t, n);
                                        else {
                                            var c = void 0;
                                            l && (c = e.pluralResolver.getSuffix(i, n.count)), l && d && a.push(s + c), d && a.push(s += "" + e.options.contextSeparator + n.context), l && a.push(s += c)
                                        }
                                        for (var f = void 0; f = a.pop();) e.isValidLookup(r) || (r = e.getResource(i, t, f, n))
                                    }
                                }))
                            })
                        }
                    }), {
                        res: r,
                        usedKey: i,
                        usedLng: o,
                        usedNS: s
                    }
                }, e.prototype.isValidLookup = function(t) {
                    return !(void 0 === t || !this.options.returnNull && null === t || !this.options.returnEmptyString && "" === t)
                }, e.prototype.getResource = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.resourceStore.getResource(t, e, n, r)
                }, e
            }(s);

            function k(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            var S = function() {
                function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.options = e, this.whitelist = this.options.whitelist || !1, this.logger = o.create("languageUtils")
                }
                return t.prototype.getScriptPartFromCode = function(t) {
                    if (!t || t.indexOf("-") < 0) return null;
                    var e = t.split("-");
                    return 2 === e.length ? null : (e.pop(), this.formatLanguageCode(e.join("-")))
                }, t.prototype.getLanguagePartFromCode = function(t) {
                    if (!t || t.indexOf("-") < 0) return t;
                    var e = t.split("-");
                    return this.formatLanguageCode(e[0])
                }, t.prototype.formatLanguageCode = function(t) {
                    if ("string" == typeof t && t.indexOf("-") > -1) {
                        var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = t.split("-");
                        return this.options.lowerCaseLng ? n = n.map(function(t) {
                            return t.toLowerCase()
                        }) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = k(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                }, t.prototype.isWhitelisted = function(t) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitWhitelist) && (t = this.getLanguagePartFromCode(t)), !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(t) > -1
                }, t.prototype.getFallbackCodes = function(t, e) {
                    if (!t) return [];
                    if ("string" == typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                    if (!e) return t.default || [];
                    var n = t[e];
                    return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t.default), n || []
                }, t.prototype.toResolveHierarchy = function(t, e) {
                    var n = this,
                        r = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                        i = [],
                        o = function(t) {
                            t && (n.isWhitelisted(t) ? i.push(t) : n.logger.warn("rejecting non-whitelisted language code: " + t))
                        };
                    return "string" == typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(t))) : "string" == typeof t && o(this.formatLanguageCode(t)), r.forEach(function(t) {
                        i.indexOf(t) < 0 && o(n.formatLanguageCode(t))
                    }), i
                }, t
            }();
            var x = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }],
                O = {
                    1: function(t) {
                        return Number(t > 1)
                    },
                    2: function(t) {
                        return Number(1 != t)
                    },
                    3: function(t) {
                        return 0
                    },
                    4: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    5: function(t) {
                        return Number(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    },
                    6: function(t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    },
                    7: function(t) {
                        return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    8: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    },
                    9: function(t) {
                        return Number(t >= 2)
                    },
                    10: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    },
                    11: function(t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    },
                    12: function(t) {
                        return Number(t % 10 != 1 || t % 100 == 11)
                    },
                    13: function(t) {
                        return Number(0 !== t)
                    },
                    14: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    },
                    15: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    16: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    },
                    17: function(t) {
                        return Number(1 == t || t % 10 == 1 ? 0 : 1)
                    },
                    18: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                    },
                    19: function(t) {
                        return Number(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    },
                    20: function(t) {
                        return Number(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    },
                    21: function(t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    }
                };
            var E = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.languageUtils = e, this.options = n, this.logger = o.create("pluralResolver"), this.rules = function() {
                            var t = {};
                            return x.forEach(function(e) {
                                e.lngs.forEach(function(n) {
                                    t[n] = {
                                        numbers: e.nr,
                                        plurals: O[e.fc]
                                    }
                                })
                            }), t
                        }()
                    }
                    return t.prototype.addRule = function(t, e) {
                        this.rules[t] = e
                    }, t.prototype.getRule = function(t) {
                        return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                    }, t.prototype.needsPlural = function(t) {
                        var e = this.getRule(t);
                        return e && e.numbers.length > 1
                    }, t.prototype.getPluralFormsOfKey = function(t, e) {
                        var n = this,
                            r = [],
                            i = this.getRule(t);
                        return i ? (i.numbers.forEach(function(i) {
                            var o = n.getSuffix(t, i);
                            r.push("" + e + o)
                        }), r) : r
                    }, t.prototype.getSuffix = function(t, e) {
                        var n = this,
                            r = this.getRule(t);
                        if (r) {
                            var i = r.noAbs ? r.plurals(e) : r.plurals(Math.abs(e)),
                                o = r.numbers[i];
                            this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                            var s = function() {
                                return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                            };
                            return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" == typeof o ? "_plural_" + o.toString() : s() : "v2" === this.options.compatibilityJSON && 2 === r.numbers.length && 1 === r.numbers[0] ? s() : this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? s() : this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString()
                        }
                        return this.logger.warn("no plural rule found for: " + t), ""
                    }, t
                }(),
                T = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                };
            var C = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.logger = o.create("interpolator"), this.init(e, !0)
                    }
                    return t.prototype.init = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        arguments[1] && (this.options = t, this.format = t.interpolation && t.interpolation.format || function(t) {
                            return t
                        }), t.interpolation || (t.interpolation = {
                            escapeValue: !0
                        });
                        var e = t.interpolation;
                        this.escape = void 0 !== e.escape ? e.escape : p, this.escapeValue = void 0 === e.escapeValue || e.escapeValue, this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape, this.prefix = e.prefix ? d(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? d(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? d(e.nestingPrefix) : e.nestingPrefixEscaped || d("$t("), this.nestingSuffix = e.nestingSuffix ? d(e.nestingSuffix) : e.nestingSuffixEscaped || d(")"), this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3, this.resetRegExp()
                    }, t.prototype.reset = function() {
                        this.options && this.init(this.options)
                    }, t.prototype.resetRegExp = function() {
                        var t = this.prefix + "(.+?)" + this.suffix;
                        this.regexp = new RegExp(t, "g");
                        var e = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
                        this.regexpUnescape = new RegExp(e, "g");
                        var n = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
                        this.nestingRegexp = new RegExp(n, "g")
                    }, t.prototype.interpolate = function(t, e, n) {
                        var r = this,
                            i = void 0,
                            o = void 0,
                            s = void 0;

                        function u(t) {
                            return t.replace(/\$/g, "$$$$")
                        }
                        var c = function(t) {
                            if (t.indexOf(r.formatSeparator) < 0) return l(e, t);
                            var i = t.split(r.formatSeparator),
                                o = i.shift().trim(),
                                s = i.join(r.formatSeparator).trim();
                            return r.format(l(e, o), s, n)
                        };
                        for (this.resetRegExp(), s = 0;
                            (i = this.regexpUnescape.exec(t)) && (o = c(i[1].trim()), t = t.replace(i[0], o), this.regexpUnescape.lastIndex = 0, !(++s >= this.maxReplaces)););
                        for (s = 0; i = this.regexp.exec(t);) {
                            if (void 0 === (o = c(i[1].trim())))
                                if ("function" == typeof this.options.missingInterpolationHandler) {
                                    var d = this.options.missingInterpolationHandler(t, i);
                                    o = "string" == typeof d ? d : ""
                                } else this.logger.warn("missed to pass in variable " + i[1] + " for interpolating " + t), o = "";
                            else "string" == typeof o || this.useRawValueToEscape || (o = a(o));
                            if (o = this.escapeValue ? u(this.escape(o)) : u(o), t = t.replace(i[0], o), this.regexp.lastIndex = 0, ++s >= this.maxReplaces) break
                        }
                        return t
                    }, t.prototype.nest = function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = void 0,
                            i = void 0,
                            o = T({}, n);

                        function s(t, e) {
                            if (t.indexOf(",") < 0) return t;
                            var n = t.split(",");
                            t = n.shift();
                            var r = n.join(",");
                            r = (r = this.interpolate(r, o)).replace(/'/g, '"');
                            try {
                                o = JSON.parse(r), e && (o = T({}, e, o))
                            } catch (e) {
                                this.logger.error("failed parsing options string in nesting for key " + t, e)
                            }
                            return t
                        }
                        for (o.applyPostProcessor = !1; r = this.nestingRegexp.exec(t);) {
                            if ((i = e(s.call(this, r[1].trim(), o), o)) && r[0] === t && "string" != typeof i) return i;
                            "string" != typeof i && (i = a(i)), i || (this.logger.warn("missed to resolve " + r[1] + " for nesting " + t), i = ""), t = t.replace(r[0], i), this.regexp.lastIndex = 0
                        }
                        return t
                    }, t
                }(),
                j = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                },
                R = function() {
                    return function(t, e) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, e) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                i = !0, o = t
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }(t, e);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }();

            function $(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }
            var N = function(t) {
                function e(n, r, i) {
                    var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var a = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this));
                    return a.backend = n, a.store = r, a.languageUtils = i.languageUtils, a.options = s, a.logger = o.create("backendConnector"), a.state = {}, a.queue = [], a.backend && a.backend.init && a.backend.init(i, s.backend, s), a
                }
                return $(e, t), e.prototype.queueLoad = function(t, e, n) {
                    var r = this,
                        i = [],
                        o = [],
                        s = [],
                        a = [];
                    return t.forEach(function(t) {
                        var n = !0;
                        e.forEach(function(e) {
                            var s = t + "|" + e;
                            r.store.hasResourceBundle(t, e) ? r.state[s] = 2 : r.state[s] < 0 || (1 === r.state[s] ? o.indexOf(s) < 0 && o.push(s) : (r.state[s] = 1, n = !1, o.indexOf(s) < 0 && o.push(s), i.indexOf(s) < 0 && i.push(s), a.indexOf(e) < 0 && a.push(e)))
                        }), n || s.push(t)
                    }), (i.length || o.length) && this.queue.push({
                        pending: o,
                        loaded: {},
                        errors: [],
                        callback: n
                    }), {
                        toLoad: i,
                        pending: o,
                        toLoadLanguages: s,
                        toLoadNamespaces: a
                    }
                }, e.prototype.loaded = function(t, e, n) {
                    var r = t.split("|"),
                        i = R(r, 2),
                        o = i[0],
                        s = i[1];
                    e && this.emit("failedLoading", o, s, e), n && this.store.addResourceBundle(o, s, n), this.state[t] = e ? -1 : 2;
                    var a = {};
                    this.queue.forEach(function(n) {
                        ! function(t, e, n, r) {
                            var i = u(t, e, Object),
                                o = i.obj,
                                s = i.k;
                            o[s] = o[s] || [], r && (o[s] = o[s].concat(n)), r || o[s].push(n)
                        }(n.loaded, [o], s),
                        function(t, e) {
                            for (var n = t.indexOf(e); - 1 !== n;) t.splice(n, 1), n = t.indexOf(e)
                        }(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach(function(t) {
                            a[t] || (a[t] = []), n.loaded[t].length && n.loaded[t].forEach(function(e) {
                                a[t].indexOf(e) < 0 && a[t].push(e)
                            })
                        }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.emit("loaded", a), this.queue = this.queue.filter(function(t) {
                        return !t.done
                    })
                }, e.prototype.read = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = this,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 250,
                        s = arguments[5];
                    return t.length ? this.backend[n](t, e, function(a, u) {
                        a && u && r < 5 ? setTimeout(function() {
                            i.read.call(i, t, e, n, r + 1, 2 * o, s)
                        }, o) : s(a, u)
                    }) : s(null, {})
                }, e.prototype.load = function(t, e, n) {
                    var r = this;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
                    "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]);
                    var i = this.queueLoad(t, e, n);
                    if (!i.toLoad.length) return i.pending.length || n(), null;
                    i.toLoad.forEach(function(t) {
                        r.loadOne(t)
                    })
                }, e.prototype.reload = function(t, e) {
                    var n = this;
                    this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources."), "string" == typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" == typeof e && (e = [e]), t.forEach(function(t) {
                        e.forEach(function(e) {
                            n.loadOne(t + "|" + e, "re")
                        })
                    })
                }, e.prototype.loadOne = function(t) {
                    var e = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = t.split("|"),
                        i = R(r, 2),
                        o = i[0],
                        s = i[1];
                    this.read(o, s, "read", null, null, function(r, i) {
                        r && e.logger.warn(n + "loading namespace " + s + " for language " + o + " failed", r), !r && i && e.logger.log(n + "loaded namespace " + s + " for language " + o, i), e.loaded(t, r, i)
                    })
                }, e.prototype.saveMissing = function(t, e, n, r, i) {
                    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.backend && this.backend.create && this.backend.create(t, e, n, r, null, j({}, o, {
                        isUpdate: i
                    })), t && t[0] && this.store.addResource(t[0], e, n, r)
                }, e
            }(s);

            function P(t) {
                return "string" == typeof t.ns && (t.ns = [t.ns]), "string" == typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" == typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.whitelist && t.whitelist.indexOf("cimode") < 0 && (t.whitelist = t.whitelist.concat(["cimode"])), t
            }
            var L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                F = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                };

            function A(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function I(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : function(t, e) {
                    for (var n = Object.getOwnPropertyNames(e), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = Object.getOwnPropertyDescriptor(e, i);
                        o && o.configurable && void 0 === t[i] && Object.defineProperty(t, i, o)
                    }
                }(t, e))
            }

            function D() {}
            var M = new(function(t) {
                function e() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments[1];
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var i = A(this, t.call(this));
                    if (i.options = P(n), i.services = {}, i.logger = o, i.modules = {
                            external: []
                        }, r && !i.isInitialized && !n.isClone) {
                        var s;
                        if (!i.options.initImmediate) return s = i.init(n, r), A(i, s);
                        setTimeout(function() {
                            i.init(n, r)
                        }, 0)
                    }
                    return i
                }
                return I(e, t), e.prototype.init = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments[1];

                    function r(t) {
                        return t ? "function" == typeof t ? new t : t : null
                    }
                    if ("function" == typeof e && (n = e, e = {}), this.options = F({}, {
                            debug: !1,
                            initImmediate: !0,
                            ns: ["translation"],
                            defaultNS: ["translation"],
                            fallbackLng: ["dev"],
                            fallbackNS: !1,
                            whitelist: !1,
                            nonExplicitWhitelist: !1,
                            load: "all",
                            preload: !1,
                            simplifyPluralSuffix: !0,
                            keySeparator: ".",
                            nsSeparator: ":",
                            pluralSeparator: "_",
                            contextSeparator: "_",
                            saveMissing: !1,
                            updateMissing: !1,
                            saveMissingTo: "fallback",
                            saveMissingPlurals: !0,
                            missingKeyHandler: !1,
                            missingInterpolationHandler: !1,
                            postProcess: !1,
                            returnNull: !0,
                            returnEmptyString: !0,
                            returnObjects: !1,
                            joinArrays: !1,
                            returnedObjectHandler: function() {},
                            parseMissingKeyHandler: !1,
                            appendNamespaceToMissingKey: !1,
                            appendNamespaceToCIMode: !1,
                            overloadTranslationOptionHandler: function(t) {
                                var e = {};
                                return t[1] && (e.defaultValue = t[1]), t[2] && (e.tDescription = t[2]), e
                            },
                            interpolation: {
                                escapeValue: !0,
                                format: function(t, e, n) {
                                    return t
                                },
                                prefix: "{{",
                                suffix: "}}",
                                formatSeparator: ",",
                                unescapePrefix: "-",
                                nestingPrefix: "$t(",
                                nestingSuffix: ")",
                                maxReplaces: 1e3
                            }
                        }, this.options, P(e)), this.format = this.options.interpolation.format, n || (n = D), !this.options.isClone) {
                        this.modules.logger ? o.init(r(this.modules.logger), this.options) : o.init(null, this.options);
                        var i = new S(this.options);
                        this.store = new m(this.options.resources, this.options);
                        var s = this.services;
                        s.logger = o, s.resourceStore = this.store, s.languageUtils = i, s.pluralResolver = new E(i, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), s.interpolator = new C(this.options), s.backendConnector = new N(r(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function(e) {
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            t.emit.apply(t, [e].concat(r))
                        }), this.modules.languageDetector && (s.languageDetector = r(this.modules.languageDetector), s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = r(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new w(this.services, this.options), this.translator.on("*", function(e) {
                            for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            t.emit.apply(t, [e].concat(r))
                        }), this.modules.external.forEach(function(e) {
                            e.init && e.init(t)
                        })
                    } ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(function(e) {
                        t[e] = function() {
                            var n;
                            return (n = t.store)[e].apply(n, arguments)
                        }
                    });
                    var a = function() {
                        t.changeLanguage(t.options.lng, function(e, r) {
                            t.isInitialized = !0, t.logger.log("initialized", t.options), t.emit("initialized", t.options), n(e, r)
                        })
                    };
                    return this.options.resources || !this.options.initImmediate ? a() : setTimeout(a, 0), this
                }, e.prototype.loadResources = function() {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D;
                    if (this.options.resources) e(null);
                    else {
                        if (this.language && "cimode" === this.language.toLowerCase()) return e();
                        var n = [],
                            r = function(e) {
                                e && t.services.languageUtils.toResolveHierarchy(e).forEach(function(t) {
                                    n.indexOf(t) < 0 && n.push(t)
                                })
                            };
                        if (this.language) r(this.language);
                        else this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t) {
                            return r(t)
                        });
                        this.options.preload && this.options.preload.forEach(function(t) {
                            return r(t)
                        }), this.services.backendConnector.load(n, this.options.ns, e)
                    }
                }, e.prototype.reloadResources = function(t, e) {
                    t || (t = this.languages), e || (e = this.options.ns), this.services.backendConnector.reload(t, e)
                }, e.prototype.use = function(t) {
                    return "backend" === t.type && (this.modules.backend = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "i18nFormat" === t.type && (this.modules.i18nFormat = t), "postProcessor" === t.type && b.addPostProcessor(t), "3rdParty" === t.type && this.modules.external.push(t), this
                }, e.prototype.changeLanguage = function(t, e) {
                    var n = this,
                        r = function(t) {
                            t && (n.language = t, n.languages = n.services.languageUtils.toResolveHierarchy(t), n.translator.language || n.translator.changeLanguage(t), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(t)), n.loadResources(function(r) {
                                ! function(t, r) {
                                    n.translator.changeLanguage(r), r && (n.emit("languageChanged", r), n.logger.log("languageChanged", r)), e && e(t, function() {
                                        return n.t.apply(n, arguments)
                                    })
                                }(r, t)
                            })
                        };
                    t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(r) : r(t) : r(this.services.languageDetector.detect())
                }, e.prototype.getFixedT = function(t, e) {
                    var n = this,
                        r = function t(e, r) {
                            for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) o[s - 2] = arguments[s];
                            var a = F({}, r);
                            return "object" !== (void 0 === r ? "undefined" : L(r)) && (a = n.options.overloadTranslationOptionHandler([e, r].concat(o))), a.lng = a.lng || t.lng, a.lngs = a.lngs || t.lngs, a.ns = a.ns || t.ns, n.t(e, a)
                        };
                    return "string" == typeof t ? r.lng = t : r.lngs = t, r.ns = e, r
                }, e.prototype.t = function() {
                    var t;
                    return this.translator && (t = this.translator).translate.apply(t, arguments)
                }, e.prototype.exists = function() {
                    var t;
                    return this.translator && (t = this.translator).exists.apply(t, arguments)
                }, e.prototype.setDefaultNamespace = function(t) {
                    this.options.defaultNS = t
                }, e.prototype.loadNamespaces = function(t, e) {
                    var n = this;
                    if (!this.options.ns) return e && e();
                    "string" == typeof t && (t = [t]), t.forEach(function(t) {
                        n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                    }), this.loadResources(e)
                }, e.prototype.loadLanguages = function(t, e) {
                    "string" == typeof t && (t = [t]);
                    var n = this.options.preload || [],
                        r = t.filter(function(t) {
                            return n.indexOf(t) < 0
                        });
                    if (!r.length) return e();
                    this.options.preload = n.concat(r), this.loadResources(e)
                }, e.prototype.dir = function(t) {
                    if (t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !t) return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr"
                }, e.prototype.createInstance = function() {
                    return new e(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, arguments[1])
                }, e.prototype.cloneInstance = function() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D,
                        i = F({}, this.options, n, {
                            isClone: !0
                        }),
                        o = new e(i);
                    return ["store", "services", "language"].forEach(function(e) {
                        o[e] = t[e]
                    }), o.translator = new w(o.services, o.options), o.translator.on("*", function(t) {
                        for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                        o.emit.apply(o, [t].concat(n))
                    }), o.init(i, r), o.translator.options = o.options, o
                }, e
            }(s));
            n.d(e, "changeLanguage", function() {
                return z
            }), n.d(e, "cloneInstance", function() {
                return B
            }), n.d(e, "createInstance", function() {
                return V
            }), n.d(e, "dir", function() {
                return U
            }), n.d(e, "exists", function() {
                return H
            }), n.d(e, "getFixedT", function() {
                return q
            }), n.d(e, "init", function() {
                return W
            }), n.d(e, "loadLanguages", function() {
                return G
            }), n.d(e, "loadNamespaces", function() {
                return K
            }), n.d(e, "loadResources", function() {
                return J
            }), n.d(e, "off", function() {
                return Q
            }), n.d(e, "on", function() {
                return X
            }), n.d(e, "setDefaultNamespace", function() {
                return Y
            }), n.d(e, "t", function() {
                return Z
            }), n.d(e, "use", function() {
                return tt
            });
            e.default = M;
            var z = M.changeLanguage.bind(M),
                B = M.cloneInstance.bind(M),
                V = M.createInstance.bind(M),
                U = M.dir.bind(M),
                H = M.exists.bind(M),
                q = M.getFixedT.bind(M),
                W = M.init.bind(M),
                G = M.loadLanguages.bind(M),
                K = M.loadNamespaces.bind(M),
                J = M.loadResources.bind(M),
                Q = M.off.bind(M),
                X = M.on.bind(M),
                Y = M.setDefaultNamespace.bind(M),
                Z = M.t.bind(M),
                tt = M.use.bind(M)
        },
        540: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }
    }
]);