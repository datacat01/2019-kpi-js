(window.wjp = window.wjp || []).push([
    [193], {
        1095: function(e, t, n) {
            "use strict";
            var i = {};
            n.r(i), n.d(i, "VIEW_PAGE_PUBLICATION_DETAIL", function() {
                return r
            }), n.d(i, "VIEW_PAGE_POST_DETAIL", function() {
                return a
            }), n.d(i, "VIEW_PAGE_PROFILE", function() {
                return o
            }), n.d(i, "COMPLETE_FLOW_EXTERNAL_REQUEST_FULLTEXT", function() {
                return c
            });
            var r = "view.page.PublicationDetail",
                a = "view.page.PostDetail",
                o = "view.page.Profile",
                c = "complete.flow.externalRequestFulltext";
            n(1136);
            n.d(t, "a", function() {
                return u
            }), n.d(t, "b", function() {
                return s
            }), n.d(t, "c", function() {
                return l
            });
            var u = i;

            function s(e, t, n) {
                window.addEventListener(e, function(n) {
                    var i = n.detail || {},
                        r = i.context,
                        a = i.metadata;
                    t(e, r, a)
                }, n)
            }

            function l(e, t, n) {
                var i;
                "function" != typeof window.CustomEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, !1, !1, {
                    detail: t,
                    metadata: n
                }) : i = new CustomEvent(e, {
                    detail: {
                        context: t,
                        metadata: n
                    }
                }), window.dispatchEvent(i)
            }
        },
        1136: function(e, t) {},
        1339: function(e, t, n) {
            "use strict";
            var i = n(48),
                r = n.n(i);

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            var o = null,
                c = function() {
                    function e() {
                        var e, t, n;
                        return n = {
                            errorFunction: function(e) {
                                throw e
                            }
                        }, (t = "_config") in (e = this) ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, o || (o = this), o
                    }
                    var t, n, i;
                    return e.prototype.configure = function(e) {
                        return this._config = r()({}, this._config, e), this._config
                    }, t = e, (n = [{
                        key: "config",
                        get: function() {
                            return this._config
                        }
                    }]) && a(t.prototype, n), i && a(t, i), e
                }();
            t.a = new c
        },
        1340: function(e, t, n) {
            "use strict";
            n(2);
            var i = n(0),
                r = n.n(i),
                a = n(22),
                o = n.n(a),
                c = n(1062),
                u = n.n(c),
                s = n(883),
                l = n.n(s),
                d = n(858),
                m = n.n(d),
                p = 600,
                f = 600,
                g = {
                    enter: "enter",
                    enterActive: "enter-active",
                    leave: "leave",
                    leaveActive: "leave-active"
                };
            var h = new o.a({
                    name: "alert-stack",
                    prefix: "nova-c-"
                }),
                v = function(e) {
                    var t, n;

                    function i(t) {
                        var n;
                        return (n = e.call(this, t) || this).alert = r.a.createRef(), n.item = r.a.createRef(), n
                    }
                    n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                    var a = i.prototype;
                    return a.componentWillEnter = function(e) {
                        var t = this;
                        requestAnimationFrame(function() {
                            l()(t.item.current, g.enter), requestAnimationFrame(function() {
                                l()(t.item.current, g.enterActive), t.item.current.style.maxHeight = t.alert.current.offsetHeight + "px"
                            })
                        }), setTimeout(function() {
                            m()(t.item.current, g.enter), m()(t.item.current, g.enterActive), t.item.current.style.maxHeight = "none", e()
                        }, p)
                    }, a.componentWillLeave = function(e) {
                        var t = this;
                        requestAnimationFrame(function() {
                            t.item.current.style.maxHeight = t.alert.current.offsetHeight + "px", l()(t.item.current, g.leave), requestAnimationFrame(function() {
                                l()(t.item.current, g.leaveActive)
                            })
                        }), setTimeout(function() {
                            m()(t.item.current, g.leave), m()(t.item.current, g.leaveActive), e()
                        }, f)
                    }, a.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.className,
                            i = function(e, t) {
                                if (null == e) return {};
                                var n, i, r = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r
                            }(e, ["children", "className"]);
                        return r.a.createElement("div", Object.assign({
                            ref: this.item
                        }, h({
                            element: "item",
                            extra: n
                        }), i), r.a.createElement("div", {
                            ref: this.alert
                        }, t))
                    }, i
                }(i.Component);
            var b = new o.a({
                    name: "alert-stack",
                    prefix: "nova-c-"
                }),
                A = function(e) {
                    var t, n;

                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i.prototype.render = function() {
                        var e = this.props,
                            t = e.className,
                            n = e.children,
                            i = function(e, t) {
                                if (null == e) return {};
                                var n, i, r = {},
                                    a = Object.keys(e);
                                for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                                return r
                            }(e, ["className", "children"]);
                        return r.a.createElement(u.a, Object.assign({
                            component: "div"
                        }, b({
                            extra: t
                        }), i), r.a.Children.toArray(n).map(function(e) {
                            return r.a.createElement(v, {
                                key: e.key
                            }, e)
                        }).reverse())
                    }, i
                }(i.Component);
            A.defaultProps = {};
            var y = A;
            t.a = y
        },
        1887: function(e, t, n) {
            e.exports = n(3335)
        },
        2435: function(e) {
            e.exports = {
                staticUrl: "https://c5.rgstatic.net/"
            }
        },
        2758: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = {};
            n.r(i), n.d(i, "update", function() {
                return A
            }), n.d(i, "updateAll", function() {
                return y
            }), n.d(i, "get", function() {
                return T
            });
            var r = {};
            n.r(r), n.d(r, "loadWebpackScript", function() {
                return R
            });
            var a = {};
            n.r(a), n.d(a, "mountWidgetTree", function() {
                return k
            }), n.d(a, "loadWidgetScript", function() {
                return D
            });
            var o = n(5),
                c = n(499),
                u = n.n(c),
                s = n(126),
                l = n.n(s),
                d = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    Object(o.a)(t, e);
                    var n = t.prototype;
                    return n.filterUrl = function(e) {
                        if (!this.cachedParameters) return e;
                        var t, n, i, r, a, o, c, u, s = !1,
                            d = e.indexOf("#"); - 1 === d ? t = e : (t = e.substr(0, d), n = e.substr(d + 1));
                        var m = t.indexOf("?");
                        if (-1 !== m) {
                            for (o in i = t.substr(0, m), r = t.substr(m + 1), a = l.a.parse(r), this.cachedParameters) this.cachedParameters.hasOwnProperty(o) && a[c = this.cachedParameters[o]] && (s = !0, delete a[c]);
                            for (o in a) a.hasOwnProperty(o) && "_" === o.substr(0, 1) && (s = !0, delete a[o]);
                            if (s) return u = i, (r = l.a.stringify(a)) && (u = u + "?" + r), n && (u = u + "#" + n), u
                        }
                        return e
                    }, n.filter = function(e) {
                        var t = this;
                        e ? this.cachedParameters = e : e = this.cachedParameters, e && window.history && window.history.replaceState && window.addEventListener("load", function() {
                            var e = window.location.href,
                                n = t.filterUrl(e);
                            n !== e && (window.history.replaceState(null, null, n), t.emit("historyStateReplaced"))
                        })
                    }, t
                }(u.a),
                m = n(31),
                p = window.performance;

            function f(e) {
                return e && "getEntriesByType" in e && "function" == typeof e.getEntriesByType
            }

            function g(e) {
                return "string" == typeof e ? e.replace(/\s\s+/g, " ").replace(/ /g, "_") : e
            }

            function h(e, t, n) {
                if (!Object(m.trackingConfigExists)()) return null;
                var i = Object(m.getRequestConfigValue)(m.REQUEST_CORRELATION_ID),
                    r = Object(m.getTrackingConfigValue)(m.TRACKING_FINGERPRINT),
                    a = function() {
                        if (!p || !p.timing || null === Object(m.getRequestConfigValue)(m.REQUEST_BACKEND_TIME)) return null;
                        var e = p.timing,
                            t = e.loadEventEnd ? e.loadEventEnd : (new Date).getTime(),
                            n = e.connectEnd - e.connectStart,
                            i = e.responseEnd - e.requestStart,
                            r = t - e.domLoading,
                            a = t - e.navigationStart,
                            o = e.responseStart - e.requestStart,
                            c = e.domComplete - e.domLoading,
                            u = e.loadEventStart ? t - e.loadEventStart : 0,
                            s = e.domInteractive - e.domLoading,
                            l = e.domComplete - e.domInteractive,
                            d = Math.max(0, e.domainLookupEnd - e.domainLookupStart),
                            f = e.domContentLoadedEventEnd - e.domLoading,
                            h = 0;
                        if (e.secureConnectionStart && (h = e.connectEnd - e.secureConnectionStart), n < 0 || i < 0 || r < 0 || a < 0 || o < 0) return null;
                        var v = !1;
                        return n > 6e4 && (v = !0), i > 6e4 && (v = !0), r > 6e4 && (v = !0), a > 6e4 && (v = !0), o > 6e4 && (v = !0), {
                            connectStart: e.connectStart,
                            connectTime: n,
                            requestTime: i,
                            renderTime: r,
                            completeRequestTime: a,
                            firstContentTime: o,
                            backendTime: Object(m.getRequestConfigValue)(m.REQUEST_BACKEND_TIME),
                            domProcessingTime: c,
                            loadEventTime: u,
                            domLoadingTime: s,
                            domCompletionTime: l,
                            dnsLookupTime: d,
                            sslHandshakeTime: h,
                            domContentLoadingTime: f,
                            continent: g(Object(m.getTrackingConfigValue)(m.TRACKING_CONTINENT)),
                            countryCode: Object(m.getTrackingConfigValue)(m.TRACKING_COUNTRY_CODE),
                            flag: Object(m.getTrackingConfigValue)(m.TRACKING_FLAG),
                            isVeryLongRunning: v
                        }
                    }();
                if (null === a || !i || !r) return null;
                var o = {
                        c: i,
                        cfp: r,
                        k: a.isVeryLongRunning ? Object(m.getPageConfigValue)(m.PAGE_LONG_RUNNING_REQUEST_IDENTIFIER) : e.join("~"),
                        fp: a.isVeryLongRunning ? Object(m.getPageConfigValue)(m.PAGE_LONG_RUNNING_REQUEST_FP) : t,
                        cn: g(Object(m.getTrackingConfigValue)(m.TRACKING_CONTINENT)),
                        cc: Object(m.getTrackingConfigValue)(m.TRACKING_COUNTRY_CODE),
                        f: Object(m.getTrackingConfigValue)(m.TRACKING_FLAG),
                        xler: Object(m.getTrackingConfigValue)(m.TRACKING_LOG_EXTENDED_REQUEST) ? 1 : 0,
                        ct: a.connectTime,
                        rqt: a.requestTime,
                        rdt: a.renderTime,
                        crt: a.completeRequestTime,
                        fct: a.firstContentTime,
                        bt: Object(m.getRequestConfigValue)(m.REQUEST_BACKEND_TIME),
                        dpt: a.domProcessingTime,
                        let: a.loadEventTime,
                        dlt: a.domLoadingTime,
                        dct: a.domCompletionTime,
                        dnst: a.dnsLookupTime,
                        ht: a.sslHandshakeTime,
                        dclt: a.domContentLoadingTime
                    },
                    c = function() {
                        if (!f(p)) return null;
                        var e = p.getEntriesByType("paint");
                        return 0 === e.length ? null : e.reduce(function(e, t) {
                            var n = t.entryType,
                                i = t.name,
                                r = t.startTime;
                            return "paint" === n && i && r && (e[i] = parseInt(r, 10)), e
                        }, {})
                    }();
                null !== c && (c["first-paint"] && (o.fpt = c["first-paint"]), c["first-contentful-paint"] && (o.fcpt = c["first-contentful-paint"]));
                var u = function(e) {
                    if (!Object(m.getTrackingConfigValue)(m.TRACKING_LOG_TIME_TO_FIRST_AD) || !p || !p.timing) return null;
                    var t = p.timing.navigationStart;
                    return e ? {
                        timeToFirstAdRequestStarted: e.performance.adRequestStart - t,
                        timeToFirstAd: e.performance.adViewableAt - t,
                        adCorrelationId: e.metadata.adCorrelationId
                    } : {
                        timeNoAd: (new Date).getTime() - t
                    }
                }(n);
                u && (u.timeToFirstAd ? (o.ttfars = u.timeToFirstAdRequestStarted, o.ttfa = u.timeToFirstAd, o.acid = u.adCorrelationId) : o.tna = u.timeNoAd);
                var s = function() {
                    if (!f(p)) return null;
                    var e = p.getEntriesByType("resource"),
                        t = {
                            css: {
                                count: 0,
                                totalDuration: 0,
                                totalBytes: 0
                            },
                            js: {
                                count: 0,
                                totalDuration: 0,
                                totalBytes: 0
                            },
                            html: {
                                count: 0,
                                totalDuration: 0,
                                totalBytes: 0
                            },
                            image: {
                                count: 0,
                                totalDuration: 0,
                                totalBytes: 0
                            }
                        },
                        n = 0,
                        i = 0,
                        r = 0;
                    return e.forEach(function(e) {
                        var n;
                        if (e.name.match(/\.css$/)) n = "css";
                        else if (e.name.match(/\.js$/)) n = "js";
                        else if (e.name.match(/\.html($|\/?\?)/)) n = "html";
                        else {
                            if (!e.name.match(/\.(png|jpeg|jpg|gif)$/)) return;
                            n = "image"
                        }
                        t[n].count++, t[n].totalDuration += parseInt(e.duration, 10), t[n].totalBytes += parseInt(e.transferSize, 10), r += parseInt(e.transferSize, 10)
                    }), RGCommons.performedRequests.forEach(function(e) {
                        n++, i += parseInt(e.duration, 10)
                    }), {
                        cssCount: t.css.count,
                        cssTotalBytes: t.css.totalBytes,
                        cssTotalDuration: Math.max(0, t.css.totalDuration),
                        jsCount: t.js.count,
                        jsTotalDuration: Math.max(0, t.js.totalDuration),
                        jsTotalBytes: t.js.totalBytes,
                        htmlCount: t.html.count,
                        htmlTotalDuration: Math.max(0, t.html.totalDuration),
                        htmlTotalBytes: t.html.totalBytes,
                        imageCount: t.image.count,
                        imageTotalDuration: Math.max(0, t.image.totalDuration),
                        imageTotalBytes: t.image.totalBytes,
                        ajaxCount: n,
                        ajaxTotalDuration: Math.max(0, i),
                        totalBytes: r
                    }
                }();
                return null !== s && (o.cssc = s.cssCount, o.cssd = s.cssTotalDuration, o.cssb = s.imageTotalBytes, o.jsc = s.jsCount, o.jsd = s.jsTotalDuration, o.jsb = s.jsTotalBytes, o.hc = s.htmlCount, o.hd = s.htmlTotalDuration, o.hb = s.htmlTotalBytes, o.ic = s.imageCount, o.id = s.imageTotalDuration, o.ib = s.imageTotalBytes, o.ac = s.ajaxCount, o.ad = s.ajaxTotalDuration, o.tb = s.totalBytes), o
            }
            var v = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this).pageData = {}, n.timeoutId = null, n.isPageTracked = !1, Object(m.getTrackingConfigValue)(m.TRACKING_LOG_TIME_TO_FIRST_AD) && window.addEventListener("rgAdImpression", function(e) {
                            n.pageData.firstViewableAd = e.detail, n.monitorPageWithTimeToFirstAd()
                        }, {
                            once: !0,
                            passive: !0
                        }), window.addEventListener("beforeunload", function() {
                            var e = n.pageData,
                                t = e.endPoint,
                                i = e.keys,
                                r = e.keysHash,
                                a = e.firstViewableAd;
                            window.clearTimeout(n.timeoutId), n.trackPagespeedByImg(t, i, r, a)
                        }, {
                            once: !0
                        }), n
                    }
                    Object(o.a)(t, e);
                    var n = t.prototype;
                    return n.trackByImage = function(e, t) {
                        var n = this;
                        if (!e) return !1;
                        var i = document.createElement("img"),
                            r = function() {
                                window.requestIdleCallback(function() {
                                    i && i.parentNode && i.parentNode.removeChild(i)
                                })
                            };
                        return i.setAttribute("style", "overflow: hidden; height: 0; width: 0; display: block"), i.setAttribute("width", 0), i.setAttribute("height", 0), i.onload = r, i.onerror = r, i.src = e + "?" + l.a.stringify(t), document.body.appendChild(i), window.requestIdleCallback(function() {
                            n.emit("tracked", t)
                        }), !0
                    }, n.trackPagespeedByImg = function(e, t, n, i) {
                        if (!this.isPageTracked && e && t && n) {
                            var r = h(t, n, i);
                            r && (this.trackByImage(e, r), this.isPageTracked = !0)
                        }
                    }, n.monitorPage = function(e, t, n) {
                        var i = this;
                        if (!this.isPageTracked && !this.pageData.keys && t && t.length > 0) {
                            var r = function() {
                                i.trackPagespeedByImg(e, t, n)
                            };
                            Object(m.getTrackingConfigValue)(m.TRACKING_LOG_TIME_TO_FIRST_AD) && (r = function() {
                                i.pageData.endPoint = e, i.pageData.keys = t, i.pageData.keysHash = n, i.monitorPageWithTimeToFirstAd()
                            }), this.timeoutId = setTimeout(r, 3e3)
                        }
                    }, n.monitorPageWithTimeToFirstAd = function() {
                        var e = this,
                            t = this.pageData,
                            n = t.endPoint,
                            i = t.keys,
                            r = t.keysHash,
                            a = t.firstViewableAd;
                        if (n && i && r && a) return window.clearTimeout(this.timeoutId), this.timeoutId = null, void this.trackPagespeedByImg(n, i, r, a);
                        this.timeoutId || (this.timeoutId = setTimeout(function() {
                            e.trackPagespeedByImg(n, i, r, a)
                        }, 1e4))
                    }, t
                }(u.a),
                b = "Rg-Request-Token";

            function A(e) {
                document.getElementById(b).content = e
            }

            function y(e) {
                A(e), [].slice.call(document.querySelectorAll('input[name="request_token"]')).forEach(function(t) {
                    t.value = e
                })
            }

            function T() {
                return document.getElementById(b).content
            }
            if (window.localStorage) {
                try {
                    window.localStorage.setItem("Rg-Request-Token", T())
                } catch (e) {
                    console.error(e)
                }
                window.addEventListener("storage", function(e) {
                    "Rg-Request-Token" === e.key && y(e.newValue)
                })
            }
            var E = n(65),
                w = n.n(E),
                P = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).requests = [], t
                    }
                    Object(o.a)(t, e);
                    var n = t.prototype;
                    return n.add = function(e) {
                        this.requests.push(e), this.requests.length > 50 && this.requests.shift(), this.emit("performedAjaxRequest", e)
                    }, n.log = function(e, t, n, i, r) {
                        var a, o;
                        n.getResponseHeader ? (a = n.getResponseHeader("X-Correlation-Id"), o = !!n.getResponseHeader("X-Rg-Pi")) : n.headers && n.headers.get && (a = n.headers.get("X-Correlation-Id"), o = !!n.headers.get("X-Rg-Pi"));
                        var c = {
                            key: w()("req-"),
                            status: n.status,
                            url: e,
                            method: t,
                            correlationId: a,
                            pageImpression: o,
                            ok: i,
                            duration: r
                        };
                        this.requests.push(c), this.requests.length > 50 && this.requests.shift(), this.emit("performedAjaxRequest", c)
                    }, n.forEach = function(e) {
                        this.requests.forEach(e)
                    }, t
                }(u.a),
                N = function() {
                    function e() {}
                    var t = e.prototype;
                    return t.detectTabNabbing = function() {
                        var e = document.querySelectorAll("#main a[target]");
                        Array.from(e).forEach(function(e) {
                            if (e.getAttribute("href") && !e.getAttribute("href").match(/sci-hub/) && !e.getAttribute("href").match(/citenpl\.internal\.epo\.org/)) {
                                var t = e.getAttribute("rel"),
                                    n = t && t.toLowerCase().includes("noopener");
                                window && window.Bugsnag && !n && window.Bugsnag.notify("SecurityException", 'Found link with "target" without "rel=noopener" that can conduct to tabnabbing attacks: ' + e.toString(), {
                                    node: e.toString()
                                })
                            }
                        })
                    }, t.installOnLoadHandler = function() {
                        var e = this;
                        window.addEventListener("load", function() {
                            setTimeout(function() {
                                e.detectTabNabbing()
                            }, 3e3)
                        })
                    }, e
                }(),
                C = n(48),
                I = n.n(C),
                O = n(1887),
                j = n(2435);
            var S = new Set;

            function R(e) {
                return new Promise(function(t, n) {
                    var i = function(e) {
                        var t = (n = "staticUrl", (n ? j[n] : j) || "");
                        var n;
                        t.endsWith("/") || (t += "/");
                        return "" + t + e
                    }(e);
                    if (function(e) {
                            if (S.has(e)) return !0;
                            var t = Array.from(document.scripts).some(function(t) {
                                return t.src === e
                            });
                            t && S.add(e);
                            return t
                        }(i)) t();
                    else {
                        var r = document.getElementsByTagName("head")[0],
                            a = document.createElement("script");
                        a.src = i, a.onload = function() {
                            return t()
                        }, a.onerror = function() {
                            return n(new Error("Can not load " + e))
                        }, r.appendChild(a), S.add(i)
                    }
                })
            }

            function k(e) {
                ! function(e) {
                    if (!e) return;
                    var t;
                    L(), I()(window.reactData.initState, e), "function" == typeof window.Event ? t = new Event("RG.updateReactStateData") : (t = document.createEvent("Event")).initEvent("RG.updateReactStateData", !0, !0);
                    document.dispatchEvent(t)
                }(e.initState),
                function(e, t) {
                    void 0 === t && (t = null);
                    L(),
                        function e(t) {
                            if (t && "object" == typeof t) {
                                for (var n in t) t.hasOwnProperty(n) && (t[n] = e(t[n]));
                                if (t.templateName) {
                                    var i = t.id;
                                    return window.reactData.widgets[i] = t, i
                                }
                            }
                            return t
                        }(e);
                    var n = e.templateName,
                        i = e.webpackEntryFile,
                        r = e.id;
                    t && window.reactData.widgets[r] && (window.reactData.widgets[r].data.dialog = t);
                    D(n, i, function() {
                        window["renderReact_" + n] ? window["renderReact_" + n](r) : console.error("Could not render template: " + n)
                    })
                }(e)
            }

            function L() {
                window.reactData || (window.reactData = {
                    widgets: {},
                    initState: {},
                    entryPoints: {},
                    unmount: {}
                })
            }

            function D(e, t, n) {
                if (window["renderReact_" + e]) return n.call();
                if (!t) throw new Error("No script path provided. Make sure webpack entrypoint for widget is configured");
                R(t).then(n)
            }
            var _ = n(2831);
            t.default = {
                parameterFilter: new d,
                monitoring: new v,
                requestToken: i,
                performedRequests: new P,
                tabNabbingDetection: new N,
                react: a,
                script: r,
                waitForDevServer: O.waitForDevServer,
                debug: new _.a,
                activeAjaxRequests: 0
            }
        },
        2829: function(e) {
            e.exports = {
                "icon-stack-s.svg": "/m/4404709541248313/images/icons/nova/",
                "icon-stack-m.svg": "/m/4248175930755658/images/icons/nova/",
                "icon-stack-l.svg": "/m/4112617927957781/images/icons/nova/"
            }
        },
        2830: function(e) {
            e.exports = {
                Account: ["Node", "Person"],
                AccountActivateRgscore: ["TimelineActivity"],
                AccountAddAccountLab: ["TimelineActivity"],
                AccountAddAccountProject: ["TimelineActivity"],
                AccountAddMessageMessage: ["TimelineActivity"],
                AccountAddMessagePublication: ["TimelineActivity"],
                AccountAddPostPost: ["TimelineActivity"],
                AccountAddPublication: ["TimelineActivity"],
                AccountAddPublicationProject: ["TimelineActivity"],
                AccountAddPublicationlinkPublication: ["TimelineActivity"],
                AccountConfirmAuthorAccount: ["TimelineActivity"],
                AccountConfirmInvitationAccount: ["TimelineActivity"],
                AccountConfirmProjectrequestAccount: ["TimelineActivity"],
                AccountConfirmPublicationrequestAccount: ["TimelineActivity"],
                AccountEmailSuggestionItem: ["NotificationCenterRequestItem"],
                AccountFollowAccount: ["TimelineActivity"],
                AccountFollowPost: ["TimelineActivity"],
                AccountFollowProject: ["TimelineActivity"],
                AccountFollowPublication: ["TimelineActivity"],
                AccountJoinProject: ["TimelineActivity"],
                AccountJoinServiceAccount: ["TimelineActivity"],
                AccountLanguageMapping: ["Node"],
                AccountLikePostPost: ["TimelineActivity"],
                AccountLikeSuccessstoryAccount: ["TimelineActivity"],
                AccountMentionAccountMessage: ["TimelineActivity"],
                AccountMergeRequest: ["Node"],
                AccountPostMessageProject: ["TimelineActivity"],
                AccountPostPost: ["TimelineActivity"],
                AccountPostProject: ["TimelineActivity"],
                AccountProducePostProject: ["TimelineActivity"],
                AccountProducePublicationProject: ["TimelineActivity"],
                AccountPublishJob: ["TimelineActivity"],
                AccountPublishPublication: ["TimelineActivity"],
                AccountReadPublication: ["TimelineActivity"],
                AccountReceivePublicationlinkPublication: ["TimelineActivity"],
                AccountRecommendMessageProject: ["TimelineActivity"],
                AccountRecommendMessagePublication: ["TimelineActivity"],
                AccountRecommendPost: ["TimelineActivity"],
                AccountRecommendPostPost: ["TimelineActivity"],
                AccountRecommendPublication: ["TimelineActivity"],
                AccountRecommendSuccessstoryAccount: ["TimelineActivity"],
                AccountReferencePublicationProject: ["TimelineActivity"],
                AccountUploadPublication: ["TimelineActivity"],
                ActiveRecruitmentTargetingDimensionImpl: ["ActiveRecruitmentTargetingDim"],
                AdCampaign: ["Node"],
                AdCampaignBill: ["Node"],
                AdUnit: ["Node"],
                Advert: ["Node", "AdvertListItem"],
                AdvertCampaign: ["Node", "BusinessItemWithSalesforceCampaign", "AdvertCampaignListItem"],
                AdvertGroup: ["Node", "AdvertGroupListItem"],
                Author: ["Node", "Person"],
                AuthorAccountMappingSuggester: ["Node"],
                AuthorClusterSuggestionItem: ["NotificationCenterRequestItem"],
                AuthorScience: ["Node"],
                Authorship: ["PublicationAuthorship"],
                AwardedGrant: ["Node"],
                AwardedGrantParticipantCluster: ["Node"],
                AwardedGrantParticipantClusterClaimCandidate: ["Node"],
                Business: ["Node"],
                BusinessAccount: ["Node"],
                BusinessAccountInvitation: ["Node"],
                BusinessAudience: ["Node"],
                BusinessAutoBillLog: ["Node"],
                BusinessAutoChargeLog: ["Node"],
                BusinessLeadCampaign: ["Node"],
                BusinessNotification: ["Node"],
                BusinessPermission: ["Node"],
                BusinessPermissionCategory: ["Node"],
                BusinessRole: ["Node"],
                CareerLevel: ["Node"],
                City: ["Node"],
                ClaimableAuthorship: ["PublicationAuthorship"],
                ConferenceEvent: ["Node"],
                Conversation: ["Node"],
                CoreTag: ["Node"],
                Country: ["Node", "ProfileCountry"],
                Creative: ["AdvertListItem"],
                CustomField: ["Node"],
                Customer: ["Node"],
                CustomerAddress: ["Node"],
                Degree: ["Node"],
                Department: ["Node", "ProfileDepartment"],
                DfpUser: ["Node"],
                DmcaInfringement: ["Node"],
                EmailCampaign: ["Node", "BusinessItemWithSalesforceCampaign"],
                FakturaOrder: ["Node"],
                FakturaSubscription: ["Node"],
                FirstLevelScienceTargetingDimension: ["TargetingDimension"],
                FulltextRequest: ["Node"],
                GrantOpportunity: ["Node"],
                GrantOpportunityBookmark: ["Node"],
                GrantOpportunitySavedSearch: ["Node"],
                HeaderRequest: ["Node"],
                Institution: ["Node", "ProfileInstitution"],
                InstitutionPost: ["Node"],
                Invoice: ["Node"],
                Issue: ["Node"],
                Job: ["Node"],
                JobApplication: ["Node"],
                JobApplicationAttachment: ["Node"],
                JobApplicationCoverLetter: ["Node"],
                JobBookmark: ["Node"],
                JobCollaborator: ["Node"],
                JobPosition: ["Node"],
                JobPostWorkflow: ["Node"],
                JobSearchPreferences: ["Node"],
                JobSubscription: ["Node"],
                Journal: ["Node"],
                Keyword: ["Node"],
                Lab: ["Node"],
                LabAlumni: ["Node", "Person"],
                LabAlumniPersonName: ["Node", "Person"],
                LabMember: ["Node", "Person"],
                LabMemberPersonName: ["Node", "Person"],
                LineItem: ["Node", "AdvertGroupListItem"],
                Link: ["Node"],
                LocationPreset: ["Node"],
                Message: ["Node"],
                MessageLink: ["Node"],
                Order: ["Node", "BusinessItemWithSalesforceCampaign", "AdvertCampaignListItem"],
                Placement: ["Node"],
                Post: ["Node"],
                Product: ["Node"],
                ProductCategory: ["Node"],
                ProfileAboutMeGeneratedItem: ["NotificationCenterRequestItem"],
                ProfileCountryImpl: ["ProfileCountry"],
                ProfileDepartmentImpl: ["ProfileDepartment"],
                ProfileInstitutionImpl: ["ProfileInstitution"],
                Project: ["Node"],
                ProjectCollaborator: ["Node", "Person"],
                ProjectRequestItem: ["NotificationCenterRequestItem"],
                Promotion: ["Node"],
                Publication: ["Node"],
                PublicationArticle: ["PublicationType"],
                PublicationArtifact: ["PublicationType"],
                PublicationBook: ["PublicationType"],
                PublicationChapter: ["PublicationType"],
                PublicationCode: ["PublicationType"],
                PublicationConferencePaper: ["PublicationType"],
                PublicationCoverPage: ["PublicationType"],
                PublicationDataset: ["PublicationType"],
                PublicationExperimentFindings: ["PublicationType"],
                PublicationFeedbackRequestItem: ["NotificationCenterRequestItem"],
                PublicationInCollection: ["PublicationType"],
                PublicationInProceedings: ["PublicationType"],
                PublicationMethod: ["PublicationType"],
                PublicationNegativeResults: ["PublicationType"],
                PublicationPatent: ["PublicationType"],
                PublicationPoster: ["PublicationType"],
                PublicationPreprint: ["PublicationType"],
                PublicationPresentation: ["PublicationType"],
                PublicationRawData: ["PublicationType"],
                PublicationRequestItem: ["NotificationCenterRequestItem"],
                PublicationRequester: ["Node"],
                PublicationResearchProposal: ["PublicationType"],
                PublicationTechnicalReport: ["PublicationType"],
                PublicationThesis: ["PublicationType"],
                PublicationWorkingPaper: ["PublicationType"],
                PublisherInsightsFeedback: ["Node"],
                ReviewPushedPublicationItem: ["NotificationCenterRequestItem"],
                RightsHolder: ["Node"],
                SalesforceAccount: ["Node"],
                SalesforceCampaign: ["Node"],
                SalesforceUser: ["Node"],
                Science: ["Node"],
                ServiceAddAgclaimingcandidateAccount: ["TimelineActivity"],
                ServiceAddCitationPublication: ["TimelineActivity"],
                ServiceAddPublicationAccount: ["TimelineActivity"],
                ServiceAddRecommendationActivity: ["TimelineActivity"],
                ServiceAddRecommendationPublication: ["TimelineActivity"],
                ServiceAddRecommendationSuccessstory: ["TimelineActivity"],
                ServiceAddSuccessstoryAccount: ["TimelineActivity"],
                ServicePublishRgstatsAccount: ["TimelineActivity"],
                ServiceRemindBookmarkJob: ["TimelineActivity"],
                ServiceRemindGropbookmarkAccount: ["TimelineActivity"],
                ServiceRemindGropsavedsearchAccount: ["TimelineActivity"],
                SignUpAccount: ["Node", "Person"],
                StartedExperiment: ["InterfaceStartedExperiment"],
                StartedExperimentMock: ["InterfaceStartedExperiment"],
                StartedTrafficExperiment: ["InterfaceStartedTrafficExperiment"],
                SubscriptionPlan: ["Node", "CartItem"],
                SuccessStory: ["Node"],
                TakeDownBatch: ["Node"],
                TakeDownPublicationAbstract: ["Node"],
                TakeDownPublicationAsset: ["Node"],
                TargetingDimensionImpl: ["TargetingDimension"],
                UnknownTimelineActivity: ["TimelineActivity"],
                UserRecommendation: ["Node"]
            }
        },
        2831: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() {
                    return h
                });
                var i = n(1),
                    r = n(5),
                    a = n(499),
                    o = n.n(a),
                    c = n(0),
                    u = n.n(c),
                    s = n(69),
                    l = n.n(s),
                    d = n(75),
                    m = n(87),
                    p = n(65),
                    f = n.n(p),
                    g = n(1887),
                    h = function(t) {
                        function a() {
                            for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            return (e = t.call.apply(t, [this].concat(i)) || this).setMaxListeners(100), e.toolbarLoaded = !1, e.lastCorrelationId = null, e.isDebugModeOn = !1, e.addListener("intersectionObserver:switch", function(t) {
                                e.isDebugModeOn = t
                            }), e
                        }
                        Object(r.a)(a, t);
                        var o = a.prototype;
                        return o.addReadyListener = function(e) {
                            this.toolbarLoaded ? e() : this.once("toolbarLoaded", e)
                        }, o.logException = function(e) {
                            var t = this;
                            setTimeout(function() {
                                return t.emit("exception", e)
                            }, 0)
                        }, o.logGraphQLQuery = function(e, t) {
                            void 0 === t && (t = {}), this.emit("graphql", Object(i.a)({
                                key: f()("gql-")
                            }, e, {
                                duration: t.duration
                            }))
                        }, o.loadToolbar = function(t) {
                            var i = this;
                            if (!g.isWaiting) {
                                var r = function() {
                                        i.toolbarLoaded = !0, i.lastCorrelationId = t, i.emit("toolbarLoaded")
                                    },
                                    a = function() {
                                        var a = document.createElement("div");
                                        a.setAttribute("id", "rg-debug-toolbar"), document.body.appendChild(a), Object(d.renderForDomNode)(function() {
                                            return u.a.createElement(m.a, {
                                                url: "admindebugtoolbar.DebugProfilerToolbar.html",
                                                widgetParams: {
                                                    correlationId: t,
                                                    lastCorrelationId: i.lastCorrelationId
                                                },
                                                onLoad: r,
                                                renderPreloader: !1,
                                                loadComponentInternalDoNotSetOrYouWillBeFired: function() {
                                                    return Promise.all([n.e(1), n.e(0), n.e(3), n.e(438), n.e(51)]).then(n.bind(null, 5422))
                                                },
                                                hmrAcceptInternalDoNotSetOrYouWillBeFired: e.hot && !1
                                            })
                                        }, a)
                                    };
                                this.toolbarLoaded ? (this.unloadToolbar(), a()) : window.YRG ? window.YRG.use(["event"], function() {
                                    return window.YRG.on("load", a)
                                }) : ["complete", "interactive"].includes(document.readyState) ? a() : document.addEventListener("DOMContentLoaded", a)
                            }
                        }, o.unloadToolbar = function() {
                            var e = document.getElementById("rg-debug-toolbar");
                            e && setTimeout(function() {
                                l.a.unmountComponentAtNode(e), document.body.removeChild(e)
                            }, 0)
                        }, a
                    }(o.a)
            }).call(this, n(140)(e))
        },
        3185: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(217),
                r = n(1642),
                a = n(1339),
                o = n(955),
                c = n(15),
                u = n(2829),
                s = n(2830);
            i.a.resolvePath = function(e) {
                return "" + u[e] + e
            }, r.a.setMinIndex(6e3), c.defaultContext.configure({
                typeMap: s
            }), c.featureFlags.mergePartialResponses = !0, c.featureFlags.patchAfterMerge = !0;
            var l = n(99);
            l.default && (l = l.default), a.a.configure({
                errorFunction: l(n(26))
            });
            var d = n(31).getPageConfigValue("platformFeatures") || {};
            Object.keys(d.nova || []).length && Object.entries(d.nova).forEach(function(e) {
                var t = e[0],
                    n = e[1];
                Object(o.f)(t, n)
            }), Object.keys(d.rigel || []).length && Object.assign(c.featureFlags, d.rigel), window.RGCommons = l(n(2758)), window.RGCommons.tabNabbingDetection.installOnLoadHandler();
            var m = document;
            m.addEventListener("RG.updateReactStateData", function e() {
                m.removeEventListener("RG.updateReactStateData", e);
                var t = n(75).renderForDomNode,
                    i = l(n(3405)),
                    r = m.createElement("div");
                m.body.appendChild(r), t(i, r, !1);
                var a = l(n(3406)),
                    o = m.createElement("div");
                m.body.appendChild(o), t(a, o);
                var c = l(n(5077)),
                    u = m.createElement("div");
                m.body.appendChild(u), t(c, u)
            }), window.pageLoadedTimestamp = Date.now()
        },
        3335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "isWaiting", function() {
                return i
            }), n.d(t, "waitForDevServer", function() {
                return r
            });
            var i = !1;

            function r() {}
        },
        3405: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "AlertStack", function() {
                return p
            });
            var i = n(0),
                r = n.n(i),
                a = (n(2), n(35)),
                o = n(34),
                c = n(16),
                u = n(1340),
                s = n(489),
                l = n(521),
                d = n(20),
                m = n(53),
                p = function(e) {
                    var t = e.stack,
                        n = e.freezeStack,
                        i = e.unfreezeStack;
                    return r.a.createElement(u.a, {
                        onMouseEnter: n,
                        onMouseLeave: i
                    }, t.map(function(e) {
                        return r.a.cloneElement(e.componentGenerator(), {
                            key: e.uid
                        })
                    }))
                },
                f = Object(o.a)(function(e) {
                    return e.alertStack.get("stack")
                }, function(e) {
                    return {
                        stack: e
                    }
                });
            t.default = Object(c.compose)(Object(a.connect)(f, function(e) {
                return {
                    freezeStack: function() {
                        return e(Object(m.b)())
                    },
                    unfreezeStack: function() {
                        return e(Object(m.e)())
                    },
                    forwardYUI: function(t, n) {
                        return e(Object(d.pushYUINotification)(t, n))
                    },
                    flushYUINotifications: function() {
                        return e(Object(d.flushAlerts)())
                    }
                }
            }), Object(l.a)(["stack"]), Object(c.lifecycle)({
                componentDidMount: function() {
                    var e = this;
                    this.eventListeners = [], window.YRG && (this.eventListeners.push(Object(s.c)("emitLegacyNotification", function(t, n) {
                        var i = t;
                        if ("object" == typeof t) {
                            var r = [];
                            for (var a in t) t.hasOwnProperty(a) && r.push(t[a]);
                            i = r.join(", ")
                        }
                        e.props.forwardYUI(i, n)
                    })), this.eventListeners.push(Object(s.c)("flushLegacyNotifications", function() {
                        e.props.flushYUINotifications()
                    })))
                },
                componentWillUnmount: function() {
                    this.eventListeners.forEach(function(e) {
                        return e()
                    })
                }
            }))(p)
        },
        3406: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "ModalRoot", function() {
                return c
            }), n.d(t, "default", function() {
                return s
            });
            var i = n(2),
                r = n.n(i),
                a = n(35),
                o = n(34),
                c = function(e) {
                    var t = e.componentGenerator;
                    return t ? t() : null
                };
            c.displayName = "ModalRoot", c.propTypes = {
                componentGenerator: r.a.func
            };
            var u = Object(o.a)(function(e) {
                    return e.modalRoot
                }, function(e) {
                    return {
                        componentGenerator: e.get("activeModal")
                    }
                }),
                s = Object(a.connect)(u)(c)
        },
        3412: function(e, t, n) {},
        3413: function(e, t, n) {},
        489: function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return r
            }), n.d(t, "a", function() {
                return a
            }), n.d(t, "d", function() {
                return o
            }), n.d(t, "b", function() {
                return c
            });
            var i = n(112);

            function r(e, t) {
                return Object(i.a)(["rg-base"], function(n) {
                        n.on(e, t)
                    }),
                    function() {
                        a(e, t)
                    }
            }

            function a(e, t) {
                Object(i.a)(["rg-base"], function(n) {
                    n.detach(e, t)
                })
            }

            function o(e, t) {
                Object(i.a)(["rg-base"], function(n) {
                    n.once(e, t)
                })
            }

            function c(e, t) {
                Object(i.a)(["rg-base"], function(n) {
                    n.fire(e, t)
                })
            }
        },
        5077: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(5),
                r = n(0),
                a = n.n(r),
                o = (n(2), n(35)),
                c = n(1095),
                u = n(3);
            var s = n(105),
                l = n(83),
                d = n(11),
                m = n(1),
                p = n(148),
                f = n(30),
                g = n(66),
                h = n(89),
                v = n(29),
                b = n(668),
                A = n(240),
                y = n(76),
                T = n(22),
                E = n.n(T),
                w = (n(3412), new E.a("binary-question")),
                P = function(e) {
                    var t = e.name,
                        n = e.question,
                        i = e.type,
                        r = e.labelZero,
                        o = e.labelOne,
                        c = e.submitOnQuestionAnswered;
                    return "button" === i ? a.a.createElement(h.a, Object(d.a)({
                        direction: "column"
                    }, w()), a.a.createElement(h.a.Item, null, a.a.createElement(v.a, {
                        size: "l"
                    }, a.a.createElement("strong", null, n))), a.a.createElement(h.a.Item, w("hidden"), a.a.createElement(y.RadioFormField, {
                        name: t,
                        onChange: c
                    }, a.a.createElement(b.a, {
                        id: "radio_" + r,
                        name: t,
                        value: r
                    }), a.a.createElement(b.a, {
                        id: "radio_" + o,
                        name: t,
                        value: o
                    }))), a.a.createElement(h.a.Item, null, a.a.createElement(h.a, {
                        gutter: "m",
                        wrap: "nowrap"
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(A.a, Object(d.a)({
                        htmlFor: "radio_" + r
                    }, w("label-btn")), r)), a.a.createElement(h.a.Item, null, a.a.createElement(A.a, Object(d.a)({
                        htmlFor: "radio_" + o
                    }, w("label-btn")), o))))) : a.a.createElement(h.a, {
                        direction: "column"
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(v.a, {
                        size: "l"
                    }, a.a.createElement("strong", null, n))), a.a.createElement(h.a.Item, {
                        key: r
                    }, a.a.createElement(y.RadioFormField, {
                        name: t
                    }, a.a.createElement(b.a, {
                        name: t,
                        value: r
                    }, r), a.a.createElement(b.a, {
                        name: t,
                        value: o
                    }, o))))
                };
            P.defaultProps = {
                type: "button",
                labelZero: "No",
                labelOne: "Yes",
                name: "answer"
            };
            var N = P,
                C = n(16),
                I = n(525),
                O = n(658),
                j = n(44),
                S = n(663),
                R = n(2416),
                k = n(613),
                L = n(435),
                D = n(217),
                _ = "questionnaire",
                x = Object(k.a)({
                    form: _,
                    destroyOnUnmount: !1
                })(function(e) {
                    var t = e.handleSubmit,
                        n = e.id,
                        i = e.sectionName,
                        r = e.children,
                        o = e.renderCloseButton,
                        c = e.dispatch;
                    return a.a.createElement("form", {
                        onSubmit: t
                    }, a.a.createElement(h.a, {
                        gutter: "none",
                        justifyContent: "space-between",
                        style: {
                            height: 0
                        }
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(y.InputFormField, {
                        name: "trigger",
                        type: "hidden"
                    }, a.a.createElement(L.a, null))), a.a.createElement(h.a.Item, null, o(a.a.createElement(f.a, {
                        type: "button",
                        theme: "bare",
                        color: "grey",
                        size: "xs",
                        onClick: function() {
                            return c(Object(l.h)(n))
                        }
                    }, a.a.createElement(D.a, {
                        identifier: "close"
                    }))))), a.a.createElement(y.InputFormField, {
                        name: "trigger",
                        type: "hidden"
                    }, a.a.createElement(L.a, null)), a.a.createElement(R.a, {
                        name: i
                    }, r))
                }),
                q = (n(3413), new E.a("multiple-answer-question")),
                B = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).state = {
                            customAnswerValue: ""
                        }, t.handleTextareaChange = function(e) {
                            t.setState({
                                customAnswerValue: e.target.value
                            })
                        }, t.handleTextareaBlur = function() {
                            if (t.props.formValues && t.props.formValues.steps) {
                                var e = t.props.formValues.steps[t.props.stepIndex].answers[t.props.questionIndex],
                                    n = "steps[" + t.props.stepIndex + "].answers[" + t.props.questionIndex + "]";
                                if (Array.isArray(e)) {
                                    var i = e.indexOf(t.props.customAnswerLabel);
                                    i > -1 && t.props.dispatch(Object(j.change)(_, n + "[" + i + "]", e[i].concat(": ", t.state.customAnswerValue)))
                                } else e === t.props.customAnswerLabel && t.props.dispatch(Object(j.change)(_, n, e.concat(": ", t.state.customAnswerValue)))
                            }
                        }, t
                    }
                    Object(i.a)(t, e);
                    var n = t.prototype;
                    return n.renderRadioItems = function() {
                        var e = this.props.answerOptions.map(function(e) {
                            return a.a.createElement(b.a, {
                                key: "opt_" + e,
                                value: e,
                                name: "opt_" + e
                            }, e)
                        });
                        return this.props.customAnswerLabel && 0 !== this.props.customAnswerLabel.length && e.push(a.a.createElement(b.a, {
                            key: "opt_" + this.props.customAnswerLabel,
                            value: this.props.customAnswerLabel,
                            name: "opt_" + this.props.customAnswerLabel
                        }, this.props.customAnswerLabel)), [a.a.createElement(y.RadioFormField, {
                            layout: "stack",
                            name: this.props.name,
                            key: this.props.name
                        }, e), a.a.createElement("div", Object(d.a)({
                            key: this.props.name + "_custom"
                        }, q("textarea")), this.renderTextarea())]
                    }, n.renderCheckboxItems = function() {
                        var e = this.props.answerOptions.map(function(e) {
                            return a.a.createElement(I.a, {
                                key: "opt_" + e,
                                value: e,
                                name: "opt_" + e
                            }, e)
                        });
                        return this.props.customAnswerLabel && 0 !== this.props.customAnswerLabel.length && e.push(a.a.createElement(I.a, {
                            key: "opt_" + this.props.customAnswerLabel,
                            value: this.props.customAnswerLabel,
                            name: "opt_" + this.props.customAnswerLabel
                        }, this.props.customAnswerLabel)), [a.a.createElement(y.MultipleCheckboxFormField, {
                            layout: "stack",
                            name: this.props.name,
                            key: this.props.name
                        }, e), a.a.createElement("div", Object(d.a)({
                            key: this.props.name + "_custom"
                        }, q("textarea")), this.renderTextarea())]
                    }, n.renderTextarea = function() {
                        return this.props.customAnswerLabel && 0 !== this.props.customAnswerLabel.length ? a.a.createElement(O.a, {
                            id: "customAnswerTextarea",
                            rows: 1,
                            maxLength: 100,
                            onChange: this.handleTextareaChange,
                            onBlur: this.handleTextareaBlur
                        }) : null
                    }, n.render = function() {
                        var e = this.props,
                            t = e.question,
                            n = e.isMultipleSelection;
                        return a.a.createElement(h.a, Object(d.a)({
                            direction: "column"
                        }, q()), a.a.createElement(h.a.Item, null, a.a.createElement(v.a, {
                            size: "l"
                        }, a.a.createElement("strong", null, t))), a.a.createElement(h.a.Item, null, n ? this.renderCheckboxItems() : this.renderRadioItems()))
                    }, t
                }(r.Component);
            B.displayName = "MultipleAnswerQuestion", B.defaultProps = {
                answerOptions: [],
                isMultipleSelection: !1
            };
            var F = Object(C.compose)(Object(o.connect)(function(e) {
                    return {
                        formValues: Object(S.a)(_)(e)
                    }
                }))(B),
                G = n(354),
                M = "point",
                V = function(e) {
                    var t = e.name,
                        n = e.question,
                        i = e.scaleWidth,
                        r = e.scaleType,
                        o = e.labelLower,
                        c = e.labelUpper;

                    function u(e, t) {
                        return [a.a.createElement(h.a.Item, {
                            key: t
                        }, a.a.createElement(h.a, {
                            alignItems: "center",
                            gutter: "none",
                            direction: "column"
                        }, a.a.createElement(h.a.Item, null, a.a.createElement(b.a, Object(d.a)({}, e, {
                            value: t,
                            id: "point" + t,
                            onChange: function(t) {
                                e.onChange(t), e.onBlur(t)
                            },
                            checked: e.value === t
                        }))), a.a.createElement(h.a.Item, null, a.a.createElement(A.a, {
                            htmlFor: "point" + t
                        }, "" + t))))]
                    }
                    return a.a.createElement(h.a, {
                        direction: "column"
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(v.a, {
                        size: "l"
                    }, a.a.createElement("strong", null, n))), a.a.createElement(h.a.Item, null, a.a.createElement(h.a, {
                        gutter: "m",
                        wrap: "nowrap"
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(A.a, {
                        htmlFor: "point0"
                    }, o)), a.a.createElement(h.a.Item, null, a.a.createElement(G.a, {
                        name: t,
                        component: function(e) {
                            for (var t = e.input, n = 0, o = []; n < i;) {
                                var c = "" + (n + 1);
                                switch (r) {
                                    case M:
                                        o.push(u(t, c))
                                }
                                n++
                            }
                            return [a.a.createElement(h.a, {
                                gutter: "s",
                                key: "rating"
                            }, o)]
                        }
                    })), a.a.createElement(h.a.Item, null, a.a.createElement(A.a, {
                        htmlFor: "point" + (i - 1)
                    }, c)))))
                };
            V.defaultProps = {
                scaleType: M,
                scaleWidth: 7,
                name: "answer"
            };
            var U = {
                BinaryQuestion: N,
                MultipleAnswerQuestion: F,
                SimpleRatingQuestion: V,
                TextQuestion: function(e) {
                    var t = e.name,
                        n = e.question,
                        i = e.maxChars,
                        r = e.placeholder;
                    return a.a.createElement(h.a, {
                        direction: "column",
                        grow: !0
                    }, a.a.createElement(h.a.Item, null, a.a.createElement(v.a, {
                        size: "l"
                    }, a.a.createElement("strong", null, n))), a.a.createElement(h.a.Item, null, a.a.createElement(y.TextareaFormField, {
                        placeholder: r,
                        name: t,
                        maxLength: i
                    }, a.a.createElement(O.a, null))))
                }
            };
            var Q = "and",
                W = "or",
                H = "not",
                J = "equals",
                K = "empty",
                z = "gt",
                Y = "gte",
                X = "lt",
                $ = "lte";

            function Z(e, t) {
                var n, i, r, a = (n = e, i = t.step, r = t.question, n.steps && n.steps[i] && n.steps[i].answers && n.steps[i].answers[r] ? n.steps && n.steps[i].answers[r] : null);
                switch (t.type) {
                    case J:
                        return a === t.value;
                    case K:
                        return null == a;
                    case z:
                        return parseInt(a, 10) > parseInt(t.value, 10);
                    case Y:
                        return parseInt(a, 10) >= parseInt(t.value, 10);
                    case X:
                        return parseInt(a, 10) < parseInt(t.value, 10);
                    case $:
                        return parseInt(a, 10) <= parseInt(t.value, 10)
                }
                return !0
            }

            function ee(e, t) {
                return !t || function e(t, n) {
                    switch (n.type) {
                        case Q:
                            return n.conditions.reduce(function(n, i) {
                                return n && e(t, i)
                            }, !0);
                        case W:
                            return n.conditions.reduce(function(n, i) {
                                return n || e(t, i)
                            }, !1);
                        case H:
                            return !Z(t, n.conditions.pop())
                    }
                    return Z(t, n)
                }(e, t)
            }
            var te = function(e) {
                var t = e.title,
                    n = e.description;
                return a.a.createElement(g.a, {
                    color: "green",
                    title: t,
                    description: n
                }, a.a.createElement(D.a, {
                    size: "s",
                    theme: "ghost",
                    identifier: "check"
                }))
            };
            te.defaultProps = {
                title: "Thanks for your response.",
                description: "Your feedback will help us improve your experience on ResearchGate."
            };
            var ne = te,
                ie = n(26),
                re = n(27),
                ae = new E.a("rg-questionnaire"),
                oe = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).state = {
                            currentStep: 0,
                            answers: null
                        }, t.handleSubmitOnQuestionAnswered = function() {
                            t.props.dispatch(Object(j.submit)(_))
                        }, t
                    }
                    Object(i.a)(t, e);
                    var n = t.prototype;
                    return n.componentWillUnmount = function() {
                        this.props.dispatch(Object(j.destroy)(_))
                    }, n.getNextStepNumber = function(e) {
                        for (var t = this.props.steps, n = this.state.currentStep + 1; n < t.length; n++)
                            if (ee(e, t[n].conditions || null)) return n;
                        return "success"
                    }, n.processStep = function() {
                        var e = this.props,
                            t = e.id,
                            n = e.mode,
                            i = e.dispatch,
                            r = e.formValues,
                            a = e.metadata,
                            o = e.stepExperimentMilestones,
                            c = this.getNextStepNumber(r);
                        "live" === n && o[this.state.currentStep] && Object(re.a)(o[this.state.currentStep]), "success" === c && ("live" === n && function(e, t) {
                            return Object(u.default)("/questionnaire/" + e + "/save-response", {
                                method: "POST",
                                body: t
                            })
                        }(t, Object(m.a)({}, r, {
                            metadata: a
                        })).catch(ie.default), setTimeout(function() {
                            i(Object(l.h)(t, _))
                        }, 3e3)), this.setState({
                            currentStep: c
                        })
                    }, n.renderStepCTA = function(e) {
                        var t = this.props,
                            n = t.renderCallToAction,
                            i = t.defaultStepCTALabel;
                        return e.submitOnQuestionAnswered && 1 === e.questions.length ? null : a.a.createElement(p.a, null, n(a.a.createElement(f.a, {
                            key: 1,
                            size: "s",
                            type: "submit"
                        }, e.callToActionLabel || i)), !0 === e.isOptional && n(a.a.createElement(f.a, {
                            key: 1,
                            size: "s",
                            type: "submit",
                            theme: "bare",
                            color: "grey"
                        }, "Skip")))
                    }, n.renderQuestions = function(e) {
                        var t = this;
                        return e.questions.map(function(n, i) {
                            var r = Object(m.a)({}, n.props, {
                                stepIndex: t.state.currentStep,
                                questionIndex: i
                            });
                            return e.submitOnQuestionAnswered && 1 === e.questions.length && (r = Object(m.a)({}, r, {
                                    submitOnQuestionAnswered: t.handleSubmitOnQuestionAnswered
                                })),
                                function(e, t, n) {
                                    if (U[e]) {
                                        var i = U[e];
                                        return a.a.createElement(i, Object(d.a)({}, t, {
                                            name: "answers[" + n + "]",
                                            key: n
                                        }))
                                    }
                                    return null
                                }(n.type, r, i)
                        })
                    }, n.render = function() {
                        var e = this,
                            t = this.props,
                            n = t.id,
                            i = t.steps,
                            r = t.getStepsToRender,
                            o = t.renderSteps,
                            c = t.renderCloseButton,
                            u = t.trigger,
                            s = t.dispatch,
                            m = r(i, this.state.currentStep);
                        return m ? o(m.map(function(t, i) {
                            return "success" === t ? a.a.createElement(ne, {
                                key: i
                            }) : a.a.createElement(g.a, Object(d.a)({
                                key: i,
                                color: "white"
                            }, ae(), {
                                onMouseEnter: function() {
                                    return s(Object(l.f)())
                                },
                                onMouseLeave: function() {
                                    0 === e.state.currentStep && s(Object(l.g)(n))
                                }
                            }), a.a.createElement(x, {
                                sectionName: "steps[" + (e.state.currentStep ? e.state.currentStep : i) + "]",
                                id: n,
                                initialValues: {
                                    trigger: u
                                },
                                renderCloseButton: c,
                                onSubmit: function() {
                                    e.processStep()
                                }
                            }, a.a.createElement(h.a, {
                                direction: "column"
                            }, a.a.createElement(h.a.Item, null, e.renderQuestions(t)), a.a.createElement(h.a.Item, null, e.renderStepCTA(t)))))
                        })) : null
                    }, t
                }(r.Component);
            oe.displayName = "Questionnaire", oe.defaultProps = {
                mode: "live",
                renderCloseButton: function(e) {
                    return e
                },
                renderCallToAction: function(e) {
                    return e
                },
                renderSteps: function(e) {
                    return e
                },
                getStepsToRender: function(e, t) {
                    return "success" === t ? ["success"] : [e[t]]
                },
                defaultStepCTALabel: "Next",
                formValues: null,
                metadata: {},
                stepExperimentMilestones: []
            };
            var ce = Object(o.connect)(function(e) {
                    return {
                        formValues: Object(S.a)(_)(e)
                    }
                })(oe),
                ue = n(241),
                se = n.n(ue),
                le = function(e) {
                    function t() {
                        for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        return (t = e.call.apply(e, [this].concat(i)) || this).state = {
                            currentQuestionnaire: null,
                            activatedTriggers: []
                        }, t
                    }
                    Object(i.a)(t, e);
                    var n = t.prototype;
                    return n.questionnaire = function(e, t, n, i, r) {
                        return a.a.createElement(ce, {
                            id: e,
                            steps: n,
                            trigger: t,
                            mode: r && !0 === r.test ? "test" : "live",
                            metadata: r,
                            stepExperimentMilestones: i
                        })
                    }, n.loadQuestionnaire = function(e, t) {
                        var n = this;
                        (function(e, t) {
                            return Object(u.default)("/questionnaire/" + e + "/get", {
                                method: "GET",
                                query: {
                                    metadata: t
                                }
                            })
                        })(e, t).then(function(i) {
                            var r = i.success,
                                a = i.result,
                                o = a.id,
                                c = a.steps,
                                u = a.viewType,
                                s = a.milestones;
                            if (r && c && o) switch (u) {
                                case "alert-stack":
                                    return void n.props.dispatch(Object(l.i)(o, n.questionnaire(o, e, c, s, t)))
                            }
                        })
                    }, n.shouldComponentUpdate = function(e, t) {
                        var n = this,
                            i = e.activeTriggers,
                            r = [],
                            a = Object.keys(i);
                        return a.length > 0 && (se()(a, t.activatedTriggers).map(function(e) {
                            Object(c.b)(e, function(e, t, i) {
                                t && (i.context = t), n.loadQuestionnaire(e, i)
                            }), r.push(e)
                        }), r.length > 0 && this.setState({
                            activatedTriggers: t.activatedTriggers.concat(r)
                        })), !1
                    }, n.render = function() {
                        return null
                    }, t
                }(r.Component);
            le.displayName = "QuestionnaireProvider", le.defaultProps = {
                activeTriggers: {}
            }, le.displayName = "QuestionnaireProvider";
            t.default = Object(o.connect)(function(e) {
                var t = Object(s.a)(e).activeTriggers;
                return {
                    activeTriggers: t && t.constructor === Array ? {} : t
                }
            })(le)
        },
        521: function(e, t, n) {
            "use strict";
            var i = n(1),
                r = n(0),
                a = n.n(r),
                o = n(16),
                c = function(e, t) {
                    var n = (void 0 === t ? {} : t).pure,
                        r = void 0 !== n && n;
                    return function(t) {
                        return (r ? Object(o.compose)(Object(o.onlyUpdateForKeys)(e), Object(o.setDisplayName)(Object(o.wrapDisplayName)(t, "fromImmutable"))) : Object(o.setDisplayName)(Object(o.wrapDisplayName)(t, "fromImmutable")))(function(n) {
                            var r = Object.keys(n).reduce(function(t, r) {
                                var a, o = !!~e.indexOf(r),
                                    c = n[r],
                                    u = c && "function" == typeof c.toJS,
                                    s = o && u ? c.toJS() : c;
                                return Object(i.a)({}, t, ((a = {})[r] = s, a))
                            }, {});
                            return a.a.createElement(t, r)
                        })
                    }
                };
            n.d(t, "a", function() {
                return c
            })
        }
    },
    [
        [3185, 2, 1, 0, 3]
    ]
]);