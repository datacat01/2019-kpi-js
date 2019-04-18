(function(can, window, undefined) {
    var isFunction = can.isFunction,
        fnTest = /xyz/.test(function() {
            xyz;
        }) ? /\b_super\b/ : /.*/;
    can.Construct._overwrite = function(addTo, base, name, val) {
        if (name == 'vars' && base[name]) {
            val = can.extend(true, {}, base[name], val);
        }
        addTo[name] = isFunction(val) && isFunction(base[name]) && fnTest.test(val) ? (function(name, fn) {
            return function() {
                var tmp = this._super,
                    ret;
                this._super = base[name];
                ret = fn.apply(this, arguments);
                this._super = tmp;
                return ret;
            };
        })(name, val) : val;
    }
    can.Construct._inherit = function(newProps, oldProps, addTo) {
        addTo = addTo || newProps
        for (var name in newProps) {
            can.Construct._overwrite(addTo, oldProps, name, newProps[name]);
        }
    }
})(this.can, this);
(function($, can, HP) {
    var ua = navigator.userAgent.toUpperCase();
    window.isIE6 = ua.indexOf("MSIE 6.0") != -1;
    window.isIE7 = ua.indexOf("MSIE 7.0") != -1;
    window.isIE8 = ua.indexOf("MSIE 8.0") != -1;
    window.isIE9 = ua.indexOf("MSIE 9.0") != -1;
    window.isIE10 = ua.indexOf("MSIE 10.0") != -1;
    window.isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    window.isIEMobile = ua.indexOf("IEMOBILE") != -1;
    window.isIE = ua.indexOf("MSIE") != -1;
    window.isFF = ua.indexOf("FIREFOX") != -1;
    window.isOpera = (window.opera != undefined);
    window.gtIE8 = isIE8 || isIE9;
    window.isAndroid = ua.indexOf("ANDROID") != -1;
    window.ltAndroid24 = window.isAndroid && parseFloat(ua.slice(ua.indexOf("ANDROID") + 8)) < 2.4;
    window.isChrome = ua.indexOf("CHROME") != -1;
    window.isSafari = !window.isChrome && ua.indexOf("SAFARI") != -1;
    window.isiOS = ua.indexOf("IPHONE") != -1 || ua.indexOf("IPOD") != -1 || ua.indexOf("IPAD") != -1;
    window.ltIOS7 = (window.isiOS && ua.match(/OS [1-6](.*) like Mac OS X/i) != null);
    window.isMobileLabel = ua.indexOf("MOBILE") != -1;
    window.isTouchDevice = (function() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    })();
    window.rtl = $('html').attr('dir') == 'rtl';
    var originalSetup = can.Control.prototype.setup;
    can.Control.prototype.setup = function(element, options) {
        $.extend(true, this, this.constructor.vars);
        var newOptions = $.extend(true, {
            _self: this
        }, this.constructor.defaults, options);
        return originalSetup.call(this, element, newOptions);
    };
    HP.Control = {
        'init': function(control, selector, options) {
            var controlClass = (typeof control == 'string' ? HP[control] : control),
                elementsToInit = $(selector),
                elementToTest = null,
                elementControls = null,
                isInitialized = false,
                q;
            $(selector).each(function(index, elt) {
                isInitialized = false;
                elementToTest = $(elt);
                elementControls = elementToTest.data("initialized") || [];
                for (q = 0; q < elementControls.length; q++) {
                    if (elementControls[q] === controlClass) {
                        isInitialized = true;
                        break;
                    }
                }
                if (isInitialized === false) {
                    elementControls.push(controlClass);
                    elementToTest.data("initialized", elementControls);
                    elementsToInit = elementsToInit.add(elementToTest);
                }
            });
            if (controlClass.init) {
                controlClass.init(elementsToInit, options);
            } else {
                elementsToInit.each(function(index, el) {
                    new controlClass(el, options);
                });
            }
        },
        'show': function(element, options) {
            element = $(element);
            if (element.length == 0) return;
            element.stop(true);
            if (!options || !options.fxShow) {
                element.show();
            } else {
                var fx = options.fxShow;
                if (fx.effect == 'fadeTo') element[fx.effect](fx.duration, 1, fx.easing, fx.onComplete);
                else if (fx.effect == 'animate') element[fx.effect](fx.styles, fx.duration, fx.easing, fx.onComplete);
                else element[fx.effect](fx.duration, fx.easing, fx.onComplete);
            }
            element.triggerHandler('show');
            if (options && options.onShow) options.onShow();
        },
        'hide': function(element, options) {
            element = $(element);
            if (element.length == 0) return;
            element.stop(true);
            if (!options || !options.fxHide) {
                element.hide();
            } else {
                var fx = options.fxHide;
                if (fx.effect == 'animate') element[fx.effect](fx.styles, fx.duration, fx.easing, fx.onComplete);
                else element[fx.effect](fx.duration, fx.easing, fx.onComplete);
            }
            element.triggerHandler('hide');
            if (options && options.onHide) options.onHide();
        }
    };
    HP.Utils = {
        'ready': function(func) {
            func();
        },
        'ABReady': function(func) {
            if (window.HPOptimostTest && HPOptimostTest.checkOptimostLoaded && typeof HPOptimostTest.checkOptimostLoaded.ready == 'function') {
                HPOptimostTest.checkOptimostLoaded.ready(func);
            } else {
                func();
            }
        },
        'getUrlParamValue': function(name) {
            var value = null;
            var mather = new RegExp('[#&][\\/]?' + name + '=([^=&$]+)', 'i').exec(window.location.href);
            if (mather) value = mather[1];
            return value;
        },
        'getElementById': function(id) {
            var element;
            if (id) {
                element = $('#' + id);
                if (element.length != 0) {
                    return element;
                }
            }
        },
        'getDocumentHeight': function() {
            return Math.max($(document).height(), $(window).height(), document.documentElement.clientHeight);
        },
        'reHOST': /^((([^:/]+:)?(\/\/))?([^:/?#]+\.[^/?#]+))/,
        'getUrlHost': function(url) {
            var host = HP.Utils.reHOST.exec(url);
            return host ? (host[0].length == url.length ? '' : host[0]) : '';
        },
        'getCookie': function(cookieName) {
            if (document.cookie.length > 0) {
                c_start = document.cookie.indexOf(cookieName + "=");
                if (c_start != -1) {
                    c_start = c_start + cookieName.length + 1;
                    c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) c_end = document.cookie.length;
                    return document.cookie.substring(c_start, c_end);
                }
            }
            return "";
        },
        'setCookie': function(cookieName, email) {
            document.cookie = cookieName + '=' + email + '; path=/; domain=.hp.com';
            return document.cookie;
        },
        'getCookieValAsJSONObj': function(cookieVal) {
            var jsonCookieObject = null;
            jsonCookieObject = JSON.parse(cookieVal);
            return jsonCookieObject;
        },
        'getCCLL': function() {
            var ccll = [],
                lang = document.documentElement.lang.split('-');
            for (var i = 0; i < lang.length; i++) {
                ccll.push(lang[i]);
            }
            return ccll;
        }
    };
    HP.Keys = {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91
    }
})(can.$, can, window.HF || (window.HF = {}));
var readCookie = function(name) {
    if (!name) return;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name + '=') == 0) {
                return decodeURIComponent(c.substring(name.length + 1));
            }
        }
    }
};
window.autocompleteLoader = new function() {
    var lastLoader, loaders = {},
        multi = false,
        count, parameters = [],
        ETR_OPT_IN = readCookie('ETR_OPT_IN'),
        storeType = 'hho-store';
    var callLoader = function(index, query, callback) {
        loaders[parameters[index].type].getSuggestions(query, function(results) {
            callback(results, (multi ? index : null));
        });
    }
    this.addLoader = function(loader) {
        if (loader.type)
            loaders[loader.type] = loader;
        lastLoader = loader;
    };
    this.getSuggestions = function(query, callback, index) {
        if (typeof index != 'undefined') {
            callLoader(index, query, callback);
        } else if (multi) {
            for (var i = 0; i < parameters.length; i++)
                callLoader(i, query, callback);
        } else {
            if (lastLoader) lastLoader.getSuggestions(query, callback);
        }
    };
    this.setParams = function(params, loaderParams) {
        var loader;
        if (!loaderParams || loaderParams.length == 0) {
            lastLoader.setParams(params);
        } else {
            count = 0;
            for (var i = 0; i < loaderParams.length; i++) {
                var p = loaderParams[i];
                loader = loaders[p.type];
                if (loader) {
                    if (p.type != storeType || parameters.length == 0 || (ETR_OPT_IN && ETR_OPT_IN == 'true') || (!ETR_OPT_IN && p.defaultCookieValue)) {
                        loader.setParams({
                            language: params.language,
                            country: params.country,
                            count: p.count,
                            url: p.url,
                            callbackParam: p.callbackParam
                        });
                        count++;
                        parameters.push(p);
                        lastLoader = loader;
                    }
                }
            }
            if (count > 1) multi = true;
        }
    };
    this.getActionUrl = function(index) {
        return parameters[index].actionURL;
    };
    this.getJumpID = function(index, siteName) {
        var loader = (parameters.length) ? loaders[parameters[index].type] : lastLoader,
            loaderParams = loader.getParams();
        var sourceDomain = window.location.host == "store.hp.com" ? "se_r329_" : "se_r1002_";
        return sourceDomain + loaderParams.country + loaderParams.language + '_ac_' + siteName;
    };
    this.getMaxItemsCount = function(index) {
        if (parameters.length)
            return loaders[parameters[(index || 0)].type].getParams()['count'];
        else
            return lastLoader.getParams()['count'];
    };
    this.getLoadersCount = function() {
        if (count > 1) return count;
    };
    this.getParams = function() {
        return parameters.length > 1 ? parameters : null;
    };
};
(function($, can, HP, params) {
    $(function() {
        var body = $("body");
        var eventName = window.isiOS ? "touchstart" : "click";
        var closeOnBodyClickHandler = function(e) {
            var target = $(e.target),
                targetEl = target[0],
                activePopup = HP.PopupManager.getActivePopup();
            if (activePopup && !target.closest(activePopup.options.triggerEl)[0] && !target.closest(activePopup.getElement())[0]) {
                HP.PopupManager.hideActivePopup();
            }
        };
        body.on("PopupManager:show", function() {
            body.on(eventName, closeOnBodyClickHandler);
        });
        body.on("PopupManager:hide", function() {
            body.off(eventName, closeOnBodyClickHandler);
        });
    });
    HP.PopupManager = HP.PopupManager || (function() {
        var popups = [],
            activePopup = null;
        return {
            'add': function(popup) {
                popups.push(popup);
                popup.getElement().bind({
                    'show': function() {
                        if (activePopup) {
                            activePopup.hide();
                        }
                        activePopup = popup;
                        if (popup.options.closeOnBodyClick) $("body").triggerHandler("PopupManager:show");
                    },
                    'hide': function() {
                        if (activePopup == popup) activePopup = null;
                        if (popup.options.closeOnBodyClick) $("body").triggerHandler("PopupManager:hide");
                    }
                });
                return popup;
            },
            'hideActivePopup': function() {
                if (activePopup) {
                    activePopup.hide();
                    activePopup = null;
                }
            },
            'getActivePopup': function() {
                return activePopup;
            }
        }
    })();
    HP.Popup = can.Control({
        defaults: {
            hideDelay: 1000,
            showDelay: 0,
            showEvent: 'mouseenter',
            hideEvent: 'mouseleave',
            keyEvent: 'keydown',
            showKeys: null,
            hideKeys: null,
            triggerEl: null,
            targetActiveClass: '',
            triggerActiveClass: '',
            onInit: null,
            onShow: null,
            onHide: null,
            fxShow: {
                effect: 'show',
                styles: null,
                duration: 0,
                easing: null,
                onComplete: null
            },
            fxHide: {
                effect: 'hide',
                styles: null,
                duration: 0,
                easing: null,
                onComplete: null
            },
            positionHandler: null,
            addToPopupManager: true,
            closeOnBodyClick: true,
            open: false
        },
        vars: {
            timerId: null,
            openState: false,
            touch: false
        }
    }, {
        'init': function(element, options) {
            this.openState = this.options.open;
            if (this.openState)
                this.element.show();
            else
                this.element.hide();
            if (this.options.addToPopupManager)
                HP.PopupManager.add(this);
            if (this.options.onInit) this.options.onInit(this);
            if (window.navigator.msPointerEnabled) {
                var self = this;
                var onTouch = function(event) {
                    self.touch = true;
                };
                this.element.on('MSPointerDown', onTouch);
                this.options.triggerEl.on('MSPointerDown', onTouch);
            }
        },
        '_onShow': function() {
            if (this.timerId != null) {
                clearTimeout(this.timerId);
            }
            if (!this.isOpen()) {
                if (this.options.showDelay > 0) {
                    this.timerId = setTimeout($.proxy(this.show, this), this.options.showDelay);
                } else {
                    this.show()
                }
            }
        },
        '_onHide': function() {
            if (this.timerId != null) {
                clearTimeout(this.timerId);
            }
            if (this.options.hideDelay > 0) {
                this.timerId = setTimeout($.proxy(this.hide, this), this.options.hideDelay);
            } else {
                this.hide()
            }
        },
        'getElement': function() {
            return this.element;
        },
        'isOpen': function() {
            return this.openState;
        },
        'isVisible': function() {
            return !this.element.is(':hidden');
        },
        'toggle': function(show) {
            if (this.options.showEvent == this.options.hideEvent) {
                if (this.isOpen()) {
                    this._onHide();
                } else {
                    this._onShow();
                }
            } else {
                if (show) this._onShow();
                else this._onHide();
            }
        },
        '{triggerEl} {showEvent}': function(el, e) {
            this.element.data('index', $.inArray(el[0], $.makeArray(this.options.triggerEl)));
            this.toggle(true);
        },
        '{triggerEl} {hideEvent}': function(el, e) {
            if (this.options.showEvent != this.options.hideEvent) {
                if (window.navigator.msPointerEnabled && this.touch) {
                    this.touch = false;
                } else {
                    this.toggle(false);
                }
            }
        },
        '{triggerEl} {keyEvent}': function(el, e) {
            if (this.options.showKeys || this.options.hideKeys) {
                var key = e.which;
                var showFlag = $.inArray(key, this.options.showKeys) != -1;
                var hideFlag = $.inArray(key, this.options.hideKeys) != -1;
                if (showFlag && hideFlag) {
                    showFlag = !this.isOpen();
                }
                if (showFlag) {
                    this['{triggerEl} {showEvent}'](el, e);
                } else if (hideFlag) {
                    this.hide();
                }
            }
        },
        '{keyEvent}': function(el, e) {
            if (this.options.hideKeys && $.inArray(e.which, this.options.hideKeys) != -1) {
                this.hide();
            }
        },
        'mouseenter': function(el, e) {
            if (this.element.is(':animated')) return;
            if (this.timerId != null) {
                clearTimeout(this.timerId);
            }
        },
        '{hideEvent}': function(el, e) {
            if (this.options.showEvent != this.options.hideEvent) {
                if (window.navigator.msPointerEnabled && this.touch) {
                    this.touch = false;
                } else {
                    this._onHide();
                }
            }
        },
        'setPosition': function() {
            if (this.options.positionHandler && typeof this.options.positionHandler == 'function') {
                this.options.positionHandler(this.element, this.options.triggerEl);
            }
        },
        'show': function() {
            this.setPosition();
            if (this.options.targetActiveClass) this.element.addClass(this.options.targetActiveClass);
            if (this.options.triggerActiveClass) this.options.triggerEl.addClass(this.options.triggerActiveClass);
            HP.Control.show(this.element, this.options);
            this.openState = true;
        },
        'hide': function() {
            if (this.options.targetActiveClass) this.element.removeClass(this.options.targetActiveClass);
            if (this.options.triggerActiveClass) this.options.triggerEl.removeClass(this.options.triggerActiveClass);
            if (this.element.attr("data-state") == undefined) HP.Control.hide(this.element, this.options);
            this.openState = false;
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    var KEY_EVENT_NAME = 'keydown',
        SR_SELECTOR = '.js_screen_reading',
        SR_SPAN = '<span class="screenReading js_screen_reading">&nbsp;</span>';
    var initElementScreenReading = function(control, screenReadingEl, showLabel, hideLabel) {
            screenReadingEl.text(showLabel);
            control.element.on({
                "show": function() {
                    screenReadingEl.text(hideLabel);
                },
                "hide": function() {
                    screenReadingEl.text(showLabel);
                }
            });
        },
        initPopupScreenReading = function(control, customOpenLabelId, customCloseLabelId, skipCloseLabel) {
            var screenReadingEl = control.options.triggerEl.find(SR_SELECTOR);
            if (screenReadingEl) {
                var triggerTitle = control.options.triggerEl.attr('title') || '',
                    openLabelId = customOpenLabelId || 'open_popup',
                    closeLabelId = customCloseLabelId || 'close_popup',
                    showLabel, hideLabel;
                if (skipCloseLabel) {
                    showLabel = SCREENREADING_LABELS[openLabelId + '_prefix'] + triggerTitle, hideLabel = SCREENREADING_LABELS[closeLabelId + '_prefix'] + triggerTitle;
                } else {
                    showLabel = SCREENREADING_LABELS[openLabelId + '_prefix'] + triggerTitle + SCREENREADING_LABELS[openLabelId + '_suffix'], hideLabel = SCREENREADING_LABELS[closeLabelId + '_prefix'] + triggerTitle + SCREENREADING_LABELS[closeLabelId + '_suffix'];
                }
                initElementScreenReading(control, screenReadingEl, showLabel, hideLabel);
            }
        },
        initCartIconScreenReading = function(control) {
            var screenReadingEl = control.options ? control.options.triggerEl.find(SR_SELECTOR) : $(control).find(SR_SELECTOR);
            if (screenReadingEl) {
                var triggerTitle = control.options ? control.options.triggerEl.attr('title') : $(control).attr('title') || '',
                    showLabel = triggerTitle;
                screenReadingEl.text(showLabel);
            }
        },
        initSearchIconScreenReading = function(control) {
            var screenReadingEl = control.options ? control.options.triggerEl.find(SR_SELECTOR) : $(control).find(SR_SELECTOR);
            if (screenReadingEl) {
                var triggerTitle = control.options ? control.options.triggerEl.attr('title') : $(control).attr('title') || '',
                    showLabel = triggerTitle;
                screenReadingEl.text(showLabel);
            }
        },
        initLogoAccessibility = function(control) {
            var logoEle = $(control);
            logoEle.append(SR_SPAN);
            var screenReadingEl = logoEle.find(SR_SELECTOR);
            if (screenReadingEl) {
                var triggerTitle = logoEle.attr('title') || '',
                    showLabel = triggerTitle;
                screenReadingEl.text(showLabel);
            }
        },
        initSocialIconsAccessibility = function(control) {
            $(control).each(function(i, sIcon) {
                altText = $(sIcon).attr('data-label');
                $(sIcon).attr("aria-label", altText);
            });
        }
    HP.ScreenReading = {
        PopupScreenReading: initPopupScreenReading
    };
    var addTouchStartMouseDownClickHandlers = function(control) {
            window._touchstart = false;
            control.options.triggerEl.parent().on('MSPointerDown touchstart', function(e) {
                window._touchstart = true;
                control._mousedown = false;
                e.stopPropagation();
            });
            control.options.triggerEl.on('mousedown click', function(e) {
                if (e.type == 'mousedown') {
                    if (!window._touchstart) {
                        control._mousedown = true;
                    }
                } else {
                    if (!control._mousedown) {
                        e.preventDefault();
                    }
                    window._touchstart = control._mousedown = false;
                }
            });
        },
        initPopupAccessibility = function(control, selector) {
            var links = control.element.find(selector);
            if (links && links.length > 0) {
                var firstLink = links.first();
                lastLink = links.last();
                firstLink.on(KEY_EVENT_NAME, function(e) {
                    if (e.which == HP.Keys.TAB && e.shiftKey) {
                        e.preventDefault();
                        control.hide();
                        control.options.triggerEl.focus();
                    }
                });
                lastLink.on(KEY_EVENT_NAME, function(e) {
                    if (e.which == HP.Keys.TAB && !e.shiftKey) {
                        e.preventDefault();
                        control.hide();
                        control.options.triggerEl.focus();
                    }
                });
            }
            control.element.on(KEY_EVENT_NAME, function(e) {
                if (e.which == HP.Keys.ESCAPE) {
                    control.options.triggerEl.focus();
                }
            });
        };
    HP.Accessibility = {
        Popup: function(control, skipScreenReading) {
            initPopupAccessibility(control, 'a');
            !skipScreenReading && initPopupScreenReading(control);
        },
        TopMenuAccordionPopup: function(control, skipScreenReading) {
            initPopupAccessibility(control, 'a');
            !skipScreenReading && initPopupScreenReading(control, "", "", true);
        },
        CountrySelector: function(control) {
            control.element.on(KEY_EVENT_NAME, function(e) {
                if (e.which == HP.Keys.ESCAPE) {
                    control.options.triggerEl.focus();
                    setTimeout(function() {
                        control.hide();
                    }, 50);
                }
            });
            initPopupScreenReading(control, "", "", true);
            var screenReadingEl = control.options.triggerEl.find('.selectedCountry .screenReading');
            if (screenReadingEl) {
                screenReadingEl.text(SCREENREADING_LABELS['selected_country_state']);
            }
            control.element.on('showContent', function() {
                var headings = control.element.find('h2:visible'),
                    focusable = null;
                if (headings.length) {
                    focusable = headings.eq(0);
                    focusable.attr({
                        'tabindex': -1
                    });
                } else {
                    focusable = control.element.find('a').eq(0);
                }
                control.options.triggerEl.blur();
                setTimeout(function() {
                    focusable.focus();
                }, 50);
                if ((window.isIE11 || window.isIE) && headings.length) {
                    focusable.keydown(function(e) {
                        e.preventDefault();
                        if (e.keyCode == 9 || e.which == 9) {
                            control.element.find('a')[0].focus();
                        }
                    });
                }
            });
        },
        TopMenu: function(control) {
            var selectedIndex = 1;
            var stickyNavSelectedIndex = 0;
            var submenuCount = $('.submenu').length;
            itemEls = control.element.find(control.options.itemSelector).children(control.options.triggerSelector), itemNumber = itemEls.length ? control.element.parent().attr("class").match(/menu-(\d*)/)[1] : '', subMenu = $('.submenu-' + itemNumber);
            subMenu.attr('role', 'menubar');
            $('.submenu').attr('aria-hidden', true);
            subMenu.find(control.options.triggerSelector).attr('role', 'menuitem');
            var newControlElement = subMenu.find(control.options.triggerSelector),
                submenu = $('.submenu');
            if ($('.submenu-category').length > 0) {
                var stickySubMenu = $('.submenu-category');
                var stickySubMenuElement = stickySubMenu.find('a');
            };
            $('.level1>li>a').attr('role', 'menuitem');
            if (!control.options.isSubMenu) {
                var parent = control.options.triggerEl.closest('ul');
                parent.attr('role', 'menubar');
                parent.find('ul').attr('role', 'menubar');
                control.options.triggerEl.attr('aria-haspopup', true);
                newControlElement.on(KEY_EVENT_NAME, function(e) {
                    if (e.shiftKey && e.which == HP.Keys.TAB) {
                        if (selectedIndex == 0) {
                            control.hide();
                            control.options.triggerEl.focus();
                            control.options.triggerEl.attr('aria-expanded', 'false');
                            newControlElement.attr('tabindex', -1);
                            HP.Accessibility.closeSubmenu(control, submenu);
                            e.preventDefault();
                        } else {
                            var itemIndex = HP.Accessibility.navigateLeft(selectedIndex, newControlElement, submenuCount, e);
                            selectedIndex = itemIndex;
                        }
                    } else if (e.which == HP.Keys.TAB) {
                        selectedIndex++;
                        if (selectedIndex != newControlElement.length / submenuCount) {
                            newControlElement.eq(selectedIndex).focus();
                        } else {
                            selectedIndex = 0;
                            control.options.triggerEl.attr('aria-expanded', 'false');
                            control.options.triggerEl.parent().next().find('a').focus();
                            newControlElement.attr('tabindex', -1);
                            HP.Accessibility.closeSubmenu(control, submenu);
                            control.hide();
                            if (control.options.triggerEl.parent().hasClass('lstchild')) {
                                $('.nav_buttons').find('a')[0].focus();
                            }
                        }
                        e.preventDefault();
                    } else if (e.which == HP.Keys.RIGHT) {
                        var itemIndex = HP.Accessibility.navigateRight(selectedIndex, newControlElement, submenuCount);
                        selectedIndex = itemIndex;
                    } else if (e.which == HP.Keys.LEFT) {
                        var itemIndex = HP.Accessibility.navigateLeft(selectedIndex, newControlElement, submenuCount, e);
                        selectedIndex = itemIndex;
                    }
                });
            } else {
                control.options.triggerEl.attr('aria-haspopup', 'true');
                control.options.triggerEl.on('click', function(e) {
                    control['{triggerEl} {showEvent}'](this, e);
                });
            }
            control.options.triggerEl.on(KEY_EVENT_NAME, function(e) {
                var itemNumber = control.options.triggerEl.parent().attr("class").match(/menu-(\d*)/)[1];
                var submenu = $('.submenu');
                var subMenuItem = $('.submenu-' + itemNumber);
                var stickyMenuPresent = control.options.triggerEl.hasClass("hf-sticky-menu-item");
                if (!control.options.isSubMenu) {
                    if (e.which == HP.Keys.TAB) {
                        control.hide();
                        control.element.parent().removeClass('selected');
                        submenu.children().attr('data-state', 'hidden').removeClass('hf-menu-visible');
                        submenu.attr('data-state', 'closed');
                    } else if (e.which == HP.Keys.ENTER || e.which == HP.Keys.SPACE || e.which == HP.Keys.DOWN || e.which == HP.Keys.UP) {
                        if (!control.isOpen() && stickyMenuPresent != true) {
                            control.show();
                            control.element.parent().addClass('selected');
                            control.element.prev().attr('aria-expanded', 'true');
                            submenu.children().attr('data-state', 'hidden');
                            subMenuItem.attr('data-state', 'visible').addClass('hf-menu-visible');
                            $(subMenuItem[0]).find('a').attr('tabindex', 0);
                            newControlElement.eq(0).focus();
                            submenu.attr('data-state', 'open').attr('aria-hidden', false).addClass('hf-menu-open');
                            selectedIndex = 0;
                        } else if (stickyMenuPresent == true) {
                            var index = stickySubMenuElement.parent().parent().parent().hasClass('hasLink') ? 1 : 0;
                            stickySubMenuElement.eq(index).focus();
                            stickyNavSelectedIndex = 0;
                        }
                        selectedIndex = 0;
                        itemEls.eq(selectedIndex).focus();
                        e.preventDefault();
                    }
                } else if (e.which == HP.Keys.ENTER || e.which == HP.Keys.SPACE || e.which == HP.Keys.RIGHT) {
                    if (!control.isOpen()) control.show();
                    selectedIndex = 0;
                    itemEls.eq(selectedIndex).focus();
                    e.preventDefault();
                }
            });
            if ($('.submenu-category').length > 0) {
                var stickySubMenu = $('.submenu-category');
                var stickySubMenuElement = stickySubMenu.find('a');
                stickySubMenuElement.on(KEY_EVENT_NAME, function(e) {
                    if (e.shiftKey && e.which == HP.Keys.TAB) {
                        if (stickyNavSelectedIndex == 0) {
                            $('.hf-sticky-menu-item').focus();
                            e.preventDefault();
                        } else {
                            var itemIndex = HP.Accessibility.navigateLeft(stickyNavSelectedIndex, stickySubMenuElement, 1, e);
                            stickyNavSelectedIndex = itemIndex;
                        }
                    } else if (e.which == HP.Keys.TAB) {
                        stickyNavSelectedIndex++;
                        if (stickyNavSelectedIndex != stickySubMenuElement.length) {
                            stickySubMenuElement.eq(stickyNavSelectedIndex).focus();
                        } else {
                            stickyNavSelectedIndex = 0;
                            $($('.hf-sticky-menu-item')[0]).parent().next().find('a').focus();
                        }
                        e.preventDefault();
                    } else if (e.which == HP.Keys.RIGHT) {
                        var itemIndex = HP.Accessibility.navigateRight(stickyNavSelectedIndex, stickySubMenuElement, 1);
                        stickyNavSelectedIndex = itemIndex;
                    } else if (e.which == HP.Keys.LEFT) {
                        var itemIndex = HP.Accessibility.navigateLeft(stickyNavSelectedIndex, stickySubMenuElement, 1, e);
                        stickyNavSelectedIndex = itemIndex;
                    }
                });
            }
            addTouchStartMouseDownClickHandlers(control);
            var screenReadingEl = control.options.triggerEl.find(SR_SELECTOR);
            if (control.options.isSubMenu) {
                if (screenReadingEl) {
                    var label = SCREENREADING_LABELS['opened_state_submenu_suffix'];
                    screenReadingEl.text(label);
                }
            }
        },
        searchIcon: function(control) {
            initSearchIconScreenReading(control);
        },
        shoppingCartIcon: function(control) {
            initCartIconScreenReading(control);
        },
        Autocomplete: function(control) {
            var span = $('<span class="hf_ac_offscreen_text" aria-live="polite"></span>');
            var body = $("body");
            body.append(span);
            body.on('ac:updatedata', function(e, count, suggestion) {
                if (span.text() != suggestion) span.text(suggestion);
            });
        },
        logoScreenReading: function(control) {},
        socialIconsScreenReading: function(control) {
            initSocialIconsAccessibility(control);
        },
        closeSubmenu: function(control, submenu) {
            setTimeout(function() {
                control.element.parent().removeClass('selected');
                submenu.attr('data-state', 'closed').attr('aria-hidden', 'true').removeClass('hf-menu-open');;;
                submenu.children().attr('data-state', 'hidden').removeClass('hf-menu-visible');
            }, 50);
        },
        navigateRight: function(selectedIndex, newControlElement, num) {
            selectedIndex++;
            if (selectedIndex == Math.ceil(newControlElement.length / num)) {
                selectedIndex = 0;
            }
            newControlElement.eq(selectedIndex).focus();
            return selectedIndex;
        },
        navigateLeft: function(selectedIndex, newControlElement, num, event) {
            selectedIndex--;
            if (selectedIndex < 0) {
                selectedIndex = Math.ceil(newControlElement.length / num) - 1;
            }
            newControlElement.eq(selectedIndex).focus();
            event.preventDefault();
            return selectedIndex;
        }
    };
})(can.$, can, window.HF || (window.HF = {}));

function initSkipLinks() {
    can.$(".js-skip-link").each(function(i, skipLink) {
        skipLink = can.$(skipLink);
        var href = skipLink.attr("href");
        var targetName = href.substr(href.indexOf("#") + 1, href.length);
        var targetEl = can.$("[name=" + targetName + "]");
        if (isIE || isOpera || isIE11) {
            var tempTabIndex;
            if (targetName == "skiptobody") {
                tempTabIndex = 100;
            } else if (targetName == "skiptofooter") {
                tempTabIndex = can.$(".footer").find("a[tabindex!=-1]:first").attr("tabindex");
            }
            targetEl.on({
                focus: function() {
                    targetEl.attr("tabindex", tempTabIndex);
                },
                blur: function() {
                    targetEl.attr("tabindex", -1);
                }
            });
        }
        skipLink.on({
            click: function(event) {
                event.preventDefault();
                targetEl[0].focus();
            },
            focus: function(e) {
                $(e.target).addClass("display-skip-linksa").parent("span.skip-links").addClass("display-skip-links");
            },
            blur: function(e) {
                $(e.target).removeClass("display-skip-linksa").parent("span.skip-links").removeClass("display-skip-links");
            }
        });
    });
}
(function($, can, HP) {
    var KEY_EVENT_NAME = 'keydown',
        SR_SELECTOR = '.js_screen_reading',
        SR_SPAN = '<span class="screenReading js_screen_reading">&nbsp;</span>';
    var initAccordionBehavior = function(control) {
            var firstLinks = control.options.targets.find('a:first');
            control.options.fxShow.onComplete = function() {
                control.options.targets.eq(control.selectedIndex).find('a').attr('tabindex', control.element.eq(control.selectedIndex).attr('tabindex'));
                firstLinks.eq(control.selectedIndex).focus();
            };
        },
        initAccordionInteractions = function(control) {
            var firstLinks = control.options.targets.find('a:first'),
                lastLinks = control.options.targets.find('a:last');
            firstLinks.on(KEY_EVENT_NAME, function(e) {
                if (e.which == HP.Keys.TAB && e.shiftKey) {
                    e.preventDefault();
                    control.element.eq(control.selectedIndex).focus();
                    control.hide();
                }
            });
            lastLinks.on(KEY_EVENT_NAME, function(e) {
                if (e.which == HP.Keys.TAB && !e.shiftKey) {
                    control.element.eq(control.selectedIndex).next().focus();
                    control.hide();
                }
            });
        };
    HP.Accessibility = $.extend(HP.Accessibility || {}, {
        AccordionMobile: function(control) {
            control.element.attr('role', 'button');
            control.element.attr("aria-expanded", "false");
            $.each(control.element, function(i, element) {
                var trigger = $(element);
                trigger.on('click', function() {
                    if ($(this).attr('aria-expanded') == 'true') {
                        $(this).attr("aria-expanded", "false");
                    } else {
                        $(this).attr("aria-expanded", "true");
                    }
                    control.element.parents('.site_links, .country_holder_mobile').find('a[role=button]').not($(this)).attr('aria-expanded', 'false');
                });
            });
            initAccordionBehavior(control);
        },
        TopMenuAccordion: function(control) {
            var panels = control.element.find('.js_hf_menu').filter(':not(".level1")');
            panels.attr('aria-hidden', true);
            control.on('hide', function(event) {
                panels.attr('aria-hidden', true);
            });
            var topAccordion = control.element;
            topAccordion.attr('aria-hidden', true);
            control.on('show', function(event) {
                topAccordion.attr('aria-hidden', false);
            });
            $.each(control.accordions, function(i, accordion) {
                var triggers = accordion.element,
                    firstLinks = accordion.options.targets.find('a:first'),
                    lastLinks = accordion.options.targets.find('a:last');
                $(triggers).each(function(i, item) {
                    if ($(item).next().hasClass('level2')) {
                        $(item).attr('role', 'button');
                        $(item).attr('aria-expanded', "false");
                    }
                })
                triggers.children(SR_SELECTOR).remove();
                triggers.on('click', function(event) {
                    var currentTrigger = $(this),
                        currentPanel = currentTrigger.next('.js_hf_menu'),
                        parentPanels = currentTrigger.parents('.js_hf_menu'),
                        otherPanels = panels.not(currentPanel).not(parentPanels);
                    currentPanel.attr('aria-hidden', (currentPanel.attr('aria-hidden') == 'false'));
                    otherPanels.attr('aria-hidden', true);
                    if (currentTrigger.attr('aria-expanded') == 'true') {
                        currentTrigger.attr("aria-expanded", "false");
                    } else {
                        currentTrigger.attr("aria-expanded", "true");
                    }
                    control.element.find('.js_hf_menu li > a[role=button]').not(currentTrigger).attr('aria-expanded', 'false');
                    parentPanels.find('li > a.open').attr('aria-expanded', 'true');
                });
                firstLinks.on(KEY_EVENT_NAME, function(e) {
                    if (e.which == HP.Keys.TAB && e.shiftKey) {
                        accordion.options.targets.eq(accordion.selectedIndex).attr("aria-hidden", true);
                    }
                });
                lastLinks.on(KEY_EVENT_NAME, function(e) {
                    if (e.which == HP.Keys.TAB && !e.shiftKey) {
                        accordion.options.targets.eq(accordion.selectedIndex).attr("aria-hidden", true);
                    }
                });
                initAccordionBehavior(accordion);
                initAccordionInteractions(accordion);
            });
            control.element.on('hide', function() {
                control.element.find('.js_hf_menu li > a[role=button]').attr("aria-expanded", "false");
            });
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, HP) {
    var isDesktopSafari = !!(window.isSafari && !window.isiOS);
    HP.BreakPoints = {
        MOBILE1: 350,
        MOBILE2: 496,
        TABLET1: 800,
        TABLET2: 1081,
        DESKTOP: 15360
    };
    HP.Responsive = {
        isResolutionChanged: false,
        currentResolution: 0,
        intervals: [
            [0, HP.BreakPoints.MOBILE1],
            [HP.BreakPoints.MOBILE1 + 1, HP.BreakPoints.MOBILE2],
            [HP.BreakPoints.MOBILE2 + 1, HP.BreakPoints.TABLET1],
            [HP.BreakPoints.TABLET1 + 1, HP.BreakPoints.TABLET2],
            [HP.BreakPoints.TABLET2 + 1, HP.BreakPoints.DESKTOP]
        ],
        getHeaderBottomCoordinate: function() {
            var header = $("#header");
            return header.offset().top + header.height();
        }
    };

    function getCurrentResolution() {
        var intervals = HP.Responsive.intervals;
        var currentWidth = isDesktopSafari ? $(window).width() : window.innerWidth;
        var interval;
        for (var i = 0; i < intervals.length; i++) {
            interval = intervals[i];
            if (currentWidth >= interval[0] && currentWidth <= interval[1]) {
                return interval[1];
            }
        }
        return 0;
    }
    $(window).resize(function() {
        var isResolutionChanged = true;
        if (isIE8 || isIE7) window.innerWidth = $(window).width();
        var currentWidth = window.innerWidth;
        var currentResolution = getCurrentResolution();
        if (currentResolution == HP.Responsive.currentResolution) isResolutionChanged = false;
        if ((isIE8 || isIE7) && currentWidth == window.prevWidth) isResolutionChanged = HP.Responsive.isResolutionChanged;
        HP.Responsive.isResolutionChanged = isResolutionChanged;
        HP.Responsive.currentResolution = currentResolution;
        window.prevWidth = currentWidth;
        if (isResolutionChanged) $(window).triggerHandler("resolutionChanged");
        else $(window).triggerHandler("resolutionNotChanged");
    });
    HP.Utils.ready(function() {
        if (isIE8 || isIE7) window.innerWidth = $(window).width();
        HP.Responsive.currentResolution = HP.Responsive.currentResolution || ((isIE8 || isIE7) ? 0 : getCurrentResolution());
    });
})(can.$, window.HF || (window.HF = {}));
(function($, can, HP, params) {
    window.hfAutocompleteStart = function(opt) {
        var searchBox = opt.searchBox || "searchBox";
        new HP.HFAutocomplete('#' + searchBox, opt);
        initContextualSearch();
        var searchForm = can.$(opt.searchForm || "#searchHP"),
            metricId;
        if (searchForm) {
            metricId = searchForm.find('.js_metricId').text();
            if (metricId) {
                searchForm.on('submit', function() {
                    if (typeof window.dataLayer == 'object' && typeof window.dataLayer.length == 'number') {
                        dataLayer.push({
                            event: 'e_linkClick',
                            linkPlacement: "header",
                            linkID: metricId
                        });
                    }
                    window.trackMetrics && trackMetrics('global-inav', {
                        'link_id': metricId
                    });
                });
            }
            if (HP.SearchWidget) {
                var clientMode = Math.min(window.screen.width, window.screen.height) <= 496 || isMobileLabel ? 'mobile' : '';
                searchForm.find('input[name="client"]').val(clientMode);
            }
        }
    };
    var INPUT_TITLE = 'search_box_suggestion_title';
    HP.ACPopup = can.Control({
        defaults: {
            widthElement: null,
            offsetElement: null,
            item: null,
            searchBoxInput: null
        }
    }, {
        'init': function(element, options) {
            this.observeObject = new can.Observe({
                value: ''
            });
            this.on();
            this.inputTitle = this.options.searchBoxInput.attr('title');
        },
        'getObserveObject': function() {
            return this.observeObject;
        },
        'show': function() {
            if (this.options.widthElement) this.element.css('width', parseInt(this.options.widthElement.width()) + "px");
            this.element.show();
            if (SCREENREADING_LABELS[INPUT_TITLE]) {
                this.options.searchBoxInput.attr('title', SCREENREADING_LABELS[INPUT_TITLE]);
            }
            $("body").triggerHandler('ac:show');
        },
        'hide': function() {
            this.element.hide();
            if (SCREENREADING_LABELS[INPUT_TITLE]) {
                this.options.searchBoxInput.attr('title', this.inputTitle);
            }
            $("body").triggerHandler('ac:updatedata', [0, '']);
        },
        'hasFocus': function() {
            return this.element.find(this.options.item).filter(".ac_focus").length > 0;
        },
        'isVisible': function() {
            return this.element.is(':visible');
        },
        'focusIn': function(el) {
            el.addClass("ac_focus");
        },
        'focusOut': function(el) {
            el.removeClass("ac_focus");
        },
        'moveSelect': function(step) {
            if (this.isVisible()) {
                var items = this.element.find(this.options.item),
                    prev = items.filter(".ac_focus");
                this.focusOut(prev);
                var selectedIndex = (step == 0 && prev.length == 0) ? 0 : $.inArray(prev[0], $.makeArray(items));
                selectedIndex += step;
                if (selectedIndex < 0) {
                    selectedIndex = selectedIndex == -1 ? items.length - 1 : 0;
                } else if (selectedIndex > items.length - 1) {
                    selectedIndex = selectedIndex == items.length ? 0 : items.length - 1;
                }
                var active = $(items[selectedIndex]);
                this.focusIn(active);
                this.observeObject.attr('value', $(active).data('suggestion'));
            }
            return this.observeObject.value;
        },
        'getSelectedElement': function() {
            return (this.isVisible() ? this.element.find('.ac_focus').get(0) : null);
        },
        '{item} mouseenter': function(el) {
            this.focusOut(this.element.find(this.options.item).filter(".ac_focus"));
            el.addClass("ac_focus");
        },
        '{item} mouseleave': function(el) {
            el.removeClass("ac_focus");
        },
        '{item} click': function(el) {
            this.observeObject.attr('value', el.data('suggestion'));
            this.hide();
        }
    });
    HP.AC = can.Control({
        defaults: {
            minChars: 2,
            delay: 100,
            matchCase: false,
            matchSubset: true,
            cacheLength: 100,
            autoFill: false,
            widthElement: null,
            inputStyleClass: 'ac_input',
            inputActiveClass: 'ac_active',
            resultsStyleClass: 'ac_results_hf',
            searchForm: '#searchHP',
            selectFirst: false,
            selectOnly: false,
            popupClass: HP.ACPopup,
            loaderManager: 'autocompleteLoader',
            onInit: HP.Accessibility.Autocomplete
        },
        vars: {
            searchForm: null,
            jumpIDInput: null
        }
    }, {
        'init': function(element, options) {
            this.flushCache();
            if (this.options.inputStyleClass) this.element.addClass(this.options.inputStyleClass);
            this.searchForm = $(this.options.searchForm);
            this.jumpIDInput = this.searchForm.find('input[name=jumpID]');
            this.removeFocusOnBodyClickHandler = $.proxy(this.removeFocusOnBodyClick, this);
            this.loader = window[this.options.loaderManager];
            if (typeof this.options.onInit == 'function') {
                this.options.onInit(this);
            }
            var self = this;
            this.element.on('input paste', function(e) {
                if (!self._keydown) {
                    self.toggleClearBtn();
                    self.toggleSubmitButton();
                    self._updateList(e);
                }
            });
        },
        'getSuggestions': function(value, index) {
            if (this.loader) {
                this.loader.getSuggestions(value, can.proxy(this.receiveData, this), index);
            }
        },
        '_onChange': function(value) {
            if (!this.options.matchCase) value = value.toLowerCase();
            var c = this.loader.getLoadersCount(),
                data;
            if (typeof c == 'undefined') {
                data = this.options.cacheLength ? this.loadFromCache(value) : null;
                if (data) this.updateSuggestions(data);
                else this.getSuggestions(value);
            } else {
                for (var i = 0; i < c; i++) {
                    if (this.popup) {
                        var div = this.popup.element.find('.js_results' + i);
                        if (i == 0)
                            div.find('.ac_progress').show();
                        else
                            div.hide();
                        div.find('ul').hide();
                    }
                    data = this.options.cacheLength ? this.loadFromCache(value, i) : null;
                    if (data)
                        this.updateSuggestions(data, i);
                    else
                        this.getSuggestions(value, i);
                }
            }
        },
        'receiveData': function(data, index) {
            if (data) {
                this.addToCache(data.query, data, index);
                var val = $.trim(this.element[0].value);
                if (!this.options.matchCase) val = val.toLowerCase();
                if (val == $.trim(data.query)) {
                    this.updateSuggestions(data, index);
                }
            }
        },
        'updateSuggestions': function(result, index) {
            if (!this.element.hasClass(this.options.inputActiveClass)) return;
            var params = this.loader.getParams(),
                obj = {
                    term: result.query
                };
            if (this.popup) {
                var div = this.popup.element.find('.js_results' + (params ? index : ''));
                div.find('ul').remove();
                if (result.itemsCount == 0) {
                    if (index != 0) {
                        div.hide();
                    }
                } else {
                    var element = $(result.html);
                    this.highlightSuggestions(result.query, element)
                    div.append(element);
                    div.show();
                }
            } else {
                var html = '';
                if (params) {
                    for (var i = 0; i < params.length; i++) {
                        html += '<div class="js_results' + i + '" data-index="' + i + '"' + (i > 0 && (i != index || result.itemsCount == 0) ? ' style="display:none">' : '>');
                        html += '<div class="ac_title">' + params[i].title + '</div>';
                        html += (i == 0) ? '<div class="ac_progress">' + params[i].inProgressHTML + '</div>' : '';
                        html += (i == index ? result.html : '') + '</div>';
                    }
                } else {
                    html = '<div class="js_results ac_no_title">' + result.html + '</div>';
                }
                var element = $('<div class="ac_results ' + this.options.resultsStyleClass + '">' + html + '</div>');
                this.highlightSuggestions(result.query, element);
                (this.resultsContainer || this.element.parents('.search_container')).append(element);
                this.popup = new this.options.popupClass(element, {
                    searchBoxInput: this.element,
                    offsetElement: this.element[0],
                    item: 'li a',
                    widthElement: this.options.widthElement
                });
                this.popup.getObserveObject().bind('value', $.proxy(this.onValueChange, this));
            }
            if (params && index == 0 && result.itemsCount != 0) {
                this.popup.element.find('.ac_progress').hide();
            }
            if (result.itemsCount == 0) {
                if (this.popup.element.find('ul').length == 0) {
                    this.popup.hide();
                    return;
                }
            }
            this.openValue = this.element.val();
            var value = $.trim(this.element[0].value);
            var queryTerm = $.trim(result.query);
            if (!this.options.matchCase) {
                value = value.toLowerCase();
                queryTerm = queryTerm.toLowerCase();
            }
            if (this.options.autoFill && (value == queryTerm)) this.autoFill(result.query);
            this.popup.show();
            if (this.options.selectFirst || (this.options.selectOnly && result.itemsCount == 1)) {
                this.popup.moveSelect(0);
            }
            $("body").triggerHandler('ac:updatedata', [result.itemsCount, this.popup.element.find('.js_suggestion_text').eq(0).data('suggestion')]);
        },
        'evalString': function(str, obj) {
            var a = str.split('@@'),
                r = [],
                val;
            if (a.length < 3) return str;
            for (var i = 0; i < a.length; i++) {
                if (i % 2) {
                    r.push(obj[a[i]]);
                } else {
                    r.push(a[i]);
                }
            }
            return r.join('');
        },
        'highlightSuggestions': function(query, element) {
            var len = query.length,
                pos, text;
            element.find('.js_suggestion_text').each(function(index, el) {
                el = $(el);
                text = el.text();
                pos = text.toLowerCase().indexOf(query.toLowerCase());
                if (pos != -1) {
                    el.html(text.substr(0, pos) + "<span>" + text.substr(pos, len) + "</span>" + text.substr(pos + len));
                }
            })
        },
        'onValueChange': function(ev, newVal, oldVal) {
            this.prevValue = newVal;
            this.element.val(newVal);
        },
        'flushCache': function() {
            this.cache = {
                data: {},
                length: 0
            };
        },
        'addToCache': function(q, data, index) {
            if (!data || !q || !this.options.cacheLength) return;
            if (!this.cache.length || this.cache.length > this.options.cacheLength) {
                this.flushCache();
                this.cache.length++;
            } else if (!this.cache[q]) {
                this.cache.length++;
            }
            if (typeof index == 'undefined') {
                this.cache.data[q] = data;
            } else {
                if (!this.cache.data[q]) this.cache.data[q] = [];
                this.cache.data[q][index] = data;
            }
        },
        'loadFromCache': function(q, index) {
            if (!q || this.cache.length == 0) return null;
            var res = this.cache.data[q];
            if (res) {
                if (typeof index == 'undefined') {
                    return res;
                } else {
                    res = this.cache.data[q][index];
                    if (res) return res;
                }
            }
            for (var i = q.length - 1; i >= this.options.minChars; i--) {
                var fMatchCache = false,
                    data = this.cache.data[q.substr(0, i)];
                if (data && typeof index != 'undefined') data = data[index];
                if (data) {
                    var result = {
                        query: q,
                        html: '',
                        itemsCount: 0
                    };
                    if (data.itemsCount == 0) return result;
                    fMatchCache = (data.itemsCount < this.loader.getMaxItemsCount(index));
                    if (this.options.matchSubset && fMatchCache) {
                        var elements = $(data.html);
                        elements.find('.js_suggestion_text').not(":contains('" + q + "')").closest('li').remove();
                        result.itemsCount = elements.find('.js_suggestion_text').length;
                        if (result.itemsCount != 0) {
                            result.html = $('<div>').append(elements).html();
                        }
                        this.addToCache(q, result, index);
                        return result;
                    }
                }
            }
            return null;
        },
        'autoFill': function(sValue) {
            if (this.lastKeyPressCode != HP.Keys.BACKSPACE) {
                this.element.val(this.element[0].value + sValue.substring(this.prevValue.length));
                this.createSelection(this.prevValue.length, sValue.length);
            }
        },
        'createSelection': function(start, end) {
            var field = this.element[0];
            if (field.createTextRange) {
                var selRange = field.createTextRange();
                selRange.collapse(true);
                selRange.moveStart("character", start);
                selRange.moveEnd("character", end);
                selRange.select();
            } else if (field.setSelectionRange) {
                field.setSelectionRange(start, end);
            } else {
                if (field.selectionStart) {
                    field.selectionStart = start;
                    field.selectionEnd = end;
                }
            }
            field.focus();
        },
        '_updateList': function(e) {
            var keyCode = HP.Keys;
            if (e.keyCode == keyCode.SHIFT || e.keyCode == keyCode.CAPS_LOCK || e.keyCode == keyCode.CONTROL || e.keyCode == keyCode.ALT || e.keyCode == keyCode.LEFT || e.keyCode == keyCode.RIGHT) {
                return;
            }
            if (this.timeout) clearTimeout(this.timeout);
            var self = this;
            this.timeout = setTimeout(function() {
                if (self.element[0].value.length >= self.options.minChars) {
                    if (self.options.loadingClass)
                        self.element.addClass(self.options.loadingClass);
                    self._onChange(self.element[0].value);
                } else if (self.popup) {
                    if (self.options.loadingClass)
                        self.element.removeClass(self.options.loadingClass);
                    self.popup.hide();
                }
                self._keydown = false;
            }, this.options.delay);
        },
        'submitForm': function(itemEl) {
            var jumpID = null,
                index = -1;
            if (itemEl !== undefined && itemEl !== null) {
                index = $(itemEl).parents('ul').parent().data('index') || 0;
            }
            if (index >= 0) {
                var siteName = $(itemEl.closest('div')).find('.ac_title').text() == "HP Store" ? "st" : "hp";
                jumpID = this.loader.getJumpID(index, siteName);
                this.setJumpID(jumpID);
                this.enableJumpID();
            }
            if (index > 0 && (url = this.loader.getActionUrl(index))) {
                location.href = this.evalString(url, {
                    term: this.element.val(),
                    client: (HP.SearchWidget ? this.searchForm.find("input[name=client]").val() : '')
                }) + "&jumpID=" + jumpID;
            } else {
                this.searchForm.trigger('submitSearchForm', {
                    initiator: "autocomplete",
                    target: this.element[0]
                });
                this.searchForm.find("button[type=submit]").click();
            }
            this.disableJumpID();
        },
        'setJumpID': function(jumpID) {
            this.jumpIDInput.val(jumpID);
        },
        'enableJumpID': function() {
            this.jumpIDInput.removeAttr('disabled');
        },
        'disableJumpID': function() {
            this.jumpIDInput.attr('disabled', 'disabled');
        },
        'hasFocus': function() {
            return this.element.hasClass(this.options.inputActiveClass);
        },
        'keydown': function(elements, e) {
            var keyCode = HP.Keys;
            this.lastKeyPressCode = e.keyCode;
            this._keydown = true;
            switch (e.keyCode) {
                case keyCode.BACKSPACE:
                    if (elements[0] != this.element[0]) {
                        e.preventDefault();
                        this.element[0].focus();
                    }
                    this.toggleClearBtn();
                    this.toggleSubmitButton();
                    this._updateList(e);
                    break;
                case keyCode.UP:
                    e.preventDefault();
                    if (this.popup) this.element.val(this.popup.moveSelect(-1));
                    break;
                case keyCode.DOWN:
                    e.preventDefault();
                    if (this.popup) this.element.val(this.popup.moveSelect(1));
                    break;
                case keyCode.ESCAPE:
                    if (this.popup) this.popup.hide();
                    this.element.focus();
                    e.preventDefault();
                    this.element.val(this.openValue);
                    break;
                case keyCode.TAB:
                    if (this.popup) this.popup.hide();
                    break;
                case keyCode.ENTER:
                    if (this.popup) {
                        var el = this.popup.getSelectedElement();
                        this.popup.hide();
                        this.submitForm(el);
                    } else {
                        this.element.val() == "" ? "" : this.submitForm(el);
                    }
                    this.element.focus();
                    e.preventDefault();
                    break;
                default:
                    this.toggleClearBtn();
                    this._updateList(e);
                    break;
            }
        },
        'keyup': function(element) {
            this.toggleSubmitButton();
        },
        "toggleSubmitButton": function(element) {
            this.options.submitBtn = this.element.nextAll(".searchSubmit");
            if (this.element.val().length > 0) {
                $(this.options.submitBtn).prop('disabled', false);
                window.isIE8 ? this.options.submitBtn.removeClass('disabled') : "";
            } else if (this.element.val().length == 0) {
                $(this.options.submitBtn).prop('disabled', true);
                window.isIE8 ? this.options.submitBtn.addClass('disabled') : "";
            }
        },
        'toggleClearBtn': function() {},
        'focus': function(elements, e) {
            this.element.addClass(this.options.inputActiveClass);
            if (window.isiOS) $(document).on("touchstart", this.removeFocusOnBodyClickHandler);
        },
        'blur': function(elements, e) {
            this.element.removeClass(this.options.inputActiveClass);
            if (!this.popup || (this.popup && !this.popup.isVisible())) {
                this.element.triggerHandler("inactive");
            }
            if (this.timeoutDropdown) clearTimeout(this.timeoutDropdown);
            var self = this;
            this.timeoutDropdown = setTimeout(function() {
                if (self.popup && !self.hasFocus() && !self.popup.hasFocus()) {
                    if (self.timeout) clearTimeout(self.timeout);
                    self.popup.hide();
                }
            }, this.options.delay);
            if (window.isiOS) $(document).off("touchstart", this.removeFocusOnBodyClickHandler);
        },
        'removeFocusOnBodyClick': function(e) {
            if (e.target != this.element[0] && this.element.is(":focus")) {
                this.element.blur();
            }
        },
        '{document} .ac_results a mouseenter': function(elements, e) {
            if ($('.landing-result').find('.search-ac-results').is(':visible')) return;
            this.element.focus();
        },
        '{document} .ac_results a click': function(elements, e) {
            if (elements.closest('.landing-result').length) {
                launchSearchButton(e, "search_box");
                return;
            }
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
                e.stopImmediatePropagation();
                e.preventDefault();
                $('.ac_results').show();
                this.submitForm(elements);
            } else {
                this.element.focus();
                if (this.popup) this.submitForm(elements);
            }
        },
        '{document} .ac_results a blur': function(elements, e) {
            if (this.popup) this.popup.focusOut(elements);
            this.blur(elements, e);
        },
        '{document} .ac_results hide': function() {
            if (!this.hasFocus()) {
                this.element.triggerHandler("inactive");
            }
        }
    });
    HP.HFAutocomplete = HP.AC({
        defaults: {
            submitBtn: null
        }
    }, {
        'init': function(element, options) {
            this.options.submitBtn = this.element.nextAll("button[type=submit]");
            this.options.clearBtn = this.element.nextAll(".searchClear");
            this.container = this.element.parents('.search_container');
            this.resultsContainer = this.container;
            this.clickedEle = false;
            this.on();
            this._super();
        },
        'toggleClearBtn': function() {
            if (this.options.clearBtn) {
                if (this.timeoutClearBtn) clearTimeout(this.timeoutClearBtn);
                var self = this;
                this.timeoutClearBtn = setTimeout(function() {
                    if (self.hasFocus()) {
                        var valueLength = self.element[0].value.length;
                        var isBtnVisible = self.options.clearBtn.is(":visible");
                        if (valueLength > 0 && !isBtnVisible) self.options.clearBtn.show();
                        if (valueLength == 0 && isBtnVisible) self.options.clearBtn.hide();
                    }
                }, this.options.delay);
            }
        },
        '{clearBtn} click': function(e) {
            this.element.val('');
            this.toggleClearBtn();
            this.toggleSubmitButton();
            if (this.popup) this.popup.hide();
            this.element.focus();
        },
        '{clearBtn} blur': function() {
            var self = this;
            this.setTimeoutDropdown(function() {
                if ((!self.popup || (self.popup && !self.popup.isVisible())) && !self.hasFocus() && !self.options.submitBtn.is(":focus")) {
                    self.element.triggerHandler("inactive");
                    self.options.clearBtn.hide();
                }
            });
        },
        '{submitBtn} blur': function() {
            var self = this;
            this.setTimeoutDropdown(function() {
                if ((!self.popup || (self.popup && !self.popup.isVisible())) && !self.hasFocus() && (!self.options.clearBtn || (self.options.clearBtn && !self.options.clearBtn.is(":focus")))) {
                    self.element.triggerHandler("inactive");
                    if (self.options.clearBtn) self.options.clearBtn.hide();
                }
            });
        },
        '{document} mousedown': function(element, e) {
            var self = this;
            if (e.target == $('.header')[0] || e.target == $('.hf_wrapper')[0] || e.target == $('.header_container') || e.target == $('.background')[0] || e.target == $('button.searchSubmit[disabled]')[0]) {
                self.clickedEle = true;
            } else {
                self.clickedEle = false;
            }
        },
        'blur': function(elements, e) {
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
                e.stopImmediatePropagation();
                e.preventDefault();
                if (window.isiOS) $(document).off("touchstart", this.removeFocusOnBodyClickHandler);
            } else {
                this.element.removeClass(this.options.inputActiveClass);
                var self = this;
                ((isIE || isIE11) && $('button.searchSubmit[disabled]')[0]) ? this.element.focus(): "";
                this.setTimeoutDropdown(function() {
                    var options = self.options,
                        clearBtn = options.clearBtn,
                        popup = self.popup;
                    if (popup && !self.hasFocus() && !popup.hasFocus()) {
                        if (self.timeout) clearTimeout(self.timeout);
                        popup.hide();
                    }
                    if (!window.isiOS && (!popup || (popup && !popup.isVisible())) && !options.submitBtn.is(":focus") && !($('.js_search_trigger').is(":focus")) && (!clearBtn || (clearBtn && !clearBtn.is(":focus"))) && $('.search_block').attr('data-state') != "closed" && !window.stickySearchBox) {
                        if (self.clickedEle == false) {
                            self.element.triggerHandler("inactive");
                        }
                    }
                    if (clearBtn && !clearBtn.is(":focus") && (popup && !popup.hasFocus())) {
                        self.element.val() != "" ? "" : clearBtn.hide();
                    }
                });
            }
        },
        'focus': function(elements, e) {
            this._super();
        },
        'setTimeoutDropdown': function(fn) {
            if (this.timeoutDropdown) clearTimeout(this.timeoutDropdown);
            this.timeoutDropdown = setTimeout(fn, this.options.delay);
        },
        'removeFocusOnBodyClick': function(e) {
            if (!window.stickySearchBox && $('.search_block').attr('data-state') === 'open') {
                if (e.target != $('#searchBox')[0] && e.target != this.options.clearBtn[0] && e.target != this.options.submitBtn[0] && $(e.target).parent()[0] != $('.header')[0] && e.target != $('.js_search_trigger')[0] && !$(e.target).parents("." + this.options.resultsStyleClass)[0] && e.target != $('.hf_wrapper')[0] && e.target != $('.header_container')[0]) {
                    $('#searchBox').triggerHandler('inactive');
                }
            }
        },
        '{document} .ac_results hide': function() {
            if (!this.hasFocus() && !this.options.submitBtn.is(":focus")) this.element.triggerHandler("inactive");
        }
    });
})(can.$, can, window.HF || (window.HF = {}));

function initContextualSearch() {
    var contextSearchMeta = can.$("meta[name = search_context]"),
        searchForm = can.$("#searchHP");
    if (contextSearchMeta[0] && searchForm[0]) {
        var contextSearchInput = can.$("<input type='hidden' name='search_context' value='" + contextSearchMeta.attr("content") + "'/>");
        searchForm.prepend(contextSearchInput);
    }
}

function trackHFMetrics(link_metrics, lPlacement) {
    if (!link_metrics.attr('name')) return;
    try {
        if (typeof window.dataLayer == 'object' && typeof window.dataLayer.length == 'number') {
            dataLayer.push({
                event: 'e_linkClick',
                linkPlacement: lPlacement,
                linkID: link_metrics.attr('name')
            });
        }
        trackMetrics("global-inav", {
            link_id: link_metrics.attr('name')
        });
    } catch (err) {}
}

function initHFMetrics(metrics_class) {
    can.$(".header").on("click", metrics_class, function() {
        trackHFMetrics(can.$(this), "header");
    });
    can.$(".footer").on("click", metrics_class, function() {
        trackHFMetrics(can.$(this), "footer");
    });
}
(function($, can, HP, params) {
    HP.Switcher = can.Control({
        defaults: {
            open: 0,
            noContentClass: '',
            hideDelay: 0,
            showDelay: 0,
            eventName: 'click',
            toggleSelected: false,
            autoHideItems: true,
            triggerActiveClass: 'open',
            targetActiveClass: '',
            targets: null,
            onShow: null,
            onHide: null,
            onInit: null,
            fxShow: {
                effect: 'show',
                duration: 0,
                easing: null,
                onComplete: null
            },
            fxHide: {
                effect: 'hide',
                duration: 0,
                easing: null,
                onComplete: null
            }
        },
        vars: {
            selectedIndex: -1,
            prevIndex: -1
        }
    }, {
        'init': function(element, options) {
            if (this.options.targets.hasClass('level2')) {
                this.options.targets.attr("data-state", "closed");
            } else {
                this.options.targets.hide();
            }
            this.show(this.options.open, true);
            if (this.options.onInit) this.options.onInit(this);
        },
        '{eventName}': function(trigger, e) {
            if (this.options.noContentClass == '' || !trigger.hasClass(this.options.noContentClass)) {
                var index = this.element.index(trigger[0]);
                if (index > -1) {
                    var isVisible = this.options.targets.eq(index).hasClass('level2') ? this.options.targets.eq(index).attr('data-state') == 'open' : this.options.targets.eq(index).is(':visible');
                    if (!isVisible) {
                        if (this.options.autoHideItems) this.hide();
                        this.show(index);
                    } else if (this.options.toggleSelected) {
                        if (this.prevIndex == index && this.options.targets.eq(index).is(':animated')) {
                            this.options.targets.eq(index).hide();
                            this.show(index);
                        } else {
                            this.hide(index);
                        }
                    }
                }
            }
        },
        'show': function(index, withoutAnimation) {
            var el;
            if (typeof index == 'number' && index > -1) {
                this.prevIndex = this.selectedIndex;
                el = this.options.targets.eq(index);
                el.addClass(this.options.triggerActiveClass).attr('data-state', 'open');
                this.options.triggerActiveClass && this.element.eq(index).addClass(this.options.triggerActiveClass);
                this.options.targetActiveClass && el.addClass(this.options.targetActiveClass);
                this.selectedIndex = index;
                if (withoutAnimation) {
                    el.show();
                } else {
                    HP.Control.show(el, this.options);
                }
            }
        },
        'hide': function(index) {
            var el;
            this.prevIndex = (typeof index == 'number' && index > -1) ? index : this.selectedIndex;
            if (this.prevIndex > -1) {
                el = this.options.targets.eq(this.prevIndex);
                this.options.triggerActiveClass && this.element.eq(this.prevIndex).removeClass(this.options.triggerActiveClass);
                this.options.targetActiveClass && el.removeClass(this.options.targetActiveClass);
                this.selectedIndex = -1;
                el.hasClass('level2') ? el.removeClass(this.options.triggerActiveClass).attr('data-state', 'closed') : HP.Control.hide(el, this.options);
                el.hasClass('ul_site_links') ? el.removeClass(this.options.triggerActiveClass).attr('data-state', 'closed') : '';
            }
        }
    });
    HP.Accordion = HP.Switcher({
        defaults: {
            open: -1,
            noContentClass: 'no_items',
            toggleSelected: true,
            fxShow: {
                effect: 'slideDown',
                duration: 500,
                easing: null,
                onComplete: null
            },
            fxHide: {
                effect: 'slideUp',
                duration: 500,
                easing: null,
                onComplete: null
            }
        }
    }, {
        'init': function(element, options) {
            this._super();
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.TopMenu = HP.Popup({
        defaults: {
            activeClass: 'expanded',
            parentActiveClass: 'selected',
            triggerSelector: 'a',
            targetSelector: '.js_hf_menu',
            onInit: HP.Accessibility.TopMenu,
            itemSelector: '.js_item',
            hideDelay: 100,
            subItemOptions: {
                addToPopupManager: false,
                hideDelay: 0,
                hideEvent: '',
                triggerSelector: 'a',
                targetSelector: '.js_hf_menu',
                onInit: HP.Accessibility.TopMenu,
                isSubMenu: true
            }
        },
        vars: {
            items: []
        }
    }, {
        'init': function(element, options) {
            this.options.triggerEl = this.element.children(this.options.triggerSelector);
            this.element = this.options.triggerEl.next(this.options.targetSelector);
            var itemNumber = $(element).attr("class").match(/menu-(\d*)/)[1];
            var l1Link = $('.menu-' + itemNumber + ' > a').attr('href');
            if (l1Link != 'javascript:void(0);') {
                $('.submenu-' + itemNumber + '.hasLink .first_li').remove();
            }
            this.subMenuMouseEvents();
            var self = this;
            var timer, delayHover = 200,
                delayOut = 400;
            if (!$('.submenu-category').children().length) {
                $('.submenu-category').hide();
            } else {
                $('.submenu-category').show();
                $('.submenu-category').children().show();
            }
            window.isIE8 ? $('.imgItem a').children('img:nth-child(2)').css('display', 'none') : "";
            $(element).on('touchstart mouseenter', function(e) {
                var thisEvent = $(this);
                if (thisEvent.children('a').attr('href') != 'javascript:void(0);' && window.isTouchDevice && e.type !== 'mouseenter') {
                    window.location.href = thisEvent.children('a').attr('href');
                    return false;
                }
                if ($(this).attr('data-state') === 'active') {
                    timer = setTimeout(function() {
                        self.submenuClose();
                    }, delayHover);
                } else {
                    if ($('.submenu').attr('data-state') === 'open' || (window.isIE8 && $('submenu').hasClass('hf-menu-open'))) {
                        if ($('.submenu-' + itemNumber).attr('data-state') === 'visible' || (window.isIE8 && $('submenu').hasClass('hf-menu-visible'))) {
                            return;
                        } else {
                            timer = setTimeout(function() {
                                self.submenuHideAll();
                                $('.submenu-' + itemNumber).attr('data-state', 'visible').addClass('hf-menu-visible');
                                $(element).addClass('selected');
                            }, delayHover);
                        }
                    } else {
                        timer = setTimeout(function() {
                            window.stickySearchBox && (window.isIE || window.isIE11) ? $('#searchBox').blur() : "";
                            if ($('.search_block').attr('data-state') == 'open') {
                                $('#searchBox').triggerHandler('inactive');
                            }
                            if (!$($('.submenu-' + itemNumber)).hasClass('inactive-menu')) {
                                self.submenuHideAll();
                                $('.submenu-' + itemNumber).attr('data-state', 'visible').addClass('hf-menu-visible');
                                self.submenuOpen();
                            }
                        }, delayHover);
                    }
                }
            }).on('mouseleave', function(e) {
                clearTimeout(timer);
            });
            $('.empty, .inactive-menu').hover(function() {
                timer = setTimeout(function() {
                    self.submenuClose();
                }, delayHover);
            }, function() {
                clearTimeout(timer);
            });
            $('.header').hover(function() {
                clearTimeout(timer);
            }, function() {
                timer = setTimeout(function() {
                    self.submenuClose();
                }, delayOut);
            });
            $(document).on('touchstart', function(event) {
                if (!$(event.target).closest('.submenu').length && $('.submenu').attr('data-state') == 'open') {
                    $('.submenu').attr('data-state', 'close');
                    $('.submenu .js_hf_menu').attr('data-state', 'hidden');
                    $('.js_hf_menu.hf_menu .selected').removeClass('selected');
                }
            });
            this.on();
            this._super();
        },
        'hide': function() {
            this.hideSubItems();
            this.element.trigger("MenuPopup:hide");
            this._super();
        },
        'show': function() {
            this.element.trigger("MenuPopup:show");
            this._super();
        },
        'hideSubItems': function() {
            $(this.items).each(function(i, item) {
                if (this.isOpen()) item.hide();
            });
        },
        'submenuOpen': function() {
            $('.submenu').attr('data-state', 'open').addClass('hf-menu-open');
            $('.submenu').attr('aria-hidden', false);
            this.element.parent().addClass('selected');
        },
        'submenuClose': function() {
            $('.submenu').attr('data-state', 'closed').removeClass('hf-menu-open');
            $('.submenu').attr('aria-hidden', true);
            this.element.parent().removeClass('selected');
        },
        'submenuHideAll': function() {
            $('.submenu ul').attr('data-state', 'hidden').removeClass('hf-menu-visible');
            this.element.parent().parent().find('.selected').removeClass('selected');
        },
        'subMenuMouseEvents': function() {
            $('.level1 li>a, .submenu li>a').on('focus', function() {
                $(this).keyup(function(e) {
                    var code = (e.keyCode ? e.keyCode : e.which);
                    if (code == 9) {
                        $(this).removeClass('no-outline')
                    }
                });
            });
            $('.level1 li>a, .submenu li>a').on('mousedown mouseout', function() {
                $(this).hasClass('no-outline') ? "" : $(this).addClass('no-outline');
            });
            $('.submenu .imgItem a, .submenu-category .imgItem a').on('mouseover', function(e) {
                $(this).find('img:nth-child(2)').css({
                    'display': 'block'
                });
                $(this).find('img:first-child').css({
                    'display': 'none'
                });
            }).on('mouseout', function(e) {
                $(this).find('img:nth-child(2)').css({
                    'display': 'none'
                });
                $(this).find('img:first-child').css({
                    'display': 'block'
                });
            });
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.TopMenuWidget = HP.Popup({
        defaults: {
            onInit: HP.Accessibility.TopMenuAccordionPopup,
            showEvent: 'click',
            hideEvent: 'click',
            hideDelay: 0,
            showKeys: [13],
            hideKeys: [27]
        },
        vars: {
            header: null,
            topMenuAccordionElement: null
        }
    }, {
        'init': function(element, options) {
            this.options.parent = this.element;
            this.element = element.find('.js_top_menu_target');
            this.options.triggerEl = element.find('.js_top_menu_trigger');
            this.options.topMenu = this.element.find('.hf_top_menu');
            this.header = $(".header");
            $(this.element).attr('data-state', 'closed');
            this.options.topMenu.css('visibility', 'hidden');
            if (window.isiOS) this.element.addClass("iOS");
            $('.top_menu_widget_accordion .selectable > a').attr('href', 'javascript:void(0);');
            this.topMenuAccordionElement = new HP.TopMenuResponsiveAccordion(this.element, {
                onInit: HP.Accessibility.TopMenuAccordion
            });
            this["{window} resolutionChanged"]();
            this.screenReadingEl = this.options.triggerEl.find('.js_screen_reading');
            this.triggerTitle = this.options.triggerEl.attr('title');
            this.showLabel = SCREENREADING_LABELS['open_popup_prefix'] + this.triggerTitle;
            this.hideLabel = SCREENREADING_LABELS['close_popup_prefix'] + this.triggerTitle;
            $(this.screenReadingEl).text(this.showLabel);
            this.on();
        },
        'show': function() {
            $("html,body").attr("data-state", "no-scroll");
            if (HP.Responsive.currentResolution <= HP.BreakPoints.TABLET2) {
                this.addActiveClass();
            }
            $('.js_top_menu_target').attr('data-state', 'open');
            $(this.screenReadingEl).text(this.hideLabel);
            this.options.topMenu.css('visibility', 'visible');
            this.element.find('.js_hf_menu.level1').find('a:first').focus();
            this._super();
        },
        'hide': function() {
            var self = this;
            if (this.topMenuAccordionElement.openState) this.topMenuAccordionElement.hide();
            self.removeActiveClass();
            $("html, body").attr("data-state", "");
            $('.js_top_menu_target').attr('data-state', 'closed');
            $(this.screenReadingEl).text(this.showLabel);
            this.options.topMenu.css({
                'visibility': 'hidden',
                'transition': 'visibility 0.6s'
            });
            this._super();
        },
        'addActiveClass': function() {
            this.header.addClass("top_menu_active");
        },
        'removeActiveClass': function() {
            this.header.removeClass("top_menu_active");
        },
        '{triggerEl} {keyEvent}': function(el, e) {
            e.which == 27 ? this.hide() : "";
        },
        '{window} resolutionChanged': function() {
            if (HP.Responsive.currentResolution == HP.BreakPoints.DESKTOP) {
                this.hide();
                this.removeActiveClass();
                return;
            } else {
                if (this.element.parent()[0] != this.header[0]) {
                    $("[name=skiptobody]").before(this.element);
                    this.element.css("position", "relative");
                    if (this.element.attr("data-state") == "open") {
                        this.addActiveClass()
                    };
                }
            }
        }
    });
    HP.TopMenuResponsiveAccordion = can.Control({
        defaults: {
            toggleEvent: 'click',
            triggerSelector: '.selectable > a',
            subItemsTriggerSelector: '.js_item:has(".js_hf_menu")  a',
            targetSelector: '.js_hf_menu',
            onInit: null
        },
        vars: {
            accordions: [],
            openState: false
        }
    }, {
        'init': function(element, options) {
            this.options.triggerEl = this.element.find(this.options.triggerSelector);
            this.options.targetEl = this.options.triggerEl.next(this.options.targetSelector);
            var self = this;
            this.accordions.push(new HP.Accordion(this.options.triggerEl, {
                targets: this.options.targetEl
            }));
            this.viewportHeight();
            this["{window} resize"]();
            this.on();
            if (typeof this.options.onInit == 'function') this.options.onInit(this);
            var scrollBarWidth = self.getScrollBarWidth();
            var ww = $(window).width() + scrollBarWidth;
            var showArrow = true;
            var element = $('.submenu-category ul');
            var elementPadding = HP.BreakPoints.MOBILE2 == HP.Responsive.currentResolution ? 50 : 80;
            if (ww <= 999) {
                if ($(element).prop('scrollWidth') + elementPadding < ww) {
                    self.noSwipe();
                } else {
                    self.swipe();
                }
            }
            if ($('html').attr('dir') == 'rtl') {
                $('.swiper').attr("dir", "rtl");
            }
            $(window).on('resize', function(event) {
                var ww = $(window).width() + scrollBarWidth;
                if (ww <= 999) {
                    if ($(element).prop('scrollWidth') + elementPadding < ww) {
                        self.noSwipe();
                    } else {
                        self.swipe();
                    }
                }
                if (ww > 999) {
                    self.noSwipe();
                }
            });
            $('.header .submenu-category ul').on({
                'touchstart': function() {
                    if (showArrow) {
                        $(".submenu-category .hf-arrow").css("display", "none");
                        $(".submenu-category").css("padding", 0);
                        $(".submenu-category ul li:first-child").css("margin-left", "25px");
                        showArrow = false;
                    }
                }
            });
            $(window).on('orientationchange', function() {
                if (window.isiOS) self.accordionHeight();
            });
        },
        '{triggerEl} {toggleEvent}': function(target, event) {
            this.closeAccordions(true);
            this.scrollToTop();
            this.openState = target.hasClass('open');
        },
        'closeAccordions': function(skipFirst) {
            $.each(this.accordions, function(index, accordion) {
                if (!skipFirst || index) accordion.hide();
            });
        },
        'scrollToTop': function() {
            $('html, body').animate({
                scrollTop: this.element.parents('.header').offset().top + 'px'
            }, 'fast');
        },
        'hide': function() {
            this.closeAccordions();
        },
        '{window} resize': function() {
            this.viewportHeight();
        },
        'viewportHeight': function() {
            var bannerHeight = $('#cookie_privacy_holder').height() + $('#company-notification').height() + $('#notice_holder').height();
            var body = document.body,
                html = document.documentElement;
            var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            $('.top_menu_widget_accordion').height(height - ($('.header_container').height() + bannerHeight));
            $('.top_menu_widget_accordion .hf_top_menu').height($(window).height() - ($('.header_container').height() + bannerHeight));
            if (window.isiOS) this.accordionHeight();
        },
        'getScrollBarWidth': function() {
            var outer = $('<div>').css({
                    visibility: 'hidden',
                    width: 100,
                    overflow: 'scroll'
                }).appendTo('body'),
                widthWithScroll = $('<div>').css({
                    width: '100%'
                }).appendTo(outer).outerWidth();
            outer.remove();
            return 100 - widthWithScroll;
        },
        'noSwipe': function() {
            $(".submenu-category > div").removeClass('hf-swiper-container');
            $(".submenu-category > div > ul").removeClass('hf-swiper-wrapper');
            $(".submenu-category > div > ul > li").removeClass('hf-swiper-slide');
            $('.level2 > ul').removeAttr('style');
            $(".submenu-category .hf-arrow").remove();
            $('.level2 > ul').children().removeAttr('style');
        },
        'swipe': function() {
            if (!$(".submenu-category > div").hasClass("hf-swiper-container")) {
                $(".submenu-category > div").addClass('hf-swiper-container');
                $(".submenu-category > div > ul").addClass('hf-swiper-wrapper');
                $(".submenu-category > div > ul > li").addClass('hf-swiper-slide');
                $(".hf-swiper-wrapper").after('<div class="hf-arrow hf-swiper-button-prev"></div> <div class="hf-arrow hf-swiper-button-next"></div>');
            }
            var swiper = new Swiper('.hf-swiper-container', {
                nextButton: '.hf-swiper-button-next',
                prevButton: '.hf-swiper-button-prev',
                wrapperClass: 'hf-swiper-wrapper',
                slideClass: 'hf-swiper-slide',
                buttonDisabledClass: 'hf-swiper-button-disabled',
                freeMode: true,
                slidesPerView: 'auto'
            });
        },
        'accordionHeight': function() {
            var bannerHeight = $('#cookie_privacy_holder').height() + $('#company-notification').height() + $('#notice_holder').height();
            $('body').height($(window).height() - (bannerHeight));
        },
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.ShoppingCart = HP.Popup({
        defaults: {
            triggerActiveClass: "shopping_over",
            closeButton: ".hf_close_btn",
            showEvent: "click",
            hideEvent: "click",
            hideDelay: 100,
            hideKeys: [27],
            onInit: HP.Accessibility.Popup,
            notEmptyCartClass: "hf_cart_not_empty",
            loadingClass: "hf_loading",
            cartCount: ".item_count",
            cartContent: ".widget_content",
            animationDuration: 300,
            dataAttr: null,
            lang: null,
            showMiniCart: false,
            API: {
                script: "",
                loader: ""
            }
        },
        vars: {
            count: null,
            content: null,
            shadow: null,
            cartLoader: null,
            hasContent: false
        }
    }, {
        "init": function(element, options) {
            var self = this;
            this.cartLoader = window[this.options.API.loader];
            this.count = this.element.find(this.options.cartCount);
            this.options.triggerEl = this.element.find('.js_shopping_trigger');
            this.options.lang = this.options.triggerEl.attr("data-lang");
            this.options.dataAttr = this.options.triggerEl.attr("data-href");
            this.element = this.element.find('.js_shopping_target');
            this.content = this.element.find(this.options.cartContent);
            this.shadow = this.element.find('.shadow_cover_top');
            this["{window} resolutionChanged"]();
            if (this.cartLoader) {
                this.spooler = this.element.find('#sw_spooler');
                this.element.append(this.spooler);
                this.on();
                this._super();
                this.retrieveStatus();
                if (this.openState) this.retrieveContent();
            } else {
                var lang = this.options.lang.split('-'),
                    countryCode = lang[1].toUpperCase(),
                    languageCode = lang[0],
                    cookieName = 'HFCartQty_' + countryCode,
                    cookieValue = HP.Utils.getCookie(cookieName);
                if (this.options.dataAttr != "" || cookieValue != "") {
                    if (this.options.dataAttr != "") {
                        this.retrieveCartCountViaService(this.options.dataAttr);
                    } else {
                        this.retrieveCartCountViaCookie(cookieValue);
                    }
                } else {}
                HP.Accessibility.shoppingCartIcon(this);
            }
        },
        "retrieveCartCountViaService": function(url) {
            var self = this;
            cartStatus = function(response) {
                self.setCount(response);
            };
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                async: true,
                url: url,
                success: function(response) {}
            });
        },
        "retrieveCartCountViaCookie": function(val) {
            var self = this;
            if (val) {
                self.setCount(val);
            }
        },
        "setCount": function(cartStatus) {
            var hasItemsClass = this.options.notEmptyCartClass,
                val, cartItems;
            if (this.cartLoader) {
                val = cartStatus ? parseInt(cartStatus.count || 0, 10) : 0;
            } else {
                if (this.options.dataAttr) {
                    var val = cartStatus ? parseInt(cartStatus.noOfItems || 0, 10) : 0;
                } else {
                    var val = cartStatus ? cartStatus : 0;
                }
            }
            cartHasItems = parseInt(val || 0, 10) > 0;
            this.count.toggleClass(hasItemsClass, cartHasItems);
            this.element.toggleClass(hasItemsClass, cartHasItems);
            this.count.text(val || "");
            return this;
        },
        "retrieveStatus": function() {
            this.cartLoader.retrieveStatus({
                setStatus: $.proxy(this.setCount, this)
            });
        },
        "retrieveContent": function() {
            var self = this,
                options = this.options,
                loadingClass = options.loadingClass;
            if (!this.hasContent) {
                this.element.addClass(loadingClass);
                this.cartLoader.retrieveContents({
                    setContents: function(html) {
                        self.content.html(html);
                        self.element.removeClass(loadingClass);
                    }
                });
                this.hasContent = true;
            }
            return self;
        },
        "show": function() {
            if (!this.hasContent) this.element.addClass(this.options.loadingClass);
            this._super();
            this.element.triggerHandler("show:complete");
            return this;
        },
        "show:complete": "retrieveContent",
        "mouseleave": "onMouseLeave",
        "{triggerEl} mouseenter": "onMouseEnter",
        "{triggerEl} mouseleave": "onMouseLeave",
        "{triggerEl} {showEvent}": function() {
            if (this.cartLoader && this.options.showMiniCart) {
                this.show();
            }
        },
        "onMouseEnter": function() {
            if (this.cartLoader && this.options.showMiniCart) {
                this._onShow();
            }
        },
        "onMouseLeave": function() {
            this._onHide();
        },
        "{closeButton} click": "hide",
        "{window} resolutionChanged": function() {
            this.options.showMiniCart = HP.Responsive.currentResolution > HP.BreakPoints.TABLET1;
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.CountrySelector = HP.Popup({
        defaults: {
            spoolerSelector: '#cs_spooler',
            triggerActiveClass: 'cs_selected',
            contentClass: '.js_worldmap_wrapper',
            requestType: 'html',
            url: '',
            showEvent: 'click',
            hideEvent: 'click',
            hideDelay: 0,
            onInit: HP.Accessibility.CountrySelector
        },
        vars: {
            colNumber: 7
        }
    }, {
        'init': function(element, options) {
            this.csWrapper = element;
            this.element = element.find('.js_cselector_target');
            this.options.triggerEl = element.find('.js_cselector_trigger');
            this._updateCountriesColumns();
            this.on();
            this._super();
        },
        'a.cselectorbtn keydown': function(elements, e) {
            if (e.which == '9' && !e.shiftKey) {
                e.preventDefault();
                this.hide();
                this.options.triggerEl.focus();
            }
        },
        'a.cselectorbtn click': function(elements, e) {
            this.hide();
            this.options.triggerEl.focus();
        },
        '{triggerEl} click': function(elements, e) {
            e.preventDefault();
        },
        '{triggerEl} keydown': function(elements, e) {
            if (e.shiftKey && e.which == "9") {
                this.hide();
            }
        },
        '_updateCountriesColumns': function(colNumber) {
            colNumber = colNumber || this.colNumber;
            var countryEls = this.element.find('.country_holder li');
            var countryElWidth = countryEls.outerWidth();
            this.colNumber = colNumber;
            var lineNumber = Math.ceil(countryEls.length / colNumber);
            var col = 1;
            var prevColHeight = 0;
            var marginTop;
            countryEls.each(function(index, el) {
                el = $(el);
                marginTop = '';
                if (index == lineNumber * col) {
                    col++;
                    marginTop = -prevColHeight + 'px';
                    prevColHeight = 0;
                }
                prevColHeight += el.outerHeight();
                el.css(rtl ? 'margin-right' : 'margin-left', countryElWidth * (col - 1) + 'px');
                el.css('margin-top', marginTop);
            });
        },
        'show': function() {
            this._super();
            if (isIE7 || isIE6 || isOpera || document.documentMode == 7) this.csWrapper.css("position", "relative");
            if (HP.Responsive !== undefined) {
                if (HP.Responsive.currentResolution > HP.BreakPoints.TABLET2) this._updateCountriesColumns();
            } else {
                this._updateCountriesColumns();
            }
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.CountrySelectorResponsive = can.Control({
        defaults: {
            fxShow: {
                effect: 'animate',
                styles: null,
                duration: 300,
                easing: null,
                onComplete: null
            },
            fxHide: {
                effect: 'animate',
                styles: {},
                duration: 300,
                easing: null,
                onComplete: null
            }
        },
        vars: {
            contentUpdated: false,
            scrollX: 0,
            isOpen: false,
            pageScrollTop: 0,
            animationStyleName: 'margin-left'
        }
    }, {
        'init': function(element, options) {
            this.csWrapper = element;
            this.element = element.find('.js_cselector_target');
            this.options.triggerEl = element.find('.js_cselector_trigger');
            this._createMobileCountries();
            this.element.on('show', $.proxy(this.show, this));
            this.element.on('hide', $.proxy(this.hide, this));
            if (isiOS) {
                $(window).on('orientationchange', $.proxy(this['{window} resize'], this));
            }
            this.csWrapper.append('<div class="right_corner">&#160;</div>');
            this.element.prepend('<div class="shadow_cover_top">&#160;</div>');
            this.element.append('<div class="shadow_cover_bottom">&#160;</div>');
            var self = this;
            this.options.fxHide.onComplete = function() {
                self.csWrapper.removeClass('responsive');
                self.clearStyles();
                self.element.hide();
            }
            if (window.rtl) this.animationStyleName = 'margin-right';
            this.options.fxHide.styles[this.animationStyleName] = 0;
            if (isTouchDevice) {
                var self = this,
                    startPosX = 0,
                    startPosY = 0;
                if (ltAndroid24) {
                    var scrollStartPos = 0;
                    this.element.on({
                        "touchstart": function(event) {
                            scrollStartPos = this.scrollTop + event.originalEvent.touches[0].pageY;
                        },
                        "touchmove": function(event) {
                            this.scrollTop = scrollStartPos - event.originalEvent.touches[0].pageY;
                            event.preventDefault();
                        }
                    });
                }
                var allowUp, allowDown, lastY;
                this.element.on({
                    'touchstart': function(event) {
                        startPosX = event.originalEvent.touches[0].pageX;
                        startPosY = event.originalEvent.touches[0].pageY;
                        if (ltIOS7) {
                            allowUp = (this.scrollTop > 0);
                            allowDown = (this.scrollTop < this.scrollHeight - this.clientHeight);
                            lastY = startPosY;
                        }
                    },
                    'touchmove': function(event) {
                        var touch = event.originalEvent.touches[0];
                        if ((!window.rtl && startPosX > touch.pageX) || (window.rtl && startPosX < touch.pageX))
                            if (Math.abs(startPosY - touch.pageY) < Math.abs(startPosX - touch.pageX)) {
                                self.isOpen && self.options.triggerEl.trigger('click');
                            }
                        if (ltIOS7) {
                            var up = (touch.pageY > lastY);
                            lastY = touch.pageY;
                            if ((up && allowUp) || (!up && allowDown)) {
                                event.stopPropagation();
                            } else {
                                event.preventDefault();
                            }
                        }
                    }
                });
            }
            this.on();
        },
        '_createMobileCountries': function() {
            var countryEls = this.element.find('.country_holder li').clone();
            countryEls.css(rtl ? 'margin-right' : 'margin-left', '');
            countryEls.css('margin-top', '');
            var regionEls = this.element.find('.country_holder_mobile li');
            regionEls.each(function(index, el) {
                var ul = $('<ul class="cs_r_countries js_target">');
                ul.append(countryEls.filter('[data-region=' + index + ']'));
                $(el).append(ul);
            });
            new HP.Accordion(regionEls.find('.js_trigger'), {
                targets: regionEls.find('.js_target'),
                onInit: HP.Accessibility.AccordionMobile
            });
            if (HP.Responsive.currentResolution < HP.BreakPoints.DESKTOP) {
                this.element.find('.worldmap').css('background-size', $(window).innerWidth() - 48 + 'px auto');
            }
            this.contentUpdated = true;
        },
        '_updateCountriesColumns': function() {
            if (HP.Responsive.currentResolution > HP.BreakPoints.MOBILE2) {
                var countryHolder = this.element.find('.country_holder');
                var countryEls = countryHolder.find('li');
                var countryElWidth = countryEls.outerWidth();
                var colNumber = Math.floor(countryHolder.outerWidth() / countryElWidth);
                if (this.colNumber != colNumber) {
                    this.colNumber = colNumber;
                    var lineNum = (HP.Responsive.currentResolution == HP.BreakPoints.DESKTOP) ? 14 : Math.ceil(countryEls.length / colNumber),
                        col = 1,
                        prevColHeight = 0,
                        marginTop;
                    countryEls.each(function(index, el) {
                        el = $(el);
                        marginTop = '';
                        if (index == lineNum * col) {
                            col++;
                            marginTop = -prevColHeight + 'px';
                            prevColHeight = 0;
                        }
                        prevColHeight += el.outerHeight();
                        el.css(rtl ? 'margin-right' : 'margin-left', countryElWidth * (col - 1) + 'px');
                        el.css('margin-top', marginTop);
                    });
                }
            }
        },
        'clearStyles': function() {
            this.csWrapper.find('.worldmap_wrapper').css({
                'left': '',
                'right': '',
                'top': ''
            });
            this.csWrapper.find('.js_spooler').css({
                'width': '',
                'height': ''
            });
            this.element.css({
                'width': '',
                'height': ''
            });
            var body = $('body');
            body.css(this.animationStyleName, 'auto');
            body.css('width', '');
            this.element.find('.worldmap').css('background-size', 'auto auto');
            if (!ltIOS7) {
                $('body').css({
                    'position': 'static',
                    'top': ''
                });
                $(document).scrollTop(this.pageScrollTop);
                this.pageScrollTop = 0;
            }
        },
        'show': function() {
            this.isOpen = true;
            if (HP.Responsive.currentResolution < HP.BreakPoints.DESKTOP) {
                this.options.fxShow.styles = null;
                this['{window} resize']();
                var self = this;
                if (isiOS) {
                    setTimeout(function() {
                        var height = window.innerHeight || $(window).height(),
                            hBorder = (self.element.outerHeight() - self.element.height());
                        self.element.css({
                            'height': (height - hBorder) + 'px'
                        });
                        self.csWrapper.find('.js_spooler').css({
                            'height': height
                        });
                        self.element.find('.js_worldmap_wrapper').css('min-height', self.element.height() - self.element.find('.shadow_cover_bottom').height() + 8);
                    }, 1000);
                }
                HP.Control.show($('body'), this.options);
                this.element.css('overflow', 'auto');
            }
            this._updateCountriesColumns();
        },
        'hide': function() {
            if (HP.Responsive.currentResolution < HP.BreakPoints.DESKTOP) {
                this.element.show();
                HP.Control.hide($('body'), this.options);
            }
            this.isOpen = false;
        },
        '{window} resize': function(elements, e) {
            if (this.isOpen) {
                if (HP.Responsive.currentResolution < HP.BreakPoints.DESKTOP) {
                    if (!this.csWrapper.hasClass('responsive')) {
                        this.csWrapper.addClass('responsive');
                    }
                    var width = (window.innerWidth || $(window).width()) - 48,
                        height = window.innerHeight || $(window).height(),
                        hBorder = (this.element.outerHeight() - this.element.height());
                    this.element.css({
                        'width': width + 'px',
                        'height': (height - hBorder) + 'px'
                    });
                    this.csWrapper.find('.js_spooler').css({
                        'width': width,
                        'height': height
                    });
                    this.element.find('.worldmap').css('background-size', width + 'px auto');
                    this.element.find('.js_worldmap_wrapper').css('min-height', this.element.height() - this.element.find('.shadow_cover_bottom').height() + 8);
                    $('body').css('width', '100%');
                    if (!this.options.fxShow.styles) {
                        this.options.fxShow.styles = {};
                        this.options.fxShow.styles[this.animationStyleName] = width;
                    } else {
                        $('body').css(this.animationStyleName, width);
                    }
                    var styles = {
                        'top': $(window).scrollTop() - this.csWrapper.offset().top + 'px'
                    }
                    styles[(window.rtl ? 'right' : 'left')] = -width + 'px';
                    this.csWrapper.find('.worldmap_wrapper').css(styles);
                    if (!ltIOS7) {
                        this.pageScrollTop = this.pageScrollTop || $(document).scrollTop();
                        var body = $('body');
                        body.css('position', 'fixed');
                        if (body.css('position') == 'fixed') {
                            body.css('top', -this.pageScrollTop);
                        } else {
                            body.css('position', 'static');
                        }
                    }
                } else {
                    this.clearStyles();
                }
                this._updateCountriesColumns();
            }
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.SearchWidget = can.Control({
        defaults: {
            triggerEl: null
        }
    }, {
        'init': function(element, options) {
            this.options.triggerEl = this.element.find('.js_search_trigger');
            this.searchBox = $('#searchBox');
            this.submitBtn = this.searchBox.nextAll('.searchSubmit')
            this.clearBtn = this.searchBox.nextAll('.searchClear');
            this.searchUtilityBlock = $('.search_block');
            this.header = $('.header');
            var searchContainer = this.searchBox.parent().parents('.search_container');
            window.isIE8 ? this.submitBtn.addClass('disabled') : "";
            if (window.stickySearchBox) {
                this.submitBtn.prop('disabled', 'true');
                this.header.addClass('stickySearchBlock');
                this.stickySearchUtilityBlock = $('.stickySearchBlock').find('.search_block');
                this.searchUtilityBlock.appendTo(".header");
                $('.hdr_widgets').find('.search_block').detach();
                searchContainer.addClass("search_container_active");
                searchContainer.removeClass("search_container_inactive");
                $("#header").addClass('search_widget_active');
                this.searchUtilityBlock.removeAttr('data-state');
                this.searchUtilityBlock.removeAttr('aria-hidden');
                this.searchBox.show();
                $('.searchSubmit,#searchBox').show();
                this.stickySearchUtilityBlock.css({
                    "display": "block"
                });
            } else {
                this.searchBox.triggerHandler('inactive');
            }
            HP.Accessibility.searchIcon(this);
            this.on();
        },
        '{document} click': function(element, e) {
            if (!window.stickySearchBox && this.searchUtilityBlock.attr('data-state') === 'open') {
                if (e.target != this.searchBox[0] && e.target != this.clearBtn[0] && e.target != $('button.searchSubmit[disabled]')[0] && e.target != this.options.triggerEl[0] && $(e.target).parent()[0] != $('.header')[0] && e.target != $('.hf_wrapper')[0] && e.target != $('.header_container')[0]) {
                    this.searchBox.triggerHandler('inactive');
                }
            }
        },
        '{triggerEl} click': function(element, e) {
            var subMenu = $('.submenu'),
                self = this;
            if (!window.stickySearchBox) {
                this.searchBox.val('');
                this.submitBtn.prop('disabled', 'true');
                this.clearBtn.hide();
            }
            window.isIE8 ? this.submitBtn.addClass('disabled') : "";
            if (subMenu.attr('data-state') == 'open') {
                subMenu.attr('data-state', 'closed');
                $('.js_header_topmenu .selectable').removeClass('selected');
            }
            if (!window.stickySearchBox && this.searchUtilityBlock.attr('data-state') === 'closed') {
                this.searchBox.triggerHandler('active');
                if (isIE10 || isIE11) {
                    this.searchUtilityBlock.on('transitionend', function() {
                        self.searchBox.focus();
                    });
                } else {
                    this.searchBox.focus();
                }
            } else {
                if (!window.stickySearchBox) {
                    this.searchBox.triggerHandler('inactive');
                }
            }
        }
    });
    window.initSearchBoxSliding = function(searchBox, searchContainer, searchContainerWidth) {
        searchContainer = searchContainer.parents('.search_container');
        var searchUtilityBlock = $(".search_block"),
            searchTrigger = $('.js_search_trigger'),
            searchOpenLabel = searchTrigger.attr('title'),
            searchCloseLabel = SCREENREADING_LABELS['search_box_close_title'],
            searchBox = $('#searchBox');
        searchBox.on("active", function() {
            if ($('.landing-result').find('.search-ac-results').is(':visible')) return;
            searchContainer.addClass("search_container_active");
            searchContainer.removeClass("search_container_inactive");
            $("#header").addClass('search_widget_active');
            $('.search_widget_active .search_widget .top_corner').css('display', 'block');
            searchUtilityBlock.attr('data-state', 'open');
            searchTrigger.attr('title', searchCloseLabel);
            HP.Accessibility.searchIcon(searchTrigger);
            searchUtilityBlock.removeAttr('aria-hidden');
            searchBox.show();
            $('.searchSubmit,#searchBox').show();
        });
        searchBox.on("inactive", function() {
            var acResults = searchContainer.find('.ac_results');
            if ($('.landing-result').find('.search-ac-results').is(':visible')) return;
            searchContainer.removeClass("search_container_active");
            searchContainer.addClass("search_container_inactive");
            $("#header").removeClass('search_widget_active');
            searchUtilityBlock.attr('data-state', 'closed');
            searchUtilityBlock.attr('aria-hidden', true);
            searchBox.hide();
            $('.searchSubmit,#searchBox, .searchClear').hide();
            $('.search_widget .top_corner').css('display', 'none');
            acResults.hide();
            searchTrigger.attr('title', searchOpenLabel);
            HP.Accessibility.searchIcon(searchTrigger);
        });
    };
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    var ACCORDION_BREAK_POINT = 767;
    HP.SiteLinks = can.Control({
        defaults: {
            triggersSelector: null,
            targetsSelector: null
        },
        vars: {
            triggers: null,
            targets: null,
            accordion: null,
            isAccordion: false
        }
    }, {
        'init': function(element, options) {
            this.triggers = $(this.options.triggersSelector);
            this.targets = $(this.options.targetsSelector);
            this.accordion = new HP.Accordion(this.triggers, {
                targets: this.targets,
                onInit: HP.Accessibility.AccordionMobile
            });
            this.linksMouseEvents();
            this.isAccordion = (window.innerWidth > ACCORDION_BREAK_POINT);
            this.switchMode();
        },
        '{window} resize': function() {
            this.switchMode();
        },
        'switchMode': function() {
            if (window.innerWidth > ACCORDION_BREAK_POINT) {
                this.isAccordion && this.switchToColumns();
            } else {
                !this.isAccordion && this.switchToAccordion();
            }
        },
        'switchToColumns': function() {
            this.isAccordion = false;
            this.targets.show();
        },
        'switchToAccordion': function() {
            this.isAccordion = true;
            this.targets.hide();
            this.accordion.show(this.accordion.selectedIndex, true);
        },
        'linksMouseEvents': function() {
            $('.footer a').on('focus', function() {
                $(this).keyup(function(e) {
                    var code = (e.keyCode ? e.keyCode : e.which);
                    if (code == 9) {
                        $(this).removeClass('no-outline')
                    }
                });
            });
            $('.footer a').on('mousedown mouseout', function() {
                $(this).addClass('no-outline');
            });
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
(function($, can, HP) {
    HP.footerEmail = can.Control({
        defaults: {
            triggersSelector: null,
            targetsSelector: null
        },
        vars: {
            triggers: null,
            targets: null,
            accordion: null,
            isAccordion: false
        }
    }, {
        'init': function(element, options) {
            this.signUpEmail();
        },
        'signUpEmail': function() {
            var element = $("#footer_email_input");
            element.on("keyup", function(event) {
                if (event.keyCode == 13) {
                    document.getElementById("footer_email_submit").click();
                }
            });
            $('#footer_email_submit').click(function(e) {
                e.preventDefault();
                var emailId = $('#footer_email_input').val();
                var cookieName = "SIGNUPEMAIL";
                var newLocation = $('#footer_email_submit').attr('href');
                if (emailId == '') return;
                HP.Utils.setCookie(cookieName, emailId);
                location.href = newLocation;
            });
        }
    });
})(can.$, can, window.HF || (window.HF = {}));
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(t) {
            var r;
            return e(this).each(function() {
                var e = new a(this, t);
                r || (r = e)
            }), r
        }
    }
    var t, a = function(e, i) {
        function s(e) {
            return Math.floor(e)
        }

        function n(e, a) {
            var r = t(e.target);
            if (!r.is(a))
                if ("string" == typeof a) r = r.parents(a);
                else if (a.nodeType) {
                var i;
                return r.parents().each(function(e, t) {
                    t === a && (i = a)
                }), i ? a : void 0
            }
            if (0 !== r.length) return r[0]
        }

        function o(e, t) {
            t = t || {};
            var a = window.MutationObserver || window.WebkitMutationObserver,
                r = new a(function(e) {
                    e.forEach(function(e) {
                        w.onResize(!0), w.emit("onObserverUpdate", w, e)
                    })
                });
            r.observe(e, {
                attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                childList: "undefined" == typeof t.childList ? !0 : t.childList,
                characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
            }), w.observers.push(r)
        }

        function l(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === t || !w.isHorizontal() && 40 === t)) return !1;
            if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === t || !w.isHorizontal() && 38 === t)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var a = !1;
                    if (w.container.parents(".swiper-slide").length > 0 && 0 === w.container.parents(".swiper-slide-active").length) return;
                    var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        s = window.innerHeight,
                        n = w.container.offset();
                    w.rtl && (n.left = n.left - w.container[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + w.width, n.top],
                            [n.left, n.top + w.height],
                            [n.left + w.width, n.top + w.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= r.left && p[0] <= r.left + i && p[1] >= r.top && p[1] <= r.top + s && (a = !0)
                    }
                    if (!a) return
                }
                w.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !w.rtl || 37 === t && w.rtl) && w.slideNext(), (37 === t && !w.rtl || 39 === t && w.rtl) && w.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && w.slideNext(), 38 === t && w.slidePrev())
            }
        }

        function p(e, a) {
            e = t(e);
            var r, i, s, n = w.rtl ? -1 : 1;
            r = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), s = e.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : w.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * a * n + "%" : i * a * n + "px", s = s.indexOf("%") >= 0 ? parseInt(s, 10) * a + "%" : s * a + "px", e.transform("translate3d(" + i + ", " + s + ",0px)")
        }

        function d(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof a)) return new a(e, i);
        var u = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                hashnav: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 3,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            c = i && i.virtualTranslate;
        i = i || {};
        var m = {};
        for (var f in i)
            if ("object" != typeof i[f] || null === i[f] || (i[f].nodeType || i[f] === window || i[f] === document || "undefined" != typeof r && i[f] instanceof r || "undefined" != typeof jQuery && i[f] instanceof jQuery)) m[f] = i[f];
            else {
                m[f] = {};
                for (var h in i[f]) m[f][h] = i[f][h]
            } for (var g in u)
            if ("undefined" == typeof i[g]) i[g] = u[g];
            else if ("object" == typeof i[g])
            for (var v in u[g]) "undefined" == typeof i[g][v] && (i[g][v] = u[g][v]);
        var w = this;
        if (w.params = i, w.originalParams = m, w.classNames = [], "undefined" != typeof t && "undefined" != typeof r && (t = r), ("undefined" != typeof t || (t = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r)) && (w.$ = t, w.currentBreakpoint = void 0, w.getActiveBreakpoint = function() {
                if (!w.params.breakpoints) return !1;
                var e, t = !1,
                    a = [];
                for (e in w.params.breakpoints) w.params.breakpoints.hasOwnProperty(e) && a.push(e);
                a.sort(function(e, t) {
                    return parseInt(e, 10) > parseInt(t, 10)
                });
                for (var r = 0; r < a.length; r++) e = a[r], e >= window.innerWidth && !t && (t = e);
                return t || "max"
            }, w.setBreakpoint = function() {
                var e = w.getActiveBreakpoint();
                if (e && w.currentBreakpoint !== e) {
                    var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams,
                        a = w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                    for (var r in t) w.params[r] = t[r];
                    w.currentBreakpoint = e, a && w.destroyLoop && w.reLoop(!0)
                }
            }, w.params.breakpoints && w.setBreakpoint(), w.container = t(e), 0 !== w.container.length)) {
            if (w.container.length > 1) {
                var b = [];
                return w.container.each(function() {
                    b.push(new a(this, i))
                }), b
            }
            w.container[0].swiper = w, w.container.data("swiper", w), w.classNames.push("swiper-container-" + w.params.direction), w.params.freeMode && w.classNames.push("swiper-container-free-mode"), w.support.flexbox || (w.classNames.push("swiper-container-no-flexbox"), w.params.slidesPerColumn = 1), w.params.autoHeight && w.classNames.push("swiper-container-autoheight"), (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(w.params.effect) >= 0 && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0, w.classNames.push("swiper-container-3d")) : w.params.effect = "slide"), "slide" !== w.params.effect && w.classNames.push("swiper-container-" + w.params.effect), "cube" === w.params.effect && (w.params.resistanceRatio = 0, w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.centeredSlides = !1, w.params.spaceBetween = 0, w.params.virtualTranslate = !0, w.params.setWrapperSize = !1), ("fade" === w.params.effect || "flip" === w.params.effect) && (w.params.slidesPerView = 1, w.params.slidesPerColumn = 1, w.params.slidesPerGroup = 1, w.params.watchSlidesProgress = !0, w.params.spaceBetween = 0, w.params.setWrapperSize = !1, "undefined" == typeof c && (w.params.virtualTranslate = !0)), w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1), w.wrapper = w.container.children("." + w.params.wrapperClass), w.params.pagination && (w.paginationContainer = t(w.params.pagination), w.params.uniqueNavElements && "string" == typeof w.params.pagination && w.paginationContainer.length > 1 && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)), "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass("swiper-pagination-clickable") : w.params.paginationClickable = !1, w.paginationContainer.addClass("swiper-pagination-" + w.params.paginationType)), (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = t(w.params.nextButton), w.params.uniqueNavElements && "string" == typeof w.params.nextButton && w.nextButton.length > 1 && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))), w.params.prevButton && (w.prevButton = t(w.params.prevButton), w.params.uniqueNavElements && "string" == typeof w.params.prevButton && w.prevButton.length > 1 && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))), w.isHorizontal = function() {
                return "horizontal" === w.params.direction
            }, w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")), w.rtl && w.classNames.push("swiper-container-rtl"), w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")), w.params.slidesPerColumn > 1 && w.classNames.push("swiper-container-multirow"), w.device.android && w.classNames.push("swiper-container-android"), w.container.addClass(w.classNames.join(" ")), w.translate = 0, w.progress = 0, w.velocity = 0, w.lockSwipeToNext = function() {
                w.params.allowSwipeToNext = !1
            }, w.lockSwipeToPrev = function() {
                w.params.allowSwipeToPrev = !1
            }, w.lockSwipes = function() {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1
            }, w.unlockSwipeToNext = function() {
                w.params.allowSwipeToNext = !0
            }, w.unlockSwipeToPrev = function() {
                w.params.allowSwipeToPrev = !0
            }, w.unlockSwipes = function() {
                w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0
            }, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab"), w.imagesToLoad = [], w.imagesLoaded = 0, w.loadImage = function(e, t, a, r, i) {
                function s() {
                    i && i()
                }
                var n;
                e.complete && r ? s() : t ? (n = new window.Image, n.onload = s, n.onerror = s, a && (n.srcset = a), t && (n.src = t)) : s()
            }, w.preloadImages = function() {
                function e() {
                    "undefined" != typeof w && null !== w && (void 0 !== w.imagesLoaded && w.imagesLoaded++, w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(), w.emit("onImagesReady", w)))
                }
                w.imagesToLoad = w.container.find("img");
                for (var t = 0; t < w.imagesToLoad.length; t++) w.loadImage(w.imagesToLoad[t], w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"), w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"), !0, e)
            }, w.minTranslate = function() {
                return -w.snapGrid[0]
            }, w.maxTranslate = function() {
                return -w.snapGrid[w.snapGrid.length - 1]
            }, w.updateAutoHeight = function() {
                var e = w.slides.eq(w.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var t = e.offsetHeight;
                    t && w.wrapper.css("height", t + "px")
                }
            }, w.updateContainerSize = function() {
                var e, t;
                e = "undefined" != typeof w.params.width ? w.params.width : w.container[0].clientWidth, t = "undefined" != typeof w.params.height ? w.params.height : w.container[0].clientHeight, 0 === e && w.isHorizontal() || 0 === t && !w.isHorizontal() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10), t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10), w.width = e, w.height = t, w.size = w.isHorizontal() ? w.width : w.height)
            }, w.updateSlidesSize = function() {
                w.slides = w.wrapper.children("." + w.params.slideClass), w.snapGrid = [], w.slidesGrid = [], w.slidesSizesGrid = [];
                var e, t = w.params.spaceBetween,
                    a = -w.params.slidesOffsetBefore,
                    r = 0,
                    i = 0;
                if ("undefined" != typeof w.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * w.size), w.virtualSize = -t, w.rtl ? w.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : w.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    w.params.slidesPerColumn > 1 && (n = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn, "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (n = Math.max(n, w.params.slidesPerView * w.params.slidesPerColumn)));
                    var o, l = w.params.slidesPerColumn,
                        p = n / l,
                        d = p - (w.params.slidesPerColumn * p - w.slides.length);
                    for (e = 0; e < w.slides.length; e++) {
                        o = 0;
                        var u = w.slides.eq(e);
                        if (w.params.slidesPerColumn > 1) {
                            var c, m, f;
                            "column" === w.params.slidesPerColumnFill ? (m = Math.floor(e / l), f = e - m * l, (m > d || m === d && f === l - 1) && ++f >= l && (f = 0, m++), c = m + f * n / l, u.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (f = Math.floor(e / p), m = e - f * p), u.css({
                                "margin-top": 0 !== f && w.params.spaceBetween && w.params.spaceBetween + "px"
                            }).attr("data-swiper-column", m).attr("data-swiper-row", f)
                        }
                        "none" !== u.css("display") && ("auto" === w.params.slidesPerView ? (o = w.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), w.params.roundLengths && (o = s(o))) : (o = (w.size - (w.params.slidesPerView - 1) * t) / w.params.slidesPerView, w.params.roundLengths && (o = s(o)), w.isHorizontal() ? w.slides[e].style.width = o + "px" : w.slides[e].style.height = o + "px"), w.slides[e].swiperSlideSize = o, w.slidesSizesGrid.push(o), w.params.centeredSlides ? (a = a + o / 2 + r / 2 + t, 0 === e && (a = a - w.size / 2 - t), Math.abs(a) < .001 && (a = 0), i % w.params.slidesPerGroup === 0 && w.snapGrid.push(a), w.slidesGrid.push(a)) : (i % w.params.slidesPerGroup === 0 && w.snapGrid.push(a), w.slidesGrid.push(a), a = a + o + t), w.virtualSize += o + t, r = o, i++)
                    }
                    w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter;
                    var h;
                    if (w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }), (!w.support.flexbox || w.params.setWrapperSize) && (w.isHorizontal() ? w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }) : w.wrapper.css({
                            height: w.virtualSize + w.params.spaceBetween + "px"
                        })), w.params.slidesPerColumn > 1 && (w.virtualSize = (o + w.params.spaceBetween) * n, w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween, w.wrapper.css({
                            width: w.virtualSize + w.params.spaceBetween + "px"
                        }), w.params.centeredSlides)) {
                        for (h = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && h.push(w.snapGrid[e]);
                        w.snapGrid = h
                    }
                    if (!w.params.centeredSlides) {
                        for (h = [], e = 0; e < w.snapGrid.length; e++) w.snapGrid[e] <= w.virtualSize - w.size && h.push(w.snapGrid[e]);
                        w.snapGrid = h, Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) > 1 && w.snapGrid.push(w.virtualSize - w.size)
                    }
                    0 === w.snapGrid.length && (w.snapGrid = [0]), 0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                        marginLeft: t + "px"
                    }) : w.slides.css({
                        marginRight: t + "px"
                    }) : w.slides.css({
                        marginBottom: t + "px"
                    })), w.params.watchSlidesProgress && w.updateSlidesOffset()
                }
            }, w.updateSlidesOffset = function() {
                for (var e = 0; e < w.slides.length; e++) w.slides[e].swiperSlideOffset = w.isHorizontal() ? w.slides[e].offsetLeft : w.slides[e].offsetTop
            }, w.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = w.translate || 0), 0 !== w.slides.length) {
                    "undefined" == typeof w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                    var t = -e;
                    w.rtl && (t = e), w.slides.removeClass(w.params.slideVisibleClass);
                    for (var a = 0; a < w.slides.length; a++) {
                        var r = w.slides[a],
                            i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + w.params.spaceBetween);
                        if (w.params.watchSlidesVisibility) {
                            var s = -(t - r.swiperSlideOffset),
                                n = s + w.slidesSizesGrid[a],
                                o = s >= 0 && s < w.size || n > 0 && n <= w.size || 0 >= s && n >= w.size;
                            o && w.slides.eq(a).addClass(w.params.slideVisibleClass)
                        }
                        r.progress = w.rtl ? -i : i
                    }
                }
            }, w.updateProgress = function(e) {
                "undefined" == typeof e && (e = w.translate || 0);
                var t = w.maxTranslate() - w.minTranslate(),
                    a = w.isBeginning,
                    r = w.isEnd;
                0 === t ? (w.progress = 0, w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / t, w.isBeginning = w.progress <= 0, w.isEnd = w.progress >= 1), w.isBeginning && !a && w.emit("onReachBeginning", w), w.isEnd && !r && w.emit("onReachEnd", w), w.params.watchSlidesProgress && w.updateSlidesProgress(e), w.emit("onProgress", w, w.progress)
            }, w.updateActiveIndex = function() {
                var e, t, a, r = w.rtl ? w.translate : -w.translate;
                for (t = 0; t < w.slidesGrid.length; t++) "undefined" != typeof w.slidesGrid[t + 1] ? r >= w.slidesGrid[t] && r < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2 ? e = t : r >= w.slidesGrid[t] && r < w.slidesGrid[t + 1] && (e = t + 1) : r >= w.slidesGrid[t] && (e = t);
                (0 > e || "undefined" == typeof e) && (e = 0), a = Math.floor(e / w.params.slidesPerGroup), a >= w.snapGrid.length && (a = w.snapGrid.length - 1), e !== w.activeIndex && (w.snapIndex = a, w.previousIndex = w.activeIndex, w.activeIndex = e, w.updateClasses())
            }, w.updateClasses = function() {
                w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass);
                var e = w.slides.eq(w.activeIndex);
                e.addClass(w.params.slideActiveClass);
                var a = e.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                w.params.loop && 0 === a.length && w.slides.eq(0).addClass(w.params.slideNextClass);
                var r = e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                if (w.params.loop && 0 === r.length && w.slides.eq(-1).addClass(w.params.slidePrevClass), w.paginationContainer && w.paginationContainer.length > 0) {
                    var i, s = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                    if (w.params.loop ? (i = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup), i > w.slides.length - 1 - 2 * w.loopedSlides && (i -= w.slides.length - 2 * w.loopedSlides), i > s - 1 && (i -= s), 0 > i && "bullets" !== w.params.paginationType && (i = s + i)) : i = "undefined" != typeof w.snapIndex ? w.snapIndex : w.activeIndex || 0, "bullets" === w.params.paginationType && w.bullets && w.bullets.length > 0 && (w.bullets.removeClass(w.params.bulletActiveClass), w.paginationContainer.length > 1 ? w.bullets.each(function() {
                            t(this).index() === i && t(this).addClass(w.params.bulletActiveClass)
                        }) : w.bullets.eq(i).addClass(w.params.bulletActiveClass)), "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(i + 1), w.paginationContainer.find("." + w.params.paginationTotalClass).text(s)), "progress" === w.params.paginationType) {
                        var n = (i + 1) / s,
                            o = n,
                            l = 1;
                        w.isHorizontal() || (l = n, o = 1), w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(w.params.speed)
                    }
                    "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, i + 1, s)), w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                }
                w.params.loop || (w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass), w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
            }, w.updatePagination = function() {
                if (w.params.pagination && w.paginationContainer && w.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === w.params.paginationType) {
                        for (var t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, a = 0; t > a; a++) e += w.params.paginationBulletRender ? w.params.paginationBulletRender(a, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                        w.paginationContainer.html(e), w.bullets = w.paginationContainer.find("." + w.params.bulletClass), w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                    }
                    "fraction" === w.params.paginationType && (e = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>', w.paginationContainer.html(e)), "progress" === w.params.paginationType && (e = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>', w.paginationContainer.html(e)), "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                }
            }, w.update = function(e) {
                function t() {
                    r = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()), w.setWrapperTranslate(r), w.updateActiveIndex(), w.updateClasses()
                }
                if (w.updateContainerSize(), w.updateSlidesSize(), w.updateProgress(), w.updatePagination(), w.updateClasses(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), e) {
                    var a, r;
                    w.controller && w.controller.spline && (w.controller.spline = void 0), w.params.freeMode ? (t(), w.params.autoHeight && w.updateAutoHeight()) : (a = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0), a || t())
                } else w.params.autoHeight && w.updateAutoHeight()
            }, w.onResize = function(e) {
                w.params.breakpoints && w.setBreakpoint();
                var t = w.params.allowSwipeToPrev,
                    a = w.params.allowSwipeToNext;
                w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0, w.updateContainerSize(), w.updateSlidesSize(), ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(), w.params.scrollbar && w.scrollbar && w.scrollbar.set(), w.controller && w.controller.spline && (w.controller.spline = void 0);
                var r = !1;
                if (w.params.freeMode) {
                    var i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                    w.setWrapperTranslate(i), w.updateActiveIndex(), w.updateClasses(), w.params.autoHeight && w.updateAutoHeight()
                } else w.updateClasses(), r = ("auto" === w.params.slidesPerView || w.params.slidesPerView > 1) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                w.params.lazyLoading && !r && w.lazy && w.lazy.load(), w.params.allowSwipeToPrev = t, w.params.allowSwipeToNext = a
            };
            var y = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), w.touchEvents = {
                start: w.support.touch || !w.params.simulateTouch ? "touchstart" : y[0],
                move: w.support.touch || !w.params.simulateTouch ? "touchmove" : y[1],
                end: w.support.touch || !w.params.simulateTouch ? "touchend" : y[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction), w.initEvents = function(e) {
                var t = e ? "off" : "on",
                    a = e ? "removeEventListener" : "addEventListener",
                    r = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0],
                    s = w.support.touch ? r : document,
                    n = w.params.nested ? !0 : !1;
                w.browser.ie ? (r[a](w.touchEvents.start, w.onTouchStart, !1), s[a](w.touchEvents.move, w.onTouchMove, n), s[a](w.touchEvents.end, w.onTouchEnd, !1)) : (w.support.touch && (r[a](w.touchEvents.start, w.onTouchStart, !1), r[a](w.touchEvents.move, w.onTouchMove, n), r[a](w.touchEvents.end, w.onTouchEnd, !1)), !i.simulateTouch || w.device.ios || w.device.android || (r[a]("mousedown", w.onTouchStart, !1), document[a]("mousemove", w.onTouchMove, n), document[a]("mouseup", w.onTouchEnd, !1))), window[a]("resize", w.onResize), w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.nextButton[t]("click", w.onClickNext), w.params.a11y && w.a11y && w.nextButton[t]("keydown", w.a11y.onEnterKey)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.prevButton[t]("click", w.onClickPrev), w.params.a11y && w.a11y && w.prevButton[t]("keydown", w.a11y.onEnterKey)), w.params.pagination && w.params.paginationClickable && (w.paginationContainer[t]("click", "." + w.params.bulletClass, w.onClickIndex), w.params.a11y && w.a11y && w.paginationContainer[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)), (w.params.preventClicks || w.params.preventClicksPropagation) && r[a]("click", w.preventClicks, !0)
            }, w.attachEvents = function() {
                w.initEvents()
            }, w.detachEvents = function() {
                w.initEvents(!0)
            }, w.allowClick = !0, w.preventClicks = function(e) {
                w.allowClick || (w.params.preventClicks && e.preventDefault(), w.params.preventClicksPropagation && w.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, w.onClickNext = function(e) {
                e.preventDefault(), (!w.isEnd || w.params.loop) && w.slideNext()
            }, w.onClickPrev = function(e) {
                e.preventDefault(), (!w.isBeginning || w.params.loop) && w.slidePrev()
            }, w.onClickIndex = function(e) {
                e.preventDefault();
                var a = t(this).index() * w.params.slidesPerGroup;
                w.params.loop && (a += w.loopedSlides), w.slideTo(a)
            }, w.updateClickedSlide = function(e) {
                var a = n(e, "." + w.params.slideClass),
                    r = !1;
                if (a)
                    for (var i = 0; i < w.slides.length; i++) w.slides[i] === a && (r = !0);
                if (!a || !r) return w.clickedSlide = void 0, void(w.clickedIndex = void 0);
                if (w.clickedSlide = a, w.clickedIndex = t(a).index(), w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                    var s, o = w.clickedIndex;
                    if (w.params.loop) {
                        if (w.animating) return;
                        s = t(w.clickedSlide).attr("data-swiper-slide-index"), w.params.centeredSlides ? o < w.loopedSlides - w.params.slidesPerView / 2 || o > w.slides.length - w.loopedSlides + w.params.slidesPerView / 2 ? (w.fixLoop(), o = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            w.slideTo(o)
                        }, 0)) : w.slideTo(o) : o > w.slides.length - w.params.slidesPerView ? (w.fixLoop(), o = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            w.slideTo(o)
                        }, 0)) : w.slideTo(o)
                    } else w.slideTo(o)
                }
            };
            var x, T, S, C, z, M, E, P, k, B, L = "input, select, textarea, button",
                H = Date.now(),
                I = [];
            w.animating = !1, w.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var D, G;
            w.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                    if (w.params.noSwiping && n(e, "." + w.params.noSwipingClass)) return void(w.allowClick = !0);
                    if (!w.params.swipeHandler || n(e, w.params.swipeHandler)) {
                        var a = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            r = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                        if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && a <= w.params.iOSEdgeSwipeThreshold)) {
                            if (x = !0, T = !1, S = !0, z = void 0, G = void 0, w.touches.startX = a, w.touches.startY = r, C = Date.now(), w.allowClick = !0, w.updateContainerSize(), w.swipeDirection = void 0, w.params.threshold > 0 && (P = !1), "touchstart" !== e.type) {
                                var i = !0;
                                t(e.target).is(L) && (i = !1), document.activeElement && t(document.activeElement).is(L) && document.activeElement.blur(), i && e.preventDefault()
                            }
                            w.emit("onTouchStart", w, e)
                        }
                    }
                }
            }, w.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !D || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return w.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void(w.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                    if (w.params.onlyExternal) return w.allowClick = !1, void(x && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, C = Date.now()));
                    if (D && document.activeElement && e.target === document.activeElement && t(e.target).is(L)) return T = !0, void(w.allowClick = !1);
                    if (S && w.emit("onTouchMove", w, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof z) {
                            var a = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI;
                            z = w.isHorizontal() ? a > w.params.touchAngle : 90 - a > w.params.touchAngle
                        }
                        if (z && w.emit("onTouchMoveOpposite", w, e), "undefined" == typeof G && w.browser.ieTouch && (w.touches.currentX !== w.touches.startX || w.touches.currentY !== w.touches.startY) && (G = !0), x) {
                            if (z) return void(x = !1);
                            if (G || !w.browser.ieTouch) {
                                w.allowClick = !1, w.emit("onSliderMove", w, e), e.preventDefault(), w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(), T || (i.loop && w.fixLoop(), E = w.getWrapperTranslate(), w.setWrapperTransition(0), w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()), B = !1, w.params.grabCursor && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grabbing", w.container[0].style.cursor = "-moz-grabbin", w.container[0].style.cursor = "grabbing")), T = !0;
                                var r = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                r *= w.params.touchRatio, w.rtl && (r = -r), w.swipeDirection = r > 0 ? "prev" : "next", M = r + E;
                                var s = !0;
                                if (r > 0 && M > w.minTranslate() ? (s = !1, w.params.resistance && (M = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + E + r, w.params.resistanceRatio))) : 0 > r && M < w.maxTranslate() && (s = !1, w.params.resistance && (M = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - E - r, w.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !w.params.allowSwipeToNext && "next" === w.swipeDirection && E > M && (M = E), !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && M > E && (M = E), w.params.followFinger) {
                                    if (w.params.threshold > 0) {
                                        if (!(Math.abs(r) > w.params.threshold || P)) return void(M = E);
                                        if (!P) return P = !0, w.touches.startX = w.touches.currentX, w.touches.startY = w.touches.currentY, M = E, void(w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                    }(w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(), w.params.freeMode && (0 === I.length && I.push({
                                        position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                        time: C
                                    }), I.push({
                                        position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                        time: (new window.Date).getTime()
                                    })), w.updateProgress(M), w.setWrapperTranslate(M)
                                }
                            }
                        }
                    }
                }
            }, w.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), S && w.emit("onTouchEnd", w, e), S = !1, x) {
                    w.params.grabCursor && T && x && (w.container[0].style.cursor = "move", w.container[0].style.cursor = "-webkit-grab", w.container[0].style.cursor = "-moz-grab", w.container[0].style.cursor = "grab");
                    var a = Date.now(),
                        r = a - C;
                    if (w.allowClick && (w.updateClickedSlide(e), w.emit("onTap", w, e), 300 > r && a - H > 300 && (k && clearTimeout(k), k = setTimeout(function() {
                            w && (w.params.paginationHide && w.paginationContainer.length > 0 && !t(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass), w.emit("onClick", w, e))
                        }, 300)), 300 > r && 300 > a - H && (k && clearTimeout(k), w.emit("onDoubleTap", w, e))), H = Date.now(), setTimeout(function() {
                            w && (w.allowClick = !0)
                        }, 0), !x || !T || !w.swipeDirection || 0 === w.touches.diff || M === E) return void(x = T = !1);
                    x = T = !1;
                    var i;
                    if (i = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -M, w.params.freeMode) {
                        if (i < -w.minTranslate()) return void w.slideTo(w.activeIndex);
                        if (i > -w.maxTranslate()) return void(w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                        if (w.params.freeModeMomentum) {
                            if (I.length > 1) {
                                var s = I.pop(),
                                    n = I.pop(),
                                    o = s.position - n.position,
                                    l = s.time - n.time;
                                w.velocity = o / l, w.velocity = w.velocity / 2, Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0), (l > 150 || (new window.Date).getTime() - s.time > 300) && (w.velocity = 0)
                            } else w.velocity = 0;
                            I.length = 0;
                            var p = 1e3 * w.params.freeModeMomentumRatio,
                                d = w.velocity * p,
                                u = w.translate + d;
                            w.rtl && (u = -u);
                            var c, m = !1,
                                f = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                            if (u < w.maxTranslate()) w.params.freeModeMomentumBounce ? (u + w.maxTranslate() < -f && (u = w.maxTranslate() - f), c = w.maxTranslate(), m = !0, B = !0) : u = w.maxTranslate();
                            else if (u > w.minTranslate()) w.params.freeModeMomentumBounce ? (u - w.minTranslate() > f && (u = w.minTranslate() + f), c = w.minTranslate(), m = !0, B = !0) : u = w.minTranslate();
                            else if (w.params.freeModeSticky) {
                                var h, g = 0;
                                for (g = 0; g < w.snapGrid.length; g += 1)
                                    if (w.snapGrid[g] > -u) {
                                        h = g;
                                        break
                                    } u = Math.abs(w.snapGrid[h] - u) < Math.abs(w.snapGrid[h - 1] - u) || "next" === w.swipeDirection ? w.snapGrid[h] : w.snapGrid[h - 1], w.rtl || (u = -u)
                            }
                            if (0 !== w.velocity) p = w.rtl ? Math.abs((-u - w.translate) / w.velocity) : Math.abs((u - w.translate) / w.velocity);
                            else if (w.params.freeModeSticky) return void w.slideReset();
                            w.params.freeModeMomentumBounce && m ? (w.updateProgress(c), w.setWrapperTransition(p), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating = !0, w.wrapper.transitionEnd(function() {
                                w && B && (w.emit("onMomentumBounce", w), w.setWrapperTransition(w.params.speed), w.setWrapperTranslate(c), w.wrapper.transitionEnd(function() {
                                    w && w.onTransitionEnd()
                                }))
                            })) : w.velocity ? (w.updateProgress(u), w.setWrapperTransition(p), w.setWrapperTranslate(u), w.onTransitionStart(), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                                w && w.onTransitionEnd()
                            }))) : w.updateProgress(u), w.updateActiveIndex()
                        }
                        return void((!w.params.freeModeMomentum || r >= w.params.longSwipesMs) && (w.updateProgress(), w.updateActiveIndex()))
                    }
                    var v, b = 0,
                        y = w.slidesSizesGrid[0];
                    for (v = 0; v < w.slidesGrid.length; v += w.params.slidesPerGroup) "undefined" != typeof w.slidesGrid[v + w.params.slidesPerGroup] ? i >= w.slidesGrid[v] && i < w.slidesGrid[v + w.params.slidesPerGroup] && (b = v, y = w.slidesGrid[v + w.params.slidesPerGroup] - w.slidesGrid[v]) : i >= w.slidesGrid[v] && (b = v, y = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                    var z = (i - w.slidesGrid[b]) / y;
                    if (r > w.params.longSwipesMs) {
                        if (!w.params.longSwipes) return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && (z >= w.params.longSwipesRatio ? w.slideTo(b + w.params.slidesPerGroup) : w.slideTo(b)), "prev" === w.swipeDirection && (z > 1 - w.params.longSwipesRatio ? w.slideTo(b + w.params.slidesPerGroup) : w.slideTo(b))
                    } else {
                        if (!w.params.shortSwipes) return void w.slideTo(w.activeIndex);
                        "next" === w.swipeDirection && w.slideTo(b + w.params.slidesPerGroup), "prev" === w.swipeDirection && w.slideTo(b)
                    }
                }
            }, w._slideTo = function(e, t) {
                return w.slideTo(e, t, !0, !0)
            }, w.slideTo = function(e, t, a, r) {
                "undefined" == typeof a && (a = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), w.snapIndex = Math.floor(e / w.params.slidesPerGroup), w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                var i = -w.snapGrid[w.snapIndex];
                w.params.autoplay && w.autoplaying && (r || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()), w.updateProgress(i);
                for (var s = 0; s < w.slidesGrid.length; s++) - Math.floor(100 * i) >= Math.floor(100 * w.slidesGrid[s]) && (e = s);
                return !w.params.allowSwipeToNext && i < w.translate && i < w.minTranslate() ? !1 : !w.params.allowSwipeToPrev && i > w.translate && i > w.maxTranslate() && (w.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = w.params.speed), w.previousIndex = w.activeIndex || 0, w.activeIndex = e, w.rtl && -i === w.translate || !w.rtl && i === w.translate ? (w.params.autoHeight && w.updateAutoHeight(), w.updateClasses(), "slide" !== w.params.effect && w.setWrapperTranslate(i), !1) : (w.updateClasses(), w.onTransitionStart(a), 0 === t ? (w.setWrapperTranslate(i), w.setWrapperTransition(0), w.onTransitionEnd(a)) : (w.setWrapperTranslate(i), w.setWrapperTransition(t), w.animating || (w.animating = !0, w.wrapper.transitionEnd(function() {
                    w && w.onTransitionEnd(a)
                }))), !0))
            }, w.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0), w.params.autoHeight && w.updateAutoHeight(), w.lazy && w.lazy.onTransitionStart(), e && (w.emit("onTransitionStart", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
            }, w.onTransitionEnd = function(e) {
                w.animating = !1, w.setWrapperTransition(0), "undefined" == typeof e && (e = !0), w.lazy && w.lazy.onTransitionEnd(), e && (w.emit("onTransitionEnd", w), w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w), w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))), w.params.hashnav && w.hashnav && w.hashnav.setHash()
            }, w.slideNext = function(e, t, a) {
                if (w.params.loop) {
                    if (w.animating) return !1;
                    w.fixLoop();
                    w.container[0].clientLeft;
                    return w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, a)
                }
                return w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, a)
            }, w._slideNext = function(e) {
                return w.slideNext(!0, e, !0)
            }, w.slidePrev = function(e, t, a) {
                if (w.params.loop) {
                    if (w.animating) return !1;
                    w.fixLoop();
                    w.container[0].clientLeft;
                    return w.slideTo(w.activeIndex - 1, t, e, a)
                }
                return w.slideTo(w.activeIndex - 1, t, e, a)
            }, w._slidePrev = function(e) {
                return w.slidePrev(!0, e, !0)
            }, w.slideReset = function(e, t, a) {
                return w.slideTo(w.activeIndex, t, e)
            }, w.setWrapperTransition = function(e, t) {
                w.wrapper.transition(e), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e), w.params.parallax && w.parallax && w.parallax.setTransition(e), w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e), w.params.control && w.controller && w.controller.setTransition(e, t), w.emit("onSetTransition", w, e)
            }, w.setWrapperTranslate = function(e, t, a) {
                var r = 0,
                    i = 0,
                    n = 0;
                w.isHorizontal() ? r = w.rtl ? -e : e : i = e, w.params.roundLengths && (r = s(r), i = s(i)), w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + n + "px)") : w.wrapper.transform("translate(" + r + "px, " + i + "px)")), w.translate = w.isHorizontal() ? r : i;
                var o, l = w.maxTranslate() - w.minTranslate();
                o = 0 === l ? 0 : (e - w.minTranslate()) / l, o !== w.progress && w.updateProgress(e), t && w.updateActiveIndex(), "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate), w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate), w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate), w.params.control && w.controller && w.controller.setTranslate(w.translate, a), w.emit("onSetTranslate", w, w.translate)
            }, w.getTranslate = function(e, t) {
                var a, r, i, s;
                return "undefined" == typeof t && (t = "x"), w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new window.WebKitCSSMatrix("none" === r ? "" : r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = s.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (r = window.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), w.rtl && r && (r = -r), r || 0)
            }, w.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = w.isHorizontal() ? "x" : "y"), w.getTranslate(w.wrapper[0], e)
            }, w.observers = [], w.initObservers = function() {
                if (w.params.observeParents)
                    for (var e = w.container.parents(), t = 0; t < e.length; t++) o(e[t]);
                o(w.container[0], {
                    childList: !1
                }), o(w.wrapper[0], {
                    attributes: !1
                })
            }, w.disconnectObservers = function() {
                for (var e = 0; e < w.observers.length; e++) w.observers[e].disconnect();
                w.observers = []
            }, w.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < w.slides.length; e++) {
                            var t = w.slides.eq(e),
                                a = t[0].swiperSlideOffset,
                                r = -a;
                            w.params.virtualTranslate || (r -= w.translate);
                            var i = 0;
                            w.isHorizontal() || (i = r, r = 0);
                            var s = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: s
                            }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (w.slides.transition(e), w.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            w.slides.transitionEnd(function() {
                                if (!t && w) {
                                    t = !0, w.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < e.length; a++) w.wrapper.trigger(e[a])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < w.slides.length; e++) {
                            var a = w.slides.eq(e),
                                r = a[0].progress;
                            w.params.flip.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                            var i = a[0].swiperSlideOffset,
                                s = -180 * r,
                                n = s,
                                o = 0,
                                l = -i,
                                p = 0;
                            if (w.isHorizontal() ? w.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + w.slides.length, w.params.flip.slideShadows) {
                                var d = w.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                                    u = w.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(u)), d.length && (d[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0))
                            }
                            a.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        if (w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            w.slides.eq(w.activeIndex).transitionEnd(function() {
                                if (!a && w && t(this).hasClass(w.params.slideActiveClass)) {
                                    a = !0, w.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) w.wrapper.trigger(e[r])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, a = 0;
                        w.params.cube.shadow && (w.isHorizontal() ? (e = w.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), w.wrapper.append(e)), e.css({
                            height: w.width + "px"
                        })) : (e = w.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), w.container.append(e))));
                        for (var r = 0; r < w.slides.length; r++) {
                            var i = w.slides.eq(r),
                                s = 90 * r,
                                n = Math.floor(s / 360);
                            w.rtl && (s = -s, n = Math.floor(-s / 360));
                            var o = Math.max(Math.min(i[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                d = 0;
                            r % 4 === 0 ? (l = 4 * -n * w.size, d = 0) : (r - 1) % 4 === 0 ? (l = 0, d = 4 * -n * w.size) : (r - 2) % 4 === 0 ? (l = w.size + 4 * n * w.size, d = w.size) : (r - 3) % 4 === 0 && (l = -w.size, d = 3 * w.size + 4 * w.size * n), w.rtl && (l = -l), w.isHorizontal() || (p = l, l = 0);
                            var u = "rotateX(" + (w.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (w.isHorizontal() ? s : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (1 >= o && o > -1 && (a = 90 * r + 90 * o, w.rtl && (a = 90 * -r - 90 * o)), i.transform(u), w.params.cube.slideShadows) {
                                var c = w.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                    m = w.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (w.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                "transform-origin": "50% 50% -" + w.size / 2 + "px"
                            }), w.params.cube.shadow)
                            if (w.isHorizontal()) e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                            else {
                                var f = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90),
                                    h = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                    g = w.params.cube.shadowScale,
                                    v = w.params.cube.shadowScale / h,
                                    b = w.params.cube.shadowOffset;
                                e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (w.height / 2 + b) + "px, " + -w.height / 2 / v + "px) rotateX(-90deg)")
                            } var y = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                        w.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (w.isHorizontal() ? 0 : a) + "deg) rotateY(" + (w.isHorizontal() ? -a : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = w.translate, a = w.isHorizontal() ? -e + w.width / 2 : -e + w.height / 2, r = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, i = w.params.coverflow.depth, s = 0, n = w.slides.length; n > s; s++) {
                            var o = w.slides.eq(s),
                                l = w.slidesSizesGrid[s],
                                p = o[0].swiperSlideOffset,
                                d = (a - p - l / 2) / l * w.params.coverflow.modifier,
                                u = w.isHorizontal() ? r * d : 0,
                                c = w.isHorizontal() ? 0 : r * d,
                                m = -i * Math.abs(d),
                                f = w.isHorizontal() ? 0 : w.params.coverflow.stretch * d,
                                h = w.isHorizontal() ? w.params.coverflow.stretch * d : 0;
                            Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                            var g = "translate3d(" + h + "px," + f + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, w.params.coverflow.slideShadows) {
                                var v = w.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    b = w.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === b.length && (b = t('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(b)), v.length && (v[0].style.opacity = d > 0 ? d : 0), b.length && (b[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (w.browser.ie) {
                            var y = w.wrapper[0].style;
                            y.perspectiveOrigin = a + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, w.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = w.scrollbar,
                        a = w.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        r = a - t.track.offset()[w.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                        i = -w.minTranslate() * t.moveDivider,
                        s = -w.maxTranslate() * t.moveDivider;
                    i > r ? r = i : r > s && (r = s), r = -r / t.moveDivider, w.updateProgress(r), w.setWrapperTranslate(r, !0)
                },
                dragStart: function(e) {
                    var t = w.scrollbar;
                    t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), w.params.scrollbarHide && t.track.css("opacity", 1), w.wrapper.transition(100), t.drag.transition(100), w.emit("onScrollbarDragStart", w)
                },
                dragMove: function(e) {
                    var t = w.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), w.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), w.emit("onScrollbarDragMove", w))
                },
                dragEnd: function(e) {
                    var t = w.scrollbar;
                    t.isTouched && (t.isTouched = !1, w.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0), t.track.transition(400)
                    }, 1e3)), w.emit("onScrollbarDragEnd", w), w.params.scrollbarSnapOnRelease && w.slideReset())
                },
                enableDraggable: function() {
                    var e = w.scrollbar,
                        a = w.support.touch ? e.track : document;
                    t(e.track).on(w.touchEvents.start, e.dragStart), t(a).on(w.touchEvents.move, e.dragMove), t(a).on(w.touchEvents.end, e.dragEnd)
                },
                disableDraggable: function() {
                    var e = w.scrollbar,
                        a = w.support.touch ? e.track : document;
                    t(e.track).off(w.touchEvents.start, e.dragStart), t(a).off(w.touchEvents.move, e.dragMove), t(a).off(w.touchEvents.end, e.dragEnd)
                },
                set: function() {
                    if (w.params.scrollbar) {
                        var e = w.scrollbar;
                        e.track = t(w.params.scrollbar), w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && e.track.length > 1 && 1 === w.container.find(w.params.scrollbar).length && (e.track = w.container.find(w.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = w.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = w.size / w.virtualSize, e.moveDivider = e.divider * (e.trackSize / w.size), e.dragSize = e.trackSize * e.divider, w.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", w.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (w.params.scrollbar) {
                        var e, t = w.scrollbar,
                            a = (w.translate || 0, t.dragSize);
                        e = (t.trackSize - t.dragSize) * w.progress, w.rtl && w.isHorizontal() ? (e = -e, e > 0 ? (a = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (a = t.trackSize + e)) : 0 > e ? (a = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (a = t.trackSize - e), w.isHorizontal() ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = a + "px") : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = a + "px"), w.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    w.params.scrollbar && w.scrollbar.drag.transition(e)
                }
            }, w.controller = {
                LinearSpline: function(e, t) {
                    this.x = e, this.y = t, this.lastIndex = e.length - 1;
                    var a, r;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (r = i(this.x, e), a = r - 1, (e - this.x[a]) * (this.y[r] - this.y[a]) / (this.x[r] - this.x[a]) + this.y[a]) : 0
                    };
                    var i = function() {
                        var e, t, a;
                        return function(r, i) {
                            for (t = -1, e = r.length; e - t > 1;) r[a = e + t >> 1] <= i ? t = a : e = a;
                            return e
                        }
                    }()
                },
                getInterpolateFunction: function(e) {
                    w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid, e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function r(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -w.translate : w.translate, "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(t), s = -w.controller.spline.interpolate(-e)), s && "container" !== w.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (w.maxTranslate() - w.minTranslate()), s = (e - w.minTranslate()) * i + t.minTranslate()), w.params.controlInverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setWrapperTranslate(s, !1, w), t.updateActiveIndex()
                    }
                    var i, s, n = w.params.control;
                    if (w.isArray(n))
                        for (var o = 0; o < n.length; o++) n[o] !== t && n[o] instanceof a && r(n[o]);
                    else n instanceof a && t !== n && r(n)
                },
                setTransition: function(e, t) {
                    function r(t) {
                        t.setWrapperTransition(e, w), 0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            s && (t.params.loop && "slide" === w.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }
                    var i, s = w.params.control;
                    if (w.isArray(s))
                        for (i = 0; i < s.length; i++) s[i] !== t && s[i] instanceof a && r(s[i]);
                    else s instanceof a && t !== s && r(s)
                }
            }, w.hashnav = {
                init: function() {
                    if (w.params.hashnav) {
                        w.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, a = 0, r = w.slides.length; r > a; a++) {
                                var i = w.slides.eq(a),
                                    s = i.attr("data-hash");
                                if (s === e && !i.hasClass(w.params.slideDuplicateClass)) {
                                    var n = i.index();
                                    w.slideTo(n, t, w.params.runCallbacksOnInit, !0)
                                }
                            }
                    }
                },
                setHash: function() {
                    w.hashnav.initialized && w.params.hashnav && (document.location.hash = w.slides.eq(w.activeIndex).attr("data-hash") || "")
                }
            }, w.disableKeyboardControl = function() {
                w.params.keyboardControl = !1, t(document).off("keydown", l)
            }, w.enableKeyboardControl = function() {
                w.params.keyboardControl = !0, t(document).on("keydown", l)
            }, w.parallax = {
                setTranslate: function() {
                    w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        p(this, w.progress)
                    }), w.slides.each(function() {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = Math.min(Math.max(e[0].progress, -1), 1);
                            p(this, t)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = w.params.speed), w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var a = t(this),
                            r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (r = 0), a.transition(r)
                    })
                }
            }, w._plugins = [];
            for (var O in w.plugins) {
                var N = w.plugins[O](w, w.params[O]);
                N && w._plugins.push(N)
            }
            return w.callPlugins = function(e) {
                for (var t = 0; t < w._plugins.length; t++) e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, w.emitterEventListeners = {}, w.emit = function(e) {
                w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (w.emitterEventListeners[e])
                    for (t = 0; t < w.emitterEventListeners[e].length; t++) w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, w.on = function(e, t) {
                return e = d(e), w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []), w.emitterEventListeners[e].push(t), w
            }, w.off = function(e, t) {
                var a;
                if (e = d(e), "undefined" == typeof t) return w.emitterEventListeners[e] = [], w;
                if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                    for (a = 0; a < w.emitterEventListeners[e].length; a++) w.emitterEventListeners[e][a] === t && w.emitterEventListeners[e].splice(a, 1);
                    return w
                }
            }, w.once = function(e, t) {
                e = d(e);
                var a = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), w.off(e, a)
                };
                return w.on(e, a), w
            }, w.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, t) {
                    return e.attr("role", t), e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (t(e.target).is(w.params.nextButton) ? (w.onClickNext(e), w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : t(e.target).is(w.params.prevButton) && (w.onClickPrev(e), w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)), t(e.target).is("." + w.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = w.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function() {
                    w.params.nextButton && w.nextButton && w.nextButton.length > 0 && (w.a11y.makeFocusable(w.nextButton), w.a11y.addRole(w.nextButton, "button"), w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)), w.params.prevButton && w.prevButton && w.prevButton.length > 0 && (w.a11y.makeFocusable(w.prevButton), w.a11y.addRole(w.prevButton, "button"), w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)), t(w.container).append(w.a11y.liveRegion)
                },
                initPagination: function() {
                    w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                        var e = t(this);
                        w.a11y.makeFocusable(e), w.a11y.addRole(e, "button"), w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    w.a11y.liveRegion && w.a11y.liveRegion.length > 0 && w.a11y.liveRegion.remove()
                }
            }, w.init = function() {
                w.params.loop && w.createLoop(), w.updateContainerSize(), w.updateSlidesSize(), w.updatePagination(), w.params.scrollbar && w.scrollbar && (w.scrollbar.set(), w.params.scrollbarDraggable && w.scrollbar.enableDraggable()), "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(), w.effects[w.params.effect].setTranslate()), w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit), 0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(), w.lazy && w.params.lazyLoading && (w.lazy.load(), w.lazy.initialImageLoaded = !0))), w.attachEvents(), w.params.observer && w.support.observer && w.initObservers(), w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(), w.params.autoplay && w.startAutoplay(), w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(), w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(), w.params.hashnav && w.hashnav && w.hashnav.init(), w.params.a11y && w.a11y && w.a11y.init(), w.emit("onInit", w)
            }, w.cleanupStyles = function() {
                w.container.removeClass(w.classNames.join(" ")).removeAttr("style"), w.wrapper.removeAttr("style"), w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass), w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass), w.params.prevButton && t(w.params.prevButton).removeClass(w.params.buttonDisabledClass), w.params.nextButton && t(w.params.nextButton).removeClass(w.params.buttonDisabledClass), w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"), w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
            }, w.destroy = function(e, t) {
                w.detachEvents(), w.stopAutoplay(), w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(), w.params.loop && w.destroyLoop(), t && w.cleanupStyles(), w.disconnectObservers(), w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(), w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(), w.params.a11y && w.a11y && w.a11y.destroy(), w.emit("onDestroy"), e !== !1 && (w = null)
            }, w.init(), w
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                i = !a && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: a || i || r,
                android: t
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a++)
                    if (t[a] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var r = (function() {
            var e = function(e) {
                    var t = this,
                        a = 0;
                    for (a = 0; a < e.length; a++) t[a] = e[a];
                    return t.length = e.length, this
                },
                t = function(t, a) {
                    var r = [],
                        i = 0;
                    if (t && !a && t instanceof e) return t;
                    if (t)
                        if ("string" == typeof t) {
                            var s, n, o = t.trim();
                            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                var l = "div";
                                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = t, i = 0; i < n.childNodes.length; i++) r.push(n.childNodes[i])
                            } else
                                for (s = a || "#" !== t[0] || t.match(/[ .<>:~]/) ? (a || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], i = 0; i < s.length; i++) s[i] && r.push(s[i])
                        } else if (t.nodeType || t === window || t === document) r.push(t);
                    else if (t.length > 0 && t[0].nodeType)
                        for (i = 0; i < t.length; i++) r.push(t[i]);
                    return new e(r)
                };
            return e.prototype = {
                addClass: function(e) {
                    if ("undefined" == typeof e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var r = 0; r < this.length; r++) this[r].classList.add(t[a]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var r = 0; r < this.length; r++) this[r].classList.remove(t[a]);
                    return this
                },
                hasClass: function(e) {
                    return this[0] ? this[0].classList.contains(e) : !1
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[a]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var a = 0; a < this.length; a++)
                        if (2 === arguments.length) this[a].setAttribute(e, t);
                        else
                            for (var r in e) this[a][r] = e[r], this[a].setAttribute(r, e[r]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    if ("undefined" != typeof t) {
                        for (var a = 0; a < this.length; a++) {
                            var r = this[a];
                            r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}), r.dom7ElementDataStorage[e] = t
                        }
                        return this
                    }
                    if (this[0]) {
                        var i = this[0].getAttribute("data-" + e);
                        return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                    }
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var t = 0; t < this.length; t++) {
                        var a = this[t].style;
                        a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
                    }
                    return this
                },
                on: function(e, a, r, i) {
                    function s(e) {
                        var i = e.target;
                        if (t(i).is(a)) r.call(i, e);
                        else
                            for (var s = t(i).parents(), n = 0; n < s.length; n++) t(s[n]).is(a) && r.call(s[n], e)
                    }
                    var n, o, l = e.split(" ");
                    for (n = 0; n < this.length; n++)
                        if ("function" == typeof a || a === !1)
                            for ("function" == typeof a && (r = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], r, i);
                        else
                            for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
                                listener: r,
                                liveListener: s
                            }), this[n].addEventListener(l[o], s, i);
                    return this
                },
                off: function(e, t, a, r) {
                    for (var i = e.split(" "), s = 0; s < i.length; s++)
                        for (var n = 0; n < this.length; n++)
                            if ("function" == typeof t || t === !1) "function" == typeof t && (a = arguments[1], r = arguments[2] || !1), this[n].removeEventListener(i[s], a, r);
                            else if (this[n].dom7LiveListeners)
                        for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === a && this[n].removeEventListener(i[s], this[n].dom7LiveListeners[o].liveListener, r);
                    return this
                },
                once: function(e, t, a, r) {
                    function i(n) {
                        a(n), s.off(e, t, i, r)
                    }
                    var s = this;
                    "function" == typeof t && (t = !1, a = arguments[1], r = arguments[2]), s.on(e, t, i, r)
                },
                trigger: function(e, t) {
                    for (var a = 0; a < this.length; a++) {
                        var r;
                        try {
                            r = new window.CustomEvent(e, {
                                detail: t,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (i) {
                            r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = t
                        }
                        this[a].dispatchEvent(r)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function t(s) {
                        if (s.target === this)
                            for (e.call(this, s), a = 0; a < r.length; a++) i.off(r[a], t)
                    }
                    var a, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        i = this;
                    if (e)
                        for (a = 0; a < r.length; a++) i.on(r[a], t);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            a = document.body,
                            r = e.clientTop || a.clientTop || 0,
                            i = e.clientLeft || a.clientLeft || 0,
                            s = window.pageYOffset || e.scrollTop,
                            n = window.pageXOffset || e.scrollLeft;
                        return {
                            top: t.top + s - r,
                            left: t.left + n - i
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var a;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (a = 0; a < this.length; a++)
                                for (var r in e) this[a].style[r] = e[r];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (a = 0; a < this.length; a++) this[a].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                    return this
                },
                html: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++) this[t].textContent = e;
                    return this
                },
                is: function(a) {
                    if (!this[0]) return !1;
                    var r, i;
                    if ("string" == typeof a) {
                        var s = this[0];
                        if (s === document) return a === document;
                        if (s === window) return a === window;
                        if (s.matches) return s.matches(a);
                        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(a);
                        if (s.mozMatchesSelector) return s.mozMatchesSelector(a);
                        if (s.msMatchesSelector) return s.msMatchesSelector(a);
                        for (r = t(a), i = 0; i < r.length; i++)
                            if (r[i] === this[0]) return !0;
                        return !1
                    }
                    if (a === document) return this[0] === document;
                    if (a === window) return this[0] === window;
                    if (a.nodeType || a instanceof e) {
                        for (r = a.nodeType ? [a] : a, i = 0; i < r.length; i++)
                            if (r[i] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                        return t
                    }
                },
                eq: function(t) {
                    if ("undefined" == typeof t) return this;
                    var a, r = this.length;
                    return t > r - 1 ? new e([]) : 0 > t ? (a = r + t, new e(0 > a ? [] : [this[a]])) : new e([this[t]])
                },
                append: function(t) {
                    var a, r;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var i = document.createElement("div");
                            for (i.innerHTML = t; i.firstChild;) this[a].appendChild(i.firstChild)
                        } else if (t instanceof e)
                        for (r = 0; r < t.length; r++) this[a].appendChild(t[r]);
                    else this[a].appendChild(t);
                    return this
                },
                prepend: function(t) {
                    var a, r;
                    for (a = 0; a < this.length; a++)
                        if ("string" == typeof t) {
                            var i = document.createElement("div");
                            for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r--) this[a].insertBefore(i.childNodes[r], this[a].childNodes[0])
                        } else if (t instanceof e)
                        for (r = 0; r < t.length; r++) this[a].insertBefore(t[r], this[a].childNodes[0]);
                    else this[a].insertBefore(t, this[a].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var a = t(e), r = 0; r < this.length; r++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[r], a[0]);
                        else if (a.length > 1)
                        for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[r].cloneNode(!0), a[i])
                },
                insertAfter: function(e) {
                    for (var a = t(e), r = 0; r < this.length; r++)
                        if (1 === a.length) a[0].parentNode.insertBefore(this[r], a[0].nextSibling);
                        else if (a.length > 1)
                        for (var i = 0; i < a.length; i++) a[i].parentNode.insertBefore(this[r].cloneNode(!0), a[i].nextSibling)
                },
                next: function(a) {
                    return new e(this.length > 0 ? a ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(a) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(a) {
                    var r = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.nextElementSibling;) {
                        var s = i.nextElementSibling;
                        a ? t(s).is(a) && r.push(s) : r.push(s), i = s
                    }
                    return new e(r)
                },
                prev: function(a) {
                    return new e(this.length > 0 ? a ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(a) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(a) {
                    var r = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.previousElementSibling;) {
                        var s = i.previousElementSibling;
                        a ? t(s).is(a) && r.push(s) : r.push(s), i = s
                    }
                    return new e(r)
                },
                parent: function(e) {
                    for (var a = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && a.push(this[r].parentNode) : a.push(this[r].parentNode);
                    return t(t.unique(a))
                },
                parents: function(e) {
                    for (var a = [], r = 0; r < this.length; r++)
                        for (var i = this[r].parentNode; i;) e ? t(i).is(e) && a.push(i) : a.push(i), i = i.parentNode;
                    return t(t.unique(a))
                },
                find: function(t) {
                    for (var a = [], r = 0; r < this.length; r++)
                        for (var i = this[r].querySelectorAll(t), s = 0; s < i.length; s++) a.push(i[s]);
                    return new e(a)
                },
                children: function(a) {
                    for (var r = [], i = 0; i < this.length; i++)
                        for (var s = this[i].childNodes, n = 0; n < s.length; n++) a ? 1 === s[n].nodeType && t(s[n]).is(a) && r.push(s[n]) : 1 === s[n].nodeType && r.push(s[n]);
                    return new e(t.unique(r))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, a, r = this;
                    for (e = 0; e < arguments.length; e++) {
                        var i = t(arguments[e]);
                        for (a = 0; a < i.length; a++) r[r.length] = i[a], r.length++
                    }
                    return r
                }
            }, t.fn = e.prototype, t.unique = function(e) {
                for (var t = [], a = 0; a < e.length; a++) - 1 === t.indexOf(e[a]) && t.push(e[a]);
                return t
            }, t
        }()), i = ["jQuery", "Zepto", "Dom7"], s = 0; s < i.length; s++) window[i[s]] && e(window[i[s]]);
    var n;
    n = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery : r, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
        function t(s) {
            if (s.target === this)
                for (e.call(this, s), a = 0; a < r.length; a++) i.off(r[a], t)
        }
        var a, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;
        if (e)
            for (a = 0; a < r.length; a++) i.on(r[a], t);
        return this
    }), "transform" in n.fn || (n.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = e
        }
        return this
    }), "transition" in n.fn || (n.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var a = this[t].style;
            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = e
        }
        return this
    })), window.Swiper = a
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
(function($, can, HP) {
    can.view.ejs('ACLoaderEJS', '    <ul>' + '        <% can.$.each(list, function( i, item ) { %>' + '                <li>' + '                    <a id="i<%= i%>" href="javascript:void(0);" class="js_suggestion_text" data-suggestion="<%=this.term0%>">' + '                        <%= this.term0 %>' + '                    </a>' + '                </li>' + '        <% }) %>' + '    </ul>');
    HP.DefaultAutocompleteSSLoader = can.Control({
        defaults: {
            view: "ACLoaderEJS",
            language: '',
            country: '',
            requestType: 'jsonp',
            url: '',
            count: 10,
            callbackParam: 'cb'
        }
    }, {
        'init': function(element, options) {
            this.type = 'iap-fast';
        },
        'getSuggestions': function(query, callback) {
            var params = {
                    q: query,
                    lang: this.options.language,
                    category: 'SS',
                    country: this.options.country
                },
                result = {
                    'query': query,
                    'html': '',
                    'itemsCount': 0
                },
                self = this;
            $.ajax({
                url: this.options.url,
                data: params,
                success: function(data) {
                    if (data) {
                        var items = data.data.SuggestionItems[0] ? data.data.SuggestionItems[0].list : [];
                        if (items && items.length != 0) {
                            if (self.options.count < items.length) {
                                items = items.slice(0, self.options.count);
                            }
                            result.html = can.view.render(self.options.view, {
                                list: items
                            });
                            result.itemsCount = items.length;
                        }
                    }
                    callback(result);
                },
                error: function() {
                    callback(null);
                },
                dataType: this.options.requestType,
                jsonp: this.options.callbackParam
            });
        },
        'getParams': function() {
            return this.options;
        },
        'setParams': function(params) {
            this.options = $.extend(true, this.options, params);
            if (this.options.language == "zh") {
                if (this.options.country == "hk" || this.options.country == "tw") {
                    this.options.language = "zht";
                } else if (this.options.country == "cn") {
                    this.options.language = "zhs";
                }
            }
        }
    });
})(can.$, can, window.HP || (window.HP = {}));
window.autocompleteLoader.addLoader(new HP.DefaultAutocompleteSSLoader(null, {}));
(function($, HP, HF) {
    HP.responsiveHeader = true;
    var currentDomain = function() {
        var scripts = document.getElementsByTagName('script'),
            src, link, domain;
        for (var a = 0; a < scripts.length; a++) {
            src = scripts[a].src.toLowerCase();
            if (src.indexOf('hf-') > 0)
                link = src.split('/');
        }
        domain = link[0] + '//' + link[2] + '/';
        domain = domain.replace("www.www8-hp.com", "www8.hp.com");
        return domain;
    };
    HP.caasDomain = HP.caasDomain || currentDomain();
    var showLadybug = function() {
        var ladybugEle = document.getElementById('ladybug');
        if (ladybugEle !== null) {
            ladybugEle.style.display = 'block';
        }
        if (ladybugEle !== null && window.ladyBugUrl !== undefined) {
            var ladyBugRefUrl = window.ladyBugUrl + '?=' + window.location.href;
            $('.hp_employees_container a').attr({
                href: ladyBugRefUrl,
                onmouseover: "self.status=" + "\'" + ladyBugRefUrl + "\'"
            });
        }
        if (ladybugEle !== null && window.ladyBugUrl === undefined) {
            var refUrl = window.location.href;
            var hrefVal = $('.hp_employees_container a').attr("href");
            $('.hp_employees_container a').attr({
                href: hrefVal + '?=' + refUrl
            });
        }
    };
    var ladyBugInit = function(params, path) {
        if (typeof(ladybugLoaded) === 'undefined') {
            ladybugLoaded = true;
            var defaultParams = {
                countryCode: "ie",
                languageCode: "en"
            };
            var p = $.extend(defaultParams, params);
            var lb = readCookie("HP_LB");
            if (!lb) {
                $.getScript(HP.caasDomain + p.countryCode + "/" + p.languageCode + path).done(function() {
                    if (OAS_AD_LADYBUG() == 1) {
                        showLadybug();
                    }
                });
            } else if (lb == 1) {
                showLadybug();
            }
        }
    };
    HP.Utils = HP.Utils || {
        ready: function() {}
    };
    HP.hfInit = function(params) {
        HF.initResponsiveComponents = !(window.isIE7 || window.isIE8);
        var defaultParams = {};
        var p = $.extend(defaultParams, params);
        HF.Utils.ABReady(function() {
            var cats = [];
            var searchBox = can.$('#searchBox'),
                searchContainer = searchBox.parent();
            initSearchBoxSliding(searchBox, searchContainer);
            var langInput = can.$('input[name="lang"]');
            var countryInput = can.$('input[name="cc"]');
            var language = p.languageCode || (langInput.length ? langInput[0].value : 'en');
            var country = p.countryCode || (countryInput.length ? countryInput[0].value : 'ie');
            var autocompleteParams;
            if (window.customAutocomplete) {
                autocompleteParams = window.customAutocomplete;
            } else {
                autocompleteParams = p.autocompleteParams;
            }
            for (var i = 0; i < autocompleteParams.length; i++) {
                autocompleteParams[i].url = autocompleteParams[i].url.replace(/&amp;/g, '&');
            }
            window.autocompleteLoader.setParams({
                language: language,
                country: country,
                url: p.autocompleteURL
            }, autocompleteParams);
            hfAutocompleteStart({});
            initSkipLinks();
            HF.Accessibility.logoScreenReading(can.$('.hf_logo'));
            HF.Accessibility.socialIconsScreenReading(can.$('.ul_media_links li a'));
            HF.Control.init(HF.TopMenu, '.js_header_topmenu .selectable');
            HF.Control.init(HF.footerEmail, '#footer_email_input');
            HF.Control.init(HF.CountrySelector, '.js_cselector');
            HF.Control.init(HF.SearchWidget, '.js_search_widget');
            HF.Control.init(HF.ShoppingCart, '.js_shopping_widget', {
                API: {
                    loader: "cartLoader"
                }
            });
            if (HF.initResponsiveComponents) {
                HF.Control.init(HF.CountrySelectorResponsive, '.js_cselector');
                HF.Control.init(HF.TopMenuWidget, '.js_top_menu_widget');
                HF.Control.init(HF.SiteLinks, '.site_links', {
                    triggersSelector: ".js_site_links_trigger",
                    targetsSelector: ".js_site_links_target"
                });
            }
            initHFMetrics('.link_metrics');
            window.initHFMetrics = function() {};
            ladyBugInit(p, "/caas/3.0/ladybug.jsp");
            HP.HF_IS_READY = true;
        });
    };
    window.catNavInit = function(params) {
        var catName = params.categoryName;
        var classes = $($('.' + catName + '.level1-desktop')[0]).parent().attr('class').split(' ');
        for (var i = 0; i < classes.length; i++) {
            var matches = /^menu\-(.+)/.exec(classes[i]);
            if (matches != null) {
                var menuClass = matches[1];
            }
        }
        $('.' + catName + '.level1-desktop').addClass('hf-sticky-menu-item').attr('aria-expanded', 'true');
        $(".submenu-category").html($($('.menu-' + menuClass)[0]).find('.level2').removeClass('js_hf_menu').removeClass('hf_menu').clone());
        $($('.submenu-' + menuClass)[0]).addClass('inactive-menu');
        $($('.menu-' + menuClass)[0]).addClass('inactive-menu');
        HF.Control.init(HF.TopMenu, '.js_header_topmenu .selectable');
    }
    window.stickySearchInit = function() {
        window.stickySearchBox = true;
        HF.Control.init(HF.SearchWidget, '.js_search_widget');
    }
})(can.$, window.HP || (window.HP = {}), window.HF || (window.HF = {}));
var euck_jsScript;
if (typeof hpeuck_loaded === 'undefined') {
    var hpeuck_loaded = false;
}
if (document.location.protocol == "https:") {
    euck_jsScript = "https://ssl.www8.hp.com/ww/en/system/include/privacy_cookie.JS";
} else {
    euck_jsScript = "http://www8.hp.com/ww/en/system/include/privacy_cookie.JS";
}
var trItgDm = ("g4t05.*?\\.houston\\.hp\\.com|www8-itg\\.houston\\.hp\\.com|g9t07.*?\\.houston\\.hp\\.com|g6t0.*?\\.atlanta\\.hp\\.com|d9t01.*?\\.houston\\.hp\\.com|llb1\\.houston\\.hp\\.com|g4t8.*?\\.houston\\.hp\\.com|itg-.*?\\.austin\\.hp\\.com"),
    trItgDmnames = trItgDm.split('|'),
    hfCssFileDomain = document.querySelector('link[href*="hpi-hf"]').getAttribute('href').split('hp.com')[0];
for (var i = trItgDmnames.length - 1; i >= 0; i = i - 1) {
    if ((hfCssFileDomain + "hp.com").search(new RegExp(trItgDmnames[i])) != -1 && document.location.href.search(new RegExp(trItgDmnames[i])) == -1) {
        euck_jsScript = hfCssFileDomain + "hp.com/ww/en/system/include/privacy_cookie.JS";
        break;
    }
}
var trdnames = "www8.hp.com|g4t05.*?\\.houston\\.hp\\.com|www8-itg\\.houston\\.hp\\.com|g9t07.*?\\.houston\\.hp\\.com|g6t0.*?\\.atlanta\\.hp\\.com|d9t01.*?\\.houston\\.hp\\.com|llb1\\.houston\\.hp\\.com|g4t8.*?\\.houston\\.hp\\.com|itg-.*?\\.austin\\.hp\\.com";
var dm = trdnames.split('|');
for (var k = dm.length - 1; k >= 0; k = k - 1) {
    if (document.location.href.indexOf(dm[k]) != -1 || document.location.href.search(new RegExp(dm[k])) != -1) {
        euck_jsScript = "/ww/en/system/include/privacy_cookie.JS";
        break;
    }
}

function euckLoadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};
if (!hpeuck_loaded) {
    euckLoadScript(euck_jsScript, function() {});
}

/*
Date: 1/15/2019 1:57:15 PM
All images published
*/