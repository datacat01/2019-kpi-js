jQuery(document).ready(function() {
    jQuery(".fusion-video").each(function() {
        !jQuery(this).parents(".fusion-modal").length && 1 == jQuery(this).data("autoplay") && jQuery(this).is(":visible") && jQuery(this).find("iframe").each(function() {
            jQuery(this).attr("src", jQuery(this).attr("src").replace("autoplay=0", "autoplay=1"))
        })
    }), jQuery(window).on("resize", function() {
        var e, i = document.querySelectorAll("iframe"),
            s = i.length;
        if (jQuery(".fusion-youtube").each(function() {
                jQuery(this).is(":visible") || jQuery(this).parents(".fusion-modal").length && !jQuery(this).parents(".fusion-modal").is(":visible") || jQuery(this).find("iframe").each(function() {
                    this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }), "undefined" != typeof Vimeo)
            for (e = 0; e < s; e++) !(-1 < i[e].src.toLowerCase().indexOf("vimeo")) || jQuery(i[e]).is(":visible") || jQuery(i[e]).data("privacy-src") && jQuery(i[e]).hasClass("fusion-hidden") || jQuery(i[e]).parents(".fusion-modal").length && !jQuery(i[e]).parents(".fusion-modal").is(":visible") || new Vimeo.Player(i[e]).pause()
    })
});