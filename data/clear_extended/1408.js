! function(e) {
    function t(e, t, n, r) {
        for (var o, a = n.slice(), s = i(t, e), l = 0, u = a.length; u > l && (handler = a[l], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(s) : handler.call(e, s), !s.stoppedImmediatePropagation); l++);
        return o = !s.stoppedPropagation, r && o && e.parentNode ? e.parentNode.dispatchEvent(s) : !s.defaultPrevented
    }

    function n(e, t) {
        return {
            configurable: !0,
            get: e,
            set: t
        }
    }

    function r(e, t, r) {
        var i = y(t || e, r);
        m(e, "textContent", n(function() {
            return i.get.call(this)
        }, function(e) {
            i.set.call(this, e)
        }))
    }

    function i(e, t) {
        return e.currentTarget = t, e.eventPhase = e.target === e.currentTarget ? 2 : 3, e
    }

    function o(e, t) {
        for (var n = e.length; n-- && e[n] !== t;);
        return n
    }

    function a() {
        if ("BR" === this.tagName) return "\n";
        for (var e = this.firstChild, t = []; e;) 8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent), e = e.nextSibling;
        return t.join("")
    }

    function s(e) {
        !f && M.test(document.readyState) && (f = !f, document.detachEvent(d, s), e = document.createEvent("Event"), e.initEvent(p, !0, !0), document.dispatchEvent(e))
    }

    function l(e) {
        for (var t; t = this.lastChild;) this.removeChild(t);
        null != e && this.appendChild(document.createTextNode(e))
    }

    function u(t, n) {
        return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
    }
    if (!document.createEvent) {
        var c = !0,
            f = !1,
            d = "onreadystatechange",
            p = "DOMContentLoaded",
            h = "__IE8__" + Math.random(),
            g = e.Object,
            m = g.defineProperty || function(e, t, n) {
                e[t] = n.value
            },
            v = g.defineProperties || function(t, n) {
                for (var r in n)
                    if (w.call(n, r)) try {
                        m(t, r, n[r])
                    } catch (i) {
                        e.console && console.log(r + " failed on object:", t, i.message)
                    }
            },
            y = g.getOwnPropertyDescriptor,
            w = g.prototype.hasOwnProperty,
            b = e.Element.prototype,
            I = e.Text.prototype,
            C = /^[a-z]+$/,
            M = /loaded|complete/,
            A = {},
            S = document.createElement("div");
        r(e.HTMLCommentElement.prototype, b, "nodeValue"), r(e.HTMLScriptElement.prototype, null, "text"), r(I, null, "nodeValue"), r(e.HTMLTitleElement.prototype, null, "text"), m(e.HTMLStyleElement.prototype, "textContent", function(e) {
            return n(function() {
                return e.get.call(this.styleSheet)
            }, function(t) {
                e.set.call(this.styleSheet, t)
            })
        }(y(e.CSSStyleSheet.prototype, "cssText"))), v(b, {
            textContent: {
                get: a,
                set: l
            },
            firstElementChild: {
                get: function() {
                    for (var e = this.childNodes || [], t = 0, n = e.length; n > t; t++)
                        if (1 == e[t].nodeType) return e[t]
                }
            },
            lastElementChild: {
                get: function() {
                    for (var e = this.childNodes || [], t = e.length; t--;)
                        if (1 == e[t].nodeType) return e[t]
                }
            },
            previousElementSibling: {
                get: function() {
                    for (var e = this.previousSibling; e && 1 != e.nodeType;) e = e.previousSibling;
                    return e
                }
            },
            nextElementSibling: {
                get: function() {
                    for (var e = this.nextSibling; e && 1 != e.nodeType;) e = e.nextSibling;
                    return e
                }
            },
            childElementCount: {
                get: function() {
                    for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += 1 == t[n].nodeType);
                    return e
                }
            },
            addEventListener: {
                value: function(e, n, r) {
                    var i, a = this,
                        s = "on" + e,
                        l = a[h] || m(a, h, {
                            value: {}
                        })[h],
                        c = l[s] || (l[s] = {}),
                        f = c.h || (c.h = []);
                    if (!w.call(c, "w")) {
                        if (c.w = function(e) {
                                return e[h] || t(a, u(a, e), f, !1)
                            }, !w.call(A, s))
                            if (C.test(e)) try {
                                i = document.createEventObject(), i[h] = !0, 9 != a.nodeType && null == a.parentNode && S.appendChild(a), a.fireEvent(s, i), A[s] = !0
                            } catch (i) {
                                for (A[s] = !1; S.hasChildNodes();) S.removeChild(S.firstChild)
                            } else A[s] = !1;
                        (c.n = A[s]) && a.attachEvent(s, c.w)
                    }
                    o(f, n) < 0 && f[r ? "unshift" : "push"](n)
                }
            },
            dispatchEvent: {
                value: function(e) {
                    var n, r = this,
                        i = "on" + e.type,
                        o = r[h],
                        a = o && o[i],
                        s = !!a;
                    return e.target || (e.target = r), s ? a.n ? r.fireEvent(i, e) : t(r, e, a.h, !0) : (n = r.parentNode) ? n.dispatchEvent(e) : !0, !e.defaultPrevented
                }
            },
            removeEventListener: {
                value: function(e, t, n) {
                    var r = this,
                        i = "on" + e,
                        a = r[h],
                        s = a && a[i],
                        l = s && s.h,
                        u = l ? o(l, t) : -1;
                    u > -1 && l.splice(u, 1)
                }
            }
        }), v(I, {
            addEventListener: {
                value: b.addEventListener
            },
            dispatchEvent: {
                value: b.dispatchEvent
            },
            removeEventListener: {
                value: b.removeEventListener
            }
        }), v(e.XMLHttpRequest.prototype, {
            addEventListener: {
                value: function(e, t, n) {
                    var r = this,
                        i = "on" + e,
                        a = r[h] || m(r, h, {
                            value: {}
                        })[h],
                        s = a[i] || (a[i] = {}),
                        l = s.h || (s.h = []);
                    o(l, t) < 0 && (r[i] || (r[i] = function() {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), r.dispatchEvent(t)
                    }), l[n ? "unshift" : "push"](t))
                }
            },
            dispatchEvent: {
                value: function(e) {
                    var n = this,
                        r = "on" + e.type,
                        i = n[h],
                        o = i && i[r],
                        a = !!o;
                    return a && (o.n ? n.fireEvent(r, e) : t(n, e, o.h, !0))
                }
            },
            removeEventListener: {
                value: b.removeEventListener
            }
        }), v(e.Event.prototype, {
            bubbles: {
                value: !0,
                writable: !0
            },
            cancelable: {
                value: !0,
                writable: !0
            },
            preventDefault: {
                value: function() {
                    this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                }
            },
            stopPropagation: {
                value: function() {
                    this.stoppedPropagation = !0, this.cancelBubble = !0
                }
            },
            stopImmediatePropagation: {
                value: function() {
                    this.stoppedImmediatePropagation = !0, this.stopPropagation()
                }
            },
            initEvent: {
                value: function(e, t, n) {
                    this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                }
            }
        }), v(e.HTMLDocument.prototype, {
            textContent: {
                get: function() {
                    return 11 === this.nodeType ? a.call(this) : null
                },
                set: function(e) {
                    11 === this.nodeType && l.call(this, e)
                }
            },
            addEventListener: {
                value: function(t, n, r) {
                    var i = this;
                    b.addEventListener.call(i, t, n, r), c && t === p && !M.test(i.readyState) && (c = !1, i.attachEvent(d, s), e == top && function o(e) {
                        try {
                            i.documentElement.doScroll("left"), s()
                        } catch (t) {
                            setTimeout(o, 50)
                        }
                    }())
                }
            },
            dispatchEvent: {
                value: b.dispatchEvent
            },
            removeEventListener: {
                value: b.removeEventListener
            },
            createEvent: {
                value: function(e) {
                    var t;
                    if ("Event" !== e) throw new Error("unsupported " + e);
                    return t = document.createEventObject(), t.timeStamp = (new Date).getTime(), t
                }
            }
        }), v(e.Window.prototype, {
            getComputedStyle: {
                value: function() {
                    function e(e) {
                        this._ = e
                    }

                    function t() {}
                    var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
                        r = /^(top|right|bottom|left)$/,
                        i = /\-([a-z])/g,
                        o = function(e, t) {
                            return t.toUpperCase()
                        };
                    return e.prototype.getPropertyValue = function(e) {
                            var t, a, s, l = this._,
                                u = l.style,
                                c = l.currentStyle,
                                f = l.runtimeStyle;
                            return e = ("float" === e ? "style-float" : e).replace(i, o), t = c ? c[e] : u[e], n.test(t) && !r.test(e) && (a = u.left, s = f && f.left, s && (f.left = c.left), u.left = "fontSize" === e ? "1em" : t, t = u.pixelLeft + "px", u.left = a, s && (f.left = s)), null == t ? t : t + "" || "auto"
                        }, t.prototype.getPropertyValue = function() {
                            return null
                        },
                        function(n, r) {
                            return r ? new t(n) : new e(n)
                        }
                }()
            },
            addEventListener: {
                value: function(n, r, i) {
                    var a, s = e,
                        l = "on" + n;
                    s[l] || (s[l] = function(e) {
                        return t(s, u(s, e), a, !1)
                    }), a = s[l][h] || (s[l][h] = []), o(a, r) < 0 && a[i ? "unshift" : "push"](r)
                }
            },
            dispatchEvent: {
                value: function(t) {
                    var n = e["on" + t.type];
                    return n ? n.call(e, t) !== !1 && !t.defaultPrevented : !0
                }
            },
            removeEventListener: {
                value: function(t, n, r) {
                    var i = "on" + t,
                        a = (e[i] || g)[h],
                        s = a ? o(a, n) : -1;
                    s > -1 && a.splice(s, 1)
                }
            }
        })
    }
}(this),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.flowplayer = e()
    }
}(function() {
    var e;
    return function t(e, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function(t) {
                    var n = e[a][1][t];
                    return i(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function(e, t, n) {
            "use strict";
            var r = t.exports = {},
                i = e("class-list"),
                o = window.jQuery,
                a = e("punycode"),
                s = e("computed-style");
            r.noop = function() {}, r.identity = function(e) {
                    return e
                }, r.removeNode = function(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, r.find = function(e, t) {
                    return o ? o(e, t).toArray() : (t = t || document, Array.prototype.map.call(t.querySelectorAll(e), function(e) {
                        return e
                    }))
                }, r.text = function(e, t) {
                    e["innerText" in e ? "innerText" : "textContent"] = t
                }, r.findDirect = function(e, t) {
                    return r.find(e, t).filter(function(e) {
                        return e.parentNode === t
                    })
                }, r.hasClass = function(e, t) {
                    return "string" != typeof e.className ? !1 : i(e).contains(t)
                }, r.isSameDomain = function(e) {
                    var t = window.location,
                        n = r.createElement("a", {
                            href: e
                        });
                    return t.hostname === n.hostname && t.protocol === n.protocol && t.port === n.port
                }, r.css = function(e, t, n) {
                    return "object" == typeof t ? Object.keys(t).forEach(function(n) {
                        r.css(e, n, t[n])
                    }) : "undefined" != typeof n ? "" === n ? e ? e.style.removeProperty(t) : void 0 : e ? e.style.setProperty(t, n) : void 0 : e ? s(e, t) : void 0
                }, r.createElement = function(e, t, n) {
                    try {
                        var i = document.createElement(e);
                        for (var a in t) t.hasOwnProperty(a) && ("css" === a ? r.css(i, t[a]) : r.attr(i, a, t[a]));
                        return n && (i.innerHTML = n), i
                    } catch (s) {
                        if (!o) throw s;
                        return o("<" + e + ">" + n + "</" + e + ">").attr(t)[0]
                    }
                }, r.toggleClass = function(e, t, n) {
                    if (e) {
                        var r = i(e);
                        "undefined" == typeof n ? r.toggle(t) : n ? r.add(t) : n || r.remove(t)
                    }
                }, r.addClass = function(e, t) {
                    return r.toggleClass(e, t, !0)
                }, r.removeClass = function(e, t) {
                    return r.toggleClass(e, t, !1)
                }, r.append = function(e, t) {
                    return e.appendChild(t), e
                }, r.appendTo = function(e, t) {
                    return r.append(t, e), e
                }, r.prepend = function(e, t) {
                    e.insertBefore(t, e.firstChild)
                }, r.insertAfter = function(e, t, n) {
                    t == r.lastChild(e) && e.appendChild(n);
                    var i = Array.prototype.indexOf.call(e.children, t);
                    e.insertBefore(n, e.children[i + 1])
                }, r.html = function(e, t) {
                    e = e.length ? e : [e], e.forEach(function(e) {
                        e.innerHTML = t
                    })
                }, r.attr = function(e, t, n) {
                    if ("class" === t && (t = "className"), r.hasOwnOrPrototypeProperty(e, t)) try {
                        e[t] = n
                    } catch (i) {
                        if (!o) throw i;
                        o(e).attr(t, n)
                    } else n === !1 ? e.removeAttribute(t) : e.setAttribute(t, n);
                    return e
                }, r.prop = function(e, t, n) {
                    return "undefined" == typeof n ? e && e[t] : void(e[t] = n)
                }, r.offset = function(e) {
                    var t = e.getBoundingClientRect();
                    return e.offsetWidth / e.offsetHeight > e.clientWidth / e.clientHeight && (t = {
                        left: 100 * t.left,
                        right: 100 * t.right,
                        top: 100 * t.top,
                        bottom: 100 * t.bottom,
                        width: 100 * t.width,
                        height: 100 * t.height
                    }), t
                }, r.width = function(e, t) {
                    if (t) return e.style.width = ("" + t).replace(/px$/, "") + "px";
                    var n = r.offset(e).width;
                    return "undefined" == typeof n ? e.offsetWidth : n
                }, r.height = function(e, t) {
                    if (t) return e.style.height = ("" + t).replace(/px$/, "") + "px";
                    var n = r.offset(e).height;
                    return "undefined" == typeof n ? e.offsetHeight : n
                }, r.lastChild = function(e) {
                    return e.children[e.children.length - 1]
                }, r.hasParent = function(e, t) {
                    for (var n = e.parentElement; n;) {
                        if (r.matches(n, t)) return !0;
                        n = n.parentElement
                    }
                    return !1
                }, r.createAbsoluteUrl = function(e) {
                    return r.createElement("a", {
                        href: e
                    }).href
                }, r.xhrGet = function(e, t, n) {
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        return 4 === this.readyState ? this.status >= 400 ? n() : void t(this.responseText) : void 0
                    }, r.open("get", e, !0), r.send()
                }, r.pick = function(e, t) {
                    var n = {};
                    return t.forEach(function(t) {
                        e.hasOwnProperty(t) && (n[t] = e[t])
                    }), n
                }, r.hostname = function(e) {
                    return a.toUnicode(e || window.location.hostname)
                }, r.browser = {
                    webkit: "WebkitAppearance" in document.documentElement.style
                }, r.getPrototype = function(e) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__
                }, r.hasOwnOrPrototypeProperty = function(e, t) {
                    for (var n = e; n;) {
                        if (Object.prototype.hasOwnProperty.call(n, t)) return !0;
                        n = r.getPrototype(n)
                    }
                    return !1
                }, r.matches = function(e, t) {
                    var n = Element.prototype,
                        r = n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector || function(e) {
                            for (var t = this, n = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; n[r] && n[r] !== t;) r++;
                            return n[r] ? !0 : !1
                        };
                    return r.call(e, t)
                },
                function(e) {
                    function t(e) {
                        return e.replace(/-[a-z]/g, function(e) {
                            return e[1].toUpperCase()
                        })
                    }
                    "undefined" != typeof e.setAttribute && (e.setProperty = function(e, n) {
                        return this.setAttribute(t(e), String(n))
                    }, e.getPropertyValue = function(e) {
                        return this.getAttribute(t(e)) || null
                    }, e.removeProperty = function(e) {
                        var n = this.getPropertyValue(e);
                        return this.removeAttribute(t(e)), n
                    })
                }(window.CSSStyleDeclaration.prototype)
        }, {
            "class-list": 34,
            "computed-style": 35,
            punycode: 42
        }],
        2: [function(e, t, n) {
            "use strict";
            var r = e("../common");
            t.exports = function(e, t, n, i) {
                n = n || "opaque";
                var o = "obj" + ("" + Math.random()).slice(2, 15),
                    a = '<object class="fp-engine" id="' + o + '" name="' + o + '" ',
                    s = navigator.userAgent.indexOf("MSIE") > -1;
                a += s ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + e + '" type="application/x-shockwave-flash">';
                var l = {
                    width: "100%",
                    height: "100%",
                    allowscriptaccess: "always",
                    wmode: n,
                    quality: "high",
                    flashvars: "",
                    movie: e + (s ? "?" + o : ""),
                    name: o
                };
                "transparent" !== n && (l.bgcolor = i || "#333333"), Object.keys(t).forEach(function(e) {
                    l.flashvars += e + "=" + t[e] + "&"
                }), Object.keys(l).forEach(function(e) {
                    a += '<param name="' + e + '" value="' + l[e] + '"/>'
                }), a += "</object>";
                var u = r.createElement("div", {}, a);
                return r.find("object", u)
            }, window.attachEvent && window.attachEvent("onbeforeunload", function() {
                window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function() {}
            })
        }, {
            "../common": 1
        }],
        3: [function(e, t, n) {
            "use strict";

            function r(e) {
                return /^https?:/.test(e)
            }
            var i, o = e("../flowplayer"),
                a = e("../common"),
                s = e("./embed"),
                l = e("extend-object"),
                u = e("bean");
            i = function(e, t) {
                function n(e) {
                    function t(e) {
                        return ("0" + parseInt(e).toString(16)).slice(-2)
                    }
                    return (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + t(e[1]) + t(e[2]) + t(e[3]) : void 0
                }

                function c(e) {
                    if (7 === e.length) return e;
                    var t = e.split("").slice(1);
                    return "#" + t.map(function(e) {
                        return e + e
                    }).join("")
                }

                function f(e) {
                    return /application\/x-mpegurl/i.test(e.type)
                }
                var d, p, h, g, m = e.conf,
                    v = [],
                    y = {
                        engineName: i.engineName,
                        pick: function(t) {
                            var n = l({}, function() {
                                if (o.support.flashVideo) {
                                    for (var n, r, i = 0; i < t.length; i++)
                                        if (r = t[i], /mp4|flv|flash/i.test(r.type) && (n = r), e.conf.swfHls && /mpegurl/i.test(r.type) && (n = r), n && !/mp4/i.test(n.type)) return n;
                                    return n
                                }
                            }());
                            if (n) return !n.src || r(n.src) || e.conf.rtmp || n.rtmp || (n.src = a.createAbsoluteUrl(n.src)), n
                        },
                        suspendEngine: function() {
                            g = !0
                        },
                        resumeEngine: function() {
                            g = !1
                        },
                        load: function(i) {
                            function w(e) {
                                return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                            }
                            d = i, v.forEach(function(e) {
                                clearTimeout(e)
                            });
                            var b = a.findDirect("video", t)[0] || a.find(".fp-player > video", t)[0],
                                I = i.src,
                                C = r(I),
                                M = function() {
                                    a.removeNode(b)
                                },
                                A = function(e) {
                                    return e.some(function(e) {
                                        return !!b.canPlayType(e.type)
                                    })
                                };
                            o.support.video && a.prop(b, "autoplay") && A(i.sources) ? u.one(b, "timeupdate", M) : M();
                            var S = i.rtmp || m.rtmp;
                            if (C || S || (I = a.createAbsoluteUrl(I)), h && f(i) && h.data !== a.createAbsoluteUrl(m.swfHls) && y.unload(), h) {
                                ["live", "preload", "loop"].forEach(function(e) {
                                    i.hasOwnProperty(e) && h.__set(e, i[e])
                                }), Object.keys(i.flashls || {}).forEach(function(e) {
                                    h.__set("hls_" + e, i.flashls[e])
                                });
                                var E = !1;
                                if (!C && S) h.__set("rtmp", S.url || S);
                                else {
                                    var j = h.__get("rtmp");
                                    E = !!j, h.__set("rtmp", null)
                                }
                                h.__play(I, E || i.rtmp && i.rtmp !== m.rtmp)
                            } else {
                                p = "fpCallback" + ("" + Math.random()).slice(3, 15), I = w(I);
                                var D = {
                                    hostname: m.embedded ? a.hostname(m.hostname) : a.hostname(location.hostname),
                                    url: I,
                                    callback: p
                                };
                                t.getAttribute("data-origin") && (D.origin = t.getAttribute("data-origin")), ["proxy", "key", "autoplay", "preload", "subscribe", "live", "loop", "debug", "splash", "poster", "rtmpt"].forEach(function(e) {
                                    m.hasOwnProperty(e) && (D[e] = m[e]), i.hasOwnProperty(e) && (D[e] = i[e]), (m.rtmp || {}).hasOwnProperty(e) && (D[e] = (m.rtmp || {})[e]), (i.rtmp || {}).hasOwnProperty(e) && (D[e] = (i.rtmp || {})[e])
                                }), m.rtmp && (D.rtmp = m.rtmp.url || m.rtmp), i.rtmp && (D.rtmp = i.rtmp.url || i.rtmp), Object.keys(i.flashls || {}).forEach(function(e) {
                                    var t = i.flashls[e];
                                    D["hls_" + e] = t
                                });
                                var N = "undefined" != typeof i.hlsQualities ? i.hlsQualities : m.hlsQualities;
                                "undefined" != typeof N && (D.hlsQualities = N ? encodeURIComponent(JSON.stringify(N)) : N), void 0 !== m.bufferTime && (D.bufferTime = m.bufferTime), C && delete D.rtmp, D.rtmp && (D.rtmp = w(D.rtmp));
                                var L, x = m.bgcolor || a.css(t, "background-color") || "";
                                0 === x.indexOf("rgb") ? L = n(x) : 0 === x.indexOf("#") && (L = c(x)), D.initialVolume = e.volumeLevel;
                                var T = f(i) ? m.swfHls : m.swf;
                                h = s(T, D, m.wmode, L)[0];
                                var Z = a.find(".fp-player", t)[0];
                                a.prepend(Z, h), e.off("quality.flashengine").on("quality.flashengine", function(t, n, r) {
                                    var i = "undefined" != typeof e.video.hlsQualities ? e.video.hlsQualities : e.conf.hlsQualities;
                                    i && h.__quality(r)
                                }), setTimeout(function() {
                                    try {
                                        if (!h.PercentLoaded()) return e.trigger("error", [e, {
                                            code: 7,
                                            url: m.swf
                                        }])
                                    } catch (t) {}
                                }, 5e3), v.push(setTimeout(function() {
                                    "undefined" == typeof h.PercentLoaded && e.trigger("flashdisabled", [e])
                                }, 15e3)), v.push(setTimeout(function() {
                                    "undefined" == typeof h.PercentLoaded && e.trigger("flashdisabled", [e, !1])
                                }, 500)), e.off("resume.flashhack").on("resume.flashhack", function() {
                                    var t = setTimeout(function() {
                                        var t = h.__status().time,
                                            n = setTimeout(function() {
                                                e.playing && !e.loading && h.__status().time === t && e.trigger("flashdisabled", [e])
                                            }, 400);
                                        v.push(n), e.one("seek.flashhack pause.flashhack load.flashack", function() {
                                            clearTimeout(n)
                                        })
                                    }, 800);
                                    v.push(t), e.one("progress", function() {
                                        clearTimeout(t)
                                    })
                                }), h.pollInterval = setInterval(function() {
                                    if (h && !g) {
                                        var t = h.__status ? h.__status() : null;
                                        t && ((e.conf.live || e.live || i.live) && (i.seekOffset = t.seekOffset, i.duration = t.duration + t.seekOffset), e.playing && t.time && t.time !== e.video.time && e.trigger("progress", [e, t.time]), i.buffer = t.buffer / i.bytes * i.duration, e.trigger("buffer", [e, i.buffer]), !i.buffered && t.time > 0 && (i.buffered = !0, e.trigger("buffered", [e])))
                                    }
                                }, 250), window[p] = function(n, r) {
                                    var i = d;
                                    m.debug && (0 === n.indexOf("debug") && r && r.length ? console.log.apply(console, ["-- " + n].concat(r)) : console.log("--", n, r));
                                    var o = {
                                        type: n
                                    };
                                    switch (n) {
                                        case "ready":
                                            r = l(i, r);
                                            break;
                                        case "click":
                                            o.flash = !0;
                                            break;
                                        case "keydown":
                                            o.which = r;
                                            break;
                                        case "seek":
                                            i.time = r;
                                            break;
                                        case "status":
                                            e.trigger("progress", [e, r.time]), r.buffer < i.bytes && !i.buffered ? (i.buffer = r.buffer / i.bytes * i.duration, e.trigger("buffer", i.buffer)) : i.buffered || (i.buffered = !0, e.trigger("buffered"));
                                            break;
                                        case "metadata":
                                            var a = atob(r);
                                            r = {
                                                key: a.substr(10, 4),
                                                data: a.substr(21)
                                            }
                                    }
                                    "click" === n || "keydown" === n ? (o.target = t, u.fire(t, n, [o])) : "buffered" != n && "unload" !== n ? setTimeout(function() {
                                        e.trigger(o, [e, r])
                                    }, 1) : "unload" === n && e.trigger(o, [e, r])
                                }
                            }
                        },
                        speed: a.noop,
                        unload: function() {
                            h && h.__unload && h.__unload();
                            try {
                                p && window[p] && delete window[p]
                            } catch (n) {}
                            a.find("object", t).forEach(a.removeNode), h = 0, e.off(".flashengine"), e.off(".flashhack"), clearInterval(h.pollInterval), v.forEach(function(e) {
                                clearTimeout(e)
                            })
                        }
                    };
                return ["pause", "resume", "seek", "volume"].forEach(function(t) {
                    y[t] = function(n) {
                        try {
                            e.ready && (void 0 === n ? h["__" + t]() : h["__" + t](n))
                        } catch (r) {
                            if ("undefined" == typeof h["__" + t]) return e.trigger("flashdisabled", [e]);
                            throw r
                        }
                    }
                }), y
            }, i.engineName = "flash", i.canPlay = function(e, t) {
                return o.support.flashVideo && /video\/(mp4|flash|flv)/i.test(e) || o.support.flashVideo && t.swfHls && /mpegurl/i.test(e)
            }, o.engines.push(i)
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./embed": 2,
            bean: 32,
            "extend-object": 37
        }],
        4: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                return t = t || 100, Math.round(e * t) / t
            }

            function i(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : e
            }

            function o(e) {
                return /^(video|application)/i.test(e) || (e = i(e)), !!p.canPlayType(e).replace("no", "")
            }

            function a(e, t) {
                var n = e.filter(function(e) {
                    return e.type === t
                });
                return n.length ? n[0] : null
            }
            var s, l, u = e("../flowplayer"),
                c = e("bean"),
                f = e("extend-object"),
                d = e("../common"),
                p = document.createElement("video"),
                h = {
                    ended: "finish",
                    pause: "pause",
                    play: "resume",
                    timeupdate: "progress",
                    volumechange: "volume",
                    ratechange: "speed",
                    seeked: "seek",
                    loadeddata: u.support.browser.safari ? 0 : "ready",
                    canplaythrough: u.support.browser.safari ? "ready" : 0,
                    error: "error",
                    dataunavailable: "error",
                    webkitendfullscreen: !u.support.inlineVideo && "unload"
                },
                g = function(e, t, n, r, o) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof n && (n = "none"), "undefined" == typeof r && (r = !0), "undefined" == typeof o && (o = !0);
                    var a = !1;
                    if (t && u.support.mutedAutoplay && (a = !0), r && s) return s.type = i(e.type), s.src = e.src, d.find("track", s).forEach(d.removeNode), s.removeAttribute("crossorigin"), s;
                    var l = document.createElement("video");
                    l.src = e.src, l.type = i(e.type);
                    var c = "fp-engine ";
                    return l.className = c, u.support.autoplay && (l.autoplay = t ? "autoplay" : !1), u.support.dataload && (l.preload = n), a && (l.muted = !0), o && (l.setAttribute("webkit-playsinline", "true"), l.setAttribute("playsinline", "true")), r && (s = l), l
                };
            l = function(e, t) {
                function n(n, i, a) {
                    var s = t.getAttribute("data-flowplayer-instance-id");
                    if (n.listeners && n.listeners.hasOwnProperty(s)) return void(n.listeners[s] = a);
                    (n.listeners || (n.listeners = {}))[s] = a, c.on(i, "error", function(t) {
                        try {
                            o(t.target.getAttribute("type")) && e.trigger("error", [e, {
                                code: 4,
                                video: f(a, {
                                    src: n.src,
                                    url: n.src
                                })
                            }])
                        } catch (r) {}
                    }), e.on("shutdown", function() {
                        c.off(i), c.off(n, ".dvrhack"), e.off(".loophack")
                    });
                    var l = {},
                        u = function(t) {
                            "metadata" === t.kind && (t.mode = "hidden", t.addEventListener("cuechange", function() {
                                e.trigger("metadata", [e, t.activeCues[0].value])
                            }, !1))
                        };
                    return n && n.textTracks && n.textTracks.length && Array.prototype.forEach.call(n.textTracks, u), n && n.textTracks && "function" == typeof n.textTracks.addEventListener && n.textTracks.addEventListener("addtrack", function(e) {
                        u(e.track)
                    }, !1), (e.conf.dvr || e.dvr || a.dvr) && c.on(n, "progress.dvrhack", function() {
                        n.seekable.length && (e.video.duration = n.seekable.end(null), e.video.seekOffset = n.seekable.start(null), e.trigger("dvrwindow", [e, {
                            start: n.seekable.start(null),
                            end: n.seekable.end(null)
                        }]), n.currentTime >= n.seekable.start(null) || (n.currentTime = n.seekable.start(null)))
                    }), Object.keys(h).forEach(function(i) {
                        var o = h[i];
                        if ("webkitendfullscreen" === i && e.conf.disableInline && (o = "unload"), o) {
                            var u = function(l) {
                                if (a = n.listeners[s], l.target && d.hasClass(l.target, "fp-engine")) {
                                    b.debug && !/progress/.test(o) && console.log(i, "->", o, l);
                                    var u = function() {
                                        e.trigger(o, [e, c])
                                    };
                                    if (!e.ready && !/ready|error/.test(o) || !o || !d.find("video", t).length) return void("resume" === o && e.one("ready", function() {
                                        setTimeout(function() {
                                            u()
                                        })
                                    }));
                                    var c;
                                    if ("unload" === o) return void e.unload();
                                    switch (o) {
                                        case "ready":
                                            if (e.ready) return;
                                            c = f(a, {
                                                duration: n.duration < Number.MAX_VALUE ? n.duration : 0,
                                                width: n.videoWidth,
                                                height: n.videoHeight,
                                                url: n.currentSrc,
                                                src: n.currentSrc
                                            });
                                            try {
                                                c.seekable = /mpegurl/i.test(a ? a.type || "" : "") && n.duration || n.seekable && n.seekable.end(null) || e.live
                                            } catch (h) {}
                                            if (p = p || setInterval(function() {
                                                    try {
                                                        c.buffer = n.buffered.end(null)
                                                    } catch (t) {}
                                                    c.buffer && (r(c.buffer, 1e3) < r(c.duration, 1e3) && !c.buffered && c.buffer !== m ? (e.trigger("buffer", [e, c.buffer]), m = c.buffer) : c.buffered || c.buffer === m || (c.buffered = !0, e.trigger("buffer", [e, c.buffer]).trigger("buffered", l), m = c.buffer, clearInterval(p), p = 0))
                                                }, 250), !e.live && !c.duration && !w.hlsDuration && "loadeddata" === i) {
                                                var g = function() {
                                                    c.duration = n.duration;
                                                    try {
                                                        c.seekable = n.seekable && n.seekable.end(null)
                                                    } catch (e) {}
                                                    u(), n.removeEventListener("durationchange", g), d.toggleClass(t, "is-live", !1)
                                                };
                                                n.addEventListener("durationchange", g);
                                                var v = function() {
                                                    e.ready || n.duration || (c.duration = 0, d.addClass(t, "is-live"), u()), n.removeEventListener("timeupdate", v)
                                                };
                                                return void n.addEventListener("timeupdate", v)
                                            }
                                            break;
                                        case "progress":
                                        case "seek":
                                            if (n.currentTime > 0 || e.live) c = Math.max(n.currentTime, 0);
                                            else if ("progress" == o) return;
                                            break;
                                        case "speed":
                                            c = r(n.playbackRate);
                                            break;
                                        case "volume":
                                            c = r(n.volume);
                                            break;
                                        case "error":
                                            try {
                                                c = (l.srcElement || l.originalTarget).error, c.video = f(a, {
                                                    src: n.src,
                                                    url: n.src
                                                })
                                            } catch (y) {
                                                return
                                            }
                                    }
                                    u()
                                }
                            };
                            t.addEventListener(i, u, !0), l[i] || (l[i] = []), l[i].push(u)
                        }
                    }), l
                }
                var i, p, m, v, y = d.findDirect("video", t)[0] || d.find(".fp-player > video", t)[0],
                    w = u.support,
                    b = e.conf;
                return i = {
                    engineName: l.engineName,
                    pick: function(e) {
                        var t = function() {
                            if (w.video) {
                                if (b.videoTypePreference) {
                                    var t = a(e, b.videoTypePreference);
                                    if (t) return t
                                }
                                for (var n = 0; n < e.length; n++)
                                    if (o(e[n].type)) return e[n]
                            }
                        }();
                        if (t) return "string" == typeof t.src && (t.src = d.createAbsoluteUrl(t.src)), t
                    },
                    load: function(r) {
                        var o = d.find(".fp-player", t)[0],
                            a = !1,
                            s = !1;
                        if (b.splash && !y ? (y = g(r, void 0, void 0, void 0, !b.disableInline), d.prepend(o, y), s = !0) : y ? (d.addClass(y, "fp-engine"), d.find("source,track", y).forEach(d.removeNode), e.conf.nativesubtitles || d.attr(y, "crossorigin", !1), a = y.src === r.src, b.disableInline || (y.setAttribute("webkit-playsinline", "true"), y.setAttribute("playsinline", "true")), y.autoplay && u.support.mutedAutoplay && (y.muted = !0)) : (y = g(r, !!r.autoplay || !!b.autoplay, b.clip.preload || !0, !1, !b.disableInline), d.prepend(o, y), s = !0), w.inlineVideo || d.css(y, {
                                position: "absolute",
                                top: "-9999em"
                            }), u.support.subtitles && b.nativesubtitles && r.subtitles && r.subtitles.length) {
                            d.addClass(y, "native-subtitles");
                            var l = r.subtitles,
                                f = function(e) {
                                    var t = y.textTracks;
                                    t.length && (t[0].mode = e)
                                };
                            l.some(function(e) {
                                return !d.isSameDomain(e.src)
                            }) && d.attr(y, "crossorigin", "anonymous"), "function" == typeof y.textTracks.addEventListener && y.textTracks.addEventListener("addtrack", function() {
                                f("disabled"), f("showing")
                            }), l.forEach(function(e) {
                                y.appendChild(d.createElement("track", {
                                    kind: "subtitles",
                                    srclang: e.srclang || "en",
                                    label: e.label || "en",
                                    src: e.src,
                                    "default": e["default"]
                                }))
                            })
                        }
                        c.off(y, "timeupdate", d.noop), c.on(y, "timeupdate", d.noop), d.prop(y, "loop", !1), e.off(".loophack"), (r.loop || b.loop) && (/mpegurl/i.test(r.type) ? e.on("finish.loophack", function() {
                            e.resume()
                        }) : d.prop(y, "loop", !0)), "undefined" != typeof v && (y.volume = v), (e.video.src && r.src != e.video.src || r.index) && d.attr(y, "autoplay", "autoplay"), y.src = r.src, y.type = r.type, i._listeners = n(y, d.find("source", y).concat(y), r) || i._listeners, (a || s && !b.splash) && y.load(), s || !w.iOS.iPhone && !w.iOS.iPad || y.load(), w.iOS.iPad && w.iOS.chrome && y.load(), y.paused && (r.autoplay || b.autoplay || b.splash) && y.play()
                    },
                    pause: function() {
                        y.pause()
                    },
                    resume: function() {
                        y.play()
                    },
                    speed: function(e) {
                        y.playbackRate = e
                    },
                    seek: function(t) {
                        try {
                            var n = e.paused;
                            y.currentTime = t, n && y.pause()
                        } catch (r) {}
                    },
                    volume: function(e) {
                        v = e, y && (y.volume = e)
                    },
                    unload: function() {
                        d.find("video.fp-engine", t).forEach(function(e) {
                            d.attr(e, "src", ""), d.removeNode(e)
                        }), w.cachedVideoTag || (s = null), p = clearInterval(p);
                        var e = t.getAttribute("data-flowplayer-instance-id");
                        delete y.listeners[e], y = 0, i._listeners && Object.keys(i._listeners).forEach(function(e) {
                            i._listeners[e].forEach(function(n) {
                                t.removeEventListener(e, n, !0)
                            })
                        })
                    }
                }
            }, l.canPlay = function(e) {
                return u.support.video && o(e)
            }, l.engineName = "html5", u.engines.push(l)
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32,
            "extend-object": 37
        }],
        5: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                e.on("ready", function() {
                    var e = i.find("video.fp-engine", t)[0];
                    e && (e.setAttribute("x-webkit-airplay", "allow"), window.WebKitPlaybackTargetAvailabilityEvent && (e.addEventListener("webkitplaybacktargetavailabilitychanged", function(e) {
                        if ("available" === e.availability) {
                            var n = i.find(".fp-header", t)[0];
                            i.find(".fp-airplay", n).forEach(i.removeNode);
                            var r = i.createElement("a", {
                                "class": "fp-airplay fp-icon",
                                title: "Play on AirPlay device"
                            });
                            n.insertBefore(r, i.find(".fp-fullscreen", n)[0])
                        }
                    }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function() {
                        var n = i.find(".fp-airplay", t)[0];
                        n && i.toggleClass(n, "fp-active", e.webkitCurrentPlaybackTargetIsWireless)
                    })))
                }), o.on(t, "click", ".fp-airplay", function(e) {
                    e.preventDefault();
                    var n = i.find("video.fp-engine", t)[0];
                    n.webkitShowPlaybackTargetPicker()
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        6: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("./resolve").TYPE_RE,
                o = e("scriptjs"),
                a = e("bean");
            r(function(e, t) {
                var n, r = e.conf.analytics,
                    s = 0,
                    l = 0;
                if (r) {
                    "undefined" == typeof _gat && o("//google-analytics.com/ga.js");
                    var u = function() {
                            var e = _gat._getTracker(r);
                            return e._setAllowLinker(!0), e
                        },
                        c = function(r, o, a) {
                            if (a = a || e.video, s && "undefined" != typeof _gat) {
                                var l = u();
                                l._trackEvent("Video / Seconds played", e.engine.engineName + "/" + a.type, a.title || t.getAttribute("title") || a.src.split("/").slice(-1)[0].replace(i, ""), Math.round(s / 1e3)), s = 0, n && (clearTimeout(n), n = null)
                            }
                        };
                    e.bind("load unload", c).bind("progress", function() {
                        e.seeking || (s += l ? +new Date - l : 0, l = +new Date), n || (n = setTimeout(function() {
                            n = null;
                            var e = u();
                            e._trackEvent("Flowplayer heartbeat", "Heartbeat", "", 0, !0)
                        }, 6e5))
                    }).bind("pause", function() {
                        l = 0
                    }), e.bind("shutdown", function() {
                        a.off(window, "unload", c)
                    }), a.on(window, "unload", c)
                }
            })
        }, {
            "../flowplayer": 29,
            "./resolve": 19,
            bean: 32,
            scriptjs: 43
        }],
        7: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean"),
                a = e("scriptjs");
            r(function(e, t) {
                function n() {
                    var e, t, n;
                    e = g.applicationId || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, t = new chrome.cast.SessionRequest(e), n = new chrome.cast.ApiConfig(t, r, s), chrome.cast.initialize(n, l, u)
                }

                function r() {
                    console.log("sessionListener")
                }

                function s(e) {
                    e === chrome.cast.ReceiverAvailability.AVAILABLE && c()
                }

                function l() {}

                function u() {
                    console.log("onError")
                }

                function c() {
                    var e = i.find(".fp-header", t)[0];
                    i.find(".fp-chromecast", e).forEach(i.removeNode), i.find(".fp-chromecast-engine", t).forEach(i.removeNode), h = i.createElement("a", {
                        "class": "fp-chromecast fp-icon",
                        title: "Play on Cast device"
                    }), e.insertBefore(h, i.find(".fp-fullscreen", e)[0]);
                    var n = i.createElement("div", {
                            "class": "fp-chromecast-engine"
                        }),
                        r = i.createElement("p", {
                            "class": "fp-chromecast-engine-status"
                        }),
                        o = i.createElement("p", {
                            "class": "fp-chromecast-engine-icon"
                        });
                    n.appendChild(o), n.appendChild(r);
                    var a = i.find(".fp-engine", t)[0];
                    a ? a.parentNode.insertBefore(n, a) : i.prepend(i.find(".fp-player", t)[0] || t, n)
                }

                function f() {
                    clearInterval(p), p = null, e.release(), i.toggleClass(t, "is-chromecast", !1), i.toggleClass(h, "fp-active", !1)
                }
                if (e.conf.chromecast !== !1) {
                    a("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"), window.__onGCastApiAvailable = function(e) {
                        e && n()
                    };
                    var d, p, h, g = e.conf.chromecast || {};
                    o.on(t, "click", ".fp-chromecast", function(n) {
                        return n.preventDefault(), d ? (e.trigger("pause", [e]), d.stop(), d = null, void f()) : (e.playing && e.pause(), void chrome.cast.requestSession(function(n) {
                            function r(n) {
                                n.addUpdateListener(function(r) {
                                    if (d) {
                                        p = p || setInterval(function() {
                                            e.trigger("progress", [e, n.getEstimatedTime()])
                                        }, 500), r ? (i.toggleClass(t, "is-chromecast", !0), i.toggleClass(h, "fp-active", !0), e.hijack({
                                            pause: function() {
                                                n.pause()
                                            },
                                            resume: function() {
                                                n.play()
                                            },
                                            seek: function(e) {
                                                var t = new chrome.cast.media.SeekRequest;
                                                t.currentTime = e, n.seek(t)
                                            }
                                        })) : (f(), e.trigger("finish", [e]));
                                        var o = n.playerState;
                                        e.paused && o === chrome.cast.media.PlayerState.PLAYING && e.trigger("resume", [e]), e.playing && o === chrome.cast.media.PlayerState.PAUSED && e.trigger("pause", [e]), i.toggleClass(t, "is-loading", o === chrome.cast.media.PlayerState.BUFFERING)
                                    }
                                })
                            }
                            d = n;
                            var o = d.receiver.friendlyName;
                            i.html(i.find(".fp-chromecast-engine-status")[0], "Playing on device " + o);
                            var a = new chrome.cast.media.MediaInfo(e.video.src),
                                s = new chrome.cast.media.LoadRequest(a);
                            d.loadMedia(s, r, function() {})
                        }, function(e) {
                            console.error("requestSession error", e)
                        }))
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32,
            scriptjs: 43
        }],
        8: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                function n(e) {
                    t.className = t.className.replace(a, " "), e >= 0 && i.addClass(t, "cue" + e)
                }

                function r(t) {
                    var n = t && !isNaN(t.time) ? t.time : t;
                    return 0 > n && (n = e.video.duration + n), .125 * Math.round(n / .125)
                }
                var a = / ?cue\d+ ?/,
                    s = !1,
                    l = {},
                    u = -.125,
                    c = function(t) {
                        var r = e.cuepoints.indexOf(t);
                        isNaN(t) || (t = {
                            time: t
                        }), t.index = r, n(r), e.trigger("cuepoint", [e, t])
                    };
                e.on("progress", function(e, t, n) {
                    if (!s)
                        for (var i = r(n); i > u;) u += .125, l[u] && l[u].forEach(c)
                }).on("unload", n).on("beforeseek", function(e) {
                    setTimeout(function() {
                        e.defaultPrevented || (s = !0)
                    })
                }).on("seek", function(e, t, i) {
                    n(), u = r(i || 0) - .125, s = !1, !i && l[0] && l[0].forEach(c)
                }).on("ready", function(t, n, r) {
                    u = -.125;
                    var i = r.cuepoints || e.conf.cuepoints || [];
                    e.setCuepoints(i)
                }).on("finish", function() {
                    u = -.125
                }), e.conf.generate_cuepoints && e.bind("load", function() {
                    i.find(".fp-cuepoint", t).forEach(i.removeNode)
                }), e.setCuepoints = function(t) {
                    return e.cuepoints = [], l = {}, t.forEach(e.addCuepoint), e
                }, e.addCuepoint = function(n) {
                    e.cuepoints || (e.cuepoints = []);
                    var a = r(n);
                    if (l[a] || (l[a] = []), l[a].push(n), e.cuepoints.push(n), e.conf.generate_cuepoints && n.visible !== !1) {
                        var s = e.video.duration,
                            u = i.find(".fp-timeline", t)[0];
                        i.css(u, "overflow", "visible");
                        var c = n.time || n;
                        0 > c && (c = s + c);
                        var f = i.createElement("a", {
                            className: "fp-cuepoint fp-cuepoint" + (e.cuepoints.length - 1)
                        });
                        i.css(f, "left", c / s * 100 + "%"), u.appendChild(f), o.on(f, "mousedown", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.seek(c)
                        })
                    }
                    return e
                }, e.removeCuepoint = function(t) {
                    var n = e.cuepoints.indexOf(t),
                        i = r(t);
                    if (-1 !== n) {
                        e.cuepoints = e.cuepoints.slice(0, n).concat(e.cuepoints.slice(n + 1));
                        var o = l[i].indexOf(t);
                        if (-1 !== o) return l[i] = l[i].slice(0, o).concat(l[i].slice(o + 1)), e
                    }
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        9: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("bean"),
                o = e("../common"),
                a = e("./util/clipboard");
            r(function(e, t) {
                if (e.conf.embed !== !1 && e.conf.share !== !1) {
                    var n = o.find(".fp-share-menu", t)[0],
                        r = o.createElement("a", {
                            "class": "fp-icon fp-embed",
                            title: "Copy to your site"
                        }, "Embed");
                    o.append(n, r), e.embedCode = function() {
                        var n = e.conf.embed || {},
                            r = e.video,
                            i = n.width || r.width || o.width(t),
                            a = n.height || r.height || o.height(t),
                            s = e.conf.ratio,
                            l = '<iframe src="' + e.shareUrl(!0) + '" allowfullscreen style="border:none;';
                        return n.width || n.height ? (isNaN(i) || (i += "px"),
                            isNaN(a) || (a += "px"), l + "width:" + i + ";height:" + a + ';"></iframe>') : ((!s || e.conf.adaptiveRatio) && (s = a / i), '<div style="position:relative;width:100%;display:inline-block;">' + l + 'position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><div style="padding-top:' + 100 * s + '%;"></div></div>')
                    }, i.on(t, "click", ".fp-embed", function() {
                        a(e.embedCode(), function() {
                            e.message("The embed code is now on your clipboard", 2e3)
                        }, function() {
                            e.textarea(e.embedCode(), "Copy the code below to embed your video")
                        })
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./util/clipboard": 28,
            bean: 32
        }],
        10: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                t || (t = document.createElement("div"));
                var n = {},
                    r = {},
                    i = function(e, i, o) {
                        var a = e.split(".")[0],
                            s = function(l) {
                                o && (t.removeEventListener(a, s), n[e].splice(n[e].indexOf(s), 1));
                                var u = [l].concat(r[l.timeStamp + l.type] || []);
                                i && i.apply(void 0, u)
                            };
                        t.addEventListener(a, s), n[e] || (n[e] = []), n[e].push(s)
                    };
                e.on = e.bind = function(t, n) {
                    var r = t.split(" ");
                    return r.forEach(function(e) {
                        i(e, n)
                    }), e
                }, e.one = function(t, n) {
                    var r = t.split(" ");
                    return r.forEach(function(e) {
                        i(e, n, !0)
                    }), e
                };
                var o = function(e, t) {
                    return 0 === t.filter(function(t) {
                        return -1 === e.indexOf(t)
                    }).length
                };
                e.off = e.unbind = function(r) {
                    var i = r.split(" ");
                    return i.forEach(function(e) {
                        var r = e.split(".").slice(1),
                            i = e.split(".")[0];
                        Object.keys(n).filter(function(e) {
                            var t = e.split(".").slice(1);
                            return (!i || 0 === e.indexOf(i)) && o(t, r)
                        }).forEach(function(e) {
                            var r = n[e],
                                i = e.split(".")[0];
                            n[e] = r.filter(function(e) {
                                return t.removeEventListener(i, e), !1
                            })
                        })
                    }), e
                }, e.trigger = function(n, i, o) {
                    if (n) {
                        i = (i || []).length ? i || [] : [i];
                        var a, s = document.createEvent("Event");
                        return a = n.type || n, s.initEvent(a, !1, !0), Object.defineProperty && (s.preventDefault = function() {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        }), r[s.timeStamp + s.type] = i, t.dispatchEvent(s), o ? s : e
                    }
                }
            }, t.exports.EVENTS = ["beforeseek", "disable", "error", "finish", "fullscreen", "fullscreen-exit", "load", "mute", "pause", "progress", "ready", "resume", "seek", "speed", "stop", "unload", "volume", "boot", "shutdown"]
        }, {}],
        11: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                var n = e.conf;
                if (n.share !== !1 && n.facebook) {
                    e.facebook = function() {
                        var e, t, r = 550,
                            i = 420,
                            o = screen.height,
                            a = screen.width,
                            s = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
                            l = "string" == typeof n.facebook ? n.facebook : window.location.toString();
                        e = Math.round(a / 2 - r / 2), t = 0, o > i && (t = Math.round(o / 2 - i / 2)), window.open("https://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(l), "sharer", s + ",width=" + r + ",height=" + i + ",left=" + e + ",top=" + t)
                    };
                    var r = i.find(".fp-share-menu", t)[0],
                        a = i.createElement("a", {
                            "class": "fp-icon fp-facebook"
                        }, "Facebook");
                    i.append(r, a), o.on(t, "click", ".fp-facebook", function() {
                        e.facebook()
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        12: [function(e, t, n) {
            "use strict";
            var r, i = e("../flowplayer"),
                o = e("bean"),
                a = e("../common"),
                s = "fullscreen",
                l = "fullscreen-exit",
                u = i.support.fullscreen,
                c = navigator.userAgent.toLowerCase(),
                f = /(safari)[ \/]([\w.]+)/.exec(c) && !/(chrome)[ \/]([\w.]+)/.exec(c);
            o.on(document, "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function(e) {
                var t = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || e.target;
                if (r || t.parentNode && t.parentNode.getAttribute("data-flowplayer-instance-id")) {
                    var n = r || i(t.parentNode);
                    t && !r ? r = n.trigger(s, [n]) : (r.trigger(l, [r]), r = null)
                }
            }), i(function(e, t) {
                var n = a.createElement("div", {
                    className: "fp-player"
                });
                if (Array.prototype.map.call(t.children, a.identity).forEach(function(e) {
                        a.matches(e, ".fp-ratio,script") || n.appendChild(e)
                    }), t.appendChild(n), e.conf.fullscreen) {
                    var i, o, c = window;
                    e.isFullscreen = !1, e.fullscreen = function(t) {
                        return e.disabled ? void 0 : (void 0 === t && (t = !e.isFullscreen), t && (i = c.scrollY, o = c.scrollX), u ? t ? ["requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].forEach(function(e) {
                            return "function" == typeof n[e] ? (n[e](Element.ALLOW_KEYBOARD_INPUT), setTimeout(function() {
                                !f || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || n[e]()
                            }), !1) : void 0
                        }) : ["exitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].forEach(function(e) {
                            return "function" == typeof document[e] ? (document[e](), !1) : void 0
                        }) : e.trigger(t ? s : l, [e]), e)
                    };
                    var d;
                    e.on("mousedown.fs", function() {
                        +new Date - d < 150 && e.ready && e.fullscreen(), d = +new Date
                    }), e.on(s, function() {
                        a.addClass(t, "is-fullscreen"), a.toggleClass(t, "fp-minimal-fullscreen", a.hasClass(t, "fp-minimal")), a.removeClass(t, "fp-minimal"), u || a.css(t, "position", "fixed"), e.isFullscreen = !0
                    }).on(l, function() {
                        var n;
                        a.toggleClass(t, "fp-minimal", a.hasClass(t, "fp-minimal-fullscreen")), a.removeClass(t, "fp-minimal-fullscreen"), u || "html5" !== e.engine || (n = t.css("opacity") || "", a.css(t, "opacity", 0)), u || a.css(t, "position", ""), a.removeClass(t, "is-fullscreen"), u || "html5" !== e.engine || setTimeout(function() {
                            t.css("opacity", n)
                        }), e.isFullscreen = !1, c.scrollTo(o, i)
                    }).on("unload", function() {
                        e.isFullscreen && e.fullscreen()
                    }), e.on("shutdown", function() {
                        r = null
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        13: [function(e, t, n) {
            "use strict";
            var r, i, o = e("../flowplayer"),
                a = e("bean"),
                s = "is-help",
                l = e("../common");
            a.on(document, "keydown.fp", function(e) {
                var t = r,
                    n = e.ctrlKey || e.metaKey || e.altKey,
                    o = e.which,
                    a = t && t.conf;
                if (t && a.keyboard && !t.disabled) {
                    if (-1 != [63, 187, 191].indexOf(o)) return l.toggleClass(i, s), !1;
                    if (27 == o && l.hasClass(i, s)) return l.toggleClass(i, s), !1;
                    if (!n && t.ready) {
                        if (e.preventDefault(), e.shiftKey) return void(39 == o ? t.speed(!0) : 37 == o && t.speed(!1));
                        if (58 > o && o > 47) return t.seekTo(o - 48);
                        switch (o) {
                            case 38:
                            case 75:
                                t.volume(t.volumeLevel + .15);
                                break;
                            case 40:
                            case 74:
                                t.volume(t.volumeLevel - .15);
                                break;
                            case 39:
                            case 76:
                                t.seeking = !0, t.seek(!0);
                                break;
                            case 37:
                            case 72:
                                t.seeking = !0, t.seek(!1);
                                break;
                            case 190:
                                t.seekTo();
                                break;
                            case 32:
                                t.toggle();
                                break;
                            case 70:
                                a.fullscreen && t.fullscreen();
                                break;
                            case 77:
                                t.mute();
                                break;
                            case 81:
                                t.unload()
                        }
                    }
                }
            }), o(function(e, t) {
                if (e.conf.keyboard) {
                    a.on(t, "mouseenter mouseleave", function(n) {
                        r = e.disabled || "mouseover" != n.type ? 0 : e, r && (i = t)
                    });
                    var n = o.support.video && "flash" !== e.conf.engine && document.createElement("video").playbackRate ? "<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>" : "";
                    t.appendChild(l.createElement("div", {
                        className: "fp-help"
                    }, '         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>' + n + '         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip; <em>6</em> seek to 10%, 20% &hellip; 60% </p>         </div>   ')), a.on(t, "click", ".fp-close", function() {
                        l.toggleClass(t, s)
                    }), e.bind("shutdown", function() {
                        i == t && (i = null)
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        14: [function(e, t, n) {
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                e.showMenu = function(n, r) {
                    var a = i.find(".fp-ui", t)[0];
                    i.toggleClass(n, "fp-active", !0), setTimeout(function() {
                        o.one(document, "click", function() {
                            e.hideMenu(n)
                        })
                    });
                    var s = r;
                    if (r && r.tagName && (s = {
                            left: i.offset(r).left,
                            rightFallbackOffset: i.width(r),
                            top: i.offset(r).top + i.height(r)
                        }), !s) return i.css(n, "top", "auto");
                    s.rightFallbackOffset = s.rightFallbackOffset || 0;
                    var l = s.top - i.offset(a).top,
                        u = s.left - i.offset(a).left;
                    i.width(n) + u > i.width(a) && (u = u - i.width(n) + s.rightFallbackOffset), i.height(n) + l > i.height(a) && (l -= i.height(n)), i.css(n, {
                        top: l + "px",
                        left: u + "px"
                    })
                }, e.hideMenu = function(e) {
                    i.toggleClass(e, "fp-active", !1), i.css(e, {
                        top: "-9999em"
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        15: [function(e, t, n) {
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                function n(e) {
                    var t = i.createElement("div", {
                        className: "fp-message"
                    }, e);
                    return s.insertBefore(t, a), setTimeout(function() {
                        i.toggleClass(t, "fp-shown")
                    }), t
                }

                function r(e) {
                    i.removeNode(e)
                }
                var a = i.find(".fp-header", t)[0],
                    s = i.find(".fp-ui", t)[0];
                e.message = function(e, t) {
                    var o = n(e),
                        a = function() {
                            i.toggleClass(o, "fp-shown"), setTimeout(function() {
                                r(o)
                            }, 500)
                        };
                    return t && setTimeout(a, t), a
                }, e.textarea = function(e) {
                    var t = document.createElement("textarea");
                    t.value = e, t.className = "fp-textarea", s.appendChild(t), o.on(document, "click.fptextarea", function(e) {
                        return e.target === t ? t.select() : (e.stopPropagation(), e.preventDefault(), i.removeNode(t), void o.off(document, "click.fptextarea"))
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        16: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = /IEMobile/.test(window.navigator.userAgent),
                o = e("../common"),
                a = e("bean"),
                s = e("./ui").format,
                l = r.support,
                u = window.navigator.userAgent;
            (l.touch || i) && r(function(e, t) {
                var n = l.android,
                    r = n && !n.firefox,
                    c = /Silk/.test(u),
                    f = n.version || 0;
                if (r && !i) {
                    if (!/Chrome/.test(u) && 4 > f || n.samsung && 5 > f) {
                        var d = e.load;
                        e.load = function() {
                            var n = d.apply(e, arguments);
                            return o.find("video.fp-engine", t)[0].load(), e.trigger("ready", [e, e.video]), n
                        }
                    }
                    var p, h = 0,
                        g = function(e) {
                            p = setInterval(function() {
                                e.video.time = ++h, e.trigger("progress", [e, h])
                            }, 1e3)
                        };
                    e.on("ready pause unload", function() {
                        p && (clearInterval(p), p = null)
                    }), e.on("ready", function() {
                        h = 0
                    }), e.on("resume", function(t, n) {
                        return n.live ? h ? g(n) : void e.one("progress", function(e, t, n) {
                            0 === n && g(t)
                        }) : void 0
                    })
                }
                l.volume || (o.removeClass(t, "fp-mute"), o.addClass(t, "no-volume")), o.addClass(t, "is-touch"), e.sliders && e.sliders.timeline && e.sliders.timeline.disableAnimation();
                var m = !1;
                if (a.on(t, "touchmove", function() {
                        m = !0
                    }), a.on(t, "touchend click", function(n) {
                        if (m) return void(m = !1);
                        var r = o.find("video.fp-engine", t)[0];
                        return r && (r.muted = !1), e.playing && !o.hasClass(t, "is-mouseover") ? (o.addClass(t, "is-mouseover"), o.removeClass(t, "is-mouseout"), n.preventDefault(), void n.stopPropagation()) : void(e.playing || e.splash || !o.hasClass(t, "is-mouseout") || o.hasClass(t, "is-mouseover") || setTimeout(function() {
                            e.disabled || e.playing || e.splash || o.find("video.fp-engine", t)[0].play()
                        }, 400))
                    }), !l.fullscreen && e.conf.native_fullscreen && "function" == typeof o.createElement("video").webkitEnterFullScreen) {
                    var v = e.fullscreen;
                    e.fullscreen = function() {
                        var n = o.find("video.fp-engine", t)[0];
                        return n ? (e.trigger("fullscreen", [e]), a.on(document, "webkitfullscreenchange.nativefullscreen", function() {
                            document.webkitFullscreenElement === n && (a.off(document, ".nativefullscreen"), a.on(document, "webkitfullscreenchange.nativefullscreen", function() {
                                document.webkitFullscreenElement || (a.off(document, ".nativefullscreen"), e.trigger("fullscreen-exit", [e]))
                            }))
                        }), n.webkitEnterFullScreen(), void a.one(n, "webkitendfullscreen", function() {
                            a.off(document, "fullscreenchange.nativefullscreen"), e.trigger("fullscreen-exit", [e]), o.prop(n, "controls", !0), o.prop(n, "controls", !1)
                        })) : v.apply(e)
                    }
                }(r || c) && e.bind("ready", function() {
                    var n = o.find("video.fp-engine", t)[0];
                    e.conf.splash && n.paused && (a.one(n, "canplay", function() {
                        n.play()
                    }), n.load()), e.bind("progress.dur", function() {
                        if (!e.live && !e.conf.live) {
                            var r = n.duration;
                            1 !== r && (e.video.duration = r, o.find(".fp-duration", t)[0].innerHTML = s(r), e.unbind("progress.dur"))
                        }
                    })
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./ui": 25,
            bean: 32
        }],
        17: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("extend-object"),
                o = e("bean"),
                a = e("../common"),
                s = e("./resolve"),
                l = new s,
                u = window.jQuery,
                c = /^#/;
            r(function(e, t) {
                function n() {
                    return a.find(h.query, r())
                }

                function r() {
                    return c.test(h.query) ? void 0 : t
                }

                function f() {
                    return a.find(h.query + "." + g, r())
                }

                function d() {
                    var n = a.find(".fp-playlist", t)[0];
                    if (!n) {
                        n = a.createElement("div", {
                            className: "fp-playlist"
                        });
                        var r = a.find(".fp-next,.fp-prev", t);
                        r.length ? r[0].parentElement.insertBefore(n, r[0]) : a.insertAfter(t, a.find("video", t)[0], n)
                    }
                    n.innerHTML = "", e.conf.playlist[0].length && (e.conf.playlist = e.conf.playlist.map(function(e) {
                        if ("string" == typeof e) {
                            var t = e.split(s.TYPE_RE)[1];
                            return {
                                sources: [{
                                    type: "m3u8" === t.toLowerCase() ? "application/x-mpegurl" : "video/" + t,
                                    src: e
                                }]
                            }
                        }
                        return {
                            sources: e.map(function(e) {
                                var t = {};
                                return Object.keys(e).forEach(function(n) {
                                    t.type = /mpegurl/i.test(n) ? "application/x-mpegurl" : "video/" + n, t.src = e[n]
                                }), t
                            })
                        }
                    })), e.conf.playlist.forEach(function(t, r) {
                        var i = t.sources[0].src;
                        n.appendChild(a.createElement("a", {
                            href: i,
                            className: e.video.index === r ? g : void 0,
                            "data-index": r
                        }))
                    })
                }

                function p(t) {
                    return "undefined" != typeof t.index ? t.index : "undefined" != typeof e.video.index ? e.video.index : e.conf.startIndex || 0
                }
                var h = i({
                        active: "is-active",
                        advance: !0,
                        query: ".fp-playlist a"
                    }, e.conf),
                    g = h.active,
                    m = a.find(".fp-ui", t)[0],
                    v = a.hasClass(t, "fp-custom-playlist") || !!h.customPlaylist;
                a.toggleClass(t, "fp-custom-playlist", v), a.toggleClass(t, "fp-default-playlist", !v), e.play = function(t) {
                    if (void 0 === t) return e.resume();
                    if ("number" == typeof t && !e.conf.playlist[t]) return e;
                    if ("number" != typeof t) return e.load.apply(null, arguments);
                    var n = i({
                        index: t
                    }, e.conf.playlist[t]);
                    return e.off("beforeresume.fromfirst"), t === e.video.index ? e.load(n, function() {
                        e.resume()
                    }) : (e.load(n, function() {
                        e.video.index = t
                    }), e)
                }, e.next = function(t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = n === e.conf.playlist.length - 1 ? 0 : n + 1, e.play(n)), e
                }, e.prev = function(t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = 0 === n ? e.conf.playlist.length - 1 : n - 1, e.play(n)), e
                }, e.setPlaylist = function(t, n) {
                    return e.conf.playlist = t, n || delete e.video.index, d(), e
                }, e.addPlaylistItem = function(t) {
                    return delete e.video.is_last, e.setPlaylist(e.conf.playlist.concat([t]), !0)
                }, e.removePlaylistItem = function(t) {
                    var n = e.conf.playlist;
                    return e.setPlaylist(n.slice(0, t).concat(n.slice(t + 1)))
                }, o.on(t, "click", ".fp-next", e.next), o.on(t, "click", ".fp-prev", e.prev), h.advance && e.off("finish.pl").on("finish.pl", function(e, n) {
                    if (n.video.loop) return n.seek(0, function() {
                        n.resume()
                    });
                    var r = n.video.index >= 0 ? n.video.index + 1 : void 0;
                    r < n.conf.playlist.length || h.loop ? (r = r === n.conf.playlist.length ? 0 : r, a.removeClass(t, "is-finished"), setTimeout(function() {
                        n.play(r)
                    })) : n.conf.playlist.length > 1 && (n.one("beforeresume.fromfirst", function(e) {
                        e.preventDefault(), n.play(0)
                    }), n.one("seek", function() {
                        n.off("beforeresume.fromfirst")
                    }))
                });
                var y = !1;
                e.conf.playlist.length && (y = !0, d(), e.conf.clip && e.conf.clip.sources.length || (e.conf.clip = e.conf.playlist[e.conf.startIndex || 0])), n().length && !y && (e.conf.playlist = [], delete e.conf.startIndex, n().forEach(function(t) {
                    var n = t.href;
                    t.setAttribute("data-index", e.conf.playlist.length);
                    var r = l.resolve(n, e.conf.clip.sources);
                    u && i(r, u(t).data()), e.conf.playlist.push(r)
                })), a.find(".fp-prev,.fp-next,.fp-playlist", t).forEach(function(e) {
                    m.appendChild(e)
                }), o.on(c.test(h.query) ? document : t, "click", h.query, function(t) {
                    t.preventDefault();
                    var n = t.currentTarget,
                        r = Number(n.getAttribute("data-index")); - 1 != r && e.play(r)
                }), e.on("load", function(n, i, o) {
                    if (e.conf.playlist.length) {
                        var s = f()[0],
                            l = s && s.getAttribute("data-index"),
                            u = o.index = p(o),
                            c = a.find(h.query + '[data-index="' + u + '"]', r())[0],
                            d = u == e.conf.playlist.length - 1;
                        s && a.removeClass(s, g), c && a.addClass(c, g), a.removeClass(t, "video" + l), a.addClass(t, "video" + u), a.toggleClass(t, "last-video", d), o.index = i.video.index = u, o.is_last = i.video.is_last = d
                    }
                }).on("unload.pl", function() {
                    e.conf.playlist.length && (f().forEach(function(e) {
                        a.toggleClass(e, g)
                    }), e.conf.playlist.forEach(function(e, n) {
                        a.removeClass(t, "video" + n)
                    }))
                }), e.conf.playlist.length && (e.conf.loop = !1)
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./resolve": 19,
            bean: 32,
            "extend-object": 37
        }],
        18: [function(e, t, n) {
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                function n() {
                    i.find(".fp-qsel-menu", t).forEach(i.removeNode), i.find(".fp-qsel", t).forEach(i.removeNode)
                }

                function r(e) {
                    l.appendChild(i.createElement("strong", {
                        className: "fp-qsel"
                    }, "HD"));
                    var t = i.createElement("div", {
                        className: "fp-menu fp-qsel-menu"
                    }, "<strong>Quality</strong>");
                    e.forEach(function(e) {
                        var n = document.createElement("a"),
                            r = "undefined" != typeof e.value ? e.value : e;
                        n.setAttribute("data-quality", r), n.innerHTML = e.label || e, t.appendChild(n)
                    }), s.appendChild(t)
                }

                function a(e) {
                    i.find(".fp-qsel-menu a", t).forEach(function(t) {
                        i.toggleClass(t, "fp-selected", t.getAttribute("data-quality") == e), i.toggleClass(t, "fp-color", t.getAttribute("data-quality") == e)
                    })
                }
                var s = i.find(".fp-ui", t)[0],
                    l = i.find(".fp-controls", s)[0];
                o.on(t, "click", ".fp-qsel", function() {
                    var n = i.find(".fp-qsel-menu", t)[0];
                    i.hasClass(n, "fp-active") ? e.hideMenu() : e.showMenu(n)
                }), o.on(t, "click", ".fp-qsel-menu a", function(t) {
                    var n = t.target.getAttribute("data-quality");
                    e.quality(n)
                }), e.quality = function(t) {
                    t = isNaN(Number(t)) ? t : Number(t), e.trigger("quality", [e, t])
                }, e.on("quality", function(e, t, n) {
                    a(n, t.video.qualities)
                }), e.on("ready", function(e, t, i) {
                    n(), !i.qualities || i.qualities.filter(function(e) {
                        return "undefined" != typeof e.value ? e.value > -1 : !0
                    }).length < 2 || (r(i.qualities, i.quality), a(i.quality, i.qualities))
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        19: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.attr("src"),
                    n = e.attr("type") || "",
                    r = t.split(o)[1];
                return n = n.toLowerCase(), a(e.data(), {
                    src: t,
                    suffix: r || n,
                    type: n || r
                })
            }

            function i(e) {
                return /mpegurl/i.test(e) ? "application/x-mpegurl" : "video/" + e
            }
            var o = /\.(\w{3,4})(\?.*)?$/i,
                a = e("extend-object");
            t.exports = function() {
                var e = this;
                e.sourcesFromVideoTag = function(e, t) {
                    var n = [];
                    return t("source", e).each(function() {
                        n.push(r(t(this)))
                    }), !n.length && e.length && n.push(r(e)), n
                }, e.resolve = function(e, t) {
                    return e ? ("string" == typeof e && (e = {
                        src: e,
                        sources: []
                    }, e.sources = (t || []).map(function(t) {
                        var n = t.src.split(o)[1];
                        return {
                            type: t.type,
                            src: e.src.replace(o, "." + n + "$2")
                        }
                    })), e instanceof Array && (e = {
                        sources: e.map(function(e) {
                            return e.type && e.src ? e : Object.keys(e).reduce(function(t, n) {
                                return a(t, {
                                    type: i(n),
                                    src: e[n]
                                })
                            }, {})
                        })
                    }), e) : {
                        sources: t
                    }
                }
            }, t.exports.TYPE_RE = o
        }, {
            "extend-object": 37
        }],
        20: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("extend-object"),
                a = e("bean");
            r(function(e, t) {
                var n = e.conf;
                if (n.share === !1) return void i.find(".fp-share", t).forEach(i.removeNode);
                e.shareUrl = function(t) {
                    if (t && n.embed && n.embed.iframe) return n.embed.iframe;
                    if ("string" == typeof e.conf.share) return e.conf.share;
                    var r = encodeURIComponent(e.video.title || (i.find("title")[0] || {}).innerHTML || "Flowplayer Commercial video"),
                        a = encodeURIComponent(btoa(JSON.stringify(o({}, e.conf, e.extensions)))),
                        s = encodeURIComponent(window.location.toString()),
                        l = t ? "https://flowplayer.com/e/" : "https://flowplayer.com/s/";
                    return l + "?t=" + r + "&c=" + a + "&r=" + s
                };
                var r = i.createElement("div", {
                        className: "fp-menu fp-share-menu"
                    }, "<strong>Share</strong>"),
                    s = i.find(".fp-ui", t)[0];
                s.appendChild(r);
                var l = i.find(".fp-share", t)[0];
                a.on(t, "click", ".fp-share", function(t) {
                    t.preventDefault(), i.hasClass(r, "fp-active") ? e.hideMenu() : e.showMenu(r, l)
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32,
            "extend-object": 37
        }],
        21: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean"),
                a = e("./subtitles/parser");
            r.defaults.subtitleParser = a, r(function(e, t) {
                var n, a, s, l;
                (!r.support.inlineVideo || !r.support.fullscreen && e.conf.native_fullscreen) && (e.conf.nativesubtitles = !0);
                var u = function() {
                    return s = s || i.createElement("strong", {
                        className: "fp-cc"
                    }, "CC"), l = l || i.createElement("div", {
                        className: "fp-menu fp-subtitle-menu"
                    }, "<strong>Closed Captions</strong>"), i.find("a", l).forEach(i.removeNode), l.appendChild(i.createElement("a", {
                        "data-subtitle-index": -1
                    }, "No subtitles")), (e.video.subtitles || []).forEach(function(e, t) {
                        var n = e.srclang || "en",
                            r = e.label || "Default (" + n + ")",
                            o = i.createElement("a", {
                                "data-subtitle-index": t
                            }, r);
                        l.appendChild(o)
                    }), i.find(".fp-ui", t)[0].appendChild(l), i.find(".fp-controls", t)[0].appendChild(s), s
                };
                o.on(t, "click", ".fp-cc", function() {
                    i.hasClass(l, "fp-active") ? e.hideMenu() : e.showMenu(l)
                }), o.on(t, "click", ".fp-subtitle-menu [data-subtitle-index]", function(t) {
                    t.preventDefault();
                    var n = t.target.getAttribute("data-subtitle-index");
                    return "-1" === n ? e.disableSubtitles() : void e.loadSubtitles(n)
                });
                var c = function() {
                    a = i.find(".fp-captions", t)[0], a = a || i.appendTo(i.createElement("div", {
                        "class": "fp-captions"
                    }), i.find(".fp-player", t)[0]), Array.prototype.forEach.call(a.children, i.removeNode), u()
                };
                e.on("ready", function(n, r, o) {
                    if (r.subtitles = [], c(), i.removeClass(t, "has-menu"), e.disableSubtitles(), i.toggleClass(s, "fp-hidden", !o.subtitles || !o.subtitles.length), o.subtitles && o.subtitles.length) {
                        var a = o.subtitles.filter(function(e) {
                            return e["default"]
                        })[0];
                        a && r.loadSubtitles(o.subtitles.indexOf(a))
                    }
                }), e.bind("cuepoint", function(e, t, r) {
                    r.subtitle ? (n = r.index, i.html(a, r.subtitle.text), i.addClass(a, "fp-shown")) : r.subtitleEnd && (i.removeClass(a, "fp-shown"), n = r.index)
                }), e.bind("seek", function(t, r, o) {
                    n && e.cuepoints[n] && e.cuepoints[n].time > o && (i.removeClass(a, "fp-shown"), n = null), (e.cuepoints || []).forEach(function(t, r) {
                        var i = t.subtitle;
                        i && n != r ? o >= t.time && (!i.endTime || o <= i.endTime) && e.trigger("cuepoint", [e, t]) : t.subtitleEnd && o >= t.time && r == n + 1 && e.trigger("cuepoint", [e, t])
                    })
                }), e.on("unload", function() {
                    i.find(".fp-captions", t).forEach(i.removeNode)
                });
                var f = function(e) {
                        i.toggleClass(i.find("a.fp-selected", l)[0], "fp-selected"), i.toggleClass(i.find('a[data-subtitle-index="' + e + '"]', l)[0], "fp-selected")
                    },
                    d = function(e, n) {
                        var r = i.find("video.fp-engine", t)[0].textTracks;
                        r.length && (null === e ? [].forEach.call(r, function(e) {
                            e.mode = n
                        }) : r[e].mode = n)
                    };
                e.disableSubtitles = function() {
                    return e.subtitles = [], (e.cuepoints || []).forEach(function(t) {
                        (t.subtitle || t.subtitleEnd) && e.removeCuepoint(t)
                    }), a && Array.prototype.forEach.call(a.children, i.removeNode), f(-1), r.support.subtitles && e.conf.nativesubtitles && "html5" == e.engine.engineName && d(null, "disabled"), e
                }, e.loadSubtitles = function(t) {
                    e.disableSubtitles();
                    var n = e.video.subtitles[t],
                        o = n.src;
                    return o ? (f(t), r.support.subtitles && e.conf.nativesubtitles && "html5" == e.engine.engineName ? void d(t, "showing") : (i.xhrGet(o, function(t) {
                        var n = e.conf.subtitleParser(t);
                        n.forEach(function(t) {
                            var n = {
                                time: t.startTime,
                                subtitle: t,
                                visible: !1
                            };
                            e.subtitles.push(t), e.addCuepoint(n), e.addCuepoint({
                                time: t.endTime,
                                subtitleEnd: t.title,
                                visible: !1
                            }), 0 !== t.startTime || e.video.time || e.splash || e.trigger("cuepoint", [e, r.extend({}, n, {
                                index: 0
                            })]), e.splash && e.one("ready", function() {
                                e.trigger("cuepoint", [e, n])
                            })
                        })
                    }, function() {
                        return e.trigger("error", {
                            code: 8,
                            url: o
                        }), !1
                    }), e)) : void 0
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./subtitles/parser": 22,
            bean: 32
        }],
        22: [function(e, t, n) {
            t.exports = function(e) {
                function t(e) {
                    var t = e.split(":");
                    return 2 == t.length && t.unshift(0), 60 * t[0] * 60 + 60 * t[1] + parseFloat(t[2].replace(",", "."))
                }
                for (var n, r, i, o = /^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/, a = [], s = 0, l = e.split("\n"), u = l.length, c = {}; u > s; s++)
                    if (r = o.exec(l[s])) {
                        for (n = l[s - 1], i = "<p>" + l[++s] + "</p><br/>";
                            "string" == typeof l[++s] && l[s].trim() && s < l.length;) i += "<p>" + l[s] + "</p><br/>";
                        c = {
                            title: n,
                            startTime: t(r[1]),
                            endTime: t(r[3]),
                            text: i
                        }, a.push(c)
                    } return a
            }
        }, {}],
        23: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("extend-object");
            ! function() {
                var e = function(e) {
                        var t = /iP(ad|hone)(; CPU)? OS (\d+_\d)/.exec(e);
                        return t && t.length > 1 ? parseFloat(t[t.length - 1].replace("_", "."), 10) : 0
                    },
                    t = function() {
                        var e = document.createElement("video");
                        return e.loop = !0, e.autoplay = !0, e.preload = !0, e
                    },
                    n = {},
                    o = document.documentElement.style,
                    a = navigator.userAgent.toLowerCase(),
                    s = /(chrome)[ \/]([\w.]+)/.exec(a) || /(safari)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
                s[1] && (n[s[1]] = !0, n.version = s[2] || "0");
                var l = t(),
                    u = navigator.userAgent,
                    c = n.msie || /Trident\/7/.test(u),
                    f = /iPad|MeeGo/.test(u) && !/CriOS/.test(u),
                    d = /iPad/.test(u) && /CriOS/.test(u),
                    p = /iP(hone|od)/i.test(u) && !/iPad/.test(u) && !/IEMobile/i.test(u),
                    h = /Android/.test(u),
                    g = h && /Firefox/.test(u),
                    m = h && /SAMSUNG/.test(u),
                    v = /Silk/.test(u),
                    y = /IEMobile/.test(u),
                    w = y ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(u)[1], 10) : 0,
                    b = y ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(u)[1], 10) : 0,
                    I = f || p ? e(u) : 0,
                    C = h ? parseFloat(/Android\ (\d\.\d)/.exec(u)[1], 10) : 0,
                    M = i(r.support, {
                        browser: n,
                        iOS: {
                            iPhone: p,
                            iPad: f || d,
                            version: I,
                            chrome: d
                        },
                        android: h ? {
                            firefox: g,
                            opera: /Opera/.test(u),
                            samsung: m,
                            version: C
                        } : !1,
                        subtitles: !!l.addTextTrack,
                        fullscreen: "boolean" == typeof document.webkitFullscreenEnabled ? document.webkitFullscreenEnabled : "function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(u) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen || "function" == typeof document.msExitFullscreen,
                        inlineBlock: !(c && n.version < 8),
                        touch: "ontouchstart" in window,
                        dataload: !f && !p && !y,
                        flex: "flexWrap" in o || "WebkitFlexWrap" in o || "msFlexWrap" in o,
                        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        zeropreload: !c && !h,
                        volume: !(f || p || v || d),
                        cachedVideoTag: !(f || p || d || y),
                        firstframe: !(v || y || g || m || I && 10 > I || h && 4.4 > C),
                        mutedAutoplay: (p || f || d) && I >= 10 || h && C > 4.3 && !m,
                        inlineVideo: (!p || I >= 10) && (!y || w >= 8.1 && b >= 11) && (!h || C >= 3),
                        hlsDuration: !h && (!n.safari || f || p || d),
                        seekable: !f && !d
                    });
                M.autoplay = M.firstframe;
                try {
                    var A = navigator.plugins["Shockwave Flash"],
                        S = c ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : A.description;
                    c || A[0].enabledPlugin ? (S = S.split(/\D+/), S.length && !S[0] && (S = S.slice(1)), M.flashVideo = S[0] > 9 || 9 == S[0] && S[3] >= 115) : M.flashVideo = !1
                } catch (E) {}
                try {
                    M.video = !!l.canPlayType, M.video && l.canPlayType("video/mp4")
                } catch (j) {
                    M.video = !1
                }
                M.animation = function() {
                    for (var e = ["", "Webkit", "Moz", "O", "ms", "Khtml"], t = document.createElement("p"), n = 0; n < e.length; n++)
                        if ("undefined" != typeof t.style[e[n] + "AnimationName"]) return !0
                }()
            }()
        }, {
            "../flowplayer": 29,
            "extend-object": 37
        }],
        24: [function(e, t, n) {
            "use strict";
            var r = e("../flowplayer"),
                i = e("../common"),
                o = e("bean");
            r(function(e, t) {
                var n = e.conf;
                if (n.share !== !1 && n.twitter !== !1) {
                    e.tweet = function() {
                        var t, r, i = 550,
                            o = 420,
                            a = screen.height,
                            s = screen.width,
                            l = "scrollbars=yes,resizable=yes,toolbar=no,location=yes",
                            u = "string" == typeof n.twitter ? n.twitter : e.shareUrl();
                        t = Math.round(s / 2 - i / 2), r = 0, a > o && (r = Math.round(a / 2 - o / 2)), window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(u), "intent", l + ",width=" + i + ",height=" + o + ",left=" + t + ",top=" + r)
                    };
                    var r = i.find(".fp-share-menu", t)[0],
                        a = i.createElement("a", {
                            "class": "fp-icon fp-twitter"
                        }, "Twitter");
                    i.append(r, a), o.on(t, "click", ".fp-twitter", function() {
                        e.tweet()
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 29,
            bean: 32
        }],
        25: [function(e, t, n) {
            (function(n) {
                "use strict";

                function r(e) {
                    return e = parseInt(e, 10), e >= 10 ? e : "0" + e
                }

                function i(e, t) {
                    e = Math.max(e || 0, 0), e = t ? Math.ceil(e) : Math.floor(e);
                    var n = Math.floor(e / 3600),
                        i = Math.floor(e / 60);
                    return e -= 60 * i, n >= 1 ? (i -= 60 * n, n + ":" + r(i) + ":" + r(e)) : r(i) + ":" + r(e)
                }
                var o = e("../flowplayer"),
                    a = e("../common"),
                    s = e("bean"),
                    l = e("./ui/slider"),
                    u = e("./ui/bar-slider"),
                    c = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk5Ljg0NCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz4KPHRpdGxlPnBsYXktcm91bmRlZC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNNDEuMDM1OSw3MS4xOWE1LjA0OTIsNS4wNDkyLDAsMCwxLTIuNTU3NS0uNjY3M2MtMS44MDMxLTEuMDQxLTIuNzk1OC0zLjEyNDgtMi43OTU4LTUuODY2NFYzNS4xODg3YzAtMi43NDI5Ljk5MzMtNC44MjcyLDIuNzk3LTUuODY3NiwxLjgwMjUtMS4wNDIyLDQuMTAzNC0uODYsNi40OC41MTQzTDcwLjQ3ODIsNDQuNTY3MmMyLjM3NTEsMS4zNzExLDMuNjgyNiwzLjI3MjUsMy42ODMyLDUuMzU0NXMtMS4zMDc2LDMuOTg0NS0zLjY4MzIsNS4zNTYyTDQ0Ljk1OTIsNzAuMDExNEE3LjkzODQsNy45Mzg0LDAsMCwxLDQxLjAzNTksNzEuMTlabS4wMDY1LTQwLjEyM2EyLjY3OTQsMi42Nzk0LDAsMCwwLTEuMzU4Mi4zNDEzYy0xLjAyNjMuNTkyNi0xLjU5MTIsMS45MzQ5LTEuNTkxMiwzLjc4VjY0LjY1NjNjMCwxLjg0NDkuNTY0OSwzLjE4NjYsMS41OTA2LDMuNzc5MSwxLjAyODEuNTkzMiwyLjQ3MzMuNDEwOCw0LjA3LS41MTJMNjkuMjczLDUzLjE5MDZjMS41OTgzLS45MjI3LDIuNDc4LTIuMDgzOCwyLjQ3OC0zLjI2ODlzLS44OC0yLjM0NDUtMi40NzgtMy4yNjY2TDQzLjc1NCwzMS45MjI3QTUuNTY4NSw1LjU2ODUsMCwwLDAsNDEuMDQyMywzMS4wNjcxWiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    f = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogIDxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwMDA7b3BhY2l0eTowLjY1O30uYntmaWxsOiNmZmY7b3BhY2l0eToxLjA7fTwvc3R5bGU+CiAgPC9kZWZzPjx0aXRsZT5wbGF5LXJvdW5kZWQtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM1Ljk0MiwzNS4yMzIzYzAtNC43Mjg5LDMuMzUwNi02LjY2MzcsNy40NDYtNC4yOTcxTDY4LjgzLDQ1LjYyMzVjNC4wOTU2LDIuMzY0LDQuMDk1Niw2LjIzMTksMCw4LjU5NzdMNDMuMzg4LDY4LjkxYy00LjA5NTQsMi4zNjQtNy40NDYuNDMtNy40NDYtNC4yOTc5WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPgogIDwvc3ZnPgogIAo=", "base64"),
                    d = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5jb250cm9sYnV0dG9ue2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlPnBsYXktc2hhcnAtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cG9seWdvbiBjbGFzcz0iY29udHJvbGJ1dHRvbiIgcG9pbnRzPSI3My42MDEgNTAgMzcuOTY4IDcwLjU3MyAzNy45NjggMjkuNDI3IDczLjYwMSA1MCIgZmlsdGVyPSJ1cmwoI2YxKSIvPgo8L3N2Zz4K", "base64"),
                    p = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDQgOTkuODQzNCI+PGRlZnM+PHN0eWxlPi5jb250cm9sYnV0dG9uYmd7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGxheS1zaGFycC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNMzYuOTQ0Myw3Mi4yNDczVjI3LjI5MTZMNzUuODc3Niw0OS43N1ptMi4yLTQxLjE0NTVWNjguNDM3MUw3MS40Nzc2LDQ5Ljc3WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    h = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDM0IDk5Ljg0MzQiPjxkZWZzPjxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5yZWN0e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KPC9kZWZzPjx0aXRsZT5wYXVzZS1yb3VuZGVkLW91dGxpbmU8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxMi0uMDc4M2E1MCw1MCwwLDEsMCw1MC4wMDA2LDUwQTUwLjA1NjIsNTAuMDU2MiwwLDAsMCw0OS45MjEyLS4wNzgzWiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIj48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTM5LjAwMzYsNzEuOTcyNmE3LjU2NSw3LjU2NSwwLDAsMS03LjU1Ny03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NDgsNy41NjQ4LDAsMCwxLDM5LjAwMzYsNzEuOTcyNlptMC00MS45MDRhNS4zNjQ3LDUuMzY0NywwLDAsMC01LjM1OTMsNS4zNTgydjI4Ljk5YTUuMzU4Nyw1LjM1ODcsMCwwLDAsMTAuNzE3NCwwdi0yOC45OUE1LjM2NDUsNS4zNjQ1LDAsMCwwLDM5LjAwMzYsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTYwLjg0LDcxLjk3MjZhNy41NjQ4LDcuNTY0OCwwLDAsMS03LjU1Ni03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NSw3LjU2NSwwLDAsMSw2MC44NCw3MS45NzI2Wm0wLTQxLjkwNGE1LjM2NDUsNS4zNjQ1LDAsMCwwLTUuMzU4Miw1LjM1ODJ2MjguOTlhNS4zNTg3LDUuMzU4NywwLDAsMCwxMC43MTc0LDB2LTI4Ljk5QTUuMzY0Nyw1LjM2NDcsMCwwLDAsNjAuODQsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48L2c+PC9zdmc+Cg==", "base64"),
                    g = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utcm91bmRlZC1maWxsPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIiBmaWx0ZXI9InVybCgjZjEpIj48cmVjdCBjbGFzcz0icmVjdCIgeD0iMzEuODQ0IiB5PSIyOC4xMjMxIiB3aWR0aD0iMTMuNDM2MiIgaGVpZ2h0PSI0My41OTczIiByeD0iNi43MTgxIiByeT0iNi43MTgxIi8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjU2MzgiIHk9IjI4LjEyMzEiIHdpZHRoPSIxMy40MzYyIiBoZWlnaHQ9IjQzLjU5NzMiIHJ4PSI2LjcxODEiIHJ5PSI2LjcxODEiLz48L2c+PC9zdmc+Cg==", "base64"),
                    m = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGRlZnM+PHN0eWxlPi5mcC1jb2xvci1wbGF5e29wYWNpdHk6MC42NTt9LnJlY3R7ZmlsbDojZmZmO308L3N0eWxlPgo8L2RlZnM+PHRpdGxlPnBhdXNlLXNoYXJwLWZpbGw8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxNy0uMDc4YTUwLDUwLDAsMSwwLDUwLDUwQTUwLjA1NjQsNTAuMDU2NCwwLDAsMCw0OS45MjE3LS4wNzhaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxyZWN0IGNsYXNzPSJyZWN0IiB4PSIzMy41IiB5PSIzMC4xMDQyIiB3aWR0aD0iMTIuMjYzNCIgaGVpZ2h0PSIzOS43OTE3Ii8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjIzNjYiIHk9IjMwLjEwNDIiIHdpZHRoPSIxMi4yNjM0IiBoZWlnaHQ9IjM5Ljc5MTciLz48L2c+PC9zdmc+Cg==", "base64"),
                    v = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtb3V0bGluZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTkuODQzNCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utc2hhcnAtb3V0bGluZTwvdGl0bGU+PHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjEyLS4wNzgzYTUwLDUwLDAsMSwwLDUwLjAwMDYsNTBBNTAuMDU2Miw1MC4wNTYyLDAsMCwwLDQ5LjkyMTItLjA3ODNaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNDYuODcwOSw2OS45NTMxSDMzLjEzODVWMjkuODlINDYuODcwOVpNMzUuMTQxNiw2Ny45NWg5LjcyNjJWMzEuODkzNUgzNS4xNDE2WiIvPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNjYuNzA0Nyw2OS45NTMxSDUyLjk3MjJWMjkuODlINjYuNzA0N1pNNTQuOTc1NCw2Ny45NWg5LjcyNjJWMzEuODkzNUg1NC45NzU0WiIvPjwvZz48L3N2Zz4K", "base64"),
                    y = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLW91dGxpbmUiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K", "base64"),
                    w = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLWZpbGwiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC4wcyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuNHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMS4ycyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=", "base64"),
                    b = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1maWxsIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjBzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItMTAiIHk9Ii0xMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTEwIiB5PSItMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuOHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDUwKSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIxLjJzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KPC9zdmc+Cg==", "base64"),
                    I = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1vdXRsaW5lIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTkiIHk9Ii05IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItOSIgeT0iLTkiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSA1MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+Cjwvc3ZnPgo=", "base64");
                o(function(e, t) {
                    function r(e) {
                        return a.find(".fp-" + e, t)[0]
                    }

                    function C(e) {
                        a.css(Z, "padding-top", 100 * e + "%"), D.inlineBlock || a.height(a.find("object", t)[0], a.height(t))
                    }

                    function M(e) {
                        e ? (a.addClass(t, "is-mouseover"), a.removeClass(t, "is-mouseout")) : (a.addClass(t, "is-mouseout"), a.removeClass(t, "is-mouseover"))
                    }
                    a.find(".fp-filters").forEach(a.removeNode);
                    try {
                        var A;
                        document.body.appendChild(A = a.createElement("div", {}, n("PHN2ZyBjbGFzcz0iZnAtZmlsdGVycyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMCAwIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImYxIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgICAgPGZlT2Zmc2V0IHJlc3VsdD0ib2ZmT3V0IiBpbj0iU291cmNlQWxwaGEiIGR4PSIwIiBkeT0iMCIgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJtYXRyaXhPdXQiIGluPSJvZmZPdXQiIHR5cGU9Im1hdHJpeCIKICAgICAgdmFsdWVzPSIwLjMgMCAwIDAgMCAwIDAuMyAwIDAgMCAwIDAgMC4zIDAgMCAwIDAgMCAwLjQgMCIgLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im1hdHJpeE91dCIgc3RkRGV2aWF0aW9uPSI0IiAvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo=", "base64"))), a.css(A, {
                            width: 0,
                            height: 0,
                            overflow: "hidden",
                            position: "absolute",
                            margin: 0,
                            padding: 0
                        })
                    } catch (S) {}
                    var E, j = e.conf,
                        D = o.support;
                    a.find(".fp-ratio,.fp-ui", t).forEach(a.removeNode), a.addClass(t, "flowplayer"), t.appendChild(a.createElement("div", {
                        className: "fp-ratio"
                    }));
                    var N = a.createElement("div", {
                        className: "fp-ui"
                    }, '         <div class="fp-waiting">           {{ LOADING_SHARP_OUTLINE }}           {{ LOADING_SHARP_FILL }}           {{ LOADING_ROUNDED_FILL }}           {{ LOADING_ROUNDED_OUTLINE }}         </div>         <div class="fp-header">           <a class="fp-share fp-icon"></a>           <a class="fp-fullscreen fp-icon"></a>           <a class="fp-unload fp-icon"></a>         </div>         <p class="fp-speed-flash"></p>         <div class="fp-play fp-visible">           <a class="fp-icon fp-playbtn"></a>           {{ PLAY_ROUNDED_FILL }}           {{ PLAY_ROUNDED_OUTLINE }}           {{ PLAY_SHARP_FILL }}           {{ PLAY_SHARP_OUTLINE }}         </div>         <div class="fp-pause">           <a class="fp-icon fp-playbtn"></a>           {{ PAUSE_SHARP_OUTLINE }}           {{ PAUSE_SHARP_FILL }}           {{ PAUSE_ROUNDED_OUTLINE }}           {{ PAUSE_ROUNDED_FILL }}         </div>         <div class="fp-controls">            <a class="fp-icon fp-playbtn"></a>            <span class="fp-elapsed">00:00</span>            <div class="fp-timeline fp-bar">               <div class="fp-buffer"></div>               <span class="fp-timestamp"></span>               <div class="fp-progress fp-color"></div>            </div>            <span class="fp-duration"></span>            <span class="fp-remaining"></span>            <div class="fp-volume">               <a class="fp-icon fp-volumebtn"></a>               <div class="fp-volumebar fp-bar-slider">                 <em></em><em></em><em></em><em></em><em></em><em></em><em></em>               </div>            </div>            <strong class="fp-speed fp-hidden"></strong>         </div>'.replace("{{ PAUSE_ROUNDED_FILL }}", g).replace("{{ PAUSE_ROUNDED_OUTLINE }}", h).replace("{{ PAUSE_SHARP_FILL }}", m).replace("{{ PAUSE_SHARP_OUTLINE }}", v).replace("{{ PLAY_SHARP_OUTLINE }}", p).replace("{{ PLAY_SHARP_FILL }}", d).replace("{{ PLAY_ROUNDED_OUTLINE }}", c).replace("{{ PLAY_ROUNDED_FILL }}", f).replace("{{ LOADING_ROUNDED_OUTLINE }}", y).replace("{{ LOADING_ROUNDED_FILL }}", w).replace("{{ LOADING_SHARP_FILL }}", b).replace("{{ LOADING_SHARP_OUTLINE }}", I).replace(/url\(#/g, "url(" + window.location.href.replace(window.location.hash, "").replace(/\#$/g, "") + "#"));
                    t.appendChild(N);
                    var L = r("buffer"),
                        x = r("waiting"),
                        T = r("elapsed"),
                        Z = r("ratio"),
                        P = r("speed-flash"),
                        k = r("duration"),
                        Y = r("remaining"),
                        z = r("timestamp"),
                        O = a.css(Z, "padding-top"),
                        G = r("play"),
                        R = r("pause"),
                        W = r("timeline"),
                        U = l(W, e.rtl),
                        J = r("fullscreen"),
                        B = r("volumebar"),
                        V = u(B, {
                            rtl: e.rtl
                        }),
                        H = a.hasClass(t, "no-toggle");
                    U.disableAnimation(a.hasClass(t, "is-touch")), e.sliders = e.sliders || {}, e.sliders.timeline = U, e.sliders.volume = V;
                    var F = [];
                    D.svg || a.html(x, "<p>loading &hellip;</p>"), j.ratio && C(j.ratio);
                    try {
                        j.fullscreen || a.removeNode(J)
                    } catch (S) {
                        a.removeNode(J)
                    }
                    e.on("dvrwindow", function() {
                        U.disable(!1)
                    }), e.on("ready", function(e, n, r) {
                        var o = n.video.duration;
                        U.disable(n.disabled || !o), j.adaptiveRatio && !isNaN(r.height / r.width) && C(r.height / r.width, !0), a.html([k, Y], n.live ? "Live" : i(o)), a.toggleClass(t, "is-long", o >= 3600), V.slide(n.volumeLevel), "flash" === n.engine.engineName ? U.disableAnimation(!0, !0) : U.disableAnimation(!1), a.find(".fp-title", N).forEach(a.removeNode), r.title && a.prepend(N, a.createElement("div", {
                            className: "fp-message fp-title"
                        }, r.title)), a.toggleClass(t, "has-title", !!r.title)
                    }).on("unload", function() {
                        O || j.splash || a.css(Z, "paddingTop", ""), U.slide(0), a.addClass(G, "fp-visible")
                    }).on("buffer", function() {
                        var t = e.video,
                            n = t.buffer / t.duration;
                        !t.seekable && D.seekable && U.max(e.conf.live ? 1 / 0 : n), 1 > n ? a.css(L, "width", 100 * n + "%") : a.css(L, "width", "100%")
                    }).on("speed", function(e, t, n) {
                        t.video.time && (a.text(P, n + "x"), a.addClass(P, "fp-shown"), F = F.filter(function(e) {
                            return clearTimeout(e), !1
                        }), F.push(setTimeout(function() {
                            a.addClass(P, "fp-hilite"), F.push(setTimeout(function() {
                                a.removeClass(P, "fp-hilite"), F.push(setTimeout(function() {
                                    a.removeClass(P, "fp-shown")
                                }, 300))
                            }, 1e3))
                        })))
                    }).on("buffered", function() {
                        a.css(L, "width", "100%"), U.max(1)
                    }).on("progress seek", function(n, r, o) {
                        var s = e.video.duration,
                            l = e.video.seekOffset || 0;
                        o = o || e.video.time;
                        var u = (o - l) / (s - l);
                        U.dragging || U.slide(u, e.seeking ? 0 : 250), a.toggleClass(t, "is-live-position", s - o < j.livePositionOffset), a.html(T, i(o)), a.html(Y, i(s - o, !0))
                    }).on("finish resume seek", function(e) {
                        a.toggleClass(t, "is-finished", "finish" == e.type)
                    }).on("resume", function() {
                        a.addClass(G, "fp-visible"), setTimeout(function() {
                            a.removeClass(G, "fp-visible")
                        }, 300)
                    }).on("pause", function() {
                        a.addClass(R, "fp-visible"), setTimeout(function() {
                            a.removeClass(R, "fp-visible")
                        }, 300)
                    }).on("stop", function() {
                        a.html(T, i(0)), U.slide(0, 100)
                    }).on("finish", function() {
                        a.html(T, i(e.video.duration)), U.slide(1, 100), a.removeClass(t, "is-seeking")
                    }).on("beforeseek", function() {}).on("volume", function() {
                        V.slide(e.volumeLevel)
                    }).on("disable", function() {
                        var n = e.disabled;
                        U.disable(n), V.disable(n), a.toggleClass(t, "is-disabled", e.disabled)
                    }).on("mute", function(e, n, r) {
                        a.toggleClass(t, "is-muted", r)
                    }).on("error", function(e, n, r) {
                        if (a.removeClass(t, "is-loading"), a.removeClass(t, "is-seeking"), a.addClass(t, "is-error"), r) {
                            n.error = !0;
                            var i = r.code;
                            (r.message || "").match(/DECODER_ERROR_NOT_SUPPORTED/) && (i = 3);
                            var o = n.message((n.engine && n.engine.engineName || "html5") + ": " + j.errors[i]);
                            a.removeClass(t, "is-mouseover"), n.one("load progress", function() {
                                o()
                            })
                        }
                    }).one("resume ready", function() {
                        var e = a.find("video.fp-engine", t)[0];
                        if (e && (!a.width(e) || !a.height(e))) {
                            var n = t.style.overflow;
                            t.style.overflow = "visible", setTimeout(function() {
                                n ? t.style.overflow = n : t.style.removeProperty("overflow")
                            })
                        }
                    }), s.on(t, "mouseenter mouseleave", function(n) {
                        if (!H) {
                            var r, i = "mouseover" == n.type;
                            if (M(i), i) {
                                var o = function() {
                                    M(!0), r = new Date
                                };
                                e.on("pause.x volume.x", o), s.on(t, "mousemove.x", o), E = setInterval(function() {
                                    new Date - r > j.mouseoutTimeout && (M(!1), r = new Date)
                                }, 100)
                            } else s.off(t, "mousemove.x"), e.off("pause.x volume.x"), clearInterval(E)
                        }
                    }), s.on(t, "mouseleave", function() {
                        (U.dragging || V.dragging) && (a.addClass(t, "is-mouseover"), a.removeClass(t, "is-mouseout"))
                    }), s.on(t, "click.player", function(t) {
                        return e.disabled ? void 0 : a.hasClass(t.target, "fp-ui") || a.hasClass(t.target, "fp-engine") || t.flash || a.hasParent(t.target, ".fp-play,.fp-pause") ? (t.preventDefault && t.preventDefault(), e.toggle()) : void 0
                    }), s.on(t, "mousemove", ".fp-timeline", function(t) {
                        var n = t.pageX || t.clientX,
                            r = n - a.offset(W).left,
                            o = r / a.width(W),
                            s = e.video,
                            l = s.duration - (void 0 === s.seekOffset ? 0 : s.seekOffset),
                            u = (e.rtl ? 1 - o : o) * l;
                        if (!(0 > o)) {
                            a.html(z, i(u));
                            var c = r - a.width(z) / 2;
                            0 > c && (c = 0), c > a.width(W) - a.width(z) && (c = !1), c !== !1 ? a.css(z, {
                                left: c + "px",
                                right: "auto"
                            }) : a.css(z, {
                                left: "auto",
                                right: "0px"
                            })
                        }
                    }), s.on(t, "contextmenu", function(n) {
                        var r = window;
                        if (!a.hasClass(t, "is-flash-disabled")) {
                            var i = a.find(".fp-context-menu", t)[0];
                            i && (n.preventDefault(), e.showMenu(i, {
                                left: n.clientX - r.scrollX,
                                top: n.clientY - r.scrollY
                            }), s.on(t, "click", ".fp-context-menu", function(e) {
                                e.stopPropagation()
                            }))
                        }
                    }), e.on("flashdisabled", function(n, r, i) {
                        a.addClass(t, "is-flash-disabled");
                        var o;
                        i !== !1 && (o = e.message("Seems something is blocking Adobe Flash from running")), e.one("ready progress", function() {
                            a.removeClass(t, "is-flash-disabled"), o && o()
                        })
                    }), j.poster && a.css(t, "background-image", "url(" + j.poster + ")");
                    var X = a.css(t, "background-color"),
                        _ = "none" != a.css(t, "background-image") || X && "rgba(0, 0, 0, 0)" != X && "transparent" != X;
                    if (_ && !j.splash) {
                        j.poster || (j.poster = !0);
                        var K = function() {
                            a.addClass(t, "is-poster"), a.addClass(G, "fp-visible"), e.poster = !0, e.one(j.autoplay ? "progress seek" : "resume seek", function() {
                                a.removeClass(t, "is-poster"), a.removeClass(G, "fp-visible"), e.poster = !1
                            })
                        };
                        e.on("stop", function() {
                            K()
                        }), e.on("ready", function(e, t, n) {
                            n.index || n.autoplay || K()
                        })
                    }
                    "string" == typeof j.splash && a.css(t, "background-image", "url('" + j.splash + "')"), !_ && e.forcedSplash && a.css(t, "background-color", "#555"), s.on(t, "click", ".fp-toggle, .fp-play, .fp-playbtn", function() {
                        e.disabled || e.toggle()
                    }), s.on(t, "click", ".fp-volumebtn", function() {
                        e.mute()
                    }), s.on(t, "click", ".fp-fullscreen", function() {
                        e.fullscreen()
                    }), s.on(t, "click", ".fp-unload", function() {
                        e.unload()
                    }), s.on(W, "slide", function(t) {
                        e.seeking = !0, e.seekTo(10 * t)
                    }), s.on(B, "slide", function(t) {
                        e.volume(t)
                    }), s.on(t, "click", ".fp-duration,.fp-remaining", function() {
                        return e.dvr ? e.seekTo(10) : void a.toggleClass(t, "is-inverted")
                    }), M(H);
                    var Q;
                    if (e.on("shutdown", function() {
                            s.off(W), s.off(B), Q && window.cancelAnimationFrame(Q)
                        }), "function" == typeof window.requestAnimationFrame) {
                        var q = function() {
                            var e = a.find(".fp-player", t)[0] || t;
                            a.toggleClass(t, "is-tiny", e.clientWidth < 400), a.toggleClass(t, "is-small", e.clientWidth < 600 && e.clientWidth >= 400), Q = window.requestAnimationFrame(q)
                        };
                        Q = window.requestAnimationFrame(q)
                    }
                }), t.exports.format = i
            }).call(this, e("buffer").Buffer)
        }, {
            "../common": 1,
            "../flowplayer": 29,
            "./ui/bar-slider": 26,
            "./ui/slider": 27,
            bean: 32,
            buffer: 33
        }],
        26: [function(e, t, n) {
            function r(e, t) {
                function n(t) {
                    var n = t.pageX || t.clientX,
                        r = o.offset(e),
                        i = o.width(e);
                    !n && t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length && (n = t.originalEvent.touches[0].pageX);
                    var a = n - r.left;
                    a = Math.max(0, Math.min(i, a));
                    var s = a / i;
                    return l && (s = 1 - s), s
                }
                t = t || {};
                var r = t.activeClass || "fp-color",
                    a = t.inactiveClass || "fp-grey",
                    s = t.childSelector || "em",
                    l = !!t.rtl,
                    u = !1,
                    c = o.find(s, e).length,
                    f = {
                        unload: function() {
                            i.off(e, ".barslider")
                        },
                        slide: function(t, n) {
                            o.find(s, e).forEach(function(e, n) {
                                var i = t > n / c;
                                o.toggleClass(e, r, i), o.toggleClass(e, a, !i)
                            }), n && i.fire(e, "slide", [t])
                        },
                        disable: function(e) {
                            u = e
                        }
                    };
                return i.on(e, "mousedown.sld touchstart.sld", function(t) {
                    t.preventDefault(), u || (f.slide(n(t), !0), i.on(e, "mousemove.sld touchmove.sld", function(e) {
                        e.preventDefault(), f.slide(n(e), !0)
                    }), i.one(document, "mouseup.sld touchup.sld", function() {
                        i.off(e, "mousemove.sld touchmove.sld")
                    }))
                }), f
            }
            var i = e("bean"),
                o = e("../../common");
            t.exports = r
        }, {
            "../../common": 1,
            bean: 32
        }],
        27: [function(e, t, n) {
            "use strict";
            var r = e("bean"),
                i = e("../../common"),
                o = function(e, t) {
                    var n;
                    return function() {
                        n || (e.apply(this, arguments), n = 1, setTimeout(function() {
                            n = 0
                        }, t))
                    }
                },
                a = function(e, t) {
                    var n, a, s, l, u, c, f, d, p = i.lastChild(e),
                        h = !1,
                        g = function() {
                            a = i.offset(e), s = i.width(e), l = i.height(e), c = u ? l : s, d = w(f)
                        },
                        m = function(t) {
                            n || t == b.value || f && !(f > t) || (r.fire(e, "slide", [t]), b.value = t)
                        },
                        v = function(e) {
                            var n = e.pageX || e.clientX;
                            !n && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageX);
                            var r = u ? e.pageY - a.top : n - a.left;
                            r = Math.max(0, Math.min(d || c, r));
                            var i = r / c;
                            return u && (i = 1 - i), t && (i = 1 - i), y(i, 0, !0)
                        },
                        y = function(e, t) {
                            void 0 === t && (t = 0), e > 1 && (e = 1);
                            var n = Math.round(1e3 * e) / 10 + "%";
                            return (!f || f >= e) && (h ? i.removeClass(p, "animated") : (i.addClass(p, "animated"), i.css(p, "transition-duration", (t || 0) + "ms")), i.css(p, "width", n)), e
                        },
                        w = function(e) {
                            return Math.max(0, Math.min(c, u ? (1 - e) * l : e * s))
                        },
                        b = {
                            max: function(e) {
                                f = e
                            },
                            disable: function(e) {
                                n = e
                            },
                            slide: function(e, t, n) {
                                g(), n && m(e), y(e, t)
                            },
                            disableAnimation: function(t, n) {
                                h = t !== !1, i.toggleClass(e, "no-animation", !!n)
                            }
                        };
                    return g(), r.on(e, "mousedown.sld touchstart", function(t) {
                        if (t.preventDefault(), !n) {
                            var a = o(m, 100);
                            g(), b.dragging = !0, i.addClass(e, "is-dragging"), m(v(t)), r.on(document, "mousemove.sld touchmove.sld", function(e) {
                                e.preventDefault(), a(v(e))
                            }), r.one(document, "mouseup touchend", function() {
                                b.dragging = !1, i.removeClass(e, "is-dragging"), r.off(document, "mousemove.sld touchmove.sld")
                            })
                        }
                    }), b
                };
            t.exports = a
        }, {
            "../../common": 1,
            bean: 32
        }],
        28: [function(e, t, n) {
            function r(e) {
                var t = document.createElement("textarea");
                t.value = e, t.style.opacity = 0, t.style.position = "absolute", document.body.appendChild(t), t.select();
                var n = document.execCommand("copy");
                if (document.body.removeChild(t), !n) throw new Error("Unsuccessfull")
            }
            t.exports = function(e, t, n) {
                try {
                    r(e), t()
                } catch (i) {
                    n(i)
                }
            }
        }, {}],
        29: [function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                t && t.embed && (t.embed = i({}, w.defaults.embed, t.embed));
                var r, s, l = e,
                    p = i({}, w.defaults, w.conf, t),
                    g = {},
                    m = new I;
                u.addClass(l, "is-loading"), u.toggleClass(l, "no-flex", !w.support.flex), u.toggleClass(l, "no-svg", !w.support.svg);
                try {
                    g = h ? window.localStorage : g
                } catch (v) {}
                if (p.aspectRatio && "string" == typeof p.aspectRatio) {
                    var y = p.aspectRatio.split(/[:\/]/);
                    p.ratio = y[1] / y[0]
                }
                var C = l.currentStyle && "rtl" === l.currentStyle.direction || window.getComputedStyle && null !== window.getComputedStyle(l, null) && "rtl" === window.getComputedStyle(l, null).getPropertyValue("direction");
                C && u.addClass(l, "is-rtl");
                var M = {
                    conf: p,
                    currentSpeed: 1,
                    volumeLevel: p.muted ? 0 : "undefined" == typeof p.volume ? 1 * g.volume : p.volume,
                    video: {},
                    disabled: !1,
                    finished: !1,
                    loading: !1,
                    muted: "true" == g.muted || p.muted,
                    paused: !1,
                    playing: !1,
                    ready: !1,
                    splash: !1,
                    rtl: C,
                    hijack: function(e) {
                        try {
                            M.engine.suspendEngine()
                        } catch (t) {}
                        M.hijacked = e
                    },
                    release: function() {
                        try {
                            M.engine.resumeEngine()
                        } catch (e) {}
                        M.hijacked = !1
                    },
                    load: function(e, t) {
                        if (!M.error && !M.loading) {
                            M.video = {}, M.finished = !1, e = e || p.clip, e = i({}, m.resolve(e, p.clip.sources)), (M.playing || M.engine) && (e.autoplay = !0);
                            var n = A(e);
                            if (!n) return setTimeout(function() {
                                M.trigger("error", [M, {
                                    code: w.support.flashVideo ? 5 : 10
                                }])
                            }) && M;
                            if (!n.engineName) throw new Error("engineName property of factory should be exposed");
                            if (M.engine && n.engineName === M.engine.engineName || (M.ready = !1, M.engine && (M.engine.unload(), M.conf.autoplay = !0), s = M.engine = n(M, l), M.one("ready", function() {
                                    setTimeout(function() {
                                        M.muted ? M.mute(!0, !0) : s.volume(M.volumeLevel)
                                    })
                                })), i(e, s.pick(e.sources.filter(function(e) {
                                    return e.engine ? e.engine === s.engineName : !0
                                }))), e.src) {
                                var r = M.trigger("load", [M, e, s], !0);
                                r.defaultPrevented ? M.loading = !1 : (M.ready = !1, s.load(e), o(e) && (t = e), t && M.one("ready", t))
                            }
                            return M
                        }
                    },
                    pause: function(e) {
                        return M.hijacked ? M.hijacked.pause(e) | M : (!M.ready || M.seeking || M.loading || (s.pause(), M.one("pause", e)), M)
                    },
                    resume: function() {
                        var e = M.trigger("beforeresume", [M], !0);
                        if (!e.defaultPrevented) return M.hijacked ? M.hijacked.resume() | M : (M.ready && M.paused && (s.resume(), M.finished && (M.trigger("resume", [M]), M.finished = !1)), M)
                    },
                    toggle: function() {
                        return M.ready ? M.paused ? M.resume() : M.pause() : M.load()
                    },
                    seek: function(e, t) {
                        if ("boolean" == typeof e) {
                            var n = .1 * M.video.duration;
                            e = M.video.time + (e ? n : -n), e = Math.min(Math.max(e, 0), M.video.duration - .1)
                        }
                        if ("undefined" == typeof e) return M;
                        if (M.hijacked) return M.hijacked.seek(e, t) | M;
                        if (M.ready) {
                            r = e;
                            var i = M.trigger("beforeseek", [M, e], !0);
                            i.defaultPrevented ? (M.seeking = !1, u.toggleClass(l, "is-seeking", M.seeking)) : (s.seek(e), o(t) && M.one("seek", t))
                        }
                        return M
                    },
                    seekTo: function(e, t) {
                        return void 0 === e ? M.seek(r, t) : void 0 !== M.video.seekOffset ? M.seek(M.video.seekOffset + .1 * (M.video.duration - M.video.seekOffset) * e, t) : M.seek(.1 * M.video.duration * e, t)
                    },
                    mute: function(e, t) {
                        return void 0 === e && (e = !M.muted), t || (g.muted = M.muted = e, g.volume = isNaN(g.volume) ? p.volume : g.volume), M.volume(e ? 0 : g.volume, !0), M.trigger("mute", [M, e]), M
                    },
                    volume: function(e, t) {
                        return M.ready && (e = Math.min(Math.max(e, 0), 1), t || (g.volume = e), s.volume(e)), M
                    },
                    speed: function(e, t) {
                        return M.ready && ("boolean" == typeof e && (e = p.speeds[p.speeds.indexOf(M.currentSpeed) + (e ? 1 : -1)] || M.currentSpeed), s.speed(e), t && l.one("speed", t)), M
                    },
                    stop: function() {
                        return M.ready && (M.pause(), !M.live || M.dvr ? M.seek(0, function() {
                            M.trigger("stop", [M])
                        }) : M.trigger("stop", [M])), M
                    },
                    unload: function() {
                        return p.splash ? (M.trigger("unload", [M]), s && (s.unload(), M.engine = s = 0)) : M.stop(), M
                    },
                    shutdown: function() {
                        M.unload(), M.trigger("shutdown", [M]), a.off(l), delete f[l.getAttribute("data-flowplayer-instance-id")], l.removeAttribute("data-flowplayer-instance-id")
                    },
                    disable: function(e) {
                        return void 0 === e && (e = !M.disabled), e != M.disabled && (M.disabled = e, M.trigger("disable", e)), M
                    },
                    registerExtension: function(e, t) {
                        e = e || [], t = t || [], "string" == typeof e && (e = [e]), "string" == typeof t && (t = [t]), e.forEach(function(e) {
                            M.extensions.js.push(e)
                        }), t.forEach(function(e) {
                            M.extensions.css.push(e)
                        })
                    }
                };
                M.conf = i(M.conf, p), M.extensions = {
                    js: [],
                    css: []
                }, w.extensions.forEach(function(e) {
                    M.registerExtension(e[0], e[1])
                }), c(M);
                var A = function(e) {
                    var t, n = w.engines;
                    if (p.engine) {
                        var r = n.filter(function(e) {
                            return e.engineName === p.engine
                        })[0];
                        if (r && e.sources.some(function(e) {
                                return e.engine && e.engine !== r.engineName ? !1 : r.canPlay(e.type, M.conf)
                            })) return r
                    }
                    return p.enginePreference && (n = w.engines.filter(function(e) {
                        return p.enginePreference.indexOf(e.engineName) > -1
                    }).sort(function(e, t) {
                        return p.enginePreference.indexOf(e.engineName) - p.enginePreference.indexOf(t.engineName)
                    })), e.sources.some(function(e) {
                        var r = n.filter(function(t) {
                            return e.engine && e.engine !== t.engineName ? !1 : t.canPlay(e.type, M.conf)
                        }).shift();
                        return r && (t = r), !!r
                    }), t
                };
                return l.getAttribute("data-flowplayer-instance-id") || (l.setAttribute("data-flowplayer-instance-id", b++), M.on("boot", function() {
                    var e = w.support;
                    !p.splash && !u.hasClass(l, "is-splash") && (e.firstframe || e.mutedAutoplay && p.autoplay) || (M.forcedSplash = !p.splash && !u.hasClass(l, "is-splash"), M.splash = p.autoplay = !0, p.splash || (p.splash = !0), u.addClass(l, "is-splash")), p.splash && u.find("video", l).forEach(u.removeNode), (p.dvr || p.live || u.hasClass(l, "is-live")) && (M.live = p.live = !0, M.dvr = p.dvr = !!p.dvr || u.hasClass(l, "is-dvr"), u.addClass(l, "is-live"), u.toggleClass(l, "is-dvr", M.dvr)), d.forEach(function(e) {
                        e(M, l)
                    }), f.push(M), p.splash ? M.unload() : M.load(), p.disabled && M.disable(), M.one("ready", n)
                }).on("load", function(e, t, n) {
                    p.splash && u.find(".flowplayer.is-ready,.flowplayer.is-loading").forEach(function(e) {
                        var t = e.getAttribute("data-flowplayer-instance-id");
                        if (t !== l.getAttribute("data-flowplayer-instance-id")) {
                            var n = f[Number(t)];
                            n && n.conf.splash && n.unload()
                        }
                    }), u.addClass(l, "is-loading"), t.loading = !0, ("undefined" != typeof n.live || "undefined" != typeof n.dvr) && (u.toggleClass(l, "is-live", n.dvr || n.live), u.toggleClass(l, "is-dvr", !!n.dvr), t.live = n.dvr || n.live, t.dvr = !!n.dvr)
                }).on("ready", function(e, t, n) {
                    n.time = 0, t.video = n, u.removeClass(l, "is-loading"), t.loading = !1, t.muted ? t.mute(!0, !0) : t.volume(t.volumeLevel);
                    var r = t.conf.hlsFix && /mpegurl/i.exec(n.type);
                    u.toggleClass(l, "hls-fix", !!r)
                }).on("unload", function() {
                    u.removeClass(l, "is-loading"), M.loading = !1
                }).on("ready unload", function(e) {
                    var t = "ready" == e.type;
                    u.toggleClass(l, "is-splash", !t), u.toggleClass(l, "is-ready", t), M.ready = t, M.splash = !t
                }).on("progress", function(e, t, n) {
                    t.video.time = n
                }).on("buffer", function(e, t, n) {
                    t.video.buffer = n
                }).on("speed", function(e, t, n) {
                    t.currentSpeed = n
                }).on("volume", function(e, t, n) {
                    t.volumeLevel = Math.round(100 * n) / 100, t.muted ? n && t.mute(!1) : g.volume = n
                }).on("beforeseek seek", function(e) {
                    M.seeking = "beforeseek" == e.type, u.toggleClass(l, "is-seeking", M.seeking)
                }).on("ready pause resume unload finish stop", function(e) {
                    M.paused = /pause|finish|unload|stop/.test(e.type), M.paused = M.paused || "ready" === e.type && !p.autoplay && !M.playing, M.playing = !M.paused, u.toggleClass(l, "is-paused", M.paused), u.toggleClass(l, "is-playing", M.playing), M.load.ed || M.pause()
                }).on("finish", function() {
                    M.finished = !0
                }).on("error", function() {})), M.trigger("boot", [M, l]), M
            }
            var i = e("extend-object"),
                o = e("is-function"),
                a = e("bean"),
                s = e("./ext/ui/slider"),
                l = e("./ext/ui/bar-slider"),
                u = e("./common"),
                c = e("./ext/events"),
                f = [],
                d = [],
                p = window.onbeforeunload;
            window.onbeforeunload = function(e) {
                return f.forEach(function(e) {
                    e.conf.splash ? e.unload() : e.bind("error", function() {
                        u.find(".flowplayer.is-error .fp-message").forEach(u.removeNode)
                    })
                }), p ? p(e) : void 0
            };
            var h = !1;
            try {
                "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", h = !0)
            } catch (g) {}
            var m = /Safari/.exec(navigator.userAgent) && !/Chrome/.exec(navigator.userAgent),
                v = /(\d+\.\d+) Safari/.exec(navigator.userAgent),
                y = v ? Number(v[1]) : 100,
                w = t.exports = function(e, t, n) {
                    if (o(e)) return d.push(e);
                    if ("number" == typeof e || "undefined" == typeof e) return f[e || 0];
                    if (e.nodeType) {
                        if (null !== e.getAttribute("data-flowplayer-instance-id")) return f[e.getAttribute("data-flowplayer-instance-id")];
                        if (!t) return;
                        return r(e, t, n)
                    }
                    if (e.jquery) return w(e[0], t, n);
                    if ("string" == typeof e) {
                        var i = u.find(e)[0];
                        return i && w(i, t, n)
                    }
                };
            i(w, {
                version: "7.1.2",
                engines: [],
                extensions: [],
                conf: {},
                set: function(e, t) {
                    "string" == typeof e ? w.conf[e] = t : i(w.conf, e)
                },
                registerExtension: function(e, t) {
                    w.extensions.push([e, t])
                },
                support: {},
                defaults: {
                    debug: h ? !!localStorage.flowplayerDebug : !1,
                    disabled: !1,
                    fullscreen: window == window.top,
                    keyboard: !0,
                    ratio: 9 / 16,
                    adaptiveRatio: !1,
                    rtmp: 0,
                    proxy: "best",
                    hlsQualities: !0,
                    splash: !1,
                    live: !1,
                    livePositionOffset: 120,
                    swf: "//releases.flowplayer.org/7.1.2/commercial/flowplayer.swf",
                    swfHls: "//releases.flowplayer.org/7.1.2/commercial/flowplayerhls.swf",
                    speeds: [.25, .5, 1, 1.5, 2],
                    tooltip: !0,
                    mouseoutTimeout: 5e3,
                    volume: h ? "true" == localStorage.muted ? 0 : isNaN(localStorage.volume) ? 1 : localStorage.volume || 1 : 1,
                    errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
                    errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
                    playlist: [],
                    hlsFix: m && 8 > y,
                    disableInline: !1
                },
                bean: a,
                common: u,
                slider: s,
                barSlider: l,
                extend: i
            });
            var b = 0,
                I = e("./ext/resolve");
            if ("undefined" != typeof window.jQuery) {
                var C = window.jQuery;
                C(function() {
                    "function" == typeof C.fn.flowplayer && C('.flowplayer:has(video,script[type="application/json"])').flowplayer()
                });
                var M = function(e) {
                    if (!e.length) return {};
                    var t = e.data() || {},
                        n = {};
                    return C.each(["autoplay", "loop", "preload", "poster"], function(r, i) {
                        var o = e.attr(i);
                        void 0 !== o && -1 !== ["autoplay", "poster"].indexOf(i) ? n[i] = o ? o : !0 : void 0 !== o && (t[i] = o ? o : !0)
                    }), t.subtitles = e.find("track").map(function() {
                        var e = C(this);
                        return {
                            src: e.attr("src"),
                            kind: e.attr("kind"),
                            label: e.attr("label"),
                            srclang: e.attr("srclang"),
                            "default": e.prop("default")
                        }
                    }).get(), t.sources = (new I).sourcesFromVideoTag(e, C), i(n, {
                        clip: t
                    })
                };
                C.fn.flowplayer = function(e, t) {
                    return this.each(function() {
                        "string" == typeof e && (e = {
                            swf: e
                        }), o(e) && (t = e, e = {});
                        var n = C(this),
                            i = n.find('script[type="application/json"]'),
                            a = i.length ? JSON.parse(i.text()) : M(n.find("video")),
                            s = C.extend({}, e || {}, a, n.data()),
                            l = r(this, s, t);
                        c.EVENTS.forEach(function(e) {
                            l.on(e + ".jquery", function(e) {
                                n.trigger.call(n, e.type, e.detail && e.detail.args)
                            })
                        }), n.data("flowplayer", l)
                    })
                }
            }
        }, {
            "./common": 1,
            "./ext/events": 10,
            "./ext/resolve": 19,
            "./ext/ui/bar-slider": 26,
            "./ext/ui/slider": 27,
            bean: 32,
            "extend-object": 37,
            "is-function": 40
        }],
        30: [function(e, t, n) {
            e("es5-shim");
            var r = t.exports = e("./flowplayer");
            e("./ext/support"), e("./engine/embed"), e("./engine/html5"), e("./engine/flash"), e("./ext/ui"), e("./ext/message"), e("./ext/keyboard"), e("./ext/playlist"), e("./ext/cuepoint"), e("./ext/subtitle"), e("./ext/analytics"), e("./ext/share"), e("./ext/facebook"), e("./ext/twitter"), e("./ext/embed"), e("./ext/airplay"), e("./ext/chromecast"), e("./ext/qsel"), e("./ext/menu"), e("./ext/fullscreen"), e("./ext/mobile"), r(function(e, t) {
                function n(e) {
                    var t = document.createElement("a");
                    return t.href = e, u.hostname(t.hostname)
                }

                function i(e) {
                    var t = "ab.ca,ac.ac,ac.ae,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.sg,ac.th,ac.uk,ad.jp,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bel.tr,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.de,co.gl,co.hk,co.id,co.il,co.in,co.jp,co.kr,co.mg,co.ms,co.nz,co.th,co.uk,co.ve,co.vi,co.za,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.co,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.na,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,cp.tz,cq.cn,de.com,de.org,ecn.br,ed.jp,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pl,edu.pt,edu.qa,edu.sg,edu.tr,edu.tw,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gov.uk,govt.nz,gr.jp,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,in.ua,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,iwi.nz,jl.cn,jor.br,js.cn,jus.br,k12.il,k12.tr,kr.com,lel.br,lg.jp,ln.cn,ltd.uk,maori.nz,mb.ca,me.uk,med.br,mi.th,mil.br,mil.uk,mo.cn,mod.uk,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nhs.uk,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,nt.ro,ntr.br,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,or.jp,or.kr,or.th,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ng,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,pe.ca,plc.uk,police.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.uk,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tm.ro,tmp.br,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",");
                    e = e.toLowerCase();
                    var n = e.split("."),
                        r = n.length;
                    if (2 > r || /^\d+$/.test(n[r - 1])) return e;
                    var i = n.slice(-2).join(".");
                    return r >= 3 && t.indexOf(i) >= 0 ? n.slice(-3).join(".") : i
                }

                function o(e, t) {
                    t = i(t);
                    for (var n = 0, r = t.length - 1; r >= 0; r--) n += 5285928321 * t.charCodeAt(r);
                    for (n = ("" + n).substring(0, 7), r = 0; r < e.length; r++)
                        if (n === e[r].substring(1, 8)) return 1
                }
                var a = function(e, t) {
                        var n = e.className.split(" "); - 1 === n.indexOf(t) && (e.className += " " + t)
                    },
                    s = function(e) {
                        return "none" !== window.getComputedStyle(e).display
                    },
                    l = e.conf,
                    u = r.common,
                    c = u.createElement,
                    f = l.swf.indexOf("flowplayer.org") && l.e && t.getAttribute("data-origin"),
                    d = f ? n(f) : u.hostname(),
                    p = (document, l.key);
                if ("file:" == location.protocol && (d = "localhost"), e.load.ed = 1, l.hostname = d, l.origin = f || location.href, f && a(t, "is-embedded"), "string" == typeof p && (p = p.split(/,\s*/)), p && "function" == typeof o && o(p, d)) {
                    if (l.logo) {
                        var h = u.find(".fp-player", t)[0],
                            g = l.logo.href || "",
                            m = l.logo.src || l.logo,
                            v = c("a", {
                                className: "fp-logo",
                                href: g
                            });
                        f && (v.href = v.href || f), l.embed && l.embed.popup && (v.target = "_blank");
                        var y = c("img", {
                            src: m
                        });
                        v.appendChild(y), (h || t).appendChild(v)
                    }
                } else {
                    var v = c("a", {
                        href: "https://flowplayer.com/hello/?from=player"
                    });
                    t.appendChild(v);
                    var w = c("div", {
                            className: "fp-context-menu fp-menu"
                        }, '<strong>&copy; 2017 Flowplayer</strong><a href="https://flowplayer.com/hello/?from=player">About Flowplayer</a><a href="https://flowplayer.com/license">GPL based license</a>'),
                        b = window.location.href.indexOf("localhost"),
                        h = u.find(".fp-player", t)[0];
                    7 !== b && (h || t).appendChild(w), e.on("pause resume finish unload ready", function(e, n) {
                        var r = -1;
                        if (n.video.src)
                            for (var i = [
                                    ["org", "flowplayer", "drive"],
                                    ["org", "flowplayer", "my"],
                                    ["org", "flowplayer", "cdn"]
                                ], o = 0; o < i.length && (r = n.video.src.indexOf("://" + i[o].reverse().join(".")), -1 === r); o++);
                        if (/pause|resume/.test(e.type) && "flash" != n.engine.engineName && 4 != r && 5 != r) {
                            var a = {
                                display: "block",
                                position: "absolute",
                                left: "16px",
                                bottom: "70px",
                                zIndex: 99999,
                                width: "100px",
                                height: "20px",
                                backgroundImage: "url(" + [".png", "logo", "/", ".net", ".cloudfront", "d32wqyuo10o653", "//"].reverse().join("") + ")"
                            };
                            for (var l in a) a.hasOwnProperty(l) && (v.style[l] = a[l]);
                            n.load.ed = s(v) && (7 === b || w.parentNode == t || w.parentNode == h), n.load.ed || n.pause()
                        } else v.style.display = "none"
                    })
                }
            })
        }, {
            "./engine/embed": 2,
            "./engine/flash": 3,
            "./engine/html5": 4,
            "./ext/airplay": 5,
            "./ext/analytics": 6,
            "./ext/chromecast": 7,
            "./ext/cuepoint": 8,
            "./ext/embed": 9,
            "./ext/facebook": 11,
            "./ext/fullscreen": 12,
            "./ext/keyboard": 13,
            "./ext/menu": 14,
            "./ext/message": 15,
            "./ext/mobile": 16,
            "./ext/playlist": 17,
            "./ext/qsel": 18,
            "./ext/share": 20,
            "./ext/subtitle": 21,
            "./ext/support": 23,
            "./ext/twitter": 24,
            "./ext/ui": 25,
            "./flowplayer": 29,
            "es5-shim": 36
        }],
        31: [function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
            }

            function i(e) {
                return 3 * e.length / 4 - r(e)
            }

            function o(e) {
                var t, n, i, o, a, s = e.length;
                o = r(e), a = new f(3 * s / 4 - o), n = o > 0 ? s - 4 : s;
                var l = 0;
                for (t = 0; n > t; t += 4) i = c[e.charCodeAt(t)] << 18 | c[e.charCodeAt(t + 1)] << 12 | c[e.charCodeAt(t + 2)] << 6 | c[e.charCodeAt(t + 3)], a[l++] = i >> 16 & 255, a[l++] = i >> 8 & 255, a[l++] = 255 & i;
                return 2 === o ? (i = c[e.charCodeAt(t)] << 2 | c[e.charCodeAt(t + 1)] >> 4, a[l++] = 255 & i) : 1 === o && (i = c[e.charCodeAt(t)] << 10 | c[e.charCodeAt(t + 1)] << 4 | c[e.charCodeAt(t + 2)] >> 2, a[l++] = i >> 8 & 255, a[l++] = 255 & i), a
            }

            function a(e) {
                return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
            }

            function s(e, t, n) {
                for (var r, i = [], o = t; n > o; o += 3) r = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2], i.push(a(r));
                return i.join("")
            }

            function l(e) {
                for (var t, n = e.length, r = n % 3, i = "", o = [], a = 16383, l = 0, c = n - r; c > l; l += a) o.push(s(e, l, l + a > c ? c : l + a));
                return 1 === r ? (t = e[n - 1], i += u[t >> 2], i += u[t << 4 & 63], i += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], i += u[t >> 10], i += u[t >> 4 & 63], i += u[t << 2 & 63], i += "="), o.push(i), o.join("")
            }
            n.byteLength = i, n.toByteArray = o, n.fromByteArray = l;
            for (var u = [], c = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", p = 0, h = d.length; h > p; ++p) u[p] = d[p], c[d.charCodeAt(p)] = p;
            c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63
        }, {}],
        32: [function(t, n, r) {
            ! function(t, r, i) {
                "undefined" != typeof n && n.exports ? n.exports = i() : "function" == typeof e && e.amd ? e(i) : r[t] = i()
            }("bean", this, function(e, t) {
                e = e || "bean", t = t || this;
                var n, r = window,
                    i = t[e],
                    o = /[^\.]*(?=\..*)\.|.*/,
                    a = /\..*/,
                    s = "addEventListener",
                    l = "removeEventListener",
                    u = document || {},
                    c = u.documentElement || {},
                    f = c[s],
                    d = f ? s : "attachEvent",
                    p = {},
                    h = Array.prototype.slice,
                    g = function(e, t) {
                        return e.split(t || " ")
                    },
                    m = function(e) {
                        return "string" == typeof e
                    },
                    v = function(e) {
                        return "function" == typeof e
                    },
                    y = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",
                    w = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",
                    b = function(e, t, n) {
                        for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                        return e
                    }({}, g(y + (f ? w : ""))),
                    I = function() {
                        var e = "compareDocumentPosition" in c ? function(e, t) {
                                return t.compareDocumentPosition && 16 === (16 & t.compareDocumentPosition(e))
                            } : "contains" in c ? function(e, t) {
                                return t = 9 === t.nodeType || t === window ? c : t, t !== e && t.contains(e)
                            } : function(e, t) {
                                for (; e = e.parentNode;)
                                    if (e === t) return 1;
                                return 0
                            },
                            t = function(t) {
                                var n = t.relatedTarget;
                                return n ? n !== this && "xul" !== n.prefix && !/document/.test(this.toString()) && !e(n, this) : null == n
                            };
                        return {
                            mouseenter: {
                                base: "mouseover",
                                condition: t
                            },
                            mouseleave: {
                                base: "mouseout",
                                condition: t
                            },
                            mousewheel: {
                                base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                            }
                        }
                    }(),
                    C = function() {
                        var e = g("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),
                            t = e.concat(g("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),
                            n = t.concat(g("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),
                            i = e.concat(g("char charCode key keyCode keyIdentifier keyLocation location")),
                            o = e.concat(g("data")),
                            a = e.concat(g("touches targetTouches changedTouches scale rotation")),
                            s = e.concat(g("data origin source")),
                            l = e.concat(g("state")),
                            f = /over|out/,
                            d = [{
                                reg: /key/i,
                                fix: function(e, t) {
                                    return t.keyCode = e.keyCode || e.which, i
                                }
                            }, {
                                reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                                fix: function(e, n, r) {
                                    return n.rightClick = 3 === e.which || 2 === e.button, n.pos = {
                                        x: 0,
                                        y: 0
                                    }, e.pageX || e.pageY ? (n.clientX = e.pageX, n.clientY = e.pageY) : (e.clientX || e.clientY) && (n.clientX = e.clientX + u.body.scrollLeft + c.scrollLeft, n.clientY = e.clientY + u.body.scrollTop + c.scrollTop), f.test(r) && (n.relatedTarget = e.relatedTarget || e[("mouseover" == r ? "from" : "to") + "Element"]), t
                                }
                            }, {
                                reg: /mouse.*(wheel|scroll)/i,
                                fix: function() {
                                    return n
                                }
                            }, {
                                reg: /^text/i,
                                fix: function() {
                                    return o
                                }
                            }, {
                                reg: /^touch|^gesture/i,
                                fix: function() {
                                    return a
                                }
                            }, {
                                reg: /^message$/i,
                                fix: function() {
                                    return s
                                }
                            }, {
                                reg: /^popstate$/i,
                                fix: function() {
                                    return l
                                }
                            }, {
                                reg: /.*/,
                                fix: function() {
                                    return e
                                }
                            }],
                            p = {},
                            h = function(e, t, n) {
                                if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || r).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                                    var i, o, a, s, l, u = e.type,
                                        c = e.target || e.srcElement;
                                    if (this.target = c && 3 === c.nodeType ? c.parentNode : c, n) {
                                        if (l = p[u], !l)
                                            for (i = 0, o = d.length; o > i; i++)
                                                if (d[i].reg.test(u)) {
                                                    p[u] = l = d[i].fix;
                                                    break
                                                } for (s = l(e, this, u), i = s.length; i--;) !((a = s[i]) in this) && a in e && (this[a] = e[a])
                                    }
                                }
                            };
                        return h.prototype.preventDefault = function() {
                            this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                        }, h.prototype.stopPropagation = function() {
                            this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                        }, h.prototype.stop = function() {
                            this.preventDefault(), this.stopPropagation(), this.stopped = !0
                        }, h.prototype.stopImmediatePropagation = function() {
                            this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                                return !0
                            }
                        }, h.prototype.isImmediatePropagationStopped = function() {
                            return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                        }, h.prototype.clone = function(e) {
                            var t = new h(this, this.element, this.isNative);
                            return t.currentTarget = e, t
                        }, h
                    }(),
                    M = function(e, t) {
                        return f || t || e !== u && e !== r ? e : c
                    },
                    A = function() {
                        var e = function(e, t, n, r) {
                                var i = function(n, i) {
                                        return t.apply(e, r ? h.call(i, n ? 0 : 1).concat(r) : i)
                                    },
                                    o = function(n, r) {
                                        return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                                    },
                                    a = n ? function(e) {
                                        var t = o(e, this);
                                        return n.apply(t, arguments) ? (e && (e.currentTarget = t), i(e, arguments)) : void 0
                                    } : function(e) {
                                        return t.__beanDel && (e = e.clone(o(e))), i(e, arguments)
                                    };
                                return a.__beanDel = t.__beanDel, a
                            },
                            t = function(t, n, r, i, o, a, s) {
                                var l, u = I[n];
                                "unload" == n && (r = N(L, t, n, r, i)), u && (u.condition && (r = e(t, r, u.condition, a)), n = u.base || n), this.isNative = l = b[n] && !!t[d], this.customType = !f && !l && n, this.element = t, this.type = n, this.original = i, this.namespaces = o, this.eventType = f || l ? n : "propertychange", this.target = M(t, l), this[d] = !!this.target[d], this.root = s, this.handler = e(t, r, null, a)
                            };
                        return t.prototype.inNamespaces = function(e) {
                            var t, n, r = 0;
                            if (!e) return !0;
                            if (!this.namespaces) return !1;
                            for (t = e.length; t--;)
                                for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && r++;
                            return e.length === r
                        }, t.prototype.matches = function(e, t, n) {
                            return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                        }, t
                    }(),
                    S = function() {
                        var e = {},
                            t = function(n, r, i, o, a, s) {
                                var l = a ? "r" : "$";
                                if (r && "*" != r) {
                                    var u, c = 0,
                                        f = e[l + r],
                                        d = "*" == n;
                                    if (!f) return;
                                    for (u = f.length; u > c; c++)
                                        if ((d || f[c].matches(n, i, o)) && !s(f[c], f, c, r)) return
                                } else
                                    for (var p in e) p.charAt(0) == l && t(n, p.substr(1), i, o, a, s)
                            },
                            n = function(t, n, r, i) {
                                var o, a = e[(i ? "r" : "$") + n];
                                if (a)
                                    for (o = a.length; o--;)
                                        if (!a[o].root && a[o].matches(t, r, null)) return !0;
                                return !1
                            },
                            r = function(e, n, r, i) {
                                var o = [];
                                return t(e, n, r, null, i, function(e) {
                                    return o.push(e)
                                }), o
                            },
                            i = function(t) {
                                var n = !t.root && !this.has(t.element, t.type, null, !1),
                                    r = (t.root ? "r" : "$") + t.type;
                                return (e[r] || (e[r] = [])).push(t), n
                            },
                            o = function(n) {
                                t(n.element, n.type, null, n.handler, n.root, function(t, n, r) {
                                    return n.splice(r, 1), t.removed = !0, 0 === n.length && delete e[(t.root ? "r" : "$") + t.type], !1
                                })
                            },
                            a = function() {
                                var t, n = [];
                                for (t in e) "$" == t.charAt(0) && (n = n.concat(e[t]));
                                return n
                            };
                        return {
                            has: n,
                            get: r,
                            put: i,
                            del: o,
                            entries: a
                        }
                    }(),
                    E = function(e) {
                        n = arguments.length ? e : u.querySelectorAll ? function(e, t) {
                            return t.querySelectorAll(e)
                        } : function() {
                            throw new Error("Bean: No selector engine installed")
                        }
                    },
                    j = function(e, t) {
                        if (f || !t || !e || e.propertyName == "_on" + t) {
                            var n = S.get(this, t || e.type, null, !1),
                                r = n.length,
                                i = 0;
                            for (e = new C(e, this, !0), t && (e.type = t); r > i && !e.isImmediatePropagationStopped(); i++) n[i].removed || n[i].handler.call(this, e)
                        }
                    },
                    D = f ? function(e, t, n) {
                        e[n ? s : l](t, j, !1)
                    } : function(e, t, n, r) {
                        var i;
                        n ? (S.put(i = new A(e, r || t, function(t) {
                            j.call(e, t, r)
                        }, j, null, null, !0)), r && null == e["_on" + r] && (e["_on" + r] = 0), i.target.attachEvent("on" + i.eventType, i.handler)) : (i = S.get(e, r || t, j, !0)[0], i && (i.target.detachEvent("on" + i.eventType, i.handler), S.del(i)))
                    },
                    N = function(e, t, n, r, i) {
                        return function() {
                            r.apply(this, arguments), e(t, n, i)
                        }
                    },
                    L = function(e, t, n, r) {
                        var i, o, s = t && t.replace(a, ""),
                            l = S.get(e, s, null, !1),
                            u = {};
                        for (i = 0, o = l.length; o > i; i++) n && l[i].original !== n || !l[i].inNamespaces(r) || (S.del(l[i]), !u[l[i].eventType] && l[i][d] && (u[l[i].eventType] = {
                            t: l[i].eventType,
                            c: l[i].type
                        }));
                        for (i in u) S.has(e, u[i].t, null, !1) || D(e, u[i].t, !1, u[i].c)
                    },
                    x = function(e, t) {
                        var r = function(t, r) {
                                for (var i, o = m(e) ? n(e, r) : e; t && t !== r; t = t.parentNode)
                                    for (i = o.length; i--;)
                                        if (o[i] === t) return t
                            },
                            i = function(e) {
                                var n = r(e.target, this);
                                n && t.apply(n, arguments)
                            };
                        return i.__beanDel = {
                            ft: r,
                            selector: e
                        }, i
                    },
                    T = f ? function(e, t, n) {
                        var i = u.createEvent(e ? "HTMLEvents" : "UIEvents");
                        i[e ? "initEvent" : "initUIEvent"](t, !0, !0, r, 1), n.dispatchEvent(i)
                    } : function(e, t, n) {
                        n = M(n, e), e ? n.fireEvent("on" + t, u.createEventObject()) : n["_on" + t]++
                    },
                    Z = function(e, t, n) {
                        var r, i, s, l, u = m(t);
                        if (u && t.indexOf(" ") > 0) {
                            for (t = g(t), l = t.length; l--;) Z(e, t[l], n);
                            return e
                        }
                        if (i = u && t.replace(a, ""), i && I[i] && (i = I[i].base), !t || u)(s = u && t.replace(o, "")) && (s = g(s, ".")), L(e, i, n, s);
                        else if (v(t)) L(e, null, t);
                        else
                            for (r in t) t.hasOwnProperty(r) && Z(e, r, t[r]);
                        return e
                    },
                    P = function(e, t, r, i) {
                        var s, l, u, c, f, m, y; {
                            if (void 0 !== r || "object" != typeof t) {
                                for (v(r) ? (f = h.call(arguments, 3), i = s = r) : (s = i, f = h.call(arguments, 4), i = x(r, s, n)), u = g(t), this === p && (i = N(Z, e, t, i, s)), c = u.length; c--;) y = S.put(m = new A(e, u[c].replace(a, ""), i, s, g(u[c].replace(o, ""), "."), f, !1)), m[d] && y && D(e, m.eventType, !0, m.customType);
                                return e
                            }
                            for (l in t) t.hasOwnProperty(l) && P.call(this, e, l, t[l])
                        }
                    },
                    k = function(e, t, n, r) {
                        return P.apply(null, m(n) ? [e, n, t, r].concat(arguments.length > 3 ? h.call(arguments, 5) : []) : h.call(arguments))
                    },
                    Y = function() {
                        return P.apply(p, arguments)
                    },
                    z = function(e, t, n) {
                        var r, i, s, l, u, c = g(t);
                        for (r = c.length; r--;)
                            if (t = c[r].replace(a, ""), (l = c[r].replace(o, "")) && (l = g(l, ".")), l || n || !e[d])
                                for (u = S.get(e, t, null, !1), n = [!1].concat(n), i = 0, s = u.length; s > i; i++) u[i].inNamespaces(l) && u[i].handler.apply(e, n);
                            else T(b[t], t, e);
                        return e
                    },
                    O = function(e, t, n) {
                        for (var r, i, o = S.get(t, n, null, !1), a = o.length, s = 0; a > s; s++) o[s].original && (r = [e, o[s].type], (i = o[s].handler.__beanDel) && r.push(i.selector), r.push(o[s].original), P.apply(null, r));
                        return e
                    },
                    G = {
                        on: P,
                        add: k,
                        one: Y,
                        off: Z,
                        remove: Z,
                        clone: O,
                        fire: z,
                        Event: C,
                        setSelectorEngine: E,
                        noConflict: function() {
                            return t[e] = i, this
                        }
                    };
                if (r.attachEvent) {
                    var R = function() {
                        var e, t = S.entries();
                        for (e in t) t[e].type && "unload" !== t[e].type && Z(t[e].element, t[e].type);
                        r.detachEvent("onunload", R), r.CollectGarbage && r.CollectGarbage()
                    };
                    r.attachEvent("onunload", R)
                }
                return E(), G
            })
        }, {}],
        33: [function(e, t, n) {
            (function(t) {
                "use strict";

                function r() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }

                function i() {
                    return a.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function o(e, t) {
                    if (i() < t) throw new RangeError("Invalid typed array length");
                    return a.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t), e.__proto__ = a.prototype) : (null === e && (e = new a(t)), e.length = t), e
                }

                function a(e, t, n) {
                    if (!(a.TYPED_ARRAY_SUPPORT || this instanceof a)) return new a(e, t, n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return c(this, e)
                    }
                    return s(this, e, t, n)
                }

                function s(e, t, n, r) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? p(e, t, n, r) : "string" == typeof t ? f(e, t, n) : h(e, t)
                }

                function l(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                    if (0 > e) throw new RangeError('"size" argument must not be negative')
                }

                function u(e, t, n, r) {
                    return l(t), 0 >= t ? o(e, t) : void 0 !== n ? "string" == typeof r ? o(e, t).fill(n, r) : o(e, t).fill(n) : o(e, t)
                }

                function c(e, t) {
                    if (l(t), e = o(e, 0 > t ? 0 : 0 | g(t)), !a.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; t > n; ++n) e[n] = 0;
                    return e
                }

                function f(e, t, n) {
                    if (("string" != typeof n || "" === n) && (n = "utf8"), !a.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | v(t, n);
                    e = o(e, r);
                    var i = e.write(t, n);
                    return i !== r && (e = e.slice(0, i)), e
                }

                function d(e, t) {
                    var n = t.length < 0 ? 0 : 0 | g(t.length);
                    e = o(e, n);
                    for (var r = 0; n > r; r += 1) e[r] = 255 & t[r];
                    return e
                }

                function p(e, t, n, r) {
                    if (t.byteLength, 0 > n || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), a.TYPED_ARRAY_SUPPORT ? (e = t, e.__proto__ = a.prototype) : e = d(e, t), e
                }

                function h(e, t) {
                    if (a.isBuffer(t)) {
                        var n = 0 | g(t.length);
                        return e = o(e, n), 0 === e.length ? e : (t.copy(e, 0, 0, n), e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || K(t.length) ? o(e, 0) : d(e, t);
                        if ("Buffer" === t.type && $(t.data)) return d(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }

                function g(e) {
                    if (e >= i()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i().toString(16) + " bytes");
                    return 0 | e
                }

                function m(e) {
                    return +e != e && (e = 0), a.alloc(+e)
                }

                function v(e, t) {
                    if (a.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var r = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return V(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return X(e).length;
                        default:
                            if (r) return V(e).length;
                            t = ("" + t).toLowerCase(), r = !0
                    }
                }

                function y(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";
                    if (n >>>= 0, t >>>= 0, t >= n) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return Z(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return N(this, t, n);
                        case "ascii":
                            return x(this, t, n);
                        case "latin1":
                        case "binary":
                            return T(this, t, n);
                        case "base64":
                            return D(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return P(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function w(e, t, n) {
                    var r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function b(e, t, n, r, i) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), 0 > n && (n = e.length + n), n >= e.length) {
                        if (i) return -1;
                        n = e.length - 1
                    } else if (0 > n) {
                        if (!i) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : I(e, t, n, r, i);
                    if ("number" == typeof t) return t = 255 & t, a.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : I(e, [t], n, r, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function I(e, t, n, r, i) {
                    function o(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    var a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== r && (r = String(r).toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, n /= 2
                    }
                    var u;
                    if (i) {
                        var c = -1;
                        for (u = n; s > u; u++)
                            if (o(e, u) === o(t, -1 === c ? 0 : u - c)) {
                                if (-1 === c && (c = u), u - c + 1 === l) return c * a
                            } else -1 !== c && (u -= u - c), c = -1
                    } else
                        for (n + l > s && (n = s - l), u = n; u >= 0; u--) {
                            for (var f = !0, d = 0; l > d; d++)
                                if (o(e, u + d) !== o(t, d)) {
                                    f = !1;
                                    break
                                } if (f) return u
                        }
                    return -1
                }

                function C(e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r), r > i && (r = i)) : r = i;
                    var o = t.length;
                    if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                    r > o / 2 && (r = o / 2);
                    for (var a = 0; r > a; ++a) {
                        var s = parseInt(t.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        e[n + a] = s
                    }
                    return a
                }

                function M(e, t, n, r) {
                    return _(V(t, e.length - n), e, n, r)
                }

                function A(e, t, n, r) {
                    return _(H(t), e, n, r)
                }

                function S(e, t, n, r) {
                    return A(e, t, n, r)
                }

                function E(e, t, n, r) {
                    return _(X(t), e, n, r)
                }

                function j(e, t, n, r) {
                    return _(F(t, e.length - n), e, n, r)
                }

                function D(e, t, n) {
                    return 0 === t && n === e.length ? Q.fromByteArray(e) : Q.fromByteArray(e.slice(t, n))
                }

                function N(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], i = t; n > i;) {
                        var o = e[i],
                            a = null,
                            s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                        if (n >= i + s) {
                            var l, u, c, f;
                            switch (s) {
                                case 1:
                                    128 > o && (a = o);
                                    break;
                                case 2:
                                    l = e[i + 1], 128 === (192 & l) && (f = (31 & o) << 6 | 63 & l, f > 127 && (a = f));
                                    break;
                                case 3:
                                    l = e[i + 1], u = e[i + 2], 128 === (192 & l) && 128 === (192 & u) && (f = (15 & o) << 12 | (63 & l) << 6 | 63 & u, f > 2047 && (55296 > f || f > 57343) && (a = f));
                                    break;
                                case 4:
                                    l = e[i + 1], u = e[i + 2], c = e[i + 3], 128 === (192 & l) && 128 === (192 & u) && 128 === (192 & c) && (f = (15 & o) << 18 | (63 & l) << 12 | (63 & u) << 6 | 63 & c, f > 65535 && 1114112 > f && (a = f))
                            }
                        }
                        null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s
                    }
                    return L(r)
                }

                function L(e) {
                    var t = e.length;
                    if (ee >= t) return String.fromCharCode.apply(String, e);
                    for (var n = "", r = 0; t > r;) n += String.fromCharCode.apply(String, e.slice(r, r += ee));
                    return n
                }

                function x(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; n > i; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }

                function T(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var i = t; n > i; ++i) r += String.fromCharCode(e[i]);
                    return r
                }

                function Z(e, t, n) {
                    var r = e.length;
                    (!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);
                    for (var i = "", o = t; n > o; ++o) i += B(e[o]);
                    return i
                }

                function P(e, t, n) {
                    for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return i
                }

                function k(e, t, n) {
                    if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function Y(e, t, n, r, i, o) {
                    if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || o > t) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function z(e, t, n, r) {
                    0 > t && (t = 65535 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 2); o > i; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                }

                function O(e, t, n, r) {
                    0 > t && (t = 4294967295 + t + 1);
                    for (var i = 0, o = Math.min(e.length - n, 4); o > i; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
                }

                function G(e, t, n, r, i, o) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (0 > n) throw new RangeError("Index out of range")
                }

                function R(e, t, n, r, i) {
                    return i || G(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), q.write(e, t, n, r, 23, 4), n + 4
                }

                function W(e, t, n, r, i) {
                    return i || G(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), q.write(e, t, n, r, 52, 8), n + 8
                }

                function U(e) {
                    if (e = J(e).replace(te, ""), e.length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }

                function J(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }

                function B(e) {
                    return 16 > e ? "0" + e.toString(16) : e.toString(16)
                }

                function V(e, t) {
                    t = t || 1 / 0;
                    for (var n, r = e.length, i = null, o = [], a = 0; r > a; ++a) {
                        if (n = e.charCodeAt(a), n > 55295 && 57344 > n) {
                            if (!i) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === r) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (56320 > n) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                                continue
                            }
                            n = (i - 55296 << 10 | n - 56320) + 65536
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, 128 > n) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (2048 > n) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (65536 > n) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(1114112 > n)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function H(e) {
                    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }

                function F(e, t) {
                    for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                    return o
                }

                function X(e) {
                    return Q.toByteArray(U(e))
                }

                function _(e, t, n, r) {
                    for (var i = 0; r > i && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }

                function K(e) {
                    return e !== e
                }
                var Q = e("base64-js"),
                    q = e("ieee754"),
                    $ = e("isarray");
                n.Buffer = a, n.SlowBuffer = m, n.INSPECT_MAX_BYTES = 50, a.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : r(), n.kMaxLength = i(), a.poolSize = 8192, a._augment = function(e) {
                    return e.__proto__ = a.prototype, e
                }, a.from = function(e, t, n) {
                    return s(null, e, t, n)
                }, a.TYPED_ARRAY_SUPPORT && (a.prototype.__proto__ = Uint8Array.prototype, a.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && a[Symbol.species] === a && Object.defineProperty(a, Symbol.species, {
                    value: null,
                    configurable: !0
                })), a.alloc = function(e, t, n) {
                    return u(null, e, t, n)
                }, a.allocUnsafe = function(e) {
                    return c(null, e)
                }, a.allocUnsafeSlow = function(e) {
                    return c(null, e)
                }, a.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer)
                }, a.compare = function(e, t) {
                    if (!a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); o > i; ++i)
                        if (e[i] !== t[i]) {
                            n = e[i], r = t[i];
                            break
                        } return r > n ? -1 : n > r ? 1 : 0
                }, a.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(e, t) {
                    if (!$(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var r = a.allocUnsafe(t),
                        i = 0;
                    for (n = 0; n < e.length; ++n) {
                        var o = e[n];
                        if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                        o.copy(r, i), i += o.length
                    }
                    return r
                }, a.byteLength = v, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; e > t; t += 2) w(this, t, t + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; e > t; t += 4) w(this, t, t + 3), w(this, t + 1, t + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; e > t; t += 8) w(this, t, t + 7), w(this, t + 1, t + 6), w(this, t + 2, t + 5), w(this, t + 3, t + 4);
                    return this
                }, a.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : y.apply(this, arguments)
                }, a.prototype.equals = function(e) {
                    if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e ? !0 : 0 === a.compare(this, e)
                }, a.prototype.inspect = function() {
                    var e = "",
                        t = n.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                }, a.prototype.compare = function(e, t, n, r, i) {
                    if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), 0 > t || n > e.length || 0 > r || i > this.length) throw new RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                    for (var o = i - r, s = n - t, l = Math.min(o, s), u = this.slice(r, i), c = e.slice(t, n), f = 0; l > f; ++f)
                        if (u[f] !== c[f]) {
                            o = u[f], s = c[f];
                            break
                        } return s > o ? -1 : o > s ? 1 : 0
                }, a.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, a.prototype.indexOf = function(e, t, n) {
                    return b(this, e, t, n, !0)
                }, a.prototype.lastIndexOf = function(e, t, n) {
                    return b(this, e, t, n, !1)
                }, a.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var i = this.length - t;
                    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var o = !1;;) switch (r) {
                        case "hex":
                            return C(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return M(this, e, t, n);
                        case "ascii":
                            return A(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return S(this, e, t, n);
                        case "base64":
                            return E(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return j(this, e, t, n);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), o = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var ee = 4096;
                a.prototype.slice = function(e, t) {
                    var n = this.length;
                    e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), e > t && (t = e);
                    var r;
                    if (a.TYPED_ARRAY_SUPPORT) r = this.subarray(e, t), r.__proto__ = a.prototype;
                    else {
                        var i = t - e;
                        r = new a(i, void 0);
                        for (var o = 0; i > o; ++o) r[o] = this[o + e]
                    }
                    return r
                }, a.prototype.readUIntLE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || k(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return r
                }, a.prototype.readUIntBE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || k(e, t, this.length);
                    for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r
                }, a.prototype.readUInt8 = function(e, t) {
                    return t || k(e, 1, this.length), this[e]
                }, a.prototype.readUInt16LE = function(e, t) {
                    return t || k(e, 2, this.length), this[e] | this[e + 1] << 8
                }, a.prototype.readUInt16BE = function(e, t) {
                    return t || k(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, a.prototype.readUInt32LE = function(e, t) {
                    return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, a.prototype.readUInt32BE = function(e, t) {
                    return t || k(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, a.prototype.readIntLE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || k(e, t, this.length);
                    for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
                    return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
                }, a.prototype.readIntBE = function(e, t, n) {
                    e = 0 | e, t = 0 | t, n || k(e, t, this.length);
                    for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
                    return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
                }, a.prototype.readInt8 = function(e, t) {
                    return t || k(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, a.prototype.readInt16LE = function(e, t) {
                    t || k(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, a.prototype.readInt16BE = function(e, t) {
                    t || k(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, a.prototype.readInt32LE = function(e, t) {
                    return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, a.prototype.readInt32BE = function(e, t) {
                    return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, a.prototype.readFloatLE = function(e, t) {
                    return t || k(e, 4, this.length), q.read(this, e, !0, 23, 4)
                }, a.prototype.readFloatBE = function(e, t) {
                    return t || k(e, 4, this.length), q.read(this, e, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(e, t) {
                    return t || k(e, 8, this.length), q.read(this, e, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(e, t) {
                    return t || k(e, 8, this.length), q.read(this, e, !1, 52, 8)
                }, a.prototype.writeUIntLE = function(e, t, n, r) {
                    if (e = +e, t = 0 | t, n = 0 | n, !r) {
                        var i = Math.pow(2, 8 * n) - 1;
                        Y(this, e, t, n, i, 0)
                    }
                    var o = 1,
                        a = 0;
                    for (this[t] = 255 & e; ++a < n && (o *= 256);) this[t + a] = e / o & 255;
                    return t + n
                }, a.prototype.writeUIntBE = function(e, t, n, r) {
                    if (e = +e, t = 0 | t, n = 0 | n, !r) {
                        var i = Math.pow(2, 8 * n) - 1;
                        Y(this, e, t, n, i, 0)
                    }
                    var o = n - 1,
                        a = 1;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) this[t + o] = e / a & 255;
                    return t + n
                }, a.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 1, 255, 0), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, a.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : z(this, e, t, !0), t + 2
                }, a.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 2, 65535, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : z(this, e, t, !1), t + 2
                }, a.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : O(this, e, t, !0), t + 4
                }, a.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 4, 4294967295, 0), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
                }, a.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t = 0 | t, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        Y(this, e, t, n, i - 1, -i)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < n && (a *= 256);) 0 > e && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, a.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t = 0 | t, !r) {
                        var i = Math.pow(2, 8 * n - 1);
                        Y(this, e, t, n, i - 1, -i)
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) 0 > e && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, a.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 1, 127, -128), a.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, a.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : z(this, e, t, !0), t + 2
                }, a.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 2, 32767, -32768), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : z(this, e, t, !1), t + 2
                }, a.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 4, 2147483647, -2147483648), a.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : O(this, e, t, !0), t + 4
                }, a.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t = 0 | t, n || Y(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), a.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : O(this, e, t, !1), t + 4
                }, a.prototype.writeFloatLE = function(e, t, n) {
                    return R(this, e, t, !0, n)
                }, a.prototype.writeFloatBE = function(e, t, n) {
                    return R(this, e, t, !1, n)
                }, a.prototype.writeDoubleLE = function(e, t, n) {
                    return W(this, e, t, !0, n)
                }, a.prototype.writeDoubleBE = function(e, t, n) {
                    return W(this, e, t, !1, n)
                }, a.prototype.copy = function(e, t, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && n > r && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (0 > t) throw new RangeError("targetStart out of bounds");
                    if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (0 > r) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var i, o = r - n;
                    if (this === e && t > n && r > t)
                        for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
                    else if (1e3 > o || !a.TYPED_ARRAY_SUPPORT)
                        for (i = 0; o > i; ++i) e[i + t] = this[i + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, a.prototype.fill = function(e, t, n, r) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                            var i = e.charCodeAt(0);
                            256 > i && (e = i)
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !a.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" == typeof e && (e = 255 & e);
                    if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (t >= n) return this;
                    t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);
                    var o;
                    if ("number" == typeof e)
                        for (o = t; n > o; ++o) this[o] = e;
                    else {
                        var s = a.isBuffer(e) ? e : V(new a(e, r).toString()),
                            l = s.length;
                        for (o = 0; n - t > o; ++o) this[o + t] = s[o % l]
                    }
                    return this
                };
                var te = /[^+\/0-9A-Za-z-_]/g
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "base64-js": 31,
            ieee754: 38,
            isarray: 41
        }],
        34: [function(e, t, n) {
            function r(e) {
                function t(e) {
                    var t = c();
                    a(t, e) > -1 || (t.push(e), f(t))
                }

                function n(e) {
                    var t = c(),
                        n = a(t, e); - 1 !== n && (t.splice(n, 1), f(t))
                }

                function r(e) {
                    return a(c(), e) > -1
                }

                function s(e) {
                    return r(e) ? (n(e), !1) : (t(e), !0)
                }

                function l() {
                    return e.className
                }

                function u(e) {
                    var t = c();
                    return t[e] || null
                }

                function c() {
                    var t = e.className;
                    return i(t.split(" "), o)
                }

                function f(t) {
                    var n = t.length;
                    e.className = t.join(" "), p.length = n;
                    for (var r = 0; r < t.length; r++) p[r] = t[r];
                    delete t[n]
                }
                var d = e.classList;
                if (d) return d;
                var p = {
                    add: t,
                    remove: n,
                    contains: r,
                    toggle: s,
                    toString: l,
                    length: 0,
                    item: u
                };
                return p
            }

            function i(e, t) {
                for (var n = [], r = 0; r < e.length; r++) t(e[r]) && n.push(e[r]);
                return n
            }

            function o(e) {
                return !!e
            }
            var a = e("indexof");
            t.exports = r
        }, {
            indexof: 39
        }],
        35: [function(e, t, n) {
            function r(e, t, n, r) {
                return n = window.getComputedStyle, r = n ? n(e) : e.currentStyle, r ? r[t.replace(/-(\w)/gi, function(e, t) {
                    return t.toUpperCase()
                })] : void 0
            }
            t.exports = r
        }, {}],
        36: [function(t, n, r) {
            ! function(t, i) {
                "use strict";
                "function" == typeof e && e.amd ? e(i) : "object" == typeof r ? n.exports = i() : t.returnExports = i()
            }(this, function() {
                var e, t, n = Array,
                    r = n.prototype,
                    i = Object,
                    o = i.prototype,
                    a = Function,
                    s = a.prototype,
                    l = String,
                    u = l.prototype,
                    c = Number,
                    f = c.prototype,
                    d = r.slice,
                    p = r.splice,
                    h = r.push,
                    g = r.unshift,
                    m = r.concat,
                    v = r.join,
                    y = s.call,
                    w = s.apply,
                    b = Math.max,
                    I = Math.min,
                    C = o.toString,
                    M = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                    A = Function.prototype.toString,
                    S = /^\s*class /,
                    E = function(e) {
                        try {
                            var t = A.call(e),
                                n = t.replace(/\/\/.*\n/g, ""),
                                r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                                i = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                            return S.test(i)
                        } catch (o) {
                            return !1
                        }
                    },
                    j = function(e) {
                        try {
                            return E(e) ? !1 : (A.call(e), !0)
                        } catch (t) {
                            return !1
                        }
                    },
                    D = "[object Function]",
                    N = "[object GeneratorFunction]",
                    e = function(e) {
                        if (!e) return !1;
                        if ("function" != typeof e && "object" != typeof e) return !1;
                        if (M) return j(e);
                        if (E(e)) return !1;
                        var t = C.call(e);
                        return t === D || t === N
                    },
                    L = RegExp.prototype.exec,
                    x = function(e) {
                        try {
                            return L.call(e), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    T = "[object RegExp]";
                t = function(e) {
                    return "object" != typeof e ? !1 : M ? x(e) : C.call(e) === T
                };
                var Z, P = String.prototype.valueOf,
                    k = function(e) {
                        try {
                            return P.call(e), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    Y = "[object String]";
                Z = function(e) {
                    return "string" == typeof e ? !0 : "object" != typeof e ? !1 : M ? k(e) : C.call(e) === Y
                };
                var z = i.defineProperty && function() {
                        try {
                            var e = {};
                            i.defineProperty(e, "x", {
                                enumerable: !1,
                                value: e
                            });
                            for (var t in e) return !1;
                            return e.x === e
                        } catch (n) {
                            return !1
                        }
                    }(),
                    O = function(e) {
                        var t;
                        return t = z ? function(e, t, n, r) {
                                !r && t in e || i.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: n
                                })
                            } : function(e, t, n, r) {
                                !r && t in e || (e[t] = n)
                            },
                            function(n, r, i) {
                                for (var o in r) e.call(r, o) && t(n, o, r[o], i)
                            }
                    }(o.hasOwnProperty),
                    G = function(e) {
                        var t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    },
                    R = c.isNaN || function(e) {
                        return e !== e
                    },
                    W = {
                        ToInteger: function(e) {
                            var t = +e;
                            return R(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                        },
                        ToPrimitive: function(t) {
                            var n, r, i;
                            if (G(t)) return t;
                            if (r = t.valueOf, e(r) && (n = r.call(t), G(n))) return n;
                            if (i = t.toString, e(i) && (n = i.call(t), G(n))) return n;
                            throw new TypeError
                        },
                        ToObject: function(e) {
                            if (null == e) throw new TypeError("can't convert " + e + " to object");
                            return i(e)
                        },
                        ToUint32: function(e) {
                            return e >>> 0
                        }
                    },
                    U = function() {};
                O(s, {
                    bind: function(t) {
                        var n = this;
                        if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                        for (var r, o = d.call(arguments, 1), s = function() {
                                if (this instanceof r) {
                                    var e = w.call(n, this, m.call(o, d.call(arguments)));
                                    return i(e) === e ? e : this
                                }
                                return w.call(n, t, m.call(o, d.call(arguments)))
                            }, l = b(0, n.length - o.length), u = [], c = 0; l > c; c++) h.call(u, "$" + c);
                        return r = a("binder", "return function (" + v.call(u, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (U.prototype = n.prototype, r.prototype = new U, U.prototype = null), r
                    }
                });
                var J = y.bind(o.hasOwnProperty),
                    B = y.bind(o.toString),
                    V = y.bind(d),
                    H = w.bind(d),
                    F = y.bind(u.slice),
                    X = y.bind(u.split),
                    _ = y.bind(u.indexOf),
                    K = y.bind(h),
                    Q = y.bind(o.propertyIsEnumerable),
                    q = y.bind(r.sort),
                    $ = n.isArray || function(e) {
                        return "[object Array]" === B(e)
                    },
                    ee = 1 !== [].unshift(0);
                O(r, {
                    unshift: function() {
                        return g.apply(this, arguments), this.length
                    }
                }, ee), O(n, {
                    isArray: $
                });
                var te = i("a"),
                    ne = "a" !== te[0] || !(0 in te),
                    re = function(e) {
                        var t = !0,
                            n = !0,
                            r = !1;
                        if (e) try {
                            e.call("foo", function(e, n, r) {
                                "object" != typeof r && (t = !1)
                            }), e.call([1], function() {
                                "use strict";
                                n = "string" == typeof this
                            }, "x")
                        } catch (i) {
                            r = !0
                        }
                        return !!e && !r && t && n
                    };
                O(r, {
                    forEach: function(t) {
                        var n, r = W.ToObject(this),
                            i = ne && Z(this) ? X(this, "") : r,
                            o = -1,
                            a = W.ToUint32(i.length);
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                        for (; ++o < a;) o in i && ("undefined" == typeof n ? t(i[o], o, r) : t.call(n, i[o], o, r))
                    }
                }, !re(r.forEach)), O(r, {
                    map: function(t) {
                        var r, i = W.ToObject(this),
                            o = ne && Z(this) ? X(this, "") : i,
                            a = W.ToUint32(o.length),
                            s = n(a);
                        if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                        for (var l = 0; a > l; l++) l in o && ("undefined" == typeof r ? s[l] = t(o[l], l, i) : s[l] = t.call(r, o[l], l, i));
                        return s
                    }
                }, !re(r.map)), O(r, {
                    filter: function(t) {
                        var n, r, i = W.ToObject(this),
                            o = ne && Z(this) ? X(this, "") : i,
                            a = W.ToUint32(o.length),
                            s = [];
                        if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                        for (var l = 0; a > l; l++) l in o && (n = o[l], ("undefined" == typeof r ? t(n, l, i) : t.call(r, n, l, i)) && K(s, n));
                        return s
                    }
                }, !re(r.filter)), O(r, {
                    every: function(t) {
                        var n, r = W.ToObject(this),
                            i = ne && Z(this) ? X(this, "") : r,
                            o = W.ToUint32(i.length);
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                        for (var a = 0; o > a; a++)
                            if (a in i && !("undefined" == typeof n ? t(i[a], a, r) : t.call(n, i[a], a, r))) return !1;
                        return !0
                    }
                }, !re(r.every)), O(r, {
                    some: function(t) {
                        var n, r = W.ToObject(this),
                            i = ne && Z(this) ? X(this, "") : r,
                            o = W.ToUint32(i.length);
                        if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                        for (var a = 0; o > a; a++)
                            if (a in i && ("undefined" == typeof n ? t(i[a], a, r) : t.call(n, i[a], a, r))) return !0;
                        return !1
                    }
                }, !re(r.some));
                var ie = !1;
                r.reduce && (ie = "object" == typeof r.reduce.call("es5", function(e, t, n, r) {
                    return r
                })), O(r, {
                    reduce: function(t) {
                        var n = W.ToObject(this),
                            r = ne && Z(this) ? X(this, "") : n,
                            i = W.ToUint32(r.length);
                        if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                        if (0 === i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                        var o, a = 0;
                        if (arguments.length >= 2) o = arguments[1];
                        else
                            for (;;) {
                                if (a in r) {
                                    o = r[a++];
                                    break
                                }
                                if (++a >= i) throw new TypeError("reduce of empty array with no initial value")
                            }
                        for (; i > a; a++) a in r && (o = t(o, r[a], a, n));
                        return o
                    }
                }, !ie);
                var oe = !1;
                r.reduceRight && (oe = "object" == typeof r.reduceRight.call("es5", function(e, t, n, r) {
                    return r
                })), O(r, {
                    reduceRight: function(t) {
                        var n = W.ToObject(this),
                            r = ne && Z(this) ? X(this, "") : n,
                            i = W.ToUint32(r.length);
                        if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                        if (0 === i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                        var o, a = i - 1;
                        if (arguments.length >= 2) o = arguments[1];
                        else
                            for (;;) {
                                if (a in r) {
                                    o = r[a--];
                                    break
                                }
                                if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                            }
                        if (0 > a) return o;
                        do a in r && (o = t(o, r[a], a, n)); while (a--);
                        return o
                    }
                }, !oe);
                var ae = r.indexOf && -1 !== [0, 1].indexOf(1, 2);
                O(r, {
                    indexOf: function(e) {
                        var t = ne && Z(this) ? X(this, "") : W.ToObject(this),
                            n = W.ToUint32(t.length);
                        if (0 === n) return -1;
                        var r = 0;
                        for (arguments.length > 1 && (r = W.ToInteger(arguments[1])), r = r >= 0 ? r : b(0, n + r); n > r; r++)
                            if (r in t && t[r] === e) return r;
                        return -1
                    }
                }, ae);
                var se = r.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
                O(r, {
                    lastIndexOf: function(e) {
                        var t = ne && Z(this) ? X(this, "") : W.ToObject(this),
                            n = W.ToUint32(t.length);
                        if (0 === n) return -1;
                        var r = n - 1;
                        for (arguments.length > 1 && (r = I(r, W.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
                            if (r in t && e === t[r]) return r;
                        return -1
                    }
                }, se);
                var le = function() {
                    var e = [1, 2],
                        t = e.splice();
                    return 2 === e.length && $(t) && 0 === t.length
                }();
                O(r, {
                    splice: function(e, t) {
                        return 0 === arguments.length ? [] : p.apply(this, arguments)
                    }
                }, !le);
                var ue = function() {
                    var e = {};
                    return r.splice.call(e, 0, 0, 1), 1 === e.length
                }();
                O(r, {
                    splice: function(e, t) {
                        if (0 === arguments.length) return [];
                        var n = arguments;
                        return this.length = b(W.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = V(arguments), n.length < 2 ? K(n, this.length - e) : n[1] = W.ToInteger(t)), p.apply(this, n)
                    }
                }, !ue);
                var ce = function() {
                        var e = new n(1e5);
                        return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
                    }(),
                    fe = function() {
                        var e = 256,
                            t = [];
                        return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
                    }();
                O(r, {
                    splice: function(e, t) {
                        for (var n, r = W.ToObject(this), i = [], o = W.ToUint32(r.length), a = W.ToInteger(e), s = 0 > a ? b(o + a, 0) : I(a, o), u = I(b(W.ToInteger(t), 0), o - s), c = 0; u > c;) n = l(s + c), J(r, n) && (i[c] = r[n]), c += 1;
                        var f, d = V(arguments, 2),
                            p = d.length;
                        if (u > p) {
                            c = s;
                            for (var h = o - u; h > c;) n = l(c + u), f = l(c + p), J(r, n) ? r[f] = r[n] : delete r[f], c += 1;
                            c = o;
                            for (var g = o - u + p; c > g;) delete r[c - 1], c -= 1
                        } else if (p > u)
                            for (c = o - u; c > s;) n = l(c + u - 1), f = l(c + p - 1), J(r, n) ? r[f] = r[n] : delete r[f], c -= 1;
                        c = s;
                        for (var m = 0; m < d.length; ++m) r[c] = d[m], c += 1;
                        return r.length = o - u + p, i
                    }
                }, !ce || !fe);
                var de, pe = r.join;
                try {
                    de = "1,2,3" !== Array.prototype.join.call("123", ",")
                } catch (he) {
                    de = !0
                }
                de && O(r, {
                    join: function(e) {
                        var t = "undefined" == typeof e ? "," : e;
                        return pe.call(Z(this) ? X(this, "") : this, t)
                    }
                }, de);
                var ge = "1,2" !== [1, 2].join(void 0);
                ge && O(r, {
                    join: function(e) {
                        var t = "undefined" == typeof e ? "," : e;
                        return pe.call(this, t)
                    }
                }, ge);
                var me = function(e) {
                        for (var t = W.ToObject(this), n = W.ToUint32(t.length), r = 0; r < arguments.length;) t[n + r] = arguments[r], r += 1;
                        return t.length = n + r, n + r
                    },
                    ve = function() {
                        var e = {},
                            t = Array.prototype.push.call(e, void 0);
                        return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !J(e, 0)
                    }();
                O(r, {
                    push: function(e) {
                        return $(this) ? h.apply(this, arguments) : me.apply(this, arguments)
                    }
                }, ve);
                var ye = function() {
                    var e = [],
                        t = e.push(void 0);
                    return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !J(e, 0)
                }();
                O(r, {
                    push: me
                }, ye), O(r, {
                    slice: function(e, t) {
                        var n = Z(this) ? X(this, "") : this;
                        return H(n, arguments)
                    }
                }, ne);
                var we = function() {
                        try {
                            return [1, 2].sort(null), [1, 2].sort({}), !0
                        } catch (e) {}
                        return !1
                    }(),
                    be = function() {
                        try {
                            return [1, 2].sort(/a/), !1
                        } catch (e) {}
                        return !0
                    }(),
                    Ie = function() {
                        try {
                            return [1, 2].sort(void 0), !0
                        } catch (e) {}
                        return !1
                    }();
                O(r, {
                    sort: function(t) {
                        if ("undefined" == typeof t) return q(this);
                        if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                        return q(this, t)
                    }
                }, we || !Ie || !be);
                var Ce = !Q({
                        toString: null
                    }, "toString"),
                    Me = Q(function() {}, "prototype"),
                    Ae = !J("x", "0"),
                    Se = function(e) {
                        var t = e.constructor;
                        return t && t.prototype === e
                    },
                    Ee = {
                        $window: !0,
                        $console: !0,
                        $parent: !0,
                        $self: !0,
                        $frame: !0,
                        $frames: !0,
                        $frameElement: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $external: !0
                    },
                    je = function() {
                        if ("undefined" == typeof window) return !1;
                        for (var e in window) try {
                            !Ee["$" + e] && J(window, e) && null !== window[e] && "object" == typeof window[e] && Se(window[e])
                        } catch (t) {
                            return !0
                        }
                        return !1
                    }(),
                    De = function(e) {
                        if ("undefined" == typeof window || !je) return Se(e);
                        try {
                            return Se(e)
                        } catch (t) {
                            return !1
                        }
                    },
                    Ne = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    Le = Ne.length,
                    xe = function(e) {
                        return "[object Arguments]" === B(e)
                    },
                    Te = function(t) {
                        return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !$(t) && e(t.callee)
                    },
                    Ze = xe(arguments) ? xe : Te;
                O(i, {
                    keys: function(t) {
                        var n = e(t),
                            r = Ze(t),
                            i = null !== t && "object" == typeof t,
                            o = i && Z(t);
                        if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
                        var a = [],
                            s = Me && n;
                        if (o && Ae || r)
                            for (var u = 0; u < t.length; ++u) K(a, l(u));
                        if (!r)
                            for (var c in t) s && "prototype" === c || !J(t, c) || K(a, l(c));
                        if (Ce)
                            for (var f = De(t), d = 0; Le > d; d++) {
                                var p = Ne[d];
                                f && "constructor" === p || !J(t, p) || K(a, p)
                            }
                        return a
                    }
                });
                var Pe = i.keys && function() {
                        return 2 === i.keys(arguments).length
                    }(1, 2),
                    ke = i.keys && function() {
                        var e = i.keys(arguments);
                        return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                    }(1),
                    Ye = i.keys;
                O(i, {
                    keys: function(e) {
                        return Ye(Ze(e) ? V(e) : e)
                    }
                }, !Pe || ke);
                var ze, Oe, Ge = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                    Re = new Date(-0x55d318d56a724),
                    We = new Date(14496624e5),
                    Ue = "Mon, 01 Jan -45875 11:59:59 GMT" !== Re.toUTCString(),
                    Je = Re.getTimezoneOffset(); - 720 > Je ? (ze = "Tue Jan 02 -45875" !== Re.toDateString(), Oe = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(We.toString())) : (ze = "Mon Jan 01 -45875" !== Re.toDateString(), Oe = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(We.toString()));
                var Be = y.bind(Date.prototype.getFullYear),
                    Ve = y.bind(Date.prototype.getMonth),
                    He = y.bind(Date.prototype.getDate),
                    Fe = y.bind(Date.prototype.getUTCFullYear),
                    Xe = y.bind(Date.prototype.getUTCMonth),
                    _e = y.bind(Date.prototype.getUTCDate),
                    Ke = y.bind(Date.prototype.getUTCDay),
                    Qe = y.bind(Date.prototype.getUTCHours),
                    qe = y.bind(Date.prototype.getUTCMinutes),
                    $e = y.bind(Date.prototype.getUTCSeconds),
                    et = y.bind(Date.prototype.getUTCMilliseconds),
                    tt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    nt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    rt = function(e, t) {
                        return He(new Date(t, e, 0))
                    };
                O(Date.prototype, {
                    getFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Be(this);
                        return 0 > e && Ve(this) > 11 ? e + 1 : e
                    },
                    getMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Be(this),
                            t = Ve(this);
                        return 0 > e && t > 11 ? 0 : t
                    },
                    getDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Be(this),
                            t = Ve(this),
                            n = He(this);
                        if (0 > e && t > 11) {
                            if (12 === t) return n;
                            var r = rt(0, e + 1);
                            return r - n + 1
                        }
                        return n
                    },
                    getUTCFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Fe(this);
                        return 0 > e && Xe(this) > 11 ? e + 1 : e
                    },
                    getUTCMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Fe(this),
                            t = Xe(this);
                        return 0 > e && t > 11 ? 0 : t
                    },
                    getUTCDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Fe(this),
                            t = Xe(this),
                            n = _e(this);
                        if (0 > e && t > 11) {
                            if (12 === t) return n;
                            var r = rt(0, e + 1);
                            return r - n + 1
                        }
                        return n
                    }
                }, Ge), O(Date.prototype, {
                    toUTCString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ke(this),
                            t = _e(this),
                            n = Xe(this),
                            r = Fe(this),
                            i = Qe(this),
                            o = qe(this),
                            a = $e(this);
                        return tt[e] + ", " + (10 > t ? "0" + t : t) + " " + nt[n] + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > a ? "0" + a : a) + " GMT"
                    }
                }, Ge || Ue), O(Date.prototype, {
                    toDateString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = this.getDay(),
                            t = this.getDate(),
                            n = this.getMonth(),
                            r = this.getFullYear();
                        return tt[e] + " " + nt[n] + " " + (10 > t ? "0" + t : t) + " " + r
                    }
                }, Ge || ze), (Ge || Oe) && (Date.prototype.toString = function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = this.getDay(),
                        t = this.getDate(),
                        n = this.getMonth(),
                        r = this.getFullYear(),
                        i = this.getHours(),
                        o = this.getMinutes(),
                        a = this.getSeconds(),
                        s = this.getTimezoneOffset(),
                        l = Math.floor(Math.abs(s) / 60),
                        u = Math.floor(Math.abs(s) % 60);
                    return tt[e] + " " + nt[n] + " " + (10 > t ? "0" + t : t) + " " + r + " " + (10 > i ? "0" + i : i) + ":" + (10 > o ? "0" + o : o) + ":" + (10 > a ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (10 > l ? "0" + l : l) + (10 > u ? "0" + u : u)
                }, z && i.defineProperty(Date.prototype, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }));
                var it = -621987552e5,
                    ot = "-000001",
                    at = Date.prototype.toISOString && -1 === new Date(it).toISOString().indexOf(ot),
                    st = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                    lt = y.bind(Date.prototype.getTime);
                O(Date.prototype, {
                    toISOString: function() {
                        if (!isFinite(this) || !isFinite(lt(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                        var e = Fe(this),
                            t = Xe(this);
                        e += Math.floor(t / 12), t = (t % 12 + 12) % 12;
                        var n = [t + 1, _e(this), Qe(this), qe(this), $e(this)];
                        e = (0 > e ? "-" : e > 9999 ? "+" : "") + F("00000" + Math.abs(e), e >= 0 && 9999 >= e ? -4 : -6);
                        for (var r = 0; r < n.length; ++r) n[r] = F("00" + n[r], -2);
                        return e + "-" + V(n, 0, 2).join("-") + "T" + V(n, 2).join(":") + "." + F("000" + et(this), -3) + "Z"
                    }
                }, at || st);
                var ut = function() {
                    try {
                        return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(it).toJSON().indexOf(ot) && Date.prototype.toJSON.call({
                            toISOString: function() {
                                return !0
                            }
                        })
                    } catch (e) {
                        return !1
                    }
                }();
                ut || (Date.prototype.toJSON = function(t) {
                    var n = i(this),
                        r = W.ToPrimitive(n);
                    if ("number" == typeof r && !isFinite(r)) return null;
                    var o = n.toISOString;
                    if (!e(o)) throw new TypeError("toISOString property is not callable");
                    return o.call(n)
                });
                var ct = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                    ft = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                    dt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
                if (dt || ft || !ct) {
                    var pt = Math.pow(2, 31) - 1,
                        ht = R(new Date(1970, 0, 1, 0, 0, 0, pt + 1).getTime());
                    Date = function(e) {
                        var t = function(n, r, i, o, a, s, u) {
                                var c, f = arguments.length;
                                if (this instanceof e) {
                                    var d = s,
                                        p = u;
                                    if (ht && f >= 7 && u > pt) {
                                        var h = Math.floor(u / pt) * pt,
                                            g = Math.floor(h / 1e3);
                                        d += g, p -= 1e3 * g
                                    }
                                    c = 1 === f && l(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, i, o, a, d, p) : f >= 6 ? new e(n, r, i, o, a, d) : f >= 5 ? new e(n, r, i, o, a) : f >= 4 ? new e(n, r, i, o) : f >= 3 ? new e(n, r, i) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                                } else c = e.apply(this, arguments);
                                return G(c) || O(c, {
                                    constructor: t
                                }, !0), c
                            },
                            n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                            r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                            i = function(e, t) {
                                var n = t > 1 ? 1 : 0;
                                return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                            },
                            o = function(t) {
                                var n = 0,
                                    r = t;
                                if (ht && r > pt) {
                                    var i = Math.floor(r / pt) * pt,
                                        o = Math.floor(i / 1e3);
                                    n += o, r -= 1e3 * o
                                }
                                return c(new e(1970, 0, 1, 0, 0, n, r))
                            };
                        for (var a in e) J(e, a) && (t[a] = e[a]);
                        O(t, {
                            now: e.now,
                            UTC: e.UTC
                        }, !0), t.prototype = e.prototype, O(t.prototype, {
                            constructor: t
                        }, !0);
                        var s = function(t) {
                            var r = n.exec(t);
                            if (r) {
                                var a, s = c(r[1]),
                                    l = c(r[2] || 1) - 1,
                                    u = c(r[3] || 1) - 1,
                                    f = c(r[4] || 0),
                                    d = c(r[5] || 0),
                                    p = c(r[6] || 0),
                                    h = Math.floor(1e3 * c(r[7] || 0)),
                                    g = Boolean(r[4] && !r[8]),
                                    m = "-" === r[9] ? 1 : -1,
                                    v = c(r[10] || 0),
                                    y = c(r[11] || 0),
                                    w = d > 0 || p > 0 || h > 0;
                                return (w ? 24 : 25) > f && 60 > d && 60 > p && 1e3 > h && l > -1 && 12 > l && 24 > v && 60 > y && u > -1 && u < i(s, l + 1) - i(s, l) && (a = 60 * (24 * (i(s, l) + u) + f + v * m), a = 1e3 * (60 * (a + d + y * m) + p) + h, g && (a = o(a)), a >= -864e13 && 864e13 >= a) ? a : NaN
                            }
                            return e.parse.apply(this, arguments)
                        };
                        return O(t, {
                            parse: s
                        }), t
                    }(Date)
                }
                Date.now || (Date.now = function() {
                    return (new Date).getTime()
                });
                var gt = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)),
                    mt = {
                        base: 1e7,
                        size: 6,
                        data: [0, 0, 0, 0, 0, 0],
                        multiply: function(e, t) {
                            for (var n = -1, r = t; ++n < mt.size;) r += e * mt.data[n], mt.data[n] = r % mt.base, r = Math.floor(r / mt.base)
                        },
                        divide: function(e) {
                            for (var t = mt.size, n = 0; --t >= 0;) n += mt.data[t], mt.data[t] = Math.floor(n / e), n = n % e * mt.base
                        },
                        numToString: function() {
                            for (var e = mt.size, t = ""; --e >= 0;)
                                if ("" !== t || 0 === e || 0 !== mt.data[e]) {
                                    var n = l(mt.data[e]);
                                    "" === t ? t = n : t += F("0000000", 0, 7 - n.length) + n
                                } return t
                        },
                        pow: function Yt(e, t, n) {
                            return 0 === t ? n : t % 2 === 1 ? Yt(e, t - 1, n * e) : Yt(e * e, t / 2, n)
                        },
                        log: function(e) {
                            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                            for (; n >= 2;) t += 1, n /= 2;
                            return t
                        }
                    },
                    vt = function(e) {
                        var t, n, r, i, o, a, s, u;
                        if (t = c(e), t = R(t) ? 0 : Math.floor(t), 0 > t || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                        if (n = c(this), R(n)) return "NaN";
                        if (-1e21 >= n || n >= 1e21) return l(n);
                        if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21)
                            if (o = mt.log(n * mt.pow(2, 69, 1)) - 69, a = 0 > o ? n * mt.pow(2, -o, 1) : n / mt.pow(2, o, 1), a *= 4503599627370496, o = 52 - o, o > 0) {
                                for (mt.multiply(0, a), s = t; s >= 7;) mt.multiply(1e7, 0), s -= 7;
                                for (mt.multiply(mt.pow(10, s, 1), 0), s = o - 1; s >= 23;) mt.divide(1 << 23), s -= 23;
                                mt.divide(1 << s), mt.multiply(1, 1), mt.divide(2), i = mt.numToString()
                            } else mt.multiply(0, a), mt.multiply(1 << -o, 0), i = mt.numToString() + F("0.00000000000000000000", 2, 2 + t);
                        return t > 0 ? (u = i.length, i = t >= u ? r + F("0.0000000000000000000", 0, t - u + 2) + i : r + F(i, 0, u - t) + "." + F(i, u - t)) : i = r + i, i
                    };
                O(f, {
                    toFixed: vt
                }, gt);
                var yt = function() {
                        try {
                            return "1" === 1..toPrecision(void 0)
                        } catch (e) {
                            return !0
                        }
                    }(),
                    wt = f.toPrecision;
                O(f, {
                    toPrecision: function(e) {
                        return "undefined" == typeof e ? wt.call(this) : wt.call(this, e)
                    }
                }, yt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
                    var e = "undefined" == typeof /()??/.exec("")[1],
                        n = Math.pow(2, 32) - 1;
                    u.split = function(r, i) {
                        var o = String(this);
                        if ("undefined" == typeof r && 0 === i) return [];
                        if (!t(r)) return X(this, r, i);
                        var a, s, l, u, c = [],
                            f = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (r.sticky ? "y" : ""),
                            d = 0,
                            p = new RegExp(r.source, f + "g");
                        e || (a = new RegExp("^" + p.source + "$(?!\\s)", f));
                        var g = "undefined" == typeof i ? n : W.ToUint32(i);
                        for (s = p.exec(o); s && (l = s.index + s[0].length, !(l > d && (K(c, F(o, d, s.index)), !e && s.length > 1 && s[0].replace(a, function() {
                                for (var e = 1; e < arguments.length - 2; e++) "undefined" == typeof arguments[e] && (s[e] = void 0)
                            }), s.length > 1 && s.index < o.length && h.apply(c, V(s, 1)), u = s[0].length, d = l, c.length >= g)));) p.lastIndex === s.index && p.lastIndex++, s = p.exec(o);
                        return d === o.length ? (u || !p.test("")) && K(c, "") : K(c, F(o, d)), c.length > g ? V(c, 0, g) : c
                    }
                }() : "0".split(void 0, 0).length && (u.split = function(e, t) {
                    return "undefined" == typeof e && 0 === t ? [] : X(this, e, t)
                });
                var bt = u.replace,
                    It = function() {
                        var e = [];
                        return "x".replace(/x(.)?/g, function(t, n) {
                            K(e, n)
                        }), 1 === e.length && "undefined" == typeof e[0]
                    }();
                It || (u.replace = function(n, r) {
                    var i = e(r),
                        o = t(n) && /\)[*?]/.test(n.source);
                    if (i && o) {
                        var a = function(e) {
                            var t = arguments.length,
                                i = n.lastIndex;
                            n.lastIndex = 0;
                            var o = n.exec(e) || [];
                            return n.lastIndex = i, K(o, arguments[t - 2], arguments[t - 1]), r.apply(this, o)
                        };
                        return bt.call(this, n, a)
                    }
                    return bt.call(this, n, r)
                });
                var Ct = u.substr,
                    Mt = "".substr && "b" !== "0b".substr(-1);
                O(u, {
                    substr: function(e, t) {
                        var n = e;
                        return 0 > e && (n = b(this.length + e, 0)), Ct.call(this, n, t)
                    }
                }, Mt);
                var At = "	\n\f\r   ᠎             　\u2028\u2029\ufeff",
                    St = "​",
                    Et = "[" + At + "]",
                    jt = new RegExp("^" + Et + Et + "*"),
                    Dt = new RegExp(Et + Et + "*$"),
                    Nt = u.trim && (At.trim() || !St.trim());
                O(u, {
                    trim: function() {
                        if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                        return l(this).replace(jt, "").replace(Dt, "")
                    }
                }, Nt);
                var Lt = y.bind(String.prototype.trim),
                    xt = u.lastIndexOf && -1 !== "abcあい".lastIndexOf("あい", 2);
                O(u, {
                    lastIndexOf: function(e) {
                        if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                        for (var t = l(this), n = l(e), r = arguments.length > 1 ? c(arguments[1]) : NaN, i = R(r) ? 1 / 0 : W.ToInteger(r), o = I(b(i, 0), t.length), a = n.length, s = o + a; s > 0;) {
                            s = b(0, s - a);
                            var u = _(F(t, s, o + a), n);
                            if (-1 !== u) return s + u
                        }
                        return -1
                    }
                }, xt);
                var Tt = u.lastIndexOf;
                if (O(u, {
                        lastIndexOf: function(e) {
                            return Tt.apply(this, arguments)
                        }
                    }, 1 !== u.lastIndexOf.length), (8 !== parseInt(At + "08") || 22 !== parseInt(At + "0x16")) && (parseInt = function(e) {
                        var t = /^[\-+]?0[xX]/;
                        return function(n, r) {
                            var i = Lt(String(n)),
                                o = c(r) || (t.test(i) ? 16 : 10);
                            return e(i, o)
                        }
                    }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(e) {
                        return function(t) {
                            var n = Lt(String(t)),
                                r = e(n);
                            return 0 === r && "-" === F(n, 0, 1) ? -0 : r
                        }
                    }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                    var Zt = function() {
                        if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                        var e = this.name;
                        "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = l(e));
                        var t = this.message;
                        return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = l(t)), e ? t ? e + ": " + t : e : t
                    };
                    Error.prototype.toString = Zt
                }
                if (z) {
                    var Pt = function(e, t) {
                        if (Q(e, t)) {
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                        }
                    };
                    Pt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Pt(Error.prototype, "name")
                }
                if ("/a/gim" !== String(/a/gim)) {
                    var kt = function() {
                        var e = "/" + this.source + "/";
                        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
                    };
                    RegExp.prototype.toString = kt
                }
            })
        }, {}],
        37: [function(e, t, n) {
            var r = [],
                i = r.forEach,
                o = r.slice;
            t.exports = function(e) {
                return i.call(o.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }
        }, {}],
        38: [function(e, t, n) {
            n.read = function(e, t, n, r, i) {
                var o, a, s = 8 * i - r - 1,
                    l = (1 << s) - 1,
                    u = l >> 1,
                    c = -7,
                    f = n ? i - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, o = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
                for (a = o & (1 << -c) - 1, o >>= -c, c += r; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === l) return a ? NaN : (p ? -1 : 1) * (1 / 0);
                    a += Math.pow(2, r), o -= u
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - r)
            }, n.write = function(e, t, n, r, i, o) {
                var a, s, l, u = 8 * o - i - 1,
                    c = (1 << u) - 1,
                    f = c >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : o - 1,
                    h = r ? 1 : -1,
                    g = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f), t * l >= 2 && (a++, l /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + p] = 255 & s, p += h, s /= 256, i -= 8);
                for (a = a << i | s, u += i; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
                e[n + p - h] |= 128 * g
            }
        }, {}],
        39: [function(e, t, n) {
            var r = [].indexOf;
            t.exports = function(e, t) {
                if (r) return e.indexOf(t);
                for (var n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return -1
            }
        }, {}],
        40: [function(e, t, n) {
            function r(e) {
                var t = i.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            }
            t.exports = r;
            var i = Object.prototype.toString
        }, {}],
        41: [function(e, t, n) {
            var r = {}.toString;
            t.exports = Array.isArray || function(e) {
                return "[object Array]" == r.call(e)
            }
        }, {}],
        42: [function(t, n, r) {
            (function(t) {
                ! function(i) {
                    function o(e) {
                        throw new RangeError(P[e])
                    }

                    function a(e, t) {
                        for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                        return r
                    }

                    function s(e, t) {
                        var n = e.split("@"),
                            r = "";
                        n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(Z, ".");
                        var i = e.split("."),
                            o = a(i, t).join(".");
                        return r + o
                    }

                    function l(e) {
                        for (var t, n, r = [], i = 0, o = e.length; o > i;) t = e.charCodeAt(i++), t >= 55296 && 56319 >= t && o > i ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                        return r
                    }

                    function u(e) {
                        return a(e, function(e) {
                            var t = "";
                            return e > 65535 && (e -= 65536, t += z(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += z(e)
                        }).join("")
                    }

                    function c(e) {
                        return 10 > e - 48 ? e - 22 : 26 > e - 65 ? e - 65 : 26 > e - 97 ? e - 97 : M
                    }

                    function f(e, t) {
                        return e + 22 + 75 * (26 > e) - ((0 != t) << 5)
                    }

                    function d(e, t, n) {
                        var r = 0;
                        for (e = n ? Y(e / j) : e >> 1, e += Y(e / t); e > k * S >> 1; r += M) e = Y(e / k);
                        return Y(r + (k + 1) * e / (e + E))
                    }

                    function p(e) {
                        var t, n, r, i, a, s, l, f, p, h, g = [],
                            m = e.length,
                            v = 0,
                            y = N,
                            w = D;
                        for (n = e.lastIndexOf(L), 0 > n && (n = 0), r = 0; n > r; ++r) e.charCodeAt(r) >= 128 && o("not-basic"), g.push(e.charCodeAt(r));
                        for (i = n > 0 ? n + 1 : 0; m > i;) {
                            for (a = v, s = 1, l = M; i >= m && o("invalid-input"), f = c(e.charCodeAt(i++)), (f >= M || f > Y((C - v) / s)) && o("overflow"), v += f * s, p = w >= l ? A : l >= w + S ? S : l - w, !(p > f); l += M) h = M - p, s > Y(C / h) && o("overflow"), s *= h;
                            t = g.length + 1, w = d(v - a, t, 0 == a), Y(v / t) > C - y && o("overflow"), y += Y(v / t), v %= t, g.splice(v++, 0, y)
                        }
                        return u(g)
                    }

                    function h(e) {
                        var t, n, r, i, a, s, u, c, p, h, g, m, v, y, w, b = [];
                        for (e = l(e), m = e.length, t = N, n = 0, a = D, s = 0; m > s; ++s) g = e[s], 128 > g && b.push(z(g));
                        for (r = i = b.length, i && b.push(L); m > r;) {
                            for (u = C, s = 0; m > s; ++s) g = e[s], g >= t && u > g && (u = g);
                            for (v = r + 1, u - t > Y((C - n) / v) && o("overflow"), n += (u - t) * v, t = u, s = 0; m > s; ++s)
                                if (g = e[s], t > g && ++n > C && o("overflow"), g == t) {
                                    for (c = n, p = M; h = a >= p ? A : p >= a + S ? S : p - a, !(h > c); p += M) w = c - h, y = M - h, b.push(z(f(h + w % y, 0))), c = Y(w / y);
                                    b.push(z(f(c, 0))), a = d(n, v, r == i), n = 0, ++r
                                }++ n, ++t
                        }
                        return b.join("")
                    }

                    function g(e) {
                        return s(e, function(e) {
                            return x.test(e) ? p(e.slice(4).toLowerCase()) : e
                        })
                    }

                    function m(e) {
                        return s(e, function(e) {
                            return T.test(e) ? "xn--" + h(e) : e
                        })
                    }
                    var v = "object" == typeof r && r && !r.nodeType && r,
                        y = "object" == typeof n && n && !n.nodeType && n,
                        w = "object" == typeof t && t;
                    (w.global === w || w.window === w || w.self === w) && (i = w);
                    var b, I, C = 2147483647,
                        M = 36,
                        A = 1,
                        S = 26,
                        E = 38,
                        j = 700,
                        D = 72,
                        N = 128,
                        L = "-",
                        x = /^xn--/,
                        T = /[^\x20-\x7E]/,
                        Z = /[\x2E\u3002\uFF0E\uFF61]/g,
                        P = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        k = M - A,
                        Y = Math.floor,
                        z = String.fromCharCode;
                    if (b = {
                            version: "1.4.1",
                            ucs2: {
                                decode: l,
                                encode: u
                            },
                            decode: p,
                            encode: h,
                            toASCII: m,
                            toUnicode: g
                        }, "function" == typeof e && "object" == typeof e.amd && e.amd) e("punycode", function() {
                        return b
                    });
                    else if (v && y)
                        if (n.exports == v) y.exports = b;
                        else
                            for (I in b) b.hasOwnProperty(I) && (v[I] = b[I]);
                    else i.punycode = b
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        43: [function(t, n, r) {
            ! function(t, r) {
                "undefined" != typeof n && n.exports ? n.exports = r() : "function" == typeof e && e.amd ? e(r) : this[t] = r()
            }("$script", function() {
                function e(e, t) {
                    for (var n = 0, r = e.length; r > n; ++n)
                        if (!t(e[n])) return l;
                    return 1
                }

                function t(t, n) {
                    e(t, function(e) {
                        return !n(e)
                    })
                }

                function n(o, a, s) {
                    function l(e) {
                        return e.call ? e() : d[e]
                    }

                    function c() {
                        if (!--y) {
                            d[v] = 1, m && m();
                            for (var n in h) e(n.split("|"), l) && !t(h[n], l) && (h[n] = [])
                        }
                    }
                    o = o[u] ? o : [o];
                    var f = a && a.call,
                        m = f ? a : s,
                        v = f ? o.join("") : a,
                        y = o.length;
                    return setTimeout(function() {
                        t(o, function e(t, n) {
                            return null === t ? c() : (n || /^https?:\/\//.test(t) || !i || (t = -1 === t.indexOf(".js") ? i + t + ".js" : i + t), g[t] ? (v && (p[v] = 1), 2 == g[t] ? c() : setTimeout(function() {
                                e(t, !0)
                            }, 0)) : (g[t] = 1, v && (p[v] = 1), void r(t, c)))
                        })
                    }, 0), n
                }

                function r(e, t) {
                    var n, r = a.createElement("script");
                    r.onload = r.onerror = r[f] = function() {
                        r[c] && !/^c|loade/.test(r[c]) || n || (r.onload = r[f] = null, n = 1, g[e] = 2, t())
                    }, r.async = 1, r.src = o ? e + (-1 === e.indexOf("?") ? "?" : "&") + o : e, s.insertBefore(r, s.lastChild)
                }
                var i, o, a = document,
                    s = a.getElementsByTagName("head")[0],
                    l = !1,
                    u = "push",
                    c = "readyState",
                    f = "onreadystatechange",
                    d = {},
                    p = {},
                    h = {},
                    g = {};
                return n.get = r, n.order = function(e, t, r) {
                    ! function i(o) {
                        o = e.shift(), e.length ? n(o, i) : n(o, t, r)
                    }()
                }, n.path = function(e) {
                    i = e
                }, n.urlArgs = function(e) {
                    o = e
                }, n.ready = function(r, i, o) {
                    r = r[u] ? r : [r];
                    var a = [];
                    return !t(r, function(e) {
                        d[e] || a[u](e)
                    }) && e(r, function(e) {
                        return d[e]
                    }) ? i() : ! function(e) {
                        h[e] = h[e] || [], h[e][u](i), o && o(a)
                    }(r.join("|")), n
                }, n.done = function(e) {
                    n([null], e)
                }, n
            })
        }, {}]
    }, {}, [30])(30)
});