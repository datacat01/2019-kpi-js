! function(a, b, c) {
    for (var d, e = 0, f = function(a) {
            d && (b.requestAnimationFrame(f, a), jQuery.fx.tick())
        }, g = ["ms", "moz", "webkit", "o"], h = 0, i = g.length; h < i && !b.requestAnimationFrame; ++h) b.requestAnimationFrame = b[g[h] + "RequestAnimationFrame"], b.cancelAnimationFrame = b[g[h] + "CancelAnimationFrame"] || b[g[h] + "CancelRequestAnimationFrame"];
    b.requestAnimationFrame || (b.requestAnimationFrame = function(a, c) {
        var d = (new Date).getTime(),
            f = d - e,
            g = Math.max(0, 16 - f),
            h = b.setTimeout(function() {
                a(d + g)
            }, g);
        return e = d + g, h
    }), b.cancelAnimationFrame || (b.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    }), jQuery.fx.timer = function(a) {
        a() && jQuery.timers.push(a) && !d && (d = !0, f(a.elem))
    }, jQuery.fx.stop = function() {
        d = !1
    }
}(jQuery, this);