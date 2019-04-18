function edd_free_downloads_append_query_string(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    if (void 0 !== uri) var separator = -1 !== uri.indexOf("?") ? "&" : "?";
    return void 0 !== uri && uri.match(re) ? uri.replace(re, "$1" + key + "=" + value + "$2") : uri + separator + key + "=" + value
}
jQuery(document.body).ready(function($) {
    "use strict";
    var body = $(document.body);

    function eddFreeDownloadCloseModal() {
        $(".edd-free-downloads-modal-wrapper .edd-loading").hide(), $(".edd-free-downloads-modal-wrapper").fadeOut(250), $("#edd-free-downloads-modal").hide().html(""), $("body").removeClass("edd-frozen")
    }
    if (0 < $('input[name="edd_options[price_id][]"]').length) {
        var classes, wrapperPrefix, linkPrefix, linkSuffix, wrapperSuffix, href;
        if (!(classes = $(".edd_purchase_submit_wrapper").find("a.edd-add-to-cart").attr("class"))) return;
        classes = classes.replace("edd-add-to-cart", ""), href = isMobile.any ? edd_free_downloads_vars.mobile_url : "#edd-free-download-modal", "1" === edd_free_downloads_vars.has_ajax ? (wrapperPrefix = '<div class="edd-free-downloads-variable-wrapper">', linkPrefix = '<a class="edd-free-downloads-variable edd-free-download ' + classes + '" href="' + href + '" data-download-id=""><span>', linkSuffix = "</span></a>", wrapperSuffix = "</div>") : (linkPrefix = '<input type="submit" class="edd-free-downloads-variable edd-free-download ' + classes + '" name="edd_purchase_download" value="', linkSuffix = '" href="' + href + '" data-download-id="" />', wrapperSuffix = wrapperPrefix = ""), $(".edd_purchase_submit_wrapper").each(function(i) {
            if ("yes" === $(".edd_purchase_submit_wrapper").eq(i).find(".edd-add-to-cart").data("variable-price")) {
                var download_id = $(this).closest("form").attr("id").replace("edd_purchase_", "");
                "true" === edd_free_downloads_vars.bypass_logged_in ? $(this).after(wrapperPrefix + '<a href="#" class="edd-free-downloads-direct-download-link ' + classes + '" data-download-id="' + download_id + '">' + edd_free_downloads_vars.download_label + "</a>" + wrapperSuffix) : $(this).after(wrapperPrefix + linkPrefix + edd_free_downloads_vars.download_label + linkSuffix + wrapperSuffix), $(this).parent().find(".edd-free-downloads-variable").attr("data-download-id", download_id), "0.00" === $(this).prev().find('input[name="edd_options[price_id][]"]:checked').attr("data-price") ? ($(this).css("display", "none"), $(this).parent().find(".edd-free-downloads-variable-wrapper").css("display", "block")) : "0.00" === $(this).prev().find('input[name="edd_options[price_id][]"]:checked').attr("data-price") ? ($(this).css("display", "none"), $(this).parent().find(".edd-free-downloads-variable-wrapper").css("display", "block")) : ($(this).css("display", "block"), $(this).parent().find(".edd-free-downloads-variable-wrapper").css("display", "none"))
            }
        }), body.on("change", 'input[name="edd_options[price_id][]"]', function() {
            var total = 0,
                checked = 0,
                price_ids = [],
                dlUrl = $(this).closest(".edd_download_purchase_form").find("a.edd-free-downloads-variable").attr("href");
            (dlUrl = edd_free_downloads_append_query_string(dlUrl, "download_id", $(this).closest(".edd_download_purchase_form").find(".edd_purchase_submit_wrapper").find(".edd-add-to-cart").attr("data-download-id")), $(this).closest("ul").find('input[name="edd_options[price_id][]"]').each(function() {
                $(this).is(":checked") && (total += parseFloat($(this).attr("data-price")), checked += 1, price_ids.push(parseInt($(this).val())))
            }), 0 !== checked) ? 0 === total ? (dlUrl = edd_free_downloads_append_query_string(dlUrl, "price_ids", JSON.stringify(price_ids)), $(this).closest(".edd_download_purchase_form").find("a.edd-free-downloads-variable").attr("href", dlUrl), $(this).closest(".edd_download_purchase_form").find(".edd_purchase_submit_wrapper").css("display", "none"), $(this).closest(".edd_download_purchase_form").find(".edd-free-downloads-variable-wrapper").css("display", "block")) : ($(this).closest(".edd_download_purchase_form").find(".edd_purchase_submit_wrapper").css("display", "block"), $(this).closest(".edd_download_purchase_form").find(".edd-free-downloads-variable-wrapper").css("display", "none"), $(this).closest(".edd_download_purchase_form").find("a.edd-free-downloads-variable").attr("href", dlUrl)): ($(this).closest(".edd_download_purchase_form").find(".edd_purchase_submit_wrapper").css("display", "block"), $(this).closest(".edd_download_purchase_form").find(".edd-free-downloads-variable-wrapper").css("display", "none"), $(this).closest(".edd_download_purchase_form").find("a.edd-free-downloads-variable").attr("href", dlUrl))
        }), $(document.body).on("click", ".edd-free-downloads-variable", function(e) {
            e.preventDefault()
        })
    }

    function edd_fd_set_up_download_click_listener() {
        var free_downloads_form_element = $("#edd_free_download_form");
        body.addClass("edd-frozen"), free_downloads_form_element.find("input").first().focus(), free_downloads_form_element.on("click", ".edd-free-download-submit", function(e) {
            var username, password, password2, registration_required, has_error = 0,
                email = free_downloads_form_element.find('input[name="edd_free_download_email"]');
            if ("" === email.val() ? ($(".edd-free-download-errors").show(), $("#edd-free-download-error-email-required").css("display", "block"), has_error++, e.preventDefault()) : ($("#edd-free-download-error-email-required").css("display", "none"), /^((([A-Za-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([A-Za-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([A-Za-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([A-Za-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([A-Za-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([A-Za-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([A-Za-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([A-Za-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([A-Za-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([A-Za-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(email.val()) ? $("#edd-free-download-error-email-invalid").css("display", "none") : ($(".edd-free-download-errors").show(), $("#edd-free-download-error-email-invalid").css("display", "block"), has_error++, e.preventDefault())), "true" === edd_free_downloads_vars.require_name) {
                var fname = $('#edd_free_download_form input[name="edd_free_download_fname"]'),
                    lname = $('#edd_free_download_form input[name="edd_free_download_lname"]');
                "" === fname.val() ? ($(".edd-free-download-errors").show(), $("#edd-free-download-error-fname-required").css("display", "block"), has_error++, e.preventDefault()) : $("#edd-free-download-error-fname-required").css("display", "none"), "" === lname.val() ? ($(".edd-free-download-errors").show(), $("#edd-free-download-error-lname-required").css("display", "block"), has_error++, e.preventDefault()) : $("#edd-free-download-error-lname-required").css("display", "none")
            }
            "true" === edd_free_downloads_vars.user_registration && (username = $('input[name="edd_free_download_username"]'), password = $('input[name="edd_free_download_pass"]'), password2 = $('input[name="edd_free_download_pass2"]'), registration_required = "1" === edd_free_downloads_vars.guest_checkout_disabled, "" === username.val() && registration_required && ($("#edd-free-download-error-username-required").css("display", "block"), has_error++), "" !== password.val() || !registration_required && "" === username.val() || ($("#edd-free-download-error-password-required").css("display", "block"), has_error++), "" !== password2.val() || !registration_required && "" === username.val() || ($("#edd-free-download-error-password2-required").css("display", "block"), has_error++), "" !== password.val() && "" !== password2.val() && (password.val() === password2.val() || !registration_required && "" === username.val() ? $("#edd-free-download-error-password-unmatch").css("display", "none") : ($("#edd-free-download-error-password-unmatch").css("display", "block"), has_error++)));
            if ($("#edd-free-download-privacy-agreement").length && !$("#edd-free-download-privacy-agreement").is(":checked") ? (has_error++, $("#edd-free-download-error-privacy-policy").css("display", "block")) : $("#edd-free-download-error-privacy-policy").css("display", "none"), 0 === has_error)
                if ($(".edd-free-download-submit span").html(edd_free_downloads_vars.download_loading), $(".edd-free-download-submit span").append('<i class="edd-icon-spinner edd-icon-spin"></i>'), $(".edd-free-download-submit").attr("disabled", "disabled"), "1" === edd_free_downloads_vars.email_verification) {
                    e.preventDefault();
                    var data = $("#edd_free_download_form").serialize();
                    $.ajax({
                        url: edd_free_downloads_vars.ajaxurl,
                        type: "POST",
                        data: data,
                        success: function(response) {
                            $(".edd-free-downloads-verification-message").html(response.message).fadeIn(), $(".edd-free-downloads-verification-message-wrapper").removeClass("edd-alert-info"), response.success ? ($(".edd-free-downloads-verification-message-wrapper").addClass("edd-alert-success", 250), $(".edd-free-download-submit").hide(), $(".edd-free-download-cancel").hide()) : $(".edd-free-downloads-verification-message-wrapper").addClass("edd-alert-error", 250)
                        }
                    })
                } else $("#edd_free_download_form").submit(), "default" != edd_free_downloads_vars.on_complete_handler && "redirect" != edd_free_downloads_vars.on_complete_handler && setTimeout(function() {
                    eddFreeDownloadCloseModal()
                }, edd_free_downloads_vars.on_complete_delay);
            else $(".edd-free-download-errors").css("display", "block"), $(".edd-free-download-submit").removeAttr("disabled"), e.preventDefault()
        })
    }

    function edd_fd_process_direct_download_link(target) {
        var price_ids = [],
            download_id = target.parent().parent().find('input[name="edd_free_download_id"]').val();
        download_id || (download_id = target.parent().parent().find(".edd-free-download").data("download-id")), download_id || (download_id = target.data("download-id")), 0 < target.parent().parent().find('input[name="edd_free_download_price_id[]"]').length ? target.parent().parent().find('input[name="edd_free_download_price_id[]"]').each(function() {
            price_ids.push($(this).val().toString())
        }) : 0 < target.parent().parent().find('input[name="edd_options[price_id][]"]:checked').length && target.parent().parent().find('input[name="edd_options[price_id][]"]:checked').each(function() {
            price_ids.push($(this).val().toString())
        });
        var redirect = window.location.href; - 1 !== redirect.indexOf("?") ? redirect += "&" : redirect += "?", isMobile.any || eddFreeDownloadCloseModal(), window.location = redirect + "edd_action=free_downloads_process_download&download_id=" + download_id + "&price_ids=" + price_ids
    }
    isMobile.any ? (body.on("click", "a.edd-free-download", function(e) {
        e.preventDefault(), $('input[name="edd_free_download_email"]').focus(), $('input[name="edd_free_download_email"]').select(), window.location.href = $(this).attr("href")
    }), edd_fd_set_up_download_click_listener(), body.on("click", ".edd-free-download-cancel", function() {
        return parent.history.back(), !1
    })) : body.on("click", "a.edd-free-download", function(e) {
        e.preventDefault();
        var edd_download_id = $(this).data("download-id"),
            price_ids = [],
            variable_prices = $(this).parent().parent().find('input[name="edd_options[price_id][]"]');
        0 < variable_prices.length && variable_prices.each(function() {
            $(this).parent().parent().find('input[name="edd_options[price_id][]"]').each(function() {
                ($(this).prop("checked") || "hidden" === $(this).attr("type")) && price_ids.push($(this).val().toString())
            })
        }), $(".edd-free-downloads-modal-wrapper").fadeIn(250), $(".edd-free-downloads-modal-wrapper .edd-loading").show(), $.ajax({
            url: edd_free_downloads_vars.ajaxurl,
            type: "GET",
            data: {
                action: "edd_free_downloads_get_modal",
                download_id: edd_download_id,
                price_ids: price_ids,
                edd_is_mobile: edd_free_downloads_vars.edd_is_mobile,
                require_name: edd_free_downloads_vars.require_name,
                success_page: edd_free_downloads_vars.success_page
            },
            success: function(returned_data) {
                $("#edd-free-downloads-modal").prepend(returned_data).fadeIn(250), $(".edd-free-downloads-modal-wrapper .edd-loading").hide(), $(".edd-free-downloads-modal-wrapper .edd-free-downloads-modal-close").on("click", function() {
                    eddFreeDownloadCloseModal()
                }), $("#edd-free-downloads-modal").on("click", "a.edd-free-downloads-direct-download-link", function(e) {
                    e.preventDefault(), edd_fd_process_direct_download_link($(this))
                }), $("#edd-free-downloads-modal").on("click", function(e) {
                    e.stopPropagation()
                }), $("#edd-free-downloads-modal").parent(".edd-free-downloads-modal-wrapper").on("click", function() {
                    eddFreeDownloadCloseModal()
                }), body.on("keypress", ".edd-free-download-field", function(e) {
                    if (13 === e.which) return $(".edd-free-download-submit").click(), !1
                }), body.on("keypress", ".edd-free-downloads-modal-close", function(e) {
                    if (13 === e.which || 32 === e.which) return $(".edd-free-downloads-modal-close").click(), !1
                }), body.on("keyup", function(e) {
                    27 === e.keyCode && eddFreeDownloadCloseModal()
                }), edd_fd_set_up_download_click_listener()
            }
        })
    }), body.on("click", "a.edd-free-downloads-direct-download-link", function(e) {
        e.preventDefault(), edd_fd_process_direct_download_link($(this))
    })
});