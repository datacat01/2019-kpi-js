/**
 * @file
 * Javascript behaviors for sage form validation.
 */
Drupal.formValidation = Drupal.formValidation || {};

(function($) {

    Drupal.formValidation = {

        init: function(context) {
            $('.form', context).each($.proxy(this.formDisplayValidation, this));
        },

        formDisplayValidation: function(index, form) {
            var errors = $('.form-item .error', form);
            if (errors.length) {
                $('.form-item', form).each(this.addValidationIconToItem);
            }
        },

        addValidationIconToItem: function(index, el) {
            var normal_checkbox = $(':checkbox', el).length && !$(':checkbox', el).hasClass('required');
            if (!normal_checkbox) {
                $('.validation-container', el).html('<span class="validation-icon"></span>');
            }
        }

    };

    Drupal.behaviors.formValidation = {
        attach: function(context) {
            Drupal.formValidation.init(context);
        }
    };

})(jQuery);;