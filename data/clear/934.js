(function($) {
    $.fn.extend({
        /**
         * switch loading state for jQuery Plugin
         *
         * @param args
         * @returns {*}
         */
        loading: function(args) {
            this.each(function() {
                $(this).parent().addClass('invalid').removeClass(function(index, css) {
                    // remove "btn-***"
                    return (css.match(/\bbtn-\S+/g) || []).join(' ');
                });
                // disabled
                $(this).attr('disabled', 'disabled');
                // loading text
                var loading = $(this).data('loading') || '送信中...';
                if (loading) $(this).val(loading);
            });

            return this;
        },


        /**
         * exlightbox for jQuery Plugin
         *
         * Lightbox provided by jQuery UI
         *
         * @returns {*}
         */
        exlightbox: function(args) {
            args = args || {};
            var targets = [];
            for (var i = 0; i < this.length; i++) {
                targets.push(this[i]);
            }

            this.each(function() {
                $(this).click(function(e) {
                    e.preventDefault();

                    args.targets = targets;
                    //                    args.index = targets.indexOf(this);  // IE8 dose not have the method "indexOf"
                    args.index = $.inArray(this, targets);

                    (new ExLightbox()).open(args);
                });
            });

            return this;
        },


        /**
         * exlazyload for jQuery Plugin
         *
         * Load Image Async
         */
        exlazyload: function(args) {
            this.each(function() {
                var me = this;

                $(this).hide();

                $(window).on('load scroll', function(e) {
                    if ($(this).scrollTop() + $(this).height() < $(me).parent().offset().top) return;

                    var src = $(me).data('src');
                    if (!src) return;

                    var image = new Image();
                    image.onload = function() {
                        $(me).attr('src', src);
                    };
                    image.src = src;

                    $(me).fadeIn('fast');

                    $(this).unbind(e);
                });
            });
        },

        /**
         * set event
         * @param args
         */
        setEvent: function() {
            $(this).click(function() {
                var e = $(this);
                var category = e.data('event-category');
                var action = e.data('event-action');
                var label = e.data('event-label');
                if (category) {
                    if (!action) {
                        action = 'click';
                    }
                    if (!label) {
                        label = e.text();
                    }

                    ga('send', 'event', category, action, label);
                }
            });
        }
    });
})($);