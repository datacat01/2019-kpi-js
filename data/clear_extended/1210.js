(function($) {
    if (!Drupal.siSearch) {
        Drupal.siSearch = {};
    }
    var hasRun = false;

    Drupal.siSearch.queryURL = function(url) {
        var parser = document.createElement('a'),
            newQuery = [],
            values = {};

        parser.href = url;

        var query = parser.search.substring(1),
            params = query.split("&");

        for (var i = 0; i < params.length; i++) {
            var pair = params[i].split("=");
            if (pair[0] === 'page') {
                var page = decodeURI(pair[1]);
                page = parseInt(page);
                newPage = page + 1;
                newQuery[i] = 'page=' + newPage;
            } else {
                newQuery[i] = pair[0] + '=' + pair[1];
            }

        }
        var query = newQuery.join('&'),
            newUrl = url.split('?');
        newUrl = newUrl[0] + '?' + query;
        values.url = newUrl;
        values.page = newPage;
        return newUrl;
    }


    Drupal.siSearch.pager = function(masonry) {
        var nextSelector = $('.search-results-container .pager__item--next a'),
            lastSelector = $('.search-results-container .pager__item--last a').attr('href'),
            lastPage = false;
        if (nextSelector.length && hasRun === false) {
            nextSelector.text('Show More');

            nextSelector.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                var url = $(this).attr('href'),
                    newSelector = $(this),
                    id = $(this).parents('.search-results-container').attr('id'),
                    Container = $('#' + id + ' .search-results'),
                    item = '#' + id + ' .search-results li',
                    viewport = $(window).width();

                if ($('#placeholder .loading').length === 0) {
                    $('.search-results-container #placeholder').append('<div class="loading"></div>');
                }

                if (url === lastSelector) {
                    lastPage = true;
                }
                //console.log(lastPage);
                // console.log(url);
                $.ajax({
                    // type:"POST",
                    url: url,
                    success: function(data) {
                        var $newElements = $(item, data),
                            newUrl = Drupal.siSearch.queryURL(url);
                        newSelector.attr('href', newUrl);

                        // console.log($newElements);
                        Container.append($newElements);
                        $('.loading').remove();
                        $newElements.imagesLoaded(function() {
                                if (masonry === true) {
                                    Container.masonry('appended', $newElements);
                                }
                                Drupal.attachBehaviors(Container);

                            })
                            .progress(function(instance, image) {
                                var $this = $(image.img);
                                if (image.isLoaded) {
                                    $this.addClass('complete');
                                    Drupal.siSearch.processImage($this, viewport)
                                } else {
                                    $this.addClass('hide').parents('.node--teaser').removeClass('has-media');
                                }
                            });

                    }
                });
                if (lastPage === true) {
                    nextSelector.hide();
                }
            });
            hasRun = true;
        }
    };


    Drupal.siSearch.processImage = function(image, $window) {
        var imgWidth = image.width(),
            imgHeight = image.height(),
            $class = imgWidth > imgHeight ? 'landscape' : 'portrait',
            parentW = image.parent().width(),
            parentH = image.parent().height();
        //expanded = typeof expanded === 'undefined' ? false : expanded;

        // if(image.hasClass('exhibit-image') && $window >= 540) {
        //
        //   image.css('position', 'static');
        //   if(expanded && $window > 979) {
        //
        //     if($window > 1379) {
        //       parentW = 1.35* parentW;
        //     }
        //     else {
        //       parentW = 1.53 * parentW;
        //     }
        //   }
        //
        //   if (imgHeight < parentH) {
        //     imgWidth = Math.round((parentH/imgHeight) * imgWidth);
        //     imgHeight = parentH;
        //     $class += ' stretched';
        //
        //   }
        //   if (imgWidth <  parentW) {
        //     imgWidth = parentW;
        //     imgHeight = Math.round((parentW/imgWidth) * imgHeight);
        //     $class += ' stretched';
        //   }
        //   $left = imgWidth > parentW  ? (parentW-imgWidth)/2 : 0;
        //   $top = imgHeight > parentH ? (parentH-imgHeight)/2 : 0;
        //
        //   if ($left < 0 || $top < 0) {
        //     image.css('position', 'absolute').css('left', $left + 'px').css('top', $top +'px');
        //
        //   }
        //   image.addClass($class);
        //   image.css('width', imgWidth +'px');
        //
        //   // console.log(image.attr('src'));
        //   // console.log(parentW +'x'+ parentH);
        //   // console.log(imgWidth +'x'+ imgHeight);
        //   // console.log(image.prop('naturalWidth') +'x'+image.prop('naturalHeight'));
        //   // console.log($left + ' ' + $top);
        // }
        image.attr('height', imgHeight).attr('width', imgWidth);



    };

    Drupal.behaviors.siSearch = {
        attach: function(context, settings) {
            var $window = $(window).width()
            $content = $('.l-content-wrapper', context);
            siSearch = {
                setLayout: function() {
                    var viewport = ($(window).width());
                    if ($('.masonry-grid', context).length !== 0) {
                        var $grid = $('.masonry-grid', context);
                        Drupal.siSearch.processImage($grid);
                        if (viewport > 500) {
                            $grid.once('masonry', function() {
                                //Masonry + ImagesLoaded
                                $content.imagesLoaded(function() {
                                        $grid.masonry({
                                            // selector for entry content
                                            itemSelector: '.grid-item',
                                            columnWidth: '.grid-item',
                                            percentPosition: true
                                        });
                                    })
                                    .progress(function(instance, image) {
                                        var $image = $(image.img);
                                        if (image.isLoaded) {
                                            $image.addClass('complete');
                                            Drupal.siSearch.processImage($image, viewport);
                                        } else {
                                            $image.addClass('hide').parents('.node--teaser').removeClass('has-media');
                                        }
                                    });

                                Drupal.siSearch.pager(true);
                            });

                        } else {
                            Drupal.siSearch.pager(false);
                        }
                    } else if ($content.length !== 0) {
                        $content.once('imagesLoaded', function() {
                            $(this).imagesLoaded().progress(function(instance, image) {
                                var $image = $(image.img);

                                if (image.isLoaded) {
                                    $image.addClass('complete');
                                    Drupal.siSearch.processImage($image, viewport);
                                } else {
                                    $(image.img).addClass('hide').parents('.node--teaser').removeClass('has-media');
                                }
                            });
                        });

                        if ($content.hasClass('imagesLoaded-processed')) {
                            $('img', $content).each(function() {
                                Drupal.siSearch.processImage($(this), $window);
                            });
                        }
                        if ($('.search-results-container', context).length) {
                            Drupal.siSearch.pager(false);
                        }
                    }


                },
                init: function() {
                    $('.tab-title a', context).click(function(e) {
                        var id = $(this).attr('href');

                        $('.tab-wrapper ' + id + ' img', context).imagesLoaded().progress(function(instance, image) {
                            var $image = $(image.img);
                            if (image.isLoaded) {
                                $image.addClass('complete');
                                Drupal.siSearch.processImage($image, $window);
                            } else {
                                $(image.img).addClass('hide').parents('.node--teaser').removeClass('has-media');
                            }
                        })

                    });
                    if ($('.search-wrapper', context).length) {
                        $('.filter-title a', context).click(function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            var wrapper = $(this).parents('.search-wrapper'),
                                expanded = wrapper.hasClass('expanded');
                            $('.l-content-wrapper img', context).each(function() {
                                Drupal.siSearch.processImage($(this), $window, expanded);
                            })

                            wrapper.toggleClass('expanded');

                        });

                    }

                    // this.setLayout();
                }
            };

            siSearch.init();


            // Generic function that runs on window resize.
            function resizeStuff() {
                siSearch.setLayout();
            }

            // Runs function once on window resize.
            var TO = false;
            $(window).resize(function() {
                if (TO !== false) {
                    clearTimeout(TO);
                }

                // 200 is time in miliseconds.
                TO = setTimeout(resizeStuff, 400);
            }).resize();

        }
    };


})(jQuery);