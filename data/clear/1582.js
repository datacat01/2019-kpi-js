/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t, e, i) {
    function n(i, n, o) {
        var r = e.createElement(i);
        return n && (r.id = Z + n), o && (r.style.cssText = o), t(r)
    }

    function o() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function r(e, i) {
        i !== Object(i) && (i = {}), this.cache = {}, this.el = e, this.value = function(e) {
            var n;
            return void 0 === this.cache[e] && (n = t(this.el).attr("data-cbox-" + e), void 0 !== n ? this.cache[e] = n : void 0 !== i[e] ? this.cache[e] = i[e] : void 0 !== X[e] && (this.cache[e] = X[e])), this.cache[e]
        }, this.get = function(e) {
            var i = this.value(e);
            return t.isFunction(i) ? i.call(this.el, this) : i
        }
    }

    function h(t) {
        var e = W.length,
            i = (A + t) % e;
        return 0 > i ? e + i : i
    }

    function a(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? E.width() : o()) / 100 : 1) * parseInt(t, 10))
    }

    function s(t, e) {
        return t.get("photo") || t.get("photoRegex").test(e)
    }

    function l(t, e) {
        return t.get("retinaUrl") && i.devicePixelRatio > 1 ? e.replace(t.get("photoRegex"), t.get("retinaSuffix")) : e
    }

    function d(t) {
        "contains" in x[0] && !x[0].contains(t.target) && t.target !== v[0] && (t.stopPropagation(), x.focus())
    }

    function c(t) {
        c.str !== t && (x.add(v).removeClass(c.str).addClass(t), c.str = t)
    }

    function g(e) {
        A = 0, e && e !== !1 && "nofollow" !== e ? (W = t("." + te).filter(function() {
            var i = t.data(this, Y),
                n = new r(this, i);
            return n.get("rel") === e
        }), A = W.index(_.el), -1 === A && (W = W.add(_.el), A = W.length - 1)) : W = t(_.el)
    }

    function u(i) {
        t(e).trigger(i), ae.triggerHandler(i)
    }

    function f(i) {
        var o;
        if (!G) {
            if (o = t(i).data(Y), _ = new r(i, o), g(_.get("rel")), !U) {
                U = $ = !0, c(_.get("className")), x.css({
                    visibility: "hidden",
                    display: "block",
                    opacity: ""
                }), I = n(se, "LoadedContent", "width:0; height:0; overflow:hidden; visibility:hidden"), b.css({
                    width: "",
                    height: ""
                }).append(I), j = T.height() + k.height() + b.outerHeight(!0) - b.height(), D = C.width() + H.width() + b.outerWidth(!0) - b.width(), N = I.outerHeight(!0), z = I.outerWidth(!0);
                var h = a(_.get("initialWidth"), "x"),
                    s = a(_.get("initialHeight"), "y"),
                    l = _.get("maxWidth"),
                    f = _.get("maxHeight");
                _.w = Math.max((l !== !1 ? Math.min(h, a(l, "x")) : h) - z - D, 0), _.h = Math.max((f !== !1 ? Math.min(s, a(f, "y")) : s) - N - j, 0), I.css({
                    width: "",
                    height: _.h
                }), J.position(), u(ee), _.get("onOpen"), O.add(F).hide(), x.focus(), _.get("trapFocus") && e.addEventListener && (e.addEventListener("focus", d, !0), ae.one(re, function() {
                    e.removeEventListener("focus", d, !0)
                })), _.get("returnFocus") && ae.one(re, function() {
                    t(_.el).focus()
                })
            }
            var p = parseFloat(_.get("opacity"));
            v.css({
                opacity: p === p ? p : "",
                cursor: _.get("overlayClose") ? "pointer" : "",
                visibility: "visible"
            }).show(), _.get("closeButton") ? B.html(_.get("close")).appendTo(b) : B.appendTo("<div/>"), w()
        }
    }

    function p() {
        x || (V = !1, E = t(i), x = n(se).attr({
            id: Y,
            "class": t.support.opacity === !1 ? Z + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), v = n(se, "Overlay").hide(), L = t([n(se, "LoadingOverlay")[0], n(se, "LoadingGraphic")[0]]), y = n(se, "Wrapper"), b = n(se, "Content").append(F = n(se, "Title"), R = n(se, "Current"), P = t('<button type="button"/>').attr({
            id: Z + "Previous"
        }), K = t('<button type="button"/>').attr({
            id: Z + "Next"
        }), S = t('<button type="button"/>').attr({
            id: Z + "Slideshow"
        }), L), B = t('<button type="button"/>').attr({
            id: Z + "Close"
        }), y.append(n(se).append(n(se, "TopLeft"), T = n(se, "TopCenter"), n(se, "TopRight")), n(se, !1, "clear:left").append(C = n(se, "MiddleLeft"), b, H = n(se, "MiddleRight")), n(se, !1, "clear:left").append(n(se, "BottomLeft"), k = n(se, "BottomCenter"), n(se, "BottomRight"))).find("div div").css({
            "float": "left"
        }), M = n(se, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), O = K.add(P).add(R).add(S)), e.body && !x.parent().length && t(e.body).append(v, x.append(y, M))
    }

    function m() {
        function i(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), f(this))
        }
        return x ? (V || (V = !0, K.click(function() {
            J.next()
        }), P.click(function() {
            J.prev()
        }), B.click(function() {
            J.close()
        }), v.click(function() {
            _.get("overlayClose") && J.close()
        }), t(e).bind("keydown." + Z, function(t) {
            var e = t.keyCode;
            U && _.get("escKey") && 27 === e && (t.preventDefault(), J.close()), U && _.get("arrowKey") && W[1] && !t.altKey && (37 === e ? (t.preventDefault(), P.click()) : 39 === e && (t.preventDefault(), K.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + Z, "." + te, i) : t("." + te).live("click." + Z, i)), !0) : !1
    }

    function w() {
        var e, o, r, h = J.prep,
            d = ++le;
        if ($ = !0, q = !1, u(he), u(ie), _.get("onLoad"), _.h = _.get("height") ? a(_.get("height"), "y") - N - j : _.get("innerHeight") && a(_.get("innerHeight"), "y"), _.w = _.get("width") ? a(_.get("width"), "x") - z - D : _.get("innerWidth") && a(_.get("innerWidth"), "x"), _.mw = _.w, _.mh = _.h, _.get("maxWidth") && (_.mw = a(_.get("maxWidth"), "x") - z - D, _.mw = _.w && _.w < _.mw ? _.w : _.mw), _.get("maxHeight") && (_.mh = a(_.get("maxHeight"), "y") - N - j, _.mh = _.h && _.h < _.mh ? _.h : _.mh), e = _.get("href"), Q = setTimeout(function() {
                L.show()
            }, 100), _.get("inline")) {
            var c = t(e).eq(0);
            r = t("<div>").hide().insertBefore(c), ae.one(he, function() {
                r.replaceWith(c)
            }), h(c)
        } else _.get("iframe") ? h(" ") : _.get("html") ? h(_.get("html")) : s(_, e) ? (e = l(_, e), q = _.get("createImg"), t(q).addClass(Z + "Photo").bind("error." + Z, function() {
            h(n(se, "Error").html(_.get("imgError")))
        }).one("load", function() {
            d === le && setTimeout(function() {
                var e;
                _.get("retinaImage") && i.devicePixelRatio > 1 && (q.height = q.height / i.devicePixelRatio, q.width = q.width / i.devicePixelRatio), _.get("scalePhotos") && (o = function() {
                    q.height -= q.height * e, q.width -= q.width * e
                }, _.mw && q.width > _.mw && (e = (q.width - _.mw) / q.width, o()), _.mh && q.height > _.mh && (e = (q.height - _.mh) / q.height, o())), _.h && (q.style.marginTop = Math.max(_.mh - q.height, 0) / 2 + "px"), W[1] && (_.get("loop") || W[A + 1]) && (q.style.cursor = "pointer", t(q).bind("click." + Z, function() {
                    J.next()
                })), q.style.width = q.width + "px", q.style.height = q.height + "px", h(q)
            }, 1)
        }), q.src = e) : e && M.load(e, _.get("data"), function(e, i) {
            d === le && h("error" === i ? n(se, "Error").html(_.get("xhrError")) : t(this).contents())
        })
    }
    var v, x, y, b, T, C, H, k, W, E, I, M, L, F, R, S, K, P, B, O, _, j, D, N, z, A, q, U, $, G, Q, J, V, X = {
            html: !1,
            photo: !1,
            iframe: !1,
            inline: !1,
            transition: "elastic",
            speed: 300,
            fadeOut: 300,
            width: !1,
            initialWidth: "600",
            innerWidth: !1,
            maxWidth: !1,
            height: !1,
            initialHeight: "450",
            innerHeight: !1,
            maxHeight: !1,
            scalePhotos: !0,
            scrolling: !0,
            opacity: .9,
            preloading: !0,
            className: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0,
            fastIframe: !0,
            open: !1,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            returnFocus: !0,
            trapFocus: !0,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            rel: function() {
                return this.rel
            },
            href: function() {
                return t(this).attr("href")
            },
            title: function() {
                return this.title
            },
            createImg: function() {
                var e = new Image,
                    i = t(this).data("cbox-img-attrs");
                return "object" == typeof i && t.each(i, function(t, i) {
                    e[t] = i
                }), e
            },
            createIframe: function() {
                var i = e.createElement("iframe"),
                    n = t(this).data("cbox-iframe-attrs");
                return "object" == typeof n && t.each(n, function(t, e) {
                    i[t] = e
                }), "frameBorder" in i && (i.frameBorder = 0), "allowTransparency" in i && (i.allowTransparency = "true"), i.name = (new Date).getTime(), i.allowFullscreen = !0, i
            }
        },
        Y = "colorbox",
        Z = "cbox",
        te = Z + "Element",
        ee = Z + "_open",
        ie = Z + "_load",
        ne = Z + "_complete",
        oe = Z + "_cleanup",
        re = Z + "_closed",
        he = Z + "_purge",
        ae = t("<a/>"),
        se = "div",
        le = 0,
        de = {},
        ce = function() {
            function t() {
                clearTimeout(h)
            }

            function e() {
                (_.get("loop") || W[A + 1]) && (t(), h = setTimeout(J.next, _.get("slideshowSpeed")))
            }

            function i() {
                S.html(_.get("slideshowStop")).unbind(s).one(s, n), ae.bind(ne, e).bind(ie, t), x.removeClass(a + "off").addClass(a + "on")
            }

            function n() {
                t(), ae.unbind(ne, e).unbind(ie, t), S.html(_.get("slideshowStart")).unbind(s).one(s, function() {
                    J.next(), i()
                }), x.removeClass(a + "on").addClass(a + "off")
            }

            function o() {
                r = !1, S.hide(), t(), ae.unbind(ne, e).unbind(ie, t), x.removeClass(a + "off " + a + "on")
            }
            var r, h, a = Z + "Slideshow_",
                s = "click." + Z;
            return function() {
                r ? _.get("slideshow") || (ae.unbind(oe, o), o()) : _.get("slideshow") && W[1] && (r = !0, ae.one(oe, o), _.get("slideshowAuto") ? i() : n(), S.show())
            }
        }();
    t[Y] || (t(p), J = t.fn[Y] = t[Y] = function(e, i) {
        var n, o = this;
        return e = e || {}, t.isFunction(o) && (o = t("<a/>"), e.open = !0), o[0] ? (p(), m() && (i && (e.onComplete = i), o.each(function() {
            var i = t.data(this, Y) || {};
            t.data(this, Y, t.extend(i, e))
        }).addClass(te), n = new r(o[0], e), n.get("open") && f(o[0])), o) : o
    }, J.position = function(e, i) {
        function n() {
            T[0].style.width = k[0].style.width = b[0].style.width = parseInt(x[0].style.width, 10) - D + "px", b[0].style.height = C[0].style.height = H[0].style.height = parseInt(x[0].style.height, 10) - j + "px"
        }
        var r, h, s, l = 0,
            d = 0,
            c = x.offset();
        if (E.unbind("resize." + Z), x.css({
                top: -9e4,
                left: -9e4
            }), h = E.scrollTop(), s = E.scrollLeft(), _.get("fixed") ? (c.top -= h, c.left -= s, x.css({
                position: "fixed"
            })) : (l = h, d = s, x.css({
                position: "absolute"
            })), d += _.get("right") !== !1 ? Math.max(E.width() - _.w - z - D - a(_.get("right"), "x"), 0) : _.get("left") !== !1 ? a(_.get("left"), "x") : Math.round(Math.max(E.width() - _.w - z - D, 0) / 2), l += _.get("bottom") !== !1 ? Math.max(o() - _.h - N - j - a(_.get("bottom"), "y"), 0) : _.get("top") !== !1 ? a(_.get("top"), "y") : Math.round(Math.max(o() - _.h - N - j, 0) / 2), x.css({
                top: c.top,
                left: c.left,
                visibility: "visible"
            }), y[0].style.width = y[0].style.height = "9999px", r = {
                width: _.w + z + D,
                height: _.h + N + j,
                top: l,
                left: d
            }, e) {
            var g = 0;
            t.each(r, function(t) {
                return r[t] !== de[t] ? (g = e, void 0) : void 0
            }), e = g
        }
        de = r, e || x.css(r), x.dequeue().animate(r, {
            duration: e || 0,
            complete: function() {
                n(), $ = !1, y[0].style.width = _.w + z + D + "px", y[0].style.height = _.h + N + j + "px", _.get("reposition") && setTimeout(function() {
                    E.bind("resize." + Z, J.position)
                }, 1), t.isFunction(i) && i()
            },
            step: n
        })
    }, J.resize = function(t) {
        var e;
        U && (t = t || {}, t.width && (_.w = a(t.width, "x") - z - D), t.innerWidth && (_.w = a(t.innerWidth, "x")), I.css({
            width: _.w
        }), t.height && (_.h = a(t.height, "y") - N - j), t.innerHeight && (_.h = a(t.innerHeight, "y")), t.innerHeight || t.height || (e = I.scrollTop(), I.css({
            height: "auto"
        }), _.h = I.height()), I.css({
            height: _.h
        }), e && I.scrollTop(e), J.position("none" === _.get("transition") ? 0 : _.get("speed")))
    }, J.prep = function(i) {
        function o() {
            return _.w = _.w || I.width(), _.w = _.mw && _.mw < _.w ? _.mw : _.w, _.w
        }

        function a() {
            return _.h = _.h || I.height(), _.h = _.mh && _.mh < _.h ? _.mh : _.h, _.h
        }
        if (U) {
            var d, g = "none" === _.get("transition") ? 0 : _.get("speed");
            I.remove(), I = n(se, "LoadedContent").append(i), I.hide().appendTo(M.show()).css({
                width: o(),
                overflow: _.get("scrolling") ? "auto" : "hidden"
            }).css({
                height: a()
            }).prependTo(b), M.hide(), t(q).css({
                "float": "none"
            }), c(_.get("className")), d = function() {
                function i() {
                    t.support.opacity === !1 && x[0].style.removeAttribute("filter")
                }
                var n, o, a = W.length;
                U && (o = function() {
                    clearTimeout(Q), L.hide(), u(ne), _.get("onComplete")
                }, F.html(_.get("title")).show(), I.show(), a > 1 ? ("string" == typeof _.get("current") && R.html(_.get("current").replace("{current}", A + 1).replace("{total}", a)).show(), K[_.get("loop") || a - 1 > A ? "show" : "hide"]().html(_.get("next")), P[_.get("loop") || A ? "show" : "hide"]().html(_.get("previous")), ce(), _.get("preloading") && t.each([h(-1), h(1)], function() {
                    var i, n = W[this],
                        o = new r(n, t.data(n, Y)),
                        h = o.get("href");
                    h && s(o, h) && (h = l(o, h), i = e.createElement("img"), i.src = h)
                })) : O.hide(), _.get("iframe") ? (n = _.get("createIframe"), _.get("scrolling") || (n.scrolling = "no"), t(n).attr({
                    src: _.get("href"),
                    "class": Z + "Iframe"
                }).one("load", o).appendTo(I), ae.one(he, function() {
                    n.src = "//about:blank"
                }), _.get("fastIframe") && t(n).trigger("load")) : o(), "fade" === _.get("transition") ? x.fadeTo(g, 1, i) : i())
            }, "fade" === _.get("transition") ? x.fadeTo(g, 0, function() {
                J.position(0, d)
            }) : J.position(g, d)
        }
    }, J.next = function() {
        !$ && W[1] && (_.get("loop") || W[A + 1]) && (A = h(1), f(W[A]))
    }, J.prev = function() {
        !$ && W[1] && (_.get("loop") || A) && (A = h(-1), f(W[A]))
    }, J.close = function() {
        U && !G && (G = !0, U = !1, u(oe), _.get("onCleanup"), E.unbind("." + Z), v.fadeTo(_.get("fadeOut") || 0, 0), x.stop().fadeTo(_.get("fadeOut") || 0, 0, function() {
            x.hide(), v.hide(), u(he), I.remove(), setTimeout(function() {
                G = !1, u(re), _.get("onClosed")
            }, 1)
        }))
    }, J.remove = function() {
        x && (x.stop(), t[Y].close(), x.stop(!1, !0).remove(), v.remove(), G = !1, x = null, t("." + te).removeData(Y).removeClass(te), t(e).unbind("click." + Z).unbind("keydown." + Z))
    }, J.element = function() {
        return t(_.el)
    }, J.settings = X)
})(jQuery, document, window);; /*})'"*/ ; /*})'"*/
(function($) {
    Drupal.behaviors.initColorbox = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
                return;
            }
            if (settings.colorbox.mobiledetect && window.matchMedia) {
                var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
                if (mq.matches) {
                    return;
                }
            }
            settings.colorbox.rel = function() {
                if ($(this).data('colorbox-gallery')) {
                    return $(this).data('colorbox-gallery');
                } else {
                    return $(this).attr('rel');
                }
            };
            $('.colorbox', context).once('init-colorbox').colorbox(settings.colorbox);
            $(context).bind('cbox_complete', function() {
                Drupal.attachBehaviors('#cboxLoadedContent');
            });
        }
    };
})(jQuery);;; /*})'"*/
(function($) {
    Drupal.behaviors.initColorboxDefaultStyle = {
        attach: function(context, settings) {
            $(context).bind('cbox_complete', function() {
                if ($('#cboxTitle:empty', context).length == false) {
                    $('#cboxLoadedContent img', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideDown();
                    });
                    $('#cboxOverlay', context).bind('mouseover', function() {
                        $('#cboxTitle', context).slideUp();
                    });
                } else {
                    $('#cboxTitle', context).hide();
                }
            });
        }
    };
})(jQuery);; /*})'"*/
(function($) {
    Drupal.behaviors.dojAnalyticsEvents = {
        attach: function(context, settings) {
            if (typeof ga === 'undefined' || typeof ga.getAll !== 'function') {
                trackerName = 'GSA_ENOR0';
            } else {
                var trackerName = ga.getAll()[0].get('name');
            }
            var location = document.location.href;
            var regex = /(\/download$)|(\.(png|gif|jpg|jpeg|pdf|txt|rtf|doc|docx|xls|xsd|xlsx|csv|mp3|mp4|wpd|wp|qpw|xml|ppt|pptx|wmv|swf|flv|ods|zip|xht|tex|tiff|tif|bmp|json))$/i;
            var $downloadables = $('a', context).filter(function() {
                var href = $(this).attr('href');
                return (href && href.match(regex));
            });
            $downloadables.once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Downloads-DOJ_Sitewide',
                    eventAction: 'Click',
                    eventLabel: $(this).attr('href'),
                    eventValue: 0
                });
            });
            $('.field--name-field-slide-link a', context).once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Slides',
                    eventAction: 'Click',
                    eventLabel: $(this).attr('href'),
                    eventValue: 0
                });
            });
            $('.facetapi-facetapi-checkbox-links li.leaf', context).once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Facets',
                    eventAction: 'Click',
                    eventLabel: $(this).find('label').text(),
                    eventValue: 0
                });
            });
            $('.doj-sharing li a', context).once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Sharing',
                    eventAction: 'Link click',
                    eventLabel: $(this).attr('data-event-label'),
                    eventValue: 0
                });
            });
            $('#helpful-yes', context).once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Was this page helpful?',
                    eventAction: 'Button click',
                    eventLabel: 'Was helpful',
                    eventValue: 0
                });
            });
            $('#helpful-no', context).once('doj-analytics').click(function(e) {
                ga(trackerName + '.send', 'event', {
                    eventCategory: 'Was this page helpful?',
                    eventAction: 'Button click',
                    eventLabel: 'Not helpful',
                    eventValue: 0
                });
            });
        }
    };
})(jQuery);; /*})'"*/
/* 
	
The MIT License (MIT)

Copyright (c) 2014 etienne-martin
Contributions by Miro Hudak <mhudak@dev.enscope.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

! function(a, b, c, d) {
    function e(b, c) {
        var e = this;
        this.element = b, this.options = c, this.isPopOverEnabled = 0 != this.options.popOver, this.isCustomPopOver = 0 != this.options.popOver.customPopOver && this.options.popOver.customPopOver != d, this._initImageMap(), this._initPopOver(), this._bindEvents(), this._remapZones(), a(this.element).bind("load.mapify", function() {
            e._remapZones()
        })
    }
    var f = {
            hoverClass: !1,
            popOver: !1
        },
        g = {
            hoverClass: !1,
            popOver: {
                content: function(a, b) {
                    return ""
                },
                customPopOver: {
                    selector: !1,
                    contentSelector: ".mapify-popOver-content",
                    visibleClass: "mapify-visible",
                    alwaysVisible: !1
                },
                delay: .8,
                margin: "10px",
                width: !1,
                height: !1
            },
            onAreaHighlight: !1,
            onMapClear: !1,
            instantClickOnMobile: !1
        },
        h = navigator.userAgent.toLowerCase(),
        i = /(ipad|iphone|ipod)/g.test(h),
        j = /(android)/g.test(h),
        k = i || j;
    e.prototype._initPopOver = function() {
        var b = a(this.element);
        this.options.popOver.margin = parseInt(this.options.popOver.margin), this._timer = null, this._popOverTransition = "", this._popOverArrowTransition = "", this._popOverTimeout = null, isNaN(this.options.popOver.delay) || (this._popOverTransition = "all " + this.options.popOver.delay + "s", this._popOverArrowTransition = "margin " + this.options.popOver.delay + "s"), this.popOver = !1, this.popOverArrow = !1, this.isPopOverEnabled && (this.isCustomPopOver ? ("string" == typeof this.options.popOver.customPopOver && (this.options.popOver.customPopOver.selector = this.options.popOver.customPopOver), this.options.popOver.customPopOver = a.extend(!0, {}, g.popOver.customPopOver, this.options.popOver.customPopOver), this.popOver = a(this.options.popOver.customPopOver.selector), this.popOver.css({
            transition: this._popOverTransition
        })) : (b.after('<div class="mapify-popOver" style="transition:' + this._popOverTransition + '; "><div class="mapify-popOver-content"></div><div class="mapify-popOver-arrow" style="transition:' + this._popOverArrowTransition + '; "></div></div>'), this.popOver = b.next(".mapify-popOver"), this.popOverArrow = this.popOver.find(".mapify-popOver-arrow"), this.popOver.css({
            width: this.options.popOver.width,
            height: this.options.popOver.height
        })))
    }, e.prototype._initImageMap = function() {
        var b = this,
            c = a(this.element);
        if (this.map = c.attr("usemap"), this.zones = a(this.map).find("area"), !c.hasClass("mapify")) {
            if (c.addClass("mapify"), this._mapWidth = parseInt(c.attr("width")), this._mapHeight = parseInt(c.attr("height")), this._mapWidth || (this._mapWidth = this.element.clientWidth), this._mapHeight || (this._mapHeight = this.element.clientHeight), !this._mapWidth || !this._mapHeight) return console.log("ERROR: The width and height attributes must be specified on your image."), !1;
            c.wrap(function() {
                return '<div class="mapify-holder"></div>'
            }), this._mapHolder = c.parent(), a(this.map).appendTo(this._mapHolder), c.before('<img class="mapify-img" src="' + c.attr("src") + '" />'), c.before('<svg class="mapify-svg" width="' + this._mapWidth + '" height="' + this._mapHeight + '"></svg>'), this.svgMap = c.prev(".mapify-svg"), this.zones.each(function() {
                b._initSingleZone(this)
            }), c.wrap(function() {
                return '<div class="mapify-imgHolder"></div>'
            }).css("opacity", 0)
        }
    }, e.prototype._initSingleZone = function(b) {
        switch (a(b).attr("shape")) {
            case "rect":
                var d = a(b).attr("coords").split(","),
                    e = [];
                a.each([0, 1, 0, 3, 2, 3, 2, 1], function(a, b) {
                    e.push(d[b])
                }), a(b).attr("coords", e.join(",")), a(b).attr("shape", "poly");
                break;
            case "circle":
                break;
            case "poly":
                break;
            default:
                return console.log('ERROR: Area shape type "' + a(b).attr("shape") + '" is not supported.'), !1
        }
        a(b).attr("data-coords-default", a(b).attr("coords")), this.isPopOverEnabled && a(b).removeAttr("alt").attr("data-title", a(b).attr("title")).removeAttr("title");
        var f = a(b).attr("coords").split(",");
        if ("circle" === a(b).attr("shape")) {
            f[0] = 100 * f[0] / this._mapWidth, f[1] = 100 * f[1] / this._mapHeight, f[2] = 100 * f[2] / this._mapWidth;
            var g = c.createElementNS("http://www.w3.org/2000/svg", "circle");
            g.className = "mapify-circle", g.setAttribute("fill", "none"), this.svgMap.append(g)
        } else {
            for (var h in f) h % 2 == 0 ? f[h] = 100 * f[h] / this._mapWidth : f[h] = 100 * f[h] / this._mapHeight;
            var i = c.createElementNS("http://www.w3.org/2000/svg", "polygon");
            i.className = "mapify-polygon", i.setAttribute("fill", "none"), this.svgMap.append(i)
        }
        a(b).attr("data-coords", f.toString())
    }, e.prototype._bindEvents = function() {
        var b = this,
            d = a(this.element);
        this._hasScrolled = !1, a(c).bind("touchend.mapify", function() {
            b._hasScrolled || b._clearMap(), b._hasScrolled = !1
        }).bind("touchmove.mapify", function() {
            b._hasScrolled = !0
        }), d.bind("touchmove.mapify", function(a) {}), this._bindZoneEvents(), this._bindWindowEvents(), this._bindScrollParentEvents()
    }, e.prototype._bindZoneEvents = function() {
        var b = this;
        this.zones.css({
            outline: "none"
        }), this.zones.bind("touchend.mapify", function(c) {
            a(this).hasClass("mapify-clickable") && (a(this).trigger("click"), b.zones.removeClass("mapify-clickable")), b.hasScrolled = !1, c.stopPropagation()
        }).bind("click.mapify", function(a) {
            if (a.originalEvent !== d && k) return !1
        }).bind("touchstart.mapify", function() {
            b.zones.removeClass("mapify-clickable");
            var c = b.svgMap.find("polygon:eq(" + a(this).index() + ")")[0];
            c.classList.contains("mapify-hover") ? a(this).addClass("mapify-clickable") : k && b.options.instantClickOnMobile ? (console.log("Triggering instantClickOnMobile after touchstart"), a(this).addClass("mapify-clickable")) : a(this).addClass("mapify-hilightable")
        }).bind("touchmove.mapify", function() {
            b.zones.removeClass("mapify-clickable mapify-hilightable")
        }).bind("mouseenter.mapify focus.mapify touchend.mapify", function(c) {
            var d = this;
            return !(!a(this).hasClass("mapify-hilightable") && k) && (b._clearMap(), b.isPopOverEnabled && b._renderPopOver(d), b._drawHighlight(d), void c.preventDefault())
        }).bind("mouseout.mapify", function() {
            b._clearMap()
        }), k || this.zones.bind("blur.mapify", function() {
            b._clearMap()
        })
    }, e.prototype._bindWindowEvents = function() {
        var c = this;
        a(b).bind("resize.mapify", function() {
            c._timer && clearTimeout(c._timer), c._timer = setTimeout(function() {
                c.isPopOverEnabled && (c.popOver.hasClass("mapify-visible") || c.isCustomPopOver || c.popOver.css({
                    left: 0,
                    top: 0
                })), c.svgMap.find("polygon").attr("points", ""), c._remapZones();
                var a = c.zones[c.svgMap.find("polygon.mapify-hover").index()];
                a && (c.isPopOverEnabled && c._renderPopOver(a), c._drawHighlight(a))
            }, 100)
        })
    }, e.prototype._bindScrollParentEvents = function() {
        var d = this;
        this.scrollParent = a(this.element).mapify_scrollParent(), this.scrollParent.is(c) && (this.scrollParent = a(b)), this.scrollParent.addClass("mapify-GPU").bind("scroll.mapify", function() {
            k && d.zones.removeClass("mapify-clickable mapify-hilightable"), d.isPopOverEnabled && (!d.isCustomPopOver && k && (d.popOver.css({
                top: d.popOver.css("top"),
                left: d.popOver.css("left"),
                transition: "none"
            }), d.popOverArrow.css({
                marginLeft: d.popOverArrow.css("margin-left"),
                transition: "none"
            })), clearTimeout(a.data(this, "scrollTimer")), a.data(this, "scrollTimer", setTimeout(function() {
                var a = d.zones[d.svgMap.find("polygon.mapify-hover").index()];
                if (a) {
                    d._renderPopOver(a);
                    var b = d._computePopOverCompensation(a),
                        c = b[1],
                        e = b[2];
                    !d.isCustomPopOver && k && (d.popOver.css({
                        top: e[1],
                        left: e[0],
                        transition: d._popOverTransition
                    }), d.popOverArrow.css({
                        marginLeft: c,
                        transition: d._popOverArrowTransition
                    }))
                }
            }, 100)))
        })
    }, e.prototype._drawHighlight = function(b) {
        var c = this,
            d = a(b).attr("data-group-id"),
            e = a(b).attr("data-hover-class");
        e = e ? this.options.hoverClass + " " + e : this.options.hoverClass, d ? a(b).siblings("area[data-group-id=" + d + "]").addBack().each(function() {
            c._highlightSingleArea(this, e)
        }) : this._highlightSingleArea(b, e), this.options.onAreaHighlight && this.options.onAreaHighlight(this, b)
    }, e.prototype._highlightSingleArea = function(b, c) {
        var d, e = a(b).attr("data-coords").split(",");
        if ("circle" === a(b).attr("shape")) d = this.svgMap.find("circle:eq(" + a(b).index() + ")")[0], a(d).attr("cx", a(this.element).width() * (e[0] / 100)), a(d).attr("cy", a(this.element).height() * (e[1] / 100)), a(d).attr("r", a(this.element).width() * (e[2] / 100));
        else {
            var f = "";
            for (var g in e) f += g % 2 == 0 ? a(this.element).width() * (e[g] / 100) : "," + a(this.element).height() * (e[g] / 100) + " ";
            d = this.svgMap.find("polygon:eq(" + a(b).index() + ")")[0], a(d).attr("points", f)
        }
        a(d).attr("class", function(b, e) {
            var f = e;
            return a(d).hasClass("mapify-hover") || (f += " mapify-hover", c && (f += " " + c)), f
        })
    }, e.prototype._remapZones = function() {
        var b = this;
        this.zones.each(function() {
            var c = a(this).attr("data-coords").split(",");
            for (var d in c) d % 2 == 0 ? c[d] = a(b.element).width() * (c[d] / 100) : c[d] = a(b.element).height() * (c[d] / 100);
            a(this).attr("coords", c.toString())
        })
    }, e.prototype._renderPopOver = function(a) {
        this.isCustomPopOver ? this._renderCustomPopOver(a) : this._renderDefaultPopOver(a)
    }, e.prototype._renderCustomPopOver = function(b) {
        var c = this,
            d = this.options.popOver.customPopOver,
            e = this.popOver;
        clearTimeout(this._popOverTimeout), this._popOverTimeout = setTimeout(function() {
            var f = c.options.popOver.content(a(b), c.element);
            e.find(d.contentSelector).html(f), setTimeout(function() {
                e.css({
                    transition: c._popOverTransition
                }).addClass(d.visibleClass)
            }, 10)
        }, 100)
    }, e.prototype._renderDefaultPopOver = function(b) {
        var c = this,
            d = this.popOver.outerWidth(),
            e = this.options.popOver.margin,
            f = this.popOver,
            g = this.popOverArrow,
            h = f.attr("data-popOver-class");
        "" != h && (f.removeClass(h), f.attr("data-popOver-class", "")), this.scrollParent.width() - 2 * e <= d ? (d = this.scrollParent.width() - 2 * e, f.css({
            maxWidth: d
        })) : this._mapHolder.width() - 2 * e <= d ? (d = this._mapHolder.width() - 2 * e, f.css({
            maxWidth: d
        })) : f.css({
            maxWidth: ""
        }), f.css({
            marginLeft: -(d / 2)
        });
        var i = this._computePopOverCompensation(b),
            j = i[0],
            k = i[1],
            l = i[2];
        f.hasClass("mapify-visible") || (f.css({
            top: l[1],
            left: l[0],
            transition: "none"
        }), g.css({
            marginLeft: k,
            transition: "none"
        })), clearTimeout(this._popOverTimeout), this._popOverTimeout = setTimeout(function() {
            var d = c.options.popOver.content(a(b), c.element),
                e = a(b).attr("data-pop-over-class");
            "" != e && (f.addClass(e), f.attr("data-popOver-class", e)), f.find(".mapify-popOver-content").html(d), f.hasClass("mapify-to-bottom") ? (f.css({
                marginTop: ""
            }), f.hasClass("mapify-bottom") || g.css({
                marginLeft: j,
                transition: "none"
            }), f.addClass("mapify-bottom"), f.removeClass("mapify-to-bottom")) : (f.hasClass("mapify-bottom") && g.css({
                marginLeft: j,
                transition: "none"
            }), f.removeClass("mapify-bottom"), f.css({
                marginTop: -f.outerHeight()
            })), setTimeout(function() {
                f.css({
                    top: l[1],
                    left: l[0],
                    transition: c._popOverTransition
                }).addClass("mapify-visible"), g.css({
                    marginLeft: k,
                    transition: c._popOverArrowTransition
                })
            }, 10)
        }, 100)
    }, e.prototype._computePopOverCompensation = function(a) {
        var b = 0,
            c = 0,
            d = this.popOver,
            e = this._getAreaCorners(a),
            f = e["center top"],
            g = d.outerWidth(),
            h = this.options.popOver.margin;
        this._mapHolder.width() < this.scrollParent.width() ? (c = f[0] - g / 2 - this.scrollParent.scrollLeft(), c + g > this._mapHolder.width() - h ? b = c + g - this._mapHolder.width() + h : c < h && (b = c - h)) : (c = f[0] - g / 2 - this.scrollParent.scrollLeft(), c + g > this.scrollParent.outerWidth() - h ? b = c + g - this.scrollParent.outerWidth() + h : c < h && (b = c - h)), f[1] - d.outerHeight() - h < 0 ? (f = e["center bottom"], d.addClass("mapify-to-bottom")) : d.hasClass("mapify-to-bottom") && d.removeClass("mapify-to-bottom"), f[0] -= b;
        var i = b;
        return b > g / 2 - 2 * h ? i = g / 2 - 2 * h : b < -(g / 2 - 2 * h) && (i = -(g / 2) + 2 * h), [b, i, f]
    }, e.prototype._getAreaCorners = function(a) {
        for (var b, c = a.getAttribute("coords"), d = c.split(","), e = parseInt(d[0], 10), f = e, g = parseInt(d[1], 10), h = g, i = 0, j = d.length; i < j; i++) b = parseInt(d[i], 10), i % 2 == 0 ? b < e ? e = b : b > f && (f = b) : b < g ? g = b : b > h && (h = b);
        var k = parseInt((e + f) / 2, 10);
        parseInt((g + h) / 2, 10);
        return {
            "center top": {
                0: k,
                1: g
            },
            "center bottom": {
                0: k,
                1: h
            }
        }
    }, e.prototype._clearMap = function() {
        var a = this;
        if (this.isPopOverEnabled) {
            var b = !0,
                c = "mapify-visible";
            if (this.isCustomPopOver) {
                var d = this.options.popOver.customPopOver;
                c = d.visibleClass, b = !d.alwaysVisible
            }
            clearTimeout(this._popOverTimeout), b && (this._popOverTimeout = setTimeout(function() {
                a.popOver.removeClass(c)
            }, 300))
        }
        this.svgMap.find("polygon").attr("class", "mapify-polygon"), this.svgMap.find("circle").attr("class", "mapify-circle"), this.options.onMapClear && this.options.onMapClear(this)
    }, a.fn.mapify = function(b) {
        return this.each(function() {
            a.data(this, "plugin_mapify") || a.data(this, "plugin_mapify", new e(this, a.extend(!0, {}, f, b)))
        })
    }, a.fn.mapify_scrollParent = function() {
        var b = this.css("position"),
            d = "absolute" === b,
            e = this.parents().filter(function() {
                var b = a(this);
                return (!d || "static" !== b.css("position")) && /(auto|scroll)/.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
            }).eq(0);
        return "fixed" !== b && e.length ? e : a(this[0].ownerDocument || c)
    }
}(jQuery, window, document);; /*})'"*/ ; /*})'"*/
(function($, Drupal, undefined) {
    Drupal.behaviors.mediaelement = {
        attach: function(context, settings) {
            if (settings.mediaelement !== undefined) {
                $.each(settings.mediaelement, function(selector, options) {
                    var opts;
                    $(selector, context).once('mediaelement', function() {
                        if (options.controls) {
                            $(this).mediaelementplayer(options.opts);
                        } else {
                            $(this).mediaelement();
                        }
                    });
                });
            }
            if (settings.mediaelementAll !== undefined) {
                $('video,audio', context).once('mediaelement', function() {
                    $(this).mediaelementplayer();
                });
            }
        }
    };
})(jQuery, Drupal);;; /*})'"*/ ;
(function($, undefined) {
    "use strict";
    var ver = '3.0.3';

    function debug(s) {
        if ($.fn.cycle.debug)
            log(s);
    }

    function log() {
        if (window.console && console.log)
            console.log('[cycle] ' + Array.prototype.join.call(arguments, ' '));
    }
    $.expr[':'].paused = function(el) {
        return el.cyclePause;
    };
    $.fn.cycle = function(options, arg2) {
        var o = {
            s: this.selector,
            c: this.context
        };
        if (this.length === 0 && options != 'stop') {
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing slideshow');
                $(function() {
                    $(o.s, o.c).cycle(options, arg2);
                });
                return this;
            }
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }
        return this.each(function() {
            var opts = handleArguments(this, options, arg2);
            if (opts === false)
                return;
            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
            if (this.cycleTimeout)
                clearTimeout(this.cycleTimeout);
            this.cycleTimeout = this.cyclePause = 0;
            this.cycleStop = 0;
            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();
            if (els.length < 2) {
                log('terminating; too few slides: ' + els.length);
                return;
            }
            var opts2 = buildOptions($cont, $slides, els, opts, o);
            if (opts2 === false)
                return;
            var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
            if (startTime) {
                startTime += (opts2.delay || 0);
                if (startTime < 10)
                    startTime = 10;
                debug('first timeout: ' + startTime);
                this.cycleTimeout = setTimeout(function() {
                    go(els, opts2, 0, !opts.backwards);
                }, startTime);
            }
        });
    };

    function triggerPause(cont, byHover, onPager) {
        var opts = $(cont).data('cycle.opts');
        if (!opts)
            return;
        var paused = !!cont.cyclePause;
        if (paused && opts.paused)
            opts.paused(cont, opts, byHover, onPager);
        else if (!paused && opts.resumed)
            opts.resumed(cont, opts, byHover, onPager);
    }

    function handleArguments(cont, options, arg2) {
        if (cont.cycleStop === undefined)
            cont.cycleStop = 0;
        if (options === undefined || options === null)
            options = {};
        if (options.constructor == String) {
            switch (options) {
                case 'destroy':
                case 'stop':
                    var opts = $(cont).data('cycle.opts');
                    if (!opts)
                        return false;
                    cont.cycleStop++;
                    if (cont.cycleTimeout)
                        clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                    if (opts.elements)
                        $(opts.elements).stop();
                    $(cont).removeData('cycle.opts');
                    if (options == 'destroy')
                        destroy(cont, opts);
                    return false;
                case 'toggle':
                    cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                    checkInstantResume(cont.cyclePause, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'pause':
                    cont.cyclePause = 1;
                    triggerPause(cont);
                    return false;
                case 'resume':
                    cont.cyclePause = 0;
                    checkInstantResume(false, arg2, cont);
                    triggerPause(cont);
                    return false;
                case 'prev':
                case 'next':
                    opts = $(cont).data('cycle.opts');
                    if (!opts) {
                        log('options not found, "prev/next" ignored');
                        return false;
                    }
                    if (typeof arg2 == 'string')
                        opts.oneTimeFx = arg2;
                    $.fn.cycle[options](opts);
                    return false;
                default:
                    options = {
                        fx: options
                    };
            }
            return options;
        } else if (options.constructor == Number) {
            var num = options;
            options = $(cont).data('cycle.opts');
            if (!options) {
                log('options not found, can not advance slide');
                return false;
            }
            if (num < 0 || num >= options.elements.length) {
                log('invalid slide index: ' + num);
                return false;
            }
            options.nextSlide = num;
            if (cont.cycleTimeout) {
                clearTimeout(cont.cycleTimeout);
                cont.cycleTimeout = 0;
            }
            if (typeof arg2 == 'string')
                options.oneTimeFx = arg2;
            go(options.elements, options, 1, num >= options.currSlide);
            return false;
        }
        return options;

        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === true) {
                var options = $(cont).data('cycle.opts');
                if (!options) {
                    log('options not found, can not resume');
                    return false;
                }
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                go(options.elements, options, 1, !options.backwards);
            }
        }
    }

    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter) {
            try {
                el.style.removeAttribute('filter');
            } catch (smother) {}
        }
    }

    function destroy(cont, opts) {
        if (opts.next)
            $(opts.next).unbind(opts.prevNextEvent);
        if (opts.prev)
            $(opts.prev).unbind(opts.prevNextEvent);
        if (opts.pager || opts.pagerAnchorBuilder)
            $.each(opts.pagerAnchors || [], function() {
                this.unbind().remove();
            });
        opts.pagerAnchors = null;
        $(cont).unbind('mouseenter.cycle mouseleave.cycle');
        if (opts.destroy)
            opts.destroy(opts);
    }

    function buildOptions($cont, $slides, els, options, o) {
        var startingSlideSpecified;
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
        if (meta)
            opts = $.extend(opts, meta);
        if (opts.autostop)
            opts.countdown = opts.autostopCount || els.length;
        var cont = $cont[0];
        $cont.data('cycle.opts', opts);
        opts.$cont = $cont;
        opts.stopCount = cont.cycleStop;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        if (!$.support.opacity && opts.cleartype)
            opts.after.push(function() {
                removeFilter(this, opts);
            });
        if (opts.continuous)
            opts.after.push(function() {
                go(els, opts, 0, !opts.backwards);
            });
        saveOriginalOpts(opts);
        if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
            clearTypeFix($slides);
        if ($cont.css('position') == 'static')
            $cont.css('position', 'relative');
        if (opts.width)
            $cont.width(opts.width);
        if (opts.height && opts.height != 'auto')
            $cont.height(opts.height);
        if (opts.startingSlide !== undefined) {
            opts.startingSlide = parseInt(opts.startingSlide, 10);
            if (opts.startingSlide >= els.length || opts.startSlide < 0)
                opts.startingSlide = 0;
            else
                startingSlideSpecified = true;
        } else if (opts.backwards)
            opts.startingSlide = els.length - 1;
        else
            opts.startingSlide = 0;
        if (opts.random) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++)
                opts.randomMap.push(i);
            opts.randomMap.sort(function(a, b) {
                return Math.random() - 0.5;
            });
            if (startingSlideSpecified) {
                for (var cnt = 0; cnt < els.length; cnt++) {
                    if (opts.startingSlide == opts.randomMap[cnt]) {
                        opts.randomIndex = cnt;
                    }
                }
            } else {
                opts.randomIndex = 1;
                opts.startingSlide = opts.randomMap[1];
            }
        } else if (opts.startingSlide >= els.length)
            opts.startingSlide = 0;
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;
        $slides.css({
            position: 'absolute',
            top: 0,
            left: 0
        }).hide().each(function(i) {
            var z;
            if (opts.backwards)
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            else
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            $(this).css('z-index', z);
        });
        $(els[first]).css('opacity', 1).show();
        removeFilter(els[first], opts);
        if (opts.fit) {
            if (!opts.aspect) {
                if (opts.width)
                    $slides.width(opts.width);
                if (opts.height && opts.height != 'auto')
                    $slides.height(opts.height);
            } else {
                $slides.each(function() {
                    var $slide = $(this);
                    var ratio = (opts.aspect === true) ? $slide.width() / $slide.height() : opts.aspect;
                    if (opts.width && $slide.width() != opts.width) {
                        $slide.width(opts.width);
                        $slide.height(opts.width / ratio);
                    }
                    if (opts.height && $slide.height() < opts.height) {
                        $slide.height(opts.height);
                        $slide.width(opts.height * ratio);
                    }
                });
            }
        }
        if (opts.center && ((!opts.fit) || opts.aspect)) {
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                    "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                });
            });
        }
        if (opts.center && !opts.fit && !opts.slideResize) {
            $slides.each(function() {
                var $slide = $(this);
                $slide.css({
                    "margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
                    "margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
                });
            });
        }
        var reshape = (opts.containerResize || opts.containerResizeHeight) && $cont.innerHeight() < 1;
        if (reshape) {
            var maxw = 0,
                maxh = 0;
            for (var j = 0; j < els.length; j++) {
                var $e = $(els[j]),
                    e = $e[0],
                    w = $e.outerWidth(),
                    h = $e.outerHeight();
                if (!w) w = e.offsetWidth || e.width || $e.attr('width');
                if (!h) h = e.offsetHeight || e.height || $e.attr('height');
                maxw = w > maxw ? w : maxw;
                maxh = h > maxh ? h : maxh;
            }
            if (opts.containerResize && maxw > 0 && maxh > 0)
                $cont.css({
                    width: maxw + 'px',
                    height: maxh + 'px'
                });
            if (opts.containerResizeHeight && maxh > 0)
                $cont.css({
                    height: maxh + 'px'
                });
        }
        var pauseFlag = false;
        if (opts.pause)
            $cont.bind('mouseenter.cycle', function() {
                pauseFlag = true;
                this.cyclePause++;
                triggerPause(cont, true);
            }).bind('mouseleave.cycle', function() {
                if (pauseFlag)
                    this.cyclePause--;
                triggerPause(cont, true);
            });
        if (supportMultiTransitions(opts) === false)
            return false;
        var requeue = false;
        options.requeueAttempts = options.requeueAttempts || 0;
        $slides.each(function() {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
            this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);
            if ($el.is('img')) {
                var loading = (this.cycleH === 0 && this.cycleW === 0 && !this.complete);
                if (loading) {
                    if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
                        log(options.requeueAttempts, ' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
                        setTimeout(function() {
                            $(o.s, o.c).cycle(options);
                        }, opts.requeueTimeout);
                        requeue = true;
                        return false;
                    } else {
                        log('could not determine size of image: ' + this.src, this.cycleW, this.cycleH);
                    }
                }
            }
            return true;
        });
        if (requeue)
            return false;
        opts.cssBefore = opts.cssBefore || {};
        opts.cssAfter = opts.cssAfter || {};
        opts.cssFirst = opts.cssFirst || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};
        $slides.not(':eq(' + first + ')').css(opts.cssBefore);
        $($slides[first]).css(opts.cssFirst);
        if (opts.timeout) {
            opts.timeout = parseInt(opts.timeout, 10);
            if (opts.speed.constructor == String)
                opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed, 10);
            if (!opts.sync)
                opts.speed = opts.speed / 2;
            var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
            while ((opts.timeout - opts.speed) < buffer)
                opts.timeout += opts.speed;
        }
        if (opts.easing)
            opts.easeIn = opts.easeOut = opts.easing;
        if (!opts.speedIn)
            opts.speedIn = opts.speed;
        if (!opts.speedOut)
            opts.speedOut = opts.speed;
        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (opts.random) {
            if (++opts.randomIndex == els.length)
                opts.randomIndex = 0;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else if (opts.backwards)
            opts.nextSlide = opts.startingSlide === 0 ? (els.length - 1) : opts.startingSlide - 1;
        else
            opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init))
                init($cont, $slides, opts);
            else if (opts.fx != 'custom' && !opts.multiFx) {
                log('unknown transition: ' + opts.fx, '; slideshow terminating');
                return false;
            }
        }
        var e0 = $slides[first];
        if (!opts.skipInitializationCallbacks) {
            if (opts.before.length)
                opts.before[0].apply(e0, [e0, e0, opts, true]);
            if (opts.after.length)
                opts.after[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next)
            $(opts.next).bind(opts.prevNextEvent, function() {
                return advance(opts, 1);
            });
        if (opts.prev)
            $(opts.prev).bind(opts.prevNextEvent, function() {
                return advance(opts, 0);
            });
        if (opts.pager || opts.pagerAnchorBuilder)
            buildPager(els, opts);
        exposeAddSlide(opts, els);
        return opts;
    }

    function saveOriginalOpts(opts) {
        opts.original = {
            before: [],
            after: []
        };
        opts.original.cssBefore = $.extend({}, opts.cssBefore);
        opts.original.cssAfter = $.extend({}, opts.cssAfter);
        opts.original.animIn = $.extend({}, opts.animIn);
        opts.original.animOut = $.extend({}, opts.animOut);
        $.each(opts.before, function() {
            opts.original.before.push(this);
        });
        $.each(opts.after, function() {
            opts.original.after.push(this);
        });
    }

    function supportMultiTransitions(opts) {
        var i, tx, txs = $.fn.cycle.transitions;
        if (opts.fx.indexOf(',') > 0) {
            opts.multiFx = true;
            opts.fxs = opts.fx.replace(/\s*/g, '').split(',');
            for (i = 0; i < opts.fxs.length; i++) {
                var fx = opts.fxs[i];
                tx = txs[fx];
                if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                    log('discarding unknown transition: ', fx);
                    opts.fxs.splice(i, 1);
                    i--;
                }
            }
            if (!opts.fxs.length) {
                log('No valid transitions named; slideshow terminating.');
                return false;
            }
        } else if (opts.fx == 'all') {
            opts.multiFx = true;
            opts.fxs = [];
            for (var p in txs) {
                if (txs.hasOwnProperty(p)) {
                    tx = txs[p];
                    if (txs.hasOwnProperty(p) && $.isFunction(tx))
                        opts.fxs.push(p);
                }
            }
        }
        if (opts.multiFx && opts.randomizeEffects) {
            var r1 = Math.floor(Math.random() * 20) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug('randomized fx sequence: ', opts.fxs);
        }
        return true;
    }

    function exposeAddSlide(opts, els) {
        opts.addSlide = function(newSlide, prepend) {
            var $s = $(newSlide),
                s = $s[0];
            if (!opts.autostopCount)
                opts.countdown++;
            els[prepend ? 'unshift' : 'push'](s);
            if (opts.els)
                opts.els[prepend ? 'unshift' : 'push'](s);
            opts.slideCount = els.length;
            if (opts.random) {
                opts.randomMap.push(opts.slideCount - 1);
                opts.randomMap.sort(function(a, b) {
                    return Math.random() - 0.5;
                });
            }
            $s.css('position', 'absolute');
            $s[prepend ? 'prependTo' : 'appendTo'](opts.$cont);
            if (prepend) {
                opts.currSlide++;
                opts.nextSlide++;
            }
            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
                clearTypeFix($s);
            if (opts.fit && opts.width)
                $s.width(opts.width);
            if (opts.fit && opts.height && opts.height != 'auto')
                $s.height(opts.height);
            s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
            s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
            $s.css(opts.cssBefore);
            if (opts.pager || opts.pagerAnchorBuilder)
                $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
            if ($.isFunction(opts.onAddSlide))
                opts.onAddSlide($s);
            else
                $s.hide();
        };
    }
    $.fn.cycle.resetState = function(opts, fx) {
        fx = fx || opts.fx;
        opts.before = [];
        opts.after = [];
        opts.cssBefore = $.extend({}, opts.original.cssBefore);
        opts.cssAfter = $.extend({}, opts.original.cssAfter);
        opts.animIn = $.extend({}, opts.original.animIn);
        opts.animOut = $.extend({}, opts.original.animOut);
        opts.fxFn = null;
        $.each(opts.original.before, function() {
            opts.before.push(this);
        });
        $.each(opts.original.after, function() {
            opts.after.push(this);
        });
        var init = $.fn.cycle.transitions[fx];
        if ($.isFunction(init))
            init(opts.$cont, $(opts.elements), opts);
    };

    function go(els, opts, manual, fwd) {
        var p = opts.$cont[0],
            curr = els[opts.currSlide],
            next = els[opts.nextSlide];
        if (manual && opts.busy && opts.manualTrump) {
            debug('manualTrump in go(), stopping active transition');
            $(els).stop(true, true);
            opts.busy = 0;
            clearTimeout(p.cycleTimeout);
        }
        if (opts.busy) {
            debug('transition active, ignoring new tx request');
            return;
        }
        if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
            return;
        if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
            if (opts.end)
                opts.end(opts);
            return;
        }
        var changed = false;
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            var fx = opts.fx;
            curr.cycleH = curr.cycleH || $(curr).height();
            curr.cycleW = curr.cycleW || $(curr).width();
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();
            if (opts.multiFx) {
                if (fwd && (opts.lastFx === undefined || ++opts.lastFx >= opts.fxs.length))
                    opts.lastFx = 0;
                else if (!fwd && (opts.lastFx === undefined || --opts.lastFx < 0))
                    opts.lastFx = opts.fxs.length - 1;
                fx = opts.fxs[opts.lastFx];
            }
            if (opts.oneTimeFx) {
                fx = opts.oneTimeFx;
                opts.oneTimeFx = null;
            }
            $.fn.cycle.resetState(opts, fx);
            if (opts.before.length)
                $.each(opts.before, function(i, o) {
                    if (p.cycleStop != opts.stopCount) return;
                    o.apply(next, [curr, next, opts, fwd]);
                });
            var after = function() {
                opts.busy = 0;
                $.each(opts.after, function(i, o) {
                    if (p.cycleStop != opts.stopCount) return;
                    o.apply(next, [curr, next, opts, fwd]);
                });
                if (!p.cycleStop) {
                    queueNext();
                }
            };
            debug('tx firing(' + fx + '); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
            opts.busy = 1;
            if (opts.fxFn)
                opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else if ($.isFunction($.fn.cycle[opts.fx]))
                $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            else
                $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        } else {
            queueNext();
        }
        if (changed || opts.nextSlide == opts.currSlide) {
            var roll;
            opts.lastSlide = opts.currSlide;
            if (opts.random) {
                opts.currSlide = opts.nextSlide;
                if (++opts.randomIndex == els.length) {
                    opts.randomIndex = 0;
                    opts.randomMap.sort(function(a, b) {
                        return Math.random() - 0.5;
                    });
                }
                opts.nextSlide = opts.randomMap[opts.randomIndex];
                if (opts.nextSlide == opts.currSlide)
                    opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
            } else if (opts.backwards) {
                roll = (opts.nextSlide - 1) < 0;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = 1;
                    opts.currSlide = 0;
                } else {
                    opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                    opts.currSlide = roll ? 0 : opts.nextSlide + 1;
                }
            } else {
                roll = (opts.nextSlide + 1) == els.length;
                if (roll && opts.bounce) {
                    opts.backwards = !opts.backwards;
                    opts.nextSlide = els.length - 2;
                    opts.currSlide = els.length - 1;
                } else {
                    opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                    opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                }
            }
        }
        if (changed && opts.pager)
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);

        function queueNext() {
            var ms = 0,
                timeout = opts.timeout;
            if (opts.timeout && !opts.continuous) {
                ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
                if (opts.fx == 'shuffle')
                    ms -= opts.speedOut;
            } else if (opts.continuous && p.cyclePause)
                ms = 10;
            if (ms > 0)
                p.cycleTimeout = setTimeout(function() {
                    go(els, opts, 0, !opts.backwards);
                }, ms);
        }
    }
    $.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
        $(pager).each(function() {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    };

    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
            while (opts.fx != 'none' && (t - opts.speed) < 250)
                t += opts.speed;
            debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
            if (t !== false)
                return t;
        }
        return opts.timeout;
    }
    $.fn.cycle.next = function(opts) {
        advance(opts, 1);
    };
    $.fn.cycle.prev = function(opts) {
        advance(opts, 0);
    };

    function advance(opts, moveForward) {
        var val = moveForward ? 1 : -1;
        var els = opts.elements;
        var p = opts.$cont[0],
            timeout = p.cycleTimeout;
        if (timeout) {
            clearTimeout(timeout);
            p.cycleTimeout = 0;
        }
        if (opts.random && val < 0) {
            opts.randomIndex--;
            if (--opts.randomIndex == -2)
                opts.randomIndex = els.length - 2;
            else if (opts.randomIndex == -1)
                opts.randomIndex = els.length - 1;
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else if (opts.random) {
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            opts.nextSlide = opts.currSlide + val;
            if (opts.nextSlide < 0) {
                if (opts.nowrap) return false;
                opts.nextSlide = els.length - 1;
            } else if (opts.nextSlide >= els.length) {
                if (opts.nowrap) return false;
                opts.nextSlide = 0;
            }
        }
        var cb = opts.onPrevNextEvent || opts.prevNextClick;
        if ($.isFunction(cb))
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
        go(els, opts, 1, moveForward);
        return false;
    }

    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function(i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }
    $.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
        var a;
        if ($.isFunction(opts.pagerAnchorBuilder)) {
            a = opts.pagerAnchorBuilder(i, el);
            debug('pagerAnchorBuilder(' + i + ', el) returned: ' + a);
        } else
            a = '<a href="#">' + (i + 1) + '</a>';
        if (!a)
            return;
        var $a = $(a);
        if ($a.parents('body').length === 0) {
            var arr = [];
            if ($p.length > 1) {
                $p.each(function() {
                    var $clone = $a.clone(true);
                    $(this).append($clone);
                    arr.push($clone[0]);
                });
                $a = $(arr);
            } else {
                $a.appendTo($p);
            }
        }
        opts.pagerAnchors = opts.pagerAnchors || [];
        opts.pagerAnchors.push($a);
        var pagerFn = function(e) {
            e.preventDefault();
            opts.nextSlide = i;
            var p = opts.$cont[0],
                timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0;
            }
            var cb = opts.onPagerEvent || opts.pagerClick;
            if ($.isFunction(cb))
                cb(opts.nextSlide, els[opts.nextSlide]);
            go(els, opts, 1, opts.currSlide < i);
        };
        if (/mouseenter|mouseover/i.test(opts.pagerEvent)) {
            $a.hover(pagerFn, function() {});
        } else {
            $a.bind(opts.pagerEvent, pagerFn);
        }
        if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
            $a.bind('click.cycle', function() {
                return false;
            });
        var cont = opts.$cont[0];
        var pauseFlag = false;
        if (opts.pauseOnPagerHover) {
            $a.hover(function() {
                pauseFlag = true;
                cont.cyclePause++;
                triggerPause(cont, true, true);
            }, function() {
                if (pauseFlag)
                    cont.cyclePause--;
                triggerPause(cont, true, true);
            });
        }
    };
    $.fn.cycle.hopsFromLast = function(opts, fwd) {
        var hops, l = opts.lastSlide,
            c = opts.currSlide;
        if (fwd)
            hops = c > l ? c - l : opts.slideCount - l;
        else
            hops = c < l ? l - c : l + opts.slideCount - c;
        return hops;
    };

    function clearTypeFix($slides) {
        debug('applying clearType background-color hack');

        function hex(s) {
            s = parseInt(s, 10).toString(16);
            return s.length < 2 ? '0' + s : s;
        }

        function getBg(e) {
            for (; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
                var v = $.css(e, 'background-color');
                if (v && v.indexOf('rgb') >= 0) {
                    var rgb = v.match(/\d+/g);
                    return '#' + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && v != 'transparent')
                    return v;
            }
            return '#ffffff';
        }
        $slides.each(function() {
            $(this).css('background-color', getBg(this));
        });
    }
    $.fn.cycle.commonReset = function(curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide();
        if (typeof opts.cssBefore.opacity == 'undefined')
            opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        if (opts.slideResize && w !== false && next.cycleW > 0)
            opts.cssBefore.width = next.cycleW;
        if (opts.slideResize && h !== false && next.cycleH > 0)
            opts.cssBefore.height = next.cycleH;
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = 'none';
        $(curr).css('zIndex', opts.slideCount + (rev === true ? 1 : 0));
        $(next).css('zIndex', opts.slideCount + (rev === true ? 0 : 1));
    };
    $.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr),
            $n = $(next);
        var speedIn = opts.speedIn,
            speedOut = opts.speedOut,
            easeIn = opts.easeIn,
            easeOut = opts.easeOut,
            animInDelay = opts.animInDelay,
            animOutDelay = opts.animOutDelay;
        $n.css(opts.cssBefore);
        if (speedOverride) {
            if (typeof speedOverride == 'number')
                speedIn = speedOut = speedOverride;
            else
                speedIn = speedOut = 1;
            easeIn = easeOut = null;
        }
        var fn = function() {
            $n.delay(animInDelay).animate(opts.animIn, speedIn, easeIn, function() {
                cb();
            });
        };
        $l.delay(animOutDelay).animate(opts.animOut, speedOut, easeOut, function() {
            $l.css(opts.cssAfter);
            if (!opts.sync)
                fn();
        });
        if (opts.sync) fn();
    };
    $.fn.cycle.transitions = {
        fade: function($cont, $slides, opts) {
            $slides.not(':eq(' + opts.currSlide + ')').css('opacity', 0);
            opts.before.push(function(curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.opacity = 0;
            });
            opts.animIn = {
                opacity: 1
            };
            opts.animOut = {
                opacity: 0
            };
            opts.cssBefore = {
                top: 0,
                left: 0
            };
        }
    };
    $.fn.cycle.ver = function() {
        return ver;
    };
    $.fn.cycle.defaults = {
        activePagerClass: 'activeSlide',
        after: null,
        allowPagerClickBubble: false,
        animIn: null,
        animInDelay: 0,
        animOut: null,
        animOutDelay: 0,
        aspect: false,
        autostop: 0,
        autostopCount: 0,
        backwards: false,
        before: null,
        center: null,
        cleartype: !$.support.opacity,
        cleartypeNoBg: false,
        containerResize: 1,
        containerResizeHeight: 0,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: 'fade',
        fxFn: null,
        height: 'auto',
        manualTrump: true,
        metaAttr: 'cycle',
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: 'click.cycle',
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: 'click.cycle',
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: true,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        skipInitializationCallbacks: false,
        slideExpr: null,
        slideResize: 1,
        speed: 1000,
        speedIn: null,
        speedOut: null,
        startingSlide: undefined,
        sync: 1,
        timeout: 4000,
        timeoutFn: null,
        updateActivePagerLink: null,
        width: null
    };
})(jQuery);
(function($) {
    "use strict";
    $.fn.cycle.transitions.none = function($cont, $slides, opts) {
        opts.fxFn = function(curr, next, opts, after) {
            $(next).show();
            $(curr).hide();
            after();
        };
    };
    $.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
        $slides.not(':eq(' + opts.currSlide + ')').css({
            display: 'block',
            'opacity': 1
        });
        opts.before.push(function(curr, next, opts, w, h, rev) {
            $(curr).css('zIndex', opts.slideCount + (rev !== true ? 1 : 0));
            $(next).css('zIndex', opts.slideCount + (rev !== true ? 0 : 1));
        });
        opts.animIn.opacity = 1;
        opts.animOut.opacity = 0;
        opts.cssBefore.opacity = 1;
        opts.cssBefore.display = 'block';
        opts.cssAfter.zIndex = 0;
    };
    $.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.cssFirst.top = 0;
        opts.animIn.top = 0;
        opts.animOut.top = -h;
    };
    $.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssFirst.top = 0;
        opts.cssBefore.top = -h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = 0 - w;
    };
    $.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = -w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden').width();
        opts.before.push(function(curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
            opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
        });
        opts.cssFirst.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = 0;
    };
    $.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
        $cont.css('overflow', 'hidden');
        opts.before.push(function(curr, next, opts, fwd) {
            if (opts.rev)
                fwd = !fwd;
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
            opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.left = 0;
    };
    $.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.width = 'show';
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animIn.height = 'show';
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
        var i, w = $cont.css('overflow', 'visible').width();
        $slides.css({
            left: 0,
            top: 0
        });
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
        });
        if (!opts.speedAdjusted) {
            opts.speed = opts.speed / 2;
            opts.speedAdjusted = true;
        }
        opts.random = 0;
        opts.shuffle = opts.shuffle || {
            left: -w,
            top: 15
        };
        opts.els = [];
        for (i = 0; i < $slides.length; i++)
            opts.els.push($slides[i]);
        for (i = 0; i < opts.currSlide; i++)
            opts.els.push(opts.els.shift());
        opts.fxFn = function(curr, next, opts, cb, fwd) {
            if (opts.rev)
                fwd = !fwd;
            var $el = fwd ? $(curr) : $(next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
                var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                for (var k = 0; k < hops; k++) {
                    if (fwd)
                        opts.els.push(opts.els.shift());
                    else
                        opts.els.unshift(opts.els.pop());
                }
                if (fwd) {
                    for (var i = 0, len = opts.els.length; i < len; i++)
                        $(opts.els[i]).css('z-index', len - i + count);
                } else {
                    var z = $(curr).css('z-index');
                    $el.css('z-index', parseInt(z, 10) + 1 + count);
                }
                $el.animate({
                    left: 0,
                    top: 0
                }, opts.speedOut, opts.easeOut, function() {
                    $(fwd ? this : curr).hide();
                    if (cb) cb();
                });
            });
        };
        $.extend(opts.cssBefore, {
            display: 'block',
            opacity: 1,
            top: 0,
            left: 0
        });
    };
    $.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = next.cycleH;
            opts.animIn.height = next.cycleH;
            opts.animOut.width = next.cycleW;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.height = 0;
        opts.animIn.top = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = next.cycleW;
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        $.extend(opts.cssBefore, {
            top: 0,
            left: 0,
            width: 0
        });
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.cssBefore.left = next.cycleW / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            });
            $.extend(opts.animOut, {
                width: 0,
                height: 0,
                top: curr.cycleH / 2,
                left: curr.cycleW / 2
            });
        });
        opts.cssFirst.top = 0;
        opts.cssFirst.left = 0;
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
    };
    $.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false);
            opts.cssBefore.left = next.cycleW / 2;
            opts.cssBefore.top = next.cycleH / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            });
        });
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
        opts.animOut.opacity = 0;
    };
    $.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
        var h = $cont.css('overflow', 'hidden').height();
        var w = $cont.width();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = w;
        opts.animIn.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = h;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.growX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = this.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    $.fn.cycle.transitions.growY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = this.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = this.cycleH;
            opts.animOut.top = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true, true);
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = curr.cycleW / 2;
            opts.animOut.width = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    $.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH / 2;
            opts.animOut.height = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.cover = function($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssAfter.display = '';
            if (d == 'right')
                opts.cssBefore.left = -w;
            else if (d == 'up')
                opts.cssBefore.top = h;
            else if (d == 'down')
                opts.cssBefore.top = -h;
            else
                opts.cssBefore.left = w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
        var d = opts.direction || 'left';
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (d == 'right')
                opts.animOut.left = w;
            else if (d == 'up')
                opts.animOut.top = -h;
            else if (d == 'down')
                opts.animOut.top = h;
            else
                opts.animOut.left = -w;
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.toss = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'visible').width();
        var h = $cont.height();
        opts.before.push(function(curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (!opts.animOut.left && !opts.animOut.top)
                $.extend(opts.animOut, {
                    left: w * 2,
                    top: -h / 2,
                    opacity: 0
                });
            else
                opts.animOut.opacity = 0;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
    };
    $.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
        var w = $cont.css('overflow', 'hidden').width();
        var h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip) {
            if (/l2r/.test(opts.clip))
                clip = 'rect(0px 0px ' + h + 'px 0px)';
            else if (/r2l/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px ' + h + 'px ' + w + 'px)';
            else if (/t2b/.test(opts.clip))
                clip = 'rect(0px ' + w + 'px 0px 0px)';
            else if (/b2t/.test(opts.clip))
                clip = 'rect(' + h + 'px ' + w + 'px ' + h + 'px 0px)';
            else if (/zoom/.test(opts.clip)) {
                var top = parseInt(h / 2, 10);
                var left = parseInt(w / 2, 10);
                clip = 'rect(' + top + 'px ' + left + 'px ' + top + 'px ' + left + 'px)';
            }
        }
        opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';
        var d = opts.cssBefore.clip.match(/(\d+)/g);
        var t = parseInt(d[0], 10),
            r = parseInt(d[1], 10),
            b = parseInt(d[2], 10),
            l = parseInt(d[3], 10);
        opts.before.push(function(curr, next, opts) {
            if (curr == next) return;
            var $curr = $(curr),
                $next = $(next);
            $.fn.cycle.commonReset(curr, next, opts, true, true, false);
            opts.cssAfter.display = 'block';
            var step = 1,
                count = parseInt((opts.speedIn / 13), 10) - 1;
            (function f() {
                var tt = t ? t - parseInt(step * (t / count), 10) : 0;
                var ll = l ? l - parseInt(step * (l / count), 10) : 0;
                var bb = b < h ? b + parseInt(step * ((h - b) / count || 1), 10) : h;
                var rr = r < w ? r + parseInt(step * ((w - r) / count || 1), 10) : w;
                $next.css({
                    clip: 'rect(' + tt + 'px ' + rr + 'px ' + bb + 'px ' + ll + 'px)'
                });
                (step++ <= count) ? setTimeout(f, 13): $curr.css('display', 'none');
            })();
        });
        $.extend(opts.cssBefore, {
            display: 'block',
            opacity: 1,
            top: 0,
            left: 0
        });
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: 0
        };
    };
})(jQuery);; /*})'"*/
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
})(jQuery);

; /*})'"*/ ; /*})'"*/
(function($) {
    Drupal.behaviors.field_slideshow = {
        attach: function(context) {
            for (i in Drupal.settings.field_slideshow) {
                var settings = Drupal.settings.field_slideshow[i],
                    slideshow = $('div.' + i),
                    num_slides = slideshow.children().length,
                    $this = false;
                if (!slideshow.hasClass('field-slideshow-processed')) {
                    slideshow.addClass('field-slideshow-processed');
                    var max_outerWidth = 0;
                    var max_outerHeight = 0;
                    $('.field-slideshow-slide img', slideshow).each(function() {
                        $this = $(this);
                        max_outerWidth = Math.max(max_outerWidth, $this.outerWidth(true));
                        max_outerHeight = Math.max(max_outerHeight, $this.outerHeight(true));
                    });
                    $('.field-slideshow-slide a', slideshow).each(function() {
                        $this = $(this);
                        max_outerWidth = Math.max(max_outerWidth, $this.outerWidth(true));
                        max_outerHeight = Math.max(max_outerHeight, $this.outerHeight(true));
                    });
                    $('.field-slideshow-slide', slideshow).each(function() {
                        $this = $(this);
                        max_outerWidth = Math.max(max_outerWidth, $this.outerWidth(true));
                        max_outerHeight = Math.max(max_outerHeight, $this.outerHeight(true));
                    });
                    slideshow.css({
                        'padding-right': (max_outerWidth - parseInt(slideshow.css('width'))) + 'px',
                        'padding-bottom': (max_outerHeight - parseInt(slideshow.css('height'))) + 'px'
                    });
                    var options = {
                        resizing: 0,
                        fx: settings.fx,
                        speed: settings.speed,
                        timeout: parseInt(settings.timeout),
                        index: i,
                        settings: settings
                    }
                    if (settings.speed == "0" && settings.timeout == "0") options.fastOnEvent = true;
                    if (settings.controls) {
                        options.prev = "#" + i + "-controls .prev";
                        options.next = "#" + i + "-controls .next";
                    }
                    if (settings.pause) options.pause = true;
                    if (settings.pager != '') {
                        if (settings.pager == 'number' || settings.pager == 'image') options.pager = "#" + i + "-pager";
                        if ((settings.pager == 'image' || settings.pager == 'carousel') && num_slides > 1) {
                            options.pagerAnchorBuilder = function(idx, slide) {
                                return '#' + i + '-pager li:eq(' + idx + ') a';
                            };
                            if (settings.pager == 'carousel') {
                                var carouselops = {
                                    visible: parseInt(settings.carousel_visible),
                                    scroll: parseInt(settings.carousel_scroll),
                                    animation: parseInt(settings.carousel_speed),
                                    vertical: settings.carousel_vertical,
                                    initCallback: function(carousel) {
                                        $(".jcarousel-prev").addClass('carousel-prev');
                                        $(".jcarousel-next").addClass('carousel-next');
                                        if (carousel.options.visible && num_slides <= carousel.options.visible) {
                                            $(".carousel-prev, .carousel-next", carousel.container.parent()).addClass("hidden");
                                            return false;
                                        }
                                        $(".carousel-next", carousel.container.parent()).bind('click', function() {
                                            carousel.next();
                                            return false;
                                        });
                                        $(".carousel-prev", carousel.container.parent()).bind('click', function() {
                                            carousel.prev();
                                            return false;
                                        });
                                    }
                                };
                                if (!settings.carousel_skin) {
                                    carouselops.buttonNextHTML = null;
                                    carouselops.buttonPrevHTML = null;
                                }
                                if (parseInt(settings.carousel_circular)) carouselops.wrap = 'circular';
                                $("#" + i + "-carousel").jcarousel(carouselops);
                                options.pager = "#" + i + "-carousel .field-slideshow-pager";
                            }
                        }
                    }
                    options.before = function(currSlideElement, nextSlideElement, options, forwardFlag) {
                        var nextIndex = $(nextSlideElement).index();
                        if (options.settings.pager == 'image') {
                            $('li', options.pager).removeClass("activeSlide");
                            $('li:eq(' + nextIndex + ')', options.pager).addClass("activeSlide");
                        }
                        if (options.settings.pager == 'carousel' && parseInt(options.settings.carousel_follow) && parseInt(options.settings.carousel_circular) == 0) {
                            var carousel = $("#" + options.index + "-carousel").data("jcarousel");
                            carousel.scroll(nextIndex, true);
                        }
                    }
                    if (num_slides > 1) {
                        if (settings.start_on_hover) {
                            slideshow.cycle(options).cycle("pause").hover(function() {
                                $(this).cycle('resume');
                            }, function() {
                                $(this).cycle('pause');
                            });
                        } else {
                            slideshow.cycle(options);
                        }
                        if (settings.pager == 'number') {
                            $('.field-slideshow-pager a').each(function() {
                                $this = $(this);
                                $this.addClass('slide-' + $this.html());
                            });
                        }
                        $("#" + i + "-controls .play, #" + i + "-controls .pause").data("slideshow", slideshow);
                        $("#" + i + "-controls .play").click(function(e) {
                            e.preventDefault();
                            var target_slideshow = $(this).data("slideshow");
                            target_slideshow.cycle("resume", true);
                            $(this).hide();
                            $(this).parent().find(".pause").show();
                        });
                        $("#" + i + "-controls .pause").click(function(e) {
                            e.preventDefault();
                            var target_slideshow = $(this).data("slideshow");
                            target_slideshow.cycle("pause");
                            $(this).hide();
                            $(this).parent().find(".play").show();
                        });
                    }
                }
            }
            var rebuild_max_height = function(context) {
                var max_height = 0;
                var heights = $('.field-slideshow-slide', context).map(function() {
                        return $(this).height();
                    }).get(),
                    max_height = Math.max.apply(Math, heights);
                if (max_height > 0) {
                    context.css("height", max_height);
                }
            };
            if (jQuery.isFunction($.fn.imagesLoaded)) {
                $('.field-slideshow').each(function() {
                    $('img', this).imagesLoaded(function($images) {
                        rebuild_max_height($images.parents('.field-slideshow'));
                    });
                });
            } else {
                $(window).load(function() {
                    $('.field-slideshow').each(function() {
                        rebuild_max_height($(this))
                    })
                });
            }
            $(window).resize(function() {
                $('.field-slideshow').each(function() {
                    rebuild_max_height($(this))
                })
            });
        }
    }
})(jQuery);;; /*})'"*/
! function(e) {
    "use strict";
    e.fn.meanmenu = function(n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        n = e.extend(a, n);
        var t = document.documentElement.clientWidth || document.body.clientWidth;
        return this.each(function() {
            var e = n.meanMenuTarget,
                a = n.meanMenuTarget.clone();
            a.find(".contextual-links-wrapper").remove().find("ul.contextual-links").remove();
            var r = n.meanMenuContainer,
                i = n.meanMenuClose,
                u = n.meanMenuCloseSize,
                m = n.meanMenuOpen,
                s = n.meanRevealPosition,
                l = n.meanRevealPositionDistance,
                o = n.meanRevealColour,
                c = n.meanScreenWidth,
                d = n.meanNavPush,
                v = ".meanmenu-reveal",
                h = n.meanShowChildren,
                y = n.meanExpandableChildren,
                j = n.meanExpand,
                Q = n.meanContract,
                f = n.meanRemoveAttrs,
                g = n.onePage,
                p = n.meanDisplay,
                C = n.removeElements,
                x = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (x = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "",
                b = function() {
                    if ("center" === s) {
                        var e = document.documentElement.clientWidth || document.body.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", x ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                M = !1;
            "right" === s && (w = "right:" + l + ";left:auto;"), "left" === s && (w = "left:" + l + ";right:auto;"), b();
            var E = "",
                P = function() {
                    E.html(jQuery(E).is(".meanmenu-reveal.meanclose") ? i : m)
                },
                W = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(r).removeClass("mean-container"), jQuery(e).css("display", p), A = !1, M = !1, jQuery(C).removeClass("mean-remove")
                },
                k = function() {
                    var n = "background:" + o + ";color:" + o + ";" + w;
                    if (c >= t) {
                        jQuery(C).addClass("mean-remove"), M = !0, jQuery(r).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var i = jQuery(a).html();
                        jQuery(".mean-nav").html(i), f && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", d), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(m), E = jQuery(v), jQuery(".mean-nav ul").hide(), h ? y ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + u + '">' + j + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(j), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(Q), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), E.removeClass("meanclose"), jQuery(E).click(function(e) {
                            e.preventDefault(), A === !1 ? (E.css("text-align", "center"), E.css("text-indent", "0"), E.css("font-size", u), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), E.toggleClass("meanclose"), P(), jQuery(C).addClass("mean-remove")
                        }), g && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(E).toggleClass("meanclose").html(m)
                        })
                    } else W()
                };
            x || jQuery(window).resize(function() {
                t = document.documentElement.clientWidth || document.body.clientWidth, t > c, W(), c >= t ? (k(), b()) : W()
            }), jQuery(window).resize(function() {
                t = document.documentElement.clientWidth || document.body.clientWidth, x ? (b(), c >= t ? M === !1 && k() : W()) : (W(), c >= t && (k(), b()))
            }), k()
        })
    }
}(jQuery);; /*})'"*/ ; /*})'"*/
(function($) {
    Drupal.behaviors.responsive_menus_mean_menu = {
        attach: function(context, settings) {
            settings.responsive_menus = settings.responsive_menus || {};
            $.each(settings.responsive_menus, function(ind, iteration) {
                if (iteration.responsive_menus_style != 'mean_menu') {
                    return true;
                }
                if (!iteration.selectors.length) {
                    return;
                }
                $.each(iteration, function(key, value) {
                    if (value == 0) {
                        iteration[key] = false;
                    }
                    if (value == 1) {
                        iteration[key] = true;
                    }
                });
                $(iteration.selectors).once('responsive-menus-mean-menu', function() {
                    $(this).meanmenu({
                        meanMenuContainer: iteration.container || "body",
                        meanMenuClose: iteration.close_txt || "X",
                        meanMenuCloseSize: iteration.close_size || "18px",
                        meanMenuOpen: iteration.trigger_txt || "<span /><span /><span />",
                        meanRevealPosition: iteration.position || "right",
                        meanScreenWidth: iteration.media_size || "480",
                        meanExpand: iteration.expand_txt || "+",
                        meanContract: iteration.contract_txt || "-",
                        meanShowChildren: iteration.show_children,
                        meanExpandableChildren: iteration.expand_children,
                        meanRemoveAttrs: iteration.remove_attrs
                    });
                });
            });
        }
    };
}(jQuery));; /*})'"*/

(function($) {
    $.extend({
        tablesorter: new
        function() {
            var parsers = [],
                widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null,
                selectorHeaders: 'thead th',
                debug: false
            };

            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }
            this.benchmark = benchmark;

            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }

            function buildParserCache(table, $headers) {
                if (table.config.debug) {
                    var parsersDebug = "";
                }
                if (table.tBodies.length == 0) return;
                var rows = table.tBodies[0].rows;
                if (rows[0]) {
                    var list = [],
                        cells = rows[0].cells,
                        l = cells.length;
                    for (var i = 0; i < l; i++) {
                        var p = false;
                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {
                            p = getParserById($($headers[i]).metadata().sorter);
                        } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {
                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {
                            p = detectParserForColumn(table, rows, -1, i);
                        }
                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }
                        list.push(p);
                    }
                }
                if (table.config.debug) {
                    log(parsersDebug);
                }
                return list;
            };

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length,
                    node = false,
                    nodeValue = false,
                    keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                return parsers[0];
            }

            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }

            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }

            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }

            function buildCache(table) {
                if (table.config.debug) {
                    var cacheTime = new Date();
                }
                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                    totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                    parsers = table.config.parsers,
                    cache = {
                        row: [],
                        normalized: []
                    };
                for (var i = 0; i < totalRows; ++i) {
                    var c = $(table.tBodies[0].rows[i]),
                        cols = [];
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        continue;
                    }
                    cache.row.push(c);
                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }
                    cols.push(cache.normalized.length);
                    cache.normalized.push(cols);
                    cols = null;
                };
                if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }
                return cache;
            };

            function getElementText(config, node) {
                var text = "";
                if (!node) return "";
                if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;
                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof(config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }

            function appendToTable(table, cache) {
                if (table.config.debug) {
                    var appendTime = new Date()
                }
                var c = cache,
                    r = c.row,
                    n = c.normalized,
                    totalRows = n.length,
                    checkCell = (n[0].length - 1),
                    tableBody = $(table.tBodies[0]),
                    rows = [];
                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];
                    rows.push(r[pos]);
                    if (!table.config.appender) {
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }
                    }
                }
                if (table.config.appender) {
                    table.config.appender(table, rows);
                }
                rows = null;
                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }
                applyWidget(table);
                setTimeout(function() {
                    $(table).trigger("sortEnd");
                }, 0);
            };

            function buildHeaders(table) {
                if (table.config.debug) {
                    var time = new Date();
                }
                var meta = ($.metadata) ? true : false;
                var header_index = computeTableHeaderCellIndexes(table);
                $tableHeaders = $(table.config.selectorHeaders, table).each(function(index) {
                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
                    }
                    table.config.headerList[index] = this;
                });
                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }
                return $tableHeaders;
            };

            function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');
                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];
                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof(matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof(matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof(matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }

            function checkCellColSpan(table, rows, row) {
                var arr = [],
                    r = table.tHead.rows,
                    c = r[row].cells;
                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];
                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                    }
                }
                return arr;
            };

            function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                };
                return false;
            }

            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                };
                return false;
            }

            function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) return table.config.headers[i].lockedOrder;
                return false;
            }

            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {
                    getWidgetById(c[i]).format(table);
                }
            }

            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            };

            function formatSortingOrder(v) {
                if (typeof(v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }

            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }

            function setHeadersCss(table, $headers, list, css) {
                $headers.removeClass(css[0]).removeClass(css[1]);
                var h = [];
                $headers.each(function(offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                });
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }

            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function() {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    });
                    $(table).prepend(colgroup);
                };
            }

            function updateHeaderSortCount(table, sortList) {
                var c = table.config,
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i],
                        o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) {
                    var sortTime = new Date();
                }
                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;
                    dynamicExp += "var " + e + " = " + s;
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }
                dynamicExp += "return 0; ";
                dynamicExp += "}; ";
                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }
                eval(dynamicExp);
                cache.normalized.sort(sortWrapper);
                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }
                return cache;
            };

            function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]",
                    b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            };

            function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            };

            function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            };

            function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            };

            function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            };

            function sortText(a, b) {
                if (table.config.sortLocaleCompare) return a.localeCompare(b);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            };

            function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare) return b.localeCompare(a);
                return ((b < a) ? -1 : ((b > a) ? 1 : 0));
            };

            function sortNumeric(a, b) {
                return a - b;
            };

            function sortNumericDesc(a, b) {
                return b - a;
            };

            function getCachedSortType(parsers, i) {
                return parsers[i].type;
            };
            this.construct = function(settings) {
                return this.each(function() {
                    if (!this.tHead || !this.tBodies) return;
                    var $this, $document, $headers, cache, config, shiftDown = 0,
                        sortOrder;
                    this.config = {};
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    $this = $(this);
                    $.data(this, "tablesorter", config);
                    $headers = buildHeaders(this);
                    this.config.parsers = buildParserCache(this, $headers);
                    cache = buildCache(this);
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    fixColumnWidth(this);
                    $headers.click(function(e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            $this.trigger("sortStart");
                            var $cell = $(this);
                            var i = this.column;
                            this.order = this.count++ % 2;
                            if (this.lockedOrder) this.order = this.lockedOrder;
                            if (!e[config.sortMultiSortKey]) {
                                config.sortList = [];
                                if (config.sortForce != null) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                config.sortList.push([i, this.order]);
                            } else {
                                if (isValueInArray(i, config.sortList)) {
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j],
                                            o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    config.sortList.push([i, this.order]);
                                }
                            };
                            setTimeout(function() {
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable($this[0], multisort($this[0], config.sortList, cache));
                            }, 1);
                            return false;
                        }
                    }).mousedown(function() {
                        if (config.cancelSelection) {
                            this.onselectstart = function() {
                                return false
                            };
                            return false;
                        }
                    });
                    $this.bind("update", function() {
                        var me = this;
                        setTimeout(function() {
                            me.config.parsers = buildParserCache(me, $headers);
                            cache = buildCache(me);
                        }, 1);
                    }).bind("updateCell", function(e, cell) {
                        var config = this.config;
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
                    }).bind("sorton", function(e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        var sortList = config.sortList;
                        updateHeaderSortCount(this, sortList);
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        appendToTable(this, multisort(this, sortList, cache));
                    }).bind("appendCache", function() {
                        appendToTable(this, cache);
                    }).bind("applyWidgetId", function(e, id) {
                        getWidgetById(id).format(this);
                    }).bind("applyWidgets", function() {
                        applyWidget(this);
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    applyWidget(this);
                });
            };
            this.addParser = function(parser) {
                var l = parsers.length,
                    a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                };
            };
            this.addWidget = function(widget) {
                widgets.push(widget);
            };
            this.formatFloat = function(s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.formatInt = function(s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.isDigit = function(s, config) {
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            };
            this.clearTableBody = function(table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild) this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            };
        }
    });
    $.fn.extend({
        tablesorter: $.tablesorter.construct
    });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function(s) {
            return true;
        },
        format: function(s) {
            return $.trim(s.toLocaleLowerCase());
        },
        type: "text"
    });
    ts.addParser({
        id: "digit",
        is: function(s, table) {
            var c = table.config;
            return $.tablesorter.isDigit(s, c);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "currency",
        is: function(s) {
            return /^[£$€?.]/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "ipAddress",
        is: function(s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        },
        format: function(s) {
            var a = s.split("."),
                r = "",
                l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter.formatFloat(r);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "url",
        is: function(s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        },
        format: function(s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        },
        type: "text"
    });
    ts.addParser({
        id: "isoDate",
        is: function(s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
        },
        type: "numeric"
    });
    ts.addParser({
        id: "percent",
        is: function(s) {
            return /\%$/.test($.trim(s));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "usLongDate",
        is: function(s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "shortDate",
        is: function(s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        },
        format: function(s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "pt") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "uk") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function(s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function(s) {
            return false;
        },
        format: function(s, table, cell) {
            var c = table.config,
                p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        },
        type: "numeric"
    });
    ts.addWidget({
        id: "zebra",
        format: function(table) {
            if (table.config.debug) {
                var time = new Date();
            }
            var $tr, row = -1,
                odd;
            $("tr:visible", table.tBodies[0]).each(function(i) {
                $tr = $(this);
                if (!$tr.hasClass(table.config.cssChildRow)) row++;
                odd = (row % 2 == 0);
                $tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", time);
            }
        }
    });
})(jQuery);

; /*})'"*/ ; /*})'"*/
(function($) {
    $.extend({
        metadata: {
            defaults: {
                type: 'class',
                name: 'metadata',
                cre: /({.*})/,
                single: 'metadata'
            },
            setType: function(type, name) {
                this.defaults.type = type;
                this.defaults.name = name;
            },
            get: function(elem, opts) {
                var settings = $.extend({}, this.defaults, opts);
                if (!settings.single.length) settings.single = 'metadata';
                var data = $.data(elem, settings.single);
                if (data) return data;
                data = "{}";
                if (settings.type == "class") {
                    var m = settings.cre.exec(elem.className);
                    if (m)
                        data = m[1];
                } else if (settings.type == "elem") {
                    if (!elem.getElementsByTagName)
                        return undefined;
                    var e = elem.getElementsByTagName(settings.name);
                    if (e.length)
                        data = $.trim(e[0].innerHTML);
                } else if (elem.getAttribute != undefined) {
                    var attr = elem.getAttribute(settings.name);
                    if (attr)
                        data = attr;
                }
                if (data.indexOf('{') < 0)
                    data = "{" + data + "}";
                data = eval("(" + data + ")");
                $.data(elem, settings.single, data);
                return data;
            }
        }
    });
    $.fn.metadata = function(opts) {
        return $.metadata.get(this[0], opts);
    };
})(jQuery);;; /*})'"*/
(function($) {
    $.extend({
        tablesorterPager: new function() {
            function updatePageDisplay(c) {
                var s = $(c.cssPageDisplay, c.container).val((c.page + 1) + c.seperator + c.totalPages);
            }

            function setPageSize(table, size) {
                var c = table.config;
                c.size = size;
                c.totalPages = Math.ceil(c.totalRows / c.size);
                c.pagerPositionSet = false;
                moveToPage(table);
                fixPosition(table);
            }

            function fixPosition(table) {
                var c = table.config;
                if (!c.pagerPositionSet && c.positionFixed) {
                    var c = table.config,
                        o = $(table);
                    if (o.offset) {
                        c.container.css({
                            top: o.offset().top + o.height() + 'px',
                            position: 'absolute'
                        });
                    }
                    c.pagerPositionSet = true;
                }
            }

            function moveToFirstPage(table) {
                var c = table.config;
                c.page = 0;
                moveToPage(table);
            }

            function moveToLastPage(table) {
                var c = table.config;
                c.page = (c.totalPages - 1);
                moveToPage(table);
            }

            function moveToNextPage(table) {
                var c = table.config;
                c.page++;
                if (c.page >= (c.totalPages - 1)) {
                    c.page = (c.totalPages - 1);
                }
                moveToPage(table);
            }

            function moveToPrevPage(table) {
                var c = table.config;
                c.page--;
                if (c.page <= 0) {
                    c.page = 0;
                }
                moveToPage(table);
            }

            function moveToPage(table) {
                var c = table.config;
                if (c.page < 0 || c.page > (c.totalPages - 1)) {
                    c.page = 0;
                }
                renderTable(table, c.rowsCopy);
            }

            function renderTable(table, rows) {
                var c = table.config;
                var l = rows.length;
                var s = (c.page * c.size);
                var e = (s + c.size);
                if (e > rows.length) {
                    e = rows.length;
                }
                var tableBody = $(table.tBodies[0]);
                $.tablesorter.clearTableBody(table);
                for (var i = s; i < e; i++) {
                    var o = rows[i];
                    var l = o.length;
                    for (var j = 0; j < l; j++) {
                        tableBody[0].appendChild(o[j]);
                    }
                }
                fixPosition(table, tableBody);
                $(table).trigger("applyWidgets");
                if (c.page >= c.totalPages) {
                    moveToLastPage(table);
                }
                updatePageDisplay(c);
            }
            this.appender = function(table, rows) {
                var c = table.config;
                c.rowsCopy = rows;
                c.totalRows = rows.length;
                c.totalPages = Math.ceil(c.totalRows / c.size);
                renderTable(table, rows);
            };
            this.defaults = {
                size: 10,
                offset: 0,
                page: 0,
                totalRows: 0,
                totalPages: 0,
                container: null,
                cssNext: '.next',
                cssPrev: '.prev',
                cssFirst: '.first',
                cssLast: '.last',
                cssPageDisplay: '.pagedisplay',
                cssPageSize: '.pagesize',
                seperator: "/",
                positionFixed: true,
                appender: this.appender
            };
            this.construct = function(settings) {
                return this.each(function() {
                    config = $.extend(this.config, $.tablesorterPager.defaults, settings);
                    var table = this,
                        pager = config.container;
                    $(this).trigger("appendCache");
                    config.size = parseInt($(".pagesize", pager).val());
                    $(config.cssFirst, pager).click(function() {
                        moveToFirstPage(table);
                        return false;
                    });
                    $(config.cssNext, pager).click(function() {
                        moveToNextPage(table);
                        return false;
                    });
                    $(config.cssPrev, pager).click(function() {
                        moveToPrevPage(table);
                        return false;
                    });
                    $(config.cssLast, pager).click(function() {
                        moveToLastPage(table);
                        return false;
                    });
                    $(config.cssPageSize, pager).change(function() {
                        setPageSize(table, parseInt($(this).val()));
                        return false;
                    });
                });
            };
        }
    });
    $.fn.extend({
        tablesorterPager: $.tablesorterPager.construct
    });
})(jQuery);;; /*})'"*/
(function($) {
    Drupal.toggleFieldset = function(fieldset) {
        var $fieldset = $(fieldset);
        if ($fieldset.is('.collapsed')) {
            var $content = $('> .fieldset-wrapper', fieldset).hide();
            $fieldset.removeClass('collapsed').trigger({
                type: 'collapsed',
                value: false
            }).find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
            $content.slideDown({
                duration: 'fast',
                easing: 'linear',
                complete: function() {
                    Drupal.collapseScrollIntoView(fieldset);
                    fieldset.animating = false;
                },
                step: function() {
                    Drupal.collapseScrollIntoView(fieldset);
                }
            });
        } else {
            $fieldset.trigger({
                type: 'collapsed',
                value: true
            });
            $('> .fieldset-wrapper', fieldset).slideUp('fast', function() {
                $fieldset.addClass('collapsed').find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
                fieldset.animating = false;
            });
        }
    };
    Drupal.collapseScrollIntoView = function(node) {
        var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
        var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
        var posY = $(node).offset().top;
        var fudge = 55;
        if (posY + node.offsetHeight + fudge > h + offset) {
            if (node.offsetHeight > h) {
                window.scrollTo(0, posY);
            } else {
                window.scrollTo(0, posY + node.offsetHeight - h + fudge);
            }
        }
    };
    Drupal.behaviors.collapse = {
        attach: function(context, settings) {
            $('fieldset.collapsible', context).once('collapse', function() {
                var $fieldset = $(this);
                var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
                if ($fieldset.find('.error' + anchor).length) {
                    $fieldset.removeClass('collapsed');
                }
                var summary = $('<span class="summary"></span>');
                $fieldset.bind('summaryUpdated', function() {
                    var text = $.trim($fieldset.drupalGetSummary());
                    summary.html(text ? ' (' + text + ')' : '');
                }).trigger('summaryUpdated');
                var $legend = $('> legend .fieldset-legend', this);
                $('<span class="fieldset-legend-prefix element-invisible"></span>').append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide')).prependTo($legend).after(' ');
                var $link = $('<a class="fieldset-title" href="#"></a>').prepend($legend.contents()).appendTo($legend).click(function() {
                    var fieldset = $fieldset.get(0);
                    if (!fieldset.animating) {
                        fieldset.animating = true;
                        Drupal.toggleFieldset(fieldset);
                    }
                    return false;
                });
                $legend.append(summary);
            });
        }
    };
})(jQuery);;; /*})'"*/
(function($) {
    Drupal.behaviors.jumpMenu = {
        attach: function(context, settings) {
            $('form.jumpmenu', context).each(function() {
                var $select = $(this).find('select.jumpmenu');
                $select.val('_none');
                var submitCallback = function() {
                    var url = $(this).find('option:selected').val();
                    if (url != '_none') {
                        if ($select.hasClass('jumpmenu-no-tabs')) {
                            window.location = url;
                        } else {
                            window.open(url, 'newTab');
                        }
                        return false;
                    }
                }
                if ($select.hasClass('jumpmenu-hide-button')) {
                    $(this).find('.form-submit').hide();
                    $select.change(submitCallback);
                } else {
                    $(this).submit(submitCallback);
                }
            });
        }
    };
})(jQuery);;; /*})'"*/
(function($) {
    Drupal.behaviors.chosen = {
        attach: function(context, settings) {
            settings.chosen = settings.chosen || Drupal.settings.chosen;
            var selector = settings.chosen.selector;
            var getElementOptions = function(element) {
                var options = $.extend({}, settings.chosen.options);
                if (settings.chosen.minimum_width > 0) {
                    if ($(element).width() < settings.chosen.minimum_width) {
                        options.width = settings.chosen.minimum_width + 'px';
                    } else {
                        options.width = $(element).width() + 'px';
                    }
                }
                if ($(element).attr('multiple') && $(element).data('cardinality')) {
                    options.max_selected_options = $(element).data('cardinality');
                }
                return options;
            };
            $('select.chosen-enable, select.chosen-widget', context).once('chosen', function() {
                options = getElementOptions(this);
                $(this).chosen(options);
            });
            $(selector, context).not('#field-ui-field-overview-form select, #field-ui-display-overview-form select, .wysiwyg, .draggable select[name$="[weight]"], .draggable select[name$="[position]"], .chosen-disable, .chosen-processed').filter(function() {
                var minOptions = $(this).attr('multiple') ? settings.chosen.minimum_multiple : settings.chosen.minimum_single;
                if (!minOptions) {
                    return true;
                } else {
                    return $(this).find('option').length >= minOptions;
                }
            }).once('chosen', function() {
                options = getElementOptions(this);
                $(this).chosen(options);
            });
        }
    };
})(jQuery);; /*})'"*/
(function($) {
    Drupal.theme.prototype.justiceExampleButton = function(path, title) {
        return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
    };
    Drupal.behaviors.justiceExampleBehavior = {
        attach: function(context, settings) {
            $('.field-slideshow-controls .pause').click(function() {
                $(this).siblings('.play').css({
                    'display': 'block'
                });
            });
            bindPostscriptToggle(context);
            highlightViewsKeywords(context);
            if (context === document) {
                if ($('.ui-tabs-panel .field-slideshow-pager a').length) {
                    $('.ui-tabs-panel .field-slideshow-pager a').each(function(i) {
                        $(this).closest('.field-slideshow-wrapper').addClass('fpp-within-ui-tabs--js');
                        var title_text = $(this).closest('.field-slideshow-wrapper').find('.field-slideshow-slide .field--name-field-slide-title .field__item').eq(i).text()
                        $(this).text(title_text);
                    });
                }
            }
        }
    };

    function highlightViewsKeywords(context) {
        if ($('.views-exposed-widgets .form-type-textfield', context).length) {
            $('.views-exposed-widgets .form-type-textfield input', context).each(function() {
                if ($(this).val() != '') {
                    $('.view-content *').highlight($(this).val(), 'highlighted');
                }
            });
        }
    }

    function bindPostscriptToggle(context) {
        var postScriptWrapper = $('.l-postscript-wrapper', context);
        if (!panelsIpeIsBeingEdited() && $('.panels-ipe-control:visible', context).length) {
            var postScriptHeight = $('.panels-ipe-control', context).outerHeight();
            postScriptWrapper.once('justice', function() {
                $(this).css({
                    'bottom': postScriptHeight + 17
                });
                $(this).delay(400).slideToggle();
            });
        } else if (!panelsIpeIsBeingEdited()) {
            postScriptWrapper.once('justice', function() {
                $(this).slideToggle();
            });
        }
        $('.l-postscript-toggle', context).once('justice', function() {
            $(this).click(function() {
                $('.l-postscript', context).slideToggle();
            });
        });
        $('.panels-ipe-pseudobutton', context).click(function() {
            postScriptWrapper.hide();
        });
        $('.panels-ipe-edit-control-form .form-submit', context).click(function() {
            setTimeout(function() {
                postScriptWrapper.slideToggle();
            }, 2000)
        });
    }

    function panelsIpeIsBeingEdited() {
        for (var i in Drupal.settings.PanelsIPECacheKeys) {
            var key = Drupal.settings.PanelsIPECacheKeys[i];
            if ((typeof Drupal.PanelsIPE.editors[key] !== 'undefined') && Drupal.PanelsIPE.editors[key].editing) {
                return true;
            }
        }
    }
    $.fn.highlight = function(str, className) {
        var regex = new RegExp(str, "gi");
        return this.each(function() {
            $(this).contents().filter(function() {
                return this.nodeType == 3 && regex.test(this.nodeValue);
            }).replaceWith(function() {
                return (this.nodeValue || "").replace(regex, function(match) {
                    return "<span class=\"" + className + "\">" + match + "</span>";
                });
            });
        });
    };
    Drupal.behaviors.facetCollapse = {
        attach: function(context, settings) {
            if ($(".doj-facet-blocks").length) {
                return;
            }
            $("[id^=block-facetapi], #block-search-api-sorts-search-sorts", context).wrapAll('<div class="doj-facet-blocks" />');
            $(".doj-facet-blocks", context).before('<a class="doj-facet-blocks-toggle">' + Drupal.t('Filters') + '</a>');
            $('.doj-facet-blocks-toggle', context).click(function() {
                $(".doj-facet-blocks").toggle('fast');
                $(this).toggleClass("on");
            });
        }
    };
    Drupal.behaviors.sidebarMenuCollapse = {
        attach: function(context, settings) {
            $('.l-region--sidebar-first .block--og-menu-og-single-menu-block', context).once('doj-sidebar-menu-toggle').before('<a class="doj-sidebar-menu-toggle">' + Drupal.t('Menu') + '</a>');
            $('.doj-sidebar-menu-toggle', context).click(function() {
                $('.l-region--sidebar-first .block--og-menu-og-single-menu-block').toggle('fast');
                $(this).toggleClass("on");
            });
        }
    };
})(jQuery);;; /*})'"*/