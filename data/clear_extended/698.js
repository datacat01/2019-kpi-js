! function(e, s, i, t) {
    s.behaviors.slideshowField = {
        attach: function(s, i) {
            e(".epa-banner-field:not(slideshow-processed)", s).addClass("slideshow-processed").responsiveSlides({
                timeout: 6e3,
                pager: !0,
                pause: !0,
                pauseControls: !0,
                stopControls: !0,
                rotateOnce: !0,
                maxWidth: "731",
                navContainer: ".epa-banner-field",
                namespace: "slides"
            });
            var t = e(".epa-banner"),
                n = 0;
            t.each(function() {
                $thisHeight = e(this).height(), $thisHeight > n && (n = $thisHeight)
            }), n = (parseInt(n, 10) / 17).toFixed(8) + "em", t.each(function() {
                e(this).css("min-height", n)
            })
        }
    }
}(jQuery, Drupal, window);