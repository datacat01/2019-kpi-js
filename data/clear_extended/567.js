function log(e) {
    window.console && console.log(e)
}

function ntesQuoteDataLoader(options) {
    var options = options || {},
        _self = this;
    for (var k in options.page = options.page || 0, options.count = options.count || 10, options.type = options.type || "query", options.page = options.page || 1, options.count = options.count || 25, options.order = options.order || "desc", options) _self[k] = options[k];
    this.debug = 1, this.pagecount = 0, this.total = 0, this.list = [], this.onload = function(e) {}, this.load = function() {
        var params = ntesQuoteDataUtils.copyMap(options),
            host = window.location.host + "";
        if (ntesQuoteDataUtils.getUrlHost(_self.host) && ntesQuoteDataUtils.getUrlHost(host) == ntesQuoteDataUtils.getUrlHost(_self.host) && !params.callback) {
            function success(e) {
                _self.page = e.page, _self.total = e.total, _self.count = e.count, _self.pagecount = e.pagecount, _self.order = e.order, _self.list = e.list, _self.onload(_self)
            }
            this.initData && !this.initData.inited ? (success(this.initData), this.initData.inited = !0) : "undefined" != typeof jQuery ? jQuery.getJSON(_self.host, params, success) : "undefined" != typeof NTES && NTES.ajax.send(_self.host, "GET", params, {
                onSuccess: function(xhr) {
                    success(eval("(" + xhr.responseText + ")"))
                }
            })
        } else {
            var callback = params.callback;
            if (!callback) {
                var sParam = ntesQuoteDataUtils.composeParams(params),
                    sCallback = ntesQuoteDataUtils.hashCode(sParam, !0);
                callback = "callback_" + sCallback, params.callback = callback
            }
            var now = new Date,
                time = now.getDay() + "" + now.getHours() + now.getMinutes(),
                h;
            if (params.req = time, window[callback] = function(e) {
                    _self.page = e.page, _self.total = e.total, _self.count = e.count, _self.pagecount = e.pagecount, _self.order = e.order, _self.list = e.list, _self.onload(_self)
                }, this.initData && !this.initData.inited) window[callback](this.initData), this.initData.inited = !0;
            else h = _self.debug ? _self.host : "//quotes.money.163.com" + _self.host, ntesQuoteDataUtils.importJs(h + "?" + ntesQuoteDataUtils.composeParams(params), "gbk")
        }
    }, this.gotopage = function(e) {
        return 0 <= e && e <= _self.pagecount - 1 && (_self.page = e, this.load(), !0)
    }, this.next = function() {
        return _self.gotopage(_self.page + 1)
    }, this.prev = function() {
        return _self.gotopage(_self.page - 1)
    }, this.first = function() {
        return _self.gotopage(0)
    }, this.last = function() {
        return _self.gotopage(_self.pagecount - 1)
    }
}

function ntesQuoteData(e) {
    this.tableId = e, this.table, this.tableMetas = {}, this.dataType, this.quoteDataLoader, this.timer = null, this.timeout = 5e3, this._init()
}

function ntesQuoteLoader(e) {
    this.address = "//api.money.126.net/data/feed/"
}

function ntesQuote(e) {
    this.timer = null, this._codes = [], this._quoteCodes = [], this._dataList = null, this._elemsMap = {}, this.inited = !1, this._init(e)
}
window.isDebug = 0, window.compatibility = 0, ntesQuoteDataUtils = {
        getUrlHost: function(e) {
            -1 != e.indexOf("http://") && (e = e.substring(7));
            for (var t = [".com", ".net", ".cn", ".org", ".com.cn"], n = "", o = 0; o < t.length; o++)
                if (n = t[o], -1 != e.indexOf(n)) return e.substring(0, e.indexOf(n)) + n
        },
        format: function(e, n) {
            var o = arguments,
                t = /{(.+?)}/g;
            if ("object" != typeof n) return e.replace(t, function(e, t) {
                return null == o[parseInt(t) + 1] ? e : o[parseInt(t) + 1]
            });
            if ("[object Array]" !== Object.prototype.toString.call(n)) return i = e.replace(t, function(e, t) {
                return null == n[t] ? e : n[t]
            });
            for (var i = "", r = 0; r < n.lenth; r++) i += ntesQuoteDataUtils.format(e, n[r]);
            return i
        },
        finc_format: function(e, t) {
            return isNaN(parseFloat(e)) ? e : 1e12 < e || e < -1e12 ? this.num_format(e / 1e12, t || 2, 4, "") + "\u4e07\u4ebf" : 1e8 < e || e < -1e8 ? this.num_format(e / 1e8, t || 2, 5, "") + "\u4ebf" : 1e5 < e || e < -1e5 ? this.num_format(e / 1e4, t || 2, 5, "") + "\u4e07" : this.num_format(e, t || 0, null, "")
        },
        num_format: function(e, n, o, r) {
            void 0 === r && (split = ","), n = 0 <= n && n <= 20 ? n : 2;
            var a = e < 0 ? -1 * e : 1 * e,
                s = (a = parseFloat((a + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "").split(".")[0].split("").reverse(),
                l = a.split(".")[1];
            for (t = "", i = 0, len = s.length; i < len; i++) t += s[i] + ((i + 1) % 3 == 0 && i + 1 != s.length ? r : "");
            return o && s.length >= o ? n = 0 : o && a.length > o && (1 != n && n != a.length - o || (n = 0), 1 < n && (l = l.substr(0, l.length - (a.length - o)))), (e < 0 ? "-" : "") + t.split("").reverse().join("") + (0 < n ? "." + l : "")
        },
        composeParams: function(e) {
            var t = "",
                n = !0;
            for (var o in e) e[o] && (n || (t += "&"), t += o + "=" + e[o], n = !1);
            return t
        },
        importJs: function(e, t, n, o) {
            var i = document.getElementsByTagName("head")[0] || document.documentElement,
                r = document.createElement("script");
            r.type = "text/javascript", t && (r.charset = t);
            var a = !1;
            r.onload = r.onreadystatechange = function() {
                a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, "function" == typeof n && n(o), i.removeChild(this))
            }, r.src = e, i.insertBefore(r, i.firstChild)
        },
        hashCode: function(e, t) {
            t || (e = e.toLowerCase());
            var n, o = 1315423911;
            for (n = e.length - 1; 0 <= n; n--) o ^= (o << 5) + e.charCodeAt(n) + (o >> 2);
            return 2147483647 & o
        },
        extend: function(e, t) {
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, (e.prototype.constructor = e).superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t)
        },
        get: function(e) {
            return "string" == typeof e ? document.getElementById(e) : e
        },
        find: function(e) {
            var t = e.css,
                n = e.attr,
                o = e.attrValue,
                i = [],
                r = ntesQuoteDataUtils.get(e.parent);
            if (r) {
                for (var a = r.getElementsByTagName(e.tag || "*"), s = new RegExp("(^|\\s)" + t + "(\\s|$)"), l = 0, c = a.length; l < c; l++) {
                    var u = a[l];
                    t && u.className != t && !u.className.match(s) || (!n || o || u.getAttribute(n)) && (n && o && u.getAttribute(n) != o || i.push(u))
                }
                return i
            }
        },
        toMeta: function(e) {
            for (var t = (e = e.replace(/javascript:/g, "javascirpt%colon%")).split(/[:;]/), n = {}, o = 0; o < t.length; o += 2) n[t[o]] = t[o + 1] ? t[o + 1].replace(/javascirpt%colon%/g, "javascript:") : t[o + 1];
            return n
        },
        getMapValue: function(e, t) {
            var n = e[t];
            if (-1 != t.indexOf(".")) {
                for (var o = t.split("."), i = e, r = 0, a = o.length; r < a; r++) i && (i = i[o[r]]);
                n = i
            }
            return n
        },
        copyMap: function(e, t) {
            for (var n in t = t || {}, e) t[n] = e[n];
            return t
        },
        widthString: function(e, t) {
            if (!e) return e;
            for (var n = 2 * t, o = 0, i = 0, r = e.length; i < r; i++) {
                var a = 0 < e.charCodeAt(i) && e.charCodeAt(i) < 255 ? 1 : 2;
                if (n < o + a) break;
                o += a
            }
            return e.substr(0, i)
        },
        getParameter: function(e) {
            var t = new RegExp("(^|)" + e + "=([^&]*)(&|$)", "gi").exec(location.href);
            return t ? unescape(t[2]) : null
        },
        trim: function(e) {
            return e.replace(/(^\s*)|(\s*$)/g, "")
        },
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        isIE: function() {
            var e = navigator.userAgent.toLowerCase();
            return /msie/.test(e) && !/opera/.test(e)
        }(),
        cssColor: function(e) {
            return 0 < e ? "upFontColor" : e < 0 ? "downFontColor" : ""
        },
        hasClass: function(e, t) {
            for (var n = e.className.split(" "), o = 0; o < n.length; o++)
                if (n[o] === t) return !0;
            return !1
        },
        addClass: function(e, t) {
            if (!ntesQuoteDataUtils.hasClass(e, t)) return e.className = e.className + " " + t, e
        },
        removeClass: function(e, t) {
            for (var n = e.className.split(" "), o = [], i = 0; i < n.length; i++) n[i] && n[i] !== t && o.push(n[i]);
            return e.className = o.join(" "), e
        }
    },
    function(u, i) {
        u.QUOTE_DATA_ATTR = "_quotedata_", u.QUOTE_DATA_QUERY_ATTR = "_quotedata_query_", u.MINOR_QUOTE_DATA_ATTR = "_minorquotedata_", u.DATA_TYPE = "DataType", u.upFontColor = "upFontColor", u.downFontColor = "downFontColor", u.colorExp = new RegExp("\\b(upFontColor)\\b|\\b(downFontColor)\\b", "g"), u.bgchgExp = new RegExp("\\b(upbg)\\b|\\b(downbg)\\b", "g"), u.bgTRcolor = "bg-cGrey", u.bgTRindex = 1;
        var n = {};
        u.addFormatHandler = function(e, t) {
            n[e] = t
        }, u.getFormatHandler = function(e) {
            return n[e]
        };
        var o = {};
        u.addQuoteDataLoader = function(e, t) {
            o[e] = t
        }, u.getQuoteDataLoader = function(e) {
            return o[e]
        }, u.dataTimer = {}, u.addTimer = function(e, t) {
            u.dataTimer.addTimer(e, t)
        }, u.setTimer = function(e, t) {
            u.dataTimer.setTimer(e, t)
        }, u.extendsTimer = function(e, t, n) {
            u.dataTimer.extendsTimer(e, t, n)
        };
        var r = {};
        u.load = function(e, t, n) {
            r[e] && r[e].stop();
            var o = new ntesQuoteData(e);
            (r[e] = o).load(t, n, e)
        }, u.loadAll = function(e, t, n) {
            for (var o = u._getTables(e), i = {
                    i: 0
                }, r = {}, a = function(e, t) {
                    null == r[t] && (r[t] = e), ++i.i == o.length && n && n(r)
                }, s = 0, l = o.length; s < l; s++) {
                var c = o[s].id;
                u.load(c, t, a)
            }
        }, u.stopAll = function(e) {
            for (var t in r) r[t].stop()
        }, u._getTables = function(e) {
            var t = [];
            if (i.isArray(e))
                for (var n = 0, o = e.length; n < o; n++) t[t.length] = i.get(e[n]);
            else t = i.find({
                parent: i.get(e) || document.body,
                attr: u.QUOTE_DATA_ATTR
            });
            return t
        }, u.get = function(e) {
            return r[e]
        }
    }(ntesQuoteData, ntesQuoteDataUtils),
    function(y, e, _) {
        e._init = function() {
            this.table = _.get(this.tableId), this.refresh()
        }, e.refresh = function() {
            return this._loadTableMetas(), y.dataTimer.clearLastOnTime(this.dataType, this.tableId), this
        }, e._loadTableMetas = function() {
            for (var e = this.table.getAttribute(y.QUOTE_DATA_QUERY_ATTR), t = this.table.getAttribute(y.QUOTE_DATA_ATTR), n = _.toMeta(t), o = [], i = _.find({
                    parent: this.table,
                    tag: "th"
                }), r = 0, a = i.length; r < a; r++) {
                var s = i[r].getAttribute(y.MINOR_QUOTE_DATA_ATTR);
                if (s) {
                    var l = _.toMeta(s);
                    o.push(l.attr)
                }
            }
            var c = o.join(","),
                u = {};
            u.query = e, u.meta = n, u.fields = c, this.tableMetas = u, this.dataType = n[y.DATA_TYPE], void 0 !== this.dataType && (this.quoteDataLoader = y.getQuoteDataLoader(this.dataType)(this.table, e, n, c))
        }, e.loadOnce = function(t, n) {
            if (y.dataTimer.isOnTime(this.dataType, this.tableId)) {
                if (this.quoteDataLoader) {
                    var o = this;
                    this.quoteDataLoader.onload = function(e) {
                        o.defaultTableBuilder(e.list), "function" == typeof t && t(e, n), "function" == typeof o.quoteDataLoader.afterload && o.quoteDataLoader.afterload(e, n)
                    }, this.quoteDataLoader.load()
                }
                return this
            }
        }, e.load = function(e, t, n) {
            e && (this.timeout = 1 * e), this.timer && (window.clearTimeout(this.timer), this.timer = null), this.loadOnce(t, n);
            var o = this;
            return this.timer = window.setTimeout(function() {
                o.load()
            }, o.timeout), this
        }, e.stop = function() {
            window.clearTimeout(this.timer)
        }, e.defaultTableBuilder = function(e) {
            try {
                if (!e) return;
                var t = this.tableMetas.meta,
                    n = _.find({
                        parent: this.table,
                        tag: "th"
                    }),
                    o = e.length;
                if (!n || 0 == n.length) return;
                for (var i = [], r = 0, a = n.length; r < a; r++) {
                    var s = n[r].getAttribute(y.MINOR_QUOTE_DATA_ATTR);
                    if (s) {
                        var l = _.toMeta(s);
                        i.push(l)
                    } else i.push(null)
                }
                for (var c = document.createDocumentFragment(), u = this.table.getElementsByTagName("tbody")[0], d = document.createElement("tbody"), f = document.createElement("tr"), h = document.createElement("td"), p = (r = 0, t.count); r < p;) {
                    var m = f.cloneNode(!0);
                    if (!(r < o)) break;
                    c.appendChild(m), r % 2 == (t["bg-index"] || y.bgTRindex) && (m.className += " " + y.bgTRcolor);
                    for (var v = 0, g = i.length; v < g;) {
                        var w = h.cloneNode(!0);
                        if (i[v]) {
                            var b = e[r];
                            b && (y.getFormatHandler(i[v].fmt) || this.defaultFormatHandler)(w, i[v], b, this), m.appendChild(w), v++
                        } else v++
                    }
                    r++
                }
                d.appendChild(c), u ? this.table.replaceChild(d, u) : this.table.appendChild(d)
            } catch (e) {
                "undefined" != typeof console && console.error && console.error(e)
            }
        }, e.defaultFormatHandler = function(e, t, n, o) {
            if (n) {
                var i = t.attr;
                if (i || t.default) {
                    var r = _.getMapValue(n, i || "");
                    if ("LOW" == i && 99990 <= parseInt(r)) e.innerHTML = "\u505c\u724c";
                    else {
                        var a;
                        if (0 == r || r ? (t["*"] && (r *= t["*"]), t["/"] && (r /= t["/"]), a = t.fixed ? isFinite(r) ? (1 * r).toFixed(t.fixed) : "-" : t.percent ? (100 * r).toFixed(t.percent) + "%" : r) : t.default && (a = t.default), t.num && "encode" == t.num && (a = _.finc_format(r)), t.class && (e.className = t.class), t.title) {
                            var s = _.getMapValue(n, t.title);
                            e.setAttribute("title", s)
                        }
                        if (t.color) {
                            var l = _.getMapValue(n, t.color);
                            if (l) {
                                var c = _.cssColor(l);
                                e.className = e.className.replace(ntesQuoteData.colorExp, "") + " " + c
                            }
                        }
                        if (t.colorcmp) {
                            var u = _.getMapValue(n, t.colorcmp);
                            if (u) {
                                c = _.cssColor(r - u);
                                e.className = e.className.replace(ntesQuoteData.colorExp, "") + " " + c
                            }
                        }
                        t.maxlen && (e.setAttribute("title", a), a = _.widthString(a, t.maxlen));
                        var d = t.sign || "";
                        if (t.link) {
                            -1 == t.link.indexOf("http") && 0 != t.link.indexOf("#") && (t.link = "http://" + t.link);
                            var f = {};
                            if (t.linkvalue)
                                for (var h = 0, p = (v = t.linkvalue.split(",")).length; h < p; h++) f[h] = _.getMapValue(n, v[h]);
                            var m = decodeURIComponent(_.format(t.link, f)) + d;
                            a = a ? _.format('<a href="{0}" target="{1}" class="{3}">{2}</a>', m, t.target || "_blank", a, t.class || "") : void 0
                        }
                        if (t.linkurl && (a = _.format('<a href="{0}" target="{1}" class="{3}">{2}</a>', n[t.linkurl] + d, t.target || "_blank", a, t.class || "")), e.innerHTML = a || (0 === a ? 0 : "-"), t.onclick) {
                            var v;
                            for (f = {}, h = 0, p = (v = t.clickvalue.split(",")).length; h < p; h++) f[h] = _.getMapValue(n, v[h]);
                            var g = _.format(t.onclick, f);
                            (e.getElementsByTagName("a")[0] || e).onclick = new Function(g)
                        }
                    }
                }
            }
        }
    }(ntesQuoteData, ntesQuoteData.prototype, ntesQuoteDataUtils),
    function(h) {
        h.items = {}, h.lastOnTime = {}, h.addTimer = function(e, t) {
            "function" == typeof t && (h.items[e] || (h.items[e] = []), h.items[e].push(t))
        }, h.setTimer = function(e, t) {
            "function" == typeof t && (h.items[e] = [t])
        }, h.extendsTimer = function(e, t, n) {
            if ("function" == typeof n) {
                var o = [];
                if (h.items[t])
                    for (var i = 0, r = h.items[t].length; i < r; i++) o.push(h.items[t][i]);
                o.push(n), h.items[e] = o
            }
        }, h._getOnTimeId = function(e, t) {
            return e + "_" + t
        }, h.isOnTime = function(e, t) {
            t || (t = "id");
            var n = h._getOnTimeId(e, t);
            if (!h.lastOnTime[n]) return h.lastOnTime[n] = new Date, !0;
            var o = new Date,
                i = h.lastOnTime[n],
                r = o.getDay(),
                a = o.getHours(),
                s = o.getMinutes(),
                l = o.getSeconds(),
                c = 24 * (r - i.getDay()) * 3600 + 3600 * (a - i.getHours()) + 60 * (s - i.getMinutes()) + 1 * (l - i.getSeconds()),
                u = !1;
            if (h.items[e])
                for (var d = 0, f = h.items[e].length; d < f && (u = h.items[e][d](c, r, a, s, l)); d++);
            else u = h.items.DEFAULT[0](c, r, a, s, l);
            return u && (h.lastOnTime[n] = o), u
        }, h.clearLastOnTime = function(e, t) {
            if (e) {
                var n = h._getOnTimeId(e, t);
                h.lastOnTime[n] = null
            } else h.lastOnTime = {}
        }
    }(ntesQuoteData.dataTimer), ntesQuoteData.addTimer("DEFAULT", function(e, t, n, o, i) {
        if ((9 <= n && n < 12 || 13 <= n && n < 16) && 1 <= t && t <= 5) return !0
    }), ntesQuoteData.extendsTimer("HS_RANK", "DEFAULT", function(e, t, n, o, i) {
        if (50 <= e) return !0
    }), ntesQuoteData.extendsTimer("HS_RADAR", "DEFAULT", function(e, t, n, o, i) {
        if (5 <= e) return !0
    }), ntesQuoteData.extendsTimer("HS_PLATE", "DEFAULT", function(e, t, n, o, i) {
        if (50 <= e) return !0
    }), ntesQuoteData.addTimer("HS_UVSNEWS", function(e, t, n, o, i) {
        if (300 <= e) return !0
    }), ntesQuoteData.extendsTimer("HK_RANK", "DEFAULT", function(e, t, n, o, i) {
        if (50 <= e) return !0
    }), ntesQuoteData.addQuoteDataLoader("HS_RANK", function(e, t, n, o) {
        for (var i = ["PRICE", "SNAME", "SYMBOL", "CODE", "ANNOUNMT", "UVSNEWS"], r = o.split(","), a = 0; a < i.length; a++) - 1 == r.indexOf(i[a]) && (r[r.length] = i[a]);
        return new ntesQuoteDataLoader({
            host: "//quotes.money.163.com/hs/service/diyrank.php",
            page: n.page || 0,
            query: t,
            fields: r.join(","),
            sort: n.sort || "PERCENT",
            order: n.order || "desc",
            count: n.count || 5
        })
    }), ntesQuoteData.addQuoteDataLoader("HS_RADAR", function(e, t, n, o) {
        return new ntesQuoteDataLoader({
            host: "//quotes.money.163.com/hs/service/marketradar_ajax.php",
            page: n.page || 0,
            query: t,
            types: n.types || "",
            count: n.count || 5
        })
    }), ntesQuoteData.addQuoteDataLoader("HS_UVSNEWS", function(e, t, n, o) {
        return new ntesQuoteDataLoader({
            host: "//quotes.money.163.com/hs/service/stocknews_ajax.php",
            page: n.page || 0,
            query: t,
            count: n.count || 15
        })
    }), ntesQuoteData.addQuoteDataLoader("HS_PLATE", function(e, t, n, o) {
        return o += ",TYPECODE,PLATECODE,MAXPERCENTSTOCKOBJ", new ntesQuoteDataLoader({
            host: "//quotes.money.163.com/hs/service/quotedata_ajax.php",
            page: n.page || 0,
            query: t,
            fields: o,
            sort: "PERCENT",
            order: "desc",
            count: n.count || 5,
            "max-age": 60,
            db: "finance",
            table: "plate"
        })
    }), ntesQuoteData.addQuoteDataLoader("HK_RANK", function(e, t, n, o) {
        return new ntesQuoteDataLoader({
            host: "//quotes.money.163.com/hk/service/quotedata_ajax.php",
            page: n.page || 0,
            query: t,
            fields: o,
            sort: n.sort || "PERCENT",
            order: n.order || "DESC",
            count: n.count || 5,
            type: n.type || "query",
            "max-age": 60,
            db: "hkstock",
            table: "hkstocks"
        })
    }), ntesQuoteData.addFormatHandler("stock-news", function(e, t, n, o) {
        if (n) {
            e.style.overflow = "visible", o.defaultFormatHandler(e, t, n);
            var i = e.innerHTML,
                r = '<div>{0}<a href="{1}" target="_blank" class="{2}" title="{3}"></a></div>';
            if (n.ANNOUNMT) {
                var a = ntesQuoteDataUtils.format("//quotes.money.163.com/f10/ggnr_{0},{1}.html", n.SYMBOL, n.ANNOUNMT[0].ANNOUNMTID);
                r = ntesQuoteDataUtils.format(r, i, a, "stock-notice", n.ANNOUNMT[0].ANNOUNMT2)
            } else {
                if (!n.UVSNEWS) return;
                r = ntesQuoteDataUtils.format(r, i, n.UVSNEWS[0].URL, "stock-news", n.UVSNEWS[0].TITLE)
            }
            e.innerHTML = r
        }
    }), ntesQuoteData.addFormatHandler("volume-cut", function(e, t, n, o) {
        o.defaultFormatHandler(e, t, n), n[t.attr] = n[t.attr] / 100, 1e8 < n[t.attr] ? e.innerHTML = (n[t.attr] / 1e8).toFixed(2) + "\u4ebf" : 1e4 < n[t.attr] ? e.innerHTML = (n[t.attr] / 1e4).toFixed(2) + "\u4e07" : e.innerHTML = n[t.attr].toFixed(0)
    }), ntesQuoteData.addFormatHandler("turnover-cut", function(e, t, n, o) {
        o.defaultFormatHandler(e, t, n), 1e8 < Math.abs(n[t.attr]) ? e.innerHTML = (n[t.attr] / 1e8).toFixed(2) + "\u4ebf" : 1e4 < Math.abs(n[t.attr]) ? e.innerHTML = (n[t.attr] / 1e4).toFixed(2) + "\u4e07" : e.innerHTML = n[t.attr]
    }), [].indexOf || (Array.prototype.indexOf = function(e) {
        for (var t = this.length; t-- && this[t] !== e;);
        return t
    }),
    function(a, m) {
        var i = {},
            v = new RegExp("\\b(upFontColor)\\b|\\b(downFontColor)\\b", "g");
        new RegExp("\\b(upbg)\\b|\\b(downbg)\\b", "g");

        function r(e) {
            var t = e;
            return e || (t = "*"), m.isArray(e) && (t = e.join("-")), t
        }
        a.address = "//api.money.126.net/data/feed/", a.version = 2, a.quoteMark = "_ntesquote_", a.minorMark = "_minorquote_", a.cronCache = {}, a.intervalCache = {}, a.typeTimeMap = {}, a.jcron = {}, a.beforeHandler = {}, a.formatHandlers = {
            default: function(e, t, n, o) {
                if (o) {
                    if (u = t.attr) {
                        var i, r = m.getMapValue(o, u);
                        if (0 == r || r ? (t["*"] && (r *= t["*"]), t["/"] && (r /= t["/"]), i = t.fixed ? isFinite(r) ? (1 * r < 1 && (t.fixed = t.fixed < 2 ? 2 : t.fixed), (1 * r).toFixed(t.fixed)) : "-" : t.percent ? (100 * r).toFixed(t.percent) + "%" : r) : t.default && (i = t.default), t.color) {
                            var a = o[t.color];
                            if (a) {
                                var s = m.cssColor(a);
                                n.className = n.className.replace(v, ""), m.addClass(n, s)
                            }
                        }
                        if (t.colorcmp) {
                            var l = m.getMapValue(o, t.colorcmp);
                            if (l) {
                                s = m.cssColor(r - l);
                                n.className = n.className.replace(ntesQuoteData.colorExp, "") + " " + s
                            }
                        }
                        if (t.bgchg) {
                            var c = t.preQuoteMap;
                            if (c) {
                                var u, d = o[u = t.bgchg],
                                    f = c[u];
                                if (d && f && d != f) {
                                    m.removeClass(n, "upbg"), m.removeClass(n, "downbg"), f < d && m.addClass(n, "upbg"), d < f && m.addClass(n, "downbg");
                                    var h = 1 * (t.timeout || 1500);
                                    window.setTimeout(function() {
                                        m.removeClass(n, "upbg"), m.removeClass(n, "downbg")
                                    }, h)
                                }
                            }
                        }
                        if (t.maxlen && (n.setAttribute("title", i), i = m.widthString(i, t.maxlen)), t.title && n.setAttribute("title", o[t.title]), t.link) {
                            var p = decodeURIComponent(m.format(t.link, o[t.linkvalue]));
                            i = m.format('<a href="{0}" target="{1}">{2}</a>', p, t.target, i)
                        }
                        t.class && (n.className = t.class), n.innerHTML = i || (0 === i ? 0 : "--")
                    }
                } else n.innerHTML = "--"
            }
        }, a.loadOnce = function(e) {
            var t = r(e);
            i[t] && i[t].stop(), i[t] = new ntesQuote(e), i[t].loadOnce()
        }, a.load = function(e, t, n) {
            var o = r(e);
            i[o] && i[o].stop(), i[o] = new ntesQuote(e), i[o].load(t, n)
        }, a.loadAll = function(e, t, n) {
            a.load(e, t, n)
        }, a.loadData = function(e, t, n) {
            a.load(e, t, n)
        }, a.addQuoteLoader = function(e, t) {}, a.setCrontab = function(e, t) {
            if (!t && a.cronCache[e]) return delete a.cronCache[e], !0;
            try {
                var n = a.jcron.parseCrontab(e, t);
                return !!(n.minute && n.hour && n.week) && (a.cronCache[e] = t, !0)
            } catch (e) {
                return !1
            }
        }, a.setInterval = function(e, t) {
            return !t && a.intervalCache[e] ? delete a.intervalCache[e] : a.intervalCache[e] = t, !0
        }, a.isMatchInterval = function(e, t, n) {
            return !(t && n && e.getTime() - t.getTime() < 1e3 * n)
        }, a.stopAll = function() {
            for (var e in i) i[e].stop()
        }, a.addFormatHandler = function(e, t) {
            a.formatHandlers[e] = t
        }, a.addBeforeHandler = function(e, t) {
            a.beforeHandler[e] = t
        }, a.importJs = m.importJs, a.refresh = function(e) {
            var t = r(e);
            return i[t] ? (i[t]._fillElems(e), i[t].stop()) : i[t] = new ntesQuote(e), i[t]
        }, a.getCodes = function(e) {
            var t = r(e);
            if (i[t]) return i[t]._codes
        }, a.getQuote = function(e) {
            for (var t in i)
                if (i[t]._elemsMap[e]) return i[t]._elemsMap[e][0].quoteData
        }, a.getQuoteObject = function(e) {
            return i[r(e)]
        }, a.getPreQuote = function(e) {
            for (var t in i)
                if (i[t]._elemsMap[e]) return i[t]._elemsMap[e][0].preQuoteMap
        }, a.find = m.find, a.toMeta = m.toMeta, a.formatString = m.format, a.defaultElementRender = function(e, t, n, o) {
            try {
                var i = t.before;
                i && a.beforeHandler[i] && a.beforeHandler[i](e, t, n, o);
                var r = t.fmt || "default";
                a.formatHandlers[r](e, t, n, o)
            } catch (e) {
                "undefined" != typeof console && console.error
            }
        }
    }(ntesQuote, ntesQuoteDataUtils),
    function(h, t, p) {
        t._init = function(e) {
            this._fillElems(e)
        }, t._fillElems = function(e) {
            p.isArray(e) || (e = [e]);
            for (var t = e.length; t--;) {
                var n = ntesQuoteDataUtils.find({
                    parent: e[t] || document.body,
                    attr: h.quoteMark
                });
                if (n)
                    for (var o = n.length; o--;) {
                        var i = n[o].getAttribute(h.quoteMark);
                        (i = ntesQuoteDataUtils.toMeta(i)).element = n[o], i.code && (this._elemsMap[i.code] ? this._elemsMap[i.code].push(i) : (this._codes.push(i.code), this._elemsMap[i.code] = [i]))
                    }
            }
        }, t.loadOnce = function() {
            this.load(0), this.stop()
        }, t.load = function(t, e) {
            var n = this,
                o = [],
                i = new Date;
            t = t || 3e4;
            for (var r = n._codes.length; r--;) {
                var a = n._codes[r],
                    s = n._elemsMap[a];
                if (s && s.type && (h.cronCache[s.type] || h.intervalCache[s.type])) {
                    var l = h.cronCache[s.type],
                        c = h.intervalCache[s.type];
                    h.jcron.isMatch(i, s.type, l) && h.isMatchInterval(i, h.typeTimeMap[s.type], c) && (o.push(a), h.typeTimeMap[s.type] = i)
                } else o.push(a)
            }
            if (0 != o.length) {
                i.getDay(), i.getHours(), i.getMinutes();
                var u = parseInt(1e8 * Math.random());
                if (compatibility && (u = ""), window["_ntes_quote_callback" + u] = function(e) {
                        if (n.beforePageRending && n.beforePageRending(), n.defaultPageRender(e, h.defaultElementRender), n.afterPageRending)
                            for (var t = 0; t < n.afterPageRending.length; t++) n.afterPageRending[t](e);
                        window["_ntes_quote_callback" + u] = null
                    }, window.isDebug)
                    if (o.length < 200 || !h.isIE) p.importJs("./getapi.php?address=" + h.address + o.join(",") + ",money.api&callback=_ntes_quote_callback" + u, "utf-8");
                    else
                        for (var d = 0, f = o.length; d < f; d += 200) p.importJs("./getapi.php?address=" + h.address + o.join(",") + ",money.api&callback=_ntes_quote_callback" + u, "utf-8");
                else if (o.length < 200 || !h.isIE) p.importJs(h.address + o.join(",") + ",money.api?callback=_ntes_quote_callback" + u, "utf-8");
                else
                    for (d = 0, f = o.length; d < f; d += 200) p.importJs(h.address + o.slice(d, d + 200).join(",") + ",money.api?callback=_ntes_quote_callback" + u, "utf-8");
                n.timer = setTimeout(function() {
                    var e = (new Date).getHours();
                    (9 <= e && e <= 12 || 12 <= e && e <= 16 || 21 <= e || e <= 5) && n.load(t)
                }, t), "function" == typeof e && e()
            }
        }, t.loadData = function(e, t) {
            this.load(e, t)
        }, t.stop = function() {
            clearTimeout(this.timer)
        }, t.defaultPageRender = function(e, t) {
            this._dataList = e;
            for (var n = this._codes.length; n--;)
                for (var o = this._codes[n], i = this._elemsMap[o], r = e[o], a = i.length; a--;) {
                    var s = i[a];
                    s.quoteData = r, t(o, s, s.element, r), s.preQuoteMap = s.quoteData
                }
        }, t.setBeforRender = function(e) {
            t.beforePageRending = e
        }, t.setAfterRender = function(e) {
            "[object Array]" != Object.prototype.toString.call(t.afterPageRending) && (t.afterPageRending = []), t.afterPageRending.push(e)
        }
    }(ntesQuote, ntesQuote.prototype, ntesQuoteDataUtils),
    function(i) {
        function o(e, t, n, o, i) {
            var r = {};
            if (-1 != e.indexOf("/")) {
                var a = parseInt(e.split("/")[1]);
                return ntesQuote.setInterval(o, a * i), null
            }
            for (var s = e.split(","), l = 0, c = s.length; l < c; l++) {
                var u = null,
                    d = null,
                    f = (a = null, s[l].split(/-|\//g));
                if ("*" == f[0]) {
                    if (u = t, d = n, 1 < f.length && isNaN(f[1])) return null;
                    a = 1 < f.length ? 1 * f[1] : 1
                } else {
                    if (isNaN(f[0])) return null;
                    if (u = 1 * f[0], 1 < f.length && isNaN(f[1])) return null;
                    if (d = 1 < f.length ? 1 * f[1] : u, 2 < f.length && isNaN(f[2])) return null;
                    a = 2 < f.length ? 1 * f[2] : 1
                }
                for (var h = u; h <= d; h += a) r[h] || (r[h] = !0)
            }
            return r
        }
        i.cache = {}, i.parseCrontab = function(e, t) {
            if (i.cache[t]) return i.cache[t];
            var n = t.split(/[ \t]+/g);
            return i.cache[t] = {
                second: 0 < n.length ? o(n[0], 0, 59, e, 1) : null,
                minute: 0 < n.length ? o(n[1], 0, 59, e, 60) : null,
                hour: 1 < n.length ? o(n[2], 0, 23, e, 3600) : null,
                week: 2 < n.length ? o(n[3], 0, 6, e, 86400) : null
            }, i.cache[t]
        }, i.isMatch = function(e, t, n) {
            if (n) {
                var o = i.parseCrontab(t, n);
                if (o.week && !o.week[e.getDay()]) return !1;
                if (o.hour && !o.hour[e.getHours()]) return !1;
                if (o.minute && !o.minute[e.getMinutes()]) return !1
            }
            return !0
        }
    }(ntesQuote.jcron), ntesQuote.setCrontab("SH", "* * 9-11,13-15 1-5"), ntesQuote.setCrontab("SZ", "* * 9-11,13-15 1-5"), ntesQuote.setCrontab("RANK", "* * 9-11,13-15 1-5"), ntesQuote.setCrontab("FU", "* * 9-11,13-15 1-5"), ntesQuote.setCrontab("HK", "* * 10-11,13-16 1-5"), ntesQuote.setCrontab("US", "*/10 * 21-23,0-5 1-6"), ntesQuote.setCrontab("FG", "* */15 * *"), ntesQuote.setCrontab("USUD", "* */2 21-23,0-5 1-6"), ntesQuote.addBeforeHandler("decode", function(e, t, n, o) {
        if (o) {
            var i = t.attr;
            if (i) {
                var r = o[i];
                r && (o[i] = decodeURIComponent(r))
            }
        }
    }), ntesQuote.addBeforeHandler("arrow", function(e, t, n, o) {
        if (o) {
            var i = t.attr;
            if (i) {
                var r = t._arrowby;
                if (r) {
                    var a = o[r];
                    a && (o[i] = 0 < a ? "\u2191" : a < 0 ? "\u2193" : "\u3000")
                }
            }
        }
    }),
    function(e, t, c) {
        ntesQuote.addFormatHandler("hstrend", function(e, t, n, o) {
            if (o) {
                var i = ntesQuote.getPreQuote(e);
                if (i) {
                    var r = t._arrowby;
                    if (r) {
                        var a = o[r];
                        if (a) {
                            var s = i[r];
                            if (s) {
                                n.innerHTML = s < a ? "\u2191" : a < s ? "\u2193" : "\u3000", n.className = ntesQuote.cssColor(a - s);
                                var l = 1 * (t.timeout || 1500);
                                window.setTimeout(function() {
                                    n.innerHTML = "\u3000", n.className = ""
                                }, l)
                            }
                        }
                    }
                }
            }
        }), ntesQuote.addFormatHandler("table", function(e, t, n, o) {
            if (o) {
                var i = ntesQuote.find({
                    parent: n,
                    tag: "th",
                    attr: ntesQuote.minorMark
                });
                if (i && 0 != i.length) {
                    for (var r = [], a = 0; a < i.length; a++) {
                        var s = ntesQuote.toMeta(i[a].getAttribute(ntesQuote.minorMark));
                        s.link && (s.sign = t.sign || ""), r.push(s)
                    }
                    var l = n.getElementsByTagName("tbody")[0],
                        c = ntesQuote.find({
                            parent: l,
                            tag: "tr"
                        });
                    for (a = 0; a < c.length && a < o.list.length; a++)
                        for (var u = o.list[a], d = 0; d < r.length; d++) ntesQuote.defaultElementRender(null, r[d], c[a].cells[d], u)
                }
            }
        }), ntesQuote.addFormatHandler("time", function(e, t, n, o) {
            if (o) {
                var i = t.attr;
                if (i) {
                    var r = o[i];
                    if (r) {
                        var a = new Date(r),
                            s = t.timefmt.replace("yyyy", a.getFullYear()).replace("MM", a.getMonth() + 1).replace("dd", a.getDate()).replace("HH", a.getHours()).replace("mm", a.getMinutes()).replace("ss", a.getSeconds());
                        n.innerHTML = s
                    }
                }
            }
        }), ntesQuote.addFormatHandler("rankmainpage", function(e, t, n, o) {
            if (o) {
                var i = ntesQuote.find({
                    parent: n,
                    tag: "th",
                    attr: ntesQuote.minorMark
                });
                if (i && 0 != i.length) {
                    for (var r = [], a = 0, s = i.length; a < s; a++) {
                        var l = ntesQuote.toMeta(i[a].getAttribute(ntesQuote.minorMark));
                        r.push(l)
                    }
                    var c = n.getElementsByTagName("tbody")[0],
                        u = ntesQuote.find({
                            parent: c,
                            tag: "tr"
                        }),
                        d = o.list || o.LIST;
                    for (a = 0; a < u.length && a < d.length; a++) {
                        for (var f = d[a], h = 0, p = r.length; h < p; h++) "none" != r[h].attr && ntesQuote.defaultElementRender(null, r[h], u[a].cells[h], f);
                        if (f.uvsnews && 0 < f.uvsnews.length) {
                            if (url = f.uvsnews[0].url, title = f.uvsnews[0].title, url) {
                                var m = u[a].cells[1].innerHTML;
                                m = ntesQuote.formatString("<div>{0}<a target='_blank' href='{1}' title='{2}' class='stock-news'></a></div>", m, url, title), u[a].cells[1].innerHTML = m
                            }
                        } else if (f.announmt && 0 < f.announmt.length && (announmtid = f.announmt[0].announmtid, announmt2 = f.announmt[0].announmt2, announmtid)) {
                            m = u[a].cells[1].innerHTML;
                            m = ntesQuote.formatString('<div>{0}<a target="_blank" href="http://quotes.money.163.com/f10/ggnr_{1},{2}.html" title="{3}" class="stock-notice"></a></div>', m, f.symbol, announmtid, announmt2), u[a].cells[1].innerHTML = m
                        }
                    }
                }
            }
        }), ntesQuote.addFormatHandler("pic_updown", function(e, t, n, o) {
            if (o) {
                var i = 0 < o.updown ? "up" : o.updown < 0 ? "down" : "";
                c.removeClass(n, "up"), c.removeClass(n, "down"), c.addClass(n, i)
            }
        }), ntesQuote.addFormatHandler("profitrate", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.hold || 0,
                    r = 1 * t.cost || 0,
                    a = 1 * t.actualProfit || 0,
                    s = 1 * t.totalBuySpendBalance || 0;
                if (0 == (1 * t.recordcount || 0) || 0 == s) n.innerHTML = "--";
                else {
                    var l = i * (o.price - r),
                        c = s && 100 * (l + a) / s || 0;
                    n.innerHTML = c.toFixed(2) + "%", n.className = 0 < c ? "upFontColor" : c < 0 ? "downFontColor" : ""
                }
            }
        }), ntesQuote.addFormatHandler("fnProfitrate", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.t || 0,
                    r = 1 * t.hold || 0,
                    a = 1 * t.cost || 0;
                t.actual;
                if (0 == (1 * t.recordcount || 0)) n.innerHTML = "--";
                else {
                    var s = r * (o.price - a),
                        l = i && s / i || 0;
                    n.innerHTML = (100 * l).toFixed(2) + "%", n.className = 0 < l ? "upFontColor" : l < 0 ? "downFontColor" : ""
                }
            }
        }), ntesQuote.addFormatHandler("profit", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.hold || 0,
                    r = 1 * t.cost || 0,
                    a = 1 * t.recordcount || 0,
                    s = i * (o.price - r);
                0 == a ? n.innerHTML = "--" : (n.innerHTML = c.finc_format(s, 2), n.className = 0 < s ? "upFontColor" : s < 0 ? "downFontColor" : "", !isNaN(s) && n.setAttribute("title", s.toFixed(2) + "\u5143"))
            }
        }), ntesQuote.addFormatHandler("vb", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.nav || 0;
                if (0 != i) {
                    var r = -(i - o.price) / o.price;
                    0 == r ? n.innerHTML = "--" : (n.innerHTML = c.finc_format(100 * r, 2) + "%", n.className = 0 < r ? "upFontColor" : r < 0 ? "downFontColor" : "", !isNaN(r) && n.setAttribute("title", r.toFixed(2)))
                }
            }
        }), ntesQuote.addFormatHandler("cje", function(e, t, n, o) {
            if (o) {
                var i = 1 * o.turnover || 0;
                n.innerHTML = 0 == i ? "--" : c.finc_format(i, 2)
            }
        }), ntesQuote.addFormatHandler("holdprice", function(e, t, n, o) {
            if (o) {
                var i = o.price,
                    r = ntesQuote.find({
                        parent: n.parentNode.parentNode,
                        css: "hold-amount"
                    })[0].innerHTML;
                !isNaN(i * r) && (n.title = i * r), n.innerHTML = isNaN(i * r) ? "--" : c.finc_format(i * r, 2)
            }
        }), ntesQuote.addFormatHandler("fnProfit", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.hold || 0,
                    r = 1 * t.cost || 0,
                    a = 1 * t.actual || 0,
                    s = 1 * t.recordcount || 0,
                    l = i * (o.price - r) + a;
                0 == s ? n.innerHTML = "--" : (n.innerHTML = c.finc_format(l, 2), n.className = 0 < l ? "upFontColor" : l < 0 ? "downFontColor" : "", !isNaN(l) && n.setAttribute("title", l.toFixed(2) + "\u5143"))
            }
        }), ntesQuote.addFormatHandler("fn_jryke", function(e, t, n, o) {
            if (o) {
                var i = (1 * t.hold || 0) * (1 * o.updown || 0);
                0 == (1 * t.recordcount || 0) ? n.innerHTML = "--" : (n.innerHTML = c.finc_format(i, 2), n.className = 0 < i ? "upFontColor" : i < 0 ? "downFontColor" : "", !isNaN(i) && n.setAttribute("title", i.toFixed(2) + "\u5143"))
            }
        }), ntesQuote.addFormatHandler("hsl", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.scstc27 || 0,
                    r = 1 * o.volume || 0;
                if (0 == i) n.innerHTML = "--";
                else {
                    var a = r / (100 * i);
                    a = c.finc_format(a, 2), n.innerHTML = c.finc_format(a, 2) + "%", !isNaN(a) && n.setAttribute("title", a.toFixed(2) + "\u5143")
                }
            }
        }), ntesQuote.addFormatHandler("syl", function(e, t, n, o) {
            if (o) {
                var i = 1 * t.mfsum || 0,
                    r = 1 * o.price || 0;
                if (0 == i) n.innerHTML = "--";
                else {
                    var a = r / i;
                    a = c.finc_format(a, 2), n.innerHTML = c.finc_format(a, 2), !isNaN(a) && n.setAttribute("title", a.toFixed(2))
                }
            }
        }), ntesQuote.addFormatHandler("turnover-cut", function(e, t, n, o) {
            if (o && o[t.attr]) {
                var i = o[t.attr],
                    r = o.updown;
                1e8 < Math.abs(i) ? n.innerHTML = (i / 1e8).toFixed(2) + "\u4ebf" : 1e4 < Math.abs(i) ? n.innerHTML = (i / 1e4).toFixed(2) + "\u4e07" : n.innerHTML = i;
                var a = n.className;
                n.className = a.replace(/upFontColor|downFontColor/, "") + (0 < r ? " upFontColor" : " downFontColor")
            }
        })
    }(0, ntesQuote.prototype, ntesQuoteDataUtils),
    function(_) {
        if (!this.bowlder) {
            Object.create || (Object.create = function(e) {
                var t = function() {};
                return t.prototype = e, new t
            });
            var x = this.bowlder = function(e, t) {
                return e && g(e) ? p(e) ? new ne(/^\s*</.test(e) ? D.create(e).childNodes : d.cssQuery(e, t)) : k(e) || g(e.nodeType) || re(e) ? new ne(e) : ($(e) && x.ready(e), e) : new ne([])
            };
            this.$$ || (this.$$ = x), x.ver = "0.9", x.cb = {
                counter: 0
            };
            var o = "object" == typeof performance ? performance.timing.connectStart : +new Date,
                i = {
                    connectStart: o
                },
                r = {};
            x.bench = {
                mark: function(e) {
                    var t = +new Date;
                    if (e) {
                        r[e] || (r[e] = ee.defer());
                        var n = {
                            duration: t - i.connectStart,
                            interval: t - o,
                            stamp: t
                        };
                        setTimeout(function() {
                            n.lag = (+new Date - t) / 100, r[e].resolve(V(n, i), !0)
                        }, 100)
                    }
                    return o = t, r[e]
                },
                get: function(e) {
                    return e ? (r[e] || (r[e] = ee.defer()), r[e].promise) : x.ready().then(function() {
                        return x.ready(x.rootWidget.find())
                    }).then(function() {
                        var n = {};
                        return T(r, function(e, t) {
                            n[t] = e.promise
                        }), ee.all(n)
                    })
                }
            };
            var t = 0,
                n = Object.prototype.toString,
                l = [].slice;
            Function.prototype.bind && "function" == typeof x.bind(this) || (Function.prototype.bind = function() {
                if (!arguments.length) return this;
                var e = this,
                    t = l.call(arguments),
                    n = t.shift();
                return function() {
                    return e.apply(n, t.concat(l.call(arguments)))
                }
            });
            var T = x.each = function(e, t, n) {
                    var o, i = typeof e;
                    if (e)
                        if ("string" == i && (e = d.incArray(e)), "function" == i)
                            for (o in e) "prototype" == o || "length" == o || "name" == o || e.hasOwnProperty && !e.hasOwnProperty(o) || t.call(n, e[o], o);
                        else if (de(e))
                        for (o = 0; o < e.length; o++) g(e[o]) && t.call(n, e[o], o);
                    else if ("object" == i)
                        for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o);
                    return e
                },
                g = x.isDefined = function(e) {
                    return void 0 !== e
                },
                f = x.isObject = function(e) {
                    return null != e && "[object Object]" === n.call(e) && !g(e.nodeType)
                },
                h = x.isNumber = function(e) {
                    return "number" == typeof e && !isNaN(e)
                },
                $ = x.isFunction = function(e) {
                    return "[object Function]" === n.call(e)
                },
                k = x.isArray = function(e) {
                    return "[object Array]" === n.call(e)
                },
                p = x.isString = function(e) {
                    return "[object String]" === n.call(e)
                };
            T("File RegExp Boolean".split(/ /), function(t) {
                x["is" + t] = function(e) {
                    return n.call(e) === "[object " + t + "]"
                }
            }), x.async = function(e) {
                var o = ee.defer(),
                    i = e(),
                    r = function(e) {
                        var t = i.next(e);
                        if (t.done) o.resolve(t.value);
                        else {
                            var n = t.value;
                            $(n) ? n(r) : (f(n) && $(n.then) || (n = x.Promise.resolve(n)), n.then(r))
                        }
                    };
                return r(), o.promise
            };
            var a = {};
            T("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom".split(/ /), function(e) {
                a[e] = !0
            });
            var j = function(e) {
                    return p(e) ? e.toLowerCase() : e
                },
                m = function(e) {
                    return p(e) ? e.toUpperCase() : e
                },
                s = {};
            T("selected checked disabled readOnly readonly required open autofocus controls autoplay compact loop defer multiple".split(" "), function(e) {
                s[e] = 1
            });
            var c = {
                    class: function(e, t) {
                        "className" in e ? e.className = t || "" : e.setAttribute("class", t)
                    },
                    for: function(e, t) {
                        "htmlFor" in e ? e.htmlFor = t : e.setAttribute("for", t)
                    },
                    style: function(e, t) {
                        e.style ? e.style.cssText = t : e.setAttribute("style", t)
                    },
                    value: function(e, t) {
                        e.value = null != t ? t : ""
                    }
                },
                u = j(navigator.userAgent),
                w = parseInt((/msie (\d+)/.exec(u) || [])[1], 10);
            isNaN(w) && (w = parseInt((/trident\/.*; rv:(\d+)/.exec(u) || [])[1], 10));
            var A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 30)
                },
                d = x.utils = {
                    msie: w,
                    rAF: A,
                    camelCase: he,
                    cssQuery: function(e, t) {
                        if (!x.needPolyfill) {
                            if (t = t || document, !g(t.nodeType) && t[0] && (t = t[0]), !g(t.nodeType) || !p(e)) return [];
                            var n, o = t != document;
                            o ? (e = e.replace(/(^\s*|,\s*)/g, "$1#__bowlder__ "), n = t.id, t.id = "__bowlder__") : e = e.replace(/(^\s*|,\s*)>/g, "$1body>");
                            var i = l.call(t.querySelectorAll(e));
                            return o && (n ? t.id = n : t.removeAttribute("id")), i
                        }
                        alert("polyfill's not ready.")
                    },
                    incArray: function(e, t, n) {
                        var o = [],
                            i = "push";
                        if (p(e)) {
                            var r = e.split(".."),
                                a = r.length;
                            e = parseInt(r[0], 10), t = parseInt(r[a - 1], 10), n = Math.abs(3 == a ? parseInt(r[1], 10) : 1)
                        }
                        if (!isNaN(n) && n || (n = 1), isNaN(e) || isNaN(t)) return o;
                        t < e && (i = e, e = t, t = i, i = "unshift");
                        for (var s = e; s <= t; s += n) o[i](s);
                        return o
                    }
                },
                v = /[;\s]+/,
                b = {},
                y = {},
                N = {},
                C = {},
                S = {
                    tfoot: "table",
                    thead: "table",
                    tbody: "table",
                    tr: "tbody",
                    th: "tr",
                    td: "tr",
                    option: "select"
                },
                D = x.dom = {
                    _fixe: function(t) {
                        var e = ["clientX", "clientY", "pageX", "pageY"];
                        if (t.touches) switch (t.type) {
                            case "touchstart":
                                T(e, function(e) {
                                    t[e] = t.touches[0][e]
                                });
                                break;
                            case "touchend":
                            case "touchmove":
                                T(e, function(e) {
                                    t[e] = t.changedTouches[0][e]
                                })
                        }
                        return t
                    },
                    _on: function(e, t, n, o) {
                        e.addEventListener(t, n, o || !1)
                    },
                    _off: function(e, t, n, o) {
                        e.removeEventListener(t, n, o || !1)
                    },
                    _idname: "_b$id",
                    _nodeId: function(e) {
                        return e[D._idname] || (e[D._idname] = ++t)
                    },
                    addClass: function(e, t) {
                        H.add(e, t)
                    },
                    toggleClass: function(e, t) {
                        H.toggle(e, t)
                    },
                    removeClass: function(e, t) {
                        H.remove(e, t)
                    },
                    hasClass: function(e, t) {
                        return H.contains(e, t)
                    },
                    hasRole: function(e, t) {
                        return !!(e && e.getAttribute && t) && -1 < (e.getAttribute("ne-role") || "").split(/\s+/).indexOf(t)
                    },
                    parent: function(e, t, n) {
                        var o;
                        if (t)
                            for (var i = d.cssQuery(t); e.parentNode && 1 == e.parentNode.nodeType;) {
                                if (e = e.parentNode, ~i.indexOf(e)) {
                                    o = e;
                                    break
                                }
                                if (!n) break
                            } else o = e.parentNode;
                        return o
                    },
                    delegate: function(o, n, i, r) {
                        if (f(i)) T(i, function(e, t) {
                            D.delegate(o, n, t, e)
                        });
                        else if ($(i)) D.bind(o, n, i);
                        else if (p(i)) {
                            var e = D._nodeId(o),
                                a = y[e] || (y[e] = {});
                            T(n.split(v), function(e) {
                                if (e) {
                                    var t = a[e];
                                    if (!t) {
                                        t = a[e] = {};
                                        var n = le(function(e) {
                                            (function(n, e) {
                                                for (var o, i = n.target, r = this, a = {}, t = function(e, t) {
                                                        a[t] || (a[t] = d.cssQuery(t, r)), -1 < a[t].indexOf(i) && T(e, function(e) {
                                                            n.currentTarget = i, !1 !== o && (o = e.call(i, n))
                                                        })
                                                    }; i && i != r;) {
                                                    if (T(e, t), !1 === o || -1 === o) {
                                                        n.preventDefault(), -1 === o && n.stopPropagation();
                                                        break
                                                    }
                                                    i = i.parentNode
                                                }
                                            }).call(o, e, t)
                                        }, w < 9 ? o : "");
                                        D._on(o, e, n)
                                    }
                                    if (t[i]) {
                                        if (-1 < t[i].indexOf(r)) return
                                    } else t[i] = [];
                                    t[i].push(r)
                                }
                            })
                        } else $(r) && D.bind(o, n, r)
                    },
                    undelegate: function(n, o, i, r) {
                        if (f(i)) T(i, function(e, t) {
                            D.undelegate(n, o, t, e)
                        });
                        else if (p(i)) {
                            var e = D._nodeId(n),
                                a = y[e] || (y[e] = {});
                            T(o.split(v), function(e) {
                                if (e) {
                                    var t = a[e];
                                    if (t[i]) {
                                        for (var n = 0; n < t[i].length; n++)
                                            if (t[i][n] == r) {
                                                t[i].splice(n, 1);
                                                break
                                            } 0 === t[i].length && delete t[i]
                                    }
                                }
                            })
                        } else $(i) ? D.unbind(n, o, i) : $(r) && D.unbind(n, o, r)
                    },
                    bind: function(o, e, t, i) {
                        if ($(t)) {
                            var r = D._nodeId(o);
                            t = le(t, w < 9 ? o : "");
                            var a = b[r] || (b[r] = {});
                            T(e.split(v), function(n) {
                                if (n = p(n) && n.split(".")[0]) {
                                    if (a[n]) {
                                        if (-1 < a[n].indexOf(t)) return
                                    } else a[n] = [];
                                    if (a[n].push(t), D._on(o, n, t, i), N[n]) {
                                        var e = C[r] || (C[r] = {});
                                        e[n] || (e[n] = N[n].call(o, function(e, t) {
                                            D.trigger(t || o, n, !!t, e)
                                        }) || !0)
                                    }
                                }
                            })
                        }
                    },
                    unbind: function(n, e, o, i) {
                        var t = n[D._idname];
                        if (t && p(e)) {
                            var r = b[t];
                            r && (o ? (o = le(o, w < 9 ? n : ""), T(e.split(v), function(e) {
                                if ((e = p(e) && e.split(".")[0]) && k(r[e])) {
                                    D._off(n, e, o, i);
                                    for (var t = 0; t < r[e].length; t++) r[e][t] == o && r[e].splice(t--, 1)
                                }
                            })) : T(e.split(v), function(t) {
                                (t = p(t) && t.split(".")[0]) && (T(r[t], function(e) {
                                    D._off(n, t, e, i)
                                }), delete r[t])
                            }))
                        }
                    },
                    before: function(e, t) {
                        return p(e) && (e = D.create(e)), t && t.parentNode && t.parentNode.insertBefore(e, t), e
                    },
                    after: function(e, t) {
                        if (p(e) && (e = D.create(e)), t && t.parentNode) {
                            var n = t.parentNode,
                                o = t.nextSibling;
                            o ? n.insertBefore(e, o) : n.appendChild(e)
                        }
                        return e
                    },
                    replace: function(e, t) {
                        return p(e) && (e = D.create(e)), t && t.parentNode && t.parentNode.replaceChild(e, t), e
                    },
                    trigger: function(e, t, n, o) {
                        var i = document.createEvent("MouseEvents");
                        i.initEvent(t, !g(n) || !!n, !1), f(o) && x.extend(i, o), e.dispatchEvent(i)
                    },
                    show: function(e) {
                        e.style.display = e.olddisplay || "", "none" == ae(e, "display") && (e.style.display = "block")
                    },
                    hide: function(e) {
                        var t = e.olddisplay || ae(e, "display");
                        e.olddisplay = "none" == t || "block" == t ? "" : t, e.style.display = "none"
                    },
                    toggle: function(e) {
                        D["none" == D.css(e, "display") ? "show" : "hide"](e)
                    },
                    css: function(n, e, t) {
                        if (p(e)) {
                            var o = he(e);
                            if (-1 < e.indexOf(":")) n.style.cssText += ";" + e;
                            else {
                                if (!g(t)) {
                                    if (pe(o)) t = ae(n, o);
                                    else {
                                        if (/scroll/.test(e) && (re(n) || 9 == n.nodeType)) return document.body[e] || document.documentElement[e];
                                        9 == n.nodeType && (n = n.documentElement), t = n[o]
                                    }
                                    return g(t) ? t : ""
                                }
                                se(n, o, t)
                            }
                        } else if (f(e)) {
                            var i, r = {};
                            if (T(e, function(e, t) {
                                    if (X.test(t)) return !isNaN(e) && e && (0 === t.indexOf("translate") || 0 === t.indexOf("persipective") ? e += "px" : 0 === t.indexOf("rotate") && (e += "deg")), i = !0, void(r[t] = t + "(" + e + ")");
                                    pe(t = he(t)) ? se(n, t, e) : n[t] = e
                                }), i) {
                                var a, s = n.style[he(R)];
                                if (s)
                                    for (var l = /(\S+)\s*(\(.*?\))/g; null != (a = l.exec(s));) {
                                        var c = a[1];
                                        g(r[c]) || (r[c] = c + a[2])
                                    }
                                var u = [];
                                T(r, function(e) {
                                    u.push(e)
                                }), n.style[he(R)] = u.join(" ")
                            }
                        }
                    },
                    val: function(e, t) {
                        if ("input" == j(e.tagName)) {
                            var n = j(e.getAttribute("type"));
                            if ("checkbox" == n) return D.attr(e, "checked", t);
                            if ("radio" == n) return g(t) ? e.value = t : e.value
                        }
                        var o = x.widget(e);
                        return o ? o.val(t) : g(t) ? void(e.value = t) : e.value
                    },
                    stop: function(e) {
                        e.startTime = 0
                    },
                    pause: function(e) {
                        var t = e._pause;
                        t && (e._pause = null, t())
                    },
                    animate: function(i, n, o, e, t, r) {
                        if (i && n) {
                            if ($(n)) return n(i).play(o, e).then(t);
                            $(o) && (t = o, o = e = _), $(e) && (t = e, e = _), o = "number" == typeof o ? o : K.speeds[o] || K.speeds.normal, r && (r = parseFloat(r) / 1e3);
                            var a = x.conf("easeFns"),
                                s = a[e] || a.linear;
                            1 < o && D.pause(i);
                            var l, c, u, d = {},
                                f = {},
                                h = new Date,
                                p = !1,
                                m = !1,
                                v = !1;
                            if (o === _ && (o = K.speeds.normal), r === _ && (r = 0), "string" == typeof n) v = !0, d[B] = n, d[z] = o / 1e3 + "s", d[W] = r + "s", d[Y] = e || "linear";
                            else {
                                var g = [];
                                T(n, function(e, t) {
                                    K.off || o <= 1 || !pe(he(t)) || k(e) ? (m = !0, f[t] = k(e) || o <= 1 ? e : [D.css(i, t), e]) : (v = !0, d[t] = e, X.test(t) ? u = !0 : g.push(j(t.replace(/^ms([A-Z])/, "-ms-$1").replace(/(^|[a-z])([A-Z])/g, "$1-$2"))))
                                }), v && (u && g.push(R), d[q] = g.join(", "), d[F] = o / 1e3 + "s", d[U] = r + "s", d[Q] = e || "linear")
                            }
                            var w = function(n) {
                                    var o = {};
                                    T(f, function(e, t) {
                                        o[t] = G(e, s(n))
                                    }), D.css(i, o)
                                },
                                b = function() {
                                    p || (p = !0, K.off || D.css(i, J), t && t.call(i), i._pause = null)
                                };
                            if (0 <= o && o <= 1) w(o);
                            else {
                                if (m) {
                                    var y = function() {
                                        var e = new Date - h;
                                        e < o ? (w(e / o), l || A(y)) : (w(1), b())
                                    };
                                    y()
                                } else c = setTimeout(function() {
                                    b()
                                }, o + 10);
                                v && (i.clientLeft, D.css(i, d)), i._pause = function() {
                                    if (l = !0, !K.off) {
                                        var e = new Date - h,
                                            t = Math.min(e / o, 1);
                                        D.css(i, J), D.animate(i, n, t)
                                    }
                                    c && clearTimeout(c)
                                }
                            }
                        }
                    },
                    fadeToggle: function(e) {
                        return D["none" == e.style.display ? "fadeIn" : "fadeOut"].call(D, arguments)
                    },
                    fadeIn: function(e, t, n, o) {
                        if (!D.data(e, "_b$fadeIn")) {
                            D.data(e, "_b$fadeIn", 1);
                            var i = ae(e, "opacity");
                            $(t) && (o = t, t = null), $(n) && (o = n, n = null), D.animate(e, {
                                opacity: "show"
                            }, t, n, function() {
                                D.data(e, "_b$fadeIn", 0), se(e, "opacity", i), $(o) && o()
                            })
                        }
                    },
                    fadeOut: function(e, t, n, o) {
                        if (!D.data(e, "_b$fadeOut")) {
                            D.data(e, "_b$fadeOut", 1);
                            var i = ae(e, "opacity");
                            $(t) && (o = t, t = null), $(n) && (o = n, n = null), D.animate(e, {
                                opacity: "hide"
                            }, t, n, function() {
                                D.data(e, "_b$fadeOut", 0), se(e, "opacity", i), D.hide(e), $(o) && o()
                            })
                        }
                    },
                    slideToggle: function(e) {
                        D["none" == e.style.display ? "slideDown" : "slideUp"].call(D, arguments)
                    },
                    slideUp: function(e, t, n, o) {
                        if (!D.data(e, "_b$fadeUp")) {
                            D.data(e, "_b$fadeUp", 1);
                            var i = {
                                    height: e.style.height,
                                    paddingTop: e.style.paddingTop,
                                    paddingBottom: e.style.paddingBottom
                                },
                                r = {
                                    overflow: ["hidden", e.style.overflow],
                                    height: "hide",
                                    paddingTop: 0,
                                    paddingBottom: 0
                                };
                            $(t) && (o = t, t = null), $(n) && (o = n, n = null), D.animate(e, r, t, n, function() {
                                D.data(e, "_b$fadeUp", 0), D.hide(e), D.css(e, i), $(o) && o()
                            })
                        }
                    },
                    slideDown: function(e, t, n, o) {
                        if (!D.data(e, "_b$fadeDown")) {
                            D.data(e, "_b$fadeDown", 1);
                            var i = {
                                    overflow: e.style.overflow,
                                    height: e.style.height,
                                    paddingTop: e.style.paddingTop,
                                    paddingBottom: e.style.paddingBottom
                                },
                                r = {
                                    height: "show",
                                    paddingTop: ae(e, "paddingTop"),
                                    paddingBottom: ae(e, "paddingBottom")
                                };
                            $(t) && (o = t, t = null), $(n) && (o = n, n = null), D.css(e, {
                                overflow: "hidden",
                                paddingTop: 0,
                                paddingBottom: 0
                            }), D.animate(e, r, t, n, function() {
                                D.data(e, "_b$fadeDown", 0), D.css(e, i), $(o) && o()
                            })
                        }
                    },
                    data: function(e, t, n) {
                        if (!e || !1 !== t) return g(t) ? !g(n) && p(t) ? e && me(e)[t] : e ? f(t) ? V(me(e), t) : me(e)[t] = n : void 0 : e && me(e);
                        e[D._idname] && delete me[e[D._idname]]
                    },
                    attr: function(n, e, t) {
                        if (!n || !n.nodeType) return null;
                        if (e = j(e), s[e]) {
                            if (!g(t)) return !!n[e];
                            p(t) && "false" == t && (t = !1), n[e] = !!t, t ? n.setAttribute(e, e) : n.removeAttribute(e)
                        } else if (g(t)) c[e] ? c[e](n, t) : n.setAttribute(e, t);
                        else {
                            if (!f(e)) return n.getAttribute(e, 2);
                            T(e, function(e, t) {
                                D.attr(n, t, e)
                            })
                        }
                    },
                    _create: function(e, t) {
                        var n = document.createElement(e);
                        return n.innerHTML = t, n
                    },
                    create: function(e, t) {
                        if (!t && /^\w+$/.test(e)) return document.createElement(e);
                        var n;
                        /<(\w+)/.test(e) ? n = D._create(S[j(RegExp.$1)] || "div", e) : (n = O).innerHTML = e;
                        for (var o = document.createDocumentFragment(), i = n.firstChild; i;) o.appendChild(i), i = n.firstChild;
                        return o
                    },
                    remove: function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    },
                    pos: function(e, t) {
                        var n = {
                                left: 0,
                                top: 0
                            },
                            o = document.body;
                        if (e && !e.nodeType && (e = e[0]), !e || 1 !== e.nodeType) return n;
                        if (n.left = e.offsetLeft, n.top = e.offsetTop, !0 !== t)
                            for (; e;) {
                                if ("fixed" == D.css(e, "position")) {
                                    var i = e.offsetParent || o;
                                    n.left += i != o ? i.scrollLeft : i.scrollLeft || document.documentElement.scrollLeft, n.top += i != o ? i.scrollTop : i.scrollTop || document.documentElement.scrollTop
                                }
                                if (!(e = e.offsetParent) || e == t) break;
                                n.left += e.offsetLeft, n.top += e.offsetTop
                            }
                        return n
                    }
                };
            if (w <= 9) {
                var L = {
                    tr: ["<table><tbody><tr>", "</tr></tbody></table>", 3],
                    tbody: ["<table><tbody>", "</tbody></table>", 2],
                    thead: ["<table><thead>", "</thead></table>", 2],
                    table: ["<table>", "</table>", 1],
                    select: ["<select>", "</select>", 1]
                };
                D._create = function(e, t) {
                    var n = L[e],
                        o = document.createElement(n ? "div" : e);
                    if (o.innerHTML = (n ? n[0] : "") + t + (n ? n[1] : ""), n)
                        for (var i = 0; i < n[2]; i++) o = o.firstChild;
                    return o
                }
            }
            var E = /(.*?)([smhd])$/,
                M = {
                    s: 1,
                    m: 60,
                    h: 3600,
                    d: 86400
                };
            x.cookie = {
                get: function(e) {
                    for (var t = document.cookie.split(/;\s*/), n = 0; n < t.length; n++) {
                        var o = t[n].split("=");
                        if (e == o[0]) try {
                            return decodeURIComponent(o[1])
                        } catch (e) {
                            return ""
                        }
                    }
                    return ""
                },
                remove: function(e, t, n) {
                    document.cookie = e + "=1; path=" + (n || "/") + (t ? "; domain=" + t : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT"
                },
                set: function(e, t, n, o, i, r, a) {
                    p(n) && E.test(n) && (n = RegExp.$1, a = RegExp.$2), n = 1e3 * (parseFloat(n) || 365) * (M[a] || M.d), document.cookie = e + "=" + encodeURIComponent(t) + (n ? "; expires=" + new Date(+new Date + n).toGMTString() : "") + (o ? "; domain=" + o : "") + "; path=" + (i || "/") + (r ? "; secure" : "")
                }
            }, x.event = function(e, t) {
                if (!t) return !!N[e];
                N[e] = t
            }, x.param = function(e) {
                var n = [];
                return T(e, function(e, t) {
                    null != e && (k(e) || (e = [e]), T(e, function(e) {
                        f(e) && (e = JSON.stringify(e)), n.push(ce(t) + "=" + ce(e))
                    }))
                }), n.join("&")
            };
            var I = d.buildUrl = function(e, t) {
                    return e + ((t = x.param(t)) ? (-1 == e.indexOf("?") ? "?" : "&") + t : "")
                },
                O = document.createElement("div"),
                H = x.classList = O.classList ? {
                    contains: function(e, t) {
                        return !(!e.classList || !e.classList.contains(t))
                    },
                    add: function(t, e) {
                        t.classList && e && T(e.toString().split(/\s+/), function(e) {
                            e && t.classList.add(e)
                        })
                    },
                    remove: function(t, e) {
                        t.classList && e && T(e.toString().split(/\s+/), function(e) {
                            e && t.classList.remove(e)
                        })
                    }
                } : {
                    check: function(e, t) {
                        return 1 === e.nodeType && "string" == typeof e.className && "object" != typeof t && null != t
                    },
                    contains: function(e, t) {
                        return this.check(e, t) && new RegExp("\\b" + t + "\\b").test(e.className)
                    },
                    add: function(e, t) {
                        this.check(e, t) && !this.contains(e, t) && (e.className = e.className.replace(/\s*$/, " " + t))
                    },
                    remove: function(e, t) {
                        this.check(e, t) && this.contains(e, t) && (e.className = e.className.replace(new RegExp("\\b" + t + "\\b\\s*", "g"), ""))
                    }
                };
            H.batch = function(e, t, n) {
                if (1 == e.nodeType) {
                    var o, i = e.className.split(/\s+/);
                    p(t) && (t = t.split(/\s+/)), p(n) && (n = n.split(/\s+/)), T(n, function(e) {
                        if (e)
                            for (; - 1 < (o = i.indexOf(e));) i.splice(o, 1)
                    }), T(t, function(e) {
                        e && -1 == i.indexOf(e) && i.push(e)
                    }), e.className = i.join(" ")
                }
            }, H.toggle = function(e, t) {
                this.contains(e, t) ? this.remove(e, t) : this.add(e, t)
            };
            var P, R, q, F, Q, U, B, z, Y, W, V = x.extend = function() {
                    var t = 1 <= arguments.length ? l.call(arguments, 0) : [],
                        n = !1;
                    "boolean" == typeof t[0] && (n = t.shift());
                    var o, i = t.shift();
                    if (i && "object" == typeof i)
                        for (; t.length;)
                            if ((o = t.shift()) && o !== i) {
                                if ($(o.then) && $(o.catch)) return o.then(function(e) {
                                    return t.unshift($(o.success) ? e.data : e), t.unshift(i), t.unshift(n), V.apply(this, t)
                                });
                                T(o, function(e, t) {
                                    n && f(e) ? V(n, i.hasOwnProperty(t) ? i[t] : i[t] = {}, e) : i[t] = n && k(e) ? l.call(e, 0) : e
                                })
                            } return i
                },
                X = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
                J = {},
                K = (T(["", "-webkit-", "-o-", "-ms-"], function(e) {
                    !g(P) && g(O.style[he(e + "transition-property")]) && (P = e, d.supportCSS3 = !0)
                }), R = P + "transform", J[q = P + "transition-property"] = J[F = P + "transition-duration"] = J[U = P + "transition-delay"] = J[Q = P + "transition-timing-function"] = J[B = P + "animation-name"] = J[z = P + "animation-duration"] = J[W = P + "animation-delay"] = J[Y = P + "animation-timing-function"] = "", {
                    off: !d.supportCSS3,
                    speeds: {
                        normal: 300,
                        fast: 200,
                        slow: 600
                    },
                    cssPrefix: P
                }),
                G = d.interpolate = function(e, o) {
                    if (!k(e)) return e;
                    var t = e.length;
                    if (0 === o || 1 == o) return e[o * (t - 1)];
                    var n = Math.floor(o * (t - 1)),
                        i = Math.min(n + 1, t - 1),
                        r = e[n],
                        a = e[i];
                    if (!/\d/.test(a.toString())) return r;
                    o = o * (t - 1) - n;
                    var s = r.toString().match(/[\-\.\d]+/g) || [],
                        l = 0;
                    return a.toString().replace(/[\-\.\d]+/g, function(e) {
                        var t = parseFloat(s[l++]) || 0,
                            n = t * (1 - o) + e * o;
                        return 10 < Math.abs(e - t) ? Math.round(n) : n
                    })
                },
                Z = {};
            x.on = function(e, t, n) {
                var o = this,
                    i = f(e) ? e : {},
                    r = o.hasOwnProperty("$msg") ? o.$msg : Z;
                return p(e) && T(e.split(/\s+/), function(e) {
                    i[e] = t
                }), T(i, function(e, t) {
                    r[t] || (r[t] = []), r[t].push(e), n && r[t].cache && e.apply(o, r[t].cache)
                }), o
            }, x.once = function(e, t, n) {
                return f(e) ? T(e, function(e) {
                    $(e) && (e.once = !0)
                }) : $(t) && (t.once = !0), x.on.call(this, e, t, n)
            }, x.off = function(e, i) {
                var n = this;
                if (f(e)) return T(e, function(e, t) {
                    x.off.call(n, e, t)
                }), this;
                var r = this.hasOwnProperty("$msg") ? this.$msg : Z;
                return r && p(e) && T(e.split(/\s+/), function(e) {
                    var t = r[e];
                    if (t)
                        if (i) {
                            for (var n = 0, o = t.length; n < o; n++)
                                if (t[n] == i) {
                                    t.splice(n, 1);
                                    break
                                }
                        } else delete r[e]
                }), this
            }, x.emit = function() {
                var i = 1 <= arguments.length ? l.call(arguments, 0) : [],
                    e = i.shift();
                if (p(e)) {
                    var r, a = this,
                        s = a.hasOwnProperty("$msg") ? a.$msg : Z;
                    s && T(e.split(/\s+/), function(e) {
                        var t = s[e] || (s[e] = []);
                        t.cache = i;
                        for (var n = 0, o = t.length; n < o && ((r = t[n]).once && t.splice(n, 1), !1 !== r.apply(a, i)); n++);
                    })
                }
            };
            var ee = x.$q = x.q = function() {
                    var c = function() {
                            var s, l = [],
                                t = {
                                    resolve: function(e, t) {
                                        if (l) {
                                            var n = l;
                                            l = _, s = r(e), T(n, function(e) {
                                                s.then(e[0], e[1], e[2])
                                            })
                                        } else t && (s = r(e))
                                    },
                                    reject: function(e) {
                                        t.resolve(n(e))
                                    },
                                    notify: function(t) {
                                        l && T(l, function(e) {
                                            e[2](t)
                                        })
                                    },
                                    promise: {
                                        then: function(t, n, o) {
                                            var i = c(),
                                                e = function(e) {
                                                    try {
                                                        i.resolve(($(t) ? t : u)(e))
                                                    } catch (e) {
                                                        i.reject(e), fe(e)
                                                    }
                                                },
                                                r = function(e) {
                                                    try {
                                                        i.resolve(($(n) ? n : d)(e))
                                                    } catch (e) {
                                                        i.reject(e), fe(e)
                                                    }
                                                },
                                                a = function(e) {
                                                    try {
                                                        i.notify(($(o) ? o : u)(e))
                                                    } catch (e) {
                                                        fe(e)
                                                    }
                                                };
                                            return l ? l.push([e, r, a]) : s.then(e, r, a), i.promise
                                        },
                                        catch: function(e) {
                                            return this.then(null, e)
                                        },
                                        finally: function(o) {
                                            function i(n, o) {
                                                return new te(function(e, t) {
                                                    o ? e(n) : t(n)
                                                })
                                            }

                                            function t(e, t) {
                                                var n = null;
                                                try {
                                                    n = (o || u)()
                                                } catch (e) {
                                                    return i(e, !1)
                                                }
                                                return n && $(n.then) ? n.then(function() {
                                                    return i(e, t)
                                                }, function(e) {
                                                    return i(e, !1)
                                                }) : i(e, t)
                                            }
                                            return this.then(function(e) {
                                                return t(e, !0)
                                            }, function(e) {
                                                return t(e, !1)
                                            })
                                        }
                                    }
                                };
                            return t
                        },
                        n = function(o) {
                            return {
                                then: function(e, t) {
                                    var n = c();
                                    try {
                                        n.resolve(($(t) ? t : d)(o))
                                    } catch (e) {
                                        n.reject(e)
                                    }
                                    return n.promise
                                }
                            }
                        };

                    function r(n) {
                        return n && $(n.then) ? n : {
                            then: function(e) {
                                var t = c();
                                return t.resolve(e(n)), t.promise
                            }
                        }
                    }

                    function u(e) {
                        return e
                    }

                    function d(e) {
                        return n(e)
                    }
                    return {
                        defer: c,
                        reject: n,
                        all: function(e) {
                            var n = c(),
                                o = 0,
                                i = k(e) ? [] : {};
                            return T(e, function() {
                                o++
                            }), T(e, function(e, t) {
                                r(e).then(function(e) {
                                    i.hasOwnProperty(t) || (i[t] = e, --o || n.resolve(i))
                                }, function(e) {
                                    i.hasOwnProperty(t) || n.reject(e)
                                })
                            }), 0 === o && n.resolve(i), n.promise
                        },
                        race: function(e) {
                            var t = c(),
                                n = 0;
                            return T(e, function() {
                                n++
                            }), T(e, function(e) {
                                r(e).then(function(e) {
                                    t.resolve(e)
                                }, function(e) {
                                    0 == --n && t.reject(e)
                                })
                            }), 0 === n && t.resolve(), t.promise
                        },
                        ref: r,
                        never: {
                            then: function() {}
                        }
                    }
                }(),
                te = x.Promise = function(e) {
                    var t = ee.defer();
                    return $(e) && e(t.resolve, t.reject), t.promise
                };
            te.all = ee.all, te.race = ee.race, te.reject = ee.reject, te.resolve = function(e) {
                var t = ee.defer();
                return t.resolve(e), t.promise
            }, x.ajax = function() {
                var t = /^\s*(\[|\{[^\{])/,
                    n = /[\}\]]\s*$/,
                    e = {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    a = u.defaults = {
                        transformResponse: [function(e) {
                            return p(e) && t.test(e) && n.test(e) && (e = JSON.parse(e, !0)), e
                        }],
                        transformRequest: [function(e) {
                            return !k(e) && !f(e) || x.isFile(e) ? e : JSON.stringify(e)
                        }],
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            post: V({}, e),
                            put: V({}, e),
                            patch: V({}, e)
                        }
                    },
                    c = function(m) {
                        return function(e, t, n, o, i, r, a) {
                            var s, l, c = re(this) ? this : window;
                            if ("REQUIRE" == e) v(t, function(e) {
                                p(o, e || 200)
                            }, i);
                            else if ("JSONP" == e) {
                                var u = "_" + (m.counter++).toString(36),
                                    d = m[u] = function(e) {
                                        d.datas || (d.datas = []), d.datas.push(e)
                                    };
                                if (/callback=(\w+)/.test(t)) {
                                    var f = RegExp.$1;
                                    "CALLBACK" != f && (d = c[f] || (c[f] = m[u]))
                                }
                                v(t.replace("CALLBACK", "bowlder.cb." + u), function() {
                                    var e = d.datas && d.datas.shift();
                                    g(e) ? p(o, 200, e) : p(o, s || -2), delete m[u]
                                }, i)
                            } else {
                                var h = -1 != t.indexOf("//") && -1 == t.indexOf(location.host + "/");
                                (l = function(e) {
                                    return w <= 6 ? new this.ActiveXObject("Microsoft.XMLHTTP") : w < 10 && "PATCH" === e ? new this.XDomainRequest : new this.XMLHttpRequest
                                }.call(c, h ? "PATCH" : e)).open(e, t, !0), T(i, function(e, t) {
                                    "withCredentials" == t ? l.withCredentials = e : g(e) && l.setRequestHeader && l.setRequestHeader(t, e)
                                }), w < 10 && h ? (l.onload = function() {
                                    p(o, 200, -1 !== s ? l.response || l.responseText : null, null)
                                }, l.onerror = function() {
                                    p(o, l.status || -1, l.error, null)
                                }) : l.onreadystatechange = function() {
                                    if (l && 4 == l.readyState) {
                                        var e = null,
                                            t = null; - 1 !== s && (t = l.response || l.responseText, l.getAllResponseHeaders && (e = l.getAllResponseHeaders())), p(o, s || l.status, t, e)
                                    }
                                }, a && (l.responseType = a), l.send(n || null)
                            }

                            function p(e, t, n, o) {
                                l = null, e(t = 1223 == (t = 0 === t ? n ? 200 : 404 : t) ? 204 : t, n, o)
                            }
                            r.then(function() {
                                s = -1, l ? l.abort() : p(o, s)
                            })
                        };

                        function v(e, t, n) {
                            var o = w < 9 ? document.getElementsByTagName("head")[0] : document.body || document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                                i = document.createElement("script");

                            function r(e) {
                                t && t(h(e) ? e : 200), i.onreadystatechange = i.onload = i.onerror = t = null;
                                try {
                                    o.removeChild(i)
                                } catch (e) {}
                            }
                            w < 9 && (i.onreadystatechange = function() {
                                /loaded|complete/.test(i.readyState) && r()
                            }), i.onload = r, i.onerror = function() {
                                r(400)
                            }, i.charset = n && n.charset || "utf-8", i.src = e, o.appendChild(i)
                        }
                    }(x.cb),
                    s = ["GET", "REQUIRE", "JSONP"];

                function u(e) {
                    var n = {
                            transformRequest: a.transformRequest,
                            transformResponse: a.transformResponse
                        },
                        t = a.headers,
                        o = V({}, t.common, t[j(e.method)], e.headers);
                    V(n, e), n.headers = o, n.method = m(n.method) || "GET", n.url = I(n.url, n.params);
                    var i = function(n) {
                        o = n.headers;
                        var e = "";
                        return -1 < s.indexOf(n.method) && f(n.data) ? n.url = I(n.url, n.data) : e = !1 === n.processData ? n.data : r(n.data, ue(o), n.transformRequest), T(o, function(e, t) {
                                "content-type" === j(t) && (g(n.data) && o[t] || delete o[t])
                            }),
                            function(r, e, t) {
                                var n = r.url;
                                u.pendingRequests.push(r);
                                var a, s = ee.defer(),
                                    o = new te(function(o, i) {
                                        c.call(r.win, r.method, n, e, function(e, t, n) {
                                            a && clearTimeout(a), (d(e = Math.max(e, 0)) ? o : i)({
                                                data: t,
                                                status: e,
                                                headers: ue(n),
                                                config: r
                                            })
                                        }, t, s.promise, r.responseType)
                                    });

                                function i() {
                                    var e = u.pendingRequests.indexOf(r); - 1 !== e && u.pendingRequests.splice(e, 1)
                                }
                                return o.then(i, i), (o = o.then(l, l)).abort = function() {
                                    s.resolve()
                                }, $(r.beforeSend) && !1 === r.beforeSend(o, r) && o.abort(), 0 < r.timeout && (a = setTimeout(o.abort, r.timeout)), o
                            }(n, e, o)
                    }(n);
                    return i.success = function(t) {
                        return i.then(function(e) {
                            t(e.data, e.status, e.headers, n)
                        }), i
                    }, i.error = function(t) {
                        return i.then(null, function(e) {
                            t(e.data, e.status, e.headers, n)
                        }), i
                    }, i;

                    function r(t, n, e) {
                        return $(e) ? e(t, n) : (T(e, function(e) {
                            t = e(t, n)
                        }), t)
                    }

                    function l(e) {
                        var t = V(e, {
                            data: r(e.data, e.headers, n.transformResponse)
                        });
                        return d(e.status) ? t : ee.reject(t)
                    }
                }

                function d(e) {
                    return 200 <= e && e < 300
                }
                return u.pendingRequests = [], T(["get", "delete", "head", "jsonp", "require"], function(n) {
                    u[n] = function(e, t) {
                        return u(V(f(t) ? t : p(t) ? {
                            headers: {
                                charset: t
                            }
                        } : {}, {
                            win: this,
                            method: n,
                            url: e
                        }))
                    }
                }), T(["post", "put"], function(o) {
                    u[o] = function(e, t, n) {
                        return u(V(f(n) ? n : {}, {
                            win: this,
                            method: o,
                            url: e,
                            data: t
                        }))
                    }
                }), u
            }();
            var ne = function(e) {
                e ? 1 !== e.nodeType && de(e) || (e = [e]) : e = [];
                for (var t = this.length = e.length, n = 0; n < t; n++) this[n] = e[n]
            };
            x.fn = ne.prototype = {
                add: function(e) {
                    var t = this;
                    return $(e.each) ? e.each(function() {
                        t.add(this)
                    }) : t[t.length++] = e, t
                },
                eq: function(e) {
                    return this.length <= 1 ? this : new ne(this[e])
                },
                filter: function(t) {
                    var n = [];
                    if (p(t)) {
                        var o = d.cssQuery(t);
                        t = function(e) {
                            return ~o.indexOf(e)
                        }
                    }
                    return $(t) && this.each(function(e) {
                        t(e) && n.push(e)
                    }), new ne(n)
                },
                each: function(e, t) {
                    for (var n = 0, o = this.length; n < o; n++) e.call(t || this[n], this[n], n);
                    return this
                },
                parent: function(t) {
                    var n = [];
                    return this.each(function() {
                        var e = D.parent(this, t);
                        e && -1 == n.indexOf(e) && n.push(e)
                    }), x(n)
                },
                closest: function(t) {
                    var n = [];
                    return t && this.each(function() {
                        var e = D.parent(this, t, !0);
                        e && -1 == n.indexOf(e) && n.push(e)
                    }), x(n)
                },
                children: function() {
                    var t = [];
                    return this.each(function() {
                        T(this.children, function(e) {
                            t.push(e)
                        })
                    }), x(t)
                },
                html: function(e) {
                    return g(e) ? this.each(function() {
                        this.innerHTML = e
                    }) : this[0] ? this[0].innerHTML : ""
                },
                text: function(e) {
                    var t = w < 9 ? "innerText" : "textContent";
                    return g(e) ? this.each(function() {
                        this[t] = e
                    }) : this[0] ? this[0][t] : ""
                },
                hasClass: function(e) {
                    var t = !1;
                    return this.each(function() {
                        t = t || H.contains(this, e)
                    }), t
                },
                append: function(e, t) {
                    var n = this;
                    if (p(e)) e = D.create(e);
                    else if (de(e)) return T(l.call(e), function(e) {
                        n.append(e, t)
                    }), n;
                    return this.each(function() {
                        this.appendChild(t ? e.cloneNode(!0) : e)
                    })
                },
                prepend: function(e, t) {
                    var n = this;
                    if (p(e)) e = D.create(e);
                    else if (de(e)) return T(l.call(e), function(e) {
                        n.prepend(e, t)
                    }), n;
                    return this.each(function() {
                        this.insertBefore(t ? e.cloneNode(!0) : e, this.firstChild)
                    })
                },
                appendTo: function(e) {
                    return p(e) ? e = d.cssQuery(e)[0] : !e.nodeType && e[0] && (e = e[0]), e && 1 === e.nodeType ? this.each(function() {
                        e.appendChild(this)
                    }) : this
                },
                prependTo: function(e) {
                    return p(e) ? e = d.cssQuery(e)[0] : !e.nodeType && e[0] && (e = e[0]), e && 1 === e.nodeType ? this.each(function() {
                        e.insertBefore(this, e.firstChild)
                    }) : this
                },
                attr: function(t, n) {
                    return g(n) || f(t) ? this.each(function(e) {
                        D.attr(e, t, n)
                    }) : this[0] && D.attr(this[0], t)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        this.removeAttribute(e)
                    })
                },
                prop: function(e, t) {
                    return g(t) ? this.each(function() {
                        this[e] = t
                    }) : this[0] && this[0][e]
                },
                data: function(t, n) {
                    return g(n) || f(t) ? this.each(function(e) {
                        D.data(e, t, n)
                    }) : this[0] && D.data(this[0], t)
                },
                removeData: function(e) {
                    return this.each(function() {
                        delete me(this)[e]
                    })
                },
                val: function(t) {
                    var e = this[0];
                    return e ? g(t) ? T(this, function(e) {
                        D.val(e, t)
                    }) : D.val(e) : null
                },
                css: function(e, t) {
                    var n = this[0];
                    if (!n) return f(e) || g(t) ? this : null;
                    var o = D.css(n, e, t);
                    if (g(o)) return o;
                    for (var i = 1; i < this.length; i++) D.css(this[i], e, t);
                    return this
                },
                find: function(t) {
                    var n = [];
                    return T(this, function(e) {
                        T(d.cssQuery(t, e), function(e) {
                            -1 == n.indexOf(e) && n.push(e)
                        })
                    }), x(n)
                }
            }, T(["on", "off", "emit"], function(o) {
                x.fn["$" + o] = function() {
                    var n = 1 <= arguments.length ? l.call(arguments, 0) : [];
                    return this.each(function() {
                        var e = x.widget(this),
                            t = D.plugin(this);
                        e && e[o].apply(e, n), t && t.then(function(e) {
                            $(e["$" + o]) && e["$" + o].apply(e, n)
                        })
                    })
                }
            }), T(["addClass", "removeClass", "toggleClass", "delegate", "undelegate", "bind", "unbind", "remove", "show", "hide", "toggle", "trigger", "animate", "stop", "pause", "fadeIn", "fadeOut", "fadeToggle", "slideUp", "slideDown", "slideToggle"], function(t) {
                x.fn[t] = function() {
                    var e = 1 <= arguments.length ? l.call(arguments, 0) : [];
                    return this.each(function() {
                        D[t].apply(D, [this].concat(e))
                    })
                }
            }), T(["focus", "blur", "submit"], function(e) {
                x.fn[e] = function() {
                    return this.each(function() {
                        this[e]()
                    })
                }
            }), T(["width", "height", "scrollLeft", "scrollTop"], function(n) {
                x.fn[n] = function(e) {
                    var t = this.css(n, e);
                    return g(e) || (t = parseInt(t, 10) || 0), t
                }
            }), T(["before", "after"], function(n) {
                x.fn[n] = function(e, t) {
                    return !e.nodeType && e[0] && (e = e[0]), 1 !== e.nodeType || (t ? this.each(function() {
                        D[n](e.cloneNode(!0), this)
                    }) : D[n](e, this[0])), this
                }, x.fn[he("insert-" + n)] = function(e) {
                    return !e.nodeType && e[0] && (e = e[0]), 1 !== e.nodeType ? this : this.each(function() {
                        D[n](this, e)
                    })
                }
            }), x.fn.on = x.fn.delegate, x.fn.off = x.fn.undelegate;
            var e, oe = ee.defer();
            if (x.ready = function(e, t) {
                    var n = oe.promise;
                    if ($(e)) t = e;
                    else {
                        if (!k(e)) return x.rootWidget.defer.promise;
                        var o = [];
                        T(e, function(e) {
                            o.push(e.ready())
                        }), n = ee.all(o)
                    }
                    return $(t) && n.then(function(e) {
                        try {
                            t.call(document, e)
                        } catch (e) {
                            fe(e)
                        }
                    }), n
                }, w && !this.addEventListener && (x.needPolyfill = !0, document.write('<script src="http://static.ws.126.net/f2e/modules/polyfill.js"><\/script>')), "complete" !== document.readyState) {
                if (document.addEventListener) document.addEventListener("DOMContentLoaded", ve, !1), window.addEventListener("load", ve, !1);
                else if (document.attachEvent) {
                    var ie = function() {
                        "complete" == document.readyState && ve()
                    };
                    document.attachEvent("onreadystatechange", ie), window.attachEvent("onload", ie)
                }
            } else setTimeout(ve)
        }

        function re(e) {
            return e && e.document && e.window == e
        }

        function ae(e, t) {
            if (re(e)) {
                if (e = e.document.documentElement, /^(width|height)$/.test(t)) return e[he("client-" + t)] || this[he("inner-" + t)]
            } else 9 == e.nodeType && (e = e.documentElement);
            if (w && /^(width|height)$/.test(t)) return e[he("offset-" + t)];
            if (w < 9 && "opacity" == t) {
                var n = ae(e, "filter") || "";
                return /opacity=(\d+)/.test(n) ? RegExp.$1 : 1
            }
            if (X.test(t)) {
                var o = he(R),
                    i = e.style[o];
                return i && new RegExp(t + "\\s*\\((.*?)\\)").test(i) ? RegExp.$1 : ae(e, o)
            }
            return e.currentStyle ? e.currentStyle[t] || "" : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : ""
        }

        function se(e, t, n) {
            if ((pe(t) || pe(t = he(t))) && g(n) && (!isNaN(n) || "number" != typeof n)) {
                if (w < 9 && "opacity" == t && h(n)) {
                    var o = ae(e, "filter") || "",
                        i = /alpha\([^\)]*\)/;
                    return n = "alpha(opacity=" + Math.round(100 * parseFloat(isNaN(n) ? 1 : n)) + ")", void(e.style.filter = i.test(o) ? o.replace(i, n) : n)
                }
                if ("transform" == t && (t = he(R)), X.test(t)) return !isNaN(n) && n && (0 === t.indexOf("translate") ? n += "px" : 0 === t.indexOf("rotate") && (n += "deg")), void(e.style[he(R)] = t + "(" + n + ")");
                if ("show" == n) {
                    if ("none" != ae(e, "display")) return;
                    D.show(e), n = ae(e, t), se(e, F, "0s"), se(e, t, 0), e.offsetWidth, se(e, F, "")
                } else "hide" == n && (n = 0, e.style[t] = ae(e, t), e.offsetWidth);
                isNaN(n) || !n || a[t] || (n += "px");
                try {
                    e.style[t] = n
                } catch (e) {
                    fe(e)
                }
            }
        }

        function le(n, o) {
            var e = "b$Event" + (o[D._idname] || "");
            return n[e] = n[e] || function(e) {
                var t = n.call(o || this, D._fixe(e));
                return !1 !== t && -1 !== t || e.preventDefault(), -1 === t && e.stopPropagation(), t
            }
        }

        function ce(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
        }

        function ue(a) {
            var s = f(a) ? a : _;
            return function(e) {
                var t, n, o, i, r;
                return s || (r = {}, (t = a) && T(t.split("\n"), function(e) {
                    i = e.indexOf(":"), n = j(e.substr(0, i).trim()), o = e.substr(i + 1).trim(), n && (r[n] ? r[n] += ", " + o : r[n] = o)
                }), s = r), e ? s[j(e)] || null : s
            }
        }

        function de(e) {
            if (null == e || re(e)) return !1;
            var t = e.length;
            return !(1 !== e.nodeType || !t) || (p(e) || k(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }

        function fe(e) {
            if ("undefined" != typeof console && g(console.error)) {
                if (!/firefox/i.test(u) && e instanceof Error)
                    if (e.stack) {
                        var t = e.stack;
                        e = e.message && -1 === t.indexOf(e.message) ? "Error: " + e.message + "\n" + t : t
                    } else e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line);
                console.error(e)
            }
        }

        function he(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return m(t)
            }).replace(/^Ms([A-Z])/, "ms$1")
        }

        function pe(e) {
            return "opacity" == e || X.test(e) || g(O.style[e])
        }

        function me(e) {
            var t = D._nodeId(e);
            return me[t] || (me[t] = {
                $on: x.on,
                $off: x.off,
                $emit: x.emit,
                $msg: {}
            })
        }

        function ve() {
            if (!e) {
                if (!document.body) return void setTimeout(ve, 13);
                if (x.needPolyfill) return;
                e = !0, oe.resolve()
            }
        }
    }.call(this),
    function(y, i, _) {
        if (!y.expr) {
            var l, r = {},
                s = this,
                c = function(e) {
                    return S(e) ? e.toLowerCase() : e
                },
                t = /(^|\s|[\(,;])([\w\.\[\]]+)\?(?=$|\s*[\),;])/g,
                a = function(e) {
                    return e.replace(t, "$1(typeof $2=='undefined'?null:$2)")
                },
                T = y.expr = function(t, e, n, o) {
                    try {
                        r[t] || (r[t] = i(a(t)))
                    } catch (e) {
                        throw "invalid expression: " + a(t) + "\n" + e
                    }
                    try {
                        o = r[t](e || window)
                    } catch (e) {
                        if (n || l) throw e
                    }
                    return o
                },
                u = /\s*;\s*/,
                $ = /(\\?)\{\!?\{(.+?)\}\}/,
                n = /[;\s]+/,
                k = y.utils,
                m = k.rAF,
                j = y.dom,
                d = k.msie,
                A = y.extend,
                x = [].slice,
                N = y.each,
                C = y.isObject,
                f = y.isNumber,
                S = y.isString,
                D = y.isArray,
                L = y.isFunction,
                v = y.q,
                h = y.classList,
                E = y.isDefined,
                p = y.ajax,
                g = y.Promise,
                o = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\t": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                w = function(e, t) {
                    if (D(e)) {
                        var n = e.indexOf(t);
                        ~n && e.splice(n, 1)
                    }
                };
            y.throttle = function(n, o, i) {
                if (!o) return n;
                var r, a, s, l = null,
                    c = 0,
                    u = function() {
                        c = !1 === i ? 0 : +new Date, l = null, s = n.apply(r, a), l || (r = a = null)
                    };
                return function() {
                    var e = +new Date;
                    c || !1 !== i || (c = e);
                    var t = o - (e - c);
                    return r = this, a = arguments, t <= 0 || o < t ? (l && (clearTimeout(l), l = null), c = e, s = n.apply(r, a), l || (r = a = null)) : l || (l = setTimeout(u, t)), s
                }
            }, y.debounce = function(t, n, o) {
                if (!n) return t;
                var i, r, a, s, l, c = function() {
                    var e = +new Date - s;
                    e < n && 0 <= e ? i = setTimeout(c, n - e) : (i = null, o || (l = t.apply(a, r), i || (a = r = null)))
                };
                return function() {
                    a = this, r = arguments, s = +new Date;
                    var e = o && !i;
                    return i || (i = setTimeout(c, n)), e && (l = t.apply(a, r), a = r = null), l
                }
            };
            var b = {
                    _map: {},
                    add: function(e, t) {
                        var n = b._map,
                            o = n[e] || (n[e] = []);
                        t && -1 == o.indexOf(t) && o.push(t)
                    },
                    remove: function(e, t) {
                        var n = b._map,
                            o = n[e];
                        if (D(o))
                            if (t) {
                                var i = o.indexOf(t); - 1 != i && o.splice(i, 1)
                            } else delete n[e]
                    }
                },
                M = function(t) {
                    return t ? new g(function(e) {
                        setTimeout(e, t)
                    }) : v.ref()
                };
            y.fx = function(n) {
                return n.start || (n.start = null), n.end || (n.end = null),
                    function(e, t) {
                        return A(new we(e), n, t)
                    }
            }, y.fx.add = b.add, y.fx.remove = b.remove, y.fx.play = function(e) {
                var o = [],
                    t = b._map[e];
                return t && t.length ? (N(t, function(e, t) {
                    var n = L(e.delay) ? e.delay(t) : e.delay;
                    o.push(M(n).then(function() {
                        return e.play()
                    }))
                }), v.all(o).then(function() {
                    y.fx.play(e + ".then")
                })) : v.ref()
            };
            var I = {};
            y.fx.repeat = function(e, t, n) {
                var o = [],
                    i = b._map[e];
                !i.length || f(t) && 0 == t-- || (I[e] = +new Date, N(i, function(e, t) {
                    o.push(e.play())
                }), v.all(o).then(function() {
                    I[e] && (!n && +new Date - I[e] < 25 && (n = 25), M(n).then(function() {
                        y.fx.repeat(e, t, n)
                    }))
                }))
            }, N(["pause", "stop"], function(t) {
                y.fx[t] = function(e) {
                    delete I[e], N(b._map[e], function(e) {
                        e[t]()
                    })
                }
            }), y.fx.step = function(e, n) {
                "number" != typeof n ? n = 0 : n < 0 ? n = 0 : 1 < n && (n = 1), N(b._map[e], function(e) {
                    var t;
                    L(e.step) && (t = e.fix().step(n, e.$el)), (C(t) || C(e.to)) && e.$el.animate(A(t || {}, e.to), n, e.ease), e.progress = n
                })
            }, we.prototype = {
                fix: function() {
                    if (D(this.step)) {
                        var s = this.step,
                            l = s.length,
                            c = [];
                        N(s, function(e) {
                            c.push(parseFloat(e.ratio) || 1 / l), delete e.ratio
                        }), this.step = function(e) {
                            for (var t, n = 0, o = {}, i = 0; i < l; i++) {
                                n += c[i], t = i == l - 1 || e <= n;
                                var r = s[i],
                                    a = t ? (e - n + c[i]) / c[i] : 1;
                                if (N(r, function(e, t) {
                                        o[t] = k.interpolate(e, a)
                                    }), t) return o
                            }
                        }
                    }
                    return this
                },
                play: function(e) {
                    this.fix().pause(), e = (e || this.duration) * (1 - this.progress);
                    var t, n, o, i, r, a, s, l, c, u, d = this,
                        f = d.$el,
                        h = v.defer(),
                        p = function() {
                            d._endTimeout = d._updator = null, L(d.end) && d.end(f), C(d.reset) && f.css(d.reset), d.progress = 0, h.resolve()
                        };
                    return L(d.start) ? (d.start(f), d._endTimeout = setTimeout(p, e + 10)) : !L(d.step) && C(d.to) ? d._updator = f.animate(d.to, e, d.ease, p) : (L(d.step) || C(d.to)) && (d._updator = (r = (t = d).progress || 0, a = t.duration, s = +new Date, l = v.defer(), c = de[t.ease] || de.linear, (u = function() {
                        var e;
                        o = c(Math.min((+new Date - s) / a, 1)), !n && o < 1 && m(u), i = r * (1 - o) + o, L(t.step) && (e = t.step(i, t.$el)), (C(t.to) || C(e)) && t.$el.animate(A(e || {}, t.to), i), 1 == o && l.resolve()
                    })(), l.promise.pause = function() {
                        n = !0, t.progress = i
                    }, l.promise), d._updator.then(p)), h.promise
                },
                repeat: function(e, t) {
                    var n = this;
                    f(e) && 0 == e-- || (n._repeating = +new Date, n.play().then(function() {
                        n._repeating && (!t && +new Date - n._repeating < 25 && (t = 25), M(t).then(function() {
                            n.repeat(e, t)
                        }))
                    }))
                },
                pause: function() {
                    var e = this._updator,
                        t = this._endTimeout;
                    e && L(e.pause) && e.pause(), t && clearTimeout(t), this._updator = this._endTimeout = this._repeating = null
                },
                stop: function() {
                    this.pause(), this.progress = 0
                },
                start: function(e) {
                    var t = this.prefix;
                    e.removeClass(t + "-end"), e.addClass(t + "-init"), e[0].offsetWidth, e.addClass(t + "-ing")
                },
                end: function(e) {
                    var t = this.prefix;
                    e.removeClass(t + "-ing"), e.addClass(t + "-end")
                }
            };
            var O = /\\|'|\r|\n|\t|\u2028|\u2029/g,
                H = function(e) {
                    return "\\" + o[e]
                },
                P = y.template = {
                    replace: function(t, e, n, a, s) {
                        if (!E(e)) return t;
                        D(e) || (e = [e]);
                        var o = [];
                        return N(e, function(e) {
                            var r;
                            o.push((r = e, t.replace(n || /\{\!?\{([^}]+)\}\}/g, function(e, t) {
                                if (s && !s.test(e)) return e;
                                var n, o, i = T(t, r, l);
                                return null != i ? i : (o = e, null != (n = a) ? n : "!" == o.substr(1, 1) ? "" : o)
                            })))
                        }), o.join("")
                    },
                    parse: function(i, e) {
                        var r = 0,
                            a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){__p+='";
                        i.replace(/<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g, function(e, t, n, o) {
                            return a += i.slice(r, o).replace(O, H), t ? a += ~t.indexOf("(") ? "'+\n(typeof (__t=" + t + ") =='undefined'||__t==null?'':__t)+'" : "'+\n(typeof (" + t + ") =='undefined'||(__t=(" + t + "))==null?'':__t)+'" : n && (a += "';\n" + n + "\n__p+='"), r = o + e.length, e
                        }), a += "';\n}return __p;";
                        var t = new Function("obj", a);
                        return e ? t(e) : t
                    }
                },
                R = function(e) {
                    return e && S(e.tagName) ? e.tagName.toLowerCase() : ""
                },
                q = {
                    $on: y.on,
                    $off: y.off,
                    $once: y.once,
                    $emit: y.emit,
                    $extend: function() {
                        var e = !0,
                            t = 1 <= arguments.length ? x.call(arguments, 0) : [];
                        "boolean" == typeof t[0] && (e = t.shift());
                        return A.apply(this, [e, this].concat(t))
                    }
                };
            j.plugin = function(e, t, n) {
                return S(t) || C(t) ? $e(e, t, n) : j.data(e, "_b$pluginPromise")
            }, y.fn.plugin = function(t, n) {
                var o = v.defer(),
                    e = this,
                    i = [];
                return y.ready(function() {
                    N(e, function(e) {
                        i.push(j.plugin(e, t, n))
                    }), v.all(i).then(function(e) {
                        o.resolve(e)
                    })
                }), o.promise
            };
            var F = {
                    "ne-role": function(e, t, n) {
                        var o = this.__roles;
                        N(n.split(/\s+/), function(e) {
                            e && (o[e] || (o[e] = []), o[e].push(t))
                        })
                    },
                    "ne-model": function(e, t, n, o) {
                        var i = this.models,
                            r = i.add(t, n.replace(/^\s*{{(.*?)}}\s*$/, "$1"), e);
                        o.push(function() {
                            i.remove(r)
                        })
                    },
                    "ne-if": function(t, n, e, o) {
                        var i = this;
                        if (j.data(n, "_b$ifed", !0), S(e)) {
                            if (e = e.replace(/^\s*{{(.*?)}}\s*$/, "$1"), "script" == R(n)) return F["ne-repeat"].call(i, t, n, "", o, !0);
                            var r = document.createTextNode(""),
                                a = !0,
                                s = !1;
                            j.after(r, n), D(n["ne-destroy"]) && n["ne-destroy"].push(function() {
                                j.remove(r)
                            });
                            var l = function(e) {
                                a && !e ? (j.remove(n), a = !1) : !a && e && (j.before(n, r), a = !0), a && !s && (s = !0, i.$refresh2 = !0, i.wander(n, t, !0), i.compile(n))
                            };
                            return o.push(i.views.add({
                                fn: l,
                                model: e,
                                scope: t
                            })), l(t.$parse(e)), r
                        }
                    },
                    "ne-html": function(n, o, e, t) {
                        var i = this;
                        if (e) {
                            t.push(i.views.add({
                                fn: function(e, t) {
                                    E(e) || (e = ""), d <= 9 && /tr|thead|tbody|tfoot/.test(R(o)) ? (N(o.children, function(e) {
                                        o.removeChild(e)
                                    }), o.appendChild(j.create(e))) : o.innerHTML = e, e && ~e.toString().indexOf("<") && (i.wander(o, n), i.compile(o), i.$refresh2 = !0)
                                },
                                model: e,
                                scope: n,
                                debug: y.debug && ~e.indexOf("(")
                            }))
                        }
                    },
                    "ne-text": function(e, n, t, o) {
                        if (t) {
                            o.push(this.views.add({
                                fn: function(e, t) {
                                    E(e) || (e = ""), n[d < 9 ? "innerText" : "textContent"] = e
                                },
                                model: t,
                                scope: e,
                                debug: y.debug && ~t.indexOf("(")
                            }))
                        }
                    },
                    "ne-state-extend": function(e, o, t, n) {
                        var i = this.scope;
                        if (t) {
                            o.removeAttribute("ne-state-extend");
                            var r = function(e, t) {
                                var n = y.widget(o);
                                e && n && n.prepared(function() {
                                    A(!0, n.scope.state, e)
                                })
                            };
                            i.$watch(t, r, e, !0), n && n.push(function() {
                                i.$unwatch(t, r, e)
                            })
                        }
                    },
                    "ne-on": function(e, t, n, o) {
                        var i, r = this.scope,
                            a = y.widget(t);
                        if (n && a)
                            for (; null !== (i = J.exec(n));) {
                                var s = i[1],
                                    l = function(t) {
                                        return function() {
                                            var e = T(t, r, !0);
                                            L(e) && e.apply(r, arguments)
                                        }
                                    }(i[2]);
                                a.on(s, l), o.push(function() {
                                    a.off(s, l)
                                })
                            }
                    },
                    "ne-extend": function(e, o, t, n) {
                        var i = this.scope;
                        if (t && /^\s*{{(.*?)}}\s*$/.test(t)) {
                            o.removeAttribute("ne-extend");
                            var r = function(e, t) {
                                var n = y.widget(o);
                                n && n.extend(e)
                            };
                            i.$watch(t, r, e, !0), n && n.push(function() {
                                i.$unwatch(t, r, e)
                            })
                        }
                    },
                    "ne-options": function(e, n, t, o) {
                        var i = this,
                            r = i.scope;
                        if (n.removeAttribute("ne-options"), n.options) {
                            var a = n.options.length,
                                s = function(e) {
                                    for (; a < n.options.length;) n.remove(a);
                                    var o, t, i;
                                    o = n, i = D(t = e), N(t, function(e, t) {
                                        i && (C(e) ? (t = e.value, e = E(e.label) ? e.label : e.value) : t = e);
                                        var n = new Option(e, t);
                                        o.options.add(n)
                                    })
                                };
                            r.$watch(t, s, e, !0), o && o.push(function() {
                                r.$unwatch(t, s, e)
                            })
                        }
                    },
                    "ne-foreach": function(e, t, n, o) {
                        return t.removeAttribute("ne-foreach"), F["ne-repeat"].call(this, e, t, n, o, !0)
                    },
                    "ne-recurse": function(e, t, n, o) {
                        if (e.hasOwnProperty("$recurse")) {
                            var i = e.$recurse;
                            if (n && -1 != n.indexOf(i.key + ".")) {
                                var r = document.createTextNode("");
                                j.replace(r, t);
                                var a = {
                                    node: [r],
                                    type: "repeat",
                                    key: i.key,
                                    attr: i.attr,
                                    isJoin: i.isJoin,
                                    model: n,
                                    scope: e
                                };
                                return o.push(this.views.add(a)), o.subnode || (o.subnode = []), r
                            }
                        }
                    },
                    "ne-repeat": function(e, t, n, o, i) {
                        var r = "script" == R(t);
                        if (!i && !n) return !1;
                        var a, s = document.createTextNode("");
                        if (D(t)) {
                            j.before(s, t[0]);
                            var l = document.createDocumentFragment();
                            N(t, function(e) {
                                l.appendChild(e)
                            }), t = l
                        } else t.removeAttribute("ne-repeat");
                        if (r) {
                            var c = P.parse(t.innerHTML.trim());
                            a = function() {
                                var e = "";
                                try {
                                    e = c.apply(this, arguments)
                                } catch (e) {
                                    console.error(e)
                                }
                                return e
                            }
                        } else {
                            if (i) throw "ne-foreach should be used in script.";
                            j.before(s, t);
                            var u = document.createElement("div");
                            u.appendChild(t), a = u.innerHTML.replace(/&amp;/g, "&"), j.remove(t)
                        }
                        s.parentNode || j.replace(s, t);
                        var d = {
                            node: [s],
                            attr: a,
                            scope: e,
                            isJoin: i,
                            type: "repeat",
                            destroys: o
                        };
                        if (r) {
                            var f = t.getAttribute("ne-if");
                            S(f) && (d.cond = f.replace(/^\s*{{(.*?)}}\s*$/, "$1"))
                        }
                        /^\s*(\S+)\s+in\s+(.*)/.test(n) ? A(d, {
                            key: RegExp.$1,
                            model: RegExp.$2
                        }) : d.model = n;
                        var h = this.views.add(d);
                        return o.push(h), j.data(t, "_b$selfcide", function() {
                            h(), N(d.node, function(e) {
                                N(e, j.remove)
                            })
                        }), o.subnode || (o.subnode = []), s
                    },
                    "ne-repeat-start": function(e, t, n, o) {
                        var i = !1,
                            r = [t];
                        for (t.removeAttribute("ne-repeat-start"); t = t.nextSibling;)
                            if (r.push(t), t.getAttribute && S(t.getAttribute("ne-repeat-end"))) {
                                t.removeAttribute("ne-repeat-end"), i = !0;
                                break
                            } return !i || F["ne-repeat"].call(this, e, r, n, o)
                    },
                    "ne-fx": function(e, t, n, o) {
                        var i, r = {};
                        if (n) {
                            for (var a = y(t); null !== (i = J.exec(n));) {
                                var s, l = i[2].trim();
                                if (/^(\d+)(\S*)/.test(l))(s = new we(t)).duration = parseInt(RegExp.$1), RegExp.$2 && (s.prefix = RegExp.$2);
                                else {
                                    var c = l.split("@"),
                                        u = parseInt(c[1]),
                                        d = e.$parse(c[0]);
                                    C(d) && (d = y.fx(d)), s = L(d) && d(a), f(u) && (s.duration = u)
                                }
                                s && (r[i[1]] = s)
                            }
                            N(r, function(e, t) {
                                b.add(t, e)
                            }), o.push(function() {
                                N(r, function(e, t) {
                                    b.remove(t, e)
                                })
                            })
                        }
                    }
                },
                Q = {};
            y.directive = function(e, t, o) {
                if (!L(t) && L(o) && (t = function(e, t, n) {
                        return e.$view(n, o.bind(e, t))
                    }), !e || !L(t)) return Q[e];
                Q[e] = t
            }, y.map = function(e, n, o) {
                if (!e) return e;
                var i = D(e) ? [] : {};
                return N(e, function(e, t) {
                    i[t] = L(n) ? n.call(o, e, t, i) : e
                }), i
            };
            var U = y.any = function(e, t) {
                return !N(e, function(e) {
                    return !t(e)
                }, !0)
            };
            y.all = function(e, t) {
                return N(e, function(e) {
                    return t(e)
                }, !0)
            };
            y.filter = function(e, o, i) {
                if (!e) return e;
                var r = D(e),
                    a = r ? [] : {};
                return N(e, function(n, e) {
                    if (L(o)) {
                        if (!o.call(i, n, e, a)) return
                    } else if (o) {
                        var t = !1;
                        if (S(n) ? t = ke(n, o) : C(n) && (t = C(o) ? y.all(o, function(e, t) {
                                return e === n[t]
                            }) : U(n, function(e) {
                                return ke(e, o)
                            })), !t) return
                    }
                    r ? a.push(n) : a[e] = n
                }), a
            }, Ae.prototype = A(Object.create(q), {
                $reverse: function(e) {
                    return A([], e).reverse()
                },
                $sort: function(e, o, i) {
                    var t = L(o) ? o : function(e, t) {
                        var n = i ? -1 : 1;
                        return e[o] < t[o] ? -n : n
                    };
                    return e.sort(t)
                },
                $filter: function(e, t) {
                    return D(e) && t ? y.filter(e, t) : e
                },
                $watch: function(e, t, n, o) {
                    e = e.replace(/^\s*{{([^}]*?)}}\s*$/, "$1");
                    var i = this.$widget ? this.$widget.scope : this;
                    if (i.hasOwnProperty("$$watches") || (i.$$watches = []), D(this.$$watches) && L(t)) {
                        var r = {
                            fn: t,
                            expr: e,
                            scope: n || this
                        };
                        this.$$watches.push(r), o && je.call(n, r, e)
                    }
                },
                $unwatch: function(e, t, n) {
                    var o;
                    for (e = e.replace(/^\s*{{([^}]*?)}}\s*$/, "$1"), o = 0; o < this.$$watches.length; o++) {
                        var i = this.$$watches[o];
                        i.expr != e || i.scope != n || t && i.fn != t || this.$$watches.splice(o--, 1)
                    }
                },
                $parse: function(e, t) {
                    return t = t || this, -1 < e.indexOf("{{") ? P.replace(e, t, /{{([^}]+)}}/g, "") : T(e, t)
                },
                $cancel: function() {
                    return !1
                },
                $refresh: function(e) {
                    var t = this,
                        n = t.$widget;
                    t.hasOwnProperty("$refreshing") && t.$refreshing ? n.$refresh2 = !0 : (t.$refreshing = 1, f(e) ? setTimeout(function() {
                        t.$refresh()
                    }, e) : (t.hasOwnProperty("$$watches") && N(t.$$watches, function(e) {
                        je.call(e.scope || t, e, e.expr)
                    }), n.models && n.models.items.length && (n.views && n.views.refresh("repeat"), n.models.refresh()), n.views && n.views.refresh(), N(n.children, function(e) {
                        e.isReady && e.refresh()
                    }), t.$refreshing = 0, n.$refresh2 ? (n.$refreshed = !0, n.$refresh2 = !1, t.$refresh(), n.isReady && n.updateRoles()) : n.$refreshed && (n.$refreshed = !1, n.emit("refreshed"))))
                }
            });
            var e, B = document.createElement("a"),
                z = (e = window.location.href, B.setAttribute("href", e), {
                    href: B.href,
                    host: B.host,
                    pathname: "/" === B.pathname.charAt(0) ? B.pathname : "/" + B.pathname
                }),
                Y = /(^|\/)\w[^\/;,]*?\/\.\.\//,
                W = /^\.\.\/(.*)/,
                V = /^\-?([1-9][0-9]*|0)(\.[0-9]+)?$/,
                X = /[^\/]+?\/?$/,
                J = /([^;\s]+?)\s*[=:]\s*([^;]*)/g,
                K = /(?:^|\.)(.+?)(?=\[|\.|$|\()|\[(['"]?)(.+?)\2\]/g,
                G = {},
                Z = {},
                ee = 1;
            Se.create = function(e, t, n) {
                var o;
                if (e) {
                    var i = e.getAttribute("ne-id"),
                        r = e[j._idname];
                    r && Z[r] ? o = Z[r] : i && Z["#" + i] ? o = Z["#" + i] : (o = new Se, i && (Z["#" + i] = o));
                    var a = "$$" + (n || e != document.documentElement ? ee++ : 0);
                    e["ne-wguid"] = o.guid = a, (Z[a] = o).$root = y(e), t && (o.parent = t).children.push(o), n && (Z[n] || (Z[n] = []), Z[n].push(o))
                } else(o = new Se).children = [], o.scope = y.rootScope, (o.scope.$widget = o).views = new Ue(o), o.models = new Pe(o), o.update = y.rootScope.$update = o.models.update.bind(o.models);
                return o.__roles = {}, o.roles = {}, o.constructor = Se, o
            }, Se.shortName = function(e) {
                return e.replace(/.*\//, "").replace(/\..*/, "")
            };
            var te = /^(click|load|dblclick|contextmenu|key\w+|mouse\w+|touch\w+)/,
                ne = {};
            N(["submit", "load", "change", "focus", "blur", "mouseenter", "mouseleave"], function(e) {
                ne["ne-" + e] = 1
            }), Se.prototype = {
                _assure: function(e) {
                    if (!this.isReady) throw "widget is not ready";
                    return e.call(this)
                },
                lazy: function(e) {
                    this._lazyPromise = new g(e)
                },
                load: function(t, e, n) {
                    var o = this;
                    if (e && S(t)) {
                        if (e.nodeType) {
                            if (e.parentNode && !ye(e)) throw "widget cannot be loaded on existed tree";
                            return Le(t, e, o, n)
                        }
                        if (e.length) {
                            var i = [];
                            return N(e, function(e) {
                                i.push(Le(t, e, o, n))
                            }), i
                        }
                    }
                    return null
                },
                val: function(e) {
                    if (!E(e)) return this.scope && this.scope.hasOwnProperty("value") ? this.scope.value : _;
                    this.set("value", e)
                },
                get: function(e) {
                    return this._assure(function() {
                        return this.scope[e]
                    })
                },
                set: function(t, n) {
                    var o = 1 <= arguments.length ? x.call(arguments, 0) : [];
                    return this.ready(function() {
                        if (S(t)) this.scope[t] = n;
                        else {
                            var e = !0;
                            "boolean" == typeof o[0] && (e = o.shift()), A.apply(this, [e, this.scope].concat(o))
                        }
                        this.scope.$refresh()
                    })
                },
                setState: function() {
                    var e = 1 <= arguments.length ? x.call(arguments, 0) : [],
                        t = !0;
                    return "boolean" == typeof e[0] && (t = e.shift()), this.ready(function() {
                        A.apply(this, [t, this.scope.state].concat(e)), this.scope.$refresh()
                    })
                },
                roleDelegate: function(e, t) {
                    var a = this;
                    if (!a.$root) return a;
                    var s = a.$root[0],
                        l = a.__roleDelegate || (a.__roleDelegate = {});
                    return C(t) && (S(e) && (e = e.trim().split(n)), N(e, function(r) {
                        if (!l[r]) {
                            l[r] = [];
                            var e = function(n) {
                                for (var t = n.target, e = t; e && e != s;) e.getAttribute("ne-module") && (t = e.parentNode), e = e.parentNode;
                                if (e) {
                                    for (var o = []; t;) {
                                        var i = (t.getAttribute("ne-role") || "").split(/\s+/);
                                        if (N(l[r], function(e) {
                                                ~i.indexOf(e.role) && o.push({
                                                    target: t,
                                                    fn: e.fn
                                                })
                                            }), t == s) break;
                                        t = t.parentNode
                                    }
                                    o.length && a.update(function() {
                                        for (var e, t = 0; t < o.length; t++)
                                            if (!1 === (e = o[t].fn.call(o[t].target, n)) || -1 === e) {
                                                n.preventDefault(), -1 === e && n.stopPropagation();
                                                break
                                            } return e
                                    }), o = null
                                }
                                return !0
                            };
                            a.$root.bind(r, e), a.ready(function() {
                                s["ne-destroy"] && s["ne-destroy"].push(function() {
                                    j.unbind(s, r, e)
                                })
                            })
                        }
                        N(t, function(e, t) {
                            t && l[r].push({
                                role: t,
                                fn: e
                            })
                        })
                    })), a
                },
                updateRoles: function(e) {
                    var t = this;
                    if (!t.$root) return t;
                    var n = t.__rolecbs || (t.__rolecbs = []);
                    if (L(e)) return n.push(e), t;
                    if (t.isReady) {
                        var o = t.__roles = {},
                            i = t.$root[0];
                        for (var r in _e(i, function(t) {
                                var e = t.getAttribute("ne-role");
                                return e && N(e.split(/\s+/), function(e) {
                                    e && (o[e] || (o[e] = []), o[e].push(t))
                                }), (t == i || !S(t.getAttribute("ne-module"))) && t
                            }), t.roles) delete t.roles[r];
                        for (var a in t.__roles) t.roles[a] = y(t.__roles[a])
                    }
                    return N(n, function(e) {
                        e(t.roles)
                    }), t
                },
                compile: function(e, t) {
                    var n = this,
                        o = n.$root && n.$root[0];
                    if (!t && o && (t = o["ne-destroy"]), !(e = e || o) || e.nodeType) return De(e, n, t);
                    if (e.length) {
                        var i = [];
                        return N(e, function(e) {
                            i = i.concat(De(e, n, t))
                        }), i
                    }
                    return []
                },
                prepared: function(e) {
                    var t = this._preparedDefer ? this._preparedDefer.promise : v.never;
                    return L(e) ? (t.then(e.bind(this)), this) : t
                },
                replaceWith: function(e, t, n) {
                    if (S(e)) {
                        var o = this.parent,
                            i = this.$root;
                        this.destroy(n), Le(e, i[0], o, t)
                    }
                },
                destroy: function(t) {
                    var n = this,
                        e = n.scope,
                        o = n.$root[0];
                    Oe(o), E(t) && !t || (o.innerHTML = "");
                    var i = e.$moduleid;
                    w(Z[i], n), w(n.parent.children, n), e.$msg = null, e.hasOwnProperty("destroy") && L(e.destroy) && e.destroy(n), N(n.children, function(e) {
                        e.destroy(t)
                    }), N(n, function(e, t) {
                        delete n[t]
                    })
                },
                ready: function(e) {
                    var t = this._readyDefer ? this._readyDefer.promise : v.never;
                    return L(e) ? (t.then(e.bind(this)), this) : t
                },
                extend: function() {
                    var e = this,
                        t = !0,
                        n = 1 <= arguments.length ? x.call(arguments, 0) : [];
                    return "boolean" == typeof n[0] && (t = n.shift()), N(n, function(e, t) {
                        S(e) && (n[t] = ce.getExport(e) || null)
                    }), e.prepared(function() {
                        A.apply(e, [t, e.scope].concat(n)), e.isReady && e.refresh()
                    }), e
                },
                find: function(e) {
                    if (e) return y.widget(e, this);
                    var t = [];
                    return N(this.children, function(e) {
                        t.push(e), N(e.find(), function(e) {
                            t.push(e)
                        })
                    }), t
                },
                isChildOf: function(e) {
                    for (var t = this.parent; t;) {
                        if (t == e) return !0;
                        t = t.parent
                    }
                    return !1
                },
                render: function() {
                    var t, n = this;
                    if (n.$root) {
                        var o = n.$root[0],
                            i = n.scope,
                            r = [],
                            a = [];
                        n.children = [];
                        var e = o.getAttribute("ne-extend") || "";
                        if (!/^\s*{{(.*?)}}\s*$/.test(e)) {
                            var s = e.split(u);
                            N(s, function(e) {
                                e && (e = Ce(e), a.push(e), r.push(ce.makeDefer(e).promise))
                            })
                        }
                        v.all(r).then(function() {
                            r.length && N(a, function(e) {
                                A(!0, i, ce.getExport(e))
                            });
                            var e = function() {
                                t || (t = !0, setTimeout(function() {
                                    n.scope && (i.hasOwnProperty("init") && L(i.init) && i.init(n), n.refresh(), n.updateRoles(), n._readyDefer.resolve(n))
                                }))
                            };
                            (n._lazyPromise || v.ref()).then(function() {
                                n.wander(), n.compile(o), n.parent.ready(e), setTimeout(e, 1e3)
                            })
                        })
                    }
                },
                refresh: function() {
                    return this.scope && this.scope.$refresh(), this
                },
                wander: function(e, d, s, f) {
                    var h = this;
                    if (!e && h.parent && "$$0" == h.parent.guid && !E(s) && (s = !0), (e = e || h.$root) && !e.nodeType && (e = e[0]), !e) return h;
                    var p = h.$root ? h.$root[0] : e;
                    d = d || h.scope;
                    var m = h.views,
                        v = ["ne-recurse", "ne-repeat-start", "ne-repeat", "ne-foreach", "ne-options", "ne-role", "ne-model", "ne-html", "ne-text", "ne-state-extend", "ne-extend", "ne-fx", "ne-on"];
                    D(e["ne-destroy"]) ? (e != p || h.hasOwnProperty("find")) && (N(e["ne-destroy"], function(e) {
                        e()
                    }), e["ne-destroy"].splice(0)) : e == p && (e["ne-destroy"] = []);
                    for (var g, l = e; l.parentNode && l != p && !l["ne-destroy"];) l = l.parentNode;
                    var w = l["ne-destroy"];
                    if (!w) return h;
                    g = l == e ? (N(j.data(l, "_b$dlDestroy"), function(e) {
                        L(e) && e()
                    }), j.data(l, "_b$dlDestroy", {})) : j.data(l, "_b$dlDestroy") || j.data(l, "_b$dlDestroy", {}), y("script[ne-macro]", e).each(function(e) {
                        var t = e.innerHTML,
                            n = e.getAttribute("ne-macro"),
                            a = [],
                            o = "";
                        /(.*?)\s*\(\s*(.*?)\s*\)/.test(n) && (n = RegExp.$1, a = RegExp.$2.split(/\s*,\s*/)), N(a, function(e, t) {
                            var n = e.split(/\s*=\s*/);
                            n[1] && (a[t] = n[0], o += "if(" + n[0] + "==null)" + e + ";")
                        }), o && (t = "<%"+o+"%>" + t);
                        var s = P.parse(t);
                        qe(d, n, function() {
                            var n = Object.create(this),
                                o = arguments.length ? x.call(arguments, 0) : [],
                                i = this.__scopes;
                            N(a, function(e, t) {
                                e && (n[e] = E(o[t]) ? o[t] : null)
                            });
                            var r = !1,
                                e = s(n).replace(/%(\w+)%/g, function(e, t) {
                                    return ~a.indexOf(t) ? (r = !0, "__scopes[" + i.length + "]." + t) : e
                                });
                            return r && (i[i.length] = n), e
                        }), j.remove(e)
                    }), De.inited || (h.$last = !1);
                    var b = 0 == arguments.length && h.$last;
                    _e(e, function(i) {
                        var e, r = xe(i);
                        if ("$$0" == h.guid && S(r["ne-module"]) && i != p) return !1;
                        if (b) return b == i && (b = _), i;
                        if (h.$last = !De.inited && i, S(r["ne-if"]) && !j.data(i, "_b$ifed")) return F["ne-if"].call(h, d, i, r["ne-if"], w);
                        for (var t = function(e, t, n) {
                                var o = e.call(h, n || d, i, t, w);
                                if (!1 === o) return !1;
                                if (L(o)) w.push(o);
                                else if (o) {
                                    if (1 != (i = o).nodeType) return i;
                                    i.removeAttribute(a), r = xe(i)
                                }
                            }, n = 0, o = v.length; n < o; n++) {
                            var a = v[n],
                                s = r[a];
                            if (S(s) && L(F[a]) && (e = t(F[a], s, "ne-model" == a ? f : ""), E(e))) return e
                        }
                        for (var l in r)
                            if (!F[l]) {
                                var c = r[l],
                                    u = l.substr(3);
                                ne[l] || y.event(u) ? S(c) && w.push(Ee(i, u, c, h, d)) : te.test(u) ? g[u] || (g[u] = 1) : /ne-(href|for|src|title|disabled|checked|selected|read[oO]nly|required)/.test(l) ? (l = RegExp.$1, c && (/{{.+?}}/.test(c) ? w.push(m.add({
                                    node: i,
                                    model: c,
                                    attr: l,
                                    scope: d
                                }, !0)) : j.attr(i, l, c))) : "ne-" == l.substr(0, 3) && L(m[l]) ? (e = m[l](i, c, d), y.debug || i.removeAttribute(l), L(e) && w.push(e)) : L(Q[l]) ? t(Q[l], c) : "ne-cloak" == l ? i.removeAttribute(l) : !F[l] && "ne-module" != l && /^{{.+?}}$/.test(c) && w.push(m.add({
                                    node: i,
                                    model: c,
                                    attr: l,
                                    scope: d
                                }, !0))
                            } return !S(r["ne-module"]) && r["ne-plugin"] && $e(i, r["ne-plugin"]), (!S(r["ne-module"]) || i == p) && i
                    }, function(e) {
                        h.$last = !De.inited && e;
                        var t = e.nodeValue;
                        $.test(t) && ("\\" == RegExp.$1 ? e.nodeValue = t.replace(/\\(\{\!?\{.*?\}\})/g, "$1") : w.push(m.add({
                            node: e,
                            model: t,
                            scope: d
                        }, !0)))
                    }, s), N(h.__roles, function(e, t) {
                        h.roles[t] = y(e)
                    }), N(g, function(e, a) {
                        if (1 === e) {
                            var t = function(n) {
                                for (var e = n.target, t = e, o = !0; t && t != l;)(t["ne-destroy"] || j.data(t, "_b$dlDestroy")) && (e = t["ne-wguid"] ? t : t.parentNode), t = t.parentNode;
                                if (t) {
                                    for (var i = []; e;) {
                                        var r = e.getAttribute("ne-" + a);
                                        if (r && i.push({
                                                target: e,
                                                evt: r
                                            }), e == l) break;
                                        if (e = e.parentNode, !s && d == h.scope && e == l) break
                                    }
                                    i.length && h.update(function() {
                                        var e;
                                        d.$event = n;
                                        for (var t = 0; t < i.length; t++)
                                            if (n.currentTarget = d.$target = i[t].target, !1 === (e = T(i[t].evt, d, !0)) || -1 === e) return n.preventDefault(), -1 === e && n.stopPropagation(), void(o = !1)
                                    }), i = null
                                }
                                return o
                            };
                            j.bind(l, a, t), w.push(g[a] = function() {
                                j.unbind(l, a, t)
                            })
                        }
                    })
                }
            }, N(["on", "off", "emit", "watch", "unwatch"], function(n) {
                Se.prototype[n] = function() {
                    var t = x.call(arguments);
                    return this["emit" != n ? "prepared" : "ready"](function() {
                        var e = this.scope;
                        e && e["$" + n].apply(e, t)
                    })
                }
            });
            var oe = k.getParams = function(e, t) {
                    if (C(t) || (t = {}), S(e))
                        for (var n, i, r, o, a; null !== (n = J.exec(e));) o = n[1], "false" == (a = n[2].trim()) ? a = !1 : "true" == a ? a = !0 : V.test(a) && (a = parseFloat(a)), i = null, r = t, o.trim().replace(K, function(e, t, n, o) {
                            return i && (r[i] || (r[i] = {}), r = r[i]), i = t || o, ""
                        }), r[i] = a;
                    return t
                },
                ie = {
                    _replace: function(e, t) {
                        for (var n, o = 0, i = [], r = function(e) {
                                D(e) ? i[o] = e : (i[o] || (i[o] = []), i[o].push(e))
                            }, a = e.pop(), s = a.parentNode, l = (document.createElement("div"), document.createDocumentFragment()), c = [l], u = [], d = []; o < t.length; o++)
                            if (t[o]) {
                                var f, h = D(t[o]) ? t[o].reserve : 0;
                                if (n && h - n != 1 && (u.push(f), l = document.createDocumentFragment(), c.push(l)), n = h, D(t[o])) N(t[o], function(e) {
                                    h ? (u.length || u.push(e), f = e) : l.appendChild(e)
                                }), r(t[o]), d.push(t[o]);
                                else {
                                    var p = j.create(t[o], !0);
                                    N(p.childNodes, r), l.appendChild(p)
                                }
                            } return o--, N(e, function(e) {
                            -1 == d.indexOf(e) && N(e, function(e) {
                                Oe(e), e.parentNode == s && s.removeChild(e)
                            })
                        }), e = null, i.push(a), i.fragments = c, i.poles = u, i
                    },
                    repeat: function(l, c, e) {
                        var u, t, d, i = l.attr,
                            f = l.key,
                            r = L(i),
                            h = l.isJoin,
                            a = l.scope || c.scope,
                            p = l.model,
                            m = [],
                            n = !S(l.cond) || T(l.cond, a);
                        if (a.__scopes = [], p) {
                            d = n ? function(e, t) {
                                var n = e.split(".."),
                                    o = n.length;
                                if (1 == n.length) return T(e, t);
                                var i = He(n[0], t),
                                    r = He(n[o - 1], t),
                                    a = Math.abs(3 == o ? He(n[1], t) : 1);
                                return k.incArray(i, r, a)
                            }(p, a) : [], D(d) || (d = null != d ? [d] : []), u = d.length;
                            var s = !l.repeatScopes || l.arrLen != u,
                                v = f ? null : l.repeatNoKeys || (l.repeatNoKeys = []);
                            if (l.arrLen = u, f && !s) {
                                for (var o = 0; o < u; o++) {
                                    var g = l.repeatScopes[o];
                                    if ((g ? g[f] : null) !== (E(d[o]) ? d[o] : null)) {
                                        s = !0;
                                        break
                                    }
                                }
                                if (!r && !s) return !1
                            }
                            var w = l.repeatScopes || [];
                            if (l.repeatScopes = [], N(d, function(e, t) {
                                    if (null != e) {
                                        var n = Object.create(a);
                                        n.__scopes = [], f ? (n[f] = e, n.$recurse = {
                                            key: f,
                                            attr: i,
                                            isJoin: h
                                        }) : A(!0, n, C(e) ? e : {
                                            __val: e
                                        }), A(n, {
                                            __len: u,
                                            __i: t
                                        });
                                        var o = r ? i(n) : f ? i : P.replace(i, n);
                                        w[t] && w[t].hasOwnProperty("b$html") && o == w[t].b$html || (s = !0), l.repeatScopes[t] = n, m[t] = o
                                    }
                                }), !s) return l.repeatScopes = w, f || N(d, function(e, t) {
                                A(l.repeatScopes[t], e)
                            }), !1;
                            var b = -1;
                            N(d, function(e, t) {
                                if (null != e) {
                                    var n, o, i = m[t];
                                    if (!h) {
                                        var r = f ? null : function(e, t, n, o) {
                                                if (C(e))
                                                    for (var i = 0; i < t.length; i++)
                                                        if (t[i].item === e && -1 == o.indexOf(t[i].scope)) {
                                                            if (t[i].string == n) return t[i];
                                                            t.splice(i, 1);
                                                            break
                                                        } return null
                                            }(e, v, i, l.repeatScopes),
                                            a = f ? function(e, t, n, o) {
                                                for (var i = 0; i < t.length; i++)
                                                    if (t[i] && t[i][n] === e && -1 == o.indexOf(t[i])) return t[i];
                                                return null
                                            }(e, w, f, l.repeatScopes) : r ? r.scope : null,
                                            s = f ? a && a.hasOwnProperty("b$node") ? a.b$node : null : r ? r.node : null;
                                        a && ((o = (n = s) && n.length) && N(n, function(e) {
                                            e.parentNode || (o = !1)
                                        }), o) && i == a.b$html && (-1 == b || b + 1 <= a.__i ? (b = a.__i, s.reserve = t + 1) : s.reserve = !1, -1 == m.indexOf(s) && (m[t] = s, l.repeatScopes[t] = a, f || A(l.repeatScopes[t], e)))
                                    }
                                    A(l.repeatScopes[t], {
                                        __len: u,
                                        __i: t,
                                        b$html: i
                                    })
                                }
                            }), w = null
                        } else {
                            if (t = n ? i(a) : "", E(l._value) && t == l._value) return !1;
                            l._value = t, m.push(t)
                        }
                        if (h && (m = [m.join("")]), l.node = this._replace(l.node, m), u || !p) {
                            var y = e && e.subnode;
                            y && y.splice(0), N(l.node, function(e, o) {
                                var i, t, n, r, a, s;
                                e && e.length && (c.$refresh2 = !0, p && !h && (i = l.repeatScopes[o]) && (f && D(e) && e.length ? i.b$node = e : S(m[o]) && (t = d[o], n = v, r = e, a = i, s = m[o], C(t) && n.push({
                                    node: r,
                                    item: t,
                                    string: s,
                                    scope: a
                                }))), N(e, function(e) {
                                    if (!e["ne-destroy"]) {
                                        if (3 == e.nodeType) {
                                            var t = e.nodeValue;
                                            $.test(t) && (e["ne-destroy"] = [c.views.add({
                                                node: e,
                                                model: t,
                                                scope: i
                                            })])
                                        } else {
                                            if (1 != e.nodeType) return;
                                            var n = e["ne-destroy"] = [];
                                            c.wander(e, i, !0, !f && d && C(d[o]) ? d[o] : null), j.data(e, "_b$ifed") || c.compile(e, n)
                                        }
                                        y && y.push(e)
                                    }
                                }))
                            })
                        }
                        var _ = l.node.fragments,
                            x = l.node.poles;
                        return N(_, function(e, t) {
                            e.childNodes.length && j[0 == t ? "before" : "after"](e, x[t] || l.node[l.node.length - 1])
                        }), l.node.frags = l.node.poles = null, !1
                    }
                };
            Pe.prototype = {
                add: function(e, t, n) {
                    var o = this.widget;
                    n = n || o.scope, t = t.trim();
                    var i = {
                        node: e,
                        scope: n
                    };
                    "*" == t.substr(-1) && (i.array = !0, t = t.substr(0, t.length - 1)), i.model = t, this.items.push(i);
                    var r = y.widget(e),
                        a = o.$root[0];
                    if (r) r.watch("value", o.update), a["ne-destroy"].push(function() {
                        r.unwatch("value", o.update)
                    });
                    else {
                        var s = "change";
                        /input|textarea/.test(c(e.tagName)) && (s += " input"), j.bind(e, s, o.update), a["ne-destroy"].push(function() {
                            j.unbind(e, s, o.update)
                        })
                    }
                    return i
                },
                remove: function(e) {
                    for (var t = 0, n = this.items.length; t < n; t++)
                        if (this.items[t] == e) {
                            this.items.splice(t, 1);
                            break
                        }
                },
                update: function(e, t) {
                    var n = this,
                        o = n.widget,
                        i = o.scope,
                        r = o;
                    i && i.$refreshing ? setTimeout(function() {
                        n.update(e, t)
                    }, 50) : (N(n.items, function(e) {
                        var t = Re(e);
                        if (t)
                            for (; r.parent && E(r.scope[t]) && !r.scope.hasOwnProperty(t);) r = r.parent
                    }), N(o.children, function(e) {
                        e.update && e.update(null, !1)
                    }), L(e) && (t = e.apply(o.scope)), t && L(t.then) ? t.then(function() {
                        r.refresh()
                    }) : !1 !== t && r.refresh())
                },
                refresh: function() {
                    N(this.items, Qe)
                }
            }, Ue.prototype = {
                add: function(t, e) {
                    var n = this.items;
                    return t && S(t.model) && (t.model = t.model.replace(/^\s*{{([^}]*?)}}\s*$/, "$1")), n.push(t), e && this.refresh(t),
                        function() {
                            var e = n.indexOf(t); - 1 < e && n.splice(e, 1)
                        }
                },
                "ne-show": function(t, e, n) {
                    return this.widget.views.add({
                        fn: function(e) {
                            j[e ? "show" : "hide"](t)
                        },
                        model: e,
                        scope: n
                    })
                },
                "ne-hide": function(t, e, n) {
                    return this.widget.views.add({
                        fn: function(e) {
                            j[e ? "hide" : "show"](t)
                        },
                        model: e,
                        scope: n
                    })
                },
                "ne-visible": function(t, e, n) {
                    return this.widget.views.add({
                        fn: function(e) {
                            t.style.visibility = e ? "visible" : "hidden"
                        },
                        model: e,
                        scope: n
                    }, !0)
                },
                "ne-hidden": function(t, e, n) {
                    return this.widget.views.add({
                        fn: function(e) {
                            t.style.visibility = e ? "hidden" : "visible"
                        },
                        model: e,
                        scope: n
                    }, !0)
                },
                "ne-value": function(t, e, n) {
                    return this.widget.views.add({
                        fn: function(e) {
                            j.val(t, e)
                        },
                        model: e,
                        scope: n
                    }, !0)
                },
                "ne-class": function(n, e, t) {
                    if (S(e) && e.trim()) {
                        var o = [];
                        if (e = e.replace(/[\w\-]*{{.+?}}[\w\-]*/g, function(e) {
                                return o.push(e), ""
                            }), h.batch(n, e), e = o.join(" ")) return this.widget.views.add({
                            fn: function(e, t) {
                                h.batch(n, e, t)
                            },
                            model: e,
                            scope: t
                        })
                    }
                },
                "ne-style": function(n, e, t) {
                    if (S(e)) {
                        if (!(e = e.trim())) return null;
                        if (/{{(.+?)}}/.test(e)) return this.widget.views.add({
                            fn: function(e, t) {
                                n.style.cssText = n.style.cssText.replace(";" + t, "") + ";" + e
                            },
                            model: e,
                            scope: t
                        });
                        j.css(n, e)
                    }
                },
                refresh: function(e) {
                    var t = this,
                        n = t.scope;
                    if (S(e))
                        for (var o = 0; o < t.items.length; o++) t.items[o].type == e && t.refresh(t.items[o]);
                    else if (e) {
                        var i = e.type,
                            r = e.node,
                            a = t.widget;
                        if (ie[i]) ie[i](e, a, e.destroys);
                        else {
                            var s = e.scope || n,
                                l = ~e.model.indexOf("}}") ? P.replace(e.model, s) : T(e.model, s, e.debug),
                                c = be(l);
                            if (!e.inited || c !== e._valueStr) {
                                if (e.inited = !0, a.$refreshed = !0, L(e.fn)) e.fn(l, e._value);
                                else if (r && r.parentNode) {
                                    var u = r.nodeType;
                                    3 == u ? r.nodeValue = l : 1 == u && e.attr && (l === e.model ? r.removeAttribute(e.attr) : j.attr(r, e.attr, l))
                                }
                                e._value = l, e._valueStr = c
                            }
                        }
                    } else
                        for (o = 0; o < t.items.length; o++) t.refresh(t.items[o])
                }
            };
            var re = [],
                ae = {};
            y.define = function(e, t, n) {
                S(e) || (n = t, t = e, e = null), D(t) && n || (n = t, t = []);
                var o = {
                    fn: n,
                    deps: t
                };
                return e ? S(o.fn) || ce._defers[e] ? ce.postDefine(e, o) : ae[e] = o : (re.push(o), y.define.amd = !1), o
            }, y.define.amd = {
                jQuery: !0
            }, this.define || (this.define = y.define);
            var se = this.define.skin = function(e, t) {
                    C(e) ? N(e, function(e, t) {
                        se(t, e)
                    }) : le.promises[Ce(e)] = v.ref(t)
                },
                le = {
                    promises: {},
                    load: function(n, e) {
                        var s = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                            t = n.replace(/\?.*/, "").replace(/^https?:\/\/.*?\//, "/"),
                            o = this.promises[n] || this.promises[t];
                        return o || (o = this.promises[n] = p.get(n).then(function(e) {
                            var t = document.createElement("div"),
                                a = e.data,
                                i = n.replace(/[^\/]+$/, ""),
                                r = -1 == n.indexOf("//") ? "/" : n.replace(/(\/\/.*?\/).*/, "$1");
                            return a = a.replace(/(\s(href|src|ne-module|ne-extend|ne-plugin)=["'])@(\/)?/g, function(e, t, n, o) {
                                return t + (o ? r : i)
                            }), S(y.debug) && (a = a.replace(/(<link [^>]*?href=["'])\//, "$1" + y.debug + "/")), t.innerHTML = (d < 9 ? "<input />" : "") + a, d < 9 && t.removeChild(t.firstChild), new g(function(o) {
                                var i = 0,
                                    r = ce._loadedlink;
                                N(k.cssQuery("link, style", t), function(e) {
                                    if ("link" == R(e)) {
                                        i++;
                                        var t = Ce(e.getAttribute("href")),
                                            n = function() {
                                                0 == --i && o(a)
                                            };
                                        r[t] ? (j.remove(e), e = r[t], setTimeout(n, 100)) : ((r[t] = e).onload = e.onreadystatechange = function() {
                                            e.readyState && "complete" != e.readyState || (e.onload = e.onreadystatechange = null, setTimeout(n, 50))
                                        }, setTimeout(function() {
                                            e.onload && e.onload()
                                        }, 2e3))
                                    }
                                    s.appendChild(e)
                                }), a = t.innerHTML, t = null, 0 === i && o(a)
                            })
                        })), o
                    }
                },
                ce = {
                    _fns: {},
                    _exports: {},
                    _loadedlink: {},
                    _defers: {},
                    _promises: {},
                    makeDefer: function(e, t, n) {
                        var o = ce._defers,
                            i = e.split("@");
                        e = i[0];
                        var r = i[1] || "utf-8";
                        if (o[e]) return o[e];
                        var a = o[e] = v.defer(),
                            s = a.promise;
                        if (n || (s.deploy = function(t, n) {
                                var o = 3 <= arguments.length ? x.call(arguments, 2) : [];
                                return s.then(function(e) {
                                    L(e.deploy) && (t = e.deploy(t, n, o))
                                }), t
                            }), !t) {
                            var l = ce._exports;
                            l[e] ? a.resolve(l[e]) : ae[e] ? (ce.postDefine(e, ae[e]), delete ae[e]) : "%" != e.substr(0, 1) && p.require(e, {
                                charset: r
                            }).success(function() {
                                ce.postDefine(e, null, n)
                            }).error(function() {
                                throw ce.postDefine(e, {
                                    fn: function() {}
                                }, n), e + " load error." + (G[e] ? "\n  => " + G[e] : "")
                            })
                        }
                        return a
                    },
                    get: function(e) {
                        return e ? (e = Ce(e), ce.makeDefer(e).promise) : v.ref()
                    },
                    getExport: function(e) {
                        var t, n = ce._exports,
                            o = ce._fns;
                        e = e.replace(/(\w)\@.*/, "$1"), /^(plugin)\!(.*)/.test(e) && (t = RegExp.$1, e = RegExp.$2), e = Ce(e), ae[e] && (ce.postDefine(e, ae[e]), delete ae[e]);
                        var i = o[e];
                        if ("plugin" == t) return i;
                        if (!n[e] && i && L(i.fn)) {
                            var r = Te();
                            f(i.depInject.exportIdx) && (i.depInject[i.depInject.exportIdx] = r);
                            var a = i.fn.apply(r, i.depInject);
                            n[e] = E(a) ? a : r
                        }
                        return n[e]
                    },
                    createLink: function(e) {
                        var t = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
                            n = ce._loadedlink[e];
                        n || ((n = ce._loadedlink[e] = document.createElement("link")).href = e, n.rel = "stylesheet"), t.appendChild(n)
                    },
                    depPromise: function(n, t) {
                        var o = this,
                            e = o._promises,
                            i = v.ref();
                        if (/^text\!/.test(n)) {
                            var r = (n = Ce(n, t)).replace(/.*\!/, ""),
                                a = o._exports;
                            return a[n] ? v.ref(a[n]) : ((i = e[n]) || (i = e[n] = new g(function(t) {
                                p.get(r).success(function(e) {
                                    a[n] = e, t(e)
                                })
                            })), i)
                        }
                        var s = "!" == n.substr(0, 1);
                        return N(n.split(u), function(e) {
                            i = i.then(function() {
                                return o.makeDefer(Ce(e.replace(/.*\!/, ""), t), !1, s).promise
                            })
                        }), i
                    },
                    postDefine: function(t, o, e) {
                        y.define.amd = {
                            jQuery: !0
                        };
                        var n = ce._exports,
                            i = s.module,
                            r = ce.makeDefer(t, !0);
                        if (!r.def || o || re.length) {
                            var a = [];
                            if (!e) {
                                if (o || (i && i.exports ? (o = {
                                        fn: i.exports
                                    }, delete i.exports) : o = re.shift()), !o) throw "define not found for " + t;
                                if (S(o.fn)) return void(n["text!" + t] = o.fn);
                                if (!L(o.fn)) return n[t] = o.fn || {}, void r.resolve(o)
                            }(o && o.deps ? ge : v.ref()).then(function() {
                                e || (o.name = t, D(o.deps) && Ne(o.deps, t), a.push(Be(o.deps).then(function(e) {
                                    o.depInject = e, o._deps = o.deps, delete o.deps, ce._fns[t] = o
                                })), o.deploy = function(e, t, n) {
                                    return (e._lazyPromise || v.ref()).then(function() {
                                        ce.instantiate(o, e, n)
                                    }), e
                                }), v.all(a).then(function() {
                                    r.def = o, r.resolve(o, !0)
                                })
                            })
                        }
                    },
                    instantiate: function(e, o, t) {
                        if (o._preparedDefer) {
                            var i = o.parent.scope,
                                n = o.scope,
                                r = o.models = new Pe(o);
                            o.update = n.$update = r.update.bind(r), o.views = new Ue(o), n.$widget = o, n.$root = o.$root;
                            var a = o.$root[0],
                                s = function() {
                                    Ie(n, a.getAttribute("ne-state")), o._preparedDefer.resolve(o)
                                };
                            o.prepared(function() {
                                var n = o.parent.$root && o.parent.$root[0]["ne-destroy"];
                                N(["ne-state-extend", "ne-extend"], function(e) {
                                    var t = a.getAttribute(e);
                                    t && F[e].call(o.parent, i, a, t, n)
                                })
                            }), e ? (n.$moduleid = e.name, f(e.depInject.exportIdx) && (e.depInject[e.depInject.exportIdx] = n), e.fn.apply(n, e.depInject), s(), t && (D(t) || (t = [t]), N(t, function(e) {
                                A(!0, n, e)
                            })), Me(e.name, o)) : s()
                        }
                    }
                },
                ue = {},
                de = {
                    linear: function(e) {
                        return e
                    }
                },
                fe = {
                    alias: ue,
                    easeFns: de
                };
            de["ease-out"] = de.ease = function(e) {
                return Math.sqrt(e)
            }, de["ease-in"] = function(e) {
                return e * e
            }, y.conf = function(e) {
                if (S(e)) return fe[e];
                A(!0, fe, e)
            }, y.run = function(e) {
                return D(e) && Ne(e), S(e) ? ce.get(e).then(function(e) {
                    if (e && e.fn) {
                        if (L(e.fn)) {
                            var t = Te();
                            f(e.depInject.exportIdx) && (e.depInject[e.depInject.exportIdx] = t);
                            var n = e.fn.apply(t, e.depInject);
                            return n && "object" == typeof n ? n : t
                        }
                        return e.fn
                    }
                    return e
                }) : Be.apply(y, arguments)
            }, y.defined = ce.getExport, y.widget = function(e, t) {
                if (S(e)) "#" == e.substr(0, 1) ? Z[e] || (Z[e] = new Se) : e = Ce(e);
                else if (e) {
                    if (e.getAttribute || (e = e[0]), !e || !e.getAttribute) return null;
                    var n = e;
                    if (!(e = n["ne-wguid"]) && S(n.getAttribute("ne-module"))) {
                        var o = n.getAttribute("ne-id"),
                            i = j._nodeId(n),
                            r = Z[i] = o && Z["#" + o] || Z[i] || new Se;
                        return o && (Z["#" + o] = r), r
                    }
                }
                var a = Z[e] || null,
                    s = [];
                return D(a) ? (N(a, function(e) {
                    t && !e.isChildOf(t) || s.push(e)
                }), s) : t && a && !a.isChildOf(t) ? null : a
            }, y.rootScope = new Ae;
            var he = y.rootWidget = Se.create();
            he._preparedDefer.resolve(he), he._readyDefer.resolve(he), he.defer = v.defer();
            var pe = document.body && document.body.getAttribute("ne-alias");
            if (!pe) {
                var me = document.getElementsByTagName("script"),
                    ve = me[me.length - 1];
                s.addEventListener || !ve || ve.getAttribute("ne-alias") || (ve = me[me.length - 2]), pe = ve && ve.getAttribute("ne-alias")
            }
            var ge = y.run(pe).then(function(e) {
                e && A(!0, ue, e)
            });
            pe && (he.compile = function() {
                ge.then(De)
            }), (window.NTES || y).ready(function() {
                ge.then(function() {
                    De(), De.inited = !0, he.defer.resolve()
                })
            }), define("require", function() {
                return y.defined
            })
        }

        function we(e) {
            this.$el = y(e), this.duration = 300, this.progress = 0, this.prefix = "ne-anim"
        }

        function be(e) {
            return "object" == typeof e && e && !e.alert ? JSON.stringify(e) : e
        }

        function ye(e) {
            return 1 == e.nodeType && "" === e.innerHTML.replace(/<!--[\s\S]*?-->/g, "").replace(/^\s+/, "")
        }

        function _e(e, t, n, o) {
            if (1 !== e.nodeType) return e;
            if (o && !(e = t(e))) return !1;
            for (var i, r = e.firstChild; r;) {
                var a = r.nodeType,
                    s = r.nextSibling;
                1 == a && t ? (i = t(r)) && ("script" != R(i) && _e(i, t, n), s = i.nextSibling) : 3 == a && n && n(r), r = s
            }
            return e
        }

        function xe(e) {
            var t, n, o, i = {},
                r = e.outerHTML;
            if (r)
                for (var a = 0, s = /((\S+?)=(['"])(.*?)\3|[^>\s]+)\s*(\/?\s*>)?/g; t = s.exec(r);) {
                    if (n = t[2], o = t[4], !n) {
                        var l = t[1].split("=");
                        n = l[0], o = l[1] || ""
                    }
                    if (a++ && (i[n] = o.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<")), t[5]) break
                } else if (e.attributes)
                    for (var c = 0, u = e.attributes.length; c < u; c++) {
                        var d = e.attributes[c];
                        i[d.name] = d.value
                    }
            return i
        }

        function Te() {
            var e = Object.create(q);
            return e.$msg = {}, e
        }

        function $e(n, e, o) {
            var i = [];
            if (e = e || n.getAttribute("ne-plugin"), C(e)) {
                var t = Te(),
                    r = e;
                f(r.depInject.exportIdx) && (r.depInject[r.depInject.exportIdx] = t), r.fn.apply(t, r.depInject), A(!0, Ie(t, n.getAttribute("ne-plugin-state")), o), t.init && t.init(y(n)), i.push(v.ref(t))
            } else S(e) && N(e.trim().split(u), function(e) {
                if (e = Ce(e), /\.css$/i.test(e)) ce.createLink(e);
                else {
                    var t = ce.makeDefer(e).promise;
                    i.push(t.then(function(e) {
                        var t = Te();
                        return f(e.depInject.exportIdx) && (e.depInject[e.depInject.exportIdx] = t), e.fn.apply(t, e.depInject), A(!0, Ie(t, n.getAttribute("ne-plugin-state")), o), L(t.init) && t.init(y(n)), t
                    }))
                }
            });
            return j.data(n, "_b$pluginPromise", 1 == i.length ? i[0] : v.all(i))
        }

        function ke(e, t, n) {
            return y.isRegExp(t) ? t.test(e) : n ? e === t : e.indexOf && -1 < e.indexOf(t)
        }

        function je(e, t) {
            var n = this.$parse(t),
                o = e.cache,
                i = be(n);
            e.inited && i === o || (e.cache = i, e._value = n, e.inited = !0, e.fn && e.fn(n, o))
        }

        function Ae() {}

        function Ne(o, i) {
            N(o, function(e, t) {
                var n = [];
                N(e.split(u), function(e) {
                    e = -1 == e.indexOf("//") ? Ce(e, i) : e, n.push(e), G[e] = i
                }), o[t] = n.join(";")
            })
        }

        function Ce(e, t) {
            var n = "";
            if (t && 0 === t.indexOf("%") && (t = ""), /^([a-z]*\!)(\S+)/.test(e) && (n = RegExp.$1, e = RegExp.$2), "%" == e.substr(0, 1)) return n + e;
            if (ue[e]) e = ue[e];
            else
                for (var o in ue)
                    if (/\/$/.test(o) && 0 === e.indexOf(o)) {
                        e = e.replace(o, ue[o]);
                        break
                    } if ("exports" == e || ce._defers[e] || ae[e]) return n + e;
            if (!/^(\/\/|http)/.test(e))
                if (0 !== e.indexOf("/")) {
                    var i = t || z.pathname;
                    for (/\/[^\/]+$/.test((t || z.href || "").replace(/[#\?].*/, "")) && (i = i.replace(X, "")); W.test(e);) e = RegExp.$1, i = i.replace(X, "");
                    e = i + e
                } else if (S(t) && /(.*\/\/\S+?)\//.test(t)) {
                e = RegExp.$1 + e
            }
            return S(y.debug) && !/cache.netease|163.com|126.net/.test(e) && (e = e.replace(/https?:\/\/.*?\//, "/").replace(/^\//, y.debug + "/")), /\/\w+$/.test(e) && (e += ".js"), n + function(e) {
                var t = e.replace(/\/\.\//g, "/");
                for (;
                    (e = t.replace(Y, "$1")) && e != t;) t = e;
                return t
            }(e)
        }

        function Se() {
            this._readyDefer = v.defer(), this._preparedDefer = v.defer(), this._readyDefer.promise.then(function(e) {
                e.isReady = !0
            })
        }

        function De(e, n, o) {
            if (!y.debug && /\bdebug=(\S+?)($|&|#)/.test(location.href)) {
                var t = RegExp.$1;
                if ("noCompile" == t) return;
                "strict" == t && (l = !0), y.debug = "http" != t.substr(0, 4) || t
            }
            var i = [];
            n || (n = he), e ? !e["ne-wguid"] && S(e.getAttribute("ne-module")) ? i.push(e) : _e(e, function(e) {
                var t = e.getAttribute("ne-benchmark");
                return S(t) && (e.removeAttribute("ne-benchmark"), (y.widget(e) || y).ready(function() {
                    y.bench.mark(t)
                })), S(e.getAttribute("ne-module")) ? (i.push(e), !1) : e
            }) : i.push(document.documentElement);
            var r = [];
            return N(i, function(e) {
                var t;
                e["ne-wguid"] ? (t = y.widget(e), De.inited || (t.compile(), t.$last && t.$last.nextSibling && t.wander())) : t = Le(e.getAttribute("ne-module") || "", e, n), r.push(t), o && o.push(function() {
                    t.destroy()
                })
            }), r
        }

        function Le(e, t, n, o) {
            if (!t || !t.nodeType) return null;
            t == document.documentElement || S(t.getAttribute("ne-module")) || t.setAttribute("ne-module", ""), e = e.replace(/^\s+|\s+$/g, "");
            var i = !1;
            if (/(.*)\*$/.test(e) && (e = RegExp.$1, i = !0), e) {
                if ("@" == e.substr(0, 1) && n && n.scope) {
                    var r = n.scope.$moduleid;
                    e = r && "%" != r.substr(0, 1) ? r.replace(/[^\/]*?$/, "") + e.substr(1) : e.substr(1)
                }
                e = Ce(e)
            }
            var a = Se.create(t, i ? he : n, e);
            return a.isolate = i, a.scope = a.isolate ? new Ae : Object.create(n.scope), a.scope.$msg = {}, y.isObject(o) && a.extend(o), $e(t).then(function() {
                e ? /\.html?$/.test(e) ? (ce.instantiate(null, a), Me(e, a)) : ce.get(e).deploy(a, n) : (ce.instantiate(null, a), a.render())
            }), a
        }

        function Ee(e, t, n, o, i) {
            var r = function(t) {
                (i.$event = t).currentTarget = i.$target = e, n && o.update(function() {
                    var e = T(n, i, !0);
                    !1 !== e && -1 !== e || (t.preventDefault(), -1 === e && t.stopPropagation())
                })
            };
            if ("change" == t) {
                var a = y.widget(e);
                if (a) return a.watch("value", r),
                    function() {
                        a.unwatch("value", r)
                    }
            }
            return e.getAttribute("ne-model") && j.unbind(e, t, o.update), j.bind(e, t, r),
                function() {
                    j.unbind(e, t, r)
                }
        }

        function Me(e, t) {
            var n = t.$root[0],
                o = t.scope,
                i = S(n.getAttribute("ne-transclude"));
            if ((i || ye(n)) && (t._empty = !0, i && (n.transclude = n.innerHTML)), t._empty) {
                var r = oe(n.getAttribute("ne-props")),
                    a = function(e) {
                        if (n.innerHTML = (d < 9 ? '<input style="display:none"/>' : "") + P.replace(e, {
                                props: r,
                                transclude: n.transclude || ""
                            }, null, null, /props\.|transclude/), d < 9 && n.removeChild(n.firstChild), /<script/i.test(e)) {
                            var i = v.ref();
                            y("script", n).each(function(e) {
                                var t = c(e.getAttribute("type"));
                                if (!t || "text/javascript" == t) {
                                    var n = e.getAttribute("src");
                                    if (n) i = i.then(function() {
                                        return p.require(n)
                                    });
                                    else {
                                        var o = document.createElement("script");
                                        o.innerHTML = e.innerHTML, i = i.then(function() {
                                            return j.replace(o, e)
                                        })
                                    }
                                }
                            })
                        }
                        t.render()
                    };
                if (o.hasOwnProperty("html")) a(o.html);
                else {
                    var s = r.skin;
                    e = /\//.test(s) ? Ce(s) : e.replace(/(\.[^\.]*)?$/, (s ? "." + s : "") + ".html") + (d ? "?" + +new Date : ""), delete r.skin, le.load(k.buildUrl(e, r), n).then(a)
                }
            } else t.render()
        }

        function Ie(e, t) {
            return e.hasOwnProperty("state") || (e.state = {}), oe(t, e.state), e
        }

        function Oe(e) {
            try {
                var t = j.data("_b$selfcide");
                L(t) && t();
                var n = e["ne-destroy"];
                n && (delete e["ne-destroy"], N(n, function(e) {
                    e()
                }), N(n.subnode, function(e) {
                    Oe(e)
                })), j.data(e, !1)
            } catch (e) {}
        }

        function He(e, t) {
            var n = parseInt(e, 10);
            return isNaN(n) ? parseInt(T(e, t), 10) : n
        }

        function Pe(e) {
            this.widget = e, this.items = [], this.cursor = 0
        }

        function Re(e, t) {
            var n = e.node,
                o = j.val(n);
            if (E(t) || (t = Fe(e.model, e.scope)), "input" != c(n.tagName) || "radio" != c(n.getAttribute("type")) || !1 !== n.checked) return E(o) && (e.inited = !0, o !== t) ? qe(e.scope, e.model, o, e.array && j.attr(n, "value")) : void 0
        }

        function qe(e, t, n, o) {
            var i, r = null,
                a = e;
            if (t.replace(K, function(e, t, n, o) {
                    return r && (E(a[r]) || (a[r] = {}), a = a[r]), r = t || o, i || (i = r), ""
                }), S(o)) {
                D(a[r]) || (a[r] = []);
                var s = a[r].indexOf(o);
                n && -1 == s ? a[r].push(o) : n || -1 == s || a[r].splice(s, 1)
            } else a[r] = n;
            return i
        }

        function Fe(e, t) {
            var i = null,
                r = t;
            return e.replace(K, function(e, t, n, o) {
                return i && (r[i] || (r[i] = {}), r = r[i]), i = t || o, ""
            }), r[i]
        }

        function Qe(e) {
            var t = e.node,
                n = Fe(e.model, e.scope),
                o = "input" == c(t.tagName) && "radio" == c(t.getAttribute("type")),
                i = o ? t.checked : j.val(t);
            e.array && (n = D(n) && -1 != n.indexOf(j.attr(t, "value"))), n !== i && (!E(n) && e.inited && (n = ""), E(n) && (o ? j.attr(t, "checked", n === t.value) : j.val(t, n)), Re(e, n))
        }

        function Ue(e) {
            this.widget = e, this.scope = e.scope, this.items = []
        }

        function Be(e, t) {
            var n = [],
                o = ce._fns,
                i = [];
            e = L(e) ? (t = e, []) : e || [];
            for (var r = 0; r < e.length; r++) /\.css$/i.test(e[r]) ? (ce.createLink(e[r]), e.splice(r--, 1)) : e[r] ? "!" == e[r].substr(0, 1) && (n.push(ce.depPromise(e[r])), e.splice(r--, 1)) : e.splice(r--, 1);
            return N(e, function(e, t) {
                "exports" == e ? i.exportIdx = t : o[e] || n.push(ce.depPromise(e))
            }), v.all(n).then(function() {
                return e && N(e, function(e) {
                    i.push("exports" == e ? null : ce.getExport(e))
                }), L(t) && t.apply(this, i), i
            })
        }
    }.call(this, this.bowlder, function(e) {
        return new Function("obj", "with(obj)return " + e)
    }), Raven.config("https://ab4603634fbf4320a7bc38bd00fd6cbb@sentry.music.163.com/96").install(), bowlder.define("/modules/plugins/lazyload/lazyload.js", function() {
        var s = bowlder,
            n = s(window),
            l = [];

        function c() {
            s.each(l, function(e, t) {
                var n = s(e);
                e.settings.skip_invisible || 0 !== e.settings.event.indexOf("scroll") || r(e, e.settings) || a(e, e.settings) || f(e, e.settings) || i(e, e.settings) || h(e) || !e.offsetParent || n.trigger("appear")
            })
        }

        function u(e) {
            return e.replace(/(^\s+)|(\s+$)/g, "")
        }

        function o() {
            return !!window.navigator.userAgent.match(/MSIE|Trident/)
        }

        function d(e, n) {
            var o = [];
            return s.each(e, function(e, t) {
                n(e) && o.push(e)
            }), o
        }

        function f(e, t) {
            return (void 0 === t.container || t.container === window ? o() ? (window.innerHeight ? window.innerHeight : n.height()) + s(document.documentElement).scrollTop() : (window.innerHeight ? window.innerHeight : n.height()) + n.scrollTop() : p(t.container).top + s(t.container).height()) <= p(e).top - t.threshold
        }

        function i(e, t) {
            return (void 0 === t.container || t.container === window ? o() ? n.width() + s(document.documentElement).scrollLeft() : n.width() + n.scrollLeft() : p(t.container).left + s(t.container).width()) <= p(e).left - t.threshold
        }

        function r(e, t) {
            return (void 0 === t.container || t.container === window ? o() ? s(document.documentElement).scrollTop() : n.scrollTop() : p(t.container).top) >= p(e).top + t.threshold + s(e).height()
        }

        function a(e, t) {
            return (void 0 === t.container || t.container === window ? o() ? s(document.documentElement).scrollLeft() : n.scrollLeft() : p(t.container).left) >= p(e).left + t.threshold + s(e).width()
        }

        function h(e) {
            return "none" === (e.currentStyle ? e.currentStyle.display : window.getComputedStyle(e, null).display)
        }

        function p(e) {
            for (var t = 0, n = 0, o = e; o;) {
                t += o.offsetTop, n += o.offsetLeft;
                try {
                    o = o.offsetParent
                } catch (e) {
                    o = void 0
                }
            }
            return {
                top: t,
                left: n
            }
        }
        s.on("lazy.refresh", function() {
            c()
        }), s.directive("ne-lazy", function(e, n, t) {
            var o = {
                    threshold: 50,
                    delaytime: 0,
                    event: "scroll",
                    effect: "show",
                    effect_speed: 600,
                    data_attribute: "original",
                    skip_invisible: !1,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                },
                i = function(e) {
                    if (!e) return !1;
                    var i = {};
                    return e = e.split(";"), s.each(e, function(e, t) {
                        if (u(e)) {
                            var n = u(e.split(":")[0] || ""),
                                o = u(e.split(":")[1] || "");
                            i[n] = o
                        }
                    }), i
                }(t);
            if (!i || !i.loaded) {
                i && (void 0 !== i.failurelimit && (i.failure_limit = i.failurelimit, delete i.failurelimit), void 0 !== i.effectspeed && (i.effect_speed = i.effectspeed, delete i.effectspeed), s.extend(o, i));
                var r, a = s(n);
                if (n.settings = o, n.loaded = !1, l.push(n), e.$on("showed", function(e, t) {
                        s.isNumber(t) && n.settings.tabIndex && !n.loaded && e === parseInt(n.settings.tabIndex) && !h(n) && a.trigger("appear")
                    }), e.$on("changed", function(e, t) {
                        !n.settings.slideIndex || n.loaded || e !== parseInt(n.settings.slideIndex) || h(n) || f(n, n.settings) || a.trigger("appear")
                    }), "img" == ((r = n) && s.isString(r.tagName) ? r.tagName.toLowerCase() : "")) a.attr("src"), a.bind("appear", function(e) {
                    ! function() {
                        if (!n.loaded) {
                            var e = a.attr("data-" + o.data_attribute);
                            e && (s("<img />").bind("load", function() {
                                a.hide(), a.attr("src", e), a[o.effect](o.effect_speed), l = d(l, function(e) {
                                    return !e.loaded
                                })
                            }).attr("src", e), n.loaded = !0, n.setAttribute("ne-lazy", "loaded:true;" + t), a.unbind("appear"))
                        }
                    }()
                });
                else s.widget(n).lazy(function(t) {
                    a.bind("appear", function(e) {
                        n.loaded || (t(), n.loaded = !0, a.unbind("appear"), l = d(l, function(e) {
                            return !e.loaded
                        }))
                    })
                });
                0 !== o.event.indexOf("scroll") && (0 === o.event.indexOf("delaytime") ? setTimeout(function() {
                    n.loaded || a.trigger("appear")
                }, o.delaytime) : a.bind(o.event, function() {
                    n.loaded || a.trigger("appear")
                })), c()
            }
        }), n.bind("resize", s.debounce(function() {
            c()
        }, 300)), window.attachEvent ? window.attachEvent("onscroll", function() {
            return c()
        }) : n.bind("scroll", s.throttle(function() {
            return c()
        }, 300))
    }), bowlder.define("/www/index20170701/js/tools.js", [], {
        e_stopPropagation: function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        },
        e_preventDefault: function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        getImageResize: function(e, t, n) {
            var o, i, r, a = n.width,
                s = n.height;
            return e = parseInt(e), t = parseInt(t), o = parseInt(e) / a, i = parseInt(t) / s, 1 !== (r = Math.min(o, i)) && (a = parseInt(a * r), s = parseInt(s * r)), {
                h: s,
                w: a
            }
        },
        getWindowSize: function() {
            var e = 0,
                t = 0;
            return document.documentElement && document.documentElement.clientHeight ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && document.body.clientHeight ? (e = document.body.clientWidth, t = document.body.clientHeight) : window.innerHeight && (e = window.innerWidth, t = window.innerHeight), {
                w: e,
                h: t
            }
        },
        getOffset: function(e) {
            for (var t = 0, n = 0, o = e; o;) t += o.offsetLeft, n += o.offsetTop, o = o.offsetParent;
            return {
                x: t,
                y: n
            }
        },
        getPointerX: function(e) {
            return e.pageX || e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft)
        },
        setFontSize: function(e) {
            var t = this.getWindowSize().w;
            if (t <= 750) {
                var n = t / 750 * 100;
                e.css("font-size", n)
            }
        },
        testDevice: function() {
            var e = window.navigator.appVersion;
            return {
                isMobile: /android.*?mobile|ipod|blackberry|bb\d+|phone/gi.test(e),
                isWx: /micromessenger/gi.test(e),
                isNewApp: /netease_news/i.test(e) || /NewsApp/gi.test(e),
                isIphone: /iphone/gi.test(e),
                isAndroid: /android/gi.test(e),
                isIpad: /ipad/gi.test(e),
                isPc: /Windows/gi.test(e) || /Macintosh/gi.test(e),
                isRetina: 2 <= window.devicePixelRatio && 320 < document.documentElement.getBoundingClientRect().width
            }
        },
        fixDatePre: function(e) {
            return e < 10 && (e = "0" + e), e
        },
        setDateFormat: function(e) {
            var t = new Date(e),
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                i = t.getDate(),
                r = t.getHours(),
                a = t.getMinutes();
            return n + "." + (o = this.fixDatePre(o)) + "." + (i = this.fixDatePre(i)) + " " + (r = this.fixDatePre(r)) + ":" + (a = this.fixDatePre(a))
        },
        setDateFormatByLine: function(e) {
            var t = new Date(e),
                n = t.getFullYear(),
                o = t.getMonth() + 1,
                i = t.getDate(),
                r = t.getHours(),
                a = t.getMinutes();
            return o = this.fixDatePre(o), i = this.fixDatePre(i), r = this.fixDatePre(r), a = this.fixDatePre(a), n + "-" + o + "-" + i
        },
        setImageResize: function(e, t, n) {},
        trim: function(e) {
            return String.prototype.trim = function() {
                return this.replace(/(^\s*)|(\s*$)/g, "")
            }, e.replace(/<.*?>/g, "").trim()
        },
        getVersion: function() {
            var e = 0;
            return "Microsoft Internet Explorer" == navigator.appName && "9." == navigator.appVersion.match(/9./i) ? e = 9 : "Microsoft Internet Explorer" == navigator.appName && "8." == navigator.appVersion.match(/8./i) ? e = 8 : "Microsoft Internet Explorer" == navigator.appName && "7." == navigator.appVersion.match(/7./i) ? e = 7 : "Microsoft Internet Explorer" == navigator.appName && "6." == navigator.appVersion.match(/6./i) && (e = 6), e
        },
        escapeHTML: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },
        getRandomArr: function(e) {
            for (var t = []; t.length < e;) {
                for (var n = Math.floor(Math.random() * e), o = !0, i = 0; i < t.length; i++) {
                    if (t[i] == n) {
                        o = !1;
                        break
                    }
                    o = !0
                }
                o && t.push(n)
            }
            return t
        },
        loadIndexAd: function(e, t, n) {
            var o = e;
            window.isNs9 && t ? o.html('<div class="ad960"><iframe src="' + t + '" width="' + n.ad960.w + '" height="' + n.ad960.h + '" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div><span class="channel_ad_2016">\u5e7f\u544a</span>') : t && o.html('<div class="ad1200"><iframe src="' + t + '" width="' + n.ad1200.w + '" height="' + n.ad1200.h + '" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe></div><span class="channel_ad_2016">\u5e7f\u544a</span>')
        },
        getMailEntryUrl: function(e) {
            e || ((e = {}).userDomain = bowlder.cookie.get("P_INFO").split("|")[0].split("@")[1]);
            var t = "msg.mail.163.com",
                n = "http://entry.mail.163.com/coremail/fcg/ntesdoor2?verifycookie=1&lightweight=1&from=urs";
            return e && -1 != e.userDomain.indexOf("126.com") && -1 == e.userDomain.indexOf("vip") ? (t = "msg.mail.126.com", n = "http://entry.mail.126.com/cgi/ntesdoor?verifycookie=1&lightweight=1&style=-1&from=urs") : e && -1 != e.userDomain.indexOf("yeah.net") ? (t = "msg.mail.yeah.net", n = "http://entry.yeah.net/cgi/ntesdoor?verifycookie=1&lightweight=1&style=-1&from=urs") : e && -1 != e.userDomain.indexOf("vip.163.com") ? (t = "msg.vip.163.com", n = "http://reg.vip.163.com/enterMail.m?style=-1&language=0&enterVip=true&verifycookie=1") : e && -1 != e.userDomain.indexOf("vip.126.com") ? (t = "msg.vip.126.com", n = "http://reg.vip.126.com/enterMail.m?style=-1&language=0&enterVip=true&verifycookie=1") : e && -1 != e.userDomain.indexOf("188.com") && -1 == e.userDomain.indexOf("vip") ? (t = "msg.mail.188.com/", n = "http://reg.188.com/enterMail.m?style=-1&language=0&enterVip=true&verifycookie=1") : e && -1 != e.userDomain.indexOf("vip.188.com") && (t = "msg.vip.188.com", n = "http://reg.vip.188.com/enterMail.m?style=-1&language=0&enterVip=true&verifycookie=1"), {
                host: t,
                sLoginMail: n
            }
        }
    }), bowlder.define("/www/index20170701/modules/index2017.js", ["../js/tools.js"], function(o) {
        var i, c = bowlder,
            r = this,
            e = r.$widget,
            a = (e.$root, {
                big_iframe: {
                    ad960: {
                        w: "960",
                        h: "100"
                    },
                    ad1200: {
                        w: "1200",
                        h: "125"
                    }
                },
                small_iframe: {
                    ad960: {
                        w: "630",
                        h: "91"
                    },
                    ad1200: {
                        w: "860",
                        h: "125"
                    }
                },
                two_iframe: {
                    ad960: {
                        w: "310",
                        h: "91"
                    },
                    ad1200: {
                        w: "425",
                        h: "125"
                    }
                }
            }),
            s = {
                index_top_ad: "",
                index_ad_a1: ""
            },
            l = window.ntesAd || {};

        function t() {
            var e = window.innerWidth || document.documentElement.clientWidth,
                t = c("#ne_wrap"),
                n = window.neteaseBgFestival;
            e < 1420 || /\?narrow/.test(location.search) ? window.isNs9 = r.myState.isNs9 = !0 : window.isNs9 = r.myState.isNs9 = !1, n && t[0] && !c(t).hasClass("closelianghui") && (r.myState.isNs9 && !c(t).hasClass("lianghui_960_wrap") ? (c(t).removeClass("lianghui_1200_wrap"), c(t).addClass("lianghui_960_wrap")) : r.myState.isNs9 || c(t).hasClass("lianghui_1200_wrap") || (c(t).removeClass("lianghui_960_wrap"), c(t).addClass("lianghui_1200_wrap"))), r.myState.isNs9 !== i && (i = !!r.myState.isNs9, r.$refresh(), l.topAd1 && s.index_top_ad[0] && l.topAd1.ad12_src && o.loadIndexAd(s.index_top_ad, l.topAd1.ad12_src, a.big_iframe), l.a1 && s.index_ad_a1[0] && l.a1.ad12_src && o.loadIndexAd(s.index_ad_a1, l.a1.ad12_src, a.small_iframe), c.emit("globalAd", a))
        }
        r.myState = {
            isNs9: !1,
            isIpad: !1,
            showNextPage: !1
        }, window.isNs9 = !1, window.indexIpad = !1, r.newsNextPage = function(e) {
            var t = e.target,
                n = c(t).parent();
            n[0] && (c(n).addClass("refresh_news_btn"), setTimeout(function() {
                c(n).removeClass("refresh_news_btn"), c(n).parent().addClass("cm_next_page")
            }, 500))
        }, r.closeFestivel = function() {
            var e = c("#ne_wrap");
            e[0] && c(e).hasClass("lianghui_1200_wrap") ? (c(e).removeClass("lianghui_1200_wrap"), c(e).addClass("closelianghui")) : e[0] && c(e).hasClass("lianghui_960_wrap") && (c(e).removeClass("lianghui_960_wrap"), c(e).addClass("closelianghui"))
        }, e.ready().then(function() {
            s = {
                index_top_ad: c(".index_top_ad"),
                index_ad_a1: c(".index_ad_a1")
            }, r.myState.isIpad || (t(), function() {
                if (window.ActiveXObject && !window.XMLHttpRequest) return;
                var n = c(".ns_sidebar"),
                    e = c(".ns_side_tolid", n);
                c(e).bind("click", function() {
                    var e = document.body.scrollTop || document.documentElement.scrollTop,
                        t = document.body.scrollLeft || document.documentElement.scrollLeft;
                    0 < e ? (e -= e / 3 + 10, window.scrollTo(t, e), setTimeout(arguments.callee, 10)) : (window.scrollTo(t, 0), n.addClass("hidden"))
                }), c(window).bind("scroll", c.throttle(function() {
                    var e = document.body.scrollTop || document.documentElement.scrollTop;
                    500 < e ? n.show() : n.hide()
                }, 200))
            }()), r.localIpPromise.then(function() {
                var e, t, n;
                window.localAddress && (window.HouseNavBendiTxt && function() {
                    var e = c("#js_nav_bendi"),
                        t = "",
                        n = "",
                        o = window.localAddress;
                    if (HouseNavBendiTxt.city && o)
                        for (var i = HouseNavBendiTxt.city, r = o.city, a = 0; a < i.length; a++)
                            if (i[a].name == r) {
                                t = i[a].shortName, n = i[a].url;
                                break
                            } if ("" == t && "" == n && HouseNavBendiTxt.province && o) {
                        var s = HouseNavBendiTxt.province,
                            l = o.province;
                        for (a = 0; a < s.length; a++)
                            if (s[a].name == l) {
                                t = s[a].shortName, n = s[a].url;
                                break
                            }
                    }
                    e && "" != t && "" != n && (3 <= t.length && c(e).parent().addClass("libendi"), c(e).html(t), c(e).attr("href", n)), e && "" == t && "" == n && c(e).attr("href", "https://news.163.com")
                }(), e = window.localAddress, t = c("#js_old_house"), n = c(t).attr("_adhouse"), c(t).attr("_zufang"), e && e.province && t[0] && ("\u4e0a\u6d77" == e.province.replace(/\u5e02$/, "").replace(/\u7701$/, "") && n || e.province.replace(/\u5e02$/, "").replace(/\u7701$/, "")))
            })
        }), r.init = function(e) {
            var t, n, o;
            r.localIpPromise = c.ajax.jsonp("//ipservice.163.com/locate/api/getLocByIp?key=C6E22B7D480E3312C74EC7EF013E50C5&callback=CALLBACK").then(function(e) {
                if (0 != e.data.status) return c.ajax.require("//ip.ws.126.net/ipquery").then(function() {
                    window.localAddress = localAddress
                });
                window.localAddress = e.data.result
            }, function() {
                return c.ajax.require("//ip.ws.126.net/ipquery").then(function() {
                    window.localAddress = localAddress
                })
            }), /iPad/i.test(navigator.userAgent) && (r.myState.isIpad = window.indexIpad = !0), t = 0, n = [{
                link: "http://report.12377.cn:13225/toreportinputNormal_anis.do",
                bpos: "0 0"
            }, {
                link: "http://report.12377.cn:13225/toreportinputNormal_anis.do",
                bpos: "0 -0px"
            }, {
                link: "http://www.12377.cn/node_548470.htm",
                bpos: "0 -40px"
            }, {
                link: "http://gov.163.com/special/jiazhiguan/",
                bpos: "0 -80px"
            }, {
                link: "http://jubao.12377.cn:13225/reportsitetitle.do",
                bpos: "0 -120px"
            }, {
                link: "http://dlfj5.cctv.com",
                bpos: "0 -160px"
            }], (o = document.getElementById("wljd")) && setInterval(function() {
                t = n.length - 1 < t ? 0 : t, o.style.backgroundPosition = n[t].bpos, o.href = n[t].link, t++
            }, 5e3)
        }, c(window).bind("resize", c.throttle(function() {
            c.emit("global.resize"), r.myState.isIpad || t()
        }, 300)), r.$watch("myState.isNs9", function(e, t) {
            c.emit("global.width", e)
        })
    }), bowlder.define("/modules/ne2015/adtracker/adTracker.js", [], function() {
        var s = bowlder;

        function e() {
            this.atList = {}, this.atDOM = {}, this.atData = {}, this.viewHeight = 0 < screen.height && (window.innerHeight || document.documentElement.clientHeight) >= screen.height ? screen.height : window.innerHeight || document.documentElement.clientHeight, this._item = ".at_item", this.curKey = "default"
        }
        return e.prototype = {
            init: function(e) {
                var t = this;
                t._item = e || t._item, s(window).bind("scroll", s.throttle(function() {
                    t.check()
                }, 500))
            },
            check: function() {
                document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                var i = this,
                    r = i.curKey,
                    e = s(i._item);
                i.atDOM[r] = e, i.atList[r] = i.atList[r] || [];
                var a = [];
                s.each(e, function(e, t) {
                    var n = e.getAttribute("adType");
                    a[n] ? a[n].counter++ : (a[n] = [], a[n].counter = 0), i.atList[r][n] = i.atList[r][n] || [];
                    var o = "none" != e.style.display && e.getBoundingClientRect();
                    i.atList[r][n] && !i.atList[r][n][t] && o && o.top <= i.viewHeight - .01 * o.height && 0 < o.top ? (i.atList[r][n][t] = !0, s.emit("atMonitor:in", {
                        idx: a[n].counter,
                        type: n,
                        key: r
                    })) : i.atList[r][n] && !i.atList[r][n][t] && s(e).hasClass(".fixed") ? i.atList[r][n][t] || (i.atList[r][n][t] = !0, s.emit("atMonitor:in", {
                        idx: a[n].counter,
                        type: n,
                        key: r
                    })) : i.atList[r][n] && i.atList[r][n][t] && o && (o.top < 0 || o.top > i.viewHeight - .01 * o.height) && (i.atList[r][n][t] = !1)
                })
            },
            receiver: function() {
                var t = this;
                s.on("atMonitor:in", function(e) {
                    window.console && console.log("\u7b2c" + e.idx + "\u6761\uff0c\u7c7b\u578b" + e.type + "\u5e7f\u544a\u9732\u51fa"), t.postAction(e.idx, e.type, 0)
                })
            },
            getData: function(e, i) {
                this.curKey;
                var r = e.replace(/.*l=([\d,]+)&.*/, "$1");
                r = 1 === r.length ? r : r.split(","), this.jsonp({
                    url: e,
                    callback: "cb",
                    time: 3e3,
                    success: function(e) {
                        var t = {};
                        if (e.ads.length < r.length) {
                            t.result = e.result, t.ads = [];
                            for (var n = 0; n < r.length; n++)
                                for (var o = 0; o < e.ads.length; o++)
                                    if (r[n] == e.ads[o].location) {
                                        t.ads.push(e.ads[o]);
                                        break
                                    }
                        } else t = e;
                        i && i(t)
                    },
                    fail: function(e) {
                        window.console && console.trace(e.message), i && i()
                    }
                })
            },
            makeAtData: function(e, t) {
                var n = this,
                    o = n.curKey;
                n.atData[o] = n.atData[o] || [], n.atData[o][e] = n.atData[o][e] || [];
                for (var i = 0; i < t.length; i++) n.atData[o][e].push(t[i]);
                return n.atData
            },
            clearData: function(e) {
                this.atData[e] = []
            },
            jsonp: function(t) {
                if (!(t = t || {}).url || !t.callback) throw new Error("\u53c2\u6570\u4e0d\u5408\u6cd5");
                var n = t.callbackName || ("jsonp_" + Math.random()).replace(".", ""),
                    e = document.getElementsByTagName("head")[0],
                    o = "";
                t.data ? (t.data[t.callback] = n, o += function(e) {
                    var t = [];
                    for (var n in e) t.push(encodeURI(n) + "=" + encodeURI(e[n]));
                    return t.join("&")
                }(t.data)) : o += t.callback + "=" + n;
                var i = document.createElement("script");
                i.setAttribute("charset", "UTF-8"), e.appendChild(i), window[n] = function(e) {
                    clearTimeout(i.timer), window[n] = null, t.success && t.success(e)
                }, i.src = t.url + (/\?/.test(t.url) ? "&" : "?") + o, t.time && (i.timer = setTimeout(function() {
                    window[n] = null, t.fail && t.fail({
                        message: "\u8d85\u65f6"
                    })
                }, t.time))
            },
            postAction: function(e, t, n) {
                var o = this,
                    i = o.curKey;
                if (o.atData[i] && o.atData[i][t] && 0 < o.atData[i][t].length && o.atData[i][t][e] && o.atData[i][t][e].monitor)
                    for (var r = 0; r < o.atData[i][t][e].monitor.length; r++) o.atData[i][t][e].monitor[r].action == n && o.atData[i][t][e].monitor[r].url && o.post(o.atData[i][t][e].monitor[r].url)
            },
            post: function(e) {
                var t = document.getElementsByTagName("head")[0],
                    n = (e = e, document.createElement("script"));
                n.src = e, t.appendChild(n), n.onerror = function(e) {
                    t.removeChild(n)
                }, n.onload = function(e) {
                    t.removeChild(n)
                }
            }
        }, new e
    }), bowlder.define("/modules/ne2015/adtracker/sspAd.js", ["adTracker.js"], function(s) {
        var l = bowlder;
        return {
            config: {
                top_ad_column: ".top_ad_column",
                bottom_ad_column: ".bottom_ad_column",
                right_rect_ad: ".right_ad_item"
            },
            getAdDetail: function(e) {
                for (var n = l(e), a = [], t = n.length, o = [], i = 0; i < t; i++) ! function(r) {
                    var e = n[r].getAttribute("requestUrl"),
                        t = n[r].getAttribute("adType");
                    a.push({
                        requestUrl: e,
                        adType: t
                    }), o.push(new l.Promise(function(o, i) {
                        s.getData(e, function(e) {
                            var t = a[r];
                            if (e) {
                                for (var n = 0; n < e.ads.length; n++) l.extend(t, e.ads[n]);
                                o(t)
                            } else i("No Data!")
                        })
                    }))
                }(i);
                return o
            },
            generateIframe: function(e, t, n, o) {
                var i = document.createElement("iframe"),
                    r = this.generateClickMonitor(t, n);
                o = o || {};
                i.setAttribute("width", o.w || "300"), i.setAttribute("height", o.h || "250"), i.setAttribute("frameborder", "0"), i.setAttribute("border", "0"), i.setAttribute("marginwidth", "0"), i.setAttribute("marginheight", "0"), i.setAttribute("scrolling", "no"), l(e).append(i), i.contentWindow.document.open(), i.contentWindow.document.write(r), i.contentWindow.document.close()
            },
            generateClickMonitor: function(e, t) {
                for (var n, o = "", i = 0; i < t.length; i++) o += 0 === i ? '"' + t[i] + '"' : ',"' + t[i] + '"';
                return n = '<script type="text/javascript">var urlMonitor=[' + o + '];document.onclick=function(e){if(urlMonitor&&urlMonitor.length){for(var i=0;i<urlMonitor.length;i++){post(urlMonitor[i])}}};function post(url){var head=document.getElementsByTagName("head")[0],url=url;var script=document.createElement("script");script.src=url;head.appendChild(script);script.onerror=function(e){head.removeChild(script)};script.onload=function(e){head.removeChild(script)}};<\/script>', e = e.replace("\x3c!--sspClickMonitor--\x3e", n)
            }
        }
    }), bowlder.define("/www/index20170701/js/plugins/nexad.js", ["../../../../modules/ne2015/adtracker/adTracker.js", "../../../../modules/ne2015/adtracker/sspAd.js"], function(r, a) {
        var i, s, l = bowlder,
            c = {};
        l.directive("ne-nexad", function(e, o, t) {
            var n = o.getAttribute("data-name");
            if (c[n] || (c[n] = 0), c[n]++, !o.loaded && 1 === c[n]) {
                var i = a.getAdDetail(o);
                i.length && l.q.all(i).then(function(e) {
                    var t = "",
                        n = function(e) {
                            var t = [];
                            if (e && e.monitor)
                                for (var n = 0; n < e.monitor.length; n++) 1 === e.monitor[n].action && t.push(e.monitor[n].url);
                            return t
                        }(e[0]);
                    e[0].hasHtmlResource && e[0].htmlResource && (t = e[0].htmlResource, "columnAd" == e[0].adType ? s ? a.generateIframe(l(o)[0], t, n, {
                        w: 960,
                        h: 100
                    }) : a.generateIframe(l(o)[0], t, n, {
                        w: 1200,
                        h: 125
                    }) : "rightAd" == e[0].adType && a.generateIframe(l(o)[0], t, n), r.makeAtData(e[0].adType, [e[0]]), o.loaded = !0)
                })
            }
        }), l.on("global.resize", function() {
            ! function() {
                var e, t = window.innerWidth || document.documentElement.clientWidth,
                    n = l(".column_ad_item");
                s = !!(t < 1420 || /\?narrow/.test(location.search));
                if (s !== i) {
                    i = !!s;
                    for (var o = 0; o < n.length; o++)(e = l("iframe", n[o])[0]) && (e.height = s ? (e.width = 960, 100) : (e.width = 1200, 125))
                }
            }()
        }), l.on("global.adscroll", function() {
            r.check()
        }), window.onload = function() {
            l.emit("global.adscroll")
        }, this.init = function(e) {
            var t = window.innerWidth || document.documentElement.clientWidth;
            s = !!(t < 1420 || /\?narrow/.test(location.search)), r.init(), r.receiver()
        }
    }), bowlder.define("/www/index20170701/js/plugins/modvisible.js", function() {
        var l = bowlder,
            o = [];

        function e() {
            l.each(o, function(e) {
                e()
            })
        }
        l.directive("ne-modvisible", function(e, r, t) {
            var a = l.widget(r);
            if (a) {
                var s, n = function() {
                    if (a.isReady) {
                        s && clearTimeout(s);
                        a.get("state");
                        var e = r.getBoundingClientRect(),
                            t = l(window).height(),
                            n = t - e.bottom,
                            o = e.top,
                            i = e.height || n - o;
                        0 <= o && 0 <= n && (s = setTimeout(function() {
                            a.set("myState", {
                                showNextPage: !0
                            })
                        }, 2e3)), o <= 45 - i && a.set("myState", {
                            showNextPage: !1
                        }), t <= o && a.set("myState", {
                            showNextPage: !1
                        })
                    }
                };
                o.push(n), a.ready().then(function() {
                    n()
                })
            }
        }), window.attachEvent ? (window.attachEvent("onscroll", l.debounce(e, 300)), window.attachEvent("onresize", l.debounce(e, 300))) : (l(window).bind("scroll", l.debounce(e, 300)), l(window).bind("resize", l.debounce(e, 300))), this.init = function(e) {}
    }), bowlder.define("/www/index20170701/js/request.js", function() {
        var $$ = bowlder,
            scope = this,
            mockCache = {},
            console = window.console || {},
            servicePath = "/",
            mockAPI = /dev\.|qa.developer|localhost|127.0.0.1|10./.test(location.host),
            JSON_START = /^\s*(\[|\{[^\{])/,
            JSON_END = /[\}\]]\s*$/;
        $$.ajax.defaults.transformResponse = function(data) {
            return $$.isString(data) && JSON_START.test(data) && JSON_END.test(data) && (data = eval("(" + data + ")")), data
        }, console.log = console.log || function() {}, $$.ajax.defaults.transformRequest = function(e) {
            if (e) {
                var t = [];
                for (var n in e) t.push(n + "=" + encodeURIComponent($$.isObject(e[n]) ? JSON.stringify(e[n]) : e[n]));
                return t.join("&")
            }
        }, $$.ajax.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8", scope.urlMap = {
            getMailInfo: "//{{host}}/cgi/mc?funcid=getusrnewmsgcnt&template=newmsgres_setcookie.htm&product=index163&username={{username}}&callback={{callbackName}}",
            getVipJifen: "//jf.vip.163.com/vipmall/front/getUserIntegral.m?callback={{callbackName}}",
            getTopPicHouse: "//house.163.com/special/00078A2B/index_pic_jsonp.js?callback={{callbackName}}",
            getLocalNewsKey: "",
            getLocalAd: "//g.163.com/ur?site=netease&affiliate=homepage&cat=homepage&type=dxhptexthouse&location=1&callback={{callbackName}}",
            getAdTextLink: "//g.163.com/ur?site=netease&affiliate=homepage&cat=homepage&type=textlink_fc&location=1&callback={{callbackName}}",
            getMyStockList: "//i.money.163.com/hs/api/myStockList.json?size={{size}}&{{callbackName}}=CALLBACK",
            followStock: "//i.money.163.com/hs/api/followToDefault?code={{code}}&{{callbackName}}=CALLBACK",
            getStockFeed: "//api.money.126.net/data/feed/{{code}}?{{callbackName}}=CALLBACK",
            getLatestInstantNews: "//www.163.com/special/00774IVV/hot_pop_js2017.js?callback={{callbackName}}&d=1231",
            getUrlDirect: "",
            getLivePreviewList: "//data.live.126.net/livechannel/previewlist.json?callback={{callbackName}}",
            getLiveFutureList: "//data.live.126.net/livechannel/futurelist.json?callback={{callbackName}}",
            getAutoList: "//static.ws.126.net/163/auto163/netease_index.js?callback={{callbackName}}",
            getAutohangqing: "//static.ws.126.net/163/auto163/yishou_hangqing_ipmap.js?callback={{callbackName}}",
            checkIsNewUserInKaola: "",
            getOrderInKaola: "",
            getHouseXFPrice: "//xf.house.163.com/product_house_{{cityCode}}/xf/js/price_{{cityCode}}.js",
            getHouseXFArea: "//xf.house.163.com/product_house_{{cityCode}}/xf/js/district_{{cityCode}}.js",
            getHouseESF: "//esf.house.163.com/{{cityCode}}/search/ajax!info.do?callback={{callbackName}}",
            getHouseZhiYe: "//gz.house.163.com/special/00878BSQ/www_zhiye_2016.js?callback={{callbackName}}",
            getAvatarFromTie: "//comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/users/myInfo?ibc=newspc&callback={{callbackName}}",
            getYaowenBohe: "//live.ent.163.com/api/recommend/163/home/p1?callback={{callbackName}}",
            getJuZhengBohe: "//live.ent.163.com/api/recommend/163/home/p2?callback={{callbackName}}",
            getEntBoheApi: "//live.ent.163.com/api/recommend/163/home/p3?callback={{callbackName}}",
            getSportsJcyc: "https://hongcai.163.com/api/site/v1/getMatchPrediction?callback={{callbackName}}",
            getSportsExperts: "https://hongcai.163.com/api/site/v1/getExpertRecommend?callback={{callbackName}}",
            getSportsRecommend: "https://hongcai.163.com/api/site/v1/getThreadRecommend?callback={{callbackName}}",
            getPredictionAPI: "https://hongcai.163.com/api/site/v1/getLotteryPrediction?callback={{callbackName}}"
        };
        var lastNewsFeedTime = (new Date).getTime(),
            diffTime, newsFeedMap = {};
        scope.service = function(e, t) {
            if ((t = t || {}).url = "getUrlDirect" === e || "getLocalNewsKey" === e ? t.url : scope.urlMap[e], "jsonp" !== t.method) return t.urlParams && (t.url = $$.template.replace(t.url, [t.urlParams])), t.method = t.method || "get", mockAPI && "getUrlDirect" !== e && (t.url = "/system/tools/node/get.js.node?charset=gbk&url=" + t.url), "get" == t.method ? $$.ajax(t) : newsFeedMap[t.url];
            var n = t.url;
            return n = $$.template.replace(n, t.urlParams ? t.urlParams : {
                callbackName: "callback"
            }), $$.ajax.jsonp(n, {
                headers: {
                    charset: t.charset || "gbk"
                }
            })
        }
    }), bowlder.define("/www/index20170701/modules/hp_textlink1_ad/hp_textlink1_ad.js", ["../../js/request.js"], function(n) {
        var o = this,
            i = bowlder,
            e = o.$widget,
            r = (e.roles, e.$root, i.widget("#hp_textlink1_ad"));
        r.ready(function() {
            var e = r.get("state");
            if ("" == i.cookie.get("NTES_hp_textlink1")) {
                var t = .5 <= Math.random() ? 0 : 1;
                r.emit("pause"), e.set(t), r.emit("play"), i.cookie.set("NTES_hp_textlink1", "old", "1", ".163.com", "/", "")
            }
            n.service("getAdTextLink", {
                method: "jsonp",
                urlParams: {
                    callbackName: "index2017_adtop_callback"
                }
            }).then(function(e) {
                e && e.data && e.data.adlist && (o.textlink = e.data.adlist, o.$refresh())
            }, function(e) {
                console.error(e)
            })
        }), o.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/slide/slide.js", ["../../js/request.js"], function(t) {
        var a = this,
            e = (bowlder, a.$widget);
        a.myState = {
            slidetoday: !0
        }, a.init = function(e) {}, e.ready().then(function() {
            var e;
            1 != (e = (new Date).getDay()) && 5 != e && 6 != e || (a.myState.slidetoday = !1), a.localIpPromise.then(function() {
                t.service("getTopPicHouse", {
                    method: "jsonp",
                    urlParams: {
                        callbackName: "INDEX_DATA_PIC_JSON"
                    }
                }).success(function(e) {
                    if (e) {
                        var t, n = window.localAddress,
                            o = e,
                            i = o.city[n.city] || o.city[n.city.replace(/.{1}$/g, "")],
                            r = o.province[n.province] || o.province[n.province.replace(/.{1}$/g, "")];
                        t = i || r, a.housePicList = t, a.$refresh()
                    }
                }).error(function(e, t, n, o) {})
            })
        })
    }), bowlder.define("/www/index20170701/modules/slideyc/slide.js", ["../../js/tools.js", "../../js/request.js"], function(e, t) {
        var n = this;
        bowlder, n.$widget;
        n.myState = {
            sucessycdata: !1
        }, n.taiduImgdata = [], n.taiduTab1data = [], n.taiduTab2data = [], n.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/live2/live.js", ["../../js/request.js"], function(e) {
        var l = this,
            c = bowlder;

        function t() {
            e.service("getLivePreviewList", {
                method: "jsonp",
                urlParams: {
                    callbackName: "previewlist"
                },
                charset: "utf-8",
                log: 0
            }).then(function(e) {
                var t, n, o, i, r, a = (t = e.data.live_review, n = [], c.each(t, function(e, t) {
                        0 === e.liveType && n.push(e)
                    }), n.splice(0, 4)),
                    s = (o = e.data.top, i = [], c.each(o, function(e, t) {
                        0 === e.liveType && i.push(e)
                    }), i.splice(0, 2));
                4 <= a.length ? s.splice(0, 0, a[1], a[2], a[3]) : s.unshift(a[1]), l.topLive = a[0], l.liveList = s, r = l.liveList, c.each(r, function(e) {
                    var t, n, o, i, r, a, s, l, c, u, d, f = e.liveStatus;
                    switch (f) {
                        case 0:
                            var h = (t = (t = e.startTime).replace(/-/g, "/"), n = new Date, o = n.getFullYear(), i = n.getMonth(), r = n.getDate(), a = new Date(t), s = a.getFullYear(), l = a.getMonth(), c = a.getDate(), u = p(a.getHours()), d = p(a.getMinutes()), o === s && i === l && r === c ? {
                                isToday: !0,
                                label: "\u4eca\u65e5" + u + ":" + d
                            } : {
                                isToday: !1,
                                label: p(l + 1) + "\u6708" + p(c) + "\u65e5"
                            });
                            e._label = h.label;
                            break;
                        case 1:
                            e._label = "\u6b63\u5728\u76f4\u64ad";
                            break;
                        case 2:
                            e._label = "\u5386\u53f2\u56de\u987e"
                    }
                }), l.$refresh()
            }, function(e) {
                console.error(e)
            })
        }

        function p(e) {
            return e < 10 ? "0" + e : e
        }
        l.boheList = [], l.topLive = {}, l.liveList = [], l.init = function(e) {
            t()
        }
    }), bowlder.define("/www/index20170701/modules/yaowen/yaowen.js", ["../../js/tools.js", "../../js/request.js"], function(i, t) {
        var r, a, o, s = this,
            l = bowlder,
            e = s.$widget,
            n = e.roles;
        s.myState = {
            cityyaowen: !0,
            morelocal: !1,
            localNews: !0
        }, s.localNewsName = "\u5317\u4eac\u65b0\u95fb";
        var c, u, d, f = [],
            h = "",
            p = {};

        function m(e) {
            var t = "\u5317\u4eac";
            return e && (t = e.replace(/\u5e02$/, "").replace(/\u7701$/, "").replace(/\u81ea\u6cbb\u533a$/, "")), "\u5b81\u590f\u56de\u65cf" == t ? t = "\u5b81\u590f" : "\u5e7f\u897f\u58ee\u65cf" == t ? t = "\u5e7f\u897f" : "\u65b0\u7586\u7ef4\u543e\u5c14" == t && (t = "\u65b0\u7586"), 3 <= t.length ? t : t + "\u65b0\u95fb"
        }

        function v() {
            var e = {};
            r && (c[r] && (e = c[r]), -1 != r.indexOf("\u5317\u4eac") || -1 != r.indexOf("\u5929\u6d25") || -1 != r.indexOf("\u91cd\u5e86") || -1 != r.indexOf("\u4e0a\u6d77") ? (s.localNewsName = m(r), g(e.inc)) : t.service("getLocalNewsKey", {
                method: "jsonp",
                url: e.inc + "?callback={{callbackName}}",
                urlParams: {
                    callbackName: "INDEX_NEWS_PROVINCE"
                },
                log: 0
            }).then(function(e) {
                var t = e.data,
                    n = "";
                t.topCity && t.topCity[u.county] ? (n = u.county, o = t.topCity[n]) : t && t[u.city] && (n = u.city, o = t[n]), o && o.inc && (s.localNewsName = m(n), a = n, g(o.inc))
            }, function(e) {
                console.error(e)
            }))
        }

        function g(e) {
            var o = e;
            t.service("getUrlDirect", {
                method: "jsonp",
                url: o + "?callback={{callbackName}}",
                urlParams: {
                    callbackName: "INDEX_DATA_NEWS_JSON"
                },
                log: 0
            }).then(function(e) {
                var t = e.data.news,
                    n = e.data.pics;
                s.localNewsList = t.splice(0, 18), s.localPicList = n.splice(0, 6), s.localNewsEntryLink = e.data.link, s.myState.localNews = !1, h = o, window.indexIpad || m(r) != s.localNewsName && m(a) != s.localNewsName || (! function() {
                    if (!p || !p.news) return;
                    var n = p.news,
                        o = 0,
                        i = function() {
                            var e = n[o++];
                            if (e) {
                                var t = e.adindex;
                                l.ajax.jsonp(e.url + "&callback=ad_info").success(function(e) {
                                    e && e.status && 1 == e.status && (s.localNewsList[t - 1] = e)
                                }).then(function() {
                                    i()
                                })
                            }
                        };
                    i()
                }(), function() {
                    if (!p || !p.pics) return;
                    var n = p.pics,
                        o = 0,
                        i = function() {
                            var e = n[o++];
                            if (e) {
                                var t = e.adindex;
                                l.ajax.jsonp(e.url + "&callback=ad_info").success(function(e) {
                                    e && e.status && 1 == e.status && (s.localPicList[t - 1] = e)
                                }).then(function() {
                                    i()
                                })
                            }
                        };
                    i()
                }(), s.$refresh()), s.$refresh(), l.emit("lazy.refresh")
            }, function(e) {
                console.error(e)
            })
        }
        s.myState = {
            sucessywycdata: !1
        }, s.yaowenTaiduData = [], s.showMoreCityPanel = function() {
            s.myState.morelocal = !0
        }, s.closeMoreCityPanel = function() {
            s.myState.morelocal = !1
        }, l.event("hover", function(t) {
            var e = !l.utils.msie || 8 < l.utils.msie ? "mouseenter" : "mouseover";
            l.dom.bind(this, e, function(e) {
                10 === l.utils.msie ? (s.showMoreCityPanel(), s.$refresh()) : t()
            })
        }), l.event("unhover", function(n) {
            var o = this;
            !l.utils.msie || 8 < l.utils.msie ? l.dom.bind(o, "mouseleave", function() {
                10 === l.utils.msie ? (s.closeMoreCityPanel(), s.$refresh()) : n()
            }) : l.dom.bind(o, "mouseout", function(e) {
                for (var t = e.relatedTarget ? e.relatedTarget : "mouseout" == e.type ? e.toElement : e.fromElement; t && t != o;) t = t.parentNode;
                t != o && n()
            })
        }), s.changeProvince = function(e, t) {
            if (t.stopPropagation(), e !== r) {
                for (var n in s.localNewsName = m(e), r = e, c) n == r && (flag = !1);
                for (var o in c.gocity) o == r && (flag = !0);
                v()
            }
        }, s.clickCity = function(t) {
            var n = t.srcElement || t.target;
            e.children[0].ready(function(e) {
                if ("a" == n.tagName.toLowerCase()) {
                    if (h == n.getAttribute("_url")) return void i.e_preventDefault(t);
                    (h = n.getAttribute("_url")) && (s.localNewsName = m(n.innerHTML), g(h)), i.e_preventDefault(t)
                }
            })
        }, s.init = function(e) {
            d = n.tabs[0], l.widget(d).on("showed", function(e, t) {
                    1 === e && l.emit("lazy.refresh")
                }), p = window.BENDI_AD_CONFIG, s.localIpPromise.then(function() {
                    c = window.houseProvinceNews || {}, (u = window.localAddress) && "\u5317\u4eac\u5e02" != u.province || -1 != window.location.search.indexOf("yw_default") ? s.myState.cityyaowen = !1 : s.myState.cityyaowen = !0,
                        function() {
                            if (c) {
                                for (var e in c) e == u.province && (r = e), "gocity" != e && "beijingapi" != e && f.push(e);
                                s.provinceList = f, v()
                            }
                        }()
                }),
                function() {
                    if (window.taiduYuanC) {
                        var e, t = window.taiduYuanC,
                            n = [];
                        if (t.length < 1) return;
                        e = i.getRandomArr(t.length);
                        for (var o = 0; o < e.length; o++) n.push(t[e[o]]);
                        s.yaowenTaiduData = n.splice(0, 4), s.myState.sucessywycdata = !0, s.$refresh()
                    }
                }()
        }
    }), bowlder.define("/www/index20170701/modules/product20190315/product.js", ["../../js/tools.js", "../../js/request.js"], function(n, o) {
        var i = this,
            r = bowlder,
            e = (window._, i.$widget),
            a = (e.roles, "");

        function t() {
            a = NTESCommonNavigator.login.getUserInfo();
            var e = n.getMailEntryUrl(a).host,
                t = n.getMailEntryUrl(a).sLoginMail;
            o.service("getMailInfo", {
                method: "jsonp",
                urlParams: {
                    host: e,
                    username: a.userMail,
                    callbackName: "mailcallback"
                }
            }).success(function(e) {
                e && 0 <= e ? (i.mailinfo = 99 < e ? "99+" : e, i.myState.logined = !0, i.myState.loginmail = t) : i.mailinfo = 0, i.$refresh()
            }).error(function(e, t, n, o) {}), -1 != e.indexOf("vip") ? o.service("getVipJifen", {
                method: "jsonp",
                urlParams: {
                    callbackName: "mailcallback"
                }
            }).success(function(e) {
                e && e.result && e.result.currentValue && 0 < e.result.currentValue ? 99 < e.result.currentValue ? i.jifeninfo = "99+" : i.jifeninfo = e.result.currentValue : i.jifeninfo = 0, i.myState.jifenhref = "http://jf.vip.163.com/vipmall/index.html", i.$refresh()
            }).error(function(e, t, n, o) {}) : i.mailJifenPromise = r.ajax.require("//uinfo.mail.163.com/servlet/queryjifen?p=" + Math.random()).then(function() {
                -2 != window.status && 1 == window.jifen_status && window.jifen ? 99 < window.jifen.split("|")[0] ? i.jifeninfo = "99+" : i.jifeninfo = window.jifen.split("|")[0] : i.jifeninfo = 0, i.myState.jifenhref = "http://jifen.mail.126.com/", i.$refresh()
            })
        }

        function s() {
            NTESCommonNavigator.login.checkLogin() && t(), i.$refresh()
        }
        i.myState = {
            logined: !1,
            openProduct: !1,
            loginmail: "http://email.163.com/#from=ntes_product"
        }, e.ready().then(function() {
            s()
        }), i.productAll = function() {
            i.myState.openProduct ? i.myState.openProduct = !1 : i.myState.openProduct = !0, i.$refresh()
        }, i.init = function(e) {}, NTESCommonNavigator.login.collectLoginSuccessCallback(s)
    }), bowlder.define("/www/index20170701/modules/gongkaike/gongkaike.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/sports/sports.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        o.ready().then(function() {
            n = e(".index_ad_a2"), i = window.ntesAd, e.on("globalAd", function(e) {
                n[0] && i && i.a2.ad12_src && t.loadIndexAd(n, i.a2.ad12_src, e.small_iframe)
            }, !0)
        }), this.init = function() {}
    }), bowlder.define("/www/index20170701/modules/ent/ent.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/entad/entad.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        o.ready().then(function() {
            n = e(".index_ad_column1"), (i = window.ntesAd).column1 && e.on("globalAd", function(e) {
                n[0] && i.column1.ad12_src && t.loadIndexAd(n, i.column1.ad12_src, e.big_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/money/money.js", ["../../js/tools.js"], function(t) {
        var n, o = bowlder,
            e = this.$widget;
        e.roles, window.ntesQuote;
        this.init = function(e) {}, e.ready().then(function() {
            n = o(".index_ad_a7"), _ntesad = window.ntesAd, o.on("globalAd", function(e) {
                n && _ntesad.a7_a.ad12_src && _ntesad.a7_r.ad12_src && (t.loadIndexAd(o(".tl_ad_left", n), _ntesad.a7_a.ad12_src, e.two_iframe), t.loadIndexAd(o(".tl_ad_right", n), _ntesad.a7_r.ad12_src, e.two_iframe))
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/auto/auto.js", ["../../js/tools.js", "../../js/request.js"], function(t, e) {
        var n, o = bowlder,
            i = this.$widget,
            r = {};
        i.ready().then(function() {
            n = o(".index_ad_a3"), r = window.ntesAd, o.on("globalAd", function(e) {
                n[0] && r && r.a3.ad12_src && t.loadIndexAd(n, r.a3.ad12_src, e.small_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/tech/tech.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        o.ready().then(function() {
            n = e(".index_ad_a4"), i = window.ntesAd, e.on("globalAd", function(e) {
                n[0] && i && i.a4.ad12_src && t.loadIndexAd(n, i.a4.ad12_src, e.small_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/house/house.js", ["../../js/tools.js"], function(t) {
        var n, o = bowlder,
            e = this.$widget,
            i = (e.roles, {});
        e.ready().then(function() {
            n = o(".index_ad_a8"), i = window.ntesAd, o.on("globalAd", function(e) {
                n && i.a8_a.ad12_src && i.a8_r.ad12_src && (t.loadIndexAd(o(".tl_ad_left", n), i.a8_a.ad12_src, e.two_iframe), t.loadIndexAd(o(".tl_ad_right", n), i.a8_r.ad12_src, e.two_iframe))
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/home/home.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/homead/homead.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        o.ready().then(function() {
            n = e(".index_ad_column2"), (i = window.ntesAd).column2 && e.on("globalAd", function(e) {
                n[0] && i.column2.ad12_src && t.loadIndexAd(n, i.column2.ad12_src, e.big_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/lady/lady.js", ["../../js/tools.js"], function(t) {
        var e = bowlder,
            n = this.$widget,
            o = (n.roles, {});
        n.ready().then(function() {
            index_ad_a5 = e(".index_ad_a5"), o = window.ntesAd, e.on("globalAd", function(e) {
                index_ad_a5[0] && o && o.a5.ad12_src && t.loadIndexAd(index_ad_a5, o.a5.ad12_src, e.small_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/comprehensive/comprehensive.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        this.init = function(e) {}, o.ready().then(function() {
            n = e(".index_ad_a6"), i = window.ntesAd, e.on("globalAd", function(e) {
                n[0] && i && i.a6.ad12_src && t.loadIndexAd(n, i.a6.ad12_src, e.small_iframe)
            }, !0)
        })
    }), bowlder.define("/www/index20170701/modules/synthesis/synthesis.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/footad/footad.js", ["../../js/tools.js"], function(t) {
        var n, e = bowlder,
            o = this.$widget,
            i = (o.roles, {});
        o.ready().then(function() {
            n = e(".index_foot_ad"), (i = window.ntesAd).footerAd && e.on("globalAd", function(e) {
                n[0] && i && i.footerAd.ad12_src && t.loadIndexAd(n, i.footerAd.ad12_src, e.big_iframe)
            }, !0)
        }), this.init = function() {}
    }), bowlder.define("/www/index20170701/modules/slide_foot/slide_foot.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/subfoot/subfoot.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/hot_pop/hot_pop.js", ["../../js/request.js"], function(t) {
        var s = this,
            l = bowlder,
            e = s.$widget,
            n = "";
        s.myState = {
            popshow: !1
        }, s.init = function(e) {}, e.ready().then(function() {
            var a;

            function e() {
                t.service("getLatestInstantNews", {
                    method: "jsonp",
                    urlParams: {
                        callbackName: "latestInstantNews"
                    }
                }).success(function(e) {
                    var t, n, o = "NTES_hot_pop_preTime_news";
                    if (e && e.news) {
                        n = (t = e.news).time;
                        var i = (new Date).getTime().toString();
                        i = parseInt(i.substr(0, 10));
                        var r = parseInt(l.cookie.get(o));
                        n && i - n <= 7200 && r != n && (s.popnewsrow = t, s.myState.popshow = !0, a = setTimeout(function() {
                            s.myState.popshow && (s.myState.popshow = !1, s.$refresh())
                        }, 3e4), l.cookie.set(o, n, "1", ".163.com", "/", ""), s.$refresh())
                    }
                })
            }
            n = l(".hot_pop_news"), e(), setInterval(function() {
                e()
            }, 12e4), n.bind("mouseover", function() {
                clearTimeout(a), a = null, setTimeout(function() {
                    s.myState.popshow && (s.myState.popshow = !1, s.$refresh())
                }, 3e3)
            })
        }), s.closePop = function(e) {
            s.myState.popshow = !1, s.$refresh()
        }
    }), bowlder.define("/modules/tabs/tabs.js", function() {
        var t, m, v, g, o, i, w = this,
            b = bowlder,
            y = w.state = {
                events: "mouseover",
                interval: 0,
                loop: !0,
                slide: !1,
                cursor: 0
            },
            r = y.cls = {
                active: "current"
            };

        function _(n) {
            if (isNaN(n) && m && g[n]) {
                var o = g[n][0];
                m.each(function(e, t) {
                    o == e ? n = t : v && o == v[t] && (n = t)
                })
            } else n = parseInt(n);
            return n
        }

        function x(e) {
            if (m) {
                var t = m.eq(e);
                if (m.removeClass(r.active), t && (t.addClass(r.active), y.ctrl = t[0]), v) {
                    v.removeClass(r.active);
                    var n = v.eq(e);
                    n && n.addClass(r.active), y.showhide && (v.hide(), n && n.show())
                }
                y.cursor = e, w.hasOwnProperty("callback") && w.callback.call(w, e), g["tab-nav-i"] && g["tab-nav-i"].css({
                    translateX: 100 * e + "%"
                }), w.$refresh(), w.$emit("showed", e, i), e != i && w.$emit("changed", e, i), i = y.cursor
            }
        }

        function T(e) {
            isNaN(e) || (y.interval = parseInt(e)), y._playTimer || (y._hasEvent || (t.bind("mouseover", $), t.bind("mouseout", T), y._hasEvent = 1), y._playTimer = setInterval(y.next.bind(w), y.interval))
        }

        function $() {
            y._playTimer && (clearInterval(y._playTimer), delete y._playTimer, w.onStop && w.onStop.call(w, y.cursor))
        }
        y.set = function(e) {
            delete y._delayTimer;
            var t, n = _(e);
            isNaN(n) ? "next" != e && "prev" != e || y[e]() : (n = n <= 0 ? 0 : o <= n ? o - 1 : n, w.hasOwnProperty("onShow") && !1 === (t = w.onShow(n, y.cursor)) || (w.$emit("onshow", n, i), n != i && w.$emit("onchange", n, i), t && t.then ? t.then(function() {
                x(n)
            }) : x(n)))
        }, y.next = function() {
            var e = y.cursor;
            o - 1 <= e && !y.loop || y.set((e + 1) % o)
        }, y.prev = function() {
            var e = y.cursor;
            e <= 0 && !y.loop || y.set(e <= 0 ? o - 1 : (e - 1) % o)
        }, w.init = function(n) {
            w.$on("pause", $), w.$on("play", T), w.$on("set", y.set), b.isDefined(y.showhide) || (y.showhide = !y.slide), g = n.roles, t = n.$root, m = g["tab-nav"], v = g["tab-body"], y.total = o = m ? m.length : 0, n.updateRoles(function() {
                m = g["tab-nav"], v = g["tab-body"], y.total = o = m ? m.length : 0, y.total && m[y.cursor] != y.ctrl && y.set(y.cursor)
            }), y.interval = parseInt(y.interval);
            var e = y.delay;
            if (y.events && (e && n.roleDelegate("mouseout", {
                    "tab-nav": function(e) {
                        return y._delayTimer && (clearTimeout(y._delayTimer), delete y._delayTimer), !1
                    }
                }), y.nav = function(e) {
                    m || n.updateRoles();
                    var t = e.getAttribute("tab-index");
                    if (t) return t = _(t), y.cursor != t && y.set(t), !1;
                    for (t = 0; t < o; t++)
                        if (m[t] == e) return y.cursor != t && y.set(t), !1
                }, n.roleDelegate(y.events, {
                    "tab-nav": function() {
                        e ? (y._delayTimer && clearTimeout(y._delayTimer), y._delayTimer = setTimeout(y.nav.bind(this, this), e)) : y.nav(this)
                    }
                })), n.roleDelegate("click", {
                    "tab-prev": function() {
                        return y.prev(), !1
                    },
                    "tab-next": function() {
                        return y.next(), !1
                    },
                    "tab-first": function() {
                        return y.set(0), w.onReset && w.onReset(), !1
                    },
                    "tab-last": function() {
                        return y.set(o - 1), !1
                    }
                }), y.interval && T(), y.set(y.cursor), y.slide) {
                b.isNumber(y.slide) || (y.slide = 300);
                var i, a, s, l, c, r, u = function(e) {
                        var t = {};
                        return t.left = e, t
                    },
                    d = function(e, t, n) {
                        e.animate(u(n), p), t.animate(u(0), p), x(i)
                    },
                    f = g["tab-body"],
                    h = f[0].clientWidth;
                f.each(function(e, t) {
                    0 != t && b(e).css(u(h))
                }), w.$on("showed", function(n, o) {
                    var e = f.eq(n),
                        t = f.eq(o);
                    f.each(function(e, t) {
                        t != n && t != o && (t < n ? b(e).css(u(-h)) : b(e).css(u(h)))
                    }), o < n ? t.animate(u(-h), y.slide) : t.animate(u(h), y.slide), e.animate(u(0), y.slide)
                });
                var p = y.slide / 2;
                f.bind("mousedown touchstart", function(e) {
                    a = !0, s = (new Date).getTime(), l = e.clientX, c = e.clientY, f.each(function(e, t) {
                        this.classList.contains("current") && (r = t)
                    }), w.$prevBody = f.eq(r), w.prevLeft = parseInt(w.$prevBody.css("left"));
                    var t = r - 1 <= 0 ? 0 : r - 1,
                        n = r + 1 >= f.length - 1 ? f.length - 1 : r + 1;
                    w.nowLefts = [parseInt(f.eq(t).css("left")), parseInt(f.eq(n).css("left"))]
                }), b(document).bind("mousemove touchmove", function(e) {
                    if (a) {
                        var t, n = e.clientX - l,
                            o = e.clientY - c;
                        if ("right" == (t = Math.abs(n) >= Math.abs(o) ? e.clientX - l < 0 ? "left" : "right" : e.clientY - c < 0 ? "up" : "down") && 0 != r) i = r - 1, w.nowLeft = w.nowLefts[0];
                        else {
                            if ("left" != t || r == f.length - 1) return void(w.$nowBody = null);
                            i = r + 1, w.nowLeft = w.nowLefts[1]
                        }
                        e.preventDefault(), w.$nowBody = f.eq(i), w.$nowBody.css({
                            left: w.nowLeft + n
                        }), w.$prevBody.css({
                            left: w.prevLeft + n
                        })
                    }
                }), b(document).bind("mouseup touchend", function(e) {
                    if (a) {
                        a = !1;
                        var t, n = ((new Date).getTime() - s) / 1e3,
                            o = e.clientX - l,
                            i = e.clientY - c;
                        if (t = Math.abs(o) >= Math.abs(i) ? e.clientX - l < 0 ? "left" : "right" : e.clientY - c < 0 ? "up" : "down", !(n < .25) || Math.abs(o) < 50 && Math.abs(i) < 50) {
                            var r = parseInt(w.$prevBody.css("left"));
                            r < 0 && Math.abs(r) > h / 2 || 0 < r && h / 2 < r ? d(w.$prevBody, w.$nowBody, 0 < r ? h : -h) : (w.$prevBody.animate(u(0), p), w.$nowBody && w.$nowBody.animate(u(w.nowLeft), p))
                        } else w.scroll(t)
                    }
                }), w.scroll = function(e) {
                    switch (e) {
                        case "left":
                            r != f.length - 1 && d(w.$prevBody, f.eq(r + 1), -h);
                            break;
                        case "right":
                            0 != r && d(w.$prevBody, f.eq(r - 1), h)
                    }
                }
            }
        }
    }), bowlder.define("/modules/slide/slide.js", function() {
        var t, a, l, s, c, u, d, f, o, h, p, i, m = this,
            v = bowlder,
            g = m.state = {
                events: "click",
                navEvent: "click",
                slideMethod: "scrollLeft",
                loop: !0,
                cursor: 0,
                duration: 300,
                _delta: 0,
                interval: 0
            },
            r = g.cls = {
                active: "current"
            },
            w = 0;

        function b(e) {
            if (g.loop && !g.noLoop && f) {
                var t = f.css("position"),
                    n = g.total * p;
                1 === g.loop && (g._interPage && (v.dom.css(g._interPage, {
                    left: 0
                }), g._interPage = null), 0 == e ? (g._interPage = f[g.total - 1], v.dom.css(g._interPage, {
                    left: "relative" == t ? -n : -p
                })) : e == g.total - 1 && (g._interPage = f[0], v.dom.css(g._interPage, {
                    left: "relative" == t ? n : p
                })))
            }
        }

        function y(e, t) {
            if (g.total) {
                if (g.slideLock = !0, setTimeout(function() {
                        g.slideLock = !1
                    }, 100 + g.duration), g.loop && !g.noLoop || (a["slide-next"] && (r.disableNav ? a["slide-next"][e == g.total - 1 ? "addClass" : "removeClass"](r.disableNav) : a["slide-next"][e == g.total - 1 ? "hide" : "show"]()), a["slide-prev"] && (r.disableNav ? a["slide-prev"][0 == e ? "addClass" : "removeClass"](r.disableNav) : a["slide-prev"][0 == e ? "hide" : "show"]())), s) {
                    var n = s.eq(e);
                    s.removeClass(r.active), n && n.addClass(r.active)
                }
                f && (o && o.removeClass(r.active), (o = f.eq(e)) && o.addClass(r.active)), _(e, t), g.cursor = e, m.hasOwnProperty("callback") && m.callback.call(m, e), m.$refresh(), m.$emit("showed", e, i), e != i && m.$emit("changed", e, i), i = g.cursor
            }
        }

        function _(e, t) {
            var n = p * (e - g._delta),
                o = ~g.slideMethod.indexOf("scroll"),
                i = "resize" == t || parseInt(e) != e;
            if (l = !o && d ? d : u) {
                var r = {};
                g.iscroll ? (r[g.slideMethod] = 0, l.css(r), n <= 0 ? n = 0 : g.iscroll.maxScrollX && n >= -g.iscroll.maxScrollX && (n = -g.iscroll.maxScrollX), g.iscroll.scrollTo(-n, 0, 250)) : (r[g.slideMethod] = o ? n : -n, h || !/^left|top$/.test(g.slideMethod) || /absolute|relative/i.test(l.css("position")) || (h = !0, l.css({
                    position: "relative"
                })), i ? l.css(r) : function(e, t, n) {
                    if (g.total < 2 || !f || "left" != g.slideMethod) return !1;
                    var o = (f.css("position") || "").toLowerCase();
                    if (!/absolute|relative/.test(o)) return !1;
                    var i, r, a = g.total * p,
                        s = f[e];
                    if (0 == e && "next" == t) i = -a;
                    else if (e == g.total - 1 && "prev" == t) i = p;
                    else {
                        if (2 != g.total) return !1;
                        r = 0, i = 1 == e ? -p : 0
                    }
                    return v.isDefined(r) || (r = "relative" == o ? "next" == t ? a : -a : -i), v.dom.css(s, {
                        left: r
                    }), l.animate({
                        left: i
                    }, g.duration, function() {
                        v.dom.css(s, {
                            left: 0
                        }), l.css(n), b(e)
                    }), !0
                }(e, t, r) || (b(e), l.animate(r, g.duration)))
            }
        }

        function x(e) {
            g._playTimer || (g._hasEvent || (t.bind("mouseover", n), t.bind("mouseout", x), m.$on("pause", n), m.$on("play", x), g._hasEvent = 1), g._playTimer = setInterval(g.next.bind(m), g.interval))
        }

        function n() {
            g._playTimer && (clearInterval(g._playTimer), delete g._playTimer, m.onStop && m.onStop(g.cursor))
        }

        function T(e) {
            return e ? e.offsetWidth + (parseInt(v.dom.css(e, "marginLeft")) || 0) + (parseInt(v.dom.css(e, "marginRight")) || 0) : 0
        }
        g.set = function(e, t) {
            var n;
            g.total < 2 || ("prev" != e && "next" != e ? (p || m.reInit(), void 0 === e && (e = g.cursor), e = e <= 0 ? 0 : e >= g.total ? g.total - 1 : e, m.hasOwnProperty("onShow") && !1 === (n = m.onShow(e, g.cursor)) || (m.$emit("onshow", e, g.cursor), e != i && m.$emit("onchange", e, i), n && n.then ? n.then(function() {
                y(e)
            }) : y(e, t))) : g[e]())
        }, g.next = function() {
            (g.loop && !g.noLoop || g.cursor != g.total - 1) && g.set((g.cursor + 1) % g.total, "next")
        }, g.prev = function() {
            (g.loop && !g.noLoop || g.cursor != g._delta) && g.set(g.cursor <= g._delta ? g.total - 1 : (g.cursor - 1) % g.total, "prev")
        }, m.reInit = function() {
            var e = m.$widget,
                t = 0;
            if (c = a["slide-atom"], s = a["slide-nav"], f = a["slide-page"], g.total = s && s.length || f && f.length, u) {
                var n = d && u[0] == d[0] ? u[0].parentNode.offsetWidth : u[0].offsetWidth;
                if (f && f[0] && (f.css({
                        width: n - (parseInt(f.css("paddingLeft")) || 0) - (parseInt(f.css("paddingRight")) || 0)
                    }), n = T(f[0])), p = n, !g.total)
                    if (c) {
                        var o = c.length,
                            i = Math.max(T(c[0]), T(c[1]));
                        if (c.each(function(e) {
                                t += T(e)
                            }), !1 === g.delta) g.total = t / p;
                        else {
                            var r = Math.floor(p / i);
                            p = i, g._delta = v.isNumber(g.delta) ? g.delta : Math.floor(n / p / 2), g.total = o - r + 1, g.cursor < g._delta && (g.cursor = g._delta), f = c
                        }
                    } else d && (g.total = d[0].offsetWidth / n);
                if (!g.total) return !1;
                t = t || p * g.total, d && d.css({
                    width: t
                }), e.plugins.scroll && !g.iscroll && (g.iscroll = e.plugins.scroll(t)), g.total = Math.ceil(g.total), w = v.dom.pos(u[0]).left + u[0].offsetWidth / 2
            }
        }, g.onclick = function(e) {
            g.slideLock || (e.clientX >= w ? g.next() : g.prev())
        }, g.onswipe = function(e) {
            var t = e.dx,
                n = e.dy;
            setTimeout(function() {
                Math.abs(t) > Math.abs(n) && (220 < Math.abs(t) || 60 < Math.abs(e.speedX) && 60 < Math.abs(t)) ? 0 < t ? g.prev() : g.next() : _(g.cursor)
            })
        }, g.onswiping = function(e) {
            var t = e.dx,
                n = e.dy;
            6 < Math.abs(n) && Math.abs(n) > Math.abs(t) ? _(g.cursor) : 6 < Math.abs(t) && Math.abs(n) < Math.abs(t) && (v.freezeScroll = !0, _(g.cursor - t / p)), _()
        }, m.init = function(i) {
            m.$on("pause", n), m.$on("play", x), m.$on("set", g.set), i.plugins = {}, t = i.$root, a = i.roles, i.ready(function() {
                if ((u = a["slide-body"]) && (d = a["slide-scroll"], !(!1 === m.reInit() && 1 < u[0].offsetWidth))) {
                    i.updateRoles(function() {
                        m.reInit(), g.set(g.cursor)
                    });
                    var e, t = g.delay;
                    g.interval && x(), g.set(g.cursor);
                    var o, n = function() {
                        e && clearTimeout(e), e = setTimeout(function() {
                            i.isReady && (m.reInit(), g.set(g.cursor, "resize"), e = null)
                        }, 200)
                    };
                    v(window).bind("resize", n), m.destroy = function() {
                        v(window).unbind("resize", n)
                    }, t ? (o = function(e) {
                        !g._delayTimer && (g._delayTimer = setTimeout(g.set.bind(m, e), m.delay))
                    }.bind(m), i.roleDelegate("mouseout", {
                        "slide-nav": function() {
                            return g._delayTimer && (clearTimeout(g._delayTimer), delete g._delayTimer), !1
                        }
                    })) : o = g.set.bind(m), i.roleDelegate(g.events, {
                        "slide-nav": function(e) {
                            for (var t = 0, n = (s = a["slide-nav"]).length; t < n; t++)
                                if (s[t] == this) return g.cursor != t && o(t), !1
                        }
                    }), i.roleDelegate(g.navEvent, {
                        "slide-prev": function() {
                            return g.prev(), !1
                        },
                        "slide-next": function() {
                            return g.next(), !1
                        }
                    })
                }
            })
        }
    }), bowlder.define("/www/index20170701/modules/tabs/tabs.js", function() {
        var o, m, v, g, w, s, b = this,
            y = (b.$widget, bowlder),
            _ = b.state = {
                events: "mouseover",
                interval: 0,
                loop: !0,
                slide: !1,
                cursor: 0
            },
            i = _.cls = {
                active: "current"
            };

        function x(n) {
            if (isNaN(n) && m && g[n]) {
                var o = g[n][0];
                m.each(function(e, t) {
                    o == e ? n = t : v && o == v[t] && (n = t)
                })
            } else n = parseInt(n);
            return n
        }
        var T = {},
            l = {};

        function $(e) {
            y.each(e, function(e) {
                var t = e.getAttribute("lazy-src");
                /^loaded:true/g.test(t) || (e.setAttribute("src", t), e.setAttribute("lazy-src", "loaded:true;src:" + t))
            })
        }

        function k(e) {
            if (m) {
                var t = m.eq(e);
                if (m.removeClass(i.active), t && (t.addClass(i.active), _.ctrl = t[0]), v) {
                    v.removeClass(i.active);
                    var n = v.eq(e);
                    n && n.addClass(i.active), _.showhide && (v.hide(), n && n.show())
                }
                _.cursor = e, b.hasOwnProperty("callback") && b.callback.call(b, e), g["tab-nav-i"] && g["tab-nav-i"].css({
                    translateX: 100 * e + "%"
                }), b.$refresh(), b.$emit("showed", e, s), e != s && b.$emit("changed", e, s), s = _.cursor
            }
        }

        function j(e) {
            isNaN(e) || (_.interval = parseInt(e)), _._playTimer || (_._hasEvent || (o.bind("mouseover", A), o.bind("mouseout", j), _._hasEvent = 1), _._playTimer = setInterval(_.next.bind(b), _.interval))
        }

        function A() {
            _._playTimer && (clearInterval(_._playTimer), delete _._playTimer, b.onStop && b.onStop.call(b, _.cursor))
        }
        _.set = function(e) {
            var t, n, o, i;
            ! function(e) {
                if (!l["tab-lazy-img-" + e]) {
                    var t = y(v[e]).find("[lazy-src]");
                    l["tab-lazy-img-" + e] = {
                        nodeList: t,
                        resolved: !1
                    }
                }
            }(e), T["tab-lazy-" + e] && !T["tab-lazy-" + e].resolved && (t = T["tab-lazy-" + e], n = t.fnList, o = t.widgetList, 0 < n.length && !t.resolved && (y.each(n, function(e, t) {
                e()
            }), y.each(o, function(t) {
                t.ready().then(function() {
                    var e = t.get("tabShow");
                    y.isFunction(e) && e()
                })
            }), t.resolved = !0)), l["tab-lazy-img-" + e] && !l["tab-lazy-img-" + e].resolved && ($(l["tab-lazy-img-" + (i = e)].nodeList), l["tab-lazy-img-" + i].resolved = !0), delete _._delayTimer;
            var r, a = x(e);
            isNaN(a) ? "next" != e && "prev" != e || _[e]() : (a = a <= 0 ? 0 : w <= a ? w - 1 : a, b.hasOwnProperty("onShow") && !1 === (r = b.onShow(a, _.cursor)) || (b.$emit("onshow", a, s), a != s && b.$emit("onchange", a, s), r && r.then ? r.then(function() {
                k(a)
            }) : k(a)))
        }, _.next = function() {
            var e = _.cursor;
            w - 1 <= e && !_.loop || _.set((e + 1) % w)
        }, _.prev = function() {
            var e = _.cursor;
            e <= 0 && !_.loop || _.set(e <= 0 ? w - 1 : (e - 1) % w)
        }, b.init = function(n) {
            /iPad/i.test(window.navigator.userAgent) && (b.state.isIpad = !0), b.$on("pause", A), b.$on("play", j), b.$on("set", _.set), y.isDefined(_.showhide) || (_.showhide = !_.slide), g = n.roles, o = n.$root, m = g["tab-nav"], v = g["tab-body"], _.total = w = m ? m.length : 0, y.each(v, function(e, n) {
                var t = y(e).find("[lazy-tab]") || [];
                T["tab-lazy-" + n] = {
                    fnList: [],
                    widgetList: [],
                    resolved: !1
                }, y.each(t, function(t) {
                    y.widget(t).lazy(function(e) {
                        T["tab-lazy-" + n].fnList.push(e), T["tab-lazy-" + n].widgetList.push(y.widget(t))
                    }), y.widget(t).ready(function(e) {
                        var t = e.$root.find("[lazy-src]");
                        t.length && $(t)
                    })
                })
            }), n.updateRoles(function() {
                m = g["tab-nav"], v = g["tab-body"], _.total = w = m ? m.length : 0, _.total && m[_.cursor] != _.ctrl && _.set(_.cursor)
            }), _.interval = parseInt(_.interval);
            var t = _.delay;
            _.events && (b.state.isIpad && (_.events = "touchend", t = 0), t && n.roleDelegate("mouseout", {
                "tab-nav": function(e) {
                    return _._delayTimer && (clearTimeout(_._delayTimer), delete _._delayTimer), !1
                }
            }), _.nav = function(e) {
                m || n.updateRoles();
                var t = e.getAttribute("tab-index");
                if (t) return t = x(t), _.cursor != t && _.set(t), !1;
                for (t = 0; t < w; t++)
                    if (m[t] == e) return _.cursor != t && _.set(t), !1
            }, n.roleDelegate(_.events, {
                "tab-nav": function(e) {
                    b.state.isIpad && e.preventDefault(), t ? (_._delayTimer && clearTimeout(_._delayTimer), _._delayTimer = setTimeout(_.nav.bind(this, this), t)) : _.nav(this)
                }
            }));
            var e = b.state.isIpad ? "touchend" : "click";
            if (n.roleDelegate(e, {
                    "tab-prev": function() {
                        return _.prev(), !1
                    },
                    "tab-next": function() {
                        return _.next(), !1
                    },
                    "tab-first": function() {
                        return _.set(0), b.onReset && b.onReset(), !1
                    },
                    "tab-last": function() {
                        return _.set(w - 1), !1
                    }
                }), _.interval && j(), _.set(_.cursor), _.slide) {
                y.isNumber(_.slide) || (_.slide = 300);
                var i, a, s, l, c, r, u = function(e) {
                        var t = {};
                        return t.left = e, t
                    },
                    d = function(e, t, n) {
                        e.animate(u(n), p), t.animate(u(0), p), k(i)
                    },
                    f = g["tab-body"],
                    h = f[0].clientWidth;
                f.each(function(e, t) {
                    0 != t && y(e).css(u(h))
                }), b.$on("showed", function(n, o) {
                    var e = f.eq(n),
                        t = f.eq(o);
                    f.each(function(e, t) {
                        t != n && t != o && (t < n ? y(e).css(u(-h)) : y(e).css(u(h)))
                    }), o < n ? t.animate(u(-h), _.slide) : t.animate(u(h), _.slide), e.animate(u(0), _.slide)
                });
                var p = _.slide / 2;
                f.bind("mousedown touchstart", function(e) {
                    a = !0, s = (new Date).getTime(), l = e.clientX, c = e.clientY, f.each(function(e, t) {
                        this.classList.contains("current") && (r = t)
                    }), b.$prevBody = f.eq(r), b.prevLeft = parseInt(b.$prevBody.css("left"));
                    var t = r - 1 <= 0 ? 0 : r - 1,
                        n = r + 1 >= f.length - 1 ? f.length - 1 : r + 1;
                    b.nowLefts = [parseInt(f.eq(t).css("left")), parseInt(f.eq(n).css("left"))]
                }), y(document).bind("mousemove touchmove", function(e) {
                    if (a) {
                        var t, n = e.clientX - l,
                            o = e.clientY - c;
                        if ("right" == (t = Math.abs(n) >= Math.abs(o) ? e.clientX - l < 0 ? "left" : "right" : e.clientY - c < 0 ? "up" : "down") && 0 != r) i = r - 1, b.nowLeft = b.nowLefts[0];
                        else {
                            if ("left" != t || r == f.length - 1) return void(b.$nowBody = null);
                            i = r + 1, b.nowLeft = b.nowLefts[1]
                        }
                        e.preventDefault(), b.$nowBody = f.eq(i), b.$nowBody.css({
                            left: b.nowLeft + n
                        }), b.$prevBody.css({
                            left: b.prevLeft + n
                        })
                    }
                }), y(document).bind("mouseup touchend", function(e) {
                    if (a) {
                        a = !1;
                        var t, n = ((new Date).getTime() - s) / 1e3,
                            o = e.clientX - l,
                            i = e.clientY - c;
                        if (t = Math.abs(o) >= Math.abs(i) ? e.clientX - l < 0 ? "left" : "right" : e.clientY - c < 0 ? "up" : "down", !(n < .25) || Math.abs(o) < 50 && Math.abs(i) < 50) {
                            var r = parseInt(b.$prevBody.css("left"));
                            r < 0 && Math.abs(r) > h / 2 || 0 < r && h / 2 < r ? d(b.$prevBody, b.$nowBody, 0 < r ? h : -h) : (b.$prevBody.animate(u(0), p), b.$nowBody && b.$nowBody.animate(u(b.nowLeft), p))
                        } else b.scroll(t)
                    }
                }), b.scroll = function(e) {
                    switch (e) {
                        case "left":
                            r != f.length - 1 && d(b.$prevBody, f.eq(r + 1), -h);
                            break;
                        case "right":
                            0 != r && d(b.$prevBody, f.eq(r - 1), h)
                    }
                }
            }
        }
    }), bowlder.define("/www/index20170701/modules/modnews/modnews.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/sports/mods/mods.js", [], function() {
        var o = bowlder,
            e = this.$widget;
        this.myState = {
            showNextPage: !1
        }, this.init = function(e) {}, e.ready(function() {
            if (window.friend_netes_api) {
                var e, t = window.friend_netes_api,
                    n = "";
                t.sports.title && t.sports.docurl && o(".sports_text12") && (e = o(".sports_text12"), n = '<a href="' + t.sports.docurl + '">' + t.sports.title + "</a>", e.html(n))
            }
        })
    }), bowlder.define("/www/index20170701/modules/sports/mods/hongcai/hongcai.js", ["../../../../js/request.js"], function(e) {
        var n = this,
            t = bowlder,
            o = n.$widget;
        n.jcyclist = [], n.expertslist = [], n.rmdlist = [], n.init = function() {}, o.ready().then(function() {
            e.service("getSportsJcyc", {
                method: "jsonp",
                urlParams: {
                    callbackName: "jcyccallback"
                }
            }).then(function(e) {
                n.jcyclist = e.data.data;
                var t = new Date(e.data.data.matchInfo.matchTime.replace(/-/g, "/"));
                n.jcyclist.curTime = function(e) {
                    e.getFullYear();
                    var t = e.getMonth() + 1;
                    t = t < 10 ? "0" + t : t;
                    var n = e.getDate();
                    n = n < 10 ? "0" + n : n;
                    var o = e.getHours();
                    o = o < 10 ? "0" + o : o;
                    var i = e.getMinutes();
                    return t + "/" + n + " " + o + ":" + (i = i < 10 ? "0" + i : i)
                }(t), n.$refresh()
            }, function(e) {
                console.error(e)
            }), e.service("getSportsExperts", {
                method: "jsonp",
                urlParams: {
                    callbackName: "expertscallback"
                }
            }).then(function(e) {
                n.expertslist = e.data.data, n.$refresh()
            }, function(e) {
                console.error(e)
            }), e.service("getSportsRecommend", {
                method: "jsonp",
                urlParams: {
                    callbackName: "rmdcallback"
                }
            }).then(function(e) {
                n.rmdlist = e.data.data, n.$refresh()
            }, function(e) {
                console.error(e)
            }), o.ready().then(function() {
                index_ad_a2 = t(".index_ad_a2"), _ntesad = window.ntesAd, t.on("globalAd", function(e) {
                    o.children[0].ready(function(e) {
                        0 != e.scope.state.cursor && e.scope.state.set(0)
                    })
                }, !0)
            })
        })
    }), bowlder.define("/www/index20170701/modules/ent/mods2/mods.js", ["../../../js/request.js"], function(e) {
        var t = this,
            o = bowlder,
            n = t.$widget;
        t.boheEntList = [], t.init = function(e) {}, n.ready().then(function() {
            if (window.friend_netes_api) {
                var e, t = window.friend_netes_api,
                    n = "";
                t.ent.title && t.ent.docurl && o(".ent_text12") && (e = o(".ent_text12"), n = '<a href="' + t.ent.docurl + '">' + t.ent.title + "</a>", e.html(n))
            }
        })
    }), bowlder.define("/modules/ne2015/common-nav/constants/loginConfig.js", [], function() {
        bowlder;
        return {
            PATH: {
                WB_PATH: "http://t.163.com/service/newMessage/",
                DEFAULT_MAIL_PATH: "http://email.163.com#from=163nav_icon",
                LOG_IN_OUT_URL: "https://reg.163.com/Logout.jsp"
            },
            DOMAIN_API: {
                "126.com": "mail.126.com",
                "yeah.net": "mail.yeah.net",
                "163.com": "mail.163.com",
                "188.com": "mail.188.com",
                "vip.163.com": "vip.163.com",
                "vip.126.com": "vip.126.com"
            },
            PRODUCTS: {
                reg: {
                    name: "\u7f51\u6613\u5e10\u53f7\u4e2d\u5fc3",
                    url: "http://reg.163.com/Main.jsp?username=pInfo"
                },
                "163.com": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "https://mail.163.com/entry/cgi/ntesdoor?t=1&verifycookie=1&lightweight=1&df=163navi"
                },
                "126.com": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "https://mail.126.com/entry/cgi/ntesdoor?t=1&verifycookie=1&lightweight=1&style=-1&df=163navi"
                },
                "vip.126.com": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "http://reg.vip.126.com/enterMail.m"
                },
                "yeah.net": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "https://mail.yeah.net/entry/cgi/ntesdoor?t=1&verifycookie=1&lightweight=1&style=-1&def=163navi"
                },
                "188.com": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "http://reg.mail.188.com/servlet/enter"
                },
                "vip.163.com": {
                    name: "\u6211\u7684\u90ae\u7bb1",
                    url: "http://reg.vip.163.com/enterMail.m?enterVip=true-----------"
                },
                lofter: {
                    name: "\u6211\u7684LOFTER",
                    url: "http://www.lofter.com/?act=qb163rk_20141031_02"
                },
                photo: {
                    name: "\u6211\u7684\u76f8\u518c",
                    url: "http://photo.163.com/?username=pInfo"
                },
                yuehui: {
                    name: "\u6211\u7684\u540c\u57ce\u7ea6\u4f1a",
                    url: "http://yuehui.163.com/"
                },
                blog: {
                    name: "\u6211\u7684\u535a\u5ba2",
                    url: "http://blog.163.com/passportIn.do?entry=163"
                },
                ht: {
                    name: "\u6211\u7684\u82b1\u7530",
                    url: "http://love.163.com?keyfrom=163site.mynavi"
                },
                note: {
                    name: "\u6211\u7684\u4e91\u7b14\u8bb0",
                    url: "http://note.youdao.com/web?entry=163.com"
                },
                easyread: {
                    name: "\u7f51\u6613\u4e91\u9605\u8bfb",
                    url: "http://yuedu.163.com/#f=topnav"
                },
                yunketang: {
                    name: "\u4e91\u8bfe\u5802",
                    url: "http://study.163.com/?utm_source=163.com&utm_medium=web_ursproduct&utm_campaign=business"
                },
                kaola: {
                    name: "\u6211\u7684\u8003\u62c9",
                    url: "http://rd.da.netease.com/redirect?t=ZKQJgA&p=IQyfy3&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505"
                }
            },
            DEFAULT_PRODUCTS: ["lofter", "photo", "ht", "yuehui", "blog", "note", "easyread", "yunketang", "kaola"],
            COOKIES: {
                huatian: "n_ht_s"
            },
            CHANNELS: {
                news: {
                    name: "\u65b0\u95fb",
                    url: "https://news.163.com/"
                },
                sports: {
                    name: "\u4f53\u80b2",
                    url: "http://sports.163.com/"
                },
                hotspur: {
                    name: "\u4f53\u80b2",
                    url: "http://sports.163.com/"
                },
                ent: {
                    name: "\u5a31\u4e50",
                    url: "http://ent.163.com/"
                },
                money: {
                    name: "\u8d22\u7ecf",
                    url: "http://money.163.com/"
                },
                biz: {
                    name: "\u8d22\u7ecf",
                    url: "http://money.163.com/"
                },
                auto: {
                    name: "\u6c7d\u8f66",
                    url: "http://auto.163.com/"
                },
                tech: {
                    name: "\u79d1\u6280",
                    url: "http://tech.163.com/"
                },
                digi: {
                    name: "\u6570\u7801",
                    url: "http://digi.163.com/"
                },
                mobile: {
                    name: "\u624b\u673a",
                    url: "http://mobile.163.com/"
                },
                lady: {
                    name: "\u5973\u4eba",
                    url: "http://lady.163.com/"
                },
                sense: {
                    name: "\u5973\u4eba",
                    url: "http://lady.163.com/"
                },
                astro: {
                    name: "\u5973\u4eba",
                    url: "http://lady.163.com/"
                },
                fushi: {
                    name: "\u5973\u4eba",
                    url: "http://lady.163.com/"
                },
                house: {
                    name: "\u623f\u4ea7",
                    url: "http://house.163.com/"
                },
                blog: {
                    name: "\u535a\u5ba2",
                    url: "http://blog.163.com/"
                },
                edu: {
                    name: "\u6559\u80b2",
                    url: "http://edu.163.com/"
                },
                kids: {
                    name: "\u6559\u80b2",
                    url: "http://edu.163.com/"
                },
                travel: {
                    name: "\u65c5\u6e38",
                    url: "http://travel.163.com/"
                },
                food: {
                    name: "\u65c5\u6e38",
                    url: "http://travel.163.com/"
                },
                fashion: {
                    name: "\u65f6\u5c1a",
                    url: "http://fashion.163.com/"
                },
                home: {
                    name: "\u5bb6\u5c45",
                    url: "http://home.163.com/"
                },
                baby: {
                    name: "\u4eb2\u5b50",
                    url: "http://baby.163.com/"
                },
                bbs: {
                    name: "\u8bba\u575b",
                    url: "http://bbs.163.com/"
                },
                art: {
                    name: "\u827a\u672f",
                    url: "http://fashion.163.com/art"
                },
                men: {
                    name: "\u541b\u5b50",
                    url: "http://men.163.com/"
                },
                war: {
                    name: "\u519b\u4e8b",
                    url: "http://war.163.com/"
                },
                discovery: {
                    name: "\u63a2\u7d22",
                    url: "http://discovery.163.com/"
                },
                gongyi: {
                    name: "\u516c\u76ca",
                    url: "http://gongyi.163.com/"
                },
                media: {
                    name: "\u4f20\u5a92",
                    url: "http://media.163.com/"
                },
                daxue: {
                    name: "\u6821\u56ed",
                    url: "http://daxue.163.com/"
                },
                video: {
                    name: "\u89c6\u9891",
                    url: "http://v.163.com/"
                },
                gov: {
                    name: "\u653f\u52a1",
                    url: "http://gov.163.com/"
                },
                game: {
                    name: "\u6e38\u620f",
                    url: "http://play.163.com/"
                },
                tie: {
                    name: "\u8ddf\u8d34",
                    url: "http://tie.163.com/"
                },
                foxue: {
                    name: "\u4f5b\u5b66",
                    url: "http://foxue.163.com/"
                },
                health: {
                    name: "\u5065\u5eb7",
                    url: "http://jiankang.163.com/"
                },
                shoucang: {
                    name: "\u6536\u85cf",
                    url: "http://shoucang.163.com/"
                },
                wine: {
                    name: "\u9152\u9999",
                    url: "http://jiu.163.com/"
                },
                jiu: {
                    name: "\u9152\u9999",
                    url: "http://jiu.163.com/"
                }
            }
        }
    }), bowlder.define("/modules/ne2015/common-nav/constants/productConfig.js", [], function() {
        bowlder;
        return {
            LOFTER: {
                PATH: "http://www.lofter.com/entry?act=qb163sydl_20140917_01&from=163top",
                POPLIST: [{
                    url: "http://www.lofter.com/entry?act=qb163sydl_20140917_03&from=163top",
                    name: "\u8fdb\u5165LOFTER"
                }, {
                    url: "http://www.lofter.com/entry?act=qb163sydl_20140917_04&from=163top&target=http://www.lofter.com/activity",
                    name: "\u70ed\u95e8\u8bdd\u9898"
                }, {
                    url: "http://www.lofter.com/selections?act=qb163sydl_20140917_05",
                    name: "\u4e13\u9898\u7cbe\u9009"
                }, {
                    url: "http://www.lofter.com/entry?act=qb163sydl_20140917_06&from=163top&target=http://www.lofter.com/app",
                    name: "\u4e0b\u8f7dLOFTER\u5ba2\u6237\u7aef"
                }]
            }
        }
    }), bowlder.define("/modules/ne2015/common-nav/constants/index.js", ["loginConfig.js", "productConfig.js"], function(e, t) {
        bowlder;
        return {
            LOGIN_CONFIG: e,
            PRODUCT_CONFIG: t
        }
    }), bowlder.define("/modules/ne2015/common-nav/core/urs.js", [], function() {
        var n = this,
            e = bowlder;
        window._$needUrsBgp = 1, URS && URS.setPkidAndPd({
            pkid: "MODXOXd",
            pd: "163",
            mode: 2
        }), e.extend(n, {
            loadURS: function(e) {
                var t = {
                    autoSuffix: 1,
                    needUrsBgp: 1,
                    skin: 0,
                    product: "163",
                    promark: "MODXOXd",
                    productKey: "5092c4b74f2a3fbfe2216e18ebe7ff8d",
                    swidth: "190",
                    hintTxt: "\u6309\u4f4f\u6ed1\u5757 \u62d6\u52a8\u5b8c\u6210\u62fc\u56fe",
                    version: 3,
                    newCDN: 1,
                    mode: "embed",
                    host: "www.163.com",
                    includeBox: e || "js_N_login_wrap",
                    isHttps: 1,
                    page: "login",
                    placeholder: {
                        account: "\u7f51\u6613\u90ae\u7bb1/\u5e38\u7528\u90ae\u7bb1",
                        pwd: "\u8bf7\u8f93\u5165\u5bc6\u7801"
                    },
                    needUnLogin: 1,
                    defaultUnLogin: 0,
                    needPrepare: 1,
                    toolName: "\u81ea\u5b9a\u4e49\u626b\u7801App",
                    toolUrl: "http://mail.163.com/dashi/?from=urs",
                    notFastReg: 0,
                    single: 1,
                    cssDomain: "//temp.163.com/special/00804C4H/",
                    cssFiles: "urs_style.css?t=20170613",
                    frameSize: {
                        width: 260,
                        height: 214
                    },
                    logincb: function(e) {
                        n.$emit("login.success", e)
                    },
                    regcb: function() {}
                };
                new window.URS(t)
            }
        })
    }), bowlder.define("/modules/ne2015/common-nav/utils/tools.js", [], function() {
        var t = bowlder;
        return {
            encode: function(e) {
                var t = {
                    "&": "&amp;",
                    "'": "&#39;",
                    '"': "&quot;",
                    "<": "&lt;",
                    ">": "&gt;"
                };
                return e.replace(/[&"'<>]/g, function(e) {
                    return t[e]
                })
            },
            isElemHasShow: function(e) {
                return "none" !== t(e).css("display")
            },
            mousenterSupport: function() {
                document.createElement("div");
                return !1
            },
            addHandler: function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
            }
        }
    }), bowlder.define("/modules/ne2015/common-nav/core/loginBefore.js", ["../constants/index.js", "../core/urs.js", "../utils/tools.js"], function(e, t, n) {
        var o, i, r, a, s, l, c, u, d, f, h = bowlder,
            p = this,
            m = !1,
            v = !1,
            g = h(document.body),
            w = null,
            b = !1,
            y = !1,
            _ = "",
            x = function() {
                w && (clearTimeout(w), w = null)
            },
            T = function() {
                b || (t.loadURS(), b = !0), c.css({
                    display: "block"
                }), m = !0, s.addClass("ntes-nav-login-active").removeClass("ntes-nav-login-normal"), c.addClass("ue-animation")
            },
            $ = function() {
                c.css({
                    display: "none"
                }), m = !1, s.addClass("ntes-nav-login-normal").removeClass("ntes-nav-login-active"), c.removeClass("ue-animation"), _ && c.removeClass(_)
            },
            k = function() {
                d.hasClass("ntes-nav-quick-navigation-active") && (d.removeClass("ntes-nav-quick-navigation-active"), f.hide())
            },
            j = function() {
                return n.isElemHasShow(c) ? $() : T(), !1
            },
            A = function() {
                x(), T()
            },
            N = function() {
                var e;
                x(), e = function() {
                    $()
                }, w = setTimeout(function() {
                    e && e()
                }, 250)
            },
            C = function() {
                x()
            };
        var S = function(e) {
                ! function(e) {
                    if (m) {
                        for (var t = e.target || e.srcElement, n = c[0], o = l[0]; t;) {
                            if (t == n || t == o) return;
                            t = t.parentNode
                        }
                        $()
                    }
                }(e),
                function(e) {
                    if (v) {
                        for (var t = e.target || e.srcElement, n = d[0], o = f[0]; t;) {
                            if (t == n || t == o) return;
                            t = t.parentNode
                        }
                        k()
                    }
                }(e)
            },
            D = function(e) {
                0 < document.body.scrollTop + document.documentElement.scrollTop ? y || (s.addClass("ntes-nav-login-scroll"), u.addClass("ntes-nav-logined-scroll"), y = !0) : y && (s.removeClass("ntes-nav-login-scroll"), u.removeClass("ntes-nav-logined-scroll"), y = !1), m && $(), v && k()
            },
            L = "ntes-nav-wrap-resize1024",
            E = function() {
                var e, t;
                (e = 0, t = 0, document.documentElement && document.documentElement.clientHeight ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && document.body.clientHeight ? (e = document.body.clientWidth, t = document.body.clientHeight) : window.innerHeight && (e = window.innerWidth, t = window.innerHeight), {
                    w: e,
                    h: t
                }).w < 1200 ? a.addClass(L) : a.removeClass(L)
            };
        p.success = function() {
            $()
        }, p.fail = function(e) {}, p.showPop = T, p.hidePop = $;
        var M = function() {
            d.hasClass("ntes-nav-quick-navigation-active") ? (d.removeClass("ntes-nav-quick-navigation-active").addClass("ntes-nav-quick-navigation-unactive"), v = !1, f.hide()) : (d.removeClass("ntes-nav-quick-navigation-unactive").addClass("ntes-nav-quick-navigation-active"), v = !0, f.show())
        };
        p.initialize = function() {
            o = n.mousenterSupport(), i = o ? "mouseenter" : "mouseover", r = o ? "mouseleave" : "mouseout", a = h(".ntes_nav_wrap"), s = h("#js_N_navHighlight"), u = h("#js_N_logined_warp"), l = h("#js_N_navHighlight .ntes-nav-login-title"), c = h("#js_N_navHighlight .ntes-nav-loginframe-pop"), m = n.isElemHasShow(c), l.bind("click", j), l.bind(i, A), l.bind(r, N), c.bind(i, C), d = h(".ntes-nav-quick-navigation-btn"), f = h(".ntes-quicknav-pop"), d.bind("click", M), d.addClass("ntes-nav-quick-navigation-init"), E(), g.bind("click", S), n.addHandler(window, "scroll", D), n.addHandler(window, "resize", E)
        }
    }), bowlder.define("/modules/ne2015/common-nav/data/userInfo.js", ["../utils/tools.js"], function(e) {
        var o = bowlder,
            i = this,
            r = "",
            a = "",
            s = "",
            l = r;
        i.getUserInfo = function() {
            r = o.cookie.get("P_INFO"), a = o.cookie.get("S_INFO"), s = o.cookie.get("NTES_PASSPORT");
            var e = r.split("|"),
                t = e[0] || "",
                n = {
                    userName: t.split("@")[0],
                    userMail: t,
                    userDomain: t ? t.split("@")[1] : "",
                    userIp: o.cookie.get("USERTRACK") || "",
                    userLogined: !(!t || !a && !s),
                    userProduct: e[7] || ""
                };
            return r == l && r || "null" === a || (l = r, i.$emit("userInfo.updated", n)), new o.Promise(function(e, t) {
                e(n)
            })
        }
    }), bowlder.define("/modules/ne2015/common-nav/utils/loginUtil.js", ["../core/loginBefore.js", "../core/urs.js", "../data/userInfo.js"], function(t, e, n) {
        var o, i = bowlder,
            r = this;

        function a() {
            return n.getUserInfo().then(function(e) {
                o = e
            })
        }
        r.getUserInfo = function() {
            return a(), o
        }, r.loginSuccess = function(t) {
            e.$on("login.success", function(e) {
                t && i.isFunction(t) && t()
            }, !0)
        }, r.checkLogin = function() {
            return a(), !!o.userLogined
        }, r.logOut = function() {
            r.checkLogin() && i("#js_N_navLogout").trigger("click")
        }, r.showLoginPop = function(e) {
            (e = e || window.event) && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0), t.showPop()
        }, r.hideLoginPop = function() {
            t.hidePop()
        }, r.init = function() {
            t.initialize()
        }
    }), bowlder.define("/www/index20170701/modules/money/mods/mods.js", ["../../../js/tools.js", "../../../js/request.js", "loginUtil"], function(e, t, n) {
        var o, i, r, a, s, l, c = bowlder,
            u = this.$widget,
            d = u.roles;
        window.ntesQuote;
        o = c.widget("#finance"), i = c.widget("#stock"), r = c.widget("#biz"), u.ready().then(function() {
            var e = c.widget(d.tabs);
            e.ready(function() {
                o.ready().then(function() {
                    a = c.isFunction(o.get("tabShow")) ? o.get("tabShow") : function() {}
                }), i.ready().then(function() {
                    s = c.isFunction(i.get("tabShow")) ? i.get("tabShow") : function() {}
                }), r.ready().then(function() {
                    l = c.isFunction(r.get("tabShow")) ? r.get("tabShow") : function() {}
                })
            }), e.on("showed", function(e, t) {
                0 === e && a && a(e, t), 1 === e && s && s(e, t), 2 === e && l && l(e, t)
            })
        }), this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/modimgtext/modimgtext.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/money/mods/finance/finance.js", [], function() {
        var i, r, a, s, n = this,
            l = bowlder,
            e = n.$widget,
            c = e.roles,
            u = window.ntesQuote,
            d = [],
            f = ["http://img2.money.126.net/chart/hs/time/180x120/0000001.png", "http://img2.money.126.net/chart/hs/time/180x120/1399001.png", "http://img2.money.126.net/chart/hs/time/180x120/1399300.png"],
            h = 0,
            p = 0;
        setInterval(function() {
            var e, t, n, o, i;
            (h++, e = (new Date).setHours(9, 15), t = (new Date).setHours(11, 35), n = (new Date).setHours(12, 55), o = (new Date).setHours(15, 5), i = (new Date).getTime(), e <= i && i <= t || n <= i && i <= o) && d[p].attr("src", f[p] + "?" + h)
        }, 12e4);
        e.ready().then(function(e) {
            if (r = l(".shChart"), a = l(".szChart"), s = l(".hsChart"), d = [r, a, s], i = c.tabRole, l.widget(i).on("showed", function(e, t) {
                    void 0 !== t && d[p = e].attr("src", f[e] + "?" + h)
                }), setTimeout(function() {
                    u.loadAll()
                }, 100), window.friend_netes_api) {
                var t, n = window.friend_netes_api,
                    o = "";
                n.money.title && n.money.docurl && l(".money_text12") && (t = l(".money_text12"), o = '<a href="' + n.money.docurl + '">' + n.money.title + "</a>", t.html(o))
            }
        }), n.tabShow = function(e, t) {
            n.$emit("showed", e, t)
        }, n.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/money/mods/stock/stock.js", [], function() {
        var n = this;
        bowlder, n.$widget.roles, window.ntesQuote;
        n.tabShow = function(e, t) {
            n.$emit("showed", e, t)
        }, n.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/money/mods/biz/biz.js", [], function() {
        var n = this;
        bowlder, n.$widget.roles, window.ntesQuote;
        n.tabShow = function(e, t) {
            n.$emit("showed", e, t)
        }, n.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/money/mods/mystock/mystock.js", ["../../../../js/request.js", "loginUtil"], function(e, h) {
        var p = this,
            m = bowlder,
            t = p.$widget,
            n = t.roles,
            v = window.ntesQuote,
            g = 4,
            w = [],
            b = {};

        function y(e, o) {
            var i = [];
            o = o || "myStock";
            return m.each(e, function(e, t) {
                var n = {};
                n.code = e.code, n.type = "stock", n.name = e.name || e.stockName, h.checkLogin() ? "myStock" === o ? n.followed = void 0 === e.followed || e.followed : "recent" === o && (n.followed = !!b[e.code]) : n.followed = !1, i.push(n)
            }), i
        }

        function o() {
            var f = [];
            e.service("getMyStockList", {
                method: "jsonp",
                charset: "utf-8",
                urlParams: {
                    size: 30,
                    callbackName: "callback"
                }
            }).success(function(e) {
                var t, n, o, i, r, a, s = e.success,
                    l = e.data.hotStocks;
                if (m.extend(!0, {}, l), h.checkLogin() || 0 !== s || ((f = y(l.splice(0, g - 1))).push({
                        type: "loginTip"
                    }), p.stockList = f, p.$refresh()), 1 === s) {
                    w = m.extend(!0, {}, e.data.stocks), r = w, a = {}, m.each(r, function(e, t) {
                        a[e.code] = e
                    }), b = a;
                    var c = (f = y(e.data.stocks).splice(0, g - 1)).length;
                    if (c < g - 1) {
                        var u = g - 1 - c,
                            d = y((t = f, n = l, o = [], i = {}, m.each(t, function(e, t) {
                                i[e.code] = e
                            }), m.each(n, function(e, t) {
                                i[e.code] || o.push(e)
                            }), o).splice(0, u));
                        f.push({
                            type: "addMoreHot"
                        }), f = f.concat(d)
                    } else f.push({
                        type: "editStockTip"
                    });
                    p.stockList = f, p.$refresh()
                }
                setTimeout(function() {
                    v.loadAll()
                }, 500)
            })
        }
        p.myState = {}, p.myState.userLogined = h.checkLogin(), h.loginSuccess(function() {
            p.myState.userLogined = !0, p.$refresh(), o()
        }), t.ready().then(function(e) {
            setTimeout(function() {
                v.loadAll()
            }, 100)
        }), p.addFollow = function(t) {
            h.checkLogin() ? e.service("followStock", {
                method: "jsonp",
                charset: "utf-8",
                urlParams: {
                    code: t.code,
                    callbackName: "callback"
                }
            }).success(function(e) {
                1 === e.success && (b[t.code] = t, o())
            }) : p.showLoginPanel()
        }, p.showLoginPanel = function(e) {
            e && e.stopPropagation(), m.isFunction(h.showLoginPop) && h.showLoginPop(), m.isFunction(h.showLoginPanel) && h.showLoginPanel()
        }, p.init = function(e) {
            m.widget(n.tabRole[0]).on("onshow", function(e) {
                e
            }), o()
        }
    }), bowlder.define("/www/index20170701/modules/auto/mods/mods.js", ["../../../js/tools.js", "../../../js/request.js"], function(e, r) {
        var u = this,
            d = bowlder,
            t = u.$widget;

        function a(e, t) {
            this.$el = d.isString(e) ? d(e) : e, this._opt = d.extend(!0, this._opt, t || {}), this.isShow = !1, this.init(), this.bind()
        }

        function f(e) {
            var t = d(e);
            r.service("getAutohangqing", {
                method: "jsonp",
                charset: "utf-8",
                urlParams: {
                    callbackName: "autoLocation_fall"
                }
            }).success(function(e) {
                if (e)
                    for (var t, n, o, i = window.localAddress, r = new Date, a = r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate() + " " + r.getHours(), s = (t = a.split(" ", 2), n = (t[0] ? t[0] : "").split("-", 3), o = (t[1] ? t[1] : "").split(":", 3), new Date(parseInt(n[0], 10) || null, (parseInt(n[1], 10) || 1) - 1, parseInt(n[2], 10) || null, parseInt(o[0], 10) || null, parseInt(o[1], 10) || null, parseInt(o[2], 10) || null).getTime() / 1e3), l = 0; l < e.list.length; l++) {
                        var c = e.list[l];
                        if (-1 != i.city.indexOf(c.city)) {
                            var u = c.url.split("?")[0].split("netease_index/")[1];
                            d.ajax.require("https://static.ws.126.net/163/auto163/" + u + "?" + s);
                            break
                        }
                    }
            }).error(function(e, t, n, o) {}), window.autoLocation_cb = function(n) {
                d(".cm_smallimg_list", t);
                var e = d(".cm_news_main", t);
                d("li", e).each(function(e, t) {
                    6 < t && d(this).html(n.list[t - 7].html)
                }), u.$refresh()
            }
        }
        a.prototype = {
            _opt: {
                brand: {
                    url: "https://static.ws.126.net/163/auto163/brandlist_utf8_v2.js",
                    id: ".brand",
                    default: {
                        name: "\u8bf7\u9009\u62e9\u54c1\u724c",
                        value: ""
                    }
                },
                series: {
                    url: function(e) {
                        return "https://static.ws.126.net/163/auto163/" + e + ".js"
                    },
                    id: ".series",
                    default: {
                        name: "\u8bf7\u9009\u62e9\u8f66\u578b",
                        value: ""
                    }
                }
            },
            brand: function() {
                var r = this,
                    e = r._opt.brand.url,
                    a = (r.$brand_select_input, r.$brand_input),
                    s = r.$brand_select_list;
                d.ajax.require(e, {
                    headers: {
                        charset: "gbk"
                    }
                }).success(function() {
                    var e = window.data.brands,
                        t = "",
                        n = "A";
                    t += "<li class='select-label'>" + n + "</li>";
                    for (var o = 0, i = e.length; o < i; o++) n !== e[o].firstchar && (t += "<li class='select-label'>" + (n = e[o].firstchar) + "</li>"), t += "<li class='select-name' data-autoid='" + e[o].autoid + "' data-cid='" + e[o].cid + "'>" + e[o].name.substr(3) + "</li>";
                    s.html(t), s.bind("click", function(e) {
                        var t = e.target || e.srcElement;
                        if ((t = d(t)).hasClass("select-name")) {
                            s.hide();
                            var n = t.attr("data-autoid"),
                                o = t.attr("data-cid"),
                                i = t.html();
                            u.brand_autoid = n, u.brand_id = o, u.series_id = "", u.$refresh(), a.html(i), a.attr("data-id", o), a.attr("data-autoid", n), r.series(o)
                        }
                    })
                }).error(function(e) {})
            },
            series: function(e) {
                var t = this._opt.series.url(e),
                    a = (this.$series_select_input, this.$series_input),
                    s = this.$series_select_list;
                a.attr("data-id", ""), a.attr("data-autoid", ""), a.html("\u8bf7\u9009\u62e9\u8f66\u578b"), u.series_autoid = void 0, d.ajax.require(t, {
                    headers: {
                        charset: "gbk"
                    }
                }).success(function() {
                    for (var e = window.data, t = "", n = 0, o = e.length; n < o; n++) {
                        t += "<li class='select-label'>" + e[n].name + "</li>";
                        for (var i = 0, r = e[n].value.length; i < r; i++) t += "<li class='select-name' data-autoid='" + e[n].value[i].autoid + "' data-cid='" + e[n].value[i].cid + "'>" + e[n].value[i].name + "</li>"
                    }
                    s.html(t), s.bind("click", function(e) {
                        var t = e.target || e.srcElement;
                        if ((t = d(t)).hasClass("select-name")) {
                            s.hide();
                            var n = t.attr("data-autoid"),
                                o = t.attr("data-cid"),
                                i = t.html();
                            u.series_autoid = n, u.series_id = o, u.$refresh(), a.attr("data-id", o), a.attr("data-autoid", n), a.html(i)
                        }
                    })
                }).error(function(e) {})
            },
            init_element: function() {
                var e = this._opt.brand.default.value,
                    t = this._opt.brand.default.name,
                    n = this.$el.find(this._opt.brand.id);
                this.$brand_select_input = n.find(".select-input"), this.$brand_input = this.$brand_select_input.find(".input-name"), this.$brand_select_list = n.find(".select-list");
                var o = this._opt.series.default.value,
                    i = this._opt.series.default.name,
                    r = this.$el.find(this._opt.series.id);
                this.$series_select_input = r.find(".select-input"), this.$series_input = this.$series_select_input.find(".input-name"), this.$series_select_list = r.find(".select-list"), this.$brand_input.html(t), this.$brand_input.attr("data-id", e), e && this.series(e), this.$series_input.html(i), this.$series_input.attr("data-id", o), this.$jumpBtn = this.$el.find(".auto_btn_choose")
            },
            refresh: function() {
                this.$brand_input.html(u.brand_name), this.$brand_input.attr("data-id", u.brand_id), u.brand_id && this.series(u.brand_id), this.$series_input.html(u.series_name), this.$series_input.attr("data-id", u.series_id)
            },
            init: function() {
                var n = this;
                this.init_element(), this.brand(), d("body").bind("click", function(e) {
                    if (n.isShow) {
                        var t = e.target || e.srcElement;
                        "select-input" !== t.parentNode.className && "select-input" !== t.className && "select-label" !== t.className && "select-list" !== t.className && (n.isShow = !1, n.last_list.hide())
                    }
                })
            },
            bind: function() {
                var e = this;
                e.$jumpBtn.bind("click", function() {
                    var e;
                    e = u.brand_autoid || u.series_autoid ? u.brand_autoid && !u.series_autoid ? "brand/" + u.brand_autoid + ".html" : "series/" + u.series_autoid + ".html" : "", window.open("http://product.auto.163.com/" + e + "#YS1001", "_blank")
                }), e.$brand_select_input.bind("click", function() {
                    e.isShow = !0, e.$brand_select_list.show(), e.$series_select_list.hide(), e.last_list = e.$brand_select_list
                }), e.$series_select_input.bind("click", function() {
                    "" != e.$series_select_list.html() ? (e.isShow = !0, e.$series_select_list.show(), e.$brand_select_list.hide(), e.last_list = e.$series_select_list) : e.$brand_select_list.hide()
                })
            }
        }, u.CarSelect = a, u.init = function(e) {}, t.ready().then(function() {
            var e, t, s, l, c, n, o, i;
            new a("#auto-choose-car"), e = d("#auto-tag-list"), t = d(".tab_panel", e), s = {
                bellow10: "10\u4e07\u4ee5\u4e0b",
                between10and16: "10-16\u4e07",
                between10and20: "10-20\u4e07",
                between10and25: "10-25\u4e07",
                between16and25: "16-25\u4e07",
                between20and35: "20-35\u4e07",
                between25and35: "25-35\u4e07",
                morethan25: "25\u4e07\u4ee5\u4e0a",
                morethan35: "35\u4e07\u4ee5\u4e0a"
            }, l = '<li><label>{{price}}</label><span>{{link}}</span><a href="{{more_url}}" class="auto_item_more" title="\u66f4\u591a"></a></li>', c = '<a href="{{serie_url}}">{{original_name}}</a>', r.service("getAutoList", {
                method: "jsonp",
                charset: "utf-8",
                urlParams: {
                    callbackName: "autolist_callback"
                }
            }).success(function(a) {
                a && (t.each(function() {
                    var e = d(this),
                        t = a[e.attr("data-type")],
                        n = {},
                        o = "",
                        i = "";
                    for (var r in t) i = d.template.replace(c, t[r].list), n.link = i, n.price = s[r], n.more_url = t[r].more_url, o += d.template.replace(l, n);
                    e.html("<ul>" + o + "</ul>")
                }), u.$refresh())
            }).error(function(e) {}), n = d("#auto-hot-search"), o = ['<a href="http://product.auto.163.com/search_daquan/price=below6/#YS2001">\u767d\u83dc\u4ef7\u597d\u8f66</a>', '<a href="http://product.auto.163.com/#YS2001">\u8f66\u578b\u5927\u5168</a>', '<a href="http://product.auto.163.com/brand/1698.html#YS2001">\u5927\u4f17\u8f66\u578b</a>', '<a href="http://product.auto.163.com/brand/1703.html#YS2001">\u4e30\u7530\u8f66\u578b</a>', '<a href="http://product.auto.163.com/newcar/#YS2001">\u65b0\u8f66\u5c0f\u9c9c\u8089</a>', '<a href="http://product.auto.163.com/search_daquan/price=6-10/#YS2001">10\u4e07\u5143\u4e70\u597d\u8f66</a>', '<a href="http://product.auto.163.com/series/15101.html#YS2001">SUV\u9500\u91cf\u738b</a>', '<a href="http://product.auto.163.com/search_daquan/country=china/#YS2001">\u9ad8\u6027\u4ef7\u6bd4\u56fd\u4ea7\u8f66</a>', '<a href="http://product.auto.163.com/rank/hotIndices_jincou.html#YS2001">\u70ed\u95e8\u7d27\u51d1\u8f66</a>', '<a href="http://product.auto.163.com/rank/hotIndices_all.html#YS2001">\u5927\u5bb6\u90fd\u5728\u4e70</a>', '<a href="http://product.auto.163.com/rank/hotIndices_zhongxing.html#YS2001">\u6700\u706b\u4e2d\u578b\u8f66</a>', '<a href="http://product.auto.163.com/brand/1685.html#YS2001">\u5965\u8fea\u8f66\u578b</a>', '<a href="http://auto.163.com/depreciate/#YS2001">\u964d\u5230\u5e95\u4e86\u5feb\u51fa\u624b</a>', '<a href="http://product.auto.163.com/series/3368.html#YS2001">\u56fd\u6c11\u795e\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/type=race/#YS2001">\u8dd1\u8f66\u603b\u52a8\u5458</a>', '<a href="http://product.auto.163.com/search_daquan/country=korean/#YS2001">\u97e9\u56fd\u8f66\u601d\u5bc6\u8fbe</a>', '<a href="http://product.auto.163.com/search_daquan/country=english/#YS2001">\u559c\u6b22\u82f1\u4f26\u98ce</a>', '<a href="http://product.auto.163.com/search_daquan/energy=electric/#YS2001">\u7eaf\u7535\u52a8\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/gearbox=manual/#YS2001">\u624b\u52a8\u6321\u8001\u53f8\u673a</a>', '<a href="http://product.auto.163.com/search_daquan/country=germany/#YS2001">\u6700\u7231\u5fb7\u56fd\u8f66</a>', '<a href="http://product.auto.163.com/rank/oil_SUV.html#YS2001">SUV\u7701\u6cb9\u738b</a>', '<a href="http://product.auto.163.com/brand/1686.html#YS2001">\u5b9d\u9a6c\u8f66\u578b</a>', '<a href="http://product.auto.163.com/newpower/#YS2001">\u65b0\u80fd\u6e90\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/type=mini/#YS2001">\u505c\u8f66\u4e0d\u7528\u6101</a>', '<a href="http://product.auto.163.com/search_daquan/type=mpv/#YS2001">\u62c9\u7684\u591a\u8dd1\u7684\u8fdc</a>', '<a href="http://product.auto.163.com/rank/hotIndices_priceRegion_200_ff.html#YS2001">\u56fd\u6c11\u8001\u516c\u6807\u914d</a>', '<a href="http://product.auto.163.com/brand/1694.html#YS2001">\u5954\u9a70\u8f66\u578b</a>', '<a href="http://product.auto.163.com/search_daquan/type=trav/#YS2001">\u5c45\u5bb6\u65c5\u884c</a>', '<a href="http://product.auto.163.com/search_daquan/volume=below10/#YS2001">\u7701\u6cb9\u662f\u738b\u9053</a>', '<a href="http://product.auto.163.com/search_daquan/country=america/#YS2001">\u6700\u7231\u7f8e\u56fd\u8303</a>', '<a href="http://product.auto.163.com/group/groupbuy_index_new/#YS2001">\u4e07\u4eba\u53c2\u56e2\u4f4e\u4ef7\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/country=japan/#YS2001">\u9996\u9009\u65e5\u672c\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/energy=hybrid/#YS2001">\u6cb9\u7535\u6df7\u8840\u513f</a>', '<a href="http://product.auto.163.com/search_daquan/price=10-16@type=compact/#YS2001">\u5bb6\u7528\u7d27\u51d1\u8f66</a>', '<a href="http://product.auto.163.com/search_daquan/country=china@type=suv/#YS2001">\u56fd\u4ea7\u70ed\u95e8SUV</a>', '<a href="http://product.auto.163.com/search_daquan/type=large/#YS2001">\u5546\u52a1\u884c\u653f</a>'], (i = function() {
                o.sort(function() {
                    return .5 - Math.random()
                }), n.removeClass("active").html("<p>" + o.join("") + "</p>"), setTimeout(function() {
                    n.addClass("active")
                }, 50), u.$refresh()
            })(), d(".auto_tag_refresh").bind("click", i), u.localIpPromise.then(function() {
                f("#auto-hangqing")
            })
        })
    }), bowlder.define("/www/index20170701/modules/modad/modad.js", ["../../js/request.js"], function(e) {
        var t = this,
            n = (bowlder, t.$widget);
        t.myState = {
            isModrightAd: !1
        }, t.init = function(e) {}, n.ready().then(function() {
            e.service("getLocalAd", {
                method: "jsonp",
                urlParams: {
                    callbackName: "index2017_ad_callback"
                }
            }).success(function(e) {
                e.adlist && 0 < e.adlist.length ? (t.modadlist = e, t.myState.isModrightAd = !0) : t.myState.isModrightAd = !1, t.$refresh()
            }).error(function(e, t, n, o) {})
        })
    }), bowlder.define("/www/index20170701/modules/modad/zhiye/zhiye.js", ["../../../js/request.js"], function(t) {
        var i = this;
        bowlder, i.$widget;
        i.init = function(e) {}, i.localIpPromise.then(function() {
            ! function() {
                var e = window.localAddress.province || "\u5317\u4eac\u5e02";
                if ("\u5317\u4eac\u5e02" === e || "\u4e0a\u6d77\u5e02" === e || "\u5929\u6d25\u5e02" === e || "\u91cd\u5e86\u5e02" === e) var n = o = e.replace("\u5e02", "");
                else {
                    var o = e.replace("\u7701", "");
                    n = window.localAddress.city.replace("\u5e02", "")
                }
                t.service("getHouseZhiYe", {
                    method: "jsonp",
                    urlParams: {
                        callbackName: "callback"
                    }
                }).success(function(e) {
                    var t;
                    t = e[n] ? e[n] : e[o] ? e[o] : e.defaltCity, i.modzhiyelist = t, i.$refresh()
                }).error(function(e, t, n, o) {})
            }()
        })
    }), bowlder.define("/www/index20170701/modules/tech/mods/mods.js", [], function() {
        var o = bowlder,
            e = this.$widget;
        this.init = function(e) {}, e.ready(function() {
            if (window.friend_netes_api) {
                var e, t = window.friend_netes_api,
                    n = "";
                t.tech.title && t.tech.docurl && o(".tech_text12") && (e = o(".tech_text12"), n = '<a href="' + t.tech.docurl + '">' + t.tech.title + "</a>", e.html(n))
            }
        })
    }), bowlder.define("/www/index20170701/modules/house/mods/mods.js", ["../../../js/request.js"], function(e) {
        var c, u, d = this,
            f = bowlder,
            t = d.$widget,
            l = t.roles;

        function h(i) {
            u = f.widget(c[0]);
            var n = "",
                e = f(".house-a>a"),
                t = f(".house-xf-a a"),
                o = (f(".house-esf-a a"), f(".house_tab1")),
                r = f(".house_tab2"),
                a = (f(".house_tab3"), f(".house-more-list")),
                s = '<li data-value="{{value}}">{{text}}</li>',
                l = '<a href="{{link}}">{{name}}</a>';
            e.html(HouseConfig[i].name + "\u623f\u4ea7"), e.attr("href", HouseConfig[i].url1), t.attr("href", HouseConfig[i].url2), f.ajax.get(HouseConfig[i].src1).success(function(e) {
                o.html(e), o.append('<p class="house_go_btn"><a href="' + HouseConfig[i].url1 + '" class="go_btn">\u8fdb\u5165\u623f\u4ea7\u9891\u9053</a></p>'), u.wander()
            }), f.ajax.get(HouseConfig[i].src2).success(function(e) {
                r.html(e), u.wander();
                var t = f(".house-link a"),
                    n = f(".xf_price ul"),
                    o = f(".xf_area ul");
                f.ajax.require("https://xf.house.163.com/product_house_" + HouseConfig[i].code + "/xf/js/price_" + HouseConfig[i].code + ".js").success(function() {
                    for (var e = "", t = 0; t < price.length; t++) e += f.template.replace(s, price[t]);
                    n.html(e)
                }), f.ajax.require("https://xf.house.163.com/product_house_" + HouseConfig[i].code + "/xf/js/district_" + HouseConfig[i].code + ".js").success(function() {
                    for (var e = "", t = 0; t < district.length; t++) e += f.template.replace(s, district[t]);
                    o.html(e)
                }), f.each(t, function(e, t) {
                    f(e).attr("href", f(e).attr("href").replace("{cityCode}", HouseConfig[i].code))
                })
            }), f.each(HouseConfig[i].others, function(e, t) {
                n += 0 === t ? f.template.replace(l, e) : "<span>/</span>" + f.template.replace(l, e)
            }), a.html(n);
            HouseConfig[i].url3, d.myState.oldhouse = !1, d.$refresh()
        }
        d.myState = {
            oldhouse: !1
        }, d.init = function(e) {}, t.ready().then(function() {
            d.localIpPromise.then(function() {
                if (c = l.tabRole, void 0 !== window.localAddress && window.localAddress.province) {
                    if ("\u5317\u4eac\u5e02" === window.localAddress.province || "\u4e0a\u6d77\u5e02" === window.localAddress.province || "\u5929\u6d25\u5e02" === window.localAddress.province || "\u91cd\u5e86\u5e02" === window.localAddress.province) var e = window.localAddress.province.replace("\u5e02", "");
                    else if (-1 < window.localAddress.city.indexOf("\u5927\u7406")) e = "\u5927\u7406";
                    else e = window.localAddress.city.replace("\u5e02", "");
                    var t = window.localAddress.province.replace("\u5e02", "").replace("\u7701", "")
                } else e = "\u5317\u4eac", t = "\u5317\u4eac";
                var n, o = !1,
                    i = "",
                    r = f(".house-all-citys p");
                "undefined" != typeof HouseConfig && HouseConfig !== [] || (window.HouseConfig = [{
                    name: "\u5317\u4eac",
                    code: "bj",
                    url_3: !0,
                    url1: "http://bj.house.163.com/",
                    url2: "http://xf.house.163.com/bj/#163-2-MF",
                    url3: "http://esf.house.163.com/bj",
                    src1: "/special/00774J00/n_house_bj_01_201611.html",
                    src2: "/special/00774J00/n_house_bj_02_201611.html",
                    src3: "/special/00774J00/n_house_bj_03_201611.html",
                    others: [{
                        name: "\u697c\u76d8\u5e93",
                        link: "http://xf.house.163.com/bj/search/0-0-0-0-0-0-0-0-0-1-0-0-0-0-0-1-1-0-0-0-1.html#163-2-LPK"
                    }, {
                        name: "\u7535\u5546",
                        link: "http://d.house.163.com/bj/"
                    }, {
                        name: "\u623f\u8d37\u54a8\u8be2",
                        link: "http://bj.house.163.com/special/fangdaizixun/"
                    }, {
                        name: "\u6d77\u5916\u7f6e\u4e1a",
                        link: "http://vhouse.163.com/"
                    }]
                }]);
                for (var a = 0; a < HouseConfig.length; a++) {
                    if (e === HouseConfig[a].name) {
                        n = a;
                        break
                    }
                    if (t === HouseConfig[a].name) {
                        n = a;
                        break
                    }
                }
                if (!n && 0 !== n) {
                    for (a = 0; a < defaultHouseProvince.province.length; a++)
                        if (-1 < defaultHouseProvince.province[a].name.indexOf(t))
                            for (var s = 0; s < HouseConfig.length; s++) defaultHouseProvince.province[a].str === HouseConfig[s].code && (n = s);
                    if (!n && 0 !== n)
                        for (a = 0; a < HouseConfig.length; a++) defaultHouseProvince.defaultCity.str === HouseConfig[a].code && (n = a, e = HouseConfig[a].name)
                }
                for (a = 0; a < HouseConfig.length; a++) e === HouseConfig[a].name && (o = !0), i += f.template.replace('<a href="javascript:void(0)" class="citys-data" data-code="{{code}}" data-name="{{name}}">{{name}}</a>', HouseConfig[a]);
                r.html(i), f("a:first-child", r).addClass("selected"), o || f("a[data-code='bj']", r).addClass("selected"), h(n),
                    function(o) {
                        var e = f("body"),
                            t = f(".house-all-citys"),
                            n = !1;

                        function i() {
                            var e = f(this);
                            "none" === e.find(".area").css("display") ? (f(".house-select").find(".area").hide(), e.find(".area").show()) : e.find(".area").hide()
                        }

                        function r() {
                            var e = f(this);
                            return arguments.callee.caller.arguments[0] || window.event, e.parent().parent().find(".house-select-name").html(e.html()), e.parent().parent().find(".house_select_value").val(e.attr("data-value")), e.parent().hide(), !1
                        }

                        function a() {
                            window.open("http://xf.house.163.com/" + HouseConfig[o].code + "/search/" + f(".house_select_value_area_xf").val() + "-0-0-" + f(".house_select_value_price_xf").val() + "-0-0-0-0-0-1-1.html?keyword=&isSearchflag=1#lpk-ss-dbss")
                        }

                        function s() {
                            window.open("http://esf.house.163.com/" + HouseConfig[o].code + "/search/1-" + f(".house_select_value_area_esf").val() + "-0-0-0-0-0-0-0-0-0-0-0-0-0-0-" + f(".house_select_value_price_esf").val() + "-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1-1-0.html?qstr=")
                        }

                        function l() {
                            var n = f(this),
                                e = n.parent().find("li"),
                                o = n.parent().parent().find(".house-lp");
                            e.removeClass("selected"), n.addClass("selected"), o.hide(), f.each(e, function(e, t) {
                                e === n[0] && (o[t].style.display = "block")
                            })
                        }
                        f(".more_house_city").on("mouseover", function() {
                            t.show()
                        }), f(".house-a").on("mouseout", function() {
                            (function(e, t) {
                                if ("mouseout" != e.type && "mouseover" != e.type) return !1;
                                for (var n = e.relatedTarget ? e.relatedTarget : "mouseout" == e.type ? e.toElement : e.fromElement; n && n != t;) n = n.parentNode;
                                return n != t
                            })(arguments.callee.caller.arguments[0] || window.event, this) && t.hide()
                        }), f(".house-select").on("click", i), e.on("click", ".house-select", i), e.bind("click", function(e) {
                            var t = e.target || e.srcElement;
                            t.className.indexOf("house-select") < 0 && t.parentNode.className.indexOf("house-select") < 0 && f(".house-select").find(".area").hide()
                        }), e.bind("touchend", function(e) {
                            var t = e.target || e.srcElement;
                            t.className.indexOf("house-select") < 0 && t.parentNode.className.indexOf("house-select") < 0 && t.parentNode.className.indexOf("area") < 0 && !n && f(".house-select").find(".area").hide(), n = !1
                        }), e.bind("touchmove", function(e) {
                            n = !0
                        }), f(".house-select .area li").on("click", r), e.on("click", ".house-select .area li", r), f(".xf-search").on("click", a), e.on("click", ".xf-search", a), f(".esf-search").on("click", s), e.on("click", ".esf-search", s), f(".house-lp-type li").on("mouseover", l), e.on("mouseover", ".house-lp-type li", l), f(".house-all-citys a").on("click", function() {
                            var e = f(this),
                                n = e.attr("data-name");
                            return f(".house-all-citys a").removeClass("selected"), e.addClass("selected"), f.each(HouseConfig, function(e, t) {
                                n === e.name && (h(t), o = t)
                            }), !1
                        })
                    }(n)
            })
        })
    }), bowlder.define("/www/index20170701/modules/home/mods_v1221/mods_v1221.js", [], function() {
        var l, t, c = this,
            u = bowlder,
            d = c.$widget.roles;

        function f(e) {
            e.url && (t = u.widget(l[0]), "qg" !== e.code && (c.myState.waibaoHome = e.name), c.myState.waibaoLink = e.link, u(".home-waibao-tab a").attr("href", e.link), u.ajax.get(e.url).success(function(e) {
                u(".home_waibao").html(e), t.wander()
            }), c.$refresh())
        }
        c.myState = {
            waibaoHome: "",
            waibaoLink: ""
        }, c.init = function(e) {
            c.localIpPromise.then(function() {
                var e, t = "",
                    n = HOMEWAIBAO_CONFIG && HOMEWAIBAO_CONFIG.citys ? HOMEWAIBAO_CONFIG.citys : [],
                    o = u(".home-all-citys p"),
                    i = "",
                    r = !1,
                    a = HOMEWAIBAO_CONFIG && HOMEWAIBAO_CONFIG.defaultCity ? HOMEWAIBAO_CONFIG.defaultCity : {
                        name: "\u5168\u56fd",
                        code: "qg",
                        url: "/special/00774J00/n_home_qg.html",
                        link: "http://www.home.163.com"
                    };
                l = d.tabRole, t = "\u5317\u4eac\u5e02" === window.localAddress.province || "\u4e0a\u6d77\u5e02" === window.localAddress.province || "\u5929\u6d25\u5e02" === window.localAddress.province || "\u91cd\u5e86\u5e02" === window.localAddress.province ? window.localAddress.province.replace("\u5e02", "") : window.localAddress.city.replace("\u5e02", ""), e = window.localAddress.province.replace("\u5e02", "").replace("\u7701", "");
                for (var s = 0; s < n.length; s++) e !== n[s].name && t !== n[s].name || (f(n[s]), r = !0), i += u.template.replace('<a href="javascript:void(0)" class="citys-home-data" data-code="{{code}}" data-name="{{name}}">{{name}}</a>', n[s]);
                r || f(a), o.html(i),
                    function() {
                        u("body");
                        var t = u(".home-all-citys");
                        u(".more_home_city").on("mouseover", function() {
                            t.show()
                        }), u(".home-waibao-tab").on("mouseout", function() {
                            var e = arguments.callee.caller.arguments[0] || window.event;
                            (function(e, t) {
                                if ("mouseout" != e.type && "mouseover" != e.type) return !1;
                                var n = e.relatedTarget ? e.relatedTarget : "mouseout" == e.type ? e.toElement : e.fromElement;
                                for (; n && n != t;) n = n.parentNode;
                                return n != t
                            })(e, this) && t.hide()
                        }), u(".home-all-citys a").on("click", function() {
                            var e = u(this),
                                n = e.attr("data-name");
                            return u(".home-all-citys a").removeClass("selected"), e.addClass("selected"), u.each(HOMEWAIBAO_CONFIG.citys, function(e, t) {
                                n === e.name && n != c.myState.waibaoHome && f(e)
                            }), !1
                        })
                    }()
            })
        }
    }), bowlder.define("/www/index20170701/modules/lady/mods20190226/mods.js", [], function() {
        var o = bowlder,
            e = this.$widget;
        e.roles;
        this.init = function(e) {}, e.ready(function() {
            if (window.friend_netes_api) {
                var e, t = window.friend_netes_api,
                    n = "";
                t.fashion.title && t.fashion.docurl && o(".fashion_text12") && (e = o(".fashion_text12"), n = '<a href="' + t.fashion.docurl + '">' + t.fashion.title + "</a>", e.html(n))
            }
        })
    }), bowlder.define("/www/index20170701/modules/comprehensive/travel/travel.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/comprehensive/dada/dada.js", [], function() {
        var e = bowlder,
            t = this.$widget;
        this.init = function(e) {}, t.ready(function() {
            e(".wyh_text10").bind("click", function() {
                NTESAntAnalysis.sendData({
                    val_nm: "c-ntm",
                    val_act: "wyh_text",
                    projectid: "NTM-KFGT6I8U-30"
                })
            })
        })
    }), bowlder.define("/www/index20170701/modules/comprehensive/edu/edu.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/comprehensive/shehui/shehui.js", [], function() {
        var o = bowlder,
            e = this.$widget;
        this.init = function(e) {}, e.ready(function() {
            if (window.friend_netes_api) {
                var e, t = window.friend_netes_api,
                    n = "";
                t.shehui.title && t.shehui.docurl && o(".shehui_text10") && (e = o(".shehui_text10"), n = '<a href="' + t.shehui.docurl + '">' + t.shehui.title + "</a>", e.html(n))
            }
        })
    }), bowlder.define("/www/index20170701/modules/modlist/modlist.js", [], function() {
        bowlder
    }), bowlder.define("/www/index20170701/modules/synthesis/gongban/gongban.js", ["../../../js/request.js"], function(e) {
        var t = this,
            n = (bowlder, t.$widget);
        t.boheList = [], t.init = function() {}, n.ready().then(function() {})
    }), bowlder.define("/www/index20170701/modules/synthesis/game/game.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/synthesis/lofter/lofter.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/synthesis/hongcai/hongcai.js", ["../../../js/request.js"], function(e) {
        var t = this,
            n = (bowlder, t.$widget);
        t.predictionList = [], t.openMatchLink = function(e) {
            window.open(e)
        }, t.init = function() {}, n.ready().then(function() {
            e.service("getPredictionAPI", {
                method: "jsonp",
                urlParams: {
                    callbackName: "predictioncallback"
                }
            }).then(function(e) {
                t.predictionList = e.data.data, t.$refresh()
            }, function(e) {
                console.error(e)
            })
        })
    }), bowlder.define("/www/index20170701/modules/synthesis/blog/blog.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/synthesis/yunread/yunread.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/ntes_stock/ntes_stock.js", [], function() {
        bowlder;
        widget = this.$widget;
        var e = window.ntesQuote;
        this.init = function() {}, widget.ready().then(function() {
            e.loadAll()
        })
    }), bowlder.define("/www/index20170701/modules/synthesis/download/download.js", [], function() {
        bowlder,
        this.$widget;this.init = function(e) {}
    }), bowlder.define("/www/index20170701/modules/lottery2/lottery.js", [], function() {
        var u = bowlder,
            e = this.$widget;
        this.init = function(e) {}, e.ready().then(function() {
            if (u(".caipiao-bd")) {
                for (var c = u(".caipiao-ball input"), e = u(".caipiao-bd .caipiao-btn"), t = c.length, n = function(e) {
                        return ("00" + e).slice(-2)
                    }, o = function() {
                        for (var e = []; e.length < 6;) {
                            var t = Math.floor(33 * Math.random() + 1); - 1 == e.indexOf(t) && e.push(t)
                        }
                        return e.sort(function(e, t) {
                            return e - t
                        })
                    }(), i = 0; i < t; i++) u(c[i]).bind("keyup", function(e) {
                    var t = this.value.replace(/\D/g, "");
                    (t = t.trim()) != this.value && (this.value = t)
                }), i < 6 ? u(c[i]).bind("blur", function() {
                    var e = this.value.replace(/\D/g, "");
                    (e = e.trim()) && (this.value = n(Math.min(+e, 33)))
                }) : u(c[i]).bind("blur", function() {
                    var e = this.value.replace(/\D/g, "");
                    (e = e.trim()) && (this.value = n(Math.min(+e, 16)))
                }), c[i].value = n(i < t - 1 ? o[i] : Math.floor(16 * Math.random() + 1));
                e.bind("click", function() {
                    for (var e, t, n = c.length, o = [], i = function(e) {
                            return ("00" + e).slice(-2)
                        }, r = {}, a = function(e) {
                            c[e].select()
                        }, s = 0; s < n; s++) {
                        if (t = c[s].value.replace(/\D/g, "").trim(), s < 6) {
                            if (!t) return alert("\u8bf7\u9009\u62e96\u4e2a\u7ea2\u7403\uff01"), void a(s);
                            if (+t < 1 || 33 < +t) return alert("\u7ea2\u7403\u8303\u56f4\u662f1\uff5e33\uff01"), void a(s);
                            for (var l = 0; l < s; l++)
                                if (o[l] == t) return alert("\u7ea2\u7403\u4e0d\u80fd\u91cd\u590d\uff01"), void a(s);
                            o[s] = i(t)
                        } else {
                            if (!t) return alert("\u8bf7\u9009\u62e91\u4e2a\u84dd\u7403\uff01"), void a(s);
                            if (+t < 1 || 16 < +t) return alert("\u84dd\u7403\u8303\u56f4\u662f1\uff5e16\uff01"), void a(s);
                            e = i(t)
                        }
                    }
                    r.stakeNumber = o.join(" ") + ":" + e, r.activityType = "16", r.betTimes = "1", r.gameId = "2010032416YX00000001",
                        function(e, t, n, o) {
                            var i, r, a = ["<form method='", n || "post", "' action='", e, "' target='", o || "_blank", "' id='lottery_form'>"],
                                s = window.document;
                            if (t)
                                for (r in t) a.push("<input type='hidden' name='" + r + "' value='" + t[r] + "'/>");
                            a.push("</form>"), i = s.createElement("div"), s.body.appendChild(i, s.body.lastChild), i.innerHTML = a.join(""), u("#lottery_form").submit(), s.body.removeChild(i)
                        }("http://caipiao.163.com/order/order_quickPreSsq.html#from=shouye1", r)
                })
            }
        })
    }), bowlder.define("/www/index20170701/modules/makingfriends/makingfriends.js", ["../../js/request.js"], function(e) {
        bowlder;
        var t = this.$widget;
        this.init = function(e) {}, t.ready().then(function() {})
    }), bowlder.define("/include/2015/alias.js", {
        jquery: "http://img1.cache.netease.com/f2e/libs/jquery.js",
        tabs: "/modules/tabs/tabs.js",
        scroller: "/modules/plugins/scroller.js",
        slide: "/modules/slide/slide.js",
        gesture: "/m/plugins/gesture.js",
        shares: "/modules/shares/shares.js",
        loginUtil: "/modules/ne2015/common-nav/utils/loginUtil.js"
    }), bowlder.run("/include/2015/alias.js").then(function(e) {
        bowlder.conf({
            alias: e
        })
    });