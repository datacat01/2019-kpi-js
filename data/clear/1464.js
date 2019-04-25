// jQuery(document).ready
var checkRecaptcha;
(function($) {

    var intervalID, calloutID, lyticsFields = {};

    $(document).on('focusin', '.subscribe-wrapper, .subscribe-box', function() {

        // Duplicated height adjustment to set initial height which allows for smooth transition
        clearInterval(intervalID);
        clearInterval(calloutID);

        adjustHeight($(this));
        $(this).find('.hidden-options').addClass('show');
        adjustHeight($(this));
    });

    $(window).load(function() {

        $('.g-recaptcha').each(function(i) {
            if ($(this).attr("id") === undefined) {
                $(this).attr("id", 'g-recaptcha-' + i);
                //THIS CALL TO .RENDER CAUSED A CONFLICT WHERE RECAPTCHA WAS LOADED TWICE
                //It is unclear why it was explicitly called in the first place since recaptcha seems to
                //render just fine without it.

                //grecaptcha.render( 'g-recaptcha-' + i, {
                //'sitekey' : $('.g-recaptcha').data('sitekey')
                //});
                $('.rc-placeholder').hide();
            }
        });

        var $optout_page_buttons = $('.unsubscribe .button');
        $optout_page_buttons.click(function() {
            $optout_page_buttons.hide();
        });

        //make sure user has update=true query string on newsletter preferences page
        var currentURL = window.location.href;
        if (currentURL.indexOf('newsletter-preferences') !== -1 && currentURL.indexOf('update=true') == -1) {
            history.pushState(null, '', '?update=true');
        }

    });


    /*
        $('.subscribe-wrapper, .subscribe-box').focusout( function(){

    	    var subForm = $(this);
    	    
    	    calloutID = setInterval( function(){
    			subForm.find('.callout').fadeOut();
    		}, 4500);
    	    
    		intervalID = setInterval( function(){
    		    subForm.find('.hidden-options').removeClass('show');
    		    adjustHeight( subForm );
    		}, 6000);
        });
    */

    function adjustHeight(wrapper) {

        subscribeform = wrapper.children("form");

        var height = subscribeform.outerHeight() + 20;

        subscribeform.siblings(":visible").each(function() {
            height = height + $(this).outerHeight();
        });
        wrapper.height(height);
    }

    function resetHeight(wrapper) {

        wrapper.find('.hidden-options').removeClass('show');
        adjustHeight(wrapper);

    }

    $(document)
        .on("invalid.zf.abide", ".newsletterwidget .email, .preferenceswidget .email, .sub-form .email", function(ev, el) {
            showFormMessage(el.parents('form'), '.noemail');
        })
        .on("valid.zf.abide", ".newsletterwidget .email, .preferenceswidget .email, .sub-form .email", function(ev, el) {
            $(el).parent().find(".noemail").fadeOut();
            setInterval(function() {
                adjustHeight($(el).parents('.subscribe-wrapper, .subscribe-box'))
            }, 750);
        }).on('formvalid.zf.abide', function(ev, frm) {
            var subscribeForm = frm;

            lytics.gatherData(subscribeForm);

            $.post(aw.ajaxurl, subscribeForm.serialize(), function(data) {
                if (data.message == 'thanks' && subscribeForm.hasClass('sub-form')) {
                    removeFormMessage('all');
                    showThanks(subscribeForm);
                    lytics.sendData();
                } else if (data.message == 'nochange' && subscribeForm.hasClass('sub-form')) {
                    showNoChange(subscribeform, data.user)
                } else if (data.message == 'thanks') {
                    showFormMessage(subscribeForm, '.' + data.message);
                    lytics.sendData();
                } else {
                    showFormMessage(subscribeForm, '.' + data.message);
                }


                if (typeof grecaptcha !== 'undefined') {
                    grecaptcha.reset();
                }

            }, "json");

        }).on('forminvalid.zf.abide', function(ev, el) {
            alert('Please fill out all required fields');
        });

    $('form.newsletterwidget, form.preferenceswidget, form.sub-form').on('submit', function(e) {
        e.preventDefault();
    });


    $(".newsletterwidget, .sub-form").find('[name="name"], [name="first_name"], [name="last_name"], [name="company"], [name="title"]', [name = "BusinessType"], [name = "Job-Level-Seniority"], [name = "Job-Function"])
        .focusout(function() {
            var elem = $(this);
            elem.parents('form').foundation('validateInput', elem);
        })
        .on("invalid.zf.abide", function(ev, el) {
            $(el).parents('.subscribe-wrapper, .subscribe-box').find(".emptyfield").fadeIn().removeClass('hide');
            adjustHeight($(el).parents('.subscribe-wrapper, .subscribe-box'));
        })
        .on("valid.zf.abide", function(ev, el) {
            $(el).parents('.subscribe-wrapper, .subscribe-box').find(".emptyfield").fadeOut();
            setInterval(function() {
                adjustHeight($(el).parents('.subscribe-wrapper, .subscribe-box'))
            }, 750);
        });


    function showFormMessage(subscribeform, message) {
        $(subscribeform).parents('.subscribe-wrapper, .entry-content').find(message).fadeIn().removeClass('hide');
        // 		adjustHeight( $( subscribeform ).parents('.subscribe-wrapper, .subscribe-box' ) );	
    }

    function removeFormMessage(message) {

        if ('all' == message) {
            $('.subscribe-wrapper').find(".callout").fadeOut();
            setInterval(function() {
                adjustHeight($('.subscribe-wrapper, .subscribe-box'))
            }, 750);
        }

    }

    function showThanks(subscribeForm) {

        var wrapper = subscribeForm.parents('.subscribe-box');

        wrapper.find('.hidden-options').removeClass('show');
        wrapper.find('.subscribe-title, .subscribe-subtitle, .sub-form').addClass('hide');
        wrapper.find('.message.thanks').addClass('show');
        adjustHeight(wrapper);

    }

    function showNoChange(subscribeForm, userId) {

        var wrapper = subscribeForm.parents('.subscribe-box');

        wrapper.find('.hidden-options').removeClass('show');
        wrapper.find('.subscribe-title, .subscribe-subtitle, .sub-form').addClass('hide');
        wrapper.find('.message.nochange .pref-link').attr('href', '/newsletter-preferences?adwk=' + userId + '&update=true')
        wrapper.find('.message.nochange').addClass('show');
        adjustHeight(wrapper);

    }

    //VC Subscribe Container Module - send 'No' in hidden field if checkbox left unchecked
    var aw_nl_subscribe_button = document.getElementById("aw-nl-subscribe-button");
    if (aw_nl_subscribe_button) {
        aw_nl_subscribe_button.onclick = function() {
            if (document.getElementById("nl-checkbox-aw-promo-yes").checked) {
                document.getElementById("nl-checkbox-aw-promo-no").disabled = true;
            }
            if (document.getElementById("nl-checkbox-aw-promo3P-yes").checked) {
                document.getElementById("nl-checkbox-aw-promo3P-no").disabled = true;
            }
        };
    }

})(jQuery);