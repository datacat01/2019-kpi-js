function ClickLog4Pc() {
    this.initialize.apply(this, arguments)
}
var clicklogCall = new Array;
ClickLog4Pc.prototype = {
    cc_from: "http://www.goo.ne.jp/",
    cc_service: "top",
    initialize: function() {
        var c = this;
        $("body").on("click", "[data-cid]", function(t) {
            var e = $(this).attr("data-cid"),
                o = $(this).attr("data-genreid");
            if (!clicklogCall[e]) {
                var n = "undefined" !== e && !1 !== e ? e : "";
                if (n.match(/,/))
                    for (id_list = n.split(","), i = 0; i <= id_list.length - 1; i++) c.cc(id_list[i], !1, o);
                else c.cc(n, !1, o)
            }
            clicklogCall[e] = !0
        })
    },
    cc: function(c, i, t) {
        var i = i || !1,
            e = this,
            o = {
                ID: c,
                FROM: encodeURIComponent(e.cc_from),
                SERVICE: e.cc_service
            };
        t && (o.GENRE = t), $.ajax({
            type: "GET",
            url: "/cc.php",
            data: o,
            cache: !1,
            async: !i,
            success: function() {
                "undefined" != typeof mode && mode
            }
        })
    }
}, jQuery(document).ready(function(c) {
    hClickLog = new ClickLog4Pc
});