jQuery(window).load(function() {
    (cssua.ua.mobile || cssua.ua.tablet_pc) && jQuery(".fusion-popover, .fusion-tooltip").each(function() {
        jQuery(this).attr("data-trigger", "click"), jQuery(this).data("trigger", "click")
    }), jQuery('[data-toggle~="popover"]').popover({
        container: "body"
    })
});