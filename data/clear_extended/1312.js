jQuery(window).load(function() {
    cssua.ua.ios && 7 === parseInt(cssua.ua.ios, 10) && jQuery(".button-icon-divider-left, .button-icon-divider-right").each(function() {
        var a = jQuery(this).parent().outerHeight();
        jQuery(this).css("height", a)
    })
});