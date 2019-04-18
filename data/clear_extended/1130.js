/**
 * @file
 * Provides the flexslider js for the homepage
 */

;
(function($, D) {
    D.behaviors.psu_slideshow = {
        attach: function(context, settings) {
            var useCSS = true;
            if ($.browser.msie && $.browser.version > 9) {
                useCSS = false;
            }

            $('#rotator').flexslider({
                animation: 'slide',
                slideshow: false,
                useCSS: useCSS,
                pauseOnHover: true,
                start: function(slider) {
                    // Mark non-screen reader friendly items as aria-hidden.
                    $('.flexslider .clone').attr('aria-hidden', 'true');
                    $('.flexslider .flex-control-nav').attr('aria-hidden', 'true');
                    $('.flexslider .flex-direction-nav').attr('aria-hidden', 'true');
                }
            });
        }
    }
})(jQuery, Drupal);;

(function($) {
    Drupal.behaviors.CToolsJumpMenu = {
        attach: function(context) {
            $('.ctools-jump-menu-hide')
                .once('ctools-jump-menu')
                .hide();

            $('.ctools-jump-menu-change')
                .once('ctools-jump-menu')
                .change(function() {
                    var loc = $(this).val();
                    var urlArray = loc.split('::');
                    if (urlArray[1]) {
                        location.href = urlArray[1];
                    } else {
                        location.href = loc;
                    }
                    return false;
                });

            $('.ctools-jump-menu-button')
                .once('ctools-jump-menu')
                .click(function() {
                    // Instead of submitting the form, just perform the redirect.

                    // Find our sibling value.
                    var $select = $(this).parents('form').find('.ctools-jump-menu-select');
                    var loc = $select.val();
                    var urlArray = loc.split('::');
                    if (urlArray[1]) {
                        location.href = urlArray[1];
                    } else {
                        location.href = loc;
                    }
                    return false;
                });
        }
    }
})(jQuery);;