! function(a) {
    a.fn.UItoTop = function(b) {
        var c = {
                text: "",
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: "toTop",
                containerHoverID: "toTopHover",
                scrollSpeed: 1200,
                easingType: "linear"
            },
            d = a.extend(c, b),
            e = "#" + d.containerID,
            f = "#" + d.containerHoverID;
        a("body").append('<div class="to-top-container"><a href="#" id="' + d.containerID + '"><span class="screen-reader-text">' + toTopscreenReaderText.label + "</span>" + d.text + "</a></div>"), a(e).hide().on("click.UItoTop", function() {
            return a("html, body").animate({
                scrollTop: 0
            }, d.scrollSpeed, d.easingType), a("#" + d.containerHoverID, this).stop().animate({
                opacity: 0
            }, d.inDelay, d.easingType), !1
        }).prepend('<span id="' + d.containerHoverID + '"></span>').hover(function() {
            a(f, this).stop().animate({
                opacity: 1
            }, 600, "linear")
        }, function() {
            a(f, this).stop().animate({
                opacity: 0
            }, 700, "linear")
        }), a(window).scroll(function() {
            var b = a(window).scrollTop();
            void 0 === document.body.style.maxHeight && a(e).css({
                position: "absolute",
                top: b + a(window).height() - 50
            }), b > d.min ? a(e).fadeIn(d.inDelay) : a(e).fadeOut(d.Outdelay)
        })
    }
}(jQuery);