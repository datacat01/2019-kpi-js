jQuery(window).load(function() {
    var a;
    jQuery().eislideshow && (a = {
        autoplay: Boolean(Number(avadaElasticSliderVars.tfes_autoplay))
    }, avadaElasticSliderVars.tfes_animation && (a.animation = avadaElasticSliderVars.tfes_animation), avadaElasticSliderVars.tfes_interval && (a.slideshow_interval = avadaElasticSliderVars.tfes_interval), avadaElasticSliderVars.tfes_speed && (a.speed = avadaElasticSliderVars.tfes_speed), avadaElasticSliderVars.tfes_width && (a.thumbMaxWidth = avadaElasticSliderVars.tfes_width), jQuery("#ei-slider").eislideshow(a))
});