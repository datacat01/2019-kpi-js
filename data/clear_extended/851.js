jQuery(document).ready(function(e) {
    var a = function(e) {
        return {
            lte_IE9: document.uniqueID && void 0 === window.matchMedia,
            Tablet: -1 != e.indexOf("windows") && -1 != e.indexOf("touch") || -1 != e.indexOf("ipad") || -1 != e.indexOf("android") && -1 == e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("tablet") || -1 != e.indexOf("kindle") || -1 != e.indexOf("silk") || -1 != e.indexOf("playbook"),
            Mobile: -1 != e.indexOf("windows") && -1 != e.indexOf("phone") || -1 != e.indexOf("iphone") || -1 != e.indexOf("ipod") || -1 != e.indexOf("android") && -1 != e.indexOf("mobile") || -1 != e.indexOf("firefox") && -1 != e.indexOf("mobile") || -1 != e.indexOf("blackberry")
        }
    }(window.navigator.userAgent.toLowerCase());
    if (!a.lte_IE9 && !a.Mobile && !a.Tablet) {
        var s = function() {
                e(".act-zzz").fadeIn("slow")
            },
            t = function() {
                h = setInterval(s, 2e4)
            },
            n = '<img src="' + asset_url + '/img/gh_logo_bg.png?151211" class="act-logo act-bg">',
            o = '<span class="act-eye-wrap act-move"><img src="' + asset_url + '/img/gh_logo_eye.png?151211" class="act-logo act-eye"></span>',
            i = '<img src="' + asset_url + '/img/gh_logo_smile.png?151211" class="act-logo act-smile">',
            c = '<img src="' + asset_url + '/img/gh_logo_blink.png?151211" class="act-logo act-blink">',
            l = '<span class="act-zzz"><img src="' + asset_url + '/img/gh_logo_zzz.png?151211" class="act-logo"><span class="act-z1">z</span><span class="act-z2">z</span><span class="act-z3">z</span></span>';
        e(".header-logo a").append(n, '<span class="act-eye-layer"><span class="act-eye-inner"></span></span>', o, c, i, l), logo_green && (e(".act-bg").css("margin-left", "52px"), e(".act-eye-layer").css("margin-left", "52px"), e(".act-eye-wrap").css("margin-left", "52px"), e(".act-smile").css("margin-left", "52px"), e(".act-blink").css("margin-left", "52px"), e(".act-zzz").css("margin-left", "52px")), e(".header-input input[type=text]").on("focus", function() {
            e(".act-eye-wrap").css("transform", "translate(3px,-3px)").removeClass("act-move"), e(".act-blink").addClass("act-focus")
        }).on("blur", function() {
            e(".act-eye-wrap").addClass("act-move"), e(".act-eye-wrap, .act-blink").removeClass("act-focus"), e(".act-smile").removeClass("act-smile-on")
        });
        var r = e(".act-eye-inner"),
            g = e(".act-eye-layer"),
            d = g.width() / 2 - r.width() / 2,
            m = g.height() / 2 - r.height() / 2,
            p = r.offset().left + r.width() / 2,
            f = r.offset().top + r.height() / 2;
        e(window).mousemove(function(a) {
            var s = a.pageX - p,
                t = a.pageY - f,
                n = Math.sqrt(s * s + t * t);
            (n > d || n > m) && (s *= d / n, t *= m / n), e(".act-move").css("transform", "translate(" + s + "px," + t + "px)")
        });
        var u = 0,
            x = !1;
        e(".header-logo a").mousemove(function() {
            u++, 0 == x && (x = !0, setTimeout(function() {
                u = 0, x = !1
            }, 1e4)), u > 300 && (e(".act-eye").css("transition", "none"), setTimeout(function() {
                e(".act-eye").css("transition", "")
            }, 5e3)), u > 500 && !e(".act-mega").length && (logo_green ? e(".header-logo a").append('<img src="' + asset_url + '/img/gh_logo_mega.png?151211" class="act-logo act-mega" style="margin-left:52px;">') : e(".header-logo a").append('<img src="' + asset_url + '/img/gh_logo_mega.png?151211" class="act-logo act-mega">'), setTimeout(function() {
                e(".act-mega").fadeOut().remove(), e(".act-eye").css("transition", "")
            }, 5e3))
        });
        var h;
        t(), e(window).mousemove(function(a) {
            e(".act-zzz").fadeOut("slow"), clearInterval(h), t()
        }), e(window).on("keydown keyup keypress", function() {
            e(window).trigger("mousemove")
        }), e(window).on("scroll", function() {
            0 == e(window).scrollTop() ? e(".header-logo a").addClass("act-goo") : e(".header-logo a").removeClass("act-goo")
        }), e(".header-input input[type=text]").on("keydown keyup keypress change", function() {
            e(this).val().length > 0 ? e(".act-smile").addClass("act-smile-on") : e(".act-smile").removeClass("act-smile-on")
        })
    }
});