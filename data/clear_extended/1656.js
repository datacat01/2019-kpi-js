jQuery(document).ready(function($) {
    if (jQuery('.etracker-sidebar').length > 0) {
        $('#et-toggle-sb').click(function() {
            $('#et-mobile-sb').addClass('etracker-ms-toggle');
            $('#et-sb-shadow').fadeIn('fast');
            $('body, html').addClass('overflow-hidden');
            return false;
        });
        $('#et-sb-shadow, .cross').click(function() {
            $('#et-mobile-sb').removeClass('etracker-ms-toggle');
            $('#et-sb-shadow').fadeOut('fast');
            $('body, html').removeClass('overflow-hidden');
            return false;
        });
    }
});

if (jQuery('#e-search-input').length > 0) {

    var availableTags = (function() {
        var json = null;
        jQuery.ajax({
            'async': false,
            'global': false,
            'url': '/json/',
            'dataType': 'json',
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();

    jQuery('#e-search-input').autocomplete({
        source: availableTags,
        minLength: 1,
        select: function(event, ui) {
            jQuery(this).val('');
            jQuery('#e-search-form').attr('action', ui.item.url);
            // jQuery('#e-search-form').submit();
            window.location.href = ui.item.url;
        },
        open: function() {
            jQuery('.ui-autocomplete:visible').css({
                top: '+=15'
            });
        }
    });

    jQuery.ui.autocomplete.prototype._resizeMenu = function() {
        var ul = this.menu.element;
        ul.outerWidth(this.element.outerWidth());
    }
}

jQuery(document).ready(function($) {
    $(".current-cat").parents('li').addClass('current-cat');
});