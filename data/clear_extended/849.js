jQuery(document).ready(function(t) {
    t(".common-alert-heading-switch").on("click", function() {
        var n = t(this).parents(".common-alert-module");
        return n.toggleClass("is-open"), n.hasClass("is-open") ? t(this).html("閉じる") : t(this).html("開く"), !1
    })
});