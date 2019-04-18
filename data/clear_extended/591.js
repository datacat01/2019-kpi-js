var naver_adbd = naver_adbd || {};
naver_adbd.Manager = function() {
    function a(a, b) {
        var c, d, e = b,
            f = document;
        if (d = f.createElement(a), e)
            for (c in e) e.hasOwnProperty(c) && d.setAttribute(c, e[c]);
        return d
    }

    function b() {
        var a = "offset",
            b = "client",
            c = this;
        c.blockedDOMInfo = {};
        var d = {
            nullProps: [a + "Parent"],
            zeroProps: []
        };
        d.zeroProps = [a + "Height", a + "Width", b + "Height", b + "Width"], this.init = function(a) {}, this.validateNode = function(a) {
            var b, e = (document.body, !1),
                f = !1,
                g = function(a) {
                    return "da_iframe_time" !== a.id && 0 === a.childNodes.length
                },
                h = g(a),
                i = function(a, b) {
                    for (; a && 1 === a.nodeType && !e;) b(a), a = a.parentNode
                },
                j = function(a, b) {
                    for (; a && 1 === a.nodeType && f !== !0;) b(a.parentNode), a = a.parentNode
                };
            for (b = 0; b < d.nullProps.length && h !== !0; b++) {
                if (null == a[d.nullProps[b]]) {
                    if (e = !0, void 0 !== window.getComputedStyle) {
                        var k = window.getComputedStyle(a, null);
                        c.blockedDOMInfo.props = "nullProps", c.blockedDOMInfo.nodeName = a.nodeName.trim() || "", c.blockedDOMInfo.className = a.className.trim() || "", c.blockedDOMInfo.id = a.id.trim() || "", c.blockedDOMInfo.style = "none" === k.getPropertyValue("display").toLowerCase() ? k.getPropertyValue("display").toLowerCase() : k.getPropertyValue("visibility").toLowerCase() || "", c.blockedDOMInfo.parent = "visible", j(a, function(a) {
                            var b = window.getComputedStyle(a, null);
                            "none" === b.getPropertyValue("display").toLowerCase() && (f = !0, c.blockedDOMInfo.parent = "none")
                        })
                    }
                    break
                }
                if (e === !0) break
            }
            for (b = 0; b < d.zeroProps.length && h !== !0 && e !== !0; b++)
                if (0 === a[d.zeroProps[b]] && (e = !0, void 0 !== window.getComputedStyle)) {
                    var k = window.getComputedStyle(a, null);
                    c.blockedDOMInfo.props = "zeroProps", c.blockedDOMInfo.nodeName = a.nodeName.trim() || "", c.blockedDOMInfo.className = a.className.trim() || "", c.blockedDOMInfo.id = a.id.trim() || "", c.blockedDOMInfo.style = "none" === k.getPropertyValue("display").toLowerCase() ? k.getPropertyValue("display").toLowerCase() : k.getPropertyValue("visibility").toLowerCase() || "", c.blockedDOMInfo.parent = "visible", j(a, function(a) {
                        var b = window.getComputedStyle(a, null);
                        "none" === b.getPropertyValue("display").toLowerCase() && (f = !0, c.blockedDOMInfo.parent = "none")
                    })
                } return i(a, function(a) {
                if (void 0 !== window.getComputedStyle) {
                    var b = window.getComputedStyle(a, null);
                    "none" !== b.getPropertyValue("display") && "hidden" !== b.getPropertyValue("visibility") || (e = !0, c.blockedDOMInfo.props = "display,visibility", c.blockedDOMInfo.nodeName = a.nodeName.trim() || "", c.blockedDOMInfo.className = a.className.trim() || "", c.blockedDOMInfo.id = a.id.trim() || "", c.blockedDOMInfo.style = "none" === b.getPropertyValue("display").toLowerCase() ? b.getPropertyValue("display").toLowerCase() : b.getPropertyValue("visibility").toLowerCase() || "")
                }
            }), {
                result: e,
                domInfo: c.blockedDOMInfo
            }
        }
    }

    function c(a) {
        var b, c = "offset",
            d = "client",
            e = {
                nullProps: [c + "Parent"],
                zeroProps: [c + "Height", c + "Width", d + "Height", d + "Width"]
            },
            f = document.body,
            g = !1;
        for (null !== f.getAttribute("abp") && (g = !0), b = 0; b < e.nullProps.length; b++) {
            if (null == a[e.nullProps[b]]) {
                g = !0;
                break
            }
            if (g === !0) break
        }
        for (b = 0; b < e.zeroProps.length && g !== !0; b++) 0 === a[e.zeroProps[b]] && (g = !0);
        if (void 0 !== window.getComputedStyle) {
            var h = window.getComputedStyle(a, null);
            "none" !== h.getPropertyValue("display") && "hidden" !== h.getPropertyValue("visibility") || (g = !0)
        }
        return g
    }
    var d = {
            "m.naver.com": {
                id: "nmap_news_1",
                su: "SU10101"
            },
            "test.m.naver.com": {
                id: "nmap_news_1",
                su: "SU10512"
            },
            "www.naver.com": {
                id: "da_iframe_time",
                su: "SU10079"
            },
            "test.www.naver.com": {
                id: "da_iframe_time",
                su: "SU10310"
            }
        },
        e = {
            _hostUrl: "//pb.m.naver.com",
            _logPlace: null,
            setHostUrl: function(a) {
                this._hostUrl = a
            },
            log: function(a) {
                this._init();
                var b = document.createElement("img");
                b.setAttribute("width", "0"), b.setAttribute("height", "0"), b.setAttribute("src", this._appendDummy(this._hostUrl + a)), this._logPlace.appendChild(b)
            },
            _init: function() {
                if (null === this._logPlace) {
                    var a = document.createElement("div");
                    a.style.display = "none", document.body.appendChild(a), this._logPlace = a
                }
            },
            _appendDummy: function(a) {
                return a.indexOf("?") > 0 ? (a += "&dummy=", a += Math.random()) : (a += "?dummy=", a += Math.random()), a
            }
        },
        f = {
            _bakeryManager: null,
            _timerId: null,
            BakeryManager: function() {
                this.checkTable = function() {
                    var a = document.location.host;
                    if ("undefined" != typeof d[a]) {
                        a.indexOf("test") >= 0 && e.setHostUrl("//test-pb.m.naver.com");
                        var b = d[a].id,
                            c = d[a].su,
                            g = document.getElementById(b);
                        if (null === g) return f._sendLog("/abpenable", c, "ad:null"), void f._sendLog("/abpblock", c, "ad:null");
                        var h = f._createBaitNode();
                        f._checkADBD(h) === !0 && f._sendLog("/abpenable", c, "bait:hidden"), f._clearBaitNode(h);
                        var i = f._checkBlocked(g);
                        if (i.result === !0) {
                            var j = i.domInfo.nodeName + ":" + i.domInfo.style + ";props:" + i.domInfo.props + ";id:" + i.domInfo.id + ";class:" + i.domInfo.className;
                            "nullProps" !== i.domInfo.props && "zeroProps" !== i.domInfo.props || (j += ";parent:" + i.domInfo.parent), f._sendLog("/abpblock", c, j)
                        }
                    }
                }
            },
            activate: function() {
                null !== this._bakeryManager && (this._bakeryManager = null), AgentDetect.IS_IE && AgentDetect.searchBrowserVersion() < 8 || null === document.getElementById("main_search_specialda_1") && (this._bakeryManager = new this.BakeryManager, clearTimeout(this._timerId), this._timerId = setTimeout(this._bakeryManager.checkTable, 4e3))
            },
            deactivate: function() {
                this._bakeryManager = null, clearTimeout(this._timerId)
            },
            _checkADBD: function(a) {
                return c(a)
            },
            _checkBlocked: function(a) {
                if ("none" === f._validCtActiveView()) return {
                    result: !1
                };
                var c = new b;
                return c.init(), c.validateNode(a)
            },
            _sendLog: function(a, b, c) {
                e.log(a + "?su=" + b + "&domInfo=" + c)
            },
            _createBaitNode: function() {
                var b = "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
                    c = "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important",
                    d = a("div", {
                        "class": b,
                        style: c
                    });
                return document.body.appendChild(d), d
            },
            _clearBaitNode: function(a) {
                if (null === a) return !0;
                try {
                    a.remove()
                } catch (b) {}
                return a = null, !0
            },
            _validCtActiveView: function() {
                var a = document.getElementById("ct"),
                    b = "";
                return null !== a && (b = a.currentStyle ? a.currentStyle.display : getComputedStyle(a, null).display), b
            }
        };
    return f
};