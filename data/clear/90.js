/** @format */

(function($) {
    /**
     * H4 utilities.
     */
    window.h4 = window.h4 || {};

    /**
     * Higher-order debounce (like Lodash).
     *
     * @since 2018-12-15
     *
     * @param  {function} func  Function to call.
     * @param  {number}   delay Delay in milliseconds.
     *
     * @return {function}       Function wrapped in debouncer.
     */
    h4.debounce = function(func, delay) {
        var timeout;

        return function() {
            var _this = this;
            var args = arguments;

            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(_this, args);
            }, delay);
        };
    };

    /**
     * Adjusts the height of a set of elements.
     *
     * @since 2019-01-24
     *
     * @param  {string|jQuery|HTMLElement|HTMLElement[]|object} elements jQuery selector.
     * @param  {number} breakpoint Optional mobile breakpoint at which to adjust height.
     */
    h4.adjustHeight = function(elements, breakpoint) {
        var $elements = $(elements);

        if (!$elements.length) {
            return; // Not applicable.
        }

        breakpoint =
            breakpoint ||
            $elements
            .first()
            .closest('[data-adjust-height-breakpoint]')
            .attr('data-adjust-height-breakpoint') ||
            660; // Default breakpoint.

        if (window.innerWidth > breakpoint) {
            var highestHeight = 0;

            $elements.each(function() {
                var currentHeight;
                var $this = $(this);

                $this.css({
                    'min-height': 0
                });
                currentHeight = $this.outerHeight(true);

                if (currentHeight > highestHeight) {
                    highestHeight = currentHeight;
                }
            });

            $elements.each(function() {
                $(this).css({
                    'min-height': highestHeight + 'px'
                });
            });
        } else {
            $elements.each(function() {
                $(this).css({
                    'min-height': 0
                });
            });
        }
    };
})(jQuery);;
(function($, window, document) {
    'use strict';

    var $window = $(window);
    var scheduleFrame = window.requestAnimationFrame;

    $(function() {
        // Checking if Dynamic Type is active on iOS (type gets bigger).
        // If it is, add an appropriate class name to the `html` element so that
        // we can adjust `font-size` properties in CSS, and trigger an event that
        // other components can respond to.
        detectedDynamicType(function() {
            setClassName('js-dynamic-type-on');
            broadcastEvent('dynamic-type');
        });
    });

    function detectedDynamicType(callback) {
        var executeCallback = $.noop;
        var $testSubject = $('<div class="x-hidden" style="font:-apple-system-body"></div>').appendTo(document.body);

        scheduleFrame(function() {
            var style = window.getComputedStyle($testSubject.get(0));
            var fontFamily = style.getPropertyValue('font-family');
            var fontSize = parseInt(style.getPropertyValue('font-size'), 10);

            if (fontFamily === 'UICTFontTextStyleBody' && fontSize > 17) {
                executeCallback = function() {
                    callback();
                };
            }

            scheduleFrame(function() {
                $testSubject.remove();
                executeCallback();
            });
        });
    }

    function setClassName(className) {
        document.documentElement.classList.add(className);
    }

    function broadcastEvent(name) {
        $window.trigger('x-detected.' + name);
    }
})(window.jQuery, window, document);;
(function($) {
    'use strict';

    /*
     * Toggle the appropriate `aria` attribute. In case of `aria-hidden` being
     * set to `true`, blur all elements inside.
     */
    $.fn.xAria = function(name, value) {
        value = Boolean(value);
        this.attr('aria-' + name, value);

        if (name === 'hidden' && value) {
            // Blur all focusable elements
            this.find('[tabindex], button, input, object, select, textarea').each(function(_, element) {
                element.blur();
            });
        }
    };

    /*
     * Convert a jQuery collection into an array of separate jQuery elements.
     */
    $.fn.xToArray = function() {
        return this.toArray().map(function(element) {
            return $(element);
        });
    };

    /*
     * Return an array of a given object’s own property values.
     * An equivalent of `Object.values()`.
     */
    $.xObjectValues = function(object) {
        return Object.keys(object).map(function(key) {
            return object[key];
        });
    };

    /*
     * Create a shallow copy of the given object.
     */
    $.xCloneObject = function(object) {
        return $.extend({}, object);
    };

    /*
     * Flatten an object to a single level.
     */
    $.xFlattenObject = function xFlattenObject(object) {
        var result = {};

        $.each(object, function(key, value) {
            if (!$.isPlainObject(value)) {
                result[key] = value;
                return;
            }

            $.each(xFlattenObject(value), function(_key, _value) {
                result[key + '.' + _key] = _value;
            });
        });

        return result;
    };

    /*
     * Create an object where the jQuery elements from the passed collection
     * are grouped by a given data attribute value. The value is assumed to be
     * unique for each of the elements.
     */
    $.fn.xGroupByData = function(key) {
        var group = {};
        var data;

        this.xToArray().forEach(function($element) {
            data = $element.data(key);
            if (data) group[data] = $element;
        });

        return group;
    };

    /*
     * Translate all items inside an object to a new object.
     */
    $.xMapPlainObject = function(items, callback) {
        var isValue = !$.isFunction(callback);

        return Object.keys(items).reduce(function(memo, key) {
            var copy = {};
            copy[key] = isValue ? callback : callback(key, items[key], items);
            return $.extend({}, memo, copy);
        }, {});
    };

    /*
     * Find the maximum value in an array or an object.
     */
    $.xMax = function(items) {
        if ($.isPlainObject(items)) {
            items = $.xObjectValues(items);
        }

        return items.reduce(function(memo, value) {
            return Math.max(memo, value);
        }, 0);
    };

    /*
     * Set opacity.
     */
    $.fn.xOpacity = function(value) {
        return this.each(function() {
            this.style.opacity = value;
        });
    };

    /*
     * Set a transform value based on the coordinates and scale.
     */
    $.fn.xTransform = function(x, y, z, scale) {
        var coordinates = [x, y, z].map(function(value) {
            return value ? (value + 'px') : 0;
        });

        var value = 'translate3d(' + coordinates.join(', ') + ')';
        if ($.isNumeric(scale)) value += ' scale(' + scale + ')';

        return this.each(function() {
            this.style.transform = value;
        });
    };
})(window.jQuery, window, document);;
(function($) {
    'use strict';

    var scheduleFrame = window.requestAnimationFrame;

    // Borrowed from Tween.js
    var EASING_FUNCTIONS = {
        linear: function(k) {
            return k;
        },
        quadraticOut: function(k) {
            return k * (2 - k);
        },
        quinticOut: function(k) {
            // Almost indistinguishable from `cubicBezier(0.1, 0.6, 0.2, 1)`
            return --k * k * k * k * k + 1;
        }
    };

    function Tween(properties) {
        this.running = false;

        this._valuesFrom = $.xCloneObject(properties.from);
        this._valuesTo = $.xCloneObject(properties.to);

        this._duration = properties.duration;
        this._ease = EASING_FUNCTIONS[properties.ease] || EASING_FUNCTIONS.linear;

        return this;
    }

    Tween.prototype.start = function(properties) {
        this._onUpdateCallback = properties.update;
        this._onEndCallback = properties.end;

        if (!$.isFunction(this._onUpdateCallback)) this._onUpdateCallback = $.noop;
        if (!$.isFunction(this._onEndCallback)) this._onEndCallback = $.noop;

        this._startAnimation();
        return this;
    };

    Tween.prototype.stop = function() {
        if (!this.running) return this;

        this._interrupted = true;
        this._endAnimation();
        return this;
    };

    Tween.prototype._startAnimation = function() {
        this.running = true;
        this._interrupted = false;
        this._start = performance.now();
        scheduleFrame(this._runAnimation.bind(this));
    };

    Tween.prototype._runAnimation = function() {
        if (!this.running) return;

        this._nextFrame();
        scheduleFrame(this._runAnimation.bind(this));
    };

    Tween.prototype._updateAnimation = function() {
        var currentValues = this._getInterpolatedValues();
        this._onUpdateCallback(currentValues, this._progress);
    };

    Tween.prototype._endAnimation = function() {
        this.running = false;

        if (!this._interrupted) {
            this._onUpdateCallback($.xCloneObject(this._valuesTo), 1);
        }

        this._onEndCallback();
    };

    Tween.prototype._nextFrame = function() {
        this._progress = (performance.now() - this._start) / this._duration;

        if (this._progress < 1) {
            this._updateAnimation();
        } else {
            this._endAnimation();
        }
    };

    Tween.prototype._getInterpolatedValues = function() {
        var values = {};

        Object.keys(this._valuesFrom).forEach(function(key) {
            var valueFrom = this._valuesFrom[key];
            var valueTo = this._valuesTo[key];

            if (!$.isNumeric(valueFrom)) valueFrom = 0;
            if (!$.isNumeric(valueTo)) valueTo = 0;

            values[key] = this._ease(this._progress) * (valueTo - valueFrom) + valueFrom;
        }.bind(this));

        return values;
    };

    // Expose the constructor
    $.xTween = function(properties) {
        return new Tween(properties);
    };
})(window.jQuery, window, document);;
(function($, window, document) {
    'use strict';

    var $window = $(window);
    var $document = $(document);

    $(function() {
        // The main positioning element (animated)
        var $dropdown = $('.x-dropdown');

        // The background element with “animated height”
        var $dropdownBackground = $dropdown.find('.x-dropdown-bottom');
        var $dropdownBackgroundFill = $dropdownBackground.find('.x-dropdown-bottom-fill');

        // Dropdown contents, first in a jQuery collection, then as a group object
        var $dropdownContents = $dropdown.find('.x-dropdown-content');
        var dropdownContents = $dropdownContents.xGroupByData('dropdown-name');
        var dropdownContentKeys = Object.keys(dropdownContents);

        // Selectable links grouped by dropdown content key, with disabled tab switching
        var dropdownContentItems = $.xMapPlainObject(dropdownContents, function(_, $element) {
            return $element.find('[role=menuitem]:visible');
        });

        // Dropdown triggers, used for determining the attachment position
        var $dropdownTriggers = $('[data-dropdown-trigger]');
        var dropdownTriggers = $dropdownTriggers.xGroupByData('dropdown-trigger');

        // Static properties
        var dropdownHiddenOffset = -6;
        var dropdownHiddenScale = 0.85;

        // Collected element sizes and positions, etc.
        var dropdownWidth = 0;
        var dropdownBackgroundHeight = 0;
        var dropdownContentHeights = {};
        var dropdownContentOffsets = {};

        function resizeElements() {
            // Collect
            dropdownWidth = $dropdown.outerWidth();
            dropdownContentHeights = $.xMapPlainObject(dropdownContents, function(_, $element) {
                return $element.outerHeight();
            });
            dropdownBackgroundHeight = $.xMax(dropdownContentHeights);
            dropdownContentOffsets = $.xMapPlainObject(dropdownTriggers, function(_, $element) {
                var width = $element.outerWidth();
                var offset = $element.offset();
                return Math.round(offset.left + (width - dropdownWidth) / 2);
            });

            // Apply
            $dropdownBackground.height(dropdownBackgroundHeight);
            $dropdownBackgroundFill.height(dropdownBackgroundHeight);
        }

        // Current states and values
        var currentName;
        var currentDropdownOpacity;
        var currentDropdownContentOpacity = $.xMapPlainObject(dropdownContents, 0);
        var currentDropdownTransform = {};
        var currentDropdownHeight;
        var currentAnimation;
        var currentKeyboardIndex;

        function setCurrentName(name) {
            currentName = name;
            currentKeyboardIndex = false;
            $.each(dropdownContents, function(key, $element) {
                $element.xAria('hidden', key !== name);
            });
        }

        function broadcastEvent(type, name, data) {
            data = $.extend(data || {}, {
                name: name
            });
            $document.trigger('x-dropdown.' + type, data);
        }

        // Animated properties
        function updateDropdownOpacity(value, forceUpdate) {
            if (!forceUpdate && value === currentDropdownOpacity) {
                return;
            }
            $dropdown.xOpacity(value);
            currentDropdownOpacity = value;
        }

        function updateDropdownContentOpacity(values, forceUpdate) {
            dropdownContentKeys.forEach(function(key) {
                var value = values['contents.opacity.' + key];
                if (!forceUpdate && value === currentDropdownContentOpacity[key]) {
                    return;
                }
                dropdownContents[key].xOpacity(value);
                currentDropdownContentOpacity[key] = value;
            });
        }

        function updateDropdownTransform(values, forceUpdate) {
            var x = values.x || 0;
            var y = values.y || 0;
            var scale = values.scale;
            var current = currentDropdownTransform;

            if (!forceUpdate && current.x === x && current.y === y && current.scale === scale) {
                return;
            }
            $dropdown.xTransform(x, y, 0, scale);
            currentDropdownTransform = {
                x: x,
                y: y,
                scale: scale
            };
        }

        function updateDropdownHeight(value, forceUpdate) {
            value = Math.min(value, dropdownBackgroundHeight);
            if (!forceUpdate && value === currentDropdownHeight) {
                return;
            }
            $dropdownBackgroundFill.xTransform(0, value - dropdownBackgroundHeight);
            currentDropdownHeight = value;
        }

        function updateDropdownProperties(values, forceUpdate) {
            updateDropdownOpacity(values['dropdown.opacity'], forceUpdate);
            updateDropdownContentOpacity(values, forceUpdate);
            updateDropdownTransform({
                x: values['dropdown.transform.x'],
                y: values['dropdown.transform.y'],
                scale: values['dropdown.transform.scale']
            }, forceUpdate);
            updateDropdownHeight(values['dropdown.height'], forceUpdate);
        }

        function show(name, animate) {
            // Treat unavailable dropdown names as close calls
            if (dropdownContentKeys.indexOf(name) < 0) {
                name = false;
            }

            // Abort if the state remains unchanged
            if (currentName === name) {
                return;
            }

            // If there is an animation running, stop it
            if (currentAnimation) {
                currentAnimation.stop();
            }

            // State helpers
            var isHidden = !currentName && !(currentAnimation && currentAnimation.running);
            var isHiding = !name;

            // Define from-to states for each of the animated properties
            var animationFrom = {
                dropdown: isHidden ? {
                    height: dropdownContentHeights[name],
                    opacity: currentDropdownOpacity,
                    transform: {
                        x: dropdownContentOffsets[name],
                        y: dropdownHiddenOffset,
                        scale: dropdownHiddenScale
                    }
                } : {
                    height: currentDropdownHeight,
                    opacity: currentDropdownOpacity,
                    transform: currentDropdownTransform
                },
                contents: {
                    opacity: isHidden ? $.xMapPlainObject(currentDropdownContentOpacity, 0) : currentDropdownContentOpacity
                }
            };

            var animationTo = {
                dropdown: isHiding ? {
                    height: currentDropdownHeight,
                    opacity: 0,
                    transform: {
                        x: currentDropdownTransform.x,
                        y: dropdownHiddenOffset,
                        scale: dropdownHiddenScale
                    }
                } : {
                    height: dropdownContentHeights[name],
                    opacity: 1,
                    transform: {
                        x: dropdownContentOffsets[name],
                        y: 0,
                        scale: 1
                    }
                },
                contents: {
                    opacity: isHiding ? currentDropdownContentOpacity : $.xMapPlainObject(currentDropdownContentOpacity, function(key) {
                        return name === key ? 1 : 0;
                    })
                }
            };

            var animationProperties = {
                from: $.xFlattenObject(animationFrom),
                to: $.xFlattenObject(animationTo),
                duration: isHiding ? 150 : 450,
                ease: isHiding ? 'quadraticOut' : 'quinticOut'
            };

            setCurrentName(name);

            if (!animate) {
                updateDropdownProperties(animationProperties.to);
            } else {
                currentAnimation = $.xTween(animationProperties).start({
                    update: updateDropdownProperties,
                    complete: function() {
                        currentAnimation = false;
                    }
                });
            }
        }

        // Trigger element calculations and handle browser events
        function handleResize() {
            show(false);
            resizeElements();
        }

        function handleLoad() {
            resizeElements();
        }

        function handleScroll() {
            show(false, true);
        }

        handleResize();
        $window.on('resize', handleResize);
        $window.on('load', handleLoad);
        $window.on('scroll', handleScroll);
        $window.on('x-detected.dynamic-type', handleResize);

        // Handle events sent by other components
        $document.on('x-trigger.select', function(_, data) {
            show(data.name, true);
        });

        $document.on('x-trigger.arrow-down', function() {
            if ($.isNumeric(currentKeyboardIndex)) {
                currentKeyboardIndex += 1;
            } else {
                currentKeyboardIndex = 0;
            }
        });

        $document.on('x-trigger.arrow-up', function() {
            if ($.isNumeric(currentKeyboardIndex)) {
                currentKeyboardIndex -= 1;
            } else {
                currentKeyboardIndex = -1;
            }
        });

        // Handle keyboard focus
        $document.on('x-trigger.arrow-up x-trigger.arrow-down', function() {
            var items = dropdownContentItems[currentName];
            var length = items.length;
            var index = (currentKeyboardIndex + length) % length;
            var element = items[index];
            if (element) element.focus();
            currentKeyboardIndex = index;
        });

        // Broadcast mouse events to other components
        $.each(dropdownContents, function(key, $element) {
            ['mouseenter', 'mouseleave'].forEach(function(type) {
                $element.on(type, function() {
                    broadcastEvent(type, key);
                });
            });
        });
    });
})(window.jQuery, window, document);;
(function($, document) {
    'use strict';

    var $document = $(document);

    $(function() {
        // The outer element, the content element, and the close button
        var $menu = $('.x-menu');
        var $menuContent = $menu.find('.x-menu-content');
        var $menuButton = $menu.find('.x-menu-button');

        // The menu trigger
        var $menuTrigger = $('.x-nav-link--menu');

        // Selectable menu items
        var $menuContentItems = $menuContent.find('[role=menuitem]:visible');
        var menuContentItemLength = $menuContentItems.length;

        // Current states and values
        var currentState = false;
        var currentKeyboard = false;
        var currentKeyboardIndex = false;

        function moveItemIndex(increment) {
            var index = 0;
            var element;

            if ($.isNumeric(currentKeyboardIndex)) {
                index = currentKeyboardIndex;
            } else if (increment > 0) {
                index = -1;
            }

            index = (index + increment + menuContentItemLength) % menuContentItemLength;
            element = $menuContentItems[index];

            if (element) element.focus();
            currentKeyboardIndex = index;
        }

        function captureArrows() {
            if (currentKeyboard) {
                return;
            }

            currentKeyboard = true;
            currentKeyboardIndex = false;

            $document.on('keydown.x-menu', function($event) {
                var triggerActive = $menuTrigger.get(0) === document.activeElement;

                /* eslint-disable default-case */
                switch ($event.which) {
                    case 38: // ↑
                    case 37: // ←
                        $event.preventDefault();
                        moveItemIndex(-1);
                        break;
                    case 40: // ↓
                    case 39: // →
                        $event.preventDefault();
                        moveItemIndex(1);
                        break;
                    case 27: // escape
                        if (!triggerActive) {
                            $menuTrigger.trigger('focus.x-menu');
                        }
                        setCurrentState(false);
                        break;
                    case 9: // tab
                        if (!triggerActive) {
                            $event.preventDefault();
                            $menuTrigger.trigger('focus.x-menu');
                        }
                        setCurrentState(false);
                        break;
                        /* eslint-enable default-case */
                }
            });
        }

        function releaseArrows() {
            currentKeyboard = false;
            $document.off('keydown.x-menu');
        }

        function setCurrentState(state) {
            if (state === currentState) {
                return;
            }

            currentState = state;

            if (state) {
                captureArrows();
            } else {
                releaseArrows();
            }

            $menuTrigger.xAria('expanded', state);
            $menu.xAria('hidden', !state);
            $menu.toggleClass('x-menu--on', state);
        }

        // Handle events
        $menuTrigger.on('click.x-menu', function($event) {
            $event.stopPropagation();
            $menuTrigger.blur();
            setCurrentState(true);
        });

        $menuButton.on('click.x-menu', function() {
            $menuButton.blur();
            setCurrentState(false);
        });

        $menuContent.on('click.x-menu touchstart.x-menu', function($event) {
            $event.stopPropagation();
        });

        // Handle dismissal
        $document.on('click.x-menu touchstart.x-menu', function() {
            setCurrentState(false);
        });
    });
})(window.jQuery, document);;
(function($, window, document) {
    'use strict';

    var $window = $(window);
    var $document = $(document);

    $(function() {
        // Triggers, first in a jQuery collection, then as a group object
        var $triggers = $('[data-dropdown-trigger]');
        var triggers = $triggers.xGroupByData('dropdown-trigger');

        // Current states and values
        var currentName;
        var currentTimeout;
        var currentKeyboard;

        function setCurrentName(name) {
            currentName = name;
            $.each(triggers, function(key, $element) {
                $element.xAria('expanded', key === name);
            });
        }

        function broadcastEvent(type, name, data) {
            data = $.extend(data || {}, {
                name: name
            });
            $document.trigger('x-trigger.' + type, data);
        }

        function captureArrows() {
            if (currentKeyboard) {
                return;
            }

            currentKeyboard = true;

            $document.on('keydown.x-trigger', function($event) {
                var $trigger = triggers[currentName];
                var triggerActive = $trigger && $trigger.get(0) === document.activeElement;

                /* eslint-disable default-case */
                switch ($event.which) {
                    case 38: // ↑
                    case 37: // ←
                        $event.preventDefault();
                        broadcastEvent('arrow-up', currentName);
                        break;
                    case 40: // ↓
                    case 39: // →
                        $event.preventDefault();
                        broadcastEvent('arrow-down', currentName);
                        break;
                    case 27: // escape
                        if (!triggerActive) {
                            $trigger.trigger('focus.x-trigger');
                        }
                        show(0, false, {
                            keyboard: true
                        });
                        break;
                    case 9: // tab
                        if (!triggerActive) {
                            $event.preventDefault();
                            $trigger.trigger('focus.x-trigger');
                        }
                        show(0, false, {
                            keyboard: true
                        });
                        break;
                        /* eslint-enable default-case */
                }
            });
        }

        function releaseArrows() {
            currentKeyboard = false;
            $document.off('keydown.x-trigger');
        }

        function show(delay, name, data) {
            var callback = function() {
                setCurrentName(name);
                broadcastEvent('select', name, data);

                if (name) {
                    captureArrows();
                } else {
                    releaseArrows();
                }
            };

            clearTimeout(currentTimeout);
            currentTimeout = setTimeout(callback, delay);
        }

        // Trigger logic
        $.each(triggers, function(key, $element) {
            $element.on('click.x-trigger touchstart.x-trigger', function($event) {
                $event.stopPropagation();
                $event.target.blur();
                show(0, key);
            });

            $element.on('focus.x-trigger', function() {
                show(0, key, {
                    keyboard: true
                });
            });

            $element.on('mouseenter.x-trigger', function() {
                show(currentName ? 0 : 150, key);
            });

            $element.on('mouseleave.x-trigger', function() {
                show(50, false);
            });
        });

        // Handle events sent by other components
        $document.on('x-dropdown.mouseenter', function(_, data) {
            show(0, data.name);
        });

        $document.on('x-dropdown.mouseleave', function() {
            show(350, false);
        });

        // Handle dismissal
        $document.on('click.x-trigger touchstart.x-trigger', function() {
            show(50, false);
        });

        // Reset the state on resize
        function handleResize() {
            show(0, false);
        }

        handleResize();
        $window.on('resize', handleResize);
    });
})(window.jQuery, window, document);;
/** @format */

(function($) {
    'use strict';

    $(document).ready(function() {
        var $window = $(window);
        var $body = $('body');
        var $htmlBody = $('html, body');
        var isRTL = $htmlBody.is('[dir="rtl"]');

        $('.lpc-plans').each(function() {
            var $plans = $(this);
            var $table = $plans.find('.lpc-plans-table');
            var breakpoint = $plans.data('adjustHeightBreakpoint');

            var $buttons = $plans.find('.lpc-plans-buttons');
            var $arrows = $plans.find('.lpc-plans-arrows');
            var $steps = $plans.find('.lpc-plans-steps');

            var $firstPlan = $plans.find('.lpc-plan').first();

            var $firstButton = $buttons.find('.lpc-button').first();
            var $lastButton = $buttons.find('.lpc-button').last();

            var $firstArrow = $arrows.find('.lpc-plans-arrow').first();
            var $lastArrow = $arrows.find('.lpc-plans-arrow').last();

            var $firstStep = $steps.find('.lpc-plans-step').first();
            var $lastStep = $steps.find('.lpc-plans-step').last();

            var $planHeaders = $plans.find('.lpc-plan .lpc-plan-header');
            var $planDescriptions = $plans.find('.lpc-plan .lpc-plan-description');
            var $planDescriptionParagraphs = $planDescriptions.find('.lpc-paragraphs');
            var $planFeatureLists = $plans.find('.lpc-plan .lpc-plan-features-list');
            var $planCtaBlocks = $plans.find('.lpc-plan .lpc-plan-cta-block');

            var $tooltips = $('.lpc-plan-features-list-item-tooltip');
            var $tooltipBlock = $('.lpc-plans-tooltip-block');
            var $tooltipContent = $('.lpc-plans-tooltip-content');

            var adjustPlanHeights = function() {
                h4.adjustHeight($planHeaders);
                h4.adjustHeight($planDescriptionParagraphs);
                h4.adjustHeight($planDescriptions);
                h4.adjustHeight($planFeatureLists);
                h4.adjustHeight($planCtaBlocks);
            };

            var scrollToButtons = function(callback) {
                var css = {
                    scrollTop: $buttons.offset().top - 30
                };
                var options = {
                    done: callback || $.noop
                };
                $htmlBody.stop().animate(css, options, 500);
            };

            var toggleTooltip = function(e) {
                e.stopPropagation();
                var $tooltip = $(this);

                if ($tooltip.hasClass('is-active')) {
                    hideToolTips();
                } else {
                    hideToolTips();

                    $tooltip.addClass('is-active');
                    $tooltipContent.text($tooltip.data('tooltip') || '');

                    var height = $tooltipBlock.height(),
                        width = $tooltipBlock.width(),
                        left = $tooltip.offset().left + 18,
                        top = $tooltip.offset().top - height / 2 - 2,
                        right = $window.width() - ($tooltip.offset().left + $tooltip.outerWidth());

                    if (right < 300) {
                        $tooltipBlock.addClass('is-reversed');
                        $tooltipBlock.offset({
                            top: top,
                            left: left - width - 37
                        });
                        $tooltipBlock.css({
                            opacity: 1
                        });
                    } else {
                        $tooltipBlock.removeClass('is-reversed');
                        $tooltipBlock.offset({
                            top: top,
                            left: left
                        });
                        $tooltipBlock.css({
                            opacity: 1
                        });
                    }

                    if (!window.textReview || !textReview.isTextReviewMode()) {
                        $tooltipBlock.fixWidows({
                            minWidth: 660,
                            selectors: ['.lpc-plans-tooltip-content'],
                        });
                    }
                }
            };

            var hideToolTips = function() {
                $tooltips.removeClass('is-active');
                $tooltipBlock.css({
                    opacity: 0
                });
                $tooltipBlock.offset({
                    top: -100,
                    left: -500
                });
            };

            var pageOne = function(e) {
                e ? e.preventDefault() : null;
                $table.stop(); // Stop animating.

                var prevPage = $plans.data('currentPage');
                $plans.data('currentPage', 1); // Set current page.

                $firstButton.addClass('is-active');
                $lastButton.removeClass('is-active');

                $firstArrow.addClass('is-active');
                $lastArrow.removeClass('is-active');

                $firstStep.addClass('is-active');
                $lastStep.removeClass('is-active');

                if (window.innerWidth <= breakpoint) {
                    e ? scrollToButtons() : null;
                    $table.css({
                        top: 0,
                        left: 0,
                        right: 'auto'
                    });

                    $plans
                        .find('.lpc-plan')
                        .removeAttr('style')
                        .show();

                    if (isRTL) {
                        $plans.find('.lpc-plan:nth-child(-n+2)').hide();
                    } else {
                        $plans.find('.lpc-plan:nth-child(n+4)').hide();
                    }

                    $plans
                        .find('.lpc-plan:visible')
                        .first()
                        .attr('style', 'margin-top:0;');

                    adjustPlanHeights();
                } else {
                    $plans
                        .find('.lpc-plan')
                        .removeAttr('style')
                        .show();

                    var afterCallback = function() {
                        if (isRTL) {
                            $plans.find('.lpc-plan:nth-child(-n+2)').hide();
                            $table.stop().css({
                                top: 0,
                                left: 'auto',
                                right: 0
                            });
                        } else {
                            $plans.find('.lpc-plan:nth-child(n+4)').hide();
                            $table.stop().css({
                                top: 0,
                                left: 0,
                                right: 'auto'
                            });
                        }
                        adjustPlanHeights();
                    };

                    var callback = function() {
                        if (!$planFeatureLists.is(':visible')) {
                            adjustPlanHeights();
                        }
                        if (1 === prevPage || !prevPage) {
                            afterCallback();
                        } else {
                            if (isRTL) {
                                $table.stop().css({
                                    top: 0,
                                    left: 'auto',
                                    right: 0
                                });
                                $table
                                    .stop()
                                    .animate({
                                        top: 0,
                                        left: 'auto',
                                        right: '-' + $firstPlan.outerWidth(true) * 2 + 'px'
                                    }, {
                                        done: afterCallback
                                    });
                            } else {
                                $table
                                    .stop()
                                    .css({
                                        top: 0,
                                        left: '-' + $firstPlan.outerWidth(true) * 2 + 'px',
                                        right: 'auto'
                                    });
                                $table.stop().animate({
                                    top: 0,
                                    left: 0,
                                    right: 'auto'
                                }, {
                                    done: afterCallback
                                });
                            }
                        }
                    };

                    if (
                        e &&
                        e.target &&
                        $(e.target).hasClass('lpc-plans-step') &&
                        $firstPlan.find('.lpc-plan-features-list:visible').length
                    ) {
                        if (1 === prevPage || !prevPage) {
                            callback();
                            scrollToButtons();
                        } else {
                            scrollToButtons(callback);
                        }
                    } else {
                        callback();
                    }
                }
            };

            var pageTwo = function(e) {
                e ? e.preventDefault() : null;
                $table.stop(); // Stop animating.

                var prevPage = $plans.data('currentPage');
                $plans.data('currentPage', 2); // Set current page.

                $firstButton.removeClass('is-active');
                $lastButton.addClass('is-active');

                $firstArrow.removeClass('is-active');
                $lastArrow.addClass('is-active');

                $firstStep.removeClass('is-active');
                $lastStep.addClass('is-active');

                if (window.innerWidth <= breakpoint) {
                    e ? scrollToButtons() : null;
                    $table.css({
                        top: 0,
                        left: 0,
                        right: 'auto'
                    });

                    $plans
                        .find('.lpc-plan')
                        .removeAttr('style')
                        .hide();

                    if (isRTL) {
                        $plans.find('.lpc-plan:nth-child(-n+3)').show();
                    } else {
                        $plans.find('.lpc-plan:nth-child(n+3)').show();
                    }

                    $plans
                        .find('.lpc-plan:visible')
                        .first()
                        .attr('style', 'margin-top:0;');

                    adjustPlanHeights();
                } else {
                    $plans
                        .find('.lpc-plan')
                        .removeAttr('style')
                        .show();

                    var afterCallback = function() {
                        if (isRTL) {
                            $plans.find('.lpc-plan:nth-child(n+4)').hide();
                            $table.stop().css({
                                top: 0,
                                left: 'auto',
                                right: 0
                            });
                        } else {
                            $plans.find('.lpc-plan:nth-child(-n+2)').hide();
                            $table.stop().css({
                                top: 0,
                                left: 0,
                                right: 'auto'
                            });
                        }
                        adjustPlanHeights();
                    };

                    var callback = function() {
                        if (!$planFeatureLists.is(':visible')) {
                            adjustPlanHeights();
                        }
                        if (2 === prevPage || !prevPage) {
                            afterCallback();
                        } else {
                            if (isRTL) {
                                $table
                                    .stop()
                                    .css({
                                        top: 0,
                                        left: 'auto',
                                        right: '-' + $firstPlan.outerWidth(true) * 2 + 'px'
                                    });
                                $table.stop().animate({
                                    top: 0,
                                    left: 'auto',
                                    right: 0
                                }, {
                                    done: afterCallback
                                });
                            } else {
                                $table.stop().css({
                                    top: 0,
                                    left: 0,
                                    right: 'auto'
                                });
                                $table
                                    .stop()
                                    .animate({
                                        top: 0,
                                        left: '-' + $firstPlan.outerWidth(true) * 2 + 'px',
                                        right: 'auto'
                                    }, {
                                        done: afterCallback
                                    });
                            }
                        }
                    };

                    if (
                        e &&
                        e.target &&
                        $(e.target).hasClass('lpc-plans-step') &&
                        $firstPlan.find('.lpc-plan-features-list:visible').length
                    ) {
                        if (2 === prevPage || !prevPage) {
                            callback();
                            scrollToButtons();
                        } else {
                            scrollToButtons(callback);
                        }
                    } else {
                        callback();
                    }
                }
            };

            // Attach button handlers.

            $firstButton
                .add($firstArrow)
                .add($firstStep)
                .on('click', pageOne);

            $lastButton
                .add($lastArrow)
                .add($lastStep)
                .on('click', pageTwo);

            // Attach tooltip handlers.

            $tooltips.each(function() {
                $(this).on('click', toggleTooltip);
            });
            $body.on('click', hideToolTips);

            // Detect resize events.

            $(window).on(
                'resize',
                h4.debounce(function() {
                    switch ($plans.data('currentPage')) {
                        case 1:
                            pageOne();
                            break;

                        case 2:
                            pageTwo();
                            break;

                        default:
                            if (isRTL) {
                                pageTwo();
                            } else {
                                pageOne();
                            }
                            break;
                    }
                }, 250)
            );

            // Start at specific page.

            switch ($plans.data('currentPage')) {
                case 1:
                    pageOne();
                    break;

                case 2:
                    pageTwo();
                    break;

                default:
                    if (isRTL) {
                        pageTwo();
                    } else {
                        pageOne();
                    }
                    break;
            }
        });
    });
})(window.jQuery);;
! function() {
    "use strict";
    if ("undefined" != typeof window) {
        var t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
            e = !!t && parseInt(t[1], 10) >= 16;
        if ("objectFit" in document.documentElement.style != !1 && !e) return void(window.objectFitPolyfill = function() {
            return !1
        });
        var i = function(t) {
                var e = window.getComputedStyle(t, null),
                    i = e.getPropertyValue("position"),
                    n = e.getPropertyValue("overflow"),
                    o = e.getPropertyValue("display");
                i && "static" !== i || (t.style.position = "relative"), "hidden" !== n && (t.style.overflow = "hidden"), o && "inline" !== o || (t.style.display = "block"), 0 === t.clientHeight && (t.style.height = "100%"), -1 === t.className.indexOf("object-fit-polyfill") && (t.className = t.className + " object-fit-polyfill")
            },
            n = function(t) {
                var e = window.getComputedStyle(t, null),
                    i = {
                        "max-width": "none",
                        "max-height": "none",
                        "min-width": "0px",
                        "min-height": "0px",
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto",
                        "margin-top": "0px",
                        "margin-right": "0px",
                        "margin-bottom": "0px",
                        "margin-left": "0px"
                    };
                for (var n in i) {
                    e.getPropertyValue(n) !== i[n] && (t.style[n] = i[n])
                }
            },
            o = function(t, e, i) {
                var n, o, l, a, d;
                if (i = i.split(" "), i.length < 2 && (i[1] = i[0]), "x" === t) n = i[0], o = i[1], l = "left", a = "right", d = e.clientWidth;
                else {
                    if ("y" !== t) return;
                    n = i[1], o = i[0], l = "top", a = "bottom", d = e.clientHeight
                }
                return n === l || o === l ? void(e.style[l] = "0") : n === a || o === a ? void(e.style[a] = "0") : "center" === n || "50%" === n ? (e.style[l] = "50%", void(e.style["margin-" + l] = d / -2 + "px")) : n.indexOf("%") >= 0 ? (n = parseInt(n), void(n < 50 ? (e.style[l] = n + "%", e.style["margin-" + l] = d * (n / -100) + "px") : (n = 100 - n, e.style[a] = n + "%", e.style["margin-" + a] = d * (n / -100) + "px"))) : void(e.style[l] = n)
            },
            l = function(t) {
                var e = t.dataset ? t.dataset.objectFit : t.getAttribute("data-object-fit"),
                    l = t.dataset ? t.dataset.objectPosition : t.getAttribute("data-object-position");
                e = e || "cover", l = l || "50% 50%";
                var a = t.parentNode;
                i(a), n(t), t.style.position = "absolute", t.style.height = "100%", t.style.width = "auto", "scale-down" === e && (t.style.height = "auto", t.clientWidth < a.clientWidth && t.clientHeight < a.clientHeight ? (o("x", t, l), o("y", t, l)) : (e = "contain", t.style.height = "100%")), "none" === e ? (t.style.width = "auto", t.style.height = "auto", o("x", t, l), o("y", t, l)) : "cover" === e && t.clientWidth > a.clientWidth || "contain" === e && t.clientWidth < a.clientWidth ? (t.style.top = "0", t.style.marginTop = "0", o("x", t, l)) : "scale-down" !== e && (t.style.width = "100%", t.style.height = "auto", t.style.left = "0", t.style.marginLeft = "0", o("y", t, l))
            },
            a = function(t) {
                if (void 0 === t) t = document.querySelectorAll("[data-object-fit]");
                else if (t && t.nodeName) t = [t];
                else {
                    if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
                    t = t
                }
                for (var i = 0; i < t.length; i++)
                    if (t[i].nodeName) {
                        var n = t[i].nodeName.toLowerCase();
                        "img" !== n || e ? "video" === n && (t[i].readyState > 0 ? l(t[i]) : t[i].addEventListener("loadedmetadata", function() {
                            l(this)
                        })) : t[i].complete ? l(t[i]) : t[i].addEventListener("load", function() {
                            l(this)
                        })
                    } return !0
            };
        document.addEventListener("DOMContentLoaded", function() {
            a()
        }), window.addEventListener("resize", function() {
            a()
        }), window.objectFitPolyfill = a
    }
}();;
/** @format */

(function($) {
    'use strict';

    $(document).ready(function() {
        var $window = $(window);
        var $headline = $('.lpc-headline');

        var $headlineVideoOverlay = $('.lpc-headline-video-overlay');
        var $headlineVideoOverlayVideo = $headlineVideoOverlay.find('video');

        var $headlineVideoContainer = $headline.find('.lpc-video-container');
        var $headlineVideoContainerVideo = $headlineVideoContainer.find('video');

        var $pitchRightSupport = $('.lpc-pitch-right-support');
        var $pitchRightSupportVideoLinks = $pitchRightSupport.find('a[href="#"]');

        var $pitchRightSupportVideoContainer = $pitchRightSupport.find('.lpc-video-container');
        var $pitchRightSupportVideoContainerVideo = $pitchRightSupportVideoContainer.find('video');

        var $pitchRightSupportVideoOverlay = $('.lpc-pitch-right-support-video-overlay');
        var $pitchRightSupportVideoOverlayVideo = $pitchRightSupportVideoOverlay.find('video');

        var $pitchLeft = $('.lpc-pitch-left');
        var $pitchLeftContainer = $pitchLeft.find('.lpc-pitch-container');

        // Play & pause video.

        var willPlay = function(video) {
            var $video = $(video);
            $video.data('willPlay', true);

            if ($video.data('canPlayThrough')) {
                $video[0].play();
                $video.data('willPlay', false);
            } else {
                $video[0].load(); // Begin loading.
                $(video).on('canplaythrough', function() {
                    if ($video.data('willPlay')) {
                        $video[0].play();
                    }
                    $video.data('canPlayThrough', true);
                    $video.data('willPlay', false);
                });
            }
        };

        var willPause = function(video) {
            var $video = $(video);
            $video.data('willPlay', false);
            $video[0].pause();
        };

        // Headline video.

        window.requestAnimationFrame(function() {
            willPlay($headlineVideoContainerVideo);
        });

        $headlineVideoContainer.on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            willPause($headlineVideoContainerVideo);
            $headlineVideoOverlay.stop().fadeIn();
            willPlay($headlineVideoOverlayVideo);
        });

        $headlineVideoOverlay.on('click', function(e) {
            if ($(e.target).is('.lpc-video-wrapper')) {
                e.preventDefault();
                e.stopImmediatePropagation();

                willPause($headlineVideoOverlayVideo);
                $headlineVideoOverlay.stop().hide();
                willPlay($headlineVideoContainerVideo);
            }
        });

        // Pitch right support video.

        $pitchRightSupportVideoContainer.add($pitchRightSupportVideoLinks).on('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            $pitchRightSupportVideoOverlay.stop().fadeIn();
            willPlay($pitchRightSupportVideoOverlayVideo);
        });

        $pitchRightSupportVideoOverlay.on('click', function(e) {
            if ($(e.target).is('.lpc-video-wrapper')) {
                e.preventDefault();
                e.stopImmediatePropagation();

                willPause($pitchRightSupportVideoOverlayVideo);
                $pitchRightSupportVideoOverlay.stop().hide();
            }
        });

        // Pitch left repositioning.

        var repositionSupportCircles = function() {
            if (window.innerWidth <= 660) {
                var $pitchLeftBlock2 = $pitchLeftContainer.find('> .lpc-pitch-block-2');

                if ($pitchLeftBlock2.length) {
                    $pitchLeftBlock2
                        .detach() // Move to a new location on mobile.
                        .insertAfter($pitchLeftContainer.find('> .lpc-pitch-block-1 .lpc-pitch-paragraphs p').first());
                }
            } else {
                // Restore location.
                if (!$pitchLeftContainer.find('> .lpc-pitch-block-2').length) {
                    $pitchLeftContainer
                        .find('.lpc-pitch-block-2')
                        .detach()
                        .appendTo($pitchLeftContainer);
                }
            }
        };
        repositionSupportCircles(); // Reposition now.
        $window.on('resize', h4.debounce(repositionSupportCircles, 250));

        // Listen to escape key.

        $(document).keyup(function(e) {
            if (e.keyCode !== 27) return;

            willPause($headlineVideoOverlayVideo);
            $headlineVideoOverlay.stop().hide();
            willPlay($headlineVideoContainerVideo);

            willPause($pitchRightSupportVideoOverlayVideo);
            $pitchRightSupportVideoOverlay.stop().hide();
        });
    });
})(window.jQuery);;
(function() {
    var PRESENT_CLASS_NAME = 'js-on';
    var ACTIVE_CLASS_NAME = 'js-active';
    var OPEN_CLASS_NAME = 'js-open';
    var INERCOM_PRESENT_CLASS_NAME = 'js-with-intercom';

    var ARIA_EXPANDED = 'aria-expanded';
    var ARIA_HIDDEN = 'aria-hidden';
    var ARIA_TAB_INDEX = 'tabindex';

    var ARIA_TRUE = 'true';
    var ARIA_NEGATIVE = '-1';
    var ARIA_FALSE = 'false';

    var widget, widgetTrigger, widgetContent, widgetContentCloseButton, widgetContentLink, widgetActive, widgetOpen, widgetClassList;

    window.recordTracksEventForSalesTeam = function(eventName, eventProps) {
        eventProps = eventProps || {};
        window._tkq = window._tkq || [];
        window._tkq.push(['recordEvent', eventName, eventProps]);
    };

    function init_phone_widget() {
        recordTracksEventForSalesTeam('wpcom_sales_team_phone_widget_loaded');
        widget = document.querySelector('.sw-widget');
        widgetTrigger = widget && widget.querySelector('.sw-widget__trigger button');
        widgetContent = widget && widget.querySelector('.sw-widget__content');
        widgetContentCloseButton = widget && widget.querySelector('.sw-widget__content button');
        widgetContentLink = widget && widget.querySelector('.sw-widget__content a');

        if (!(widget && widgetTrigger && widgetContent && widgetContentCloseButton && widgetContentLink)) {
            return;
        }

        widgetActive = false;
        widgetOpen = false;
        widgetClassList = widget.classList;
        widgetClassList.remove(ACTIVE_CLASS_NAME, OPEN_CLASS_NAME);
        widgetClassList.add(PRESENT_CLASS_NAME);

        init(function() {
            setTimeout(activateWidget, 500);
        });

        runIntercomDetector();
        onIntercomWidgetOpen(closeWidget);
    }

    function activateWidget() {
        if (widgetActive) {
            return;
        }
        widget.removeAttribute(ARIA_HIDDEN);
        widgetClassList.add(ACTIVE_CLASS_NAME);
        widgetTrigger.addEventListener('click', handleTriggerClick, false);
        widgetContentCloseButton.addEventListener('click', handleContentCloseButtonPress, false);
        widgetActive = true;
    }

    function openWidget() {
        window.addEventListener('keydown', handleEscapeKeyPress, false);
        widgetTrigger.setAttribute(ARIA_EXPANDED, ARIA_TRUE);
        widgetContent.removeAttribute(ARIA_HIDDEN);
        widgetContentLink.removeAttribute(ARIA_TAB_INDEX);
        widgetContentCloseButton.removeAttribute(ARIA_TAB_INDEX);
        widgetContentCloseButton.focus();
        widgetClassList.add(OPEN_CLASS_NAME);
        widgetOpen = true;

        trackIntercomEvent('sales-widget-opened');
        hideIntercomWidget();
    }

    function closeWidget() {
        window.removeEventListener('keydown', handleEscapeKeyPress, false);
        widgetTrigger.setAttribute(ARIA_EXPANDED, ARIA_FALSE);
        widgetTrigger.blur();
        widgetContent.setAttribute(ARIA_HIDDEN, ARIA_TRUE);
        widgetContentLink.setAttribute(ARIA_TAB_INDEX, ARIA_NEGATIVE);
        widgetContentCloseButton.removeAttribute(ARIA_TAB_INDEX, ARIA_NEGATIVE);
        widgetContentCloseButton.blur();
        widgetClassList.remove(OPEN_CLASS_NAME);
        widgetOpen = false;

        trackIntercomEvent('sales-widget-closed');
    }

    function handleTriggerClick() {
        if (!widgetActive) {
            return;
        }
        if (widgetOpen) {
            recordTracksEventForSalesTeam('wpcom_sales_team_phone_widget_closed');
            closeWidget();
        } else {
            recordTracksEventForSalesTeam('wpcom_sales_team_phone_widget_opened_manually');
            openWidget();
        }
    }

    function handleContentCloseButtonPress() {
        closeWidget();
        setTimeout(function() {
            widgetTrigger.focus();
        }, 0);
    }

    function handleEscapeKeyPress(event) {
        if (widgetOpen && event.which === 27) {
            handleContentCloseButtonPress();
        }
    }

    /*
     * Intercom-specific funcitons
     */

    function hideIntercomWidget() {
        __runWithinIntercom('hide');
    }

    function onIntercomWidgetOpen(callback) {
        __runWithinIntercom('onShow', callback);
    }

    function trackIntercomEvent(name) {
        __runWithinIntercom('trackEvent', name);
    }

    function runIntercomDetector() {
        if (__detectIntercom()) {
            return true;
        }

        var intercomDetectionLimit = 100;
        var intercomDetector = setInterval(function() {
            if (__detectIntercom() || --intercomDetectionLimit <= 0) {
                clearInterval(intercomDetector);
            }
        }, 300);
    }

    function __detectIntercom() {
        if (document.querySelector('.intercom-launcher-frame')) {
            widgetClassList.add(INERCOM_PRESENT_CLASS_NAME);
            return true;
        }
    }

    function __runWithinIntercom() {
        try {
            window.Intercom.apply(null, toArray(arguments));
        } catch (e) {}
    }

    /*
     * Utilities
     */

    function init(callback) {
        if (document.readyState === 'complete') {
            setTimeout(callback, 0);
        } else {
            window.addEventListener('load', callback, false);
        }
    }

    function toArray(collection) {
        return Array.prototype.slice.call(collection, 0);
    }

    var debug_query = '';
    var DEBUG = false;
    if (window.URLSearchParams) {
        var urlParams = new URLSearchParams(window.location.search || window.salesteam_initial_search_string);
        var variation = urlParams.get('widgets');
        if (['chat', 'phone', 'both', 'original'].indexOf(variation) !== -1) {
            debug_query = '&widgets=' + variation;
            DEBUG = true;
        }
    }
    var request_url = 'https://public-api.wordpress.com/rest/v1.3/sales-widget/settings?url=' + encodeURIComponent(location.origin + location.pathname) + debug_query;
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        return;
    }
    var receive_response = function() {
        try {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    settings_received(JSON.parse(httpRequest.responseText));
                }
            }
        } catch (e) {
            console.log('e', e);
        }
    };
    var init_chat_widget = function() {
        var TEST_APP_ID = 'ow2k3s0x';
        var PROD_APP_ID = 'gyhckdhg';
        var APP_ID = DEBUG ? TEST_APP_ID : PROD_APP_ID;
        window.intercomSettings = {
            app_id: APP_ID
        };
        recordTracksEventForSalesTeam('wpcom_sales_team_chat_widget_loaded');
        (function() {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
                ic('reattach_activator');
                ic('update', w.intercomSettings);
            } else {
                var d = document;
                var i = function() {
                    i.c(arguments);
                };
                i.q = [];
                i.c = function(args) {
                    i.q.push(args);
                };
                w.Intercom = i;
                var l = function() {
                    var s = d.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://widget.intercom.io/widget/' + APP_ID;
                    var x = d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                };
                if (w.attachEvent) {
                    w.attachEvent('onload', l);
                } else {
                    w.addEventListener('load', l, false);
                }
            }
        })();
    };
    var settings_received = function(settings) {
        if (!settings.is_active) {
            return;
        }
        if (settings.chat) {
            init_chat_widget();
        }
        if (settings.phone_number) {
            var container = document.createElement('div');
            container.className = 'sw-widget';
            container.ariaHidden = true;
            container.innerHTML = settings.html;
            document.body.appendChild(container);
            init_phone_widget();
            var phone_number_node = document.querySelector('.sw-content__number ');
            if (phone_number_node && phone_number_node.innerHTML) {
                phone_number_node.innerHTML = '<a href="tel:' + settings.phone_number + '" onclick="javascript:window.recordTracksEventForSalesTeam( \'wpcom_sales_team_phone_widget_number_clicked\' );">' + settings.phone_number + '</a>';
                if (!settings.chat) {
                    setTimeout(function() {
                        recordTracksEventForSalesTeam('wpcom_sales_team_phone_widget_opened_automatically');
                        openWidget();
                    }, 10000);
                }
            }
        }
    };
    httpRequest.onreadystatechange = receive_response;
    httpRequest.withCredentials = true;
    httpRequest.open('GET', request_url, true);
    httpRequest.send();
})();;