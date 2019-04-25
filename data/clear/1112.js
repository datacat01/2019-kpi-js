// mobile menu plugin
(function($) {

    var settings = {
        initialized: false
    };

    // So we can access our menu data within the enquire callbacks located in scripts js
    window.menu_data = null;

    // set up methods
    var methods = {
        init: function(options) {

            return this.each(function() {

                // Initialize with options object
                if (options) {
                    $.extend(settings, options);
                }

                var $this = $(this),
                    data = $this.data('mobileMenu'),
                    parentItems = $this.find('li.expanded');

                // Give global elements selected elements
                window.mobileMenu_elements = $this;

                // If the plugin hasn't been initialized yet
                if (!data) {

                    var startData = {
                        target: $this, // main ul
                        leftPos: 0, // horizontal position of main ul
                        levelNum: 0, // count of how many levels deep in menu
                        windowWidth: $(window).width()
                    };
                    $this.data('mobileMenu', startData);
                    window.menu_data = startData;
                }

                // Reference data object
                //var d = $this.data('mobileMenu');

                // Add class to menu for styling
                $this.addClass('mobile-menu');

                // set width and offset on uls based on browser width
                $this.find("ul").css({
                    "width": menu_data.windowWidth,
                    "left": menu_data.windowWidth
                }).show();

                // Find all menu items with children add toggles
                parentItems.each(function() {
                    var $this = $(this),
                        submenuToggle = $('<a href="javascript:void(0)" class="submenu-toggle" data-touchclick="true"><span class="element-invisible">Open Submenu</span></a>'),
                        parentLink = $this.find('a').first().clone(),
                        parentLinkHTML = parentLink.get(0).outerHTML;

                    // add a toggle to expand submenus, div to enable positioning
                    $this.append(submenuToggle).wrapInner("<div class='positioning' style='position:relative;'></div>");
                    $('<li class="parent-link"><a href="javascript:void(0) "class="back-btn"><span class="element-invisible">Previous Menu Level</span></a>' + parentLinkHTML + '</li>').prependTo($this.find('ul').first());

                });


                /// EVENT HANDLER ATTACHMENTS
                // Attach event handlers only on first call to mobileMenu
                if (!settings.initialized) {

                    // Mobile menu resize event handler - resets properties of menu data object and adjust CSS of elements.
                    var mobileMenu_resize = _.throttle(function() {

                        // Only perform these operations if we're within a mobile viewport
                        if ($this.hasClass('mobile-menu')) {

                            // Reference global menu data
                            var d = window.menu_data;

                            // Update window width property of menu data object
                            d.windowWidth = $(window).width();

                            // Update levelNum and leftPos properties of menu data object
                            if (d.levelNum > 0) {
                                // set leftPos to negative of levelNum times windowWidth
                                d.leftPos = d.levelNum * (-1 * d.windowWidth);
                            } else {
                                d.leftPos = 0;
                            }

                            // Set menu position based on new leftPos
                            d.target.css("left", d.leftPos + "px");

                            // Set widths of child ULs
                            d.target.find("ul").css({
                                "width": d.windowWidth,
                                "left": d.windowWidth
                            });
                        }
                    }, 10);

                    // Attach resize handler
                    $(window).resize(mobileMenu_resize);

                }

                // Add click functionality to the submenu toggle links
                $this.find('.submenu-toggle').live("click.mobilemenu", function(event) {
                    event.preventDefault();
                    mobileMenu_resize();

                    // Reference the click menu item
                    var $link = $(this);

                    // Reference the menu data
                    //var d = $this.data('mobileMenu');
                    var d = window.menu_data;

                    // Set levelNum
                    d.levelNum = $link.parents("ul").length;

                    // count how many levels deep the link is
                    levelNum = $link.parents("ul").length;

                    // position the menu off to the left
                    d.leftPos = d.leftPos - d.windowWidth;

                    // Save last $link reference on our $lastLink global stack so we can save a reference to the last hidden
                    // closest LIs and pop them off this stack to show them when the user navigates
                    // back. In other words, this stack saves the last hidden elements which are then re-shown with .show() in
                    // '.back-btn' callback below.
                    if (!$.data(document.body, '$lastLink')) {
                        $.data(document.body, '$lastLink', []);
                    }
                    var linkStack = $.data(document.body, '$lastLink');
                    linkStack.push($link);

                    // Set the correct parent as the active level & hide non targeted menus
                    $link.closest('li').siblings().removeClass('active-level').hide();

                    // Make sure menu links within .active-level are shown
                    $link.closest('li').addClass('active-level').show();

                    // Position the menu accordingly based on the level number
                    d.target.css("left", d.leftPos + "px");
                });

                // Add click functionality to the back links
                $this.find('.back-btn').live("click.mobilemenu", function(event) {
                    event.preventDefault();
                    mobileMenu_resize();

                    // Reference the clicked back button
                    var $link = $(this);

                    // Reference the menu data
                    //d = $this.data('mobileMenu');
                    var d = window.menu_data;

                    // remove one from previous level
                    d.levelNum -= 1;

                    // Reference our $lastLink stack (created in the '.submenu-toggle' event handler) and retrieve the last
                    // element popped onto the stack using it as a reference to locate sibling elements that had been hidden
                    // so we can show them when a user is back tracking through the menu.
                    var $lastLink = $.data(document.body, '$lastLink');
                    $lastLink = $lastLink.pop();
                    $lastLink.closest('li').siblings().show();

                    // Remove active level class from li one level up
                    $link.parent().parent().closest('li').removeClass('active-level');

                    // Slide menu forward
                    d.leftPos = d.leftPos + d.windowWidth;

                    d.target.css("left", d.leftPos + "px");
                });

            });
        },
        save: function() {
            saveData(this);
        },
        destroy: function() {
            /*
             // Remove effects, bindings and classes
             return this.each(function () {
             var $this = $(this);

             $this.removeClass('mobile-menu');
             $this.find('li.expanded div') // search inside wrapping div
             .children('.submenu-toggle')
             .unwrap() // remove the wrapping div
             .remove(); // remove the toggle link
             $this.find('li.parent-link')
             .remove(); // remove the parent-link list item
             $this.find('ul.menu')
             .removeAttr('style'); // remove the inline width and left pos
             $this.removeData('mobileMenu'); // remove the data object
             $this.unbind('.mobileMenu'); // unset event bindings
             });
             */
        }
    };

    $.fn.mobileMenu = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.mobileMenu');
        }


    };
})(jQuery);