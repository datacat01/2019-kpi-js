jQuery(document).ready(function() {
    jQuery(".fusion-tabs-widget .fusion-tabs-nav li a").click(function(a) {
        var b = jQuery(this).data("link");
        a.preventDefault(), jQuery(this).parents(".fusion-tabs-nav").find("li").removeClass("active"), jQuery(this).parent().addClass("active"), jQuery(this).parents(".fusion-tabs-widget").find(".fusion-tab-content").hide(), jQuery(this).parents(".fusion-tabs-widget").find('.fusion-tab-content[data-name="' + b + '"]').fadeIn()
    })
});