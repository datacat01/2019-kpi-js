window.__iasPET = window.__iasPET || {};
window.__iasPET.start = window.__iasPET.start || function(f, x) {
    var g;
    try {
        var r = function(a) {
                var e, d, b, k, c = {},
                    m = function(c) {
                        return c && c.replace(/[^\w-_.>\/]/g, "")
                    };
                e = m(function(c) {
                    return c && c.replace(/\//g, "")
                }(a.adSlotId));
                d = a.size && a.size instanceof Array && a.size.join(".");
                b = m(a.adUnitPath);
                k = function(c) {
                    var b = "display";
                    "undefined" !== typeof a.type && null != c && "video" == m(c) && (b = "video");
                    return b
                }(a.type);
                c.id = e;
                c = h.extend(c, function(c) {
                    var b = {};
                    h.isArray(c) && (c.every(h.isArray) ? (c = c.map(function(c) {
                            return c.join(".")
                        }).join(","),
                        b.ss = "[" + c + "]") : b.s = c.join("."));
                    return b
                }(a.size));
                c.p = b;
                c.t = k;
                return {
                    toString: function() {
                        var b, a = [];
                        for (b in c) a.push(b + ":" + c[b]);
                        return "slot=" + ("{" + a.join(",") + "}")
                    },
                    isValid: function() {
                        return e && d && b
                    }
                }
            },
            y = function() {
                var a = {},
                    e = function(c) {
                        return setTimeout(function() {
                            a[c] || (g.diagPix(l.LONG_REQUEST, {
                                message: "threshold:2000"
                            }), g.warn("Long PET request that exceeds 2000ms."))
                        }, 2E3)
                    },
                    d = function(c) {
                        var b = h.getQueryParamByName("iasprofileprobability") || 10,
                            k, d, e = {};
                        h.chance(b) && setTimeout(function() {
                            d =
                                (k = a[c]) && k - c;
                            e.responsetime = d;
                            e.probability = b;
                            g.diagPix(l.PROFILE_RESPONSE, {
                                message: h.buildQueryString(e, ":")
                            })
                        }, 2E3)
                    },
                    b = function(c) {
                        return c.width + "." + c.height
                    },
                    k = function() {
                        var c = [],
                            a = f.__iasPET.pubId,
                            k = b(t.getWindowSize(f)),
                            d = b(t.getScreenSize(f)),
                            e = f.__iasPET.sessionId;
                        if (!n.isEmpty() && a) return c.push("anId=" + a), c.push(n), c.push("wr=" + k), c.push("sr=" + d), c.push("sessionId=" + e), c.push("url=" + encodeURIComponent(f.location.href)), g.log("ad slots set: " + n), g.log("anid set: " + a), c.join("&");
                        n.isEmpty() &&
                            g.error("Expected valid ad slot configuration.");
                        a || g.error("Expecting valid IAS publisher id.");
                        g.diagPix(l.MISSING_DATA)
                    };
                return {
                    send: function(c, b) {
                        var p, f, s = !1,
                            l, q = h.getQueryParamByName("iasendpoint") || "//pixel.adsafeprotected.com/services/pub",
                            u = k(),
                            r = h.isFn(c);
                        u && (p = function(b) {
                            s = h.now();
                            g.log("PET response " + b);
                            a[f] = s;
                            v.updateData(b);
                            r && c(b);
                            clearTimeout(l)
                        }, f = h.now(), a[f] = !1, h.sendXHR(q, u, p, b), l = e(f), d(f), n.clear())
                    }
                }
            },
            w = function() {
                var a, e, d, b, k = function(c) {
                    c && (e = h.isFn(c.dataHandler) ? c.dataHandler :
                        e, a = c.timeout || a, n.setAdSlots(c))
                };
                return {
                    setup: function() {
                        d = new y;
                        b = b || f.__iasPET.queue;
                        b.push = function(c) {
                            var b;
                            try {
                                if (h.isFn(c)) b = c();
                                else if (h.isObj(c)) b = c;
                                else throw Error("Items pushed into the queue must be a function or object");
                            } catch (p) {
                                g.error("Error processing queued command: " + p.message)
                            }
                            k(b);
                            d.send(e, a)
                        }
                    },
                    executeCommands: function() {
                        var c, m;
                        if ((b = b || f.__iasPET.queue) && b.length) {
                            for (c = 0; c < b.length; ++c) {
                                try {
                                    h.isFn(b[c]) ? m = b[c]() : h.isObj(b[c]) && (m = b[c])
                                } catch (p) {
                                    g.error("Error processing queued command: " +
                                        p.message)
                                }
                                k(m)
                            }
                            d.send(e, a)
                        }
                    }
                }
            }(),
            z = function() {
                var a, e = [{
                        id: "isRefreshable",
                        handler: function(b, a) {
                            var c = b.identifyAdServer(d);
                            a.source.postMessage(JSON.stringify(c), a.origin)
                        }
                    }, {
                        id: "recordAdSlotImpression",
                        handler: function(b, a, c) {
                            try {
                                var d = b.getAdServer(),
                                    e = d.getAllAdSlots();
                                d.findAdSlotByAdUnitId(e, c.adUnitId, function(d, e) {
                                    !d && e ? b.recordAdSlotImpression(a, c.asid, c.adUnitId, e) : console.error("error finding adSlot by adUnitId", d)
                                })
                            } catch (f) {
                                console.error(f)
                            }
                        }
                    }, {
                        id: "refreshAd",
                        handler: function(b, a, c) {
                            try {
                                var d =
                                    b.getAdServer();
                                d.refresh(d.getAdSlot(b.getAdSlotDataIdForAdUnitId(c && c.adUnitId)))
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }],
                    d = [{
                        adServerName: "GPT",
                        available: function() {
                            return !!(f.googletag && f.googletag.apiReady && f.googletag.pubads && "function" === typeof f.googletag.pubads)
                        },
                        getAdSlot: function(b) {
                            return top.__IntegralASExec && top.__IntegralASExec.adSlotData && top.__IntegralASExec.adSlotData[b] && top.__IntegralASExec.adSlotData[b].adSlot || null
                        },
                        getAllAdSlots: function() {
                            var b = f.googletag.pubads && "function" === typeof f.googletag.pubads &&
                                f.googletag.pubads();
                            return b && "function" === typeof b.getSlots && b.getSlots()
                        },
                        isAdUnitIdInSlot: function(b, a) {
                            var c = null,
                                d = RegExp("&chanId=" + a + "&", "g"),
                                e = b && b.getHtml && "function" === typeof b.getHtml && b.getHtml() || null;
                            e && d.test(e) && (c = b);
                            return c
                        },
                        findAdSlotByAdUnitId: function(b, a, c) {
                            if (b && Array.isArray(b)) {
                                var d = null,
                                    e;
                                for (e = 0; e < b.length; e += 1)
                                    if (d = this.isAdUnitIdInSlot(b[e], a)) {
                                        c(null, d);
                                        break
                                    } d || c(Error("Ad Slot Not Found"))
                            } else c(Error("slots or ad unit id missing from request"))
                        },
                        refresh: function(b) {
                            var a =
                                f.googletag && f.googletag.cmd,
                                c = f.googletag && f.googletag.pubads && "function" === typeof f.googletag.pubads && f.googletag.pubads();
                            a && c && "function" === typeof c.refresh && b && a.push(function() {
                                c.refresh([b])
                            })
                        }
                    }];
                return {
                    getAdServer: function() {
                        return a
                    },
                    setAdServer: function(b) {
                        a = b
                    },
                    identifyAdServer: function(b) {
                        for (var a, c = 0; c < b.length; c += 1)
                            if ((a = b[c].adServerName && b[c].available && "function" === typeof b[c].available) && b[c].available()) return this.setAdServer(b[c]), {
                                isRefreshable: !0,
                                adServerName: b[c].adServerName
                            };
                        return {
                            isRefreshable: !1,
                            adServerName: null
                        }
                    },
                    findAdServerByName: function(b) {
                        for (var a = 0; a < d.length; a += 1)
                            if (d[a].adServerName === b) return d[a];
                        return null
                    },
                    getTopRequestById: function(a) {
                        for (var d = null, c = 0; c < e.length; c += 1)
                            if (a === e[c].id) {
                                d = e[c];
                                break
                            } return d
                    },
                    handleTopRequests: function(a) {
                        var d = JSON.parse(a.data),
                            c;
                        d && d.requestTop && (c = this.getTopRequestById(d.requestTop)) && c.handler && "function" === typeof c.handler && c.handler(this, a, d)
                    },
                    getAdSlotDataIdForAdUnitId: function(a) {
                        return "AD_UNIT_" + a
                    },
                    recordAdSlotImpression: function(a,
                        d, c, e) {
                        try {
                            var f = this.getAdSlotDataIdForAdUnitId(c);
                            top.__IntegralASExec = top.__IntegralASExec || {};
                            top.__IntegralASExec.adSlotData = top.__IntegralASExec.adSlotData || {};
                            top.__IntegralASExec.adSlotData.hasOwnProperty(f) ? top.__IntegralASExec.adSlotData[f].refreshCount += 1 : top.__IntegralASExec.adSlotData[f] = {
                                refreshCount: 0,
                                refreshSessionId: d,
                                adSlot: e
                            };
                            this.sendRefreshSession(a, top.__IntegralASExec.adSlotData[f])
                        } catch (g) {
                            console.error("Unable to record ad slot impression", g)
                        }
                    },
                    sendRefreshSession: function(a,
                        d) {
                        a.source.postMessage(JSON.stringify({
                            requestId: "refreshSession",
                            refreshCount: d.refreshCount,
                            refreshSessionId: d.refreshSessionId
                        }), a.origin)
                    },
                    init: function() {
                        var a = this;
                        top.addEventListener("message", function(d) {
                            /requestTop/g.test(d.data) && a.handleTopRequests(d)
                        })
                    }
                }
            }(),
            n = function() {
                var a = [],
                    e = function(d) {
                        (new r(d)).isValid() ? a.push(new r(d)) : g.error("Missing ad slot id, slot size and/or ad unit path.")
                    };
                return {
                    setAdSlots: function(a) {
                        (a = a.adSlots) && (a instanceof Array ? a.forEach(function(a) {
                                e(a)
                            }) :
                            h.isObj(a) && e(a))
                    },
                    clear: function() {
                        a = []
                    },
                    isEmpty: function() {
                        return 0 === a.length
                    },
                    toString: function() {
                        return a.join("&")
                    }
                }
            }(),
            v = function() {
                var a = {},
                    e = {},
                    d = {},
                    b = function(a, b) {
                        a && h.isFn(a.setTargeting) && h.forIn(b, function(b, d) {
                            g.log("setting targeting: {" + b + ": " + d + "}");
                            a.setTargeting(b, d)
                        })
                    },
                    k = function() {
                        var a, d = f.googletag.pubads().getSlots();
                        d ? d.forEach(function(d) {
                            (a = h.isFn(d.getSlotElementId) && d.getSlotElementId()) && b(d, e[a])
                        }) : g.error("GPT slots have to be defined before setting slot level keyword targeting")
                    };
                return {
                    updateData: function(c) {
                        var b = JSON.parse(c);
                        c = b.brandSafety;
                        var f = b.slots,
                            k = b.custom;
                        b.fr && (a.fr = b.fr);
                        b = function(a, c) {
                            h.forIn(a, function(a, b) {
                                c[a] = b
                            })
                        };
                        b(c, a);
                        b(f, e);
                        b(k, d)
                    },
                    setTargeting: function() {
                        f.googletag ? f.googletag.cmd.push(function() {
                            b(f.googletag.pubads(), a);
                            k();
                            b(f.googletag.pubads(), d)
                        }) : (g.error("googletag is not available. Cannot set keyword targeting for GPT."), g.diagPix(l.GPT_NA))
                    }
                }
            }(),
            l = {
                GPT_NA: "gpt",
                LONG_REQUEST: "longreq",
                MISSING_DATA: "m",
                XHR_NA: "na",
                PROFILE_RESPONSE: "profile",
                XHR_GENERAL: "x",
                XHR_ERROR: "xe",
                XHR_TIMEOUT: "xt"
            },
            t = {
                getWindowSize: function(a) {
                    return {
                        width: a.innerWidth || -1,
                        height: a.innerHeight || -1
                    }
                },
                getScreenSize: function(a) {
                    return {
                        width: a.screen && a.screen.width || -1,
                        height: a.screen && a.screen.height || -1
                    }
                }
            };
        f.__iasPET.queue = f.__iasPET.queue || [];
        f.__iasPET.VERSION = "1.14.0";
        f.__iasPET.setTargetingForGPT = v.setTargeting;
        var q = function() {
            var a = function(a) {
                top.postMessage(a, "*")
            };
            return f.postMessage ? a : function() {}
        }();
        g = function() {
            var a = {},
                e = function(a, c) {
                    var b = "background-color: ",
                        d = f.console && "function" === typeof f.console.error,
                        e = h.getQueryParamByName("iasdebug"),
                        e = e && "TRUE" === e.toUpperCase();
                    "log" === a ? b += "lightgreen" : "error" === a ? b += "pink" : "warn" === a && (b += "lightyellow");
                    d && e && (console.log("%cIAS_DEBUG: " + c, b), q("DEBUG_petErrorsLog: IAS_DEBUG: " + c))
                },
                d = e.bind(null, "log"),
                b = e.bind(null, "warn");
            return {
                diagPix: function(b, c) {
                    var d, e, g, l;
                    if (!a[b]) try {
                        d = f.__iasPET.pubId || "", e = f.__iasPET.sessionId || "", a[b] = !0, g = {
                                code: "pet_" + b,
                                anid: d,
                                sessionId: e
                            }, c && (g.err = encodeURIComponent(c.message)),
                            l = h.buildQueryString(g, ":"), (new Image).src = "//pixel.adsafeprotected.com/jsdiagnostic?" + l, q("DEBUG_petErrorsReport: //pixel.adsafeprotected.com/jsdiagnostic?" + l)
                    } catch (n) {}
                },
                error: e.bind(null, "error"),
                log: d,
                warn: b
            }
        }();
        var h = {
            buildQueryString: function(a, e) {
                var d = "";
                a && (d = Object.keys(a).reduce(function(b, d) {
                    b.push([d, a[d]].join(e));
                    return b
                }, []).join("&"));
                return d
            },
            getQueryParamByName: function(a) {
                var e, d = f.location.search && f.location.search.toLowerCase();
                a = d && d.indexOf(a); - 1 !== a && (e = d.indexOf("=",
                    a) + 1, a = d.indexOf("&", e), a = -1 === a ? x : a, e = decodeURIComponent(d.slice(e, a)));
                return e
            },
            sendXHR: function(a, e, d, b) {
                var f, c;
                try {
                    if (f = new XMLHttpRequest) c = encodeURI(a + "?" + e), f.open("GET", c), q("DEBUG_petDataRequest: " + c), f.onreadystatechange = function() {
                        var a, b;
                        if (4 === f.readyState && 200 === f.status)
                            if (a = f.responseText, b = a.code) g.error("XMLHttpRequest failure code: " + a.code + ", message: " + a.message);
                            else if (d) try {
                            d.call({}, a)
                        } catch (c) {
                            g.error("Error firing the XMLHttpRequest callback: " + c.message)
                        }
                    }, b && (f.timeout =
                        b), f.ontimeout = function() {
                        g.error("XMLHttpRequest timeout event is fired.");
                        g.diagPix(l.XHR_TIMEOUT, {
                            message: "timeout:" + b
                        })
                    }, f.onerror = function(a) {
                        g.error("XMLHttpRequest error event is fired.");
                        g.diagPix(l.XHR_ERROR, a)
                    }, f.send()
                } catch (h) {
                    g.error("Error sending XMLHttpRequest: " + h.message), g.diagPix(l.XHR_GENERAL, h)
                }
            },
            forIn: function(a, e) {
                for (var d in a) a.hasOwnProperty(d) && e(d, a[d])
            },
            getUID: function() {
                var a = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                };
                return a() +
                    a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            },
            extend: function(a, e) {
                e && Object.keys(e).forEach(function(d) {
                    a[d] = e[d]
                });
                return a
            },
            isArray: function(a) {
                return a instanceof Array
            },
            isDef: function(a) {
                return "undefined" !== typeof a
            },
            isFn: function(a) {
                return "function" === typeof a
            },
            isObj: function(a) {
                return "object" === typeof a
            },
            isEmptyObj: function(a) {
                return 0 === Object.getOwnPropertyNames(a).length
            },
            now: function() {
                return (new Date).getTime()
            },
            chance: function(a) {
                return 100 * Math.random() < a
            }
        };
        "undefined" === typeof XMLHttpRequest ?
            g.diagPix(l.XHR_NA) : (f.__iasPET.sessionId = h.getUID(), w.setup(), w.executeCommands(), z.init())
    } catch (A) {
        g.error(A.message)
    }
};
window.__iasPET.start(window);