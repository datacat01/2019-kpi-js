(function($) {
    $(document).ready(function() {

        function get_path_array() {
            return window.location.pathname.split('/').filter(function(el) {
                return el.length != 0
            });
        }

        var post_id = $('#post_ID').val(),
            loader_html = '<div class="la-ball-pulse la-dark la-sm"><div></div><div></div><div></div></div>',
            $page_nav = $('#page-nav'),
            $popular_now_widget = $('.popular-now'),
            $ad_slot_m10 = $('#sidebar .htl-ad-wrapper.ad-unit-m1'),
            $ad_slot_m20 = $('#sidebar .htl-ad-wrapper.ad-unit-m2'),
            $ad_slot_m10_mobile = $('.ad-div-m10-mobile-wrapper'),
            $ad_slot_m20_mobile = $('.ad-div-m20-mobile-wrapper'),
            $article_widgets_sticky = $('.widget-area.sticky-container'),
            $article_widgets_sticky_1 = null;

        if ($article_widgets_sticky.length > 0) {
            $article_widgets_sticky_1 = $($article_widgets_sticky[0]);
        }

        $page_nav.hide();

        var $load_next_page_wrapper = $('#load-next-page-wrapper'),
            $load_next_page_btn = $load_next_page_wrapper.find('#load-next-page-btn');


        if ($load_next_page_wrapper.length > 0) {

            var $post_paragraphs = $('.post-text').children().filter(function() {
                return $(this).html().trim() !== '';
            });

            if ($post_paragraphs.length > 5) {
                $ad_slot_m20_mobile.insertAfter($post_paragraphs[6]);
            } else {
                $ad_slot_m20_mobile.insertBefore($load_next_page_wrapper);
            }
        }

        $load_next_page_btn.on('click', function(ev) {
            ev.preventDefault();

            // var scroll_position = $(window).scrollTop() - ($ad_slot_m10_mobile.outerHeight(true) + $ad_slot_m20_mobile.outerHeight(true) );

            $load_next_page_btn.html(loader_html).attr('disabled', 'disabled');

            $.post(load_next_page.ajax_url, {
                action: 'load_next_page',
                nonce: load_next_page.nonce,
                post_id: load_next_page.post_id,
                next_page_index: load_next_page.next_page_index
            }, function(data) {

                load_next_page.is_last_page = data.is_last_page;
                load_next_page.next_page_index++;
                load_next_page.current_page_index++;

                $($.parseHTML('<div id="page-' + load_next_page.current_page_index + '"><p>' + data.next_page.split('\n\r').join('<br/><br/>') + '</p></div>', true)).insertBefore($load_next_page_wrapper);

                if (data.is_last_page) {
                    $load_next_page_wrapper.hide();
                    load_next_page.next_page_index = null;
                }

                if (typeof PARSELY !== 'undefined' && PARSELY.beacon) {
                    PARSELY.beacon.trackPageView({
                        url: location.pathname,
                        urlref: window.location.href
                    });
                }

                if (ga && ga.getAll) {
                    var trackerName = ga.getAll()[0].get('name');

                    ga(trackerName + '.send', 'pageview', {
                        'load_more': load_next_page.current_page_index
                    });

                    ga(trackerName + '.send', 'event', 'Pagination', 'Next Page Click', 'Page ' + load_next_page.current_page_index);
                }

                var chartbeat_tracking = setInterval(function() {
                    try {
                        pSUPERFLY.virtualPage({
                            path: window.location.pathname,
                            title: $(".entry-title").text()
                        });
                        clearInterval(chartbeat_tracking);
                    } catch (err) {
                        /* noop */ }
                }, 1000);

                var original_btn_text = $load_next_page_btn.data('btn-text');

                $load_next_page_btn.html(original_btn_text).removeAttr('disabled');

                $popular_now_widget.parent().insertBefore($ad_slot_m20.parent());
                $ad_slot_m10.parent().insertBefore($popular_now_widget.parent());

                var $new_page_paragraphs = $('#page-' + load_next_page.current_page_index).children().filter(function() {
                    return $(this).html().trim() !== '';
                });

                if ($new_page_paragraphs.length > 2) {
                    var scroll_position = $(window).scrollTop();

                    $new_page_paragraphs.each(function(i) {
                        if (i === 2) {
                            scroll_position -= $('#ad-div-m10').outerHeight(true) + 94;
                            $ad_slot_m10_mobile.insertAfter($(this));
                        }

                        if (i === 5) {
                            scroll_position -= $('#ad-div-m20').outerHeight(true) + 94;
                            $ad_slot_m20_mobile.insertAfter($(this));
                        }

                        // if ($(window).width() < 681 && i === 8){
                        //     $ad_slot_m10.insertAfter( $(this) );
                        // }

                        // if ($(window).width() < 681 && i === 11){
                        //     $ad_slot_m20.insertAfter( $(this) );
                        // }

                    });

                    if ($(window).width() < 681) {
                        $(window).scrollTop(scroll_position);
                    }

                } else {
                    $ad_slot_m20_mobile.appendTo($('#page-' + load_next_page.current_page_index));
                }

                $('.sticky.widget').each(function(i) {
                    var $sticky_widget = $(this);
                    if ($sticky_widget.is(':empty')) {
                        $sticky_widget.remove();
                    }
                });

                if ($article_widgets_sticky_1 && $article_widgets_sticky_1.find('.sticky-widgets').find('.sticky.widget').length === 0) {
                    $article_widgets_sticky_1.remove();
                }

                // $(window).scrollTop(scroll_position);

                if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
                    /* Initialize Instagram embeds. */
                    window.instgrm.Embeds.process();
                }

                if ($(window).width() > 1039) {
                    $('.sticky-widgets').css({
                        'position': 'fixed',
                        'top': 70
                    });
                }

                var path_split = get_path_array();

                if (path_split.length > 2) {
                    path_split.pop();
                }

                path_split.push(load_next_page.current_page_index);
                var new_path = path_split.join('/');

                // history.pushState(null, null, '/' + new_path + '/');

                try {
                    googletag.pubads().refresh(window.ad_refresh);
                } catch (err) {
                    /* noop */ }
            });

            return false;
        });

    });
})(jQuery);