(function($) {

    /**
     * A progressbar object. Initialized with the given id. Must be inserted into
     * the DOM afterwards through progressBar.element.
     *
     * method is the function which will perform the HTTP request to get the
     * progress bar state. Either "GET" or "POST".
     *
     * e.g. pb = new progressBar('myProgressBar');
     *      some_element.appendChild(pb.element);
     */
    Drupal.progressBar = function(id, updateCallback, method, errorCallback) {
        var pb = this;
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;

        // The WAI-ARIA setting aria-live="polite" will announce changes after users
        // have completed their current activity and not interrupt the screen reader.
        this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
        this.element.html('<div class="bar"><div class="filled"></div></div>' +
            '<div class="percentage"></div>' +
            '<div class="message">&nbsp;</div>');
    };

    /**
     * Set the percentage and status message for the progressbar.
     */
    Drupal.progressBar.prototype.setProgress = function(percentage, message) {
        if (percentage >= 0 && percentage <= 100) {
            $('div.filled', this.element).css('width', percentage + '%');
            $('div.percentage', this.element).html(percentage + '%');
        }
        $('div.message', this.element).html(message);
        if (this.updateCallback) {
            this.updateCallback(percentage, message, this);
        }
    };

    /**
     * Start monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.startMonitoring = function(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
    };

    /**
     * Stop monitoring progress via Ajax.
     */
    Drupal.progressBar.prototype.stopMonitoring = function() {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
    };

    /**
     * Request progress data from server.
     */
    Drupal.progressBar.prototype.sendPing = function() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.uri) {
            var pb = this;
            // When doing a post request, you need non-null data. Otherwise a
            // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
            $.ajax({
                type: this.method,
                url: this.uri,
                data: '',
                dataType: 'json',
                success: function(progress) {
                    // Display errors.
                    if (progress.status == 0) {
                        pb.displayError(progress.data);
                        return;
                    }
                    // Update display.
                    pb.setProgress(progress.percentage, progress.message);
                    // Schedule next timer.
                    pb.timer = setTimeout(function() {
                        pb.sendPing();
                    }, pb.delay);
                },
                error: function(xmlhttp) {
                    pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
                }
            });
        }
    };

    /**
     * Display errors on the page.
     */
    Drupal.progressBar.prototype.displayError = function(string) {
        var error = $('<div class="messages error"></div>').html(string);
        $(this.element).before(error).hide();

        if (this.errorCallback) {
            this.errorCallback(this);
        }
    };

})(jQuery);;;
(function($, window, document, undefined) {

    $(function() {
        $(document).ready(function() {

            // Can also be used with $(document).ready()

            $('.homepage-rotator').flexslider({
                animation: "fade",
                controlNav: "thumbnails",
                direction: "horizontal",
                //itemMargin: "15px"
                //controlNav: true
            });

        });
    });
}(jQuery, this, this.document));;
/*!
	Colorbox v1.4.27 - 2013-07-16
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t, e, i) {
    function o(i, o, n) {
        var r = e.createElement(i);
        return o && (r.id = te + o), n && (r.style.cssText = n), t(r)
    }

    function n() {
        return i.innerHeight ? i.innerHeight : t(i).height()
    }

    function r(t) {
        var e = E.length,
            i = (j + t) % e;
        return 0 > i ? e + i : i
    }

    function l(t, e) {
        return Math.round((/%/.test(t) ? ("x" === e ? H.width() : n()) / 100 : 1) * parseInt(t, 10))
    }

    function h(t, e) {
        return t.photo || t.photoRegex.test(e)
    }

    function s(t, e) {
        return t.retinaUrl && i.devicePixelRatio > 1 ? e.replace(t.photoRegex, t.retinaSuffix) : e
    }

    function a(t) {
        "contains" in v[0] && !v[0].contains(t.target) && (t.stopPropagation(), v.focus())
    }

    function d() {
        var e, i = t.data(A, Z);
        null == i ? (O = t.extend({}, Y), console && console.log && console.log("Error: cboxElement missing settings object")) : O = t.extend({}, i);
        for (e in O) t.isFunction(O[e]) && "on" !== e.slice(0, 2) && (O[e] = O[e].call(A));
        O.rel = O.rel || A.rel || t(A).data("rel") || "nofollow", O.href = O.href || t(A).attr("href"), O.title = O.title || A.title, "string" == typeof O.href && (O.href = t.trim(O.href))
    }

    function c(i, o) {
        t(e).trigger(i), se.trigger(i), t.isFunction(o) && o.call(A)
    }

    function u() {
        var t, e, i, o, n, r = te + "Slideshow_",
            l = "click." + te;
        O.slideshow && E[1] ? (e = function() {
            clearTimeout(t)
        }, i = function() {
            (O.loop || E[j + 1]) && (t = setTimeout(J.next, O.slideshowSpeed))
        }, o = function() {
            R.html(O.slideshowStop).unbind(l).one(l, n), se.bind(ne, i).bind(oe, e).bind(re, n), v.removeClass(r + "off").addClass(r + "on")
        }, n = function() {
            e(), se.unbind(ne, i).unbind(oe, e).unbind(re, n), R.html(O.slideshowStart).unbind(l).one(l, function() {
                J.next(), o()
            }), v.removeClass(r + "on").addClass(r + "off")
        }, O.slideshowAuto ? o() : n()) : v.removeClass(r + "off " + r + "on")
    }

    function p(i) {
        G || (A = i, d(), E = t(A), j = 0, "nofollow" !== O.rel && (E = t("." + ee).filter(function() {
            var e, i = t.data(this, Z);
            return i && (e = t(this).data("rel") || i.rel || this.rel), e === O.rel
        }), j = E.index(A), -1 === j && (E = E.add(A), j = E.length - 1)), g.css({
            opacity: parseFloat(O.opacity),
            cursor: O.overlayClose ? "pointer" : "auto",
            visibility: "visible"
        }).show(), V && v.add(g).removeClass(V), O.className && v.add(g).addClass(O.className), V = O.className, O.closeButton ? P.html(O.close).appendTo(x) : P.appendTo("<div/>"), $ || ($ = q = !0, v.css({
            visibility: "hidden",
            display: "block"
        }), W = o(ae, "LoadedContent", "width:0; height:0; overflow:hidden"), x.css({
            width: "",
            height: ""
        }).append(W), _ = b.height() + k.height() + x.outerHeight(!0) - x.height(), D = T.width() + C.width() + x.outerWidth(!0) - x.width(), N = W.outerHeight(!0), z = W.outerWidth(!0), O.w = l(O.initialWidth, "x"), O.h = l(O.initialHeight, "y"), J.position(), u(), c(ie, O.onOpen), B.add(S).hide(), v.focus(), O.trapFocus && e.addEventListener && (e.addEventListener("focus", a, !0), se.one(le, function() {
            e.removeEventListener("focus", a, !0)
        })), O.returnFocus && se.one(le, function() {
            t(A).focus()
        })), w())
    }

    function f() {
        !v && e.body && (X = !1, H = t(i), v = o(ae).attr({
            id: Z,
            "class": t.support.opacity === !1 ? te + "IE" : "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), g = o(ae, "Overlay").hide(), L = t([o(ae, "LoadingOverlay")[0], o(ae, "LoadingGraphic")[0]]), y = o(ae, "Wrapper"), x = o(ae, "Content").append(S = o(ae, "Title"), M = o(ae, "Current"), K = t('<button type="button"/>').attr({
            id: te + "Previous"
        }), I = t('<button type="button"/>').attr({
            id: te + "Next"
        }), R = o("button", "Slideshow"), L), P = t('<button type="button"/>').attr({
            id: te + "Close"
        }), y.append(o(ae).append(o(ae, "TopLeft"), b = o(ae, "TopCenter"), o(ae, "TopRight")), o(ae, !1, "clear:left").append(T = o(ae, "MiddleLeft"), x, C = o(ae, "MiddleRight")), o(ae, !1, "clear:left").append(o(ae, "BottomLeft"), k = o(ae, "BottomCenter"), o(ae, "BottomRight"))).find("div div").css({
            "float": "left"
        }), F = o(ae, !1, "position:absolute; width:9999px; visibility:hidden; display:none"), B = I.add(K).add(M).add(R), t(e.body).append(g, v.append(y, F)))
    }

    function m() {
        function i(t) {
            t.which > 1 || t.shiftKey || t.altKey || t.metaKey || t.ctrlKey || (t.preventDefault(), p(this))
        }
        return v ? (X || (X = !0, I.click(function() {
            J.next()
        }), K.click(function() {
            J.prev()
        }), P.click(function() {
            J.close()
        }), g.click(function() {
            O.overlayClose && J.close()
        }), t(e).bind("keydown." + te, function(t) {
            var e = t.keyCode;
            $ && O.escKey && 27 === e && (t.preventDefault(), J.close()), $ && O.arrowKey && E[1] && !t.altKey && (37 === e ? (t.preventDefault(), K.click()) : 39 === e && (t.preventDefault(), I.click()))
        }), t.isFunction(t.fn.on) ? t(e).on("click." + te, "." + ee, i) : t("." + ee).live("click." + te, i)), !0) : !1
    }

    function w() {
        var n, r, a, u = J.prep,
            p = ++de;
        q = !0, U = !1, A = E[j], d(), c(he), c(oe, O.onLoad), O.h = O.height ? l(O.height, "y") - N - _ : O.innerHeight && l(O.innerHeight, "y"), O.w = O.width ? l(O.width, "x") - z - D : O.innerWidth && l(O.innerWidth, "x"), O.mw = O.w, O.mh = O.h, O.maxWidth && (O.mw = l(O.maxWidth, "x") - z - D, O.mw = O.w && O.w < O.mw ? O.w : O.mw), O.maxHeight && (O.mh = l(O.maxHeight, "y") - N - _, O.mh = O.h && O.h < O.mh ? O.h : O.mh), n = O.href, Q = setTimeout(function() {
            L.show()
        }, 100), O.inline ? (a = o(ae).hide().insertBefore(t(n)[0]), se.one(he, function() {
            a.replaceWith(W.children())
        }), u(t(n))) : O.iframe ? u(" ") : O.html ? u(O.html) : h(O, n) ? (n = s(O, n), U = e.createElement("img"), t(U).addClass(te + "Photo").bind("error", function() {
            O.title = !1, u(o(ae, "Error").html(O.imgError))
        }).one("load", function() {
            var e;
            p === de && (U.alt = t(A).attr("alt") || t(A).attr("data-alt") || "", O.retinaImage && i.devicePixelRatio > 1 && (U.height = U.height / i.devicePixelRatio, U.width = U.width / i.devicePixelRatio), O.scalePhotos && (r = function() {
                U.height -= U.height * e, U.width -= U.width * e
            }, O.mw && U.width > O.mw && (e = (U.width - O.mw) / U.width, r()), O.mh && U.height > O.mh && (e = (U.height - O.mh) / U.height, r())), O.h && (U.style.marginTop = Math.max(O.mh - U.height, 0) / 2 + "px"), E[1] && (O.loop || E[j + 1]) && (U.style.cursor = "pointer", U.onclick = function() {
                J.next()
            }), U.style.width = U.width + "px", U.style.height = U.height + "px", setTimeout(function() {
                u(U)
            }, 1))
        }), setTimeout(function() {
            U.src = n
        }, 1)) : n && F.load(n, O.data, function(e, i) {
            p === de && u("error" === i ? o(ae, "Error").html(O.xhrError) : t(this).contents())
        })
    }
    var g, v, y, x, b, T, C, k, E, H, W, F, L, S, M, R, I, K, P, B, O, _, D, N, z, A, j, U, $, q, G, Q, J, V, X, Y = {
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
            inline: !1,
            html: !1,
            iframe: !1,
            fastIframe: !0,
            photo: !1,
            href: !1,
            title: !1,
            rel: !1,
            opacity: .9,
            preloading: !0,
            className: !1,
            retinaImage: !1,
            retinaUrl: !1,
            retinaSuffix: "@2x.$1",
            current: "image {current} of {total}",
            previous: "previous",
            next: "next",
            close: "close",
            xhrError: "This content failed to load.",
            imgError: "This image failed to load.",
            open: !1,
            returnFocus: !0,
            trapFocus: !0,
            reposition: !0,
            loop: !0,
            slideshow: !1,
            slideshowAuto: !0,
            slideshowSpeed: 2500,
            slideshowStart: "start slideshow",
            slideshowStop: "stop slideshow",
            photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
            onOpen: !1,
            onLoad: !1,
            onComplete: !1,
            onCleanup: !1,
            onClosed: !1,
            overlayClose: !0,
            escKey: !0,
            arrowKey: !0,
            top: !1,
            bottom: !1,
            left: !1,
            right: !1,
            fixed: !1,
            data: void 0,
            closeButton: !0
        },
        Z = "colorbox",
        te = "cbox",
        ee = te + "Element",
        ie = te + "_open",
        oe = te + "_load",
        ne = te + "_complete",
        re = te + "_cleanup",
        le = te + "_closed",
        he = te + "_purge",
        se = t("<a/>"),
        ae = "div",
        de = 0,
        ce = {};
    t.colorbox || (t(f), J = t.fn[Z] = t[Z] = function(e, i) {
        var o = this;
        if (e = e || {}, f(), m()) {
            if (t.isFunction(o)) o = t("<a/>"), e.open = !0;
            else if (!o[0]) return o;
            i && (e.onComplete = i), o.each(function() {
                t.data(this, Z, t.extend({}, t.data(this, Z) || Y, e))
            }).addClass(ee), (t.isFunction(e.open) && e.open.call(o) || e.open) && p(o[0])
        }
        return o
    }, J.position = function(e, i) {
        function o() {
            b[0].style.width = k[0].style.width = x[0].style.width = parseInt(v[0].style.width, 10) - D + "px", x[0].style.height = T[0].style.height = C[0].style.height = parseInt(v[0].style.height, 10) - _ + "px"
        }
        var r, h, s, a = 0,
            d = 0,
            c = v.offset();
        if (H.unbind("resize." + te), v.css({
                top: -9e4,
                left: -9e4
            }), h = H.scrollTop(), s = H.scrollLeft(), O.fixed ? (c.top -= h, c.left -= s, v.css({
                position: "fixed"
            })) : (a = h, d = s, v.css({
                position: "absolute"
            })), d += O.right !== !1 ? Math.max(H.width() - O.w - z - D - l(O.right, "x"), 0) : O.left !== !1 ? l(O.left, "x") : Math.round(Math.max(H.width() - O.w - z - D, 0) / 2), a += O.bottom !== !1 ? Math.max(n() - O.h - N - _ - l(O.bottom, "y"), 0) : O.top !== !1 ? l(O.top, "y") : Math.round(Math.max(n() - O.h - N - _, 0) / 2), v.css({
                top: c.top,
                left: c.left,
                visibility: "visible"
            }), y[0].style.width = y[0].style.height = "9999px", r = {
                width: O.w + z + D,
                height: O.h + N + _,
                top: a,
                left: d
            }, e) {
            var u = 0;
            t.each(r, function(t) {
                return r[t] !== ce[t] ? (u = e, void 0) : void 0
            }), e = u
        }
        ce = r, e || v.css(r), v.dequeue().animate(r, {
            duration: e || 0,
            complete: function() {
                o(), q = !1, y[0].style.width = O.w + z + D + "px", y[0].style.height = O.h + N + _ + "px", O.reposition && setTimeout(function() {
                    H.bind("resize." + te, J.position)
                }, 1), i && i()
            },
            step: o
        })
    }, J.resize = function(t) {
        var e;
        $ && (t = t || {}, t.width && (O.w = l(t.width, "x") - z - D), t.innerWidth && (O.w = l(t.innerWidth, "x")), W.css({
            width: O.w
        }), t.height && (O.h = l(t.height, "y") - N - _), t.innerHeight && (O.h = l(t.innerHeight, "y")), t.innerHeight || t.height || (e = W.scrollTop(), W.css({
            height: "auto"
        }), O.h = W.height()), W.css({
            height: O.h
        }), e && W.scrollTop(e), J.position("none" === O.transition ? 0 : O.speed))
    }, J.prep = function(i) {
        function n() {
            return O.w = O.w || W.width(), O.w = O.mw && O.mw < O.w ? O.mw : O.w, O.w
        }

        function l() {
            return O.h = O.h || W.height(), O.h = O.mh && O.mh < O.h ? O.mh : O.h, O.h
        }
        if ($) {
            var a, d = "none" === O.transition ? 0 : O.speed;
            W.empty().remove(), W = o(ae, "LoadedContent").append(i), W.hide().appendTo(F.show()).css({
                width: n(),
                overflow: O.scrolling ? "auto" : "hidden"
            }).css({
                height: l()
            }).prependTo(x), F.hide(), t(U).css({
                "float": "none"
            }), a = function() {
                function i() {
                    t.support.opacity === !1 && v[0].style.removeAttribute("filter")
                }
                var n, l, a = E.length,
                    u = "frameBorder",
                    p = "allowTransparency";
                $ && (l = function() {
                    clearTimeout(Q), L.hide(), c(ne, O.onComplete)
                }, S.html(O.title).add(W).show(), a > 1 ? ("string" == typeof O.current && M.html(O.current.replace("{current}", j + 1).replace("{total}", a)).show(), I[O.loop || a - 1 > j ? "show" : "hide"]().html(O.next), K[O.loop || j ? "show" : "hide"]().html(O.previous), O.slideshow && R.show(), O.preloading && t.each([r(-1), r(1)], function() {
                    var i, o, n = E[this],
                        r = t.data(n, Z);
                    r && r.href ? (i = r.href, t.isFunction(i) && (i = i.call(n))) : i = t(n).attr("href"), i && h(r, i) && (i = s(r, i), o = e.createElement("img"), o.src = i)
                })) : B.hide(), O.iframe ? (n = o("iframe")[0], u in n && (n[u] = 0), p in n && (n[p] = "true"), O.scrolling || (n.scrolling = "no"), t(n).attr({
                    src: O.href,
                    name: (new Date).getTime(),
                    "class": te + "Iframe",
                    allowFullScreen: !0,
                    webkitAllowFullScreen: !0,
                    mozallowfullscreen: !0
                }).one("load", l).appendTo(W), se.one(he, function() {
                    n.src = "//about:blank"
                }), O.fastIframe && t(n).trigger("load")) : l(), "fade" === O.transition ? v.fadeTo(d, 1, i) : i())
            }, "fade" === O.transition ? v.fadeTo(d, 0, function() {
                J.position(0, a)
            }) : J.position(d, a)
        }
    }, J.next = function() {
        !q && E[1] && (O.loop || E[j + 1]) && (j = r(1), p(E[j]))
    }, J.prev = function() {
        !q && E[1] && (O.loop || j) && (j = r(-1), p(E[j]))
    }, J.close = function() {
        $ && !G && (G = !0, $ = !1, c(re, O.onCleanup), H.unbind("." + te), g.fadeTo(O.fadeOut || 0, 0), v.stop().fadeTo(O.fadeOut || 0, 0, function() {
            v.add(g).css({
                opacity: 1,
                cursor: "auto"
            }).hide(), c(he), W.empty().remove(), setTimeout(function() {
                G = !1, c(le, O.onClosed)
            }, 1)
        }))
    }, J.remove = function() {
        v && (v.stop(), t.colorbox.close(), v.stop().remove(), g.remove(), G = !1, v = null, t("." + ee).removeData(Z).removeClass(ee), t(e).unbind("click." + te))
    }, J.element = function() {
        return t(A)
    }, J.settings = Y)
})(jQuery, document, window);;
/**
 * @file
 * Colorbox module init js.
 */

(function($) {

    Drupal.behaviors.initColorbox = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
                return;
            }

            if (settings.colorbox.mobiledetect && window.matchMedia) {
                // Disable Colorbox for small screens.
                var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
                if (mq.matches) {
                    return;
                }
            }

            // Use "data-colorbox-gallery" if set otherwise use "rel".
            settings.colorbox.rel = function() {
                if ($(this).data('colorbox-gallery')) {
                    return $(this).data('colorbox-gallery');
                } else {
                    return $(this).attr('rel');
                }
            };

            $('.colorbox', context)
                .once('init-colorbox')
                .colorbox(settings.colorbox);

            $(context).bind('cbox_complete', function() {
                Drupal.attachBehaviors('#cboxLoadedContent');
            });
        }
    };

})(jQuery);;
/**
 * @file
 * Colorbox module style js.
 */

(function($) {

    Drupal.behaviors.initColorboxDefaultStyle = {
        attach: function(context, settings) {
            $(context).bind('cbox_complete', function() {
                // Only run if there is a title.
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

})(jQuery);;
/**
 * @file
 * Colorbox module inline js.
 */

(function($) {

    Drupal.behaviors.initColorboxInline = {
        attach: function(context, settings) {
            if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
                return;
            }

            if (settings.colorbox.mobiledetect && window.matchMedia) {
                // Disable Colorbox for small screens.
                var mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
                if (mq.matches) {
                    return;
                }
            }

            $.urlParam = function(name, url) {
                if (name == 'fragment') {
                    var results = new RegExp('(#[^&#]*)').exec(url);
                } else {
                    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
                }
                if (!results) {
                    return '';
                }
                return results[1] || '';
            };
            $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
                transition: settings.colorbox.transition,
                speed: settings.colorbox.speed,
                opacity: settings.colorbox.opacity,
                slideshow: settings.colorbox.slideshow,
                slideshowAuto: settings.colorbox.slideshowAuto,
                slideshowSpeed: settings.colorbox.slideshowSpeed,
                slideshowStart: settings.colorbox.slideshowStart,
                slideshowStop: settings.colorbox.slideshowStop,
                current: settings.colorbox.current,
                previous: settings.colorbox.previous,
                next: settings.colorbox.next,
                close: settings.colorbox.close,
                overlayClose: settings.colorbox.overlayClose,
                maxWidth: settings.colorbox.maxWidth,
                maxHeight: settings.colorbox.maxHeight,
                innerWidth: function() {
                    return $.urlParam('width', $(this).attr('href'));
                },
                innerHeight: function() {
                    return $.urlParam('height', $(this).attr('href'));
                },
                title: function() {
                    return decodeURIComponent($.urlParam('title', $(this).attr('href')));
                },
                iframe: function() {
                    return $.urlParam('iframe', $(this).attr('href'));
                },
                inline: function() {
                    return $.urlParam('inline', $(this).attr('href'));
                },
                href: function() {
                    return $.urlParam('fragment', $(this).attr('href'));
                }
            });
        }
    };

})(jQuery);;

/* see Issue "autoresize" http://drupal.org/node/360549 */
(function($) {
    Drupal.behaviors.iframeModule = {
        attach: function(context, settings) {
            $('iframe.autoresize').each(function() {
                var offsetHeight = 20;
                var thisIframe = $(this);
                var iframeWaitInterval;

                function resizeHeight(iframe) {
                    if ($(iframe).length) {
                        /* Iframe yet loaded ? */
                        var iframeDoc = $(iframe)[0].contentDocument || $(iframe)[0].contentWindow.document;
                        var contentheight = 0;

                        try {
                            contentheight = $(iframeDoc).find('body').height();
                        } catch (e) {
                            elem = $(iframe)[0];
                            msg = $('<p><small>(' + Drupal.t('Iframe URL is not from the same domain - autoresize not working.') + ')</small></p>');
                            $(elem).after(msg);
                            clearInterval(iframeWaitInterval);
                        }

                        if (contentheight > 0) {
                            clearInterval(iframeWaitInterval);
                            try {
                                var frameElement = $(iframe)[0].frameElement || $(iframe)[0];
                                frameElement.style.height = (contentheight + offsetHeight) + 'px';
                                frameElement.scrolling = 'no';
                            } catch (e) {
                                /* here, ist not an correctable error */
                            }
                        }
                    }
                }
                var delayedResize = function() {
                    resizeHeight(thisIframe);
                }

                iframeWaitInterval = setInterval(delayedResize, 300);
                //setTimeout(delayedResize, 300);
                //resizeHeight(thisIframe);
            });
        }
    }
})(jQuery);


;
/*
 * jQuery FlexSlider v2.2.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
(function(e) {
    e.flexslider = function(t, n) {
        var r = e(t);
        r.vars = e.extend({}, e.flexslider.defaults, n);
        var i = r.vars.namespace,
            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            o = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
            u = "click touchend MSPointerUp",
            a = "",
            f, l = r.vars.direction === "vertical",
            c = r.vars.reverse,
            h = r.vars.itemWidth > 0,
            p = r.vars.animation === "fade",
            d = r.vars.asNavFor !== "",
            v = {},
            m = !0;
        e.data(t, "flexslider", r);
        v = {
            init: function() {
                r.animating = !1;
                r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0);
                isNaN(r.currentSlide) && (r.currentSlide = 0);
                r.animatingTo = r.currentSlide;
                r.atEnd = r.currentSlide === 0 || r.currentSlide === r.last;
                r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" "));
                r.slides = e(r.vars.selector, r);
                r.container = e(r.containerSelector, r);
                r.count = r.slides.length;
                r.syncExists = e(r.vars.sync).length > 0;
                r.vars.animation === "slide" && (r.vars.animation = "swing");
                r.prop = l ? "top" : "marginLeft";
                r.args = {};
                r.manualPause = !1;
                r.stopped = !1;
                r.started = !1;
                r.startTimeout = null;
                r.transitions = !r.vars.video && !p && r.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t)
                        if (e.style[t[n]] !== undefined) {
                            r.pfx = t[n].replace("Perspective", "").toLowerCase();
                            r.prop = "-" + r.pfx + "-transform";
                            return !0
                        } return !1
                }();
                r.vars.controlsContainer !== "" && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer));
                r.vars.manualControls !== "" && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls));
                if (r.vars.randomize) {
                    r.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    });
                    r.container.empty().append(r.slides)
                }
                r.doMath();
                r.setup("init");
                r.vars.controlNav && v.controlNav.setup();
                r.vars.directionNav && v.directionNav.setup();
                r.vars.keyboard && (e(r.containerSelector).length === 1 || r.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!r.animating && (t === 39 || t === 37)) {
                        var n = t === 39 ? r.getTarget("next") : t === 37 ? r.getTarget("prev") : !1;
                        r.flexAnimate(n, r.vars.pauseOnAction)
                    }
                });
                r.vars.mousewheel && r.bind("mousewheel", function(e, t, n, i) {
                    e.preventDefault();
                    var s = t < 0 ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                });
                r.vars.pausePlay && v.pausePlay.setup();
                r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init();
                if (r.vars.slideshow) {
                    r.vars.pauseOnHover && r.hover(function() {
                        !r.manualPlay && !r.manualPause && r.pause()
                    }, function() {
                        !r.manualPause && !r.manualPlay && !r.stopped && r.play()
                    });
                    if (!r.vars.pauseInvisible || !v.pauseInvisible.isHidden()) r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play()
                }
                d && v.asNav.setup();
                o && r.vars.touch && v.touch();
                (!p || p && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize);
                r.find("img").attr("draggable", "false");
                setTimeout(function() {
                    r.vars.start(r)
                }, 200)
            },
            asNav: {
                setup: function() {
                    r.asNav = !0;
                    r.animatingTo = Math.floor(r.currentSlide / r.move);
                    r.currentItem = r.currentSlide;
                    r.slides.removeClass(i + "active-slide").eq(r.currentItem).addClass(i + "active-slide");
                    if (!s) r.slides.click(function(t) {
                        t.preventDefault();
                        var n = e(this),
                            s = n.index(),
                            o = n.offset().left - e(r).scrollLeft();
                        if (o <= 0 && n.hasClass(i + "active-slide")) r.flexAnimate(r.getTarget("prev"), !0);
                        else if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass(i + "active-slide")) {
                            r.direction = r.currentItem < s ? "next" : "prev";
                            r.flexAnimate(s, r.vars.pauseOnAction, !1, !0, !0)
                        }
                    });
                    else {
                        t._slider = r;
                        r.slides.each(function() {
                            var t = this;
                            t._gesture = new MSGesture;
                            t._gesture.target = t;
                            t.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault();
                                e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                            }, !1);
                            t.addEventListener("MSGestureTap", function(t) {
                                t.preventDefault();
                                var n = e(this),
                                    i = n.index();
                                if (!e(r.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                    r.direction = r.currentItem < i ? "next" : "prev";
                                    r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0)
                                }
                            })
                        })
                    }
                }
            },
            controlNav: {
                setup: function() {
                    r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging",
                        n = 1,
                        s, o;
                    r.controlNavScaffold = e('<ol class="' + i + "control-nav " + i + t + '"></ol>');
                    if (r.pagingCount > 1)
                        for (var f = 0; f < r.pagingCount; f++) {
                            o = r.slides.eq(f);
                            s = r.vars.controlNav === "thumbnails" ? '<img src="' + o.attr("data-thumb") + '"/>' : "<a>" + n + "</a>";
                            if ("thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                                var l = o.attr("data-thumbcaption");
                                "" != l && undefined != l && (s += '<span class="' + i + 'caption">' + l + "</span>")
                            }
                            r.controlNavScaffold.append("<li>" + s + "</li>");
                            n++
                        }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold);
                    v.controlNav.set();
                    v.controlNav.active();
                    r.controlNavScaffold.delegate("a, img", u, function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                r.direction = s > r.currentSlide ? "next" : "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    r.controlNav = r.manualControls;
                    v.controlNav.active();
                    r.controlNav.bind(u, function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type) {
                            var n = e(this),
                                s = r.controlNav.index(n);
                            if (!n.hasClass(i + "active")) {
                                s > r.currentSlide ? r.direction = "next" : r.direction = "prev";
                                r.flexAnimate(s, r.vars.pauseOnAction)
                            }
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var t = r.vars.controlNav === "thumbnails" ? "img" : "a";
                    r.controlNav = e("." + i + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                },
                active: function() {
                    r.controlNav.removeClass(i + "active").eq(r.animatingTo).addClass(i + "active")
                },
                update: function(t, n) {
                    r.pagingCount > 1 && t === "add" ? r.controlNavScaffold.append(e("<li><a>" + r.count + "</a></li>")) : r.pagingCount === 1 ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove();
                    v.controlNav.set();
                    r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var t = e('<ul class="' + i + 'direction-nav"><li><a class="' + i + 'prev" href="#">' + r.vars.prevText + '</a></li><li><a class="' + i + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    if (r.controlsContainer) {
                        e(r.controlsContainer).append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.directionNav = e("." + i + "direction-nav li a", r)
                    }
                    v.directionNav.update();
                    r.directionNav.bind(u, function(t) {
                        t.preventDefault();
                        var n;
                        if (a === "" || a === t.type) {
                            n = e(this).hasClass(i + "next") ? r.getTarget("next") : r.getTarget("prev");
                            r.flexAnimate(n, r.vars.pauseOnAction)
                        }
                        a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = i + "disabled";
                    r.pagingCount === 1 ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : r.animatingTo === 0 ? r.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var t = e('<div class="' + i + 'pauseplay"><a></a></div>');
                    if (r.controlsContainer) {
                        r.controlsContainer.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r.controlsContainer)
                    } else {
                        r.append(t);
                        r.pausePlay = e("." + i + "pauseplay a", r)
                    }
                    v.pausePlay.update(r.vars.slideshow ? i + "pause" : i + "play");
                    r.pausePlay.bind(u, function(t) {
                        t.preventDefault();
                        if (a === "" || a === t.type)
                            if (e(this).hasClass(i + "pause")) {
                                r.manualPause = !0;
                                r.manualPlay = !1;
                                r.pause()
                            } else {
                                r.manualPause = !1;
                                r.manualPlay = !0;
                                r.play()
                            } a === "" && (a = t.type);
                        v.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    e === "play" ? r.pausePlay.removeClass(i + "pause").addClass(i + "play").html(r.vars.playText) : r.pausePlay.removeClass(i + "play").addClass(i + "pause").html(r.vars.pauseText)
                }
            },
            touch: function() {
                var e, n, i, o, u, a, f = !1,
                    d = 0,
                    v = 0,
                    m = 0;
                if (!s) {
                    t.addEventListener("touchstart", g, !1);

                    function g(s) {
                        if (r.animating) s.preventDefault();
                        else if (window.navigator.msPointerEnabled || s.touches.length === 1) {
                            r.pause();
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            d = s.touches[0].pageX;
                            v = s.touches[0].pageY;
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o;
                            e = l ? v : d;
                            n = l ? d : v;
                            t.addEventListener("touchmove", y, !1);
                            t.addEventListener("touchend", b, !1)
                        }
                    }

                    function y(t) {
                        d = t.touches[0].pageX;
                        v = t.touches[0].pageY;
                        u = l ? e - v : e - d;
                        f = l ? Math.abs(u) < Math.abs(d - n) : Math.abs(u) < Math.abs(v - n);
                        var s = 500;
                        if (!f || Number(new Date) - a > s) {
                            t.preventDefault();
                            if (!p && r.transitions) {
                                r.vars.animationLoop || (u /= r.currentSlide === 0 && u < 0 || r.currentSlide === r.last && u > 0 ? Math.abs(u) / o + 2 : 1);
                                r.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function b(s) {
                        t.removeEventListener("touchmove", y, !1);
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var l = c ? -u : u,
                                h = l > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(h) && (Number(new Date) - a < 550 && Math.abs(l) > 50 || Math.abs(l) > o / 2) ? r.flexAnimate(h, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        t.removeEventListener("touchend", b, !1);
                        e = null;
                        n = null;
                        u = null;
                        i = null
                    }
                } else {
                    t.style.msTouchAction = "none";
                    t._gesture = new MSGesture;
                    t._gesture.target = t;
                    t.addEventListener("MSPointerDown", w, !1);
                    t._slider = r;
                    t.addEventListener("MSGestureChange", E, !1);
                    t.addEventListener("MSGestureEnd", S, !1);

                    function w(e) {
                        e.stopPropagation();
                        if (r.animating) e.preventDefault();
                        else {
                            r.pause();
                            t._gesture.addPointer(e.pointerId);
                            m = 0;
                            o = l ? r.h : r.w;
                            a = Number(new Date);
                            i = h && c && r.animatingTo === r.last ? 0 : h && c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : h && r.currentSlide === r.last ? r.limit : h ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : c ? (r.last - r.currentSlide + r.cloneOffset) * o : (r.currentSlide + r.cloneOffset) * o
                        }
                    }

                    function E(e) {
                        e.stopPropagation();
                        var n = e.target._slider;
                        if (!n) return;
                        var r = -e.translationX,
                            s = -e.translationY;
                        m += l ? s : r;
                        u = m;
                        f = l ? Math.abs(m) < Math.abs(-r) : Math.abs(m) < Math.abs(-s);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                t._gesture.stop()
                            });
                            return
                        }
                        if (!f || Number(new Date) - a > 500) {
                            e.preventDefault();
                            if (!p && n.transitions) {
                                n.vars.animationLoop || (u = m / (n.currentSlide === 0 && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / o + 2 : 1));
                                n.setProps(i + u, "setTouch")
                            }
                        }
                    }

                    function S(t) {
                        t.stopPropagation();
                        var r = t.target._slider;
                        if (!r) return;
                        if (r.animatingTo === r.currentSlide && !f && u !== null) {
                            var s = c ? -u : u,
                                l = s > 0 ? r.getTarget("next") : r.getTarget("prev");
                            r.canAdvance(l) && (Number(new Date) - a < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2) ? r.flexAnimate(l, r.vars.pauseOnAction) : p || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                        }
                        e = null;
                        n = null;
                        u = null;
                        i = null;
                        m = 0
                    }
                }
            },
            resize: function() {
                if (!r.animating && r.is(":visible")) {
                    h || r.doMath();
                    if (p) v.smoothHeight();
                    else if (h) {
                        r.slides.width(r.computedW);
                        r.update(r.pagingCount);
                        r.setProps()
                    } else if (l) {
                        r.viewport.height(r.h);
                        r.setProps(r.h, "setTotal")
                    } else {
                        r.vars.smoothHeight && v.smoothHeight();
                        r.newSlides.width(r.computedW);
                        r.setProps(r.computedW, "setTotal")
                    }
                }
            },
            smoothHeight: function(e) {
                if (!l || p) {
                    var t = p ? r : r.viewport;
                    e ? t.animate({
                        height: r.slides.eq(r.animatingTo).height()
                    }, e) : t.height(r.slides.eq(r.animatingTo).height())
                }
            },
            sync: function(t) {
                var n = e(r.vars.sync).data("flexslider"),
                    i = r.animatingTo;
                switch (t) {
                    case "animate":
                        n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !n.playing && !n.asNav && n.play();
                        break;
                    case "pause":
                        n.pause()
                }
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) e[t] + "Hidden" in document && (v.pauseInvisible.visProp = e[t] + "Hidden");
                    if (v.pauseInvisible.visProp) {
                        var n = v.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(n, function() {
                            v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                },
                isHidden: function() {
                    return document[v.pauseInvisible.visProp] || !1
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(f);
                f = setTimeout(function() {
                    a = ""
                }, 3e3)
            }
        };
        r.flexAnimate = function(t, n, s, u, a) {
            !r.vars.animationLoop && t !== r.currentSlide && (r.direction = t > r.currentSlide ? "next" : "prev");
            d && r.pagingCount === 1 && (r.direction = r.currentItem < t ? "next" : "prev");
            if (!r.animating && (r.canAdvance(t, a) || s) && r.is(":visible")) {
                if (d && u) {
                    var f = e(r.vars.asNavFor).data("flexslider");
                    r.atEnd = t === 0 || t === r.count - 1;
                    f.flexAnimate(t, !0, !1, !0, a);
                    r.direction = r.currentItem < t ? "next" : "prev";
                    f.direction = r.direction;
                    if (Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || t === 0) {
                        r.currentItem = t;
                        r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                        return !1
                    }
                    r.currentItem = t;
                    r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                    t = Math.floor(t / r.visible)
                }
                r.animating = !0;
                r.animatingTo = t;
                n && r.pause();
                r.vars.before(r);
                r.syncExists && !a && v.sync("animate");
                r.vars.controlNav && v.controlNav.active();
                h || r.slides.removeClass(i + "active-slide").eq(t).addClass(i + "active-slide");
                r.atEnd = t === 0 || t === r.last;
                r.vars.directionNav && v.directionNav.update();
                if (t === r.last) {
                    r.vars.end(r);
                    r.vars.animationLoop || r.pause()
                }
                if (!p) {
                    var m = l ? r.slides.filter(":first").height() : r.computedW,
                        g, y, b;
                    if (h) {
                        g = r.vars.itemMargin;
                        b = (r.itemW + g) * r.move * r.animatingTo;
                        y = b > r.limit && r.visible !== 1 ? r.limit : b
                    } else r.currentSlide === 0 && t === r.count - 1 && r.vars.animationLoop && r.direction !== "next" ? y = c ? (r.count + r.cloneOffset) * m : 0 : r.currentSlide === r.last && t === 0 && r.vars.animationLoop && r.direction !== "prev" ? y = c ? 0 : (r.count + 1) * m : y = c ? (r.count - 1 - t + r.cloneOffset) * m : (t + r.cloneOffset) * m;
                    r.setProps(y, "", r.vars.animationSpeed);
                    if (r.transitions) {
                        if (!r.vars.animationLoop || !r.atEnd) {
                            r.animating = !1;
                            r.currentSlide = r.animatingTo
                        }
                        r.container.unbind("webkitTransitionEnd transitionend");
                        r.container.bind("webkitTransitionEnd transitionend", function() {
                            r.wrapup(m)
                        })
                    } else r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
                        r.wrapup(m)
                    })
                } else if (!o) {
                    r.slides.eq(r.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, r.vars.animationSpeed, r.vars.easing);
                    r.slides.eq(t).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, r.vars.animationSpeed, r.vars.easing, r.wrapup)
                } else {
                    r.slides.eq(r.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    });
                    r.slides.eq(t).css({
                        opacity: 1,
                        zIndex: 2
                    });
                    r.wrapup(m)
                }
                r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
            }
        };
        r.wrapup = function(e) {
            !p && !h && (r.currentSlide === 0 && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && r.animatingTo === 0 && r.vars.animationLoop && r.setProps(e, "jumpStart"));
            r.animating = !1;
            r.currentSlide = r.animatingTo;
            r.vars.after(r)
        };
        r.animateSlides = function() {
            !r.animating && m && r.flexAnimate(r.getTarget("next"))
        };
        r.pause = function() {
            clearInterval(r.animatedSlides);
            r.animatedSlides = null;
            r.playing = !1;
            r.vars.pausePlay && v.pausePlay.update("play");
            r.syncExists && v.sync("pause")
        };
        r.play = function() {
            r.playing && clearInterval(r.animatedSlides);
            r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed);
            r.started = r.playing = !0;
            r.vars.pausePlay && v.pausePlay.update("pause");
            r.syncExists && v.sync("play")
        };
        r.stop = function() {
            r.pause();
            r.stopped = !0
        };
        r.canAdvance = function(e, t) {
            var n = d ? r.pagingCount - 1 : r.last;
            return t ? !0 : d && r.currentItem === r.count - 1 && e === 0 && r.direction === "prev" ? !0 : d && r.currentItem === 0 && e === r.pagingCount - 1 && r.direction !== "next" ? !1 : e === r.currentSlide && !d ? !1 : r.vars.animationLoop ? !0 : r.atEnd && r.currentSlide === 0 && e === n && r.direction !== "next" ? !1 : r.atEnd && r.currentSlide === n && e === 0 && r.direction === "next" ? !1 : !0
        };
        r.getTarget = function(e) {
            r.direction = e;
            return e === "next" ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : r.currentSlide === 0 ? r.last : r.currentSlide - 1
        };
        r.setProps = function(e, t, n) {
            var i = function() {
                var n = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo,
                    i = function() {
                        if (h) return t === "setTouch" ? e : c && r.animatingTo === r.last ? 0 : c ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
                        switch (t) {
                            case "setTotal":
                                return c ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                            case "setTouch":
                                return c ? e : e;
                            case "jumpEnd":
                                return c ? e : r.count * e;
                            case "jumpStart":
                                return c ? r.count * e : e;
                            default:
                                return e
                        }
                    }();
                return i * -1 + "px"
            }();
            if (r.transitions) {
                i = l ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)";
                n = n !== undefined ? n / 1e3 + "s" : "0s";
                r.container.css("-" + r.pfx + "-transition-duration", n)
            }
            r.args[r.prop] = i;
            (r.transitions || n === undefined) && r.container.css(r.args)
        };
        r.setup = function(t) {
            if (!p) {
                var n, s;
                if (t === "init") {
                    r.viewport = e('<div class="' + i + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(r).append(r.container);
                    r.cloneCount = 0;
                    r.cloneOffset = 0;
                    if (c) {
                        s = e.makeArray(r.slides).reverse();
                        r.slides = e(s);
                        r.container.empty().append(r.slides)
                    }
                }
                if (r.vars.animationLoop && !h) {
                    r.cloneCount = 2;
                    r.cloneOffset = 1;
                    t !== "init" && r.container.find(".clone").remove();
                    r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden", "true"))
                }
                r.newSlides = e(r.vars.selector, r);
                n = c ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset;
                if (l && !h) {
                    r.container.height((r.count + r.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        r.newSlides.css({
                            display: "block"
                        });
                        r.doMath();
                        r.viewport.height(r.h);
                        r.setProps(n * r.h, "init")
                    }, t === "init" ? 100 : 0)
                } else {
                    r.container.width((r.count + r.cloneCount) * 200 + "%");
                    r.setProps(n * r.computedW, "init");
                    setTimeout(function() {
                        r.doMath();
                        r.newSlides.css({
                            width: r.computedW,
                            "float": "left",
                            display: "block"
                        });
                        r.vars.smoothHeight && v.smoothHeight()
                    }, t === "init" ? 100 : 0)
                }
            } else {
                r.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                t === "init" && (o ? r.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : r.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(r.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, r.vars.animationSpeed, r.vars.easing));
                r.vars.smoothHeight && v.smoothHeight()
            }
            h || r.slides.removeClass(i + "active-slide").eq(r.currentSlide).addClass(i + "active-slide")
        };
        r.doMath = function() {
            var e = r.slides.first(),
                t = r.vars.itemMargin,
                n = r.vars.minItems,
                i = r.vars.maxItems;
            r.w = r.viewport === undefined ? r.width() : r.viewport.width();
            r.h = e.height();
            r.boxPadding = e.outerWidth() - e.width();
            if (h) {
                r.itemT = r.vars.itemWidth + t;
                r.minW = n ? n * r.itemT : r.w;
                r.maxW = i ? i * r.itemT - t : r.w;
                r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth;
                r.visible = Math.floor(r.w / r.itemW);
                r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible;
                r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1);
                r.last = r.pagingCount - 1;
                r.limit = r.pagingCount === 1 ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t
            } else {
                r.itemW = r.w;
                r.pagingCount = r.count;
                r.last = r.count - 1
            }
            r.computedW = r.itemW - r.boxPadding
        };
        r.update = function(e, t) {
            r.doMath();
            if (!h) {
                e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && e !== 0 && (r.currentSlide -= 1);
                r.animatingTo = r.currentSlide
            }
            if (r.vars.controlNav && !r.manualControls)
                if (t === "add" && !h || r.pagingCount > r.controlNav.length) v.controlNav.update("add");
                else if (t === "remove" && !h || r.pagingCount < r.controlNav.length) {
                if (h && r.currentSlide > r.last) {
                    r.currentSlide -= 1;
                    r.animatingTo -= 1
                }
                v.controlNav.update("remove", r.last)
            }
            r.vars.directionNav && v.directionNav.update()
        };
        r.addSlide = function(t, n) {
            var i = e(t);
            r.count += 1;
            r.last = r.count - 1;
            l && c ? n !== undefined ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : n !== undefined ? r.slides.eq(n).before(i) : r.container.append(i);
            r.update(n, "add");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.added(r)
        };
        r.removeSlide = function(t) {
            var n = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1;
            r.last = r.count - 1;
            isNaN(t) ? e(t, r.slides).remove() : l && c ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove();
            r.doMath();
            r.update(n, "remove");
            r.slides = e(r.vars.selector + ":not(.clone)", r);
            r.setup();
            r.vars.removed(r)
        };
        v.init()
    };
    e(window).blur(function(e) {
        focused = !1
    }).focus(function(e) {
        focused = !0
    });
    e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    e.fn.flexslider = function(t) {
        t === undefined && (t = {});
        if (typeof t == "object") return this.each(function() {
            var n = e(this),
                r = t.selector ? t.selector : ".slides > li",
                i = n.find(r);
            if (i.length === 1 && t.allowOneSlide === !0 || i.length === 0) {
                i.fadeIn(400);
                t.start && t.start(n)
            } else n.data("flexslider") === undefined && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case "play":
                n.play();
                break;
            case "pause":
                n.pause();
                break;
            case "stop":
                n.stop();
                break;
            case "next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                typeof t == "number" && n.flexAnimate(t, !0)
        }
    }
})(jQuery);;
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
(function($) {
    Drupal.settings.views = Drupal.settings.views || {
        'ajax_path': '/views/ajax'
    };

    Drupal.quicktabs = Drupal.quicktabs || {};

    Drupal.quicktabs.getQTName = function(el) {
        return el.id.substring(el.id.indexOf('-') + 1);
    }

    Drupal.behaviors.quicktabs = {
        attach: function(context, settings) {
            $.extend(true, Drupal.settings, settings);
            $('.quicktabs-wrapper', context).once(function() {
                Drupal.quicktabs.prepare(this);
            });
        }
    }

    // Setting up the inital behaviours
    Drupal.quicktabs.prepare = function(el) {
        // el.id format: "quicktabs-$name"
        var qt_name = Drupal.quicktabs.getQTName(el);
        var $ul = $(el).find('ul.quicktabs-tabs:first');

        $("ul.quicktabs-tabs li a span#active-quicktabs-tab").remove();

        $ul.find('li a').each(function(i, element) {
            element.myTabIndex = i;
            element.qt_name = qt_name;

            var tab = new Drupal.quicktabs.tab(element);
            var parent_li = $(element).parents('li').get(0);
            if ($(parent_li).hasClass('active')) {
                $(element).addClass('quicktabs-loaded');
                $(element).append('<span id="active-quicktabs-tab" class="element-invisible">' + Drupal.t('(active tab)') + '</span>');
            }
            $(element).once(function() {
                $(this).bind('click', {
                    tab: tab
                }, Drupal.quicktabs.clickHandler);
            });
        });
    }

    Drupal.quicktabs.clickHandler = function(event) {
        var tab = event.data.tab;
        var element = this;
        // Set clicked tab to active.
        $(this).parents('li').siblings().removeClass('active');
        $(this).parents('li').addClass('active');

        $("ul.quicktabs-tabs li a span#active-quicktabs-tab").remove();
        $(this).append('<span id="active-quicktabs-tab" class="element-invisible">' + Drupal.t('(active tab)') + '</span>');

        // Hide all tabpages.
        tab.container.children().addClass('quicktabs-hide');

        if (!tab.tabpage.hasClass("quicktabs-tabpage")) {
            tab = new Drupal.quicktabs.tab(element);
        }

        tab.tabpage.removeClass('quicktabs-hide');
        $(element).trigger('switchtab');
        return false;
    }

    // Constructor for an individual tab
    Drupal.quicktabs.tab = function(el) {
        this.element = el;
        this.tabIndex = el.myTabIndex;
        var qtKey = 'qt_' + el.qt_name;
        var i = 0;
        for (var key in Drupal.settings.quicktabs[qtKey].tabs) {
            if (i == this.tabIndex) {
                this.tabObj = Drupal.settings.quicktabs[qtKey].tabs[key];
                this.tabKey = key;
            }
            i++;
        }
        this.tabpage_id = 'quicktabs-tabpage-' + el.qt_name + '-' + this.tabKey;
        this.container = $('#quicktabs-container-' + el.qt_name);
        this.tabpage = this.container.find('#' + this.tabpage_id);
    }

    if (Drupal.ajax) {
        /**
         * Handle an event that triggers an AJAX response.
         *
         * We unfortunately need to override this function, which originally comes from
         * misc/ajax.js, in order to be able to cache loaded tabs, i.e. once a tab
         * content has loaded it should not need to be loaded again.
         *
         * I have removed all comments that were in the original core function, so that
         * the only comments inside this function relate to the Quicktabs modification
         * of it.
         */
        Drupal.ajax.prototype.eventResponse = function(element, event) {
            var ajax = this;

            if (ajax.ajaxing) {
                return false;
            }

            try {
                if (ajax.form) {
                    if (ajax.setClick) {
                        element.form.clk = element;
                    }

                    ajax.form.ajaxSubmit(ajax.options);
                } else {
                    // Do not perform an ajax request for already loaded Quicktabs content.
                    if (!$(element).hasClass('quicktabs-loaded')) {
                        ajax.beforeSerialize(ajax.element, ajax.options);
                        $.ajax(ajax.options);
                        if ($(element).parents('ul').hasClass('quicktabs-tabs')) {
                            $(element).addClass('quicktabs-loaded');
                        }
                    }
                }
            } catch (e) {
                ajax.ajaxing = false;
                alert("An error occurred while attempting to process " + ajax.options.url + ": " + e.message);
            }
            return false;
        };
    }


})(jQuery);;
/**
 * @file
 * Simple responsification of menus.
 */
(function($) {
    /**
     * Handle clicks & toggling the menu.
     */
    var toggler_click = function() {
        $(this).parent().toggleClass('responsive-toggled');
    };
    /**
     * Unbind other mouse events on the menu items.
     *
     * @todo
     *   Not sure if it works 100%.
     *   Doesn't restore binds when out-of-responsive (if window dragging).
     */
    function remove_mouse_events(menuElement) {
        // Determine jQuery version and what disable options we have.
        var jqVersion = $.fn.jquery;
        if (jqVersion < 1.7) {
            $(menuElement).die('mouseover mouseout mouseenter mouseleave');
            $(menuElement + ' li').die('mouseover mouseout mouseenter mouseleave');
            $(menuElement + ' li a').die('mouseover mouseout mouseenter mouseleave');
        } else {
            $(menuElement).off('hover');
            $(menuElement + ' li').off('hover');
            $(menuElement + ' li a').off('hover');
        }
        $(menuElement).unbind('mouseover mouseout mouseenter mouseleave');
        $(menuElement + ' li').unbind('mouseover mouseout mouseenter mouseleave');
        $(menuElement + ' li a').unbind('mouseover mouseout mouseenter mouseleave');
    }

    /**
     * Store classes & IDs for restoring later (if window dragging).
     */
    function store_classes_ids(menuElement) {
        if (!$(menuElement).attr('id')) {
            $(menuElement).attr('id', 'rm-no-id-main');
        }
        if (!$(menuElement).attr('class')) {
            $(menuElement).attr('class', 'rm-no-class');
        }
        $(menuElement).data('removeattr', true)
            .data('rmids', $(menuElement).attr('id'))
            .data('rmclasses', $(menuElement).attr('class'));
        // Handle ULs if selector is parent div.
        var incr = 0;
        $(menuElement).find('ul').each(function() {
            incr++;
            // Prevent error if there is no id.
            if (!$(this).attr('id')) {
                $(this).attr('id', 'rm-no-id-' + incr);
            }
            // Prevent error if there is no class.
            if (!$(this).attr('class')) {
                $(this).attr('class', 'rm-no-class');
            }
            $(this).data('removeattr', true)
                .data('rmids', $(this).attr('id'))
                .data('rmclasses', $(this).attr('class'));
        });
        // Finally, add our class to the parent.
        $(menuElement).addClass('responsive-menus-simple');
    }

    /**
     * Remove classes & IDs from original menu for easier theming.
     */
    function remove_classes_ids(menuElement) {
        // Handle ULs if selector is parent div.
        $(menuElement).find('ul').each(function() {
            $(this).attr('class', 'rm-removed').attr('id', 'rm-removed');
        });
        // Remove classes/IDs.
        $(menuElement).attr('class', 'responsive-menus-simple').attr('id', 'rm-removed');
    }

    // Iterate through selectors, check window sizes, add some classes.
    Drupal.behaviors.responsive_menus = {
        attach: function(context, settings) {
            settings.responsive_menus = settings.responsive_menus || {};
            $('body').once('responsive-menus-load', function() {
                // Only doing this themes that don't include a viewport attribute.
                // e.g. Bartik for testing out-of-the-box... yeah, stupid.
                if (!$('meta[name=viewport]').length > 0) {
                    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
                }
                // Window width with legacy browsers.
                var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                $.each(settings.responsive_menus, function(ind, iteration) {
                    if (iteration.responsive_menus_style != 'responsive_menus_simple') {
                        return true;
                    }
                    if (!iteration.selectors.length) {
                        return true;
                    }
                    var $media_unit = iteration.media_unit || 'px';
                    if ($media_unit === 'em') {
                        var $base_font_size = parseFloat($('body').css('font-size'));
                        var $media_size = iteration.media_size * $base_font_size || 768;
                    } else {
                        var $media_size = iteration.media_size || 768;
                    }

                    // Handle clicks & toggling.
                    var toggler_class = '';
                    var toggler_text = iteration.toggler_text;
                    // Iterate through our selectors.
                    $.each(iteration.selectors, function(index, value) {
                        // Stop if there is no menu element.
                        if ($(value).length < 1) {
                            return true;
                        }
                        // Handle nested menus.  Make sure we get the first, but not children.
                        if ($(value).length > 1) {
                            $(value).each(function(val_index) {
                                if (!$(this).parents('ul').length) {
                                    if (!$(this).hasClass('responsive-menus-simple')) {
                                        toggler_class = 'responsive-menus-' + ind + '-' + index + '-' + val_index;
                                        // Store classes & IDs before removing.
                                        if (iteration.remove_attributes) {
                                            store_classes_ids(this);
                                        }
                                        $(this).wrap('<div data-mediasize="' + $media_size + '" class="responsive-menus ' + toggler_class + '" />');
                                        $('.' + toggler_class).prepend('<span class="toggler">' + toggler_text + '</span>');
                                        $('.' + toggler_class + ' .toggler').bind('click', toggler_click);
                                        // Unbind other mouse events.
                                        if (iteration.disable_mouse_events) {
                                            //$(this).data('disablemouse', true);
                                            remove_mouse_events(this);
                                        }
                                        // Use absolute positioning.
                                        if (iteration.absolute) {
                                            $('.' + toggler_class).addClass('absolute');
                                        }
                                        // Handle first size check.
                                        if (windowWidth <= $media_size) {
                                            // Remove attributes setting.
                                            if (iteration.remove_attributes) {
                                                remove_classes_ids(this);
                                            }
                                            $('.' + toggler_class).addClass('responsified');
                                        }
                                    }
                                }
                            });
                        } else {
                            // Single level menus.
                            if (!$(value).hasClass('responsive-menus-simple')) {
                                toggler_class = 'responsive-menus-' + ind + '-' + index;
                                // Store classes & IDs before removing.
                                if (iteration.remove_attributes) {
                                    store_classes_ids(value);
                                }
                                $(value).wrap('<div data-mediasize="' + $media_size + '" class="responsive-menus ' + toggler_class + '" />');
                                $('.' + toggler_class).prepend('<span class="toggler">' + toggler_text + '</span>');
                                $('.' + toggler_class + ' .toggler').bind('click', toggler_click);
                                // Unbind other mouse events.
                                if (iteration.disable_mouse_events) {
                                    // @todo For rebinding mouse events.
                                    /*if ($(value + ' li a').data('events')) {
                                      $(value).data('tmpevents', $(value + ' li a').data('events'));
                                    }*/
                                    remove_mouse_events(value);
                                }
                                // Use absolute positioning.
                                if (iteration.absolute) {
                                    $('.' + toggler_class).addClass('absolute');
                                }
                                // Handle first size check.
                                if (windowWidth <= $media_size) {
                                    // Remove attributes setting.
                                    if (iteration.remove_attributes) {
                                        remove_classes_ids(value);
                                    }
                                    $('.' + toggler_class).addClass('responsified');
                                }
                            }
                        }
                    });
                });
                // Handle window resizing.
                $(window).resize(function() {
                    // Window width with legacy browsers.
                    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    $('.responsive-menus').each(function(menuIndex, menuValue) {
                        var mediasize = $(this).data('mediasize') || 768;
                        // Prevent menu from going off the screen.  This only happens in
                        // non-responsive themes (like Bartik default), but it looks bad.
                        if ($(this).width() > windowWidth) {
                            $(this).data('nonresponsive', true);
                            $(this).width(windowWidth);
                        }
                        var menuElement = $(this).find('.responsive-menus-simple');
                        if (windowWidth >= mediasize) {
                            if (menuElement.data('removeattr')) {
                                menuElement.addClass(menuElement.data('rmclasses'));
                                menuElement.attr('id', menuElement.data('rmids'));
                                menuElement.find('ul').each(function() {
                                    $(this).addClass($(this).data('rmclasses'));
                                    $(this).attr('id', $(this).data('rmids'));
                                });
                            }
                            $(this).removeClass('responsified');
                        }
                        if (windowWidth <= mediasize) {
                            // Now fix repercussions for handling non-responsive themes above.
                            // Stretch width back out w/ the screen.
                            if ($(this).data('nonresponsive') && $(this).width() < windowWidth) {
                                $(this).width(windowWidth);
                            }
                            if (menuElement.data('removeattr')) {
                                remove_classes_ids(menuElement);
                            }
                            $(this).addClass('responsified');
                        }
                    });
                });
            });
        }
    };

}(jQuery));;