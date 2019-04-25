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
})(jQuery, document, window);; /**/
/* Source and licensing information for the line(s) below can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/paginationjs/dist/pagination.js. */
(function(global, $) {
    if (typeof $ === 'undefined') throwError('Pagination requires jQuery.');
    var pluginName = 'pagination',
        pluginHookMethod = 'addHook',
        eventPrefix = '__pagination-';
    if ($.fn.pagination) pluginName = 'pagination2';
    $.fn[pluginName] = function(options) {
        if (typeof options === 'undefined') return this;
        var container = $(this),
            attributes = $.extend({}, $.fn[pluginName].defaults, options),
            pagination = {
                initialize: function() {
                    var self = this;
                    if (!container.data('pagination')) container.data('pagination', {});
                    if (self.callHook('beforeInit') === false) return;
                    if (container.data('pagination').initialized) $('.paginationjs', container).remove();
                    self.disabled = !!attributes.disabled;
                    var model = self.model = {
                        pageRange: attributes.pageRange,
                        pageSize: attributes.pageSize
                    };
                    self.parseDataSource(attributes.dataSource, function(dataSource) {
                        self.isAsync = Helpers.isString(dataSource);
                        if (Helpers.isArray(dataSource)) model.totalNumber = attributes.totalNumber = dataSource.length;
                        self.isDynamicTotalNumber = self.isAsync && attributes.totalNumberLocator;
                        if (attributes.hideWhenLessThanOnePage)
                            if (self.getTotalPage() <= 1) return;
                        var el = self.render(true);
                        if (attributes.className) el.addClass(attributes.className);
                        model.el = el;
                        container[attributes.position === 'bottom' ? 'append' : 'prepend'](el);
                        self.observer();
                        container.data('pagination').initialized = true;
                        self.callHook('afterInit', el)
                    })
                },
                render: function(isBoot) {
                    var self = this,
                        model = self.model,
                        el = model.el || $('<div class="paginationjs"></div>'),
                        isForced = isBoot !== true;
                    self.callHook('beforeRender', isForced);
                    var currentPage = model.pageNumber || attributes.pageNumber,
                        pageRange = attributes.pageRange,
                        totalPage = self.getTotalPage(),
                        rangeStart = currentPage - pageRange,
                        rangeEnd = currentPage + pageRange;
                    if (rangeEnd > totalPage) {
                        rangeEnd = totalPage;
                        rangeStart = totalPage - pageRange * 2;
                        rangeStart = rangeStart < 1 ? 1 : rangeStart
                    };
                    if (rangeStart <= 1) {
                        rangeStart = 1;
                        rangeEnd = Math.min(pageRange * 2 + 1, totalPage)
                    };
                    el.html(self.generateHTML({
                        currentPage: currentPage,
                        pageRange: pageRange,
                        rangeStart: rangeStart,
                        rangeEnd: rangeEnd
                    }));
                    self.callHook('afterRender', isForced);
                    return el
                },
                generateHTML: function(args) {
                    var self = this,
                        currentPage = args.currentPage,
                        totalPage = self.getTotalPage(),
                        rangeStart = args.rangeStart,
                        rangeEnd = args.rangeEnd,
                        totalNumber = self.getTotalNumber(),
                        showPrevious = attributes.showPrevious,
                        showNext = attributes.showNext,
                        showPageNumbers = attributes.showPageNumbers,
                        showNavigator = attributes.showNavigator,
                        showGoInput = attributes.showGoInput,
                        showGoButton = attributes.showGoButton,
                        pageLink = attributes.pageLink,
                        prevText = attributes.prevText,
                        nextText = attributes.nextText,
                        ellipsisText = attributes.ellipsisText,
                        goButtonText = attributes.goButtonText,
                        classPrefix = attributes.classPrefix,
                        activeClassName = attributes.activeClassName,
                        disableClassName = attributes.disableClassName,
                        ulClassName = attributes.ulClassName,
                        html = '',
                        goInput = '<input type="text" class="J-paginationjs-go-pagenumber">',
                        goButton = '<input type="button" class="J-paginationjs-go-button" value="' + goButtonText + '">',
                        formattedString, i, formatNavigator = $.isFunction(attributes.formatNavigator) ? attributes.formatNavigator(currentPage, totalPage, totalNumber) : attributes.formatNavigator,
                        formatGoInput = $.isFunction(attributes.formatGoInput) ? attributes.formatGoInput(goInput, currentPage, totalPage, totalNumber) : attributes.formatGoInput,
                        formatGoButton = $.isFunction(attributes.formatGoButton) ? attributes.formatGoButton(goButton, currentPage, totalPage, totalNumber) : attributes.formatGoButton,
                        autoHidePrevious = $.isFunction(attributes.autoHidePrevious) ? attributes.autoHidePrevious() : attributes.autoHidePrevious,
                        autoHideNext = $.isFunction(attributes.autoHideNext) ? attributes.autoHideNext() : attributes.autoHideNext,
                        header = $.isFunction(attributes.header) ? attributes.header(currentPage, totalPage, totalNumber) : attributes.header,
                        footer = $.isFunction(attributes.footer) ? attributes.footer(currentPage, totalPage, totalNumber) : attributes.footer;
                    if (header) {
                        formattedString = self.replaceVariables(header, {
                            currentPage: currentPage,
                            totalPage: totalPage,
                            totalNumber: totalNumber
                        });
                        html += formattedString
                    };
                    if (showPrevious || showPageNumbers || showNext) {
                        html += '<div class="paginationjs-pages">';
                        if (ulClassName) {
                            html += '<ul class="' + ulClassName + '">'
                        } else html += '<ul>';
                        if (showPrevious)
                            if (currentPage <= 1) {
                                if (!autoHidePrevious) html += '<li class="' + classPrefix + '-prev ' + disableClassName + '"><a>' + prevText + '<\/a><\/li>'
                            } else html += '<li class="' + classPrefix + '-prev J-paginationjs-previous" data-num="' + (currentPage - 1) + '" title="Previous page"><a href="' + pageLink + '">' + prevText + '<\/a><\/li>';
                        if (showPageNumbers) {
                            if (rangeStart <= 3) {
                                for (i = 1; i < rangeStart; i++)
                                    if (i == currentPage) {
                                        html += '<li class="' + classPrefix + '-page J-paginationjs-page ' + activeClassName + '" data-num="' + i + '"><a>' + i + '<\/a><\/li>'
                                    } else html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>'
                            } else {
                                if (attributes.showFirstOnEllipsisShow) html += '<li class="' + classPrefix + '-page ' + classPrefix + '-first J-paginationjs-page" data-num="1"><a href="' + pageLink + '">1<\/a><\/li>';
                                html += '<li class="' + classPrefix + '-ellipsis ' + disableClassName + '"><a>' + ellipsisText + '<\/a><\/li>'
                            };
                            for (i = rangeStart; i <= rangeEnd; i++)
                                if (i == currentPage) {
                                    html += '<li class="' + classPrefix + '-page J-paginationjs-page ' + activeClassName + '" data-num="' + i + '"><a>' + i + '<\/a><\/li>'
                                } else html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>';
                            if (rangeEnd >= totalPage - 2) {
                                for (i = rangeEnd + 1; i <= totalPage; i++) html += '<li class="' + classPrefix + '-page J-paginationjs-page" data-num="' + i + '"><a href="' + pageLink + '">' + i + '<\/a><\/li>'
                            } else {
                                html += '<li class="' + classPrefix + '-ellipsis ' + disableClassName + '"><a>' + ellipsisText + '<\/a><\/li>';
                                if (attributes.showLastOnEllipsisShow) html += '<li class="' + classPrefix + '-page ' + classPrefix + '-last J-paginationjs-page" data-num="' + totalPage + '"><a href="' + pageLink + '">' + totalPage + '<\/a><\/li>'
                            }
                        };
                        if (showNext)
                            if (currentPage >= totalPage) {
                                if (!autoHideNext) html += '<li class="' + classPrefix + '-next ' + disableClassName + '"><a>' + nextText + '<\/a><\/li>'
                            } else html += '<li class="' + classPrefix + '-next J-paginationjs-next" data-num="' + (currentPage + 1) + '" title="Next page"><a href="' + pageLink + '">' + nextText + '<\/a><\/li>';
                        html += '<\/ul><\/div>'
                    };
                    if (showNavigator)
                        if (formatNavigator) {
                            formattedString = self.replaceVariables(formatNavigator, {
                                currentPage: currentPage,
                                totalPage: totalPage,
                                totalNumber: totalNumber
                            });
                            html += '<div class="' + classPrefix + '-nav J-paginationjs-nav">' + formattedString + '<\/div>'
                        };
                    if (showGoInput)
                        if (formatGoInput) {
                            formattedString = self.replaceVariables(formatGoInput, {
                                currentPage: currentPage,
                                totalPage: totalPage,
                                totalNumber: totalNumber,
                                input: goInput
                            });
                            html += '<div class="' + classPrefix + '-go-input">' + formattedString + '</div>'
                        };
                    if (showGoButton)
                        if (formatGoButton) {
                            formattedString = self.replaceVariables(formatGoButton, {
                                currentPage: currentPage,
                                totalPage: totalPage,
                                totalNumber: totalNumber,
                                button: goButton
                            });
                            html += '<div class="' + classPrefix + '-go-button">' + formattedString + '</div>'
                        };
                    if (footer) {
                        formattedString = self.replaceVariables(footer, {
                            currentPage: currentPage,
                            totalPage: totalPage,
                            totalNumber: totalNumber
                        });
                        html += formattedString
                    };
                    return html
                },
                findTotalNumberFromRemoteResponse: function(response) {
                    var self = this;
                    self.model.totalNumber = attributes.totalNumberLocator(response)
                },
                go: function(number, callback) {
                    var self = this,
                        model = self.model;
                    if (self.disabled) return;
                    var pageNumber = number;
                    pageNumber = parseInt(pageNumber);
                    if (!pageNumber || pageNumber < 1) return;
                    var pageSize = attributes.pageSize,
                        totalNumber = self.getTotalNumber(),
                        totalPage = self.getTotalPage();
                    if (totalNumber > 0)
                        if (pageNumber > totalPage) return;
                    if (!self.isAsync) {
                        render(self.getDataFragment(pageNumber));
                        return
                    };
                    var postData = {},
                        alias = attributes.alias || {};
                    postData[alias.pageSize ? alias.pageSize : 'pageSize'] = pageSize;
                    postData[alias.pageNumber ? alias.pageNumber : 'pageNumber'] = pageNumber;
                    var ajaxParams = $.isFunction(attributes.ajax) ? attributes.ajax() : attributes.ajax,
                        formatAjaxParams = {
                            type: 'get',
                            cache: false,
                            data: {},
                            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                            dataType: 'json',
                            async: true
                        };
                    $.extend(true, formatAjaxParams, ajaxParams);
                    $.extend(formatAjaxParams.data, postData);
                    formatAjaxParams.url = attributes.dataSource;
                    formatAjaxParams.success = function(response) {
                        if (self.isDynamicTotalNumber) {
                            self.findTotalNumberFromRemoteResponse(response)
                        } else self.model.totalNumber = attributes.totalNumber;
                        render(self.filterDataByLocator(response))
                    };
                    formatAjaxParams.error = function(jqXHR, textStatus, errorThrown) {
                        attributes.formatAjaxError && attributes.formatAjaxError(jqXHR, textStatus, errorThrown);
                        self.enable()
                    };
                    self.disable();
                    $.ajax(formatAjaxParams)

                    function render(data) {
                        if (self.callHook('beforePaging', pageNumber) === false) return false;
                        model.direction = typeof model.pageNumber === 'undefined' ? 0 : (pageNumber > model.pageNumber ? 1 : -1);
                        model.pageNumber = pageNumber;
                        self.render();
                        if (self.disabled && self.isAsync) self.enable();
                        container.data('pagination').model = model;
                        if (attributes.formatResult) {
                            var cloneData = $.extend(true, [], data);
                            if (!Helpers.isArray(data = attributes.formatResult(cloneData))) data = cloneData
                        };
                        container.data('pagination').currentPageData = data;
                        self.doCallback(data, callback);
                        self.callHook('afterPaging', pageNumber);
                        if (pageNumber == 1) self.callHook('afterIsFirstPage');
                        if (pageNumber == self.getTotalPage()) self.callHook('afterIsLastPage')
                    }
                },
                doCallback: function(data, customCallback) {
                    var self = this,
                        model = self.model;
                    if ($.isFunction(customCallback)) {
                        customCallback(data, model)
                    } else if ($.isFunction(attributes.callback)) attributes.callback(data, model)
                },
                destroy: function() {
                    if (this.callHook('beforeDestroy') === false) return;
                    this.model.el.remove();
                    container.off();
                    $('#paginationjs-style').remove();
                    this.callHook('afterDestroy')
                },
                previous: function(callback) {
                    this.go(this.model.pageNumber - 1, callback)
                },
                next: function(callback) {
                    this.go(this.model.pageNumber + 1, callback)
                },
                disable: function() {
                    var self = this,
                        source = self.isAsync ? 'async' : 'sync';
                    if (self.callHook('beforeDisable', source) === false) return;
                    self.disabled = true;
                    self.model.disabled = true;
                    self.callHook('afterDisable', source)
                },
                enable: function() {
                    var self = this,
                        source = self.isAsync ? 'async' : 'sync';
                    if (self.callHook('beforeEnable', source) === false) return;
                    self.disabled = false;
                    self.model.disabled = false;
                    self.callHook('afterEnable', source)
                },
                refresh: function(callback) {
                    this.go(this.model.pageNumber, callback)
                },
                show: function() {
                    var self = this;
                    if (self.model.el.is(':visible')) return;
                    self.model.el.show()
                },
                hide: function() {
                    var self = this;
                    if (!self.model.el.is(':visible')) return;
                    self.model.el.hide()
                },
                replaceVariables: function(template, variables) {
                    var formattedString;
                    for (var key in variables) {
                        var value = variables[key],
                            regexp = new RegExp('<%=\\s*'+key+'\\s*%>', 'img');
                        formattedString = (formattedString || template).replace(regexp, value)
                    };
                    return formattedString
                },
                getDataFragment: function(number) {
                    var pageSize = attributes.pageSize,
                        dataSource = attributes.dataSource,
                        totalNumber = this.getTotalNumber(),
                        start = pageSize * (number - 1) + 1,
                        end = Math.min(number * pageSize, totalNumber);
                    return dataSource.slice(start - 1, end)
                },
                getTotalNumber: function() {
                    return this.model.totalNumber || attributes.totalNumber || 0
                },
                getTotalPage: function() {
                    return Math.ceil(this.getTotalNumber() / attributes.pageSize)
                },
                getLocator: function(locator) {
                    var result;
                    if (typeof locator === 'string') {
                        result = locator
                    } else if ($.isFunction(locator)) {
                        result = locator()
                    } else throwError('"locator" is incorrect. (String | Function)');
                    return result
                },
                filterDataByLocator: function(dataSource) {
                    var locator = this.getLocator(attributes.locator),
                        filteredData;
                    if (Helpers.isObject(dataSource)) {
                        try {
                            $.each(locator.split('.'), function(index, item) {
                                filteredData = (filteredData ? filteredData : dataSource)[item]
                            })
                        } catch (e) {};
                        if (!filteredData) {
                            throwError('dataSource.' + locator + ' is undefined.')
                        } else if (!Helpers.isArray(filteredData)) throwError('dataSource.' + locator + ' must be an Array.')
                    };
                    return filteredData || dataSource
                },
                parseDataSource: function(dataSource, callback) {
                    var self = this;
                    if (Helpers.isObject(dataSource)) {
                        callback(attributes.dataSource = self.filterDataByLocator(dataSource))
                    } else if (Helpers.isArray(dataSource)) {
                        callback(attributes.dataSource = dataSource)
                    } else if ($.isFunction(dataSource)) {
                        attributes.dataSource(function(data) {
                            if (!Helpers.isArray(data)) throwError('The parameter of "done" Function should be an Array.');
                            self.parseDataSource.call(self, data, callback)
                        })
                    } else if (typeof dataSource === 'string') {
                        if (/^https?|file:/.test(dataSource)) attributes.ajaxDataType = 'jsonp';
                        callback(dataSource)
                    } else throwError('Unexpected type of "dataSource".')
                },
                callHook: function(hook) {
                    var paginationData = container.data('pagination'),
                        result, args = Array.prototype.slice.apply(arguments);
                    args.shift();
                    if (attributes[hook] && $.isFunction(attributes[hook]))
                        if (attributes[hook].apply(global, args) === false) result = false;
                    if (paginationData.hooks && paginationData.hooks[hook]) $.each(paginationData.hooks[hook], function(index, item) {
                        if (item.apply(global, args) === false) result = false
                    });
                    return result !== false
                },
                observer: function() {
                    var self = this,
                        el = self.model.el;
                    container.on(eventPrefix + 'go', function(event, pageNumber, done) {
                        pageNumber = parseInt($.trim(pageNumber));
                        if (!pageNumber) return;
                        if (!$.isNumeric(pageNumber)) throwError('"pageNumber" is incorrect. (Number)');
                        self.go(pageNumber, done)
                    });
                    el.delegate('.J-paginationjs-page', 'click', function(event) {
                        var current = $(event.currentTarget),
                            pageNumber = $.trim(current.attr('data-num'));
                        if (!pageNumber || current.hasClass(attributes.disableClassName) || current.hasClass(attributes.activeClassName)) return;
                        if (self.callHook('beforePageOnClick', event, pageNumber) === false) return false;
                        self.go(pageNumber);
                        self.callHook('afterPageOnClick', event, pageNumber);
                        if (!attributes.pageLink) return false
                    });
                    el.delegate('.J-paginationjs-previous', 'click', function(event) {
                        var current = $(event.currentTarget),
                            pageNumber = $.trim(current.attr('data-num'));
                        if (!pageNumber || current.hasClass(attributes.disableClassName)) return;
                        if (self.callHook('beforePreviousOnClick', event, pageNumber) === false) return false;
                        self.go(pageNumber);
                        self.callHook('afterPreviousOnClick', event, pageNumber);
                        if (!attributes.pageLink) return false
                    });
                    el.delegate('.J-paginationjs-next', 'click', function(event) {
                        var current = $(event.currentTarget),
                            pageNumber = $.trim(current.attr('data-num'));
                        if (!pageNumber || current.hasClass(attributes.disableClassName)) return;
                        if (self.callHook('beforeNextOnClick', event, pageNumber) === false) return false;
                        self.go(pageNumber);
                        self.callHook('afterNextOnClick', event, pageNumber);
                        if (!attributes.pageLink) return false
                    });
                    el.delegate('.J-paginationjs-go-button', 'click', function(event) {
                        var pageNumber = $('.J-paginationjs-go-pagenumber', el).val();
                        if (self.callHook('beforeGoButtonOnClick', event, pageNumber) === false) return false;
                        container.trigger(eventPrefix + 'go', pageNumber);
                        self.callHook('afterGoButtonOnClick', event, pageNumber)
                    });
                    el.delegate('.J-paginationjs-go-pagenumber', 'keyup', function(event) {
                        if (event.which === 13) {
                            var pageNumber = $(event.currentTarget).val();
                            if (self.callHook('beforeGoInputOnEnter', event, pageNumber) === false) return false;
                            container.trigger(eventPrefix + 'go', pageNumber);
                            $('.J-paginationjs-go-pagenumber', el).focus();
                            self.callHook('afterGoInputOnEnter', event, pageNumber)
                        }
                    });
                    container.on(eventPrefix + 'previous', function(event, done) {
                        self.previous(done)
                    });
                    container.on(eventPrefix + 'next', function(event, done) {
                        self.next(done)
                    });
                    container.on(eventPrefix + 'disable', function() {
                        self.disable()
                    });
                    container.on(eventPrefix + 'enable', function() {
                        self.enable()
                    });
                    container.on(eventPrefix + 'refresh', function(event, done) {
                        self.refresh(done)
                    });
                    container.on(eventPrefix + 'show', function() {
                        self.show()
                    });
                    container.on(eventPrefix + 'hide', function() {
                        self.hide()
                    });
                    container.on(eventPrefix + 'destroy', function() {
                        self.destroy()
                    });
                    var validTotalPage = Math.max(self.getTotalPage(), 1),
                        defaultPageNumber = attributes.pageNumber;
                    if (self.isDynamicTotalNumber) defaultPageNumber = 1;
                    if (attributes.triggerPagingOnInit) container.trigger(eventPrefix + 'go', Math.min(defaultPageNumber, validTotalPage))
                }
            };
        if (container.data('pagination') && container.data('pagination').initialized === true) {
            if ($.isNumeric(options)) {
                container.trigger.call(this, eventPrefix + 'go', options, arguments[1]);
                return this
            } else if (typeof options === 'string') {
                var args = Array.prototype.slice.apply(arguments);
                args[0] = eventPrefix + args[0];
                switch (options) {
                    case 'previous':
                    case 'next':
                    case 'go':
                    case 'disable':
                    case 'enable':
                    case 'refresh':
                    case 'show':
                    case 'hide':
                    case 'destroy':
                        container.trigger.apply(this, args);
                        break;
                    case 'getSelectedPageNum':
                        if (container.data('pagination').model) {
                            return container.data('pagination').model.pageNumber
                        } else return container.data('pagination').attributes.pageNumber;
                    case 'getTotalPage':
                        return Math.ceil(container.data('pagination').model.totalNumber / container.data('pagination').model.pageSize);
                    case 'getSelectedPageData':
                        return container.data('pagination').currentPageData;
                    case 'isDisabled':
                        return container.data('pagination').model.disabled === true;
                    default:
                        throwError('Unknown action: ' + options)
                };
                return this
            } else uninstallPlugin(container)
        } else if (!Helpers.isObject(options)) throwError('Illegal options');
        parameterChecker(attributes);
        pagination.initialize();
        return this
    };
    $.fn[pluginName].defaults = {
        totalNumber: 0,
        pageNumber: 1,
        pageSize: 10,
        pageRange: 2,
        showPrevious: true,
        showNext: true,
        showPageNumbers: true,
        showNavigator: false,
        showGoInput: false,
        showGoButton: false,
        pageLink: '',
        prevText: '&laquo;',
        nextText: '&raquo;',
        ellipsisText: '...',
        goButtonText: 'Go',
        classPrefix: 'paginationjs',
        activeClassName: 'active',
        disableClassName: 'disabled',
        inlineStyle: true,
        formatNavigator: '<%= currentPage %> / <%= totalPage %>',
        formatGoInput: '<%= input %>',
        formatGoButton: '<%= button %>',
        position: 'bottom',
        autoHidePrevious: false,
        autoHideNext: false,
        triggerPagingOnInit: true,
        hideWhenLessThanOnePage: false,
        showFirstOnEllipsisShow: true,
        showLastOnEllipsisShow: true,
        callback: function() {}
    };
    $.fn[pluginHookMethod] = function(hook, callback) {
        if (arguments.length < 2) throwError('Missing argument.');
        if (!$.isFunction(callback)) throwError('callback must be a function.');
        var container = $(this),
            paginationData = container.data('pagination');
        if (!paginationData) {
            container.data('pagination', {});
            paginationData = container.data('pagination')
        };
        !paginationData.hooks && (paginationData.hooks = {});
        paginationData.hooks[hook] = paginationData.hooks[hook] || [];
        paginationData.hooks[hook].push(callback)
    };
    $[pluginName] = function(selector, options) {
        if (arguments.length < 2) throwError('Requires two parameters.');
        var container;
        if (typeof selector !== 'string' && selector instanceof jQuery) {
            container = selector
        } else container = $(selector);
        if (!container.length) return;
        container.pagination(options);
        return container
    };
    var Helpers = {}

    function throwError(content) {
        throw new Error('Pagination: ' + content)
    }

    function parameterChecker(args) {
        if (!args.dataSource) throwError('"dataSource" is required.');
        if (typeof args.dataSource === 'string') {
            if (args.totalNumberLocator === undefined) {
                if (args.totalNumber === undefined) {
                    throwError('"totalNumber" is required.')
                } else if (!$.isNumeric(args.totalNumber)) throwError('"totalNumber" is incorrect. (Number)')
            } else if (!$.isFunction(args.totalNumberLocator)) throwError('"totalNumberLocator" should be a Function.')
        } else if (Helpers.isObject(args.dataSource))
            if (typeof args.locator === 'undefined') {
                throwError('"dataSource" is an Object, please specify "locator".')
            } else if (typeof args.locator !== 'string' && !$.isFunction(args.locator)) throwError('' + args.locator + ' is incorrect. (String | Function)');
        if (args.formatResult !== undefined && !$.isFunction(args.formatResult)) throwError('"formatResult" should be a Function.')
    }

    function uninstallPlugin(target) {
        var events = ['go', 'previous', 'next', 'disable', 'enable', 'refresh', 'show', 'hide', 'destroy'];
        $.each(events, function(index, value) {
            target.off(eventPrefix + value)
        });
        target.data('pagination', {});
        $('.paginationjs', target).remove()
    }

    function getObjectType(object, tmp) {
        return ((tmp = typeof object) == "object" ? object == null && "null" || Object.prototype.toString.call(object).slice(8, -1) : tmp).toLowerCase()
    };
    $.each(['Object', 'Array', 'String'], function(index, name) {
        Helpers['is' + name] = function(object) {
            return getObjectType(object) === name.toLowerCase()
        }
    });
    if (typeof define === 'function' && define.amd) define(function() {
        return $
    })
})(this, window.jQuery);;
/* Source and licensing information for the above line(s) can be found at https://www.prestashop.com/sites/all/themes/prestashop/assets/vendor/paginationjs/dist/pagination.js. */
/*! jssocials - v1.5.0 - 2017-04-30
 * http://js-socials.com
 * Copyright (c) 2017 Artem Tabalin; Licensed MIT */
! function(a, b, c) {
    function d(a, c) {
        var d = b(a);
        d.data(f, this), this._$element = d, this.shares = [], this._init(c), this._render()
    }
    var e = "JSSocials",
        f = e,
        g = function(a, c) {
            return b.isFunction(a) ? a.apply(c, b.makeArray(arguments).slice(2)) : a
        },
        h = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
        i = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
        j = {
            G: 1e9,
            M: 1e6,
            K: 1e3
        },
        k = {};
    d.prototype = {
        url: "",
        text: "",
        shareIn: "blank",
        showLabel: function(a) {
            return this.showCount === !1 ? a > this.smallScreenWidth : a >= this.largeScreenWidth
        },
        showCount: function(a) {
            return a <= this.smallScreenWidth ? "inside" : !0
        },
        smallScreenWidth: 640,
        largeScreenWidth: 1024,
        resizeTimeout: 200,
        elementClass: "jssocials",
        sharesClass: "jssocials-shares",
        shareClass: "jssocials-share",
        shareButtonClass: "jssocials-share-button",
        shareLinkClass: "jssocials-share-link",
        shareLogoClass: "jssocials-share-logo",
        shareLabelClass: "jssocials-share-label",
        shareLinkCountClass: "jssocials-share-link-count",
        shareCountBoxClass: "jssocials-share-count-box",
        shareCountClass: "jssocials-share-count",
        shareZeroCountClass: "jssocials-share-no-count",
        _init: function(a) {
            this._initDefaults(), b.extend(this, a), this._initShares(), this._attachWindowResizeCallback()
        },
        _initDefaults: function() {
            this.url = a.location.href, this.text = b.trim(b("meta[name=description]").attr("content") || b("title").text())
        },
        _initShares: function() {
            this.shares = b.map(this.shares, b.proxy(function(a) {
                "string" == typeof a && (a = {
                    share: a
                });
                var c = a.share && k[a.share];
                if (!c && !a.renderer) throw Error("Share '" + a.share + "' is not found");
                return b.extend({
                    url: this.url,
                    text: this.text
                }, c, a)
            }, this))
        },
        _attachWindowResizeCallback: function() {
            b(a).on("resize", b.proxy(this._windowResizeHandler, this))
        },
        _detachWindowResizeCallback: function() {
            b(a).off("resize", this._windowResizeHandler)
        },
        _windowResizeHandler: function() {
            (b.isFunction(this.showLabel) || b.isFunction(this.showCount)) && (a.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(b.proxy(this.refresh, this), this.resizeTimeout))
        },
        _render: function() {
            this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = b("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
        },
        _defineOptionsByScreen: function() {
            this._screenWidth = b(a).width(), this._showLabel = g(this.showLabel, this, this._screenWidth), this._showCount = g(this.showCount, this, this._screenWidth)
        },
        _renderShares: function() {
            b.each(this.shares, b.proxy(function(a, b) {
                this._renderShare(b)
            }, this))
        },
        _renderShare: function(a) {
            var c;
            c = b.isFunction(a.renderer) ? b(a.renderer()) : this._createShare(a), c.addClass(this.shareClass).addClass(a.share ? "jssocials-share-" + a.share : "").addClass(a.css).appendTo(this._$shares)
        },
        _createShare: function(a) {
            var c = b("<div>"),
                d = this._createShareLink(a).appendTo(c);
            if (this._showCount) {
                var e = "inside" === this._showCount,
                    f = e ? d : b("<div>").addClass(this.shareCountBoxClass).appendTo(c);
                f.addClass(e ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(a, f)
            }
            return c
        },
        _createShareLink: function(a) {
            var c = this._getShareStrategy(a),
                d = c.call(a, {
                    shareUrl: this._getShareUrl(a)
                });
            return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)), this._showLabel && d.append(this._createShareLabel(a)), b.each(this.on || {}, function(c, e) {
                b.isFunction(e) && d.on(c, b.proxy(e, a))
            }), d
        },
        _getShareStrategy: function(a) {
            var b = m[a.shareIn || this.shareIn];
            if (!b) throw Error("Share strategy '" + this.shareIn + "' not found");
            return b
        },
        _getShareUrl: function(a) {
            var b = g(a.shareUrl, a);
            return this._formatShareUrl(b, a)
        },
        _createShareLogo: function(a) {
            var c = a.logo,
                d = h.test(c) ? b("<img>").attr("src", a.logo) : b("<i>").addClass(c);
            return d.addClass(this.shareLogoClass), d
        },
        _createShareLabel: function(a) {
            return b("<span>").addClass(this.shareLabelClass).text(a.label)
        },
        _renderShareCount: function(a, c) {
            var d = b("<span>").addClass(this.shareCountClass);
            c.addClass(this.shareZeroCountClass).append(d), this._loadCount(a).done(b.proxy(function(a) {
                a && (c.removeClass(this.shareZeroCountClass), d.text(a))
            }, this))
        },
        _loadCount: function(a) {
            var c = b.Deferred(),
                d = this._getCountUrl(a);
            if (!d) return c.resolve(0).promise();
            var e = b.proxy(function(b) {
                c.resolve(this._getCountValue(b, a))
            }, this);
            return b.getJSON(d).done(e).fail(function() {
                b.get(d).done(e).fail(function() {
                    c.resolve(0)
                })
            }), c.promise()
        },
        _getCountUrl: function(a) {
            var b = g(a.countUrl, a);
            return this._formatShareUrl(b, a)
        },
        _getCountValue: function(a, c) {
            var d = (b.isFunction(c.getCount) ? c.getCount(a) : a) || 0;
            return "string" == typeof d ? d : this._formatNumber(d)
        },
        _formatNumber: function(a) {
            return b.each(j, function(b, c) {
                return a >= c ? (a = parseFloat((a / c).toFixed(2)) + b, !1) : void 0
            }), a
        },
        _formatShareUrl: function(b, c) {
            return b.replace(i, function(b, d, e) {
                var f = c[e] || "";
                return f ? (d || "") + a.encodeURIComponent(f) : ""
            })
        },
        _clear: function() {
            a.clearTimeout(this._resizeTimer), this._$element.empty()
        },
        _passOptionToShares: function(a, c) {
            var d = this.shares;
            b.each(["url", "text"], function(e, f) {
                f === a && b.each(d, function(b, d) {
                    d[a] = c
                })
            })
        },
        _normalizeShare: function(a) {
            return b.isNumeric(a) ? this.shares[a] : "string" == typeof a ? b.grep(this.shares, function(b) {
                return b.share === a
            })[0] : a
        },
        refresh: function() {
            this._render()
        },
        destroy: function() {
            this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(f)
        },
        option: function(a, b) {
            return 1 === arguments.length ? this[a] : (this[a] = b, this._passOptionToShares(a, b), void this.refresh())
        },
        shareOption: function(a, b, c) {
            return a = this._normalizeShare(a), 2 === arguments.length ? a[b] : (a[b] = c, void this.refresh())
        }
    }, b.fn.jsSocials = function(a) {
        var e = b.makeArray(arguments),
            g = e.slice(1),
            h = this;
        return this.each(function() {
            var e, i = b(this),
                j = i.data(f);
            if (j)
                if ("string" == typeof a) {
                    if (e = j[a].apply(j, g), e !== c && e !== j) return h = e, !1
                } else j._detachWindowResizeCallback(), j._init(a), j._render();
            else new d(i, a)
        }), h
    };
    var l = function(a) {
            var c;
            b.isPlainObject(a) ? c = d.prototype : (c = k[a], a = arguments[1] || {}), b.extend(c, a)
        },
        m = {
            popup: function(c) {
                return b("<a>").attr("href", "#").on("click", function() {
                    return a.open(c.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
                })
            },
            blank: function(a) {
                return b("<a>").attr({
                    target: "_blank",
                    href: a.shareUrl
                })
            },
            self: function(a) {
                return b("<a>").attr({
                    target: "_self",
                    href: a.shareUrl
                })
            }
        };
    a.jsSocials = {
        Socials: d,
        shares: k,
        shareStrategies: m,
        setDefaults: l
    }
}(window, jQuery),
function(a, b, c) {
    b.extend(c.shares, {
        email: {
            label: "E-mail",
            logo: "fa fa-at",
            shareUrl: "mailto:{to}?subject={text}&body={url}",
            countUrl: "",
            shareIn: "self"
        },
        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },
        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: "https://graph.facebook.com/?id={url}",
            getCount: function(a) {
                return a.share && a.share.share_count || 0
            }
        },
        vkontakte: {
            label: "Like",
            logo: "fa fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
            getCount: function(a) {
                return parseInt(a.slice(15, -2).split(", ")[1])
            }
        },
        googleplus: {
            label: "+1",
            logo: "fa fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },
        linkedin: {
            label: "Share",
            logo: "fa fa-linkedin",
            shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
            countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        pinterest: {
            label: "Pin it",
            logo: "fa fa-pinterest",
            shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
            countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
            getCount: function(a) {
                return a.count
            }
        },
        stumbleupon: {
            label: "Share",
            logo: "fa fa-stumbleupon",
            shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
            countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
            getCount: function(a) {
                return a.result && a.result.views
            }
        },
        telegram: {
            label: "Telegram",
            logo: "fa fa-telegram",
            shareUrl: "tg://msg?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        whatsapp: {
            label: "WhatsApp",
            logo: "fa fa-whatsapp",
            shareUrl: "whatsapp://send?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        line: {
            label: "LINE",
            logo: "fa fa-comment",
            shareUrl: "http://line.me/R/msg/text/?{text} {url}",
            countUrl: ""
        },
        viber: {
            label: "Viber",
            logo: "fa fa-volume-control-phone",
            shareUrl: "viber://forward?text={url} {text}",
            countUrl: "",
            shareIn: "self"
        },
        pocket: {
            label: "Pocket",
            logo: "fa fa-get-pocket",
            shareUrl: "https://getpocket.com/save?url={url}&title={title}",
            countUrl: ""
        },
        messenger: {
            label: "Share",
            logo: "fa fa-commenting",
            shareUrl: "fb-messenger://share?link={url}",
            countUrl: "",
            shareIn: "self"
        },
        rss: {
            label: "RSS",
            logo: "fa fa-rss",
            shareUrl: "/feeds/",
            countUrl: "",
            shareIn: "blank"
        }
    })
}(window, jQuery, window.jsSocials);; /**/