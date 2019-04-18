(function(window, undefined) {
    "use strict";
    var LIBVERSION = "0.7.17",
        EMPTY = "",
        UNKNOWN = "?",
        FUNC_TYPE = "function",
        UNDEF_TYPE = "undefined",
        OBJ_TYPE = "object",
        STR_TYPE = "string",
        MAJOR = "major",
        MODEL = "model",
        NAME = "name",
        TYPE = "type",
        VENDOR = "vendor",
        VERSION = "version",
        ARCHITECTURE = "architecture",
        CONSOLE = "console",
        MOBILE = "mobile",
        TABLET = "tablet",
        SMARTTV = "smarttv",
        WEARABLE = "wearable",
        EMBEDDED = "embedded";
    var util = {
        extend: function(regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i])
                } else {
                    margedRegexes[i] = regexes[i]
                }
            }
            return margedRegexes
        },
        has: function(str1, str2) {
            if (typeof str1 === "string") {
                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1
            } else {
                return false
            }
        },
        lowerize: function(str) {
            return str.toLowerCase()
        },
        major: function(version) {
            return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, "").split(".")[0] : undefined
        },
        trim: function(str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
    };
    var mapper = {
        rgx: function(ua, arrays) {
            var i = 0,
                j, k, p, q, matches, match;
            while (i < arrays.length && !matches) {
                var regex = arrays[i],
                    props = arrays[i + 1];
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(ua);
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        this[q[0]] = q[1].call(this, match)
                                    } else {
                                        this[q[0]] = q[1]
                                    }
                                } else if (q.length == 3) {
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined
                                    } else {
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined
                                    }
                                } else if (q.length == 4) {
                                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined
                                }
                            } else {
                                this[q] = match ? match : undefined
                            }
                        }
                    }
                }
                i += 2
            }
        },
        str: function(str, map) {
            for (var i in map) {
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return i === UNKNOWN ? undefined : i
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return i === UNKNOWN ? undefined : i
                }
            }
            return str
        }
    };
    var maps = {
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
                    2e3: "NT 5.0",
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
    };
    var regexes = {
        browser: [
            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
            [NAME, VERSION],
            [/(opios)[\/\s]+([\w\.]+)/i],
            [
                [NAME, "Opera Mini"], VERSION
            ],
            [/\s(opr)\/([\w\.]+)/i],
            [
                [NAME, "Opera"], VERSION
            ],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i],
            [NAME, VERSION],
            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
            [
                [NAME, "IE"], VERSION
            ],
            [/(edge)\/((\d+)?[\w\.]+)/i],
            [NAME, VERSION],
            [/(yabrowser)\/([\w\.]+)/i],
            [
                [NAME, "Yandex"], VERSION
            ],
            [/(puffin)\/([\w\.]+)/i],
            [
                [NAME, "Puffin"], VERSION
            ],
            [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
            [
                [NAME, "UCBrowser"], VERSION
            ],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [
                [NAME, /_/g, " "], VERSION
            ],
            [/(micromessenger)\/([\w\.]+)/i],
            [
                [NAME, "WeChat"], VERSION
            ],
            [/(QQ)\/([\d\.]+)/i],
            [NAME, VERSION],
            [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
            [NAME, VERSION],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
            [VERSION, [NAME, "MIUI Browser"]],
            [/;fbav\/([\w\.]+);/i],
            [VERSION, [NAME, "Facebook"]],
            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
            [VERSION, [NAME, "Chrome Headless"]],
            [/\swv\).+(chrome)\/([\w\.]+)/i],
            [
                [NAME, /(.+)/, "$1 WebView"], VERSION
            ],
            [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
            [
                [NAME, /(.+(?:g|us))(.+)/, "$1 $2"], VERSION
            ],
            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
            [VERSION, [NAME, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
            [NAME, VERSION],
            [/(dolfin)\/([\w\.]+)/i],
            [
                [NAME, "Dolphin"], VERSION
            ],
            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
            [
                [NAME, "Chrome"], VERSION
            ],
            [/(coast)\/([\w\.]+)/i],
            [
                [NAME, "Opera Coast"], VERSION
            ],
            [/fxios\/([\w\.-]+)/i],
            [VERSION, [NAME, "Firefox"]],
            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
            [VERSION, [NAME, "Mobile Safari"]],
            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
            [VERSION, NAME],
            [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [
                [NAME, "GSA"], VERSION
            ],
            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
            [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]],
            [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
            [NAME, VERSION],
            [/(navigator|netscape)\/([\w\.-]+)/i],
            [
                [NAME, "Netscape"], VERSION
            ],
            [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
            [NAME, VERSION]
        ],
        cpu: [
            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
            [
                [ARCHITECTURE, "amd64"]
            ],
            [/(ia32(?=;))/i],
            [
                [ARCHITECTURE, util.lowerize]
            ],
            [/((?:i[346]|x)86)[;\)]/i],
            [
                [ARCHITECTURE, "ia32"]
            ],
            [/windows\s(ce|mobile);\sppc;/i],
            [
                [ARCHITECTURE, "arm"]
            ],
            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
            [
                [ARCHITECTURE, /ower/, "", util.lowerize]
            ],
            [/(sun4\w)[;\)]/i],
            [
                [ARCHITECTURE, "sparc"]
            ],
            [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
            [
                [ARCHITECTURE, util.lowerize]
            ]
        ],
        device: [
            [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [/applecoremedia\/[\w\.]+ \((ipad)/],
            [MODEL, [VENDOR, "Apple"],
                [TYPE, TABLET]
            ],
            [/(apple\s{0,1}tv)/i],
            [
                [MODEL, "Apple TV"],
                [VENDOR, "Apple"]
            ],
            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
            [MODEL, [VENDOR, "Amazon"],
                [TYPE, TABLET]
            ],
            [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
            [
                [MODEL, mapper.str, maps.device.amazon.model],
                [VENDOR, "Amazon"],
                [TYPE, MOBILE]
            ],
            [/\((ip[honed|\s\w*]+);.+(apple)/i],
            [MODEL, VENDOR, [TYPE, MOBILE]],
            [/\((ip[honed|\s\w*]+);/i],
            [MODEL, [VENDOR, "Apple"],
                [TYPE, MOBILE]
            ],
            [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/\(bb10;\s(\w+)/i],
            [MODEL, [VENDOR, "BlackBerry"],
                [TYPE, MOBILE]
            ],
            [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
            [MODEL, [VENDOR, "Asus"],
                [TYPE, TABLET]
            ],
            [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
            [
                [VENDOR, "Sony"],
                [MODEL, "Xperia Tablet"],
                [TYPE, TABLET]
            ],
            [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
            [MODEL, [VENDOR, "Sony"],
                [TYPE, MOBILE]
            ],
            [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
            [VENDOR, MODEL, [TYPE, CONSOLE]],
            [/android.+;\s(shield)\sbuild/i],
            [MODEL, [VENDOR, "Nvidia"],
                [TYPE, CONSOLE]
            ],
            [/(playstation\s[34portablevi]+)/i],
            [MODEL, [VENDOR, "Sony"],
                [TYPE, CONSOLE]
            ],
            [/(sprint\s(\w+))/i],
            [
                [VENDOR, mapper.str, maps.device.sprint.vendor],
                [MODEL, mapper.str, maps.device.sprint.model],
                [TYPE, MOBILE]
            ],
            [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
            [VENDOR, [MODEL, /_/g, " "],
                [TYPE, MOBILE]
            ],
            [/(nexus\s9)/i],
            [MODEL, [VENDOR, "HTC"],
                [TYPE, TABLET]
            ],
            [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
            [MODEL, [VENDOR, "Huawei"],
                [TYPE, MOBILE]
            ],
            [/(microsoft);\s(lumia[\s\w]+)/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
            [MODEL, [VENDOR, "Microsoft"],
                [TYPE, CONSOLE]
            ],
            [/(kin\.[onetw]{3})/i],
            [
                [MODEL, /\./g, " "],
                [VENDOR, "Microsoft"],
                [TYPE, MOBILE]
            ],
            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
            [MODEL, [VENDOR, "Motorola"],
                [TYPE, MOBILE]
            ],
            [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
            [MODEL, [VENDOR, "Motorola"],
                [TYPE, TABLET]
            ],
            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
            [
                [VENDOR, util.trim],
                [MODEL, util.trim],
                [TYPE, SMARTTV]
            ],
            [/hbbtv.+maple;(\d+)/i],
            [
                [MODEL, /^/, "SmartTV"],
                [VENDOR, "Samsung"],
                [TYPE, SMARTTV]
            ],
            [/\(dtv[\);].+(aquos)/i],
            [MODEL, [VENDOR, "Sharp"],
                [TYPE, SMARTTV]
            ],
            [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
            [
                [VENDOR, "Samsung"], MODEL, [TYPE, TABLET]
            ],
            [/smart-tv.+(samsung)/i],
            [VENDOR, [TYPE, SMARTTV], MODEL],
            [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
            [
                [VENDOR, "Samsung"], MODEL, [TYPE, MOBILE]
            ],
            [/sie-(\w+)*/i],
            [MODEL, [VENDOR, "Siemens"],
                [TYPE, MOBILE]
            ],
            [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
            [
                [VENDOR, "Nokia"], MODEL, [TYPE, MOBILE]
            ],
            [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
            [MODEL, [VENDOR, "Acer"],
                [TYPE, TABLET]
            ],
            [/android.+([vl]k\-?\d{3})\s+build/i],
            [MODEL, [VENDOR, "LG"],
                [TYPE, TABLET]
            ],
            [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
            [
                [VENDOR, "LG"], MODEL, [TYPE, TABLET]
            ],
            [/(lg) netcast\.tv/i],
            [VENDOR, MODEL, [TYPE, SMARTTV]],
            [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i],
            [MODEL, [VENDOR, "LG"],
                [TYPE, MOBILE]
            ],
            [/android.+(ideatab[a-z0-9\-\s]+)/i],
            [MODEL, [VENDOR, "Lenovo"],
                [TYPE, TABLET]
            ],
            [/linux;.+((jolla));/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/((pebble))app\/[\d\.]+\s/i],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [/crkey/i],
            [
                [MODEL, "Chromecast"],
                [VENDOR, "Google"]
            ],
            [/android.+;\s(glass)\s\d/i],
            [MODEL, [VENDOR, "Google"],
                [TYPE, WEARABLE]
            ],
            [/android.+;\s(pixel c)\s/i],
            [MODEL, [VENDOR, "Google"],
                [TYPE, TABLET]
            ],
            [/android.+;\s(pixel xl|pixel)\s/i],
            [MODEL, [VENDOR, "Google"],
                [TYPE, MOBILE]
            ],
            [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, "Xiaomi"],
                [TYPE, MOBILE]
            ],
            [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i],
            [
                [MODEL, /_/g, " "],
                [VENDOR, "Xiaomi"],
                [TYPE, TABLET]
            ],
            [/android.+;\s(m[1-5]\snote)\sbuild/i],
            [MODEL, [VENDOR, "Meizu"],
                [TYPE, TABLET]
            ],
            [/android.+a000(1)\s+build/i],
            [MODEL, [VENDOR, "OnePlus"],
                [TYPE, MOBILE]
            ],
            [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
            [MODEL, [VENDOR, "RCA"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],
            [MODEL, [VENDOR, "Dell"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
            [MODEL, [VENDOR, "Verizon"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
            [
                [VENDOR, "Barnes & Noble"], MODEL, [TYPE, TABLET]
            ],
            [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
            [MODEL, [VENDOR, "NuVision"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],
            [
                [VENDOR, "ZTE"], MODEL, [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
            [MODEL, [VENDOR, "Swiss"],
                [TYPE, MOBILE]
            ],
            [/android.+[;\/]\s*(zur\d{3})\s+build/i],
            [MODEL, [VENDOR, "Swiss"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
            [MODEL, [VENDOR, "Zeki"],
                [TYPE, TABLET]
            ],
            [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],
            [
                [VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(NS-?.+)\s+build/i],
            [MODEL, [VENDOR, "Insignia"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],
            [MODEL, [VENDOR, "NextBook"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
            [
                [VENDOR, "Voice"], MODEL, [TYPE, MOBILE]
            ],
            [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],
            [
                [VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]
            ],
            [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
            [MODEL, [VENDOR, "Envizen"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
            [MODEL, [VENDOR, "MachSpeed"],
                [TYPE, TABLET]
            ],
            [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/android.+[;\/]\s*TU_(1491)\s+build/i],
            [MODEL, [VENDOR, "Rotor"],
                [TYPE, TABLET]
            ],
            [/android.+(KS(.+))\s+build/i],
            [MODEL, [VENDOR, "Amazon"],
                [TYPE, TABLET]
            ],
            [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
            [
                [TYPE, util.lowerize], VENDOR, MODEL
            ],
            [/(android.+)[;\/].+build/i],
            [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
            [/windows.+\sedge\/([\w\.]+)/i],
            [VERSION, [NAME, "EdgeHTML"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
            [NAME, VERSION],
            [/rv\:([\w\.]+).*(gecko)/i],
            [VERSION, NAME]
        ],
        os: [
            [/microsoft\s(windows)\s(vista|xp)/i],
            [NAME, VERSION],
            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
            [NAME, [VERSION, mapper.str, maps.os.windows.version]],
            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
            [
                [NAME, "Windows"],
                [VERSION, mapper.str, maps.os.windows.version]
            ],
            [/\((bb)(10);/i],
            [
                [NAME, "BlackBerry"], VERSION
            ],
            [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
            [NAME, VERSION],
            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
            [
                [NAME, "Symbian"], VERSION
            ],
            [/\((series40);/i],
            [NAME],
            [/mozilla.+\(mobile;.+gecko.+firefox/i],
            [
                [NAME, "Firefox OS"], VERSION
            ],
            [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
            [NAME, VERSION],
            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
            [
                [NAME, "Chromium OS"], VERSION
            ],
            [/(sunos)\s?([\w\.]+\d)*/i],
            [
                [NAME, "Solaris"], VERSION
            ],
            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
            [NAME, VERSION],
            [/(haiku)\s(\w+)/i],
            [NAME, VERSION],
            [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
            [
                [VERSION, /_/g, "."],
                [NAME, "iOS"]
            ],
            [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
            [
                [NAME, "Mac OS"],
                [VERSION, /_/g, "."]
            ],
            [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
            [NAME, VERSION]
        ]
    };
    var UAParser = function(uastring, extensions) {
        if (typeof uastring === "object") {
            extensions = uastring;
            uastring = undefined
        }
        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult()
        }
        var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        this.getBrowser = function() {
            var browser = {
                name: undefined,
                version: undefined
            };
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser
        };
        this.getCPU = function() {
            var cpu = {
                architecture: undefined
            };
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu
        };
        this.getDevice = function() {
            var device = {
                vendor: undefined,
                model: undefined,
                type: undefined
            };
            mapper.rgx.call(device, ua, rgxmap.device);
            return device
        };
        this.getEngine = function() {
            var engine = {
                name: undefined,
                version: undefined
            };
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine
        };
        this.getOS = function() {
            var os = {
                name: undefined,
                version: undefined
            };
            mapper.rgx.call(os, ua, rgxmap.os);
            return os
        };
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        };
        this.getUA = function() {
            return ua
        };
        this.setUA = function(uastring) {
            ua = uastring;
            return this
        };
        return this
    };
    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME: NAME,
        MAJOR: MAJOR,
        VERSION: VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE: ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL: MODEL,
        VENDOR: VENDOR,
        TYPE: TYPE,
        CONSOLE: CONSOLE,
        MOBILE: MOBILE,
        SMARTTV: SMARTTV,
        TABLET: TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME: NAME,
        VERSION: VERSION
    };
    UAParser.OS = {
        NAME: NAME,
        VERSION: VERSION
    };
    if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser
        }
        exports.UAParser = UAParser
    } else {
        if (typeof define === FUNC_TYPE && define.amd) {
            define(function() {
                return UAParser
            })
        } else if (window) {
            window.UAParser = UAParser
        }
    }
})(typeof window === "object" ? window : this);
var TraceKit = {};
TraceKit.report = function() {
    var handlers = [],
        lastException = null,
        lastExceptionStack = null;

    function subscribe(handler) {
        handlers.push(handler)
    }

    function unsubscribe(handler) {
        for (var i = handlers.length - 1; i >= 0; --i) {
            if (handlers[i] === handler) {
                handlers.splice(i, 1)
            }
        }
    }

    function notifyHandlers(stack, e) {
        var exception = null;
        for (var i in handlers) {
            if (handlers.hasOwnProperty(i)) {
                try {
                    handlers[i](stack, e)
                } catch (inner) {
                    exception = inner
                }
            }
        }
        if (exception) {
            throw exception
        }
    }
    var _oldOnerrorHandler = window.onerror;
    window.onerror = function(message, url, lineNo, col, error) {
        var stack = null;
        var ex = null;
        if (error) stack = TraceKit.computeStackTrace(error);
        if (!stack) {
            if (lastExceptionStack) {
                TraceKit.computeStackTrace.augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, col, message);
                stack = lastExceptionStack;
                ex = lastException;
                lastExceptionStack = null;
                lastException = null
            } else {
                var location = {
                    url: url,
                    line: lineNo,
                    column: col
                };
                location.func = TraceKit.computeStackTrace.guessFunctionName(location.url, location.line);
                location.context = TraceKit.computeStackTrace.gatherContext(location.url, location.line);
                stack = {
                    mode: "onerror",
                    message: message,
                    stack: [location]
                }
            }
        }
        notifyHandlers(stack, ex);
        if (_oldOnerrorHandler) {
            return _oldOnerrorHandler.apply(this, arguments)
        }
        return false
    };

    function report(ex) {
        if (lastExceptionStack) {
            if (lastException === ex) {
                return
            } else {
                var s = lastExceptionStack;
                lastExceptionStack = null;
                lastException = null;
                notifyHandlers(s, ex)
            }
        }
        var stack = TraceKit.computeStackTrace(ex);
        lastExceptionStack = stack;
        lastException = ex;
        window.setTimeout(function() {
            if (lastException === ex) {
                lastExceptionStack = null;
                lastException = null;
                notifyHandlers(stack, ex)
            }
        }, stack.incomplete ? 2e3 : 0);
        throw ex
    }
    report.subscribe = subscribe;
    report.unsubscribe = unsubscribe;
    return report
}();
TraceKit.computeStackTrace = function() {
    var debug = false,
        sourceCache = {};

    function loadSource(url) {
        try {
            if (XMLHttpRequest === undefined) {
                XMLHttpRequest = function() {
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                    throw new Error("No XHR.")
                }
            }
            var request = new XMLHttpRequest;
            request.open("GET", url, false);
            request.send("");
            return request.responseText
        } catch (e) {
            return ""
        }
    }

    function getSource(url) {
        if (!sourceCache.hasOwnProperty(url)) {
            var source;
            var urlTokens = url.split("/");
            if (urlTokens.length > 2 && urlTokens[2] === document.domain) {
                source = loadSource(url)
            } else {
                source = []
            }
            sourceCache[url] = source.length ? source.split("\n") : []
        }
        return sourceCache[url]
    }

    function guessFunctionName(url, lineNo) {
        var reFunctionArgNames = /function ([^(]*)\(([^)]*)\)/,
            reGuessFunction = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
            line = "",
            maxLines = 10,
            source = getSource(url),
            m;
        if (!source.length) {
            return "?"
        }
        for (var i = 0; i < maxLines; ++i) {
            line = source[lineNo - i] + line;
            if (line !== undefined) {
                if (m = reGuessFunction.exec(line)) {
                    return m[1]
                } else if (m = reFunctionArgNames.exec(line)) {
                    return m[1]
                }
            }
        }
        return "?"
    }

    function gatherContext(url, line) {
        var source = getSource(url),
            context = {},
            hasContext = false;
        if (!source.length) {
            return null
        }
        line -= 1;
        for (var i = line - 2, j = line + 5; i < j; ++i) {
            context[i] = source[i];
            if (source[i] !== undefined) {
                hasContext = true
            }
        }
        return hasContext ? context : null
    }

    function escapeRegExp(text) {
        return text.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
    }

    function escapeCodeAsRegExpForMatchingInsideHTML(body) {
        return escapeRegExp(body).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
    }

    function findSourceInUrls(re, urls) {
        var source, m;
        for (var i = 0, j = urls.length; i < j; ++i) {
            if ((source = getSource(urls[i])).length) {
                source = source.join("\n");
                if (m = re.exec(source)) {
                    return {
                        url: urls[i],
                        line: source.substring(0, m.index).split("\n").length,
                        column: m.index - source.lastIndexOf("\n", m.index) - 1
                    }
                }
            }
        }
        return null
    }

    function findSourceInLine(fragment, url, line) {
        var source = getSource(url),
            re = new RegExp("\\b" + escapeRegExp(fragment) + "\\b"),
            m;
        line -= 1;
        if (source && source.length > line && (m = re.exec(source[line]))) {
            return m.index
        }
        return null
    }

    function findSourceByFunctionBody(func) {
        var urls = [window.location.href],
            scripts = document.getElementsByTagName("script"),
            body, code = "" + func,
            codeRE = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
            eventRE = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,
            re, parts, result;
        for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i];
            if (script.src) {
                urls.push(script.src)
            }
        }
        if (!(parts = codeRE.exec(code))) {
            re = new RegExp(escapeRegExp(code).replace(/\s+/g, "\\s+"))
        } else {
            var name = parts[1] ? "\\s+" + parts[1] : "",
                args = parts[2].split(",").join("\\s*,\\s*");
            body = escapeRegExp(parts[3]).replace(/;$/, ";?").replace(/\s+/g, "\\s+");
            re = new RegExp("function" + name + "\\s*\\(\\s*" + args + "\\s*\\)\\s*{\\s*" + body + "\\s*}")
        }
        if (result = findSourceInUrls(re, urls)) {
            return result
        }
        if (parts = eventRE.exec(code)) {
            var event = parts[1];
            body = escapeCodeAsRegExpForMatchingInsideHTML(parts[2]);
            re = new RegExp("on" + event + "=[\\'\"]\\s*" + body + "\\s*[\\'\"]", "i");
            if (result = findSourceInUrls(re, urls[0])) {
                return result
            }
            re = new RegExp(body);
            if (result = findSourceInUrls(re, urls)) {
                return result
            }
        }
        return null
    }

    function computeStackTraceFromStackProp(ex) {
        if (!ex.stack) {
            return null
        }
        var chrome = /^\s*at (?:((?:\[object object\])?\S+(?: \[as \S+\])?) )?\(?((?:file|http|https):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            gecko = /^\s*(?:(\S*)(?:\((.*?)\))?@)?((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,
            lines = ex.stack.split("\n"),
            stack = [],
            parts, element, reference = /^(.*) is undefined$/.exec(ex.message);
        for (var i = 0, j = lines.length; i < j; ++i) {
            if (parts = gecko.exec(lines[i])) {
                element = {
                    url: parts[3],
                    func: parts[1],
                    args: parts[2] ? parts[2].split(",") : "",
                    line: +parts[4],
                    column: parts[5] ? +parts[5] : null
                }
            } else if (parts = chrome.exec(lines[i])) {
                element = {
                    url: parts[2],
                    func: parts[1],
                    line: +parts[3],
                    column: parts[4] ? +parts[4] : null
                }
            } else {
                continue
            }
            if (!element.func && element.line) {
                element.func = guessFunctionName(element.url, element.line)
            }
            if (element.line) {
                element.context = gatherContext(element.url, element.line)
            }
            stack.push(element)
        }
        if (stack[0] && stack[0].line && !stack[0].column && reference) {
            stack[0].column = findSourceInLine(reference[1], stack[0].url, stack[0].line)
        }
        if (!stack.length) {
            return null
        }
        return {
            mode: "stack",
            name: ex.name,
            message: ex.message,
            stack: stack
        }
    }

    function computeStackTraceFromStacktraceProp(ex) {
        var stacktrace = ex.stacktrace;
        var testRE = / line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,
            lines = stacktrace.split("\n"),
            stack = [],
            parts;
        for (var i = 0, j = lines.length; i < j; i += 2) {
            if (parts = testRE.exec(lines[i])) {
                var element = {
                    line: +parts[1],
                    column: +parts[2],
                    func: parts[3] || parts[4],
                    args: parts[5] ? parts[5].split(",") : [],
                    url: parts[6]
                };
                if (!element.func && element.line) {
                    element.func = guessFunctionName(element.url, element.line)
                }
                if (element.line) {
                    try {
                        element.context = gatherContext(element.url, element.line)
                    } catch (exc) {}
                }
                if (!element.context) {
                    element.context = [lines[i + 1]]
                }
                stack.push(element)
            }
        }
        if (!stack.length) {
            return null
        }
        return {
            mode: "stacktrace",
            name: ex.name,
            message: ex.message,
            stack: stack
        }
    }

    function computeStackTraceFromOperaMultiLineMessage(ex) {
        var lines = ex.message.split("\n");
        if (lines.length < 4) {
            return null
        }
        var lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
            lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?)\S+)(?:: in function (\S+))?\s*$/i,
            lineRE3 = /^\s*Line (\d+) of function script\s*$/i,
            stack = [],
            scripts = document.getElementsByTagName("script"),
            inlineScriptBlocks = [],
            parts, i, len, source;
        for (i in scripts) {
            if (scripts.hasOwnProperty(i) && !scripts[i].src) {
                inlineScriptBlocks.push(scripts[i])
            }
        }
        for (i = 2, len = lines.length; i < len; i += 2) {
            var item = null;
            if (parts = lineRE1.exec(lines[i])) {
                item = {
                    url: parts[2],
                    func: parts[3],
                    line: +parts[1]
                }
            } else if (parts = lineRE2.exec(lines[i])) {
                item = {
                    url: parts[3],
                    func: parts[4]
                };
                var relativeLine = +parts[1];
                var script = inlineScriptBlocks[parts[2] - 1];
                if (script) {
                    source = getSource(item.url);
                    if (source) {
                        source = source.join("\n");
                        var pos = source.indexOf(script.innerText);
                        if (pos >= 0) {
                            item.line = relativeLine + source.substring(0, pos).split("\n").length
                        }
                    }
                }
            } else if (parts = lineRE3.exec(lines[i])) {
                var url = window.location.href.replace(/#.*$/, ""),
                    line = parts[1];
                var re = new RegExp(escapeCodeAsRegExpForMatchingInsideHTML(lines[i + 1]));
                source = findSourceInUrls(re, [url]);
                item = {
                    url: url,
                    line: source ? source.line : line,
                    func: ""
                }
            }
            if (item) {
                if (!item.func) {
                    item.func = guessFunctionName(item.url, item.line)
                }
                var context = gatherContext(item.url, item.line);
                var midline = context ? context[Math.floor(context.length / 2)] : null;
                if (context && midline.replace(/^\s*/, "") === lines[i + 1].replace(/^\s*/, "")) {
                    item.context = context
                } else {
                    item.context = [lines[i + 1]]
                }
                stack.push(item)
            }
        }
        if (!stack.length) {
            return null
        }
        return {
            mode: "multiline",
            name: ex.name,
            message: lines[0],
            stack: stack
        }
    }

    function augmentStackTraceWithInitialElement(stackInfo, url, lineNo, col, message) {
        var initial = {
            url: url,
            line: lineNo,
            column: message
        };
        if (initial.url && initial.line) {
            stackInfo.incomplete = false;
            if (!initial.func) {
                initial.func = guessFunctionName(initial.url, initial.line)
            }
            if (!initial.context) {
                initial.context = gatherContext(initial.url, initial.line)
            }
            var reference = / '([^']+)' /.exec(message);
            if (reference) {
                initial.column = findSourceInLine(reference[1], initial.url, initial.line)
            }
            if (stackInfo.stack.length > 0) {
                if (stackInfo.stack[0].url === initial.url) {
                    if (stackInfo.stack[0].line === initial.line) {
                        return false
                    } else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
                        stackInfo.stack[0].line = initial.line;
                        stackInfo.stack[0].context = initial.context;
                        return false
                    }
                }
            }
            stackInfo.stack.unshift(initial);
            stackInfo.partial = true;
            return true
        } else {
            stackInfo.incomplete = true
        }
        return false
    }

    function computeStackTraceByWalkingCallerChain(ex, depth) {
        var functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            stack = [],
            funcs = {},
            recursion = false,
            parts, item, source;
        for (var curr = arguments.callee.caller; curr && !recursion; curr = curr.caller) {
            if (curr === computeStackTrace || curr === TraceKit.report) {
                continue
            }
            item = {
                url: null,
                func: "?",
                line: null,
                column: null
            };
            if (curr.name) {
                item.func = curr.name
            } else if (parts = functionName.exec(curr.toString())) {
                item.func = parts[1]
            }
            if (source = findSourceByFunctionBody(curr)) {
                item.url = source.url;
                item.line = source.line;
                if (item.func === "?") {
                    item.func = guessFunctionName(item.url, item.line)
                }
                var reference = / '([^']+)' /.exec(ex.message || ex.description);
                if (reference) {
                    item.column = findSourceInLine(reference[1], source.url, source.line)
                }
            }
            if (funcs["" + curr]) {
                item.recursion = true
            }
            stack.push(item)
        }
        if (depth) {
            stack.splice(0, depth)
        }
        var result = {
            mode: "callers",
            name: ex.name,
            message: ex.message,
            stack: stack
        };
        augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description);
        return result
    }

    function computeStackTrace(ex, depth) {
        var stack = null;
        depth = depth === undefined ? 0 : +depth;
        try {
            stack = computeStackTraceFromStacktraceProp(ex);
            if (stack) {
                return stack
            }
        } catch (e) {
            if (debug) {
                throw e
            }
        }
        try {
            stack = computeStackTraceFromStackProp(ex);
            if (stack) {
                return stack
            }
        } catch (e) {
            if (debug) {
                throw e
            }
        }
        try {
            stack = computeStackTraceFromOperaMultiLineMessage(ex);
            if (stack) {
                return stack
            }
        } catch (e) {
            if (debug) {
                throw e
            }
        }
        try {
            stack = computeStackTraceByWalkingCallerChain(ex, depth + 1);
            if (stack) {
                return stack
            }
        } catch (e) {
            if (debug) {
                throw e
            }
        }
        return {
            mode: "failed"
        }
    }

    function computeStackTraceOfCaller(depth) {
        depth = (depth === undefined ? 0 : +depth) + 1;
        try {
            0()
        } catch (ex) {
            return computeStackTrace(ex, depth + 1)
        }
        return null
    }
    computeStackTrace.augmentStackTraceWithInitialElement = augmentStackTraceWithInitialElement;
    computeStackTrace.guessFunctionName = guessFunctionName;
    computeStackTrace.gatherContext = gatherContext;
    computeStackTrace.ofCaller = computeStackTraceOfCaller;
    return computeStackTrace
}();
TraceKit.wrap = function traceKitWrapper(func) {
    function wrapped() {
        try {
            return func.apply(this, arguments)
        } catch (e) {
            TraceKit.report(e);
            throw e
        }
    }
    return wrapped
};
(function extendToAsynchronousCallbacks() {
    var _helper = function _helper(fnName) {
        var originalFn = window[fnName];
        window[fnName] = function traceKitAsyncExtension() {
            var args = Array.prototype.slice.call(arguments, 0);
            var originalCallback = args[0];
            if (typeof originalCallback === "function") {
                args[0] = TraceKit.wrap(originalCallback)
            }
            if (originalFn.apply) {
                return originalFn.apply(this, args)
            } else if (originalFn.call) {
                return originalFn.call(this, args[0], args[1])
            } else {
                return originalFn(args[0], args[1])
            }
        }
    };
    _helper("setTimeout");
    _helper("setInterval")
})();
(function() {
    "use strict";
    var samplingRate = 50;
    if (Math.round(Math.random() * 100) > samplingRate) {
        return
    }
    TraceKit.remoteFetching = false;
    TraceKit.collectWindowErrors = true;
    TraceKit.linesOfContext = 7;
    TraceKit.report.subscribe(function(stackInfo) {
        if (!stackInfo.message) {
            return
        }
        stackInfo.referer = document.referrer;
        stackInfo.url = document.location.href;
        stackInfo.useragent = navigator.userAgent;
        if (!("UAParser" in window)) {
            return
        }
        var userAgent = new UAParser(navigator.userAgent).getResult();
        if (userAgent.browser.name !== "Chrome" && userAgent.browser.name !== "Safari" && userAgent.browser.name !== "Firefox" && userAgent.browser.name !== "Edge" && userAgent.browser.name !== "Internet Explorer" && userAgent.browser.name !== "Mobile Safari") {
            return
        }
        if (userAgent.browser.name === "Chrome" && userAgent.browser.major < 55 || userAgent.browser.name === "Firefox" && userAgent.browser.major < 45 || userAgent.browser.name === "Safari" && userAgent.browser.major < 10 || userAgent.browser.name === "Edge" && userAgent.browser.major < 10 || userAgent.browser.name === "Internet Explorer" && userAgent.browser.major < 11 || userAgent.browser.name === "Mobile Safari" && userAgent.browser.major < 9) {
            return
        }
        var img = new Image,
            src = "/log/js_error?log_data=" + encodeURIComponent(JSON.stringify(stackInfo));
        img.onload = function() {};
        img.onerror = img.onabort = function() {};
        img.src = src
    });
    window.logValidationError = function(message) {
        if (message && message instanceof Object) {
            var img = new Image,
                src = "/log/js_validation_error?log_data=" + encodeURIComponent(JSON.stringify(message));
            img.onload = function() {};
            img.onerror = img.onabort = function() {};
            img.src = src
        }
    }
})();