jQuery(document).ready(function() {
    $(".caweb-alert-close").click(function(a) {
        jQuery.post(this.dataset.url)
    })
});