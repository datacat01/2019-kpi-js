function getAdminbarHeight() {
    var a = 0;
    return jQuery("#wpadminbar").length && (a = parseInt(jQuery("#wpadminbar").outerHeight(), 10)), a
}

function getWaypointOffset(a) {
    var b, c, d = a.data("animationoffset");
    return void 0 === d && (d = "bottom-in-view"), "top-out-of-view" === d && (b = getAdminbarHeight(), c = "function" === getWaypointTopOffset ? getWaypointTopOffset() : 0, d = b + c), d
}
jQuery(window).load(function() {
    setTimeout(function() {
        jQuery.waypoints("viewportHeight")
    }, 300)
});