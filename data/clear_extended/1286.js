! function(o) {
    o.fn.countDown = function(t) {
        return config = {}, o.extend(config, t), diffSecs = this.setCountDown(config), config.onComplete && o.data(o(this)[0], "callback", config.onComplete), config.omitWeeks && o.data(o(this)[0], "omitWeeks", config.omitWeeks), o("#" + o(this).attr("id") + " .fusion-digit").html('<div class="top"></div><div class="bottom"></div>'), o(this).doCountDown(o(this).attr("id"), diffSecs, 500), this
    }, o.fn.stopCountDown = function() {
        clearTimeout(o.data(this[0], "timer"))
    }, o.fn.startCountDown = function() {
        this.doCountDown(o(this).attr("id"), o.data(this[0], "diffSecs"), 500)
    }, o.fn.setCountDown = function(t) {
        var e = new Date;
        t.targetDate ? e = new Date(t.targetDate.month + "/" + t.targetDate.day + "/" + t.targetDate.year + " " + t.targetDate.hour + ":" + t.targetDate.min + ":" + t.targetDate.sec + (t.targetDate.utc ? " UTC" : "")) : t.targetOffset && (e.setFullYear(t.targetOffset.year + e.getFullYear()), e.setMonth(t.targetOffset.month + e.getMonth()), e.setDate(t.targetOffset.day + e.getDate()), e.setHours(t.targetOffset.hour + e.getHours()), e.setMinutes(t.targetOffset.min + e.getMinutes()), e.setSeconds(t.targetOffset.sec + e.getSeconds()));
        var s = new Date;
        if (t.gmtOffset) {
            var i = 60 * t.gmtOffset * 6e4,
                a = 6e4 * s.getTimezoneOffset();
            s = new Date(s.getTime() + i + a)
        }
        return diffSecs = Math.floor((e.valueOf() - s.valueOf()) / 1e3), o.data(this[0], "diffSecs", diffSecs), diffSecs
    }, o.fn.doCountDown = function(s, i, a) {
        $this = o("#" + s), i <= 0 && (i = 0, $this.data("timer") && clearTimeout($this.data("timer"))), secs = i % 60, mins = Math.floor(i / 60) % 60, hours = Math.floor(i / 60 / 60) % 24, 1 == $this.data("omitWeeks") ? days = Math.floor(i / 60 / 60 / 24) : days = Math.floor(i / 60 / 60 / 24) % 7, weeks = Math.floor(i / 60 / 60 / 24 / 7), 99 < days && $this.find(".fusion-dash-days").find(".fusion-hundred-digit").css("display", "inline-block"), 999 < days && $this.find(".fusion-dash-days").find(".fusion-thousand-digit").css("display", "inline-block"), 99 < weeks && $this.find(".fusion-dash-weeks").find(".fusion-hundred-digit").css("display", "inline-block"), $this.dashChangeTo(s, "fusion-dash-seconds", secs, a || 800), $this.dashChangeTo(s, "fusion-dash-minutes", mins, a || 1200), $this.dashChangeTo(s, "fusion-dash-hours", hours, a || 1200), $this.dashChangeTo(s, "fusion-dash-days", days, a || 1200), $this.dashChangeTo(s, "fusion-dash-weeks", weeks, a || 1200), o.data($this[0], "diffSecs", i), 0 < i ? (e = $this, t = setTimeout(function() {
            e.doCountDown(s, i - 1)
        }, 1e3), o.data(e[0], "timer", t)) : (cb = o.data($this[0], "callback")) && o.data($this[0], "callback")()
    }, o.fn.dashChangeTo = function(t, e, s, i) {
        $this = o("#" + t);
        for (var a = $this.find("." + e + " .fusion-digit").length - 1; 0 <= a; a--) {
            var n = s % 10;
            s = (s - n) / 10, $this.digitChangeTo("#" + $this.attr("id") + " ." + e + " .fusion-digit:eq(" + a + ")", n, i)
        }
    }, o.fn.digitChangeTo = function(t, e, s) {
        var i = o(t + " div.top"),
            a = o(t + " div.bottom");
        s || (s = 800), i.html() != e + "" && i.not(":animated").length && (i.css({
            display: "none"
        }), i.html(e || "0").fadeOut(s, function() {
            a.html(i.html()), a.css({
                display: "block",
                height: "auto"
            }), i.css({
                display: "none"
            })
        }))
    }
}(jQuery);