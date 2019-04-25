jQuery(document).ready(function() {
    jQuery('ucl-widget').each(function() {
        var widget = jQuery(this);
        var widgetUrl = widget.attr('url');
        var widgetType = widget.attr('type');

        widget.html('');
        jQuery.ajax({
            url: Drupal.settings.basePath + "ucl-widgets?url=" + encodeURIComponent(widgetUrl) + '&type=' + encodeURIComponent(widgetType),
            success: function(result) {
                jQuery.when(widget.html(result))
                    .then(function() {
                        widget.find('form input[name="LOCAL_BASE"] ').val(widget.data('lssba'));
                        widget.find('form input[name="collection_id"] ').val(widget.data('lsscid'));
                    });
            }
        });
    });
});