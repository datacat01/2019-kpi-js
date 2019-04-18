// collapse nav plugin
(function($) {
    // utility function
    function closeBranches(item) {
        // traverse tree and check each expanded branch to see if it doesn't contain the click item; then hide the current branch
        item.each(function() {
            if ($(this).has(item).length === 0) {
                $(this).find('.menu').hide();
                $(this).find('.collapse').addClass('expand');
                $(this).find('.expand').removeClass('collapse');
            }
        });
    }

    // set up methods
    var methods = {
        init: function(options) {
            //
            return this.each(function() {
                var $this = $(this),
                    submenuToggle = $('<a href="javascript:;" class="submenu-toggle closed"><span class="offscreen">Toggle Submenu</span></a>');

                $this.addClass('collapse-nav');
                // add the plus button to all collapsed
                $this.find('.expanded:not(.active-trail)')
                    .prepend(submenuToggle);
                // collapse all non-active trails
                $this.find('.expanded:not(.active-trail) ul.menu')
                    .hide();

                $this.find('.submenu-toggle')
                    .bind('click.collapseNav', function(event) {
                        console.log($(this).next().next());
                        event.preventDefault();
                        $(this)
                            .toggleClass('opened')
                            .toggleClass('closed')
                            .next().next().toggle(); // TODO think this is supposed to close children of collapsed parent
                    });
            });
        },
        destroy: function() {
            //
            return this.each(function() {
                var $this = $(this);

                $this.removeClass('collapse-nav');
                $this.unbind('.collapseNav');
                $this.find('li.expanded')
                    .children('.submenu-toggle')
                    .remove();
            });
        }
    };

    $.fn.collapseNav = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.collapseNav');
        }


    };
})(jQuery);