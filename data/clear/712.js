(function($) {
    Drupal.behaviors.slideMenu = {
        attach: function(context) {

            var tabletBreakpoint = 900;
            //var tablet = false;
            var mobileBreakpoint = 480;
            //var mobile = false;
            var menuTabWidth = 65;
            var menuWidth = 260;
            var mobileMenuWidth = 232;
            var mainMenu = $('#navigation-main', context);

            //if the menu doesn't exist on the page do nothing
            if (!mainMenu.length) {
                return;
            }

            $(window).load(function() {
                $('.region-menu-region #block-menu_block-2').hide() //hiding to prevent tabbing to while menu is closed
                if (jQuery(window).width() > tabletBreakpoint) {
                    //if there's no cookie open and close the menu
                    if (document.cookie.indexOf('menu_open') === -1) {
                        slideOpen();
                        setTimeout(function() {
                            slideClosed();
                        }, 800);
                        //get the current date and add 24 hours
                        var expires = new Date();
                        expires.setHours(expires.getHours() + 24);
                        //set the cookie name, value to 1, and the expiration date
                        document.cookie = "menu_open=1; expires=" + expires.toUTCString();
                    }
                }
            });


            if (window.innerWidth <= tabletBreakpoint) {
                menuTabWidth = 0;
                //menu is closed by default on tablet
                mainMenu.removeClass("open");
            }
            if (window.innerWidth <= mobileBreakpoint) {
                menuTabWidth = 0;
                menuWidth = mobileMenuWidth;
                //menu is closed by default on tablet
                mainMenu.removeClass("open");
            }

            $(document).on('mobile', function() {
                menuTabWidth = 0;
                menuWidth = mobileMenuWidth;
                resetMobileMenu();
            });
            $(document).on('tablet', function() {
                menuTabWidth = 0;
                menuWidth = 260;
                resetMobileMenu();
            });
            $(document).on('desktop', function() {
                menuTabWidth = 65;
                resetDesktopMenu();
            });

            function resetMobileMenu() {
                mainMenu.css('width', 0);
                $('#page, #alerts').css('left', 0);
                mainMenu.removeClass('open');
                $('#header-region .mobile-menu-button.open').removeClass("hidden");
                $('#header-region .mobile-menu-button.close').addClass("hidden");
            }

            function resetDesktopMenu() {
                mainMenu.css('width', menuTabWidth);
                $('#page, #alerts').css('left', 0);
                mainMenu.removeClass('open');
            }

            $('#navigation-main, #header-region .mobile-menu-button').once().click(function(e) {
                if (!mainMenu.hasClass('open')) {
                    //ignore links, just open the menu
                    e.preventDefault();
                    slideOpen();
                    $('#header-region .mobile-menu-button').toggleClass("hidden");
                    //provide a trigger for others to act on
                    $(mainMenu).trigger('mainMenu-opened');
                }
            });
            $('#page').once().click(function(e) {
                if ($(e.target).is("#header-region .mobile-menu-button.open")) return;
                if (mainMenu.hasClass('open')) {
                    slideClosed();
                    $('#header-region .mobile-menu-button').toggleClass("hidden");
                    //provide a trigger for others to act on
                    $(mainMenu).trigger('mainMenu-closed');
                }
            });

            function slideOpen() {
                $('.not-front #content_bottom').toggleClass('menu-open');

                $('.region-menu-region #block-menu_block-2').show() //showing to allow tabbing to while menu is open

                mainMenu.animate({
                    "width": menuWidth
                });
                $('#page, #alerts').animate({
                    "left": '+=' + (menuWidth - menuTabWidth)
                }, function() {
                    jQuery(document).trigger('menuMoved');
                    mainMenu.addClass('open');
                });
            }

            function slideClosed() {
                mainMenu.animate({
                    "width": menuTabWidth
                });
                $('#page, #alerts').animate({
                    "left": 0
                }, function() {
                    jQuery(document).trigger('menuMoved');
                    mainMenu.removeClass('open');
                    $('.region-menu-region #block-menu_block-2').hide() //hiding to prevent tabbing to while menu is closed
                    $('.not-front #content_bottom').toggleClass('menu-open');
                });
            }
        }
    }
})(jQuery);
/*
(function ($) {
  var tabletBreakpoint = 900;
  //the menu is open by default on desktop, slide it shut after the window loads
  if (jQuery(window).width() > tabletBreakpoint) {
    var mainMenu = jQuery('#navigation-main');
    var menuTabWidth = 65;
    var menuWidth = 260;
    //need to check if menu is open or the page will slide left on any page on click
    if (mainMenu.hasClass('open')) {
      mainMenu.animate({"width": menuTabWidth});
      jQuery('#page, #alerts').animate({"left": 0}, function(){
        //This is used in stickyScrollTop.js to move the sticky element back into place after the menu closes
        jQuery(document).trigger('menuMoved');
      });
      mainMenu.toggleClass('open');
    }
  }
})(jQuery);
*/

(function($) {
    Drupal.behaviors.dropdownMenu = {
        attach: function(context) {
            // Currently used on the 'Frequently accessed tools & resources' menu
            $('.dropdown-menu-js').once().click(function() {
                $(this).toggleClass('open');
                $('ul.menu', this).slideToggle(400, function() {
                    if ($(this).parent().hasClass('menu-name-menu-resource-menu')) {
                        //trigger for when toggling FAT menu
                        if ($(this).is(':visible')) {
                            $(this).parent().trigger('opened');
                        } else {
                            $(this).parent().trigger('closed');
                        }
                    }
                });
            });

        }
    }
})(jQuery);


(function($) {
    Drupal.behaviors.sidebarMenu = {
        attach: function(context) {

            // Sidebar menu effects
            var menuItemTitle = $('.sidebar-menu .nolink');

            if (menuItemTitle.hasClass('active-trail')) {
                $('.pane-menu-sidebar-nav .nolink.active-trail').addClass('opened');
            }

            menuItemTitle.once().click(function() {
                $(this).toggleClass('opened');
                $(this).next('ul').slideToggle();
                var top = $(this).offset().top;
                if ($(this).hasClass('opened')) {
                    $('html, body').delay(300).animate({
                        scrollTop: top
                    });
                }
            });

        }
    }
})(jQuery);

(function($) {
    Drupal.behaviors.subjectPageMenu = {
        attach: function(context) {
            var tabletBreakpoint = 900;

            //if the menu doesn't exist on the page do nothing
            var mobileMenu = $('.mobile-menu-row ul', context);
            if (!mobileMenu.length) {
                $('body.node-type-page .primary-links-row').hide();
                $('body.node-type-subject-page .primary-links-row').hide();
                return;
            }

            if (window.innerWidth <= tabletBreakpoint) {
                resetSubjectMenu();
            }
            $(document).on('tablet', function() {
                resetSubjectMenu();
            });
            $(document).on('desktop', function() {
                resetSubjectMenu();
            });

            $('.primary-links-row .mobile-menu-button').click(function() {
                $('.primary-links-row .mobile-menu-button').toggleClass('hidden');
                $('.mobile-menu-row').toggleClass('hidden');
            });

            function resetSubjectMenu() {
                if (window.innerWidth <= tabletBreakpoint) {
                    //menu is closed by default on tablet
                    $('.mobile-menu-row').addClass("hidden");
                    $('.primary-links-row .mobile-menu-button.open').removeClass('hidden');
                    $('.primary-links-row .mobile-menu-button.close').addClass('hidden');
                } else {
                    $('.mobile-menu-row').addClass("hidden");
                    $('.primary-links-row .mobile-menu-button').addClass('hidden');
                }
            }
        }
    }
})(jQuery);;
(function($) {
    Drupal.behaviors.scrollFixed = {
        attach: function(context) {

            var stickyElementWrapper = $('.sticky-top-js');
            var stickyElement = $('.sticky-top-js .pane-content');
            var stickyElementWrapperWidth = stickyElementWrapper.outerWidth();

            //if page has no sticky element, do nothing
            if (stickyElementWrapper.length == 0) {
                return;
            }

            //need to set the height of the wrapper, when its contents become fixed the wrapper would collapse otherwise.
            //when wrapper collapses it can cause the page to be shorter and hit the "sticky point" causing the page to jump down
            //and you can never actually scroll to the top
            stickyElementWrapper.css('height', stickyElementWrapper.outerHeight());

            $(window).scroll(function() {
                //check for visibility, when blind is open element gets set to sticky and a width of 0 otherwise
                if (stickyElement.is(':visible')) {
                    setFixed();
                }
                if (stickyElement.hasClass('fixed') && stickyElement.is(':visible')) {
                    setWidth();
                    setLeft();
                }
            });
            $(window).resize(function() {

                //when resizing the window the element may go above the page top
                setFixed();

                if (stickyElement.hasClass('fixed')) {
                    //on resize keep the fixed element same width as parent
                    setWidth();
                    //since the left position is set after the menu closes we must update the left pos on resize
                    setLeft();
                } else {
                    stickyElement.width('');
                }
            });

            //this event haapens in menu.js when the menu closing animation is finished after window load
            $(document).on('menuMoved', function() {
                setLeft();
            });

            function setWidth() {
                var stickyElementWrapperWidth = stickyElementWrapper.outerWidth();
                stickyElement.width(stickyElementWrapperWidth);
            }

            function setLeft() {
                var leftPos = stickyElementWrapper.offset().left + 'px';
                stickyElement.css('left', leftPos);
            }

            function setFixed() {
                //if element goes above page top set it to fixed.
                //if it goes below unset fixed position
                var windowTop = $(window).scrollTop();
                var elementTop = stickyElementWrapper.offset().top;

                if (windowTop >= elementTop) {
                    stickyElement.addClass('fixed');
                    //once its fixed the width changes because it no longer has the same parent, so set the width to the parent width;
                    stickyElement.width(stickyElementWrapperWidth);
                } else {
                    stickyElement.removeClass('fixed');
                }
            }
        }
    }
})(jQuery);

;
(function($) {
    Drupal.behaviors.closeAlert = {
        attach: function(context) {

            //if the cookie returns -1 it doesn't exist
            if (document.cookie.indexOf('hide_alert') === -1) {
                $('.view-alerts').removeClass('hidden');
            }

            // Currently used on the 'Frequently accessed tools & resources' menu
            $('.close-alert').once().click(function() {
                $(this).parents('.view-alerts').slideUp('fast');

                //get the current date and add 10 minutes
                var expires = new Date();
                expires.setMinutes(expires.getMinutes() + 10);
                //set the cookie name, value to 1, and the expiration date
                document.cookie = "hide_alert=1; expires=" + expires.toUTCString();
            });

        }
    }
})(jQuery);;

(function($) {
    Drupal.behaviors.breakpoint = {
        attach: function(context) {

            var tabletBreakpoint = 900;
            var tablet = false;
            var mobileBreakpoint = 480;
            var mobile = false;

            var desktopMedia = window.matchMedia('(min-width:' + (tabletBreakpoint + 1) + 'px)');
            var tabletMedia = window.matchMedia('(min-width:' + (mobileBreakpoint + 1) + 'px) and (max-width:' + tabletBreakpoint + 'px)');
            var mobileMedia = window.matchMedia('(max-width:' + mobileBreakpoint + 'px)');

            if (window.innerWidth <= tabletBreakpoint && window.innerWidth > mobileBreakpoint) {
                tablet = true;
                $('body').addClass('tablet');
            }
            if (window.innerWidth <= mobileBreakpoint) {
                mobile = true;
                $('body').addClass('mobile');
            }

            $(window).resize(function() {
                if (tablet == false && tabletMedia.matches) {
                    tablet = true;
                    $('body').addClass('tablet');
                    $(document).trigger('tablet');
                    //console.log("switched to tablet");
                } else if (tablet == true && desktopMedia.matches) {
                    tablet = false;
                    $('body').removeClass('tablet');
                    $(document).trigger('desktop');
                    //console.log("switched to desktop");
                }

                if (mobile == false && mobileMedia.matches) {
                    mobile = true;
                    $('body').removeClass('tablet');
                    $('body').addClass('mobile');
                    $(document).trigger('mobile');
                    //console.log("switched to mobile");
                } else if (mobile == true && tabletMedia.matches) {
                    mobile = false;
                    $('body').removeClass('mobile');
                    $('body').addClass('tablet');
                    $(document).trigger('tablet');
                    //console.log("switched to tablet");
                }
            });

        }
    }
})(jQuery);;
(function($) {
    Drupal.behaviors.dropdown = {
        attach: function(context) {

            if ($('.dropdown-toggle-js').length == 0) {
                return;
            }
            // Currently used on the share button on focus area landing pages.
            // Triggers for mouse click or 'enter' keypress for accessibility
            $('.dropdown-toggle-js').once().on('keypress click', function(e) {
                if (e.type != 'click' && !(e.type == 'keypress' && e.which == 13)) {
                    //was not click or enter
                    return;
                }
                $(this).nextAll('.dropdown-target-js').slideToggle('easeInOutExpo');
                $(this).toggleClass('toggled');
                $(this).trigger('toggled');
            });
        }
    }
})(jQuery);

;
(function($) {
    Drupal.behaviors.scrollTop = {
        attach: function(context) {
            // Currently used on the share button on focus area landing pages and
            // the explainer content type next and previous buttons
            $('.clickScroll').once().click(function() {
                //sometimes browser will not blur (un-focus) clicked item, so force it to blur item
                $(this).trigger('blur');
                var offset = $('.scrollTarget').offset().top;
                $('html, body').animate({
                    scrollTop: offset
                }, 'slow');
            });
        }
    }
})(jQuery);;
(function($) {
    Drupal.behaviors.quickFactsShare = {
        attach: function(context) {

            if ($('.quick-facts-js').length === 0) {
                return;
            }

            var QuickFactsSlideshow = $('.quick-facts-js .field-name-field-quick-facts > .field-items', context);
            var emailHref = $('.quick-facts-row .mail-share').attr('href');
            var twitterHref = $('.quick-facts-row .twitter-share').attr('href');

            QuickFactsSlideshow.on('init', function(event, slick) {
                setShareTitle(emailHref, twitterHref);
            });

            QuickFactsSlideshow.on('afterChange', function(event, slick, currentSlide, nextSlide) {
                setShareTitle(emailHref, twitterHref);
            });

            function setShareTitle(emailHref, twitterHref) {
                if (QuickFactsSlideshow.closest('.title-body-fact').length > 0) {
                    var factTitle = $('.quick-facts-js .slick-active .field-name-field-title .field-item').text();
                    var factBody = $('.quick-facts-js .slick-active .field-name-field-body .field-item').text();
                    factTitle = factTitle + " " + factBody;
                } else {
                    var factTitle = $('.quick-facts-js .slick-active .field-name-field-title .field-item').text();
                }
                emailHref = emailHref + '&subject=' + factTitle;
                $('.quick-facts-row .mail-share').attr('href', emailHref);
                twitterHref = twitterHref + '&text=' + factTitle;
                $('.quick-facts-row .twitter-share').attr('href', twitterHref);
            }
        }
    }
})(jQuery);;
(function($) {
    Drupal.behaviors.modalCustom = {
        attach: function(context) {
            // Uses ctools modal events to toggle a body class used for styling
            $(document).bind("CToolsAttachBehaviors", function() {
                $('body').addClass('ctools-modal');
            });
            $(document).bind("CToolsDetachBehaviors", function() {
                $('body').removeClass('ctools-modal');
            });
        }
    }
})(jQuery);

;
/**
 * Additional event tracking for Google Analytics:
 * Main menu open (not including auto-load)
 * Explore blind open
 * Footer blind open
 * Widget open
 * Widget zip submit (not the actual zip submitted)
 * About Our Agency, News & Features, Our Work on main menu (links)
 * About Our Agency, News & Features, Our Work on footer (links)
 * FAT menu
 */

(function($) {
    Drupal.behaviors.NOAAEventTracking = {
        attach: function(context) {
            var mainMenu = $('#navigation-main', context);
            var exploreBlind = $('.front .blind-top');
            var footerBlind = $('#content_bottom');
            var weatherWidget = $('.weather-widget-form');
            var FATmenu = $('.menu-name-menu-resource-menu');
            var secondaryNavMain = $('.region-menu-region .menu-name-menu-secondary-nav a');
            var secondaryNavFooter = $('.blind-footer .menu-name-menu-secondary-nav a');

            $(window).load(function() {
                mainMenu.on('mainMenu-opened', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Main Menu', 'opened');
                });
                mainMenu.on('mainMenu-closed', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Main Menu', 'closed');
                });

                exploreBlind.on('exploreBlind-opened', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Explore Blind', 'opened');
                });
                exploreBlind.on('exploreBlind-closed', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Explore Blind', 'closed');
                });

                footerBlind.on('open', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Footer Blind', 'opened');
                });
                footerBlind.on('close', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Footer Blind', 'closed');
                });

                weatherWidget.on('opened', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Weather Widget', 'opened');
                });
                weatherWidget.on('closed', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Weather Widget', 'closed');
                });
                weatherWidget.on('submitted', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Weather Widget', 'location submitted');
                });

                FATmenu.on('opened', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('FAT Menu', 'opened');
                });
                FATmenu.on('closed', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('FAT Menu', 'closed');
                });

                secondaryNavMain.on('click', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Main Menu: ' + $(this).text(), 'clicked');
                });
                secondaryNavFooter.on('click', function() {
                    Drupal.behaviors.NOAAEventTracking.sendEvent('Footer Menu: ' + $(this).text(), 'clicked');
                });
            });
        },
        sendEvent: function(eventCategory, eventAction, eventLabel, eventValue) {
            if (typeof ga == 'undefined') {
                return;
            }
            ga('send', {
                hitType: 'event',
                eventCategory: eventCategory,
                eventAction: eventAction,
                eventLabel: eventLabel,
                eventValue: eventValue
            });
        }
    }
})(jQuery);;
(function($) {
    Drupal.behaviors.explainerPager = {
        attach: function(context) {

            var pagerItem = $('.explainer-pager .field-name-field-explainer-section > .field-items > .field-item');
            //var firstItem = $('.explainer-pager .field-name-field-explainer-section > .field-items > .field-item').eq(0);
            var pagerTitle = $('.explainer-pager .pane-title');
            var explainer = $('.explainer-slideshow .field-name-field-explainer-section > .field-items');

            // On mobile the pager is a dropdown.
            pagerItem.once().click(function() {
                if (window.innerWidth < 900) {
                    $(this).parents('.pane-content').slideToggle();
                    pagerTitle.toggleClass('open');
                }
            });
            pagerTitle.once().click(function() {
                $(this).next('.pane-content').slideToggle();
                pagerTitle.toggleClass('open');
            });

            if (explainer.length == 0) {
                return;
            }
            // Update the pager title text after it cycles.
            explainer.on('cycle-after', function(event, opts) {
                var activePagerItem = $('.explainer-pager .field-name-field-explainer-section > .field-items > .field-item.cycle-pager-active');
                pagerTitle.html(activePagerItem.html());
            });

        }
    }
})(jQuery);

;