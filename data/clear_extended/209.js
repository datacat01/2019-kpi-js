! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "../", n(n.s = 33)
}([function(e, t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = 1,
        i = /[A-Z]/g,
        o = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i,
        s = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

    function a(e) {
        return null === e
    }

    function l(e) {
        return "object" === (void 0 === e ? "undefined" : n(e))
    }

    function u(e) {
        return "function" == typeof e
    }

    function c(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function d(e) {
        return "string" == typeof e
    }
    var p = {
        _UA: navigator.userAgent,
        arrayLikeObjToArray: function(e) {
            return Array.prototype.slice.call(e)
        },
        capitalize: function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        },
        debounce: function(e, t, n) {
            var r = void 0;
            return function() {
                for (var i = this, o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
                var l = n && !r;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, n || e.apply(i, s)
                }, t), l && e.apply(this, s)
            }
        },
        decapitalize: function(e) {
            return e.charAt(0).toLowerCase() + e.slice(1)
        },
        echoFn: function(e) {
            return function() {
                return e
            }
        },
        extend: function e(t) {
            for (var n = void 0, r = void 0, i = void 0, o = arguments.length, s = Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) s[u - 1] = arguments[u];
            for (r = 0; r < s.length; r++)
                for (i in n = s[r]) n.hasOwnProperty(i) && (l(t[i]) && !a(t[i]) && l(n[i]) ? t[i] = e({}, t[i], n[i]) : t[i] = n[i]);
            return t
        },
        forEach: function e(t, r, i) {
            var o = void 0,
                s = void 0;
            if (t)
                if (u(t))
                    for (o in t) "prototype" === o || "length" === o || "name" === o || t.hasOwnProperty && !t.hasOwnProperty(o) || r.call(i, t[o], o, t);
                else if (c(t)) {
                var a = "object" !== (void 0 === t ? "undefined" : n(t));
                for (o = 0, s = t.length; o < s; o++)(a || o in t) && r.call(i, t[o], o, t)
            } else if (t.forEach && t.forEach !== e) t.forEach(r, i, t);
            else
                for (o in t) t.hasOwnProperty(o) && r.call(i, t[o], o, t);
            return t
        },
        getInternetExplorerVersion: function(e) {
            var t = -1;
            if ("Microsoft Internet Explorer" === e.appName) {
                var n = e.userAgent,
                    r = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(n);
                null !== r && (t = parseFloat(r[1]))
            }
            return t
        },
        isAndroid: function() {
            return /Android/.test(p._UA)
        },
        isArray: c,
        isArrayLike: function(e) {
            if (null === e || p.isWindow(e) || p.isFunction(e) || p.isUndefined(e)) return !1;
            var t = e.length;
            return !(e.nodeType !== r || !t) || p.isString(e) || p.isArray(e) || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        },
        isDefined: function(e) {
            return void 0 !== e
        },
        isEmptyString: function(e) {
            return p.isString(e) && 0 === e.length
        },
        isFunction: u,
        isIDevice: function() {
            return /iP(hone|ad)/.test(p._UA)
        },
        isIPhone: function() {
            return /iP(hone|od)/.test(p._UA)
        },
        isISO8601: function(e) {
            return p.isNumber(e) && (e = String(e)), !!p.isString(e) && s.test(e.trim())
        },
        isMobile: function() {
            return /iP(hone|ad|od)|Android|Windows Phone/.test(p._UA)
        },
        isMicrosoftBrowser: function() {
            var e = window.navigator.userAgent;
            return e.indexOf("Edge") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("MSIE ") > 0
        },
        isNotEmptyString: function(e) {
            return p.isString(e) && 0 !== e.length
        },
        isNull: a,
        isNodeList: function(e) {
            var t = Object.prototype.toString.call(e);
            return "object" === (void 0 === e ? "undefined" : n(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || "object" === n(e[0]) && e[0].nodeType > 0)
        },
        isNumber: function(e) {
            return "number" == typeof e
        },
        isObject: l,
        isOldIE: function() {
            var e = p.getInternetExplorerVersion(navigator);
            return -1 !== e && e < 10
        },
        isString: d,
        isUndefined: function(e) {
            return void 0 === e
        },
        isValidEmail: function(e) {
            return !!p.isString(e) && o.test(e.trim())
        },
        isWindow: function(e) {
            return p.isObject(e) && e.window === e
        },
        noop: function() {},
        once: function(e, t, n) {
            function r() {
                n.apply(void 0, arguments), t.forEach(function(t) {
                    e.off(t, r)
                })
            }
            t.forEach(function(t) {
                e.on(t, r)
            })
        },
        rotateRight: function(e, t) {
            var n = [],
                r = e.length,
                i = t % r,
                o = void 0;
            for (o = 0; o < r; o++) n.push(e[i]), i >= r - 1 ? i = 0 : i++;
            return n
        },
        snakeCase: function(e, t) {
            if (e && d(e)) return t = t || "_", e.replace(i, function(e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        },
        throttle: function(e, t) {
            var n = void 0,
                r = void 0,
                i = void 0,
                o = void 0,
                s = void 0,
                a = p.debounce(function() {
                    r = o = !1
                }, t);
            return function() {
                for (var l = this, u = arguments.length, c = Array(u), d = 0; d < u; d++) c[d] = arguments[d];
                return n = c, s || (s = setTimeout(function() {
                    s = null, r && (i = e.apply(l, n)), a()
                }, t)), o ? r = !0 : (o = !0, i = e.apply(this, n)), a(), i
            }
        },
        toFixedDigits: function(e, t) {
            var n = String(e);
            if (t = p.isNumber(t) ? t : 0, e = p.isNumber(e) ? e : parseInt(e, 10), p.isNumber(e) && !isNaN(e)) {
                for (n = String(e); n.length < t;) n = "0" + n;
                return n
            }
            return String(NaN)
        },
        transformArray: function(e, t) {
            var n = [];
            return e.forEach(function(e, r) {
                var i = t(e, r);
                p.isDefined(i) && n.push(i)
            }), n
        },
        treeSearch: function e(t, n, r) {
            for (var i = n(t), o = 0; o < i.length; o++) {
                if (r(i[o])) return i[o];
                var s = e(i[o], n, r);
                if (s) return s
            }
        }
    };
    e.exports = p
}, function(e, t, n) {
    var r = n(0),
        i = {
            isVisible: function(e) {
                return "hidden" !== window.getComputedStyle(e).visibility
            },
            isHidden: function(e) {
                return "none" === window.getComputedStyle(e).display
            },
            isShown: function(e) {
                return !i.isHidden(e)
            },
            hide: function(e) {
                e.__prevStyleDisplay = e.style.display, e.style.display = "none"
            },
            show: function(e) {
                i.isHidden(e) && (e.style.display = e.__prevStyleDisplay), e.__prevStyleDisplay = void 0
            },
            hasClass: function(e, t) {
                var n = void 0,
                    i = void 0,
                    o = void 0;
                if (r.isNotEmptyString(t)) {
                    if (e.classList) return e.classList.contains(t);
                    for (t = t || "", i = 0, o = (n = r.isString(e.getAttribute("class")) ? e.getAttribute("class").split(/\s+/) : []).length; i < o; i += 1)
                        if (n[i] === t) return !0
                }
                return !1
            },
            addClass: function(e, t) {
                var n = void 0;
                if (r.isNotEmptyString(t)) {
                    if (e.classList) return void e.classList.add(t);
                    n = r.isString(e.getAttribute("class")) ? e.getAttribute("class").split(/\s+/) : [], r.isString(t) && r.isNotEmptyString(t.replace(/\s+/, "")) && (n.push(t), e.setAttribute("class", n.join(" ")))
                }
            },
            removeClass: function(e, t) {
                var n = void 0;
                if (r.isNotEmptyString(t)) {
                    if (e.classList) return void e.classList.remove(t);
                    n = r.isString(e.getAttribute("class")) ? e.getAttribute("class").split(/\s+/) : [];
                    var i = [],
                        o = void 0,
                        s = void 0;
                    if (r.isString(t) && r.isNotEmptyString(t.replace(/\s+/, ""))) {
                        for (o = 0, s = n.length; o < s; o += 1) t !== n[o] && i.push(n[o]);
                        e.setAttribute("class", i.join(" "))
                    }
                }
            },
            addEventListener: function(e, t, n) {
                r.isArray(e) ? r.forEach(e, function(e) {
                    i.addEventListener(e, t, n)
                }) : r.isArray(t) ? r.forEach(t, function(t) {
                    i.addEventListener(e, t, n)
                }) : e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            removeEventListener: function(e, t, n) {
                r.isArray(e) ? r.forEach(e, function(e) {
                    i.removeEventListener(e, t, n)
                }) : r.isArray(t) ? r.forEach(t, function(t) {
                    i.removeEventListener(e, t, n)
                }) : e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
            },
            dispatchEvent: function(e, t) {
                e.dispatchEvent ? e.dispatchEvent(t) : e.fireEvent("on" + t.eventType, t)
            },
            isDescendant: function(e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e) return !0;
                    n = n.parentNode
                }
                return !1
            },
            getTextContent: function(e) {
                return e.textContent || e.text
            },
            prependChild: function(e, t) {
                return t.parentNode && t.parentNode.removeChild(t), e.insertBefore(t, e.firstChild)
            },
            remove: function(e) {
                e && e.parentNode && e.parentNode.removeChild(e)
            },
            isDomElement: function(e) {
                return e instanceof Element
            },
            click: function(e, t) {
                i.addEventListener(e, "click", t)
            },
            find: function(e, t) {
                return r.arrayLikeObjToArray(e.querySelectorAll(t))
            },
            once: function(e, t, n) {
                i.addEventListener(e, t, function r() {
                    n.apply(void 0, arguments), i.removeEventListener(e, t, r)
                })
            },
            getPosition: function(e) {
                var t = void 0;
                if (e.getBoundingClientRect) return {
                    left: (t = e.getBoundingClientRect()).left,
                    top: t.top,
                    bottom: t.bottom,
                    right: t.right
                };
                for (var n = 0, r = 0, i = e.offsetWidth, o = e.offsetHeight; e;) n += e.offsetLeft - e.scrollLeft + e.clientLeft, r += e.offsetTop - e.scrollTop + e.clientTop, e = e.offsetParent;
                return {
                    left: n,
                    top: r,
                    bottom: r + o,
                    right: n + i
                }
            },
            elementPositionInViewport: function(e, t) {
                t = "number" == typeof t ? t : 0;
                var n = i.getPosition(e),
                    r = n.top,
                    o = n.bottom;
                return r < 0 - t ? "ABOVE" : o > (window.innerHeight || document.documentElement.clientHeight) + t ? "UNDER" : "INSIDE"
            },
            isElementInViewport: function(e, t) {
                return "INSIDE" === i.elementPositionInViewport(e, t)
            },
            getUrlParts: function(e) {
                var t = document.createElement("a");
                return t.href = e, {
                    href: t.href,
                    host: t.host,
                    hostname: t.hostname,
                    port: t.port,
                    pathname: t.pathname,
                    protocol: t.protocol,
                    hash: t.hash,
                    search: t.search
                }
            },
            getDimension: function(e) {
                var t = void 0;
                return !r.isOldIE() && e.getBoundingClientRect ? {
                    width: (t = e.getBoundingClientRect()).width,
                    height: t.height
                } : {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }
        };
    e.exports = i
}, function(e, t, n) {
    var r = n(0),
        i = videojs.Button.extend();
    i.prototype.createEl = function() {
        return videojs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-social-share-control vjs-control vjs-social-share-control-" + r.snakeCase(this.buttonName, "-"),
            innerHTML: '<div class="vjs-social-icon vjs-' + r.snakeCase(this.buttonName, "-") + '-icon "></div>'
        })
    }, i.prototype.onClick = r.debounce(function() {
        var e = this.player();
        this.socialMethod && e.socials && e.socials[this.socialMethod] ? e.socials[this.socialMethod].call(this) : console.log("This social is not supported in this player")
    }, 500);
    var o = {
            DiggButton: "postToDiggit",
            FacebookButton: "postToFB",
            MailButton: "postToMail",
            LinkedinButton: "postToLinkedIn",
            PinterestButton: "postToPinterest",
            RedditButton: "postToReddit",
            TwitterButton: "postToTWTTR"
        },
        s = {};
    Object.keys(o).forEach(function(e) {
        var t = o[e],
            n = i.extend();
        n.prototype.buttonName = e, n.prototype.socialMethod = t, s[e] = n
    }), e.exports = s
}, function(e, t) {
    var n = {};

    function r(e) {
        var t = e || window.navigator,
            r = t.appVersion,
            i = t.userAgent,
            o = t.appName,
            s = String(parseFloat(r)),
            a = parseInt(s, 10),
            l = void 0,
            u = void 0,
            c = void 0; - 1 !== (c = i.indexOf("Opera")) ? (o = "Opera", s = i.substring(c + 6), -1 !== (c = i.indexOf("Version")) && (s = i.substring(c + 8))) : -1 !== (c = i.indexOf("MSIE")) ? (o = "Microsoft Internet Explorer", s = i.substring(c + 5)) : -1 !== (c = i.indexOf("Chrome")) ? (o = "Chrome", s = i.substring(c + 7)) : -1 !== (c = i.indexOf("Safari")) ? (o = "Safari", s = i.substring(c + 7), -1 !== (c = i.indexOf("Version")) && (s = i.substring(c + 8))) : -1 !== (c = i.indexOf("Firefox")) ? (o = "Firefox", s = i.substring(c + 8)) : -1 !== i.indexOf("Trident/") ? (o = "Microsoft Internet Explorer", s = i.substring(i.indexOf("rv:") + 3)) : (u = i.lastIndexOf(" ") + 1) < (c = i.lastIndexOf("/")) && (o = i.substring(u, c), s = i.substring(c + 1), o.toLowerCase() === o.toUpperCase() && (o = window.navigator.browser)), -1 !== (l = s.indexOf(";")) && (s = s.substring(0, l)), -1 !== (l = s.indexOf(" ")) && (s = s.substring(0, l)), -1 !== (l = s.indexOf(")")) && (s = s.substring(0, l)), isNaN(a) && (s = String(parseFloat(r)), a = parseInt(r, 10));
        var d = /Mobile|mini|Fennec|Android|iP(ad|od|hone)|Windows Phone/.test(r),
            p = "-",
            h = !0,
            f = !1,
            v = void 0;
        try {
            for (var m, y = [{
                    s: "Windows 3.11",
                    r: /Win16/
                }, {
                    s: "Windows 95",
                    r: /(Windows 95|Win95|Windows_95)/
                }, {
                    s: "Windows ME",
                    r: /(Win 9x 4.90|Windows ME)/
                }, {
                    s: "Windows 98",
                    r: /(Windows 98|Win98)/
                }, {
                    s: "Windows CE",
                    r: /Windows CE/
                }, {
                    s: "Windows 2000",
                    r: /(Windows NT 5.0|Windows 2000)/
                }, {
                    s: "Windows XP",
                    r: /(Windows NT 5.1|Windows XP)/
                }, {
                    s: "Windows Server 2003",
                    r: /Windows NT 5.2/
                }, {
                    s: "Windows Vista",
                    r: /Windows NT 6.0/
                }, {
                    s: "Windows 7",
                    r: /(Windows 7|Windows NT 6.1)/
                }, {
                    s: "Windows 8.1",
                    r: /(Windows 8.1|Windows NT 6.3)/
                }, {
                    s: "Windows 8",
                    r: /(Windows 8|Windows NT 6.2)/
                }, {
                    s: "Windows NT 4.0",
                    r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
                }, {
                    s: "Windows ME",
                    r: /Windows ME/
                }, {
                    s: "Android",
                    r: /Android/
                }, {
                    s: "Open BSD",
                    r: /OpenBSD/
                }, {
                    s: "Sun OS",
                    r: /SunOS/
                }, {
                    s: "Linux",
                    r: /(Linux|X11)/
                }, {
                    s: "iOS",
                    r: /(iPhone|iPad|iPod)/
                }, {
                    s: "Mac OS X",
                    r: /Mac OS X/
                }, {
                    s: "Mac OS",
                    r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                }, {
                    s: "QNX",
                    r: /QNX/
                }, {
                    s: "UNIX",
                    r: /UNIX/
                }, {
                    s: "BeOS",
                    r: /BeOS/
                }, {
                    s: "OS/2",
                    r: /OS\/2/
                }, {
                    s: "Search Bot",
                    r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                }][Symbol.iterator](); !(h = (m = y.next()).done); h = !0) {
                var g = m.value;
                if (g.r.test(i)) {
                    p = g.s;
                    break
                }
            }
        } catch (e) {
            f = !0, v = e
        } finally {
            try {
                !h && y.return && y.return()
            } finally {
                if (f) throw v
            }
        }
        var b = "-",
            A = void 0;
        switch (/Windows/.test(p) && (b = (A = /Windows (.*)/.exec(p)) ? A[1] : "", p = "Windows"), p) {
            case "Mac OS X":
                b = (A = /Mac OS X (10[._\d]+)/.exec(i)) ? A[1] : "";
                break;
            case "Android":
                b = (A = /Android ([._\d]+)/.exec(i)) ? A[1] : "";
                break;
            case "iOS":
                b = (A = /OS (\d+)_(\d+)_?(\d+)?/.exec(r)) ? b[1] + "." + b[2] + "." + (b[3] || 0) : ""
        }
        var w = parseInt(b.split(".")[0], 10),
            j = !i.match(/Windows Phone/) && i.match(/iPhone/);
        n.browser = o, n.browserVersion = s, n.browserMajorVersion = a, n.mobile = d, n.os = p, n.osVersion = b, n.osMajorVersion = w, n.isIPhone = j
    }
    r(), window.addEventListener("updateSystemInfo", function(e) {
        r(e.detail)
    }), e.exports = n
}, function(e, t, n) {
    var r = n(0),
        i = document.createElement("a"),
        o = document.documentMode;
    var s = {
        appendGeolocation: function(e) {
            try {
                return s.appendKeyToURL(e, "geo", window.PageCriteria.geo)
            } catch (t) {
                return e
            }
        },
        appendKeyToURL: function(e, t, n) {
            var r = void 0;
            r = /\?/.test(e) ? "&" : "?", r += t + "=" + encodeURIComponent(n.toString());
            var i = e.split("#");
            return 2 === i.length ? i[0] + r + "#" + i[1] : i[0] + r
        },
        objToQueryString: function(e) {
            var t = [];
            return r.forEach(e, function(e, n) {
                t.push(n + "=" + e)
            }), t.join("&")
        },
        queryStringToObj: function(e, t) {
            if (t = r.isFunction(t) ? t : function() {
                    return !0
                }, !("string" == typeof e || e instanceof String)) return {};
            var n = (e = e.trim().replace(/^\?/, "")).split("&"),
                i = {};
            return r.forEach(n, function(e) {
                var n = void 0,
                    r = void 0,
                    o = void 0;
                "" !== e && (n = (r = e.split("="))[0], o = r[1], t(n, o) && (i[n] = o))
            }), i
        },
        urlParts: function(e) {
            var t = e,
                n = void 0;
            return o && (i.setAttribute("href", t), t = i.href, /(.*):(\d+)/.test(i.host) && (n = i.host.split(":"), i.host = n[0], i.port = n[1])), i.setAttribute("href", t), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: r.isNotEmptyString(i.port) ? i.port : 80,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }
    };
    e.exports = s
}, function(e, t) {
    e.exports = DM.molFeTracking
}, function(e, t, n) {
    "use strict";
    var r = n(133),
        i = n(135),
        o = n(136),
        s = o.onScroll,
        a = o.onOrientationChange,
        l = n(139),
        u = l.calcPositionStyles,
        c = l.calcPaddingStyles;

    function d(e) {
        return new Promise(function(t, n) {
            e.src ? e.complete ? t() : (e.addEventListener("load", t), e.addEventListener("error", n)) : n()
        })
    }

    function p() {
        return window.PageCriteria && window.PageCriteria.isTablet
    }
    e.exports = {
        elementIsVisibleInViewPort: i,
        isMobile: function() {
            return window.PageCriteria && window.PageCriteria.isMobile && !p()
        },
        isTablet: p,
        onDocumentLoad: r,
        onOrientationChange: a,
        onScroll: s,
        waitForElementToLoad: function(e) {
            return new Promise(function(t) {
                switch (e.tagName.toLowerCase()) {
                    case "img":
                        t(d(e));
                        break;
                    case "video":
                        t();
                        break;
                    default:
                        t()
                }
            })
        },
        waitForImg: d,
        calcPositionStyles: u,
        calcPaddingStyles: c,
        nodeListToArray: function(e) {
            return [].map.call(e, function(e) {
                return e
            })
        }
    }
}, function(e, t, n) {
    var r = n(0),
        i = {
            defer: function(e) {
                setTimeout(e, 0)
            },
            iterator: function(e) {
                return function t(n) {
                    var r = function t() {
                        return e.length && e[n].apply(e, arguments), t.next()
                    };
                    return r.next = function() {
                        return n < e.length - 1 ? t(n + 1) : null
                    }, r
                }(0)
            },
            waterfall: function(e, t) {
                if (t = t || function() {}, r.isArray(e))
                    if (e.length) {
                        ! function e(n) {
                            return function(r) {
                                for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) s[a - 1] = arguments[a];
                                if (r) t.apply(void 0, [r].concat(s)), t = function() {};
                                else {
                                    var l = n.next();
                                    l ? s.push(e(l)) : s.push(t), i.defer(function() {
                                        n.apply(void 0, s)
                                    })
                                }
                            }
                        }(i.iterator(e))()
                    } else t();
                else {
                    var n = new Error("First argument to waterfall must be an array of functions");
                    t(n)
                }
            },
            when: function(e, t) {
                if (!r.isFunction(t)) throw new TypeError("async.when error: missing callback argument");
                var n = r.isFunction(e) ? e : function() {
                    return Boolean(e)
                };
                return function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                    var o = r.pop();
                    return n.apply(void 0, r) ? t.call.apply(t, [this].concat(r, [o])) : o.apply(void 0, [null].concat(r))
                }
            }
        };
    e.exports = i
}, function(e, t) {
    e.exports = function(e) {
        return !e.playlistClickToPlay && (e.forceFlyOutInProgress || e.autoplayInline || "playlistCounter" in e && e.playlistCounter > 0 || "autoplayIndex" in e && e.autoplayIndex > 0 || function(e) {
            var t = e.options().plugins;
            return Boolean(t) && Boolean(t["editorial-content"])
        }(e) || function(e) {
            var t = e.options().plugins;
            return Boolean(t) && Boolean(t["video-advertising-mode"])
        }(e))
    }
}, function(e, t) {
    e.exports = DM.molFePageMetadata
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(0),
        i = n(1),
        o = videojs.Button.extend({
            init: function(e, t) {
                videojs.Button.call(this, e, t), this.buttonPressed_ = !1
            }
        });
    o.prototype.createEl = function() {
        return videojs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-social-share-control vjs-control vjs-social-share-control-" + r.snakeCase(this.buttonName, "-"),
            innerHTML: '<div class="vjs-social-icon vjs-' + r.snakeCase(this.buttonName, "-") + '-icon "></div>'
        })
    }, o.prototype.getPopup = function() {}, o.prototype.onClick = function() {
        this.buttonPressed_ ? this.closePopup() : this.openPopup()
    }, o.prototype.openPopup = function() {
        var e = this.player(),
            t = this.getPopup();
        i.addClass(this.el_, "active"), this.buttonPressed_ = !0, e.wasPlaying_ = !e.paused(), t && (t.isOpen_ = !1, e.trigger("CloseButton.pressed"), this.buttonPressed_ = !0, this.currentPopup_ = t, t.one("FullWidthPopup.close", videojs.bind(this, o.prototype.closePopup)), e.one("play", videojs.bind(this, o.prototype.closePopup)), e.addChild(t), setTimeout(function() {
            e.hasStarted() && !e.paused() && e.pause(), t.isOpen_ = !0
        }, 0));
        var n = document.querySelector("#" + e.tagAttributes.id + " video");
        n && i.addClass(n, "hideVideoForSocialShare")
    }, o.prototype.closePopup = function() {
        var e = this.player(),
            t = this.currentPopup_;
        i.removeClass(this.el_, "active");
        var n = document.querySelector("#" + e.tagAttributes.id + " video");
        n && i.removeClass(n, "hideVideoForSocialShare"), this.buttonPressed_ = !1, t && t.isOpen_ && (t.isOpen_ = !1, e.removeChild(t), e.hasStarted() && e.wasPlaying_ && e.play())
    }, e.exports = o
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(56),
        o = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t);
                var n = new i(e, t);
                this.addChild(n), this.player_.on("CloseButton.pressed", videojs.bind(this, function() {
                    this.el_ && this.trigger("FullWidthPopup.close")
                }))
            }
        });
    o.prototype.createEl = function(e, t) {
        var n = (t.className || "") + " vjs-full-width-popup vjs-control";
        return videojs.Component.prototype.createEl.call(this, e || "div", r({}, t, {
            className: n
        }))
    }, e.exports = o
}, function(e, t) {
    e.exports = DM.molFeMiniLodash
}, function(e, t, n) {
    var r = n(7),
        i = n(102).http,
        o = n(4),
        s = n(0);
    e.exports = function(e) {
        var t = [];
        return e || (e = null), {
            update: function(t) {
                e = t
            },
            get: function(n) {
                function a(e, n) {
                    t.forEach(function(t) {
                        r.defer(function() {
                            t(e, n)
                        })
                    }), t.length = 0
                }! function(e) {
                    if (!s.isFunction(e)) throw new TypeError("dataSource Error: on get method, missing callback")
                }(n), t.push(n), s.isString(e) ? function(e) {
                    var n = e;
                    t.length > 1 || i.get(o.appendGeolocation(n), function(t, r) {
                        if (t) return a(t, null);
                        try {
                            return a(null, e = JSON.parse(r))
                        } catch (t) {
                            return e = n, a(t, null)
                        }
                    })
                }(e) : a(null, e)
            }
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = e._states && e._states.state && e._states.state.get();
        return ["adsWaiting", "adPlaying", "adPaused"].includes(t)
    }
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t)
        }
    });
    n.prototype.name = function() {
        return "MolModalWindowBackdrop"
    }, n.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-modal-window-backdrop"
        })
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t)
        }
    });
    n.prototype.name = function() {
        return "MolModalWindow"
    }, n.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-modal-window"
        })
    }, e.exports = n
}, function(e, t, n) {
    var r = n(3),
        i = n(0),
        o = n(145),
        s = function(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        },
        a = [],
        l = i.debounce(function() {
            a.forEach(function(e) {
                var t = e.element;
                setTimeout(function() {
                    var n = o(t) && !document.hidden;
                    n && !e.inViewport ? (e.inViewport = !0, t.dispatchEvent(s("viewport.enter"))) : !n && e.inViewport && (e.inViewport = !1, t.dispatchEvent(s("viewport.exit")))
                }, 0)
            })
        }, 100);
    e.exports = {
        check: function(e) {
            a.push({
                element: e,
                inViewport: !1
            });
            var t = window;
            r.mobile && (t = document.querySelector(".scrollable-content") || window), "complete" === document.readyState ? l() : (window.addEventListener("DOMContentLoaded", l, !1), window.addEventListener("load", l, !1)), t.addEventListener("scroll", l, !1), window.addEventListener("resize", l, !1), document.addEventListener("visibilitychange", l, !1)
        },
        checkedElements: a
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        n(45);
        var r = "undefined" === t ? window : t;
        e.exports = {
            isString: function(e) {
                return "string" == typeof e || e instanceof String
            },
            setImmediate: r.setImmediate
        }
    }).call(this, n(10))
}, function(e, t, n) {
    var r = n(11),
        i = n(55),
        o = r.extend();
    o.prototype.buttonName = "ShareButton", o.prototype.getPopup = function() {
        return new i(this.player_)
    }, o.prototype.name = function() {
        return "ShareButton"
    }, e.exports = o
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            n.d(t, "getDetails", function() {
                return vi
            }), n.d(t, "run", function() {
                return Qr
            }), n.d(t, "runWaterfall", function() {
                return pi
            }), n.d(t, "requestAd", function() {
                return ii
            }), n.d(t, "requestNextAd", function() {
                return si
            }), n.d(t, "vastSelectors", function() {
                return Te
            });
            var r = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            var i, o = (function(e) {
                    ! function(t) {
                        var n, r = Object.prototype,
                            i = r.hasOwnProperty,
                            o = "function" == typeof Symbol ? Symbol : {},
                            s = o.iterator || "@@iterator",
                            a = o.asyncIterator || "@@asyncIterator",
                            l = o.toStringTag || "@@toStringTag",
                            u = t.regeneratorRuntime;
                        if (u) e.exports = u;
                        else {
                            (u = t.regeneratorRuntime = e.exports).wrap = b;
                            var c = "suspendedStart",
                                d = "suspendedYield",
                                p = "executing",
                                h = "completed",
                                f = {},
                                v = {};
                            v[s] = function() {
                                return this
                            };
                            var m = Object.getPrototypeOf,
                                y = m && m(m(P([])));
                            y && y !== r && i.call(y, s) && (v = y);
                            var g = T.prototype = w.prototype = Object.create(v);
                            j.prototype = g.constructor = T, T.constructor = j, T[l] = j.displayName = "GeneratorFunction", u.isGeneratorFunction = function(e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === j || "GeneratorFunction" === (t.displayName || t.name))
                            }, u.mark = function(e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, T) : (e.__proto__ = T, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(g), e
                            }, u.awrap = function(e) {
                                return {
                                    __await: e
                                }
                            }, E(_.prototype), _.prototype[a] = function() {
                                return this
                            }, u.AsyncIterator = _, u.async = function(e, t, n, r) {
                                var i = new _(b(e, t, n, r));
                                return u.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                                    return e.done ? e.value : i.next()
                                })
                            }, E(g), g[l] = "Generator", g[s] = function() {
                                return this
                            }, g.toString = function() {
                                return "[object Generator]"
                            }, u.keys = function(e) {
                                var t = [];
                                for (var n in e) t.push(n);
                                return t.reverse(),
                                    function n() {
                                        for (; t.length;) {
                                            var r = t.pop();
                                            if (r in e) return n.value = r, n.done = !1, n
                                        }
                                        return n.done = !0, n
                                    }
                            }, u.values = P, x.prototype = {
                                constructor: x,
                                reset: function(e) {
                                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(k), !e)
                                        for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                                },
                                stop: function() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type) throw e.arg;
                                    return this.rval
                                },
                                dispatchException: function(e) {
                                    if (this.done) throw e;
                                    var t = this;

                                    function r(r, i) {
                                        return a.type = "throw", a.arg = e, t.next = r, i && (t.method = "next", t.arg = n), !!i
                                    }
                                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                        var s = this.tryEntries[o],
                                            a = s.completion;
                                        if ("root" === s.tryLoc) return r("end");
                                        if (s.tryLoc <= this.prev) {
                                            var l = i.call(s, "catchLoc"),
                                                u = i.call(s, "finallyLoc");
                                            if (l && u) {
                                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                            } else if (l) {
                                                if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
                                            } else {
                                                if (!u) throw new Error("try statement without catch or finally");
                                                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                abrupt: function(e, t) {
                                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                        var r = this.tryEntries[n];
                                        if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                            var o = r;
                                            break
                                        }
                                    }
                                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                    var s = o ? o.completion : {};
                                    return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(s)
                                },
                                complete: function(e, t) {
                                    if ("throw" === e.type) throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                                },
                                finish: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), k(n), f
                                    }
                                },
                                catch: function(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var n = this.tryEntries[t];
                                        if (n.tryLoc === e) {
                                            var r = n.completion;
                                            if ("throw" === r.type) {
                                                var i = r.arg;
                                                k(n)
                                            }
                                            return i
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                delegateYield: function(e, t, r) {
                                    return this.delegate = {
                                        iterator: P(e),
                                        resultName: t,
                                        nextLoc: r
                                    }, "next" === this.method && (this.arg = n), f
                                }
                            }
                        }

                        function b(e, t, n, r) {
                            var i = t && t.prototype instanceof w ? t : w,
                                o = Object.create(i.prototype),
                                s = new x(r || []);
                            return o._invoke = function(e, t, n) {
                                var r = c;
                                return function(i, o) {
                                    if (r === p) throw new Error("Generator is already running");
                                    if (r === h) {
                                        if ("throw" === i) throw o;
                                        return I()
                                    }
                                    for (n.method = i, n.arg = o;;) {
                                        var s = n.delegate;
                                        if (s) {
                                            var a = C(s, n);
                                            if (a) {
                                                if (a === f) continue;
                                                return a
                                            }
                                        }
                                        if ("next" === n.method) n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if (r === c) throw r = h, n.arg;
                                            n.dispatchException(n.arg)
                                        } else "return" === n.method && n.abrupt("return", n.arg);
                                        r = p;
                                        var l = A(e, t, n);
                                        if ("normal" === l.type) {
                                            if (r = n.done ? h : d, l.arg === f) continue;
                                            return {
                                                value: l.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === l.type && (r = h, n.method = "throw", n.arg = l.arg)
                                    }
                                }
                            }(e, n, s), o
                        }

                        function A(e, t, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, n)
                                }
                            } catch (e) {
                                return {
                                    type: "throw",
                                    arg: e
                                }
                            }
                        }

                        function w() {}

                        function j() {}

                        function T() {}

                        function E(e) {
                            ["next", "throw", "return"].forEach(function(t) {
                                e[t] = function(e) {
                                    return this._invoke(t, e)
                                }
                            })
                        }

                        function _(e) {
                            var t;
                            this._invoke = function(n, r) {
                                function o() {
                                    return new Promise(function(t, o) {
                                        ! function t(n, r, o, s) {
                                            var a = A(e[n], e, r);
                                            if ("throw" !== a.type) {
                                                var l = a.arg,
                                                    u = l.value;
                                                return u && "object" == typeof u && i.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) {
                                                    t("next", e, o, s)
                                                }, function(e) {
                                                    t("throw", e, o, s)
                                                }) : Promise.resolve(u).then(function(e) {
                                                    l.value = e, o(l)
                                                }, s)
                                            }
                                            s(a.arg)
                                        }(n, r, t, o)
                                    })
                                }
                                return t = t ? t.then(o, o) : o()
                            }
                        }

                        function C(e, t) {
                            var r = e.iterator[t.method];
                            if (r === n) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = n, C(e, t), "throw" === t.method)) return f;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return f
                            }
                            var i = A(r, e.iterator, t.arg);
                            if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, f;
                            var o = i.arg;
                            return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                        }

                        function S(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }

                        function k(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }

                        function x(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(S, this), this.reset(!0)
                        }

                        function P(e) {
                            if (e) {
                                var t = e[s];
                                if (t) return t.call(e);
                                if ("function" == typeof e.next) return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        o = function t() {
                                            for (; ++r < e.length;)
                                                if (i.call(e, r)) return t.value = e[r], t.done = !1, t;
                                            return t.value = n, t.done = !0, t
                                        };
                                    return o.next = o
                                }
                            }
                            return {
                                next: I
                            }
                        }

                        function I() {
                            return {
                                value: n,
                                done: !0
                            }
                        }
                    }(function() {
                        return this
                    }() || Function("return this")())
                }(i = {
                    exports: {}
                }, i.exports), i.exports),
                s = function() {
                    return this
                }() || Function("return this")(),
                a = s.regeneratorRuntime && Object.getOwnPropertyNames(s).indexOf("regeneratorRuntime") >= 0,
                l = a && s.regeneratorRuntime;
            s.regeneratorRuntime = void 0;
            var u = o;
            if (a) s.regeneratorRuntime = l;
            else try {
                delete s.regeneratorRuntime
            } catch (e) {
                s.regeneratorRuntime = void 0
            }
            var c, d, p, h, f = u,
                v = {
                    clickThrough: "clickThrough",
                    closeLinear: "closeLinear",
                    complete: "complete",
                    error: "error",
                    exitFullscreen: "exitFullscreen",
                    firstQuartile: "firstQuartile",
                    fullscreen: "fullscreen",
                    iconClick: "iconClick",
                    iconView: "iconView",
                    impression: "impression",
                    midpoint: "midpoint",
                    mute: "mute",
                    otherAdInteraction: "otherAdInteraction",
                    pause: "pause",
                    playerCollapse: "playerCollapse",
                    playerExpand: "playerExpand",
                    progress: "progress",
                    resume: "resume",
                    rewind: "rewind",
                    skip: "skip",
                    start: "start",
                    thirdQuartile: "thirdQuartile",
                    timeSpentViewing: "timeSpentViewing",
                    unmute: "unmute"
                },
                m = "acceptInvitation",
                y = "adCollapse",
                g = "creativeView",
                b = {
                    acceptInvitation: m,
                    adCollapse: y,
                    close: "close",
                    creativeView: g
                },
                A = [new RegExp("^<h3[^>]*>This page contains the following errors:</h3><div[^>]*>(.+?)\n?</div>"), new RegExp("^(.+)\n")],
                w = function(e) {
                    var t, n, r, i, o = (t = e, n = new XMLSerializer, Array.prototype.map.call(t.childNodes, function(e) {
                        return n.serializeToString(e)
                    }).join(""));
                    for (r = 0; r < A.length; r++)
                        if (i = A[r].exec(o)) return i[1]
                },
                j = function(e) {
                    return function(e) {
                        var t;
                        if (null === e) throw new Error("Parse error");
                        var n = function(e) {
                            return "parsererror" === e.documentElement.tagName && "http://www.mozilla.org/newlayout/xml/parsererror.xml" === e.documentElement.namespaceURI ? e.documentElement : ("xml" === e.documentElement.tagName || "html" === e.documentElement.tagName) && e.documentElement.childNodes && e.documentElement.childNodes.length > 0 && "parsererror" === e.documentElement.childNodes[0].nodeName ? e.documentElement.childNodes[0] : "html" === e.documentElement.tagName && e.documentElement.childNodes && e.documentElement.childNodes.length > 0 && "body" === e.documentElement.childNodes[0].nodeName && e.documentElement.childNodes[0].childNodes && e.documentElement.childNodes[0].childNodes.length && "parsererror" === e.documentElement.childNodes[0].childNodes[0].nodeName ? e.documentElement.childNodes[0].childNodes[0] : void 0
                        }(e);
                        if (void 0 !== n) throw t = w(n) || "Parse error", new Error(t)
                    }(e), e
                },
                T = "document",
                E = "element",
                _ = "text",
                C = function e(t) {
                    var n = function(e) {
                            if (1 === e.nodeType) return E;
                            if (3 === e.nodeType || 4 === e.nodeType) return _;
                            if (9 === e.nodeType) return T;
                            throw new Error("Unsupported element type")
                        }(t),
                        r = {
                            type: n
                        };
                    if (n === E) {
                        if (r.name = t.nodeName.toLowerCase(), t.attributes.length > 0) {
                            r.attributes = {};
                            var i = !0,
                                o = !1,
                                s = void 0;
                            try {
                                for (var a, l = Array.from(t.attributes)[Symbol.iterator](); !(i = (a = l.next()).done); i = !0) {
                                    var u = a.value;
                                    r.attributes[u.nodeName] = u.nodeValue
                                }
                            } catch (e) {
                                o = !0, s = e
                            } finally {
                                try {
                                    !i && l.return && l.return()
                                } finally {
                                    if (o) throw s
                                }
                            }
                        }
                    } else n === _ && (r.text = t.nodeValue.replace("<![CDATA[", "").replace("]]>", "").trim());
                    if (t.hasChildNodes()) {
                        var c = Array.from(t.childNodes).filter(function(e) {
                                return [1, 3, 4].includes(e.nodeType)
                            }),
                            d = [];
                        r.elements = d;
                        var p = !0,
                            h = !1,
                            f = void 0;
                        try {
                            for (var v, m = c[Symbol.iterator](); !(p = (v = m.next()).done); p = !0) {
                                var y = e(v.value);
                                (y.type !== _ || y.text.length > 0) && d.push(y)
                            }
                        } catch (e) {
                            h = !0, f = e
                        } finally {
                            try {
                                !p && m.return && m.return()
                            } finally {
                                if (h) throw f
                            }
                        }
                    }
                    return r
                },
                S = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).elements;
                    return void 0 === e ? [] : e
                },
                k = function(e, t) {
                    return S(e).find(function(e) {
                        var n = e.name;
                        return (void 0 === n ? "" : n).toUpperCase() === t.toUpperCase()
                    })
                },
                x = function(e, t) {
                    return "string" == typeof t ? function(e, t) {
                        return S(e).filter(function(e) {
                            var n = e.name;
                            return (void 0 === n ? "" : n).toUpperCase() === t.toUpperCase()
                        })
                    }(e, t) : S(e)
                },
                P = function(e) {
                    return S(e)[0] || null
                },
                I = function(e) {
                    var t = e && P(e);
                    return t && t.text || null
                },
                M = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).attributes;
                    return void 0 === e ? {} : e
                },
                O = function(e, t) {
                    return M(e)[t]
                },
                B = new DOMParser,
                L = function(e) {
                    return function(e, t) {
                        var n = e.parseFromString(t, "application/xml");
                        return j(n), C(n)
                    }(B, e)
                },
                D = function(e) {
                    if ("string" == typeof e) {
                        var t = e.match(/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/);
                        if (t) {
                            var n = (o = t[1], 60 * parseInt(o, 10) * 60 * 1e3 + (i = t[2], 60 * parseInt(i, 10) * 1e3) + (r = t[3], 1e3 * parseInt(r, 10)) + parseInt(t[5] || 0, 10));
                            if (!isNaN(n)) return n
                        }
                    }
                    var r, i, o;
                    return null
                },
                N = function(e) {
                    return function(e) {
                        return /^\d+(\.\d+)?%$/g.test(e)
                    }(e) ? e : D(e)
                },
                F = function(e) {
                    var t = P(e),
                        n = t && k(t, "creatives");
                    return n && x(n).find(function(e) {
                        return k(e, "linear")
                    }) || null
                },
                R = function(e, t) {
                    var n = e && F(e);
                    if (n) {
                        var r = k(n, "Linear"),
                            i = r && k(r, "TrackingEvents"),
                            o = i && x(i, "Tracking");
                        if (o && o.length > 0) {
                            var s = o.map(function(e) {
                                var t = M(e),
                                    n = t.event,
                                    r = t.offset,
                                    i = I(e);
                                return {
                                    event: n,
                                    offset: r && N(r),
                                    uri: i
                                }
                            });
                            if (!t) return s;
                            var a = s.filter(function(e) {
                                return e.event === t
                            });
                            if (a.length > 0) return a
                        }
                    }
                    return null
                },
                H = function(e, t) {
                    var n = e && F(e);
                    if (n) {
                        var r = k(n, "NonLinearAds"),
                            i = r && k(r, "TrackingEvents"),
                            o = i && x(i, "Tracking");
                        if (o && o.length > 0) {
                            var s = o.map(function(e) {
                                return {
                                    event: M(e).event,
                                    uri: I(e)
                                }
                            });
                            if (!t) return s;
                            var a = s.filter(function(e) {
                                return e.event === t
                            });
                            if (a.length > 0) return a
                        }
                    }
                    return null
                },
                V = function(e) {
                    return function() {
                        var t = e.apply(this, arguments);
                        return new Promise(function(e, n) {
                            return function r(i, o) {
                                try {
                                    var s = t[i](o),
                                        a = s.value
                                } catch (e) {
                                    return void n(e)
                                }
                                if (!s.done) return Promise.resolve(a).then(function(e) {
                                    r("next", e)
                                }, function(e) {
                                    r("throw", e)
                                });
                                e(a)
                            }("next")
                        })
                    }
                },
                U = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                W = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                q = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                z = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                G = function e(t, n, r) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(t);
                        return null === o ? void 0 : e(o, n, r)
                    }
                    if ("value" in i) return i.value;
                    var s = i.get;
                    return void 0 !== s ? s.call(r) : void 0
                },
                X = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                },
                Q = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                Y = function(e) {
                    return Array.isArray(e) ? e : Array.from(e)
                },
                K = function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                    return Array.from(e)
                },
                Z = function(e) {
                    var t = ("" + e).match(/\d+/g);
                    return parseInt(t[0], 10)
                },
                J = function(e) {
                    return /\d+/.test(e) ? Z(e) : e
                },
                $ = function(e) {
                    var t = e && F(e),
                        n = t && k(t, "linear"),
                        r = n && k(n, "Icons"),
                        i = r && x(r, "Icon");
                    return i && i.length > 0 ? i.map(function(e) {
                        return z({}, function(e) {
                            var t = M(e),
                                n = t.duration,
                                r = t.height,
                                i = t.offset,
                                o = t.program,
                                s = t.pxratio,
                                a = t.width,
                                l = t.xPosition,
                                u = void 0 === l ? "right" : l,
                                c = t.yPosition,
                                d = void 0 === c ? "top" : c;
                            return {
                                duration: n && D(n),
                                height: r && Z(r),
                                offset: i && D(i),
                                program: o,
                                pxratio: s && parseInt(s, 10),
                                width: a && Z(a),
                                xPosition: u && J(u),
                                yPosition: d && J(d)
                            }
                        }(e), function(e) {
                            var t = k(e, "StaticResource"),
                                n = k(e, "HTMLResource"),
                                r = k(e, "IFrameResource");
                            return t ? {
                                staticResource: I(t)
                            } : n ? {
                                htmlResource: I(n)
                            } : r ? {
                                iFrameResource: I(r)
                            } : {
                                staticResource: I(e)
                            }
                        }(e), function(e) {
                            var t = x(e, "IconViewTracking").map(function(e) {
                                return I(e)
                            });
                            return 0 === t.length ? {} : {
                                iconViewTracking: t
                            }
                        }(e), function(e) {
                            var t = k(e, "IconClicks"),
                                n = t && k(t, "IconClickThrough"),
                                r = t && x(t, "IconClickTracking").map(function(e) {
                                    return I(e)
                                });
                            return {
                                iconClickThrough: n && I(n),
                                iconClickTracking: r && r.length > 0 ? r : void 0
                            }
                        }(e))
                    }) : null
                },
                ee = function(e) {
                    return "string" == typeof e ? "true" === e : Boolean(e)
                },
                te = function(e, t) {
                    var n = parseInt(O(e, "sequence"), 10),
                        r = parseInt(O(t, "sequence"), 10);
                    return n < r ? -1 : n > r ? 1 : 0
                },
                ne = function(e) {
                    var t = e && k(e, "VAST"),
                        n = t && x(t, "Ad");
                    return n && n.length > 0 ? n : []
                },
                re = function(e) {
                    var t = e && k(e, "VAST");
                    if (t) {
                        var n = k(t, "Error");
                        if (n) return I(n)
                    }
                    return null
                },
                ie = function(e) {
                    var t = parseInt(O(e, "sequence"), 10);
                    return "number" != typeof t || isNaN(t) ? null : t
                },
                oe = function(e) {
                    return Boolean(ie(e))
                },
                se = function(e) {
                    var t = ne(e);
                    return Array.isArray(t) && t.filter(oe).length > 1
                },
                ae = function(e) {
                    var t = ne(e);
                    return Array.isArray(t) && t.length > 0 ? se(e) ? t.filter(oe).sort(te)[0] : t[0] : null
                },
                le = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Boolean(k(e || {}, "Wrapper"))
                },
                ue = function(e) {
                    return Boolean(k(e || {}, "Inline"))
                },
                ce = function(e) {
                    var t = k(e, "Wrapper"),
                        n = t && k(t, "VastAdTagUri");
                    return n && I(n) || null
                },
                de = function(e) {
                    var t = M(k(e, "Wrapper")),
                        n = t.allowMultipleAds,
                        r = t.fallbackOnNoAd,
                        i = t.followAdditionalWrappers,
                        o = {};
                    return n && (o.allowMultipleAds = ee(n)), r && (o.fallbackOnNoAd = ee(r)), i && (o.followAdditionalWrappers = ee(i)), o
                },
                pe = function(e) {
                    var t = e && P(e);
                    if (t) {
                        var n = k(t, "Error");
                        if (n) return I(n)
                    }
                    return null
                },
                he = function(e) {
                    var t = e && P(e);
                    if (t) {
                        var n = k(t, "Impression");
                        if (n) return I(n)
                    }
                    return null
                },
                fe = function(e) {
                    var t = e && F(e);
                    if (t) {
                        var n = k(t, "UniversalAdId"),
                            r = n && I(n) || null,
                            i = k(t, "Linear"),
                            o = k(i, "MediaFiles"),
                            s = o && x(o, "MediaFile");
                        if (s && s.length > 0) return s.map(function(e) {
                            var t = I(e),
                                n = M(e),
                                i = n.apiFramework,
                                o = n.bitrate,
                                s = n.codec,
                                a = n.delivery,
                                l = n.height,
                                u = n.id,
                                c = n.maintainAspectRatio,
                                d = n.maxBitrate,
                                p = n.minBitrate,
                                h = n.scalable,
                                f = n.type,
                                v = n.width;
                            return {
                                apiFramework: i,
                                bitrate: o,
                                codec: s,
                                delivery: a,
                                height: l,
                                id: u,
                                maintainAspectRatio: c,
                                maxBitrate: d,
                                minBitrate: p,
                                scalable: h,
                                src: t,
                                type: f,
                                universalAdId: r,
                                width: v
                            }
                        })
                    }
                    return null
                },
                ve = function(e) {
                    var t = e && F(e);
                    if (t) {
                        var n = k(t, "Linear"),
                            r = k(n, "MediaFiles"),
                            i = r && x(r, "InteractiveCreativeFile");
                        if (i && i.length > 0) return i.map(function(e) {
                            var t = M(e),
                                n = t.apiFramework,
                                r = t.type;
                            return {
                                apiFramework: n,
                                src: I(e),
                                type: r
                            }
                        })
                    }
                    return null
                },
                me = function(e) {
                    var t = ve(e);
                    if (t) return t;
                    var n = fe(e);
                    return n && (t = n.filter(function(e) {
                        var t = e.apiFramework;
                        return "vpaid" === (void 0 === t ? "" : t).toLowerCase()
                    }).map(function(e) {
                        return {
                            apiFramework: e.apiFramework,
                            src: e.src,
                            type: e.type
                        }
                    })).length > 0 ? t : null
                },
                ye = function(e) {
                    var t = e && F(e),
                        n = t && k(t, "Linear"),
                        r = n && k(n, "VideoClicks");
                    return r || null
                },
                ge = function(e) {
                    var t = ye(e),
                        n = t && k(t, "ClickThrough");
                    return n ? I(n) : null
                },
                be = function(e) {
                    var t = ye(e),
                        n = t && x(t, "ClickTracking");
                    return n && n.length > 0 ? n.map(function(e) {
                        return I(e)
                    }) : null
                },
                Ae = function(e) {
                    var t = ye(e),
                        n = t && x(t, "CustomClick");
                    return n && n.length > 0 ? n.map(function(e) {
                        return I(e)
                    }) : null
                },
                we = function(e) {
                    var t = e && F(e),
                        n = t && k(t, "Linear"),
                        r = n && O(n, "skipoffset");
                    return r ? N(r) : null
                },
                je = function(e) {
                    var t = function(e) {
                        var t = /<Linear([\s\S]*)<\/Linear/gm.exec(e);
                        return t && t[1]
                    }(e);
                    return {
                        AdParameters: t && function(e) {
                            var t = /<AdParameters[\s\w="]*>([\s\S]*)<\/AdParameters>/gm.exec(e);
                            return t && t[1].replace(/[\n\s]*<!\[CDATA\[[\n\s]*/, "").replace(/[\n\s]*\]\]>[\n\s]*$/, "").replace(/\]\]\]\]><!\[CDATA\[>/, "]]>").trim()
                        }(t),
                        xmlEncoded: t && function(e) {
                            var t = /<AdParameters[\s]*xmlEncoded="(.*?)">/gim.exec(e);
                            return Boolean(t) && "true" === t[1]
                        }(t)
                    }
                },
                Te = Object.freeze({
                    getAds: ne,
                    getVastErrorURI: re,
                    getPodAdSequence: ie,
                    isPodAd: oe,
                    hasAdPod: se,
                    isAdPod: function() {
                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function(e) {
                            return e.parsedXML
                        }).some(se)
                    },
                    getFirstAd: ae,
                    isWrapper: le,
                    isInline: ue,
                    getVASTAdTagURI: ce,
                    getWrapperOptions: de,
                    getAdErrorURI: pe,
                    getImpressionUri: he,
                    getMediaFiles: fe,
                    getInteractiveCreativeFiles: ve,
                    getInteractiveFiles: me,
                    getClickThrough: ge,
                    getClickTracking: be,
                    getCustomClick: Ae,
                    getSkipOffset: we,
                    getCreativeData: je,
                    getIcons: $,
                    getLinearTrackingEvents: R,
                    getNonLinearTrackingEvents: H
                }),
                Ee = function(e) {
                    var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = e,
                        o = (t = r, n = {}, Object.keys(t).forEach(function(e) {
                            n[e.toUpperCase()] = t[e]
                        }), n);
                    return Boolean(o.CACHEBUSTING) || (o.CACHEBUSTING = Math.round(1e10 * Math.random())), Boolean(o.TIMESTAMP) || (o.TIMESTAMP = (new Date).toISOString()), Object.keys(o).forEach(function(e) {
                        var t = encodeURIComponent(o[e]);
                        i = i.replace(new RegExp("\\[" + e + "\\]", "gm"), t)
                    }), i
                },
                _e = function(e, t) {
                    var n = new Image;
                    return n.src = Ee(e, t), n
                },
                Ce = function(e, t) {
                    var n = t.errorCode,
                        r = t.tracker,
                        i = void 0 === r ? _e : r;
                    e.forEach(function(e) {
                        var t = e.ad,
                            r = e.parsedXML,
                            o = pe(t) || re(r);
                        Boolean(o) && i(o, {
                            errorCode: n
                        })
                    })
                },
                Se = function(e) {
                    return function(t, n) {
                        var r = n.data,
                            i = n.tracker,
                            o = void 0 === i ? _e : i;
                        t.forEach(function(t) {
                            var n = t.ad,
                                i = e(n);
                            if (Boolean(i)) switch (!0) {
                                case "string" == typeof i:
                                    o(i, r);
                                    break;
                                case Array.isArray(i):
                                    i.map(function(e) {
                                        var t = e.uri;
                                        return o(t, r)
                                    })
                            }
                        })
                    }
                },
                ke = function(e) {
                    return function(t) {
                        return R(t, e)
                    }
                },
                xe = (q(c = {}, "clickThrough", Se(function(e) {
                    var t = [],
                        n = be(e),
                        r = Ae(e);
                    return Array.isArray(n) && n.length > 0 && t.push.apply(t, K(n.map(function(e) {
                        return {
                            uri: e
                        }
                    }))), Array.isArray(r) && r.length > 0 && t.push.apply(t, K(r.map(function(e) {
                        return {
                            uri: e
                        }
                    }))), t
                })), q(c, "closeLinear", Se(ke("closeLinear"))), q(c, "complete", Se(ke("complete"))), q(c, "error", Ce), q(c, "exitFullscreen", Se(ke("exitFullscreen"))), q(c, "firstQuartile", Se(ke("firstQuartile"))), q(c, "fullscreen", Se(ke("fullscreen"))), q(c, "iconClick", function(e, t) {
                    var n = t.data,
                        r = t.tracker,
                        i = void 0 === r ? _e : r,
                        o = n.iconClickTracking;
                    if (Array.isArray(o)) {
                        var s = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var u, c = o[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) i(u.value, z({}, n))
                        } catch (e) {
                            a = !0, l = e
                        } finally {
                            try {
                                !s && c.return && c.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                    }
                }), q(c, "iconView", function(e, t) {
                    var n = t.data,
                        r = t.tracker,
                        i = void 0 === r ? _e : r,
                        o = n.iconViewTracking;
                    if (Array.isArray(o)) {
                        var s = !0,
                            a = !1,
                            l = void 0;
                        try {
                            for (var u, c = o[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) i(u.value, z({}, n))
                        } catch (e) {
                            a = !0, l = e
                        } finally {
                            try {
                                !s && c.return && c.return()
                            } finally {
                                if (a) throw l
                            }
                        }
                    }
                }), q(c, "impression", Se(he)), q(c, "midpoint", Se(ke("midpoint"))), q(c, "mute", Se(ke("mute"))), q(c, "pause", Se(ke("pause"))), q(c, "playerCollapse", Se(ke("playerCollapse"))), q(c, "playerExpand", Se(ke("playerExpand"))), q(c, "progress", function(e, t) {
                    var n = t.data,
                        r = t.tracker,
                        i = void 0 === r ? _e : r,
                        o = n.progressUri;
                    Boolean(o) && i(o, z({}, n))
                }), q(c, "resume", Se(ke("resume"))), q(c, "rewind", Se(ke("rewind"))), q(c, "skip", Se(ke("skip"))), q(c, "start", Se(ke("start"))), q(c, "thirdQuartile", Se(ke("thirdQuartile"))), q(c, "unmute", Se(ke("unmute"))), c),
                Pe = function(e) {
                    return function(t) {
                        return H(t, e)
                    }
                },
                Ie = (q(d = {}, m, Se(Pe(m))), q(d, y, Se(Pe(y))), q(d, "close", Se(Pe("close"))), q(d, g, Se(Pe(g))), d),
                Me = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.async,
                        r = void 0 !== n && n,
                        i = t.defer,
                        o = void 0 !== i && i,
                        s = t.type,
                        a = void 0 === s ? "text/javascript" : s,
                        l = t.placeholder;
                    if (!e) throw new TypeError('Missing required "src" parameter');
                    return new Promise(function(t, n) {
                        var i = document.createElement("script"),
                            s = l;
                        i.type = a, i.async = r, i.defer = o, i.onerror = function() {
                            return n(new URIError("The script " + e + " is not accessible."))
                        }, i.onload = function() {
                            return t(i)
                        }, s || (s = document.currentScript ? document.currentScript.parentNode : document.head), i.src = e, s.appendChild(i)
                    })
                },
                Oe = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document).createElement("VIDEO");
                    return e.style.width = "100%", e.style.height = "100%", e
                },
                Be = function() {
                    var e = document.createElement("DIV");
                    return e.classList.add("mol-video-ad-container"), e.style.width = "100%", e.style.height = "100%", e
                },
                Le = function(e) {
                    return e.contentDocument || e.contentWindow && e.contentWindow.document
                },
                De = "srcdoc" in document.createElement("iframe"),
                Ne = function() {
                    var e = document.createElement("IFRAME");
                    return e.sandbox = "allow-forms allow-popups allow-scripts allow-same-origin", e.style.margin = "0", e.style.padding = "0", e.style.border = "none", e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e
                },
                Fe = function(e, t) {
                    return new Promise(function(n, r) {
                        var i, o = function(e, t) {
                                return "<!DOCTYPE html>\n<html>\n  <head><meta charset='UTF-8'></head>\n  <body style='margin:0;padding:0'>\n  <script type='text/javascript'>window.parent.postMessage('" + e + "_ready', '" + t + "');<\/script>\n  </body>\n</html>"
                            }(t, (i = window.location).origin ? i.origin : i.protocol + "//" + i.hostname + (i.port ? ":" + i.port : "")),
                            s = void 0;
                        try {
                            (s = Ne()).src = "about:blank", e.appendChild(s), Le(s).write(o)
                        } catch (t) {
                            e.removeChild(s), De ? ((s = Ne()).src = "about:srcdoc", s.srcdoc = o, e.appendChild(s)) : r(t)
                        }
                        window.addEventListener("message", function e(r) {
                            r.data === t + "_ready" && (window.removeEventListener("message", e), n(s))
                        }, !1)
                    })
                },
                Re = (p = "videoAdContainer", h = -1, function() {
                    return p + "_" + ++h
                }),
                He = Symbol("hidden"),
                Ve = function() {
                    function e(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (U(this, e), this[He] = {
                                destroyed: !1,
                                iframe: null,
                                readyPromise: null
                            }, !(t instanceof Element)) throw new TypeError("placeholder is not an Element");
                        this[He].id = Re(), this.element = Be(), this.executionContext = null, this.isOriginalVideoElement = Boolean(n), n ? this.videoElement = n : (this.videoElement = Oe(), this.element.appendChild(this.videoElement)), t.appendChild(this.element)
                    }
                    return W(e, [{
                        key: "addScript",
                        value: function() {
                            var e = V(f.mark(function e(t) {
                                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.isDestroyed()) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("VideoAdContainer has been destroyed");
                                        case 2:
                                            if (this[He].iframe) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 5, Fe(this.element, this[He].id);
                                        case 5:
                                            this[He].iframe = e.sent, this.executionContext = this[He].iframe.contentWindow;
                                        case 7:
                                            return n = Le(this[He].iframe).body, e.abrupt("return", Me(t, z({
                                                placeholder: n
                                            }, r)));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "destroy",
                        value: function() {
                            this.element.parentNode.removeChild(this.element), this[He].destroyed = !0
                        }
                    }, {
                        key: "isDestroyed",
                        value: function() {
                            return this[He].destroyed
                        }
                    }]), e
                }(),
                Ue = function(e, t) {
                    if (!e) throw new TypeError("placeholder is required");
                    return new Ve(e, t)
                },
                We = function(e, t) {
                    var n = t.src,
                        r = t.type;
                    return e.canPlayType(r || function(e) {
                        var t = e.match(/\.([^.\/?]+)(\?[^\/]+)?$/i),
                            n = t && t[1];
                        return {
                            "3gp": "video/3gpp",
                            avi: "video/x-msvideo",
                            flv: "video/x-flv",
                            m3u8: "application/x-mpegURL",
                            m4v: "video/mp4",
                            mov: "video/quicktime",
                            mp4: "video/mp4",
                            mpd: "application/dash+xml",
                            ogv: "video/ogg",
                            ts: "video/MP2T",
                            webm: "video/webm",
                            wmv: "video/x-ms-wmv"
                        } [n] || "video/" + n
                    }(n))
                },
                qe = function(e, t, n) {
                    var r = n.getBoundingClientRect(),
                        i = fe(e);
                    return i ? function(e, t) {
                        var n = t.width;
                        return e.slice(0).sort(function(e, t) {
                            return Math.abs(n - (e.width || 0)) - Math.abs(n - (t.width || 0))
                        })
                    }(i.filter(function(e) {
                        return We(t, e)
                    }), r)[0] : null
                },
                ze = function(e, t, n) {
                    var r = function r() {
                        return e.removeEventListener(t, r), n.apply(void 0, arguments)
                    };
                    return e.addEventListener(t, r),
                        function() {
                            e.removeEventListener(t, r)
                        }
                },
                Ge = v.progress,
                Xe = function(e, t) {
                    return function() {
                        try {
                            e.apply(void 0, arguments)
                        } catch (e) {
                            t && t.error(e)
                        }
                    }
                },
                Qe = v.fullscreen,
                Ye = v.exitFullscreen,
                Ke = v.playerCollapse,
                Ze = v.playerExpand,
                Je = v.pause,
                $e = v.resume,
                et = v.rewind,
                tt = v.skip,
                nt = function() {
                    var e = document.createElement("BUTTON");
                    return e.classList.add("mol-vast-skip-control"), e.type = "button", e.innerHTML = "skip", e.style.position = "absolute", e.style.bottom = "15px", e.style.right = "15px", e
                },
                rt = v.error,
                it = "volumeChanged",
                ot = "finish",
                st = "adProgress",
                at = v.complete,
                lt = v.firstQuartile,
                ut = v.midpoint,
                ct = v.start,
                dt = v.thirdQuartile,
                pt = function(e, t) {
                    return 100 * e / t
                },
                ht = function(e, t) {
                    return pt(e, t) >= 99
                },
                ft = v.mute,
                vt = v.unmute,
                mt = function(e) {
                    return e.muted || 0 === e.volume
                },
                yt = v.impression,
                gt = function(e, t) {
                    for (var n = String(e); n.length < t;) n = "0" + n;
                    return n
                },
                bt = v.progress,
                At = function(e) {
                    return 1e3 * e
                },
                wt = function(e) {
                    var t = e.offset,
                        n = e.uri,
                        r = "number" == typeof t || function(e) {
                            return /^\d+(\.\d+)?%$/g.test(e) && !isNaN(parseFloat(e))
                        }(t),
                        i = "string" == typeof n && n.length > 0;
                    return r && i
                },
                jt = function(e, t) {
                    return "number" == typeof e ? e : parseFloat(e) / 100 * t
                },
                Tt = v.clickThrough,
                Et = [function(e, t) {
                    var n = e.videoElement,
                        r = e.element,
                        i = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).clickThroughUrl,
                        o = r || n.parentNode,
                        s = document.createElement("A");
                    return s.classList.add("mol-vast-clickthrough"), s.style.width = "100%", s.style.height = "100%", s.style.position = "absolute", s.style.left = 0, s.style.top = 0, i && (s.href = i, s.target = "_blank"), s.onclick = function(e) {
                            void 0 !== Event.prototype.stopPropagation && e.stopPropagation(), n.paused ? n.play() : (n.pause(), t(Tt))
                        }, o.appendChild(s),
                        function() {
                            return o.removeChild(s)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = function() {
                            t(rt, n.error)
                        };
                    return n.addEventListener("error", r),
                        function() {
                            n.removeEventListener("error", r)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = ["webkitfullscreenchange", "mozfullscreenchange", "fullscreenchange", "MSFullscreenChange"],
                        i = !1,
                        o = function() {
                            (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null) === n ? (i = !0, t(Ze), t(Qe)) : i && (i = !1, t(Ke), t(Ye))
                        },
                        s = !0,
                        a = !1,
                        l = void 0;
                    try {
                        for (var u, c = r[Symbol.iterator](); !(s = (u = c.next()).done); s = !0) {
                            var d = u.value;
                            document.addEventListener(d, o)
                        }
                    } catch (e) {
                        a = !0, l = e
                    } finally {
                        try {
                            !s && c.return && c.return()
                        } finally {
                            if (a) throw l
                        }
                    }
                    return function() {
                        var e = !0,
                            t = !1,
                            n = void 0;
                        try {
                            for (var i, s = r[Symbol.iterator](); !(e = (i = s.next()).done); e = !0) {
                                var a = i.value;
                                document.removeEventListener(a, o)
                            }
                        } catch (e) {
                            t = !0, n = e
                        } finally {
                            try {
                                !e && s.return && s.return()
                            } finally {
                                if (t) throw n
                            }
                        }
                    }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = function e() {
                            n.currentTime >= 2 && (t(yt), n.removeEventListener("timeupdate", e))
                        };
                    return n.addEventListener("timeupdate", r),
                        function() {
                            n.removeEventListener("timeupdate", r)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = !1,
                        i = !0,
                        o = function() {
                            r ? i && (i = !1, t($e)) : (r = !0, i = !1)
                        },
                        s = function() {
                            i || (i = !0, t(Je))
                        };
                    return n.addEventListener("play", o), n.addEventListener("pause", s),
                        function() {
                            n.removeEventListener("play", o), n.removeEventListener("pause", s)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).progressEvents,
                        i = void 0 === r ? [] : r,
                        o = n.duration,
                        s = At(o),
                        a = 0,
                        l = At(n.currentTime),
                        u = i.filter(wt).map(function(e) {
                            var t = e.offset,
                                n = e.uri;
                            return {
                                offset: jt(t, s),
                                uri: n
                            }
                        }),
                        c = function e() {
                            var r = n.currentTime,
                                i = Math.abs(r - l);
                            a += At(i), l = r;
                            var o = u.reduce(function(e, t) {
                                    var n = t.offset;
                                    return a >= n ? e.toCall.push(t) : e.stillPending.push(t), e
                                }, {
                                    stillPending: [],
                                    toCall: []
                                }),
                                s = o.stillPending,
                                c = o.toCall;
                            u = s, c.forEach(function(e) {
                                var n, r, i, o, s, l = e.uri;
                                t(bt, {
                                    contentplayhead: (n = a, r = Math.floor(n / 36e5), i = Math.floor(n / 6e4 % 60), o = Math.floor(n / 1e3 % 60), s = n % 1e3, gt(r, 2) + ":" + gt(i, 2) + ":" + gt(o, 2) + "." + gt(s, 3)),
                                    progressUri: l
                                })
                            }), 0 === u.length && n.removeEventListener("timeupdate", e)
                        };
                    return u.length > 0 && n.addEventListener("timeupdate", c),
                        function() {
                            n.removeEventListener("timeupdate", c)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = n.currentTime,
                        i = function() {
                            var e = n.currentTime - r;
                            e < 0 && Math.abs(e) >= 1 && t(et), r = n.currentTime
                        };
                    return n.addEventListener("timeupdate", i),
                        function() {
                            n.removeEventListener("timeupdate", i)
                        }
                }, function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.skipoffset,
                        i = n.createSkipControl,
                        o = void 0 === i ? nt : i;
                    if (!Boolean(r)) return function() {};
                    var s = void 0,
                        a = e.videoElement,
                        l = e.element,
                        u = function e() {
                            var n = 1e3 * a.currentTime;
                            !Boolean(s) && n >= r && ((s = o()).onclick = function(e) {
                                return void 0 !== Event.prototype.stopPropagation && e.stopPropagation(), t(tt), !1
                            }, l.appendChild(s), a.removeEventListener("timeupdate", e))
                        };
                    return a.addEventListener("timeupdate", u),
                        function() {
                            a.removeEventListener("timeupdate", u), Boolean(s) && l.removeChild(s)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = !1,
                        i = !1,
                        o = !1,
                        s = !1,
                        a = !1,
                        l = function() {
                            var e = n.duration,
                                l = n.currentTime;
                            !r && l > 0 ? (r = !0, t(ct)) : i ? o ? s ? a || ht(l, e) && (a = !0, t(at)) : function(e, t) {
                                return pt(e, t) >= 75
                            }(l, e) && (s = !0, t(dt)) : function(e, t) {
                                return pt(e, t) >= 50
                            }(l, e) && (o = !0, t(ut)) : function(e, t) {
                                return pt(e, t) >= 25
                            }(l, e) && (i = !0, t(lt)), t(st)
                        },
                        u = function e() {
                            var r = n.duration,
                                i = n.currentTime;
                            !a && ht(i, r) && (a = !0, t(at)), n.removeEventListener("ended", e), n.removeEventListener("timeupdate", l)
                        };
                    return n.addEventListener("timeupdate", l), n.addEventListener("ended", u),
                        function() {
                            n.removeEventListener("timeupdate", l), n.removeEventListener("ended", u)
                        }
                }, function(e, t) {
                    var n = e.videoElement,
                        r = mt(n),
                        i = function() {
                            t(it), r && !mt(n) ? t(vt) : !r && mt(n) && t(ft), r = mt(n)
                        };
                    return n.addEventListener("volumechange", i),
                        function() {
                            n.removeEventListener("volumechange", i)
                        }
                }],
                _t = function(e, t) {
                    var n = e.vastChain,
                        r = e.videoAdContainer,
                        i = e.hooks,
                        o = n[0].ad,
                        s = we(o),
                        a = ge(o),
                        l = function(e) {
                            return e.map(function(e) {
                                return e.ad
                            }).reduce(function(e, t) {
                                var n = R(t, Ge) || [];
                                return [].concat(K(e), K(n))
                            }, []).map(function(e) {
                                return {
                                    offset: e.offset,
                                    uri: e.uri
                                }
                            })
                        }(n),
                        u = z({
                            clickThroughUrl: a,
                            progressEvents: l,
                            skipoffset: s
                        }, i),
                        c = Et.map(function(e) {
                            return Xe(e(r, t, u))
                        });
                    return function() {
                        return c.forEach(function(e) {
                            return e()
                        })
                    }
                },
                Ct = function(e, t) {
                    return new Promise(function(n) {
                        var r = {
                            currentTime: e.currentTime,
                            playing: !e.paused
                        };
                        r.playing && e.pause(), e.src = t.src, e.load(), ze(e, "loadeddata", function() {
                            e.currentTime = r.currentTime, r.playing && e.play(), n()
                        })
                    })
                },
                St = "Expected a function",
                kt = NaN,
                xt = "[object Symbol]",
                Pt = /^\s+|\s+$/g,
                It = /^[-+]0x[0-9a-f]+$/i,
                Mt = /^0b[01]+$/i,
                Ot = /^0o[0-7]+$/i,
                Bt = parseInt,
                Lt = "object" == typeof r && r && r.Object === Object && r,
                Dt = "object" == typeof self && self && self.Object === Object && self,
                Nt = Lt || Dt || Function("return this")(),
                Ft = Object.prototype.toString,
                Rt = Math.max,
                Ht = Math.min,
                Vt = function() {
                    return Nt.Date.now()
                };

            function Ut(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function Wt(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && Ft.call(e) == xt
                    }(e)) return kt;
                if (Ut(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = Ut(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(Pt, "");
                var n = Mt.test(e);
                return n || Ot.test(e) ? Bt(e.slice(2), n ? 2 : 8) : It.test(e) ? kt : +e
            }
            var qt = function(e, t, n) {
                    var r, i, o, s, a, l, u = 0,
                        c = !1,
                        d = !1,
                        p = !0;
                    if ("function" != typeof e) throw new TypeError(St);

                    function h(t) {
                        var n = r,
                            o = i;
                        return r = i = void 0, u = t, s = e.apply(o, n)
                    }

                    function f(e) {
                        var n = e - l;
                        return void 0 === l || n >= t || n < 0 || d && e - u >= o
                    }

                    function v() {
                        var e = Vt();
                        if (f(e)) return m(e);
                        a = setTimeout(v, function(e) {
                            var n = t - (e - l);
                            return d ? Ht(n, o - (e - u)) : n
                        }(e))
                    }

                    function m(e) {
                        return a = void 0, p && r ? h(e) : (r = i = void 0, s)
                    }

                    function y() {
                        var e = Vt(),
                            n = f(e);
                        if (r = arguments, i = this, l = e, n) {
                            if (void 0 === a) return function(e) {
                                return u = e, a = setTimeout(v, t), c ? h(e) : s
                            }(l);
                            if (d) return a = setTimeout(v, t), h(l)
                        }
                        return void 0 === a && (a = setTimeout(v, t)), s
                    }
                    return t = Wt(t) || 0, Ut(n) && (c = !!n.leading, o = (d = "maxWait" in n) ? Rt(Wt(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p), y.cancel = function() {
                        void 0 !== a && clearTimeout(a), u = 0, r = l = i = a = void 0
                    }, y.flush = function() {
                        return void 0 === a ? s : m(Vt())
                    }, y
                },
                zt = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                Gt = function() {},
                Xt = ["style", "clientWidth", "clientHeight"],
                Qt = Symbol("mutationHandlers"),
                Yt = Symbol("mutationObserver"),
                Kt = function(e, t) {
                    if (!e[Qt]) {
                        e[Qt] = [];
                        e[Yt] = function(e, t) {
                            var n = new zt(function(e) {
                                for (var n = 0; n < e.length; n++) {
                                    var r = e[n].attributeName;
                                    Xt.includes(r) && t()
                                }
                            });
                            return n.observe(e, {
                                attributes: !0,
                                characterData: !1,
                                childList: !0
                            }), n
                        }(e, function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            e[Qt] && e[Qt].forEach(function(e) {
                                return e.apply(void 0, n)
                            })
                        })
                    }
                    return e[Qt].push(t),
                        function() {
                            e[Qt] = e[Qt].filter(function(e) {
                                return e !== t
                            }), 0 === e[Qt].length && (e[Yt].disconnect(), delete e[Qt], delete e[Yt])
                        }
                },
                Zt = Symbol("resizeHandlers"),
                Jt = Symbol("resizeObj"),
                $t = function(e, t) {
                    if (!e[Zt]) {
                        e[Zt] = [];
                        e[Jt] = function(e) {
                            var t = document.createElement("object");
                            return t.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"), t.onload = function() {
                                this.contentWindow && this.contentWindow.addEventListener("resize", e)
                            }, t.type = "text/html", t.data = "about:blank", t
                        }(function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            e[Zt] && e[Zt].forEach(function(e) {
                                return e.apply(void 0, n)
                            })
                        }), "static" === getComputedStyle(e).position && (e.style.position = "relative"), e.appendChild(e[Jt])
                    }
                    return e[Zt].push(t),
                        function() {
                            e[Zt] = e[Zt].filter(function(e) {
                                return e !== t
                            }), 0 === e[Zt].length && (e.removeChild(e[Jt]), delete e[Zt], delete e[Jt])
                        }
                },
                en = function(e, t) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).threshold,
                        r = void 0 === n ? 20 : n;
                    ! function(e, t) {
                        if (!(e instanceof Element)) throw new TypeError("Target is not an Element node");
                        if (!(t instanceof Function)) throw new TypeError("Callback is not a function")
                    }(e, t);
                    var i = function(e) {
                            var t = e.style,
                                n = e.clientHeight,
                                r = e.clientWidth;
                            return [t.width, t.height, r, n].join(".")
                        },
                        o = i(e),
                        s = qt(function() {
                            var n = i(e);
                            n !== o && (o = n, t())
                        }, r),
                        a = Boolean(zt) ? Kt(e, s) : Gt,
                        l = $t(e, s);
                    return function() {
                        a(), l()
                    }
                },
                tn = [],
                nn = function(e) {
                    var t = e.element,
                        n = e.callback,
                        r = e.lastInViewport,
                        i = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = e.getBoundingClientRect(),
                                r = n.height,
                                i = n.width,
                                o = n.top,
                                s = n.right,
                                a = n.bottom,
                                l = n.left;
                            if (!r || !i) return !1;
                            var u = r * (1 - t),
                                c = i * (1 - t),
                                d = window.innerHeight || document.documentElement.clientHeight,
                                p = window.innerWidth || document.documentElement.clientWidth;
                            return !document.hidden && o + u >= 0 && a - u <= d && l + c >= 0 && s - c <= p
                        }(t, e.viewportOffset);
                    i !== r && (e.lastInViewport = i, n(i))
                },
                rn = function() {
                    var e = !0,
                        t = !1,
                        n = void 0;
                    try {
                        for (var r, i = tn[Symbol.iterator](); !(e = (r = i.next()).done); e = !0) {
                            var o = r.value;
                            nn(o)
                        }
                    } catch (e) {
                        t = !0, n = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (t) throw n
                        }
                    }
                },
                on = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.threshold,
                        i = void 0 === r ? 100 : r,
                        o = n.scrollableElement,
                        s = void 0 === o ? window : o,
                        a = n.viewabilityOffset,
                        l = void 0 === a ? .4 : a;
                    ! function(e, t) {
                        if (!(e instanceof Element)) throw new TypeError("Target is not an Element node");
                        if (!(t instanceof Function)) throw new TypeError("Callback is not a function")
                    }(e, t);
                    var u = i > 0 ? qt(rn) : rn,
                        c = {
                            callback: t,
                            element: e,
                            lastInViewport: !1,
                            scrollableElement: s,
                            viewabilityOffset: l
                        };
                    return nn(c), tn.push(c), s.addEventListener("scroll", u), 1 === tn.length && (window.addEventListener("resize", u), window.addEventListener("orientationchange", u), document.addEventListener("visibilitychange", u)),
                        function() {
                            0 === (tn = tn.filter(function(e) {
                                return e !== c
                            })).length && (window.removeEventListener("resize", u), window.removeEventListener("orientationchange", u), document.removeEventListener("visibilitychange", u)), tn.every(function(e) {
                                return e.scrollableElement !== s
                            }) && s.removeEventListener("scroll", u)
                        }
                },
                sn = function(e) {
                    var t = 0,
                        n = 0,
                        r = function() {
                            e.duration - t > 3 && (e.pause(), e.play(), e.currentTime = t)
                        },
                        i = function() {
                            var r = e.currentTime;
                            Math.abs(r - t) > 3 ? ((n += 1) >= 2 && e.pause(), e.currentTime = t) : t = r
                        };
                    return e.addEventListener("timeupdate", i), e.addEventListener("ended", r),
                        function() {
                            e.removeEventListener("timeupdate", i), e.removeEventListener("ended", r)
                        }
                },
                an = function() {
                    function e(t) {
                        U(this, e), this.evts = {}, this.logger = t || console
                    }
                    return W(e, [{
                        key: "on",
                        value: function(e, t) {
                            var n = this.evts;
                            return (n[e] || (n[e] = [])).push(t), this
                        }
                    }, {
                        key: "removeListener",
                        value: function(e, t) {
                            var n = this.evts,
                                r = n[e] || (n[e] = []);
                            return n[e] = r.filter(function(e) {
                                return e !== t && e._ !== t
                            }), this
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function(e) {
                            return e ? this.evts[e] = null : this.evts = {}, this
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            var n = this,
                                r = function r() {
                                    n.removeListener(e, r), t.apply(void 0, arguments)
                                };
                            return r._ = t, this.on(e, r)
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                            var o = this.evts,
                                s = o[e] || (o[e] = []),
                                a = s.length > 0;
                            return s.forEach(function(e) {
                                try {
                                    e.apply(void 0, r)
                                } catch (e) {
                                    t.logger.error(e, e.stack)
                                }
                            }), a
                        }
                    }]), e
                }(),
                ln = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.staticResource,
                        n = e.htmlResource,
                        r = e.iFrameResource;
                    return t || n || r
                },
                un = function(e) {
                    return 1 === e.length ? e[0] : function(e) {
                        var t = window.devicePixelRatio || 0;
                        return e.slice(0).sort(function(e, n) {
                            return Math.abs(t - (e.pxratio || 0)) - Math.abs(t - (n.pxratio || 0))
                        })
                    }(e)[0]
                },
                cn = function(e) {
                    var t = e.map(function(e) {
                        return e.ad
                    }).reduce(function(e, t) {
                        return [].concat(K(e), K($(t) || []))
                    }, []);
                    return t.length > 0 ? function(e) {
                        var t = function(e) {
                            return e.reduce(function(e, t) {
                                var n = t.program,
                                    r = void 0 === n ? "UNKNOWN" : n;
                                return e[r] || (e[r] = []), e[r].push(t), e
                            }, {})
                        }(e);
                        return Object.keys(t).reduce(function(e, n) {
                            return [].concat(K(e), "UNKNOWN" === n ? K(t.UNKNOWN) : [un(t[n])])
                        }, [])
                    }(function(e) {
                        return t = ln, n = {}, e.filter(function(e) {
                            var r = t(e);
                            return !n.hasOwnProperty(r) && (n[r] = !0, !0)
                        });
                        var t, n
                    }(t)) : null
                },
                dn = function e() {
                    var t = this;
                    U(this, e), this.promise = new Promise(function(e, n) {
                        t.resolve = e, t.reject = n
                    })
                },
                pn = function(e, t) {
                    var n = !0,
                        r = new dn,
                        i = r.promise,
                        o = r.reject,
                        s = r.resolve,
                        a = ze(e, t, function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n = !1, s(t)
                        });
                    return {
                        cancel: function() {
                            n && (n = !1, a(), o(new Error("waitFor was canceled")))
                        },
                        promise: i
                    }
                };
            ! function(e) {
                if (!e.fetch) {
                    var t = {
                        searchParams: "URLSearchParams" in e,
                        iterable: "Symbol" in e && "iterator" in Symbol,
                        blob: "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in e,
                        arrayBuffer: "ArrayBuffer" in e
                    };
                    if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        r = function(e) {
                            return e && DataView.prototype.isPrototypeOf(e)
                        },
                        i = ArrayBuffer.isView || function(e) {
                            return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                        };
                    c.prototype.append = function(e, t) {
                        e = a(e), t = l(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + "," + t : t
                    }, c.prototype.delete = function(e) {
                        delete this.map[a(e)]
                    }, c.prototype.get = function(e) {
                        return e = a(e), this.has(e) ? this.map[e] : null
                    }, c.prototype.has = function(e) {
                        return this.map.hasOwnProperty(a(e))
                    }, c.prototype.set = function(e, t) {
                        this.map[a(e)] = l(t)
                    }, c.prototype.forEach = function(e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, c.prototype.keys = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push(n)
                        }), u(e)
                    }, c.prototype.values = function() {
                        var e = [];
                        return this.forEach(function(t) {
                            e.push(t)
                        }), u(e)
                    }, c.prototype.entries = function() {
                        var e = [];
                        return this.forEach(function(t, n) {
                            e.push([n, t])
                        }), u(e)
                    }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                    var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                    m.prototype.clone = function() {
                        return new m(this, {
                            body: this._bodyInit
                        })
                    }, v.call(m.prototype), v.call(g.prototype), g.prototype.clone = function() {
                        return new g(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new c(this.headers),
                            url: this.url
                        })
                    }, g.error = function() {
                        var e = new g(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var s = [301, 302, 303, 307, 308];
                    g.redirect = function(e, t) {
                        if (-1 === s.indexOf(t)) throw new RangeError("Invalid status code");
                        return new g(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, e.Headers = c, e.Request = m, e.Response = g, e.fetch = function(e, n) {
                        return new Promise(function(r, i) {
                            var o = new m(e, n),
                                s = new XMLHttpRequest;
                            s.onload = function() {
                                var e, t, n = {
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: (e = s.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                        var n = e.split(":"),
                                            r = n.shift().trim();
                                        if (r) {
                                            var i = n.join(":").trim();
                                            t.append(r, i)
                                        }
                                    }), t)
                                };
                                n.url = "responseURL" in s ? s.responseURL : n.headers.get("X-Request-URL");
                                var i = "response" in s ? s.response : s.responseText;
                                r(new g(i, n))
                            }, s.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, s.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, s.open(o.method, o.url, !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && t.blob && (s.responseType = "blob"), o.headers.forEach(function(e, t) {
                                s.setRequestHeader(t, e)
                            }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        })
                    }, e.fetch.polyfill = !0
                }

                function a(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function l(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function u(e) {
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function d(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function p(e) {
                    return new Promise(function(t, n) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            n(e.error)
                        }
                    })
                }

                function h(e) {
                    var t = new FileReader,
                        n = p(t);
                    return t.readAsArrayBuffer(e), n
                }

                function f(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function v() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e)
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                        else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                        else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                        else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !i(e)) throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = f(e)
                        } else this._bodyText = "";
                        this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = d(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? d(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                    }), this.text = function() {
                        var e, t, n, r = d(this);
                        if (r) return r;
                        if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = p(t), t.readAsText(e), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, t.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }

                function m(e, t) {
                    var n, r, i = (t = t || {}).body;
                    if (e instanceof m) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new c(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), o.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(i)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var n = e.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                i = n.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(r), decodeURIComponent(i))
                        }
                    }), t
                }

                function g(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
            }("undefined" != typeof self ? self : void 0);
            var hn, fn, vn, mn, yn = function(e) {
                    var t = e.toLowerCase();
                    return ["text/plain", "text/html"].some(function(e) {
                        return t.includes(e)
                    })
                },
                gn = (hn = V(f.mark(function e(t) {
                    var n, r, i, o;
                    return f.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch(t);
                            case 2:
                                if (n = e.sent, r = n.headers.get("Content-Type"), !(n.status >= 400)) {
                                    e.next = 8;
                                    break
                                }
                                throw (i = new Error(n.statusText)).response = n, i;
                            case 8:
                                if (yn(r)) {
                                    e.next = 12;
                                    break
                                }
                                throw (o = new Error("fetchHtml error, invalid Content-Type " + r)).response = n, o;
                            case 12:
                                return e.abrupt("return", n.text());
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function(e) {
                    return hn.apply(this, arguments)
                }),
                bn = function(e, t) {
                    var n = t.staticResource,
                        r = t.htmlResource,
                        i = t.iFrameResource;
                    return Boolean(n) ? function(e, t) {
                        var n = t.document,
                            r = t.data,
                            i = r.height,
                            o = r.width,
                            s = n.createElement("IMG");
                        return o && (s.width = o), i && (s.height = i), s.src = e, s
                    }(n, {
                        data: t,
                        document: e
                    }) : Boolean(r) ? function(e, t) {
                        var n = t.document,
                            r = t.data,
                            i = r.height,
                            o = r.width,
                            s = n.createElement("DIV");
                        return o && (s.style.width = o + "px"), i && (s.style.height = i + "px"), gn(e).then(function(e) {
                            s.innerHTML = e, s.dispatchEvent(new CustomEvent("load"))
                        }).catch(function() {
                            s.dispatchEvent(new CustomEvent("error"))
                        }), s
                    }(r, {
                        data: t,
                        document: e
                    }) : function(e, t) {
                        var n = t.document,
                            r = t.data,
                            i = r.height,
                            o = r.width,
                            s = n.createElement("IFRAME");
                        return s.src = e, s.sandbox = "allow-forms allow-popups allow-scripts", o && (s.width = o), i && (s.height = i), s.src = e, s.frameBorder = 0, s.style.border = "none", s
                    }(i, {
                        data: t,
                        document: e
                    })
                },
                An = function() {},
                wn = function(e, t) {
                    var n = t.document,
                        r = t.placeholder;
                    return new Promise(function(t, i) {
                        try {
                            var o = bn(n, e),
                                s = pn(o, "error"),
                                a = pn(o, "load"),
                                l = function() {
                                    r.contains(o) && (r.removeChild(o), o.style.zIndex = 0)
                                };
                            s.promise.then(function() {
                                a.cancel(), l(), i(new Error("Error loading resource"))
                            }).catch(An), a.promise.then(function() {
                                s.cancel(), l(), t(o)
                            }).catch(An), o.style.zIndex = -9999, r.appendChild(o)
                        } catch (e) {
                            i(e)
                        }
                    })
                },
                jn = function(e, t, n) {
                    var r, i, o, s = n.drawnIcons,
                        a = n.placeholder,
                        l = e.signature,
                        u = t.getBoundingClientRect(),
                        c = a.getBoundingClientRect(),
                        d = e.width || u.width,
                        p = e.height || u.height,
                        h = e.xPosition || "right",
                        f = e.yPosition || "top",
                        v = void 0,
                        m = void 0;
                    if (function(e) {
                            return !["left", "right"].includes(String(e).toLowerCase())
                        }(h)) v = h;
                    else {
                        var y = s.filter(function(e) {
                            return e.xPosition === h && e.yPosition === f
                        });
                        v = function(e, t, n, r) {
                            var i = n.reduce(function(e, t) {
                                return e + t.width + 1
                            }, 0);
                            return "left" === e ? i : r - i - t
                        }(h, d, y, c.width)
                    }! function(e) {
                        return !["top", "bottom"].includes(String(e).toLowerCase())
                    }(f) ? (r = f, i = p, o = c.height, m = "top" === r ? 0 : o - i) : m = f;
                    var g = v + "-" + m + "_" + d + "x" + p;
                    return Object.assign(e, {
                        height: p,
                        left: v,
                        signature: g,
                        top: m,
                        updated: l !== g,
                        width: d
                    })
                },
                Tn = function(e) {
                    return e.height * e.width
                },
                En = function(e) {
                    return e.left + e.width
                },
                _n = function(e) {
                    var t = e.left;
                    return t
                },
                Cn = function(e) {
                    var t = e.top;
                    return t
                },
                Sn = function(e) {
                    return e.top + e.height
                },
                kn = function(e, t) {
                    return !t.drawnIcons.some(function(t) {
                        return function(e, t) {
                            return !(_n(e) > En(t) || En(e) < _n(t) || Sn(e) < Cn(t) || Cn(e) > Sn(t))
                        }(e, t)
                    })
                },
                xn = function(e, t) {
                    var n = function(e, t) {
                            var n = t.drawnIcons,
                                r = t.placeholder,
                                i = Tn(r.getBoundingClientRect());
                            return Tn(e) + n.reduce(function(e, t) {
                                return e + Tn(t)
                            }, 0) <= .35 * i
                        }(e, t),
                        r = function(e, t) {
                            var n = t.placeholder.getBoundingClientRect();
                            return e.left >= 0 && e.left + e.width <= n.width && e.top >= 0 && e.top + e.height <= n.height
                        }(e, t),
                        i = kn(e, t);
                    return n && r && i
                },
                Pn = function() {},
                In = function(e, t) {
                    var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).onIconClick,
                        r = void 0 === n ? Pn : n,
                        i = document.createElement("A");
                    return t.iconClickthrough && (i.href = t.iconClickthrough, i.target = "_blank"), Boolean(t.iFrameResource) && (e.style.pointerEvents = "none"), i.onclick = function(e) {
                        void 0 !== Event.prototype.stopPropagation && e.stopPropagation(), r(t)
                    }, i.appendChild(e), i
                },
                Mn = (fn = V(f.mark(function e(t, n) {
                    var r;
                    return f.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.element) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 3, wn(t, n);
                            case 3:
                                (r = e.sent).width = "100%", r.height = "100%", r.style.height = "100%", r.style.width = "100%", t.element = In(r, t, n);
                            case 9:
                                return e.abrupt("return", t.element);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function(e, t) {
                    return fn.apply(this, arguments)
                }),
                On = function(e, t) {
                    var n = t.height,
                        r = t.width,
                        i = t.left,
                        o = t.top,
                        s = t.yPosition;
                    return e.height = n, e.width = r, e.style.position = "absolute", e.style.left = i + "px", "bottom" === s ? e.style.bottom = "0" : e.style.top = o + "px", e.style.height = n + "px", e.style.width = r + "px", e
                },
                Bn = (vn = V(f.mark(function e(t, n) {
                    var r, i, o;
                    return f.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.placeholder, e.next = 3, Mn(t, n);
                            case 3:
                                if (i = e.sent, o = jn(t, i, n), !xn(o, n)) {
                                    e.next = 9;
                                    break
                                }
                                i.parentNode && !t.updated || r.appendChild(On(i, o)), e.next = 11;
                                break;
                            case 9:
                                throw i.parentNode && i.parentNode.removeChild(i), new Error("Icon can't be rendered");
                            case 11:
                                return e.abrupt("return", o);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0)
                })), function(e, t) {
                    return vn.apply(this, arguments)
                }),
                Ln = function(e, t) {
                    var n = t.onIconClick,
                        r = t.videoAdContainer,
                        i = t.logger,
                        o = r.element,
                        s = r.videoElement,
                        a = [],
                        l = e.reduce(function(e, t) {
                            return ! function(e, t) {
                                var n = 1e3 * t.currentTime,
                                    r = 1e3 * t.duration,
                                    i = e.offset || 0,
                                    o = e.duration || r;
                                return i <= n && n - i <= o
                            }(t, s) ? e.otherIcons.push(t) : e.iconsToShow.push(t), e
                        }, {
                            iconsToShow: [],
                            otherIcons: []
                        }),
                        u = l.iconsToShow;
                    return l.otherIcons.forEach(function(e) {
                        var t = e.element;
                        t && t.parentNode && t.parentNode.removeChild(t)
                    }), u.reduce(function(e, t) {
                        return e.then(function() {
                            return Bn(t, {
                                document: document,
                                drawnIcons: a,
                                onIconClick: n,
                                placeholder: o
                            })
                        }).then(function(e) {
                            return a.push(e)
                        }).catch(function(e) {
                            return i.log(e)
                        })
                    }, Promise.resolve(a)).then(function() {
                        return a
                    })
                },
                Dn = Symbol("firstRenderPending"),
                Nn = function() {},
                Fn = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.videoAdContainer,
                        i = n.onIconView,
                        o = void 0 === i ? Nn : i,
                        s = n.onIconClick,
                        a = void 0 === s ? Nn : s,
                        l = function(e, t) {
                            var n = {};
                            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                            return n
                        }(n, ["videoAdContainer", "onIconView", "onIconClick"]),
                        u = r.videoElement,
                        c = r.element,
                        d = (t = V(f.mark(function t() {
                            var n;
                            return f.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Ln(e, z({
                                            onIconClick: a,
                                            videoAdContainer: r
                                        }, l));
                                    case 2:
                                        n = t.sent, c.dispatchEvent(new CustomEvent("iconsDrawn")), n.forEach(function(e) {
                                            e[Dn] && (o(e), e[Dn] = !1)
                                        });
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, void 0)
                        })), function() {
                            return t.apply(this, arguments)
                        });
                    return e.forEach(function(e) {
                        e[Dn] = !0
                    }), {
                        drawIcons: d,
                        hasPendingIconRedraws: function() {
                            return function(e, t) {
                                var n = 1e3 * t.currentTime,
                                    r = 1e3 * t.duration,
                                    i = e.filter(function(e) {
                                        return !e.offset || e.offset < n
                                    }),
                                    o = e.filter(function(e) {
                                        return e.duration && e.duration < r
                                    });
                                return i.length > 0 || o.length > 0
                            }(e, u)
                        },
                        removeIcons: function() {
                            return function(e) {
                                return e.filter(function(e) {
                                    var t = e.element;
                                    return Boolean(t) && Boolean(t.parentNode)
                                }).forEach(function(e) {
                                    var t = e.element;
                                    return t.parentNode.removeChild(t)
                                })
                            }(e)
                        }
                    }
                },
                Rn = function(e, t) {
                    return e + 100 > innerWidth && t + 100 > innerHeight ? "fullscreen" : e < 400 ? "thumbnail" : "normal"
                },
                Hn = v.start,
                Vn = v.iconClick,
                Un = v.iconView,
                Wn = Symbol("_protected"),
                qn = function(e) {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = r.viewability,
                            o = void 0 !== i && i,
                            s = r.responsive,
                            a = void 0 !== s && s,
                            l = r.logger,
                            u = void 0 === l ? console : l;
                        U(this, t);
                        var c = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, u));
                        c[Wn] = {
                            finish: function() {
                                c[Wn].finished = !0, c[Wn].onFinishCallbacks.forEach(function(e) {
                                    return e()
                                }), c.emit(ot, {
                                    adUnit: c,
                                    type: ot
                                })
                            },
                            finished: !1,
                            onErrorCallbacks: [],
                            onFinishCallbacks: [],
                            started: !1,
                            throwIfCalled: function() {
                                throw new Error("VideoAdUnit method must be implemented on child class")
                            },
                            throwIfFinished: function() {
                                if (c.isFinished()) throw new Error("VideoAdUnit is finished")
                            }
                        }, c.type = null, c.error = null, c.errorCode = null;
                        var d = c[Wn].onFinishCallbacks;
                        if (c.vastChain = e, c.videoAdContainer = n, c.icons = cn(e), d.push(sn(c.videoAdContainer.videoElement)), c.icons) {
                            var p = Fn(c.icons, {
                                    logger: u,
                                    onIconClick: function(e) {
                                        return c.emit(Vn, {
                                            adUnit: c,
                                            data: e,
                                            type: Vn
                                        })
                                    },
                                    onIconView: function(e) {
                                        return c.emit(Un, {
                                            adUnit: c,
                                            data: e,
                                            type: Un
                                        })
                                    },
                                    videoAdContainer: n
                                }),
                                h = p.drawIcons,
                                f = p.hasPendingIconRedraws,
                                v = p.removeIcons;
                            c[Wn].drawIcons = h, c[Wn].removeIcons = v, c[Wn].hasPendingIconRedraws = f, d.push(v)
                        }
                        return o && c.once(Hn, function() {
                            var e = on(c.videoAdContainer.element, function(e) {
                                c.isFinished() || (e ? c.resume() : c.pause())
                            });
                            d.push(e)
                        }), a && c.once(Hn, function() {
                            var e = c.videoAdContainer.element;
                            c[Wn].size = {
                                height: e.clientHeight,
                                viewmode: Rn(e.clientWidth, e.clientHeight),
                                width: e.clientWidth
                            };
                            var t = en(e, function() {
                                if (!c.isFinished()) {
                                    var t = c[Wn].size,
                                        n = e.clientHeight,
                                        r = e.clientWidth;
                                    n === t.height && r === t.width || c.resize(r, n, Rn(r, n))
                                }
                            });
                            d.push(t)
                        }), c
                    }
                    return X(t, an), W(t, [{
                        key: "start",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "duration",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "paused",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "currentTime",
                        value: function() {
                            this[Wn].throwIfCalled()
                        }
                    }, {
                        key: "onFinish",
                        value: function(e) {
                            if ("function" != typeof e) throw new TypeError("Expected a callback function");
                            this[Wn].onFinishCallbacks.push(Xe(e, this.logger))
                        }
                    }, {
                        key: "onError",
                        value: function(e) {
                            if ("function" != typeof e) throw new TypeError("Expected a callback function");
                            this[Wn].onErrorCallbacks.push(Xe(e, this.logger))
                        }
                    }, {
                        key: "isFinished",
                        value: function() {
                            return this[Wn].finished
                        }
                    }, {
                        key: "isStarted",
                        value: function() {
                            return this[Wn].started
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var e = V(f.mark(function e(t, n, r) {
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this[Wn].size = {
                                                    height: n,
                                                    viewmode: r,
                                                    width: t
                                                }, !this.isStarted() || this.isFinished() || !this.icons) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, this[Wn].removeIcons();
                                        case 4:
                                            return e.next = 6, this[Wn].drawIcons();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(),
                zn = v.complete,
                Gn = v.error,
                Xn = v.skip,
                Qn = Symbol("_private"),
                Yn = function(e) {
                    function t(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U(this, t);
                        var i = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, r));
                        i[Qn] = {
                            handleMetric: function(e, t) {
                                switch (e) {
                                    case zn:
                                        i[Wn].finish();
                                        break;
                                    case Gn:
                                        i.error = t, i.errorCode = i.error && i.error.code ? i.error.code : 405, i[Wn].onErrorCallbacks.forEach(function(e) {
                                            return e(i.error)
                                        }), i[Wn].finish();
                                        break;
                                    case Xn:
                                        i.cancel()
                                }
                                i.emit(e, {
                                    adUnit: i,
                                    type: e
                                })
                            }
                        }, i.assetUri = null, i.type = "VAST";
                        var o = i[Wn].onFinishCallbacks,
                            s = i[Qn].handleMetric;
                        i.hooks = r.hooks || {};
                        var a = _t({
                            hooks: i.hooks,
                            vastChain: i.vastChain,
                            videoAdContainer: i.videoAdContainer
                        }, s);
                        return o.push(a), i
                    }
                    return X(t, qn), W(t, [{
                        key: "start",
                        value: function() {
                            var e = V(f.mark(function e() {
                                var t, n, r, i, o, s, a, l = this;
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this[Wn].throwIfFinished(), !this.isStarted()) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("VastAdUnit already started");
                                        case 3:
                                            if (t = this.vastChain[0].ad, n = this.videoAdContainer, r = n.videoElement, i = n.element, o = qe(t, r, i), !Boolean(o)) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!this.icons) {
                                                e.next = 11;
                                                break
                                            }
                                            return s = function() {
                                                var e = V(f.mark(function e() {
                                                    return f.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (!l.isFinished()) {
                                                                    e.next = 2;
                                                                    break
                                                                }
                                                                return e.abrupt("return");
                                                            case 2:
                                                                return e.next = 4, l[Wn].drawIcons();
                                                            case 4:
                                                                l[Wn].hasPendingIconRedraws() && !l.isFinished() && ze(r, "timeupdate", s);
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e, l)
                                                }));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 11, s();
                                        case 11:
                                            r.src = o.src, this.assetUri = o.src, r.play(), e.next = 19;
                                            break;
                                        case 16:
                                            (a = new Error("Can't find a suitable media to play")).code = 403, this[Qn].handleMetric(Gn, a);
                                        case 19:
                                            this[Wn].started = !0;
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "resume",
                        value: function() {
                            this.videoAdContainer.videoElement.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.videoAdContainer.videoElement.pause()
                        }
                    }, {
                        key: "paused",
                        value: function() {
                            return this.videoAdContainer.videoElement.paused
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.videoAdContainer.videoElement.volume = e
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.videoAdContainer.videoElement.volume
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            this[Wn].throwIfFinished(), this.videoAdContainer.videoElement.pause(), this[Wn].finish()
                        }
                    }, {
                        key: "duration",
                        value: function() {
                            return this.isStarted() ? this.videoAdContainer.videoElement.duration : 0
                        }
                    }, {
                        key: "currentTime",
                        value: function() {
                            return this.isStarted() ? this.videoAdContainer.videoElement.currentTime : 0
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var e = V(f.mark(function e(n, r, i) {
                                var o, s, a, l, u;
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, G(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "resize", this).call(this, n, r, i);
                                        case 2:
                                            this.isStarted() && !this.isFinished() && (o = this.vastChain[0].ad, s = this.videoAdContainer, a = s.videoElement, l = s.element, u = qe(o, a, l), Boolean(u) && a.src !== u.src && Ct(a, u));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(),
                Kn = ["text/javascript", "text/javascript1.0", "text/javascript1.2", "text/javascript1.4", "text/jscript", "application/javascript", "application/x-javascript", "text/ecmascript", "text/ecmascript1.0", "text/ecmascript1.2", "text/ecmascript1.4", "text/livescript", "application/ecmascript", "application/x-ecmascript"],
                Zn = function(e) {
                    var t = e.type;
                    return Kn.some(function(e) {
                        return e === t
                    })
                },
                Jn = function() {
                    var e = V(f.mark(function e(t, n) {
                        var r, i, o, s;
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = (me(t[0].ad) || []).filter(Zn)[0]) {
                                        e.next = 3;
                                        break
                                    }
                                    throw new TypeError("VastChain does not contain a supported vpaid creative");
                                case 3:
                                    return i = r.src, o = r.type, e.next = 6, n.addScript(i, {
                                        type: o
                                    });
                                case 6:
                                    return s = n.executionContext, e.abrupt("return", s.getVPAIDAd());
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                $n = "AdStarted",
                er = "AdStopped",
                tr = "AdSkipped",
                nr = "AdDurationChange",
                rr = "AdRemainingTimeChange",
                ir = "AdVolumeChange",
                or = "AdImpression",
                sr = "AdVideoStart",
                ar = "AdVideoFirstQuartile",
                lr = "AdVideoMidpoint",
                ur = "AdVideoThirdQuartile",
                cr = "AdVideoComplete",
                dr = "AdClickThru",
                pr = "AdUserAcceptInvitation",
                hr = "AdUserMinimize",
                fr = "AdUserClose",
                vr = "AdPaused",
                mr = "AdPlaying",
                yr = "AdError",
                gr = function(e, t, n) {
                    return new Promise(function(r, i) {
                        var o = void 0,
                            s = function i() {
                                "number" == typeof n && clearTimeout(o), e.unsubscribe(i, t), r()
                            };
                        "number" == typeof n && (o = setTimeout(function() {
                            e.unsubscribe(s, t), i(new Error("Timeout waiting for event '" + t + "'"))
                        }, n)), e.subscribe(s, t)
                    })
                },
                br = function(e, t, n) {
                    for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
                    var s = gr(e, n, 5e3);
                    return e[t].apply(e, i), s
                },
                Ar = function(e) {
                    var t = e.split(".");
                    return parseInt(t[0], 10)
                },
                wr = function(e, t) {
                    var n = e.handshakeVersion(t);
                    if (! function(e, t) {
                            var n = Ar(t);
                            return !(n < 1) && n <= Ar(e)
                        }(t, n)) throw new Error("Creative Version '" + n + "' not supported");
                    return n
                },
                jr = function(e, t, n) {
                    var r = document.createElement("DIV");
                    return Object.assign(r.style, {
                        border: "0px",
                        cursor: "pointer",
                        height: n + "px",
                        left: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "absolute",
                        top: "0px",
                        width: t + "px"
                    }), e.appendChild(r), r
                },
                Tr = v.complete,
                Er = v.mute,
                _r = v.unmute,
                Cr = v.skip,
                Sr = v.start,
                kr = v.firstQuartile,
                xr = v.pause,
                Pr = v.resume,
                Ir = v.impression,
                Mr = v.midpoint,
                Or = v.thirdQuartile,
                Br = v.clickThrough,
                Lr = v.error,
                Dr = v.closeLinear,
                Nr = ["AdLoaded", $n, er, tr, "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", nr, "AdExpandedChange", rr, ir, or, sr, ar, lr, ur, cr, dr, "AdInteraction", pr, hr, fr, vr, mr, "AdLog", yr].filter(function(e) {
                    return "AdLoaded" !== e
                }),
                Fr = Symbol("_private"),
                Rr = function(e) {
                    var t = e instanceof Error ? e : new Error("VPAID general error");
                    return t.code || (t.code = 901), t
                },
                Hr = function(e) {
                    function t(e, n) {
                        var r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        U(this, t);
                        var o = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, i));
                        return o[Fr] = {
                            evtHandler: (r = {}, q(r, dr, function(e, t, n) {
                                if (n)
                                    if (o.paused()) o.resume();
                                    else {
                                        var r = "string" == typeof e && e.length > 0 ? e : ge(o.vastChain[0].ad);
                                        o.pause(), window.open(r, "_blank")
                                    } o.emit(Br, {
                                    adUnit: o,
                                    type: Br
                                })
                            }), q(r, nr, function() {
                                o.emit(st, {
                                    adUnit: o,
                                    type: st
                                })
                            }), q(r, yr, function(e) {
                                o.error = Rr(e), o.errorCode = o.error.code, o[Wn].onErrorCallbacks.forEach(function(e) {
                                    return e(o.error)
                                }), o[Wn].finish(), o.emit(Lr, {
                                    adUnit: o,
                                    type: Lr
                                })
                            }), q(r, or, function() {
                                o[Fr].videoStart || o[Fr].handleVpaidEvt(sr), o.emit(Ir, {
                                    adUnit: o,
                                    type: Ir
                                })
                            }), q(r, vr, function() {
                                o[Fr].paused = !0, o.emit(xr, {
                                    adUnit: o,
                                    type: xr
                                })
                            }), q(r, mr, function() {
                                o[Fr].paused = !1, o.emit(Pr, {
                                    adUnit: o,
                                    type: Pr
                                })
                            }), q(r, rr, function() {
                                o.emit(st, {
                                    adUnit: o,
                                    type: st
                                })
                            }), q(r, tr, function() {
                                o.cancel(), o.emit(Cr, {
                                    adUnit: o,
                                    type: Cr
                                })
                            }), q(r, $n, function() {
                                o.emit(g, {
                                    adUnit: o,
                                    type: g
                                })
                            }), q(r, er, function() {
                                o.emit(er, {
                                    adUnit: o,
                                    type: er
                                }), o[Wn].finish()
                            }), q(r, pr, function() {
                                o.emit(m, {
                                    adUnit: o,
                                    type: m
                                })
                            }), q(r, fr, function() {
                                o.emit(Dr, {
                                    adUnit: o,
                                    type: Dr
                                }), o[Wn].finish()
                            }), q(r, hr, function() {
                                o.emit(y, {
                                    adUnit: o,
                                    type: y
                                })
                            }), q(r, cr, function() {
                                o.emit(Tr, {
                                    adUnit: o,
                                    type: Tr
                                }), o[Wn].finish()
                            }), q(r, ar, function() {
                                o.emit(kr, {
                                    adUnit: o,
                                    type: kr
                                })
                            }), q(r, lr, function() {
                                o.emit(Mr, {
                                    adUnit: o,
                                    type: Mr
                                })
                            }), q(r, sr, function() {
                                o[Fr].videoStart || (o[Fr].videoStart = !0, o[Fr].paused = !1, o.emit(Sr, {
                                    adUnit: o,
                                    type: Sr
                                }))
                            }), q(r, ur, function() {
                                o.emit(Or, {
                                    adUnit: o,
                                    type: Or
                                })
                            }), q(r, ir, function() {
                                var e = o.getVolume();
                                o.emit(it, {
                                    adUnit: o,
                                    type: it
                                }), 0 !== e || o[Fr].muted || (o[Fr].muted = !0, o.emit(Er, {
                                    adUnit: o,
                                    type: Er
                                })), e > 0 && o[Fr].muted && (o[Fr].muted = !1, o.emit(_r, {
                                    adUnit: o,
                                    type: _r
                                }))
                            }), r),
                            handleVpaidEvt: function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                                var i = o[Fr].evtHandler[e];
                                i && i.apply(void 0, n), o.emit(e, {
                                    adUnit: o,
                                    type: e
                                })
                            },
                            muted: !1,
                            paused: !0
                        }, o.type = "VPAID", o.creativeAd = null, o[Fr].loadCreativePromise = Jn(e, n), o
                    }
                    return X(t, qn), W(t, [{
                        key: "start",
                        value: function() {
                            var e = V(f.mark(function e() {
                                var t, n, r, i, o, s, a, l, u, c = this;
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this[Wn].throwIfFinished(), !this.isStarted()) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("VpaidAdUnit already started");
                                        case 3:
                                            return e.prev = 3, e.next = 6, this[Fr].loadCreativePromise;
                                        case 6:
                                            for (this.creativeAd = e.sent, t = gr(this.creativeAd, "AdLoaded"), n = !0, r = !1, i = void 0, e.prev = 11, o = Nr[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) a = s.value, this.creativeAd.subscribe(this[Fr].handleVpaidEvt.bind(this, a), a);
                                            e.next = 19;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(11), r = !0, i = e.t0;
                                        case 19:
                                            e.prev = 19, e.prev = 20, !n && o.return && o.return();
                                        case 22:
                                            if (e.prev = 22, !r) {
                                                e.next = 25;
                                                break
                                            }
                                            throw i;
                                        case 25:
                                            return e.finish(22);
                                        case 26:
                                            return e.finish(19);
                                        case 27:
                                            return this.creativeAd.getAdIcons && !this.creativeAd.getAdIcons() && (this.icons = null), wr(this.creativeAd, "2.0"), d = this.creativeAd, p = this.videoAdContainer, h = this.vastChain, v = void 0, m = void 0, y = void 0, g = void 0, b = void 0, A = void 0, w = void 0, v = p.element, m = v.getBoundingClientRect(), y = m.width, g = m.height, b = Rn(y, g), A = {
                                                slot: jr(v, y, g),
                                                videoSlot: p.videoElement,
                                                videoSlotCanAutoPlay: p.isOriginalVideoElement
                                            }, w = je(h[0].XML), d.initAd(y, g, b, -1, w, A), e.next = 32, t;
                                        case 32:
                                            if (this.videoAdContainer.isDestroyed()) {
                                                e.next = 48;
                                                break
                                            }
                                            return e.prev = 33, (l = this.videoAdContainer.videoElement).muted ? (this[Fr].muted = !0, this.setVolume(0)) : this.setVolume(l.volume), e.next = 38, br(this.creativeAd, "startAd", $n);
                                        case 38:
                                            if (!this.icons) {
                                                e.next = 42;
                                                break
                                            }
                                            return u = function() {
                                                var e = V(f.mark(function e() {
                                                    return f.wrap(function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (!c.isFinished()) {
                                                                    e.next = 2;
                                                                    break
                                                                }
                                                                return e.abrupt("return");
                                                            case 2:
                                                                return e.next = 4, c[Wn].drawIcons();
                                                            case 4:
                                                                c[Wn].hasPendingIconRedraws() && !c.isFinished() && setTimeout(u, 500);
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e, c)
                                                }));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 42, u();
                                        case 42:
                                            this[Wn].started = !0, e.next = 48;
                                            break;
                                        case 45:
                                            e.prev = 45, e.t1 = e.catch(33), this.cancel();
                                        case 48:
                                            return e.abrupt("return", this);
                                        case 51:
                                            throw e.prev = 51, e.t2 = e.catch(3), this[Fr].handleVpaidEvt(yr, e.t2), e.t2;
                                        case 55:
                                        case "end":
                                            return e.stop()
                                    }
                                    var d, p, h, v, m, y, g, b, A, w
                                }, e, this, [
                                    [3, 51],
                                    [11, 15, 19, 27],
                                    [20, , 22, 26],
                                    [33, 45]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "resume",
                        value: function() {
                            this.creativeAd.resumeAd()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.creativeAd.pauseAd()
                        }
                    }, {
                        key: "paused",
                        value: function() {
                            return this.isFinished() || this[Fr].paused
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.creativeAd.setAdVolume(e)
                        }
                    }, {
                        key: "getVolume",
                        value: function() {
                            return this.creativeAd.getAdVolume()
                        }
                    }, {
                        key: "cancel",
                        value: function() {
                            var e = V(f.mark(function e() {
                                var t;
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this[Wn].throwIfFinished(), e.prev = 1, t = gr(this.creativeAd, er, 3e3), this.creativeAd.stopAd(), e.next = 6, t;
                                        case 6:
                                            e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), this[Wn].finish();
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [1, 8]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "duration",
                        value: function() {
                            if (!this.creativeAd) return 0;
                            var e = this.creativeAd.getAdDuration();
                            return e < 0 ? 0 : e
                        }
                    }, {
                        key: "currentTime",
                        value: function() {
                            if (!this.creativeAd) return 0;
                            var e = this.creativeAd.getAdRemainingTime();
                            return e < 0 ? 0 : this.duration() - e
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            var e = V(f.mark(function e(n, r, i) {
                                return f.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, G(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "resize", this).call(this, n, r, i);
                                        case 2:
                                            return e.abrupt("return", br(this.creativeAd, "resizeAd", "AdSizeChange", n, r, i));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(),
                Vr = function(e, t, n) {
                    var r = n.tracker,
                        i = "VPAID" === n.type ? new Hr(e, t, n) : new Yn(e, t, n);
                    return Object.values(v).forEach(function(t) {
                        return i.on(t, function(t) {
                            var n = t.type,
                                o = {
                                    data: t.data,
                                    errorCode: i.errorCode,
                                    tracker: r
                                };
                            ! function(e, t, n) {
                                var r = n.data,
                                    i = n.errorCode,
                                    o = n.tracker,
                                    s = void 0 === o ? _e : o,
                                    a = n.logger,
                                    l = void 0 === a ? console : a,
                                    u = xe[e];
                                u ? u(t, {
                                    data: z({}, r, {
                                        errorCode: i
                                    }),
                                    errorCode: i,
                                    tracker: s
                                }) : l.error("Event '" + e + "' cannot be tracked")
                            }(n, e, o)
                        })
                    }), Object.values(b).forEach(function(t) {
                        return i.on(t, function(t) {
                            var n = {
                                data: t.data,
                                tracker: r
                            };
                            ! function(e, t, n) {
                                var r = n.data,
                                    i = n.tracker,
                                    o = void 0 === i ? _e : i,
                                    s = n.logger,
                                    a = void 0 === s ? console : s,
                                    l = Ie[e];
                                l ? l(t, {
                                    data: z({}, r),
                                    tracker: o
                                }) : a.error("Event '" + e + "' cannot be tracked")
                            }(t.type, e, n)
                        })
                    }), i
                },
                Ur = function(e, t) {
                    if (!Array.isArray(e) || 0 === e.length) throw new TypeError("Invalid vastChain");
                    if (!(t instanceof Ve)) throw new TypeError("Invalid VideoAdContainer")
                },
                Wr = function(e, t) {
                    var n = fe(e);
                    return !!n && n.some(function(e) {
                        return We(t, e)
                    })
                },
                qr = function(e, t) {
                    var n = t.onAdReady;
                    return new Promise(function(t, r) {
                        var i = function(e) {
                            return function() {
                                return r(new Error("Ad unit start rejected due to event '" + e + "'"))
                            }
                        };
                        e.onError(r), e.on("start", function() {
                            return t(e)
                        }), e.on(fr, i(fr)), e.on("closeLinear", i("closeLinear")), e.on(er, i(er)), n(e), e.start()
                    })
                },
                zr = function(e, t, n) {
                    if (r = e[0].ad, !Boolean(me(r))) throw new Error("No valid creative found in the passed VAST chain");
                    var r, i = Vr(e, t, z({}, n, {
                        type: "VPAID"
                    }));
                    return qr(i, n)
                },
                Gr = function(e, t, n) {
                    var r = Vr(e, t, z({}, n, {
                        type: "VAST"
                    }));
                    return qr(r, n)
                },
                Xr = function() {
                    var e = V(f.mark(function e(t, n, r) {
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return Ur(t, n), e.prev = 1, e.next = 4, zr(t, n, r);
                                case 4:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                    if (e.prev = 7, e.t0 = e.catch(1), !Wr(t[0].ad, n.videoElement)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", Gr(t, n, r));
                                case 11:
                                    throw e.t0;
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0, [
                            [1, 7]
                        ])
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Qr = function() {
                    var e = V(f.mark(function e(t, n, r) {
                        var i, o, s, a, l, u, c;
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = void 0, e.prev = 1, o = r.timeout, i = Ue(n, r.videoElement), s = Xr(t, i, r), "number" == typeof o && (a = !1, l = void 0, u = new Promise(function(e, n) {
                                        l = setTimeout(function() {
                                            var e = r.tracker;
                                            Ce(t, {
                                                errorCode: 402,
                                                tracker: e
                                            }), a = !0, n(new Error("Timeout while starting the ad"))
                                        }, r.timeout)
                                    }), s = Promise.race([s.then(function(e) {
                                        return a ? e.isStarted() && e.cancel() : clearTimeout(l), e
                                    }), u])), e.next = 8, s;
                                case 8:
                                    return (c = e.sent).onFinish(function() {
                                        i.destroy()
                                    }), e.abrupt("return", c);
                                case 13:
                                    throw e.prev = 13, e.t0 = e.catch(1), i && i.destroy(), e.t0;
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0, [
                            [1, 13]
                        ])
                    }));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Yr = function() {
                    var e = V(f.mark(function e(t) {
                        var n, r, i, o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = {
                                        credentials: "include"
                                    }, r = Object.assign({}, n, s), e.next = 4, window.fetch(t, r);
                                case 4:
                                    if (!((i = e.sent).status >= 400)) {
                                        e.next = 9;
                                        break
                                    }
                                    throw (o = new Error(i.statusText)).response = i, o;
                                case 9:
                                    return e.abrupt("return", i);
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Kr = Symbol("requested"),
                Zr = function(e) {
                    e[Kr] = !0
                },
                Jr = function(e, t) {
                    var n = t.wrapperLimit,
                        r = void 0 === n ? 5 : n;
                    if (e.length > r) {
                        var i = new Error("Wrapper Limit reached");
                        throw i.code = 304, i
                    }
                },
                $r = function() {
                    var e = V(f.mark(function e(t, n) {
                        var r, i;
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, Yr(t, n);
                                case 3:
                                    return r = e.sent, e.next = 6, r.text();
                                case 6:
                                    return i = e.sent, e.abrupt("return", i);
                                case 10:
                                    throw e.prev = 10, e.t0 = e.catch(0), e.t0.code = 502, e.t0;
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0, [
                            [0, 10]
                        ])
                    }));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                ei = function(e) {
                    try {
                        return L(e)
                    } catch (e) {
                        throw e.code = 100, e
                    }
                },
                ti = function(e) {
                    try {
                        var t = ae(e);
                        if (Boolean(t)) return Zr(t), t;
                        throw new Error("No Ad")
                    } catch (e) {
                        throw e.code = 303, e
                    }
                },
                ni = function(e, t) {
                    var n = e.ad,
                        r = e.parsedXML,
                        i = t.allowMultipleAds,
                        o = void 0 === i || i,
                        s = t.followAdditionalWrappers,
                        a = void 0 === s || s;
                    if (!le(n) && !ue(n)) {
                        var l = new Error("Invalid VAST, ad contains neither Wrapper nor Inline");
                        throw l.code = 101, l
                    }
                    if (se(r) && !o) {
                        var u = new Error("Multiple ads are not allowed");
                        throw u.code = 203, u
                    }
                    if (le(n) && !a) {
                        var c = new Error("To follow additional wrappers is not allowed");
                        throw c.code = 200, c
                    }
                },
                ri = function(e, t) {
                    var n = e[0],
                        r = Boolean(n) && le(n.ad) ? de(n.ad) : {};
                    return z({}, r, t)
                },
                ii = (mn = V(f.mark(function e(t, n) {
                    var r, i, o, s, a, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return f.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = {
                                    ad: null,
                                    errorCode: null,
                                    parsedXML: null,
                                    requestTag: t,
                                    XML: null
                                }, i = void 0, o = void 0, s = void 0, e.prev = 4, i = ri(l, n), Jr(l, i), a = $r(t, i), "number" == typeof i.timeout && (s = i.timeout, o = Date.now(), a = Promise.race([a, new Promise(function(e, t) {
                                    setTimeout(function() {
                                        var e = new Error("RequestAd timeout");
                                        e.code = 301, t(e)
                                    }, s)
                                })])), e.next = 11, a;
                            case 11:
                                if (r.XML = e.sent, r.parsedXML = ei(r.XML), r.ad = ti(r.parsedXML), ni(r, i), !le(r.ad)) {
                                    e.next = 18;
                                    break
                                }
                                return o && (s -= Date.now() - o), e.abrupt("return", ii(ce(r.ad), z({}, i, {
                                    timeout: s
                                }), [r].concat(K(l))));
                            case 18:
                                return e.abrupt("return", [r].concat(K(l)));
                            case 21:
                                return e.prev = 21, e.t0 = e.catch(4), Number.isInteger(e.t0.code) || (e.t0.code = 900), r.errorCode = e.t0.code, r.error = e.t0, e.abrupt("return", [r].concat(K(l)));
                            case 27:
                            case "end":
                                return e.stop()
                        }
                    }, e, void 0, [
                        [4, 21]
                    ])
                })), function(e, t) {
                    return mn.apply(this, arguments)
                }),
                oi = function(e, t) {
                    var n = e.ad,
                        r = e.parsedXML,
                        i = t.fallbackOnNoAd,
                        o = void 0 === i || i,
                        s = t.useAdBuffet,
                        a = void 0 !== s && s,
                        l = ne(r).filter(function(e) {
                            return !Boolean(e[Kr])
                        }),
                        u = null;
                    return se(r) ? (a && (u = l.filter(function(e) {
                        return !oe(e)
                    })[0]), u || (u = function(e, t) {
                        var n = ie(e) + 1;
                        return t.find(function(e) {
                            return ie(e) === n
                        }) || null
                    }(n, l))) : l.length > 0 && o && (u = l[0]), u
                },
                si = function e(t, n) {
                    ! function(e) {
                        if (!Array.isArray(e)) throw new TypeError("Invalid VAST chain");
                        if (0 === e.length) throw new Error("No next ad to request")
                    }(t);
                    var r = t[0],
                        i = oi(r, n);
                    if (Boolean(i)) {
                        var o = [Object.assign({}, r, {
                            ad: i
                        })].concat(K(t.slice(1)));
                        return Zr(i), le(i) ? ii(ce(i), n, o) : Promise.resolve(o)
                    }
                    return e(t.slice(1), n)
                },
                ai = function(e, t) {
                    if (!e || 0 === e.length) throw new Error("Invalid VastChain");
                    var n = e[0];
                    if (!t.vpaidEnabled && function(e) {
                            return Boolean(me(e[0].ad))
                        }(e)) {
                        var r = new Error("VPAID ads are not supported by the current player");
                        r.code = 200, n.errorCode = 200, n.error = r
                    }
                    if (Boolean(n.error)) throw n.error;
                    t.hooks && "function" == typeof t.hooks.validateVastResponse && t.hooks.validateVastResponse(e)
                },
                li = function(e) {
                    return function() {
                        "function" == typeof e && e.apply(void 0, arguments)
                    }
                },
                ui = function(e, t) {
                    return e && e[0] && e[0].errorCode || t.code
                },
                ci = function(e, t) {
                    var n = t.hooks;
                    return n && "function" == typeof n.transformVastResponse ? n.transformVastResponse(e) : e
                },
                di = function() {
                    var e = V(f.mark(function e(t, n, r, i) {
                        var o, s, a, l, u, c, d, p, h, v;
                        return f.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return o = void 0, s = void 0, a = void 0, l = z({}, r), u = l.onAdStart, c = l.onError, d = l.onRunFinish, e.prev = 5, "number" == typeof l.timeout && (s = Date.now()), e.next = 9, t();
                                case 9:
                                    if (o = e.sent, !i()) {
                                        e.next = 13;
                                        break
                                    }
                                    return d(), e.abrupt("return");
                                case 13:
                                    return s && (p = Date.now(), l.timeout -= p - s, s = p), ai(o, l), e.next = 17, Qr(ci(o, l), n, z({}, l));
                                case 17:
                                    if (a = e.sent, !i()) {
                                        e.next = 22;
                                        break
                                    }
                                    return a.cancel(), d(), e.abrupt("return");
                                case 22:
                                    a.onError(c), a.onFinish(d), u(a), e.next = 38;
                                    break;
                                case 27:
                                    if (e.prev = 27, e.t0 = e.catch(5), h = ui(o, e.t0), Boolean(h) && (v = r.tracker, Ce(o, {
                                            errorCode: h,
                                            tracker: v
                                        })), c(e.t0), !o || i()) {
                                        e.next = 37;
                                        break
                                    }
                                    if (s && (l.timeout -= Date.now() - s), s && !(l.timeout > 0)) {
                                        e.next = 37;
                                        break
                                    }
                                    return di(function() {
                                        return si(o, l)
                                    }, n, z({}, l), i), e.abrupt("return");
                                case 37:
                                    d();
                                case 38:
                                case "end":
                                    return e.stop()
                            }
                        }, e, void 0, [
                            [5, 27]
                        ])
                    }));
                    return function(t, n, r, i) {
                        return e.apply(this, arguments)
                    }
                }(),
                pi = function(e, t, n) {
                    var r = !1,
                        i = null,
                        o = li(n.onAdStart),
                        s = z({
                            vpaidEnabled: !0
                        }, n, {
                            onAdReady: li(n.onAdReady),
                            onAdStart: function(e) {
                                o(i = e)
                            },
                            onError: li(n.onError),
                            onRunFinish: li(n.onRunFinish)
                        });
                    return n.videoElement && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && n.videoElement.load(), di(function() {
                            return ii(e, s)
                        }, t, s, function() {
                            return r
                        }),
                        function() {
                            r = !0, i && !i.isFinished() && i.cancel()
                        }
                },
                hi = function(e, t) {
                    var n = e && k(e, t);
                    if (n) return I(n)
                },
                fi = function e(t) {
                    var n = function(e) {
                        var t = P(e);
                        return t && k(t, "Pricing")
                    }(t[0].ad);
                    return n ? {
                        pricing: I(n),
                        pricingCurrency: O(n, "currency"),
                        pricingModel: O(n, "model")
                    } : t.length > 1 ? e(t.slice(1)) : {}
                },
                vi = function(e) {
                    var t, n, r, i, o, s = e.map(function(e) {
                            var t = e.ad;
                            return O(t, "id")
                        }),
                        a = e.map(function(e) {
                            return function(e) {
                                var t = P(e),
                                    n = t && k(t, "AdSystem");
                                if (n) return I(n)
                            }(e.ad)
                        }),
                        l = e.map(function(e) {
                            var t = e.ad;
                            return F(t)
                        }).filter(function(e) {
                            return Boolean(e)
                        }),
                        u = l.map(function(e) {
                            return O(e, "id")
                        }),
                        c = l.map(function(e) {
                            return O(e, "adId")
                        }),
                        d = fi(e),
                        p = d.pricing,
                        h = d.pricingCurrency,
                        f = d.pricingModel,
                        v = (t = e[0].ad, n = k(t, "InLine"), (r = n && k(n, "Category")) ? {
                            category: I(r),
                            categoryAuthority: O(r, "authority")
                        } : {}),
                        m = v.category,
                        y = v.categoryAuthority,
                        g = P(e[0].ad),
                        b = F(e[0].ad),
                        A = b && k(b, "Linear"),
                        w = hi(g, "AdServingId"),
                        j = (i = e[0].parsedXML, (o = i && k(i, "VAST")) ? O(o, "version") : "unknown"),
                        T = hi(g, "Advertiser"),
                        E = hi(g, "AdTitle"),
                        _ = hi(g, "Description"),
                        C = hi(A, "Duration"),
                        S = C && D(C),
                        x = void 0,
                        M = [],
                        B = void 0,
                        L = [],
                        N = void 0,
                        R = [],
                        H = void 0,
                        V = [],
                        U = void 0,
                        W = void 0,
                        q = void 0,
                        z = void 0,
                        G = [],
                        X = void 0,
                        Q = void 0,
                        K = void 0,
                        Z = void 0;
                    if (ue(e[0].ad)) {
                        var J = Y(s);
                        x = J[0], M = J.slice(1);
                        var $ = Y(a);
                        B = $[0], L = $.slice(1);
                        var ee = Y(u);
                        N = ee[0], R = ee.slice(1);
                        var te = Y(c);
                        H = te[0], V = te.slice(1), U = ge(e[0].ad), W = je(e[0].XML);
                        var ne = k(b, "UniversalAdId");
                        q = I(ne), z = O(ne, "idRegistry"), G = fe(e[0].ad), X = Boolean(me(e[0].ad)), K = O(A, "skipoffset"), Z = D(K), Q = Boolean(K)
                    } else le(e[0].ad) && (M = s, L = a, R = u, V = c);
                    return {
                        adId: x,
                        adServingId: w,
                        adSystem: B,
                        adTitle: E,
                        advertiser: T,
                        adWrapperCreativeAdIds: V,
                        adWrapperCreativeIds: R,
                        adWrapperIds: M,
                        adWrapperSystems: L,
                        category: m,
                        categoryAuthority: y,
                        clickThroughUrl: U,
                        creativeAdId: H,
                        creativeData: W,
                        creativeId: N,
                        description: _,
                        duration: C,
                        durationInMs: S,
                        mediaFiles: G,
                        pricing: p,
                        pricingCurrency: h,
                        pricingModel: f,
                        skipOffset: K,
                        skipOffsetInMs: Z,
                        skippable: Q,
                        universalAdId: q,
                        universalAdIdRegistry: z,
                        vastVersion: j,
                        vpaid: X
                    }
                }
        }.call(this, n(10))
}, function(e, t) {
    var n = {
        getBundleLocation: function() {
            var e = window.DM;
            return e && e.getPageMetadata ? e.getPageMetadata().videoBundleLocation : null
        },
        getVideoPlayerVersion: function() {
            var e = n.getBundleLocation();
            return e ? (e = e.replace(/\/+$/, "")).split("/").pop() : "UNKNOWN"
        }
    };
    e.exports = n
}, function(e, t) {
    var n = "related-videos-history",
        r = 100;

    function i() {
        try {
            return JSON.parse(localStorage.getItem(n)) || []
        } catch (e) {
            return console.error(e.message), []
        }
    }

    function o(e) {
        if (e) try {
            localStorage.setItem(n, JSON.stringify(e))
        } catch (e) {
            console.error(e.message)
        } else localStorage.removeItem(n)
    }
    e.exports = {
        get: i,
        getMap: function() {
            return i().reduce(function(e, t) {
                return e[t] = !0, e
            }, {})
        },
        set: o,
        push: function(e) {
            var t = i(),
                n = t.some(function(t) {
                    return t === e
                });
            e && !n && (t.unshift(e), o(t.slice(0, r)))
        }
    }
}, function(e, t, n) {
    var r = n(4),
        i = n(0);
    var o = {
        createElBefore: function(e, t) {
            var n = document.createElement("div");
            return n.className = e, t.parentNode.insertBefore(n, t), n
        },
        getVerticalOffset: function() {
            return window.pageYOffset
        },
        onDisableForceFlyout: function(e) {
            window.addEventListener("message", function(t) {
                "mol-fe-videoplayer.flyout-disable" === t.data && e()
            })
        },
        overwriteAdOptions: function(e) {
            var t = r.queryStringToObj(window.location.search);
            return e.viewportOffset = i.isDefined(t.flyoutViewportOffset) ? parseFloat(t.flyoutViewportOffset) : e.viewportOffset, e.animTime = i.isDefined(t.flyoutAnimTime) ? parseInt(t.flyoutAnimTime, 10) : e.animTime, e.animTimeWait = i.isDefined(t.flyoutAnimTimeWait) ? parseInt(t.flyoutAnimTimeWait, 10) : e.animTimeWait, e
        },
        wrapElement: function(e, t) {
            return t.appendChild(e), e
        }
    };
    e.exports = o
}, function(e, t, n) {
    var r = n(0),
        i = {
            separators: [" ", ""],
            ellipsis: "&hellip;"
        };

    function o(e) {
        var t = void 0;
        return t = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)
    }

    function s(e, t) {
        var n = void 0,
            r = void 0,
            s = void 0,
            a = void 0,
            l = void 0,
            u = (t = t || {}).separators || i.separators,
            c = t.ellipsis || i.ellipsis,
            d = t.maxlines,
            p = void 0;
        if (p = d ? d * function(e) {
                var t = document.createElement(e.nodeName);
                t.setAttribute("style", "margin:0px;padding:0px;font-family:" + e.style.fontFamily + ";font-size:" + e.style.fontSize), t.innerHTML = "test";
                var n = (t = e.parentNode.appendChild(t)).clientHeight;
                return t.parentNode.removeChild(t), n
            }(e) + o(e) : e.parentNode.clientHeight - o(e.parentNode), (l = e.getAttribute("clamp-full-text")) ? e.innerHTML = l : (l = e.innerHTML, e.setAttribute("clamp-full-text", l)), !(e.clientHeight <= p))
            for (n = 0; n < u.length; n++)
                for (a = u[n], r && (l += r, e.innerHTML = l + c), s = l.split(a); e.clientHeight > p && s.length > 0;) r = a + s.pop(), l = s.join(a), e.innerHTML = l + c
    }
    e.exports = function(e, t) {
        if (e)
            if (r.isNodeList(e))
                for (var n = 0; n < e.length; n++) s(e[n], t);
            else s(e, t)
    }
}, function(e, t, n) {
    var r = n(122),
        i = videojs.Component.extend({
            init: function(e, t) {
                var n = void 0;
                for (videojs.Component.call(this, e, t), n = 0; n < t.videos.length; n++) this.addChild(new r(e, {
                    video: t.videos[n]
                }))
            }
        });
    i.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-video-list"
        })
    }, e.exports = i
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function(e) {
        var t = e.cb,
            n = e.throwError,
            i = void 0 !== n && n,
            o = void 0 === t ? "undefined" : r(t);
        if ("function" !== o) {
            if (i) throw new Error('onDocumentLoad: expected function, but received "' + o + '"');
            return !1
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(6),
        o = i.elementIsVisibleInViewPort,
        s = i.waitForElementToLoad,
        a = i.calcPositionStyles,
        l = n(29).elementAttribute,
        u = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.element = t, this.originalElement = t, this.initDone = !1, this.synchPromise = null, this.synchIsAllowed = !0, this.hasNewSize = !0, this.showOriginalOnPause = !1
            }
            return r(e, [{
                key: "isInViewPort",
                value: function() {
                    return o(this.getActiveElement())
                }
            }, {
                key: "setOriginalElementActive",
                value: function() {
                    this.getActiveElement() !== this.originalElement && this.showOriginalElement().hideElement()
                }
            }, {
                key: "setMainElementActive",
                value: function() {
                    this.getActiveElement() !== this.element && this.showElement().hideOriginalElement()
                }
            }, {
                key: "getActiveElement",
                value: function() {
                    return "none" !== this.originalElement.style.display ? this.originalElement : this.element
                }
            }, {
                key: "synch",
                value: function() {
                    var e = this;
                    return this.synchPromise ? this.synchPromise : (this.synchPromise = s(this.element).catch(function() {}).then(function() {
                        if (!e.synchIsAllowed) throw new Error("Synch is not allowed");
                        e.hasNewSize && e.setOriginalElementActive();
                        var t = e.getActiveElement();
                        return t.clientHeight > 1 && t.clientWidth > 1 && e.isInViewPort() ? Promise.resolve(e.initDone ? null : e._init()).then(function() {
                            return e.initDone ? (e.hasNewSize && e.fixElement(), e._play()) : e._pause()
                        }).catch(function() {}) : e._pause()
                    }).then(this._resetSynchPromise.bind(this)).catch(this._resetSynchPromise.bind(this)), Promise.resolve(this.synchPromise))
                }
            }, {
                key: "synchResize",
                value: function() {
                    return this.hasNewSize = !0, this.synch()
                }
            }, {
                key: "fixElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element;
                    return this.element === this.originalElement ? this : (Object.assign(e.style, a(this.originalElement)), this.hasNewSize = !1, this)
                }
            }, {
                key: "_resetSynchPromise",
                value: function() {
                    this.synchIsAllowed && (this.synchPromise = null)
                }
            }, {
                key: "_registerMainElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.deRegisteredElement;
                    this.hideElement(e), e.setAttribute(l, this.element.getAttribute(l) || ""), this.element.parentNode && this.element.parentNode.replaceChild(e, this.element), this.originalElement = this.element, this.element = e, this.element.parentNode && this.element.parentNode.insertBefore(this.originalElement, this.element)
                }
            }, {
                key: "_deRegisterMainElement",
                value: function() {
                    this.element !== this.originalElement && (this.deRegisteredElement = this.element, this.showOriginalElement(), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = this.originalElement)
                }
            }, {
                key: "hideElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element;
                    return e && e.style && "none" !== e.style.display && (e.style.display = "none"), this
                }
            }, {
                key: "showElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element;
                    return e && e.style && "" !== e.style.display && (e.style.display = ""), this
                }
            }, {
                key: "hideOriginalElement",
                value: function() {
                    return this.hideElement(this.originalElement)
                }
            }, {
                key: "showOriginalElement",
                value: function() {
                    return this.showElement(this.originalElement)
                }
            }, {
                key: "_init",
                value: function() {}
            }, {
                key: "_play",
                value: function() {
                    this.setMainElementActive()
                }
            }, {
                key: "_pause",
                value: function() {
                    this.showOriginalOnPause && this.setOriginalElementActive()
                }
            }]), e
        }();
    e.exports = u
}, function(e, t) {
    e.exports = {
        elementAttribute: "data-mol-fe-video-preview",
        playbackFw: 1
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(6).nodeListToArray,
        o = n(29).playbackFw,
        s = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.videoPreviewImg = t, this.nextFrameDelay = parseInt(1e3 / (this.videoPreviewImg.fps * o), 10), this.frameHolderClassName = "frame-holder", this.isPlaying = !1, this.curFrame = 0, this.initDone = !1, this._frameHolders = [], this._frameHoldersCount = 1, this.animationStart = null, this.animationStartFrame = null
            }
            return r(e, [{
                key: "_createFrameHolder",
                value: function() {
                    var e = document.createElement("div");
                    return e.className = this.frameHolderClassName + " frame-holder-current", e.style["background-image"] = 'url("' + this.videoPreviewImg.filmSrc + '")', e.style["background-size"] = 100 * this.framesPerRow + "% " + 100 * this.framesRows + "%", e
                }
            }, {
                key: "_createFrameHolders",
                value: function() {
                    var e = this;
                    this._calcFrameGridParams(), this.frameHoldersElement ? i(this.frameHoldersElement.children).forEach(function(t) {
                        e.frameHoldersElement.removeChild(t)
                    }) : (this.frameHoldersElement = document.createElement("div"), this.frameHoldersElement.className = "frame-holders", this.videoPreviewImg.element.appendChild(this.frameHoldersElement)), this._frameHolders = [];
                    for (var t = 0; t < this._frameHoldersCount; t++) {
                        var n = this._createFrameHolder();
                        this.frameHoldersElement.appendChild(n), this._frameHolders.push(n)
                    }
                }
            }, {
                key: "_calcFrameGridParams",
                value: function() {
                    var e = this.videoPreviewImg.filmElement.naturalWidth;
                    this.framesPerRow = e / this.videoPreviewImg.frameWidth >> 0, this.framesRows = this.videoPreviewImg.filmElement.naturalHeight / this.videoPreviewImg.frameHeight >> 0
                }
            }, {
                key: "getCurFrameBackgroundPosition",
                value: function() {
                    return "-" + 100 * (this.curFrame % this.framesPerRow) + "% -" + 100 * (this.curFrame / this.framesPerRow >> 0) + "%"
                }
            }, {
                key: "nextFrame",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.curFrame + 1;
                    this.curFrame = e % this.videoPreviewImg.frameCount
                }
            }, {
                key: "setFrameHolderNext",
                value: function(e) {
                    e.className = this.frameHolderClassName + " frame-holder-next", e.style["background-position"] = this.getCurFrameBackgroundPosition()
                }
            }, {
                key: "init",
                value: function() {
                    this.initDone || (this.initDone = !0, this._createFrameHolders())
                }
            }, {
                key: "play",
                value: function() {
                    !this.isPlaying && this.initDone && (this.isPlaying = !0, this.nextFrame(), this.continueAnimation())
                }
            }, {
                key: "continueAnimation",
                value: function() {
                    var e = this;
                    this.animationRequestId = window.requestAnimationFrame(function(t) {
                        var n = e.videoPreviewImg.frameCount;
                        null === e.animationStart && (e.animationStart = t), null === e.animationStartFrame && (e.animationStartFrame = (e.curFrame - (e.curFrame - 1) % n) % n);
                        var r = (t - e.animationStart) / e.nextFrameDelay + e.animationStartFrame >> 0;
                        r >= n && (e.animationStart = t, e.animationStartFrame = r = 0), (e.animationStart === t || r - e.curFrame > 0) && e.nextFrame(r), e.isPlaying && e.continueAnimation()
                    })
                }
            }, {
                key: "stopAnimation",
                value: function() {
                    window.cancelAnimationFrame(this.animationRequestId), this.animationStart = null, this.animationStartFrame = this.curFrame
                }
            }, {
                key: "pause",
                value: function() {
                    this.isPlaying = !1, this.stopAnimation()
                }
            }]), e
        }();
    e.exports = s
}, function(e, t) {
    e.exports = function(e) {
        DM.molContentPlayer || (DM.molContentPlayer = e)
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function(e, t) {
            if (!e) throw new TypeError('Missing required "src" parameter');
            return new Promise(function(n, r) {
                var i = document.createElement("script"),
                    o = t && t.placeholder;
                i.type = "text/javascript", i.async = !1, i.defer = !0, i.onerror = function() {
                    return r(new URIError("The script " + e + " is not accessible."))
                }, i.onload = function() {
                    return n(i)
                }, o || (o = document.currentScript ? document.currentScript.parentNode : document.head), i.src = e, o.appendChild(i)
            })
        },
        i = void 0,
        o = function() {
            return i || (i = window.google && window.google.ima ? Promise.resolve(window.google.ima) : r("//imasdk.googleapis.com/js/sdkloader/ima3.js").then(function() {
                return window.google.ima
            })), i
        },
        s = function(e) {
            if ("number" != typeof e.offsetHeight) {
                var t = e.getBoundingClientRect();
                return {
                    width: t.width,
                    height: t.height
                }
            }
            return {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        };
    var a = function(e, t, n) {
            if (!1 === t.hasOwnProperty("partnerCode")) return !1;
            var r = window.location.protocol,
                i = "https:" === r ? "z" : "js",
                o = document.createElement("script");
            n = n || e && (void 0 !== e.O ? e.O.parentNode : document.body) || document.body;
            var s = [],
                a = {
                    adsManager: e,
                    ids: t,
                    imaSDK: !0,
                    events: []
                },
                l = {
                    complete: "AdVideoComplete",
                    firstquartile: "AdVideoFirstQuartile",
                    impression: "AdImpression",
                    loaded: "AdLoaded",
                    midpoint: "AdVideoMidpoint",
                    pause: "AdPaused",
                    skip: "AdSkipped",
                    start: "AdVideoStart",
                    thirdquartile: "AdVideoThirdQuartile",
                    volumeChange: "AdVolumeChange"
                };
            if (google && google.ima && e) {
                var u = "_moatApi" + Math.floor(1e8 * Math.random()),
                    c = void 0;
                for (c in google.ima.AdEvent.Type) {
                    var d = function(t) {
                        if (a.sendEvent) {
                            for (t = s.length - 1; 0 <= t; t--) e.removeEventListener(s[t].type, s[t].func);
                            a.sendEvent(a.events)
                        } else a.events.push({
                            type: l[t.type] || t.type,
                            adVolume: e.getVolume()
                        })
                    };
                    e.addEventListener(google.ima.AdEvent.Type[c], d), s.push({
                        type: google.ima.AdEvent.Type[c],
                        func: d
                    })
                }
            }
            u = void 0 !== u ? u : "", window[u] = a, n && n.appendChild(o), o.src = r + "//" + i + ".moatads.com/" + t.partnerCode + "/moatvideo.js#" + u
        },
        l = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var u = function() {
            function e(t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.evts = {}, this.logger = t || console
            }
            return l(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this.evts;
                    return (n[e] || (n[e] = [])).push(t), this
                }
            }, {
                key: "removeListener",
                value: function(e, t) {
                    var n = this.evts,
                        r = n[e] || (n[e] = []);
                    return n[e] = r.filter(function(e) {
                        return e !== t && e._ !== t
                    }), this
                }
            }, {
                key: "removeAllListeners",
                value: function(e) {
                    return e ? this.evts[e] = null : this.evts = {}, this
                }
            }, {
                key: "once",
                value: function(e, t) {
                    var n = this,
                        r = function r() {
                            n.removeListener(e, r), t.apply(void 0, arguments)
                        };
                    return r._ = t, this.on(e, r)
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = this, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    var o = this.evts,
                        s = o[e] || (o[e] = []),
                        a = s.length > 0;
                    return s.forEach(function(e) {
                        try {
                            e.apply(void 0, r)
                        } catch (e) {
                            t.logger.error(e, e.stack)
                        }
                    }), a
                }
            }]), e
        }(),
        c = function() {
            return function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        d = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var p = Symbol("_private"),
        h = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r[p] = {
                    paused: !0,
                    started: !1,
                    finished: !1,
                    muted: !1,
                    duration: 0,
                    currentTime: 0
                }, r.creativeAd = null, r.type = "IMA", r.error = null, r.errorCode = null, r.adsManager = e, r.videoElement = n, r[p].muted = n.muted, n.muted ? (r[p].muted = !0, r.setVolume(0)) : r.setVolume(n.volume), e.addEventListener(window.google.ima.AdEvent.Type.VOLUME_CHANGED, function() {
                    var e = r.getVolume(),
                        t = !r[p].muted && 0 === e,
                        n = r[p].muted && e > 0;
                    r.emit("volumeChanged", {
                        type: "volumeChanged",
                        adUnit: r
                    }), n ? (r[p].muted = !1, r.emit("unmute", {
                        type: "unmute",
                        adUnit: r
                    })) : t && (r[p].muted = !0, r.emit("mute", {
                        type: "mute",
                        adUnit: r
                    }))
                }), e.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
                    r.error = e.getError(), r.error && "function" == typeof r.error.getVastErrorCode && (r.errorCode = r.error.getVastErrorCode(), r.error.code = r.errorCode, r.error.message = r.error.getMessage()), r.emit("error", {
                        type: "error",
                        adUnit: r
                    })
                }), e.addEventListener(window.google.ima.AdEvent.Type.IMPRESSION, function(e) {
                    r.creativeAd = e.getAd();
                    var t = r.creativeAd.getApiFramework();
                    "string" == typeof t && t.toUpperCase().includes("VPAID") ? r.type = "VPAID" : r.type = "VAST", r.emit("impression", {
                        type: "impression",
                        adUnit: r
                    })
                }), e.addEventListener(window.google.ima.AdEvent.Type.STARTED, function() {
                    r[p].paused = !1, r[p].started = !0, r.emit("start", {
                        type: "start",
                        adUnit: r
                    })
                }), [
                    [window.google.ima.AdEvent.Type.SKIPPED, "skip"],
                    [window.google.ima.AdEvent.Type.USER_CLOSE, "close"],
                    [window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, "contentResumeRequested"]
                ].forEach(function(t) {
                    var n = c(t, 2),
                        i = n[0],
                        o = n[1];
                    e.addEventListener(i, function() {
                        r.emit(o, {
                            type: o,
                            adUnit: r
                        }), r.isFinished() || (r[p].finished = !0, r[p].paused = !0, r.emit("finish", {
                            type: "finish",
                            adUnit: r
                        }))
                    })
                }), e.addEventListener(window.google.ima.AdEvent.Type.PAUSED, function() {
                    r[p].paused = !0, r.emit("pause", {
                        type: "pause",
                        adUnit: r
                    })
                }), e.addEventListener(window.google.ima.AdEvent.Type.RESUMED, function() {
                    r[p].paused = !1, r.emit("resume", {
                        type: "resume",
                        adUnit: r
                    })
                }), [
                    [window.google.ima.AdEvent.Type.FIRST_QUARTILE, "firstQuartile"],
                    [window.google.ima.AdEvent.Type.MIDPOINT, "midpoint"],
                    [window.google.ima.AdEvent.Type.THIRD_QUARTILE, "thirdQuartile"],
                    [window.google.ima.AdEvent.Type.COMPLETE, "complete"]
                ].forEach(function(t) {
                    var n = c(t, 2),
                        i = n[0],
                        o = n[1];
                    e.addEventListener(i, function() {
                        r.emit(o, {
                            type: o,
                            adUnit: r
                        })
                    })
                }), e.addEventListener(window.google.ima.AdEvent.Type.CLICK, function() {
                    r[p].paused ? r.resume() : r.pause()
                }), e.addEventListener(window.google.ima.AdEvent.Type.AD_PROGRESS, function(e) {
                    var t = e.getAdData();
                    r[p].duration = t.duration, r[p].currentTime = t.currentTime, r.emit("adProgress", {
                        type: "adProgress",
                        adUnit: r
                    })
                }), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, u), d(t, [{
                key: "start",
                value: function() {
                    var e = s(this.videoElement),
                        t = e.width,
                        n = e.height;
                    this.adsManager.init(t, n, window.google.ima.ViewMode.NORMAL), this.adsManager.start()
                }
            }, {
                key: "isStarted",
                value: function() {
                    return this[p].started
                }
            }, {
                key: "isFinished",
                value: function() {
                    return this[p].finished
                }
            }, {
                key: "resume",
                value: function() {
                    this.adsManager.resume()
                }
            }, {
                key: "pause",
                value: function() {
                    this.adsManager.pause()
                }
            }, {
                key: "paused",
                value: function() {
                    return this[p].paused
                }
            }, {
                key: "cancel",
                value: function() {
                    this.adsManager.stop()
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.adsManager.getVolume()
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.adsManager.setVolume(e)
                }
            }, {
                key: "resize",
                value: function(e, t, n) {
                    var r = "FULLSCREEN" === n.toUpperCase() ? "FULLSCREEN" : "NORMAL";
                    this.adsManager.resize(e, t, window.google.ima.ViewMode[r])
                }
            }, {
                key: "duration",
                value: function() {
                    return this[p].duration
                }
            }, {
                key: "currentTime",
                value: function() {
                    return this[p].currentTime
                }
            }]), t
        }(),
        f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        v = function(e, t, n, r) {
            var i, o, l, u, c = void 0,
                d = !1,
                p = r.timeout,
                v = void 0 === p ? 15e3 : p,
                m = r.onAdReady,
                y = r.onError,
                g = r.onRunFinish,
                b = r.videoElement,
                A = function() {
                    e.contentComplete(), e.removeEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, T, !1), e.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, j, !1), c && (c.destroy(), c = null), "function" == typeof g && g()
                },
                w = function(e) {
                    "function" == typeof y && ("function" == typeof e.getVastErrorCode && (e.message = e.getMessage(), e.code = e.getVastErrorCode()), y(e)), A()
                },
                j = function(e) {
                    return w(e.getError())
                },
                T = function(e) {
                    try {
                        if (c = e.getAdsManager(b, function(e) {
                                var t = new window.google.ima.AdsRenderingSettings;
                                return t.loadVideoTimeout = e, t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t
                            }(v)), d && (c.destroy(), c = null), c.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, j), r.moat) {
                            var t = f({
                                viewMode: window.google.ima.ViewMode.NORMAL,
                                slicer1: "%esid!",
                                slicer2: "%esid!"
                            }, r.moat);
                            a(c, t, n)
                        }
                        var i = new h(c, b);
                        i.on("finish", A), "function" == typeof m && m(i), i.start()
                    } catch (e) {
                        w(e)
                    }
                };
            try {
                e.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, T, !1), e.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR, j, !1), e.requestAds((i = s(b), o = t, l = Boolean(r.autoplay), (u = new window.google.ima.AdsRequest).adTagUrl = o, u.linearAdSlotWidth = i.width, u.linearAdSlotHeight = i.height, u.nonLinearAdSlotWidth = i.width, u.nonLinearAdSlotHeight = i.height, u.setAdWillAutoPlay(l), u.setAdWillPlayMuted(l), u)), b.load()
            } catch (e) {
                w(e)
            }
            return function() {
                d = !0, A()
            }
        },
        m = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            ! function(e, t) {
                if (!(n = e) || !n.nodeName || "VIDEO" !== n.nodeName.toUpperCase()) throw new Error("createRequestAd Error: missing required video element on constructor");
                var n;
                if (! function(e) {
                        return e && e.nodeName && "DIV" === e.nodeName.toUpperCase()
                    }(t)) throw new Error("createRequestAd Error: missing required adContainer div element on constructor")
            }(e, t);
            var r = new window.google.ima.AdDisplayContainer(t, e),
                i = function(e, t) {
                    var n = t.vpaidEnabled,
                        r = t.player,
                        i = new window.google.ima.AdsLoader(e),
                        o = i.getSettings();
                    return o.setLocale("en"), r && (o.setPlayerType(r.type), o.setPlayerVersion(r.version)), n ? o.setVpaidMode(window.google.ima.ImaSdkSettings.VpaidMode.INSECURE) : o.setVpaidMode(window.google.ima.ImaSdkSettings.VpaidMode.DISABLED), o.setAutoPlayAdBreaks(!0), i
                }(r, n);
            return function(e, n, o) {
                return r.initialize(), v(i, e, t, o)
            }
        };
    n.d(t, "createRequestAd", function() {
        return m
    }), n.d(t, "loadIma", function() {
        return o
    })
}, function(e, t, n) {
    var r = this;
    var i, o = n(32).loadIma;
    n(34), n(35), n(39), n(40), n(41), n(48), n(69), n(156), DM.molFeVideoplayer || (DM.molFeVideoplayer = n(157), DM.setupMolVideoJsPlayers = DM.molFeVideoplayer, DM.onDocReady((i = regeneratorRuntime.mark(function e() {
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.prev = 0, e.next = 3, o();
                case 3:
                    e.next = 8;
                    break;
                case 5:
                    e.prev = 5, e.t0 = e.catch(0), console.error("Error loading IMA SDK", e.t0);
                case 8:
                    DM.molFeVideoplayer.init(document), DM.later.go("videoplayer-ready");
                case 10:
                case "end":
                    return e.stop()
            }
        }, e, r, [
            [0, 5]
        ])
    }), function() {
        var e = i.apply(this, arguments);
        return new Promise(function(t, n) {
            return function r(i, o) {
                try {
                    var s = e[i](o),
                        a = s.value
                } catch (e) {
                    return void n(e)
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    r("next", e)
                }, function(e) {
                    r("throw", e)
                });
                t(a)
            }("next")
        })
    })), n(160))
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    document.createElement("video"), document.createElement("audio"), document.createElement("track");
    var vjs = function(e, t, n) {
            var r;
            if ("string" == typeof e) {
                if (0 === e.indexOf("#") && (e = e.slice(1)), vjs.players[e]) return t && vjs.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && vjs.players[e].ready(n), vjs.players[e];
                r = vjs.el(e)
            } else r = e;
            if (!r || !r.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
            return r.player || new vjs.Player(r, t, n)
        },
        videojs = window.videojs = vjs;

    function _handleMultipleEvents(e, t, n, r) {
        vjs.arr.forEach(n, function(n) {
            e(t, n, r)
        })
    }
    vjs.CDN_VERSION = "4.12", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.VERSION = "4.12.15", vjs.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2e3,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this video."
    }, "GENERATED_CDN_VSN" !== vjs.CDN_VERSION && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.addLanguage = function(e, t) {
        return void 0 !== vjs.options.languages[e] ? vjs.options.languages[e] = vjs.util.mergeOptions(vjs.options.languages[e], t) : vjs.options.languages[e] = t, vjs.options.languages
    }, vjs.players = {}, __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
        return videojs
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__), vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(e) {
        var t, n;
        for (var r in t = (e = e || {}).init || e.init || this.prototype.init || this.prototype.init || function() {}, ((n = function() {
                t.apply(this, arguments)
            }).prototype = vjs.obj.create(this.prototype)).constructor = n, n.extend = vjs.CoreObject.extend, n.create = vjs.CoreObject.create, e) e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
        return n
    }, vjs.CoreObject.create = function() {
        var e = vjs.obj.create(this.prototype);
        return this.apply(e, arguments), e
    }, vjs.on = function(e, t, n) {
        if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.on, e, t, n);
        var r = vjs.getData(e);
        r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = vjs.guid++), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t) {
            if (!r.disabled) {
                t = vjs.fixEvent(t);
                var n = r.handlers[t.type];
                if (n)
                    for (var i = n.slice(0), o = 0, s = i.length; o < s && !t.isImmediatePropagationStopped(); o++) i[o].call(e, t)
            }
        }), 1 == r.handlers[t].length && (e.addEventListener ? e.addEventListener(t, r.dispatcher, !1) : e.attachEvent && e.attachEvent("on" + t, r.dispatcher))
    }, vjs.off = function(e, t, n) {
        if (vjs.hasData(e)) {
            var r = vjs.getData(e);
            if (r.handlers) {
                if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.off, e, t, n);
                var i = function(t) {
                    r.handlers[t] = [], vjs.cleanUpEvents(e, t)
                };
                if (t) {
                    var o = r.handlers[t];
                    if (o)
                        if (n) {
                            if (n.guid)
                                for (var s = 0; s < o.length; s++) o[s].guid === n.guid && o.splice(s--, 1);
                            vjs.cleanUpEvents(e, t)
                        } else i(t)
                } else
                    for (var a in r.handlers) i(a)
            }
        }
    }, vjs.cleanUpEvents = function(e, t) {
        var n = vjs.getData(e);
        0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), vjs.isEmpty(n.handlers) && (delete n.handlers, delete n.dispatcher, delete n.disabled), vjs.isEmpty(n) && vjs.removeData(e)
    }, vjs.fixEvent = function(e) {
        function t() {
            return !0
        }

        function n() {
            return !1
        }
        if (!e || !e.isPropagationStopped) {
            var r = e || window.event;
            for (var i in e = {}, r) "layerX" !== i && "layerY" !== i && "keyLocation" !== i && ("returnValue" == i && r.preventDefault || (e[i] = r[i]));
            if (e.target || (e.target = e.srcElement || document), e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement, e.preventDefault = function() {
                    r.preventDefault && r.preventDefault(), e.returnValue = !1, e.isDefaultPrevented = t, e.defaultPrevented = !0
                }, e.isDefaultPrevented = n, e.defaultPrevented = !1, e.stopPropagation = function() {
                    r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, e.isPropagationStopped = t
                }, e.isPropagationStopped = n, e.stopImmediatePropagation = function() {
                    r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
                }, e.isImmediatePropagationStopped = n, null != e.clientX) {
                var o = document.documentElement,
                    s = document.body;
                e.pageX = e.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
            }
            e.which = e.charCode || e.keyCode, null != e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
        }
        return e
    }, vjs.trigger = function(e, t) {
        var n = vjs.hasData(e) ? vjs.getData(e) : {},
            r = e.parentNode || e.ownerDocument;
        if ("string" == typeof t && (t = {
                type: t,
                target: e
            }), t = vjs.fixEvent(t), n.dispatcher && n.dispatcher.call(e, t), r && !t.isPropagationStopped() && !1 !== t.bubbles) vjs.trigger(r, t);
        else if (!r && !t.defaultPrevented) {
            var i = vjs.getData(t.target);
            t.target[t.type] && (i.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), i.disabled = !1)
        }
        return !t.defaultPrevented
    }, vjs.one = function(e, t, n) {
        if (vjs.obj.isArray(t)) return _handleMultipleEvents(vjs.one, e, t, n);
        var r = function() {
            vjs.off(e, t, r), n.apply(this, arguments)
        };
        r.guid = n.guid = n.guid || vjs.guid++, vjs.on(e, t, r)
    };
    var hasOwnProp = Object.prototype.hasOwnProperty,
        track, major, minor, match, createTrackHelper, origSetSource, origDisposeSourceHandler, canPlayType, mpegurlRE, mp4RE, loadTrack, parseCues, indexOf, root, vttjs, cueShim, regionShim, oldVTTCue, oldVTTRegion;

    function _logType(e, t) {
        var n, r, i;
        n = Array.prototype.slice.call(t), r = function() {}, i = window.console || {
            log: r,
            warn: r,
            error: r
        }, e ? n.unshift(e.toUpperCase() + ":") : e = "log", vjs.log.history.push(n), n.unshift("VIDEOJS:"), i[e].apply ? i[e].apply(i, n) : i[e](n.join(" "))
    }
    vjs.createEl = function(e, t) {
        var n;
        return e = e || "div", t = t || {}, n = document.createElement(e), vjs.obj.each(t, function(e, t) {
            -1 !== e.indexOf("aria-") || "role" == e ? n.setAttribute(e, t) : n[e] = t
        }), n
    }, vjs.capitalize = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }, vjs.obj = {}, vjs.obj.create = Object.create || function(e) {
        function t() {}
        return t.prototype = e, new t
    }, vjs.obj.each = function(e, t, n) {
        for (var r in e) hasOwnProp.call(e, r) && t.call(n || this, r, e[r])
    }, vjs.obj.merge = function(e, t) {
        if (!t) return e;
        for (var n in t) hasOwnProp.call(t, n) && (e[n] = t[n]);
        return e
    }, vjs.obj.deepMerge = function(e, t) {
        var n, r, i;
        for (n in e = vjs.obj.copy(e), t) hasOwnProp.call(t, n) && (r = e[n], i = t[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? e[n] = vjs.obj.deepMerge(r, i) : e[n] = t[n]);
        return e
    }, vjs.obj.copy = function(e) {
        return vjs.obj.merge({}, e)
    }, vjs.obj.isPlain = function(e) {
        return !!e && "object" == typeof e && "[object Object]" === e.toString() && e.constructor === Object
    }, vjs.obj.isArray = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }, vjs.isNaN = function(e) {
        return e != e
    }, vjs.bind = function(e, t, n) {
        t.guid || (t.guid = vjs.guid++);
        var r = function() {
            return t.apply(e, arguments)
        };
        return r.guid = n ? n + "_" + t.guid : t.guid, r
    }, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(e) {
        var t = e[vjs.expando];
        return t || (t = e[vjs.expando] = vjs.guid++), vjs.cache[t] || (vjs.cache[t] = {}), vjs.cache[t]
    }, vjs.hasData = function(e) {
        var t = e[vjs.expando];
        return !(!t || vjs.isEmpty(vjs.cache[t]))
    }, vjs.removeData = function(e) {
        var t = e[vjs.expando];
        if (t) {
            delete vjs.cache[t];
            try {
                delete e[vjs.expando]
            } catch (t) {
                e.removeAttribute ? e.removeAttribute(vjs.expando) : e[vjs.expando] = null
            }
        }
    }, vjs.isEmpty = function(e) {
        for (var t in e)
            if (null !== e[t]) return !1;
        return !0
    }, vjs.hasClass = function(e, t) {
        return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }, vjs.addClass = function(e, t) {
        vjs.hasClass(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
    }, vjs.removeClass = function(e, t) {
        var n, r;
        if (vjs.hasClass(e, t)) {
            for (r = (n = e.className.split(" ")).length - 1; r >= 0; r--) n[r] === t && n.splice(r, 1);
            e.className = n.join(" ")
        }
    }, vjs.TEST_VID = vjs.createEl("video"), track = document.createElement("track"), track.kind = "captions", track.srclang = "en", track.label = "English", vjs.TEST_VID.appendChild(track), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
        var e = vjs.USER_AGENT.match(/OS (\d+)_/i);
        if (e && e[1]) return e[1]
    }(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = (match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), match ? (major = match[1] && parseFloat(match[1]), minor = match[2] && parseFloat(match[2]), major && minor ? parseFloat(match[1] + "." + match[2]) : major || null) : null), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.IS_IE8 = /MSIE\s8\.0/.test(vjs.USER_AGENT), vjs.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), vjs.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in vjs.TEST_VID.style, vjs.setElementAttributes = function(e, t) {
        vjs.obj.each(t, function(t, n) {
            null == n || !1 === n ? e.removeAttribute(t) : e.setAttribute(t, !0 === n ? "" : n)
        })
    }, vjs.getElementAttributes = function(e) {
        var t, n, r, i, o;
        if (t = {}, n = ",autoplay,controls,loop,muted,default,", e && e.attributes && e.attributes.length > 0)
            for (var s = (r = e.attributes).length - 1; s >= 0; s--) i = r[s].name, o = r[s].value, "boolean" != typeof e[i] && -1 === n.indexOf("," + i + ",") || (o = null !== o), t[i] = o;
        return t
    }, vjs.getComputedDimension = function(e, t) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "").getPropertyValue(t) : e.currentStyle && (n = e["client" + t.substr(0, 1).toUpperCase() + t.substr(1)] + "px"), n
    }, vjs.insertFirst = function(e, t) {
        t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
    }, vjs.browser = {}, vjs.el = function(e) {
        return 0 === e.indexOf("#") && (e = e.slice(1)), document.getElementById(e)
    }, vjs.formatTime = function(e, t) {
        t = t || e;
        var n = Math.floor(e % 60),
            r = Math.floor(e / 60 % 60),
            i = Math.floor(e / 3600),
            o = Math.floor(t / 60 % 60),
            s = Math.floor(t / 3600);
        return (isNaN(e) || e === 1 / 0) && (i = r = n = "-"), (i = i > 0 || s > 0 ? i + ":" : "") + (r = ((i || o >= 10) && r < 10 ? "0" + r : r) + ":") + (n = n < 10 ? "0" + n : n)
    }, vjs.blockTextSelection = function() {
        document.body.focus(), document.onselectstart = function() {
            return !1
        }
    }, vjs.unblockTextSelection = function() {
        document.onselectstart = function() {
            return !0
        }
    }, vjs.trim = function(e) {
        return (e + "").replace(/^\s+|\s+$/g, "")
    }, vjs.round = function(e, t) {
        return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    }, vjs.createTimeRange = function(e, t) {
        return void 0 === e && void 0 === t ? {
            length: 0,
            start: function() {
                throw new Error("This TimeRanges object is empty")
            },
            end: function() {
                throw new Error("This TimeRanges object is empty")
            }
        } : {
            length: 1,
            start: function() {
                return e
            },
            end: function() {
                return t
            }
        }
    }, vjs.setLocalStorage = function(e, t) {
        try {
            var n = window.localStorage || !1;
            if (!n) return;
            n[e] = t
        } catch (e) {
            22 == e.code || 1014 == e.code ? vjs.log("LocalStorage Full (VideoJS)", e) : 18 == e.code ? vjs.log("LocalStorage not allowed (VideoJS)", e) : vjs.log("LocalStorage Error (VideoJS)", e)
        }
    }, vjs.getAbsoluteURL = function(e) {
        return e.match(/^https?:\/\//) || (e = vjs.createEl("div", {
            innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href), e
    }, vjs.parseUrl = function(e) {
        var t, n, r, i, o;
        i = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], (r = "" === (n = vjs.createEl("a", {
            href: e
        })).host && "file:" !== n.protocol) && ((t = vjs.createEl("div")).innerHTML = '<a href="' + e + '"></a>', n = t.firstChild, t.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(t)), o = {};
        for (var s = 0; s < i.length; s++) o[i[s]] = n[i[s]];
        return "http:" === o.protocol && (o.host = o.host.replace(/:80$/, "")), "https:" === o.protocol && (o.host = o.host.replace(/:443$/, "")), r && document.body.removeChild(t), o
    }, vjs.log = function() {
        _logType(null, arguments)
    }, vjs.log.history = [], vjs.log.error = function() {
        _logType("error", arguments)
    }, vjs.log.warn = function() {
        _logType("warn", arguments)
    }, vjs.findPosition = function(e) {
        var t, n, r, i, o, s, a, l, u;
        return e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), t ? (n = document.documentElement, r = document.body, i = n.clientLeft || r.clientLeft || 0, o = window.pageXOffset || r.scrollLeft, s = t.left + o - i, a = n.clientTop || r.clientTop || 0, l = window.pageYOffset || r.scrollTop, u = t.top + l - a, {
            left: vjs.round(s),
            top: vjs.round(u)
        }) : {
            left: 0,
            top: 0
        }
    }, vjs.arr = {}, vjs.arr.forEach = function(e, t, n) {
        if (vjs.obj.isArray(e) && t instanceof Function)
            for (var r = 0, i = e.length; r < i; ++r) t.call(n || vjs, e[r], r, e);
        return e
    }, vjs.xhr = function(e, t) {
        var n, r, i, o, s, a, l, u;
        "string" == typeof e && (e = {
            uri: e
        }), videojs.util.mergeOptions({
            method: "GET",
            timeout: 45e3
        }, e), t = t || function() {}, l = function() {
            window.clearTimeout(a), t(null, r, r.response || r.responseText)
        }, u = function(e) {
            window.clearTimeout(a), e && "string" != typeof e || (e = new Error(e)), t(e, r)
        }, void 0 === (n = window.XMLHttpRequest) && (n = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {}
            throw new Error("This browser does not support XMLHttpRequest.")
        }), (r = new n).uri = e.uri, i = vjs.parseUrl(e.uri), o = window.location, !(i.protocol + i.host !== o.protocol + o.host) || !window.XDomainRequest || "withCredentials" in r ? (s = "file:" == i.protocol || "file:" == o.protocol, r.onreadystatechange = function() {
            if (4 === r.readyState) {
                if (r.timedout) return u("timeout");
                200 === r.status || s && 0 === r.status ? l() : u()
            }
        }, e.timeout && (a = window.setTimeout(function() {
            4 !== r.readyState && (r.timedout = !0, r.abort())
        }, e.timeout))) : ((r = new window.XDomainRequest).onload = l, r.onerror = u, r.onprogress = function() {}, r.ontimeout = function() {});
        try {
            r.open(e.method || "GET", e.uri, !0)
        } catch (e) {
            return u(e)
        }
        e.withCredentials && (r.withCredentials = !0), e.responseType && (r.responseType = e.responseType);
        try {
            r.send()
        } catch (e) {
            return u(e)
        }
        return r
    }, vjs.util = {}, vjs.util.mergeOptions = function(e, t) {
        var n, r, i;
        for (n in e = vjs.obj.copy(e), t) t.hasOwnProperty(n) && (r = e[n], i = t[n], vjs.obj.isPlain(r) && vjs.obj.isPlain(i) ? e[n] = vjs.util.mergeOptions(r, i) : e[n] = t[n]);
        return e
    }, vjs.EventEmitter = function() {}, vjs.EventEmitter.prototype.allowedEvents_ = {}, vjs.EventEmitter.prototype.on = function(e, t) {
        var n = this.addEventListener;
        this.addEventListener = Function.prototype, vjs.on(this, e, t), this.addEventListener = n
    }, vjs.EventEmitter.prototype.addEventListener = vjs.EventEmitter.prototype.on, vjs.EventEmitter.prototype.off = function(e, t) {
        vjs.off(this, e, t)
    }, vjs.EventEmitter.prototype.removeEventListener = vjs.EventEmitter.prototype.off, vjs.EventEmitter.prototype.one = function(e, t) {
        vjs.one(this, e, t)
    }, vjs.EventEmitter.prototype.trigger = function(e) {
        var t = e.type || e;
        "string" == typeof e && (e = {
            type: t
        }), e = vjs.fixEvent(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), vjs.trigger(this, e)
    }, vjs.EventEmitter.prototype.dispatchEvent = vjs.EventEmitter.prototype.trigger, vjs.Component = vjs.CoreObject.extend({
        init: function(e, t, n) {
            this.player_ = e, this.options_ = vjs.obj.copy(this.options_), t = this.options(t), this.id_ = t.id || t.el && t.el.id, this.id_ || (this.id_ = (e.id && e.id() || "no_player") + "_component_" + vjs.guid++), this.name_ = t.name || null, this.el_ = t.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(n), !1 !== t.reportTouchActivity && this.enableTouchActivity()
        }
    }), vjs.Component.prototype.dispose = function() {
        if (this.trigger({
                type: "dispose",
                bubbles: !1
            }), this.children_)
            for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
    }, vjs.Component.prototype.player_ = !0, vjs.Component.prototype.player = function() {
        return this.player_
    }, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(e) {
        return void 0 === e ? this.options_ : this.options_ = vjs.util.mergeOptions(this.options_, e)
    }, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(e, t) {
        return vjs.createEl(e, t)
    }, vjs.Component.prototype.localize = function(e) {
        var t = this.player_.language(),
            n = this.player_.languages();
        return n && n[t] && n[t][e] ? n[t][e] : e
    }, vjs.Component.prototype.el = function() {
        return this.el_
    }, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
        return this.contentEl_ || this.el_
    }, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
        return this.id_
    }, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
        return this.name_
    }, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
        return this.children_
    }, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(e) {
        return this.childIndex_[e]
    }, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(e) {
        return this.childNameIndex_[e]
    }, vjs.Component.prototype.addChild = function(e, t) {
        var n, r, i;
        return "string" == typeof e ? (i = e, r = (t = t || {}).componentClass || vjs.capitalize(i), t.name = i, n = new window.videojs[r](this.player_ || this, t)) : n = e, this.children_.push(n), "function" == typeof n.id && (this.childIndex_[n.id()] = n), (i = i || n.name && n.name()) && (this.childNameIndex_[i] = n), "function" == typeof n.el && n.el() && this.contentEl().appendChild(n.el()), n
    }, vjs.Component.prototype.removeChild = function(e) {
        if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
            for (var t = !1, n = this.children_.length - 1; n >= 0; n--)
                if (this.children_[n] === e) {
                    t = !0, this.children_.splice(n, 1);
                    break
                } if (t) {
                this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                var r = e.el();
                r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
            }
        }
    }, vjs.Component.prototype.initChildren = function() {
        var e, t, n, r, i, o, s;
        if (n = (t = (e = this).options()).children)
            if (s = function(n, r) {
                    void 0 !== t[n] && (r = t[n]), !1 !== r && (e[n] = e.addChild(n, r))
                }, vjs.obj.isArray(n))
                for (var a = 0; a < n.length; a++) "string" == typeof(r = n[a]) ? (i = r, o = {}) : (i = r.name, o = r), s(i, o);
            else vjs.obj.each(n, s)
    }, vjs.Component.prototype.buildCSSClass = function() {
        return ""
    }, vjs.Component.prototype.on = function(e, t, n) {
        var r, i, o, s, a, l;
        return "string" == typeof e || vjs.obj.isArray(e) ? vjs.on(this.el_, e, vjs.bind(this, t)) : (r = e, i = t, o = vjs.bind(this, n), l = this, (s = function() {
            l.off(r, i, o)
        }).guid = o.guid, this.on("dispose", s), (a = function() {
            l.off("dispose", s)
        }).guid = o.guid, e.nodeName ? (vjs.on(r, i, o), vjs.on(r, "dispose", a)) : "function" == typeof e.on && (r.on(i, o), r.on("dispose", a))), this
    }, vjs.Component.prototype.off = function(e, t, n) {
        var r, i, o;
        return !e || "string" == typeof e || vjs.obj.isArray(e) ? vjs.off(this.el_, e, t) : (r = e, i = t, o = vjs.bind(this, n), this.off("dispose", o), e.nodeName ? (vjs.off(r, i, o), vjs.off(r, "dispose", o)) : (r.off(i, o), r.off("dispose", o))), this
    }, vjs.Component.prototype.one = function(e, t, n) {
        var r, i, o, s, a;
        return "string" == typeof e || vjs.obj.isArray(e) ? vjs.one(this.el_, e, vjs.bind(this, t)) : (r = e, i = t, o = vjs.bind(this, n), s = this, (a = function() {
            s.off(r, i, a), o.apply(this, arguments)
        }).guid = o.guid, this.on(r, i, a)), this
    }, vjs.Component.prototype.trigger = function(e) {
        return vjs.trigger(this.el_, e), this
    }, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(e) {
        return e && (this.isReady_ ? e.call(this) : (void 0 === this.readyQueue_ && (this.readyQueue_ = []), this.readyQueue_.push(e))), this
    }, vjs.Component.prototype.triggerReady = function() {
        this.isReady_ = !0;
        var e = this.readyQueue_;
        if (this.readyQueue_ = [], e && e.length > 0) {
            for (var t = 0, n = e.length; t < n; t++) e[t].call(this);
            this.trigger("ready")
        }
    }, vjs.Component.prototype.hasClass = function(e) {
        return vjs.hasClass(this.el_, e)
    }, vjs.Component.prototype.addClass = function(e) {
        return vjs.addClass(this.el_, e), this
    }, vjs.Component.prototype.removeClass = function(e) {
        return vjs.removeClass(this.el_, e), this
    }, vjs.Component.prototype.show = function() {
        return this.removeClass("vjs-hidden"), this
    }, vjs.Component.prototype.hide = function() {
        return this.addClass("vjs-hidden"), this
    }, vjs.Component.prototype.lockShowing = function() {
        return this.addClass("vjs-lock-showing"), this
    }, vjs.Component.prototype.unlockShowing = function() {
        return this.removeClass("vjs-lock-showing"), this
    }, vjs.Component.prototype.disable = function() {
        this.hide(), this.show = function() {}
    }, vjs.Component.prototype.width = function(e, t) {
        return this.dimension("width", e, t)
    }, vjs.Component.prototype.height = function(e, t) {
        return this.dimension("height", e, t)
    }, vjs.Component.prototype.dimensions = function(e, t) {
        return this.width(e, !0).height(t)
    }, vjs.Component.prototype.dimension = function(e, t, n) {
        if (void 0 !== t) return (null === t || vjs.isNaN(t)) && (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", n || this.trigger("resize"), this;
        if (!this.el_) return 0;
        var r = this.el_.style[e],
            i = r.indexOf("px");
        return -1 !== i ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + vjs.capitalize(e)], 10)
    }, vjs.Component.prototype.onResize, vjs.Component.prototype.emitTapEvents = function() {
        var e, t, n, r, i, o;
        e = 0, t = null, this.on("touchstart", function(r) {
            1 === r.touches.length && (t = vjs.obj.copy(r.touches[0]), e = (new Date).getTime(), n = !0)
        }), this.on("touchmove", function(e) {
            e.touches.length > 1 ? n = !1 : t && (i = e.touches[0].pageX - t.pageX, o = e.touches[0].pageY - t.pageY, Math.sqrt(i * i + o * o) > 10 && (n = !1))
        }), r = function() {
            n = !1
        }, this.on("touchleave", r), this.on("touchcancel", r), this.on("touchend", function(r) {
            t = null, !0 === n && (new Date).getTime() - e < 200 && (r.preventDefault(), this.trigger("tap"))
        })
    }, vjs.Component.prototype.enableTouchActivity = function() {
        var e, t, n;
        this.player().reportUserActivity && (e = vjs.bind(this.player(), this.player().reportUserActivity), this.on("touchstart", function() {
            e(), this.clearInterval(t), t = this.setInterval(e, 250)
        }), n = function(n) {
            e(), this.clearInterval(t)
        }, this.on("touchmove", e), this.on("touchend", n), this.on("touchcancel", n))
    }, vjs.Component.prototype.setTimeout = function(e, t) {
        e = vjs.bind(this, e);
        var n = setTimeout(e, t),
            r = function() {
                this.clearTimeout(n)
            };
        return r.guid = "vjs-timeout-" + n, this.on("dispose", r), n
    }, vjs.Component.prototype.clearTimeout = function(e) {
        clearTimeout(e);
        var t = function() {};
        return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
    }, vjs.Component.prototype.setInterval = function(e, t) {
        e = vjs.bind(this, e);
        var n = setInterval(e, t),
            r = function() {
                this.clearInterval(n)
            };
        return r.guid = "vjs-interval-" + n, this.on("dispose", r), n
    }, vjs.Component.prototype.clearInterval = function(e) {
        clearInterval(e);
        var t = function() {};
        return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
    }, vjs.Button = vjs.Component.extend({
        init: function(e, t) {
            vjs.Component.call(this, e, t), this.emitTapEvents(), this.on("tap", this.onClick), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
        }
    }), vjs.Button.prototype.createEl = function(e, t) {
        var n;
        return t = vjs.obj.merge({
            className: this.buildCSSClass(),
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, t), n = vjs.Component.prototype.createEl.call(this, e, t), t.innerHTML || (this.contentEl_ = vjs.createEl("div", {
            className: "vjs-control-content"
        }), this.controlText_ = vjs.createEl("span", {
            className: "vjs-control-text",
            innerHTML: this.localize(this.buttonText) || "Need Text"
        }), this.contentEl_.appendChild(this.controlText_), n.appendChild(this.contentEl_)), n
    }, vjs.Button.prototype.buildCSSClass = function() {
        return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
    }, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
        vjs.on(document, "keydown", vjs.bind(this, this.onKeyPress))
    }, vjs.Button.prototype.onKeyPress = function(e) {
        32 != e.which && 13 != e.which || (e.preventDefault(), this.onClick())
    }, vjs.Button.prototype.onBlur = function() {
        vjs.off(document, "keydown", vjs.bind(this, this.onKeyPress))
    }, vjs.Slider = vjs.Component.extend({
        init: function(e, t) {
            vjs.Component.call(this, e, t), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.on(e, "controlsvisible", this.update), this.on(e, this.playerEvent, this.update)
        }
    }), vjs.Slider.prototype.createEl = function(e, t) {
        return (t = t || {}).className = t.className + " vjs-slider", t = vjs.obj.merge({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, t), vjs.Component.prototype.createEl.call(this, e, t)
    }, vjs.Slider.prototype.onMouseDown = function(e) {
        e.preventDefault(), vjs.blockTextSelection(), this.addClass("vjs-sliding"), this.on(document, "mousemove", this.onMouseMove), this.on(document, "mouseup", this.onMouseUp), this.on(document, "touchmove", this.onMouseMove), this.on(document, "touchend", this.onMouseUp), this.onMouseMove(e)
    }, vjs.Slider.prototype.onMouseMove = function() {}, vjs.Slider.prototype.onMouseUp = function() {
        vjs.unblockTextSelection(), this.removeClass("vjs-sliding"), this.off(document, "mousemove", this.onMouseMove), this.off(document, "mouseup", this.onMouseUp), this.off(document, "touchmove", this.onMouseMove), this.off(document, "touchend", this.onMouseUp), this.update()
    }, vjs.Slider.prototype.update = function() {
        if (this.el_) {
            var e, t = this.getPercent(),
                n = this.handle,
                r = this.bar;
            if (("number" != typeof t || t != t || t < 0 || t === 1 / 0) && (t = 0), e = t, n) {
                var i = this.el_.offsetWidth,
                    o = n.el().offsetWidth,
                    s = o ? o / i : 0,
                    a = t * (1 - s);
                e = a + s / 2, n.el().style.left = vjs.round(100 * a, 2) + "%"
            }
            r && (r.el().style.width = vjs.round(100 * e, 2) + "%")
        }
    }, vjs.Slider.prototype.calculateDistance = function(e) {
        var t, n, r, i, o, s, a, l, u;
        if (t = this.el_, n = vjs.findPosition(t), o = s = t.offsetWidth, a = this.handle, this.options().vertical) {
            if (i = n.top, u = e.changedTouches ? e.changedTouches[0].pageY : e.pageY, a) {
                var c = a.el().offsetHeight;
                i += c / 2, s -= c
            }
            return Math.max(0, Math.min(1, (i - u + s) / s))
        }
        if (r = n.left, l = e.changedTouches ? e.changedTouches[0].pageX : e.pageX, a) {
            var d = a.el().offsetWidth;
            r += d / 2, o -= d
        }
        return Math.max(0, Math.min(1, (l - r) / o))
    }, vjs.Slider.prototype.onFocus = function() {
        this.on(document, "keydown", this.onKeyPress)
    }, vjs.Slider.prototype.onKeyPress = function(e) {
        37 == e.which || 40 == e.which ? (e.preventDefault(), this.stepBack()) : 38 != e.which && 39 != e.which || (e.preventDefault(), this.stepForward())
    }, vjs.Slider.prototype.onBlur = function() {
        this.off(document, "keydown", this.onKeyPress)
    }, vjs.Slider.prototype.onClick = function(e) {
        e.stopImmediatePropagation(), e.preventDefault()
    }, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(e, t) {
        return (t = t || {}).className = t.className + " vjs-slider-handle", t = vjs.obj.merge({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, t), vjs.Component.prototype.createEl.call(this, "div", t)
    }, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(e) {
        this.addChild(e), e.on("click", vjs.bind(this, function() {
            this.unlockShowing()
        }))
    }, vjs.Menu.prototype.createEl = function() {
        var e = this.options().contentElType || "ul";
        this.contentEl_ = vjs.createEl(e, {
            className: "vjs-menu-content"
        });
        var t = vjs.Component.prototype.createEl.call(this, "div", {
            append: this.contentEl_,
            className: "vjs-menu"
        });
        return t.appendChild(this.contentEl_), vjs.on(t, "click", function(e) {
            e.preventDefault(), e.stopImmediatePropagation()
        }), t
    }, vjs.MenuItem = vjs.Button.extend({
        init: function(e, t) {
            vjs.Button.call(this, e, t), this.selected(t.selected)
        }
    }), vjs.MenuItem.prototype.createEl = function(e, t) {
        return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
            className: "vjs-menu-item",
            innerHTML: this.localize(this.options_.label)
        }, t))
    }, vjs.MenuItem.prototype.onClick = function() {
        this.selected(!0)
    }, vjs.MenuItem.prototype.selected = function(e) {
        e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
    }, vjs.MenuButton = vjs.Button.extend({
        init: function(e, t) {
            vjs.Button.call(this, e, t), this.update(), this.on("keydown", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
        }
    }), vjs.MenuButton.prototype.update = function() {
        var e = this.createMenu();
        this.menu && this.removeChild(this.menu), this.menu = e, this.addChild(e), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
    }, vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
        var e = new vjs.Menu(this.player_);
        if (this.options().title && e.contentEl().appendChild(vjs.createEl("li", {
                className: "vjs-menu-title",
                innerHTML: vjs.capitalize(this.options().title),
                tabindex: -1
            })), this.items = this.createItems(), this.items)
            for (var t = 0; t < this.items.length; t++) e.addItem(this.items[t]);
        return e
    }, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
        return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
    }, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
        this.one("mouseout", vjs.bind(this, function() {
            this.menu.unlockShowing(), this.el_.blur()
        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }, vjs.MenuButton.prototype.onKeyPress = function(e) {
        32 == e.which || 13 == e.which ? (this.buttonPressed_ ? this.unpressButton() : this.pressButton(), e.preventDefault()) : 27 == e.which && (this.buttonPressed_ && this.unpressButton(), e.preventDefault())
    }, vjs.MenuButton.prototype.pressButton = function() {
        this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
    }, vjs.MenuButton.prototype.unpressButton = function() {
        this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
    }, vjs.MediaError = function(e) {
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && vjs.obj.merge(this, e), this.message || (this.message = vjs.MediaError.defaultMessages[this.code] || "")
    }, vjs.MediaError.prototype.code = 0, vjs.MediaError.prototype.message = "", vjs.MediaError.prototype.status = null, vjs.MediaError.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], vjs.MediaError.defaultMessages = {
        1: "You aborted the video playback",
        2: "A network error caused the video download to fail part-way.",
        3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The video is encrypted and we do not have the keys to decrypt it."
    };
    for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum, vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
    if (function() {
            var e, t, n, r;
            for (vjs.browser.fullscreenAPI, t = (e = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ])[0], r = 0; r < e.length; r++)
                if (e[r][1] in document) {
                    n = e[r];
                    break
                } if (n)
                for (vjs.browser.fullscreenAPI = {}, r = 0; r < n.length; r++) vjs.browser.fullscreenAPI[t[r]] = n[r]
        }(), vjs.Player = vjs.Component.extend({
            init: function(e, t, n) {
                this.tag = e, e.id = e.id || "vjs_video_" + vjs.guid++, this.tagAttributes = e && vjs.getElementAttributes(e), t = vjs.obj.merge(this.getTagSettings(e), t), this.language_ = t.language || vjs.options.language, this.languages_ = t.languages || vjs.options.languages, this.cache_ = {}, this.poster_ = t.poster || "", this.controls_ = !!t.controls, e.controls = !1, t.reportTouchActivity = !1, this.isAudio("audio" === this.tag.nodeName.toLowerCase()), vjs.Component.call(this, this, t, n), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.isAudio() && this.addClass("vjs-audio"), vjs.players[this.id_] = this, t.plugins && vjs.obj.each(t.plugins, function(e, t) {
                    this[e](t)
                }, this), this.listenForUserActivity()
            }
        }), vjs.Player.prototype.language_, vjs.Player.prototype.language = function(e) {
            return void 0 === e ? this.language_ : (this.language_ = e, this)
        }, vjs.Player.prototype.languages_, vjs.Player.prototype.languages = function() {
            return this.languages_
        }, vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
            this.trigger("dispose"), this.off("dispose"), vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
        }, vjs.Player.prototype.getTagSettings = function(e) {
            var t, n, r, i, o, s, a, l = {
                sources: [],
                tracks: []
            };
            if (null !== (n = (t = vjs.getElementAttributes(e))["data-setup"]) && vjs.obj.merge(t, vjs.JSON.parse(n || "{}")), vjs.obj.merge(l, t), e.hasChildNodes())
                for (s = 0, a = (r = e.childNodes).length; s < a; s++) "source" === (o = (i = r[s]).nodeName.toLowerCase()) ? l.sources.push(vjs.getElementAttributes(i)) : "track" === o && l.tracks.push(vjs.getElementAttributes(i));
            return l
        }, vjs.Player.prototype.createEl = function() {
            var e, t = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
                n = this.tag;
            return n.removeAttribute("width"), n.removeAttribute("height"), e = vjs.getElementAttributes(n), vjs.obj.each(e, function(n) {
                "class" == n ? t.className = e[n] : t.setAttribute(n, e[n])
            }), n.id += "_html5_api", n.className = "vjs-tech", n.player = t.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), n.initNetworkState_ = n.networkState, n.parentNode && n.parentNode.insertBefore(t, n), vjs.insertFirst(n, t), this.el_ = t, this.on("loadstart", this.onLoadStart), this.on("waiting", this.onWaiting), this.on(["canplay", "canplaythrough", "playing", "ended"], this.onWaitEnd), this.on("seeking", this.onSeeking), this.on("seeked", this.onSeeked), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("fullscreenchange", this.onFullscreenChange), t
        }, vjs.Player.prototype.loadTech = function(e, t) {
            this.tech && this.unloadTech(), "Html5" !== e && this.tag && (vjs.Html5.disposeMediaElement(this.tag), this.tag = null), this.techName = e, this.isReady_ = !1;
            var n = vjs.obj.merge({
                source: t,
                parentEl: this.el_
            }, this.options_[e.toLowerCase()]);
            t && (this.currentType_ = t.type, t.src == this.cache_.src && this.cache_.currentTime > 0 && (n.startTime = this.cache_.currentTime), this.cache_.src = t.src), this.tech = new window.videojs[e](this, n), this.tech.ready(function() {
                this.player_.triggerReady()
            })
        }, vjs.Player.prototype.unloadTech = function() {
            this.isReady_ = !1, this.tech.dispose(), this.tech = !1
        }, vjs.Player.prototype.onLoadStart = function() {
            this.removeClass("vjs-ended"), this.error(null), this.paused() ? this.hasStarted(!1) : this.trigger("firstplay")
        }, vjs.Player.prototype.hasStarted_ = !1, vjs.Player.prototype.hasStarted = function(e) {
            return void 0 !== e ? (this.hasStarted_ !== e && (this.hasStarted_ = e, e ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : this.hasStarted_
        }, vjs.Player.prototype.onLoadedMetaData, vjs.Player.prototype.onLoadedData, vjs.Player.prototype.onLoadedAllData, vjs.Player.prototype.onPlay = function() {
            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0)
        }, vjs.Player.prototype.onWaiting = function() {
            this.addClass("vjs-waiting")
        }, vjs.Player.prototype.onWaitEnd = function() {
            this.removeClass("vjs-waiting")
        }, vjs.Player.prototype.onSeeking = function() {
            this.addClass("vjs-seeking")
        }, vjs.Player.prototype.onSeeked = function() {
            this.removeClass("vjs-seeking")
        }, vjs.Player.prototype.onFirstPlay = function() {
            this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started")
        }, vjs.Player.prototype.onPause = function() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused")
        }, vjs.Player.prototype.onTimeUpdate, vjs.Player.prototype.onProgress = function() {
            1 == this.bufferedPercent() && this.trigger("loadedalldata")
        }, vjs.Player.prototype.onEnded = function() {
            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
        }, vjs.Player.prototype.onDurationChange = function() {
            var e = this.techGet("duration");
            e && (e < 0 && (e = 1 / 0), this.duration(e), e === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"))
        }, vjs.Player.prototype.onVolumeChange, vjs.Player.prototype.onFullscreenChange = function() {
            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
        }, vjs.Player.prototype.onError, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
            return this.cache_
        }, vjs.Player.prototype.techCall = function(e, t) {
            if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
                this[e](t)
            });
            else try {
                this.tech[e](t)
            } catch (e) {
                throw vjs.log(e), e
            }
        }, vjs.Player.prototype.techGet = function(e) {
            if (this.tech && this.tech.isReady_) try {
                return this.tech[e]()
            } catch (t) {
                throw void 0 === this.tech[e] ? vjs.log("Video.js: " + e + " method not defined for " + this.techName + " playback technology.", t) : "TypeError" == t.name ? (vjs.log("Video.js: " + e + " unavailable on " + this.techName + " playback technology element.", t), this.tech.isReady_ = !1) : vjs.log(t), t
            }
        }, vjs.Player.prototype.play = function() {
            return this.techCall("play"), this
        }, vjs.Player.prototype.pause = function() {
            return this.techCall("pause"), this
        }, vjs.Player.prototype.paused = function() {
            return !1 !== this.techGet("paused")
        }, vjs.Player.prototype.currentTime = function(e) {
            return void 0 !== e ? (this.techCall("setCurrentTime", e), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
        }, vjs.Player.prototype.duration = function(e) {
            return void 0 !== e ? (this.cache_.duration = parseFloat(e), this) : (void 0 === this.cache_.duration && this.onDurationChange(), this.cache_.duration || 0)
        }, vjs.Player.prototype.remainingTime = function() {
            return this.duration() - this.currentTime()
        }, vjs.Player.prototype.buffered = function() {
            var e = this.techGet("buffered");
            return e && e.length || (e = vjs.createTimeRange(0, 0)), e
        }, vjs.Player.prototype.bufferedPercent = function() {
            var e, t, n = this.duration(),
                r = this.buffered(),
                i = 0;
            if (!n) return 0;
            for (var o = 0; o < r.length; o++) e = r.start(o), (t = r.end(o)) > n && (t = n), i += t - e;
            return i / n
        }, vjs.Player.prototype.bufferedEnd = function() {
            var e = this.buffered(),
                t = this.duration(),
                n = e.end(e.length - 1);
            return n > t && (n = t), n
        }, vjs.Player.prototype.volume = function(e) {
            var t;
            return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall("setVolume", t), vjs.setLocalStorage("volume", t), this) : (t = parseFloat(this.techGet("volume")), isNaN(t) ? 1 : t)
        }, vjs.Player.prototype.muted = function(e) {
            return void 0 !== e ? (this.techCall("setMuted", e), this) : this.techGet("muted") || !1
        }, vjs.Player.prototype.supportsFullScreen = function() {
            return this.techGet("supportsFullScreen") || !1
        }, vjs.Player.prototype.isFullscreen_ = !1, vjs.Player.prototype.isFullscreen = function(e) {
            return void 0 !== e ? (this.isFullscreen_ = !!e, this) : this.isFullscreen_
        }, vjs.Player.prototype.isFullScreen = function(e) {
            return vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(e)
        }, vjs.Player.prototype.requestFullscreen = function() {
            var e = vjs.browser.fullscreenAPI;
            return this.isFullscreen(!0), e ? (vjs.on(document, e.fullscreenchange, vjs.bind(this, function(t) {
                this.isFullscreen(document[e.fullscreenElement]), !1 === this.isFullscreen() && vjs.off(document, e.fullscreenchange, arguments.callee), this.trigger("fullscreenchange")
            })), this.el_[e.requestFullscreen]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
        }, vjs.Player.prototype.requestFullScreen = function() {
            return vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
        }, vjs.Player.prototype.exitFullscreen = function() {
            var e = vjs.browser.fullscreenAPI;
            return this.isFullscreen(!1), e ? document[e.exitFullscreen]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
        }, vjs.Player.prototype.cancelFullScreen = function() {
            return vjs.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
        }, vjs.Player.prototype.enterFullWindow = function() {
            this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
        }, vjs.Player.prototype.fullWindowOnEscKey = function(e) {
            27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
        }, vjs.Player.prototype.exitFullWindow = function() {
            this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
        }, vjs.Player.prototype.selectSource = function(e) {
            for (var t = 0, n = this.options_.techOrder; t < n.length; t++) {
                var r = vjs.capitalize(n[t]),
                    i = window.videojs[r];
                if (i) {
                    if (i.isSupported())
                        for (var o = 0, s = e; o < s.length; o++) {
                            var a = s[o];
                            if (i.canPlaySource(a)) return {
                                source: a,
                                tech: r
                            }
                        }
                } else vjs.log.error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
            }
            return !1
        }, vjs.Player.prototype.src = function(e) {
            return void 0 === e ? this.techGet("src") : (vjs.obj.isArray(e) ? this.sourceList_(e) : "string" == typeof e ? this.src({
                src: e
            }) : e instanceof Object && (e.type && !window.videojs[this.techName].canPlaySource(e) ? this.sourceList_([e]) : (this.cache_.src = e.src, this.currentType_ = e.type || "", this.ready(function() {
                window.videojs[this.techName].prototype.hasOwnProperty("setSource") ? this.techCall("setSource", e) : this.techCall("src", e.src), "auto" == this.options_.preload && this.load(), this.options_.autoplay && this.play()
            }))), this)
        }, vjs.Player.prototype.sourceList_ = function(e) {
            var t = this.selectSource(e);
            t ? t.tech === this.techName ? this.src(t.source) : this.loadTech(t.tech, t.source) : (this.setTimeout(function() {
                this.error({
                    code: 4,
                    message: this.localize(this.options().notSupportedMessage)
                })
            }, 0), this.triggerReady())
        }, vjs.Player.prototype.load = function() {
            return this.techCall("load"), this
        }, vjs.Player.prototype.currentSrc = function() {
            return this.techGet("currentSrc") || this.cache_.src || ""
        }, vjs.Player.prototype.currentType = function() {
            return this.currentType_ || ""
        }, vjs.Player.prototype.preload = function(e) {
            return void 0 !== e ? (this.techCall("setPreload", e), this.options_.preload = e, this) : this.techGet("preload")
        }, vjs.Player.prototype.autoplay = function(e) {
            return void 0 !== e ? (this.techCall("setAutoplay", e), this.options_.autoplay = e, this) : this.techGet("autoplay", e)
        }, vjs.Player.prototype.loop = function(e) {
            return void 0 !== e ? (this.techCall("setLoop", e), this.options_.loop = e, this) : this.techGet("loop")
        }, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(e) {
            return void 0 === e ? this.poster_ : (e || (e = ""), this.poster_ = e, this.techCall("setPoster", e), this.trigger("posterchange"), this)
        }, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(e) {
            return void 0 !== e ? (e = !!e, this.controls_ !== e && (this.controls_ = e, e ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled")) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"))), this) : this.controls_
        }, vjs.Player.prototype.usingNativeControls_, vjs.Player.prototype.usingNativeControls = function(e) {
            return void 0 !== e ? (e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, e ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : this.usingNativeControls_
        }, vjs.Player.prototype.error_ = null, vjs.Player.prototype.error = function(e) {
            return void 0 === e ? this.error_ : null === e ? (this.error_ = e, this.removeClass("vjs-error"), this) : (e instanceof vjs.MediaError ? this.error_ = e : this.error_ = new vjs.MediaError(e), this.trigger("error"), this.addClass("vjs-error"), vjs.log.error("(CODE:" + this.error_.code + " " + vjs.MediaError.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this)
        }, vjs.Player.prototype.ended = function() {
            return this.techGet("ended")
        }, vjs.Player.prototype.seeking = function() {
            return this.techGet("seeking")
        }, vjs.Player.prototype.seekable = function() {
            return this.techGet("seekable")
        }, vjs.Player.prototype.userActivity_ = !0, vjs.Player.prototype.reportUserActivity = function(e) {
            this.userActivity_ = !0
        }, vjs.Player.prototype.userActive_ = !0, vjs.Player.prototype.userActive = function(e) {
            return void 0 !== e ? ((e = !!e) !== this.userActive_ && (this.userActive_ = e, e ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech && this.tech.one("mousemove", function(e) {
                e.stopPropagation(), e.preventDefault()
            }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
        }, vjs.Player.prototype.listenForUserActivity = function() {
            var e, t, n, r, i, o, s, a;
            e = vjs.bind(this, this.reportUserActivity), t = function(t) {
                t.screenX == s && t.screenY == a || (s = t.screenX, a = t.screenY, e())
            }, n = function() {
                e(), this.clearInterval(r), r = this.setInterval(e, 250)
            }, i = function(t) {
                e(), this.clearInterval(r)
            }, this.on("mousedown", n), this.on("mousemove", t), this.on("mouseup", i), this.on("keydown", e), this.on("keyup", e), this.setInterval(function() {
                if (this.userActivity_) {
                    this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(o);
                    var e = this.options().inactivityTimeout;
                    e > 0 && (o = this.setTimeout(function() {
                        this.userActivity_ || this.userActive(!1)
                    }, e))
                }
            }, 250)
        }, vjs.Player.prototype.playbackRate = function(e) {
            return void 0 !== e ? (this.techCall("setPlaybackRate", e), this) : this.tech && this.tech.featuresPlaybackRate ? this.techGet("playbackRate") : 1
        }, vjs.Player.prototype.isAudio_ = !1, vjs.Player.prototype.isAudio = function(e) {
            return void 0 !== e ? (this.isAudio_ = !!e, this) : this.isAudio_
        }, vjs.Player.prototype.networkState = function() {
            return this.techGet("networkState")
        }, vjs.Player.prototype.readyState = function() {
            return this.techGet("readyState")
        }, vjs.Player.prototype.textTracks = function() {
            return this.tech && this.tech.textTracks()
        }, vjs.Player.prototype.remoteTextTracks = function() {
            return this.tech && this.tech.remoteTextTracks()
        }, vjs.Player.prototype.addTextTrack = function(e, t, n) {
            return this.tech && this.tech.addTextTrack(e, t, n)
        }, vjs.Player.prototype.addRemoteTextTrack = function(e) {
            return this.tech && this.tech.addRemoteTextTrack(e)
        }, vjs.Player.prototype.removeRemoteTextTrack = function(e) {
            this.tech && this.tech.removeRemoteTextTrack(e)
        }, vjs.ControlBar = vjs.Component.extend(), vjs.ControlBar.prototype.options_ = {
            loadEvent: "play",
            children: {
                playToggle: {},
                currentTimeDisplay: {},
                timeDivider: {},
                durationDisplay: {},
                remainingTimeDisplay: {},
                liveDisplay: {},
                progressControl: {},
                fullscreenToggle: {},
                volumeControl: {},
                muteToggle: {},
                playbackRateMenuButton: {},
                subtitlesButton: {},
                captionsButton: {},
                chaptersButton: {}
            }
        }, vjs.ControlBar.prototype.createEl = function() {
            return vjs.createEl("div", {
                className: "vjs-control-bar"
            })
        }, vjs.LiveDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.LiveDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-live-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-live-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE"),
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.PlayToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.on(e, "play", this.onPlay), this.on(e, "pause", this.onPause)
            }
        }), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
            return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
        }, vjs.PlayToggle.prototype.onClick = function() {
            this.player_.paused() ? this.player_.play() : this.player_.pause()
        }, vjs.PlayToggle.prototype.onPlay = function() {
            this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.el_.children[0].children[0].innerHTML = this.localize("Pause")
        }, vjs.PlayToggle.prototype.onPause = function() {
            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.el_.children[0].children[0].innerHTML = this.localize("Play")
        }, vjs.CurrentTimeDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.CurrentTimeDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-current-time vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-current-time-display",
                innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Current Time") + "</span> " + vjs.formatTime(e, this.player_.duration())
        }, vjs.DurationDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent), this.on(e, "loadedmetadata", this.updateContent)
            }
        }), vjs.DurationDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-duration vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-duration-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00",
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.DurationDisplay.prototype.updateContent = function() {
            var e = this.player_.duration();
            e && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> " + vjs.formatTime(e))
        }, vjs.TimeDivider = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.TimeDivider.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-time-divider",
                innerHTML: "<div><span>/</span></div>"
            })
        }, vjs.RemainingTimeDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.RemainingTimeDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-remaining-time vjs-time-controls vjs-control"
            });
            return this.contentEl_ = vjs.createEl("div", {
                className: "vjs-remaining-time-display",
                innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00",
                "aria-live": "off"
            }), e.appendChild(this.contentEl_), e
        }, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
            this.player_.duration() && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -" + vjs.formatTime(this.player_.remainingTime()))
        }, vjs.FullscreenToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t)
            }
        }), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
            return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
        }, vjs.FullscreenToggle.prototype.onClick = function() {
            this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText_.innerHTML = this.localize("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText_.innerHTML = this.localize("Non-Fullscreen"))
        }, vjs.ProgressControl = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.ProgressControl.prototype.options_ = {
            children: {
                seekBar: {}
            }
        }, vjs.ProgressControl.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-progress-control vjs-control"
            })
        }, vjs.SeekBar = vjs.Slider.extend({
            init: function(e, t) {
                vjs.Slider.call(this, e, t), this.on(e, "timeupdate", this.updateARIAAttributes), e.ready(vjs.bind(this, this.updateARIAAttributes))
            }
        }), vjs.SeekBar.prototype.options_ = {
            children: {
                loadProgressBar: {},
                playProgressBar: {},
                seekHandle: {}
            },
            barName: "playProgressBar",
            handleName: "seekHandle"
        }, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
            return vjs.Slider.prototype.createEl.call(this, "div", {
                className: "vjs-progress-holder",
                "aria-label": "video progress bar"
            })
        }, vjs.SeekBar.prototype.updateARIAAttributes = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.getPercent(), 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(e, this.player_.duration()))
        }, vjs.SeekBar.prototype.getPercent = function() {
            return this.player_.currentTime() / this.player_.duration()
        }, vjs.SeekBar.prototype.onMouseDown = function(e) {
            vjs.Slider.prototype.onMouseDown.call(this, e), this.player_.scrubbing = !0, this.player_.addClass("vjs-scrubbing"), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
        }, vjs.SeekBar.prototype.onMouseMove = function(e) {
            var t = this.calculateDistance(e) * this.player_.duration();
            t == this.player_.duration() && (t -= .1), this.player_.currentTime(t)
        }, vjs.SeekBar.prototype.onMouseUp = function(e) {
            vjs.Slider.prototype.onMouseUp.call(this, e), this.player_.scrubbing = !1, this.player_.removeClass("vjs-scrubbing"), this.videoWasPlaying && this.player_.play()
        }, vjs.SeekBar.prototype.stepForward = function() {
            this.player_.currentTime(this.player_.currentTime() + 5)
        }, vjs.SeekBar.prototype.stepBack = function() {
            this.player_.currentTime(this.player_.currentTime() - 5)
        }, vjs.LoadProgressBar = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.on(e, "progress", this.update)
            }
        }), vjs.LoadProgressBar.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-load-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
            })
        }, vjs.LoadProgressBar.prototype.update = function() {
            var e, t, n, r, i = this.player_.buffered(),
                o = this.player_.duration(),
                s = this.player_.bufferedEnd(),
                a = this.el_.children,
                l = function(e, t) {
                    return 100 * (e / t || 0) + "%"
                };
            for (this.el_.style.width = l(s, o), e = 0; e < i.length; e++) t = i.start(e), n = i.end(e), (r = a[e]) || (r = this.el_.appendChild(vjs.createEl())), r.style.left = l(t, s), r.style.width = l(n - t, s);
            for (e = a.length; e > i.length; e--) this.el_.removeChild(a[e - 1])
        }, vjs.PlayProgressBar = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.PlayProgressBar.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-play-progress",
                innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
            })
        }, vjs.SeekHandle = vjs.SliderHandle.extend({
            init: function(e, t) {
                vjs.SliderHandle.call(this, e, t), this.on(e, "timeupdate", this.updateContent)
            }
        }), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
            return vjs.SliderHandle.prototype.createEl.call(this, "div", {
                className: "vjs-seek-handle",
                "aria-live": "off"
            })
        }, vjs.SeekHandle.prototype.updateContent = function() {
            var e = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
            this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(e, this.player_.duration()) + "</span>"
        }, vjs.VolumeControl = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), e.tech && !1 === e.tech.featuresVolumeControl && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 === e.tech.featuresVolumeControl ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                })
            }
        }), vjs.VolumeControl.prototype.options_ = {
            children: {
                volumeBar: {}
            }
        }, vjs.VolumeControl.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-control vjs-control"
            })
        }, vjs.VolumeBar = vjs.Slider.extend({
            init: function(e, t) {
                vjs.Slider.call(this, e, t), this.on(e, "volumechange", this.updateARIAAttributes), e.ready(vjs.bind(this, this.updateARIAAttributes))
            }
        }), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
            this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.player_.volume(), 2)), this.el_.setAttribute("aria-valuetext", vjs.round(100 * this.player_.volume(), 2) + "%")
        }, vjs.VolumeBar.prototype.options_ = {
            children: {
                volumeLevel: {},
                volumeHandle: {}
            },
            barName: "volumeLevel",
            handleName: "volumeHandle"
        }, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
            return vjs.Slider.prototype.createEl.call(this, "div", {
                className: "vjs-volume-bar",
                "aria-label": "volume level"
            })
        }, vjs.VolumeBar.prototype.onMouseMove = function(e) {
            this.player_.muted() && this.player_.muted(!1), this.player_.volume(this.calculateDistance(e))
        }, vjs.VolumeBar.prototype.getPercent = function() {
            return this.player_.muted() ? 0 : this.player_.volume()
        }, vjs.VolumeBar.prototype.stepForward = function() {
            this.player_.volume(this.player_.volume() + .1)
        }, vjs.VolumeBar.prototype.stepBack = function() {
            this.player_.volume(this.player_.volume() - .1)
        }, vjs.VolumeLevel = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.VolumeLevel.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-volume-level",
                innerHTML: '<span class="vjs-control-text"></span>'
            })
        }, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
            return vjs.SliderHandle.prototype.createEl.call(this, "div", {
                className: "vjs-volume-handle"
            })
        }, vjs.MuteToggle = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.on(e, "volumechange", this.update), e.tech && !1 === e.tech.featuresVolumeControl && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 === e.tech.featuresVolumeControl ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                })
            }
        }), vjs.MuteToggle.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-mute-control vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
            })
        }, vjs.MuteToggle.prototype.onClick = function() {
            this.player_.muted(!this.player_.muted())
        }, vjs.MuteToggle.prototype.update = function() {
            var e = this.player_.volume(),
                t = 3;
            0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2), this.player_.muted() ? this.el_.children[0].children[0].innerHTML != this.localize("Unmute") && (this.el_.children[0].children[0].innerHTML = this.localize("Unmute")) : this.el_.children[0].children[0].innerHTML != this.localize("Mute") && (this.el_.children[0].children[0].innerHTML = this.localize("Mute"));
            for (var n = 0; n < 4; n++) vjs.removeClass(this.el_, "vjs-vol-" + n);
            vjs.addClass(this.el_, "vjs-vol-" + t)
        }, vjs.VolumeMenuButton = vjs.MenuButton.extend({
            init: function(e, t) {
                vjs.MenuButton.call(this, e, t), this.on(e, "volumechange", this.volumeUpdate), e.tech && !1 === e.tech.featuresVolumeControl && this.addClass("vjs-hidden"), this.on(e, "loadstart", function() {
                    !1 === e.tech.featuresVolumeControl ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                }), this.addClass("vjs-menu-button")
            }
        }), vjs.VolumeMenuButton.prototype.createMenu = function() {
            var e = new vjs.Menu(this.player_, {
                    contentElType: "div"
                }),
                t = new vjs.VolumeBar(this.player_, this.options_.volumeBar);
            return t.on("focus", function() {
                e.lockShowing()
            }), t.on("blur", function() {
                e.unlockShowing()
            }), e.addChild(t), e
        }, vjs.VolumeMenuButton.prototype.onClick = function() {
            vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
        }, vjs.VolumeMenuButton.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-volume-menu-button vjs-menu-button vjs-control",
                innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
            })
        }, vjs.VolumeMenuButton.prototype.volumeUpdate = vjs.MuteToggle.prototype.update, vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
            init: function(e, t) {
                vjs.MenuButton.call(this, e, t), this.updateVisibility(), this.updateLabel(), this.on(e, "loadstart", this.updateVisibility), this.on(e, "ratechange", this.updateLabel)
            }
        }), vjs.PlaybackRateMenuButton.prototype.buttonText = "Playback Rate", vjs.PlaybackRateMenuButton.prototype.className = "vjs-playback-rate", vjs.PlaybackRateMenuButton.prototype.createEl = function() {
            var e = vjs.MenuButton.prototype.createEl.call(this);
            return this.labelEl_ = vjs.createEl("div", {
                className: "vjs-playback-rate-value",
                innerHTML: 1
            }), e.appendChild(this.labelEl_), e
        }, vjs.PlaybackRateMenuButton.prototype.createMenu = function() {
            var e = new vjs.Menu(this.player()),
                t = this.player().options().playbackRates;
            if (t)
                for (var n = t.length - 1; n >= 0; n--) e.addChild(new vjs.PlaybackRateMenuItem(this.player(), {
                    rate: t[n] + "x"
                }));
            return e
        }, vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function() {
            this.el().setAttribute("aria-valuenow", this.player().playbackRate())
        }, vjs.PlaybackRateMenuButton.prototype.onClick = function() {
            for (var e = this.player().playbackRate(), t = this.player().options().playbackRates, n = t[0], r = 0; r < t.length; r++)
                if (t[r] > e) {
                    n = t[r];
                    break
                } this.player().playbackRate(n)
        }, vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function() {
            return this.player().tech && this.player().tech.featuresPlaybackRate && this.player().options().playbackRates && this.player().options().playbackRates.length > 0
        }, vjs.PlaybackRateMenuButton.prototype.updateVisibility = function() {
            this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
        }, vjs.PlaybackRateMenuButton.prototype.updateLabel = function() {
            this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
        }, vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
            contentElType: "button",
            init: function(e, t) {
                var n = this.label = t.rate,
                    r = this.rate = parseFloat(n, 10);
                t.label = n, t.selected = 1 === r, vjs.MenuItem.call(this, e, t), this.on(e, "ratechange", this.update)
            }
        }), vjs.PlaybackRateMenuItem.prototype.onClick = function() {
            vjs.MenuItem.prototype.onClick.call(this), this.player().playbackRate(this.rate)
        }, vjs.PlaybackRateMenuItem.prototype.update = function() {
            this.selected(this.player().playbackRate() == this.rate)
        }, vjs.PosterImage = vjs.Button.extend({
            init: function(e, t) {
                vjs.Button.call(this, e, t), this.update(), e.on("posterchange", vjs.bind(this, this.update))
            }
        }), vjs.PosterImage.prototype.dispose = function() {
            this.player().off("posterchange", this.update), vjs.Button.prototype.dispose.call(this)
        }, vjs.PosterImage.prototype.createEl = function() {
            var e = vjs.createEl("div", {
                className: "vjs-poster",
                tabIndex: -1
            });
            return vjs.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = vjs.createEl("img"), e.appendChild(this.fallbackImg_)), e
        }, vjs.PosterImage.prototype.update = function() {
            var e = this.player().poster();
            this.setSrc(e), e ? this.show() : this.hide()
        }, vjs.PosterImage.prototype.setSrc = function(e) {
            var t;
            this.fallbackImg_ ? this.fallbackImg_.src = e : (t = "", e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t)
        }, vjs.PosterImage.prototype.onClick = function() {
            this.player_.play()
        }, vjs.LoadingSpinner = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t)
            }
        }), vjs.LoadingSpinner.prototype.createEl = function() {
            return vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner"
            })
        }, vjs.BigPlayButton = vjs.Button.extend(), vjs.BigPlayButton.prototype.createEl = function() {
            return vjs.Button.prototype.createEl.call(this, "div", {
                className: "vjs-big-play-button",
                innerHTML: '<span aria-hidden="true"></span>',
                "aria-label": "play video"
            })
        }, vjs.BigPlayButton.prototype.onClick = function() {
            this.player_.play()
        }, vjs.ErrorDisplay = vjs.Component.extend({
            init: function(e, t) {
                vjs.Component.call(this, e, t), this.update(), this.on(e, "error", this.update)
            }
        }), vjs.ErrorDisplay.prototype.createEl = function() {
            var e = vjs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-error-display"
            });
            return this.contentEl_ = vjs.createEl("div"), e.appendChild(this.contentEl_), e
        }, vjs.ErrorDisplay.prototype.update = function() {
            this.player().error() && (this.contentEl_.innerHTML = this.localize(this.player().error().message))
        }, vjs.MediaTechController = vjs.Component.extend({
            init: function(e, t, n) {
                (t = t || {}).reportTouchActivity = !1, vjs.Component.call(this, e, t, n), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), this.initControlsListeners(), this.featuresNativeTextTracks || this.emulateTextTracks(), this.initTextTrackListeners()
            }
        }), vjs.MediaTechController.prototype.initControlsListeners = function() {
            var e, t;
            e = this.player(), t = function() {
                e.controls() && !e.usingNativeControls() && this.addControlsListeners()
            }, this.ready(t), this.on(e, "controlsenabled", t), this.on(e, "controlsdisabled", this.removeControlsListeners), this.ready(function() {
                this.networkState && this.networkState() > 0 && this.player().trigger("loadstart")
            })
        }, vjs.MediaTechController.prototype.addControlsListeners = function() {
            var e;
            this.on("mousedown", this.onClick), this.on("touchstart", function(t) {
                e = this.player_.userActive()
            }), this.on("touchmove", function(t) {
                e && this.player().reportUserActivity()
            }), this.on("touchend", function(e) {
                e.preventDefault()
            }), this.emitTapEvents(), this.on("tap", this.onTap)
        }, vjs.MediaTechController.prototype.removeControlsListeners = function() {
            this.off("tap"), this.off("touchstart"), this.off("touchmove"), this.off("touchleave"), this.off("touchcancel"), this.off("touchend"), this.off("click"), this.off("mousedown")
        }, vjs.MediaTechController.prototype.onClick = function(e) {
            0 === e.button && this.player().controls() && (this.player().paused() ? this.player().play() : this.player().pause())
        }, vjs.MediaTechController.prototype.onTap = function() {
            this.player().userActive(!this.player().userActive())
        }, vjs.MediaTechController.prototype.manualProgressOn = function() {
            this.manualProgress = !0, this.trackProgress()
        }, vjs.MediaTechController.prototype.manualProgressOff = function() {
            this.manualProgress = !1, this.stopTrackingProgress()
        }, vjs.MediaTechController.prototype.trackProgress = function() {
            this.progressInterval = this.setInterval(function() {
                var e = this.player().bufferedPercent();
                this.bufferedPercent_ != e && this.player().trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
            }, 500)
        }, vjs.MediaTechController.prototype.stopTrackingProgress = function() {
            this.clearInterval(this.progressInterval)
        },
        /*! Time Tracking -------------------------------------------------------------- */
        vjs.MediaTechController.prototype.manualTimeUpdatesOn = function() {
            var e = this.player_;
            this.manualTimeUpdates = !0, this.on(e, "play", this.trackCurrentTime), this.on(e, "pause", this.stopTrackingCurrentTime), this.one("timeupdate", function() {
                this.featuresTimeupdateEvents = !0, this.manualTimeUpdatesOff()
            })
        }, vjs.MediaTechController.prototype.manualTimeUpdatesOff = function() {
            var e = this.player_;
            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off(e, "play", this.trackCurrentTime), this.off(e, "pause", this.stopTrackingCurrentTime)
        }, vjs.MediaTechController.prototype.trackCurrentTime = function() {
            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                this.player().trigger("timeupdate")
            }, 250)
        }, vjs.MediaTechController.prototype.stopTrackingCurrentTime = function() {
            this.clearInterval(this.currentTimeInterval), this.player().trigger("timeupdate")
        }, vjs.MediaTechController.prototype.dispose = function() {
            this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), vjs.Component.prototype.dispose.call(this)
        }, vjs.MediaTechController.prototype.setCurrentTime = function() {
            this.manualTimeUpdates && this.player().trigger("timeupdate")
        }, vjs.MediaTechController.prototype.initTextTrackListeners = function() {
            var e, t = this.player_,
                n = function() {
                    var e = t.getChild("textTrackDisplay");
                    e && e.updateDisplay()
                };
            (e = this.textTracks()) && (e.addEventListener("removetrack", n), e.addEventListener("addtrack", n), this.on("dispose", vjs.bind(this, function() {
                e.removeEventListener("removetrack", n), e.removeEventListener("addtrack", n)
            })))
        }, vjs.MediaTechController.prototype.emulateTextTracks = function() {
            var e, t, n, r = this.player_;
            window.WebVTT || ((n = document.createElement("script")).src = r.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", r.el().appendChild(n), window.WebVTT = !0), (t = this.textTracks()) && (e = function() {
                var e, t, n;
                for ((n = r.getChild("textTrackDisplay")).updateDisplay(), e = 0; e < this.length; e++)(t = this[e]).removeEventListener("cuechange", vjs.bind(n, n.updateDisplay)), "showing" === t.mode && t.addEventListener("cuechange", vjs.bind(n, n.updateDisplay))
            }, t.addEventListener("change", e), this.on("dispose", vjs.bind(this, function() {
                t.removeEventListener("change", e)
            })))
        }, vjs.MediaTechController.prototype.textTracks_, vjs.MediaTechController.prototype.textTracks = function() {
            return this.player_.textTracks_ = this.player_.textTracks_ || new vjs.TextTrackList, this.player_.textTracks_
        }, vjs.MediaTechController.prototype.remoteTextTracks = function() {
            return this.player_.remoteTextTracks_ = this.player_.remoteTextTracks_ || new vjs.TextTrackList, this.player_.remoteTextTracks_
        }, createTrackHelper = function(e, t, n, r, i) {
            var o, s = e.textTracks();
            return (i = i || {}).kind = t, n && (i.label = n), r && (i.language = r), i.player = e.player_, o = new vjs.TextTrack(i), s.addTrack_(o), o
        }, vjs.MediaTechController.prototype.addTextTrack = function(e, t, n) {
            if (!e) throw new Error("TextTrack kind is required but was not provided");
            return createTrackHelper(this, e, t, n)
        }, vjs.MediaTechController.prototype.addRemoteTextTrack = function(e) {
            var t = createTrackHelper(this, e.kind, e.label, e.language, e);
            return this.remoteTextTracks().addTrack_(t), {
                track: t
            }
        }, vjs.MediaTechController.prototype.removeRemoteTextTrack = function(e) {
            this.textTracks().removeTrack_(e), this.remoteTextTracks().removeTrack_(e)
        }, vjs.MediaTechController.prototype.setPoster = function() {}, vjs.MediaTechController.prototype.featuresVolumeControl = !0, vjs.MediaTechController.prototype.featuresFullscreenResize = !1, vjs.MediaTechController.prototype.featuresPlaybackRate = !1, vjs.MediaTechController.prototype.featuresProgressEvents = !1, vjs.MediaTechController.prototype.featuresTimeupdateEvents = !1, vjs.MediaTechController.prototype.featuresNativeTextTracks = !1, vjs.MediaTechController.withSourceHandlers = function(e) {
            e.registerSourceHandler = function(t, n) {
                var r = e.sourceHandlers;
                r || (r = e.sourceHandlers = []), void 0 === n && (n = r.length), r.splice(n, 0, t)
            }, e.selectSourceHandler = function(t) {
                for (var n = e.sourceHandlers || [], r = 0; r < n.length; r++)
                    if (n[r].canHandleSource(t)) return n[r];
                return null
            }, e.canPlaySource = function(t) {
                var n = e.selectSourceHandler(t);
                return n ? n.canHandleSource(t) : ""
            }, e.prototype.setSource = function(t) {
                var n = e.selectSourceHandler(t);
                return n || (e.nativeSourceHandler ? n = e.nativeSourceHandler : vjs.log.error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ = t, this.sourceHandler_ = n.handleSource(t, this), this.on("dispose", this.disposeSourceHandler), this
            }, e.prototype.disposeSourceHandler = function() {
                this.sourceHandler_ && this.sourceHandler_.dispose && this.sourceHandler_.dispose()
            }
        }, vjs.media = {}, vjs.Html5 = vjs.MediaTechController.extend({
            init: function(e, t, n) {
                var r, i, o, s, a;
                !1 !== t.nativeCaptions && !1 !== t.nativeTextTracks || (this.featuresNativeTextTracks = !1), vjs.MediaTechController.call(this, e, t, n), this.setupTriggers();
                var l = t.source;
                if (l && (this.el_.currentSrc !== l.src || e.tag && 3 === e.tag.initNetworkState_) && this.setSource(l), this.el_.hasChildNodes()) {
                    for (i = (r = this.el_.childNodes).length, a = []; i--;) "track" === (s = r[i]).nodeName.toLowerCase() && (this.featuresNativeTextTracks ? this.remoteTextTracks().addTrack_(s.track) : a.push(s));
                    for (o = 0; o < a.length; o++) this.el_.removeChild(a[o])
                }
                vjs.TOUCH_ENABLED && !0 === e.options().nativeControlsForTouch && this.useNativeControls(), e.ready(function() {
                    this.src() && this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
                }), this.triggerReady()
            }
        }), vjs.Html5.prototype.dispose = function() {
            vjs.Html5.disposeMediaElement(this.el_), vjs.MediaTechController.prototype.dispose.call(this)
        }, vjs.Html5.prototype.createEl = function() {
            var e, t, n, r, i, o = this.player_,
                s = o.tag;
            if (!s || !1 === this.movingMediaElementInDOM) {
                if (s ? (i = s.cloneNode(!1), vjs.Html5.disposeMediaElement(s), s = i, o.tag = null) : (s = vjs.createEl("video"), r = videojs.util.mergeOptions({}, o.tagAttributes), vjs.TOUCH_ENABLED && !0 === o.options().nativeControlsForTouch || delete r.controls, vjs.setElementAttributes(s, vjs.obj.merge(r, {
                        id: o.id() + "_html5_api",
                        class: "vjs-tech"
                    }))), s.player = o, o.options_.tracks)
                    for (n = 0; n < o.options_.tracks.length; n++) e = o.options_.tracks[n], (t = document.createElement("track")).kind = e.kind, t.label = e.label, t.srclang = e.srclang, t.src = e.src, "default" in e && t.setAttribute("default", "default"), s.appendChild(t);
                vjs.insertFirst(s, o.el())
            }
            var a = ["autoplay", "preload", "loop", "muted"];
            for (n = a.length - 1; n >= 0; n--) {
                var l = a[n],
                    u = {};
                void 0 !== o.options_[l] && (u[l] = o.options_[l]), vjs.setElementAttributes(s, u)
            }
            return s
        }, vjs.Html5.prototype.setupTriggers = function() {
            for (var e = vjs.Html5.Events.length - 1; e >= 0; e--) this.on(vjs.Html5.Events[e], this.eventHandler)
        }, vjs.Html5.prototype.eventHandler = function(e) {
            "error" == e.type && this.error() ? this.player().error(this.error().code) : (e.bubbles = !1, this.player().trigger(e))
        }, vjs.Html5.prototype.useNativeControls = function() {
            var e, t, n, r, i;
            e = this, t = this.player(), e.setControls(t.controls()), n = function() {
                e.setControls(!0)
            }, r = function() {
                e.setControls(!1)
            }, t.on("controlsenabled", n), t.on("controlsdisabled", r), i = function() {
                t.off("controlsenabled", n), t.off("controlsdisabled", r)
            }, e.on("dispose", i), t.on("usingcustomcontrols", i), t.usingNativeControls(!0)
        }, vjs.Html5.prototype.play = function() {
            this.el_.play()
        }, vjs.Html5.prototype.pause = function() {
            this.el_.pause()
        }, vjs.Html5.prototype.paused = function() {
            return this.el_.paused
        }, vjs.Html5.prototype.currentTime = function() {
            return this.el_.currentTime
        }, vjs.Html5.prototype.setCurrentTime = function(e) {
            try {
                this.el_.currentTime = e
            } catch (e) {
                vjs.log(e, "Video is not ready. (Video.js)")
            }
        }, vjs.Html5.prototype.duration = function() {
            return this.el_.duration || 0
        }, vjs.Html5.prototype.buffered = function() {
            return this.el_.buffered
        }, vjs.Html5.prototype.volume = function() {
            return this.el_.volume
        }, vjs.Html5.prototype.setVolume = function(e) {
            this.el_.volume = e
        }, vjs.Html5.prototype.muted = function() {
            return this.el_.muted
        }, vjs.Html5.prototype.setMuted = function(e) {
            this.el_.muted = e
        }, vjs.Html5.prototype.width = function() {
            return this.el_.offsetWidth
        }, vjs.Html5.prototype.height = function() {
            return this.el_.offsetHeight
        }, vjs.Html5.prototype.supportsFullScreen = function() {
            return !("function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT))
        }, vjs.Html5.prototype.enterFullScreen = function() {
            var e = this.el_;
            "webkitDisplayingFullscreen" in e && this.one("webkitbeginfullscreen", function() {
                this.player_.isFullscreen(!0), this.one("webkitendfullscreen", function() {
                    this.player_.isFullscreen(!1), this.player_.trigger("fullscreenchange")
                }), this.player_.trigger("fullscreenchange")
            }), e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                e.pause(), e.webkitEnterFullScreen()
            }, 0)) : e.webkitEnterFullScreen()
        }, vjs.Html5.prototype.exitFullScreen = function() {
            this.el_.webkitExitFullScreen()
        }, vjs.Html5.prototype.returnOriginalIfBlobURI_ = function(e, t) {
            return t && e && /^blob\:/i.test(e) ? t : e
        }, vjs.Html5.prototype.src = function(e) {
            var t = this.el_.src;
            if (void 0 === e) return this.returnOriginalIfBlobURI_(t, this.source_);
            this.setSrc(e)
        }, vjs.Html5.prototype.setSrc = function(e) {
            this.el_.src = e
        }, vjs.Html5.prototype.load = function() {
            this.el_.load()
        }, vjs.Html5.prototype.currentSrc = function() {
            var e = this.el_.currentSrc;
            return this.currentSource_ ? this.returnOriginalIfBlobURI_(e, this.currentSource_.src) : e
        }, vjs.Html5.prototype.poster = function() {
            return this.el_.poster
        }, vjs.Html5.prototype.setPoster = function(e) {
            this.el_.poster = e
        }, vjs.Html5.prototype.preload = function() {
            return this.el_.preload
        }, vjs.Html5.prototype.setPreload = function(e) {
            this.el_.preload = e
        }, vjs.Html5.prototype.autoplay = function() {
            return this.el_.autoplay
        }, vjs.Html5.prototype.setAutoplay = function(e) {
            this.el_.autoplay = e
        }, vjs.Html5.prototype.controls = function() {
            return this.el_.controls
        }, vjs.Html5.prototype.setControls = function(e) {
            this.el_.controls = !!e
        }, vjs.Html5.prototype.loop = function() {
            return this.el_.loop
        }, vjs.Html5.prototype.setLoop = function(e) {
            this.el_.loop = e
        }, vjs.Html5.prototype.error = function() {
            return this.el_.error
        }, vjs.Html5.prototype.seeking = function() {
            return this.el_.seeking
        }, vjs.Html5.prototype.seekable = function() {
            return this.el_.seekable
        }, vjs.Html5.prototype.ended = function() {
            return this.el_.ended
        }, vjs.Html5.prototype.defaultMuted = function() {
            return this.el_.defaultMuted
        }, vjs.Html5.prototype.playbackRate = function() {
            return this.el_.playbackRate
        }, vjs.Html5.prototype.setPlaybackRate = function(e) {
            this.el_.playbackRate = e
        }, vjs.Html5.prototype.networkState = function() {
            return this.el_.networkState
        }, vjs.Html5.prototype.readyState = function() {
            return this.el_.readyState
        }, vjs.Html5.prototype.textTracks = function() {
            return this.featuresNativeTextTracks ? this.el_.textTracks : vjs.MediaTechController.prototype.textTracks.call(this)
        }, vjs.Html5.prototype.addTextTrack = function(e, t, n) {
            return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, n) : vjs.MediaTechController.prototype.addTextTrack.call(this, e, t, n)
        }, vjs.Html5.prototype.addRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks) return vjs.MediaTechController.prototype.addRemoteTextTrack.call(this, e);
            var t = document.createElement("track");
            return (e = e || {}).kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), this.el().appendChild(t), this.remoteTextTracks().addTrack_(t.track), t
        }, vjs.Html5.prototype.removeRemoteTextTrack = function(e) {
            if (!this.featuresNativeTextTracks) return vjs.MediaTechController.prototype.removeRemoteTextTrack.call(this, e);
            var t, n;
            for (this.remoteTextTracks().removeTrack_(e), t = this.el().querySelectorAll("track"), n = 0; n < t.length; n++)
                if (t[n] === e || t[n].track === e) {
                    t[n].parentNode.removeChild(t[n]);
                    break
                }
        }, vjs.Html5.isSupported = function() {
            try {
                vjs.TEST_VID.volume = .5
            } catch (e) {
                return !1
            }
            return !!vjs.TEST_VID.canPlayType
        }, vjs.MediaTechController.withSourceHandlers(vjs.Html5), origSetSource = vjs.Html5.prototype.setSource, origDisposeSourceHandler = vjs.Html5.prototype.disposeSourceHandler, vjs.Html5.prototype.setSource = function(e) {
            var t = origSetSource.call(this, e);
            return this.source_ = e.src, t
        }, vjs.Html5.prototype.disposeSourceHandler = function() {
            return this.source_ = void 0, origDisposeSourceHandler.call(this)
        }, vjs.Html5.nativeSourceHandler = {}, vjs.Html5.nativeSourceHandler.canHandleSource = function(e) {
            var t;

            function n(e) {
                try {
                    return vjs.TEST_VID.canPlayType(e)
                } catch (e) {
                    return ""
                }
            }
            return e.type ? n(e.type) : e.src ? n("video/" + ((t = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && t[1])) : ""
        }, vjs.Html5.nativeSourceHandler.handleSource = function(e, t) {
            t.setSrc(e.src)
        }, vjs.Html5.nativeSourceHandler.dispose = function() {}, vjs.Html5.registerSourceHandler(vjs.Html5.nativeSourceHandler), vjs.Html5.canControlVolume = function() {
            var e = vjs.TEST_VID.volume;
            return vjs.TEST_VID.volume = e / 2 + .1, e !== vjs.TEST_VID.volume
        }, vjs.Html5.canControlPlaybackRate = function() {
            var e = vjs.TEST_VID.playbackRate;
            return vjs.TEST_VID.playbackRate = e / 2 + .1, e !== vjs.TEST_VID.playbackRate
        }, vjs.Html5.supportsNativeTextTracks = function() {
            var e;
            return (e = !!vjs.TEST_VID.textTracks) && vjs.TEST_VID.textTracks.length > 0 && (e = "number" != typeof vjs.TEST_VID.textTracks[0].mode), e && vjs.IS_FIREFOX && (e = !1), e
        }, vjs.Html5.prototype.featuresVolumeControl = vjs.Html5.canControlVolume(), vjs.Html5.prototype.featuresPlaybackRate = vjs.Html5.canControlPlaybackRate(), vjs.Html5.prototype.movingMediaElementInDOM = !vjs.IS_IOS, vjs.Html5.prototype.featuresFullscreenResize = !0, vjs.Html5.prototype.featuresProgressEvents = !0, vjs.Html5.prototype.featuresNativeTextTracks = vjs.Html5.supportsNativeTextTracks(), mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, mp4RE = /^video\/mp4/i, vjs.Html5.patchCanPlayType = function() {
            vjs.ANDROID_VERSION >= 4 && (canPlayType || (canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function(e) {
                return e && mpegurlRE.test(e) ? "maybe" : canPlayType.call(this, e)
            }), vjs.IS_OLD_ANDROID && (canPlayType || (canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function(e) {
                return e && mp4RE.test(e) ? "maybe" : canPlayType.call(this, e)
            })
        }, vjs.Html5.unpatchCanPlayType = function() {
            var e = vjs.TEST_VID.constructor.prototype.canPlayType;
            return vjs.TEST_VID.constructor.prototype.canPlayType = canPlayType, canPlayType = null, e
        }, vjs.Html5.patchCanPlayType(), vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.Html5.disposeMediaElement = function(e) {
            if (e) {
                for (e.player = null, e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                e.removeAttribute("src"), "function" == typeof e.load && function() {
                    try {
                        e.load()
                    } catch (e) {}
                }()
            }
        }, vjs.Flash = vjs.MediaTechController.extend({
            init: function(e, t, n) {
                vjs.MediaTechController.call(this, e, t, n);
                var r = t.source,
                    i = e.id() + "_flash_api",
                    o = e.options_,
                    s = vjs.obj.merge({
                        readyFunction: "videojs.Flash.onReady",
                        eventProxyFunction: "videojs.Flash.onEvent",
                        errorEventProxyFunction: "videojs.Flash.onError",
                        autoplay: o.autoplay,
                        preload: o.preload,
                        loop: o.loop,
                        muted: o.muted
                    }, t.flashVars),
                    a = vjs.obj.merge({
                        wmode: "opaque",
                        bgcolor: "#000000"
                    }, t.params),
                    l = vjs.obj.merge({
                        id: i,
                        name: i,
                        class: "vjs-tech"
                    }, t.attributes);
                r && this.ready(function() {
                    this.setSource(r)
                }), vjs.insertFirst(this.el_, t.parentEl), t.startTime && this.ready(function() {
                    this.load(), this.play(), this.currentTime(t.startTime)
                }), vjs.IS_FIREFOX && this.ready(function() {
                    this.on("mousemove", function() {
                        this.player().trigger({
                            type: "mousemove",
                            bubbles: !1
                        })
                    })
                }), e.on("stageclick", e.reportUserActivity), this.el_ = vjs.Flash.embed(t.swf, this.el_, s, a, l)
            }
        }), vjs.Flash.prototype.dispose = function() {
            vjs.MediaTechController.prototype.dispose.call(this)
        }, vjs.Flash.prototype.play = function() {
            this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
        }, vjs.Flash.prototype.pause = function() {
            this.el_.vjs_pause()
        }, vjs.Flash.prototype.src = function(e) {
            return void 0 === e ? this.currentSrc() : this.setSrc(e)
        }, vjs.Flash.prototype.setSrc = function(e) {
            if (e = vjs.getAbsoluteURL(e), this.el_.vjs_src(e), this.player_.autoplay()) {
                var t = this;
                this.setTimeout(function() {
                    t.play()
                }, 0)
            }
        }, vjs.Flash.prototype.setCurrentTime = function(e) {
            this.lastSeekTarget_ = e, this.el_.vjs_setProperty("currentTime", e), vjs.MediaTechController.prototype.setCurrentTime.call(this)
        }, vjs.Flash.prototype.currentTime = function(e) {
            return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
        }, vjs.Flash.prototype.currentSrc = function() {
            return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
        }, vjs.Flash.prototype.load = function() {
            this.el_.vjs_load()
        }, vjs.Flash.prototype.poster = function() {
            this.el_.vjs_getProperty("poster")
        }, vjs.Flash.prototype.setPoster = function() {}, vjs.Flash.prototype.seekable = function() {
            return 0 === this.duration() ? vjs.createTimeRange() : vjs.createTimeRange(0, this.duration())
        }, vjs.Flash.prototype.buffered = function() {
            return this.el_.vjs_getProperty ? vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered")) : vjs.createTimeRange()
        }, vjs.Flash.prototype.duration = function() {
            return this.el_.vjs_getProperty ? this.el_.vjs_getProperty("duration") : 0
        }, vjs.Flash.prototype.supportsFullScreen = function() {
            return !1
        }, vjs.Flash.prototype.enterFullScreen = function() {
            return !1
        },
        function() {
            var e, t = vjs.Flash.prototype,
                n = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
                r = "error,networkState,readyState,seeking,initialTime,startOffsetTime,paused,played,ended,videoTracks,audioTracks,videoWidth,videoHeight".split(",");

            function i(e) {
                var n = e.charAt(0).toUpperCase() + e.slice(1);
                t["set" + n] = function(t) {
                    return this.el_.vjs_setProperty(e, t)
                }
            }

            function o(e) {
                t[e] = function() {
                    return this.el_.vjs_getProperty(e)
                }
            }
            for (e = 0; e < n.length; e++) o(n[e]), i(n[e]);
            for (e = 0; e < r.length; e++) o(r[e])
        }(), vjs.Flash.isSupported = function() {
            return vjs.Flash.version()[0] >= 10
        }, vjs.MediaTechController.withSourceHandlers(vjs.Flash), vjs.Flash.nativeSourceHandler = {}, vjs.Flash.nativeSourceHandler.canHandleSource = function(e) {
            return e.type && e.type.replace(/;.*/, "").toLowerCase() in vjs.Flash.formats ? "maybe" : ""
        }, vjs.Flash.nativeSourceHandler.handleSource = function(e, t) {
            t.setSrc(e.src)
        }, vjs.Flash.nativeSourceHandler.dispose = function() {}, vjs.Flash.registerSourceHandler(vjs.Flash.nativeSourceHandler), vjs.Flash.formats = {
            "video/flv": "FLV",
            "video/x-flv": "FLV",
            "video/mp4": "MP4",
            "video/m4v": "MP4"
        }, vjs.Flash.onReady = function(e) {
            var t, n;
            (n = (t = vjs.el(e)) && t.parentNode && t.parentNode.player) && (t.player = n, vjs.Flash.checkReady(n.tech))
        }, vjs.Flash.checkReady = function(e) {
            e.el() && (e.el().vjs_getProperty ? e.triggerReady() : this.setTimeout(function() {
                vjs.Flash.checkReady(e)
            }, 50))
        }, vjs.Flash.onEvent = function(e, t) {
            vjs.el(e).player.trigger(t)
        }, vjs.Flash.onError = function(e, t) {
            var n = vjs.el(e).player,
                r = "FLASH: " + t;
            "srcnotfound" == t ? n.error({
                code: 4,
                message: r
            }) : n.error(r)
        }, vjs.Flash.version = function() {
            var e = "0,0,0";
            try {
                e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
            } catch (t) {
                try {
                    navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                } catch (e) {}
            }
            return e.split(",")
        }, vjs.Flash.embed = function(e, t, n, r, i) {
            var o = vjs.Flash.getEmbedCode(e, n, r, i),
                s = vjs.createEl("div", {
                    innerHTML: o
                }).childNodes[0],
                a = t.parentNode;
            t.parentNode.replaceChild(s, t), s[vjs.expando] = t[vjs.expando];
            var l = a.childNodes[0];
            return setTimeout(function() {
                l.style.display = "block"
            }, 1e3), s
        }, vjs.Flash.getEmbedCode = function(e, t, n, r) {
            var i = "",
                o = "",
                s = "";
            return t && vjs.obj.each(t, function(e, t) {
                i += e + "=" + t + "&amp;"
            }), n = vjs.obj.merge({
                movie: e,
                flashvars: i,
                allowScriptAccess: "always",
                allowNetworking: "all"
            }, n), vjs.obj.each(n, function(e, t) {
                o += '<param name="' + e + '" value="' + t + '" />'
            }), r = vjs.obj.merge({
                data: e,
                width: "100%",
                height: "100%"
            }, r), vjs.obj.each(r, function(e, t) {
                s += e + '="' + t + '" '
            }), '<object type="application/x-shockwave-flash" ' + s + ">" + o + "</object>"
        }, vjs.Flash.streamingFormats = {
            "rtmp/mp4": "MP4",
            "rtmp/flv": "FLV"
        }, vjs.Flash.streamFromParts = function(e, t) {
            return e + "&" + t
        }, vjs.Flash.streamToParts = function(e) {
            var t = {
                connection: "",
                stream: ""
            };
            if (!e) return t;
            var n, r = e.indexOf("&");
            return -1 !== r ? n = r + 1 : 0 === (r = n = e.lastIndexOf("/") + 1) && (r = n = e.length), t.connection = e.substring(0, r), t.stream = e.substring(n, e.length), t
        }, vjs.Flash.isStreamingType = function(e) {
            return e in vjs.Flash.streamingFormats
        }, vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i, vjs.Flash.isStreamingSrc = function(e) {
            return vjs.Flash.RTMP_RE.test(e)
        }, vjs.Flash.rtmpSourceHandler = {}, vjs.Flash.rtmpSourceHandler.canHandleSource = function(e) {
            return vjs.Flash.isStreamingType(e.type) || vjs.Flash.isStreamingSrc(e.src) ? "maybe" : ""
        }, vjs.Flash.rtmpSourceHandler.handleSource = function(e, t) {
            var n = vjs.Flash.streamToParts(e.src);
            t.setRtmpConnection(n.connection), t.setRtmpStream(n.stream)
        }, vjs.Flash.registerSourceHandler(vjs.Flash.rtmpSourceHandler), vjs.MediaLoader = vjs.Component.extend({
            init: function(e, t, n) {
                if (vjs.Component.call(this, e, t, n), e.options_.sources && 0 !== e.options_.sources.length) e.src(e.options_.sources);
                else
                    for (var r = 0, i = e.options_.techOrder; r < i.length; r++) {
                        var o = vjs.capitalize(i[r]),
                            s = window.videojs[o];
                        if (s && s.isSupported()) {
                            e.loadTech(o);
                            break
                        }
                    }
            }
        }), vjs.TextTrackMode = {
            disabled: "disabled",
            hidden: "hidden",
            showing: "showing"
        }, vjs.TextTrackKind = {
            subtitles: "subtitles",
            captions: "captions",
            descriptions: "descriptions",
            chapters: "chapters",
            metadata: "metadata"
        }, vjs.TextTrack = function(e) {
            var t, n, r, i, o, s, a, l, u, c, d;
            if (!(e = e || {}).player) throw new Error("A player was not provided.");
            if (t = this, vjs.IS_IE8)
                for (d in t = document.createElement("custom"), vjs.TextTrack.prototype) t[d] = vjs.TextTrack.prototype[d];
            if (t.player_ = e.player, r = vjs.TextTrackMode[e.mode] || "disabled", i = vjs.TextTrackKind[e.kind] || "subtitles", o = e.label || "", s = e.language || e.srclang || "", n = e.id || "vjs_text_track_" + vjs.guid++, "metadata" !== i && "chapters" !== i || (r = "hidden"), t.cues_ = [], t.activeCues_ = [], a = new vjs.TextTrackCueList(t.cues_), l = new vjs.TextTrackCueList(t.activeCues_), c = !1, u = vjs.bind(t, function() {
                    this.activeCues, c && (this.trigger("cuechange"), c = !1)
                }), "disabled" !== r && t.player_.on("timeupdate", u), Object.defineProperty(t, "kind", {
                    get: function() {
                        return i
                    },
                    set: Function.prototype
                }), Object.defineProperty(t, "label", {
                    get: function() {
                        return o
                    },
                    set: Function.prototype
                }), Object.defineProperty(t, "language", {
                    get: function() {
                        return s
                    },
                    set: Function.prototype
                }), Object.defineProperty(t, "id", {
                    get: function() {
                        return n
                    },
                    set: Function.prototype
                }), Object.defineProperty(t, "mode", {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        vjs.TextTrackMode[e] && ("showing" === (r = e) && this.player_.on("timeupdate", u), this.trigger("modechange"))
                    }
                }), Object.defineProperty(t, "cues", {
                    get: function() {
                        return this.loaded_ ? a : null
                    },
                    set: Function.prototype
                }), Object.defineProperty(t, "activeCues", {
                    get: function() {
                        var e, t, n, r, i;
                        if (!this.loaded_) return null;
                        if (0 === this.cues.length) return l;
                        for (r = this.player_.currentTime(), e = 0, t = this.cues.length, n = []; e < t; e++)(i = this.cues[e]).startTime <= r && i.endTime >= r ? n.push(i) : i.startTime === i.endTime && i.startTime <= r && i.startTime + .5 >= r && n.push(i);
                        if (c = !1, n.length !== this.activeCues_.length) c = !0;
                        else
                            for (e = 0; e < n.length; e++) - 1 === indexOf.call(this.activeCues_, n[e]) && (c = !0);
                        return this.activeCues_ = n, l.setCues_(this.activeCues_), l
                    },
                    set: Function.prototype
                }), e.src ? loadTrack(e.src, t) : t.loaded_ = !0, vjs.IS_IE8) return t
        }, vjs.TextTrack.prototype = vjs.obj.create(vjs.EventEmitter.prototype), vjs.TextTrack.prototype.constructor = vjs.TextTrack, vjs.TextTrack.prototype.allowedEvents_ = {
            cuechange: "cuechange"
        }, vjs.TextTrack.prototype.addCue = function(e) {
            var t = this.player_.textTracks(),
                n = 0;
            if (t)
                for (; n < t.length; n++) t[n] !== this && t[n].removeCue(e);
            this.cues_.push(e), this.cues.setCues_(this.cues_)
        }, vjs.TextTrack.prototype.removeCue = function(e) {
            for (var t = 0, n = this.cues_.length, r = !1; t < n; t++) this.cues_[t] === e && (this.cues_.splice(t, 1), r = !0);
            r && this.cues.setCues_(this.cues_)
        }, loadTrack = function(e, t) {
            vjs.xhr(e, vjs.bind(this, function(e, n, r) {
                if (e) return vjs.log.error(e);
                t.loaded_ = !0, parseCues(r, t)
            }))
        }, parseCues = function(e, t) {
            if ("function" != typeof window.WebVTT) return window.setTimeout(function() {
                parseCues(e, t)
            }, 25);
            var n = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
            n.oncue = function(e) {
                t.addCue(e)
            }, n.onparsingerror = function(e) {
                vjs.log.error(e)
            }, n.parse(e), n.flush()
        }, indexOf = function(e, t) {
            var n;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var r = Object(this),
                i = r.length >>> 0;
            if (0 === i) return -1;
            var o = +t || 0;
            if (Math.abs(o) === 1 / 0 && (o = 0), o >= i) return -1;
            for (n = Math.max(o >= 0 ? o : i - Math.abs(o), 0); n < i;) {
                if (n in r && r[n] === e) return n;
                n++
            }
            return -1
        }, vjs.TextTrackList = function(e) {
            var t, n = this,
                r = 0;
            if (vjs.IS_IE8)
                for (t in n = document.createElement("custom"), vjs.TextTrackList.prototype) n[t] = vjs.TextTrackList.prototype[t];
            for (e = e || [], n.tracks_ = [], Object.defineProperty(n, "length", {
                    get: function() {
                        return this.tracks_.length
                    }
                }); r < e.length; r++) n.addTrack_(e[r]);
            if (vjs.IS_IE8) return n
        }, vjs.TextTrackList.prototype = vjs.obj.create(vjs.EventEmitter.prototype), vjs.TextTrackList.prototype.constructor = vjs.TextTrackList, vjs.TextTrackList.prototype.allowedEvents_ = {
            change: "change",
            addtrack: "addtrack",
            removetrack: "removetrack"
        },
        function() {
            var e;
            for (e in vjs.TextTrackList.prototype.allowedEvents_) vjs.TextTrackList.prototype["on" + e] = null
        }(), vjs.TextTrackList.prototype.addTrack_ = function(e) {
            var t = this.tracks_.length;
            "" + t in this || Object.defineProperty(this, t, {
                get: function() {
                    return this.tracks_[t]
                }
            }), e.addEventListener("modechange", vjs.bind(this, function() {
                this.trigger("change")
            })), this.tracks_.push(e), this.trigger({
                type: "addtrack",
                track: e
            })
        }, vjs.TextTrackList.prototype.removeTrack_ = function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) {
                    this.tracks_.splice(t, 1);
                    break
                } this.trigger({
                type: "removetrack",
                track: e
            })
        }, vjs.TextTrackList.prototype.getTrackById = function(e) {
            for (var t, n = 0, r = this.length, i = null; n < r; n++)
                if ((t = this[n]).id === e) {
                    i = t;
                    break
                } return i
        }, vjs.TextTrackCueList = function(e) {
            var t, n = this;
            if (vjs.IS_IE8)
                for (t in n = document.createElement("custom"), vjs.TextTrackCueList.prototype) n[t] = vjs.TextTrackCueList.prototype[t];
            if (vjs.TextTrackCueList.prototype.setCues_.call(n, e), Object.defineProperty(n, "length", {
                    get: function() {
                        return this.length_
                    }
                }), vjs.IS_IE8) return n
        }, vjs.TextTrackCueList.prototype.setCues_ = function(e) {
            var t, n = this.length || 0,
                r = 0,
                i = e.length;
            if (this.cues_ = e, this.length_ = e.length, t = function(e) {
                    "" + e in this || Object.defineProperty(this, "" + e, {
                        get: function() {
                            return this.cues_[e]
                        }
                    })
                }, n < i)
                for (r = n; r < i; r++) t.call(this, r)
        }, vjs.TextTrackCueList.prototype.getCueById = function(e) {
            for (var t, n = 0, r = this.length, i = null; n < r; n++)
                if ((t = this[n]).id === e) {
                    i = t;
                    break
                } return i
        },
        function() {
            "use strict";
            vjs.TextTrackDisplay = vjs.Component.extend({
                init: function(e, t, n) {
                    vjs.Component.call(this, e, t, n), e.on("loadstart", vjs.bind(this, this.toggleDisplay)), e.ready(vjs.bind(this, function() {
                        var t, n, r;
                        if (e.tech && e.tech.featuresNativeTextTracks) this.hide();
                        else
                            for (e.on("fullscreenchange", vjs.bind(this, this.updateDisplay)), n = e.options_.tracks || [], t = 0; t < n.length; t++) r = n[t], this.player_.addRemoteTextTrack(r)
                    }))
                }
            }), vjs.TextTrackDisplay.prototype.toggleDisplay = function() {
                this.player_.tech && this.player_.tech.featuresNativeTextTracks ? this.hide() : this.show()
            }, vjs.TextTrackDisplay.prototype.createEl = function() {
                return vjs.Component.prototype.createEl.call(this, "div", {
                    className: "vjs-text-track-display"
                })
            }, vjs.TextTrackDisplay.prototype.clearDisplay = function() {
                "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.el_)
            };
            var e = function(e, t) {
                    return "rgba(" + parseInt(e[1] + e[1], 16) + "," + parseInt(e[2] + e[2], 16) + "," + parseInt(e[3] + e[3], 16) + "," + t + ")"
                },
                t = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                n = function(e, t, n) {
                    try {
                        e.style[t] = n
                    } catch (e) {}
                };
            vjs.TextTrackDisplay.prototype.updateDisplay = function() {
                var e, t = this.player_.textTracks(),
                    n = 0;
                if (this.clearDisplay(), t)
                    for (; n < t.length; n++) "showing" === (e = t[n]).mode && this.updateForTrack(e)
            }, vjs.TextTrackDisplay.prototype.updateForTrack = function(r) {
                if ("function" == typeof window.WebVTT && r.activeCues) {
                    for (var i, o, s = 0, a = this.player_.textTrackSettings.getValues(), l = []; s < r.activeCues.length; s++) l.push(r.activeCues[s]);
                    for (window.WebVTT.processCues(window, r.activeCues, this.el_), s = l.length; s--;) i = l[s].displayState, a.color && (i.firstChild.style.color = a.color), a.textOpacity && n(i.firstChild, "color", e(a.color || "#fff", a.textOpacity)), a.backgroundColor && (i.firstChild.style.backgroundColor = a.backgroundColor), a.backgroundOpacity && n(i.firstChild, "backgroundColor", e(a.backgroundColor || "#000", a.backgroundOpacity)), a.windowColor && (a.windowOpacity ? n(i, "backgroundColor", e(a.windowColor, a.windowOpacity)) : i.style.backgroundColor = a.windowColor), a.edgeStyle && ("dropshadow" === a.edgeStyle ? i.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === a.edgeStyle ? i.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === a.edgeStyle ? i.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === a.edgeStyle && (i.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), a.fontPercent && 1 !== a.fontPercent && (o = window.parseFloat(i.style.fontSize), i.style.fontSize = o * a.fontPercent + "px", i.style.height = "auto", i.style.top = "auto", i.style.bottom = "2px"), a.fontFamily && "default" !== a.fontFamily && ("small-caps" === a.fontFamily ? i.firstChild.style.fontVariant = "small-caps" : i.firstChild.style.fontFamily = t[a.fontFamily])
                }
            }, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
                init: function(e, t) {
                    var n, r, i = this.track = t.track,
                        o = e.textTracks();
                    o && (n = vjs.bind(this, function() {
                        var e, t, n, r = "showing" === this.track.mode;
                        if (this instanceof vjs.OffTextTrackMenuItem)
                            for (r = !0, t = 0, n = o.length; t < n; t++)
                                if ((e = o[t]).kind === this.track.kind && "showing" === e.mode) {
                                    r = !1;
                                    break
                                } this.selected(r)
                    }), o.addEventListener("change", n), e.on("dispose", function() {
                        o.removeEventListener("change", n)
                    })), t.label = i.label || i.language || "Unknown", t.selected = i.default || "showing" === i.mode, vjs.MenuItem.call(this, e, t), o && void 0 === o.onchange && this.on(["tap", "click"], function() {
                        if ("object" != typeof window.Event) try {
                            r = new window.Event("change")
                        } catch (e) {}
                        r || (r = document.createEvent("Event")).initEvent("change", !0, !0), o.dispatchEvent(r)
                    })
                }
            }), vjs.TextTrackMenuItem.prototype.onClick = function() {
                var e, t = this.track.kind,
                    n = this.player_.textTracks(),
                    r = 0;
                if (vjs.MenuItem.prototype.onClick.call(this), n)
                    for (; r < n.length; r++)(e = n[r]).kind === t && (e === this.track ? e.mode = "showing" : e.mode = "disabled")
            }, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
                init: function(e, t) {
                    t.track = {
                        kind: t.kind,
                        player: e,
                        label: t.kind + " off",
                        default: !1,
                        mode: "disabled"
                    }, vjs.TextTrackMenuItem.call(this, e, t), this.selected(!0)
                }
            }), vjs.CaptionSettingsMenuItem = vjs.TextTrackMenuItem.extend({
                init: function(e, t) {
                    t.track = {
                        kind: t.kind,
                        player: e,
                        label: t.kind + " settings",
                        default: !1,
                        mode: "disabled"
                    }, vjs.TextTrackMenuItem.call(this, e, t), this.addClass("vjs-texttrack-settings")
                }
            }), vjs.CaptionSettingsMenuItem.prototype.onClick = function() {
                this.player().getChild("textTrackSettings").show()
            }, vjs.TextTrackButton = vjs.MenuButton.extend({
                init: function(e, t) {
                    var n, r;
                    vjs.MenuButton.call(this, e, t), n = this.player_.textTracks(), this.items.length <= 1 && this.hide(), n && (r = vjs.bind(this, this.update), n.addEventListener("removetrack", r), n.addEventListener("addtrack", r), this.player_.on("dispose", function() {
                        n.removeEventListener("removetrack", r), n.removeEventListener("addtrack", r)
                    }))
                }
            }), vjs.TextTrackButton.prototype.createItems = function() {
                var e, t, n = [];
                if (!(this instanceof vjs.CaptionsButton) || this.player().tech && this.player().tech.featuresNativeTextTracks || n.push(new vjs.CaptionSettingsMenuItem(this.player_, {
                        kind: this.kind_
                    })), n.push(new vjs.OffTextTrackMenuItem(this.player_, {
                        kind: this.kind_
                    })), !(t = this.player_.textTracks())) return n;
                for (var r = 0; r < t.length; r++)(e = t[r]).kind === this.kind_ && n.push(new vjs.TextTrackMenuItem(this.player_, {
                    track: e
                }));
                return n
            }, vjs.CaptionsButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Captions Menu")
                }
            }), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.CaptionsButton.prototype.update = function() {
                var e = 2;
                vjs.TextTrackButton.prototype.update.call(this), this.player().tech && this.player().tech.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
            }, vjs.SubtitlesButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Subtitles Menu")
                }
            }), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
                init: function(e, t, n) {
                    vjs.TextTrackButton.call(this, e, t, n), this.el_.setAttribute("aria-label", "Chapters Menu")
                }
            }), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
                var e, t, n = [];
                if (!(t = this.player_.textTracks())) return n;
                for (var r = 0; r < t.length; r++)(e = t[r]).kind === this.kind_ && n.push(new vjs.TextTrackMenuItem(this.player_, {
                    track: e
                }));
                return n
            }, vjs.ChaptersButton.prototype.createMenu = function() {
                for (var e, t, n = this.player_.textTracks() || [], r = 0, i = n.length, o = this.items = []; r < i; r++)
                    if ((e = n[r]).kind == this.kind_) {
                        if (e.cues) {
                            t = e;
                            break
                        }
                        e.mode = "hidden", window.setTimeout(vjs.bind(this, function() {
                            this.createMenu()
                        }), 100)
                    } var s = this.menu;
                if (void 0 === s && (s = new vjs.Menu(this.player_)).contentEl().appendChild(vjs.createEl("li", {
                        className: "vjs-menu-title",
                        innerHTML: vjs.capitalize(this.kind_),
                        tabindex: -1
                    })), t) {
                    var a, l, u = t.cues;
                    for (r = 0, i = u.length; r < i; r++) a = u[r], l = new vjs.ChaptersTrackMenuItem(this.player_, {
                        track: t,
                        cue: a
                    }), o.push(l), s.addChild(l);
                    this.addChild(s)
                }
                return this.items.length > 0 && this.show(), s
            }, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
                init: function(e, t) {
                    var n = this.track = t.track,
                        r = this.cue = t.cue,
                        i = e.currentTime();
                    t.label = r.text, t.selected = r.startTime <= i && i < r.endTime, vjs.MenuItem.call(this, e, t), n.addEventListener("cuechange", vjs.bind(this, this.update))
                }
            }), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
                vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
            }, vjs.ChaptersTrackMenuItem.prototype.update = function() {
                var e = this.cue,
                    t = this.player_.currentTime();
                this.selected(e.startTime <= t && t < e.endTime)
            }
        }(),
        function() {
            "use strict";

            function e(e) {
                var t;
                return e.selectedOptions ? t = e.selectedOptions[0] : e.options && (t = e.options[e.options.selectedIndex]), t.value
            }

            function t(e, t) {
                var n;
                if (t) {
                    for (n = 0; n < e.options.length && e.options[n].value !== t; n++);
                    e.selectedIndex = n
                }
            }
            vjs.TextTrackSettings = vjs.Component.extend({
                init: function(e, t) {
                    vjs.Component.call(this, e, t), this.hide(), vjs.on(this.el().querySelector(".vjs-done-button"), "click", vjs.bind(this, function() {
                        this.saveSettings(), this.hide()
                    })), vjs.on(this.el().querySelector(".vjs-default-button"), "click", vjs.bind(this, function() {
                        this.el().querySelector(".vjs-fg-color > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-color > select").selectedIndex = 0, this.el().querySelector(".window-color > select").selectedIndex = 0, this.el().querySelector(".vjs-text-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-bg-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-window-opacity > select").selectedIndex = 0, this.el().querySelector(".vjs-edge-style select").selectedIndex = 0, this.el().querySelector(".vjs-font-family select").selectedIndex = 0, this.el().querySelector(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                    })), vjs.on(this.el().querySelector(".vjs-fg-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-bg-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".window-color > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-text-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-bg-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-window-opacity > select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-font-percent select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-edge-style select"), "change", vjs.bind(this, this.updateDisplay)), vjs.on(this.el().querySelector(".vjs-font-family select"), "change", vjs.bind(this, this.updateDisplay)), e.options().persistTextTrackSettings && this.restoreSettings()
                }
            }), vjs.TextTrackSettings.prototype.createEl = function() {
                return vjs.Component.prototype.createEl.call(this, "div", {
                    className: "vjs-caption-settings vjs-modal-overlay",
                    innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
                })
            }, vjs.TextTrackSettings.prototype.getValues = function() {
                var t, n, r, i, o, s, a, l, u, c;
                for (c in i = e((t = this.el()).querySelector(".vjs-edge-style select")), o = e(t.querySelector(".vjs-font-family select")), s = e(t.querySelector(".vjs-fg-color > select")), r = e(t.querySelector(".vjs-text-opacity > select")), a = e(t.querySelector(".vjs-bg-color > select")), n = e(t.querySelector(".vjs-bg-opacity > select")), l = e(t.querySelector(".window-color > select")), u = {
                        backgroundOpacity: n,
                        textOpacity: r,
                        windowOpacity: e(t.querySelector(".vjs-window-opacity > select")),
                        edgeStyle: i,
                        fontFamily: o,
                        color: s,
                        backgroundColor: a,
                        windowColor: l,
                        fontPercent: window.parseFloat(e(t.querySelector(".vjs-font-percent > select")))
                    })("" === u[c] || "none" === u[c] || "fontPercent" === c && 1 === u[c]) && delete u[c];
                return u
            }, vjs.TextTrackSettings.prototype.setValues = function(e) {
                var n, r = this.el();
                t(r.querySelector(".vjs-edge-style select"), e.edgeStyle), t(r.querySelector(".vjs-font-family select"), e.fontFamily), t(r.querySelector(".vjs-fg-color > select"), e.color), t(r.querySelector(".vjs-text-opacity > select"), e.textOpacity), t(r.querySelector(".vjs-bg-color > select"), e.backgroundColor), t(r.querySelector(".vjs-bg-opacity > select"), e.backgroundOpacity), t(r.querySelector(".window-color > select"), e.windowColor), t(r.querySelector(".vjs-window-opacity > select"), e.windowOpacity), (n = e.fontPercent) && (n = n.toFixed(2)), t(r.querySelector(".vjs-font-percent > select"), n)
            }, vjs.TextTrackSettings.prototype.restoreSettings = function() {
                var e;
                try {
                    e = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
                } catch (e) {}
                e && this.setValues(e)
            }, vjs.TextTrackSettings.prototype.saveSettings = function() {
                var e;
                if (this.player_.options().persistTextTrackSettings) {
                    e = this.getValues();
                    try {
                        vjs.isEmpty(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
                    } catch (e) {}
                }
            }, vjs.TextTrackSettings.prototype.updateDisplay = function() {
                var e = this.player_.getChild("textTrackDisplay");
                e && e.updateDisplay()
            }
        }(), vjs.JSON, void 0 !== window.JSON && "function" == typeof window.JSON.parse) vjs.JSON = window.JSON;
    else {
        vjs.JSON = {};
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        vjs.JSON.parse = function(text, reviver) {
            var j;

            function walk(e, t) {
                var n, r, i = e[t];
                if (i && "object" == typeof i)
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (void 0 !== (r = walk(i, n)) ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    vjs.autoSetup = function() {
            var e, t, n, r = document.getElementsByTagName("video"),
                i = document.getElementsByTagName("audio"),
                o = [];
            if (r && r.length > 0)
                for (t = 0, n = r.length; t < n; t++) o.push(r[t]);
            if (i && i.length > 0)
                for (t = 0, n = i.length; t < n; t++) o.push(i[t]);
            if (o && o.length > 0)
                for (t = 0, n = o.length; t < n; t++) {
                    if (!(e = o[t]) || !e.getAttribute) {
                        vjs.autoSetupTimeout(1);
                        break
                    }
                    void 0 === e.player && null !== e.getAttribute("data-setup") && videojs(e)
                } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
        }, vjs.autoSetupTimeout = function(e) {
            setTimeout(vjs.autoSetup, e)
        }, "complete" === document.readyState ? vjs.windowLoaded = !0 : vjs.one(window, "load", function() {
            vjs.windowLoaded = !0
        }), vjs.autoSetupTimeout(1), vjs.plugin = function(e, t) {
            vjs.Player.prototype[e] = t
        }, root = this, vttjs = root.vttjs = {}, cueShim = vttjs.VTTCue, regionShim = vttjs.VTTRegion, oldVTTCue = root.VTTCue, oldVTTRegion = root.VTTRegion, vttjs.shim = function() {
            vttjs.VTTCue = cueShim, vttjs.VTTRegion = regionShim
        }, vttjs.restore = function() {
            vttjs.VTTCue = oldVTTCue, vttjs.VTTRegion = oldVTTRegion
        },
        function(e, t) {
            var n = "auto",
                r = {
                    "": !0,
                    lr: !0,
                    rl: !0
                },
                i = {
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                };

            function o(e) {
                return "string" == typeof e && (!!i[e.toLowerCase()] && e.toLowerCase())
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) e[r] = n[r]
                }
                return e
            }

            function a(e, t, i) {
                var a = this,
                    l = /MSIE\s8\.0/.test(navigator.userAgent),
                    u = {};
                l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
                var c = "",
                    d = !1,
                    p = e,
                    h = t,
                    f = i,
                    v = null,
                    m = "",
                    y = !0,
                    g = "auto",
                    b = "start",
                    A = 50,
                    w = "middle",
                    j = 50,
                    T = "middle";
                if (Object.defineProperty(a, "id", s({}, u, {
                        get: function() {
                            return c
                        },
                        set: function(e) {
                            c = "" + e
                        }
                    })), Object.defineProperty(a, "pauseOnExit", s({}, u, {
                        get: function() {
                            return d
                        },
                        set: function(e) {
                            d = !!e
                        }
                    })), Object.defineProperty(a, "startTime", s({}, u, {
                        get: function() {
                            return p
                        },
                        set: function(e) {
                            if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                            p = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "endTime", s({}, u, {
                        get: function() {
                            return h
                        },
                        set: function(e) {
                            if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                            h = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "text", s({}, u, {
                        get: function() {
                            return f
                        },
                        set: function(e) {
                            f = "" + e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "region", s({}, u, {
                        get: function() {
                            return v
                        },
                        set: function(e) {
                            v = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "vertical", s({}, u, {
                        get: function() {
                            return m
                        },
                        set: function(e) {
                            var t = function(e) {
                                return "string" == typeof e && !!r[e.toLowerCase()] && e.toLowerCase()
                            }(e);
                            if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                            m = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "snapToLines", s({}, u, {
                        get: function() {
                            return y
                        },
                        set: function(e) {
                            y = !!e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "line", s({}, u, {
                        get: function() {
                            return g
                        },
                        set: function(e) {
                            if ("number" != typeof e && e !== n) throw new SyntaxError("An invalid number or illegal string was specified.");
                            g = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "lineAlign", s({}, u, {
                        get: function() {
                            return b
                        },
                        set: function(e) {
                            var t = o(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            b = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "position", s({}, u, {
                        get: function() {
                            return A
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                            A = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "positionAlign", s({}, u, {
                        get: function() {
                            return w
                        },
                        set: function(e) {
                            var t = o(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            w = t, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "size", s({}, u, {
                        get: function() {
                            return j
                        },
                        set: function(e) {
                            if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                            j = e, this.hasBeenReset = !0
                        }
                    })), Object.defineProperty(a, "align", s({}, u, {
                        get: function() {
                            return T
                        },
                        set: function(e) {
                            var t = o(e);
                            if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                            T = t, this.hasBeenReset = !0
                        }
                    })), a.displayState = void 0, l) return a
            }
            a.prototype.getCueAsHTML = function() {
                return WebVTT.convertCueToDOMTree(window, this.text)
            }, e.VTTCue = e.VTTCue || a, t.VTTCue = a
        }(this, this.vttjs || {}),
        function(e, t) {
            var n = {
                "": !0,
                up: !0
            };

            function r(e) {
                return "number" == typeof e && e >= 0 && e <= 100
            }

            function i() {
                var e = 100,
                    t = 3,
                    i = 0,
                    o = 100,
                    s = 0,
                    a = 100,
                    l = "";
                Object.defineProperties(this, {
                    width: {
                        enumerable: !0,
                        get: function() {
                            return e
                        },
                        set: function(t) {
                            if (!r(t)) throw new Error("Width must be between 0 and 100.");
                            e = t
                        }
                    },
                    lines: {
                        enumerable: !0,
                        get: function() {
                            return t
                        },
                        set: function(e) {
                            if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
                            t = e
                        }
                    },
                    regionAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            if (!r(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
                            o = e
                        }
                    },
                    regionAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            if (!r(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
                            i = e
                        }
                    },
                    viewportAnchorY: {
                        enumerable: !0,
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            if (!r(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                            a = e
                        }
                    },
                    viewportAnchorX: {
                        enumerable: !0,
                        get: function() {
                            return s
                        },
                        set: function(e) {
                            if (!r(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                            s = e
                        }
                    },
                    scroll: {
                        enumerable: !0,
                        get: function() {
                            return l
                        },
                        set: function(e) {
                            var t = function(e) {
                                return "string" == typeof e && !!n[e.toLowerCase()] && e.toLowerCase()
                            }(e);
                            if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                            l = t
                        }
                    }
                })
            }
            e.VTTRegion = e.VTTRegion || i, t.VTTRegion = i
        }(this, this.vttjs || {}),
        function(e) {
            var t = Object.create || function() {
                function e() {}
                return function(t) {
                    if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
                    return e.prototype = t, new e
                }
            }();

            function n(e, t) {
                this.name = "ParsingError", this.code = e.code, this.message = t || e.message
            }

            function r(e) {
                function t(e, t, n, r) {
                    return 3600 * (0 | e) + 60 * (0 | t) + (0 | n) + (0 | r) / 1e3
                }
                var n = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                return n ? n[3] ? t(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? t(n[1], n[2], 0, n[4]) : t(0, n[1], n[2], n[4]) : null
            }

            function i() {
                this.values = t(null)
            }

            function o(e, t, n, r) {
                var i = r ? e.split(r) : [e];
                for (var o in i)
                    if ("string" == typeof i[o]) {
                        var s = i[o].split(n);
                        if (2 === s.length) t(s[0], s[1])
                    }
            }

            function s(e, t, s) {
                var a = e;

                function l() {
                    var t = r(e);
                    if (null === t) throw new n(n.Errors.BadTimeStamp, "Malformed timestamp: " + a);
                    return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
                }

                function u() {
                    e = e.replace(/^\s+/, "")
                }
                if (u(), t.startTime = l(), u(), "--\x3e" !== e.substr(0, 3)) throw new n(n.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + a);
                e = e.substr(3), u(), t.endTime = l(), u(),
                    function(e, t) {
                        var n = new i;
                        o(e, function(e, t) {
                            switch (e) {
                                case "region":
                                    for (var r = s.length - 1; r >= 0; r--)
                                        if (s[r].id === t) {
                                            n.set(e, s[r].region);
                                            break
                                        } break;
                                case "vertical":
                                    n.alt(e, t, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var i = t.split(","),
                                        o = i[0];
                                    n.integer(e, o), n.percent(e, o) && n.set("snapToLines", !1), n.alt(e, o, ["auto"]), 2 === i.length && n.alt("lineAlign", i[1], ["start", "middle", "end"]);
                                    break;
                                case "position":
                                    i = t.split(","), n.percent(e, i[0]), 2 === i.length && n.alt("positionAlign", i[1], ["start", "middle", "end"]);
                                    break;
                                case "size":
                                    n.percent(e, t);
                                    break;
                                case "align":
                                    n.alt(e, t, ["start", "middle", "end", "left", "right"])
                            }
                        }, /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", ""), t.line = n.get("line", "auto"), t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", "middle"), t.position = n.get("position", {
                            start: 0,
                            left: 0,
                            middle: 50,
                            end: 100,
                            right: 100
                        }, t.align), t.positionAlign = n.get("positionAlign", {
                            start: "start",
                            left: "start",
                            middle: "middle",
                            end: "end",
                            right: "end"
                        }, t.align)
                    }(e, t)
            }
            n.prototype = t(Error.prototype), n.prototype.constructor = n, n.Errors = {
                BadSignature: {
                    code: 0,
                    message: "Malformed WebVTT signature."
                },
                BadTimeStamp: {
                    code: 1,
                    message: "Malformed time stamp."
                }
            }, i.prototype = {
                set: function(e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                },
                get: function(e, t, n) {
                    return n ? this.has(e) ? this.values[e] : t[n] : this.has(e) ? this.values[e] : t
                },
                has: function(e) {
                    return e in this.values
                },
                alt: function(e, t, n) {
                    for (var r = 0; r < n.length; ++r)
                        if (t === n[r]) {
                            this.set(e, t);
                            break
                        }
                },
                integer: function(e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                },
                percent: function(e, t) {
                    return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
                }
            };
            var a = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&lrm;": "‎",
                    "&rlm;": "‏",
                    "&nbsp;": " "
                },
                l = {
                    c: "span",
                    i: "i",
                    b: "b",
                    u: "u",
                    ruby: "ruby",
                    rt: "rt",
                    v: "span",
                    lang: "span"
                },
                u = {
                    v: "title",
                    lang: "lang"
                },
                c = {
                    rt: "ruby"
                };

            function d(e, t) {
                function n() {
                    if (!t) return null;
                    var e, n = t.match(/^([^<]*)(<[^>]+>?)?/);
                    return e = n[1] ? n[1] : n[2], t = t.substr(e.length), e
                }

                function i(e) {
                    return a[e]
                }

                function o(e) {
                    for (; g = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(g[0], i);
                    return e
                }

                function s(e, t) {
                    return !c[t.localName] || c[t.localName] === e.localName
                }

                function d(t, n) {
                    var r = l[t];
                    if (!r) return null;
                    var i = e.document.createElement(r);
                    i.localName = r;
                    var o = u[t];
                    return o && n && (i[o] = n.trim()), i
                }
                for (var p, h = e.document.createElement("div"), f = h, v = []; null !== (p = n());)
                    if ("<" !== p[0]) f.appendChild(e.document.createTextNode(o(p)));
                    else {
                        if ("/" === p[1]) {
                            v.length && v[v.length - 1] === p.substr(2).replace(">", "") && (v.pop(), f = f.parentNode);
                            continue
                        }
                        var m, y = r(p.substr(1, p.length - 2));
                        if (y) {
                            m = e.document.createProcessingInstruction("timestamp", y), f.appendChild(m);
                            continue
                        }
                        var g = p.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                        if (!g) continue;
                        if (!(m = d(g[1], g[3]))) continue;
                        if (!s(f, m)) continue;
                        g[2] && (m.className = g[2].substr(1).replace(".", " ")), v.push(g[1]), f.appendChild(m), f = m
                    } return h
            }
            var p = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];

            function h() {}

            function f(e, t, n) {
                var r = /MSIE\s8\.0/.test(navigator.userAgent),
                    i = "rgba(255, 255, 255, 1)",
                    o = "rgba(0, 0, 0, 0.8)";
                r && (i = "rgb(255, 255, 255)", o = "rgb(0, 0, 0)"), h.call(this), this.cue = t, this.cueDiv = d(e, t.text);
                var s = {
                    color: i,
                    backgroundColor: o,
                    position: "relative",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: "inline"
                };
                r || (s.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl", s.unicodeBidi = "plaintext"), this.applyStyles(s, this.cueDiv), this.div = e.document.createElement("div"), s = {
                    textAlign: "middle" === t.align ? "center" : t.align,
                    font: n.font,
                    whiteSpace: "pre-line",
                    position: "absolute"
                }, r || (s.direction = function(e) {
                    var t, n = [],
                        r = "";
                    if (!e || !e.childNodes) return "ltr";

                    function i(e, t) {
                        for (var n = t.childNodes.length - 1; n >= 0; n--) e.push(t.childNodes[n])
                    }

                    function o(e) {
                        if (!e || !e.length) return null;
                        var t = e.pop(),
                            n = t.textContent || t.innerText;
                        if (n) {
                            var r = n.match(/^.*(\n|\r)/);
                            return r ? (e.length = 0, r[0]) : n
                        }
                        return "ruby" === t.tagName ? o(e) : t.childNodes ? (i(e, t), o(e)) : void 0
                    }
                    for (i(n, e); r = o(n);)
                        for (var s = 0; s < r.length; s++) {
                            t = r.charCodeAt(s);
                            for (var a = 0; a < p.length; a++)
                                if (p[a] === t) return "rtl"
                        }
                    return "ltr"
                }(this.cueDiv), s.writingMode = "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(s), this.div.appendChild(this.cueDiv);
                var a = 0;
                switch (t.positionAlign) {
                    case "start":
                        a = t.position;
                        break;
                    case "middle":
                        a = t.position - t.size / 2;
                        break;
                    case "end":
                        a = t.position - t.size
                }
                "" === t.vertical ? this.applyStyles({
                    left: this.formatStyle(a, "%"),
                    width: this.formatStyle(t.size, "%")
                }) : this.applyStyles({
                    top: this.formatStyle(a, "%"),
                    height: this.formatStyle(t.size, "%")
                }), this.move = function(e) {
                    this.applyStyles({
                        top: this.formatStyle(e.top, "px"),
                        bottom: this.formatStyle(e.bottom, "px"),
                        left: this.formatStyle(e.left, "px"),
                        right: this.formatStyle(e.right, "px"),
                        height: this.formatStyle(e.height, "px"),
                        width: this.formatStyle(e.width, "px")
                    })
                }
            }

            function v(e) {
                var t, n, r, i, o = /MSIE\s8\.0/.test(navigator.userAgent);
                if (e.div) {
                    n = e.div.offsetHeight, r = e.div.offsetWidth, i = e.div.offsetTop;
                    var s = (s = e.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
                    e = e.div.getBoundingClientRect(), t = s ? Math.max(s[0] && s[0].height || 0, e.height / s.length) : 0
                }
                this.left = e.left, this.right = e.right, this.top = e.top || i, this.height = e.height || n, this.bottom = e.bottom || i + (e.height || n), this.width = e.width || r, this.lineHeight = void 0 !== t ? t : e.lineHeight, o && !this.lineHeight && (this.lineHeight = 13)
            }

            function m(e, t, n, r) {
                var i = new v(t),
                    o = t.cue,
                    s = function(e) {
                        if ("number" == typeof e.line && (e.snapToLines || e.line >= 0 && e.line <= 100)) return e.line;
                        if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
                        for (var t = e.track, n = t.textTrackList, r = 0, i = 0; i < n.length && n[i] !== t; i++) "showing" === n[i].mode && r++;
                        return -1 * ++r
                    }(o),
                    a = [];
                if (o.snapToLines) {
                    var l;
                    switch (o.vertical) {
                        case "":
                            a = ["+y", "-y"], l = "height";
                            break;
                        case "rl":
                            a = ["+x", "-x"], l = "width";
                            break;
                        case "lr":
                            a = ["-x", "+x"], l = "width"
                    }
                    var u = i.lineHeight,
                        c = u * Math.round(s),
                        d = n[l] + u,
                        p = a[0];
                    Math.abs(c) > d && (c = c < 0 ? -1 : 1, c *= Math.ceil(d / u) * u), s < 0 && (c += "" === o.vertical ? n.height : n.width, a = a.reverse()), i.move(p, c)
                } else {
                    var h = i.lineHeight / n.height * 100;
                    switch (o.lineAlign) {
                        case "middle":
                            s -= h / 2;
                            break;
                        case "end":
                            s -= h
                    }
                    switch (o.vertical) {
                        case "":
                            t.applyStyles({
                                top: t.formatStyle(s, "%")
                            });
                            break;
                        case "rl":
                            t.applyStyles({
                                left: t.formatStyle(s, "%")
                            });
                            break;
                        case "lr":
                            t.applyStyles({
                                right: t.formatStyle(s, "%")
                            })
                    }
                    a = ["+y", "-x", "+x", "-y"], i = new v(t)
                }
                var f = function(e, t) {
                    for (var i, o = new v(e), s = 1, a = 0; a < t.length; a++) {
                        for (; e.overlapsOppositeAxis(n, t[a]) || e.within(n) && e.overlapsAny(r);) e.move(t[a]);
                        if (e.within(n)) return e;
                        var l = e.intersectPercentage(n);
                        s > l && (i = new v(e), s = l), e = new v(o)
                    }
                    return i || o
                }(i, a);
                t.move(f.toCSSCompatValues(n))
            }

            function y() {}
            h.prototype.applyStyles = function(e, t) {
                for (var n in t = t || this.div, e) e.hasOwnProperty(n) && (t.style[n] = e[n])
            }, h.prototype.formatStyle = function(e, t) {
                return 0 === e ? 0 : e + t
            }, f.prototype = t(h.prototype), f.prototype.constructor = f, v.prototype.move = function(e, t) {
                switch (t = void 0 !== t ? t : this.lineHeight, e) {
                    case "+x":
                        this.left += t, this.right += t;
                        break;
                    case "-x":
                        this.left -= t, this.right -= t;
                        break;
                    case "+y":
                        this.top += t, this.bottom += t;
                        break;
                    case "-y":
                        this.top -= t, this.bottom -= t
                }
            }, v.prototype.overlaps = function(e) {
                return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
            }, v.prototype.overlapsAny = function(e) {
                for (var t = 0; t < e.length; t++)
                    if (this.overlaps(e[t])) return !0;
                return !1
            }, v.prototype.within = function(e) {
                return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
            }, v.prototype.overlapsOppositeAxis = function(e, t) {
                switch (t) {
                    case "+x":
                        return this.left < e.left;
                    case "-x":
                        return this.right > e.right;
                    case "+y":
                        return this.top < e.top;
                    case "-y":
                        return this.bottom > e.bottom
                }
            }, v.prototype.intersectPercentage = function(e) {
                return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
            }, v.prototype.toCSSCompatValues = function(e) {
                return {
                    top: this.top - e.top,
                    bottom: e.bottom - this.bottom,
                    left: this.left - e.left,
                    right: e.right - this.right,
                    height: this.height,
                    width: this.width
                }
            }, v.getSimpleBoxPosition = function(e) {
                var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
                    n = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
                    r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
                return {
                    left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
                    right: e.right,
                    top: e.top || r,
                    height: e.height || t,
                    bottom: e.bottom || r + (e.height || t),
                    width: e.width || n
                }
            }, y.StringDecoder = function() {
                return {
                    decode: function(e) {
                        if (!e) return "";
                        if ("string" != typeof e) throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(e))
                    }
                }
            }, y.convertCueToDOMTree = function(e, t) {
                return e && t ? d(e, t) : null
            };
            y.processCues = function(e, t, n) {
                if (!e || !t || !n) return null;
                for (; n.firstChild;) n.removeChild(n.firstChild);
                var r = e.document.createElement("div");
                if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = "1.5%", n.appendChild(r), function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (e[t].hasBeenReset || !e[t].displayState) return !0;
                        return !1
                    }(t)) {
                    var i = [],
                        o = v.getSimpleBoxPosition(r),
                        s = {
                            font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
                        };
                    ! function() {
                        for (var n, a, l = 0; l < t.length; l++) a = t[l], n = new f(e, a, s), r.appendChild(n.div), m(0, n, o, i), a.displayState = n.div, i.push(v.getSimpleBoxPosition(n))
                    }()
                } else
                    for (var a = 0; a < t.length; a++) r.appendChild(t[a].displayState)
            }, y.Parser = function(e, t, n) {
                n || (n = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = n || new TextDecoder("utf8"), this.regionList = []
            }, y.Parser.prototype = {
                reportOrThrowError: function(e) {
                    if (!(e instanceof n)) throw e;
                    this.onparsingerror && this.onparsingerror(e)
                },
                parse: function(e) {
                    var t = this;

                    function r() {
                        for (var e = t.buffer, n = 0; n < e.length && "\r" !== e[n] && "\n" !== e[n];) ++n;
                        var r = e.substr(0, n);
                        return "\r" === e[n] && ++n, "\n" === e[n] && ++n, t.buffer = e.substr(n), r
                    }

                    function a(e) {
                        o(e, function(e, n) {
                            switch (e) {
                                case "Region":
                                    ! function(e) {
                                        var n = new i;
                                        if (o(e, function(e, t) {
                                                switch (e) {
                                                    case "id":
                                                        n.set(e, t);
                                                        break;
                                                    case "width":
                                                        n.percent(e, t);
                                                        break;
                                                    case "lines":
                                                        n.integer(e, t);
                                                        break;
                                                    case "regionanchor":
                                                    case "viewportanchor":
                                                        var r = t.split(",");
                                                        if (2 !== r.length) break;
                                                        var o = new i;
                                                        if (o.percent("x", r[0]), o.percent("y", r[1]), !o.has("x") || !o.has("y")) break;
                                                        n.set(e + "X", o.get("x")), n.set(e + "Y", o.get("y"));
                                                        break;
                                                    case "scroll":
                                                        n.alt(e, t, ["up"])
                                                }
                                            }, /=/, /\s/), n.has("id")) {
                                            var r = new(t.vttjs.VTTRegion || t.window.VTTRegion);
                                            r.width = n.get("width", 100), r.lines = n.get("lines", 3), r.regionAnchorX = n.get("regionanchorX", 0), r.regionAnchorY = n.get("regionanchorY", 100), r.viewportAnchorX = n.get("viewportanchorX", 0), r.viewportAnchorY = n.get("viewportanchorY", 100), r.scroll = n.get("scroll", ""), t.onregion && t.onregion(r), t.regionList.push({
                                                id: n.get("id"),
                                                region: r
                                            })
                                        }
                                    }(n)
                            }
                        }, /:/)
                    }
                    e && (t.buffer += t.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        var l;
                        if ("INITIAL" === t.state) {
                            if (!/\r\n|\n/.test(t.buffer)) return this;
                            var u = (l = r()).match(/^WEBVTT([ \t].*)?$/);
                            if (!u || !u[0]) throw new n(n.Errors.BadSignature);
                            t.state = "HEADER"
                        }
                        for (var c = !1; t.buffer;) {
                            if (!/\r\n|\n/.test(t.buffer)) return this;
                            switch (c ? c = !1 : l = r(), t.state) {
                                case "HEADER":
                                    /:/.test(l) ? a(l) : l || (t.state = "ID");
                                    continue;
                                case "NOTE":
                                    l || (t.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(l)) {
                                        t.state = "NOTE";
                                        break
                                    }
                                    if (!l) continue;
                                    if (t.cue = new(t.vttjs.VTTCue || t.window.VTTCue)(0, 0, ""), t.state = "CUE", -1 === l.indexOf("--\x3e")) {
                                        t.cue.id = l;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        s(l, t.cue, t.regionList)
                                    } catch (e) {
                                        t.reportOrThrowError(e), t.cue = null, t.state = "BADCUE";
                                        continue
                                    }
                                    t.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var d = -1 !== l.indexOf("--\x3e");
                                    if (!l || d && (c = !0)) {
                                        t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                                        continue
                                    }
                                    t.cue.text && (t.cue.text += "\n"), t.cue.text += l;
                                    continue;
                                case "BADCUE":
                                    l || (t.state = "ID");
                                    continue
                            }
                        }
                    } catch (e) {
                        t.reportOrThrowError(e), "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    try {
                        if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new n(n.Errors.BadSignature)
                    } catch (e) {
                        this.reportOrThrowError(e)
                    }
                    return this.onflush && this.onflush(), this
                }
            }, e.WebVTT = y
        }(this, this.vttjs)
}, function(e, t, n) {
    n(36), n(37), n(38)
}, function(e, t, n) {
    var r, i = n(3),
        o = n(1);
    videojs.plugin("mobile", function() {
        var e = this.el();
        "iOS" === i.os && o.addClass(e, "vjs-idevice"), i.isIPhone && (o.addClass(e, "vjs-iphone"), i.osMajorVersion <= 7 && o.addClass(e, "vjs-ios-old")), i.mobile && o.addClass(e, "no-volume-slider")
    }), r = void 0, 9 !== parseInt("09", 10) && (r = window.parseInt, window.parseInt = function(e) {
        return "string" != typeof e || /^(\s+)?0+(\s+)?$/.test(e) ? r(e) : r(e.replace(/^0+/, ""))
    })
}, function(e, t, n) {
    var r = n(0);
    videojs.plugin("multiple-clicks-fix", function() {
        var e = this;
        e.ready(function() {
            ! function e(t, n) {
                t.children().forEach(function(t) {
                    e(t, n), n(t)
                })
            }(e, function(e) {
                "function" == typeof e.onClick && function(e) {
                    var t = r.debounce(e.onClick, 500, !0);
                    ["tap", "click"].forEach(function(n) {
                        e.off(n, e.onClick), e.on(n, t)
                    })
                }(e)
            })
        })
    })
}, function(e, t) {
    videojs.Component.prototype.emitTapEvents = function() {
        var e = void 0,
            t = void 0,
            n = void 0,
            r = void 0,
            i = void 0,
            o = void 0;
        r = 0, t = null;
        this.on("touchstart", function(n) {
            1 === n.touches.length && (t = n.touches[0], r = (new Date).getTime(), e = !0)
        }), this.on("touchmove", function(r) {
            r.touches.length > 1 ? e = !1 : t && (i = r.touches[0].pageX - t.pageX, o = r.touches[0].pageY - t.pageY, ((n = Math.sqrt(i * i + o * o)) > 10 || 0 === n) && (e = !1))
        });
        var s = function() {
            e = !1
        };
        this.on("touchleave", s), this.on("touchcancel", s), this.on("touchend", function(n) {
            t = null, !0 === e && (new Date).getTime() - r < 100 && (n.preventDefault(), this.trigger("tap"))
        })
    }
}, function(e, t) {
    ! function(e) {
        var t, n = 0,
            r = e.MediaSource || e.WebKitMediaSource || {},
            i = e.URL || {},
            o = /video\/flv(;\s*codecs=["']vp6,aac["'])?$/;
        (t = function() {}).prototype.init = function() {
            this.listeners = []
        }, t.prototype.addEventListener = function(e, t) {
            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].unshift(t)
        }, t.prototype.removeEventListener = function(e, t) {
            for (var n = this.listeners[e], r = n.length; r--;)
                if (n[r] === t) return n.splice(r, 1)
        }, t.prototype.trigger = function(e) {
            for (var t = this.listeners[e.type] || [], n = t.length; n--;) t[n](e)
        }, videojs.MediaSource = function() {
            var e = this;
            videojs.MediaSource.prototype.init.call(this), this.sourceBuffers = [], this.readyState = "closed", this.listeners = {
                sourceopen: [function(t) {
                    e.swfObj = document.getElementById(t.swfId), e.readyState = "open", e.swfObj && e.swfObj.vjs_load()
                }],
                webkitsourceopen: [function() {
                    e.trigger({
                        type: "sourceopen"
                    })
                }]
            }
        }, videojs.MediaSource.prototype = new t, videojs.MediaSource.BYTES_PER_SECOND_GOAL = 4194304, videojs.MediaSource.TICKS_PER_SECOND = 60, videojs.MediaSource.prototype.addSourceBuffer = function(e) {
            var t;
            if (o.test(e)) t = new videojs.SourceBuffer(this);
            else {
                if (!this.nativeSource) throw new Error("NotSupportedError (Video.js)");
                t = this.nativeSource.addSourceBuffer.apply(this.nativeSource, arguments)
            }
            return this.sourceBuffers.push(t), t
        }, videojs.MediaSource.prototype.endOfStream = function() {
            this.swfObj.vjs_endOfStream(), this.readyState = "ended"
        }, videojs.mediaSources = {}, videojs.MediaSource.open = function(e, t) {
            var n = videojs.mediaSources[e];
            if (!n) throw new Error("Media Source not found (Video.js)");
            n.trigger({
                type: "sourceopen",
                swfId: t
            })
        }, videojs.SourceBuffer = function(t) {
            var n = this,
                r = [],
                i = 0,
                o = function(t) {
                    e.setTimeout(t, Math.ceil(1e3 / videojs.MediaSource.TICKS_PER_SECOND))
                },
                s = function t() {
                    var s, a, l, u, c, d = "";
                    if (r.length) {
                        for (c = document.hidden ? videojs.MediaSource.BYTES_PER_SECOND_GOAL : Math.ceil(videojs.MediaSource.BYTES_PER_SECOND_GOAL / videojs.MediaSource.TICKS_PER_SECOND), a = (u = new Uint8Array(Math.min(c, i))).byteLength; a;) s = r[0].subarray(0, a), u.set(s, u.byteLength - a), s.byteLength < r[0].byteLength ? r[0] = r[0].subarray(a) : r.shift(), a -= s.byteLength;
                        for (0 !== (i -= u.byteLength) ? o(t) : n.trigger({
                                type: "updateend"
                            }), a = 0, l = u.byteLength; a < l; a++) d += String.fromCharCode(u[a]);
                        var p = e.btoa(d);
                        n.source.swfObj.CallFunction('<invoke name="vjs_appendBuffer"returntype="javascript"><arguments><string>' + p + "</string></arguments></invoke>")
                    }
                };
            videojs.SourceBuffer.prototype.init.call(this), this.source = t, this.appendBuffer = function(e) {
                0 === r.length && o(s), this.trigger({
                    type: "update"
                }), r.push(e), i += e.byteLength
            }, this.abort = function() {
                r = [], i = 0, this.source.swfObj.vjs_abort()
            }
        }, videojs.SourceBuffer.prototype = new t, videojs.URL = {
            createObjectURL: function(e) {
                var t = "blob:vjs-media-source/" + n;
                return n++, videojs.mediaSources[t] = e, t
            }
        }, videojs.plugin("mediaSource", function() {
            var e = this;
            e.on("loadstart", function() {
                var t, n = e.currentSrc(),
                    o = function(e) {
                        t.trigger(e)
                    };
                "Html5" === e.techName && 0 === n.indexOf("blob:vjs-media-source/") && ((t = videojs.mediaSources[n]).nativeUrl || (t.nativeSource = new r, t.nativeSource.addEventListener("sourceopen", o, !1), t.nativeSource.addEventListener("webkitsourceopen", o, !1), t.nativeUrl = i.createObjectURL(t.nativeSource)), e.src(t.nativeUrl))
            })
        })
    }(window)
}, function(e, t, n) {
    var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    /*! videojs-contrib-hls - v0.17.1 - 2015-06-08
     * Copyright (c) 2015 Brightcove; Licensed  */
    ! function(e, t, n, r) {
        "use strict";
        var i, o, s, a, l, u;
        o = function(e) {
            return e.retries && e.retries >= 2
        }, t.Hls = t.Flash.extend({
            init: function(e, n, r) {
                var i = n.source,
                    o = e.options();
                e.hls = this, delete n.source, n.swf = o.flash.swf, t.Flash.call(this, e, n, r), n.source = i, this.bytesReceived = 0, this.currentTime = t.Hls.prototype.currentTime, this.setCurrentTime = t.Hls.prototype.setCurrentTime, this.segmentBuffer_ = [], this.startCheckingBuffer_(), t.Hls.prototype.src.call(this, n.source && n.source.src)
            }
        }), t.Hls.GOAL_BUFFER_LENGTH = 30, t.Hls.prototype.src = function(e) {
            var n, r, o, s = this,
                a = this.player(),
                l = a.options().hls || {};
            e && (this.src_ && this.resetSrc_(), this.src_ = e, n = new t.MediaSource, o = {
                src: t.URL.createObjectURL(n),
                type: "video/flv"
            }, this.mediaSource = n, this.segmentBuffer_ = [], this.segmentParser_ = new t.Hls.SegmentParser, this.setupMetadataCueTranslation_(), this.mediaSource.addEventListener("sourceopen", t.bind(this, this.handleSourceOpen)), this.playlists && this.playlists.dispose(), this.mediaIndex = 0, this.playlists = new t.Hls.PlaylistLoader(this.src_, l.withCredentials), this.playlists.on("loadedmetadata", t.bind(this, function() {
                var e, n, i, o, s, l;
                l = function() {
                    this.fillBuffer(), a.trigger("loadedmetadata")
                }, r = this.playlists.media(), void 0 === this.bandwidth && this.setBandwidth({
                    bandwidth: 5 * this.playlists.bandwidth
                }), e = this.selectPlaylist(), i = r.attributes && r.attributes.BANDWIDTH || 0, o = e.attributes && e.attributes.BANDWIDTH || 0, (s = (r.segments && r.segments[this.mediaIndex].duration || r.targetDuration) * o / this.bandwidth) || (s = 1 / 0), o > i && s <= 10 ? (this.playlists.media(e), n = t.bind(this, function() {
                    l.call(this), this.playlists.off("loadedplaylist", n)
                }), this.playlists.on("loadedplaylist", n)) : l.call(this)
            })), this.playlists.on("error", t.bind(this, function() {
                a.error(this.playlists.error)
            })), this.playlists.on("loadedplaylist", t.bind(this, function() {
                var e = this.playlists.media();
                e && (this.updateDuration(this.playlists.media()), this.mediaIndex = t.Hls.translateMediaIndex(this.mediaIndex, r, e), r = e, this.fetchKeys_())
            })), this.playlists.on("mediachange", t.bind(this, function() {
                i && this.cancelKeyXhr(), a.trigger("mediachange")
            })), this.player().ready(function() {
                s.el() && s.el().vjs_src(o.src)
            }))
        }, t.Hls.getMediaIndexForLive_ = function(e) {
            if (!e.segments) return 0;
            for (var t = e.segments.length, n = 0, r = 3 * (e.targetDuration || 10); n < r && t > 0;) n += e.segments[t - 1].duration, t--;
            return t
        }, t.Hls.prototype.handleSourceOpen = function() {
            var e = this.player(),
                t = this.mediaSource.addSourceBuffer('video/flv; codecs="vp6,aac"');
            this.sourceBuffer = t, e.options().autoplay && e.play(), t.appendBuffer(this.segmentParser_.getFlvHeader())
        }, t.Hls.prototype.setupMetadataCueTranslation_ = function() {
            var n, r = this,
                i = r.segmentParser_.metadataStream;
            r.player().addTextTrack && (i.on("data", function(o) {
                var s, a, l, u, c, d;
                if (!n)
                    for ((n = r.player().addTextTrack("metadata", "Timed Metadata")).inBandMetadataTrackDispatchType = t.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16).toUpperCase(), s = 0; s < i.descriptor.length; s++) d = ("00" + i.descriptor[s].toString(16).toUpperCase()).slice(-2), n.inBandMetadataTrackDispatchType += d;
                for (c = r.playlists.media(), r.playlists.expiredPreDiscontinuity_ + r.playlists.expiredPostDiscontinuity_, t.Hls.Playlist.duration(c, c.mediaSequence, c.mediaSequence + r.mediaIndex), s = 0; s < o.frames.length; s++) l = o.frames[s], u = r.segmentParser_.mediaTimelineOffset + .001 * (o.pts - r.segmentParser_.timestampOffset), (a = new e.VTTCue(u, u, l.value || l.url || "")).frame = l, n.addCue(a)
            }), r.on(r.player(), "seeking", function() {
                var e, i, o;
                if (n)
                    for (e = r.playlists.media(), i = r.playlists.expiredPreDiscontinuity_ + r.playlists.expiredPostDiscontinuity_, i += t.Hls.Playlist.duration(e, e.mediaSequence, e.mediaSequence + r.mediaIndex), o = n.cues.length; o--;) n.cues[o].startTime >= i && n.removeCue(n.cues[o])
            }))
        }, t.Hls.prototype.play = function() {
            var e;
            return this.ended() && (this.mediaIndex = 0), this.duration() === 1 / 0 && this.playlists.media() && !this.player().hasClass("vjs-has-started") && (e = this.playlists.media(), this.mediaIndex = t.Hls.getMediaIndexForLive_(e), this.setCurrentTime(t.Hls.Playlist.seekable(e).end(0))), t.Flash.prototype.play.apply(this, arguments)
        }, t.Hls.prototype.currentTime = function() {
            return this.lastSeekedTime_ ? this.lastSeekedTime_ : this.el() && this.el().vjs_getProperty ? this.el().vjs_getProperty("currentTime") : 0
        }, t.Hls.prototype.setCurrentTime = function(e) {
            return this.playlists && this.playlists.media() && this.playlists.media().segments ? (this.lastSeekedTime_ = e, this.mediaIndex = t.Hls.getMediaIndexByTime(this.playlists.media(), e), this.sourceBuffer.abort(), this.cancelSegmentXhr(), i && (i.aborted = !0, this.cancelKeyXhr()), this.segmentBuffer_ = [], void this.fillBuffer(1e3 * e)) : 0
        }, t.Hls.prototype.duration = function() {
            var e = this.playlists;
            return e ? t.Hls.Playlist.duration(e.media()) : 0
        }, t.Hls.prototype.seekable = function() {
            var e, n, r;
            return this.playlists && (r = this.playlists.media()) ? (e = t.Hls.Playlist.seekable(r), n = this.playlists.expiredPostDiscontinuity_ - this.playlists.expiredPreDiscontinuity_, t.createTimeRange(n, n + (e.end(0) - e.start(0)))) : t.createTimeRange()
        }, t.Hls.prototype.updateDuration = function(e) {
            var n = this.player();
            n.duration() !== t.Hls.Playlist.duration(e) && n.trigger("durationchange")
        }, t.Hls.prototype.resetSrc_ = function() {
            this.cancelSegmentXhr(), this.cancelKeyXhr(), this.sourceBuffer && this.sourceBuffer.abort()
        }, t.Hls.prototype.cancelKeyXhr = function() {
            i && (i.onreadystatechange = null, i.abort(), i = null)
        }, t.Hls.prototype.cancelSegmentXhr = function() {
            this.segmentXhr_ && (this.segmentXhr_.onreadystatechange = null, this.segmentXhr_.abort(), this.segmentXhr_ = null)
        }, t.Hls.prototype.dispose = function() {
            this.stopCheckingBuffer_(), this.playlists && this.playlists.dispose(), this.resetSrc_(), t.Flash.prototype.dispose.call(this)
        }, t.Hls.prototype.selectPlaylist = function() {
            var e, n, r, i, o, s = this.player(),
                a = this.playlists.master.playlists.slice(),
                l = [],
                u = a.length;
            for (a.sort(t.Hls.comparePlaylistBandwidth); u--;)(e = a[u]).attributes && e.attributes.BANDWIDTH && 1.1 * e.attributes.BANDWIDTH < s.hls.bandwidth && (l.push(e), r || (r = e));
            for (u = l.length, l.sort(t.Hls.comparePlaylistResolution), e = null; u--;)
                if (n = e, (e = l[u]).attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && e.attributes.RESOLUTION.height) {
                    if (e.attributes.RESOLUTION.width === s.width() && e.attributes.RESOLUTION.height === s.height()) {
                        i = null, o = e;
                        break
                    }
                    if (e.attributes.RESOLUTION.width < s.width() && e.attributes.RESOLUTION.height < s.height()) {
                        n && n.attributes && n.attributes.RESOLUTION && n.attributes.RESOLUTION.width && n.attributes.RESOLUTION.height && (i = n), o = e;
                        break
                    }
                } return i || o || r || a[0]
        }, t.Hls.prototype.checkBuffer_ = function() {
            this.checkBufferTimeout_ && (e.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null), this.fillBuffer(), this.drainBuffer(), this.checkBufferTimeout_ = e.setTimeout(t.bind(this, this.checkBuffer_), 500)
        }, t.Hls.prototype.startCheckingBuffer_ = function() {
            this.player().on("waiting", t.bind(this, this.drainBuffer)), this.checkBuffer_()
        }, t.Hls.prototype.stopCheckingBuffer_ = function() {
            e.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null, this.player().off("waiting", this.drainBuffer)
        }, t.Hls.prototype.fillBuffer = function(e) {
            var n, r, i = this.player(),
                o = i.buffered(),
                s = 0;
            (i.hasClass("vjs-has-started") || "none" !== i.options().preload) && i.currentSrc() && this.playlists && (this.segmentXhr_ || "HAVE_NOTHING" !== this.playlists.state && this.playlists.media() && this.playlists.media().segments && (this.playlists.media().endList || this.player().hasClass("vjs-has-started")) && "SWITCHING_MEDIA" !== this.playlists.state && (n = this.playlists.media().segments[this.mediaIndex]) && (o && (s = i.buffered().end(0) - i.currentTime()), "number" != typeof e && s >= t.Hls.GOAL_BUFFER_LENGTH || (r = this.playlistUriToUrl(n.uri), this.loadSegment(r, e))))
        }, t.Hls.prototype.playlistUriToUrl = function(e) {
            return this.playlists.media().uri === this.src_ ? s(this.src_, e) : s(s(this.src_, this.playlists.media().uri || ""), e)
        }, t.Hls.prototype.setBandwidth = function(e) {
            this.segmentXhrTime = e.roundTripTime, this.bandwidth = e.bandwidth, this.bytesReceived += e.bytesReceived || 0, this.trigger("bandwidthupdate")
        }, t.Hls.prototype.loadSegment = function(e, n) {
            var r = this,
                i = this.player(),
                o = i.options().hls || {};
            this.segmentXhr_ = t.Hls.xhr({
                url: e,
                responseType: "arraybuffer",
                withCredentials: o.withCredentials
            }, function(e, t) {
                var o;
                if (r.segmentXhr_ = null, e) return "timeout" === e ? (r.bandwidth = 1, r.playlists.media(r.selectPlaylist())) : (r.error = {
                    status: this.status,
                    message: "HLS segment request error at URL: " + t,
                    code: this.status >= 500 ? 4 : 2
                }, void r.mediaIndex++);
                this.response && (r.setBandwidth(this), (o = {
                    mediaIndex: r.mediaIndex,
                    playlist: r.playlists.media(),
                    offset: n,
                    bytes: null,
                    encryptedBytes: null,
                    decrypter: null
                }).playlist.segments[o.mediaIndex].key ? o.encryptedBytes = new Uint8Array(this.response) : o.bytes = new Uint8Array(this.response), r.segmentBuffer_.push(o), i.trigger("progress"), r.drainBuffer(), r.mediaIndex++, r.playlists.media(r.selectPlaylist()))
            })
        }, t.Hls.prototype.drainBuffer = function(e) {
            var n, r, i, s, a, l, u, c, d, p, h = 0,
                f = 0,
                v = this.segmentBuffer_;
            if (v.length && this.sourceBuffer && !this.sourceBuffer.updating) {
                if (r = (n = v[0]).mediaIndex, i = n.playlist, s = n.offset, l = n.bytes, (u = i.segments[r]).key && !l) return o(u.key) ? v.shift() : u.key.bytes ? n.decrypter ? void 0 : (d = u.key.iv || new Uint32Array([0, 0, 0, r + i.mediaSequence]), c = new t.Hls.Decrypter(n.encryptedBytes, u.key.bytes, d, function(e, t) {
                    n.bytes = t
                }), void(n.decrypter = c)) : this.fetchKeys_();
                for (e = e || {}, f = this.playlists.expiredPreDiscontinuity_, f += this.playlists.expiredPostDiscontinuity_, f += t.Hls.Playlist.duration(i, i.mediaSequence, i.mediaSequence + r), f *= 1e3, u.discontinuity ? (this.segmentParser_.mediaTimelineOffset = .001 * f, this.segmentParser_.timestampOffset = null) : null === this.segmentParser_.mediaTimelineOffset && (this.segmentParser_.mediaTimelineOffset = .001 * f), this.segmentParser_.parseSegmentBinaryData(l), this.segmentParser_.flushTags(), a = []; this.segmentParser_.tagsAvailable();) a.push(this.segmentParser_.getNextTag());
                if (a.length > 0 && (u.preciseDuration = .001 * t.Hls.FlvTag.durationFromTags(a)), this.updateDuration(this.playlists.media()), "number" == typeof s) {
                    for (p = s - f + a[0].pts; a[h].pts < p;) h++;
                    this.el().vjs_setProperty("currentTime", .001 * (a[h].pts - a[0].pts + f)), a = a.slice(h), this.lastSeekedTime_ = null
                }
                u.discontinuity && a.length && this.el().vjs_discontinuity(),
                    function() {
                        var e, t, n = 0;
                        for (h = 0; h < a.length; h++) n += a[h].bytes.byteLength;
                        for (t = new Uint8Array(n), h = 0, e = 0; h < a.length; h++) t.set(a[h].bytes, e), e += a[h].bytes.byteLength;
                        this.sourceBuffer.appendBuffer(t)
                    }.call(this), v.shift(), this.duration() !== 1 / 0 && r + 1 === i.segments.length && this.mediaSource.endOfStream()
            }
        }, t.Hls.prototype.fetchKeys_ = function() {
            var e, n, r, s, a, l;
            if (!i && this.segmentBuffer_.length)
                for (r = this, s = this.player().options().hls || {}, l = function(e) {
                        return function(t) {
                            if (i = null, t || !this.response || 16 !== this.response.byteLength) return e.retries = e.retries || 0, e.retries++, void(this.aborted || r.fetchKeys_());
                            a = new DataView(this.response), e.bytes = new Uint32Array([a.getUint32(0), a.getUint32(4), a.getUint32(8), a.getUint32(12)]), r.checkBuffer_()
                        }
                    }, e = 0; e < r.segmentBuffer_.length; e++)
                    if ((n = r.segmentBuffer_[e].playlist.segments[r.segmentBuffer_[e].mediaIndex].key) && !n.bytes && !o(n)) {
                        i = t.Hls.xhr({
                            url: this.playlistUriToUrl(n.uri),
                            responseType: "arraybuffer",
                            withCredentials: s.withCredentials
                        }, l(n));
                        break
                    }
        }, t.Hls.supportsNativeHls = (u = n.createElement("video"), !!t.Html5.isSupported() && (a = u.canPlayType("application/x-mpegURL"), l = u.canPlayType("application/vnd.apple.mpegURL"), /probably|maybe/.test(a) || /probably|maybe/.test(l))), t.Hls.isSupported = function() {
            return !t.Hls.supportsNativeHls && t.Flash.isSupported() && t.MediaSource && e.Uint8Array
        }, t.Hls.canPlaySource = function(e) {
            return /^application\/(?:x-|vnd\.apple\.)mpegurl/i.test(e.type)
        }, t.Hls.getPlaylistDuration = function(e, n, r) {
            return t.log.warn("videojs.Hls.getPlaylistDuration is deprecated. Use videojs.Hls.Playlist.duration instead"), t.Hls.Playlist.duration(e, n, r)
        }, t.Hls.getPlaylistTotalDuration = function(e) {
            return t.log.warn("videojs.Hls.getPlaylistTotalDuration is deprecated. Use videojs.Hls.Playlist.duration instead"), t.Hls.Playlist.duration(e)
        }, t.Hls.translateMediaIndex = function(e, n, r) {
            var i;
            return 0 === e ? 0 : r && r.segments ? (i = e + (n.mediaSequence - r.mediaSequence)) > r.segments.length || i < 0 ? t.Hls.getMediaIndexForLive_(r) + 1 : i : 0
        }, t.Hls.getMediaIndexByTime = function(e, t) {
            var n, r, i, o;
            for (i = [], n = 0; n < e.segments.length; n++)(o = {}).start = 0 === n ? 0 : i[n - 1].end, o.end = o.start + e.segments[n].duration, i.push(o);
            for (r = 0; r < i.length; r++)
                if (t >= i[r].start && t < i[r].end) return r;
            return -1
        }, t.Hls.prototype.getCurrentTimeByMediaIndex_ = function(e, t) {
            var n, r = 0;
            if (!e.segments || 0 === t) return 0;
            for (n = 0; n < t; n++) r += e.segments[n].duration;
            return r
        }, t.Hls.comparePlaylistBandwidth = function(t, n) {
            var r, i;
            return t.attributes && t.attributes.BANDWIDTH && (r = t.attributes.BANDWIDTH), r = r || e.Number.MAX_VALUE, n.attributes && n.attributes.BANDWIDTH && (i = n.attributes.BANDWIDTH), r - (i = i || e.Number.MAX_VALUE)
        }, t.Hls.comparePlaylistResolution = function(t, n) {
            var r, i;
            return t.attributes && t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (r = t.attributes.RESOLUTION.width), r = r || e.Number.MAX_VALUE, n.attributes && n.attributes.RESOLUTION && n.attributes.RESOLUTION.width && (i = n.attributes.RESOLUTION.width), r === (i = i || e.Number.MAX_VALUE) && t.attributes.BANDWIDTH && n.attributes.BANDWIDTH ? t.attributes.BANDWIDTH - n.attributes.BANDWIDTH : r - i
        }, s = t.Hls.resolveUrl = function(e, t) {
            var r, i, o = n.querySelector("base"),
                s = n.querySelector("head"),
                a = n.createElement("a"),
                l = o;
            return o ? r = o.href : l = s.appendChild(n.createElement("base")), l.href = e, a.href = t, i = a.href, o ? o.href = r : s.removeChild(l), i
        }
    }(window, window.videojs, document),
    function(e, t) {
        "use strict";
        var n = function() {
            this.init = function() {
                var e = {};
                this.on = function(t, n) {
                    e[t] || (e[t] = []), e[t].push(n)
                }, this.off = function(t, n) {
                    var r;
                    return !!e[t] && (r = e[t].indexOf(n), e[t].splice(r, 1), r > -1)
                }, this.trigger = function(t) {
                    var n, r, i, o;
                    if (n = e[t])
                        for (o = Array.prototype.slice.call(arguments, 1), i = n.length, r = 0; r < i; ++r) n[r].apply(this, o)
                }, this.dispose = function() {
                    e = {}
                }
            }
        };
        n.prototype.pipe = function(e) {
            this.on("data", function(t) {
                e.push(t)
            })
        }, e.Hls.Stream = n
    }(window.videojs),
    function(e) {
        "use strict";
        e.videojs = e.videojs || {}, e.videojs.Hls = e.videojs.Hls || {};
        var t = e.videojs.Hls;
        t.FlvTag = function(e, n) {
            var r, i = 0,
                o = function(e, t) {
                    var n, r = e.position + t;
                    r < e.bytes.byteLength || ((n = new Uint8Array(2 * r)).set(e.bytes.subarray(0, e.position), 0), e.bytes = n, e.view = new DataView(e.bytes.buffer))
                },
                s = t.FlvTag.widthBytes || new Uint8Array("width".length),
                a = t.FlvTag.heightBytes || new Uint8Array("height".length),
                l = t.FlvTag.videocodecidBytes || new Uint8Array("videocodecid".length);
            if (!t.FlvTag.widthBytes) {
                for (r = 0; r < "width".length; r++) s[r] = "width".charCodeAt(r);
                for (r = 0; r < "height".length; r++) a[r] = "height".charCodeAt(r);
                for (r = 0; r < "videocodecid".length; r++) l[r] = "videocodecid".charCodeAt(r);
                t.FlvTag.widthBytes = s, t.FlvTag.heightBytes = a, t.FlvTag.videocodecidBytes = l
            }
            switch (this.keyFrame = !1, e) {
                case t.FlvTag.VIDEO_TAG:
                    this.length = 16;
                    break;
                case t.FlvTag.AUDIO_TAG:
                    this.length = 13, this.keyFrame = !0;
                    break;
                case t.FlvTag.METADATA_TAG:
                    this.length = 29, this.keyFrame = !0;
                    break;
                default:
                    throw "Error Unknown TagType"
            }
            this.bytes = new Uint8Array(16384), this.view = new DataView(this.bytes.buffer), this.bytes[0] = e, this.position = this.length, this.keyFrame = n, this.pts = 0, this.dts = 0, this.writeBytes = function(e, t, n) {
                var r, i = t || 0;
                r = i + (n = n || e.byteLength), o(this, n), this.bytes.set(e.subarray(i, r), this.position), this.position += n, this.length = Math.max(this.length, this.position)
            }, this.writeByte = function(e) {
                o(this, 1), this.bytes[this.position] = e, this.position++, this.length = Math.max(this.length, this.position)
            }, this.writeShort = function(e) {
                o(this, 2), this.view.setUint16(this.position, e), this.position += 2, this.length = Math.max(this.length, this.position)
            }, this.negIndex = function(e) {
                return this.bytes[this.length - e]
            }, this.nalUnitSize = function() {
                return 0 === i ? 0 : this.length - (i + 4)
            }, this.startNalUnit = function() {
                if (i > 0) throw new Error("Attempted to create new NAL wihout closing the old one");
                i = this.length, this.length += 4, this.position = this.length
            }, this.endNalUnit = function(e) {
                var t, n;
                this.length === i + 4 ? this.length -= 4 : i > 0 && (t = i + 4, n = this.length - t, this.position = i, this.view.setUint32(this.position, n), this.position = this.length, e && e.push(this.bytes.subarray(t, t + n))), i = 0
            }, this.writeMetaDataDouble = function(e, t) {
                var n;
                if (o(this, 2 + e.length + 9), this.view.setUint16(this.position, e.length), this.position += 2, "width" === e) this.bytes.set(s, this.position), this.position += 5;
                else if ("height" === e) this.bytes.set(a, this.position), this.position += 6;
                else if ("videocodecid" === e) this.bytes.set(l, this.position), this.position += 12;
                else
                    for (n = 0; n < e.length; n++) this.bytes[this.position] = e.charCodeAt(n), this.position++;
                this.position++, this.view.setFloat64(this.position, t), this.position += 8, this.length = Math.max(this.length, this.position), ++i
            }, this.writeMetaDataBoolean = function(e, t) {
                var n;
                for (o(this, 2), this.view.setUint16(this.position, e.length), this.position += 2, n = 0; n < e.length; n++) console.assert(e.charCodeAt(n) < 255), o(this, 1), this.bytes[this.position] = e.charCodeAt(n), this.position++;
                o(this, 2), this.view.setUint8(this.position, 1), this.position++, this.view.setUint8(this.position, t ? 1 : 0), this.position++, this.length = Math.max(this.length, this.position), ++i
            }, this.finalize = function() {
                var e, r;
                switch (this.bytes[0]) {
                    case t.FlvTag.VIDEO_TAG:
                        this.bytes[11] = 7 | (this.keyFrame || n ? 16 : 32), this.bytes[12] = n ? 0 : 1, e = this.pts - this.dts, this.bytes[13] = (16711680 & e) >>> 16, this.bytes[14] = (65280 & e) >>> 8, this.bytes[15] = (255 & e) >>> 0;
                        break;
                    case t.FlvTag.AUDIO_TAG:
                        this.bytes[11] = 175, this.bytes[12] = n ? 0 : 1;
                        break;
                    case t.FlvTag.METADATA_TAG:
                        this.position = 11, this.view.setUint8(this.position, 2), this.position++, this.view.setUint16(this.position, 10), this.position += 2, this.bytes.set([111, 110, 77, 101, 116, 97, 68, 97, 116, 97], this.position), this.position += 10, this.bytes[this.position] = 8, this.position++, this.view.setUint32(this.position, i), this.position = this.length, this.bytes.set([0, 0, 9], this.position), this.position += 3, this.length = this.position
                }
                return r = this.length - 11, this.bytes[1] = (16711680 & r) >>> 16, this.bytes[2] = (65280 & r) >>> 8, this.bytes[3] = (255 & r) >>> 0, this.bytes[4] = (16711680 & this.dts) >>> 16, this.bytes[5] = (65280 & this.dts) >>> 8, this.bytes[6] = (255 & this.dts) >>> 0, this.bytes[7] = (4278190080 & this.dts) >>> 24, this.bytes[8] = 0, this.bytes[9] = 0, this.bytes[10] = 0, o(this, 4), this.view.setUint32(this.length, this.length), this.length += 4, this.position += 4, this.bytes = this.bytes.subarray(0, this.length), this.frameTime = t.FlvTag.frameTime(this.bytes), console.assert(this.bytes.byteLength === this.length), this
            }
        }, t.FlvTag.AUDIO_TAG = 8, t.FlvTag.VIDEO_TAG = 9, t.FlvTag.METADATA_TAG = 18, t.FlvTag.isAudioFrame = function(e) {
            return t.FlvTag.AUDIO_TAG === e[0]
        }, t.FlvTag.isVideoFrame = function(e) {
            return t.FlvTag.VIDEO_TAG === e[0]
        }, t.FlvTag.isMetaData = function(e) {
            return t.FlvTag.METADATA_TAG === e[0]
        }, t.FlvTag.isKeyFrame = function(e) {
            return t.FlvTag.isVideoFrame(e) ? 23 === e[11] : !!t.FlvTag.isAudioFrame(e) || !!t.FlvTag.isMetaData(e)
        }, t.FlvTag.frameTime = function(e) {
            var t = e[4] << 16;
            return t |= e[5] << 8, t |= e[6] << 0, t |= e[7] << 24
        }, t.FlvTag.durationFromTags = function(e) {
            if (e.length < 2) return 0;
            var t, n = e[0],
                r = e[e.length - 1];
            return t = r.pts - e[e.length - 2].pts || 1 / 24, r.pts - n.pts + t
        }
    }(window),
    function(e) {
        "use strict";
        e.videojs.Hls.ExpGolomb = function(e) {
            var t = e.byteLength,
                n = 0,
                r = 0;
            this.length = function() {
                return 8 * t
            }, this.bitsAvailable = function() {
                return 8 * t + r
            }, this.loadWord = function() {
                var i = e.byteLength - t,
                    o = new Uint8Array(4),
                    s = Math.min(4, t);
                if (0 === s) throw new Error("no bytes available");
                o.set(e.subarray(i, i + s)), n = new DataView(o.buffer).getUint32(0), r = 8 * s, t -= s
            }, this.skipBits = function(e) {
                var i;
                r > e ? (n <<= e, r -= e) : (e -= r, e -= 8 * (i = e / 8), t -= i, this.loadWord(), n <<= e, r -= e)
            }, this.readBits = function(e) {
                var i = Math.min(r, e),
                    o = n >>> 32 - i;
                return console.assert(e < 32, "Cannot read more than 32 bits at a time"), (r -= i) > 0 ? n <<= i : t > 0 && this.loadWord(), (i = e - i) > 0 ? o << i | this.readBits(i) : o
            }, this.skipLeadingZeros = function() {
                var e;
                for (e = 0; e < r; ++e)
                    if (0 != (n & 2147483648 >>> e)) return n <<= e, r -= e, e;
                return this.loadWord(), e + this.skipLeadingZeros()
            }, this.skipUnsignedExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.skipExpGolomb = function() {
                this.skipBits(1 + this.skipLeadingZeros())
            }, this.readUnsignedExpGolomb = function() {
                var e = this.skipLeadingZeros();
                return this.readBits(e + 1) - 1
            }, this.readExpGolomb = function() {
                var e = this.readUnsignedExpGolomb();
                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
            }, this.readBoolean = function() {
                return 1 === this.readBits(1)
            }, this.readUnsignedByte = function() {
                return this.readBits(8)
            }, this.loadWord()
        }
    }(window),
    function(e) {
        "use strict";
        var t, n = e.videojs.Hls.ExpGolomb,
            r = e.videojs.Hls.FlvTag;
        e.videojs.Hls.H264ExtraData = t = function() {
            this.sps = [], this.pps = []
        }, t.prototype.extraDataExists = function() {
            return this.sps.length > 0
        }, t.prototype.scaling_list = function(e, t) {
            var n, r = 8,
                i = 8;
            for (n = 0; n < e; ++n) 0 !== i && (i = (r + t.readExpGolomb() + 256) % 256), r = 0 === i ? r : i
        }, t.prototype.getSps0Rbsp = function() {
            for (var e = this.sps[0], t = 1, n = 1, r = 0, i = e.byteLength - 2, o = new Uint8Array(e.byteLength); t < i;) 0 === e[t] && 0 === e[t + 1] && 3 === e[t + 2] && (o.set(e.subarray(n, t + 1), r), r += t + 1 - n, n = t + 3), t++;
            return o.set(e.subarray(n), r), o.subarray(0, r + (e.byteLength - n))
        }, t.prototype.metaDataTag = function(e) {
            var t, i, o, s, a, l, u, c, d, p, h, f, v = new r(r.METADATA_TAG),
                m = 0,
                y = 0,
                g = 0,
                b = 0;
            if (v.dts = e, v.pts = e, i = (t = new n(this.getSps0Rbsp())).readUnsignedByte(), t.skipBits(16), t.skipUnsignedExpGolomb(), (100 === i || 110 === i || 122 === i || 244 === i || 44 === i || 83 === i || 86 === i || 118 === i || 128 === i) && (3 === (o = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean()))
                for (s = 3 !== o ? 8 : 12, a = 0; a < s; ++a) t.readBoolean() && (a < 6 ? this.scaling_list(16, t) : this.scaling_list(64, t));
            if (t.skipUnsignedExpGolomb(), 0 === (l = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb();
            else if (1 === l)
                for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), u = t.readUnsignedExpGolomb(), a = 0; a < u; ++a) t.skipExpGolomb();
            return t.skipUnsignedExpGolomb(), t.skipBits(1), c = t.readUnsignedExpGolomb(), d = t.readUnsignedExpGolomb(), 0 === (p = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (m = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), b = t.readUnsignedExpGolomb()), h = 16 * (c + 1) - 2 * m - 2 * y, f = (2 - p) * (d + 1) * 16 - 2 * g - 2 * b, v.writeMetaDataDouble("videocodecid", 7), v.writeMetaDataDouble("width", h), v.writeMetaDataDouble("height", f), v
        }, t.prototype.extraDataTag = function(e) {
            var t, n = new r(r.VIDEO_TAG, !0);
            for (n.dts = e, n.pts = e, n.writeByte(1), n.writeByte(this.sps[0][1]), n.writeByte(this.sps[0][2]), n.writeByte(this.sps[0][3]), n.writeByte(255), n.writeByte(225), n.writeShort(this.sps[0].length), n.writeBytes(this.sps[0]), n.writeByte(this.pps.length), t = 0; t < this.pps.length; ++t) n.writeShort(this.pps[t].length), n.writeBytes(this.pps[t]);
            return n
        }
    }(window),
    function(e) {
        "use strict";
        var t, n, r = e.videojs.Hls.FlvTag,
            i = e.videojs.Hls.H264ExtraData;
        e.videojs.Hls.NALUnitType = n = {
            unspecified: 0,
            slice_layer_without_partitioning_rbsp_non_idr: 1,
            slice_data_partition_a_layer_rbsp: 2,
            slice_data_partition_b_layer_rbsp: 3,
            slice_data_partition_c_layer_rbsp: 4,
            slice_layer_without_partitioning_rbsp_idr: 5,
            sei_rbsp: 6,
            seq_parameter_set_rbsp: 7,
            pic_parameter_set_rbsp: 8,
            access_unit_delimiter_rbsp: 9,
            end_of_seq_rbsp: 10,
            end_of_stream_rbsp: 11
        }, e.videojs.Hls.H264Stream = t = function() {
            this._next_pts = 0, this._next_dts = 0, this._h264Frame = null, this._oldExtraData = new i, this._newExtraData = new i, this._nalUnitType = -1, this._state = 0, this.tags = []
        }, t.prototype.setTimeStampOffset = function() {}, t.prototype.setNextTimeStamp = function(e, t, n) {
            this._next_pts = e, this._next_dts = t, n && this.finishFrame()
        }, t.prototype.finishFrame = function() {
            this._h264Frame && (this._newExtraData.extraDataExists() && (this._oldExtraData = this._newExtraData, this._newExtraData = new i), this._oldExtraData.extraDataExists() && (this._h264Frame.keyFrame || 0 === this.tags.length) && (this.tags.push(this._oldExtraData.metaDataTag(this._h264Frame.pts)), this.tags.push(this._oldExtraData.extraDataTag(this._h264Frame.pts))), this._h264Frame.endNalUnit(), this.tags.push(this._h264Frame)), this._h264Frame = null, this._nalUnitType = -1, this._state = 0
        }, t.prototype.writeBytes = function(e, t, i) {
            var o, s, a, l;
            if (t = t || 0, !((i = i || 0) <= 0)) switch (this._state) {
                default:
                case 0:
                    this._state = 1;
                case 1:
                    if (e[t] <= 1 && (o = this._h264Frame ? this._h264Frame.nalUnitSize() : 0) >= 1 && 0 === this._h264Frame.negIndex(1)) {
                        if (1 === e[t] && o >= 2 && 0 === this._h264Frame.negIndex(2)) return 3 <= o && 0 === this._h264Frame.negIndex(3) ? this._h264Frame.length -= 3 : this._h264Frame.length -= 2, this._state = 3, this.writeBytes(e, t + 1, i - 1);
                        if (i > 1 && 0 === e[t] && 1 === e[t + 1]) return o >= 2 && 0 === this._h264Frame.negIndex(2) ? this._h264Frame.length -= 2 : this._h264Frame.length -= 1, this._state = 3, this.writeBytes(e, t + 2, i - 2);
                        if (i > 2 && 0 === e[t] && 0 === e[t + 1] && 1 === e[t + 2]) return this._state = 3, this.writeBytes(e, t + 3, i - 3)
                    }
                    this._state = 2;
                case 2:
                    for (l = (a = (s = t) + i) - 3; t < l;)
                        if (e[t + 2] > 1) t += 3;
                        else if (0 !== e[t + 1]) t += 2;
                    else if (0 !== e[t]) t += 1;
                    else {
                        if (1 === e[t + 2]) return t > s && this._h264Frame.writeBytes(e, s, t - s), this._state = 3, t += 3, this.writeBytes(e, t, a - t);
                        if (a - t >= 4 && 0 === e[t + 2] && 1 === e[t + 3]) return t > s && this._h264Frame.writeBytes(e, s, t - s), this._state = 3, t += 4, this.writeBytes(e, t, a - t);
                        t += 3
                    }
                    return this._state = 1, void(this._h264Frame && this._h264Frame.writeBytes(e, s, i));
                case 3:
                    if (this._h264Frame) switch (this._nalUnitType) {
                        case n.seq_parameter_set_rbsp:
                            this._h264Frame.endNalUnit(this._newExtraData.sps);
                            break;
                        case n.pic_parameter_set_rbsp:
                            this._h264Frame.endNalUnit(this._newExtraData.pps);
                            break;
                        case n.slice_layer_without_partitioning_rbsp_idr:
                        default:
                            this._h264Frame.endNalUnit()
                    }
                    return this._nalUnitType = 31 & e[t], this._h264Frame && (this._nalUnitType === n.access_unit_delimiter_rbsp ? this.finishFrame() : this._nalUnitType === n.slice_layer_without_partitioning_rbsp_idr && (this._h264Frame.keyFrame = !0)), this._h264Frame || (this._h264Frame = new r(r.VIDEO_TAG), this._h264Frame.pts = this._next_pts, this._h264Frame.dts = this._next_dts), this._h264Frame.startNalUnit(), this._state = 2, this.writeBytes(e, t, i)
            }
        }
    }(window),
    function(e) {
        "use strict";
        var t = e.videojs.Hls.FlvTag,
            n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3];
        e.videojs.Hls.AacStream = function() {
            var e, r, i, o, s, a, l, u, c, d, p, h, f;
            this.tags = [], this.setTimeStampOffset = function(e) {
                o = e - 1e3
            }, this.setNextTimeStamp = function(t, n, o) {
                e = t, i = n, o && (r = 0)
            }, this.writeBytes = function(v, m, y) {
                var g, b, A;
                for (i -= y = i < (y = y || 0) ? i : y, g = (m = m || 0) + y; m < g;) switch (r) {
                    default:
                        r = 0;
                        break;
                    case 0:
                        if (m >= g) return;
                        if (255 !== v[m]) return console.assert(!1, "Error no ATDS header found"), m += 1, void(r = 0);
                        m += 1, r = 1;
                        break;
                    case 1:
                        if (m >= g) return;
                        if (240 != (240 & v[m])) return console.assert(!1, "Error no ATDS header found"), m += 1, void(r = 0);
                        s = !!(1 & v[m]), m += 1, r = 2;
                        break;
                    case 2:
                        if (m >= g) return;
                        a = 1 + ((192 & v[m]) >>> 6), l = (60 & v[m]) >>> 2, u = (1 & v[m]) << 2, m += 1, r = 3;
                        break;
                    case 3:
                        if (m >= g) return;
                        u |= (192 & v[m]) >>> 6, c = (3 & v[m]) << 11, m += 1, r = 4;
                        break;
                    case 4:
                        if (m >= g) return;
                        c |= v[m] << 3, m += 1, r = 5;
                        break;
                    case 5:
                        if (m >= g) return;
                        c |= (224 & v[m]) >>> 5, c -= s ? 7 : 9, m += 1, r = 6;
                        break;
                    case 6:
                        if (m >= g) return;
                        d = 1024 * (1 + (3 & v[m])), p = 1e3 * d / n[l], ((b = a << 11 | l << 7 | u << 3) !== f || e - o >= 1e3) && ((h = new t(t.METADATA_TAG)).pts = e, h.dts = e, h.writeMetaDataDouble("audiocodecid", 10), h.writeMetaDataBoolean("stereo", 2 === u), h.writeMetaDataDouble("audiosamplerate", n[l]), h.writeMetaDataDouble("audiosamplesize", 16), this.tags.push(h), f = b, (h = new t(t.AUDIO_TAG, !0)).pts = e, h.dts = h.pts, h.view.setUint16(h.position, b), h.position += 2, h.length = Math.max(h.length, h.position), this.tags.push(h), o = e), m += 1, r = 7;
                        break;
                    case 7:
                        if (!s) {
                            if (2 > g - m) return;
                            m += 2
                        }(h = new t(t.AUDIO_TAG)).pts = e, h.dts = e, r = 8;
                        break;
                    case 8:
                        for (; c;) {
                            if (m >= g) return;
                            A = g - m < c ? g - m : c, h.writeBytes(v, m, A), m += A, c -= A
                        }
                        this.tags.push(h), r = 0, e += p
                }
            }
        }
    }(window),
    function(e, t, n) {
        "use strict";
        var r, i = function(e, t, n) {
                var r, i = "";
                for (r = t; r < n; r++) i += "%" + ("00" + e[r].toString(16)).slice(-2);
                return i
            },
            o = function(t, n, r) {
                return e.decodeURIComponent(i(t, n, r))
            },
            s = {
                TXXX: function(e) {
                    var t;
                    if (3 === e.data[0])
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = o(e.data, 1, t), e.value = o(e.data, t + 1, e.data.length - 1);
                                break
                            }
                },
                WXXX: function(e) {
                    var t;
                    if (3 === e.data[0])
                        for (t = 1; t < e.data.length; t++)
                            if (0 === e.data[t]) {
                                e.description = o(e.data, 1, t), e.url = o(e.data, t + 1, e.data.length);
                                break
                            }
                },
                PRIV: function(t) {
                    var n, r, o, s;
                    for (n = 0; n < t.data.length; n++)
                        if (0 === t.data[n]) {
                            t.owner = (r = t.data, o = 0, s = n, e.unescape(i(r, o, s)));
                            break
                        } t.privateData = t.data.subarray(n + 1)
                }
            };
        (r = function(e) {
            var n, i = {
                    debug: !(!e || !e.debug),
                    descriptor: e && e.descriptor
                },
                o = 0,
                a = [],
                l = 0;
            if (r.prototype.init.call(this), this.dispatchType = t.Hls.SegmentParser.STREAM_TYPES.metadata.toString(16), i.descriptor)
                for (n = 0; n < i.descriptor.length; n++) this.dispatchType += ("00" + i.descriptor[n].toString(16)).slice(-2);
            this.push = function(e) {
                var n, r, u, c, d;
                if (0 === a.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) i.debug && t.log("Skipping unrecognized metadata packet");
                else if (a.push(e), l += e.data.byteLength, 1 === a.length && (o = e.data[6] << 21 | e.data[7] << 14 | e.data[8] << 7 | e.data[9], o += 10), !(l < o)) {
                    for (n = {
                            data: new Uint8Array(o),
                            frames: [],
                            pts: a[0].pts,
                            dts: a[0].dts
                        }, d = 0; d < o;) n.data.set(a[0].data, d), d += a[0].data.byteLength, l -= a[0].data.byteLength, a.shift();
                    r = 10, 64 & n.data[5] && (r += 4, r += n.data[10] << 24 | n.data[11] << 16 | n.data[12] << 8 | n.data[13], o -= n.data[16] << 24 | n.data[17] << 16 | n.data[18] << 8 | n.data[19]);
                    do {
                        if ((u = n.data[r + 4] << 24 | n.data[r + 5] << 16 | n.data[r + 6] << 8 | n.data[r + 7]) < 1) return t.log("Malformed ID3 frame encountered. Skipping metadata parsing.");
                        c = {
                            id: String.fromCharCode(n.data[r], n.data[r + 1], n.data[r + 2], n.data[r + 3]),
                            data: n.data.subarray(r + 10, r + u + 10)
                        }, s[c.id] && s[c.id](c), n.frames.push(c), r += 10, r += u
                    } while (r < o);
                    this.trigger("data", n)
                }
            }
        }).prototype = new t.Hls.Stream, t.Hls.MetadataStream = r
    }(window, window.videojs),
    function(e) {
        "use strict";
        var t, n, r = e.videojs,
            i = r.Hls.FlvTag,
            o = r.Hls.H264Stream,
            s = r.Hls.AacStream,
            a = r.Hls.MetadataStream;
        r.Hls.SegmentParser = function() {
            var e, l = this,
                u = new Uint8Array(t),
                c = 0,
                d = new o,
                p = new s;
            l.stream = {
                programMapTable: {}
            }, l.metadataStream = new a, this.mediaTimelineOffset = null, l.timestampOffset = null, l.getFlvHeader = function(e, t, n) {
                var r, o, s, a = new Uint8Array(9),
                    l = new DataView(a.buffer);
                return e = e || 0, t = void 0 === t || t, n = void 0 === n || n, l.setUint8(0, 70), l.setUint8(1, 76), l.setUint8(2, 86), l.setUint8(3, 1), l.setUint8(4, (t ? 4 : 0) | (n ? 1 : 0)), l.setUint32(5, a.byteLength), e <= 0 ? ((o = new Uint8Array(a.byteLength + 4)).set(a), o.set([0, 0, 0, 0], a.byteLength), o) : ((r = new i(i.METADATA_TAG)).pts = r.dts = 0, r.writeMetaDataDouble("duration", e), s = r.finalize().length, (o = new Uint8Array(a.byteLength + s)).set(a), o.set(l.byteLength, s), o)
            }, l.flushTags = function() {
                d.finishFrame()
            }, l.tagsAvailable = function() {
                return d.tags.length + p.tags.length
            }, l.getNextTag = function() {
                return (d.tags.length ? p.tags.length && p.tags[0].dts < d.tags[0].dts ? p.tags.shift() : d.tags.shift() : p.tags.shift()).finalize()
            }, l.parseSegmentBinaryData = function(n) {
                var i, o = 0;
                if (c > 0) {
                    if (n.byteLength + c < t) return r.log("data.length + streamBuffer.length < MP2T_PACKET_LENGTH ??"), void u.readBytes(n, n.length, u.length);
                    i = n.subarray(0, t - c), u.set(i, c), e(u), u = new Uint8Array(t), c = 0
                }
                for (;;) {
                    for (; o < n.byteLength && 71 !== n[o];) o++;
                    if (n.byteLength - o < t) return void(n.byteLength - o > 0 && (u.set(n.subarray(o), c), c += n.byteLength - o));
                    e(n.subarray(o, o + t)) ? o += t : (r.log("error parsing m2ts packet, attempting to re-align"), o++)
                }
            }, e = function(e) {
                var i, o, s, a, u, c, h, f, v, m, y, g, b, A, w, j, T = 0,
                    E = T + t,
                    _ = !!(64 & e[T + 1]),
                    C = (31 & e[T + 1]) << 8 | e[T + 2],
                    S = (48 & e[T + 3]) >>> 4;
                if (T += 4, S > 1 && (T += e[T] + 1), 0 === C) {
                    if (_ && (T += 1 + e[T]), 0 !== (i = e[T]) && r.log("the table_id of the PAT should be 0x00 but was" + i.toString(16)), !!(1 & e[T + 5]))
                        for (o = (15 & e[T + 1]) << 8 | e[T + 2], u = (T += 8) + (o - 5 - 4); T < u; T += 4)
                            if (s = e[T] << 8 | e[T + 1], a = (31 & e[T + 2]) << 8 | e[T + 3], 0 === s) l.stream.networkPid = a;
                            else if (void 0 === l.stream.pmtPid) l.stream.pmtPid = a;
                    else if (l.stream.pmtPid !== a) throw new Error("TS has more that 1 program")
                } else if (C === l.stream.programMapTable[n.h264] || C === l.stream.programMapTable[n.adts] || C === l.stream.programMapTable[n.metadata]) {
                    if (_) {
                        if (0 !== e[T + 0] || 0 !== e[T + 1] || 1 !== e[T + 2]) throw new Error("PES did not begin with start code");
                        c = e[T + 4] << 8 | e[T + 5], h = 0 != (4 & e[T + 6]), f = e[T + 7], v = e[T + 8], T += 9, 192 & f && (m = (14 & e[T + 0]) << 28 | (255 & e[T + 1]) << 21 | (254 & e[T + 2]) << 13 | (255 & e[T + 3]) << 6 | (254 & e[T + 4]) >>> 2, y = m /= 45, 64 & f && (y = (14 & e[T + 5]) << 28 | (255 & e[T + 6]) << 21 | (254 & e[T + 7]) << 13 | (255 & e[T + 8]) << 6 | (254 & e[T + 9]) >>> 2, y /= 45)), T += v, null === l.timestampOffset && (l.timestampOffset = m), C === l.stream.programMapTable[n.h264] ? d.setNextTimeStamp(m, y, h) : C === l.stream.programMapTable[n.adts] && p.setNextTimeStamp(m, c, h)
                    }
                    C === l.stream.programMapTable[n.adts] ? p.writeBytes(e, T, E - T) : C === l.stream.programMapTable[n.h264] ? d.writeBytes(e, T, E - T) : C === l.stream.programMapTable[n.metadata] && l.metadataStream.push({
                        pts: m,
                        dts: y,
                        data: e.subarray(T)
                    })
                } else if (l.stream.pmtPid === C) {
                    if (_ && (T += 1 + e[T]), 2 !== e[T] && r.log("The table_id of a PMT should be 0x02 but was " + e[T].toString(16)), !!(1 & e[T + 5]))
                        for (l.stream.programMapTable = {}, b = (15 & e[T + 1]) << 8 | e[T + 2], b -= g = (15 & e[T + 10]) << 8 | e[T + 11], b -= 13, l.stream.programMapTable.pcrPid = (31 & e[T + 8]) << 8 | e[T + 9], T += 12 + g; 0 < b;) {
                            if (A = e[T + 0], w = (31 & e[T + 1]) << 8 | e[T + 2], A === n.h264 && l.stream.programMapTable[A] && l.stream.programMapTable[A] !== w) throw new Error("Program has more than 1 video stream");
                            if (A === n.adts && l.stream.programMapTable[A] && l.stream.programMapTable[A] !== w) throw new Error("Program has more than 1 audio Stream");
                            l.stream.programMapTable[A] = w, j = (15 & e[T + 3]) << 8 | e[T + 4], A === n.metadata && (l.metadataStream.descriptor = new Uint8Array(e.subarray(T + 5, T + 5 + j))), T += 5 + j, b -= 5 + j
                        }
                } else l.stream.networkPid === C || 17 === C || 8191 === C || l.stream.programMapTable.pcrPid || r.log("Unknown PID parsing TS packet: " + C);
                return !0
            }, l.getTags = function() {
                return d.tags
            }, l.stats = {
                h264Tags: function() {
                    return d.tags.length
                },
                aacTags: function() {
                    return p.tags.length
                }
            }
        }, r.Hls.SegmentParser.MP2T_PACKET_LENGTH = t = 188, r.Hls.SegmentParser.STREAM_TYPES = n = {
            h264: 27,
            adts: 15,
            metadata: 21
        }
    }(window),
    function(e, t, n, r, i) {
        "use strict";
        var o, s, a, l = new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'),
            u = function(e) {
                for (var t, n = e.split(l), r = n.length, i = {}; r--;) "" !== n[r] && ((t = /([^=]*)=(.*)/.exec(n[r]).slice(1))[0] = t[0].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^\s+|\s+$/g, ""), t[1] = t[1].replace(/^['"](.*)['"]$/g, "$1"), i[t[0]] = t[1]);
                return i
            },
            c = e.Hls.Stream;
        (o = function() {
            var e = "";
            o.prototype.init.call(this), this.push = function(t) {
                var n;
                for (n = (e += t).indexOf("\n"); n > -1; n = e.indexOf("\n")) this.trigger("data", e.substring(0, n)), e = e.substring(n + 1)
            }
        }).prototype = new c, (s = function() {
            s.prototype.init.call(this)
        }).prototype = new c, s.prototype.push = function(e) {
            var n, r;
            if (0 !== (e = e.replace(/^\s+|\s+$/g, "")).length)
                if ("#" === e[0])
                    if (0 === e.indexOf("#EXT"))
                        if (e = e.replace("\r", ""), n = /^#EXTM3U/.exec(e)) this.trigger("data", {
                            type: "tag",
                            tagType: "m3u"
                        });
                        else {
                            if (n = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return r = {
                                type: "tag",
                                tagType: "inf"
                            }, n[1] && (r.duration = parseFloat(n[1])), n[2] && (r.title = n[2]), void this.trigger("data", r);
                            if (n = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "targetduration"
                            }, n[1] && (r.duration = t(n[1], 10)), void this.trigger("data", r);
                            if (n = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "totalduration"
                            }, n[1] && (r.duration = t(n[1], 10)), void this.trigger("data", r);
                            if (n = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "version"
                            }, n[1] && (r.version = t(n[1], 10)), void this.trigger("data", r);
                            if (n = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "media-sequence"
                            }, n[1] && (r.number = t(n[1], 10)), void this.trigger("data", r);
                            if (n = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "discontinuity-sequence"
                            }, n[1] && (r.number = t(n[1], 10)), void this.trigger("data", r);
                            if (n = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return r = {
                                type: "tag",
                                tagType: "playlist-type"
                            }, n[1] && (r.playlistType = n[1]), void this.trigger("data", r);
                            if (n = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "byterange"
                            }, n[1] && (r.length = t(n[1], 10)), n[2] && (r.offset = t(n[2], 10)), void this.trigger("data", r);
                            if (n = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return r = {
                                type: "tag",
                                tagType: "allow-cache"
                            }, n[1] && (r.allowed = !/NO/.test(n[1])), void this.trigger("data", r);
                            if (n = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) return r = {
                                type: "tag",
                                tagType: "stream-inf"
                            }, n[1] && (r.attributes = u(n[1]), r.attributes.RESOLUTION && (i = r.attributes.RESOLUTION.split("x"), o = {}, i[0] && (o.width = t(i[0], 10)), i[1] && (o.height = t(i[1], 10)), r.attributes.RESOLUTION = o), r.attributes.BANDWIDTH && (r.attributes.BANDWIDTH = t(r.attributes.BANDWIDTH, 10)), r.attributes["PROGRAM-ID"] && (r.attributes["PROGRAM-ID"] = t(r.attributes["PROGRAM-ID"], 10))), void this.trigger("data", r);
                            var i, o;
                            if (n = /^#EXT-X-ENDLIST/.exec(e)) this.trigger("data", {
                                type: "tag",
                                tagType: "endlist"
                            });
                            else if (n = /^#EXT-X-DISCONTINUITY/.exec(e)) this.trigger("data", {
                                type: "tag",
                                tagType: "discontinuity"
                            });
                            else {
                                if (n = /^#EXT-X-KEY:?(.*)$/.exec(e)) return r = {
                                    type: "tag",
                                    tagType: "key"
                                }, n[1] && (r.attributes = u(n[1]), r.attributes.IV && ("0x" === r.attributes.IV.substring(0, 2) && (r.attributes.IV = r.attributes.IV.substring(2)), r.attributes.IV = r.attributes.IV.match(/.{8}/g), r.attributes.IV[0] = t(r.attributes.IV[0], 16), r.attributes.IV[1] = t(r.attributes.IV[1], 16), r.attributes.IV[2] = t(r.attributes.IV[2], 16), r.attributes.IV[3] = t(r.attributes.IV[3], 16), r.attributes.IV = new Uint32Array(r.attributes.IV))), void this.trigger("data", r);
                                this.trigger("data", {
                                    type: "tag",
                                    data: e.slice(4, e.length)
                                })
                            }
                        }
            else this.trigger("data", {
                type: "comment",
                text: e.slice(1)
            });
            else this.trigger("data", {
                type: "uri",
                uri: e
            })
        }, (a = function() {
            var e, t = this,
                i = [],
                l = {};
            a.prototype.init.call(this), this.lineStream = new o, this.parseStream = new s, this.lineStream.pipe(this.parseStream), this.manifest = {
                allowCache: !0
            }, this.parseStream.on("data", function(o) {
                ({
                    tag: function() {
                        ({
                            "allow-cache": function() {
                                this.manifest.allowCache = o.allowed, "allowed" in o || (this.trigger("info", {
                                    message: "defaulting allowCache to YES"
                                }), this.manifest.allowCache = !0)
                            },
                            byterange: function() {
                                var e = {};
                                "length" in o && (l.byterange = e, e.length = o.length, "offset" in o || (this.trigger("info", {
                                    message: "defaulting offset to zero"
                                }), o.offset = 0)), "offset" in o && (l.byterange = e, e.offset = o.offset)
                            },
                            endlist: function() {
                                this.manifest.endList = !0
                            },
                            inf: function() {
                                "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                                    message: "defaulting media sequence to zero"
                                })), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                                    message: "defaulting discontinuity sequence to zero"
                                })), o.duration >= 0 && (l.duration = o.duration), this.manifest.segments = i
                            },
                            key: function() {
                                o.attributes ? "NONE" !== o.attributes.METHOD ? o.attributes.URI ? (o.attributes.METHOD || this.trigger("warn", {
                                    message: "defaulting key method to AES-128"
                                }), e = {
                                    method: o.attributes.METHOD || "AES-128",
                                    uri: o.attributes.URI
                                }, void 0 !== o.attributes.IV && (e.iv = o.attributes.IV)) : this.trigger("warn", {
                                    message: "ignoring key declaration without URI"
                                }) : e = null : this.trigger("warn", {
                                    message: "ignoring key declaration without attribute list"
                                })
                            },
                            "media-sequence": function() {
                                n(o.number) ? this.manifest.mediaSequence = o.number : this.trigger("warn", {
                                    message: "ignoring invalid media sequence: " + o.number
                                })
                            },
                            "discontinuity-sequence": function() {
                                n(o.number) ? this.manifest.discontinuitySequence = o.number : this.trigger("warn", {
                                    message: "ignoring invalid discontinuity sequence: " + o.number
                                })
                            },
                            "playlist-type": function() {
                                /VOD|EVENT/.test(o.playlistType) ? this.manifest.playlistType = o.playlistType : this.trigger("warn", {
                                    message: "ignoring unknown playlist type: " + o.playlist
                                })
                            },
                            "stream-inf": function() {
                                this.manifest.playlists = i, o.attributes ? (l.attributes || (l.attributes = {}), l.attributes = r(l.attributes, o.attributes)) : this.trigger("warn", {
                                    message: "ignoring empty stream-inf attributes"
                                })
                            },
                            discontinuity: function() {
                                l.discontinuity = !0
                            },
                            targetduration: function() {
                                !n(o.duration) || o.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid target duration: " + o.duration
                                }) : this.manifest.targetDuration = o.duration
                            },
                            totalduration: function() {
                                !n(o.duration) || o.duration < 0 ? this.trigger("warn", {
                                    message: "ignoring invalid total duration: " + o.duration
                                }) : this.manifest.totalDuration = o.duration
                            }
                        } [o.tagType] || function() {}).call(t)
                    },
                    uri: function() {
                        l.uri = o.uri, i.push(l), !this.manifest.targetDuration || "duration" in l || (this.trigger("warn", {
                            message: "defaulting segment duration to the target duration"
                        }), l.duration = this.manifest.targetDuration), e && (l.key = e), l = {}
                    },
                    comment: function() {}
                })[o.type].call(t)
            })
        }).prototype = new c, a.prototype.push = function(e) {
            this.lineStream.push(e)
        }, a.prototype.end = function() {
            this.lineStream.push("\n")
        }, window.videojs.m3u8 = {
            LineStream: o,
            ParseStream: s,
            Parser: a
        }
    }(window.videojs, window.parseInt, window.isFinite, window.videojs.util.mergeOptions),
    function(e) {
        "use strict";
        e.Hls.xhr = function(t, n) {
            var r, o, s = {
                method: "GET",
                timeout: 45e3
            };
            return "function" != typeof n && (n = function() {}), "object" === (void 0 === t ? "undefined" : i(t)) && (s = e.util.mergeOptions(s, t), t = s.url), (r = new window.XMLHttpRequest).open(s.method, t), r.url = t, r.requestTime = (new Date).getTime(), s.responseType && (r.responseType = s.responseType), s.withCredentials && (r.withCredentials = !0), s.timeout && (o = window.setTimeout(function() {
                4 !== r.readyState && (r.timedout = !0, r.abort())
            }, s.timeout)), r.onreadystatechange = function() {
                if (4 === this.readyState) return window.clearTimeout(o), r.timedout ? n.call(this, "timeout", t) : this.status >= 400 || 0 === this.status ? n.call(this, !0, t) : (this.response && (this.responseTime = (new Date).getTime(), this.roundTripTime = this.responseTime - this.requestTime, this.bytesReceived = this.response.byteLength || this.response.length, this.bandwidth = Math.floor(this.bytesReceived / this.roundTripTime * 8 * 1e3)), n.call(this, !1, t))
            }, r.send(null), r
        }
    }(window.videojs),
    function(e, t) {
        "use strict";
        var n, r, i;
        i = function(e, t, n) {
            var r, i, o, s, a = 0;
            for (i = t = t || 0, n = void 0 !== n ? n : (e.segments || []).length, r = e.targetDuration || 10, a += (s = Math.max(e.mediaSequence - t, 0)) * r, i += s; i < n; i++) a += (o = e.segments[i - e.mediaSequence]).preciseDuration || o.duration || r;
            return a
        }, n = function(t, n, r) {
            if (!t) return 0;
            if (void 0 === n && void 0 === r) {
                if (t.totalDuration) return t.totalDuration;
                if (!t.endList) return e.Infinity
            }
            return i(t, n, r)
        }, r = function(e) {
            var r, o, s, a, l, u, c;
            if (!e.segments) return t.createTimeRange();
            if (e.endList) return t.createTimeRange(0, n(e));
            if (o = (r = i(e, 0, e.mediaSequence)) + i(e, e.mediaSequence, e.mediaSequence + e.segments.length), a = e.targetDuration || 10, !e.endList)
                for (s = 3 * a, c = e.segments.length - 1; c >= 0 && s > 0; c--) l = e.segments[c], s -= u = Math.min(l.preciseDuration || l.duration || a, s), o -= u;
            return t.createTimeRange(r, o)
        }, t.Hls.Playlist = {
            duration: n,
            seekable: r
        }
    }(window, window.videojs),
    function(e, t) {
        "use strict";
        var n = t.Hls.resolveUrl,
            r = t.Hls.xhr,
            i = t.Hls.Playlist,
            o = function i(o, s) {
                var a, l, u, c, d = this;
                if (i.prototype.init.call(this), !o) throw new Error("A non-empty playlist URL is required");
                c = function(n, r, i) {
                    var o, s, a;
                    if (d.setBandwidth(u || r), u = null, n) return d.error = {
                        status: r.status,
                        message: "HLS playlist request error at URL: " + i,
                        responseText: r.responseText,
                        code: r.status >= 500 ? 4 : 2
                    }, d.trigger("error");
                    d.state = "HAVE_METADATA", (o = new t.m3u8.Parser).push(r.responseText), o.end(), o.manifest.uri = i, a = function(e, n) {
                        var r, i, o = !1,
                            s = t.util.mergeOptions(e, {});
                        for (r = e.playlists.length; r--;)
                            if ((i = s.playlists[r]).uri === n.uri) {
                                if (i.segments && n.segments && i.segments.length === n.segments.length && i.mediaSequence === n.mediaSequence) continue;
                                s.playlists[r] = t.util.mergeOptions(i, n), s.playlists[n.uri] = s.playlists[r], o = !0
                            } return o ? s : null
                    }(d.master, o.manifest), s = 1e3 * (o.manifest.targetDuration || 10), a ? (d.master = a, d.updateMediaPlaylist_(o.manifest)) : s /= 2, d.media().endList || (e.clearTimeout(l), l = e.setTimeout(function() {
                        d.trigger("mediaupdatetimeout")
                    }, s)), d.trigger("loadedplaylist")
                }, d.state = "HAVE_NOTHING", d.expiredPostDiscontinuity_ = 0, d.expiredPreDiscontinuity_ = 0, a = this.dispose, d.dispose = function() {
                    u && (u.onreadystatechange = null, u.abort(), u = null), e.clearTimeout(l), a.call(this)
                }, d.media = function(e) {
                    var t;
                    if (!e) return d.media_;
                    if ("HAVE_NOTHING" === d.state || "HAVE_MASTER" === d.state) throw new Error("Cannot switch media playlist from " + d.state);
                    if ("string" == typeof e) {
                        if (!d.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
                        e = d.master.playlists[e]
                    }
                    if (t = e.uri !== d.media_.uri, d.master.playlists[e.uri].endList) return u && (u.onreadystatechange = null, u.abort(), u = null), d.state = "HAVE_METADATA", d.media_ = e, void(t && d.trigger("mediachange"));
                    if (t) {
                        if (d.state = "SWITCHING_MEDIA", u) {
                            if (n(d.master.uri, e.uri) === u.url) return;
                            u.onreadystatechange = null, u.abort(), u = null
                        }
                        u = r({
                            url: n(d.master.uri, e.uri),
                            withCredentials: s
                        }, function(t) {
                            c(t, this, e.uri), d.trigger("mediachange")
                        })
                    }
                }, d.setBandwidth = function(e) {
                    d.bandwidth = e.bandwidth
                }, d.on("mediaupdatetimeout", function() {
                    "HAVE_METADATA" === d.state && (d.state = "HAVE_CURRENT_METADATA", u = r({
                        url: n(d.master.uri, d.media().uri),
                        withCredentials: s
                    }, function(e) {
                        c(e, this, d.media().uri)
                    }))
                }), r({
                    url: o,
                    withCredentials: s
                }, function(i) {
                    var a, l;
                    if (i) return d.error = {
                        status: this.status,
                        message: "HLS playlist request error at URL: " + o,
                        responseText: this.responseText,
                        code: 2
                    }, d.trigger("error");
                    if ((a = new t.m3u8.Parser).push(this.responseText), a.end(), d.state = "HAVE_MASTER", a.manifest.uri = o, a.manifest.playlists) {
                        for (d.master = a.manifest, l = d.master.playlists.length; l--;) d.master.playlists[d.master.playlists[l].uri] = d.master.playlists[l];
                        return u = r({
                            url: n(o, a.manifest.playlists[0].uri),
                            withCredentials: s
                        }, function(e) {
                            c(e, this, a.manifest.playlists[0].uri), e || d.trigger("loadedmetadata")
                        }), d.trigger("loadedplaylist")
                    }
                    return d.master = {
                        uri: e.location.href,
                        playlists: [{
                            uri: o
                        }]
                    }, d.master.playlists[o] = d.master.playlists[0], c(null, this, o), d.trigger("loadedmetadata")
                })
            };
        (o.prototype = new t.Hls.Stream).updateMediaPlaylist_ = function(e) {
            var t, n, r;
            if (this.media_) {
                if (n = e.mediaSequence - this.media_.mediaSequence, t = this.media_.mediaSequence, this.media_.discontinuitySequence !== e.discontinuitySequence)
                    for (r = n; r--;)
                        if (this.media_.segments[r].discontinuity) {
                            t = r + this.media_.mediaSequence, this.expiredPreDiscontinuity_ += this.expiredPostDiscontinuity_, this.expiredPostDiscontinuity_ = 0;
                            break
                        } this.expiredPreDiscontinuity_ += i.duration(this.media_, this.media_.mediaSequence, t), this.expiredPostDiscontinuity_ += i.duration(this.media_, t, this.media_.mediaSequence + n)
            }
            this.media_ = this.master.playlists[e.uri]
        }, t.Hls.PlaylistLoader = o
    }(window, window.videojs),
    function e(t, n, i) {
        "use strict";

        function o(a, l) {
            if (!n[a]) {
                if (!t[a]) {
                    if (!l && ("function" == typeof r && r)) return r(a, !0);
                    if (s) return s(a, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var n = t[a][1][e];
                    return o(n || e)
                }, u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var s = "function" == typeof r && r, a = 0; a < i.length; a++) o(i[a]);
        return o
    }({
        1: [function(e, t, n) {
            (function(t) {
                t.window.pkcs7 = {
                    unpad: e("./unpad")
                }
            }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./unpad": 2
        }],
        2: [function(e, t, n) {
            "use strict";
            t.exports = function(e) {
                return e.subarray(0, e.byteLength - e[e.byteLength - 1])
            }
        }, {}]
    }, {}, [1]),
    function(e, t, n) {
        "use strict";
        var r, i, o, s, a;
        a = function(e) {
            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
        }, (r = function(e) {
            this._precompute();
            var t, n, r, i, o, s = this._tables[0][4],
                a = this._tables[1],
                l = e.length,
                u = 1;
            if (4 !== l && 6 !== l && 8 !== l) throw new Error("Invalid aes key size");
            for (i = e.slice(0), o = [], this._key = [i, o], t = l; t < 4 * l + 28; t++) r = i[t - 1], (t % l == 0 || 8 === l && t % l == 4) && (r = s[r >>> 24] << 24 ^ s[r >> 16 & 255] << 16 ^ s[r >> 8 & 255] << 8 ^ s[255 & r], t % l == 0 && (r = r << 8 ^ r >>> 24 ^ u << 24, u = u << 1 ^ 283 * (u >> 7))), i[t] = i[t - l] ^ r;
            for (n = 0; t; n++, t--) r = i[3 & n ? t : t - 4], o[n] = t <= 4 || n < 4 ? r : a[0][s[r >>> 24]] ^ a[1][s[r >> 16 & 255]] ^ a[2][s[r >> 8 & 255]] ^ a[3][s[255 & r]]
        }).prototype = {
            _tables: [
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            ],
            _precompute: function() {
                var e, t, n, r, i, o, s, a, l = this._tables[0],
                    u = this._tables[1],
                    c = l[4],
                    d = u[4],
                    p = [],
                    h = [];
                for (e = 0; e < 256; e++) h[(p[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
                for (t = n = 0; !c[t]; t ^= r || 1, n = h[n] || 1)
                    for (o = (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >> 8 ^ 255 & o ^ 99, c[t] = o, d[o] = t, a = 16843009 * p[i = p[r = p[t]]] ^ 65537 * i ^ 257 * r ^ 16843008 * t, s = 257 * p[o] ^ 16843008 * o, e = 0; e < 4; e++) l[e][t] = s = s << 24 ^ s >>> 8, u[e][o] = a = a << 24 ^ a >>> 8;
                for (e = 0; e < 5; e++) l[e] = l[e].slice(0), u[e] = u[e].slice(0)
            },
            decrypt: function(e, t, n, r, i, o) {
                var s, a, l, u, c = this._key[1],
                    d = e ^ c[0],
                    p = r ^ c[1],
                    h = n ^ c[2],
                    f = t ^ c[3],
                    v = c.length / 4 - 2,
                    m = 4,
                    y = this._tables[1],
                    g = y[0],
                    b = y[1],
                    A = y[2],
                    w = y[3],
                    j = y[4];
                for (u = 0; u < v; u++) s = g[d >>> 24] ^ b[p >> 16 & 255] ^ A[h >> 8 & 255] ^ w[255 & f] ^ c[m], a = g[p >>> 24] ^ b[h >> 16 & 255] ^ A[f >> 8 & 255] ^ w[255 & d] ^ c[m + 1], l = g[h >>> 24] ^ b[f >> 16 & 255] ^ A[d >> 8 & 255] ^ w[255 & p] ^ c[m + 2], f = g[f >>> 24] ^ b[d >> 16 & 255] ^ A[p >> 8 & 255] ^ w[255 & h] ^ c[m + 3], m += 4, d = s, p = a, h = l;
                for (u = 0; u < 4; u++) i[(3 & -u) + o] = j[d >>> 24] << 24 ^ j[p >> 16 & 255] << 16 ^ j[h >> 8 & 255] << 8 ^ j[255 & f] ^ c[m++], s = d, d = p, p = h, h = f, f = s
            }
        }, s = function(e, t, n) {
            var i, o, s, l, u, c, d, p, h, f = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2),
                v = new r(Array.prototype.slice.call(t)),
                m = new Uint8Array(e.byteLength),
                y = new Int32Array(m.buffer);
            for (i = n[0], o = n[1], s = n[2], l = n[3], h = 0; h < f.length; h += 4) u = a(f[h]), c = a(f[h + 1]), d = a(f[h + 2]), p = a(f[h + 3]), v.decrypt(u, c, d, p, y, h), y[h] = a(y[h] ^ i), y[h + 1] = a(y[h + 1] ^ o), y[h + 2] = a(y[h + 2] ^ s), y[h + 3] = a(y[h + 3] ^ l), i = u, o = c, s = d, l = p;
            return m
        }, ((i = function() {
            this.jobs = [], this.delay = 1, this.timeout_ = null
        }).prototype = new t.Hls.Stream).processJob_ = function() {
            this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(t.bind(this, this.processJob_), this.delay) : this.timeout_ = null
        }, i.prototype.push = function(e) {
            this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(t.bind(this, this.processJob_), this.delay))
        }, (o = function(e, t, r, s) {
            var l = o.STEP,
                u = new Int32Array(e.buffer),
                c = new Uint8Array(e.byteLength),
                d = 0;
            for (this.asyncStream_ = new i, this.asyncStream_.push(this.decryptChunk_(u.subarray(d, d + l), t, r, c, d)), d = l; d < u.length; d += l) r = new Uint32Array([a(u[d - 4]), a(u[d - 3]), a(u[d - 2]), a(u[d - 1])]), this.asyncStream_.push(this.decryptChunk_(u.subarray(d, d + l), t, r, c));
            this.asyncStream_.push(function() {
                s(null, n(c))
            })
        }).prototype = new t.Hls.Stream, o.prototype.decryptChunk_ = function(e, t, n, r) {
            return function() {
                var i = s(e, t, n);
                r.set(i, e.byteOffset)
            }
        }, o.STEP = 32e3, t.Hls.decrypt = s, t.Hls.Decrypter = o, t.Hls.AsyncStream = i
    }(window, window.videojs, window.pkcs7.unpad)
}, function(e, t, n) {
    n(42), n(43)
}, function(e, t, n) {
    var r = n(1),
        i = n(0),
        o = n(3);
    videojs.plugin("player-events", function() {
        var e = this,
            t = e.el(),
            n = i.debounce(function() {
                e.trigger("resize")
            }, 50),
            s = function(e) {
                return "flyoutState" in e
            },
            a = function(t) {
                var n = "player" in t ? t.player : {},
                    r = s(n),
                    i = -1;
                l.molFeVideoplayer.forEachPlayer(function() {
                    var t = s(this) ? this.flyoutState() : -1;
                    this !== n && (this.trigger("autoplay-next-video-cancel"), -1 !== t && (i = t), r && this.trigger({
                        type: "flyout-switchoff",
                        animationOff: !0
                    }), (!this.paused() || e._states && "adPlaying" === e._states.state.get()) && this.pause())
                }), r && -1 !== i && n.trigger({
                    type: "flyout-switchon",
                    animationOff: !0
                }), r && 1 === i && n.trigger("flyout-expand")
            };
        window.onresize = n, e.on("fullscreenchange", n), e.on("fullscreenchange", function() {
            e.isFullscreen() ? document.body.classList.add("video-js-fullscreen") : document.body.classList.remove("video-js-fullscreen")
        }), e.ready(function() {
            setTimeout(function() {
                r.addClass(t, "vjs-visually-ready")
            }, 10)
        });
        var l = window.DM;
        if (l && l.molFeVideoplayer && l.molFeVideoplayer.on && (l.molFeVideoplayer.on("videoPlaying", a), l.molFeVideoplayer.on("pauseAll", a)), ["play"].forEach(function(t) {
                e.on(t, function() {
                    l.molFeVideoplayer.trigger("videoPlaying", {
                        player: e
                    })
                })
            }), o.isIPhone && o.osMajorVersion <= 7) {
            var u = !1,
                c = void 0;
            e.on("contenttimeupdate", function() {
                var t = e.currentTime();
                void 0 !== c && (Math.abs(c - t) > 1.2 ? (e.trigger("seeking"), u = !0) : u && (e.trigger("seeked"), u = !1)), c = t
            }), e.on("playerstate.enter.contentReady", function() {
                c = void 0
            }), e.on("playerstate.leave.seeking", function() {
                c = void 0
            })
        }
        if (o.isIPhone) {
            var d = i.debounce(function() {
                e.trigger("play-after-seek")
            }, 800);
            e.on("seeking", function() {
                e.paused() || d()
            }), e.on("seeked", function() {
                e.paused() || d()
            })
        }
        e.on("seeked", e.onWaitEnd), e.on("playerstate.leave.errored", function() {
            e.removeChild("errorDisplay")
        }), e.on("warning", function(e) {
            videojs.log.error(e.message)
        }), e.on("request-dispose", function() {
            r.removeEventListener(window, "resize", n), e.pause(), l.molFeVideoplayer.off("videoPlaying", a), setTimeout(function() {
                e.dispose()
            }, 400)
        })
    })
}, function(e, t, n) {
    var r = n(44),
        i = n(7),
        o = n(1);
    videojs.plugin("player-state", function() {
        var e = this,
            t = e.el().querySelector(".vjs-tech");
        !document.addEventListener && o.addClass(document.body, "vjs-ie8");
        var n = window.location.search.match(/logVideoplayerState/),
            s = new r(e, {
                "timer:waitingLoading": [{
                    from: function(t) {
                        return "contentWaiting" === t && e.currentTime() > 0
                    },
                    to: "contentReady",
                    timer: "startPlaying",
                    timer_time: 1400
                }],
                "timer:resumeAfterSeek": [{
                    from: "resumeAfterSeek",
                    to: "contentPlaying"
                }],
                "videoAd.contentPauseRequested": [{
                    from: "started",
                    to: "adsWaiting"
                }, {
                    from: "contentWaiting",
                    to: "adsWaiting"
                }],
                "videoAd.start": [{
                    from: "adsWaiting",
                    to: "adPlaying"
                }],
                "videoAd.complete": [{
                    from: "adPlaying",
                    to: "adEnded"
                }],
                "videoAd.contentResumeRequested": [{
                    from: function(e) {
                        return ["adsWaiting", "started", "adEnded"].includes(e)
                    },
                    to: "contentWaiting",
                    timer: "waitingLoading",
                    timer_interval: 10
                }, {
                    from: function(e) {
                        return ["adPlaying", "adPaused"].includes(e)
                    },
                    to: "adAborted",
                    timer: "adAborted",
                    timer_time: 10
                }],
                "timer:adAborted": [{
                    from: "adAborted",
                    to: "contentWaiting",
                    timer: "waitingLoading",
                    timer_interval: 10
                }],
                "timer:startPlaying": [{
                    from: "contentReady",
                    to: "contentPlaying"
                }],
                "timer:end": [{
                    from: function(t) {
                        return "ended" === t && (!(e.options().plugins || {})["autoplay-next-video"] || (i.defer(function() {
                            e.trigger("mol.autoplay-start")
                        }), !1))
                    },
                    to: "standby"
                }],
                "timer:error": [{
                    from: "errored",
                    to: "ended",
                    timer: "end",
                    timer_time: 600
                }],
                "timer:pause": [{
                    from: "contentPaused",
                    to: "pauseStandby"
                }],
                "timer:replay": [{
                    from: "started",
                    to: "contentWaiting",
                    timer: "waitingLoading",
                    timer_interval: 10
                }],
                "timer:seeking_to_ended": [{
                    from: "contentPlaying",
                    to: "ended",
                    timer: "end",
                    timer_time: 600
                }],
                "timer:stop_seeking": [{
                    from: "seeking",
                    to: "contentPlaying"
                }],
                ended: [{
                    from: "contentPlaying",
                    to: "ended",
                    timer: "end",
                    timer_time: 600
                }, {
                    from: "seeking",
                    to: "contentPlaying",
                    timer: "seeking_to_ended",
                    timer_time: 100
                }, {
                    from: "resumeAfterSeek",
                    to: "contentPlaying",
                    timer: "seeking_to_ended",
                    timer_time: 100
                }],
                error: [{
                    from: function(e) {
                        return "adsWaiting" !== e && "adPlaying" !== e && Boolean(t.error)
                    },
                    to: "errored",
                    timer: "error",
                    timer_time: 3e3
                }],
                pause: [{
                    from: function(e) {
                        var t = this.currentTime() / this.duration();
                        return ("contentReady" === e || "contentPlaying" === e || "resumeAfterSeek" === e) && (!this.duration() || t < .98)
                    },
                    to: "contentPaused",
                    timer: "pause",
                    timer_time: 200
                }, {
                    from: function(e) {
                        var t = this.currentTime() / this.duration();
                        return "adPlaying" === e && t < .98
                    },
                    to: "adPaused"
                }, {
                    from: "autoplay",
                    to: "standby"
                }],
                play: [{
                    from: "ready",
                    to: "started"
                }, {
                    from: "ended",
                    to: "started"
                }, {
                    from: "standby",
                    to: "started"
                }, {
                    from: "pauseStandby",
                    to: "contentPlaying"
                }, {
                    from: "adPaused",
                    to: "adPlaying"
                }, {
                    from: "contentPaused",
                    to: "contentPlaying"
                }, {
                    from: "seeking",
                    to: "resumeAfterSeek",
                    timer: "resumeAfterSeek",
                    timer_time: 1e3
                }, {
                    from: "autoplay",
                    to: "standby"
                }],
                "play-after-seek": [{
                    from: "seeking",
                    to: "contentPlaying"
                }],
                "before-seeking, seeking": [{
                    from: "contentReady",
                    to: "contentPlaying"
                }, {
                    from: "contentPlaying",
                    to: "seeking",
                    timer: "stop_seeking",
                    timer_time: 3e3
                }, {
                    from: "contentPaused",
                    to: "seeking",
                    timer: "stop_seeking",
                    timer_time: 3e3
                }, {
                    from: "seeking",
                    to: "seeking",
                    timer: "stop_seeking",
                    timer_time: 3e3
                }],
                seeked: [{
                    from: "contentReady",
                    to: "contentPlaying"
                }, {
                    from: "changingSrc",
                    to: "contentPlaying"
                }],
                "mol.sources.renditionChanging": [{
                    from: "contentPlaying",
                    to: "changingSrc"
                }],
                "request-dispose": [{
                    from: "adPlaying",
                    to: "destroyedDuringAds"
                }, {
                    from: /.*/,
                    to: "destroyed"
                }],
                "request-reset": [{
                    from: "contentPlaying",
                    to: "aborting"
                }, {
                    from: "pauseStandby",
                    to: "aborting"
                }],
                "autoplay-next-video-cancel, autoplay-inline-cancel": [{
                    from: "autoplay",
                    to: "standby"
                }],
                "autoplay-next-video-restart, autoplay-inline-restart": [{
                    from: "standby",
                    to: "autoplay"
                }],
                "flyout-close": [{
                    from: "autoplay",
                    to: "standby"
                }],
                "mol.autoplay-start": [{
                    from: "ended",
                    to: "autoplay"
                }],
                reset: [{
                    from: /.*/,
                    to: "started"
                }]
            }, {
                onTransition: function(e, t, r) {
                    n && console.log("### STATE: " + e + " -> " + r + " -> " + t + " (" + Date.now() + ")")
                }
            }),
            a = function(e, t) {
                var n = 100 * e;
                return function(r) {
                    var i = void 0,
                        o = parseInt(r, 10);
                    return !isNaN(o) && n > o && (0 !== this.duration() && ((i = this.currentTime() / this.duration()) >= e && i < t))
                }
            },
            l = new r(e, {
                "playerstate.enter.contentPlaying": [{
                    from: "ready",
                    to: "0"
                }],
                "timeupdate,contenttimeupdate": [{
                    from: a(.25, 1),
                    to: "25"
                }, {
                    from: a(.5, 1),
                    to: "50"
                }],
                "playerstate.enter.seeking": [{
                    from: "0",
                    to: "seeking-0"
                }, {
                    from: "25",
                    to: "seeking-25"
                }, {
                    from: "50",
                    to: "seeking-50"
                }],
                "playerstate.leave.seeking": [{
                    from: "seeking-0",
                    to: "0-resumed"
                }, {
                    from: "seeking-25",
                    to: "25-resumed"
                }, {
                    from: "seeking-50",
                    to: "50-resumed"
                }],
                "playerstate.enter.ended": [{
                    from: /^0.*/,
                    to: "25",
                    timer: "from25toend"
                }, {
                    from: /^25.*/,
                    to: "50",
                    timer: "from50toend"
                }, {
                    from: /^50.*/,
                    to: "ready"
                }],
                "timer:from25toend": [{
                    from: "25",
                    to: "50",
                    timer: "from50toend"
                }],
                "timer:from50toend": [{
                    from: "50",
                    to: "ready"
                }],
                reset: [{
                    from: /.*/,
                    to: "ready"
                }]
            }, {
                onTransition: function(e, t, r) {
                    n && console.log("### PROGRESS: " + e + " -> " + r + " -> " + t)
                }
            });
        s.on(function(t) {
            null !== e.el() && e.trigger("playerstate." + t.type + "." + t.state)
        }), l.on(function(t) {
            null !== e.el() && e.trigger("playerstate.progress." + t.type + "." + t.state)
        }), s.on("destroyedDuringAds", function() {
            null !== e.el() && (s.destroy(), l.destroy())
        }), s.on("destroyed", function() {
            null !== e.el() && (s.destroy(), l.destroy())
        }), e._states = {
            state: s,
            progress: l
        }, e.playerState = {
            getStateName: function() {
                return s.get()
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = n(19),
        i = r.isString,
        o = r.setImmediate,
        s = n(47);

    function a(e) {
        return i(e) || "object" == typeof e && "name" in e
    }

    function l(e) {
        if (!a(e)) throw new Error(e + " not a valid state")
    }

    function u(e) {
        return i(e) ? e : e.name
    }

    function c(e, t, n) {
        var r = u(t);
        if (e instanceof RegExp) return e.test(r);
        if ("function" == typeof e) return e.call(this, t, n);
        if (i(e)) return e === r;
        throw new Error(e + " (from) can be either a string, a regular expression or a function")
    }

    function d(e, t, n) {
        if ("function" == typeof e) return e.call(this, t, n);
        if (a(e)) return e;
        throw new Error(e + " (to) can be either a string, a function or a state object")
    }
    e.exports = function(e, t, n) {
        var r, i, a, p, h, f, v = (n = n || {}).initialState || "ready",
            m = n.onTransition || function() {},
            y = [],
            g = n.bindMethod || "on",
            b = n.unbindMethod || "off";

        function A(e, t, n) {
            for (var r = [].concat(w[e + "." + u(t)] || [], w["*.*"] || [], w[e + ".*"] || [], w["*." + u(t)] || []), i = 0; i < r.length; i++) r[i].call(this, {
                type: e,
                state: t,
                event: n
            })
        }
        l(v), "function" == typeof e[g] && (e = {
            default: e
        });
        if (e.timer) throw new Error(e + " the word 'timer' in the subjects map is reserved");
        e.timer = s(g, b);
        var w = {};
        for (var j in t) {
            p = j.split(/[\s,]+/);
            for (var T = 0; T < p.length; T++) a = p[T], (h = a.split(":")).length < 2 && h.unshift("default"), f = e[h[0]], i = function(t, n, i) {
                return n = void 0 === n.length ? [n] : n,
                    function(s) {
                        for (var a = 0; a < n.length; a++)
                            if (c.call(i, n[a].from, v, s)) {
                                e.timer.reset(), r = v, l(v = d.call(i, n[a].to, v, s)), m(r, v, t, s), u(r) === u(v) ? o(function(e, t, n, r) {
                                    return function() {
                                        A.call(e, "stay", n, r)
                                    }
                                }(i, 0, v, s)) : o(function(e, t, n, r) {
                                    return function() {
                                        A.call(e, "leave", t, r), A.call(e, "enter", n, r)
                                    }
                                }(i, r, v, s)), n[a].timer && e.timer.trigger(n[a].timer, n[a].timer_time, n[a].timer_interval);
                                break
                            }
                    }
            }(a, t[j], f), y.push([h[1], i]), f[g](h[1], i)
        }
        return {
            get: function() {
                return v
            },
            set: function(e) {
                v = e
            },
            on: function(e, t) {
                t || (t = e, e = "*.*");
                var n = e.split(".");
                n.length < 2 && n.unshift("enter"), e = n.join("."), w[e] ? w[e].push(t) : w[e] = [t]
            },
            destroy: function() {
                var e, t, n;
                for (e = 0; e < y.length; e++) t = y[e][0], n = y[e][1], f[b](t, n)
            }
        }
    }
}, function(e, t, n) {
    (function(e, t) {
        ! function(e, n) {
            "use strict";
            if (!e.setImmediate) {
                var r, i, o, s, a, l = 1,
                    u = {},
                    c = !1,
                    d = e.document,
                    p = Object.getPrototypeOf && Object.getPrototypeOf(e);
                p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? r = function(e) {
                    t.nextTick(function() {
                        f(e)
                    })
                } : ! function() {
                    if (e.postMessage && !e.importScripts) {
                        var t = !0,
                            n = e.onmessage;
                        return e.onmessage = function() {
                            t = !1
                        }, e.postMessage("", "*"), e.onmessage = n, t
                    }
                }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function(e) {
                    f(e.data)
                }, r = function(e) {
                    o.port2.postMessage(e)
                }) : d && "onreadystatechange" in d.createElement("script") ? (i = d.documentElement, r = function(e) {
                    var t = d.createElement("script");
                    t.onreadystatechange = function() {
                        f(e), t.onreadystatechange = null, i.removeChild(t), t = null
                    }, i.appendChild(t)
                }) : r = function(e) {
                    setTimeout(f, 0, e)
                } : (s = "setImmediate$" + Math.random() + "$", a = function(t) {
                    t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(s) && f(+t.data.slice(s.length))
                }, e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a), r = function(t) {
                    e.postMessage(s + t, "*")
                }), p.setImmediate = function(e) {
                    "function" != typeof e && (e = new Function("" + e));
                    for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                    var i = {
                        callback: e,
                        args: t
                    };
                    return u[l] = i, r(l), l++
                }, p.clearImmediate = h
            }

            function h(e) {
                delete u[e]
            }

            function f(e) {
                if (c) setTimeout(f, 0, e);
                else {
                    var t = u[e];
                    if (t) {
                        c = !0;
                        try {
                            ! function(e) {
                                var t = e.callback,
                                    r = e.args;
                                switch (r.length) {
                                    case 0:
                                        t();
                                        break;
                                    case 1:
                                        t(r[0]);
                                        break;
                                    case 2:
                                        t(r[0], r[1]);
                                        break;
                                    case 3:
                                        t(r[0], r[1], r[2]);
                                        break;
                                    default:
                                        t.apply(n, r)
                                }
                            }(t)
                        } finally {
                            h(e), c = !1
                        }
                    }
                }
            }
        }("undefined" == typeof self ? void 0 === e ? this : e : self)
    }).call(this, n(10), n(46))
}, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
            r = s
        }
    }();
    var l, u = [],
        c = !1,
        d = -1;

    function p() {
        c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && h())
    }

    function h() {
        if (!c) {
            var e = a(p);
            c = !0;
            for (var t = u.length; t;) {
                for (l = u, u = []; ++d < t;) l && l[d].run();
                d = -1, t = u.length
            }
            l = null, c = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function v() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new f(e, t)), 1 !== u.length || c || a(h)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    var r = n(19).setImmediate;
    e.exports = function(e, t) {
        var n, i, o = {},
            s = function(e) {
                return function() {
                    for (var t = 0; t < o[e].length; t++) o[e][t]()
                }
            },
            a = {};
        return a[e] = function(e, t) {
            o[e] ? o[e].push(t) : o[e] = [t]
        }, a[t] = function(e) {
            delete o[e], clearTimeout(n), clearTimeout(i)
        }, a.trigger = function(e, t, a) {
            o[e] && (t ? n = setTimeout(s(e), t) : a ? i = setInterval(s(e), a) : r(s(e)))
        }, a.reset = function() {
            clearTimeout(n), clearInterval(i)
        }, a
    }
}, function(e, t, n) {
    var r = n(49),
        i = n(68);
    videojs.ControlBar = r, videojs.LoadingSpinner = i
}, function(e, t, n) {
    var r = n(50),
        i = n(51),
        o = n(52),
        s = n(54),
        a = n(66),
        l = n(67),
        u = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t), this.addChild(new videojs.ProgressControl(e)), this.addChild(new a(e)), this.addChild(new videojs.PlayToggle(e)), this.addChild(new l(e)), this.addChild(new i(e)), this.addChild(new videojs.VolumeMenuButton(e, {
                    volumeBar: {
                        vertical: !0
                    }
                })), this.addChild(new r(e)), this.addChild(new videojs.FullscreenToggle(e)), this.addChild(new o(e)), t.isSocialControlsHidden || this.addChild(new s(e));
                try {
                    e.volume(.7), e.options().muted && e.muted(!0)
                } catch (e) {
                    console.log("Failing to set volume", e.message)
                }
                e.on("ended", this.onVideoEnded), e.on("play", this.onVideoStart)
            }
        });
    u.prototype.options_ = {
        loadEvent: "play"
    }, u.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-control-bar"
        })
    }, u.prototype.onVideoEnded = function() {
        this.addClass("vjs-video-finished")
    }, u.prototype.onVideoStart = function() {
        this.removeClass("vjs-video-finished")
    }, e.exports = u
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t), this.addChild(new videojs.CurrentTimeDisplay(e)), this.addChild(new videojs.TimeDivider(e)), this.addChild(new videojs.DurationDisplay(e))
        }
    });
    n.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-timer-controls vjs-control"
        })
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Component.extend();
    n.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "streaming-label vjs-control",
            innerHTML: "LIVE"
        })
    }, e.exports = n
}, function(e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(53),
        s = videojs.MenuButton.extend({
            init: function(e, t) {
                videojs.MenuButton.call(this, e, t);
                var n = this;

                function r() {
                    n.items.length <= 1 ? n.hide() : n.show()
                }

                function i() {
                    var t = e.src();
                    n.items && n.items.forEach(function(e) {
                        e.selected(function(e, t) {
                            var n = void 0,
                                r = void 0;
                            for (n = 0, r = e.renditions.length; n < r; n += 1)
                                if (e.renditions[n].src === t) return !0;
                            return !1
                        }(e, t))
                    })
                }
                r(), e.on("mol.sources.updated", function() {
                    n.removeChild(n.menu), n.menu = n.createMenu(), n.addChild(n.menu), i(), r()
                }), e.on("mol.sources.renditionChanged", i)
            }
        });
    s.prototype.createEl = function() {
        return videojs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-video-quality-control vjs-control"
        })
    }, s.prototype.options_ = {
        title: "Video Quality"
    }, s.prototype.createItems = function() {
        var e, t = this.player().renditions;
        return r.isArray(t) ? function(e, t) {
            var n = {},
                r = [];
            return t.forEach(function(t) {
                var i = t.height,
                    s = n[i];
                s || (s = function(e, t) {
                    return new o(e, {
                        width: t.width,
                        height: t.height,
                        renditions: []
                    })
                }(e, t), n[i] = s, r.push(s)), s.addRendition(t)
            }), r
        }(this.player(), t.slice().sort((e = "height", function(t, n) {
            return t[e] > n[e] ? -1 : t[e] < n[e] ? 1 : 0
        }))) : []
    }, s.prototype.onClick = function() {
        var e = videojs.bind(this, function(t) {
            var n = Boolean(t.toElement) ? t.toElement : t.relatedTarget;
            n === this.el() || i.isDescendant(this.el(), n) || (this.unpressButton(), i.removeEventListener(this.el(), "mouseout", e))
        });
        i.addEventListener(this.el(), "mouseout", e), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }, s.prototype.createMenu = function() {
        var e = new videojs.Menu(this.player(), {
            contentElType: "div"
        });
        return this.options().title && e.contentEl().appendChild(videojs.createEl("div", {
            className: "vjs-menu-title",
            innerHTML: r.capitalize(this.options().title),
            tabindex: -1
        })), this.items = this.createItems(), this.items && this.items.forEach(function(t) {
            e.addItem(t)
        }), e
    }, s.prototype.pressButton = function() {
        videojs.MenuButton.prototype.pressButton.call(this), i.addClass(this.el(), "active")
    }, s.prototype.unpressButton = function() {
        videojs.MenuButton.prototype.unpressButton.call(this), i.removeClass(this.el(), "active")
    }, e.exports = s
}, function(e, t) {
    var n = videojs.MenuItem.extend({
        init: function(e, t) {
            videojs.MenuItem.call(this, e, t), this.width = t.width, this.height = t.height, this.renditions = t.renditions || []
        }
    });
    n.prototype.createEl = function(e, t) {
        var n = this.options_.height + "p";
        return videojs.Button.prototype.createEl.call(this, "div", videojs.obj.merge({
            className: "vjs-menu-item",
            innerHTML: n
        }, t))
    }, n.prototype.onClick = function() {
        var e = this.player();
        e.changeRendition && e.changeRendition(this.renditions)
    }, n.prototype.addRendition = function(e) {
        this.renditions.push(e)
    }, e.exports = n
}, function(e, t, n) {
    var r = n(2).FacebookButton,
        i = n(2).TwitterButton,
        o = n(2).MailButton,
        s = n(20),
        a = n(60),
        l = n(63),
        u = videojs.Component.extend({
            init: function(e) {
                videojs.Component.call(this, e), this.addChild(new l(e)), this.addChild(new a(e)), this.addChild(new s(e)), this.addChild(new o(e)), this.addChild(new i(e)), this.addChild(new r(e))
            }
        });
    u.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-social-controls vjs-control"
        })
    }, e.exports = u
}, function(e, t, n) {
    var r = n(12),
        i = n(57),
        o = r.extend({
            init: function(e, t) {
                r.call(this, e, t), this.addChild(new i(e))
            }
        });
    o.prototype.name = function() {
        return "SharePopup"
    }, o.prototype.createEl = function() {
        return r.prototype.createEl.call(this, "div", {
            className: "vjs-social-popup"
        })
    }, e.exports = o
}, function(e, t) {
    var n = videojs.Button.extend();
    n.prototype.onClick = function() {
        this.player_.trigger("CloseButton.pressed")
    }, n.prototype.name = function() {
        return "CloseButton"
    }, n.prototype.createEl = function() {
        return videojs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-close-button vjs-control",
            innerHTML: "×"
        })
    }, e.exports = n
}, function(e, t, n) {
    var r = n(58),
        i = n(59),
        o = n(2).FacebookButton,
        s = n(2).MailButton,
        a = n(2).TwitterButton,
        l = n(2).PinterestButton,
        u = n(2).RedditButton,
        c = n(2).DiggButton,
        d = n(2).LinkedinButton,
        p = videojs.Component.extend({
            init: function(e) {
                videojs.Component.call(this, e);
                var t = new r(e);
                t.addChild(new o(e)), t.addChild(new a(e)), t.addChild(new l(e)), t.addChild(new s(e)), t.addChild(new u(e)), t.addChild(new c(e)), t.addChild(new d(e)), this.addChild(t), this.addChild(new i(e))
            }
        });
    p.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-social-popup-content vjs-popup-wrapper",
            innerHTML: '<div class="clearfix"></div><div class="vjs-popup-title">Share this Video</div>'
        })
    }, e.exports = p
}, function(e, t) {
    var n = videojs.Component.extend();
    n.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-popup-content"
        })
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Component.extend();
    n.prototype.createEl = function() {
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "clearfix"
        })
    }, e.exports = n
}, function(e, t, n) {
    var r = n(11),
        i = n(61),
        o = r.extend();
    o.prototype.buttonName = "LinkButton", o.prototype.name = function() {
        return "LinkButton"
    }, o.prototype.getPopup = function() {
        return new i(this.player_)
    }, e.exports = o
}, function(e, t, n) {
    var r = n(12),
        i = n(62),
        o = r.extend({
            init: function(e, t) {
                r.call(this, e, t), this.addChild(new i(e))
            }
        });
    o.prototype.name = function() {
        return "LinkPopup"
    }, o.prototype.createEl = function() {
        return r.prototype.createEl.call(this, "div", {
            className: "vjs-link-popup"
        })
    }, e.exports = o
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e) {
            videojs.Component.call(this, e)
        }
    });
    n.prototype.createEl = function() {
        var e = this.player(),
            t = e.socials && e.socials.videoLink && e.socials.videoLink();
        t || (t = "No link available");
        var n = '<div class="clearfix"></div><div class="vjs-popup-title">Get link</div><div class="vjs-popup-content"><textarea class="copyToClipboardEl" readonly rows="3">' + t + '</textarea></div><div class="vjs-popup-helper-msg">Please copy the text above</div>';
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-link-popup-content vjs-popup-wrapper",
            innerHTML: n
        })
    }, e.exports = n
}, function(e, t, n) {
    var r = n(11),
        i = n(64),
        o = r.extend();
    o.prototype.buttonName = "EmbedButton", o.prototype.getPopup = function() {
        return new i(this.player_)
    }, o.prototype.name = function() {
        return "EmbedButton"
    }, e.exports = o
}, function(e, t, n) {
    var r = n(12),
        i = n(65),
        o = r.extend({
            init: function(e, t) {
                r.call(this, e, t), this.addChild(new i(e))
            }
        });
    o.prototype.name = function() {
        return "EmbedPopup"
    }, o.prototype.createEl = function() {
        return r.prototype.createEl.call(this, "div", {
            className: "vjs-embed-popup"
        })
    }, e.exports = o
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e) {
            videojs.Component.call(this, e)
        }
    });
    n.prototype.createEl = function() {
        var e = this.player(),
            t = e.socials && e.socials.embedSnippet && e.socials.embedSnippet();
        t || (t = "This video can't support the embed");
        var n = '<div class="clearfix"></div><div class="vjs-popup-title">Embed this Video</div><div class="vjs-popup-content"><textarea class="copyToClipboardEl" readonly rows="3">' + t + '</textarea></div><div class="vjs-popup-helper-msg">Please copy the text above</div>';
        return videojs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-embed-popup-content vjs-popup-wrapper",
            innerHTML: n
        })
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Button.extend({
        init: function(e, t) {
            videojs.Button.call(this, e, t), this.player = e, this._enabled = !1
        },
        name: function() {
            return "molPreviousButton"
        }
    });
    n.prototype.buttonText = "Previous", n.prototype.buildCSSClass = function() {
        return "mol-previous-control mol-disabled-control " + videojs.Button.prototype.buildCSSClass.call(this)
    }, n.prototype.onClick = function() {
        this._enabled && this.player.trigger("mol.play.previous.video")
    }, n.prototype.name = function() {
        return "molPreviousVideoButton"
    }, n.prototype.enable = function() {
        this.el().classList.remove("mol-disabled-control"), this._enabled = !0
    }, n.prototype.disable = function() {
        this.el().classList.add("mol-disabled-control"), this._enabled = !1
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Button.extend({
        init: function(e, t) {
            videojs.Button.call(this, e, t), this.player = e, this._enabled = !1
        }
    });
    n.prototype.buttonText = "Skip", n.prototype.buildCSSClass = function() {
        return "mol-skip-control mol-disabled-control " + videojs.Button.prototype.buildCSSClass.call(this)
    }, n.prototype.onClick = function() {
        this._enabled && this.player.trigger("mol.play.next.video")
    }, n.prototype.name = function() {
        return "molSkipVideoButton"
    }, n.prototype.enable = function() {
        this.el().classList.remove("mol-disabled-control"), this._enabled = !0
    }, n.prototype.disable = function() {
        this.el().classList.add("mol-disabled-control"), this._enabled = !1
    }, e.exports = n
}, function(e, t, n) {
    var r = n(1),
        i = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t)
            }
        });
    i.prototype.createEl = function() {
        var e = videojs.Component.prototype.createEl.call(this, "div", {
                className: "vjs-loading-spinner"
            }),
            t = document.createElement("div");
        return r.addClass(t, "vjs-loading-spinner-icon"), e.appendChild(t), e
    }, e.exports = i
}, function(e, t, n) {
    n(70), n(71), n(72), n(98), n(99), n(101), n(103), n(104), n(106), n(107), n(108), n(114), n(117), n(118), n(126), n(127), n(130), n(131), n(144), n(147), n(148), n(152), n(161)
}, function(e, t) {
    videojs.plugin("vjs-api-hooks", function() {
        var e = this,
            t = {},
            n = {},
            r = function e(t, r) {
                for (var i = arguments.length, o = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) o[s - 2] = arguments[s];
                var a, l = (a = r, Array.isArray(a) ? a : Array.from(a)),
                    u = l[0],
                    c = l.slice(1);
                return "function" == typeof u ? u.apply(void 0, [function() {
                    return e.apply(void 0, [t, c].concat(o))
                }].concat(o)) : n[t].apply(n, o)
            };
        e.preEventHook = function(i, o) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if ("function" != typeof o) throw new TypeError("hook needs to be a function");
            t[i] || (t[i] = [], n[i] = e[i].bind(e), e[i] = function() {
                for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                return r.apply(void 0, [i, t[i].map(function(e) {
                    return e.hook
                })].concat(n))
            }), t[i].push({
                priority: s,
                hook: o.bind(e)
            }), t[i] = t[i].sort(function(e, t) {
                return t.priority - e.priority
            })
        }
    })
}, function(e, t) {
    videojs.plugin("duration-plugin", function() {
        var e = this;
        e.ready(function() {
            e.preEventHook("duration", function(t) {
                var n = t();
                return "number" == typeof n && n > 0 ? n : "number" == typeof e.options_.duration ? Math.floor(e.options_.duration / 1e3) : 0
            }), e.trigger("timeupdate")
        })
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(9),
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var o = n(73),
        s = n(75),
        a = n(3),
        l = n(82),
        u = n(83),
        c = n(84),
        d = n(85),
        p = n(86);
    n(89), n(96);
    var h = function() {
        var e = Object(r.getPageCriteria)().nonAdservable;
        return !(void 0 !== e && e) && o()
    };
    videojs.plugin("ads-setup", function(e) {
        var t = this,
            n = this,
            r = void 0,
            o = void 0,
            f = function() {
                n.muted(!1)
            };
        n.on("fullscreenchange", f), n.on("flyout-expand", f), n.ready(function() {
            var f = n.videoAdvertisingMode ? "chromeless" : "dmplayer",
                v = i({
                    vpaidEnabled: !1,
                    platform: f
                }, e, {
                    domain: n.options().isEmbedded ? "notdailymail" : "dailymail",
                    scor: Date.now()
                }, l.getConfig(n.videoAdvertisingMode), u());
            if (o = c(v), v.bidmax) {
                var m = n.videoAdvertisingMode ? {
                    platform: f,
                    targeting: {
                        pos: ["jwplayer"]
                    }
                } : {
                    platform: f,
                    targeting: {
                        pos: ["video"]
                    }
                };
                n["ads-bidmax"]({
                    params: m
                })
            }
            v.adsEnabled = h() && Boolean(v.adsEnabled), n.adsEnabled = v.adsEnabled;
            var y, g = function(e) {
                if (!r || e) {
                    var t = d(o, {
                        currentTime: n.currentTime(),
                        duration: n.options_.duration / 1e3
                    });
                    t.used = !0, r = s(n, i({
                        sync: a.mobile
                    }, n.options(), t))
                }
                return r
            };
            n.adSDK = v.useIMASDK ? "IMA" : "MOL", n["video-ads-plugin"](i({}, v, {
                timeout: v.adsCancelTimeout,
                getAdTag: g
            })), n.on("playerstate.progress.enter.0", function() {
                p(n, o)
            }), n.on("request-reset", function(e) {
                var t = e.video;
                v = i({}, v, t.plugins["ads-setup"]), o = c(v), v.adsEnabled = h() && Boolean(v.adsEnabled), n.adsEnabled = v.adsEnabled, n.trigger({
                    type: "videoAds.reset",
                    options: v
                })
            }), n.on("videoAd.contentResumeRequested", function() {
                n.readyState() > 0 ? n.trigger({
                    type: "videoAd.resetAdTag"
                }) : n.one("loadedmetadata", function() {
                    n.trigger({
                        type: "videoAd.resetAdTag"
                    })
                })
            }), n.on("videoAd.resetAdTag", (y = regeneratorRuntime.mark(function e() {
                var a, l, u, p, f;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!d(o, {
                                    currentTime: n.currentTime(),
                                    duration: n.duration()
                                }) || !v.adsEnabled) {
                                e.next = 6;
                                break
                            }(r = g(!0)).then(function(e) {
                                r = e
                            }), e.next = 18;
                            break;
                        case 6:
                            if (!n.nextVideo) {
                                e.next = 18;
                                break
                            }
                            return e.next = 9, n.nextVideo;
                        case 9:
                            if (a = e.sent, l = i({}, v, {
                                    schedule: void 0,
                                    adPos: void 0
                                }, a.plugins["ads-setup"]), u = c(l), !(p = h() && Boolean(l.adsEnabled))) {
                                e.next = 18;
                                break
                            }
                            return f = d(u, {
                                currentTime: 0,
                                duration: a.duration / 1e3
                            }), (r = s(n, i({
                                sync: !1
                            }, n.options(), a, f, {
                                adsEnabled: p,
                                autoplay: !0
                            }))).then(function(e) {
                                r = e
                            }), e.abrupt("return");
                        case 18:
                            r = null;
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }, e, t)
            }), function() {
                var e = y.apply(this, arguments);
                return new Promise(function(t, n) {
                    return function r(i, o) {
                        try {
                            var s = e[i](o),
                                a = s.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!s.done) return Promise.resolve(a).then(function(e) {
                            r("next", e)
                        }, function(e) {
                            r("throw", e)
                        });
                        t(a)
                    }("next")
                })
            }))
        })
    })
}, function(e, t, n) {
    var r = n(74);
    e.exports = function() {
        return r.isIE11() || !r.isIE()
    }
}, function(e, t) {
    var n = t.isIE11 = function() {
        return -1 !== window.navigator.userAgent.indexOf("rv:11")
    };
    t.isIE = function() {
        var e = window.navigator.userAgent;
        return "Microsoft Internet Explorer" === navigator.appName || -1 !== e.indexOf("Trident/") || n()
    }
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(8),
        s = n(76),
        a = function(e) {
            return e.el().querySelector(".vjs-tech")
        };
    e.exports = function(e, t) {
        var n = a(e),
            l = e.el().querySelector(".video-ads-container"),
            u = function(e) {
                return e.muted() || 0 === e.volume()
            }(e),
            c = void 0 === t.autoplay ? o(e) : t.autoplay,
            d = function(e) {
                return Boolean(e.flyoutState && 0 === e.flyoutState())
            }(e),
            p = e.videoStarts ? e.videoStarts + 1 : 1,
            h = t.cust_params,
            f = void 0 === h ? {} : h,
            v = t.domain,
            m = t.duration,
            y = t.embed,
            g = t["fbia-embed"],
            b = t.grapeshot,
            A = t.headerBiddingParams,
            w = t.indexHeaderParams,
            j = t.isMobile,
            T = t.linkBaseURL,
            E = t.offset,
            _ = t.platform,
            C = t.scor,
            S = t.source,
            k = t.sync,
            x = t.syndicationService,
            P = t.title,
            I = t.videoAdServerUrl,
            M = t.videoId,
            O = b && b.article && b.article.articleURL || void 0,
            B = "object" === i(t.screen) ? t.screen : function(e, t) {
                if (t) return {
                    width: 640,
                    height: 360
                };
                var n = a(e);
                return {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }
            }(e, j);
        return s({
            adEl: l,
            articleURL: O,
            adRequestFramework: e.adSDK,
            auction: e.auction,
            autoplay: c,
            cust_params: r({}, f, w),
            domain: v,
            duration: m,
            embed: Boolean(y),
            fbiaEmbed: g,
            flyaway: d,
            headerBiddingParams: A,
            linkBaseURL: T,
            muted: u,
            offset: E,
            platform: _,
            scor: C,
            screen: B,
            source: S,
            sync: k,
            syndicationService: x,
            title: P,
            videoAdServerUrl: I,
            videoEl: n,
            videoId: M,
            videoStarts: p
        })
    }
}, function(e, t, n) {
    var r = this;
    var i, o, s = n(77),
        a = n(79),
        l = n(81),
        u = (i = regeneratorRuntime.mark(function e(t) {
            var n, i, o, u, c, d, p, h, f, v, m, y, g, b, A, w, j, T, E, _, C, S, k, x, P, I, M, O;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = t.auction, i = t.adRequestFramework, o = t.adEl, u = t.articleURL, c = t.autoplay, d = t.cust_params, p = t.domain, h = t.duration, f = t.embed, v = t.fbiaEmbed, m = t.flyaway, y = t.headerBiddingParams, g = t.linkBaseURL, b = t.offset, A = t.platform, w = t.muted, j = t.scor, T = t.screen, E = t.source, _ = t.sync, C = t.syndicationService, S = t.title, k = t.videoEl, x = t.videoId, P = t.videoStarts, n && n.start({
                            offset: b,
                            platform: A
                        }), I = l({
                            autoplay: c,
                            fbiaEmbed: v,
                            flyaway: m,
                            syndicationService: C,
                            videoAdServerUrl: t.videoAdServerUrl
                        }), e.next = 5, s({
                            adEl: o,
                            articleURL: u,
                            adRequestFramework: i,
                            autoplay: c,
                            cust_params: d,
                            domain: p,
                            duration: h,
                            embed: f,
                            flyaway: m,
                            headerBiddingParams: y,
                            offset: b,
                            platform: A,
                            muted: w,
                            screen: T,
                            source: E,
                            sync: _,
                            title: S,
                            videoAdServerUrl: I,
                            videoEl: k,
                            videoId: x,
                            videoStarts: P
                        });
                    case 5:
                        return M = e.sent, n && n.setCustomParams(M), O = a({
                            customParams: M,
                            linkBaseURL: g,
                            scor: j,
                            screen: T,
                            videoAdServerUrl: I,
                            videoId: x
                        }), n && n.setAdTag(O), e.abrupt("return", O);
                    case 10:
                    case "end":
                        return e.stop()
                }
            }, e, r)
        }), o = function() {
            var e = i.apply(this, arguments);
            return new Promise(function(t, n) {
                return function r(i, o) {
                    try {
                        var s = e[i](o),
                            a = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return Promise.resolve(a).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    });
                    t(a)
                }("next")
            })
        }, function(e) {
            return o.apply(this, arguments)
        });
    e.exports = u
}, function(e, t, n) {
    var r = this,
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var o, s, a = n(78),
        l = function(e) {
            var t = e.cust_params,
                n = e.domain,
                r = e.embed,
                i = e.flyaway,
                o = e.muted,
                s = e.screen,
                a = e.source,
                l = e.title,
                u = e.videoId,
                c = e.videoStarts,
                d = "number" == typeof e.duration ? e.duration / 1e3 : 0,
                p = {
                    length: d > 120 ? 120 : 30 * Math.floor(d / 30),
                    videoWidth: s.width,
                    videoHeight: s.height,
                    play: c,
                    embed: r,
                    ttid: u,
                    domain: n,
                    flyaway: i,
                    s: o ? "off" : "on"
                };
            l && (p.videoTitle = l.replace(/\s/g, "_").replace(/[^_\w]/g, "")), a && (p.video = a.replace(/\s/g, "_")), window.adEnvironment && (p.environment = window.adEnvironment);
            var h = t || {};
            return Object.keys(h).forEach(function(e) {
                p[e] = h[e]
            }), p.sz = s.width + "x" + s.height, p
        },
        u = (o = regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, a(i({}, t, {
                            timeout: 5e3
                        }));
                    case 2:
                        return n = e.sent, e.abrupt("return", l(i({}, t, n), screen));
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, e, r)
        }), s = function() {
            var e = o.apply(this, arguments);
            return new Promise(function(t, n) {
                return function r(i, o) {
                    try {
                        var s = e[i](o),
                            a = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return Promise.resolve(a).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    });
                    t(a)
                }("next")
            })
        }, function(e) {
            return s.apply(this, arguments)
        });
    e.exports = u
}, function(e, t, n) {
    var r = this,
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
    var o = n(13).merge;
    e.exports = function() {
        var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new Promise((e = regeneratorRuntime.mark(function e(t) {
            var s, a, l, u, c, d, p, h, f;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (s = n.headerBiddingParams, a = n.timeout, l = {}, u = !1, c = void 0, d = function() {
                                u || (u = !0, t(l), clearTimeout(c))
                            }, p = function(e, t) {
                                !e && t ? l = o({}, l, t) : d()
                            }, a && (c = setTimeout(d, a)), e.prev = 7, !((h = window.adverts.getVideoTags(i({}, n, s), p)) instanceof Promise)) {
                            e.next = 15;
                            break
                        }
                        return e.next = 12, h;
                    case 12:
                        f = e.sent, p(null, f), d();
                    case 15:
                        e.next = 20;
                        break;
                    case 17:
                        e.prev = 17, e.t0 = e.catch(7), d();
                    case 20:
                    case "end":
                        return e.stop()
                }
            }, e, r, [
                [7, 17]
            ])
        }), t = function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                return function r(i, o) {
                    try {
                        var s = t[i](o),
                            a = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return Promise.resolve(a).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    });
                    e(a)
                }("next")
            })
        }, function(e) {
            return t.apply(this, arguments)
        }))
    }
}, function(e, t, n) {
    var r = n(80);
    e.exports = function(e) {
        var t = e.videoAdServerUrl,
            n = e.linkBaseURL,
            i = e.scor,
            o = e.screen,
            s = e.videoId,
            a = e.customParams;
        return new r(t).correlator(Date.now()).cust_params(a).description_url(n).url(n).scor(i).sz(o.width + "x" + o.height).setRequestNonPersonalizedAds(Boolean(e.npa)).addParam("vid", s).build()
    }
}, function(e, t, n) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(4);

    function s(e) {
        if (!e) throw new TypeError("Missing videoAdServerUrl");
        var t, n = {
            base_url: (t = e.split("?"))[0],
            search: t[1]
        };
        this.base_url = n.base_url, this.params = i({}, {
            env: "vp",
            gdfp_req: 1,
            impl: "s",
            output: "xml_vast4",
            unviewed_position_start: 1,
            hl: "en"
        }, function(e) {
            if (!e) return {};
            return o.queryStringToObj(e, function(e, t) {
                return t && !/(\[.+])/g.test(t)
            })
        }(n.search), {
            output: "xml_vast4"
        })
    }
    s.encodeCustomParams = function(e) {
        if ("object" === (void 0 === e ? "undefined" : r(e))) return Object.keys(e).forEach(function(t) {
            var n = e[t];
            Array.isArray(n) ? e[t] = n.join(",") : e[t] = n
        }), encodeURIComponent(o.objToQueryString(e));
        throw new TypeError("encodeCustomParams only accepts an object map of key value pairs.")
    }, s.prototype.iu = function(e) {
        if (!/^\/[a-zA-z0-9\-_.~]+(\/[a-zA-z0-9\-_.~]+)*/.test(e)) throw new TypeError("'iu' param must follow format: /network_id/directory_tree.../ad_unit");
        return this.params.iu = encodeURIComponent(e), this
    }, s.prototype.sz = function(e) {
        if (!/^[0-9]+x[0-9]+/.test(e)) throw new TypeError("'sz' param must follow format like: 300x400.");
        return this.params.sz = e, this
    }, s.prototype.url = function(e) {
        return this.params.url = encodeURIComponent(o.urlParts(e).href), this
    }, s.prototype.correlator = function(e) {
        if ("number" == typeof e && !isNaN(e)) return this.params.correlator = e, this;
        throw new TypeError("the passed correlator is not a number")
    }, s.prototype.description_url = function(e) {
        return this.params.description_url = encodeURIComponent(o.urlParts(e).href), this
    }, s.prototype.hl = function(e) {
        return this.params.hl = e, this
    }, s.prototype.ciu_szs = function(e) {
        return this.params.ciu_szs = e, this
    }, s.prototype.scp = function(e) {
        return this.params.scp = e, this
    }, s.prototype.cust_params = function(e) {
        return this.params.cust_params = s.encodeCustomParams(e), this
    }, s.prototype.setRequestNonPersonalizedAds = function(e) {
        return (e || void 0 === e) && (this.params.npa = 1), this
    }, s.prototype.scor = function(e) {
        if ("number" == typeof e && !isNaN(e)) return this.params.scor = e, this;
        throw new TypeError("the passed scor is not a number")
    }, s.prototype.addParam = function(e, t) {
        return this.params[e] = t, this
    }, s.prototype.build = function() {
        var e = this.params;
        return ["env", "gdfp_req", "impl", "output", "unviewed_position_start", "hl", "url", "correlator", "description_url"].forEach(function(t) {
            if (!e[t]) throw new TypeError("Error building url, missing required param '" + t + "'")
        }), this.base_url + "?" + o.objToQueryString(this.params)
    }, e.exports = s
}, function(e, t) {
    e.exports = function(e) {
        var t = e.autoplay,
            n = e.fbiaEmbed,
            r = e.flyaway,
            i = e.syndicationService,
            o = e.videoAdServerUrl;
        n && -1 === o.indexOf("dm.videofb") ? o = o.replace(/dm\.video/g, "dm.videofb") : "fbia" === i && -1 === o.indexOf("dm.videofb") ? o = o.replace(/dm\.video/g, "dm.videofb") : "gamp" === i && -1 === o.indexOf("dm.videoamp") && (o = o.replace(/dm\.video/g, "dm.videoamp"));
        var s = "";
        return t && (s += "ap"), r && (s += "fa"), s.length && (o = o.replace(/(dm\.video)([^&]+)?/, "$1$2_" + s)), o
    }
}, function(e, t) {
    function n(e) {
        return window.adsTrackers && window.adsTrackers.isPluginConfiguredOn(e)
    }
    e.exports = {
        getConfig: function(e) {
            var t = {};
            return n("vpaid") && (t.vpaidEnabled = !0), e ? n("bidmax.chromeless") && (t.bidmax = !0) : (n("imaSDK") && (t.useIMASDK = !0), n("bidmax.dmplayer") && (t.bidmax = !0)), t
        }
    }
}, function(e, t, n) {
    var r = n(4);
    e.exports = function() {
        var e = r.queryStringToObj(window.location.search),
            t = {};
        return e.useIMASDK && (t.useIMASDK = "true" === e.useIMASDK), e.bidmax && (t.bidmax = "true" === e.bidmax), e.adsCancelTimeout && (t.adsCancelTimeout = parseInt(e.adsCancelTimeout, 10)), e.referer && (t.domain = e.referer), t
    }
}, function(e, t) {
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    e.exports = function(e) {
        var t = e.schedule;
        return t || (t = e.adPos ? Object.values(e.adPos) : [{}]), t.map(function(t) {
            return n({
                offset: 0,
                used: !1
            }, e, t, {
                cust_params: n({}, e.cust_params, t && t.cust_params)
            })
        }).sort(function(e, t) {
            return e.offset - t.offset
        })
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = t.currentTime,
            r = t.duration;
        return e.filter(function(e) {
            var t = e.minVideoDuration;
            return !t || !r || t <= r
        }).find(function(e) {
            var t = e.offset;
            return !e.used && n <= t
        })
    }
}, function(e, t, n) {
    var r = n(87);
    e.exports = function(e, t) {
        var n = e.el().querySelector(".vjs-play-progress"),
            i = t.filter(function(e) {
                return !e.used && e.offset > 0
            }),
            o = !0,
            s = !1,
            a = void 0;
        try {
            for (var l, u = i[Symbol.iterator](); !(o = (l = u.next()).done); o = !0) {
                var c = l.value;
                r(e, c, n)
            }
        } catch (e) {
            s = !0, a = e
        } finally {
            try {
                !o && u.return && u.return()
            } finally {
                if (s) throw a
            }
        }
    }
}, function(e, t, n) {
    var r = n(88);
    e.exports = function(e, t, n) {
        var i = t.offset,
            o = r(i, e.duration());
        n.parentNode.insertBefore(o, n);
        var s = function t() {
            var n = Math.floor(e.currentTime()) - i;
            n >= 0 && (e.off("timeupdate", t), o.parentNode.removeChild(o), n < 3 && (e.pause(), e.trigger("videoAds.reset"), e.play(), e.one("playerstate.enter.contentPlaying", function() {
                e.trigger("videoAd.resetAdTag")
            })))
        };
        e.on("timeupdate", s), e.on("request-reset", function() {
            e.off("timeupdate", s), o && o.parentNode && o.parentNode.removeChild(o)
        })
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = Math.ceil(100 * e / t),
            r = document.createElement("div");
        return r.classList.add("video-ad-midroll-mark"), r.style.left = n + "%", r.innerHTML = '<div class="top">\n                                      <p>Advertisement</p>\n                                      <i></i>\n                                  </div>', r
    }
}, function(e, t, n) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(8),
        s = n(90),
        a = n(91),
        l = n(92),
        u = n(93),
        c = n(94),
        d = n(95);
    videojs.plugin("video-ads-plugin", function(e) {
        var t = this,
            n = !0,
            p = null,
            h = null,
            f = null,
            v = i({}, e),
            m = v.getAdTag,
            y = t.el().querySelector(".vjs-tech"),
            g = s(),
            b = a();
        g.append(b), t.el().append(g);
        var A = void 0,
            w = void 0,
            j = void 0,
            T = void 0,
            E = function(e) {
                j = !0, console.error("### Video ads error", e), t.trigger({
                    type: "videoAd.error",
                    adUnit: f,
                    error: e
                })
            },
            _ = function() {
                f && (t.muted() ? f.setVolume(0) : f.setVolume(t.volume()))
            },
            C = function() {
                if (f) {
                    var e = b.clientWidth,
                        n = b.clientHeight,
                        r = void 0;
                    r = t.isFullscreen() ? "fullscreen" : e < 400 ? "thumbnail" : "normal", f.resize(e, n, r)
                }
            },
            S = function(e) {
                f = e, t.adUnit = f, g.style.display = "block", t.el().classList.add("video-ad-ready"), t.on("volumechange", _), t.on(["videoAd.resize", "fullscreenchange"], C), window.addEventListener("orientationchange", C), f.on("impression", function() {
                    t.trigger({
                        type: "videoAd.impression",
                        adUnit: f
                    })
                }), f.on("start", function() {
                    T = !0, t.controlBar.addChild(new c(t)), t.el().classList.remove("video-ad-waiting"), t.el().classList.remove("video-ad-ready"), t.el().classList.add("video-ad-playing"), "VPAID" === f.type && t.el().classList.add("video-ad-vpaid"), h && h.paused && f.pause(), t.trigger({
                        type: "videoAd.start",
                        adUnit: f
                    })
                }), f.on("complete", function() {
                    t.trigger({
                        type: "videoAd.complete",
                        adUnit: f
                    })
                }), f.on("pause", function() {
                    t.trigger({
                        type: "pause"
                    })
                }), f.on("resume", function() {
                    t.trigger({
                        type: "play"
                    })
                }), f.on("adProgress", function() {
                    t.trigger({
                        type: "timeupdate"
                    })
                })
            },
            k = function() {
                !w && !j & !T && E(new Error("Ad run canceled by SDK for UNKNOWN reasons")), g.style.display = "none", f = null, p = null, t.off("volumechange", _), t.off(["videoAd.resize", "fullscreenchange"], C), window.removeEventListener("orientationchange", C), t.controlBar.removeChild("AdsLabel"), t.el().classList.remove("video-ad-waiting"), t.el().classList.remove("video-ad-ready"), t.el().classList.remove("video-ad-playing"), t.el().classList.remove("video-ad-vpaid"), t.trigger({
                    type: "videoAd.contentResumeRequested"
                }), delete t.adUnit, h && (u(t, h), h = null)
            };
        t.ready(function() {
            t.preEventHook("play", function(e) {
                A || (A = window.google && window.google.ima && d({
                    videoElement: y,
                    adsContainer: b,
                    useIMASDK: Boolean(v.useIMASDK),
                    vpaidEnabled: Boolean(v.vpaidEnabled)
                })), h && h.paused && (h.paused = !1), t.trigger({
                    type: "play"
                }), n && v.adsEnabled && A && !p ? (n = !1, t.trigger({
                    type: "videoAd.contentPauseRequested"
                }), function() {
                    try {
                        w = !1, j = !1, T = !1;
                        var e = null,
                            n = function(n) {
                                e = A(n, b, {
                                    vpaidEnabled: v.vpaidEnabled,
                                    autoplay: o(t),
                                    moat: {
                                        partnerCode: "mailonlinejsvideo243552997523"
                                    },
                                    onAdReady: S,
                                    onError: E,
                                    onRunFinish: k,
                                    responsive: !0,
                                    timeout: v.timeout || 15e3,
                                    videoElement: y
                                })
                            };
                        p = function() {
                            w = !0, e ? e() : k()
                        }, t.el().classList.add("video-ad-waiting"), h = l(t);
                        var r = m();
                        r instanceof Promise ? m().then(function(e) {
                            w || n(e)
                        }) : n(r)
                    } catch (e) {
                        console.error("### Error initializing the ad run", e), t.play()
                    }
                }()) : p ? f && f.isStarted() && f.resume() : (n && (n = !1, t.trigger({
                    type: "videoAd.contentResumeRequested"
                })), e())
            }), t.preEventHook("pause", function(e) {
                return h && !h.paused && (h.paused = !0), f && f.isStarted() ? f.pause() : e()
            }), t.preEventHook("paused", function(e) {
                return f && f.isStarted() ? f.paused() : e()
            }), t.preEventHook("duration", function(e, t) {
                return f && f.isStarted() && void 0 === t ? f.duration() : e(t)
            }), t.preEventHook("currentTime", function(e) {
                return f && f.isStarted() ? f.currentTime() : e()
            }), t.on("videoAds.reset", function(e) {
                p && p(), "object" === r(e.options) && (v = i({}, v, e.options)), n = !0
            })
        })
    })
}, function(e, t) {
    e.exports = function() {
        var e = document.createElement("div");
        return e.classList.add("video-ads-placeholder"), e.style.width = "100%", e.style.display = "none", e
    }
}, function(e, t) {
    e.exports = function() {
        var e = document.createElement("div");
        return e.classList.add("video-ads-container"), e.style.position = "relative", e.style.width = "100%", e.style.height = "100%", e
    }
}, function(e, t) {
    var n = function(e) {
        var t = e.remoteTextTracks ? e.remoteTextTracks() : [];
        Array.isArray(t) || (t = []);
        var n = [];
        return t.forEach(function(e) {
            n.push({
                mode: e.mode,
                track: e
            }), e.mode = "disabled"
        }), n
    };
    e.exports = function(e) {
        var t = e.el().querySelector(".vjs-tech"),
            r = {
                currentTime: e.currentTime(),
                ended: e.ended(),
                src: e.currentSrc(),
                suppressedTracks: n(e),
                type: e.currentType()
            };
        return t && (r.nativePoster = t.poster, r.style = t.getAttribute("style") || ""), r
    }
}, function(e, t) {
    var n = function(e) {
        return e.readyState() > 1 || (void 0 === e.seekable() || e.seekable().length > 0)
    };
    e.exports = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = e.el().querySelector(".vjs-tech");
        i.src !== t.src && (t.nativePoster && t.nativePoster !== i.poster && (i.poster = t.nativePoster), "style" in t && i.setAttribute("style", t.style), e.one("contentloadedmetadata", function() {
            return function(e) {
                e.suppressedTracks.forEach(function(e) {
                    e.track.mode = e.mode
                })
            }(t)
        }), e.src({
            src: t.src,
            type: t.type
        })), e.load(), Boolean(t.paused) || (n(e) && e.currentTime() === t.currentTime ? e.play() : (e.one("canplay", function() {
            return function e(t, r, i) {
                if (0 !== i)
                    if (n(t))
                        if (t.currentTime() === r.currentTime) t.play();
                        else try {
                            t.one("seeked", function() {
                                t.play()
                            }), t.currentTime(r.currentTime)
                        } catch (e) {
                            console.error(e)
                        } else setTimeout(function() {
                            return e(t, r, i - 1)
                        }, 300);
                else console.error("Failed to resume the content after several attempts")
            }(e, t, r)
        }), function(e) {
            var t = setTimeout(function() {
                e.trigger("canplay")
            }, 2e3);
            e.one("canplay", function() {
                clearTimeout(t)
            })
        }(e)))
    }
}, function(e, t) {
    var n = document.createElement("div");
    n.className = "video-ad-label vjs-control", n.innerHTML = "Advertisement";
    var r = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t), setTimeout(function() {
                var t = e.controlBar && (e.controlBar.getChild("timerControls") || e.controlBar.getChild("currentTimeDisplay"));
                t && e.controlBar.el().insertBefore(n, t.el())
            }, 0)
        },
        name: function() {
            return "AdsLabel"
        }
    });
    r.prototype.createEl = function() {
        return n
    }, e.exports = r
}, function(e, t, n) {
    var r = n(32).createRequestAd,
        i = n(21).runWaterfall;
    e.exports = function(e) {
        var t = e.videoElement,
            n = e.adsContainer,
            o = e.vpaidEnabled;
        return e.useIMASDK && window.google && window.google.ima ? r(t, n, {
            player: {
                type: "videojs",
                version: "4.12.15"
            },
            vpaidEnabled: o
        }) : i
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(5),
        i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        o = n(13).merge,
        s = n(8),
        a = n(97);
    videojs.plugin("ads-bidmax", function(e) {
        var t = this,
            n = null,
            l = function() {
                n = null, t.off("videoAd.impression", c), t.off("videoAd.contentResumeRequested", d)
            },
            u = function() {
                var r = n,
                    i = r.start,
                    a = r.platform,
                    l = r.adTag,
                    u = r.customParams,
                    c = (u = void 0 === u ? {} : u).grapeshot,
                    d = u.dartCCKey,
                    p = r.offset;
                return o({}, e.params, {
                    autoplay: s(t),
                    play: t.videoStarts + 1,
                    tag: l,
                    offset: p,
                    platform: a,
                    targeting: {
                        grapeshot: c,
                        dartCCKey: d
                    },
                    timeSinceStartOfPlayer: Date.now() - i
                })
            },
            c = function(e) {
                var n = e.adUnit;
                r.pageEvents.publish(r.pageEvents.VIDEO_ADVERT_IMPRESSION, i({}, u(), {
                    adImpression: a(t.adSDK, n)
                })), l()
            },
            d = function() {
                n && (r.pageEvents.publish(r.pageEvents.VIDEO_ADVERT_NOT_SHOWN, i({}, u())), l())
            };
        t.auction = {
            setAdTag: function(e) {
                n.adTag = e
            },
            setCustomParams: function(e) {
                n.customParams = e
            },
            start: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (n = e).start = Date.now(), t.on("videoAd.impression", c), t.on("videoAd.contentResumeRequested", d)
            }
        }
    })
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(21).getDetails;
    e.exports = function(e, t) {
        if ("IMA" === e) return r({}, t.creativeAd.g, {
            adSDK: e
        });
        var n = t.videoAdContainer.videoElement;
        if (t.vastChain) {
            var o = i(t.vastChain),
                s = o.adId,
                a = o.adServingId,
                l = o.adSystem,
                u = o.adTitle,
                c = o.advertiser,
                d = o.adWrapperCreativeIds,
                p = o.adWrapperIds,
                h = o.adWrapperSystems,
                f = o.clickThroughUrl,
                v = o.creativeAdId,
                m = o.creativeData,
                y = o.creativeId,
                g = o.description,
                b = o.durationInMs,
                A = o.mediaFiles,
                w = o.pricing,
                j = o.pricingCurrency,
                T = o.pricingModel,
                E = o.skipOffsetInMs,
                _ = o.skippable,
                C = o.universalAdId,
                S = o.universalAdIdRegistry,
                k = o.vastVersion,
                x = o.vpaid,
                P = t.videoAdContainer.element.getBoundingClientRect(),
                I = P.width,
                M = "number" == typeof b ? b / 1e3 : -1,
                O = "number" == typeof E ? E / 1e3 : -1,
                B = {
                    adId: s,
                    adPodInfo: {
                        podIndex: 0,
                        timeOffset: 0,
                        totalAds: 1,
                        adPosition: 1,
                        isBumper: !1,
                        maxDuration: M
                    },
                    adSDK: e,
                    adSystem: l,
                    adServingId: a,
                    adWrapperCreativeIds: d,
                    adWrapperIds: p,
                    adWrapperSystems: h,
                    advertiserName: c,
                    apiFramework: x ? "VPAID" : null,
                    clickThroughUrl: f,
                    creativeAdId: v,
                    creativeId: y,
                    description: g,
                    duration: M,
                    height: P.height,
                    linear: !0,
                    minSuggestedDuration: _ ? O : M,
                    pricing: w,
                    pricingCurrency: j,
                    pricingModel: T,
                    skippable: _,
                    skipTimeOffset: O,
                    title: u,
                    traffickingParameters: m && m.AdParameters,
                    universalAdIdRegistry: S,
                    universalAdIdValue: C,
                    vastVersion: k,
                    vpaid: x,
                    width: I
                },
                L = x ? A[0] : A.find(function(e) {
                    return e.src === n.src
                }) || A[0];
            if (L) {
                var D = L.type,
                    N = L.src,
                    F = L.width,
                    R = L.height,
                    H = L.bitrate;
                B = r({}, B, {
                    contentType: D,
                    mediaUrl: N,
                    vastMediaBitrate: H,
                    vastMediaHeight: R,
                    vastMediaWidth: F
                })
            }
            return B
        }
        return {
            adSDK: e
        }
    }
}, function(e, t) {
    videojs.plugin("cmp", function(e) {
        var t = this;
        if (e.enabled) {
            var n = window;
            n.__cmp("rendered", null, function() {
                var e = document.querySelector(".mol-ads-cmp--banner .mol-ads-cmp--btn-primary");
                e && e.addEventListener("click", t.play.bind(t))
            }), n.__cmp("hasChoiceBeenMade", null, function(e) {
                e || t.one("play", function() {
                    n.__cmp("consentToAll")
                })
            })
        }
    })
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = n(100),
        s = n(0),
        a = n(1),
        l = n(22),
        u = n(4);
    videojs.plugin("social-share", function(e) {
        var t = this,
            n = t.el(),
            c = e,
            d = function(e) {
                return e ? (e = e.replace(/&quot;/g, '"')).replace(/&#39;/g, "'") : ""
            },
            p = function() {
                return d(t.options().title)
            },
            h = function() {
                return d(t.options().descr)
            },
            f = function() {
                return c.placement || "videoplayer"
            },
            v = function() {
                return c.via || window.twitterVia || ""
            },
            m = function(e) {
                var n = t.options().linkBaseURL,
                    o = c.qs;
                if (o && "object" === i(o[e]) && Object.keys(o[e]).length > 0) {
                    var s = n.split("?"),
                        a = s[0],
                        l = u.queryStringToObj(s[1]);
                    return (l = u.objToQueryString(r({}, l, o[e]))) ? a + "?" + l : a
                }
                return n
            },
            y = function() {
                return {
                    referenceId: t.options().referenceId,
                    type: "video_share",
                    version: l.getVideoPlayerVersion(),
                    videoId: t.options().videoId
                }
            },
            g = function() {
                c.disabled = s.isString(c.disabled) ? c.disabled.split(/ +/) : c.disabled, s.forEach(n.className.split(/ +/), function(e) {
                    -1 !== e.indexOf("vjs-disable-social-") && a.removeClass(n, e)
                }), c.disabled && s.forEach(c.disabled, function(e) {
                    a.addClass(n, "vjs-disable-social-" + e)
                })
            };
        g(), t.on("request-reset", function() {
            delete c.qs
        }), t.on("reset", function() {
            c = t.options().plugins["social-share"], g()
        });
        var b = {
            postToFB: function() {
                window.DMS.Facebook.postToFB(f(), JSON.stringify({
                    link: m("facebook"),
                    picture: t.options().thumbnail || t.options().poster || "",
                    name: p(),
                    description: h()
                }), y())
            },
            postToMail: function() {
                o(t.socials.nativeEmailContent()), window.DMS.Email.emailArticle(f(), JSON.stringify({
                    link: m("email"),
                    picture: t.options().thumbnail || t.options().poster || "",
                    name: p(),
                    description: h()
                }), y())
            },
            postToTWTTR: function() {
                var e = t.options().shortURL;
                window.DMS.Twitter.postToTWTTR(f(), JSON.stringify({
                    url: e || m("twitter"),
                    text: p(),
                    via: v()
                }), y())
            },
            postToPinterest: function() {
                var e = m("pinterest");
                window.DMS.Pinterest.postToPinterest(f(), {
                    description: h(),
                    forcedUrl: e,
                    via: v(),
                    media: t.options().poster,
                    type: "image",
                    url: e,
                    title: p()
                }, y())
            },
            postToReddit: function() {
                window.DMS.Reddit.postToReddit(f(), {
                    url: m("reddit"),
                    title: p()
                }, y())
            },
            postToFark: function() {
                window.DMS.Fark.postToFark(f(), {
                    u: m("fark"),
                    h: p()
                }, y())
            },
            postToDiggit: function() {
                window.DMS.Diggit.postToDiggit(f(), {
                    url: m("diggit"),
                    title: p()
                }, y())
            },
            postToLinkedIn: function() {
                window.DMS.LinkedIn.postToLinkedIn(f(), {
                    url: m("linkedin"),
                    title: p()
                }, y())
            },
            embedSnippet: function() {
                var e = c.embedUrl || "";
                return e ? '<iframe allowfullscreen frameborder="0" width="698" height="573" scrolling="no" id="molvideoplayer" title="MailOnline Embed Player" src="' + e + '"></iframe>' : ""
            },
            videoLink: function() {
                return t.options().linkBaseURL
            },
            mailLink: function() {
                return t.options().linkBaseURL
            },
            nativeEmailContent: function() {
                return {
                    title: p(),
                    link: m("email"),
                    app: t.options().linkBaseURL.includes("thisismoney") ? "ThisIsMoney" : "MailOnline",
                    host: (e = t.options().linkBaseURL, new URL(e).hostname)
                };
                var e
            }
        };
        t.socials = b
    })
}, function(e, t) {
    e.exports = function(e) {
        var t = "mailto:?subject=" + e.title + "&body=" + encodeURIComponent(e.link) + "%0D%0A%0D%0AGet the " + e.app + " App: %0D%0A https://" + e.host + "/mobile";
        location.href = t
    }
}, function(e, t, n) {
    var r = n(0),
        i = n(1),
        o = n(14),
        s = n(3);
    videojs.plugin("sources", function(e) {
        ! function(e) {
            var t = e.url;
            if (!r.isString(t)) throw new TypeError("mol-fe-videoplayer Error: on sources plugin, missing url option")
        }(e);
        var t = this,
            n = o(e.url);

        function a() {
            function e(e, n) {
                e ? (t.trigger({
                    type: "sources.error",
                    error: e
                }), t.renditions = []) : (t.renditions = function(e) {
                    var n = i.getDimension(t.el()).width;
                    return "iOS" === s.os ? function(e, t) {
                        var n = c(e.filter(l), t),
                            r = c(e.filter(u), t);
                        return n.concat(r)
                    }(e, n) : c(e.filter(u), n)
                }(function(e) {
                    return e.map(function(e) {
                        return {
                            id: e.id,
                            src: e.url,
                            type: e.type || (t = e.url, n = t.match(/\.([^.\/?]+)(\?[^\/]+)?$/i), i = n && n[1], {
                                ogv: "video/ogg",
                                webm: "video/webm",
                                flv: "video/x-flv",
                                mp4: "video/mp4",
                                m4v: "video/mp4",
                                m3u8: "application/x-mpegURL",
                                ts: "video/MP2T",
                                "3gp": "video/3gpp",
                                mov: "video/quicktime",
                                avi: "video/x-msvideo",
                                wmv: "video/x-ms-wmv"
                            } [i] || "video/" + i),
                            width: e.frameWidth,
                            height: e.frameHeight,
                            videoContainer: e.videoContainer,
                            bitrate: e.encodingRate,
                            videoCodec: e.videoCodec,
                            duration: r.isNumber(e.duration) ? e.duration : 0
                        };
                        var t, n, i
                    })
                }(n && n.renditions || [])), t.renditions.length > 0 && t.changeRendition(t.renditions)), t.trigger({
                    type: "mol.sources.updated",
                    renditions: t.renditions
                })
            }
            n.get(function(n, i) {
                var o = t._states && t._states.state && t._states.state.get();
                "adsWaiting" === o || "adPlaying" === o ? r.once(t, ["videoAd.contentResumeRequested", "request-reset"], function(t) {
                    "request-reset" !== t.type && e(n, i)
                }) : e(n, i)
            })
        }

        function l(e) {
            return "M2TS" === e.videoContainer
        }

        function u(e) {
            return "M2TS" !== e.videoContainer
        }

        function c(e, t) {
            return e.sort(function(e, n) {
                return Math.abs(t - e.width) - Math.abs(t - n.width)
            })
        }
        e.url = null, t.ready(a), t.on("reset", function() {
            var e = t.options().plugins;
            n = e && e.sources ? o(e.sources.url) : o(null), a()
        }), t.changeRendition = function(e, n) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.noop,
                o = r.extend({}, function(e) {
                    return {
                        currentTime: e.currentTime(),
                        playing: !e.paused()
                    }
                }(t), n || {});
            t.trigger("mol.sources.renditionChanging"), o.playing && t.pause();
            t.src(e),
                function(e, t) {
                    var n = (r.isArray(t) ? t[0] : t).duration / 1e3;
                    n > 0 && (e.duration(n), e.trigger("timeupdate"))
                }(t, e),
                function(e, t, n) {
                    t.playing && (e.load(), e.play());
                    e.one("loadeddata", function() {
                        e.currentTime(t.currentTime), n()
                    })
                }(t, o, function() {
                    t.trigger("mol.sources.renditionChanged"), i()
                })
        }
    })
}, function(e, t, n) {
    var r = n(4),
        i = n(0);

    function o(e) {
        this.message = "HttpRequest Error: " + (e || "")
    }

    function s(e) {
        if (!i.isFunction(e)) throw new o("Missing XMLHttpRequest factory method");
        this.createXhr = e
    }

    function a() {
        var e = new XMLHttpRequest;
        return "withCredentials" in e || (e = new XDomainRequest), e
    }
    o.prototype = new Error, o.prototype.name = "HttpRequest Error", s.prototype.run = function(e, t, n, s) {
        ! function(e, t, n) {
            if (!i.isString(e) || i.isEmptyString(e)) throw new o("Invalid url '" + e + "'");
            if (!i.isFunction(t)) throw new o("Invalid handler '" + t + "' for the http request");
            if (i.isDefined(n) && !i.isObject(n)) throw new o("Invalid options map '" + n + "'")
        }(t, n, s);
        var a = this.createXhr(),
            l = void 0;
        s = s || {};
        var u = i.isNumber(s.timeout) ? s.timeout : 0;

        function c() {
            n(-1, null, null, "")
        }
        a.open(e, r.urlParts(t).href, !0), s.headers && function(e, t) {
            i.forEach(t, function(t, n) {
                i.isDefined(t) && e.setRequestHeader(n, t)
            })
        }(a, s.headers), s.withCredentials && (a.withCredentials = !0), a.onload = function() {
            a.getAllResponseHeaders || (a.getAllResponseHeaders = function() {
                return null
            }), a.status || (a.status = 200), i.isDefined(l) && (clearTimeout(l), l = void 0);
            var e = a.statusText || "",
                t = "response" in a ? a.response : a.responseText,
                r = 1223 === a.status ? 204 : a.status;
            n(r, t, a.getAllResponseHeaders(), e)
        }, a.onerror = c, a.onabort = c, a.send(), u > 0 && (l = setTimeout(function() {
            a && a.abort()
        }, u))
    }, s.prototype.get = function(e, t, n) {
        this.run("GET", e, function(e, n, r, i) {
            ! function(e) {
                return 200 <= e && e < 300
            }(e) ? t(new o(i), n, e, r, i): t(null, n, e, r, i)
        }, n)
    }, s.prototype.getJSON = function(e, t, n) {
        this.get(e, function(e, n, r, i, o) {
            if (e) t(e, n, r, i, o);
            else try {
                var s = JSON.parse(n);
                t(null, s, r, i, o)
            } catch (e) {
                t(new Error("response is not a valid json"), n, r, i, o)
            }
        }, n)
    }, s.prototype.getJSONP = function(e, t, n, r) {
        var i = !1;
        n = n || 3e3, r = r || "_cb_" + Math.floor(1e5 * Math.random()).toString(), setTimeout(function() {
            i || (t("JSONP request timed up (or returned an error)"), delete window[r])
        }, n), window[r] = function(e) {
            i = !0, t(null, e), delete window[r]
        };
        var o = document.createElement("script");
        o.src = e + "?cb=" + r, document.head.appendChild(o)
    };
    var l = new s(a);
    e.exports = {
        http: l,
        HttpRequest: s,
        HttpRequestError: o,
        createXhr: a
    }
}, function(e, t, n) {
    var r = n(1);
    videojs.plugin("streaming", function() {
        this.options().isStreaming && (r.addClass(this.el(), "streaming"), r.addClass(this.el().parentNode, "vjs-video-container-streaming"))
    })
}, function(e, t, n) {
    var r = n(1),
        i = n(105);
    videojs.plugin("title", function() {
        var e = this;

        function t() {
            var t = e.options();
            e.titleChild && (r.remove(e.titleChild.el_), e.removeChild(e.titleChild), e.titleChild.dispose(), delete e.titleChild), t.title && !t.isTitleHidden && (e.titleChild = e.addChild(new i(e, {
                text: t.title
            })))
        }
        t(), e.on("reset", t)
    })
}, function(e, t, n) {
    var r = n(1),
        i = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t);
                var n = e.el_,
                    i = this.el_;
                setTimeout(function() {
                    r.prependChild(n, i)
                }, 0)
            }
        });
    i.prototype.createEl = function() {
        var e = '<div class="vjs-title-text"><div>' + this.options().text + "</div></div>",
            t = this.player_,
            n = "DAILYMAILTV" === (t.options().source || "").toUpperCase(),
            i = n ? "vjs-title vjs-title-dmtv" : "vjs-title",
            o = n ? '<div class="dmtv"></div>' + e : e;
        return t.el_.parentNode && r.hasClass(t.el_.parentNode, "vjs-span-one-col") && r.addClass(t.el_.parentNode, "vjs-one-col-title"), videojs.createEl("div", {
            className: i,
            innerHTML: o
        })
    }, i.prototype.name = function() {
        return "Title"
    }, e.exports = i
}, function(e, t, n) {
    var r = n(23);
    videojs.plugin("history", function() {
        var e = this;
        e.on("playerstate.progress.enter.25", function() {
            var t = e.options().referenceId;
            r.push(t)
        })
    })
}, function(e, t, n) {
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    };
    var i = n(3);
    videojs.plugin("autoplay-next-video", function() {
        var e = this,
            t = this;
        void 0 === t.autoplayIndex && (t.autoplayIndex = 0), i.mobile && t.el().querySelector(".vjs-tech").setAttribute("playsinline", "");
        var n, o, s = (n = regeneratorRuntime.mark(function n() {
            var i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, t.nextVideo;
                    case 2:
                        i = e.sent, t.trigger({
                            type: "request-reset",
                            video: r({}, i),
                            autoplay: !0
                        });
                    case 4:
                    case "end":
                        return e.stop()
                }
            }, n, e)
        }), o = function() {
            var e = n.apply(this, arguments);
            return new Promise(function(t, n) {
                return function r(i, o) {
                    try {
                        var s = e[i](o),
                            a = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    if (!s.done) return Promise.resolve(a).then(function(e) {
                        r("next", e)
                    }, function(e) {
                        r("throw", e)
                    });
                    t(a)
                }("next")
            })
        }, function() {
            return o.apply(this, arguments)
        });
        t.on("playerstate.enter.started", function() {
            t.nextVideo = new Promise(function(e, n) {
                t.fetchRelatedVideos(function(t, r) {
                    !t && r && r.length ? e(r[0]) : n(t || new Error("Invalid related videos list"))
                })
            })
        }), t.on("playerstate.enter.autoplay", s), t.on("playerstate.leave.autoplay", function() {
            t.autoplayIndex += 1
        })
    })
}, function(e, t, n) {
    var r;

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = n(109),
        s = n(7),
        a = n(1),
        l = n(0),
        u = n(15),
        c = n(110),
        d = n(24),
        p = -1,
        h = 0,
        f = 1,
        v = (i(r = {}, p, "off"), i(r, h, "side"), i(r, f, "expand"), r),
        m = p,
        y = h,
        g = f,
        b = 200,
        A = "vjs-flyout-on",
        w = [];
    w[g] = "vjs-flyout-center", w[y] = "vjs-flyout-side";
    var j = {
            viewportOffset: 0,
            viewportGraceOffset: .75,
            animations: !0,
            easing: "easeOut",
            easingScale: "easeOut",
            animTime: 400,
            animTimeWait: 400,
            expandOnFirstPlay: Boolean(window.PageCriteria && window.PageCriteria.flyoutExpandOnFirstPlay),
            switchoffOnEnd: !0
        },
        T = !1,
        E = 100;
    videojs.plugin("flyout", function(e) {
        var t = this,
            n = t.el(),
            r = n.parentNode,
            i = r.className,
            p = n.offsetHeight,
            h = m,
            f = m,
            _ = {};
        _[m] = function(e) {
            Y(r, k, e, m, function() {
                r.className = i, a.removeClass(k, A)
            }), t.on("playerstate.enter.adPlaying", q)
        }, _[y] = function(e) {
            l.forEach(w, function(e) {
                a.removeClass(k, e)
            }), l.forEach(C, function(e) {
                a.removeClass(r, e)
            }), a.addClass(r, C[y]), a.addClass(k, A), a.addClass(k, w[y]), Y(k, r, e, y), t.on("playerstate.enter.adPlaying", q)
        };
        var C = [];
        C[y] = "vjs-span-one-col", C[g] = "vjs-span-three-col";
        var S = d.overwriteAdOptions(l.extend({}, j, e));
        t.addChild(new c(t)), t.flyoutState = function() {
            return h
        }, t.flyoutStateName = function() {
            return v[h]
        };
        var k = d.createElBefore(i + " vjs-flyout-placeholder", r);
        k.style.backgroundImage = "url(" + t.poster() + ")", k.innerHTML = '<div class="vjs-flyout-placeholder-content"><span>.</span><span>.</span><span>.</span></div> <div class="vjs-has-started vjs-visually-ready vjs-controls-enabled vjs-default-skin video-js vjs-paused vjs-user-inactive"></div>';
        var x = function(e, t) {
                var n = k.querySelector(".vjs-flyout-placeholder-content");
                if (n) {
                    var r = e + "<span>.</span><span>.</span><span>.</span>";
                    t && (r += '<div class="extraText">' + t + "</div>"), n.innerHTML = r
                }
            },
            P = function() {
                return x("Video playing bottom right", "Click here to expand to full page")
            };
        k.addEventListener("click", function() {
            h === y && t.trigger("flyout-expand")
        });
        var I = d.createElBefore("vjs-flyout-wrapper-absolute", r),
            M = d.createElBefore("vjs-flyout-wrapper-fixed", I);
        d.wrapElement(r, I), d.wrapElement(I, M);
        var O = d.getVerticalOffset(),
            B = 0,
            L = null,
            D = !1,
            N = void 0;
        t.expandOnFirstPlay = S.expandOnFirstPlay;
        var F = function() {
                s.defer(Q)
            },
            R = l.debounce(function() {
                L = 0, F()
            }, 400);
        a.addEventListener(window, "scroll", function() {
            var e = d.getVerticalOffset();
            L = e - O, O = e, L > 0 ? B = 0 : B += Math.abs(L)
        }), a.addEventListener(window, "resize", R), a.addEventListener(window, "scroll", F);
        var H = void 0,
            V = function() {
                return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
            },
            U = l.throttle(function() {
                void 0 !== H && h === g && Math.abs(H - V()) > 100 && t.trigger("flyout-minimize")
            }, 100);
        a.addEventListener(window, "scroll", U), t.on("dispose", function() {
            k.parentNode.removeChild(k), a.removeEventListener(window, "resize", R), a.removeEventListener(window, "scroll", F), a.removeEventListener(window, "scroll", U), setTimeout(function() {
                M.parentNode.removeChild(M)
            }, 100)
        }), t.on("flyout-minimize", function() {
            z(y), P(), t.flyoutExpanded = !1, a.removeClass(k, w[g]), a.addClass(k, w[y]), a.removeClass(r, C[g]), a.addClass(r, C[y]), t.trigger("videoAd.resize")
        }), t.on("flyout-expand", function() {
            z(g), x("Video playing inline"), t.flyoutExpanded = !0, a.removeClass(k, w[y]), a.addClass(k, w[g]), a.removeClass(r, C[y]), a.addClass(r, C[g]), t.trigger("videoAd.resize"), H = V()
        }), t.on("flyout-switchon", function(e) {
            if (h !== m) return;
            t.expandOnFirstPlay = !1, P(), a.removeClass(r, "vjs-span-two-col"), h = y, W(e.animationOff), t.flyoutOn = !0
        }), t.on("flyout-switchoff", function(e) {
            if (h === m) return;
            h = m, W(e.animationOff), t.flyoutOn = !1
        }), t.on("flyout-close", function() {
            t.pause(), t.trigger({
                type: "flyout-switchoff",
                animationOff: !0
            })
        }), t.on("playerstate.enter.standby", function() {
            var e = S.viewportGraceOffset * p;
            S.switchoffOnEnd && a.isElementInViewport(k, e) && t.trigger("flyout-switchoff")
        }), t.expandOnFirstPlay && t.ready(function() {
            t.preEventHook("play", function(e) {
                if (t.expandOnFirstPlay && (i = r.className), !t.expandOnFirstPlay || t.isFullscreen()) return t.expandOnFirstPlay = !1, void e();
                t.expandOnFirstPlay = !1, T = !0, t.one("flyout-switch-done", function() {
                    t.trigger("flyout-expand"), e()
                }), t.trigger({
                    type: "flyout-switchon",
                    animationOff: !0
                })
            }, 1)
        }), d.onDisableForceFlyout(function() {
            var e, n;
            t.forceFlyOutInProgress && t.trigger("flyout-close"), e = t.options(), (n = e.plugins.flyout.forceFlyout || {}).enabled = !1, n.active = !1, e.plugins.flyout.forceFlyout = n
        }), R();
        var W = l.throttle(function(e) {
            var t = _[h];
            f !== h && t(e)
        }, S.animTime + S.animTimeWait);

        function q() {
            t.trigger("videoAd.resize")
        }

        function z(e) {
            h = e, f = e
        }

        function G() {
            return !u(t) && a.hasClass(t.el(), "vjs-video-finished") && !(t.options().plugins || {})["autoplay-next-video"]
        }

        function X(e, t) {
            var n = a.elementPositionInViewport(e, t);
            return "INSIDE" !== n && 0 !== L && ("ABOVE" === n ? L >= 0 : "INSIDE" !== n && B >= b)
        }

        function Q() {
            if (t.isFullscreen()) D || (N = t.flyoutState(), t.trigger({
                type: "flyout-switchoff",
                animationOff: !0
            }), D = !0);
            else {
                if (D) return N !== m && t.trigger({
                    type: "flyout-switchon",
                    animationOff: !0
                }), N === g && t.trigger("flyout-expand"), void(D = !1);
                var e = (h === m ? S.viewportOffset : S.viewportGraceOffset) * p;
                if (function(e) {
                        if (DM.molContentPlayer) {
                            var n = DM.molContentPlayer.el(),
                                r = n.getBoundingClientRect();
                            if (r.bottom > -1 * E) return !1
                        }
                        return !T && !t.hasStarted() && X(k, e) && !t.options().isMobile
                    }(e) && function() {
                        var e = t.options().plugins.flyout;
                        return e.forceFlyout && (e.forceFlyout.active || e.forceFlyout.enabled)
                    }()) return t.muted(!0), T = !0, t.forceFlyOutInProgress = !0, t.trigger("flyout-switchon"), t.one("flyout-switch-done", function() {
                    t.play(!0)
                }), void t.one("flyout-switchoff", function() {
                    t.forceFlyOutInProgress = !1
                });
                !G() && t.paused() && h === m || (h === m ? G() || !X(k, e) || DM.molContentPlayer || t.trigger("flyout-switchon") : function(e, n) {
                    return !!(t.forceFlyOutInProgress && DM.molContentPlayer && DM.molContentPlayer.el().getBoundingClientRect().bottom > E) || !!G() && "INSIDE" === a.elementPositionInViewport(e, n)
                }(k, e) && t.trigger("flyout-switchoff"))
            }
        }

        function Y(e, n, i, s, u) {
            function c() {
                u(), f = s, t.trigger("flyout-switch-done"), t.trigger("videoAd.resize"), t.trigger("resize")
            }
            l.isFunction(u) || (u = l.noop), S.animations && !Boolean(i) ? (o.hide(r), o.transform(e, n, {
                duration: S.animTime,
                easing: o[S.easing],
                easingScale: o[S.easingScale],
                overrideClone: function(e, t) {
                    if (0 === t) return e.cloneNode()
                },
                appendToBody: !0,
                done: function() {
                    a.removeClass(document.body, "ramjet"), o.show(r), c()
                }
            }), a.addClass(document.body, "ramjet")) : c()
        }
    }), d.onDisableForceFlyout(function() {
        var e = window.DM && window.DM.molFeComponents;
        e.getConfig && e.getConfig("mol-fe-videoplayer").then(function(t) {
            e.setConfig && e.setConfig("mol-fe-videoplayer", l.extend(t, {
                plugins: {
                    flyout: {
                        forceFlyout: {
                            enabled: !1
                        }
                    }
                }
            }))
        })
    })
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        var e = {
                classCallCheck: function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
            },
            t = ["length", "parentRule"],
            n = "undefined" != typeof CSS2Properties ? Object.keys(CSS2Properties.prototype) : Object.keys(document.createElement("div").style).filter(function(e) {
                return !~t.indexOf(e)
            }),
            r = "http://www.w3.org/2000/svg",
            i = void 0;
        try {
            (i = document.createElementNS(r, "svg")).style.position = "fixed", i.style.top = i.style.left = "0", i.style.width = i.style.height = "100%", i.style.overflow = "visible", i.style.pointerEvents = "none", i.setAttribute("class", "mogrify-svg")
        } catch (e) {
            console.log("The current browser doesn't support SVG")
        }
        var o = !1;

        function s(e, t, o, s) {
            var a = e.namespaceURI === r,
                l = e.getBoundingClientRect(),
                u = l.left,
                c = l.right,
                d = l.top,
                p = l.bottom,
                h = window.getComputedStyle(e),
                f = function e(t, r, i) {
                    var o = i ? i(t, r) : t.cloneNode();
                    if (void 0 !== o) {
                        var s = void 0,
                            a = void 0,
                            l = void 0,
                            u = void 0;
                        if (1 === t.nodeType)
                            for (s = window.getComputedStyle(t), n.forEach(function(e) {
                                    o.style[e] = s[e]
                                }), a = t.childNodes.length, l = 0; l < a; l += 1)(u = e(t.childNodes[l], r + 1, i)) && o.appendChild(u);
                        return o
                    }
                }(e, 0, o),
                v = {
                    node: e,
                    clone: f,
                    isSvg: a,
                    cx: (u + c) / 2,
                    cy: (d + p) / 2,
                    width: c - u,
                    height: p - d,
                    transform: null,
                    borderRadius: null
                };
            if (a) {
                var m = e.getScreenCTM();
                v.transform = "matrix(" + [m.a, m.b, m.c, m.d, m.e, m.f].join(",") + ")", v.borderRadius = [0, 0, 0, 0], i.appendChild(f)
            } else {
                if (t) f.style.position = "fixed", f.style.top = d - parseInt(h.marginTop, 10) + "px", f.style.left = u - parseInt(h.marginLeft, 10) + "px";
                else {
                    var y = e.offsetParent;
                    if (null === y || y === document.body || s) {
                        var g = document.documentElement;
                        f.style.position = "absolute", f.style.top = d + window.pageYOffset - g.clientTop - parseInt(h.marginTop, 10) + "px", f.style.left = u + window.pageXOffset - g.clientLeft - parseInt(h.marginLeft, 10) + "px"
                    } else {
                        var b = window.getComputedStyle(y),
                            A = y.getBoundingClientRect();
                        f.style.position = "absolute", f.style.top = d - parseInt(h.marginTop, 10) - (A.top - parseInt(b.marginTop, 10)) + "px", f.style.left = u - parseInt(h.marginLeft, 10) - (A.left - parseInt(b.marginLeft, 10)) + "px"
                    }
                }
                v.transform = "", v.borderRadius = [parseFloat(h.borderTopLeftRadius), parseFloat(h.borderTopRightRadius), parseFloat(h.borderBottomRightRadius), parseFloat(h.borderBottomLeftRadius)], s ? document.body.appendChild(f) : e.parentNode.appendChild(f)
            }
            return v
        }

        function a(e) {
            e.__ramjetOriginalTransition__ = e.style.transition, e.style.transition = "", e.style.opacity = 0
        }

        function l(e) {
            e.style.transition = "", e.style.opacity = 1, e.__ramjetOriginalTransition__ && setTimeout(function() {
                e.style.transition = e.__ramjetOriginalTransition__
            })
        }

        function u(e, t, n, r, i, o, s, a, l) {
            var u = e ? "translate(" + t + " " + n + ") scale(" + (1 + l * o) + " " + (1 + l * s) + ") translate(" + -t + " " + -n + ") translate(" + a * r + " " + a * i + ")" : "translate(" + a * r + "px," + a * i + "px) scale(" + (1 + l * o) + "," + (1 + l * s) + ")";
            return u
        }

        function c(e, t, n, r, i) {
            var o = 1 + i * n,
                s = 1 + i * r;
            return e.map(function(e, n) {
                var r = t[n],
                    a = (e + i * (r - e)) / o,
                    l = (e + i * (r - e)) / s;
                return a + "px " + l + "px"
            })
        }

        function d(e) {
            return e
        }
        var p = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            },
            h = function t(n, r, i) {
                e.classCallCheck(this, t);
                var o = r.cx - n.cx,
                    s = r.cy - n.cy,
                    a = r.width / n.width - 1,
                    l = r.height / n.height - 1,
                    h = n.width / r.width - 1,
                    v = n.height / r.height - 1,
                    m = Date.now(),
                    y = i.duration || 400,
                    g = i.easing || d,
                    b = i.easingScale || g;
                ! function e() {
                    var t = Date.now(),
                        d = t - m;
                    if (d > y) return n.clone.parentNode.removeChild(n.clone), r.clone.parentNode.removeChild(r.clone), void(i.done && i.done());
                    var A = g(d / y),
                        w = b(d / y);
                    n.clone.style.opacity = 1 - A, r.clone.style.opacity = A;
                    var j = c(n.borderRadius, r.borderRadius, a, l, A),
                        T = c(r.borderRadius, n.borderRadius, h, v, 1 - A);
                    f(n.clone, j), f(r.clone, T);
                    var E = n.cx + o * A,
                        _ = n.cy + s * A,
                        C = u(n.isSvg, E, _, o, s, a, l, A, w) + " " + n.transform,
                        S = u(r.isSvg, E, _, -o, -s, h, v, 1 - A, 1 - w) + " " + r.transform;
                    n.isSvg ? n.clone.setAttribute("transform", C) : n.clone.style.transform = n.clone.style.webkitTransform = n.clone.style.msTransform = C, r.isSvg ? r.clone.setAttribute("transform", S) : r.clone.style.transform = r.clone.style.webkitTransform = r.clone.style.msTransform = S, p(e)
                }()
            };

        function f(e, t) {
            e.style.borderTopLeftRadius = t[0], e.style.borderTopRightRadius = t[1], e.style.borderBottomRightRadius = t[2], e.style.borderBottomLeftRadius = t[3]
        }
        var v = document.createElement("div"),
            m = !0,
            y = void 0,
            g = void 0,
            b = void 0,
            A = void 0,
            w = void 0,
            j = void 0,
            T = void 0,
            E = void 0;
        !window.ActiveXObject && "ActiveXObject" in window || !("transform" in v.style || "webkitTransform" in v.style) || !("animation" in v.style || "webkitAnimation" in v.style) ? m = !1 : (m = !0, y = "transform" in v.style ? "transform" : "-webkit-transform", "animation" in v.style ? (g = "@keyframes", b = "animationDirection", A = "animationDuration", w = "animationIterationCount", j = "animationName", T = "animationTimingFunction", E = "animationend") : (g = "@-webkit-keyframes", b = "webkitAnimationDirection", A = "webkitAnimationDuration", w = "webkitAnimationIterationCount", j = "webkitAnimationName", T = "webkitAnimationTimingFunction", E = "webkitAnimationEnd"));
        var _ = function t(n, r, i) {
            e.classCallCheck(this, t);
            var o = function(e, t, n) {
                    var r, i = t.cx - e.cx,
                        o = t.cy - e.cy,
                        s = t.width / e.width - 1,
                        a = t.height / e.height - 1,
                        l = e.width / t.width - 1,
                        p = e.height / t.height - 1,
                        h = n.easing || d,
                        f = n.easingScale || h,
                        v = n.duration / 50,
                        m = [],
                        g = [];

                    function b(n, r, d) {
                        var h = e.cx + i * r,
                            f = e.cy + o * r,
                            v = c(e.borderRadius, t.borderRadius, s, a, r),
                            b = c(t.borderRadius, e.borderRadius, l, p, 1 - r),
                            A = u(!1, h, f, i, o, s, a, r, d) + " " + e.transform,
                            w = u(!1, h, f, -i, -o, l, p, 1 - r, 1 - d) + " " + t.transform;
                        m.push("\n\t\t\t" + n + "% {\n\t\t\t\topacity: " + (1 - r) + ";\n\t\t\t\tborder-top-left-radius: " + v[0] + ";\n\t\t\t\tborder-top-right-radius: " + v[1] + ";\n\t\t\t\tborder-bottom-right-radius: " + v[2] + ";\n\t\t\t\tborder-bottom-left-radius: " + v[3] + ";\n\t\t\t\t" + y + ": " + A + ";\n\t\t\t}"), g.push("\n\t\t\t" + n + "% {\n\t\t\t\topacity: " + r + ";\n\t\t\t\tborder-top-left-radius: " + b[0] + ";\n\t\t\t\tborder-top-right-radius: " + b[1] + ";\n\t\t\t\tborder-bottom-right-radius: " + b[2] + ";\n\t\t\t\tborder-bottom-left-radius: " + b[3] + ";\n\t\t\t\t" + y + ": " + w + ";\n\t\t\t}")
                    }
                    for (r = 0; r < v; r += 1) {
                        var A = r / v * 100,
                            w = h(r / v),
                            j = f(r / v);
                        b(A, w, j)
                    }
                    return b(100, 1, 1), m = m.join("\n"), g = g.join("\n"), {
                        fromKeyframes: m,
                        toKeyframes: g
                    }
                }(n, r, i),
                s = o.fromKeyframes,
                a = o.toKeyframes,
                l = "_" + ~~(1e6 * Math.random()),
                p = "_" + ~~(1e6 * Math.random()),
                h = g + " " + l + " { " + s + " } " + g + " " + p + " { " + a + " }",
                f = function(e) {
                    var t = document.createElement("style");
                    t.type = "text/css";
                    var n = document.getElementsByTagName("head")[0],
                        r = t.styleSheet;
                    return r ? r.cssText = e : t.innerHTML = e, n.appendChild(t),
                        function() {
                            return n.removeChild(t)
                        }
                }(h);
            n.clone.style[b] = "alternate", n.clone.style[A] = i.duration / 1e3 + "s", n.clone.style[w] = 1, n.clone.style[j] = l, n.clone.style[T] = "linear", r.clone.style[b] = "alternate", r.clone.style[A] = i.duration / 1e3 + "s", r.clone.style[w] = 1, r.clone.style[j] = p, r.clone.style[T] = "linear";
            var v = void 0,
                m = void 0;

            function _() {
                v && m && (n.clone.parentNode.removeChild(n.clone), r.clone.parentNode.removeChild(r.clone), i.done && i.done(), f())
            }
            n.clone.addEventListener(E, function() {
                v = !0, _()
            }), r.clone.addEventListener(E, function() {
                m = !0, _()
            })
        };
        return {
            transform: function(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                "function" == typeof n && (n = {
                    done: n
                }), "duration" in n || (n.duration = 400);
                var a = !!n.appendToBody,
                    l = function(e) {
                        for (; null !== e;) {
                            if ("fixed" === window.getComputedStyle(e).position) return !0;
                            e = e.namespaceURI === r ? e.parentNode : e.offsetParent
                        }
                        return !1
                    }(t),
                    u = s(e, l, n.overrideClone, a),
                    c = s(t, l, n.overrideClone, a);
                return (u.isSvg || c.isSvg && !o) && (document.body.appendChild(i), o = !0), !m || n.useTimer || u.isSvg || c.isSvg ? new h(u, c, n) : new _(u, c, n)
            },
            hide: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                t.forEach(a)
            },
            show: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                t.forEach(l)
            },
            linear: d,
            easeIn: function(e) {
                return Math.pow(e, 3)
            },
            easeOut: function(e) {
                return Math.pow(e - 1, 3) + 1
            },
            easeInOut: function(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }
        }
    }()
}, function(e, t, n) {
    var r = n(111),
        i = n(112),
        o = n(113),
        s = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e);
                var n = new r(e, t),
                    s = new i(e, t),
                    a = new o(e, t);
                this.addChild(n), this.addChild(s), this.addChild(a)
            }
        });
    s.className = "vjs-flyout-control", s.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: s.className
        })
    }, e.exports = s
}, function(e, t) {
    var n = videojs.Button.extend({});
    n.prototype.createEl = function() {
        return videojs.createEl("span", {
            className: "vjs-flyout-minimize vjs-flyout-button",
            innerHTML: "Minimize"
        })
    }, n.prototype.onClick = function() {
        this.player().trigger("flyout-minimize")
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Button.extend({});
    n.prototype.createEl = function() {
        return videojs.createEl("span", {
            className: "vjs-flyout-expand vjs-flyout-button",
            innerHTML: "Expand"
        })
    }, n.prototype.onClick = function() {
        this.player().trigger("flyout-expand")
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Button.extend({});
    n.prototype.createEl = function() {
        return videojs.createEl("span", {
            className: "vjs-flyout-close vjs-flyout-button",
            innerHTML: "Close"
        })
    }, n.prototype.onClick = function() {
        this.player().trigger("flyout-close")
    }, e.exports = n
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(14),
        o = n(0),
        s = n(115);
    videojs.plugin("playlist", function(e) {
        var t = this,
            n = o.extend({}, e),
            a = i(n.videos),
            l = void 0,
            u = e.cycle;

        function c(e) {
            a.get(function(n, r) {
                n && t.trigger({
                    type: "warning",
                    message: "plugin.playlist: " + n.message
                }), e(r || [])
            })
        }

        function d(e) {
            var n = t.playlistCounter;
            c(function(t) {
                if (n >= t.length - 1) {
                    if (!u) return;
                    n = 0
                } else n++;
                e(n)
            })
        }

        function p(e) {
            c(function(n) {
                var i = n[e];
                i && (t.playlistCounter = e, t.trigger({
                    type: "playlist-play",
                    index: e
                }), t.trigger({
                    type: "request-reset",
                    video: r({}, i),
                    autoplay: !0
                }))
            })
        }
        this.playlistCounter = 0, t.previous = function() {
            var e, n;
            e = p, n = t.playlistCounter, c(function(t) {
                if (n <= 0) {
                    if (!u) return;
                    n = t.length - 1
                } else n--;
                e(n)
            })
        }, t.next = function() {
            d(p)
        }, t.gotoVideo = function(e) {
            p(e)
        }, t.on("playerstate.enter.ended", function() {
            l && l.hide(), setTimeout(t.next, 10)
        }), t.on("mol.playlist.next", t.next), t.on("playerstate.progress.enter.50", function() {
            l && l.show()
        }), t.on("playerstate.enter.started", function() {
            l && (t.removeChild(l), l.dispose(), l = void 0, t.nextVideo = void 0), c(function(e) {
                d(function(n) {
                    var r = e[n];
                    r && ((l = t.addChild(new s(t, {
                        video: r
                    }))).hide(), t.nextVideo = r)
                })
            })
        })
    })
}, function(e, t, n) {
    var r = n(116),
        i = r.extend({
            init: function(e, t) {
                r.call(this, e, t), e.on("playerstate.enter.contentPlaying", this.updateClamp)
            }
        });
    i.prototype.show = function() {
        videojs.Button.prototype.show.call(this), this.trigger("show")
    }, i.prototype.createEl = function() {
        var e = this.options().video,
            t = e.thumbnail || e.poster;
        return videojs.createEl("div", {
            className: "vjs-playlist-container",
            innerHTML: '<div class="vjs-playlist-close-button" role="button" aria-live="polite" tabindex="-1">×</div><h3>Up next</h3><div class="vjs-playlist-wrapper"><img src="' + t + '" /></div><div class="vjs-playlist-caption"><h4>' + e.title + "</h4></div>"
        })
    }, i.prototype.onClick = function(e) {
        var t = this.player();
        "vjs-playlist-close-button" === e.target.className ? this.hide() : t.trigger("mol.playlist.next")
    }, e.exports = i
}, function(e, t, n) {
    var r = n(25),
        i = videojs.Button.extend({
            init: function(e, t) {
                videojs.Button.call(this, e, t);
                var n = this.el();
                this.updateClamp = function() {
                    r(n.getElementsByTagName("h4"))
                }, e.on("resize", this.updateClamp), this.on("show", this.updateClamp), this.on("dispose", function() {
                    e.off("resize", this.updateClamp)
                })
            }
        });
    e.exports = i
}, function(e, t, n) {
    var r = n(1);
    videojs.plugin("post-content", function(e) {
        var t = this;
        t.options().isMobile || function() {
            var n = document.getElementById(e.id),
                i = void 0,
                o = void 0,
                s = void 0,
                a = void 0,
                l = void 0,
                u = !1;
            if (n && (i = n.parentNode), n && e.id && i) {
                a = document.querySelector("#" + e.id + " form"), (l = document.createElement("p")).setAttribute("id", "video-poll-feedback"), l.className = "poll-question poll-question-feedback", l.innerHTML = "Thanks for the feedback", o = (s = i.getElementsByTagName(e.onCloseTriggerTag)).length;
                for (var c = 0; c < o; c++) 0 === c && r.addClass(s[c], "answer-label-first"), r.addEventListener(s[c], "click", function() {
                    u = !0, r.addClass(a, "vjs-hidden"), r.prependChild(n, l), setTimeout(function() {
                        r.removeClass(i, "vjs-shown"), n.removeChild(l), r.removeClass(a, "vjs-hidden")
                    }, 3e3)
                });
                t.on("ended", function() {
                    u || setTimeout(function() {
                        a.removeAttribute("style"), r.addClass(i, "vjs-shown")
                    }, 500)
                }), t.on("destroyed", function() {
                    r.removeClass(i, "vjs-shown")
                })
            }
        }()
    })
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(14),
        o = n(0),
        s = n(15),
        a = n(23),
        l = n(119),
        u = n(123),
        c = n(125);
    videojs.plugin("related-videos", function(e) {
        var t = this,
            n = r({
                playlistHistory: !0
            }, e),
            d = i(n.videos),
            p = new c(t, n),
            h = t.controlBar.getChild("molPreviousVideoButton"),
            f = t.controlBar.getChild("molSkipVideoButton"),
            v = void 0,
            m = 15;

        function y() {
            v && (v.dispose(), t.removeChild(v), v = null)
        }

        function g() {
            s(t) || w(function(e, n) {
                e || (n.length > 0 ? A(n[0]) : t.currentTime(t.duration()))
            })
        }

        function b() {
            s(t) || (t.currentTime() <= 3 && !p.isEmpty() ? A(p.last()) : t.currentTime(0))
        }

        function A(e) {
            t.resetVideo({
                video: r({}, e, {
                    initialVideo: !1,
                    playlistClickToPlay: !0
                }),
                autoplay: !0
            })
        }

        function w(e) {
            d.get(function(r, i) {
                r && console.log("plugin.related-videos Error: " + r.message), i && 0 !== i.length || (console.log("plugin.related-videos Warning: No related videos"), i = []);
                var o = a.getMap(),
                    s = [],
                    l = [];
                i.forEach(function(e) {
                    p.contains(e) || n.playlistHistory && o[e.referenceId] || e.referenceId === t.options().referenceId ? s.push(e) : l.push(e)
                }), l.length < m ? e(r, l.concat(p.splice(0, m - l.length))) : e(r, l)
            })
        }
        h && h.enable(), f && f.enable(), t.fetchRelatedVideos = w, t.relatedVideos = d, t.disableControlsListeners = function() {
            t.off("mol.play.next.video", g), t.off("mol.play.previous.video", b)
        }, t.on("playerstate.enter.pauseStandby", function() {
            y(), w(function(e, n) {
                "pauseStandby" === t.playerState.getStateName() && (v = new l(t, {
                    videos: n
                }), t.addChild(v))
            })
        }), t.on("playerstate.leave.pauseStandby", y), t.on("playerstate.enter.standby", function() {
            y(), w(function(e, n) {
                "standby" === t.playerState.getStateName() && (v = new u(t, {
                    videos: n
                }), t.addChild(v))
            })
        }), t.on("playerstate.leave.standby", y), t.on("mol.play.next.video", g), t.on("mol.play.previous.video", b), t.on("reset", function() {
            d = i(t.options().plugins["related-videos"].videos), t.relatedVideos = d
        }), t.on("request-reset", function(e) {
            var n = e && e.video || {},
                r = o.extend({
                    src: t.src(),
                    poster: t.poster()
                }, t.options());
            p.contains(n) ? p.filterOut(n) : p.add(r)
        }), t.trigger("related-videos-ready")
    })
}, function(e, t, n) {
    var r = n(16),
        i = n(17),
        o = n(120),
        s = n(121),
        a = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t);
                var n = new r(e),
                    a = new i(e);
                n.addChild(a), a.addChild(new o(e)), a.addChild(new s(e, {
                    videos: t.videos
                })), this.addChild(n)
            }
        });
    a.prototype.createEl = function() {
        var e = this.player().options().poster,
            t = {
                className: "mol-related-videos-view-paused"
            };
        return e && (t.innerHTML = '<div class="mol-related-videos-view-paused-backdrop" style="background-image: url(\'' + e + "');\"></div>"), videojs.createEl("div", t)
    }, e.exports = a
}, function(e, t, n) {
    var r = n(2).FacebookButton,
        i = n(2).TwitterButton,
        o = n(2).PinterestButton,
        s = n(2).MailButton,
        a = n(20),
        l = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t), this.addChild(new r(e)), this.addChild(new i(e)), this.addChild(new o(e)), this.addChild(new s(e)), this.addChild(new a(e))
            }
        });
    l.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-panel-social-list"
        })
    };
    var u = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t), this.addChild(new l(e))
        }
    });
    u.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-panel mol-related-videos-panel-social",
            innerHTML: '<span class="panel-title">Share this</span>'
        })
    }, e.exports = u
}, function(e, t, n) {
    var r = n(26),
        i = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t), this.addChild(new r(e, {
                    videos: t.videos.slice(0, 6)
                }))
            }
        });
    i.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-panel mol-related-videos-panel-paused",
            innerHTML: '<span class="panel-title">More videos</span>'
        })
    }, e.exports = i
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(25),
        o = n(0),
        s = videojs.Button.extend({
            init: function(e, t) {
                videojs.Button.call(this, e, t);
                var n = this.el(),
                    r = function() {
                        i(n.querySelector("h4"))
                    };
                e.on("resize", r), setTimeout(function() {
                    r()
                }, 10)
            }
        });
    s.prototype.createEl = function() {
        var e = this.options().video,
            t = e.thumbnail || e.poster;
        return videojs.createEl("div", {
            className: "mol-related-videos-video",
            innerHTML: '<div class="video-thumbnail"><img src="' + t + '" /></div><div class="video-caption"><div class="aux-stadiometer"><h4>' + e.title + "</h4></div></div>"
        })
    }, s.prototype.onClick = o.debounce(function() {
        var e = this.options().video;
        this.player().trigger({
            type: "request-reset",
            video: r({}, e, {
                unmute: !0,
                playlistClickToPlay: !0
            }),
            autoplay: !0
        })
    }, 50), e.exports = s, t["video.js"] = videojs
}, function(e, t, n) {
    var r = n(16),
        i = n(17),
        o = n(124),
        s = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t);
                var n = new r(e),
                    s = new i(e);
                n.addChild(s), s.addChild(new o(e, {
                    videos: t.videos
                })), this.addChild(n)
            }
        });
    s.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-view-ended"
        })
    }, e.exports = s
}, function(e, t, n) {
    var r = n(26),
        i = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t), this.addChild(new r(e, {
                    videos: t.videos.slice(0, 13)
                }))
            }
        });
    i.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-related-videos-panel mol-related-videos-panel-ended"
        })
    }, e.exports = i
}, function(e, t, n) {
    var r = n(0);

    function i(e, t) {
        var n = r.extend({}, t);
        this._playlistHistory = [], this._player = e, this._updatePlayerState(), this._maxHistorySize = n.maxHistorySize || 0
    }
    i.prototype.add = function(e) {
        this._playlistHistory.push(e), 0 !== this._maxHistorySize && this._playlistHistory.length > this._maxHistorySize && this._playlistHistory.shift(), this._updatePlayerState()
    }, i.prototype.pop = function() {
        var e = this._playlistHistory.pop();
        return this._updatePlayerState(), e
    }, i.prototype.last = function() {
        return this._playlistHistory[this._playlistHistory.length - 1]
    }, i.prototype.splice = function(e, t) {
        return this._playlistHistory.splice(e, t)
    }, i.prototype.isEmpty = function() {
        return Boolean(!this._playlistHistory.length)
    }, i.prototype.contains = function(e) {
        return this._playlistHistory.some(function(t) {
            var n = t.referenceId;
            return !!e.referenceId && n === e.referenceId
        })
    }, i.prototype.filterOut = function(e) {
        this._playlistHistory = this._playlistHistory.filter(function(t) {
            var n = t.referenceId;
            return !!e.referenceId && n !== e.referenceId
        }), this._updatePlayerState()
    }, i.prototype._updatePlayerState = function() {
        this._player.el().classList.toggle("mol-empty-playlist", this.isEmpty())
    }, e.exports = i
}, function(e, t, n) {
    var r = n(7);
    videojs.plugin("reset", function() {
        var e = this;
        e.on("request-reset", function(t) {
            var n = t.video,
                i = t.autoplay;
            r.defer(function() {
                e.trigger({
                    type: "reset-sources",
                    video: n,
                    autoplay: i
                })
            })
        }), e.on("reset-sources", function(t) {
            var n, i = t.video,
                o = t.autoplay;
            i.src ? (e.playingRecommendedVideo = !0, e.autoplay(!1), e.pause(), e.src(i.src), e.poster(i.poster), e.playlistClickToPlay = Boolean(i.playlistClickToPlay), e.options((delete(n = i || {}).isMobile, n)), i.unmute && e.muted(!1), i.plugins && i.plugins.tracking && !i.plugins.tracking.dmtvEpisode && (e.options().plugins.tracking.dmtvEpisode = null), r.defer(function() {
                e.trigger("reset")
            }), e.on("reset", function() {
                o && r.defer(function() {
                    e.play()
                })
            })) : console.log("reset-resources request ignored. The passed video has no sources", i)
        }), e.resetVideo = function(t) {
            e.trigger({
                type: "request-reset",
                video: t.video,
                autoplay: t.autoplay
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(5),
        i = n(9),
        o = n(0),
        s = n(22),
        a = n(4),
        l = n(24),
        u = n(8),
        c = n(128),
        d = n(129),
        p = r.pageEvents;
    l.onDisableForceFlyout(function() {
        p.publish(p.VIDEO_CONFIG_CHANGE, {
            value: {
                autoFlyAway: !1
            }
        })
    });
    var h = {
        "vjs-span-one-col": "one-col",
        "vjs-span-two-col": "two-col",
        "vjs-span-three-col": "three-col"
    };
    videojs.plugin("tracking", function(e) {
        var t = this,
            n = t.id() + "video",
            r = void 0,
            l = void 0,
            f = !1,
            v = !1,
            m = !1,
            y = void 0,
            g = a.queryStringToObj(window.location.search),
            b = o.isDefined(g.debugNielsenVideoDCR) && "true" === g.debugNielsenVideoDCR;

        function A() {
            return Boolean(t.options().isStreaming)
        }

        function w(e, t) {
            return e.autoplayInline ? "autoplayInlineVideoPlayer" : e.flyoutOn ? e.forceFlyOutInProgress ? e.flyoutExpanded ? "flyout_expanded_automatic_v2" : "flyout_collapsed_automatic_v2" : e.flyoutExpanded ? "flyout_expanded_user_v2" : "flyout_collapsed_user_v2" : t.trackingType
        }

        function j(o, a) {
            var p = "ad" === o,
                h = p ? l : A(),
                v = p && l;
            try {
                r = t.options().plugins.tracking
            } catch (t) {
                r = e
            }
            var m = r.title || t.options().title,
                y = {
                    autoplay: u(t),
                    animatedPreviewEnabled: Boolean(t.options().animatedPreviewEnabled),
                    dmtvEpisode: r.dmtvEpisode || null,
                    currentSrc: t.currentSrc(),
                    currentType: t.currentType(),
                    length: h ? -1 : 1e3 * t.duration(),
                    version: s.getVideoPlayerVersion(),
                    pageMetadata: Object(i.getPageMetadata)(),
                    videoId: t.options().videoId,
                    title: m,
                    img: t.poster(),
                    displayName: m,
                    playerId: x(),
                    experienceId: n,
                    sponsored: r.sponsored,
                    playerType: t.techName.toUpperCase(),
                    playlist: "playlistCounter" in t,
                    continuePlayList: "playlistCounter" in t && t.playlistCounter > 0 || "autoplayIndex" in t && t.autoplayIndex > 0,
                    trackingType: w(t, r),
                    channelShortName: r.channelShortName,
                    initialVideo: Boolean(t.options().initialVideo),
                    referenceId: r.referenceId,
                    videoChannel: r.videoChannel || r.channelShortName,
                    offset: v ? 0 : t.currentTime(),
                    duration: h ? 0 : t.duration(),
                    fullscreen: t.isFullscreen(),
                    paused: t.paused(),
                    muted: t.muted(),
                    adSDK: t.adSDK,
                    adBlockStatus: c()
                };
            return t.options()["fbia-embed"] ? y.ito = "FBIA" : t.options().syndicationService && (y.ito = t.options().syndicationService.toUpperCase()), t.playingRecommendedVideo ? r.recommendationModel && (y.recommendationModel = r.recommendationModel) : y.recommendationModel = t.tagAttributes["data-recommendation-model"], a && (y.errorMessage = a.message, a.code && (y.adErrorCode = a.code || a.errorCode)), f && (y.program = "DailyMail '" + r.channelShortName + "' Videos", y.isfullepisode = "n", y.hasAds = t.adsEnabled ? 1 : 0, y.adloadtype = 1, y.subbrand = d.getSubbrand(y.videoChannel)), y
        }

        function T(e) {
            return o.extend({}, e, j())
        }
        y = window._nolggGlobalParams, b && (y = {
            apid: "T1E713557-917A-4B7A-98A0-45AB34B64C08",
            apn: "dailymail au",
            sfcode: "dcr-cert"
        }), y && y.apid && y.apn && (f = !0, d.initInstance(t, y).then(function(e) {
            e || (f = !1)
        })), t.ready(function() {
            p.publish(p.VIDEO_PLAYER_READY, {
                playerType: t.techName.toUpperCase(),
                experienceId: n
            })
        });
        var E = !1,
            _ = !1,
            C = !1;

        function S(e) {
            E || (E = !0, p.publish(p.VIDEO_STREAM_STARTED, j(e)))
        }

        function k(e) {
            C || (C = !0, p.publish(p.VIDEO_STREAM_FAILED, j("", e)))
        }

        function x() {
            var e = t.options();
            if (e["fbia-embed"]) return "fbiaembedded";
            if ("fbia" === e.syndicationService) return "fbiaembedded";
            if ("gamp" === e.syndicationService) return "gampembedded";
            if (e.isEmbedded) return "thirdpartyembedded";
            if (e.isMobile) return "mobile";
            if (document.querySelectorAll(".ez-modal-on").length || void 0 !== t.tagAttributes["data-is-lightbox-video"]) return "carousel";
            var n = (t.el().parentNode.className || "").match(/(vjs-span-)([^ ]+)*/);
            if (!n) return "responsive";
            var r = "article-" + (h[n[0]] || "default"),
                i = t.flyoutStateName && t.flyoutStateName();
            return i && "off" !== i && (r += "-flyout-" + i), r
        }

        function P(e) {
            p.publish(p.VIDEO_ADVERT_FAILED, j("ad", e.error)), setTimeout(function() {
                _ || k(new Error("Stream failed possibly due to an ad error"))
            }, 5e3)
        }
        t.on("videoAd.error", P), t.on("vast.adError", P), t.on("error", function() {
            var e = t.el().querySelector(".vjs-tech"),
                n = e && e.error;
            n && k(n)
        }), t.on("playerstate.enter.started", function() {
            p.publish(p.VIDEO_DATA_READY, j()), E = !1, _ = !1, C = !1
        }), t.on("playerstate.enter.adEnded", function() {
            f && (v = !1, d.prerollEnded(j("ad"), t)), p.publish(p.VIDEO_ADVERT_COMPLETED, j("ad"))
        }), t.on("playerstate.enter.contentReady", function() {
            S(), f && !m && (m = !0, d.videoStart(j(), t, A()), d.setPlayhead(t, A())), _ || (_ = !0, p.publish(p.VIDEO_CONTENT_STARTED, j()))
        }), t.on("playerstate.enter.contentPlaying", function() {
            f && !m && (m = !0, d.videoStart(j(), t, A()), d.setPlayhead(t, A()))
        }), t.on("playerstate.enter.adPlaying", function() {
            try {
                l = "VPAID" === t.adUnit.type
            } catch (e) {
                l = !0, console.log("player.adUnit is unexpectedly null")
            }
            S("ad"), f && !v && (d.videoStart(j(), t, A()), v = !0, d.preroll(j("ad"), t, l), d.setPlayhead(t, A())), p.publish(p.VIDEO_ADVERT_STARTED, j("ad"))
        }), t.on("playerstate.leave.pauseStandby", function() {
            p.publish(p.VIDEO_RESUMED, j())
        }), t.on("playerstate.enter.pauseStandby", function() {
            p.publish(p.VIDEO_PAUSED, j())
        }), t.on("playerstate.leave.seeking", function() {
            p.publish(p.VIDEO_RESUMED, j())
        }), t.on("playerstate.enter.seeking", function() {
            p.publish(p.VIDEO_PAUSED, j())
        });
        if (t.one("fullscreenchange", function e() {
                t.hasStarted() && p.publish(p.VIDEO_EXTRA, j()), setTimeout(function() {
                    t.one("fullscreenchange", e)
                }, 200)
            }), t.on("volumechange", function() {
                t.hasStarted() && p.publish(p.VIDEO_EXTRA, j())
            }), t.on("playerstate.enter.ended", function() {
                var e = j();
                0 !== e.offset && 0 !== e.duration && (p.publish(p.VIDEO_CONTENT_COMPLETED, e), f && (m = !1, d.end(e, t)))
            }), t.on("playerstate.enter.adAborted", function() {
                p.publish(p.VIDEO_ADVERT_ABORTED, j("ad"))
            }), t.on("playerstate.enter.destroyedDuringAds", function() {
                var e = j("ad");
                p.publish(p.VIDEO_ADVERT_ABORTED, e), d.videoReset(e, t), v = !1, m = !1
            }), t.on("playerstate.enter.aborting", function() {
                var e = j();
                p.publish(p.VIDEO_CONTENT_ABORTED, e), d.videoReset(e, t), v = !1, m = !1
            }), t.on("playerstate.enter.destroyed", function() {
                p.publish(p.VIDEO_CONTENT_ABORTED, j())
            }), t.on("playerstate.progress.enter.0", function() {
                if (!A()) {
                    var e = {
                        begin: 0,
                        end: .25,
                        data: {
                            segmentNum: 1,
                            segment: "M:0-25",
                            ratio: 0
                        }
                    };
                    e.data.segmentLength = (e.end - e.begin) * t.duration(), p.publish(p.VIDEO_PROGRESS, T(e.data))
                }
            }), t.on("playerstate.progress.enter.25", function() {
                if (!A()) {
                    var e = {
                        begin: .25,
                        end: .5,
                        data: {
                            segmentNum: 2,
                            segment: "M:25-50",
                            ratio: .25
                        }
                    };
                    e.data.segmentLength = (e.end - e.begin) * t.duration(), p.publish(p.VIDEO_PROGRESS, T(e.data))
                }
            }), t.on("playerstate.progress.enter.50", function() {
                if (!A()) {
                    var e = {
                        begin: .5,
                        end: 1,
                        data: {
                            segmentNum: 3,
                            segment: "M:50-100",
                            ratio: .5
                        }
                    };
                    e.data.segmentLength = (e.end - e.begin) * t.duration(), p.publish(p.VIDEO_PROGRESS, T(e.data))
                }
            }), t.on("brandedContentPlayer.progress", function() {
                p.publish(p.VIDEO_BRANDED_CONTENT_PROGRESS, j())
            }), f) {
            var I = 0;
            t.on("timeupdate", function() {
                var e = Date.now();
                e - I >= 1e3 && (d.setPlayhead(t, A()), I = e)
            })
        }
    })
}, function(e, t) {
    var n = "UNKNOWN";
    Array.isArray(window.adBlockQueue) && window.adBlockQueue.push(function(e) {
        n = e ? "ON" : "OFF"
    }), e.exports = function() {
        return n
    }
}, function(e, t) {
    var n = "http://cdn-gl.imrworldwide.com/novms/js/2/ggcmb510.js";
    var r = void 0,
        i = {},
        o = {};

    function s() {
        return r || (r = new Promise(function(e, t) {
            var r, i;
            window.NOLCMB ? e() : (r = document.getElementsByTagName("script")[0], (i = document.createElement("script")).type = "text/javascript", i.async = !0, i.onload = e, i.onerror = t, i.src = n, r.parentNode.insertBefore(i, r))
        })), r.then(function() {
            return window.NOLCMB
        })
    }

    function a(e) {
        return Promise.resolve(i[e.id()])
    }

    function l(e, t) {
        return a(t).then(function(n) {
            if (!n) return null;
            n.ggPM("stop", Math.ceil(e.offset)), o[t.id()] = null
        })
    }
    e.exports = {
        end: function(e, t) {
            return a(t).then(function(n) {
                if (!n) return null;
                n.ggPM("end", Math.ceil(e.offset)), o[t.id()] = null
            })
        },
        initInstance: function(e, t) {
            var n = e.id();
            return i[n] = s().then(function(e) {
                var n = {
                        sfcode: t.sfcode || "dcr",
                        apid: t.apid,
                        apn: t.apn,
                        nsdkv: "511"
                    },
                    r = e.getInstance(n.apid);
                return r.ggInitialize(n), r
            }).catch(function() {
                return console.error("Failed to instance Nielsen DCR Video Tracking"), null
            }), i[n]
        },
        preroll: function(e, t, n) {
            return a(t).then(function(r) {
                if (!r) return null;
                var i = {
                    type: "preroll",
                    assetid: e.experienceId + (n ? "-vpaid" : "")
                };
                r.ggPM("loadMetadata", i), o[t.id()] = "preroll"
            })
        },
        prerollEnded: l,
        videoReset: l,
        setPlayhead: function(e, t) {
            return a(e).then(function(n) {
                if (!n) return null;
                if (o[e.id()]) {
                    var r = t ? Math.floor(Date.now() / 1e3) : Math.round(e.currentTime());
                    n.ggPM("setPlayheadPosition", r)
                }
            })
        },
        videoStart: function(e, t, n) {
            return function(e, t, n) {
                return a(t).then(function(r) {
                    if (!r) return null;
                    if (!o[t.id()] || "video" !== o[t.id()]) {
                        var i = {
                            type: "content",
                            dataSrc: "cms",
                            assetid: e.videoId,
                            section: window._nolggGlobalParams && window._nolggGlobalParams.section,
                            title: e.title,
                            length: n ? 86400 : Math.floor(e.duration),
                            program: e.program,
                            isfullepisode: e.isfullepisode,
                            hasAds: e.hasAds,
                            adloadtype: e.adloadtype,
                            subbrand: e.subbrand
                        };
                        r.ggPM("loadMetadata", i), o[t.id()] = "video"
                    }
                })
            }(e, t, n)
        },
        getSubbrand: function(e) {
            return "string" != typeof e ? "" : /femail/gi.test(e) ? "c01" : /health/gi.test(e) ? "c02" : /home/gi.test(e) ? "c03" : /news/gi.test(e) ? "c04" : /science/gi.test(e) ? "c05" : /sport/gi.test(e) ? "c06" : /showbiz/gi.test(e) ? "c07" : /travel/gi.test(e) ? "c08" : "b01"
        }
    }
}, function(e, t) {
    videojs.plugin("video-starts", function() {
        var e = this;

        function t() {
            e.videoStarts++,
                function(e, t, n) {
                    function r() {
                        n.apply(void 0, arguments), t.forEach(function(t) {
                            e.off(t, r)
                        })
                    }
                    t.forEach(function(t) {
                        e.on(t, r)
                    })
                }(e, ["playerstate.enter.ended", "playerstate.leave.autoplay"], n)
        }

        function n() {
            e.one("playerstate.enter.contentPlaying", t)
        }
        e.videoStarts = 0, e.one("playerstate.enter.contentPlaying", t)
    })
}, function(e, t, n) {
    var r = n(132),
        i = n(0);
    videojs.plugin("animated-preview", function(e) {
        if (!window.location.search || !window.location.search.match(/disableVideoPreview=1/i)) {
            var t = this;
            t.ready(function() {
                for (var n = t.posterImage.el_, o = Object.keys(e), s = t.controlBar.getChild("molPreviousVideoButton"), a = t.controlBar.getChild("molSkipVideoButton"), l = 0, u = o.length; l < u; l++) {
                    var c = o[l];
                    n.setAttribute(c, e[c])
                }
                var d = r.addElements(n);
                t.el().classList.add("mol-fe-animated-preview"), t.options().animatedPreviewEnabled = !0, s && s.disable(), a && a.disable(), t.one("playerstate.enter.contentPlaying", function() {
                    s && s.enable(), a && a.enable()
                }), i.once(t, ["play"], function() {
                    d._deRegisterMainElement()
                })
            })
        }
    })
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(6),
        o = i.onOrientationChange,
        s = i.onScroll,
        a = i.onDocumentLoad,
        l = i.isMobile,
        u = i.isTablet,
        c = n(140),
        d = n(141),
        p = new(function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.initOnDocumentLoad = !0, this.pool = [], this.parents = [window], this._showOriginalOnPause = !1
            }
            return r(e, [{
                key: "cleanUp",
                value: function() {
                    this.removeAll(), this.pool = []
                }
            }, {
                key: "removeAll",
                value: function() {
                    this.pool.forEach(function(e) {
                        e._deRegisterMainElement()
                    })
                }
            }, {
                key: "addElements",
                value: function(e) {
                    var t = this;
                    if (e) {
                        var n = e.constructor === Array;
                        n || (e = [e]);
                        var r = e.reduce(function(e, n) {
                            var r = void 0;
                            try {
                                u() ? n.getAttribute("data-hd-film") && (r = new d(n, "hd")) : l() ? n.getAttribute("data-film") && (r = new d(n)) : n.getAttribute("data-video") || "video" === n.tagName.toLowerCase() ? r = new c(n) : n.getAttribute("data-hd-film") ? r = new d(n, "hd") : n.getAttribute("data-film") && (r = new d(n)), r && (t.synchVideoPreviewAttrs(r), r.synch(), e.push(r))
                            } catch (e) {
                                console.error(e)
                            }
                            return e
                        }, []);
                        return this.pool.push.apply(this.pool, r), n ? r : r[0]
                    }
                }
            }, {
                key: "addParent",
                value: function(e) {
                    e && -1 === this.parents.indexOf(e) && this.parents.push(e)
                }
            }, {
                key: "synchAll",
                value: function() {
                    this.pool.forEach(function(e) {
                        return e.synch()
                    })
                }
            }, {
                key: "synchResizeAll",
                value: function() {
                    this.pool.forEach(function(e) {
                        return e.synchResize()
                    })
                }
            }, {
                key: "enableListeners",
                value: function() {
                    this.orientationChangeListener = o(this.synchResizeAll.bind(this)), this.scrollListener = s(this.parents, this.synchAll.bind(this), 50)
                }
            }, {
                key: "disableListeners",
                value: function() {
                    this.orientationChangeListener && this.orientationChangeListener.stop(), this.scrollListener && this.scrollListener.stop()
                }
            }, {
                key: "synchVideoPreviewAttrs",
                value: function(e) {
                    e.showOriginalOnPause = this._showOriginalOnPause
                }
            }, {
                key: "showOriginalOnPause",
                set: function(e) {
                    this._showOriginalOnPause = !!e, this.pool.forEach(this.synchVideoPreviewAttrs.bind(this))
                },
                get: function() {
                    return this._showOriginalOnPause
                }
            }]), e
        }());
    a(function() {
        l() && (p.showOriginalOnPause = !0, p.addParent(document.querySelector(".scrollable-content"))), p.initOnDocumentLoad && p.enableListeners()
    }), e.exports = p
}, function(e, t, n) {
    "use strict";
    var r = n(27),
        i = n(134);
    e.exports = function(e) {
        function t() {
            l.isRemoved || (l.remove(), e())
        }
        r({
            cb: e,
            throwError: !0
        });
        var n, o, s = ["DOMContentLoaded", t],
            a = ["load", t],
            l = i(function() {
                var e, t;
                (e = document).removeEventListener.apply(e, s), (t = window).removeEventListener.apply(t, a)
            });
        return (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : ((n = document).addEventListener.apply(n, s), (o = window).addEventListener.apply(o, a)), l
    }
}, function(e, t, n) {
    "use strict";
    var r = n(27);
    e.exports = function(e) {
        return r({
            cb: e,
            throwError: !0
        }), {
            isRemoved: !1,
            remove: function() {
                this.isRemoved = !0, e()
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = window.innerHeight,
            n = window.innerWidth,
            r = Math.max(e.clientHeight, e.clientHeight - t) >> 1,
            i = Math.max(e.clientWidth, e.clientWidth - n) >> 1,
            o = e.getBoundingClientRect(),
            s = o.left > -i && o.right < n + i || o.left < 0 && o.right > n,
            a = o.top > -r && o.bottom < t + r || o.top < 0 && o.bottom > t;
        return s && a
    }
}, function(e, t, n) {
    "use strict";
    var r = n(137),
        i = n(138);

    function o(e) {
        return {
            stop: e.bind(e)
        }
    }
    e.exports = {
        onScroll: function(e, t, n) {
            e.constructor !== Array && (e = [e]);
            var i = r(e, t, n);
            return o(function() {
                e.forEach(function(e) {
                    e && e.removeEventListener && e.removeEventListener("scroll", i)
                })
            })
        },
        onOrientationChange: function(e) {
            var t = i(e);
            return o(function() {
                window.removeEventListener("orientationchange", t), window.removeEventListener("resize", t)
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        e.constructor !== Array && (e = [e]);
        var r = void 0;

        function i() {
            clearTimeout(r), r = setTimeout(t, n)
        }
        return e.forEach(function(e) {
            e && e.addEventListener && e.addEventListener("scroll", i)
        }), i
    }
}, function(e, t, n) {
    "use strict";
    var r = 1e3,
        i = 100,
        o = 3;
    e.exports = function(e) {
        if ("function" == typeof e) {
            var t = void 0,
                n = void 0,
                s = void 0,
                a = void 0,
                l = void 0;
            return window.addEventListener("orientationchange", c), window.addEventListener("resize", c), c
        }

        function u(r) {
            clearInterval(t), clearTimeout(n), r && (t = null, n = null, e(r))
        }

        function c(e) {
            u(), t = setInterval(function() {
                window.innerWidth === s && window.innerHeight === a ? ++l === o && u(e) : (s = window.innerWidth, a = window.innerHeight, l = 0)
            }, i), n = setTimeout(function() {
                u(e)
            }, r)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        calcPositionStyles: function(e) {
            var t = document.defaultView.getComputedStyle(e, ""),
                n = {
                    width: e.clientWidth + "px",
                    height: e.clientHeight + "px",
                    left: "0px" === t.right ? "" : t.left,
                    right: "0px" === t.left ? "" : t.right,
                    top: "0px" === t.bottom ? "" : t.top,
                    bottom: "0px" === t.top ? "" : t.bottom,
                    margin: t.margin,
                    float: t.float,
                    position: "static" !== t.position ? t.position : ""
                };
            return t.display && "inline" !== t.display ? n.display = t.display : n.display = "inline-block", n
        },
        calcPaddingStyles: function(e, t) {
            var n = e.clientWidth,
                r = e.clientHeight,
                i = 0,
                o = 0;
            return n / r > t ? i = n - r * t >> 1 : o = r - n / t >> 1, {
                padding: o + "px " + i + "px"
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            return void 0 !== s ? s.call(r) : void 0
        };
    var o = n(6).nodeListToArray,
        s = n(28);
    var a = function(e) {
        function t() {
            return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, s), r(t, [{
            key: "_init",
            value: function() {
                var e = this;
                if ("video" === this.element.tagName.toLowerCase()) {
                    this.element.loop = !0;
                    var t = this.element.getElementsByTagName("source");
                    o(t).forEach(function(t) {
                        var n = t.getAttribute("data-src");
                        if (n) {
                            var r = document.createElement("source");
                            r.src = n, r.type = t.type, e.element.replaceChild(r, t)
                        }
                    })
                } else {
                    var n = this.element.getAttribute("data-video");
                    if (!n) return;
                    var r = this.element.getAttribute("data-poster") || this.element.src;
                    this._registerMainElement(function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = document.createElement("video");
                        return t && (r.poster = t), r.loop = !0, r.innerHTML = '<source src="' + e + '" type="video/mp4"/>', Object.assign(r.style, n), r
                    }(n, r, {
                        width: this.element.clientWidth + "px",
                        height: this.element.clientHeight + "px"
                    }))
                }
                this.initDone = !0
            }
        }, {
            key: "_play",
            value: function() {
                i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_play", this).call(this), this.element && this.element.play && this.element.play()
            }
        }, {
            key: "_pause",
            value: function() {
                i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_pause", this).call(this), this.element && this.element.pause && this.element.pause()
            }
        }]), t
    }();
    e.exports = a
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            return void 0 !== s ? s.call(r) : void 0
        };
    var o = n(28),
        s = n(142),
        a = n(143),
        l = n(6),
        u = l.waitForElementToLoad,
        c = l.calcPaddingStyles,
        d = function(e) {
            function t(e, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var r = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                    i = n ? n + "-" : "";
                if (r.filmSrc = r._getDataAttribute(i + "film"), !r.filmSrc) throw new Error("Could not init VideoPreviewImg: data attribute " + i + "film must not be empty");
                return r.fps = parseFloat(r._getDataAttribute("fps", n)) || 5, r.frameCount = parseInt(r._getDataAttribute("frame-count", n), 10), r.frameWidth = parseInt(r._getDataAttribute("frame-width", n), 10), r.frameHeight = parseInt(r._getDataAttribute("frame-height", n), 10), r.frameRatio = r.frameWidth / r.frameHeight, r._hasDataAttribute(i + "fade") ? r.playbackManager = new a(r) : r.playbackManager = new s(r), r
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "_getDataAttribute",
                value: function(e, t) {
                    var n = t ? "-" + t : "";
                    return this.element.getAttribute("data" + n + "-" + e) || t && this.element.getAttribute("data-" + e)
                }
            }, {
                key: "_hasDataAttribute",
                value: function(e, t) {
                    var n = t ? "-" + t : "";
                    return this.element.hasAttribute("data" + n + "-" + e) || t && this.element.hasAttribute("data-" + e)
                }
            }, {
                key: "fixElement",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.element;
                    return i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "fixElement", this).call(this, e), Object.assign(e.style, c(this.originalElement, this.frameRatio)), this
                }
            }, {
                key: "_createFilmElement",
                value: function() {
                    return this.filmElement ? this.filmElement : this.filmSrc ? (this.filmElement = new Image, this.filmElement.src = this.filmSrc, this.filmElement) : void 0
                }
            }, {
                key: "_init",
                value: function() {
                    var e = this;
                    return this._createFilmElement() && u(this.filmElement).then(function() {
                        var n = t.createFramesContainer();
                        e.fixElement(n), e._registerMainElement(n), e.playbackManager.init(), e.initDone = !0
                    }).catch(function(t) {
                        throw e.synchIsAllowed = !1, t
                    })
                }
            }, {
                key: "_play",
                value: function() {
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_play", this).call(this), this.playbackManager.play()
                }
            }, {
                key: "_pause",
                value: function() {
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_pause", this).call(this), this.playbackManager.pause()
                }
            }], [{
                key: "createFramesContainer",
                value: function() {
                    var e = document.createElement("div");
                    return e.className = "frames-container", e
                }
            }]), t
        }();
    e.exports = d
}, function(e, t, n) {
    "use strict";
    var r = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }();
    var i = n(30),
        o = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n._frameHoldersCount = 1, n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, i), r(t, [{
                key: "nextFrame",
                value: function(e) {
                    (function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(t);
                            return null === o ? void 0 : e(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0
                    })(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "nextFrame", this).call(this, e), this.setFrameHolderNext(this._frameHolders[0])
                }
            }]), t
        }();
    e.exports = o
}, function(e, t, n) {
    "use strict";
    var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        i = function e(t, n, r) {
            null === t && (t = Function.prototype);
            var i = Object.getOwnPropertyDescriptor(t, n);
            if (void 0 === i) {
                var o = Object.getPrototypeOf(t);
                return null === o ? void 0 : e(o, n, r)
            }
            if ("value" in i) return i.value;
            var s = i.get;
            return void 0 !== s ? s.call(r) : void 0
        };
    var o = n(30),
        s = function(e) {
            function t(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
                    r = parseFloat(n.videoPreviewImg.element.getAttribute("data-fade"));
                return n.fadeDuration = r || 1 / n.videoPreviewImg.fps, n._frameHoldersCount = 3, n.fadeTiming = n.videoPreviewImg.element.getAttribute("data-fade-timing") || "ease-in-out", n
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, o), r(t, [{
                key: "_createFrameHolder",
                value: function() {
                    var e = i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_createFrameHolder", this).call(this);
                    return Object.assign(e.style, {
                        "transition-duration": this.fadeDuration + "s",
                        "transition-timing-function": this.fadeTiming
                    }), e
                }
            }, {
                key: "nextFrame",
                value: function(e) {
                    i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "nextFrame", this).call(this, e), this._frameHolders.push(this._frameHolders.shift()), this._frameHolders[0].className = this.frameHolderClassName, this._frameHolders[1].className = this.frameHolderClassName + " frame-holder-current", this.setFrameHolderNext(this._frameHolders[2])
                }
            }]), t
        }();
    e.exports = s
}, function(e, t, n) {
    var r = n(3),
        i = n(18),
        o = n(31),
        s = n(146);
    videojs.plugin("branded-content", function(e) {
        var t = this,
            n = void 0,
            a = void 0,
            l = function() {
                a && (a.dispose(), t.removeChild(a), a = null)
            },
            u = function(e) {
                var t = new Image;
                return t.src = e, t
            },
            c = function() {
                return e.trackingPixels ? e.trackingPixels.reduce(function(e, t) {
                    return e["s" + t.time] = t.uri, e
                }, {}) : null
            },
            d = c(),
            p = {},
            h = 0,
            f = 0;
        e.clickThroughUri && (n = function(e, t) {
            var n = window.document.createElement("a");
            return n.href = t, n.target = "_blank", n.rel = "nofolow", n.onclick = function(t) {
                var n = e._states.state.get();
                if ("ended" !== n && "standby" !== n) return e.paused() ? (e.play(), void t.stopPropagation()) : void e.pause()
            }, n.classList.add("mol-branded-content__blocker"), n
        }(t, e.clickThroughUri), t.el().insertBefore(n, t.controlBar.el())), o(t), t.el().classList.add("mol-branded-content"), t.on("playerstate.enter.standby", function() {
            var e = t.el().getElementsByTagName("video")[0];
            e && e.webkitExitFullScreen && e.webkitExitFullScreen()
        }), t.on("playerstate.enter.standby", function() {
            l(), a = new s(t, {
                poster: e.endStatePoster,
                clickThroughUri: e.clickThroughUri
            }), t.addChild(a)
        }), t.on("playerstate.leave.standby", l), t.on("playerstate.leave.standby", function() {
            h = 0
        }), t.on("timeupdate", function() {
            var n = Math.floor(t.currentTime()) || 0;
            n > 0 && n % 10 == 0 && !p[n] && (p[n] = !0, t.trigger("brandedContentPlayer.progress"), 10 === n && e.impressionPixel && u(e.impressionPixel)), d && d["s" + n] && (u(d["s" + n]), delete d["s" + n])
        }), t.on("ended", function() {
            p = {}, d = c(), "Microsoft Internet Explorer" === r.browser && t.currentTime(0)
        }), t.muted(!0), r.mobile && (t.el().querySelector(".vjs-tech").setAttribute("playsinline", ""), t.on("timeupdate", function() {
            var e = t.currentTime();
            Math.abs(e - h) > 3 ? ((f += 1) >= 2 && t.pause(!0), t.currentTime(h)) : h = e
        }), t.on("ended", function() {
            t.duration() - h > 3 && (t.pause(!0), t.play(!0), t.currentTime(h))
        })), i.check(t.el()), t.el().addEventListener("viewport.enter", function() {
            a || t.play()
        }), t.el().addEventListener("viewport.exit", function() {
            t.pause()
        })
    })
}, function(e, t) {
    e.exports = function(e) {
        var t = e.getBoundingClientRect(),
            n = t.height,
            r = t.width;
        if (!n || !r) return !1;
        var i = .5 * n,
            o = .5 * r,
            s = window.innerHeight || document.documentElement.clientHeight,
            a = window.innerWidth || document.documentElement.clientWidth;
        return t.top + i >= 0 && t.bottom - i <= s && t.left >= 0 && t.right <= a || t.left + o >= 0 && t.right - o <= a && t.top >= 0 && t.bottom <= s
    }
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t)
        }
    });
    n.prototype.createEl = function() {
        var e = this.options(),
            t = videojs.createEl("div", {
                className: "mol-branded-content__end-view"
            }),
            n = e.clickThroughUri ? e.clickThroughUri : "",
            r = e.clickThroughUri ? "_blank" : "";
        return t.innerHTML = '<a class="mol-branded-content__end-view-blocker" href="' + n + '" target="' + r + '"><img class="mol-branded-content__end-view-poster" src="' + e.poster + '"></a>', t
    }, e.exports = n
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(3),
        o = n(18),
        s = n(31);
    videojs.plugin("editorial-content", function() {
        var e = this,
            t = function() {
                Math.abs(e.duration() - e.currentTime()) < 1 ? e.trigger("autoplay-next-video-restart") : e.play()
            },
            n = function() {
                Math.abs(e.duration() - e.currentTime()) < 1 && e.trigger("autoplay-next-video-cancel"), e.pause()
            };

        function a() {
            e.fetchRelatedVideos(function(i, s) {
                var a = s[0];
                e.trigger({
                    type: "request-reset",
                    video: r({}, a),
                    autoplay: !1
                }), o.check(e.el()), e.el().addEventListener("viewport.enter", t), e.el().addEventListener("viewport.exit", n)
            })
        }
        s(e), e.muted(!0), e.volume(0), e.el().classList.add("mol-editorial-content"), i.mobile && e.el().querySelector(".vjs-tech").setAttribute("playsinline", ""), e.on("playerstate.enter.standby", function() {
            var t = e.el().getElementsByTagName("video")[0];
            t && t.webkitExitFullScreen && t.webkitExitFullScreen()
        }), e.fetchRelatedVideos ? a() : e.on("related-videos-ready", a), e.on("request-reset", function(t) {
            var n, r = t && t.video;
            r && (n = r, e.relatedVideos.get(function(t, r) {
                var i = r.findIndex(function(e) {
                    return e.referenceId === n.referenceId
                });
                r.splice(i, 1), r.push(n), e.relatedVideos.update(r)
            }))
        })
    })
}, function(e, t, n) {
    var r = n(18),
        i = n(3),
        o = n(4),
        s = n(149),
        a = n(150),
        l = n(151),
        u = function() {
            return "wifi" === (navigator.connection || navigator.mozConnection || navigator.webkitConnection || {}).type
        };
    videojs.plugin("autoplay-inline", function(e) {
        var t, n, c, d, p = this,
            h = (n = (t = e).android, c = t.iOS, (d = o.queryStringToObj(window.location.search)).allowedConnection ? d.allowedConnection : "android" === i.os.toLowerCase() ? n : "ios" === i.os.toLowerCase() ? c : "off"),
            f = void 0;
        if ("off" !== h) {
            var v = function() {
                    "autoplay" === p._states.state.get() && p.trigger("autoplay-inline-cancel"), p.pause(), p.autoplayInline = !1, p.removeChild(f)
                },
                m = function() {
                    ("wifi" === h && u() || "data" === h && !u() || "all" === h) && (p.autoplayInline = !0, 0 !== p.duration() && Math.abs(p.duration() - p.currentTime()) < 1 ? p.trigger("autoplay-inline-restart") : (f = new l(p), p.addChild(f), p.muted(!0), p.play()))
                };
            s(function(e) {
                e && (! function(e) {
                    return "gamp" === e.options_.syndicationService
                }(p) ? (r.check(p.el()), p.el().addEventListener("viewport.enter", m), p.el().addEventListener("viewport.exit", v)) : a(function(e) {
                    e ? m() : v()
                }))
            })
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw new TypeError("Missing callback");
        if (null === sessionStorage.getItem("autoplaySupported")) {
            var t = document.createElement("video");
            t.autoplay = !0, t.src = "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=", t.load(), t.style.display = "none", t.playing = !1, t.muted = !0, t.setAttribute("webkit-playsinline", "webkit-playsinline"), t.setAttribute("playsinline", "playsinline"), t.play(), t.onplay = function() {
                this.playing = !0
            }, t.addEventListener("play", function() {
                var n = Boolean(t.playing);
                try {
                    sessionStorage.setItem("autoplaySupported", n)
                } catch (e) {}
                e(n)
            })
        } else e("true" === sessionStorage.getItem("autoplaySupported"))
    }
}, function(e, t) {
    var n = !1,
        r = !1;
    e.exports = function(e) {
        if (!window.parent) throw new Error("Player is not in an iframe");
        n || (window.parent.postMessage({
            sentinel: "amp",
            type: "send-intersections"
        }, "*"), n = !0), window.addEventListener("message", function(t) {
            t.source === window.parent && t.origin !== window.location.origin && t.data && "amp" === t.data.sentinel && "intersection" === t.data.type && t.data.changes.forEach(function(t) {
                var n = t.intersectionRatio;
                !r && n > .4 ? e(r = !0) : r && n < .4 && e(r = !1)
            })
        })
    }
}, function(e, t) {
    var n = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        r = videojs.Button.extend({
            init: function(e) {
                var t = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                videojs.Button.call(this, e, n({
                    name: "TapToUnmute"
                }, r));
                var i = function() {
                    e.muted() || t.onClick()
                };
                e.on("volumechange", i), this.on("dispose", function() {
                    e.off("volumechange", i)
                })
            }
        });
    r.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "vjs-tap-to-unmute-control"
        })
    }, r.prototype.onClick = function(e) {
        var t = this.player();
        return t.muted(!1), t.removeChild(this), this.dispose(), e && e.stopPropagation(), !1
    }, e.exports = r
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(15),
        o = n(153);
    videojs.plugin("video-advertising-mode", function() {
        var e = this;
        e.videoAdvertisingMode = !0, e.options_.inactivityTimeout = 3e3, e.userActive(!1);
        e.on("request-reset", function(t) {
            var n, r = t && t.video;
            r && (n = r, e.relatedVideos.get(function(t, r) {
                var i = r.findIndex(function(e) {
                    return e.referenceId === n.referenceId
                });
                r.splice(i, 1), r.push(n), e.relatedVideos.update(r)
            })), e.trigger("playlistItem")
        });
        var t = function() {
            e.fetchRelatedVideos(function(t, n) {
                if (t) throw t;
                var o = n[0];
                e.trigger({
                    type: "request-reset",
                    video: r({}, o),
                    autoplay: !0
                }), document.addEventListener("visibilitychange", function() {
                    "visible" === document.visibilityState ? !i(e) && Math.abs(e.duration() - e.currentTime()) < 1 ? e.trigger("autoplay-next-video-restart") : e.play() : (!i(e) && Math.abs(e.duration() - e.currentTime()) < 1 && e.trigger("autoplay-next-video-cancel"), e.pause())
                })
            })
        };
        e.el().closest(".vjs-video-container").classList.add("mol-video-advertising-mode"), e.on("videoAd.start", function() {
            e.trigger("adStart")
        }), e.on("videoAd.impression", function() {
            e.trigger("adImpression")
        }), e.on("videoAd.error", function() {
            e.trigger({
                type: "adError",
                code: e.adUnit && e.adUnit.errorCode
            })
        }), e.on("timeupdate", function() {
            e.trigger({
                type: "time",
                duration: e.duration(),
                position: e.currentTime()
            })
        }), e.ready(function() {
            var n = new o(e, {});
            e.addChild(n), e.fetchRelatedVideos ? t() : e.on("related-videos-ready", t), setTimeout(function() {
                e.trigger("viewable")
            })
        })
    })
}, function(e, t, n) {
    var r = n(16),
        i = n(17),
        o = n(154),
        s = n(155),
        a = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, t);
                var n = new r(e),
                    a = new i(e);
                n.addChild(a), a.addChild(new o(e, {})), a.addChild(new s(e, {})), this.addChild(n)
            }
        });
    a.prototype.name = function() {
        return "MolControlsOverlayPanel"
    }, a.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-controls-overlay-panel"
        })
    }, e.exports = a
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t);
            var n = e.controlBar.getChild("molPreviousVideoButton"),
                r = e.controlBar.children_.find(function(e) {
                    return e.el_.classList.contains("vjs-play-control")
                }),
                i = e.controlBar.getChild("molSkipVideoButton");
            this.addChild(n), this.addChild(r), this.addChild(i)
        }
    });
    n.prototype.name = function() {
        return "MolOverlayMainControls"
    }, n.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-controls-overlay-main-controls"
        })
    }, e.exports = n
}, function(e, t) {
    var n = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t);
            var n = e.controlBar.children_.find(function(e) {
                    return e.el_.classList.contains("vjs-progress-control")
                }),
                r = e.controlBar.children_.find(function(e) {
                    return e.el_.classList.contains("vjs-volume-menu-button")
                }),
                i = e.controlBar.children_.find(function(e) {
                    return e.el_.classList.contains("vjs-timer-controls")
                });
            this.addChild(n), this.addChild(r), this.addChild(i)
        }
    });
    n.prototype.name = function() {
        return "MolOverlayBottomControls"
    }, n.prototype.createEl = function() {
        return videojs.createEl("div", {
            className: "mol-controls-overlay-bottom-controls"
        })
    }, e.exports = n
}, function(e, t, n) {}, function(e, t, n) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(1),
        o = n(0),
        s = n(158),
        a = function(e) {
            (new s).run(e)
        };
    a.init = function(e) {
        return (new s).run(e)
    }, a.initializeVideo = function(e, t) {
        return (new s).initializeVideo(e, t)
    }, a.clone = function(e, t) {
        var n = e.player,
            r = s.getMediaOpts(e);
        if (n && r) {
            t && (r = o.extend({}, r, t));
            var i = document.createElement("video");
            return i.className = "video-js", i.setAttribute("width", n.width()), i.setAttribute("height", n.height()), i.setAttribute("controls", "true"), i.setAttribute("preload", "none"), i.setAttribute("data-opts", JSON.stringify(r)), n.autoplay() && i.setAttribute("autoplay", "autoplay"), o.forEach(n.options().sources, function(e) {
                var t = document.createElement("source");
                t.setAttribute("src", e.src), t.setAttribute("width", e.width), t.setAttribute("height", e.height), t.setAttribute("type", e.type), i.appendChild(t)
            }), i
        }
    }, a.destroy = function(e) {
        a.forEachPlayer(e, function() {
            this.trigger("request-dispose")
        })
    }, a.forEachPlayer = function(e, t) {
        var n = void 0;
        "function" == typeof e && (t = e, e = void 0), n = (e = e || document) !== document && i.hasClass(e, "video-js") ? [e] : e.querySelectorAll(".video-js"), o.forEach(n, function(e) {
            e.player && t.apply(e.player)
        })
    };
    var l = {};
    a.on = function(e, t) {
        e in l || (l[e] = []), l[e].push(t)
    }, a.off = function(e, t) {
        e in l && (void 0 === (void 0 === t ? "undefined" : r(t)) ? delete l[e] : l[e] = l[e].filter(function(e) {
            return t !== e
        }))
    }, a.trigger = function(e, t) {
        for (var n = (e in l ? l[e] : []), r = 0, i = n.length; r < i; r++) n[r](t)
    }, e.exports = a
}, function(e, t, n) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = n(13).merge,
        o = n(3),
        s = n(159),
        a = function() {
            var e = {
                plugins: {}
            };
            if (window.adsTrackers && window.adsTrackers.isPluginConfiguredOn) {
                var t = Boolean(window.adsTrackers.isPluginConfiguredOn("videoFlyout")),
                    n = Boolean(window.adsTrackers.isPluginConfiguredOn("videoForceFlyout"));
                e.plugins.flyout = {
                    enabled: t,
                    active: t,
                    forceFlyout: {
                        enabled: n,
                        active: n
                    }
                }
            }
            return Promise.resolve(e)
        },
        l = {
            title: "",
            descr: "",
            poster: "",
            preload: "none",
            linkBaseURL: window.location.href,
            playerId: 0,
            videoId: 0,
            plugins: {
                "vjs-api-hooks": {},
                "duration-plugin": {},
                cmp: {
                    enabled: Boolean(document.querySelector(".video-iframe")) && Boolean(window.__cmp)
                },
                history: {},
                "player-state": {},
                "post-content": {},
                "player-events": {},
                "multiple-clicks-fix": {},
                reset: {},
                "social-share": {},
                title: {},
                mobile: {},
                streaming: {},
                "video-starts": {}
            }
        },
        u = DM && DM.pageEvents && DM.pageEvents.getPageMetadata ? DM.pageEvents.getPageMetadata() : {},
        c = function(e) {
            return "gamp" === e.syndicationService
        };

    function d(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var o, a = p.mergeConfigs.apply(p, [t].concat(r)),
            l = videojs(e, a);
        return o = a.source, Boolean(u.embedVideo) && "string" == typeof o && "DAILYMAILTV" === o.toUpperCase() && l.el().classList.add("mol-embed-dmtv-video"), a.isTitleHidden && l.el().closest(".vjs-video-container").classList.add("title-is-hidden"), c(l.options_) && (l.ready(function() {
            "complete" === document.readyState ? s() : document.addEventListener("readystatechange", function() {
                "complete" === document.readyState && s()
            })
        }), window.addEventListener("orientationchange", s)), l
    }

    function p(e) {
        if (!(this instanceof p)) return new p(e);
        this.options = e || l
    }
    p.prototype.run = function(e) {
        var t = this.options,
            n = p.getMediaEls(e),
            r = p.filterByInstantiability(n);
        return a().then(function(e) {
            r.forEach(function(n) {
                try {
                    d(n, e, t, p.getMediaOpts(n))
                } catch (e) {
                    console.error(e.message)
                }
            })
        })
    }, p.mergeConfigs = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        var s = i.apply(void 0, [{}].concat(n));
        return s.plugins && ("iOS" === o.os && o.osMajorVersion <= 7 && delete s.plugins["related-videos"], Object.keys(s.plugins).forEach(function(t) {
            e.plugins && e.plugins[t] && !1 === e.plugins[t].enabled ? delete s.plugins[t] : e.plugins[t] && (s.plugins[t] = i({}, s.plugins[t] || {}, e.plugins[t]))
        }), (s.isMobile || c(s)) && delete s.plugins.flyout), s
    }, p.prototype.initializeVideo = function(e, t) {
        var n = this;
        if (!e) throw new Error("Initialize Video Error: Video element '" + e + "'");
        if (t && "object" !== (void 0 === t ? "undefined" : r(t))) throw new Error("Initialize Video Error: Invalid options map");
        return a().then(function(r) {
            try {
                return d(e, r, n.options, t)
            } catch (e) {
                console.error("###", e.message)
            }
        })
    }, p.getMediaEls = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
        if (p.isVideoElement(e)) return [e];
        var t = e.getElementsByTagName("video"),
            n = [],
            r = void 0,
            i = void 0;
        if (t && t.length > 0)
            for (r = 0, i = t.length; r < i; r++) n.push(t[r]);
        return n
    }, p.filterByInstantiability = function(e) {
        return e.filter(p.canBeInstantiated)
    }, p.isVideoElement = function(e) {
        return Boolean(e) && Boolean(e.tagName) && "VIDEO" === e.tagName.toUpperCase()
    }, p.canBeInstantiated = function(e) {
        return p.isVideoElement(e) && Boolean(e.getAttribute("data-opts")) && !e.player
    }, p.getMediaOpts = function(e) {
        try {
            var t = e.getAttribute("data-opts");
            return JSON.parse(t)
        } catch (e) {
            return {}
        }
    }, e.exports = p
}, function(e, t) {
    e.exports = function() {
        window.parent.postMessage({
            height: document.body.scrollHeight,
            sentinel: "amp",
            type: "embed-size"
        }, "*")
    }
}, function(e, t, n) {
    var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        i = n(4);
    DM.later("bundle", function() {
        document.addEventListener("ez-modal-after-load", function(e) {
            var t = e.ui.modal.get(0);
            t && DM.molFeVideoplayer.init(t)
        }), document.addEventListener("ez-modal-after-open", function(e) {
            var t = e.ui.modal.get(0),
                n = e.opt;
            n.modalType && "video-overlay" === n.modalType && DM.molFeVideoplayer.forEachPlayer(t, function() {
                this.options().inPage && this.play()
            })
        }), document.addEventListener("ez-modal-before-close", function(e) {
            var t = e.ui.modal.get(0),
                n = e.opt,
                r = void 0;
            n.modalType && "video-overlay" === n.modalType ? DM.molFeVideoplayer.forEachPlayer(t, function() {
                this.pause()
            }) : t && (DM.molFeVideoplayer.destroy(t), (r = t.querySelector(".vjs-video-container")) && r.removeAttribute("id"))
        });
        document.addEventListener("click", function(e) {
            var t = e.target.closest("[data-videoplayer-open-playerid]");
            if (t) {
                var n = t.getAttribute("data-videoplayer-open-opts"),
                    s = void 0;
                e.preventDefault();
                var a = t.getAttribute("data-videoplayer-open-playerid"),
                    l = o(a, t);
                if (l && "string" == typeof n) {
                    try {
                        s = JSON.parse(n)
                    } catch (e) {
                        return void
                        function(e, t) {
                            var n = new XMLHttpRequest;
                            n.onload = function() {
                                t(JSON.parse(n.responseText))
                            }, n.open("GET", e, !0), n.send()
                        }(i.appendGeolocation(n), u)
                    }
                    u(s)
                }
            }

            function u(e) {
                l.resetVideo({
                    video: r({}, e, {
                        initialVideo: !1
                    }),
                    autoplay: !0
                })
            }
        }), document.addEventListener("click", function(e) {
            var t = e.target.closest("[data-videoplayer-playlist-playerid]");
            if (t) {
                e.preventDefault();
                var n = t.getAttribute("data-videoplayer-playlist-playerid"),
                    r = o(n, t);
                if (r) {
                    var i = t.getAttribute("data-videoplayer-playlist-number");
                    "next" === i ? r.next() : "previous" === i ? r.previous() : r.gotoVideo(parseInt(i, 10))
                }
            }
        });
        var e = document.querySelector("#mobileGalleryModal");
        e && e.addEventListener("open", function() {
            DM.molFeVideoplayer.trigger("pauseAll", {})
        })
    });
    var o = function(e, t) {
        var n = "#" + e + " [data-opts]",
            r = document.querySelectorAll(n);
        if (r.length) {
            if (r.length > 1)
                for (;
                    (t = t.parentNode) && !((r = t.querySelectorAll(n)).length > 0););
            var i = r[0].querySelector("[data-opts]");
            return i && i.player || t.querySelector(n).player
        }
    };
    DM.later(["DOM_READY", "videoplayer-ready"], function() {
        try {
            if (!window.PageCriteria.isMobile && DM.getPageMetadata().articleId && "#video" === window.location.hash) {
                var e = document.querySelector("video[data-opts]");
                e && e.player.ready(function() {
                    DM.molFeDomHelpers.scrollUtils.scrollToElement(e), DM.molFeDomHelpers.scrollUtils.scrollBy(0, 0 - window.innerHeight / 3)
                })
            }
        } catch (e) {}
    })
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = videojs.Component.extend({
        init: function(e, t) {
            videojs.Component.call(this, e, t)
        }
    });
    r.prototype.name = function() {
        return "mol-vp-banner-end-view"
    }, r.prototype.createEl = function() {
        var e = this.options().poster,
            t = videojs.createEl("div", {
                className: "mol-vp-banner__end-view"
            });
        return t.style.backgroundImage = 'url("' + e + '")', t
    };
    var i = r,
        o = function(e) {
            var t = new Image;
            return t.src = e, t
        },
        s = function(e) {
            var t = e.bannerImg,
                n = e.clickThroughUrl,
                r = e.clickTrackerUrls,
                i = e.onClick,
                s = document.createElement("IMG"),
                a = function(e) {
                    var t = e.clickThroughUrl,
                        n = e.className,
                        r = window.document.createElement("a");
                    return r.classList.add(n), r.href = t, r.target = "_blank", r.rel = "nofolow", r
                }({
                    clickThroughUrl: n,
                    className: "mol-vp-banner__blocker"
                });
            return s.classList.add("mol-vp-banner"), s.src = t, a.onclick = function() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var s, a = r[Symbol.iterator](); !(e = (s = a.next()).done); e = !0) {
                        var l = s.value;
                        o(l)
                    }
                } catch (e) {
                    t = !0, n = e
                } finally {
                    try {
                        !e && a.return && a.return()
                    } finally {
                        if (t) throw n
                    }
                }
                "function" == typeof i && i()
            }, a.appendChild(s), a
        },
        a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        l = videojs.Component.extend({
            init: function(e, t) {
                videojs.Component.call(this, e, a({}, t, {
                    onClick: function() {
                        e.pause()
                    }
                }))
            }
        });
    l.prototype.name = function() {
        return "mol-vp-banner"
    }, l.prototype.createEl = function() {
        var e = this.options(),
            t = e.bannerImg,
            n = e.clickThroughUrl,
            r = e.clickTrackerUrls,
            i = e.onClick;
        return s({
            bannerImg: t,
            clickThroughUrl: n,
            clickTrackerUrls: r,
            onClick: i
        })
    };
    var u = l;
    videojs.plugin("commercial-banner", function(e) {
        var t = this,
            n = e["banner-img"],
            r = e["click-tracker-urls"],
            s = void 0 === r ? [] : r,
            a = e["clickThrough-url"],
            l = e["end-screen-img"],
            c = e["impression-urls"],
            d = void 0 === c ? [] : c,
            p = void 0,
            h = function() {
                f(), p = new i(t, {
                    poster: l,
                    clickThroughUrl: a,
                    clickTrackerUrls: s
                }), t.addChild(p)
            },
            f = function() {
                p && (p.dispose(), t.removeChild(p), p = null)
            },
            v = t.el().closest(".vjs-video-container"),
            m = t.el().closest(".vjs-flyout-wrapper-fixed");
        v.classList.add("mol-vp-banner-mode"), m && m.classList.add("mol-vp-banner-mode"), t.ready(function() {
            if (n) {
                var e = new u(t, {
                    bannerImg: n,
                    clickThroughUrl: a,
                    clickTrackerUrls: s
                });
                t.addChild(e)
            }
            l && (t.on("playerstate.enter.started", h), t.on("playerstate.leave.started", f)), t.on(["flyout-close", "ended", "flyout-switchoff"], function(e) {
                    "ended" !== e.type && (t.expandOnFirstPlay = !0), t.resetVideo({
                        autoplay: !1,
                        video: t.options_
                    })
                }),
                function e() {
                    if ((Math.floor(t.currentTime()) || 0) >= 2) {
                        var n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var s, a = d[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                                var l = s.value;
                                o(l)
                            }
                        } catch (e) {
                            r = !0, i = e
                        } finally {
                            try {
                                !n && a.return && a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    } else t.one("timeupdate", e)
                }()
        })
    })
}]);
//# sourceMappingURL=mol-fe-videoplayer.min.js.map