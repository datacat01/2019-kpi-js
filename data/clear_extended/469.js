for (var menus = document.getElementsByClassName("submenu"), i = 0, len = menus.length; i < len; i++) menus[i].addEventListener("mouseenter", function() {
    var e = document.getElementById("rbHeader");
    e.classList.remove("fadeOut"), e.classList.add("passthru"), intentionalHoverTimeout = setTimeout(function() {
        e.classList.add("intentionalHover")
    }, 300)
}), menus[i].addEventListener("mouseleave", function() {
    window.clearTimeout(intentionalHoverTimeout);
    var e = document.getElementById("rbHeader");
    e.classList.remove("passthru"), e.classList.remove("intentionalHover"), e.classList.add("fadeOut")
});