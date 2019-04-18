jQuery(function($) {

    // Hide the EDD prices (display loader) until they are changed by FS prices.
    $('a.edd-add-to-cart').each(function() {
        var $button = $(this);
        var $parentForm = $button.closest('form.edd_download_purchase_form');

        if (!$button.hasClass('js-pp-edd-fs-show-original-price')) {
            // Show loader for purchase button.
            $button.attr('data-edd-loading', '');

            // Hide the variable prices.
            $parentForm.find('.edd_price_options input[type="radio"], .edd_price_options input[type="checkbox"]').each(function() {
                $(this).siblings('.edd_price_option_price').hide();
            });
        }
    });

    if ('undefined' !== typeof PPEDDFS_MAIN_FOOTER.payload && '' !== PPEDDFS_MAIN_FOOTER.payload && 'undefined' !== typeof PPEDDFS_MAIN_FOOTER.key && '' !== PPEDDFS_MAIN_FOOTER.key) {
        fastspring.builder.reset();
        fastspring.builder.secure(PPEDDFS_MAIN_FOOTER.payload, PPEDDFS_MAIN_FOOTER.key);
    }

    /**
     * "Hijack" the EDD "Buy now" button to interrupt the redirect to EDD checkout
     * and use the FS popup or redirect to the external FS checkout page.
     */
    $(document).on('submit', '.edd_download_purchase_form', function(event) {
        // Check if this is the "buy now" button.
        if ('straight_to_gateway' === $(this).find('.edd_action_input').val()) {
            event.preventDefault();
            var priceIDs = [];
            var quantities = [];
            var quantity;
            var priceID;

            var downloadID = $(this).find('input[name="download_id"]').val();

            // Variable product purchase_link with set price ID.
            priceID = $(this).children('input[name="edd_options[price_id][]"]').val() || false;

            if (false !== priceID) {
                priceIDs.push(priceID);
            } else {
                // Normal variable product purchase_link with radio options.
                priceID = $(this).find('.edd_price_options input:radio:checked').val() || false;

                if (false !== priceID) {
                    priceIDs.push(priceID);
                } else { // Multi select variable product purchase_link.
                    $(this).find('.edd_price_options.edd_multi_mode input:checkbox:checked').each(function() {
                        priceIDs.push($(this).val());

                        quantity = $(this).closest('li').find('input.edd-item-quantity').val() || 1;

                        quantities.push(quantity);
                    });
                }
            }

            // Don't send an empty price IDs array.
            if (0 === priceIDs.length) {
                priceIDs = false;
            }

            // Don't send an empty quantities array.
            if (0 === quantities.length) {
                quantity = $(this).find('.edd-item-quantity').val() || 1;

                quantities.push(quantity);
            }

            $.ajax({
                    method: 'GET',
                    url: PPEDDFS_MAIN.ajax_url,
                    data: {
                        action: 'pp_edd_fs_get_fs_order_data_for_buy_now',
                        edd_download_id: downloadID,
                        edd_download_price_ids: priceIDs,
                        edd_download_quantities: quantities,
                    },
                    xhrFields: {
                        withCredentials: true
                    }
                })
                .done(function(response) {
                    if ('undefined' !== typeof response.success && response.success) {
                        fastspring.builder.reset();
                        fastspring.builder.secure(response.data.payload, response.data.key);
                        fastspring.builder.checkout();
                    }
                });
        }
    });

});


/**
 * Reset the EDD cart data (AJAX request).
 */
function resetEddCartDataAndRedirect() {
    jQuery.ajax({
            method: 'POST',
            url: PPEDDFS_MAIN.ajax_url,
            data: {
                action: 'pp_edd_fs_reset_edd_cart'
            },
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function(response) {
            if ('undefined' !== typeof response.success && response.success) {
                // Redirect to the thank you page or just refresh the page (to clear the checkout data).
                if (PPEDDFS_MAIN.thank_you_page_url) {
                    window.location = PPEDDFS_MAIN.thank_you_page_url;
                } else {
                    window.location.reload(true);
                }
            }
        });
}


/**
 * Reset the EDD "Buy now" purchase button.
 */
function resetEddBuyNowPurchaseButtons() {
    jQuery('.edd_download_purchase_form a.edd-add-to-cart').each(function() {
        var $buyNowButton = jQuery(this);
        var $parentForm = $buyNowButton.closest('form.edd_download_purchase_form');
        var $formAction = $parentForm.find('.edd_action_input');

        if ('straight_to_gateway' === $formAction.val()) {
            $buyNowButton.prop('disabled', false);
            $buyNowButton.removeAttr('data-edd-loading');
        }
    });
}


/**
 * Change the purchase link lable price, with the FS localized price.
 */
function changeEDDPurchaseLinkPriceWithFSLocalizedPrice() {
    jQuery('a.edd-add-to-cart').each(function() {
        var $button = jQuery(this);
        var $parentForm = $button.closest('form.edd_download_purchase_form');
        var label = $button.children('.edd-add-to-cart-label').html();

        if (label.indexOf('&nbsp;–&nbsp;') !== -1 && !$button.hasClass('js-pp-edd-fs-show-original-price')) {
            var fsPrice = $parentForm.find('.js-pp-edd-fs-product-price').val() || false;

            // Check if this is a variable pricing product with set price_id.
            var eddPriceId = $parentForm.find('input[name="edd_options[price_id][]"]').val() || false;

            if (eddPriceId) {
                fsPrice = $parentForm.find('.js-pp-edd-fs-product-price[data-price-id=' + eddPriceId + ']').val() || false;
            }

            if (fsPrice) {
                var textPieces = label.split('&nbsp;–&nbsp;');

                textPieces[0] = fsPrice;

                $button.children('.edd-add-to-cart-label').text(textPieces.join(' - '));
            }
        }

        $parentForm.find('.edd_price_options input[type="radio"], .edd_price_options input[type="checkbox"]').each(function() {
            var $option = jQuery(this);
            var priceId = $option.val();

            if (priceId && !$button.hasClass('js-pp-edd-fs-show-original-price')) {
                var newPrice = $parentForm.find('.js-pp-edd-fs-product-price[data-price-id=' + priceId + ']').val() || false;

                if (newPrice) {
                    $option.siblings('.edd_price_option_price').text(newPrice).show();
                }
            }
        });

        // Hide the loader.
        $button.removeAttr('data-edd-loading');
    });
}


/**
 * FS builder error callback function, which will process the error from FS.
 *
 * Needs to be defined on a global scope.
 *
 * @see https://docs.fastspring.com/integrating-with-fastspring/store-builder-library/getting-started-with-store-builder-library
 *
 * @param errorCode
 * @param errorMessage
 */
function fastspringErrorCallback(errorCode, errorMessage) {
    // Reset the EDD checkout button.
    if (typeof eddCheckoutResetPurchaseButton == 'function') {
        eddCheckoutResetPurchaseButton();
    }

    // Reset the EDD "buy now" button.
    resetEddBuyNowPurchaseButtons();

    // Trigger custom event, so other user can hook to it.
    jQuery(window).trigger('ppeddfsFsError', [errorCode, errorMessage]);
}


/**
 * FS builder popup closed callback function.
 *
 * Needs to be defined on a global scope.
 *
 * @see https://docs.fastspring.com/integrating-with-fastspring/store-builder-library/getting-started-with-store-builder-library
 *
 * @param object|null responseObject Response object with FS order id and reference on successfull purchase or null.
 */
function fastspringPopupClosedCallback(responseObject) {
    // Reset the EDD checkout button.
    if (typeof eddCheckoutResetPurchaseButton == 'function') {
        eddCheckoutResetPurchaseButton(null);
    }

    // Reset the EDD "buy now" button.
    resetEddBuyNowPurchaseButtons();

    // Reset the EDD cart and redirect/refresh the page.
    if (null !== responseObject) {
        resetEddCartDataAndRedirect();
    }

    // Trigger custom event, so other user can hook to it.
    jQuery(window).trigger('ppeddfsFsPopupClosed', [responseObject]);
}


/**
 * FS builder after markup callback function.
 *
 * Needs to be defined on a global scope.
 *
 * @see https://docs.fastspring.com/integrating-with-fastspring/store-builder-library/getting-started-with-store-builder-library
 */
function fastspringAfterMarkupCallback() {
    changeEDDPurchaseLinkPriceWithFSLocalizedPrice();

    // Trigger custom event, so other user can hook to it.
    jQuery(window).trigger('ppeddfsAfterFsMarkup');
}


/**
 * Decorate URL with the first Google Analytics tracker (if it exists)
 *
 * @param {string} url to the
 *
 * @see https://docs.fastspring.com/integrations/extensions-tab/google-universal-analytics
 */
function fastspringDecorateURLCallback(url) {
    var linkerParam = null;

    if (window.hasOwnProperty('ga')) {
        ga(function() {
            var trackers = ga.getAll();
            linkerParam = trackers[0].get('linkerParam');
        });
        return (linkerParam ? url + '?' + linkerParam : url);
    }

    return url;
}