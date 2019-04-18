/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+ function($) {
    'use strict';

    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================

    var Tooltip = function(element, options) {
        this.type = null
        this.options = null
        this.enabled = null
        this.timeout = null
        this.hoverState = null
        this.$element = null
        this.inState = null

        this.init('tooltip', element, options)
    }

    Tooltip.VERSION = '3.3.5'

    Tooltip.TRANSITION_DURATION = 150

    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }

    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
        this.inState = {
            click: false,
            hover: false,
            focus: false
        }

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        }

        var triggers = this.options.trigger.split(' ')

        for (var i = triggers.length; i--;) {
            var trigger = triggers[i]

            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }

        this.options.selector ?
            (this._options = $.extend({}, this.options, {
                trigger: 'manual',
                selector: ''
            })) :
            this.fixTitle()
    }

    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }

    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)

        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }

        return options
    }

    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()

        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value
        })

        return options
    }

    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
        }

        if (self.tip().hasClass('in') || self.hoverState == 'in') {
            self.hoverState = 'in'
            return
        }

        clearTimeout(self.timeout)

        self.hoverState = 'in'

        if (!self.options.delay || !self.options.delay.show) return self.show()

        self.timeout = setTimeout(function() {
            if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
    }

    Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
            if (this.inState[key]) return true
        }

        return false
    }

    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ?
            obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
            self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
        }

        if (self.isInStateTrue()) return

        clearTimeout(self.timeout)

        self.hoverState = 'out'

        if (!self.options.delay || !self.options.delay.hide) return self.hide()

        self.timeout = setTimeout(function() {
            if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
    }

    Tooltip.prototype.show = function() {
        var e = $.Event('show.bs.' + this.type)

        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)

            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
            if (e.isDefaultPrevented() || !inDom) return
            var that = this

            var $tip = this.tip()

            var tipId = this.getUID(this.type)

            this.setContent()
            $tip.attr('id', tipId)
            this.$element.attr('aria-describedby', tipId)

            if (this.options.animation) $tip.addClass('fade')

            var placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement

            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

            $tip
                .detach()
                .css({
                    top: 0,
                    left: 0,
                    display: 'block'
                })
                .addClass(placement)
                .data('bs.' + this.type, this)

            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            this.$element.trigger('inserted.bs.' + this.type)

            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight

            if (autoPlace) {
                var orgPlacement = placement
                var viewportDim = this.getPosition(this.$viewport)

                placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' :
                    placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' :
                    placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' :
                    placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' :
                    placement

                $tip
                    .removeClass(orgPlacement)
                    .addClass(placement)
            }

            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

            this.applyPlacement(calculatedOffset, placement)

            var complete = function() {
                var prevHoverState = that.hoverState
                that.$element.trigger('shown.bs.' + that.type)
                that.hoverState = null

                if (prevHoverState == 'out') that.leave(that)
            }

            $.support.transition && this.$tip.hasClass('fade') ?
                $tip
                .one('bsTransitionEnd', complete)
                .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
                complete()
        }
    }

    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0
        if (isNaN(marginLeft)) marginLeft = 0

        offset.top += marginTop
        offset.left += marginLeft

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)

        $tip.addClass('in')

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight

        if (placement == 'top' && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

        if (delta.left) offset.left += delta.left
        else offset.top += delta.top

        var isVertical = /top|bottom/.test(placement)
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
    }

    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow()
            .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
            .css(isVertical ? 'top' : 'left', '')
    }

    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }

    Tooltip.prototype.hide = function(callback) {
        var that = this
        var $tip = $(this.$tip)
        var e = $.Event('hide.bs.' + this.type)

        function complete() {
            if (that.hoverState != 'in') $tip.detach()
            that.$element
                .removeAttr('aria-describedby')
                .trigger('hidden.bs.' + that.type)
            callback && callback()
        }

        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip.removeClass('in')

        $.support.transition && $tip.hasClass('fade') ?
            $tip
            .one('bsTransitionEnd', complete)
            .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
            complete()

        this.hoverState = null

        return this
    }

    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }

    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }

    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element

        var el = $element[0]
        var isBody = el.tagName == 'BODY'

        var elRect = el.getBoundingClientRect()
        if (elRect.width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            })
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset()
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        }
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null

        return $.extend({}, elRect, scroll, outerDims, elOffset)
    }

    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
                top: pos.top + pos.height,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } :
            placement == 'top' ? {
                top: pos.top - actualHeight,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } :
            placement == 'left' ? {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left - actualWidth
            } :
            /* placement == 'right' */
            {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left + pos.width
            }

    }

    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        }
        if (!this.$viewport) return delta

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)

        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if (topEdgeOffset < viewportDimensions.top) { // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if (leftEdgeOffset < viewportDimensions.left) { // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }

        return delta
    }

    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options

        title = $e.attr('data-original-title') ||
            (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)

        return title
    }

    Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))
        return prefix
    }

    Tooltip.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template)
            if (this.$tip.length != 1) {
                throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
            }
        }
        return this.$tip
    }

    Tooltip.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    }

    Tooltip.prototype.enable = function() {
        this.enabled = true
    }

    Tooltip.prototype.disable = function() {
        this.enabled = false
    }

    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }

    Tooltip.prototype.toggle = function(e) {
        var self = this
        if (e) {
            self = $(e.currentTarget).data('bs.' + this.type)
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions())
                $(e.currentTarget).data('bs.' + this.type, self)
            }
        }

        if (e) {
            self.inState.click = !self.inState.click
            if (self.isInStateTrue()) self.enter(self)
            else self.leave(self)
        } else {
            self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
        }
    }

    Tooltip.prototype.destroy = function() {
        var that = this
        clearTimeout(this.timeout)
        this.hide(function() {
            that.$element.off('.' + that.type).removeData('bs.' + that.type)
            if (that.$tip) {
                that.$tip.detach()
            }
            that.$tip = null
            that.$arrow = null
            that.$viewport = null
        })
    }


    // TOOLTIP PLUGIN DEFINITION
    // =========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option

            if (!data && /destroy|hide/.test(option)) return
            if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tooltip

    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip


    // TOOLTIP NO CONFLICT
    // ===================

    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }

}(jQuery);;
/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // MODAL CLASS DEFINITION
    // ======================

    var Modal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$dialog = this.$element.find('.modal-dialog')
        this.$backdrop = null
        this.isShown = null
        this.originalBodyPad = null
        this.scrollbarWidth = 0
        this.ignoreBackdropClick = false

        if (this.options.remote) {
            this.$element
                .find('.modal-content')
                .load(this.options.remote, $.proxy(function() {
                    this.$element.trigger('loaded.bs.modal')
                }, this))
        }
    }

    Modal.VERSION = '3.3.5'

    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150

    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }

    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.checkScrollbar()
        this.setScrollbar()
        this.$body.addClass('modal-open')

        this.escape()
        this.resize()

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

        this.$dialog.on('mousedown.dismiss.bs.modal', function() {
            that.$element.one('mouseup.dismiss.bs.modal', function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
            })
        })

        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')

            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body) // don't move modals dom position
            }

            that.$element
                .show()
                .scrollTop(0)

            that.adjustDialog()

            if (transition) {
                that.$element[0].offsetWidth // force reflow
            }

            that.$element.addClass('in')

            that.enforceFocus()

            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })

            transition ?
                that.$dialog // wait for modal to slide in
                .one('bsTransitionEnd', function() {
                    that.$element.trigger('focus').trigger(e)
                })
                .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
                that.$element.trigger('focus').trigger(e)
        })
    }

    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault()

        e = $.Event('hide.bs.modal')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()
        this.resize()

        $(document).off('focusin.bs.modal')

        this.$element
            .removeClass('in')
            .off('click.dismiss.bs.modal')
            .off('mouseup.dismiss.bs.modal')

        this.$dialog.off('mousedown.dismiss.bs.modal')

        $.support.transition && this.$element.hasClass('fade') ?
            this.$element
            .one('bsTransitionEnd', $.proxy(this.hideModal, this))
            .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
            this.hideModal()
    }

    Modal.prototype.enforceFocus = function() {
        $(document)
            .off('focusin.bs.modal') // guard against infinite focus loop
            .on('focusin.bs.modal', $.proxy(function(e) {
                if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                    this.$element.trigger('focus')
                }
            }, this))
    }

    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keydown.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keydown.dismiss.bs.modal')
        }
    }

    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
        } else {
            $(window).off('resize.bs.modal')
        }
    }

    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$body.removeClass('modal-open')
            that.resetAdjustments()
            that.resetScrollbar()
            that.$element.trigger('hidden.bs.modal')
        })
    }

    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    Modal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate

            this.$backdrop = $(document.createElement('div'))
                .addClass('modal-backdrop ' + animate)
                .appendTo(this.$body)

            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false
                    return
                }
                if (e.target !== e.currentTarget) return
                this.options.backdrop == 'static' ?
                    this.$element[0].focus() :
                    this.hide()
            }, this))

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in')

            if (!callback) return

            doAnimate ?
                this.$backdrop
                .one('bsTransitionEnd', callback)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callback()

        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')

            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ?
                this.$backdrop
                .one('bsTransitionEnd', callbackRemove)
                .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
                callbackRemove()

        } else if (callback) {
            callback()
        }
    }

    // these following methods are used to handle overflowing modals

    Modal.prototype.handleUpdate = function() {
        this.adjustDialog()
    }

    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        })
    }

    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: '',
            paddingRight: ''
        })
    }

    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth
        if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect()
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
        this.scrollbarWidth = this.measureScrollbar()
    }

    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        this.originalBodyPad = document.body.style.paddingRight || ''
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }

    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', this.originalBodyPad)
    }

    Modal.prototype.measureScrollbar = function() { // thx walsh
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }


    // MODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
            if (typeof option == 'string') data[option](_relatedTarget)
            else if (options.show) data.show(_relatedTarget)
        })
    }

    var old = $.fn.modal

    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal


    // MODAL NO CONFLICT
    // =================

    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }


    // MODAL DATA-API
    // ==============

    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())

        if ($this.is('a')) e.preventDefault()

        $target.one('show.bs.modal', function(showEvent) {
            if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
            $target.one('hidden.bs.modal', function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })

}(jQuery);;
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // DROPDOWN CLASS DEFINITION
    // =========================

    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }

    Dropdown.VERSION = '3.3.5'

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        return $parent && $parent.length ? $parent : $this.parent()
    }

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $this = $(this)
            var $parent = getParent($this)
            var relatedTarget = {
                relatedTarget: this
            }

            if (!$parent.hasClass('open')) return

            if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this.attr('aria-expanded', 'false')
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }

    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        clearMenus()

        if (!isActive) {
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement('div'))
                    .addClass('dropdown-backdrop')
                    .insertAfter($(this))
                    .on('click', clearMenus)
            }

            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

            if (e.isDefaultPrevented()) return

            $this
                .trigger('focus')
                .attr('aria-expanded', 'true')

            $parent
                .toggleClass('open')
                .trigger('shown.bs.dropdown', relatedTarget)
        }

        return false
    }

    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

        var $this = $(this)

        e.preventDefault()
        e.stopPropagation()

        if ($this.is('.disabled, :disabled')) return

        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }

        var desc = ' li:not(.disabled):visible a'
        var $items = $parent.find('.dropdown-menu' + desc)

        if (!$items.length) return

        var index = $items.index(e.target)

        if (e.which == 38 && index > 0) index-- // up
        if (e.which == 40 && index < $items.length - 1) index++ // down
        if (!~index) index = 0

        $items.eq(index).trigger('focus')
    }


    // DROPDOWN PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')

            if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string') data[option].call($this)
        })
    }

    var old = $.fn.dropdown

    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown


    // DROPDOWN NO CONFLICT
    // ====================

    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }


    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================

    $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
            e.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);;
/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // TAB CLASS DEFINITION
    // ====================

    var Tab = function(element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element)
        // jscs:enable requireDollarBeforejQueryAssignment
    }

    Tab.VERSION = '3.3.5'

    Tab.TRANSITION_DURATION = 150

    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')

        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return

        var $previous = $ul.find('.active:last a')
        var hideEvent = $.Event('hide.bs.tab', {
            relatedTarget: $this[0]
        })
        var showEvent = $.Event('show.bs.tab', {
            relatedTarget: $previous[0]
        })

        $previous.trigger(hideEvent)
        $this.trigger(showEvent)

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

        var $target = $(selector)

        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: 'hidden.bs.tab',
                relatedTarget: $this[0]
            })
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: $previous[0]
            })
        })
    }

    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback &&
            $.support.transition &&
            ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

        function next() {
            $active
                .removeClass('active')
                .find('> .dropdown-menu > .active')
                .removeClass('active')
                .end()
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', false)

            element
                .addClass('active')
                .find('[data-toggle="tab"]')
                .attr('aria-expanded', true)

            if (transition) {
                element[0].offsetWidth // reflow for transition
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }

            if (element.parent('.dropdown-menu').length) {
                element
                    .closest('li.dropdown')
                    .addClass('active')
                    .end()
                    .find('[data-toggle="tab"]')
                    .attr('aria-expanded', true)
            }

            callback && callback()
        }

        $active.length && transition ?
            $active
            .one('bsTransitionEnd', next)
            .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
            next()

        $active.removeClass('in')
    }


    // TAB PLUGIN DEFINITION
    // =====================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tab')

            if (!data) $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.tab

    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab


    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function() {
        $.fn.tab = old
        return this
    }


    // TAB DATA-API
    // ============

    var clickHandler = function(e) {
        e.preventDefault()
        Plugin.call($(this), 'show')
    }

    $(document)
        .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
        .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);;
/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+
function($) {
    'use strict';

    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================

    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
            '[data-toggle="collapse"][data-target="#' + element.id + '"]')
        this.transitioning = null

        if (this.options.parent) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger)
        }

        if (this.options.toggle) this.toggle()
    }

    Collapse.VERSION = '3.3.5'

    Collapse.TRANSITION_DURATION = 350

    Collapse.DEFAULTS = {
        toggle: true
    }

    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }

    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in')) return

        var activesData
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

        if (actives && actives.length) {
            activesData = actives.data('bs.collapse')
            if (activesData && activesData.transitioning) return
        }

        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        if (actives && actives.length) {
            Plugin.call(actives, 'hide')
            activesData || actives.data('bs.collapse', null)
        }

        var dimension = this.dimension()

        this.$element
            .removeClass('collapse')
            .addClass('collapsing')[dimension](0)
            .attr('aria-expanded', true)

        this.$trigger
            .removeClass('collapsed')
            .attr('aria-expanded', true)

        this.transitioning = 1

        var complete = function() {
            this.$element
                .removeClass('collapsing')
                .addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element
                .trigger('shown.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        var scrollSize = $.camelCase(['scroll', dimension].join('-'))

        this.$element
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
    }

    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in')) return

        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        var dimension = this.dimension()

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight

        this.$element
            .addClass('collapsing')
            .removeClass('collapse in')
            .attr('aria-expanded', false)

        this.$trigger
            .addClass('collapsed')
            .attr('aria-expanded', false)

        this.transitioning = 1

        var complete = function() {
            this.transitioning = 0
            this.$element
                .removeClass('collapsing')
                .addClass('collapse')
                .trigger('hidden.bs.collapse')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element[dimension](0)
            .one('bsTransitionEnd', $.proxy(complete, this))
            .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
    }

    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

    Collapse.prototype.getParent = function() {
        return $(this.options.parent)
            .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
            .each($.proxy(function(i, element) {
                var $element = $(element)
                this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
            }, this))
            .end()
    }

    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass('in')

        $element.attr('aria-expanded', isOpen)
        $trigger
            .toggleClass('collapsed', !isOpen)
            .attr('aria-expanded', isOpen)
    }

    function getTargetFromTrigger($trigger) {
        var href
        var target = $trigger.attr('data-target') ||
            (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

        return $(target)
    }


    // COLLAPSE PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
            if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.collapse

    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse


    // COLLAPSE NO CONFLICT
    // ====================

    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }


    // COLLAPSE DATA-API
    // =================

    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
        var $this = $(this)

        if (!$this.attr('data-target')) e.preventDefault()

        var $target = getTargetFromTrigger($this)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()

        Plugin.call($target, option)
    })

}(jQuery);;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.5.9
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(a, b) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.options.asNavFor;
        d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.html(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.target);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(b) {
            a("img[data-lazy]", b).each(function() {
                var b = a(this),
                    c = a(this).attr("data-lazy"),
                    d = document.createElement("img");
                d.onload = function() {
                    b.animate({
                        opacity: 0
                    }, 100, function() {
                        b.attr("src", c).animate({
                            opacity: 1
                        }, 200, function() {
                            b.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, d.src = c
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function() {
        var a = this;
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA()
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function() {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition()
        }).error(function() {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                } b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler()
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
        var f, g, e = this;
        if ("responsive" === b && "array" === a.type(c))
            for (g in c)
                if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];
                else {
                    for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
                    e.options.responsive.push(c[g])
                }
        else e.options[b] = c;
        d === !0 && (e.unload(), e.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.setPaused = function(a) {
        var b = this;
        b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay())
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case "left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case "right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.on("focus.slick blur.slick", "*", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()))
            }, 0)
        })
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});;
(function($) {

    var palladium = palladium || {};

    /** palladium init() **/

    window.onload = function() {
        $('.list-toggle-grid').show();

        //test for touch events support and if not supported, attach .touch-device class to the HTML tag.
        function detectTouch() {
            if (("ontouchstart" in document.documentElement)) {
                document.documentElement.className += " touch-device";
            }
        }

        detectTouch();

    };

    palladium.menuDesktopDropdown = function() {

        $('.header-nav-link').click(function(event) {

            //prevent from navigation to links if javascript is enabled
            event.preventDefault();
            //remove active classes
            $(this).toggleClass('active-menu').siblings().removeClass('active-menu');
            $(this).find('.carret-dropdown').toggleClass('visible-arrow').parent().parent().siblings().find('.carret-dropdown').removeClass('visible-arrow');

            var menu_attr = $(this).find('a').data("link");

            $('.header-menu-dropdown[data-link!="' + menu_attr + '"]').removeClass('active-dropdown');

            $('.header-menu-dropdown[data-link="' + menu_attr + '"]').toggleClass('active-dropdown',
                $(document).on('click', function(e) {
                    if ($(e.target).closest(".header-menu-dropdown.active-dropdown").length === 0 && $(e.target).closest(".header-nav-link").length !== 1) {
                        $('.header-nav-link.active-menu').removeClass('active-menu');
                        $('.header-menu-dropdown.active-dropdown').removeClass('active-dropdown');
                        $('.header-nav-link .carret-dropdown.visible-arrow').removeClass('visible-arrow');
                    }
                })
            );
        });
    };

    //global mobile header dropdown toggle
    palladium.menuMobileDropdown = function() {
        $('.accordion-menu').each(function() {
            var $dropdown = $(this);

            $(".accordion-title", $dropdown).click(function(e) {
                e.preventDefault();
                $div = $(".toggled-content", $dropdown);
                $div.slideToggle();
                $(".toggled-content").not($div).slideUp();

                return false;
            });
        });

        // Animation for career content type
        $('.mobile-header-fa.mobile-header-search').click(function() {
            $('.mobile-header-dropdown').not($('.mobile-header-dropdown.header-search')).slideUp();
            $(this).find('.carret-dropdown').toggleClass('visible-arrow').parent().siblings().find('.carret-dropdown').removeClass('visible-arrow');
            $('.mobile-header-dropdown.header-search').slideToggle();
        });


        $('.mobile-header-fa.mobile-header-nav').click(function(event) {
            $('.mobile-header-dropdown').not($('.mobile-header-dropdown.menu')).slideUp();
            $(this).find('.carret-dropdown').toggleClass('visible-arrow').parent().siblings().find('.carret-dropdown').removeClass('visible-arrow');
            $('.mobile-header-dropdown.menu').slideToggle();
        });


        $('.mobile-header-fa.mobile-header-share').click(function(event) {
            $('.mobile-header-dropdown').not($('.mobile-header-dropdown.header-share')).slideUp();
            $(this).find('.carret-dropdown').toggleClass('visible-arrow').parent().siblings().find('.carret-dropdown').removeClass('visible-arrow');
            $('.mobile-header-dropdown.header-share').slideToggle();
        });

    }

    palladium.socialShare = function() {

        function socialShare(mediaName) {
            var currentURL = window.location;
            var pageInfo = encodeURIComponent(document.title + ' ');
            if (mediaName == 'facebook') {
                var socialLink = 'http://www.facebook.com/sharer/sharer.php?u=' + currentURL;
            } else if (mediaName == 'twitter') {
                var socialLink = 'http://twitter.com/share?url=' + currentURL + '&text=' + pageInfo;
            } else if (mediaName == 'google') {
                var socialLink = 'https://plus.google.com/share?url=' + currentURL;
            } else if (mediaName == 'linkedin') {
                var socialLink = 'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + currentURL + '&amp;title=' + pageInfo;
            } else if (mediaName == 'delicious') {
                var socialLink = 'https://delicious.com/save?v=5&amp;noui&amp;jump=close&amp;url=' + currentURL + '&amp;title=' + pageInfo;
            } else if (mediaName == 'digg') {
                var socialLink = 'http://digg.com/submit?&amp;url=' + currentURL + '&amp;title=' + pageInfo;
            } else if (mediaName == 'reddit') {
                var socialLink = 'http://reddit.com/submit?&amp;url=' + currentURL + '&amp;title=' + pageInfo;
            } else if (mediaName == 'stumbleupon') {
                var socialLink = 'http://www.stumbleupon.com/submit?url=' + currentURL + '&amp;title=' + pageInfo;
            } else if (mediaName == 'pinterest') {
                var socialLink = 'http://pinterest.com/pin/create/button/?url=' + currentURL + '&amp;title=' + pageInfo;
            }
            window.open((socialLink));
        }

        $('.share-facebook').on('click', function() {
            socialShare('facebook');
        });
        $('.share-twitter').on('click', function() {
            socialShare('twitter');
        });
        $('.share-google').on('click', function() {
            socialShare('google');
        });
        $('.share-linkedin').on('click', function() {
            socialShare('linkedin');
        });
        $('.share-delicious').on('click', function() {
            socialShare('delicious');
        });
        $('.share-digg').on('click', function() {
            socialShare('digg');
        });
        $('.share-reddit').on('click', function() {
            socialShare('reddit');
        });
        $('.share-stumbleupon').on('click', function() {
            socialShare('stumbleupon');
        });
        $('.share-pinterest').on('click', function() {
            socialShare('pinterest');
        });

        $('.header-social-share').click(function(event) {
            $(this).toggleClass('active-dropdown');
            $('.header-social-container').toggleClass('active-dropdown',
                $(document).on('click', function(e) {
                    if ($(e.target).closest(".header-social-container.active-dropdown").length === 0 && $(e.target).closest(".header-social-share").length !== 1) {
                        $(".header-social-container").removeClass('active-dropdown');
                        $('.header-social-share .carret-dropdown.visible-arrow').removeClass('visible-arrow');
                        $('.header-social-share.active-dropdown').removeClass('active-dropdown');
                    }
                })
            );
            $(this).find('.carret-dropdown').toggleClass('visible-arrow');
        });
    };

    palladium.carousel = function() {
        if ($('.carousel-slider').length) {

            $('.carousel-slider').slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 8000,
            }).show();

            // Arrows.
            $('.carousel-prev').click(function(event) {
                $(this).parents('.carousel-custom-arrow').siblings('.carousel-slider').slick('slickPrev');
            });

            $('.carousel-next').click(function(event) {
                $(this).parents('.carousel-custom-arrow').siblings('.carousel-slider').slick('slickNext');
            });
        };
    }

    // Science Support Pages.
    palladium.ssp = function() {
        // When there is no right sidebar (3-col) content (no contacts or keywords),
        // fix the main section to use the full width (10-col instead of 7).
        if ($('.node-type-science-support-page').length > 0 && $('.right-column').text().trim() == '') {
            $('.sub-content').toggleClass('col-sm-7 col-sm-10');
        }
    }

    palladium.sco = function() {
        $('.view-citation').click(function(event) {
            $(this).next('.sco-citation-block').toggle();
        });
        // "View All" for Science Objects.
        var terms = $('.list-unstyled, .sco-keywords').find('li');
        if (terms.length > 5) {
            $('.sco-keyword-more').show();
            terms.each(function(i) {
                if (i > 4) {
                    $(this).hide();
                }
            });
            $('.sco-keyword-more').click(function(event) {
                event.preventDefault();
                terms.each(function(i) {
                    if (i > 4) {
                        $(this).toggle();
                    }
                });
                if ($(this).find('i').hasClass('fa-angle-down')) {
                    $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                } else if ($(this).find('i').hasClass('fa-angle-up')) {
                    $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                }
            });
        }
    }

    palladium.dropdown = function() {
        //BEF combined filter
        if ($('.views-widget-sort-sort_bef_combine').length) {
            $('.views-widget-sort-sort_bef_combine .chosen-single.chosen-default span').html('Select Order');
            $('.views-widget-sort-sort_bef_combine select option[selected="selected"]').html('Select Order');

        };
    }

    /**
     * Show or hide exposed filter for related science center view if view has content
     **/
    palladium.showExposedFilter = function() {
        $('.view-related-science-center-object').each(function(index, el) {
            if ($(this).find('.view-content').length) {
                return;
            } else {
                $(this).find('.view-filters').hide();
                $(this).find('.filter-count').hide();
            }
        });
    }

    palladium.bioToggle = function() {
        if ($('h5.bio-toggle').length > 0) {
            $('h5.bio-toggle').click(function() {
                if ($(this).find('i').hasClass('fa-angle-down')) {
                    $(this).next().slideDown('fast').prev().html('Hide Biography <i class="fa fa-angle-up"></i>');
                } else if ($(this).find('i').hasClass('fa-angle-up')) {
                    $(this).next().slideUp('fast').prev().html('View Biography <i class="fa fa-angle-down"></i>');
                }
            });
        }
    }

    palladium.attributionsPublication = function() {

        // for publications view, add class only if field class exists
        if ($('.publications-view').length) {
            $('.publications-view').each(function() {
                if ($(this).children().hasClass("cost-center") || $(this).children().hasClass("mission-area") || $(this).children().hasClass("region") || $(this).children().hasClass("program")) {
                    $(this).addClass('attribution');
                }
            });
        };
    }

    palladium.quickTabsHistoryPushState = function() {
        // Adds a class to each quicktab that reflects it's name.
        $('.quicktabs-tabs .quicktabs-tab').each(function(e) {
            var qtclass = $(this).text().replace('(active tab)', '').replace(/\ /g, '-').toLowerCase();
            $(this).addClass('qt-' + qtclass);
        });
        // Populate history with original tab/pagination page
        if ($('.quicktabs-tabs').length != 0) {
            var url = $('.quicktabs-tabs li.active a').attr("href");
            history.pushState(null, null, url);
        }
        // Adds the tab click to the browser history
        $('.quicktabs-tabs').find('li a').on('click', function(e) {
            if (e.isTrigger != 3 && location.pathname + location.search + location.hash != $(this).attr("href")) {
                var url = $(this).attr("href");
                history.pushState(null, null, url);
            }
        });
        window.addEventListener("popstate", function(e) {
            //location.reload(); <- easy way if needed.
            if ($('.quicktabs-tabs').length != 0) {
                var currentHref = location.pathname + location.search + location.hash;
                $('.quicktabs-tabs a[href="' + currentHref + '"]').trigger('click', 'back');
            }
        });
    }

    palladium.chosen508Plugin = function() {
        $widgets = $('.views-exposed-widget').not('.views-submit-button, .views-reset-button');
        $($widgets).each(function(k, v) {
            var widgetID = $(this).attr('id');
            widgetID = widgetID.substr(0, widgetID.length - 8);
            $(this).find('.chosen-search').prepend('<label for="' + widgetID + '-search" class="sr-only">Search</label>');
            $(this).find('.chosen-search input').attr('id', widgetID + '-search');
        });
        $('.views-exposed-widget').find('.form-type-date-select label').text('Select Year');

    }

    palladium.toggleGrid = function(obj) {
        $(obj).find('.views-column').removeClass('col-sm-12').addClass('col-xs-6 col-sm-3');
        $(obj).removeClass('list-view').addClass('grid-view');
    }

    palladium.toggleList = function(obj) {
        $(obj).find('.views-column').removeClass('col-xs-6 col-sm-3').addClass('col-sm-12');
        $(obj).removeClass('grid-view').addClass('list-view');
    }

    palladium.setSessionToggle = function() {
        if ($('.list-toggle-grid').length) {
            $('.grid-list-default-grid').each(function(i, obj) {
                var gridToggle = obj;
                $(gridToggle).closest('.view').find('.toggle-view-mode .list').removeClass('active-view').end().find('.toggle-view-mode .grid').addClass('active-view');
                palladium.toggleGrid(gridToggle);
            });

            $('.list-toggle-grid:not(".grid-list-default-grid")').each(function(i, obj) {
                var listToggle = obj;
                $(listToggle).closest('.view').find('.toggle-view-mode .grid').removeClass('active-view').end().find('.toggle-view-mode .list').addClass('active-view');
                palladium.toggleList(listToggle);
            });
        }
    }

    palladium.toggleView = function() {

        // Apply appropriate column classes on different view modes
        $('.toggle-view-mode button').on('click', function(e) {
            if ($(this).hasClass('grid')) {
                ;
                $(this).siblings('button').removeClass('active-view');
                $(this).addClass('active-view');
                $(this).closest('.view').find('.list-toggle-grid').removeClass('list-view').addClass('grid-view').end().find('.list-toggle-grid .views-column').removeClass('col-sm-12').addClass('col-xs-6 col-sm-3');
            } else if ($(this).hasClass('list')) {
                $(this).siblings('button').removeClass('active-view');
                $(this).addClass('active-view');
                $(this).closest('.view').find('.list-toggle-grid').removeClass('grid-view').addClass('list-view').end().find('.list-toggle-grid .views-column').removeClass('col-xs-6 col-sm-3').addClass('col-sm-12');
            }
        });
    }

    palladium.ajaxToggle = function(toggleClass, obj) {
        var currentView = obj;
        var toggleClass = toggleClass;
        if (toggleClass == 'list-view') {
            $(currentView).find('.view-filters .toggle-view-mode .grid').removeClass('active-view');
            $(currentView).find('.view-filters .toggle-view-mode .list').addClass('active-view');
            $(currentView).find('.view-content .list-toggle-grid .views-column').removeClass('col-xs-6 col-sm-3').addClass('col-sm-12');
            $(currentView).find('.view-content .list-toggle-grid').removeClass('grid-view').addClass('list-view');
        } else if (toggleClass == 'grid-view') {
            $(currentView).find('.view-filters .toggle-view-mode .list').removeClass('active-view');
            $(currentView).find('.view-filters .toggle-view-mode .grid').addClass('active-view');
            $(currentView).find('.view-content .list-toggle-grid .views-column').removeClass('col-sm-12').addClass('col-xs-6 col-sm-3');
            $(currentView).find('.view-content .list-toggle-grid').removeClass('list-view').addClass('grid-view');
        }
    }

    /**
     * Gets current view toggle when paginating
     **/
    palladium.whichToggle = function() {
        //default
        whichToggle = 'list-view';
        $('.pagination-container a, .toggle-viewmode-view .views-submit-button button').click(function() {
            var whichList = $(this).closest('.view').find('.view-content .list-toggle-grid');
            whichToggle = 'list-view';
            if ($(whichList).hasClass('grid-view')) {
                whichToggle = 'grid-view';
            }
        });
    }

    /** palladium init() **/

    palladium.init = function() {

        palladium.menuDesktopDropdown();
        palladium.menuMobileDropdown();
        palladium.socialShare();
        palladium.carousel();
        palladium.sco();
        palladium.ssp();
        palladium.showExposedFilter();
        palladium.dropdown();
        palladium.bioToggle();
        palladium.attributionsPublication();
        palladium.quickTabsHistoryPushState();
        palladium.chosen508Plugin();
        palladium.setSessionToggle();
        palladium.toggleView();
        palladium.whichToggle();

        Drupal.behaviors.toggleLoad = {
            attach: function(context, settings) {
                if ($('.list-toggle-grid').length) {
                    palladium.ajaxToggle(whichToggle, context);
                    palladium.whichToggle();
                    palladium.toggleView();
                    $('.list-toggle-grid').show();
                }
            }
        }

        Drupal.behaviors.viewsReload = {
            attach: function(context, settings) {
                // Publication citations.
                if ($('.view-citation').length) {
                    $('.view-citation', context).click(function() {
                        $(this).next('.sco-citation-block').toggle();
                    });
                }

                // Publication attributions
                palladium.attributionsPublication();

                // Chosen dropdown.
                if ($('.views-exposed-widget .form-select').length) {
                    palladium.dropdown();
                }
            }
        };

        $(window).on('resize', function() {
            if ($(window).width() > 767) {
                $('.mobile-header-dropdown.menu').slideUp();
                $('.mobile-header-dropdown.header-search').slideUp();
                $('.mobile-header-dropdown.header-share').slideUp();
                $('.mobile-header-fa .carret-dropdown.visible-arrow').toggleClass('visible-arrow');
            }
            if ($(window).width() < 767) {
                // Dropdown menu
                $('.header-menu-dropdown.active-dropdown').toggleClass('active-dropdown');
                $('.header-nav-link.active-menu').toggleClass('active-menu');
                $('.header-nav-link .carret-dropdown.visible-arrow').toggleClass('visible-arrow');

                // Toggle sharing
                $('.header-social-share.active-social').toggleClass('active-social');
                $('.header-social-container.active-social').toggleClass('active-social');
            }
        });

        // Begin back to top functionality
        var $top = $('.back-to-top');

        // Store the initial position of the carat button
        $(window).scroll(function() {
            if ($(document).scrollTop() > 100) {
                // if so, ad the fixed class
                $top.fadeIn(100);
                $top.addClass('show');
            } else {
                // otherwise remove it
                $top.fadeOut(200);
                $top.removeClass('show');
            }
        });

        $top.click(function() {
            $('html, body').animate({
                scrollTop: $('html, body').offset().top
            }, 500);
        });
    };

    $(document).ready(palladium.init);

    /* Fix buginess with Reset button on exposed views in panels with ajax enabled. */
    /* Just take the user back to where they started when Reset is clicked. */
    $(document).on('click', '.views-reset-button .form-submit', function(event) {
        if ($(".views-reset-button").has(".es-reset") || $(".views-reset-button").parents().find('form[action="/"]').length != 0) {
            window.location.reload();
            return false;
        } else {
            window.location = window.location.href.split('?')[0];
            return false;
        }
    });

    $(document).ready(function() {
        $("#webchat").click(function(e) {
            e.preventDefault();
            BG.startChatWithIssueId('26', true);
            return false;
            console.log('no way');
        });

        //hooks into bootstrap collapse for scald transcripts
        $('#transcript-info').on('show.bs.collapse', function() {
            $('#transcript-link .transcript-copy').text('Hide Transcript');
            if ($('#transcript-link').find('i').hasClass('fa-angle-down')) {
                $('#transcript-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else if ($('#transcript-link').find('i').hasClass('fa-angle-up')) {
                $('#transcript-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });

        $('#transcript-info').on('hide.bs.collapse', function() {
            $('#transcript-link .transcript-copy').text('View Transcript');
            if ($('#transcript-link').find('i').hasClass('fa-angle-down')) {
                $('#transcript-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            } else if ($('#transcript-link').find('i').hasClass('fa-angle-up')) {
                $('#transcript-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
            }
        });

    });

})(jQuery);


;
(function($) {
    'use strict';

    //<editor-fold desc="Shims">
    if (!String.prototype.includes) {
        (function() {
            'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
            var toString = {}.toString;
            var defineProperty = (function() {
                // IE 8 only supports `Object.defineProperty` on DOM elements
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch (error) {}
                return result;
            }());
            var indexOf = ''.indexOf;
            var includes = function(search) {
                if (this == null) {
                    throw new TypeError();
                }
                var string = String(this);
                if (search && toString.call(search) == '[object RegExp]') {
                    throw new TypeError();
                }
                var stringLength = string.length;
                var searchString = String(search);
                var searchLength = searchString.length;
                var position = arguments.length > 1 ? arguments[1] : undefined;
                // `ToInteger`
                var pos = position ? Number(position) : 0;
                if (pos != pos) { // better `isNaN`
                    pos = 0;
                }
                var start = Math.min(Math.max(pos, 0), stringLength);
                // Avoid the `indexOf` call if no match is possible
                if (searchLength + start > stringLength) {
                    return false;
                }
                return indexOf.call(string, searchString, pos) != -1;
            };
            if (defineProperty) {
                defineProperty(String.prototype, 'includes', {
                    'value': includes,
                    'configurable': true,
                    'writable': true
                });
            } else {
                String.prototype.includes = includes;
            }
        }());
    }

    if (!String.prototype.startsWith) {
        (function() {
            'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
            var defineProperty = (function() {
                // IE 8 only supports `Object.defineProperty` on DOM elements
                try {
                    var object = {};
                    var $defineProperty = Object.defineProperty;
                    var result = $defineProperty(object, object, object) && $defineProperty;
                } catch (error) {}
                return result;
            }());
            var toString = {}.toString;
            var startsWith = function(search) {
                if (this == null) {
                    throw new TypeError();
                }
                var string = String(this);
                if (search && toString.call(search) == '[object RegExp]') {
                    throw new TypeError();
                }
                var stringLength = string.length;
                var searchString = String(search);
                var searchLength = searchString.length;
                var position = arguments.length > 1 ? arguments[1] : undefined;
                // `ToInteger`
                var pos = position ? Number(position) : 0;
                if (pos != pos) { // better `isNaN`
                    pos = 0;
                }
                var start = Math.min(Math.max(pos, 0), stringLength);
                // Avoid the `indexOf` call if no match is possible
                if (searchLength + start > stringLength) {
                    return false;
                }
                var index = -1;
                while (++index < searchLength) {
                    if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
                        return false;
                    }
                }
                return true;
            };
            if (defineProperty) {
                defineProperty(String.prototype, 'startsWith', {
                    'value': startsWith,
                    'configurable': true,
                    'writable': true
                });
            } else {
                String.prototype.startsWith = startsWith;
            }
        }());
    }

    if (!Object.keys) {
        Object.keys = function(
            o, // object
            k, // key
            r // result array
        ) {
            // initialize object and result
            r = [];
            // iterate over object keys
            for (k in o)
                // fill result array with non-prototypical keys
                r.hasOwnProperty.call(o, k) && r.push(k);
            // return result
            return r;
        };
    }

    // set data-selected on select element if the value has been programmatically selected
    // prior to initialization of bootstrap-select
    // * consider removing or replacing an alternative method *
    var valHooks = {
        useDefault: false,
        _set: $.valHooks.select.set
    };

    $.valHooks.select.set = function(elem, value) {
        if (value && !valHooks.useDefault) $(elem).data('selected', true);

        return valHooks._set.apply(this, arguments);
    };

    var changed_arguments = null;

    var EventIsSupported = (function() {
        try {
            new Event('change');
            return true;
        } catch (e) {
            return false;
        }
    })();

    $.fn.triggerNative = function(eventName) {
        var el = this[0],
            event;

        if (el.dispatchEvent) { // for modern browsers & IE9+
            if (EventIsSupported) {
                // For modern browsers
                event = new Event(eventName, {
                    bubbles: true
                });
            } else {
                // For IE since it doesn't support Event constructor
                event = document.createEvent('Event');
                event.initEvent(eventName, true, false);
            }

            el.dispatchEvent(event);
        } else if (el.fireEvent) { // for IE8
            event = document.createEventObject();
            event.eventType = eventName;
            el.fireEvent('on' + eventName, event);
        } else {
            // fall back to jQuery.trigger
            this.trigger(eventName);
        }
    };
    //</editor-fold>

    // Case insensitive contains search
    $.expr.pseudos.icontains = function(obj, index, meta) {
        var $obj = $(obj).find('a');
        var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
        return haystack.includes(meta[3].toUpperCase());
    };

    // Case insensitive begins search
    $.expr.pseudos.ibegins = function(obj, index, meta) {
        var $obj = $(obj).find('a');
        var haystack = ($obj.data('tokens') || $obj.text()).toString().toUpperCase();
        return haystack.startsWith(meta[3].toUpperCase());
    };

    // Case and accent insensitive contains search
    $.expr.pseudos.aicontains = function(obj, index, meta) {
        var $obj = $(obj).find('a');
        var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
        return haystack.includes(meta[3].toUpperCase());
    };

    // Case and accent insensitive begins search
    $.expr.pseudos.aibegins = function(obj, index, meta) {
        var $obj = $(obj).find('a');
        var haystack = ($obj.data('tokens') || $obj.data('normalizedText') || $obj.text()).toString().toUpperCase();
        return haystack.startsWith(meta[3].toUpperCase());
    };

    /**
     * Remove all diatrics from the given text.
     * @access private
     * @param {String} text
     * @returns {String}
     */
    function normalizeToBase(text) {
        var rExps = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            },
            {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            },
            {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            },
            {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            },
            {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            },
            {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            },
            {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            },
            {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            },
            {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            },
            {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            },
            {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            },
            {
                re: /[\xD1]/g,
                ch: "N"
            },
            {
                re: /[\xF1]/g,
                ch: "n"
            }
        ];
        $.each(rExps, function() {
            text = text ? text.replace(this.re, this.ch) : '';
        });
        return text;
    }


    // List of HTML entities for escaping.
    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
    };

    var unescapeMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#x27;': "'",
        '&#x60;': '`'
    };

    // Functions for escaping and unescaping strings to/from HTML interpolation.
    var createEscaper = function(map) {
        var escaper = function(match) {
            return map[match];
        };
        // Regexes for identifying a key that needs to be escaped.
        var source = '(?:' + Object.keys(map).join('|') + ')';
        var testRegexp = RegExp(source);
        var replaceRegexp = RegExp(source, 'g');
        return function(string) {
            string = string == null ? '' : '' + string;
            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
        };
    };

    var htmlEscape = createEscaper(escapeMap);
    var htmlUnescape = createEscaper(unescapeMap);

    var Selectpicker = function(element, options) {
        // bootstrap-select has been initialized - revert valHooks.select.set back to its original function
        if (!valHooks.useDefault) {
            $.valHooks.select.set = valHooks._set;
            valHooks.useDefault = true;
        }

        this.$element = $(element);
        this.$newElement = null;
        this.$button = null;
        this.$menu = null;
        this.$lis = null;
        this.options = options;

        // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
        // data-attribute)
        if (this.options.title === null) {
            this.options.title = this.$element.attr('title');
        }

        // Format window padding
        var winPad = this.options.windowPadding;
        if (typeof winPad === 'number') {
            this.options.windowPadding = [winPad, winPad, winPad, winPad];
        }

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.refresh = Selectpicker.prototype.refresh;
        this.setStyle = Selectpicker.prototype.setStyle;
        this.selectAll = Selectpicker.prototype.selectAll;
        this.deselectAll = Selectpicker.prototype.deselectAll;
        this.destroy = Selectpicker.prototype.destroy;
        this.remove = Selectpicker.prototype.remove;
        this.show = Selectpicker.prototype.show;
        this.hide = Selectpicker.prototype.hide;

        this.init();
    };

    Selectpicker.VERSION = '1.12.4';

    // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.
    Selectpicker.DEFAULTS = {
        noneSelectedText: 'Nothing selected',
        noneResultsText: 'No results matched {0}',
        countSelectedText: function(numSelected, numTotal) {
            return (numSelected == 1) ? "{0} item selected" : "{0} items selected";
        },
        maxOptionsText: function(numAll, numGroup) {
            return [
                (numAll == 1) ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)',
                (numGroup == 1) ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'
            ];
        },
        selectAllText: 'Select All',
        deselectAllText: 'Deselect All',
        doneButton: false,
        doneButtonText: 'Close',
        multipleSeparator: ', ',
        styleBase: 'btn',
        style: 'btn-default',
        size: 'auto',
        title: null,
        selectedTextFormat: 'values',
        width: false,
        container: false,
        hideDisabled: false,
        showSubtext: false,
        showIcon: true,
        showContent: true,
        dropupAuto: true,
        header: false,
        liveSearch: false,
        liveSearchPlaceholder: null,
        liveSearchNormalize: false,
        liveSearchStyle: 'contains',
        actionsBox: false,
        iconBase: 'glyphicon',
        tickIcon: 'glyphicon-ok',
        showTick: false,
        template: {
            caret: '<span class="caret"></span>'
        },
        maxOptions: false,
        mobile: false,
        selectOnTab: false,
        dropdownAlignRight: false,
        windowPadding: 0
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function() {
            var that = this,
                id = this.$element.attr('id');

            this.$element.addClass('bs-select-hidden');

            // store originalIndex (key) and newIndex (value) in this.liObj for fast accessibility
            // allows us to do this.$lis.eq(that.liObj[index]) instead of this.$lis.filter('[data-original-index="' + index + '"]')
            this.liObj = {};
            this.multiple = this.$element.prop('multiple');
            this.autofocus = this.$element.prop('autofocus');
            this.$newElement = this.createView();
            this.$element
                .after(this.$newElement)
                .appendTo(this.$newElement);
            this.$button = this.$newElement.children('button');
            this.$menu = this.$newElement.children('.dropdown-menu');
            this.$menuInner = this.$menu.children('.inner');
            this.$searchbox = this.$menu.find('input');

            this.$element.removeClass('bs-select-hidden');

            if (this.options.dropdownAlignRight === true) this.$menu.addClass('dropdown-menu-right');

            if (typeof id !== 'undefined') {
                this.$button.attr('data-id', id);
                $('label[for="' + id + '"]').click(function(e) {
                    e.preventDefault();
                    that.$button.focus();
                });
            }

            this.checkDisabled();
            this.clickListener();
            if (this.options.liveSearch) this.liveSearchListener();
            this.render();
            this.setStyle();
            this.setWidth();
            if (this.options.container) this.selectPosition();
            this.$menu.data('this', this);
            this.$newElement.data('this', this);
            if (this.options.mobile) this.mobile();

            this.$newElement.on({
                'hide.bs.dropdown': function(e) {
                    that.$menuInner.attr('aria-expanded', false);
                    that.$element.trigger('hide.bs.select', e);
                },
                'hidden.bs.dropdown': function(e) {
                    that.$element.trigger('hidden.bs.select', e);
                },
                'show.bs.dropdown': function(e) {
                    that.$menuInner.attr('aria-expanded', true);
                    that.$element.trigger('show.bs.select', e);
                },
                'shown.bs.dropdown': function(e) {
                    that.$element.trigger('shown.bs.select', e);
                }
            });

            if (that.$element[0].hasAttribute('required')) {
                this.$element.on('invalid', function() {
                    that.$button.addClass('bs-invalid');

                    that.$element.on({
                        'focus.bs.select': function() {
                            that.$button.focus();
                            that.$element.off('focus.bs.select');
                        },
                        'shown.bs.select': function() {
                            that.$element
                                .val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
                                .off('shown.bs.select');
                        },
                        'rendered.bs.select': function() {
                            // if select is no longer invalid, remove the bs-invalid class
                            if (this.validity.valid) that.$button.removeClass('bs-invalid');
                            that.$element.off('rendered.bs.select');
                        }
                    });

                    that.$button.on('blur.bs.select', function() {
                        that.$element.focus().blur();
                        that.$button.off('blur.bs.select');
                    });
                });
            }

            setTimeout(function() {
                that.$element.trigger('loaded.bs.select');
            });
        },

        createDropdown: function() {
            // Options
            // If we are multiple or showTick option is set, then add the show-tick class
            var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
                inputGroup = this.$element.parent().hasClass('input-group') ? ' input-group-btn' : '',
                autofocus = this.autofocus ? ' autofocus' : '';
            // Elements
            var header = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>' : '';
            var searchbox = this.options.liveSearch ?
                '<div class="bs-searchbox">' +
                '<input type="text" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search">' +
                '</div>' :
                '';
            var actionsbox = this.multiple && this.options.actionsBox ?
                '<div class="bs-actionsbox">' +
                '<div class="btn-group btn-group-sm btn-block">' +
                '<button type="button" class="actions-btn bs-select-all btn btn-default">' +
                this.options.selectAllText +
                '</button>' +
                '<button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
                this.options.deselectAllText +
                '</button>' +
                '</div>' +
                '</div>' :
                '';
            var donebutton = this.multiple && this.options.doneButton ?
                '<div class="bs-donebutton">' +
                '<div class="btn-group btn-block">' +
                '<button type="button" class="btn btn-sm btn-default">' +
                this.options.doneButtonText +
                '</button>' +
                '</div>' +
                '</div>' :
                '';
            var drop =
                '<div class="btn-group bootstrap-select' + showTick + inputGroup + '">' +
                '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + autofocus + ' role="button">' +
                '<span class="filter-option pull-left"></span>&nbsp;' +
                '<span class="bs-caret">' +
                this.options.template.caret +
                '</span>' +
                '</button>' +
                '<div class="dropdown-menu open" role="combobox">' +
                header +
                searchbox +
                actionsbox +
                '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false">' +
                '</ul>' +
                donebutton +
                '</div>' +
                '</div>';

            return $(drop);
        },

        createView: function() {
            var $drop = this.createDropdown(),
                li = this.createLi();

            $drop.find('ul')[0].innerHTML = li;
            return $drop;
        },

        reloadLi: function() {
            // rebuild
            var li = this.createLi();
            this.$menuInner[0].innerHTML = li;
        },

        createLi: function() {
            var that = this,
                _li = [],
                optID = 0,
                titleOption = document.createElement('option'),
                liIndex = -1; // increment liIndex whenever a new <li> element is created to ensure liObj is correct

            // Helper functions
            /**
             * @param content
             * @param [index]
             * @param [classes]
             * @param [optgroup]
             * @returns {string}
             */
            var generateLI = function(content, index, classes, optgroup) {
                return '<li' +
                    ((typeof classes !== 'undefined' && '' !== classes) ? ' class="' + classes + '"' : '') +
                    ((typeof index !== 'undefined' && null !== index) ? ' data-original-index="' + index + '"' : '') +
                    ((typeof optgroup !== 'undefined' && null !== optgroup) ? 'data-optgroup="' + optgroup + '"' : '') +
                    '>' + content + '</li>';
            };

            /**
             * @param text
             * @param [classes]
             * @param [inline]
             * @param [tokens]
             * @returns {string}
             */
            var generateA = function(text, classes, inline, tokens) {
                return '<a tabindex="0"' +
                    (typeof classes !== 'undefined' ? ' class="' + classes + '"' : '') +
                    (inline ? ' style="' + inline + '"' : '') +
                    (that.options.liveSearchNormalize ? ' data-normalized-text="' + normalizeToBase(htmlEscape($(text).html())) + '"' : '') +
                    (typeof tokens !== 'undefined' || tokens !== null ? ' data-tokens="' + tokens + '"' : '') +
                    ' role="option">' + text +
                    '<span class="' + that.options.iconBase + ' ' + that.options.tickIcon + ' check-mark"></span>' +
                    '</a>';
            };

            if (this.options.title && !this.multiple) {
                // this option doesn't create a new <li> element, but does add a new option, so liIndex is decreased
                // since liObj is recalculated on every refresh, liIndex needs to be decreased even if the titleOption is already appended
                liIndex--;

                if (!this.$element.find('.bs-title-option').length) {
                    // Use native JS to prepend option (faster)
                    var element = this.$element[0];
                    titleOption.className = 'bs-title-option';
                    titleOption.innerHTML = this.options.title;
                    titleOption.value = '';
                    element.insertBefore(titleOption, element.firstChild);
                    // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
                    // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
                    // if so, the select will have the data-selected attribute
                    var $opt = $(element.options[element.selectedIndex]);
                    if ($opt.attr('selected') === undefined && this.$element.data('selected') === undefined) {
                        titleOption.selected = true;
                    }
                }
            }

            var $selectOptions = this.$element.find('option');

            $selectOptions.each(function(index) {
                var $this = $(this);

                liIndex++;

                if ($this.hasClass('bs-title-option')) return;

                // Get the class and text for the option
                var optionClass = this.className || '',
                    inline = htmlEscape(this.style.cssText),
                    text = $this.data('content') ? $this.data('content') : $this.html(),
                    tokens = $this.data('tokens') ? $this.data('tokens') : null,
                    subtext = typeof $this.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $this.data('subtext') + '</small>' : '',
                    icon = typeof $this.data('icon') !== 'undefined' ? '<span class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></span> ' : '',
                    $parent = $this.parent(),
                    isOptgroup = $parent[0].tagName === 'OPTGROUP',
                    isOptgroupDisabled = isOptgroup && $parent[0].disabled,
                    isDisabled = this.disabled || isOptgroupDisabled,
                    prevHiddenIndex;

                if (icon !== '' && isDisabled) {
                    icon = '<span>' + icon + '</span>';
                }

                if (that.options.hideDisabled && (isDisabled && !isOptgroup || isOptgroupDisabled)) {
                    // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
                    // used to determine whether or not a divider should be placed after an optgroup if there are
                    // hidden options between the optgroup and the first visible option
                    prevHiddenIndex = $this.data('prevHiddenIndex');
                    $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));

                    liIndex--;
                    return;
                }

                if (!$this.data('content')) {
                    // Prepend any icon and append any subtext to the main text.
                    text = icon + '<span class="text">' + text + subtext + '</span>';
                }

                if (isOptgroup && $this.data('divider') !== true) {
                    if (that.options.hideDisabled && isDisabled) {
                        if ($parent.data('allOptionsDisabled') === undefined) {
                            var $options = $parent.children();
                            $parent.data('allOptionsDisabled', $options.filter(':disabled').length === $options.length);
                        }

                        if ($parent.data('allOptionsDisabled')) {
                            liIndex--;
                            return;
                        }
                    }

                    var optGroupClass = ' ' + $parent[0].className || '';

                    if ($this.index() === 0) { // Is it the first option of the optgroup?
                        optID += 1;

                        // Get the opt group label
                        var label = $parent[0].label,
                            labelSubtext = typeof $parent.data('subtext') !== 'undefined' ? '<small class="text-muted">' + $parent.data('subtext') + '</small>' : '',
                            labelIcon = $parent.data('icon') ? '<span class="' + that.options.iconBase + ' ' + $parent.data('icon') + '"></span> ' : '';

                        label = labelIcon + '<span class="text">' + htmlEscape(label) + labelSubtext + '</span>';

                        if (index !== 0 && _li.length > 0) { // Is it NOT the first option of the select && are there elements in the dropdown?
                            liIndex++;
                            _li.push(generateLI('', null, 'divider', optID + 'div'));
                        }
                        liIndex++;
                        _li.push(generateLI(label, null, 'dropdown-header' + optGroupClass, optID));
                    }

                    if (that.options.hideDisabled && isDisabled) {
                        liIndex--;
                        return;
                    }

                    _li.push(generateLI(generateA(text, 'opt ' + optionClass + optGroupClass, inline, tokens), index, '', optID));
                } else if ($this.data('divider') === true) {
                    _li.push(generateLI('', index, 'divider'));
                } else if ($this.data('hidden') === true) {
                    // set prevHiddenIndex - the index of the first hidden option in a group of hidden options
                    // used to determine whether or not a divider should be placed after an optgroup if there are
                    // hidden options between the optgroup and the first visible option
                    prevHiddenIndex = $this.data('prevHiddenIndex');
                    $this.next().data('prevHiddenIndex', (prevHiddenIndex !== undefined ? prevHiddenIndex : index));

                    _li.push(generateLI(generateA(text, optionClass, inline, tokens), index, 'hidden is-hidden'));
                } else {
                    var showDivider = this.previousElementSibling && this.previousElementSibling.tagName === 'OPTGROUP';

                    // if previous element is not an optgroup and hideDisabled is true
                    if (!showDivider && that.options.hideDisabled) {
                        prevHiddenIndex = $this.data('prevHiddenIndex');

                        if (prevHiddenIndex !== undefined) {
                            // select the element **before** the first hidden element in the group
                            var prevHidden = $selectOptions.eq(prevHiddenIndex)[0].previousElementSibling;

                            if (prevHidden && prevHidden.tagName === 'OPTGROUP' && !prevHidden.disabled) {
                                showDivider = true;
                            }
                        }
                    }

                    if (showDivider) {
                        liIndex++;
                        _li.push(generateLI('', null, 'divider', optID + 'div'));
                    }
                    _li.push(generateLI(generateA(text, optionClass, inline, tokens), index));
                }

                that.liObj[index] = liIndex;
            });

            //If we are not multiple, we don't have a selected item, and we don't have a title, select the first element so something is set in the button
            if (!this.multiple && this.$element.find('option:selected').length === 0 && !this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return _li.join('');
        },

        findLis: function() {
            if (this.$lis == null) this.$lis = this.$menu.find('li');
            return this.$lis;
        },

        /**
         * @param [updateLi] defaults to true
         */
        render: function(updateLi) {
            var that = this,
                notDisabled,
                $selectOptions = this.$element.find('option');

            //Update the LI to match the SELECT
            if (updateLi !== false) {
                $selectOptions.each(function(index) {
                    var $lis = that.findLis().eq(that.liObj[index]);

                    that.setDisabled(index, this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled, $lis);
                    that.setSelected(index, this.selected, $lis);
                });
            }

            this.togglePlaceholder();

            this.tabIndex();

            var selectedItems = $selectOptions.map(function() {
                if (this.selected) {
                    if (that.options.hideDisabled && (this.disabled || this.parentNode.tagName === 'OPTGROUP' && this.parentNode.disabled)) return;

                    var $this = $(this),
                        icon = $this.data('icon') && that.options.showIcon ? '<i class="' + that.options.iconBase + ' ' + $this.data('icon') + '"></i> ' : '',
                        subtext;

                    if (that.options.showSubtext && $this.data('subtext') && !that.multiple) {
                        subtext = ' <small class="text-muted">' + $this.data('subtext') + '</small>';
                    } else {
                        subtext = '';
                    }
                    if (typeof $this.attr('title') !== 'undefined') {
                        return $this.attr('title');
                    } else if ($this.data('content') && that.options.showContent) {
                        return $this.data('content').toString();
                    } else {
                        return icon + $this.html() + subtext;
                    }
                }
            }).toArray();

            //Fixes issue in IE10 occurring when no default option is selected and at least one option is disabled
            //Convert all the values into a comma delimited string
            var title = !this.multiple ? selectedItems[0] : selectedItems.join(this.options.multipleSeparator);

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..
            if (this.multiple && this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = this.options.selectedTextFormat.split('>');
                if ((max.length > 1 && selectedItems.length > max[1]) || (max.length == 1 && selectedItems.length >= 2)) {
                    notDisabled = this.options.hideDisabled ? ', [disabled]' : '';
                    var totalCount = $selectOptions.not('[data-divider="true"], [data-hidden="true"]' + notDisabled).length,
                        tr8nText = (typeof this.options.countSelectedText === 'function') ? this.options.countSelectedText(selectedItems.length, totalCount) : this.options.countSelectedText;
                    title = tr8nText.replace('{0}', selectedItems.length.toString()).replace('{1}', totalCount.toString());
                }
            }

            if (this.options.title == undefined) {
                this.options.title = this.$element.attr('title');
            }

            if (this.options.selectedTextFormat == 'static') {
                title = this.options.title;
            }

            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if (!title) {
                title = typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText;
            }

            //strip all HTML tags and trim the result, then unescape any escaped tags
            this.$button.attr('title', htmlUnescape($.trim(title.replace(/<[^>]*>?/g, ''))));
            this.$button.children('.filter-option').html(title);

            this.$element.trigger('rendered.bs.select');
        },

        /**
         * @param [style]
         * @param [status]
         */
        setStyle: function(style, status) {
            if (this.$element.attr('class')) {
                this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
            }

            var buttonClass = style ? style : this.options.style;

            if (status == 'add') {
                this.$button.addClass(buttonClass);
            } else if (status == 'remove') {
                this.$button.removeClass(buttonClass);
            } else {
                this.$button.removeClass(this.options.style);
                this.$button.addClass(buttonClass);
            }
        },

        liHeight: function(refresh) {
            if (!refresh && (this.options.size === false || this.sizeInfo)) return;

            var newElement = document.createElement('div'),
                menu = document.createElement('div'),
                menuInner = document.createElement('ul'),
                divider = document.createElement('li'),
                li = document.createElement('li'),
                a = document.createElement('a'),
                text = document.createElement('span'),
                header = this.options.header && this.$menu.find('.popover-title').length > 0 ? this.$menu.find('.popover-title')[0].cloneNode(true) : null,
                search = this.options.liveSearch ? document.createElement('div') : null,
                actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
                doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null;

            text.className = 'text';
            newElement.className = this.$menu[0].parentNode.className + ' open';
            menu.className = 'dropdown-menu open';
            menuInner.className = 'dropdown-menu inner';
            divider.className = 'divider';

            text.appendChild(document.createTextNode('Inner text'));
            a.appendChild(text);
            li.appendChild(a);
            menuInner.appendChild(li);
            menuInner.appendChild(divider);
            if (header) menu.appendChild(header);
            if (search) {
                var input = document.createElement('input');
                search.className = 'bs-searchbox';
                input.className = 'form-control';
                search.appendChild(input);
                menu.appendChild(search);
            }
            if (actions) menu.appendChild(actions);
            menu.appendChild(menuInner);
            if (doneButton) menu.appendChild(doneButton);
            newElement.appendChild(menu);

            document.body.appendChild(newElement);

            var liHeight = a.offsetHeight,
                headerHeight = header ? header.offsetHeight : 0,
                searchHeight = search ? search.offsetHeight : 0,
                actionsHeight = actions ? actions.offsetHeight : 0,
                doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
                dividerHeight = $(divider).outerHeight(true),
                // fall back to jQuery if getComputedStyle is not supported
                menuStyle = typeof getComputedStyle === 'function' ? getComputedStyle(menu) : false,
                $menu = menuStyle ? null : $(menu),
                menuPadding = {
                    vert: parseInt(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) +
                        parseInt(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) +
                        parseInt(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) +
                        parseInt(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
                    horiz: parseInt(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) +
                        parseInt(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) +
                        parseInt(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) +
                        parseInt(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
                },
                menuExtras = {
                    vert: menuPadding.vert +
                        parseInt(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) +
                        parseInt(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
                    horiz: menuPadding.horiz +
                        parseInt(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) +
                        parseInt(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
                }

            document.body.removeChild(newElement);

            this.sizeInfo = {
                liHeight: liHeight,
                headerHeight: headerHeight,
                searchHeight: searchHeight,
                actionsHeight: actionsHeight,
                doneButtonHeight: doneButtonHeight,
                dividerHeight: dividerHeight,
                menuPadding: menuPadding,
                menuExtras: menuExtras
            };
        },

        setSize: function() {
            this.findLis();
            this.liHeight();

            if (this.options.header) this.$menu.css('padding-top', 0);
            if (this.options.size === false) return;

            var that = this,
                $menu = this.$menu,
                $menuInner = this.$menuInner,
                $window = $(window),
                selectHeight = this.$newElement[0].offsetHeight,
                selectWidth = this.$newElement[0].offsetWidth,
                liHeight = this.sizeInfo['liHeight'],
                headerHeight = this.sizeInfo['headerHeight'],
                searchHeight = this.sizeInfo['searchHeight'],
                actionsHeight = this.sizeInfo['actionsHeight'],
                doneButtonHeight = this.sizeInfo['doneButtonHeight'],
                divHeight = this.sizeInfo['dividerHeight'],
                menuPadding = this.sizeInfo['menuPadding'],
                menuExtras = this.sizeInfo['menuExtras'],
                notDisabled = this.options.hideDisabled ? '.disabled' : '',
                menuHeight,
                menuWidth,
                getHeight,
                getWidth,
                selectOffsetTop,
                selectOffsetBot,
                selectOffsetLeft,
                selectOffsetRight,
                getPos = function() {
                    var pos = that.$newElement.offset(),
                        $container = $(that.options.container),
                        containerPos;

                    if (that.options.container && !$container.is('body')) {
                        containerPos = $container.offset();
                        containerPos.top += parseInt($container.css('borderTopWidth'));
                        containerPos.left += parseInt($container.css('borderLeftWidth'));
                    } else {
                        containerPos = {
                            top: 0,
                            left: 0
                        };
                    }

                    var winPad = that.options.windowPadding;
                    selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
                    selectOffsetBot = $window.height() - selectOffsetTop - selectHeight - containerPos.top - winPad[2];
                    selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
                    selectOffsetRight = $window.width() - selectOffsetLeft - selectWidth - containerPos.left - winPad[1];
                    selectOffsetTop -= winPad[0];
                    selectOffsetLeft -= winPad[3];
                };

            getPos();

            if (this.options.size === 'auto') {
                var getSize = function() {
                    var minHeight,
                        hasClass = function(className, include) {
                            return function(element) {
                                if (include) {
                                    return (element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                                } else {
                                    return !(element.classList ? element.classList.contains(className) : $(element).hasClass(className));
                                }
                            };
                        },
                        lis = that.$menuInner[0].getElementsByTagName('li'),
                        lisVisible = Array.prototype.filter ? Array.prototype.filter.call(lis, hasClass('hidden', false)) : that.$lis.not('.hidden'),
                        optGroup = Array.prototype.filter ? Array.prototype.filter.call(lisVisible, hasClass('dropdown-header', true)) : lisVisible.filter('.dropdown-header');

                    getPos();
                    menuHeight = selectOffsetBot - menuExtras.vert;
                    menuWidth = selectOffsetRight - menuExtras.horiz;

                    if (that.options.container) {
                        if (!$menu.data('height')) $menu.data('height', $menu.height());
                        getHeight = $menu.data('height');

                        if (!$menu.data('width')) $menu.data('width', $menu.width());
                        getWidth = $menu.data('width');
                    } else {
                        getHeight = $menu.height();
                        getWidth = $menu.width();
                    }

                    if (that.options.dropupAuto) {
                        that.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
                    }

                    if (that.$newElement.hasClass('dropup')) {
                        menuHeight = selectOffsetTop - menuExtras.vert;
                    }

                    if (that.options.dropdownAlignRight === 'auto') {
                        $menu.toggleClass('dropdown-menu-right', selectOffsetLeft > selectOffsetRight && (menuWidth - menuExtras.horiz) < (getWidth - selectWidth));
                    }

                    if ((lisVisible.length + optGroup.length) > 3) {
                        minHeight = liHeight * 3 + menuExtras.vert - 2;
                    } else {
                        minHeight = 0;
                    }

                    $menu.css({
                        'max-height': menuHeight + 'px',
                        'overflow': 'hidden',
                        'min-height': minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px'
                    });
                    $menuInner.css({
                        'max-height': menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert + 'px',
                        'overflow-y': 'auto',
                        'min-height': Math.max(minHeight - menuPadding.vert, 0) + 'px'
                    });
                };
                getSize();
                this.$searchbox.off('input.getSize propertychange.getSize').on('input.getSize propertychange.getSize', getSize);
                $window.off('resize.getSize scroll.getSize').on('resize.getSize scroll.getSize', getSize);
            } else if (this.options.size && this.options.size != 'auto' && this.$lis.not(notDisabled).length > this.options.size) {
                var optIndex = this.$lis.not('.divider').not(notDisabled).children().slice(0, this.options.size).last().parent().index(),
                    divLength = this.$lis.slice(0, optIndex + 1).filter('.divider').length;
                menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;

                if (that.options.container) {
                    if (!$menu.data('height')) $menu.data('height', $menu.height());
                    getHeight = $menu.data('height');
                } else {
                    getHeight = $menu.height();
                }

                if (that.options.dropupAuto) {
                    //noinspection JSUnusedAssignment
                    this.$newElement.toggleClass('dropup', selectOffsetTop > selectOffsetBot && (menuHeight - menuExtras.vert) < getHeight);
                }
                $menu.css({
                    'max-height': menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight + 'px',
                    'overflow': 'hidden',
                    'min-height': ''
                });
                $menuInner.css({
                    'max-height': menuHeight - menuPadding.vert + 'px',
                    'overflow-y': 'auto',
                    'min-height': ''
                });
            }
        },

        setWidth: function() {
            if (this.options.width === 'auto') {
                this.$menu.css('min-width', '0');

                // Get correct width if element is hidden
                var $selectClone = this.$menu.parent().clone().appendTo('body'),
                    $selectClone2 = this.options.container ? this.$newElement.clone().appendTo('body') : $selectClone,
                    ulWidth = $selectClone.children('.dropdown-menu').outerWidth(),
                    btnWidth = $selectClone2.css('width', 'auto').children('button').outerWidth();

                $selectClone.remove();
                $selectClone2.remove();

                // Set width to whatever's larger, button title or longest option
                this.$newElement.css('width', Math.max(ulWidth, btnWidth) + 'px');
            } else if (this.options.width === 'fit') {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '').addClass('fit-width');
            } else if (this.options.width) {
                // Remove inline min-width so width can be changed from 'auto'
                this.$menu.css('min-width', '');
                this.$newElement.css('width', this.options.width);
            } else {
                // Remove inline min-width/width so width can be changed
                this.$menu.css('min-width', '');
                this.$newElement.css('width', '');
            }
            // Remove fit-width class if width is changed programmatically
            if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
                this.$newElement.removeClass('fit-width');
            }
        },

        selectPosition: function() {
            this.$bsContainer = $('<div class="bs-container" />');

            var that = this,
                $container = $(this.options.container),
                pos,
                containerPos,
                actualHeight,
                getPlacement = function($element) {
                    that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass('dropup', $element.hasClass('dropup'));
                    pos = $element.offset();

                    if (!$container.is('body')) {
                        containerPos = $container.offset();
                        containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
                        containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
                    } else {
                        containerPos = {
                            top: 0,
                            left: 0
                        };
                    }

                    actualHeight = $element.hasClass('dropup') ? 0 : $element[0].offsetHeight;

                    that.$bsContainer.css({
                        'top': pos.top - containerPos.top + actualHeight,
                        'left': pos.left - containerPos.left,
                        'width': $element[0].offsetWidth
                    });
                };

            this.$button.on('click', function() {
                var $this = $(this);

                if (that.isDisabled()) {
                    return;
                }

                getPlacement(that.$newElement);

                that.$bsContainer
                    .appendTo(that.options.container)
                    .toggleClass('open', !$this.hasClass('open'))
                    .append(that.$menu);
            });

            $(window).on('resize scroll', function() {
                getPlacement(that.$newElement);
            });

            this.$element.on('hide.bs.select', function() {
                that.$menu.data('height', that.$menu.height());
                that.$bsContainer.detach();
            });
        },

        /**
         * @param {number} index - the index of the option that is being changed
         * @param {boolean} selected - true if the option is being selected, false if being deselected
         * @param {JQuery} $lis - the 'li' element that is being modified
         */
        setSelected: function(index, selected, $lis) {
            if (!$lis) {
                this.togglePlaceholder(); // check if setSelected is being called by changing the value of the select
                $lis = this.findLis().eq(this.liObj[index]);
            }

            $lis.toggleClass('selected', selected).find('a').attr('aria-selected', selected);
        },

        /**
         * @param {number} index - the index of the option that is being disabled
         * @param {boolean} disabled - true if the option is being disabled, false if being enabled
         * @param {JQuery} $lis - the 'li' element that is being modified
         */
        setDisabled: function(index, disabled, $lis) {
            if (!$lis) {
                $lis = this.findLis().eq(this.liObj[index]);
            }

            if (disabled) {
                $lis.addClass('disabled').children('a').attr('href', '#').attr('tabindex', -1).attr('aria-disabled', true);
            } else {
                $lis.removeClass('disabled').children('a').removeAttr('href').attr('tabindex', 0).attr('aria-disabled', false);
            }
        },

        isDisabled: function() {
            return this.$element[0].disabled;
        },

        checkDisabled: function() {
            var that = this;

            if (this.isDisabled()) {
                this.$newElement.addClass('disabled');
                this.$button.addClass('disabled').attr('tabindex', -1).attr('aria-disabled', true);
            } else {
                if (this.$button.hasClass('disabled')) {
                    this.$newElement.removeClass('disabled');
                    this.$button.removeClass('disabled').attr('aria-disabled', false);
                }

                if (this.$button.attr('tabindex') == -1 && !this.$element.data('tabindex')) {
                    this.$button.removeAttr('tabindex');
                }
            }

            this.$button.click(function() {
                return !that.isDisabled();
            });
        },

        togglePlaceholder: function() {
            var value = this.$element.val();
            this.$button.toggleClass('bs-placeholder', value === null || value === '' || (value.constructor === Array && value.length === 0));
        },

        tabIndex: function() {
            if (this.$element.data('tabindex') !== this.$element.attr('tabindex') &&
                (this.$element.attr('tabindex') !== -98 && this.$element.attr('tabindex') !== '-98')) {
                this.$element.data('tabindex', this.$element.attr('tabindex'));
                this.$button.attr('tabindex', this.$element.data('tabindex'));
            }

            this.$element.attr('tabindex', -98);
        },

        clickListener: function() {
            var that = this,
                $document = $(document);

            $document.data('spaceSelect', false);

            this.$button.on('keyup', function(e) {
                if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
                    e.preventDefault();
                    $document.data('spaceSelect', false);
                }
            });

            this.$button.on('click', function() {
                that.setSize();
            });

            this.$element.on('shown.bs.select', function() {
                if (!that.options.liveSearch && !that.multiple) {
                    that.$menuInner.find('.selected a').focus();
                } else if (!that.multiple) {
                    var selectedIndex = that.liObj[that.$element[0].selectedIndex];

                    if (typeof selectedIndex !== 'number' || that.options.size === false) return;

                    // scroll to selected option
                    var offset = that.$lis.eq(selectedIndex)[0].offsetTop - that.$menuInner[0].offsetTop;
                    offset = offset - that.$menuInner[0].offsetHeight / 2 + that.sizeInfo.liHeight / 2;
                    that.$menuInner[0].scrollTop = offset;
                }
            });

            this.$menuInner.on('click', 'li a', function(e) {
                var $this = $(this),
                    clickedIndex = $this.parent().data('originalIndex'),
                    prevValue = that.$element.val(),
                    prevIndex = that.$element.prop('selectedIndex'),
                    triggerChange = true;

                // Don't close on multi choice menu
                if (that.multiple && that.options.maxOptions !== 1) {
                    e.stopPropagation();
                }

                e.preventDefault();

                //Don't run if we have been disabled
                if (!that.isDisabled() && !$this.parent().hasClass('disabled')) {
                    var $options = that.$element.find('option'),
                        $option = $options.eq(clickedIndex),
                        state = $option.prop('selected'),
                        $optgroup = $option.parent('optgroup'),
                        maxOptions = that.options.maxOptions,
                        maxOptionsGrp = $optgroup.data('maxOptions') || false;

                    if (!that.multiple) { // Deselect all others if not multi select box
                        $options.prop('selected', false);
                        $option.prop('selected', true);
                        that.$menuInner.find('.selected').removeClass('selected').find('a').attr('aria-selected', false);
                        that.setSelected(clickedIndex, true);
                    } else { // Toggle the one we have chosen if we are multi select.
                        $option.prop('selected', !state);
                        that.setSelected(clickedIndex, !state);
                        $this.blur();

                        if (maxOptions !== false || maxOptionsGrp !== false) {
                            var maxReached = maxOptions < $options.filter(':selected').length,
                                maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

                            if ((maxOptions && maxReached) || (maxOptionsGrp && maxReachedGrp)) {
                                if (maxOptions && maxOptions == 1) {
                                    $options.prop('selected', false);
                                    $option.prop('selected', true);
                                    that.$menuInner.find('.selected').removeClass('selected');
                                    that.setSelected(clickedIndex, true);
                                } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                                    $optgroup.find('option:selected').prop('selected', false);
                                    $option.prop('selected', true);
                                    var optgroupID = $this.parent().data('optgroup');
                                    that.$menuInner.find('[data-optgroup="' + optgroupID + '"]').removeClass('selected');
                                    that.setSelected(clickedIndex, true);
                                } else {
                                    var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                                        maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                                        maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                                        maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                                        $notify = $('<div class="notify"></div>');
                                    // If {var} is set in array, replace it
                                    /** @deprecated */
                                    if (maxOptionsArr[2]) {
                                        maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                                        maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                                    }

                                    $option.prop('selected', false);

                                    that.$menu.append($notify);

                                    if (maxOptions && maxReached) {
                                        $notify.append($('<div>' + maxTxt + '</div>'));
                                        triggerChange = false;
                                        that.$element.trigger('maxReached.bs.select');
                                    }

                                    if (maxOptionsGrp && maxReachedGrp) {
                                        $notify.append($('<div>' + maxTxtGrp + '</div>'));
                                        triggerChange = false;
                                        that.$element.trigger('maxReachedGrp.bs.select');
                                    }

                                    setTimeout(function() {
                                        that.setSelected(clickedIndex, false);
                                    }, 10);

                                    $notify.delay(750).fadeOut(300, function() {
                                        $(this).remove();
                                    });
                                }
                            }
                        }
                    }

                    if (!that.multiple || (that.multiple && that.options.maxOptions === 1)) {
                        that.$button.focus();
                    } else if (that.options.liveSearch) {
                        that.$searchbox.focus();
                    }

                    // Trigger select 'change'
                    if (triggerChange) {
                        if ((prevValue != that.$element.val() && that.multiple) || (prevIndex != that.$element.prop('selectedIndex') && !that.multiple)) {
                            // $option.prop('selected') is current option state (selected/unselected). state is previous option state.
                            changed_arguments = [clickedIndex, $option.prop('selected'), state];
                            that.$element
                                .triggerNative('change');
                        }
                    }
                }
            });

            this.$menu.on('click', 'li.disabled a, .popover-title, .popover-title :not(.close)', function(e) {
                if (e.currentTarget == this) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (that.options.liveSearch && !$(e.target).hasClass('close')) {
                        that.$searchbox.focus();
                    } else {
                        that.$button.focus();
                    }
                }
            });

            this.$menuInner.on('click', '.divider, .dropdown-header', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (that.options.liveSearch) {
                    that.$searchbox.focus();
                } else {
                    that.$button.focus();
                }
            });

            this.$menu.on('click', '.popover-title .close', function() {
                that.$button.click();
            });

            this.$searchbox.on('click', function(e) {
                e.stopPropagation();
            });

            this.$menu.on('click', '.actions-btn', function(e) {
                if (that.options.liveSearch) {
                    that.$searchbox.focus();
                } else {
                    that.$button.focus();
                }

                e.preventDefault();
                e.stopPropagation();

                if ($(this).hasClass('bs-select-all')) {
                    that.selectAll();
                } else {
                    that.deselectAll();
                }
            });

            this.$element.change(function() {
                that.render(false);
                that.$element.trigger('changed.bs.select', changed_arguments);
                changed_arguments = null;
            });
        },

        liveSearchListener: function() {
            var that = this,
                $no_results = $('<li class="no-results"></li>');

            this.$button.on('click.dropdown.data-api', function() {
                that.$menuInner.find('.active').removeClass('active');
                if (!!that.$searchbox.val()) {
                    that.$searchbox.val('');
                    that.$lis.not('.is-hidden').removeClass('hidden');
                    if (!!$no_results.parent().length) $no_results.remove();
                }
                if (!that.multiple) that.$menuInner.find('.selected').addClass('active');
                setTimeout(function() {
                    that.$searchbox.focus();
                }, 10);
            });

            this.$searchbox.on('click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api', function(e) {
                e.stopPropagation();
            });

            this.$searchbox.on('input propertychange', function() {
                that.$lis.not('.is-hidden').removeClass('hidden');
                that.$lis.filter('.active').removeClass('active');
                $no_results.remove();

                if (that.$searchbox.val()) {
                    var $searchBase = that.$lis.not('.is-hidden, .divider, .dropdown-header'),
                        $hideItems;
                    if (that.options.liveSearchNormalize) {
                        $hideItems = $searchBase.not(':a' + that._searchStyle() + '("' + normalizeToBase(that.$searchbox.val()) + '")');
                    } else {
                        $hideItems = $searchBase.not(':' + that._searchStyle() + '("' + that.$searchbox.val() + '")');
                    }

                    if ($hideItems.length === $searchBase.length) {
                        $no_results.html(that.options.noneResultsText.replace('{0}', '"' + htmlEscape(that.$searchbox.val()) + '"'));
                        that.$menuInner.append($no_results);
                        that.$lis.addClass('hidden');
                    } else {
                        $hideItems.addClass('hidden');

                        var $lisVisible = that.$lis.not('.hidden'),
                            $foundDiv;

                        // hide divider if first or last visible, or if followed by another divider
                        $lisVisible.each(function(index) {
                            var $this = $(this);

                            if ($this.hasClass('divider')) {
                                if ($foundDiv === undefined) {
                                    $this.addClass('hidden');
                                } else {
                                    if ($foundDiv) $foundDiv.addClass('hidden');
                                    $foundDiv = $this;
                                }
                            } else if ($this.hasClass('dropdown-header') && $lisVisible.eq(index + 1).data('optgroup') !== $this.data('optgroup')) {
                                $this.addClass('hidden');
                            } else {
                                $foundDiv = null;
                            }
                        });
                        if ($foundDiv) $foundDiv.addClass('hidden');

                        $searchBase.not('.hidden').first().addClass('active');
                        that.$menuInner.scrollTop(0);
                    }
                }
            });
        },

        _searchStyle: function() {
            var styles = {
                begins: 'ibegins',
                startsWith: 'ibegins'
            };

            return styles[this.options.liveSearchStyle] || 'icontains';
        },

        val: function(value) {
            if (typeof value !== 'undefined') {
                this.$element.val(value);
                this.render();

                return this.$element;
            } else {
                return this.$element.val();
            }
        },

        changeAll: function(status) {
            if (!this.multiple) return;
            if (typeof status === 'undefined') status = true;

            this.findLis();

            var $options = this.$element.find('option'),
                $lisVisible = this.$lis.not('.divider, .dropdown-header, .disabled, .hidden'),
                lisVisLen = $lisVisible.length,
                selectedOptions = [];

            if (status) {
                if ($lisVisible.filter('.selected').length === $lisVisible.length) return;
            } else {
                if ($lisVisible.filter('.selected').length === 0) return;
            }

            $lisVisible.toggleClass('selected', status);

            for (var i = 0; i < lisVisLen; i++) {
                var origIndex = $lisVisible[i].getAttribute('data-original-index');
                selectedOptions[selectedOptions.length] = $options.eq(origIndex)[0];
            }

            $(selectedOptions).prop('selected', status);

            this.render(false);

            this.togglePlaceholder();

            this.$element
                .triggerNative('change');
        },

        selectAll: function() {
            return this.changeAll(true);
        },

        deselectAll: function() {
            return this.changeAll(false);
        },

        toggle: function(e) {
            e = e || window.event;

            if (e) e.stopPropagation();

            this.$button.trigger('click');
        },

        keydown: function(e) {
            var $this = $(this),
                $parent = $this.is('input') ? $this.parent().parent() : $this.parent(),
                $items,
                that = $parent.data('this'),
                index,
                prevIndex,
                isActive,
                selector = ':not(.disabled, .hidden, .dropdown-header, .divider)',
                keyCodeMap = {
                    32: ' ',
                    48: '0',
                    49: '1',
                    50: '2',
                    51: '3',
                    52: '4',
                    53: '5',
                    54: '6',
                    55: '7',
                    56: '8',
                    57: '9',
                    59: ';',
                    65: 'a',
                    66: 'b',
                    67: 'c',
                    68: 'd',
                    69: 'e',
                    70: 'f',
                    71: 'g',
                    72: 'h',
                    73: 'i',
                    74: 'j',
                    75: 'k',
                    76: 'l',
                    77: 'm',
                    78: 'n',
                    79: 'o',
                    80: 'p',
                    81: 'q',
                    82: 'r',
                    83: 's',
                    84: 't',
                    85: 'u',
                    86: 'v',
                    87: 'w',
                    88: 'x',
                    89: 'y',
                    90: 'z',
                    96: '0',
                    97: '1',
                    98: '2',
                    99: '3',
                    100: '4',
                    101: '5',
                    102: '6',
                    103: '7',
                    104: '8',
                    105: '9'
                };


            isActive = that.$newElement.hasClass('open');

            if (!isActive && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) {
                if (!that.options.container) {
                    that.setSize();
                    that.$menu.parent().addClass('open');
                    isActive = true;
                } else {
                    that.$button.trigger('click');
                }
                that.$searchbox.focus();
                return;
            }

            if (that.options.liveSearch) {
                if (/(^9$|27)/.test(e.keyCode.toString(10)) && isActive) {
                    e.preventDefault();
                    e.stopPropagation();
                    that.$menuInner.click();
                    that.$button.focus();
                }
            }

            if (/(38|40)/.test(e.keyCode.toString(10))) {
                $items = that.$lis.filter(selector);
                if (!$items.length) return;

                if (!that.options.liveSearch) {
                    index = $items.index($items.find('a').filter(':focus').parent());
                } else {
                    index = $items.index($items.filter('.active'));
                }

                prevIndex = that.$menuInner.data('prevIndex');

                if (e.keyCode == 38) {
                    if ((that.options.liveSearch || index == prevIndex) && index != -1) index--;
                    if (index < 0) index += $items.length;
                } else if (e.keyCode == 40) {
                    if (that.options.liveSearch || index == prevIndex) index++;
                    index = index % $items.length;
                }

                that.$menuInner.data('prevIndex', index);

                if (!that.options.liveSearch) {
                    $items.eq(index).children('a').focus();
                } else {
                    e.preventDefault();
                    if (!$this.hasClass('dropdown-toggle')) {
                        $items.removeClass('active').eq(index).addClass('active').children('a').focus();
                        $this.focus();
                    }
                }

            } else if (!$this.is('input')) {
                var keyIndex = [],
                    count,
                    prevKey;

                $items = that.$lis.filter(selector);
                $items.each(function(i) {
                    if ($.trim($(this).children('a').text().toLowerCase()).substring(0, 1) == keyCodeMap[e.keyCode]) {
                        keyIndex.push(i);
                    }
                });

                count = $(document).data('keycount');
                count++;
                $(document).data('keycount', count);

                prevKey = $.trim($(':focus').text().toLowerCase()).substring(0, 1);

                if (prevKey != keyCodeMap[e.keyCode]) {
                    count = 1;
                    $(document).data('keycount', count);
                } else if (count >= keyIndex.length) {
                    $(document).data('keycount', 0);
                    if (count > keyIndex.length) count = 1;
                }

                $items.eq(keyIndex[count - 1]).children('a').focus();
            }

            // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.
            if ((/(13|32)/.test(e.keyCode.toString(10)) || (/(^9$)/.test(e.keyCode.toString(10)) && that.options.selectOnTab)) && isActive) {
                if (!/(32)/.test(e.keyCode.toString(10))) e.preventDefault();
                if (!that.options.liveSearch) {
                    var elem = $(':focus');
                    elem.click();
                    // Bring back focus for multiselects
                    elem.focus();
                    // Prevent screen from scrolling if the user hit the spacebar
                    e.preventDefault();
                    // Fixes spacebar selection of dropdown items in FF & IE
                    $(document).data('spaceSelect', true);
                } else if (!/(32)/.test(e.keyCode.toString(10))) {
                    that.$menuInner.find('.active a').click();
                    $this.focus();
                }
                $(document).data('keycount', 0);
            }

            if ((/(^9$|27)/.test(e.keyCode.toString(10)) && isActive && (that.multiple || that.options.liveSearch)) || (/(27)/.test(e.keyCode.toString(10)) && !isActive)) {
                that.$menu.parent().removeClass('open');
                if (that.options.container) that.$newElement.removeClass('open');
                that.$button.focus();
            }
        },

        mobile: function() {
            this.$element.addClass('mobile-device');
        },

        refresh: function() {
            this.$lis = null;
            this.liObj = {};
            this.reloadLi();
            this.render();
            this.checkDisabled();
            this.liHeight(true);
            this.setStyle();
            this.setWidth();
            if (this.$lis) this.$searchbox.trigger('propertychange');

            this.$element.trigger('refreshed.bs.select');
        },

        hide: function() {
            this.$newElement.hide();
        },

        show: function() {
            this.$newElement.show();
        },

        remove: function() {
            this.$newElement.remove();
            this.$element.remove();
        },

        destroy: function() {
            this.$newElement.before(this.$element).remove();

            if (this.$bsContainer) {
                this.$bsContainer.remove();
            } else {
                this.$menu.remove();
            }

            this.$element
                .off('.bs.select')
                .removeData('selectpicker')
                .removeClass('bs-select-hidden selectpicker');
        }
    };

    // SELECTPICKER PLUGIN DEFINITION
    // ==============================
    function Plugin(option) {
        // get the args of the outer function..
        var args = arguments;
        // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
        // to get lost/corrupted in android 2.3 and IE9 #715 #775
        var _option = option;

        [].shift.apply(args);

        var value;
        var chain = this.each(function() {
            var $this = $(this);
            if ($this.is('select')) {
                var data = $this.data('selectpicker'),
                    options = typeof _option == 'object' && _option;

                if (!data) {
                    var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, $this.data(), options);
                    config.template = $.extend({}, Selectpicker.DEFAULTS.template, ($.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}), $this.data().template, options.template);
                    $this.data('selectpicker', (data = new Selectpicker(this, config)));
                } else if (options) {
                    for (var i in options) {
                        if (options.hasOwnProperty(i)) {
                            data.options[i] = options[i];
                        }
                    }
                }

                if (typeof _option == 'string') {
                    if (data[_option] instanceof Function) {
                        value = data[_option].apply(data, args);
                    } else {
                        value = data.options[_option];
                    }
                }
            }
        });

        if (typeof value !== 'undefined') {
            //noinspection JSUnusedAssignment
            return value;
        } else {
            return chain;
        }
    }

    var old = $.fn.selectpicker;
    $.fn.selectpicker = Plugin;
    $.fn.selectpicker.Constructor = Selectpicker;

    // SELECTPICKER NO CONFLICT
    // ========================
    $.fn.selectpicker.noConflict = function() {
        $.fn.selectpicker = old;
        return this;
    };

    $(document)
        .data('keycount', 0)
        .on('keydown.bs.select', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', Selectpicker.prototype.keydown)
        .on('focusin.modal', '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(e) {
            e.stopPropagation();
        });

    // SELECTPICKER DATA-API
    // =====================
    $(window).on('load.bs.select.data-api', function() {
        $('.selectpicker').each(function() {
            var $selectpicker = $(this);
            Plugin.call($selectpicker, $selectpicker.data());
        })
    });
})(jQuery);;
/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function(exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var removeEventListener = 'remove' + EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function(i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        // cloning into array since HTMLCollection is updated dynamically
        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function(el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function(e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function() {
                        pushed = 0;
                    }, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function(e) {
                        if (pushed) {
                            (scroller = el.scroller || el).scrollLeft -=
                                newScrollX = (-lastClientX + (lastClientX = e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (-lastClientY + (lastClientY = e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }


    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }

    exports.reset = reset;
}));;