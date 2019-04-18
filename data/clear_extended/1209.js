(function($) {
    var hasRun = false;

    Drupal.behaviors.siViews = {
        attach: function(context, settings) {


            if ($('.views-exposed-form', context).length) {
                $('.views-exposed-form', context).once('widget-textfield', function() {
                    $('.views-exposed-form .form-type-textfield', context).each(function() {
                        var textfield = $(this),
                            label = textfield.parents('.views-exposed-widget').children('label'),
                            labelText = label.text().trim();

                        textfield.children('input').attr('placeholder', labelText);
                        label.addClass('sr-only');
                    });

                    if ($('.form-type-textfield.form-item-created-date', context).length > 0) {
                        var textfield = $('.form-type-textfield.form-item-created-date input', context),
                            label = $('.form-type-textfield.form-item-created-date label', context),
                            labelText = label.text();
                        textfield.attr('placeholder', labelText);
                        label.addClass('sr-only');

                    }
                });
            }
            // if ($('.pager', view).length) {
            //   $(view).once('si-pager', function () {
            //     pager(view);
            //   });
            // }




        }
    };



})(jQuery);