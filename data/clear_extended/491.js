(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        11: function(n, t, e) {
            (function(n) {
                var t = function(n, t) {
                        return function() {
                            return n.apply(t, arguments)
                        }
                    },
                    e = [].slice,
                    r = {}.hasOwnProperty;
                Scribd.Lightbox = function() {
                    function r(n, e) {
                        null == e && (e = !0), this.set_title = t(this.set_title, this), this.container = $(n).on("scribd:lightbox_reshape", function(n) {
                            return function() {
                                return n.set_position()
                            }
                        }(this)), this.container.data("lightbox_obj", this), e && (this.container.closest(Scribd.Lightbox.lightboxes).length || this.container.appendTo(Scribd.Lightbox.lightboxes))
                    }
                    return r.prototype.offset_top = 40, r.last_focused_element = $(document), r.current_open = null, r.stacked = !1, r.ready = $.Deferred().done(function() {
                        return $(document).trigger("ScribdLightboxInitialized")
                    }), r.initialize = function() {
                        return $(function(n) {
                            return function() {
                                return n.lightboxes = $("#lightboxes"), n.lightbox_container = $("#lightbox_area"), $(document).keydown(function(t) {
                                    if (27 === t.keyCode) return n.current_open && n.current_open.user_closable() && !n.stacked ? (n.close(), t.preventDefault()) : void 0
                                }), n.lightboxes.on("click", ".close_button, .close_link, .close_lb_btn", function(t) {
                                    if (t.preventDefault(), !n.stacked) return n.close()
                                }), n.lightbox_container.on("click", function(t) {
                                    var e;
                                    if (!(e = $(t.target)).closest(".lightbox").length && e.closest(document.body).length) return n.current_open && n.current_open.user_closable() && !n.stacked && !$(t.target).closest(".flash").length ? n.close() : void 0
                                }), Scribd.Lightbox.ready.resolve()
                            }
                        }(this))
                    }, r.fade_in_overlay = function(n, t, e) {
                        return null == n && (n = ""), null == t && (t = ""), null == e && (e = 200), clearTimeout(r._fade_out_overlay_timeout), r.overlay || (r.overlay = $('<div id="overlay"></div>').hide().appendTo("body").on("click", function() {
                            if (r.current_open && r.current_open.user_closable()) return r.close(), !1
                        })), r.overlay.css({
                            "background-color": t,
                            opacity: n
                        }).fadeIn({
                            duration: e
                        })
                    }, r.fade_out_overlay = function() {
                        return r.overlay.fadeOut({
                            duration: 200
                        })
                    }, r.open = function() {
                        var n, t, r, i, o, c, u;
                        if (i = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], null == n && (n = Scribd.Lightbox), this !== Scribd.Lightbox) return (u = Scribd.Lightbox).open.apply(u, [i, this].concat(e.call(t)));
                        if (n._is_react_factory) return this.open_react(i, n);
                        if (!(c = $("#" + i)).length) throw "failed to find lightbox: " + i;
                        return c.is("script") && (r = c.data("template") || c.html(), c = $(r).replaceAll(c)), (o = c.data("lightbox_obj")) || (o = function(n, t, e) {
                            e.prototype = n.prototype;
                            var r = new e,
                                i = n.apply(r, t);
                            return Object(i) === i ? i : r
                        }(n, [c].concat(e.call(t)), function() {})), o.id = i, o.show(Scribd.Lightbox.open_callback), o
                    }, r.open_react = function(t, e) {
                        var r;
                        return this.lightboxes || (this.lightboxes = $("#lightboxes")), (r = this.lightboxes.find("#" + t)).length || (r = $('<div class="react_lightbox" />').attr("id", t).appendTo(this.lightboxes)), ReactDOM.unmountComponentAtNode(r[0]), n.defer(function() {
                            return ReactDOM.render(e, r[0])
                        })
                    }, r.close = function(n) {
                        var t;
                        if (null == n && (n = !0), this.current_open) return n && this.fade_out_overlay(), (t = this.current_open) ? (this.current_open = null, t.hide(), t.container.trigger("Scribd:lightbox:closed"), $(document.body).removeClass("lightbox_open")) : void 0
                    }, r.open_from_object = function() {
                        var n, t, r, i, o;
                        return r = arguments[0], i = arguments[1], n = arguments[2], t = 4 <= arguments.length ? e.call(arguments, 3) : [], null == n && (n = null), this !== Scribd.Lightbox ? (o = Scribd.Lightbox).open_from_object.apply(o, [r, i, this].concat(e.call(t))) : (r && $("#" + r).remove(), r = $(i).appendTo(this.lightboxes).attr("id") || r, this.open.apply(this, [r, n].concat(e.call(t))))
                    }, r.remote_open = function(n, t, e, r) {
                        var i, o, c;
                        return null == e && (e = {}), null == r && (r = null), this !== Scribd.Lightbox ? Scribd.Lightbox.remote_open(n, t, e, this) : (c = "POST", $.isPlainObject(n) && (n = (o = n).id, t = o.url, i = o.on_error, r = o.T || r, c = o.method || c, e = o.params || e), (null != o ? o.show_loading : void 0) ? "function" == typeof o.show_loading && o.show_loading() : this.show_loading(), $.ajax({
                            url: t,
                            data: e,
                            type: c,
                            dataType: (null != o ? o.dataType : void 0) || "html",
                            error: i,
                            success: function(t) {
                                var e, i;
                                return $.isPlainObject(t) && (e = t.opts), (null != t ? t.content : void 0) ? t = t.content : (null != t ? t.props : void 0) && (t = t.props), i = Scribd.Lightbox.open_from_object(n, $(t), r, e), null != o && "function" == typeof o.after_open ? o.after_open(i) : void 0
                            },
                            error: function(t, e, r) {
                                return $(document.body).track({
                                    category: "errors",
                                    action: "lightbox",
                                    label: n + " " + e + ":" + r
                                }), Scribd.Lightbox.close(), null != o && "function" == typeof o.on_error ? o.on_error() : void 0
                            }
                        }))
                    }, r.show_loading = function() {
                        return this.open("loading_lb")
                    }, r.open_callback = function(n) {
                        return n.attr("aria-hidden", "false"), $(document.activeElement).is("#loading_lb, body") || (Scribd.Lightbox.last_focused_element = $(document.activeElement)), n.focus(), n.trap_focus_in_children()
                    }, r.close_callback = function(n) {
                        return n.is("#loading_lb") || Scribd.Lightbox.last_focused_element.focus(), n.attr("aria-hidden", "false")
                    }, r.prototype.user_closable = function() {
                        return this.container.find(".close_button, .close_lb_btn").length > 0
                    }, r.prototype.set_title = function(n) {
                        var t;
                        return (t = this.container.find(".title")).length || (t = $('<h2 class="title"></h2>'), this.container.find(".content").prepend(t)), t.text(n), this.container.attr("aria-label", n)
                    }, r.prototype.hide = function() {
                        if (this.container.hide(), Scribd.Lightbox.close_callback(this.container), null != Scribd.Lightbox.current_open) return Scribd.Lightbox.current_open.container.focus()
                    }, r.prototype.close = function(n) {
                        if (null == n && (n = !0), Scribd.Lightbox.current_open === this) return Scribd.Lightbox.close(n)
                    }, r.prototype.transition = function(n, t) {
                        return null != n && n.hide(this), this.container.fadeIn("fast", function(n) {
                            return function() {
                                return Scribd.Lightbox.open_callback(n.container)
                            }
                        }(this)), "function" == typeof t ? t() : void 0
                    }, r.prototype.show = function() {
                        var n, t, e;
                        if (Scribd.Lightbox.current_open !== this) return n = this.container.data("overlay_color"), e = this.container.data("overlay_opacity"), $(document.body).addClass("lightbox_open"), Scribd.Lightbox.fade_in_overlay(e, n || ""), this.set_position(), null != (t = Scribd.Lightbox.current_open) && t.container.removeClass("open_lightbox"), Scribd.Lightbox.current_open = this, this.container.addClass("open_lightbox"), this.transition(t, function() {
                            return null != t ? t.container.trigger("Scribd:lightbox:closed") : void 0
                        }), this.after_show()
                    }, r.prototype.set_position = function() {
                        var n, t;
                        return t = $(window), n = {
                            top: this.container.is(".vertically_centered") ? Math.max(10, Math.floor((t.height() - this.container.outerHeight()) / 2)) : this.offset_top
                        }, this.container.hasClass("auto_center") || (n.left = "50%", n.marginLeft = -this.container.width() / 2), this.container.css(n)
                    }, r.prototype.after_show = function() {}, r
                }(), Scribd.StackedLightbox = function(e) {
                    function i(n, e) {
                        this.container = n, this.opts = e, this.close = t(this.close, this), i.__super__.constructor.apply(this, arguments), this.container.addClass("stacked_lightbox"), this.setup_events()
                    }
                    return function(n, t) {
                        for (var e in t) r.call(t, e) && (n[e] = t[e]);

                        function i() {
                            this.constructor = n
                        }
                        i.prototype = t.prototype, n.prototype = new i, n.__super__ = t.prototype
                    }(i, Scribd.Lightbox), i.instances = [], i.show_overlay = function() {
                        return i.overlay || (i.overlay = i.add_overlay()), i.overlay.show().css("opacity", "0.5"), Scribd.Lightbox.stacked = !0
                    }, i.hide_overlay = function() {
                        var t;
                        return null != (t = i.overlay) && t.css("opacity", "0").hide(), n.defer(function() {
                            if (!i.instances.length) return Scribd.Lightbox.stacked = !1
                        })
                    }, i.add_overlay = function() {
                        return i.overlay = $('<div class="stacked_overlay"></div>').prependTo("#lightboxes").hide().click(function() {
                            var n;
                            return null != (n = Scribd.StackedLightbox.instances[Scribd.StackedLightbox.instances.length - 1]) ? n.close() : void 0
                        }), i.overlay
                    }, i.close = function() {
                        var n;
                        if (Scribd.StackedLightbox.hide_overlay(), Scribd.StackedLightbox.instances.length) return (n = Scribd.StackedLightbox.instances.pop()).container.fadeOut("fast", function() {
                            return Scribd.Lightbox.close_callback(n.container)
                        }).trigger("Scribd:stacked_lightbox:closed"), Scribd.Lightbox.current_open ? void 0 : $(document.body).removeClass("lightbox_open")
                    }, i.prototype.set_position = function() {
                        var n;
                        if (i.__super__.set_position.apply(this, arguments), (n = this.container.closest(".carousel_scroll_parent")).scrollTop() > 0) return n.animate({
                            scrollTop: 0
                        })
                    }, i.prototype.open = function() {
                        return $(document.body).addClass("lightbox_open"), this.container.fadeIn("fast", function(n) {
                            return function() {
                                return Scribd.Lightbox.open_callback(n.container)
                            }
                        }(this)), Scribd.StackedLightbox.instances.push(this), Scribd.StackedLightbox.show_overlay(), this.set_position()
                    }, i.prototype.show = function() {
                        return this.open()
                    }, i.prototype.close = function() {
                        return Scribd.StackedLightbox.close()
                    }, i.prototype.setup_events = function() {
                        return $(document).on("keydown.stacked_lightbox_close", function(n) {
                            return function(t) {
                                if (27 === t.keyCode) return n.close()
                            }
                        }(this)), this.container.dispatch("click", {
                            close_button: this.close
                        })
                    }, i.prototype.another_lightbox_is_open = function() {
                        return Scribd.Lightbox.current_open || $("#lightboxes .overlay:visible, #lightboxes .stacked_overlay:visible").length
                    }, i
                }()
            }).call(this, e(4))
        },
        4: function(n, t, e) {
            (function() {
                var e = this,
                    r = e._,
                    i = {},
                    o = Array.prototype,
                    c = Object.prototype,
                    u = Function.prototype,
                    a = o.push,
                    l = o.slice,
                    s = o.concat,
                    f = c.toString,
                    p = c.hasOwnProperty,
                    h = o.forEach,
                    d = o.map,
                    b = o.reduce,
                    v = o.reduceRight,
                    g = o.filter,
                    _ = o.every,
                    y = o.some,
                    x = o.indexOf,
                    m = o.lastIndexOf,
                    S = Array.isArray,
                    w = Object.keys,
                    k = u.bind,
                    L = function(n) {
                        return n instanceof L ? n : this instanceof L ? void(this._wrapped = n) : new L(n)
                    };
                n.exports && (t = n.exports = L), t._ = L, L.VERSION = "1.4.4";
                var j = L.each = L.forEach = function(n, t, e) {
                    if (null != n)
                        if (h && n.forEach === h) n.forEach(t, e);
                        else if (n.length === +n.length) {
                        for (var r = 0, o = n.length; r < o; r++)
                            if (t.call(e, n[r], r, n) === i) return
                    } else
                        for (var c in n)
                            if (L.has(n, c) && t.call(e, n[c], c, n) === i) return
                };
                L.map = L.collect = function(n, t, e) {
                    var r = [];
                    return null == n ? r : d && n.map === d ? n.map(t, e) : (j(n, function(n, i, o) {
                        r[r.length] = t.call(e, n, i, o)
                    }), r)
                };
                var $ = "Reduce of empty array with no initial value";
                L.reduce = L.foldl = L.inject = function(n, t, e, r) {
                    var i = arguments.length > 2;
                    if (null == n && (n = []), b && n.reduce === b) return r && (t = L.bind(t, r)), i ? n.reduce(t, e) : n.reduce(t);
                    if (j(n, function(n, o, c) {
                            i ? e = t.call(r, e, n, o, c) : (e = n, i = !0)
                        }), !i) throw new TypeError($);
                    return e
                }, L.reduceRight = L.foldr = function(n, t, e, r) {
                    var i = arguments.length > 2;
                    if (null == n && (n = []), v && n.reduceRight === v) return r && (t = L.bind(t, r)), i ? n.reduceRight(t, e) : n.reduceRight(t);
                    var o = n.length;
                    if (o !== +o) {
                        var c = L.keys(n);
                        o = c.length
                    }
                    if (j(n, function(u, a, l) {
                            a = c ? c[--o] : --o, i ? e = t.call(r, e, n[a], a, l) : (e = n[a], i = !0)
                        }), !i) throw new TypeError($);
                    return e
                }, L.find = L.detect = function(n, t, e) {
                    var r;
                    return O(n, function(n, i, o) {
                        if (t.call(e, n, i, o)) return r = n, !0
                    }), r
                }, L.filter = L.select = function(n, t, e) {
                    var r = [];
                    return null == n ? r : g && n.filter === g ? n.filter(t, e) : (j(n, function(n, i, o) {
                        t.call(e, n, i, o) && (r[r.length] = n)
                    }), r)
                }, L.reject = function(n, t, e) {
                    return L.filter(n, function(n, r, i) {
                        return !t.call(e, n, r, i)
                    }, e)
                }, L.every = L.all = function(n, t, e) {
                    t || (t = L.identity);
                    var r = !0;
                    return null == n ? r : _ && n.every === _ ? n.every(t, e) : (j(n, function(n, o, c) {
                        if (!(r = r && t.call(e, n, o, c))) return i
                    }), !!r)
                };
                var O = L.some = L.any = function(n, t, e) {
                    t || (t = L.identity);
                    var r = !1;
                    return null == n ? r : y && n.some === y ? n.some(t, e) : (j(n, function(n, o, c) {
                        if (r || (r = t.call(e, n, o, c))) return i
                    }), !!r)
                };
                L.contains = L.include = function(n, t) {
                    return null != n && (x && n.indexOf === x ? -1 != n.indexOf(t) : O(n, function(n) {
                        return n === t
                    }))
                }, L.invoke = function(n, t) {
                    var e = l.call(arguments, 2),
                        r = L.isFunction(t);
                    return L.map(n, function(n) {
                        return (r ? t : n[t]).apply(n, e)
                    })
                }, L.pluck = function(n, t) {
                    return L.map(n, function(n) {
                        return n[t]
                    })
                }, L.where = function(n, t, e) {
                    return L.isEmpty(t) ? e ? null : [] : L[e ? "find" : "filter"](n, function(n) {
                        for (var e in t)
                            if (t[e] !== n[e]) return !1;
                        return !0
                    })
                }, L.findWhere = function(n, t) {
                    return L.where(n, t, !0)
                }, L.max = function(n, t, e) {
                    if (!t && L.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n);
                    if (!t && L.isEmpty(n)) return -1 / 0;
                    var r = {
                        computed: -1 / 0,
                        value: -1 / 0
                    };
                    return j(n, function(n, i, o) {
                        var c = t ? t.call(e, n, i, o) : n;
                        c >= r.computed && (r = {
                            value: n,
                            computed: c
                        })
                    }), r.value
                }, L.min = function(n, t, e) {
                    if (!t && L.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n);
                    if (!t && L.isEmpty(n)) return 1 / 0;
                    var r = {
                        computed: 1 / 0,
                        value: 1 / 0
                    };
                    return j(n, function(n, i, o) {
                        var c = t ? t.call(e, n, i, o) : n;
                        c < r.computed && (r = {
                            value: n,
                            computed: c
                        })
                    }), r.value
                }, L.shuffle = function(n) {
                    var t, e = 0,
                        r = [];
                    return j(n, function(n) {
                        t = L.random(e++), r[e - 1] = r[t], r[t] = n
                    }), r
                };
                var A = function(n) {
                    return L.isFunction(n) ? n : function(t) {
                        return t[n]
                    }
                };
                L.sortBy = function(n, t, e) {
                    var r = A(t);
                    return L.pluck(L.map(n, function(n, t, i) {
                        return {
                            value: n,
                            index: t,
                            criteria: r.call(e, n, t, i)
                        }
                    }).sort(function(n, t) {
                        var e = n.criteria,
                            r = t.criteria;
                        if (e !== r) {
                            if (e > r || void 0 === e) return 1;
                            if (e < r || void 0 === r) return -1
                        }
                        return n.index < t.index ? -1 : 1
                    }), "value")
                };
                var E = function(n, t, e, r) {
                    var i = {},
                        o = A(t || L.identity);
                    return j(n, function(t, c) {
                        var u = o.call(e, t, c, n);
                        r(i, u, t)
                    }), i
                };
                L.groupBy = function(n, t, e) {
                    return E(n, t, e, function(n, t, e) {
                        (L.has(n, t) ? n[t] : n[t] = []).push(e)
                    })
                }, L.countBy = function(n, t, e) {
                    return E(n, t, e, function(n, t) {
                        L.has(n, t) || (n[t] = 0), n[t]++
                    })
                }, L.sortedIndex = function(n, t, e, r) {
                    for (var i = (e = null == e ? L.identity : A(e)).call(r, t), o = 0, c = n.length; o < c;) {
                        var u = o + c >>> 1;
                        e.call(r, n[u]) < i ? o = u + 1 : c = u
                    }
                    return o
                }, L.toArray = function(n) {
                    return n ? L.isArray(n) ? l.call(n) : n.length === +n.length ? L.map(n, L.identity) : L.values(n) : []
                }, L.size = function(n) {
                    return null == n ? 0 : n.length === +n.length ? n.length : L.keys(n).length
                }, L.first = L.head = L.take = function(n, t, e) {
                    if (null != n) return null == t || e ? n[0] : l.call(n, 0, t)
                }, L.initial = function(n, t, e) {
                    return l.call(n, 0, n.length - (null == t || e ? 1 : t))
                }, L.last = function(n, t, e) {
                    if (null != n) return null == t || e ? n[n.length - 1] : l.call(n, Math.max(n.length - t, 0))
                }, L.rest = L.tail = L.drop = function(n, t, e) {
                    return l.call(n, null == t || e ? 1 : t)
                }, L.compact = function(n) {
                    return L.filter(n, L.identity)
                };
                var T = function(n, t, e) {
                    return j(n, function(n) {
                        L.isArray(n) ? t ? a.apply(e, n) : T(n, t, e) : e.push(n)
                    }), e
                };
                L.flatten = function(n, t) {
                    return T(n, t, [])
                }, L.without = function(n) {
                    return L.difference(n, l.call(arguments, 1))
                }, L.uniq = L.unique = function(n, t, e, r) {
                    L.isFunction(t) && (r = e, e = t, t = !1);
                    var i = e ? L.map(n, e, r) : n,
                        o = [],
                        c = [];
                    return j(i, function(e, r) {
                        (t ? r && c[c.length - 1] === e : L.contains(c, e)) || (c.push(e), o.push(n[r]))
                    }), o
                }, L.union = function() {
                    return L.uniq(s.apply(o, arguments))
                }, L.intersection = function(n) {
                    var t = l.call(arguments, 1);
                    return L.filter(L.uniq(n), function(n) {
                        return L.every(t, function(t) {
                            return L.indexOf(t, n) >= 0
                        })
                    })
                }, L.difference = function(n) {
                    var t = s.apply(o, l.call(arguments, 1));
                    return L.filter(n, function(n) {
                        return !L.contains(t, n)
                    })
                }, L.zip = function() {
                    for (var n = l.call(arguments), t = L.max(L.pluck(n, "length")), e = new Array(t), r = 0; r < t; r++) e[r] = L.pluck(n, "" + r);
                    return e
                }, L.object = function(n, t) {
                    if (null == n) return {};
                    for (var e = {}, r = 0, i = n.length; r < i; r++) t ? e[n[r]] = t[r] : e[n[r][0]] = n[r][1];
                    return e
                }, L.indexOf = function(n, t, e) {
                    if (null == n) return -1;
                    var r = 0,
                        i = n.length;
                    if (e) {
                        if ("number" != typeof e) return n[r = L.sortedIndex(n, t)] === t ? r : -1;
                        r = e < 0 ? Math.max(0, i + e) : e
                    }
                    if (x && n.indexOf === x) return n.indexOf(t, e);
                    for (; r < i; r++)
                        if (n[r] === t) return r;
                    return -1
                }, L.lastIndexOf = function(n, t, e) {
                    if (null == n) return -1;
                    var r = null != e;
                    if (m && n.lastIndexOf === m) return r ? n.lastIndexOf(t, e) : n.lastIndexOf(t);
                    for (var i = r ? e : n.length; i--;)
                        if (n[i] === t) return i;
                    return -1
                }, L.range = function(n, t, e) {
                    arguments.length <= 1 && (t = n || 0, n = 0), e = arguments[2] || 1;
                    for (var r = Math.max(Math.ceil((t - n) / e), 0), i = 0, o = new Array(r); i < r;) o[i++] = n, n += e;
                    return o
                }, L.bind = function(n, t) {
                    if (n.bind === k && k) return k.apply(n, l.call(arguments, 1));
                    var e = l.call(arguments, 2);
                    return function() {
                        return n.apply(t, e.concat(l.call(arguments)))
                    }
                }, L.partial = function(n) {
                    var t = l.call(arguments, 1);
                    return function() {
                        return n.apply(this, t.concat(l.call(arguments)))
                    }
                }, L.bindAll = function(n) {
                    var t = l.call(arguments, 1);
                    return 0 === t.length && (t = L.functions(n)), j(t, function(t) {
                        n[t] = L.bind(n[t], n)
                    }), n
                }, L.memoize = function(n, t) {
                    var e = {};
                    return t || (t = L.identity),
                        function() {
                            var r = t.apply(this, arguments);
                            return L.has(e, r) ? e[r] : e[r] = n.apply(this, arguments)
                        }
                }, L.delay = function(n, t) {
                    var e = l.call(arguments, 2);
                    return setTimeout(function() {
                        return n.apply(null, e)
                    }, t)
                }, L.defer = function(n) {
                    return L.delay.apply(L, [n, 1].concat(l.call(arguments, 1)))
                }, L.throttle = function(n, t, e) {
                    var r, i, o, c = null,
                        u = 0;
                    e || (e = {});
                    var a = function() {
                        u = new Date, c = null, o = n.apply(r, i)
                    };
                    return function() {
                        var l = new Date;
                        u || !1 !== e.leading || (u = l);
                        var s = t - (l - u);
                        return r = this, i = arguments, s <= 0 ? (clearTimeout(c), c = null, u = l, o = n.apply(r, i)) : c || !1 === e.trailing || (c = setTimeout(a, s)), o
                    }
                }, L.debounce = function(n, t, e) {
                    var r, i;
                    return function() {
                        var o = this,
                            c = arguments,
                            u = e && !r;
                        return clearTimeout(r), r = setTimeout(function() {
                            r = null, e || (i = n.apply(o, c))
                        }, t), u && (i = n.apply(o, c)), i
                    }
                }, L.once = function(n) {
                    var t, e = !1;
                    return function() {
                        return e ? t : (e = !0, t = n.apply(this, arguments), n = null, t)
                    }
                }, L.wrap = function(n, t) {
                    return function() {
                        var e = [n];
                        return a.apply(e, arguments), t.apply(this, e)
                    }
                }, L.compose = function() {
                    var n = arguments;
                    return function() {
                        for (var t = arguments, e = n.length - 1; e >= 0; e--) t = [n[e].apply(this, t)];
                        return t[0]
                    }
                }, L.after = function(n, t) {
                    return n <= 0 ? t() : function() {
                        if (--n < 1) return t.apply(this, arguments)
                    }
                }, L.keys = w || function(n) {
                    if (n !== Object(n)) throw new TypeError("Invalid object");
                    var t = [];
                    for (var e in n) L.has(n, e) && (t[t.length] = e);
                    return t
                }, L.values = function(n) {
                    var t = [];
                    for (var e in n) L.has(n, e) && t.push(n[e]);
                    return t
                }, L.pairs = function(n) {
                    var t = [];
                    for (var e in n) L.has(n, e) && t.push([e, n[e]]);
                    return t
                }, L.invert = function(n) {
                    var t = {};
                    for (var e in n) L.has(n, e) && (t[n[e]] = e);
                    return t
                }, L.functions = L.methods = function(n) {
                    var t = [];
                    for (var e in n) L.isFunction(n[e]) && t.push(e);
                    return t.sort()
                }, L.extend = function(n) {
                    return j(l.call(arguments, 1), function(t) {
                        if (t)
                            for (var e in t) n[e] = t[e]
                    }), n
                }, L.pick = function(n) {
                    var t = {},
                        e = s.apply(o, l.call(arguments, 1));
                    return j(e, function(e) {
                        e in n && (t[e] = n[e])
                    }), t
                }, L.omit = function(n) {
                    var t = {},
                        e = s.apply(o, l.call(arguments, 1));
                    for (var r in n) L.contains(e, r) || (t[r] = n[r]);
                    return t
                }, L.defaults = function(n) {
                    return j(l.call(arguments, 1), function(t) {
                        if (t)
                            for (var e in t) null == n[e] && (n[e] = t[e])
                    }), n
                }, L.clone = function(n) {
                    return L.isObject(n) ? L.isArray(n) ? n.slice() : L.extend({}, n) : n
                }, L.tap = function(n, t) {
                    return t(n), n
                };
                var F = function(n, t, e, r) {
                    if (n === t) return 0 !== n || 1 / n == 1 / t;
                    if (null == n || null == t) return n === t;
                    n instanceof L && (n = n._wrapped), t instanceof L && (t = t._wrapped);
                    var i = f.call(n);
                    if (i != f.call(t)) return !1;
                    switch (i) {
                        case "[object String]":
                            return n == String(t);
                        case "[object Number]":
                            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +n == +t;
                        case "[object RegExp]":
                            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
                    }
                    if ("object" != typeof n || "object" != typeof t) return !1;
                    for (var o = e.length; o--;)
                        if (e[o] == n) return r[o] == t;
                    e.push(n), r.push(t);
                    var c = 0,
                        u = !0;
                    if ("[object Array]" == i) {
                        if (u = (c = n.length) == t.length)
                            for (; c-- && (u = F(n[c], t[c], e, r)););
                    } else {
                        var a = n.constructor,
                            l = t.constructor;
                        if (a !== l && !(L.isFunction(a) && a instanceof a && L.isFunction(l) && l instanceof l)) return !1;
                        for (var s in n)
                            if (L.has(n, s) && (c++, !(u = L.has(t, s) && F(n[s], t[s], e, r)))) break;
                        if (u) {
                            for (s in t)
                                if (L.has(t, s) && !c--) break;
                            u = !c
                        }
                    }
                    return e.pop(), r.pop(), u
                };
                L.isEqual = function(n, t) {
                    return F(n, t, [], [])
                }, L.isEmpty = function(n) {
                    if (null == n) return !0;
                    if (L.isArray(n) || L.isString(n)) return 0 === n.length;
                    for (var t in n)
                        if (L.has(n, t)) return !1;
                    return !0
                }, L.isElement = function(n) {
                    return !(!n || 1 !== n.nodeType)
                }, L.isArray = S || function(n) {
                    return "[object Array]" == f.call(n)
                }, L.isObject = function(n) {
                    return n === Object(n)
                }, j(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
                    L["is" + n] = function(t) {
                        return f.call(t) == "[object " + n + "]"
                    }
                }), L.isArguments(arguments) || (L.isArguments = function(n) {
                    return !(!n || !L.has(n, "callee"))
                }), L.isFunction = function(n) {
                    return "function" == typeof n
                }, L.isFinite = function(n) {
                    return isFinite(n) && !isNaN(parseFloat(n))
                }, L.isNaN = function(n) {
                    return L.isNumber(n) && n != +n
                }, L.isBoolean = function(n) {
                    return !0 === n || !1 === n || "[object Boolean]" == f.call(n)
                }, L.isNull = function(n) {
                    return null === n
                }, L.isUndefined = function(n) {
                    return void 0 === n
                }, L.has = function(n, t) {
                    return p.call(n, t)
                }, L.noConflict = function() {
                    return e._ = r, this
                }, L.identity = function(n) {
                    return n
                }, L.times = function(n, t, e) {
                    for (var r = Array(n), i = 0; i < n; i++) r[i] = t.call(e, i);
                    return r
                }, L.random = function(n, t) {
                    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
                };
                var C = {
                    escape: {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "/": "&#x2F;"
                    }
                };
                C.unescape = L.invert(C.escape);
                var I = {
                    escape: new RegExp("[" + L.keys(C.escape).join("") + "]", "g"),
                    unescape: new RegExp("(" + L.keys(C.unescape).join("|") + ")", "g")
                };
                L.each(["escape", "unescape"], function(n) {
                    L[n] = function(t) {
                        return null == t ? "" : ("" + t).replace(I[n], function(t) {
                            return C[n][t]
                        })
                    }
                }), L.result = function(n, t) {
                    if (null == n) return null;
                    var e = n[t];
                    return L.isFunction(e) ? e.call(n) : e
                }, L.mixin = function(n) {
                    j(L.functions(n), function(t) {
                        var e = L[t] = n[t];
                        L.prototype[t] = function() {
                            var n = [this._wrapped];
                            return a.apply(n, arguments), q.call(this, e.apply(L, n))
                        }
                    })
                };
                var M = 0;
                L.uniqueId = function(n) {
                    var t = ++M + "";
                    return n ? n + t : t
                }, L.templateSettings = {
                    escape: /\{\{(?![&])(.+?)\}\}/g,
                    interpolate: /\{\{&(.+?)\}\}/g,
                    evaluate: /\{\[(?![&])(.+?)\]\}/g
                };
                var R = /(.)^/,
                    N = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "\t": "t",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                L.template = function(n, t, e) {
                    var r;
                    e = L.defaults({}, e, L.templateSettings);
                    var i = new RegExp([(e.escape || R).source, (e.interpolate || R).source, (e.evaluate || R).source].join("|") + "|$", "g"),
                        o = 0,
                        c = "__p+='";
                    n.replace(i, function(t, e, r, i, u) {
                        return c += n.slice(o, u).replace(D, function(n) {
                            return "\\" + N[n]
                        }), e && (c += "'+\n((__t=(" + e + "))==null?'':_.escape(__t))+\n'"), r && (c += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (c += "';\n" + i + "\n__p+='"), o = u + t.length, t
                    }), c += "';\n", e.variable || (c = "with(obj||{}){\n" + c + "}\n"), c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                    try {
                        r = new Function(e.variable || "obj", "_", c)
                    } catch (n) {
                        throw n.source = c, n
                    }
                    if (t) return r(t, L);
                    var u = function(n) {
                        return r.call(this, n, L)
                    };
                    return u.source = "function(" + (e.variable || "obj") + "){\n" + c + "}", u
                }, L.chain = function(n) {
                    return L(n).chain()
                };
                var q = function(n) {
                    return this._chain ? L(n).chain() : n
                };
                L.mixin(L), j(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
                    var t = o[n];
                    L.prototype[n] = function() {
                        var e = this._wrapped;
                        return t.apply(e, arguments), "shift" != n && "splice" != n || 0 !== e.length || delete e[0], q.call(this, e)
                    }
                }), j(["concat", "join", "slice"], function(n) {
                    var t = o[n];
                    L.prototype[n] = function() {
                        return q.call(this, t.apply(this._wrapped, arguments))
                    }
                }), L.extend(L.prototype, {
                    chain: function() {
                        return this._chain = !0, this
                    },
                    value: function() {
                        return this._wrapped
                    }
                })
            }).call(this)
        }
    }
]);