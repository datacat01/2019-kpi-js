mylogcal = {
    g_datetime: 0,
    g_datetimePrevMonth: 0,
    g_datetimeNextMonth: 0,
    first: !0,
    $g_mprev: null,
    $g_mnext: null,
    init: function() {
        var e = $("#point-calendar");
        mylogcal.$g_mprev = e.find(".calendar-prev"), mylogcal.$g_mprev.bind("click", mylogcal.mprevclicked), mylogcal.$g_mnext = e.find(".calendar-next"), mylogcal.$g_mnext.bind("click", mylogcal.mnextclicked)
    },
    mprevclicked: function(e) {
        e.preventDefault(), mylogcal.accessCalendar(mylogcal.g_datetimePrevMonth);
        var t = mylogcal.g_datetimePrevMonth;
        mylogcal.g_datetimePrevMonth = mylogcal.getPrevMonthDate(t), mylogcal.g_datetimeNextMonth = mylogcal.getNextMonthDate(t)
    },
    mnextclicked: function(e) {
        e.preventDefault(), mylogcal.accessCalendar(mylogcal.g_datetimeNextMonth);
        var t = mylogcal.g_datetimeNextMonth;
        mylogcal.g_datetimePrevMonth = mylogcal.getPrevMonthDate(t), mylogcal.g_datetimeNextMonth = mylogcal.getNextMonthDate(t)
    },
    display: function() {
        1 == this.first && (mylogcal.init(), this.first = !1), this.g_datetime = 1e3 * server_time, this.g_datetimePrevMonth = mylogcal.getPrevMonthDate(this.g_datetime), this.g_datetimeNextMonth = mylogcal.getNextMonthDate(this.g_datetime), mylogcal.accessCalendar(this.g_datetime)
    },
    getNextMonthDate: function(e) {
        var t = new Date(e),
            a = t.getFullYear(),
            n = t.getMonth(),
            l = new Date;
        return 11 == n ? l.setFullYear(a + 1, 0, 15) : l.setFullYear(a, n + 1, 15), l.getTime()
    },
    getPrevMonthDate: function(e) {
        var t = new Date(e),
            a = t.getFullYear(),
            n = t.getMonth(),
            l = new Date;
        return 0 == n ? l.setFullYear(a - 1, 11, 15) : l.setFullYear(a, n - 1, 15), l.getTime()
    },
    accessCalendar: function(e) {
        function t(e) {
            var t = $("#point-calendar");
            t.find("table").remove(), mylogcal.$g_mprev.css("display", "none"), mylogcal.$g_mnext.css("display", "none");
            var a = $('<div class="loading"><span class="loadingtxt">情報を取得中です。しばらくお待ち下さい。</span></div>');
            return $(".calendar-log").html(a), t.find(".calendar-month").text(e + "月"), !0
        }

        function a(e, t, a, n) {
            $(".calendar-now-number").html() || $(".calendar-now-number").html("今月のスタンプ合計 " + e.stamp_total + "点<span>(gooポイント" + e.point_total + "pt獲得)</span>");
            var l = $("#point-calendar");
            $(".calendar-log div").remove(), $(".calendar-log").append("<table></table>");
            var r = l.find("table");
            l.find(".calendar-month").text(a + "月");
            var o = new Array,
                i = 0,
                c = !1,
                d = !1;
            $.each(e, function(e, t) {
                if ("prev" == e) return c = t, !0;
                if ("next" == e) return d = t, !0;
                if ("stamp_total" == e || "point_total" == e) return !0;
                var a = new Array;
                a[0] = e, a[1] = void 0 != t.point && t.point, a[2] = t.point_type, o[i] = a, i++
            }), 0 == c ? mylogcal.$g_mprev.css("display", "none") : mylogcal.$g_mprev.css("display", "block"), 0 == d ? mylogcal.$g_mnext.css("display", "none") : mylogcal.$g_mnext.css("display", "block");
            for (var g = $('<thead class="calendar-head"></thead>'), m = $("<tr></tr>"), s = ["日", "月", "火", "水", "木", "金", "土"], p = 0; p < s.length; p++) m.append("<th>" + s[p] + "</th>");
            for (g.append(m), r.append(m), dayAlign = 0; dayAlign < n; dayAlign++) {
                var v = new Array;
                v[0] = "", v[1] = !1, v[2] = "", o.unshift(v)
            }
            var y = o.length % 7,
                h = 0;
            for (y > 0 && (h = 7 - y), dayAlign = 0; dayAlign < h; dayAlign++) {
                var v = new Array;
                v[0] = "", v[1] = !1, v[2] = "", o.push(v)
            }
            var u = $("<tr></tr>");
            for (calMatrixIdx = 0; calMatrixIdx < o.length; calMatrixIdx++) {
                var x = $("<td></td>"),
                    f = $('<div class="date">' + o[calMatrixIdx][0] + "</div>");
                if (o[calMatrixIdx][2]) {
                    var _ = o[calMatrixIdx][2],
                        M = _ ? " is-" + _ : "",
                        D = "double" == _ ? "PC&amp;SP" : "pc" == _ || "sp" == _ ? "ポイント" + _.toUpperCase() : "";
                    f.append('<i class="calendar-icon' + M + '"><span>' + D + "</span></i>")
                }
                x.append(f), u.append(x), calMatrixIdx + 1 != o.length && (calMatrixIdx + 1) % 7 != 0 || (r.append(u), u = $("<tr></tr>"))
            }
        }
        var n = function(e) {
                var t = new Date(e),
                    a = t.getTime(),
                    n = 60 * t.getTimezoneOffset() * 1e3,
                    l = a + n + 324e5;
                return new Date(l)
            }(e),
            l = n.getFullYear(),
            r = n.getMonth() + 1,
            o = new Date(n);
        o.setDate(1);
        var i = o.getDay(),
            c = "/cal?year=" + l + "&month=" + r + "&mode=" + device + "&code=" + code;
        $.ajax({
            type: "GET",
            url: c,
            dataType: "json",
            beforeSend: function() {
                return t(r), !0
            },
            success: function(e) {
                a(e, l, r, i)
            },
            error: function(e, t, a) {}
        })
    }
};