/*
 * JQuery URL Parser plugin
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */
(function(e, d) {
    function h(b) {
        b = b.tagName;
        return b !== d ? j[b.toLowerCase()] : b
    }
    var j = {
            a: "href",
            img: "src",
            form: "action",
            base: "href",
            script: "src",
            iframe: "src",
            link: "href"
        },
        k = "source protocol authority userInfo user password host port relative path directory file query fragment".split(" "),
        l = {
            anchor: "fragment"
        },
        m = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        },
        n = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g,
        p = /(?:^|&|;)([^&=;]*)=?([^&;]*)/g;
    e.fn.url = function(b) {
        var d = "";
        this.length && (d = e(this).attr(h(this[0])) || "");
        return e.url(d, b)
    };
    e.url = function(b, e) {
        1 === arguments.length && !0 === b && (e = !0, b = d);
        b = b || window.location.toString();
        for (var g = e || !1, f = decodeURI(b), g = m[g ? "strict" : "loose"].exec(f), c = {
                attr: {},
                param: {},
                seg: {}
            }, f = 14; f--;) c.attr[k[f]] = g[f] || "";
        c.param.query = {};
        c.param.fragment = {};
        c.attr.query.replace(n, function(a, b, d) {
            b && (c.param.query[b] = d)
        });
        c.attr.fragment.replace(p,
            function(a, b, d) {
                b && (c.param.fragment[b] = d)
            });
        c.seg.path = c.attr.path.replace(/^\/+|\/+$/g, "").split("/");
        c.seg.fragment = c.attr.fragment.replace(/^\/+|\/+$/g, "").split("/");
        c.attr.base = c.attr.host ? c.attr.protocol + "://" + c.attr.host + (c.attr.port ? ":" + c.attr.port : "") : "";
        return {
            data: c,
            attr: function(a) {
                a = l[a] || a;
                return a !== d ? this.data.attr[a] : this.data.attr
            },
            param: function(a) {
                return a !== d ? this.data.param.query[a] : this.data.param.query
            },
            fparam: function(a) {
                return a !== d ? this.data.param.fragment[a] : this.data.param.fragment
            },
            segment: function(a) {
                if (a === d) return this.data.seg.path;
                a = 0 > a ? this.data.seg.path.length + a : a - 1;
                return this.data.seg.path[a]
            },
            fsegment: function(a) {
                if (a === d) return this.data.seg.fragment;
                a = 0 > a ? this.data.seg.fragment.length + a : a - 1;
                return this.data.seg.fragment[a]
            }
        }
    }
})(jQuery);;
/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
 */
(function(b) {
    function j() {
        c.setAttribute("content", k);
        d = !0
    }

    function l(a) {
        e = a.accelerationIncludingGravity;
        f = Math.abs(e.x);
        g = Math.abs(e.y);
        h = Math.abs(e.z);
        (!b.orientation || 180 === b.orientation) && (7 < f || (6 < h && 8 > g || 8 > h && 6 < g) && 5 < f) ? d && (c.setAttribute("content", m), d = !1): d || j()
    }
    var a = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(navigator.platform) && (/OS [1-5]_[0-9_]* like Mac OS X/i.test(a) && -1 < a.indexOf("AppleWebKit")) && (a = b.document, a.querySelector)) {
        var c = a.querySelector("meta[name=viewport]"),
            a = c &&
            c.getAttribute("content"),
            m = a + ",maximum-scale=1",
            k = a + ",maximum-scale=10",
            d = !0,
            f, g, h, e;
        c && (b.addEventListener("orientationchange", j, !1), b.addEventListener("devicemotion", l, !1))
    }
})(this);;
/*
TODO: documentation
 */
/**
 * Description of the class.
 * @namespace
 * @param {number} key Description of the key.
 * @param {*} value Description of the value.
 * @alias foo
 */
//declare namespace
var DOT = DOT || {};

;
(function($, window, document, undefined) {

    $(document).ready(function() {
        $("#edit-field-address-administrative-area option").eq(0).text("All");
        //FMCSA Carrier Search
        if (document.getElementById("carrier-question")) {
            $('#carrier-question').qtip({
                content: Drupal.settings.dot_carrier.carrierhover, // Give it some content, in this case a simple string
                show: 'mouseover',
                position: {
                    corner: {
                        target: 'bottomLeft',
                        tooltip: 'topRight'
                    }
                },
                style: {
                    background: '#A2D959',
                },
                hide: 'mouseout',
            });
        }
    });

    // utility to easily extend namespace
    // useage: DOT.namespace('plugin.myNewPlugin') // output: DOT.plugin.myNewPlugin
    DOT.namespace = function(ns_string) {
        var parts = ns_string.split('.'),
            parent = DOT,
            i;

        // strip redundant leading global
        if (parts[0] === "DOT") {
            parts = parts.slice(1);
        }

        for (i = 0; i < parts.length; i += 1) {
            // create a property if it doesn't exist
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
            }
            parent = parent[parts[i]];
        }
        return parent;
    };

    // setup base configurations which can be overridden on subtheme level before document ready event
    // most default values are based on what's used in dot.gov
    //TODO: setup getters and setters for config options rather than have them publicly exposed
    DOT.config = {
        // components to setup by default on page load
        components: {
            accordionMenu: true,
            mobileMenus: true,
            stickyHeader: true,
            stickyLeftNav: true,
            responsiveMenu: false,
            responsiveImages: true,
            feedbackFooterLink: false,
            resolveTouchEvents: true
        },
        // selectors that will be cached into DOT.elements as jQuery objects on page load
        elements: {
            pageWrap: "#page-wrapper",
            page: "#page",
            header: "#header",
            footer: "#footer",
            mainMenu: "#main-menu",
            subNav: "#page-subnav,#panel-subnav",
            homeWallContainer: "#content-wall",
            feedbackForm: "#block-feedback-form"
        },
        // collection of string values to prevent hard coding values into JavaScript
        content: {
            feedbackLink: "Submit Feedback",
            feedbackLinkAlt: "Website Feedback",
            mobileMainMenuButton: "toggle main menu",
            mobileSubMenuButton: "toggle sub menu"
        },
        // collection of url's to prevent hard coding values into JavaScript
        url: {

        },
        equalize: { //used by DOT.util.setEqualHeights
            breakpoints: {
                front: 665,
                notfront: 480,
                footer: 801
            }
        },
        responsiveMenu: { //used by DOT.util.responsiveMenu
            breakpoint: 666,
            panelWidth: 410,
            disabled: 480
        },
        mobileMenus: {
            slideEl: "#page",
            searchFormEl: "#search-block-form",

            enableTopHeight: true
        },
        stickyLeftNav: {
            topSpacing: 0,
            enableTopHeight: true
        },
        // other global variables
        panelOpts: [], // used by DOT.fn.togglePanel
        sticked: [], // used by DOT.fn.sticky
        noSticky: [], // array of selectors used to disable sticky elements on certain pages
        mobileBreakpoint: 570 // used by DOT.fn.sticky and DOT.init.mobileMenus
    };

    // utility functions
    DOT.util = {
        /* Throttle & Debounce methods
         * Original code by Ben Alman
         * Website: http://benalman.com/projects/jquery-throttle-debounce-plugin/
         * Modified by Frank Ali
         */
        throttle: function(callback, no_trailing, delay, debounce_mode) {
            var timeout_id,
                last_exec = 0;

            if (typeof no_trailing !== 'boolean') {
                debounce_mode = delay;
                delay = no_trailing;
                no_trailing = undefined;
            }

            function timer() {
                var obj = this,
                    elapsed = +new Date() - last_exec,
                    args = arguments;

                function exec() {
                    last_exec = +new Date();
                    callback.apply(obj, args);
                }

                if (debounce_mode && !timeout_id) {
                    exec();
                }

                timeout_id && clearTimeout(timeout_id);

                if (debounce_mode === undefined && elapsed > delay) {
                    exec();

                } else if (no_trailing !== true) {
                    timeout_id = setTimeout(debounce_mode ? timeout_id = undefined : exec, debounce_mode === undefined ? delay - elapsed : delay);
                }
            }

            // Set the guid of `wrapper` function to the same of original callback, so
            // it can be removed in jQuery 1.4+ .unbind or .die by using the original
            // callback as a reference.
            if ($.guid) {
                timer.guid = callback.guid = callback.guid || $.guid++;
            }

            return timer;
        },
        debounce: function(callback, delay, at_begin) {
            return DOT.util.throttle(callback, delay, at_begin === undefined ? false : true);
        },
        is_touch_device: function() {
            return 'ontouchstart' in document.documentElement || 'onmsgesturechange' in document.documentElement
        },
        setPageElements: function(obj, val) {
            if (!DOT.elements || !obj) {
                // initialize jQuery constants
                DOT.namespace('elements');
                DOT.elements = {
                    window: $(window),
                    document: $(document),
                    body: $('body')
                };
                for (var o in DOT.config.elements) {
                    DOT.elements[o] = $(DOT.config.elements[o]);
                }
            }
            if (typeof obj === 'object' && !obj instanceof jQuery) {
                $.extend(DOT.elements, obj);
            } else if (typeof obj === 'string') {
                DOT.elements[obj] = val;
            } else if (obj !== undefined) {
                $.error('invalid argument:' + obj);
            }
        },
        // adjustment for anchor link in the page URL
        // compensates for the sticky header
        scrollToAnchor: function() {
            DOT.elements.window.one("scroll", function() {
                var urlAnchor = window.location.hash;
                var headerHeight = DOT.elements.header.height();
                if (urlAnchor != 'undefined' && urlAnchor != '') {
                    var offset = $('' + urlAnchor).offset();
                    var scrollto = offset.top - (headerHeight + 10); // sicky header height = 120px  buffer of 10px
                    DOT.elements.body.animate({
                        scrollTop: scrollto
                    }, 0); //scroll to adjusted anchor target
                    return false;
                }
            });
        },
        setEqualHeights: function() {

            if (DOT.elements.body.is(".front")) {
                if (DOT.elements.window.width() > DOT.config.equalize.breakpoints.front) {
                    $("#content-wall").DOT().equalize("childHeights");
                }
                /* rather than running JavaScript to remove child heights, setting min-height to 0 in dotHome.css media query
                 else {
                 $("#content-wall").DOT().equalize("removeChildHeights");
                 }
                 */
            } else if (DOT.elements.body.is(".not-front")) {
                if ($("#content-landing")[0]) {
                    if (DOT.elements.window.width() > DOT.config.equalize.breakpoints.notfront) {
                        $("#content-wall .row").each(function() {
                            $(this).find(".pane-landing-page-links").DOT().equalize("heights");
                            $(this).find(".pane-content").DOT().equalize("heights");
                        });
                    }
                    /* rather than running JavaScript to remove child heights, setting min-height to 0 in landing.css media query
                     else {
                     $("#content-wall .row").each(function(){
                     $(this).find(".pane-content").DOT().equalize("removeHeights");
                     });
                     }
                     */
                }
            }
            if (DOT.elements.footer.width() > DOT.config.equalize.breakpoints.footer) {
                DOT.elements.footer.find(".block").DOT().equalize("heights");
            }
        }

    };

    // custom built plug-ins - should be chainable by returning original object
    DOT.fn = {
        sticky: function(method) {

            var defaults = {
                    topSpacing: 0,
                    bottomSpacing: 0,
                    className: 'is-sticky',
                    wrapperClassName: 'sticky-wrapper',
                    center: false,
                    getWidthFrom: '',
                    getTopHeightFrom: '',
                    getBottomHeightFrom: '',
                    disabledWidth: 0
                },
                $window = DOT.elements.window,
                $document = DOT.elements.document,
                sticked = DOT.config.sticked,
                windowHeight = $window.height(),
                resizeTimeout = null,
                scroller = function() {
                    var scrollTop = $window.scrollTop(),
                        documentHeight = $document.height(),
                        documentWidth = $document.width(),
                        dwh = documentHeight - windowHeight,
                        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

                    for (var i = 0; i < sticked.length; i++) {
                        var s = sticked[i],
                            elementTop = s.stickyWrapper.offset().top,
                            etse = elementTop - s.topSpacing - extra - methods.getHeights(s.getTopHeightFrom);

                        if (documentWidth <= s.disabledWidth) {
                            methods.disable(s);
                            continue;
                        }

                        if (scrollTop <= etse) {
                            if (s.currentTop !== null) {
                                s.stickyElement
                                    .css({
                                        position: '',
                                        top: ''
                                    })
                                    .parent().removeClass(s.className);
                                s.currentTop = null;
                            }
                        } else {
                            var newTop = documentHeight - s.stickyElement.outerHeight() -
                                s.topSpacing - s.bottomSpacing - scrollTop - extra -
                                methods.getHeights(s.getTopHeightFrom) - methods.getHeights(s.getBottomHeightFrom);
                            if (newTop < 0) {
                                newTop = newTop + s.topSpacing + methods.getHeights(s.getTopHeightFrom);
                            } else {
                                newTop = s.topSpacing + methods.getHeights(s.getTopHeightFrom);
                                s.stickyElement.parent().removeClass("is-sticky-bottom");
                            }
                            if (s.currentTop != newTop || this != window) {
                                s.stickyElement
                                    .css({
                                        position: 'fixed',
                                        top: newTop
                                    })
                                    .parent().addClass(s.className);

                                //console.log(s.currentTop)
                                if (s.currentTop) {
                                    s.stickyElement.parent().addClass("is-sticky-bottom");
                                }

                                if (typeof s.getWidthFrom !== 'undefined') {
                                    s.stickyElement.css('width', $(s.getWidthFrom).width());
                                }
                                s.currentTop = newTop;
                            }
                        }
                    }
                },
                resizer = function() {
                    if (!resizeTimeout) {
                        windowHeight = $window.height();
                        for (var i = 0; i < sticked.length; i++) {
                            var s = sticked[i],
                                documentWidth = $document.width();

                            if (documentWidth <= s.disabledWidth) {
                                methods.disable(s);
                                continue;
                            } else {
                                methods.update();
                            }
                        }
                        resizeTimeout = setTimeout(function() {
                            resizeTimeout = null;
                        }, 100);
                    }
                },
                methods = {
                    init: function(options) {
                        var o = $.extend({}, defaults, options);
                        return this.each(function() {
                            if ($.data(this, "sticky") != undefined) {
                                return;
                            }
                            var stickyElement = $(this);

                            stickyId = stickyElement.attr('id');
                            wrapper = $('<div></div>')
                                .attr('id', stickyId + '-sticky-wrapper')
                                .addClass(o.wrapperClassName);
                            stickyElement.wrapAll(wrapper);

                            if (o.center) {
                                stickyElement.css({
                                    width: "100%"
                                });
                            }

                            if (stickyElement.css('float') == 'right') {
                                stickyElement.css('float', 'none').parent().css('float', 'right');
                            }

                            var stickyWrapper = stickyElement.parent();
                            sticked.push({
                                topSpacing: o.topSpacing,
                                bottomSpacing: o.bottomSpacing,
                                stickyElement: stickyElement,
                                currentTop: null,
                                stickyWrapper: stickyWrapper,
                                className: o.className,
                                getWidthFrom: o.getWidthFrom,
                                getTopHeightFrom: o.getTopHeightFrom,
                                getBottomHeightFrom: o.getBottomHeightFrom,
                                disabledWidth: o.disabledWidth
                            });

                            $.data(this, "sticky", true);
                        });
                    },
                    update: scroller,
                    disable: function(s) {
                        s.stickyElement
                            .css({
                                position: '',
                                top: ''
                            })
                            .removeClass(s.className)
                            .parent().removeClass(s.className);
                    },
                    getHeights: function(el) {
                        var height = 0;
                        if (el == "") {
                            return height;
                        } else if (typeof el != "string") {
                            for (var i = 0, len = el.length; i < len; i++) {
                                height += $(el[i]).outerHeight();
                            }
                        } else {
                            height += $(el).outerHeight();
                        }
                        return height;
                    }
                };

            //only want to attach the window event listeners once
            if ($.data(window, "stickyEvents") == undefined) {
                // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
                if (window.addEventListener) {
                    window.addEventListener('scroll', scroller, false);
                    window.addEventListener('resize', resizer, false);
                } else if (window.attachEvent) {
                    window.attachEvent('onscroll', scroller);
                    window.attachEvent('onresize', resizer);
                }
                $.data(window, "stickyEvents", true);
            }


            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.sticky');
            }

        },

        equalize: function(method) {
            var methods = {
                heights: function() {

                    var currentTallest = 0;

                    //loop through each element to capture the tallest height
                    this.each(function() {
                        if ($(this).css("min-height", "").outerHeight() > currentTallest) {
                            currentTallest = $(this).outerHeight();
                        }
                    });

                    //assign tallest height to all elements
                    this.each(function() {
                        $(this).css({
                            'min-height': currentTallest
                        });
                    });

                    return this;
                },
                widths: function() {

                    var currentWidest = 0;

                    //loop through each element to capture the tallest height
                    this.each(function() {
                        if ($(this).css("min-width", "").outerWidth() > currentWidest) {
                            currentWidest = $(this).outerWidth();
                        }
                    });

                    //assign tallest height to all elements
                    this.each(function() {
                        $(this).css({
                            'min-width': currentWidest
                        });
                    });

                    return this;
                },
                removeHeights: function() {
                    this.each(function() {
                        $(this).css("min-height", "")
                    });
                    return this;
                },
                childHeights: function() {
                    this.each(function() {

                        var currentTallest = 0,
                            $el = $(this);

                        $el.children().each(function() {
                            if ($(this).outerHeight() > currentTallest) {
                                currentTallest = $(this).outerHeight();
                            }
                        });

                        $el.children().css({
                            'min-height': currentTallest
                        });
                    });
                    return this;
                },
                childWidths: function() {
                    this.each(function() {

                        var currentWidest = 0,
                            $el = $(this);

                        $el.children().each(function() {
                            if ($(this).outerWidth() > currentWidest) {
                                currentWidest = $(this).outerWidth();
                            }
                        });

                        $el.children().css({
                            'min-width': currentWidest
                        });
                    });
                    return this;
                },
                removeChildHeights: function() {
                    this.each(function() {
                        $(this).children().each(function() {
                            $(this).css("min-height", "");
                        });
                    });
                    return this;
                }
            };

            // Method calling logic
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                //call equalize heights as default
                return methods.heights.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on DOT.equalize');
            }

        },

        togglePanel: function(method) {
            var defaults = {
                    panelHeader: "> :first-child",
                    panelContent: "> :last-child",
                    addToggleControl: true,
                    toggleClass: "togglePanel",
                    effect: "slide",
                    startClosed: false,
                    toggleBreakpoint: 480
                },
                methods = {
                    init: function(options) {
                        return this.each(function() {
                            var $this = $(this),
                                o = $.extend({}, defaults, options),
                                $header = $this.find(o.panelHeader),
                                $content = $this.find(o.panelContent),
                                docWidth = DOT.elements.document.width();

                            if (o.addToggleControl) {
                                $header.css("position", "relative").append('<div class="panelToggleControl"></div>')
                            }
                            $this.addClass(o.toggleClass);

                            if (o.startClosed) {
                                if (docWidth < o.toggleBreakpoint) {
                                    $content.hide();
                                }
                            } else {
                                $header.addClass("open");
                            }

                            $header.bind("click.togglePanel", function(e) {
                                e.preventDefault();
                                if (DOT.elements.document.width() < o.toggleBreakpoint) {
                                    if ($header.is(".open")) {
                                        $content.slideUp();
                                        $header.removeClass("open");
                                    } else {
                                        $content.slideDown();
                                        $header.addClass("open");
                                    }
                                } else {
                                    return false;
                                }
                            });

                            // store options for resize event
                            DOT.config.panelOpts.push({
                                content: $content,
                                header: $header,
                                breakpoint: o.toggleBreakpoint
                            });

                        });
                    },
                    destroy: function() {
                        //TODO: write destroy method
                    }
                },
                resizer = function() {
                    for (var i = 0; i < DOT.config.panelOpts.length; i++) {
                        var p = DOT.config.panelOpts[i];

                        if (DOT.elements.document.width() < p.breakpoint) {
                            if (p.header.is(".open")) {
                                p.content.show();
                            } else {
                                p.content.hide();
                            }
                        } else {
                            p.content.show();
                        }
                    }
                };

            DOT.elements.window.bind("resize", DOT.util.throttle(resizer, 100));

            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on jQuery.togglePanel');
            }
        },

        swipe: function(options) {
            var defaults = {
                'threshold': {
                    'x': 30,
                    'y': 10
                },
                'swipeLeft': function(e) {
                    alert('swiped left');
                },
                'swipeRight': function(e) {
                    alert('swiped right');
                }
            };

            // Default thresholds & swipe functions
            options = $.extend(true, {}, defaults, options);

            return this.each(function() {

                var self = this,
                    originalCoord = {
                        'x': 0,
                        'y': 0
                    },
                    finalCoord = {
                        'x': 0,
                        'y': 0
                    };

                // Screen touched, store the initial coordinates
                function touchStart(event) {
                    var touch = event.originalEvent.targetTouches[0];
                    originalCoord.x = touch.pageX;
                    originalCoord.y = touch.pageY;
                }

                // Store coordinates as finger is swiping
                function touchMove(event) {
                    var touch = event.originalEvent.targetTouches[0];
                    finalCoord.x = touch.pageX; // Updated X,Y coordinates
                    finalCoord.y = touch.pageY;
                }

                // Done swiping
                // Swipe should only be on X axis, ignore if swipe on Y axis
                // Calculate if the swipe was left or right
                function touchEnd(event) {
                    var changeY = originalCoord.y - finalCoord.y,
                        changeX,
                        threshold = options.threshold,
                        y = threshold.y,
                        x = threshold.x;
                    if (changeY < y && changeY > (-y)) {
                        changeX = originalCoord.x - finalCoord.x;
                        if (changeX > x) {
                            options.swipeLeft.call(self, event);
                        } else if (changeX < (-x)) {
                            options.swipeRight.call(self, event);
                        }
                    }
                }

                // Swipe was canceled
                function touchCancel() {
                    //console.log('Canceling swipe gesture…')
                }

                // Add gestures to all swipable areas
                $(self).bind({
                    'touchstart.swipe': touchStart,
                    'touchmove.swipe': touchMove,
                    'touchend.swipe': touchEnd,
                    'touchcancel.swipe': touchCancel
                });
            });
        },
        setupComponents: function(method, baseObj) {
            var $baseObj = baseObj ? $(baseObj) : $(document),
                methods = {
                    accordionMenu: function() {
                        DOT.init.accordionMenu($baseObj.find(".accordion_menu"));
                    },
                    mobileMenus: function() {
                        DOT.init.mobileMenus();
                    },
                    stickyHeader: function() {
                        DOT.init.stickyHeader();
                    },
                    stickyLeftNav: function() {
                        DOT.init.stickyLeftNav();
                    },
                    responsiveMenu: function() {
                        DOT.init.responsiveMenu();
                    },

                    responsiveImages: function() {
                        DOT.init.responsiveImages();
                    },

                    feedbackFooterLink: function() {
                        DOT.init.feedbackFooterLink();
                    },
                    resolveTouchEvents: function() {
                        DOT.init.resolveTouchEvents();
                    }
                },
                init = function(opt) {
                    var options = $.extend({}, DOT.config.components, opt);
                    for (var o in options) {
                        if (options[o]) {
                            methods[o].apply(this, arguments);
                        }
                    }
                };

            // Method calling logic
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                //call equalize heights as default
                return init.apply(this, arguments);
            } else {
                $.error('Method ' + method + ' does not exist on DOT.equalize');
            }
        }
    };

    // a collection of initialization scripts for different modules
    DOT.init = {
        accordionMenu: function(menu) {
            menu.each(function() {
                if ($.data(this, "accordionMenu") != undefined) {
                    return;
                }
                var $this = $(this);
                var main = $("#main");
                var mainOffset = main.offset();
                mainOffset.outerHeight = main.outerHeight();
                mainOffset.bottom = mainOffset.outerHeight + mainOffset.top;

                $this.data("isAnimating", false);
                $this.find('ul ul').hide(); //Hide Child List
                $this.find("ul ul:has(a[href$='" + window.location.pathname + "'])").show().parent('li').addClass('opened'); //Check the current URL path. If the menu contains a link with this path, open that link's sub-section
                $this.find('ul li a').click( //on Nav link click
                    function(e) {
                        var jthis = $(this); //Cache the clicked item
                        if ($this.data("isAnimating")) {
                            e.preventDefault();
                            return;
                        }

                        var nextList = jthis.next(), //cache the next item
                            parent = jthis.parent(), //cache the parent item
                            topLevelLists = $this.find('li.expanded > ul'); //Get all the top level lists

                        if ((nextList.is('ul')) && (nextList.is(':visible'))) { //If next item is a ul and is visible
                            e.preventDefault(); //Prevent default link action
                            $this.data("isAnimating", true)
                            nextList.slideUp('fast', function() {
                                nextList.parent().removeClass('opened');
                                main.css("height", "");
                                $this.data("isAnimating", false)
                            }); //Close this menu

                        } else if ((nextList.is('ul')) && (!nextList.is(':visible'))) { //If next item is a ul and is not visible
                            e.preventDefault(); //Prevent default link action

                            //close open menus
                            function expandMenu() {

                                //measure the nextList by 
                                var listHeight = nextList.outerHeight();
                                var leftNavOffset = DOT.elements.subNav.offset();
                                leftNavOffset.outerHeight = DOT.elements.subNav.outerHeight();
                                leftNavOffset.bottom = listHeight + leftNavOffset.outerHeight + leftNavOffset.top;

                                var newMainBottom = 0;

                                nextList.slideDown('fast', function() {
                                    $this.data("isAnimating", false)
                                    if (leftNavOffset.bottom > mainOffset.bottom) {
                                        newMainBottom = mainOffset.outerHeight + (leftNavOffset.bottom - mainOffset.bottom);
                                        main.height(newMainBottom);
                                    } else {
                                        main.css("height", "");
                                    }
                                }); //Open this menu
                                parent.addClass('opened');
                            }

                            var openMenu = $this.find('li.opened').find("ul.menu");
                            $this.data("isAnimating", true)
                            if (openMenu[0]) {
                                $this.find('li.opened').find("ul.menu").slideUp(function() {
                                    $(this).parent().removeClass("opened");
                                    expandMenu();
                                })
                            } else {
                                expandMenu();
                            }
                        }
                    });
                $.data(this, "accordionMenu", true);
            });
        },
        mobileMenus: function() {
            if ($("#mobile-main-sidebar")[0] || $("#mobile-subnav-sidebar")[0]) {
                return
            }
            var c = DOT.elements,
                pageWrap = c.pageWrap,
                slider = $(DOT.config.mobileMenus.slideEl);

            var toggleMobileMenus = function(e) {
                if (pageWrap.data("swipe") == false) {
                    return;
                } else {
                    pageWrap.data("swipe", false);
                }
                var target = e.target,
                    isMainMenu = e.target.id == "mobile-mainmenu-link",
                    header = c.header,
                    headerPos = header.css("position"),
                    activeMenu = isMainMenu ? c.mainNavMobile : c.subNavMobile,
                    inactiveMenu = isMainMenu ? c.subNavMobile : c.mainNavMobile,
                    activeDirection = isMainMenu ? "right" : "left",
                    inactiveDirection = isMainMenu ? "left" : "right",
                    menuWidth = 250,
                    animResetBoth = {},
                    animResetActive = {},
                    animResetInactive = {},
                    animOpenActive = {},
                    animShiftHeader = {};

                // create animate object params using variables
                animResetBoth[activeDirection] = 0;
                animResetBoth[inactiveDirection] = 0;
                animResetActive[activeDirection] = 0;
                animResetInactive[inactiveDirection] = 0;
                animOpenActive[activeDirection] = menuWidth;
                animShiftHeader[activeDirection] = menuWidth;
                animShiftHeader[inactiveDirection] = -menuWidth;

                // toggle the active menu
                if (activeMenu.is(".active")) {
                    if (headerPos == "fixed") {
                        header.animate(animResetBoth, 250);
                    }

                    slider.animate(animResetActive, 250, function() {
                        activeMenu.removeClass("active").hide();
                        slider.removeClass("sideBarActive").css(activeDirection, "");
                        pageWrap.data("swipe", true);
                    });
                } else {
                    if (inactiveMenu && inactiveMenu.is(".active")) {
                        if (headerPos == "fixed") {
                            header.animate(animResetBoth, 250);
                        }
                        slider.animate(animResetInactive, 250, function() {
                            inactiveMenu.removeClass("active").hide();
                            slider.removeClass("sideBarActive").css(inactiveDirection, "");
                            pageWrap.data("swipe", true);
                            if (activeMenu === c.subNavMobile && DOT.config.mobileMenus.enableTopHeight) {
                                activeMenu.css({
                                    "padding-top": header.outerHeight() + $("#dot-info").outerHeight()
                                });
                            }
                            activeMenu.show();

                            if (headerPos == "fixed") {
                                header.animate(animShiftHeader, 250);
                            }
                            slider.animate(animOpenActive, 250, function() {
                                activeMenu.addClass("active");
                                slider.addClass("sideBarActive");
                                pageWrap.data("swipe", true);
                            });
                        });
                    } else {
                        if (activeMenu === c.subNavMobile && DOT.config.mobileMenus.enableTopHeight) {
                            activeMenu.css({
                                "padding-top": header.outerHeight() + $("#dot-info").outerHeight()
                            });
                        }
                        activeMenu.show();

                        if (headerPos == "fixed") {
                            header.animate(animShiftHeader, 250);
                        }
                        slider.animate(animOpenActive, 250, function() {
                            activeMenu.addClass("active");
                            slider.addClass("sideBarActive");
                            pageWrap.data("swipe", true);
                        });
                    }
                }
            };

            if (c.mainMenu[0]) {

                //build mobile main menu sidebar
                var mainNavDup = DOT.elements.mainMenu.clone();


                //add suffix to id's to prevent conflicts
                mainNavDup.attr("id", "mobile-main-menu").find("[id]").each(function(i, el) {
                    var id = $(this).attr("id") + "_sidebar";
                    $(this).attr("id", id);
                });
                var sideBarMainNav = $('<nav id="mobile-main-sidebar" class="sidebar-outer"><div class="sidebar-inner">' + mainNavDup[0].outerHTML + '</div></nav> ');

                //build mobile menu button
                var mobileButton = $('<div id="nav-icons">' +
                    '<a id="mobile-mainmenu-link" href="#" title="' + DOT.config.content.mobileMainMenuButton + '">' + DOT.config.content.mobileMainMenuButton + '</a>' +
                    '</div>');
                if ($("#icons-and-search")[0]) {
                    $("#icons-and-search").append(mobileButton);
                } else {
                    $("#top-links").append(mobileButton);
                }
                pageWrap.append(sideBarMainNav);

                c.mainNavMobile = $("#mobile-main-sidebar");

                if ($(DOT.config.mobileMenus.searchFormEl)[0]) {

                    //Find search affiliate value
                    var aff_val = $(".search-affiliate").text()

                    //build search form for sidebar - using google search div tags to preserve intergrety of CSS
                    var gsaForm = $('<div class="google-search">' +
                        '<form  action="//search.usa.gov/search" method="get" id="google-appliance-block-form-sidebar" accept-charset="UTF-8">' +
                        '<div class="container-inline">' +
                        '<div class="form-item">' +
                        '<label class="element-invisible" for="edit-search-keys-sidebar">Enter the terms you wish to search for. </label>' +
                        '<input type="text" id="edit-search-keys-sidebar" name="query" value="" size="15" maxlength="128" class="form-text" />' +
                        '</div><div class="form-actions form-wrapper" id="edit-actions">' +
                        '<button type="submit" id="submit-search" name="affiliate" value="' + aff_val + '"  class="form-submit">' +
                        'GO' +
                        '</button>' +
                        '</div>' +
                        '</div>' +
                        '</form></div>');
                    c.mainNavMobile.find(".sidebar-inner").prepend(gsaForm[0].outerHTML);

                    // // if google search bar is present then push the search request through the original form
                    // $("#google-appliance-block-form-sidebar").bind("submit",function(e){
                    //     e.preventDefault();
                    //     $("#edit-search-keys").val($("#edit-search-keys-sidebar").val());
                    //     $(DOT.config.mobileMenus.searchFormEl).submit();
                    // });

                }

                // create main menu mobile links and bind click events
                var mainLinks = c.mainNavMobile.find("a");
                //var search = $("#google-appliance-block-form");
                mainLinks.each(function() {
                    var $link = $(this);

                    //remove events
                    $link.unbind();

                    var panelName = "." + $link.prop("class").match(/menu-minipanel-[\d]*/g);
                    var panel = $(".region-page-bottom").find(panelName).clone();
                    panel.children("div:first").removeAttr("id");

                    panel.insertAfter($link);

                    if ($link.parent().children().size() == 1) {
                        $link.parent().addClass('nopanel');
                    }

                }).bind("click", function(e) {

                    var $link = $(this);
                    if ($link.parent().children().size() > 1) {
                        e.preventDefault();

                        if ($link.is(".open")) {
                            $link.next().slideUp('fast', function() {
                                $link.removeClass("open");
                            });
                        } else {
                            $link.next().slideDown('fast', function() {
                                $link.addClass("open");
                            });
                        }

                    }
                });

                $("#mobile-mainmenu-link").click(function(e) {
                    e.preventDefault();
                    toggleMobileMenus(e);
                });
            }

            // create sub menu mobile links and bind click events
            if (c.subNav[0]) {

                //build mobile subnav bar
                var subNavDup = c.subNav.clone();

                //add suffix to id's to prevent conflicts
                subNavDup.find("[id]").each(function(i, el) {
                    var id = $(this).attr("id") + "_sidebar";
                    $(this).attr("id", id);
                });
                var sideBarSubNav = $('<nav id="mobile-subnav-sidebar" class="sidebar-outer"><div class="sidebar-inner">' + subNavDup.html() + '</div></nav> '),
                    lastCrumb = $(".breadcrumb a:last").text();

                if (lastCrumb.toLowerCase() == "home") {
                    lastCrumb = "";
                }

                var subNavButton = $('<div id="subnav-bar">' +
                    '<a id="mobile-subnav-link" href="#" title="toggle sub menu">' +
                    '<div id="mobile-subnav-icon"></div>' +
                    '</a>' +
                    '</div>');

                $("#main-wrapper").prepend(subNavButton);
                pageWrap.append(sideBarSubNav);

                c.subNavMobile = $("#mobile-subnav-sidebar");

                $("#mobile-subnav-icon").text(lastCrumb);

                DOT.init.accordionMenu($("#mobile-subnav-sidebar").find(".accordion_menu"));

                // add click event to #mobile-subnav-link to show the newly created #mobile-subnav-sidebar
                $("#mobile-subnav-link").click(function(e) {
                    e.preventDefault();
                    toggleMobileMenus(e);
                });

            }



            // hide the mobile menus if the browser window is resized past our breakpoint
            DOT.elements.window.bind("resize", DOT.util.throttle(function() {
                //hide mobile menu
                var c = DOT.elements;
                if (DOT.elements.document.width() > DOT.config.mobileBreakpoint) {
                    slider.css({
                        right: "",
                        left: ""
                    });
                    if (c.mainNavMobile[0]) {
                        c.mainNavMobile.hide().removeClass("active");
                    }
                    if (c.subNav[0]) {
                        c.mainNavMobile.hide().removeClass("active");
                    }

                }
            }, 100));

            pageWrap.data("swipe", true).DOT().swipe({
                threshold: {
                    x: 40,
                    y: 12
                },
                swipeRight: function(e) {
                    if (pageWrap.data("swipe") == false) {
                        return;
                    }
                    if (c.mainNavMobile.is(".active")) {
                        $("#mobile-mainmenu-link").trigger("click");
                    } else {
                        if (c.subNavMobile[0] && c.subNavMobile.is(":hidden")) {
                            $("#mobile-subnav-link").trigger("click");
                        }
                    }

                },
                swipeLeft: function(e) {
                    if (pageWrap.data("swipe") == false) {
                        return;
                    }
                    if (c.subNavMobile.is(".active")) {
                        $("#mobile-subnav-link").trigger("click");
                    } else {
                        if ($("#navigation")[0] && $("#navigation").is(":hidden")) {
                            $("#mobile-mainmenu-link").trigger("click");
                        }
                    }

                }
            }).bind("touchstart", function() {
                //close any menus
                c.mainMenu.find("li a").trigger("mouseout");

                //close feedback form
                if ($("#block-feedback-form").find("form.feedback-form").is(":visible")) {
                    $("#block-feedback-form").find(".feedback-link").trigger("click");
                }
            });

            /*
             page.bind("touchstart",function(e){
             //close side menus if user clicks anywhere on page content
             if(mainSideNav.is(".active")){
             $("#icon-sideMenu-main").trigger("click");
             //e.stopImmediatePropagation();
             return false;
             } else if($("#subNavSideBar").is(".active")){
             $("#link-sideMenu").trigger("click");
             //e.stopImmediatePropagation();
             return false;
             }
             });
             */

        },
        stickyHeader: function() {
            //left nav sticky
            var init = true;
            for (var i = 0, len = DOT.config.noSticky.length; i < len; i++) {
                if ($(DOT.config.noSticky[i])[0]) {
                    init = false
                    break;
                }
            }

            if (init) {
                DOT.elements.header.DOT().sticky({
                    bottomSpacing: 20,
                    center: true,
                    getBottomHeightFrom: DOT.config.elements.footer,
                    disabledWidth: DOT.config.mobileBreakpoint
                });
            }
        },
        stickyLeftNav: function() {
            //left nav sticky
            var init = true;
            for (var i = 0, len = DOT.config.noSticky.length; i < len; i++) {
                if ($(DOT.config.noSticky[i])[0]) {
                    init = false
                    break;
                }
            }
            if (init) {
                var header = DOT.config.components.stickyHeader ? DOT.config.elements.header : "";
                DOT.elements.subNav.DOT().sticky({
                    topSpacing: DOT.config.stickyLeftNav.topSpacing,
                    bottomSpacing: 20,
                    getTopHeightFrom: DOT.config.stickyLeftNav.enableTopHeight ? header : null,
                    getBottomHeightFrom: DOT.config.elements.footer,
                    disabledWidth: DOT.config.mobileBreakpoint
                });
            }
        },
        // adjustment for wide two column drop down menus on smaller screen sizes
        //TODO: move breakpoint and width values to config options
        responsiveMenu: function() {
            if ($.data(DOT.elements.mainMenu, "responsiveMenu") != undefined) {
                return;
            }

            MenuMiniPanels.setCallback('beforeShow', function(qTip, event, content) {
                var $this = $(qTip.elements.target);

                if ($this.parent().hasClass("first")) {
                    if (DOT.elements.document.width() <= DOT.config.responsiveMenu.breakpoint) {
                        $this.qtip("api").updateWidth(DOT.config.responsiveMenu.panelWidth);
                        qTip.options.position.corner.target = "bottomLeft";
                        qTip.options.position.corner.tooltip = "topLeft";
                    } else {
                        qTip.options.position.corner.target = "bottomMiddle";
                        qTip.options.position.corner.tooltip = "topMiddle";
                    }
                }

                //suppress menus on handheld screens
                if (DOT.elements.document.width() <= DOT.config.responsiveMenu.disabled) {
                    event.stopPropagation();
                    return false;
                } else {
                    var $target = $(qTip.elements.target.get(0));
                    $target.parents('li:first').addClass('active qtip-hover');
                }

            });

            $.data(DOT.elements.mainMenu, "responsiveMenu", true);
        },

        //resize content image for responsive
        responsiveImages: function() {
            var _this = this;
            //need to load it on page load


            $(window).resize(function() {
                _this.responsiveImagesHelper();
            });
            $(document).ready(function() {
                _this.responsiveImagesHelper();
            });
        },
        responsiveImagesHelper: function() {
            $("img").each(function() {
                // if it's served from the files directory
                if ($(this).prop("src").indexOf("/files") !== -1) {
                    var originalHeight, originalWidth, ratio;

                    //ugly hack to get the original image dimensions
                    /*var image = new Image(); // or document.createElement('img')
                    image.onload = function() {
                      originalHeight = this.width;
                      originalWidth = this.height;
                    };
                    /*var image = new Image(); // or document.createElement('img')
					image.onload = function() {
					  originalHeight = this.width;
					  originalWidth = this.height;
					};
					
					
					image.src = $(this).attr("src");*/
                    /*var image = new Image(); // or document.createElement('img')
					image.onload = function() {
					  originalHeight = this.width;
					  originalWidth = this.height;
					};
					
					
					image.src = $(this).attr("src");*/
                    image.src = $(this).attr("src");*/

                    originalHeight = this.naturalHeight;
                    originalWidth = this.naturalWidth;
                    var responsiveHeight = $(this).prop("height");
                    var responsiveWidth = $(this).prop("width");

                    ratio = originalHeight / originalWidth;
                    $(this).css('height', responsiveWidth * ratio);

                }
            });
        },


        feedbackFooterLink: function(target) {
            var menu = target ? $(target) : $('#block-menu-menu-footer-nav-1');
            menu.find('ul.menu li.first').after('<li class="leaf"><a href="#" id="feedbacklink" alt="' + DOT.config.content.feedbackLinkAlt + '" title="' + DOT.config.content.feedbackLinkAlt + '">' + DOT.config.content.feedbackLink + '</a></li>');
            menu.find("#feedbacklink").click(function(e) {
                e.preventDefault();
                DOT.elements.feedbackForm.find('h2 .feedback-link').trigger('click');
            });
        },
        resolveTouchEvents: function() {
            if ($.data(DOT.elements.window, "resolveTouchEvents") != undefined) {
                return;
            }
            DOT.elements.mainMenu.find("li a").bind("touchstart", function(e) {
                var $this = $(this);
                var parentLi = $this.parent();
                e.preventDefault();
                if (parentLi.is(".qtip-hover")) {
                    window.location = $this.attr("href");
                } else {
                    $this.trigger("mouseover");
                    parentLi.siblings().find("a").trigger("mouseout");
                }
                return false;
            });
            $(".addthis_button").bind("touchstart", function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).trigger("click");
                return false;
            });
            $.data(DOT.elements.window, "resolveTouchEvents", true);
        }
    };

    //shortcut method for setupComponents on page load
    DOT.setupComponents = function(opt) {
        DOT.fn.setupComponents.apply(this, arguments);
    };

    $.error = function(msg) {
        console.log(msg);
    };

}(jQuery, this, this.document));





// Global functions that need to run on every page to setup various interface elements
;
(function($, window, document, undefined) {

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    //suppress event.layerX and event.layerY console warnings
    $.event.props = $.event.props.join('|').replace('layerX|layerY|', '').split('|');

    // Document Ready Event
    $(function() {

        /* Add all DOT plug-in functions to jQuery namespace
         This allows DOT plugins to operate on jQuery objects
         Usage: $(".mydiv").DOT().myDotPlugin();
         Otherwise DOT.fn would have to be called: DOT.fn.myDotPlugin.call($(".mydiv"),args)
         */
        $.fn.DOT = function() {
            $.extend(this, DOT.fn);
            return this;
        };

        // adjust media player when window orientationchange occurs
        if (window.mejs) {
            window.addEventListener("orientationchange", function() {
                // don't resize for fullscreen mode
                var t = window.mejs.players[0];
                t.setPlayerSize(t.width, t.height);

                // always adjust controls
                t.setControlsSize();
            }, false);
        }

        if (DOT.config.components.accordionMenu) {
            //highlight active left nav link
            var current = $.url().attr('path');
            $('.accordion_menu ul.menu li a').each(function() {
                var sideurl = $(this).url().attr('path');
                if (sideurl == current) {
                    $('.accordion_menu ul.menu li a.active').removeClass('active');
                    $(this).addClass('active');
                }
            });
        }

    });

}(jQuery, this, this.document));;;
(function($, window, document, undefined) {

    $(function() {
        // set config options
        DOT.config.components.responsiveMenu = true;
        DOT.config.noSticky = [
            "body.node-type-collage",
            ".view-timeline"
        ];

        // setup common components & initialize jQuery constants
        DOT.util.setPageElements();
        DOT.setupComponents();


        //only want this on blog pages
        if ($('.node-type-blog-post').size() > 0) {
            var divComments = $("#comments");

            $(document).bind("ajaxComplete", function() {
                divComments.find('input[type=text], textarea').val("");

                var first = true;
                jQuery('.messages').each(function() {
                    if (!first) {
                        $(this).remove();
                    }

                    first = false;
                });
            });
        }


        //adjusted anchor link behavior for sticky header
        $('#content').find('a[href ^= "#"]').filter(function() {
            var href = $(this).attr("href");
            return href.length > 1 && href !== "#null"
        }).each(function() {
            $(this).addClass('anchor');
        });
        $('a.anchor').click(function() {
            var aname = $(this).attr('href');
            var offset = $('' + aname).offset();
            var scrollto = offset.top - 120; // sicky header height = 120px
            $('html, body').animate({
                scrollTop: scrollto
            }, 0); //scroll to adjusted anchor target
            return false;
        });
        $('ul.tabs a.anchor').each(function() {
            $(this).removeClass('anchor');
        });




        // adjustment for anchor link in the page URL
        // compensates for the sticky headers
        if (!$("body.node-type-collage")[0] && !$(".view-timeline")[0]) {
            $(window).one("scroll", function() {
                var urlAnchor = window.location.hash;
                var headerHeight = $("#header").height();
                if (urlAnchor != 'undefined' && urlAnchor != '') {
                    var offset = $('' + urlAnchor).offset();
                    var scrollto = offset.top - (headerHeight + 10); // sicky header height = 120px  buffer of 10px
                    $('html, body').animate({
                        scrollTop: scrollto
                    }, 0); //scroll to adjusted anchor target
                    return false;
                }
            });
        }

        //homepage scripts
        if ($("#content-homepage")[0]) {
            var teaser = $("#teaser-tile-container");

            if (teaser[0]) {
                teaser.addClass("teaserCount-" + teaser.find(".services-headlines").length)
            }

            $("#quicktabs-homepage_in_the_news").DOT().togglePanel({
                startClosed: false
            });
            $("#modes-container > .panel-pane").DOT().togglePanel();

        }

        /*
        //landing page scripts
        if($("#content-landing")[0]){

        }
        */

        //timeline arrows monkey patch
        if ($(".view-timeline")[0]) {
            var timeline = $(".timeline-container:first"),
                is_touch_device = 'ontouchstart' in document.documentElement,
                arrows = '<div class="arrowLeft"><a href="#" title="Slide Left">&lt;</a></div>' +
                '<div class="arrowRight"><a href="#" title="Slide Right">&gt;</a></div>';
            timeline.append(arrows);

            timeline.find(".arrowLeft a").bind("click", function(e) {
                e.preventDefault();
                Timeline.timelines[0]._bands[0]._autoScroll(timeline.width() * .5);
            });
            timeline.find(".arrowRight a").bind("click", function(e) {
                e.preventDefault();
                Timeline.timelines[0]._bands[0]._autoScroll(timeline.width() * -.5);
            });
            if (!is_touch_device) {
                timeline.hover(function() {
                    timeline.find(".arrowLeft,.arrowRight").fadeIn("fast");
                }, function() {
                    timeline.find(".arrowLeft,.arrowRight").fadeOut("fast");
                });
            } else {
                timeline.find(".arrowLeft,.arrowRight").show();
            }
        }

        //Equalize Heights on Page Load
        DOT.util.setEqualHeights();

        //Bind resize event to equalize heights
        DOT.elements.window.bind("resize", DOT.util.debounce(DOT.util.setEqualHeights, 100));

        //Overides the behavior of the External links module to add image with a link to DOT linking policy

        // $('.' + Drupal.settings.extlink.mailtoClass).each().after('<a href="http://www.dot.gov/web-policies/dot-website-linking-policy"><img src="/sites/all/modules/contrib/extlink/extlink.png"></a>')

    });

}(jQuery, this, this.document));;
/*Functions for RWD behaviour*/
jQuery(document).ready(function() {
    var fed_biz_opps_container = jQuery('#filter-title-fedbizopps');
    var fed_biz_opps_filters_opportunities = jQuery('.view-filters-opportunities');
    var fed_biz_opps_view = jQuery('#view-title');
    var fed_biz_opps_hide = jQuery('#hide-title');
    fed_biz_opps_container.click(function() {
        fed_biz_opps_filters_opportunities.slideToggle();
        if (fed_biz_opps_container.hasClass('active')) {
            fed_biz_opps_container.removeClass('active').addClass('deactive');
            fed_biz_opps_view.css('display', 'block');
            fed_biz_opps_hide.css('display', 'none');

        } else {
            fed_biz_opps_container.removeClass('deactive').addClass('active');
            fed_biz_opps_view.css('display', 'none');
            fed_biz_opps_hide.css('display', 'block');
        }
    });


    //only want this code to be executed on that specific page
    var length = jQuery('.page-osdbu-fedbizopps-opportunities').length;
    if (length > 0) {
        //hack to reshow when no longer responsive
        jQuery(window).resize(function() {
            var width = jQuery(window).width();
            if (width > 960) {
                fed_biz_opps_filters_opportunities.show();
                fed_biz_opps_container.removeClass('deactive').addClass('active');
                jQuery('#view-title').css('display', '');
                jQuery('#hide-title').css('display', '');
            }
        });
    }

});

/*End of RWD functions*/

;
/*Functions for RWD behaviour*/
jQuery(document).ready(function() {
    jQuery('.filter-title-procurement').click(function() {
        jQuery('.views-exposed-widgets-procurement').slideToggle();
        if (jQuery('.filter-title-procurement').hasClass('active')) {
            jQuery('.filter-title-procurement').removeClass('active').addClass('deactive');
            jQuery('#view-title').show();
            jQuery('#hide-title').hide();
            jQuery('#procurement_year_label').hide();

        } else {
            jQuery('.filter-title-procurement').removeClass('deactive').addClass('active');
            jQuery('#view-title').hide();
            jQuery('#hide-title').show();
            jQuery('#procurement_year_label').show();
        }
    });

    //only want this code to be executed on that specific page
    if (jQuery('.filter-title-procurement').length > 0) {
        //hack to reshow when no longer responsive
        jQuery(window).resize(function() {
            var width = jQuery(window).width();
            if (width > 900) {
                jQuery('.views-exposed-widgets-procurement').show();
                jQuery('#filter-title-procurement').removeClass('deactive').addClass('active');
                jQuery('#view-title').css('display', '');
                jQuery('#hide-title').css('display', '');
                jQuery('#procurement_year_label').css('display', '');

            }
        });
    }



});

/*End of RWD functions*/
;
jQuery(document).ready(function() {
    jQuery('#edit-field-address-administrative-area option[value=]').text('Nationwide');
    jQuery('.form-item-field-date-effective-value-min').click(function() {
        jQuery('#edit-field-date-effective-value-min-datepicker-popup-0').focus();
    });
    jQuery('.filter-title-emergency').click(function() {
        jQuery('.views-exposed-widgets-emergency').slideToggle();
        if (jQuery('.filter-title-emergency').hasClass('active')) {
            jQuery('.filter-title-emergency').removeClass('active').addClass('deactive');
            jQuery('#view-title').show();

        } else {
            jQuery('.filter-title-emergency').removeClass('deactive').addClass('active');
            jQuery('#view-title').show();
        }
    });

    if (jQuery('.filter-title-emergency').length > 0) {
        jQuery(window).resize(function() {
            var width = jQuery(window).width();
            if (width > 760) {
                jQuery('.views-exposed-widgets-emergency').show();
                jQuery('#filter-title-emergency').removeClass('deactive').addClass('active');
                jQuery('#view-title').css('display', '');

            }
        });


    }


});;
/*
  SortTable
  version 2
  7th April 2007
  Stuart Langridge, http://www.kryogenix.org/code/browser/sorttable/

  Instructions:
  Download this file
  Add <script src="sorttable.js"></script> to your HTML
  Add class="sortable" to any table you'd like to make sortable
  Click on the headers to sort

  Thanks to many, many people for contributions and suggestions.
  Licenced as X11: http://www.kryogenix.org/code/browser/licence.html
  This basically means: do what you want with it.
*/


var stIsIE = /*@cc_on!@*/ false;

sorttable = {
    init: function() {
        // quit if this function has already been called
        if (arguments.callee.done) return;
        // flag this function so we don't do the same thing twice
        arguments.callee.done = true;
        // kill the timer
        if (_timer) clearInterval(_timer);

        if (!document.createElement || !document.getElementsByTagName) return;

        sorttable.DATE_RE = /^(\d\d?)[\/\.-](\d\d?)[\/\.-]((\d\d)?\d\d)$/;

        forEach(document.getElementsByTagName('table'), function(table) {
            if (table.className.search(/\bsortable\b/) != -1) {
                sorttable.makeSortable(table);
            }
        });

    },

    makeSortable: function(table) {
        if (table.getElementsByTagName('thead').length == 0) {
            // table doesn't have a tHead. Since it should have, create one and
            // put the first table row in it.
            the = document.createElement('thead');
            the.appendChild(table.rows[0]);
            table.insertBefore(the, table.firstChild);
        }
        // Safari doesn't support table.tHead, sigh
        if (table.tHead == null) table.tHead = table.getElementsByTagName('thead')[0];

        if (table.tHead.rows.length != 1) return; // can't cope with two header rows

        // Sorttable v1 put rows with a class of "sortbottom" at the bottom (as
        // "total" rows, for example). This is B&R, since what you're supposed
        // to do is put them in a tfoot. So, if there are sortbottom rows,
        // for backwards compatibility, move them to tfoot (creating it if needed).
        sortbottomrows = [];
        for (var i = 0; i < table.rows.length; i++) {
            if (table.rows[i].className.search(/\bsortbottom\b/) != -1) {
                sortbottomrows[sortbottomrows.length] = table.rows[i];
            }
        }
        if (sortbottomrows) {
            if (table.tFoot == null) {
                // table doesn't have a tfoot. Create one.
                tfo = document.createElement('tfoot');
                table.appendChild(tfo);
            }
            for (var i = 0; i < sortbottomrows.length; i++) {
                tfo.appendChild(sortbottomrows[i]);
            }
            delete sortbottomrows;
        }

        // work through each column and calculate its type
        headrow = table.tHead.rows[0].cells;
        for (var i = 0; i < headrow.length; i++) {
            // manually override the type with a sorttable_type attribute
            if (!headrow[i].className.match(/\bsorttable_nosort\b/)) { // skip this col
                mtch = headrow[i].className.match(/\bsorttable_([a-z0-9]+)\b/);
                if (mtch) {
                    override = mtch[1];
                }
                if (mtch && typeof sorttable["sort_" + override] == 'function') {
                    headrow[i].sorttable_sortfunction = sorttable["sort_" + override];
                } else {
                    headrow[i].sorttable_sortfunction = sorttable.guessType(table, i);
                }
                // make it clickable to sort
                headrow[i].sorttable_columnindex = i;
                headrow[i].sorttable_tbody = table.tBodies[0];
                dean_addEvent(headrow[i], "click", sorttable.innerSortFunction = function(e) {

                    if (this.className.search(/\bsorttable_sorted\b/) != -1) {
                        // if we're already sorted by this column, just
                        // reverse the table, which is quicker
                        sorttable.reverse(this.sorttable_tbody);
                        this.className = this.className.replace('sorttable_sorted',
                            'sorttable_sorted_reverse');
                        this.removeChild(document.getElementById('sorttable_sortfwdind'));
                        sortrevind = document.createElement('span');
                        sortrevind.id = "sorttable_sortrevind";
                        //sortrevind.innerHTML = stIsIE ? '&nbsp<font face="webdings">5</font>' : '&nbsp;&#x25B4;';
                        this.appendChild(sortrevind);
                        return;
                    }
                    if (this.className.search(/\bsorttable_sorted_reverse\b/) != -1) {
                        // if we're already sorted by this column in reverse, just
                        // re-reverse the table, which is quicker
                        sorttable.reverse(this.sorttable_tbody);
                        this.className = this.className.replace('sorttable_sorted_reverse',
                            'sorttable_sorted');
                        this.removeChild(document.getElementById('sorttable_sortrevind'));
                        sortfwdind = document.createElement('span');
                        sortfwdind.id = "sorttable_sortfwdind";
                        //sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
                        this.appendChild(sortfwdind);
                        return;
                    }

                    // remove sorttable_sorted classes
                    theadrow = this.parentNode;
                    forEach(theadrow.childNodes, function(cell) {
                        if (cell.nodeType == 1) { // an element
                            cell.className = cell.className.replace('sorttable_sorted_reverse', '');
                            cell.className = cell.className.replace('sorttable_sorted', '');
                        }
                    });
                    sortfwdind = document.getElementById('sorttable_sortfwdind');
                    if (sortfwdind) {
                        sortfwdind.parentNode.removeChild(sortfwdind);
                    }
                    sortrevind = document.getElementById('sorttable_sortrevind');
                    if (sortrevind) {
                        sortrevind.parentNode.removeChild(sortrevind);
                    }

                    this.className += ' sorttable_sorted';
                    sortfwdind = document.createElement('span');
                    sortfwdind.id = "sorttable_sortfwdind";
                    //sortfwdind.innerHTML = stIsIE ? '&nbsp<font face="webdings">6</font>' : '&nbsp;&#x25BE;';
                    this.appendChild(sortfwdind);

                    // build an array to sort. This is a Schwartzian transform thing,
                    // i.e., we "decorate" each row with the actual sort key,
                    // sort based on the sort keys, and then put the rows back in order
                    // which is a lot faster because you only do getInnerText once per row
                    row_array = [];
                    col = this.sorttable_columnindex;
                    rows = this.sorttable_tbody.rows;
                    for (var j = 0; j < rows.length; j++) {
                        row_array[row_array.length] = [sorttable.getInnerText(rows[j].cells[col]), rows[j]];
                    }
                    /* If you want a stable sort, uncomment the following line */
                    //sorttable.shaker_sort(row_array, this.sorttable_sortfunction);
                    /* and comment out this one */
                    row_array.sort(this.sorttable_sortfunction);

                    tb = this.sorttable_tbody;
                    for (var j = 0; j < row_array.length; j++) {
                        tb.appendChild(row_array[j][1]);
                    }

                    delete row_array;
                });
            }
        }
    },

    guessType: function(table, column) {
        // guess the type of a column based on its first non-blank row
        sortfn = sorttable.sort_alpha;
        for (var i = 0; i < table.tBodies[0].rows.length; i++) {
            text = sorttable.getInnerText(table.tBodies[0].rows[i].cells[column]);
            if (text != '') {
                if (text.match(/^-?[£$¤]?[\d,.]+%?$/)) {
                    return sorttable.sort_numeric;
                }
                // check for a date: dd/mm/yyyy or dd/mm/yy
                // can have / or . or - as separator
                // can be mm/dd as well
                possdate = text.match(sorttable.DATE_RE)
                if (possdate) {
                    // looks like a date
                    first = parseInt(possdate[1]);
                    second = parseInt(possdate[2]);
                    if (first > 12) {
                        // definitely dd/mm
                        return sorttable.sort_ddmm;
                    } else if (second > 12) {
                        return sorttable.sort_mmdd;
                    } else {
                        // looks like a date, but we can't tell which, so assume
                        // that it's dd/mm (English imperialism!) and keep looking
                        sortfn = sorttable.sort_ddmm;
                    }
                }
            }
        }
        return sortfn;
    },

    getInnerText: function(node) {
        // gets the text we want to use for sorting for a cell.
        // strips leading and trailing whitespace.
        // this is *not* a generic getInnerText function; it's special to sorttable.
        // for example, you can override the cell text with a customkey attribute.
        // it also gets .value for <input> fields.

        if (!node) return "";

        hasInputs = (typeof node.getElementsByTagName == 'function') &&
            node.getElementsByTagName('input').length;

        if (node.getAttribute("sorttable_customkey") != null) {
            return node.getAttribute("sorttable_customkey");
        } else if (typeof node.textContent != 'undefined' && !hasInputs) {
            return node.textContent.replace(/^\s+|\s+$/g, '');
        } else if (typeof node.innerText != 'undefined' && !hasInputs) {
            return node.innerText.replace(/^\s+|\s+$/g, '');
        } else if (typeof node.text != 'undefined' && !hasInputs) {
            return node.text.replace(/^\s+|\s+$/g, '');
        } else {
            switch (node.nodeType) {
                case 3:
                    if (node.nodeName.toLowerCase() == 'input') {
                        return node.value.replace(/^\s+|\s+$/g, '');
                    }
                case 4:
                    return node.nodeValue.replace(/^\s+|\s+$/g, '');
                    break;
                case 1:
                case 11:
                    var innerText = '';
                    for (var i = 0; i < node.childNodes.length; i++) {
                        innerText += sorttable.getInnerText(node.childNodes[i]);
                    }
                    return innerText.replace(/^\s+|\s+$/g, '');
                    break;
                default:
                    return '';
            }
        }
    },

    reverse: function(tbody) {
        // reverse the rows in a tbody
        newrows = [];
        for (var i = 0; i < tbody.rows.length; i++) {
            newrows[newrows.length] = tbody.rows[i];
        }
        for (var i = newrows.length - 1; i >= 0; i--) {
            tbody.appendChild(newrows[i]);
        }
        delete newrows;
    },

    /* sort functions
       each sort function takes two parameters, a and b
       you are comparing a[0] and b[0] */
    sort_numeric: function(a, b) {
        aa = parseFloat(a[0].replace(/[^0-9.-]/g, ''));
        if (isNaN(aa)) aa = 0;
        bb = parseFloat(b[0].replace(/[^0-9.-]/g, ''));
        if (isNaN(bb)) bb = 0;
        return aa - bb;
    },
    sort_alpha: function(a, b) {
        if (a[0] == b[0]) return 0;
        if (a[0] < b[0]) return -1;
        return 1;
    },
    sort_ddmm: function(a, b) {
        mtch = a[0].match(sorttable.DATE_RE);
        y = mtch[3];
        m = mtch[2];
        d = mtch[1];
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        dt1 = y + m + d;
        mtch = b[0].match(sorttable.DATE_RE);
        y = mtch[3];
        m = mtch[2];
        d = mtch[1];
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        dt2 = y + m + d;
        if (dt1 == dt2) return 0;
        if (dt1 < dt2) return -1;
        return 1;
    },
    sort_mmdd: function(a, b) {
        mtch = a[0].match(sorttable.DATE_RE);
        y = mtch[3];
        d = mtch[2];
        m = mtch[1];
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        dt1 = y + m + d;
        mtch = b[0].match(sorttable.DATE_RE);
        y = mtch[3];
        d = mtch[2];
        m = mtch[1];
        if (m.length == 1) m = '0' + m;
        if (d.length == 1) d = '0' + d;
        dt2 = y + m + d;
        if (dt1 == dt2) return 0;
        if (dt1 < dt2) return -1;
        return 1;
    },

    shaker_sort: function(list, comp_func) {
        // A stable sort function to allow multi-level sorting of data
        // see: http://en.wikipedia.org/wiki/Cocktail_sort
        // thanks to Joseph Nahmias
        var b = 0;
        var t = list.length - 1;
        var swap = true;

        while (swap) {
            swap = false;
            for (var i = b; i < t; ++i) {
                if (comp_func(list[i], list[i + 1]) > 0) {
                    var q = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = q;
                    swap = true;
                }
            } // for
            t--;

            if (!swap) break;

            for (var i = t; i > b; --i) {
                if (comp_func(list[i], list[i - 1]) < 0) {
                    var q = list[i];
                    list[i] = list[i - 1];
                    list[i - 1] = q;
                    swap = true;
                }
            } // for
            b++;

        } // while(swap)
    }
}

/* ******************************************************************
   Supporting functions: bundled here to avoid depending on a library
   ****************************************************************** */

// Dean Edwards/Matthias Miller/John Resig

/* for Mozilla/Opera9 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", sorttable.init, false);
}

/* for Internet Explorer */
/*@cc_on @*/
/*@if (@_win32)
    document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
    var script = document.getElementById("__ie_onload");
    script.onreadystatechange = function() {
        if (this.readyState == "complete") {
            sorttable.init(); // call the onload handler
        }
    };
/*@end @*/

/* for Safari */
if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            sorttable.init(); // call the onload handler
        }
    }, 10);
}

/* for other browsers */
window.onload = sorttable.init;

// written by Dean Edwards, 2005
// with input from Tino Zijdel, Matthias Miller, Diego Perini

// http://dean.edwards.name/weblog/2005/10/add-event/

function dean_addEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        // assign each event handler a unique ID
        if (!handler.$$guid) handler.$$guid = dean_addEvent.guid++;
        // create a hash table of event types for the element
        if (!element.events) element.events = {};
        // create a hash table of event handlers for each element/event pair
        var handlers = element.events[type];
        if (!handlers) {
            handlers = element.events[type] = {};
            // store the existing event handler (if there is one)
            if (element["on" + type]) {
                handlers[0] = element["on" + type];
            }
        }
        // store the event handler in the hash table
        handlers[handler.$$guid] = handler;
        // assign a global event handler to do all the work
        element["on" + type] = handleEvent;
    }
};
// a counter used to create unique IDs
dean_addEvent.guid = 1;

function removeEvent(element, type, handler) {
    if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
    } else {
        // delete the event handler from the hash table
        if (element.events && element.events[type]) {
            delete element.events[type][handler.$$guid];
        }
    }
};

function handleEvent(event) {
    var returnValue = true;
    // grab the event object (IE uses a global event object)
    event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
    // get a reference to the hash table of event handlers
    var handlers = this.events[event.type];
    // execute each event handler
    for (var i in handlers) {
        this.$$handleEvent = handlers[i];
        if (this.$$handleEvent(event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};

function fixEvent(event) {
    // add W3C standard event methods
    event.preventDefault = fixEvent.preventDefault;
    event.stopPropagation = fixEvent.stopPropagation;
    return event;
};
fixEvent.preventDefault = function() {
    this.returnValue = false;
};
fixEvent.stopPropagation = function() {
    this.cancelBubble = true;
}

// Dean's forEach: http://dean.edwards.name/base/forEach.js
/*
	forEach, version 1.0
	Copyright 2006, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
    Array.forEach = function(array, block, context) {
        for (var i = 0; i < array.length; i++) {
            block.call(context, array[i], i, array);
        }
    };
}

// generic enumeration
Function.prototype.forEach = function(object, block, context) {
    for (var key in object) {
        if (typeof this.prototype[key] == "undefined") {
            block.call(context, object[key], key, object);
        }
    }
};

// character enumeration
String.forEach = function(string, block, context) {
    Array.forEach(string.split(""), function(chr, index) {
        block.call(context, chr, index, string);
    });
};

// globally resolve forEach enumeration
var forEach = function(object, block, context) {
    if (object) {
        var resolve = Object; // default
        if (object instanceof Function) {
            // functions have a "length" property
            resolve = Function;
        } else if (object.forEach instanceof Function) {
            // the object implements a custom forEach method so use that
            object.forEach(block, context);
            return;
        } else if (typeof object == "string") {
            // the object is a string
            resolve = String;
        } else if (typeof object.length == "number") {
            // the object is array-like
            resolve = Array;
        }
        resolve.forEach(object, block, context);
    }
};


function sortdefault() {


    forEach(document.getElementsByTagName("table"), function(table) {
        if (table.className.search(/\bsortcolumn\b/) != -1) {
            var myTH = document.getElementsByTagName("th")[0];
            sorttable.innerSortFunction.apply(myTH, []);
        }
    });
}

window.onload = sortdefault;

;

// Added by Michael Lai on 8/31/17 to account for the scaffold for multiple calendar events on mobile


(function($) {

    $(document).ready(function() {

        var adjScaffold = function() {
            // Checks to see if there are any events
            if ($('.view-item', '.single-day').length > 0) {

                $('tr').each(function() {
                    $('td', this).each(function() {
                        // Scope variables
                        var tdObj = $(this).find('td')
                        var tdID = tdObj.context.id
                        var tdItems = $('.item', '#' + tdID)
                        var tdInner = $('.inner', '#' + tdID)

                        if (tdItems.length > 1) {
                            var height = tdInner.height()
                            // Set the height allocated for all events
                            $('#' + tdID).height(height + 50)
                        }

                    })

                })

            }

        }

        // Verifies the window width is mobile
        if ($(window).width() < 600) {

            adjScaffold()

            // Window Resize
            $(window).resize(function() {

                adjScaffold()

            })

        }

    })

}(jQuery));;
/*!
 * jQuery.ScrollTo
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 12/14/2012
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * @author Ariel Flesler
 * @version 1.4.5 BETA
 */
(function(d) {
    function h(b) {
        return "object" == typeof b ? b : {
            top: b,
            left: b
        }
    }
    var m = d.scrollTo = function(b, c, a) {
        d(window).scrollTo(b, c, a)
    };
    m.defaults = {
        axis: "xy",
        duration: 1.3 <= parseFloat(d.fn.jquery) ? 0 : 1,
        limit: !0
    };
    m.window = function() {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function() {
        return this.map(function() {
            if (this.nodeName && -1 == d.inArray(this.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])) return this;
            var b = (this.contentWindow || this).document || this.ownerDocument || this;
            return /webkit/i.test(navigator.userAgent) ||
                "BackCompat" == b.compatMode ? b.body : b.documentElement
        })
    };
    d.fn.scrollTo = function(b, c, a) {
        "object" == typeof c && (a = c, c = 0);
        "function" == typeof a && (a = {
            onAfter: a
        });
        "max" == b && (b = 9E9);
        a = d.extend({}, m.defaults, a);
        c = c || a.duration;
        a.queue = a.queue && 1 < a.axis.length;
        a.queue && (c /= 2);
        a.offset = h(a.offset);
        a.over = h(a.over);
        return this._scrollable().each(function() {
            function p(e) {
                j.animate(f, c, a.easing, e && function() {
                    e.call(this, b, a)
                })
            }
            if (null != b) {
                var k = this,
                    j = d(k),
                    e = b,
                    n, f = {},
                    r = j.is("html,body");
                switch (typeof e) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                            e =
                                h(e);
                            break
                        }
                        e = d(e, this);
                        if (!e.length) return;
                    case "object":
                        if (e.is || e.style) n = (e = d(e)).offset()
                }
                d.each(a.axis.split(""), function(b, d) {
                    var c = "x" == d ? "Left" : "Top",
                        l = c.toLowerCase(),
                        g = "scroll" + c,
                        h = k[g],
                        q = m.max(k, d);
                    n ? (f[g] = n[l] + (r ? 0 : h - j.offset()[l]), a.margin && (f[g] -= parseInt(e.css("margin" + c)) || 0, f[g] -= parseInt(e.css("border" + c + "Width")) || 0), f[g] += a.offset[l] || 0, a.over[l] && (f[g] += e["x" == d ? "width" : "height"]() * a.over[l])) : (c = e[l], f[g] = c.slice && "%" == c.slice(-1) ? parseFloat(c) / 100 * q : c);
                    a.limit && /^\d+$/.test(f[g]) &&
                        (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], q));
                    !b && a.queue && (h != f[g] && p(a.onAfterFirst), delete f[g])
                });
                p(a.onAfter)
            }
        }).end()
    };
    m.max = function(b, c) {
        var a = "x" == c ? "Width" : "Height",
            h = "scroll" + a;
        if (!d(b).is("html,body")) return b[h] - d(b)[a.toLowerCase()]();
        var a = "client" + a,
            k = b.ownerDocument.documentElement,
            j = b.ownerDocument.body;
        return Math.max(k[h], j[h]) - Math.min(k[a], j[a])
    }
})(jQuery);;

// Added by Michael Lai on 8/8/17 to account for left nav spillover into footer



(function($) {

    $(document).ready(function() {

        //Calculate Left navigation height
        var leftNavHeight = $('ul.menu').height();

        //Calculate content body height
        var bodyHeight = $('#panel-content').height();

        //Conditional to fit left navigation to the body content to prevent spillover into footer
        if (leftNavHeight > bodyHeight) {
            $('#panel-content').css('height', leftNavHeight)
        }


    });


}(jQuery));;