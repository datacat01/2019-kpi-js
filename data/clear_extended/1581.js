(function($) {
    Drupal.behaviors.cloneSearch = {
        attach: function(context, settings) {
            if ($(".doj-search-clone", context).length) {
                return;
            }
            var searchClone;
            if ($("#block-search-form", context).length) {
                searchClone = "#block-search-form .block__content form";
            } else if ($("#block-usasearch-hosted-form", context).length) {
                searchClone = "#block-usasearch-hosted-form .block__content form";
            } else {
                return;
            }
            $(searchClone, context).clone().addClass('doj-search-clone').prependTo('#block-nice-menus-1 .block__content ul');
            $('.doj-search-clone', context).wrap('<li></li>');
        }
    };
})(jQuery);; /*})'"*/
(function($) {
    $.fn.bgIframe = $.fn.bgiframe = function(s) {
        if ($.browser.msie && parseInt($.browser.version) <= 6) {
            s = $.extend({
                top: 'auto',
                left: 'auto',
                width: 'auto',
                height: 'auto',
                opacity: true,
                src: 'javascript:false;'
            }, s || {});
            var prop = function(n) {
                    return n && n.constructor == Number ? n + 'px' : n;
                },
                html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + s.src + '"' + 'style="display:block;position:absolute;z-index:-1;' + (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') + 'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')' : prop(s.top)) + ';' + 'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')' : prop(s.left)) + ';' + 'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')' : prop(s.width)) + ';' + 'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')' : prop(s.height)) + ';' + '"/>';
            return this.each(function() {
                if ($('> iframe.bgiframe', this).length == 0) this.insertBefore(document.createElement(html), this.firstChild);
            });
        }
        return this;
    };
    if (!$.browser.version) $.browser.version = navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)[1];
})(jQuery);; /*})'"*/
(function($) {
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var cfg = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };
        if (typeof handlerIn === "object") {
            cfg = $.extend(cfg, handlerIn);
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector
            });
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut
            });
        }
        var cX, cY, pX, pY;
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if (Math.sqrt((pX - cX) * (pX - cX) + (pY - cY) * (pY - cY)) < cfg.sensitivity) {
                $(ob).off("mousemove.hoverIntent", track);
                ob.hoverIntent_s = true;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = false;
            return cfg.out.apply(ob, [ev]);
        };
        var handleHover = function(e) {
            var ev = $.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            if (e.type === "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).on("mousemove.hoverIntent", track);
                if (!ob.hoverIntent_s) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                $(ob).off("mousemove.hoverIntent", track);
                if (ob.hoverIntent_s) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        return this.on({
            'mouseenter.hoverIntent': handleHover,
            'mouseleave.hoverIntent': handleHover
        }, cfg.selector);
    };
})(jQuery);; /*})'"*/ ;
(function($) {
    $.fn.superfish = function(op) {
        var sf = $.fn.superfish,
            c = sf.c,
            $arrow = $(['<span class="', c.arrowClass, '"> &#187;</span>'].join('')),
            over = function() {
                var $$ = $(this),
                    menu = getMenu($$);
                clearTimeout(menu.sfTimer);
                $$.showSuperfishUl().siblings().hideSuperfishUl();
            },
            out = function() {
                var $$ = $(this),
                    menu = getMenu($$),
                    o = sf.op;
                clearTimeout(menu.sfTimer);
                menu.sfTimer = setTimeout(function() {
                    o.retainPath = ($.inArray($$[0], o.$path) > -1);
                    $$.hideSuperfishUl();
                    if (o.$path.length && $$.parents(['li.', o.hoverClass].join('')).length < 1) {
                        over.call(o.$path);
                    }
                }, o.delay);
            },
            getMenu = function($menu) {
                var menu = $menu.parents(['ul.', c.menuClass, ':first'].join(''))[0];
                sf.op = sf.o[menu.serial];
                return menu;
            },
            addArrow = function($a) {
                $a.addClass(c.anchorClass).append($arrow.clone());
            };
        return this.each(function() {
            var s = this.serial = sf.o.length;
            var o = $.extend({}, sf.defaults, op);
            o.$path = $('li.' + o.pathClass, this).slice(0, o.pathLevels).each(function() {
                $(this).addClass([o.hoverClass, c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass);
            });
            sf.o[s] = sf.op = o;
            $('li:has(ul)', this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over, out).each(function() {
                if (o.autoArrows) {
                    addArrow($('>a:first-child', this));
                }
            }).not('.' + c.bcClass).hideSuperfishUl();
            var $a = $('a', this);
            $a.each(function(i) {
                var $li = $a.eq(i).parents('li');
                $a.eq(i).focus(function() {
                    over.call($li);
                }).blur(function() {
                    out.call($li);
                });
            });
            o.onInit.call(this);
        }).each(function() {
            var menuClasses = [c.menuClass];
            if (sf.op.dropShadows && !($.browser.msie && $.browser.version < 7)) {
                menuClasses.push(c.shadowClass);
            }
            $(this).addClass(menuClasses.join(' '));
        });
    };
    var sf = $.fn.superfish;
    sf.o = [];
    sf.op = {};
    sf.IE7fix = function() {
        var o = sf.op;
        if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity != undefined) {
            this.toggleClass(sf.c.shadowClass + '-off');
        }
    };
    sf.c = {
        bcClass: 'sf-breadcrumb',
        menuClass: 'sf-js-enabled',
        anchorClass: 'sf-with-ul',
        arrowClass: 'sf-sub-indicator',
        shadowClass: 'sf-shadow'
    };
    sf.defaults = {
        hoverClass: 'sfHover',
        pathClass: 'overideThisToUse',
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: 'show'
        },
        speed: 'normal',
        autoArrows: true,
        dropShadows: true,
        disableHI: false,
        onInit: function() {},
        onBeforeShow: function() {},
        onShow: function() {},
        onHide: function() {}
    };
    $.fn.extend({
        hideSuperfishUl: function() {
            var o = sf.op,
                not = (o.retainPath === true) ? o.$path : '';
            o.retainPath = false;
            var $ul = $(['li.', o.hoverClass].join(''), this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility', 'hidden');
            o.onHide.call($ul);
            return this;
        },
        showSuperfishUl: function() {
            var o = sf.op,
                sh = sf.c.shadowClass + '-off',
                $ul = this.addClass(o.hoverClass).find('>ul:hidden').css('visibility', 'visible');
            sf.IE7fix.call($ul);
            o.onBeforeShow.call($ul);
            $ul.animate(o.animation, o.speed, function() {
                sf.IE7fix.call($ul);
                o.onShow.call($ul);
            });
            return this;
        }
    });
})(jQuery);;; /*})'"*/
(function($) {
    Drupal.behaviors.niceMenus = {
        attach: function(context, settings) {
            $('ul.nice-menu:not(.nice-menus-processed)').addClass('nice-menus-processed').each(function() {
                $(this).superfish({
                    hoverClass: 'over',
                    autoArrows: false,
                    dropShadows: false,
                    delay: Drupal.settings.nice_menus_options.delay,
                    speed: Drupal.settings.nice_menus_options.speed
                });
                $(this).find('ul').bgIframe({
                    opacity: false
                });
                $('ul.nice-menu ul').css('display', 'none');
            });
        }
    };
})(jQuery);;; /*})'"*/
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
! function e(t, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!s && l) return l(a, !0);
                if (r) return r(a, !0);
                var d = new Error("Cannot find module '" + a + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var u = n[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                var n = t[a][1][e];
                return i(n || e)
            }, u, u.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    1: [function(e, t, n) {}, {}],
    2: [function(e, t, n) {
        (function(n) {
            var o, i = void 0 !== n ? n : "undefined" != typeof window ? window : {},
                r = e(1);
            "undefined" != typeof document ? o = document : (o = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (o = i["__GLOBAL_DOCUMENT_CACHE@4"] = r), t.exports = o
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        1: 1
    }],
    3: [function(e, t, n) {
        (function(e) {
            var n;
            n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {}, t.exports = n
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    4: [function(e, t, n) {
        ! function(e) {
            function n() {}

            function o(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }

            function i(e) {
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
            }

            function r(e, t) {
                for (; 3 === e._state;) e = e._value;
                0 !== e._state ? (e._handled = !0, i._immediateFn(function() {
                    var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== n) {
                        var o;
                        try {
                            o = n(e._value)
                        } catch (e) {
                            return void s(t.promise, e)
                        }
                        a(t.promise, o)
                    } else(1 === e._state ? a : s)(t.promise, e._value)
                })) : e._deferreds.push(t)
            }

            function a(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var n = t.then;
                        if (t instanceof i) return e._state = 3, e._value = t, void l(e);
                        if ("function" == typeof n) return void u(o(n, t), e)
                    }
                    e._state = 1, e._value = t, l(e)
                } catch (t) {
                    s(e, t)
                }
            }

            function s(e, t) {
                e._state = 2, e._value = t, l(e)
            }

            function l(e) {
                2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                    e._handled || i._unhandledRejectionFn(e._value)
                });
                for (var t = 0, n = e._deferreds.length; t < n; t++) r(e, e._deferreds[t]);
                e._deferreds = null
            }

            function d(e, t, n) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
            }

            function u(e, t) {
                var n = !1;
                try {
                    e(function(e) {
                        n || (n = !0, a(t, e))
                    }, function(e) {
                        n || (n = !0, s(t, e))
                    })
                } catch (e) {
                    if (n) return;
                    n = !0, s(t, e)
                }
            }
            var c = setTimeout;
            i.prototype.catch = function(e) {
                return this.then(null, e)
            }, i.prototype.then = function(e, t) {
                var o = new this.constructor(n);
                return r(this, new d(e, t, o)), o
            }, i.all = function(e) {
                var t = Array.prototype.slice.call(e);
                return new i(function(e, n) {
                    function o(r, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var s = a.then;
                                if ("function" == typeof s) return void s.call(a, function(e) {
                                    o(r, e)
                                }, n)
                            }
                            t[r] = a, 0 == --i && e(t)
                        } catch (e) {
                            n(e)
                        }
                    }
                    if (0 === t.length) return e([]);
                    for (var i = t.length, r = 0; r < t.length; r++) o(r, t[r])
                })
            }, i.resolve = function(e) {
                return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                    t(e)
                })
            }, i.reject = function(e) {
                return new i(function(t, n) {
                    n(e)
                })
            }, i.race = function(e) {
                return new i(function(t, n) {
                    for (var o = 0, i = e.length; o < i; o++) e[o].then(t, n)
                })
            }, i._immediateFn = "function" == typeof setImmediate && function(e) {
                setImmediate(e)
            } || function(e) {
                c(e, 0)
            }, i._unhandledRejectionFn = function(e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, i._setImmediateFn = function(e) {
                i._immediateFn = e
            }, i._setUnhandledRejectionFn = function(e) {
                i._unhandledRejectionFn = e
            }, void 0 !== t && t.exports ? t.exports = i : e.Promise || (e.Promise = i)
        }(this)
    }, {}],
    5: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e(7)),
            r = e(15),
            a = e(27),
            s = {
                lang: "en",
                en: r.EN
            };
        s.language = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            if (null !== t && void 0 !== t && t.length) {
                if ("string" != typeof t[0]) throw new TypeError("Language code must be a string value");
                if (!/^[a-z]{2}(\-[a-z]{2})?$/i.test(t[0])) throw new TypeError("Language code must have format `xx` or `xx-xx`");
                s.lang = t[0], void 0 === s[t[0]] ? (t[1] = null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) ? t[1] : {}, s[t[0]] = (0, a.isObjectEmpty)(t[1]) ? r.EN : t[1]) : null !== t[1] && void 0 !== t[1] && "object" === o(t[1]) && (s[t[0]] = t[1])
            }
            return s.lang
        }, s.t = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if ("string" == typeof e && e.length) {
                var n = void 0,
                    i = void 0,
                    r = s.language(),
                    l = function(e, t, n) {
                        return "object" !== (void 0 === e ? "undefined" : o(e)) || "number" != typeof t || "number" != typeof n ? e : [function() {
                            return arguments.length <= 1 ? void 0 : arguments[1]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                        }, function() {
                            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                        }, function() {
                            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : 0 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) || 11 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) || 12 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 0 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : [3]
                        }, function() {
                            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 != 11 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) <= 4 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 1 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 2 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 3 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 == 4 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 1 ? void 0 : arguments[1]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) > 2 && (arguments.length <= 0 ? void 0 : arguments[0]) < 7 ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) > 6 && (arguments.length <= 0 ? void 0 : arguments[0]) < 11 ? arguments.length <= 4 ? void 0 : arguments[4] : arguments.length <= 5 ? void 0 : arguments[5]
                        }, function() {
                            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 3 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 <= 10 ? arguments.length <= 4 ? void 0 : arguments[4] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 11 ? arguments.length <= 5 ? void 0 : arguments[5] : arguments.length <= 6 ? void 0 : arguments[6]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 0 === (arguments.length <= 0 ? void 0 : arguments[0]) || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 1 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 11 ? arguments.length <= 2 ? void 0 : arguments[2] : (arguments.length <= 0 ? void 0 : arguments[0]) % 100 > 10 && (arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 20 ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                        }, function() {
                            return (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 2 ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 == 1 ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : (arguments.length <= 0 ? void 0 : arguments[0]) % 10 >= 2 && (arguments.length <= 0 ? void 0 : arguments[0]) % 10 <= 4 && ((arguments.length <= 0 ? void 0 : arguments[0]) % 100 < 10 || (arguments.length <= 0 ? void 0 : arguments[0]) % 100 >= 20) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 8 !== (arguments.length <= 0 ? void 0 : arguments[0]) && 11 !== (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                        }, function() {
                            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : arguments.length <= 2 ? void 0 : arguments[2]
                        }, function() {
                            return 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 2 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : 3 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 3 ? void 0 : arguments[3] : arguments.length <= 4 ? void 0 : arguments[4]
                        }, function() {
                            return 0 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 1 ? void 0 : arguments[1] : 1 === (arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 2 ? void 0 : arguments[2] : arguments.length <= 3 ? void 0 : arguments[3]
                        }][n].apply(null, [t].concat(e))
                    };
                return void 0 !== s[r] && (n = s[r][e], null !== t && "number" == typeof t && (i = s[r]["mejs.plural-form"], n = l.apply(null, [n, t, i]))), !n && s.en && (n = s.en[e], null !== t && "number" == typeof t && (i = s.en["mejs.plural-form"], n = l.apply(null, [n, t, i]))), n = n || e, null !== t && "number" == typeof t && (n = n.replace("%1", t)), (0, a.escapeHTML)(n)
            }
            return e
        }, i.default.i18n = s, "undefined" != typeof mejsL10n && i.default.i18n.language(mejsL10n.language, mejsL10n.strings), n.default = s
    }, {
        15: 15,
        27: 27,
        7: 7
    }],
    6: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = o(e(3)),
            s = o(e(2)),
            l = o(e(7)),
            d = e(27),
            u = e(28),
            c = e(8),
            f = e(25),
            p = function e(t, n, o) {
                var p = this;
                i(this, e);
                var m = this;
                o = Array.isArray(o) ? o : null, m.defaults = {
                    renderers: [],
                    fakeNodeName: "mediaelementwrapper",
                    pluginPath: "build/",
                    shimScriptAccess: "sameDomain"
                }, n = Object.assign(m.defaults, n), m.mediaElement = s.default.createElement(n.fakeNodeName);
                var h = t,
                    v = !1;
                if ("string" == typeof t ? m.mediaElement.originalNode = s.default.getElementById(t) : (m.mediaElement.originalNode = t, h = t.id), void 0 === m.mediaElement.originalNode || null === m.mediaElement.originalNode) return null;
                m.mediaElement.options = n, h = h || "mejs_" + Math.random().toString().slice(2), m.mediaElement.originalNode.setAttribute("id", h + "_from_mejs");
                var y = m.mediaElement.originalNode.tagName.toLowerCase();
                ["video", "audio"].indexOf(y) > -1 && !m.mediaElement.originalNode.getAttribute("preload") && m.mediaElement.originalNode.setAttribute("preload", "none"), m.mediaElement.originalNode.parentNode.insertBefore(m.mediaElement, m.mediaElement.originalNode), m.mediaElement.appendChild(m.mediaElement.originalNode);
                var g = function(e, t) {
                        if ("https:" === a.default.location.protocol && 0 === e.indexOf("http:") && f.IS_IOS && l.default.html5media.mediaTypes.indexOf(t) > -1) {
                            var n = new XMLHttpRequest;
                            n.onreadystatechange = function() {
                                if (4 === this.readyState && 200 === this.status) {
                                    var t = (a.default.URL || a.default.webkitURL).createObjectURL(this.response);
                                    return m.mediaElement.originalNode.setAttribute("src", t), t
                                }
                                return e
                            }, n.open("GET", e), n.responseType = "blob", n.send()
                        }
                        return e
                    },
                    b = void 0;
                if (null !== o) b = o;
                else if (null !== m.mediaElement.originalNode) switch (b = [], m.mediaElement.originalNode.nodeName.toLowerCase()) {
                    case "iframe":
                        b.push({
                            type: "",
                            src: m.mediaElement.originalNode.getAttribute("src")
                        });
                        break;
                    case "audio":
                    case "video":
                        var E = m.mediaElement.originalNode.children.length,
                            S = m.mediaElement.originalNode.getAttribute("src");
                        if (S) {
                            var x = m.mediaElement.originalNode,
                                w = (0, u.formatType)(S, x.getAttribute("type"));
                            b.push({
                                type: w,
                                src: g(S, w)
                            })
                        }
                        for (var P = 0; P < E; P++) {
                            var T = m.mediaElement.originalNode.children[P];
                            if ("source" === T.tagName.toLowerCase()) {
                                var C = T.getAttribute("src"),
                                    k = (0, u.formatType)(C, T.getAttribute("type"));
                                b.push({
                                    type: k,
                                    src: g(C, k)
                                })
                            }
                        }
                }
                m.mediaElement.id = h, m.mediaElement.renderers = {}, m.mediaElement.events = {}, m.mediaElement.promises = [], m.mediaElement.renderer = null, m.mediaElement.rendererName = null, m.mediaElement.changeRenderer = function(e, t) {
                    var n = p,
                        o = Object.keys(t[0]).length > 2 ? t[0] : t[0].src;
                    if (void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && n.mediaElement.renderer.name === e) return n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.show(), n.mediaElement.renderer.setSrc(o), !0;
                    void 0 !== n.mediaElement.renderer && null !== n.mediaElement.renderer && (n.mediaElement.renderer.pause(), n.mediaElement.renderer.stop && n.mediaElement.renderer.stop(), n.mediaElement.renderer.hide());
                    var i = n.mediaElement.renderers[e],
                        r = null;
                    if (void 0 !== i && null !== i) return i.show(), i.setSrc(o), n.mediaElement.renderer = i, n.mediaElement.rendererName = e, !0;
                    for (var a = n.mediaElement.options.renderers.length ? n.mediaElement.options.renderers : c.renderer.order, s = 0, l = a.length; s < l; s++) {
                        var d = a[s];
                        if (d === e) {
                            r = c.renderer.renderers[d];
                            var u = Object.assign(r.options, n.mediaElement.options);
                            return i = r.create(n.mediaElement, u, t), i.name = e, n.mediaElement.renderers[r.name] = i, n.mediaElement.renderer = i, n.mediaElement.rendererName = e, i.show(), !0
                        }
                    }
                    return !1
                }, m.mediaElement.setSize = function(e, t) {
                    void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && m.mediaElement.renderer.setSize(e, t)
                }, m.mediaElement.generateError = function(e, t) {
                    e = e || "", t = Array.isArray(t) ? t : [];
                    var n = (0, d.createEvent)("error", m.mediaElement);
                    n.message = e, n.urls = t, m.mediaElement.dispatchEvent(n), v = !0
                };
                var _ = l.default.html5media.properties,
                    N = l.default.html5media.methods,
                    A = function(e, t, n, o) {
                        var i = e[t];
                        Object.defineProperty(e, t, {
                            get: function() {
                                return n.apply(e, [i])
                            },
                            set: function(t) {
                                return i = o.apply(e, [t])
                            }
                        })
                    },
                    L = function() {
                        return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer ? m.mediaElement.renderer.getSrc() : null
                    },
                    F = function(e) {
                        var t = [];
                        if ("string" == typeof e) t.push({
                            src: e,
                            type: e ? (0, u.getTypeFromFile)(e) : ""
                        });
                        else if ("object" === (void 0 === e ? "undefined" : r(e)) && void 0 !== e.src) {
                            var n = (0, u.absolutizeUrl)(e.src),
                                o = e.type,
                                i = Object.assign(e, {
                                    src: n,
                                    type: "" !== o && null !== o && void 0 !== o || !n ? o : (0, u.getTypeFromFile)(n)
                                });
                            t.push(i)
                        } else if (Array.isArray(e))
                            for (var a = 0, s = e.length; a < s; a++) {
                                var l = (0, u.absolutizeUrl)(e[a].src),
                                    f = e[a].type,
                                    p = Object.assign(e[a], {
                                        src: l,
                                        type: "" !== f && null !== f && void 0 !== f || !l ? f : (0, u.getTypeFromFile)(l)
                                    });
                                t.push(p)
                            }
                        var h = c.renderer.select(t, m.mediaElement.options.renderers.length ? m.mediaElement.options.renderers : []),
                            v = void 0;
                        if (m.mediaElement.paused || (m.mediaElement.pause(), v = (0, d.createEvent)("pause", m.mediaElement), m.mediaElement.dispatchEvent(v)), m.mediaElement.originalNode.src = t[0].src || "", null !== h || !t[0].src) return t[0].src ? m.mediaElement.changeRenderer(h.rendererName, t) : null;
                        m.mediaElement.generateError("No renderer found", t)
                    },
                    j = function(e, t) {
                        try {
                            "play" === e && "native_dash" === m.mediaElement.rendererName ? setTimeout(function() {
                                m.mediaElement.renderer[e](t)
                            }, 100) : m.mediaElement.renderer[e](t)
                        } catch (e) {
                            m.mediaElement.generateError(e, b)
                        }
                    };
                A(m.mediaElement, "src", L, F), m.mediaElement.getSrc = L, m.mediaElement.setSrc = F;
                for (var I = 0, M = _.length; I < M; I++) ! function(e) {
                    if ("src" !== e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1),
                            n = function() {
                                return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["get" + t] ? m.mediaElement.renderer["get" + t]() : null
                            },
                            o = function(e) {
                                void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer["set" + t] && m.mediaElement.renderer["set" + t](e)
                            };
                        A(m.mediaElement, e, n, o), m.mediaElement["get" + t] = n, m.mediaElement["set" + t] = o
                    }
                }(_[I]);
                for (var O = 0, D = N.length; O < D; O++) ! function(e) {
                    m.mediaElement[e] = function() {
                        for (var t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                        return void 0 !== m.mediaElement.renderer && null !== m.mediaElement.renderer && "function" == typeof m.mediaElement.renderer[e] && (m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function() {
                            j(e, n)
                        }).catch(function(e) {
                            m.mediaElement.generateError(e, b)
                        }) : j(e, n)), null
                    }
                }(N[O]);
                return m.mediaElement.addEventListener = function(e, t) {
                    m.mediaElement.events[e] = m.mediaElement.events[e] || [], m.mediaElement.events[e].push(t)
                }, m.mediaElement.removeEventListener = function(e, t) {
                    if (!e) return m.mediaElement.events = {}, !0;
                    var n = m.mediaElement.events[e];
                    if (!n) return !0;
                    if (!t) return m.mediaElement.events[e] = [], !0;
                    for (var o = 0; o < n.length; o++)
                        if (n[o] === t) return m.mediaElement.events[e].splice(o, 1), !0;
                    return !1
                }, m.mediaElement.dispatchEvent = function(e) {
                    var t = m.mediaElement.events[e.type];
                    if (t)
                        for (var n = 0; n < t.length; n++) t[n].apply(null, [e])
                }, b.length && (m.mediaElement.src = b), m.mediaElement.promises.length ? Promise.all(m.mediaElement.promises).then(function() {
                    m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode)
                }).catch(function() {
                    v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode)
                }) : (m.mediaElement.options.success && m.mediaElement.options.success(m.mediaElement, m.mediaElement.originalNode), v && m.mediaElement.options.error && m.mediaElement.options.error(m.mediaElement, m.mediaElement.originalNode)), m.mediaElement
            };
        a.default.MediaElement = p, n.default = p
    }, {
        2: 2,
        25: 25,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    7: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e(3)),
            i = {};
        i.version = "4.2.5", i.html5media = {
            properties: ["volume", "src", "currentTime", "muted", "duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable", "currentSrc", "preload", "bufferedBytes", "bufferedTime", "initialTime", "startOffsetTime", "defaultPlaybackRate", "playbackRate", "played", "autoplay", "loop", "controls"],
            readOnlyProperties: ["duration", "paused", "ended", "buffered", "error", "networkState", "readyState", "seeking", "seekable"],
            methods: ["load", "play", "pause", "canPlayType"],
            events: ["loadstart", "durationchange", "loadedmetadata", "loadeddata", "progress", "canplay", "canplaythrough", "suspend", "abort", "error", "emptied", "stalled", "play", "playing", "pause", "waiting", "seeking", "seeked", "timeupdate", "ended", "ratechange", "volumechange"],
            mediaTypes: ["audio/mp3", "audio/ogg", "audio/oga", "audio/wav", "audio/x-wav", "audio/wave", "audio/x-pn-wav", "audio/mpeg", "audio/mp4", "video/mp4", "video/webm", "video/ogg", "video/ogv"]
        }, o.default.mejs = i, n.default = i
    }, {
        3: 3
    }],
    8: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.renderer = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            a = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e(7)),
            s = function() {
                function e() {
                    o(this, e), this.renderers = {}, this.order = []
                }
                return r(e, [{
                    key: "add",
                    value: function(e) {
                        if (void 0 === e.name) throw new TypeError("renderer must contain at least `name` property");
                        this.renderers[e.name] = e, this.order.push(e.name)
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = t.length;
                        if (t = t.length ? t : this.order, !n) {
                            var o = [/^(html5|native)/i, /^flash/i, /iframe$/i],
                                i = function(e) {
                                    for (var t = 0, n = o.length; t < n; t++)
                                        if (o[t].test(e)) return t;
                                    return o.length
                                };
                            t.sort(function(e, t) {
                                return i(e) - i(t)
                            })
                        }
                        for (var r = 0, a = t.length; r < a; r++) {
                            var s = t[r],
                                l = this.renderers[s];
                            if (null !== l && void 0 !== l)
                                for (var d = 0, u = e.length; d < u; d++)
                                    if ("function" == typeof l.canPlayType && "string" == typeof e[d].type && l.canPlayType(e[d].type)) return {
                                        rendererName: l.name,
                                        src: e[d].src
                                    }
                        }
                        return null
                    }
                }, {
                    key: "order",
                    set: function(e) {
                        if (!Array.isArray(e)) throw new TypeError("order must be an array of strings.");
                        this._order = e
                    },
                    get: function() {
                        return this._order
                    }
                }, {
                    key: "renderers",
                    set: function(e) {
                        if (null !== e && "object" !== (void 0 === e ? "undefined" : i(e))) throw new TypeError("renderers must be an array of objects.");
                        this._renderers = e
                    },
                    get: function() {
                        return this._renderers
                    }
                }]), e
            }(),
            l = n.renderer = new s;
        a.default.Renderers = l
    }, {
        7: 7
    }],
    9: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3)),
            r = o(e(2)),
            a = o(e(5)),
            s = e(16),
            l = o(s),
            d = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(e(25)),
            u = e(27),
            c = e(26),
            f = e(28);
        Object.assign(s.config, {
            usePluginFullScreen: !0,
            fullscreenText: null,
            useFakeFullscreen: !1
        }), Object.assign(l.default.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function(e) {
                if (e.isVideo) {
                    e.isInIframe = i.default.location !== i.default.parent.location, e.detectFullscreenMode();
                    var t = this,
                        n = (0, u.isString)(t.options.fullscreenText) ? t.options.fullscreenText : a.default.t("mejs.fullscreen"),
                        o = r.default.createElement("div");
                    if (o.className = t.options.classPrefix + "button " + t.options.classPrefix + "fullscreen-button", o.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + n + '" aria-label="' + n + '" tabindex="0"></button>', t.addControlElement(o, "fullscreen"), o.addEventListener("click", function() {
                            d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                        }), e.fullscreenBtn = o, t.exitFullscreenCallback = function(n) {
                            27 === (n.which || n.keyCode || 0) && (d.HAS_TRUE_NATIVE_FULLSCREEN && d.IS_FULLSCREEN || t.isFullScreen) && e.exitFullScreen()
                        }, t.globalBind("keydown", t.exitFullscreenCallback), t.normalHeight = 0, t.normalWidth = 0, d.HAS_TRUE_NATIVE_FULLSCREEN) {
                        e.globalBind(d.FULLSCREEN_EVENT_NAME, function() {
                            e.isFullScreen && (d.isFullScreen() ? (e.isNativeFullScreen = !0, e.setControlsSize()) : (e.isNativeFullScreen = !1, e.exitFullScreen()))
                        })
                    }
                }
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen(), e.globalUnbind("keydown", e.exitFullscreenCallback)
            },
            detectFullscreenMode: function() {
                var e = this,
                    t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName),
                    n = "";
                return d.HAS_TRUE_NATIVE_FULLSCREEN && t ? n = "native-native" : d.HAS_TRUE_NATIVE_FULLSCREEN && !t ? n = "plugin-native" : e.usePluginFullScreen && d.SUPPORT_POINTER_EVENTS && (n = "plugin-click"), e.fullscreenMode = n, n
            },
            enterFullScreen: function() {
                var e = this,
                    t = null !== e.media.rendererName && /(html5|native)/i.test(e.media.rendererName),
                    n = getComputedStyle(e.container);
                if (!1 === e.options.useFakeFullscreen && d.IS_IOS && d.HAS_IOS_FULLSCREEN && "function" == typeof e.media.originalNode.webkitEnterFullscreen && e.media.originalNode.canPlayType((0, f.getTypeFromFile)(e.media.getSrc()))) e.media.originalNode.webkitEnterFullscreen();
                else {
                    if ((0, c.addClass)(r.default.documentElement, e.options.classPrefix + "fullscreen"), (0, c.addClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.normalHeight = parseFloat(n.height), e.normalWidth = parseFloat(n.width), "native-native" !== e.fullscreenMode && "plugin-native" !== e.fullscreenMode || (d.requestFullScreen(e.container), e.isInIframe && setTimeout(function t() {
                            if (e.isNativeFullScreen) {
                                var n = i.default.innerWidth || r.default.documentElement.clientWidth || r.default.body.clientWidth,
                                    o = screen.width;
                                Math.abs(o - n) > .002 * o ? e.exitFullScreen() : setTimeout(t, 500)
                            }
                        }, 1e3)), e.container.style.width = "100%", e.container.style.height = "100%", e.containerSizeTimeout = setTimeout(function() {
                            e.container.style.width = "100%", e.container.style.height = "100%", e.setControlsSize()
                        }, 500), t) e.node.style.width = "100%", e.node.style.height = "100%";
                    else
                        for (var o = e.container.querySelectorAll("embed, object, video"), a = o.length, s = 0; s < a; s++) o[s].style.width = "100%", o[s].style.height = "100%";
                    e.options.setDimensions && "function" == typeof e.media.setSize && e.media.setSize(screen.width, screen.height);
                    for (var l = e.layers.children, p = l.length, m = 0; m < p; m++) l[m].style.width = "100%", l[m].style.height = "100%";
                    e.fullscreenBtn && ((0, c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen"), (0, c.addClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen")), e.setControlsSize(), e.isFullScreen = !0;
                    var h = Math.min(screen.width / e.width, screen.height / e.height),
                        v = e.container.querySelector("." + e.options.classPrefix + "captions-text");
                    v && (v.style.fontSize = 100 * h + "%", v.style.lineHeight = "normal", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "45px");
                    var y = (0, u.createEvent)("enteredfullscreen", e.container);
                    e.container.dispatchEvent(y)
                }
            },
            exitFullScreen: function() {
                var e = this,
                    t = null !== e.media.rendererName && /(native|html5)/i.test(e.media.rendererName);
                if (clearTimeout(e.containerSizeTimeout), d.HAS_TRUE_NATIVE_FULLSCREEN && (d.IS_FULLSCREEN || e.isFullScreen) && d.cancelFullScreen(), (0, c.removeClass)(r.default.documentElement, e.options.classPrefix + "fullscreen"), (0, c.removeClass)(e.container, e.options.classPrefix + "container-fullscreen"), e.options.setDimensions) {
                    if (e.container.style.width = e.normalWidth + "px", e.container.style.height = e.normalHeight + "px", t) e.node.style.width = e.normalWidth + "px", e.node.style.height = e.normalHeight + "px";
                    else
                        for (var n = e.container.querySelectorAll("embed, object, video"), o = n.length, i = 0; i < o; i++) n[i].style.width = e.normalWidth + "px", n[i].style.height = e.normalHeight + "px";
                    "function" == typeof e.media.setSize && e.media.setSize(e.normalWidth, e.normalHeight);
                    for (var a = e.layers.children, s = a.length, l = 0; l < s; l++) a[l].style.width = e.normalWidth + "px", a[l].style.height = e.normalHeight + "px"
                }
                e.fullscreenBtn && ((0, c.removeClass)(e.fullscreenBtn, e.options.classPrefix + "unfullscreen"), (0, c.addClass)(e.fullscreenBtn, e.options.classPrefix + "fullscreen")), e.setControlsSize(), e.isFullScreen = !1;
                var f = e.container.querySelector("." + e.options.classPrefix + "captions-text");
                f && (f.style.fontSize = "", f.style.lineHeight = "", e.container.querySelector("." + e.options.classPrefix + "captions-position").style.bottom = "");
                var p = (0, u.createEvent)("exitedfullscreen", e.container);
                e.container.dispatchEvent(p)
            }
        })
    }, {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        5: 5
    }],
    10: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = e(16),
            a = o(r),
            s = o(e(5)),
            l = e(27),
            d = e(26);
        Object.assign(r.config, {
            playText: null,
            pauseText: null
        }), Object.assign(a.default.prototype, {
            buildplaypause: function(e, t, n, o) {
                function r(e) {
                    "play" === e ? ((0, d.removeClass)(p, a.options.classPrefix + "play"), (0, d.removeClass)(p, a.options.classPrefix + "replay"), (0, d.addClass)(p, a.options.classPrefix + "pause"), m.setAttribute("title", f), m.setAttribute("aria-label", f)) : ((0, d.removeClass)(p, a.options.classPrefix + "pause"), (0, d.removeClass)(p, a.options.classPrefix + "replay"), (0, d.addClass)(p, a.options.classPrefix + "play"), m.setAttribute("title", c), m.setAttribute("aria-label", c))
                }
                var a = this,
                    u = a.options,
                    c = (0, l.isString)(u.playText) ? u.playText : s.default.t("mejs.play"),
                    f = (0, l.isString)(u.pauseText) ? u.pauseText : s.default.t("mejs.pause"),
                    p = i.default.createElement("div");
                p.className = a.options.classPrefix + "button " + a.options.classPrefix + "playpause-button " + a.options.classPrefix + "play", p.innerHTML = '<button type="button" aria-controls="' + a.id + '" title="' + c + '" aria-label="' + f + '" tabindex="0"></button>', p.addEventListener("click", function() {
                    a.paused ? a.play() : a.pause()
                });
                var m = p.querySelector("button");
                a.addControlElement(p, "playpause"), r("pse"), o.addEventListener("loadedmetadata", function() {
                    -1 === o.rendererName.indexOf("flash") && r("pse")
                }), o.addEventListener("play", function() {
                    r("play")
                }), o.addEventListener("playing", function() {
                    r("play")
                }), o.addEventListener("pause", function() {
                    r("pse")
                }), o.addEventListener("ended", function() {
                    e.options.loop || ((0, d.removeClass)(p, a.options.classPrefix + "pause"), (0, d.removeClass)(p, a.options.classPrefix + "play"), (0, d.addClass)(p, a.options.classPrefix + "replay"), m.setAttribute("title", c), m.setAttribute("aria-label", c))
                })
            }
        })
    }, {
        16: 16,
        2: 2,
        26: 26,
        27: 27,
        5: 5
    }],
    11: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = e(16),
            a = o(r),
            s = o(e(5)),
            l = e(25),
            d = e(30),
            u = e(26);
        Object.assign(r.config, {
            enableProgressTooltip: !0,
            useSmoothHover: !0,
            forceLive: !1
        }), Object.assign(a.default.prototype, {
            buildprogress: function(e, t, n, o) {
                var r = 0,
                    a = !1,
                    c = !1,
                    f = this,
                    p = e.options.autoRewind,
                    m = e.options.enableProgressTooltip ? '<span class="' + f.options.classPrefix + 'time-float"><span class="' + f.options.classPrefix + 'time-float-current">00:00</span><span class="' + f.options.classPrefix + 'time-float-corner"></span></span>' : "",
                    h = i.default.createElement("div");
                h.className = f.options.classPrefix + "time-rail", h.innerHTML = '<span class="' + f.options.classPrefix + "time-total " + f.options.classPrefix + 'time-slider"><span class="' + f.options.classPrefix + 'time-buffering"></span><span class="' + f.options.classPrefix + 'time-loaded"></span><span class="' + f.options.classPrefix + 'time-current"></span><span class="' + f.options.classPrefix + 'time-hovered no-hover"></span><span class="' + f.options.classPrefix + 'time-handle"><span class="' + f.options.classPrefix + 'time-handle-content"></span></span>' + m + "</span>", f.addControlElement(h, "progress"), t.querySelector("." + f.options.classPrefix + "time-buffering").style.display = "none", f.rail = t.querySelector("." + f.options.classPrefix + "time-rail"), f.total = t.querySelector("." + f.options.classPrefix + "time-total"), f.loaded = t.querySelector("." + f.options.classPrefix + "time-loaded"), f.current = t.querySelector("." + f.options.classPrefix + "time-current"), f.handle = t.querySelector("." + f.options.classPrefix + "time-handle"), f.timefloat = t.querySelector("." + f.options.classPrefix + "time-float"), f.timefloatcurrent = t.querySelector("." + f.options.classPrefix + "time-float-current"), f.slider = t.querySelector("." + f.options.classPrefix + "time-slider"), f.hovered = t.querySelector("." + f.options.classPrefix + "time-hovered"), f.newTime = 0, f.forcedHandlePause = !1, f.setTransformStyle = function(e, t) {
                    e.style.transform = t, e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t
                };
                var v = function(t) {
                        var n = getComputedStyle(f.total),
                            o = (0, u.offset)(f.total),
                            i = f.total.offsetWidth,
                            r = void 0 !== n.webkitTransform ? "webkitTransform" : void 0 !== n.mozTransform ? "mozTransform " : void 0 !== n.oTransform ? "oTransform" : void 0 !== n.msTransform ? "msTransform" : "transform",
                            s = "WebKitCSSMatrix" in window ? "WebKitCSSMatrix" : "MSCSSMatrix" in window ? "MSCSSMatrix" : "CSSMatrix" in window ? "CSSMatrix" : void 0,
                            c = 0,
                            p = 0,
                            m = 0,
                            h = void 0;
                        if (h = t.originalEvent && t.originalEvent.changedTouches ? t.originalEvent.changedTouches[0].pageX : t.changedTouches ? t.changedTouches[0].pageX : t.pageX, f.getDuration()) {
                            if (h < o.left ? h = o.left : h > i + o.left && (h = i + o.left), m = h - o.left, c = m / i, f.newTime = c <= .02 ? 0 : c * f.getDuration(), a && null !== f.getCurrentTime() && f.newTime.toFixed(4) !== f.getCurrentTime().toFixed(4) && (f.setCurrentRailHandle(f.newTime), f.updateCurrent(f.newTime)), !l.IS_IOS && !l.IS_ANDROID && f.timefloat) {
                                if (m < 0 && (m = 0), f.options.useSmoothHover && null !== s && void 0 !== window[s]) {
                                    var v = new window[s](getComputedStyle(f.handle)[r]).m41,
                                        y = m / parseFloat(getComputedStyle(f.total).width) - v / parseFloat(getComputedStyle(f.total).width);
                                    f.hovered.style.left = v + "px", f.setTransformStyle(f.hovered, "scaleX(" + y + ")"), f.hovered.setAttribute("pos", m), y >= 0 ? (0, u.removeClass)(f.hovered, "negative") : (0, u.addClass)(f.hovered, "negative")
                                }
                                var g = f.timefloat.offsetWidth / 2;
                                p = h <= f.timefloat.offsetWidth + g ? g : h >= f.container.offsetWidth - g ? f.total.offsetWidth - g : m, f.timefloat.style.left = p + "px", f.timefloatcurrent.innerHTML = (0, d.secondsToTimeCode)(f.newTime, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength), f.timefloat.style.display = "block"
                            }
                        } else l.IS_IOS || l.IS_ANDROID || !f.timefloat || (p = f.timefloat.offsetWidth + i >= f.container.offsetWidth ? f.timefloat.offsetWidth / 2 : 0, f.timefloat.style.left = p + "px", f.timefloat.style.left = p + "px", f.timefloat.style.display = "block")
                    },
                    y = function() {
                        var t = f.getCurrentTime(),
                            n = s.default.t("mejs.time-slider"),
                            i = (0, d.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength),
                            r = f.getDuration();
                        f.slider.setAttribute("role", "slider"), f.slider.tabIndex = 0, o.paused ? (f.slider.setAttribute("aria-label", n), f.slider.setAttribute("aria-valuemin", 0), f.slider.setAttribute("aria-valuemax", r), f.slider.setAttribute("aria-valuenow", t), f.slider.setAttribute("aria-valuetext", i)) : (f.slider.removeAttribute("aria-label"), f.slider.removeAttribute("aria-valuemin"), f.slider.removeAttribute("aria-valuemax"), f.slider.removeAttribute("aria-valuenow"), f.slider.removeAttribute("aria-valuetext"))
                    },
                    g = function() {
                        new Date - r >= 1e3 && f.play()
                    },
                    b = function() {
                        a && null !== f.getCurrentTime() && f.newTime.toFixed(4) !== f.getCurrentTime().toFixed(4) && (f.setCurrentTime(f.newTime), f.setCurrentRail(), f.updateCurrent(f.newTime)), f.forcedHandlePause && (f.slider.focus(), f.play()), f.forcedHandlePause = !1
                    };
                f.slider.addEventListener("focus", function() {
                    e.options.autoRewind = !1
                }), f.slider.addEventListener("blur", function() {
                    e.options.autoRewind = p
                }), f.slider.addEventListener("keydown", function(t) {
                    if (new Date - r >= 1e3 && (c = f.paused), f.options.keyActions.length) {
                        var n = t.which || t.keyCode || 0,
                            i = f.getDuration(),
                            a = e.options.defaultSeekForwardInterval(o),
                            s = e.options.defaultSeekBackwardInterval(o),
                            d = f.getCurrentTime();
                        switch (n) {
                            case 37:
                            case 40:
                                f.getDuration() !== 1 / 0 && (d -= s);
                                break;
                            case 39:
                            case 38:
                                f.getDuration() !== 1 / 0 && (d += a);
                                break;
                            case 36:
                                d = 0;
                                break;
                            case 35:
                                d = i;
                                break;
                            case 32:
                                return void(l.IS_FIREFOX || (f.paused ? f.play() : f.pause()));
                            case 13:
                                return void(f.paused ? f.play() : f.pause());
                            default:
                                return
                        }
                        d = d < 0 ? 0 : d >= i ? i : Math.floor(d), r = new Date, c || e.pause(), d < f.getDuration() && !c && setTimeout(g, 1100), f.setCurrentTime(d), t.preventDefault(), t.stopPropagation()
                    }
                });
                var E = ["mousedown", "touchstart"];
                f.slider.addEventListener("dragstart", function() {
                    return !1
                });
                for (var S = 0, x = E.length; S < x; S++) f.slider.addEventListener(E[S], function(e) {
                    if (f.forcedHandlePause = !1, f.getDuration() !== 1 / 0 && (1 === e.which || 0 === e.which)) {
                        f.paused || (f.pause(), f.forcedHandlePause = !0), a = !0, v(e);
                        for (var t = ["mouseup", "touchend"], n = 0, o = t.length; n < o; n++) f.container.addEventListener(t[n], function(e) {
                            var t = e.target;
                            (t === f.slider || t.closest("." + f.options.classPrefix + "time-slider")) && v(e)
                        });
                        f.globalBind("mouseup.dur touchend.dur", function() {
                            b(), a = !1, f.timefloat && (f.timefloat.style.display = "none")
                        })
                    }
                });
                f.slider.addEventListener("mouseenter", function(e) {
                    e.target === f.slider && f.getDuration() !== 1 / 0 && (f.container.addEventListener("mousemove", function(e) {
                        var t = e.target;
                        (t === f.slider || t.closest("." + f.options.classPrefix + "time-slider")) && v(e)
                    }), !f.timefloat || l.IS_IOS || l.IS_ANDROID || (f.timefloat.style.display = "block"), f.hovered && !l.IS_IOS && !l.IS_ANDROID && f.options.useSmoothHover && (0, u.removeClass)(f.hovered, "no-hover"))
                }), f.slider.addEventListener("mouseleave", function() {
                    f.getDuration() !== 1 / 0 && (a || (f.timefloat && (f.timefloat.style.display = "none"), f.hovered && f.options.useSmoothHover && (0, u.addClass)(f.hovered, "no-hover")))
                }), f.broadcastCallback = function(n) {
                    var o = t.querySelector("." + f.options.classPrefix + "broadcast");
                    if (f.options.forceLive || f.getDuration() === 1 / 0) {
                        if (!o || f.options.forceLive) {
                            var r = i.default.createElement("span");
                            r.className = f.options.classPrefix + "broadcast", r.innerText = s.default.t("mejs.live-broadcast"), f.slider.style.display = "none", f.rail.appendChild(r)
                        }
                    } else o && (f.slider.style.display = "", o.remove()), e.setProgressRail(n), f.forcedHandlePause || e.setCurrentRail(n), y()
                }, o.addEventListener("progress", f.broadcastCallback), o.addEventListener("timeupdate", f.broadcastCallback), f.container.addEventListener("controlsresize", function(t) {
                    f.getDuration() !== 1 / 0 && (e.setProgressRail(t), f.forcedHandlePause || e.setCurrentRail(t))
                })
            },
            cleanprogress: function(e, t, n, o) {
                o.removeEventListener("progress", e.broadcastCallback), o.removeEventListener("timeupdate", e.broadcastCallback), e.rail && e.rail.remove()
            },
            setProgressRail: function(e) {
                var t = this,
                    n = void 0 !== e ? e.detail.target || e.target : t.media,
                    o = null;
                n && n.buffered && n.buffered.length > 0 && n.buffered.end && t.getDuration() ? o = n.buffered.end(n.buffered.length - 1) / t.getDuration() : n && void 0 !== n.bytesTotal && n.bytesTotal > 0 && void 0 !== n.bufferedBytes ? o = n.bufferedBytes / n.bytesTotal : e && e.lengthComputable && 0 !== e.total && (o = e.loaded / e.total), null !== o && (o = Math.min(1, Math.max(0, o)), t.loaded && t.setTransformStyle(t.loaded, "scaleX(" + o + ")"))
            },
            setCurrentRailHandle: function(e) {
                var t = this;
                t.setCurrentRailMain(t, e)
            },
            setCurrentRail: function() {
                var e = this;
                e.setCurrentRailMain(e)
            },
            setCurrentRailMain: function(e, t) {
                if (void 0 !== e.getCurrentTime() && e.getDuration()) {
                    var n = void 0 === t ? e.getCurrentTime() : t;
                    if (e.total && e.handle) {
                        var o = parseFloat(getComputedStyle(e.total).width),
                            i = Math.round(o * n / e.getDuration()),
                            r = i - Math.round(e.handle.offsetWidth / 2);
                        if (r = r < 0 ? 0 : r, e.setTransformStyle(e.current, "scaleX(" + i / o + ")"), e.setTransformStyle(e.handle, "translateX(" + r + "px)"), e.options.useSmoothHover && !(0, u.hasClass)(e.hovered, "no-hover")) {
                            var a = parseInt(e.hovered.getAttribute("pos")),
                                s = (a = isNaN(a) ? 0 : a) / o - r / o;
                            e.hovered.style.left = r + "px", e.setTransformStyle(e.hovered, "scaleX(" + s + ")"), s >= 0 ? (0, u.removeClass)(e.hovered, "negative") : (0, u.addClass)(e.hovered, "negative")
                        }
                    }
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        30: 30,
        5: 5
    }],
    12: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = e(16),
            a = o(r),
            s = e(30),
            l = e(26);
        Object.assign(r.config, {
            duration: 0,
            timeAndDurationSeparator: "<span> | </span>"
        }), Object.assign(a.default.prototype, {
            buildcurrent: function(e, t, n, o) {
                var r = this,
                    a = i.default.createElement("div");
                a.className = r.options.classPrefix + "time", a.setAttribute("role", "timer"), a.setAttribute("aria-live", "off"), a.innerHTML = '<span class="' + r.options.classPrefix + 'currenttime">' + (0, s.secondsToTimeCode)(0, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength) + "</span>", r.addControlElement(a, "current"), r.updateTimeCallback = function() {
                    r.controlsAreVisible && e.updateCurrent()
                }, o.addEventListener("timeupdate", r.updateTimeCallback)
            },
            cleancurrent: function(e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateTimeCallback)
            },
            buildduration: function(e, t, n, o) {
                var r = this;
                if (t.lastChild.querySelector("." + r.options.classPrefix + "currenttime")) t.querySelector("." + r.options.classPrefix + "time").innerHTML += r.options.timeAndDurationSeparator + '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength) + "</span>";
                else {
                    t.querySelector("." + r.options.classPrefix + "currenttime") && (0, l.addClass)(t.querySelector("." + r.options.classPrefix + "currenttime").parentNode, r.options.classPrefix + "currenttime-container");
                    var a = i.default.createElement("div");
                    a.className = r.options.classPrefix + "time " + r.options.classPrefix + "duration-container", a.innerHTML = '<span class="' + r.options.classPrefix + 'duration">' + (0, s.secondsToTimeCode)(r.options.duration, r.options.alwaysShowHours, r.options.showTimecodeFrameCount, r.options.framesPerSecond, r.options.secondsDecimalLength) + "</span>", r.addControlElement(a, "duration")
                }
                o.addEventListener("timeupdate", r.updateTimeCallback)
            },
            cleanduration: function(e, t, n, o) {
                o.removeEventListener("timeupdate", e.updateTimeCallback)
            },
            updateCurrent: function() {
                var e = this,
                    t = e.getCurrentTime();
                isNaN(t) && (t = 0);
                var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength);
                n.length > 5 ? (0, l.addClass)(e.container, e.options.classPrefix + "long-video") : (0, l.removeClass)(e.container, e.options.classPrefix + "long-video"), e.controls.querySelector("." + e.options.classPrefix + "currenttime") && (e.controls.querySelector("." + e.options.classPrefix + "currenttime").innerText = n)
            },
            updateDuration: function() {
                var e = this,
                    t = e.getDuration();
                (isNaN(t) || t === 1 / 0 || t < 0) && (e.media.duration = e.options.duration = t = 0), e.options.duration > 0 && (t = e.options.duration);
                var n = (0, s.secondsToTimeCode)(t, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond, e.options.secondsDecimalLength);
                n.length > 5 ? (0, l.addClass)(e.container, e.options.classPrefix + "long-video") : (0, l.removeClass)(e.container, e.options.classPrefix + "long-video"), e.controls.querySelector("." + e.options.classPrefix + "duration") && t > 0 && (e.controls.querySelector("." + e.options.classPrefix + "duration").innerHTML = n)
            }
        })
    }, {
        16: 16,
        2: 2,
        26: 26,
        30: 30
    }],
    13: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = o(e(7)),
            a = o(e(5)),
            s = e(16),
            l = o(s),
            d = e(30),
            u = e(27),
            c = e(26);
        Object.assign(s.config, {
            startLanguage: "",
            tracksText: null,
            chaptersText: null,
            tracksAriaLive: !1,
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), Object.assign(l.default.prototype, {
            hasChapters: !1,
            buildtracks: function(e, t, n, o) {
                if (e.tracks.length || e.trackFiles && 0 !== !e.trackFiles.length) {
                    var r = this,
                        s = r.options.tracksAriaLive ? ' role="log" aria-live="assertive" aria-atomic="false"' : "",
                        l = (0, u.isString)(r.options.tracksText) ? r.options.tracksText : a.default.t("mejs.captions-subtitles"),
                        d = (0, u.isString)(r.options.chaptersText) ? r.options.chaptersText : a.default.t("mejs.captions-chapters"),
                        f = null === e.trackFiles ? e.tracks.length : e.trackFiles.length;
                    if (r.domNode.textTracks)
                        for (var p = r.domNode.textTracks.length - 1; p >= 0; p--) r.domNode.textTracks[p].mode = "hidden";
                    r.cleartracks(e), e.captions = i.default.createElement("div"), e.captions.className = r.options.classPrefix + "captions-layer " + r.options.classPrefix + "layer", e.captions.innerHTML = '<div class="' + r.options.classPrefix + "captions-position " + r.options.classPrefix + 'captions-position-hover"' + s + '><span class="' + r.options.classPrefix + 'captions-text"></span></div>', e.captions.style.display = "none", n.insertBefore(e.captions, n.firstChild), e.captionsText = e.captions.querySelector("." + r.options.classPrefix + "captions-text"), e.captionsButton = i.default.createElement("div"), e.captionsButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "captions-button", e.captionsButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + l + '" aria-label="' + l + '" tabindex="0"></button><div class="' + r.options.classPrefix + "captions-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'captions-selector-list"><li class="' + r.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + r.options.classPrefix + 'captions-selector-input" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked disabled><label class="' + r.options.classPrefix + "captions-selector-label " + r.options.classPrefix + 'captions-selected" for="' + e.id + '_captions_none">' + a.default.t("mejs.none") + "</label></li></ul></div>", r.addControlElement(e.captionsButton, "tracks"), e.captionsButton.querySelector("." + r.options.classPrefix + "captions-selector-input").disabled = !1, e.chaptersButton = i.default.createElement("div"), e.chaptersButton.className = r.options.classPrefix + "button " + r.options.classPrefix + "chapters-button", e.chaptersButton.innerHTML = '<button type="button" aria-controls="' + r.id + '" title="' + d + '" aria-label="' + d + '" tabindex="0"></button><div class="' + r.options.classPrefix + "chapters-selector " + r.options.classPrefix + 'offscreen"><ul class="' + r.options.classPrefix + 'chapters-selector-list"></ul></div>';
                    for (var m = 0, h = 0; h < f; h++) {
                        var v = e.tracks[h].kind;
                        e.tracks[h].src.trim() && ("subtitles" === v || "captions" === v ? m++ : "chapters" !== v || t.querySelector("." + r.options.classPrefix + "chapter-selector") || e.captionsButton.parentNode.insertBefore(e.chaptersButton, e.captionsButton))
                    }
                    e.trackToLoad = -1, e.selectedTrack = null, e.isLoadingTrack = !1;
                    for (var y = 0; y < f; y++) {
                        var g = e.tracks[y].kind;
                        !e.tracks[y].src.trim() || "subtitles" !== g && "captions" !== g || e.addTrackButton(e.tracks[y].trackId, e.tracks[y].srclang, e.tracks[y].label)
                    }
                    e.loadNextTrack();
                    var b = ["mouseenter", "focusin"],
                        E = ["mouseleave", "focusout"];
                    if (r.options.toggleCaptionsButtonWhenOnlyOne && 1 === m) e.captionsButton.addEventListener("click", function() {
                        var t = "none";
                        null === e.selectedTrack && (t = e.tracks[0].trackId), e.setTrack(t)
                    });
                    else {
                        for (var S = e.captionsButton.querySelectorAll("." + r.options.classPrefix + "captions-selector-label"), x = e.captionsButton.querySelectorAll("input[type=radio]"), w = 0, P = b.length; w < P; w++) e.captionsButton.addEventListener(b[w], function() {
                            (0, c.removeClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                        });
                        for (var T = 0, C = E.length; T < C; T++) e.captionsButton.addEventListener(E[T], function() {
                            (0, c.addClass)(this.querySelector("." + r.options.classPrefix + "captions-selector"), r.options.classPrefix + "offscreen")
                        });
                        for (var k = 0, _ = x.length; k < _; k++) x[k].addEventListener("click", function() {
                            e.setTrack(this.value)
                        });
                        for (var N = 0, A = S.length; N < A; N++) S[N].addEventListener("click", function() {
                            var e = (0, c.siblings)(this, function(e) {
                                    return "INPUT" === e.tagName
                                })[0],
                                t = (0, u.createEvent)("click", e);
                            e.dispatchEvent(t)
                        });
                        e.captionsButton.addEventListener("keydown", function(e) {
                            e.stopPropagation()
                        })
                    }
                    for (var L = 0, F = b.length; L < F; L++) e.chaptersButton.addEventListener(b[L], function() {
                        this.querySelector("." + r.options.classPrefix + "chapters-selector-list").children.length && (0, c.removeClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                    });
                    for (var j = 0, I = E.length; j < I; j++) e.chaptersButton.addEventListener(E[j], function() {
                        (0, c.addClass)(this.querySelector("." + r.options.classPrefix + "chapters-selector"), r.options.classPrefix + "offscreen")
                    });
                    e.chaptersButton.addEventListener("keydown", function(e) {
                        e.stopPropagation()
                    }), e.options.alwaysShowControls ? (0, c.addClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover") : (e.container.addEventListener("controlsshown", function() {
                        (0, c.addClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    }), e.container.addEventListener("controlshidden", function() {
                        o.paused || (0, c.removeClass)(e.container.querySelector("." + r.options.classPrefix + "captions-position"), r.options.classPrefix + "captions-position-hover")
                    })), o.addEventListener("timeupdate", function() {
                        e.displayCaptions()
                    }), "" !== e.options.slidesSelector && (e.slidesContainer = i.default.querySelectorAll(e.options.slidesSelector), o.addEventListener("timeupdate", function() {
                        e.displaySlides()
                    }))
                }
            },
            cleartracks: function(e) {
                e && (e.captions && e.captions.remove(), e.chapters && e.chapters.remove(), e.captionsText && e.captionsText.remove(), e.captionsButton && e.captionsButton.remove(), e.chaptersButton && e.chaptersButton.remove())
            },
            rebuildtracks: function() {
                var e = this;
                e.findTracks(), e.buildtracks(e, e.controls, e.layers, e.media)
            },
            findTracks: function() {
                var e = this,
                    t = null === e.trackFiles ? e.node.querySelectorAll("track") : e.trackFiles,
                    n = t.length;
                e.tracks = [];
                for (var o = 0; o < n; o++) {
                    var i = t[o],
                        r = i.getAttribute("srclang").toLowerCase() || "",
                        a = e.id + "_track_" + o + "_" + i.getAttribute("kind") + "_" + r;
                    e.tracks.push({
                        trackId: a,
                        srclang: r,
                        src: i.getAttribute("src"),
                        kind: i.getAttribute("kind"),
                        label: i.getAttribute("label") || "",
                        entries: [],
                        isLoaded: !1
                    })
                }
            },
            setTrack: function(e) {
                for (var t = this, n = t.captionsButton.querySelectorAll('input[type="radio"]'), o = t.captionsButton.querySelectorAll("." + t.options.classPrefix + "captions-selected"), i = t.captionsButton.querySelector('input[value="' + e + '"]'), r = 0, a = n.length; r < a; r++) n[r].checked = !1;
                for (var s = 0, l = o.length; s < l; s++)(0, c.removeClass)(o[s], t.options.classPrefix + "captions-selected");
                i.checked = !0;
                for (var d = (0, c.siblings)(i, function(e) {
                        return (0, c.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                    }), f = 0, p = d.length; f < p; f++)(0, c.addClass)(d[f], t.options.classPrefix + "captions-selected");
                if ("none" === e) t.selectedTrack = null, (0, c.removeClass)(t.captionsButton, t.options.classPrefix + "captions-enabled");
                else
                    for (var m = 0, h = t.tracks.length; m < h; m++) {
                        var v = t.tracks[m];
                        if (v.trackId === e) {
                            null === t.selectedTrack && (0, c.addClass)(t.captionsButton, t.options.classPrefix + "captions-enabled"), t.selectedTrack = v, t.captions.setAttribute("lang", t.selectedTrack.srclang), t.displayCaptions();
                            break
                        }
                    }
                var y = (0, u.createEvent)("captionschange", t.media);
                y.detail.caption = t.selectedTrack, t.media.dispatchEvent(y)
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function(e) {
                var t = this,
                    n = t.tracks[e];
                void 0 === n || void 0 === n.src && "" === n.src || (0, c.ajax)(n.src, "text", function(e) {
                    n.entries = "string" == typeof e && /<tt\s+xml/gi.exec(e) ? r.default.TrackFormatParser.dfxp.parse(e) : r.default.TrackFormatParser.webvtt.parse(e), n.isLoaded = !0, t.enableTrackButton(n), t.loadNextTrack(), "slides" === n.kind ? t.setupSlides(n) : "chapters" !== n.kind || t.hasChapters || (t.drawChapters(n), t.hasChapters = !0)
                }, function() {
                    t.removeTrackButton(n.trackId), t.loadNextTrack()
                })
            },
            enableTrackButton: function(e) {
                var t = this,
                    n = e.srclang,
                    o = i.default.getElementById("" + e.trackId);
                if (o) {
                    var s = e.label;
                    "" === s && (s = a.default.t(r.default.language.codes[n]) || n), o.disabled = !1;
                    for (var l = (0, c.siblings)(o, function(e) {
                            return (0, c.hasClass)(e, t.options.classPrefix + "captions-selector-label")
                        }), d = 0, f = l.length; d < f; d++) l[d].innerHTML = s;
                    if (t.options.startLanguage === n) {
                        o.checked = !0;
                        var p = (0, u.createEvent)("click", o);
                        o.dispatchEvent(p)
                    }
                }
            },
            removeTrackButton: function(e) {
                var t = i.default.getElementById("" + e);
                if (t) {
                    var n = t.closest("li");
                    n && n.remove()
                }
            },
            addTrackButton: function(e, t, n) {
                var o = this;
                "" === n && (n = a.default.t(r.default.language.codes[t]) || t), o.captionsButton.querySelector("ul").innerHTML += '<li class="' + o.options.classPrefix + 'captions-selector-list-item"><input type="radio" class="' + o.options.classPrefix + 'captions-selector-input" name="' + o.id + '_captions" id="' + e + '" value="' + e + '" disabled><label class="' + o.options.classPrefix + 'captions-selector-label"for="' + e + '">' + n + " (loading)</label></li>"
            },
            checkForTracks: function() {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (var n = 0, o = e.tracks.length; n < o; n++) {
                        var i = e.tracks[n].kind;
                        if (("subtitles" === i || "captions" === i) && e.tracks[n].isLoaded) {
                            t = !0;
                            break
                        }
                    }
                    e.captionsButton.style.display = t ? "" : "none", e.setControlsSize()
                }
            },
            displayCaptions: function() {
                if (void 0 !== this.tracks) {
                    var e = this,
                        t = e.selectedTrack;
                    if (null !== t && t.isLoaded) {
                        var n = e.searchTrackPosition(t.entries, e.media.currentTime);
                        if (n > -1) return e.captionsText.innerHTML = function(e) {
                            var t = i.default.createElement("div");
                            t.innerHTML = e;
                            for (var n = t.getElementsByTagName("script"), o = n.length; o--;) n[o].remove();
                            for (var r = t.getElementsByTagName("*"), a = 0, s = r.length; a < s; a++)
                                for (var l = r[a].attributes, d = Array.prototype.slice.call(l), u = 0, c = d.length; u < c; u++) d[u].name.startsWith("on") || d[u].value.startsWith("javascript") ? r[a].remove() : "style" === d[u].name && r[a].removeAttribute(d[u].name);
                            return t.innerHTML
                        }(t.entries[n].text), e.captionsText.className = e.options.classPrefix + "captions-text " + (t.entries[n].identifier || ""), e.captions.style.display = "", void(e.captions.style.height = "0px");
                        e.captions.style.display = "none"
                    } else e.captions.style.display = "none"
                }
            },
            setupSlides: function(e) {
                var t = this;
                t.slides = e, t.slides.entries.imgs = [t.slides.entries.length], t.showSlide(0)
            },
            showSlide: function(e) {
                var t = this,
                    n = this;
                if (void 0 !== n.tracks && void 0 !== n.slidesContainer) {
                    var o = n.slides.entries[e].text,
                        r = n.slides.entries[e].imgs;
                    if (void 0 === r || void 0 === r.fadeIn) {
                        var a = i.default.createElement("img");
                        a.src = o, a.addEventListener("load", function() {
                            var e = t,
                                o = (0, c.siblings)(e, function(e) {
                                    return o(e)
                                });
                            e.style.display = "none", n.slidesContainer.innerHTML += e.innerHTML, (0, c.fadeIn)(n.slidesContainer.querySelector(a));
                            for (var i = 0, r = o.length; i < r; i++)(0, c.fadeOut)(o[i], 400)
                        }), n.slides.entries[e].imgs = r = a
                    } else if (!(0, c.visible)(r)) {
                        var s = (0, c.siblings)(self, function(e) {
                            return s(e)
                        });
                        (0, c.fadeIn)(n.slidesContainer.querySelector(r));
                        for (var l = 0, d = s.length; l < d; l++)(0, c.fadeOut)(s[l])
                    }
                }
            },
            displaySlides: function() {
                var e = this;
                if (void 0 !== this.slides) {
                    var t = e.slides,
                        n = e.searchTrackPosition(t.entries, e.media.currentTime);
                    n > -1 && e.showSlide(n)
                }
            },
            drawChapters: function(e) {
                var t = this,
                    n = e.entries.length;
                if (n) {
                    t.chaptersButton.querySelector("ul").innerHTML = "";
                    for (var o = 0; o < n; o++) t.chaptersButton.querySelector("ul").innerHTML += '<li class="' + t.options.classPrefix + 'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false"><input type="radio" class="' + t.options.classPrefix + 'captions-selector-input" name="' + t.id + '_chapters" id="' + t.id + "_chapters_" + o + '" value="' + e.entries[o].start + '" disabled><label class="' + t.options.classPrefix + 'chapters-selector-label"for="' + t.id + "_chapters_" + o + '">' + e.entries[o].text + "</label></li>";
                    for (var i = t.chaptersButton.querySelectorAll('input[type="radio"]'), r = t.chaptersButton.querySelectorAll("." + t.options.classPrefix + "chapters-selector-label"), a = 0, s = i.length; a < s; a++) i[a].disabled = !1, i[a].checked = !1, i[a].addEventListener("click", function() {
                        var e = this,
                            n = t.chaptersButton.querySelectorAll("li"),
                            o = (0, c.siblings)(e, function(e) {
                                return (0, c.hasClass)(e, t.options.classPrefix + "chapters-selector-label")
                            })[0];
                        e.checked = !0, e.parentNode.setAttribute("aria-checked", !0), (0, c.addClass)(o, t.options.classPrefix + "chapters-selected"), (0, c.removeClass)(t.chaptersButton.querySelector("." + t.options.classPrefix + "chapters-selected"), t.options.classPrefix + "chapters-selected");
                        for (var i = 0, r = n.length; i < r; i++) n[i].setAttribute("aria-checked", !1);
                        t.media.setCurrentTime(parseFloat(e.value)), t.media.paused && t.media.play()
                    });
                    for (var l = 0, d = r.length; l < d; l++) r[l].addEventListener("click", function() {
                        var e = (0, c.siblings)(this, function(e) {
                                return "INPUT" === e.tagName
                            })[0],
                            t = (0, u.createEvent)("click", e);
                        e.dispatchEvent(t)
                    })
                }
            },
            searchTrackPosition: function(e, t) {
                for (var n = 0, o = e.length - 1, i = void 0, r = void 0, a = void 0; n <= o;) {
                    if (i = n + o >> 1, r = e[i].start, a = e[i].stop, t >= r && t < a) return i;
                    r < t ? n = i + 1 : r > t && (o = i - 1)
                }
                return -1
            }
        }), r.default.language = {
            codes: {
                af: "mejs.afrikaans",
                sq: "mejs.albanian",
                ar: "mejs.arabic",
                be: "mejs.belarusian",
                bg: "mejs.bulgarian",
                ca: "mejs.catalan",
                zh: "mejs.chinese",
                "zh-cn": "mejs.chinese-simplified",
                "zh-tw": "mejs.chines-traditional",
                hr: "mejs.croatian",
                cs: "mejs.czech",
                da: "mejs.danish",
                nl: "mejs.dutch",
                en: "mejs.english",
                et: "mejs.estonian",
                fl: "mejs.filipino",
                fi: "mejs.finnish",
                fr: "mejs.french",
                gl: "mejs.galician",
                de: "mejs.german",
                el: "mejs.greek",
                ht: "mejs.haitian-creole",
                iw: "mejs.hebrew",
                hi: "mejs.hindi",
                hu: "mejs.hungarian",
                is: "mejs.icelandic",
                id: "mejs.indonesian",
                ga: "mejs.irish",
                it: "mejs.italian",
                ja: "mejs.japanese",
                ko: "mejs.korean",
                lv: "mejs.latvian",
                lt: "mejs.lithuanian",
                mk: "mejs.macedonian",
                ms: "mejs.malay",
                mt: "mejs.maltese",
                no: "mejs.norwegian",
                fa: "mejs.persian",
                pl: "mejs.polish",
                pt: "mejs.portuguese",
                ro: "mejs.romanian",
                ru: "mejs.russian",
                sr: "mejs.serbian",
                sk: "mejs.slovak",
                sl: "mejs.slovenian",
                es: "mejs.spanish",
                sw: "mejs.swahili",
                sv: "mejs.swedish",
                tl: "mejs.tagalog",
                th: "mejs.thai",
                tr: "mejs.turkish",
                uk: "mejs.ukrainian",
                vi: "mejs.vietnamese",
                cy: "mejs.welsh",
                yi: "mejs.yiddish"
            }
        }, r.default.TrackFormatParser = {
            webvtt: {
                pattern: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(e) {
                    for (var t = e.split(/\r?\n/), n = [], o = void 0, i = void 0, r = void 0, a = 0, s = t.length; a < s; a++) {
                        if ((o = this.pattern.exec(t[a])) && a < t.length) {
                            for (a - 1 >= 0 && "" !== t[a - 1] && (r = t[a - 1]), i = t[++a], a++;
                                "" !== t[a] && a < t.length;) i = i + "\n" + t[a], a++;
                            i = i.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.push({
                                identifier: r,
                                start: 0 === (0, d.convertSMPTEtoSeconds)(o[1]) ? .2 : (0, d.convertSMPTEtoSeconds)(o[1]),
                                stop: (0, d.convertSMPTEtoSeconds)(o[3]),
                                text: i,
                                settings: o[5]
                            })
                        }
                        r = ""
                    }
                    return n
                }
            },
            dfxp: {
                parse: function(e) {
                    var t = (e = $(e).filter("tt")).firstChild,
                        n = t.querySelectorAll("p"),
                        o = e.getElementById("" + t.attr("style")),
                        i = [],
                        r = void 0;
                    if (o.length) {
                        o.removeAttribute("id");
                        var a = o.attributes;
                        if (a.length) {
                            r = {};
                            for (var s = 0, l = a.length; s < l; s++) r[a[s].name.split(":")[1]] = a[s].value
                        }
                    }
                    for (var u = 0, c = n.length; u < c; u++) {
                        var f = void 0,
                            p = {
                                start: null,
                                stop: null,
                                style: null,
                                text: null
                            };
                        if (n.eq(u).attr("begin") && (p.start = (0, d.convertSMPTEtoSeconds)(n.eq(u).attr("begin"))), !p.start && n.eq(u - 1).attr("end") && (p.start = (0, d.convertSMPTEtoSeconds)(n.eq(u - 1).attr("end"))), n.eq(u).attr("end") && (p.stop = (0, d.convertSMPTEtoSeconds)(n.eq(u).attr("end"))), !p.stop && n.eq(u + 1).attr("begin") && (p.stop = (0, d.convertSMPTEtoSeconds)(n.eq(u + 1).attr("begin"))), r) {
                            f = "";
                            for (var m in r) f += m + ":" + r[m] + ";"
                        }
                        f && (p.style = f), 0 === p.start && (p.start = .2), p.text = n.eq(u).innerHTML.trim().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), i.push(p)
                    }
                    return i
                }
            }
        }
    }, {
        16: 16,
        2: 2,
        26: 26,
        27: 27,
        30: 30,
        5: 5,
        7: 7
    }],
    14: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = e(16),
            a = o(r),
            s = o(e(5)),
            l = e(25),
            d = e(27),
            u = e(26);
        Object.assign(r.config, {
            muteText: null,
            unmuteText: null,
            allyVolumeControlText: null,
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical",
            startVolume: .8
        }), Object.assign(a.default.prototype, {
            buildvolume: function(e, t, n, o) {
                if (!l.IS_ANDROID && !l.IS_IOS || !this.options.hideVolumeOnTouchDevices) {
                    var r = this,
                        a = r.isVideo ? r.options.videoVolume : r.options.audioVolume,
                        c = (0, d.isString)(r.options.muteText) ? r.options.muteText : s.default.t("mejs.mute"),
                        f = (0, d.isString)(r.options.unmuteText) ? r.options.unmuteText : s.default.t("mejs.unmute"),
                        p = (0, d.isString)(r.options.allyVolumeControlText) ? r.options.allyVolumeControlText : s.default.t("mejs.volume-help-text"),
                        m = i.default.createElement("div");
                    if (m.className = r.options.classPrefix + "button " + r.options.classPrefix + "volume-button " + r.options.classPrefix + "mute", m.innerHTML = "horizontal" === a ? '<button type="button" aria-controls="' + r.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button>' : '<button type="button" aria-controls="' + r.id + '" title="' + c + '" aria-label="' + c + '" tabindex="0"></button><a href="javascript:void(0);" class="' + r.options.classPrefix + 'volume-slider" aria-label="' + s.default.t("mejs.volume-slider") + '" aria-valuemin="0" aria-valuemax="100" role="slider" aria-orientation="vertical"><span class="' + r.options.classPrefix + 'offscreen">' + p + '</span><div class="' + r.options.classPrefix + 'volume-total"><div class="' + r.options.classPrefix + 'volume-current"></div><div class="' + r.options.classPrefix + 'volume-handle"></div></div></a>', r.addControlElement(m, "volume"), "horizontal" === a) {
                        var h = i.default.createElement("a");
                        h.className = r.options.classPrefix + "horizontal-volume-slider", h.href = "javascript:void(0);", h.setAttribute("aria-label", s.default.t("mejs.volume-slider")), h.setAttribute("aria-valuemin", 0), h.setAttribute("aria-valuemax", 100), h.setAttribute("role", "slider"), h.innerHTML += '<span class="' + r.options.classPrefix + 'offscreen">' + p + '</span><div class="' + r.options.classPrefix + 'horizontal-volume-total"><div class="' + r.options.classPrefix + 'horizontal-volume-current"></div><div class="' + r.options.classPrefix + 'horizontal-volume-handle"></div></div>', m.parentNode.insertBefore(h, m.nextSibling)
                    }
                    var v = !1,
                        y = !1,
                        g = !1,
                        b = function() {
                            var e = Math.floor(100 * o.volume);
                            E.setAttribute("aria-valuenow", e), E.setAttribute("aria-valuetext", e + "%")
                        },
                        E = "vertical" === a ? r.container.querySelector("." + r.options.classPrefix + "volume-slider") : r.container.querySelector("." + r.options.classPrefix + "horizontal-volume-slider"),
                        S = "vertical" === a ? r.container.querySelector("." + r.options.classPrefix + "volume-total") : r.container.querySelector("." + r.options.classPrefix + "horizontal-volume-total"),
                        x = "vertical" === a ? r.container.querySelector("." + r.options.classPrefix + "volume-current") : r.container.querySelector("." + r.options.classPrefix + "horizontal-volume-current"),
                        w = "vertical" === a ? r.container.querySelector("." + r.options.classPrefix + "volume-handle") : r.container.querySelector("." + r.options.classPrefix + "horizontal-volume-handle"),
                        P = function(e) {
                            if (null !== e && !isNaN(e) && void 0 !== e) {
                                if (e = Math.max(0, e), 0 === (e = Math.min(e, 1))) {
                                    (0, u.removeClass)(m, r.options.classPrefix + "mute"), (0, u.addClass)(m, r.options.classPrefix + "unmute");
                                    var t = m.firstElementChild;
                                    t.setAttribute("title", f), t.setAttribute("aria-label", f)
                                } else {
                                    (0, u.removeClass)(m, r.options.classPrefix + "unmute"), (0, u.addClass)(m, r.options.classPrefix + "mute");
                                    var n = m.firstElementChild;
                                    n.setAttribute("title", c), n.setAttribute("aria-label", c)
                                }
                                var o = 100 * e + "%",
                                    i = getComputedStyle(w);
                                "vertical" === a ? (x.style.bottom = 0, x.style.height = o, w.style.bottom = o, w.style.marginBottom = -parseFloat(i.height) / 2 + "px") : (x.style.left = 0, x.style.width = o, w.style.left = o, w.style.marginLeft = -parseFloat(i.width) / 2 + "px")
                            }
                        },
                        T = function(e) {
                            var t = (0, u.offset)(S),
                                n = getComputedStyle(S);
                            g = !0;
                            var o = null;
                            if ("vertical" === a) {
                                var i = parseFloat(n.height);
                                if (o = (i - (e.pageY - t.top)) / i, 0 === t.top || 0 === t.left) return
                            } else {
                                var s = parseFloat(n.width);
                                o = (e.pageX - t.left) / s
                            }
                            o = Math.max(0, o), o = Math.min(o, 1), P(o), r.setMuted(0 === o), r.setVolume(o), e.preventDefault(), e.stopPropagation()
                        },
                        C = function() {
                            r.muted ? (P(0), (0, u.removeClass)(m, r.options.classPrefix + "mute"), (0, u.addClass)(m, r.options.classPrefix + "unmute")) : (P(o.volume), (0, u.removeClass)(m, r.options.classPrefix + "unmute"), (0, u.addClass)(m, r.options.classPrefix + "mute"))
                        };
                    m.addEventListener("mouseenter", function(e) {
                        e.target === m && (E.style.display = "block", y = !0, e.preventDefault(), e.stopPropagation())
                    }), m.addEventListener("focusin", function() {
                        E.style.display = "block", y = !0
                    }), m.addEventListener("focusout", function(e) {
                        e.relatedTarget && (!e.relatedTarget || e.relatedTarget.matches("." + r.options.classPrefix + "volume-slider")) || "vertical" !== a || (E.style.display = "none")
                    }), m.addEventListener("mouseleave", function() {
                        y = !1, v || "vertical" !== a || (E.style.display = "none")
                    }), m.addEventListener("focusout", function() {
                        y = !1
                    }), m.addEventListener("keydown", function(e) {
                        if (r.options.keyActions.length) {
                            var t = e.which || e.keyCode || 0,
                                n = o.volume;
                            switch (t) {
                                case 38:
                                    n = Math.min(n + .1, 1);
                                    break;
                                case 40:
                                    n = Math.max(0, n - .1);
                                    break;
                                default:
                                    return !0
                            }
                            v = !1, P(n), o.setVolume(n), e.preventDefault(), e.stopPropagation()
                        }
                    }), m.querySelector("button").addEventListener("click", function() {
                        o.setMuted(!o.muted);
                        var e = (0, d.createEvent)("volumechange", o);
                        o.dispatchEvent(e)
                    }), E.addEventListener("dragstart", function() {
                        return !1
                    }), E.addEventListener("mouseover", function() {
                        y = !0
                    }), E.addEventListener("focusin", function() {
                        E.style.display = "block", y = !0
                    }), E.addEventListener("focusout", function() {
                        y = !1, v || "vertical" !== a || (E.style.display = "none")
                    }), E.addEventListener("mousedown", function(e) {
                        T(e), r.globalBind("mousemove.vol", function(e) {
                            var t = e.target;
                            v && (t === E || t.closest("vertical" === a ? "." + r.options.classPrefix + "volume-slider" : "." + r.options.classPrefix + "horizontal-volume-slider")) && T(e)
                        }), r.globalBind("mouseup.vol", function() {
                            v = !1, y || "vertical" !== a || (E.style.display = "none")
                        }), v = !0, e.preventDefault(), e.stopPropagation()
                    }), o.addEventListener("volumechange", function(e) {
                        v || C(), b()
                    });
                    var k = !1;
                    o.addEventListener("rendererready", function() {
                        g || setTimeout(function() {
                            k = !0, (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), r.setControlsSize()
                        }, 250)
                    }), o.addEventListener("loadedmetadata", function() {
                        setTimeout(function() {
                            g || k || ((0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0), o.setVolume(e.options.startVolume), r.setControlsSize()), k = !1
                        }, 250)
                    }), (0 === e.options.startVolume || o.originalNode.muted) && (o.setMuted(!0), e.options.startVolume = 0, C()), r.container.addEventListener("controlsresize", function() {
                        C()
                    })
                }
            }
        })
    }, {
        16: 16,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        5: 5
    }],
    15: [function(e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.EN = {
            "mejs.plural-form": 1,
            "mejs.download-file": "Download File",
            "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
            "mejs.fullscreen": "Fullscreen",
            "mejs.play": "Play",
            "mejs.pause": "Pause",
            "mejs.time-slider": "Time Slider",
            "mejs.time-help-text": "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
            "mejs.live-broadcast": "Live Broadcast",
            "mejs.volume-help-text": "Use Up/Down Arrow keys to increase or decrease volume.",
            "mejs.unmute": "Unmute",
            "mejs.mute": "Mute",
            "mejs.volume-slider": "Volume Slider",
            "mejs.video-player": "Video Player",
            "mejs.audio-player": "Audio Player",
            "mejs.captions-subtitles": "Captions/Subtitles",
            "mejs.captions-chapters": "Chapters",
            "mejs.none": "None",
            "mejs.afrikaans": "Afrikaans",
            "mejs.albanian": "Albanian",
            "mejs.arabic": "Arabic",
            "mejs.belarusian": "Belarusian",
            "mejs.bulgarian": "Bulgarian",
            "mejs.catalan": "Catalan",
            "mejs.chinese": "Chinese",
            "mejs.chinese-simplified": "Chinese (Simplified)",
            "mejs.chinese-traditional": "Chinese (Traditional)",
            "mejs.croatian": "Croatian",
            "mejs.czech": "Czech",
            "mejs.danish": "Danish",
            "mejs.dutch": "Dutch",
            "mejs.english": "English",
            "mejs.estonian": "Estonian",
            "mejs.filipino": "Filipino",
            "mejs.finnish": "Finnish",
            "mejs.french": "French",
            "mejs.galician": "Galician",
            "mejs.german": "German",
            "mejs.greek": "Greek",
            "mejs.haitian-creole": "Haitian Creole",
            "mejs.hebrew": "Hebrew",
            "mejs.hindi": "Hindi",
            "mejs.hungarian": "Hungarian",
            "mejs.icelandic": "Icelandic",
            "mejs.indonesian": "Indonesian",
            "mejs.irish": "Irish",
            "mejs.italian": "Italian",
            "mejs.japanese": "Japanese",
            "mejs.korean": "Korean",
            "mejs.latvian": "Latvian",
            "mejs.lithuanian": "Lithuanian",
            "mejs.macedonian": "Macedonian",
            "mejs.malay": "Malay",
            "mejs.maltese": "Maltese",
            "mejs.norwegian": "Norwegian",
            "mejs.persian": "Persian",
            "mejs.polish": "Polish",
            "mejs.portuguese": "Portuguese",
            "mejs.romanian": "Romanian",
            "mejs.russian": "Russian",
            "mejs.serbian": "Serbian",
            "mejs.slovak": "Slovak",
            "mejs.slovenian": "Slovenian",
            "mejs.spanish": "Spanish",
            "mejs.swahili": "Swahili",
            "mejs.swedish": "Swedish",
            "mejs.tagalog": "Tagalog",
            "mejs.thai": "Thai",
            "mejs.turkish": "Turkish",
            "mejs.ukrainian": "Ukrainian",
            "mejs.vietnamese": "Vietnamese",
            "mejs.welsh": "Welsh",
            "mejs.yiddish": "Yiddish"
        }
    }, {}],
    16: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.config = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            s = o(e(3)),
            l = o(e(2)),
            d = o(e(7)),
            u = o(e(6)),
            c = o(e(17)),
            f = o(e(5)),
            p = e(25),
            m = e(27),
            h = e(30),
            v = e(28),
            y = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(e(26));
        d.default.mepIndex = 0, d.default.players = {};
        var g = n.config = {
            poster: "",
            showPosterWhenEnded: !1,
            showPosterWhenPaused: !1,
            defaultVideoWidth: 480,
            defaultVideoHeight: 270,
            videoWidth: -1,
            videoHeight: -1,
            defaultAudioWidth: 400,
            defaultAudioHeight: 40,
            defaultSeekBackwardInterval: function(e) {
                return .05 * e.getDuration()
            },
            defaultSeekForwardInterval: function(e) {
                return .05 * e.getDuration()
            },
            setDimensions: !0,
            audioWidth: -1,
            audioHeight: -1,
            loop: !1,
            autoRewind: !0,
            enableAutosize: !0,
            timeFormat: "",
            alwaysShowHours: !1,
            showTimecodeFrameCount: !1,
            framesPerSecond: 25,
            alwaysShowControls: !1,
            hideVideoControlsOnLoad: !1,
            hideVideoControlsOnPause: !1,
            clickToPlayPause: !0,
            controlsTimeoutDefault: 1500,
            controlsTimeoutMouseEnter: 2500,
            controlsTimeoutMouseLeave: 1e3,
            iPadUseNativeControls: !1,
            iPhoneUseNativeControls: !1,
            AndroidUseNativeControls: !1,
            features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
            useDefaultControls: !1,
            isVideo: !0,
            stretching: "auto",
            classPrefix: "mejs__",
            enableKeyboard: !0,
            pauseOtherPlayers: !0,
            secondsDecimalLength: 0,
            customError: null,
            keyActions: [{
                keys: [32, 179],
                action: function(e) {
                    p.IS_FIREFOX || (e.paused || e.ended ? e.play() : e.pause())
                }
            }, {
                keys: [38],
                action: function(e) {
                    (e.container.querySelector("." + g.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + g.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + g.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
                    var t = Math.min(e.volume + .1, 1);
                    e.setVolume(t), t > 0 && e.setMuted(!1)
                }
            }, {
                keys: [40],
                action: function(e) {
                    (e.container.querySelector("." + g.classPrefix + "volume-button>button").matches(":focus") || e.container.querySelector("." + g.classPrefix + "volume-slider").matches(":focus")) && (e.container.querySelector("." + g.classPrefix + "volume-slider").style.display = ""), e.isVideo && (e.showControls(), e.startControlsTimer());
                    var t = Math.max(e.volume - .1, 0);
                    e.setVolume(t), t <= .1 && e.setMuted(!0)
                }
            }, {
                keys: [37, 227],
                action: function(e) {
                    if (!isNaN(e.duration) && e.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = Math.max(e.currentTime - e.options.defaultSeekBackwardInterval(e), 0);
                        e.setCurrentTime(t)
                    }
                }
            }, {
                keys: [39, 228],
                action: function(e) {
                    if (!isNaN(e.duration) && e.duration > 0) {
                        e.isVideo && (e.showControls(), e.startControlsTimer());
                        var t = Math.min(e.currentTime + e.options.defaultSeekForwardInterval(e), e.duration);
                        e.setCurrentTime(t)
                    }
                }
            }, {
                keys: [70],
                action: function(e, t, n, o) {
                    o.ctrlKey || void 0 !== e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                }
            }, {
                keys: [77],
                action: function(e) {
                    e.container.querySelector("." + g.classPrefix + "volume-slider").style.display = "", e.isVideo && (e.showControls(), e.startControlsTimer()), e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }]
        };
        d.default.MepDefaults = g;
        var b = function() {
            function e(t, n) {
                i(this, e);
                var o = this,
                    r = "string" == typeof t ? l.default.getElementById(t) : t;
                if (!(o instanceof e)) return new e(r, n);
                if (o.node = o.media = r, o.node) {
                    if (o.media.player) return o.media.player;
                    if (o.hasFocus = !1, o.controlsAreVisible = !0, o.controlsEnabled = !0, o.controlsTimer = null, o.currentMediaTime = 0, o.proxy = null, void 0 === n) {
                        var a = o.node.getAttribute("data-mejsoptions");
                        n = a ? JSON.parse(a) : {}
                    }
                    o.options = Object.assign({}, g, n), o.options.loop && !o.media.getAttribute("loop") ? (o.media.loop = !0, o.node.loop = !0) : o.media.loop && (o.options.loop = !0), o.options.timeFormat || (o.options.timeFormat = "mm:ss", o.options.alwaysShowHours && (o.options.timeFormat = "hh:mm:ss"), o.options.showTimecodeFrameCount && (o.options.timeFormat += ":ff")), (0, h.calculateTimeFormat)(0, o.options, o.options.framesPerSecond || 25), o.id = "mep_" + d.default.mepIndex++, d.default.players[o.id] = o;
                    var s = Object.assign({}, o.options, {
                            success: function(e, t) {
                                o._meReady(e, t)
                            },
                            error: function(e) {
                                o._handleError(e)
                            }
                        }),
                        c = o.node.tagName.toLowerCase();
                    if (o.isDynamic = "audio" !== c && "video" !== c && "iframe" !== c, o.isVideo = o.isDynamic ? o.options.isVideo : "audio" !== c && o.options.isVideo, o.mediaFiles = null, o.trackFiles = null, p.IS_IPAD && o.options.iPadUseNativeControls || p.IS_IPHONE && o.options.iPhoneUseNativeControls) o.node.setAttribute("controls", !0), p.IS_IPAD && o.node.getAttribute("autoplay") && o.play();
                    else if (!o.isVideo && (o.isVideo || !o.options.features.length && !o.options.useDefaultControls) || p.IS_ANDROID && o.options.AndroidUseNativeControls) o.isVideo || o.options.features.length || o.options.useDefaultControls || (o.node.style.display = "none");
                    else {
                        o.node.removeAttribute("controls");
                        var b = o.isVideo ? f.default.t("mejs.video-player") : f.default.t("mejs.audio-player"),
                            E = l.default.createElement("span");
                        if (E.className = o.options.classPrefix + "offscreen", E.innerText = b, o.media.parentNode.insertBefore(E, o.media), o.container = l.default.createElement("div"), o.container.id = o.id, o.container.className = o.options.classPrefix + "container " + o.options.classPrefix + "container-keyboard-inactive " + o.media.className, o.container.tabIndex = 0, o.container.setAttribute("role", "application"), o.container.setAttribute("aria-label", b), o.container.innerHTML = '<div class="' + o.options.classPrefix + 'inner"><div class="' + o.options.classPrefix + 'mediaelement"></div><div class="' + o.options.classPrefix + 'layers"></div><div class="' + o.options.classPrefix + 'controls"></div></div>', o.container.addEventListener("focus", function(e) {
                                if (!o.controlsAreVisible && !o.hasFocus && o.controlsEnabled) {
                                    o.showControls(!0);
                                    var t = (0, m.isNodeAfter)(e.relatedTarget, o.container) ? "." + o.options.classPrefix + "controls ." + o.options.classPrefix + "button:last-child > button" : "." + o.options.classPrefix + "playpause-button > button";
                                    o.container.querySelector(t).focus()
                                }
                            }), o.node.parentNode.insertBefore(o.container, o.node), o.options.features.length || o.options.useDefaultControls || (o.container.style.background = "transparent", o.container.querySelector("." + o.options.classPrefix + "controls").style.display = "none"), o.isVideo && "fill" === o.options.stretching && !y.hasClass(o.container.parentNode, o.options.classPrefix + "fill-container")) {
                            o.outerContainer = o.media.parentNode;
                            var S = l.default.createElement("div");
                            S.className = o.options.classPrefix + "fill-container", o.container.parentNode.insertBefore(S, o.container), S.appendChild(o.container)
                        }
                        if (p.IS_ANDROID && y.addClass(o.container, o.options.classPrefix + "android"), p.IS_IOS && y.addClass(o.container, o.options.classPrefix + "ios"), p.IS_IPAD && y.addClass(o.container, o.options.classPrefix + "ipad"), p.IS_IPHONE && y.addClass(o.container, o.options.classPrefix + "iphone"), y.addClass(o.container, o.isVideo ? o.options.classPrefix + "video" : o.options.classPrefix + "audio"), p.IS_SAFARI && !p.IS_IOS) {
                            y.addClass(o.container, o.options.classPrefix + "hide-cues");
                            for (var x = o.node.cloneNode(), w = o.node.children, P = [], T = [], C = 0, k = w.length; C < k; C++) {
                                var _ = w[C];
                                ! function() {
                                    switch (_.tagName.toLowerCase()) {
                                        case "source":
                                            var e = {};
                                            Array.prototype.slice.call(_.attributes).forEach(function(t) {
                                                e[t.name] = t.value
                                            }), e.type = (0, v.formatType)(e.src, e.type), P.push(e);
                                            break;
                                        case "track":
                                            _.mode = "hidden", T.push(_);
                                            break;
                                        default:
                                            x.appendChild(_)
                                    }
                                }()
                            }
                            o.node.remove(), o.node = o.media = x, P.length && (o.mediaFiles = P), T.length && (o.trackFiles = T)
                        }
                        o.container.querySelector("." + o.options.classPrefix + "mediaelement").appendChild(o.node), o.media.player = o, o.controls = o.container.querySelector("." + o.options.classPrefix + "controls"), o.layers = o.container.querySelector("." + o.options.classPrefix + "layers");
                        var N = o.isVideo ? "video" : "audio",
                            A = N.substring(0, 1).toUpperCase() + N.substring(1);
                        o.options[N + "Width"] > 0 || o.options[N + "Width"].toString().indexOf("%") > -1 ? o.width = o.options[N + "Width"] : "" !== o.node.style.width && null !== o.node.style.width ? o.width = o.node.style.width : o.node.getAttribute("width") ? o.width = o.node.getAttribute("width") : o.width = o.options["default" + A + "Width"], o.options[N + "Height"] > 0 || o.options[N + "Height"].toString().indexOf("%") > -1 ? o.height = o.options[N + "Height"] : "" !== o.node.style.height && null !== o.node.style.height ? o.height = o.node.style.height : o.node.getAttribute("height") ? o.height = o.node.getAttribute("height") : o.height = o.options["default" + A + "Height"], o.initialAspectRatio = o.height >= o.width ? o.width / o.height : o.height / o.width, o.setPlayerSize(o.width, o.height), s.pluginWidth = o.width, s.pluginHeight = o.height
                    }
                    if (d.default.MepDefaults = s, new u.default(o.media, s, o.mediaFiles), void 0 !== o.container && o.options.features.length && o.controlsAreVisible && !o.options.hideVideoControlsOnLoad) {
                        var L = (0, m.createEvent)("controlsshown", o.container);
                        o.container.dispatchEvent(L)
                    }
                    return o
                }
            }
            return a(e, [{
                key: "showControls",
                value: function(e) {
                    var t = this;
                    if (e = void 0 === e || e, !t.controlsAreVisible && t.isVideo) {
                        if (e) ! function() {
                            y.fadeIn(t.controls, 200, function() {
                                y.removeClass(t.controls, t.options.classPrefix + "offscreen");
                                var e = (0, m.createEvent)("controlsshown", t.container);
                                t.container.dispatchEvent(e)
                            });
                            for (var e = t.container.querySelectorAll("." + t.options.classPrefix + "control"), n = 0, o = e.length; n < o; n++) ! function(n, o) {
                                y.fadeIn(e[n], 200, function() {
                                    y.removeClass(e[n], t.options.classPrefix + "offscreen")
                                })
                            }(n)
                        }();
                        else {
                            y.removeClass(t.controls, t.options.classPrefix + "offscreen"), t.controls.style.display = "", t.controls.style.opacity = 1;
                            for (var n = t.container.querySelectorAll("." + t.options.classPrefix + "control"), o = 0, i = n.length; o < i; o++) y.removeClass(n[o], t.options.classPrefix + "offscreen"), n[o].style.display = "";
                            var r = (0, m.createEvent)("controlsshown", t.container);
                            t.container.dispatchEvent(r)
                        }
                        t.controlsAreVisible = !0, t.setControlsSize()
                    }
                }
            }, {
                key: "hideControls",
                value: function(e, t) {
                    var n = this;
                    if (e = void 0 === e || e, !0 === t || !(!n.controlsAreVisible || n.options.alwaysShowControls || n.paused && 4 === n.readyState && (!n.options.hideVideoControlsOnLoad && n.currentTime <= 0 || !n.options.hideVideoControlsOnPause && n.currentTime > 0) || n.isVideo && !n.options.hideVideoControlsOnLoad && !n.readyState || n.ended)) {
                        if (e) ! function() {
                            y.fadeOut(n.controls, 200, function() {
                                y.addClass(n.controls, n.options.classPrefix + "offscreen"), n.controls.style.display = "";
                                var e = (0, m.createEvent)("controlshidden", n.container);
                                n.container.dispatchEvent(e)
                            });
                            for (var e = n.container.querySelectorAll("." + n.options.classPrefix + "control"), t = 0, o = e.length; t < o; t++) ! function(t, o) {
                                y.fadeOut(e[t], 200, function() {
                                    y.addClass(e[t], n.options.classPrefix + "offscreen"), e[t].style.display = ""
                                })
                            }(t)
                        }();
                        else {
                            y.addClass(n.controls, n.options.classPrefix + "offscreen"), n.controls.style.display = "", n.controls.style.opacity = 0;
                            for (var o = n.container.querySelectorAll("." + n.options.classPrefix + "control"), i = 0, r = o.length; i < r; i++) y.addClass(o[i], n.options.classPrefix + "offscreen"), o[i].style.display = "";
                            var a = (0, m.createEvent)("controlshidden", n.container);
                            n.container.dispatchEvent(a)
                        }
                        n.controlsAreVisible = !1
                    }
                }
            }, {
                key: "startControlsTimer",
                value: function(e) {
                    var t = this;
                    e = void 0 !== e ? e : t.options.controlsTimeoutDefault, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                }
            }, {
                key: "killControlsTimer",
                value: function() {
                    var e = this;
                    null !== e.controlsTimer && (clearTimeout(e.controlsTimer), delete e.controlsTimer, e.controlsTimer = null)
                }
            }, {
                key: "disableControls",
                value: function() {
                    var e = this;
                    e.killControlsTimer(), e.controlsEnabled = !1, e.hideControls(!1, !0)
                }
            }, {
                key: "enableControls",
                value: function() {
                    var e = this;
                    e.controlsEnabled = !0, e.showControls(!1)
                }
            }, {
                key: "_setDefaultPlayer",
                value: function() {
                    var e = this;
                    e.proxy && e.proxy.pause(), e.proxy = new c.default(e), e.media.addEventListener("loadedmetadata", function() {
                        e.getCurrentTime() > 0 && e.currentMediaTime > 0 && (e.setCurrentTime(e.currentMediaTime), p.IS_IOS || p.IS_ANDROID || e.play())
                    })
                }
            }, {
                key: "_meReady",
                value: function(e, t) {
                    var n = this,
                        o = t.getAttribute("autoplay"),
                        i = !(void 0 === o || null === o || "false" === o),
                        r = null !== e.rendererName && /(native|html5)/i.test(n.media.rendererName);
                    if (n.controls && n.enableControls(), n.container && n.container.querySelector("." + n.options.classPrefix + "overlay-play") && (n.container.querySelector("." + n.options.classPrefix + "overlay-play").style.display = ""), !n.created) {
                        if (n.created = !0, n.media = e, n.domNode = t, !(p.IS_ANDROID && n.options.AndroidUseNativeControls || p.IS_IPAD && n.options.iPadUseNativeControls || p.IS_IPHONE && n.options.iPhoneUseNativeControls)) {
                            if (!n.isVideo && !n.options.features.length && !n.options.useDefaultControls) return i && r && n.play(), void(n.options.success && ("string" == typeof n.options.success ? s.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n)));
                            if (n.findTracks(), n.featurePosition = {}, n._setDefaultPlayer(), n.options.useDefaultControls) {
                                var a = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
                                n.options.features = a.concat(n.options.features.filter(function(e) {
                                    return -1 === a.indexOf(e)
                                }))
                            }
                            for (var u = 0, c = n.options.features.length; u < c; u++) {
                                var f = n.options.features[u];
                                if (n["build" + f]) try {
                                    n["build" + f](n, n.controls, n.layers, n.media)
                                } catch (e) {
                                    console.error("error building " + f, e)
                                }
                            }
                            n.buildposter(n, n.controls, n.layers, n.media), n.buildkeyboard(n, n.controls, n.layers, n.media), n.buildoverlays(n, n.controls, n.layers, n.media);
                            var v = (0, m.createEvent)("controlsready", n.container);
                            n.container.dispatchEvent(v), n.setPlayerSize(n.width, n.height), n.setControlsSize(), n.isVideo && (n.clickToPlayPauseCallback = function() {
                                if (n.options.clickToPlayPause) {
                                    var e = n.container.querySelector("." + n.options.classPrefix + "overlay-button"),
                                        t = e.getAttribute("aria-pressed");
                                    n.paused && t ? n.pause() : n.paused ? n.play() : n.pause(), e.setAttribute("aria-pressed", !t), n.container.focus()
                                }
                            }, n.createIframeLayer(), n.media.addEventListener("click", n.clickToPlayPauseCallback), !p.IS_ANDROID && !p.IS_IOS || n.options.alwaysShowControls ? (n.container.addEventListener("mouseenter", function() {
                                n.controlsEnabled && (n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter)))
                            }), n.container.addEventListener("mousemove", function() {
                                n.controlsEnabled && (n.controlsAreVisible || n.showControls(), n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }), n.container.addEventListener("mouseleave", function() {
                                n.controlsEnabled && (n.paused || n.options.alwaysShowControls || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                            })) : n.node.addEventListener("touchstart", function() {
                                n.controlsAreVisible ? n.hideControls(!1) : n.controlsEnabled && n.showControls(!1)
                            }), n.options.hideVideoControlsOnLoad && n.hideControls(!1), n.options.enableAutosize && n.media.addEventListener("loadedmetadata", function(e) {
                                var t = void 0 !== e ? e.detail.target || e.target : n.media;
                                n.options.videoHeight <= 0 && !n.domNode.getAttribute("height") && null !== t && !isNaN(t.videoHeight) && (n.setPlayerSize(t.videoWidth, t.videoHeight), n.setControlsSize(), n.media.setSize(t.videoWidth, t.videoHeight))
                            })), n.media.addEventListener("play", function() {
                                n.hasFocus = !0;
                                for (var e in d.default.players)
                                    if (d.default.players.hasOwnProperty(e)) {
                                        var t = d.default.players[e];
                                        t.id === n.id || !n.options.pauseOtherPlayers || t.paused || t.ended || (t.pause(), t.hasFocus = !1)
                                    } p.IS_ANDROID || p.IS_IOS || n.options.alwaysShowControls || !n.isVideo || n.hideControls()
                            }), n.media.addEventListener("ended", function() {
                                if (n.options.autoRewind) try {
                                    n.setCurrentTime(0), setTimeout(function() {
                                        var e = n.container.querySelector("." + n.options.classPrefix + "overlay-loading");
                                        e && e.parentNode && (e.parentNode.style.display = "none")
                                    }, 20)
                                } catch (e) {}
                                "function" == typeof n.media.renderer.stop ? n.media.renderer.stop() : n.pause(), n.setProgressRail && n.setProgressRail(), n.setCurrentRail && n.setCurrentRail(), n.options.loop ? n.play() : !n.options.alwaysShowControls && n.controlsEnabled && n.showControls()
                            }), n.media.addEventListener("loadedmetadata", function() {
                                (0, h.calculateTimeFormat)(n.getDuration(), n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.isFullScreen || (n.setPlayerSize(n.width, n.height), n.setControlsSize())
                            });
                            var g = null;
                            n.media.addEventListener("timeupdate", function() {
                                isNaN(n.getDuration()) || g === n.getDuration() || (g = n.getDuration(), (0, h.calculateTimeFormat)(g, n.options, n.options.framesPerSecond || 25), n.updateDuration && n.updateDuration(), n.updateCurrent && n.updateCurrent(), n.setControlsSize())
                            }), n.container.addEventListener("click", function(e) {
                                y.addClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive")
                            }), n.container.addEventListener("focusin", function(e) {
                                y.removeClass(e.currentTarget, n.options.classPrefix + "container-keyboard-inactive"), !n.isVideo || p.IS_ANDROID || p.IS_IOS || !n.controlsEnabled || n.options.alwaysShowControls || (n.killControlsTimer("enter"), n.showControls(), n.startControlsTimer(n.options.controlsTimeoutMouseEnter))
                            }), n.container.addEventListener("focusout", function(e) {
                                setTimeout(function() {
                                    e.relatedTarget && n.keyboardAction && !e.relatedTarget.closest("." + n.options.classPrefix + "container") && (n.keyboardAction = !1, !n.isVideo || n.options.alwaysShowControls || n.paused || n.startControlsTimer(n.options.controlsTimeoutMouseLeave))
                                }, 0)
                            }), setTimeout(function() {
                                n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            }, 0), n.globalResizeCallback = function() {
                                n.isFullScreen || p.HAS_TRUE_NATIVE_FULLSCREEN && l.default.webkitIsFullScreen || n.setPlayerSize(n.width, n.height), n.setControlsSize()
                            }, n.globalBind("resize", n.globalResizeCallback)
                        }
                        i && r && n.play(), n.options.success && ("string" == typeof n.options.success ? s.default[n.options.success](n.media, n.domNode, n) : n.options.success(n.media, n.domNode, n))
                    }
                }
            }, {
                key: "_handleError",
                value: function(e, t, n) {
                    var o = this,
                        i = o.layers.querySelector("." + o.options.classPrefix + "overlay-play");
                    i && (i.style.display = "none"), o.options.error && o.options.error(e, t, n), o.container.querySelector("." + o.options.classPrefix + "cannotplay") && o.container.querySelector("." + o.options.classPrefix + "cannotplay").remove();
                    var r = l.default.createElement("div");
                    r.className = o.options.classPrefix + "cannotplay", r.style.width = "100%", r.style.height = "100%";
                    var a = "function" == typeof o.options.customError ? o.options.customError(o.media, o.media.originalNode) : o.options.customError,
                        s = "";
                    if (a) {
                        var u = o.media.originalNode.getAttribute("poster");
                        if (u && (s = '<img src="' + u + '" alt="' + d.default.i18n.t("mejs.download-file") + '">'), e.message && (a += "<p>" + e.message + "</p>"), e.urls)
                            for (var c = 0, f = e.urls.length; c < f; c++) {
                                var p = e.urls[c];
                                a += '<a href="' + p.src + '" data-type="' + p.type + '"><span>' + d.default.i18n.t("mejs.download-file") + ": " + p.src + "</span></a>"
                            }
                    }
                    a && o.layers.querySelector("." + o.options.classPrefix + "overlay-error") && (r.innerHTML = a, o.layers.querySelector("." + o.options.classPrefix + "overlay-error").innerHTML = "" + s + r.outerHTML, o.layers.querySelector("." + o.options.classPrefix + "overlay-error").parentNode.style.display = "block")
                }
            }, {
                key: "setPlayerSize",
                value: function(e, t) {
                    var n = this;
                    if (!n.options.setDimensions) return !1;
                    switch (void 0 !== e && (n.width = e), void 0 !== t && (n.height = t), n.options.stretching) {
                        case "fill":
                            n.isVideo ? n.setFillMode() : n.setDimensions(n.width, n.height);
                            break;
                        case "responsive":
                            n.setResponsiveMode();
                            break;
                        case "none":
                            n.setDimensions(n.width, n.height);
                            break;
                        default:
                            !0 === n.hasFluidMode() ? n.setResponsiveMode() : n.setDimensions(n.width, n.height)
                    }
                }
            }, {
                key: "hasFluidMode",
                value: function() {
                    var e = this;
                    return -1 !== e.height.toString().indexOf("%") || e.node && e.node.style.maxWidth && "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width || e.node && e.node.currentStyle && "100%" === e.node.currentStyle.maxWidth
                }
            }, {
                key: "setResponsiveMode",
                value: function() {
                    var e = this,
                        t = function() {
                            for (var t = void 0, n = e.container; n;) {
                                try {
                                    if (p.IS_FIREFOX && "html" === n.tagName.toLowerCase() && s.default.self !== s.default.top && null !== s.default.frameElement) return s.default.frameElement;
                                    t = n.parentElement
                                } catch (e) {
                                    t = n.parentElement
                                }
                                if (t && y.visible(t)) return t;
                                n = t
                            }
                            return null
                        }(),
                        n = t ? getComputedStyle(t, null) : getComputedStyle(l.default.body, null),
                        o = e.isVideo ? e.media.videoWidth && e.media.videoWidth > 0 ? e.media.videoWidth : e.node.getAttribute("width") ? e.node.getAttribute("width") : e.options.defaultVideoWidth : e.options.defaultAudioWidth,
                        i = e.isVideo ? e.media.videoHeight && e.media.videoHeight > 0 ? e.media.videoHeight : e.node.getAttribute("height") ? e.node.getAttribute("height") : e.options.defaultVideoHeight : e.options.defaultAudioHeight,
                        r = function() {
                            var t = 1;
                            return e.isVideo ? (t = e.media.videoWidth && e.media.videoWidth > 0 && e.media.videoHeight && e.media.videoHeight > 0 ? e.height >= e.width ? e.media.videoWidth / e.media.videoHeight : e.media.videoHeight / e.media.videoWidth : e.initialAspectRatio, (isNaN(t) || t < .01 || t > 100) && (t = 1), t) : t
                        }(),
                        a = parseFloat(n.height),
                        d = void 0,
                        u = parseFloat(n.width);
                    if (d = e.isVideo ? "100%" === e.height ? parseFloat(u * i / o, 10) : e.height >= e.width ? parseFloat(u / r, 10) : parseFloat(u * r, 10) : i, isNaN(d) && (d = a), e.container.parentNode.length > 0 && "body" === e.container.parentNode.tagName.toLowerCase() && (u = s.default.innerWidth || l.default.documentElement.clientWidth || l.default.body.clientWidth, d = s.default.innerHeight || l.default.documentElement.clientHeight || l.default.body.clientHeight), d && u) {
                        e.container.style.width = u + "px", e.container.style.height = d + "px", e.node.style.width = "100%", e.node.style.height = "100%", e.isVideo && e.media.setSize && e.media.setSize(u, d);
                        for (var c = e.layers.children, f = 0, m = c.length; f < m; f++) c[f].style.width = "100%", c[f].style.height = "100%"
                    }
                }
            }, {
                key: "setFillMode",
                value: function() {
                    var e = this,
                        t = void 0,
                        n = !1;
                    try {
                        s.default.self !== s.default.top ? (n = !0, t = s.default.frameElement) : t = e.outerContainer
                    } catch (n) {
                        t = e.outerContainer
                    }
                    var o = getComputedStyle(t);
                    "none" !== e.node.style.height && e.node.style.height !== e.height && (e.node.style.height = "auto"), "none" !== e.node.style.maxWidth && e.node.style.maxWidth !== e.width && (e.node.style.maxWidth = "none"), "none" !== e.node.style.maxHeight && e.node.style.maxHeight !== e.height && (e.node.style.maxHeight = "none"), e.node.currentStyle && ("100%" === e.node.currentStyle.height && (e.node.currentStyle.height = "auto"), "100%" === e.node.currentStyle.maxWidth && (e.node.currentStyle.maxWidth = "none"), "100%" === e.node.currentStyle.maxHeight && (e.node.currentStyle.maxHeight = "none")), n || parseFloat(o.width) || (t.style.width = e.media.offsetWidth + "px"), n || parseFloat(o.height) || (t.style.height = e.media.offsetHeight + "px"), o = getComputedStyle(t);
                    var i = parseFloat(o.width),
                        r = parseFloat(o.height);
                    e.setDimensions("100%", "100%");
                    var a = e.container.querySelector("." + e.options.classPrefix + "poster>img");
                    a && (a.style.display = "");
                    for (var l = e.container.querySelectorAll("object, embed, iframe, video"), d = e.height, u = e.width, c = i, f = d * i / u, p = u * r / d, m = r, h = p > i == !1, v = h ? Math.floor(c) : Math.floor(p), y = h ? Math.floor(f) : Math.floor(m), g = h ? i + "px" : v + "px", b = h ? y + "px" : r + "px", E = 0, S = l.length; E < S; E++) l[E].style.height = b, l[E].style.width = g, e.media.setSize && e.media.setSize(g, b), l[E].style.marginLeft = Math.floor((i - v) / 2) + "px", l[E].style.marginTop = 0
                }
            }, {
                key: "setDimensions",
                value: function(e, t) {
                    var n = this;
                    e = (0, m.isString)(e) && e.indexOf("%") > -1 ? e : parseFloat(e) + "px", t = (0, m.isString)(t) && t.indexOf("%") > -1 ? t : parseFloat(t) + "px", n.container.style.width = e, n.container.style.height = t;
                    for (var o = n.layers.children, i = 0, r = o.length; i < r; i++) o[i].style.width = e, o[i].style.height = t
                }
            }, {
                key: "setControlsSize",
                value: function() {
                    var e = this;
                    if (y.visible(e.container))
                        if (e.rail && y.visible(e.rail)) {
                            for (var t = e.total ? getComputedStyle(e.total, null) : null, n = t ? parseFloat(t.marginLeft) + parseFloat(t.marginRight) : 0, o = getComputedStyle(e.rail), i = parseFloat(o.marginLeft) + parseFloat(o.marginRight), r = 0, a = y.siblings(e.rail, function(t) {
                                    return t !== e.rail
                                }), s = a.length, l = 0; l < s; l++) r += a[l].offsetWidth;
                            r += n + (0 === n ? 2 * i : i) + 1, e.container.style.minWidth = r + "px";
                            var d = (0, m.createEvent)("controlsresize", e.container);
                            e.container.dispatchEvent(d)
                        } else {
                            for (var u = e.controls.children, c = 0, f = 0, p = u.length; f < p; f++) c += u[f].offsetWidth;
                            e.container.style.minWidth = c + "px"
                        }
                }
            }, {
                key: "addControlElement",
                value: function(e, t) {
                    var n = this;
                    if (void 0 !== n.featurePosition[t]) {
                        var o = n.controls.children[n.featurePosition[t] - 1];
                        o.parentNode.insertBefore(e, o.nextSibling)
                    } else {
                        n.controls.appendChild(e);
                        for (var i = n.controls.children, r = 0, a = i.length; r < a; r++)
                            if (e === i[r]) {
                                n.featurePosition[t] = r;
                                break
                            }
                    }
                }
            }, {
                key: "createIframeLayer",
                value: function() {
                    var e = this;
                    if (e.isVideo && null !== e.media.rendererName && e.media.rendererName.indexOf("iframe") > -1 && !l.default.getElementById(e.media.id + "-iframe-overlay")) {
                        var t = l.default.createElement("div"),
                            n = l.default.getElementById(e.media.id + "_" + e.media.rendererName);
                        t.id = e.media.id + "-iframe-overlay", t.className = e.options.classPrefix + "iframe-overlay", t.addEventListener("click", function(t) {
                            e.options.clickToPlayPause && (e.paused ? e.play() : e.pause(), t.preventDefault(), t.stopPropagation())
                        }), n.parentNode.insertBefore(t, n)
                    }
                }
            }, {
                key: "resetSize",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        e.setPlayerSize(e.width, e.height), e.setControlsSize()
                    }, 50)
                }
            }, {
                key: "setPoster",
                value: function(e) {
                    var t = this,
                        n = t.container.querySelector("." + t.options.classPrefix + "poster");
                    n || ((n = l.default.createElement("div")).className = t.options.classPrefix + "poster " + t.options.classPrefix + "layer", t.layers.appendChild(n));
                    var o = n.querySelector("img");
                    !o && e && ((o = l.default.createElement("img")).className = t.options.classPrefix + "poster-img", o.width = "100%", o.height = "100%", n.style.display = "", n.appendChild(o)), e ? (o.setAttribute("src", e), n.style.backgroundImage = 'url("' + e + '")', n.style.display = "") : o ? (n.style.backgroundImage = "none", n.style.display = "none", o.remove()) : n.style.display = "none"
                }
            }, {
                key: "changeSkin",
                value: function(e) {
                    var t = this;
                    t.container.className = t.options.classPrefix + "container " + e, t.setPlayerSize(t.width, t.height), t.setControlsSize()
                }
            }, {
                key: "globalBind",
                value: function(e, t) {
                    var n = this,
                        o = n.node ? n.node.ownerDocument : l.default;
                    if ((e = (0, m.splitEvents)(e, n.id)).d)
                        for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++) i[r].split(".").reduce(function(e, n) {
                            return o.addEventListener(n, t, !1), n
                        }, "");
                    if (e.w)
                        for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++) d[u].split(".").reduce(function(e, n) {
                            return s.default.addEventListener(n, t, !1), n
                        }, "")
                }
            }, {
                key: "globalUnbind",
                value: function(e, t) {
                    var n = this,
                        o = n.node ? n.node.ownerDocument : l.default;
                    if ((e = (0, m.splitEvents)(e, n.id)).d)
                        for (var i = e.d.split(" "), r = 0, a = i.length; r < a; r++) i[r].split(".").reduce(function(e, n) {
                            return o.removeEventListener(n, t, !1), n
                        }, "");
                    if (e.w)
                        for (var d = e.w.split(" "), u = 0, c = d.length; u < c; u++) d[u].split(".").reduce(function(e, n) {
                            return s.default.removeEventListener(n, t, !1), n
                        }, "")
                }
            }, {
                key: "buildposter",
                value: function(e, t, n, o) {
                    var i = this,
                        r = l.default.createElement("div");
                    r.className = i.options.classPrefix + "poster " + i.options.classPrefix + "layer", n.appendChild(r);
                    var a = o.originalNode.getAttribute("poster");
                    "" !== e.options.poster && a && p.IS_IOS && (o.originalNode.removeAttribute("poster"), a = e.options.poster), a ? i.setPoster(a) : null !== i.media.renderer && "function" == typeof i.media.renderer.getPosterUrl ? i.setPoster(i.media.renderer.getPosterUrl()) : r.style.display = "none", o.addEventListener("play", function() {
                        r.style.display = "none"
                    }), o.addEventListener("playing", function() {
                        r.style.display = "none"
                    }), e.options.showPosterWhenEnded && e.options.autoRewind && o.addEventListener("ended", function() {
                        r.style.display = ""
                    }), o.addEventListener("error", function() {
                        r.style.display = "none"
                    }), e.options.showPosterWhenPaused && o.addEventListener("pause", function() {
                        e.ended || (r.style.display = "")
                    })
                }
            }, {
                key: "buildoverlays",
                value: function(e, t, n, o) {
                    if (e.isVideo) {
                        var i = this,
                            r = l.default.createElement("div"),
                            a = l.default.createElement("div"),
                            s = l.default.createElement("div"),
                            d = t.querySelector("." + i.options.classPrefix + "time-buffering");
                        r.style.display = "none", r.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", r.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-loading"><span class="' + i.options.classPrefix + 'overlay-loading-bg-img"></span></div>', n.appendChild(r), a.style.display = "none", a.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer", a.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-error"></div>', n.appendChild(a), s.className = i.options.classPrefix + "overlay " + i.options.classPrefix + "layer " + i.options.classPrefix + "overlay-play", s.innerHTML = '<div class="' + i.options.classPrefix + 'overlay-button" role="button" tabindex="0" aria-label="' + f.default.t("mejs.play") + '" aria-pressed="false"></div>', s.addEventListener("click", function() {
                            if (i.options.clickToPlayPause) {
                                var e = i.container.querySelector("." + i.options.classPrefix + "overlay-button"),
                                    t = e.getAttribute("aria-pressed");
                                i.paused ? i.play() : i.pause(), e.setAttribute("aria-pressed", !!t), i.container.focus()
                            }
                        }), s.addEventListener("keydown", function(e) {
                            var t = e.keyCode || e.which || 0;
                            if (13 === t || p.IS_FIREFOX && 32 === t) {
                                var n = (0, m.createEvent)("click", s);
                                return s.dispatchEvent(n), !1
                            }
                        }), n.appendChild(s), null !== i.media.rendererName && (/(youtube|facebook)/i.test(i.media.rendererName) && !(i.media.originalNode.getAttribute("poster") || e.options.poster || "function" == typeof i.media.renderer.getPosterUrl && i.media.renderer.getPosterUrl()) || p.IS_STOCK_ANDROID || i.media.originalNode.getAttribute("autoplay")) && (s.style.display = "none");
                        var u = !1;
                        o.addEventListener("play", function() {
                            s.style.display = "none", r.style.display = "none", null !== d && (d.style.display = "none"), a.style.display = "none", u = !1
                        }), o.addEventListener("playing", function() {
                            s.style.display = "none", r.style.display = "none", null !== d && (d.style.display = "none"), a.style.display = "none", u = !1
                        }), o.addEventListener("seeking", function() {
                            s.style.display = "none", r.style.display = "", null !== d && (d.style.display = ""), u = !1
                        }), o.addEventListener("seeked", function() {
                            s.style.display = i.paused && !p.IS_STOCK_ANDROID ? "" : "none", r.style.display = "none", null !== d && (d.style.display = "none"), u = !1
                        }), o.addEventListener("pause", function() {
                            r.style.display = "none", p.IS_STOCK_ANDROID || u || (s.style.display = ""), null !== d && (d.style.display = "none"), u = !1
                        }), o.addEventListener("waiting", function() {
                            r.style.display = "", null !== d && (d.style.display = ""), u = !1
                        }), o.addEventListener("loadeddata", function() {
                            r.style.display = "", null !== d && (d.style.display = ""), p.IS_ANDROID && (o.canplayTimeout = setTimeout(function() {
                                if (l.default.createEvent) {
                                    var e = l.default.createEvent("HTMLEvents");
                                    return e.initEvent("canplay", !0, !0), o.dispatchEvent(e)
                                }
                            }, 300)), u = !1
                        }), o.addEventListener("canplay", function() {
                            r.style.display = "none", null !== d && (d.style.display = "none"), clearTimeout(o.canplayTimeout), u = !1
                        }), o.addEventListener("error", function(e) {
                            i._handleError(e, i.media, i.node), r.style.display = "none", s.style.display = "none", null !== d && (d.style.display = "none"), u = !0
                        }), o.addEventListener("keydown", function(t) {
                            i.onkeydown(e, o, t), u = !1
                        })
                    }
                }
            }, {
                key: "buildkeyboard",
                value: function(e, t, n, o) {
                    var i = this;
                    i.container.addEventListener("keydown", function() {
                        i.keyboardAction = !0
                    }), i.globalKeydownCallback = function(t) {
                        var n = l.default.activeElement.closest("." + i.options.classPrefix + "container"),
                            r = i.media.closest("." + i.options.classPrefix + "container");
                        return i.hasFocus = !(!n || !r || n.id !== r.id), i.onkeydown(e, o, t)
                    }, i.globalClickCallback = function(e) {
                        i.hasFocus = !!e.target.closest("." + i.options.classPrefix + "container")
                    }, i.globalBind("keydown", i.globalKeydownCallback), i.globalBind("click", i.globalClickCallback)
                }
            }, {
                key: "onkeydown",
                value: function(e, t, n) {
                    if (e.hasFocus && e.options.enableKeyboard)
                        for (var o = 0, i = e.options.keyActions.length; o < i; o++)
                            for (var r = e.options.keyActions[o], a = 0, s = r.keys.length; a < s; a++) n.keyCode === r.keys[a] && (r.action(e, t, n.keyCode, n), n.preventDefault(), n.stopPropagation());
                    return !0
                }
            }, {
                key: "play",
                value: function() {
                    this.proxy.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.proxy.pause()
                }
            }, {
                key: "load",
                value: function() {
                    this.proxy.load()
                }
            }, {
                key: "setCurrentTime",
                value: function(e) {
                    this.proxy.setCurrentTime(e)
                }
            }, {
                key: "getCurrentTime",
                value: function() {
                    return this.proxy.currentTime
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.proxy.duration
                }
            }, {
                key: "setVolume",
                value: function(e) {
                    this.proxy.volume = e
                }
            }, {
                key: "getVolume",
                value: function() {
                    return this.proxy.getVolume()
                }
            }, {
                key: "setMuted",
                value: function(e) {
                    this.proxy.setMuted(e)
                }
            }, {
                key: "setSrc",
                value: function(e) {
                    this.controlsEnabled || this.enableControls(), this.proxy.setSrc(e)
                }
            }, {
                key: "getSrc",
                value: function() {
                    return this.proxy.getSrc()
                }
            }, {
                key: "canPlayType",
                value: function(e) {
                    return this.proxy.canPlayType(e)
                }
            }, {
                key: "remove",
                value: function() {
                    var e = this,
                        t = e.media.rendererName,
                        n = e.media.originalNode.src;
                    for (var o in e.options.features) {
                        var i = e.options.features[o];
                        if (e["clean" + i]) try {
                            e["clean" + i](e, e.layers, e.controls, e.media)
                        } catch (e) {
                            console.error("error cleaning " + i, e)
                        }
                    }
                    var a = e.node.getAttribute("width"),
                        s = e.node.getAttribute("height");
                    a ? -1 === a.indexOf("%") && (a += "px") : a = "auto", s ? -1 === s.indexOf("%") && (s += "px") : s = "auto", e.node.style.width = a, e.node.style.height = s, e.isDynamic ? e.container.parentNode.insertBefore(e.node, e.container) : function() {
                        e.node.setAttribute("controls", !0), e.node.setAttribute("id", e.node.getAttribute("id").replace("_" + t, "").replace("_from_mejs", ""));
                        var o = e.container.querySelector("." + e.options.classPrefix + "poster>img");
                        o && e.node.setAttribute("poster", o.src), delete e.node.autoplay, "" !== e.media.canPlayType((0, v.getTypeFromFile)(n)) && e.node.setAttribute("src", n), ~t.indexOf("iframe") && l.default.getElementById(e.media.id + "-iframe-overlay").remove();
                        var i = e.node.cloneNode();
                        if (i.style.display = "", e.container.parentNode.insertBefore(i, e.container), e.node.remove(), e.mediaFiles)
                            for (var r = 0, a = e.mediaFiles.length; r < a; r++) {
                                var s = l.default.createElement("source");
                                s.setAttribute("src", e.mediaFiles[r].src), s.setAttribute("type", e.mediaFiles[r].type), i.appendChild(s)
                            }
                        if (e.trackFiles)
                            for (var d = 0, u = e.trackFiles.length; d < u; d++) ! function(t, n) {
                                var o = e.trackFiles[t],
                                    r = l.default.createElement("track");
                                r.kind = o.kind, r.label = o.label, r.srclang = o.srclang, r.src = o.src, i.appendChild(r), r.addEventListener("load", function() {
                                    this.mode = "showing", i.textTracks[t].mode = "showing"
                                })
                            }(d);
                        delete e.node, delete e.mediaFiles, delete e.trackFiles
                    }(), "function" == typeof e.media.renderer.destroy && e.media.renderer.destroy(), delete d.default.players[e.id], "object" === r(e.container) && (e.container.parentNode.querySelector("." + e.options.classPrefix + "offscreen").remove(), e.container.remove()), e.globalUnbind("resize", e.globalResizeCallback), e.globalUnbind("keydown", e.globalKeydownCallback), e.globalUnbind("click", e.globalClickCallback), delete e.media.player
                }
            }, {
                key: "paused",
                get: function() {
                    return this.proxy.paused
                }
            }, {
                key: "muted",
                get: function() {
                    return this.proxy.muted
                },
                set: function(e) {
                    this.setMuted(e)
                }
            }, {
                key: "ended",
                get: function() {
                    return this.proxy.ended
                }
            }, {
                key: "readyState",
                get: function() {
                    return this.proxy.readyState
                }
            }, {
                key: "currentTime",
                set: function(e) {
                    this.setCurrentTime(e)
                },
                get: function() {
                    return this.getCurrentTime()
                }
            }, {
                key: "duration",
                get: function() {
                    return this.getDuration()
                }
            }, {
                key: "volume",
                set: function(e) {
                    this.setVolume(e)
                },
                get: function() {
                    return this.getVolume()
                }
            }, {
                key: "src",
                set: function(e) {
                    this.setSrc(e)
                },
                get: function() {
                    return this.getSrc()
                }
            }]), e
        }();
        s.default.MediaElementPlayer = b, n.default = b
    }, {
        17: 17,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        30: 30,
        5: 5,
        6: 6,
        7: 7
    }],
    17: [function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e(3)),
            a = function() {
                function e(t) {
                    return o(this, e), this.media = t.media, this.isVideo = t.isVideo, this.classPrefix = t.options.classPrefix, this.createIframeLayer = function() {
                        return t.createIframeLayer()
                    }, this.setPoster = function(e) {
                        return t.setPoster(e)
                    }, this
                }
                return i(e, [{
                    key: "play",
                    value: function() {
                        this.media.play()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.media.pause()
                    }
                }, {
                    key: "load",
                    value: function() {
                        var e = this;
                        e.isLoaded || e.media.load(), e.isLoaded = !0
                    }
                }, {
                    key: "setCurrentTime",
                    value: function(e) {
                        this.media.setCurrentTime(e)
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.media.currentTime
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.media.getDuration()
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.media.setVolume(e)
                    }
                }, {
                    key: "getVolume",
                    value: function() {
                        return this.media.getVolume()
                    }
                }, {
                    key: "setMuted",
                    value: function(e) {
                        this.media.setMuted(e)
                    }
                }, {
                    key: "setSrc",
                    value: function(e) {
                        var t = this,
                            n = document.getElementById(t.media.id + "-iframe-overlay");
                        n && n.remove(), t.media.setSrc(e), t.createIframeLayer(), null !== t.media.renderer && "function" == typeof t.media.renderer.getPosterUrl && t.setPoster(t.media.renderer.getPosterUrl())
                    }
                }, {
                    key: "getSrc",
                    value: function() {
                        return this.media.getSrc()
                    }
                }, {
                    key: "canPlayType",
                    value: function(e) {
                        return this.media.canPlayType(e)
                    }
                }, {
                    key: "paused",
                    get: function() {
                        return this.media.paused
                    }
                }, {
                    key: "muted",
                    set: function(e) {
                        this.setMuted(e)
                    },
                    get: function() {
                        return this.media.muted
                    }
                }, {
                    key: "ended",
                    get: function() {
                        return this.media.ended
                    }
                }, {
                    key: "readyState",
                    get: function() {
                        return this.media.readyState
                    }
                }, {
                    key: "currentTime",
                    set: function(e) {
                        this.setCurrentTime(e)
                    },
                    get: function() {
                        return this.getCurrentTime()
                    }
                }, {
                    key: "duration",
                    get: function() {
                        return this.getDuration()
                    }
                }, {
                    key: "volume",
                    set: function(e) {
                        this.setVolume(e)
                    },
                    get: function() {
                        return this.getVolume()
                    }
                }, {
                    key: "src",
                    set: function(e) {
                        this.setSrc(e)
                    },
                    get: function() {
                        return this.getSrc()
                    }
                }]), e
            }();
        n.default = a, r.default.DefaultPlayer = a
    }, {
        3: 3
    }],
    18: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3)),
            r = o(e(7)),
            a = o(e(16));
        "undefined" != typeof jQuery ? r.default.$ = i.default.jQuery = i.default.$ = jQuery : "undefined" != typeof Zepto ? r.default.$ = i.default.Zepto = i.default.$ = Zepto : "undefined" != typeof ender && (r.default.$ = i.default.ender = i.default.$ = ender),
            function(e) {
                void 0 !== e && (e.fn.mediaelementplayer = function(t) {
                    return !1 === t ? this.each(function() {
                        var t = e(this).data("mediaelementplayer");
                        t && t.remove(), e(this).removeData("mediaelementplayer")
                    }) : this.each(function() {
                        e(this).data("mediaelementplayer", new a.default(this, t))
                    }), this
                }, e(document).ready(function() {
                    e("." + r.default.MepDefaults.classPrefix + "player").mediaelementplayer()
                }))
            }(r.default.$)
    }, {
        16: 16,
        3: 3,
        7: 7
    }],
    19: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = o(e(3)),
            a = o(e(7)),
            s = e(8),
            l = e(27),
            d = e(28),
            u = e(25),
            c = e(26),
            f = {
                promise: null,
                load: function(e) {
                    return "undefined" != typeof dashjs ? f.promise = new Promise(function(e) {
                        e()
                    }).then(function() {
                        f._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdn.dashjs.org/latest/dash.all.min.js", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function() {
                        f._createPlayer(e)
                    })), f.promise
                },
                _createPlayer: function(e) {
                    var t = dashjs.MediaPlayer().create();
                    return r.default["__ready__" + e.id](t), t
                }
            },
            p = {
                name: "native_dash",
                options: {
                    prefix: "native_dash",
                    dash: {
                        path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                        debug: !1,
                        drm: {},
                        robustnessLevel: ""
                    }
                },
                canPlayType: function(e) {
                    return u.HAS_MSE && ["application/dash+xml"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var o = e.originalNode,
                        d = e.id + "_" + t.prefix,
                        u = o.autoplay,
                        c = o.children,
                        p = null,
                        m = null;
                    o.removeAttribute("type");
                    for (var h = 0, v = c.length; h < v; h++) c[h].removeAttribute("type");
                    p = o.cloneNode(!0), t = Object.assign(t, e.options);
                    for (var y = a.default.html5media.properties, g = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), b = function(t) {
                            if ("error" !== t.type) {
                                var n = (0, l.createEvent)(t.type, e);
                                e.dispatchEvent(n)
                            }
                        }, E = 0, S = y.length; E < S; E++) ! function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        p["get" + n] = function() {
                            return null !== m ? p[e] : null
                        }, p["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    var o = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n;
                                    if (p[e] = o, null !== m) {
                                        m.reset();
                                        for (var r = 0, s = g.length; r < s; r++) p.removeEventListener(g[r], b);
                                        m = f._createPlayer({
                                            options: t.dash,
                                            id: d
                                        }), n && "object" === (void 0 === n ? "undefined" : i(n)) && "object" === i(n.drm) && (m.setProtectionData(n.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), m.attachSource(o), u && m.play()
                                    }
                                } else p[e] = n
                        }
                    }(y[E]);
                    if (r.default["__ready__" + d] = function(n) {
                            e.dashPlayer = m = n;
                            for (var o = dashjs.MediaPlayer.events, r = 0, s = g.length; r < s; r++) ! function(e) {
                                "loadedmetadata" === e && (m.getDebug().setLogToBrowserConsole(t.dash.debug), m.initialize(), m.setScheduleWhilePaused(!1), m.setFastSwitchEnabled(!0), m.attachView(p), m.setAutoPlay(!1), "object" !== i(t.dash.drm) || a.default.Utils.isObjectEmpty(t.dash.drm) || (m.setProtectionData(t.dash.drm), (0, l.isString)(t.dash.robustnessLevel) && t.dash.robustnessLevel && m.getProtectionController().setRobustnessLevel(t.dash.robustnessLevel)), m.attachSource(p.getSrc())), p.addEventListener(e, b)
                            }(g[r]);
                            var d = function(t, n) {
                                if ("error" === t.toLowerCase()) e.generateError(n.message, p.src), console.error(n);
                                else {
                                    var o = (0, l.createEvent)(t, e);
                                    o.data = n, e.dispatchEvent(o)
                                }
                            };
                            for (var u in o) o.hasOwnProperty(u) && m.on(o[u], function(e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                                return d(e.type, n)
                            })
                        }, n && n.length > 0)
                        for (var x = 0, w = n.length; x < w; x++)
                            if (s.renderer.renderers[t.prefix].canPlayType(n[x].type)) {
                                p.setAttribute("src", n[x].src), void 0 !== n[x].drm && (t.dash.drm = n[x].drm);
                                break
                            } p.setAttribute("id", d), o.parentNode.insertBefore(p, o), o.autoplay = !1, o.style.display = "none", p.setSize = function(e, t) {
                        return p.style.width = e + "px", p.style.height = t + "px", p
                    }, p.hide = function() {
                        return p.pause(), p.style.display = "none", p
                    }, p.show = function() {
                        return p.style.display = "", p
                    }, p.destroy = function() {
                        null !== m && m.reset()
                    };
                    var P = (0, l.createEvent)("rendererready", p);
                    return e.dispatchEvent(P), e.promises.push(f.load({
                        options: t.dash,
                        id: d
                    })), p
                }
            };
        d.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".mpd") ? "application/dash+xml" : null
        }), s.renderer.add(p)
    }, {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    20: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PluginDetector = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = o(e(3)),
            a = o(e(2)),
            s = o(e(7)),
            l = o(e(5)),
            d = e(8),
            u = e(27),
            c = e(25),
            f = e(28),
            p = n.PluginDetector = {
                plugins: [],
                hasPluginVersion: function(e, t) {
                    var n = p.plugins[e];
                    return t[1] = t[1] || 0, t[2] = t[2] || 0, n[0] > t[0] || n[0] === t[0] && n[1] > t[1] || n[0] === t[0] && n[1] === t[1] && n[2] >= t[2]
                },
                addPlugin: function(e, t, n, o, i) {
                    p.plugins[e] = p.detectPlugin(t, n, o, i)
                },
                detectPlugin: function(e, t, n, o) {
                    var a = [0, 0, 0],
                        s = void 0,
                        l = void 0;
                    if (null !== c.NAV.plugins && void 0 !== c.NAV.plugins && "object" === i(c.NAV.plugins[e])) {
                        if ((s = c.NAV.plugins[e].description) && (void 0 === c.NAV.mimeTypes || !c.NAV.mimeTypes[t] || c.NAV.mimeTypes[t].enabledPlugin))
                            for (var d = 0, u = (a = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".")).length; d < u; d++) a[d] = parseInt(a[d].match(/\d+/), 10)
                    } else if (void 0 !== r.default.ActiveXObject) try {
                        (l = new ActiveXObject(n)) && (a = o(l))
                    } catch (e) {}
                    return a
                }
            };
        p.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
            var t = [],
                n = e.GetVariable("$version");
            return n && (n = n.split(" ")[1].split(","), t = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]), t
        });
        var m = {
            create: function(e, t, n) {
                var o = {};
                o.options = t, o.id = e.id + "_" + o.options.prefix, o.mediaElement = e, o.flashState = {}, o.flashApi = null, o.flashApiStack = [];
                for (var i = s.default.html5media.properties, p = 0, m = i.length; p < m; p++) ! function(e) {
                    o.flashState[e] = null;
                    var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                    o["get" + t] = function() {
                        if (null !== o.flashApi) {
                            if ("function" == typeof o.flashApi["get_" + e]) {
                                var t = o.flashApi["get_" + e]();
                                return "buffered" === e ? {
                                    start: function() {
                                        return 0
                                    },
                                    end: function() {
                                        return t
                                    },
                                    length: 1
                                } : t
                            }
                            return null
                        }
                        return null
                    }, o["set" + t] = function(t) {
                        if ("src" === e && (t = (0, f.absolutizeUrl)(t)), null !== o.flashApi && void 0 !== o.flashApi["set_" + e]) try {
                            o.flashApi["set_" + e](t)
                        } catch (e) {} else o.flashApiStack.push({
                            type: "set",
                            propName: e,
                            value: t
                        })
                    }
                }(i[p]);
                var h = s.default.html5media.methods;
                h.push("stop");
                for (var v = 0, y = h.length; v < y; v++) ! function(e) {
                    o[e] = function() {
                        if (null !== o.flashApi) {
                            if (o.flashApi["fire_" + e]) try {
                                o.flashApi["fire_" + e]()
                            } catch (e) {}
                        } else o.flashApiStack.push({
                            type: "call",
                            methodName: e
                        })
                    }
                }(h[v]);
                for (var g = ["rendererready"], b = 0, E = g.length; b < E; b++) {
                    var S = (0, u.createEvent)(g[b], o);
                    e.dispatchEvent(S)
                }
                r.default["__ready__" + o.id] = function() {
                    if (o.flashReady = !0, o.flashApi = a.default.getElementById("__" + o.id), o.flashApiStack.length)
                        for (var e = 0, t = o.flashApiStack.length; e < t; e++) {
                            var n = o.flashApiStack[e];
                            if ("set" === n.type) {
                                var i = n.propName,
                                    r = "" + i.substring(0, 1).toUpperCase() + i.substring(1);
                                o["set" + r](n.value)
                            } else "call" === n.type && o[n.methodName]()
                        }
                }, r.default["__event__" + o.id] = function(e, t) {
                    var n = (0, u.createEvent)(e, o);
                    if (t) try {
                        n.data = JSON.parse(t), n.details.data = JSON.parse(t)
                    } catch (e) {
                        n.message = t
                    }
                    o.mediaElement.dispatchEvent(n)
                }, o.flashWrapper = a.default.createElement("div"), -1 === ["always", "sameDomain"].indexOf(o.options.shimScriptAccess) && (o.options.shimScriptAccess = "sameDomain");
                var x = e.originalNode.autoplay,
                    w = ["uid=" + o.id, "autoplay=" + x, "allowScriptAccess=" + o.options.shimScriptAccess, "preload=" + (e.originalNode.getAttribute("preload") || "")],
                    P = null !== e.originalNode && "video" === e.originalNode.tagName.toLowerCase(),
                    T = P ? e.originalNode.height : 1,
                    C = P ? e.originalNode.width : 1;
                e.originalNode.getAttribute("src") && w.push("src=" + e.originalNode.getAttribute("src")), !0 === o.options.enablePseudoStreaming && (w.push("pseudostreamstart=" + o.options.pseudoStreamingStartQueryParam), w.push("pseudostreamtype=" + o.options.pseudoStreamingType)), e.appendChild(o.flashWrapper), e.originalNode.style.display = "none";
                var k = [];
                if (c.IS_IE) {
                    var _ = a.default.createElement("div");
                    o.flashWrapper.appendChild(_), k = ['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"', 'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"', 'id="__' + o.id + '"', 'width="' + C + '"', 'height="' + T + '"'], P || k.push('style="clip: rect(0 0 0 0); position: absolute;"'), _.outerHTML = "<object " + k.join(" ") + '><param name="movie" value="' + o.options.pluginPath + o.options.filename + "?x=" + new Date + '" /><param name="flashvars" value="' + w.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + o.options.shimScriptAccess + '" /><param name="allowFullScreen" value="true" /><div>' + l.default.t("mejs.install-flash") + "</div></object>"
                } else k = ['id="__' + o.id + '"', 'name="__' + o.id + '"', 'play="true"', 'loop="false"', 'quality="high"', 'bgcolor="#000000"', 'wmode="transparent"', 'allowScriptAccess="' + o.options.shimScriptAccess + '"', 'allowFullScreen="true"', 'type="application/x-shockwave-flash"', 'pluginspage="//www.macromedia.com/go/getflashplayer"', 'src="' + o.options.pluginPath + o.options.filename + '"', 'flashvars="' + w.join("&") + '"', 'width="' + C + '"', 'height="' + T + '"'], P || k.push('style="clip: rect(0 0 0 0); position: absolute;"'), o.flashWrapper.innerHTML = "<embed " + k.join(" ") + ">";
                if (o.flashNode = o.flashWrapper.lastChild, o.hide = function() {
                        P && (o.flashNode.style.display = "none")
                    }, o.show = function() {
                        P && (o.flashNode.style.display = "")
                    }, o.setSize = function(e, t) {
                        o.flashNode.style.width = e + "px", o.flashNode.style.height = t + "px", null !== o.flashApi && "function" == typeof o.flashApi.fire_setSize && o.flashApi.fire_setSize(e, t)
                    }, o.destroy = function() {
                        o.flashNode.remove()
                    }, n && n.length > 0)
                    for (var N = 0, A = n.length; N < A; N++)
                        if (d.renderer.renderers[t.prefix].canPlayType(n[N].type)) {
                            o.setSrc(n[N].src);
                            break
                        } return o
            }
        };
        if (p.hasPluginVersion("flash", [10, 0, 0])) {
            f.typeChecks.push(function(e) {
                return (e = e.toLowerCase()).startsWith("rtmp") ? ~e.indexOf(".mp3") ? "audio/rtmp" : "video/rtmp" : /\.og(a|g)/i.test(e) ? "audio/ogg" : ~e.indexOf(".m3u8") ? "application/x-mpegURL" : ~e.indexOf(".mpd") ? "application/dash+xml" : ~e.indexOf(".flv") ? "video/flv" : null
            });
            var h = {
                name: "flash_video",
                options: {
                    prefix: "flash_video",
                    filename: "mediaelement-flash-video.swf",
                    enablePseudoStreaming: !1,
                    pseudoStreamingStartQueryParam: "start",
                    pseudoStreamingType: "byte"
                },
                canPlayType: function(e) {
                    return ~["video/mp4", "video/rtmp", "audio/rtmp", "rtmp/mp4", "audio/mp4", "video/flv", "video/x-flv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(h);
            var v = {
                name: "flash_hls",
                options: {
                    prefix: "flash_hls",
                    filename: "mediaelement-flash-video-hls.swf"
                },
                canPlayType: function(e) {
                    return ~["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(v);
            var y = {
                name: "flash_dash",
                options: {
                    prefix: "flash_dash",
                    filename: "mediaelement-flash-video-mdash.swf"
                },
                canPlayType: function(e) {
                    return ~["application/dash+xml"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(y);
            var g = {
                name: "flash_audio",
                options: {
                    prefix: "flash_audio",
                    filename: "mediaelement-flash-audio.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/mp3"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(g);
            var b = {
                name: "flash_audio_ogg",
                options: {
                    prefix: "flash_audio_ogg",
                    filename: "mediaelement-flash-audio-ogg.swf"
                },
                canPlayType: function(e) {
                    return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(e.toLowerCase())
                },
                create: m.create
            };
            d.renderer.add(b)
        }
    }, {
        2: 2,
        25: 25,
        27: 27,
        28: 28,
        3: 3,
        5: 5,
        7: 7,
        8: 8
    }],
    21: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = o(e(3)),
            a = o(e(7)),
            s = e(8),
            l = e(27),
            d = e(25),
            u = e(28),
            c = e(26),
            f = {
                promise: null,
                load: function(e) {
                    return "undefined" != typeof flvjs ? f.promise = new Promise(function(e) {
                        e()
                    }).then(function() {
                        f._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.2/flv.min.js", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function() {
                        f._createPlayer(e)
                    })), f.promise
                },
                _createPlayer: function(e) {
                    flvjs.LoggingControl.enableDebug = e.options.debug, flvjs.LoggingControl.enableVerbose = e.options.debug;
                    var t = flvjs.createPlayer(e.options);
                    return r.default["__ready__" + e.id](t), t
                }
            },
            p = {
                name: "native_flv",
                options: {
                    prefix: "native_flv",
                    flv: {
                        path: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.2/flv.min.js",
                        cors: !0,
                        debug: !1
                    }
                },
                canPlayType: function(e) {
                    return d.HAS_MSE && ["video/x-flv", "video/flv"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var o = e.originalNode,
                        d = e.id + "_" + t.prefix,
                        u = null,
                        c = null;
                    u = o.cloneNode(!0), t = Object.assign(t, e.options);
                    for (var p = a.default.html5media.properties, m = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), h = function(t) {
                            if ("error" !== t.type) {
                                var n = (0, l.createEvent)(t.type, e);
                                e.dispatchEvent(n)
                            }
                        }, v = 0, y = p.length; v < y; v++) ! function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        u["get" + n] = function() {
                            return null !== c ? u[e] : null
                        }, u["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    if (u[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n, null !== c) {
                                        var o = {};
                                        o.type = "flv", o.url = n, o.cors = t.flv.cors, o.debug = t.flv.debug, o.path = t.flv.path, c.destroy();
                                        for (var r = 0, s = m.length; r < s; r++) u.removeEventListener(m[r], h);
                                        (c = f._createPlayer({
                                            options: o,
                                            id: d
                                        })).attachMediaElement(u), c.load()
                                    }
                                } else u[e] = n
                        }
                    }(p[v]);
                    if (r.default["__ready__" + d] = function(t) {
                            e.flvPlayer = c = t;
                            for (var n = flvjs.Events, o = 0, i = m.length; o < i; o++) ! function(e) {
                                "loadedmetadata" === e && (c.unload(), c.detachMediaElement(), c.attachMediaElement(u), c.load()), u.addEventListener(e, h)
                            }(m[o]);
                            var r = function(t, n) {
                                if ("error" === t) {
                                    var o = n[0] + ": " + n[1] + " " + n[2].msg;
                                    e.generateError(o, u.src)
                                } else {
                                    var i = (0, l.createEvent)(t, e);
                                    i.data = n, e.dispatchEvent(i)
                                }
                            };
                            for (var a in n) ! function(e) {
                                n.hasOwnProperty(e) && c.on(n[e], function() {
                                    for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                                    return r(n[e], o)
                                })
                            }(a)
                        }, n && n.length > 0)
                        for (var g = 0, b = n.length; g < b; g++)
                            if (s.renderer.renderers[t.prefix].canPlayType(n[g].type)) {
                                u.setAttribute("src", n[g].src);
                                break
                            } u.setAttribute("id", d), o.parentNode.insertBefore(u, o), o.autoplay = !1, o.style.display = "none";
                    var E = {};
                    E.type = "flv", E.url = u.src, E.cors = t.flv.cors, E.debug = t.flv.debug, E.path = t.flv.path, u.setSize = function(e, t) {
                        return u.style.width = e + "px", u.style.height = t + "px", u
                    }, u.hide = function() {
                        return null !== c && c.pause(), u.style.display = "none", u
                    }, u.show = function() {
                        return u.style.display = "", u
                    }, u.destroy = function() {
                        null !== c && c.destroy()
                    };
                    var S = (0, l.createEvent)("rendererready", u);
                    return e.dispatchEvent(S), e.promises.push(f.load({
                        options: E,
                        id: d
                    })), u
                }
            };
        u.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".flv") ? "video/flv" : null
        }), s.renderer.add(p)
    }, {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    22: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = o(e(3)),
            a = o(e(7)),
            s = e(8),
            l = e(27),
            d = e(25),
            u = e(28),
            c = e(26),
            f = {
                promise: null,
                load: function(e) {
                    return "undefined" != typeof Hls ? f.promise = new Promise(function(e) {
                        e()
                    }).then(function() {
                        f._createPlayer(e)
                    }) : (e.options.path = "string" == typeof e.options.path ? e.options.path : "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.7.11/hls.min.js", f.promise = f.promise || (0, c.loadScript)(e.options.path), f.promise.then(function() {
                        f._createPlayer(e)
                    })), f.promise
                },
                _createPlayer: function(e) {
                    var t = new Hls(e.options);
                    return r.default["__ready__" + e.id](t), t
                }
            },
            p = {
                name: "native_hls",
                options: {
                    prefix: "native_hls",
                    hls: {
                        path: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.7.11/hls.min.js",
                        autoStartLoad: !1,
                        debug: !1
                    }
                },
                canPlayType: function(e) {
                    return d.HAS_MSE && ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) > -1
                },
                create: function(e, t, n) {
                    var o = e.originalNode,
                        d = e.id + "_" + t.prefix,
                        u = o.getAttribute("preload"),
                        c = o.autoplay,
                        p = null,
                        m = null;
                    m = o.cloneNode(!0), (t = Object.assign(t, e.options)).hls.autoStartLoad = u && "none" !== u || c;
                    for (var h = a.default.html5media.properties, v = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), y = function(t) {
                            if ("error" !== t.type) {
                                var n = (0, l.createEvent)(t.type, e);
                                e.dispatchEvent(n)
                            }
                        }, g = 0, b = h.length; g < b; g++) ! function(e) {
                        var n = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        m["get" + n] = function() {
                            return null !== p ? m[e] : null
                        }, m["set" + n] = function(n) {
                            if (-1 === a.default.html5media.readOnlyProperties.indexOf(e))
                                if ("src" === e) {
                                    if (m[e] = "object" === (void 0 === n ? "undefined" : i(n)) && n.src ? n.src : n, null !== p) {
                                        p.destroy();
                                        for (var o = 0, r = v.length; o < r; o++) m.removeEventListener(v[o], y);
                                        (p = f._createPlayer({
                                            options: t.hls,
                                            id: d
                                        })).loadSource(n), p.attachMedia(m)
                                    }
                                } else m[e] = n
                        }
                    }(h[g]);
                    if (r.default["__ready__" + d] = function(t) {
                            e.hlsPlayer = p = t;
                            for (var n = Hls.Events, o = 0, i = v.length; o < i; o++) ! function(t) {
                                if ("loadedmetadata" === t) {
                                    var n = e.originalNode.src;
                                    p.detachMedia(), p.loadSource(n), p.attachMedia(m)
                                }
                                m.addEventListener(t, y)
                            }(v[o]);
                            var r = void 0,
                                a = void 0,
                                s = function(t, n) {
                                    if ("hlsError" === t) {
                                        if (console.warn(t, n), n.fatal) switch (n.type) {
                                            case "mediaError":
                                                var o = (new Date).getTime();
                                                if (!r || o - r > 3e3) r = (new Date).getTime(), p.recoverMediaError();
                                                else if (!a || o - a > 3e3) a = (new Date).getTime(), console.warn("Attempting to swap Audio Codec and recover from media error"), p.swapAudioCodec(), p.recoverMediaError();
                                                else {
                                                    var i = "Cannot recover, last media error recovery failed";
                                                    e.generateError(i, m.src), console.error(i)
                                                }
                                                break;
                                            case "networkError":
                                                e.generateError("Network error", m.src), console.error("Network error");
                                                break;
                                            default:
                                                p.destroy()
                                        }
                                    } else {
                                        var s = (0, l.createEvent)(t, e);
                                        s.data = n, e.dispatchEvent(s)
                                    }
                                };
                            for (var d in n) ! function(e) {
                                n.hasOwnProperty(e) && p.on(n[e], function() {
                                    for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
                                    return s(n[e], o)
                                })
                            }(d)
                        }, n && n.length > 0)
                        for (var E = 0, S = n.length; E < S; E++)
                            if (s.renderer.renderers[t.prefix].canPlayType(n[E].type)) {
                                m.setAttribute("src", n[E].src);
                                break
                            }
                    "auto" === u || c || (m.addEventListener("play", function() {
                        null !== p && p.startLoad()
                    }), m.addEventListener("pause", function() {
                        null !== p && p.stopLoad()
                    })), m.setAttribute("id", d), o.parentNode.insertBefore(m, o), o.autoplay = !1, o.style.display = "none", m.setSize = function(e, t) {
                        return m.style.width = e + "px", m.style.height = t + "px", m
                    }, m.hide = function() {
                        return m.pause(), m.style.display = "none", m
                    }, m.show = function() {
                        return m.style.display = "", m
                    }, m.destroy = function() {
                        null !== p && (p.stopLoad(), p.destroy())
                    };
                    var x = (0, l.createEvent)("rendererready", m);
                    return e.dispatchEvent(x), e.promises.push(f.load({
                        options: t.hls,
                        id: d
                    })), m
                }
            };
        u.typeChecks.push(function(e) {
            return ~e.toLowerCase().indexOf(".m3u8") ? "application/x-mpegURL" : null
        }), s.renderer.add(p)
    }, {
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    23: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3)),
            r = o(e(2)),
            a = o(e(7)),
            s = e(8),
            l = e(27),
            d = e(25),
            u = {
                name: "html5",
                options: {
                    prefix: "html5"
                },
                canPlayType: function(e) {
                    var t = r.default.createElement("video");
                    return d.IS_ANDROID && /\/mp(3|4)$/i.test(e) || ~["application/x-mpegurl", "vnd.apple.mpegurl", "audio/mpegurl", "audio/hls", "video/hls"].indexOf(e.toLowerCase()) && d.SUPPORTS_NATIVE_HLS ? "yes" : t.canPlayType ? t.canPlayType(e.toLowerCase()).replace(/no/, "") : ""
                },
                create: function(e, t, n) {
                    var o = e.id + "_" + t.prefix,
                        i = null;
                    void 0 === e.originalNode || null === e.originalNode ? (i = r.default.createElement("audio"), e.appendChild(i)) : i = e.originalNode, i.setAttribute("id", o);
                    for (var d = a.default.html5media.properties, u = 0, c = d.length; u < c; u++) ! function(e) {
                        var t = "" + e.substring(0, 1).toUpperCase() + e.substring(1);
                        i["get" + t] = function() {
                            return i[e]
                        }, i["set" + t] = function(t) {
                            -1 === a.default.html5media.readOnlyProperties.indexOf(e) && (i[e] = t)
                        }
                    }(d[u]);
                    for (var f = a.default.html5media.events.concat(["click", "mouseover", "mouseout"]), p = 0, m = f.length; p < m; p++) ! function(t) {
                        i.addEventListener(t, function(t) {
                            var n = (0, l.createEvent)(t.type, e);
                            e.dispatchEvent(n)
                        })
                    }(f[p]);
                    if (i.setSize = function(e, t) {
                            return i.style.width = e + "px", i.style.height = t + "px", i
                        }, i.hide = function() {
                            return i.style.display = "none", i
                        }, i.show = function() {
                            return i.style.display = "", i
                        }, n && n.length > 0)
                        for (var h = 0, v = n.length; h < v; h++)
                            if (s.renderer.renderers[t.prefix].canPlayType(n[h].type)) {
                                i.setAttribute("src", n[h].src);
                                break
                            } var y = (0, l.createEvent)("rendererready", i);
                    return e.dispatchEvent(y), i
                }
            };
        i.default.HtmlMediaElement = a.default.HtmlMediaElement = u, s.renderer.add(u)
    }, {
        2: 2,
        25: 25,
        27: 27,
        3: 3,
        7: 7,
        8: 8
    }],
    24: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(3)),
            r = o(e(2)),
            a = o(e(7)),
            s = e(8),
            l = e(27),
            d = e(28),
            u = e(26),
            c = {
                isIframeStarted: !1,
                isIframeLoaded: !1,
                iframeQueue: [],
                enqueueIframe: function(e) {
                    c.isLoaded = "undefined" != typeof YT && YT.loaded, c.isLoaded ? c.createIframe(e) : (c.loadIframeApi(), c.iframeQueue.push(e))
                },
                loadIframeApi: function() {
                    c.isIframeStarted || ((0, u.loadScript)("https://www.youtube.com/player_api"), c.isIframeStarted = !0)
                },
                iFrameReady: function() {
                    for (c.isLoaded = !0, c.isIframeLoaded = !0; c.iframeQueue.length > 0;) {
                        var e = c.iframeQueue.pop();
                        c.createIframe(e)
                    }
                },
                createIframe: function(e) {
                    return new YT.Player(e.containerId, e)
                },
                getYouTubeId: function(e) {
                    var t = "";
                    return e.indexOf("?") > 0 ? "" === (t = c.getYouTubeIdFromParam(e)) && (t = c.getYouTubeIdFromUrl(e)) : t = c.getYouTubeIdFromUrl(e), (t = t.substring(t.lastIndexOf("/") + 1).split("?"))[0]
                },
                getYouTubeIdFromParam: function(e) {
                    if (void 0 === e || null === e || !e.trim().length) return null;
                    for (var t = e.split("?")[1].split("&"), n = "", o = 0, i = t.length; o < i; o++) {
                        var r = t[o].split("=");
                        if ("v" === r[0]) {
                            n = r[1];
                            break
                        }
                    }
                    return n
                },
                getYouTubeIdFromUrl: function(e) {
                    return void 0 !== e && null !== e && e.trim().length ? (e = e.split("?")[0]).substring(e.lastIndexOf("/") + 1) : null
                },
                getYouTubeNoCookieUrl: function(e) {
                    if (void 0 === e || null === e || !e.trim().length || -1 === e.indexOf("//www.youtube")) return e;
                    var t = e.split("/");
                    return t[2] = t[2].replace(".com", "-nocookie.com"), t.join("/")
                }
            },
            f = {
                name: "youtube_iframe",
                options: {
                    prefix: "youtube_iframe",
                    youtube: {
                        autoplay: 0,
                        controls: 0,
                        disablekb: 1,
                        end: 0,
                        loop: 0,
                        modestbranding: 0,
                        playsinline: 0,
                        rel: 0,
                        showinfo: 0,
                        start: 0,
                        iv_load_policy: 3,
                        nocookie: !1,
                        imageQuality: null
                    }
                },
                canPlayType: function(e) {
                    return ~["video/youtube", "video/x-youtube"].indexOf(e.toLowerCase())
                },
                create: function(e, t, n) {
                    var o = {},
                        s = [],
                        d = null,
                        u = !0,
                        f = !1,
                        p = null,
                        m = 1;
                    o.options = t, o.id = e.id + "_" + t.prefix, o.mediaElement = e;
                    for (var h = a.default.html5media.properties, v = 0, y = h.length; v < y; v++) ! function(t) {
                        var n = "" + t.substring(0, 1).toUpperCase() + t.substring(1);
                        o["get" + n] = function() {
                            if (null !== d) {
                                switch (t) {
                                    case "currentTime":
                                        return d.getCurrentTime();
                                    case "duration":
                                        return d.getDuration();
                                    case "volume":
                                        return m = d.getVolume() / 100;
                                    case "paused":
                                        return u;
                                    case "ended":
                                        return f;
                                    case "muted":
                                        return d.isMuted();
                                    case "buffered":
                                        var e = d.getVideoLoadedFraction(),
                                            n = d.getDuration();
                                        return {
                                            start: function() {
                                                return 0
                                            },
                                            end: function() {
                                                return e * n
                                            },
                                            length: 1
                                        };
                                    case "src":
                                        return d.getVideoUrl();
                                    case "readyState":
                                        return 4
                                }
                                return null
                            }
                            return null
                        }, o["set" + n] = function(n) {
                            if (null !== d) switch (t) {
                                case "src":
                                    var i = "string" == typeof n ? n : n[0].src,
                                        r = c.getYouTubeId(i);
                                    e.originalNode.autoplay ? d.loadVideoById(r) : d.cueVideoById(r);
                                    break;
                                case "currentTime":
                                    d.seekTo(n);
                                    break;
                                case "muted":
                                    n ? d.mute() : d.unMute(), setTimeout(function() {
                                        var t = (0, l.createEvent)("volumechange", o);
                                        e.dispatchEvent(t)
                                    }, 50);
                                    break;
                                case "volume":
                                    m = n, d.setVolume(100 * n), setTimeout(function() {
                                        var t = (0, l.createEvent)("volumechange", o);
                                        e.dispatchEvent(t)
                                    }, 50);
                                    break;
                                case "readyState":
                                    var a = (0, l.createEvent)("canplay", o);
                                    e.dispatchEvent(a)
                            } else s.push({
                                type: "set",
                                propName: t,
                                value: n
                            })
                        }
                    }(h[v]);
                    for (var g = a.default.html5media.methods, b = 0, E = g.length; b < E; b++) ! function(e) {
                        o[e] = function() {
                            if (null !== d) switch (e) {
                                case "play":
                                    return u = !1, d.playVideo();
                                case "pause":
                                    return u = !0, d.pauseVideo();
                                case "load":
                                    return null
                            } else s.push({
                                type: "call",
                                methodName: e
                            })
                        }
                    }(g[b]);
                    var S = r.default.createElement("div");
                    S.id = o.id, o.options.youtube.nocookie && (e.originalNode.src = c.getYouTubeNoCookieUrl(n[0].src)), e.originalNode.parentNode.insertBefore(S, e.originalNode), e.originalNode.style.display = "none";
                    var x = "audio" === e.originalNode.tagName.toLowerCase(),
                        w = x ? "1" : e.originalNode.height,
                        P = x ? "1" : e.originalNode.width,
                        T = c.getYouTubeId(n[0].src),
                        C = {
                            id: o.id,
                            containerId: S.id,
                            videoId: T,
                            height: w,
                            width: P,
                            playerVars: Object.assign({
                                controls: 0,
                                rel: 0,
                                disablekb: 1,
                                showinfo: 0,
                                modestbranding: 0,
                                html5: 1,
                                playsinline: 0,
                                start: 0,
                                end: 0,
                                iv_load_policy: 3
                            }, o.options.youtube),
                            origin: i.default.location.host,
                            events: {
                                onReady: function(t) {
                                    if (e.youTubeApi = d = t.target, e.youTubeState = {
                                            paused: !0,
                                            ended: !1
                                        }, s.length)
                                        for (var n = 0, i = s.length; n < i; n++) {
                                            var r = s[n];
                                            if ("set" === r.type) {
                                                var a = r.propName,
                                                    u = "" + a.substring(0, 1).toUpperCase() + a.substring(1);
                                                o["set" + u](r.value)
                                            } else "call" === r.type && o[r.methodName]()
                                        }
                                    p = d.getIframe(), e.originalNode.getAttribute("muted") && d.mute();
                                    for (var c = ["mouseover", "mouseout"], f = 0, m = c.length; f < m; f++) p.addEventListener(c[f], function(t) {
                                        var n = (0, l.createEvent)(t.type, o);
                                        e.dispatchEvent(n)
                                    }, !1);
                                    for (var h = ["rendererready", "loadedmetadata", "loadeddata", "canplay"], v = 0, y = h.length; v < y; v++) {
                                        var g = (0, l.createEvent)(h[v], o);
                                        e.dispatchEvent(g)
                                    }
                                },
                                onStateChange: function(t) {
                                    var n = [];
                                    switch (t.data) {
                                        case -1:
                                            n = ["loadedmetadata"], u = !0, f = !1;
                                            break;
                                        case 0:
                                            n = ["ended"], u = !1, f = !o.options.youtube.loop, o.options.youtube.loop || o.stopInterval();
                                            break;
                                        case 1:
                                            n = ["play", "playing"], u = !1, f = !1, o.startInterval();
                                            break;
                                        case 2:
                                            n = ["pause"], u = !0, f = !1, o.stopInterval();
                                            break;
                                        case 3:
                                            n = ["progress"], f = !1;
                                            break;
                                        case 5:
                                            n = ["loadeddata", "loadedmetadata", "canplay"], u = !0, f = !1
                                    }
                                    for (var i = 0, r = n.length; i < r; i++) {
                                        var a = (0, l.createEvent)(n[i], o);
                                        e.dispatchEvent(a)
                                    }
                                },
                                onError: function(t) {
                                    var n = (0, l.createEvent)("error", o);
                                    n.data = t.data, e.dispatchEvent(n)
                                }
                            }
                        };
                    return x && (C.playerVars.playsinline = 1), e.originalNode.autoplay && (C.playerVars.autoplay = 1), e.originalNode.loop && (C.playerVars.loop = 1), c.enqueueIframe(C), o.onEvent = function(t, n, o) {
                        null !== o && void 0 !== o && (e.youTubeState = o)
                    }, o.setSize = function(e, t) {
                        null !== d && d.setSize(e, t)
                    }, o.hide = function() {
                        o.stopInterval(), o.pause(), p && (p.style.display = "none")
                    }, o.show = function() {
                        p && (p.style.display = "")
                    }, o.destroy = function() {
                        d.destroy()
                    }, o.interval = null, o.startInterval = function() {
                        o.interval = setInterval(function() {
                            var t = (0, l.createEvent)("timeupdate", o);
                            e.dispatchEvent(t)
                        }, 250)
                    }, o.stopInterval = function() {
                        o.interval && clearInterval(o.interval)
                    }, o.getPosterUrl = function() {
                        var n = t.youtube.imageQuality,
                            o = ["default", "hqdefault", "mqdefault", "sddefault", "maxresdefault"],
                            i = c.getYouTubeId(e.originalNode.src);
                        return n && o.indexOf(n) > -1 && i ? "https://img.youtube.com/vi/" + i + "/" + n + ".jpg" : ""
                    }, o
                }
            };
        i.default.onYouTubePlayerAPIReady = function() {
            c.iFrameReady()
        }, d.typeChecks.push(function(e) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(e) ? "video/x-youtube" : null
        }), s.renderer.add(f)
    }, {
        2: 2,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        7: 7,
        8: 8
    }],
    25: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.cancelFullScreen = n.requestFullScreen = n.isFullScreen = n.FULLSCREEN_EVENT_NAME = n.HAS_NATIVE_FULLSCREEN_ENABLED = n.HAS_TRUE_NATIVE_FULLSCREEN = n.HAS_IOS_FULLSCREEN = n.HAS_MS_NATIVE_FULLSCREEN = n.HAS_MOZ_NATIVE_FULLSCREEN = n.HAS_WEBKIT_NATIVE_FULLSCREEN = n.HAS_NATIVE_FULLSCREEN = n.SUPPORTS_NATIVE_HLS = n.SUPPORT_POINTER_EVENTS = n.HAS_MSE = n.IS_STOCK_ANDROID = n.IS_SAFARI = n.IS_FIREFOX = n.IS_CHROME = n.IS_EDGE = n.IS_IE = n.IS_ANDROID = n.IS_IOS = n.IS_IPOD = n.IS_IPHONE = n.IS_IPAD = n.UA = n.NAV = void 0;
        for (var i = o(e(3)), r = o(e(2)), a = o(e(7)), s = n.NAV = i.default.navigator, l = n.UA = s.userAgent.toLowerCase(), d = n.IS_IPAD = /ipad/i.test(l) && !i.default.MSStream, u = n.IS_IPHONE = /iphone/i.test(l) && !i.default.MSStream, c = n.IS_IPOD = /ipod/i.test(l) && !i.default.MSStream, f = (n.IS_IOS = /ipad|iphone|ipod/i.test(l) && !i.default.MSStream, n.IS_ANDROID = /android/i.test(l)), p = n.IS_IE = /(trident|microsoft)/i.test(s.appName), m = (n.IS_EDGE = "msLaunchUri" in s && !("documentMode" in r.default)), h = n.IS_CHROME = /chrome/i.test(l), v = n.IS_FIREFOX = /firefox/i.test(l), y = n.IS_SAFARI = /safari/i.test(l) && !h, g = n.IS_STOCK_ANDROID = /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(l), b = (n.HAS_MSE = "MediaSource" in i.default), E = (n.SUPPORT_POINTER_EVENTS = function() {
                var e = r.default.createElement("x"),
                    t = r.default.documentElement,
                    n = i.default.getComputedStyle;
                if (!("pointerEvents" in e.style)) return !1;
                e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e);
                var o = n && "auto" === n(e, "").pointerEvents;
                return e.remove(), !!o
            }()), S = ["source", "track", "audio", "video"], x = void 0, w = 0, P = S.length; w < P; w++) x = r.default.createElement(S[w]);
        var T = n.SUPPORTS_NATIVE_HLS = y || f && (h || g) || p && /edge/i.test(l),
            C = void 0 !== x.webkitEnterFullscreen,
            k = void 0 !== x.requestFullscreen;
        C && /mac os x 10_5/i.test(l) && (k = !1, C = !1);
        var _ = void 0 !== x.webkitRequestFullScreen,
            N = void 0 !== x.mozRequestFullScreen,
            A = void 0 !== x.msRequestFullscreen,
            L = _ || N || A,
            F = L,
            j = "",
            I = void 0,
            M = void 0,
            O = void 0;
        N ? F = r.default.mozFullScreenEnabled : A && (F = r.default.msFullscreenEnabled), h && (C = !1), L && (_ ? j = "webkitfullscreenchange" : N ? j = "mozfullscreenchange" : A && (j = "MSFullscreenChange"), n.isFullScreen = I = function() {
            return N ? r.default.mozFullScreen : _ ? r.default.webkitIsFullScreen : A ? null !== r.default.msFullscreenElement : void 0
        }, n.requestFullScreen = M = function(e) {
            _ ? e.webkitRequestFullScreen() : N ? e.mozRequestFullScreen() : A && e.msRequestFullscreen()
        }, n.cancelFullScreen = O = function() {
            _ ? r.default.webkitCancelFullScreen() : N ? r.default.mozCancelFullScreen() : A && r.default.msExitFullscreen()
        });
        var D = n.HAS_NATIVE_FULLSCREEN = k,
            H = n.HAS_WEBKIT_NATIVE_FULLSCREEN = _,
            R = n.HAS_MOZ_NATIVE_FULLSCREEN = N,
            V = n.HAS_MS_NATIVE_FULLSCREEN = A,
            q = n.HAS_IOS_FULLSCREEN = C,
            U = n.HAS_TRUE_NATIVE_FULLSCREEN = L,
            B = n.HAS_NATIVE_FULLSCREEN_ENABLED = F,
            z = n.FULLSCREEN_EVENT_NAME = j;
        n.isFullScreen = I, n.requestFullScreen = M, n.cancelFullScreen = O, a.default.Features = a.default.Features || {}, a.default.Features.isiPad = d, a.default.Features.isiPod = c, a.default.Features.isiPhone = u, a.default.Features.isiOS = a.default.Features.isiPhone || a.default.Features.isiPad, a.default.Features.isAndroid = f, a.default.Features.isIE = p, a.default.Features.isEdge = m, a.default.Features.isChrome = h, a.default.Features.isFirefox = v, a.default.Features.isSafari = y, a.default.Features.isStockAndroid = g, a.default.Features.hasMSE = b, a.default.Features.supportsNativeHLS = T, a.default.Features.supportsPointerEvents = E, a.default.Features.hasiOSFullScreen = q, a.default.Features.hasNativeFullscreen = D, a.default.Features.hasWebkitNativeFullScreen = H, a.default.Features.hasMozNativeFullScreen = R, a.default.Features.hasMsNativeFullScreen = V, a.default.Features.hasTrueNativeFullScreen = U, a.default.Features.nativeFullScreenEnabled = B, a.default.Features.fullScreenEventName = z, a.default.Features.isFullScreen = I, a.default.Features.requestFullScreen = M, a.default.Features.cancelFullScreen = O
    }, {
        2: 2,
        3: 3,
        7: 7
    }],
    26: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return new Promise(function(t, n) {
                var o = p.default.createElement("script");
                o.src = e, o.async = !0, o.onload = function() {
                    o.remove(), t()
                }, o.onerror = function() {
                    o.remove(), n()
                }, p.default.head.appendChild(o)
            })
        }

        function r(e) {
            var t = e.getBoundingClientRect(),
                n = f.default.pageXOffset || p.default.documentElement.scrollLeft,
                o = f.default.pageYOffset || p.default.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }

        function a(e, t) {
            g(e, t) ? E(e, t) : b(e, t)
        }

        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                n = arguments[2];
            e.style.opacity || (e.style.opacity = 1);
            var o = null;
            f.default.requestAnimationFrame(function i(r) {
                var a = r - (o = o || r),
                    s = parseFloat(1 - a / t, 2);
                e.style.opacity = s < 0 ? 0 : s, a > t ? n && "function" == typeof n && n() : f.default.requestAnimationFrame(i)
            })
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400,
                n = arguments[2];
            e.style.opacity || (e.style.opacity = 0);
            var o = null;
            f.default.requestAnimationFrame(function i(r) {
                var a = r - (o = o || r),
                    s = parseFloat(a / t, 2);
                e.style.opacity = s > 1 ? 1 : s, a > t ? n && "function" == typeof n && n() : f.default.requestAnimationFrame(i)
            })
        }

        function d(e, t) {
            var n = [];
            e = e.parentNode.firstChild;
            do {
                t && !t(e) || n.push(e)
            } while (e = e.nextSibling);
            return n
        }

        function u(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }

        function c(e, t, n, o) {
            var i = f.default.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                r = "application/x-www-form-urlencoded; charset=UTF-8",
                a = !1,
                s = "*/".concat("*");
            switch (t) {
                case "text":
                    r = "text/plain";
                    break;
                case "json":
                    r = "application/json, text/javascript";
                    break;
                case "html":
                    r = "text/html";
                    break;
                case "xml":
                    r = "application/xml, text/xml"
            }
            "application/x-www-form-urlencoded" !== r && (s = r + ", */*; q=0.01"), i && (i.open("GET", e, !0), i.setRequestHeader("Accept", s), i.onreadystatechange = function() {
                if (!a && 4 === i.readyState)
                    if (200 === i.status) {
                        a = !0;
                        var e = void 0;
                        switch (t) {
                            case "json":
                                e = JSON.parse(i.responseText);
                                break;
                            case "xml":
                                e = i.responseXML;
                                break;
                            default:
                                e = i.responseText
                        }
                        n(e)
                    } else "function" == typeof o && o(i.status)
            }, i.send())
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.removeClass = n.addClass = n.hasClass = void 0, n.loadScript = i, n.offset = r, n.toggleClass = a, n.fadeOut = s, n.fadeIn = l, n.siblings = d, n.visible = u, n.ajax = c;
        var f = o(e(3)),
            p = o(e(2)),
            m = o(e(7)),
            h = void 0,
            v = void 0,
            y = void 0;
        "classList" in p.default.documentElement ? (h = function(e, t) {
            return void 0 !== e.classList && e.classList.contains(t)
        }, v = function(e, t) {
            return e.classList.add(t)
        }, y = function(e, t) {
            return e.classList.remove(t)
        }) : (h = function(e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }, v = function(e, t) {
            g(e, t) || (e.className += " " + t)
        }, y = function(e, t) {
            e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), "")
        });
        var g = n.hasClass = h,
            b = n.addClass = v,
            E = n.removeClass = y;
        m.default.Utils = m.default.Utils || {}, m.default.Utils.offset = r, m.default.Utils.hasClass = g, m.default.Utils.addClass = b, m.default.Utils.removeClass = E, m.default.Utils.toggleClass = a, m.default.Utils.fadeIn = l, m.default.Utils.fadeOut = s, m.default.Utils.siblings = d, m.default.Utils.visible = u, m.default.Utils.ajax = c, m.default.Utils.loadScript = i
    }, {
        2: 2,
        3: 3,
        7: 7
    }],
    27: [function(e, t, n) {
        "use strict";

        function o(e) {
            if ("string" != typeof e) throw new Error("Argument passed must be a string");
            var t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;"
            };
            return e.replace(/[&<>"]/g, function(e) {
                return t[e]
            })
        }

        function i(e, t) {
            var n = this,
                o = arguments,
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if ("function" != typeof e) throw new Error("First argument must be a function");
            if ("number" != typeof t) throw new Error("Second argument must be a numeric value");
            var r = void 0;
            return function() {
                var a = n,
                    s = o,
                    l = i && !r;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, i || e.apply(a, s)
                }, t), l && e.apply(a, s)
            }
        }

        function r(e) {
            return Object.getOwnPropertyNames(e).length <= 0
        }

        function a(e, t) {
            var n = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
                o = {
                    d: [],
                    w: []
                };
            return (e || "").split(" ").forEach(function(e) {
                var i = e + (t ? "." + t : "");
                i.startsWith(".") ? (o.d.push(i), o.w.push(i)) : o[n.test(e) ? "w" : "d"].push(i)
            }), o.d = o.d.join(" "), o.w = o.w.join(" "), o
        }

        function s(e, t) {
            if ("string" != typeof e) throw new Error("Event name must be a string");
            var n = e.match(/([a-z]+\.([a-z]+))/i),
                o = {
                    target: t
                };
            return null !== n && (e = n[1], o.namespace = n[2]), new window.CustomEvent(e, {
                detail: o
            })
        }

        function l(e, t) {
            return !!(e && t && 2 & e.compareDocumentPosition(t))
        }

        function d(e) {
            return "string" == typeof e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.escapeHTML = o, n.debounce = i, n.isObjectEmpty = r, n.splitEvents = a, n.createEvent = s, n.isNodeAfter = l, n.isString = d;
        var u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7));
        u.default.Utils = u.default.Utils || {}, u.default.Utils.escapeHTML = o, u.default.Utils.debounce = i, u.default.Utils.isObjectEmpty = r, u.default.Utils.splitEvents = a, u.default.Utils.createEvent = s, u.default.Utils.isNodeAfter = l, u.default.Utils.isString = d
    }, {
        7: 7
    }],
    28: [function(e, t, n) {
        "use strict";

        function o(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + (0, u.escapeHTML)(e) + '">x</a>', t.firstChild.href
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return e && !t ? a(e) : t
        }

        function r(e) {
            if ("string" != typeof e) throw new Error("`type` argument must be a string");
            return e && e.indexOf(";") > -1 ? e.substr(0, e.indexOf(";")) : e
        }

        function a(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            for (var t = 0, n = c.length; t < n; t++) {
                var o = c[t](e);
                if (o) return o
            }
            var i = l(s(e)),
                r = "video/mp4";
            return i && (~["mp4", "m4v", "ogg", "ogv", "webm", "flv", "mpeg", "mov"].indexOf(i) ? r = "video/" + i : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(i) && (r = "audio/" + i)), r
        }

        function s(e) {
            if ("string" != typeof e) throw new Error("`url` argument must be a string");
            var t = e.split("?")[0].split("\\").pop().split("/").pop();
            return ~t.indexOf(".") ? t.substring(t.lastIndexOf(".") + 1) : ""
        }

        function l(e) {
            if ("string" != typeof e) throw new Error("`extension` argument must be a string");
            switch (e) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.typeChecks = void 0, n.absolutizeUrl = o, n.formatType = i, n.getMimeFromType = r, n.getTypeFromFile = a, n.getExtension = s, n.normalizeExtension = l;
        var d = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(e(7)),
            u = e(27),
            c = n.typeChecks = [];
        d.default.Utils = d.default.Utils || {}, d.default.Utils.typeChecks = c, d.default.Utils.absolutizeUrl = o, d.default.Utils.formatType = i, d.default.Utils.getMimeFromType = r, d.default.Utils.getTypeFromFile = a, d.default.Utils.getExtension = s, d.default.Utils.normalizeExtension = l
    }, {
        27: 27,
        7: 7
    }],
    29: [function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = o(e(2)),
            r = o(e(4));
        [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        this.parentNode.removeChild(this)
                    }
                })
            }),
            function() {
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = i.default.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                }
                if ("function" == typeof window.CustomEvent) return !1;
                e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), "function" != typeof Object.assign && (Object.assign = function(e) {
                if (null === e || void 0 === e) throw new TypeError("Cannot convert undefined or null to object");
                for (var t = Object(e), n = 1, o = arguments.length; n < o; n++) {
                    var i = arguments[n];
                    if (null !== i)
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
                }
                return t
            }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                return t = t || 0, this.substr(t, e.length) === e
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length - 1; --n >= 0 && t.item(n) !== this;);
                return n > -1
            }), window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t = (this.document || this.ownerDocument).querySelectorAll(e),
                    n = void 0,
                    o = this;
                do {
                    for (n = t.length; --n >= 0 && t.item(n) !== o;);
                } while (n < 0 && (o = o.parentElement));
                return o
            }),
            function() {
                for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(t) {
                    var n = (new Date).getTime(),
                        o = Math.max(0, 16 - (n - e)),
                        i = window.setTimeout(function() {
                            t(n + o)
                        }, o);
                    return e = n + o, i
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e)
                })
            }(), /firefox/i.test(navigator.userAgent) && (window.mediaElementJsOldGetComputedStyle = window.getComputedStyle, window.getComputedStyle = function(e, t) {
                var n = window.mediaElementJsOldGetComputedStyle(e, t);
                return null === n ? {
                    getPropertyValue: function() {}
                } : n
            }), window.Promise || (window.Promise = r.default),
            function(e) {
                e && e.prototype && null === e.prototype.children && Object.defineProperty(e.prototype, "children", {
                    get: function() {
                        for (var e = 0, t = void 0, n = this.childNodes, o = []; t = n[e++];) 1 === t.nodeType && o.push(t);
                        return o
                    }
                })
            }(window.Node || window.Element)
    }, {
        2: 2,
        4: 4
    }],
    30: [function(e, t, n) {
        "use strict";

        function o() {
            return !((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25) % 1 == 0)
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 25,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            var a = Math.round(.066666 * i),
                s = Math.round(i),
                l = 24 * Math.round(3600 * i),
                d = Math.round(600 * i),
                u = o(i) ? ";" : ":",
                c = void 0,
                f = void 0,
                p = void 0,
                m = void 0,
                h = Math.round(e * i);
            if (o(i)) {
                h < 0 && (h = l + h);
                var v = (h %= l) % d;
                h += 9 * a * Math.floor(h / d), v > a && (h += a * Math.floor((v - a) / Math.round(60 * s - a)));
                var y = Math.floor(h / s);
                c = Math.floor(Math.floor(y / 60) / 60), f = Math.floor(y / 60) % 60, p = n ? y % 60 : (h / s % 60).toFixed(r)
            } else c = Math.floor(e / 3600) % 24, f = Math.floor(e / 60) % 60, p = n ? Math.floor(e % 60) : (e % 60).toFixed(r);
            c = c <= 0 ? 0 : c, f = f <= 0 ? 0 : f, p = p <= 0 ? 0 : p;
            var g = t || c > 0 ? (c < 10 ? "0" + c : c) + ":" : "";
            return g += (f < 10 ? "0" + f : f) + ":", g += "" + (p < 10 ? "0" + p : p), n && (g += (m = (m = (h % s).toFixed(0)) <= 0 ? 0 : m) < 10 ? u + "0" + m : "" + u + m), g
        }

        function r(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
            if ("string" != typeof e) throw new TypeError("Time must be a string");
            if (e.indexOf(";") > 0 && (e = e.replace(";", ":")), !/\d{2}(\:\d{2}){0,3}/i.test(e)) throw new TypeError("Time code must have the format `00:00:00`");
            var n = e.split(":"),
                i = void 0,
                r = 0,
                a = 0,
                s = 0,
                l = 0,
                d = 0,
                u = Math.round(.066666 * t),
                c = Math.round(t),
                f = 3600 * c,
                p = 60 * c;
            switch (n.length) {
                default:
                case 1:
                    s = parseInt(n[0], 10);
                    break;
                case 2:
                    a = parseInt(n[0], 10), s = parseInt(n[1], 10);
                    break;
                case 3:
                    r = parseInt(n[0], 10), a = parseInt(n[1], 10), s = parseInt(n[2], 10);
                    break;
                case 4:
                    r = parseInt(n[0], 10), a = parseInt(n[1], 10), s = parseInt(n[2], 10), l = parseInt(n[3], 10)
            }
            return i = o(t) ? f * r + p * a + c * s + l - u * ((d = 60 * r + a) - Math.floor(d / 10)) : (f * r + p * a + t * s + l) / t, parseFloat(i.toFixed(3))
        }

        function a(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
            e = !e || "number" != typeof e || e < 0 ? 0 : e;
            for (var o = Math.floor(e / 3600) % 24, i = Math.floor(e / 60) % 60, r = Math.floor(e % 60), a = [
                    [Math.floor((e % 1 * n).toFixed(3)), "f"],
                    [r, "s"],
                    [i, "m"],
                    [o, "h"]
                ], s = t.timeFormat, l = s[1] === s[0], d = l ? 2 : 1, u = s.length < d ? s[d] : ":", c = s[0], f = !1, p = 0, m = a.length; p < m; p++)
                if (~s.indexOf(a[p][1])) f = !0;
                else if (f) {
                for (var h = !1, v = p; v < m; v++)
                    if (a[v][0] > 0) {
                        h = !0;
                        break
                    } if (!h) break;
                l || (s = c + s), s = a[p][1] + u + s, l && (s = a[p][1] + s), c = a[p][1]
            }
            t.currentTimeFormat = s
        }

        function s(e) {
            if ("string" != typeof e) throw new TypeError("Argument must be a string value");
            for (var t = ~(e = e.replace(",", ".")).indexOf(".") ? e.split(".")[1].length : 0, n = 0, o = 1, i = 0, r = (e = e.split(":").reverse()).length; i < r; i++) o = 1, i > 0 && (o = Math.pow(60, i)), n += Number(e[i]) * o;
            return Number(n.toFixed(t))
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.isDropFrame = o, n.secondsToTimeCode = i, n.timeCodeToSeconds = r, n.calculateTimeFormat = a, n.convertSMPTEtoSeconds = s;
        var l = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(e(7));
        l.default.Utils = l.default.Utils || {}, l.default.Utils.secondsToTimeCode = i, l.default.Utils.timeCodeToSeconds = r, l.default.Utils.calculateTimeFormat = a, l.default.Utils.convertSMPTEtoSeconds = s
    }, {
        7: 7
    }]
}, {}, [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]);; /*})'"*/ ; /*})'"*/
/* Chosen v1.4.2 | (c) 2011-2015 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function() {
    var a, AbstractChosen, Chosen, SelectParser, b, c = {}.hasOwnProperty,
        d = function(a, b) {
            function d() {
                this.constructor = a
            }
            for (var e in b) c.call(b, e) && (a[e] = b[e]);
            return d.prototype = b.prototype, a.prototype = new d, a.__super__ = b.prototype, a
        };
    SelectParser = function() {
        function SelectParser() {
            this.options_index = 0, this.parsed = []
        }
        return SelectParser.prototype.add_node = function(a) {
            return "OPTGROUP" === a.nodeName.toUpperCase() ? this.add_group(a) : this.add_option(a)
        }, SelectParser.prototype.add_group = function(a) {
            var b, c, d, e, f, g;
            for (b = this.parsed.length, this.parsed.push({
                    array_index: b,
                    group: !0,
                    label: this.escapeExpression(a.label),
                    title: a.title ? a.title : void 0,
                    children: 0,
                    disabled: a.disabled,
                    classes: a.className
                }), f = a.childNodes, g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(this.add_option(c, b, a.disabled));
            return g
        }, SelectParser.prototype.add_option = function(a, b, c) {
            return "OPTION" === a.nodeName.toUpperCase() ? ("" !== a.text ? (null != b && (this.parsed[b].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: a.value,
                text: a.text,
                html: a.innerHTML,
                title: a.title ? a.title : void 0,
                selected: a.selected,
                disabled: c === !0 ? c : a.disabled,
                group_array_index: b,
                group_label: null != b ? this.parsed[b].label : null,
                classes: a.className,
                style: a.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, SelectParser.prototype.escapeExpression = function(a) {
            var b, c;
            return null == a || a === !1 ? "" : /[\&\<\>\"\'\`]/.test(a) ? (b = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, c = /&(?!\w+;)|[\<\>\"\'\`]/g, a.replace(c, function(a) {
                return b[a] || "&amp;"
            })) : a
        }, SelectParser
    }(), SelectParser.select_to_array = function(a) {
        var b, c, d, e, f;
        for (c = new SelectParser, f = a.childNodes, d = 0, e = f.length; e > d; d++) b = f[d], c.add_node(b);
        return c.parsed
    }, AbstractChosen = function() {
        function AbstractChosen(a, b) {
            this.form_field = a, this.options = null != b ? b : {}, AbstractChosen.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return AbstractChosen.prototype.set_default_values = function() {
            var a = this;
            return this.click_test_action = function(b) {
                return a.test_active_click(b)
            }, this.activate_action = function(b) {
                return a.activate_field(b)
            }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1
        }, AbstractChosen.prototype.set_default_text = function() {
            return this.default_text = this.form_field.getAttribute("data-placeholder") ? this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text
        }, AbstractChosen.prototype.choice_label = function(a) {
            return this.include_group_label_in_selected && null != a.group_label ? "<b class='group-name'>" + a.group_label + "</b>" + a.html : a.html
        }, AbstractChosen.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, AbstractChosen.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, AbstractChosen.prototype.input_focus = function() {
            var a = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return a.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, AbstractChosen.prototype.input_blur = function() {
            var a = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return a.blur_test()
            }, 100))
        }, AbstractChosen.prototype.results_option_build = function(a) {
            var b, c, d, e, f;
            for (b = "", f = this.results_data, d = 0, e = f.length; e > d; d++) c = f[d], b += c.group ? this.result_add_group(c) : this.result_add_option(c), (null != a ? a.first : void 0) && (c.selected && this.is_multiple ? this.choice_build(c) : c.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(c)));
            return b
        }, AbstractChosen.prototype.result_add_option = function(a) {
            var b, c;
            return a.search_match && this.include_option_in_results(a) ? (b = [], a.disabled || a.selected && this.is_multiple || b.push("active-result"), !a.disabled || a.selected && this.is_multiple || b.push("disabled-result"), a.selected && b.push("result-selected"), null != a.group_array_index && b.push("group-option"), "" !== a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.style.cssText = a.style, c.setAttribute("data-option-array-index", a.array_index), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
        }, AbstractChosen.prototype.result_add_group = function(a) {
            var b, c;
            return (a.search_match || a.group_match) && a.active_options > 0 ? (b = [], b.push("group-result"), a.classes && b.push(a.classes), c = document.createElement("li"), c.className = b.join(" "), c.innerHTML = a.search_text, a.title && (c.title = a.title), this.outerHTML(c)) : ""
        }, AbstractChosen.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, AbstractChosen.prototype.reset_single_select_options = function() {
            var a, b, c, d, e;
            for (d = this.results_data, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.selected ? a.selected = !1 : void 0);
            return e
        }, AbstractChosen.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, AbstractChosen.prototype.results_search = function() {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, AbstractChosen.prototype.winnow_results = function() {
            var a, b, c, d, e, f, g, h, i, j, k, l;
            for (this.no_results_clear(), d = 0, f = this.get_search_text(), a = f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = new RegExp(a, "i"), c = this.get_search_regex(a), l = this.results_data, j = 0, k = l.length; k > j; j++) b = l[j], b.search_match = !1, e = null, this.include_option_in_results(b) && (b.group && (b.group_match = !1, b.active_options = 0), null != b.group_array_index && this.results_data[b.group_array_index] && (e = this.results_data[b.group_array_index], 0 === e.active_options && e.search_match && (d += 1), e.active_options += 1), b.search_text = b.group ? b.label : b.html, (!b.group || this.group_search) && (b.search_match = this.search_string_match(b.search_text, c), b.search_match && !b.group && (d += 1), b.search_match ? (f.length && (g = b.search_text.search(i), h = b.search_text.substr(0, g + f.length) + "</em>" + b.search_text.substr(g + f.length), b.search_text = h.substr(0, g) + "<em>" + h.substr(g)), null != e && (e.group_match = !0)) : null != b.group_array_index && this.results_data[b.group_array_index].search_match && (b.search_match = !0)));
            return this.result_clear_highlight(), 1 > d && f.length ? (this.update_results_content(""), this.no_results(f)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, AbstractChosen.prototype.get_search_regex = function(a) {
            var b;
            return b = this.search_contains ? "" : "^", new RegExp(b + a, "i")
        }, AbstractChosen.prototype.search_string_match = function(a, b) {
            var c, d, e, f;
            if (b.test(a)) return !0;
            if (this.enable_split_word_search && (a.indexOf(" ") >= 0 || 0 === a.indexOf("[")) && (d = a.replace(/\[|\]/g, "").split(" "), d.length))
                for (e = 0, f = d.length; f > e; e++)
                    if (c = d[e], b.test(c)) return !0
        }, AbstractChosen.prototype.choices_count = function() {
            var a, b, c, d;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, d = this.form_field.options, b = 0, c = d.length; c > b; b++) a = d[b], a.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, AbstractChosen.prototype.choices_click = function(a) {
            return a.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, AbstractChosen.prototype.keyup_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), b) {
                case 8:
                    if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (a.preventDefault(), this.results_showing) return this.result_select(a);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                    break;
                default:
                    return this.results_search()
            }
        }, AbstractChosen.prototype.clipboard_event_checker = function() {
            var a = this;
            return setTimeout(function() {
                return a.results_search()
            }, 50)
        }, AbstractChosen.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, AbstractChosen.prototype.include_option_in_results = function(a) {
            return this.is_multiple && !this.display_selected_options && a.selected ? !1 : !this.display_disabled_options && a.disabled ? !1 : a.empty ? !1 : !0
        }, AbstractChosen.prototype.search_results_touchstart = function(a) {
            return this.touch_started = !0, this.search_results_mouseover(a)
        }, AbstractChosen.prototype.search_results_touchmove = function(a) {
            return this.touch_started = !1, this.search_results_mouseout(a)
        }, AbstractChosen.prototype.search_results_touchend = function(a) {
            return this.touch_started ? this.search_results_mouseup(a) : void 0
        }, AbstractChosen.prototype.outerHTML = function(a) {
            var b;
            return a.outerHTML ? a.outerHTML : (b = document.createElement("div"), b.appendChild(a), b.innerHTML)
        }, AbstractChosen.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) ? !1 : /Android/i.test(window.navigator.userAgent) && /Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, AbstractChosen.default_multiple_text = "Select Some Options", AbstractChosen.default_single_text = "Select an Option", AbstractChosen.default_no_result_text = "No results match", AbstractChosen
    }(), a = jQuery, a.fn.extend({
        chosen: function(b) {
            return AbstractChosen.browser_is_supported() ? this.each(function() {
                var c, d;
                c = a(this), d = c.data("chosen"), "destroy" === b && d instanceof Chosen ? d.destroy() : d instanceof Chosen || c.data("chosen", new Chosen(this, b))
            }) : this
        }
    }), Chosen = function(c) {
        function Chosen() {
            return b = Chosen.__super__.constructor.apply(this, arguments)
        }
        return d(Chosen, c), Chosen.prototype.setup = function() {
            return this.form_field_jq = a(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, Chosen.prototype.set_up_html = function() {
            var b, c;
            return b = ["chosen-container"], b.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && b.push(this.form_field.className), this.is_rtl && b.push("chosen-rtl"), c = {
                "class": b.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (c.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = a("<div />", c), this.container.html(this.is_multiple ? '<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>' : '<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, Chosen.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, Chosen.prototype.register_observers = function() {
            var a = this;
            return this.container.bind("touchstart.chosen", function(b) {
                return a.container_mousedown(b), b.preventDefault()
            }), this.container.bind("touchend.chosen", function(b) {
                return a.container_mouseup(b), b.preventDefault()
            }), this.container.bind("mousedown.chosen", function(b) {
                a.container_mousedown(b)
            }), this.container.bind("mouseup.chosen", function(b) {
                a.container_mouseup(b)
            }), this.container.bind("mouseenter.chosen", function(b) {
                a.mouse_enter(b)
            }), this.container.bind("mouseleave.chosen", function(b) {
                a.mouse_leave(b)
            }), this.search_results.bind("mouseup.chosen", function(b) {
                a.search_results_mouseup(b)
            }), this.search_results.bind("mouseover.chosen", function(b) {
                a.search_results_mouseover(b)
            }), this.search_results.bind("mouseout.chosen", function(b) {
                a.search_results_mouseout(b)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(b) {
                a.search_results_mousewheel(b)
            }), this.search_results.bind("touchstart.chosen", function(b) {
                a.search_results_touchstart(b)
            }), this.search_results.bind("touchmove.chosen", function(b) {
                a.search_results_touchmove(b)
            }), this.search_results.bind("touchend.chosen", function(b) {
                a.search_results_touchend(b)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(b) {
                a.results_update_field(b)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(b) {
                a.activate_field(b)
            }), this.form_field_jq.bind("chosen:open.chosen", function(b) {
                a.container_mousedown(b)
            }), this.form_field_jq.bind("chosen:close.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("blur.chosen", function(b) {
                a.input_blur(b)
            }), this.search_field.bind("keyup.chosen", function(b) {
                a.keyup_checker(b)
            }), this.search_field.bind("keydown.chosen", function(b) {
                a.keydown_checker(b)
            }), this.search_field.bind("focus.chosen", function(b) {
                a.input_focus(b)
            }), this.search_field.bind("cut.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.search_field.bind("paste.chosen", function(b) {
                a.clipboard_event_checker(b)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(b) {
                a.choices_click(b)
            }) : this.container.bind("click.chosen", function(a) {
                a.preventDefault()
            })
        }, Chosen.prototype.destroy = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, Chosen.prototype.search_field_disabled = function() {
            return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, Chosen.prototype.container_mousedown = function(b) {
            return this.is_disabled || (b && "mousedown" === b.type && !this.results_showing && b.preventDefault(), null != b && a(b.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !b || a(b.target)[0] !== this.selected_item[0] && !a(b.target).parents("a.chosen-single").length || (b.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), a(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, Chosen.prototype.container_mouseup = function(a) {
            return "ABBR" !== a.target.nodeName || this.is_disabled ? void 0 : this.results_reset(a)
        }, Chosen.prototype.search_results_mousewheel = function(a) {
            var b;
            return a.originalEvent && (b = a.originalEvent.deltaY || -a.originalEvent.wheelDelta || a.originalEvent.detail), null != b ? (a.preventDefault(), "DOMMouseScroll" === a.type && (b = 40 * b), this.search_results.scrollTop(b + this.search_results.scrollTop())) : void 0
        }, Chosen.prototype.blur_test = function() {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, Chosen.prototype.close_field = function() {
            return a(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, Chosen.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, Chosen.prototype.test_active_click = function(b) {
            var c;
            return c = a(b.target).closest(".chosen-container"), c.length && this.container[0] === c[0] ? this.active_field = !0 : this.close_field()
        }, Chosen.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = SelectParser.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, Chosen.prototype.result_do_highlight = function(a) {
            var b, c, d, e, f;
            if (a.length) {
                if (this.result_clear_highlight(), this.result_highlight = a, this.result_highlight.addClass("highlighted"), d = parseInt(this.search_results.css("maxHeight"), 10), f = this.search_results.scrollTop(), e = d + f, c = this.result_highlight.position().top + this.search_results.scrollTop(), b = c + this.result_highlight.outerHeight(), b >= e) return this.search_results.scrollTop(b - d > 0 ? b - d : 0);
                if (f > c) return this.search_results.scrollTop(c)
            }
        }, Chosen.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, Chosen.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, Chosen.prototype.update_results_content = function(a) {
            return this.search_results.html(a)
        }, Chosen.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, Chosen.prototype.set_tab_index = function() {
            var a;
            return this.form_field.tabIndex ? (a = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = a) : void 0
        }, Chosen.prototype.set_label_behavior = function() {
            var b = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = a("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function(a) {
                return b.is_multiple ? b.container_mousedown(a) : b.activate_field()
            }) : void 0
        }, Chosen.prototype.show_search_field_default = function() {
            return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, Chosen.prototype.search_results_mouseup = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c.length ? (this.result_highlight = c, this.result_select(b), this.search_field.focus()) : void 0
        }, Chosen.prototype.search_results_mouseover = function(b) {
            var c;
            return c = a(b.target).hasClass("active-result") ? a(b.target) : a(b.target).parents(".active-result").first(), c ? this.result_do_highlight(c) : void 0
        }, Chosen.prototype.search_results_mouseout = function(b) {
            return a(b.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, Chosen.prototype.choice_build = function(b) {
            var c, d, e = this;
            return c = a("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(b) + "</span>"), b.disabled ? c.addClass("search-choice-disabled") : (d = a("<a />", {
                "class": "search-choice-close",
                "data-option-array-index": b.array_index
            }), d.bind("click.chosen", function(a) {
                return e.choice_destroy_link_click(a)
            }), c.append(d)), this.search_container.before(c)
        }, Chosen.prototype.choice_destroy_link_click = function(b) {
            return b.preventDefault(), b.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(a(b.target))
        }, Chosen.prototype.choice_destroy = function(a) {
            return this.result_deselect(a[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), a.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, Chosen.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, Chosen.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, Chosen.prototype.result_select = function(a) {
            var b, c;
            return this.result_highlight ? (b = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? b.removeClass("active-result") : this.reset_single_select_options(), b.addClass("result-selected"), c = this.results_data[b[0].getAttribute("data-option-array-index")], c.selected = !0, this.form_field.options[c.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(c) : this.single_set_selected_text(this.choice_label(c)), (a.metaKey || a.ctrlKey) && this.is_multiple || this.results_hide(), this.search_field.val(""), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[c.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, a.preventDefault(), this.search_field_scale())) : void 0
        }, Chosen.prototype.single_set_selected_text = function(a) {
            return null == a && (a = this.default_text), a === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(a)
        }, Chosen.prototype.result_deselect = function(a) {
            var b;
            return b = this.results_data[a], this.form_field.options[b.options_index].disabled ? !1 : (b.selected = !1, this.form_field.options[b.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[b.options_index].value
            }), this.search_field_scale(), !0)
        }, Chosen.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, Chosen.prototype.get_search_text = function() {
            return a("<div/>").text(a.trim(this.search_field.val())).html()
        }, Chosen.prototype.winnow_results_set_highlight = function() {
            var a, b;
            return b = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), a = b.length ? b.first() : this.search_results.find(".active-result").first(), null != a ? this.result_do_highlight(a) : void 0
        }, Chosen.prototype.no_results = function(b) {
            var c;
            return c = a('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), c.find("span").first().html(b), this.search_results.append(c), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, Chosen.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, Chosen.prototype.keydown_arrow = function() {
            var a;
            return this.results_showing && this.result_highlight ? (a = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(a) : void 0 : this.results_show()
        }, Chosen.prototype.keyup_arrow = function() {
            var a;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (a = this.result_highlight.prevAll("li.active-result"), a.length ? this.result_do_highlight(a.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, Chosen.prototype.keydown_backstroke = function() {
            var a;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (a = this.search_container.siblings("li.search-choice").last(), a.length && !a.hasClass("search-choice-disabled") ? (this.pending_backstroke = a, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, Chosen.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, Chosen.prototype.keydown_checker = function(a) {
            var b, c;
            switch (b = null != (c = a.which) ? c : a.keyCode, this.search_field_scale(), 8 !== b && this.pending_backstroke && this.clear_backstroke(), b) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(a), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && a.preventDefault();
                    break;
                case 32:
                    this.disable_search && a.preventDefault();
                    break;
                case 38:
                    a.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    a.preventDefault(), this.keydown_arrow()
            }
        }, Chosen.prototype.search_field_scale = function() {
            var b, c, d, e, f, g, h, i, j;
            if (this.is_multiple) {
                for (d = 0, h = 0, f = "position:absolute; left: -1000px; top: -1000px; display:none;", g = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], i = 0, j = g.length; j > i; i++) e = g[i], f += e + ":" + this.search_field.css(e) + ";";
                return b = a("<div />", {
                    style: f
                }), b.text(this.search_field.val()), a("body").append(b), h = b.width() + 25, b.remove(), c = this.container.outerWidth(), h > c - 10 && (h = c - 10), this.search_field.css({
                    width: h + "px"
                })
            }
        }, Chosen
    }(AbstractChosen)
}).call(this);; /*})'"*/ ; /*})'"*/
(function($) {
    $.fn.drupalGetSummary = function() {
        var callback = this.data('summaryCallback');
        return (this[0] && callback) ? $.trim(callback(this[0])) : '';
    };
    $.fn.drupalSetSummary = function(callback) {
        var self = this;
        if (typeof callback != 'function') {
            var val = callback;
            callback = function() {
                return val;
            };
        }
        return this.data('summaryCallback', callback).unbind('formUpdated.summary').bind('formUpdated.summary', function() {
            self.trigger('summaryUpdated');
        }).trigger('summaryUpdated');
    };
    Drupal.behaviors.formUpdated = {
        attach: function(context) {
            var events = 'change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated';
            $(context).find(':input').andSelf().filter(':input').unbind(events).bind(events, function() {
                $(this).trigger('formUpdated');
            });
        }
    };
    Drupal.behaviors.fillUserInfoFromCookie = {
        attach: function(context, settings) {
            $('form.user-info-from-cookie').once('user-info-from-cookie', function() {
                var formContext = this;
                $.each(['name', 'mail', 'homepage'], function() {
                    var $element = $('[name=' + this + ']', formContext);
                    var cookie = $.cookie('Drupal.visitor.' + this);
                    if ($element.length && cookie) {
                        $element.val(cookie);
                    }
                });
            });
        }
    };
})(jQuery);; /*})'"*/
(function($) {
    Drupal.behaviors.tablesorter = {
        attach: function(context, settings) {
            var widgets = [];
            var widgetsZebra = [];
            if (settings.tablesorter) {
                if (settings.tablesorter.zebra == 1) {
                    widgets.push('zebra');
                }
                widgetsZebra.push(settings.tablesorter.odd);
                widgetsZebra.push(settings.tablesorter.even);
            }
            $('.tablesorter').each(function(idx, table) {
                $(table).once('tablesorter', function() {
                    $(table).tablesorter({
                        widgets: widgets,
                        widgetsZebra: {
                            css: widgetsZebra
                        }
                    });
                    if ($("#tablesorter_pager").length != 0) {
                        $(table).tablesorterPager({
                            container: $("#tablesorter_pager")
                        });
                    }
                });
            });
        }
    };
})(jQuery);;; /*})'"*/
(function($) {
    'use strict';
    Drupal.extlink = Drupal.extlink || {};
    Drupal.extlink.attach = function(context, settings) {
        if (!settings.hasOwnProperty('extlink')) {
            return;
        }
        var pattern = /^(([^\/:]+?\.)*)([^\.:]{1,})((\.[a-z0-9]{1,253})*)(:[0-9]{1,5})?$/;
        var host = window.location.host.replace(pattern, '$2$3');
        var subdomain = window.location.host.replace(host, '');
        var subdomains;
        if (settings.extlink.extSubdomains) {
            subdomains = '([^/]*\\.)?';
        } else if (subdomain === 'www.' || subdomain === '') {
            subdomains = '(www\\.)?';
        } else {
            subdomains = subdomain.replace('.', '\\.');
        }
        var internal_link = new RegExp('^https?://([^@]*@)?' + subdomains + host, 'i');
        var extInclude = false;
        if (settings.extlink.extInclude) {
            extInclude = new RegExp(settings.extlink.extInclude.replace(/\\/, '\\'), 'i');
        }
        var extExclude = false;
        if (settings.extlink.extExclude) {
            extExclude = new RegExp(settings.extlink.extExclude.replace(/\\/, '\\'), 'i');
        }
        var extCssExclude = false;
        if (settings.extlink.extCssExclude) {
            extCssExclude = settings.extlink.extCssExclude;
        }
        var extCssExplicit = false;
        if (settings.extlink.extCssExplicit) {
            extCssExplicit = settings.extlink.extCssExplicit;
        }
        var extIconPlacement = settings.extlink.extIconPlacement || 'append';
        var external_links = [];
        var mailto_links = [];
        $('a:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + '), area:not(.' + settings.extlink.extClass + ', .' + settings.extlink.mailtoClass + ')', context).each(function(el) {
            try {
                var url = '';
                if (typeof this.href == 'string') {
                    url = this.href.toLowerCase();
                } else if (typeof this.href == 'object') {
                    url = this.href.baseVal;
                }
                if (url.indexOf('http') === 0 && ((!url.match(internal_link) && !(extExclude && url.match(extExclude))) || (extInclude && url.match(extInclude))) && !(extCssExclude && $(this).is(extCssExclude)) && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                    external_links.push(this);
                } else if (this.tagName !== 'AREA' && url.indexOf('mailto:') === 0 && !(extCssExclude && $(this).parents(extCssExclude).length > 0) && !(extCssExplicit && $(this).parents(extCssExplicit).length < 1)) {
                    mailto_links.push(this);
                }
            } catch (error) {
                return false;
            }
        });
        if (settings.extlink.extClass) {
            Drupal.extlink.applyClassAndSpan(external_links, settings.extlink.extClass, extIconPlacement);
        }
        if (settings.extlink.mailtoClass) {
            Drupal.extlink.applyClassAndSpan(mailto_links, settings.extlink.mailtoClass, extIconPlacement);
        }
        if (settings.extlink.extTarget) {
            $(external_links).attr('target', settings.extlink.extTarget);
            $(external_links).attr('rel', function(i, val) {
                if (val == null) {
                    return 'noopener noreferrer';
                }
                if (val.indexOf('noopener') > -1 || val.indexOf('noreferrer') > -1) {
                    if (val.indexOf('noopener') === -1) {
                        return val + ' noopener';
                    }
                    if (val.indexOf('noreferrer') === -1) {
                        return val + ' noreferrer';
                    } else {
                        return val;
                    }
                } else {
                    return val + ' noopener noreferrer';
                }
            });
        }
        Drupal.extlink = Drupal.extlink || {};
        Drupal.extlink.popupClickHandler = Drupal.extlink.popupClickHandler || function() {
            if (settings.extlink.extAlert) {
                return confirm(settings.extlink.extAlertText);
            }
        };
        $(external_links).click(function(e) {
            return Drupal.extlink.popupClickHandler(e, this);
        });
    };
    Drupal.extlink.applyClassAndSpan = function(links, class_name, icon_placement) {
        var $links_to_process;
        if (Drupal.settings.extlink.extImgClass) {
            $links_to_process = $(links);
        } else {
            var links_with_images = $(links).find('img').parents('a');
            $links_to_process = $(links).not(links_with_images);
        }
        $links_to_process.addClass(class_name);
        var i;
        var length = $links_to_process.length;
        for (i = 0; i < length; i++) {
            var $link = $($links_to_process[i]);
            if ($link.css('display') === 'inline' || $link.css('display') === 'inline-block') {
                if (class_name === Drupal.settings.extlink.mailtoClass) {
                    $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.mailtoLabel + '"></span>');
                } else {
                    $link[icon_placement]('<span class="' + class_name + '" aria-label="' + Drupal.settings.extlink.extLabel + '"></span>');
                }
            }
        }
    };
    Drupal.behaviors.extlink = Drupal.behaviors.extlink || {};
    Drupal.behaviors.extlink.attach = function(context, settings) {
        if (typeof extlinkAttach === 'function') {
            extlinkAttach(context);
        } else {
            Drupal.extlink.attach(context, settings);
        }
    };
})(jQuery);;; /*})'"*/