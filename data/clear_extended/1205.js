(function($) {
    if (!Drupal.si_baseline) {
        Drupal.si_baseline = {};
    }
    // var imageProcessed = false;
    // var nVer = navigator.appVersion;
    // var nAgt = navigator.userAgent;
    // var browserName  = navigator.appName;
    // var fullVersion  = ''+parseFloat(navigator.appVersion);
    // var majorVersion = parseInt(navigator.appVersion,10);
    // console.log(nVer);
    // console.log(nAgt);
    //alert(nVer +' ' + nAgt + ' ' +browserName + fullVersion);
    luminateExtend.init({
        apiKey: 'BFE9250F55E7096A8D12C01057',
        path: {
            nonsecure: 'http://go.si.edu/',
            secure: 'https://support.si.edu/site/'
        }
    });

    function setCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    Drupal.behaviors.siBaseline = {
        attach: function(context, settings) {
            var siBaseline = siBaseline || {},
                logo = $('.site-logo img', context),
                controller = new ScrollMagic.Controller();

            siBaseline = {
                pageInit: function() {
                    //set intrinsic height and width of image
                    logo.once('logoImage', function() {
                        if ($('html').hasClass('no-svgasimg') && typeof settings['siTheme'].logo_path !== 'undefined' && typeof logo !== 'undefined') {
                            logo.attr('src', settings['siTheme'].logo_path);
                        }
                    });
                    $('a', context).click(function(e) {
                        if ($(this).hasClass('prevent-link')) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    });

                    $('.root-facet-list .category', context).each(function() {
                        var $this = $(this);
                        $this.click(function() {
                            $this.toggleClass('expand');
                        });
                    });
                    if ($('.l-header #block-siedu-searches-siedu-searches-block-search-form', context).length != 0) {
                        new UISearch(document.getElementById('block-siedu-searches-siedu-searches-block-search-form'));
                    }
                    if ($('.page--colorbox .edan-content', context).length != 0) {
                        $('.page--colorbox .edan-content a', context).each(function() {
                            $(this).attr('target', '_blank');
                        });
                    }
                    if ($('.marquee', context).length != 0) {
                        $('.marquee').marquee({
                            //speed in milliseconds of the marquee
                            duration: 12000,
                            //gap in pixels between the tickers
                            gap: 32,
                            //time in milliseconds before the marquee will start animating
                            delayBeforeStart: 0,
                            //'left' or 'right'
                            direction: 'left',
                            // pauseOnHover: true,
                            //true or false - should the marquee be duplicated to show an effect of continues flow
                            duplicated: true
                        });
                    }
                    if ($('.tooltip-link', context).length != 0) {
                        $('.tooltip-link', context).click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                        });
                    }

                    $('#back-to-top', context).click(function(e) {
                        e.preventDefault();
                        var pos = $('header', context).position();
                        $('html,body', context).animate({
                            scrollTop: 0
                        });
                    });

                    this.shareIcons();
                    this.newsletter();
                    this.sideNav();
                    this.pageControls();
                    this.expandText();

                },
                expandText: function() {
                    if ($('.expand-text', context).length !== 0) {
                        var textWrapper = $('.expand-text', context),
                            textContent = $('.expand-text .group-main', context),
                            expandButton = $('.expand-text .btn.expand', context);
                        // console.log(textContent.height());
                        if (textContent.height() > 525) {
                            textWrapper.addClass('minimize');
                        }

                        expandButton.click(function() {
                            textWrapper.removeClass('minimize');
                            textWrapper.addClass('fullHeight');
                            expandButton.remove();
                        });

                    }


                },
                pageControls: function() {
                    var $offset = $(window).height();
                    if ($('body.page--colorbox', context).length === 0) {
                        new ScrollMagic.Scene({
                                offset: $offset - 100,
                                triggerHook: "onEnter",
                                reverse: true
                            }).setClassToggle('body', 'show-page-nav')
                            .addTo(controller);
                        if ($('footer').length != 0) {
                            var footerPos = $('footer').position();
                            footerPos = footerPos.top;
                            new ScrollMagic.Scene({
                                    offset: footerPos - $offset - $('footer').height(),
                                    //triggerElement: '.footer',
                                    reverse: true,
                                    triggerHook: "onEnter",
                                }).setClassToggle('body', 'show-page-nav-alt')
                                .addTo(controller);
                        }
                    }
                },
                shareIcons: function() {
                    // if ($('.share-icon', context).length != 0) {
                    $('.share-icon', context).click(function(e) {
                        var $this = $(this);
                        $this.toggleClass('active');
                        e.preventDefault();
                        e.stopPropagation();
                        $this.siblings('.social-media').toggleClass('active');
                    });
                    // }
                },
                sideNav: function() {
                    if ($('.wrapper--superfish .menu-block-wrapper', context).length != 0) {
                        // Apply Superfish.
                        $('.wrapper--superfish .menu-block-wrapper > ul.menu', context).once('superfish', function() {
                            var list = $(this),
                                options = Drupal.settings.superfish[1];
                            // menuParent = $('#superfish-1 > .active-trail', context).clone();
                            // if (menuParent.hasClass('menuparent')) {
                            //   menuParent.children('ul').remove();
                            // }
                            // list.attr('id', 'side-menu').addClass('sf-menu').prepend(menuParent);
                            list.attr('id', 'side-menu').addClass('sf-menu');
                            // Check if we are to apply the Supersubs plug-in to it.
                            if (options.plugins || false) {
                                if (options.plugins.supersubs || false) {
                                    list.supersubs(options.plugins.supersubs);
                                }
                            }

                            // Apply Superfish to the list.
                            list.superfish({
                                autoArrows: false,
                                dropShadows: false,
                                speed: 100
                            });

                            // Check if we are to apply any other plug-in to it.
                            if (options.plugins || false) {
                                if (options.plugins.touchscreen || false) {
                                    list.sftouchscreen(options.plugins.touchscreen);
                                }
                                if (options.plugins.smallscreen || false) {
                                    options.plugins.smallscreen.title = 'Section Menu';
                                    list.sfsmallscreen(options.plugins.smallscreen);
                                }
                                if (options.plugins.automaticwidth || false) {
                                    list.sfautomaticwidth();
                                }
                                if (options.plugins.supposition || false) {
                                    list.supposition();
                                }
                                if (options.plugins.bgiframe || false) {
                                    list.find('ul').bgIframe({
                                        opacity: false
                                    });
                                }
                            }
                        });
                    }
                },
                newsletter: function() {
                    $('#cons_email', context).focus(function() {
                        $(this).attr("placeholder", '');
                    });
                    $('#si-email-signup-form', context).submit(function(event) {
                        // cancels the form submission
                        event.preventDefault();

                        //do very rough check of submitted email address
                        var emailString = $('#cons_email', context).val(),
                            filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
                        if ($('input#denySubmit').val().length != 0) {
                            return false;
                        } else {
                            if (filter.test(emailString)) {
                                //Now submit the form

                                var survey_submit_callback = {
                                    error: function(data) {
                                        $('#msg-container', context).fadeOut().html(data.errorResponse.message).addClass('error').fadeIn();
                                        return false;
                                    },
                                    success: function(data) {
                                        // console.log(data);
                                        $('.form-details', context).fadeOut();

                                        $('#msg-container', context).fadeOut().removeClass('error').html('Thanks for signing up!').fadeIn();
                                        $('#signup-footer-container', context).fadeOut();
                                    }
                                };

                                luminateExtend.api.request({
                                    api: 'survey',
                                    callback: survey_submit_callback,
                                    requiresAuth: true,
                                    data: 'method=submitSurvey&v=1.0&center_id=1042&survey_id=7760&cons_email=' + emailString + '&cons_email_opt_in=true'
                                });

                            } else {
                                $('#msg-container', context).fadeOut().html('Please enter a valid email').addClass('error').fadeIn();
                                return false;
                            }
                        }
                    });
                },
                setLayout: function() {
                    var $width = $(window).width();
                    //  console.log($('.colorbox-autoload', context).length != 0);
                    if ($('.colorbox-autoload', context).length !== 0) {
                        var autoloadID = $('.colorbox-autoload', context).attr('id'),
                            siBoxLoaded = getCookie('siBoxLoaded-' + autoloadID);
                        if (siBoxLoaded === null) {
                            this.colorBoxInit($width, autoloadID);
                            this.colorBoxLoad();
                        }
                    }

                },
                colorBoxLoad: function() {
                    //load colorbox on page load
                    $(document).ready(function() {
                        $('.colorbox-autoload', context).once('colorbox-autoload-loaded', function() {
                            $('.colorbox-autoload', context).eq(0).click();
                        });
                    });

                },
                colorBoxInit: function(viewport, autoloadID) {
                    $.urlParams = function(url) {
                        var p = {},
                            e,
                            a = /\+/g, // Regex for replacing addition symbol with a space.
                            r = /([^&=]+)=?([^&]*)/g,
                            d = function(s) {
                                return decodeURIComponent(s.replace(a, ' '));
                            },
                            q = url.split('?');
                        while (e = r.exec(q[1])) {
                            e[1] = d(e[1]);
                            e[2] = d(e[2]);
                            switch (e[2].toLowerCase()) {
                                case 'true':
                                case 'yes':
                                    e[2] = true;
                                    break;
                                case 'false':
                                case 'no':
                                    e[2] = false;
                                    break;
                            }
                            if (e[1] === 'width') {
                                e[1] = 'innerWidth';
                            }
                            if (e[1] === 'height') {
                                e[1] = 'innerHeight';
                            }
                            p[e[1]] = e[2];
                        }
                        return p;
                    };
                    $('.colorbox-autoload', context)
                        .once('init-colorbox-autoload', function() {
                            var params = $.urlParams($(this).attr('href')),
                                $width = params['innerWidth'].replace('px', ''),
                                $height = params['innerHeight'].replace('px', '');
                            $width = Number($width);
                            $height = Number($height);

                            // console.log(params);
                            // console.log(viewport);
                            //set the maxHeight and maxWidth
                            if (viewport > $width) {
                                if ('innerHeight' in params) {
                                    params['maxHeight'] = $height + 68 + 'px';
                                    params['innerHeight'] = $height + 68 + 'px';
                                }
                                if ('innerWidth' in params) {
                                    params['maxWidth'] = params['innerWidth'];
                                }
                            } else {
                                if ('innerHeight' in params) {
                                    $height = (viewport / $width) * $height;
                                    $height = Math.round($height);
                                    params['maxHeight'] = $height + 36 + 'px';
                                    params['innerHeight'] = $height + 36 + 'px';
                                }
                                if ('innerWidth' in params) {
                                    console.log(viewport / $width);
                                    params['maxWidth'] = viewport > $width ? params['innerWidth'] : (viewport * .85) + 'px';
                                }
                            }

                            // console.log(params);


                            $(this).colorbox($.extend({}, settings.colorbox, params));
                            setCookie('siBoxLoaded-' + autoloadID, 1);
                        });
                }

            };
            siBaseline.pageInit();
            // Generic function that runs on window resize.
            function resizeStuff() {
                siBaseline.setLayout();
            }

            // Runs function once on window resize.
            var TO = false;
            $(window).resize(function() {
                if (TO !== false) {
                    clearTimeout(TO);
                }

                // 200 is time in miliseconds.
                TO = setTimeout(resizeStuff, 100);
            }).resize();

            // trigger colorbox close
            $(".si-colorbox-close", context).click(function(e) {
                e.preventDefault();
                parent.jQuery.fn.colorbox.close();
            });
        }
    };
})(jQuery);