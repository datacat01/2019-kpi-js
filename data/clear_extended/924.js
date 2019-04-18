if (!window.ustream) {
    window.ustream = {}
}
if (!ustream.labels) {
    ustream.labels = {}
}(function(l) {
    l["js.v3.datepicker.monthnames"] = "January|February|March|April|May|June|July|August|September|October|November|December";
    l["js.v3.datepicker.monthnames_short"] = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec";
    l["js.v3.datepicker.daynames"] = "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday";
    l["js.v3.datepicker.daynames_short"] = "Sun|Mon|Tue|Wed|Thu|Fri|Sat";
    l["js.v3.datepicker.closetext"] = "Done";
    l["js.v3.datepicker.prevtext"] = "Prev";
    l["js.v3.datepicker.nexttext"] = "Next";
    l["js.v3.datepicker.currenttext"] = "Today";
    l["js.v3.datepicker.daynamesmin"] = "Su|Mo|Tu|We|Th|Fr|Sa";
    l["js.v3.datepicker.weekheader"] = "Wk";
    l["js.v3.datepicker.jquerydateformat"] = "mm\/dd\/yy";
    l["js.v3.datepicker.firstdayofweek_number"] = "0";
    l["js.v3.datepicker.show_month_after_year_setting"] = "false";
    l["js.v3.datepicker.year_suffix"] = " ";
    l["js.v3.datepicker.now"] = "Now";
    l["js.v3.datepicker.choose_time"] = "Choose Time";
    l["js.v3.datepicker.time"] = "Time:";
    l["js.v3.datepicker.time_hour"] = "Hour";
    l["js.v3.datepicker.time_minute"] = "Min";
    l["js.v3.datepicker.time_second"] = "Sec";
})(ustream.labels);
$(function() {
    require(["App"], function(e) {
        e ? window.ustream.app = new e : require(["classes/CommonPage"], function(e) {
            window.ustream.app = new e
        }), $("html").removeClass("noJs")
    })
});
window.ustream || (window.ustream = {}), ustream.framework || (ustream.framework = {}), ustream.framework.dateUtils = {
    __depends: ["ustream.framework.i18n"],
    __ns: "dateUtils",
    _timezoneAbbrevs: {
        "-10:00": {
            en: "HAST",
            def: "HAST"
        },
        "-09:00": {
            en: "AKST",
            def: "AKST"
        },
        "-08:00": {
            en: "PT",
            def: "PT"
        },
        "-07:00": {
            en: "MST",
            def: "MST"
        },
        "-06:00": {
            en: "CST",
            def: "CST"
        },
        "-05:00": {
            en: "ET",
            def: "ET"
        },
        "-04:00": {
            en: "AST",
            def: "ECT"
        },
        "-03:00": {
            es: "ART",
            pt: "BRT",
            def: "BRT"
        },
        "-02:00": {
            pt: "BRT",
            def: "BRT"
        },
        "00:00": {
            def: "GMT"
        },
        "+01:00": {
            def: "CET"
        },
        "+02:00": {
            def: "EET"
        },
        "+03:00": {
            def: "MSK"
        },
        "+04:00": {
            def: "GST"
        },
        "+05:00": {
            ru: "MSK+2",
            uz: "UZT",
            tk: "TMT",
            tg: "TJT",
            def: "MSK+2"
        },
        "+06:00": {
            ru: "MSK+3",
            def: "MSK+3"
        },
        "+07:00": {
            ru: "MSK+4",
            id: "WIB",
            def: "MSK+4"
        },
        "+08:00": {
            ru: "MSK+5",
            id: "WITA",
            ms: "MST",
            en: "HKT",
            zh: "CST",
            def: "HKT"
        },
        "+09:00": {
            ru: "MSK+6",
            ja: "JST",
            id: "WIT",
            ko: "KST",
            def: "JST"
        },
        "+10:00": {
            ru: "MSK+7",
            en: "AEST",
            def: "AEST"
        },
        "+11:00": {
            ru: "MSK+8",
            def: "MSK+8"
        }
    },
    addHours: function(e, t) {
        t = "number" == typeof t ? t : 0;
        var a = new Date(parseInt(e, 10));
        return a.setTime(a.getTime() + t + 60 * a.getTimezoneOffset() * 1e3), a.getTime()
    },
    correctTimestamp: function(e, t) {
        return this._modifyTimestamp(1, e, t)
    },
    restoreTimestamp: function(e, t) {
        return this._modifyTimestamp(-1, e, t)
    },
    _modifyTimestamp: function(e, t, a) {
        return t = 1 * t + 60 * new Date(parseInt(t, 10)).getTimezoneOffset() * 1e3 * e, a ? new Date(t) : t
    },
    getTimeZoneAbbrev: function() {
        var e = this._formatTimeZoneOffset(this._getTimeZoneOffset()),
            t = this._getLocale(),
            a = ustream.vars.locale.match(/(\w{2})/)[0],
            r = this._timezoneAbbrevs[e] || {},
            n = r[t] || "";
        return n || (n = r[a] || r.def || ""), n
    },
    _getTimeZoneOffset: function() {
        var e, t, a = new Date,
            r = new Date(a.getFullYear(), 0, 1, 0, 0, 0, 0),
            n = new Date(a.getFullYear(), 6, 1, 0, 0, 0, 0),
            o = r.toGMTString(),
            i = new Date(o.substring(0, o.lastIndexOf(" ") - 1));
        return o = n.toGMTString(), (e = (r - i) / 36e5) == (t = (n - new Date(o.substring(0, o.lastIndexOf(" ") - 1))) / 36e5) || 0 <= e - t && (e = t), e
    },
    _formatTimeZoneOffset: function(e) {
        var t, a = parseInt(e, 10);
        return e -= parseInt(e, 10), e *= 60, t = parseInt(e, 10), e -= parseInt(e, 10), e *= 60, parseInt(e, 10), (0 === a ? "00" : 0 < a ? a < 10 ? "+0" + a : "+" + a : -10 < a ? "-0" + Math.abs(a) : a) + ":" + (t = t < 10 ? "0" + t : t)
    },
    _getLocale: function() {
        var e;
        return navigator && (navigator.language ? e = navigator.language : navigator.browserLanguage ? e = navigator.browserLanguage : navigator.systemLanguage ? e = navigator.systemLanguage : navigator.userLanguage && (e = navigator.userLanguage)), (e = e.match("([a-zA-Z]{2})[-_]?([a-zA-Z]{2})?") || "en")[1]
    },
    getFormattedDate: function(e) {
        return "string" == typeof e ? e : this.dateFormat(1e3 * e.timestamp, e.format)
    },
    getFormattedDateRange: function(e) {
        if ("string" == typeof e) return e;
        var t = this.getFormattedDate(e.fromDate),
            a = this.getFormattedDate(e.toDate);
        return t + e.separator + a
    },
    dateFormat: function(e, t, a) {
        var r, n, o, i, s, f, g, m, u, d = ustream.framework.i18n._t_,
            T = function(e, t) {
                for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
                return e
            },
            h = {
                month: d("js.v3.datepicker.monthnames").split("|"),
                monthShort: d("js.v3.datepicker.monthnames_short").split("|"),
                day: d("js.v3.datepicker.daynames").split("|"),
                dayShort: d("js.v3.datepicker.daynames_short").split("|")
            },
            l = new RegExp(/\d/);
        if (1 !== arguments.length || "[object String]" !== Object.prototype.toString.call(e) || l.test(e) || (t = e, e = void 0), e = e ? new Date(e) : new Date, !ustream.browser.phantomjs && isNaN(e)) throw new SyntaxError("invalid date");
        return "UTC:" === (t = String(this._dateFormatMasks[t] || t || this._dateFormatMasks.default)).slice(0, 4) && (t = t.slice(4), a = !0), n = e[(r = a ? "getUTC" : "get") + "Date"](), o = e[r + "Day"](), i = e[r + "Month"](), s = e[r + "FullYear"](), f = e[r + "Hours"](), g = e[r + "Minutes"](), m = e[r + "Seconds"](), a || e.getTimezoneOffset(), u = {
            "%j": n,
            "%d": T(n),
            "%D": h.dayShort[o],
            "%l": h.day[o],
            "%n": i + 1,
            "%m": T(i + 1),
            "%M": h.monthShort[i],
            "%F": h.month[i],
            "%y": String(s).slice(2),
            "%Y": s,
            "%g": f % 12 || 12,
            "%h": T(f % 12 || 12),
            "%G": f,
            "%H": T(f),
            "%i": T(g),
            "%s": T(m),
            "%a": f < 12 ? "am" : "pm",
            "%A": f < 12 ? "AM" : "PM",
            "%T": a ? "UTC" : this.getTimeZoneAbbrev()
        }, t.replace(/%([jdDlnmMFyYghGHisaAT])\1?/g, function(e) {
            return e in u ? u[e] : e.slice(1, e.length - 1)
        })
    },
    _dateFormatMasks: {
        homePage: "%m/%d/%Y %g:%i %A %T",
        default: "%m/%d/%Y %g:%i %A %T",
        shortDate: "%m/%d/%y"
    },
    isInRange: function(e, t, a) {
        var r, n, o, i, s;
        return r = [e.getFullYear(), e.getMonth(), e.getDate()], n = [t.getFullYear(), t.getMonth(), t.getDate()], o = [a.getFullYear(), a.getMonth(), a.getDate()], s = i = !1, n[0] < r[0] ? s = !0 : n[0] === r[0] && (n[1] < r[1] ? s = !0 : n[1] === r[1] && n[2] <= r[2] && (s = !0)), r[0] < o[0] ? i = !0 : o[0] === r[0] && (r[1] < o[1] ? i = !0 : o[1] === r[1] && r[2] <= o[2] && (i = !0)), s && i
    },
    getMidnightOf: function(e) {
        var t;
        switch (typeof e) {
            case "number":
            case "string":
                t = new Date(e);
                break;
            case "object":
                t = e
        }
        return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0)
    },
    formatSecondsToTimeString: function(e, t, a) {
        var r = ustream.framework.stringUtils.zeroPad,
            n = Math.floor(e / 3600),
            o = e % 3600,
            i = Math.floor(o / 60),
            s = o % 60,
            f = [];
        return a ? (i = Math.floor(e / 60), s = e % 60) : f.push(r(n, 2)), f.push(r(i, 2)), t || f.push(r(Math.floor(s), 2)), f.join(":")
    },
    createDateSting: function(e) {
        var t = e.getFullYear(),
            a = e.getMonth() + 1,
            r = e.getDate();
        return t + "-" + (a = a < 10 ? "0" + a : a) + "-" + (r = r < 10 ? "0" + r : r)
    }
}, "function" == typeof define && define("dateUtils", function() {
    return ustream.framework.dateUtils
});
window.ustream || (window.ustream = {}), $.fn.extend({
    toDisabled: function() {
        return this.each(function(t) {
            $(this).addClass("disabled").prop("disabled", !0)
        })
    },
    toEnabled: function() {
        return this.each(function(t) {
            $(this).removeClass("disabled").prop("disabled", !1)
        })
    },
    addClassIf: function(i, s, n) {
        return this.each(function(t) {
            n && $(this).removeClass(i), s && $(this).addClass(i)
        })
    },
    if_: function(t) {
        return $.isFunction(t) && (t = t.call(this)), this.if_CondMet = !!t, this.pushStack(t ? this : [])
    },
    else_: function(t) {
        var i = this.end();
        return i.if_CondMet ? i.pushStack([]) : i.if_(arguments.length ? t : 1)
    }
});
define("timer", ["lodash"], function(a) {
    return {
        __depends: [],
        frequency: 1e3,
        uid: 0,
        attachedFunctions: {},
        running: !1,
        numInQueue: 0,
        add: function(t, n, i, e) {
            var u;
            i ? u = i : (u = "__" + this.uid, this.uid += 1);
            var s = 0 === t ? 1 : Math.round(t / this.frequency);
            return this.numInQueue += 1, this.attachedFunctions[u] = {
                startedAt: new Date,
                ttl: e,
                count: s,
                interval: s,
                func: n,
                name: u
            }, this.running || this.start(), {
                skip: a.bind(this.skip, this, u),
                name: u,
                stop: a.bind(this.remove, this, u)
            }
        },
        remove: function(t) {
            this.attachedFunctions[t] && (delete this.attachedFunctions[t], this.numInQueue -= 1), this.numInQueue || this.stop()
        },
        skip: function(t) {
            var n = this.attachedFunctions[t];
            n && (n.count = n.interval)
        },
        start: function() {
            this.running || (this.running = !0, this.intervalID = setInterval(a.bind(this.execute, this), this.frequency))
        },
        stop: function() {
            this.running && (this.running = !1, clearInterval(this.intervalID), this.intervalID = null)
        },
        execute: function() {
            var e = new Date;
            a.forEach(this.attachedFunctions, a.bind(function(t, n) {
                var i = this.attachedFunctions[n];
                i.count -= 1, i.count || (i.count = i.interval, i.ttl ? e - i.startedAt <= i.ttl ? i.func() : this.remove(i.name) : i.func())
            }, this))
        }
    }
});
! function(r) {
    function o(n) {
        this.func = new Function(n)
    }
    r.tpl = function(n) {
        if ("string" != typeof n) throw new Error("$.tpl: Error - Template is missing or param is not a string, cannot initialize!");
        return n = n.replace(/[\r\n]/g, ""), e = "__Q%Q__", t = n.replace(/<%=?(.*?)%>/g, function(n, t) {
            var r;
            return t = t.replace(/'/g, e), r = [e, ";\n", "  ", t, "\n", "  __out += ", e], "=" === n.charAt(2) && (r[2] = "  __out += "), r.join("")
        }), new o("var T = this, _t_ = ustream.framework.i18n._t_;try {with(this) {" + (t = ("var __out = " + e + t + e + "; return __out;\n").replace(/'/g, "\\'").replace(new RegExp(e, "g"), "'")) + "}} catch(e) { $.console.error(e); $.console.info('scope', this); if (this.__run) { $.console.info({evaledCode:this.__run+''}); } }");
        var t, e
    }, r.fn.tpl = function(n, t) {
        return n.constructor !== o && (n = r.tpl(n)), this.html(n.run(t))
    }, o.prototype.run = function(n) {
        return this.func.call(n)
    }
}(jQuery);
! function(e) {
    if ("object" != typeof e.datepicker.regional.trans) {
        var t = function(e, t, a) {
            "object" != typeof t || a || (a = t, t = null);
            var r = t || ustream.labels[e];
            return r ? a && (r = ustream.framework.stringUtils.labelSubst(r, a)) : r = e.toUpperCase(), r
        };
        e.datepicker.regional.trans = {
            closeText: t("js.v3.datepicker.closetext"),
            prevText: t("js.v3.datepicker.prevtext"),
            nextText: t("js.v3.datepicker.nexttext"),
            currentText: t("js.v3.datepicker.currenttext"),
            monthNames: t("js.v3.datepicker.monthnames").split("|"),
            monthNamesShort: t("js.v3.datepicker.monthnames_short").split("|"),
            dayNames: t("js.v3.datepicker.daynames").split("|"),
            dayNamesShort: t("js.v3.datepicker.daynames_short").split("|"),
            dayNamesMin: t("js.v3.datepicker.daynamesmin").split("|"),
            weekHeader: t("js.v3.datepicker.weekheader"),
            dateFormat: t("js.v3.datepicker.jquerydateformat"),
            firstDay: 1 * t("js.v3.datepicker.firstdayofweek_number"),
            isRTL: !1,
            showMonthAfterYear: !!t("js.v3.datepicker.show_month_after_year_setting").match(/(true|yes|ok|1)/),
            yearSuffix: t("js.v3.datepicker.year_suffix")
        }, e.datepicker.setDefaults(e.datepicker.regional.trans)
    }
}(window.jQuery);