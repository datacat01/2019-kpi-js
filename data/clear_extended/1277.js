jQuery(window).load(function() {
    var e;
    jQuery().cycle && (e = {
        fx: "fade",
        before: function(e, i, t, n) {
            var a = jQuery(this).height();
            jQuery(this).parent().children().removeClass("active-testimonial"), jQuery(this).addClass("active-testimonial"), jQuery(this).parent().animate({
                height: a
            }, 500)
        },
        containerResize: 0,
        containerResizeHeight: 1,
        height: "auto",
        width: "100%",
        fit: 1,
        speed: 500,
        delay: 0
    }, fusionTestimonialVars.testimonials_speed && (e.timeout = parseInt(fusionTestimonialVars.testimonials_speed, 10)), e.pager = ".testimonial-pagination", jQuery(".fusion-testimonials .reviews").each(function() {
        1 === jQuery(this).children().length && jQuery(this).children().fadeIn(), e.pager = "#" + jQuery(this).parent().find(".testimonial-pagination").attr("id"), e.random = jQuery(this).parent().data("random"), jQuery(this).cycle(e)
    }), jQuery(window).resize(function() {
        jQuery(".fusion-testimonials .reviews").each(function() {
            jQuery(this).css("height", jQuery(this).children(".active-testimonial").height())
        })
    }))
});