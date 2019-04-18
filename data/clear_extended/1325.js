function setStickySidebarStatus(a) {
    !Modernizr.mq("only screen and (max-width:" + avadaSidebarsVars.content_break_point + "px)") && Math.floor(jQuery("#content").height()) >= Math.floor(jQuery("#main").height()) ? (jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").hasClass("fusion-sidebar-stuck") || jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").stick_in_parent({
        parent: "#main > .fusion-row",
        sticky_class: "fusion-sidebar-stuck",
        bottoming: !0,
        spacer: !1,
        offset_top: a
    }).on("sticky_kit:stick", function(a) {
        var b = jQuery(a.target);
        jQuery("body").hasClass("double-sidebars") && (b.css("margin-left", "0"), b.parent().css({
            "margin-left": b.data("margin"),
            width: b.data("width")
        }))
    }).on("sticky_kit:unstick", function(a) {
        var b = jQuery(a.target);
        jQuery("body").hasClass("double-sidebars") && b.css("margin-left", b.data("margin"))
    }), jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").hasClass("fusion-sidebar-stuck") || jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").stick_in_parent({
        parent: "#main > .fusion-row",
        sticky_class: "fusion-sidebar-stuck",
        bottoming: !0,
        spacer: !1,
        offset_top: a
    }).on("sticky_kit:stick", function(a) {
        var b = jQuery(a.target);
        jQuery("body").hasClass("double-sidebars") && (b.css("margin-left", "0"), b.parent().css({
            "margin-left": b.data("margin"),
            width: b.data("width")
        }))
    }).on("sticky_kit:unstick", function(a) {
        var b = jQuery(a.target);
        jQuery("body").hasClass("double-sidebars") && b.css("margin-left", b.data("margin"))
    })) : (jQuery(".fusion-sidebar-left.fusion-sticky-sidebar .fusion-sidebar-inner-content").trigger("sticky_kit:detach"), jQuery(".fusion-sidebar-right.fusion-sticky-sidebar .fusion-sidebar-inner-content").trigger("sticky_kit:detach"))
}

function calcStickySidebarOffset() {
    var a = jQuery("#wpadminbar").height() + 50;
    return "top" === avadaSidebarsVars.header_position && "1" === avadaSidebarsVars.header_sticky && ("v4" === avadaSidebarsVars.header_layout || "v5" === avadaSidebarsVars.header_layout ? "menu_only" === avadaSidebarsVars.header_sticky_type2_layout ? a += jQuery(".fusion-secondary-main-menu").height() : a += jQuery(".fusion-sticky-header-wrapper").height() : "1" === avadaSidebarsVars.sticky_header_shrinkage ? a += 66 : a += jQuery(".fusion-header").height()), a
}
jQuery(document).ready(function() {
    var a, b = calcStickySidebarOffset();
    1 <= jQuery("#sidebar-2").length && (a = jQuery("#sidebar").css("float"), jQuery("body").addClass("sidebar-position-" + a)), setStickySidebarStatus(b), jQuery(window).on("resize", function() {
        b = calcStickySidebarOffset(), setStickySidebarStatus(b)
    })
});