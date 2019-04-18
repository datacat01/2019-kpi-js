/**
 * @file
 * JS to hide search options and show on focus.
 */
;
(function($, D) {
    D.behaviors.psu_search = {
        attach: function(context, settings) {
            /**
             * This section adds the Google CSE Javascript, and sends search input to
             * the GSE search script.
             */

            // The Google CSE standard code, just changed to pick up the SE if
            // ("cx") from Drupal.settings.
            var cx = Drupal.settings.googleCSE.cx;
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
                '//cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);

            /**
             * This section
             * @type {*|HTMLElement}
             */
            var form = $('#block-psu-search-psu-search-header .form');
            var expandButton = $('#block-psu-search-psu-search-header .expand-form');
            var textBox = $('#block-psu-search-psu-search-header .form-item-keys input');
            var toolbar = $('#toolbar');
            var jumpMenu = $('#edit-jump');
            var jumpMenuButton = $('#edit-go');
            var $summit = $("#psu-search-header-block-form .form-submit");
            var $searchType = $("#psu-search-header-block-form .search-type .form-item-search-type input");

            if (toolbar.length !== 0) {
                form.css('top', toolbar.height());
            }

            jumpMenu.focus(function(e) {
                jumpMenu.next().css("outline", "dotted 2px #666");
            });

            jumpMenu.focusout(function(e) {
                jumpMenu.next().css("outline", "0");
            });


            jumpMenuButton.focus(function(e) {
                jumpMenuButton.css("outline", "dotted 2px #666");
            });

            jumpMenuButton.focusout(function(e) {
                jumpMenuButton.css("outline", "0");
            });

            /* Search Type Form */
            textBox.focus(function(e) {
                $('#block-psu-search-psu-search-header .search-type').show();
            });
            /* Hide Type Form if some element form lost focus. */
            $summit.focusout(function(e) {
                $('#block-psu-search-psu-search-header .search-type').hide();
            });

            $(window).click(function(e) {
                if (!isNews()) {
                    if (getPageWidth() > 740) {
                        $('#block-psu-search-psu-search-header .search-type').hide();
                    }
                } else {
                    if (getPageWidth() >= 980) {
                        $('#block-psu-search-psu-search-header .search-type').hide();
                        // Remove active class on the search button itself.
                        $('#toggle-news-search').removeClass('active');
                    }
                }
            });
            $('#block-psu-search-psu-search-header').click(function(e) {
                e.stopPropagation();
            });

            /* Mobile form & button */
            $('html').click(function() {
                if (!isNews()) {
                    if (getPageWidth() < 740) {
                        contractForm();
                    }
                } else {
                    if (getPageWidth() < 980) {
                        // @TODO: this conflicts with hamburger behavior. For now, only the
                        // search button opens/closes the search, not other areas of the screen.
                        // contractForm();
                    }
                }
            });
            expandButton.click(function(e) {
                if (!isNews()) {
                    if (getPageWidth() < 740) {
                        if (form.is(':visible')) {
                            contractForm();
                        } else {
                            expandForm();
                        }
                    }
                } else {
                    if (getPageWidth() < 980) {
                        if (form.is(':visible')) {
                            contractForm();
                            $('#toggle-news-search').removeClass('active');
                        } else {
                            expandForm();
                            $('#toggle-news-search').addClass('active');
                        }
                    }
                }
            });

            var oldSize = getPageWidth();
            //Show / hide form between breakpoints
            $(window).resize(function() {

                var newSize = getPageWidth();
                if (newSize >= 980) {
                    form.show();
                    $('#page').css('margin-top', 0);
                    // Remove hover state on the actual search button.
                    $('#toggle-news-search').blur();
                }
                // Only hide on downsize, not on any resize at mobile
                else if (oldSize >= 980) {
                    form.hide();
                    $('#page').css('margin-top', 0);
                    // Remove active class on the search button itself.
                    $('#toggle-news-search').removeClass('active');
                    // Blur the link so it is not highlighted.
                    $('#toggle-news-search').blur();
                }
                oldSize = $(window).width();
            });

            function expandForm() {
                form.show();
                if (!isNews()) {
                    $('#page').css('margin-top', form.height() + 'px');
                }
                textBox.focus();
            }

            function contractForm() {
                form.hide();
                $('#page').css('margin-top', 0);
                textBox.blur();
                // Remove active class on the search button itself (if applicable).
                $('#toggle-news-search').removeClass('active');
                $('#toggle-news-search').blur();
            }

            function isNews() {
                return window.location.hostname.split(".")[0].indexOf('news') >= 0;
            }
        }
    };
    /**
     * Browser-agnostic function for getting the page width.
     */
    function getPageWidth() {
        //different browsers calculate page width differently
        if (navigator.userAgent.indexOf("WebKit") != -1) {
            var width = $(window).width();
        } else {
            //webkit
            var width = window.innerWidth;
        }

        return width;
    }
})(jQuery, Drupal);;
(function($) {

    // Allow for the workbench info to hide in the toolbar unless expanded.
    Drupal.behaviors.workbenchInformation = {
        attach: function(context, settings) {
            var workbenchContainer = $('#toolbar .workbench-information');
            workbenchContainer.find('a.expand-workbench-information').click(function() {
                $(this).toggleClass('active');
                workbenchContainer.find('.workbench-info-block').slideToggle(300);

                return false;
            });
        }
    };

}(jQuery));;