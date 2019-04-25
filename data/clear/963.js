Drupal.locale = {
    'strings': {
        "": {
            "Review copy available": "Review copy available"
        }
    }
};;
/**
 * @file
 *  Form validation handlers.
 */
var Sage = Sage || {};
Sage.Form = Sage.Form || {};

(function($) {

    // Theme functions
    Drupal.theme.prototype.errorMessage = function(message) {
        return '<div class="error-message error messages-inline">' + message + '</div>';
    };
    Drupal.theme.prototype.formItemErrorWrap = function(hidden) {
        var classes = ['form-item-error'];
        return '<div class="' + classes.join(" ") + '"></div>';
    };
    Drupal.theme.prototype.fieldsetErrorWrap = function() {
        return '<div class="fieldset-error"></div>';
    };

    // Behaviors
    Drupal.behaviors.FormValidation = {
        attach: function(context, settings) {
            Sage.Form.Validation.initialize(context);
        }
    };

    // Exceptions
    function SageFormException(code, message) {
        this.code = code;
        this.message = message;

        this.getCode = function() {
            return this.code;
        };

        this.getMessage = function() {
            return this.message;
        }
    }

    Sage.Form.Validation = $.extend({}, {

        DATA_REGEXP_VALIDATION: 'data-regexp-validation',
        DATA_REGEXP_MESSAGE: 'data-regexp-message',
        DATA_REQUIRED_VALIDATION: 'data-required-validation',
        DATA_REQUIRED_MESSAGE: 'data-required-message',
        DATA_SUCCESS_MESSAGE: 'data-success-message',

        EXCEPTION_REQUIRED: 'required',
        EXCEPTION_MISSMATCH: 'missmatch',
        EXCEPTION_ERRORS: 'errors',

        ELEMENT_EMAIL: 'email',
        ELEMENT_PASSWORD: 'password',

        ELEMENT_DECISION_DATE: 'decision',

        errorParentsSelectors: {
            form_item: '.form-item-error',
            fieldset: '.fieldset-error'
        },

        initialize: function(context) {
            this.bindEvents();
        },

        bindEvents: function(context) {
            this.bindElements(context);
            this.bindInputSubmit();
            this.bindFormSubmit();
        },

        getElements: function(context) {
            return $('[' + this.DATA_REGEXP_VALIDATION + '], [' + this.DATA_REQUIRED_VALIDATION + ']', context);
        },

        getElementsNotControlled: function(context) {
            return $('input, select', context).not('[' + this.DATA_REGEXP_VALIDATION + '], [' + this.DATA_REQUIRED_VALIDATION + ']').closest(this.errorParentsSelectors.form_item);
        },

        getElementConfirmation: function(element) {
            var name = $(element).attr('name') + '-confirmation';
            return $('[name="' + name + '"]');
        },

        hasElementConfirmation: function(element) {
            return this.getElementConfirmation(element).length > 0;
        },

        bindElements: function(context) {
            this.getElements(context).on('blur', $.proxy(function(e) {
                var element = $(e.currentTarget);
                this.validateElement(element);
            }, this));
        },

        validateElements: function(context) {
            this.getElements(context).each($.proxy(function(idx, item) {
                this.validateElement($(item));
            }, this));
        },

        bindInputSubmit: function() {
            var callback = $.proxy(function(e) {
                try {
                    var element = $(e.currentTarget);
                    var form = element.closest('form');
                    this.getElementsNotControlled(form).removeClass(this.errorParentsSelectors.form_item);
                    this.validateForm(form);
                    this.enableElements(form);
                } catch (ex) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }, this);
            $('input[type="submit"]').bindFirst('mousedown', callback);
            $('input[type="submit"]').bindFirst('click', callback);
        },

        bindFormSubmit: function() {
            // Avoid to disable the submit on the add_to_cart forms and sales-representative-form
            var forms = $('form').not('[id^="commerce-cart-add-to-cart-form-"], [id="sales-representative-form"], [id$="pdf-form"]');
            $(forms).preventDoubleSubmission();
        },

        validateForm: function(form) {
            this.validateElements(form);

            var errors = form.find($.map(this.errorParentsSelectors, function(parentSelector) {
                return parentSelector + ' > div'
            }).join());

            if (errors.length > 0) {
                // Scroll the viewport to the first input with errors
                $(errors[0]).find('input, select, textarea').focus();
                throw new SageFormException(this.EXCEPTION_ERRORS, Drupal.t('There are some errors in the form, please check'));
            }
            return true;
        },

        // Only way to use disabled selects in the form, but still functional.
        enableElements: function(form) {
            $(form).find('input, select').attr('disabled', false);
        },

        validateElement: function(element) {
            try {
                this.validateElementMandatory(element);
                this.validateElementContent(element);
                this.validateElementSpecial(element);
                this.showSuccess(element);
            } catch (e) {
                this.showFailure(element, e.getMessage());
            }
        },

        validateElementContent: function(element) {
            var validation = element.attr(this.DATA_REGEXP_VALIDATION);
            var content = element.val();
            if (validation && content) {
                var r = new RegExp(validation, 'g');
                var valid = r.test(content);
                if (!valid) {
                    throw new SageFormException(this.EXCEPTION_MISSMATCH, this.tokenize(element, element.attr(this.DATA_REGEXP_MESSAGE)));
                }
            }
            return true;
        },

        validateElementMandatory: function(element) {
            var mandatory = parseInt(element.attr(this.DATA_REQUIRED_VALIDATION)) || 0;
            var content = element.val();
            if (mandatory && element.is('fieldset') && element.find(':checked').length <= 0) {
                throw new SageFormException(this.EXCEPTION_REQUIRED, this.tokenize(element, element.attr(this.DATA_REQUIRED_MESSAGE)));
            }
            if (mandatory && !element.is('fieldset') && !content) {
                throw new SageFormException(this.EXCEPTION_REQUIRED, this.tokenize(element, element.attr(this.DATA_REQUIRED_MESSAGE)));
            }
            if (mandatory && element.attr('type') == 'checkbox' && !element.is(':checked')) {
                var fieldSet = element.closest('fieldset');
                if ($("#" + fieldSet.attr('id') + " input:checkbox:checked").length > 0) {
                    return true;
                } else {
                    throw new SageFormException(this.EXCEPTION_REQUIRED, this.tokenize(element, element.attr(this.DATA_REQUIRED_MESSAGE)));
                }
            }
            return true;
        },

        validateElementSpecial: function(element) {
            switch (element.attr('name')) {
                case this.ELEMENT_EMAIL + '-confirmation':
                case this.ELEMENT_PASSWORD + '-confirmation':
                    var name = element.attr('name').replace('-confirmation', '');
                    var paired = $('input[name="' + name + '"]', element.closest('form'));
                    if (paired.val() != element.val()) {
                        throw new SageFormException(this.EXCEPTION_MISSMATCH, element.attr(this.DATA_REGEXP_MESSAGE));
                    }
                    break;
            }
            return true;
        },

        tokenize: function(element, message) {
            var item = element.closest('.form-item');
            message = message.replace('[data-label]', element.attr('data-label') || this.getInputLabelHTML(element));
            return message;
        },

        showSuccess: function(element) {
            this.hideFailure(element);
            this.hideSuccess(element);
            this.addValidationIcon(element);
        },

        hideSuccess: function(element) {
            this.removeValidationIcon(element);
        },

        showFailure: function(element, message) {
            this.hideSuccess(element);
            this.hideFailure(element);
            message = Drupal.theme('errorMessage', message);
            element.is('fieldset') ? this.showFailureFieldset(element, message) :
                this.showFailureFormItem(element, message);
            element.addClass('error');
            this.addValidationIcon(element);
        },

        showFailureFieldset: function(element, message) {
            element.wrap(Drupal.theme('fieldsetErrorWrap')).prepend(message);
        },

        showFailureFormItem: function(element, message) {
            element.closest('div.form-item').wrap(Drupal.theme('formItemErrorWrap')).append(message);
        },

        hideFailure: function(element) {
            element.is('fieldset') ? this.hideFailureFieldset(element) : this.hideFailureFormItem(element);
            element.removeClass('error');
            this.removeValidationIcon(element);
        },

        hideFailureFieldset: function(element) {
            var parent = element.parent(this.errorParentsSelectors.fieldset);
            if (parent.length > 0) {
                element.unwrap();
                element.children('.messages-inline').remove();
            }
        },

        hideFailureFormItem: function(element) {
            var parent = element.closest(this.errorParentsSelectors.form_item);
            if (parent.length > 0) {
                parent.find('.messages-inline').remove();
                element.closest('div.form-item').unwrap();
            }
        },

        addValidationIcon: function(element) {
            element.closest('div.form-item').find('.validation-container').html('<span class="validation-icon"></span>');
        },

        removeValidationIcon: function(element) {
            element.closest('div.form-item').find('.validation-icon').remove();
        }
    }, Sage.Dom);

    // jQuery plugin to prevent double submission of forms
    $.fn.preventDoubleSubmission = function() {
        $(this).once().on('submit', function(e) {
            var target = (typeof e.currentTarget != 'undefined') ? e.currentTarget : e.srcElement;
            var form = $(target);
            // If previously submitted - don't submit again.
            if (form.data('submitted') == 1) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            form.data('submitted', 1);
        });
        return this;
    };

}(jQuery));;
(function($) {

    /**
     * A progressbar object. Initialized with the given id. Must be inserted into
     * the DOM afterwards through progressBar.element.
     *
     * method is the function which will perform the HTTP request to get the
     * progress bar state. Either "GET" or "POST".
     *
     * e.g. pb = new progressBar('myProgressBar');
     *      some_element.appendChild(pb.element);
     */
    Drupal.progressBar = function(id, updateCallback, method, errorCallback) {
        var pb = this;
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;

        // The WAI-ARIA setting aria-live="polite" will announce changes after users
        // have completed their current activity and not interrupt the screen reader.
        this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
        this.element.html('<div class="bar"><div class="filled"></div></div>' +
            '<div class="percentage"></div>' +
            '<div class="message">&nbsp;</div>');
    };

    /**
     * Set the percentage and status message for the progressbar.
     */
    Drupal.progressBar.prototype.setProgress = function(percentage, message) {
        if (percentage >= 0 && percentage <= 100) {
            $('div.filled', this.element).css('width', percentage + '%');
            $('div.percentage', this.element).html(percentage + '%');
        }
        $('div.message', this.element).html(message);
        if (this.updateCallback) {
            this.updateCallback(percentage, message, this);
        }
    };

    /**
     * Start monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.startMonitoring = function(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
    };

    /**
     * Stop monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.stopMonitoring = function() {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
    };

    /**
     * Request progress data from server.
     */
    Drupal.progressBar.prototype.sendPing = function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.uri) {
            var pb = this;
            // When doing a post request, you need non-null data. Otherwise a
            // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
            $.ajax({
                type: this.method,
                url: this.uri,
                data: '',
                dataType: 'json',
                success: function(progress) {
                    // Display errors.
                    if (progress.status == 0) {
                        pb.displayError(progress.data);
                        return;
                    }
                    // Update display.
                    pb.setProgress(progress.percentage, progress.message);
                    // Schedule next timer.
                    pb.timer = setTimeout(function() {
                        pb.sendPing();
                    }, pb.delay);
                },
                error: function(xmlhttp) {
                    pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
                }
            });
        }
    };

    /**
     * Display errors on the page.
     */
    Drupal.progressBar.prototype.displayError = function(string) {
        var error = $('<div class="messages error"></div>').html(string);
        $(this.element).before(error).hide();

        if (this.errorCallback) {
            this.errorCallback(this);
        }
    };

})(jQuery);;
/**
 * Copyright (C) 2012 Chris Wharton (chris@weare2ndfloor.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * THIS SOFTWARE AND DOCUMENTATION IS PROVIDED "AS IS," AND COPYRIGHT
 * HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR
 * FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE
 * OR DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS,
 * COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.COPYRIGHT HOLDERS WILL NOT
 * BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL
 * DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENTATION.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://gnu.org/licenses/>.
 
 Documentation available at http://cookiecuttr.com
 
 */
(function($) {
    $.cookieCuttr = function(options) {
        var defaults = {
            cookieCutter: false, // you'd like to enable the div/section/span etc. hide feature? change this to true
            cookieCutterDeclineOnly: false, // you'd like the CookieCutter to only hide when someone has clicked declined set this to true
            cookieAnalytics: true, // just using a simple analytics package? change this to true
            cookieDeclineButton: false, // this will disable non essential cookies
            cookieAcceptButton: true, // this will disable non essential cookies
            cookieResetButton: false,
            cookieOverlayEnabled: false, // don't want a discreet toolbar? Fine, set this to true
            cookiePolicyLink: '/privacy-policy/', // if applicable, enter the link to your privacy policy here...
            cookieMessage: 'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',
            cookieAnalyticsMessage: 'We use cookies, just to track visits to our website, we store no personal details.',
            cookieErrorMessage: "We\'re sorry, this feature places cookies in your browser and has been disabled. <br>To continue using this functionality, please",
            cookieWhatAreTheyLink: "http://www.allaboutcookies.org/",
            cookieDisable: '',
            cookieExpires: 365,
            cookieAcceptButtonText: "ACCEPT COOKIES",
            cookieDeclineButtonText: "DECLINE COOKIES",
            cookieResetButtonText: "RESET COOKIES FOR THIS WEBSITE",
            cookieWhatAreLinkText: "What are cookies?",
            cookieNotificationLocationBottom: false, // top or bottom - they are your only options, so true for bottom, false for top            
            cookiePolicyPage: false,
            cookiePolicyPageMessage: 'Please read the information below and then choose from the following options',
            cookieDiscreetLink: false,
            cookieDiscreetReset: false,
            cookieDiscreetLinkText: "Cookies?",
            cookieDiscreetPosition: "topleft", //options: topleft, topright, bottomleft, bottomright         
            cookieNoMessage: false, // change to true hide message from all pages apart from your policy page
            cookieDomain: ""
        };
        var options = $.extend(defaults, options);
        var message = defaults.cookieMessage.replace('{{cookiePolicyLink}}', defaults.cookiePolicyLink);
        defaults.cookieMessage = 'We use cookies on this website, you can <a href="' + defaults.cookiePolicyLink + '" title="read about our cookies">read about them here</a>. To use the website as intended please...';
        //convert options
        var cookiePolicyLinkIn = options.cookiePolicyLink;
        var cookieCutter = options.cookieCutter;
        var cookieCutterDeclineOnly = options.cookieCutterDeclineOnly;
        var cookieAnalytics = options.cookieAnalytics;
        var cookieDeclineButton = options.cookieDeclineButton;
        var cookieAcceptButton = options.cookieAcceptButton;
        var cookieResetButton = options.cookieResetButton;
        var cookieOverlayEnabled = options.cookieOverlayEnabled;
        var cookiePolicyLink = options.cookiePolicyLink;
        var cookieMessage = message;
        var cookieAnalyticsMessage = options.cookieAnalyticsMessage;
        var cookieErrorMessage = options.cookieErrorMessage;
        var cookieDisable = options.cookieDisable;
        var cookieWhatAreTheyLink = options.cookieWhatAreTheyLink;
        var cookieExpires = options.cookieExpires;
        var cookieAcceptButtonText = options.cookieAcceptButtonText;
        var cookieDeclineButtonText = options.cookieDeclineButtonText;
        var cookieResetButtonText = options.cookieResetButtonText;
        var cookieWhatAreLinkText = options.cookieWhatAreLinkText;
        var cookieNotificationLocationBottom = options.cookieNotificationLocationBottom;
        var cookiePolicyPage = options.cookiePolicyPage;
        var cookiePolicyPageMessage = options.cookiePolicyPageMessage;
        var cookieDiscreetLink = options.cookieDiscreetLink;
        var cookieDiscreetReset = options.cookieDiscreetReset;
        var cookieDiscreetLinkText = options.cookieDiscreetLinkText;
        var cookieDiscreetPosition = options.cookieDiscreetPosition;
        var cookieNoMessage = options.cookieNoMessage;
        // cookie identifier
        var $cookieAccepted = $.cookie('cc_cookie_accept') == "cc_cookie_accept";
        $.cookieAccepted = function() {
            return $cookieAccepted;
        };
        var $cookieDeclined = $.cookie('cc_cookie_decline') == "cc_cookie_decline";
        $.cookieDeclined = function() {
            return $cookieDeclined;
        };
        // write cookie accept button
        if (cookieAcceptButton) {
            var cookieAccept = ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ';
        } else {
            var cookieAccept = "";
        }
        // write cookie decline button
        if (cookieDeclineButton) {
            var cookieDecline = ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ';
        } else {
            var cookieDecline = "";
        }
        // write extra class for overlay
        if (cookieOverlayEnabled) {
            var cookieOverlay = 'cc-overlay';
        } else {
            var cookieOverlay = "";
        }
        // to prepend or append, that is the question?
        if ((cookieNotificationLocationBottom) || (cookieDiscreetPosition == "bottomright") || (cookieDiscreetPosition == "bottomleft")) {
            var appOrPre = true;
        } else {
            var appOrPre = false;
        }
        if (($cookieAccepted) || ($cookieDeclined)) {
            // write cookie reset button
            if ((cookieResetButton) && (cookieDiscreetReset)) {
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies cc-discreet"><a class="cc-cookie-reset" href="#" title="' + cookieResetButtonText + '">' + cookieResetButtonText + '</a></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies cc-discreet"><a class="cc-cookie-reset" href="#" title="' + cookieResetButtonText + '">' + cookieResetButtonText + '</a></div>');
                }
                //add appropriate CSS depending on position chosen
                if (cookieDiscreetPosition == "topleft") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "topright") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("right", "0");
                }
                if (cookieDiscreetPosition == "bottomleft") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "bottomright") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("right", "0");
                }
            } else if (cookieResetButton) {
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">' + cookieResetButtonText + '</a></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">' + cookieResetButtonText + '</a></div>');
                }
            } else {
                var cookieResetButton = "";
            }
        } else {
            // add message to just after opening body tag
            if ((cookieNoMessage) && (!cookiePolicyPage)) {
                // show no link on any pages APART from the policy page
            } else if ((cookieDiscreetLink) && (!cookiePolicyPage)) { // show discreet link
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies cc-discreet"><a href="' + cookiePolicyLinkIn + '" title="' + cookieDiscreetLinkText + '">' + cookieDiscreetLinkText + '</a></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies cc-discreet"><a href="' + cookiePolicyLinkIn + '" title="' + cookieDiscreetLinkText + '">' + cookieDiscreetLinkText + '</a></div>');
                }
                //add appropriate CSS depending on position chosen
                if (cookieDiscreetPosition == "topleft") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "topright") {
                    $('div.cc-cookies').css("top", "0");
                    $('div.cc-cookies').css("right", "0");
                }
                if (cookieDiscreetPosition == "bottomleft") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("left", "0");
                }
                if (cookieDiscreetPosition == "bottomright") {
                    $('div.cc-cookies').css("bottom", "0");
                    $('div.cc-cookies').css("right", "0");
                }
            } else if (cookieAnalytics) { // show analytics overlay
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '">' + cookieAnalyticsMessage + cookieAccept + cookieDecline + '<a href="' + cookieWhatAreTheyLink + '" title="Visit All about cookies (External link)">' + cookieWhatAreLinkText + '</a></div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '">' + cookieAnalyticsMessage + cookieAccept + cookieDecline + '<a href="' + cookieWhatAreTheyLink + '" title="Visit All about cookies (External link)">' + cookieWhatAreLinkText + '</a></div>');
                }
            }
            if (cookiePolicyPage) { // show policy page overlay
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '">' + cookiePolicyPageMessage + " " + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ' + '</div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '">' + cookiePolicyPageMessage + " " + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + ' <a href="#decline" class="cc-cookie-decline">' + cookieDeclineButtonText + '</a> ' + '</div>');
                }
            } else if ((!cookieAnalytics) && (!cookieDiscreetLink)) { // show privacy policy option
                if (appOrPre) {
                    $('body').append('<div class="cc-cookies ' + cookieOverlay + '">' + cookieMessage + cookieAccept + cookieDecline + '</div>');
                } else {
                    $('body').prepend('<div class="cc-cookies ' + cookieOverlay + '">' + cookieMessage + cookieAccept + cookieDecline + '</div>');
                }
            }
        }
        if ((cookieCutter) && (!cookieCutterDeclineOnly) && (($cookieDeclined) || (!$cookieAccepted))) {
            $(cookieDisable).html('<div class="cc-cookies-error">' + cookieErrorMessage + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + '</div>');
        }
        if ((cookieCutter) && (cookieCutterDeclineOnly) && ($cookieDeclined)) {
            $(cookieDisable).html('<div class="cc-cookies-error">' + cookieErrorMessage + ' <a href="#accept" class="cc-cookie-accept">' + cookieAcceptButtonText + '</a> ' + '</div>');
        }
        // if bottom is true, switch div to bottom if not in discreet mode
        if ((cookieNotificationLocationBottom) && (!cookieDiscreetLink)) {
            $('div.cc-cookies').css("top", "auto");
            $('div.cc-cookies').css("bottom", "0");
        }
        if ((cookieNotificationLocationBottom) && (cookieDiscreetLink) && (cookiePolicyPage)) {
            $('div.cc-cookies').css("top", "auto");
            $('div.cc-cookies').css("bottom", "0");
        }
        // setting the cookies

        // for top bar
        $('.cc-cookie-accept, .cc-cookie-decline').click(function(e) {
            e.preventDefault();
            if ($(this).is('[href$=#decline]')) {
                $.cookie("cc_cookie_accept", null, {
                    path: '/'
                });
                $.cookie("cc_cookie_decline", "cc_cookie_decline", {
                    expires: cookieExpires,
                    path: '/'
                });
                if (options.cookieDomain) {
                    // kill google analytics cookies
                    $.cookie("__utma", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmb", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmc", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                    $.cookie("__utmz", null, {
                        domain: '.' + options.cookieDomain,
                        path: '/'
                    });
                }
            } else {
                $.cookie("cc_cookie_decline", null, {
                    path: '/'
                });
                $.cookie("cc_cookie_accept", "cc_cookie_accept", {
                    expires: cookieExpires,
                    path: '/'
                });
            }
            $(".cc-cookies").fadeOut(function() {
                // reload page to activate cookies
                location.reload();
            });
        });
        //reset cookies
        $('a.cc-cookie-reset').click(function(f) {
            f.preventDefault();
            $.cookie("cc_cookie_accept", null, {
                path: '/'
            });
            $.cookie("cc_cookie_decline", null, {
                path: '/'
            });
            $(".cc-cookies").fadeOut(function() {
                // reload page to activate cookies
                location.reload();
            });
        });
        //cookie error accept
        $('.cc-cookies-error a.cc-cookie-accept').click(function(g) {
            g.preventDefault();
            $.cookie("cc_cookie_accept", "cc_cookie_accept", {
                expires: cookieExpires,
                path: '/'
            });
            $.cookie("cc_cookie_decline", null, {
                path: '/'
            });
            // reload page to activate cookies
            location.reload();
        });
    };
})(jQuery);;
/**
 * @file
 *  Location behaviour related with users.
 */
Sage.User.Location = Sage.User.Location || {};

(function($) {

    $(document).ready(function() {
        Sage.User.Location.initialize();
    });

    // Location object.
    Sage.User.Location = $.extend({}, {

        FORM: 'change-location',

        LOCATION_DISMISSED: 'location-dismissed',

        canonicalUrl: null,

        initialize: function() {
            this.redirectIfNecessary();
            this.setCanonicalUrl();
            this.showFormOnFirstVisit();
            this.bindEvents();
        },

        getRegionCookieName: function() {
            return (typeof Drupal.settings.Sage.Location.regionCookie != 'undefined') ? Drupal.settings.Sage.Location.regionCookie : 'region';
        },

        getCountryCookieName: function() {
            return (typeof Drupal.settings.Sage.Location.countryCookie != 'undefined') ? Drupal.settings.Sage.Location.countryCookie : 'country';
        },

        getRegionCookie: function() {
            return jQuery.cookie(this.getRegionCookieName());
        },

        getCountryCookie: function() {
            return jQuery.cookie(this.getCountryCookieName());
        },

        setRegionCookie: function(region) {
            jQuery.cookie(this.getRegionCookieName(), region, {
                path: '/',
                domain: Sage.path.getUrlBaseHostname(),
                secure: true
            });
        },

        setCountryCookie: function(country) {
            jQuery.cookie(this.getCountryCookieName(), country, {
                path: '/',
                domain: Sage.path.getUrlBaseHostname(),
                secure: true
            });
        },

        getRegionFromPath: function() {
            return (typeof Drupal.settings.Sage.Location.region != 'undefined') ? Drupal.settings.Sage.Location.region : null;
        },

        showFormOnFirstVisit: function() {
            if (this.getRegionCookie() == null && !Sage.path.getParameter('noPopup') && (sessionStorage.getItem(this.LOCATION_DISMISSED) == null)) {
                this.showChangeLocation();
            }
        },

        redirectIfNecessary: function() {
            if (this.getRegionCookie() && this.getRegionCookie() != this.getCurrentPageRegion()) {
                var alternative = this.getAlternativeRegionUrl(this.getRegionCookie());
                if (alternative) {
                    window.location = alternative + Sage.path.getUrlFragment();
                }
            }
        },

        bindEvents: function() {
            this.bindChangeLocation()
        },

        bindChangeLocation: function() {
            $('#change-location-link').once().on('click', function(e) {
                Sage.User.Location.showChangeLocation($(this));
                e.preventDefault();
            });
        },

        updateChangeLocationAction: function() {
            var modelChangeLocationFormId = '#modal-change-location form';
            var changeLocationAction = $(modelChangeLocationFormId).attr('action');
            var url_parse = unescape(changeLocationAction).replace('%', this.getContentId());
            $(modelChangeLocationFormId).attr('action', url_parse);
        },

        getContentId: function() {
            return (typeof Drupal.settings.Sage.Content.contentId != 'undefined') ? Drupal.settings.Sage.Content.contentId : 0;
        },

        getCurrentPageRegion: function() {
            return (typeof Drupal.settings.Sage.Location.regionPath != 'undefined') ? Drupal.settings.Sage.Location.regionPath : '';
        },

        getAlternativeRegionUrl: function(region) {
            return (typeof Drupal.settings.Sage.Location.Alternatives[region] != 'undefined') ? Drupal.settings.Sage.Location.Alternatives[region] : '';
        },

        getChangeLocationUrl: function(element) {
            return (typeof Drupal.settings.Sage.Location.changeLocationUrl != 'undefined') ? Drupal.settings.Sage.Location.changeLocationUrl : '';
        },

        showChangeLocation: function() {
            var path = this.getChangeLocationUrl();
            this.loadForm(path, this.FORM, this.processModal, Drupal.t('Select your location'));
        },

        processModal: function() {
            this.attachCurrentPath();
            this.attachFragment();
            this.bindFormCancelEvent();
            this.updateChangeLocationAction();
        },

        attachCurrentPath: function() {
            $('[name="current_path"]', $('#modal-change-location')).val(this.canonicalUrl);
        },

        attachFragment: function() {
            $.cookie('STYXKEY-fragment', Sage.Content.Anchor.getUrlFragment(), {
                'path': '/',
                'domain': Sage.path.getUrlBaseHostname()
            });
            $('[name="fragment"]', $('#modal-change-location')).val(Sage.Content.Anchor.getUrlFragment());
        },

        setCanonicalUrl: function() {
            this.canonicalUrl = (typeof Drupal.settings.Sage.Location.canonicalUrl != 'undefined') ? Drupal.settings.Sage.Location.canonicalUrl : window.location.pathname;
        },

        bindFormCancelEvent: function() {
            var modal = $('#modal-change-location');
            $('[data-dismiss="modal"]', modal).on('click', function(e) {
                modal.hide();
                $('.modal-backdrop').hide();
                $(document.body).removeClass('modal-open');
                sessionStorage.setItem(Sage.User.Location.LOCATION_DISMISSED, "1");
            });
        }
    }, Sage.AjaxModal);

})(jQuery);;