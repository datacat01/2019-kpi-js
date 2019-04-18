(function(b) {
    function c() {
        var a = b.createElement("iframe");
        a.style.display = "none";
        a.setAttribute("sandbox", "allow-scripts allow-same-origin");
        a.src = "//radar.cedexis.com/1/11326/radar.html";
        b.body && b.body.appendChild(a)
    }
    window.addEventListener ? window.addEventListener("load", c, !1) : window.addEvent && window.addEvent("onload", c)
})(document);