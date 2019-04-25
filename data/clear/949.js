/*
 * Nostromo Frontend JS
 * http://www.cryoutcreations.eu/
 *
 * Copyright 2016-18, Cryout Creations
 */

/* Catch anchors in URLs and open the appropriate tab */
function ScrollToAnchor() {
    var hash = document.location.hash.replace('#', '');
    if (hash.length > 0) {
        jQuery('.section-tabs h3#' + hash).click();
        jQuery('html,body').animate({
            scrollTop: jQuery(window).scrollTop() - 100
        }, 500);
    };
}

jQuery(window).on('load', function() {
    /* Catch anchors in URLs and open the appropriate tab */
    ScrollToAnchor();
});

jQuery(document).ready(function() {

    /* Smooth-scroll in-page links */
    jQuery('body').on('click', 'a.smooth-scroll', function(event) {
        event.preventDefault();
        identifier = jQuery(this).attr('href');
        jQuery('html,body').animate({
            scrollTop: jQuery(identifier).offset().top - 100
        }, 500);
        return false;
    });

    /* Subscribe form */
    jQuery('#cryout-subscribe input.subscribe_submit, .widget_subscribe input.subscribe_submit').on('click', function(event) {
        event.preventDefault();
        var data = jQuery('#cryout-subscribe input, .widget_subscribe input').serialize();
        jQuery('#cryout-pp-subscribe div.formerror, .widget_subscribe div.formerror').remove();
        jQuery.post(cryout_ajax.ajax_url, data, function(response) {
            if (response == 'OK') {
                jQuery('#cryout-pp-subscribe div.formclass, .widget_subscribe div.formclass').html('<p class="color-gray">Thank you for subscribing</p>');
                return false;
            } else {
                jQuery('#cryout-pp-subscribe div.formclass, .widget_subscribe div.formclass').before(response);
                return false;
            }
        });
    });

    /* Mailerlite labels to placeholders */
    /* jQuery('.mailerlite-form-inputs label').each( function() {
    	var label = jQuery(this).html();
    	jQuery(this).parent().find('input').attr('placeholder',label);
    	jQuery(this).remove();
    }); */

    /* Billing fields expander */
    jQuery('body').on('click', '#edd-invoice-info-toggler .button', function(event) {
        event.preventDefault();
        jQuery('#edd_checkout_user_info #edd-company-wrap, #edd_checkout_user_info #edd-vat-wrap').slideDown();
        jQuery('#edd_checkout_user_info #edd-card-address-wrap, #edd_checkout_user_info #edd-card-address-2-wrap, #edd_checkout_user_info #edd-card-city-wrap').slideDown();
        jQuery('#edd_checkout_user_info #edd-card-zip-wrap, #edd_checkout_user_info #edd-card-state-wrap').slideDown();
        jQuery(this).slideUp();
        return false;
    });

    /* Tabs */
    jQuery('.section-tabs h3').on('click', function() {
        if (jQuery(this).next('div.tab').hasClass('tab-closed')) {
            jQuery(this).parent().children('div.tab').slideUp('fast');
            jQuery(this).parent().children('div.tab').addClass('tab-closed');
            jQuery(this).next('div.tab').slideDown();
            jQuery(this).next('div.tab').removeClass('tab-closed');
        } else {
            jQuery(this).next('div.tab').slideUp();
            jQuery(this).next('div.tab').addClass('tab-closed');
        }
    });

    /* Tooltips */
    jQuery('body').on('hover', '.field-hint', function(e) {
        jQuery('.field-hint').tooltip({
            position: {
                my: "left+15 center",
                at: "right center"
            }
        });
    });

    /* Terms & Conditions */
    jQuery('body').on('click', '#cryout-terms-and-conditions-link', function(e) {
        e.preventDefault();
        jQuery('#cryout-terms-and-conditions').slideToggle();
        return false;
    });

    /* Back to top button animation */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('#toTop').css({
                'bottom': '-2px',
                'opacity': 1
            });
        } else {
            jQuery('#toTop').css({
                'bottom': '-100px',
                'opacity': 0
            });
        }

    });
    jQuery(window).trigger('scroll');

    jQuery('#toTop').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    /* Link scroll to section */
    jQuery('a[class*="crybutton"][href*="#"]:not([href="#"])').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                jQuery('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                //return false;
            }
        }
    });


    /* See if element is visible in browser window */
    jQuery.fn.visible = function(partial) {
        var $t = jQuery(this),
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            diff = 150,
            viewBottom = viewTop + $w.height(),
            _top = ($t.offset() ? $t.offset().top + diff : 0),
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    }; // jQuery.fn.visible()

    /* Animate on scroll */
    function animateScroll($articles) {
        var $articles = jQuery($articles);

        $articles.each(function(i, el) {
            var el = jQuery(el);
            if (!el.visible(true)) {
                el.addClass("animated-on-scroll");
            }
        });

        jQuery(window).on({
            'scroll': function(e) {
                $articles.each(function(i, el) {
                    var el = jQuery(el);
                    if (el.visible(true)) {
                        el.removeClass("animated-on-scroll");
                    }
                });
            }
        });

    } // animateScroll()
    animateScroll(".cryout-pp-latest, #cryout-pp-numbers .cryout-element, #cryout-pp-themes-showcase img, .cryout-theme-section-image, .cryout-table-row");

    // Pause LP hero animation if not in view
    jQuery(window).on({
        'scroll': function(e) {
            var el = jQuery('.home #cryout-pp-header ');
            if (!el.visible(true)) {
                el.addClass("cryout-pause-animation");
            } else {
                el.removeClass("cryout-pause-animation");
            }
        }
    });

    /* View changelog button */
    jQuery('.view-changelog').click(function() {
        jQuery(this).parent().parent().find('.news-content').slideToggle('slow');
        jQuery(this).hide();
    });

    /* Animate text in Theme Plus widget */
    (function() {
        if (document.getElementById("themeplus-name") === null) return;
        var i = 0;
        var themes = ['Fluida', 'Kahuna', 'Anima', 'Septera'];
        var pp = ['Responsive & Fluid', 'Amazing & Stunning', 'Creative & Professional', 'Highly Customizable'];
        var count = 1;

        function writeText(txt) {
            if (i < txt.length) {
                document.getElementById("themeplus-name").innerHTML += txt.charAt(i);
                i++;
                setTimeout(writeText.bind(null, txt), 100);
            } else {
                i = 0;
                setTimeout(deleteText, 2500);
            }
        }

        function deleteText() {
            var txt = document.getElementById("themeplus-name").innerHTML;
            if (i < txt.length) {
                document.getElementById("themeplus-name").innerHTML = txt.slice(0, -1);
                setTimeout(deleteText, 70);
            } else {
                if (count > themes.length - 1) count = 0;
                writeText(themes[count++]);
            }
        }

        writeText(themes[0]);
    })();

    /* Animate text on Landing Page */
    (function() {
        if (document.getElementById("pp-adjectives-inside") === null) return;
        var i = 0;
        var themes = ['Responsive & Fluid', 'Free & Premium', 'Professional & Creative', 'Highly Customizable'];
        var count = 1;

        function writeText(txt) {
            if (i < txt.length) {
                document.getElementById("pp-adjectives-inside").textContent += txt.charAt(i);
                i++;
                setTimeout(writeText.bind(null, txt), 50);
            } else {
                i = 0;
                setTimeout(deleteText, 2500);
            }
        }

        function deleteText() {
            var txt = document.getElementById("pp-adjectives-inside").textContent;
            if (i < txt.length) {
                document.getElementById("pp-adjectives-inside").textContent = txt.slice(0, -1);
                setTimeout(deleteText, 30);
            } else {
                if (count > themes.length - 1) count = 0;
                writeText(themes[count++]);
            }
        }
        setTimeout(deleteText, 2500);
        //setTimeout(writeText(themes[0],5000);
    })();

    /* Register page - switch to sign in link */
    jQuery('.switch-login').on('click', function() {
        jQuery('.login-div').toggleClass('login-visible');
    })

    /* Register page - swap form on login error */
    if (jQuery('.section-register-login .edd-cryout-error-login').length) {
        /* move errors to login form */
        jQuery('.section-register-login .edd-cryout-error-login').insertAfter('.section-register-login .login-div.login-left header');
        /* swap forms */
        jQuery('.login-div').toggleClass('login-visible');
    }

    /* View all features button */
    jQuery('#cryout-theme-features a.section-trigger').click(function() {
        jQuery(this).hide();
        var sectionbox = jQuery(this).parent().find('.cryout-theme-features-columns');
        jQuery(sectionbox).animate({
                height: jQuery(sectionbox).get(0).scrollHeight
            },
            1000,
            function() {
                jQuery(sectionbox).height('auto');
                jQuery(sectionbox).addClass('section-complete');
            }
        );
    });

    /* Account Block Sections */
    jQuery('div.account-page ul.cryout_loginout .menu-item-account a').on('click', function(e) {
        url = jQuery(this).attr('href');
        id = url.substr(url.indexOf('#'));
        /*console.log(id);*/
        if (id.length > 0 && jQuery('div.account-page div' + id).length > 0) {
            jQuery('div.account-page div.cryout-account-section').hide(0);
            jQuery('div.account-page div' + id).show(0);
            e.preventDefault();
        }
    });

    /* Social Icons titles */
    /*jQuery(".socials a").each(function() {
    	jQuery(this).attr('title', jQuery(this).children().html());
    	jQuery(this).html('');
    });*/

    /* Cryout Cookie Notification */
    jQuery('#cryout-cookies-notification').fadeIn(500);
    jQuery('#cryout-cookies-notification .close-button').click(function() {
        jQuery('#cryout-cookies-notification').fadeOut(700);
        jQuery.post(cryout_ajax.ajax_url, {
            'action': 'cryout_cookies_notice_ajax'
        });
    });

    /* Detect and apply custom class for Safari */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        jQuery('body').addClass('safari');
    }

    /* Require theme selection on priority support purchase button */
    jQuery('#edd_purchase_37895 a.edd-add-to-cart').click(function(e) {
        jQuery(this).closest('form').find('span.select-theme-alert').remove();
        var var_id = jQuery(this).closest('form').find('select').val();
        if (var_id == null) {
            e.preventDefault();
            jQuery(this).after('<span class="select-theme-alert">Please select a theme</span>');
            return false;
        }
    });

    /* Warn about unsafe email providers */
    var blacklist = "att.net|aol.com|sbcglobal.net";
    jQuery('#edd_register_form #edd-user-email, form.wpcf7-form input.wpcf7-email').on('blur', function() {
        jQuery(this).parent().find('.unsafe-email').remove();
        jQuery(this).removeClass('unsafe');
        var value = jQuery(this).val();
        if (value.match(blacklist)) {
            jQuery(this).after('<div class="unsafe-email">To ensure you will receive our messages, please use an email address from a different provider.</div>');
            jQuery(this).addClass('unsafe');
        }
    });

    /* Form elements invalid hint remover */
    jQuery('body').on('focus', '.wpcf7-validates-as-required', function() {
        jQuery(this).next('.wpcf7-not-valid-tip').fadeOut('slow');
    });
    jQuery('body').on('click', '.wpcf7-not-valid input[type="checkbox"]', function() {
        jQuery(this).closest('.wpcf7-not-valid').next('.wpcf7-not-valid-tip').fadeOut('slow');
    });

});
/* end document.ready */


/**
 * jQuery Dropdown: A simple dropdown plugin
 * Contribute: https://github.com/claviska/jquery-dropdown
 * @license: MIT license: http://opensource.org/licenses/MIT
 */
if (jQuery)(function($) {
    $.extend($.fn, {
        jqDropdown: function(method, data) {
            switch (method) {
                case 'show':
                    show(null, $(this));
                    return $(this);
                case 'hide':
                    hide();
                    return $(this);
                case 'attach':
                    return $(this).attr('data-jq-dropdown', data);
                case 'detach':
                    hide();
                    return $(this).removeAttr('data-jq-dropdown');
                case 'disable':
                    return $(this).addClass('jq-dropdown-disabled');
                case 'enable':
                    hide();
                    return $(this).removeClass('jq-dropdown-disabled');
            }
        }
    });

    function show(event, object) {
        var trigger = event ? $(this) : object,
            jqDropdown = $(trigger.attr('data-jq-dropdown')),
            isOpen = trigger.hasClass('jq-dropdown-open');
        /* In some cases we don't want to show it */
        if (event) {
            if ($(event.target).hasClass('jq-dropdown-ignore')) return;
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (trigger !== object.target && $(object.target).hasClass('jq-dropdown-ignore')) return;
        }
        hide();
        if (isOpen || trigger.hasClass('jq-dropdown-disabled')) return;
        /* Show it */
        trigger.addClass('jq-dropdown-open');
        jqDropdown
            .data('jq-dropdown-trigger', trigger)
            .slideDown('fast'); // .show()
        /* Position it */
        position();
        /* Trigger the show callback */
        jqDropdown
            .trigger('show', {
                jqDropdown: jqDropdown,
                trigger: trigger
            });
    }

    function hide(event) {
        /* In some cases we don't hide them */
        var targetGroup = event ? $(event.target).parents().addBack() : null;
        /* Are we clicking anywhere in a jq-dropdown? */
        if (targetGroup && targetGroup.is('.jq-dropdown')) {
            /* Is it a jq-dropdown menu? */
            if (targetGroup.is('.jq-dropdown-menu')) {
                /* Did we click on an option? If so close it. */
                if (!targetGroup.is('A')) return;
            } else {
                /* Nope, it's a panel. Leave it open. */
                return;
            }
        }
        /* Trigger the event early, so that it might be prevented on the visible popups */
        var hideEvent = jQuery.Event("hide");
        $(document).find('.jq-dropdown:visible').each(function() {
            var jqDropdown = $(this);
            jqDropdown
                .hide()
                .removeData('jq-dropdown-trigger')
                .trigger('hide', {
                    jqDropdown: jqDropdown
                });
        });
        if (!hideEvent.isDefaultPrevented()) {
            /* Hide any jq-dropdown that may be showing */
            $(document).find('.jq-dropdown:visible').each(function() {
                var jqDropdown = $(this);
                jqDropdown
                    .hide()
                    .removeData('jq-dropdown-trigger')
                    .trigger('hide', {
                        jqDropdown: jqDropdown
                    });
            });
            /* Remove all jq-dropdown-open classes */
            $(document).find('.jq-dropdown-open').removeClass('jq-dropdown-open');
        }
    }

    function position() {
        var jqDropdown = $('.jq-dropdown:visible').eq(0),
            trigger = jqDropdown.data('jq-dropdown-trigger'),
            hOffset = trigger ? parseInt(trigger.attr('data-horizontal-offset') || 0, 10) : null,
            vOffset = trigger ? parseInt(trigger.attr('data-vertical-offset') || 0, 10) : null;
        if (jqDropdown.length === 0 || !trigger) return;
        /* Position the jq-dropdown relative-to-parent... */
        if (jqDropdown.hasClass('jq-dropdown-relative')) {
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.position().left - (jqDropdown.outerWidth(true) - trigger.outerWidth(true)) - parseInt(trigger.css('margin-right'), 10) + hOffset : trigger.position().left + parseInt(trigger.css('margin-left'), 10) + hOffset,
                top: trigger.position().top + trigger.outerHeight(true) - parseInt(trigger.css('margin-top'), 10) + vOffset
            });
        } else {
            /* ...or relative to document */
            jqDropdown.css({
                left: jqDropdown.hasClass('jq-dropdown-anchor-right') ?
                    trigger.offset().left - (jqDropdown.outerWidth() - trigger.outerWidth()) + hOffset : trigger.offset().left + hOffset,
                top: trigger.offset().top + trigger.outerHeight() + vOffset
            });
        }
    }
    $(document).on('click.jq-dropdown', '[data-jq-dropdown]', show);
    $(document).on('click.jq-dropdown', hide);
    $(window).on('resize', position);
})(jQuery);

/* Fancybox */
jQuery(function() {

    if (typeof jQuery.fn.fancybox == 'undefined') return;

    jQuery.fn.getTitle = function() { // Copy the title of every IMG tag and add it to its parent A so that fancybox can show titles
        var arr = jQuery("a[data-fancybox]");
        jQuery.each(arr, function() {
            var title = jQuery(this).children("img").attr("title");
            var caption = jQuery(this).next("figcaption").html();
            if (caption && title) {
                jQuery(this).attr("title", title + " " + caption)
            } else if (title) {
                jQuery(this).attr("title", title);
            } else if (caption) {
                jQuery(this).attr("title", caption);
            }
        });
    }

    // Supported file extensions
    var thumbnails = jQuery("a:has(img)").not(".nolightbox").filter(function() {
        return /\.(jpe?g|png|gif|mp4|webp|bmp|pdf)(\?[^/]*)*$/i.test(jQuery(this).attr('href'))
    });

    // Gallery type BY POST and on post or page (so only one post or page is visible)
    // Gallery by post
    thumbnails.addClass("fancybox").attr("data-fancybox", "gallery").getTitle();

    // Gallery type ALL
    // Call fancybox and apply it on any link with a rel atribute that starts with "fancybox", with the options set on the admin panel
    jQuery("a.fancybox").fancybox({
        loop: false,
        smallBtn: true,
        zoomOpacity: "auto",
        animationEffect: "fade",
        animationDuration: 500,
        transitionEffect: "fade",
        transitionDuration: "300",
        overlayShow: true,
        overlayOpacity: "0.7",
        titleShow: true,
        titlePosition: "inside",
        keyboard: true,
        showCloseButton: true,
        arrows: true,
        clickContent: false,
        clickSlide: function(current, event) {
            return current.type === "image" ? "close" : false;
        },
        wheel: false,
        toolbar: false,
        preventCaptionOverlap: true,
        onInit: function() {},
        onDeactivate: function() {},
        beforeClose: function() {},
        afterShow: function() {},
        afterClose: function() {},
        caption: function(instance, item) {
            var testing = jQuery(this).context.title;
            var caption = jQuery(this).data('caption') || '';
            if (item.type === 'image' && testing.length) {
                caption = (caption.length ? caption + '<br />' : '') + '<p class="caption-title">' + testing + '</p>';
            }
            return caption;
        },
        afterLoad: function(instance, current) {
            current.$content.append('<div class=\"fancybox-custom-caption\" style=\" position: absolute;left:0;right:0;color:#000;padding-top:10px;bottom:-50px;margin:0 auto;text-align:center; \">' + current.opts.caption + '</div>');
        },
    });

})

/* FIN */