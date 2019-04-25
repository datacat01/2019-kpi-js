/**
 * Custom js code for NAI.
 *
 * Participating network logo fade.
 *
 * Egon Hyszczak 4/2/2012
 */

(function($) {
    // Grab all image locations.
    var images = [];
    var index;

    $(document).ready(function() {
        // Participating networks fade.

        //var count = $('div#block-views-participating-networks-block-1 ul li');
        //console.log(count.length);
        $('div#block-views-participating-networks-block-1 ul li:gt(4), #node-15 .view-participating-networks ul li:gt(4)').css('display', 'none');

        $('div#block-views-participating-networks-block-1 ul li:gt(5), #node-15 .view-participating-networks ul li:gt(4)').find('img').each(function() {
            images.push({
                'src': $(this).attr('src'),
                'width': $(this).attr('width'),
                'height': $(this).attr('height')
            });
        });

        index = images.length;

        setInterval(function() {
            if (images.length > 0) {
                //fade_image($('div#block-views-participating_networks-block_1 ul li.views-row-'+random_int(1, 5)).find('img'));
                fade_image($('div.view-participating-networks ul li.views-row-' + random_int(1, 5)).find('img'));
            }
        }, 6000);
    });

    function random_int(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    // A random image is faded.
    function fade_image(img) {
        // img is a selector like: "div.view-participating-networks ul li.views-row-3 img"

        var x = images[index - 1]; // Always the same image? 1.

        var current = [];
        var skip = false;

        //console.log('fading image out... array length='+images.length+' img.src='+img.attr('src'));
        // Get list of currently displayed images
        for (var z = 0; z <= 4; z++) {
            current[z] = $('div.view-participating-networks ul li.views-row-' + (z + 1)).find('img').attr('src');
        }

        if (current.indexOf(x.src) != -1) {
            skip = true;
        }
        //console.log(skip);
        if (skip == false) {
            $(img).fadeTo('slow', 0.0, function() {
                $(img).attr('src', x.src);
                $(img).attr('width', $(img).attr('naturalWidth'));
                //$(img).removeAttr('width');
                if ($.browser.msie == true) {
                    $(img).css('background-color', '#efefef');
                    $(img).removeAttr('height');
                } else {
                    $(img).attr('height', x.height);
                }
                //console.log("in: "+x.src);
                $(img).fadeTo('slow', 1.0);
            });
        }

        if (index == 1) {
            // Reset index.
            index = images.length;
        } else {
            // Decrement index.
            index = index - 1;
        }
    }
})(jQuery);;