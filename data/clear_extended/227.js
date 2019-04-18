/*! License information is available at valve.licenses.txt */ /*! ace0ac4 released at 2018-12-28 17:04:05 GMT+9 */ ! function(e) {
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
    }, n.p = "", n(n.s = 12)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.appendScript = function(e) {
        var t = document.createElement("script");
        t.type = "text/javascript", t.async = !0, t.src = e;
        var n = new Promise(function(e, n) {
            t.addEventListener("load", function(t) {
                return e(t)
            }), t.addEventListener("error", function(e) {
                return n(e)
            })
        });
        return document.head.appendChild(t), n
    }, t.pollingElementById = function(e, t) {
        return new Promise(function(n, r) {
            var i = document.getElementById(e);
            if (i) n(i);
            else {
                var o = Date.now(),
                    s = function() {
                        var i = document.getElementById(e);
                        i ? n(i) : "number" == typeof t && o + t < Date.now() ? r(new Error(e)) : setTimeout(s, 10)
                    };
                setTimeout(s, 10)
            }
        })
    }, t.requestGPTSurveyTag = function(e, t) {
        var n = encodeURIComponent(Object.keys(t).map(function(e) {
                var n = t[e],
                    r = Array.isArray(n) ? n.map(function(e) {
                        return encodeURIComponent("" !== e ? e : "null")
                    }).join(",") : encodeURIComponent("" !== n ? n : "null");
                return encodeURIComponent(e) + "=" + (r || "null")
            }).join("&")),
            r = "https://pubads.g.doubleclick.net/gampad/adx?" + ["iu=" + e, "sz=1x1", "c=" + Math.floor(1e8 * Math.random()), "t=" + n].join("&");
        return fetch(r)
    }, t.timeoutPromise = function(e, t) {
        var n = new Promise(function(e) {
            setTimeout(e, t)
        }).then(function() {
            throw new Error("Operation timed out after " + t + " ms")
        });
        return Promise.race([e, n])
    };
    var r = function() {
        return function() {
            var e = this;
            this.promise = new Promise(function(t, n) {
                e.resolve = t, e.reject = n
            })
        }
    }();
    t.Deferred = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.tag = "valve:", this.enabled = -1 !== location.href.indexOf("hatena_valve_debug"), this.timers = {}, this.usePerformanceNow = !(!performance || "function" != typeof performance.now), this.ensureLoggingMethods()
        }
        return Object.defineProperty(e, "instance", {
            get: function() {
                return this.logger || (this.logger = new e), this.logger
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setEnabled = function(e) {
            this.enabled = e, this.ensureLoggingMethods()
        }, e.prototype.ensureLoggingMethods = function() {
            console && "function" == typeof console.log && "function" == typeof console.warn && "function" == typeof console.error || (this.enabled = !1)
        }, e.prototype.log = function(e) {
            this.enabled && console.log(this.tag + " " + this.ensureStringMessage(e))
        }, e.prototype.warn = function(e) {
            this.enabled && console.warn(this.tag + " " + this.ensureStringMessage(e))
        }, e.prototype.error = function(e) {
            this.enabled && console.error(this.tag + " " + this.ensureStringMessage(e))
        }, e.prototype.ensureStringMessage = function(e) {
            return "function" == typeof e ? e() : e instanceof Error ? e.toString() : e
        }, e.prototype.lognow = function(e) {
            if (this.enabled) {
                var t = this.usePerformanceNow ? performance.now() : "<none>";
                console.log(this.tag + " " + this.ensureStringMessage(e) + " at " + t)
            }
        }, e.prototype.time = function(e) {
            this.enabled && (this.timers[e] = Date.now())
        }, e.prototype.timeEnd = function(e) {
            if (this.enabled && this.timers[e]) {
                var t = Date.now() - this.timers[e];
                console.log(this.tag + " " + e + " taken " + t.toString() + " ms"), delete this.timers[e]
            }
        }, e
    }();
    t.Logger = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.pickRandomFromArray = function(e) {
            return e[Math.floor(Math.random() * e.length)]
        }, e.prototype.selectFloorStep = function(e) {
            for (var t = this.floorPriceTable.length - 1, n = Math.abs(this.floorPriceTable[t] - e), r = 0; r < this.floorPriceTable.length; ++r) {
                var i = Math.abs(this.floorPriceTable[r] - e);
                i < n && (n = i, t = r)
            }
            return this.floorPriceTable[t]
        }, e.defaultKeyValues = {
            "is-valve-flp": "false",
            "valve-flp-version": "null",
            "valve-flp-v6": "null",
            "valve-flp-rand-ab-v6": "null",
            "valve-flp-v7": "null",
            "valve-flp-rand-ab-v7": "null"
        }, e
    }();
    t.FloorPricePredictor = r;
    var i = function() {
        return function() {
            this.activeViewRate = {
                "/4374287/antenna": .6815000000000001,
                "/4374287/question_permalink2": .7399,
                "/4374287/question_permalink3": .47240000000000004,
                "/4374287/question_permalink_sp": .055700000000000006,
                "/4374287/bnews_top": .5898,
                "/4374287/bnews_permalink": .7004,
                "/4374287/bnews_permalink2": .17920000000000003,
                "/4374287/bookmark_entry": .7574,
                "/4374287/bookmark_entry2": .6494,
                "/4374287/q_perma": .5865,
                "/4374287/blog_user": .3575,
                "/4374287/diary_user": .4794,
                "/4374287/portal": .8045,
                "/4374287/blog_top": .373,
                "/4374287/keyword_rectangle": .1496,
                "/4374287/keyword_top_rectangle": .8247,
                "/4374287/b_pc_o_16_3328_0_no": .8054000000000001,
                "/4374287/b_sp_o_15_3025_0_no": .5368,
                "/4374287/key_pc_e_4_3060_0_no": .2919,
                "/4374287/b_pc_o_18_3025_0_no": .713,
                "/4374287/b_pc_o_19_3060_0_no": .40750000000000003,
                "/4374287/d_sp_e_6_3025_0_no": .4121,
                "/4374287/blo_pc_o_5_nat_0_no": .738,
                "/4374287/blo_sp_o_8_nat_0_no": .6073,
                "/4374287/blog_group": .1941,
                "/4374287/d_sp_com_1_3250_0_no": .8758,
                "/4374287/b_sp_com_1_3250_0_no": .8715999999999999,
                "/4374287/key_sp_com_1_3250_0_no": .8190999999999999,
                "/4374287/ano_sp_com_1_3250_0_no": .8884000000000001,
                "/4374287/q_sp_com_1_3250_0_no": .9209,
                "/4374287/f_sp_overlay": .7654000000000001,
                "/4374287/hik_sp_overlay": .8668000000000001,
                "/4374287/htn_sp_overlay": .7569,
                "/4374287/bnews_permalink_bottom_left": .0992,
                "/4374287/bnews_permalink_bottom_right": .0992,
                "/4374287/bookmark_entry_right": .3444,
                "/4374287/bookmark_entry_left": .34490000000000004,
                "/4374287/question_permalink_rectangle_footer": .032799999999999996,
                "/4374287/anond_permalink_middle": .6525,
                "/4374287/keyword_footer_sp": .6282,
                "/4374287/portal_sp": .0625,
                "/4374287/question_permalink_bottom_left": .312,
                "/4374287/question_permalink_bottom_right": .3116,
                "/4374287/blog_posted_rectangle_left": .6265999999999999,
                "/4374287/blog_posted_rectangle_right": .5808,
                "/4374287/anond_entry_trackback_bottom": .2232,
                "/4374287/keyword_permalink_bottom_left": .2002,
                "/4374287/keyword_permalink_bottom_right": .19820000000000002,
                "/4374287/blog_404": .501,
                "/4374287/question_permalink_fewfooter_left": .25170000000000003,
                "/4374287/question_permalink_fewfooter_right": .2514,
                "/4374287/keyword_footer_sp_300x250": .10869999999999999,
                "/4374287/bookmark_404": .5644,
                "/4374287/key_pc_t_12_9725_0_no": .7101999999999999,
                "/4374287/keyword_permalink_middle_left": .3755,
                "/4374287/keyword_permalink_middle_right": .3705,
                "/4374287/keyword_top_rectangle2": .16399999999999998,
                "/4374287/b_pc_e_8_tex_0_v2": .8019,
                "/4374287/keyword_blog_sp_300x250": .31010000000000004,
                "/4374287/blog_user_2nd": .0859,
                "/4374287/blo_pc_com_6_3328_0_no": .4428,
                "/4374287/blo_sp_com_9_3025_0_no": .2748,
                "/4374287/kad_pc_e_1_3025_0_no": .7819,
                "/4374287/kad_sp_e_1_3025_0_no": .1706,
                "/4374287/ant_pc_e_1_7290_0_no": .5639000000000001,
                "/4374287/ant_pc_e_2_3328_0_no_ri": .5860000000000001,
                "/4374287/ant_pc_e_2_3328_0_no_le": .5883,
                "/4374287/ant_pc_e_3_3328_0_no_ri": .1993,
                "/4374287/ant_pc_e_3_3328_0_no_le": .19829999999999998,
                "/4374287/ant_pc_e_4_3328_0_no_ri": .0836,
                "/4374287/ant_pc_e_4_3328_0_no_le": .08410000000000001,
                "/4374287/ant_sp_e_1_3250_0_no": .8119,
                "/4374287/ant_sp_e_2_3025_0_no": .42700000000000005,
                "/4374287/ant_sp_e_3_3025_0_no": .1229,
                "/4374287/ant_sp_e_4_3025_0_no": .055099999999999996,
                "/4374287/ano_sp_e_4_3210_0_no": .5536,
                "/4374287/ano_sp_e_6_3025_0_no": .1318,
                "/4374287/ano_sp_e_7_3025_0_no": .011000000000000001,
                "/4374287/ano_sp_t_3_3025_0_no": .21710000000000002,
                "/4374287/jpl_pc_e_1_3025_0_no": .4054,
                "/4374287/jpl_pc_e_2_3025_0_no": .40390000000000004,
                "/4374287/jpl_sp_e_1_3025_0_no": .1332,
                "/4374287/ano_sp_e_5_3025_0_no": .5946,
                "/4374287/f_sp_e_1_3025_0_no": .42119999999999996,
                "/4374287/kad_pc_e_2_3025_0_no": .7228,
                "/4374287/kad_sp_e_2_3025_0_no": .3937,
                "/4374287/diary_user2": .1711,
                "/4374287/kad_sp_e_4_3250_1_no": .7525000000000001,
                "/4374287/keyword_permalink_sidebar_above": .4938,
                "/4374287/keyword_permalink_sidebar_below": .6976000000000001,
                "/4374287/keyword_sp_permalink_blog": .2306,
                "/4374287/anond_entry_trackback_right": .2197,
                "/4374287/anond_permalink_chumoku_right": .0279,
                "/4374287/anond_permalink_chumoku_left": .027999999999999997,
                "/4374287/bnews_permalink_kanren_right": .11810000000000001,
                "/4374287/bnews_permalink_kanren_left": .1184,
                "/4374287/haiku_doublerectangle": .12119999999999999,
                "/4374287/diary_sp_permalink_footer_rectangle": .1266,
                "/4374287/h_sp_menu_bottom": .023700000000000002,
                "/4374287/blog_sp_footer_rectangle": .027200000000000002,
                "/4374287/b_sp_com_1_3250_0_alt": .8649,
                "/4374287/b_sp_com_2_3025_0_alt": .14220000000000002,
                "/4374287/blo_sp_e_6_3025_0_no": .29960000000000003,
                "/4374287/tyj_pc_e_4_3025_0_no": .4658,
                "/4374287/tyj_pc_t_5_3025_0_no": .0907,
                "/4374287/tyj_pc_e_2_3025_0_no": .31320000000000003,
                "/4374287/tyj_pc_e_3_3025_0_no": .469,
                "/4374287/tyj_sp_t_3_3025_0_no": .0689,
                "/4374287/tyj_pc_t_6_3025_0_no": .0897,
                "/4374287/tyj_pc_e_1_3025_0_no": .2866,
                "/4374287/tyj_sp_e_2_3025_0_no": .1772,
                "/4374287/tyj_sp_e_1_3025_0_no": .38939999999999997,
                "/4374287/mgp_pc_e_1_3025_0_no": .4425,
                "/4374287/mgp_pc_t_3_3025_0_no": .09050000000000001,
                "/4374287/mgp_pc_e_2_3025_0_no": .43950000000000006,
                "/4374287/mgp_pc_t_4_3025_0_no": .08869999999999999,
                "/4374287/mgp_sp_e_1_3025_0_no": .1583,
                "/4374287/mgp_sp_t_2_3025_0_no": .0181,
                "/4374287/dys_pc_e_1_3025_0_no": .5225,
                "/4374287/dys_pc_e_2_3025_0_no": .5456000000000001,
                "/4374287/dys_sp_e_1_3025_0_no": .2903,
                "/4374287/bookmark_entrylist_top_right_rectangle_pc": .6302000000000001,
                "/4374287/bookmark_entrylist_sidebar_top_pc": .6639,
                "/4374287/bookmark_entrylist_sidebar_bottom_pc": .5545,
                "/4374287/bookmark_entrylist_bottom_super_pc": .0675,
                "/4374287/bookmark_entrylist_bottom_rectangle_sp": .0409,
                "/4374287/bookmark_entrylist_middle_super_pc": .3282,
                "/4374287/bookmark_overlay_sp": .8969,
                "/4374287/bookmark_entrylist_middle_rectangle_sp": .15380000000000002,
                "/4374287/krg_pc_e_3_3025_0_no": .7404999999999999,
                "/4374287/krg_pc_e_2_3025_0_no": .0795,
                "/4374287/krg_pc_e_4_3025_0_no": .7373000000000001,
                "/4374287/krg_pc_e_1_3025_0_no": .0782,
                "/4374287/krg_sp_e_1_3025_0_no": .46490000000000004,
                "/4374287/krg_sp_e_2_3025_0_no": .3057,
                "/4374287/bookmark_entrysearch_sidebar_bottom_pc": .5244,
                "/4374287/bookmark_entrysearch_sidebar_top_pc": .6408,
                "/4374287/bookmark_entrysearch_rectangle_bottom_sp": .1067,
                "/4374287/question_under_1st_answer": .6204,
                "/4374287/keyword_under_title": .7123999999999999,
                "/4374287/question_under_question": .6893000000000001,
                "/4374287/question_footer": .1635,
                "/4374287/keyword_under_description": .5884,
                "/4374287/haiku_doublerectangle_left": .1341,
                "/4374287/anond_under_title": .77,
                "/4374287/hrs_pc_e_1_3025_0_no": .7859,
                "/4374287/hrs_pc_e_2_3025_0_no": .7855,
                "/4374287/hrs_sp_e_1_3025_0_no": .5314,
                "/4374287/to-ti_series_under_description": .6436000000000001,
                "/4374287/to-ti_series_footer": .0992,
                "/4374287/to-ti_viewer_pc_1st_top": .8444,
                "/4374287/to-ti_viewer_pc_1st_bottom": .8437000000000001,
                "/4374287/to-ti_viewer_pc_last_top": .5888,
                "/4374287/to-ti_viewer_sp_last": .172,
                "/4374287/to-ti_viewer_pc_last_bottom": .598,
                "/4374287/to-ti_top_1st": .5412,
                "/4374287/to-ti_top_after_1st": .1783,
                "/4374287/border_viewer_pc_last_bottom": .7565000000000001,
                "/4374287/border_viewer_sp_last": .4863,
                "/4374287/border_viewer_pc_last_top": .761,
                "/4374287/blog_top_header_jack": .7356999999999999,
                "/4374287/diary_sp_permalink_pager_rectangle": .25680000000000003,
                "/4374287/diary_user_track": .2138,
                "/4374287/question_sp_permalink_rectangle_middle": .1584,
                "/4374287/blog_sp_user_pager": .0894,
                "/4374287/bookmark_sp_entry": .0375,
                "/4374287/keyword_sp_middle": .4022,
                "/4374287/d_user_sp_bottom": .4313,
                "/4374287/blog_entrytop_bottom": .1907,
                "/4374287/question_sp_bcomment": .3347,
                "/4374287/question_sp_middle": .599,
                "/4374287/bookmark_sp_a": .13970000000000002,
                "/4374287/keyword_sp_kanren": .12140000000000001,
                "/4374287/ca-pub-4438296558807254": .3333
            }
        }
    }();
    t.CPMPredictor = i, t.slotSizeToFeature = function(e) {
        var t = e.map(function(e) {
            return e[0] + "x" + e[1]
        }).reduce(function(e, t) {
            return e[t] = !0, e
        }, {});
        return {
            unitSize30: t["300x250"] ? "1" : "0",
            unitSize33: t["336x280"] ? "1" : "0",
            unitSize32: t["320x100"] ? "1" : "0",
            unitSize72: t["728x90"] ? "1" : "0",
            unitSize97: t["970x250"] ? "1" : "0"
        }
    }
}, function(e, t) {
    ! function(e) {
        "use strict";
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
            d.prototype.append = function(e, t) {
                e = a(e), t = u(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, d.prototype.delete = function(e) {
                delete this.map[a(e)]
            }, d.prototype.get = function(e) {
                return e = a(e), this.has(e) ? this.map[e] : null
            }, d.prototype.has = function(e) {
                return this.map.hasOwnProperty(a(e))
            }, d.prototype.set = function(e, t) {
                this.map[a(e)] = u(t)
            }, d.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, d.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }), c(e)
            }, d.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), c(e)
            }, d.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }), c(e)
            }, t.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
            var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            m.prototype.clone = function() {
                return new m(this, {
                    body: this._bodyInit
                })
            }, g.call(m.prototype), g.call(v.prototype), v.prototype.clone = function() {
                return new v(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new d(this.headers),
                    url: this.url
                })
            }, v.error = function() {
                var e = new v(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var s = [301, 302, 303, 307, 308];
            v.redirect = function(e, t) {
                if (-1 === s.indexOf(t)) throw new RangeError("Invalid status code");
                return new v(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = d, e.Request = m, e.Response = v, e.fetch = function(e, n) {
                return new Promise(function(r, i) {
                    var o = new m(e, n),
                        s = new XMLHttpRequest;
                    s.onload = function() {
                        var e, t, n = {
                            status: s.status,
                            statusText: s.statusText,
                            headers: (e = s.getAllResponseHeaders() || "", t = new d, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
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
                        r(new v(i, n))
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

        function u(e) {
            return "string" != typeof e && (e = String(e)), e
        }

        function c(e) {
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

        function d(e) {
            this.map = {}, e instanceof d ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function l(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function f(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function p(e) {
            var t = new FileReader,
                n = f(t);
            return t.readAsArrayBuffer(e), n
        }

        function h(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function g() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !i(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, t.blob && (this.blob = function() {
                var e = l(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
            }), this.text = function() {
                var e, t, n, r = l(this);
                if (r) return r;
                if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, n = f(t), t.readAsText(e), n;
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
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new d(e.headers)), this.method = e.method, this.mode = e.mode, i || null == e._bodyInit || (i = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new d(t.headers)), this.method = (n = t.method || this.method || "GET", r = n.toUpperCase(), o.indexOf(r) > -1 ? r : n), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
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

        function v(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" != typeof self ? self : this)
}, function(e, t, n) {
    (function(t, n) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.5+7f2b526d
         */
        var r;
        r = function() {
            "use strict";

            function e(e) {
                return "function" == typeof e
            }
            var r = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                i = 0,
                o = void 0,
                s = void 0,
                a = function(e, t) {
                    h[i] = e, h[i + 1] = t, 2 === (i += 2) && (s ? s(g) : _())
                };
            var u = "undefined" != typeof window ? window : void 0,
                c = u || {},
                d = c.MutationObserver || c.WebKitMutationObserver,
                l = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
                f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function p() {
                var e = setTimeout;
                return function() {
                    return e(g, 1)
                }
            }
            var h = new Array(1e3);

            function g() {
                for (var e = 0; e < i; e += 2) {
                    (0, h[e])(h[e + 1]), h[e] = void 0, h[e + 1] = void 0
                }
                i = 0
            }
            var m, y, v, b, _ = void 0;

            function S(e, t) {
                var n = this,
                    r = new this.constructor(E);
                void 0 === r[T] && q(r);
                var i = n._state;
                if (i) {
                    var o = arguments[i - 1];
                    a(function() {
                        return U(i, r, o, n._result)
                    })
                } else j(n, r, e, t);
                return r
            }

            function w(e) {
                if (e && "object" == typeof e && e.constructor === this) return e;
                var t = new this(E);
                return C(t, e), t
            }
            l ? _ = function() {
                return t.nextTick(g)
            } : d ? (y = 0, v = new d(g), b = document.createTextNode(""), v.observe(b, {
                characterData: !0
            }), _ = function() {
                b.data = y = ++y % 2
            }) : f ? ((m = new MessageChannel).port1.onmessage = g, _ = function() {
                return m.port2.postMessage(0)
            }) : _ = void 0 === u ? function() {
                try {
                    var e = Function("return this")().require("vertx");
                    return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function() {
                        o(g)
                    } : p()
                } catch (e) {
                    return p()
                }
            }() : p();
            var T = Math.random().toString(36).substring(2);

            function E() {}
            var A = void 0,
                I = 1,
                O = 2,
                P = {
                    error: null
                };

            function R(e) {
                try {
                    return e.then
                } catch (e) {
                    return P.error = e, P
                }
            }

            function D(t, n, r) {
                n.constructor === t.constructor && r === S && n.constructor.resolve === w ? function(e, t) {
                    t._state === I ? B(e, t._result) : t._state === O ? k(e, t._result) : j(t, void 0, function(t) {
                        return C(e, t)
                    }, function(t) {
                        return k(e, t)
                    })
                }(t, n) : r === P ? (k(t, P.error), P.error = null) : void 0 === r ? B(t, n) : e(r) ? function(e, t, n) {
                    a(function(e) {
                        var r = !1,
                            i = function(e, t, n, r) {
                                try {
                                    e.call(t, n, r)
                                } catch (e) {
                                    return e
                                }
                            }(n, t, function(n) {
                                r || (r = !0, t !== n ? C(e, n) : B(e, n))
                            }, function(t) {
                                r || (r = !0, k(e, t))
                            }, e._label);
                        !r && i && (r = !0, k(e, i))
                    }, e)
                }(t, n, r) : B(t, n)
            }

            function C(e, t) {
                var n, r;
                e === t ? k(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? B(e, t) : D(e, t, R(t)))
            }

            function x(e) {
                e._onerror && e._onerror(e._result), N(e)
            }

            function B(e, t) {
                e._state === A && (e._result = t, e._state = I, 0 !== e._subscribers.length && a(N, e))
            }

            function k(e, t) {
                e._state === A && (e._state = O, e._result = t, a(x, e))
            }

            function j(e, t, n, r) {
                var i = e._subscribers,
                    o = i.length;
                e._onerror = null, i[o] = t, i[o + I] = n, i[o + O] = r, 0 === o && e._state && a(N, e)
            }

            function N(e) {
                var t = e._subscribers,
                    n = e._state;
                if (0 !== t.length) {
                    for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? U(n, r, i, o) : i(o);
                    e._subscribers.length = 0
                }
            }

            function U(t, n, r, i) {
                var o = e(r),
                    s = void 0,
                    a = void 0,
                    u = void 0,
                    c = void 0;
                if (o) {
                    if ((s = function(e, t) {
                            try {
                                return e(t)
                            } catch (e) {
                                return P.error = e, P
                            }
                        }(r, i)) === P ? (c = !0, a = s.error, s.error = null) : u = !0, n === s) return void k(n, new TypeError("A promises callback cannot return that same promise."))
                } else s = i, u = !0;
                n._state !== A || (o && u ? C(n, s) : c ? k(n, a) : t === I ? B(n, s) : t === O && k(n, s))
            }
            var M = 0;

            function q(e) {
                e[T] = M++, e._state = void 0, e._result = void 0, e._subscribers = []
            }
            var V = function() {
                function e(e, t) {
                    this._instanceConstructor = e, this.promise = new e(E), this.promise[T] || q(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? B(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && B(this.promise, this._result))) : k(this.promise, new Error("Array Methods must be provided an Array"))
                }
                return e.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === A && t < e.length; t++) this._eachEntry(e[t], t)
                }, e.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor,
                        r = n.resolve;
                    if (r === w) {
                        var i = R(e);
                        if (i === S && e._state !== A) this._settledAt(e._state, t, e._result);
                        else if ("function" != typeof i) this._remaining--, this._result[t] = e;
                        else if (n === z) {
                            var o = new n(E);
                            D(o, e, i), this._willSettleAt(o, t)
                        } else this._willSettleAt(new n(function(t) {
                            return t(e)
                        }), t)
                    } else this._willSettleAt(r(e), t)
                }, e.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === A && (this._remaining--, e === O ? k(r, n) : this._result[t] = n), 0 === this._remaining && B(r, this._result)
                }, e.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    j(e, void 0, function(e) {
                        return n._settledAt(I, t, e)
                    }, function(e) {
                        return n._settledAt(O, t, e)
                    })
                }, e
            }();
            var z = function() {
                function t(e) {
                    this[T] = M++, this._result = this._state = void 0, this._subscribers = [], E !== e && ("function" != typeof e && function() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof t ? function(e, t) {
                        try {
                            t(function(t) {
                                C(e, t)
                            }, function(t) {
                                k(e, t)
                            })
                        } catch (t) {
                            k(e, t)
                        }
                    }(this, e) : function() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }
                return t.prototype.catch = function(e) {
                    return this.then(null, e)
                }, t.prototype.finally = function(t) {
                    var n = this.constructor;
                    return e(t) ? this.then(function(e) {
                        return n.resolve(t()).then(function() {
                            return e
                        })
                    }, function(e) {
                        return n.resolve(t()).then(function() {
                            throw e
                        })
                    }) : this.then(t, t)
                }, t
            }();
            return z.prototype.then = S, z.all = function(e) {
                return new V(this, e).promise
            }, z.race = function(e) {
                var t = this;
                return r(e) ? new t(function(n, r) {
                    for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
                }) : new t(function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }, z.resolve = w, z.reject = function(e) {
                var t = new this(E);
                return k(t, e), t
            }, z._setScheduler = function(e) {
                s = e
            }, z._setAsap = function(e) {
                a = e
            }, z._asap = a, z.polyfill = function() {
                var e = void 0;
                if (void 0 !== n) e = n;
                else if ("undefined" != typeof self) e = self;
                else try {
                    e = Function("return this")()
                } catch (e) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(t.resolve())
                    } catch (e) {}
                    if ("[object Promise]" === r && !t.cast) return
                }
                e.Promise = z
            }, z.Promise = z, z
        }, e.exports = r()
    }).call(this, n(5), n(6))
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
    var u, c = [],
        d = !1,
        l = -1;

    function f() {
        d && u && (d = !1, u.length ? c = u.concat(c) : l = -1, c.length && p())
    }

    function p() {
        if (!d) {
            var e = a(f);
            d = !0;
            for (var t = c.length; t;) {
                for (u = c, c = []; ++l < t;) u && u[l].run();
                l = -1, t = c.length
            }
            u = null, d = !1,
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

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function g() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || d || a(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function(e) {
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
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e() {
                this.keyToPromise = {}
            }
            return Object.defineProperty(e, "instance", {
                get: function() {
                    return this.loader || (this.loader = new e), this.loader
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.preload = function() {
                var e = this;
                ["gpt"].forEach(function(t) {
                    return e.load(t)
                })
            }, e.prototype.load = function(e) {
                return this.keyToPromise[e] ? this.keyToPromise[e] : this.keyToPromise[e] = s[e]()
            }, e
        }();
    t.ScriptLoader = i;
    var o = function() {
            function e(e, t) {
                window.apstag._Q.push([e, t])
            }
            window.apstag || (window.apstag = {
                init: function() {
                    e("i", arguments)
                },
                fetchBids: function() {
                    e("f", arguments)
                },
                setDisplayBids: function() {},
                _Q: []
            })
        },
        s = {
            gpt: function() {
                return window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], r.appendScript("https://www.googletagservices.com/tag/js/gpt.js")
            },
            adx: function() {
                return window.adsbygoogle = window.adsbygoogle || [], r.appendScript("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
            },
            apstag: function() {
                return o(), r.appendScript("https://c.amazon-adsystem.com/aax2/apstag.js")
            },
            ydn: function() {
                return Promise.all([r.appendScript("https://yads.c.yimg.jp/js/yads-async.js"), r.appendScript("https://s.yimg.jp/images/listing/tool/yads/yads-timeline-ex.js")])
            },
            prebid: function() {
                return window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || [], n(19), Promise.resolve()
            }
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e, t) {
                this.searchInterval = 1, this.keywords = e, this.text = t
            }
            return e.prototype.search = function(e) {
                var t = this;
                if (0 === this.keywords.length) return Promise.resolve([
                    [], {}
                ]);
                var n = this.regexpFromWords(this.keywords.map(function(e) {
                        return e.word
                    })),
                    i = {},
                    o = new Promise(function(e) {
                        t.doSearch(n, i, e)
                    });
                return e && (o = r.timeoutPromise(o, e).catch(function() {
                    return i
                })), o.then(function(e) {
                    return [t.keywords.filter(function(t) {
                        return t.times <= e[t.word.toLowerCase()]
                    }), e]
                })
            }, e.prototype.doSearch = function(e, t, n) {
                var r = this,
                    i = e.exec(this.text);
                if (i) {
                    var o = i[0].toLowerCase();
                    t[o] || (t[o] = 0), t[o] += 1, e.lastIndex -= o.length - 1, setTimeout(function() {
                        r.doSearch(e, t, n)
                    }, this.searchInterval)
                } else n(t)
            }, e.prototype.regexpFromWords = function(e) {
                var t = e.map(function(e) {
                    var t = e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
                    return /^\w+$/.test(e) ? "\\b" + t + "\\b" : t
                }).sort(function(e, t) {
                    return t.length - e.length
                });
                return new RegExp("(" + t.join("|") + ")", "ig")
            }, e
        }();
    t.KeywordSearcher = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.selectors = e
        }
        return e.prototype.contentSelector = function() {
            return 0 === this.selectors.length ? null : this.selectors.join(",")
        }, e.prototype.contentText = function() {
            var e = this.contentSelector();
            return e ? this._foldParents(document.querySelectorAll(e)).map(function(e) {
                return e.textContent
            }).join("\n") : ""
        }, e.prototype.contentTextWithTimeout = function(e) {
            var t = this,
                n = this.contentSelector();
            return n ? this._pollingQuerySelectorAll(n, e).then(function(e) {
                return t._foldParents(e).map(function(e) {
                    return e.textContent
                }).join("\n")
            }) : Promise.reject(new Error("empty selector"))
        }, e.prototype._foldParents = function(e) {
            var t = [];
            return Array.prototype.forEach.call(e, function(e) {
                t.some(function(t) {
                    return t.contains(e)
                }) || (t = t.filter(function(t) {
                    return !e.contains(t)
                })).push(e)
            }), t
        }, e.prototype._pollingQuerySelectorAll = function(e, t) {
            return new Promise(function(n, r) {
                var i = Date.now(),
                    o = function() {
                        var s = document.querySelectorAll(e);
                        0 < s.length ? n(s) : "number" == typeof t && i + t < Date.now() ? r(new Error(e)) : setTimeout(o, 10)
                    };
                setTimeout(o, 1)
            })
        }, e
    }();
    t.PageTextExtractor = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pushGPTCommand = function(e) {
        window.googletag || (window.googletag = {}), window.googletag.cmd || (window.googletag.cmd = []), window.googletag.cmd.push(e)
    }, t.pushPrebidCommand = function(e) {
        window.pbjs || (window.pbjs = {}), window.pbjs.que || (window.pbjs.que = []), window.pbjs.que.push(e)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.predictFirstPrice = function(e) {
            for (var t = [3.0770522e-12, -3.95177838e-8, .000994799122, 1.91756672].reverse(), n = 0, r = 0; r < t.length; ++r) n += t[r] * Math.pow(e, r);
            return n * e
        }, e
    }();
    t.FirstPricePredictorV6 = r
}, function(e, t, n) {
    "use strict";
    var r = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r(n(4)),
        o = n(13);
    i.polyfill(), window.valve || (window.valve = []), window.valve instanceof Array && (window.valve = new o.ValveAds(window.valve))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(14),
        i = function() {
            function e(e) {
                void 0 === e && (e = []);
                var t = this;
                this.taskFlow = new r.TaskFlow, this.taskFlow.start(), this.queue = e, e.forEach(function(e) {
                    return e(t)
                })
            }
            return e.prototype.push = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return t.forEach(function(t) {
                    return t(e)
                }), 0
            }, e.prototype.config = function(e) {
                this.taskFlow.setServiceConfig(e)
            }, e.prototype.defineDFPSlot = function(e) {
                return this.taskFlow.defineDFPSlot(e)
            }, e.prototype.sealDFPSlots = function() {
                this.taskFlow.sealDFPSlots()
            }, e.prototype.displayDFPSlot = function(e) {
                return this.taskFlow.displayDFPSlot(e)
            }, e.prototype.defineFluidSlot = function(e) {
                return this.taskFlow.defineFluidSlot(e)
            }, e
        }();
    t.ValveAds = i
}, function(e, t, n) {
    "use strict";
    var r = this && this.__assign || function() {
        return (r = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(15),
        o = n(16),
        s = n(17),
        a = n(18),
        u = n(20),
        c = n(1),
        d = n(7),
        l = n(23),
        f = n(2),
        p = n(24),
        h = n(26),
        g = function() {
            function e() {
                this.config = new i.Config, this.pageInfoService = new o.PageInfoService, this.dfpSlotService = new s.DFPSlotService, this.fluidSlotService = new a.FluidSlotService, this.doneContentMatch = this.registerContentMatchFlow(), this.doneGPTEnableServices = this.registerGPTEnableServiceFlow(), this.doneFloorPricePrediction = this.registerFloorPricePredictionFlow(), this.doneHeaderBidding = this.registerHeaderBiddingFlow(), this.doneDisplayReady = this.registerDisplayReadyFlow(), this.doneDisplaySlots = this.registerDisplaySlotsFlow(), this.doneSurveyUnit = this.registerSurveyUnitFlow(), this.doneFluidSlotStart = this.registerFluidSlotStartFlow()
            }
            return e.prototype.start = function() {
                c.Logger.instance.lognow("TaskFlow started"), d.ScriptLoader.instance.preload(), this.config.fetchJSONConfig()
            }, e.prototype.registerContentMatchFlow = function() {
                var e = this;
                return Promise.all([this.config.ready()]).then(function(e) {
                    var t = e[0];
                    return c.Logger.instance.lognow("ContentMatch invoked"), c.Logger.instance.time("ContentMatch"), t.serviceConfig.disableHatenaContentMatch ? l.ContentMatch.emptyResult : new l.ContentMatch(t.getTextSelectors(), t.jsonConfig.contentMatchKeywords).run()
                }).catch(function(e) {
                    return l.ContentMatch.emptyResult
                }).then(function(t) {
                    return e.dfpSlotService.setContentMatchKeyValues(t), c.Logger.instance.timeEnd("ContentMatch"), t
                })
            }, e.prototype.registerGPTEnableServiceFlow = function() {
                var e = this;
                return Promise.all([this.config.readyServiceConfig(), this.dfpSlotService.sealedPromise()]).then(function(t) {
                    var n = t[0];
                    t[1];
                    c.Logger.instance.lognow("GPTEnableService invoked"), e.dfpSlotService.setValveKeyValues(n.service, n.bypass, e.pageInfoService.randomValue, e.pageInfoService.valveSample, e.pageInfoService.valveSampleType), n.pageKeyValues && e.dfpSlotService.setKeyValuePairs(n.pageKeyValues), e.dfpSlotService.enableServices()
                })
            }, e.prototype.registerFloorPricePredictionFlow = function() {
                var e = this;
                return Promise.all([this.config.ready(), this.dfpSlotService.sealedPromise()]).then(function(t) {
                    t[0], t[1];
                    c.Logger.instance.time("FloorPricePrediction"), c.Logger.instance.lognow("FloorPricePrediction invoked");
                    var n = Math.random() <= .5,
                        i = n ? new h.FloorPricePredictorV7 : new p.FloorPricePredictorV6,
                        o = e.config.serviceConfig.service,
                        s = e.pageInfoService.getPlatformType(),
                        a = e.pageInfoService.getDNTType(),
                        u = String((new Date).getHours()),
                        d = String((new Date).getDay()),
                        l = e.pageInfoService.getReferrerType(),
                        g = "n" + String(e.dfpSlotService.slots.length);
                    e.dfpSlotService.slots.forEach(function(e) {
                        try {
                            var t = {
                                    platform: s,
                                    dntType: a,
                                    service: o,
                                    adUnitPath: e.adUnitPath
                                },
                                p = n ? r({}, t, {
                                    hour: u,
                                    weekday: d,
                                    refererType: l,
                                    numUnits: g
                                }, f.slotSizeToFeature(e.squareSizes)) : t,
                                h = i.predictFloorPriceKeyValues(p);
                            e.setKeyValuePairs(h)
                        } catch (t) {
                            c.Logger.instance.error(t), e.setKeyValuePairs(f.FloorPricePredictor.defaultKeyValues)
                        }
                    })
                }).catch(function(e) {
                    c.Logger.instance.error(e)
                }).then(function() {
                    c.Logger.instance.timeEnd("FloorPricePrediction")
                })
            }, e.prototype.registerHeaderBiddingFlow = function() {
                var e = this;
                return Promise.all([this.config.ready(), this.dfpSlotService.sealedPromise()]).then(function(t) {
                    var n = t[0],
                        r = t[1];
                    if (c.Logger.instance.lognow("HeaderBidding invoked"), c.Logger.instance.time("HeaderBidding"), !n.serviceConfig.disableBidding) return e.headerBidding = new u.HeaderBidding(n.getBiddingParams(), n.jsonConfig.dfpUnitToBidderUnits, !!n.serviceConfig.bypass, !!n.serviceConfig.debug), e.headerBidding.request(r)
                }).then(function() {
                    c.Logger.instance.timeEnd("HeaderBidding")
                })
            }, e.prototype.registerDisplayReadyFlow = function() {
                var e = this;
                return Promise.all([this.doneGPTEnableServices, this.doneContentMatch, this.doneHeaderBidding]).then(function() {
                    if (c.Logger.instance.lognow("DisplayReady invoked"), e.pageInfoService.valveSample) {
                        var t = e.dfpSlotService.slots.length;
                        e.dfpSlotService.slots.forEach(function(n) {
                            e.pageInfoService.setAdxAnalysisKeyValuesToUnit(n, t)
                        })
                    }
                })
            }, e.prototype.registerDisplaySlotsFlow = function() {
                var e = this;
                return this.doneDisplayReady.then(function() {
                    c.Logger.instance.lognow("DisplaySlots invoked"), e.dfpSlotService.displayInstantSlots()
                })
            }, e.prototype.registerSurveyUnitFlow = function() {
                var e = this;
                return Promise.all([this.config.ready(), this.doneDisplaySlots]).then(function(t) {
                    var n = t[0];
                    c.Logger.instance.lognow("SurveyUnit invoked"), e.dfpSlotService.requestServeyUnit(n.getServeyDFPUnit())
                })
            }, e.prototype.registerFluidSlotStartFlow = function() {
                var e = this;
                return this.config.readyServiceConfig().then(function(t) {
                    c.Logger.instance.lognow("FluidSlotStart invoked"), e.fluidSlotService.setBypass(!!t.bypass)
                })
            }, e.prototype.setServiceConfig = function(e) {
                this.config.setServiceConfig(e), e.disableBidding || (d.ScriptLoader.instance.load("apstag"), d.ScriptLoader.instance.load("prebid"))
            }, e.prototype.defineDFPSlot = function(e) {
                return this.dfpSlotService.defineDFPSlot(e)
            }, e.prototype.sealDFPSlots = function() {
                return this.dfpSlotService.sealDFPSlots()
            }, e.prototype.displayDFPSlot = function(e) {
                var t = this;
                this.doneDisplayReady.then(function() {
                    return t.dfpSlotService.displaySlot(e)
                })
            }, e.prototype.defineFluidSlot = function(e) {
                return this.fluidSlotService.defineFluidSlot(e)
            }, e
        }();
    t.TaskFlow = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n(3);
    var r = n(0),
        i = n(1),
        o = function() {
            function e() {
                this.serviceConfig = {
                    service: "",
                    bypass: !1,
                    disable: !1,
                    pageKeyValues: void 0,
                    textSelector: void 0,
                    disableHatenaContentMatch: !1,
                    disableBidding: !1,
                    debug: !1
                }, this.defaultBiddingParams = {
                    tam: {
                        pubID: "3466"
                    },
                    openx: {
                        delDomain: "hatena-d.openx.net"
                    },
                    criteo: {},
                    yieldone: {},
                    rubicon: {
                        accountId: "15390",
                        siteId: "196266"
                    },
                    audienceNetwork: {},
                    adgeneration: {},
                    onedisplay: {
                        network: "15050.1",
                        region: "as"
                    },
                    pubmatic: {
                        publisherId: "157377"
                    }
                }, this.jsonConfig = {
                    serviceToSelectors: {},
                    contentMatchKeywords: [],
                    serviceToBiddingParams: {},
                    dfpUnitToBidderUnits: {},
                    dfpUnitToActiveViewRate: {}
                }, this.serviceDeferred = new r.Deferred, this.jsonDeferred = new r.Deferred
            }
            return e.jsonUrl = function() {
                return "https://cdn.pool.st-hatena.com/valve/config.json"
            }, e.prototype.setServiceConfig = function(e) {
                var t = this;
                "" !== this.serviceConfig.service && i.Logger.instance.warn("config({...}) is already given"), Object.keys(e).forEach(function(n) {
                    t.isServiceConfigKey(n) && (t.serviceConfig[n] = e[n]), "debug" === n && i.Logger.instance.setEnabled(!!e.debug)
                }), i.Logger.instance.log(function() {
                    return "config: " + JSON.stringify(t.serviceConfig)
                }), "" !== this.serviceConfig.service && this.serviceDeferred.resolve(this.serviceConfig)
            }, e.prototype.fetchJSONConfig = function() {
                var e = this;
                i.Logger.instance.time("fetchJSONConfig"), this.fetchJSON().then(function(t) {
                    return e.jsonConfig = t
                }).catch(function() {}).then(function(t) {
                    i.Logger.instance.timeEnd("fetchJSONConfig"), e.jsonDeferred.resolve(e.jsonConfig)
                })
            }, e.prototype.readyServiceConfig = function() {
                return this.serviceDeferred.promise
            }, e.prototype.readyJSONConfig = function() {
                return this.jsonDeferred.promise
            }, e.prototype.ready = function() {
                var e = this;
                return Promise.all([this.serviceDeferred.promise, this.jsonDeferred.promise]).then(function() {
                    return e
                })
            }, e.prototype.hasTextSelectorFromService = function() {
                return !!this.serviceConfig.textSelector
            }, e.prototype.getTextSelectors = function() {
                if (this.hasTextSelectorFromService()) return [this.serviceConfig.textSelector];
                var e = this.serviceConfig.service;
                return this.jsonConfig.serviceToSelectors[e] || []
            }, e.prototype.getBiddingParams = function() {
                var e = (this.jsonConfig.serviceToBiddingParams || {})[this.serviceConfig.service];
                return "object" == typeof e ? e : this.defaultBiddingParams
            }, e.prototype.getActiveViewRate = function(e) {
                return this.jsonConfig.dfpUnitToActiveViewRate[e]
            }, e.prototype.getServeyDFPUnit = function() {
                return "/4374287/valvejs_" + this.serviceConfig.service
            }, e.prototype.isServiceConfigKey = function(e) {
                return e in this.serviceConfig
            }, e.prototype.fetchJSON = function() {
                return fetch(e.jsonUrl()).then(function(t) {
                    if (400 <= t.status) throw new Error("Valve: config is not found on " + e.jsonUrl());
                    return t.json()
                })
            }, e
        }();
    t.Config = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.GPT_SIZE_ORDER = {
                "300x250": 0,
                "336x280": 1,
                "320x100": 2,
                "728x90": 3,
                "970x250": 4
            };
            var e = (new Date).getHours();
            this.hours = e < 10 ? "0" + e : e.toString(), this.randomValue = Math.floor(10 * Math.random()).toString();
            var t = Math.random();
            t <= .01 ? (this.valveSample = !0, this.platformType = this.getPlatformType(), this.dntType = this.getDNTType(), this.referrerType = this.getReferrerType()) : this.valveSample = !1, t <= .005 ? (this.valveSampleType = "brand", this.valveAnalysisKeyName = "valve-analysis") : t <= .01 ? (this.valveSampleType = "anon", this.valveAnalysisKeyName = "valve-analysis-anon") : (this.valveSampleType = "null", this.valveAnalysisKeyName = void 0)
        }
        return e.prototype.getPlatformType = function() {
            var e = window.navigator.userAgent;
            return /Android/.test(e) ? "And" : /(?:iPhone|iPod|iPad)/.test(e) ? "iOS" : "PC"
        }, e.prototype.getDNTType = function() {
            var e = window.doNotTrack || window.navigator.doNotTrack;
            if ("1" === e || "yes" === e) return "DNT1";
            var t = window.navigator.userAgent;
            return t.indexOf("Safari") > -1 && -1 === t.indexOf("Chrome") && -1 === t.indexOf("Edge") && -1 === t.indexOf("Android") ? "DNT1" : "DNT0"
        }, e.prototype.getReferrerType = function() {
            var e = document.referrer;
            if (["https://www.google.", "https://search.yahoo.", "https://www.bing."].some(function(t) {
                    return -1 !== e.lastIndexOf(t, 0)
                })) return "Sea";
            return ["https://t.co", "https://www.facebook.com", "https://m.facebook.com", "http://mixi.jp"].some(function(t) {
                return -1 !== e.lastIndexOf(t, 0)
            }) ? "SNS" : "Oth"
        }, e.prototype.getSlotSizes = function(e) {
            var t = this;
            return e.squareSizes.map(function(e) {
                return e[0] + "x" + e[1]
            }).filter(function(e) {
                return e in t.GPT_SIZE_ORDER
            }).sort(function(e, n) {
                return t.GPT_SIZE_ORDER[e] - t.GPT_SIZE_ORDER[n]
            }).map(function(e) {
                return e.substring(0, 2)
            }).join("|")
        }, e.prototype.setAdxAnalysisKeyValuesToUnit = function(e, t) {
            var n = [this.hours, this.platformType, this.dntType, this.referrerType, "n" + (t > 7 ? 7 : t), this.getSlotSizes(e)].join("-");
            if (this.valveAnalysisKeyName) {
                var r = {};
                r[this.valveAnalysisKeyName] = n, e.setKeyValuePairs(r)
            }
        }, e
    }();
    t.PageInfoService = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(0),
        o = n(10),
        s = function() {
            function e() {
                this.slots = [], this.slotIdToSlot = {}, this.instantSlots = [], this.surveyKeyValues = {}, this.doneGPTEnableService = !1, this.sealedDeferred = new i.Deferred, this.listenRenderEnd()
            }
            return e.prototype.defineDFPSlot = function(e) {
                if (this.slotIdToSlot[e.slotId]) throw new Error("duplicate slotId on defineDFPSlot");
                var t = new a(e);
                return this.slots.push(t), this.slotIdToSlot[e.slotId] = t, t.lazy || this.instantSlots.push(t), r.Logger.instance.lognow(function() {
                    return "defineDFPSlot: " + t.formatForLog()
                }), t
            }, e.prototype.sealDFPSlots = function() {
                var e = this;
                this.sealedDeferred.resolve(this.slots), r.Logger.instance.lognow(function() {
                    return "sealDFPSlots called (" + e.slots.length + " slots defined)"
                })
            }, e.prototype.setKeyValuePairs = function(e) {
                o.pushGPTCommand(function() {
                    Object.keys(e).forEach(function(t) {
                        googletag.pubads().setTargeting(t, e[t])
                    })
                })
            }, e.prototype.setValveKeyValues = function(e, t, n, r, i) {
                var s = this;
                o.pushGPTCommand(function() {
                    googletag.pubads().setTargeting("valve-service", e).setTargeting("random", n);
                    var o = t ? "true" : "false";
                    googletag.pubads().setTargeting("valve-bypass", o), s.surveyKeyValues["valve-bypass"] = o;
                    var a = r ? "true" : "false";
                    googletag.pubads().setTargeting("valve-sample", a), s.surveyKeyValues["valve-sample"] = a, googletag.pubads().setTargeting("valve-sample-type", i), s.surveyKeyValues["valve-sample-type"] = i
                })
            }, e.prototype.setContentMatchKeyValues = function(e) {
                var t = this;
                o.pushGPTCommand(function() {
                    googletag.pubads().setTargeting("valve-cmw", e.words), googletag.pubads().setTargeting("valve-cmp", e.parameters), t.surveyKeyValues["valve-cmw"] = e.words, t.surveyKeyValues["valve-cmp"] = e.parameters
                })
            }, e.prototype.enableServices = function() {
                var e = this;
                this.doneGPTEnableService || o.pushGPTCommand(function() {
                    e.doneGPTEnableService = !0, googletag.pubads().disableInitialLoad(), googletag.pubads().enableSingleRequest(), googletag.enableServices(), r.Logger.instance.lognow("googletag.enableServices() called"), e.slots.forEach(function(e) {
                        return e.standbyDisplay()
                    })
                })
            }, e.prototype.displaySlot = function(e) {
                var t = this;
                o.pushGPTCommand(function() {
                    var n = t.slotIdToSlot[e];
                    n && n.display()
                })
            }, e.prototype.sealedPromise = function() {
                return this.sealedDeferred.promise
            }, e.prototype.displayInstantSlots = function() {
                var e = this,
                    t = this.instantSlots.map(function(e) {
                        return e.standbyDeferred.promise
                    });
                return i.timeoutPromise(Promise.all(t), 300).then(function() {
                    var t = e.instantSlots.map(function(e) {
                        return e.gptSlot
                    });
                    0 < t.length && o.pushGPTCommand(function() {
                        return googletag.pubads().refresh(t)
                    })
                }).catch(function() {
                    e.instantSlots.forEach(function(e) {
                        return e.display()
                    }), r.Logger.instance.warn("displayIntantSlots is timed out. Slots are refreshed(requested) separately.")
                })
            }, e.prototype.requestServeyUnit = function(e) {
                var t = this;
                i.requestGPTSurveyTag(e, this.surveyKeyValues).then(function() {
                    r.Logger.instance.lognow(function() {
                        return "SurveyUnit requested: " + e + " " + JSON.stringify(t.surveyKeyValues)
                    })
                })
            }, e.prototype.listenRenderEnd = function() {
                var e = this;
                o.pushGPTCommand(function() {
                    googletag.pubads().addEventListener("slotRenderEnded", function(t) {
                        r.Logger.instance.lognow(function() {
                            return e.formatSlotRenderEndedEvent(t)
                        })
                    })
                })
            }, e.prototype.formatSlotRenderEndedEvent = function(e) {
                var t = e.slot,
                    n = t.getTargetingKeys().reduce(function(e, n) {
                        return e[n] = t.getTargeting(n), e
                    }, {});
                return t.getAdUnitPath() + ", #" + t.getSlotElementId() + ", " + JSON.stringify(e.size) + ", Key-Value: " + JSON.stringify(n) + " rendered"
            }, e
        }();
    t.DFPSlotService = s;
    var a = function() {
        function e(e) {
            this.unit = e.unit, this.sizes = e.sizes, this.slotId = e.slotId, this.keyValues = e.keyValues || {}, this.lazy = void 0 !== e.lazy && e.lazy, this.disableBidding = void 0 !== e.disableBidding && e.disableBidding, this.gptSizes = this.calcGPTSizes(), this.squareSizes = this.gptSizes.filter(function(e) {
                return "fluid" !== e && 2 === e.length
            }), this.standbyDeferred = new i.Deferred, this.defineSlot()
        }
        return Object.defineProperty(e.prototype, "adUnitPath", {
            get: function() {
                return this.unit
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.calcGPTSizes = function() {
            return e.isMinMaxSize(this.sizes) ? e.expandMinMaxSize(this.sizes) : e.isSizeMappings(this.sizes) ? e.interpretSizeMappings(this.sizes) : this.sizes
        }, e.prototype.defineSlot = function() {
            var e = this;
            o.pushGPTCommand(function() {
                var t = googletag.defineSlot(e.unit, e.gptSizes, e.slotId).addService(googletag.pubads());
                Object.keys(e.keyValues).forEach(function(n) {
                    t.setTargeting(n, e.keyValues[n])
                }), e.gptSlot = t
            })
        }, e.prototype.standbyDisplay = function() {
            var e = this;
            i.pollingElementById(this.slotId).then(function() {
                o.pushGPTCommand(function() {
                    googletag.display(e.slotId), e.standbyDeferred.resolve()
                })
            })
        }, e.prototype.display = function() {
            var e = this;
            this.standbyDeferred.promise.then(function() {
                o.pushGPTCommand(function() {
                    return googletag.pubads().refresh([e.gptSlot])
                })
            })
        }, e.prototype.setKeyValuePairs = function(e) {
            var t = this;
            o.pushGPTCommand(function() {
                t.gptSlot && Object.keys(e).forEach(function(n) {
                    t.gptSlot.setTargeting(n, e[n])
                })
            })
        }, e.prototype.canUseForBidding = function() {
            return !this.disableBidding && 0 !== this.squareSizes.length
        }, e.prototype.formatForLog = function() {
            return this.unit + ", #" + this.slotId + ", " + JSON.stringify(this.sizes) + (this.lazy ? " (lazy)" : "")
        }, e.isMinMaxSize = function(e) {
            return Array.isArray(e.max)
        }, e.isSizeMappings = function(e) {
            return Array.isArray(e.mappings)
        }, e.expandMinMaxSize = function(e) {
            if (e.min || (e.min = [0, 0]), !(e.min[0] <= e.max[0] && e.min[1] <= e.max[1])) return r.Logger.instance.warn("Invalid size definition: " + JSON.stringify(e)), [
                []
            ];
            var t = this.valveSupportingSizes.filter(function(t) {
                return e.min[0] <= t[0] && t[0] <= e.max[0] && e.min[1] <= t[1] && t[1] <= e.max[1]
            });
            return t.push("fluid"), t
        }, e.interpretSizeMappings = function(e) {
            for (var t = [window.innerWidth, window.innerHeight], n = t[0], r = t[1], i = e.mappings || [], o = 0; o < i.length; o++)
                if (Array.isArray(i[o]) && 2 === i[o].length && i[o][0][0] <= n && i[o][0][1] <= r) {
                    var s = i[o][1];
                    return this.isMinMaxSize(s) ? this.expandMinMaxSize(s) : s
                } return [
                []
            ]
        }, e.valveSupportingSizes = [
            [300, 250],
            [320, 50],
            [320, 100],
            [336, 280],
            [468, 60],
            [728, 90],
            [970, 90],
            [970, 250],
            [160, 600],
            [300, 600]
        ], e
    }();
    t.DFPSlot = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(7),
        o = n(0),
        s = function() {
            function e() {
                this.bypassDeferred = new o.Deferred
            }
            return e.prototype.setBypass = function(e) {
                this.bypassDeferred.resolve(e)
            }, e.prototype.defineFluidSlot = function(e) {
                var t = new a(e);
                return t.standby(this.bypassDeferred.promise), r.Logger.instance.lognow(function() {
                    return "defineFluidSlot: " + t.formatForLog()
                }), t
            }, e
        }();
    t.FluidSlotService = s;
    var a = function() {
        function e(e) {
            this.insId = e.insId, this.googleAdClient = e.googleAdClient || "ca-pub-5973519624968530", this.googleAdSlot = e.googleAdSlot, this.yadsAdDs = e.yadsAdDs, this.standbyPromise = o.pollingElementById(this.insId)
        }
        return e.prototype.standby = function(e) {
            var t = this;
            return Promise.all([e, this.standbyPromise]).then(function(e) {
                var n = e[0],
                    r = e[1];
                return t.display(n, r)
            })
        }, e.prototype.display = function(e, t) {
            !e && this.googleAdClient && this.googleAdSlot ? this.displayGoogleAd(t) : this.yadsAdDs && this.displayYDN(t)
        }, e.prototype.displayGoogleAd = function(e) {
            var t = this;
            i.ScriptLoader.instance.load("adx"), u(e, "adsbygoogle"), e.setAttribute("data-ad-client", this.googleAdClient), e.setAttribute("data-ad-slot", this.googleAdSlot), (window.adsbygoogle = window.adsbygoogle || []).push({}), r.Logger.instance.lognow(function() {
                return "FluidSlot: #" + t.insId + " rendered adsbygoogle(" + t.googleAdClient + "/" + t.googleAdSlot + ")"
            })
        }, e.prototype.displayYDN = function(e) {
            var t = this;
            i.ScriptLoader.instance.load("ydn").then(function() {
                new YadsTimelineManager({
                    yads_ad_ds: t.yadsAdDs
                }).insertAd(t.insId), r.Logger.instance.lognow(function() {
                    return "FluidSlot: #" + t.insId + " rendered YDN(" + t.yadsAdDs + ")"
                })
            })
        }, e.prototype.formatForLog = function() {
            return "#" + this.insId + ", " + this.googleAdClient + "/" + this.googleAdSlot + ", " + this.yadsAdDs
        }, e
    }();
    t.FluidSlot = a;
    var u = function(e, t) {
        e.classList && e.classList.add ? e.classList.add(t) : -1 === e.className.indexOf(t) && (e.className += " " + t)
    }
}, function(module, exports) {
    ! function(e) {
        var t = window.pbjsChunk;
        window.pbjsChunk = function(n, o, s) {
            for (var a, u, c, d = 0, l = []; d < n.length; d++) u = n[d], r[u] && l.push(r[u][0]), r[u] = 0;
            for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
            for (t && t(n, o, s); l.length;) l.shift()();
            if (s)
                for (d = 0; d < s.length; d++) c = i(i.s = s[d]);
            return c
        };
        var n = {},
            r = {
                185: 0
            };

        function i(t) {
            if (n[t]) return n[t].exports;
            var r = n[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
        }
        i.m = e, i.c = n, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i.oe = function(e) {
            throw console.error(e), e
        }, i(i.s = 617)
    }({
        0: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLatestHighestCpmBid = t.getOldestHighestCpmBid = t.getHighestCpm = void 0;
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
                };
            t.getAdUnitSizes = function(e) {
                if (e) {
                    var t = [];
                    if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                        var n = e.mediaTypes.banner.sizes;
                        Array.isArray(n[0]) ? t = n : t.push(n)
                    } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                    return t
                }
            }, t.parseSizesInput = function(e) {
                var t = [];
                if ("string" == typeof e) {
                    var n = e.split(","),
                        r = /^(\d)+x(\d)+$/i;
                    if (n)
                        for (var o in n) I(n, o) && n[o].match(r) && t.push(n[o])
                } else if ("object" === (void 0 === e ? "undefined" : i(e))) {
                    var s = e.length;
                    if (0 < s)
                        if (2 === s && "number" == typeof e[0] && "number" == typeof e[1]) t.push(w(e));
                        else
                            for (var a = 0; a < s; a++) t.push(w(e[a]))
                }
                return t
            }, t.parseGPTSingleSizeArray = w, t.uniques = O, t.flatten = P, t.getBidRequest = function(e, t) {
                var n = void 0;
                return t.some(function(t) {
                    var r = (0, a.default)(t.bids, function(t) {
                        return ["bidId", "adId", "bid_id"].some(function(n) {
                            return t[n] === e
                        })
                    });
                    return r && (n = r), r
                }), n
            }, t.getKeys = R, t.getValue = D, t.getBidderCodes = function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                    return e.bids.map(function(e) {
                        return e.bidder
                    }).reduce(P, [])
                }).reduce(P).filter(O)
            }, t.isGptPubadsDefined = function() {
                if (window.googletag && t.isFn(window.googletag.pubads) && t.isFn(window.googletag.pubads().getSlots)) return !0
            }, t.shuffle = function(e) {
                for (var t = e.length; 0 < t;) {
                    var n = Math.floor(Math.random() * t),
                        r = e[--t];
                    e[t] = e[n], e[n] = r
                }
                return e
            }, t.adUnitsFilter = function(e, t) {
                return (0, u.default)(e, t && t.adUnitCode)
            }, t.isSrcdocSupported = function(e) {
                return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
            }, t.deepClone = function(e) {
                return (0, s.default)(e)
            }, t.inIframe = function() {
                try {
                    return t.getWindowSelf() !== t.getWindowTop()
                } catch (e) {
                    return !0
                }
            }, t.isSafariBrowser = function() {
                return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            }, t.replaceAuctionPrice = function(e, t) {
                if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, t)
            }, t.timestamp = function() {
                return (new Date).getTime()
            }, t.checkCookieSupport = function() {
                if (window.navigator.cookieEnabled || document.cookie.length) return !0
            }, t.cookiesAreEnabled = function() {
                return !!t.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest"))
            }, t.delayExecution = function(e, t) {
                if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
                var n = 0;
                return function() {
                    ++n === t && e.apply(null, arguments)
                }
            }, t.groupBy = function(e, t) {
                return e.reduce(function(e, n) {
                    return (e[n[t]] = e[n[t]] || []).push(n), e
                }, {})
            }, t.deepAccess = function(e, t) {
                if (e) {
                    t = String(t).split(".");
                    for (var n = 0; n < t.length; n++)
                        if (void 0 === (e = e[t[n]])) return;
                    return e
                }
            }, t.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
            }, t.getDefinedParams = function(e, t) {
                return t.filter(function(t) {
                    return e[t]
                }).reduce(function(t, n) {
                    return r(t, function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }({}, n, e[n]))
                }, {})
            }, t.isValidMediaTypes = function(e) {
                var t = ["banner", "native", "video"];
                return !!Object.keys(e).every(function(e) {
                    return (0, u.default)(t, e)
                }) && (!e.video || !e.video.context || (0, u.default)(["instream", "outstream"], e.video.context))
            }, t.getBidderRequest = function(e, t, n) {
                return (0, a.default)(e, function(e) {
                    return 0 < e.bids.filter(function(e) {
                        return e.bidder === t && e.adUnitCode === n
                    }).length
                }) || {
                    start: null,
                    auctionId: null
                }
            }, t.getUserConfiguredParams = function(e, t, n) {
                return e.filter(function(e) {
                    return e.code === t
                }).map(function(e) {
                    return e.bids
                }).reduce(P, []).filter(function(e) {
                    return e.bidder === n
                }).map(function(e) {
                    return e.params || {}
                })
            }, t.getOrigin = function() {
                return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
            }, t.getDNT = function() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
            }, t.isAdUnitCodeMatchingSlot = function(e) {
                return function(t) {
                    return x(e, t)
                }
            }, t.isSlotMatchingAdUnitCode = function(e) {
                return function(t) {
                    return x(t, e)
                }
            }, t.unsupportedBidderMessage = function(e, t) {
                var n = Object.keys(e.mediaTypes || {
                    banner: "banner"
                }).join(", ");
                return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
            }, t.deletePropertyFromObject = function(e, t) {
                var n = r({}, e);
                return delete n[t], n
            }, t.removeRequestId = function(e) {
                return t.deletePropertyFromObject(e, "requestId")
            }, t.isInteger = function(e) {
                return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.convertCamelToUnderscore = function(e) {
                return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                    return "_" + t.toLowerCase()
                }).replace(/^_/, "")
            }, t.transformBidderParamKeywords = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                    r = [];
                return t._each(e, function(e, i) {
                    if (t.isArray(e)) {
                        var o = [];
                        t._each(e, function(e) {
                            ((e = t.getValueString(n + "." + i, e)) || "" === e) && o.push(e)
                        }), e = o
                    } else {
                        if (e = t.getValueString(n + "." + i, e), !t.isStr(e)) return;
                        e = [e]
                    }
                    r.push({
                        key: i,
                        value: e
                    })
                }), r
            }, t.convertTypes = function(e, n) {
                return Object.keys(e).forEach(function(r) {
                    var i, o;
                    n[r] && (t.isFn(e[r]) ? n[r] = e[r](n[r]) : n[r] = (i = e[r], o = n[r], "string" === i ? o && o.toString() : "number" === i ? Number(o) : o), isNaN(n[r]) && delete n.key)
                }), n
            };
            var o = n(3),
                s = d(n(67)),
                a = d(n(10)),
                u = d(n(7)),
                c = n(11);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = n(4),
                f = !1,
                p = Object.prototype.toString,
                h = Boolean(window.console),
                g = Boolean(h && window.console.log),
                m = Boolean(h && window.console.info),
                y = Boolean(h && window.console.warn),
                v = Boolean(h && window.console.error);
            t.replaceTokenInString = function(e, n, r) {
                return t._each(n, function(t, n) {
                    t = void 0 === t ? "" : t;
                    var i = r + n.toUpperCase() + r,
                        o = new RegExp(i, "g");
                    e = e.replace(o, t)
                }), e
            };
            var b, _ = (b = 0, function() {
                return ++b
            });

            function S() {
                return _() + Math.random().toString(16).substr(2)
            }

            function w(e) {
                if (t.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
            }

            function T(e, t) {
                return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
            }
            t.getUniqueIdentifierStr = S, t.generateUUID = function e(t) {
                return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
            }, t.getBidIdParameter = function(e, t) {
                return t && t[e] ? t[e] : ""
            }, t.tryAppendQueryString = function(e, t, n) {
                return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
            }, t.parseQueryStringParameters = function(e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
                return t
            }, t.transformAdServerTargetingObj = function(e) {
                return e && 0 < Object.getOwnPropertyNames(e).length ? R(e).map(function(t) {
                    return t + "=" + encodeURIComponent(D(e, t))
                }).join("&") : ""
            }, t.getTopWindowLocation = function() {
                if (t.inIframe()) {
                    var e = void 0;
                    try {
                        e = t.getAncestorOrigins() || t.getTopFrameReferrer()
                    } catch (e) {
                        logInfo("could not obtain top window location", e)
                    }
                    if (e) return (0, c.parse)(e, {
                        decodeSearchAsString: !0
                    })
                }
                return t.getWindowLocation()
            }, t.getTopFrameReferrer = function() {
                try {
                    window.top.location.toString();
                    for (var e = "", t = void 0;
                        (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), t !== window.top;);
                    return e
                } catch (e) {
                    return window.document.referrer
                }
            }, t.getAncestorOrigins = function() {
                if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
            }, t.getWindowTop = function() {
                return window.top
            }, t.getWindowSelf = function() {
                return window.self
            }, t.getWindowLocation = function() {
                return window.location
            }, t.getTopWindowUrl = function() {
                var e = void 0;
                try {
                    e = t.getTopWindowLocation().href
                } catch (t) {
                    e = ""
                }
                return e
            }, t.getTopWindowReferrer = function() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return document.referrer
                }
            }, t.logMessage = function() {
                E() && g && console.log.apply(console, T(arguments, "MESSAGE:"))
            }, t.logInfo = function() {
                E() && m && console.info.apply(console, T(arguments, "INFO:"))
            }, t.logWarn = function() {
                E() && y && console.warn.apply(console, T(arguments, "WARNING:"))
            }, t.logError = function() {
                E() && v && console.error.apply(console, T(arguments, "ERROR:"))
            }, t.hasConsoleLogger = function() {
                return g
            };
            var E = function() {
                if (!1 === o.config.getConfig("debug") && !1 === f) {
                    var e = "TRUE" === A(l.DEBUG_MODE).toUpperCase();
                    o.config.setConfig({
                        debug: e
                    }), f = !0
                }
                return !!o.config.getConfig("debug")
            };
            t.debugTurnedOn = E, t.createInvisibleIframe = function() {
                var e = document.createElement("iframe");
                return e.id = S(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
            };
            var A = function(e) {
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
            };
            t.getParameterByName = A, t.hasValidBidRequest = function(e, n, r) {
                var i = !1;

                function o(e, t) {
                    t === n[s] && (i = !0)
                }
                for (var s = 0; s < n.length; s++)
                    if (i = !1, t._each(e, o), !i) return t.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, r), !1;
                return !0
            }, t.addEventHandler = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
            }, t.isA = function(e, t) {
                return p.call(e) === "[object " + t + "]"
            }, t.isFn = function(e) {
                return t.isA(e, "Function")
            }, t.isStr = function(e) {
                return t.isA(e, "String")
            }, t.isArray = function(e) {
                return t.isA(e, "Array")
            }, t.isNumber = function(e) {
                return t.isA(e, "Number")
            }, t.isPlainObject = function(e) {
                return t.isA(e, "Object")
            }, t.isBoolean = function(e) {
                return t.isA(e, "Boolean")
            }, t.isEmpty = function(e) {
                if (!e) return !0;
                if (t.isArray(e) || t.isStr(e)) return !(0 < e.length);
                for (var n in e)
                    if (hasOwnProperty.call(e, n)) return !1;
                return !0
            }, t.isEmptyStr = function(e) {
                return t.isStr(e) && (!e || 0 === e.length)
            }, t._each = function(e, n) {
                if (!t.isEmpty(e)) {
                    if (t.isFn(e.forEach)) return e.forEach(n, this);
                    var r = 0,
                        i = e.length;
                    if (0 < i)
                        for (; r < i; r++) n(e[r], r, e);
                    else
                        for (r in e) hasOwnProperty.call(e, r) && n.call(this, e[r], r)
                }
            }, t.contains = function(e, n) {
                if (t.isEmpty(e)) return !1;
                if (t.isFn(e.indexOf)) return -1 !== e.indexOf(n);
                for (var r = e.length; r--;)
                    if (e[r] === n) return !0;
                return !1
            }, t.indexOf = function() {
                if (Array.prototype.indexOf) return Array.prototype.indexOf
            }(), t._map = function(e, n) {
                if (t.isEmpty(e)) return [];
                if (t.isFn(e.map)) return e.map(n);
                var r = [];
                return t._each(e, function(t, i) {
                    r.push(n(t, i, e))
                }), r
            };
            var I = function(e, t) {
                return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
            };

            function O(e, t, n) {
                return n.indexOf(e) === t
            }

            function P(e, t) {
                return e.concat(t)
            }

            function R(e) {
                return Object.keys(e)
            }

            function D(e, t) {
                return e[t]
            }

            function C(e, t) {
                return function(n, r) {
                    return n.cpm === r.cpm ? t(n[e], r[e]) ? r : n : n.cpm < r.cpm ? r : n
                }
            }
            t.insertElement = function(e, t, n) {
                t = t || document;
                var r = void 0;
                r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
                try {
                    (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
                } catch (e) {}
            }, t.triggerPixel = function(e) {
                (new Image).src = e
            }, t.callBurl = function(e) {
                var n = e.source,
                    r = e.burl;
                n === l.S2S.SRC && r && t.triggerPixel(r)
            }, t.insertHtmlIntoIframe = function(e) {
                if (e) {
                    var n = document.createElement("iframe");
                    n.id = t.getUniqueIdentifierStr(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", t.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close()
                }
            }, t.insertUserSyncIframe = function(e) {
                var n = t.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                    r = document.createElement("div");
                r.innerHTML = n;
                var i = r.firstChild;
                t.insertElement(i)
            }, t.createTrackPixelHtml = function(e) {
                return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">' + '<img src="' + encodeURI(e) + '"></div>' : ""
            }, t.createTrackPixelIframeHtml = function(e) {
                var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                return e ? (n && (e = encodeURI(e)), r && (r = 'sandbox="' + r + '"'), "<iframe " + r + ' id="' + t.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
            }, t.getIframeDocument = function(e) {
                if (e) {
                    var n = void 0;
                    try {
                        n = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                    } catch (e) {
                        t.logError("Cannot get iframe document", e)
                    }
                    return n
                }
            }, t.getValueString = function(e, n, r) {
                return null == n ? r : t.isStr(n) ? n : t.isNumber(n) ? n.toString() : void t.logWarn("Unsuported type for param: " + e + " required type: String")
            }, t.getHighestCpm = C("timeToRespond", function(e, t) {
                return t < e
            }), t.getOldestHighestCpmBid = C("responseTimestamp", function(e, t) {
                return t < e
            }), t.getLatestHighestCpmBid = C("responseTimestamp", function(e, t) {
                return e < t
            });
            var x = function(e, t) {
                return e.getAdUnitPath() === t || e.getSlotElementId() === t
            }
        },
        1: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
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
                },
                i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
            t.registerBidder = function(e) {
                var t = Array.isArray(e.supportedMediaTypes) ? {
                    supportedMediaTypes: e.supportedMediaTypes
                } : void 0;

                function n(e) {
                    var n = b(e);
                    a.default.registerBidAdapter(n, e.code, t)
                }
                n(e), Array.isArray(e.aliases) && e.aliases.forEach(function(t) {
                    a.default.aliasRegistry[t] = e.code, n(o({}, e, {
                        code: t
                    }))
                })
            }, t.newBidder = b, t.isValid = _;
            var s = y(n(27)),
                a = y(n(8)),
                u = n(3),
                c = y(n(16)),
                d = n(18),
                l = n(17),
                f = n(41),
                p = y(n(4)),
                h = y(n(9)),
                g = y(n(7)),
                m = n(0);

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var v = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

            function b(e) {
                return o(new s.default(e.code), {
                    getSpec: function() {
                        return Object.freeze(e)
                    },
                    registerSyncs: t,
                    callBids: function(r, s, a, u) {
                        if (Array.isArray(r.bids)) {
                            var d = {},
                                l = [],
                                f = r.bids.filter(n);
                            if (0 !== f.length) {
                                var g = {};
                                f.forEach(function(e) {
                                    (g[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                                });
                                var y = e.buildRequests(f, r);
                                if (y && 0 !== y.length) {
                                    Array.isArray(y) || (y = [y]);
                                    var v = (0, m.delayExecution)(b, y.length);
                                    y.forEach(function(t) {
                                        switch (t.method) {
                                            case "GET":
                                                u("" + t.url + function(e) {
                                                    return e ? "?" + ("object" === (void 0 === e ? "undefined" : i(e)) ? (0, m.parseQueryStringParameters)(e) : e) : ""
                                                }(t.data), {
                                                    success: n,
                                                    error: a
                                                }, void 0, o({
                                                    method: "GET",
                                                    withCredentials: !0
                                                }, t.options));
                                                break;
                                            case "POST":
                                                u(t.url, {
                                                    success: n,
                                                    error: a
                                                }, "string" == typeof t.data ? t.data : JSON.stringify(t.data), o({
                                                    method: "POST",
                                                    contentType: "text/plain",
                                                    withCredentials: !0
                                                }, t.options));
                                                break;
                                            default:
                                                (0, m.logWarn)("Skipping invalid request from " + e.code + ". Request type " + t.type + " must be GET or POST"), v()
                                        }

                                        function n(n, i) {
                                            try {
                                                n = JSON.parse(n)
                                            } catch (n) {}
                                            n = {
                                                body: n,
                                                headers: {
                                                    get: i.getResponseHeader.bind(i)
                                                }
                                            }, l.push(n);
                                            var a = void 0;
                                            try {
                                                a = e.interpretResponse(n, t)
                                            } catch (n) {
                                                return (0, m.logError)("Bidder " + e.code + " failed to interpret the server's response. Continuing without bids", null, n), void v()
                                            }

                                            function u(t) {
                                                var n, i, a = g[t.requestId];
                                                if (a) {
                                                    var u = o(c.default.createBid(p.default.STATUS.GOOD, a), t);
                                                    n = a.adUnitCode, i = u, d[n] = !0, _(n, i, [r]) && s(n, i)
                                                } else(0, m.logWarn)("Bidder " + e.code + " made bid for unknown request ID: " + t.requestId + ". Ignoring.")
                                            }
                                            a && (a.forEach ? a.forEach(u) : u(a)), v(a)
                                        }

                                        function a(t) {
                                            (0, m.logError)("Server call for " + e.code + " failed: " + t + ". Continuing without bids."), v()
                                        }
                                    })
                                } else b()
                            } else b()
                        }

                        function b(e) {
                            a(), h.default.emit(p.default.EVENTS.BIDDER_DONE, r), t(l, r.gdprConsent)
                        }
                    }
                });

                function t(t, n) {
                    if (e.getUserSyncs) {
                        var r = u.config.getConfig("userSync.filterSettings"),
                            i = e.getUserSyncs({
                                iframeEnabled: !!(u.config.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                                pixelEnabled: !!(u.config.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                            }, t, n);
                        i && (Array.isArray(i) || (i = [i]), i.forEach(function(t) {
                            d.userSync.registerSync(t.type, e.code, t.url)
                        }))
                    }
                }

                function n(t) {
                    return !!e.isBidRequestValid(t) || ((0, m.logWarn)("Invalid bid sent to bidder " + e.code + ": " + JSON.stringify(t)), !1)
                }
            }

            function _(e, t, n) {
                function i(e) {
                    return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
                }
                return e ? t ? (o = Object.keys(t), v.every(function(e) {
                    return (0, g.default)(o, e) && !(0, g.default)([void 0, null], t[e])
                }) ? "native" !== t.mediaType || (0, l.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0, f.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && ! function(e, t, n) {
                    if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                    var i = (0, m.getBidderRequest)(n, t.bidderCode, e),
                        o = i && i.bids && i.bids[0] && i.bids[0].sizes,
                        s = (0, m.parseSizesInput)(o);
                    if (1 !== s.length) return !1;
                    var a = s[0].split("x"),
                        u = r(a, 2),
                        c = u[0],
                        d = u[1];
                    return t.width = c, t.height = d, !0
                }(e, t, n) && ((0, m.logError)(i("Banner bids require a width and height")), 1)) : ((0, m.logError)(i("Video bid does not have required vastUrl or renderer property")), !1) : ((0, m.logError)(i("Native bid missing some required properties.")), !1) : ((0, m.logError)(i("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1)) : ((0, m.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0, m.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
                var o
            }
        },
        10: function(e, t, n) {
            n(47), e.exports = n(13).Array.find
        },
        11: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
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
            };

            function i(e) {
                return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                    var n = t.split("="),
                        i = r(n, 2),
                        o = i[0],
                        s = i[1];
                    return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(s)) : e[o] = s || "", e
                }, {}) : {}
            }

            function o(e) {
                return Object.keys(e).map(function(t) {
                    return Array.isArray(e[t]) ? e[t].map(function(e) {
                        return t + "[]=" + e
                    }).join("&") : t + "=" + e[t]
                }).join("&")
            }
            t.parseQS = i, t.formatQS = o, t.parse = function(e, t) {
                var n = document.createElement("a");
                t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
                return {
                    href: n.href,
                    protocol: (n.protocol || "").replace(/:$/, ""),
                    hostname: n.hostname,
                    port: +n.port,
                    pathname: n.pathname.replace(/^(?!\/)/, "/"),
                    search: r ? n.search : i(n.search || ""),
                    hash: (n.hash || "").replace(/^#/, ""),
                    host: n.host || window.location.host
                }
            }, t.format = function(e) {
                return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + o(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
            }
        },
        12: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Renderer = o, t.isRendererRequired = function(e) {
                return !(!e || !e.url)
            }, t.executeRenderer = function(e, t) {
                e.render(t)
            };
            var r = n(28),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0));

            function o(e) {
                var t = this,
                    n = e.url,
                    o = e.config,
                    s = e.id,
                    a = e.callback,
                    u = e.loaded;
                this.url = n, this.config = o, this.handlers = {}, this.id = s, this.loaded = u, this.cmd = [], this.push = function(e) {
                    "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : i.logError("Commands given to Renderer.push must be wrapped in a function")
                }, this.callback = a || function() {
                    t.loaded = !0, t.process()
                }, (0, r.loadScript)(n, this.callback, !0)
            }
            o.install = function(e) {
                return new o({
                    url: e.url,
                    config: e.config,
                    id: e.id,
                    callback: e.callback,
                    loaded: e.loaded
                })
            }, o.prototype.getConfig = function() {
                return this.config
            }, o.prototype.setRender = function(e) {
                this.render = e
            }, o.prototype.setEventHandlers = function(e) {
                this.handlers = e
            }, o.prototype.handleVideoEvent = function(e) {
                var t = e.id,
                    n = e.eventName;
                "function" == typeof this.handlers[n] && this.handlers[n](), i.logMessage("Prebid Renderer event for id " + t + " type " + n)
            }, o.prototype.process = function() {
                for (; 0 < this.cmd.length;) try {
                    this.cmd.shift().call()
                } catch (e) {
                    i.logError("Error processing Renderer command: ", e)
                }
            }
        },
        120: function(e, t, n) {
            "use strict";
            var r = n(14),
                i = n(34)(6),
                o = "findIndex",
                s = !0;
            o in [] && Array(1)[o](function() {
                s = !1
            }), r(r.P + r.F * s, "Array", {
                findIndex: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }), n(26)(o)
        },
        13: function(e, t) {
            var n = e.exports = {
                version: "2.5.7"
            };
            "number" == typeof __e && (__e = n)
        },
        14: function(e, t, n) {
            var r = n(19),
                i = n(13),
                o = n(32),
                s = n(49),
                a = n(56),
                u = "prototype",
                c = function(e, t, n) {
                    var d, l, f, p = e & c.F,
                        h = e & c.G,
                        g = e & c.S,
                        m = e & c.P,
                        y = e & c.B,
                        v = e & c.W,
                        b = h ? i : i[t] || (i[t] = {}),
                        _ = b[u],
                        S = h ? r : g ? r[t] : (r[t] || {})[u];
                    for (d in h && (n = t), n)(l = !p && S && void 0 !== S[d]) && a(b, d) || (f = l ? S[d] : n[d], b[d] = h && "function" != typeof S[d] ? n[d] : y && l ? o(f, r) : v && S[d] == f ? function(e) {
                        var t = function(t, n, r) {
                            if (this instanceof e) {
                                switch (arguments.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t);
                                    case 2:
                                        return new e(t, n)
                                }
                                return new e(t, n, r)
                            }
                            return e.apply(this, arguments)
                        };
                        return t[u] = e[u], t
                    }(f) : m && "function" == typeof f ? o(Function.call, f) : f, m && ((b.virtual || (b.virtual = {}))[d] = f, e & c.R && _ && !_[d] && s(_, d, f)))
                };
            c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
        },
        15: function(e, t) {
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : "function" == typeof e
            }
        },
        16: function(e, t, n) {
            "use strict";
            var r = n(0);
            t.createBid = function(e, t) {
                return new function(e, t) {
                    var n = t && t.bidId || r.getUniqueIdentifierStr(),
                        i = t && t.src || "client",
                        o = e || 0;
                    this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                        switch (o) {
                            case 0:
                                return "Pending";
                            case 1:
                                return "Bid available";
                            case 2:
                                return "Bid returned empty or error response";
                            case 3:
                                return "Bid timed out"
                        }
                    }(), this.adId = n, this.mediaType = "banner", this.source = i, this.getStatusCode = function() {
                        return o
                    }, this.getSize = function() {
                        return this.width + "x" + this.height
                    }
                }(e, t)
            }
        },
        17: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.nativeAdapters = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.processNativeAdUnitParams = function(e) {
                return e && e.type && ((t = e.type) && (0, s.default)(Object.keys(c), t) || ((0, o.logError)(t + " nativeParam is not supported"), 0)) ? c[e.type] : e;
                var t
            }, t.nativeBidIsValid = function(e, t) {
                var n = (0, o.getBidRequest)(e.adId, t);
                if (!n) return !1;
                if (!(0, o.deepAccess)(e, "native.clickUrl")) return !1;
                if ((0, o.deepAccess)(e, "native.image") && (!(0, o.deepAccess)(e, "native.image.height") || !(0, o.deepAccess)(e, "native.image.width"))) return !1;
                if ((0, o.deepAccess)(e, "native.icon") && (!(0, o.deepAccess)(e, "native.icon.height") || !(0, o.deepAccess)(e, "native.icon.width"))) return !1;
                var r = n.nativeParams;
                if (!r) return !0;
                var i = Object.keys(r).filter(function(e) {
                        return r[e].required
                    }),
                    a = Object.keys(e.native).filter(function(t) {
                        return e.native[t]
                    });
                return i.every(function(e) {
                    return (0, s.default)(a, e)
                })
            }, t.fireNativeTrackers = function(e, t) {
                var n = void 0;
                "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && (0, o.insertHtmlIntoIframe)(t.native.javascriptTrackers)), (n || []).forEach(o.triggerPixel)
            }, t.getNativeTargeting = function(e) {
                var t = {};
                return Object.keys(e.native).forEach(function(n) {
                    var i = a.NATIVE_KEYS[n],
                        o = e.native[n];
                    "object" === (void 0 === o ? "undefined" : r(o)) && o.url && (o = o.url), i && o && (t[i] = o)
                }), t
            };
            var i, o = n(0),
                s = (i = n(7)) && i.__esModule ? i : {
                    default: i
                },
                a = n(4),
                u = t.nativeAdapters = [],
                c = (t.NATIVE_TARGETING_KEYS = Object.keys(a.NATIVE_KEYS).map(function(e) {
                    return a.NATIVE_KEYS[e]
                }), {
                    image: {
                        image: {
                            required: !0
                        },
                        title: {
                            required: !0
                        },
                        sponsoredBy: {
                            required: !0
                        },
                        clickUrl: {
                            required: !0
                        },
                        body: {
                            required: !1
                        },
                        icon: {
                            required: !1
                        }
                    }
                });
            t.nativeAdUnit = function(e) {
                var t = "native" === e.mediaType,
                    n = (0, o.deepAccess)(e, "mediaTypes.native");
                return t || n
            };
            var d = t.nativeBidder = function(e) {
                return (0, s.default)(u, e.bidder)
            };
            t.hasNonNativeBidder = function(e) {
                return e.bids.filter(function(e) {
                    return !d(e)
                }).length
            }
        },
        18: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.userSync = void 0;
            var r = function(e, t) {
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
                },
                i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
            t.newUserSync = c;
            var o, s = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                a = n(3),
                u = (o = n(7)) && o.__esModule ? o : {
                    default: o
                };

            function c(e) {
                var t = {},
                    n = {
                        image: [],
                        iframe: []
                    },
                    o = !1,
                    c = {},
                    d = {
                        image: !1,
                        iframe: !1
                    },
                    l = e.config;

                function f() {
                    if (l.syncEnabled && e.browserSupportsCookies && !o) {
                        try {
                            (l.pixelEnabled || d.image) && s.shuffle(n.image).forEach(function(e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1];
                                s.logMessage("Invoking image pixel user sync for bidder: " + n), s.triggerPixel(i)
                            }), (l.iframeEnabled || d.iframe) && s.shuffle(n.iframe).forEach(function(e) {
                                var t = r(e, 2),
                                    n = t[0],
                                    i = t[1];
                                s.logMessage("Invoking iframe user sync for bidder: " + n), s.insertUserSyncIframe(i)
                            })
                        } catch (e) {
                            return s.logError("Error firing user syncs", e)
                        }
                        n = {
                            image: [],
                            iframe: []
                        }, o = !0
                    }
                }
                return a.config.getConfig("userSync", function(e) {
                    l = i(l, e.userSync)
                }), t.registerSync = function(e, t, r) {
                    if (!l.syncEnabled || !s.isArray(n[e])) return s.logWarn('User sync type "' + e + '" not supported');
                    if (!t) return s.logWarn("Bidder is required for registering sync");
                    if (Number(c[t]) >= l.syncsPerBidder) return s.logWarn('Number of user syncs exceeded for "' + t + '"');
                    if (l.filterSettings) {
                        if (function(e, t) {
                                var n = l.filterSettings;
                                if (function(e, t) {
                                        if (e.all && e[t]) return s.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), !1;
                                        var n = e.all ? e.all : e[t],
                                            r = e.all ? "all" : t;
                                        if (!n) return !1;
                                        var i = n.filter,
                                            o = n.bidders;
                                        return i && "include" !== i && "exclude" !== i ? (s.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."), !1) : !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                                            return s.isStr(e) && "*" !== e
                                        })) || (s.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), !1)
                                    }(n, e)) {
                                    d[e] = !0;
                                    var r = n.all ? n.all : n[e],
                                        i = "*" === r.bidders ? [t] : r.bidders;
                                    return {
                                        include: function(e, t) {
                                            return !(0, u.default)(e, t)
                                        },
                                        exclude: function(e, t) {
                                            return (0, u.default)(e, t)
                                        }
                                    } [r.filter || "include"](i, t)
                                }
                                return !1
                            }(e, t)) return s.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.")
                    } else if (l.enabledBidders && l.enabledBidders.length && l.enabledBidders.indexOf(t) < 0) return s.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                    var i, o;
                    n[e].push([t, r]), (i = c)[o = t] ? i[o] += 1 : i[o] = 1, c = i
                }, t.syncUsers = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (e) return setTimeout(f, Number(e));
                    f()
                }, t.triggerUserSyncs = function() {
                    l.enableOverride && t.syncUsers()
                }, t
            }
            a.config.setDefaults({
                userSync: {
                    syncEnabled: !0,
                    pixelEnabled: !0,
                    syncsPerBidder: 5,
                    syncDelay: 3e3
                }
            });
            var d = !s.isSafariBrowser() && s.cookiesAreEnabled();
            t.userSync = c({
                config: a.config.getConfig("userSync"),
                browserSupportsCookies: d
            })
        },
        19: function(e, t) {
            var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = n)
        },
        2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
        },
        20: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
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
                };
            t.createHook = function(e, t, n) {
                var s = [{
                        fn: t,
                        priority: 0
                    }],
                    a = {
                        sync: function() {
                            for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            s.forEach(function(t) {
                                t.fn.apply(e, n)
                            })
                        },
                        asyncSeries: function() {
                            for (var e = this, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var o = 0;
                            return s[o].fn.apply(this, n.concat(function t() {
                                for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                                var u = s[++o];
                                if ("object" === (void 0 === u ? "undefined" : i(u)) && "function" == typeof u.fn) return u.fn.apply(e, r.concat(t))
                            }))
                        }
                    };
                if (!a[e]) throw "invalid hook type";
                var u = {
                    addHook: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                        "function" == typeof e && (s.push({
                            fn: e,
                            priority: t
                        }), s.sort(function(e, t) {
                            return t.priority - e.priority
                        }))
                    },
                    removeHook: function(e) {
                        s = s.filter(function(n) {
                            return n.fn === t || n.fn !== e
                        })
                    },
                    hasHook: function(e) {
                        return s.some(function(t) {
                            return t.fn === e
                        })
                    }
                };
                return "string" == typeof n && (o[n] = u), r(function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return 1 !== s.length || s[0].fn !== t ? a[e].apply(this, r) : t.apply(this, r)
                }, u)
            };
            var o = t.hooks = {}
        },
        21: function(e, t, n) {
            n(120), e.exports = n(13).Array.findIndex
        },
        22: function(e, t, n) {
            e.exports = !n(33)(function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        228: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.store = function(e, t) {
                var n, s = {
                    puts: e.map(o)
                };
                (0, r.ajax)(i.config.getConfig("cache.url"), (n = t, {
                    success: function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                    }
                }), JSON.stringify(s), {
                    contentType: "text/plain",
                    withCredentials: !0
                })
            }, t.getCacheUrl = function(e) {
                return i.config.getConfig("cache.url") + "?uuid=" + e
            };
            var r = n(6),
                i = n(3);

            function o(e) {
                var t, n;
                return {
                    type: "xml",
                    value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"),
                    ttlseconds: Number(e.ttl)
                }
            }
        },
        23: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        24: function(e, t) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e
            }
        },
        25: function(e, t, n) {
            var r = n(60)("wks"),
                i = n(62),
                o = n(19).Symbol,
                s = "function" == typeof o;
            (e.exports = function(e) {
                return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e))
            }).store = r
        },
        26: function(e, t) {
            e.exports = function() {}
        },
        27: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t = e;
                return {
                    callBids: function() {},
                    setBidderCode: function(e) {
                        t = e
                    },
                    getBidderCode: function() {
                        return t
                    }
                }
            }
        },
        28: function(e, t, n) {
            "use strict";
            var r, i = (r = n(7)) && r.__esModule ? r : {
                    default: r
                },
                o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                s = {},
                a = ["criteo"];

            function u(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
                } : n.onload = function() {
                    t()
                }), n.src = e;
                var r = document.getElementsByTagName("head");
                (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
            }
            t.loadExternalScript = function(e, t) {
                if (t && e)
                    if ((0, i.default)(a, t)) {
                        if (!s[e]) {
                            o.logWarn("module " + t + " is loading external JavaScript");
                            var n = document.createElement("script");
                            n.type = "text/javascript", n.async = !0, n.src = e, o.insertElement(n), s[e] = !0
                        }
                    } else o.logError(t + " not whitelisted for loading external JavaScript");
                else o.logError("cannot load external script without url and moduleCode")
            }, t.loadScript = function(e, t, n) {
                e ? n ? s[e] ? t && "function" == typeof t && (s[e].loaded ? t() : s[e].callbacks.push(t)) : (s[e] = {
                    loaded: !1,
                    callbacks: []
                }, t && "function" == typeof t && s[e].callbacks.push(t), u(e, function() {
                    s[e].loaded = !0;
                    try {
                        for (var t = 0; t < s[e].callbacks.length; t++) s[e].callbacks[t]()
                    } catch (t) {
                        o.logError("Error executing callback", "adloader.js:loadScript", t)
                    }
                })) : u(e, t) : o.logError("Error attempting to request empty URL", "adloader.js:loadScript")
            }
        },
        29: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.auctionManager = void 0, t.newAuctionManager = u;
            var r, i = n(0),
                o = n(44),
                s = (r = n(10)) && r.__esModule ? r : {
                    default: r
                },
                a = n(4);

            function u() {
                var e = [],
                    t = {
                        addWinningBid: function(t) {
                            var n = (0, s.default)(e, function(e) {
                                return e.getAuctionId() === t.auctionId
                            });
                            n ? n.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
                        },
                        getAllWinningBids: function() {
                            return e.map(function(e) {
                                return e.getWinningBids()
                            }).reduce(i.flatten, [])
                        },
                        getBidsRequested: function() {
                            return e.map(function(e) {
                                return e.getBidRequests()
                            }).reduce(i.flatten, [])
                        },
                        getBidsReceived: function() {
                            return e.map(function(e) {
                                if (e.getAuctionStatus() === o.AUCTION_COMPLETED) return e.getBidsReceived()
                            }).reduce(i.flatten, []).filter(function(e) {
                                return e
                            })
                        },
                        getAdUnits: function() {
                            return e.map(function(e) {
                                return e.getAdUnits()
                            }).reduce(i.flatten, [])
                        },
                        getAdUnitCodes: function() {
                            return e.map(function(e) {
                                return e.getAdUnitCodes()
                            }).reduce(i.flatten, []).filter(i.uniques)
                        },
                        createAuction: function(t) {
                            var n, r = t.adUnits,
                                i = t.adUnitCodes,
                                s = t.callback,
                                a = t.cbTimeout,
                                u = t.labels,
                                c = (0, o.newAuction)({
                                    adUnits: r,
                                    adUnitCodes: i,
                                    callback: s,
                                    cbTimeout: a,
                                    labels: u
                                });
                            return n = c, e.push(n), c
                        },
                        findBidByAdId: function(t) {
                            return (0, s.default)(e.map(function(e) {
                                return e.getBidsReceived()
                            }).reduce(i.flatten, []), function(e) {
                                return e.adId === t
                            })
                        },
                        getStandardBidderAdServerTargeting: function() {
                            return (0, o.getStandardBidderSettings)()[a.JSON_MAPPING.ADSERVER_TARGETING]
                        },
                        setStatusForBids: function(n, r) {
                            var i = t.findBidByAdId(n);
                            if (i && (i.status = r), i && r === a.BID_STATUS.BID_TARGETING_SET) {
                                var o = (0, s.default)(e, function(e) {
                                    return e.getAuctionId() === i.auctionId
                                });
                                o && o.setBidTargeting(i)
                            }
                        }
                    };
                return t
            }
            t.auctionManager = u()
        },
        3: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.config = t.RANDOM = void 0;
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
                };
            t.newConfig = w;
            var o = n(31),
                s = c(n(10)),
                a = c(n(7)),
                u = n(20);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = n(0),
                l = !1,
                f = 3e3,
                p = window.location.origin,
                h = !0,
                g = !1,
                m = 400,
                y = t.RANDOM = "random",
                v = {};
            v[y] = !0, v.fixed = !0;
            var b = y,
                _ = {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                },
                S = "*";

            function w() {
                var e = [],
                    t = void 0,
                    n = void 0;

                function c() {
                    function e(e) {
                        return (0, s.default)(Object.keys(_), function(t) {
                            return e === _[t]
                        })
                    }

                    function r(t) {
                        if (!t) return d.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                        if ("string" == typeof t) e(t) || d.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                        else if ("object" === (void 0 === t ? "undefined" : i(t)) && !(0, o.isValidPriceConfig)(t)) return d.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                        return !0
                    }
                    t = {}, n = {
                        _debug: l,
                        get debug() {
                            return this._debug
                        },
                        set debug(e) {
                            this._debug = e
                        },
                        _bidderTimeout: f,
                        get bidderTimeout() {
                            return this._bidderTimeout
                        },
                        set bidderTimeout(e) {
                            this._bidderTimeout = e
                        },
                        _publisherDomain: p,
                        get publisherDomain() {
                            return this._publisherDomain
                        },
                        set publisherDomain(e) {
                            this._publisherDomain = e
                        },
                        _priceGranularity: _.MEDIUM,
                        set priceGranularity(t) {
                            r(t) && ("string" == typeof t ? this._priceGranularity = e(t) ? t : _.MEDIUM : "object" === (void 0 === t ? "undefined" : i(t)) && (this._customPriceBucket = t, this._priceGranularity = _.CUSTOM, d.logMessage("Using custom price granularity")))
                        },
                        get priceGranularity() {
                            return this._priceGranularity
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity
                        },
                        set mediaTypePriceGranularity(t) {
                            var n = this;
                            this._mediaTypePriceGranularity = Object.keys(t).reduce(function(o, s) {
                                return r(t[s]) ? "string" == typeof t ? o[s] = e(t[s]) ? t[s] : n._priceGranularity : "object" === (void 0 === t ? "undefined" : i(t)) && (o[s] = t[s], d.logMessage("Using custom price granularity for " + s)) : d.logWarn("Invalid price granularity for media type: " + s), o
                            }, {})
                        },
                        _sendAllBids: h,
                        get enableSendAllBids() {
                            return this._sendAllBids
                        },
                        set enableSendAllBids(e) {
                            this._sendAllBids = e
                        },
                        _bidderSequence: b,
                        get bidderSequence() {
                            return this._bidderSequence
                        },
                        set bidderSequence(e) {
                            v[e] ? this._bidderSequence = e : d.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                        },
                        _timeoutBuffer: m,
                        get timeoutBuffer() {
                            return this._timeoutBuffer
                        },
                        set timeoutBuffer(e) {
                            this._timeoutBuffer = e
                        },
                        _disableAjaxTimeout: g,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout
                        },
                        set disableAjaxTimeout(e) {
                            this._disableAjaxTimeout = e
                        }
                    }
                }
                var y = (0, u.createHook)("asyncSeries", function(o) {
                    if ("object" === (void 0 === o ? "undefined" : i(o))) {
                        var s, u, c = {};
                        Object.keys(o).forEach(function(e) {
                            var s = o[e];
                            "object" === i(t[e]) && "object" === (void 0 === s ? "undefined" : i(s)) && (s = r({}, t[e], s)), c[e] = n[e] = s
                        }), s = c, u = Object.keys(s), e.filter(function(e) {
                            return (0, a.default)(u, e.topic)
                        }).forEach(function(e) {
                            var t, n, r;
                            e.callback((t = {}, n = e.topic, r = s[e.topic], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r, t))
                        }), e.filter(function(e) {
                            return e.topic === S
                        }).forEach(function(e) {
                            return e.callback(s)
                        })
                    } else d.logError("setConfig options must be an object")
                });
                return c(), {
                    getConfig: function() {
                        if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                            var t = arguments.length <= 0 ? void 0 : arguments[0];
                            return t ? d.deepAccess(n, t) : n
                        }
                        return function(t, n) {
                            var r = n;
                            return "string" != typeof t && (r = t, t = S), "function" == typeof r ? (e.push({
                                topic: t,
                                callback: r
                            }), function() {
                                e.splice(e.indexOf(n), 1)
                            }) : void d.logError("listener must be a function")
                        }.apply(void 0, arguments)
                    },
                    setConfig: y,
                    setDefaults: function(e) {
                        "object" === (void 0 === t ? "undefined" : i(t)) ? (r(t, e), r(n, e)) : d.logError("defaults must be an object")
                    },
                    resetConfig: c
                }
            }
            t.config = w()
        },
        30: function(zr, Ar) {
            var Br;
            Br = function() {
                return this
            }();
            try {
                Br = Br || Function("return this")() || eval("this")
            } catch (e) {
                "object" == typeof window && (Br = window)
            }
            zr.exports = Br
        },
        31: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
            var r, i = (r = n(10)) && r.__esModule ? r : {
                    default: r
                },
                o = n(0),
                s = 2,
                a = {
                    buckets: [{
                        min: 0,
                        max: 5,
                        increment: .5
                    }]
                },
                u = {
                    buckets: [{
                        min: 0,
                        max: 20,
                        increment: .1
                    }]
                },
                c = {
                    buckets: [{
                        min: 0,
                        max: 20,
                        increment: .01
                    }]
                },
                d = {
                    buckets: [{
                        min: 0,
                        max: 3,
                        increment: .01
                    }, {
                        min: 3,
                        max: 8,
                        increment: .05
                    }, {
                        min: 8,
                        max: 20,
                        increment: .5
                    }]
                },
                l = {
                    buckets: [{
                        min: 0,
                        max: 5,
                        increment: .05
                    }, {
                        min: 5,
                        max: 10,
                        increment: .1
                    }, {
                        min: 10,
                        max: 20,
                        increment: .5
                    }]
                };

            function f(e, t, n) {
                var r = "";
                if (!p(t)) return r;
                var o, a, u, c, d, l, f, h, g, m = t.buckets.reduce(function(e, t) {
                        return e.max > t.max ? e : t
                    }, {
                        max: 0
                    }),
                    y = (0, i.default)(t.buckets, function(t) {
                        if (e > m.max * n) {
                            var i = t.precision;
                            void 0 === i && (i = s), r = (t.max * n).toFixed(i)
                        } else if (e <= t.max * n && e >= t.min * n) return t
                    });
                return y && (o = e, u = n, c = void 0 !== (a = y).precision ? a.precision : s, d = a.increment * u, l = a.min * u, h = (o * (f = Math.pow(10, c + 2)) - l * f) / (d * f), g = Math.floor(h) * d + l, r = (g = Number(g.toFixed(10))).toFixed(c)), r
            }

            function p(e) {
                if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                var t = !0;
                return e.buckets.forEach(function(e) {
                    void 0 !== e.min && e.max && e.increment || (t = !1)
                }), t
            }
            t.getPriceBucketString = function(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = parseFloat(e);
                return isNaN(r) && (r = ""), {
                    low: "" === r ? "" : f(e, a, n),
                    med: "" === r ? "" : f(e, u, n),
                    high: "" === r ? "" : f(e, c, n),
                    auto: "" === r ? "" : f(e, l, n),
                    dense: "" === r ? "" : f(e, d, n),
                    custom: "" === r ? "" : f(e, t, n)
                }
            }, t.isValidPriceConfig = p
        },
        32: function(e, t, n) {
            var r = n(48);
            e.exports = function(e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        33: function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        34: function(e, t, n) {
            var r = n(32),
                i = n(35),
                o = n(57),
                s = n(36),
                a = n(58);
            e.exports = function(e, t) {
                var n = 1 == e,
                    u = 2 == e,
                    c = 3 == e,
                    d = 4 == e,
                    l = 6 == e,
                    f = 5 == e || l,
                    p = t || a;
                return function(t, a, h) {
                    for (var g, m, y = o(t), v = i(y), b = r(a, h, 3), _ = s(v.length), S = 0, w = n ? p(t, _) : u ? p(t, 0) : void 0; S < _; S++)
                        if ((f || S in v) && (m = b(g = v[S], S, y), e))
                            if (n) w[S] = m;
                            else if (m) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return g;
                        case 6:
                            return S;
                        case 2:
                            w.push(g)
                    } else if (d) return !1;
                    return l ? -1 : c || d ? d : w
                }
            }
        },
        35: function(e, t, n) {
            var r = n(23);
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                return "String" == r(e) ? e.split("") : Object(e)
            }
        },
        36: function(e, t, n) {
            var r = n(37),
                i = Math.min;
            e.exports = function(e) {
                return 0 < e ? i(r(e), 9007199254740991) : 0
            }
        },
        37: function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
            }
        },
        38: function(e, t, n) {
            var r = n(23);
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        39: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.setSizeConfig = c, t.getLabels = function(e, t) {
                return e.labelAll ? {
                    labelAll: !0,
                    labels: e.labelAll,
                    activeLabels: t
                } : {
                    labelAll: !1,
                    labels: e.labelAny,
                    activeLabels: t
                }
            }, t.sizeSupported = function(e) {
                var t = d(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : u);
                return !t.shouldFilter || !!t.sizesSupported[e]
            }, t.resolveStatus = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.labels,
                    n = void 0 === t ? [] : t,
                    r = e.labelAll,
                    i = void 0 !== r && r,
                    o = e.activeLabels,
                    c = void 0 === o ? [] : o,
                    l = arguments[1],
                    f = arguments[2],
                    p = d(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : u);
                l = (0, s.isPlainObject)(l) ? (0, s.deepClone)(l) : {}, f && (l.banner ? l.banner.sizes || (l.banner.sizes = f) : l.banner = {
                    sizes: f
                });
                var h = (0, s.deepAccess)(l, "banner.sizes");
                p.shouldFilter && h && (l.banner.sizes = h.filter(function(e) {
                    return p.sizesSupported[e]
                }));
                var g = Object.keys(l),
                    m = {
                        active: 1 < g.length || 1 === g.length && "banner" !== g[0] || "banner" === g[0] && 0 < (0, s.deepAccess)(l, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                            return p.labels[e]
                        }) || n.some(function(e) {
                            return (0, a.default)(c, e)
                        })) || i && n.reduce(function(e, t) {
                            return e ? p.labels[t] || (0, a.default)(c, t) : e
                        }, !0)),
                        mediaTypes: l
                    };
                return h && h.length !== l.banner.sizes.length && (m.filterResults = {
                    before: h,
                    after: l.banner.sizes
                }), m
            };
            var i, o = n(3),
                s = n(0),
                a = (i = n(7)) && i.__esModule ? i : {
                    default: i
                },
                u = [];

            function c(e) {
                u = e
            }

            function d(e) {
                return e.reduce(function(e, t) {
                    return "object" === (void 0 === t ? "undefined" : r(t)) && "string" == typeof t.mediaQuery ? matchMedia(t.mediaQuery).matches && (Array.isArray(t.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(n) {
                        return (t[n] || []).forEach(function(t) {
                            return e[n][t] = !0
                        })
                    })) : (0, s.logWarn)('sizeConfig rule missing required property "mediaQuery"'), e
                }, {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                })
            }
            o.config.getConfig("sizeConfig", function(e) {
                return c(e.sizeConfig)
            })
        },
        4: function(e, t) {
            e.exports = {
                JSON_MAPPING: {
                    PL_CODE: "code",
                    PL_SIZE: "sizes",
                    PL_BIDS: "bids",
                    BD_BIDDER: "bidder",
                    BD_ID: "paramsd",
                    BD_PL_ID: "placementId",
                    ADSERVER_TARGETING: "adserverTargeting",
                    BD_SETTING_STANDARD: "standard"
                },
                REPO_AND_VERSION: "prebid_prebid_1.32.0",
                DEBUG_MODE: "pbjs_debug",
                STATUS: {
                    GOOD: 1,
                    NO_BID: 2
                },
                CB: {
                    TYPE: {
                        ALL_BIDS_BACK: "allRequestedBidsBack",
                        AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                        BID_WON: "bidWon",
                        REQUEST_BIDS: "requestBids"
                    }
                },
                EVENTS: {
                    AUCTION_INIT: "auctionInit",
                    AUCTION_END: "auctionEnd",
                    BID_ADJUSTMENT: "bidAdjustment",
                    BID_TIMEOUT: "bidTimeout",
                    BID_REQUESTED: "bidRequested",
                    BID_RESPONSE: "bidResponse",
                    BID_WON: "bidWon",
                    BIDDER_DONE: "bidderDone",
                    SET_TARGETING: "setTargeting",
                    REQUEST_BIDS: "requestBids",
                    ADD_AD_UNITS: "addAdUnits",
                    AD_RENDER_FAILED: "adRenderFailed"
                },
                AD_RENDER_FAILED_REASON: {
                    PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                    NO_AD: "noAd",
                    EXCEPTION: "exception",
                    CANNOT_FIND_AD: "cannotFindAd",
                    MISSING_DOC_OR_ADID: "missingDocOrAdid"
                },
                EVENT_ID_PATHS: {
                    bidWon: "adUnitCode"
                },
                GRANULARITY_OPTIONS: {
                    LOW: "low",
                    MEDIUM: "medium",
                    HIGH: "high",
                    AUTO: "auto",
                    DENSE: "dense",
                    CUSTOM: "custom"
                },
                TARGETING_KEYS: {
                    BIDDER: "hb_bidder",
                    AD_ID: "hb_adid",
                    PRICE_BUCKET: "hb_pb",
                    SIZE: "hb_size",
                    DEAL: "hb_deal",
                    SOURCE: "hb_source",
                    FORMAT: "hb_format"
                },
                NATIVE_KEYS: {
                    title: "hb_native_title",
                    body: "hb_native_body",
                    sponsoredBy: "hb_native_brand",
                    image: "hb_native_image",
                    icon: "hb_native_icon",
                    clickUrl: "hb_native_linkurl",
                    cta: "hb_native_cta"
                },
                S2S: {
                    SRC: "s2s",
                    DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                    SYNCED_BIDDERS_KEY: "pbjsSyncs"
                },
                BID_STATUS: {
                    BID_TARGETING_SET: "targetingSet",
                    RENDERED: "rendered"
                }
            }
        },
        40: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.adunitCounter = void 0;
            var r = n(0),
                i = {},
                o = {
                    incrementCounter: function(e) {
                        return i[e] = i[e] || {}, i[e].counter = (0, r.deepAccess)(i, e + ".counter") + 1 || 1, i[e].counter
                    },
                    getCounter: function(e) {
                        return (0, r.deepAccess)(i, e + ".counter") || 0
                    }
                };
            t.adunitCounter = o
        },
        41: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0, t.isValidVideoBid = function(e, t) {
                var n = (0, o.getBidRequest)(e.adId, t),
                    r = n && (0, o.deepAccess)(n, "mediaTypes.video"),
                    i = r && (0, o.deepAccess)(r, "context");
                return !n || r && i !== u ? s.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : i !== u || !(!e.renderer && !n.renderer)
            };
            var r, i = n(8),
                o = n(0),
                s = n(3),
                a = (r = n(7)) && r.__esModule ? r : {
                    default: r
                },
                u = t.OUTSTREAM = "outstream",
                c = (t.videoAdUnit = function(e) {
                    var t = "video" === e.mediaType,
                        n = (0, o.deepAccess)(e, "mediaTypes.video");
                    return t || n
                }, t.videoBidder = function(e) {
                    return (0, a.default)(i.videoAdapters, e.bidder)
                });
            t.hasNonVideoBidder = function(e) {
                return e.bids.filter(function(e) {
                    return !c(e)
                }).length
            }
        },
        42: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getGlobal = function() {
                return window.pbjs
            }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
        },
        43: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.getHighestCpmBidsFromBidPool = b, t.newTargeting = _;
            var i, o = n(0),
                s = n(3),
                a = n(17),
                u = n(29),
                c = n(39),
                d = (i = n(7)) && i.__esModule ? i : {
                    default: i
                };

            function l(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }

            function f(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var p = n(0),
                h = n(4),
                g = [],
                m = 20,
                y = t.TARGETING_KEYS = Object.keys(h.TARGETING_KEYS).map(function(e) {
                    return h.TARGETING_KEYS[e]
                }),
                v = (t.isBidNotExpired = function(e) {
                    return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, o.timestamp)()
                }, function(e) {
                    return e && (e.status && !(0, d.default)([h.BID_STATUS.BID_TARGETING_SET, h.BID_STATUS.RENDERED], e.status) || !e.status)
                });

            function b(e, t) {
                var n = [],
                    r = (0, o.groupBy)(e, "adUnitCode");
                return Object.keys(r).forEach(function(e) {
                    var i = (0, o.groupBy)(r[e], "bidderCode");
                    Object.keys(i).forEach(function(e) {
                        return n.push(i[e].reduce(t))
                    })
                }), n
            }

            function _(e) {
                var n = {};

                function i(t) {
                    return "string" == typeof t ? [t] : p.isArray(t) ? t : e.getAdUnitCodes() || []
                }

                function u() {
                    return b(e.getBidsReceived().filter(function(e) {
                        return "banner" !== e.mediaType || (0, c.sizeSupported)([e.width, e.height])
                    }).filter(v).filter(t.isBidNotExpired), o.getOldestHighestCpmBid)
                }

                function _() {
                    return e.getStandardBidderAdServerTargeting().map(function(e) {
                        return e.key
                    }).concat(y).filter(o.uniques)
                }

                function S(e, t, n, r) {
                    return Object.keys(t.adserverTargeting).filter(w()).forEach(function(n) {
                        var r, i;
                        e.length && e.filter((i = n, function(e) {
                            return e.adUnitCode === t.adUnitCode && e.adserverTargeting[i]
                        })).forEach((r = n, function(e) {
                            p.isArray(e.adserverTargeting[r]) || (e.adserverTargeting[r] = [e.adserverTargeting[r]]), e.adserverTargeting[r] = e.adserverTargeting[r].concat(t.adserverTargeting[r]).filter(o.uniques), delete t.adserverTargeting[r]
                        }))
                    }), e.push(t), e
                }

                function w() {
                    var e = _();
                    return function(t) {
                        return -1 === e.indexOf(t)
                    }
                }

                function T(e) {
                    return f({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(w()).map(function(t) {
                        return f({}, t.substring(0, m), [e.adserverTargeting[t]])
                    }))
                }
                return n.resetPresetTargeting = function(t) {
                    if ((0, o.isGptPubadsDefined)()) {
                        var n = i(t),
                            r = e.getAdUnits().filter(function(e) {
                                return (0, d.default)(n, e.code)
                            });
                        window.googletag.pubads().getSlots().forEach(function(e) {
                            g.forEach(function(t) {
                                r.forEach(function(n) {
                                    n.code !== e.getAdUnitPath() && n.code !== e.getSlotElementId() || e.setTargeting(t, null)
                                })
                            })
                        })
                    }
                }, n.getAllTargeting = function(e) {
                    var t, c, v, w, E, A, I, O, P, R = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : u(),
                        D = i(e),
                        C = (A = D, I = R, O = n.getWinningBids(A, I), P = _(), O = O.map(function(e) {
                            return f({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function(t) {
                                return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === P.indexOf(t)
                            }).reduce(function(t, n) {
                                var r = [e.adserverTargeting[n]],
                                    i = f({}, n.substring(0, m), r);
                                if (n !== h.TARGETING_KEYS.DEAL) return [].concat(l(t), [i]);
                                var o = f({}, (n + "_" + e.bidderCode).substring(0, m), r);
                                return [].concat(l(t), [i, o])
                            }, []))
                        })).concat((w = D, E = R, E.filter(function(e) {
                            return (0, d.default)(w, e.adUnitCode)
                        }).map(function(e) {
                            return r({}, e)
                        }).reduce(S, []).map(T).filter(function(e) {
                            return e
                        }))).concat(s.config.getConfig("enableSendAllBids") ? (t = D, c = R, v = y.concat(a.NATIVE_TARGETING_KEYS), b(c, o.getHighestCpm).map(function(e) {
                            if (e.adserverTargeting && t && (p.isArray(t) && (0, d.default)(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)) return f({}, e.adUnitCode, (n = e, v.filter(function(t) {
                                return void 0 !== e.adserverTargeting[t]
                            }).map(function(e) {
                                return f({}, (e + "_" + n.bidderCode).substring(0, m), [n.adserverTargeting[e]])
                            })));
                            var n
                        }).filter(function(e) {
                            return e
                        })) : []);
                    return C.map(function(e) {
                        Object.keys(e).map(function(t) {
                            e[t].map(function(e) {
                                -1 === g.indexOf(Object.keys(e)[0]) && (g = Object.keys(e).concat(g))
                            })
                        })
                    }), C = C.map(function(e) {
                        return f({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                            return f({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        }).reduce(function(e, t) {
                            return r(t, e)
                        }, {}))
                    }).reduce(function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = r({}, e[n], t[n]), e
                    }, {}), D.forEach(function(e) {
                        C[e] || (C[e] = {})
                    }), C
                }, n.setTargetingForGPT = function(e, t) {
                    window.googletag.pubads().getSlots().forEach(function(n) {
                        Object.keys(e).filter(t ? t(n) : (0, o.isAdUnitCodeMatchingSlot)(n)).forEach(function(t) {
                            return Object.keys(e[t]).forEach(function(r) {
                                var i = e[t][r].split(",");
                                (i = 1 < i.length ? [i] : i).map(function(e) {
                                    return p.logMessage("Attempting to set key value for slot: " + n.getSlotElementId() + " key: " + r + " value: " + e), e
                                }).forEach(function(e) {
                                    n.setTargeting(r, e)
                                })
                            })
                        })
                    })
                }, n.getWinningBids = function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : u(),
                        n = i(e);
                    return t.filter(function(e) {
                        return (0, d.default)(n, e.adUnitCode)
                    }).filter(function(e) {
                        return 0 < e.cpm
                    }).map(function(e) {
                        return e.adUnitCode
                    }).filter(o.uniques).map(function(e) {
                        return t.filter(function(t) {
                            return t.adUnitCode === e ? t : null
                        }).reduce(o.getHighestCpm)
                    })
                }, n.setTargetingForAst = function() {
                    var e = n.getAllTargeting();
                    Object.keys(e).forEach(function(t) {
                        return Object.keys(e[t]).forEach(function(n) {
                            if (p.logMessage("Attempting to set targeting for targetId: " + t + " key: " + n + " value: " + e[t][n]), p.isStr(e[t][n]) || p.isArray(e[t][n])) {
                                var r = {};
                                n.search(/pt[0-9]/) < 0 ? r[n.toUpperCase()] = e[t][n] : r[n] = e[t][n], window.apntag.setKeywords(t, r)
                            }
                        })
                    })
                }, n.isApntagDefined = function() {
                    if (window.apntag && p.isFn(window.apntag.setKeywords)) return !0
                }, n
            }
            t.targeting = _(u.auctionManager)
        },
        44: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
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
                };
            t.newAuction = function(e) {
                var t = e.adUnits,
                    n = e.adUnitCodes,
                    r = e.callback,
                    i = e.cbTimeout,
                    s = e.labels,
                    a = t,
                    u = s,
                    c = n,
                    l = [],
                    f = [],
                    p = void 0,
                    g = void 0,
                    m = v.generateUUID(),
                    C = void 0,
                    x = r,
                    B = void 0,
                    k = i,
                    j = [];

                function N() {
                    return {
                        auctionId: m,
                        timestamp: p,
                        auctionEnd: g,
                        auctionStatus: C,
                        adUnits: a,
                        adUnitCodes: c,
                        labels: u,
                        bidderRequests: l,
                        bidsReceived: f,
                        winningBids: j,
                        timeout: k
                    }
                }

                function M(e, n) {
                    if (n && clearTimeout(B), null != x) {
                        var r = [];
                        e && (v.logMessage("Auction " + m + " timedOut"), p = f, w = (u = l).filter(function(e) {
                            return !e.doneCbCallCount
                        }).map(function(e) {
                            return e.bidderCode
                        }).filter(o.uniques), T = p.map(function(e) {
                            return e.bidder
                        }).filter(o.uniques), A = w.filter(function(e) {
                            return !(0, h.default)(T, e)
                        }), (r = u.map(function(e) {
                            return (e.bids || []).filter(function(e) {
                                return (0, h.default)(A, e.bidder)
                            })
                        }).reduce(o.flatten, []).map(function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        })).length && _.emit(S.EVENTS.BID_TIMEOUT, r));
                        try {
                            C = E, g = Date.now(), _.emit(S.EVENTS.AUCTION_END, N());
                            var i = c,
                                s = f.filter(o.adUnitsFilter.bind(this, i)).reduce(U, {});
                            x.apply(pbjs, [s, e])
                        } catch (e) {
                            v.logError("Error executing bidsBackHandler", null, e)
                        } finally {
                            r.length && b.callTimedOutBidders(t, r, k);
                            var a = d.config.getConfig("userSync") || {};
                            a.enableOverride || y(a.syncDelay)
                        }
                        x = null
                    }
                    var u, p, w, T, A
                }

                function q(e) {
                    v.logInfo("Bids Received for Auction with id: " + m, f), C = E, M(!1, !0)
                }
                return {
                    addBidReceived: function(e) {
                        f = f.concat(e)
                    },
                    executeCallback: M,
                    callBids: function() {
                        var e = this;
                        C = w, p = Date.now();
                        var t = b.makeBidRequests(a, p, m, k, u);
                        v.logInfo("Bids Requested for Auction with id: " + m, t), t.forEach(function(e) {
                            var t;
                            t = e, l = l.concat(t)
                        });
                        var n = {};
                        if (t.length < 1) v.logWarn("No valid bid requests returned for auction"), q();
                        else {
                            var r = {
                                bidRequests: t,
                                run: function() {
                                    var r, s;
                                    r = M.bind(null, !0), s = setTimeout(r, k), B = s, C = T, _.emit(S.EVENTS.AUCTION_INIT, N());
                                    var u = D(q, e),
                                        c = {
                                            auctionAddBidResponse: u.addBidResponse
                                        };
                                    b.callBids(a, t, R.bind(c), u.adapterDone, {
                                        request: function(e, t) {
                                            o(I, t), o(n, e), O[e] || (O[e] = {
                                                SRA: !0,
                                                origin: t
                                            }), 1 < n[e] && (O[e].SRA = !1)
                                        },
                                        done: function(e) {
                                            I[e]--, P[0] && i(P[0]) && P.shift()
                                        }
                                    }, k)
                                }
                            };
                            i(r) || (v.logWarn("queueing auction due to limited endpoint capacity"), P.push(r))
                        }

                        function i(e) {
                            var t = !0,
                                n = d.config.getConfig("maxRequestsPerOrigin") || A;
                            return e.bidRequests.some(function(e) {
                                var r = 1,
                                    i = void 0 !== e.src && e.src === S.S2S.SRC ? "s2s" : e.bidderCode;
                                return O[i] && (!1 === O[i].SRA && (r = Math.min(e.bids.length, n)), I[O[i].origin] + r > n && (t = !1)), !t
                            }), t && e.run(), t
                        }

                        function o(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++
                        }
                    },
                    addWinningBid: function(e) {
                        j = j.concat(e), b.callBidWonBidder(e.bidder, e, t)
                    },
                    setBidTargeting: function(e) {
                        b.callSetTargetingBidder(e.bidder, e)
                    },
                    getWinningBids: function() {
                        return j
                    },
                    getTimeout: function() {
                        return k
                    },
                    getAuctionId: function() {
                        return m
                    },
                    getAuctionStatus: function() {
                        return C
                    },
                    getAdUnits: function() {
                        return a
                    },
                    getAdUnitCodes: function() {
                        return c
                    },
                    getBidRequests: function() {
                        return l
                    },
                    getBidsReceived: function() {
                        return f
                    }
                }
            }, t.auctionCallbacks = D, t.getStandardBidderSettings = B, t.getKeyValueTargetingPairs = k, t.adjustBids = N;
            var o = n(0),
                s = n(31),
                a = n(17),
                u = n(228),
                c = n(12),
                d = n(3),
                l = n(18),
                f = n(20),
                p = m(n(10)),
                h = m(n(7)),
                g = n(41);

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var y = l.userSync.syncUsers,
                v = n(0),
                b = n(8),
                _ = n(9),
                S = n(4),
                w = t.AUCTION_STARTED = "started",
                T = t.AUCTION_IN_PROGRESS = "inProgress",
                E = t.AUCTION_COMPLETED = "completed";
            _.on(S.EVENTS.BID_ADJUSTMENT, function(e) {
                N(e)
            });
            var A = 4,
                I = {},
                O = {},
                P = [],
                R = t.addBidResponse = (0, f.createHook)("asyncSeries", function(e, t) {
                    this.auctionAddBidResponse(e, t)
                }, "addBidResponse");

            function D(e, t) {
                var n = 0,
                    a = !1,
                    l = (0, o.delayExecution)(function() {
                        a = !0
                    }, t.getBidRequests().length);

                function f() {
                    n--, a && 0 === n && e()
                }
                return {
                    addBidResponse: function(e, a) {
                        n++;
                        var l, h, m, y, b, w, T, E, A = t.getBidRequests(),
                            I = t.getAuctionId(),
                            O = (0, o.getBidderRequest)(A, a.bidderCode, e),
                            P = function(e) {
                                var t = e.adUnitCode,
                                    n = e.bid,
                                    a = e.bidRequest,
                                    u = e.auctionId,
                                    l = a.start,
                                    f = i({}, n, {
                                        auctionId: u,
                                        responseTimestamp: (0, o.timestamp)(),
                                        requestTimestamp: l,
                                        cpm: parseFloat(n.cpm) || 0,
                                        bidder: n.bidderCode,
                                        adUnitCode: t
                                    });
                                f.timeToRespond = f.responseTimestamp - f.requestTimestamp, _.emit(S.EVENTS.BID_ADJUSTMENT, f);
                                var h = a.bids && (0, p.default)(a.bids, function(e) {
                                        return e.adUnitCode == t
                                    }),
                                    g = h && h.renderer;
                                g && g.url && (f.renderer = c.Renderer.install({
                                    url: g.url
                                }), f.renderer.setRender(g.render));
                                var m, y = d.config.getConfig("mediaTypePriceGranularity." + n.mediaType),
                                    v = (0, s.getPriceBucketString)(f.cpm, "object" === (void 0 === y ? "undefined" : r(y)) ? y : d.config.getConfig("customPriceBucket"), d.config.getConfig("currency.granularityMultiplier"));
                                return f.pbLg = v.low, f.pbMg = v.med, f.pbHg = v.high, f.pbAg = v.auto, f.pbDg = v.dense, f.pbCg = v.custom, f.bidderCode && (0 < f.cpm || f.dealId) && (m = k(f.bidderCode, f)), f.adserverTargeting = i(f.adserverTargeting || {}, m), f
                            }({
                                adUnitCode: e,
                                bid: a,
                                bidRequest: O,
                                auctionId: I
                            });
                        "video" === P.mediaType ? (l = t, h = P, m = O, y = f, b = !0, E = (T = (w = (0, o.getBidRequest)(h.adId, [m])) && (0, o.deepAccess)(w, "mediaTypes.video")) && (0, o.deepAccess)(T, "context"), d.config.getConfig("cache.url") && E !== g.OUTSTREAM && (h.videoCacheKey ? h.vastUrl || (v.logError("videoCacheKey specified but not required vastUrl for video bid"), b = !1) : (b = !1, (0, u.store)([h], function(e, t) {
                            e ? (v.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), C(l, h)) : (h.videoCacheKey = t[0].uuid, h.vastUrl || (h.vastUrl = (0, u.getCacheUrl)(h.videoCacheKey)), x(l, h), y())
                        }))), b && (x(l, h), y())) : (x(t, P), f())
                    },
                    adapterDone: function() {
                        l(), a && 0 === n && e()
                    }
                }
            }

            function C(e, t) {
                t.timeToRespond > e.getTimeout() + d.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
            }

            function x(e, t) {
                _.emit(S.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), C(e, t)
            }

            function B(e) {
                var t = d.config.getConfig("mediaTypePriceGranularity." + e),
                    n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : d.config.getConfig("priceGranularity"),
                    r = pbjs.bidderSettings;
                return r[S.JSON_MAPPING.BD_SETTING_STANDARD] || (r[S.JSON_MAPPING.BD_SETTING_STANDARD] = {}), r[S.JSON_MAPPING.BD_SETTING_STANDARD][S.JSON_MAPPING.ADSERVER_TARGETING] || (r[S.JSON_MAPPING.BD_SETTING_STANDARD][S.JSON_MAPPING.ADSERVER_TARGETING] = [{
                    key: S.TARGETING_KEYS.BIDDER,
                    val: function(e) {
                        return e.bidderCode
                    }
                }, {
                    key: S.TARGETING_KEYS.AD_ID,
                    val: function(e) {
                        return e.adId
                    }
                }, {
                    key: S.TARGETING_KEYS.PRICE_BUCKET,
                    val: function(e) {
                        return n === S.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === S.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === S.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === S.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === S.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === S.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                    }
                }, {
                    key: S.TARGETING_KEYS.SIZE,
                    val: function(e) {
                        return e.size
                    }
                }, {
                    key: S.TARGETING_KEYS.DEAL,
                    val: function(e) {
                        return e.dealId
                    }
                }, {
                    key: S.TARGETING_KEYS.SOURCE,
                    val: function(e) {
                        return e.source
                    }
                }, {
                    key: S.TARGETING_KEYS.FORMAT,
                    val: function(e) {
                        return e.mediaType
                    }
                }]), r[S.JSON_MAPPING.BD_SETTING_STANDARD]
            }

            function k(e, t) {
                if (!t) return {};
                var n = {},
                    r = pbjs.bidderSettings;
                return r && (j(n, B(t.mediaType), t), e && r[e] && r[e][S.JSON_MAPPING.ADSERVER_TARGETING] && (j(n, r[e], t), t.sendStandardTargeting = r[e].sendStandardTargeting)), t.native && (n = i({}, n, (0, a.getNativeTargeting)(t))), n
            }

            function j(e, t, n) {
                var r = t[S.JSON_MAPPING.ADSERVER_TARGETING];
                return n.size = n.getSize(), v._each(r, function(r) {
                    var i = r.key,
                        o = r.val;
                    if (e[i] && v.logWarn("The key: " + i + " is getting ovewritten"), v.isFn(o)) try {
                        o = o(n)
                    } catch (r) {
                        v.logError("bidmanager", "ERROR", r)
                    }(void 0 === t.suppressEmptyKeys || !0 !== t.suppressEmptyKeys) && i !== S.TARGETING_KEYS.DEAL || !v.isEmptyStr(o) && null != o ? e[i] = o : v.logInfo("suppressing empty key '" + i + "' from adserver targeting")
                }), e
            }

            function N(e) {
                var t = e.bidderCode,
                    n = e.cpm,
                    r = void 0;
                if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[S.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), r)) try {
                    n = r(e.cpm, i({}, e))
                } catch (e) {
                    v.logError("Error during bid adjustment", "bidmanager.js", e)
                }
                0 <= n && (e.cpm = n)
            }

            function U(e, t) {
                return e[t.adUnitCode] || (e[t.adUnitCode] = {
                    bids: []
                }), e[t.adUnitCode].bids.push(t), e
            }
        },
        47: function(e, t, n) {
            "use strict";
            var r = n(14),
                i = n(34)(5),
                o = "find",
                s = !0;
            o in [] && Array(1)[o](function() {
                s = !1
            }), r(r.P + r.F * s, "Array", {
                find: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }), n(26)(o)
        },
        48: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!");
                return e
            }
        },
        49: function(e, t, n) {
            var r = n(50),
                i = n(55);
            e.exports = n(22) ? function(e, t, n) {
                return r.f(e, t, i(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        50: function(e, t, n) {
            var r = n(51),
                i = n(52),
                o = n(54),
                s = Object.defineProperty;
            t.f = n(22) ? Object.defineProperty : function(e, t, n) {
                if (r(e), t = o(t, !0), r(n), i) try {
                    return s(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        51: function(e, t, n) {
            var r = n(15);
            e.exports = function(e) {
                if (!r(e)) throw TypeError(e + " is not an object!");
                return e
            }
        },
        52: function(e, t, n) {
            e.exports = !n(22) && !n(33)(function() {
                return 7 != Object.defineProperty(n(53)("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            })
        },
        53: function(e, t, n) {
            var r = n(15),
                i = n(19).document,
                o = r(i) && r(i.createElement);
            e.exports = function(e) {
                return o ? i.createElement(e) : {}
            }
        },
        54: function(e, t, n) {
            var r = n(15);
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        55: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        56: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        57: function(e, t, n) {
            var r = n(24);
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        58: function(e, t, n) {
            var r = n(59);
            e.exports = function(e, t) {
                return new(r(e))(t)
            }
        },
        59: function(e, t, n) {
            var r = n(15),
                i = n(38),
                o = n(25)("species");
            e.exports = function(e) {
                var t;
                return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
            }
        },
        6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ajax = void 0;
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
                };
            t.ajaxBuilder = c;
            var o = n(11),
                s = n(3),
                a = n(0),
                u = 4;

            function c() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                    t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.request,
                    c = t.done;
                return function(t, d, l) {
                    var f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                    try {
                        var p = void 0,
                            h = f.method || (l ? "POST" : "GET"),
                            g = document.createElement("a");
                        g.href = t;
                        var m = "object" === (void 0 === d ? "undefined" : i(d)) && null !== d ? d : {
                            success: function() {
                                a.logMessage("xhr success")
                            },
                            error: function(e) {
                                a.logError("xhr error", null, e)
                            }
                        };
                        if ("function" == typeof d && (m.success = d), (p = new window.XMLHttpRequest).onreadystatechange = function() {
                                if (p.readyState === u) {
                                    "function" == typeof c && c(g.origin);
                                    var e = p.status;
                                    200 <= e && e < 300 || 304 === e ? m.success(p.responseText, p) : m.error(p.statusText, p)
                                }
                            }, s.config.getConfig("disableAjaxTimeout") || (p.ontimeout = function() {
                                a.logError("  xhr timeout after ", p.timeout, "ms")
                            }), "GET" === h && l) {
                            var y = (0, o.parse)(t, f);
                            r(y.search, l), t = (0, o.format)(y)
                        }
                        p.open(h, t, !0), s.config.getConfig("disableAjaxTimeout") || (p.timeout = e), f.withCredentials && (p.withCredentials = !0), a._each(f.customHeaders, function(e, t) {
                            p.setRequestHeader(t, e)
                        }), f.preflight && p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), p.setRequestHeader("Content-Type", f.contentType || "text/plain"), "function" == typeof n && n(g.origin), "POST" === h && l ? p.send(l) : p.send()
                    } catch (t) {
                        a.logError("xhr construction", t)
                    }
                }
            }
            t.ajax = c()
        },
        60: function(e, t, n) {
            var r = n(13),
                i = n(19),
                o = "__core-js_shared__",
                s = i[o] || (i[o] = {});
            (e.exports = function(e, t) {
                return s[e] || (s[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: r.version,
                mode: n(61) ? "pure" : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
            })
        },
        61: function(e, t) {
            e.exports = !0
        },
        617: function(e, t, n) {
            e.exports = n(618)
        },
        618: function(e, t, n) {
            "use strict";
            var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                s = n(42),
                a = n(0),
                u = n(619),
                c = n(18),
                d = n(28),
                l = n(3),
                f = n(29),
                p = n(43),
                h = n(20),
                g = n(620),
                m = (r = n(7)) && r.__esModule ? r : {
                    default: r
                },
                y = n(40),
                v = n(12),
                b = (0, s.getGlobal)(),
                _ = n(4),
                S = n(0),
                w = n(8),
                T = n(16),
                E = n(9),
                A = c.userSync.triggerUserSyncs,
                I = _.EVENTS,
                O = I.ADD_AD_UNITS,
                P = I.BID_WON,
                R = I.REQUEST_BIDS,
                D = I.SET_TARGETING,
                C = I.AD_RENDER_FAILED,
                x = _.AD_RENDER_FAILED_REASON,
                B = x.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                k = x.NO_AD,
                j = x.EXCEPTION,
                N = x.CANNOT_FIND_AD,
                U = x.MISSING_DOC_OR_ADID,
                M = {
                    bidWon: function(e) {
                        var t = f.auctionManager.getBidsRequested().map(function(e) {
                            return e.bids.map(function(e) {
                                return e.adUnitCode
                            })
                        }).reduce(a.flatten).filter(a.uniques);
                        return !!S.contains(t, e) || void S.logError('The "' + e + '" placement is not defined.')
                    }
                };

            function q(e, t, n) {
                e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
            }

            function V(e, t, n) {
                var r = {};
                r.reason = e, r.message = t, n && (r.bid = n), S.logError(t), E.emit(C, r)
            }

            function z(e) {
                e.forEach(function(e) {
                    if (void 0 === e.called) try {
                        e.call(), e.called = !0
                    } catch (e) {
                        S.logError("Error processing command :", "prebid.js", e)
                    }
                })
            }(0, g.sessionLoader)(), b.bidderSettings = b.bidderSettings || {}, b.libLoaded = !0, b.version = "v1.32.0", S.logInfo("Prebid.js v1.32.0 loaded"), b.adUnits = b.adUnits || [], b.triggerUserSyncs = A, b.getAdserverTargetingForAdUnitCodeStr = function(e) {
                if (S.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                    var t = b.getAdserverTargetingForAdUnitCode(e);
                    return S.transformAdServerTargetingObj(t)
                }
                S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
            }, b.getAdserverTargetingForAdUnitCode = function(e) {
                return b.getAdserverTargeting(e)[e]
            }, b.getAdserverTargeting = function(e) {
                return S.logInfo("Invoking pbjs.getAdserverTargeting", arguments), p.targeting.getAllTargeting(e)
            }, b.getBidResponses = function() {
                S.logInfo("Invoking pbjs.getBidResponses", arguments);
                var e = f.auctionManager.getBidsReceived().filter(a.adUnitsFilter.bind(this, f.auctionManager.getAdUnitCodes())),
                    t = e && e.length && e[e.length - 1].auctionId;
                return e.map(function(e) {
                    return e.adUnitCode
                }).filter(a.uniques).map(function(n) {
                    return e.filter(function(e) {
                        return e.auctionId === t && e.adUnitCode === n
                    })
                }).filter(function(e) {
                    return e && e[0] && e[0].adUnitCode
                }).map(function(e) {
                    return t = {}, n = e[0].adUnitCode, r = {
                        bids: e.map(a.removeRequestId)
                    }, n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r, t;
                    var t, n, r
                }).reduce(function(e, t) {
                    return o(e, t)
                }, {})
            }, b.getBidResponsesForAdUnitCode = function(e) {
                return {
                    bids: f.auctionManager.getBidsReceived().filter(function(t) {
                        return t.adUnitCode === e
                    }).map(a.removeRequestId)
                }
            }, b.setTargetingForGPTAsync = function(e, t) {
                if (S.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
                    var n = p.targeting.getAllTargeting(e);
                    p.targeting.resetPresetTargeting(e), p.targeting.setTargetingForGPT(n, t), Object.keys(n).forEach(function(e) {
                        Object.keys(n[e]).forEach(function(t) {
                            "hb_adid" === t && f.auctionManager.setStatusForBids(n[e][t], _.BID_STATUS.BID_TARGETING_SET)
                        })
                    }), E.emit(D, n)
                } else S.logError("window.googletag is not defined on the page")
            }, b.setTargetingForAst = function() {
                S.logInfo("Invoking pbjs.setTargetingForAn", arguments), p.targeting.isApntagDefined() ? (p.targeting.setTargetingForAst(), E.emit(D, p.targeting.getAllTargeting())) : S.logError("window.apntag is not defined on the page")
            }, b.renderAd = function(e, t) {
                if (S.logInfo("Invoking pbjs.renderAd", arguments), S.logMessage("Calling renderAd with adId :" + t), e && t) try {
                    var n = f.auctionManager.findBidByAdId(t);
                    if (n) {
                        n.status = _.BID_STATUS.RENDERED, n.ad = S.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = S.replaceAuctionPrice(n.adUrl, n.cpm), f.auctionManager.addWinningBid(n), E.emit(P, n);
                        var r = n.height,
                            i = n.width,
                            o = n.ad,
                            s = n.mediaType,
                            a = n.adUrl,
                            u = n.renderer,
                            c = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                        if (S.insertElement(c, e, "body"), (0, v.isRendererRequired)(u))(0, v.executeRenderer)(u, n);
                        else if (e === document && !S.inIframe() || "video" === s) V(B, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n);
                        else if (o) e.write(o), e.close(), q(e, i, r), S.callBurl(n);
                        else if (a) {
                            var d = S.createInvisibleIframe();
                            d.height = r, d.width = i, d.style.display = "inline", d.style.overflow = "hidden", d.src = a, S.insertElement(d, e, "body"), q(e, i, r), S.callBurl(n)
                        } else V(k, "Error trying to write ad. No ad for bid response id: " + t, n)
                    } else V(N, "Error trying to write ad. Cannot find ad by given id : " + t)
                } catch (e) {
                    var l = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                    V(j, l)
                } else V(U, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
            }, b.removeAdUnit = function(e) {
                if (S.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                    for (var t = 0; t < b.adUnits.length; t++) b.adUnits[t].code === e && b.adUnits.splice(t, 1)
            }, b.requestBids = (0, h.createHook)("asyncSeries", function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.bidsBackHandler,
                    n = e.timeout,
                    r = e.adUnits,
                    i = e.adUnitCodes,
                    o = e.labels;
                E.emit(R);
                var s = n || l.config.getConfig("bidderTimeout");
                if (r = r || b.adUnits, S.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                        return (0, m.default)(i, e.code)
                    }) : i = r && r.map(function(e) {
                        return e.code
                    }), r.forEach(function(e) {
                        var t = Object.keys(e.mediaTypes || {
                                banner: "banner"
                            }),
                            n = e.bids.map(function(e) {
                                return e.bidder
                            }),
                            r = w.bidderRegistry,
                            i = l.config.getConfig("s2sConfig"),
                            o = i && i.bidders,
                            s = o ? n.filter(function(e) {
                                return !(0, m.default)(o, e)
                            }) : n;
                        e.transactionId = S.generateUUID(), s.forEach(function(n) {
                            var i = r[n],
                                o = i && i.getSpec && i.getSpec(),
                                s = o && o.supportedMediaTypes || ["banner"];
                            t.some(function(e) {
                                return (0, m.default)(s, e)
                            }) || (S.logWarn(S.unsupportedBidderMessage(e, n)), e.bids = e.bids.filter(function(e) {
                                return e.bidder !== n
                            }))
                        }), y.adunitCounter.incrementCounter(e.code)
                    }), r && 0 !== r.length) {
                    var a = f.auctionManager.createAuction({
                        adUnits: r,
                        adUnitCodes: i,
                        callback: t,
                        cbTimeout: s,
                        labels: o
                    });
                    return a.callBids(), a
                }
                if (S.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                    t()
                } catch (e) {
                    S.logError("Error executing bidsBackHandler", null, e)
                }
            }), b.addAdUnits = function(e) {
                S.logInfo("Invoking pbjs.addAdUnits", arguments), S.isArray(e) ? b.adUnits.push.apply(b.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && b.adUnits.push(e), E.emit(O)
            }, b.onEvent = function(e, t, n) {
                S.logInfo("Invoking pbjs.onEvent", arguments), S.isFn(t) ? !n || M[e].call(null, n) ? E.on(e, t, n) : S.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : S.logError('The event handler provided is not a function and was not set on event "' + e + '".')
            }, b.offEvent = function(e, t, n) {
                S.logInfo("Invoking pbjs.offEvent", arguments), n && !M[e].call(null, n) || E.off(e, t, n)
            }, b.registerBidAdapter = function(e, t) {
                S.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                try {
                    w.registerBidAdapter(e(), t)
                } catch (e) {
                    S.logError("Error registering bidder adapter : " + e.message)
                }
            }, b.registerAnalyticsAdapter = function(e) {
                S.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                try {
                    w.registerAnalyticsAdapter(e)
                } catch (e) {
                    S.logError("Error registering analytics adapter : " + e.message)
                }
            }, b.createBid = function(e) {
                return S.logInfo("Invoking pbjs.createBid", arguments), T.createBid(e)
            }, b.loadScript = function(e, t, n) {
                S.logInfo("Invoking pbjs.loadScript", arguments), (0, d.loadScript)(e, t, n)
            }, b.enableAnalytics = function(e) {
                e && !S.isEmpty(e) ? (S.logInfo("Invoking pbjs.enableAnalytics for: ", e), w.enableAnalytics(e)) : S.logError("pbjs.enableAnalytics should be called with option {}")
            }, b.aliasBidder = function(e, t) {
                S.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? w.aliasBidAdapter(e, t) : S.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
            }, b.getAllWinningBids = function() {
                return f.auctionManager.getAllWinningBids().map(a.removeRequestId)
            }, b.getAllPrebidWinningBids = function() {
                return f.auctionManager.getBidsReceived().filter(function(e) {
                    return e.status === _.BID_STATUS.BID_TARGETING_SET
                }).map(a.removeRequestId)
            }, b.getHighestCpmBids = function(e) {
                var t = (0, p.getHighestCpmBidsFromBidPool)(f.auctionManager.getBidsReceived(), a.getLatestHighestCpmBid);
                return p.targeting.getWinningBids(e, t).map(a.removeRequestId)
            }, b.markWinningBidAsUsed = function(e) {
                var t = [];
                e.adUnitCode && e.adId ? t = f.auctionManager.getBidsReceived().filter(function(t) {
                    return t.adId === e.adId && t.adUnitCode === e.adUnitCode
                }) : e.adUnitCode ? t = p.targeting.getWinningBids(e.adUnitCode) : e.adId ? t = f.auctionManager.getBidsReceived().filter(function(t) {
                    return t.adId === e.adId
                }) : S.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < t.length && (t[0].status = _.BID_STATUS.RENDERED)
            }, b.getConfig = l.config.getConfig, b.setConfig = l.config.setConfig, b.que.push(function() {
                return (0, u.listenMessagesFromCreative)()
            }), b.cmd.push = function(e) {
                if ("function" == typeof e) try {
                    e.call()
                } catch (e) {
                    S.logError("Error processing command :", e.message, e.stack)
                } else S.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
            }, b.que.push = b.cmd.push, b.processQueue = function() {
                z(b.que), z(b.cmd)
            }
        },
        619: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.listenMessagesFromCreative = function() {
                addEventListener("message", f, !1)
            };
            var r = d(n(9)),
                i = n(17),
                o = n(4),
                s = n(0),
                a = n(29),
                u = d(n(10)),
                c = n(12);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = o.EVENTS.BID_WON;

            function f(e) {
                var t, n, o, d, f, p, h, g, m, y = e.message ? "message" : "data",
                    v = {};
                try {
                    v = JSON.parse(e[y])
                } catch (e) {
                    return
                }
                if (v && v.adId) {
                    var b = (0, u.default)(a.auctionManager.getBidsReceived(), function(e) {
                        return e.adId === v.adId
                    });
                    "Prebid Request" === v.message && (t = b, n = v.adServerDomain, o = e.source, d = t.adId, f = t.ad, p = t.adUrl, h = t.width, g = t.height, m = t.renderer, (0, c.isRendererRequired)(m) ? (0, c.executeRenderer)(m, t) : d && (function(e) {
                        var t = e.adUnitCode,
                            n = e.width,
                            r = e.height;
                        ["div", "iframe"].forEach(function(e) {
                            var i = function(e) {
                                var n, r, i, o, a = (n = t, window.googletag ? (o = n, (0, u.default)(window.googletag.pubads().getSlots().filter((0, s.isSlotMatchingAdUnitCode)(o)), function(e) {
                                        return e
                                    }).getSlotElementId()) : window.apntag ? (r = n, (i = window.apntag.getTag(r)) && i.targetId) : n),
                                    c = document.getElementById(a);
                                return c && c.querySelector(e)
                            }(e);
                            if (i) {
                                var o = i.style;
                                o.width = n + "px", o.height = r + "px"
                            } else(0, s.logWarn)("Unable to locate matching page element for adUnitCode " + t + ".  Can't resize it to ad's dimensions.  Please review setup.")
                        })
                    }(t), o.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: f,
                        adUrl: p,
                        adId: d,
                        width: h,
                        height: g
                    }), n)), a.auctionManager.addWinningBid(b), r.default.emit(l, b)), "Prebid Native" === v.message && ((0, i.fireNativeTrackers)(v, b), a.auctionManager.addWinningBid(b), r.default.emit(l, b))
                }
            }
        },
        62: function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
            }
        },
        620: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.boundHook = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.disableOverrides = l, t.addBidResponseHook = f, t.getConfig = p, t.sessionLoader = function(e) {
                var t = void 0;
                try {
                    e = e || window.sessionStorage, t = JSON.parse(e.getItem(a))
                } catch (e) {}
                t && d(t, !0)
            };
            var i = n(3),
                o = n(0),
                s = n(44),
                a = "pbjs:debugging",
                u = t.boundHook = void 0;

            function c(e) {
                (0, o.logMessage)("DEBUG: " + e)
            }

            function d(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                i.config.setConfig({
                    debug: !0
                }), c("bidder overrides enabled" + (n ? " from session" : "")), u && s.addBidResponse.removeHook(u), t.boundHook = u = f.bind(null, e), s.addBidResponse.addHook(u, 5)
            }

            function l() {
                u && (s.addBidResponse.removeHook(u), c("bidder overrides disabled"))
            }

            function f(e, t, n, i) {
                if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(n.bidderCode)) return s = "bidder '" + n.bidderCode + "' excluded from auction by bidder overrides", void(0, o.logWarn)("DEBUG: " + s);
                var s;
                Array.isArray(e.bids) && e.bids.forEach(function(e) {
                    e.bidder && e.bidder !== n.bidderCode || e.adUnitCode && e.adUnitCode !== t || (n = r({}, n), Object.keys(e).filter(function(e) {
                        return -1 === ["bidder", "adUnitCode"].indexOf(e)
                    }).forEach(function(r) {
                        var i = e[r];
                        c("bidder overrides changed '" + t + "/" + n.bidderCode + "' bid." + r + " from '" + n[r] + "' to '" + i + "'"), n[r] = i
                    }))
                }), i(t, n)
            }

            function p(e) {
                if (e.enabled) {
                    try {
                        window.sessionStorage.setItem(a, JSON.stringify(e))
                    } catch (e) {}
                    d(e)
                } else {
                    l();
                    try {
                        window.sessionStorage.removeItem(a)
                    } catch (e) {}
                }
            }
            i.config.getConfig("debugging", function(e) {
                return p(e.debugging)
            })
        },
        63: function(e, t, n) {
            "use strict";
            var r = n(14),
                i = n(64)(!0);
            r(r.P, "Array", {
                includes: function(e) {
                    return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                }
            }), n(26)("includes")
        },
        64: function(e, t, n) {
            var r = n(65),
                i = n(36),
                o = n(66);
            e.exports = function(e) {
                return function(t, n, s) {
                    var a, u = r(t),
                        c = i(u.length),
                        d = o(s, c);
                    if (e && n != n) {
                        for (; d < c;)
                            if ((a = u[d++]) != a) return !0
                    } else
                        for (; d < c; d++)
                            if ((e || d in u) && u[d] === n) return e || d || 0;
                    return !e && -1
                }
            }
        },
        65: function(e, t, n) {
            var r = n(35),
                i = n(24);
            e.exports = function(e) {
                return r(i(e))
            }
        },
        66: function(e, t, n) {
            var r = n(37),
                i = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
            }
        },
        67: function(e, t) {
            e.exports = function e(t) {
                var n = Array.isArray(t) ? [] : {};
                for (var r in t) {
                    var i = t[r];
                    n[r] = i && "object" == typeof i ? e(i) : i
                }
                return n
            }
        },
        68: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRefererInfo = void 0;
            var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.detectReferer = o;
            var i = n(0);

            function o(e) {
                function t() {
                    var t = function() {
                            var t = [],
                                o = void 0;
                            do {
                                try {
                                    o = o ? o.parent : e;
                                    try {
                                        var s = o == e.top,
                                            a = {
                                                referrer: o.document.referrer || null,
                                                location: o.location.href || null,
                                                isTop: s
                                            };
                                        s && (a = r(a, {
                                            canonicalUrl: n(o.document)
                                        })), t.push(a)
                                    } catch (s) {
                                        t.push({
                                            referrer: null,
                                            location: null,
                                            isTop: o == e.top
                                        }), (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                    }
                                } catch (s) {
                                    return t.push({
                                        referrer: null,
                                        location: null,
                                        isTop: !1
                                    }), t
                                }
                            } while (o != e.top);
                            return t
                        }(),
                        o = function() {
                            try {
                                if (!e.location.ancestorOrigins) return;
                                return e.location.ancestorOrigins
                            } catch (e) {}
                        }();
                    if (o)
                        for (var s = 0, a = o.length; s < a; s++) t[s].ancestor = o[s];
                    return t
                }

                function n(e) {
                    try {
                        var t = e.querySelector("link[rel='canonical']");
                        if (null !== t) return t.href
                    } catch (e) {}
                    return null
                }
                return function() {
                    try {
                        var e = t(),
                            n = e.length - 1,
                            r = null !== e[n].location || 0 < n && null !== e[n - 1].referrer,
                            i = function(e) {
                                var t = [],
                                    n = null,
                                    r = null,
                                    i = null,
                                    o = null,
                                    s = null,
                                    a = void 0;
                                for (a = e.length - 1; 0 <= a; a--) {
                                    try {
                                        n = e[a].location
                                    } catch (e) {}
                                    if (n) t.push(n), s || (s = n);
                                    else if (0 !== a) {
                                        r = e[a - 1];
                                        try {
                                            i = r.referrer, o = r.ancestor
                                        } catch (e) {}
                                        i ? (t.push(i), s || (s = i)) : o ? (t.push(o), s || (s = o)) : t.push(null)
                                    } else t.push(null)
                                }
                                return {
                                    stack: t,
                                    detectedRefererUrl: s
                                }
                            }(e),
                            o = void 0;
                        return e[e.length - 1].canonicalUrl && (o = e[e.length - 1].canonicalUrl), {
                            referer: i.detectedRefererUrl,
                            reachedTop: r,
                            numIframes: n,
                            stack: i.stack,
                            canonicalUrl: o
                        }
                    } catch (e) {}
                }
            }
            t.getRefererInfo = o(window)
        },
        7: function(e, t, n) {
            n(63), e.exports = n(13).Array.includes
        },
        8: function(e, t, n) {
            "use strict";
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = n(0),
                o = n(39),
                s = n(17),
                a = n(1),
                u = n(6),
                c = n(3),
                d = h(n(7)),
                l = h(n(10)),
                f = n(40),
                p = n(68);

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var g = n(0),
                m = n(4),
                y = n(9),
                v = void 0,
                b = {};
            t.bidderRegistry = b, t.aliasRegistry = {};
            var _ = {};
            c.config.getConfig("s2sConfig", function(e) {
                _ = e.s2sConfig
            });
            var S = {};

            function w(e) {
                var t = e.bidderCode,
                    n = e.auctionId,
                    a = e.bidderRequestId,
                    u = e.adUnits,
                    c = e.labels,
                    d = e.src;
                return u.reduce(function(e, u) {
                    var l = (0, o.resolveStatus)((0, o.getLabels)(u, c), u.mediaTypes, u.sizes),
                        p = l.active,
                        h = l.mediaTypes,
                        m = l.filterResults;
                    return p ? m && g.logInfo('Size mapping filtered adUnit "' + u.code + '" banner sizes from ', m.before, "to ", m.after) : g.logInfo('Size mapping disabled adUnit "' + u.code + '"'), p && e.push(u.bids.filter(function(e) {
                        return e.bidder === t
                    }).reduce(function(e, t) {
                        var l = u.nativeParams || g.deepAccess(u, "mediaTypes.native");
                        l && (t = r({}, t, {
                            nativeParams: (0, s.processNativeAdUnitParams)(l)
                        })), t = r({}, t, (0, i.getDefinedParams)(u, ["mediaType", "renderer"]));
                        var p = (0, o.resolveStatus)((0, o.getLabels)(t, c), h),
                            m = p.active,
                            y = p.mediaTypes,
                            v = p.filterResults;
                        return m ? v && g.logInfo('Size mapping filtered adUnit "' + u.code + '" bidder "' + t.bidder + '" banner sizes from ', v.before, "to ", v.after) : g.logInfo('Size mapping deactivated adUnit "' + u.code + '" bidder "' + t.bidder + '"'), g.isValidMediaTypes(y) ? t = r({}, t, {
                            mediaTypes: y
                        }) : g.logError("mediaTypes is not correctly configured for adunit " + u.code), m && e.push(r({}, t, {
                            adUnitCode: u.code,
                            transactionId: u.transactionId,
                            sizes: g.deepAccess(y, "banner.sizes") || [],
                            bidId: t.bid_id || g.getUniqueIdentifierStr(),
                            bidderRequestId: a,
                            auctionId: n,
                            src: d,
                            bidRequestsCount: f.adunitCounter.getCounter(u.code)
                        })), e
                    }, [])), e
                }, []).reduce(i.flatten, []).filter(function(e) {
                    return "" !== e
                })
            }

            function T() {
                return _ && _.enabled && _.testing && v
            }

            function E(e, t, n) {
                try {
                    var r = b[e].getSpec();
                    r && r[t] && "function" == typeof r[t] && (g.logInfo("Invoking " + e + "." + t), r[t](n))
                } catch (n) {
                    g.logWarn("Error calling " + t + " of " + e)
                }
            }
            t.gdprDataHandler = {
                consentData: null,
                setConsentData: function(e) {
                    this.consentData = e
                },
                getConsentData: function() {
                    return this.consentData
                }
            }, t.makeBidRequests = function(e, n, r, o, s) {
                var a = [];
                e = t.checkBidRequestSizes(e);
                var u = (0, i.getBidderCodes)(e);
                c.config.getConfig("bidderSequence") === c.RANDOM && (u = (0, i.shuffle)(u));
                var f, h, y, S = (0, p.getRefererInfo)(),
                    E = u,
                    A = [];
                if (_.enabled) {
                    T() && (A = v.getSourceBidderMap(e)[v.CLIENT]);
                    var I = _.bidders;
                    E = u.filter(function(e) {
                        return !(0, d.default)(I, e) || (0, d.default)(A, e)
                    });
                    var O = (f = e, h = _.bidders, (y = g.deepClone(f)).forEach(function(e) {
                            e.bids = e.bids.filter(function(e) {
                                return (0, d.default)(h, e.bidder) && (!T() || e.finalSource !== v.CLIENT)
                            }).map(function(e) {
                                return e.bid_id = g.getUniqueIdentifierStr(), e
                            })
                        }), y = y.filter(function(e) {
                            return 0 !== e.bids.length
                        })),
                        P = g.generateUUID();
                    I.forEach(function(e) {
                        var t = g.getUniqueIdentifierStr(),
                            i = {
                                bidderCode: e,
                                auctionId: r,
                                bidderRequestId: t,
                                tid: P,
                                bids: w({
                                    bidderCode: e,
                                    auctionId: r,
                                    bidderRequestId: t,
                                    adUnits: g.deepClone(O),
                                    labels: s,
                                    src: m.S2S.SRC
                                }),
                                auctionStart: n,
                                timeout: _.timeout,
                                src: m.S2S.SRC,
                                refererInfo: S
                            };
                        0 !== i.bids.length && a.push(i)
                    }), O.forEach(function(e) {
                        var t = e.bids.filter(function(e) {
                            return (0, l.default)(a, function(t) {
                                return (0, l.default)(t.bids, function(t) {
                                    return t.bidId === e.bid_id
                                })
                            })
                        });
                        e.bids = t
                    }), a.forEach(function(e) {
                        e.adUnitsS2SCopy = O.filter(function(e) {
                            return 0 < e.bids.length
                        })
                    })
                }
                var R, D, C = (R = e, (D = g.deepClone(R)).forEach(function(e) {
                    e.bids = e.bids.filter(function(e) {
                        return !T() || e.finalSource !== v.SERVER
                    })
                }), D = D.filter(function(e) {
                    return 0 !== e.bids.length
                }));
                return E.forEach(function(e) {
                    var t = g.getUniqueIdentifierStr(),
                        i = {
                            bidderCode: e,
                            auctionId: r,
                            bidderRequestId: t,
                            bids: w({
                                bidderCode: e,
                                auctionId: r,
                                bidderRequestId: t,
                                adUnits: g.deepClone(C),
                                labels: s,
                                src: "client"
                            }),
                            auctionStart: n,
                            timeout: o,
                            refererInfo: S
                        },
                        u = b[e];
                    u || g.logError("Trying to make a request for bidder that does not exist: " + e), u && i.bids && 0 !== i.bids.length && a.push(i)
                }), t.gdprDataHandler.getConsentData() && a.forEach(function(e) {
                    e.gdprConsent = t.gdprDataHandler.getConsentData()
                }), a
            }, t.checkBidRequestSizes = function(e) {
                function t(e) {
                    return Array.isArray(e) && 2 === e.length && g.isInteger(e[0]) && g.isInteger(e[1])
                }
                return e.forEach(function(e) {
                    var n = e.mediaTypes,
                        r = g.getAdUnitSizes(e);
                    if (n && n.banner) {
                        var i = n.banner;
                        i.sizes ? (i.sizes = r, e.sizes = r) : (g.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                    } else e.sizes && (g.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = r);
                    if (n && n.video) {
                        var o = n.video;
                        if (o.playerSize)
                            if (Array.isArray(o.playerSize) && 1 === o.playerSize.length && o.playerSize.every(t)) e.sizes = o.playerSize;
                            else if (t(o.playerSize)) {
                            var s = [];
                            s.push(o.playerSize), g.logInfo("Transforming video.playerSize from " + o.playerSize + " to " + s + " so it's in the proper format."), e.sizes = o.playerSize = s
                        } else g.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                    }
                    if (n && n.native) {
                        var a = n.native;
                        a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (g.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (g.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (g.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                    }
                }), e
            }, t.callBids = function(e, t, n, r, o, s) {
                if (t.length) {
                    var a = function(e, t) {
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
                        }(t.reduce(function(e, t) {
                            return e[Number(void 0 !== t.src && t.src === m.S2S.SRC)].push(t), e
                        }, [
                            [],
                            []
                        ]), 2),
                        c = a[0],
                        l = a[1];
                    if (l.length) {
                        var f = (0, u.ajaxBuilder)(s, o ? {
                                request: o.request.bind(null, "s2s"),
                                done: o.done
                            } : void 0),
                            p = _.bidders,
                            h = b[_.adapter],
                            v = l[0].tid,
                            S = l[0].adUnitsS2SCopy;
                        if (h) {
                            var w = {
                                tid: v,
                                ad_units: S
                            };
                            if (w.ad_units.length) {
                                var T = l.map(function(e) {
                                        return e.start = (0, i.timestamp)(), r
                                    }),
                                    E = w.ad_units.reduce(function(e, t) {
                                        return e.concat((t.bids || []).reduce(function(e, t) {
                                            return e.concat(t.bidder)
                                        }, []))
                                    }, []);
                                g.logMessage("CALLING S2S HEADER BIDDERS ==== " + p.filter(function(e) {
                                    return (0, d.default)(E, e)
                                }).join(",")), l.forEach(function(e) {
                                    y.emit(m.EVENTS.BID_REQUESTED, e)
                                }), h.callBids(w, l, n, function() {
                                    return T.forEach(function(e) {
                                        return e()
                                    })
                                }, f)
                            }
                        }
                    }
                    c.forEach(function(e) {
                        e.start = (0, i.timestamp)();
                        var t = b[e.bidderCode];
                        g.logMessage("CALLING BIDDER ======= " + e.bidderCode), y.emit(m.EVENTS.BID_REQUESTED, e);
                        var a = (e.doneCbCallCount = 0, u.ajaxBuilder)(s, o ? {
                            request: o.request.bind(null, e.bidderCode),
                            done: o.done
                        } : void 0);
                        t.callBids(e, n, r, a)
                    })
                } else g.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
            }, t.videoAdapters = [], t.registerBidAdapter = function(e, n) {
                var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                    i = void 0 === r ? [] : r;
                e && n ? "function" == typeof e.callBids ? (b[n] = e, (0, d.default)(i, "video") && t.videoAdapters.push(n), (0, d.default)(i, "native") && s.nativeAdapters.push(n)) : g.logError("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : g.logError("bidAdaptor or bidderCode not specified")
            }, t.aliasBidAdapter = function(e, n) {
                var i, o;
                if (void 0 === b[n]) {
                    var u = b[e];
                    if (void 0 === u) {
                        var l = c.config.getConfig("s2sConfig"),
                            f = l && l.bidders;
                        f && (0, d.default)(f, n) ? t.aliasRegistry[n] = e : g.logError('bidderCode "' + e + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter")
                    } else try {
                        var p = void 0,
                            h = (i = e, o = [], (0, d.default)(t.videoAdapters, i) && o.push("video"), (0, d.default)(s.nativeAdapters, i) && o.push("native"), o);
                        if (u.constructor.prototype != Object.prototype)(p = new u.constructor).setBidderCode(n);
                        else {
                            var m = u.getSpec();
                            p = (0, a.newBidder)(r({}, m, {
                                code: n
                            })), t.aliasRegistry[n] = e
                        }
                        this.registerBidAdapter(p, n, {
                            supportedMediaTypes: h
                        })
                    } catch (n) {
                        g.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                    }
                } else g.logMessage('alias name "' + n + '" has been already specified.')
            }, t.registerAnalyticsAdapter = function(e) {
                var t = e.adapter,
                    n = e.code;
                t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, S[n] = t) : g.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : g.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
            }, t.enableAnalytics = function(e) {
                g.isArray(e) || (e = [e]), g._each(e, function(e) {
                    var t = S[e.provider];
                    t ? t.enableAnalytics(e) : g.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
                })
            }, t.getBidAdapter = function(e) {
                return b[e]
            }, t.setS2STestingModule = function(e) {
                v = e
            }, t.callTimedOutBidders = function(e, t, n) {
                t = t.map(function(t) {
                    return t.params = g.getUserConfiguredParams(e, t.adUnitCode, t.bidder), t.timeout = n, t
                }), t = g.groupBy(t, "bidder"), Object.keys(t).forEach(function(e) {
                    E(e, "onTimeout", t[e])
                })
            }, t.callBidWonBidder = function(e, t, n) {
                t.params = g.getUserConfiguredParams(n, t.adUnitCode, t.bidder), E(e, "onBidWon", t)
            }, t.callSetTargetingBidder = function(e, t) {
                E(e, "onSetTargeting", t)
            }
        },
        9: function(e, t, n) {
            "use strict";
            var r, i, o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                s = n(0),
                a = n(4),
                u = Array.prototype.slice,
                c = Array.prototype.push,
                d = s._map(a.EVENTS, function(e) {
                    return e
                }),
                l = a.EVENT_ID_PATHS,
                f = [];
            e.exports = (r = {}, (i = {}).on = function(e, t, n) {
                if (o = e, s.contains(d, o)) {
                    var i = r[e] || {
                        que: []
                    };
                    n ? (i[n] = i[n] || {
                        que: []
                    }, i[n].que.push(t)) : i.que.push(t), r[e] = i
                } else s.logError("Wrong event name : " + e + " Valid event names :" + d);
                var o
            }, i.emit = function(e) {
                ! function(e, t) {
                    s.logMessage("Emitting event for: " + e);
                    var n = t[0] || {},
                        i = n[l[e]],
                        o = r[e] || {
                            que: []
                        },
                        a = s._map(o, function(e, t) {
                            return t
                        }),
                        u = [];
                    f.push({
                        eventType: e,
                        args: n,
                        id: i
                    }), i && s.contains(a, i) && c.apply(u, o[i].que), c.apply(u, o.que), s._each(u, function(e) {
                        if (e) try {
                            e.apply(null, t)
                        } catch (e) {
                            s.logError("Error executing handler:", "events.js", e)
                        }
                    })
                }(e, u.call(arguments, 1))
            }, i.off = function(e, t, n) {
                var i = r[e];
                s.isEmpty(i) || s.isEmpty(i.que) && s.isEmpty(i[n]) || n && (s.isEmpty(i[n]) || s.isEmpty(i[n].que)) || (n ? s._each(i[n].que, function(e) {
                    var r = i[n].que;
                    e === t && r.splice(s.indexOf.call(r, e), 1)
                }) : s._each(i.que, function(e) {
                    var n = i.que;
                    e === t && n.splice(s.indexOf.call(n, e), 1)
                }), r[e] = i)
            }, i.get = function() {
                return r
            }, i.getEvents = function() {
                var e = [];
                return s._each(f, function(t) {
                    var n = o({}, t);
                    e.push(n)
                }), e
            }, i)
        }
    }), pbjsChunk([168], {
        91: function(e, t, n) {
            n(92), e.exports = n(93)
        },
        92: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                i = n(1),
                o = n(2),
                s = n(3),
                a = t.spec = {
                    code: "adgeneration",
                    aliases: ["adg"],
                    supportedMediaTypes: [o.BANNER, o.NATIVE],
                    isBidRequestValid: function(e) {
                        return !!e.params.id
                    },
                    buildRequests: function(e, t) {
                        for (var n = [], i = 0, o = e.length; i < o; i++) {
                            var s = e[i],
                                a = s.params.debug ? "http://api-test.scaleout.jp/adsv/v1" : "https://d.socdm.com/adsv/v1",
                                u = "";
                            u = r.tryAppendQueryString(u, "posall", "SSPLOC");
                            var l = r.getBidIdParameter("id", s.params);
                            u = r.tryAppendQueryString(u, "id", l), u = r.tryAppendQueryString(u, "sdktype", "0"), u = r.tryAppendQueryString(u, "hb", "true"), u = r.tryAppendQueryString(u, "t", "json3"), u = r.tryAppendQueryString(u, "transactionid", s.transactionId), u = r.tryAppendQueryString(u, "sizes", c(s)), u = r.tryAppendQueryString(u, "currency", d()), u = r.tryAppendQueryString(u, "pbver", "1.32.0"), u = r.tryAppendQueryString(u, "sdkname", "prebidjs"), u = r.tryAppendQueryString(u, "adapterver", "1.0.1"), s.mediaTypes && s.mediaTypes.native || (u = r.tryAppendQueryString(u, "imark", "1")), (u = r.tryAppendQueryString(u, "tp", t.refererInfo.referer)).lastIndexOf("&") === u.length - 1 && (u = u.substring(0, u.length - 1)), n.push({
                                method: "GET",
                                url: a,
                                data: u,
                                bidRequest: e[i]
                            })
                        }
                        return n
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body;
                        if (!n.results || n.results.length < 1) return [];
                        var r = t.bidRequest;
                        if ((!r.mediaTypes || r.mediaTypes.banner) && (!n.w || !n.h)) return [];
                        var i = {
                            requestId: r.bidId,
                            cpm: n.cpm || 0,
                            width: n.w ? n.w : 1,
                            height: n.h ? n.h : 1,
                            creativeId: n.creativeid || "",
                            dealId: n.dealid || "",
                            currency: d(),
                            netRevenue: !0,
                            ttl: n.ttl || 10
                        };
                        return r.mediaTypes && r.mediaTypes.native ? (i.native = function(e) {
                            var t = {};
                            if (e.native_ad && 0 < e.native_ad.assets.length) {
                                for (var n = e.native_ad.assets, r = 0, i = n.length; r < i; r++) switch (n[r].id) {
                                    case 1:
                                        t.title = n[r].title.text;
                                        break;
                                    case 2:
                                        t.image = {
                                            url: n[r].img.url,
                                            height: n[r].img.h,
                                            width: n[r].img.w
                                        };
                                        break;
                                    case 3:
                                        t.icon = {
                                            url: n[r].img.url,
                                            height: n[r].img.h,
                                            width: n[r].img.w
                                        };
                                        break;
                                    case 4:
                                        t.sponsoredBy = n[r].data.value;
                                        break;
                                    case 5:
                                        t.body = n[r].data.value;
                                        break;
                                    case 6:
                                        t.cta = n[r].data.value
                                }
                                t.clickUrl = e.native_ad.link.url, t.clickTrackers = e.native_ad.link.clicktrackers || [], t.impressionTrackers = e.native_ad.imptrackers || [], e.beaconurl && "" != e.beaconurl && t.impressionTrackers.push(e.beaconurl)
                            }
                            return t
                        }(n), i.mediaType = o.NATIVE) : i.ad = function(e, t) {
                            var n, r, i, o, s, a, c, d = e.ad;
                            return e.vastxml && 0 < e.vastxml.length && (d = '<body><div id="apvad-' + t.bidId + '"></div>' + ((s = document.createElement("script")).type = "text/javascript", s.id = "apv", s.src = "https://cdn.apvdr.com/js/VideoAd.min.js", s.outerHTML) + (n = t.bidId, r = e.vastxml, i = {
                                s: n
                            }, (o = document.createElement("script")).type = "text/javascript", o.innerHTML = "(function(){ new APV.VideoAd(" + JSON.stringify(i) + ").load('" + r.replace(/\r?\n/g, "") + "'); })();", o.outerHTML) + "</body>"), u((a = d, c = e.beacon, d = a.replace(/<\/\s?body>/, c + "</body>"))) ? u(d) : d
                        }(n, r), [i]
                    },
                    getUserSyncs: function(e, t) {
                        return []
                    }
                };

            function u(e) {
                var t = e.indexOf("<body>"),
                    n = e.lastIndexOf("</body>");
                return -1 !== t && -1 !== n && e.substr(t, n).replace("<body>", "").replace("</body>", "")
            }

            function c(e) {
                var t = e.sizes;
                if (!t || t.length < 1) return null;
                var n = "";
                for (var r in t) {
                    var i = t[r];
                    if (2 !== i.length) return null;
                    n += i[0] + "x" + i[1] + ","
                }
                return (n || n.lastIndexOf(",") === n.length - 1) && (n = n.substring(0, n.length - 1)), n
            }

            function d() {
                return s.config.getConfig("currency.adServerCurrency") && "USD" === s.config.getConfig("currency.adServerCurrency").toUpperCase() ? "USD" : "JPY"
            }(0, i.registerBidder)(a)
        },
        93: function(e, t) {}
    }, [91]), pbjsChunk([153], {
        142: function(e, t, n) {
            n(143), e.exports = n(144)
        },
        143: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = n(12),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                s = n(1),
                a = n(2),
                u = t.spec = {
                    code: "aja",
                    supportedMediaTypes: [a.VIDEO, a.BANNER],
                    isBidRequestValid: function(e) {
                        return !!e.params.asi
                    },
                    buildRequests: function(e, t) {
                        for (var n = [], r = 0, i = e.length; r < i; r++) {
                            var s = e[r],
                                a = "",
                                u = o.getBidIdParameter("asi", s.params);
                            a = o.tryAppendQueryString(a, "asi", u), a = o.tryAppendQueryString(a, "skt", 5), a = o.tryAppendQueryString(a, "prebid_id", s.bidId), a = o.tryAppendQueryString(a, "prebid_ver", "1.32.0"), n.push({
                                method: "GET",
                                url: "//ad.as.amanad.adtdp.com/v2/prebid",
                                data: a
                            })
                        }
                        return n
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body;
                        if (!n.is_ad_return) return [];
                        var s = n.ad,
                            u = {
                                requestId: s.prebid_id,
                                cpm: s.price,
                                creativeId: s.creative_id,
                                dealId: s.deal_id,
                                currency: s.currency || "USD",
                                netRevenue: !0,
                                ttl: 300
                            };
                        if (3 === s.ad_type) {
                            var d = n.ad.video;
                            r(u, {
                                vastXml: d.vtag,
                                width: d.w,
                                height: d.h,
                                renderer: function(e) {
                                    var t = i.Renderer.install({
                                        id: e.ad.prebid_id,
                                        url: e.ad.video.purl,
                                        loaded: !1
                                    });
                                    try {
                                        t.setRender(c)
                                    } catch (e) {
                                        o.logWarn("Prebid Error calling setRender on newRenderer", e)
                                    }
                                    return t
                                }(n),
                                adResponse: n,
                                mediaType: a.VIDEO
                            })
                        } else if (1 === s.ad_type) {
                            var l = n.ad.banner;
                            r(u, {
                                width: l.w,
                                height: l.h,
                                ad: l.tag,
                                mediaType: a.BANNER
                            });
                            try {
                                l.imps.forEach(function(e) {
                                    var t = o.createTrackPixelHtml(e);
                                    u.ad += t
                                })
                            } catch (e) {
                                o.logError("Error appending tracking pixel", e)
                            }
                        }
                        return [u]
                    },
                    getUserSyncs: function(e, t) {
                        var n = [];
                        if (e.pixelEnabled && t.length) {
                            var r = t[0].body;
                            r.syncs && r.syncs.forEach(function(e) {
                                n.push({
                                    type: "image",
                                    url: e
                                })
                            })
                        }
                        return n
                    }
                };

            function c(e) {
                e.renderer.push(function() {
                    window.aja_vast_player.init({
                        vast_tag: e.adResponse.ad.video.vtag,
                        ad_unit_code: e.adUnitCode,
                        width: e.width,
                        height: e.height,
                        progress: e.adResponse.ad.video.progress,
                        loop: e.adResponse.ad.video.loop,
                        inread: e.adResponse.ad.video.inread
                    })
                })
            }(0, s.registerBidder)(u)
        },
        144: function(e, t) {}
    }, [142]), pbjsChunk([151], {
        148: function(e, t, n) {
            n(149), e.exports = n(150)
        },
        149: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                i = d(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]),
                o = d(["//", "/bidRequest?"], ["//", "/bidRequest?"]),
                s = d(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""]),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                u = n(1),
                c = n(2);

            function d(e, t) {
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var l = {
                    AOL: "aol",
                    ONEMOBILE: "onemobile",
                    ONEDISPLAY: "onedisplay"
                },
                f = "display-get",
                p = "mobile-get",
                h = "mobile-post",
                g = "iframe",
                m = "img",
                y = "image",
                v = w(i, "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
                b = w(o, "host"),
                _ = w(s, "dcn", "pos", "dynamicParams"),
                S = {
                    us: "adserver-us.adtech.advertising.com",
                    eu: "adserver-eu.adtech.advertising.com",
                    as: "adserver-as.adtech.advertising.com"
                };

            function w(e) {
                for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return function() {
                    for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                    var o = r[r.length - 1] || {},
                        s = [e[0]];
                    return n.forEach(function(t, n) {
                        var i = a.isInteger(t) ? r[t] : o[t];
                        s.push(i, e[n + 1])
                    }), s.join("")
                }
            }

            function T(e) {
                return e === l.AOL || e === l.ONEMOBILE
            }

            function E(e) {
                if (T(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                    var t = e.params.imp[0];
                    return t.id && t.tagid && (t.banner && t.banner.w && t.banner.h || t.video && t.video.mimes && t.video.minduration && t.video.maxduration)
                }
            }

            function A(e) {
                return T(e.bidder) && e.params.dcn && e.params.pos
            }

            function I(e) {
                return ((t = e.bidder) === l.AOL || t === l.ONEDISPLAY) && e.params.placement && e.params.network;
                var t
            }
            var O = t.spec = {
                code: l.AOL,
                aliases: [l.ONEMOBILE, l.ONEDISPLAY],
                supportedMediaTypes: [c.BANNER],
                isBidRequestValid: function(e) {
                    return I(e) || A(t = e) || E(t);
                    var t
                },
                buildRequests: function(e, t) {
                    var n = this,
                        r = t ? t.gdprConsent : null;
                    return e.map(function(e) {
                        var t, i = A(t = e) ? p : E(t) ? h : I(t) ? f : void 0;
                        if (i) return n.formatBidRequest(i, e, r)
                    })
                },
                interpretResponse: function(e, t) {
                    var n = e.body;
                    if (n) {
                        var r = this._parseBidResponse(n, t);
                        if (r) return r
                    } else a.logError("Empty bid response", t.bidderCode, n)
                },
                getUserSyncs: function(e, t) {
                    var n = !a.isEmpty(t) && t[0].body;
                    return n && n.ext && n.ext.pixels ? this.parsePixelItems(n.ext.pixels) : []
                },
                formatBidRequest: function(e, t, n) {
                    var r = void 0;
                    switch (e) {
                        case f:
                            r = {
                                url: this.buildMarketplaceUrl(t, n),
                                method: "GET",
                                ttl: 60
                            };
                            break;
                        case p:
                            r = {
                                url: this.buildOneMobileGetUrl(t, n),
                                method: "GET",
                                ttl: 3600
                            };
                            break;
                        case h:
                            r = {
                                url: this.buildOneMobileBaseUrl(t),
                                method: "POST",
                                ttl: 3600,
                                data: this.buildOpenRtbRequestData(t, n),
                                options: {
                                    contentType: "application/json",
                                    customHeaders: {
                                        "x-openrtb-version": "2.2"
                                    }
                                }
                            }
                    }
                    return r.bidderCode = t.bidder, r.bidId = t.bidId, r.userSyncOn = t.params.userSyncOn, r
                },
                buildMarketplaceUrl: function(e, t) {
                    var n, r = e.params,
                        i = r.server,
                        o = r.region || "us";
                    return S.hasOwnProperty(o) || (a.logWarn("Unknown region '" + o + "' for AOL bidder."), o = "us"), n = i || S[o], r.region = o, v({
                        host: n,
                        network: r.network,
                        placement: parseInt(r.placement),
                        pageid: r.pageId || 0,
                        sizeid: r.sizeId || 0,
                        alias: r.alias || a.getUniqueIdentifierStr(),
                        misc: (new Date).getTime(),
                        dynamicParams: this.formatMarketplaceDynamicParams(r, t)
                    })
                },
                buildOneMobileGetUrl: function(e, t) {
                    var n = e.params,
                        r = n.dcn,
                        i = n.pos,
                        o = n.ext,
                        s = this.buildOneMobileBaseUrl(e);
                    if (r && i) {
                        var a = this.formatOneMobileDynamicParams(o, t);
                        s += _({
                            dcn: r,
                            pos: i,
                            dynamicParams: a
                        })
                    }
                    return s
                },
                buildOneMobileBaseUrl: function(e) {
                    return b({
                        host: e.params.host || "hb.nexage.com"
                    })
                },
                formatMarketplaceDynamicParams: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        n = {};
                    e.bidFloor && (n.bidfloor = e.bidFloor), r(n, this.formatKeyValues(e.keyValues)), r(n, this.formatConsentData(t));
                    var i = "";
                    return a._each(n, function(e, t) {
                        i += t + "=" + encodeURIComponent(e) + ";"
                    }), i
                },
                formatOneMobileDynamicParams: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1];
                    this.isSecureProtocol() && (e.secure = 1), r(e, this.formatConsentData(t));
                    var n = "";
                    return a._each(e, function(e, t) {
                        n += "&" + t + "=" + encodeURIComponent(e)
                    }), n
                },
                buildOpenRtbRequestData: function(e, t) {
                    var n = {
                        id: e.params.id,
                        imp: e.params.imp
                    };
                    return this.isConsentRequired(t) && (n.regs = {
                        ext: {
                            gdpr: 1
                        }
                    }, t.consentString && (n.user = {
                        ext: {
                            consent: t.consentString
                        }
                    })), n
                },
                isConsentRequired: function(e) {
                    return !(!e || !e.gdprApplies)
                },
                formatKeyValues: function(e) {
                    var t = {};
                    return a._each(e, function(e, n) {
                        t["kv" + n] = e
                    }), t
                },
                formatConsentData: function(e) {
                    var t = {};
                    return this.isConsentRequired(e) && (t.gdpr = 1, e.consentString && (t.euconsent = e.consentString)), t
                },
                parsePixelItems: function(e) {
                    var t = /\w*(?=\s)/,
                        n = /src=("|')(.*?)\1/,
                        r = [];
                    if (e) {
                        var i = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                        i && i.forEach(function(e) {
                            var i = e.match(t)[0],
                                o = e.match(n)[2];
                            i && i && r.push({
                                type: i === m ? y : g,
                                url: o
                            })
                        })
                    }
                    return r
                },
                _parseBidResponse: function(e, t) {
                    var n = void 0;
                    try {
                        n = e.seatbid[0].bid[0]
                    } catch (e) {
                        return
                    }
                    var r = void 0;
                    if (n.ext && n.ext.encp) r = n.ext.encp;
                    else if (null === (r = n.price) || isNaN(r)) return void a.logError("Invalid price in bid response", l.AOL, bid);
                    return {
                        bidderCode: t.bidderCode,
                        requestId: t.bidId,
                        ad: n.adm,
                        cpm: r,
                        width: n.w,
                        height: n.h,
                        creativeId: n.crid || 0,
                        pubapiId: e.id,
                        currency: e.cur || "USD",
                        dealId: n.dealid,
                        netRevenue: !0,
                        ttl: t.ttl
                    }
                },
                isOneMobileBidder: T,
                isSecureProtocol: function() {
                    return "https:" === document.location.protocol
                }
            };
            (0, u.registerBidder)(O)
        },
        150: function(e, t) {}
    }, [148]), pbjsChunk([146], {
        162: function(e, t, n) {
            n(163), e.exports = n(164)
        },
        163: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = function(e, t) {
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
                },
                i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = n(1),
                s = n(11),
                a = n(0),
                u = d(n(21)),
                c = d(n(7));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var f = function(e) {
                    return Array.isArray(e) && 2 === e.length ? e[0] + "x" + e[1] : e
                },
                p = function(e) {
                    return e.split("x").map(Number)
                },
                h = function(e) {
                    return (0, c.default)(["300x250", "320x50"], e)
                },
                g = function(e) {
                    return (0, c.default)(["video", "native"], e)
                },
                m = function(e, t) {
                    return "300x250" === t ? [t].concat(l(e)) : [].concat(l(e), [t])
                },
                y = function(e) {
                    return "video" === e
                },
                v = function(e) {
                    return "fullwidth" === e
                },
                b = function() {
                    return encodeURIComponent((0, a.getTopWindowUrl)())
                },
                _ = t.spec = {
                    code: "audienceNetwork",
                    supportedMediaTypes: ["banner", "video"],
                    isBidRequestValid: function(e) {
                        return "object" === i(e.params) && "string" == typeof e.params.placementId && 0 < e.params.placementId.length && Array.isArray(e.sizes) && 0 < e.sizes.length && (!v(e.params.format) || e.sizes.map(f).some(function(e) {
                            return "300x250" === e
                        })) && (g(e.params.format) || e.sizes.map(f).some(h))
                    },
                    buildRequests: function(e) {
                        var t = [],
                            n = [],
                            i = [],
                            o = [],
                            c = [],
                            d = [];
                        e.forEach(function(e) {
                            return e.sizes.map(f).filter(function(t) {
                                return n = t, r = e.params.format, v(r) && "300x250" === f(n) || g(r) || h(f(n));
                                var n, r
                            }).reduce(m, []).slice(0, 1).forEach(function(s) {
                                var a, u, l = (a = s, u = e.params.format, v(u) ? ["300x250", null] : [a, u]),
                                    f = r(l, 2),
                                    p = f[0],
                                    h = f[1];
                                t.push(e.params.placementId), n.push(h || p), i.push(p), o.push(y(h) ? "" : "5.5.web"), c.push(e.params.platform), d.push(e.bidId)
                            })
                        });
                        var _ = Boolean(window && window.location && "string" == typeof window.location.search && -1 !== window.location.search.indexOf("anhb_testmode")).toString(),
                            S = b(),
                            w = [].concat(l(c.filter(Boolean)), ["241394079772386"])[0],
                            T = (0, a.generateUUID)(),
                            E = {
                                placementids: t,
                                adformats: n,
                                testmode: _,
                                pageurl: S,
                                sdk: o,
                                adapterver: "1.1.0",
                                platform: w,
                                platver: "1.32.0",
                                cb: T
                            },
                            A = (0, u.default)(n, y);
                        if (-1 !== A) {
                            var I = p(i[A]),
                                O = r(I, 2);
                            E.playerwidth = O[0], E.playerheight = O[1]
                        }
                        var P = (0, s.formatQS)(E);
                        return [{
                            adformats: n,
                            data: P,
                            method: "GET",
                            requestIds: d,
                            sizes: i,
                            url: "https://an.facebook.com/v2/placementbid.json"
                        }]
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body,
                            i = t.adformats,
                            o = t.requestIds,
                            s = t.sizes,
                            a = n.bids,
                            u = void 0 === a ? {} : a;
                        return Object.keys(u).map(function(e) {
                            return u[e]
                        }).reduce(function(e, t) {
                            return e.concat(t)
                        }, []).map(function(e, t) {
                            var n, a, u = e.bid_id,
                                c = e.placement_id,
                                d = e.bid_price_cents,
                                l = i[t],
                                h = p(f(s[t])),
                                g = r(h, 2),
                                m = g[0],
                                v = g[1],
                                _ = "<html><head>" + ("native" === (a = l) ? '<script>window.onload=function(){if(parent){var o=document.getElementsByTagName("head")[0];var s=parent.document.getElementsByTagName("style");for(var i=0;i<s.length;i++)o.appendChild(s[i].cloneNode(true));}}<\/script>' : "") + "</head><body><div style=\"display:none;position:relative;\">\n<script type='text/javascript'>var data = {placementid:'" + (n = c) + "',format:'" + a + "',bidid:'" + u + "',onAdLoaded:function(e){console.log('Audience Network [" + n + "] ad loaded');e.style.display = 'block';},onAdError:function(c,m){console.log('Audience Network [" + n + "] error (' + c + ') ' + m);}};\n(function(a,b,c){var d='https://www.facebook.com',e='https://connect.facebook.net/en_US/fbadnw55.js',f={iframeLoaded:true,xhrLoaded:true},g=a.data,h=function(){if(Date.now){return Date.now();}else return +new Date();},i=function(aa){var ba=d+'/audience_network/client_event',ca={cb:h(),event_name:'ADNW_ADERROR',ad_pivot_type:'audience_network_mobile_web',sdk_version:'5.5.web',app_id:g.placementid.split('_')[0],publisher_id:g.placementid.split('_')[1],error_message:aa},da=[];for(var ea in ca)da.push(encodeURIComponent(ea)+'='+encodeURIComponent(ca[ea]));var fa=ba+'?'+da.join('&'),ga=new XMLHttpRequest();ga.open('GET',fa,true);ga.send();if(g.onAdError)g.onAdError('1000','Internal error.');},j=function(){if(b.currentScript){return b.currentScript;}else{var aa=b.getElementsByTagName('script');return aa[aa.length-1];}},k=function(aa){try{return aa.document.referrer;}catch(ba){}return '';},l=function(){var aa=a,ba=[aa];try{while(aa!==aa.parent&&aa.parent.document)ba.push(aa=aa.parent);}catch(ca){}return ba.reverse();},m=function(){var aa=l();for(var ba=0;ba<aa.length;ba++){var ca=aa[ba],da=ca.ADNW||{};ca.ADNW=da;if(!ca.ADNW)continue;return da.v55=da.v55||{ads:[],window:ca};}throw new Error('no_writable_global');},n=function(aa){var ba=aa.indexOf('/',aa.indexOf('://')+3);if(ba===-1)return aa;return aa.substring(0,ba);},o=function(aa){return aa.location.href||k(aa);},p=function(aa){if(aa.sdkLoaded)return;var ba=aa.window.document,ca=ba.createElement('iframe');ca.name='fbadnw';ca.style.display='none';ba.body.appendChild(ca);var da=ca.contentDocument.createElement('script');da.src=e;da.async=true;ca.contentDocument.body.appendChild(da);aa.sdkLoaded=true;},q=function(aa){var ba=/^https?:\\/\\/www\\.google(\\.com?)?\\.\\w{2,3}$/;return !!aa.match(ba);},r=function(aa){return !!aa.match(/cdn\\.ampproject\\.org$/);},s=function(){var aa=c.ancestorOrigins||[],ba=aa[aa.length-1]||c.origin,ca=aa[aa.length-2]||c.origin;if(q(ba)&&r(ca)){return n(ca);}else return n(ba);},t=function(aa){try{return JSON.parse(aa);}catch(ba){i(ba.message);throw ba;}},u=function(aa,ba,ca){if(!aa.iframe){var da=ca.createElement('iframe');da.src=d+'/audiencenetwork/iframe/';da.style.display='none';ca.body.appendChild(da);aa.iframe=da;aa.iframeAppendedTime=h();aa.iframeData={};}ba.iframe=aa.iframe;ba.iframeData=aa.iframeData;ba.tagJsIframeAppendedTime=aa.iframeAppendedTime||0;},v=function(aa){var ba=d+'/audiencenetwork/xhr/?sdk=5.5.web';for(var ca in aa)if(typeof aa[ca]!=='function')ba+='&'+ca+'='+encodeURIComponent(aa[ca]);var da=new XMLHttpRequest();da.open('GET',ba,true);da.withCredentials=true;da.onreadystatechange=function(){if(da.readyState===4){var ea=t(da.response);aa.events.push({name:'xhrLoaded',source:aa.iframe.contentWindow,data:ea,postMessageTimestamp:h(),receivedTimestamp:h()});}};da.send();},w=function(aa,ba){var ca=d+'/audiencenetwork/xhriframe/?sdk=5.5.web';for(var da in ba)if(typeof ba[da]!=='function')ca+='&'+da+'='+encodeURIComponent(ba[da]);var ea=b.createElement('iframe');ea.src=ca;ea.style.display='none';b.body.appendChild(ea);ba.iframe=ea;ba.iframeData={};ba.tagJsIframeAppendedTime=h();},x=function(aa){var ba=function(event){try{var da=event.data;if(da.name in f)aa.events.push({name:da.name,source:event.source,data:da.data});}catch(ea){}},ca=aa.iframe.contentWindow.parent;ca.addEventListener('message',ba,false);},y=function(aa){if(aa.context&&aa.context.sourceUrl)return true;try{return !!JSON.parse(decodeURI(aa.name)).ampcontextVersion;}catch(ba){return false;}},z=function(aa){var ba=h(),ca=l()[0],da=j().parentElement,ea=ca!=a.top,fa=ca.$sf&&ca.$sf.ext,ga=o(ca),ha=m();p(ha);var ia={amp:y(ca),events:[],tagJsInitTime:ba,rootElement:da,iframe:null,tagJsIframeAppendedTime:ha.iframeAppendedTime||0,url:ga,domain:s(),channel:n(o(ca)),width:screen.width,height:screen.height,pixelratio:a.devicePixelRatio,placementindex:ha.ads.length,crossdomain:ea,safeframe:!!fa,placementid:g.placementid,format:g.format||'300x250',testmode:!!g.testmode,onAdLoaded:g.onAdLoaded,onAdError:g.onAdError};if(g.bidid)ia.bidid=g.bidid;if(ea){w(ha,ia);}else{u(ha,ia,ca.document);v(ia);}; x(ia);ia.rootElement.dataset.placementid=ia.placementid;ha.ads.push(ia);};try{z();}catch(aa){i(aa.message||aa);throw aa;}})(window,document,location);\n<\/script>\n" + ("native" === a ? '<div class="thirdPartyRoot"><a class="fbAdLink"><div class="fbAdMedia thirdPartyMediaClass"></div><div class="fbAdSubtitle thirdPartySubtitleClass"></div><div class="fbDefaultNativeAdWrapper"><div class="fbAdCallToAction thirdPartyCallToActionClass"></div><div class="fbAdTitle thirdPartyTitleClass"></div></div></a></div>' : "") + "</div></body></html>",
                                S = {
                                    requestId: o[t],
                                    cpm: d / 100,
                                    width: m,
                                    height: v,
                                    ad: _,
                                    ttl: 600,
                                    creativeId: c,
                                    netRevenue: !0,
                                    currency: "USD",
                                    hb_bidder: "fan",
                                    fb_bidid: u,
                                    fb_format: l,
                                    fb_placementid: c
                                };
                            if (y(l)) {
                                var w = b();
                                S.mediaType = "video", S.vastUrl = "https://an.facebook.com/v1/instream/vast.xml?placementid=" + c + "&pageurl=" + w + "&playerwidth=" + m + "&playerheight=" + v + "&bidid=" + u, S.ttl = 3600
                            }
                            return S
                        })
                    },
                    transformBidParams: function(e, t) {
                        return (0, a.convertTypes)({
                            placementId: "string"
                        }, e)
                    }
                };
            (0, o.registerBidder)(_)
        },
        164: function(e, t) {}
    }, [162]), pbjsChunk([2], {
        214: function(e, t, n) {
            n(215), e.exports = n(219)
        },
        215: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.spec = exports.FAST_BID_PUBKEY = void 0, exports.cryptoVerify = cryptoVerify;
            var _adloader = __webpack_require__(28),
                _bidderFactory = __webpack_require__(1),
                _url = __webpack_require__(11),
                _utils = __webpack_require__(0),
                utils = _interopRequireWildcard(_utils),
                _find = __webpack_require__(10),
                _find2 = _interopRequireDefault(_find),
                _jsencrypt = __webpack_require__(216),
                _jsencrypt2 = _interopRequireDefault(_jsencrypt),
                _sha = __webpack_require__(217),
                _sha2 = _interopRequireDefault(_sha);

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _interopRequireWildcard(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }
            var ADAPTER_VERSION = 15,
                BIDDER_CODE = "criteo",
                CDB_ENDPOINT = "//bidder.criteo.com/cdb",
                CRITEO_VENDOR_ID = 91,
                INTEGRATION_MODES = {
                    amp: 1
                },
                PROFILE_ID_INLINE = 207,
                PROFILE_ID_PUBLISHERTAG = 185,
                PUBLISHER_TAG_URL = "//static.criteo.net/js/ld/publishertag.prebid.js",
                FAST_BID_PUBKEY = exports.FAST_BID_PUBKEY = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO1BjAITkFTtP0IMzmF7qsqhpu\ny1dGaTPHnjMU9mRZsrnfR3C0sEN5pYEzEcFRPnkJjJuhH8Rnh5+CE+LcKg0Z8ZZ7\nOmOSj0/qnYTAYCu0cR5LiyWG79KlIgUyMbp92ulGg24gAyGrVn4+v/4c53WlOEUp\n4YWvb82G0CD5NcDNpQIDAQAB\n-----END PUBLIC KEY-----",
                spec = exports.spec = {
                    code: BIDDER_CODE,
                    isBidRequestValid: function(e) {
                        return !(!e || !e.params || !e.params.zoneId && !e.params.networkId)
                    },
                    buildRequests: function(e, t) {
                        var n = void 0,
                            r = void 0;
                        if (publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function() {
                                (0, _adloader.loadExternalScript)(PUBLISHER_TAG_URL, BIDDER_CODE)
                            }, t.timeout)), publisherTagAvailable()) {
                            var i = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, e, t, "1.32.0");
                            n = i.buildCdbUrl(), r = i.buildCdbRequest()
                        } else {
                            var o = buildContext(e);
                            n = buildCdbUrl(o), r = buildCdbRequest(o, e, t)
                        }
                        if (r) return {
                            method: "POST",
                            url: n,
                            data: r,
                            bidRequests: e
                        }
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body || e;
                        if (publisherTagAvailable()) {
                            var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(t);
                            if (r) return r.interpretResponse(n, t)
                        }
                        var i = [];
                        return n && n.slots && utils.isArray(n.slots) && n.slots.forEach(function(e) {
                            var n = (0, _find2.default)(t.bidRequests, function(t) {
                                    return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid)
                                }),
                                r = n.bidId,
                                o = {
                                    requestId: r,
                                    cpm: e.cpm,
                                    currency: e.currency,
                                    netRevenue: !0,
                                    ttl: e.ttl || 60,
                                    creativeId: r,
                                    width: e.width,
                                    height: e.height
                                };
                            e.native ? o.ad = createNativeAd(r, e.native, n.params.nativeCallback) : o.ad = e.creative, i.push(o)
                        }), i
                    },
                    onTimeout: function(e) {
                        publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleBidTimeout()
                    },
                    onBidWon: function(e) {
                        publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleBidWon(e)
                    },
                    onSetTargeting: function(e) {
                        publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(e.auctionId).handleSetTargeting(e)
                    }
                };

            function publisherTagAvailable() {
                return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
            }

            function buildContext(e) {
                var t = utils.getTopWindowUrl(),
                    n = (0, _url.parse)(t).search,
                    r = {
                        url: t,
                        debug: "1" === n.pbt_debug,
                        noLog: "1" === n.pbt_nolog,
                        integrationMode: void 0
                    };
                return e.forEach(function(e) {
                    e.params.integrationMode && (r.integrationMode = e.params.integrationMode)
                }), r
            }

            function buildCdbUrl(e) {
                var t = CDB_ENDPOINT;
                return t += "?profileId=" + PROFILE_ID_INLINE, t += "&av=" + String(ADAPTER_VERSION), t += "&wv=" + encodeURIComponent("1.32.0"), t += "&cb=" + String(Math.floor(99999999999 * Math.random())), e.integrationMode in INTEGRATION_MODES && (t += "&im=" + INTEGRATION_MODES[e.integrationMode]), e.debug && (t += "&debug=1"), e.noLog && (t += "&nolog=1"), t
            }

            function buildCdbRequest(e, t, n) {
                var r = void 0,
                    i = {
                        publisher: {
                            url: e.url
                        },
                        slots: t.map(function(e) {
                            r = e.params.networkId || r;
                            var t = {
                                impid: e.adUnitCode,
                                transactionid: e.transactionId,
                                auctionId: e.auctionId,
                                sizes: e.sizes.map(function(e) {
                                    return e[0] + "x" + e[1]
                                })
                            };
                            return e.params.zoneId && (t.zoneid = e.params.zoneId), e.params.publisherSubId && (t.publishersubid = e.params.publisherSubId), e.params.nativeCallback && (t.native = !0), t
                        })
                    };
                return r && (i.publisher.networkid = r), n && n.gdprConsent && (i.gdprConsent = {}, void 0 !== n.gdprConsent.gdprApplies && (i.gdprConsent.gdprApplies = !!n.gdprConsent.gdprApplies), n.gdprConsent.vendorData && n.gdprConsent.vendorData.vendorConsents && void 0 !== n.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)] && (i.gdprConsent.consentGiven = !!n.gdprConsent.vendorData.vendorConsents[CRITEO_VENDOR_ID.toString(10)]), void 0 !== n.gdprConsent.consentString && (i.gdprConsent.consentData = n.gdprConsent.consentString)), i
            }

            function createNativeAd(e, t, n) {
                return window.criteo_prebid_native_slots = window.criteo_prebid_native_slots || {}, window.criteo_prebid_native_slots[e] = {
                    callback: n,
                    payload: t
                }, '<script type="text/javascript">\n    var win = window;\n    for (var i = 0; i < 10; ++i) {\n      win = win.parent;\n      if (win.criteo_prebid_native_slots) {\n        var responseSlot = win.criteo_prebid_native_slots["' + e + '"];\n        responseSlot.callback(responseSlot.payload);\n        break;\n      }\n    }\n  <\/script>'
            }

            function cryptoVerify(e, t, n) {
                var r = new _jsencrypt2.default;
                return r.setPublicKey(e), r.verify(n, t, _sha2.default)
            }

            function validateFastBid(e) {
                var t = e.indexOf("\n"),
                    n = e.substr(0, t).trim();
                if ("// Hash: " !== n.substr(0, 9)) return utils.logWarn("No hash found in FastBid"), !1;
                var r = n.substr(9),
                    i = e.substr(t + 1);
                try {
                    return cryptoVerify(FAST_BID_PUBKEY, r, i)
                } catch (e) {
                    return void utils.logWarn("Failed to verify Criteo FastBid")
                }
            }

            function tryGetCriteoFastBid() {
                try {
                    var fastBid = localStorage.getItem("criteo_fast_bid");
                    null !== fastBid && (!1 === validateFastBid(fastBid) ? (utils.logWarn("Invalid Criteo FastBid found"), localStorage.removeItem("criteo_fast_bid")) : (utils.logInfo("Using Criteo FastBid"), eval(fastBid)))
                } catch (e) {}
            }(0, _bidderFactory.registerBidder)(spec)
        },
        216: function(e, t, n) {
            ! function(e) {
                "use strict";
                var t = "0123456789abcdefghijklmnopqrstuvwxyz";

                function n(e) {
                    return t.charAt(e)
                }

                function r(e, t) {
                    return e & t
                }

                function i(e, t) {
                    return e | t
                }

                function o(e, t) {
                    return e ^ t
                }

                function s(e, t) {
                    return e & ~t
                }

                function a(e) {
                    if (0 == e) return -1;
                    var t = 0;
                    return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
                }

                function u(e) {
                    for (var t = 0; 0 != e;) e &= e - 1, ++t;
                    return t
                }
                var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

                function d(e) {
                    var t, n, r = "";
                    for (t = 0; t + 3 <= e.length; t += 3) n = parseInt(e.substring(t, t + 3), 16), r += c.charAt(n >> 6) + c.charAt(63 & n);
                    for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), r += c.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), r += c.charAt(n >> 2) + c.charAt((3 & n) << 4)); 0 < (3 & r.length);) r += "=";
                    return r
                }

                function l(e) {
                    var t, r = "",
                        i = 0,
                        o = 0;
                    for (t = 0; t < e.length && "=" != e.charAt(t); ++t) {
                        var s = c.indexOf(e.charAt(t));
                        s < 0 || (i = 0 == i ? (r += n(s >> 2), o = 3 & s, 1) : 1 == i ? (r += n(o << 2 | s >> 4), o = 15 & s, 2) : 2 == i ? (r += n(o), r += n(s >> 2), o = 3 & s, 3) : (r += n(o << 2 | s >> 4), r += n(15 & s), 0))
                    }
                    return 1 == i && (r += n(o << 2)), r
                }
                var f, p, h = function(e, t) {
                        return (h = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                            })(e, t)
                    },
                    g = {
                        decode: function(e) {
                            var t;
                            if (void 0 === p) {
                                var n = "= \f\n\r\t \u2028\u2029";
                                for (p = Object.create(null), t = 0; t < 64; ++t) p["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)] = t;
                                for (t = 0; t < n.length; ++t) p[n.charAt(t)] = -1
                            }
                            var r = [],
                                i = 0,
                                o = 0;
                            for (t = 0; t < e.length; ++t) {
                                var s = e.charAt(t);
                                if ("=" == s) break;
                                if (-1 != (s = p[s])) {
                                    if (void 0 === s) throw new Error("Illegal character at offset " + t);
                                    i |= s, 4 <= ++o ? (r[r.length] = i >> 16, r[r.length] = i >> 8 & 255, r[r.length] = 255 & i, o = i = 0) : i <<= 6
                                }
                            }
                            switch (o) {
                                case 1:
                                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                                case 2:
                                    r[r.length] = i >> 10;
                                    break;
                                case 3:
                                    r[r.length] = i >> 16, r[r.length] = i >> 8 & 255
                            }
                            return r
                        },
                        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
                        unarmor: function(e) {
                            var t = g.re.exec(e);
                            if (t)
                                if (t[1]) e = t[1];
                                else {
                                    if (!t[2]) throw new Error("RegExp out of sync");
                                    e = t[2]
                                } return g.decode(e)
                        }
                    },
                    m = 1e13,
                    y = function() {
                        function e(e) {
                            this.buf = [+e || 0]
                        }
                        return e.prototype.mulAdd = function(e, t) {
                            var n, r, i = this.buf,
                                o = i.length;
                            for (n = 0; n < o; ++n)(r = i[n] * e + t) < m ? t = 0 : r -= (t = 0 | r / m) * m, i[n] = r;
                            0 < t && (i[n] = t)
                        }, e.prototype.sub = function(e) {
                            var t, n, r = this.buf,
                                i = r.length;
                            for (t = 0; t < i; ++t) e = (n = r[t] - e) < 0 ? (n += m, 1) : 0, r[t] = n;
                            for (; 0 === r[r.length - 1];) r.pop()
                        }, e.prototype.toString = function(e) {
                            if (10 != (e || 10)) throw new Error("only base 10 is supported");
                            for (var t = this.buf, n = t[t.length - 1].toString(), r = t.length - 2; 0 <= r; --r) n += (m + t[r]).toString().substring(1);
                            return n
                        }, e.prototype.valueOf = function() {
                            for (var e = this.buf, t = 0, n = e.length - 1; 0 <= n; --n) t = t * m + e[n];
                            return t
                        }, e.prototype.simplify = function() {
                            var e = this.buf;
                            return 1 == e.length ? e[0] : this
                        }, e
                    }(),
                    v = "…",
                    b = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
                    _ = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

                function S(e, t) {
                    return e.length > t && (e = e.substring(0, t) + v), e
                }
                var w, T = function() {
                        function e(t, n) {
                            this.hexDigits = "0123456789ABCDEF", this.pos = t instanceof e ? (this.enc = t.enc, t.pos) : (this.enc = t, n)
                        }
                        return e.prototype.get = function(e) {
                            if (void 0 === e && (e = this.pos++), e >= this.enc.length) throw new Error("Requesting byte offset " + e + " on a stream of length " + this.enc.length);
                            return "string" == typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e]
                        }, e.prototype.hexByte = function(e) {
                            return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e)
                        }, e.prototype.hexDump = function(e, t, n) {
                            for (var r = "", i = e; i < t; ++i)
                                if (r += this.hexByte(this.get(i)), !0 !== n) switch (15 & i) {
                                    case 7:
                                        r += "  ";
                                        break;
                                    case 15:
                                        r += "\n";
                                        break;
                                    default:
                                        r += " "
                                }
                            return r
                        }, e.prototype.isASCII = function(e, t) {
                            for (var n = e; n < t; ++n) {
                                var r = this.get(n);
                                if (r < 32 || 176 < r) return !1
                            }
                            return !0
                        }, e.prototype.parseStringISO = function(e, t) {
                            for (var n = "", r = e; r < t; ++r) n += String.fromCharCode(this.get(r));
                            return n
                        }, e.prototype.parseStringUTF = function(e, t) {
                            for (var n = "", r = e; r < t;) {
                                var i = this.get(r++);
                                n += i < 128 ? String.fromCharCode(i) : 191 < i && i < 224 ? String.fromCharCode((31 & i) << 6 | 63 & this.get(r++)) : String.fromCharCode((15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++))
                            }
                            return n
                        }, e.prototype.parseStringBMP = function(e, t) {
                            for (var n, r, i = "", o = e; o < t;) n = this.get(o++), r = this.get(o++), i += String.fromCharCode(n << 8 | r);
                            return i
                        }, e.prototype.parseTime = function(e, t, n) {
                            var r = this.parseStringISO(e, t),
                                i = (n ? b : _).exec(r);
                            return i ? (n && (i[1] = +i[1], i[1] += +i[1] < 70 ? 2e3 : 1900), r = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4], i[5] && (r += ":" + i[5], i[6] && (r += ":" + i[6], i[7] && (r += "." + i[7]))), i[8] && (r += " UTC", "Z" != i[8] && (r += i[8], i[9] && (r += ":" + i[9]))), r) : "Unrecognized time: " + r
                        }, e.prototype.parseInteger = function(e, t) {
                            for (var n, r = this.get(e), i = 127 < r, o = i ? 255 : 0, s = ""; r == o && ++e < t;) r = this.get(e);
                            if (0 == (n = t - e)) return i ? -1 : 0;
                            if (4 < n) {
                                for (s = r, n <<= 3; 0 == (128 & (+s ^ o));) s = +s << 1, --n;
                                s = "(" + n + " bit)\n"
                            }
                            i && (r -= 256);
                            for (var a = new y(r), u = e + 1; u < t; ++u) a.mulAdd(256, this.get(u));
                            return s + a.toString()
                        }, e.prototype.parseBitString = function(e, t, n) {
                            for (var r = this.get(e), i = "(" + ((t - e - 1 << 3) - r) + " bit)\n", o = "", s = e + 1; s < t; ++s) {
                                for (var a = this.get(s), u = s == t - 1 ? r : 0, c = 7; u <= c; --c) o += a >> c & 1 ? "1" : "0";
                                if (o.length > n) return i + S(o, n)
                            }
                            return i + o
                        }, e.prototype.parseOctetString = function(e, t, n) {
                            if (this.isASCII(e, t)) return S(this.parseStringISO(e, t), n);
                            var r = t - e,
                                i = "(" + r + " byte)\n";
                            (n /= 2) < r && (t = e + n);
                            for (var o = e; o < t; ++o) i += this.hexByte(this.get(o));
                            return n < r && (i += v), i
                        }, e.prototype.parseOID = function(e, t, n) {
                            for (var r = "", i = new y, o = 0, s = e; s < t; ++s) {
                                var a = this.get(s);
                                if (i.mulAdd(128, 127 & a), o += 7, !(128 & a)) {
                                    if ("" === r)
                                        if ((i = i.simplify()) instanceof y) i.sub(80), r = "2." + i.toString();
                                        else {
                                            var u = i < 80 ? i < 40 ? 0 : 1 : 2;
                                            r = u + "." + (i - 40 * u)
                                        }
                                    else r += "." + i.toString();
                                    if (r.length > n) return S(r, n);
                                    i = new y, o = 0
                                }
                            }
                            return 0 < o && (r += ".incomplete"), r
                        }, e
                    }(),
                    E = function() {
                        function e(e, t, n, r, i) {
                            if (!(r instanceof A)) throw new Error("Invalid tag value.");
                            this.stream = e, this.header = t, this.length = n, this.tag = r, this.sub = i
                        }
                        return e.prototype.typeName = function() {
                            switch (this.tag.tagClass) {
                                case 0:
                                    switch (this.tag.tagNumber) {
                                        case 0:
                                            return "EOC";
                                        case 1:
                                            return "BOOLEAN";
                                        case 2:
                                            return "INTEGER";
                                        case 3:
                                            return "BIT_STRING";
                                        case 4:
                                            return "OCTET_STRING";
                                        case 5:
                                            return "NULL";
                                        case 6:
                                            return "OBJECT_IDENTIFIER";
                                        case 7:
                                            return "ObjectDescriptor";
                                        case 8:
                                            return "EXTERNAL";
                                        case 9:
                                            return "REAL";
                                        case 10:
                                            return "ENUMERATED";
                                        case 11:
                                            return "EMBEDDED_PDV";
                                        case 12:
                                            return "UTF8String";
                                        case 16:
                                            return "SEQUENCE";
                                        case 17:
                                            return "SET";
                                        case 18:
                                            return "NumericString";
                                        case 19:
                                            return "PrintableString";
                                        case 20:
                                            return "TeletexString";
                                        case 21:
                                            return "VideotexString";
                                        case 22:
                                            return "IA5String";
                                        case 23:
                                            return "UTCTime";
                                        case 24:
                                            return "GeneralizedTime";
                                        case 25:
                                            return "GraphicString";
                                        case 26:
                                            return "VisibleString";
                                        case 27:
                                            return "GeneralString";
                                        case 28:
                                            return "UniversalString";
                                        case 30:
                                            return "BMPString"
                                    }
                                    return "Universal_" + this.tag.tagNumber.toString();
                                case 1:
                                    return "Application_" + this.tag.tagNumber.toString();
                                case 2:
                                    return "[" + this.tag.tagNumber.toString() + "]";
                                case 3:
                                    return "Private_" + this.tag.tagNumber.toString()
                            }
                        }, e.prototype.content = function(e) {
                            if (void 0 === this.tag) return null;
                            void 0 === e && (e = 1 / 0);
                            var t = this.posContent(),
                                n = Math.abs(this.length);
                            if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + n, e);
                            switch (this.tag.tagNumber) {
                                case 1:
                                    return 0 === this.stream.get(t) ? "false" : "true";
                                case 2:
                                    return this.stream.parseInteger(t, t + n);
                                case 3:
                                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(t, t + n, e);
                                case 4:
                                    return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(t, t + n, e);
                                case 6:
                                    return this.stream.parseOID(t, t + n, e);
                                case 16:
                                case 17:
                                    return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                                case 12:
                                    return S(this.stream.parseStringUTF(t, t + n), e);
                                case 18:
                                case 19:
                                case 20:
                                case 21:
                                case 22:
                                case 26:
                                    return S(this.stream.parseStringISO(t, t + n), e);
                                case 30:
                                    return S(this.stream.parseStringBMP(t, t + n), e);
                                case 23:
                                case 24:
                                    return this.stream.parseTime(t, t + n, 23 == this.tag.tagNumber)
                            }
                            return null
                        }, e.prototype.toString = function() {
                            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
                        }, e.prototype.toPrettyString = function(e) {
                            void 0 === e && (e = "");
                            var t = e + this.typeName() + " @" + this.stream.pos;
                            if (0 <= this.length && (t += "+"), t += this.length, this.tag.tagConstructed ? t += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (t += " (encapsulates)"), t += "\n", null !== this.sub) {
                                e += "  ";
                                for (var n = 0, r = this.sub.length; n < r; ++n) t += this.sub[n].toPrettyString(e)
                            }
                            return t
                        }, e.prototype.posStart = function() {
                            return this.stream.pos
                        }, e.prototype.posContent = function() {
                            return this.stream.pos + this.header
                        }, e.prototype.posEnd = function() {
                            return this.stream.pos + this.header + Math.abs(this.length)
                        }, e.prototype.toHexString = function() {
                            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
                        }, e.decodeLength = function(e) {
                            var t = e.get(),
                                n = 127 & t;
                            if (n == t) return n;
                            if (6 < n) throw new Error("Length over 48 bits not supported at position " + (e.pos - 1));
                            if (0 === n) return null;
                            for (var r = t = 0; r < n; ++r) t = 256 * t + e.get();
                            return t
                        }, e.prototype.getHexStringValue = function() {
                            var e = this.toHexString(),
                                t = 2 * this.header,
                                n = 2 * this.length;
                            return e.substr(t, n)
                        }, e.decode = function(t) {
                            var n;
                            n = t instanceof T ? t : new T(t, 0);
                            var r = new T(n),
                                i = new A(n),
                                o = e.decodeLength(n),
                                s = n.pos,
                                a = s - r.pos,
                                u = null,
                                c = function() {
                                    var t = [];
                                    if (null !== o) {
                                        for (var r = s + o; n.pos < r;) t[t.length] = e.decode(n);
                                        if (n.pos != r) throw new Error("Content size is not correct for container starting at offset " + s)
                                    } else try {
                                        for (;;) {
                                            var i = e.decode(n);
                                            if (i.tag.isEOC()) break;
                                            t[t.length] = i
                                        }
                                        o = s - n.pos
                                    } catch (t) {
                                        throw new Error("Exception while decoding undefined length content: " + t)
                                    }
                                    return t
                                };
                            if (i.tagConstructed) u = c();
                            else if (i.isUniversal() && (3 == i.tagNumber || 4 == i.tagNumber)) try {
                                if (3 == i.tagNumber && 0 != n.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                                u = c();
                                for (var d = 0; d < u.length; ++d)
                                    if (u[d].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
                            } catch (t) {
                                u = null
                            }
                            if (null === u) {
                                if (null === o) throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                                n.pos = s + Math.abs(o)
                            }
                            return new e(r, a, o, i, u)
                        }, e
                    }(),
                    A = function() {
                        function e(e) {
                            var t = e.get();
                            if (this.tagClass = t >> 6, this.tagConstructed = 0 != (32 & t), this.tagNumber = 31 & t, 31 == this.tagNumber) {
                                for (var n = new y; t = e.get(), n.mulAdd(128, 127 & t), 128 & t;);
                                this.tagNumber = n.simplify()
                            }
                        }
                        return e.prototype.isUniversal = function() {
                            return 0 === this.tagClass
                        }, e.prototype.isEOC = function() {
                            return 0 === this.tagClass && 0 === this.tagNumber
                        }, e
                    }(),
                    I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                    O = (1 << 26) / I[I.length - 1],
                    P = function() {
                        function e(e, t, n) {
                            null != e && ("number" == typeof e ? this.fromNumber(e, t, n) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
                        }
                        return e.prototype.toString = function(e) {
                            if (this.s < 0) return "-" + this.negate().toString(e);
                            var t;
                            if (16 == e) t = 4;
                            else if (8 == e) t = 3;
                            else if (2 == e) t = 1;
                            else if (32 == e) t = 5;
                            else {
                                if (4 != e) return this.toRadix(e);
                                t = 2
                            }
                            var r, i = (1 << t) - 1,
                                o = !1,
                                s = "",
                                a = this.t,
                                u = this.DB - a * this.DB % t;
                            if (0 < a--)
                                for (u < this.DB && 0 < (r = this[a] >> u) && (o = !0, s = n(r)); 0 <= a;) u < t ? (r = (this[a] & (1 << u) - 1) << t - u, r |= this[--a] >> (u += this.DB - t)) : (r = this[a] >> (u -= t) & i, u <= 0 && (u += this.DB, --a)), 0 < r && (o = !0), o && (s += n(r));
                            return o ? s : "0"
                        }, e.prototype.negate = function() {
                            var t = B();
                            return e.ZERO.subTo(this, t), t
                        }, e.prototype.abs = function() {
                            return this.s < 0 ? this.negate() : this
                        }, e.prototype.compareTo = function(e) {
                            var t = this.s - e.s;
                            if (0 != t) return t;
                            var n = this.t;
                            if (0 != (t = n - e.t)) return this.s < 0 ? -t : t;
                            for (; 0 <= --n;)
                                if (0 != (t = this[n] - e[n])) return t;
                            return 0
                        }, e.prototype.bitLength = function() {
                            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + V(this[this.t - 1] ^ this.s & this.DM)
                        }, e.prototype.mod = function(t) {
                            var n = B();
                            return this.abs().divRemTo(t, null, n), this.s < 0 && 0 < n.compareTo(e.ZERO) && t.subTo(n, n), n
                        }, e.prototype.modPowInt = function(e, t) {
                            var n;
                            return n = e < 256 || t.isEven() ? new D(t) : new C(t), this.exp(e, n)
                        }, e.prototype.clone = function() {
                            var e = B();
                            return this.copyTo(e), e
                        }, e.prototype.intValue = function() {
                            if (this.s < 0) {
                                if (1 == this.t) return this[0] - this.DV;
                                if (0 == this.t) return -1
                            } else {
                                if (1 == this.t) return this[0];
                                if (0 == this.t) return 0
                            }
                            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                        }, e.prototype.byteValue = function() {
                            return 0 == this.t ? this.s : this[0] << 24 >> 24
                        }, e.prototype.shortValue = function() {
                            return 0 == this.t ? this.s : this[0] << 16 >> 16
                        }, e.prototype.signum = function() {
                            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                        }, e.prototype.toByteArray = function() {
                            var e = this.t,
                                t = [];
                            t[0] = this.s;
                            var n, r = this.DB - e * this.DB % 8,
                                i = 0;
                            if (0 < e--)
                                for (r < this.DB && (n = this[e] >> r) != (this.s & this.DM) >> r && (t[i++] = n | this.s << this.DB - r); 0 <= e;) r < 8 ? (n = (this[e] & (1 << r) - 1) << 8 - r, n |= this[--e] >> (r += this.DB - 8)) : (n = this[e] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --e)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (0 < i || n != this.s) && (t[i++] = n);
                            return t
                        }, e.prototype.equals = function(e) {
                            return 0 == this.compareTo(e)
                        }, e.prototype.min = function(e) {
                            return this.compareTo(e) < 0 ? this : e
                        }, e.prototype.max = function(e) {
                            return 0 < this.compareTo(e) ? this : e
                        }, e.prototype.and = function(e) {
                            var t = B();
                            return this.bitwiseTo(e, r, t), t
                        }, e.prototype.or = function(e) {
                            var t = B();
                            return this.bitwiseTo(e, i, t), t
                        }, e.prototype.xor = function(e) {
                            var t = B();
                            return this.bitwiseTo(e, o, t), t
                        }, e.prototype.andNot = function(e) {
                            var t = B();
                            return this.bitwiseTo(e, s, t), t
                        }, e.prototype.not = function() {
                            for (var e = B(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                            return e.t = this.t, e.s = ~this.s, e
                        }, e.prototype.shiftLeft = function(e) {
                            var t = B();
                            return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
                        }, e.prototype.shiftRight = function(e) {
                            var t = B();
                            return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
                        }, e.prototype.getLowestSetBit = function() {
                            for (var e = 0; e < this.t; ++e)
                                if (0 != this[e]) return e * this.DB + a(this[e]);
                            return this.s < 0 ? this.t * this.DB : -1
                        }, e.prototype.bitCount = function() {
                            for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n) e += u(this[n] ^ t);
                            return e
                        }, e.prototype.testBit = function(e) {
                            var t = Math.floor(e / this.DB);
                            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
                        }, e.prototype.setBit = function(e) {
                            return this.changeBit(e, i)
                        }, e.prototype.clearBit = function(e) {
                            return this.changeBit(e, s)
                        }, e.prototype.flipBit = function(e) {
                            return this.changeBit(e, o)
                        }, e.prototype.add = function(e) {
                            var t = B();
                            return this.addTo(e, t), t
                        }, e.prototype.subtract = function(e) {
                            var t = B();
                            return this.subTo(e, t), t
                        }, e.prototype.multiply = function(e) {
                            var t = B();
                            return this.multiplyTo(e, t), t
                        }, e.prototype.divide = function(e) {
                            var t = B();
                            return this.divRemTo(e, t, null), t
                        }, e.prototype.remainder = function(e) {
                            var t = B();
                            return this.divRemTo(e, null, t), t
                        }, e.prototype.divideAndRemainder = function(e) {
                            var t = B(),
                                n = B();
                            return this.divRemTo(e, t, n), [t, n]
                        }, e.prototype.modPow = function(e, t) {
                            var n, r, i = e.bitLength(),
                                o = q(1);
                            if (i <= 0) return o;
                            n = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, r = i < 8 ? new D(t) : t.isEven() ? new x(t) : new C(t);
                            var s = [],
                                a = 3,
                                u = n - 1,
                                c = (1 << n) - 1;
                            if (s[1] = r.convert(this), 1 < n) {
                                var d = B();
                                for (r.sqrTo(s[1], d); a <= c;) s[a] = B(), r.mulTo(d, s[a - 2], s[a]), a += 2
                            }
                            var l, f, p = e.t - 1,
                                h = !0,
                                g = B();
                            for (i = V(e[p]) - 1; 0 <= p;) {
                                for (u <= i ? l = e[p] >> i - u & c : (l = (e[p] & (1 << i + 1) - 1) << u - i, 0 < p && (l |= e[p - 1] >> this.DB + i - u)), a = n; 0 == (1 & l);) l >>= 1, --a;
                                if ((i -= a) < 0 && (i += this.DB, --p), h) s[l].copyTo(o), h = !1;
                                else {
                                    for (; 1 < a;) r.sqrTo(o, g), r.sqrTo(g, o), a -= 2;
                                    0 < a ? r.sqrTo(o, g) : (f = o, o = g, g = f), r.mulTo(g, s[l], o)
                                }
                                for (; 0 <= p && 0 == (e[p] & 1 << i);) r.sqrTo(o, g), f = o, o = g, g = f, --i < 0 && (i = this.DB - 1, --p)
                            }
                            return r.revert(o)
                        }, e.prototype.modInverse = function(t) {
                            var n = t.isEven();
                            if (this.isEven() && n || 0 == t.signum()) return e.ZERO;
                            for (var r = t.clone(), i = this.clone(), o = q(1), s = q(0), a = q(0), u = q(1); 0 != r.signum();) {
                                for (; r.isEven();) r.rShiftTo(1, r), n ? (o.isEven() && s.isEven() || (o.addTo(this, o), s.subTo(t, s)), o.rShiftTo(1, o)) : s.isEven() || s.subTo(t, s), s.rShiftTo(1, s);
                                for (; i.isEven();) i.rShiftTo(1, i), n ? (a.isEven() && u.isEven() || (a.addTo(this, a), u.subTo(t, u)), a.rShiftTo(1, a)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                                0 <= r.compareTo(i) ? (r.subTo(i, r), n && o.subTo(a, o), s.subTo(u, s)) : (i.subTo(r, i), n && a.subTo(o, a), u.subTo(s, u))
                            }
                            return 0 != i.compareTo(e.ONE) ? e.ZERO : 0 <= u.compareTo(t) ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
                        }, e.prototype.pow = function(e) {
                            return this.exp(e, new R)
                        }, e.prototype.gcd = function(e) {
                            var t = this.s < 0 ? this.negate() : this.clone(),
                                n = e.s < 0 ? e.negate() : e.clone();
                            if (t.compareTo(n) < 0) {
                                var r = t;
                                t = n, n = r
                            }
                            var i = t.getLowestSetBit(),
                                o = n.getLowestSetBit();
                            if (o < 0) return t;
                            for (i < o && (o = i), 0 < o && (t.rShiftTo(o, t), n.rShiftTo(o, n)); 0 < t.signum();) 0 < (i = t.getLowestSetBit()) && t.rShiftTo(i, t), 0 < (i = n.getLowestSetBit()) && n.rShiftTo(i, n), 0 <= t.compareTo(n) ? (t.subTo(n, t), t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n));
                            return 0 < o && n.lShiftTo(o, n), n
                        }, e.prototype.isProbablePrime = function(e) {
                            var t, n = this.abs();
                            if (1 == n.t && n[0] <= I[I.length - 1]) {
                                for (t = 0; t < I.length; ++t)
                                    if (n[0] == I[t]) return !0;
                                return !1
                            }
                            if (n.isEven()) return !1;
                            for (t = 1; t < I.length;) {
                                for (var r = I[t], i = t + 1; i < I.length && r < O;) r *= I[i++];
                                for (r = n.modInt(r); t < i;)
                                    if (r % I[t++] == 0) return !1
                            }
                            return n.millerRabin(e)
                        }, e.prototype.copyTo = function(e) {
                            for (var t = this.t - 1; 0 <= t; --t) e[t] = this[t];
                            e.t = this.t, e.s = this.s
                        }, e.prototype.fromInt = function(e) {
                            this.t = 1, this.s = e < 0 ? -1 : 0, 0 < e ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
                        }, e.prototype.fromString = function(t, n) {
                            var r;
                            if (16 == n) r = 4;
                            else if (8 == n) r = 3;
                            else if (256 == n) r = 8;
                            else if (2 == n) r = 1;
                            else if (32 == n) r = 5;
                            else {
                                if (4 != n) return void this.fromRadix(t, n);
                                r = 2
                            }
                            this.t = 0, this.s = 0;
                            for (var i = t.length, o = !1, s = 0; 0 <= --i;) {
                                var a = 8 == r ? 255 & +t[i] : M(t, i);
                                a < 0 ? "-" == t.charAt(i) && (o = !0) : (o = !1, 0 == s ? this[this.t++] = a : s + r > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += r) >= this.DB && (s -= this.DB))
                            }
                            8 == r && 0 != (128 & +t[0]) && (this.s = -1, 0 < s && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), o && e.ZERO.subTo(this, this)
                        }, e.prototype.clamp = function() {
                            for (var e = this.s & this.DM; 0 < this.t && this[this.t - 1] == e;) --this.t
                        }, e.prototype.dlShiftTo = function(e, t) {
                            var n;
                            for (n = this.t - 1; 0 <= n; --n) t[n + e] = this[n];
                            for (n = e - 1; 0 <= n; --n) t[n] = 0;
                            t.t = this.t + e, t.s = this.s
                        }, e.prototype.drShiftTo = function(e, t) {
                            for (var n = e; n < this.t; ++n) t[n - e] = this[n];
                            t.t = Math.max(this.t - e, 0), t.s = this.s
                        }, e.prototype.lShiftTo = function(e, t) {
                            for (var n = e % this.DB, r = this.DB - n, i = (1 << r) - 1, o = Math.floor(e / this.DB), s = this.s << n & this.DM, a = this.t - 1; 0 <= a; --a) t[a + o + 1] = this[a] >> r | s, s = (this[a] & i) << n;
                            for (a = o - 1; 0 <= a; --a) t[a] = 0;
                            t[o] = s, t.t = this.t + o + 1, t.s = this.s, t.clamp()
                        }, e.prototype.rShiftTo = function(e, t) {
                            t.s = this.s;
                            var n = Math.floor(e / this.DB);
                            if (n >= this.t) t.t = 0;
                            else {
                                var r = e % this.DB,
                                    i = this.DB - r,
                                    o = (1 << r) - 1;
                                t[0] = this[n] >> r;
                                for (var s = n + 1; s < this.t; ++s) t[s - n - 1] |= (this[s] & o) << i, t[s - n] = this[s] >> r;
                                0 < r && (t[this.t - n - 1] |= (this.s & o) << i), t.t = this.t - n, t.clamp()
                            }
                        }, e.prototype.subTo = function(e, t) {
                            for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
                            if (e.t < this.t) {
                                for (r -= e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                                r += this.s
                            } else {
                                for (r += this.s; n < e.t;) r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
                                r -= e.s
                            }
                            t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : 0 < r && (t[n++] = r), t.t = n, t.clamp()
                        }, e.prototype.multiplyTo = function(t, n) {
                            var r = this.abs(),
                                i = t.abs(),
                                o = r.t;
                            for (n.t = o + i.t; 0 <= --o;) n[o] = 0;
                            for (o = 0; o < i.t; ++o) n[o + r.t] = r.am(0, i[o], n, o, 0, r.t);
                            n.s = 0, n.clamp(), this.s != t.s && e.ZERO.subTo(n, n)
                        }, e.prototype.squareTo = function(e) {
                            for (var t = this.abs(), n = e.t = 2 * t.t; 0 <= --n;) e[n] = 0;
                            for (n = 0; n < t.t - 1; ++n) {
                                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
                            }
                            0 < e.t && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
                        }, e.prototype.divRemTo = function(t, n, r) {
                            var i = t.abs();
                            if (!(i.t <= 0)) {
                                var o = this.abs();
                                if (o.t < i.t) return null != n && n.fromInt(0), void(null != r && this.copyTo(r));
                                null == r && (r = B());
                                var s = B(),
                                    a = this.s,
                                    u = t.s,
                                    c = this.DB - V(i[i.t - 1]);
                                0 < c ? (i.lShiftTo(c, s), o.lShiftTo(c, r)) : (i.copyTo(s), o.copyTo(r));
                                var d = s.t,
                                    l = s[d - 1];
                                if (0 != l) {
                                    var f = l * (1 << this.F1) + (1 < d ? s[d - 2] >> this.F2 : 0),
                                        p = this.FV / f,
                                        h = (1 << this.F1) / f,
                                        g = 1 << this.F2,
                                        m = r.t,
                                        y = m - d,
                                        v = null == n ? B() : n;
                                    for (s.dlShiftTo(y, v), 0 <= r.compareTo(v) && (r[r.t++] = 1, r.subTo(v, r)), e.ONE.dlShiftTo(d, v), v.subTo(s, s); s.t < d;) s[s.t++] = 0;
                                    for (; 0 <= --y;) {
                                        var b = r[--m] == l ? this.DM : Math.floor(r[m] * p + (r[m - 1] + g) * h);
                                        if ((r[m] += s.am(0, b, r, y, 0, d)) < b)
                                            for (s.dlShiftTo(y, v), r.subTo(v, r); r[m] < --b;) r.subTo(v, r)
                                    }
                                    null != n && (r.drShiftTo(d, n), a != u && e.ZERO.subTo(n, n)), r.t = d, r.clamp(), 0 < c && r.rShiftTo(c, r), a < 0 && e.ZERO.subTo(r, r)
                                }
                            }
                        }, e.prototype.invDigit = function() {
                            if (this.t < 1) return 0;
                            var e = this[0];
                            if (0 == (1 & e)) return 0;
                            var t = 3 & e;
                            return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) ? this.DV - t : -t
                        }, e.prototype.isEven = function() {
                            return 0 == (0 < this.t ? 1 & this[0] : this.s)
                        }, e.prototype.exp = function(t, n) {
                            if (4294967295 < t || t < 1) return e.ONE;
                            var r = B(),
                                i = B(),
                                o = n.convert(this),
                                s = V(t) - 1;
                            for (o.copyTo(r); 0 <= --s;)
                                if (n.sqrTo(r, i), 0 < (t & 1 << s)) n.mulTo(i, o, r);
                                else {
                                    var a = r;
                                    r = i, i = a
                                } return n.revert(r)
                        }, e.prototype.chunkSize = function(e) {
                            return Math.floor(Math.LN2 * this.DB / Math.log(e))
                        }, e.prototype.toRadix = function(e) {
                            if (null == e && (e = 10), 0 == this.signum() || e < 2 || 36 < e) return "0";
                            var t = this.chunkSize(e),
                                n = Math.pow(e, t),
                                r = q(n),
                                i = B(),
                                o = B(),
                                s = "";
                            for (this.divRemTo(r, i, o); 0 < i.signum();) s = (n + o.intValue()).toString(e).substr(1) + s, i.divRemTo(r, i, o);
                            return o.intValue().toString(e) + s
                        }, e.prototype.fromRadix = function(t, n) {
                            this.fromInt(0), null == n && (n = 10);
                            for (var r = this.chunkSize(n), i = Math.pow(n, r), o = !1, s = 0, a = 0, u = 0; u < t.length; ++u) {
                                var c = M(t, u);
                                c < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (o = !0) : (a = n * a + c, ++s >= r && (this.dMultiply(i), this.dAddOffset(a, 0), a = s = 0))
                            }
                            0 < s && (this.dMultiply(Math.pow(n, s)), this.dAddOffset(a, 0)), o && e.ZERO.subTo(this, this)
                        }, e.prototype.fromNumber = function(t, n, r) {
                            if ("number" == typeof n)
                                if (t < 2) this.fromInt(1);
                                else
                                    for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), i, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
                            else {
                                var o = [],
                                    s = 7 & t;
                                o.length = 1 + (t >> 3), n.nextBytes(o), 0 < s ? o[0] &= (1 << s) - 1 : o[0] = 0, this.fromString(o, 256)
                            }
                        }, e.prototype.bitwiseTo = function(e, t, n) {
                            var r, i, o = Math.min(e.t, this.t);
                            for (r = 0; r < o; ++r) n[r] = t(this[r], e[r]);
                            if (e.t < this.t) {
                                for (i = e.s & this.DM, r = o; r < this.t; ++r) n[r] = t(this[r], i);
                                n.t = this.t
                            } else {
                                for (i = this.s & this.DM, r = o; r < e.t; ++r) n[r] = t(i, e[r]);
                                n.t = e.t
                            }
                            n.s = t(this.s, e.s), n.clamp()
                        }, e.prototype.changeBit = function(t, n) {
                            var r = e.ONE.shiftLeft(t);
                            return this.bitwiseTo(r, n, r), r
                        }, e.prototype.addTo = function(e, t) {
                            for (var n = 0, r = 0, i = Math.min(e.t, this.t); n < i;) r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB;
                            if (e.t < this.t) {
                                for (r += e.s; n < this.t;) r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                                r += this.s
                            } else {
                                for (r += this.s; n < e.t;) r += e[n], t[n++] = r & this.DM, r >>= this.DB;
                                r += e.s
                            }
                            t.s = r < 0 ? -1 : 0, 0 < r ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp()
                        }, e.prototype.dMultiply = function(e) {
                            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
                        }, e.prototype.dAddOffset = function(e, t) {
                            if (0 != e) {
                                for (; this.t <= t;) this[this.t++] = 0;
                                for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
                            }
                        }, e.prototype.multiplyLowerTo = function(e, t, n) {
                            var r = Math.min(this.t + e.t, t);
                            for (n.s = 0, n.t = r; 0 < r;) n[--r] = 0;
                            for (var i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
                            for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r);
                            n.clamp()
                        }, e.prototype.multiplyUpperTo = function(e, t, n) {
                            --t;
                            var r = n.t = this.t + e.t - t;
                            for (n.s = 0; 0 <= --r;) n[r] = 0;
                            for (r = Math.max(t - this.t, 0); r < e.t; ++r) n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
                            n.clamp(), n.drShiftTo(1, n)
                        }, e.prototype.modInt = function(e) {
                            if (e <= 0) return 0;
                            var t = this.DV % e,
                                n = this.s < 0 ? e - 1 : 0;
                            if (0 < this.t)
                                if (0 == t) n = this[0] % e;
                                else
                                    for (var r = this.t - 1; 0 <= r; --r) n = (t * n + this[r]) % e;
                            return n
                        }, e.prototype.millerRabin = function(t) {
                            var n = this.subtract(e.ONE),
                                r = n.getLowestSetBit();
                            if (r <= 0) return !1;
                            var i = n.shiftRight(r);
                            I.length < (t = t + 1 >> 1) && (t = I.length);
                            for (var o = B(), s = 0; s < t; ++s) {
                                o.fromInt(I[Math.floor(Math.random() * I.length)]);
                                var a = o.modPow(i, this);
                                if (0 != a.compareTo(e.ONE) && 0 != a.compareTo(n)) {
                                    for (var u = 1; u++ < r && 0 != a.compareTo(n);)
                                        if (0 == (a = a.modPowInt(2, this)).compareTo(e.ONE)) return !1;
                                    if (0 != a.compareTo(n)) return !1
                                }
                            }
                            return !0
                        }, e.prototype.square = function() {
                            var e = B();
                            return this.squareTo(e), e
                        }, e.prototype.gcda = function(e, t) {
                            var n = this.s < 0 ? this.negate() : this.clone(),
                                r = e.s < 0 ? e.negate() : e.clone();
                            if (n.compareTo(r) < 0) {
                                var i = n;
                                n = r, r = i
                            }
                            var o = n.getLowestSetBit(),
                                s = r.getLowestSetBit();
                            if (s < 0) t(n);
                            else {
                                o < s && (s = o), 0 < s && (n.rShiftTo(s, n), r.rShiftTo(s, r));
                                var a = function() {
                                    0 < (o = n.getLowestSetBit()) && n.rShiftTo(o, n), 0 < (o = r.getLowestSetBit()) && r.rShiftTo(o, r), 0 <= n.compareTo(r) ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r)), 0 < n.signum() ? setTimeout(a, 0) : (0 < s && r.lShiftTo(s, r), setTimeout(function() {
                                        t(r)
                                    }, 0))
                                };
                                setTimeout(a, 10)
                            }
                        }, e.prototype.fromNumberAsync = function(t, n, r, o) {
                            if ("number" == typeof n)
                                if (t < 2) this.fromInt(1);
                                else {
                                    this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), i, this), this.isEven() && this.dAddOffset(1, 0);
                                    var s = this,
                                        a = function() {
                                            s.dAddOffset(2, 0), s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s), s.isProbablePrime(n) ? setTimeout(function() {
                                                o()
                                            }, 0) : setTimeout(a, 0)
                                        };
                                    setTimeout(a, 0)
                                }
                            else {
                                var u = [],
                                    c = 7 & t;
                                u.length = 1 + (t >> 3), n.nextBytes(u), 0 < c ? u[0] &= (1 << c) - 1 : u[0] = 0, this.fromString(u, 256)
                            }
                        }, e
                    }(),
                    R = function() {
                        function e() {}
                        return e.prototype.convert = function(e) {
                            return e
                        }, e.prototype.revert = function(e) {
                            return e
                        }, e.prototype.mulTo = function(e, t, n) {
                            e.multiplyTo(t, n)
                        }, e.prototype.sqrTo = function(e, t) {
                            e.squareTo(t)
                        }, e
                    }(),
                    D = function() {
                        function e(e) {
                            this.m = e
                        }
                        return e.prototype.convert = function(e) {
                            return e.s < 0 || 0 <= e.compareTo(this.m) ? e.mod(this.m) : e
                        }, e.prototype.revert = function(e) {
                            return e
                        }, e.prototype.reduce = function(e) {
                            e.divRemTo(this.m, null, e)
                        }, e.prototype.mulTo = function(e, t, n) {
                            e.multiplyTo(t, n), this.reduce(n)
                        }, e.prototype.sqrTo = function(e, t) {
                            e.squareTo(t), this.reduce(t)
                        }, e
                    }(),
                    C = function() {
                        function e(e) {
                            this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
                        }
                        return e.prototype.convert = function(e) {
                            var t = B();
                            return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && 0 < t.compareTo(P.ZERO) && this.m.subTo(t, t), t
                        }, e.prototype.revert = function(e) {
                            var t = B();
                            return e.copyTo(t), this.reduce(t), t
                        }, e.prototype.reduce = function(e) {
                            for (; e.t <= this.mt2;) e[e.t++] = 0;
                            for (var t = 0; t < this.m.t; ++t) {
                                var n = 32767 & e[t],
                                    r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                                for (e[n = t + this.m.t] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;) e[n] -= e.DV, e[++n]++
                            }
                            e.clamp(), e.drShiftTo(this.m.t, e), 0 <= e.compareTo(this.m) && e.subTo(this.m, e)
                        }, e.prototype.mulTo = function(e, t, n) {
                            e.multiplyTo(t, n), this.reduce(n)
                        }, e.prototype.sqrTo = function(e, t) {
                            e.squareTo(t), this.reduce(t)
                        }, e
                    }(),
                    x = function() {
                        function e(e) {
                            this.m = e, this.r2 = B(), this.q3 = B(), P.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e)
                        }
                        return e.prototype.convert = function(e) {
                            if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                            if (e.compareTo(this.m) < 0) return e;
                            var t = B();
                            return e.copyTo(t), this.reduce(t), t
                        }, e.prototype.revert = function(e) {
                            return e
                        }, e.prototype.reduce = function(e) {
                            for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
                            for (e.subTo(this.r2, e); 0 <= e.compareTo(this.m);) e.subTo(this.m, e)
                        }, e.prototype.mulTo = function(e, t, n) {
                            e.multiplyTo(t, n), this.reduce(n)
                        }, e.prototype.sqrTo = function(e, t) {
                            e.squareTo(t), this.reduce(t)
                        }, e
                    }();

                function B() {
                    return new P(null)
                }

                function k(e, t) {
                    return new P(e, t)
                }
                w = "Microsoft Internet Explorer" == navigator.appName ? (P.prototype.am = function(e, t, n, r, i, o) {
                    for (var s = 32767 & t, a = t >> 15; 0 <= --o;) {
                        var u = 32767 & this[e],
                            c = this[e++] >> 15,
                            d = a * u + c * s;
                        i = ((u = s * u + ((32767 & d) << 15) + n[r] + (1073741823 & i)) >>> 30) + (d >>> 15) + a * c + (i >>> 30), n[r++] = 1073741823 & u
                    }
                    return i
                }, 30) : "Netscape" != navigator.appName ? (P.prototype.am = function(e, t, n, r, i, o) {
                    for (; 0 <= --o;) {
                        var s = t * this[e++] + n[r] + i;
                        i = Math.floor(s / 67108864), n[r++] = 67108863 & s
                    }
                    return i
                }, 26) : (P.prototype.am = function(e, t, n, r, i, o) {
                    for (var s = 16383 & t, a = t >> 14; 0 <= --o;) {
                        var u = 16383 & this[e],
                            c = this[e++] >> 14,
                            d = a * u + c * s;
                        i = ((u = s * u + ((16383 & d) << 14) + n[r] + i) >> 28) + (d >> 14) + a * c, n[r++] = 268435455 & u
                    }
                    return i
                }, 28), P.prototype.DB = w, P.prototype.DM = (1 << w) - 1, P.prototype.DV = 1 << w, P.prototype.FV = Math.pow(2, 52), P.prototype.F1 = 52 - w, P.prototype.F2 = 2 * w - 52;
                var j, N, U = [];
                for (j = "0".charCodeAt(0), N = 0; N <= 9; ++N) U[j++] = N;
                for (j = "a".charCodeAt(0), N = 10; N < 36; ++N) U[j++] = N;
                for (j = "A".charCodeAt(0), N = 10; N < 36; ++N) U[j++] = N;

                function M(e, t) {
                    var n = U[e.charCodeAt(t)];
                    return null == n ? -1 : n
                }

                function q(e) {
                    var t = B();
                    return t.fromInt(e), t
                }

                function V(e) {
                    var t, n = 1;
                    return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n
                }
                P.ZERO = q(0), P.ONE = q(1);
                var z, F, L = function() {
                        function e() {
                            this.i = 0, this.j = 0, this.S = []
                        }
                        return e.prototype.init = function(e) {
                            var t, n, r;
                            for (t = 0; t < 256; ++t) this.S[t] = t;
                            for (t = n = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], this.S[t] = this.S[n], this.S[n] = r;
                            this.i = 0, this.j = 0
                        }, e.prototype.next = function() {
                            var e;
                            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
                        }, e
                    }(),
                    G = 256,
                    H = null;
                if (null == H) {
                    H = [];
                    var W = void(F = 0);
                    if (window.crypto && window.crypto.getRandomValues) {
                        var K = new Uint32Array(256);
                        for (window.crypto.getRandomValues(K), W = 0; W < K.length; ++W) H[F++] = 255 & K[W]
                    }
                    var Y = function(e) {
                        if (this.count = this.count || 0, 256 <= this.count || G <= F) window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y);
                        else try {
                            var t = e.x + e.y;
                            H[F++] = 255 & t, this.count += 1
                        } catch (e) {}
                    };
                    window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y)
                }

                function J() {
                    if (null == z) {
                        for (z = new L; F < G;) {
                            var e = Math.floor(65536 * Math.random());
                            H[F++] = 255 & e
                        }
                        for (z.init(H), F = 0; F < H.length; ++F) H[F] = 0;
                        F = 0
                    }
                    return z.next()
                }
                var Q = function() {
                        function e() {}
                        return e.prototype.nextBytes = function(e) {
                            for (var t = 0; t < e.length; ++t) e[t] = J()
                        }, e
                    }(),
                    Z = function() {
                        function e() {
                            this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
                        }
                        return e.prototype.doPublic = function(e) {
                            return e.modPowInt(this.e, this.n)
                        }, e.prototype.doPrivate = function(e) {
                            if (null == this.p || null == this.q) return e.modPow(this.d, this.n);
                            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), n = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(n) < 0;) t = t.add(this.p);
                            return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
                        }, e.prototype.setPublic = function(e, t) {
                            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = k(e, 16), this.e = parseInt(t, 16)) : console.error("Invalid RSA public key")
                        }, e.prototype.encrypt = function(e) {
                            var t = function(e, t) {
                                if (t < e.length + 11) return console.error("Message too long for RSA"), null;
                                for (var n = [], r = e.length - 1; 0 <= r && 0 < t;) {
                                    var i = e.charCodeAt(r--);
                                    n[--t] = i < 128 ? i : 127 < i && i < 2048 ? (n[--t] = 63 & i | 128, i >> 6 | 192) : (n[--t] = 63 & i | 128, n[--t] = i >> 6 & 63 | 128, i >> 12 | 224)
                                }
                                n[--t] = 0;
                                for (var o = new Q, s = []; 2 < t;) {
                                    for (s[0] = 0; 0 == s[0];) o.nextBytes(s);
                                    n[--t] = s[0]
                                }
                                return n[--t] = 2, n[--t] = 0, new P(n)
                            }(e, this.n.bitLength() + 7 >> 3);
                            if (null == t) return null;
                            var n = this.doPublic(t);
                            if (null == n) return null;
                            var r = n.toString(16);
                            return 0 == (1 & r.length) ? r : "0" + r
                        }, e.prototype.setPrivate = function(e, t, n) {
                            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = k(e, 16), this.e = parseInt(t, 16), this.d = k(n, 16)) : console.error("Invalid RSA private key")
                        }, e.prototype.setPrivateEx = function(e, t, n, r, i, o, s, a) {
                            null != e && null != t && 0 < e.length && 0 < t.length ? (this.n = k(e, 16), this.e = parseInt(t, 16), this.d = k(n, 16), this.p = k(r, 16), this.q = k(i, 16), this.dmp1 = k(o, 16), this.dmq1 = k(s, 16), this.coeff = k(a, 16)) : console.error("Invalid RSA private key")
                        }, e.prototype.generate = function(e, t) {
                            var n = new Q,
                                r = e >> 1;
                            this.e = parseInt(t, 16);
                            for (var i = new P(t, 16);;) {
                                for (; this.p = new P(e - r, 1, n), 0 != this.p.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.p.isProbablePrime(10););
                                for (; this.q = new P(r, 1, n), 0 != this.q.subtract(P.ONE).gcd(i).compareTo(P.ONE) || !this.q.isProbablePrime(10););
                                if (this.p.compareTo(this.q) <= 0) {
                                    var o = this.p;
                                    this.p = this.q, this.q = o
                                }
                                var s = this.p.subtract(P.ONE),
                                    a = this.q.subtract(P.ONE),
                                    u = s.multiply(a);
                                if (0 == u.gcd(i).compareTo(P.ONE)) {
                                    this.n = this.p.multiply(this.q), this.d = i.modInverse(u), this.dmp1 = this.d.mod(s), this.dmq1 = this.d.mod(a), this.coeff = this.q.modInverse(this.p);
                                    break
                                }
                            }
                        }, e.prototype.decrypt = function(e) {
                            var t = k(e, 16),
                                n = this.doPrivate(t);
                            return null == n ? null : function(e, t) {
                                for (var n = e.toByteArray(), r = 0; r < n.length && 0 == n[r];) ++r;
                                if (n.length - r != t - 1 || 2 != n[r]) return null;
                                for (++r; 0 != n[r];)
                                    if (++r >= n.length) return null;
                                for (var i = ""; ++r < n.length;) {
                                    var o = 255 & n[r];
                                    o < 128 ? i += String.fromCharCode(o) : 191 < o && o < 224 ? (i += String.fromCharCode((31 & o) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & o) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2)
                                }
                                return i
                            }(n, this.n.bitLength() + 7 >> 3)
                        }, e.prototype.generateAsync = function(e, t, n) {
                            var r = new Q,
                                i = e >> 1;
                            this.e = parseInt(t, 16);
                            var o = new P(t, 16),
                                s = this,
                                a = function() {
                                    var t = function() {
                                            if (s.p.compareTo(s.q) <= 0) {
                                                var e = s.p;
                                                s.p = s.q, s.q = e
                                            }
                                            var t = s.p.subtract(P.ONE),
                                                r = s.q.subtract(P.ONE),
                                                i = t.multiply(r);
                                            0 == i.gcd(o).compareTo(P.ONE) ? (s.n = s.p.multiply(s.q), s.d = o.modInverse(i), s.dmp1 = s.d.mod(t), s.dmq1 = s.d.mod(r), s.coeff = s.q.modInverse(s.p), setTimeout(function() {
                                                n()
                                            }, 0)) : setTimeout(a, 0)
                                        },
                                        u = function() {
                                            s.q = B(), s.q.fromNumberAsync(i, 1, r, function() {
                                                s.q.subtract(P.ONE).gcda(o, function(e) {
                                                    0 == e.compareTo(P.ONE) && s.q.isProbablePrime(10) ? setTimeout(t, 0) : setTimeout(u, 0)
                                                })
                                            })
                                        },
                                        c = function() {
                                            s.p = B(), s.p.fromNumberAsync(e - i, 1, r, function() {
                                                s.p.subtract(P.ONE).gcda(o, function(e) {
                                                    0 == e.compareTo(P.ONE) && s.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(c, 0)
                                                })
                                            })
                                        };
                                    setTimeout(c, 0)
                                };
                            setTimeout(a, 0)
                        }, e.prototype.sign = function(e, t, n) {
                            var r = function(e, t) {
                                if (t < e.length + 22) return console.error("Message too long for RSA"), null;
                                for (var n = t - e.length - 6, r = "", i = 0; i < n; i += 2) r += "ff";
                                return k("0001" + r + "00" + e, 16)
                            }(($[n] || "") + t(e).toString(), this.n.bitLength() / 4);
                            if (null == r) return null;
                            var i = this.doPrivate(r);
                            if (null == i) return null;
                            var o = i.toString(16);
                            return 0 == (1 & o.length) ? o : "0" + o
                        }, e.prototype.verify = function(e, t, n) {
                            var r = k(t, 16),
                                i = this.doPublic(r);
                            return null == i ? null : function(e) {
                                for (var t in $)
                                    if ($.hasOwnProperty(t)) {
                                        var n = $[t],
                                            r = n.length;
                                        if (e.substr(0, r) == n) return e.substr(r)
                                    } return e
                            }(i.toString(16).replace(/^1f+00/, "")) == n(e).toString()
                        }, e
                    }(),
                    $ = {
                        md2: "3020300c06082a864886f70d020205000410",
                        md5: "3020300c06082a864886f70d020505000410",
                        sha1: "3021300906052b0e03021a05000414",
                        sha224: "302d300d06096086480165030402040500041c",
                        sha256: "3031300d060960864801650304020105000420",
                        sha384: "3041300d060960864801650304020205000430",
                        sha512: "3051300d060960864801650304020305000440",
                        ripemd160: "3021300906052b2403020105000414"
                    },
                    X = {};
                X.lang = {
                    extend: function(e, t, n) {
                        if (!t || !e) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
                        var r = function() {};
                        if (r.prototype = t.prototype, e.prototype = new r, (e.prototype.constructor = e).superclass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t), n) {
                            var i;
                            for (i in n) e.prototype[i] = n[i];
                            var o = function() {},
                                s = ["toString", "valueOf"];
                            try {
                                /MSIE/.test(navigator.userAgent) && (o = function(e, t) {
                                    for (i = 0; i < s.length; i += 1) {
                                        var n = s[i],
                                            r = t[n];
                                        "function" == typeof r && r != Object.prototype[n] && (e[n] = r)
                                    }
                                })
                            } catch (e) {}
                            o(e.prototype, n)
                        }
                    }
                };
                var ee = {};
                void 0 !== ee.asn1 && ee.asn1 || (ee.asn1 = {}), ee.asn1.ASN1Util = new function() {
                    this.integerToByteHex = function(e) {
                        var t = e.toString(16);
                        return t.length % 2 == 1 && (t = "0" + t), t
                    }, this.bigIntToMinTwosComplementsHex = function(e) {
                        var t = e.toString(16);
                        if ("-" != t.substr(0, 1)) t.length % 2 == 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
                        else {
                            var n = t.substr(1).length;
                            n % 2 == 1 ? n += 1 : t.match(/^[0-7]/) || (n += 2);
                            for (var r = "", i = 0; i < n; i++) r += "f";
                            t = new P(r, 16).xor(e).add(P.ONE).toString(16).replace(/^-/, "")
                        }
                        return t
                    }, this.getPEMStringFromHex = function(e, t) {
                        return hextopem(e, t)
                    }, this.newObject = function(e) {
                        var t = ee.asn1,
                            n = t.DERBoolean,
                            r = t.DERInteger,
                            i = t.DERBitString,
                            o = t.DEROctetString,
                            s = t.DERNull,
                            a = t.DERObjectIdentifier,
                            u = t.DEREnumerated,
                            c = t.DERUTF8String,
                            d = t.DERNumericString,
                            l = t.DERPrintableString,
                            f = t.DERTeletexString,
                            p = t.DERIA5String,
                            h = t.DERUTCTime,
                            g = t.DERGeneralizedTime,
                            m = t.DERSequence,
                            y = t.DERSet,
                            v = t.DERTaggedObject,
                            b = t.ASN1Util.newObject,
                            _ = Object.keys(e);
                        if (1 != _.length) throw "key of param shall be only one.";
                        var S = _[0];
                        if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + S + ":")) throw "undefined key: " + S;
                        if ("bool" == S) return new n(e[S]);
                        if ("int" == S) return new r(e[S]);
                        if ("bitstr" == S) return new i(e[S]);
                        if ("octstr" == S) return new o(e[S]);
                        if ("null" == S) return new s(e[S]);
                        if ("oid" == S) return new a(e[S]);
                        if ("enum" == S) return new u(e[S]);
                        if ("utf8str" == S) return new c(e[S]);
                        if ("numstr" == S) return new d(e[S]);
                        if ("prnstr" == S) return new l(e[S]);
                        if ("telstr" == S) return new f(e[S]);
                        if ("ia5str" == S) return new p(e[S]);
                        if ("utctime" == S) return new h(e[S]);
                        if ("gentime" == S) return new g(e[S]);
                        if ("seq" == S) {
                            for (var w = e[S], T = [], E = 0; E < w.length; E++) {
                                var A = b(w[E]);
                                T.push(A)
                            }
                            return new m({
                                array: T
                            })
                        }
                        if ("set" == S) {
                            for (w = e[S], T = [], E = 0; E < w.length; E++) A = b(w[E]), T.push(A);
                            return new y({
                                array: T
                            })
                        }
                        if ("tag" == S) {
                            var I = e[S];
                            if ("[object Array]" === Object.prototype.toString.call(I) && 3 == I.length) {
                                var O = b(I[2]);
                                return new v({
                                    tag: I[0],
                                    explicit: I[1],
                                    obj: O
                                })
                            }
                            var P = {};
                            if (void 0 !== I.explicit && (P.explicit = I.explicit), void 0 !== I.tag && (P.tag = I.tag), void 0 === I.obj) throw "obj shall be specified for 'tag'.";
                            return P.obj = b(I.obj), new v(P)
                        }
                    }, this.jsonToASN1HEX = function(e) {
                        return this.newObject(e).getEncodedHex()
                    }
                }, ee.asn1.ASN1Util.oidHexToInt = function(e) {
                    for (var t = "", n = parseInt(e.substr(0, 2), 16), r = (t = Math.floor(n / 40) + "." + n % 40, ""), i = 2; i < e.length; i += 2) {
                        var o = ("00000000" + parseInt(e.substr(i, 2), 16).toString(2)).slice(-8);
                        r += o.substr(1, 7), "0" == o.substr(0, 1) && (t = t + "." + new P(r, 2).toString(10), r = "")
                    }
                    return t
                }, ee.asn1.ASN1Util.oidIntToHex = function(e) {
                    var t = function(e) {
                            var t = e.toString(16);
                            return 1 == t.length && (t = "0" + t), t
                        },
                        n = function(e) {
                            var n = "",
                                r = new P(e, 10).toString(2),
                                i = 7 - r.length % 7;
                            7 == i && (i = 0);
                            for (var o = "", s = 0; s < i; s++) o += "0";
                            for (r = o + r, s = 0; s < r.length - 1; s += 7) {
                                var a = r.substr(s, 7);
                                s != r.length - 7 && (a = "1" + a), n += t(parseInt(a, 2))
                            }
                            return n
                        };
                    if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                    var r = "",
                        i = e.split("."),
                        o = 40 * parseInt(i[0]) + parseInt(i[1]);
                    r += t(o), i.splice(0, 2);
                    for (var s = 0; s < i.length; s++) r += n(i[s]);
                    return r
                }, ee.asn1.ASN1Object = function() {
                    this.getLengthHexFromValue = function() {
                        if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
                        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
                        var e = this.hV.length / 2,
                            t = e.toString(16);
                        if (t.length % 2 == 1 && (t = "0" + t), e < 128) return t;
                        var n = t.length / 2;
                        if (15 < n) throw "ASN.1 length too long to represent by 8x: n = " + e.toString(16);
                        return (128 + n).toString(16) + t
                    }, this.getEncodedHex = function() {
                        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
                    }, this.getValueHex = function() {
                        return this.getEncodedHex(), this.hV
                    }, this.getFreshValueHex = function() {
                        return ""
                    }
                }, ee.asn1.DERAbstractString = function(e) {
                    ee.asn1.DERAbstractString.superclass.constructor.call(this), this.getString = function() {
                        return this.s
                    }, this.setString = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(this.s)
                    }, this.setStringHex = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && ("string" == typeof e ? this.setString(e) : void 0 !== e.str ? this.setString(e.str) : void 0 !== e.hex && this.setStringHex(e.hex))
                }, X.lang.extend(ee.asn1.DERAbstractString, ee.asn1.ASN1Object), ee.asn1.DERAbstractTime = function(e) {
                    ee.asn1.DERAbstractTime.superclass.constructor.call(this), this.localDateToUTC = function(e) {
                        return utc = e.getTime() + 6e4 * e.getTimezoneOffset(), new Date(utc)
                    }, this.formatDate = function(e, t, n) {
                        var r = this.zeroPadding,
                            i = this.localDateToUTC(e),
                            o = String(i.getFullYear());
                        "utc" == t && (o = o.substr(2, 2));
                        var s = o + r(String(i.getMonth() + 1), 2) + r(String(i.getDate()), 2) + r(String(i.getHours()), 2) + r(String(i.getMinutes()), 2) + r(String(i.getSeconds()), 2);
                        if (!0 === n) {
                            var a = i.getMilliseconds();
                            if (0 != a) {
                                var u = r(String(a), 3);
                                s = s + "." + (u = u.replace(/[0]+$/, ""))
                            }
                        }
                        return s + "Z"
                    }, this.zeroPadding = function(e, t) {
                        return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
                    }, this.getString = function() {
                        return this.s
                    }, this.setString = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = e, this.hV = stohex(e)
                    }, this.setByDateValue = function(e, t, n, r, i, o) {
                        var s = new Date(Date.UTC(e, t - 1, n, r, i, o, 0));
                        this.setByDate(s)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }
                }, X.lang.extend(ee.asn1.DERAbstractTime, ee.asn1.ASN1Object), ee.asn1.DERAbstractStructured = function(e) {
                    ee.asn1.DERAbstractString.superclass.constructor.call(this), this.setByASN1ObjectArray = function(e) {
                        this.hTLV = null, this.isModified = !0, this.asn1Array = e
                    }, this.appendASN1Object = function(e) {
                        this.hTLV = null, this.isModified = !0, this.asn1Array.push(e)
                    }, this.asn1Array = new Array, void 0 !== e && void 0 !== e.array && (this.asn1Array = e.array)
                }, X.lang.extend(ee.asn1.DERAbstractStructured, ee.asn1.ASN1Object), ee.asn1.DERBoolean = function() {
                    ee.asn1.DERBoolean.superclass.constructor.call(this), this.hT = "01", this.hTLV = "0101ff"
                }, X.lang.extend(ee.asn1.DERBoolean, ee.asn1.ASN1Object), ee.asn1.DERInteger = function(e) {
                    ee.asn1.DERInteger.superclass.constructor.call(this), this.hT = "02", this.setByBigInteger = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = ee.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
                    }, this.setByInteger = function(e) {
                        var t = new P(String(e), 10);
                        this.setByBigInteger(t)
                    }, this.setValueHex = function(e) {
                        this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && (void 0 !== e.bigint ? this.setByBigInteger(e.bigint) : void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex))
                }, X.lang.extend(ee.asn1.DERInteger, ee.asn1.ASN1Object), ee.asn1.DERBitString = function(e) {
                    if (void 0 !== e && void 0 !== e.obj) {
                        var t = ee.asn1.ASN1Util.newObject(e.obj);
                        e.hex = "00" + t.getEncodedHex()
                    }
                    ee.asn1.DERBitString.superclass.constructor.call(this), this.hT = "03", this.setHexValueIncludingUnusedBits = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = e
                    }, this.setUnusedBitsAndHexValue = function(e, t) {
                        if (e < 0 || 7 < e) throw "unused bits shall be from 0 to 7: u = " + e;
                        var n = "0" + e;
                        this.hTLV = null, this.isModified = !0, this.hV = n + t
                    }, this.setByBinaryString = function(e) {
                        var t = 8 - (e = e.replace(/0+$/, "")).length % 8;
                        8 == t && (t = 0);
                        for (var n = 0; n <= t; n++) e += "0";
                        var r = "";
                        for (n = 0; n < e.length - 1; n += 8) {
                            var i = e.substr(n, 8),
                                o = parseInt(i, 2).toString(16);
                            1 == o.length && (o = "0" + o), r += o
                        }
                        this.hTLV = null, this.isModified = !0, this.hV = "0" + t + r
                    }, this.setByBooleanArray = function(e) {
                        for (var t = "", n = 0; n < e.length; n++) 1 == e[n] ? t += "1" : t += "0";
                        this.setByBinaryString(t)
                    }, this.newFalseArray = function(e) {
                        for (var t = new Array(e), n = 0; n < e; n++) t[n] = !1;
                        return t
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && ("string" == typeof e && e.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(e) : void 0 !== e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : void 0 !== e.bin ? this.setByBinaryString(e.bin) : void 0 !== e.array && this.setByBooleanArray(e.array))
                }, X.lang.extend(ee.asn1.DERBitString, ee.asn1.ASN1Object), ee.asn1.DEROctetString = function(e) {
                    if (void 0 !== e && void 0 !== e.obj) {
                        var t = ee.asn1.ASN1Util.newObject(e.obj);
                        e.hex = t.getEncodedHex()
                    }
                    ee.asn1.DEROctetString.superclass.constructor.call(this, e), this.hT = "04"
                }, X.lang.extend(ee.asn1.DEROctetString, ee.asn1.DERAbstractString), ee.asn1.DERNull = function() {
                    ee.asn1.DERNull.superclass.constructor.call(this), this.hT = "05", this.hTLV = "0500"
                }, X.lang.extend(ee.asn1.DERNull, ee.asn1.ASN1Object), ee.asn1.DERObjectIdentifier = function(e) {
                    var t = function(e) {
                            var t = e.toString(16);
                            return 1 == t.length && (t = "0" + t), t
                        },
                        n = function(e) {
                            var n = "",
                                r = new P(e, 10).toString(2),
                                i = 7 - r.length % 7;
                            7 == i && (i = 0);
                            for (var o = "", s = 0; s < i; s++) o += "0";
                            for (r = o + r, s = 0; s < r.length - 1; s += 7) {
                                var a = r.substr(s, 7);
                                s != r.length - 7 && (a = "1" + a), n += t(parseInt(a, 2))
                            }
                            return n
                        };
                    ee.asn1.DERObjectIdentifier.superclass.constructor.call(this), this.hT = "06", this.setValueHex = function(e) {
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = e
                    }, this.setValueOidString = function(e) {
                        if (!e.match(/^[0-9.]+$/)) throw "malformed oid string: " + e;
                        var r = "",
                            i = e.split("."),
                            o = 40 * parseInt(i[0]) + parseInt(i[1]);
                        r += t(o), i.splice(0, 2);
                        for (var s = 0; s < i.length; s++) r += n(i[s]);
                        this.hTLV = null, this.isModified = !0, this.s = null, this.hV = r
                    }, this.setValueName = function(e) {
                        var t = ee.asn1.x509.OID.name2oid(e);
                        if ("" === t) throw "DERObjectIdentifier oidName undefined: " + e;
                        this.setValueOidString(t)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && ("string" == typeof e ? e.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(e) : this.setValueName(e) : void 0 !== e.oid ? this.setValueOidString(e.oid) : void 0 !== e.hex ? this.setValueHex(e.hex) : void 0 !== e.name && this.setValueName(e.name))
                }, X.lang.extend(ee.asn1.DERObjectIdentifier, ee.asn1.ASN1Object), ee.asn1.DEREnumerated = function(e) {
                    ee.asn1.DEREnumerated.superclass.constructor.call(this), this.hT = "0a", this.setByBigInteger = function(e) {
                        this.hTLV = null, this.isModified = !0, this.hV = ee.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e)
                    }, this.setByInteger = function(e) {
                        var t = new P(String(e), 10);
                        this.setByBigInteger(t)
                    }, this.setValueHex = function(e) {
                        this.hV = e
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && (void 0 !== e.int ? this.setByInteger(e.int) : "number" == typeof e ? this.setByInteger(e) : void 0 !== e.hex && this.setValueHex(e.hex))
                }, X.lang.extend(ee.asn1.DEREnumerated, ee.asn1.ASN1Object), ee.asn1.DERUTF8String = function(e) {
                    ee.asn1.DERUTF8String.superclass.constructor.call(this, e), this.hT = "0c"
                }, X.lang.extend(ee.asn1.DERUTF8String, ee.asn1.DERAbstractString), ee.asn1.DERNumericString = function(e) {
                    ee.asn1.DERNumericString.superclass.constructor.call(this, e), this.hT = "12"
                }, X.lang.extend(ee.asn1.DERNumericString, ee.asn1.DERAbstractString), ee.asn1.DERPrintableString = function(e) {
                    ee.asn1.DERPrintableString.superclass.constructor.call(this, e), this.hT = "13"
                }, X.lang.extend(ee.asn1.DERPrintableString, ee.asn1.DERAbstractString), ee.asn1.DERTeletexString = function(e) {
                    ee.asn1.DERTeletexString.superclass.constructor.call(this, e), this.hT = "14"
                }, X.lang.extend(ee.asn1.DERTeletexString, ee.asn1.DERAbstractString), ee.asn1.DERIA5String = function(e) {
                    ee.asn1.DERIA5String.superclass.constructor.call(this, e), this.hT = "16"
                }, X.lang.extend(ee.asn1.DERIA5String, ee.asn1.DERAbstractString), ee.asn1.DERUTCTime = function(e) {
                    ee.asn1.DERUTCTime.superclass.constructor.call(this, e), this.hT = "17", this.setByDate = function(e) {
                        this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)
                    }, this.getFreshValueHex = function() {
                        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)), this.hV
                    }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{12}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date))
                }, X.lang.extend(ee.asn1.DERUTCTime, ee.asn1.DERAbstractTime), ee.asn1.DERGeneralizedTime = function(e) {
                    ee.asn1.DERGeneralizedTime.superclass.constructor.call(this, e), this.hT = "18", this.withMillis = !1, this.setByDate = function(e) {
                        this.hTLV = null, this.isModified = !0, this.date = e, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)
                    }, this.getFreshValueHex = function() {
                        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)), this.hV
                    }, void 0 !== e && (void 0 !== e.str ? this.setString(e.str) : "string" == typeof e && e.match(/^[0-9]{14}Z$/) ? this.setString(e) : void 0 !== e.hex ? this.setStringHex(e.hex) : void 0 !== e.date && this.setByDate(e.date), !0 === e.millis && (this.withMillis = !0))
                }, X.lang.extend(ee.asn1.DERGeneralizedTime, ee.asn1.DERAbstractTime), ee.asn1.DERSequence = function(e) {
                    ee.asn1.DERSequence.superclass.constructor.call(this, e), this.hT = "30", this.getFreshValueHex = function() {
                        for (var e = "", t = 0; t < this.asn1Array.length; t++) e += this.asn1Array[t].getEncodedHex();
                        return this.hV = e, this.hV
                    }
                }, X.lang.extend(ee.asn1.DERSequence, ee.asn1.DERAbstractStructured), ee.asn1.DERSet = function(e) {
                    ee.asn1.DERSet.superclass.constructor.call(this, e), this.hT = "31", this.sortFlag = !0, this.getFreshValueHex = function() {
                        for (var e = new Array, t = 0; t < this.asn1Array.length; t++) {
                            var n = this.asn1Array[t];
                            e.push(n.getEncodedHex())
                        }
                        return 1 == this.sortFlag && e.sort(), this.hV = e.join(""), this.hV
                    }, void 0 !== e && void 0 !== e.sortflag && 0 == e.sortflag && (this.sortFlag = !1)
                }, X.lang.extend(ee.asn1.DERSet, ee.asn1.DERAbstractStructured), ee.asn1.DERTaggedObject = function(e) {
                    ee.asn1.DERTaggedObject.superclass.constructor.call(this), this.hT = "a0", this.hV = "", this.isExplicit = !0, this.asn1Object = null, this.setASN1Object = function(e, t, n) {
                        this.hT = t, this.isExplicit = e, this.asn1Object = n, this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, t), this.isModified = !1)
                    }, this.getFreshValueHex = function() {
                        return this.hV
                    }, void 0 !== e && (void 0 !== e.tag && (this.hT = e.tag), void 0 !== e.explicit && (this.isExplicit = e.explicit), void 0 !== e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
                }, X.lang.extend(ee.asn1.DERTaggedObject, ee.asn1.ASN1Object);
                var te = function(e) {
                        function t(n) {
                            var r = e.call(this) || this;
                            return n && ("string" == typeof n ? r.parseKey(n) : (t.hasPrivateKeyProperty(n) || t.hasPublicKeyProperty(n)) && r.parsePropertiesFrom(n)), r
                        }
                        return function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            h(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }(t, e), t.prototype.parseKey = function(e) {
                            try {
                                var t = 0,
                                    n = 0,
                                    r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(e) ? function(e) {
                                        var t;
                                        if (void 0 === f) {
                                            var n = "0123456789ABCDEF",
                                                r = " \f\n\r\t \u2028\u2029";
                                            for (f = {}, t = 0; t < 16; ++t) f[n.charAt(t)] = t;
                                            for (n = n.toLowerCase(), t = 10; t < 16; ++t) f[n.charAt(t)] = t;
                                            for (t = 0; t < r.length; ++t) f[r.charAt(t)] = -1
                                        }
                                        var i = [],
                                            o = 0,
                                            s = 0;
                                        for (t = 0; t < e.length; ++t) {
                                            var a = e.charAt(t);
                                            if ("=" == a) break;
                                            if (-1 != (a = f[a])) {
                                                if (void 0 === a) throw new Error("Illegal character at offset " + t);
                                                o |= a, 2 <= ++s ? (i[i.length] = o, s = o = 0) : o <<= 4
                                            }
                                        }
                                        if (s) throw new Error("Hex encoding incomplete: 4 bits missing");
                                        return i
                                    }(e) : g.unarmor(e),
                                    i = E.decode(r);
                                if (3 === i.sub.length && (i = i.sub[2].sub[0]), 9 === i.sub.length) {
                                    t = i.sub[1].getHexStringValue(), this.n = k(t, 16), n = i.sub[2].getHexStringValue(), this.e = parseInt(n, 16);
                                    var o = i.sub[3].getHexStringValue();
                                    this.d = k(o, 16);
                                    var s = i.sub[4].getHexStringValue();
                                    this.p = k(s, 16);
                                    var a = i.sub[5].getHexStringValue();
                                    this.q = k(a, 16);
                                    var u = i.sub[6].getHexStringValue();
                                    this.dmp1 = k(u, 16);
                                    var c = i.sub[7].getHexStringValue();
                                    this.dmq1 = k(c, 16);
                                    var d = i.sub[8].getHexStringValue();
                                    this.coeff = k(d, 16)
                                } else {
                                    if (2 !== i.sub.length) return !1;
                                    var l = i.sub[1].sub[0];
                                    t = l.sub[0].getHexStringValue(), this.n = k(t, 16), n = l.sub[1].getHexStringValue(), this.e = parseInt(n, 16)
                                }
                                return !0
                            } catch (e) {
                                return !1
                            }
                        }, t.prototype.getPrivateBaseKey = function() {
                            var e = {
                                array: [new ee.asn1.DERInteger({
                                    int: 0
                                }), new ee.asn1.DERInteger({
                                    bigint: this.n
                                }), new ee.asn1.DERInteger({
                                    int: this.e
                                }), new ee.asn1.DERInteger({
                                    bigint: this.d
                                }), new ee.asn1.DERInteger({
                                    bigint: this.p
                                }), new ee.asn1.DERInteger({
                                    bigint: this.q
                                }), new ee.asn1.DERInteger({
                                    bigint: this.dmp1
                                }), new ee.asn1.DERInteger({
                                    bigint: this.dmq1
                                }), new ee.asn1.DERInteger({
                                    bigint: this.coeff
                                })]
                            };
                            return new ee.asn1.DERSequence(e).getEncodedHex()
                        }, t.prototype.getPrivateBaseKeyB64 = function() {
                            return d(this.getPrivateBaseKey())
                        }, t.prototype.getPublicBaseKey = function() {
                            var e = new ee.asn1.DERSequence({
                                    array: [new ee.asn1.DERObjectIdentifier({
                                        oid: "1.2.840.113549.1.1.1"
                                    }), new ee.asn1.DERNull]
                                }),
                                t = new ee.asn1.DERSequence({
                                    array: [new ee.asn1.DERInteger({
                                        bigint: this.n
                                    }), new ee.asn1.DERInteger({
                                        int: this.e
                                    })]
                                }),
                                n = new ee.asn1.DERBitString({
                                    hex: "00" + t.getEncodedHex()
                                });
                            return new ee.asn1.DERSequence({
                                array: [e, n]
                            }).getEncodedHex()
                        }, t.prototype.getPublicBaseKeyB64 = function() {
                            return d(this.getPublicBaseKey())
                        }, t.wordwrap = function(e, t) {
                            if (!e) return e;
                            var n = "(.{1," + (t = t || 64) + "})( +|$\n?)|(.{1," + t + "})";
                            return e.match(RegExp(n, "g")).join("\n")
                        }, t.prototype.getPrivateKey = function() {
                            var e = "-----BEGIN RSA PRIVATE KEY-----\n";
                            return (e += t.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
                        }, t.prototype.getPublicKey = function() {
                            var e = "-----BEGIN PUBLIC KEY-----\n";
                            return (e += t.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
                        }, t.hasPublicKeyProperty = function(e) {
                            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e")
                        }, t.hasPrivateKeyProperty = function(e) {
                            return (e = e || {}).hasOwnProperty("n") && e.hasOwnProperty("e") && e.hasOwnProperty("d") && e.hasOwnProperty("p") && e.hasOwnProperty("q") && e.hasOwnProperty("dmp1") && e.hasOwnProperty("dmq1") && e.hasOwnProperty("coeff")
                        }, t.prototype.parsePropertiesFrom = function(e) {
                            this.n = e.n, this.e = e.e, e.hasOwnProperty("d") && (this.d = e.d, this.p = e.p, this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff)
                        }, t
                    }(Z),
                    ne = function() {
                        function e(e) {
                            e = e || {}, this.default_key_size = parseInt(e.default_key_size, 10) || 1024, this.default_public_exponent = e.default_public_exponent || "010001", this.log = e.log || !1, this.key = null
                        }
                        return e.prototype.setKey = function(e) {
                            this.log && this.key && console.warn("A key was already set, overriding existing."), this.key = new te(e)
                        }, e.prototype.setPrivateKey = function(e) {
                            this.setKey(e)
                        }, e.prototype.setPublicKey = function(e) {
                            this.setKey(e)
                        }, e.prototype.decrypt = function(e) {
                            try {
                                return this.getKey().decrypt(l(e))
                            } catch (e) {
                                return !1
                            }
                        }, e.prototype.encrypt = function(e) {
                            try {
                                return d(this.getKey().encrypt(e))
                            } catch (e) {
                                return !1
                            }
                        }, e.prototype.sign = function(e, t, n) {
                            try {
                                return d(this.getKey().sign(e, t, n))
                            } catch (e) {
                                return !1
                            }
                        }, e.prototype.verify = function(e, t, n) {
                            try {
                                return this.getKey().verify(e, l(t), n)
                            } catch (e) {
                                return !1
                            }
                        }, e.prototype.getKey = function(e) {
                            if (!this.key) {
                                if (this.key = new te, e && "[object Function]" === {}.toString.call(e)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                                this.key.generate(this.default_key_size, this.default_public_exponent)
                            }
                            return this.key
                        }, e.prototype.getPrivateKey = function() {
                            return this.getKey().getPrivateKey()
                        }, e.prototype.getPrivateKeyB64 = function() {
                            return this.getKey().getPrivateBaseKeyB64()
                        }, e.prototype.getPublicKey = function() {
                            return this.getKey().getPublicKey()
                        }, e.prototype.getPublicKeyB64 = function() {
                            return this.getKey().getPublicBaseKeyB64()
                        }, e.version = "3.0.0-rc.1", e
                    }();
                window.JSEncrypt = ne, e.JSEncrypt = ne, e.default = ne, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(t)
        },
        217: function(e, t, n) {
            var r;
            r = function(e) {
                return function(t) {
                    var n = e,
                        r = n.lib,
                        i = r.WordArray,
                        o = r.Hasher,
                        s = n.algo,
                        a = [],
                        u = [];
                    ! function() {
                        function e(e) {
                            for (var n = t.sqrt(e), r = 2; r <= n; r++)
                                if (!(e % r)) return !1;
                            return !0
                        }

                        function n(e) {
                            return 4294967296 * (e - (0 | e)) | 0
                        }
                        for (var r = 2, i = 0; i < 64;) e(r) && (i < 8 && (a[i] = n(t.pow(r, .5))), u[i] = n(t.pow(r, 1 / 3)), i++), r++
                    }();
                    var c = [],
                        d = s.SHA256 = o.extend({
                            _doReset: function() {
                                this._hash = new i.init(a.slice(0))
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], s = n[3], a = n[4], d = n[5], l = n[6], f = n[7], p = 0; p < 64; p++) {
                                    if (p < 16) c[p] = 0 | e[t + p];
                                    else {
                                        var h = c[p - 15],
                                            g = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3,
                                            m = c[p - 2],
                                            y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                        c[p] = g + c[p - 7] + y + c[p - 16]
                                    }
                                    var v = r & i ^ r & o ^ i & o,
                                        b = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                        _ = f + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & d ^ ~a & l) + u[p] + c[p];
                                    f = l, l = d, d = a, a = s + _ | 0, s = o, o = i, i = r, r = _ + (b + v) | 0
                                }
                                n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + o | 0, n[3] = n[3] + s | 0, n[4] = n[4] + a | 0, n[5] = n[5] + d | 0, n[6] = n[6] + l | 0, n[7] = n[7] + f | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    n = e.words,
                                    r = 8 * this._nDataBytes,
                                    i = 8 * e.sigBytes;
                                return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = t.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * n.length, this._process(), this._hash
                            },
                            clone: function() {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(), e
                            }
                        });
                    n.SHA256 = o._createHelper(d), n.HmacSHA256 = o._createHmacHelper(d)
                }(Math), e.SHA256
            }, e.exports = r(n(218))
        },
        218: function(e, t, n) {
            var r;
            r = function() {
                var e, t, n, r, i, o, s, a, u, c, d, l, f = f || (e = Math, t = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t, n = new e, e.prototype = null, n
                    }
                }(), r = (n = {}).lib = {}, i = r.Base = {
                    extend: function(e) {
                        var n = t(this);
                        return e && n.mixIn(e), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                            n.$super.init.apply(this, arguments)
                        }), (n.init.prototype = n).$super = this, n
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }, o = r.WordArray = i.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || a).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            r = this.sigBytes,
                            i = e.sigBytes;
                        if (this.clamp(), r % 4)
                            for (var o = 0; o < i; o++) {
                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                t[r + o >>> 2] |= s << 24 - (r + o) % 4 * 8
                            } else
                                for (o = 0; o < i; o += 4) t[r + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += i, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n, r = [], i = function(t) {
                                t = t;
                                var n = 987654321,
                                    r = 4294967295;
                                return function() {
                                    var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                                    return i /= 4294967296, (i += .5) * (.5 < e.random() ? 1 : -1)
                                }
                            }, s = 0; s < t; s += 4) {
                            var a = i(4294967296 * (n || e.random()));
                            n = 987654071 * a(), r.push(4294967296 * a() | 0)
                        }
                        return new o.init(r, t)
                    }
                }), s = n.enc = {}, a = s.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push((o >>> 4).toString(16)), r.push((15 & o).toString(16))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                        return new o.init(n, t / 2)
                    }
                }, u = s.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            r.push(String.fromCharCode(o))
                        }
                        return r.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                        return new o.init(n, t)
                    }
                }, c = s.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(u.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return u.parse(unescape(encodeURIComponent(e)))
                    }
                }, d = r.BufferedBlockAlgorithm = i.extend({
                    reset: function() {
                        this._data = new o.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            r = n.words,
                            i = n.sigBytes,
                            s = this.blockSize,
                            a = i / (4 * s),
                            u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,
                            c = e.min(4 * u, i);
                        if (u) {
                            for (var d = 0; d < u; d += s) this._doProcessBlock(r, d);
                            var l = r.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new o.init(l, c)
                    },
                    clone: function() {
                        var e = i.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }), r.Hasher = d.extend({
                    cfg: i.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        d.reset.call(this), this._doReset()
                    },
                    update: function(e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function(e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(e) {
                        return function(t, n) {
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new l.HMAC.init(e, n).finalize(t)
                        }
                    }
                }), l = n.algo = {}, n);
                return f
            }, e.exports = r()
        },
        219: function(e, t) {}
    }, [214]), pbjsChunk([184], {
        220: function(e, t, n) {
            e.exports = n(221)
        },
        221: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.currencyRates = t.currencySupportEnabled = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            t.setConfig = S, t.addBidResponseHook = T;
            var i, o, s = (i = n(16)) && i.__esModule ? i : {
                    default: i
                },
                a = n(4),
                u = n(6),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                d = n(3),
                l = n(20),
                f = "https://currency.prebid.org/latest.json",
                p = 4,
                h = [],
                g = {},
                m = !1,
                y = "USD",
                v = t.currencySupportEnabled = !1,
                b = t.currencyRates = {},
                _ = {};

            function S(e) {
                var n = f;
                "object" === r(e.rates) && (b.conversions = e.rates, m = !0), "object" === r(e.defaultRates) && (o = e.defaultRates), "string" == typeof e.adServerCurrency ? (c.logInfo("enabling currency support", arguments), y = e.adServerCurrency, e.conversionRateFile && (c.logInfo("currency using override conversionRateFile:", e.conversionRateFile), n = e.conversionRateFile), function(e) {
                    g = {}, t.currencySupportEnabled = v = !0, c.logInfo("Installing addBidResponse decorator for currency module", arguments), l.hooks.addBidResponse.addHook(T, 100), b.conversions || (0, u.ajax)(e, {
                        success: function(e) {
                            try {
                                t.currencyRates = b = JSON.parse(e), c.logInfo("currencyRates set to " + JSON.stringify(b)), m = !0, E()
                            } catch (t) {
                                w("Failed to parse currencyRates response: " + e)
                            }
                        },
                        error: w
                    })
                }(n)) : (c.logInfo("disabling currency support"), function() {
                    c.logInfo("Uninstalling addBidResponse decorator for currency module", arguments), l.hooks.addBidResponse.removeHook(T, 100), y = "USD", g = {}, t.currencySupportEnabled = v = !1, m = !1, t.currencyRates = b = {}, _ = {}
                }()), "object" === r(e.bidderCurrencyDefault) && (_ = e.bidderCurrencyDefault)
            }

            function w(e) {
                o ? (b.conversions = o, m = !0, c.logWarn(e), c.logWarn("Currency failed loading rates, falling back to currency.defaultRates")) : c.logError(e)
            }

            function T(e, t, n) {
                if (!t) return n.apply(this, arguments);
                var r = t.bidderCode || t.bidder;
                if (_[r]) {
                    var i = _[r];
                    t.currency && i !== t.currency ? c.logWarn("Currency default '" + r + ": " + i + "' ignored. adapter specified '" + t.currency + "'") : t.currency = i
                }
                t.currency || (c.logWarn('Currency not specified on bid.  Defaulted to "USD"'), t.currency = "USD");
                var o, u, d, l = t.currency,
                    f = t.cpm;
                if (t.getCpmInNewCurrency = function(e) {
                        return (parseFloat(f) * A(l, e)).toFixed(3)
                    }, t.currency === y) return n.apply(this, arguments);
                h.push((o = n, u = this, d = arguments, function() {
                    var e = d[1];
                    if (void 0 !== e && "currency" in e && "cpm" in e) {
                        var t = e.currency;
                        try {
                            var n = A(t);
                            e.originalCpm = e.cpm, e.originalCurrency = e.currency, 1 !== n && (e.cpm = (parseFloat(e.cpm) * n).toFixed(4), e.currency = y)
                        } catch (t) {
                            c.logWarn("Returning NO_BID, getCurrencyConversion threw error: ", t), d[1] = s.default.createBid(a.STATUS.NO_BID, {
                                bidder: e.bidderCode || e.bidder,
                                bidId: e.adId
                            })
                        }
                    }
                    return o.apply(u, d)
                })), v && !m || E()
            }

            function E() {
                for (; 0 < h.length;) h.shift()()
            }

            function A(e) {
                var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y,
                    r = null,
                    i = e + "->" + n;
                if (i in g) r = g[i], c.logMessage("Using conversionCache value " + r + " for " + i);
                else if (!1 === v) {
                    if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                    r = 1
                } else if (e === n) r = 1;
                else if (e in b.conversions) {
                    if (!(n in (t = b.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + n + "' not found in the currency rates file");
                    r = t[n], c.logInfo("getCurrencyConversion using direct " + e + " to " + n + " conversionRate " + r)
                } else if (n in b.conversions) {
                    if (!(e in (t = b.conversions[n]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                    r = I(1 / t[e], p), c.logInfo("getCurrencyConversion using reciprocal " + e + " to " + n + " conversionRate " + r)
                } else {
                    var o = Object.keys(b.conversions)[0];
                    if (!(e in b.conversions[o])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                    var s = 1 / b.conversions[o][e];
                    if (!(n in b.conversions[o])) throw new Error("Specified adServerCurrency in config '" + n + "' not found in the currency rates file");
                    r = I(s * b.conversions[o][n], p), c.logInfo("getCurrencyConversion using intermediate " + e + " thru " + o + " to " + n + " conversionRate " + r)
                }
                return i in g || (c.logMessage("Adding conversionCache value " + r + " for " + i), g[i] = r), r
            }

            function I(e, t) {
                for (var n = 1, r = 0; r < t; r++) n += "0";
                return Math.round(e * n) / n
            }
            d.config.getConfig("currency", function(e) {
                return S(e.currency)
            })
        }
    }, [220]), pbjsChunk([79], {
        395: function(e, t, n) {
            n(396), e.exports = n(397)
        },
        396: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            t.resetBoPixel = function() {
                p = !0
            };
            var r = n(3),
                i = n(1),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                s = n(18),
                a = n(2),
                u = n(11),
                c = [a.BANNER, a.VIDEO],
                d = "openx",
                l = "hb_pb",
                f = "2.1.5",
                p = !0,
                h = t.spec = {
                    code: d,
                    supportedMediaTypes: c,
                    isBidRequestValid: function(e) {
                        var t = e.params.delDomain || e.params.platform;
                        return o.deepAccess(e, "mediaTypes.banner") && t ? !!e.params.unit || 0 < o.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !t)
                    },
                    buildRequests: function(e, t) {
                        if (0 === e.length) return [];
                        var n = [],
                            r = function(e, t) {
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
                            }(e.reduce(function(e, t) {
                                var n;
                                return n = t, o.deepAccess(n, "mediaTypes.video") || n.mediaType === a.VIDEO ? e[0].push(t) : e[1].push(t), e
                            }, [
                                [],
                                []
                            ]), 2),
                            i = r[0],
                            s = r[1];
                        return 0 < s.length && n.push(function(e, t) {
                            var n = [],
                                r = !1,
                                i = m(e, t),
                                s = o._map(e, function(e) {
                                    return e.params.unit
                                });
                            i.aus = o._map(e, function(e) {
                                return o.parseSizesInput(e.sizes).join(",")
                            }).join("|"), i.divIds = o._map(e, function(e) {
                                return encodeURIComponent(e.adUnitCode)
                            }).join(","), s.some(function(e) {
                                return e
                            }) && (i.auid = s.join(",")), e.some(function(e) {
                                return e.params.doNotTrack
                            }) && (i.ns = 1), e.some(function(e) {
                                return e.params.coppa
                            }) && (i.tfcd = 1), e.forEach(function(e) {
                                if (e.params.customParams) {
                                    var t = o._map(Object.keys(e.params.customParams), function(t) {
                                            return n = t, r = e.params.customParams[n], o.isArray(r) && (r = r.join(",")), (n.toLowerCase() + "=" + r.toLowerCase()).replace("+", ".").replace("/", "_");
                                            var n, r
                                        }),
                                        i = window.btoa(t.join("&"));
                                    r = !0, n.push(i)
                                } else n.push("")
                            }), r && (i.tps = n.join(","));
                            var a = [],
                                u = !1;
                            return e.forEach(function(e) {
                                e.params.customFloor ? (a.push(1e3 * e.params.customFloor), u = !0) : a.push(0)
                            }), u && (i.aumfs = a.join(",")), {
                                method: "GET",
                                url: i.ph ? "//u.openx.net/w/1.0/arj" : "//" + e[0].params.delDomain + "/w/1.0/arj",
                                data: i,
                                payload: {
                                    bids: e,
                                    startTime: new Date
                                }
                            }
                        }(s, t)), 0 < i.length && i.forEach(function(e) {
                            var r, i, s, a;
                            n.push((i = t, s = "//" + (r = e).params.delDomain + "/v/1.0/avjp", a = function(e, t) {
                                var n = m([e], t),
                                    r = o.deepAccess(e, "params.video") || {},
                                    i = o.deepAccess(e, "mediaTypes.video.context"),
                                    s = o.deepAccess(e, "mediaTypes.video.playerSize"),
                                    a = void 0,
                                    u = void 0;
                                return o.isArray(e.sizes) && 2 === e.sizes.length && !o.isArray(e.sizes[0]) ? (a = parseInt(e.sizes[0], 10), u = parseInt(e.sizes[1], 10)) : o.isArray(e.sizes) && o.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (a = parseInt(e.sizes[0][0], 10), u = parseInt(e.sizes[0][1], 10)) : o.isArray(s) && 2 === s.length && (a = parseInt(s[0], 10), u = parseInt(s[1], 10)), Object.keys(r).forEach(function(e) {
                                    "openrtb" === e ? (r[e].w = a || r[e].w, r[e].v = u || r[e].v, n[e] = JSON.stringify(r[e])) : e in n || "url" === e || (n[e] = r[e])
                                }), n.auid = e.params.unit, n.vwd = a || r.vwd, n.vht = u || r.vht, "outstream" === i && (n.vos = "101"), r.mimes && (n.vmimes = r.mimes), n
                            }(r, i), {
                                method: "GET",
                                url: s,
                                data: a,
                                payload: {
                                    bid: r,
                                    startTime: new Date
                                }
                            }))
                        }), n
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body;
                        return (/avjp$/.test(t.url) ? a.VIDEO : a.BANNER) === a.VIDEO ? function(e, t) {
                            var n = t.bid,
                                r = t.startTime,
                                i = [];
                            if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                                var o = (0, u.parse)(e.vastUrl).search || {},
                                    s = {};
                                s.requestId = n.bidId, s.bidderCode = d, s.ttl = 300, s.netRevenue = !0, s.currency = e.currency, s.cpm = Number(e.pub_rev) / 1e3, s.width = e.width, s.height = e.height, s.creativeId = e.adid, s.vastUrl = e.vastUrl, s.mediaType = a.VIDEO, e.ph = o.ph, e.colo = o.colo, e.ts = o.ts, i.push(s), y(a.VIDEO, e, r)
                            }
                            return i
                        }(n, t.payload) : function(e, t) {
                            for (var n = t.bids, r = t.startTime, i = e.ads.ad, o = [], s = 0; s < i.length; s++) {
                                var u = i[s],
                                    c = parseInt(u.idx, 10),
                                    d = {};
                                if (d.requestId = n[c].bidId, u.pub_rev) {
                                    d.cpm = Number(u.pub_rev) / 1e3;
                                    var l = u.creative[0];
                                    l && (d.width = l.width, d.height = l.height), d.creativeId = l.id, d.ad = u.html, u.deal_id && (d.dealId = u.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = u.currency, u.tbd && (d.tbd = u.tbd), d.ts = u.ts, o.push(d), y(a.BANNER, u, r)
                                }
                            }
                            return o
                        }(n, t.payload)
                    },
                    getUserSyncs: function(e, t) {
                        if (e.iframeEnabled) return [{
                            type: "iframe",
                            url: o.deepAccess(t, "0.body.ads.pixels") || o.deepAccess(t, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                        }]
                    },
                    transformBidParams: function(e, t) {
                        return o.convertTypes({
                            unit: "string",
                            customFloor: "number"
                        }, e)
                    }
                };

            function g(e) {
                for (var t in e) e.hasOwnProperty(t) && (e[t] || delete e[t]);
                return o._map(Object.keys(e), function(t) {
                    return t + "=" + e[t]
                }).join("&")
            }

            function m(e, t) {
                var n = o.inIframe(),
                    i = void 0;
                if (i = {
                        ju: r.config.getConfig("pageUrl") || o.getTopWindowUrl(),
                        jr: o.getTopWindowReferrer(),
                        ch: document.charSet || document.characterSet,
                        res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                        ifr: n,
                        tz: (new Date).getTimezoneOffset(),
                        tws: function(e) {
                            var t = void 0,
                                n = void 0,
                                r = window,
                                i = document,
                                o = i.documentElement,
                                s = void 0;
                            if (e) {
                                try {
                                    r = window.top, i = window.top.document
                                } catch (e) {
                                    return
                                }
                                o = i.documentElement, s = i.body, t = r.innerWidth || o.clientWidth || s.clientWidth, n = r.innerHeight || o.clientHeight || s.clientHeight
                            } else o = i.documentElement, t = r.innerWidth || o.clientWidth, n = r.innerHeight || o.clientHeight;
                            return t + "x" + n
                        }(n),
                        be: 1,
                        bc: e[0].params.bc || l + "_" + f,
                        dddid: o._map(e, function(e) {
                            return e.transactionId
                        }).join(","),
                        nocache: (new Date).getTime()
                    }, e[0].params.platform && (i.ph = e[0].params.platform), o.deepAccess(t, "gdprConsent")) {
                    var s = t.gdprConsent;
                    void 0 !== s.consentString && (i.gdpr_consent = s.consentString), void 0 !== s.gdprApplies && (i.gdpr = s.gdprApplies ? 1 : 0), "iab" === r.config.getConfig("consentManagement.cmpApi") && (i.x_gdpr_f = 1)
                }
                return e[0].crumbs && e[0].crumbs.pubcid && (i.pubcid = e[0].crumbs.pubcid), i
            }

            function y(e, t, n) {
                if (p) {
                    p = !1;
                    var i = r.config.getConfig("bidderTimeout"),
                        c = void 0;
                    window.PREBID_TIMEOUT && (i = Math.min(window.PREBID_TIMEOUT, i));
                    var l = {
                        bd: +new Date - n,
                        bp: t.pub_rev,
                        br: "0",
                        bs: o.getTopWindowLocation().hostname,
                        bt: i,
                        ts: t.ts
                    };
                    if (l.br = l.bt < l.bd ? "t" : "p", e === a.VIDEO) {
                        var f = (0, u.parse)(t.colo);
                        l.ph = t.ph, c = "//" + f.hostname + "/w/1.0/bo?" + g(l)
                    } else {
                        var h = o.deepAccess(t, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                        h && 1 < h.length && (c = h[1] + "bo?" + g(l))
                    }
                    c && s.userSync.registerSync("image", d, c)
                }
            }(0, i.registerBidder)(h)
        },
        397: function(e, t) {}
    }, [395]), pbjsChunk([66], {
        438: function(e, t, n) {
            n(439), e.exports = n(440)
        },
        439: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                o = n(1),
                s = n(2),
                a = n(3),
                u = n(4),
                c = "pubmatic",
                d = "USD",
                l = "nFIn8aLzbd",
                f = void 0,
                p = {
                    kadpageurl: "",
                    gender: "",
                    yob: "",
                    lat: "",
                    lon: "",
                    wiid: "",
                    profId: "",
                    verId: ""
                },
                h = {
                    NUMBER: "number",
                    STRING: "string",
                    BOOLEAN: "boolean",
                    ARRAY: "array"
                },
                g = {
                    mimes: h.ARRAY,
                    minduration: h.NUMBER,
                    maxduration: h.NUMBER,
                    startdelay: h.NUMBER,
                    playbackmethod: h.ARRAY,
                    api: h.ARRAY,
                    protocols: h.ARRAY,
                    w: h.NUMBER,
                    h: h.NUMBER,
                    battr: h.ARRAY,
                    linearity: h.NUMBER,
                    placement: h.NUMBER,
                    minbitrate: h.NUMBER,
                    maxbitrate: h.NUMBER
                },
                m = {
                    1: "PMP",
                    5: "PREF",
                    6: "PMPG"
                },
                y = 0;

            function v(e, t) {
                if (!i.isStr(t)) return t && i.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (void 0 === t ? "undefined" : r(t))), f;
                switch (e) {
                    case "pmzoneid":
                        return t.split(",").slice(0, 50).map(function(e) {
                            return e.trim()
                        }).join();
                    case "kadfloor":
                    case "lat":
                    case "lon":
                        return parseFloat(t) || f;
                    case "yob":
                        return parseInt(t) || f;
                    default:
                        return t
                }
            }

            function b(e, t, n) {
                var o = "PubMatic: Ignoring param key: " + e + ", expects " + n + ", found " + (void 0 === t ? "undefined" : r(t));
                switch (n) {
                    case h.BOOLEAN:
                        return i.isBoolean(t) ? t : (i.logWarn(o), f);
                    case h.NUMBER:
                        return i.isNumber(t) ? t : (i.logWarn(o), f);
                    case h.STRING:
                        return i.isStr(t) ? t : (i.logWarn(o), f);
                    case h.ARRAY:
                        return i.isArray(t) ? t : (i.logWarn(o), f)
                }
            }

            function _(e) {
                var t, n, r, i = (t = l, !(r = (n = window.DigiTrust && (a.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: t
                }))) && n.success && n.identity || null) || r.privacy && r.privacy.optout ? null : r);
                null !== i && e.push({
                    source: "digitru.st",
                    uids: [{
                        id: i.id || "",
                        atype: 1,
                        ext: {
                            keyv: parseInt(i.keyv) || 0
                        }
                    }]
                })
            }
            var S = t.spec = {
                code: c,
                supportedMediaTypes: [s.BANNER, s.VIDEO],
                isBidRequestValid: function(e) {
                    return !(!e || !e.params || (i.isStr(e.params.publisherId) ? i.isStr(e.params.adSlot) ? !(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && i.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) && (i.logWarn(c + ": For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent."), 1) : (i.logWarn(c + ": adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), 1) : (i.logWarn(c + " Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), 1)))
                },
                buildRequests: function(e, t) {
                    var n, o, s, a, l = ((n = {}).pageURL = i.getTopWindowUrl(), n.refURL = i.getTopWindowReferrer(), n),
                        h = (o = l, {
                            id: "" + (new Date).getTime(),
                            at: 1,
                            cur: [d],
                            imp: [],
                            site: {
                                page: o.pageURL,
                                ref: o.refURL,
                                publisher: {}
                            },
                            device: {
                                ua: navigator.userAgent,
                                js: 1,
                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                h: screen.height,
                                w: screen.width,
                                language: navigator.language
                            },
                            user: {},
                            ext: {}
                        }),
                        m = "",
                        S = "",
                        w = [];
                    if (e.forEach(function(e) {
                            if (function(e) {
                                    e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0;
                                    var t, n = e.hasOwnProperty("sizes") && i.isArray(e.sizes) && 1 <= e.sizes.length;
                                    e.params.adSlot = (t = e.params.adSlot, i.isStr(t) ? t.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
                                    var r = e.params.adSlot,
                                        o = r.split(":");
                                    if (r = o[0], 2 == o.length && (e.params.adUnitIndex = o[1]), 2 == (o = r.split("@")).length || n)
                                        if (e.params.adUnit = o[0], 1 < o.length) {
                                            if (2 != (o = o[1].split("x")).length) return void i.logWarn("AdSlot Error: adSlot not in required format");
                                            e.params.width = parseInt(o[0]), e.params.height = parseInt(o[1]), delete e.sizes
                                        } else n && (e.params.width = parseInt(e.sizes[0][0]), e.params.height = parseInt(e.sizes[0][1]));
                                    else i.logWarn("AdSlot Error: adSlot not in required format")
                                }(a = i.deepClone(e)), a.params.hasOwnProperty("video")) {
                                if (!(a.params.adSlot && a.params.adUnit && a.params.adUnitIndex)) return void i.logWarn(c + ": Skipping the non-standard adslot: ", a.params.adSlot, a)
                            } else if (!(a.params.adSlot && a.params.adUnit && a.params.adUnitIndex && a.params.width && a.params.height)) return void i.logWarn(c + ": Skipping the non-standard adslot: ", a.params.adSlot, a);
                            l.pubId = l.pubId || a.params.publisherId, (l = function(e, t) {
                                var n, o, s;
                                for (n in t.kadpageurl || (t.kadpageurl = t.pageURL), p) p.hasOwnProperty(n) && (o = e[n]) && ("object" === (void 0 === (s = p[n]) ? "undefined" : r(s)) && (o = s.f(o, t)), i.isStr(o) ? t[n] = o : i.logWarn("PubMatic: Ignoring param : " + n + " with value : " + p[n] + ", expects string-value, found " + (void 0 === o ? "undefined" : r(o))));
                                return t
                            }(a.params, l)).transactionId = a.transactionId, "" === m ? m = a.params.currency || void 0 : a.params.hasOwnProperty("currency") && m !== a.params.currency && i.logWarn(c + ": Currency specifier ignored. Only one currency permitted."), a.params.currency = m, a.params.hasOwnProperty("dctr") && i.isStr(a.params.dctr) && w.push(a.params.dctr), h.imp.push(function(e, t) {
                                var n = {},
                                    r = {},
                                    o = {},
                                    s = e.hasOwnProperty("sizes") ? e.sizes : [];
                                if (n = {
                                        id: e.bidId,
                                        tagid: e.params.adUnit,
                                        bidfloor: v("kadfloor", e.params.kadfloor),
                                        secure: "https:" === window.location.protocol ? 1 : 0,
                                        ext: {
                                            pmZoneId: v("pmzoneid", e.params.pmzoneid)
                                        },
                                        bidfloorcur: e.params.currency ? v("currency", e.params.currency) : d
                                    }, e.params.hasOwnProperty("video")) {
                                    var a = e.params.video;
                                    for (var u in g) a.hasOwnProperty(u) && (o[u] = b(u, a[u], g[u]));
                                    i.isArray(e.mediaTypes.video.playerSize[0]) ? (o.w = e.mediaTypes.video.playerSize[0][0], o.h = e.mediaTypes.video.playerSize[0][1]) : i.isNumber(e.mediaTypes.video.playerSize[0]) && (o.w = e.mediaTypes.video.playerSize[0], o.h = e.mediaTypes.video.playerSize[1]), e.params.video.hasOwnProperty("skippable") && (o.ext = {
                                        video_skippable: e.params.video.skippable ? 1 : 0
                                    }), n.video = o
                                } else {
                                    if (r = {
                                            pos: 0,
                                            w: e.params.width,
                                            h: e.params.height,
                                            topframe: i.inIframe() ? 0 : 1
                                        }, i.isArray(s) && 1 < s.length) {
                                        var c = [];
                                        (s = s.splice(1, s.length - 1)).forEach(function(e) {
                                            c.push({
                                                w: e[0],
                                                h: e[1]
                                            })
                                        }), r.format = c
                                    }
                                    n.banner = r
                                }
                                return n
                            }(a))
                        }), 0 != h.imp.length) {
                        var T, E, A, I;
                        if (h.site.publisher.id = l.pubId.trim(), y = l.pubId.trim(), h.ext.wrapper = {}, h.ext.wrapper.profile = parseInt(l.profId) || f, h.ext.wrapper.version = parseInt(l.verId) || f, h.ext.wrapper.wiid = l.wiid || f, h.ext.wrapper.wv = u.REPO_AND_VERSION, h.ext.wrapper.transactionId = l.transactionId, h.ext.wrapper.wp = "pbjs", h.user.gender = l.gender ? l.gender.trim() : f, h.user.geo = {}, t && t.gdprConsent && (h.user.ext = {
                                consent: t.gdprConsent.consentString
                            }, h.regs = {
                                ext: {
                                    gdpr: t.gdprConsent.gdprApplies ? 1 : 0
                                }
                            }), h.user.geo.lat = v("lat", l.lat), h.user.geo.lon = v("lon", l.lon), h.user.yob = v("yob", l.yob), h.device.geo = {}, h.device.geo.lat = v("lat", l.lat), h.device.geo.lon = v("lon", l.lon), h.site.page = l.kadpageurl.trim() || h.site.page.trim(), h.site.domain = (T = h.site.page, (E = document.createElement("a")).href = T, E.hostname), e[0].params.hasOwnProperty("dctr")) {
                            if (S = e[0].params.dctr, i.isStr(S) && 0 < S.length) {
                                var O = S.split("|");
                                S = "", O.forEach(function(e) {
                                    S += 0 < e.length ? e.trim() + "|" : ""
                                }), s = S.length, "|" === S.substring(s, s - 1) && (S = S.substring(0, s - 1)), h.site.ext = {
                                    key_val: S.trim()
                                }
                            } else i.logWarn(c + ": Ignoring param : dctr with value : " + S + ", expects string-value, found empty or non-string value");
                            1 < w.length && i.logWarn(c + ": dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                        } else i.logWarn(c + ": dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                        return A = h, _(I = []), 0 < I.length && (A.user.eids = I), {
                            method: "POST",
                            url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(h)
                        }
                    }
                },
                interpretResponse: function(e, t) {
                    var n = [],
                        r = d;
                    try {
                        e.body && e.body.seatbid && i.isArray(e.body.seatbid) && (r = e.body.cur || r, e.body.seatbid.forEach(function(e) {
                            e.bid && i.isArray(e.bid) && e.bid.forEach(function(e) {
                                var o = {
                                        requestId: e.impid,
                                        cpm: (parseFloat(e.price) || 0).toFixed(2),
                                        width: e.w,
                                        height: e.h,
                                        creativeId: e.crid || e.id,
                                        dealId: e.dealid,
                                        currency: r,
                                        netRevenue: !1,
                                        ttl: 300,
                                        referrer: i.getTopWindowUrl(),
                                        ad: e.adm
                                    },
                                    s = JSON.parse(t.data);
                                s.imp && 0 < s.imp.length && s.imp.forEach(function(t) {
                                    e.impid === t.id && t.hasOwnProperty("video") && (o.mediaType = "video", o.width = e.hasOwnProperty("w") ? e.w : t.video.w, o.height = e.hasOwnProperty("h") ? e.h : t.video.h, o.vastXml = e.adm)
                                }), e.ext && e.ext.deal_channel && (o.dealChannel = m[e.ext.deal_channel] || null), n.push(o)
                            })
                        }))
                    } catch (e) {
                        i.logError(e)
                    }
                    return n
                },
                getUserSyncs: function(e, t, n) {
                    var r = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + y;
                    if (n && (r += "&gdpr=" + (n.gdprApplies ? 1 : 0), r += "&gdpr_consent=" + encodeURIComponent(n.consentString || "")), e.iframeEnabled) return [{
                        type: "iframe",
                        url: r
                    }];
                    i.logWarn("PubMatic: Please enable iframe based user sync.")
                },
                transformBidParams: function(e, t) {
                    return i.convertTypes({
                        publisherId: "string",
                        adSlot: "string"
                    }, e)
                }
            };
            (0, o.registerBidder)(S)
        },
        440: function(e, t) {}
    }, [438]), pbjsChunk([50], {
        488: function(e, t, n) {
            n(489), e.exports = n(490)
        },
        489: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = t.SYNC_ENDPOINT = t.VIDEO_ENDPOINT = t.FASTLANE_ENDPOINT = void 0;
            var r = function(e, t) {
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
                },
                i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
            t.hasVideoMediaType = b, t.masSizeOrdering = S, t.determineRubiconVideoSizeId = w, t.resetUserSync = function() {
                T = !1
            };
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                s = n(1),
                a = n(3),
                u = n(2),
                c = "pbjs_lite_v1.32.0",
                d = t.FASTLANE_ENDPOINT = "//fastlane.rubiconproject.com/a/api/fastlane.json",
                l = t.VIDEO_ENDPOINT = "//fastlane-adv.rubiconproject.com/v1/auction/video",
                f = t.SYNC_ENDPOINT = "https://eus.rubiconproject.com/usync.html",
                p = {
                    1: "468x60",
                    2: "728x90",
                    5: "120x90",
                    8: "120x600",
                    9: "160x600",
                    10: "300x600",
                    13: "200x200",
                    14: "250x250",
                    15: "300x250",
                    16: "336x280",
                    19: "300x100",
                    31: "980x120",
                    32: "250x360",
                    33: "180x500",
                    35: "980x150",
                    37: "468x400",
                    38: "930x180",
                    39: "750x100",
                    40: "750x200",
                    41: "750x300",
                    43: "320x50",
                    44: "300x50",
                    48: "300x300",
                    53: "1024x768",
                    54: "300x1050",
                    55: "970x90",
                    57: "970x250",
                    58: "1000x90",
                    59: "320x80",
                    60: "320x150",
                    61: "1000x1000",
                    64: "580x500",
                    65: "640x480",
                    67: "320x480",
                    68: "1800x1000",
                    72: "320x320",
                    73: "320x160",
                    78: "980x240",
                    79: "980x300",
                    80: "980x400",
                    83: "480x300",
                    94: "970x310",
                    96: "970x210",
                    101: "480x320",
                    102: "768x1024",
                    103: "480x280",
                    108: "320x240",
                    113: "1000x300",
                    117: "320x100",
                    125: "800x250",
                    126: "200x600",
                    144: "980x600",
                    159: "320x250",
                    195: "600x300",
                    199: "640x200",
                    213: "1030x590",
                    214: "980x360",
                    229: "320x180",
                    232: "580x400",
                    257: "400x600"
                };
            o._each(p, function(e, t) {
                return p[e] = t
            });
            var h = t.spec = {
                code: "rubicon",
                aliases: ["rubiconLite"],
                supportedMediaTypes: [u.BANNER, u.VIDEO],
                isBidRequestValid: function(e) {
                    return "object" === i(e.params) && !!/^\d+$/.test(e.params.accountId) && !!_(e, !0)
                },
                buildRequests: function(e, t) {
                    var n = [],
                        r = e.filter(function(e) {
                            return "video" === _(e)
                        }).map(function(e) {
                            e.startTime = (new Date).getTime();
                            var n = e.params,
                                r = y(e, "video"),
                                o = {
                                    page_url: m(e, t),
                                    resolution: g(),
                                    account_id: n.accountId,
                                    integration: c,
                                    "x_source.tid": e.transactionId,
                                    timeout: t.timeout - (Date.now() - t.auctionStart + 500),
                                    stash_creatives: !0,
                                    slots: []
                                },
                                s = {
                                    site_id: n.siteId,
                                    zone_id: n.zoneId,
                                    position: "atf" === n.position || "btf" === n.position ? n.position : "unknown",
                                    floor: .01 < parseFloat(n.floor) ? n.floor : .01,
                                    element_id: e.adUnitCode,
                                    name: e.adUnitCode,
                                    width: r[0],
                                    height: r[1],
                                    size_id: w(e)
                                };
                            return n.video && (o.ae_pass_through_parameters = n.video.aeParams, s.language = n.video.language), n.inventory && "object" === i(n.inventory) && (s.inventory = n.inventory), n.keywords && Array.isArray(n.keywords) && (s.keywords = n.keywords), n.visitor && "object" === i(n.visitor) && (s.visitor = n.visitor), o.slots.push(s), t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (o.gdpr = Number(t.gdprConsent.gdprApplies)), o.gdpr_consent = t.gdprConsent.consentString), {
                                method: "POST",
                                url: l,
                                data: o,
                                bidRequest: e
                            }
                        });
                    if (!0 !== a.config.getConfig("rubicon.singleRequest")) n = r.concat(e.filter(function(e) {
                        return "banner" === _(e)
                    }).map(function(e) {
                        var n = h.createSlotParams(e, t);
                        return {
                            method: "GET",
                            url: d,
                            data: h.getOrderedParams(n).reduce(function(e, t) {
                                var r = n[t];
                                return o.isStr(r) && "" !== r || o.isNumber(r) ? "" + e + t + "=" + encodeURIComponent(r) + "&" : e
                            }, "") + "slots=1&rand=" + Math.random(),
                            bidRequest: e
                        }
                    }));
                    else {
                        var s = e.filter(function(e) {
                            return "banner" === _(e)
                        }).reduce(function(e, t) {
                            return (e[t.params.siteId] = e[t.params.siteId] || []).push(t), e
                        }, {});
                        n = r.concat(Object.keys(s).map(function(e) {
                            var n = s[e];
                            10 < n.length && (o.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (n.length - 10) + " bids were not sent"), n = n.slice(0, 10));
                            var r = h.combineSlotUrlParams(n.map(function(e) {
                                return h.createSlotParams(e, t)
                            }));
                            return {
                                method: "GET",
                                url: d,
                                data: h.getOrderedParams(r).reduce(function(e, t) {
                                    var n = r[t];
                                    return o.isStr(n) && "" !== n || o.isNumber(n) ? "" + e + t + "=" + encodeURIComponent(n) + "&" : e
                                }, "") + "slots=" + n.length + "&rand=" + Math.random(),
                                bidRequest: n
                            }
                        }))
                    }
                    return n
                },
                getOrderedParams: function(e) {
                    var t = /^tg_v/,
                        n = /^tg_i/,
                        r = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                            return t.test(e)
                        })).concat(Object.keys(e).filter(function(e) {
                            return n.test(e)
                        })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return r.concat(Object.keys(e).filter(function(e) {
                        return -1 === r.indexOf(e)
                    }))
                },
                combineSlotUrlParams: function(e) {
                    if (1 === e.length) return e[0];
                    var t = e.reduce(function(t, n, r) {
                            return Object.keys(n).forEach(function(i) {
                                t.hasOwnProperty(i) || (t[i] = new Array(e.length)), t[i].splice(r, 1, n[i])
                            }), t
                        }, {}),
                        n = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(t).forEach(function(e) {
                        var r = t[e].join(";"),
                            i = r.match(n);
                        t[e] = i ? i[1] : r
                    }), t
                },
                createSlotParams: function(e, t) {
                    e.startTime = (new Date).getTime();
                    var n = e.params,
                        o = y(e, "banner"),
                        s = n.latLong || [],
                        u = r(s, 2),
                        d = u[0],
                        l = u[1],
                        f = {
                            account_id: n.accountId,
                            site_id: n.siteId,
                            zone_id: n.zoneId,
                            size_id: o[0],
                            alt_size_ids: o.slice(1).join(",") || void 0,
                            p_pos: "atf" === n.position || "btf" === n.position ? n.position : "unknown",
                            rp_floor: .01 < (n.floor = parseFloat(n.floor)) ? n.floor : .01,
                            rp_secure: "https:" === location.protocol ? "1" : "0",
                            tk_flint: c,
                            "x_source.tid": e.transactionId,
                            p_screen_res: g(),
                            kw: Array.isArray(n.keywords) ? n.keywords.join(",") : "",
                            tk_user_key: n.userId,
                            "p_geo.latitude": isNaN(parseFloat(d)) ? void 0 : parseFloat(d).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(l)) ? void 0 : parseFloat(l).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: m(e, t)
                        };
                    t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (f.gdpr = Number(t.gdprConsent.gdprApplies)), f.gdpr_consent = t.gdprConsent.consentString), null !== n.visitor && "object" === i(n.visitor) && Object.keys(n.visitor).forEach(function(e) {
                        null != n.visitor[e] && (f["tg_v." + e] = n.visitor[e].toString())
                    }), null !== n.inventory && "object" === i(n.inventory) && Object.keys(n.inventory).forEach(function(e) {
                        null != n.inventory[e] && (f["tg_i." + e] = n.inventory[e].toString())
                    });
                    var p = function() {
                        var e, t = (e = window.DigiTrust && (a.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        }))) && e.success && e.identity || null;
                        return !t || t.privacy && t.privacy.optout ? [] : {
                            "dt.id": t.id,
                            "dt.keyv": t.keyv,
                            "dt.pref": 0
                        }
                    }();
                    return Object.keys(p).forEach(function(e) {
                        f[e] = p[e]
                    }), f
                },
                interpretResponse: function(e, t) {
                    var n = t.bidRequest;
                    if (!(e = e.body) || "object" !== (void 0 === e ? "undefined" : i(e))) return [];
                    var s = e.ads;
                    return "object" !== (void 0 === n ? "undefined" : i(n)) || Array.isArray(n) || "video" !== _(n) || "object" !== (void 0 === s ? "undefined" : i(s)) || (s = s[n.adUnitCode]), !Array.isArray(s) || s.length < 1 ? [] : s.reduce(function(t, s, c) {
                        if ("ok" !== s.status) return t;
                        var d, l = Array.isArray(n) ? n[c] : n;
                        if (l && "object" === (void 0 === l ? "undefined" : i(l))) {
                            var f = {
                                requestId: l.bidId,
                                currency: "USD",
                                creativeId: s.creative_id || (s.network || "") + "-" + (s.advertiser || ""),
                                cpm: s.cpm || 0,
                                dealId: s.deal,
                                ttl: 300,
                                netRevenue: a.config.getConfig("rubicon.netRevenue") || !1,
                                rubicon: {
                                    advertiserId: s.advertiser,
                                    networkId: s.network
                                }
                            };
                            if (s.creative_type && (f.mediaType = s.creative_type), s.creative_type === u.VIDEO) f.width = l.params.video.playerWidth, f.height = l.params.video.playerHeight, f.vastUrl = s.creative_depot_url, f.impression_id = s.impression_id, f.videoCacheKey = s.impression_id;
                            else {
                                f.ad = (d = s.script, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + s.impression_id + "'>\n<script type='text/javascript'>" + d + "<\/script>\n</div>\n</body>\n</html>");
                                var h = p[s.size_id].split("x").map(function(e) {
                                        return Number(e)
                                    }),
                                    g = r(h, 2);
                                f.width = g[0], f.height = g[1]
                            }
                            f.rubiconTargeting = (Array.isArray(s.targeting) ? s.targeting : []).reduce(function(e, t) {
                                return e[t.key] = t.values[0], e
                            }, {
                                rpfl_elemid: l.adUnitCode
                            }), t.push(f)
                        } else o.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + c, n, e);
                        return t
                    }, []).sort(function(e, t) {
                        return (t.cpm || 0) - (e.cpm || 0)
                    })
                },
                getUserSyncs: function(e, t, n) {
                    if (!T && e.iframeEnabled) {
                        var r = "";
                        return n && "string" == typeof n.consentString && ("boolean" == typeof n.gdprApplies ? r += "?gdpr=" + Number(n.gdprApplies) + "&gdpr_consent=" + n.consentString : r += "?gdpr_consent=" + n.consentString), T = !0, {
                            type: "iframe",
                            url: f + r
                        }
                    }
                },
                transformBidParams: function(e, t) {
                    return o.convertTypes({
                        accountId: "number",
                        siteId: "number",
                        zoneId: "number"
                    }, e)
                }
            };

            function g() {
                return [window.screen.width, window.screen.height].join("x")
            }

            function m(e, t) {
                var n = a.config.getConfig("pageUrl");
                return e.params.referrer ? n = e.params.referrer : n || (n = t.refererInfo.referer), e.params.secure ? n.replace(/^http:/i, "https:") : n
            }

            function y(e, t) {
                var n = e.params;
                if ("video" === t) {
                    var r = [];
                    return n.video && n.video.playerWidth && n.video.playerHeight ? r = [n.video.playerWidth, n.video.playerHeight] : Array.isArray(o.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? r = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (r = e.sizes[0]), r
                }
                var i = [];
                return Array.isArray(n.sizes) ? i = n.sizes : void 0 !== o.deepAccess(e, "mediaTypes.banner.sizes") ? i = v(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = v(e.sizes) : o.logWarn("Warning: no sizes are setup or found"), S(i)
            }

            function v(e) {
                return o.parseSizesInput(e).reduce(function(e, t) {
                    var n = parseInt(p[t], 10);
                    return n && e.push(n), e
                }, [])
            }

            function b(e) {
                return "object" === i(o.deepAccess(e, "params.video")) && (e.mediaType === u.VIDEO || void 0 !== o.deepAccess(e, "mediaTypes." + u.VIDEO))
            }

            function _(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                if (b(e)) {
                    if (void 0 !== o.deepAccess(e, "mediaTypes." + u.VIDEO)) {
                        if (-1 === ["outstream", "instream"].indexOf(o.deepAccess(e, "mediaTypes." + u.VIDEO + ".context"))) return void(t && o.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream"))
                    } else if (t && o.logWarn("Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!"), isNaN(parseInt(o.deepAccess(e, "params.video.size_id")))) return void(t && o.logError("Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video"));
                    return y(e, "video").length < 2 ? void(t && o.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (t && o.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video")
                }
                return 0 === y(e, "banner").length ? void(t && o.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (t && o.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
            }

            function S(e) {
                var t = [15, 2, 9];
                return e.sort(function(e, n) {
                    var r = t.indexOf(e),
                        i = t.indexOf(n);
                    return -1 < r || -1 < i ? -1 === r ? 1 : -1 === i ? -1 : r - i : e - n
                })
            }

            function w(e) {
                var t = parseInt(o.deepAccess(e, "params.video.size_id"));
                return isNaN(t) ? "outstream" === o.deepAccess(e, "mediaTypes." + u.VIDEO + ".context") ? 203 : 201 : t
            }
            var T = !1;
            (0, s.registerBidder)(h)
        },
        490: function(e, t) {}
    }, [488]), pbjsChunk([13], {
        608: function(e, t, n) {
            n(609), e.exports = n(610)
        },
        609: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.spec = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(0)),
                i = n(3),
                o = n(1),
                s = n(2),
                a = t.spec = {
                    code: "yieldone",
                    aliases: ["y1"],
                    supportedMediaTypes: [s.BANNER, s.VIDEO],
                    isBidRequestValid: function(e) {
                        return !!e.params.placementId
                    },
                    buildRequests: function(e) {
                        return e.map(function(e) {
                            var t = {
                                    v: "hb1",
                                    p: e.params.placementId,
                                    cb: Math.floor(99999999999 * Math.random()),
                                    r: encodeURIComponent(r.getTopWindowUrl()),
                                    uid: e.bidId,
                                    t: "i"
                                },
                                n = r.deepAccess(e, "mediaTypes.video");
                            if (e.mediaType === s.VIDEO || n) {
                                var i = r.deepAccess(e, "mediaTypes.video.playerSize") || e.sizes,
                                    o = r.parseSizesInput(i)[0];
                                t.w = o.split("x")[0], t.h = o.split("x")[1]
                            } else if (r.isEmpty(e.mediaType) && r.isEmpty(e.mediaTypes) || e.mediaType === s.BANNER || e.mediaTypes && e.mediaTypes[s.BANNER]) {
                                var a = r.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes;
                                t.sz = r.parseSizesInput(a).join(",")
                            }
                            return {
                                method: "GET",
                                url: "//y.one.impact-ad.jp/h_bid",
                                data: t
                            }
                        })
                    },
                    interpretResponse: function(e, t) {
                        var n = [],
                            o = e.body,
                            a = o.crid || 0,
                            u = o.width || 0,
                            c = o.height || 0,
                            d = 1e3 * o.cpm || 0;
                        if (0 !== u && 0 !== c && 0 !== d && 0 !== a) {
                            var l = o.dealId || "",
                                f = o.currency || "JPY",
                                p = void 0 === o.netRevenue || o.netRevenue,
                                h = r.getTopWindowUrl(),
                                g = {
                                    requestId: o.uid,
                                    cpm: d,
                                    width: o.width,
                                    height: o.height,
                                    creativeId: a,
                                    dealId: l,
                                    currency: f,
                                    netRevenue: p,
                                    ttl: i.config.getConfig("_bidderTimeout"),
                                    referrer: h
                                };
                            o.adTag ? (g.mediaType = s.BANNER, g.ad = o.adTag) : o.adm && (g.mediaType = s.VIDEO, g.vastXml = o.adm), n.push(g)
                        }
                        return n
                    },
                    getUserSyncs: function(e) {
                        if (e.iframeEnabled) return [{
                            type: "iframe",
                            url: "//y.one.impact-ad.jp/push_sync"
                        }]
                    }
                };
            (0, o.registerBidder)(a)
        },
        610: function(e, t) {}
    }, [608]), pbjs.processQueue()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(21),
        i = n(1),
        o = n(22),
        s = function() {
            function e(e, t, n, i) {
                this.prebid = new o.PrebidService(e, t, n, i), this.tam = new r.AmazonTAMService(e, i)
            }
            return e.prototype.request = function(e) {
                var t = this;
                return e.forEach(function(e) {
                    e.canUseForBidding() && (t.prebid.pushAdUnit(e), t.tam.pushSlot(e))
                }), i.Logger.instance.time("HeaderBidding/Prebid"), i.Logger.instance.time("HeaderBidding/TAM"), Promise.all([this.prebid.requestBids().then(function() {
                    return i.Logger.instance.timeEnd("HeaderBidding/Prebid")
                }), this.tam.requestBids().then(function() {
                    return i.Logger.instance.timeEnd("HeaderBidding/TAM")
                })])
            }, e
        }();
    t.HeaderBidding = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(7),
        i = function() {
            function e(e, t) {
                this.slots = [], this.isBiddingDone = !1;
                var n = (e.tam || {}).pubID;
                this.enabled = !!n, this.enabled && (r.ScriptLoader.instance.load("apstag").then(function() {
                    apstag.debug(t ? "enable" : "disable")
                }), apstag.init({
                    pubID: n,
                    adServer: "googletag",
                    bidTimeout: 800
                }))
            }
            return e.prototype.pushSlot = function(e) {
                this.enabled && this.slots.push({
                    slotID: e.slotId,
                    slotName: e.unit,
                    sizes: e.squareSizes
                })
            }, e.prototype.requestBids = function() {
                var e = this;
                return this.enabled && 0 !== this.slots.length ? new Promise(function(t) {
                    apstag.fetchBids({
                        slots: e.slots
                    }, function() {
                        e.isBiddingDone || apstag.setDisplayBids(), e.isBiddingDone = !0, t()
                    })
                }) : Promise.resolve()
            }, e
        }();
    t.AmazonTAMService = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i, o = n(10),
        s = function() {
            function e(e, t, n, r) {
                var i = this;
                this.prebidConfig = {
                    enableSendAllBids: !0,
                    debug: !1,
                    bidderTimeout: 800,
                    currency: {
                        adServerCurrency: "JPY",
                        bidderCurrencyDefault: {
                            openx: "JPY"
                        }
                    },
                    priceGranularity: {
                        buckets: [{
                            min: 0,
                            max: 300,
                            increment: 1,
                            precision: 0
                        }, {
                            min: 305,
                            max: 800,
                            increment: 5,
                            precision: 0
                        }, {
                            min: 850,
                            max: 2e3,
                            increment: 50,
                            precision: 0
                        }, {
                            min: 2100,
                            max: 4600,
                            increment: 100,
                            precision: 0
                        }]
                    },
                    userSync: {
                        syncEnabled: !0,
                        syncsPerBidder: 5,
                        syncDelay: 3e3
                    }
                }, this.biddingParams = e || {}, this.unitToBidderUnits = t || {}, this.bypass = n, this.prebidConfig.debug = r, this.adUnits = [], this.isBiddingDone = !1, o.pushPrebidCommand(function() {
                    return pbjs.setConfig(i.prebidConfig)
                })
            }
            return e.prototype.pushAdUnit = function(t) {
                var n = this,
                    o = this.unitToBidderUnits[t.unit] || {},
                    s = t.squareSizes,
                    a = e.bidders.reduce(function(e, t) {
                        var a = i.bidderInstances[t],
                            u = o[t],
                            c = n.biddingParams[t];
                        if (a && u && c) {
                            var d = a.bid(u, c, s, n.bypass),
                                l = d[0],
                                f = d[1];
                            l && (e.push(l), f && (s = r.prependLeadingSize(f, s)))
                        }
                        return e
                    }, []);
                0 !== a.length && this.adUnits.push({
                    code: t.slotId,
                    mediaTypes: {
                        banner: {
                            sizes: s
                        }
                    },
                    bids: a
                })
            }, e.prototype.requestBids = function() {
                var e = this;
                return 0 === this.adUnits.length ? Promise.resolve() : new Promise(function(t) {
                    o.pushPrebidCommand(function() {
                        pbjs.addAdUnits(e.adUnits), pbjs.requestBids({
                            bidsBackHandler: function() {
                                e.isBiddingDone || o.pushGPTCommand(function() {
                                    return pbjs.setTargetingForGPTAsync()
                                }), e.isBiddingDone = !0, t()
                            }
                        })
                    })
                })
            }, e.bidders = ["openx", "criteo", "yieldone", "rubicon", "audienceNetwork", "adgeneration", "onedisplay", "pubmatic", "aja"], e
        }();
    t.PrebidService = s,
        function(e) {
            e.isAllSizeContaining = function(e, t) {
                return e.every(function(e) {
                    return t.some(function(t) {
                        return t[0] === e[0] && t[1] === e[1]
                    })
                })
            }, e.prependLeadingSize = function(e, t) {
                var n = t.filter(function(t) {
                    return !(t[0] === e[0] && t[1] === e[1])
                });
                return n.unshift(e), n
            }
        }(r || (r = {})), t.BidSizeUtil = r,
        function(e) {
            var t = [void 0, void 0],
                n = function() {
                    function e() {
                        this.bidderCode = "openx"
                    }
                    return e.prototype.bid = function(e, n, r, i) {
                        return n.delDomain && !i ? [{
                            bidder: this.bidderCode,
                            params: {
                                unit: e.unitId,
                                delDomain: n.delDomain
                            }
                        }, void 0] : t
                    }, e
                }(),
                i = function() {
                    function e() {
                        this.bidderCode = "criteo"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) ? [{
                            bidder: this.bidderCode,
                            params: {
                                zoneId: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }(),
                o = function() {
                    function e() {
                        this.bidderCode = "yieldone"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) ? [{
                            bidder: this.bidderCode,
                            params: {
                                placementId: e.unitId
                            }
                        }, e.sizes ? e.sizes[0] : void 0] : t
                    }, e
                }(),
                s = function() {
                    function e() {
                        this.bidderCode = "rubicon"
                    }
                    return e.prototype.bid = function(e, n, r, i) {
                        return n.accountId && n.siteId ? [{
                            bidder: this.bidderCode,
                            params: {
                                accountId: n.accountId,
                                siteId: n.siteId,
                                zoneId: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }(),
                a = function() {
                    function e() {
                        this.bidderCode = "audienceNetwork"
                    }
                    return e.prototype.bid = function(e, n, r, i) {
                        return i ? t : [{
                            bidder: this.bidderCode,
                            params: {
                                placementId: e.unitId
                            }
                        }, void 0]
                    }, e
                }(),
                u = function() {
                    function e() {
                        this.bidderCode = "adgeneration"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) ? [{
                            bidder: this.bidderCode,
                            params: {
                                id: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }(),
                c = function() {
                    function e() {
                        this.bidderCode = "onedisplay"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) && n.network && n.region ? [{
                            bidder: this.bidderCode,
                            params: {
                                network: n.network,
                                region: n.region,
                                placement: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }(),
                d = function() {
                    function e() {
                        this.bidderCode = "pubmatic"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) && n.publisherId ? [{
                            bidder: this.bidderCode,
                            params: {
                                publisherId: n.publisherId,
                                adSlot: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }(),
                l = function() {
                    function e() {
                        this.bidderCode = "aja"
                    }
                    return e.prototype.bid = function(e, n, i, o) {
                        return r.isAllSizeContaining(e.sizes || [], i) ? [{
                            bidder: this.bidderCode,
                            params: {
                                asi: e.unitId
                            }
                        }, void 0] : t
                    }, e
                }();
            e.bidderInstances = {
                openx: new n,
                criteo: new i,
                yieldone: new o,
                rubicon: new s,
                audienceNetwork: new a,
                adgeneration: new u,
                onedisplay: new c,
                pubmatic: new d,
                aja: new l
            }
        }(i || (i = {})), t.PrebidBidder = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(8),
        i = n(9),
        o = function() {
            function e(e, t) {
                this.contentTextTimeout = 300, this.keywordSearchTimeout = 300, this.textSelectors = e, this.keywords = t
            }
            return e.prototype.run = function() {
                var e = this;
                if (0 === this.textSelectors.length) throw new Error("empty textSelectors");
                if (0 === this.keywords.length) throw new Error("empty keywords");
                return new i.PageTextExtractor(this.textSelectors).contentTextWithTimeout(this.contentTextTimeout).then(function(t) {
                    return new r.KeywordSearcher(e.keywords, t).search(e.keywordSearchTimeout)
                }).then(function(e) {
                    var t = e[0],
                        n = (e[1], t.reduce(function(e, t) {
                            return e.words[t.word] = !0, e.params[t.parameter] = !0, e
                        }, {
                            words: {},
                            params: {}
                        }));
                    return {
                        words: Object.keys(n.words),
                        parameters: Object.keys(n.params)
                    }
                })
            }, e.emptyResult = {
                words: [],
                parameters: []
            }, e
        }();
    t.ContentMatch = o
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2),
        s = n(11),
        a = n(25),
        u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.defaultAlpha = 5.1, t.alphaRandTable = ["-0.06", "-0.13", "-0.19", "-0.26", "-0.34", "-0.42", "-0.52", "-0.64", "-0.82", "0.00", "0.06", "0.13", "0.19", "0.26", "0.34", "0.42", "0.52", "0.64", "0.82"], t.floorPriceTable = [100, 108, 116, 126, 135, 146, 158, 170, 183, 198, 213, 230, 248, 268, 289, 312, 336, 363, 391, 422, 455, 491, 530, 571, 616, 665, 717, 773, 834, 900], t.firstPricePredictor = new s.FirstPricePredictorV6, t.cpmPredictor = new a.CPMPredictorV6, t
            }
            return i(t, e), t.prototype.predictFloorPriceKeyValues = function(e) {
                var t = this.predictFloorPrice(e);
                return {
                    "is-valve-flp": "true",
                    "valve-flp-v6": t[0],
                    "valve-flp-rand-ab-v6": [t[1], "0.0"].join("|"),
                    "valve-flp-version": "v6"
                }
            }, t.prototype.predictFloorPrice = function(e) {
                var t = this.cpmPredictor.predictCPM([e.platform, e.dntType, e.service, e.adUnitPath]),
                    n = this.firstPricePredictor.predictFirstPrice(t),
                    r = this.pickRandomFromArray(this.alphaRandTable),
                    i = this.defaultAlpha + parseFloat(r),
                    o = this.selectFloorStep(i * n);
                return [String(o), r]
            }, t
        }(o.FloorPricePredictor);
    t.FloorPricePredictorV6 = u
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.nFeatures = 4, t.uniqueKeyDict = {
                And: 0,
                DNT0: 0,
                DNT1: 1,
                PC: .5,
                anond: 0,
                antenna: .0625,
                blog: .125,
                comicd: .1875,
                diary: .25,
                fotolife: .3125,
                haiku: .375,
                heros: .4375,
                iOS: 1,
                jumpp: .5,
                keyword: .5625,
                kurage: .625,
                mgpk: .6875,
                news: .75,
                portal: .8125,
                question: .875,
                "to-ti": .9375,
                tonaj: 1
            }, t.coef = [20537781.394035596, 12514614103.379185, -34221727322.50711, 3.8135671615600586, 6.046149730682373, -37543842312.80925, -55236038752.44901, -1.2495739459991455, 1.8592350482940674, 17099993953.448914, 58212846400.726585, -553063182349.7465, -6.971877098083496, -.3406982421875, -11.460304737091064, 25029228208.834354, .5829718112945557, .8034632802009583, -2.870375007390976, 55236038752.29678, -.43716681003570557, -.1811608076095581, .5154361724853516, .05850338935852051, 1.611189842224121, 17121733368.51889, -58212846399.78885, 553063182349.8595, -.6034587621688843, -.02370166778564453, -.02975285053253174, 3.763345718383789, -.18160438537597656, .35746049880981445, 6.912075042724609], t.intercept = -20537778.774780136, t.powers = [
                [0, 0, 0, 0],
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
                [2, 0, 0, 0],
                [1, 1, 0, 0],
                [1, 0, 1, 0],
                [1, 0, 0, 1],
                [0, 2, 0, 0],
                [0, 1, 1, 0],
                [0, 1, 0, 1],
                [0, 0, 2, 0],
                [0, 0, 1, 1],
                [0, 0, 0, 2],
                [3, 0, 0, 0],
                [2, 1, 0, 0],
                [2, 0, 1, 0],
                [2, 0, 0, 1],
                [1, 2, 0, 0],
                [1, 1, 1, 0],
                [1, 1, 0, 1],
                [1, 0, 2, 0],
                [1, 0, 1, 1],
                [1, 0, 0, 2],
                [0, 3, 0, 0],
                [0, 2, 1, 0],
                [0, 2, 0, 1],
                [0, 1, 2, 0],
                [0, 1, 1, 1],
                [0, 1, 0, 2],
                [0, 0, 3, 0],
                [0, 0, 2, 1],
                [0, 0, 1, 2],
                [0, 0, 0, 3]
            ], t
        }
        return i(t, e), t.prototype.predictCPM = function(e) {
            var t = this.features2x(e);
            t = this.poly(t);
            for (var n = this.intercept, r = 0; r < t.length; ++r) n += this.coef[r] * t[r];
            if (n = Math.exp(n) - 1, isNaN(n)) throw new Error("Error: pred is nan." + e[0] + e[1] + e[2] + e[3]);
            return n
        }, t.prototype.features2x = function(e) {
            if (e.length !== this.nFeatures) throw new Error("Error: features.length is wrond. " + String(e.length) + "!=" + String(this.nFeatures));
            for (var t = [], n = 0; n < e.length; ++n)
                if (3 !== n) {
                    if (!(e[n] in this.uniqueKeyDict)) throw new Error("Error: The wrong feature appeared. : " + e[n]);
                    t.push(this.uniqueKeyDict[e[n]])
                } else {
                    var r = e[n],
                        i = this.activeViewRate[r];
                    if (null == i) throw new Error("Error: this model does not support the unit: " + r);
                    t.push(Number(i))
                } return t
        }, t.prototype.polyPartial = function(e, t) {
            for (var n = 1, r = 0; r < this.nFeatures; ++r) n *= Math.pow(e[r], t[r]);
            return n
        }, t.prototype.poly = function(e) {
            for (var t = [], n = 0, r = this.powers; n < r.length; n++) {
                var i = r[n];
                t = t.concat(this.polyPartial(e, i))
            }
            return t
        }, t
    }(n(2).CPMPredictor);
    t.CPMPredictorV6 = o
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2),
        s = n(27),
        a = n(11),
        u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.defaultAlpha = 4.28, t.alphaRandTable = ["-0.06", "-0.13", "-0.19", "-0.26", "-0.34", "-0.42", "-0.52", "-0.64", "-0.82", "0.00", "0.06", "0.13", "0.19", "0.26", "0.34", "0.42", "0.52", "0.64", "0.82"], t.floorPriceTable = [100, 108, 116, 126, 135, 146, 158, 170, 183, 198, 213, 230, 248, 268, 289, 312, 336, 363, 391, 422, 455, 491, 530, 571, 616, 665, 717, 773, 834, 900], t.cpmPredictor = new s.CPMPredictorV7, t.firstPricePredictor = new a.FirstPricePredictorV6, t
            }
            return i(t, e), t.prototype.predictFloorPriceKeyValues = function(e) {
                var t = this.predictFloorPrice(e);
                return {
                    "is-valve-flp": "true",
                    "valve-flp-version": "v7",
                    "valve-flp-v7": t[0],
                    "valve-flp-rand-ab-v7": [t[1], "0.0"].join("|"),
                    "valve-flp-v6": "null",
                    "valve-flp-rand-ab-v6": "null"
                }
            }, t.prototype.predictFloorPrice = function(e) {
                var t = this.cpmPredictor.predictCPM([e.platform, e.dntType, e.service, e.adUnitPath, e.hour, e.refererType, e.numUnits, e.unitSize30, e.unitSize33, e.unitSize32, e.unitSize72, e.unitSize97, e.weekday]),
                    n = this.firstPricePredictor.predictFirstPrice(t),
                    r = this.pickRandomFromArray(this.alphaRandTable),
                    i = this.defaultAlpha + parseFloat(r),
                    o = this.selectFloorStep(i * n);
                return [String(o), r]
            }, t
        }(o.FloorPricePredictor);
    t.FloorPricePredictorV7 = u
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
    }, function(e, t) {
        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2),
        s = n(28),
        a = function(e) {
            function t() {
                var t = e.call(this) || this;
                t.targetEncoder = new s.TargetEncoderV7, t.featureNames = ["hour", "platform", "dntType", "refererType", "numUnits", "unitSize30", "unitSize33", "unitSize32", "unitSize72", "unitSize97", "weekday", "service", "adUnitPath", "activeViewRate"], t.coef = [-50538125366480416e-22, 10.473683657061146, -38.32056387677507, 11427921326.621449, 97.99546984903007, 44.82979414336244, 22013694866.44296, 26396726374.587746, -9550523075.191843, -21386973967.471165, 49928664667.7064, 16.435364607727767, 139.9169811313149, -19.5289462877589, 45.48509307104098, 1.6984848916685262, 1.4010811594578225, -.2257506299123797, .9745293602355911, -.8200079065374948, .43430683221350597, -9.047198234409448, 1.5513874270110812, -1.2690849942581561, 2.143296167064154, -1.01689593709174, .08434529520612699, -.5094643106211394, 1.0949856889702398, .129608676574827, 1.4103769549510174, -1.5765819206877607, -.4948908555425249, .1431288719177246, 9.988645076751709, -1.7967627048492432, .6021556854248047, 2.811291217803955, -1.256377935409546, .20489120483398438, -.14921951293945312, -.23100566864013672, -1701731415.182005, .8750724792480469, .5428752899169922, .32717132568359375, 6.35336971282959, -1.7063961029052734, .618830680847168, -.6819801330566406, -.7351970672607422, .05687141418457031, -.3013134002685547, .4885420799255371, -3.541849136352539, -.6967086791992188, -4.505367279052734, -34.76565980911255, 12.348134994506836, -7.5567426681518555, 5.824067115783691, 8.495475769042969, -2.7127797603607178, 1.8534021377563477, -3.4015438556671143, -1.2958087921142578, 8.199976921081543, -14.487875938415527, 1.7351951599121094, .8229775428771973, -2.29660701751709, -3.4198741912841797, .6014668941497803, -.5043087005615234, 2.0810470581054688, -63537130032.542725, 200437389491.08603, -131.1899242401123, 4340075928.4114685, -85766825523.722, 4.93858528137207, .7070615291595459, 2.3171560764312744, -17.64051389694214, -104872082661.58694, 501.8900566101074, -26288476344.489006, 26338583030.441975, -22.09750747680664, -50.29197406768799, 5.333723068237305, 6.115854263305664, 113349187556.1986, -65.48124980926514, -225418998513.32852, 1.9539928436279297, 12.142969608306885, -3.460812568664551, 1.1510307788848877, -7904207287.296276, 44988278267.54225, -1.3036251068115234, -18.61893081665039, 16.93862533569336, -38.00448703765869, 107152565725.54535, 1.0238056182861328, 16.94936776161194, -15.033223032951355, 35.01231098175049, 4.443548202514648, .09164714813232422, -.07516050338745117, -.5804276466369629, -.14034366607666016, -.31600379943847656, .43793439865112305, .010980367660522461, .010753631591796875, -.1544809341430664], t.intercept = -50410808175.774414, t.powers = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
                ];
                var n = Object.keys(t.activeViewRate);
                return t.meanActiveViewRate = n.reduce(function(e, n) {
                    return e + t.activeViewRate[n]
                }, 0) / n.length, t
            }
            return i(t, e), t.prototype.predictCPM = function(e) {
                var t = this,
                    n = {
                        platform: e[0],
                        dntType: e[1],
                        service: e[2],
                        adUnitPath: e[3],
                        hour: e[4],
                        refererType: e[5],
                        numUnits: e[6],
                        unitSize30: e[7],
                        unitSize33: e[8],
                        unitSize32: e[9],
                        unitSize72: e[10],
                        unitSize97: e[11],
                        weekday: e[12]
                    },
                    r = this.featureNames.map(function(e) {
                        if ("activeViewRate" === e) {
                            var r = n.adUnitPath,
                                i = t.activeViewRate[r];
                            return null != i ? i : t.meanActiveViewRate
                        }
                        if (!t.targetEncoder.hasColumn(e)) throw new Error("unexpected column in features: " + e);
                        return t.targetEncoder.transform(e, n[e])
                    }),
                    i = this.poly(r),
                    o = this.predict(i);
                if (isNaN(o)) throw new Error("Error: pred is nan. features: " + e);
                return o
            }, t.prototype.predict = function(e) {
                for (var t = this.intercept, n = 0; n < e.length; ++n) t += this.coef[n] * e[n];
                return t = Math.exp(t) - 1
            }, t.prototype.poly = function(e) {
                for (var t = [], n = 0, r = this.powers; n < r.length; n++) {
                    for (var i = r[n], o = 1, s = 0; s < e.length; ++s) o *= Math.pow(e[s], i[s]);
                    t = t.concat(o)
                }
                return t
            }, t
        }(o.CPMPredictor);
    t.CPMPredictorV7 = a
}, function(e, t, n) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        o = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = n(29),
        a = o(n(30)),
        u = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.columnNames = ["hour", "platform", "dntType", "refererType", "numUnits", "unitSize30", "unitSize33", "unitSize32", "unitSize72", "unitSize97", "weekday", "service", "adUnitPath"], t.model = a.default, t
            }
            return i(t, e), t
        }(s.TargetEncoder);
    t.TargetEncoderV7 = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.hasColumn = function(e) {
            return !!this.model[e]
        }, e.prototype.transform = function(e, t) {
            var n = this.model[e],
                r = n.mapping[t];
            return r && 1 < r.count && null != r.smoothing ? r.smoothing : n.mean
        }, e
    }();
    t.TargetEncoder = r
}, function(e) {
    e.exports = {
        hour: {
            mean: 3.388883111921845,
            mapping: {
                0: {
                    count: 12439,
                    smoothing: 3.403161261800807
                },
                1: {
                    count: 9890,
                    smoothing: 3.401773980189816
                },
                2: {
                    count: 7649,
                    smoothing: 3.3460517605583724
                },
                3: {
                    count: 5797,
                    smoothing: 3.37846748072599
                },
                4: {
                    count: 5389,
                    smoothing: 3.380339650483273
                },
                5: {
                    count: 5950,
                    smoothing: 3.382571582047587
                },
                6: {
                    count: 7415,
                    smoothing: 3.4450521120605986
                },
                7: {
                    count: 9272,
                    smoothing: 3.402786074761181
                },
                8: {
                    count: 10825,
                    smoothing: 3.450472207559839
                },
                9: {
                    count: 11293,
                    smoothing: 3.4647313797064774
                },
                10: {
                    count: 11722,
                    smoothing: 3.430893447712518
                },
                11: {
                    count: 11928,
                    smoothing: 3.4166142936159947
                },
                12: {
                    count: 12948,
                    smoothing: 3.3822107811768647
                },
                13: {
                    count: 12132,
                    smoothing: 3.410311931605995
                },
                14: {
                    count: 12048,
                    smoothing: 3.399184191274398
                },
                15: {
                    count: 12250,
                    smoothing: 3.404629869441322
                },
                16: {
                    count: 11994,
                    smoothing: 3.40460516508842
                },
                17: {
                    count: 12427,
                    smoothing: 3.3808078066356826
                },
                18: {
                    count: 12158,
                    smoothing: 3.368579524681342
                },
                19: {
                    count: 12055,
                    smoothing: 3.3789349304565977
                },
                20: {
                    count: 12667,
                    smoothing: 3.3751273044638164
                },
                21: {
                    count: 13013,
                    smoothing: 3.3420752907295355
                },
                22: {
                    count: 13018,
                    smoothing: 3.323671231510662
                },
                23: {
                    count: 12423,
                    smoothing: 3.2838254297617837
                }
            }
        },
        platform: {
            mean: 3.3888831119226372,
            mapping: {
                And: {
                    count: 66508,
                    smoothing: 3.7649336044625175
                },
                PC: {
                    count: 88521,
                    smoothing: 3.493839619023961
                },
                iOS: {
                    count: 103673,
                    smoothing: 3.058023378694518
                }
            }
        },
        dntType: {
            mean: 3.3888831119232736,
            mapping: {
                DNT0: {
                    count: 146544,
                    smoothing: 3.592086276897443
                },
                DNT1: {
                    count: 112158,
                    smoothing: 3.1233808329242336
                }
            }
        },
        refererType: {
            mean: 3.3888831119230463,
            mapping: {
                Oth: {
                    count: 158765,
                    smoothing: 3.379288150938188
                },
                SNS: {
                    count: 16857,
                    smoothing: 3.23914410865279
                },
                Sea: {
                    count: 83080,
                    smoothing: 3.437601147056507
                }
            }
        },
        numUnits: {
            mean: 3.3888831119216,
            mapping: {
                n1: {
                    count: 27240,
                    smoothing: 3.4663320340287993
                },
                n2: {
                    count: 53489,
                    smoothing: 3.4994647729495254
                },
                n3: {
                    count: 29629,
                    smoothing: 3.2733193221972714
                },
                n4: {
                    count: 39472,
                    smoothing: 3.4288911103928257
                },
                n5: {
                    count: 47365,
                    smoothing: 3.393939482026533
                },
                n6: {
                    count: 19966,
                    smoothing: 3.364561368136054
                },
                n7: {
                    count: 41541,
                    smoothing: 3.2460446071086486
                }
            }
        },
        unitSize30: {
            mean: 3.3888831119225924,
            mapping: {
                0: {
                    count: 38183,
                    smoothing: 3.248360884421075
                },
                1: {
                    count: 220519,
                    smoothing: 3.4132146217366683
                }
            }
        },
        unitSize33: {
            mean: 3.388883111923404,
            mapping: {
                0: {
                    count: 143530,
                    smoothing: 3.376766593906047
                },
                1: {
                    count: 115172,
                    smoothing: 3.4039829958451158
                }
            }
        },
        unitSize32: {
            mean: 3.38888311192309,
            mapping: {
                0: {
                    count: 173590,
                    smoothing: 3.354651559839196
                },
                1: {
                    count: 85112,
                    smoothing: 3.458700001741716
                }
            }
        },
        unitSize72: {
            mean: 3.38888311192272,
            mapping: {
                0: {
                    count: 244138,
                    smoothing: 3.368075693373071
                },
                1: {
                    count: 14564,
                    smoothing: 3.737680252122804
                }
            }
        },
        unitSize97: {
            mean: 3.388883111922515,
            mapping: {
                0: {
                    count: 255027,
                    smoothing: 3.383642670361026
                },
                1: {
                    count: 3675,
                    smoothing: 3.7525440888209163
                }
            }
        },
        weekday: {
            mean: 3.388883111921507,
            mapping: {
                0: {
                    count: 32567,
                    smoothing: 3.395013016817628
                },
                1: {
                    count: 32487,
                    smoothing: 3.3731545403299745
                },
                2: {
                    count: 32282,
                    smoothing: 3.384702193877636
                },
                3: {
                    count: 46544,
                    smoothing: 3.4121699136755437
                },
                4: {
                    count: 45742,
                    smoothing: 3.3940374631932366
                },
                5: {
                    count: 36399,
                    smoothing: 3.3716429121786775
                },
                6: {
                    count: 32681,
                    smoothing: 3.3813620655203076
                }
            }
        },
        service: {
            mean: 3.388882347718053,
            mapping: {
                anond: {
                    count: 26768,
                    smoothing: 3.0715082608682294
                },
                antenna: {
                    count: 14089,
                    smoothing: 2.847477111652887
                },
                blog: {
                    count: 76716,
                    smoothing: 3.2579836941091993
                },
                bookmark: {
                    count: 0,
                    smoothing: null
                },
                border: {
                    count: 4,
                    smoothing: 4.381616070634117
                },
                comicd: {
                    count: 2884,
                    smoothing: 4.011677679222581
                },
                diary: {
                    count: 48411,
                    smoothing: 3.6691050875315323
                },
                fotolife: {
                    count: 1609,
                    smoothing: 4.0451185949600115
                },
                haiku: {
                    count: 1329,
                    smoothing: 3.4006846109213975
                },
                heros: {
                    count: 155,
                    smoothing: 4.269464644034133
                },
                jumpp: {
                    count: 5603,
                    smoothing: 3.651540370173946
                },
                kaden: {
                    count: 0,
                    smoothing: null
                },
                keyword: {
                    count: 33942,
                    smoothing: 3.3612940419181783
                },
                kurage: {
                    count: 4930,
                    smoothing: 4.0045668152533445
                },
                mgpk: {
                    count: 3752,
                    smoothing: 3.8792036001602637
                },
                news: {
                    count: 486,
                    smoothing: 4.360496355758254
                },
                portal: {
                    count: 1263,
                    smoothing: 4.872038821655461
                },
                question: {
                    count: 18282,
                    smoothing: 3.5754577176773013
                },
                "to-ti": {
                    count: 2214,
                    smoothing: 2.927811446965151
                },
                tonaj: {
                    count: 16265,
                    smoothing: 3.3547871962937457
                }
            }
        },
        adUnitPath: {
            mean: 3.38887196176136,
            mapping: {
                "/4374287/ano_sp_com_1_3250_0_no": {
                    count: 3077,
                    smoothing: 3.807367976614658
                },
                "/4374287/ano_sp_e_4_3210_0_no": {
                    count: 2748,
                    smoothing: 2.485202613061208
                },
                "/4374287/ano_sp_e_5_3025_0_no": {
                    count: 2363,
                    smoothing: 3.79967430782813
                },
                "/4374287/ano_sp_e_6_3025_0_no": {
                    count: 2873,
                    smoothing: 2.9129627576888315
                },
                "/4374287/ano_sp_e_7_3025_0_no": {
                    count: 1632,
                    smoothing: 2.2795995920815995
                },
                "/4374287/ano_sp_t_3_3025_0_no": {
                    count: 544,
                    smoothing: 2.448808001008357
                },
                "/4374287/anond_entry_trackback_bottom": {
                    count: 2518,
                    smoothing: 2.748209352008518
                },
                "/4374287/anond_entry_trackback_right": {
                    count: 2454,
                    smoothing: 2.6942188299714593
                },
                "/4374287/anond_permalink_chumoku_left": {
                    count: 1690,
                    smoothing: 2.420035945360183
                },
                "/4374287/anond_permalink_chumoku_right": {
                    count: 1612,
                    smoothing: 2.367210904510272
                },
                "/4374287/anond_permalink_middle": {
                    count: 2718,
                    smoothing: 3.7039034870363103
                },
                "/4374287/anond_under_title": {
                    count: 2539,
                    smoothing: 3.8475289651549915
                },
                "/4374287/ant_pc_e_1_7290_0_no": {
                    count: 1907,
                    smoothing: 3.2292520638554296
                },
                "/4374287/ant_pc_e_2_3328_0_no_le": {
                    count: 1293,
                    smoothing: 3.093719794318471
                },
                "/4374287/ant_pc_e_2_3328_0_no_ri": {
                    count: 1280,
                    smoothing: 3.0683374222754085
                },
                "/4374287/ant_pc_e_3_3328_0_no_le": {
                    count: 1620,
                    smoothing: 2.4403783165619095
                },
                "/4374287/ant_pc_e_3_3328_0_no_ri": {
                    count: 1650,
                    smoothing: 2.4529482237305102
                },
                "/4374287/ant_pc_e_4_3328_0_no_le": {
                    count: 1773,
                    smoothing: 2.163760747854184
                },
                "/4374287/ant_pc_e_4_3328_0_no_ri": {
                    count: 1752,
                    smoothing: 2.1390231248289493
                },
                "/4374287/ant_sp_e_1_3250_0_no": {
                    count: 406,
                    smoothing: 4.434930024532192
                },
                "/4374287/ant_sp_e_2_3025_0_no": {
                    count: 920,
                    smoothing: 4.179333554863837
                },
                "/4374287/ant_sp_e_3_3025_0_no": {
                    count: 570,
                    smoothing: 3.7137588801339843
                },
                "/4374287/ant_sp_e_4_3025_0_no": {
                    count: 850,
                    smoothing: 2.8767385627523923
                },
                "/4374287/antenna": {
                    count: 68,
                    smoothing: 3.528487980268469
                },
                "/4374287/blo_pc_com_6_3328_0_no": {
                    count: 5477,
                    smoothing: 3.7649470188475807
                },
                "/4374287/blo_pc_o_5_nat_0_no": {
                    count: 1454,
                    smoothing: 2.313568131816045
                },
                "/4374287/blo_sp_com_9_3025_0_no": {
                    count: 6005,
                    smoothing: 2.8387512402494024
                },
                "/4374287/blo_sp_e_6_3025_0_no": {
                    count: 9589,
                    smoothing: 3.7451618876031136
                },
                "/4374287/blo_sp_o_8_nat_0_no": {
                    count: 1482,
                    smoothing: 2.2467381413451366
                },
                "/4374287/blog_404": {
                    count: 764,
                    smoothing: 3.2328185480860223
                },
                "/4374287/blog_entrytop_bottom": {
                    count: 6285,
                    smoothing: 3.0775356649621095
                },
                "/4374287/blog_group": {
                    count: 1226,
                    smoothing: 2.9700748042764507
                },
                "/4374287/blog_posted_rectangle_left": {
                    count: 836,
                    smoothing: 3.593545554847055
                },
                "/4374287/blog_posted_rectangle_right": {
                    count: 818,
                    smoothing: 3.4235830839258834
                },
                "/4374287/blog_sp_footer_rectangle": {
                    count: 13353,
                    smoothing: 2.7727684668765935
                },
                "/4374287/blog_sp_user_pager": {
                    count: 12039,
                    smoothing: 3.0521412196674085
                },
                "/4374287/blog_top": {
                    count: 72,
                    smoothing: 3.2282701680287946
                },
                "/4374287/blog_user": {
                    count: 11621,
                    smoothing: 4.059454512877247
                },
                "/4374287/blog_user_2nd": {
                    count: 5695,
                    smoothing: 3.025663936502965
                },
                "/4374287/bnews_permalink": {
                    count: 164,
                    smoothing: 4.18557195781309
                },
                "/4374287/bnews_permalink2": {
                    count: 79,
                    smoothing: 4.472404234008613
                },
                "/4374287/bnews_permalink_bottom_left": {
                    count: 59,
                    smoothing: 4.459803005306069
                },
                "/4374287/bnews_permalink_bottom_right": {
                    count: 59,
                    smoothing: 4.344981213952537
                },
                "/4374287/bnews_permalink_kanren_left": {
                    count: 52,
                    smoothing: 4.552125942396145
                },
                "/4374287/bnews_permalink_kanren_right": {
                    count: 55,
                    smoothing: 4.419238534114561
                },
                "/4374287/bnews_top": {
                    count: 18,
                    smoothing: 4.455364178811465
                },
                "/4374287/border_viewer_pc_last_bottom": {
                    count: 1,
                    smoothing: 4.0797838681937675
                },
                "/4374287/border_viewer_pc_last_top": {
                    count: 2,
                    smoothing: 4.031071973124304
                },
                "/4374287/border_viewer_sp_last": {
                    count: 1,
                    smoothing: 3.9038618598592345
                },
                "/4374287/d_sp_com_1_3250_0_no": {
                    count: 5977,
                    smoothing: 4.2004426126869685
                },
                "/4374287/d_sp_e_6_3025_0_no": {
                    count: 4548,
                    smoothing: 3.7649381956271877
                },
                "/4374287/d_user_sp_bottom": {
                    count: 8151,
                    smoothing: 3.8115448431222854
                },
                "/4374287/diary_sp_permalink_footer_rectangle": {
                    count: 8293,
                    smoothing: 3.261681138666117
                },
                "/4374287/diary_sp_permalink_pager_rectangle": {
                    count: 6313,
                    smoothing: 3.4686555412682316
                },
                "/4374287/diary_user": {
                    count: 8428,
                    smoothing: 3.9321083926350715
                },
                "/4374287/diary_user2": {
                    count: 2197,
                    smoothing: 3.1988136689676003
                },
                "/4374287/diary_user_track": {
                    count: 4165,
                    smoothing: 3.3429979417570572
                },
                "/4374287/dys_pc_e_1_3025_0_no": {
                    count: 522,
                    smoothing: 3.950861834541984
                },
                "/4374287/dys_pc_e_2_3025_0_no": {
                    count: 524,
                    smoothing: 3.8960036346785074
                },
                "/4374287/dys_sp_e_1_3025_0_no": {
                    count: 1838,
                    smoothing: 4.061927445416485
                },
                "/4374287/f_sp_e_1_3025_0_no": {
                    count: 1209,
                    smoothing: 3.9588527102267856
                },
                "/4374287/f_sp_overlay": {
                    count: 400,
                    smoothing: 4.305857231566147
                },
                "/4374287/h_sp_menu_bottom": {
                    count: 139,
                    smoothing: 4.220246460425428
                },
                "/4374287/haiku_doublerectangle": {
                    count: 155,
                    smoothing: 4.207647974386389
                },
                "/4374287/haiku_doublerectangle_left": {
                    count: 540,
                    smoothing: 2.4404915447009614
                },
                "/4374287/hik_sp_overlay": {
                    count: 495,
                    smoothing: 3.965342868175764
                },
                "/4374287/hrs_pc_e_1_3025_0_no": {
                    count: 35,
                    smoothing: 4.288790789869365
                },
                "/4374287/hrs_pc_e_2_3025_0_no": {
                    count: 36,
                    smoothing: 4.276740484003021
                },
                "/4374287/hrs_sp_e_1_3025_0_no": {
                    count: 84,
                    smoothing: 4.2582938661399385
                },
                "/4374287/htn_sp_overlay": {
                    count: 13,
                    smoothing: 7.305748475523366
                },
                "/4374287/jpl_pc_e_1_3025_0_no": {
                    count: 1128,
                    smoothing: 4.236158576229908
                },
                "/4374287/jpl_pc_e_2_3025_0_no": {
                    count: 1164,
                    smoothing: 4.047347878141117
                },
                "/4374287/jpl_sp_e_1_3025_0_no": {
                    count: 3311,
                    smoothing: 3.3132228601453306
                },
                "/4374287/key_pc_e_4_3060_0_no": {
                    count: 1789,
                    smoothing: 3.1769143668644886
                },
                "/4374287/key_pc_t_12_9725_0_no": {
                    count: 36,
                    smoothing: 3.3770903011503117
                },
                "/4374287/key_sp_com_1_3250_0_no": {
                    count: 3014,
                    smoothing: 3.985385589081665
                },
                "/4374287/keyword_blog_sp_300x250": {
                    count: 319,
                    smoothing: 4.325595488393203
                },
                "/4374287/keyword_footer_sp": {
                    count: 603,
                    smoothing: 2.6592761547589316
                },
                "/4374287/keyword_footer_sp_300x250": {
                    count: 2837,
                    smoothing: 3.129554458268422
                },
                "/4374287/keyword_permalink_bottom_left": {
                    count: 1727,
                    smoothing: 3.1028741233348405
                },
                "/4374287/keyword_permalink_bottom_right": {
                    count: 1693,
                    smoothing: 3.0995965247894786
                },
                "/4374287/keyword_permalink_middle_left": {
                    count: 1954,
                    smoothing: 3.5029271797499972
                },
                "/4374287/keyword_permalink_middle_right": {
                    count: 1965,
                    smoothing: 3.4774319466481325
                },
                "/4374287/keyword_permalink_sidebar_above": {
                    count: 2622,
                    smoothing: 3.1595936580920236
                },
                "/4374287/keyword_permalink_sidebar_below": {
                    count: 339,
                    smoothing: 3.8059771686966575
                },
                "/4374287/keyword_rectangle": {
                    count: 1834,
                    smoothing: 2.6151479654022642
                },
                "/4374287/keyword_sp_kanren": {
                    count: 2420,
                    smoothing: 2.961657514463035
                },
                "/4374287/keyword_sp_middle": {
                    count: 3340,
                    smoothing: 3.644917529695803
                },
                "/4374287/keyword_sp_permalink_blog": {
                    count: 2572,
                    smoothing: 3.3054646096632325
                },
                "/4374287/keyword_top_rectangle": {
                    count: 452,
                    smoothing: 3.7124154607516986
                },
                "/4374287/keyword_top_rectangle2": {
                    count: 29,
                    smoothing: 2.8162603757428744
                },
                "/4374287/keyword_under_description": {
                    count: 2364,
                    smoothing: 3.6509526467076476
                },
                "/4374287/keyword_under_title": {
                    count: 2372,
                    smoothing: 3.714942923181575
                },
                "/4374287/krg_pc_e_1_3025_0_no": {
                    count: 93,
                    smoothing: 3.7982403280664663
                },
                "/4374287/krg_pc_e_2_3025_0_no": {
                    count: 84,
                    smoothing: 3.7961800549961566
                },
                "/4374287/krg_pc_e_3_3025_0_no": {
                    count: 618,
                    smoothing: 4.587041709085234
                },
                "/4374287/krg_pc_e_4_3025_0_no": {
                    count: 621,
                    smoothing: 4.5634720112619105
                },
                "/4374287/krg_sp_e_1_3025_0_no": {
                    count: 1563,
                    smoothing: 3.838167367842705
                },
                "/4374287/krg_sp_e_2_3025_0_no": {
                    count: 1951,
                    smoothing: 3.794277515593241
                },
                "/4374287/mgp_pc_e_1_3025_0_no": {
                    count: 553,
                    smoothing: 4.2436977139316445
                },
                "/4374287/mgp_pc_e_2_3025_0_no": {
                    count: 547,
                    smoothing: 4.235887026646377
                },
                "/4374287/mgp_pc_t_3_3025_0_no": {
                    count: 211,
                    smoothing: 4.1096772642470665
                },
                "/4374287/mgp_pc_t_4_3025_0_no": {
                    count: 133,
                    smoothing: 4.156015099004662
                },
                "/4374287/mgp_sp_e_1_3025_0_no": {
                    count: 2106,
                    smoothing: 3.6252729403019917
                },
                "/4374287/mgp_sp_t_2_3025_0_no": {
                    count: 202,
                    smoothing: 4.139901709018723
                },
                "/4374287/portal": {
                    count: 1065,
                    smoothing: 4.922780538244267
                },
                "/4374287/portal_sp": {
                    count: 185,
                    smoothing: 4.408911975568806
                },
                "/4374287/q_perma": {
                    count: 1062,
                    smoothing: 3.779367081112514
                },
                "/4374287/q_sp_com_1_3250_0_no": {
                    count: 1693,
                    smoothing: 3.86846223526583
                },
                "/4374287/question_footer": {
                    count: 1243,
                    smoothing: 2.3471710299315682
                },
                "/4374287/question_permalink2": {
                    count: 959,
                    smoothing: 3.8023650300195504
                },
                "/4374287/question_permalink3": {
                    count: 968,
                    smoothing: 3.611910321644951
                },
                "/4374287/question_permalink_bottom_left": {
                    count: 709,
                    smoothing: 3.5284306817397355
                },
                "/4374287/question_permalink_bottom_right": {
                    count: 594,
                    smoothing: 3.5395470657102157
                },
                "/4374287/question_permalink_fewfooter_left": {
                    count: 852,
                    smoothing: 3.431338184783202
                },
                "/4374287/question_permalink_fewfooter_right": {
                    count: 846,
                    smoothing: 3.4313421641303865
                },
                "/4374287/question_permalink_rectangle_footer": {
                    count: 1058,
                    smoothing: 3.273334761428747
                },
                "/4374287/question_permalink_sp": {
                    count: 1309,
                    smoothing: 2.9884403121931187
                },
                "/4374287/question_sp_bcomment": {
                    count: 1805,
                    smoothing: 3.7145182391928357
                },
                "/4374287/question_sp_middle": {
                    count: 1720,
                    smoothing: 4.33855688454584
                },
                "/4374287/question_sp_permalink_rectangle_middle": {
                    count: 953,
                    smoothing: 4.241406425254405
                },
                "/4374287/question_under_1st_answer": {
                    count: 1234,
                    smoothing: 3.3752406105521024
                },
                "/4374287/question_under_question": {
                    count: 1277,
                    smoothing: 3.573564435402038
                },
                "/4374287/to-ti_series_footer": {
                    count: 462,
                    smoothing: 2.328843642322714
                },
                "/4374287/to-ti_series_under_description": {
                    count: 504,
                    smoothing: 2.9592290244417314
                },
                "/4374287/to-ti_top_1st": {
                    count: 236,
                    smoothing: 2.929537235741398
                },
                "/4374287/to-ti_top_after_1st": {
                    count: 123,
                    smoothing: 2.4232790883753292
                },
                "/4374287/to-ti_viewer_pc_1st_bottom": {
                    count: 101,
                    smoothing: 3.523659748762727
                },
                "/4374287/to-ti_viewer_pc_1st_top": {
                    count: 104,
                    smoothing: 3.4538877053800143
                },
                "/4374287/to-ti_viewer_pc_last_bottom": {
                    count: 128,
                    smoothing: 3.4151999657136534
                },
                "/4374287/to-ti_viewer_pc_last_top": {
                    count: 118,
                    smoothing: 3.397533926944313
                },
                "/4374287/to-ti_viewer_sp_last": {
                    count: 438,
                    smoothing: 3.1329102329421534
                },
                "/4374287/tyj_pc_e_1_3025_0_no": {
                    count: 1062,
                    smoothing: 3.431946782435471
                },
                "/4374287/tyj_pc_e_2_3025_0_no": {
                    count: 1079,
                    smoothing: 3.4079273287052345
                },
                "/4374287/tyj_pc_e_3_3025_0_no": {
                    count: 1230,
                    smoothing: 3.795522198292931
                },
                "/4374287/tyj_pc_e_4_3025_0_no": {
                    count: 1269,
                    smoothing: 3.6466642066099832
                },
                "/4374287/tyj_pc_t_5_3025_0_no": {
                    count: 1201,
                    smoothing: 3.211808452513291
                },
                "/4374287/tyj_pc_t_6_3025_0_no": {
                    count: 1137,
                    smoothing: 3.1793305843032376
                },
                "/4374287/tyj_sp_e_1_3025_0_no": {
                    count: 3903,
                    smoothing: 3.318227453956393
                },
                "/4374287/tyj_sp_e_2_3025_0_no": {
                    count: 3103,
                    smoothing: 3.645329054953133
                },
                "/4374287/tyj_sp_t_3_3025_0_no": {
                    count: 2281,
                    smoothing: 2.7237373340098485
                }
            }
        }
    }
}]);