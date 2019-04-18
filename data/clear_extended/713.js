(function($) {
    Drupal.behaviors.dndLegend = {
        attach: function(context) {
            //the scald legend it editable on the view page? no way.
            $('.dnd-legend-wrapper').attr('contentEditable', 'false');

        }
    }

    Drupal.behaviors.facts = {
        attach: function(context) {
            $(window).ready(function() {
                //on multimedia pages, if there's a resource, and if there's at least one factWrapper
                if ($('.page-node.node-type-multimedia').length > 0 && $('.factWrapper').length > 0 && $('.pane-node-field-multimedia-resource').length > 0) {
                    var mrHeight = $('.pane-node-field-multimedia-resource').height();
                    var sidebarHeight = $('.links-region').length > 0 ? $('.links-region').height() : 0;
                    //if there's room for the factWrapper on the side
                    if (mrHeight > sidebarHeight) {
                        //add a class to position it differently from other factWrappers
                        $('.factWrapper').addClass('right');
                    }
                }
            });

            $(window).scroll(function() {
                $('.page-node:not(.node-type-multimedia) .factWrapper, .page-node.node-type-multimedia .factWrapper.right').each(function() {
                    if ($(this).offset().top < ($(window).height() + $(window).scrollTop())) {
                        $(this).animate({
                            marginTop: 0,
                            opacity: 1
                        }, 400);
                    }
                });
            });


        }
    }

    $(document).ready(function() {
        $(".random-text ul li:eq(" + Math.floor(Math.random() * 2) + ")").show();
    });

    Drupal.behaviors.viewsHover = {
        attach: function(context) {

            $('.hover-state .views-row, .must-see-row .node-inner').hover(function() {
                $('img', this).animate({
                    opacity: ".1"
                }, 200);
                $(this).addClass('hovered');
            }, function() {
                $('img', this).animate({
                    opacity: "1"
                }, 200);
                $(this).removeClass('hovered');
            });
        }
    }

    Drupal.behaviors.mainMenuPosition = {
        attach: function(context) {
            _menuPosition();
        }
    }

    $(window).resize(function() {
        _menuPosition();
    });
    //change position and height of sidebar navigation so that it is scrollable, if the height of the window is less than the height of the navigation
    function _menuPosition() {
        var $w = $(window),
            $nav = $('#navigation-main'),
            $menu = $('#navigation-main > .region-menu-region');
        var pos = $w.height() < $menu.height() ? 'absolute' : 'fixed';
        var height = $w.height() < $menu.height() ? $(document).height() : '100%';
        $nav.css({
            'position': pos,
            'height': height
        });
    }

    //tabindex for FAT menu
    $(window).ready(function() {
        var $elements = $('.pane-menu-resource-menu, .pane-menu-sidebar-nav .nolink');
        $.each($elements, function(I, E) {
            $(E).attr('tabindex', '0');
            $(E).on('keypress', function(e) {
                if (e.which != 13) {
                    //not enter eky
                    return;
                }
                $(this).trigger('click');
            });
        });

    });

    //tabindex for focus area items menu
    //trigger on enter keypress focus area items menu
    $(window).ready(function() {
        var $elements = $('.slick-arrow');
        $.each($elements, function(I, E) {
            $(E).attr('tabindex', '0');
            $(E).on('keypress', function(e) {
                if (e.which != 13) {
                    //not enter key
                    return;
                }
                $(this).trigger('click');
            });
        });

    });

    //for 'share this' button on AOA page
    //when toggling 'dropdown', slide 'share this' to the left
    $(window).ready(function() {
        $('.pane-boxes-share-button.dropdown-toggle-js', '.about-our-agency, .page-node.node-type-program-landing-page, .page-node.node-type-office-landing-page').on('toggled', function() {
            if ($(this).hasClass('toggled')) {
                $(this).animate({
                    right: "+=100"
                })
            } else {
                $(this).animate({
                    right: "-=100"
                })
            }
        });

    });
})(jQuery);


Drupal.behaviors.viewLoadMoreUpdateCurrentCount = {
    attach: function(context, settings) {
        jQuery('.view').on('views_load_more.new_content', function(e) {
            var current = jQuery('.views-row', this).length;
            jQuery('.view-header .current-count', this).text(current);
        });
    }
};
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var args = arguments,
            newarr;
        args.callee = args.callee.caller;
        newarr = [].slice.call(args);
        if (typeof console.log === 'object') log.apply.call(console.log, console, newarr);
        else console.log.apply(console, newarr);
    }
};

// make it safe to use console.log always
(function(a) {
    function b() {}
    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) {
        a[d] = a[d] || b;
    }
})
(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return (window.console = {});
    }
}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
 **/
(function(b) {
    var c = {
        init: function(a) {
            a = b.extend({
                autoHide: !0,
                defaultOption: "Go to...",
                deviceWidth: 480,
                appendTo: "",
                className: "mobileselect",
                useWindowWidth: !1
            }, a);
            if ((a.useWindowWidth === !0 ? b(window).width() : screen.width) < a.deviceWidth) {
                var d = b(this),
                    c = a.appendTo.length ? b(a.appendTo) : d.parent(),
                    e = b('<select class="' + a.className + '" />');
                e.appendTo(c);
                b("<option />", {
                    selected: !b(".current", d).length ? "selected" : !1,
                    value: "",
                    text: a.defaultOption
                }).appendTo(e);
                b("a", d).each(function() {
                    var a = b(this),
                        c = a.parent("li").hasClass("current") || a.hasClass("current") ? "selected" : !1;
                    b("<option />", {
                        selected: c,
                        value: a.attr("href"),
                        text: a.text()
                    }).appendTo(e)
                });
                a.autoHide && b(d).hide();
                e.change(function() {
                    window.location = b(this).find("option:selected").val()
                })
            }
        }
    };
    b.fn.mobileSelect = function(a) {
        if (c[a]) return c[a].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof a === "object" || !a) return c.init.apply(this, arguments);
        else b.error("Method " + a + " does not exist on jQuery.mobileselect")
    }
})(this.jQuery);;
(function($) {
    Drupal.behaviors.toggleBlind = {
        attach: function(context) {
            var blind = $('#content_bottom');
            blindHeight = 127;

            if ($('#content_bottom .row-blind').length == 0) {
                // If blind isn't there, return.
                return;
            }
            //tabindex for accessibility
            $('.not-front .blind-divider .blind-toggle').attr('tabindex', '0');
            $('.not-front .blind-content-row').hide(); //show/hide so tabindex only works when visible
            $('.fieldable-panels-pane-homepage-blind .credit').hide();


            $('.not-front .blind-divider .blind-toggle').once().on('keypress click', function(e) {
                if (e.type != 'click' && !(e.type == 'keypress' && e.which == 13)) {
                    //was not click or enter
                    return;
                }
                //hide the button
                //this effectively hides the changing position of the button as the blind itself switches between fixed and static positioning
                $('.blind-divider .open, .blind-divider .close').fadeOut(100);

                if (!$('.blind-divider').hasClass('open')) {
                    showBlind();
                } else {
                    hideBlind();
                }
                $('.blind-divider').toggleClass('open');
                $('#content_bottom').toggleClass('blind-open');


            });

            function hideContent() {
                // using these properties instead of display:none
                // to avoid slick being unable to calculate slideshow widths when the viewport changes size with the blind open
                // however, this causes of flash of content on mobile, so hide before and show after
                $('#header, #content-header, #content-area').hide();
                $('#header, #content-header, #content-area').css({
                    'position': 'absolute',
                    'visibility': 'hidden'
                });
                //because the footer is absolutely positioned, we need to account for it's height
                blind.css({
                    'padding-bottom': '+=' + $('.blind-footer').height()
                });
                $('#page').css({
                    'overflow': 'hidden'
                });
                $('#header, #content-header, #content-area').show();
            }

            function showContent() {
                $('#header, #content-header, #content-area').hide();
                $('#header, #content-header, #content-area').css({
                    'position': '',
                    'visibility': ''
                });
                //because the footer is absolutely positioned, we need to account for it's height
                blind.css({
                    'padding-bottom': ''
                });
                $('#page').css({
                    'overflow': ''
                });
                $('#header, #content-header, #content-area').show();
            }

            function showBlind() {
                //show the credit of the background image.  this element is outside the the .blind-content-row div and won't be toggled with that div
                $('.fieldable-panels-pane-homepage-blind .credit').show();
                //calculate the position of the blind top for animating FROM
                var blindClosedY = $(window).height() - blindHeight;
                //show/hide so tabindex only works when visible
                $('.not-front .blind-content-row').show();
                //set fixed position so we can animate to the top of the window
                blind.css({
                    'position': 'fixed',
                    'top': blindClosedY,
                    'width': 'calc(100% - 65px'
                });
                //add a little margin to the content area to prevent shifting of document position since the blind is no longer part of the flow
                $('#content-area').css({
                    'margin-bottom': '+=' + blindHeight
                });
                //animate
                blind.animate({
                    top: 0
                }, 500, function() {
                    blind.css({
                        'position': 'static'
                    });
                    //hide the content of the page in the background
                    hideContent();
                    //scroll to the top
                    $(window).scrollTop(0);
                    //show the button
                    $('.blind-divider .open').fadeIn(100);
                    //reset width for being static
                    blind.css({
                        'width': ''
                    })

                    blind.trigger('open');
                });
            }

            function hideBlind() {
                $('.blind-divider').removeClass('open-on-desktop');

                //hide the credit of the background image.  this element is outside the the .blind-content-row div and won't be toggled with that div
                $('.fieldable-panels-pane-homepage-blind .credit').hide();

                blind.css({
                    'position': 'fixed',
                    'width': 'calc(100% - 65px'
                });
                //calculate the position of the blind top for animating TO
                var blindClosedY = $(window).height() - blindHeight;
                //show the content in the background
                showContent();
                //scroll to the bottom of the document in the background
                $(window).scrollTop($(document).height());

                //animate - setting bottom to 0 for correct positioning at the end
                blind.animate({
                    top: blindClosedY
                }, 500, function() {
                    //show/hide so tabindex only works when visible
                    $('.not-front .blind-content-row').hide();
                    //reset position and top values for closed blind
                    blind.css({
                        'top': 'auto',
                        'position': '',
                        'width': ''
                    });
                    //remove the extra margin since the blind is part of the flow again
                    $('#content-area').css({
                        'margin-bottom': '-=' + blindHeight
                    });
                    //show the button
                    $('.blind-divider .close').fadeIn(100);

                    blind.trigger('close');
                });

            }

            //this is apparently necessary to prevent issues when resizing the viewport to less than the tablet breakpoint, while the blind is open
            $(document).on('tablet', function() {
                if ($('.blind-divider').hasClass('open')) {
                    $('.blind-divider').removeClass('open');
                    $('.blind-divider').addClass('open-on-desktop');
                    showContent();
                    blind.css('top', '100%');
                    $('.blind-divider .open').hide();
                    $('.blind-divider .close').show();
                }

            });

            $(document).on('desktop', function() {
                if ($('.blind-divider').hasClass('open-on-desktop')) {
                    $('.blind-divider').removeClass('open-on-desktop');
                    $('.blind-divider').addClass('open');
                    hideContent();
                    blind.css('top', 0);
                    $('.blind-divider .open').show();
                    $('.blind-divider .close').hide();
                }
            });
        }
    }

})(jQuery);

(function($) {
    Drupal.behaviors.toggleFrontBlind = {
        attach: function(context) {
            if ($('body.front').length < 1) {
                return; //don't process if not on the front page
            }

            // For the frontpage explore blind
            $('.front .blind-divider .blind-toggle').attr('tabindex', '0');
            $('.front .row-explore .blind-top').hide(); //show/hide so tabindex only works when visible

            $('.front .blind-divider .blind-toggle').once().on('click keypress', function(e) {
                if (e.type != 'click' && !(e.type == 'keypress' && e.which == 13)) {
                    //was not click or enter
                    return;
                }
                $('.blind-divider .open, .blind-divider .close').toggle();
                $('.front .row-explore .blind-top').toggle(); //show/hide so tabindex only works when visible
                $('.blind-top').slideToggle(400, function() {
                    //add triggers for others to act on the Explore blind opening and closing
                    if ($('.blind-top:visible').length > 0) {
                        $('.front .blind-top').trigger('exploreBlind-opened');
                    } else {
                        $('.front .blind-top').trigger('exploreBlind-closed');
                    }
                });
            });
        }
    }
})(jQuery);;
Drupal.behaviors.sidebarLinks = {
    attach: function(context, settings) {
        if (jQuery('.field-name-field-related-links-list', '.field-name-field-related-links-sidebar-list, .field-name-field-sidebar-helpful-links-list, .field-name-field-sb-announcement-link-list', context).length < 1) {
            return; //don't process if these elements don't exist
        }

        var show_more = true;
        if (jQuery('.field-name-field-hide-show-more-link .field-item', '.field-name-field-related-links-sidebar-list, .field-name-field-sidebar-helpful-links-list, .field-name-field-sb-announcement-link-list', context).text() == '1') {
            show_more = false;
        }

        jQuery('.field-name-field-related-links-list', '.field-name-field-related-links-sidebar-list, .field-name-field-sidebar-helpful-links-list, .field-name-field-sb-announcement-link-list', context).once('add_show_more', function() {
            //remove any empty internal links.  paragraphs outputs the structure even if the node is unpublished.
            jQuery.each(jQuery('.paragraphs-item-link-internal', this), function(I, E) {
                var text = jQuery('.content', this).text();
                if (/^\s+$/.test(text)) {
                    jQuery(this).parent().remove();
                }
            });

            //set up show more/less buttons
            if (show_more && jQuery('> .field-items > .field-item', jQuery(this)).length > 3) {
                jQuery(this).parent().append('<div class="btn-container"><button class="links-show-more">Show more</button><button class="links-show-less">Show less</button></div>');
                jQuery(this).parent().addClass('collapsed');
            }
        });
    }
};



Drupal.behaviors.toggleSidebarLinks = {
    attach: function(context, settings) {
        jQuery('.links-show-more, .links-show-less', context).once('show_more', function() {
            jQuery(this).on('click', function() {
                jQuery(this).parent('.btn-container').parent().toggleClass('collapsed');
            });
        });
    }
};;