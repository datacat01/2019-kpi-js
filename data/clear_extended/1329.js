jQuery(document).ready(function() {
    jQuery().UItoTop && (cssua.ua.mobile && "1" == avadaToTopVars.status_totop_mobile ? jQuery().UItoTop({
        easingType: "easeOutQuart"
    }) : cssua.ua.mobile || jQuery().UItoTop({
        easingType: "easeOutQuart"
    }))
});