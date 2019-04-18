/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/all/modules/highwire/highwire/highwire_user/js/highwire_user_meta.js. */
(function($) {
    Drupal.behaviors.highwire_user_meta_add = {
        attach: function(context, settings) {
            $.ajax({
                url: '/highwire/sub-data',
                type: 'POST',
                cache: false,
                dataType: 'json',
                success: function(msg) {
                    if ($('script[id="user"]').length == 0) {
                        var s = document.createElement('script');
                        s.type = 'application/json';
                        s.id = 'user';
                        s.text = JSON.stringify(msg);
                        $(s).insertAfter($('meta').last())
                    }
                }
            })
        }
    }
}(jQuery));;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/all/modules/highwire/highwire/highwire_user/js/highwire_user_meta.js. */
/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/all/modules/contrib/panels/js/panels.js. */
(function($) {
    Drupal.Panels = Drupal.Panels || {};
    Drupal.Panels.autoAttach = function() {
        if ($.browser.msie) {
            $("div.panel-pane").hover(function() {
                $('div.panel-hide', this).addClass("panel-hide-hover");
                return true
            }, function() {
                $('div.panel-hide', this).removeClass("panel-hide-hover");
                return true
            });
            $("div.admin-links").hover(function() {
                $(this).addClass("admin-links-hover");
                return true
            }, function() {
                $(this).removeClass("admin-links-hover");
                return true
            })
        }
    };
    $(Drupal.Panels.autoAttach)
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/all/modules/contrib/panels/js/panels.js. */
/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/default/modules/contrib/custom_search/js/custom_search.js. */
(function($) {
    Drupal.behaviors.custom_search = {
        attach: function(context) {
            if (!Drupal.settings.custom_search.solr) $('form.search-form', context).submit(function() {
                var box = $(this).find('input.custom-search-box');
                if (box.val() != undefined && box.val() == '') {
                    $(this).find('input.custom-search-box').addClass('error');
                    return false
                };
                if ($(this).find('#edit-keys').parents('div.element-invisible').attr('class') == 'element-invisible') {
                    $(this).find('#edit-keys').val($(this).find('#edit-or').val());
                    $(this).find('#edit-or').val('')
                };
                return true
            });
            $('form.search-form').attr('target', Drupal.settings.custom_search.form_target);
            $('form.search-form input.custom-search-box', context).bind('click focus', function(e) {
                $this = $(this);
                $parentForm = $this.parents('form');
                var popup = $parentForm.find('fieldset.custom_search-popup');
                if (popup.find('input,select').length && !popup.hasClass('opened')) popup.fadeIn().addClass('opened');
                e.stopPropagation()
            });
            $(document).bind('click focus', function() {
                $('fieldset.custom_search-popup').hide().removeClass('opened')
            });
            $('.custom-search-selector input:checkbox', context).each(function() {
                var el = $(this);
                if (el.val() == 'c-all') {
                    el.change(function() {
                        $(this).parents('.custom-search-selector').find('input:checkbox[value!=c-all]').attr('checked', false)
                    })
                } else if (el.val().substr(0, 2) == 'c-') {
                    el.change(function() {
                        $('.custom-search-selector input:checkbox').each(function() {
                            if ($(this).val().substr(0, 2) == 'o-') $(this).attr('checked', false)
                        });
                        $(this).parents('.custom-search-selector').find('input:checkbox[value=c-all]').attr('checked', false)
                    })
                } else el.change(function() {
                    $(this).parents('.custom-search-selector').find('input:checkbox[value!=' + el.val() + ']').attr('checked', false)
                })
            });
            var edit_keys = $('#edit-keys').val();
            if (edit_keys) {
                var pos = edit_keys.indexOf('type:');
                if (pos) {
                    var pos2 = edit_keys.indexOf(' ', pos);
                    if (pos2 == -1) pos2 = edit_keys.length;
                    var types = edit_keys.substring(pos + 5, pos2);
                    types = types.split(',');
                    for (var i = 0; i < types.length; i++) $('.search-form input:checkbox[value=' + types[i] + ']').attr('checked', true)
                };
                var pos = edit_keys.indexOf('term:');
                if (pos) {
                    var pos2 = edit_keys.indexOf(' ', pos);
                    if (pos2 == -1) pos2 = edit_keys.length;
                    var terms = edit_keys.substring(pos + 5, pos2);
                    terms = terms.split(',');
                    for (var i = 0; i < terms.length; i++) $('#edit-term option[value=' + terms[i] + ']').attr('selected', true)
                };
                var pos = edit_keys.indexOf('language:');
                if (pos) {
                    var pos2 = edit_keys.indexOf(' ', pos);
                    if (pos2 == -1) pos2 = edit_keys.length;
                    var languages = edit_keys.substring(pos + 9, pos2);
                    languages = languages.split(',');
                    for (var i = 0; i < languages.length; i++) $('.search-advanced #edit-language-' + languages[i]).attr('checked', true)
                }
            };
            var popup = $('fieldset.custom_search-popup:not(.custom_search-processed)', context).addClass("custom_search-processed");
            popup.click(function(e) {
                e.stopPropagation()
            });
            popup.append('<a class="custom_search-popup-close" href="#">' + Drupal.t('Close') + '</a>');
            $('a.custom_search-popup-close').click(function(e) {
                $('fieldset.custom_search-popup.opened').hide().removeClass('opened');
                e.preventDefault()
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/default/modules/contrib/custom_search/js/custom_search.js. */
/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/all/modules/contrib/panels_ajax_tab/js/panels_ajax_tab.js. */
(function($) {
    if ($().jquery.split(".")[0] == "1" && parseInt($().jquery.split(".")[1]) < 6)
        if (typeof console == "object") console.error('Panels Ajax Tab Error: jQuery 1.6 or higher required.');
    window.onpopstate = function(e) {
        if (e.state != null) $('a[data-panel-name="' + e.state.tab + '"]').panels_ajax_tabs_trigger()
    };
    Drupal.behaviors.panels_ajax_tabs = {
        attach: function(context) {
            $('.panels-ajax-tab-tab', context).once('panels-ajax-tabs-once', function() {
                if ($(this).parent().hasClass('active') && $(this).data('url-enabled') == 1)
                    if (typeof window.history.pushState != 'undefined') window.history.replaceState({
                        tab: $(this).data('panel-name')
                    }, $(this).html(), window.location.href);
                $(this).click(function(e) {
                    e.preventDefault();
                    if (typeof window.history.pushState != 'undefined' && $(this).data('url-enabled') == 1) {
                        var href = $(this).attr('href') ? $(this).attr('href') : location.pathname;
                        window.history.pushState({
                            tab: $(this).data('panel-name')
                        }, $(this).html(), href)
                    };
                    if (!$(this).parent().hasClass('active')) $(this).panels_ajax_tabs_trigger()
                }).css('cursor', 'pointer')
            });
            $('.pane-panels-ajax-tab-tabs', context).once('panels-ajax-tabs-once', function() {
                var tabs = $('.panels-ajax-tab-tab:not(.panels-ajax-tabs-first-loaded)', this),
                    firstTab = tabs.first(),
                    target_id = firstTab.data('target-id'),
                    preloaded = $('#panels-ajax-tab-container-' + target_id).data('panels-ajax-tab-preloaded'),
                    currentTab;
                if (preloaded === '') {
                    currentTab = firstTab;
                    firstTab.trigger('click')
                } else currentTab = tabs.filter('*[data-panel-name="' + preloaded + '"]');
                currentTab.addClass('panels-ajax-tabs-first-loaded');
                currentTab.parent().addClass('active')
            })
        }
    }
})(jQuery);
(function($) {
    $.fn.extend({
        panels_ajax_tabs_trigger: function(callback) {
            return this.each(function() {
                var $tab = $(this),
                    container = $tab.parents('.panels-ajax-tab:first');
                if ($(container).data('loading') === true) return true;
                $(container).data('loading', true);
                var target_id = $tab.data('target-id'),
                    panel_name = $tab.data('panel-name'),
                    entity_context = $tab.data('entity-context'),
                    url_enabled = $tab.data('url-enabled'),
                    trigger = $tab.data('trigger'),
                    eventData = {
                        tab: this,
                        tabObject: $tab,
                        containerId: '#panels-ajax-tab-container-' + target_id,
                        callback: callback,
                        cache: false
                    },
                    preLoadEvent = $.Event("panelsAjaxTabsPreLoad", eventData),
                    preBehaviorEvent = $.Event("panelsAjaxTabsPreBehavior", eventData),
                    loadedEvent = $.Event("panelsAjaxTabsLoaded", eventData);
                if ($('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-wrap-' + panel_name).length) {
                    preLoadEvent.cached = true;
                    $(document).trigger(preLoadEvent, preLoadEvent.data);
                    $('#panels-ajax-tab-container-' + target_id).children().hide();
                    $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-wrap-' + panel_name).show();
                    $(container).data('loading', false);
                    if (callback) callback.call(this, $tab);
                    loadedEvent.cached = true;
                    $(document).trigger(loadedEvent)
                } else $.ajax({
                    url: Drupal.settings.basePath + 'panels_ajax_tab/' + panel_name + '/' + entity_context + '/' + url_enabled + '?panels_ajax_tab_trigger=' + trigger + '&panels_ajax_tab_tab=' + panel_name,
                    datatype: 'html',
                    headers: {
                        "X-Request-Path": document.location.pathname
                    },
                    cache: false,
                    beforeSend: function(xhr) {
                        $(document).trigger(preLoadEvent);
                        $('#panels-ajax-tab-container-' + target_id).children().hide();
                        $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-loading').show()
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        if (typeof console == "object") console.error('Panels Ajax Tab Error: ' + errorThrown);
                        $(container).data('loading', false)
                    }
                }).done(function(data) {
                    $('#panels-ajax-tab-container-' + target_id).children('.panels-ajax-tab-loading').hide();
                    $('#panels-ajax-tab-container-' + target_id).append('<div class="panels-ajax-tab-wrap-' + panel_name + '">' + data.markup + '</div>');
                    $(document).trigger(preBehaviorEvent, preBehaviorEvent.data);
                    Drupal.attachBehaviors($('#panels-ajax-tab-container-' + target_id + ' .panels-ajax-tab-wrap-' + panel_name)[0]);
                    $(container).data('loading', false);
                    if (callback) callback.call(this, $tab);
                    $(document).trigger(loadedEvent)
                });
                $tab.parent().siblings().removeClass('active');
                $tab.parent().addClass('active')
            })
        }
    })
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/all/modules/contrib/panels_ajax_tab/js/panels_ajax_tab.js. */
/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            }
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(a) {
        var b = "disabled",
            c = this.$element,
            d = c.is("input") ? "val" : "html",
            e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
        }, 0)
    }, b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active")
        }
        this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        this.sliding = !0, f && this.pause();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
                    var b = a(i.$indicators.children()[i.getActiveIndex()]);
                    b && b.addClass("active")
                })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
                    e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                        i.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return f && this.cycle(), this
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(window.jQuery), + function(a) {
    "use strict";

    function b() {
        a(d).remove(), a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                if ("disable-ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus",
                    i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show), void 0) : c.show()
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide), void 0) : c.hide()
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
                e = /\s?auto?\s?/i,
                f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(),
                h = c[0].offsetWidth,
                i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(),
                    k = d,
                    l = document.documentElement.scrollTop || document.body.scrollTop,
                    m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
                    n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
                    o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
            }
            var p = this.getCalculatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
        }
    }, b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach()
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(window.jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#\w/.test(e) && a(e);
            return f && f.length && [
                [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.attr("data-target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(window.jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }))
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(window.jQuery);; /**/
/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/jquery.cookieBar.js. */
(function($) {
    $.fn.cookieBar = function(options) {
        var settings = $.extend({
            closeButton: '.close',
            secure: false,
            path: '/',
            domain: ''
        }, options);
        return this.each(function() {
            var cookiebar = $(this);
            cookiebar.hide();
            if (settings.closeButton == 'none') {
                cookiebar.append('<a class="cookiebar-close">Close</a>');
                settings = $.extend({
                    closeButton: '.cookiebar-close'
                }, options)
            };
            if ($.cookie('cookiebar') != 'hide') cookiebar.show();
            cookiebar.find(settings.closeButton).click(function() {
                cookiebar.hide();
                $.cookie('cookiebar', 'hide', {
                    path: settings.path,
                    secure: settings.secure,
                    domain: settings.domain,
                    expires: 30
                });
                return false
            })
        })
    };
    $.cookieBar = function(options) {
        $('body').prepend('<div class="ui-widget"><div style="display: none;" class="cookie-message ui-widget-header blue"><p>By using this website you allow us to place cookies on your computer. They are harmless and never personally identify you.</p></div></div>');
        $('.cookie-message').cookieBar(options)
    }
})(jQuery);
(function($) {
    $.cookie = function(key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);
            if (value === null || value === undefined) options.expires = -1;
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days)
            };
            value = String(value);
            return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''))
        };
        options = value || {};
        var decode = options.raw ? function(s) {
                return s
            } : decodeURIComponent,
            pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++)
            if (decode(pair[0]) === key) return decode(pair[1] || '');
        return null
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/jquery.cookieBar.js. */
/* Source and licensing information for the line(s) below can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/script.js. */
(function($) {
    var SELECTOR_BODY = 'body',
        CLASS_MOBILE_NAV_OPEN = "mobile-nav-open",
        CLASS_MAIN_CONTAINER = "main-container";
    Drupal.behaviors.bmj_global = {
        attach: function(context, settings) {
            $(window).resize(function() {
                $('.table-expand-inline').click(function() {
                    $(document).ajaxComplete(function(event, request, settings) {
                        if (request.responseText.indexOf('<table id="table') !== -1) $(".row-fluid").css("position", "relative")
                    })
                })
            })
        }
    };
    Drupal.behaviors.bmj_accordions = {
        attach: function(context, settings) {
            $('.pane-jnl-bmj-subscription-widget h2').on("click", function() {
                $(this).next().slideToggle("fast");
                $(this).toggleClass("closed");
                $(this).next().toggleClass("closed")
            }).click();
            $('.accordion-group h2').on("click", function() {
                $(this).next().slideToggle("fast")
            }).click();
            $('.accordion-group-sm .pane-title', context).on("click", function() {
                if ($(window).width() < 768) $(this).next().slideToggle("fast")
            });
            $('.accordion-group-sm .highwire-list-title', context).on("click", function() {
                if ($(window).width() < 768) $(this).next().slideToggle("fast")
            });
            $('.accordion-group-mobile h2', context).on("click", function(event) {
                event.preventDefault();
                if ($(window).width() < 980) $(this).next().slideToggle("fast")
            });
            $('.accordion-group-phone .pane-title', context).on("click", function() {
                $(this).next().slideToggle("fast")
            }).click();
            $('.resources-for-authors > a', context).on("click", function() {
                if ($(window).width() < 768) {
                    event.preventDefault();
                    $(this).next().slideToggle("fast")
                }
            }).click()
        }
    };
    Drupal.behaviors.bmj_investigation_date = {
        attach: function(context, settings) {
            $('.view-id-campaign_page.view-display-id-panel_pane_1 .bmj-channel-featured-hero-date-category-wrapper').once(function() {
                var investigation_date = $(this).html();
                $('.view-id-campaign_page.view-display-id-panel_pane_1 h2').append('<br><span class="invest-date">' + investigation_date + '</span>')
            });
            $('.bmj-channel-featured-photo_featured').each(function() {
                var investigation_date = $('.bmj-channel-featured-photo_featured-date-category-wrapper', this).html();
                $('h2', this).append('<br><span class="invest-date">' + investigation_date + '</span>')
            })
        }
    };
    Drupal.behaviors.bmj_login_form = {
        attach: function(context, settings) {
            $('.dropdown-menu').find('form').click(function(e) {
                e.stopPropagation()
            })
        }
    };
    Drupal.behaviors.Navbar = {
        attach: function(context, settings) {
            var main_nav_open = false,
                top_nav_open = false;
            $('#btn-nav').click(function() {
                main_nav_open = !main_nav_open;
                if (top_nav_open == true) {
                    $('#top-nav').toggle();
                    $('#main-nav').toggleClass('override-affix');
                    top_nav_open = !top_nav_open
                };
                $('body').toggleClass(CLASS_MOBILE_NAV_OPEN);
                $('#main-nav').toggleClass('override-affix')
            });
            $('#toggle-mobile-top-nav').click(function() {
                top_nav_open = !top_nav_open;
                if (main_nav_open == true) {
                    $('#main-nav').toggle();
                    $('#main-nav').toggleClass('override-affix');
                    main_nav_open = !main_nav_open
                };
                $('#top-nav').toggle();
                $('#main-nav').toggleClass('override-affix')
            });
            closeMenuOnMainContentClick()
        }
    };
    var mobileDevices = function() {
            return (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))
        },
        closeMenuOnMainContentClick = function() {
            if (mobileDevices()) $('.' + CLASS_MAIN_CONTAINER).click(function() {
                if ($(SELECTOR_BODY).hasClass(CLASS_MOBILE_NAV_OPEN)) $(SELECTOR_BODY).toggleClass(CLASS_MOBILE_NAV_OPEN)
            })
        };
    Drupal.behaviors.MiscStyling = {
        attach: function(context, settings) {
            $('div.highwire-markup .fig-inline-img-wrapper img').tooltip({
                placement: 'top',
                title: 'View fullscreen'
            });
            var isClicked = false;
            $('.minipanel-model-link-link a').click(function() {
                if (!isClicked) {
                    isClicked = true;
                    if ($(this).closest("div.minipanel-model-wrapper").find(".panel-collapse").is(":visible")) {
                        $(this).closest("li").removeClass("active");
                        $(this).closest("div").removeClass("active")
                    } else {
                        $(this).closest("li").addClass("active");
                        $(this).closest("div").addClass("active")
                    };
                    setTimeout(function() {
                        isClicked = false
                    }, 350)
                }
            })
        }
    };
    Drupal.behaviors.fpShowMore = {
        attach: function(context, settings) {
            if ($('.page-thebmj').length) {
                var show_more = 0;
                $('#latest-articles-hp-pane5').hide();
                $('#latest-articles-hp-pane6').hide();
                $('#latest-articles-hp-pane7').hide();
                $('#latest-articles-hp-pane8').hide();
                $('#fp-show-more').click(function() {
                    if (show_more == 0) {
                        $('#latest-articles-hp-pane5').show();
                        $('#latest-articles-hp-pane6').show();
                        show_more = 1
                    } else if (show_more == 1) {
                        $('#latest-articles-hp-pane7').show();
                        $('#latest-articles-hp-pane8').show();
                        $('#fp-show-more').hide();
                        show_more = 2
                    }
                })
            }
        }
    };
    Drupal.behaviors.touchDevices = {
        attach: function(context, settings) {
            if ($('body').hasClass('homepage') || $('body').hasClass('page-thebmj'))
                if (Modernizr.touch) $("#current-issue-links").addClass("tablet");
            if ($('body').hasClass('node-type-bmj-infographic'))
                if (Modernizr.touch) {
                    $("#touch-devices-message").show();
                    $("canvas#infographics").hide();
                    $("#display-infographic").click(function() {
                        $("canvas#infographics").show();
                        $("#display-infographic").hide()
                    })
                }
        }
    };
    Drupal.behaviors.RefAnchor = {
        attach: function(context, settings) {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 60
                        }, 1e3);
                        return false
                    }
                }
            });
            if ($(location.href.split("#")[1])) {
                var target = $('#' + location.href.split("#")[1]);
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1e3);
                    return false
                }
            }
        }
    };
    Drupal.behaviors.Hosted_content_showmore = {
        attach: function(context, settings) {
            var showChar = 100,
                ellipsestext = "...",
                moretext = "more",
                lesstext = "less";
            $('.field-name-field-pane-content .field-items div.field-item.even').each(function() {
                var content = $(this).html();
                if (content.length > showChar) {
                    var c = content.substr(0, showChar),
                        h = content.substr(showChar - 1, content.length - showChar),
                        html = c + '<span class="moreelipses">' + ellipsestext + '</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                    $(this).html(html)
                }
            });
            $(".morelink").click(function() {
                if ($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext)
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext)
                };
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false
            })
        }
    };
    Drupal.behaviors.cookieNotice = {
        attach: function(context, settings) {
            $(document).ready(function() {
                $('#cookie-notice').cookieBar()
            });
            $("#cookie-notice .more-info").click(function() {
                $("#cookie-notice .more-info-text").toggleClass("visible")
            })
        }
    };
    Drupal.behaviors.openurl_text_override = {
        attach: function(context, settings) {
            if ($('.cit-ref-sprinkles-open-url').length > 0) {
                $.get(Drupal.settings.basePath + 'highwire/openurl/' + Drupal.settings.highwire.nid, function(data) {
                    if (data) $('.cit-ref-sprinkles-open-url').each(function() {
                        $(this).once('checkImage', function() {
                            if (data.image) $(this).contents().filter(function() {
                                return this.nodeType == 3
                            })[0].nodeValue = null
                        })
                    })
                });
                if ($('.cit-ref-sprinkles-open-url img').length > 0) {
                    $('.cit-ref-sprinkles-open-url span').hide();
                    $('.cit-ref-sprinkles-open-url div').hide();
                    $('.cit-ref-sprinkles-open-url li').hide()
                }
            }
        }
    };
    Drupal.behaviors.reponsive_image = {
        attach: function(context, settings) {
            $('.panel-pane.pane-node-body').find('p img').addClass('img-responsive')
        }
    };
    Drupal.behaviors.current_issue_image_hyperlink = {
        attach: function(context, settings) {
            $("#current-issue-hover").css('cursor', 'pointer');
            if ($(".front #current-issue-hover").length) $("#current-issue-hover").attr('href', $("#current-issue-links").find('ul li a')[0].href);
            $("#current-issue-hover").click(function(e) {
                if (e.target.id === 'current-issue-hover') {
                    window.location = $(this).attr('href');
                    return false
                }
            })
        }
    };
    Drupal.behaviors.remove_ppv_tokens = {
        attach: function(context, settings) {
            var $page = $('body.page-highwire-payment-process-ppv'),
                $form = $page.find('#F1'),
                $tokens = $form.find('span.purchase-options');
            $tokens.find('p').hide()
        }
    };
    Drupal.behaviors.bmj_infographic = {
        attach: function(context, settings) {
            if (typeof Drupal.settings.jnl_bmj_infographic !== 'undefined') {
                var path = Drupal.settings.jnl_bmj_infographic.infographic_tab;
                if (path) $('.pane-highwire-panel-tabs ul.tabs li:eq(3)').once('bmj-infographic').after($('<li>', {
                    style: 'display: block',
                    html: '<a href="/' + path + '"><span>' + Drupal.t('Infographic') + '</span></a>'
                }))
            }
        }
    };
    Drupal.behaviors.add_orcid = {
        attach: function(context, settings) {
            var $wrapper = $('#panels-ajax-tab-container-highwire_article_tabs').find('.contributors');
            $wrapper.once(function() {
                var $orig_content = $wrapper.find('ol.contributor-list');
                $orig_content.find('.contributor').each(function() {
                    var $content = $(this).html();
                    $(this).html($content + '&nbsp;')
                });
                var $swap_content = $('#mini-panel-jnl_bmj_art_tools').find('#jnl_bmj_custom_authors');
                if (typeof $swap_content !== undefined) $swap_content.find('span').each(function() {
                    var $orcidLogo = $(this).find('.hw-author-orcid-logo');
                    if ($orcidLogo.length) {
                        var name = $(this).find('.nlm-given-names').text(),
                            surname = $(this).find('.nlm-surname').text();
                        $orig_content.find('li .name').each(function() {
                            if ($(this).text() == (name + ' ' + surname)) $(this).append($orcidLogo.html('<img src="' + settings.orcidLogo.svg + '" width="20px" style="margin-left: 5px"/>'))
                        })
                    }
                })
            })
        }
    }
})(jQuery);
(function($) {
    Drupal.behaviors.responseProgress = {
        attach: function(context, settings) {
            $('#highwire-comment-node-form').submit(function() {
                $("input[type='submit']", this).val("Please Wait...").attr('disabled', 'disabled');
                return true
            })
        }
    }
})(jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.bmj.com/sites/default/themes/bmj/the_bmj/js/script.js. */