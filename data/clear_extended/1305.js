jQuery(document).ready(function() {
    jQuery(".fusion-alert .close").click(function(a) {
        a.preventDefault(), jQuery(this).parent().slideUp()
    })
});