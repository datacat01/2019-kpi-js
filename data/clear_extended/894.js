function q2w3_sidebar_init() {
    for (var a = 0; a < q2w3_sidebar_options.length; a++) q2w3_sidebar(q2w3_sidebar_options[a]);
    jQuery(window).on("resize", function() {
        for (var a = 0; a < q2w3_sidebar_options.length; a++) q2w3_sidebar(q2w3_sidebar_options[a])
    });
    var b = function() {
        for (var a = ["WebKit", "Moz", "O", "Ms", ""], b = 0; b < a.length; b++)
            if (a[b] + "MutationObserver" in window) return window[a[b] + "MutationObserver"];
        return !1
    }();
    if (0 == q2w3_sidebar_options[0].disable_mo_api && b) {
        q2w3Refresh = !1;
        var c = new b(function(a) {
            a.forEach(function(a) {
                q2w3_exclude_mutations_array(q2w3_sidebar_options).indexOf(a.target.id) == -1 && a.target.className.indexOf("q2w3-fixed-widget-container") == -1 && (q2w3Refresh = !0)
            })
        });
        c.observe(document.body, {
            childList: !0,
            attributes: !0,
            attributeFilter: ["style", "class"],
            subtree: !0
        }), setInterval(function() {
            if (q2w3Refresh) {
                for (var a = 0; a < q2w3_sidebar_options.length; a++) q2w3_sidebar(q2w3_sidebar_options[a]);
                q2w3Refresh = !1
            }
        }, 300)
    } else console.log("MutationObserver not supported or disabled!"), q2w3_sidebar_options[0].refresh_interval > 0 && setInterval(function() {
        for (var a = 0; a < q2w3_sidebar_options.length; a++) q2w3_sidebar(q2w3_sidebar_options[a])
    }, q2w3_sidebar_options[0].refresh_interval)
}

function q2w3_exclude_mutations_array(a) {
    for (var b = new Array, c = 0; c < a.length; c++)
        if (a[c].widgets.length > 0)
            for (var d = 0; d < a[c].widgets.length; d++) b.push(a[c].widgets[d]), b.push(a[c].widgets[d] + "_clone");
    return b
}

function q2w3_sidebar(a) {
    function b() {}

    function j(b) {
        var c = b.offset_top - b.fixed_margin_top,
            f = e - a.margin_bottom;
        a.stop_id && jQuery("#" + a.stop_id).length && (f = jQuery("#" + a.stop_id).offset().top - a.margin_bottom);
        var g;
        g = a.width_inherit ? "inherit" : b.obj.css("width");
        var h = !1,
            i = !1,
            j = !1;
        jQuery(window).on("scroll." + a.sidebar, function(e) {
            if (jQuery(window).width() <= a.screen_max_width || jQuery(window).height() <= a.screen_max_height) j || (b.obj.css("position", ""), b.obj.css("top", ""), b.obj.css("bottom", ""), b.obj.css("width", ""), b.obj.css("margin", ""), b.obj.css("padding", ""), widget_obj.parent().css("height", ""), jQuery("#" + b.clone_id).length > 0 && jQuery("#" + b.clone_id).remove(), j = !0, h = !1, i = !1);
            else {
                var k = jQuery(this).scrollTop();
                k + b.fixed_margin_bottom >= f ? (i || (b.obj.css("position", "fixed"), b.obj.css("top", ""), b.obj.css("width", g), jQuery("#" + b.clone_id).length <= 0 && b.obj.before(b.clone), i = !0, h = !1, j = !1), b.obj.css("bottom", k + d + b.next_widgets_height - f)) : k >= c ? h || (b.obj.css("position", "fixed"), b.obj.css("top", b.fixed_margin_top), b.obj.css("bottom", ""), b.obj.css("width", g), jQuery("#" + b.clone_id).length <= 0 && b.obj.before(b.clone), h = !0, i = !1, j = !1) : j || (b.obj.css("position", ""), b.obj.css("top", ""), b.obj.css("bottom", ""), b.obj.css("width", ""), jQuery("#" + b.clone_id).length > 0 && jQuery("#" + b.clone_id).remove(), j = !0, h = !1, i = !1)
            }
        }).trigger("scroll." + a.sidebar)
    }
    if (!a) return !1;
    if (!a.widgets) return !1;
    if (a.widgets.length < 1) return !1;
    a.sidebar || (a.sidebar = "q2w3-default-sidebar");
    var c = new Array,
        d = jQuery(window).height(),
        e = jQuery(document).height(),
        f = a.margin_top;
    jQuery("#wpadminbar").length && (f = a.margin_top + jQuery("#wpadminbar").height()), jQuery(".q2w3-widget-clone-" + a.sidebar).remove();
    for (var g = 0; g < a.widgets.length; g++) widget_obj = jQuery("#" + a.widgets[g]), widget_obj.css("position", ""), widget_obj.attr("id") ? (c[g] = new b, c[g].obj = widget_obj, c[g].clone = widget_obj.clone(), c[g].clone.children().remove(), c[g].clone_id = widget_obj.attr("id") + "_clone", c[g].clone.addClass("q2w3-widget-clone-" + a.sidebar), c[g].clone.attr("id", c[g].clone_id), c[g].clone.css("height", widget_obj.height()), c[g].clone.css("visibility", "hidden"), c[g].offset_top = widget_obj.offset().top, c[g].fixed_margin_top = f, c[g].height = widget_obj.outerHeight(!0), c[g].fixed_margin_bottom = f + c[g].height, f += c[g].height) : c[g] = !1;
    for (var i, h = 0, g = c.length - 1; g >= 0; g--) c[g] && (c[g].next_widgets_height = h, c[g].fixed_margin_bottom += h, h += c[g].height, i || (i = widget_obj.parent(), i.addClass("q2w3-fixed-widget-container"), i.css("height", ""), i.height(i.height())));
    jQuery(window).off("scroll." + a.sidebar);
    for (var g = 0; g < c.length; g++) c[g] && j(c[g])
}
"undefined" != typeof q2w3_sidebar_options && q2w3_sidebar_options.length > 0 ? window.jQuery ? q2w3_sidebar_options[0].window_load_hook ? jQuery(window).load(q2w3_sidebar_init()) : jQuery(document).ready(q2w3_sidebar_init()) : console.log("jQuery is not loaded!") : console.log("q2w3_sidebar_options not found!");