;
(function($) {

    'use strict'


    var testimonialCarousel = function() {
        if ($().owlCarousel) {
            $('.home-testimonials .testimonials-group').owlCarousel({
                navigation: true,
                navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                pagination: false,
                responsive: true,
                items: 1,
                itemsDesktop: [3000, 1],
                itemsDesktopSmall: [1400, 1],
                itemsTablet: [970, 1],
                itemsTabletSmall: [600, 1],
                itemsMobile: [360, 1],
                touchDrag: true,
                mouseDrag: true,
                autoHeight: true,
                autoPlay: 7000,
                slideSpeed: 1000,
            });
        }
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if (matchMedia('only screen and (max-width: 1024px)').matches) {
                currMenuType = 'mobile';
            }

            if (currMenuType !== menuType) {
                menuType = currMenuType;

                if (currMenuType === 'mobile') {
                    var $mobileMenu = $('#site-navigation').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header').find('.header-wrap').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.col-md-10').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    }

    var headerSearch = function() {
        $('.blog-categories .fa').on('click', function() {
            $('.header-search').slideToggle(400);
        });
    }

    var commentsFilter = function() {

        $('.comment-metadata time:contains(at)').filter(function() {
            return $(this).children().length === 0;
        }).text(function(index, text) {
            return text.replace(/at/g, '');
        });

    }

    var responsiveVideo = function() {
        $("body").fitVids();
    };

    var removeTargetAstrid = function() {
        $('.postid-325145 .premium-button').removeAttr('target');
    };

    var removesnippetsArchive = function() {
        var url = window.location.href;

        if (url != '//athemes.com/snippets/') {
            $('.snippets-theme').slideDown();
        }
    };

    var insertBenefits = function() {
        $('<div class="item-benefits"><ul><li>Instant download</li><li>Regular theme updates</li><li>Fast support from our friendly team</li><li>Unlimited domain usage</li></ul></div>').insertAfter('.edd_checkout_cart_item_title');
    };

    var replaceRemoveLink = function() {
        $('.edd_cart_remove_item_btn').html('<img src="//athemes.com/wp-content/uploads/close-icon.png">').css('visibility', 'visible');
    };

    var smoothCarousel = function() {
        $('.carousel').carousel({
            interval: false
        }).on('slide.bs.carousel', function(e) {
            var nextH = $(e.relatedTarget).height();
            $(this).find('.active.item').parent().animate({
                height: nextH
            }, 500);
        });
    };


    var gatewayRadio = function() {
        $(document).ready(function() {
            $('.option1-check').click(function() {
                $('.option1-check').parents('#edd_payment_mode_select').find('.option2-check').removeClass('check-box-active');
                $(this).toggleClass('check-box-active');
            });
            $('.option2-check').click(function() {
                $('.option2-check').parents('#edd_payment_mode_select').find('.option1-check').removeClass('check-box-active');
                $(this).toggleClass('check-box-active');
            });
        });
    };

    var buySmoothScroll = function() {
        $(document).ready(function() {
            $('.theme-buttons .buy-button').on('click', function(e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 900, 'linear', function() {
                    window.location.hash = target;
                });
            });
        });
    };

    var dashboardTabs = function() {
        $(document).ready(function() {
            $('.toggle-purchase-history').click(function() {
                $(this).addClass('button');
                $(this).siblings().removeClass('button');
                $('.athemes-profile-editor').fadeOut();
                $('.athemes-download-history').fadeOut();
                $('.athemes-purchase-history').fadeIn();
                $('.athemes-affiliate-area').fadeOut();
            });
            $('.toggle-download-history').click(function() {
                $(this).addClass('button');
                $(this).siblings().removeClass('button');
                $('.athemes-profile-editor').fadeOut();
                $('.athemes-download-history').fadeIn();
                $('.athemes-purchase-history').fadeOut();
                $('.athemes-affiliate-area').fadeOut();
            });
            $('.toggle-profile-editor').click(function() {
                $(this).addClass('button');
                $(this).siblings().removeClass('button');
                $('.athemes-profile-editor').fadeIn();
                $('.athemes-download-history').fadeOut();
                $('.athemes-purchase-history').fadeOut();
                $('.athemes-affiliate-area').fadeOut();
            });
            $('.toggle-affiliate-area').click(function() {
                $(this).addClass('button');
                $(this).siblings().removeClass('button');
                $('.athemes-profile-editor').fadeOut();
                $('.athemes-download-history').fadeOut();
                $('.athemes-purchase-history').fadeOut();
                $('.athemes-affiliate-area').fadeIn();
            });
        });
    };

    var disableGravButton = function() {
        $("#gform_submit_button_10").prop('disabled', true);
    };


    var freeDirectDownloads = function() {
        $('.theme-buttons .edd-free-download').on('click', function(e) {
            var theID = $('.theme-buttons .edd-free-download').data('download-id');
            var themePage = window.location.href;
            var theURL = themePage + '?edd_action=free_downloads_process_download&download_id=' + theID + '&price_ids=#edd-free-download-modal';

            var link = '<a href="' + theURL + '">No thanks, I just want to download the files</a>';

            $('#edd-free-downloads-modal').append(link);

        });
    };

    var snippetFilter = function() {

        $(".snippets-list li a").contents().unwrap();

        $("#select-snippet_cats").change(function() {

            var $dropdown = $(this);

            var key = $dropdown.val();

            var data = {
                "0": "0,preloader,header,posts/pages,footer,widgets,builder,woocommerce",
                "alizee": "0,posts/pages",
                "alizee-pro": "0,posts/pages",
                "astrid": "0,preloader,header,posts/pages,builder,woocommerce",
                "astrid-pro": "0,preloader,header,posts/pages,builder,woocommerce",
                "moesia": "0,posts/pages,builder",
                "moesia-pro": "0,posts/pages,builder,woocommerce",
                "perth": "0,preloader,posts/pages,builder",
                "perth-pro": "0,preloader,header,posts/pages,builder,woocommerce",
                "rocked": "0,preloader,posts/pages,builder",
                "rocked-pro": "0,preloader,posts/pages,builder,woocommerce",
                "sydney": "0,preloader,header,posts/pages,builder",
                "sydney-pro": "0,preloader,header,posts/pages,builder,woocommerce",
                "theshop": "0,preloader,posts/pages",
                "west": "0,posts/pages",
                "west-pro": "0,header,posts/pages,woocommerce",
            }

            switch (key) {
                case '0':
                    var vals = data["0"].split(",");
                    break;
                case 'alizee':
                    var vals = data.alizee.split(",");
                    break;
                case 'alizee-pro':
                    var vals = data["alizee-pro"].split(",");
                    break;
                case 'astrid':
                    var vals = data.astrid.split(",");
                    break;
                case 'astrid-pro':
                    var vals = data["astrid-pro"].split(",");
                    break;
                case 'moesia':
                    var vals = data.moesia.split(",");
                    break;
                case 'moesia-pro':
                    var vals = data["moesia-pro"].split(",");
                    break;
                case 'perth':
                    var vals = data.perth.split(",");
                    break;
                case 'perth-pro':
                    var vals = data["perth-pro"].split(",");
                    break;
                case 'rocked':
                    var vals = data.rocked.split(",");
                    break;
                case 'rocked-pro':
                    var vals = data["rocked-pro"].split(",");
                    break;
                case 'sydney':
                    var vals = data.sydney.split(",");
                    break;
                case 'sydney-pro':
                    var vals = data["sydney-pro"].split(",");
                    break;
                case 'theshop':
                    var vals = data.theshop.split(",");
                    break;
                case 'west':
                    var vals = data.west.split(",");
                    break;
                case 'west-pro':
                    var vals = data["west-pro"].split(",");
                    break;
                default:
                    return;
            }

            var $secondChoice = $("#select-snippet_types");
            $secondChoice.empty();
            $.each(vals, function(index, value) {
                if (value !== '0') {
                    $secondChoice.append("<option value='" + value + "'>" + value + "</option>");
                } else {
                    $secondChoice.append("<option value='" + value + "'>All items</option>");
                }
            });
        }).trigger('change');

    };

    var airiProPage = function() {
        $('.postid-1653157').find('.pricing-table').first().find('.feature-title').text('SINGLE PLUGIN');
        //$( '.postid-1653157' ).find( '.pricing-table' ).first().find( '.pricing-header > span:last-of-type' ).text( '12 months access to this plugin' );

        //Airi pro and free - change DEMO button text to DEMOS
        $('.postid-1653157, .postid-1606469').find('.demo-button-theme').text('DEMOS');

        //Add comparison table text and link
        $('.postid-1653157').find('#features').append('<div class="airi-comp-link">For a full breakdown of the differences between Airi and Airi Pro, <a href="https://docs.athemes.com/article/267-differences-between-airi-and-airi-pro" target="_blank">click here</a></div>');

        //Add comparison table text and link -SP
        $('.postid-325134').find('#features').append('<div class="airi-comp-link">For a full breakdown of the differences between Sydney and Sydney Pro, <a href="https://docs.athemes.com/article/226-differences-between-sydney-and-sydney-pro" target="_blank">click here</a></div>');


    };

    // Dom Ready
    $(function() {
        testimonialCarousel();
        //isotopeFilters();
        responsiveMenu();
        headerSearch();
        commentsFilter();
        responsiveVideo();
        removeTargetAstrid();
        snippetFilter();
        insertBenefits();
        replaceRemoveLink();
        removesnippetsArchive();
        smoothCarousel();
        gatewayRadio();
        dashboardTabs();
        disableGravButton();
        buySmoothScroll();
        freeDirectDownloads();
        airiProPage();
    });

})(jQuery);


jQuery(document).ready(function($) {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on("load resize scroll", function() {
        $(".ai-showcase_block").each(function() {
            if ($(this).isInViewport() && !$(this).hasClass("hidden")) {
                console.log("visible");
                $(this).show().addClass("animate");
            }
        });
    });

    $(".ai-showcase_filter li a").click(function(e) {
        // prevent default action
        e.preventDefault();
        // Get the data-filter value of the clicked item
        var ourClass = $(this).attr("data-filter");

        if (!$(this).hasClass("ai-active")) {
            var ourClass = $(this).attr("data-filter");
        } else {
            return;
        }

        // Reset the active class on all the links
        $(".ai-showcase_filter li a").removeClass("ai-active");
        // Update the active state on the clicked link
        $(this).addClass("ai-active");

        if (ourClass == "all") {
            // When all is selected - show all demo items
            $(".ai-showcase").children(".ai-showcase_block").hide().removeClass("animate").addClass("hidden");
            setTimeout(function() {
                $(".ai-showcase").children(".ai-showcase_block").show().addClass("animate").removeClass("hidden");
            }, 50);
        } else {
            // Hide all elements first
            $(".ai-showcase").children(".ai-showcase_block").hide().removeClass("animate").addClass("hidden");
            // Then how all elements that do share ourClass
            setTimeout(function() {
                $(".ai-showcase").children(".ai-showcase_block.ai-" + ourClass).show().addClass("animate").removeClass("hidden");
            }, 50);
        }
        return false;
    });

});