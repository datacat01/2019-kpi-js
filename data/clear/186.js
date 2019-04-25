function widerrufcheckSearch() {

    var wcdata = encodeURIComponent(jQuery('#wc-url').val());

    if (wcdata.value != '') {
        jQuery('#wc-loader').css('display', 'block');
        jQuery('#wc-result').html('');
        jQuery.ajax({
            url: wcurl + wcpath + wcfile + '?wcid=' + wcid + '&wcurl=' + wcdata,
            type: 'post',
            dataType: 'json',
            success: function(response) {
                jQuery('#wc-loader').css('display', 'none');
                jQuery('#wc-result').html(response.message);
            }
        });
    }

}