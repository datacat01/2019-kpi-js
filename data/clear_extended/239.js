xing.ready(function() {
        function r(t, n, a) {
            $(t).attr(a).removeAttr("tabindex")
        }

        function t() {
            var n = u.find("a[" + d + "]");
            20 < n.length ? $.chunk(function(t) {
                a(n[t])
            }, n.length) : n.each(function(t, n) {
                a(n)
            })
        }

        function a(t) {
            var a = $(t),
                n = a.attr("href"),
                i = a.attr("target") || undefined,
                e = a.attr(d),
                o = u.find("a[" + g + '="' + e + '"]'),
                l = {
                    href: n,
                    target: i
                };
            50 < o.length ? $.chunk(function(t) {
                r(o[t], a, l)
            }, o.length) : o.each(function(t, n) {
                r(n, a, l)
            })
        }
        var g = "data-linkgroup-slave",
            d = "data-linkgroup-master",
            u = $("body");
        t()
    }),
    function() {
        function t(t) {
            e.push(t[0]), clearTimeout(a), a = setTimeout(n, 100)
        }

        function n() {
            $.ajax(i + "/app/startpage", {
                dataType: "jsonp",
                traditional: !0,
                jsonpCallback: xing.globals.maskedLinkCallback || "",
                data: {
                    op: "masked_link",
                    links: e.map(function(t) {
                        return t.getAttribute("data-masked-link")
                    })
                }
            }).done(function(n) {
                e.forEach(function(t) {
                    t.href = n[t.getAttribute("data-masked-link")]
                }), e.length = 0
            })
        }
        var a, i = xing.globals.baseUrl || "",
            e = [];
        xing.utils.Behaviors.add({
            "a[data-masked-link]": t
        })
    }(), xing.ready(function() {
        if ($("body").hasClass("foundation-adaptive-grid") && xing.window.width <= 500) {
            var n = $("#login-trigger"),
                a = n.text(),
                i = (xing.globals && xing.globals.commonTexts || {}).cancel || "Close";
            n.off().on("click", function(t) {
                $("#login-layer").toggle(), n.text(n.text() === a ? i : a), t.preventDefault()
            })
        }
    });