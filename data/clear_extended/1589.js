/**
 * @file
 * A JavaScript file for the theme.
 */

// !(function ($) {
//   'use strict';
//   Drupal.behaviors.WebformConfig = {
//     attach: function(context) {
//       $("input[name='add_row_caadi_applicationpetionsfiles']").before('<label for="edit-submit" class="visually-hidden" title="Add Another..."></label>');
//       $("input[name='submitted_caadi7001_supporting_documentation_section_12_caadi_attachments_0_upload_button']").before('<label for="edit-submit" class="visually-hidden" title="Upload"></label>');
//       $('th:contains("caadi_datereceivedbyuscis")').text('Date Received by USCIS');
//       $('#edit-caadi_applicationpetionsfiles-28-table th:contains("caadi_receiptnumber")').text('Receipt Number');
//       $('#edit-caadi_applicationpetionsfiles-28-table th:contains("caadi_uscisformnameid")').text('USCIS Form Name ID');
//     }
//   };
// })(jQuery);

(function($) {
    Drupal.behaviors.caadi_7001 = {
        attach: function(context, settings) {
            //$("input[name='add_row_caadi_applicationpetionsfiles']").once().before('<label for="edit-submit" class="visually-hidden" title="Add Another..."></label>');
            //$("input[name='submitted_caadi7001_supporting_documentation_section_12_caadi_attachments_0_upload_button']").once().before('<label for="edit-submit" class="visually-hidden" title="Upload"></label>');
            $('th:contains("caadi_datereceivedbyuscis")').text('USCIS Receipt Date');
            $('th:contains("caadi_receiptnumber")').text('Receipt Numbers: List all available receipt numbers. The receipt number is located in the top left corner of your Notice of Action (USCIS Form I-797). Receipt number format: EAC1012345678; MSC0944556677. Do not include dashes between the characters.');
            $('th:contains("caadi_uscisformnameid")').html('USCIS Form Number <span class="form-required"> *</span>');
            $('div.messages.error:contains("caadi_uscisformnameid field is required.")').text('USCIS Form Name ID field is required.');
            $('.webform-component--caadi7001-citizenship-and-birth-section-3--birthdate > label:first-child').replaceWith('<span><b>Birth Date:</b><span class="form-required" title="This field is required.">*</span></span>');
            // Add label for add another matrix button
            $("#edit-submitted-caadi7001-application-petition-info-section-5-6-caadi-applicationpetionsfiles-add-row-caadi-applicationpetionsfiles").before('<label for="edit-submitted-caadi7001-application-petition-info-section-5-6-caadi-applicationpetionsfiles-add-row-caadi-applicationpetionsfiles" class="visually-hidden">Add Another...</label>');
            // Add label for file upload button
            $(".webform-component--supporting-documentation-fieldset .file-widget > input#edit-submitted-supporting-documentation-fieldset-caadi-supporting-docs-0-upload:first-child").after('<label for="edit-submitted-supporting-documentation-fieldset-caadi-supporting-docs-0-upload-button" class="visually-hidden">Upload</label>');
            $(".caadifs legend>span.fieldset-legend:first-child").wrap('<h2 class="form-header"></h2>');
            // Set default value on matrix date field
            // $("#edit-submitted-caadi7001-application-petition-info-section-5-6-caadi-applicationpetionsfiles-1-1-month").prepend('<option value="">Month</option>');
            // $("#edit-submitted-caadi7001-application-petition-info-section-5-6-caadi-applicationpetionsfiles-1-1-month option").val('- Month -').attr('selected', true);
            //$("#edit-submitted-caadi7001-application-petition-info-section-5-6-caadi-applicationpetionsfiles-1-1-month option[value='" + Month + "']").attr("selected","selected");
        }

        // $('#some_element', context).once('mybehavior', function () {
        //   // Code here will only be applied to $('#some_element')
        //   // a single time.
        // });
    };


    //   Drupal.behaviors.hideSubmitButton = {
    //   attach: function(context) {
    //     $('form.webform-client-form', context).once('hideSubmitButton', function () {
    //       var $form = $(this);
    //       $form.find('input.form-submit.webform-submit').click(function (e) {
    //         var el = $(this);
    //         el.after('<input type="hidden" name="' + el.attr('name') + '" value="' + el.attr('value') + '" />');
    //         return true;
    //       });
    //       $form.submit(function (e) {
    //         if (!e.isPropagationStopped()) {
    //           $('input.form-submit.webform-submit', $(this)).attr('disabled', 'disabled');
    //           return true;
    //         }
    //       });
    //     });
    //   }
    // };


    $(document).ready(function() {
        var form = $('.webform-client-form'),
            original = form.serialize()

        form.submit(function() {
            window.onbeforeunload = null
        })

        window.onbeforeunload = function() {
            if (form.serialize() != original)
                return 'Are you sure you want to leave? Any data entered will be lost!'
        }
    })


}(jQuery));;
(function($) {
    Drupal.behaviors.fancyFileDeleteViewRefresh = {
        attach: function() {
            // Refresh the view
            $('.ffd-refresh').click(function() {
                $('.view-id-fancy_file_list_unmanaged').trigger('RefreshView');
            });
        }
    }
})(jQuery);;
/*
 * external_links.js
 *
 * Drupal.settings used
 * --------------------
 *
 *  * redirect_page_safe_href_regexp
 *      used to identify safe links.
 *
 *  * redirect_node_path
 *      path to node used for redirection
 *
 *  * redirect_new_window
 *      whether to external links in a new window or not
 *
 */
(function($) {

    Drupal.behaviors.ready_gov_external_links = {
        attach: function(context, settings) {

            // settings
            var safe_href_regexp,
                redirect_node_path,
                redirect_new_window;

            // if someone is specifying Drupal.settings.safe_href_regexp, 
            // use that.
            if (Drupal.settings.redirect_page_safe_href_regexp) {
                safe_href_regexp = new RegExp(Drupal.settings.redirect_page_safe_href_regexp);
            } else {
                safe_href_regexp = new RegExp("(\.gov|\.mil)");
            }

            // set up default redirect path if non is specified
            if (Drupal.settings.redirect_node_path) {
                redirect_node_path = Drupal.settings.redirect_node_path;
            } else {
                redirect_node_path = "/redirect";
            }

            redirect_new_window = Drupal.settings.redirect_new_window;

            /** 
             * hasAttr
             *
             * return a closure that tests to see if a jquery object has an attribute
             * `a` to be used by jQuery's filter
             */
            function hasAttr(a) {
                return function(index) {
                    var attr = $(this).attr(a);
                    return (typeof attr !== 'undefined' && attr !== false) ? true : false;
                };
            }

            /**
             * isExternalHref
             *
             * determines if string `hrefStr` is an external URL or not.
             */
            function isExternalHref(hrefStr) {
                return (hrefStr.match(/^(\/|#|mailto:)/)) ? false : true;
            }

            /**
             * isSafeHref
             *
             * determine if string `hrefStr` is government affiliated.
             */
            function isSafeHref(hrefStr) {
                return (hrefStr.match(safe_href_regexp)) ? true : false;
            }

            // Loop over all anchors, filter based on presence of href, decide which
            // links are safe and which aren't, modify the unsafe links.
            $("a", context).filter(hasAttr("href")).each(function() {
                var href = $(this).attr('href');

                // if we've got an unsafe link
                if (isExternalHref(href) && !isSafeHref(href)) {
                    var newHref = redirect_node_path + "?url=" + encodeURIComponent(href);
                    $(this).attr('href', newHref);

                    if (redirect_new_window)
                        $(this).attr('target', '_blank');
                }
            });

        }
    };

}(jQuery));

;