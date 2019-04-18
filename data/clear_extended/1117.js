function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
/**
 *
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */
// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {
    // Place your code here.

    // add even/odd clsses to table rows
    $("tbody > tr:odd").addClass("odd");
    $("tbody > tr:not(.odd)").addClass("even");


})(jQuery, Drupal, this, this.document);


(function($) {

    jQuery.extend({
        getUrlVars: function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name) {
            return jQuery.getUrlVars()[name];
        }
    });


    $(document).ready(function() {
        // set up menu toggling
        $("#menu-toggle").click(function() {
            $(".primary-navigation")
                .toggle();
            $("#block-search-form")
                .hide();
        });

        // set up search toggling
        $("#search-toggle").click(function() {
            $("#block-search-form")
                .toggle();
            $(".primary-navigation")
                .hide();
        });

        var ipp = getQueryVariable('items_per_page');
        switch (ipp) {
            case '20':
                $('.ipp-20').addClass('ipp-active');
                break;
            case '50':
                $('.ipp-50').addClass('ipp-active');
                break;
            case '100':
                $('.ipp-100').addClass('ipp-active');
                break;
            default:
                $('.ipp-20').addClass('ipp-active');
        }

        $('#transcript-title').click(function() {
            $('#transcript-title').toggleClass("expanded");
            return false;
        });

        $('#transcript-title').click(function() {
            $('.transcript-content').toggle();
            return false;
        });

        // Photo Gallery Slide Show
        $("#galleriffic").each(function() {
            $(this).find("#gallery").insertBefore($(this).find("#thumbs"));
        });
        $("#galleriffic a.thumb > img").attr('alt', 'Photo Gallery Image Thumbnail');
        $(window).bind("load", function() {
            $("#galleriffic a.advance-link > img").attr('alt', ' ');
        });

        /* CALENDAR */
        $('.view-public-event-calendar .view-header .view-type-links .events-calendar-view').addClass('active');
        $('body').addClass('show-calendar').removeClass('hide-calendar');
        $('.view-public-event-calendar .view-header .view-type-links a').click(function(e) {
            e.preventDefault();
            $('.view-public-event-calendar .view-header .view-type-links a').removeClass('active');
            $(this).addClass('active');
            if ($(this).hasClass('events-calendar-view')) {
                $('body').addClass('show-calendar').removeClass('hide-calendar');
            } else {
                $('body').removeClass('show-calendar').addClass('hide-calendar');
            }
        });

        $(document).ajaxComplete(function() {
            if ($('body').hasClass('show-calendar')) {
                $('.view-public-event-calendar .view-header .view-type-links .events-calendar-view').addClass('active');
                $('.view-public-event-calendar .view-header .view-type-links .events-list-view').removeClass('active');
            } else {
                $('.view-public-event-calendar .view-header .view-type-links .events-calendar-view').removeClass('active');
                $('.view-public-event-calendar .view-header .view-type-links .events-list-view').addClass('active');
            }


            $('.view-public-event-calendar .view-header .view-type-links a').click(function(e) {
                e.preventDefault();
                $('.view-public-event-calendar .view-header .view-type-links a').removeClass('active');
                $(this).addClass('active');
                if ($(this).hasClass('events-calendar-view')) {
                    $('body').addClass('show-calendar').removeClass('hide-calendar');
                } else {
                    $('body').removeClass('show-calendar').addClass('hide-calendar');
                }
            });
        }); // end ajaxComplete

        /* BUREAUS ADDITIONAL INFO EQUAL HEIGHT */
        $('.view-bureau-additional-info.view-display-id-block').each(function() {
            var highestBox = 0;
            $(this).find('.field-name-field-bureau-additional-info').each(function() {
                if ($(this).height() > highestBox) {
                    highestBox = $(this).height();
                }
            });
            $(this).find('.field-name-field-bureau-additional-info img,.node-bureau-landing-page.view-mode-full img').css('height', 'auto');
            $(this).find('.field-name-field-bureau-additional-info').height(highestBox);
        });


        /* BUREAUS ADDITIONAL INFO ORDER */
        var orderClasses = ['first', 'second', 'third'];
        $('.field-name-field-bureau-additional-info').addClass(function(i, c) {
            return orderClasses[i % orderClasses.length];
        });


        /* IPHONE SELECT/INPUT SCALING BUG */
        var metas = document.getElementsByTagName('meta');
        var i;
        if (navigator.userAgent.match(/iPhone/i)) {
            for (i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                }
            }
            document.addEventListener("gesturestart", gestureStart, false);
        }

        function gestureStart() {
            for (i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
                }
            }
        }


        /* EXPOSED FILTERS */
        // apply custom select style to select lists
        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {} else {
            var exfilrv = 0;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var exfilua = navigator.userAgent;
                var exfilre = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (exfilre.exec(exfilua) != null)
                    exfilrv = parseFloat(RegExp.$1);
            }
            if (exfilrv != 7) {
                $('.form-select').customSelect();
            }
        }

        // Rebuild selects w/ customSelect after ajax update.
        $(document).ajaxStop(function() {
            if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {} else {
                if (exfilrv != 7) {
                    $('.form-select').customSelect();
                }
            }
        });

        // remove description when date field is focused
        $('.form-item-field-release-date-value-max-date input,.form-item-field-release-date-value-min-date input,.form-item-date-filter-min-date input,.form-item-date-filter-max-date input').focus(function() {
            $(this).closest('.form-item').find('.description').css('display', 'none');
        });
        // show description when date field is blurred and no value was entered
        /*$('.form-item-field-release-date-value-max-date input,.form-item-field-release-date-value-min-date input,.form-item-date-filter-min-date input,.form-item-date-filter-max-date input').blur(function(){
         if ($(this).val()==''){
         $(this).closest('.form-item').find('.description').css('display','block');
         }
         });*/
        // clear description is field is populate
        $('.form-item-field-release-date-value-max-date input,.form-item-field-release-date-value-min-date input,.form-item-date-filter-min-date input,.form-item-date-filter-max-date input').each(function() {
            if ($(this).val() == '' || $(this).val() == null) {
                $(this).closest('.form-item').find('.description').css('display', 'block');
            } else {
                $(this).closest('.form-item').find('.description').css('display', 'none');
            }
        });

        // grid clearing for one-stop
        $('.node-one-stop .field-group-fieldset.group-images .field-name-field-image-reference.field-type-node-reference:nth-child(4n+1)').addClass('clear-row');
        $('.node-one-stop .field-group-fieldset.group-videos .field-name-field-video-reference.field-type-node-reference:nth-child(4n+1)').addClass('clear-row');
        $('.node-type-event .field-group-fieldset.group-images .field-name-field-image-reference.field-type-node-reference:nth-child(4n+1)').addClass('clear-row');
        $('.node-type-event .field-group-fieldset.group-videos .field-name-field-video-reference.field-type-node-reference:nth-child(4n+1)').addClass('clear-row');
        // touchscreen mechanism for closing the main menu if anywhere outside of the main menu is tapped
        $('html:not(.no-touch) body').bind('touchend', function(e) {
            if (e.target.className !== 'menu' && !$(e.target).parents().is('.menu')) {
                $('ul.menu li').removeClass('sfHover');
            };
        });

        // duration placed top of image on Video pages
        $(".node-teaser").each(function() {
            $(this).find(".field-duration").appendTo($(this).find(".field-name-field-video-thumbnail"));
        });

        /*
         * RESPONSIVE CODE
         * - Code that is responsible for responsive modifications that take place when a window resizes to a specified
         * - break point using media query handling via enquire.js
         */

        // Allows us to get IE version number
        var getIEVersion = function() {
            var rv = -1;
            if (navigator.appName == 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv;
        };


        // *** BELOW CODE - Removed from match() function.... This entire Enquire.js block may not be at all needed
        // Remove classes and inline styles that hide main nav
        $('.primary-navigation')
            .removeClass('element-hidden')
            .css({
                'display': '',
                'visibility': ''
            });

        // Remove classes and inline styles that hide search form
        /*$("#block-search-form")
            .removeClass('element-hidden')
            .css({'display' : '', 'visibility' : ''}); */

        // Call collapseNav plugin on sidebar menu
        $('.vertical-nav .menu-block-wrapper > ul').collapseNav();

        // Add sfmenu class to main menu for keyboard accessibility
        $('.primary-navigation .menu-level-1 > ul')
            .addClass('sf-menu');

        // Intialize superfish on menu
        $('ul.sf-menu').superfish({
            autoArrows: false // disable generation of arrow mark-up
        });
        // *** END BELOW CODE

        /*    enquire.register("screen and (min-width:48em)", {

        deferSetup : false,

        setup : function setup() {
        },

        match : function () {
          //console.log('"48em" : match()');
          //alert('"48em" : match()');
        },

        unmatch : function () {
          //console.log('"48em" : unmatch()');
          //alert('"48em" : unmatch()');

          // Remove superfish classes and inline styling
          */
        /*
                 $('.primary-navigation ul')
                 .removeClass('sf-menu sf-js-enabled sf-with-ul sf-sub-indicator')
                 .css({'display' : '', 'visibility' : ''});
                 */
        /*
              }
            }, true).listen(10);
            */

        // FOR IE 8 (and below) we manage breakpoints manually
        // If window size is greater than 48em in IE 8 and below we register a breakpoint handler to mimic behaviors
        // not being triggered by enquire.js in IE 8 and below.
        var ieVersion = getIEVersion();
        if (ieVersion <= 8 && ieVersion != -1) {

            var winWidth = $(window).width(),
                winHeight = $(window).height();
            var ie_once_on_load = false;

            var breakpoint_IE = function() {

                var onResize = _.throttle(function() {
                    var w = $('#page').width();
                    if (w >= (640)) {
                        $('.primary-navigation').removeClass('element-hidden').show();
                        $("#block-search-form").removeClass('element-hidden').show();
                    } else if (w < 640) {
                        $("#block-search-form").addClass('element-hidden').removeAttr('style').hide();
                        $('.primary-navigation').addClass('element-hidden').removeAttr('style').hide();
                    }
                }, 100);

                // Poll the new width and height
                var winNewWidth = $(window).width(),
                    winNewHeight = $(window).height();

                // Compare the new height and width with the old
                var resizeTimeout = null;
                if (winWidth != winNewWidth || winHeight != winNewHeight || !ie_once_on_load) {
                    window.clearTimeout(resizeTimeout);
                    resizeTimeout = window.setTimeout(onResize, 10);
                    ie_once_on_load = true;
                }

                // Update the width and height
                winWidth = winNewWidth;
                winHeight = winNewHeight;

            };
            $(window).resize(breakpoint_IE);
            breakpoint_IE();

            // IN ALL OTHER BROWSERS Except for IE 8 (and below), use Enquire.js
            // IE 8 and below aren't using this code anyway and it seems likely that the performance issues
            // being experienced in IE 7 are a result of the many reregistering event listeners that enquire.js
            // POORLY implements.
        } else {

            var mobile_menu_initialized = false;
            enquire.register("screen and (max-width:47.9em)", {

                deferSetup: true,

                setup: function setup() {},

                match: function() {
                    //console.log('"47.9em" : match()');
                    //alert('"47.9em" : match()');

                    // Before we call mobileMenu, reset the window.menu_data properties if the object exists
                    if (!_.isNull(window.menu_data)) {
                        window.menu_data.leftPos = 0;
                        window.menu_data.levelNum = 0;
                    }

                    // Initialize mobile menu plugin to main menu
                    if (!mobile_menu_initialized) {
                        mobile_menu_initialized = true;
                        $('.primary-navigation .menu-level-1 > ul')
                            .mobileMenu()
                            .addClass('test');
                    } else {
                        $('.primary-navigation .menu-level-1 > ul')
                            //.mobileMenu({initialized: true})
                            .mobileMenu()
                            .addClass('test');
                    }

                    // Make sure any previously visited menus are hidden
                    $('ul.menu li.active-level').removeClass('active-level').show();

                    // Restore menu's DOM alterations
                    var mobileMenus = window.mobileMenu_elements;
                    mobileMenus.each(function(index, value) {

                        // Reference the current mobile menu
                        var $this = $(this);

                        // Add menu classes and position menus
                        $this.addClass('mobile-menu').addClass('test').css({
                            left: '0px'
                        });

                        // Make sure all menus are visible
                        $this.find('ul.menu').css({
                            display: 'block',
                            visibility: 'visible'
                        });
                    });

                    // Add classes to hide main nav and search (make sure they're initially hidden)
                    // Enquire.js creates a race condition between various match and unmatches for some rediculous reason
                    // so to make sure the nav and search divs are initially hidden we must delay a callback for a fraction
                    // of a second to ensure they're indeed hidden.
                    setTimeout(function() {
                        $('.primary-navigation').addClass('element-hidden').removeAttr('style').hide();
                        $("#block-search-form").addClass('element-hidden').removeAttr('style').hide();
                    }, 250);
                },

                unmatch: function() {
                    //console.log('"47.9em" : unmatch()');
                    //alert('"47.9em" : unmatch()');

                    // Remove hidden class and adjust CSS properties on Primary Navigation
                    $('.primary-navigation')
                        .removeClass('element-hidden')
                        .css({
                            'display': '',
                            'visibility': ''
                        });

                    // Remove all inline styles from list elements
                    $('.primary-navigation li').removeAttr('style');

                    // Remove hidden class and adjust CSS properties on Search Form
                    $("#block-search-form")
                        .removeClass('element-hidden')
                        .css({
                            'display': '',
                            'visibility': ''
                        });

                    // Destroy mobileMenu's DOM alterations
                    var mobileMenus = window.mobileMenu_elements;
                    mobileMenus.each(function(index, value) {

                        // Reference the current mobile menu
                        var $this = $(this);

                        // Remove class and inline styling from mobile menu
                        $this.removeClass('mobile-menu').removeClass('test').removeAttr('style');

                        // Find mobileMenu inserted wrappers and remove them
                        $($('.positioning', $this).children()).unwrap();

                        // Remove .submenu-toggle anchors
                        $('.submenu-toggle', $this).remove();

                        // Remove the parent link list item
                        $this.find('li.parent-link').remove();

                        // Remove the inline width and left positioning
                        $this.find('ul.menu').removeAttr('style');

                        // Unbind mobile menu events (most importantly resize)
                        $('.primary-navigation .menu-level-1 > ul').unbind();
                    });

                    // Remove mobile menu plugin from main menu
                    $('.primary-navigation ul').removeClass('element-hidden').removeClass('test');
                    //$('.primary-navigatoin ul.menu').removeAttr('style');

                }
            }).listen(10);


        }


        //Business Center Toggle Menu (Explore the Business Center)


        //Extra hide so that toggle responds correctly the first time
        $('.block--explore .view-content ul').hide().addClass('is-closed');

        //Add tabindex for accessibility
        $('.block--explore h3').attr('tabindex', '0');

        //Close open menus if clicked elsewhere
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.block--explore').length) {
                // Hide the menus.
                $('.block--explore .view-content ul').hide().addClass('is-closed');
                $('.block--explore h3').removeClass('is-open');
            }
        });

        $('.block--explore ul li:last-child').on('focusout', function() {
            $('.block--explore .view-content ul').hide().addClass('is-closed');
            $('.block--explore h3').removeClass('is-open');
        });

        //Toggle
        $('.block--explore h3').focus(function() {

            if ($(this).next('ul').hasClass('is-closed') || $(this).parent('.view-header').next('.view-content').find('ul').hasClass('is-closed')) {
                $('.block--explore .view-content ul').hide().removeClass('is-open').addClass('is-closed');
                $(this).next('ul').fadeIn(300).removeClass('is-closed').addClass('is-open');
                $('.block--explore h3').removeClass('is-open');
                $(this).addClass('is-open');
                $(this).parent('.view-header').next('.view-content').find('ul').fadeIn(300).removeClass('is-closed').addClass('is-open');
            } else if ($(this).next('ul').hasClass('is-open') || $(this).parent('.view-header').next('.view-content').find('ul').hasClass('is-open')) {
                $(this).next('ul').fadeOut(300).removeClass('is-open').addClass('is-closed');
                $(this).removeClass('is-open');
                $(this).parent('.view-header').next('.view-content').find('ul').fadeOut(300).removeClass('is-open').addClass('is-closed');
            }

        });


        // FOIA webform
        // Modify DOM so that conditional fields appear after the radio buttons that trigger them.
        // Also, add currency formatting (commas and hundredths) as user types.

        if ($("body.section-foia").length !== 0) {
            // Move the "Don't have email?" link next to the Email field label.
            var no_email_link = $(".webform-component--dont-have-email").detach();
            var email_field = $(".webform-component--email label");
            no_email_link.insertBefore(email_field);

            // Move conditional fields for the "Describe the records you are requesting" radio button group.

            // Document Request: move the conditional "seeking other" fields so they appear after the "seeking other" radio button.
            var seeking_other_textarea = $(".webform-component--records-fieldset--ftc-records").detach();
            var seeking_other_radio = $("#edit-submitted-records-fieldset-doc-type-1").parent(".form-item-submitted-records-fieldset-doc-type");
            seeking_other_textarea.insertAfter(seeking_other_radio);

            // Document Request: move the conditional "consumer complaint" fields so they appear after the "consumer complaint" radio button.
            var consumer_complaint_textarea = $(".webform-component--records-fieldset--doc-consumer-complaint").detach();
            var consumer_complaint_radio = $("#edit-submitted-records-fieldset-doc-type-2").parent(".form-item-submitted-records-fieldset-doc-type");
            consumer_complaint_textarea.insertAfter(consumer_complaint_radio);

            // Move conditional fields for the "Select a suitable description..." radio button group.

            // Purpose of Request: move the conditional "Commercial" fields so they appear after the "Commercial" radio button.
            var affil_with_corporation_info = $(".webform-component--desc-fieldset--private-info").detach();
            var affil_with_corporation_textarea = $(".webform-component--desc-fieldset--private-name").detach();
            var affil_with_corporation_radio = $("#edit-submitted-desc-fieldset-select-suitable-description-and-purpose-1").parent(".form-item-submitted-desc-fieldset-select-suitable-description-and-purpose");
            affil_with_corporation_info.insertAfter(affil_with_corporation_radio);
            affil_with_corporation_textarea.insertAfter($(".webform-component--desc-fieldset--private-info"));

            // Purpose of Request: move the conditional "Educational/non-commercial..." fields so they appear after the "Educational/non-commercial..." radio button.
            var affil_with_educational_info = $(".webform-component--desc-fieldset--edu-info").detach();
            var affil_with_educational_textarea = $(".webform-component--desc-fieldset--edu-name").detach();
            var affil_with_educational_radio = $("#edit-submitted-desc-fieldset-select-suitable-description-and-purpose-2").parent(".form-item-submitted-desc-fieldset-select-suitable-description-and-purpose");
            affil_with_educational_info.insertAfter(affil_with_educational_radio);
            affil_with_educational_textarea.insertAfter($(".webform-component--desc-fieldset--edu-info"));

            // Purpose of Request: move the conditional "News media" fields so they appear after the "News media" radio button.
            var affil_with_news_info = $(".webform-component--desc-fieldset--media-info").detach();
            var affil_with_news_textarea = $(".webform-component--desc-fieldset--media-name").detach();
            var affil_with_news_radio = $("#edit-submitted-desc-fieldset-select-suitable-description-and-purpose-3").parent(".form-item-submitted-desc-fieldset-select-suitable-description-and-purpose");
            affil_with_news_info.insertAfter(affil_with_news_radio);
            affil_with_news_textarea.insertAfter($(".webform-component--desc-fieldset--media-info"));

            // Purpose of Request: move the conditional "Other" fields so they appear after the "Other" radio button.
            var affil_with_other_info = $(".webform-component--desc-fieldset--other-info").detach();
            var affil_with_other_textarea = $(".webform-component--desc-fieldset--other-name").detach();
            var affil_with_other_radio = $("#edit-submitted-desc-fieldset-select-suitable-description-and-purpose-4").parent(".form-item-submitted-desc-fieldset-select-suitable-description-and-purpose");
            affil_with_other_info.insertAfter(affil_with_other_radio);
            affil_with_other_textarea.insertAfter($(".webform-component--desc-fieldset--other-info"));

            // Add required asterisk to Terms & Conditions checkbox and fieldset legends for both radio button groups.
            var required_asterisk = '<span class="form-required" title="This field is required.">*</span>';
            //$(".form-item-submitted-records-fieldset-term-conditions-yes label.option").append(required_asterisk);
            $(".webform-component--records-fieldset legend").append(' ' + required_asterisk);
            $(".webform-component--desc-fieldset legend").append(' ' + required_asterisk);

            // Add commas (and remove non-currency characters) as user types into the Fee field.
            $(".webform-component--max-amount input.form-text").keyup(function(event) {
                // Ignore arrow keys.
                if (event.which >= 37 && event.which <= 40) return;
                // Ignore comma (188), decimal point (110) and period (190).
                if (event.which == 188 || event.which == 110 || event.which == 190) return;

                // Format currency value.
                $(this).val(function(index, value) {
                    // Remove all non-numeric characters, then add comma between every set of 3 digits (if there is an additional digit in front of the set).
                    // Also remove extra trailing decimal points.
                    return value
                        .replace(/[^0-9.]/g, "")
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        .replace(/(\.\d{2}).+/g, "$1");
                });
            });
            // Do additional cleanup on Fee field, once user finishes filling it out.
            $(".webform-component--max-amount input.form-text").blur(function(event) {
                $(this).val(function(index, value) {
                    // Make sure that there are two digits after the decimal point; if there isn't
                    // a .XX (hundredths place) at the end of the value, then add in .00 to the value.
                    // Also, remove extraneous characters and leading zeroes from beginning/end of the value.
                    return value
                        .replace(/(\.\d)$/, "$10")
                        .replace(/(^\D+|\D+$)/, "")
                        .replace(/^[0,]+([0-9]+)/, "$1")
                        .replace(/^([^.]+)$/, "$1.00");
                });
            });
        } // End of FOIA code.

        // Fix empty collapsible field_groups (aka "accordions").
        // This can occur when a Viewfield is displayed inside of a collapsible field_group.
        // Since the Viewfield doesn't properly signal when it contains no results, the
        // field_group/accordion still gets displayed. Currently this only occurs w/
        // the following content types:
        // - Custom Page (w/n Paragraphs items only)
        // - Public Event
        // - Public Comment Initiative
        if ($('body').hasClass('node-type-event') || $('body').hasClass('node-type-initiative') || $('body').hasClass('node-type-custom-page')) {
            // Remove each empty field_group (collapsible fieldset aka accordion or open div).
            $('#main fieldset.collapsible, #main .field-group-div').each(function() {
                // Only remove the field_group if it contains empty Viewfield and no other field content.
                var field_group_is_empty = true;

                // Check if field_group contains any non-empty Viewfields.
                $(this).find('.field-type-viewfield .view').each(function() {
                    if ($(this).html().trim()) {
                        // The field_group contains a Viewfield that is NOT empty.
                        field_group_is_empty = false;
                    }
                });

                // Check if field_group contains any other non-empty fields.
                $(this).find('.field').not('.field-type-viewfield').each(function() {
                    // The field_group contains other NON-empty fields.
                    field_group_is_empty = false;
                });

                // If field_group is empty, remove it from the DOM.
                if (field_group_is_empty) {
                    $(this).remove();
                }
            });
        }

        //Control Photo Gallery slides by clicking the thumbnail preview below
        $('#widget_pager_bottom_photo_gallery-block_1 .views-slideshow-pager-field-item').each(function(index) {
            var thumbnailIndex = index;
            $(this).find('a').on('click', function(e) {
                e.preventDefault();
                $('#flexslider_views_slideshow_main_photo_gallery-block_1 ol.flex-control-nav li:nth-of-type(' + (thumbnailIndex + 1) + ') a').trigger('click');
            })
        });

    });

})(jQuery);