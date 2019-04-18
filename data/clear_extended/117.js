/* homepage */
Myspace.Range = function(a) {
    function w() {
        var a = f - e;
        z(m, "left", g, !1), z(n, "right", h, !1), r && r(G()), t = {
            left: g,
            right: h
        };
        for (var b = 0; b <= a; b++) p.push(Math.round(b / a * 1e5) / 1e3);
        j && (q = p[j]), m.unbind("mousedown").mousedown(function(a) {
            A(m, "left", a)
        }).click(function(a) {
            return !1
        }), n.unbind("mousedown").mousedown(function(a) {
            A(n, "right", a)
        }).click(function(a) {
            return !1
        }), l && c.click(function(a) {
            var b = a.pageX,
                c = x(b),
                d = c === "left" ? m : n,
                e = y(d),
                f = (b < e.min ? e.min : b > e.max ? e.max : b) - e.min;
            B(d, c, f, e)
        }), v = !0
    }

    function x(a) {
        var b = a - m.offset().left,
            c = a - n.offset().left,
            d = Math.abs(b),
            e = Math.abs(c);
        return d < e ? "left" : e < d ? "right" : c > 0 ? "right" : "left"
    }

    function y(a) {
        var b = a.outerWidth(!0),
            d = c.outerWidth(),
            e = c.offset().left + b / 2,
            f = e + d;
        return {
            min: e,
            max: f,
            distance: f - e,
            outer: d
        }
    }

    function z(a, b, c, d) {
        var g = y(a),
            h, i = c - e;
        h = Math.round(g.outer * i / (f - e) * 100) / 100, C(a, b, h, c, g, d)
    }

    function A(a, d, e) {
        function h(b) {
            var c = b.pageX;
            return c = (c < f.min ? f.min : c > f.max ? f.max : c) - f.min, c != g && B(a, d, c, f), !1
        }

        function i(e) {
            b.unbind("mousemove", h), b.unbind("mouseup", i), c.removeClass("sliding"), k && D(a, d), s && s(G())
        }
        var f = y(a, d),
            g = a.position().left;
        return c.addClass("sliding"), b.mousemove(h).mouseup(i), !1
    }

    function B(a, b, c, d) {
        var g = Math.ceil((f - e) * c / d.outer + e),
            h = parseFloat(o.css("left")),
            j = parseFloat(o.css("right")),
            k;
        if (i && b === "right") {
            k = F(c / d.outer);
            if (k > q) return !1
        }(b === "left" && c <= d.outer - j || b === "right" && c >= h) && C(a, b, c, g, d, !0)
    }

    function C(a, b, c, e, f, g) {
        var h;
        d === "px" ? (u[b] = e, a.css("left", c).attr("data-value", e), o.css(b, b === "left" ? c : f.outer - c), !k && v && s && g && s(G())) : (h = F(c / f.outer), a.css("left", h + "%").attr("data-value", e), o.css(b, (b === "left" ? h : 100 - h) + "%"))
    }

    function D(a, b) {
        var c = E(a);
        c <= t[b] && (c -= 1), t[b] = c, t.left === t.right && (t[b] = c = b === "left" ? c - 1 : c + 1), u[b] = c, a.css("left", p[c] + "%").attr("data-value", c), o.css(b, (b === "left" ? p[c] : 100 - p[c]) + "%")
    }

    function E(a) {
        var b = parseFloat(a[0].style.left);
        for (var c = 1; c <= p.length; c++)
            if (b <= p[c]) return c;
        return p.length
    }

    function F(a) {
        return Math.round(a * 1e4) / 100
    }

    function G() {
        return u
    }

    function H(a) {
        a.left !== undefined && z(m, "left", a.left, !1), a.right !== undefined && z(n, "right", a.right, !1)
    }
    var b = $(document),
        c = a.$el,
        d = a.units || "px",
        e = a.min,
        f = a.max,
        g = a.leftValue,
        h = a.rightValue,
        i = a.isRightLimit || !1,
        j = i ? h - g : f - e,
        k = a.snappable || !1,
        l = a.clickable || !1,
        m = c.find(".leftGrip"),
        n = c.find(".rightGrip"),
        o = c.find(".currentRange"),
        p = [],
        q, r = a.onInit,
        s = a.onChange,
        t, u = {
            left: g,
            right: h
        },
        v = !1;
    return w(), {
        set: H,
        get: G
    }
};
(function() {
    function d() {
        f({
            cmd: "player.pause"
        })
    }

    function e() {
        f({
            cmd: "player.resume"
        })
    }

    function f(a) {
        b.length && b[0].contentWindow.postMessage("myspace:" + JSON.stringify(a), "*")
    }

    function m() {
        var a = ageRange.get(),
            b = {
                chartType: "browse",
                page: 1,
                gender: l.val(),
                minAge: a.left,
                maxAge: a.right,
                genres: k.val(),
                profileRoles: j.val(),
                locationId: o.siblings(".autoCompleteList").find(".selected").data("locationId") || ""
            },
            c = [];
        return Object.keys(b).forEach(function(a) {
            c.push(a + "=" + b[a])
        }), c.join("&")
    }

    function n(a) {
        function d(b) {
            var c = b.left > 50 ? "50+" : b.left,
                d = b.right > 50 ? "50+" : b.right;
            a.find(".leftGrip > span").text(c), a.find(".rightGrip > span").text(d)
        }

        function h() {
            var a = {
                left: e,
                right: f
            };
            b.set(a), d(a)
        }
        var b = null,
            c = new Myspace.ResetTimer(function() {
                var a = b.get(),
                    c = a.left,
                    d = a.right <= 50 ? a.right : 99;
                comm.send("charts.filters", ["browse", {
                    name: "minAge",
                    value: c
                }, {
                    name: "maxAge",
                    value: d
                }])
            }, 2e3),
            e = 18,
            f = 51,
            g = {
                $el: a,
                min: 18,
                max: 51,
                leftValue: e,
                rightValue: f,
                units: "px",
                clickable: !0,
                onInit: d,
                onChange: function(a) {
                    d(a), c.reset()
                }
            };
        a.length && (b = new Myspace.Range(g), this.get = b.get, this.reset = h), $(window).resize(function() {
            var a = b.get();
            b.set(a), d(a)
        })
    }
    $(function() {
            function h(a) {
                a >= b.length ? a = 0 : a < 0 && (a = b.length - 1), timer && timer.reset(), $(e[d]).removeClass("active"), $(e[a]).addClass("active"), $(b[d]).removeClass("active"), $(b[a]).addClass("active"), g.onChange(a, d), d = a
            }

            function i() {
                h(d + 1)
            }

            function j() {
                h(d - 1)
            }

            function k() {
                timer && timer.stop()
            }

            function l() {
                timer && timer.start()
            }
            var a = $("#desktop-template #featured-slider"),
                b = a.find("article"),
                c = a.find(".slide-nav"),
                d = 0,
                e = c.children();
            d === 0 && $(e[d]).addClass("active");
            var f = {
                    speed: 5e3,
                    startIndex: 0,
                    onChange: function(a, c) {
                        var d = b.eq(a);
                        b.removeClass("active"), d.addClass("active")
                    }
                },
                g = $.extend({}, f);
            c.on("click", ".navdot", function(a) {
                h($(a.currentTarget).data("index"))
            }), a.mouseover(function() {
                k()
            }), a.mouseout(function() {
                l()
            }), g.speed > 0 && (timer = new Myspace.ResetTimer(function() {
                i()
            }, g.speed), timer.reset()), $("#prev-article-tab").on("click", function() {
                j()
            }), $("#next-article-tab").on("click", function() {
                i()
            })
        }),
        function(a) {
            a("#featured-section #featured-slider").on("click", ".article", function(b) {
                if (!b.target.href) {
                    var c = a(this).find(".link");
                    c[0].click();
                    var d = a(this).find(".link");
                    return !1
                }
            }), a(".article").on("mouseenter", function() {
                a(this).css("cursor", "pointer")
            })
        }(jQuery);
    var a = {
        chartType: "browse",
        page: 1,
        gender: 0,
        minAge: 18,
        maxAge: 51,
        genres: 0,
        profileRoles: "None",
        homepage: !0
    };
    $.ajax({
        url: "/people/browse",
        data: a,
        success: function(a) {
            $("#browse-people").append(a), comm.send("page.changed", $("#browse-people"))
        }
    });
    var b = $("#featured-videos-embed"),
        c = !1;
    $(window).scroll(function() {
        var a = b.isOnScreen();
        a && c ? (c = !1, e()) : !a && !c && (c = !0, d())
    });
    var g = $("#people-browse-widget"),
        h = $('form[name="people-search"]', g),
        i = $('button[type="submit"]', h);
    i.on("click", function() {
        var a = m();
        return comm.send("location.href", "/discover/people?" + a), !1
    });
    var j = $('select[name="roles"]', h),
        k = $('select[name="genres"]', h),
        l = $('select[name="genders"]', h);
    $ageRange = $("#age-range", h), ageRange = new n($ageRange);
    var o = $('input[name="location"]', h);
    Myspace.AutoComplete(o, {
        handlerUrl: "/ajax/geosearch",
        template: '<% locals.forEach(function(location) { %><li data-location-id="<%- location.locationId %>"><%= location.locationNameWithHierarchy %></li><% }); %>',
        interval: 500,
        minLen: 5,
        onSelectItem: function(a) {
            var b = $(a),
                c = b.data("locationId"),
                d = b.text();
            return o.val(d), !1
        },
        sessionRequired: !0
    });
    var p = $('input[name="profile-search"]', h),
        q = '<% locals.forEach(function(item) { %><li data-entity-key="<%= item.entityKey %>" data-image-url="<%= item.image%>" data-href="/<%= item.username%>" ><a href="/<%= item.username%>" ><img src="<%= item.image%>" alt="<%= item.username%>" class="image" /><p><%= item.name %></p></a></li><% }); %>';
    Myspace.AutoComplete(p, {
            handlerUrl: "/ajax/search/people",
            template: q,
            interval: 500,
            minLen: 5,
            onSelectItem: function(a) {
                comm.send("location.href", $(a).data("href"))
            }
        }),
        function() {
            function d() {
                c = setInterval(function() {
                    var c = a.find(".selected"),
                        d = c.next();
                    c.removeClass("selected"), d.length ? d.addClass("selected") : b.addClass("selected")
                }, 7e3)
            }

            function e() {
                clearInterval(c)
            }
            var a = $(".profile-carousel", g),
                b = a.children().first();
            a.on("mouseenter", function() {
                e()
            }), a.on("mouseleave", function() {
                d()
            }), a.on("click", "a", function() {}), d();
            var c
        }(),
        function() {
            var a = document.getElementById("featured-player"),
                b;
            if (a === null) return;
            b = new Myspace.APIPlayer(a), b.addEventListener("stateChange", function(a) {
                console.log("[myspace][featured-player] " + a), a === Myspace.APIPlayer.State.ENDED && b.play()
            }), b.addEventListener("volumeChange", function(a) {
                console.log("[myspace][featured-player] volume change " + a)
            }), a.addEventListener("mouseenter", function() {
                b.volume = 1
            }), a.addEventListener("mouseleave", function() {
                b.volume = 0
            }), b.volume = 0, b.adTagUrl = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/229683089/Myspace.com_HB_Video_Featured_Preroll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&description_url=" + encodeURIComponent(location.protocol + "//" + location.host + context.featuredVideo.detailUrl), b.load(context.featuredVideo.mp4StreamUrl), b.play()
        }()
})();
(function() {
    function e(b) {
        var c = a,
            d = 728,
            e = 410,
            f = b.dataset.locationId,
            g = document.createElement("script");
        g.src = "//sdk.vindicosuite.com/ad/unit/appear/latest/vindico.appear.min.js?t=" + c + "&w=" + d + "&h=" + e + "&lid=" + f, b.insertAdjacentElement("AFTEREND", g)
    }
    var a = "vAdUnit",
        b = document.getElementById("wrap");
    if (b) {
        var c = b.getElementsByClassName(a);
        for (var d = 0; d < c.length; d++) e(c[d])
    }
})();
(function() {
    function f() {
        a.removeClass("more"), c.append(b), b.each(function(a, b) {
            b.offsetTop !== b.parentElement.offsetTop && d.append(b)
        })
    }
    var a = $("#article-category-nav"),
        b = $("li", a),
        c = $(".categories", a),
        d = $(".more-categories", a),
        e = $(".more-btn", a);
    $(window).on("resize", f), $(document.body).on("click", function() {
        a.removeClass("more")
    }), e.on("click", function() {
        return a.toggleClass("more"), !1
    }), f()
})();
(function() {
    var a = document.getElementById("ads-native-myspace-sponsored-story");
    if (a) {
        var b = document.createElement("script");
        b.src = "//x.vindicosuite.com/imp/l=508702&t=j&spd=1&tpr=0&pt1=_02N1tTrFUYzDCpuWxcSiyuWdMwK8d8nUrQKBNgW&rnd=<timestamp>", document.body.appendChild(b)
    }
})();