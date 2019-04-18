(function(c, q) {
    var m = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    c.fn.imagesLoaded = function(f) {
        function n() {
            var b = c(j),
                a = c(h);
            d && (h.length ? d.reject(e, b, a) : d.resolve(e));
            c.isFunction(f) && f.call(g, e, b, a)
        }

        function p(b) {
            k(b.target, "error" === b.type)
        }

        function k(b, a) {
            b.src === m || -1 !== c.inArray(b, l) || (l.push(b), a ? h.push(b) : j.push(b), c.data(b, "imagesLoaded", {
                isBroken: a,
                src: b.src
            }), r && d.notifyWith(c(b), [a, e, c(j), c(h)]), e.length === l.length && (setTimeout(n), e.unbind(".imagesLoaded",
                p)))
        }
        var g = this,
            d = c.isFunction(c.Deferred) ? c.Deferred() : 0,
            r = c.isFunction(d.notify),
            e = g.find("img").add(g.filter("img")),
            l = [],
            j = [],
            h = [];
        c.isPlainObject(f) && c.each(f, function(b, a) {
            if ("callback" === b) f = a;
            else if (d) d[b](a)
        });
        e.length ? e.bind("load.imagesLoaded error.imagesLoaded", p).each(function(b, a) {
                var d = a.src,
                    e = c.data(a, "imagesLoaded");
                if (e && e.src === d) k(a, e.isBroken);
                else if (a.complete && a.naturalWidth !== q) k(a, 0 === a.naturalWidth || 0 === a.naturalHeight);
                else if (a.readyState || a.complete) a.src = m, a.src = d
            }) :
            n();
        return d ? d.promise(g) : g
    }
})(jQuery);;
/**
 * @file views_load_more.js
 *
 * Handles the AJAX pager for the view_load_more plugin.
 */
(function($) {

    /**
     * Provide a series of commands that the server can request the client perform.
     */
    Drupal.ajax.prototype.commands.viewsLoadMoreAppend = function(ajax, response, status) {
        // Get information from the response. If it is not there, default to
        // our presets.
        var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
        var method = response.method || ajax.method;
        var targetList = response.targetList || '';
        var effect = ajax.getEffect(response);
        var pager_selector = response.options.pager_selector ? response.options.pager_selector : '.pager-load-more';

        // We don't know what response.data contains: it might be a string of text
        // without HTML, so don't rely on jQuery correctly iterpreting
        // $(response.data) as new HTML rather than a CSS selector. Also, if
        // response.data contains top-level text nodes, they get lost with either
        // $(response.data) or $('<div></div>').replaceWith(response.data).
        var new_content_wrapped = $('<div></div>').html(response.data);
        var new_content = new_content_wrapped.contents();

        // For legacy reasons, the effects processing code assumes that new_content
        // consists of a single top-level element. Also, it has not been
        // sufficiently tested whether attachBehaviors() can be successfully called
        // with a context object that includes top-level text nodes. However, to
        // give developers full control of the HTML appearing in the page, and to
        // enable Ajax content to be inserted in places where DIV elements are not
        // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
        // content satisfies the requirement of a single top-level element, and
        // only use the container DIV created above when it doesn't. For more
        // information, please see http://drupal.org/node/736066.
        if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
            new_content = new_content_wrapped;
        }
        // If removing content from the wrapper, detach behaviors first.
        var settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.detachBehaviors(wrapper, settings);
        if ($.waypoints != undefined) {
            $.waypoints('refresh');
        }

        // Set up our default query options. This is for advance users that might
        // change there views layout classes. This allows them to write there own
        // jquery selector to replace the content with.
        // Provide sensible defaults for unordered list, ordered list and table
        // view styles.
        var content_query = targetList && !response.options.content ? '> .view-content ' + targetList : response.options.content || '> .view-content';

        // If we're using any effects. Hide the new content before adding it to the DOM.
        if (effect.showEffect != 'show') {
            new_content.find(content_query).children().hide();
        }

        // Update the pager
        // Find both for the wrapper as the newly loaded content the direct child
        // .item-list in case of nested pagers
        wrapper.find(pager_selector).replaceWith(new_content.find(pager_selector));

        // Add the new content to the page.
        wrapper.find(content_query)[method](new_content.find(content_query).children());

        // Re-class the loaded content.
        // @todo this is faulty in many ways.  first of which is that user may have configured view to not have these classes at all.
        wrapper.find(content_query).children()
            .removeClass('views-row-first views-row-last views-row-odd views-row-even')
            .filter(':first')
            .addClass('views-row-first')
            .end()
            .filter(':last')
            .addClass('views-row-last')
            .end()
            .filter(':even')
            .addClass('views-row-odd')
            .end()
            .filter(':odd')
            .addClass('views-row-even')
            .end();

        if (effect.showEffect != 'show') {
            wrapper.find(content_query).children(':not(:visible)')[effect.showEffect](effect.showSpeed);
        }

        // Additional processing over new content
        wrapper.trigger('views_load_more.new_content', new_content.clone());

        // Attach all JavaScript behaviors to the new content
        // Remove the Jquery once Class, TODO: There needs to be a better
        // way of doing this, look at .removeOnce() :-/
        var classes = wrapper.attr('class');
        var onceClass = classes.match(/jquery-once-[0-9]*-[a-z]*/);
        wrapper.removeClass(onceClass[0]);
        settings = response.settings || ajax.settings || Drupal.settings;
        Drupal.attachBehaviors(wrapper, settings);
    };

    /**
     * Attaches the AJAX behavior to Views Load More waypoint support.
     */
    Drupal.behaviors.ViewsLoadMore = {
        attach: function(context, settings) {
            var default_opts = {
                offset: '100%'
            };

            if (settings && settings.viewsLoadMore && settings.views && settings.views.ajaxViews) {
                $.each(settings.viewsLoadMore, function(i, setting) {
                    var view = '.view-id-' + setting.view_name + '.view-display-id-' + setting.view_display_id + ' .pager-next a',
                        opts = {};

                    $.extend(opts, default_opts, settings.viewsLoadMore[i].opts);

                    $(view).waypoint('destroy');
                    $(view).waypoint(function(event, direction) {
                        $(view).click();
                    }, opts);
                });
            }
        },
        detach: function(context, settings, trigger) {
            if (settings && settings.viewsLoadMore && settings.views && settings.views.ajaxViews) {
                $.each(settings.viewsLoadMore, function(i, setting) {
                    var view = '.view-id-' + setting.view_name + '.view-display-id-' + setting.view_display_id;
                    if ($(context).is(view)) {
                        $('.pager-next a', view).waypoint('destroy');
                    } else {
                        $(view, context).waypoint('destroy');
                    }
                });
            }
        }
    };
})(jQuery);;
Sage.ApacheSolr = Sage.ApacheSolr || {};

(function($) {

    Sage.ApacheSolr.ThemeBookModule = (function() {
        /**
         * Private variable toohold the data of a book for rendering
         * @type {{}}
         * @private
         */
        _data = {};

        /**
         * @returns {string}
         */
        function image() {
            return _data.bestseller ? '<div class="bestseller">' + _data.image + '</div>' : _data.image;
        }

        /**
         * @returns {string}
         */
        function title() {
            var output = '<div class="paragraph-spacing text-small">';
            output += '<a href="' + _data.path + '" class="color-smooth-grey strong anchor-camouflaged">' + _data.title + '</a>';
            if (_data.subtitle) {
                output += '<div class="color-warm-grey">' + _data.subtitle + '</div>';
            }
            output += '</div>';
            return output;
        }

        /**
         * @returns {string}
         */
        function description() {
            return _data.description ? '<p>' + _data.description + ' ...</p>' : '';
        }

        /**
         * @returns {string}
         */
        function classificationBanner() {
            var output = '';
            if (_data.classification_group) {
                output += '<div class="text-uppercase border-bottom border--thin inherit-brand-border text-small clearfix margin-bottom">';
                output += '<div class="inherit-brand-fill l-element-left margin-right--small margin-bottom--small">' + _data.classification_icon + '</div>';
                output += _data.classification_group;
                output += '</div>';
            }
            return output;
        }

        /**
         * @returns {string}
         */
        function authors() {
            var output = '';
            if (_data.contributors) {
                output += '<div class="text-small strong">';
                output += _data.contributors.map(function(contributor) {
                        return '<a href="' + contributor.path + '" class="anchor-camouflaged">' + contributor.name + '</a>';
                    })
                    .join(', ');
                output += '</div>';
            }
            return output;
        }

        /**
         * @returns {string}
         */
        function publicationDate() {
            if (!_data.publication_date) {
                return ''
            }
            var output = '';
            output += '<div class="text-small product-date-publication-dates margin-bottom">';
            output += Drupal.t('Published') + ': ' + _data.publication_date;
            output += '</div>';
            return output;
        }

        /**
         * @returns {string}
         */
        function purchaseOptions() {
            var output = '';
            output += '<div class="text-tiny purchase-options-block margin-bottom--small">';
            output += _data.purchase_options;
            output += '</div>';
            return output;
        }

        function extraLinks() {
            var output = '';
            if (_data.is_review_available) {
                output += '<div class="text-small">';
                output += '<a href="' + _data.path + '" class="brand-color-1">' + Drupal.t('Review copy available') + '</a>';
                output += '</div>';
            }
            if (_data.companion_links) {
                output += '<div class="text-small">';
                output += _data.companion_links.map(function(companion_link) {
                    return '<div>' + companion_link + '</div>';
                }).join(' ');
                output += '</div>';
            }
            return output;
        }

        return {

            init: function() {
                var containers = document.querySelectorAll("[render-nodes-container]");
                if (containers.length) {
                    containers = Array.apply(null, containers);
                    containers.map(function(container) {
                        return this.renderContainer(container, 'resultsAsGrid');
                    }.bind(this));
                    Drupal.attachBehaviors(containers, Drupal.settings);
                }
            },

            /**
             *
             * @param container
             * @param style
             */
            renderContainer: function(container, style) {
                var _nodes = container.querySelectorAll('[search-result-id]');
                _nodes = Array.apply(null, _nodes);
                this[style](_nodes).map(function(node) {
                    if (node.nodeType) {
                        container.appendChild(node);
                    }
                });
            },

            /**
             *
             * @param node
             * @param style
             * @returns {*}
             */
            renderNode: function(node, style) {
                node.innerHTML = this[style](JSON.parse(node.getAttribute('node-info')));
                return node;
            },

            /**
             * Function for theming search results into grid pattern.
             *
             * @param items
             * @returns {*|string}
             */
            resultsAsGrid: function(items) {
                items = items.map(function(node) {
                    return this.renderNode(node, 'themeGridItem');
                }.bind(this));

                var chunks = items.chunk(4);
                chunks = chunks.map(function(chunk) {
                    var row = document.createElement("div");
                    row.className = 'row row-spacing--l';
                    for (var i in chunk) {
                        row.appendChild(chunk[i]);
                    }
                    return row;
                });

                return chunks;
            },

            resultsWithoutSwitcher: function(items) {
                items = items.map(function(node) {
                    return this.renderNode(node, 'themeGridItem');
                }.bind(this));

                var chunks = items.chunk(4);
                return chunks;
            },

            /**
             * Function for theming search results into list pattern.
             *
             * @param items
             * @returns {*|string}
             */
            resultsAsList: function(items) {
                return items.map(function(node) {
                    return this.renderNode(node, 'themeListItem');
                }.bind(this));
            },

            /**
             * Search result (grid) theme
             * @param {object} data
             * @returns {string}
             */
            themeGridItem: function(data) {
                _data = data;
                var output = '';
                output += '<article class="col-sm-6 col-md-3 col-spacing--l margin-bottom--large brand-parent--' + data.brand_parent + '">';
                output += '<div class="cover-wrapper padding-bottom text-center">' + image() + '</div>';
                output += classificationBanner();
                output += title();
                output += authors();
                output += publicationDate();
                output += purchaseOptions();
                output += extraLinks();

                output += '</article>';
                return output;
            },

            /**
             * Search result (grid) theme
             * @param {object} data
             * @returns {string}
             */
            themeListItem: function(data) {
                _data = data;
                var output = '';
                output += '<article class="margin-bottom--extra-large brand-parent--' + data.brand_parent + '">';
                output += '<div class="media">';
                output += '<div class="media-master">';
                output += '<div class="text-center">' + image() + '</div>';
                output += classificationBanner();
                output += '</div>';
                output += '<div class="media-body">';
                output += title();
                output += authors();
                output += publicationDate();
                output += description();
                output += purchaseOptions();
                output += extraLinks();
                output += '</div>';
                output += '</div>';
                output += '</article>';
                return output;
            }
        };
    }());

})(jQuery);



;
/**
 * @file
 * Some basic behaviors and utility functions for Views.
 */
(function($) {

    Drupal.Views = {};

    /**
     * JQuery UI tabs, Views integration component.
     */
    Drupal.behaviors.viewsTabs = {
        attach: function(context) {
            if ($.viewsUi && $.viewsUi.tabs) {
                $('#views-tabset').once('views-processed').viewsTabs({
                    selectedClass: 'active'
                });
            }

            $('a.views-remove-link').once('views-processed').click(function(event) {
                var id = $(this).attr('id').replace('views-remove-link-', '');
                $('#views-row-' + id).hide();
                $('#views-removed-' + id).attr('checked', true);
                event.preventDefault();
            });
            /**
             * Here is to handle display deletion
             * (checking in the hidden checkbox and hiding out the row).
             */
            $('a.display-remove-link')
                .addClass('display-processed')
                .click(function() {
                    var id = $(this).attr('id').replace('display-remove-link-', '');
                    $('#display-row-' + id).hide();
                    $('#display-removed-' + id).attr('checked', true);
                    return false;
                });
        }
    };

    /**
     * Helper function to parse a querystring.
     */
    Drupal.Views.parseQueryString = function(query) {
        var args = {};
        var pos = query.indexOf('?');
        if (pos != -1) {
            query = query.substring(pos + 1);
        }
        var pairs = query.split('&');
        for (var i in pairs) {
            if (typeof(pairs[i]) == 'string') {
                var pair = pairs[i].split('=');
                // Ignore the 'q' path argument, if present.
                if (pair[0] != 'q' && pair[1]) {
                    args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
                }
            }
        }
        return args;
    };

    /**
     * Helper function to return a view's arguments based on a path.
     */
    Drupal.Views.parseViewArgs = function(href, viewPath) {

        // Provide language prefix.
        if (Drupal.settings.pathPrefix) {
            var viewPath = Drupal.settings.pathPrefix + viewPath;
        }
        var returnObj = {};
        var path = Drupal.Views.getPath(href);
        // Ensure we have a correct path.
        if (viewPath && path.substring(0, viewPath.length + 1) == viewPath + '/') {
            var args = decodeURIComponent(path.substring(viewPath.length + 1, path.length));
            returnObj.view_args = args;
            returnObj.view_path = path;
        }
        return returnObj;
    };

    /**
     * Strip off the protocol plus domain from an href.
     */
    Drupal.Views.pathPortion = function(href) {
        // Remove e.g. http://example.com if present.
        var protocol = window.location.protocol;
        if (href.substring(0, protocol.length) == protocol) {
            // 2 is the length of the '//' that normally follows the protocol.
            href = href.substring(href.indexOf('/', protocol.length + 2));
        }
        return href;
    };

    /**
     * Return the Drupal path portion of an href.
     */
    Drupal.Views.getPath = function(href) {
        href = Drupal.Views.pathPortion(href);
        href = href.substring(Drupal.settings.basePath.length, href.length);
        // 3 is the length of the '?q=' added to the url without clean urls.
        if (href.substring(0, 3) == '?q=') {
            href = href.substring(3, href.length);
        }
        var chars = ['#', '?', '&'];
        for (var i in chars) {
            if (href.indexOf(chars[i]) > -1) {
                href = href.substr(0, href.indexOf(chars[i]));
            }
        }
        return href;
    };

})(jQuery);;
/**
 * @file
 * Handles AJAX fetching of views, including filter submission and response.
 */
(function($) {

    /**
     * Attaches the AJAX behavior to exposed filter forms and key views links.
     */
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function() {
        if (Drupal.settings && Drupal.settings.views && Drupal.settings.views.ajaxViews) {
            $.each(Drupal.settings.views.ajaxViews, function(i, settings) {
                Drupal.views.instances[i] = new Drupal.views.ajaxView(settings);
            });
        }
    };

    Drupal.views = {};
    Drupal.views.instances = {};

    /**
     * Javascript object for a certain view.
     */
    Drupal.views.ajaxView = function(settings) {
        var selector = '.view-dom-id-' + settings.view_dom_id;
        this.$view = $(selector);

        // Retrieve the path to use for views' ajax.
        var ajax_path = Drupal.settings.views.ajax_path;

        // If there are multiple views this might've ended up showing up multiple
        // times.
        if (ajax_path.constructor.toString().indexOf("Array") != -1) {
            ajax_path = ajax_path[0];
        }

        // Check if there are any GET parameters to send to views.
        var queryString = window.location.search || '';
        if (queryString !== '') {
            // Remove the question mark and Drupal path component if any.
            var queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
            if (queryString !== '') {
                // If there is a '?' in ajax_path, clean url are on and & should be
                // used to add parameters.
                queryString = ((/\?/.test(ajax_path)) ? '&' : '?') + queryString;
            }
        }

        this.element_settings = {
            url: ajax_path + queryString,
            submit: settings,
            setClick: true,
            event: 'click',
            selector: selector,
            progress: {
                type: 'throbber'
            }
        };

        this.settings = settings;

        // Add the ajax to exposed forms.
        this.$exposed_form = $('#views-exposed-form-' + settings.view_name.replace(/_/g, '-') + '-' + settings.view_display_id.replace(/_/g, '-'));
        this.$exposed_form.once(jQuery.proxy(this.attachExposedFormAjax, this));

        // Store Drupal.ajax objects here for all pager links.
        this.links = [];

        // Add the ajax to pagers.
        this.$view
            // Don't attach to nested views. Doing so would attach multiple behaviors
            // to a given element.
            .filter(jQuery.proxy(this.filterNestedViews, this))
            .once(jQuery.proxy(this.attachPagerAjax, this));

        // Add a trigger to update this view specifically. In order to trigger a
        // refresh use the following code.
        //
        // @code
        // jQuery('.view-name').trigger('RefreshView');
        // @endcode
        // Add a trigger to update this view specifically.
        var self_settings = this.element_settings;
        self_settings.event = 'RefreshView';
        this.refreshViewAjax = new Drupal.ajax(this.selector, this.$view, self_settings);
    };

    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
        var button = $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form);
        button = button[0];

        // Call the autocomplete submit before doing AJAX.
        $(button).click(function() {
            if (Drupal.autocompleteSubmit) {
                Drupal.autocompleteSubmit();
            }
        });

        this.exposedFormAjax = new Drupal.ajax($(button).attr('id'), button, this.element_settings);
    };

    Drupal.views.ajaxView.prototype.filterNestedViews = function() {
        // If there is at least one parent with a view class, this view
        // is nested (e.g., an attachment). Bail.
        return !this.$view.parents('.view').length;
    };

    /**
     * Attach the ajax behavior to each link.
     */
    Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
        this.$view.find('ul.pager > li > a, th.views-field a, .attachment .views-summary a')
            .each(jQuery.proxy(this.attachPagerLinkAjax, this));
    };

    /**
     * Attach the ajax behavior to a singe link.
     */
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
        var $link = $(link);
        var viewData = {};
        var href = $link.attr('href');
        // Construct an object using the settings defaults and then overriding
        // with data specific to the link.
        $.extend(
            viewData,
            this.settings,
            Drupal.Views.parseQueryString(href),
            // Extract argument data from the URL.
            Drupal.Views.parseViewArgs(href, this.settings.view_base_path)
        );

        // For anchor tags, these will go to the target of the anchor rather
        // than the usual location.
        $.extend(viewData, Drupal.Views.parseViewArgs(href, this.settings.view_base_path));

        this.element_settings.submit = viewData;
        this.pagerAjax = new Drupal.ajax(false, $link, this.element_settings);
        this.links.push(this.pagerAjax);
    };

    Drupal.ajax.prototype.commands.viewsScrollTop = function(ajax, response, status) {
        // Scroll to the top of the view. This will allow users
        // to browse newly loaded content after e.g. clicking a pager
        // link.
        var offset = $(response.selector).offset();
        // We can't guarantee that the scrollable object should be
        // the body, as the view could be embedded in something
        // more complex such as a modal popup. Recurse up the DOM
        // and scroll the first element that has a non-zero top.
        var scrollTarget = response.selector;
        while ($(scrollTarget).scrollTop() == 0 && $(scrollTarget).parent()) {
            scrollTarget = $(scrollTarget).parent();
        }
        // Only scroll upward.
        if (offset.top - 10 < $(scrollTarget).scrollTop()) {
            $(scrollTarget).animate({
                scrollTop: (offset.top - 10)
            }, 500);
        }
    };

})(jQuery);;
/**
 * @file
 *  Custom breadcrumbs functionality for SAGE.
 */
Sage.Breadcrumbs = Sage.Breadcrumbs || {};

(function($) {

    Sage.Breadcrumbs = {

        Container: $('.breadcrumb-js'),

        render: function() {
            if (localStorage.getItem('breadcrumbs') !== null) {
                this.resetBreadcrumbs();
                this.addBreadcrumb(['/', 'Home']);
                this.setBreadcrumbs();
                this.resetStorageAfterLeave();
            }
        },

        addBreadcrumb: function(item) {
            Sage.Breadcrumbs.Container.append('<a href="' + item[0] + '" class="search-breadcrumb">' + item[1] + '</a>');
        },

        resetBreadcrumbs: function() {
            Sage.Breadcrumbs.Container.html('');
        },

        addBreadcrumbItem: function(url, title) {
            console.log('Adding URL ' + url + ' with TITLE ' + title);
            url = url.toLowerCase(0);

            if (localStorage.getItem('breadcrumbs') !== null) {
                if (localStorage.getItem('breadcrumbs').split('|').length >= 2) {
                    this.removeLastItem();
                }
            }

            if (this.checkIfExist(url) === false) {
                localStorage.breadcrumbs = (localStorage.getItem('breadcrumbs') ? localStorage.getItem('breadcrumbs') + '|' : '') + url + ':' + title;
            }
        },

        checkIfExist: function(path_alias) {
            var exists = false;
            if (localStorage.getItem('breadcrumbs') !== null) {
                var breadcrumbs = localStorage.getItem('breadcrumbs');
                var list = breadcrumbs.split('|');
                $.each(list, function(index, value) {
                    url = value.split(':');
                    if (url[0] == path_alias) {
                        exists = true;
                    }
                });
            }
            return exists;
        },

        setBreadcrumbs: function() {
            limit = 2;
            breadcrumbs = localStorage['breadcrumbs'];
            list = breadcrumbs.split('|');

            current_path = window.location.pathname;
            path_elements = current_path.split('/');
            path_alias = '/' + path_elements[path_elements.length - 1];

            if (list.length > 0) {
                var count = 0;
                $.each(list, function(index, value) {
                    url = value.split(':');
                    if ((url[0].toLowerCase() !== path_alias.toLowerCase()) && count < limit) {
                        Sage.Breadcrumbs.Container.append(' > ');
                        Sage.Breadcrumbs.Container.append('<a href="' + url[0] + '" class="search-breadcrumb">' + url[1] + '</a>');
                    }
                    count++;
                });
            }
        },

        addBreadcrumbs: function(items) {
            $.each(items, function(index, value) {
                Sage.Breadcrumbs.Container.append('<a href="' + value[0] + '" class="search-breadcrumb">' + value[1] + '</a>');
                Sage.Breadcrumbs.Container.append(' > ');
            });
        },

        removeLastItem: function() {
            breadcrumbs = localStorage['breadcrumbs'].split('|');
            new_breadcrumbs = '';
            for (i = 0; i < breadcrumbs.length - 1; i++) {
                new_breadcrumbs += breadcrumbs[i];
            }
            localStorage.setItem('breadcrumbs', new_breadcrumbs);
        },

        removeBreadcrumbs: function() {
            localStorage.removeItem('breadcrumbs');
        },

        resetStorageAfterLeave: function() {
            $(window).bind("beforeunload", function() {
                this.removeBreadcrumbs();
            });
        },

        setSearchBreadcrumbs: function() {
            // Check if localStorage present. If yes proceed.
            if (localStorage.getItem('breadcrumbs') !== null) {
                this.resetBreadcrumbs();
                this.addBreadcrumb(['/', 'Home']);
                // Middle part!
                this.setBreadcrumbs();
                // Middle part!
                Sage.Breadcrumbs.Container.append(' > ');
                this.addBreadcrumb(['/product', 'Search']);
                this.resetStorageAfterLeave();
            }
        }

    };

})(jQuery);;