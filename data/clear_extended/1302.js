! function(a) {
    a.fn.hoverFlow = function(b, c, d, e, f) {
        if (-1 == a.inArray(b, ["mouseover", "mouseenter", "mouseout", "mouseleave"])) return this;
        var g = "object" == typeof d ? d : {
            complete: f || !f && e || a.isFunction(d) && d,
            duration: d,
            easing: f && e || e && !a.isFunction(e) && e
        };
        g.queue = !1;
        var h = g.complete;
        return g.complete = function() {
            a(this).dequeue(), a.isFunction(h) && h.call(this)
        }, this.each(function() {
            var d = a(this);
            "mouseover" == b || "mouseenter" == b ? d.data("jQuery.hoverFlow", !0) : d.removeData("jQuery.hoverFlow"), d.queue(function() {
                ("mouseover" == b || "mouseenter" == b ? void 0 !== d.data("jQuery.hoverFlow") : void 0 === d.data("jQuery.hoverFlow")) ? d.animate(c, g): d.queue([])
            })
        })
    }
}(jQuery);