/*! Rakuten Ichiba Top Page Player | (c) 2016- Rakuten, Inc. */
(function() {
    /*! RVideoPF | (c) 2014- Rakuten, Inc. */
    ! function() {
        var a;
        ! function(a) {
            ! function(a) {
                var b = function() {
                    function a(a, b) {
                        "undefined" == typeof b && (b = 30), this.name = a, this.limitCount = b
                    }
                    return a.prototype.getName = function() {
                        return this.name
                    }, a.prototype.getLimitCount = function() {
                        return this.limitCount
                    }, a
                }();
                a.CacheGroup = b
            }(a.Cache || (a.Cache = {}));
            a.Cache
        }(a || (a = {}));
        var a;
        ! function(a) {
            var b = function() {
                function a(a, b, c) {
                    "undefined" == typeof a && (a = 0), "undefined" == typeof b && (b = null), "undefined" == typeof c && (c = null), this.code = a, this.message = b, this.cause = c
                }
                return a.prototype.getCode = function() {
                    return this.code
                }, a.prototype.getMessage = function() {
                    return this.message
                }, a.prototype.getCause = function() {
                    return this.cause
                }, a.prototype.toString = function() {
                    for (var a = "Exception occurred: ", b = this; null !== b;) {
                        b !== this && (a += "\n\tcaused by ");
                        var c = b.getCode(),
                            d = b.getMessage();
                        a += "[" + c + "]", null !== d && (a += " " + d), b = b.getCause()
                    }
                    return a
                }, a
            }();
            a.Exception = b
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {
                        throw new a.Exception(0, "Utility class could not be instanciated")
                    }
                    return b.ERROR = "error", b.WARNING = "warning", b.INFO = "info", b.DEBUG = "debug", b
                }();
                b.LogLevel = c
            }(a.Log || (a.Log = {}));
            a.Log
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {}
                    return c.prototype.debug = function(a, c) {
                        "undefined" == typeof c && (c = null), this.log(b.LogLevel.DEBUG, a, c)
                    }, c.prototype.info = function(a, c) {
                        "undefined" == typeof c && (c = null), this.log(b.LogLevel.INFO, a, c)
                    }, c.prototype.warning = function(a, c) {
                        "undefined" == typeof c && (c = null), this.log(b.LogLevel.WARNING, a, c)
                    }, c.prototype.error = function(a, c) {
                        "undefined" == typeof c && (c = null), this.log(b.LogLevel.ERROR, a, c)
                    }, c.prototype.log = function(a, b, c) {
                        "undefined" == typeof c && (c = null), "string" != typeof b && (c = b, b = "Exception occurred: "), this.logMessage(a, b, c)
                    }, c.prototype.logMessage = function(b, c, d) {
                        throw new a.Exception(0, "This method is abstract")
                    }, c
                }();
                b.AbstractLogger = c
            }(a.Log || (a.Log = {}));
            a.Log
        }(a || (a = {}));
        var a, b = this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            c.prototype = b.prototype, a.prototype = new c
        };
        ! function(a) {
            ! function(a) {
                var c = function(a) {
                    function c() {
                        a.apply(this, arguments)
                    }
                    return b(c, a), c.prototype.logMessage = function(a, b, c) {}, c
                }(a.AbstractLogger);
                a.EmptyLogger = c
            }(a.Log || (a.Log = {}));
            a.Log
        }(a || (a = {}));
        var a;
        ! function(a) {
            var b = function() {
                function b() {
                    throw new a.Exception(0, "Utility class could not be instanciated")
                }
                return b.prepareLibraries = function(a) {
                    a.jQuery && null === b.jQuery && (b.jQuery = a.jQuery), a.swfobject && null === b.swfobject && (b.swfobject = a.swfobject)
                }, b.getJQuery = function() {
                    return jQuery && b.prepareLibraries({
                        jQuery: jQuery
                    }), b.jQuery || jQuery || null
                }, b.getSwfobject = function() {
                    return swfobject && b.prepareLibraries({
                        swfobject: swfobject
                    }), b.swfobject || swfobject || null
                }, b.exportModules = function() {
                    var b = a;
                    return window ? window.RVideoPF ? b = a : window.RVideoPF = a : module.exports = a, b
                }, b.setStyle = function(a) {
                    if (!b.styleInitialized) {
                        var c = b.getJQuery(),
                            d = c('<style type="text/css">' + a + "</style>"),
                            e = c("head");
                        if (0 === e.length) {
                            if (!document) return;
                            document.open(), document.write("<head></head>"), document.close(), e = c("head")
                        }
                        e.append(d), b.styleInitialized = !0
                    }
                }, b.uniqueId = function() {
                    return "RVideoPF_" + (new Date).getTime() + "_" + b.uniquifier++
                }, b.setLogger = function(a) {
                    b.logger = a
                }, b.getLogger = function() {
                    return null === b.logger && (b.logger = new a.Log.EmptyLogger), b.logger
                }, b.uniquifier = 0, b.jQuery = null, b.swfobject = null, b.styleInitialized = !1, b.logger = null, b
            }();
            a.Global = b
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {
                        throw new a.Exception(0, "Utility class could not be instanciated")
                    }
                    return b.compareVersion = function(a, b) {
                        var c, d = a.split(/[._]/),
                            e = b.split(/[._]/),
                            f = Math.min(d.length, e.length);
                        for (c = 0; c < f; c++) {
                            var g = parseInt(d[c], 10),
                                h = parseInt(e[c], 10);
                            if (g < h) return -1;
                            if (g > h) return 1
                        }
                        return d.length - e.length
                    }, b.decodeJSON = function(b, c) {
                        if ("undefined" == typeof c && (c = null), "string" != typeof b) return c;
                        try {
                            return a.Global.getJQuery().parseJSON(b)
                        } catch (a) {
                            return c
                        }
                    }, b.encodeJSON = function(a) {
                        if ("undefined" != typeof JSON && null !== JSON && "undefined" != typeof JSON.stringify) return JSON.stringify(a);
                        var c = {};
                        switch (c["\b"] = "\\b", c["\f"] = "\\f", c["\t"] = "\\t", c["\r"] = "\\r", c["\n"] = "\\n", c['"'] = '\\"', c["\\"] = "\\\\", c["'"] = "\\'", typeof a) {
                            case "string":
                                return '"' + a.replace(/['"\b\f\t\r\n\\]/g, function(a) {
                                    return c[a]
                                }) + '"';
                            case "number":
                                return isNaN(a) || a == Number.POSITIVE_INFINITY || a == Number.NEGATIVE_INFINITY ? "null" : a.toString();
                            case "boolean":
                                return a.toString();
                            case "object":
                                if (null === a) return "null";
                                break;
                            default:
                                return "null"
                        }
                        if ("[object Array]" == Object.prototype.toString.apply(a, [])) {
                            var d, e = "[";
                            for (d = 0; d < a.length; d++) d > 0 && (e += ","), e += b.encodeJSON(a[d]);
                            return e += "]"
                        }
                        var f, g = !0,
                            e = "{";
                        for (f in a) g || (e += ","), e += b.encodeJSON(f) + ":" + b.encodeJSON(a[f]), g = !1;
                        return e += "}"
                    }, b
                }();
                b.StringUtil = c
            }(a.Util || (a.Util = {}));
            a.Util
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b(a) {
                        "undefined" == typeof a && (a = null), this.group = null, this.setGroup(a)
                    }
                    return b.prototype.setGroup = function(a) {
                        this.group = a
                    }, b.prototype.get = function(a, b) {
                        if ("undefined" == typeof b && (b = null), null === this.group) return b;
                        var c, d = this.getCacheData(),
                            e = (new Date).getTime() / 1e3;
                        for (c = 0; c < d.length; c++)
                            if (d[c].key == a) return d[c].expired_at < e ? b : d[c].value;
                        return b
                    }, b.prototype.set = function(b, c, d) {
                        if ("undefined" == typeof d && (d = 1800), null !== this.group) {
                            var e = (new Date).getTime() / 1e3,
                                f = {
                                    expired_at: e + d,
                                    key: b,
                                    value: c
                                },
                                g = [];
                            f.expired_at >= e && g.push(f);
                            var h, i = this.getCacheData(),
                                j = this.group.getLimitCount();
                            for (h = 0; h < i.length && g.length < j; h++) i[h].key != f.key && (i[h].expired_at < e || g.push(i[h]));
                            this.setRaw(this.group.getName(), a.Util.StringUtil.encodeJSON(g))
                        }
                    }, b.prototype.getCacheData = function() {
                        var b = this.getRaw(this.group.getName());
                        return null === b ? [] : a.Util.StringUtil.decodeJSON(b, [])
                    }, b.prototype.getRaw = function(a) {
                        return null
                    }, b.prototype.setRaw = function(a, b) {}, b
                }();
                b.AbstractCache = c
            }(a.Cache || (a.Cache = {}));
            a.Cache
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d() {
                        c.apply(this, arguments)
                    }
                    return b(d, c), d.prototype.getRaw = function(a) {
                        if (!localStorage || !localStorage.getItem) return null;
                        var b = null;
                        try {
                            b = localStorage.getItem(a)
                        } catch (a) {}
                        return b ? b : null
                    }, d.prototype.setRaw = function(b, c) {
                        if (localStorage && localStorage.setItem) {
                            a.Global.getLogger().debug("Store cache data to localStorage: [" + b + "] " + c);
                            try {
                                localStorage.setItem(b, c)
                            } catch (a) {}
                        }
                    }, d
                }(c.AbstractCache);
                c.LocalStorageCache = d
            }(a.Cache || (a.Cache = {}));
            a.Cache
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d() {
                        c.apply(this, arguments), this.memory = {}
                    }
                    return b(d, c), d.prototype.getRaw = function(a) {
                        return this.memory[a] ? this.memory[a] : null
                    }, d.prototype.setRaw = function(b, c) {
                        a.Global.getLogger().debug("Store cache data to memory: [" + b + "] " + c), this.memory[b] = c
                    }, d
                }(c.AbstractCache);
                c.MemoryCache = d
            }(a.Cache || (a.Cache = {}));
            a.Cache
        }(a || (a = {}));
        var a;
        ! function(a) {
            var b = function() {
                function a() {
                    this.osName = null, this.osVersion = null, this.browserName = null, this.browserVersion = null, this.isTabletFlag = !1, this.isMobileFlag = !1, this.isFeaturePhoneFlag = !1
                }
                return a.factory = function(b) {
                    "undefined" == typeof b && (b = null);
                    var c = new a;
                    if (null === b) {
                        if (!(window && window.navigator && window.navigator.userAgent)) return c;
                        b = window.navigator.userAgent
                    }
                    var d;
                    return (d = b.match(/iPhone|iPod|iPad/)) ? (c.osName = a.OS_IPHONE, c.isMobileFlag = !0, c.isTabletFlag = "iPad" == d[0], (d = b.match(/ OS (\d+([_.]\d+)*)/)) && (c.osVersion = d[1])) : (d = b.match(/Android( (\d+(\.\d+)*))?/)) ? (c.osName = a.OS_ANDROID, d[2] && (c.osVersion = d[2]), c.isMobileFlag = !0, c.isTabletFlag = !b.match(/Mobile/)) : (d = b.match(/Windows Phone(( OS)? (\d+(\.\d+)*))?/)) ? (c.osName = a.OS_WINDOWS_PHONE, d[3] && (c.osVersion = d[3]), c.isMobileFlag = !0, c.isTabletFlag = !!b.match(/Touch/)) : (d = b.match(/Windows( NT (\d+(\.\d+)*))?/)) ? (c.osName = a.OS_WINDOWS, d[2] && (c.osVersion = d[2])) : (d = b.match(/Macintosh(.*OS X (\d+([_.]\d+)*))?/)) ? (c.osName = a.OS_MACINTOSH, d[2] && (c.osVersion = d[2])) : (d = b.match(/DoCoMo/)) ? (c.osName = a.OS_DOCOMO, c.isMobileFlag = !0, c.isFeaturePhoneFlag = !0) : (d = b.match(/(J-PHONE|Vodafone|SoftBank)/)) ? (c.osName = a.OS_SOFTBANK, c.isMobileFlag = !0, c.isFeaturePhoneFlag = !0) : (d = b.match(/UP\.Browser/)) && (c.osName = a.OS_KDDI, c.isMobileFlag = !0, c.isFeaturePhoneFlag = !0), (d = b.match(/Edge([\/ ](\d+(\.\d+)*))?/)) ? (c.browserName = a.BROWSER_EDGE, d[2] && (c.browserVersion = d[2])) : (d = b.match(/Opera([\/ ](\d+(\.\d+)*))?/)) ? (c.browserName = a.BROWSER_OPERA, d[2] && (c.browserVersion = d[2])) : c.osName == a.OS_ANDROID && (d = b.match(/Version(\/(\d+(\.\d+)*))?/)) ? (c.browserName = a.BROWSER_ANDROID, d[2] && (c.browserVersion = d[2])) : (d = b.match(/(Chrome|CriOS)(\/(\d+(\.\d+)*))?/)) ? (c.browserName = a.BROWSER_CHROME, d[3] && (c.browserVersion = d[3])) : (d = b.match(/Firefox(\/(\d+(\.\d+)*))?/)) ? (c.browserName = a.BROWSER_FIREFOX, d[2] && (c.browserVersion = d[2])) : b.match(/(MSIE|Trident)/) ? (c.browserName = a.BROWSER_IE, (d = b.match(/(rv:|MSIE )(\d+(\.\d+)*)/)) && (c.browserVersion = d[2])) : (d = b.match(/Safari(\/(\d+(\.\d+)*))?/)) && (c.browserName = a.BROWSER_SAFARI, d[2] && (c.browserVersion = d[2])), c
                }, a.prototype.getOsName = function() {
                    return this.osName
                }, a.prototype.getOsVersion = function() {
                    return this.osVersion
                }, a.prototype.getBrowserName = function() {
                    return this.browserName
                }, a.prototype.getBrowserVersion = function() {
                    return this.browserVersion
                }, a.prototype.isMobile = function() {
                    return this.isMobileFlag
                }, a.prototype.isTablet = function() {
                    return this.isTabletFlag
                }, a.prototype.isFeaturePhone = function() {
                    return this.isFeaturePhoneFlag
                }, a.OS_IPHONE = "iPhone", a.OS_ANDROID = "Android", a.OS_WINDOWS_PHONE = "Windows Phone", a.OS_DOCOMO = "DoCoMo", a.OS_KDDI = "KDDI", a.OS_SOFTBANK = "SoftBank", a.OS_WINDOWS = "Windows", a.OS_MACINTOSH = "Macintosh", a.BROWSER_EDGE = "Edge", a.BROWSER_OPERA = "Opera", a.BROWSER_ANDROID = "AndroidBrowser", a.BROWSER_IE = "IE", a.BROWSER_FIREFOX = "Firefox", a.BROWSER_CHROME = "Chrome", a.BROWSER_SAFARI = "Safari", a
            }();
            a.ClientEnvironment = b
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                ! function(b) {
                    function c(b) {
                        if (b.jQuery && b.swfobject) {
                            a.Global.prepareLibraries({
                                jQuery: b.jQuery.noConflict(!0),
                                swfobject: b.swfobject
                            });
                            var c = a.Global.getJQuery();
                            swfobject = a.Global.getSwfobject();
                            var d = a.Input.consume(/^(?:https?:)?\/\/stream\.cms\.rakuten\.co\.jp\/gate\/play/);
                            if (null === d) return null;
                            var e = a.Validator.factory();
                            if (e.addFieldRules({
                                    w: {
                                        required: !0,
                                        digits: [],
                                        length: [3, 4]
                                    },
                                    h: {
                                        required: !0,
                                        digits: [],
                                        length: [3, 4]
                                    },
                                    mid: {
                                        required: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    shop_id: {
                                        required: !1,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    vid: {
                                        required: !1,
                                        empty: !0,
                                        digits: []
                                    },
                                    pid: {
                                        required: !1,
                                        empty: !0,
                                        digits: []
                                    },
                                    type: {
                                        required: !1,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    pt: {
                                        required: !1,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    cmid: {
                                        required: !1,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    bkt: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    cl1: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    cl2: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    cl3: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    cl4: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    did: {
                                        required: !1,
                                        empty: !0,
                                        digits: [],
                                        length: [1, 10]
                                    },
                                    sel: {
                                        required: !1,
                                        empty: !0,
                                        match: /^[#.][a-z][a-z_0-9-]*$/i
                                    }
                                }), d = e.validate(d), !e.hasError()) {
                                var f, g = d.get("sel");
                                if (null === g) {
                                    var h = a.Global.uniqueId();
                                    document.write('<div id="' + h + '"></div>'), g = "#" + h, f = function(a) {
                                        a.apply(null, [])
                                    }
                                } else f = function(a) {
                                    c(a)
                                };
                                var i = function(b) {
                                    b.resetCss({
                                        width: d.get("w"),
                                        height: d.get("h")
                                    });
                                    var e = (c("meta[name=viewport]").length > 0, swfobject.hasFlashPlayerVersion("9.0.115")),
                                        f = a.ClientEnvironment.factory(),
                                        g = f.getOsName(),
                                        h = f.getOsVersion(),
                                        i = f.isTablet(),
                                        j = f.isMobile();
                                    g == a.ClientEnvironment.OS_ANDROID && null !== h && a.Util.StringUtil.compareVersion(h, "2.3") < 0 && (e = !1);
                                    var k = parseInt(d.get("mid"), 10),
                                        l = parseInt(d.get("type", "1"), 10);
                                    if ("undefined" == typeof c(window).attr("HTMLVideoElement")) {
                                        var m = new a.Player.EmptyPlayer(b);
                                        m.loadPlugins(["TitleImageOnly"]), m.trigger(a.Player.EmptyPlayer.IMAGE_LOAD, [a.Player.TitleImageOnlyPlugin.TYPE_ICHIBA, {
                                            movieId: d.get("mid"),
                                            shopId: d.get("shop_id", "0")
                                        }])
                                    } else {
                                        var n = ["LoadingIcon"],
                                            o = {
                                                initialAutoPlay: !1,
                                                autoPlay: !1,
                                                pattern: null,
                                                controller: !0,
                                                type: l,
                                                playingEventTime: 0
                                            };
                                        if (l !== a.Player.Html5Player.PLAYER_RMS && n.push("PlayLog"), o.controller = g === a.ClientEnvironment.OS_IPHONE || g === a.ClientEnvironment.OS_ANDROID, o.controller ? n.push("TitleImageSP") : n.push("TitleImagePF", "Controller"), l === a.Player.Html5Player.PLAYER_ICHIBA) {
                                            if (!i && (g === a.ClientEnvironment.OS_ANDROID && null !== h && a.Util.StringUtil.compareVersion(h, "4.0") >= 0 || g === a.ClientEnvironment.OS_IPHONE && null !== h && a.Util.StringUtil.compareVersion(h, "8.0") >= 0)) {
                                                var p = a.Util.ABTestUtil.getABTestingPatternFromCookie("autoPlaySP");
                                                o.pattern = p.name, "undefined" != typeof p.isAutoPlay && p.isAutoPlay === !0 && n.push("AutoPlay", "Flipbook")
                                            } else if (g !== a.ClientEnvironment.OS_ANDROID && g !== a.ClientEnvironment.OS_IPHONE) {
                                                if (!i && !j) {
                                                    var p = a.Util.ABTestUtil.getABTestingPatternFromCookie("autoPlayPC");
                                                    o.pattern = p.name
                                                }
                                                n.push("AutoPlay"), o.autoPlay = !0, o.playingEventTime = 5e3
                                            }
                                            n.push("Recommend", "SiteCatalyst")
                                        } else l === a.Player.Html5Player.PLAYER_TENCHO ? n.push("Recommend") : l === a.Player.Html5Player.PLAYER_PRODUCT && (o.initialAutoPlay = !0);
                                        var q = new a.Player.Html5Player(b, o);
                                        o.controller || q.getVideoElement().setVolume(0), q.getVideoElement().setAlternativeSetting(!1), q.loadPlugins(n), q.loadMovie({
                                            movieId: k
                                        }, a.Model.Movie.findByIdForIchiba)
                                    }
                                };
                                f(function() {
                                    var a = c(g);
                                    a.each(function(a, b) {
                                        i.apply(null, [c(b)])
                                    })
                                })
                            }
                        }
                    }
                    b.initialize = c
                }(b.Ichiba || (b.Ichiba = {}));
                b.Ichiba
            }(a.Initializers || (a.Initializers = {}));
            a.Initializers
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                ! function(b) {
                    function c(b) {
                        if (b.jQuery) {
                            var c = b.jQuery,
                                d = function() {
                                    var b = this;
                                    c.extend(b, {
                                        initialize: function() {
                                            try {
                                                var b = new a.Player.IchibaTopPageGadget(c("#sc_lidAdd_superTV"), c("#supertv_player_configuration"));
                                                b.initialize()
                                            } catch (b) {
                                                a.Global.getLogger().info(b)
                                            }
                                        }
                                    })
                                },
                                e = new d;
                            e.initialize()
                        }
                    }
                    b.initialize = c
                }(b.IchibaTop || (b.IchibaTop = {}));
                b.IchibaTop
            }(a.Initializers || (a.Initializers = {}));
            a.Initializers
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                ! function(b) {
                    function c(b) {
                        if (b.jQuery && b.swfobject) {
                            a.Global.prepareLibraries({
                                jQuery: b.jQuery.noConflict(!0),
                                swfobject: b.swfobject
                            });
                            var c = a.Global.getJQuery();
                            swfobject = a.Global.getSwfobject();
                            var d = a.Input.consume(/^(?:https?:)?\/\/stream\.cms\.rakuten\.co\.jp\/gate\/play_pf/);
                            if (null === d) return null;
                            var e = a.Validator.factory();
                            if (e.addFieldRule("w", "required", !0), e.addFieldRule("w", "digits"), e.addFieldRule("w", "between", 150, 1e3), e.addFieldRule("h", "required", !0), e.addFieldRule("h", "digits"), e.addFieldRule("h", "between", 150, 1e3), e.addFieldRule("mid", "required", !1), e.addFieldRule("mid", "digits"), e.addFieldRule("mid", "length", 1, 10), e.addFieldRule("urid", "required", !1), e.addFieldRule("urid", "digits"), e.addFieldRule("urid", "length", 1, 10), e.addFieldRule("sid", "required", !0), e.addFieldRule("sid", "digits"), e.addFieldRule("sid", "length", 1, 10), e.addFieldRule("ref_id", "required", !0), e.addFieldRule("ref_id", "match", /^[a-z]+-(dev|stg|pro)-[\d]+$/i), e.addFieldRule("sel", "required", !1), e.addFieldRule("sel", "empty", !0), e.addFieldRule("sel", "match", /^#[a-z][a-z_0-9-]*$/i), e.addFieldRule("a", "required", !1), e.addFieldRule("a", "digits"), e.addFieldRule("a", "between", 0, 1), e.addFieldRule("v", "required", !1), e.addFieldRule("v", "digits"), e.addFieldRule("v", "between", 1, 2), e.addFieldRule("ctr", "required", !1), e.addFieldRule("ctr", "digits"), e.addFieldRule("ctr", "between", 0, 1), d = e.validate(d), !e.hasError() && ("2" !== d.get("v") || null !== d.get("urid"))) {
                                var f, g = d.get("sel");
                                if (null === g) {
                                    var h = a.Global.uniqueId();
                                    document.write('<div id="' + h + '"></div>'), g = "#" + h, f = function(a) {
                                        a.apply(null, [])
                                    }
                                } else f = function(a) {
                                    c(a)
                                };
                                var i = function(b) {
                                    if (b.resetCss({
                                            width: d.get("w"),
                                            height: d.get("h")
                                        }), "undefined" == typeof c(window).attr("HTMLVideoElement")) {
                                        var e = new a.Player.EmptyPlayer(b);
                                        e.loadPlugins(["TitleImageOnly"]), null !== d.get("mid") ? e.trigger(a.Player.EmptyPlayer.IMAGE_LOAD, [a.Player.TitleImageOnlyPlugin.TYPE_PF, {
                                            movieId: d.get("mid")
                                        }]) : null !== d.get("ref_id") && null !== d.get("sid") && e.trigger(a.Player.EmptyPlayer.IMAGE_LOAD, [a.Player.TitleImageOnlyPlugin.TYPE_PF_REF, {
                                            referenceId: d.get("ref_id"),
                                            serviceId: d.get("sid")
                                        }])
                                    } else {
                                        var f = a.ClientEnvironment.factory(),
                                            g = f.getOsName(),
                                            h = g === a.ClientEnvironment.OS_IPHONE || g === a.ClientEnvironment.OS_ANDROID,
                                            i = !h && "1" === d.get("a", "0"),
                                            j = ["InterfaceFunction"],
                                            k = new a.Player.Html5Player(b, {
                                                initialAutoPlay: i,
                                                controller: h
                                            });
                                        h ? (k.getVideoElement().setAlternativeSetting(!1), j.push("TitleImageSP")) : (k.getVideoElement().setVolume(0), j.push("TitleImagePF")), h || "1" !== d.get("ctr", "1") || j.push("Controller"), k.loadPlugins(j), k.loadMovie({
                                            movieId: parseInt(d.get("mid", "0")),
                                            serviceId: parseInt(d.get("sid")),
                                            userReferenceId: parseInt(d.get("urid", "0")),
                                            referenceId: d.get("ref_id"),
                                            apiType: null !== d.get("mid") ? a.Network.RVideoAPIPF.MOVIE_VIEW : a.Network.RVideoAPIPF.MOVIE_BCVIEW
                                        }, a.Model.Movie.findByIdForPlatform)
                                    }
                                };
                                f(function() {
                                    var a = c(g);
                                    a.each(function(a, b) {
                                        i.apply(null, [c(b)])
                                    })
                                })
                            }
                        }
                    }
                    b.initialize = c
                }(b.Platform || (b.Platform = {}));
                b.Platform
            }(a.Initializers || (a.Initializers = {}));
            a.Initializers
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                ! function(b) {
                    function c(b) {
                        if (b.jQuery) {
                            a.Global.prepareLibraries({
                                jQuery: b.jQuery.noConflict(!0)
                            });
                            var c = a.Global.getJQuery(),
                                d = a.Input.consume(/^(?:https?:)?\/\/stream\.cms\.rakuten\.co\.jp\/gate\/play_review/);
                            if (null === d) return null;
                            var e = a.Validator.factory();
                            if (e.addFieldRule("w", "required", !0), e.addFieldRule("w", "digits"), e.addFieldRule("w", "between", 150, 1e3), e.addFieldRule("h", "required", !0), e.addFieldRule("h", "digits"), e.addFieldRule("h", "between", 150, 1e3), e.addFieldRule("sid", "required", !0), e.addFieldRule("sid", "digits"), e.addFieldRule("sid", "length", 1, 10), e.addFieldRule("ref_id", "required", !0), e.addFieldRule("ref_id", "match", /^[a-z]+-(dev|stg|pro)-[\d]+$/i), e.addFieldRule("sel", "required", !1), e.addFieldRule("sel", "empty", !0), e.addFieldRule("sel", "match", /^#[a-z][a-z_0-9-]*$/i), e.addFieldRule("a", "required", !1), e.addFieldRule("a", "digits"), e.addFieldRule("a", "between", 0, 1), e.addFieldRule("ctr", "required", !1), e.addFieldRule("ctr", "digits"), e.addFieldRule("ctr", "between", 0, 1), d = e.validate(d), !e.hasError()) {
                                var f, g = d.get("sel");
                                if (null === g) {
                                    var h = a.Global.uniqueId();
                                    document.write('<div id="' + h + '"></div>'), g = "#" + h, f = function(a) {
                                        a.apply(null, [])
                                    }
                                } else f = function(a) {
                                    c(a)
                                };
                                var i = function(b) {
                                    if (b.resetCss({
                                            width: d.get("w"),
                                            height: d.get("h")
                                        }), "undefined" == typeof c(window).attr("HTMLVideoElement")) {
                                        var e = new a.Player.EmptyPlayer(b);
                                        e.loadPlugins(["TitleImageOnly"]), e.trigger(a.Player.EmptyPlayer.IMAGE_LOAD, [a.Player.TitleImageOnlyPlugin.TYPE_PF_REF, {
                                            referenceId: d.get("ref_id"),
                                            serviceId: d.get("sid")
                                        }])
                                    } else {
                                        var f = a.ClientEnvironment.factory(),
                                            g = f.getOsName(),
                                            h = g === a.ClientEnvironment.OS_IPHONE || g === a.ClientEnvironment.OS_ANDROID,
                                            i = !h && "1" === d.get("a", "0"),
                                            j = ["InterfaceFunction"],
                                            k = new a.Player.Html5Player(b, {
                                                initialAutoPlay: i,
                                                controller: h
                                            });
                                        h ? (k.getVideoElement().setAlternativeSetting(!1), j.push("TitleImageSP")) : (k.getVideoElement().setVolume(0), j.push("TitleImagePF")), h || "1" !== d.get("ctr", "1") || j.push("Controller"), k.loadPlugins(j), k.loadMovie({
                                            movieId: parseInt(d.get("mid", "0")),
                                            serviceId: parseInt(d.get("sid")),
                                            userReferenceId: parseInt(d.get("urid", "0")),
                                            referenceId: d.get("ref_id"),
                                            apiType: a.Network.RVideoAPIPF.MOVIE_BCVIEW
                                        }, a.Model.Movie.findByIdForPlatform)
                                    }
                                };
                                f(function() {
                                    var a = c(g);
                                    a.each(function(a, b) {
                                        i.apply(null, [c(b)])
                                    })
                                })
                            }
                        }
                    }
                    b.initialize = c
                }(b.Review || (b.Review = {}));
                b.Review
            }(a.Initializers || (a.Initializers = {}));
            a.Initializers
        }(a || (a = {}));
        var a;
        ! function(a) {
            var b = function() {
                function b() {
                    this.values = {}
                }
                return b.consume = function(a) {
                    var c = b.consumeScript(a);
                    if (null === c) return null;
                    var d = c.attr("src"),
                        e = -1,
                        f = -1;
                    if ((e = d.indexOf("?")) < 0) return new b;
                    (f = d.indexOf("#")) < 0 && (f = d.length);
                    var g = d.substring(e + 1, f);
                    return b.parseQuery(g)
                }, b.parseQuery = function(c) {
                    var d = new b,
                        e = a.Global.getJQuery();
                    return e.each(c.split("&"), function(a, b) {
                        var c = -1;
                        if (!((c = b.indexOf("=")) < 0)) {
                            var e = decodeURIComponent(b.substring(0, c)),
                                f = decodeURIComponent(b.substring(c + 1));
                            d.set(e, f)
                        }
                    }), d
                }, b.consumeScript = function(b) {
                    var c = null,
                        d = a.Global.getJQuery();
                    return d("script[src]:not([data-RVideoPF-Input-consumed])").each(function() {
                        var a = d(this),
                            e = a.attr("src");
                        if (e && e.match(b)) return c = a, !1
                    }), null === c ? c : (c.attr("data-RVideoPF-Input-consumed", 1), c)
                }, b.prototype.set = function(a, b) {
                    this.values[a] || (this.values[a] = []), this.values[a].push(b)
                }, b.prototype.get = function(a, c, d) {
                    return "undefined" == typeof c && (c = null), "undefined" == typeof d && (d = b.LAST), this.values[a] ? d === b.FIRST ? this.values[a][0] : this.values[a][this.values[a].length - 1] : c
                }, b.prototype.getArray = function(a) {
                    return this.values[a] ? this.values[a].concat() : []
                }, b.prototype.each = function(a) {
                    var b;
                    for (b in this.values)
                        if (a(this, b) === !1) break
                }, b.prototype.toString = function() {
                    var a, b = [];
                    for (a in this.values) {
                        var c;
                        for (c = 0; c < this.values[a].length; c++) {
                            var d = this.values[a][c];
                            b.push(encodeURIComponent(a) + "=" + encodeURIComponent(d))
                        }
                    }
                    return b.join("&")
                }, b.LAST = 0, b.FIRST = 1, b
            }();
            a.Input = b
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                function c(a) {
                    if ("undefined" == typeof a && (a = "play"), 0 === this.length) return this;
                    if (this.length > 1) {
                        var b;
                        for (b = 0; b < this.length; b++) c.apply(d(this[b]), [a]);
                        return this
                    }
                    if ("IMG" != this[0].nodeName.toUpperCase()) return this;
                    switch (a) {
                        case "loading":
                            this.attr("src", "data:image/gif;base64,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");
                            break;
                        case "play":
                        default:
                            this.attr("src", "data:image/png;base64,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")
                    }
                    return this
                }
                var d = a.Global.getJQuery();
                d.fn.iconize = c
            }(a.JQuery || (a.JQuery = {}));
            a.JQuery
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                function c(a) {
                    return "undefined" == typeof a && (a = null), this.css({
                        background: "none",
                        margin: "0",
                        padding: "0",
                        outline: "none",
                        border: "none",
                        font: "inherit",
                        fontSize: "inherit",
                        fontWeight: "normal",
                        verticalAlign: "baseline",
                        textAlign: "left",
                        listStyle: "none",
                        color: "inherit"
                    }), a && this.css(a), this
                }
                var d = a.Global.getJQuery();
                d.fn.resetCss = c
            }(a.JQuery || (a.JQuery = {}));
            a.JQuery
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(a) {
                var c = function(c) {
                    function d() {
                        c.apply(this, arguments)
                    }
                    return b(d, c), d.prototype.logMessage = function(b, c, d) {
                        var e = ["log"];
                        switch (b) {
                            case a.LogLevel.DEBUG:
                                e.unshift("debug");
                                break;
                            case a.LogLevel.INFO:
                                e.unshift("info");
                                break;
                            case a.LogLevel.WARNING:
                                e.unshift("warn");
                                break;
                            case a.LogLevel.ERROR:
                            default:
                                e.unshift("error")
                        }
                        null !== d && (c += "\n\tcaused by " + d);
                        var f;
                        for (f = 0; f < e.length; f++) {
                            var g = e[f];
                            if (console && console[g]) {
                                console[g](c);
                                break
                            }
                        }
                    }, d
                }(a.AbstractLogger);
                a.ConsoleLogger = c
            }(a.Log || (a.Log = {}));
            a.Log
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {
                        this.requests = {}
                    }
                    return b.prototype.call = function(c) {
                        var e = this,
                            f = a.Global.getJQuery();
                        c = f.extend({
                            success: function() {},
                            error: function() {},
                            complete: function() {}
                        }, c);
                        var g = b.serialize(c),
                            h = !1;
                        this.requests[g] || (this.requests[g] = new d, h = !0);
                        var i = this.requests[g];
                        if (i.addQueue(c), h) {
                            var j = b.CALLBACK_PREFIX + i.getId(),
                                k = f.extend({}, c, {
                                    success: function() {
                                        i.success.apply(i, arguments)
                                    },
                                    error: function() {
                                        i.error.apply(i, arguments)
                                    },
                                    complete: function() {
                                        delete e.requests[g]
                                    },
                                    jsonpCallback: j
                                });
                            a.Global.getLogger().info("Request API: " + g), f.ajax(k)
                        }
                    }, b.serialize = function(b) {
                        if (!b.url) throw new a.Exception(0, "URL must be specified");
                        var c = a.Global.getJQuery(),
                            d = b.type ? b.type : "GET";
                        return d += " " + b.url, b.data && (d += "?" + c.param(b.data)), d
                    }, b.CALLBACK_PREFIX = "RVideoPF_Network_APIClient_", b
                }();
                b.APIClient = c;
                var d = function() {
                    function a() {
                        this.queue = [], this.id = a.uniquifier++
                    }
                    return a.prototype.getId = function() {
                        return this.id
                    }, a.prototype.addQueue = function(a) {
                        this.queue.push(a)
                    }, a.prototype.success = function() {
                        for (var a = [], b = 0; b < arguments.length - 0; b++) a[b] = arguments[b + 0];
                        for (; this.queue.length > 0;) {
                            var c = this.queue.shift();
                            c.success.apply(null, a), c.complete.apply(null, a)
                        }
                    }, a.prototype.error = function() {
                        for (var a = [], b = 0; b < arguments.length - 0; b++) a[b] = arguments[b + 0];
                        for (; this.queue.length > 0;) {
                            var c = this.queue.shift();
                            c.error.apply(null, a), c.complete.apply(null, a)
                        }
                    }, a.uniquifier = 1, a
                }()
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.cache = null, this.client = new b.APIClient
                    }
                    return c.prototype.setCache = function(a) {
                        this.cache = a
                    }, c.prototype.getCache = function() {
                        return this.cache
                    }, c.prototype.callApi = function(c) {
                        var d = this,
                            e = a.Global.getJQuery();
                        c = e.extend({
                            success: function() {},
                            error: function() {},
                            complete: function() {},
                            timeout: 5e3,
                            _cache: !0
                        }, c);
                        var f = e.extend({
                            key: null,
                            readable: !0,
                            writable: !0,
                            expire: 1800
                        }, c.cache || {});
                        delete c.cache, c.cache = c._cache;
                        var g = f.key ? f.key : b.APIClient.serialize(c),
                            h = function(a) {
                                try {
                                    c.success.apply(null, arguments)
                                } catch (b) {
                                    return void c.error.apply(null, [b, a])
                                }
                                d.cache && f.writable && d.cache.set(g, a, f.expire)
                            },
                            i = function() {
                                c.error.apply(null, [])
                            },
                            j = function() {
                                c.complete.apply(null, [])
                            };
                        if (this.cache && f.readable) {
                            var k = this.cache.get(g);
                            if (null !== k) return f.writable = !1, h.apply(null, [k]), void j.apply(null, [])
                        }
                        this.client.call(e.extend({}, c, {
                            success: h,
                            error: i,
                            complete: j
                        }))
                    }, c
                }();
                b.AbstractAPI = c
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d() {
                        c.call(this);
                        var b = new a.Cache.LocalStorageCache;
                        b.setGroup(new a.Cache.CacheGroup("RVideoPF.Network.FlipbookManifest", 100)), this.setCache(b)
                    }
                    return b(d, c), d.prototype.call = function(b, c) {
                        "undefined" == typeof c && (c = {});
                        var e = a.Global.getJQuery();
                        c = e.extend({
                            url: b + d.FILENAME_MANIFEST,
                            dataType: "json"
                        }, c);
                        var f = function(b) {
                                if (null === b || "undefined" == typeof b.flipbook) throw new a.Exception(d.CODE_ERROR, "Unknown error occurred");
                                c.success && c.success.apply(null, [b])
                            },
                            g = function(b) {
                                "undefined" == typeof b && (b = null), null === b && (b = new a.Exception(d.CODE_NETWORK_ERROR, "Network error occurred")), c.error && c.error.apply(null, [b])
                            };
                        this.callApi(e.extend({}, c, {
                            success: f,
                            error: g
                        }))
                    }, d.CODE_ERROR = 3001, d.CODE_NETWORK_ERROR = 3002, d.FILENAME_MANIFEST = "flipbook.json", d
                }(c.AbstractAPI);
                c.FlipbookManifest = d
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b(a) {
                        this.idxAll = 0, this.idxFrame = 0, this.idxFlipbook = 1, this.repeat = 0, this.height = 0, this.width = 0, this.fps = 0, this.detail = null, this.isAll = !1, this.height = a.flipbook.height, this.width = a.flipbook.width, this.fps = a.flipbook.fps, this.detail = a.flipbook_detail, this.isAll = Math.abs(a.flipbook.duration - a.movie.duration) < 2 / a.flipbook.fps, this.repeat = this.getRepeat()
                    }
                    return b.load = function(c, d, e) {
                        "undefined" == typeof d && (d = {}), "undefined" == typeof e && (e = new a.Network.FlipbookManifest);
                        var f = a.Global.getJQuery();
                        d = f.extend({
                            success: function() {},
                            error: function() {},
                            complete: function() {}
                        }, d), e.call(c.getFlipbookUrl(), {
                            success: function(a) {
                                d.success.apply(null, [new b(a)])
                            },
                            error: function(a) {
                                d.error.apply(null, [a])
                            },
                            complete: d.complete,
                            cache: {
                                key: "RVideoPF.Player.FlipbookPlugin:" + c.getId()
                            }
                        })
                    }, b.prototype.next = function() {
                        this.idxAll++, --this.repeat <= 0 && (this.idxFrame++, this.idxFrame >= this.detail[this.idxFlipbook].count && (this.idxFrame = 0, this.idxFlipbook++), this.repeat = this.getRepeat())
                    }, b.prototype.getRepeat = function() {
                        return "undefined" != typeof this.detail[this.idxFlipbook] && "undefined" != typeof this.detail[this.idxFlipbook].frames[this.idxFrame + 1] ? this.detail[this.idxFlipbook].frames[this.idxFrame + 1] : 1
                    }, b.prototype.isFinishedAll = function() {
                        return this.isAll && "undefined" == typeof this.detail[this.idxFlipbook]
                    }, b.prototype.hasFlipbook = function(a) {
                        return "undefined" == typeof a && (a = this.idxFlipbook), "undefined" != typeof this.detail[a]
                    }, b.prototype.getHeight = function() {
                        return this.height
                    }, b.prototype.getWidth = function() {
                        return this.width
                    }, b.prototype.getFrameIndex = function() {
                        return this.idxFrame
                    }, b.prototype.getFlipbookIndex = function() {
                        return this.idxFlipbook
                    }, b.prototype.getInterval = function() {
                        return 1e3 / this.fps
                    }, b.prototype.getCurrentTime = function() {
                        return this.idxAll / this.fps
                    }, b
                }();
                b.Flipbook = c
            }(a.Model || (a.Model = {}));
            a.Model
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(a) {
                var b = function() {
                    function a(a, b, c) {
                        this.url = a, this.videoCodec = b, this.encodingRate = c
                    }
                    return a.prototype.getUrl = function() {
                        return this.url
                    }, a.prototype.getVideoCodec = function() {
                        return this.videoCodec
                    }, a.prototype.getEncodingRate = function() {
                        return this.encodingRate
                    }, a.prototype.distance = function(a) {
                        return "number" == typeof a ? Math.abs(this.encodingRate - a) : Math.abs(this.encodingRate - a.encodingRate)
                    }, a
                }();
                a.MovieRendition = b
            }(a.Model || (a.Model = {}));
            a.Model
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d(b) {
                        "undefined" == typeof b && (b = "BaseJsonAPI"), c.call(this), this.baseUrl = "//stream.cms.rakuten.co.jp";
                        var d = new a.Cache.LocalStorageCache;
                        d.setGroup(new a.Cache.CacheGroup("RVideoPF.Network." + b, 100)), this.setCache(d)
                    }
                    return b(d, c), d.prototype.call = function(b, c) {
                        "undefined" == typeof c && (c = {});
                        var e = a.Global.getJQuery();
                        c = e.extend({
                            url: this.baseUrl + b,
                            dataType: "jsonp"
                        }, c);
                        var f = function(b) {
                                if (!(b && b.status && b.status.group)) throw new a.Exception(d.CODE_SERVER, "Unknown error occurred");
                                if ("Success" !== b.status.group) {
                                    var e = b.status.code ? b.status.code : "9999",
                                        f = b.status.message ? b.status.message : "Unknown";
                                    switch (b.status.group) {
                                        case "Maintenance":
                                            throw new a.Exception(d.CODE_MAINTENANCE, "Under maintenance: [" + e + "] " + f);
                                        case "ClientError":
                                            throw new a.Exception(d.CODE_CLIENT, "Client error occurred: [" + e + "] " + f);
                                        case "ServerError":
                                        default:
                                            throw new a.Exception(d.CODE_SERVER, "Client error occurred: [" + e + "] " + f)
                                    }
                                }
                                c.success && c.success.apply(null, [b])
                            },
                            g = function(b) {
                                "undefined" == typeof b && (b = null), null === b && (b = new a.Exception(d.CODE_SERVER, "Unknown error occurred")), c.error && c.error.apply(null, [b])
                            };
                        this.callApi(e.extend({}, c, {
                            success: f,
                            error: g
                        }))
                    }, d.CODE_SERVER = 3001, d.CODE_CLIENT = 3002, d.CODE_MAINTENANCE = 3003, d
                }(c.AbstractAPI);
                c.BaseJsonAPI = d
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(a) {
                var c = function(a) {
                    function c() {
                        a.call(this, "RVideoAPI"), this.baseUrl = "https://stream.cms.rakuten.co.jp"
                    }
                    return b(c, a), c.getDefault = function() {
                        return c.instance
                    }, c.MOVIE_VIEW = "/gate/movie/", c.MOVIES_VIEW = "/gate/movies/", c.RECOMMEND_INDEX = "/gate/recommend/", c.PLAY_LOG = "/play/", c.instance = new c, c
                }(a.BaseJsonAPI);
                a.RVideoAPI = c
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(a) {
                var c = function(a) {
                    function c() {
                        a.call(this, "RVideoAPIPF"), this.baseUrl = "https://api.cms.rakuten.co.jp"
                    }
                    return b(c, a), c.getDefault = function() {
                        return c.instance
                    }, c.MOVIE_VIEW = "/platform/movie/info/", c.MOVIE_BCVIEW = "/platform/movie/bcinfo/", c.instance = new c, c
                }(a.BaseJsonAPI);
                a.RVideoAPIPF = c
            }(a.Network || (a.Network = {}));
            a.Network
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c(a, b, c, d, e, f, g, h) {
                        "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = null), "undefined" == typeof d && (d = null), "undefined" == typeof e && (e = []), "undefined" == typeof f && (f = null), "undefined" == typeof g && (g = null), "undefined" == typeof h && (h = !1), this.id = a, this.duration = b, this.stillUrl = c, this.thumbnailUrl = d, this.renditions = e, this.linkUrl = f, this.flipbookUrl = g, this.autoPlay = h
                    }
                    return c.findByIdForPlatform = function(d, e) {
                        "undefined" == typeof e && (e = {});
                        var f = a.Global.getJQuery();
                        e = f.extend({
                            success: function() {},
                            error: function() {},
                            complete: function() {}
                        }, e);
                        var g, h, i = !1;
                        switch (d.apiType) {
                            case a.Network.RVideoAPIPF.MOVIE_VIEW:
                                i = !d.movieId || !d.serviceId || !d.userReferenceId && 0 !== d.userReferenceId, g = {
                                    serviceId: d.serviceId,
                                    userReferenceId: d.userReferenceId,
                                    movieId: d.movieId,
                                    format: "json"
                                }, h = "RVideoPF.Model.Movie:" + d.serviceId + "_" + d.userReferenceId + "_" + d.movieId;
                                break;
                            case a.Network.RVideoAPIPF.MOVIE_BCVIEW:
                                i = !d.referenceId || !d.serviceId, g = {
                                    serviceId: d.serviceId,
                                    referenceId: d.referenceId
                                }, h = "RVideoPF.Model.Movie:" + d.serviceId + "_" + d.referenceId;
                                break;
                            default:
                                i = !0
                        }
                        if (i) return void e.error.apply(null, [new a.Exception(a.Network.RVideoAPIPF.CODE_CLIENT, "Client error occurred.")]);
                        var j = a.Network.RVideoAPIPF.getDefault();
                        j.call(d.apiType, {
                            data: g,
                            success: function(d) {
                                var f = d.movie;
                                if ("undefined" == typeof f) return void e.error.apply(null, [new a.Exception(a.Network.RVideoAPIPF.CODE_CLIENT, "Client error occurred.")]);
                                var g, h = [];
                                for (g = 0; g < f.renditions.length; g++) {
                                    var i = f.renditions[g];
                                    h.push(new b.MovieRendition(i.url, i.video_codec, i.encoding_rate))
                                }
                                0 === h.length && null !== f.url.match(/\.mp4$/) && h.push(new b.MovieRendition("undefined" == typeof f.url_ssl ? f.url : f.url_ssl, c.defaultCodec, c.defaultEncordingRate));
                                var j = f.thumbnail.replace("&amp;", "&"),
                                    k = j.replace("type=0", "type=1"),
                                    l = new c("undefined" != typeof f.movieId ? f.movieId : 0, f.duration, j, k, h);
                                e.success.apply(null, [l])
                            },
                            error: function(a) {
                                e.error.apply(null, [a])
                            },
                            complete: e.complete,
                            cache: {
                                key: h
                            }
                        })
                    }, c.findByIdForIchiba = function(d, e) {
                        "undefined" == typeof e && (e = {});
                        var f = a.Global.getJQuery();
                        if (e = f.extend({
                                success: function() {},
                                error: function() {},
                                complete: function() {}
                            }, e), !d.movieId) return void e.error.apply(null, [new a.Exception(a.Network.RVideoAPIPF.CODE_CLIENT, "Client error occurred.")]);
                        var g = d.movieId,
                            h = a.Network.RVideoAPI.getDefault();
                        h.call(a.Network.RVideoAPI.MOVIE_VIEW, {
                            data: {
                                movie_id: g
                            },
                            success: function(a) {
                                var d, f = a.movie,
                                    g = [];
                                for (d = 0; d < f.renditions.length; d++) {
                                    var h = f.renditions[d];
                                    g.push(new b.MovieRendition(h.url, h.video_codec, h.encoding_rate))
                                }
                                var i = new c(f.movie_id, f.duration, f.still_url, f.thumbnail_url, g, null, f.flipbook_url, 1 === f.auto_play_flg);
                                e.success.apply(null, [i])
                            },
                            error: function(a) {
                                e.error.apply(null, [a])
                            },
                            complete: e.complete,
                            cache: {
                                key: "RVideoPF.Model.Movie:" + g
                            }
                        })
                    }, c.findByIdsForIchibaTop = function(c, d) {
                        "undefined" == typeof d && (d = {});
                        var e = a.Global.getJQuery();
                        if (d = e.extend({
                                success: function() {},
                                error: function() {},
                                complete: function() {}
                            }, d), !c.movieId) return void d.error.apply(null, [new a.Exception(a.Network.RVideoAPIPF.CODE_CLIENT, "Client error occurred.")]);
                        var f = c.movieId,
                            g = f.join("."),
                            h = a.Network.RVideoAPI.getDefault();
                        h.call(a.Network.RVideoAPI.MOVIES_VIEW, {
                            data: {
                                movie_id: f,
                                format: "json"
                            },
                            success: function(c) {
                                var e = [],
                                    f = c.movies;
                                for (var g in f) {
                                    var h = f[g],
                                        i = [];
                                    h.renditions.forEach(function(a) {
                                        i.push(new b.MovieRendition(a.url, a.video_codec, a.encoding_rate))
                                    });
                                    var j = new a.Model.Movie(h.movie_id, h.duration, h.still_url, h.thumbnail_url, i, null, null, !0);
                                    j.keepRenditionNearBy(0, "H264"), e.push(j)
                                }
                                d.success.apply(null, [e])
                            },
                            error: function(a) {
                                d.error.apply(null, [a])
                            },
                            complete: d.complete,
                            cache: {
                                key: "RVideoPF.Model.Movie:" + g
                            }
                        })
                    }, c.prototype.getId = function() {
                        return this.id
                    }, c.prototype.getDuration = function() {
                        return this.duration
                    }, c.prototype.getStillUrl = function() {
                        return this.stillUrl
                    }, c.prototype.getThumbnailUrl = function() {
                        return this.thumbnailUrl
                    }, c.prototype.getRenditions = function() {
                        return this.renditions
                    }, c.prototype.getLinkUrl = function() {
                        return this.linkUrl
                    }, c.prototype.setLinkUrl = function(a) {
                        this.linkUrl = a
                    }, c.prototype.getFlipbookUrl = function() {
                        return this.flipbookUrl
                    }, c.prototype.getAutoPlay = function() {
                        return this.autoPlay
                    }, c.prototype.getRenditionNearBy = function(a, b) {
                        "undefined" == typeof b && (b = null);
                        var c;
                        "number" == typeof a ? c = a : (c = a.getEncodingRate(), b = a.getVideoCodec());
                        var d = null,
                            e = 0;
                        for (e = 0; e < this.renditions.length; e++) null !== b && this.renditions[e].getVideoCodec() != b || (!d || this.renditions[e].distance(c) < d.distance(c)) && (d = this.renditions[e]);
                        return d
                    }, c.prototype.keepRenditionNearBy = function(a, b) {
                        "undefined" == typeof b && (b = null);
                        var c = this.getRenditionNearBy(a, b);
                        this.renditions = [c]
                    }, c.defaultEncordingRate = 274e3, c.defaultCodec = "H264", c
                }();
                b.Movie = c
            }(a.Model || (a.Model = {}));
            a.Model
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.instanceId = 0, this.eventDispatcher = null, this.instanceId = b.Html5Player.uniquifier++;
                        var c = a.Global.getJQuery();
                        this.eventDispatcher = c("<div>")
                    }
                    return c.prototype.getInstanceId = function() {
                        return this.instanceId
                    }, c.prototype.getContainer = function() {
                        return this.container
                    }, c.prototype.loadPlugins = function(a) {
                        var b;
                        for (b = 0; b < a.length; b++) this.loadPlugin(a[b])
                    }, c.prototype.bind = function(a, b) {
                        this.eventDispatcher.bind(a, b)
                    }, c.prototype.unbind = function(a, b) {
                        "undefined" == typeof a && (a = null), "undefined" == typeof b && (b = null), null !== b ? this.eventDispatcher.unbind(a, b) : null !== a ? this.eventDispatcher.unbind(a) : this.eventDispatcher.unbind()
                    }, c.prototype.trigger = function(b, c) {
                        "undefined" == typeof c && (c = []), a.Global.getLogger().info("Trigger event: " + this + " " + b);
                        var d = a.Global.getJQuery(),
                            e = new d.Event(b);
                        this.eventDispatcher.trigger(e, c), e.isDefaultPrevented() || this.handleDefaultEvent(e, c)
                    }, c.prototype.handleDefaultEvent = function(a, b) {}, c.prototype.loadPlugin = function(b) {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.overlay = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.getMovie = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.getVideoElement = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.getCurrentTime = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.setAutoPlay = function(b) {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.reset = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.play = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.pause = function(b) {
                        throw "undefined" == typeof b && (b = !1), new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.resume = function(b) {
                        throw "undefined" == typeof b && (b = !1), new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.stop = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.dispose = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.setTestPattern = function(b) {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.getTestPattern = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.prototype.getPlayerType = function() {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, c.uniquifier = 1, c.MOVIE_LOADING = "movieLoading", c.MOVIE_LOADED = "movieLoaded", c.MOVIE_PREPARING = "moviePreparing", c.MOVIE_PREPARED = "moviePrepared", c.MOVIE_PLAYED = "moviePlayed", c.MOVIE_PLAYING = "moviePlaying", c.MOVIE_PAUSED = "moviePaused", c.MOVIE_RESUMED = "movieResumed", c.MOVIE_COMPLETED = "movieCompleted", c.MOVIE_SEEKING = "movieSeeking", c.MOVIE_SEEKED = "movieSeeked", c.MOVIE_TIMEUPDATE = "timeUpdate", c.PLAYER_DISPOSED = "playerDisposed", c.AUTOPLAY_OFF = "autoPlayOff", c.MOVIE_MUTED = "movieMuted", c.ERROR = "error", c
                }();
                b.AbstractPlayer = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d(b, d) {
                        c.call(this);
                        a.Global.getJQuery();
                        this.container = b, this.flashVars = d
                    }
                    return b(d, c), d.prototype.loadPlugin = function(b) {
                        var c = b + "Plugin";
                        if (a.Player[c]) {
                            var d = a.Player[c],
                                e = new d;
                            e.setPlayer && e.setPlayer(this)
                        }
                    }, d.prototype.toString = function() {
                        return "[FlashPlayer (#" + this.getInstanceId() + ")]"
                    }, d
                }(c.AbstractPlayer);
                c.BaseFlashPlayer = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e() {
                        d.apply(this, arguments), this.flashElement = null
                    }
                    return b(e, d), e.prototype.getFlashElement = function() {
                        var a = null,
                            b = this.container.find("embed");
                        if (1 === b.length && "function" == typeof b[0].play_video && "function" == typeof b[0].pause_video) a = b[0];
                        else {
                            var c = this.container.find("object");
                            1 === c.length && "function" == typeof c[0].play_video && "function" == typeof c[0].pause_video && (a = c[0])
                        }
                        return a
                    }, e.prototype.loadMovie = function(b) {
                        var d = this,
                            e = new a.Input,
                            f = 0,
                            g = 0;
                        this.flashVars.each(function(a, b) {
                            var c = a.get(b, "");
                            if (c) switch (b) {
                                case "w":
                                    f = parseInt(c, 10);
                                    break;
                                case "h":
                                    g = parseInt(c, 10);
                                    break;
                                case "sel":
                                    break;
                                case "mid":
                                    break;
                                default:
                                    e.set(b, c)
                            }
                        }), e.set("mid", b.toString()), this.container.html('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" width="' + f + '" height="' + g + '" id="RVideoPF-Player-FlashPlayer-' + this.getInstanceId() + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="https://stream.cms.rakuten.co.jp/swf/BRPlayer.swf?1" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="flashVars" value="' + e + '" /><embed src="https://stream.cms.rakuten.co.jp/swf/BRPlayer.swf?1" flashVars="' + e + '" quality="high" bgcolor="#000000" width="' + f + '" height="' + g + '" name="BRPlayer" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'), this.bind(c.AutoPlayPlugin.EVENT_PLAYED, function(a) {
                            null === d.flashElement && (d.flashElement = d.getFlashElement()), null !== d.flashElement && d.flashElement.play_video()
                        }), this.bind(c.AutoPlayPlugin.EVENT_PAUSED, function(a) {
                            null === d.flashElement && (d.flashElement = d.getFlashElement()), null !== d.flashElement && d.flashElement.pause_video()
                        })
                    }, e
                }(c.BaseFlashPlayer);
                c.FlashPlayer = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.isFocused = !0
                    }
                    return c.prototype.setPlayer = function(c) {
                        var d = this,
                            e = a.Global.getJQuery();
                        this.player = c;
                        var f = this.player.getContainer(),
                            g = function() {
                                var a = d.judgeVisibility(f) ? "play" : "pause";
                                d.controlVideo(a)
                            },
                            h = function() {
                                d.isFocused = !0;
                                var a = d.judgeVisibility(f) ? "play" : null;
                                d.controlVideo(a)
                            },
                            i = function() {
                                d.isFocused = !1;
                                var a = d.judgeVisibility(f) ? "pause" : null;
                                d.controlVideo(a)
                            },
                            j = function() {
                                d.isFocused = "visible" === document.visibilityState;
                                var a = d.judgeVisibility(f) ? d.isFocused ? "play" : "pause" : null;
                                d.controlVideo(a)
                            };
                        this.player.bind(b.AbstractPlayer.MOVIE_LOADED, g);
                        var k = [b.FlipbookPlugin.EVENT_HIDDEN, b.AbstractPlayer.MOVIE_COMPLETED, b.AbstractPlayer.PLAYER_DISPOSED, b.AbstractPlayer.AUTOPLAY_OFF].join(" ");
                        this.player.bind(k, function() {
                            e(window).unbind("scroll", g), e(window).unbind("focus", h), e(window).unbind("blur", i)
                        }), e(window).bind("scroll", g);
                        var l = a.ClientEnvironment.factory(),
                            m = l.getBrowserName();
                        if (m === a.ClientEnvironment.BROWSER_FIREFOX || m === a.ClientEnvironment.BROWSER_CHROME || m === a.ClientEnvironment.BROWSER_SAFARI) {
                            e(window).bind("focus", h), e(window).bind("blur", i);
                            var n = "";
                            "undefined" != typeof document.hidden ? n = "visibilitychange" : "undefined" != typeof document.msHidden && (n = "msvisibilitychange"), document.addEventListener && "" !== n && (document.addEventListener(n, j), this.player.bind(k, function() {
                                document.removeEventListener(n, j)
                            })), this.player.bind(b.FlipbookPlugin.EVENT_PREPARED, function() {
                                var a = d.isFocused && d.judgeVisibility(f) && "visible" === document.visibilityState ? "play" : null;
                                d.controlVideo(a)
                            })
                        }
                    }, c.prototype.judgeVisibility = function(b) {
                        var c, d, e, f, g = a.Global.getJQuery();
                        return "undefined" == typeof window.innerHeight ? (c = Math.max(document.body.scrollTop, g(window).scrollTop()), d = c + document.documentElement.offsetHeight, e = b.offset().top + document.body.scrollTop, f = e + b.height()) : (c = g(window).scrollTop(), d = c + window.innerHeight, e = b.offset().top, f = e + b.height()), f >= c && e <= d && f <= d && e >= c
                    }, c.prototype.controlVideo = function(a) {
                        switch (a) {
                            case "play":
                                this.player.trigger(c.EVENT_PLAYED);
                                break;
                            case "pause":
                                this.player.trigger(c.EVENT_PAUSED)
                        }
                    }, c.EVENT_PLAYED = "autoplaypluginPlayed", c.EVENT_PAUSED = "autoplaypluginPaused", c
                }();
                b.AutoPlayPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {
                        this.imageContainer = null, this.useExtendedImage = !1, this.timerId = 0, this.delay = 100
                    }
                    return b.prototype.setPlayer = function(b) {
                        throw new a.Exception(0, "This function must be implemented in subclass")
                    }, b.prototype.load = function(c) {
                        var d = this,
                            e = c.getStillUrl(),
                            f = this.container.find(".RVideoPF-Player-TitleImagePlugin-Image").hide();
                        return null === e ? void f.trigger(b.IMAGE_LOADED) : (f.attr("src", e), void this.waitToLoad(f, function() {
                            var c = f.attr("src").replace(/^http[s]?:/, ""),
                                g = e.replace(/^http[s]?:/, "");
                            c === g && (a.Global.getLogger().debug("Title image has been loaded: " + e), f.show(), d.resize(f), f.stop().hide().fadeIn("fast"), f.trigger(b.IMAGE_LOADED))
                        }))
                    }, b.prototype.show = function() {
                        var b = this;
                        0 !== this.timerId && clearTimeout(this.timerId), a.Global.getLogger().debug("Title image will be shown"), this.timerId = setTimeout(function() {
                            b.timerId = 0, b.show0()
                        }, this.delay)
                    }, b.prototype.hide = function(b) {
                        "undefined" == typeof b && (b = !1), 0 !== this.timerId && clearTimeout(this.timerId), this.timerId = 0, b && null !== this.imageContainer && this.imageContainer.hide(), this.targetContainer.hide(), a.Global.getLogger().debug("Title image has been hidden")
                    }, b.prototype.show0 = function(a) {
                        "undefined" == typeof a && (a = !1), a && null !== this.imageContainer && this.imageContainer.show(), 0 !== this.timerId && clearTimeout(this.timerId), this.targetContainer.show()
                    }, b.prototype.waitToLoad = function(a, b) {
                        var c = this,
                            d = (a.width(), a.height(), 3),
                            e = 0,
                            f = 500,
                            g = function() {
                                if (null === b) return !0;
                                var f = a.is(":visible");
                                a.show(), f || a.hide();
                                var g = a[0];
                                if (g.complete && ("undefined" == typeof g.naturalWidth || g.naturalWidth > 0)) null !== b && b.apply(c, [a]), b = null;
                                else if (d-- > 0) return !1;
                                return 0 !== e && clearInterval(e), e = 0, !0
                            };
                        g() || (e = setInterval(g, f), a.load(g))
                    }, b.prototype.resize = function(a, b, c) {
                        "undefined" == typeof b && (b = this.container.width()), "undefined" == typeof c && (c = this.container.height()), a.css({
                            width: "auto",
                            height: "auto"
                        });
                        var d = a.width(),
                            e = a.height();
                        a[0].naturalWidth && (d = a[0].naturalWidth, e = a[0].naturalHeight);
                        var f;
                        f = this.useExtendedImage ? Math.min(b / d, c / e) : Math.min(Math.min(d, b) / d, Math.min(e, c) / e), a.width(f * d), a.height(f * e)
                    }, b.ICON_LOADED = "iconLoaded", b.IMAGE_LOADED = "imageLoaded", b
                }();
                b.BaseTitleImagePlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b(b) {
                        var c = this;
                        this.videoElement = null, this.env = null, this.target = null, this.alternative = null, this.displayAlternative = !0, this.videoElement = b, this.env = a.ClientEnvironment.factory();
                        var d = a.Global.getJQuery();
                        this.target = d(this.videoElement), this.alternative = d("<div>").addClass(this.target.attr("class")), this.target.after(this.alternative), this.alternative.click(function() {
                            c.play()
                        }), this.unbind(), this.deactivate()
                    }
                    return b.prototype.bind = function(b, c) {
                        var d = a.Global.getJQuery();
                        return d(this.videoElement).bind(b, c), this
                    }, b.prototype.setAlternativeSetting = function(a) {
                        this.displayAlternative = a
                    }, b.prototype.unbind = function() {
                        var b = this,
                            c = a.Global.getJQuery(),
                            d = "ended";
                        return this.env.getOsName() === a.ClientEnvironment.OS_IPHONE && this.displayAlternative && (d += " pause"), c(this.videoElement).unbind().bind(d, function() {
                            b.deactivate()
                        }), this
                    }, b.prototype.empty = function() {
                        var b = a.Global.getJQuery();
                        return b(this.videoElement).empty(), this
                    }, b.prototype.addSource = function(b, c) {
                        var d = a.Global.getJQuery();
                        return d(this.videoElement).append(d("<source>").attr({
                            type: b,
                            src: c
                        })), this
                    }, b.prototype.addDummySource = function() {
                        var b = a.Global.getJQuery();
                        return b(this.videoElement).append(b("<source>").attr({
                            src: ""
                        })), this
                    }, b.prototype.closeSocket = function() {
                        this.pause(), this.empty(), this.addDummySource(), this.load()
                    }, b.prototype.mute = function() {
                        this.videoElement.muted = !0, this.setVolume(0)
                    }, b.prototype.canPlayType = function(a) {
                        return !(!this.videoElement.canPlayType || !this.videoElement.canPlayType(a).replace(/no/, ""))
                    }, b.prototype.isPaused = function() {
                        return "undefined" == typeof this.videoElement.paused || this.videoElement.paused
                    }, b.prototype.haveBeenPlayed = function() {
                        return "undefined" == typeof this.videoElement.played || "undefined" == typeof this.videoElement.played.length || this.videoElement.played.length > 0
                    }, b.prototype.isEnded = function() {
                        return "undefined" == typeof this.videoElement.ended || this.videoElement.ended
                    }, b.prototype.getCurrentTime = function() {
                        return "undefined" == typeof this.videoElement.currentTime ? 0 : this.videoElement.currentTime
                    }, b.prototype.getDuration = function() {
                        return "undefined" == typeof this.videoElement.duration ? 0 : this.videoElement.duration
                    }, b.prototype.getVolume = function() {
                        return "undefined" == typeof this.videoElement.volume ? 0 : this.videoElement.volume
                    }, b.prototype.isSeekable = function(a) {
                        if ("undefined" == typeof this.videoElement.seekable) return !1;
                        var b;
                        for (b = 0; b < this.videoElement.seekable.length; b++) {
                            var c = this.videoElement.seekable.start(b),
                                d = this.videoElement.seekable.end(b);
                            if (c <= a && a <= d) return !0
                        }
                        return !1
                    }, b.prototype.getVideoWidth = function() {
                        return this.videoElement.videoWidth
                    }, b.prototype.getVideoHeight = function() {
                        return this.videoElement.videoHeight
                    }, b.prototype.seek = function(a) {
                        "undefined" != typeof this.videoElement.currentTime && (this.videoElement.currentTime = a)
                    }, b.prototype.setVolume = function(a) {
                        "undefined" != typeof this.videoElement.volume && (this.videoElement.volume = a, a > 0 && (this.videoElement.muted = !1))
                    }, b.prototype.load = function() {
                        "undefined" != typeof this.videoElement.load && this.videoElement.load()
                    }, b.prototype.play = function() {
                        "undefined" != typeof this.videoElement.play && (this.activate(), this.videoElement.play())
                    }, b.prototype.pause = function() {
                        "undefined" != typeof this.videoElement.pause && (this.activate(), this.videoElement.pause())
                    }, b.prototype.show = function() {
                        var b = a.Global.getJQuery();
                        b(this.videoElement).show()
                    }, b.prototype.hide = function() {
                        var b = a.Global.getJQuery();
                        b(this.videoElement).hide()
                    }, b.prototype.activate = function() {
                        this.alternative.hide(), this.target.css({
                            width: "100%",
                            height: "100%"
                        })
                    }, b.prototype.deactivate = function() {
                        this.alternative.show(), this.target.css({
                            width: 1,
                            height: 1
                        })
                    }, b
                }();
                b.VideoElementWrapper = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.isVolumeClicking = !1, this.isStarted = !1, this.marginProgress = 78, this.marginFrame = 4
                    }
                    return c.prototype.setPlayer = function(c) {
                        var d = this;
                        a.Global.getLogger().debug("ControllerPlugin has been loaded: " + c), this.container = c.overlay().html('<div class="RVideoPF-Player-ControllerPlugin" style="visibility: hidden"><div class="progress"><div class="whole-bar"></div><div class="progress-bar" style="width: 0px;"></div></div><div class="control"><div class="play-pause play"><span class="play-button"></span><span class="pause-button"></span></div><div class="volume"><div class="volume-holder"><div class="volume-bar-holder"><div class="volume-bar"><div class="volume-button-holder"><div class="volume-button"></div></div></div><div class="volume-stripe"></div><div class="volume-stripe-dark"></div></div></div><div class="volume-icon v-change-0"><span></span></div></div>').bind("contextmenu", function() {
                            return !1
                        });
                        var e = a.ClientEnvironment.factory();
                        e.getBrowserName() === a.ClientEnvironment.BROWSER_IE && this.container.css({
                            "background-color": "rgba(0, 0, 0, 0)"
                        }), this.containerPlugin = this.container.find(".RVideoPF-Player-ControllerPlugin"), this.volumeBarHolder = this.container.find(".volume-bar-holder"), this.volumeHolder = this.container.find(".volume-holder"), this.volumeIcon = this.container.find(".volume-icon"), this.progress = this.container.find(".progress"), this.player = c, this.videoElement = c.getVideoElement(), this.volume = this.videoElement.getVolume(), this.storedVolume = 1, this.updateVolume();
                        var f = function(a) {
                                d.updateProgressBar()
                            },
                            g = function(a) {
                                d.updateProgress(a)
                            },
                            h = function(a) {
                                d.changePlayMode()
                            },
                            i = function(a) {
                                d.controlingVolume(a)
                            },
                            j = function(a) {
                                d.stopVolumeChange()
                            },
                            k = function(a) {
                                d.controlVolume(a)
                            },
                            l = function(a) {
                                d.changeVolumeMode()
                            },
                            m = function(a) {
                                d.changeVolumeMode(!0)
                            },
                            n = function(a) {
                                d.resetProgress()
                            },
                            o = function(a) {
                                d.showController()
                            },
                            p = function(a) {
                                d.containerPlugin.stop(!0, !1).animate({
                                    opacity: "0"
                                }, {
                                    duration: 500
                                })
                            },
                            q = function(a) {
                                d.volumeHolder.fadeIn(100)
                            },
                            r = function(a) {
                                d.volumeHolder.stop(!0, !1).fadeOut(100)
                            },
                            s = function(a) {
                                d.clickTitleImagePlugin(a)
                            },
                            t = function(a) {
                                d.container.find(".play-pause").addClass("play").removeClass("pause")
                            },
                            u = function(a) {
                                d.isStarted = !0, d.container.find(".play-pause").addClass("pause").removeClass("play")
                            };
                        this.container.click(s), this.container.hover(o, p), c.bind(b.AbstractPlayer.MOVIE_TIMEUPDATE, f), c.bind(b.AbstractPlayer.MOVIE_MUTED, m), c.bind(b.AbstractPlayer.MOVIE_COMPLETED, n), c.bind(b.AbstractPlayer.MOVIE_COMPLETED, t), c.bind(b.AbstractPlayer.MOVIE_PAUSED, t), c.bind(b.AbstractPlayer.MOVIE_PLAYED, u), c.bind(b.AbstractPlayer.MOVIE_RESUMED, u), this.container.find(".play-pause").bind("click", h), this.progress.bind("click", g), this.container.find(".volume").hover(q, r), this.container.find(".volume-icon").bind("mousedown", l), this.container.find(".volume-bar-holder").bind("mousedown", k), this.container.bind("mousemove", i), this.container.bind("mouseup", j)
                    }, c.prototype.resetProgress = function() {
                        this.isStarted = !1, this.containerPlugin.css("visibility", "hidden"), this.containerPlugin.stop(!0, !1).css("opacity", 0), this.updateProgressBar(0)
                    }, c.prototype.showController = function() {
                        this.isStarted && (this.containerPlugin.css("visibility", "visible"), this.containerPlugin.stop(!0, !1).animate({
                            opacity: ".9"
                        }, {
                            duration: 500
                        }))
                    }, c.prototype.stopVolumeChange = function() {
                        this.volume > 0 && (this.storedVolume = this.volume), this.isVolumeClicking = !1
                    }, c.prototype.updateProgress = function(a) {
                        var b = this.container.find(".whole-bar").width() - this.marginFrame,
                            c = this.progress.offset().left + this.marginProgress,
                            d = (a.pageX - c) / b,
                            e = this.videoElement.getDuration() * Math.max(0, Math.min(1, d));
                        this.videoElement.seek(e), this.updateProgressBar()
                    }, c.prototype.clickTitleImagePlugin = function(a) {
                        var b = a.target,
                            c = this.container.parent().find(".RVideoPF-Player-TitleImagePlugin");
                        b.className === this.container.attr("class") && 1 === c.length && (this.containerPlugin.css("visibility", "visible"), this.containerPlugin.stop(!0, !1).css("opacity", .9), c.click())
                    }, c.prototype.controlVolume = function(a) {
                        this.isVolumeClicking = !0;
                        var b = this.volumeBarHolder.height() - (a.pageY - this.volumeBarHolder.offset().top);
                        return b < 0 || b > this.volumeBarHolder.height() ? void(this.isVolumeClicking = !1) : (this.volume = Math.max(0, Math.min(1, b / this.volumeBarHolder.height())), void this.updateVolume())
                    }, c.prototype.updateVolume = function() {
                        this.volumeIcon.removeClass().addClass("volume-icon v-change-" + Math.ceil(4 * this.volume));
                        var a = this.container.find(".volume-button"),
                            b = this.volume * this.volumeBarHolder.height();
                        this.container.find(".volume-bar").css({
                            height: b - this.marginFrame + "px"
                        }), a.css({
                            top: b + a.height() + "px"
                        }), this.videoElement.setVolume(this.volume)
                    }, c.prototype.controlingVolume = function(a) {
                        if (this.isVolumeClicking === !0) {
                            if ("none" === this.volumeHolder.css("display")) return void(this.isVolumeClicking = !1);
                            this.volume = Math.max(0, Math.min(1, (this.volumeBarHolder.height() - (a.pageY - this.volumeBarHolder.offset().top)) / this.volumeBarHolder.height())), this.updateVolume()
                        }
                    }, c.prototype.changeVolumeMode = function(a) {
                        "undefined" == typeof a && (a = !1), this.volume > 0 ? (this.storedVolume = this.volume, this.volume = 0) : a || (this.volume = this.storedVolume), this.updateVolume()
                    }, c.prototype.changePlayMode = function() {
                        this.videoElement.getCurrentTime() > 0 && this.videoElement.isPaused() === !1 && this.videoElement.isEnded() === !1 ? this.player.pause() : this.player.resume()
                    }, c.prototype.updateProgressBar = function(a) {
                        "undefined" == typeof a && (a = null);
                        var b = this.container.find(".whole-bar").width() - this.marginFrame,
                            c = this.videoElement.getDuration(),
                            d = null !== a ? a : this.videoElement.getCurrentTime(),
                            e = d / c * b;
                        this.container.find(".progress-bar").css({
                            width: e + "px"
                        })
                    }, c
                }();
                b.ControllerPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e(a) {
                        d.call(this), this.movie = null, this.container = a, this.container.html('<div class="RVideoPF-Player-Html5Player"></div>')
                    }
                    return b(e, d), e.prototype.loadPlugin = function(b) {
                        var d = b + "Plugin";
                        if (!a.Player[d]) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_PLUGIN_NOT_FOUND, "Plugin not found: " + b]);
                        var f = a.Player[d],
                            g = new f;
                        return g.setPlayer ? void g.setPlayer(this) : void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_PLUGIN_NOT_FOUND, "Plugin not found: " + b])
                    }, e.prototype.overlay = function() {
                        var b = a.Global.getJQuery();
                        return b('<div class="RVideoPF-Player-Html5Player-Overlay"></div>').appendTo(this.container.find(".RVideoPF-Player-Html5Player"))
                    }, e.CODE_PLUGIN_NOT_FOUND = 2006, e.IMAGE_LOAD = "imageLoad", e
                }(c.AbstractPlayer);
                c.EmptyPlayer = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(c) {
                    function d() {
                        c.apply(this, arguments)
                    }
                    return b(d, c), d.prototype.loadMovie = function(b) {
                        var c = new a.Input,
                            d = 0,
                            e = 0;
                        this.flashVars.each(function(a, f) {
                            var g = a.get(f, "");
                            if (g) switch (f) {
                                case "w":
                                    d = parseInt(g, 10);
                                    break;
                                case "h":
                                    e = parseInt(g, 10);
                                    break;
                                case "mid":
                                    b = parseInt(g, 10), c.set(f, b.toString());
                                    break;
                                case "sid":
                                    var h = parseInt(g, 10) % 12e8;
                                    c.set(f, h.toString());
                                    break;
                                case "ref_id":
                                    c.set(f, g)
                            }
                        }), this.container.html('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" width="' + d + '" height="' + e + '" id="TRPlayer_' + b.toString() + "_" + (new Date).getTime() + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="http://api.cms.rakuten.co.jp/swf/TRPlayer.swf" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="flashVars" value="' + c + '&ltxt=&lurl=" /><embed src="http://api.cms.rakuten.co.jp/swf/TRPlayer.swf" flashVars="' + c + '&ltxt=&lurl=" quality="high" bgcolor="#000000" width="' + d + '" height="' + e + '" name="TRPlayer" wmode="transparent" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>')
                    }, d
                }(c.BaseFlashPlayer);
                c.FlashPlayerPF = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(a) {
                var b = function() {
                    function a() {}
                    return a.waitToLoad = function(a, b, c, d) {
                        var e = this;
                        "undefined" == typeof c && (c = 3), "undefined" == typeof d && (d = 500);
                        var f = 0,
                            g = function() {
                                if (null === b) return !0;
                                var d = a[0];
                                if (d.complete && ("undefined" == typeof d.naturalWidth || d.naturalWidth > 0)) null !== b && b.apply(e, []), b = null;
                                else if (c-- > 0) return !1;
                                return 0 !== f && clearInterval(f), f = 0, !0
                            };
                        g() || (f = setInterval(g, d), a.load(g))
                    }, a
                }();
                a.HtmlUtil = b
            }(a.Util || (a.Util = {}));
            a.Util
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.FLIPBOOK_EVENT_TIMING = [2], this.FLIPBOOK_FILENAME = "flipbook_%03d.jpg", this.FLIPBOOK_STOCK = 3, this.TOLERANCE_ERROR_RATIO = 1.2, this.TOLERANCE_ERROR_COUNT = 3, this.WAIT_SUCCESS_COUNT = 3, this.timerId = 0, this.isStartedOnce = !1, this.isFinished = !1, this.height = 0, this.errorCnt = 0, this.previousTime = 0, this.doms = []
                    }
                    return c.prototype.setPlayer = function(c) {
                        var d = this;
                        a.Global.getLogger().debug("FlipbookPlugin has been loaded: " + c), this.container = c.overlay().html('<div class="RVideoPF-Player-FlipbookPlugin"></div>').css({
                            "z-index": "20",
                            "background-color": "black"
                        }).bind("click", function() {
                            c.resume()
                        }).hide(), this.player = c;
                        var e = function(a, b) {
                                d.initialize(b)
                            },
                            f = function(a) {
                                d.finalize(a)
                            };
                        c.bind(b.AbstractPlayer.MOVIE_LOADED, e), c.bind(b.AbstractPlayer.MOVIE_PLAYED, f), c.bind(b.AbstractPlayer.MOVIE_RESUMED, f), c.bind(b.AbstractPlayer.ERROR, f), c.bind(b.AbstractPlayer.AUTOPLAY_OFF, f)
                    }, c.prototype.finalize = function(a, d) {
                        var e = this;
                        if ("undefined" == typeof d && (d = !0), this.isFinished || this.player.trigger(c.EVENT_HIDDEN), this.isFinished = !0, this.reset(), d === !1) return void this.container.css("z-index", "0");
                        if (this.container.is(":visible"))
                            if (null !== a && a.type !== b.AbstractPlayer.ERROR) {
                                var f = this.player.getVideoElement();
                                f.seek(this.flipbook.getCurrentTime());
                                var g = function(a) {
                                    e.container.hide(), e.player.unbind(b.AbstractPlayer.MOVIE_TIMEUPDATE, g)
                                };
                                this.player.bind(b.AbstractPlayer.MOVIE_TIMEUPDATE, g)
                            } else this.container.hide()
                    }, c.prototype.initialize = function(b) {
                        var c = this;
                        if (null !== b.getFlipbookUrl() && !this.isFinished) {
                            var d = a.Global.getJQuery();
                            this.movie = b;
                            var e = function() {
                                a.Model.Flipbook.load(c.movie, {
                                    success: function(a) {
                                        c.flipbook = a, c.setCSS();
                                        for (var b = 1; b <= c.FLIPBOOK_STOCK; b++) c.loadFlipbook(b)
                                    }
                                })
                            };
                            "complete" === document.readyState ? e() : d(window).bind("load", e)
                        }
                    }, c.prototype.setCSS = function() {
                        var a = Math.min(this.container.height() / this.flipbook.getHeight(), this.container.width() / this.flipbook.getWidth()),
                            b = a * this.flipbook.getHeight(),
                            c = a * this.flipbook.getWidth();
                        this.container.find(".RVideoPF-Player-FlipbookPlugin").css({
                            height: b + "px",
                            width: c + "px"
                        }), this.height = b
                    }, c.prototype.loadFlipbook = function(d) {
                        var e = this;
                        if (this.flipbook.hasFlipbook(d)) {
                            var f = "RVideoPF-Player-FlipbookPlugin-Flipbook-" + d,
                                g = this.movie.getFlipbookUrl() + this.FLIPBOOK_FILENAME.replace("%03d", ("00" + d).slice(-3));
                            this.container.find(".RVideoPF-Player-FlipbookPlugin").append('<div class="' + f + '"><img src="' + g + '" /></div>'), a.Util.HtmlUtil.waitToLoad(this.container.find("." + f).find("img"), function() {
                                e.doms[d] = e.container.find("." + f), 1 === d && (e.doms[d].css("display", "block"), e.player.bind(b.AutoPlayPlugin.EVENT_PLAYED, function(a) {
                                    e.start()
                                }), e.player.bind(b.AutoPlayPlugin.EVENT_PAUSED, function(a) {
                                    e.reset()
                                }), e.player.trigger(c.EVENT_PREPARED))
                            })
                        }
                    }, c.prototype.reset = function() {
                        this.timerId > 0 && (clearInterval(this.timerId), this.timerId = 0)
                    }, c.prototype.start = function() {
                        var a = this;
                        if (!(this.isFinished || this.timerId > 0))
                            if (this.previousTime = (new Date).getTime(), this.isStartedOnce) this.timerId = setInterval(function() {
                                a.play()
                            }, this.flipbook.getInterval()), this.container.show(), this.errorCnt = 0;
                            else {
                                var b = 0;
                                this.timerId = setInterval(function() {
                                    a.isSmoothlyPlayed(), b = 0 === a.errorCnt ? b + 1 : 0, b >= a.WAIT_SUCCESS_COUNT && (clearInterval(a.timerId), a.timerId = setInterval(function() {
                                        a.play()
                                    }, a.flipbook.getInterval()), a.container.show(), a.isStartedOnce = !0, a.player.trigger(c.EVENT_STARTED, [a.movie]))
                                }, this.flipbook.getInterval())
                            }
                    }, c.prototype.isSmoothlyPlayed = function() {
                        var b = (new Date).getTime(),
                            c = b - this.previousTime,
                            d = !0;
                        return c > this.TOLERANCE_ERROR_RATIO * this.flipbook.getInterval() ? (a.Global.getLogger().debug("FlipbookPlugin: processing time has been exceeded(" + (this.errorCnt + 1) + "): " + c + "(" + Math.round(this.flipbook.getInterval()) + ")"), ++this.errorCnt >= this.TOLERANCE_ERROR_COUNT && (d = !1)) : this.errorCnt = 0, this.previousTime = b, d
                    }, c.prototype.updateCSS = function() {
                        var a = this.flipbook.getFlipbookIndex();
                        return "undefined" != typeof this.doms[a] && (this.doms[a].is(":visible") || (this.loadFlipbook(a + this.FLIPBOOK_STOCK - 1), this.doms[a - 1].css("display", "none"), this.doms[a].css("display", "block")), this.doms[a].css("top", "-" + this.flipbook.getFrameIndex() * this.height + "px"), !0)
                    }, c.prototype.play = function() {
                        return this.isSmoothlyPlayed() ? (this.flipbook.next(), this.updateCSS() ? void(this.FLIPBOOK_EVENT_TIMING.indexOf(this.flipbook.getCurrentTime()) >= 0 && this.player.trigger(c.EVENT_PLAYING, [this.movie, this.flipbook.getCurrentTime()])) : (this.flipbook.hasFlipbook() || this.player.trigger(c.EVENT_COMPLETED, [this.movie, this.flipbook.isFinishedAll()]), void this.finalize(null, this.flipbook.isFinishedAll()))) : void this.finalize(null, !1)
                    }, c.EVENT_PREPARED = "flipbookpluginPrepared", c.EVENT_STARTED = "flipbookpluginStarted", c.EVENT_PLAYING = "flipbookpluginPlaying", c.EVENT_HIDDEN = "flipbookpluginHidden", c.EVENT_COMPLETED = "flipbookpluginCompleted", c
                }();
                b.FlipbookPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e(b, f) {
                        "undefined" == typeof f && (f = null), d.call(this), this.movie = null, this.status = e.STATUS_INITIALIZED, this.extraSettings = {
                            playerClass: "Html5Player",
                            initialAutoPlay: !1,
                            autoPlay: !1,
                            pattern: null,
                            onEndReprepare: !0,
                            isMuted: !1,
                            timeout: 3e4,
                            showErrorOverlay: !0,
                            controller: !1,
                            type: 1,
                            playingEventTime: 0
                        }, this.playingEventTimerId = 0;
                        var g = a.Global.getJQuery();
                        null !== f && g.extend(this.extraSettings, f), this.container = b;
                        var h = this.extraSettings.controller ? " controls" : "";
                        this.container.html('<div class="RVideoPF-Player-' + this.extraSettings.playerClass + '"><video class="RVideoPF-Player-' + this.extraSettings.playerClass + '-Video" preload="none"' + h + "></video></div>"), this.videoElement = new c.VideoElementWrapper(this.container.find(".RVideoPF-Player-" + this.extraSettings.playerClass + "-Video")[0]), this.extraSettings.isMuted === !0 && (this.trigger(c.AbstractPlayer.MOVIE_MUTED), this.videoElement.mute())
                    }
                    return b(e, d), e.prototype.loadPlugin = function(b) {
                        var d = b + "Plugin";
                        if (!a.Player[d]) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_PLUGIN_NOT_FOUND, "Plugin not found: " + b]);
                        var f = a.Player[d],
                            g = new f;
                        return g.setPlayer ? void g.setPlayer(this) : void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_PLUGIN_NOT_FOUND, "Plugin not found: " + b])
                    }, e.prototype.handleDefaultEvent = function(a, b) {
                        if (a.type == c.AbstractPlayer.ERROR && this.extraSettings.showErrorOverlay !== !1 && b[0] !== e.CODE_PLUGIN_NOT_FOUND) {
                            var d = "\u73fe\u5728\u3053\u306e\u52d5\u753b\u306f\u518d\u751f\u3067\u304d\u307e\u305b\u3093";
                            switch (b[0] || 0) {
                                case e.CODE_INVALID:
                                    d = "\u3053\u306e\u52d5\u753b\u306f\u518d\u751f\u3067\u304d\u307e\u305b\u3093";
                                    break;
                                case e.CODE_MAINTENANCE:
                                    d = "\u305f\u3060\u3044\u307e\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u4e2d\u3067\u3059";
                                    break;
                                case e.CODE_UNSUPPORTED:
                                    d = "\u3053\u306e\u52d5\u753b\u306f\u3054\u5229\u7528\u306e\u7aef\u672b\u3067\u306f\u518d\u751f\u3067\u304d\u307e\u305b\u3093"
                            }
                            this.dispose();
                            var f = this.overlay().html('<div class="RVideoPF-Player-' + this.extraSettings.playerClass + '-Error"><p class="RVideoPF-Player-' + this.extraSettings.playerClass + '-Error-Message"></p></div>'),
                                g = f.find(".RVideoPF-Player-" + this.extraSettings.playerClass + "-Error-Message").text(d);
                            g.css("padding-top", Math.round((f.height() - g.height()) / 2))
                        }
                    }, e.prototype.overlay = function() {
                        var b = a.Global.getJQuery();
                        return b('<div class="RVideoPF-Player-' + this.extraSettings.playerClass + '-Overlay"></div>').appendTo(this.container.find(".RVideoPF-Player-" + this.extraSettings.playerClass))
                    }, e.prototype.loadMovie = function(b, d) {
                        var f = this;
                        if (this.status === e.STATUS_DISPOSED) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_STATUS, "This player has been disposed"]);
                        if (!this.videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_UNSUPPORTED, "Client doesn not support MP4"]);
                        var g = b.movieId;
                        a.Global.getJQuery();
                        this.movie = new a.Model.Movie(g), this.videoElement.empty().unbind(), this.status = e.STATUS_LOADING, a.Global.getLogger().info("Movie will be loaded: " + g), this.trigger(c.AbstractPlayer.MOVIE_LOADING, [this.movie]), d.apply(null, [b, {
                            success: function(b) {
                                return f.movie.getId() !== b.getId() ? void a.Global.getLogger().debug("Another movie already exists: " + g) : void f.loadMovieModel(b)
                            },
                            error: function(b) {
                                var d = e.CODE_IOERROR;
                                switch (b.getCode()) {
                                    case a.Network.BaseJsonAPI.CODE_CLIENT:
                                        d = e.CODE_INVALID;
                                        break;
                                    case a.Network.BaseJsonAPI.CODE_MAINTENANCE:
                                        d = e.CODE_MAINTENANCE
                                }
                                f.trigger(c.AbstractPlayer.ERROR, [d, "API respond error: " + b])
                            }
                        }])
                    }, e.prototype.loadMovieModel = function(b) {
                        var d = this;
                        if (this.status === e.STATUS_DISPOSED) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_STATUS, "This player has been disposed"]);
                        if (!this.videoElement.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_UNSUPPORTED, "Client doesnt not support MP4"]);
                        a.Global.getJQuery();
                        this.movie = b;
                        var f = b.getRenditionNearBy(274e3, "H264");
                        if (null === f) return void this.trigger(c.AbstractPlayer.ERROR, [e.CODE_INVALID, "No appropriate video codec"]);
                        this.videoElement.addSource("video/mp4", f.getUrl()), this.videoElement.bind("play", function() {
                            d.prepare()
                        });
                        var g = b.getAutoPlay();
                        g ? (this.bind(c.AutoPlayPlugin.EVENT_PLAYED, function(a) {
                            d.extraSettings.autoPlay && d.resume(!0)
                        }), this.bind(c.AutoPlayPlugin.EVENT_PAUSED, function(a) {
                            d.extraSettings.autoPlay && d.pause(!0)
                        })) : (this.trigger(c.AbstractPlayer.AUTOPLAY_OFF), this.extraSettings.autoPlay = this.extraSettings.autoPlay && g), this.status = e.STATUS_LOADED, a.Global.getLogger().info("Movie has been loaded: " + this.movie), this.trigger(c.AbstractPlayer.MOVIE_LOADED, [this.movie]), this.extraSettings.initialAutoPlay && this.resume()
                    }, e.prototype.getCurrentTime = function() {
                        var a = 0;
                        return null === this.movie ? -1 : 0 === (a = this.videoElement.getDuration()) ? -1 : this.videoElement.getCurrentTime() / a * this.movie.getDuration()
                    }, e.prototype.reset = function() {
                        return a.Global.getLogger().debug(this + ".reset()"), !(null === this.movie || !this.videoElement.haveBeenPlayed()) && (this.videoElement.pause(), this.videoElement.seek(0), this.trigger(c.AbstractPlayer.MOVIE_COMPLETED, [this.movie]), !0)
                    }, e.prototype.play = function(b) {
                        "undefined" == typeof b && (b = !1), a.Global.getLogger().debug(this + ".play()"), null !== this.movie && this.status !== e.STATUS_PREPARING && (this.status === e.STATUS_PREPARED ? this.videoElement.play() : (b && (this.videoElement.mute(), this.trigger(c.AbstractPlayer.MOVIE_MUTED)), this.reprepare(!0)))
                    }, e.prototype.pause = function(a) {
                        "undefined" == typeof a && (a = !1), this.setAutoPlay(a), null === this.movie || this.videoElement.isPaused() || this.status === e.STATUS_PREPARING || this.videoElement.pause()
                    }, e.prototype.resume = function(b) {
                        "undefined" == typeof b && (b = !1), this.setAutoPlay(b), a.Global.getLogger().debug(this + ".resume()"), null !== this.movie && (this.status === e.STATUS_PLAYING ? this.videoElement.play() : this.play(b))
                    }, e.prototype.stop = function() {
                        null !== this.movie && this.reprepare()
                    }, e.prototype.dispose = function() {
                        a.Global.getJQuery();
                        this.unbind(), this.videoElement.unbind(), this.container.find(".RVideoPF-Player-Html5Player-Overlay").remove(), this.status = e.STATUS_DISPOSED
                    }, e.prototype.remove = function() {
                        var a = this;
                        this.movie = null, this.videoElement.closeSocket(), this.container.empty(), setTimeout(function() {
                            a.unbind(), null !== a.videoElement && a.videoElement.unbind()
                        }, 1), this.trigger(c.AbstractPlayer.PLAYER_DISPOSED, ["Player has been disposed"]), this.status = e.STATUS_DISPOSED
                    }, e.prototype.prepare = function() {
                        var b = this;
                        this.status = e.STATUS_PREPARING, a.Global.getLogger().info("Movie will be prepared: " + this.movie), this.trigger(c.AbstractPlayer.MOVIE_PREPARING, [this.movie]);
                        var d = setTimeout(function() {
                            d = 0, b.status === e.STATUS_PREPARING && b.trigger(c.AbstractPlayer.ERROR, [e.CODE_IOERROR, "Request timed out", b.movie])
                        }, this.extraSettings.timeout);
                        a.Global.getJQuery();
                        this.videoElement.unbind().bind("canplay", function(f) {
                            0 !== d && (clearTimeout(d), b.status = e.STATUS_PREPARED, a.Global.getLogger().info("Movie has been prepared: " + b.movie), b.trigger(c.AbstractPlayer.MOVIE_PREPARED, [b.movie]), b.bindVideoHandler())
                        })
                    }, e.prototype.reprepare = function(b) {
                        var c = this;
                        "undefined" == typeof b && (b = !1);
                        a.Global.getJQuery();
                        if (this.videoElement.unbind(), !this.videoElement.isSeekable(0)) return this.prepare(), this.videoElement.load(), void(b && this.videoElement.play());
                        if (0 === this.videoElement.getCurrentTime()) {
                            var d = a.ClientEnvironment.factory(),
                                f = d.getOsName(),
                                g = d.getOsVersion();
                            return f == a.ClientEnvironment.OS_ANDROID && null !== g && a.Util.StringUtil.compareVersion(g, "3.0") < 0 && this.videoElement.load(), this.bindVideoHandler(), this.status = e.STATUS_PREPARED, void(b && this.videoElement.play())
                        }
                        a.Global.getLogger().info("Movie will be prepared by seek: " + this.movie), this.status = e.STATUS_PREPARING, this.videoElement.bind("seeked canplay", function(d) {
                            a.Global.getLogger().info("Movie has been prepared by seek: " + c.movie), c.status = e.STATUS_PREPARED, c.bindVideoHandler(), b && c.videoElement.play()
                        });
                        try {
                            this.videoElement.seek(0)
                        } catch (a) {
                            this.prepare(), this.videoElement.load(), b && this.videoElement.play()
                        }
                    }, e.prototype.bindVideoHandler = function() {
                        var b = this;
                        a.Global.getJQuery();
                        this.videoElement.unbind().bind("playing pause seeking seeked error timeupdate", function(a) {
                            b.handleVideoEvent(a)
                        }).bind("ended", function() {
                            if (a.Global.getLogger().info("Movie has been completed: " + b.movie), b.trigger(c.AbstractPlayer.MOVIE_COMPLETED, [b.movie]), b.extraSettings.onEndReprepare === !0) {
                                var d = a.ClientEnvironment.factory();
                                d.getBrowserName() === a.ClientEnvironment.BROWSER_IE && b.videoElement.pause(), b.reprepare()
                            }
                            b.stopPlayingTimer()
                        })
                    }, e.prototype.handleVideoEvent = function(b) {
                        a.Global.getJQuery();
                        switch (b.type) {
                            case "playing":
                                this.status !== e.STATUS_PLAYING ? this.trigger(c.AbstractPlayer.MOVIE_PLAYED, [this.movie]) : this.trigger(c.AbstractPlayer.MOVIE_RESUMED, [this.movie]), this.status = e.STATUS_PLAYING, this.setPlayingTimer();
                                break;
                            case "pause":
                                this.trigger(c.AbstractPlayer.MOVIE_PAUSED, [this.movie, this.getCurrentTime()]), this.stopPlayingTimer();
                                break;
                            case "seeked":
                                this.trigger(c.AbstractPlayer.MOVIE_SEEKED, [this.movie, this.getCurrentTime()]), this.stopPlayingTimer();
                                break;
                            case "seeking":
                                this.trigger(c.AbstractPlayer.MOVIE_SEEKING, [this.movie, this.getCurrentTime()]);
                                break;
                            case "timeupdate":
                                this.trigger(c.AbstractPlayer.MOVIE_TIMEUPDATE, [this.movie, this.getCurrentTime()]);
                                break;
                            case "error":
                                this.trigger(c.AbstractPlayer.ERROR, [e.CODE_IOERROR, "Read error occurred", this.movie]), this.stopPlayingTimer()
                        }
                    }, e.prototype.toString = function() {
                        this.constructor.toString().match(/\w+/g)[1];
                        return "[Html5Player (#" + this.getInstanceId() + ")]"
                    }, e.prototype.setAutoPlay = function(a) {
                        this.extraSettings.autoPlay && !a && this.trigger(c.AbstractPlayer.AUTOPLAY_OFF), this.extraSettings.autoPlay = this.extraSettings.autoPlay && a
                    }, e.prototype.getMovie = function() {
                        return this.movie
                    }, e.prototype.getVideoElement = function() {
                        return this.videoElement
                    }, e.prototype.getStatus = function() {
                        return this.status
                    }, e.prototype.setTestPattern = function(a) {
                        this.extraSettings.pattern = a
                    }, e.prototype.getTestPattern = function() {
                        return this.extraSettings.pattern
                    }, e.prototype.getPlayerType = function() {
                        return this.extraSettings.type
                    }, e.prototype.setPlayingTimer = function() {
                        var a = this;
                        0 !== this.extraSettings.playingEventTime && (this.stopPlayingTimer(), this.playingEventTimerId = setTimeout(function() {
                            a.trigger(c.AbstractPlayer.MOVIE_PLAYING, [a.movie])
                        }, this.extraSettings.playingEventTime))
                    }, e.prototype.stopPlayingTimer = function() {
                        0 !== this.extraSettings.playingEventTime && 0 !== this.playingEventTimerId && clearTimeout(this.playingEventTimerId)
                    }, e.CODE_UNSUPPORTED = 2001, e.CODE_STATUS = 2002, e.CODE_INVALID = 2003, e.CODE_IOERROR = 2004, e.CODE_MAINTENANCE = 2005, e.CODE_PLUGIN_NOT_FOUND = 2006, e.STATUS_INITIALIZED = 0, e.STATUS_LOADING = 1, e.STATUS_LOADED = 2, e.STATUS_PREPARING = 3, e.STATUS_PREPARED = 4, e.STATUS_PLAYING = 5, e.STATUS_DISPOSED = 6, e.PLAYER_ICHIBA = 1, e.PLAYER_PRODUCT = 2, e.PLAYER_TENCHO = 3, e.PLAYER_RMS = 4, e.PLAYER_AFL = 5, e
                }(c.AbstractPlayer);
                c.Html5Player = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c(b, d) {
                        "undefined" == typeof d && (d = 40), this.currentPlayer = null, this.eventDispatcher = null, this.currentLoop = 0;
                        var e = a.Global.getJQuery();
                        this.eventDispatcher = e("<div>"), this.container = b, this.maxLoops = d, this.status = c.STATUS_INITIALIZED
                    }
                    return c.prototype.loadPlaylist = function(b, d) {
                        var e = this;
                        "undefined" == typeof b && (b = {}), "undefined" == typeof d && (d = !1);
                        var f = Object.keys(b);
                        a.Model.Movie.findByIdsForIchibaTop({
                            movieId: f
                        }, {
                            success: function(a) {
                                for (var f = 0; f < a.length; ++f) {
                                    var g = b[a[f].getId()];
                                    a[f].setLinkUrl(g)
                                }
                                e.playlist = a, d === !0 && e.shufflePlaylist(), e.status = c.STATUS_READY, e.trigger(c.EVENT_PLAYLIST_LOADED, [e.playlist])
                            },
                            error: function(a) {
                                e.status = c.STATUS_ERROR, e.trigger(c.EVENT_ERROR)
                            }
                        })
                    }, c.prototype.startPlaying = function() {
                        this.status === c.STATUS_READY && (this.status = c.STATUS_PLAYING, this.playAtIndex(0))
                    }, c.prototype.next = function() {
                        this.currentIndex !== this.playlist.length - 1 ? this.playAtIndex(this.currentIndex + 1) : this.loop()
                    }, c.prototype.prev = function() {
                        this.currentIndex > 0 ? this.playAtIndex(this.currentIndex - 1) : this.playAtIndex(this.playlist.length - 1)
                    }, c.prototype.getNextMovieIndex = function() {
                        return this.currentIndex !== this.playlist.length - 1 ? this.currentIndex + 1 : 0
                    }, c.prototype.getPrevMovieIndex = function() {
                        return this.currentIndex > 0 ? this.currentIndex - 1 : this.playlist.length - 1
                    }, c.prototype.loop = function() {
                        this.currentLoop++, this.currentLoop === this.maxLoops ? (this.status = c.STATUS_MAX_LOOPS_REACHED, this.trigger(c.EVENT_MAX_LOOPS_REACHED, ["Reached maximum loops number"]), this.currentPlayer.trigger(c.EVENT_MAX_LOOPS_REACHED, ["Reached maximum loops number"])) : (this.playAtIndex(0), this.trigger(c.EVENT_PLAYLIST_ENDED, ["Playlist ended, playing from beginning"]))
                    }, c.prototype.playNext = function() {
                        this.status !== c.STATUS_ERROR && null !== this.currentPlayer && (this.currentPlayer.trigger("clickNext", [this.currentMovie, this.playlist[this.getNextMovieIndex()]]), this.currentLoop = 0, this.next())
                    }, c.prototype.playPrevious = function() {
                        this.status !== c.STATUS_ERROR && null !== this.currentPlayer && (this.currentPlayer.trigger("clickPrev", [this.currentMovie, this.playlist[this.getPrevMovieIndex()]]), this.currentLoop = 0, this.prev())
                    }, c.prototype.playAtIndex = function(a) {
                        if (this.status !== c.STATUS_ERROR) {
                            if (0 === this.playlist.length) return this.trigger(c.EVENT_ERROR, [c.CODE_PLAYLIST_EMPTY, "Playlist is empty"]), void(this.status = c.STATUS_ERROR);
                            (a > this.playlist.length - 1 || a < 0) && (a = 0), this.currentIndex = a, this.currentMovie = this.playlist[this.currentIndex], this.createNewPlayer(), this.currentPlayer.loadMovieModel(this.playlist[this.currentIndex])
                        }
                    }, c.prototype.createNewPlayer = function() {
                        var c = this,
                            d = a.Global.getJQuery();
                        null !== this.currentPlayer && this.currentPlayer.remove(), this.currentPlayer = new a.Player.Html5Player(this.container, {
                            playerClass: "TopPagePlayer",
                            autoPlay: !0,
                            onEndReprepare: !1,
                            isMuted: !0,
                            timeout: 5e3,
                            showErrorOverlay: !1,
                            controller: !1
                        }), this.currentPlayer.loadPlugins(["AutoPlay", "TopPageSiteCatalyst", "TopPagePlayerTitleImage", "TopPageLandingUrl"]);
                        var e = function() {
                            if (0 !== c.currentPlayer.getVideoElement().getVideoWidth()) {
                                var a = c.currentPlayer.getContainer().find(".RVideoPF-Player-TopPagePlayer"),
                                    b = c.currentPlayer.getVideoElement().getVideoWidth() / c.currentPlayer.getVideoElement().getVideoHeight(),
                                    d = a.width() / b;
                                a.css("height", parseInt(d))
                            }
                            c.currentPlayer.getVideoElement().show()
                        };
                        this.currentPlayer.bind(b.AbstractPlayer.MOVIE_PREPARED, e), this.currentPlayer.bind(b.AbstractPlayer.MOVIE_PLAYED, e), this.currentPlayer.bind(b.AbstractPlayer.MOVIE_COMPLETED, d.proxy(this.next, this)), this.currentPlayer.bind(b.AbstractPlayer.ERROR, d.proxy(this.handlePlayerError, this))
                    }, c.prototype.handlePlayerError = function(b, c) {
                        "error" === b.type && (a.Global.getLogger().info("Found erroneous video: " + this.currentMovie.getId()), this.playlist.splice(this.currentIndex, 1), this.playAtIndex(this.currentIndex))
                    }, c.prototype.shufflePlaylist = function() {
                        for (var a, b, c = this.playlist.length; 0 !== c;) b = Math.floor(Math.random() * c), c -= 1, a = this.playlist[c], this.playlist[c] = this.playlist[b], this.playlist[b] = a
                    }, c.prototype.bind = function(a, b) {
                        this.eventDispatcher.bind(a, b)
                    }, c.prototype.unbind = function(a) {
                        "undefined" == typeof a && (a = null), null !== a ? this.eventDispatcher.unbind(a) : this.eventDispatcher.unbind()
                    }, c.prototype.trigger = function(b, c) {
                        "undefined" == typeof c && (c = []), a.Global.getLogger().info("Trigger event: " + this + " " + b);
                        var d = a.Global.getJQuery(),
                            e = new d.Event(b);
                        this.eventDispatcher.trigger(e, c)
                    }, c.prototype.getPlaylist = function() {
                        return this.playlist
                    }, c.prototype.getStatus = function() {
                        return this.status
                    }, c.prototype.getCurrentMovie = function() {
                        return this.currentMovie
                    }, c.prototype.getCurrentPlayer = function() {
                        return this.currentPlayer
                    }, c.prototype.getCurrentMovieIndex = function() {
                        return this.currentIndex
                    }, c.prototype.getCurrentLoop = function() {
                        return this.currentLoop
                    }, c.CODE_PLAYLIST_EMPTY = 5001, c.EVENT_PLAYLIST_LOADED = "playlistLoaded", c.EVENT_PLAYLIST_ENDED = "playlistEnded", c.EVENT_MAX_LOOPS_REACHED = "maxLoopsReached", c.EVENT_CLICK_NEXT = "clickNext", c.EVENT_CLICK_PREV = "clickPrev", c.EVENT_ERROR = "error", c.STATUS_INITIALIZED = 0, c.STATUS_READY = 1, c.STATUS_PLAYING = 2, c.STATUS_MAX_LOOPS_REACHED = 3, c.STATUS_ERROR = 4, c
                }();
                b.PlaylistController = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            var b = function() {
                function b() {
                    this.prosecutors = {}, this.fieldRules = {}, this.errors = {}
                }
                return b.factory = function() {
                    var a = new b;
                    return a.registerRule("digits", function(a) {
                        return !!a.match(/^[0-9]+$/)
                    }), a.registerRule("between", function(a, b, c) {
                        "undefined" == typeof b && (b = Number.MIN_VALUE), "undefined" == typeof c && (c = Number.MAX_VALUE);
                        var d = parseInt(a, 10);
                        return d.toString(10) == a && (d >= b && d <= c)
                    }), a.registerRule("match", function(a, b) {
                        return "undefined" == typeof b && (b = /.*/), !!a.match(b)
                    }), a.registerRule("length", function(a, b, c) {
                        return "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 5e4), a.length >= b && a.length <= c
                    }), a
                }, b.prototype.registerRule = function(c, d) {
                    if (this.isKeyword(c)) throw new a.Exception(b.ERROR_KEYWORD, "Rule name is keyword: " + c);
                    this.prosecutors[c] = d
                }, b.prototype.getRule = function(a) {
                    return this.prosecutors[a] ? this.prosecutors[a] : null
                }, b.prototype.addFieldRules = function(a) {
                    var b;
                    for (b in a) {
                        var c;
                        for (c in a[b]) {
                            var d = [b, c];
                            "[object Array]" == Object.prototype.toString.apply(a[b][c], []) ? d.concat(a[b][c]) : d.push(a[b][c]), this.addFieldRule.apply(this, d)
                        }
                    }
                }, b.prototype.addFieldRule = function(c, d) {
                    for (var e = [], f = 0; f < arguments.length - 2; f++) e[f] = arguments[f + 2];
                    if (!this.prosecutors[d] && !this.isKeyword(d)) throw new a.Exception(b.ERROR_UNREGISTERED, "Unknown rule required: " + d);
                    this.fieldRules[c] || (this.fieldRules[c] = {}), this.fieldRules[c][d] = e
                }, b.prototype.validate = function(b) {
                    var c = new a.Input;
                    this.errors = {};
                    var d;
                    for (d in this.fieldRules)
                        if (this.applyRules(b, d)) {
                            var e = b.get(d);
                            null !== e && c.set(d, e)
                        } return c
                }, b.prototype.hasError = function(a) {
                    if ("undefined" == typeof a && (a = null), null !== a) return !!this.errors[a];
                    for (a in this.errors) return !0;
                    return !1
                }, b.prototype.applyRules = function(a, b) {
                    var c = a.get(b);
                    if (null === c) return "undefined" == typeof this.fieldRules[b].required || !this.fieldRules[b].required[0] || (this.addError(b, "required", !0), !1);
                    if ("" == c && "undefined" != typeof this.fieldRules[b].empty) return !!this.fieldRules[b].empty[0] || (this.addError(b, "empty", !0), !1);
                    var d;
                    for (d in this.fieldRules[b])
                        if (!this.isKeyword(d)) {
                            var e = this.applyRule(a, b, d);
                            e || this.addError(b, d, !0)
                        } return !this.hasError(b)
                }, b.prototype.applyRule = function(a, b, c) {
                    var d = this.prosecutors[c],
                        e = this.fieldRules[b][c],
                        f = a.get(b);
                    e = [f].concat(e);
                    try {
                        return d.apply(this, e)
                    } catch (a) {
                        return !1
                    }
                }, b.prototype.addError = function(a, b, c) {
                    this.errors[a] || (this.errors[a] = {}), this.errors[a][b] = !0
                }, b.prototype.isKeyword = function(a) {
                    return "required" == a || "empty" == a
                }, b.ERROR_KEYWORD = 1001, b.ERROR_UNREGISTERED = 1002, b
            }();
            a.Validator = b;
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c(b, d) {
                        this.gadgetSettings = {
                            playlist: [],
                            playlistLink: {},
                            maxLoops: 40,
                            shufflePlaylist: !0,
                            maxStaticItems: 7
                        }, this.bannerObject = {};
                        a.Global.getJQuery();
                        this.container = b, this.configurationObject = d, this.bannerObject = {
                            liquidBanner: this.container.find(c.GADGET_DOM_SETTINGS.liquidBannerSelector),
                            defaultContent: this.container.find(c.GADGET_DOM_SETTINGS.defaultContentSelector),
                            bannerFrame: this.container.find(c.GADGET_DOM_SETTINGS.bannerFrameSelector),
                            bannerBody: this.container.find(c.GADGET_DOM_SETTINGS.bannerBodySelector),
                            bannerList: this.container.find(c.GADGET_DOM_SETTINGS.bannerListSelector),
                            prevButton: this.container.find(c.GADGET_DOM_SETTINGS.prevButtonSelector),
                            nextButton: this.container.find(c.GADGET_DOM_SETTINGS.nextButtonSelector),
                            indicatorPoints: this.container.find(c.GADGET_DOM_SETTINGS.indicatorPointSelector)
                        }
                    }
                    return c.prototype.initialize = function() {
                        var b = a.Global.getJQuery();
                        if ("undefined" != typeof b(window).attr("HTMLVideoElement")) {
                            this.bannerObject.bannerBody.css("height", "95px");
                            try {
                                this.loadGadgetSettings(), this.validateGadgetSettings(), this.preparePlaylistController(), this.playlistController.loadPlaylist(this.gadgetSettings.playlistLink, this.gadgetSettings.shufflePlaylist)
                            } catch (a) {
                                return
                            }
                        }
                    }, c.prototype.loadGadgetSettings = function() {
                        var b = a.Global.getJQuery();
                        "undefined" != typeof this.configurationObject.attr("data-max-loops") && (this.gadgetSettings.maxLoops = parseInt(this.configurationObject.attr("data-max-loops"))), "undefined" != typeof this.configurationObject.attr("data-max-static-items") && (this.gadgetSettings.maxStaticItems = parseInt(this.configurationObject.attr("data-max-static-items"))), "undefined" != typeof this.configurationObject.attr("data-shuffle-playlist") && (this.gadgetSettings.shufflePlaylist = "true" === this.configurationObject.attr("data-shuffle-playlist"));
                        var c = this,
                            d = ["data-movie-id", "data-link-url"];
                        this.configurationObject.find(".playlist-item").each(function() {
                            for (var a in d)
                                if ("undefined" == typeof b(this).attr(d[a])) return;
                            var e = parseInt(b(this).attr("data-movie-id"));
                            c.gadgetSettings.playlistLink[e] = b(this).attr("data-link-url")
                        })
                    }, c.prototype.validateGadgetSettings = function() {
                        this.gadgetSettings.maxLoops < 3 && (this.gadgetSettings.maxLoops = 40), (this.gadgetSettings.maxStaticItems < 2 || this.gadgetSettings.maxStaticItems > 7) && (this.gadgetSettings.maxStaticItems = 7)
                    }, c.prototype.getPlaylistController = function() {
                        return this.playlistController
                    }, c.prototype.preparePlaylistController = function() {
                        var c = this,
                            d = a.Global.getJQuery();
                        this.playlistController = new b.PlaylistController(this.bannerObject.bannerBody, this.gadgetSettings.maxLoops), this.playlistController.bind(b.PlaylistController.EVENT_ERROR, d.proxy(this.handlePlaylistError, this)), this.playlistController.bind(b.PlaylistController.EVENT_PLAYLIST_LOADED, function(a, b) {
                            c.gadgetSettings.playlist = b, c.prepareForVideoContent()
                        }), this.playlistController.bind(b.PlaylistController.EVENT_PLAYLIST_LOADED, function() {
                            c.playlistController.startPlaying()
                        }), this.bannerObject.liquidBanner.removeClass("liquidBannerMulti").addClass("superTvBanner")
                    }, c.prototype.prepareForVideoContent = function() {
                        this.bannerObject.bannerFrame.show(), this.bannerObject.defaultContent.hide(), this.bannerObject.indicatorPoints.hide(), 1 === this.gadgetSettings.playlist.length && (this.bannerObject.prevButton.hide(), this.bannerObject.nextButton.hide()), this.bindControlEvents()
                    }, c.prototype.displayDefaultContent = function() {
                        this.bannerObject.liquidBanner.removeClass("liquidBannerMulti").addClass("superTvBanner"), this.bannerObject.bannerFrame.hide(), this.bannerObject.defaultContent.show()
                    }, c.prototype.handlePlaylistError = function() {
                        this.displayDefaultContent()
                    }, c.prototype.prev = function(a) {
                        a.preventDefault(), this.playlistController.playPrevious()
                    }, c.prototype.next = function(a) {
                        a.preventDefault(), this.playlistController.playNext()
                    }, c.prototype.bindControlEvents = function() {
                        var b = a.Global.getJQuery();
                        this.bannerObject.prevButton.bind("click", b.proxy(this.prev, this)), this.bannerObject.nextButton.bind("click", b.proxy(this.next, this))
                    }, c.GADGET_DOM_SETTINGS = {
                        configurationSelector: "#supertv_player_configuration",
                        liquidBannerSelector: ".liquidBannerMulti",
                        defaultContentSelector: ".flashcontent",
                        bannerFrameSelector: ".liquidBanner-frame",
                        bannerBodySelector: ".liquidBanner-body",
                        bannerListSelector: ".liquidBanner-list",
                        prevButtonSelector: ".liquidBanner-prev a",
                        nextButtonSelector: ".liquidBanner-next a",
                        indicatorPointSelector: ".liquidBanner-indicatorArea"
                    }, c
                }();
                b.IchibaTopPageGadget = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {}
                    return b.prototype.setPlayer = function(b) {
                        var c = this;
                        a.Global.getLogger().debug("InterfaceFunctionPlugin has been loaded: " + b), this.videoElement = b.getVideoElement(), this.player = b;
                        var d = b.overlay().html('<div class="RVideoPF-Player-InterfaceFunctionPlugin"></div>').bind("contextmenu", function() {
                                return !1
                            }).css({
                                "z-index": -1
                            }),
                            e = d.parent().parent()[0];
                        e.play = function(a) {
                            return c.play()
                        }, e.pause = function(a) {
                            return c.pause()
                        }, e.reset = function(a) {
                            return c.reset()
                        }
                    }, b.prototype.reset = function() {
                        return this.player.reset()
                    }, b.prototype.play = function() {
                        return this.player.resume(), !this.videoElement.isPaused()
                    }, b.prototype.pause = function() {
                        return this.player.pause(), this.videoElement.isPaused()
                    }, b
                }();
                b.InterfaceFunctionPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {}
                    return c.prototype.setPlayer = function(c) {
                        var d = this;
                        a.Global.getLogger().debug("LoadingIconPlugin has been loaded: " + c), this.container = c.overlay().html('<div class="RVideoPF-Player-LoadingIconPlugin"><img class="RVideoPF-Player-LoadingIconPlugin-LoadingIcon"></div>').hide();
                        var e = (this.container.find(".RVideoPF-Player-LoadingIconPlugin-LoadingIcon").iconize("loading"), function(a) {
                                d.show()
                            }),
                            f = function(a) {
                                d.hide()
                            };
                        c.bind(b.AbstractPlayer.MOVIE_LOADING, e), c.bind(b.AbstractPlayer.MOVIE_PREPARING, e), c.bind(b.AbstractPlayer.MOVIE_LOADED, f), c.bind(b.AbstractPlayer.MOVIE_PREPARED, f), c.bind(b.AbstractPlayer.ERROR, f)
                    }, c.prototype.show = function() {
                        this.container.show(), a.Global.getLogger().debug("Loading icon has been shown")
                    }, c.prototype.hide = function() {
                        this.container.hide(), a.Global.getLogger().debug("Loading icon has been hidden")
                    }, c
                }();
                b.LoadingIconPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.isCalled = !1
                    }
                    return c.prototype.setPlayer = function(c) {
                        var d = this;
                        a.Global.getLogger().debug("PlayLogPlugin has been loaded: " + c), this.playerType = c.getPlayerType();
                        var e = function(a, b) {
                            d.log(a, b)
                        };
                        c.bind(b.AbstractPlayer.MOVIE_RESUMED, e), c.bind(b.AbstractPlayer.MOVIE_PLAYED, e)
                    }, c.prototype.log = function(b, c) {
                        if (!this.isCalled) {
                            this.isCalled = !0;
                            var d = a.Network.RVideoAPI.getDefault();
                            d.call(a.Network.RVideoAPI.PLAY_LOG, {
                                data: {
                                    movie_id: c.getId(),
                                    player_id: this.playerType,
                                    _cmid: 0,
                                    ch: (new Date).getTime(),
                                    _ref: window.location.href
                                },
                                success: function(a) {},
                                error: function(a) {},
                                complete: function() {}
                            })
                        }
                    }, c
                }();
                b.PlayLogPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.recommendInfo = null, this.page = 0, this.timerId = 0, this.lastMovieId = 0
                    }
                    return c.prototype.getRecommendInfo = function(b, c) {
                        "undefined" == typeof c && (c = {});
                        var d = a.Global.getJQuery();
                        c = d.extend({
                            success: function() {},
                            error: function() {},
                            complete: function() {}
                        }, c);
                        var e = a.Network.RVideoAPI.getDefault();
                        e.call(a.Network.RVideoAPI.RECOMMEND_INDEX, {
                            data: {
                                movie_id: b
                            },
                            success: function(a) {
                                var b = a.item.recommend;
                                c.success.apply(null, [b])
                            },
                            error: function(a) {
                                c.error.apply(null, [a])
                            },
                            complete: c.complete,
                            cache: {
                                key: "RVideoPF.Model.Recommend:" + b
                            }
                        })
                    }, c.prototype.setPlayer = function(a) {
                        var c = this,
                            d = '<div class="RVideoPF-Player-RecommendPlugin"><div class="RVideoPF-Player-RecommendPlugin-Header"><h2 class="RVideoPF-Player-RecommendPlugin-Header-Message">\u304a\u3059\u3059\u3081\u306e\u5546\u54c1\u52d5\u753b</h2><p class="RVideoPF-Player-RecommendPlugin-Header-PageText"></p></div><div class="RVideoPF-Player-RecommendPlugin-Content"><div class="RVideoPF-Player-RecommendPlugin-Content-Main"><ul class="RVideoPF-Player-RecommendPlugin-Content-SlideList"></ul></div><div class="RVideoPF-Player-RecommendPlugin-Content-Left"></div><div class="RVideoPF-Player-RecommendPlugin-Content-Right"></div></div><p class="RVideoPF-Player-RecommendPlugin-Footer-ReplayPane"><img class="RVideoPF-Player-RecommendPlugin-Footer-ReplayImage" /><span class="RVideoPF-Player-RecommendPlugin-Footer-ReplayText">\u3082\u3046\u4e00\u5ea6\u518d\u751f\u3059\u308b</span></p></div>';
                        this.container = a.overlay().html(d).hide(), a.bind(b.Html5Player.MOVIE_PLAYED, function(a, b) {
                            c.prepare(b.getId())
                        }), a.bind(b.FlipbookPlugin.EVENT_STARTED, function(a, b) {
                            c.prepare(b.getId())
                        }), a.bind(b.Html5Player.MOVIE_PLAYED, function(a) {
                            c.container.hide()
                        }), a.bind(b.Html5Player.MOVIE_COMPLETED, function(a) {
                            c.show()
                        }), a.bind(b.FlipbookPlugin.EVENT_COMPLETED, function(a, b, d) {
                            d && c.show()
                        }), this.container.find(".RVideoPF-Player-RecommendPlugin-Footer-ReplayPane").bind("click", function() {
                            c.clearTimer(), c.container.hide(), a.play()
                        })
                    }, c.prototype.show = function() {
                        null !== this.recommendInfo && (this.clear(), this.container.show())
                    }, c.prototype.prepare = function(a) {
                        var b = this;
                        this.lastMovieId !== a && (this.lastMovieId = a, this.getRecommendInfo(a, {
                            success: function(a) {
                                b.setRecommendInfo(a)
                            }
                        }), this.container.find(".RVideoPF-Player-RecommendPlugin-Footer-ReplayImage").attr("src", "//stream.cms.rakuten.co.jp/img/rcabinet/playIcn.png"))
                    }, c.prototype.setRecommendInfo = function(b) {
                        this.recommendInfo = b;
                        for (var c = a.Global.getJQuery(), d = this.container.find(".RVideoPF-Player-RecommendPlugin-Content-SlideList").empty(), e = 0; e < b.length; e++) {
                            var f = c('<li class="RVideoPF-Player-RecommendPlugin-Content-LinkImage"><a   class="RVideoPF-Player-RecommendPlugin-Content-RecommendUrl" target="_blank"><img class="RVideoPF-Player-RecommendPlugin-Content-RecommendImage"></a></li>').appendTo(d);
                            f.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendUrl").attr("href", b[e].link_url + "?s-id=item_sp_" + b[e].shop_id + "_movie_1"), f.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").attr("src", b[e].medium_image_url)
                        }
                        var g = this.container.is(":visible");
                        this.container.show();
                        var h = this.container.find(".RVideoPF-Player-RecommendPlugin"),
                            i = this.container.find(".RVideoPF-Player-RecommendPlugin-Content");
                        h.css("height", "auto"), i.hide();
                        var j = this.container.innerHeight() - h.outerHeight() - 10;
                        h.css("height", "100%"), i.show(), i.height(j);
                        var k = Math.min(d.width(), j) - 10;
                        d.css({
                            width: k,
                            height: k,
                            marginTop: (j - k) / 2
                        }), g ? this.container.show() : this.container.hide()
                    }, c.prototype.next = function() {
                        var a = this;
                        this.clearTimer(), this.setPage(this.page + 1), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").css("margin-left", "50px"), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").css("opacity", "0"), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").stop(!0, !0).animate({
                            "margin-left": "0px",
                            opacity: "1"
                        }, 500), this.timerId = setTimeout(function() {
                            a.next()
                        }, 1e4)
                    }, c.prototype.previous = function() {
                        var a = this;
                        this.setPage(this.page - 1), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").css("margin-left", "-50px"), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").css("opacity", "0"), this.container.find(".RVideoPF-Player-RecommendPlugin-Content-RecommendImage").stop(!0, !0).animate({
                            "margin-left": "0px",
                            opacity: "1"
                        }, 500), this.timerId = setTimeout(function() {
                            a.previous()
                        }, 1e4)
                    }, c.prototype.clear = function() {
                        var a = this;
                        this.setPage(0), this.recommendInfo.length > 1 && (this.timerId = setTimeout(function() {
                            a.next()
                        }, 1e4))
                    }, c.prototype.setPage = function(a) {
                        var b = this;
                        this.clearTimer();
                        var c = this.recommendInfo.length;
                        this.page = (a % c + c) % c, this.container.find(".RVideoPF-Player-RecommendPlugin-Header-PageText").text(this.page + 1 + " / " + this.recommendInfo.length);
                        var d = this.container.find(".RVideoPF-Player-RecommendPlugin-Content-SlideList");
                        d.children().hide();
                        var e = this.container.find(".RVideoPF-Player-RecommendPlugin-Content-Left").unbind().hide(),
                            f = this.container.find(".RVideoPF-Player-RecommendPlugin-Content-Right").unbind().hide();
                        this.recommendInfo.length > 1 && (e.show().click(function() {
                            b.previous()
                        }), f.show().click(function() {
                            b.next()
                        })), d.children(":eq(" + this.page + ")").show()
                    }, c.prototype.clearTimer = function() {
                        0 !== this.timerId && (clearTimeout(this.timerId), this.timerId = 0)
                    }, c
                }();
                b.RecommendPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.pattern = null, this.isReady = !1, this.isMilestoneSent = !1, this.events = []
                    }
                    return c.prototype.setPlayer = function(c) {
                        var d = this;
                        this.pattern = c.getTestPattern(), this.setEvent(c, b.AbstractPlayer.MOVIE_LOADED, "loadstart"), this.setEvent(c, b.AbstractPlayer.MOVIE_PLAYED, "start"), this.setEvent(c, b.FlipbookPlugin.EVENT_STARTED, "autostart"), this.setEvent(c, b.FlipbookPlugin.EVENT_PLAYING, "milestone"), this.setEvent(c, b.AbstractPlayer.MOVIE_PLAYING, "milestone");
                        var e = a.Global.getJQuery();
                        e(function() {
                            d.isReady = !0, d.events.forEach(function(a) {
                                d.sendEvent(a)
                            })
                        })
                    }, c.prototype.setEvent = function(a, b, c) {
                        var d = this,
                            e = function(f, g) {
                                d.fireEvent(c, g), a.unbind(b, e)
                            };
                        a.bind(b, e)
                    }, c.prototype.fireEvent = function(b, c) {
                        a.Global.getLogger().debug("SiteCatalyst event fired: " + [b, c.getId(), this.pattern].join(","));
                        var d = document.createEvent("Event");
                        d.initEvent("itemMovieEvent", !0, !0), d.detail = {
                            eventName: b,
                            movieName: c.getId(),
                            url: window.location.href
                        };
                        var e = a.ClientEnvironment.factory(),
                            f = e.isMobile();
                        if ("loadstart" === b && null !== this.pattern && (f && null !== c.getFlipbookUrl() && c.getAutoPlay() ? d.detail.abTest = this.pattern : !f && c.getAutoPlay() && (d.detail.abTest = this.pattern)), "milestone" === b) {
                            if (this.isMilestoneSent) return;
                            this.isMilestoneSent = !0
                        }
                        this.isReady ? this.sendEvent(d) : this.events.push(d)
                    }, c.prototype.sendEvent = function(a) {
                        document.dispatchEvent(a), window !== window.parent && "function" == typeof window.parent.postMessage && window.parent.postMessage(JSON.stringify(a.detail), "*")
                    }, c
                }();
                b.SiteCatalystPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e() {
                        d.apply(this, arguments), this.PF_BASE_URL = "https://api.cms.rakuten.co.jp/proxy/", this.ICHIBA_BASE_URL = "https://stream.cms.rakuten.co.jp/play/image/"
                    }
                    return b(e, d), e.prototype.setPlayer = function(b) {
                        var d = this;
                        a.Global.getLogger().debug("TitleImageOnlyPlugin has been loaded: " + b), this.useExtendedImage = !0, this.container = b.overlay().html('<div class="RVideoPF-Player-TitleImagePlugin"><img class="RVideoPF-Player-TitleImagePlugin-Image-Only"></div>').hide();
                        var e = this.container.parent().parent();
                        this.container.width(e.width()), this.container.height(e.height()), this.container.find(".RVideoPF-Player-TitleImagePlugin-Image-Only").css({
                            "max-height": e.height() + "px",
                            "max-width": e.width() + "px"
                        }), this.targetContainer = this.container, this.container.find(".RVideoPF-Player-TitleImagePlugin").css("cursor", "default");
                        var f = function(a, b, c) {
                                var e = d.generateUrl(b, c);
                                d.loadThumbnail(e)
                            },
                            g = function(a) {
                                d.show0()
                            };
                        b.bind(c.EmptyPlayer.IMAGE_LOAD, f), b.bind(c.EmptyPlayer.IMAGE_LOAD, g)
                    }, e.prototype.generateUrl = function(a, b) {
                        var c = null;
                        switch (a) {
                            case e.TYPE_PF:
                                "undefined" != typeof b.movieId && (c = this.PF_BASE_URL + "image/?movie_id=" + b.movieId + "&type=0");
                                break;
                            case e.TYPE_PF_REF:
                                "undefined" != typeof b.referenceId && "undefined" != typeof b.serviceId && (c = this.PF_BASE_URL + "image_by_ref/?ref_id=" + b.referenceId + "&service_id=" + b.serviceId + "&type=0");
                                break;
                            case e.TYPE_ICHIBA:
                                "undefined" != typeof b.movieId && "undefined" != typeof b.shopId && (c = this.ICHIBA_BASE_URL + "?movie_id=" + b.movieId + "&shop_id=" + b.shopId + "&type=0")
                        }
                        return c
                    }, e.prototype.loadThumbnail = function(b) {
                        var d = this,
                            e = this.container.find(".RVideoPF-Player-TitleImagePlugin-Image-Only").hide();
                        return null === b ? void e.trigger(c.BaseTitleImagePlugin.IMAGE_LOADED) : (e.attr("src", b), void this.waitToLoad(e, function() {
                            var f = e.attr("src").replace(/^http[s]?:/, ""),
                                g = b.replace(/^http[s]?:/, "");
                            if (f === g) {
                                if (a.Global.getLogger().debug("Title image has been loaded: " + b), e.show(), d.resize(e), "undefined" != typeof document.documentMode && document.documentMode <= 7) {
                                    var h = Math.floor((d.container.width() - e.width()) / 2),
                                        i = Math.floor((d.container.height() - e.height()) / 2);
                                    e.css({
                                        top: i,
                                        left: h
                                    })
                                }
                                e.stop().hide().fadeIn("fast"), e.trigger(c.BaseTitleImagePlugin.IMAGE_LOADED)
                            }
                        }))
                    }, e.TYPE_ICHIBA = "ichiba", e.TYPE_PF = "pf", e.TYPE_PF_REF = "pfRef", e
                }(c.BaseTitleImagePlugin);
                c.TitleImageOnlyPlugin = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e() {
                        d.apply(this, arguments), this.maxIconSize = 140
                    }
                    return b(e, d), e.prototype.setPlayer = function(b) {
                        var d = this;
                        a.Global.getLogger().debug("TitleImagePlugin has been loaded: " + b), this.useExtendedImage = !0, this.container = b.overlay().html('<div class="RVideoPF-Player-TitleImagePlugin"><img class="RVideoPF-Player-TitleImagePlugin-Image"><img class="RVideoPF-Player-TitleImagePlugin-PlayIcon"></div>').bind("click", function() {
                            var a = b.getVideoElement();
                            a.getCurrentTime() > 0 && a.isPaused() === !1 && a.isEnded() === !1 ? b.pause() : b.resume()
                        }).bind("contextmenu", function() {
                            return !1
                        });
                        var e = this.container.parent().parent();
                        this.container.width(e.width()), this.container.height(e.height()), this.targetContainer = this.container.find(".RVideoPF-Player-TitleImagePlugin").hide(), this.container.css({
                            "background-color": "rgba(0, 0, 0, 0)"
                        }), this.imageContainer = this.container.find(".RVideoPF-Player-TitleImagePlugin-Image"), this.container.find(".RVideoPF-Player-TitleImagePlugin").css("background-color", "transparent");
                        var f = this.container.find(".RVideoPF-Player-TitleImagePlugin-PlayIcon").iconize();
                        this.waitToLoad(f, function() {
                            f.show(), d.resize(f, Math.min(d.maxIconSize, d.container.width() / 3), Math.min(d.maxIconSize, d.container.height() / 3)), f.trigger(c.BaseTitleImagePlugin.ICON_LOADED)
                        });
                        var g = b.getMovie();
                        null !== g && this.load(g);
                        var h = function(a, b) {
                                d.load(b)
                            },
                            i = function(a) {
                                d.show()
                            },
                            j = function(a) {
                                d.container.css({
                                    "background-color": "rgba(0, 0, 0, 1)"
                                }), d.show0(!0)
                            },
                            k = function(a) {
                                d.container.css({
                                    "background-color": "rgba(0, 0, 0, 0)"
                                }), d.hide(!0)
                            };
                        b.bind(c.AbstractPlayer.MOVIE_LOADED, h), b.bind(c.AbstractPlayer.MOVIE_LOADED, j), b.bind(c.AbstractPlayer.MOVIE_PAUSED, i), b.bind(c.AbstractPlayer.MOVIE_COMPLETED, j), b.bind(c.AbstractPlayer.MOVIE_PREPARING, k), b.bind(c.AbstractPlayer.MOVIE_LOADING, k), b.bind(c.AbstractPlayer.MOVIE_PLAYED, k), b.bind(c.AbstractPlayer.MOVIE_RESUMED, k), b.bind(c.AbstractPlayer.ERROR, k)
                    }, e
                }(c.BaseTitleImagePlugin);
                c.TitleImagePFPlugin = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e() {
                        d.apply(this, arguments)
                    }
                    return b(e, d), e.prototype.setPlayer = function(b) {
                        var d = this;
                        a.Global.getLogger().debug("TitleImagePlugin has been loaded: " + b), this.useExtendedImage = !0, this.container = b.overlay().html('<div class="RVideoPF-Player-TitleImagePlugin"><img class="RVideoPF-Player-TitleImagePlugin-Image"><img class="RVideoPF-Player-TitleImagePlugin-PlayIcon"></div>').hide().bind("click", function() {
                            b.resume()
                        }).bind("contextmenu", function() {
                            return !1
                        }), this.targetContainer = this.container;
                        var e = this.container.find(".RVideoPF-Player-TitleImagePlugin-PlayIcon").iconize();
                        this.waitToLoad(e, function() {
                            e.show(), d.resize(e, d.container.width() / 3, d.container.height() / 3), e.trigger(c.BaseTitleImagePlugin.ICON_LOADED)
                        });
                        var f = b.getMovie();
                        null !== f && this.load(f);
                        var g = function(a, b) {
                                d.load(b)
                            },
                            h = function(a) {
                                d.show0(!0)
                            },
                            i = function(a) {
                                d.hide(!0)
                            };
                        b.bind(c.AbstractPlayer.MOVIE_LOADED, g), b.bind(c.AbstractPlayer.MOVIE_LOADED, h), b.bind(c.AbstractPlayer.MOVIE_COMPLETED, h), b.bind(c.AbstractPlayer.MOVIE_PREPARING, i), b.bind(c.AbstractPlayer.MOVIE_LOADING, i), b.bind(c.AbstractPlayer.MOVIE_PLAYED, i), b.bind(c.AbstractPlayer.MOVIE_RESUMED, i), b.bind(c.AbstractPlayer.ERROR, i)
                    }, e
                }(c.BaseTitleImagePlugin);
                c.TitleImageSPPlugin = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {}
                    return c.prototype.setPlayer = function(d) {
                        a.Global.getJQuery();
                        d.getContainer().find("video").wrap('<a class="RVideoPF-Player-TopPageLandingUrl">');
                        var e = function() {
                            d.getContainer().find(".RVideoPF-Player-TopPageLandingUrl").attr("href", c.getLandingUrl(d.getMovie()))
                        };
                        d.bind(b.AbstractPlayer.MOVIE_LOADED, e)
                    }, c.getLandingUrl = function(a) {
                        var b = a.getLinkUrl();
                        return b += b.indexOf("?", 0) > 0 ? "&l-id=" : "?l-id=", b = b + "topvideo_rstv_" + a.getId()
                    }, c
                }();
                b.TopPageLandingUrlPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(c) {
                var d = function(d) {
                    function e() {
                        d.apply(this, arguments)
                    }
                    return b(e, d), e.prototype.setPlayer = function(b) {
                        var d = this;
                        a.Global.getJQuery();
                        a.Global.getLogger().debug("TopPagePlayerTitleImagePlugin has been loaded: " + b), this.container = b.overlay().html('<div class="RVideoPF-Player-TopPageTitleImagePlugin"><a class="RVideoPF-Player-TopPageTitleImagePlugin-TopPageLandingUrl"><img class="RVideoPF-Player-TitleImagePlugin-Image"></a></div>').hide(), this.targetContainer = this.container;
                        var e = b.getMovie();
                        null !== e && this.load(e);
                        var f = function(a, b) {
                                d.container.find(".RVideoPF-Player-TopPageTitleImagePlugin-TopPageLandingUrl").attr("href", c.TopPageLandingUrlPlugin.getLandingUrl(b)), d.load(b)
                            },
                            g = function(a) {
                                d.show0()
                            },
                            h = function(a) {
                                d.hide()
                            };
                        b.bind(c.AbstractPlayer.MOVIE_LOADED, f), b.bind(c.AbstractPlayer.MOVIE_LOADED, g), b.bind(c.AbstractPlayer.MOVIE_PREPARED, h), b.bind(c.AbstractPlayer.MOVIE_PLAYED, h), b.bind(c.PlaylistController.EVENT_MAX_LOOPS_REACHED, g)
                    }, e.prototype.waitToLoad = function(a, b) {
                        var c = this,
                            d = (a.width(), a.height(), 6),
                            e = 0,
                            f = 250,
                            g = function() {
                                if (null === b) return !0;
                                var f = a.is(":visible");
                                a.show(), f || a.hide();
                                var g = a[0];
                                if (g.complete && a.width() > 0 && a.height() > 0 && ("undefined" == typeof g.naturalWidth || g.naturalWidth > 0)) null !== b && b.apply(c, [a]), b = null;
                                else if (d-- > 0) return !1;
                                return 0 !== e && clearInterval(e), e = 0, !0
                            };
                        g() || (e = setInterval(g, f), a.load(g))
                    }, e
                }(c.BaseTitleImagePlugin);
                c.TopPagePlayerTitleImagePlugin = d
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function c() {
                        this.eventQueue = []
                    }
                    return c.loadModule = function(b) {
                        var d = function() {
                            var a;
                            for (a = 0; a < c.callbackQueue.length; a++) c.callbackQueue[a].apply(null, []);
                            c.callbackQueue = []
                        };
                        if (c.callbackQueue.push(b), c.scVideo) d();
                        else if (!c.isLoadStarted) {
                            c.isLoadStarted = !0;
                            var e = a.Global.getJQuery();
                            e(e.getScript(c.MODULE_URL, function() {
                                window.sc_video && (c.scVideo = window.sc_video, d())
                            }))
                        }
                    }, c.prototype.setPlayer = function(a) {
                        var c = this;
                        a.bind(b.PlaylistController.EVENT_CLICK_NEXT, function(a, b, d) {
                            c.fireEvent("topvideo_click_next", [b.getId(), d.getId()])
                        }), a.bind(b.PlaylistController.EVENT_CLICK_PREV, function(a, b, d) {
                            c.fireEvent("topvideo_click_prev", [b.getId(), d.getId()])
                        }), a.bind(b.AbstractPlayer.MOVIE_PLAYED, function(a, b) {
                            c.fireEvent("topvideo_started", [b.getId()])
                        }), a.bind(b.AbstractPlayer.MOVIE_COMPLETED, function(a, b) {
                            c.fireEvent("topvideo_ended", [b.getId()])
                        })
                    }, c.prototype.fireEvent = function(a, b) {
                        var c = ["fireEvent"].concat([a]).concat(b);
                        this.eventQueue.push(c), this.consumeQueue()
                    }, c.prototype.consumeQueue = function() {
                        var b = this;
                        c.loadModule(function() {
                            var d, e = b.eventQueue.length;
                            for (d = 0; d < e; d++) {
                                var f = b.eventQueue.shift(),
                                    g = f.shift();
                                try {
                                    c.scVideo[g].apply(null, f), a.Global.getLogger().debug("TopPageSiteCatalystPlugin[" + g + "](" + f.join(", ") + ")")
                                } catch (a) {}
                            }
                        })
                    }, c.MODULE_URL = "//www.rakuten.co.jp/com/js/omniture/plugin/video/top/sc_media.js?v=20160304", c.scVideo = null, c.isLoadStarted = !1, c.callbackQueue = [], c
                }();
                b.TopPageSiteCatalystPlugin = c
            }(a.Player || (a.Player = {}));
            a.Player
        }(a || (a = {}));
        var a;
        ! function(a) {
            ! function(b) {
                var c = function() {
                    function b() {}
                    return b.getABTestingCookie = function() {
                        for (var a = document.cookie ? document.cookie.split("; ") : [], b = 0; b < a.length; b++) {
                            var c = a[b].split("=");
                            if ("Rp" === c.shift()) {
                                var d = c.join("=");
                                return d.substr(d.length - 3, 3)
                            }
                        }
                        return null
                    }, b.getABTestingPatternFromCookie = function(b, c) {
                        "undefined" == typeof c && (c = null);
                        var d = parseInt(a.Util.ABTestUtil.getABTestingCookie(), 16);
                        if (!isNaN(d)) {
                            var e = 0;
                            if (null === c) {
                                if ("undefined" == typeof this.PATTERNS[b]) return {
                                    name: null
                                };
                                c = this.PATTERNS[b]
                            }
                            for (var f = 0, g = c.length; f < g; f++) {
                                var h = c[f];
                                if ("undefined" != typeof h.rate && "undefined" != typeof h.name && (e += parseInt("fff", 16) * (h.rate / 100), d <= e)) return h
                            }
                        }
                        return {
                            name: null
                        }
                    }, b.PATTERN = null, b.PATTERNS = {
                        autoPlayPC: [{
                            name: "autoplay_testA",
                            isAutoPlay: !0,
                            rate: 100
                        }],
                        autoPlaySP: [{
                            name: "video_autoplay_sp_A",
                            isAutoPlay: !0,
                            rate: 50
                        }, {
                            name: "video_autoplay_sp_B",
                            isAutoPlay: !1,
                            rate: 50
                        }]
                    }, b
                }();
                b.ABTestUtil = c
            }(a.Util || (a.Util = {}));
            a.Util
        }(a || (a = {})), a.Global.exportModules(), a.Global.setStyle("@font-face{font-family:'RVideoPF-Font';font-weight:normal;font-style:normal;src:url(data:application/vnd.ms-fontobject;base64,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);src:url(data:application/vnd.ms-fontobject;base64,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) format(\"embedded-opentype\"),url(data:application/x-font-ttf;base64,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) format(\"truetype\"),url(data:application/font-woff;base64,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) format(\"woff\"),url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+R2VuZXJhdGVkIGJ5IEljb01vb248L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9InJ2aWRlbyIgaG9yaXotYWR2LXg9IjEwMjQiPgo8Zm9udC1mYWNlIHVuaXRzLXBlci1lbT0iMTAyNCIgYXNjZW50PSI5NjAiIGRlc2NlbnQ9Ii02NCIgLz4KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjEwMjQiIC8+CjxnbHlwaCB1bmljb2RlPSImI3gyMDsiIGhvcml6LWFkdi14PSI1MTIiIGQ9IiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU2MDA7IiBnbHlwaC1uYW1lPSJpY29uc19pY29uLXZvbHVtZS1oaWdoIiBob3Jpei1hZHYteD0iMTI0MyIgZD0iTTczLjE0MyA2NjcuNDI5Yy00MC4yMjkgMC03My4xNDMtMzIuOTE0LTczLjE0My03My4xNDN2LTI5Mi41NzFjMC00MC4yMjkgMzIuOTE0LTczLjE0MyA3My4xNDMtNzMuMTQzaDEwOC42NTRsMzMwLjIwMy0yOTIuNTcxdjEwMjRsLTMzMC4yMDMtMjkyLjU3MWgtMTA4LjY1NHpNNjkyLjU5IDY1OC4zOTVsLTYuNDczIDYuMzI3LTczLjE3OS03My4xNzkgNi42NTYtNi40NzNjMzYuMzg5LTM1LjM2NSA1Ni4zOTMtODIuNDMyIDU2LjM5My0xMzIuNTcxIDAtNTMuNzIzLTI0LjE3NC0xMDQuOTk3LTY2LjI2Ny0xNDAuNjU0bC03LjU3LTYuNDM3IDczLjgzOC03My44NzQgNi40MzcgNS43NzhjNjEuNjIzIDU0LjkzIDk2Ljk1MSAxMzMuMzM5IDk2Ljk1MSAyMTUuMTUtMC4wMzcgNzcuOTctMzAuODMgMTUxLjExMy04Ni43ODQgMjA1LjkzNHpNODYxLjM2NyA3OTAuNTI4bC02LjQ3MyA2LjQtNzMuMDcwLTczLjA3MCA2LjU4My02LjUxYzcxLjY4LTcwLjY1NiAxMTEuMTc3LTE2NC42ODEgMTExLjE3Ny0yNjQuODUgMC0xMDMuMjc4LTQ0LjA2OS0yMDMuMDgxLTEyMC44NjktMjczLjYyN2wtNy4wMjItNi41MSA3My4xNDMtNzMuMDcwIDYuNDM3IDUuOTk4Yzk3Ljc5MiA5MS4yODIgMTUxLjY2MiAyMTQuNTY1IDE1MS42NjIgMzQ3LjIwOSAwIDEyNy43ODEtNTAuMjg2IDI0Ny44NDUtMTQxLjU2OCAzMzguMDMwek0xMDI5LjMwMyA5MjEuODkzbC02LjQ3MyA2LjQtNzMuMDcwLTczLjA3MCA2LjU0Ni02LjQzN2MxMDYuODI1LTEwNS44NzQgMTY1LjY2OS0yNDYuNTY1IDE2NS42NjktMzk2LjI4OCAwLTE1NC4zNjgtNjIuMzE4LTI5OC4yMDMtMTc1LjQzMy00MDUuMDY1bC02LjgzOS02LjUxIDczLjEwNi03My4wNzAgNi40NzMgNi4xNDRjMTMyLjkwMSAxMjYuNTAxIDIwNi4wODAgMjk2LjQxMSAyMDYuMDgwIDQ3OC41MDEgMCAxNzcuMzcxLTY5LjYzMiAzNDQuMDI3LTE5Ni4wNTkgNDY5LjM5NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNjAxOyIgZ2x5cGgtbmFtZT0iaWNvbnNfaWNvbi12b2x1bWUtbXV0ZTIiIGhvcml6LWFkdi14PSIxMTcwIiBkPSJNNzMuMTQzIDY2Ny40MjljLTQwLjIyOSAwLTczLjE0My0zMi45MTQtNzMuMTQzLTczLjE0M3YtMjkyLjU3MWMwLTQwLjIyOSAzMi45MTQtNzMuMTQzIDczLjE0My03My4xNDNoMTA4LjY1NGwzMzAuMjAzLTI5Mi41NzF2MTAyNGwtMzMwLjIwMy0yOTIuNTcxaC0xMDguNjU0ek0xMTU2LjY4MSA2MjAuOTgzbC05MC41MTQgOTAuNTE0LTE3Ny43MDEtMTc3LjcwMS0xNzcuNjY0IDE3Ny43MDEtOTAuNTE0LTkwLjUxNCAxNzcuNzAxLTE3Ny43MDEtMTc3LjcwMS0xNzcuNjY0IDkwLjUxNC05MC41MTQgMTc3LjY2NCAxNzcuNjY0IDE3Ny43MDEtMTc3LjY2NCA5MC40NzggOTAuNTE0LTE3Ny42NjQgMTc3LjY2NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNjAyOyIgZ2x5cGgtbmFtZT0iaWNvbnNfaWNvbi12b2x1bWUtbXV0ZSIgaG9yaXotYWR2LXg9IjUxMiIgZD0iTTczLjE0MyA2NjcuNDI5Yy00MC4yMjkgMC03My4xNDMtMzIuOTE0LTczLjE0My03My4xNDN2LTI5Mi41NzFjMC00MC4yMjkgMzIuOTE0LTczLjE0MyA3My4xNDMtNzMuMTQzaDEwOC42NTRsMzMwLjIwMy0yOTIuNTcxdjEwMjRsLTMzMC4yMDMtMjkyLjU3MWgtMTA4LjY1NHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlNjAzOyIgZ2x5cGgtbmFtZT0iaWNvbnNfaWNvbi12b2x1bWUtbWVkaXVtIiBkPSJNNzMuMTQzIDY2Ny40MjljLTQwLjIyOSAwLTczLjE0My0zMi45MTQtNzMuMTQzLTczLjE0M3YtMjkyLjU3MWMwLTQwLjIyOSAzMi45MTQtNzMuMTQzIDczLjE0My03My4xNDNoMTA4LjY1NGwzMzAuMjAzLTI5Mi41NzF2MTAyNGwtMzMwLjIwMy0yOTIuNTcxaC0xMDguNjU0ek02OTIuNTkgNjU4LjM5NWwtNi40MzcgNi4zMjctNzMuMjE2LTczLjE3OSA2LjY1Ni02LjQ3M2MzNi4zNTItMzUuMzY1IDU2LjM5My04Mi40MzIgNTYuMzkzLTEzMi41NzEgMC01My43MjMtMjQuMTc0LTEwNC45OTctNjYuMjY3LTE0MC42NTRsLTcuNTctNi40MzcgNzMuODM4LTczLjg3NCA2LjQzNyA1Ljc3OGM2MS42NTkgNTQuOTMgOTYuOTg3IDEzMy4zMzkgOTYuOTg3IDIxNS4xNS0wLjAzNyA3Ny45Ny0zMC44NjYgMTUxLjExMy04Ni44MjEgMjA1LjkzNHpNODYxLjM2NyA3OTAuNTI4bC02LjQ3MyA2LjQtNzMuMDcwLTczLjA3MCA2LjU4My02LjUxYzcxLjY4LTcwLjY1NiAxMTEuMTc3LTE2NC42ODEgMTExLjE3Ny0yNjQuODUgMC0xMDMuMjc4LTQ0LjA2OS0yMDMuMDgxLTEyMC44NjktMjczLjYyN2wtNi45ODUtNi41MSA3My4xNDMtNzMuMDcwIDYuNDM3IDUuOTk4Yzk3Ljc5MiA5MS4yODIgMTUxLjYyNSAyMTQuNTY1IDE1MS42MjUgMzQ3LjIwOSAwIDEyNy43ODEtNTAuMjg2IDI0Ny44NDUtMTQxLjU2OCAzMzguMDMweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU2MDQ7IiBnbHlwaC1uYW1lPSJpY29uc19pY29uLXZvbHVtZS1sb3ciIGhvcml6LWFkdi14PSI4MDUiIGQ9Ik03My4xNDMgNjY3LjQyOWMtNDAuMjI5IDAtNzMuMTQzLTMyLjkxNC03My4xNDMtNzMuMTQzdi0yOTIuNTcxYzAtNDAuMjI5IDMyLjkxNC03My4xNDMgNzMuMTQzLTczLjE0M2gxMDguNjU0bDMzMC4yMDMtMjkyLjU3MXYxMDI0bC0zMzAuMjAzLTI5Mi41NzFoLTEwOC42NTR6TTY5Mi41OSA2NTguMzk1bC02LjQ3MyA2LjMyNy03My4xNzktNzMuMTc5IDYuNjU2LTYuNDczYzM2LjM4OS0zNS4zNjUgNTYuMzkzLTgyLjQzMiA1Ni4zOTMtMTMyLjU3MSAwLTUzLjcyMy0yNC4xNzQtMTA0Ljk5Ny02Ni4yNjctMTQwLjY1NGwtNy41Ny02LjQzNyA3My44MzgtNzMuODc0IDYuNDM3IDUuNzc4YzYxLjYyMyA1NC45MyA5Ni45NTEgMTMzLjMzOSA5Ni45NTEgMjE1LjE1LTAuMDM3IDc3Ljk3LTMwLjgzIDE1MS4xMTMtODYuNzg0IDIwNS45MzR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwNTsiIGdseXBoLW5hbWU9Imljb25zX2ljb24tcGF1c2UyIiBob3Jpei1hZHYteD0iMTA2NyIgZD0iTTAgOTYwaDQxNS4zNnYtMTAyNGgtNDE1LjM2djEwMjR6TTY1MS4zMDcgOTYwaDQxNS4zNnYtMTAyNGgtNDE1LjM2djEwMjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTYwNjsiIGdseXBoLW5hbWU9Imljb25zX2ljb24tcGxheTMiIGhvcml6LWFkdi14PSI4MTEiIGQ9Ik0wIDk2MGw4MTAuNjY3LTUwNS4xNzMtODEwLjY2Ny01MTguODI3eiIgLz4KPC9mb250PjwvZGVmcz48L3N2Zz4=) format(\"svg\")}.RVideoPF-Player-Html5Player{margin:0;padding:0;border:0;background-color:#000;position:relative;width:100%;height:100%;color:white;overflow:hidden;z-index:0}.RVideoPF-Player-Html5Player div,.RVideoPF-Player-Html5Player span,.RVideoPF-Player-Html5Player applet,.RVideoPF-Player-Html5Player object,.RVideoPF-Player-Html5Player iframe,.RVideoPF-Player-Html5Player h1,.RVideoPF-Player-Html5Player h2,.RVideoPF-Player-Html5Player h3,.RVideoPF-Player-Html5Player h4,.RVideoPF-Player-Html5Player h5,.RVideoPF-Player-Html5Player h6,.RVideoPF-Player-Html5Player p,.RVideoPF-Player-Html5Player blockquote,.RVideoPF-Player-Html5Player pre,.RVideoPF-Player-Html5Player a,.RVideoPF-Player-Html5Player abbr,.RVideoPF-Player-Html5Player acronym,.RVideoPF-Player-Html5Player address,.RVideoPF-Player-Html5Player big,.RVideoPF-Player-Html5Player cite,.RVideoPF-Player-Html5Player code,.RVideoPF-Player-Html5Player del,.RVideoPF-Player-Html5Player dfn,.RVideoPF-Player-Html5Player em,.RVideoPF-Player-Html5Player img,.RVideoPF-Player-Html5Player ins,.RVideoPF-Player-Html5Player kbd,.RVideoPF-Player-Html5Player q,.RVideoPF-Player-Html5Player s,.RVideoPF-Player-Html5Player samp,.RVideoPF-Player-Html5Player small,.RVideoPF-Player-Html5Player strike,.RVideoPF-Player-Html5Player strong,.RVideoPF-Player-Html5Player sub,.RVideoPF-Player-Html5Player sup,.RVideoPF-Player-Html5Player tt,.RVideoPF-Player-Html5Player var,.RVideoPF-Player-Html5Player b,.RVideoPF-Player-Html5Player u,.RVideoPF-Player-Html5Player i,.RVideoPF-Player-Html5Player center,.RVideoPF-Player-Html5Player dl,.RVideoPF-Player-Html5Player dt,.RVideoPF-Player-Html5Player dd,.RVideoPF-Player-Html5Player ol,.RVideoPF-Player-Html5Player ul,.RVideoPF-Player-Html5Player li,.RVideoPF-Player-Html5Player fieldset,.RVideoPF-Player-Html5Player form,.RVideoPF-Player-Html5Player label,.RVideoPF-Player-Html5Player legend,.RVideoPF-Player-Html5Player table,.RVideoPF-Player-Html5Player caption,.RVideoPF-Player-Html5Player tbody,.RVideoPF-Player-Html5Player tfoot,.RVideoPF-Player-Html5Player thead,.RVideoPF-Player-Html5Player tr,.RVideoPF-Player-Html5Player th,.RVideoPF-Player-Html5Player td,.RVideoPF-Player-Html5Player article,.RVideoPF-Player-Html5Player aside,.RVideoPF-Player-Html5Player canvas,.RVideoPF-Player-Html5Player details,.RVideoPF-Player-Html5Player embed,.RVideoPF-Player-Html5Player figure,.RVideoPF-Player-Html5Player figcaption,.RVideoPF-Player-Html5Player footer,.RVideoPF-Player-Html5Player header,.RVideoPF-Player-Html5Player hgroup,.RVideoPF-Player-Html5Player menu,.RVideoPF-Player-Html5Player nav,.RVideoPF-Player-Html5Player output,.RVideoPF-Player-Html5Player ruby,.RVideoPF-Player-Html5Player section,.RVideoPF-Player-Html5Player summary,.RVideoPF-Player-Html5Player time,.RVideoPF-Player-Html5Player mark,.RVideoPF-Player-Html5Player audio,.RVideoPF-Player-Html5Player video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}.RVideoPF-Player-Html5Player table{border-collapse:collapse;border-spacing:0}.RVideoPF-Player-Html5Player caption,.RVideoPF-Player-Html5Player th,.RVideoPF-Player-Html5Player td{text-align:left;font-weight:normal;vertical-align:middle}.RVideoPF-Player-Html5Player q,.RVideoPF-Player-Html5Player blockquote{quotes:none}.RVideoPF-Player-Html5Player q:before,.RVideoPF-Player-Html5Player q:after,.RVideoPF-Player-Html5Player blockquote:before,.RVideoPF-Player-Html5Player blockquote:after{content:\"\";content:none}.RVideoPF-Player-Html5Player a img{border:none}.RVideoPF-Player-Html5Player .RVideoPF-Player-Html5Player-Video{background-color:#000;position:absolute;top:0;left:0;width:100%;height:100%}.RVideoPF-Player-Html5Player .RVideoPF-Player-Html5Player-Overlay{position:absolute;top:0;left:0;width:100%;height:100%}.RVideoPF-Player-Html5Player .RVideoPF-Player-Html5Player-Error{position:relative;width:100%;height:100%;background-color:#000}.RVideoPF-Player-Html5Player .RVideoPF-Player-Html5Player-Error .RVideoPF-Player-Html5Player-Error-Message{text-align:center;width:100%;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none}.RVideoPF-Player-TitleImagePlugin{background-color:#000;position:relative;width:100%;height:100%;cursor:pointer}.RVideoPF-Player-TitleImagePlugin .RVideoPF-Player-TitleImagePlugin-Image,.RVideoPF-Player-TitleImagePlugin .RVideoPF-Player-TitleImagePlugin-PlayIcon{position:absolute;display:none;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none;-khtml-user-drag:none}.RVideoPF-Player-TitleImagePlugin .RVideoPF-Player-TitleImagePlugin-Image{max-height:100%;max-width:100%;top:50%;left:50%;-ms-transform:translate(-50%, -50%);-webkit-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0)}.RVideoPF-Player-TitleImagePlugin .RVideoPF-Player-TitleImagePlugin-PlayIcon{top:50%;left:50%;-ms-transform:translate(-50%, -50%);-webkit-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0);position:relative;z-index:10}.RVideoPF-Player-TitleImagePlugin .RVideoPF-Player-TitleImagePlugin-Image-Only{margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.RVideoPF-Player-LoadingIconPlugin{background-color:#000;position:relative;width:100%;height:100%;cursor:wait}.RVideoPF-Player-LoadingIconPlugin .RVideoPF-Player-LoadingIconPlugin-LoadingIcon{position:absolute;right:5px;bottom:5px;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none;-khtml-user-drag:none}.RVideoPF-Player-TopPagePlayer{margin:0;padding:0;border:0;position:relative;margin-top:8px;width:140px;height:79px;color:white;overflow:hidden}.RVideoPF-Player-TopPagePlayer div,.RVideoPF-Player-TopPagePlayer span,.RVideoPF-Player-TopPagePlayer applet,.RVideoPF-Player-TopPagePlayer object,.RVideoPF-Player-TopPagePlayer iframe,.RVideoPF-Player-TopPagePlayer h1,.RVideoPF-Player-TopPagePlayer h2,.RVideoPF-Player-TopPagePlayer h3,.RVideoPF-Player-TopPagePlayer h4,.RVideoPF-Player-TopPagePlayer h5,.RVideoPF-Player-TopPagePlayer h6,.RVideoPF-Player-TopPagePlayer p,.RVideoPF-Player-TopPagePlayer blockquote,.RVideoPF-Player-TopPagePlayer pre,.RVideoPF-Player-TopPagePlayer a,.RVideoPF-Player-TopPagePlayer abbr,.RVideoPF-Player-TopPagePlayer acronym,.RVideoPF-Player-TopPagePlayer address,.RVideoPF-Player-TopPagePlayer big,.RVideoPF-Player-TopPagePlayer cite,.RVideoPF-Player-TopPagePlayer code,.RVideoPF-Player-TopPagePlayer del,.RVideoPF-Player-TopPagePlayer dfn,.RVideoPF-Player-TopPagePlayer em,.RVideoPF-Player-TopPagePlayer img,.RVideoPF-Player-TopPagePlayer ins,.RVideoPF-Player-TopPagePlayer kbd,.RVideoPF-Player-TopPagePlayer q,.RVideoPF-Player-TopPagePlayer s,.RVideoPF-Player-TopPagePlayer samp,.RVideoPF-Player-TopPagePlayer small,.RVideoPF-Player-TopPagePlayer strike,.RVideoPF-Player-TopPagePlayer strong,.RVideoPF-Player-TopPagePlayer sub,.RVideoPF-Player-TopPagePlayer sup,.RVideoPF-Player-TopPagePlayer tt,.RVideoPF-Player-TopPagePlayer var,.RVideoPF-Player-TopPagePlayer b,.RVideoPF-Player-TopPagePlayer u,.RVideoPF-Player-TopPagePlayer i,.RVideoPF-Player-TopPagePlayer center,.RVideoPF-Player-TopPagePlayer dl,.RVideoPF-Player-TopPagePlayer dt,.RVideoPF-Player-TopPagePlayer dd,.RVideoPF-Player-TopPagePlayer ol,.RVideoPF-Player-TopPagePlayer ul,.RVideoPF-Player-TopPagePlayer li,.RVideoPF-Player-TopPagePlayer fieldset,.RVideoPF-Player-TopPagePlayer form,.RVideoPF-Player-TopPagePlayer label,.RVideoPF-Player-TopPagePlayer legend,.RVideoPF-Player-TopPagePlayer table,.RVideoPF-Player-TopPagePlayer caption,.RVideoPF-Player-TopPagePlayer tbody,.RVideoPF-Player-TopPagePlayer tfoot,.RVideoPF-Player-TopPagePlayer thead,.RVideoPF-Player-TopPagePlayer tr,.RVideoPF-Player-TopPagePlayer th,.RVideoPF-Player-TopPagePlayer td,.RVideoPF-Player-TopPagePlayer article,.RVideoPF-Player-TopPagePlayer aside,.RVideoPF-Player-TopPagePlayer canvas,.RVideoPF-Player-TopPagePlayer details,.RVideoPF-Player-TopPagePlayer embed,.RVideoPF-Player-TopPagePlayer figure,.RVideoPF-Player-TopPagePlayer figcaption,.RVideoPF-Player-TopPagePlayer footer,.RVideoPF-Player-TopPagePlayer header,.RVideoPF-Player-TopPagePlayer hgroup,.RVideoPF-Player-TopPagePlayer menu,.RVideoPF-Player-TopPagePlayer nav,.RVideoPF-Player-TopPagePlayer output,.RVideoPF-Player-TopPagePlayer ruby,.RVideoPF-Player-TopPagePlayer section,.RVideoPF-Player-TopPagePlayer summary,.RVideoPF-Player-TopPagePlayer time,.RVideoPF-Player-TopPagePlayer mark,.RVideoPF-Player-TopPagePlayer audio,.RVideoPF-Player-TopPagePlayer video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}.RVideoPF-Player-TopPagePlayer table{border-collapse:collapse;border-spacing:0}.RVideoPF-Player-TopPagePlayer caption,.RVideoPF-Player-TopPagePlayer th,.RVideoPF-Player-TopPagePlayer td{text-align:left;font-weight:normal;vertical-align:middle}.RVideoPF-Player-TopPagePlayer q,.RVideoPF-Player-TopPagePlayer blockquote{quotes:none}.RVideoPF-Player-TopPagePlayer q:before,.RVideoPF-Player-TopPagePlayer q:after,.RVideoPF-Player-TopPagePlayer blockquote:before,.RVideoPF-Player-TopPagePlayer blockquote:after{content:\"\";content:none}.RVideoPF-Player-TopPagePlayer a img{border:none}.RVideoPF-Player-TopPagePlayer .RVideoPF-Player-TopPagePlayer-Video{position:absolute;top:0;left:0;width:100%;height:100%;display:none}.RVideoPF-Player-TopPagePlayer .RVideoPF-Player-TopPagePlayer-Overlay{position:absolute;top:0;left:0;width:100%;height:100%}.RVideoPF-Player-TopPagePlayer .RVideoPF-Player-LandingUrlPlugin{cursor:pointer;width:100%;height:100%}.RVideoPF-Player-TopPagePlayer .RVideoPF-Player-TopPageTitleImagePlugin{position:relative;width:100%;height:100%}.RVideoPF-Player-TopPagePlayer .RVideoPF-Player-TopPageTitleImagePlugin .RVideoPF-Player-TitleImagePlugin-Image{position:absolute;display:none;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;user-drag:none;-webkit-user-drag:none;-khtml-user-drag:none}.RVideoPF-Player-RecommendPlugin{position:relative;width:100%;height:100%;overflow:hidden;color:black;background-color:#FFF;z-index:30}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Header-Message{text-align:left;font-size:110%;padding:0;margin:0;text-indent:8px}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Header-PageText{position:absolute;display:block;top:0;right:0;font-size:95%;padding:2px 0;margin:0px 8px 0px 0px}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content{position:relative;width:100%;text-align:center;overflow:hidden;*zoom:1}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-Right,.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-Left{position:absolute;top:0;width:15px;height:100%;background-repeat:no-repeat;background-position:center center;background-size:contain;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:pointer}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-Right{right:0;background-image:url(//stream.cms.rakuten.co.jp/img/rcabinet/scrollRight.png);margin-right:8px}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-Left{left:0;background-image:url(//stream.cms.rakuten.co.jp/img/rcabinet/scrollLeft.png);margin-left:8px}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-Main{margin:0 15px !important;height:100%;text-align:center}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-SlideList{margin:0 auto;overflow:hidden}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-LinkImage,.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-RecommendUrl{width:100%;height:100%}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-RecommendUrl{width:100%;height:100%;display:inline-block;position:relative;overflow:hidden}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Content-RecommendImage{position:absolute;left:50%;top:50%;width:auto;height:auto;-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);max-width:100%;max-height:100%}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Footer-ReplayPane{cursor:pointer;position:absolute;bottom:0;left:50%;-ms-transform:translate(-50%, 0);-webkit-transform:translate3d(-50%, 0, 0);transform:translate3d(-50%, 0, 0)}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Footer-ReplayImage{vertical-align:middle}.RVideoPF-Player-RecommendPlugin .RVideoPF-Player-RecommendPlugin-Footer-ReplayText{padding-left:0.5em;vertical-align:middle}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin{font-family:Arial, sans-serif;position:absolute;z-index:2;bottom:10px;float:left;box-sizing:border-box;width:94%;height:30px;margin:0 3%;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;opacity:0;border-radius:5px;background-color:#2a2a2a;box-shadow:0 0 10px rgba(0,0,0,0.3)}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .progress{font-variant:normal;position:relative;float:left;width:100%;height:10px;margin-top:10px;padding:0;cursor:pointer}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .progress .whole-bar{box-sizing:border-box;width:auto;height:16px;margin:-2px 10px 0 75px;border:solid #6d6d6d 1px}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .progress .progress-bar{position:relative;z-index:999;box-sizing:border-box;width:0;height:10px;margin:-13px 0 0 78px;background:#6d6d6d}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin [class^='buffered']{position:absolute;z-index:1;top:0;display:none;height:100%;margin-left:80px;background:rgba(255,255,255,0.1)}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .control{display:inline-block;width:auto;height:100%;margin:0 40px 0 -100%;padding-left:5px;text-align:center}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play-pause{font-variant:small-caps;line-height:30px;position:relative;display:inline-block;float:left;width:30px;margin:auto;padding:0;cursor:pointer;color:rgba(255,255,255,0.8);text-shadow:0 0 0 #fff}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause{height:100%;text-align:center}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button{-webkit-transition:all .2s ease-out;transition:all .2s ease-out}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play-button:before{content:'\\e606'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button:before{content:'\\e605'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play-button:before,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button:before{font-family:RVideoPF-Font;font-size:16px;z-index:2;display:inline-block}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play-button:before:hover,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button:before:hover{text-shadow:0 0 5px #fff}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play-button:before:active,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button:before:active{text-shadow:0 0 7px #fff}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .play .pause-button,.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause .play-button{display:none;width:30px}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .pause-button{box-sizing:border-box;height:100%}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume{position:relative;float:left;width:30px;height:100%;margin:0}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon{box-sizing:border-box;width:100%;height:100%;cursor:pointer;text-align:center}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon span{font-weight:normal;line-height:30px;position:relative;z-index:1;display:block;width:20%;height:13%;margin:auto;color:#fff}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon span:before{font-family:RVideoPF-Font;z-index:2;display:block;margin-left:-3px;content:'\\e604'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon.v-change-0 span:before{content:'\\e601'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon.v-change-1 span:before{content:'\\e602'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon.v-change-2 span:before{content:'\\e604'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon.v-change-3 span:before{content:'\\e603'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-icon.v-change-4 span:before{content:'\\e600'}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-holder{position:absolute;top:-100px;left:0;display:none;width:100%;height:100px;background:#2a2a2a}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-bar-holder{position:relative;width:18px;height:90px;margin:8px auto 0;cursor:pointer;background:#2a2a2a}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-bar-holder .volume-stripe{margin:2px 0 0 2px;position:absolute;z-index:100;width:100%;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAJCAYAAADzRkbkAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVQI12NgwAW0tLREmBgYGF4yMTAwMDExMDD8BwAVkwKDtNVGSwAAAABJRU5ErkJggg==)}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-bar-holder .volume-stripe-dark{margin:2px 0 0 2px;position:absolute;z-index:10;width:14px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAJCAMAAAGzn4ZAAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAGRkZKH30dEAAAABdFJOUwBA5thmAAAACXBIWXMAABJ0AAASdAHeZh94AAAAEklEQVQYV2NgZGAAYhjJyMAAAABKAAf5eQlbAAAAAElFTkSuQmCC)}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-button{display:none}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-button-holder{position:relative;top:-10px}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-ControllerPlugin .volume-bar{position:absolute;bottom:0;z-index:50;width:14px;height:100%;max-height:89px;margin:0 0 2px 2px;background:#cecece}.RVideoPF-Player-Html5Player-Overlay .RVideoPF-Player-FlipbookPlugin{top:50%;left:50%;-webkit-transform:translate3d(-50%, -50%, 0);transform:translate3d(-50%, -50%, 0);overflow:hidden;position:relative}.RVideoPF-Player-Html5Player-Overlay [class^=\"RVideoPF-Player-FlipbookPlugin-Flipbook-\"]{position:absolute;display:none;width:100%}.RVideoPF-Player-Html5Player-Overlay [class^=\"RVideoPF-Player-FlipbookPlugin-Flipbook-\"] img{width:100%} ");
    }();
    ! function(a) {
        if (RVideoPF.Initializers) return RVideoPF.Initializers.IchibaTop.initialize({
            jQuery: a
        })
    }(jQuery);
})();