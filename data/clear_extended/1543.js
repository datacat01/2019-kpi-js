(function($) {

    'use strict';

    var themePath = '/wp-content/themes/tucowsdomains/';


    ///////////////////////////////////////////
    ///	Whois / Provider captchas

    // Bind listener for the whois and provider forms
    if ($('#form-whois').length || $('#form-provider').length) {
        $("#form-whois, #form-provider").submit(function(event) {
            reCaptchaMe(event);
        });
    }



    /**
     * @function displayReCatpcha
     * @description Resets all the form inputs to their original view.
     * @param {string} variableName description of variable
     **/
    // code to show captcha and disable page
    function displayReCatpcha(form) {
        var myForm = $("#" + form + "-recaptcha-form"),
            myCaptcha = $("#" + form + "-recaptcha"),
            overlay = $('<div id="overlay"></div>'),
            body = $(document.body);

        //overlay.css({ 'left': 0, 'top': 0, 'height': body.outerHeight(), 'width': body.outerWidth() });
        overlay.insertAfter(document.body);
        overlay.fadeTo(0, 0.5);
        myForm.show();
        $("#recaptcha_response_field").focus();
        $("#" + form + "-cancel").bind("click", cancelReCaptcha);
    }

    /**
     *
     * @function cancelReCaptcha
     * @description Resets all the form inputs to their original view.
     * @param {string} variableName description of variable
     **/
    // Remove captcha if user cancels
    function cancelReCaptcha(e) {
        e.preventDefault(); // stop the click
        $('#overlay').remove();
        $(e.target).parents(".popup-captcha").hide();

        // Remove recaptcha container to avoid "placeholder element must be empty" error.
        $('#' + e.currentTarget.name + '-recaptcha').remove();
    }

    /**
     * @function reCaptchaMe
     * @description Resets all the form inputs to their original view.
     * @param {string} variableName description of variable
     **/
    // force a re-captcha check on a form before submission
    function reCaptchaMe(e) {

        // stop the original form from submitting
        e.preventDefault();

        var myForm = e.target,
            formType = myForm.name,
            domain = jQuery("#input-" + formType).val(),
            myCaptcha;

        // Remove the "www" form the domain string
        domain = domain.replace("www.", "");
        domain = domain.replace("https://", "");
        domain = domain.replace("http://", "");



        // Create recaptcha container on the fly so it can be removed completely
        // if cancelled to avoid "placeholder element must be empty" error.
        $('<div id="' + formType + '-recaptcha"></div>').insertAfter('#captcha-' + formType);

        // Validate that the domain contains one or two periods, doesn’t end in a period and isn't empty
        if (domain === "" || domain.indexOf('.') === -1 || domain.slice(-1) === '.') {

            // Display error message
            $("#" + myForm.id + " .error_msg").css({
                'display': 'block'
            });
            return;

        } else {

            // Remove error message
            $("#" + myForm.id + " .error_msg").css({
                'display': 'none'
            });

            // Set the whois to the new form
            $("#captcha-" + formType)[0].value = domain;

            // Init captcha
            myCaptcha = grecaptcha.render(formType + '-recaptcha', {
                'sitekey': '6LcX6-oSAAAAAFYx9UH6piKsSFSa9UmmA8PlCGrM',
                'callback': function() {
                    displayReCatpcha(formType);
                },
                'theme': 'light'
            });

            // Show the captcha on page
            displayReCatpcha(formType);
        }

    }




    ///////////////////////////////////////////
    /// Domain Promise Language select


    if ($("#chooseLang").length) {
        $("#chooseLang").change(function(event) {
            showLang($(this).val());
        });
    }

    function showLang(id) {

        $(".promise").each(function(e, el) {
            if (id == this.id) {
                $(el).show();
            } else {
                $(el).hide();
            }
        });
    }






    ///////////////////////////////////////////
    ///	Report Abuse / Compliance Forms

    // Form Submissions

    // Bind listener for all forms of type "abuse"
    if ($("#abuse-form").length || $("#compliance-form").length) {
        $("#abuse-form, #compliance-form").submit(function(event) {

            var result = validateForm(this);

            clearErrors();

            if (jQuery.isEmptyObject(result)) {

                console.log("Form is valid");
                if (event.currentTarget.id === 'compliance-form') {
                    event.preventDefault();
                    handleSubmit(this);
                } else {
                    console.log("Abuse Form!");
                }

            } else {

                console.log("Form is invalid");
                event.preventDefault();
                displayErrors(result);

            }

        });
    }

    /**
     * @function validateForm
     * @description Validates form fields
     * @param {string} form: the form html element to be submitted
     * @return {Object} errors: an object with all the individual errors and their error messages to display on screen
     **/
    function validateForm(form) {

        var errors = {},
            isEmail = function(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            };



        function ValidURL(str) {


            var regex = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{2,}$/;


            if (!regex.test(str)) {
                return false;
            } else {
                return true;
            }

        }




        // Validate fields that are commmon to both forms

        if (form.fullname.value === '') {
            errors.fullname = 'Full name is required';
            $("#fullname").next().text("Full name is required");
        }

        if (!isEmail(form.email.value)) {
            errors.email = 'Invalid email';
            $("#email").next().text("Invalid email");
        }

        /*if(form.domain.value === '') {
        	errors.domain  = 'Invalid domain name';
        	$("#domain").next().text( "Invalid domain name" );
        }*/

        if (form.complaint.value == 'select') {
            errors.complaint = 'Select an issue';
            $("#complaint").next().text("Select an issue");
        }

        if (form.summary.value === '') {
            errors.summary = 'Required field';
            $("#summary").next().text("Required field");
        }

        if (!ValidURL(form.domain.value)) {
            errors.domain = 'Invalid domain name';
            $("#domain").next().text("Invalid domain name");
        }


        return errors;

        // TODO: create Validator Class

    }

    /**
     *
     * @function handleSubmit
     * @description Submits form via AJAX after validating
     * @param {string} form: the form html element to be submitted
     **/
    function handleSubmit(form) {

        console.log("Handling submit!");

        // Set AJAX options and callbacks
        var options = {
                url: themePath + $(form).attr('action'),
                type: $(form).attr('method'),
                data: $(form).serialize(),
                dataType: 'json', // what type of data do we expect back from the server
                encode: true
            },

            /**
             *
             * @function doneCallback
             * @description Called if the AJAX submission was successful. Handles what is returned from the server
             * @param {string} response: the form html element to be submitted
             **/
            doneCallback = function(response) {

                console.log(response);

                if (!response.success) {

                    console.log("Email was not sent");

                    // Call some function, pass the response with the errors. Make it display the errors on screen.
                    displayErrors(response);

                } else {

                    console.log("Email was sent");

                    // Remove form
                    $("#compliance-form").remove();

                    $(".entry").append('<div class="thanks-wrapper"><h3>Thank you.</h3><p>We will do our best to respond to your request within 3-5 business days.</p></div>');

                }
            },

            /**
             *
             * @function failCallback
             * @description Called if the AJAX submission fails.
             * @param {string} err: the error object
             **/
            failCallback = function(xhr, error) {
                console.log(xhr);
                console.log(error);
            };

        // Execute AJAX call
        $.ajax(options).then(doneCallback, failCallback);

    }


    /**
     *
     * @function clearErrors
     * @description: removes errors from previous validation before re-submiting the form
     **/

    function clearErrors() {

        // Remove every error message
        $(".error_msg_forms").css('display', 'none');

        // Remove all the input highlights and select input
        $(".input-item, #complaint").removeClass("errorInput");

    }


    /**
     *
     * @function displayErrors
     * @description displays errors on page based on what is returned from the server
     * @param {string} errors: the error object returned from server
     **/

    function displayErrors(errors) {

        var error;

        // Display top error header
        $(".error_header").css('display', 'block');

        // Loop through error object and display error messages using the object key as a selector
        // * Make sure the error object key in the PHP matches the input element's ID!
        for (error in errors) {
            $("#" + error).addClass("errorInput");
            $("#" + error).next().css("display", "inline");
        }


    }



    // Dynamic Form Inputs

    if ($("#complaint").length) {
        $("#complaint").change(function(event) {
            handleComplaintChange($(this).val());
        });
    }

    if ($("#domainOwner").length) {
        $("#domainOwner").change(function(event) {
            handleDomainChange($(this).is(':checked'));
        });
    }



    // Initialize form options dynamically on page load
    (function() {

        var complaintGET,
            query,
            complaintInput = $("#complaint").val();

        if ($("#domainOwner").is(':checked')) {
            $('#description').css('display', 'flex');
        }

        switch (complaintInput) {

            case 'phishing':
                $("#phishing-wrapper").css('display', 'block');
                break;

            case 'hijacking':
                $("#hijacking-wrapper").css('display', 'block');
                break;


            case 'copyright':
                $("#copyright-wrapper").css('display', 'block');
                break;

        }

        // Check if a variable us being passed via GET
        if (document.location.toString().indexOf('?') !== -1) {

            // Get the variable passed
            query = document.location
                .toString()
                // get the query string
                .replace(/^.*?\?/, '')
                // and remove any existing hash string
                .replace(/#.*$/, '');
            //.split('&');   // There will only be one variable passed

            // Split into an array
            complaintGET = decodeURIComponent(query).split('=');

            // Select the option in the select box
            $("#complaint [value='" + complaintGET[1] + "']").attr("selected", "selected");


            // Call the select box handler to set the right form
            handleComplaintChange(complaintGET[1]);

        }

    })();



    /**
     * @function handleComplaintChange
     * @description Handles a change to the "nature of compliant" select box
     * @param {string} value: The value of the select box when the event is fired
     **/
    function handleComplaintChange(value) {

        // Reset hidden forms input
        resetForm();

        // Show the appropriate optional form inputs based on the select box value
        switch (value) {
            case "phishing": // Display optional form inputs for phishing complaints
                $("#phishing-wrapper").css('display', 'block');
                break;

            case 'hijacking':
                $("#hijacking-wrapper").css('display', 'block');
                break;

            case "copyright": // Display optional form inputs for copyright complaints
                $("#copyright-wrapper").css('display', 'block');
                break;

            case "whois": // Hide all form fields except the select box
                $('.input-wrapper:not(#selectField)').css('display', 'none');

                // Hide required field disclaimer
                $('.disclaimer').css('display', 'none');

                // Add the ICANN message on screen
                $('#abuse-form').append('<h3 id="whois-msg">To file a complaint about inaccurate Whois Data, please fill out this ICANN <a href="https://forms.icann.org/en/resources/compliance/complaints/whois/inaccuracy-form" target="_blank">form</a>.</h3>');
                break;
        }

    }

    /**
     * @function handleDomainChange
     * @description Handles a change to the domain owner checkbox and hides/displays the description textarea accordingly
     * @param {boolean} status: The current status of the checkbox
     **/
    function handleDomainChange(status) {
        if (status) {
            $('#description').css('display', 'flex');
        } else {
            $('#description').css('display', 'none');
        }
    }


    /**
     * @function resetForm
     * @description Resets all the form inputs to their original view.
     **/
    function resetForm() {

        // Display all form fields
        $('.input-wrapper:not(#selectField, #description)').css('display', 'flex');

        handleDomainChange($('#domain').is(':checked'));

        // Hide optional form fields
        $(".optional").css('display', 'none');

        // Remove the ICANN message if present
        if ($("#whois-msg")) {
            $("#whois-msg").remove();
        }

        // Show required field disclaimer
        $('.disclaimer').css('display', 'block');


    }

})(jQuery);