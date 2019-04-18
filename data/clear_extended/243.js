require(["ta/rollupAmdShim"], function(a) {
    a.install(["servlets/homerebranded", "lib/jquery-amd", "api-mod", "ta/Core/TA.Record", "common/Radio", "overlays/Overlay", "overlays/position", "overlays/styles/popover", "overlays/styles/modal", "overlays/styles/windowshade", "overlays/options/closeOnDocClick", "overlays/options/closeOnSourceClick", "overlays/options/closeOnTargetChildClick", "overlays/options/centerArrowOnSrcElement", "overlays/options/ajax", "overlays/options/repositionOnEvent", "overlays/options/closeOnWindowshadeClick", "overlays/options/zIndex", "utils/responsive", "utils/throttle", "ta/Core/TA.Store", "common/trackingStreams", "ta/Core/TA.Event", "utils/ResponsiveEvents", "hotels/HotelsRadioHelper", "mixins/page-dates/picker-autoadvance", "mixins/page-dates/default-dates", "hotels/RoomsGuests", "overlays/options/closeOnLegacyOverlay", "overlays/options/autoReposition", "overlays/options/highlightElement", "overlays/options/blurSourceOnHide", "ta/util/LegacyDateShim", "hotels/RoomsGuestsUI", "mixins/Events", "styleguide/overlays/Flyout", "overlays/support/placement", "typeahead/TypeAhead", "typeahead/support/bindToElement", "typeahead/query/remote", "typeahead/query/noResults", "typeahead/query/prefill/nearby", "typeahead/query/prefill/default", "typeahead/query/recentOrPopPrefill", "typeahead/query/geonavi", "typeahead/views/inline", "typeahead/ux/selectResult", "typeahead/options/showResultsOnFocus", "typeahead/options/noInputNoResults", "typeahead/support/tracking", "utils/urlutils", "utils/geolocation", "ta/Core/TA.FireEvent", "overlays/position/base", "overlays/styles/default", "overlays/position/conditional", "overlays/position/fullscroll", "overlays/support/radio", "overlays/ux/elementToggle", "overlays/options/closeOnEscape", "overlays/options/closeOnScrollPastElement", "overlays/AnimatedOverlay", "ta/Core/TA.LocalStorage", "overlays/styles/flyout", "overlays/options/matchWidth", "overlays/options/fade", "overlays/options/closeOnScroll", "overlays/options/repositionOnTaEvent", "ta/util/Element", "cpm/BannerResizeHandler", "shelves/shelfEventHandlers", "shelves/ShelfItemPricing", "vanillajs", "vr/shared/utility"], ["ta", "ta", "ta", "ta", "ta", "ta", "ta", "ta", "ta", "ta", "ta", "page-model", "page-model", "page-model", "page-model", "page-model", "ta", "ta"])
});
if (window.requirejs && requirejs.taConfig) {
    requirejs.taConfig({
        deferred: {},
        name: "home_rebranded",
        files: {
            js3_secure: {
                ssl: {
                    ta: {
                        Core: {
                            "TA.Record": 1
                        }
                    }
                }
            },
            "js-amd": {
                src: {
                    styleguide: {
                        overlays: {
                            Flyout: 1
                        }
                    },
                    cpm: {
                        BannerResizeHandler: 1
                    },
                    typeahead: {
                        ux: {
                            selectResult: 1
                        },
                        query: {
                            recentOrPopPrefill: 1,
                            prefill: {
                                "default": 1,
                                nearby: 1
                            },
                            noResults: 1,
                            remote: 1
                        },
                        options: {
                            showResultsOnFocus: 1,
                            noInputNoResults: 1
                        },
                        TypeAhead: 1,
                        support: {
                            bindToElement: 1,
                            tracking: 1
                        },
                        views: {
                            inline: 1
                        }
                    },
                    shelves: {
                        ShelfItemPricing: 1,
                        shelfEventHandlers: 1
                    },
                    mixins: {
                        "page-dates": {
                            "default-dates": 1,
                            "picker-autoadvance": 1
                        },
                        Events: 1
                    },
                    common: {
                        trackingStreams: 1
                    },
                    hotels: {
                        RoomsGuests: 1
                    },
                    utils: {
                        urlutils: 1,
                        throttle: 1,
                        responsive: 1,
                        ResponsiveEvents: 1,
                        geolocation: 1
                    },
                    "api-mod": 1,
                    overlays: {
                        ux: {
                            elementToggle: 1
                        },
                        options: {
                            closeOnTargetChildClick: 1,
                            closeOnWindowshadeClick: 1,
                            autoReposition: 1,
                            closeOnEscape: 1,
                            closeOnLegacyOverlay: 1,
                            ajax: 1,
                            closeOnDocClick: 1,
                            closeOnSourceClick: 1,
                            blurSourceOnHide: 1,
                            fade: 1,
                            matchWidth: 1,
                            centerArrowOnSrcElement: 1,
                            repositionOnEvent: 1,
                            highlightElement: 1,
                            repositionOnTaEvent: 1,
                            closeOnScroll: 1,
                            zIndex: 1
                        },
                        styles: {
                            "default": 1,
                            flyout: 1,
                            popover: 1,
                            windowshade: 1,
                            modal: 1
                        },
                        position: {
                            fullscroll: 1,
                            conditional: 1,
                            base: 1
                        },
                        support: {
                            placement: 1,
                            radio: 1
                        }
                    },
                    servlets: {
                        homerebranded: 1
                    },
                    vr: {
                        shared: {
                            utility: 1
                        }
                    },
                    vanillajs: 1
                }
            },
            js3: {
                lib: {
                    "jquery-amd": 1
                },
                build: {
                    es6: {
                        src: {
                            common: {
                                Radio: 1
                            },
                            hotels: {
                                RoomsGuestsUI: 1,
                                HotelsRadioHelper: 1
                            },
                            overlays: {
                                options: {
                                    closeOnScrollPastElement: 1
                                },
                                AnimatedOverlay: 1,
                                Overlay: 1
                            },
                            typeahead: {
                                query: {
                                    geonavi: 1
                                }
                            }
                        }
                    }
                },
                src: {
                    ta: {
                        util: {
                            Element: 1,
                            LegacyDateShim: 1
                        },
                        Core: {
                            "TA.FireEvent": 1,
                            "TA.Event": 1,
                            "TA.LocalStorage": 1,
                            "TA.Store": 1
                        }
                    }
                }
            }
        },
        _: {
            baseUrl: "/"
        }
    })
};
define("ta/util/Date", ["vanillajs", "ns-exporter"], function(e, t) {
    var n = {};
    return n.MS_IN_DAY = 864e5, n.DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], n.HOUR_CONST = 12, n.THAI_BUDDHIST_YEAR_OFFSET = 543, n.MAX_STAY_DURATION_DAYS = 30, n.MAX_VR_DURATION_DAYS = 183, n.MAX_DAYS_BEFORE_RETURN_FLIGHT = 330, n.MAX_ATTRACTION_RANGE_DAYS = 330, n.inDateSet = function(e, t) {
        if (null == e || null == t) return !1;
        for (var n = t.length, r = 0; r < n; r++) {
            var a = t[r];
            if (a.length) {
                var i = a[0].getTime(),
                    T = a[1].getTime();
                if (i <= e.getTime() && T >= e.getTime()) return !0
            } else if (e.getTime() == a.getTime()) return !0
        }
        return !1
    }, n.rangesIntersect = function(e, t) {
        return Math.max(e[0].getTime(), t[0].getTime()) <= Math.min(e[1].getTime(), t[1].getTime())
    }, n.getDaysInRange = function(e, t) {
        return Math.round((t.getTime() - e.getTime()) / n.MS_IN_DAY) + 1
    }, n.getLastDayOfMonth = function(e) {
        var t = new Date;
        return e && (t = new Date(e.getTime())), t = new Date(n.normalize(t)), t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(0), t.getDate()
    }, n.getDaysApart = function(e, t) {
        var n = 864e5;
        return e && t ? Math.round(Math.abs((e.getTime() - t.getTime()) / n)) : 0
    }, n.inSameMonth = function(e, t) {
        return null != e && null != t && e.getMonth() == t.getMonth() && e.getYear() == t.getYear()
    }, n.normalize = function(e) {
        return e.setHours(n.HOUR_CONST, 0, 0, 0)
    }, n.create = function(e, t, r) {
        return new Date(e, t, r, n.HOUR_CONST)
    }, t.exportTo(n, "ta.util.date"), n
});
define("mixins/page-dates/Utils", ["vanillajs"], function(e) {
    "use strict";

    function t(e) {
        var t = String(e);
        return (1 === t.length ? "0" : "") + t
    }

    function r(e) {
        return e.getFullYear() + "_" + t(e.getMonth() + 1) + "_" + t(e.getDate())
    }

    function n(e) {
        if (!e) return null;
        var t = e.split("-");
        return t.length < 2 && (t = e.split("_")), new Date(parseInt(t[0], 10), parseInt(t[1], 10) - 1, parseInt(t[2], 10))
    }

    function i(e) {
        return "[object Date]" === Object.prototype.toString.call(e)
    }

    function a(e, t) {
        if ((!e || !t) && [e, t].every(i)) return !1;
        var r = new Date(e.getTime()),
            n = new Date(t.getTime());
        return r.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), r.getTime() === n.getTime()
    }

    function u(e, t) {
        if ((!e || !t) && [e, t].every(i)) return !1;
        var r = new Date(e.getTime()),
            n = new Date(t.getTime()),
            a = 864e5;
        return r.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0), Math.round((n.getTime() - r.getTime()) / a)
    }

    function o(e, t) {
        for (var r; e;) {
            if (r = e.querySelector("[data-dateType=" + t + "]")) return r;
            e = e.parentNode
        }
        return null
    }

    function s(e, t) {
        if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
        for (var r = !0, n = 0; n < e.length; n++) r = r && a(e[n], t[n]);
        return r
    }
    return {
        pad: t,
        dateToIso: r,
        fromString: n,
        compareDatesNoTime: a,
        compareDatesArrayNoTime: s,
        getNumNightsNoTime: u,
        findClosestDatepicker: o
    }
});
define("calendars/CalendarDate", ["vanillajs"], function(t) {
    "use strict";

    function n(t) {
        t = t || new Date, this.date = new Date(t.getFullYear(), t.getMonth(), t.getDate())
    }
    return n.prototype = {
        constructor: n,
        daysInMonth: function() {
            return new Date(this.year(), this.month() + 1, 0).getDate()
        },
        eachDayInMonth: function(t) {
            for (var e = 1, r = this.daysInMonth(); e <= r; e++) t(new n(new Date(this.year(), this.month(), e)))
        },
        thisMonth: function() {
            return new n(new Date(this.year(), this.month(), 1))
        },
        nextMonth: function() {
            return this.relativeMonth(1)
        },
        previousMonth: function() {
            return this.relativeMonth(-1)
        },
        relativeMonth: function(t) {
            return new n(new Date(this.year(), this.month() + t, 1))
        },
        relativeDay: function(t) {
            return new n(new Date(this.year(), this.month(), this.day() + t))
        },
        firstOfMonth: function() {
            return new n(new Date(this.year(), this.month(), 1))
        },
        lastOfMonth: function() {
            return new n(new Date(this.year(), this.month(), this.daysInMonth()))
        },
        year: function() {
            return this.date.getFullYear()
        },
        month: function() {
            return this.date.getMonth()
        },
        day: function() {
            return this.date.getDate()
        },
        dayOfWeek: function() {
            return this.date.getDay()
        },
        firstDayOfMonth: function() {
            return new Date(this.year(), this.month(), 1).getDay()
        },
        inRange: function(t, n) {
            return !(!t || !n) && (this.compare(t) > 0 && this.compare(n) < 0)
        },
        compare: function(t) {
            for (var n, e = ["getFullYear", "getMonth", "getDate"], r = 0, i = e.length; r < i; r++) {
                if (n = e[r], this.date[n]() < t.date[n]()) return -1;
                if (this.date[n]() > t.date[n]()) return 1
            }
            return 0
        },
        daysTo: function(t) {
            return Math.ceil((t.date.getTime() - this.date.getTime()) / 864e5)
        },
        toISOString: function() {
            return this.date.toISOString().split("T")[0]
        },
        toString: function() {
            return this.year() + "-" + this.month() + "-" + this.day()
        }
    }, n.fromString = function(t) {
        var e = t.split("-");
        return new n(new Date(e[0], e[1], e[2]))
    }, n
});
define("mixins/page-dates/DateTypeStore", ["vanillajs", "ta/Core/TA.Store", "calendars/CalendarDate", "mixins/page-dates/Utils"], function(t, e, n, r) {
    "use strict";

    function i(t) {
        var e = [];
        for (var n in T) T.hasOwnProperty(n) && T[n].children && T[n].children.indexOf(t) >= 0 && e.push(n);
        return e
    }

    function a(t) {
        var e = ta.page.getDates(t);
        return e && e[0] ? new n(e[0]) : null
    }
    var u = "zu",
        T = {
            CHECKIN: {
                queryString: null,
                pathString: null
            },
            CHECKOUT: {
                queryString: null,
                pathString: null
            },
            STAYDATES: {
                children: ["CHECKIN", "CHECKOUT"],
                queryString: "staydates",
                pathString: u + "s"
            },
            EATERY: {
                queryString: "eaterydate",
                pathString: u + "r"
            },
            DEPARTURE: {
                queryString: null,
                pathString: null
            },
            RETURN: {
                queryString: null,
                pathString: null
            },
            ROUNDTRIP: {
                children: ["DEPARTURE", "RETURN"],
                queryString: "rtdates",
                pathString: u + "t"
            },
            ONEWAYFLIGHT: {
                queryString: "oneway",
                pathString: u + "o"
            },
            LEG_1: {
                queryString: "leg1date",
                pathString: u + "1"
            },
            LEG_2: {
                queryString: "leg2date",
                pathString: u + "2"
            },
            LEG_3: {
                queryString: "leg3date",
                pathString: u + "3"
            },
            ATTRACTION: {
                queryString: "attrdate",
                pathString: u + "a"
            },
            ATTRACTION_FROM: {
                queryString: null,
                pathString: null
            },
            ATTRACTION_TO: {
                queryString: null,
                pathString: null
            },
            ATTRACTIONRANGE: {
                children: ["ATTRACTION_FROM", "ATTRACTION_TO"],
                queryString: "attrrange",
                pathString: u + "e"
            },
            VPDATES: {
                children: ["VPDEPARTURE", "VPRETURN"],
                queryString: "vpdates",
                pathString: null
            },
            VPDEPARTURE: {
                queryString: null,
                pathString: null
            },
            VPRETURN: {
                queryString: null,
                pathString: null
            }
        };
    return T.getStartDateType = function(t) {
        var e = i(t);
        if (0 == e.length) {
            var n = T[t].children;
            return n && n.length > 0 ? n[0] : t
        }
        return T[e[0]].children[0]
    }, T.getEndDateType = function(t) {
        var e = i(t);
        if (0 == e.length) {
            var n = T[t].children;
            return n && n.length > 0 ? n[n.length - 1] : t
        }
        var r = T[e[0]];
        return r.children[r.children.length - 1]
    }, T.isChildDateType = function(t) {
        return i(t).length > 0
    }, T.isSingleDateType = function(t) {
        var e = T[t];
        return !(T.isChildDateType(t) || e && e.children && e.children.length > 0)
    }, T.getParents = i, T.isHotelDateType = function(t) {
        return i(t).indexOf("STAYDATES") >= 0
    }, T.isRoundTripDateType = function(t) {
        return i(t).indexOf("ROUNDTRIP") >= 0
    }, T.isAttractionRangeDateType = function(t) {
        return i(t).indexOf("ATTRACTIONRANGE") >= 0
    }, T.isVacationPackagesDateType = function(t) {
        return i(t).indexOf("VPDATES") >= 0
    }, T.allowsSameDayRange = function(t) {
        return T.isAttractionRangeDateType(t) || T.isRoundTripDateType(t)
    }, T.isMultiCityDateType = function(t) {
        return "LEG_1" == t || "LEG_2" == t || "LEG_3" == t
    }, T.isStartDateType = function(t) {
        var e = i(t);
        return 0 != e.length && 0 == T[e[0]].children.indexOf(t)
    }, T.isEndDateType = function(t) {
        var e = i(t);
        if (0 == e.length) return !1;
        var n = T[e[0]];
        return n.children.indexOf(t) == n.children.length - 1
    }, T.getStartDate = function(t) {
        var e = T.getStartDateType(t);
        return null == e ? ta.page.getDates(t)[0] : ta.page.getDates(e)[0]
    }, T.getEndDate = function(t) {
        var e = T.getEndDateType(t);
        return null == e ? ta.page.getDates(t)[0] : ta.page.getDates(e)[0]
    }, T.getMinEnabledDate = function(t) {
        if (T.isHotelDateType(t) || T.isRoundTripDateType(t)) {
            var i = e.retrieve("multiDP.minCheckInDate");
            if (i) return new n(r.fromString(i))
        } else {
            if ("LEG_1" == t) return a("ONEWAYFLIGHT");
            if ("LEG_2" == t) return a("LEG_1") || a("ONEWAYFLIGHT");
            if ("LEG_3" == t) return a("LEG_2") || a("LEG_1") || a("ONEWAYFLIGHT");
            if ("ATTRACTION_TO" == t) return a("ATTRACTION_FROM")
        }
        return null
    }, T.flattenType = function(t) {
        var e = T[t];
        return e ? e.children ? e.children.slice(0) : [t] : []
    }, T.getCorrespondingDateType = function(t) {
        switch (t) {
            case "CHECKIN":
                return "CHECKOUT";
            case "CHECKOUT":
                return "CHECKIN";
            case "DEPARTURE":
                return "RETURN";
            case "RETURN":
                return "DEPARTURE";
            case "ATTRACTION_FROM":
                return "ATTRACTION_TO";
            case "ATTRACTION_TO":
                return "ATTRACTION_FROM";
            case "VPDEPARTURE":
                return "VPRETURN";
            case "VPRETURN":
                return "VPDEPARTURE";
            default:
                return null
        }
    }, T
});
define("mixins/page-dates/Base", ["vanillajs", "ta", "mixins/page-dates/Utils", "mixins/page-dates/DateTypeStore"], function(e, r, t, n) {
    "use strict";

    function a(e) {
        return e instanceof Date && !isNaN(e.getTime())
    }

    function i(e) {
        if (!n[e]) throw "Invalid date type: " + e
    }

    function s(e) {
        var r = [];
        for (var t in n) n.hasOwnProperty(t) && n[t].children && n[t].children.indexOf(e) >= 0 && r.push(t);
        return r
    }

    function o(e, r) {
        var a = n[e],
            i = "";
        if (a.children)
            for (var s = 0, o = a.children.length; s < o; s++) {
                if ("_" === r[a.children[s]]) return "_";
                i += (s > 0 ? "_" : "") + t.dateToIso(r[a.children[s]])
            } else {
                if ("_" === r[e]) return "_";
                i += t.dateToIso(r[e])
            }
        return i
    }

    function h(e, r) {
        var t = n[e];
        if (t.children) {
            for (var a = 0, i = t.children.length; a < i; a++)
                if ("_" !== r[t.children[a]]) return !1;
            return !0
        }
        return "_" === r[e]
    }

    function u(e, r) {
        require.defined("ta/util/Error") && require("ta/util/Error").record(e, r)
    }
    var f = function(e) {
        var s = {},
            f = {};
        ! function() {
            var r, i;
            if (e)
                for (i in e) r = t.fromString(e[i]), e.hasOwnProperty(i) && n[i] && a(r) && (s[i] = r)
        }(), this.hasDates = function(e) {
            if (i(e), n[e].children) {
                for (var t = 0, a = n[e].children.length; t < a; t++)
                    if (!r.page.hasDates(n[e].children[t])) return !1;
                return !0
            }
            return !!s[e] && "_" !== s[e]
        }, this.hasUserSetDates = function(e) {
            return n[e].children ? n[e].children.reduce(function(e, r) {
                return e || !!f[r]
            }, !1) : !!f[e]
        }, this.getDates = function(e) {
            var r = [];
            if (i(e), n[e].children)
                for (var t = 0, a = n[e].children.length; t < a; t++) r.push(s[n[e].children[t]]);
            else r.push(s[e]);
            for (var t in r) "_" === r[t] && (r[t] = null);
            return r
        }, this.setDates = function(e, r) {
            if (i(e), Array.isArray(r) || (r = [r]), r = r.map(function(e) {
                    return e instanceof Date ? new Date(e.getFullYear(), e.getMonth(), e.getDate()) : "_"
                }), n[e].children) {
                if (n[e].children.length !== r.length) throw "Incorrect number of dates for date type " + e;
                for (var t = 0, a = n[e].children.length; t < a; t++) {
                    var o = n[e].children[t];
                    s[o] = r[t], f[o] = !0
                }
            } else {
                if (1 !== r.length) throw "Incorrect number of dates for date type " + e;
                s[e] = r[0]
            }
            f[e] = !0
        }, this.clearDates = function(e) {
            if (!e) return void(s = {});
            if (i(e), n[e].children)
                for (var r = 0, t = n[e].children.length; r < t; r++) s[n[e].children[r]] = "_";
            else s[e] = "_"
        }, this.datesToQueryString = function(e) {
            var t = n[e];
            if (i(e), !t.queryString) throw "Cannot generate query-string for DateType " + e;
            return (r.page.hasDates(e) || h(e, s)) && r.page.hasUserSetDates(e) ? t.queryString + "=" + o(e, s) : ""
        }, this.defaultDatesToQueryString = function(e) {
            var t = n[e];
            return i(e), t.queryString ? r.page.hasDates(e) || h(e, s) ? r.page.hasUserSetDates(e) ? "" : t.queryString + "=" + o(e, s) : "" : (u(null, "Cannot generate query-string for DateType " + e), "")
        }, this.datesToQueryPath = function(e) {
            var t = n[e];
            if (i(e), !t.pathString) throw "Cannot generate path-string for DateType " + e;
            return (r.page.hasDates(e) || h(e, s)) && r.page.hasUserSetDates(e) ? t.pathString + o(e, s) : ""
        }, this.datesToQueryJson = function(e) {
            var t = n[e],
                a = {};
            if (i(e), !t.queryString) throw "Cannot generate query json for DateType " + e;
            return (r.page.hasDates(e) || h(e, s)) && (r.page.hasUserSetDates(e) || "EATERY" === e) ? (a[t.queryString] = o(e, s), a) : {}
        }
    };
    return f.prototype.onDatesSelected = function(e, t, n) {
        var a = s(t);
        if (r.page && r.page.emit) {
            r.page.emit("dateSelected", e, t, n);
            for (var i = 0, o = a.length; i < o; i++) r.page.hasDates(a[i]) && r.page.emit("dateSelected", e, a[i], r.page.getDates(a[i]))
        }
    }, f.prototype.usingUnifiedDates = !0, f
});
define("mixins/page-dates/Validator", ["vanillajs", "ta", "mixins/page-dates/DateTypeStore", "calendars/CalendarDate", "ta/util/Date"], function(e, t, a, n, r) {
    "use strict";

    function i(e) {
        if (!a[e].children || !t.page.hasDates(e)) return !0;
        var n = a[e].children,
            r = t.page.getDates(e);
        return a.isStartDateType(n[0]) && a.isEndDateType(n[1]) && r[0] <= r[1] || a.isEndDateType(n[0]) && a.isStartDateType(n[1]) && r[1] <= r[0]
    }

    function s(e) {
        if (!a[e].children || !t.page.hasDates(e)) return !0;
        var n = t.page.getDates(e);
        return n[0].getTime() !== n[1].getTime()
    }

    function u(e) {
        return function(n) {
            return !a[n].children || !t.page.hasDates(n) || D.apply(null, t.page.getDates(n)) <= e
        }
    }

    function D(e, t) {
        var a = e instanceof n ? e : new n(e),
            r = t instanceof n ? t : new n(t);
        return Math.abs(a.daysTo(r))
    }
    var T = function(e) {
        var t = e && e.hasOwnProperty("maxStayLength") ? e.maxStayLength : r.MAX_STAY_DURATION_DAYS;
        this.VALIDATORS = {
            STAYDATES: [i, s, u(t)],
            ROUNDTRIP: [i],
            ATTRACTIONRANGE: [i],
            VPDATES: [i, s, u(t)]
        }
    };
    return T.prototype.validate = function(e) {
        var t = this.VALIDATORS[e];
        return !t || 0 == t.length || !t.some(function(t) {
            return !t(e)
        })
    }, T
});
define("mixins/page-dates/pop-calendar", ["ta", "common/trackingStreams", "ta/support/Qualtrics", "ta/Core/TA.Store", "ta/Core/TA.LocalStorage", "utils/responsive"], function(e, t, n, r, i, a) {
    function o() {
        A = !1
    }

    function s(t) {
        S = !!t.popFromDefault, y = !!t.popFromVisibleOnly, C = t.popFromVisibleOnlyBreakpoint, D = !!t.datesWereDefaulted, E = t.popCalendarType, P = !!t.hasMetaMarketingDefaultDates, b = !!t.qualtricsSurveyEnabled, T = !!t.isDetailPage, e.page.on("datepickerRejected", o), e.page.on("dateSelected", o)
    }

    function d(e) {
        if (i.enabled && i.get("popCalendarAfterRedirectedFromIB")) return i.remove("popCalendarAfterRedirectedFromIB"), !0;
        if (!D || k) return !1;
        if (r.retrieve("suppressCalendarPop")) return !1;
        if (!E) return !1;
        if (b && n && (n.canDisplay() || n.seenThisPageView())) {
            if (!require.defined("page-model")) return !1;
            if (require("page-model").isMobile) return !1
        }
        if (e && y && (!C || a.is(C, !0, !1)()) && !c(e)) return !1;
        switch (E) {
            case "doNot":
                return !1;
            case "untilClosedPerServletType":
                return !l();
            case "untilClosed":
                return !u();
            case "always":
                return !0
        }
        return S && D
    }

    function u() {
        return i.enabled && !!i.getSessionKey(w)
    }

    function l() {
        var e = i.enabled && i.getSessionKey(w);
        return e && !!e[T ? "detail" : "list"]
    }

    function p() {
        if (i.enabled) {
            var e = i.getSessionKey(w) || {};
            e[T ? "detail" : "list"] = !0, i.setSessionKey("pop-calendar-dismissed", e)
        }
    }

    function c(e) {
        var t = e.getBoundingClientRect();
        return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    function f() {
        return P
    }

    function g(n) {
        A = !0, e.page.gatherDates(n), k = !0, t.trackEvent("DATEPICKER", "auto-popped-calendar-shown", window.pageServlet), t.trackEvent("calendar", "in_view", "autopop")
    }

    function m() {
        return k
    }

    function h() {
        return A
    }

    function v() {
        D = !1
    }
    var w = "pop-calendar-dismissed",
        S = !1,
        y = !1,
        C = "",
        D = !1,
        b = !1,
        P = !1,
        E = "",
        T = !1,
        k = !1,
        A = !1;
    return {
        init: s,
        shouldPop: d,
        shouldPopMetaMarketing: f,
        popCalendar: g,
        wasPoppedThisPageLoad: m,
        isShowing: h,
        setUserEnteredDates: v,
        setDismissedThisSession: p
    }
});
define("mixins/page-dates/default-dates", ["ta", "mixins/mixin", "mixins/Events", "mixins/page-dates/pop-calendar", "mixins/page-dates/DateTypeStore", "common/trackingStreams", "vanillajs", "ta/Core/TA.Event"], function(e, t, a, n, d, i, o, s) {
    "use strict";

    function p(e) {
        n.init(e), f = !!e.datesWereDefaulted, g = !0, D.emit("init")
    }

    function r(e) {
        "function" == typeof e && (g ? e() : D.on("init", e))
    }

    function u(t, a, o) {
        function p(t) {
            n.wasPoppedThisPageLoad() && (D.emit("poppedCalendarDismissed", t), n.setDismissedThisSession(), e.page.off("datepickerRejected", p))
        }

        function r() {
            if (g && (f && i.trackEvent("DATEPICKER", "undated_to_default_dated"), !a)) {
                var t = n.shouldPop(g);
                (t || n.shouldPopMetaMarketing()) && (t && D.emit("popFromDefault"), e.page.on("datepickerRejected", p), n.popCalendar(g))
            }
        }
        var u = o ? o : "STAYDATES";
        if (e.page.usingUnifiedDates) {
            e.page.hasDates(u) || e.page.clearDates(u), l = e.page.getDates(d.getStartDateType(u))[0], c = e.page.getDates(d.getEndDateType(u))[0];
            var g = t.querySelector('[data-datetype="' + d.getStartDateType(u) + '"]');
            e.page.on("dateSelected", function(a, d, o) {
                var s, r = l && c,
                    g = e.page.getDates(u)[0],
                    D = e.page.getDates(u)[1];
                t.contains(a) && (!r && e.page.hasDates(u) ? s = "undated_to_manually_dated" : g == l && D == c || (n.setUserEnteredDates(), e.page.off("datepickerRejected", p), f ? (s = "default_dated_to_manually_dated", f = !1) : s = "manually_dated_to_manually_dated"), l = g, c = D, s && i.trackEvent("DATEPICKER", s))
            }), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", r) : r(), s.on("specialOfferClosed", function() {
                a || g && n.shouldPop(g) && n.popCalendar(g)
            })
        }
    }
    var l, c, f = !1,
        g = !1,
        D = {
            init: p,
            onInit: r,
            apply: u,
            usingDefaults: function() {
                return f
            }
        };
    return t(D, new a("popFromDefault"))
});
define("mixins/page-dates/Responsive", ["vanillajs", "ta", "mixins/mixin", "ta/util/Date", "mixins/page-dates/Base", "calendars/CalendarDate", "mixins/page-dates/Utils", "mixins/page-dates/DateTypeStore", "mixins/page-dates/Validator", "mixins/page-dates/default-dates", "ta/util/Deferred", "common/trackingStreams"], function(e, t, a, n, s, i, l, r, o, p, d, u) {
    "use strict";

    function c(e) {
        var t = {
            dateType: e,
            startDate: r.getStartDate(e),
            endDate: !r.isSingleDateType(e) && r.getEndDate(e),
            minEnabledDate: A && new i(l.fromString(A)),
            maxEnabledDate: C && new i(l.fromString(C)),
            thaiOffset: T,
            showClearButton: P,
            calendarTitle: k,
            demandLoadAssets: w,
            calendarStyle: L,
            moveIntoView: O,
            heatmapStyle: y,
            heatmap: N,
            heatmapPercentiles: V,
            colorAccessibilityTestClass: M
        };
        r.isHotelDateType(e) || r.isRoundTripDateType(e) || r.isAttractionRangeDateType(e) || r.isVacationPackagesDateType(e) ? (t.maxStayLength = b, !t.maxEnabledDate && v && (t.maxEnabledDate = (new i).relativeDay(parseInt(v)))) : (t.availableDates = x, t.excludedDates = E);
        var a = r.getMinEnabledDate(e);
        return a && (t.minEnabledDate = a), t
    }

    function D(e, t) {
        if (!e || !t || !e.querySelector) return null;
        for (var a = "[data-dateType=" + t + "]", n = null, s = 0; s < 3 && e.parentNode && !n; s++) e = e.parentNode, n = e.querySelector(a);
        return n
    }

    function f(e) {
        r.getParents(e).forEach(function(a) {
            m.validate(a) || r[a].children.filter(function(t) {
                return t !== e
            }).forEach(function(e) {
                t.page.clearDates(e), t.page.emit("dateSelected", null, e, [null])
            })
        })
    }

    function g(e) {
        return S && r.getCorrespondingDateType(e) && !r.isStartDateType(e) && !t.page.hasDates(r.getCorrespondingDateType(e))
    }
    var m, y, h = null,
        S = !1,
        T = !1,
        v = null,
        b = n.MAX_STAY_DURATION_DAYS,
        x = null,
        E = null,
        A = null,
        C = null,
        P = !1,
        k = null,
        w = !0,
        L = {},
        O = !1,
        N = {},
        V = {},
        M = null,
        I = function(e, t) {
            a(this, new s(e)), m = new o(t), t && (T = t.thaiOffset, S = t.popCheckInFirst, b = t.maxStayLength || b, x = t.availableDates, E = t.excludedDates, A = t.minEnabledDate, C = t.maxEnabledDate, P = t.showClearButton, k = t.calendarTitle, w = t.demandLoadAssets, v = t.maxEnabledDaysOut, L = t.calendarStyle, O = t.moveIntoView || O, y = t.heatmapStyle, N = t.heatmap || N, V = t.heatmapPercentiles || V, M = t.colorAccessibilityTestClass, p.init({
                datesWereDefaulted: t.didCreateDefaultDates,
                popFromDefault: t.supportsPrePopWithDefaultDates,
                popCalendarType: t.popCalendarType,
                qualtricsSurveyEnabled: t.qualtricsSurveyEnabled,
                hasMetaMarketingDefaultDates: t.hasMetaMarketingDefaultDates,
                popFromVisibleOnly: t.supportsPrePopWithVisibilityOnly,
                popFromVisibleOnlyBreakpoint: t.supportsPrePopWithVisibilityOnlyBreakpoint,
                isDetailPage: t.isDetailPage
            }))
        };
    return I.prototype.gatherDates = function(e, a, n, s, i) {
        var l = e && e.getAttribute("data-dateType"),
            o = l && r[l] ? l : "UNKNOWN";
        if (g(o) && (o = r.getCorrespondingDateType(o), e && o && (e.blur(), e = D(e, o))), !e || e !== h) {
            h = e, e && e.classList && e.classList.add("focused");
            var p = d(!0);
            return require(["trjs!calendars/ResponsiveStayDates"], function(a) {
                a.openAsPopover(e, c(o)).then(function(a) {
                    h = null, e && e.classList && e.classList.remove("focused"), t.page.pushDates(e, o, a), p.resolve(a)
                }, function(a) {
                    a === h && (h = null), e && e.classList && e.classList.remove("focused"), i && t.page.hasDates("STAYDATES") && "classic" === L && t.page.onDatesSelected(e, o, t.page.getDates("STAYDATES")), t.page.emit("datepickerRejected", e)
                }), u.trackEvent("calendar", "in_view", "default")
            }), p.promise()
        }
    }, I.prototype.gatherDatesNear = function(e) {
        var a = l.findClosestDatepicker(e, "CHECKIN");
        a && t.page.gatherDates(a)
    }, I.prototype.pushDates = function(e, a, n) {
        t.page.setDates(a, n), f(a), t.page.onDatesSelected(e, a, n)
    }, I.prototype.setAvailableDates = function(e) {
        x = e
    }, I.prototype.setExcludedDates = function(e) {
        E = e
    }, I.prototype.setMaximumDaysOut = function(e) {
        v = e
    }, I
});
define("ta/popups/SlotSet", ["vanillajs", "api-mod", "ta/util/Error"], function(t, s, o) {
    function i() {
        this.nW = 525, this.nH = 460, this.nXI = 24, this.nYI = 24, this.totalSlots = 20, this.slots = [];
        try {
            screen.width > 1024 ? (this.nW = 800, this.nH = 600, this.nXI = 80, this.nYI = 40) : screen.width > 800 && (this.nW = 620, this.nH = 500, this.nXI = 60, this.nYI = 30)
        } catch (t) {
            this.error = t, o.record(this.error, "slot set", null, {
                "slot set": "general"
            })
        }
        this.getOpenSlot = function(t) {
            (!t || t < 0 || t > this.totalSlots) && (t = 0);
            var s = function(t) {
                try {
                    var s = !1,
                        i = !1;
                    try {
                        i = this.slots[t].occupied
                    } catch (t) {}
                    if (i) try {
                        var r = i.windowObject;
                        r && !r.closed || (s = !0)
                    } catch (t) {
                        s = !0
                    } else s = !0
                } catch (s) {
                    o.record(s, "get open slot - get pop slot", null, {
                        totalSlots: this.totalSlots,
                        slotNumber: t
                    })
                }
                if (s) {
                    this.slots[t].occupied = null;
                    var l = this.slots[t];
                    return l.slotPos = t, l
                }
                return !1
            }.bind(this);
            try {
                var i, r;
                for (i = t - 1; i >= 0; i -= 1)
                    if (r = s(i)) return r;
                for (i = t; i < this.slots.length; i++)
                    if (r = s(i)) return r
            } catch (t) {
                o.record(t, "get open slot", null, {
                    totalSlots: this.totalSlots
                })
            }
            return !1
        }
    }
    return i
});
define("ta/popups/Slot", ["vanillajs"], function(i) {
    function t(i, t, n, s) {
        this.x = i, this.y = t, this.w = n, this.h = s, this.occupied = null
    }
    return t
});
define("ta/popups/PopupSlotSet", ["vanillajs", "api-mod", "ta/util/Error", "ta/popups/SlotSet", "ta/popups/Slot"], function(t, s, i, n, e) {
    function o() {
        s.mixin(this, new n), this.nX = 500;
        var t = 1160;
        try {
            screen.width < 1660 && (screen.width > 1024 && screen.width < 1280 ? t = 960 : screen.width <= 1024 && (t = 740), this.nX = screen.width - t), this.nY = isNaN(window.screenTop) ? isNaN(window.screenY) ? 0 : window.screenY : window.screenTop
        } catch (t) {
            this.error = t, this.nY = 0, i.record(this.error, "slot set", null, {
                "slot set": "popup"
            })
        }
        for (var o = 0; o < this.totalSlots; o++) this.slots[o] = new e(this.nX, this.nY, this.nW, this.nH), this.nX = this.nX + this.nXI, this.nY = this.nY + this.nYI
    }
    return o
});
define("ta/popups/PopunderSlot", ["vanillajs", "api-mod", "ta/popups/Slot"], function(t, i, n) {
    function o(t, o, p, s, h, u, a, e) {
        i.mixin(this, new n(t, o, p, s)), this.tx = h, this.ty = u, this.tw = a, this.th = e
    }
    return o
});
define("ta/popups/PopunderSlotSet", ["vanillajs", "api-mod", "ta/util/Error", "utils/browserutils", "ta/popups/PopupSlotSet", "ta/popups/PopunderSlot"], function(t, i, s, h, n, e) {
    function o() {
        i.mixin(this, new n);
        try {
            this.nX = window.screenLeft || window.screenX, this.nY = window.screenTop || window.screenY
        } catch (t) {
            this.error = t, this.nX = 200, this.nY = 200
        }
        this.w = 1, this.h = 1, this.x = 5e3, this.y = 5e3, this.totalSlots = 4;
        try {
            h.ie7 && (this.w = 250, this.h = 100), (h.safari || h.chrome) && (this.w = 85, this.h = 100), "undefined" == typeof this.nX ? (this.nX = 0, this.nY = 0, this.x = this.nX + window.screen.availWidth - this.w, this.y = this.nY + window.screen.availHeight - this.h) : (this.x = this.nX + window.getWidth() - this.w, this.y = this.nY + window.getHeight() - this.h), h.ie7 ? (this.y = this.y - 95, this.x = this.x + 13) : (h.safari || h.chrome) && (this.y = this.y - 16)
        } catch (t) {
            this.error = t
        }
        this.error && s.record(this.error, "slot set", null, {
            "slot set": "popunder"
        });
        for (var t = 0; t < this.totalSlots; t++) this.slots[t] = new e(this.nX, this.nY, this.nW, this.nH, this.x, this.y, this.w, this.h), this.nX = this.nX + this.nXI, this.nY = this.nY + this.nYI
    }
    return o
});
define("ta/popups/TAPopWindow", ["vanillajs", "api-mod", "ta/util/Error", "ta/Core/TA.Store", "ta/util/Cookie", "utils/browserutils", "ta/Core/TA.Record", "ta/Browser"], function(t, i, s, o, e, h, n, r) {
    function w(t) {
        this.options = {
            name: "TAWin",
            url: "",
            windowHook: !1,
            customWidth: !1,
            customHeight: !1,
            toolbar: 1,
            location: 1,
            directories: 1,
            status: 1,
            menubar: r.isIE9orHigher() ? 0 : 1,
            resizable: 1,
            copyhistory: 1,
            scrollbars: 1,
            alwaysRaised: !1,
            alwaysLowered: !1,
            widthOffset: 8,
            heightOffset: 164,
            delayLoad: !1
        }, this.init = function(n, r) {
            var w, l, a;
            if (i.merge(this.options, r), this.type = n, this.assignSlot(), this.options.customWidth && (this.width = this.options.customWidth), this.options.customHeight && (this.height = this.options.customHeight), null != this.options.widthOffset && (this.widthOffset = this.options.widthOffset), null != this.options.heightOffset && (this.heightOffset = this.options.heightOffset), this.options.delayLoad && (this.delayLoad = this.options.delayLoad), this.options.windowHook) return this.windowObject = this.options.windowHook, o.has("checkrates.add_holding_windows") || this.windowObject.refresh(), !0;
            o.has("checkrates.chrome_dates_entry_holding") && (this.options.scrollbars = 0), this.url = this.options.url, this.assignWinArgs();
            try {
                if (this.type == t.windowType.HOLDING && e.setPIDCookie(28962), h.chrome && this.options.inTab) {
                    var d = Math.random().toString(36).substring(7);
                    return this.options.popunder ? (w = document.createElement("a"), w.href = this.url, w.target = d, document.body.appendChild(w), l = document.createEvent("MouseEvents"), l.initMouseEvent("click", !1, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null), w.dispatchEvent(l), w.parentNode.removeChild(w), void(this.windowObject = window.open(this.url, d))) : void(this.windowObject = window.open(this.url, d))
                }
                var p = h.chrome && h.version > 31;
                if (p) this.windowObject = window.open("", "_blank");
                else if (this.options.popunder)
                    if (h.ie8 || h.ie9 || h.ie10 || h.ie11) this.windowObject = window.open("pages/blank.html", "_blank", this.winArgs), window.document.focus();
                    else if (h.safari && "ios" !== h.Platform.name) {
                    if (this.windowObject = window.open("", "_blank", this.winArgs), this.windowObject) {
                        var c = window.open("", "_blank");
                        c.close()
                    }
                    window.focus()
                } else h.firefox ? (this.windowObject = window.open("", "_blank", this.winArgs), window.open("", "_self", ""), window.focus()) : this.windowObject = window.open("", "_blank", this.winArgs);
                else this.windowObject = window.open("", "_blank", this.winArgs);
                a = this.windowObject, a && this.isTAWindow() ? (this.type == t.windowType.CHECK_RATE && t.pollForPartnerLoad(a, new Date, this.options.name, t.extractSlotFromCommerceUrl(this.options.url)), this.delayLoad || t.redirectToUrl(this.windowObject, this.url)) : !a && h.ie && this.type === t.windowType.CHECK_RATE && this.url && o.has("ta.ie_commerce_popup_block_fix") && (e.setPIDCookie(38822), window.location = this.url)
            } catch (t) {
                this.errorOpening = t, s.record(this.errorOpening, "pop window opening failure", null, {
                    type: this.type,
                    url: this.url
                })
            }
            try {
                a = this.windowObject, a && this.isTAWindow() && this.type == t.windowType.HOLDING && this.moveBehindMain(a)
            } catch (t) {
                this.errorMoving = t, s.record(this.errorMoving, "popunder window moving", null, {
                    type: this.type,
                    url: this.url
                })
            }
        }, this.repurpose = function(i, o, e) {
            if (this.type == t.windowType.HOLDING) {
                this.type = t.windowType.CHECK_RATE, this.slot.occupied = !1, this.assignSlot(), this.url = i, o && (this.width = o, this.options.widthOffset = 0), e && (this.height = e, this.options.heightOffset = 0);
                var h = this.windowObject;
                if (h && this.isTAWindow()) try {
                    this.options.inTab || (h.moveTo(0, 0), h.resizeTo(this.width + this.options.widthOffset, this.height + this.options.heightOffset), h.moveTo(this.x, this.y)), this.delayLoad || this.options.keepFocus || h.focus(), this.delayLoad || (h.location = this.url)
                } catch (t) {
                    s.record(this.errorMoving, "repurpose popunder fail", null, {
                        type: this.type,
                        url: this.url
                    })
                }
                return this
            }
            return !1
        }, this.assignWinArgs = function() {
            this.winArgs = "toolbar=" + this.options.toolbar, this.winArgs += ",location=" + this.options.location, this.winArgs += ",directories=" + this.options.directories, this.winArgs += ",status=" + this.options.status, this.winArgs += ",menubar=" + this.options.menubar, this.winArgs += ",resizable=" + this.options.resizable, this.winArgs += ",copyhistory=" + this.options.copyhistory, this.winArgs += ",scrollbars=" + this.options.scrollbars, this.winArgs += ",width=" + this.width, this.winArgs += ",height=" + this.height, this.winArgs += ",left=" + this.x, this.winArgs += ",top=" + this.y, this.winArgs += ",screenx=" + this.x, this.winArgs += ",screeny=" + this.y, this.options.alwaysRaised && (this.winArgs += ",alwaysRaised"), this.options.alwaysLowered && (this.winArgs += ",alwaysLowered")
        }, this.assignSlot = function() {
            this.type == t.windowType.HOLDING ? (this.slot = t.getPopunderSlots().getOpenSlot(), this.width = this.slot.tw, this.height = this.slot.th, this.x = this.slot.tx, this.y = this.slot.ty) : (this.slot = t.getPopupSlots().getOpenSlot(), this.width = this.slot.w + this.options.widthOffset, this.height = this.slot.h + this.options.heightOffset, this.x = this.slot.x, this.y = this.slot.y), this.slot.occupied = this
        }, this.moveBehindMain = function(e) {
            if (o.has("checkrates.cr_popunder_by_shift_ctrl") && h.version > 23) t.openCloseTab();
            else if (o.has("checkrates.chrome_dates_entry_holding")) try {
                var r = window.open("about:blank");
                r && (r.focus(), r.close())
            } catch (t) {
                s.record(t, "holdingWindow - Chrome blur failed")
            }
            e.blur(), e.opener = self, e.moveTo(this.slot.x, this.slot.y), e.resizeTo(this.slot.w, this.slot.h), this.delayLoad || (e.location = this.url), window.focus(), i.hasClass(document.activeElement, "globalNav2011_reset") || n.trackEventOnPage("checkrates", "no_focus_on_main", h.version, 1)
        }, this.isTAWindow = function() {
            var t = !0;
            try {
                var i = this.windowObject.location;
                this.windowObject.status = "", null !== i && "" !== i || (t = !1)
            } catch (i) {
                t = !1
            }
            return t
        }
    }
    return w
});
define("ta/popups/PollForPartnerLoad", ["common/trackingStreams"], function(t) {
    var e = function(n, E, r, a, o) {
        n && setTimeout(function() {
            var C = null,
                c = (new Date).getTime() - E.getTime();
            try {
                C = n.document
            } catch (t) {}
            C ? c > 2e4 ? t.trackEvent("COMMERCE_CLICK", "PROVIDER_TIMEOUT", r || "", c) : n.closed ? t.trackEvent("COMMERCE_CLICK", "PROVIDER_CLOSED", r || "", c) : e(n, E, r, a, o) : t.trackEvent("COMMERCE_CLICK", "PROVIDER_LOADED", (o || window.pageServlet || "") + "|" + (a || "") + "|" + (r || ""), c)
        }, 100)
    };
    return e
});
define("ta/popups/BeforePopTargetBlankIE", ["ta/Browser", "ta/util/Cookie"], function(e, t) {
    return function(o) {
        var n;
        return !o || !o.href || "_blank" !== o.target || (e.isIE10Metro() || (n = e.isIE9orHigher() ? window.open(o.href, "_blank") : window.open(url, "_blank", "location=yes,resizable=yes,menubar=yes,scrollbars=yes,toolbar=yes,width=" + document.documentElement.clientWidth + ",height=" + document.documentElement.clientHeight)), !(n && !n.closed && "undefined" != typeof n.closed) && (o.target = "", t.setPIDCookie(38821), !0))
    }
});
define("ta/popups/PopUtil", ["vanillajs", "ns-exporter", "utils/browserutils", "ta/util/Cookie", "ta/util/Error", "ta/Core/TA.Record", "ta/Browser", "ta/Core/TA.Store", "ta/popups/PopupSlotSet", "ta/popups/PopunderSlotSet", "ta/popups/TAPopWindow", "ta/util/openNewTab", "ta/popups/PollForPartnerLoad", "ta/popups/CookieSettingsPanel", "ta/popups/BeforePopTargetBlankIE"], function(e, n, t, o, r, i, d, a, c, u, l, s, p, w, h) {
    function f(e, n) {
        n = n || {};
        var t = new l(P);
        if (t.init(e, n), !t.errorOpening && !t.errorMoving && t.windowObject) try {
            return a.has("checkrates.add_holding_windows") && n.windowHook && n.windowHook.location && n.windowHook.location.href.test(/RuleBasedPopunder/) ? m.unshift(t) : m.push(t), n.windowHook || e != P.windowType.HOLDING || this.trackPopunder(n.url, P.numPopundersCheck()), t
        } catch (e) {
            r.record(e, "Window Popup - could not register new window")
        }
        return !1
    }
    var m = [],
        g = null,
        v = null,
        k = 2,
        P = {
            windowType: {
                CHECK_RATE: 0,
                PROV_WIN: 1,
                HOLDING: 2,
                COMMERCE: 3,
                VFM: 4,
                COOKIE: 5
            },
            maxPopunders: 4,
            tryHoldingWindows: function(e, n) {
                try {
                    for (var t = !0, o = 0; o < n; o++) {
                        var i = this.launchHoldingWindow(e);
                        i.windowObject || (t = !1)
                    }
                    if (t) return !0
                } catch (e) {
                    r.record(e, "try two hw")
                }
                return !1
            },
            getPopunderSlots: function() {
                return null === g && (g = new u), g
            },
            getPopupSlots: function() {
                return null === v && (v = new c), v
            },
            createCheckRatesWindow: function(e) {
                return f(this.windowType.CHECK_RATE, e)
            },
            createHoldingWindow: function(e) {
                return f(this.windowType.HOLDING, e)
            },
            createVFMWindow: function(e) {
                return f(this.windowType.VFM, e)
            },
            getHoldingWindowSet: function() {
                for (var e = [], n = 0; n < m.length; n++) {
                    var t = m[n];
                    if (t && t.type == this.windowType.HOLDING) {
                        var r = t.windowObject;
                        if (r && "closed" in r)
                            if (r.closed) {
                                if (a.has("checkrates.add_holding_windows") && r.closed) {
                                    var i = window.cookieDomain;
                                    i && o.write("CommercePopunder", "SuppressAll", 0, i)
                                }
                            } else e[e.length] = t
                    }
                }
                return e
            },
            attemptHoldingWindowWNumChecked: function() {},
            openCloseTab: function() {
                var e, n;
                if (a.has("popunder.popunder_by_self_closing_tab")) try {
                    n = document.createElement("a"), n.href = "http://" + window.location.hostname + "/vpages/tab.html", document.body.appendChild(n), e = document.createEvent("MouseEvents"), e.initMouseEvent("click", !1, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null), n.dispatchEvent(e), n.parentNode.removeChild(n)
                } catch (e) {
                    r.record(e, "self-closing tab blur method failed")
                } else if (a.has("checkrates.cr_popunder_by_shift_ctrl") && t.version > 23) try {
                    n = document.createElement("a"), n.href = "about:blank", n.target = "popunderwindowhelper", document.body.appendChild(n), e = document.createEvent("MouseEvents");
                    var o = !0,
                        i = !0;
                    e.initMouseEvent("click", o, i, window, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null), n.dispatchEvent(e), n.parentNode.removeChild(n), window.open("about:blank", "popunderwindowhelper").close()
                } catch (e) {
                    r.record(e, "shift-ctrl blur method failed")
                }
            },
            attemptHoldingWindow: function(e) {
                if (!this.useShiftClick())
                    if (a.has("checkrates.add_holding_windows")) {
                        var n = this.numPopundersCheck();
                        n < this.maxPopunders && this.launchHoldingWindow(e)
                    } else k > this.getHoldingWindowSet().length && this.launchHoldingWindow(e)
            },
            launchHoldingWindow: function(e) {
                if (!e) return !1;
                var n = a.retrieve("checkrates.holdingWindowURI");
                if (n) {
                    a.store("checkrates.HWtracking", "date");
                    var t = {
                        url: n
                    };
                    return this.createHoldingWindow(t)
                }
                return !1
            },
            launchAddHoldingWindow: function(e, n) {
                var t = n || {};
                return t.url = e, this.createHoldingWindow(t)
            },
            popunderReminder: function(e) {
                var n = {
                    windowHook: e
                };
                this.createHoldingWindow(n)
            },
            numPopundersCheck: function() {
                try {
                    var e = this.getHoldingWindowSet(),
                        n = 0,
                        t = o.readRaw("CommercePopunder"),
                        i = t ? t.match(/\d+/) : null;
                    return n = t && i ? Math.max(e.length, parseInt(i[0], 10)) : e.length
                } catch (e) {
                    r.record(e, "CommercePopunder - numPopundersCheck")
                }
            },
            trackPopunder: function(e, n) {
                try {
                    if (!n || !e) return;
                    var t = "CommerceEnhancedPopunder";
                    if (e.match(/AlsoViewedLB/)) t = "AlsoViewedLB";
                    else {
                        var o = e.match(/RuleBasedPopunder\?Rule=\d+/);
                        if (o) {
                            var d = o[0].match(/\d+/);
                            t = "RuleBasedPopunder_" + d[0]
                        }
                    }
                    var c = "OpenWindow",
                        u = a.retrieve("checkrates.HWtracking");
                    u && (c = "OpenWindow_" + u, a.remove("checkrates.HWtracking")), i.trackEventOnPage("CommercePopunder", c, t, n, !0)
                } catch (e) {
                    r.record(e, "CommercePopunder - trackPopunder")
                }
            },
            getProviderWindowDims: function(e, n) {
                var o = null,
                    r = null,
                    i = null,
                    d = null;
                return "hotels.com" == e && (o = 975), screen.width >= 1280 && (o = 1e3, r = 897, n || (i = 0, d = 0, t.chrome ? r -= 50 : t.firefox ? r -= 87 : t.ie && (o -= 12, r -= 179))), {
                    customWidth: o,
                    customHeight: r,
                    widthOffset: i,
                    heightOffset: d
                }
            },
            useShiftClick: function() {
                return !1
            },
            expandSidebarWindow: function(e, n, t) {
                i.trackEventOnPage("traffic_acquisition_sidebar", "any", n, 1), "true" == t && (window.moveTo(0, 0), window.resizeTo(screen.width, screen.height)), document.getElementById("SliderHolder").style.display = "none", document.getElementById("PAGE").style.marginLeft = "0px"
            },
            cookieSettingsPanel: function(e) {
                return w(e)
            },
            pollForPartnerLoad: function(e, n, t, o, r) {
                return p(e, n, t, o, r)
            },
            extractSlotFromCommerceUrl: function(e) {
                if (!e) return 0;
                var n = e.match("[&|\\?]slot=([^&]*)");
                return n ? n[1] : 0
            },
            redirectToUrl: function(e, n) {
                e ? e.location = n : window.location = n
            },
            beforePopTargetBlankIE: function(e) {
                return h(e)
            },
            attemptOpenUrlNewTab: function(e) {
                return s(e)
            }
        };
    return n.exportTo(P, "ta.popups.PopUtil"), P
});
define("mixins/page-guests/Guests", ["vanillajs", "ta/Core/TA.FireEvent"], function(t, r) {
    "use strict";

    function s(t) {
        this.guests = new o(t)
    }
    var e = 4,
        n = {
            adults: 2,
            rooms: 1,
            child_rm_ages: ""
        },
        o = function(t) {
            function s(t, r) {
                var s = !1,
                    e = !1;
                for (var n in t) t.hasOwnProperty(n) && n in a && a[n] != t[n] && (a[n] = t[n], o(n) && (e = !0), s = !0);
                return s && !r && setTimeout(d, 1), s
            }

            function o(t) {
                if ("adults" == t) {
                    if (i()) return a.rooms = Math.ceil(a.adults / e), !0;
                    if (u()) return a.rooms = a.adults, !0
                } else if ("rooms" == t) {
                    if (i()) return a.adults = a.rooms * e, !0;
                    if (u()) return a.adults = a.rooms, !0
                }
                return !1
            }

            function i() {
                return a.adults / Math.max(a.rooms, 1) > e
            }

            function u() {
                return a.adults < a.rooms
            }
            t = t || {};
            var a = {
                rooms: t.rooms || n.rooms,
                adults: t.adults || n.adults,
                child_rm_ages: t.child_rm_ages || n.child_rm_ages
            };
            this.getRooms = function() {
                return a.rooms
            }, this.getAdults = function() {
                return a.adults
            }, this.getChildRoomAges = function() {
                return a.child_rm_ages
            }, this.set = function(t) {
                return s(t)
            }, this.clear = function() {
                return s(n)
            }, this.toJson = function() {
                var t = {};
                for (var r in a) t[r] = a[r];
                return t
            }, this.toQueryJson = function() {
                var t = [a.rooms, a.adults];
                return a.child_rm_ages && t.push(a.child_rm_ages), {
                    uguests: t.join("_")
                }
            };
            var d = function(t) {
                window.ta && ta.page && ta.page.emit && ta.page.emit("guestsSelected", this.toJson(), t)
            }.bind(this);
            r.on("onLegacyGuestsChanged", function(t) {
                if (t) {
                    var r = {
                        rooms: t.rooms,
                        adults: t.guests,
                        child_rm_ages: t.child_rm_ages
                    };
                    s(r, !0) && d(!0)
                }
            });
            var c = !1;
            r.on("receivedGuestData", function(t) {
                var r = {};
                for (var e in {
                        adults: 1,
                        rooms: 1,
                        child_rm_ages: 1
                    }) {
                    var n = t.getAttribute("data-" + e);
                    n && (r[e] = n)
                }!s(r, !0) && c || d(!0), c = !0
            })
        };
    return s
});
define("overlays/options/closeOnSourceClick", ["vanillajs", "api-mod"], function(t, e) {
    "use strict";

    function n(t) {
        e.containsElement(this.sourceElement, t.target) && (this.hide("source-click"), t.stopPropagation(), t.preventDefault())
    }

    function i(t) {
        return function() {
            var i = n.bind(this),
                o = function(t) {
                    setTimeout(t.bind(this), 1)
                }.bind(this);
            this.on("show", o.bind(void 0, function() {
                e.addEvent(this.sourceElement, "click", i), t && e.addEvent(this.sourceElement, "touchstart", i)
            })).on("hide", o.bind(void 0, function() {
                e.removeEvent(this.sourceElement, "click", i), t && e.removeEvent(this.sourceElement, "touchstart", i)
            }))
        }
    }
    var o = i(!0);
    return o.withoutTouchEvents = i(!1), o
});
define("overlays/options/closeOnChildClick", ["vanillajs", "api-mod"], function(t, n) {
    "use strict";

    function i(t) {
        n.containsElement(this.container, t.target) && this.hide("child-click")
    }

    function e(t) {
        return function() {
            var e = n.bind(i, this);
            this.on("show", function() {
                n.addEvent(this.domParent, "click", e), t && n.addEvent(this.domParent, "touchstart", e)
            }).on("hide", function() {
                n.removeEvent(this.domParent, "click", e), t && n.removeEvent(this.domParent, "touchstart", e)
            })
        }
    }
    var o = e(!0);
    return o.withoutTouchEvents = e(!1), o
});
define("overlays/options/minWidth", ["vanillajs"], function(i) {
    "use strict";
    var n = function(i) {
        function n() {
            this.container.style.minWidth = i + "px", this.emit("positionDirty")
        }
        return function() {
            this.on("show", n.bind(this))
        }
    };
    return n
});
define("overlays/options/keepInDom", ["vanillajs", "api-mod"], function(n, i) {
    var t = "";
    return function() {
        this.isOpen = function() {
            return !!i.inDocument(this.container) && !i.hasClass(this.container, "hidden")
        }, this.show = function() {
            return i.inDocument(this.container) ? (this.container.style.display = t, i.removeClass(this.container, "hidden")) : this.domParent.appendChild(this.container), this.emit("show"), this
        }, this.hide = function(n) {
            return i.inDocument(this.container) && "none" != this.container.style.display && ("none" != this.container.style.display && (t = this.container.style.display || "", this.container.style.display = "none"), i.hasClass(this.container, "hidden") || i.addClass(this.container, "hidden"), this.emit("hide", {
                trigger: n
            })), this
        }
    }
});
define("overlays/styles/dropdown", ["vanillajs", "api-mod"], function(t, n) {
    "use strict";

    function e(t, e, i, o) {
        this.container = n.createElement(o || "span", {
            "class": "ui_overlay ui_dropdown " + e,
            "style": i
        }), this.contentElement = this.container
    }
    var i = function(t, n, i, o, r, a) {
        i = i || t.getAttribute("data-dropdown") || "";
        var s = r || t.getAttribute("style") || "";
        return function() {
            e.call(this, n, i, s, a), this.updateContent(o)
        }
    };
    return i
});
define("forms/select", ["vanillajs", "api-mod", "overlays/Overlay", "overlays/position", "overlays/options/closeOnDocClick", "overlays/options/closeOnSourceClick", "overlays/options/closeOnChildClick", "overlays/options/repositionOnEvent", "overlays/options/minWidth", "overlays/options/keepInDom", "overlays/styles/dropdown", "mixins/Events"], function(e, t, n, i, o, s, c, l, a, r, u, d) {
    function h() {
        function e() {
            t.removeClass(p, "open"), E.emit("close")
        }

        function h() {
            C.show(), t.addClass(p, "open"), E.emit("open")
        }

        function v(e, n, i) {
            if (e) {
                if (y != e) {
                    k.innerHTML = e.innerHTML;
                    var o = e.getAttribute("data-value");
                    w && (w.value = o), y && t.removeClass(y, "ui_icon checkmark"), t.addClass(e, "ui_icon checkmark"), y = e, E.emit("change", o, e.innerHTML, i)
                }
            } else y && (t.removeClass(y, "ui_icon checkmark"), y = null);
            return n && C.hide(), !!e
        }

        function f(e) {
            v(this, !0)
        }
        var p, m, k, w, y, C, E = this;
        t.mixin(this, new d("open", "close", "change")), this.init = function(d, h, v) {
            m = t.find(".options", d), y = t.find(".option.ui_icon.checkmark", m);
            var p = d.getAttribute("data-select-class") || [];
            return C = new n(d, u(d, "below", p, m, null, v), i.below([0, -d.offsetHeight]), a(d.offsetWidth), o.withoutTouchEvents, c.withoutTouchEvents, s.withoutTouchEvents, l(window, "resize"), l(window, "scroll"), r), t.removeClass(m, "hidden"), C.on("hide", e), d.onclick = function() {}, t.select(".option", m).forEach(function(e) {
                t.addEvent(e, "click", f)
            }), this.attach(d, !h), this.init = function() {}, this
        }, this.attach = function(e, n) {
            p !== e && (p && t.removeEvent(k, "click", h), p = e, k = t.find(".closed_text,.select-label", p), w = t.find(p.getAttribute("data-input"), p), C.sourceElement = p, t.addEvent(k, "click", h), n && h())
        }, this.destroy = function() {
            C && (t.select(".option", m).forEach(function(e) {
                t.removeEvent(e, "click", f)
            }), t.removeEvent(k, "click", h), C.destroy(), C = null)
        }, this.revealValue = function(e) {
            t.removeClass(t.find('.option[data-value="' + e + '"]', m), "hidden")
        }, this.selectValue = function(e) {
            return v(t.find('.option[data-value="' + e + '"]', m), !1, !0)
        }, this.selectValueAndClose = function(e) {
            return v(t.find('.option[data-value="' + e + '"]', m), !0, !0)
        }, this.getValue = function() {
            return y ? y.getAttribute("data-value") : ""
        }, this.reposition = function() {
            C && t.hasClass(p, "open") && C.reposition()
        }
    }
    return {
        Select: h
    }
});
define("mixins/page-guests/GuestsSelector", ["vanillajs", "ta", "forms/select"], function(t, e, n) {
    "use strict";

    function s(t, s, i) {
        function a(e, n) {
            if (!f) {
                var i = {};
                i[t] = parseInt(e, 10), c.set(i) && s()
            }
        }

        function u(e, n) {
            o && (f = n, o.selectValue(e[t]), f = !1, n && i && i(e))
        }
        var o, f;
        this.init = function(t) {
            t && (e.page.off("guestsSelected", u).on("guestsSelected", u), o || (o = new n.Select, o.on("change", a), o.init(t, !0)))
        }, this.attach = function(t) {
            o.attach(t)
        }
    }

    function i(t) {
        c = t, this.GuestsSelector = s
    }
    var c;
    return i
});
define("ta/util/LegacyDateShim", ["vanillajs", "api-mod", "ns-exporter", "ta/util/Error", "ta/Core/TA.Event", "utils/ajax", "ta/Core/TA.Store", "ta/util/Date"], function(e, t, a, r, n, s, o, l) {
    function i() {
        return ta.page && ta.page.hasDates && ta.page.hasDates("STAYDATES")
    }

    function u() {
        return ta.page && ta.page.hasDates && ta.page.hasDates("ROUNDTRIP")
    }

    function d(e) {
        var t = ta.page.datesToQueryJson(e || "STAYDATES");
        if (o.has("guests_rooms_picker.enabled")) {
            var a = ta.page.guests.toJson();
            for (var r in a) t[r] = a[r]
        } else t.adults = f();
        return t
    }

    function c() {
        var e = ta.page.guests.toJson();
        return e.guests = e.adults, delete e.adults, e
    }

    function g() {
        return ta.page && ta.page.getDates && ta.page.getDates("CHECKIN")[0] || void 0
    }

    function p() {
        return ta.page && ta.page.getDates && ta.page.getDates("CHECKOUT")[0] || void 0
    }

    function D() {
        if (!i()) return !1;
        var e = ta.widgets.calendar.getPageInDate(),
            t = ta.widgets.calendar.getPageOutDate(),
            a = Math.round(Math.abs((e.getTime() - t.getTime()) / l.MS_IN_DAY));
        return a >= 1 && a <= l.MAX_STAY_DURATION_DAYS
    }

    function f() {
        var e = 2;
        return ta.page.guests ? e = ta.page.guests.getAdults() : o.has("multiDP.adultsCount") && (e = o.retrieve("multiDP.adultsCount"), o.store("date.picker.adultsCount", e)), e
    }

    function v(e) {
        return "classic" === e && "undefined" != typeof DATE_PICKER_CLASSIC_FORMAT ? DATE_PICKER_CLASSIC_FORMAT : "short" === e && "undefined" != typeof DATE_PICKER_SHORT_FORMAT ? DATE_PICKER_SHORT_FORMAT : "undefined" != typeof DATE_PICKER_META_FORMAT ? DATE_PICKER_META_FORMAT : ("string" != typeof e && (e = "not_a_string"), "")
    }

    function h() {
        var e = "no dates";
        try {
            var t = v("classic");
            i() && (e = ta.widgets.calendar.dateToString(ta.widgets.calendar.getPageInDate(), t), e = e + " - " + ta.widgets.calendar.dateToString(ta.widgets.calendar.getPageOutDate(), t))
        } catch (e) {}
        return e
    }

    function E(e, t) {
        var a, r, n, s, i, u, d, c, g;
        return e && e.getDate && t ? t == v("classic") ? (a = new Date(e), o.retrieve("thai_buddhist_era_year") && a.setFullYear(a.getFullYear() + l.THAI_BUDDHIST_YEAR_OFFSET), r = "MM", n = "yyyy", s = "dd", c = a.getDate() + "", t.indexOf("dd") != -1 ? c && 1 === c.length && (c = "0" + c) : s = "d", g = a.getMonth() + 1 + "", t.indexOf("MM") != -1 ? g && 1 === g.length && (g = "0" + g) : r = "M", t = t.replace(r, g).replace(s, c).replace(n, a.getFullYear()).replace(/'/g, "")) : t == v("short") ? (a = new Date(e), r = "MM", s = "dd", c = a.getDate() + "", c && 1 == c.length && (c = "0" + c), g = a.getMonth() + 1 + "", g && 1 == g.length && (g = "0" + g), t = t.replace(r, g).replace(s, c).replace(/'/g, "")) : (i = o.retrieve("multiDP.abbrevMonthList"), u = e.getDay(), o.retrieve("multiDP.isMondayFirstDayOfWeek") && (u -= 1), u == -1 && (u = 6), d = "EEE", r = "MMM", "EEEE d MMMM" == t && (d = "EEEE", r = "MMMM"), t = t.replace(d, jsGlobalDaysAbbrev[u]).replace(r, i[e.getMonth()]).replace(/\bd\b/, e.getDate()).replace(/'/g, "")) : ""
    }

    function T() {
        try {
            var e = g(),
                t = p(),
                a = f();
            if (!e || !t || !a) return null;
            var n = e.getDate(),
                s = e.getMonth() + 1,
                o = e.getFullYear(),
                l = t.getDate(),
                i = t.getMonth() + 1,
                u = t.getFullYear(),
                d = {
                    "inDay": n,
                    "inMonth": s + " " + o,
                    "outDay": l,
                    "outMonth": i + " " + u,
                    "adults": a
                };
            return d
        } catch (e) {
            return r.record(e, "Unable to create calendar date args object"), null
        }
    }

    function y() {
        ta.page && ta.page.processNewTravelInfo && ta.page.processNewTravelInfo()
    }

    function C(e, t, a) {
        return t && !i() ? void(e && "function" == typeof e && e()) : (s({
            url: "/UpdateSessionDatesAjax",
            data: d(),
            method: "post",
            async: a !== !0,
            success: function() {
                "function" == typeof e && e(), n.fireEvent("hotels.sessionDatesUpdated")
            }
        }), !0)
    }

    function M(e) {
        ta.page.gatherDatesNear(e), !window.event || window.event.target !== e && window.event.currentTarget !== e || t.stopEvent(window.event)
    }

    function _(e) {
        if (e) {
            e = JSON.decode(e);
            var t = e.url;
            o.retrieve("is_from_sdprospect") && t.contains("Hotels") && (t = t.replace("Hotels", "SmartDeals")), window.location = t
        } else window.location = "/Hotels"
    }

    function m() {
        var e, t, a, r = null;
        if (ta.page.hasDates("CHECKIN")) {
            e = document.querySelectorAll(".meta_date_field.first .date_picker.date"), a = null;
            for (var n = 0; n < e.length; ++n) t = e[n].firstChild, t && 3 == t.nodeType && (r = r || v("classic"), a = a || E(ta.page.getDates("CHECKIN")[0], r), t.nodeValue = a)
        }
        if (ta.page.hasDates("CHECKOUT")) {
            e = document.querySelectorAll(".meta_date_field .out_date .date_picker.date"), a = null;
            for (var n = 0; n < e.length; ++n) t = e[n].firstChild, t && 3 == t.nodeType && (r = r || v("classic"), a = a || E(ta.page.getDates("CHECKOUT")[0], r), t.nodeValue = a)
        }
    }

    function A(e, t, a) {
        var r = "date.picker.calendarflyout",
            n = o.retrieve(r);
        n || (n = []);
        var s = {};
        s.elmt = e, s.overlay = t, s.overlaySrc = a, n.push(s), o.store(r, n), o.remove("date.picker.calendarflyout.allCleared")
    }

    function w() {
        var e = "date.picker.calendarflyout",
            t = o.retrieve(e);
        t && (t.forEach(function(e) {
            var t = e.elmt,
                a = e.overlay,
                r = e.overlaySrc;
            t && a && r && (t.removeEventListener("mouseenter", a.showWithDelay), t.removeEventListener("mouseleave", a.hideWithDelay), t.removeEventListener("mouseenter", a.show), t.removeEventListener("mouseleave", a.hide), t.removeEventListener("click", a._pin), t.appendChild(r))
        }), o.store("date.picker.calendarflyout.allCleared", !0))
    }

    function S() {
        t.select(".roomsButton .grp-rooms-value").forEach(function(e) {
            e.innerHTML = ta.page.guests.getRooms()
        }), t.select(".guestsButton .grp-guests-value").forEach(function(e) {
            e.innerHTML = ta.page.guests.getAdults()
        }), ta.widgets.calendar.syncAllDatePickers()
    }

    function R() {}
    if (ta.widgets && ta.widgets.calendar && ta.widgets.calendar.hasPageDates) return ta.widgets.calendar;
    var P = {
        hasPageDates: i,
        hasRoundTripDates: u,
        datesExist: i,
        datesInRange: D,
        getCheckRatesData: d,
        getDateArgsObject: T,
        getGuestsRoomsPickerData: c,
        updateGuestsRoomsPickerDataFromCookie: R,
        updateGuestsRoomsPickerUI: R,
        getPageInDate: g,
        getPageOutDate: p,
        getPageAdultsCount: f,
        getDatePickerFormat: v,
        getErrorDates: h,
        dateToString: E,
        checkDatesMakeHacCallHR: y,
        justUpdateSessionDates: C,
        setErrorStyling: M,
        redirectToHotelOverview: _,
        updateLegacyDatePickers: m,
        trackCalendarEvent: R,
        closeCalendarWidgets: R,
        handleNewDates: R,
        syncAllDatePickers: R,
        trackCRButtonClick: R,
        clearCalendarFlyouts: w,
        trackCalendarFlyout: A,
        removeMetaCalendarFromSync: R,
        updateAllGuestsRoomsButtons: S,
        isShim: !0
    };
    return a.exportTo(P, "ta.widgets.calendar"), P
});
define("mixins/flight-traveler-info/FlightTravelerInfo", ["vanillajs"], function(e) {
    "use strict";

    function t(e) {
        this.travelerInfo = new s(e)
    }
    var i = "travelerInfoChanged",
        s = function(e) {
            e = e || {};
            var t = {
                adults: e.adults,
                seniors: e.seniors,
                childAges: e.childAges,
                classOfService: e.classOfService
            };
            this.getAdults = function() {
                return t.adults
            }, this.getSeniors = function() {
                return t.seniors
            }, this.getChildAges = function() {
                return t.childAges
            }, this.getNumChildren = function() {
                return t.childAges.length
            }, this.getTotalTravelers = function() {
                return this.getAdults() + this.getSeniors() + this.getNumChildren()
            }, this.getClassOfService = function() {
                return t.classOfService
            }, this.setAdults = function(e) {
                e !== t.adults && (t.adults = e, ta.page.emit(i, t))
            }, this.addAdults = function(e) {
                0 !== e && (t.adults += e, ta.page.emit(i, t))
            }, this.setSeniors = function(e) {
                e !== t.seniors && (t.seniors = e, ta.page.emit(i, t))
            }, this.addSeniors = function(e) {
                0 !== e && (t.seniors += e, ta.page.emit(i, t))
            }, this.addChildAge = function(e) {
                t.childAges.push(e), ta.page.emit(i, t)
            }, this.removeLastChild = function() {
                t.childAges.pop(), ta.page.emit(i, t)
            }, this.changeChildAge = function(e, s) {
                s !== t.childAges[e] && (t.childAges[e] = s, ta.page.emit(i, t))
            }, this.setClassOfService = function(e) {
                "number" == typeof e && e !== this.getClassOfService() && (t.classOfService = e, ta.page.emit(i, t))
            }, this.setData = function(e) {
                t.adults = e.adults, t.seniors = e.seniors, t.childAges = e.childAges.slice(), t.classOfService = e.classOfService, ta.page.emit(i, t)
            }
        };
    return t
});
define("mixins/page-dates/MultiCity", ["vanillajs", "ta", "ta/util/SessionStorage", "mixins/page-dates/Utils"], function(t, e, a, i) {
    function n() {
        this.multiCityDates = new r
    }
    var s = "ONEWAYFLIGHT",
        o = ["LEG_1", "LEG_2", "LEG_3"],
        r = function() {
            var t = a.canUseSessionStore();
            t && o.forEach(function(t) {
                var a = i.fromString(window.sessionStorage.getItem("multiCity-" + t + "-date"));
                a && !isNaN(a.getTime()) && e.page.setDates(t, [a])
            });
            var n = function(e, a, n) {
                n[0] && t && o.indexOf(a) >= 0 && window.sessionStorage.setItem("multiCity-" + a + "-date", i.dateToIso(n[0]))
            };
            e.page.on("dateSelected", n), this.clearInvalidDates = function() {
                var t = e.page.getDates(s)[0];
                o.forEach(function(a) {
                    var i = e.page.getDates(a)[0];
                    i && (!t || i >= t ? t = i : e.page.pushDates(null, a, [null]))
                })
            }
        };
    return n
});
define("servlets/homerebranded", ["ta", "vanillajs", "mixins/mixin", "mixins/page-dates/DateEvents", "mixins/page-dates/Responsive", "ta/Core/TA.Event", "ta/popups/PopUtil", "ta/util/Element", "ta/Core/TA.Store", "ta/util/Error", "mixins/page-guests/Guests", "mixins/page-guests/GuestsSelector", "ta/util/LegacyDateShim", "mixins/page-dates/DateTypeStore", "utils/ajax", "common/pixels-loader", "mixins/flight-traveler-info/FlightTravelerInfo", "mixins/page-dates/MultiCity", "mixins/Events", "utils/urlDecoder"], function(e, t, n, a, r, i, s, o, c, l, u, f, d, g, h, p, m, v, _, S) {
    "use strict";

    function b(e) {
        e && Object.keys(e).forEach(function(t) {
            c.store(t, e[t])
        })
    }

    function D(e) {
        if (e) {
            var t = new Date;
            t.setDate(t.getDate() + 7);
            var n = JSON.stringify({
                partnerReference: e.partnerReference,
                referrerId: e.partnerReferrerId,
                expires: t
            });
            localStorage.setItem("VacationRentalPartnerReferrerParams", n)
        }
    }

    function w(t) {
        R || (n(this, a), _.extend("travelerInfoChanged"), n(this, new r(t.pageDates, t.calendar)), n(this, new u(t.pageGuests)), n(this, new f(this.guests)), n(this, new m(t.travelerInfo)), n(this, new v), C(), p.init(t.remarketingOptions), R = !0), b(t.itemsToStore), D(t.partnerReferrerParams);
        var i = this.onDatesSelected;
        this.onDatesSelected = function(e, t, n) {
            i(e, t, n), x(g.isChildDateType(t) ? g.getParents(t) : [t], function() {
                c.store("datesChanged", !0)
            })
        };
        var s = this.clearDates;
        return this.clearDates = function(t) {
            s(t), this.onDatesSelected(null, t, e.page.getDates(t)), A()
        }, this.on("travelerInfoChanged", function(e) {
            y(this.travelerInfo, e)
        }), this.processNewTravelInfo = function() {
            k()
        }, P = {
            rooms: new this.GuestsSelector("rooms", k.bind({}, !0)),
            adults: new this.GuestsSelector("adults", k.bind({}, !0))
        }, j(), this
    }

    function x(t, a) {
        var r = t.map(e.page.datesToQueryJson).reduce(function(e, t) {
            return n(e, t)
        }, {});
        0 !== Object.keys(r).length && h({
            url: "/UpdateSessionDatesAjax",
            data: r,
            method: "post",
            async: !0,
            success: function() {
                "function" == typeof a && a()
            }
        })
    }

    function A() {
        h({
            url: "/UpdateSessionDatesAjax",
            data: {
                clear: !0
            },
            method: "post",
            async: !0
        })
    }

    function y(e, t) {
        for (var n = e.getAdults() + "_" + e.getSeniors() + "_" + e.getClassOfService(), a = 0; a < e.getNumChildren(); a++) {
            var r = e.getChildAges()[a];
            r >= 0 && (n += "_" + r)
        }
        h({
            url: "/UpdateSessionDatesAjax",
            data: {
                travelerinfo: n
            },
            method: "post",
            async: !1,
            success: function() {
                "function" == typeof t && t()
            }
        })
    }

    function k(t) {
        t && (c.store("hotels.datesChanged", !0), c.store("meta.isFromDatesChange", !0)), e.page.emit("newPageTravelInfo")
    }

    function C() {
        try {
            var e = [],
                t = ["#taplc_brand_messaging_0", ".shelf_container", "#taplc_attractions_near_you_link_0", "#taplc_global_footer_0"];
            t.forEach(function(t) {
                for (var n = document.querySelectorAll(t), a = 0; a < n.length; a++) n[a].className.indexOf("featured_destinations") == -1 && e.push(n[a])
            }), e.forEach(function(e) {
                var t = T(e),
                    n = I(e);
                if (t && n) {
                    var a = ["Home", "shelf_in_view", t],
                        r = E(e);
                    if (r && a.push(r), e.getAttribute && e.getAttribute("data-brand-shelf")) {
                        var i = window.location.pathname,
                            s = i.length <= 1 ? "servletname_Home" : "servletname_" + i.substring(1);
                        o.trackWhenScrolledIntoView(n, ["pcb_campaign_trending_view", "view", s])
                    }
                    o.trackWhenScrolledIntoView(n, a)
                }
            })
        } catch (e) {
            l.record(e, "homepage _setupScrollTracking error")
        }
    }

    function I(e) {
        var t = null;
        if (e.id) t = "#" + e.id;
        else {
            var n = "." + e.className.split(/ +/).join("."),
                a = document.querySelectorAll(n);
            1 === a.length ? t = n : l.record(null, "ambiguous selector for scroll tracking: " + n)
        }
        return t
    }

    function T(e) {
        var t = e.getAttribute("data-rownumber");
        return t ? "" + t : e.getAttribute("data-placement-name")
    }

    function E(e) {
        return e.getAttribute("data-shelf-id")
    }

    function j() {
        e.on("shelf_item_click_event", function(e, t) {
            O(e, t), location.href = S.getUrl(t)
        }), e.on("track_shelf_item_click_event", function(e, t) {
            O(e, t)
        })
    }

    function O(t, n) {
        var a = n.getAttribute("data-tpp"),
            r = n.getAttribute("data-tpact"),
            i = n.getAttribute("data-tpatt"),
            s = n.getAttribute("data-tpid");
        e.trackEventOnPage(a, r, i, s)
    }
    var P, R = !1;
    return {
        init: w
    }
});
define("overlays/styles/popover", ["api-mod", "lib/jquery-amd", "overlays/utils"], function(t, e, a) {
    "use strict";

    function i(e, i, n, r) {
        this.container = t.createElement(r, {
            "class": "ui_overlay ui_popover arrow_" + a.getArrowDir(e, this.sourceElement, this.domParent) + " " + i,
            "style": n
        }), this.arrow = t.createElement("div", {
            "class": "arrow"
        }), this.container.appendChild(this.arrow), this.header = t.createElement("div", {
            "class": "header_text"
        }), this.container.appendChild(this.header), this.inner = t.createElement("div", {
            "class": "body_text"
        }), this.container.appendChild(this.inner), this.contentElement = this.inner, this.close = t.createElement("div", {
            "class": "ui_close_x"
        }), this.container.appendChild(this.close)
    }
    var n = function(n, r, s, o, h, d) {
        n = e(n), s = s || n.attr("data-popover") || "", o = o || n.attr("data-header") || "", h = h || n.attr("data-content") || "";
        var c = n.attr("data-style") || "",
            l = n.attr("data-header-element"),
            p = n.attr("data-header-copy");
        return function() {
            i.call(this, r, s, c, d || "span"), this.updateContent(h), o && a.injectContent(this.header, n, o, l, p), t.addEvent(this.close, "click", t.bind(function() {
                this.hide.apply(this, arguments)
            }, this, "close-button"))
        }
    };
    return n
});
define("overlays/options/closeOnTargetChildClick", ["vanillajs", "api-mod"], function(i, n) {
    "use strict";
    return function(i) {
        return function() {
            var t, c = n.bind(function() {
                this.hide("target-child-click")
            }, this);
            this.on("show", function() {
                t = n.select(i), t && n.addEvent(t, "click", c)
            }).on("hide", function() {
                t && n.removeEvent(t, "click", c)
            })
        }
    }
});
define("utils/AjaxData", ["ta", "mixins/Events", "lib/jquery-amd"], function(t, e, n) {
    "use strict";

    function i() {}

    function a(t) {
        function a() {
            return null !== s || null !== l
        }

        function r() {
            var t = a(),
                e = d,
                n = l;
            if (d = null, s = null, l = null, null !== n) try {
                n.abort()
            } catch (t) {}
            return null !== e && clearTimeout(e), t
        }

        function o() {
            var t = s;
            if (s = null, t) {
                var e;
                t.success = function(n) {
                    l == e && (l = null, v && (y = n), f.data = n, f.error = void 0, f.dataVersion = ++p, h(f, e, t.data), u.emit("update"))
                }, t.error = function(n, i, a) {
                    l == e && (l = null, f.data = y, f.dataVersion = ++p, f.error = {
                        type: i,
                        error: a,
                        status: n.status,
                        responseText: n.responseText
                    }, h(f, e, t.data), u.emit("update"))
                }, e = c(t), l = e, u.emit("update")
            }
        }
        t = t || {};
        var u = new e("update"),
            d = null,
            s = null,
            l = null,
            f = this,
            p = 0,
            c = t.ajaxFunc || n.ajax,
            h = t.transformer || i,
            m = t.dataType || "html",
            v = !!t.holdData,
            y = void 0;
        this.dataVersion = 0, this.on = u.on.bind(u), this.off = u.off.bind(u), this.removeListener = u.removeListener.bind(u), this.isDone = function() {
            return !a()
        }, this.isBusy = function() {
            return a()
        }, this.clear = function() {
            var t = a() || "undefined" != typeof this.data || "undefined" != typeof this.error;
            r(), y = void 0, f.data = void 0, f.error = void 0, f.dataVersion = 0, h(f), t && u.emit("update")
        }, this.refresh = function(t, e, n, i, a) {
            r(), (!i || i < 0) && (i = 0), s = {
                type: t,
                url: e,
                data: n,
                dataType: m,
                xhrFields: {
                    withCredentials: !0
                }
            }, "undefined" != typeof a && (s.timeout = a), d = setTimeout(o, i), f.error = void 0, v || (f.data = void 0, h(f)), u.emit("update")
        }, this.postJson = function(t, e, n, i) {
            r(), n = n || 0, n < 0 && (n = 0), s = {
                beforeSend: function(t) {
                    t.setRequestHeader("Content-Type", "application/json")
                },
                type: "POST",
                url: t,
                contentType: "application/json",
                data: JSON.stringify(e),
                dataType: m,
                xhrFields: {
                    withCredentials: !0
                }
            }, "undefined" != typeof i && (s.timeout = i), d = setTimeout(o, n), f.error = void 0, v || (f.data = void 0, h(f)), u.emit("update")
        }
    }
    return a
});
define("overlays/ajaxUtil", ["vanillajs", "ta", "utils/object/shallow-copy", "utils/AjaxData", "mixins/Events", "overlays/loading-spinner", "utils/resourceLoader", "amdloaders"], function(e, t, a, r, n, i, o, s) {
    "use strict";

    function d(e, t) {
        var a, r = [];
        for (a in t) t[a] && r.push(a);
        r.sort();
        for (var n = e, i = n.indexOf("?") >= 0 ? "&" : "?", o = 0; o < r.length; ++o) a = r[o], n += i + encodeURIComponent(a) + "=" + encodeURIComponent(String(t[a])), i = "&";
        return n
    }

    function u() {
        for (var e = 0, t = {}, a = [], r = p.length - 1; r >= 0; --r) {
            var n = p[r],
                i = g[n];
            i && !t[n] && (i.hasClients() || ++e <= h) && (t[n] = i, a.push(n))
        }
        return a.reverse(), g = t, p = a, m = p.length + h, p
    }

    function l(e, i) {
        function d() {
            if (T) {
                T = !1, u();
                for (var e = p.length - 1; e >= 0; --e) {
                    var t = g[p[e]];
                    t.needsTravelInfo && t.invalidate()
                }
            }
        }

        function l() {
            u();
            for (var e = p.length - 1; e >= 0; --e) {
                var t = g[p[e]];
                t.invalidateOnPricingModeUpdate && t.invalidate()
            }
        }

        function c(e, a, r, n, i, s, u) {
            if (n = n && t.page && t.page.usingUnifiedDates) {
                T = !0;
                var c = t.page.datesToQueryString("STAYDATES");
                !c && i && (c = t.page.defaultDatesToQueryString("STAYDATES")), c && (a += "&" + c), y || (y = !0, t.page.on("dateSelected", d), t.page.on("guestsSelected", d), require(["trjs!common/Radio"], function(e) {
                    v || (v = e("web-component-pricingMode"), v.on("update", function() {
                        l()
                    }))
                }))
            }
            if (s > 1) {
                if (s > 20) return;
                a += "&reqNum=" + s, u >= 0 || (u = 2e3)
            } else u = 0;
            r ? e.refresh("POST", a, r, u) : e.refresh("GET", a, void 0, u), o.load(A, function() {
                S = !0, h()
            })
        }

        function h() {
            if (b.isBusy() || !S) return L && clearTimeout(L), void(L = void 0);
            if (!b.data) return void(0 !== b.dataVersion ? E.error && E.error === b.error || (E.error = b.error || "no content", L = L || setTimeout(m, 0)) : 0 !== j && (V = q, j = b.dataVersion, U = [], P.hasListeners("update") && (L = L || setTimeout(m, 0))));
            if (j !== b.dataVersion) {
                try {
                    var e = document.createElement("div");
                    e.innerHTML = b.data;
                    var t = x,
                        a = document.head || document.getElementsByTagName("head")[0];
                    U = [], i.noScript || Array.prototype.forEach.call(e.querySelectorAll("script"), function(e) {
                        if (t) {
                            var r = document.createElement("script");
                            r.setAttribute("type", "text/javascript"), e.src && (r.src = e.src), e.text && (r.text = e.text), r.setAttribute("data-rup", e.getAttribute("data-rup")), a.appendChild(r), e.src || a.removeChild(r)
                        }
                        e.parentNode.removeChild(e)
                    }), Array.prototype.forEach.call(e.querySelectorAll("style"), function(e) {
                        t ? a.appendChild(e) : e.parentNode.removeChild(e)
                    }), Array.prototype.forEach.call(e.querySelectorAll("[data-targetEvent]"), function(e) {
                        U.push(e), e.parentNode.removeChild(e)
                    }), t && (x = !1, f[i.inlineResourceId] = !0), V = e.innerHTML, j = b.dataVersion, b.data = void 0
                } catch (e) {
                    E.error = "invalid HTML"
                }
                L = L || setTimeout(m, 0)
            }
        }

        function m() {
            var t, a = !P.hasListeners("update");
            for (L = void 0, E.data = V, E.dataVersion = j, P.emit("update"); t = U.shift();) {
                var r = t.getAttribute("data-targetEvent");
                if ("repoll-required" === r) {
                    if (a) return U = [], E.data = V = q, void(E.dataVersion = j = 0);
                    ++M > 1 || (M = 2);
                    var n = Number(t.getAttribute("data-delay"));
                    c(b, e, i.reqParams, I, D, M, n)
                } else P.emit("data-targetEvent", r, t)
            }
        }
        var A, S, E = this,
            b = new r({
                dataType: "html",
                ajaxFunc: i.ajaxFunc
            }),
            P = new n("update", "data-targetEvent"),
            q = i.loadingContent || C,
            x = !1,
            I = !!i.sendTravelInfo,
            R = !!i.invalidateOnPricingModeUpdate,
            D = I && i.sendDefaultDates,
            L = void 0,
            V = q,
            j = b.dataVersion,
            U = [],
            M = 0;
        this.error = void 0, this.loadingData = q, this.data = V, this.dataVersion = j, this.needsTravelInfo = I, this.invalidateOnPricingModeUpdate = R, this.on = P.on.bind(P), this.off = P.off.bind(P), this.removeListener = P.removeListener.bind(P), this.init = function() {
            b.on("update", h.bind(this))
        }, this.isBusy = function() {
            return b.isBusy() || L
        }, this.isDone = function() {
            return !b.isBusy() && !L
        }, this.invalidate = function() {
            b.clear(), M = 0, this.hasClients() ? c(b, e, i.reqParams, I, D, 0, 0) : (E.data = V = q, E.dataVersion = j = 0)
        }, this.hasClients = function() {
            return P.hasListeners("update")
        }, this.load = function() {
            if (!b.isBusy()) {
                if (0 !== b.dataVersion) return void setTimeout(function() {
                    P.emit("update")
                }, 1);
                var t = i.reqParams,
                    r = !i.isWidget || !i.inlineResourceId || !f[i.inlineResourceId];
                if (r) {
                    var n = s.getLoadedFilesParams();
                    x = !0, t = t ? a(t) : {}, t.haveJses = n.haveJses, t.haveCsses = n.haveCsses, i.isWidget && (t.Action = "install")
                }
                A = i.resources, M = 0, c(b, e, t, I, D, 0, 0)
            }
        }
    }

    function c(e, t) {
        var a = d(e, t.reqParams);
        a.length < 128 && (e = a, t.reqParams = void 0);
        var r = g[a];
        return r || (r = new l(e, t), r.init(), t.noCache || (g[a] = r)), t.noCache || (p.push(a), p.length > m && u()), r
    }
    var v, f = {},
        h = 10,
        p = [],
        g = {},
        m = h,
        y = !1,
        T = !1,
        C = i();
    return {
        loadData: function(e, t) {
            !t && (t = {});
            var a = c(e, t);
            return a.load(), a
        },
        loadOverlayWidget: function(e, t, r) {
            var n = "/OverlayWidgetAjax?Mode=" + e;
            r ? n += "&metaReferer=" + encodeURIComponent(r) : "string" == typeof crPageServlet && (n += "&metaReferer=" + encodeURIComponent(crPageServlet)), t = t ? a(t) : {}, t.inlineResourceId = e, t.isWidget = !0;
            var i = c(n, t);
            return i.load(), i
        },
        cleanCache: u
    }
});
define("overlays/options/ajax", ["vanillajs", "overlays/ajaxUtil"], function(t, e) {
    "use strict";

    function i(t) {
        return t && t.match(/^((https?:)?(\/\/)?([\da-z\.\-\u00a1-\uffff]+)\.([a-z\.\u00a1-\uffff]{2,6}))?(\/[\w]+)*(\?[\/\w\.+%=\-#&\/!\u00a1-\uffff]+)?$/)
    }

    function n(t, n) {
        function a() {
            if (this.sourceElement && (t = t || this.sourceElement.getAttribute("data-url"), void 0 === n.noCache && (n.noCache = this.sourceElement.getAttribute("data-ajaxNoCache")), n.resources || (n.resources = this.sourceElement.getAttribute("data-resources"), n.resources && (n.resources = n.resources.replace(/[\[\]]/g, "").split(/[ ,]+/))), n.invalidateOnPricingModeUpdate || (n.invalidateOnPricingModeUpdate = this.sourceElement.getAttribute("data-invalidateOnPricingModeUpdate"))), t) {
                var a, s, r = 0,
                    o = function() {
                        a.dataVersion !== r && (this.contentElement.innerHTML = a.data, this.emit("contentsUpdated"), r = a.dataVersion, require.defined("ta/prwidgets") && require("ta/prwidgets").initWidgets(this.contentElement)), this.reposition(), setTimeout(this.reposition.bind(this), 1), this.emit("contentLoaded", a.error)
                    }.bind(this),
                    d = function(i) {
                        return s == t ? (this.reposition(), void this.emit("contentsUnchanged")) : (n.skipInvalidate || a && a.invalidate(), s = t, a = e.loadData(t, n), i || (this.contentElement.innerHTML = a.data), this.emit("contentsUpdated"), this.reposition(), r = a.dataVersion, require.defined("ta/prwidgets") && require("ta/prwidgets").initWidgets(this.contentElement), a.on("update", o), void a.on("data-targetEvent", u))
                    }.bind(this),
                    u = this.emit.bind(this, "data-targetEvent");
                this.on("show", d), this.on("hide", function() {
                    a && (a.off("update", o), a.off("data-targetEvent", u), a = void 0)
                });
                var h = this.updateContent;
                this.updateContent = function(e, n) {
                    return e ? i(e) ? (t = e, this.isOpen() && d(n), this) : (t = "", h.apply(this, arguments)) : (t = "", e = this.sourceElement.getAttribute("data-url"), e ? this.updateContent(e) : h.apply(this, arguments))
                }
            }
        }
        return n || (n = {}), a
    }
    return n
});
define("overlays/options/closeOnWindowshadeClick", ["vanillajs", "api-mod"], function(i, n) {
    "use strict";
    return function() {
        var i = this;
        n.addEvent(this.shade, "click", function() {
            i.hide("windowshade")
        })
    }
});
define("overlays/options/zIndex", ["vanillajs", "api-mod"], function(t, i) {
    "use strict";
    var n = function() {
        function t() {
            this.sourceElement && this.container && (this.container.style.zIndex = this.sourceElement.getAttribute("data-zIndex"), this.emit("positionDirty"))
        }
        var n = i.bind(t, this);
        this.on("show", n)
    };
    return n
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "candy_bar_links", "handlers", ["handlers"]);
    n(["placement", "lib/jquery-amd", "api-mod", "ta/Core/TA.Record", "common/Radio", "overlays/Overlay", "overlays/position", "overlays/styles/popover", "overlays/styles/modal", "overlays/styles/windowshade", "overlays/options/closeOnDocClick", "overlays/options/closeOnSourceClick", "overlays/options/closeOnTargetChildClick", "overlays/options/centerArrowOnSrcElement", "overlays/options/ajax", "overlays/options/repositionOnEvent", "overlays/options/closeOnWindowshadeClick", "overlays/options/zIndex", "utils/responsive", "utils/throttle"], function(e, n, i, t, o, l, a, r, s, c, d, u, h, k, g, p, v, y, m, f) {
        "use strict";

        function b() {
            C(), window.pageYOffset > z ? _.trigger("hide-on-header", !1) : _.trigger("hide-on-header", !0)
        }

        function w() {
            _.on("hide-on-header", function(e) {
                var i = n(O).hasClass("is-hidden-tablet") || n(O).hasClass("is-hidden");
                i === !e && (n(O).toggleClass("is-hidden-tablet", e), n(O).toggleClass("is-hidden", e), _.trigger("border-top", !e), e || t.trackEventOnPage("sticky_header_shown"))
            })
        }

        function C() {
            if (O) {
                var e = document.body.getBoundingClientRect(),
                    n = O.getBoundingClientRect();
                z = n.top - e.top + P
            }
        }

        function L(e, i, t, o) {
            n(i).parent().parent().hasClass("quick_links") || (i = n(".quick-link-more-horizontal", U)), q.trigger("hide-overlays");
            var l = {
                geoUrlTemplate: t,
                latLongUrlTemplate: o,
                buildGeoUrl: function(e) {
                    return this.geoUrlTemplate && this.geoUrlTemplate.includes("${geoId}") ? encodeURI(this.geoUrlTemplate.replace(/\$\{geoId\}/, encodeURIComponent(e))) : null
                },
                canBuildLatLongUrl: function() {
                    return this.latLongUrlTemplate && this.latLongUrlTemplate.includes("${latitude}") && this.latLongUrlTemplate.includes("${longitude}")
                },
                buildLatLongUrl: function(e, n) {
                    return this.canBuildLatLongUrl() ? encodeURI(this.latLongUrlTemplate.replace(/\$\{latitude\}/, encodeURIComponent(e)).replace(/\$\{longitude\}/, encodeURIComponent(n))) : null
                }
            };
            return T.trigger("navigate-with-quick-link", e, l, i), !1
        }
        var U = n("#" + e.id),
            O = n(".quick_links", U)[0],
            q = o("global-nav"),
            T = o("tripsearch-geo-pill"),
            _ = o("candy-bar-quick-links"),
            I = null,
            R = n(".quick-link-more-horizontal", U),
            E = n(".candy-bar-links", U),
            $ = n(".quick-link-cars", U),
            B = n(".quick-link-HelpDesk", U),
            z = 0,
            P = O ? n(O).height() : 0;
        if (q.on("hide-overlays", function() {
                I && I.hide("replace-el")
            }), R.on("click", function() {
                var i = e.params.geopillOnHome;
                if (I && n(".candy-bar-flyout").is(":visible")) return void I.hide("new-overlay");
                var o = !1,
                    s = "above";
                (i || n(window).scrollTop() > U.height()) && (o = !0, s = "below");
                var g = new l(this, [r(this, s, "candy-bar-flyout candy-bar-menu no_x", "", E[0]), o ? a.below([0, -55]) : a.above(), m.mobile() ? c("dark" + (i ? " second-layer" : "")) : function() {}, m.mobile() ? v : d, u, h(B), k(R), p(window, "resize"), i ? y : function() {}]);
                g.show(), I = g, t.trackEventOnPage("QuickLinksMore", "open", "click")
            }), $ && $.on("click", function() {
                var e = n(this).data("trackingLabel");
                t.trackEventOnPage("QuickLinks", "click", e)
            }), B.on("click", function() {
                I && I.hide("new-overlay");
                var n = this;
                e.require(["trcss!src/build/required/help_center_overlay"], function() {
                    var e = new l(n, [s(this, "", "help_center"), a.cssCentered(), d, g("/uvpages/helpCenterOverlay.html")]);
                    e.show(), I = e
                })
            }), U.on("click", "a.quick-link[data-tracking-label]", function() {
                var e = n(this).data("trackingLabel"),
                    i = n(this).data("trackImmediately");
                /\/#\s*$/.test(this.href) || "_blank" === this.target || i ? t.trackEventOnPage("QuickLinks", "click", e) : t.setEvtCookie("QuickLinks", "click", e, 0, this.href)
            }), O.dataset.masterCandyBarLinks) {
            C();
            var Q = f(b, 100);
            n(window).scroll(function() {
                Q()
            })
        } else w();
        return {
            linkClicked: L
        }
    })
});
require(["ta/prwidgets"], function(e) {
    var t = e.define.bind(e, "common_form_submit", "handlers", ["handlers"]);
    t(["widget", "lib/jquery-amd", "page-model", "common/Radio", "ta/Core/TA.Store", "common/trackingStreams"], function(e, t, a, r, i, o) {
        "use strict";

        function n(e) {
            if (!k.requestAny("is-valid", !1)) {
                var a = k.request("url:require");
                a ? (_ ? k.trigger("loading", !0) : k.trigger("disabled", !0), t.when(a).done(function(t) {
                    t ? (t = s(t), require(["trjs!ta/Core/TA.Record"], function(a) {
                        a.setEvtCookie("tripsearch", m ? m : "submit", f(t, e), 0, t), window.location = t.replace("/Tourism", e)
                    })) : (k.trigger("loading", !1), o.trackEvent("tripsearch", "submit_error", e.substr(1)))
                })) : o.trackEvent("tripsearch", "submit_error", e.substr(1))
            }
        }

        function s(e) {
            var t = window.location.pathname,
                r = {
                    hotels: "Hotels" === a.session.pageServlet,
                    restaurants: "Restaurants" === a.session.pageServlet
                };
            if (r.hotels || r.restaurants) {
                var i = new RegExp("-g[0-9]+-");
                if (!t.match(i)) {
                    var o = new RegExp("-([a-z]+)([0-9]+)-"),
                        n = o.exec(t);
                    if (n) {
                        var s = n[1],
                            c = n[2];
                        if (s && c) {
                            var l = e.indexOf("?") > -1 ? "&" : "?",
                                u = e + l;
                            return "26" === c && "zff" === s && r.hotels && (u += "c=3&"), u + s + "=" + c
                        }
                    }
                }
            }
            return e
        }

        function c(a) {
            if (a && "click" == a.type) {
                var r = "formsubmit";
                t(e.element).parents(".persistent_trip_search_fixed").length && (r += "_persistent"), o.trackEvent(r, "click", "update")
            }
        }

        function l(e, a) {
            !1 !== k.request("is-valid") && (o.trackEvent("GuestSelector-tripsearch", "update_results_click", w, "1", !1), c(e), ta.servlet && ta.servlet.HACSearch ? ta.servlet.HACSearch.doMetaDateSearch(i.retrieve("page.location"), a) : ta.page.processNewTravelInfo(), t(a).addClass("disabled"), t(".ui_overlay .ui_close_x").click())
        }

        function u(e, t) {
            !1 !== k.request("is-valid") && (o.trackEvent("RGP_global_update", "Click"), ta.page && ta.page.processNewTravelInfo && ta.page.processNewTravelInfo())
        }

        function p(e, a) {
            !1 !== k.request("is-valid") && (ta.page && ta.page.onDatesSelected(), t(".ui_overlay .ui_close_x").click())
        }

        function g(e, t, a) {
            ta && ta.page && ta.page.processNewTravelInfo && "function" == typeof ta.page.processNewTravelInfo && ta.page.processNewTravelInfo(e, t, a)
        }

        function v(e, a) {
            var r = !1,
                i = t(".ui_overlay.rooms_guests_children .age-picker.error").is(":visible");
            i && (r = !0), t(".ui_overlay .ui_close_x").click(), ta && ta.page && ta.page.processNewTravelInfo && "function" == typeof ta.page.processNewTravelInfo && ta.page.processNewTravelInfo(e, a)
        }

        function d(e, a) {
            t(".ui_overlay .ui_close_x").click(), ta && ta.page && ta.page.processNewTravelInfo && "function" == typeof ta.page.processNewTravelInfo && (o.trackEvent("AttractionProductDetail", "click_check_availability_cta", "tourplanner"), ta.page.processNewTravelInfo(e, a))
        }

        function f(e, t) {
            var a = new RegExp("/(.*?_Review)-g"),
                r = new RegExp("/(.*?Near)-g"),
                i = a.exec(e);
            if (i) return i[1];
            var o = r.exec(e);
            return o ? o[1] : t.substr(1)
        }
        var _ = !0,
            m = "",
            k = r("search"),
            w = "",
            h = i.retrieve("tracking.impression.key"),
            b = i.retrieve("page.location");
        return h && (w = "IK:" + h), b && (w += "/L:" + b), k.on("loading", function(a) {
            t(e.element).toggleClass("loading", a), t(e.element).closest(".trip_search.rounded_lockup").toggleClass("loading", a)
        }).on("disabled", function(e) {
            t("button").toggleClass("disabled", e)
        }).on("submit", function(a, r) {
            _ = a, m = r, t("button", e.element).click()
        }), {
            run: n,
            updateHotels: l,
            updateResponsiveListPage: u,
            updateSemPage: p,
            updateAttractionProducts: v,
            apdAvailabilityCheck: d,
            updateAttractions: g
        }
    })
});
require(["ta/prwidgets"], function(n) {
    var e = n.define.bind(n, "common_progress_bar", "handlers", ["handlers"]);
    e(["widget", "lib/jquery-amd", "ta/page", "ta/Core/TA.Event"], function(n, e, o, a) {
        "use strict";

        function i() {
            t.removeClass("loading"), setTimeout(function() {
                t.addClass("loading"), t.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", r)
            }, 0)
        }

        function r() {
            t.removeClass("loading")
        }
        var t = e(".progress_bar", n.element);
        return o.on("newPageTravelInfo", i), a.on("page-polling-complete", r), a.on("page-repoll-failed", r), {}
    })
});
define("utils/ResponsiveEvents", ["mixins/Events", "utils/responsive", "utils/throttle", "vanillajs"], function(n, e, t) {
    "use strict";

    function r(n, e, t) {
        var r = n.filter(function(n) {
                return e.indexOf(n) < 0
            }),
            i = e.filter(function(e) {
                return n.indexOf(e) < 0
            });
        return t ? r.reverse().concat(i.reverse()) : r.concat(i)
    }

    function i() {
        var n = document.body.clientWidth;
        if (n != o) {
            var t = n > o,
                i = e.currentBreakpoints(),
                f = r(u, i, t);
            f.forEach(function(n) {
                var e = t ? "over-" : "under-";
                c.emit(e + n)
            }), f.length && c.emit("breakpoint", i[0]), u = i, o = n
        }
    }
    var o = document.documentElement.clientWidth,
        u = e.currentBreakpoints(),
        f = ["breakpoint"];
    e.breakpoints.forEach(function(n) {
        f.push("over-" + n, "under-" + n)
    });
    var c = n.create(f);
    return c.onOver = function(n, e) {
        c.on("over-" + n, e)
    }, c.onUnder = function(n, e) {
        c.on("under-" + n, e)
    }, c.offOver = function(n, e) {
        c.off("over-" + n, e)
    }, c.offUnder = function(n, e) {
        c.off("under-" + n, e)
    }, window.addEventListener("resize", t(i, 100)), c
});
define("hotels/HotelsRadioHelper", ["babel/babel-helpers", "utils/objutils"], function(e, l) {
    var s = {
            ELEMENT: "hotels_radio_channel_element"
        },
        t = {
            PERSISTENT_OFFSET: "persistent_header_height"
        },
        n = {
            channels: s,
            elementMessages: t
        };
    return l.deepFreezeCopy(n)
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "trip_search", "handlers", ["handlers"]);
    t(["placement", "api-mod", "lib/jquery-amd", "utils/throttle", "ta/Core/TA.Event", "ta/Core/TA.Store", "common/trackingStreams", "common/Radio", "utils/responsive", "utils/ResponsiveEvents", "hotels/HotelsRadioHelper"], function(e, t, s, i, n, o, r, a, d, l, c) {
        function f() {
            function e() {
                m.css("height", C.height() || ""), s(window).on("resize", l), C.addClass("fixed persistent_trip_search_fixed"), p(), t.fireEvent(window, "date_bar_undocked"), n.fireEvent("scrollingTabs_updateTabBar", {
                    "height": C.height()
                })
            }

            function o() {
                m.css("height", ""), s(window).off("resize", l), C.removeClass("fixed persistent_trip_search_fixed"), p(), t.fireEvent(window, "date_bar_docked")
            }
            if (C) {
                var r = s(window).scrollTop(),
                    a = t.find(".date_picker_modal", w),
                    l = i(function() {
                        m && C && C.hasClass("fixed") && m.css("height", C.height() || "")
                    }, 100);
                d.mobile() ? C.hasClass("fixed") && o() : !C.hasClass("fixed") && h(a, r) ? e() : C.hasClass("fixed") && _(a, r) && o()
            }
        }

        function h(e, t) {
            return e ? t > e.offset().top : t > m.offset().top
        }

        function _(e, t) {
            return e ? t <= e.offset().top : t <= m.offset().top
        }

        function u() {
            b.addClass("disabled")
        }

        function p() {
            g()
        }

        function g() {
            setTimeout(function() {
                if (w) {
                    var e = s(".change_dates_text", w);
                    e && (e.removeAttr("style"), e.addClass("autoResize"), t.fireEvent("refreshedDOMContent", w))
                }
            }, 1)
        }

        function v(e) {
            a("trip_search").trigger("clear_dates", e)
        }

        function E() {
            var i = s("#h"),
                n = s("#" + e.id);
            t.toggleClass(n, "hidden", !t.hasClass(i, "selected"))
        }
        var m = s("#" + e.id),
            w = s(".datepicker_box", m),
            T = s(".title", m),
            b = s("#UPDATE_RESULTS", m),
            C = s("#PERSISTENT_TRIP_SEARCH_BAR", m);
        return u(), n.on("hotels.sessionDatesUpdated", u), n.on("show_hide_tripsearch", E), m.find(".traveler_info_container").length && o.store("guests_rooms_picker.enabled", !0), s(window).one("date_bar_undocked", function() {
            r.trackEvent("persistentheader", "in_view")
        }), s(window).on("scroll", i(f, 100)), l.onUnder("tablet", f), l.onOver("tablet", f), n.queueForLoad(f), a(c.channels.ELEMENT).reply(c.elementMessages.PERSISTENT_OFFSET, function() {
            return C.length && !d.mobile() ? C.height() : 0
        }), T && o.store("hotels_left_filters_redesign_searching_text", T.outerHTML + '<div class="content">' + o.retrieve("hotels_left_filters_redesign_searching_text") + "</div>"), {
            clearDates: v
        }
    })
});
define("mixins/page-dates/picker-autoadvance-utils", [], function() {
    var e = {};
    return e.keepOverlayOpenOnSelection = function(e) {
        for (var n = document.querySelectorAll(".ui_overlay"), r = 0; r < n.length; r++) {
            var t = n[r].overlay,
                a = t && t.sourceElement;
            if (a === e) {
                t.dontHideOnSelection = !0;
                break
            }
        }
    }, e
});
define("utils/domUtils", ["vanillajs"], function() {
    var r = {};
    return r.querySelectorArray = function(r, e) {
        if (!r) return [];
        for (var n = [], t = r.querySelectorAll ? r.querySelectorAll(e) : [], i = t.length, o = 0; o < i; o++) n.push(t[o]);
        return n
    }, r.isOrContainsElement = function(r, e) {
        if (!r || !e) return !1;
        if (r === e) return !0;
        if (r.contains && r.contains(e)) return !0;
        for (; e;) {
            if (r === e) return !0;
            e = e.parentNode
        }
        return !1
    }, r.forceReflow = function(r) {
        r && r.offsetWidth
    }, r
});
define("mixins/page-dates/picker-autoadvance", ["mixins/page-dates/DateTypeStore", "mixins/page-dates/picker-autoadvance-utils", "utils/domUtils"], function(e, t, a) {
    "use strict";

    function i(i, r, s) {
        var o = ta.page;
        o && o.on("dateSelected", function d(l, u, p) {
            if (!a.isOrContainsElement(document.body, i)) return void o.off("dateSelected", d);
            if (l && a.isOrContainsElement(i, l)) {
                var c = e.getCorrespondingDateType(u);
                if (c) {
                    var f = e.isStartDateType(u),
                        g = !o.hasDates(c) || s && f && u !== n;
                    if (g) {
                        if (r && !o.hasDates(c) && Array.isArray(p)) {
                            var v = new Date(p[0].getFullYear(), p[0].getMonth(), p[0].getDate() + (f ? 1 : -1));
                            o.pushDates(null, c, [v])
                        }
                        var y = i.querySelector('[data-datetype="' + c + '"]');
                        y && (n = c, t.keepOverlayOpenOnSelection(l), setTimeout(o.gatherDates.bind(o, y)))
                    }
                }
            }
        })
    }
    var n = null;
    return {
        apply: i
    }
});
require(["ta/prwidgets"], function(e) {
    var t = e.define.bind(e, "datepickers_trip_search_dates", "handlers", ["handlers"]);
    t(["widget", "lib/jquery-amd", "api-mod", "ta/Core/TA.Event", "common/trackingStreams", "mixins/page-dates/picker-autoadvance", "common/Radio", "mixins/page-dates/default-dates"], function(e, t, r, a, n, i, o, c) {
        "use strict";

        function l(e, r) {
            var a, n = e.attr("data-dateFormat");
            try {
                a = r ? ta.i18n.formatDate(n, r) : e.attr("data-emptyText");
                var i = e.find(".picker-label.target");
                i.removeClass("ghost_text"), t(".picker-inner .picker-label", e).html(a)
            } catch (e) {
                require(["trjs!ta/util/Error"], function(t) {
                    t.record(e, "handlers dateSelected - parentElement.contains")
                })
            }
        }

        function d(t, a, n) {
            try {
                if (!r.inDocument(e.element)) return ta.page.removeListener("dateSelected", d), h = null, void(_ = null)
            } catch (e) {
                require(["trjs!ta/util/Error"], function(t) {
                    t.record(e, "handlers _onDateSelected - inDocument")
                })
            }
            try {
                "CHECKIN" === a ? l(h, n[0]) : "CHECKOUT" === a ? l(_, n[0]) : "STAYDATES" === a && (l(h, n[0]), l(_, n[1]))
            } catch (e) {
                require(["trjs!ta/util/Error"], function(t) {
                    t.record(e, "handlers _onDateSelected - dateType")
                })
            }
        }

        function s(e, r, a, n) {
            if (r) {
                e && "click" == e.type && (e.stopPropagation(), u(e));
                var i = t(".ui_overlay.rooms_guests_children");
                if (i) {
                    var o = t(".ui_overlay.rooms_guests_children .ui_close_x");
                    o.click()
                }
                return ta.page.gatherDates(r, null, a, !1, n), !1
            }
        }

        function u(e) {
            if (e) {
                var t = "datepicker";
                r.getParent(m, "persistent_trip_search_fixed") && (t += "_persistent");
                var a = "module";
                e.target && (e.target == h[0] || r.containsElement(h[0], e.target) ? a = "checkin" : e.target == _[0] || r.containsElement(_[0], e.target) ? a = "checkout" : e.target.className.indexOf("caret-down") >= 0 && (a = "caret")), n.trackEvent(t, "click", a)
            }
        }

        function p(e, t) {
            return s(e, t, k)
        }

        function g() {
            require(["ta/page"], function(t) {
                t.on("dateSelected", d), ta.store && ta.store("interact_through_progress_bar", !0), i.apply(e.element, k, k), c.apply(e.element)
            })
        }
        var m = e.element,
            f = t(".ui_picker .unified-picker", m),
            h = t("[data-datetype=CHECKIN]", m),
            _ = t("[data-datetype=CHECKOUT]", m),
            k = !!m.getAttribute("data-hotels-improvements"),
            v = !!m.getAttribute("data-early-autopop");
        return f.on("focus", function(e) {
            s(e, this, !k)
        }), o("search").on("loading", function(r) {
            t(e.element).toggleClass("loading", r)
        }).on("popDatePicker", function() {
            s(null, h[0], !1)
        }), v ? g() : a.queueForLoad(g, "datepicker widget handlers"), t(m).on("click", function(e) {
            return e.target === _[0] || r.containsElement(_[0], e.target) ? s(e, _[0], k) : s(e, h[0], k)
        }), {
            openCalendar: p
        }
    })
});
define("hotels/ChildAgesSerialization", ["vanillajs"], function() {
    function n(n) {
        return null == n || 0 === n.length ? [] : n.split(t).map(function(n) {
            return parseInt(n, 10)
        }).filter(function(n) {
            return !isNaN(n)
        })
    }

    function e(n, e) {
        if (null == e || 0 === e.length) return "";
        for (var t = Math.floor(e.length / n), l = e.length - t * n, a = [], u = 0, o = 0; o < n; ++o) {
            var f = 0;
            if (f = o < l ? t + 1 : t) {
                var h = Math.min(u + f, e.length),
                    s = e.slice(u, h);
                u = h, a.push(s.join(i))
            }
        }
        return a.join(r)
    }
    var i = ",",
        r = ":",
        t = new RegExp(i + "|" + r);
    return {
        deserialize: n,
        serialize: e
    }
});
define("hotels/RoomsGuests", ["hotels/ChildAgesSerialization", "api-mod", "ta/Core/TA.Store", "utils/objutils", "mixins/Events", "vanillajs"], function(e, n, t, i, r, s) {
    "use strict";

    function l(e) {
        for (var n = new Array(e), t = 0; t < e; ++t) n[t] = u;
        return n
    }
    var u = -1,
        o = 1,
        a = 2,
        h = 0,
        c = 4,
        d = 10,
        A = {
            ROOMS_CHANGED: "roomsChanged",
            ADULTS_CHANGED: "adultsChanged",
            CHILDREN_CHANGED: "childrenChanged"
        },
        g = {
            MIN_ROOMS: 1,
            MAX_ROOMS: 8,
            MIN_ADULTS: 1,
            MAX_ADULTS: 8 * c,
            MIN_CHILDREN: 0,
            MAX_CHILDREN: 20,
            MAX_CHILD_AGE: 17,
            MAX_ADULTS_PER_ROOM: 4,
            MAX_CHILDREN_PER_ROOM: 10
        },
        m = function(s) {
            function m(e, n, t) {
                return isNaN(e) || e % 1 !== 0 ? null : Math.min(t, Math.max(n, e))
            }

            function f(e) {
                return m(e, g.MIN_ROOMS, g.MAX_ROOMS)
            }

            function C(e) {
                return m(e, g.MIN_ADULTS, g.MAX_ADULTS)
            }

            function _(e) {
                return m(e, g.MIN_CHILDREN, g.MAX_CHILDREN)
            }

            function M(e) {
                return m(e, u, g.MAX_CHILD_AGE)
            }

            function N(e) {
                return e.map(function(e) {
                    return M(e)
                })
            }

            function E(t) {
                R = f(t.nRooms) || o, D = C(t.nAdults) || a;
                var i;
                t.childrenAges ? (H = N(n.isArray(t.childrenAges) ? t.childrenAges : e.deserialize(t.childrenAges)), i = _(H.length), H = H.slice(0, i)) : (i = _(t.nChildren) || h, H = l(i))
            }
            var R, D, H, S = s || {},
                b = S.roomChangedCallback || function() {},
                O = S.adultsChangedCallback || function() {},
                I = S.childrenChangedCallback || function() {},
                L = new(r.bind.apply(r, Object.keys(A).map(function(e) {
                    return A[e]
                })));
            if (S.initialValues) E(S.initialValues);
            else if (S.initialValuesHolder) {
                var v = {
                    nRooms: Number(S.initialValuesHolder.getAttribute("numRooms")),
                    nAdults: Number(S.initialValuesHolder.getAttribute("numAdults")),
                    nChildren: Number(S.initialValuesHolder.getAttribute("numChildren")),
                    childrenAges: S.initialValuesHolder.getAttribute("childrenAges")
                };
                E(v)
            } else E({});
            this.get = function() {
                return {
                    nAdults: D,
                    nRooms: R,
                    childrenAges: H
                }
            }, this.fromStore = function() {
                var n = t.retrieve("guests.rooms.object");
                this.update({
                    nRooms: n.rooms,
                    nAdults: n.guests,
                    childrenAges: e.deserialize(n.child_rm_ages)
                })
            }, this.hasStoreValues = function() {
                return t.has("guests.rooms.object")
            }, this.updateStore = function() {
                var n = t.retrieve("guests.rooms.object"),
                    i = H.map(function(e) {
                        return parseInt(e, 10)
                    }),
                    r = {
                        guests: D,
                        rooms: R,
                        child_rm_ages: e.serialize(R, i)
                    };
                return n && n.guests === r.guests && n.rooms === r.rooms && n.child_rm_ages === r.child_rm_ages ? null : (t.store("guests.rooms.object", r), r)
            }, this.clear = function() {
                return this.update({
                    nRooms: o,
                    nAdults: a,
                    nChildren: h
                })
            }, this.update = function(e) {
                var t, r, s, g, m, M, E = e.nRooms || R,
                    S = e.nAdults || D;
                if (n.isArray(e.childrenAges) ? (r = N(e.childrenAges), t = r.length) : "undefined" != typeof e.nChildren ? (t = e.nChildren, r = H.length < t ? l(t).map(function(e, n) {
                        return n < H.length ? H[n] : u
                    }) : H.slice(0, t)) : (t = H.length, r = H), R === E && D === S && H.length === t) return !i.shallowEquals(H, r) && (H = r, I(H), L.emit(A.CHILDREN_CHANGED, H), !0);
                var v = _(t) || h;
                if (E !== R) m = f(E) || o, s = m > S ? m : Math.min(E * c, S), g = Math.min(E * d, v);
                else {
                    var p = C(S) || a,
                        T = Math.ceil(p / c);
                    T = Math.max(T, E);
                    var G = Math.ceil(v / d);
                    m = Math.max(T, G), m = Math.min(m, p), g = Math.min(v, m * d), s = p
                }
                M = r.length > g ? r.slice(0, g) : r;
                var j = !1;
                return m !== R && (b(m), L.emit(A.ROOMS_CHANGED, m), j = !0), s !== D && (O(s), L.emit(A.ADULTS_CHANGED, s), j = !0), i.shallowEquals(H, M) || (I(M), L.emit(A.CHILDREN_CHANGED, M), j = !0), R = m, D = s, H = M, j
            }, this.equals = function(e) {
                return R === e.nRooms && D === e.nAdults && i.shallowEquals(H, e.childrenAges)
            }, this.updateChildAge = function(e, n) {
                return "string" == typeof n && (n = parseInt(n, 10)), n = M(n), e >= 0 && e < H.length && H[e] !== n && (H[e] = n, I(H), L.emit(A.CHILDREN_CHANGED, H), !0)
            }, this.cleanMissingChildrenAges = function() {
                var e = H.filter(function(e) {
                    return e >= 0
                });
                return H = e, I(e), L.emit(A.CHILDREN_CHANGED, e), e
            }, this.hasMissingChildrenAges = function() {
                for (var e = 0; e < H.length; ++e)
                    if (H[e] === -1) return !0;
                return !1
            }, this.on = L.on.bind(L), this.off = L.off.bind(L)
        };
    return Object.freeze ? (m.EVENTS = Object.freeze(A), m.CONSTANTS = Object.freeze(g)) : (m.EVENTS = A, m.CONSTANTS = g), m
});
define("overlays/options/closeOnLegacyOverlay", ["vanillajs", "ta/Core/TA.Event"], function(n, e) {
    "use strict";
    return function() {
        e.on("onOverlayShow", this.hide.bind(this))
    }
});
define("overlays/options/highlightElement", ["api-mod"], function(i) {
    "use strict";
    var n = function(n) {
        function t(n) {
            this.on("show", function() {
                i.addClass(n, "highlight")
            }).on("hide", function() {
                i.removeClass(n, "highlight")
            })
        }
        return arguments.length ? function() {
            t.call(this, n)
        } : void t.call(this, this.sourceElement)
    };
    return n
});
define("overlays/options/blurSourceOnHide", ["vanillajs"], function() {
    "use strict";
    return function() {
        var e = this;
        this.on("hide", function() {
            e.sourceElement && e.sourceElement.blur()
        })
    }
});
define("overlays/options/closeOnTargetEvent", ["vanillajs", "api-mod"], function(n, t) {
    "use strict";

    function i() {
        this.hide("on-event")
    }
    return function(n, o) {
        return function() {
            var e = o.splice ? o : [o],
                c = i.bind(this);
            this.on("show", function() {
                e.forEach(function(i) {
                    t.addEvent(n, i, c)
                })
            }).on("hide", function() {
                e.forEach(function(i) {
                    t.removeEvent(n, i, c)
                })
            })
        }
    }
});
define("hotels/RoomsGuestsUI", ["babel/babel-helpers", "lib/jquery-amd", "hotels/RoomsGuests", "ta/Core/TA.Dust", "mixins/Events", "ta/Core/TA.Store", "mixins/mixin", "overlays/Overlay", "overlays/styles/dropdown", "overlays/options/closeOnDocClick", "overlays/options/closeOnLegacyOverlay", "overlays/options/closeOnTargetEvent", "overlays/options/repositionOnEvent", "overlays/options/matchWidth", "overlays/options/autoReposition", "overlays/position"], function(e, t, o, i, n, r, s, a, l, c, u, _, p, h, d, f) {
    "use strict";
    var v = Object.freeze({
            VALUE_CHANGED: "valueChanged",
            WILL_OPEN: "willOpen",
            CLOSED: "closed"
        }),
        y = function() {
            function o(i, r, a, l, c, u, _) {
                e.classCallCheck(this, o), this._placeHolder = t(i), this._topClass = r, this._valueDecorator = "function" == typeof a ? a : function(e) {
                    return e
                }, this._valueProvider = "function" == typeof l ? l : function() {
                    return 0
                }, this._min = c, this._max = u, this._options = t.extend({}, _), s(this, new n(v.VALUE_CHANGED, v.WILL_OPEN, v.CLOSED))
            }
            return e.createClass(o, [{
                key: "setValue",
                value: function(e) {
                    var t = Math.min(Math.max(this._min, e), this._max),
                        o = this._valueDecorator(t);
                    this._label && this._label.text(o)
                }
            }]), o
        }(),
        k = function(o) {
            function n(o, r, s, a, l, c, u) {
                e.classCallCheck(this, n);
                var _ = e.possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, o, r, s, a, l, c, u));
                _._element = null, _._overlay = null;
                var p = function(e) {
                        var t = e.attr("data-val");
                        _.setValue(t), d(), _.emit(v.VALUE_CHANGED, t)
                    },
                    h = function() {
                        if (_._overlay && _._overlay.container) {
                            var e = t(_._overlay.container).find(".options-container");
                            e.scrollTop(e.scrollTop() + 1), e.scrollTop(e.scrollTop() - 1)
                        }
                    },
                    d = function() {
                        var e = !0;
                        _._overlay && (e = !_._overlay.isOpen()), _._showPicker(e)
                    },
                    f = function() {
                        _._overlay || (_._overlay = _._setupDropdown(), _._overlay.on("hide", _.emit.bind(_, v.CLOSED, _))), d(), h()
                    },
                    y = _;
                return i.render(_._getTemplate(), _._getData(), _._placeHolder.get(0), function() {
                    t(o).find(".curoption").on("click", function(e) {
                        e.stopPropagation(), d(), h()
                    }), t(o).find(".option").on("click", function(e) {
                        e.stopPropagation(), p(t(this))
                    }).each(function() {
                        var e = t(this).attr("data-val"),
                            o = parseInt(e, 10),
                            i = s(o);
                        t(this).text(i)
                    }), y.setValue(l), y._element = t(o).find(".unified-picker"), y._element.on("click", function() {
                        return y._overlay && y._overlay.hide()
                    }), y._element.find(".picker-inner").on("click", function(e) {
                        e.stopPropagation(), f()
                    })
                }), _
            }
            return e.inherits(n, o), e.createClass(n, [{
                key: "_setupDropdown",
                value: function() {
                    var e = this._element.find(".picker-dropdown"),
                        t = this._element.get(0);
                    e.removeClass("hidden");
                    var o = new a(t, l(t, "below", [], e.get(0), null, "div"), !this._options.flexWidth && h(t), c, u, _(window, ["date_bar_docked", "date_bar_undocked"]));
                    return o && (o.domParent = t), o
                }
            }, {
                key: "_getTemplate",
                value: function() {
                    return "rooms-guests/desktop/dropdown.dust"
                }
            }, {
                key: "_getData",
                value: function() {
                    return {
                        topClass: this._topClass,
                        min: this._min,
                        max: this._max + 1,
                        titleClass: this._options.titleClass
                    }
                }
            }, {
                key: "_showPicker",
                value: function(e) {
                    this._overlay && (e && this.emit(v.WILL_OPEN, this), this._overlay.isOpen && (e ? this._overlay.show() : this._overlay.hide()))
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var o = this._valueDecorator(e);
                    this._overlay ? t(this._overlay.container).find(".picker-dropdown .picker-label").text(o) : this._placeHolder.find(".picker-dropdown .picker-label").text(o), this._placeHolder.find(".picker-inner .picker-label").text(o)
                }
            }, {
                key: "hidePopup",
                value: function() {
                    this._showPicker(!1)
                }
            }, {
                key: "destroy",
                value: function(e) {
                    this._overlay && this._overlay.destroy(), e && this._element.parent().length ? this._element.parent().remove() : this._element.remove()
                }
            }, {
                key: "toggleVisible",
                value: function(e) {
                    this._element.toggleClass("hidden", !e)
                }
            }, {
                key: "toggleError",
                value: function(e) {
                    this._element.find(".picker-inner").toggleClass("error", e), this._element.toggleClass("error", e)
                }
            }, {
                key: "setTitle",
                value: function(e) {
                    this._options.titleClass && this._element.find("." + this._options.titleClass).text(e)
                }
            }]), n
        }(y),
        g = function(o) {
            function i(t, o, n, r, s, a, l) {
                return e.classCallCheck(this, i), e.possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, o, n, r, s, a, l))
            }
            return e.inherits(i, o), e.createClass(i, [{
                key: "_setupDropdown",
                value: function() {
                    var e = this._element.find(".picker-dropdown").removeClass("hidden").get(0),
                        t = this._element.find(".picker-inner").get(0);
                    return new a(t, l(t, "below ", this._options.dropdownClasses, e, null, "div"), f.overlapRightTop(), h(t), c, u, p(window, ["date_bar_docked", "date_bar_undocked"]), d)
                }
            }, {
                key: "_getTemplate",
                value: function() {
                    return "rooms-guests/desktop/checkmark_dropdown.dust"
                }
            }, {
                key: "_getData",
                value: function() {
                    return t.extend(e.get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_getData", this).call(this), {
                        icon: this._options.icon
                    })
                }
            }, {
                key: "_resetSelection",
                value: function(e) {
                    var o = this._overlay && this._overlay.container || this._placeHolder;
                    t(o).find(".option.selected").removeClass("selected"), t(o).find(".option[data-val=" + e + "]").addClass("selected")
                }
            }, {
                key: "setValue",
                value: function(t) {
                    e.get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "setValue", this).call(this, t), this._resetSelection(t)
                }
            }]), i
        }(k),
        m = function() {
            function o(r, s, a, l, c, u) {
                var _ = this;
                e.classCallCheck(this, o);
                var p = "rooms-guests/desktop/ticker.dust",
                    h = new n(v.VALUE_CHANGED);
                this._min = c, this._max = u, this._valueDecorator = a, a && "function" == typeof a || (this._valueDecorator = function(e) {
                    return e
                }), l && "function" == typeof l || (l = function() {
                    return 0
                }), this.placeHolder = t(r), this.on = h.on.bind(h), this.off = h.off.bind(h);
                var d = function(e) {
                        if (e) {
                            var t = l(),
                                o = t + e;
                            _.setValue(o), h.emit(v.VALUE_CHANGED, o, t)
                        }
                    },
                    f = {
                        topClass: s
                    };
                i.render(p, f, this.placeHolder.get(0), function() {
                    _._increase = _.placeHolder.find(".plus-circle"), _._decrease = _.placeHolder.find(".minus-circle"), _._increase.on("click", function() {
                        return d(1)
                    }), _._decrease.on("click", function() {
                        return d(-1)
                    }), _.setValue(l())
                })
            }
            return e.createClass(o, [{
                key: "setValue",
                value: function(e) {
                    var t = Math.min(Math.max(this._min, e), this._max),
                        o = this._valueDecorator(t);
                    this.placeHolder.find(".picker-label").text(o), this._increase.toggleClass("inactive", e >= this._max), this._decrease.toggleClass("inactive", e <= this._min)
                }
            }]), o
        }(),
        C = function(t) {
            function o(t, n, r, s, a, l, c) {
                e.classCallCheck(this, o);
                var u = e.possibleConstructorReturn(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t, n, r, s, a, l, c));
                return i.render(u._getTemplate(), u._getData(), u._placeHolder.get(0), function() {
                    u._increase = u._placeHolder.find(".rg-ticker-plus"), u._decrease = u._placeHolder.find(".rg-ticker-minus"), u._increase.on("click", function() {
                        return u._delta(1)
                    }), u._decrease.on("click", function() {
                        return u._delta(-1)
                    }), u._label = u._placeHolder.find(".rg-ticker-label"), u.setValue(u._valueProvider())
                }), u
            }
            return e.inherits(o, t), e.createClass(o, [{
                key: "_getTemplate",
                value: function() {
                    return "rooms-guests/desktop/label_ticker.dust"
                }
            }, {
                key: "_getData",
                value: function() {
                    return {
                        topClass: this._topClass
                    }
                }
            }, {
                key: "_delta",
                value: function(e) {
                    if (e) {
                        var t = this._valueProvider(),
                            o = t + e;
                        this.setValue(o), this.emit(v.VALUE_CHANGED, o, t)
                    }
                }
            }, {
                key: "setValue",
                value: function(t) {
                    e.get(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "setValue", this).call(this, t), this._increase.toggleClass("inactive", t >= this._max), this._decrease.toggleClass("inactive", t <= this._min)
                }
            }]), o
        }(y),
        b = function(o) {
            function i(t, o, n, r, s, a, l) {
                return e.classCallCheck(this, i), e.possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, o, function(e) {
                    return e
                }, r, s, a, l))
            }
            return e.inherits(i, o), e.createClass(i, [{
                key: "_getTemplate",
                value: function() {
                    return "rooms-guests/desktop/count_ticker.dust"
                }
            }, {
                key: "_getData",
                value: function() {
                    return t.extend(e.get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "_getData", this).call(this), {
                        icon: this._options.icon,
                        label: this._options.label
                    })
                }
            }]), i
        }(C),
        D = function(e) {
            var t = r.retrieve(e);
            return function(e) {
                return t && t.length > e && e >= 0 ? t[e] : ""
            }
        };
    return {
        DropDownPicker: k,
        CheckmarkDropdownPicker: g,
        Ticker: m,
        CountTicker: b,
        createStoreValuesDecorator: D,
        EVENTS: v
    }
});
require(["ta/prwidgets"], function(e) {
    var r = e.define.bind(e, "ibex_trip_search_rooms_guests", "pickers", ["handlers", "pickers"]);
    r(["lib/jquery-amd", "ta/Core/TA.Store", "hotels/RoomsGuests", "hotels/RoomsGuestsUI", "mixins/Events", "common/trackingStreams"], function(e, r, t, n, o, i) {
        function c(c, s) {
            function a() {
                function o(e) {
                    return "string" == typeof e && (e = parseInt(e, 10), isNaN(e)) ? m : e < 0 ? m : 0 === e ? "0-1" : e.toString()
                }

                function c() {
                    for (var e = 0; e < p.length; ++e) p[e].hidePopup()
                }

                function s(s) {
                    var a = e("<span/>", {
                        "class": "age-picker"
                    });
                    S.append(a);
                    var l = new n.DropDownPicker(a.get(0), "", o, null, 0, t.CONSTANTS.MAX_CHILD_AGE, {
                        titleClass: "age-of-child",
                        flexWidth: !0
                    });
                    p.push(l), a.css("order", s), l.on(n.EVENTS.VALUE_CHANGED, function(e) {
                        i.trackEvent("childrenpicker", "click", "age", e), C.updateChildAge(s, e), V.emit("roomInfoChanged")
                    }), l.on(n.EVENTS.WILL_OPEN, c);
                    var d = r.retrieve("rgPicker.nAgeOfChildIndex"),
                        g = d && d.length > s + 1 ? d[s + 1] : "";
                    l.setTitle(g)
                }

                function a(e, r) {
                    S.toggleClass("hidden", 0 === e.length);
                    for (var t = 0; t < e.length; ++t) p.length <= t && s(t), p[t].setValue(e[t]), e[t] >= 0 ? p[t].toggleError(!1) : r && p[t].toggleError(!0);
                    for (; p.length > e.length;) p.pop().destroy(!0)
                }
                return {
                    createAgePickersWithAges: a
                }
            }

            function l() {
                for (var e = C.get().childrenAges, r = !1, t = 0; t < e.length; ++t) e[t] < 0 ? (r = !0, p[t].toggleError(!0)) : p[t].toggleError(!1);
                return V.emit("markErrors", r), !r
            }

            function d(e) {
                E.setValue(e)
            }

            function g(e) {
                N.setValue(e)
            }

            function u(e) {
                a().createAgePickersWithAges(e), k.setValue(e.length);
                for (var r = !1, t = 0; t < e.length; ++t) e[t] < 0 && (r = !0);
                r || V.emit("markErrors", r)
            }

            function h() {
                var e = C.get();
                E.setValue(e.nRooms), N.setValue(e.nAdults), k && (k.setValue(e.childrenAges.length), a().createAgePickersWithAges(e.childrenAges))
            }

            function f() {
                l() && V.emit("submit", !1)
            }

            function A() {
                S = e(".ages-wrap", T);
                var r = T.find(".childrenPlaceholder"),
                    o = r.length > 0;
                E = new n.Ticker(T.find(".roomsPlaceholder"), "rooms-picker", n.createStoreValuesDecorator("rgPicker.nRooms"), function() {
                    return C.get().nRooms
                }, t.CONSTANTS.MIN_ROOMS, t.CONSTANTS.MAX_ROOMS), E.on(n.EVENTS.VALUE_CHANGED, function(e, r) {
                    i.trackEvent("roompicker", "click", e > r ? "add" : "subtract", e), C.update({
                        nRooms: e
                    }), V.emit("roomInfoChanged")
                }), N = new n.Ticker(T.find(".adultsPlaceholder"), "adults-picker", n.createStoreValuesDecorator(o ? "rgPicker.nAdults" : "rgPicker.nGuests"), function() {
                    return C.get().nAdults
                }, t.CONSTANTS.MIN_ADULTS, t.CONSTANTS.MAX_ADULTS), N.on(n.EVENTS.VALUE_CHANGED, function(e, r) {
                    i.trackEvent("adultpicker", "click", e > r ? "add" : "subtract", e), C.update({
                        nAdults: e
                    }), V.emit("roomInfoChanged")
                }), o && (m = T.find(".age-translated").text(), k = new n.Ticker(T.find(".childrenPlaceholder"), "children-picker", n.createStoreValuesDecorator("rgPicker.nChildren"), function() {
                    return C.get().childrenAges.length
                }, t.CONSTANTS.MIN_CHILDREN, t.CONSTANTS.MAX_CHILDREN), k.on(n.EVENTS.VALUE_CHANGED, function(e, r) {
                    i.trackEvent("childrenpicker", "click", e > r ? "add" : "subtract", e), C.update({
                        nChildren: e
                    }), V.emit("roomInfoChanged"), k.setValue(C.get().childrenAges.length)
                })), C.on(t.EVENTS.ROOMS_CHANGED, d), C.on(t.EVENTS.ADULTS_CHANGED, g), C.on(t.EVENTS.CHILDREN_CHANGED, u), T.find(".btn_close").on("click", f)
            }
            var E, N, k, S, m, C = c,
                T = s,
                p = [],
                V = new o("markErrors", "hide");
            this.on = V.on.bind(V), this.off = V.off.bind(V), A(), this.verifyAgesOfChildren = l, this.setInitialState = h
        }
        return c
    })
});
require(["ta/prwidgets"], function(e) {
    var n = e.define.bind(e, "ibex_trip_search_rooms_guests", "handlers", ["handlers", "pickers"]);
    n(["widget", "lib/jquery-amd", "common/trackingStreams", "ta/Core/TA.Event", "ta/Core/TA.Store", "ta/page", "common/Radio", "hotels/RoomsGuests", "overlays/Overlay", "overlays/styles/popover", "overlays/position", "overlays/options/closeOnDocClick", "overlays/options/closeOnLegacyOverlay", "overlays/options/repositionOnEvent", "overlays/options/autoReposition", "overlays/options/highlightElement", "overlays/options/centerArrowOnSrcElement", "overlays/options/blurSourceOnHide", "ta/util/LegacyDateShim", "pickers"], function(e, n, t, o, r, i, s, a, l, c, u, d, v, f, g, _, p, h, m, k) {
        "use strict";

        function E(e) {
            e === !0 ? j.removeClass("disabled") : j.addClass("disabled")
        }

        function y(e) {
            e !== K.get(0) && (q.fromStore(), S(!1))
        }

        function C() {
            for (var e = K.parent(), n = 0; n < 4; ++n) {
                var t = e.find(".update_results_button");
                if (t) return t;
                e = e.parent()
            }
            return null
        }

        function S(e) {
            U && U.setInitialState(), R(), D(), e && q.updateStore()
        }

        function b(e) {
            D(e), x()
        }

        function w(e) {
            R(e), x()
        }

        function A(e) {
            R(void 0, e), x()
        }

        function x() {
            J = !0, E(!0)
        }

        function O() {
            r.store("guests_rooms_picker.enabled", !0), F = K.find(".traveler_info_container");
            var e = K.find(".initial-values-holder");
            q = new a({
                initialValuesHolder: e.get(0)
            }), q.on(a.EVENTS.ROOMS_CHANGED, b), q.on(a.EVENTS.ADULTS_CHANGED, w), q.on(a.EVENTS.CHILDREN_CHANGED, A), j = C(), N(), q.hasStoreValues() ? y() : S(!0)
        }

        function N() {
            o.on("searchFieldsChanged", y)
        }

        function T() {
            n(".ui_overlay.date_picker_modal .ui_close_x").click()
        }

        function D(e) {
            var t = e || q.get().nRooms,
                o = r.retrieve("rgPicker.nRooms"),
                i = o && o.length > t ? o[t] : "";
            n(".traveler_info_numeric .room-info").text(t), n(".traveler_info_text .room-info").text(i), n(".rooms-picker .picker-label:visible").text(i)
        }

        function R(e, t) {
            var o = q.get(),
                i = e || o.nAdults,
                s = (t || o.childrenAges).length,
                a = i + s;
            n(".traveler_info_numeric .guest-info").text(a);
            var l = K.find(".traveler_info_text .guest-info");
            if (l.length) {
                var c = r.retrieve("rgPicker.nGuests"),
                    u = c && c.length > a ? c[a] : "";
                l.text(u)
            } else {
                var d = r.retrieve("rgPicker.nAdults"),
                    v = d && d.length > i ? d[i] : "",
                    f = r.retrieve("rgPicker.nChildren"),
                    g = f && f.length > s ? f[s] : "";
                K.find(".traveler_info_text .adult-info").text(v), K.find(".traveler_info_text .child-info").text(g)
            }
        }

        function G() {
            R(), D();
            var e = q.updateStore();
            e && (o.fireEvent("onLegacyGuestsChanged", e), m.justUpdateSessionDates())
        }

        function I(e) {
            U && !U.verifyAgesOfChildren() ? M.show() : (G(), J && (L(), o.fireEvent("searchFieldsChanged", K.get(0))), J = !1, H(e && "close" === e.trigger ? "close" : "dismiss"))
        }

        function H(e) {
            t.trackEvent("roomguestpicker_module", "click", e);
            var n = q.get() || {},
                o = n.nRooms || 0,
                r = n.nAdults || 0,
                i = n.childrenAges ? n.childrenAges.length : 0,
                s = "room=" + o + ",adult=" + r + ",children=" + i;
            t.trackEvent("roomguestpicker_module", "final_selection", s)
        }

        function L() {
            j.length ? j.is(":hidden") && s("search").emit("submit") : i.processNewTravelInfo && i.processNewTravelInfo(K.get(0))
        }

        function V() {
            M.hide("close")
        }

        function P() {
            var e;
            if (M && n.contains(document, M.sourceElement)) e = M.isOpen();
            else {
                var o = K.find(".popup_content"),
                    r = K.find(".traveler_info_container").get(0),
                    i = "rooms_guests_children no_x no_padding";
                i += K.parents(".responsive_inline").length ? " responsive_inline" : "";
                var s = [c(r, "below", i, "", o.get(0)), u.below([], !1, !1, [16]), p(r), d.withoutTouchEvents, v, f(window, ["date_bar_docked", "date_bar_undocked"]), g, _, h];
                M = new l(r, s), M.on("hide", I);
                var a = n(".pickers", M.contentElement);
                a.removeClass("hidden"), U = new k(q, a), U.on("submit", V), U.on("roomInfoChanged", G), U.on("markErrors", function(e) {
                    F.parent().toggleClass("error", e)
                }), U.setInitialState(), e = !1
            }
            if (!e) {
                var m = K.parents(".persistent_trip_search_fixed").length ? 1 : 0;
                t.trackEvent("roomguestpicker_module", "click", "manual", m), M.show(), t.trackEvent("roomguestpicker_module", "in_view")
            }
        }
        var j, q, F, M, U, K = n(e.element),
            z = !0,
            B = !1,
            J = !1,
            Q = "",
            W = r.retrieve("tracking.impression.key"),
            X = r.retrieve("page.location");
        W && (Q = "IK:" + W), X && (Q += "/L:" + X);
        var Y = K.find(".ui_picker .traveler_info_container");
        Y.on("focus", function() {
            T(), P()
        }), K.on("click", function() {
            Y.focus(), P()
        }), O(), s("search").on("loading", function(t) {
            n(e.element).toggleClass("loading", t)
        }).reply("is-valid", function() {
            return B || (z = U ? U.verifyAgesOfChildren() : !q.hasMissingChildrenAges()), z || t.trackEvent("GuestSelector-tripsearch", "age_validation_error", Q, "1", !1), z
        })
    })
});
define("overlays/styles/default", ["lib/jquery-amd"], function(t) {
    "use strict";

    function e(e, a, i, s) {
        this.container = t("<" + (s || "div") + "/>").addClass("ui_overlay").addClass(e || "").get(0), a && (this.header = t("<div/>", {
            "class": "header_text"
        }).html(a).appendTo(this.container).get(0)), i && (this.subheader = t("<div/>").addClass("subheader_text").html(i).appendTo(this.container).get(0)), this.contentElement = t("<div/>").addClass("body_text").appendTo(this.container).get(0), this.close = t("<div/>").addClass("ui_close_x").appendTo(this.container).get(0)
    }
    var a = function(a, i, s, n, d, o) {
        return i = (i || "") + (a && " " + a.getAttribute("data-overlay") || ""), s = s || a && a.getAttribute("data-header") || "", n = n || a && a.getAttribute("data-subheader") || "",
            function() {
                e.call(this, i, s, n, o), this.updateContent(d), t(this.close).on("click", function() {
                    this.hide.apply(this, arguments.length ? arguments : ["close-button"])
                }.bind(this))
            }
    };
    return a
});
define("overlays/position/conditional", ["overlays/position/base"], function(o) {
    "use strict";
    return function(i, n, t) {
        var s = o();
        s.label = "conditional";
        var f;
        return s.onPosition = function() {
            var o = i() ? n : t;
            f && o !== f && f.offPosition && f.offPosition.apply(this), (f = o).onPosition && f.onPosition.apply(this)
        }, s.offPosition = function() {
            f = null;
            var o = i() ? n : t;
            o.offPosition && o.offPosition.apply(this)
        }, s
    }
});
define("overlays/position/fullscreen", ["lib/jquery-amd", "overlays/position/base", "overlays/options/disableBodyScroll"], function(o, i, t) {
    "use strict";
    return function(n) {
        function s() {
            e.call(this), l.call(this)
        }
        var e = i(),
            l = t(n);
        return s.onPosition = e.onPosition = function() {
            o(this.container).css({
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                width: "auto"
            }).addClass("fullscreen")
        }, s.offPosition = e.offPosition = function() {
            o(this.container).removeClass("fullscreen")
        }, s
    }
});
define("overlays/position/relBelowLeft", ["lib/jquery-amd", "overlays/position/base"], function(t, o) {
    "use strict";
    return function(e, i) {
        var n = o();
        return n.onPosition = function() {
            var o = t(this.sourceElement),
                n = o.offset(),
                s = o.outerHeight();
            if (this.domParent != document.body) {
                var r = t(this.domParent).offset();
                n.top -= r.top, n.left -= r.left
            }
            t(this.container).css({
                position: "absolute",
                top: n.top + s + (e || 0) + "px",
                left: n.left + (i || 0) + "px",
                bottom: "auto",
                right: "auto"
            })
        }, n
    }
});
define("overlays/position/relBelowRight", ["lib/jquery-amd", "overlays/position/base"], function(t, o) {
    "use strict";
    return function(e, i) {
        var n = o();
        return n.onPosition = function() {
            var o = t(this.sourceElement),
                n = o.offset(),
                s = o.outerHeight(),
                r = o.outerWidth();
            if (this.domParent != document.body) {
                var u = t(this.domParent).offset();
                n.top -= u.top, n.left -= u.left
            } else document.body.style.position = "relative";
            t(this.container).css({
                position: "absolute",
                top: n.top + s + (e || 0) + "px",
                left: "auto",
                bottom: "auto",
                right: document.body.clientWidth - n.left - r - (i || 0) + "px"
            })
        }, n
    }
});
define("overlays/position/relAboveLeft", ["lib/jquery-amd", "overlays/position/base"], function(t, o) {
    "use strict";
    return function(e, i) {
        var n = o();
        return n.onPosition = function() {
            var o = t(this.sourceElement),
                n = o.offset();
            if (this.domParent != document.body) {
                var s = t(this.domParent).offset();
                n.top -= s.top, n.left -= s.left
            } else document.body.style.position = "relative";
            t(this.container).css({
                position: "absolute",
                top: "auto",
                left: n.left + (i || 0) + "px",
                bottom: document.body.clientHeight - n.top - (e || 0) + "px",
                right: "auto"
            })
        }, n
    }
});
define("overlays/position/relAboveRight", ["lib/jquery-amd", "overlays/position/base"], function(t, o) {
    "use strict";
    return function(e, i) {
        var n = o();
        return n.onPosition = function() {
            var o = t(this.sourceElement),
                n = o.offset(),
                s = o.outerWidth();
            if (this.domParent != document.body) {
                var r = t(this.domParent).offset();
                n.top -= r.top, n.left -= r.left
            } else document.body.style.position = "relative";
            t(this.container).css({
                position: "absolute",
                top: "auto",
                left: "auto",
                bottom: document.body.clientHeight - n.top - (e || 0) + "px",
                right: document.body.clientWidth - n.left - s - (i || 0) + "px"
            })
        }, n
    }
});
define("overlays/support/radio", ["common/Radio"], function(n) {
    "use strict";
    return {
        hide: function(o, i) {
            return o || (o = "overlays"), i || (i = "shown"),
                function() {
                    var t = this,
                        u = n(o),
                        e = function(n) {
                            n != t && t.hide()
                        };
                    this.on("show", function() {
                        u.on(i, e)
                    }).on("hide", function() {
                        u.off(i, e)
                    })
                }
        },
        announce: function(o, i, t) {
            return i || (i = "overlays"), t || (t = "shown"),
                function() {
                    var u = this,
                        e = n(i);
                    this.on("show", function() {
                        e.emit(t, u, o)
                    })
                }
        }
    }
});
define("overlays/ux/elementToggle", ["lib/jquery-amd"], function(n) {
    "use strict";
    return function(t, e) {
        e && (e["on" + t.type] = null);
        var i = t.type || "click";
        return function() {
            n(this.sourceElement).on(i, function(n) {
                n.stopPropagation(), this.isOpen() ? "click" == i && this.hide() : this.show()
            }.bind(this))
        }
    }
});
define("overlays/options/closeOnEscape", ["vanillajs", "api-mod"], function(e, n) {
    "use strict";

    function t(e) {
        27 === e.keyCode && (e.preventDefault(), this.hide("escape"))
    }
    var o = function() {
        var e = n.bind(t, this);
        this.on("show", function() {
            n.addEvent(document, "keyup", e)
        }).on("hide", function() {
            n.removeEvent(document, "keyup", e)
        })
    };
    return o
});
define("styleguide/overlays/Flyout", ["lib/jquery-amd", "utils/responsive", "page-model", "overlays/Overlay", "overlays/styles/default", "overlays/options/highlightElement", "overlays/position/conditional", "overlays/position/fullscreen", "overlays/position/relBelowLeft", "overlays/position/relBelowRight", "overlays/position/relAboveLeft", "overlays/position/relAboveRight", "overlays/position/autosize", "overlays/options/repositionOnEvent", "overlays/support/radio", "overlays/ux/elementToggle", "overlays/options/closeOnDocClick", "overlays/options/closeOnEscape"], function(e, o, i, l, s, t, r, n, a, v, y, p, u, c, d, f, g, h) {
    "use strict";
    return function(e, b) {
        var w = b.getAttribute("data-sg-overlay") || "",
            O = w.indexOf("above") >= 0,
            m = O ? y : a,
            A = O ? p : v;
        if (w.indexOf("right") >= 0) {
            var x = A;
            A = m, m = x
        }
        return new l(b, s(b, "ui_flyout"), r(o.mobile, n(), (i.isRtl ? A : m)()), u(0), c(window, "resize"), t, f(e, b), g, h, d.hide(), d.announce(), Array.prototype.slice.call(arguments, 2)).show()
    }
});
define("overlays/support/placement", ["vanillajs"], function() {
    "use strict";
    return function(n) {
        return function() {
            this.container.className += " ppr_rup ppr_dyn ppr_priv_" + n.name.replace(/:[^:]*$/, "")
        }
    }
});
define("utils/string/InputLength", [], function() {
    "use strict";
    return function(t) {
        for (var n = 0, r = t.length - 1; r >= 0; r--) {
            n++;
            var e = t.charCodeAt(r);
            (e >= 19968 && e <= 40959 || e >= 12352 && e <= 12543 || e >= 44032 && e <= 55295) && n++
        }
        return n
    }
});
define("typeahead/TypeAhead", ["Logging", "api-mod", "mixins/mixin", "mixins/Events", "utils/string/InputLength", "lib/jquery-amd", "page-model"], function(t, e, i, s, n, o, r) {
    "use strict";
    var a = 9,
        c = 13,
        h = 20,
        u = 27,
        p = 37,
        l = 38,
        m = 39,
        f = 40,
        y = 91,
        v = 16,
        d = 17,
        I = 18,
        T = 93,
        g = {
            minChars: 3,
            searchDelay: 250,
            jpFfInterval: 500
        },
        E = function(t, e) {
            i(this, s.create(Array.prototype.concat(E.inputEvents, E.emitEvents))), this.options = o.extend({}, g, t), this.resultElements = null, this.selectedIndex = -1, e && Array.isArray(e) || (e = Array.prototype.slice.call(arguments, 1));
            for (var n = 0; n < e.length; n++) e[n] && e[n].call(this);
            E.inputEvents.forEach(function(t) {
                "function" == typeof this[t] && this.on(t, this[t])
            }, this)
        };
    return E.emitEvents = ["emptyInput", "insufficientInput", "search", "results", "changeSelection", "updateSelection", "escape", "enter", "tab", "selected", "resultHover", "resultUnhover", "resultClick", "show", "hide", "searchResults", "inputChanged"], E.inputEvents = ["focus", "blur", "keydown", "keyup", "compositionend", "paste"], E.prototype.keydown = function(t, i) {
        if (i) switch (t.keyCode) {
            case c:
                e.stopEvent(t), this.emit("enter", i);
                break;
            case f:
                e.stopEvent(t), this.emit("changeSelection", i, 1);
                break;
            case l:
                e.stopEvent(t), this.emit("changeSelection", i, -1);
                break;
            case u:
                e.stopEvent(t), this.emit("escape", i);
                break;
            case a:
                this.emit("tab", i)
        }
    }, E.prototype.compositionend = function(t, i) {
        i && (e.stopEvent(t), this.emit("inputChanged", i), this.runSearch(i))
    }, E.prototype.paste = function(t, e) {
        var i = this;
        this.searchTimer = setTimeout(function() {
            i.runSearch(e)
        }, this.options.searchDelay)
    }, E.prototype.keyup = function(t, e) {
        if (e && !this.composing) {
            switch (t.keyCode) {
                case v:
                case d:
                case c:
                case y:
                case I:
                case h:
                case T:
                    return
            }
            switch (clearTimeout(this.searchTimer), t.keyCode) {
                case f:
                case l:
                case u:
                case a:
                case p:
                case m:
                    return
            }
            var i = this;
            this.emit("inputChanged", e), this.searchTimer = setTimeout(function() {
                i.runSearch(e)
            }, this.options.searchDelay)
        }
    }, r.session.jpFfIME && (E.prototype.keyupAction = function(t, e) {
        if (e) {
            clearTimeout(this.searchTimer);
            var i = this;
            this.searchTimer = setTimeout(function() {
                i.runSearch(e)
            }, this.options.searchDelay)
        }
    }, E.prototype.focus = function(t, e) {
        if (document.activeElement == e) {
            var i = function() {
                this.keyupAction.call(this, t, e), this.imeTimer && clearTimeout(this.imeTimer), this.imeTimer = setTimeout(i.bind(this), this.options.jpFfInterval)
            };
            i.call(this)
        }
    }), E.prototype.runSearch = function(t) {
        if (!this.lastQuery || this.lastQuery != t.value)
            if (/^\s*$/.test(t.value)) this.emptyInput = !0, this.insufficientInput = !1, this.emit("emptyInput", t);
            else if (n(t.value) < this.options.minChars) {
            if (this.insufficientInput) return;
            this.emptyInput = !1, this.insufficientInput = !0, this.emit("insufficientInput", t)
        } else this.emptyInput = !1, this.insufficientInput = !1, this.lastQuery = t.value, this.emit("search", t)
    }, E.prototype.onResults = function(t, e, i) {
        var s = !(e && e.length || i.indexOf("prefill", 0) != -1);
        return s ? void this.emit("noResults", t) : void this.emit("results", t, e, i)
    }, E
});
define("typeahead/support/bindToElement", ["lib/jquery-amd", "typeahead/TypeAhead"], function(e, t) {
    "use strict";
    return function(n) {
        return function() {
            var o = this,
                u = e(n);
            t.inputEvents.forEach(function(e) {
                u.on(e, function(t) {
                    o.emit(e, t, n)
                })
            }, this), o.on("show", function() {
                o.resultElements && o.resultElements.map(function(t) {
                    var n = e(t);
                    n.off("mousedown").on("mousedown", function(e) {
                        e.stopPropagation(), e.preventDefault(), o.emit("resultClick", e, this)
                    }), n.off("mouseenter").on("mouseenter", function(e) {
                        o.emit("resultHover", e, this)
                    }), n.off("mouseleave").on("mouseleave", function(e) {
                        o.emit("resultUnhover", e, this)
                    })
                })
            })
        }
    }
});
define("typeahead/query/remote", ["utils/ajax", "utils/objutils"], function(t, e) {
    "use strict";
    var n = function(n, r, a) {
            return function(o) {
                return function() {
                    var i, u = r ? {} : void 0,
                        s = function(t, e) {
                            u && e && e.length && e.length > 0 && (u[t] = e)
                        },
                        c = function(t) {
                            return u && u[t]
                        },
                        f = function(t, r, a) {
                            var i = "function" == typeof o ? o() : o;
                            return {
                                type: "GET",
                                url: "/TypeAheadJson",
                                data: e.extend({
                                    action: "API",
                                    types: n,
                                    filter: "nobroad",
                                    legacy_format: !0,
                                    urlList: !1,
                                    strictParent: !0,
                                    query: t,
                                    max: 25
                                }, i),
                                dataType: "json",
                                xhrFields: {
                                    withCredentials: !0
                                },
                                success: r,
                                error: a
                            }
                        },
                        l = function() {
                            if (a && i && 4 != i.readyState && "function" == typeof i.abort) try {
                                i.abort()
                            } catch (t) {}
                        };
                    this.on("search", function(e) {
                        var n = this,
                            r = e.value;
                        l();
                        var a = c(r);
                        a ? (n.onResults(e, a, r), n.emit("searchResults", a)) : i = t(f(r, function(t) {
                            s(r, t), n.onResults(e, t, r), n.emit("searchResults", t)
                        }, function(t, e, r) {
                            n.emit("error", "search", e, r)
                        }))
                    })
                }
            }
        },
        r = {};
    return r.Geo = n("geo"), r.Geo_Caching = n("geo", !0, !0), r.POI = n("eat,attr,hotel"), r.POI_Caching = n("eat,attr,hotel", !0, !0), r
});
define("typeahead/query/noResults", [], function() {
    "use strict";
    return function(n) {
        return function() {
            this.on("noResults", function(t) {
                this.onResults(t, "function" == typeof n ? n(this) : n)
            })
        }
    }
});
define("utils/geolocation", ["vanillajs"], function() {
    "use strict";
    var o = function() {
            return "undefined" != typeof navigator && "undefined" != typeof navigator.geolocation
        },
        n = function(n, t) {
            "function" == typeof n && (o() ? navigator.geolocation.getCurrentPosition(function(o) {
                n({
                    latitude: o.coords.latitude,
                    longitude: o.coords.longitude
                })
            }, function(o) {
                "function" == typeof t && t(o)
            }) : t(new Error("Location services not available")))
        };
    return {
        canRequestLocation: o,
        requestLocation: n
    }
});
define("typeahead/query/prefill/nearby", ["utils/geolocation"], function(n) {
    "use strict";
    return function(n) {
        return function(t) {
            var e = function(t) {
                this.onResults(t, [{
                    nearby: !0,
                    name: n
                }], "prefill-nearby")
            }.bind(this);
            this.on("emptyInput", e), this.on("insufficientInput", e)
        }
    }
});
define("typeahead/query/prefill/default", [], function() {
    "use strict";
    return function(n, t) {
        function e(n) {
            return "function" == typeof n ? n() : n
        }
        return function(u) {
            var i = function(u) {
                var i = [],
                    f = e(n);
                f && i.push({
                    nearby: !0,
                    name: f
                });
                var r = e(t);
                r && i.push({
                    homepage: !0,
                    name: r
                }), this.onResults(u, i, "prefill-default")
            }.bind(this);
            this.on("emptyInput", i), this.on("insufficientInput", i)
        }
    }
});
define("models/RecentlyViewed", ["utils/ajax", "page-model", "ta/util/Error"], function(t, r, e) {
    "use strict";

    function s(t) {
        this.limit = t.limit || 10, this.categories = t.categories ? t.categories.sort() : [], this.paramsString = "limit = " + this.limit + " categories = " + this.categories.toString(), this.error = this.error.bind(this), this.success = this.success.bind(this)
    }
    var i = {};
    return s.prototype.fetch = function(e) {
        var s = this.paramsString;
        return i[s] ? (e && (i[s].error || i[s].data ? e(i[s].error, i[s].data) : i[s].fns.push(e)), i[s]) : (i[s] = {
            xhr: t({
                url: "/data/1.0/recent/",
                data: {
                    limit: this.limit,
                    categories: this.categories
                },
                headers: {
                    "X-Requested-By": r.JS_SECURITY_TOKEN
                },
                error: this.error,
                success: this.success
            }),
            fns: []
        }, e && i[s].fns.push(e), i[s])
    }, s.prototype.success = function(t, r, e) {
        var s = this.paramsString;
        i[s].data = t.data, i[s].fns.forEach(function(r) {
            r(null, t.data)
        })
    }, s.prototype.error = function(t, r, s) {
        var a = this.paramsString;
        i[a].error = s;
        var o = t && t.response,
            c = o && o.code ? o.code : "",
            n = o && o.status ? o.status : "",
            u = o && o.text ? o.text : "";
        e.record(null, "getRecentlyViewedLocations: Ajax request failure, response error from server: " + c + ", query: " + this.categories + ", status: " + n + ", text: " + u + ", errorType:" + r + ", errorMsg: " + s)
    }, s
});
define("models/PopularGeos", ["utils/ajax", "page-model", "ta/util/Error"], function(r, t, s) {
    "use strict";

    function e(r) {
        this.limit = r && r.limit || 10, this.paramsString = "limit=" + this.limit, this.error = this.error.bind(this), this.success = this.success.bind(this)
    }
    var i = {};
    return e.prototype.fetch = function(s) {
        var e = this.paramsString;
        return i[e] ? (s && (i[e].error || i[e].data ? s(i[e].error, i[e].data) : i[e].fns.push(s)), i[e]) : (i[e] = {
            xhr: r({
                url: "/data/1.0/destinations/bundle",
                data: {
                    geoThemeId: 0
                },
                headers: {
                    "X-Requested-By": t.JS_SECURITY_TOKEN
                },
                error: this.error,
                success: this.success
            }),
            fns: []
        }, s && i[e].fns.push(s), i[e])
    }, e.prototype.success = function(r, t, s) {
        var e = this.paramsString,
            o = r && r.geos ? r.geos : [];
        o && o.length > this.limit && (o = o.slice(0, this.limit)), i[e].data = o, i[e].fns.forEach(function(r) {
            r(null, o)
        })
    }, e.prototype.error = function(r, t, e) {
        var o = this.paramsString;
        i[o].error = e;
        var a = r && r.response,
            n = a && a.code ? a.code : "",
            u = a && a.status ? a.status : "",
            h = a && a.text ? a.text : "";
        s.record(null, "get popular geos: Ajax request failure, response error from server: " + n + ", status: " + u + ", text: " + h + ", errorType:" + t + ", errorMsg: " + e)
    }, e
});
define("typeahead/query/recentOrPopPrefill", ["models/RecentlyViewed", "models/PopularGeos", "lib/jquery-amd", "ta/util/Error", "page-model"], function(e, t, n, i, r) {
    "use strict";

    function l(e) {
        var t = e.result_object;
        return +t.location_id != +r.GEO_ID
    }
    return function(n) {
        var r = {
            categories: n.categories || [],
            limit: n.limit || 10
        };
        return function() {
            function c(n) {
                h = !0, new e(r).fetch(function(e, t) {
                    try {
                        m = t.map(function(e) {
                            return e.recentlyViewed = !0, e
                        }).filter(l)
                    } catch (e) {
                        m = [], i.record(e, "recentOrPopPrefill")
                    }
                    m.length ? (a = m, f = s, h = !1, n()) : d && (a = d, d.length && (f = p), h = !1, n())
                }), new t(r).fetch(function(e, t) {
                    try {
                        d = t.map(function(e) {
                            return {
                                result_object: e,
                                recentlyViewed: !0
                            }
                        }).filter(l)
                    } catch (e) {
                        d = [], i.record(e, "recentOrPopPrefill")
                    }
                    m && !m.length && (a = d, d.length && (f = p), h = !1, n())
                })
            }
            var o = "prefill-recent",
                u = {
                    loading: !0,
                    skip: !0,
                    selectable: !1,
                    tmp_item: !0
                },
                s = {
                    sectionTitle: n.recentHeader,
                    skip: !0,
                    selectable: !1,
                    tmp_item: !0
                },
                p = {
                    sectionTitle: n.popHeader,
                    skip: !0,
                    selectable: !1,
                    tmp_item: !0
                },
                a = null,
                f = null,
                h = !1,
                m = null,
                d = null,
                y = function(e) {
                    if (!h) {
                        var t = this.results ? this.results : [];
                        a ? (t = t.filter(function(e) {
                            return !e.tmp_item
                        }), a.length && t.push(f), Array.prototype.push.apply(t, a), this.onResults(e, t, o)) : (c(function() {
                            y(e)
                        }), t.push(u), this.onResults(e, t, o))
                    }
                }.bind(this);
            this.on("emptyInput", y), this.on("insufficientInput", y)
        }
    }
});
define("typeahead/query/geonavi", ["babel/babel-helpers", "utils/ajax"], function(e, n) {
    "use strict";
    var t = "prefill-geonavi",
        i = "/TypeAheadJson?action=GEONAVI&geoID=",
        s = {},
        u = 1,
        a = [];
    return function(r) {
        r = e.extends({
            limit: 26
        }, r);
        var o = void 0;
        return function() {
            function l(a) {
                var l = this;
                if (o = a, !(s[u] instanceof Promise)) {
                    var h = this.results ? this.results : [];
                    s[u] ? s[u].length && (r.header && h.push(r.header), h = [].concat(e.toConsumableArray(h), e.toConsumableArray(s[u].slice(0, r.limit)))) : (s[u] = new Promise(function(e) {
                        return n({
                            url: i + u,
                            success: function(n) {
                                e(n)
                            }
                        })
                    }).then(function(e) {
                        return e.results.map(function(e, n) {
                            return {
                                name: e.displayName,
                                id: e.id,
                                geonavi: !0,
                                value: !!e.isLeaf && e.id,
                                navi: !e.isLeaf,
                                back: 0 === n && 1 !== u
                            }
                        })
                    }).then(function(e) {
                        return s[u] = e
                    }).then(function(e) {
                        l.results = [], l.emit("emptyInput", a)
                    }), h.push({
                        loading: !0,
                        skip: !0,
                        selectable: !1
                    }), r.header && h.push(r.header)), this.onResults(a, h, t)
                }
            }
            var h = this;
            this.on("emptyInput", l.bind(this)), this.on("insufficientInput", l.bind(this)), this.on("selected", function(e, n) {
                e.geonavi && !e.value && (e.id === u ? a.length && (u = a.pop()) : (a.push(u), u = e.id), h.results = [], h.emit("emptyInput", o))
            })
        }
    }
});
define("typeahead/views/inline", ["lib/jquery-amd"], function(e) {
    "use strict";

    function t(e, t) {
        for (var n = 0; n < t.length; n++)
            if (e[t[n]]) return e[t[n]];
        return null
    }
    var n = function(t, r) {
        return r || (r = n.TEMPLATE()),
            function() {
                this.on("results", function(n, s) {
                    this.results = s, this.resultElements = s.map(function(e, t) {
                        var n = r(e);
                        return n.resultIdx = t, n
                    }), e(t).empty().append(this.resultElements), this.emit("show")
                })
            }
    };
    return n.TEMPLATE = function(e) {
        return e || (e = "label"),
            function(n) {
                var r = document.createElement("div");
                return n.selected && (r.className = "selected"), r.innerHTML = Array.isArray(e) ? t(n, e) : n[e], n.style && (r.className += " " + n.style), r
            }
    }, n
});
define("utils/string", ["utils/errorutils"], function(errorutils) {
    "use strict";

    function parseLiteral(t) {
        return /^-?\d+(?:\.\d+)?$/.test(t[1]) ? +t[1] : /^fn:/.test(t[1]) ? utils.fn(t[1].slice(3)) : !!RE_TRUE.test(t[1]) || !RE_FALSE.test(t[1]) && void 0
    }
    var RE_TRUE = /^(true|1|on|yes)$/i,
        RE_FALSE = /^(false|0|off|no)$/i,
        utils = {};
    return utils.fn = function(fn) {
        switch (typeof fn) {
            case "function":
                return fn;
            case "string":
                var f = !1;
                try {
                    f = eval(fn)
                } catch (t) {
                    errorutils.record(t, "error evaling function")
                }
                if (!f) {
                    var ns = fn.split("."),
                        n = ns.pop();
                    try {
                        ns = eval(ns.join(".")), f = ns && ns._magic && ns._magic.partial(n)
                    } catch (t) {
                        errorutils.record(t, "function un-parseable")
                    }
                }
                if (f && "function" == typeof f) return f
        }
        return null
    }, utils.parseBoolean = function(t) {
        return RE_TRUE.test(t)
    }, utils.parseJSLN = function(t) {
        return (t || "").split(",").reduce(function(t, n) {
            var r = n.split(":");
            t[r[0].trim()] = parseLiteral(r[1].trim())
        }, {})
    }, utils
});
define("typeahead/ux/selectResult", ["Logging", "lib/jquery-amd", "utils/string"], function(e, t, s, i) {
    "use strict";
    var l = function(e, n, h, u) {
        if (1 == arguments.length && "string" == typeof e) {
            var r = e.split(",");
            e = l[r[0]], n = l[r[1]], h = s.parseBoolean(r[2])
        }
        return n || (n = l.TOGGLE_CLASS()),
            function() {
                var s = function() {
                    for (var e = this.results.length, t = 0; t < e; t++)
                        if (!this.results[t].skip) {
                            this.selectedIndex = t;
                            break
                        }
                };
                this.on("results", function(t, i) {
                    this.selectedIndex = -1, i.length && e != l.MODE_NONE && (e == l.MODE_AUTO ? s.call(this) : e == l.MODE_SINGLE ? 1 == i.length && s.call(this) : e == l.MODE_SUFFICIENT && !this.emptyInput && !this.insufficientInput && t.value.trim().length && s.call(this), this.selectedIndex >= 0 && this.emit("updateSelection", t, -1))
                }), this.on("changeSelection", function(e, t) {
                    if (this.results) {
                        this.selectedIndex === i && (this.selectedIndex = -1);
                        for (var s = this.selectedIndex, l = this.selectedIndex + t; l > 0 && l < this.results.length && this.results[l].skip;) l += t;
                        h && (l < 0 && (l = this.results.length - 1), l >= this.results.length && (l = 0)), l = Math.min(Math.max(l, 0), this.results.length - 1), this.selectedIndex != l && (this.results[l] && this.results[l].skip || (this.selectedIndex = l, this.emit("updateSelection", this.resultElements[l], s)))
                    }
                }), this.on("updateSelection", function(e, s, i) {
                    if (s >= 0 && n(this.resultElements[s], !1), !i) {
                        var l = t(e).offsetParent()[0];
                        if (l) {
                            var h = t(e).position(),
                                u = t(l).height();
                            h.top + e.offsetHeight > u ? l.scrollTop = Math.max(0, h.top) : h.top < 0 && (l.scrollTop = l.scrollTop + h.top)
                        }
                    }!this.results || this.selectedIndex < 0 || this.selectedIndex >= this.results.length || this.results[this.selectedIndex].selectable !== !1 && n(this.resultElements[this.selectedIndex], !0)
                }), this.on("enter", function(e) {
                    !this.results || this.selectedIndex < 0 || this.selectedIndex >= this.results.length || this.results[this.selectedIndex].selectable !== !1 && this.emit("selected", this.results[this.selectedIndex], "enter")
                }), this.on("escape", function(e) {
                    this.selectedIndex = -1, this.emit("hide")
                }), this.on("resultHover", function(e, t) {
                    if (this.results && this.results[t.resultIdx] && !this.results[t.resultIdx].skip) {
                        var s = this.selectedIndex;
                        this.selectedIndex = t.resultIdx, this.emit("updateSelection", t, s, !0)
                    }
                }), u && this.on("resultUnhover", function(e, t) {
                    if (this.results) {
                        var i = this.selectedIndex;
                        s.call(this), this.emit("updateSelection", t, i, !0)
                    }
                }), this.on("resultClick", function(e, t) {
                    this.results && this.results[t.resultIdx] && !this.results[t.resultIdx].skip && this.results[t.resultIdx].selectable !== !1 && this.emit("selected", this.results[t.resultIdx], "click")
                }), this.on("selected", function(e) {
                    this.selectedIndex = -1, e.navi || this.emit("hide")
                }), this.on("inputChanged", function(e) {
                    var t = this.selectedIndex;
                    this.selectedIndex = -1, this.emit("updateSelection", e, t)
                })
            }
    };
    return l.TOGGLE_CLASS = function(e) {
        return e || (e = "selected"),
            function(s, i) {
                t(s).toggleClass(e, i)
            }
    }, l.MODE_NONE = 0, l.MODE_AUTO = 1, l.MODE_SINGLE = 2, l.MODE_SUFFICIENT = 3, l
});
define("typeahead/options/showResultsOnFocus", [], function() {
    "use strict";
    return function() {
        return function() {
            this.on("focus", function(t, i) {
                this.blurTimer && clearTimeout(this.blurTimer), i.value || this.emit("emptyInput", i), this.emit("show")
            })
        }
    }
});
define("typeahead/options/noInputNoResults", [], function() {
    "use strict";
    return function() {
        return function() {
            function t() {
                delete this.results, delete this.resultElements, delete this.selectedIndex, this.emit("hideResults")
            }
            this.on("emptyInput", t), this.on("insufficientInput", t)
        }
    }
});
define("typeahead/support/tracking", ["utils/ajax", "ta/Core/TA.Record", "ta/util/Error"], function(t, e, n) {
    "use strict";
    var r = function(r, a) {
        var o = 0,
            u = function(t, e, n) {
                var u = n && n.query,
                    i = n && n.value,
                    c = n && n.url,
                    d = n && n.resultIdx,
                    s = n && n.type,
                    l = n && n.data_type,
                    f = n && n.totalCount,
                    y = n && n.document_id;
                return {
                    action: "RECORD",
                    eventType: t,
                    uiOrigin: r,
                    global: !0,
                    type: s,
                    value: i,
                    source: r,
                    startTime: o,
                    selDepth: d,
                    isChild: !1,
                    totalNum: f,
                    userInteractionType: e,
                    errors: null,
                    scope: 1,
                    query: u,
                    dataType: l,
                    url: c,
                    searchSessionId: a,
                    documentId: y
                }
            },
            i = function(e) {
                var n = {
                    method: "GET",
                    url: "/TypeAheadJson",
                    data: e
                };
                t(n)
            },
            c = function(t) {
                e.addTypeAheadMevt(t)
            },
            d = function(t, e, r) {
                try {
                    i(u(t, e, r))
                } catch (t) {
                    n.record(t, "typeahead_tracking")
                }
            },
            s = function(t, e, r) {
                try {
                    c(u(t, e, r))
                } catch (t) {
                    n.record(t, "typeahead_tracking")
                }
            },
            l = function() {
                var t = this;
                t.on("focus", function() {
                    o = Date.now(), d("start", "start")
                }), t.on("keydown", function() {
                    o || (o = Date.now(), d("start", "start"))
                }), t.on("selected", function(t, e) {
                    d("select", e, t)
                })
            },
            f = function() {
                return o
            },
            y = function() {
                return r
            },
            p = function() {
                return a
            };
        return {
            mixin: l,
            trackEventViaAjax: d,
            trackEventViaMEVTCookie: s,
            getInteractionStart: f,
            getWidgetName: y,
            getSearchSessionId: p
        }
    };
    return r
});
define("overlays/position/fullscroll", ["lib/jquery-amd", "overlays/position/base"], function(o, i) {
    "use strict";
    return function() {
        function n() {
            t.call(this)
        }

        function l() {
            c.hasClass("backgroundScrollFix") || (r = o(window).scrollTop(), c.addClass("backgroundScrollFix"))
        }

        function s() {
            c.hasClass("backgroundScrollFix") && (o(window).scrollTop(r), c.removeClass("backgroundScrollFix"))
        }
        var t = i(),
            r = 0,
            c = o("body,html");
        return n.onPosition = t.onPosition = function() {
            o(this.container).css({
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                height: "100%",
                width: "auto",
                overflowX: "hidden",
                overflowY: "scroll"
            }).addClass("fullscreen"), l()
        }, n.offPosition = t.offPosition = function() {
            o(this.container).removeClass("fullscreen"), s()
        }, n
    }
});
define("overlays/options/closeOnScrollPastElement", ["babel/babel-helpers", "lib/jquery-amd", "api-mod", "utils/throttle"], function(n, t, e, o) {
    "use strict";
    return function(n, i, r) {
        return function() {
            var s = this,
                c = o(function() {
                    r && t(s.container).css("z-index", t(n).css("z-index") - 1), s.hide("scroll_past_position")
                }, i),
                l = function() {
                    if (t(n).length) {
                        var e = s.container.getBoundingClientRect().bottom,
                            o = t(n).position().top + t(n).outerHeight(!0);
                        e <= o && c()
                    }
                };
            this.on("show", function() {
                return e.addEvent(document, "scroll", l)
            }).on("hide", function() {
                return e.removeEvent(document, "scroll", l)
            })
        }
    }
});
define("overlays/AnimatedOverlay", ["babel/babel-helpers", "overlays/Overlay", "lib/jquery-amd"], function(t, o, e) {
    "use strict";
    var i = function(o) {
        function i(o, e, r) {
            var s;
            t.classCallCheck(this, i);
            for (var n = arguments.length, l = Array(n > 3 ? n - 3 : 0), h = 3; h < n; h++) l[h - 3] = arguments[h];
            var a = t.possibleConstructorReturn(this, (s = i.__proto__ || Object.getPrototypeOf(i)).call.apply(s, [this, o].concat(l)));
            return a.showAnimation = e, a.hideAnimation = r, a.origOverlayPos = void 0, a.lock = !1, a
        }
        return t.inherits(i, o), t.createClass(i, [{
            key: "getPositionProps",
            value: function() {
                var t = e(this.sourceElement).offset(),
                    o = e(this.sourceElement).outerWidth(),
                    i = e(this.sourceElement).outerHeight();
                return {
                    top: t.top,
                    left: t.left,
                    right: e(window).width() - (t.left + o),
                    width: o,
                    height: i
                }
            }
        }, {
            key: "hide",
            value: function(o) {
                var e = this;
                return this.lock || (this.lock = !0, this.hideAnimation(this.origOverlayPos).then(function() {
                    e.origOverlayPos = void 0, t.get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "hide", e).call(e, o), e.lock = !1
                }).catch(function() {
                    e.lock = !1
                })), this
            }
        }, {
            key: "show",
            value: function(o) {
                var e = this;
                return this.lock || (this.lock = !0, this.origOverlayPos = o, t.get(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "show", this).call(this), this.showAnimation(this.origOverlayPos, Array.prototype.slice.call(arguments, 1)).then(function() {
                    e.lock = !1
                }).catch(function() {
                    e.lock = !1
                })), this
            }
        }]), i
    }(o);
    return i
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "trip_search_geopill", "handlers", ["handlers"]);
    t(["placement", "lib/jquery-amd", "common/Radio", "utils/throttle", "ta/Core/TA.Record", "styleguide/overlays/Flyout", "overlays/support/placement", "typeahead/TypeAhead", "typeahead/support/bindToElement", "typeahead/query/remote", "typeahead/query/noResults", "typeahead/query/prefill/nearby", "typeahead/query/prefill/default", "typeahead/query/recentOrPopPrefill", "typeahead/query/geonavi", "typeahead/views/inline", "typeahead/ux/selectResult", "typeahead/options/showResultsOnFocus", "typeahead/options/noInputNoResults", "typeahead/support/tracking", "utils/urlutils", "utils/geolocation", "ta/Core/TA.FireEvent", "utils/responsive", "overlays/position/base", "overlays/Overlay", "overlays/styles/default", "overlays/options/highlightElement", "overlays/position/conditional", "overlays/position/fullscroll", "overlays/support/radio", "overlays/ux/elementToggle", "overlays/options/closeOnDocClick", "overlays/options/closeOnEscape", "overlays/options/closeOnScrollPastElement", "overlays/AnimatedOverlay", "overlays/styles/windowshade"], function(e, t, i, n, o, a, r, l, s, d, u, c, p, f, h, g, v, m, y, w, b, _, x, C, k, E, R, T, G, I, L, O, P, H, U, q, S) {
        function D() {
            if (se) {
                var e = document.body.getBoundingClientRect(),
                    t = se.getBoundingClientRect();
                ce = t.top - e.top + 30
            }
        }

        function N() {
            return !!t(".geosearch_overlay.fullscreen").length
        }

        function A(e, t, i) {
            return se && ae(e, se, t, i), null
        }

        function B() {
            D(), window.pageYOffset > ce ? pe.trigger("hide-on-header", !1) : pe.trigger("hide-on-header", !0), N() || (de = t(window).scrollTop())
        }

        function F(e) {
            var n = i("tripsearch-geo-pill");
            e ? se.dataset.masterGeopill && n.on("navigate-with-quick-link", function(t, i, n) {
                if (i && i.buildGeoUrl) {
                    var o = i.buildGeoUrl(e);
                    o && (window.location.href = o)
                } else A(t, null, n)
            }) : n.on("navigate-with-quick-link", A), se && !se.dataset.masterGeopill && t(se).on("click", function(e) {
                n.trigger("open-flyout", e, null, se)
            })
        }

        function V() {
            pe.on("hide-on-header", function(e) {
                t(se).parent().toggleClass("hidden", e)
            })
        }

        function j(e, i) {
            return i && e !== i && t(".geopill-slave").is(":visible")
        }

        function M(e) {
            var i = e.result_object,
                n = i.ancestors.slice(0, 2).map(function(e) {
                    return e.name
                }).join(", "),
                o = t("<span/>").text(n).get(0),
                a = t("<div/>").attr("data-id", i.location_id).text(i.name).append(o);
            return a.get(0)
        }

        function z(e) {
            var i = t("<div/>").text(e.details.name);
            if (e.details.parent_ids.length > 1) {
                var n = e.details.parent_name;
                e.details.parent_ids[1] > 1 && (n += ", " + e.details.grandparent_name);
                var o = t("<span/>").text(n);
                i.append(o)
            }
            return i.get(0)
        }

        function W(e, t, i) {
            i ? (e.removeClass("hidden"), t[0].disabled = "disabled", setTimeout(function() {
                W(e, t, !1)
            }, 1e4)) : (e.addClass("hidden"), t[0].disabled = "")
        }

        function Y(e) {
            return e.match(/(\/[\w_]+).*/)[1]
        }

        function J(e, t) {
            if (t)
                if (t.buildGeoUrl) {
                    var i = t.buildGeoUrl(e);
                    if (i) return i
                } else if ("string" == typeof t) return t + encodeURIComponent(e);
            return "/Home-g" + encodeURIComponent(e)
        }

        function K(e, t, i) {
            if (i && i.buildLatLongUrl) {
                var n = i.buildLatLongUrl(e, t);
                if (n) return n
            }
            return "/?latitude=" + encodeURIComponent(e) + "&longitude=" + encodeURIComponent(t)
        }

        function Q() {
            t(window).width() !== me && (me = t(window).width(), this.emit("positionDirty"))
        }

        function X() {
            var e = Q.bind(this);
            this.on("show", function() {
                window.addEventListener("resize", e)
            }).on("hide", function() {
                window.removeEventListener("resize", e)
            })
        }

        function Z() {
            var e = k();
            return e.onPosition = function() {
                var e = $(t(this.sourceElement)),
                    i = this.origOverlayPos ? Math.round(window.pageYOffset) + 120 : e.top,
                    n = (ge - e.width) / 2;
                t(this.container).css({
                    position: "absolute",
                    top: i + "px",
                    left: e.left - n + "px",
                    right: e.left - n + "px",
                    bottom: "auto",
                    zIndex: ""
                })
            }, e
        }

        function $(e) {
            var i = e.offset(),
                n = e.outerWidth(),
                o = e.outerHeight();
            return {
                top: i.top,
                left: i.left,
                right: t(window).width() - (i.left + n),
                width: n,
                height: o
            }
        }

        function ee(e, i) {
            var n = t(this.sourceElement),
                o = t(this.container),
                a = t.Deferred();
            if (C.mobile()) o.css({
                opacity: 1
            }), a.resolve();
            else {
                var r = this.getPositionProps(n),
                    l = (ge - r.width) / 2;
                if (e) {
                    var s = o.children(".body_text").outerHeight(),
                        d = i ? Math.round(window.pageYOffset) + 120 : r.top;
                    o.css({
                        left: e.left,
                        right: e.right,
                        top: e.top,
                        height: 0,
                        opacity: 0
                    }), o.animate({
                        left: r.left - l + "px",
                        right: r.left - l + "px",
                        height: s + 4 + "px",
                        top: d + "px",
                        opacity: 1
                    }, 150, "swing", function() {
                        o.css({
                            height: "auto"
                        }), a.resolve()
                    })
                } else o.css({
                    left: r.left,
                    right: r.right,
                    height: r.height,
                    opacity: 0
                }), o.animate({
                    left: r.left - l + "px",
                    right: r.left - l + "px",
                    opacity: 1
                }, 150, "swing", function() {
                    setTimeout(function() {
                        o.animate({
                            height: o.children(".body_text").outerHeight() + 4 + "px"
                        }, 150, "swing", function() {
                            o.css({
                                height: "auto"
                            }), a.resolve()
                        })
                    }, 150)
                })
            }
            return a.promise()
        }

        function te(e) {
            var i = t.Deferred(),
                n = t(this.container);
            if (C.mobile()) i.resolve();
            else {
                var o = this.getPositionProps();
                e ? n.animate({
                    left: e.left + "px",
                    top: e.top + "px",
                    height: 0,
                    width: 0,
                    opacity: 0
                }, 150, "swing", function() {
                    n.css({
                        width: "auto",
                        height: "auto"
                    }), i.resolve()
                }) : n.animate({
                    height: o.height + "px"
                }, 150, "swing", function() {
                    setTimeout(function() {
                        n.animate({
                            left: o.left + "px",
                            width: o.width,
                            opacity: 0
                        }, 150, "swing", function() {
                            n.css({
                                width: "auto",
                                height: "auto"
                            }), i.resolve()
                        })
                    }, 150)
                })
            }
            return i.promise()
        }

        function ie(e, i, n) {
            var o;
            return n && n !== i && (o = $(t(n))), new q(i, ee, te, R(i, "ui_flyout geosearch_overlay"), G(C.mobile, I(), Z()), C.mobile() ? function() {} : S("dark second-layer"), T, O(e, i), le || C.mobile() ? function() {} : P, H, le || C.mobile() ? function() {} : U(".global-nav", 100, !0), L.hide(), L.announce(), X, Array.prototype.slice.call(arguments, 3)).show(o, j(i, n))
        }

        function ne(n, a, c, b) {
            var C = t(a);
            he = c;
            var k = C.data("recentlyViewedHeader"),
                E = C.data("popDestinationsHeader"),
                R = C.data("noResults"),
                T = C.data("id"),
                G = C.data("locationLabel"),
                I = C.data("locationDeniedLabel"),
                L = T ? C.data("homepageLabel") : "",
                O = ie(n, a, b, r(e)),
                P = t(O.contentElement),
                H = P.find(".geopill_page_transition_spinner"),
                U = P.find(".ui_underline"),
                q = P.find("input[type=text]").on("keyup", function() {
                    U.text(t(this).val())
                });
            q.val("");
            var S = function() {
                    q.focus(), he || o.trackEventOnPage("HomeNav_" + window.pageServlet, "click", "GeoPicker")
                },
                D = function() {
                    he = null, window.scrollTo(0, de)
                };
            O.on("show", S), O.on("hide", D), S();
            var N = i("tripsearch-geo-pill");
            N.on("open-flyout", function(e, i, n) {
                he = i, O.isOpen() || O.show($(t(n)), j(a, n))
            }), pe.trigger("update-scroll-state");
            var A = e.params.searchSessionId,
                B = window.location.pathname;
            B ? (B = B.substring(1), B = B.replace(/-.*/, "_geopicker")) : B = "geopicker";
            var F = w(B, A),
                V = _.canRequestLocation();
            V || (G = "");
            var Q = new l({
                searchDelay: 50
            }, function() {
                this.on("results", function(e, t) {
                    var i = t.findIndex(function(e) {
                        return e.value === T
                    });
                    i >= 0 && t.splice(i, 1)
                })
            }, g(P.find(".ui_flyout_results")[0], function(e) {
                var i;
                if (e.sectionTitle) {
                    var n = e.noResults ? "no_results" : "section";
                    i = t('<div class="' + n + '">' + e.sectionTitle + "</div>")[0]
                } else if (e.loading) i = t("<div>").addClass("ui_spinner small section").get(0);
                else if (e.nearby) i = t("<div/>").text(e.name).addClass("ui_icon nearby-fill").get(0);
                else if (e.homepage) i = t("<div/>").text(e.name).addClass("ui_icon globe-world").get(0);
                else if (e.recentlyViewed) i = M(e);
                else if (e.geonavi) {
                    var n = "geonavi";
                    e.back ? n += " ui_icon single-chevron-left" : e.navi && (n += " ui_icon single-chevron-right"), i = t("<div/>").text(e.name).addClass(n).get(0)
                } else i = z(e);
                return i && (t(i).filter("div").addClass("resultDiv"), t("div", i).addClass("resultDiv"), t("span", i).addClass("resultSpan")), i
            }), s(q[0]), m(), y(), G || L ? p(function() {
                return !he || he.canBuildLatLongUrl && he.canBuildLatLongUrl() ? G : null
            }, L) : function() {}, C.data("geonavi-enabled") ? h() : function() {}, f({
                recentHeader: k,
                popHeader: E,
                categories: ["geos"],
                limit: 7
            }), d.Geo_Caching(function() {
                return {
                    filter: "",
                    name_depth: 1,
                    details: !0,
                    max: 8,
                    uiOrigin: F.getWidgetName(),
                    source: F.getWidgetName(),
                    startTime: F.getInteractionStart(),
                    searchSessionId: F.getSearchSessionId()
                }
            }), u([{
                sectionTitle: R,
                skip: !0,
                selectable: !1,
                noResults: !0
            }]), v(v.MODE_SUFFICIENT), F.mixin).on("selected", function(e, t) {
                var i;
                if (e.recentlyViewed) i = J(e.result_object.location_id, he), o.setEvtCookie("HomeNav_" + window.pageServlet, "submit_recent", "GeoPicker", 0, Y(i));
                else if (e.homepage) i = "/", o.setEvtCookie("HomeNav_" + window.pageServlet, "submit_recent", "GeoPicker", 0, "/Home");
                else {
                    if (e.nearby) return W(H, q, !0), void _.requestLocation(function(e) {
                        var t = K(e.latitude, e.longitude, he);
                        t && (window.location = t)
                    }, function(e) {
                        I && alert(I), W(H, q, !1)
                    });
                    if (!e.value) return;
                    i = J(e.value, he), o.setEvtCookie("HomeNav_" + window.pageServlet, "submit", "GeoPicker", 0, Y(i)), F.trackEventViaMEVTCookie("search", t, e)
                }
                W(H, q, !0), x.fireEvent("geopill_change", i), window.location = i
            });
            Q.emit("emptyInput", q[0])
        }

        function oe(e, i, n, o) {
            ve = !!t(i)[0].dataset.masterGeopill, ve && ne(e, i, n, o)
        }

        function ae(e, t, i, n) {
            we || t.dataset.masterGeopill ? we ? ye.trigger("open-flyout", e, i, n) : (new oe(e, t, i, n), we = !0) : (ye.trigger("init", e, i, n), we = !0)
        }
        var re, le, se, de = 0,
            ue = document.getElementById(e.id),
            ce = 0;
        ue && (se = ue.getElementsByClassName("global-nav-geopill")[0], se && (re = se.getAttribute("data-id"), le = se.getAttribute("data-is-tablet"), D())), F(re);
        var pe = i("tripsearch-scroll-geo-pill");
        if (se.dataset.masterGeopill) {
            var fe = n(B, 100);
            t(window).scroll(function() {
                fe()
            }), pe.on("update-scroll-state", B)
        } else V();
        var he = null,
            ge = 500,
            ve = !1,
            me = t(window).width(),
            ye = i("tripsearch-geo-pill");
        se.dataset.masterGeopill && ye.on("init", function(e, t, i) {
            ae(e, se, t, i)
        });
        var we = !1;
        return {
            init: ae
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "sponsored_home_hero", "handlers", ["handlers"]);
    t(["placement", "common/trackingStreams"], function(e, t) {
        function n(e, t) {
            var n = document.createElement("source");
            return n.type = e, n.src = "https://media-cdn.tripadvisor.com" + t, n
        }

        function o(e) {
            var t = document.createElement("video");
            return t.classList.add("home_img"), t.muted = !0, t.setAttribute("muted", "muted"), t.setAttribute("preload", "auto"), t.setAttribute("loop", "loop"), t.setAttribute("poster", e.videoSrcPoster), e.videoSrcWebm && t.appendChild(n("video/webm", e.videoSrcWebm)), t.appendChild(n("video/mp4", e.videoSrcMP4)), t
        }

        function i() {
            if (w) {
                var e = [].slice.call(document.querySelectorAll(".social_home_feed .is-4 .ui_card a"));
                if (e.length) {
                    var t = document.createElement("div");
                    t.className = "sprLabel", t.innerHTML = g;
                    var n = e.filter(function(e) {
                        return e.innerHTML.indexOf(w) > -1
                    });
                    n.forEach(function(e) {
                        e.appendChild(t.cloneNode(!0))
                    })
                }
            }
        }

        function r(e) {
            t.error(e)
        }

        function a(e, n) {
            var o = v;
            o += n ? "|" + n : "", t.trackEvent(_, e, o, window.pageYOffset, !0)
        }

        function c(e) {
            for (; e && "A" != e.tagName;) e = e.parentNode;
            return e
        }

        function d(e) {
            var n, o = "heroClick",
                i = e.target;
            n = i && i.closest ? i.closest("span.spr") : c(i);
            var r = !n.getAttribute("data-new_win"),
                a = n.getAttribute("data-clk-ref");
            t.trackEvent(_, o, a, 0, !1), r ? window.location.href = atob(n.getAttribute("data-clk-dest")) : window.open(atob(n.getAttribute("data-clk-dest")), "_blank")
        }

        function s() {
            var e = "inView:";
            if (h && h.getBoundingClientRect) {
                var t = parseInt(h.offsetHeight / 2, 10);
                return e += window.pageYOffset <= t
            }
            return e + "unsupported"
        }

        function u(e, t, n) {
            r(n)
        }

        function l(e) {
            e.addEventListener("play", function() {
                a("videoPlay", s()), window.setTimeout(function() {
                    a("video4sec", s())
                }, 4e3)
            })
        }

        function f() {
            var e = document.querySelector('.social_home_feed .ui_card.section a[class^="social-suggested-followees"]'),
                t = document.querySelector(".social_home_feed .ui_card.section button");
            e && e.href.indexOf(w) > 0 && (e.addEventListener("click", function() {
                a("sug_prf_clk")
            }), t.addEventListener("click", function() {
                a("sug_flw_clk")
            }))
        }

        function m(e, t, n) {
            p = n.videoEnabled, w = n.profileName, v = n.sponsorLabel, h = document.querySelector(".homeHero");
            var c = p ? "vid_shown" : "img_shown";
            a(c, s()), window.setTimeout(i, 1e3);
            try {
                if (p) {
                    var d = h.querySelector(".ui_container");
                    if (d) {
                        var u = o(n);
                        h.insertBefore(u, d), u.style.display = "block", u.classList.add("stackTop"), l(u), window.setTimeout(function() {
                            u.play()
                        }, 100)
                    } else r("homeHero element not found, video skipped")
                } else window.setTimeout(function() {
                    a("image4sec", s())
                }, 4e3);
                window.setTimeout(function() {
                    f()
                }, 1e3)
            } catch (e) {
                r("load error:" + e.message)
            }
        }
        var p, v, w, h, _ = "spr_hero",
            g = "Sponsored";
        return {
            init: m,
            loadError: u,
            sprClick: d
        }
    })
});
require(["ta/p13n/placements"], function(a) {
    var r = a.define.bind(a, "attraction_promo_header", "handlers", ["handlers"]);
    r(["placement", "ta", "lib/jquery-amd"], function(a, r, e) {
        var t = function(a) {
                return e(".attraction_promo_header").find(".ui_modal_card").addClass("is-active"), r.trackEventOnPage("attraction_promo_click", "terms", "", a, !1), !1
            },
            n = function(a) {
                return e(".attraction_promo_header").find(".ui_modal_card").removeClass("is-active"), !1
            };
        return {
            showPromoTermsDialog: t,
            hidePromoTermsDialog: n
        }
    })
});
require(["ta/p13n/placements"], function(n) {
    var e = n.define.bind(n, "attractions_near_you_link", "handler", ["handler"]);
    e(["placement", "ta/util/Element"], function(n, e) {
        "use strict";
        e.trackWhenScrolledIntoView("#" + n.id, ["rebrand_attractions_lander_near_you", "in_view"])
    })
});
define("cpm/BannerResizeHandler", ["utils/throttle", "utils/responsive", "common/trackingStreams"], function(e, r, t) {
    "use strict";

    function n() {
        a(), s || (window.addEventListener("resize", e(a, 300)), s = !0)
    }

    function i(e) {
        if (e && e.getAttribute("data-size")) try {
            var r = JSON.parse(e.getAttribute("data-size")),
                n = [].concat.apply([], r);
            return n.indexOf(o) > -1
        } catch (e) {
            t.error(e, "Error parsing banner ad size")
        }
        return !1
    }

    function a() {
        var e = document.querySelectorAll(".ppr_priv_header_banner_ad, .ppr_priv_footer_banner_ad, .ppr_priv_banner_ad");
        if (e.length) try {
            for (var n = r.mobile(), a = 0; a < e.length; a++) {
                for (var s = e[a], o = s.querySelectorAll(".gptAd"), d = !1, c = 0; c < o.length; c++) {
                    var l = o[c];
                    n === !i(l) ? (d = !0, l.classList.remove("hidden"), l.classList.remove("inactive")) : (l.classList.add("hidden"), l.classList.add("inactive"))
                }
                s.classList.toggle("hidden", !d)
            }
        } catch (e) {
            t.error(e, "Error handling responsive header/footerbanners")
        }
    }
    var s = !1,
        o = 728,
        d = {};
    return d.init = n, d
});
require(["ta/p13n/placements"], function(n) {
    var e = n.define.bind(n, "footer_banner_ad", "handlers", ["handlers"]);
    e(["placement", "cpm/BannerResizeHandler"], function(n, e) {
        e.init()
    })
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "homepage_hero", "handlers", ["handlers"]);
    n(["placement"], function(e) {
        "use strict";

        function n(e, n, r) {
            require(["trjs!ta/Core/TA.Record"], function(t) {
                t.setEvtCookie(window.pageServlet, e, n, 0, r)
            })
        }
        return {
            clicked: n
        }
    })
});
define("shelves/shelfEventHandlers", ["lib/jquery-amd", "ta", "ta/util/Element", "utils/urlDecoder"], function(n, e, t, i) {
    "use strict";

    function l(n) {
        var t = n.getAttribute("data-tpp"),
            i = n.getAttribute("data-tpact") || "shelf_in_view",
            l = n.getAttribute("data-tpatt"),
            c = n.getAttribute("data-tpid");
        e.trackEventOnPage(t, i, l, c)
    }

    function c() {
        var e = n(".shelf_title");
        e && e.each(function(n) {
            var i = e[n];
            I.indexOf(i) === -1 && t.isScrolledIntoView(i) && (l(i), I.push(i))
        })
    }

    function a() {
        c()
    }

    function o(n, e) {
        e ? window.location = i.getUrl(n) : window.open(i.getUrl(n), "_blank")
    }

    function r(n, t) {
        e.SHELF_EVENT_INITIALIZED || (e.SHELF_EVENT_INITIALIZED = {}), e.SHELF_EVENT_INITIALIZED[n] || (t(), e.SHELF_EVENT_INITIALIZED[n] = !0)
    }

    function u() {
        f(), s(), _(), E(), v()
    }

    function f() {
        r("scrollEvent", function() {
            a(), window.addEventListener("scroll", c)
        })
    }

    function s() {
        r("seeAllTracking", function() {
            e.on("track_shelf_see_all_click_event", function(n, e) {
                l(e)
            })
        })
    }

    function E() {
        r("seeAllItemTracking", function() {
            e.on("track_shelf_item_click_event", function(n, e) {
                l(e)
            })
        })
    }

    function _(n) {
        r("seeAllEventHandlers", function() {
            e.on("shelf_see_all_click_event", function(e, t, i, c) {
                new Event(e).preventDefault(), c || l(t), n ? n(e, t) : o(t, i)
            })
        })
    }

    function v(n) {
        r("seeAnItemEventHandlers", function() {
            e.on("shelf_item_click_event", function(e, t, i, c) {
                new Event(e).preventDefault(), c || l(t), n ? n(e, t) : o(t, i)
            })
        })
    }
    var I = [];
    return {
        initShelfListeners: u,
        initSeeAllTracking: s,
        initSeeAnItemTracking: E,
        initSeeAllEventHandlers: _,
        initSeeAnItemEventHandlers: v,
        initScrollEvent: f
    }
});
define("shelves/ShelfItemPricing", ["lib/jquery-amd"], function(t) {
    "use strict";

    function e(e, a, o) {
        this.locationIds = e, this.visit_date = a, this.visit_length = parseInt(o) + 1, this.poll_number = -1, this.last_received_seq = -1;
        var r = "/data/1.0/shelves/price",
            l = require("page-model").JS_SECURITY_TOKEN;
        this.requestPricings = function(e) {
            var a = function() {
                this.poll_number += 1, this.poll_number + 1 >= s || t.ajax({
                    url: r,
                    contentType: "application/json",
                    method: "POST",
                    type: "POST",
                    data: JSON.stringify({
                        data: [{
                            "items": n(this.locationIds),
                            "visit_date": this.visit_date,
                            "visit_length": this.visit_length,
                            "poll_number": this.poll_number
                        }]
                    }),
                    context: this,
                    beforeSend: function(t) {
                        t.setRequestHeader("X-Requested-By", l)
                    }
                }).done(function(s) {
                    var n = s.data[0],
                        o = [];
                    t.each(n.items, function(t, e) {
                        "IN_PROGRESS" === e.pricing_status && o.push(e.location_id)
                    }), this.last_received_seq < n.poll_number && (this.last_received_seq = n.poll_number, this.locationIds = o, e(n, this.last_received_seq)), o.length > 0 && setTimeout(a, i)
                })
            }.bind(this);
            a()
        }
    }
    var i = 1500,
        s = 10,
        n = function(e) {
            return t.map(e, function(t) {
                return {
                    "id": t,
                    "location_id": t
                }
            })
        };
    return e
});
require(["ta/p13n/placements"], function(e) {
    var i = e.define.bind(e, "homepage_shelves", "handlers", ["handlers"]);
    i(["placement", "ta/Core/TA.Event", "ta/Core/TA.Store", "ta/Core/TA.Record", "lib/jquery-amd", "shelves/shelfEventHandlers", "shelves/ShelfItemPricing"], function(e, i, n, t, a, o, s) {
        function r() {
            if (window.removeEventListener("resize", d), a(window).width() >= 760) {
                var e = a(v);
                if (e.length) {
                    var n = {
                        elemIds: [],
                        isNewContext: !0
                    };
                    e.each(function(e, i) {
                        n.elemIds.push(i.id)
                    }), i.fireEvent("ads.queueForInjection", n), f = !0
                }
            }
            window.addEventListener("resize", d)
        }

        function d() {
            !f && a(window).width() >= 760 && r();
            var e = a(v).parent();
            a(window).width() >= 760 && e.hasClass("hidden") && (e.removeClass("hidden inactive"), i.fireEvent("homePageBannerRefresh")), e.toggleClass("hidden inactive", a(window).width() < 760)
        }

        function h() {
            var e = [],
                i = {},
                n = a(".travel_info"),
                t = n.data("visitdate"),
                o = n.data("visitlength");
            t && o && a(".poi.hac_item").each(function() {
                var n = a(this).data("locationid");
                i[n] || (e.push(n), i[n] = !0)
            }), e.length > 0 && c(e, t, o)
        }

        function l() {
            window.googletag && googletag.apiReady ? r() : i.on("ads.initialized", r)
        }

        function c(e, i, n) {
            var t = new s(e, i, n);
            t.requestPricings(function(e, i) {
                for (var n = e.items, t = 0; t < n.length; t++) {
                    var o = n[t],
                        s = o.location_id,
                        r = o.pricing_string,
                        d = o.pricing_status;
                    a(".hac_item .hac_" + s).each(function() {
                        "COMPLETED" === d && (a(this).find("span").html(r + "*"), a(this).show())
                    })
                }
            })
        }
        var v = ".gptAd",
            f = !1;
        o.initSeeAllEventHandlers(), o.initSeeAllTracking(), h(), l()
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "popular_cruises", "handlers", ["handlers"]);
    a(["placement", "lib/jquery-amd", "ta/Core/TA.Record"], function(e, a, n) {
        function s(e) {
            var n = a(e),
                s = n.find(".ui_icon");
            s.is(":hidden") || (s.hasClass("caret-down") ? (s.removeClass("caret-down").addClass("caret-up"), n.addClass("expanded"), n.nextUntil(".sectionTitle").addClass("expanded")) : s.hasClass("caret-up") && (s.removeClass("caret-up").addClass("caret-down"), n.removeClass("expanded"), n.nextUntil(".sectionTitle").removeClass("expanded")))
        }
        return {
            toggleCollapsible: s,
            trackCruiseClick: n.trackEventOnPage
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "popular_cuisines", "handlers", ["handlers"]);
    a(["placement", "lib/jquery-amd"], function(e, a) {
        function n(e) {
            var n = a(e),
                s = n.find(".ui_icon");
            s.is(":hidden") || (s.hasClass("caret-down") ? (s.removeClass("caret-down").addClass("caret-up"), n.addClass("expanded"), n.nextUntil(".sectionTitle").addClass("expanded")) : s.hasClass("caret-up") && (s.removeClass("caret-up").addClass("caret-down"), n.removeClass("expanded"), n.nextUntil(".sectionTitle").removeClass("expanded")))
        }
        return {
            toggleCollapsible: n
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "popular_destinations", "handlers", ["handlers"]);
    a(["placement", "lib/jquery-amd"], function(e, a) {
        "use strict";

        function n(e, n) {
            var s = a(e),
                d = s.find(".ui_icon");
            d.is(":hidden") || (d.hasClass("caret-down") ? (d.removeClass("caret-down").addClass("caret-up"), s.addClass("expanded"), n ? s.parent().find(".item").addClass("expanded") : s.nextUntil(".sectionTitle").addClass("expanded")) : d.hasClass("caret-up") && (d.removeClass("caret-up").addClass("caret-down"), s.removeClass("expanded"), n ? s.parent().find(".item").removeClass("expanded") : s.nextUntil(".sectionTitle").removeClass("expanded")))
        }

        function s(e) {
            a(e).parents(".section").toggleClass("expanded")
        }
        return {
            toggleCollapsible: n,
            toggleMore: s
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "popular_hotels", "handlers", ["handlers"]);
    a(["placement", "lib/jquery-amd"], function(e, a) {
        function n(e) {
            var n = a(e),
                s = n.find(".ui_icon");
            s.is(":hidden") || (s.hasClass("caret-down") ? (s.removeClass("caret-down").addClass("caret-up"), n.addClass("expanded"), n.nextUntil(".sectionTitle").addClass("expanded")) : s.hasClass("caret-up") && (s.removeClass("caret-up").addClass("caret-down"), n.removeClass("expanded"), n.nextUntil(".sectionTitle").removeClass("expanded")))
        }
        return {
            toggleCollapsible: n
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "popular_vacation_rentals", "handlers", ["handlers"]);
    a(["placement", "lib/jquery-amd", "ta/Core/TA.Record"], function(e, a, n) {
        function s(e) {
            var n = a(e),
                s = n.find(".ui_icon");
            s.is(":hidden") || (s.hasClass("caret-down") ? (s.removeClass("caret-down").addClass("caret-up"), n.addClass("expanded"), n.nextUntil(".sectionTitle").addClass("expanded")) : s.hasClass("caret-up") && (s.removeClass("caret-up").addClass("caret-down"), n.removeClass("expanded"), n.nextUntil(".sectionTitle").removeClass("expanded")))
        }
        return {
            toggleCollapsible: s,
            trackCityClick: n.trackEventOnPage
        }
    })
});
require(["ta/p13n/placements"], function(t) {
    var e = t.define.bind(t, "top_restaurants_near", "handlers", ["handlers"]);
    e(["placement", "ta", "ta/Core/TA.Event", "ta/Core/TA.Record"], function(t, e, r, a) {
        function n(t) {
            return t && t.getAttribute && !!t.getAttribute("data-tpp")
        }

        function i(t) {
            return n(t) ? {
                "property": t.getAttribute("data-tpp"),
                "action": t.getAttribute("data-tpact"),
                "attrib": t.getAttribute("data-tpatt"),
                "pid": t.getAttribute("data-tpid")
            } : null
        }

        function p(t, e) {
            var r = i(e);
            r && e.href && a.setEvtCookie(r.property, r.action, r.attrib, r.pid, e.href)
        }
        return {
            trackShelfSeeAllClick: p
        }
    })
});
require(["ta/p13n/placements"], function(n) {
    var e = n.define.bind(n, "vr_lander_blog_link", "handlers", ["handlers"]);
    e(["placement", "ta/Core/TA.Record", "vanillajs"], function(n, e, a) {
        return {
            trackBlogClick: e.trackEventOnPage
        }
    })
});
require(["ta/p13n/placements"], function(n) {
    var e = n.define.bind(n, "vr_lander_popular_destinations", "handlers", ["handlers"]);
    e(["placement", "ta/Core/TA.Record", "vanillajs"], function(n, e, a) {
        return {
            trackCardClick: e.trackEventOnPage
        }
    })
});
define("mobile/lite/ajax-request", ["utils/json-to-url", "vanillajs"], function(t) {
    function e(t) {
        var e = document.createElement("a");
        return e.href = t, e.protocol !== window.location.protocol || e.host !== window.location.hostname
    }
    return function(s, o) {
        "object" == typeof s && (o = s, s = o.url), o = o || {};
        var n = o.method || o.type || "GET",
            r = "string" == typeof o.data ? o.data : t(o.data);
        return new Promise(function(t, a) {
            var i = new XMLHttpRequest;
            i.onreadystatechange = function() {
                this.readyState === XMLHttpRequest.DONE && (200 === this.status ? (o.success && o.success(this.responseText, this.status, i), t(this.responseText)) : (o.error && o.error(i, this.status, this.statusText), a(this.responseText)), o.complete && o.complete(i, this.statusText))
            }, "get" == n.toLowerCase() && "string" == typeof r && r.length > 0 && (s += ("?" == r[0] ? "" : "?") + r, r = null), i.open(n, s, !o.synchronous), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e(s) || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(r)
        })
    }
});
define("utils/cookieutils", ["vanillajs", "mobile/lite/ajax-request"], function(t, e) {
    "use strict";
    var o = function(t) {
            return "undefined" != typeof t && null !== t
        },
        n = function(t) {
            return t.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
        },
        i = function() {
            var t = window.location.host.match(/\.tripadvisor\..*/);
            return null != t ? t = t[0] : null
        },
        a = function(t, e, n) {
            if (o(n.doNotEscape) && n.doNotEscape || (e = encodeURIComponent(e)), e += n.domain ? "; domain=" + n.domain : "; domain=" + i(), n.path && (e += "; path=" + n.path), n.duration) {
                var a = new Date;
                a.setTime(a.getTime() + 1e3 * n.duration), e += "; expires=" + a.toGMTString()
            }
            n.secure && (e += "; secure");
            var r = "%1%";
            o(n.ignoreVersion) && n.ignoreVersion && (r = ""), document.cookie = t + "=" + r + e
        };
    return {
        addPidToCookie: function(t) {
            o(t) && 0 !== t.length && a("NPID", t, {
                path: "/",
                duration: 5,
                ignoreVersion: !0
            })
        },
        roybatty: function() {
            var t, o = i(),
                n = window.taSecureToken;
            if (window.taEarlyRoyBattyStatus) window.taEarlyRoyBattyStatus > 1 && ta && ta.trackEventOnPage && ta.trackEventOnPage("early_roy_batty", "confirm", "", 0, !0);
            else if (t = this.getCookie("roybatty")) {
                var a = t.split(",");
                if (a && 2 == a.length) {
                    var r = parseInt(a[1], 10);
                    document.setCookie("roybatty", n + "," + r, {
                        domain: o,
                        ignoreVersion: !0,
                        path: "/"
                    })
                }
            } else document.setCookie("roybatty", n + ",1", {
                domain: o,
                ignoreVersion: !0,
                path: "/"
            }), e({
                method: "POST",
                url: "/CookiePingback"
            })
        },
        getCookie: function(t) {
            var e = document.cookie.match("(?:^|;)\\s*" + n(t) + "=([^;]*)");
            return e ? (e = e[1], 0 === e.indexOf("%1%") && (e = e.substring(3)), decodeURIComponent(e)) : null
        },
        setCookieInSeconds: a
    }
});
define("vr/shared/utility", ["ta", "utils/cookieutils", "utils/ajax", "utils/store", "utils/objutils", "utils/decoder"], function(e, t, o, n, d, a) {
    "use strict";
    var i = function() {},
        r = function(t) {
            if (!t) return t;
            switch (typeof t) {
                case "object":
                    t.puid = e.uid;
                    break;
                case "string":
                    t += "&puid=" + e.uid
            }
            return t
        },
        l = function(e) {
            var t = "VR_",
                o = e && e.length >= t.length && e.substring(0, 3) === t;
            return o ? e : t + e
        },
        c = function(e, t, o) {
            var d = r({});
            "/ActionRecord?action=" + l(e);
            return d.action = l(e), "undefined" != typeof modelGeoId && null != modelGeoId && "" != modelGeoId ? d.geo = modelGeoId : n.has("ftl.geoId") && n.get("ftl.geoId") && (d.geo = n.get("ftl.geoId")), t && t > 0 && (d.pid = t), o && o > 0 ? d.detail = o : "undefined" != typeof modelLocId && null != modelLocId && "" != modelLocId ? d.detail = modelLocId : n.has("ftl.locId") && n.get("ftl.locId") && (d.detail = n.get("ftl.locId")), d
        },
        u = function(e, t, n, d) {
            var a = c(e, t, n);
            o({
                url: "/ActionRecord",
                data: a,
                method: "GET",
                success: d ? d : i
            })
        },
        s = function() {
            return document.getElementsByTagName("body")[0].getAttribute("data-partner-tracking-prefix")
        },
        y = function(e) {
            if (e) {
                var t = e.innerHTML,
                    o = f(t);
                if (!o) return !1;
                e.innerHTML = o, e.style.display = "block";
                var n = document.getElementById("payment-count-vehicle").dataset.content,
                    d = n.replace(t, o);
                return document.getElementById("payment-count-vehicle").dataset.content = d, !0
            }
            return !1
        },
        f = function(e) {
            var t = a.base64Decoder(e);
            return t.split("_")[1]
        };
    return {
        actionRecord: u,
        actionRecordWithPartner: function(e, t, o, n) {
            var d = s(),
                a = "" != d && "undefined" != typeof d ? d + "_" + e : e;
            u(a, t, o, n)
        },
        preventEventBubble: function(e) {
            e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
        },
        splitName: function(e) {
            var t = void 0;
            if ("string" == typeof e) {
                var o = e.trim().split(" ");
                o.length > 1 && (t = {
                    first: o.slice(0, o.length - 1).join(" "),
                    last: o[o.length - 1]
                })
            }
            return t
        },
        goToUrl: function(e, o, n) {
            e && e.trim() && (o && o > 0 && t.addPidToCookie(o), n ? window.open(e) : window.location = e)
        },
        addLocationAsReviewedInMemCachedCookie: function(e, t) {
            var n = "WAR_ADD_REVIEWED_LOCATION";
            o({
                url: "/VacationRentalsAjax",
                data: {
                    "a": n,
                    "locationId": e
                },
                method: "get",
                complete: t ? t : i
            })
        },
        addPuid: r,
        identify: function(e, t) {
            var o = 0;
            return e && e.length ? d.each(e, function(e, n) {
                if (!n.getAttribute("id")) {
                    do {
                        o++;
                        var d = t + "_" + o
                    } while (null != document.getElementById(d));
                    n.setAttribute("id", d)
                }
            }) : e
        },
        allowIfNumber: function() {
            var e = {
                backspace: 8,
                tab: 9,
                pageDown: 34,
                downArrow: 40,
                deleteKey: 46,
                slash: 47,
                colon: 58,
                aKey: 65,
                cKey: 67,
                vKey: 86,
                xKey: 88,
                sleep: 95,
                numPadStar: 106
            };
            return function(t) {
                e.slash < t.keyCode && t.keyCode < e.colon && !t.shiftKey && !t.altKey || e.sleep < t.keyCode && t.keyCode < e.numPadStar || t.keyCode == e.backspace || t.keyCode == e.tab || t.keyCode > e.pageDown && t.keyCode < e.downArrow || t.keyCode == e.aKey && t.metaKey || t.keyCode == e.cKey && t.metaKey || t.keyCode == e.vKey && t.metaKey || t.keyCode == e.xKey && t.metaKey || t.keyCode == e.deleteKey || t.preventDefault()
            }
        }(),
        unobfuscatePaymentCount: y
    }
});
require(["ta/p13n/placements"], function(e) {
    var t = e.define.bind(e, "vr_list_your_property", "handlers", ["handlers"]);
    t(["placement", "api-mod", "vr/shared/utility", "ta/Core/TA.Record", "vanillajs"], function(e, t, n, r, i) {
        var a = t.find(".get_listed_button_container"),
            o = t.retrieve(a, "url");
        return t.addEvent(a, "click", function() {
            n.actionRecord("GetListed_Lander", "", "", n.goToUrl(o))
        }), {
            trackListingButtonClick: r.trackEventOnPage
        }
    })
});
require(["ta/rollupAmdShim"], function(a) {
    a.install(["babel/babel-helpers", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/radioHelper", "photoviewer/tracking", "mobile/lite/image-loader", "utils/throttle", "utils/ajax", "ta/prwidgets", "api-mod", "ta/util/I18N", "common/trackingStreams", "utils/urlutils", "hotels/tracking/timing", "utils/responsive", "ta/common/Swipe", "common/Radio", "photoviewer/loader", "utils/browserutils", "utils/ResponsiveEvents", "responsive/text-resizer", "ta/Core/TA.Event", "ta/common/Repoll", "ta/Core/TA.FireEvent", "cpm/DblClickAPI", "ta/Core/TA.Store", "utils/safeCall"], ["page-model", "page-model", "page-model"])
});
if (window.requirejs && requirejs.taConfig) {
    requirejs.taConfig({
        deferred: {},
        name: "apg-HomeRebranded",
        files: {
            "js-amd": {
                lib: {
                    babel: {
                        "babel-helpers": 1
                    }
                },
                src: {
                    cpm: {
                        DblClickAPI: 1
                    },
                    common: {
                        trackingStreams: 1
                    },
                    utils: {
                        urlutils: 1,
                        throttle: 1,
                        browserutils: 1,
                        responsive: 1,
                        ResponsiveEvents: 1,
                        ajax: 1
                    },
                    "api-mod": 1,
                    mobile: {
                        lite: {
                            "image-loader": 1
                        }
                    }
                }
            },
            js3: {
                lib: {
                    "jquery-amd": 1
                },
                build: {
                    es6: {
                        src: {
                            common: {
                                Radio: 1
                            },
                            hotels: {
                                tracking: {
                                    timing: 1
                                }
                            },
                            utils: {
                                safeCall: 1
                            },
                            responsive: {
                                "text-resizer": 1
                            },
                            photoviewer: {
                                models: {
                                    eventTypes: 1
                                },
                                loader: 1,
                                radioHelper: 1,
                                tracking: 1
                            }
                        }
                    }
                },
                src: {
                    ta: {
                        common: {
                            Repoll: 1,
                            Swipe: 1
                        },
                        util: {
                            I18N: 1
                        },
                        prwidgets: 1,
                        Core: {
                            "TA.FireEvent": 1,
                            "TA.Event": 1,
                            "TA.Store": 1
                        }
                    }
                }
            }
        },
        _: {
            baseUrl: "/"
        }
    })
};
define("photoviewer/models/eventTypes", ["babel/babel-helpers", "utils/objutils"], function(e, E) {
    "use strict";
    var C = {
            GRID_SCROLLED: "gridViewScrolled",
            HERO_THUMBS_REQUESTED: "heroThumbsRequested",
            ADVANCE_HERO_CLICKED: "advanceHeroClicked",
            HERO_FOCUS_CHANGED: "heroFocusChanged",
            HERO_UPDATED: "heroUpdated",
            HERO_CLICKED: "heroClicked",
            HELPFUL_VOTE_CHANGE: "updateHelpfulVote",
            CATEGORY_CHANGE: "categoryChange",
            MEDIA_FILTER_CHANGE: "mediaFilterChange",
            HERO_PHOTO_CHANGE: "heroPhotoChange",
            ALBUM_CHANGE: "albumChange",
            TYPE_CHANGE: "typeChange",
            BACK_TO_GALLERY: "backToGallery",
            AUTOPLAY_TOGGLE: "autoPlayToggle",
            RHR_CLICKED: "rhrClicked",
            CANCEL_AUTO_PLAY: "cancelAutoPlay",
            AUTO_PLAY_NEXT: "autoPlayNext",
            NAV_KEY_PRESSED: "navKeyPressed"
        },
        _ = C;
    return E.deepFreezeCopy(_)
});
define("photoviewer/radioHelper", ["babel/babel-helpers", "lib/jquery-amd", "common/Radio"], function(e, o, n) {
    "use strict";

    function t(e, t, i, r) {
        function u(t) {
            return !!o(e).closest("#" + t).length && (f = n(t), !0)
        }

        function c() {
            n("responsive-photoviewer").off("content-loaded", d), "function" == typeof r && r()
        }

        function d(n) {
            return i && !o.contains(document, o(e).get(0)) ? void setTimeout(c, 0) : void(u(n) && "function" == typeof t && t(n))
        }
        var f = void 0;
        return n("responsive-photoviewer").on("content-loaded", d), {
            getRadio: function() {
                return f
            }
        }
    }
    return t
});
define("photoviewer/tracking", ["babel/babel-helpers", "common/trackingStreams", "ta/Core/TA.FireEvent", "lib/jquery-amd", "utils/responsive", "utils/throttle", "page-model"], function(i, e, t, o, n, r, c) {
    "use strict";

    function l(i, t, o) {
        e.trackEvent(i, t, o, Q)
    }

    function a() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        _(i) && e.trackEvent(S, i, t, Q)
    }

    function d(i) {
        e.trackEvent(S, i, "", Q)
    }

    function _(i) {
        var e = void 0;
        if (i.includes("grid_view")) e = M;
        else {
            if (!i.includes("detail_view")) return !1;
            e = K
        }
        return o(U).hasClass(e)
    }

    function v() {
        Y = o(window).height(), X = o(window).width(), o(window).off("resize", Z).on("resize", Z)
    }

    function u() {
        o(window).off("resize", Z)
    }

    function w() {
        n.desktop() && t.fireEvent("galNavClick"), l(S, D, null)
    }

    function k() {
        l(S, P, null, Q)
    }

    function s() {
        l(S, H, null, Q)
    }

    function h(i) {
        var e = i ? "detail_view_show_nav_click" : "detail_view_hide_nav_click";
        l(S, e, null, Q)
    }

    function f(i) {
        l(S, i, B, Q)
    }

    function p(i) {
        l(S, i, B, Q)
    }

    function g() {
        l(S, R, null, Q)
    }

    function m() {
        l(S, F, null, Q)
    }

    function C() {
        n.desktop() && l(S, G, null, Q)
    }

    function b() {
        l(S, I, null)
    }

    function T() {
        n.mobile() && t.fireEvent("galThumbClick")
    }

    function A() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        l(S, V, i + "|" + e + "|" + t + "|" + o)
    }

    function E() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        l(S, x, i + "|" + e + "|" + o + "|" + r), n.desktop() && t.fireEvent("galThumbClick")
    }

    function y(i, e, t) {
        var n = o(e).closest(U).hasClass(K),
            r = o(e).hasClass(J),
            c = n ? "detail" : "grid",
            a = r ? "dropdown_open" : "dropdown_select";
        l(S, "" + c + L[t], a + "_" + i)
    }

    function z(i, e, t, o) {
        l(S, N, i + "|" + e + "|" + t + "|" + o)
    }
    var S = "photoviewer",
        D = "detail_view_image_arrow_click",
        P = "detail_view_gallery_click",
        R = "detail_view_caption_review_click",
        F = "detail_view_caption_attribution_url_click",
        G = "detail_view_desktop_image_click",
        H = "detail_view_photostrip_arrow_click",
        I = "detail_view_image_swipe_click",
        V = "grid_view_thumbnail_click",
        x = "detail_view_photostrip_tile_click",
        N = "helpful_vote_click",
        O = "_view_album_click",
        j = "_view_type_click",
        q = "_view_category_click",
        B = "dropdown_abandoned",
        L = {
            album: O,
            type: j,
            category: q
        },
        U = ".photoviewerContainer",
        J = "tabs_item",
        K = "hero",
        M = "grid",
        Q = c.LOC_ID,
        W = 1e3,
        X = void 0,
        Y = void 0,
        Z = r(function() {
            setTimeout(function() {
                var i = o(window).width(),
                    t = o(window).height();
                i === X && t === Y || (e.trackEvent("screenSizeRecord", "resize", "s" + X + "x" + Y + "b" + i + "x" + t, ""), X = i, Y = t)
            }, W)
        }, W);
    return {
        attachResizeTracker: v,
        detachResizeTracker: u,
        trackPhotoViewerEvent: l,
        trackPhotoViewerImpression: a,
        trackSimpleAction: d,
        recordBackToGalleryClick: k,
        recordCaptionReviewClick: g,
        recordCaptionAttributionUrlClick: m,
        recordPhotoStripArrowClick: s,
        recordGridDropdownAbandonment: f,
        recordAlbumDropdownAbandonment: p,
        recordHeroClickOnDesktop: C,
        recordNavArrowVisibilityChange: h,
        recordArrowClick: w,
        recordPhotoSwipe: b,
        recordFilmstripThumbClick: T,
        recordGridTileClick: A,
        recordHeroThumbClick: E,
        recordFilterItemClick: y,
        recordHelpfulClick: z
    }
});
require(["ta/p13n/placements"], function(a) {
    var e = a.define.bind(a, "pv_resp_content_grid", "handlers", ["handlers"]);
    e(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/radioHelper", "photoviewer/tracking", "mobile/lite/image-loader", "utils/throttle"], function(a, e, t, r, i, o, d, n) {
        "use strict";

        function l(a, e) {
            var r = t(a),
                i = r.attr("data-updateComponent"),
                o = r.find(".albumGridItem"),
                d = _.find("[data-updateComponent=" + i + "]");
            if (e === G) {
                var n = t(".albumGridItem", _).first(),
                    l = t(".photoGridWrapper", _),
                    p = n.offset().top;
                n.before(o);
                var f = n.offset().top,
                    g = Math.abs(p - f) > 1;
                if (g) {
                    var m = f - p;
                    l.scrollTop(m)
                }
                O = !1
            } else t(".albumGridItem", _).last().after(o), T = !1;
            d.replaceWith(r), s()
        }

        function p(a, e) {
            var i = t(e),
                o = t(".photoGridBox", _);
            x = i.data("mediaid"), B = i.data("mediatype"), y = o.data("albumid");
            var d = o.data("aggregationid");
            M = o.data("filter");
            var n = i.attr("data-panoid");
            R.getRadio().trigger(r.HERO_PHOTO_CHANGE, {
                albumViewMode: "hero",
                aggregationId: d,
                albumid: y,
                ff: x,
                filter: M,
                panoId: n
            })
        }

        function f(a, e) {
            p(a, e), a && "click" === a.type && o.recordGridTileClick(x, y, M, B)
        }

        function g(a) {
            var i = t(".loadMore" + a, _);
            if (!i.length) return !1;
            var o = t(".photoGridBox", _);
            y = o.data("albumid");
            var d = o.data("aggregationid");
            M = o.data("filter");
            var n = i.data("offset"),
                l = {
                    albumViewMode: "imageThumbs",
                    aggregationId: d,
                    albumid: y,
                    filter: M,
                    albumPartialsToUpdate: "partial",
                    offset: n,
                    loadDirection: a
                };
            return a === G ? (O = !0, l.cnt = parseInt(i.attr("data-firstOffset")) - n) : T = !0, R.getRadio().trigger(r.GRID_SCROLLED, l, "update-" + e.name + "-more" + a, a), !0
        }

        function s() {
            d.demandLoadImages(_.get(0))
        }

        function m(a, e, r) {
            var i = t(e),
                o = t(r);
            if (o.length) {
                o.find(".ui_spinner").remove();
                var d = t(".fillSquare", o);
                if (d && d.length) {
                    var n = i.width() / i.height() > d.width() / d.height();
                    d.toggleClass("landscape", n)
                }
                t(".videoOverlay", o).removeClass("hidden"), t(".panoOverlay", o).removeClass("hidden")
            }
        }

        function h() {
            var a = t(".photoGridWrapper", _),
                e = a.scrollTop();
            e + a.height() + b >= t(".photoGridBox", _)[0].scrollHeight && !T && g(w) && R.getRadio().trigger("force-ad-refresh"), e < b && !O && g(G) && R.getRadio().trigger("force-ad-refresh")
        }

        function u() {
            v(), _ = t("#" + e.id), C = R.getRadio(), C.on(I, l);
            var a = t(".loadMoreUpward", _);
            if (a.length) {
                var r = parseInt(a.attr("data-initialMediaId"));
                if (!isNaN(r)) {
                    var i = t("[data-mediaid=" + r + "]", _),
                        o = i.length && i.get(0);
                    o.scrollIntoView && o.scrollIntoView()
                }
            }
            t(".photoGridWrapper, .photoGridBox", _).on("scroll", n(function() {
                s(), h()
            }, 100)), s(), h(), c()
        }

        function v() {
            C && C.off(I, l), _ && t(".photoGridWrapper, .photoGridBox", _).off("scroll")
        }

        function c() {
            var a = _.find(".photoGridBox"),
                e = a.attr("data-aggregationid"),
                t = a.attr("data-albumid"),
                r = a.attr("data-filter"),
                i = a.find(".albumGridItem").length;
            o.trackPhotoViewerImpression("grid_view", t + "|" + e + "|" + r), i && o.trackPhotoViewerImpression("grid_view_photos_seen", i)
        }
        var b = 200,
            w = "Downward",
            G = "Upward",
            I = "update-" + e.name + "-moreDownward update-" + e.name + "-moreUpward",
            _ = void 0,
            C = void 0,
            R = i("#" + e.id, u),
            O = !1,
            T = !1,
            x = void 0,
            y = void 0,
            B = void 0,
            M = void 0;
        return {
            afterImgLoad: m,
            onGridItemSelected: f
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var a = e.define.bind(e, "pv_resp_content_grid_zepto", "handlers", ["handlers"]);
    a(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/radioHelper", "photoviewer/tracking", "mobile/lite/image-loader", "utils/throttle"], function(e, a, t, r, i, o, d, n) {
        "use strict";

        function l(e, a) {
            var r = t(e),
                i = r.attr("data-updateComponent"),
                o = r.find(".albumGridItem"),
                d = G.find("[data-updateComponent=" + i + "]");
            if (a === w) {
                var n = t(".albumGridItem", G).first(),
                    l = t(".photoGridWrapper", G),
                    p = n.offset().top - l.scrollTop();
                n.before(o), n.offset().top !== p && l.scrollTop(n.offset().top - p), T = !1
            } else t(".albumGridItem", G).last().after(o), R = !1;
            d.replaceWith(r), s()
        }

        function p(e, a) {
            var i = t(a),
                o = t(".photoGridBox", G);
            C = i.data("mediaid"), k = i.data("mediatype"), V = o.data("albumid");
            var d = o.data("aggregationid");
            D = o.data("filter");
            var n = i.attr("data-panoid");
            _.getRadio().trigger(r.HERO_PHOTO_CHANGE, {
                albumViewMode: "hero",
                aggregationId: d,
                albumid: V,
                ff: C,
                filter: D,
                panoId: n
            })
        }

        function f(e, a) {
            p(e, a), e && "click" === e.type && o.recordGridTileClick(C, V, D, k)
        }

        function g(e) {
            var i = t(".loadMore" + e, G);
            if (i.length) {
                var o = t(".photoGridBox", G);
                V = o.data("albumid");
                var d = o.data("aggregationid");
                D = o.data("filter");
                var n = i.data("offset"),
                    l = {
                        albumViewMode: "imageThumbs",
                        aggregationId: d,
                        albumid: V,
                        filter: D,
                        albumPartialsToUpdate: "partial",
                        offset: n,
                        loadDirection: e
                    };
                e === w ? (T = !0, l.cnt = parseInt(i.attr("data-firstOffset")) - n) : R = !0, _.getRadio().trigger(r.GRID_SCROLLED, l, "update-" + a.name + "-more" + e, e)
            }
        }

        function s() {
            d.demandLoadImages(G.get(0))
        }

        function m(e, a, r) {
            var i = t(a),
                o = t(r);
            if (o.length) {
                o.find(".ui_spinner").remove();
                var d = i.width() / i.height() > o.width() / o.height();
                o.toggleClass("landscape", d)
            }
        }

        function c() {
            var e = t(".photoGridWrapper", G);
            e.scrollTop() + e.height() + v >= e.get(0).scrollHeight && !R && (g(b), _.getRadio().trigger("force-ad-refresh")), e.scrollTop() < v && !T && (g(w), _.getRadio().trigger("force-ad-refresh"))
        }

        function h() {
            _.getRadio().off(I, l).on(I, l), G = t("#" + a.id);
            var e = t(".loadMoreUpward", G);
            if (e.length) {
                var r = parseInt(e.attr("data-initialMediaId"));
                if (!isNaN(r)) {
                    var i = t("[data-mediaid=" + r + "]", G),
                        o = i.length && i.get(0);
                    o.scrollIntoView && o.scrollIntoView()
                }
            }
            t(".photoGridWrapper, .photoGridBox", G).off("scroll").on("scroll", n(function() {
                s(), c()
            }, 100)), s(), u()
        }

        function u() {
            var e = G.find(".photoGridBox"),
                a = e.attr("data-aggregationid"),
                t = e.attr("data-albumid"),
                r = e.attr("data-filter"),
                i = e.find(".albumGridItem").length;
            o.trackPhotoViewerImpression("grid_view", t + "|" + a + "|" + r), i && o.trackPhotoViewerImpression("grid_view_photos_seen", i)
        }
        var v = 200,
            b = "Downward",
            w = "Upward",
            I = "update-" + a.name + "-moreDownward update-" + a.name + "-moreUpward",
            G = void 0,
            _ = i("#" + a.id, h),
            T = !1,
            R = !1,
            C = void 0,
            V = void 0,
            k = void 0,
            D = void 0;
        return {
            afterImgLoad: m,
            onGridItemSelected: f
        }
    })
});
require(["ta/p13n/placements"], function(t) {
    var e = t.define.bind(t, "pv_resp_content_hero", "thumbsScroller", ["handlers", "preloader", "thumbsScroller"]);
    e(["babel/babel-helpers", "lib/jquery-amd", "api-mod", "ta/util/I18N", "common/trackingStreams"], function(t, e, a, i, r) {
        function s(t, s) {
            function h() {
                var t = e(".heroPhoto", s).attr("data-mediaid");
                return o.children.filter("[data-mediaid=" + t + "]").first()
            }

            function l(t) {
                t = e(t), e(".tinyThumb.current", s).removeClass("current"), t.addClass("current");
                var a = e(".heroNav.right", s),
                    i = e(".heroNav.left", s);
                i.toggleClass("disabled", 0 === parseInt(t.attr("data-offset"))), t.next(".tinyThumb").length > 0 ? a.removeClass("disabled") : a.addClass("disabled")
            }

            function n() {
                var t = e(".heroThumbnails", e(s)),
                    a = t.width();
                e("img[data-lazyurl]", t).each(function(t, i) {
                    var r = e(i);
                    r.position().left <= a && r.attr("src", r.attr("data-lazyurl")).removeAttr("data-lazyurl")
                })
            }

            function d() {
                var t = e(".heroThumbnails .thumbNav.left", s),
                    a = e(".heroThumbnails .thumbNav.right", s);
                t.length && a.length && (u ? (t.toggleClass("disabled", !f.hasMore.loaded.right && !f.hasMore.unloaded.right), a.toggleClass("disabled", !f.hasMore.loaded.left && !f.hasMore.unloaded.left)) : (t.toggleClass("disabled", !f.hasMore.loaded.left && !f.hasMore.unloaded.left), a.toggleClass("disabled", !f.hasMore.loaded.right && !f.hasMore.unloaded.right)))
            }
            var o = {},
                f = {},
                u = i.isRtl();
            s = e(s), this.init = function() {
                if (o = {
                        thumbs: e(".photos.inHeroList", s),
                        thumbsParent: e(".heroThumbnails", s),
                        children: e(".photos.inHeroList > div", s)
                    }, !o.thumbsParent.length || !o.children.length) return !1;
                o.lastThumb = o.children.last(), o.firstThumb = o.children.first(), f = {
                    firstOffset: parseInt(o.firstThumb.attr("data-offset")),
                    lastOffset: parseInt(o.lastThumb.attr("data-offset")),
                    maxOffset: parseInt(o.thumbsParent.attr("data-totalThumbs")) - parseInt(o.thumbsParent.attr("data-panoCount")) - 1,
                    navWidth: e(".thumbNav.left", s).outerWidth(),
                    oneThumbWidth: o.lastThumb.outerWidth()
                }, f.visibleWidth = o.thumbsParent.width() - 2 * f.navWidth;
                var t = o.thumbsParent.offset().left + f.navWidth,
                    i = t + o.thumbsParent.outerWidth() - f.navWidth,
                    r = o.thumbs.offset().left,
                    h = r + o.thumbs.outerWidth();
                return f.curLeft = parseInt(o.thumbs.css("left")) || 0, f.curRight = parseInt(o.thumbs.css("right")) || 0, f.maxLeft = a.getPosition(o.lastThumb, o.thumbs).left + f.oneThumbWidth - f.visibleWidth, f.maxRight = o.thumbs.width() - f.visibleWidth, f.hasMore = {
                    unloaded: u ? {
                        right: f.firstOffset > 0,
                        left: f.lastOffset < f.maxOffset
                    } : {
                        right: f.lastOffset < f.maxOffset,
                        left: f.firstOffset > 0
                    },
                    loaded: {
                        right: h > i,
                        left: r < t
                    },
                    loadedNextPage: {
                        right: h - f.visibleWidth > i,
                        left: r + f.visibleWidth < t
                    }
                }, n(), d(), !0
            }, this.loadMore = function(a, i) {
                try {
                    var s = parseInt(o.thumbsParent.attr("data-pageSize"));
                    if (f.hasMore.unloaded[i]) {
                        var h = function() {
                                "left" !== i || u ? "right" === i && u && o.thumbs.css({
                                    left: "auto",
                                    right: window.getComputedStyle(o.thumbs.get(0)).right
                                }) : o.thumbs.css({
                                    right: "auto",
                                    left: window.getComputedStyle(o.thumbs.get(0)).left
                                }), m.init(), a && a()
                            },
                            l = "left" === i ? u : !u,
                            n = {
                                albumViewMode: "heroThumbs",
                                albumid: o.thumbsParent.attr("data-albumid"),
                                aggregationId: o.thumbsParent.attr("data-aggregationId"),
                                filter: o.thumbsParent.attr("data-filter")
                            };
                        l ? n.offset = Math.min(f.lastOffset + 1, f.maxOffset) : (n.offset = Math.max(f.firstOffset - s, 0), s > f.firstOffset && (n.cnt = f.firstOffset));
                        var d = "?" + e.param(n),
                            m = this,
                            b = u ? "right" : "left";
                        return t(d, h, {
                            prepend: i === b
                        }), "left" !== i || u ? "right" === i && u && o.thumbs.css({
                            right: "auto",
                            left: f.visibleWidth - f.curRight - o.thumbs.width() - 4
                        }) : o.thumbs.css({
                            left: "auto",
                            right: f.visibleWidth - f.curLeft - o.thumbs.width() - 4
                        }), !0
                    }
                } catch (t) {
                    r.error(t, "ResponsivePhotoViewer hero thumbs loadMore failed")
                }
                return !1
            };
            var m = function(t) {
                    var e = h();
                    if (e.length > 0) {
                        var i = o.thumbsParent[0].getBoundingClientRect(),
                            r = e[0].getBoundingClientRect(),
                            s = i.left + f.navWidth,
                            n = i.right - f.navWidth,
                            d = n - s,
                            m = r.right - r.left,
                            b = r.right > n,
                            c = r.left < s,
                            v = !1,
                            p = a.getPosition(e, o.thumbs).left;
                        u && (p = o.thumbs.width() - p - m), b ? (f.hasMore.loadedNextPage.right || t || (v = this.loadMore(g.bind(this, "current", !0), u ? "left" : "right")), v || (u ? o.thumbs.css("right", Math.min(-p + d - m, 0) + "px") : o.thumbs.css("left", Math.max(-p, -f.maxLeft) + "px"))) : c && (f.hasMore.loadedNextPage.left || t || (v = this.loadMore(g.bind(this, "current", !0), u ? "right" : "left")), v || (u ? o.thumbs.css("right", Math.max(-p, -f.maxRight) + "px") : o.thumbs.css("left", Math.min(-p + d - m, 0) + "px"))), l(e)
                    }
                }.bind(this),
                b = function(t, e) {
                    var a = !1;
                    if (f.hasMore.loadedNextPage[t] || e || (a = this.loadMore(g.bind(this, t, !0), t)), !a && f.hasMore.loaded[t]) {
                        var i = void 0,
                            r = u ? "right" : "left";
                        i = "right" === t ? u ? Math.min(f.curRight + f.visibleWidth, 0) : Math.max(f.curLeft - f.visibleWidth, -f.maxLeft) : u ? Math.max(f.curRight - f.visibleWidth, -f.maxRight) : Math.min(f.curLeft + f.visibleWidth, 0), o.thumbs.css(r, i + "px")
                    }
                }.bind(this);
            this.scroll = function(t, e) {
                "left" === t || "right" === t ? b(t, e) : "current" === t && m(e);
                var a = this;
                o.thumbs.off("transitionend").on("transitionend", a.init)
            };
            var g = function(t, e) {
                this.init() && this.scroll(t, e)
            }.bind(this)
        }
        return s
    })
});
define("common/metric-recorder", ["babel/babel-helpers", "ajax-request"], function(e, r) {
    return function(e) {
        return r({
            method: "POST",
            url: "/MetricsAjax",
            "x-requested-by": require("page-model").JS_SECURITY_TOKEN,
            data: "metricsData=" + encodeURIComponent(JSON.stringify(e))
        })
    }
});
define("utils/uuid", ["babel/babel-helpers"], function(x) {
    return function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(x) {
            var n = 16 * Math.random() | 0,
                e = "x" === x ? n : 3 & n | 8;
            return e.toString(16)
        })
    }
});
define("hotels/tracking/timing", ["babel/babel-helpers", "common/metric-recorder", "utils/uuid", "ta/Core/TA.PageVisibility"], function(e, r, n, t) {
    function i() {
        a || (a = !0, t.addBlurListener(function() {
            return o = {}
        }))
    }

    function u(e, t) {
        if (!a) return function() {
            return Promise.resolve()
        };
        var i = n();
        o[i] = !0;
        var u = Date.now();
        return function() {
            if (!o[i]) return Promise.resolve();
            delete o[i];
            var n = Date.now() - u;
            return r([{
                name: e,
                value: n,
                labels: [t]
            }])
        }
    }
    var a = !1,
        o = {};
    return {
        enable: i,
        start: u
    }
});
require(["ta/p13n/placements"], function(t) {
    var a = t.define.bind(t, "pv_resp_content_hero", "preloader", ["handlers", "preloader", "thumbsScroller"]);
    a(["babel/babel-helpers", "lib/jquery-amd", "hotels/tracking/timing"], function(t, a, e) {
        function r() {
            function t() {
                i = null, a()
            }

            function a() {
                if (!i) {
                    var a = r.shift();
                    a && (i = new Image, e[a] = i, i.onload = t, i.onerror = t, i.src = a, i.complete && t())
                }
            }
            var e = {},
                r = [],
                i = null;
            this.clear = function() {
                r = [], e = {}
            }, this.clearQueue = function() {
                r = []
            }, this.getImageByUrl = function(t) {
                return e[t]
            }, this.addToQueue = function(t) {
                t && !e[t] && r.indexOf(t) < 0 && (r.push(t), setTimeout(a, 1))
            }
        }

        function i(t, i, d) {
            var l = this,
                u = new r;
            t = a(t), this.clear = function(t) {
                t ? u.clear() : u.clearQueue()
            }, this.preloadPhoto = function(r, n) {
                var o = e.start("pv_change_photo", require("page-model").LOC_ID);
                r = a(r);
                var h = a(".heroPhoto", t),
                    p = a(".mainImg img", h),
                    c = r.attr("data-heroheight"),
                    s = r.attr("data-herowidth"),
                    f = a(u.getImageByUrl(n) || "<img/>"),
                    g = function() {
                        i(), d() === n && p.parent().length && (p.replaceWith(f), l.beginPreload(), f.off("load"), o())
                    };
                f.on("load", g), c && f.prop("height", parseInt(c)), s && f.prop("width", parseInt(s)), f.prop("src") || f.prop("src", n), f.prop("complete") && g.call(f)
            }, this.preloadVideo = function(e) {
                e = a(e);
                var r = a(".heroPhoto", t),
                    i = e.attr("data-bigurl"),
                    n = e.attr("data-icaption"),
                    o = e.attr("data-srcurl"),
                    d = e.attr("data-videoformats");
                a(".mainImg img", r).remove();
                var l = a(".mainImg", r);
                return !!l.length && (l.append(a("<div></div>").addClass("videoPlayer").attr({
                    "data-videoFormats": d,
                    "data-src": o,
                    "data-preview": i,
                    "data-icaption": n
                }).append(a("<div></div>").addClass("jwPlayer").prop("id", "JWPLAYER"))), !0)
            }, this.beginPreload = function() {
                var e = a(".tinyThumb", t),
                    r = e.filter(".current"),
                    i = r.index();
                if (r.length) {
                    var d = Math.max(i - n, 0),
                        l = Math.min(i + 1 + o, e.length),
                        h = void 0;
                    for (h = i + 1; h < l; h++) u.addToQueue(a(e[h]).attr("data-bigUrl"));
                    for (h = i - 1; h >= d; h--) u.addToQueue(a(e[h]).attr("data-bigUrl"))
                }
            }
        }
        var n = 1,
            o = 3;
        return i
    })
});
define("ta/common/Swipe", ["vanillajs"], function(e) {
    "use strict";
    return {
        resetImageBehavior: function(e, t) {
            for (var n, o = document.querySelectorAll(e), i = function(e) {
                    e.preventDefault()
                }, r = 0; r < o.length; r++) n = o[r], n.onmousedown = i, t && n.removeAttribute("onclick")
        },
        addSwipeListener: function(e, t, n) {
            function o() {
                e.removeEventListener("touchmove", i), e.removeEventListener("touchend", r), window.removeEventListener("MSPointerMove", i, !1), window.removeEventListener("MSPointerUp", r, !1), c = null, a = null, v = null
            }

            function i(e) {
                if (e.touches.length > 1) o();
                else {
                    s = e.touches[0].pageX - c;
                    var t = e.touches[0].pageY - a;
                    null === v ? (v = s, n || e.preventDefault(), e.stopPropagation()) : (v < 0 && s > 0 || v > 0 && s < 0 || Math.abs(t) > l) && o()
                }
            }

            function r(n) {
                o(), t && Math.abs(s) > d && t({
                    target: e,
                    direction: s > 0 ? "right" : "left",
                    event: n
                }), s = 0
            }

            function u(t) {
                1 == t.touches.length && (c = t.touches[0].pageX, a = t.touches[0].pageY, e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", r, !1), window.addEventListener("MSPointerMove", i, !1), window.addEventListener("MSPointerUp", r, !1))
            }
            var c, a, s, v, d = 40,
                l = 30;
            return "function" == typeof t && e.addEventListener("touchstart", u, !1), {
                cancel: function() {
                    "function" == typeof t && e.removeEventListener("touchstart", u, !1)
                }
            }
        }
    }
});
define("overlays/options/closeOnEmit", ["babel/babel-helpers"], function(n) {
    "use strict";
    return function(n, e, o) {
        return function() {
            var t = this,
                i = function() {
                    o && !o.apply(void 0, arguments) || t.hide("on-event")
                };
            this.on("show", function() {
                return n.on(e, i)
            }).on("hide", function() {
                return n.off(e, i)
            })
        }
    }
});
define("utils/HistoryManager", [], function() {
    "use strict";

    function t() {
        function t() {
            return (new Date).getTime() + "" + Math.random()
        }

        function i(t) {
            var i = t.state;
            if (!a && i && i.id) {
                var e = i.id,
                    s = n[e];
                s && s(i.data)
            }
        }
        var n = {},
            e = {},
            a = !1;
        this.pushState = function(i, e, a, s) {
            var r = t();
            n[r] = s, i.id = r, history.pushState(i, e, a)
        }, this.replaceState = function(i, e, a, s) {
            var r = t();
            n[r] = s, i.id = r, history.replaceState(i, e, a)
        }, this.addCallback = function(t, i) {
            e[t] || (e[t] = []), e[t].push(i)
        }, this.removeCallback = function(t, i) {
            if (e[t]) {
                var n = e[t].indexOf(i);
                n >= 0 && e[t].splice(n, 1)
            }
        }, this.doCallbacks = function(t) {
            e[t] && e[t].each(function(t) {
                t()
            })
        }, this.isSupported = function() {
            return "undefined" != typeof history && "pushState" in history
        }, this.disableCallbacks = function(t) {
            a = t
        }, window.addEventListener("popstate", i)
    }
    return t
});
define("commerce/offerclickEvents", ["mixins/Events", "vanillajs"], function(e) {
    "use strict";
    return new e("beforeClick", "afterClick")
});
define("photoviewer/loader", ["babel/babel-helpers", "lib/jquery-amd", "page-model", "overlays/Overlay", "overlays/styles/modal", "overlays/position/fullscreen", "overlays/options/closeOnEmit", "overlays/options/ajax", "overlays/support/radio", "overlays/options/closeOnEscape", "common/trackingStreams", "common/Radio", "ta/Core/TA.FireEvent", "ta/Core/TA.Store", "photoviewer/tracking", "utils/responsive", "utils/HistoryManager", "utils/urlutils", "mixins/page-dates/pop-calendar", "commerce/offerclickEvents"], function(e, o, t, n, i, r, a, d, l, s, p, c, u, v, h, w, f, g, m, b) {
    "use strict";

    function y(e) {
        var n = e,
            i = w.mobile() ? 2 : w.desktop() ? 5 : 3;
        return n.heroMinWidth = o(window).width() - 2 * O, n.heroMinHeight = o(window).height() - 2 * O, n.gridItemMinWidth = n.heroMinWidth / i, n.updateType = n.updateType || "partial", n.placementRollUps = "responsive-photo-viewer", n.albumid = e.albumid || e.albumId, n.puid = t.session.uid, n.geo = n.geo || t.GEO_ID, n.detail = n.detail || t.LOC_ID, n.geo && n.detail ? (e.albumViewMode || (n.albumid = n.albumid || T, n.filter = n.filter || H, e.ff || e.imageId ? (n.albumViewMode = "hero", n.ff = e.ff || e.imageId) : e.panoId ? n.albumViewMode = "hero" : n.albumViewMode = "grid"), n.area = "QC_Meta_Mini|Photo_Lightbox", window.pageServlet && (n.metaReferer = window.pageServlet), n) : (p.error(null, "photoviewer/loader.js:load missing required arguments"), !1)
    }

    function C(e) {
        return "/DynamicPlacementAjax?" + o.param(y(e))
    }

    function E() {
        if (P.contentElement) {
            var e = P.contentElement.querySelector(".photoviewerContainer");
            e && e.parentNode && (P.contentElement = e.parentNode), P.contentElement.id || (P.contentElement.id = "photo_viewer_default_id");
            var o = I();
            o && o.clear(), c("responsive-photoviewer").trigger("content-loaded", P.contentElement.id)
        }
    }

    function I() {
        if (P) {
            var e = P.contentElement.id;
            if (e) return c(e)
        }
        return null
    }

    function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            p = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            w = "no_padding";
        if (e.currentHeroId = e.ff, P) {
            var f = void 0,
                g = I();
            g && (f = g.request("currentHeroId")), f && (e.currentHeroId = f), P.updateContent(C(e), !0)
        } else P = new n(document.body, i(null, "", w), r(), s, a(b, "beforeClick", function(e) {
            return e.isBooking
        }), d(C(e), {
            resources: [],
            noCache: !0,
            skipInvalidate: !0
        }), l.hide("responsive-photoviewer", "close")), _(t, e), P.on("contentLoaded", E), P.on("contentsUnchanged", function() {
            c("responsive-photoviewer").trigger("contents-unchanged")
        }), P.on("data-targetEvent", u.fireEvent), P.on("hide", function() {
            c("responsive-photoviewer").trigger("overlay-hide"), h.trackSimpleAction("photoviewer_close_click"), h.detachResizeTracker(), A && v.remove("suppressCalendarPop");
            var e = o("[data-datetype='CHECKIN']").get(0);
            m.shouldPop(e) && m.popCalendar(e)
        }), P.on("show", function() {
            c("responsive-photoviewer").trigger("overlay-shown")
        });
        p || t || M(e), P.show()
    }

    function M(e) {
        var t = e.aggregationId,
            n = e.albumid,
            i = e.ff,
            r = e.filter,
            a = e.panoId,
            d = {
                aggregationId: t,
                albumid: n,
                filter: r
            };
        i && (d.ff = i), a && (d.panoId = a);
        var l = S + o.param(d);
        c("responsive-photoviewer").trigger("addHistory", {
            data: d
        }, document.title, l, function() {
            return k(d, !1, !0)
        })
    }

    function _(e, o) {
        var t = new f;
        if (t.isSupported()) {
            if (e) {
                var n = window.location.href;
                window.setTimeout(function() {
                    if (n === window.location.href) {
                        var e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
                        window.history.replaceState(null, "", e), M(o)
                    }
                }, 0)
            }
            c("responsive-photoviewer").on("addHistory", t.pushState);
            var i = !1;
            P.on("hide", function() {
                window.location.hash.indexOf(x) >= 0 && (i = !0, t.disableCallbacks(!0), history.back())
            }), window.addEventListener("popstate", function() {
                window.location.hash.indexOf(x) >= 0 ? i ? history.back() : P.show() : (i = !1, t.disableCallbacks(!1), P.hide())
            })
        }
    }
    var O = 20,
        x = "#photos",
        S = x + ";",
        H = 7,
        T = 101,
        P = void 0,
        A = !1;
    return o(function() {
        var e = window.location.hash;
        if (e.indexOf(x) >= 0) {
            v.retrieve("suppressCalendarPop") || (A = !0, v.store("suppressCalendarPop", "true"));
            var o = void 0,
                t = e.indexOf(S) >= 0 && e.substring(e.indexOf(S) + S.length, e.length);
            o = t && t.length > 0 ? g.getUrlQueryArgs("?" + t) : y({}), o.updateType = "full", k(o, !0)
        }
    }), c("responsive-photoviewer").on("load", k), {
        load: k,
        buildUrl: C
    }
});
require(["ta/p13n/placements"], function(t) {
    var e = t.define.bind(t, "pv_resp_content_hero", "handlers", ["handlers", "preloader", "thumbsScroller"]);
    e(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "photoviewer/radioHelper", "utils/ajax", "ta/prwidgets", "thumbsScroller", "utils/urlutils", "ta/util/I18N", "preloader", "common/trackingStreams", "utils/responsive", "ta/common/Swipe", "common/Radio", "photoviewer/loader", "utils/throttle", "utils/browserutils"], function(t, e, a, r, o, n, i, d, l, u, s, m, c, p, h, f, g, v, b) {
        "use strict";

        function w() {
            ot.getRadio().reply("currentHeroId", T), ot.getRadio().on("update-" + e.name + "-hero-thumbnails", S), rt = a("#" + e.id), mt = new l(M, rt), mt.init(), ot.getRadio().off(r.ADVANCE_HERO_CLICKED).on(r.ADVANCE_HERO_CLICKED, function(t) {
                H(1 === t)
            }), ot.getRadio().off("autoPlayNext", Y).on("autoPlayNext", Y), ot.getRadio().off("cancelAutoPlay", E).on("cancelAutoPlay", E), ot.getRadio().off(r.RHR_CLICKED, _).on(r.RHR_CLICKED, _), ot.getRadio().reply("nextVideoTitle", et), f("responsive-photoviewer").off("overlay-hide", y).on("overlay-hide", y), nt = new m(rt, R, function() {
                return it
            }), nt.beginPreload();
            var t = a(".tinyThumb.current", rt).attr("data-panorama");
            t && O(t);
            var n = a(".heroWrapper", rt);
            n.off("mouseover").on("mouseover", function() {
                ot.getRadio().trigger(r.HERO_FOCUS_CHANGED, {
                    hasFocus: !0
                })
            }), n.off("mouseout").on("mouseout", function() {
                ot.getRadio().trigger(r.HERO_FOCUS_CHANGED, {
                    hasFocus: !1
                })
            });
            var i = a(".photoviewerContainer.hero .pvContent");
            i.length && (ut && ut.cancel(), ut = h.addSwipeListener(i.get(0), function(t) {
                if (!n.hasClass("panorama")) {
                    if (a(t.event.target).closest(".heroThumbnails").length) return;
                    H("left" === t.direction), o.recordPhotoSwipe()
                }
            })), a(".mainImg", n).off("click", I).on("click", I), a(".inHeroList", rt).length && (st && st.cancel(), st = h.addSwipeListener(a(".inHeroList", rt).get(0), function(t) {
                t.event.stopPropagation(), U("left" === t.direction ? "right" : "left")
            })), setTimeout(function() {
                var t = a(".tinyThumb.current", rt);
                X(t), J(t)
            }, 0), Z(), q(C()), "ios" === b.Platform.name && (ct(), a(window).off("resize", ct).on("resize", ct))
        }

        function y() {
            nt && nt.clear(!0), "ios" === b.Platform.name && a(window).off("resize", ct)
        }

        function T() {
            if (rt.length > 0) {
                var t = a(".tinyThumb.current", rt);
                return t.attr("data-mediaid")
            }
            return null
        }

        function C() {
            return a(".heroPhoto", rt).hasClass("playableVideo")
        }

        function P() {
            lt = setTimeout(function() {
                a(".heroPhoto .ui_spinner", rt).show()
            }, 500)
        }

        function R() {
            clearTimeout(lt), a(".heroPhoto .ui_spinner", rt).hide()
        }

        function I() {
            if (!a(".heroWrapper", rt).hasClass("panorama")) {
                if (o.recordHeroClickOnDesktop(), p.desktop()) {
                    var t = a(".pano.tinyThumb.current", rt);
                    if (t.length || C()) return;
                    H(!at)
                }
                _(), ot.getRadio().trigger(r.HERO_CLICKED)
            }
        }

        function _() {
            a(".heroThumbnails, .actions", rt).toggleClass("anchor")
        }

        function H(t) {
            var e = void 0,
                r = void 0,
                o = a(".tinyThumb.current", rt);
            if (t ? (r = o.next(".tinyThumb"), !r.length && parseInt(o.attr("data-offset")) > 0 && (e = at ? "left" : "right")) : (r = o.prev(".tinyThumb"), !r.length && parseInt(o.attr("data-offset")) > 0 && (e = at ? "right" : "left")), f("photo_pagination_event").emit("pagination"), e) return void mt.loadMore(H.bind(self, t), e);
            var n = V(r) ? D(r) : L(r);
            n && M(n)
        }

        function E() {
            H(!1)
        }

        function k(t) {
            var e = V(t);
            return e ? D(t) : L(t)
        }

        function V(t) {
            var e = a(t);
            return e.hasClass("pano")
        }

        function A() {
            var t = a(".heroThumbnails", rt);
            return {
                albumViewMode: "hero",
                aggregationId: t.attr("data-aggregationId"),
                albumid: t.attr("data-albumid"),
                filter: t.attr("data-filter")
            }
        }

        function D(t) {
            if (!t) return {};
            var e = a(t),
                r = e.attr("data-mediaid"),
                o = e.attr("data-panorama"),
                n = A();
            return n.panoId = r, n.panoPath = o, n
        }

        function L(t) {
            if (!t) return {};
            var e = a(t),
                r = e.attr("data-mediaid"),
                o = A();
            return o.ff = r, o
        }

        function O(t) {
            R();
            var r = e.params.krpanoNew ? "trjs!krpano" : "trjs!krpano-old";
            require(["babel/babel-helpers", r], function(e) {
                a("#PANO_HOLDER", rt).empty().removeProp("onclick");
                var r = {
                    html5: "only",
                    wmode: "transparent",
                    xml: "/PanoramaXml?pano=" + encodeURIComponent(t),
                    target: "PANO_HOLDER",
                    id: "albumViewerPano"
                };
                a(".heroWrapper", rt).addClass("panorama"), a(rt).closest(".pvMain").addClass("fullHeight"), window.embedpano && window.embedpano(r)
            })
        }

        function S(t, e) {
            var r = a(t),
                o = r.attr("data-updateComponent"),
                n = rt.find('[data-updateComponent="' + o + '"]'),
                i = a(".photos.inHeroList", n),
                d = a(".tinyThumb", r);
            e && e.options && e.options.prepend ? (i.prepend(d), U("current", !0)) : i.append(d), dt = !1, e && e.callback && "function" == typeof e.callback && e.callback()
        }

        function x(t, e, r) {
            a(e).hasClass("disabled") || (at && ("left" === r ? r = "right" : "right" === r && (r = "left")), o.recordPhotoStripArrowClick(), U(r))
        }

        function U(t, e) {
            try {
                mt.scroll(t, e)
            } catch (e) {
                c.error(e, "albumViewer:scrollThumbs failed", null, {
                    direction: t
                })
            }
        }

        function N(t, e) {
            if (f("photo_pagination_event").emit("pagination"), M(k(e)), t && "click" === t.type) {
                var r = a(e).data(),
                    n = r.mediaid,
                    i = r.albumid,
                    d = r.mediaFilter,
                    l = r.mediaType;
                o.recordHeroThumbClick(n, i, d, l), ot.getRadio().trigger("check-ad-refresh")
            }
        }

        function M(t, e, a) {
            if (!dt && (R(), nt ? nt.clear(!1) : c.error(null, "m_heroPreloader is null in responsive photo viewer:update()"), "string" == typeof t && (t = u.getUrlQueryArgs(t)), t && t.albumViewMode))
                if ("hero" === t.albumViewMode) {
                    var r = t.panoId || t.ff;
                    j(t, function() {
                        null == T() ? g.load(t, !1, !0) : K(r, t.panoPath)
                    }), K(r, t.panoPath)
                } else "heroThumbs" === t.albumViewMode && F(t, e, a)
        }

        function F(t, a, o) {
            dt = !0, ot.getRadio().trigger(r.HERO_THUMBS_REQUESTED, t, "update-" + e.name + "-hero-thumbnails", {
                callback: a,
                options: o
            })
        }

        function K(t, e) {
            P();
            var r = e && e.length > 0,
                o = a(".mainImg .videoPlayer", rt);
            o.length && o.remove(), a(".mainImg img", rt).length || a("<img>").appendTo(a(".mainImg", rt)), a(".heroWrapper", rt).removeClass("panorama"), a(rt).closest(".pvMain").removeClass("fullHeight"), window.removepano && window.removepano("albumViewerPano");
            var n = a(".heroPhoto", rt);
            n.attr("data-mediaid", t), W(!1);
            var i = a(".tinyThumb.current", rt),
                d = i.attr("data-bigurl"),
                l = i.attr("data-dmoGeo");
            l ? n.attr("data-dmogeo", l) : n.removeAttr("data-dmogeo"), it = d;
            var u = !i.attr("data-videoformats");
            if (q(!(r || u)), r) O(e);
            else if (u) nt.preloadPhoto(i, d);
            else {
                R();
                var s = i.attr("data-srcurl");
                z(d, s)
            }
            X(i), J(i)
        }

        function j(t, e) {
            var r = t.aggregationId,
                o = t.albumid,
                n = t.ff,
                i = t.filter,
                d = t.panoId,
                l = {
                    aggregationId: r,
                    albumid: o,
                    filter: i
                };
            n && (l.ff = n), d && (l.panoId = d);
            var u = "#photos;" + a.param(l);
            f("responsive-photoviewer").trigger("addHistory", {
                data: l
            }, document.title, u, e)
        }

        function q(t) {
            a(".heroPhoto", rt).toggleClass("playableVideo", t);
            var e = a("#heroVideo", rt).get(0);
            t || null == e || e.paused || e.pause()
        }

        function W(t) {
            t && G();
            var e = a(".heroPhoto", rt);
            e.length && U("current", t)
        }

        function z(t, e) {
            a(".videoContainer", rt).show();
            var r = a("#heroVideo", rt);
            r.length && (r.attr("poster", t), r.attr("src", e))
        }

        function G() {
            if (rt.parent("body").length) {
                var t = a(".heroPhoto .mainImg img", rt);
                if (t.length) {
                    var e = a("img", t);
                    e.length && B(e, t)
                }
            }
        }

        function Q(t, e, r) {
            a(r).find(".ui_spinner").remove()
        }

        function B() {
            setTimeout(function() {
                R()
            }, 1)
        }

        function X(t) {
            var e = t.attr("data-captionText") || t.attr("data-icaption") || "";
            e = e.replace(/[\r\n]/g, "");
            var o = a(".heroThumbnails", rt),
                n = {
                    albumid: parseInt(o.attr("data-albumid")),
                    isPano: t.hasClass("pano"),
                    avatarUrl: t.attr("data-avatarurl"),
                    captionText: e,
                    captionProvider: t.attr("data-captionprovider"),
                    helpfulvotes: parseInt(t.attr("data-helpfulVotes")),
                    mediaFilter: parseInt(t.attr("data-image-media-filter")),
                    mediaType: t.attr("data-media-type") || "",
                    mediaid: t.attr("data-mediaid"),
                    rating: parseInt(t.attr("data-rating")),
                    reviewUrl: t.attr("data-reviewurl"),
                    mediaAttributionUrl: t.attr("data-mediaAttributionUrl")
                };
            ot.getRadio().trigger(r.HERO_UPDATED, n)
        }

        function J(t) {
            var e = t.attr("data-mediaid");
            if (e) {
                var r = a(".heroThumbnails", rt),
                    n = parseInt(r.attr("data-albumid")),
                    i = parseInt(t.attr("data-image-media-filter")),
                    d = t.attr("data-media-type") || "";
                o.trackPhotoViewerImpression("detail_view", e + "|" + n + "|" + i + "|" + d)
            }
        }

        function Y() {
            var t = a("#heroVideo", rt).get(0);
            null != t && t.play()
        }

        function Z() {
            var t = a("#heroVideo", rt).get(0);
            null != t && t.addEventListener("ended", $)
        }

        function $() {
            ot.getRadio().request("isAutoPlayEnabled") && tt() && (ot.getRadio().trigger("showAutoPlayOverlay"), H(!0))
        }

        function tt() {
            var t = a(".tinyThumb.current", rt),
                e = t.next(".tinyThumb");
            return !!e.length
        }

        function et() {
            var t = a(".tinyThumb.current", rt),
                e = t.next(".tinyThumb"),
                r = e.attr("data-captionText") || e.attr("data-icaption") || "";
            return r = r.replace(/[\r\n]/g, "")
        }
        var at = s.isRtl(),
            rt = void 0,
            ot = n("#" + e.id, w),
            nt = void 0,
            it = void 0,
            dt = !1,
            lt = void 0,
            ut = void 0,
            st = void 0,
            mt = void 0,
            ct = v(function() {
                var t = window.innerHeight,
                    e = window.document.documentElement.clientHeight;
                if (t && e && t !== e) {
                    var r = e - t;
                    a(".heroThumbnails", rt).css("bottom", r + "px")
                }
            }, 20);
        return {
            onThumbSelected: N,
            moveThumbs: x,
            heroClicked: I,
            afterThumbnailLoad: Q,
            afterImgLoad: B,
            playVideo: Y
        }
    })
});
require(["ta/p13n/placements"], function(t) {
    var e = t.define.bind(t, "pv_resp_content_hero_zepto", "thumbsScroller", ["handlers", "preloader", "thumbsScroller"]);
    e(["babel/babel-helpers", "lib/jquery-amd", "api-mod", "ta/util/I18N", "common/trackingStreams"], function(t, e, a, i, s) {
        function r(t, r) {
            function h() {
                var t = e(".heroPhoto", r).attr("data-mediaid");
                return o.children.filter(function() {
                    return e(this).data("mediaid") === parseInt(t)
                }).first()
            }

            function n(t) {
                t = e(t), e(".tinyThumb.current", r).removeClass("current"), t.addClass("current");
                var a = e(".heroNav.right", r),
                    i = e(".heroNav.left", r);
                i.toggleClass("disabled", 0 === parseInt(t.attr("data-offset"))), t.next(".tinyThumb").length > 0 ? a.removeClass("disabled") : a.addClass("disabled")
            }

            function l() {
                var t = e(".heroThumbnails", e(r)),
                    a = t.width();
                e("img[data-lazyurl]", t).each(function(t, i) {
                    var s = e(i);
                    s.position().left <= a && s.attr("src", s.attr("data-lazyurl")).removeAttr("data-lazyurl")
                })
            }

            function d() {
                var t = e(".heroThumbnails .thumbNav.left", r),
                    a = e(".heroThumbnails .thumbNav.right", r);
                t.length && a.length && (u ? (t.toggleClass("disabled", !f.hasMore.loaded.right && !f.hasMore.unloaded.right), a.toggleClass("disabled", !f.hasMore.loaded.left && !f.hasMore.unloaded.left)) : (t.toggleClass("disabled", !f.hasMore.loaded.left && !f.hasMore.unloaded.left), a.toggleClass("disabled", !f.hasMore.loaded.right && !f.hasMore.unloaded.right)))
            }
            var o = {},
                f = {},
                u = i.isRtl();
            r = e(r), this.init = function() {
                if (o = {
                        thumbs: e(".photos.inHeroList", r),
                        thumbsParent: e(".heroThumbnails", r),
                        children: e(".photos.inHeroList > div", r)
                    }, !o.thumbsParent.length || !o.children.length) return !1;
                o.lastThumb = o.children.last(), o.firstThumb = o.children.first(), f = {
                    firstOffset: parseInt(o.firstThumb.attr("data-offset")),
                    lastOffset: parseInt(o.lastThumb.attr("data-offset")),
                    maxOffset: parseInt(o.thumbsParent.attr("data-totalThumbs")) - parseInt(o.thumbsParent.attr("data-panoCount")) - 1,
                    navWidth: e(".thumbNav.left", r)[0].offsetWidth,
                    oneThumbWidth: o.lastThumb[0].offsetWidth
                }, f.visibleWidth = o.thumbsParent.width() - 2 * f.navWidth;
                var t = o.thumbsParent.offset().left + f.navWidth,
                    i = t + o.thumbsParent[0].offsetWidth - f.navWidth,
                    s = o.thumbs.offset().left,
                    h = s + o.thumbs[0].offsetWidth;
                return f.curLeft = parseInt(o.thumbs.css("left")) || 0, f.curRight = parseInt(o.thumbs.css("right")) || 0, f.maxLeft = a.getPosition(o.lastThumb, o.thumbs).left + f.oneThumbWidth - f.visibleWidth, f.maxRight = o.thumbs.width() - f.visibleWidth, f.hasMore = {
                    unloaded: u ? {
                        right: f.firstOffset > 0,
                        left: f.lastOffset < f.maxOffset
                    } : {
                        right: f.lastOffset < f.maxOffset,
                        left: f.firstOffset > 0
                    },
                    loaded: {
                        right: h > i,
                        left: s < t
                    },
                    loadedNextPage: {
                        right: h - f.visibleWidth > i,
                        left: s + f.visibleWidth < t
                    }
                }, l(), d(), !0
            }, this.loadMore = function(a, i) {
                try {
                    var r = parseInt(o.thumbsParent.attr("data-pageSize"));
                    if (f.hasMore.unloaded[i]) {
                        var h = function() {
                                "left" !== i || u ? "right" === i && u && o.thumbs.css({
                                    left: "auto",
                                    right: window.getComputedStyle(o.thumbs.get(0)).right
                                }) : o.thumbs.css({
                                    right: "auto",
                                    left: window.getComputedStyle(o.thumbs.get(0)).left
                                }), m.init(), a && a()
                            },
                            n = "left" === i ? u : !u,
                            l = {
                                albumViewMode: "heroThumbs",
                                albumid: o.thumbsParent.attr("data-albumid"),
                                aggregationId: o.thumbsParent.attr("data-aggregationId"),
                                filter: o.thumbsParent.attr("data-filter")
                            };
                        n ? l.offset = Math.min(f.lastOffset + 1, f.maxOffset) : (l.offset = Math.max(f.firstOffset - r, 0), r > f.firstOffset && (l.cnt = f.firstOffset));
                        var d = "?" + e.param(l),
                            m = this,
                            b = u ? "right" : "left";
                        return t(d, h, {
                            prepend: i === b
                        }), "left" !== i || u ? "right" === i && u && o.thumbs.css({
                            right: "auto",
                            left: f.visibleWidth - f.curRight - o.thumbs.width() - 4
                        }) : o.thumbs.css({
                            left: "auto",
                            right: f.visibleWidth - f.curLeft - o.thumbs.width() - 4
                        }), !0
                    }
                } catch (t) {
                    s.error(t, "ResponsivePhotoViewer hero thumbs loadMore failed")
                }
                return !1
            };
            var m = function(t) {
                    var e = h();
                    if (e.length > 0) {
                        var i = o.thumbsParent[0].getBoundingClientRect(),
                            s = e[0].getBoundingClientRect(),
                            r = i.left + f.navWidth,
                            l = i.right - f.navWidth,
                            d = l - r,
                            m = s.right - s.left,
                            b = s.right > l,
                            c = s.left < r,
                            v = !1,
                            p = a.getPosition(e, o.thumbs).left;
                        u && (p = o.thumbs.width() - p - m), b ? (f.hasMore.loadedNextPage.right || t || (v = this.loadMore(g.bind(this, "current", !0), u ? "left" : "right")), v || (u ? o.thumbs.css("right", Math.min(-p + d - m, 0) + "px") : o.thumbs.css("left", Math.max(-p, -f.maxLeft) + "px"))) : c && (f.hasMore.loadedNextPage.left || t || (v = this.loadMore(g.bind(this, "current", !0), u ? "right" : "left")), v || (u ? o.thumbs.css("right", Math.max(-p, -f.maxRight) + "px") : o.thumbs.css("left", Math.min(-p + d - m, 0) + "px"))), n(e)
                    }
                }.bind(this),
                b = function(t, e) {
                    var a = !1;
                    if (f.hasMore.loadedNextPage[t] || e || (a = this.loadMore(g.bind(this, t, !0), t)), !a && f.hasMore.loaded[t]) {
                        var i = void 0,
                            s = u ? "right" : "left";
                        i = "right" === t ? u ? Math.min(f.curRight + f.visibleWidth, 0) : Math.max(f.curLeft - f.visibleWidth, -f.maxLeft) : u ? Math.max(f.curRight - f.visibleWidth, -f.maxRight) : Math.min(f.curLeft + f.visibleWidth, 0), o.thumbs.css(s, i + "px")
                    }
                }.bind(this);
            this.scroll = function(t, e) {
                "left" === t || "right" === t ? b(t, e) : "current" === t && m(e);
                var a = this;
                o.thumbs.off("transitionend").on("transitionend", a.init)
            };
            var g = function(t, e) {
                this.init() && this.scroll(t, e)
            }.bind(this)
        }
        return r
    })
});
require(["ta/p13n/placements"], function(t) {
    var a = t.define.bind(t, "pv_resp_content_hero_zepto", "preloader", ["handlers", "preloader", "thumbsScroller"]);
    a(["babel/babel-helpers", "lib/jquery-amd"], function(t, a) {
        function e() {
            function t() {
                i = null, a()
            }

            function a() {
                if (!i) {
                    var a = r.shift();
                    a && (i = new Image, e[a] = i, i.onload = t, i.onerror = t, i.src = a, i.complete && t())
                }
            }
            var e = {},
                r = [],
                i = null;
            this.clear = function() {
                r = [], e = {}
            }, this.clearQueue = function() {
                r = []
            }, this.getImageByUrl = function(t) {
                return e[t]
            }, this.addToQueue = function(t) {
                t && !e[t] && r.indexOf(t) < 0 && (r.push(t), setTimeout(a, 1))
            }
        }

        function r(t, r, o) {
            var d = this,
                l = new e;
            t = a(t), this.clear = function(t) {
                t ? l.clear() : l.clearQueue()
            }, this.preloadPhoto = function(e, i) {
                e = a(e);
                var n = a(".heroPhoto", t),
                    u = a(".mainImg img", n),
                    h = e.attr("data-heroheight"),
                    p = e.attr("data-herowidth"),
                    c = a(l.getImageByUrl(i) || "<img/>"),
                    s = function() {
                        r(), o() === i && u.parent().length && u[0] !== c[0] && (u.replaceWith(c), d.beginPreload(), c.off("load"))
                    };
                c.on("load", s), h && c.prop("height", parseInt(h)), p && c.prop("width", parseInt(p)), c.prop("src") || c.prop("src", i), c.prop("complete") && s.call(c)
            }, this.preloadVideo = function(e) {
                e = a(e);
                var r = a(".heroPhoto", t),
                    i = e.attr("data-bigurl"),
                    n = e.attr("data-icaption"),
                    o = e.attr("data-srcurl"),
                    d = e.attr("data-videoformats");
                a(".mainImg img", r).remove();
                var l = a(".mainImg", r);
                return !!l.length && (l.append(a("<div></div>").addClass("videoPlayer").attr({
                    "data-videoFormats": d,
                    "data-src": o,
                    "data-preview": i,
                    "data-icaption": n
                }).append(a("<div></div>").addClass("jwPlayer").prop("id", "JWPLAYER"))), !0)
            }, this.beginPreload = function() {
                var e = a(".tinyThumb", t),
                    r = e.filter(".current"),
                    o = r.index();
                if (r.length) {
                    var d = Math.max(o - i, 0),
                        u = Math.min(o + 1 + n, e.length),
                        h = void 0;
                    for (h = o + 1; h < u; h++) l.addToQueue(a(e[h]).attr("data-bigUrl"));
                    for (h = o - 1; h >= d; h--) l.addToQueue(a(e[h]).attr("data-bigUrl"))
                }
            }
        }
        var i = 1,
            n = 3;
        return r
    })
});
require(["ta/p13n/placements"], function(t) {
    var e = t.define.bind(t, "pv_resp_content_hero_zepto", "handlers", ["handlers", "preloader", "thumbsScroller"]);
    e(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "photoviewer/radioHelper", "utils/ajax", "ta/prwidgets", "thumbsScroller", "utils/urlutils", "ta/util/I18N", "preloader", "common/trackingStreams", "utils/responsive", "ta/common/Swipe", "common/Radio"], function(t, e, a, r, o, n, i, d, l, u, s, c, m, p, h, f) {
        "use strict";

        function g() {
            tt.getRadio().reply("currentHeroId", v), tt.getRadio().on("update-" + e.name + "-hero-thumbnails", A), $ = a("#" + e.id), dt = new l(S, $), dt.init(), tt.getRadio().off(r.ADVANCE_HERO_CLICKED).on(r.ADVANCE_HERO_CLICKED, function(t) {
                P(1 === t)
            }), tt.getRadio().off("autoPlayNext", z).on("autoPlayNext", z), tt.getRadio().off("cancelAutoPlay", R).on("cancelAutoPlay", R), tt.getRadio().off(r.RHR_CLICKED, C).on(r.RHR_CLICKED, C), tt.getRadio().reply("nextVideoTitle", Y), et = new c($, T, function() {
                return at
            }), et.beginPreload();
            var t = a(".tinyThumb.current", $).attr("data-panorama");
            t && k(t);
            var n = a(".heroWrapper", $);
            n.off("mouseover").on("mouseover", function() {
                tt.getRadio().trigger(r.HERO_FOCUS_CHANGED, {
                    hasFocus: !0
                })
            }), n.off("mouseout").on("mouseout", function() {
                tt.getRadio().trigger(r.HERO_FOCUS_CHANGED, {
                    hasFocus: !1
                })
            });
            var i = a(".photoviewerContainer.hero .pvContent");
            i.length && (nt && nt.cancel(), nt = h.addSwipeListener(i.get(0), function(t) {
                if (!n.hasClass("panorama")) {
                    if (a(t.event.target).closest(".heroThumbnails").length) return;
                    P("left" === t.direction), o.recordPhotoSwipe()
                }
            })), a(".mainImg", n).off("click", w).on("click", w), a(".inHeroList", $).length && (it && it.cancel(), it = h.addSwipeListener(a(".inHeroList", $).get(0), function(t) {
                t.event.stopPropagation(), D("left" === t.direction ? "right" : "left")
            })), setTimeout(function() {
                var t = a(".tinyThumb.current", $);
                G(t), Q(t)
            }, 0), B(), M(b())
        }

        function v() {
            if ($.length > 0) {
                var t = a(".tinyThumb.current", $);
                return t.attr("data-mediaid")
            }
            return null
        }

        function b() {
            return a(".heroPhoto", $).hasClass("playableVideo")
        }

        function y() {
            ot = setTimeout(function() {
                a(".heroPhoto .ui_spinner", $).show()
            }, 500)
        }

        function T() {
            clearTimeout(ot), a(".heroPhoto .ui_spinner", $).hide()
        }

        function w() {
            if (!a(".heroWrapper", $).hasClass("panorama")) {
                if (p.desktop()) {
                    var t = a(".pano.tinyThumb.current", $);
                    if (t.length || b()) return;
                    P(!Z)
                }
                C(), tt.getRadio().trigger(r.HERO_CLICKED)
            }
        }

        function C() {
            a(".heroThumbnails, .actions", $).toggleClass("anchor")
        }

        function P(t) {
            var e = void 0,
                r = void 0,
                o = a(".tinyThumb.current", $);
            if (t ? (r = o.next(".tinyThumb"), !r.length && parseInt(o.attr("data-offset")) > 0 && (e = Z ? "left" : "right")) : (r = o.prev(".tinyThumb"), !r.length && parseInt(o.attr("data-offset")) > 0 && (e = Z ? "right" : "left")), e) return void dt.loadMore(P.bind(self, t), e);
            var n = _(r) ? H(r) : V(r);
            n && S(n)
        }

        function R() {
            P(!1)
        }

        function I(t) {
            var e = _(t);
            return e ? H(t) : V(t)
        }

        function _(t) {
            var e = a(t);
            return e.hasClass("pano")
        }

        function E() {
            var t = a(".heroThumbnails", $);
            return {
                albumViewMode: "hero",
                aggregationId: t.attr("data-aggregationId"),
                albumid: t.attr("data-albumid"),
                filter: t.attr("data-filter")
            }
        }

        function H(t) {
            if (!t) return {};
            var e = a(t),
                r = e.attr("data-mediaid"),
                o = e.attr("data-panorama"),
                n = E();
            return n.panoId = r, n.panoPath = o, n
        }

        function V(t) {
            if (!t) return {};
            var e = a(t),
                r = e.attr("data-mediaid"),
                o = E();
            return o.ff = r, o
        }

        function k(t) {
            T(), require(["babel/babel-helpers", "trjs!krpano"], function(e) {
                a("#PANO_HOLDER", $).empty().removeProp("onclick");
                var r = {
                    html5: "only",
                    wmode: "transparent",
                    xml: "/PanoramaXml?pano=" + encodeURIComponent(t),
                    target: "PANO_HOLDER",
                    id: "albumViewerPano"
                };
                a(".heroWrapper", $).addClass("panorama"), a($).closest(".pvMain").addClass("fullHeight"), window.embedpano && window.embedpano(r)
            })
        }

        function A(t, e) {
            var r = a(t),
                o = r.attr("data-updateComponent"),
                n = $.find('[data-updateComponent="' + o + '"]'),
                i = a(".photos.inHeroList", n),
                d = a(".tinyThumb", r);
            e && e.options && e.options.prepend ? (i.prepend(d), D("current", !0)) : i.append(d), rt = !1, r.length > 0 && e && e.callback && "function" == typeof e.callback && e.callback()
        }

        function L(t, e, r) {
            a(e).hasClass("disabled") || (Z && ("left" === r ? r = "right" : "right" === r && (r = "left")), D(r))
        }

        function D(t, e) {
            try {
                dt.scroll(t, e)
            } catch (e) {
                m.error(e, "albumViewer:scrollThumbs failed", null, {
                    direction: t
                })
            }
        }

        function O(t, e) {
            if (S(I(e)), t && "click" === t.type) {
                var r = a(e),
                    n = r.data("mediaid"),
                    i = r.data("albumid"),
                    d = r.data("mediaFilter"),
                    l = r.data("mediaType");
                o.recordHeroThumbClick(n, i, d, l), tt.getRadio().trigger("check-ad-refresh")
            }
        }

        function S(t, e, a) {
            if (!rt && (T(), et ? et.clear(!1) : m.error(null, "m_heroPreloader is null in responsive photo viewer:update()"), "string" == typeof t && (t = u.getUrlQueryArgs(t)), t && t.albumViewMode))
                if ("hero" === t.albumViewMode) {
                    var r = t.panoId || t.ff;
                    U(t, function() {
                        return N(r, t.panoPath)
                    }), N(r, t.panoPath)
                } else "heroThumbs" === t.albumViewMode && x(t, e, a)
        }

        function x(t, a, o) {
            rt = !0, tt.getRadio().trigger(r.HERO_THUMBS_REQUESTED, t, "update-" + e.name + "-hero-thumbnails", {
                callback: a,
                options: o
            })
        }

        function N(t, e) {
            y();
            var r = e && e.length > 0,
                o = a(".mainImg .videoPlayer", $);
            o.length && o.remove(), a(".mainImg img", $).length || a("<img>").appendTo(a(".mainImg", $)), a(".heroWrapper", $).removeClass("panorama"), a($).closest(".pvMain").removeClass("fullHeight"), window.removepano && window.removepano("albumViewerPano");
            var n = a(".heroPhoto", $);
            n.attr("data-mediaid", t), F(!1);
            var i = a(".tinyThumb.current", $),
                d = i.attr("data-bigurl"),
                l = i.attr("data-dmoGeo");
            l ? n.attr("data-dmogeo", l) : n.removeAttr("data-dmogeo"), at = d;
            var u = !i.attr("data-videoformats");
            if (M(!(r || u)), r) k(e);
            else if (u) et.preloadPhoto(i, d);
            else {
                T();
                var s = i.attr("data-srcurl");
                K(d, s)
            }
            G(i), Q(i)
        }

        function U(t, e) {
            var r = t.aggregationId,
                o = t.albumid,
                n = t.ff,
                i = t.filter,
                d = t.panoId,
                l = {
                    aggregationId: r,
                    albumid: o,
                    filter: i
                };
            n && (l.ff = n), d && (l.panoId = d);
            var u = "#photos;" + a.param(l);
            f("responsive-photoviewer").trigger("addHistory", {
                data: l
            }, document.title, u, e)
        }

        function M(t) {
            a(".heroPhoto", $).toggleClass("playableVideo", t);
            var e = a("#heroVideo", $).get(0);
            t || null == e || e.paused || e.pause()
        }

        function F(t) {
            t && q();
            var e = a(".heroPhoto", $);
            e.length && D("current", t)
        }

        function K(t, e) {
            a(".videoContainer", $).show();
            var r = a("#heroVideo", $);
            r.length && (r.attr("poster", t), r.attr("src", e))
        }

        function q() {
            if ($.parent("body").length) {
                var t = a(".heroPhoto .mainImg img", $);
                if (t.length) {
                    var e = a("img", t);
                    e.length && j(e, t)
                }
            }
        }

        function W(t, e, r) {
            a(r).find(".ui_spinner").remove()
        }

        function j() {
            setTimeout(function() {
                T()
            }, 1)
        }

        function G(t) {
            var e = t.attr("data-captionText") || t.attr("data-icaption") || "";
            e = e.replace(/[\r\n]/g, "");
            var o = a(".heroThumbnails", $),
                n = {
                    albumid: parseInt(o.attr("data-albumid")),
                    isPano: t.hasClass("pano"),
                    avatarUrl: t.attr("data-avatarurl"),
                    captionText: e,
                    captionProvider: t.attr("data-captionprovider"),
                    helpfulvotes: parseInt(t.attr("data-helpfulVotes")),
                    mediaFilter: parseInt(t.attr("data-image-media-filter")),
                    mediaType: t.attr("data-media-type") || "",
                    mediaid: t.attr("data-mediaid"),
                    rating: parseInt(t.attr("data-rating")),
                    reviewUrl: t.attr("data-reviewurl")
                };
            tt.getRadio().trigger(r.HERO_UPDATED, n)
        }

        function Q(t) {
            var e = t.attr("data-mediaid");
            if (e) {
                var r = a(".heroThumbnails", $),
                    n = parseInt(r.attr("data-albumid")),
                    i = parseInt(t.attr("data-image-media-filter")),
                    d = t.attr("data-media-type") || "";
                o.trackPhotoViewerImpression("detail_view", e + "|" + n + "|" + i + "|" + d)
            }
        }

        function z() {
            var t = a("#heroVideo", $).get(0);
            null != t && t.play()
        }

        function B() {
            var t = a("#heroVideo", $).get(0);
            null != t && t.addEventListener("ended", X)
        }

        function X() {
            tt.getRadio().request("isAutoPlayEnabled") && J() && (tt.getRadio().trigger("showAutoPlayOverlay"), P(!0))
        }

        function J() {
            var t = a(".tinyThumb.current", $),
                e = t.next(".tinyThumb");
            return !!e.length
        }

        function Y() {
            var t = a(".tinyThumb.current", $),
                e = t.next(".tinyThumb"),
                r = e.attr("data-captionText") || e.attr("data-icaption") || "";
            return r = r.replace(/[\r\n]/g, "")
        }
        var Z = s.isRtl(),
            $ = void 0,
            tt = n("#" + e.id, g),
            et = void 0,
            at = void 0,
            rt = !1,
            ot = void 0,
            nt = void 0,
            it = void 0,
            dt = void 0;
        return {
            onThumbSelected: O,
            moveThumbs: L,
            heroClicked: w,
            afterThumbnailLoad: W,
            afterImgLoad: j,
            playVideo: z
        }
    })
});
define("utils/classnameUtils", ["vanillajs"], function() {
    function s(s) {
        return e[s] ? e[s].lastIndex = 0 : e[s] = new RegExp("(\\s|^)" + s + "(\\s|$)", "g"), e[s]
    }
    var a = {},
        e = {};
    return a.hasClass = function(a, e) {
        return !!a && (a.classList ? a.classList.contains(e) : s(e).test(a.className))
    }, a.addClass = function(s, e) {
        s && e && (s.classList ? s.classList.add(e) : a.hasClass(s, e) || (s.className += " " + e))
    }, a.removeClass = function(a, e) {
        a && e && (a.classList ? a.classList.remove(e) : a.className = a.className.replace(s(e), " "))
    }, a.toggleClass = function(s, e, n) {
        s && (n || void 0 === n && !a.hasClass(s, e) ? a.addClass(s, e) : a.removeClass(s, e))
    }, a.getParentByClassname = function(s, e) {
        for (var n = s && s.parentNode; n; n = n.parentNode)
            if (a.hasClass(n, e)) return n;
        return null
    }, a
});
define("responsive/text-resizer", ["babel/babel-helpers", "utils/to-array", "utils/classnameUtils", "utils/throttle", "utils/ResponsiveEvents", "vanillajs"], function(t, e, i, r, n) {
    function l() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
        return !t === document && (t = document.body), e(t.querySelectorAll("." + p)).filter(function(t) {
            return !!t[v]
        })
    }

    function u(e) {
        e.style.fontSize = null;
        var i = (getComputedStyle(e) || {}).fontSize;
        if (!i) return {};
        var r = i.match(b),
            n = t.slicedToArray(r, 3),
            l = (n[0], n[1]),
            u = n[2],
            o = parseFloat(l);
        return o && o > .001 && z[u] ? {
            originalSize: o,
            units: u,
            multiplier: 1,
            minMult: Math.max(y, z[u] / o)
        } : {}
    }

    function o(t) {
        if (t[v]) return t[v];
        var e = u(t);
        return e.originalSize ? (t[v] = Object.assign(e, {
            group: t.getAttribute(h),
            multApplied: 1
        }), t[v]) : null
    }

    function a(t) {
        for (var e = 0; e < g && t.length; e++) t.forEach(c), t = t.filter(function(t) {
            if (!(t.clientWidth > 0) || t.scrollWidth <= t.clientWidth) return !1;
            var e = t[v],
                i = (parseFloat(t.style.paddingLeft) || 0) + (parseFloat(t.style.paddingRight) || 0),
                r = t.scrollWidth - i;
            if (r < 1) return !1;
            var n = (t.clientWidth - i - 2) / r;
            return n = Math.min(n, .95) * e.multiplier, n <= e.minMult ? (e.multiplier = e.minMult, !1) : (e.multiplier = n, !0)
        });
        t.length && (t.forEach(c), t.forEach(function(t) {
            t.scrollWidth > t.clientWidth && (t[v].multiplier = t[v].minMult)
        }))
    }

    function c(t) {
        var e = t[v];
        if (!(e && e.multApplied != e.multiplier && e.multiplier > 0)) return !1;
        var i = Math.max(z[e.units], e.originalSize * e.multiplier);
        return t.style.fontSize = "" + i + e.units, e.multApplied = e.multiplier, !0
    }

    function s(t) {
        if (t && t.length) {
            var e = {};
            t.forEach(function(t) {
                var i = t[v];
                i.group ? e[i.group] = 1 : c(t)
            }), Object.keys(e).length && (t = l(document.body).filter(function(t) {
                var i = t[v],
                    r = i.group;
                return !!(i && r && e[r] && i.multiplier > 0) && (e[r] > i.multiplier && (e[r] = i.multiplier), !0)
            }), t.forEach(function(t) {
                var i = t[v];
                i.multiplier = e[i.group], c(t)
            }))
        }
    }

    function f(t) {
        if (t && (E || (E = !0, f(document.body), t !== document && t !== document.body))) {
            var c = e(t.querySelectorAll("." + m));
            if (c.length) {
                c.forEach(function(t) {
                    i.removeClass(t, m), i.addClass(t, p)
                });
                var h = [];
                c = c.filter(function(t) {
                    var e = o(t);
                    return !!e || (h.push(t), !1)
                }), a(c), h.forEach(function(t) {
                    i.removeClass(t, p), i.addClass(t, m)
                }), s(c), S || (window.addEventListener("resize", r(function() {
                    d(document.body)
                }, 50)), n.on("breakpoint", function() {
                    l(document.body).forEach(function(t) {
                        return Object.assign(t[v], u(t))
                    })
                }), S = !0)
            }
        }
    }

    function d(t) {
        var e = l(t);
        a(e), s(e)
    }
    var m = "autoResize",
        p = "__resizeWatch",
        h = "data-sizegroup",
        v = "__resizerContext",
        g = 4,
        y = .5,
        b = /^(\d+(?:\.\d+)?)(.*)$/,
        z = {
            px: 8.5,
            em: .5,
            pt: 6,
            "%": 50
        },
        E = !1,
        S = !1;
    return {
        init: f,
        refresh: d
    }
});
require(["ta/p13n/placements"], function(e) {
    var n = e.define.bind(e, "pv_resp_navbar", "handlers", ["handlers"]);
    n(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "utils/responsive", "utils/ResponsiveEvents", "common/Radio", "photoviewer/radioHelper", "ta/prwidgets", "responsive/text-resizer", "ta/Core/TA.Event", "ta/common/Repoll"], function(e, n, o, l, t, i, a, r, s, d, v, u, m) {
        "use strict";

        function p() {
            g = o("#" + n.id), v.init(g.get(0)), y(), r("responsive-photoviewer").off("overlay-shown", w).on("overlay-shown", w)
        }

        function c() {
            i.tablet() || require(["babel/babel-helpers", "overlays/Overlay", "overlays/position/fullside", "overlays/styles/windowshade", "overlays/options/keepInDom", "overlays/styles/modal", "overlays/options/closeOnWindowshadeClick", "overlays/options/slideInOut"], function(e, n, o, l, i, a, r, s) {
                if (!A) {
                    var d = g.find(".albums_flyout");
                    A = new n(g.get(0), o.right(), new a(null, null, "second-layer", null, null, d.get(0)), l("dark second-layer"), s("from_right"), r), A.on("hide", function() {
                        if (!N) {
                            var e = f();
                            if (e) {
                                var n = "hero" === e ? "detail_view_album_click" : "grid_view_album_click";
                                t.recordAlbumDropdownAbandonment(n)
                            }
                        }
                        N = !1
                    })
                }
                A.show()
            })
        }

        function f() {
            var e = o(".small_picker");
            return e.length ? e.attr("data-viewType") : null
        }

        function b(e, n, o) {
            A && (A.destroy(), A = null, N = !0), k.getRadio().trigger(l.ALBUM_CHANGE, {
                albumid: o
            }), t.recordFilterItemClick(o, n, "album")
        }

        function h(e) {
            if (g && e) {
                var n = g.find(".meta_wrapper");
                n && n.remove(), g.append(e), d.initWidgets(g[0]), y()
            }
        }

        function y() {
            g && g.find(".poll-in-progress").length && w()
        }

        function w() {
            _ || (_ = m({
                placement: n.name
            }), _.setPageUrl("/MetaPlacementAjax"), _.setAjaxParamsNoPoll({
                placementName: n.name,
                detail: n.location_id,
                servlet: n.servletName,
                metaReferer: n.servletName
            })), _ && _.setNotDone()
        }
        var g = void 0,
            _ = void 0,
            k = s("#" + n.id, p),
            A = null,
            N = !1;
        return a.onOver("tablet", function() {
            A && A.hide()
        }), u.on("update-meta-" + n.name, h), {
            showAlbumsOverlay: c,
            albumClicked: b
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var l = e.define.bind(e, "pv_resp_navbar_zepto", "handlers", ["handlers"]);
    l(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "utils/responsive", "utils/ResponsiveEvents", "photoviewer/radioHelper", "ta/prwidgets", "responsive/text-resizer"], function(e, l, i, n, o, r, t, s, a, d) {
        "use strict";

        function u() {
            b = i("#" + l.id), d.init(b.get(0))
        }

        function v() {
            r.tablet() || require(["babel/babel-helpers", "overlays/Overlay", "overlays/position/fullside", "overlays/styles/windowshade", "overlays/options/keepInDom", "overlays/styles/modal", "overlays/options/closeOnWindowshadeClick", "overlays/options/slideInOut"], function(e, l, i, n, o, r, t, s) {
                if (!y) {
                    var a = b.find(".albums_flyout");
                    y = new l(b.get(0), i.right(), new r(null, null, "second-layer", null, null, a.get(0)), n("dark second-layer"), s("from_right"), t)
                }
                y.show()
            })
        }

        function p(e, l, i) {
            y && (y.destroy(), y = null), c.getRadio().trigger(n.ALBUM_CHANGE, {
                albumid: i
            }), o.recordFilterItemClick(i, l, "album")
        }
        var b = void 0,
            c = s("#" + l.id, u),
            y = null;
        return t.onOver("tablet", function() {
            y && y.hide()
        }), {
            showAlbumsOverlay: v,
            albumClicked: p
        }
    })
});
require(["ta/prwidgets"], function(e) {
    var n = e.define.bind(e, "common_ad_resp_breakpoint", "handlers", ["handlers"]);
    n(["widget", "lib/jquery-amd", "ta/Core/TA.FireEvent", "utils/throttle"], function(e, n, i, t) {
        function a() {
            var t = n(".ad", e.element),
                a = "none" !== t.css("display");
            if (r !== a) {
                var d = t.find(".gptAd");
                d.toggleClass("inactive", !a), void 0 !== r && i.fireEvent("adSizeChanged"), r = a
            }
        }

        function d() {
            window.addEventListener("resize", t(a, 100)), a()
        }
        var r;
        d()
    })
});
define("cpm/DblClickAPI", ["lib/jquery-amd", "ta/Core/TA.Store", "ta/util/Error", "utils/responsive"], function(e, t, a, o) {
    "use strict";

    function n() {
        var t = e(window).width(),
            a = e(window).height(),
            o = 100,
            n = Math.floor(t / o) * o,
            g = Math.floor(a / o) * o;
        return n = n > 2e3 ? 9999 : n, g = g > 1500 ? 9999 : g, "w" + n + "_h" + g
    }

    function g(e) {
        try {
            var g = t.retrieve("ads.pageTargeting") || {};
            if (e || (g.win_size = n()), g.resp && "yes" === g.resp) {
                var r = "";
                r = o.widescreen() ? "dt_w" : o.desktop() ? "dt_n" : o.tablet() ? "tablet" : "mobile", g.layout = r
            }
            for (var i in g) googletag.pubads().setTargeting(i, g[i])
        } catch (e) {
            a.record(e, "DblClickAPI init: unable to add page targeting")
        }
    }

    function r() {
        var e = t.retrieve("ads.ppid");
        e && googletag.pubads().setPublisherProvidedId(e)
    }
    window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [];
    var i = {},
        d = !1,
        s = !1;
    return i.enableSingleRequestMode = function() {
        s = !0
    }, i.init = function(e, a) {
        if (d) return void googletag.cmd.push(function() {
            googletag.pubads().addEventListener("slotRenderEnded", a)
        });
        if (d = !0, !t.has("ads.earlyAPILoad")) {
            var o = document.createElement("script");
            o.async = !0, o.type = "text/javascript", o.src = "//www.googletagservices.com/tag/js/gpt.js";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(o, n)
        }
        googletag.cmd.push(function() {
            r(), g(e);
            var o = window.navigator.userAgent,
                n = !o || o.indexOf("Edge") === -1,
                i = {
                    allowOverlayExpansion: !0,
                    allowPushExpansion: !0,
                    sandbox: n
                };
            googletag.pubads().setSafeFrameConfig(i), t.has("jwplayerHelper.adUrl") && googletag.pubads().enableVideoAds(), googletag.pubads().addEventListener("slotRenderEnded", a), s && googletag.pubads().enableSingleRequest(), googletag.enableServices()
        })
    }, i
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "pv_resp_right_hand_rail", "handlers", ["handlers"]);
    o(["babel/babel-helpers", "placement", "lib/jquery-amd", "cpm/DblClickAPI", "ta/Core/TA.FireEvent", "common/Radio", "photoviewer/radioHelper", "photoviewer/models/eventTypes", "ta/Core/TA.Store", "utils/throttle"], function(e, o, t, a, r, i, n, d, s, f) {
        function c() {
            a.init(), googletag.cmd.push(function() {
                var e = {
                    selector: "#gpt-ad-300x250-locationphotoalbum",
                    isNewContext: !0,
                    servlet: "locationphotoalbum"
                };
                r.fireEvent("ads.injectAjaxAds", e)
            })
        }

        function l() {
            ++u, u % v === 0 && c()
        }

        function h() {
            var e = t(".pv_rhr").data(),
                o = e.gptadstubsjson,
                a = e.gptpagetargetingjson;
            s.store("ads.locationphotoalbum.adStubs", o.adTypes), s.store("ads.locationphotoalbum.pageTargeting", a)
        }

        function p() {
            m.getRadio().trigger(d.RHR_CLICKED)
        }

        function g() {
            if (!R) {
                h(), c();
                var e = t("#" + o.id);
                t(".pv_rhr", e).off("click", p).on("click", p), m.getRadio().off("check-ad-refresh"), m.getRadio().off("force-ad-refresh"), m.getRadio().off("re-initialize-ads"), i("responsive-photoviewer").off("overlay-shown", c), m.getRadio().on("check-ad-refresh", l), o.params.throttleAdRefresh ? m.getRadio().on("force-ad-refresh", f(c, 5e3)) : m.getRadio().on("force-ad-refresh", c), m.getRadio().on("re-initialize-ads", function() {
                    R = !1
                }), i("responsive-photoviewer").on("overlay-shown", c), r.off("mediaViewerCheckAdRefresh"), r.on("mediaViewerCheckAdRefresh", c), R = !0
            }
        }
        var v = 6,
            u = 0,
            m = n("#" + o.id, g),
            R = !1
    })
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "pv_resp_right_hand_rail_zepto", "handlers", ["handlers"]);
    o(["babel/babel-helpers", "placement", "lib/jquery-amd", "cpm/DblClickAPI", "ta/Core/TA.Event", "common/Radio", "photoviewer/radioHelper", "photoviewer/models/eventTypes", "ta/Core/TA.Store"], function(e, o, a, t, i, r, n, d, s) {
        function c() {
            t.init(), googletag.cmd.push(function() {
                var e = {
                    selector: "#gpt-ad-300x250-locationphotoalbum",
                    isNewContext: !0,
                    servlet: "locationphotoalbum"
                };
                i.fireEvent("ads.injectAjaxAds", e)
            })
        }

        function f() {
            ++v, v % g === 0 && c()
        }

        function l() {
            var e = a(".pv_rhr");
            s.store("ads.locationphotoalbum.adStubs", e.data("gptadstubsjson").adTypes), s.store("ads.locationphotoalbum.pageTargeting", e.data("gptpagetargetingjson"))
        }

        function p() {
            u.getRadio().trigger(d.RHR_CLICKED)
        }

        function h() {
            if (!m) {
                l(), c();
                var e = a("#" + o.id);
                a(".pv_rhr", e).off("click", p).on("click", p), u.getRadio().off("check-ad-refresh"), u.getRadio().off("force-ad-refresh"), u.getRadio().off("re-initialize-ads"), r("responsive-photoviewer").off("overlay-shown", c), u.getRadio().on("check-ad-refresh", f), u.getRadio().on("force-ad-refresh", c), u.getRadio().on("re-initialize-ads", function() {
                    m = !1
                }), r("responsive-photoviewer").on("overlay-shown", c), i.off("mediaViewerCheckAdRefresh"), i.on("mediaViewerCheckAdRefresh", c), m = !0
            }
        }
        var g = 6,
            v = 0,
            u = n("#" + o.id, h),
            m = !1
    })
});
define("utils/safeCall", ["babel/babel-helpers", "vanillajs"], function(n, e) {
    function l(n) {
        if ("string" == typeof n) {
            var e = n.split(".");
            if (e && e.length > 0) {
                for (var l = e.reduce(function(n, e) {
                        var l = n ? n[e] : null;
                        return l instanceof Function ? l.bind(n) : l
                    }, window), i = arguments.length, r = Array(i > 1 ? i - 1 : 0), t = 1; t < i; t++) r[t - 1] = arguments[t];
                return l && l.apply(void 0, r)
            }
        }
    }
    return {
        call: l
    }
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "responsive_photoviewer", "handlers", ["handlers"]);
    o(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "common/Radio", "photoviewer/radioHelper", "photoviewer/loader", "utils/ajax", "utils/safeCall"], function(e, o, n, i, t, r, a, d, s, c) {
        "use strict";

        function f(e) {
            n("#" + o.id).find(".photoviewerLoading").removeClass("hidden"), C.getRadio().trigger("re-initialize-ads"), r("responsive-photoviewer").off("contents-unchanged", v).on("contents-unchanged", v), d.load(n.extend({}, o.params, e))
        }

        function p(e, i, t) {
            var r = d.buildUrl(n.extend({}, o.params, e));
            s(r, {
                success: function(e) {
                    var o = n(e).find('[data-updateComponent="' + i + '"]');
                    C.getRadio().trigger(i, o.get(0), t)
                },
                error: function() {}
            })
        }

        function l() {
            _ || (c.call("performance.mark", "responsive-photo-viewer-first-load"), h(), _ = !0), C.getRadio().off(m, f).on(m, f), C.getRadio().off(R, p).on(R, p), t.attachResizeTracker()
        }

        function v() {
            n("#" + o.id).find(".photoviewerLoading").addClass("hidden")
        }

        function u() {
            r("responsive-photoviewer").trigger("close")
        }

        function h() {
            w(), r("responsive-photoviewer").off("overlay-shown", w).on("overlay-shown", w), r("responsive-photoviewer").off("overlay-hide", g).on("overlay-hide", g)
        }

        function g() {
            n(document).off("keyup", E)
        }

        function w() {
            n(document).on("keyup", E)
        }

        function E(e) {
            switch (e = e || window.event, e.keyCode) {
                case 37:
                case 39:
                    C.getRadio().emit(i.NAV_KEY_PRESSED, e)
            }
        }
        var m = [i.ALBUM_CHANGE, i.TYPE_CHANGE, i.CATEGORY_CHANGE, i.HERO_PHOTO_CHANGE, i.BACK_TO_GALLERY].join(" "),
            R = [i.GRID_SCROLLED, i.HERO_THUMBS_REQUESTED].join(" "),
            _ = !1,
            C = a("#" + o.id, l);
        return {
            close: u
        }
    })
});
require(["ta/p13n/placements"], function(e) {
    var o = e.define.bind(e, "responsive_photoviewer_zepto", "handlers", ["handlers"]);
    o(["babel/babel-helpers", "placement", "lib/jquery-amd", "photoviewer/models/eventTypes", "photoviewer/tracking", "common/Radio", "photoviewer/radioHelper", "photoviewer/loader", "utils/ajax", "utils/safeCall"], function(e, o, i, r, t, n, a, s, l, d) {
        "use strict";

        function p(e) {
            g.getRadio().trigger("re-initialize-ads"), s.load(i.extend({}, o.params, e))
        }

        function c(e, r, t) {
            l({
                url: s.buildUrl(i.extend({}, o.params, e)),
                success: function(e) {
                    var o = i(e).find('[data-updateComponent="' + r + '"]');
                    g.getRadio().trigger(r, o.get(0), t)
                },
                error: function() {}
            })
        }

        function u() {
            R || (d.call("performance.mark", "responsive-photo-viewer-first-load"), R = !0), g.getRadio().off(v, p).on(v, p), g.getRadio().off(E, c).on(E, c), t.attachResizeTracker()
        }

        function f() {
            n("responsive-photoviewer").trigger("close")
        }
        var v = [r.ALBUM_CHANGE, r.TYPE_CHANGE, r.CATEGORY_CHANGE, r.HERO_PHOTO_CHANGE, r.BACK_TO_GALLERY].join(" "),
            E = [r.GRID_SCROLLED, r.HERO_THUMBS_REQUESTED].join(" "),
            R = !1,
            g = a("#" + o.id, u);
        return {
            close: f
        }
    })
});